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
a[c]=function(){a[c]=function(){H.FI(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.te"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.te"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.te(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={rI:function rI(a){this.a=a},
qh:function(a){var t,s
t=a^48
if(t<=9)return t
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
vw:function(a,b,c,d){var t=new H.o0(a,b,c,[d])
t.hY(a,b,c,d)
return t},
h4:function(a,b,c,d){if(!!J.ar(a).$isP)return new H.i6(a,b,[c,d])
return new H.h3(a,b,[c,d])},
d0:function(){return new P.ca("No element")},
D8:function(){return new P.ca("Too many elements")},
uU:function(){return new P.ca("Too few elements")},
jg:function(a,b,c,d){if(c-b<=32)H.Eb(a,b,c,d)
else H.Ea(a,b,c,d)},
Eb:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.bm(a);t<=c;++t){r=s.m(a,t)
q=t
while(!0){if(!(q>b&&J.cs(d.$2(s.m(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.m(a,p))
q=p}s.i(a,q,r)}},
Ea:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.b.aH(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.b.aH(a3+a4,2)
p=q-t
o=q+t
n=J.bm(a2)
m=n.m(a2,s)
l=n.m(a2,p)
k=n.m(a2,q)
j=n.m(a2,o)
i=n.m(a2,r)
if(J.cs(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.cs(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.cs(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.cs(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.cs(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.cs(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.cs(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.cs(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.cs(a5.$2(j,i),0)){h=i
i=j
j=h}n.i(a2,s,m)
n.i(a2,q,k)
n.i(a2,r,i)
n.i(a2,p,n.m(a2,a3))
n.i(a2,o,n.m(a2,a4))
g=a3+1
f=a4-1
if(J.N(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=n.m(a2,e)
c=a5.$2(d,l)
b=J.ar(c)
if(b.T(c,0))continue
if(b.a7(c,0)){if(e!==g){n.i(a2,e,n.m(a2,g))
n.i(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.m(a2,f),l)
b=J.dj(c)
if(b.bC(c,0)){--f
continue}else{a=f-1
if(b.a7(c,0)){n.i(a2,e,n.m(a2,g))
a0=g+1
n.i(a2,g,n.m(a2,f))
n.i(a2,f,d)
f=a
g=a0
break}else{n.i(a2,e,n.m(a2,f))
n.i(a2,f,d)
f=a
break}}}}a1=!0}else{for(e=g;e<=f;++e){d=n.m(a2,e)
if(J.dk(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.m(a2,g))
n.i(a2,g,d)}++g}else if(J.cs(a5.$2(d,j),0))for(;!0;)if(J.cs(a5.$2(n.m(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.dk(a5.$2(n.m(a2,f),l),0)){n.i(a2,e,n.m(a2,g))
a0=g+1
n.i(a2,g,n.m(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.m(a2,f))
n.i(a2,f,d)}f=a
break}}a1=!1}b=g-1
n.i(a2,a3,n.m(a2,b))
n.i(a2,b,l)
b=f+1
n.i(a2,a4,n.m(a2,b))
n.i(a2,b,j)
H.jg(a2,a3,g-2,a5)
H.jg(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.N(a5.$2(n.m(a2,g),l),0);)++g
for(;J.N(a5.$2(n.m(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.m(a2,e)
if(J.N(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.m(a2,g))
n.i(a2,g,d)}++g}else if(J.N(a5.$2(d,j),0))for(;!0;)if(J.N(a5.$2(n.m(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.dk(a5.$2(n.m(a2,f),l),0)){n.i(a2,e,n.m(a2,g))
a0=g+1
n.i(a2,g,n.m(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.m(a2,f))
n.i(a2,f,d)}f=a
break}}H.jg(a2,g,f,a5)}else H.jg(a2,g,f,a5)},
kg:function kg(a){this.a=a},
P:function P(){},
es:function es(){},
o0:function o0(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
et:function et(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
h3:function h3(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
i6:function i6(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
iU:function iU(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
db:function db(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
bF:function bF(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eC:function eC(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
io:function io(){},
om:function om(){},
ht:function ht(){},
jE:function(a,b){var t=a.cs(b)
if(!u.globalState.d.cy)u.globalState.f.cF()
return t},
wu:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.ar(s).$isL)throw H.m(P.ea("Arguments to main must be a List: "+H.p(s)))
u.globalState=new H.pw(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$uf()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.p4(P.rM(null,H.eE),0)
r=P.O
s.z=new H.q(0,null,null,null,null,null,0,[r,H.fm])
s.ch=new H.q(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.pv()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.y8,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.Ey)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.a3(null,null,null,r)
p=new H.ff(0,null,!1)
o=new H.fm(s,new H.q(0,null,null,null,null,null,0,[r,H.ff]),q,u.createNewIsolate(),p,new H.dD(H.qx()),new H.dD(H.qx()),!1,!1,[],P.a3(null,null,null,null),null,null,!1,!0,P.a3(null,null,null,null))
q.h(0,0)
o.eD(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.ft(a,{func:1,args:[,]}))o.cs(new H.qy(t,a))
else if(H.ft(a,{func:1,args:[,,]}))o.cs(new H.qz(t,a))
else o.cs(a)
u.globalState.f.cF()},
Ey:function(a){var t=P.h0(["command","print","msg",a])
return new H.dz(!0,P.hC(null,P.O)).bc(t)},
ya:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.yb()
return},
yb:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.m(new P.aR("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.m(new P.aR('Cannot extract URI from "'+t+'"'))},
y8:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.eD(!0,[]).bI(b.data)
s=J.bm(t)
switch(s.m(t,"command")){case"start":u.globalState.b=s.m(t,"id")
r=s.m(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.m(t,"args")
o=new H.eD(!0,[]).bI(s.m(t,"msg"))
n=s.m(t,"isSpawnUri")
m=s.m(t,"startPaused")
l=new H.eD(!0,[]).bI(s.m(t,"replyTo"))
s=u.globalState.a++
k=P.O
j=P.a3(null,null,null,k)
i=new H.ff(0,null,!1)
h=new H.fm(s,new H.q(0,null,null,null,null,null,0,[k,H.ff]),j,u.createNewIsolate(),i,new H.dD(H.qx()),new H.dD(H.qx()),!1,!1,[],P.a3(null,null,null,null),null,null,!1,!0,P.a3(null,null,null,null))
j.h(0,0)
h.eD(0,i)
u.globalState.f.a.bF(new H.eE(h,new H.lz(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.cF()
break
case"spawn-worker":break
case"message":if(s.m(t,"port")!=null)J.fv(s.m(t,"port"),s.m(t,"msg"))
u.globalState.f.cF()
break
case"close":u.globalState.ch.aE(0,$.$get$ug().m(0,a))
a.terminate()
u.globalState.f.cF()
break
case"log":H.y7(s.m(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.h0(["command","print","msg",t])
k=new H.dz(!0,P.hC(null,P.O)).bc(k)
s.toString
self.postMessage(k)}else P.e6(s.m(t,"msg"))
break
case"error":throw H.m(s.m(t,"msg"))}},
y7:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.h0(["command","log","msg",a])
r=new H.dz(!0,P.hC(null,P.O)).bc(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.cj(q)
t=H.cT(q)
s=P.kA(t)
throw H.m(s)}},
y9:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.v8=$.v8+("_"+s)
$.v9=$.v9+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.fv(f,["spawned",new H.fn(s,r),q,t.r])
r=new H.lA(a,b,c,d,t)
if(e===!0){t.f9(q,q)
u.globalState.f.a.bF(new H.eE(t,r,"start isolate"))}else r.$0()},
Ek:function(a,b){var t=new H.og(!0,!1,null)
t.hZ(a,b)
return t},
ER:function(a){return new H.eD(!0,[]).bI(new H.dz(!1,P.hC(null,P.O)).bc(a))},
qy:function qy(a,b){this.a=a
this.b=b},
qz:function qz(a,b){this.a=a
this.b=b},
pw:function pw(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
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
fm:function fm(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx){var _=this
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
pr:function pr(a,b){this.a=a
this.b=b},
p4:function p4(a,b){this.a=a
this.b=b},
p5:function p5(a){this.a=a},
eE:function eE(a,b,c){this.a=a
this.b=b
this.c=c},
pv:function pv(){},
lz:function lz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lA:function lA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oS:function oS(){},
fn:function fn(b,a){this.b=b
this.a=a},
pz:function pz(a,b){this.a=a
this.b=b},
hG:function hG(b,c,a){this.b=b
this.c=c
this.a=a},
ff:function ff(a,b,c){this.a=a
this.b=b
this.c=c},
og:function og(a,b,c){this.a=a
this.b=b
this.c=c},
oh:function oh(a,b){this.a=a
this.b=b},
oi:function oi(a,b){this.a=a
this.b=b},
dD:function dD(a){this.a=a},
dz:function dz(a,b){this.a=a
this.b=b},
eD:function eD(a,b){this.a=a
this.b=b},
xu:function(){throw H.m(new P.aR("Cannot modify unmodifiable Map"))},
Fi:function(a){return u.types[a]},
wn:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.ar(a).$iscC},
p:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.cu(a)
if(typeof t!=="string")throw H.m(H.bL(a))
return t},
DL:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.n5(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
eu:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
rS:function(a,b){if(b==null)throw H.m(new P.bH(a,null,null))
return b.$1(a)},
dc:function(a,b,c){var t,s,r,q,p,o
H.F8(a)
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.rS(a,c)
if(3>=t.length)return H.B(t,3)
s=t[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.rS(a,c)}if(b<2||b>36)throw H.m(P.bJ(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.d.ap(q,o)|32)>r)return H.rS(a,c)}return parseInt(a,b)},
rU:function(a){var t,s,r,q,p,o,n,m
t=J.ar(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.V||!!J.ar(a).$iseA){p=C.G(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.d.ap(q,0)===36)q=C.d.bj(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.ts(H.jH(a),0,null),u.mangledGlobalNames)},
mY:function(a){return"Instance of '"+H.rU(a)+"'"},
Di:function(){if(!!self.location)return self.location.href
return},
v4:function(a){var t,s,r,q,p
t=a.length
if(t<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<t;r=q){q=r+500
p=q<t?q:t
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
Dn:function(a){var t,s,r,q
t=H.a([],[P.O])
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.bN)(a),++r){q=a[r]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.m(H.bL(q))
if(q<=65535)t.push(q)
else if(q<=1114111){t.push(55296+(C.b.bG(q-65536,10)&1023))
t.push(56320+(q&1023))}else throw H.m(H.bL(q))}return H.v4(t)},
vb:function(a){var t,s,r,q
for(t=a.length,s=0;r=a.length,s<r;r===t||(0,H.bN)(a),++s){q=a[s]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.m(H.bL(q))
if(q<0)throw H.m(H.bL(q))
if(q>65535)return H.Dn(a)}return H.v4(a)},
Do:function(a,b,c){var t,s,r,q
if(typeof c!=="number")return c.kO()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
if(r<c)q=r
else q=c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
rV:function(a){var t
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.b.bG(t,10))>>>0,56320|t&1023)}}throw H.m(P.bJ(a,0,1114111,null,null))},
cR:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
v7:function(a){return a.b?H.cR(a).getUTCFullYear()+0:H.cR(a).getFullYear()+0},
v6:function(a){return a.b?H.cR(a).getUTCMonth()+1:H.cR(a).getMonth()+1},
v5:function(a){return a.b?H.cR(a).getUTCDate()+0:H.cR(a).getDate()+0},
Dj:function(a){return a.b?H.cR(a).getUTCHours()+0:H.cR(a).getHours()+0},
Dl:function(a){return a.b?H.cR(a).getUTCMinutes()+0:H.cR(a).getMinutes()+0},
Dm:function(a){return a.b?H.cR(a).getUTCSeconds()+0:H.cR(a).getSeconds()+0},
Dk:function(a){return a.b?H.cR(a).getUTCMilliseconds()+0:H.cR(a).getMilliseconds()+0},
rT:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.m(H.bL(a))
return a[b]},
va:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.m(H.bL(a))
a[b]=c},
aK:function(a){throw H.m(H.bL(a))},
B:function(a,b){if(a==null)J.ct(a)
throw H.m(H.c6(a,b))},
c6:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.dl(!0,b,"index",null)
t=J.ct(a)
if(!(b<0)){if(typeof t!=="number")return H.aK(t)
s=b>=t}else s=!0
if(s)return P.d_(b,a,"index",null,t)
return P.hl(b,"index",null)},
bL:function(a){return new P.dl(!0,a,null,null)},
tc:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.m(H.bL(a))
return a},
F8:function(a){if(typeof a!=="string")throw H.m(H.bL(a))
return a},
m:function(a){var t
if(a==null)a=new P.hg()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.wv})
t.name=""}else t.toString=H.wv
return t},
wv:function(){return J.cu(this.dartException)},
bv:function(a){throw H.m(a)},
bN:function(a){throw H.m(new P.bX(a))},
dQ:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.oj(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
ok:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
vE:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
rK:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.lO(a,s,t?null:b.receiver)},
cj:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.qA(a)
if(a==null)return
if(a instanceof H.i7)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.bG(r,16)&8191)===10)switch(q){case 438:return t.$1(H.rK(H.p(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.p(s)+" (Error "+q+")"
return t.$1(new H.iY(p,null))}}if(a instanceof TypeError){o=$.$get$vy()
n=$.$get$vz()
m=$.$get$vA()
l=$.$get$vB()
k=$.$get$vF()
j=$.$get$vG()
i=$.$get$vD()
$.$get$vC()
h=$.$get$vI()
g=$.$get$vH()
f=o.br(s)
if(f!=null)return t.$1(H.rK(s,f))
else{f=n.br(s)
if(f!=null){f.method="call"
return t.$1(H.rK(s,f))}else{f=m.br(s)
if(f==null){f=l.br(s)
if(f==null){f=k.br(s)
if(f==null){f=j.br(s)
if(f==null){f=i.br(s)
if(f==null){f=l.br(s)
if(f==null){f=h.br(s)
if(f==null){f=g.br(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.iY(s,f==null?null:f.method))}}return t.$1(new H.ol(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.ji()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.dl(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.ji()
return a},
cT:function(a){var t
if(a instanceof H.i7)return a.b
if(a==null)return new H.jA(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.jA(a,null)},
FB:function(a){if(a==null||typeof a!='object')return J.dB(a)
else return H.eu(a)},
wh:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
Fr:function(a,b,c,d,e,f,g){switch(c){case 0:return H.jE(b,new H.qn(a))
case 1:return H.jE(b,new H.qo(a,d))
case 2:return H.jE(b,new H.qp(a,d,e))
case 3:return H.jE(b,new H.qq(a,d,e,f))
case 4:return H.jE(b,new H.qr(a,d,e,f,g))}throw H.m(P.kA("Unsupported number of arguments for wrapped closure"))},
hL:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.Fr)
a.$identity=t
return t},
xr:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.ar(c).$isL){t.$reflectionInfo=c
r=H.DL(t).r}else r=c
q=d?Object.create(new H.nH().constructor.prototype):Object.create(new H.fA(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.dE
$.dE=J.bO(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.tO(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.Fi,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.tN:H.qM
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.m("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.tO(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
xo:function(a,b,c,d){var t=H.qM
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
tO:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.xq(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.xo(s,!q,t,b)
if(s===0){q=$.dE
$.dE=J.bO(q,1)
o="self"+H.p(q)
q="return function(){var "+o+" = this."
p=$.fB
if(p==null){p=H.k9("self")
$.fB=p}return new Function(q+H.p(p)+";return "+o+"."+H.p(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.dE
$.dE=J.bO(q,1)
n+=H.p(q)
q="return function("+n+"){return this."
p=$.fB
if(p==null){p=H.k9("self")
$.fB=p}return new Function(q+H.p(p)+"."+H.p(t)+"("+n+");}")()},
xp:function(a,b,c,d){var t,s
t=H.qM
s=H.tN
switch(b?-1:a){case 0:throw H.m(new H.nd("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
xq:function(a,b){var t,s,r,q,p,o,n,m
t=H.xm()
s=$.tM
if(s==null){s=H.k9("receiver")
$.tM=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.xp(q,!o,r,b)
if(q===1){s="return function(){return this."+H.p(t)+"."+H.p(r)+"(this."+H.p(s)+");"
o=$.dE
$.dE=J.bO(o,1)
return new Function(s+H.p(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.p(t)+"."+H.p(r)+"(this."+H.p(s)+", "+m+");"
o=$.dE
$.dE=J.bO(o,1)
return new Function(s+H.p(o)+"}")()},
te:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.ar(c).$isL){c.fixed$length=Array
t=c}else t=c
return H.xr(a,b,t,!!d,e,f)},
qM:function(a){return a.a},
tN:function(a){return a.c},
xm:function(){var t=$.fB
if(t==null){t=H.k9("self")
$.fB=t}return t},
k9:function(a){var t,s,r,q,p
t=new H.fA("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
FE:function(a,b){var t=J.bm(b)
throw H.m(H.xn(H.rU(a),t.N(b,3,t.gp(b))))},
ch:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.ar(a)[b]
else t=!0
if(t)return a
H.FE(a,b)},
wf:function(a){var t=J.ar(a)
return"$S" in t?t.$S():null},
ft:function(a,b){var t
if(a==null)return!1
t=H.wf(a)
return t==null?!1:H.tr(t,b)},
xn:function(a,b){return new H.ke("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
FI:function(a){throw H.m(new P.km(a))},
qx:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
wj:function(a){return u.getIsolateTag(a)},
c1:function(a){return new H.dx(a,null)},
a:function(a,b){a.$ti=b
return a},
jH:function(a){if(a==null)return
return a.$ti},
wk:function(a,b){return H.tz(a["$as"+H.p(b)],H.jH(a))},
as:function(a,b,c){var t=H.wk(a,b)
return t==null?null:t[c]},
M:function(a,b){var t=H.jH(a)
return t==null?null:t[b]},
dA:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.ts(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.p(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.dA(t,b)
return H.EV(a,b)}return"unknown-reified-type"},
EV:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.dA(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.dA(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.dA(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.Fe(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.dA(l[j],b)+(" "+H.p(j))}q+="}"}return"("+q+") => "+t},
ts:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.dg("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.S=p+", "
o=a[s]
if(o!=null)q=!1
p=t.S+=H.dA(o,c)}return q?"":"<"+t.v(0)+">"},
hN:function(a){var t,s
if(a instanceof H.eM){t=H.wf(a)
if(t!=null)return H.dA(t,null)}s=J.ar(a).constructor.builtin$cls
if(a==null)return s
return s+H.ts(a.$ti,0,null)},
tz:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
eH:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.jH(a)
s=J.ar(a)
if(s[b]==null)return!1
return H.wa(H.tz(s[d],t),c)},
wa:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.cU(a[s],b[s]))return!1
return!0},
d6:function(a,b,c){return a.apply(b,H.wk(b,c))},
td:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="bd"||b.builtin$cls==="dw"
if(b==null)return!0
t=H.jH(a)
a=J.ar(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.tr(r.apply(a,null),b)}return H.cU(s,b)},
cU:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="dw")return!0
if('func' in b)return H.tr(a,b)
if('func' in a)return b.builtin$cls==="FO"||b.builtin$cls==="bd"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.dA(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.wa(H.tz(o,t),r)},
w9:function(a,b,c){var t,s,r,q,p
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
s=a.length
r=b.length
if(c){if(s<r)return!1}else if(s!==r)return!1
for(q=0;q<r;++q){t=a[q]
p=b[q]
if(!(H.cU(t,p)||H.cU(p,t)))return!1}return!0},
F2:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.cU(p,o)||H.cU(o,p)))return!1}return!0},
tr:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.cU(t,s)||H.cU(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.w9(r,q,!1))return!1
if(!H.w9(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.cU(i,h)||H.cU(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.cU(i,h)||H.cU(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.cU(i,h)||H.cU(h,i)))return!1}}return H.F2(a.named,b.named)},
FY:function(a){var t=$.tl
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
FX:function(a){return H.eu(a)},
FW:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Fw:function(a){var t,s,r,q,p,o
t=$.tl.$1(a)
s=$.qe[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.qm[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.w8.$2(a,t)
if(t!=null){s=$.qe[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.qm[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.tu(r)
$.qe[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.qm[t]=r
return r}if(p==="-"){o=H.tu(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.wq(a,r)
if(p==="*")throw H.m(new P.jm(t))
if(u.leafTags[t]===true){o=H.tu(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.wq(a,r)},
wq:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.qu(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
tu:function(a){return J.qu(a,!1,null,!!a.$iscC)},
Fy:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.qu(t,!1,null,!!t.$iscC)
else return J.qu(t,c,null,null)},
Fp:function(){if(!0===$.tq)return
$.tq=!0
H.Fq()},
Fq:function(){var t,s,r,q,p,o,n,m
$.qe=Object.create(null)
$.qm=Object.create(null)
H.Fo()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.wr.$1(p)
if(o!=null){n=H.Fy(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
Fo:function(){var t,s,r,q,p,o,n
t=C.W()
t=H.fr(C.X,H.fr(C.Y,H.fr(C.F,H.fr(C.F,H.fr(C.a_,H.fr(C.Z,H.fr(C.a0(C.G),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.tl=new H.qj(p)
$.w8=new H.qk(o)
$.wr=new H.ql(n)},
fr:function(a,b){return a(b)||b},
uW:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.m(new P.bH("Illegal RegExp pattern ("+String(q)+")",a,null))},
FG:function(a,b,c){var t
if(typeof b==="string")return a.indexOf(b,c)>=0
else{t=J.wz(b,C.d.bj(a,c))
t=t.ga2(t)
return!t}},
bM:function(a,b,c){var t,s,r,q
if(typeof b==="string")if(b==="")if(a==="")return c
else{t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))
else if(b instanceof H.iS){q=b.geT()
q.lastIndex=0
return a.replace(q,c.replace(/\$/g,"$$$$"))}else{if(b==null)H.bv(H.bL(b))
throw H.m("String.replaceAll(Pattern) UNIMPLEMENTED")}},
F0:function(a){return a},
FH:function(a,b,c,d){var t,s,r,q,p,o
t=new H.oL(b,a,0,null)
s=0
r=""
for(;t.A();){q=t.d
p=q.b
o=p.index
r=r+H.p(H.w0().$1(C.d.N(a,s,o)))+H.p(c.$1(q))
s=o+p[0].length}t=r+H.p(H.w0().$1(C.d.bj(a,s)))
return t.charCodeAt(0)==0?t:t},
kj:function kj(){},
kk:function kk(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
n5:function n5(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
oj:function oj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iY:function iY(a,b){this.a=a
this.b=b},
lO:function lO(a,b,c){this.a=a
this.b=b
this.c=c},
ol:function ol(a){this.a=a},
i7:function i7(a,b){this.a=a
this.b=b},
qA:function qA(a){this.a=a},
jA:function jA(a,b){this.a=a
this.b=b},
qn:function qn(a){this.a=a},
qo:function qo(a,b){this.a=a
this.b=b},
qp:function qp(a,b,c){this.a=a
this.b=b
this.c=c},
qq:function qq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qr:function qr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eM:function eM(){},
o8:function o8(){},
nH:function nH(){},
fA:function fA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ke:function ke(a){this.a=a},
nd:function nd(a){this.a=a},
dx:function dx(a,b){this.a=a
this.b=b},
q:function q(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
lN:function lN(a){this.a=a},
lM:function lM(a){this.a=a},
m0:function m0(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
m1:function m1(a,$ti){this.a=a
this.$ti=$ti},
m2:function m2(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qj:function qj(a){this.a=a},
qk:function qk(a){this.a=a},
ql:function ql(a){this.a=a},
iS:function iS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
py:function py(a,b){this.a=a
this.b=b},
oL:function oL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jj:function jj(a,b,c){this.a=a
this.b=b
this.c=c},
pQ:function pQ(a,b,c){this.a=a
this.b=b
this.c=c},
pR:function pR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
w_:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.m(P.ea("Invalid length "+H.p(a)))
return a},
EU:function(a){return a},
Dd:function(a){return new Int8Array(H.EU(a))},
h7:function h7(){},
fa:function fa(){},
mr:function mr(){},
iV:function iV(){},
h8:function h8(){},
ha:function ha(){},
hc:function hc(){},
h9:function h9(){},
hb:function hb(){},
hd:function hd(){},
ms:function ms(){},
mt:function mt(){},
mu:function mu(){},
mv:function mv(){},
mw:function mw(){},
mx:function mx(){},
my:function my(){},
iW:function iW(){},
he:function he(){},
Fe:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
tx:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ar:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.iQ.prototype
return J.iP.prototype}if(typeof a=="string")return J.eq.prototype
if(a==null)return J.iR.prototype
if(typeof a=="boolean")return J.lL.prototype
if(a.constructor==Array)return J.ep.prototype
if(typeof a!="object"){if(typeof a=="function")return J.er.prototype
return a}if(a instanceof P.bd)return a
return J.qf(a)},
qu:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
qf:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.tq==null){H.Fp()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.m(new P.jm("Return interceptor for "+H.p(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$rJ()]
if(p!=null)return p
p=H.Fw(a)
if(p!=null)return p
if(typeof a=="function")return C.a1
s=Object.getPrototypeOf(a)
if(s==null)return C.M
if(s===Object.prototype)return C.M
if(typeof q=="function"){Object.defineProperty(q,$.$get$rJ(),{value:C.z,enumerable:false,writable:true,configurable:true})
return C.z}return C.z},
bm:function(a){if(typeof a=="string")return J.eq.prototype
if(a==null)return a
if(a.constructor==Array)return J.ep.prototype
if(typeof a!="object"){if(typeof a=="function")return J.er.prototype
return a}if(a instanceof P.bd)return a
return J.qf(a)},
di:function(a){if(a==null)return a
if(a.constructor==Array)return J.ep.prototype
if(typeof a!="object"){if(typeof a=="function")return J.er.prototype
return a}if(a instanceof P.bd)return a
return J.qf(a)},
dj:function(a){if(typeof a=="number")return J.f5.prototype
if(a==null)return a
if(!(a instanceof P.bd))return J.eA.prototype
return a},
hM:function(a){if(typeof a=="number")return J.f5.prototype
if(typeof a=="string")return J.eq.prototype
if(a==null)return a
if(!(a instanceof P.bd))return J.eA.prototype
return a},
e5:function(a){if(typeof a=="string")return J.eq.prototype
if(a==null)return a
if(!(a instanceof P.bd))return J.eA.prototype
return a},
aW:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.er.prototype
return a}if(a instanceof P.bd)return a
return J.qf(a)},
bO:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.hM(a).ao(a,b)},
N:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ar(a).T(a,b)},
tC:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.dj(a).bO(a,b)},
cs:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.dj(a).bC(a,b)},
dk:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.dj(a).a7(a,b)},
eI:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.hM(a).aU(a,b)},
wx:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.dj(a).aP(a,b)},
ck:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.wn(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bm(a).m(a,b)},
qB:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.wn(a,a[u.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.di(a).i(a,b,c)},
wy:function(a,b,c,d){return J.aW(a).iV(a,b,c,d)},
wz:function(a,b){return J.e5(a).iX(a,b)},
qC:function(a,b,c){return J.dj(a).a1(a,b,c)},
jI:function(a){return J.aW(a).aR(a)},
tD:function(a,b){return J.hM(a).bd(a,b)},
qD:function(a,b){return J.bm(a).a5(a,b)},
jJ:function(a,b,c){return J.bm(a).fj(a,b,c)},
cz:function(a,b,c,d){return J.aW(a).jq(a,b,c,d)},
qE:function(a,b){return J.di(a).a6(a,b)},
wA:function(a,b,c,d){return J.di(a).cw(a,b,c,d)},
jK:function(a){return J.dj(a).bx(a)},
tE:function(a){return J.aW(a).gj4(a)},
wB:function(a){return J.aW(a).gcr(a)},
fu:function(a){return J.aW(a).gbl(a)},
wC:function(a){return J.aW(a).ge5(a)},
tF:function(a){return J.di(a).gX(a)},
dB:function(a){return J.ar(a).gab(a)},
e7:function(a){return J.aW(a).gbf(a)},
jL:function(a){return J.bm(a).ga2(a)},
wD:function(a){return J.bm(a).gjT(a)},
cV:function(a){return J.aW(a).gb5(a)},
bP:function(a){return J.di(a).gR(a)},
ct:function(a){return J.bm(a).gp(a)},
cE:function(a){return J.aW(a).gH(a)},
wE:function(a){return J.aW(a).gka(a)},
wF:function(a){return J.aW(a).gfI(a)},
wG:function(a){return J.aW(a).gke(a)},
wH:function(a){return J.aW(a).gki(a)},
wI:function(a){return J.aW(a).gkx(a)},
wJ:function(a){return J.ar(a).gac(a)},
wK:function(a){return J.aW(a).ghb(a)},
tG:function(a){return J.aW(a).gaV(a)},
jM:function(a){return J.aW(a).gez(a)},
wL:function(a){return J.aW(a).gkE(a)},
cF:function(a){return J.aW(a).ga3(a)},
wM:function(a,b){return J.aW(a).cI(a,b)},
wN:function(a,b){return J.bm(a).bq(a,b)},
hO:function(a,b,c,d,e){return J.aW(a).fC(a,b,c,d,e)},
tH:function(a,b){return J.di(a).b7(a,b)},
wO:function(a){return J.di(a).kq(a)},
wP:function(a,b,c,d){return J.aW(a).ks(a,b,c,d)},
wQ:function(a,b,c){return J.e5(a).kv(a,b,c)},
wR:function(a,b,c){return J.e5(a).kw(a,b,c)},
fv:function(a,b){return J.aW(a).cK(a,b)},
tI:function(a,b){return J.aW(a).scr(a,b)},
wS:function(a,b){return J.aW(a).sju(a,b)},
wT:function(a,b){return J.aW(a).saq(a,b)},
fw:function(a,b){return J.aW(a).saV(a,b)},
jN:function(a,b){return J.aW(a).sdu(a,b)},
wU:function(a,b){return J.aW(a).saO(a,b)},
wV:function(a,b){return J.aW(a).sa3(a,b)},
wW:function(a,b){return J.aW(a).bD(a,b)},
wX:function(a,b){return J.di(a).ey(a,b)},
wY:function(a,b){return J.e5(a).hy(a,b)},
e8:function(a,b){return J.e5(a).bj(a,b)},
qF:function(a){return J.dj(a).l(a)},
wZ:function(a){return J.di(a).aN(a)},
qG:function(a){return J.e5(a).kG(a)},
x_:function(a,b){return J.dj(a).bN(a,b)},
cu:function(a){return J.ar(a).v(a)},
qH:function(a){return J.e5(a).kI(a)},
tJ:function(a,b){return J.di(a).b9(a,b)},
a0:function a0(){},
lL:function lL(){},
iR:function iR(){},
fY:function fY(){},
mR:function mR(){},
eA:function eA(){},
er:function er(){},
ep:function ep($ti){this.$ti=$ti},
rH:function rH($ti){this.$ti=$ti},
fy:function fy(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
f5:function f5(){},
iQ:function iQ(){},
iP:function iP(){},
eq:function eq(){}},P={
Eo:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.F3()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.hL(new P.oO(t),1)).observe(s,{childList:true})
return new P.oN(t,s,r)}else if(self.setImmediate!=null)return P.F4()
return P.F5()},
Ep:function(a){++u.globalState.f.b
self.scheduleImmediate(H.hL(new P.oP(a),0))},
Eq:function(a){++u.globalState.f.b
self.setImmediate(H.hL(new P.oQ(a),0))},
Er:function(a){P.t1(C.D,a)},
w1:function(a,b){if(H.ft(a,{func:1,args:[P.dw,P.dw]})){b.toString
return a}else{b.toString
return a}},
ES:function(a,b,c){$.b7.toString
a.bk(b,c)},
vP:function(a,b){var t,s,r
b.a=1
try{a.fU(new P.pe(b),new P.pf(b))}catch(r){t=H.cj(r)
s=H.cT(r)
P.ws(new P.pg(b,t,s))}},
pd:function(a,b){var t,s,r
for(;a.giz();)a=a.c
t=a.gdH()
s=b.c
if(t){b.c=null
r=b.cV(s)
b.a=a.a
b.c=a.c
P.fl(b,r)}else{b.a=2
b.c=a
a.eY(s)}},
fl:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.fu(p)
n=p.gbs()
s.toString
P.jF(null,null,s,o,n)}return}for(;b.gdK()!=null;b=m){m=b.a
b.a=null
P.fl(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.gfq()||b.gfp()){k=b.giQ()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.fu(p)
n=p.gbs()
s.toString
P.jF(null,null,s,o,n)
return}j=$.b7
if(j==null?k!=null:j!==k)$.b7=k
else j=null
if(b.gfp())new P.pl(t,r,q,b).$0()
else if(s){if(b.gfq())new P.pk(r,b,l).$0()}else if(b.gjG())new P.pj(t,r,b).$0()
if(j!=null)$.b7=j
s=r.b
if(!!J.ar(s).$isdN){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.cV(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.pd(s,i)
return}}i=b.b
b=i.cU()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
EX:function(){var t,s
for(;t=$.fp,t!=null;){$.hI=null
s=t.b
$.fp=s
if(s==null)$.hH=null
t.a.$0()}},
F_:function(){$.t9=!0
try{P.EX()}finally{$.hI=null
$.t9=!1
if($.fp!=null)$.$get$t5().$1(P.wc())}},
w7:function(a){var t=new P.jt(a,null)
if($.fp==null){$.hH=t
$.fp=t
if(!$.t9)$.$get$t5().$1(P.wc())}else{$.hH.b=t
$.hH=t}},
EZ:function(a){var t,s,r
t=$.fp
if(t==null){P.w7(a)
$.hI=$.hH
return}s=new P.jt(a,null)
r=$.hI
if(r==null){s.b=t
$.hI=s
$.fp=s}else{s.b=r.b
r.b=s
$.hI=s
if(s.b==null)$.hH=s}},
ws:function(a){var t=$.b7
if(C.h===t){P.fq(null,null,C.h,a)
return}t.toString
P.fq(null,null,t,t.dS(a,!0))},
EY:function(a,b,c){var t,s,r,q,p,o,n
try{b.$1(a.$0())}catch(o){t=H.cj(o)
s=H.cT(o)
$.b7.toString
r=null
if(r==null)c.$2(t,s)
else{n=J.fu(r)
q=n
p=r.gbs()
c.$2(q,p)}}},
EP:function(a,b,c,d){var t=a.cY()
if(!!J.ar(t).$isdN&&t!==$.$get$fS())t.de(new P.q3(b,c,d))
else b.bk(c,d)},
EQ:function(a,b){return new P.q2(a,b)},
q4:function(a,b,c){var t=a.cY()
if(!!J.ar(t).$isdN&&t!==$.$get$fS())t.de(new P.q5(b,c))
else b.bQ(c)},
Et:function(a,b,c,d,e,f,g){var t,s
t=$.b7
s=e?1:0
s=new P.hx(a,null,null,null,null,t,s,null,null,[f,g])
s.i0(b,c,d,e,g)
s.i3(a,b,c,d,e,f,g)
return s},
EO:function(a,b,c){$.b7.toString
a.cN(b,c)},
El:function(a,b){var t=$.b7
if(t===C.h){t.toString
return P.t1(a,b)}return P.t1(a,t.dS(b,!0))},
t1:function(a,b){var t=C.b.aH(a.a,1000)
return H.Ek(t<0?0:t,b)},
En:function(){return $.b7},
jF:function(a,b,c,d,e){var t={}
t.a=d
P.EZ(new P.qa(t,e))},
w2:function(a,b,c,d){var t,s
s=$.b7
if(s===c)return d.$0()
$.b7=c
t=s
try{s=d.$0()
return s}finally{$.b7=t}},
w4:function(a,b,c,d,e){var t,s
s=$.b7
if(s===c)return d.$1(e)
$.b7=c
t=s
try{s=d.$1(e)
return s}finally{$.b7=t}},
w3:function(a,b,c,d,e,f){var t,s
s=$.b7
if(s===c)return d.$2(e,f)
$.b7=c
t=s
try{s=d.$2(e,f)
return s}finally{$.b7=t}},
fq:function(a,b,c,d){var t=C.h!==c
if(t)d=c.dS(d,!(!t||!1))
P.w7(d)},
oO:function oO(a){this.a=a},
oN:function oN(a,b,c){this.a=a
this.b=b
this.c=c},
oP:function oP(a){this.a=a},
oQ:function oQ(a){this.a=a},
ju:function ju(){},
oM:function oM(a,$ti){this.a=a
this.$ti=$ti},
jw:function jw(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
cy:function cy(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
pa:function pa(a,b){this.a=a
this.b=b},
pi:function pi(a,b){this.a=a
this.b=b},
pe:function pe(a){this.a=a},
pf:function pf(a){this.a=a},
pg:function pg(a,b,c){this.a=a
this.b=b
this.c=c},
pc:function pc(a,b){this.a=a
this.b=b},
ph:function ph(a,b){this.a=a
this.b=b},
pb:function pb(a,b,c){this.a=a
this.b=b
this.c=c},
pl:function pl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pm:function pm(a){this.a=a},
pk:function pk(a,b,c){this.a=a
this.b=b
this.c=c},
pj:function pj(a,b,c){this.a=a
this.b=b
this.c=c},
jt:function jt(a,b){this.a=a
this.b=b},
d4:function d4(){},
nN:function nN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nL:function nL(a,b){this.a=a
this.b=b},
nM:function nM(a,b){this.a=a
this.b=b},
nO:function nO(a){this.a=a},
nV:function nV(a){this.a=a},
nW:function nW(a,b){this.a=a
this.b=b},
nT:function nT(a,b){this.a=a
this.b=b},
nU:function nU(a){this.a=a},
nX:function nX(a,b){this.a=a
this.b=b},
nY:function nY(a,b){this.a=a
this.b=b},
nR:function nR(a,b,c){this.a=a
this.b=b
this.c=c},
nS:function nS(a){this.a=a},
nP:function nP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nQ:function nQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nK:function nK(){},
dh:function dh(){},
oU:function oU(a,b,c){this.a=a
this.b=b
this.c=c},
oT:function oT(a){this.a=a},
jv:function jv(){},
oZ:function oZ(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
p0:function p0(b,c,a){this.b=b
this.c=c
this.a=a},
p_:function p_(){},
pA:function pA(){},
pB:function pB(a,b){this.a=a
this.b=b},
pP:function pP(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
q3:function q3(a,b,c){this.a=a
this.b=b
this.c=c},
q2:function q2(a,b){this.a=a
this.b=b},
q5:function q5(a,b){this.a=a
this.b=b},
hw:function hw(){},
hx:function hx(x,y,a,b,c,d,e,f,r,$ti){var _=this
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
px:function px(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
eK:function eK(a,b){this.a=a
this.b=b},
q1:function q1(){},
qa:function qa(a,b){this.a=a
this.b=b},
pD:function pD(){},
pE:function pE(a,b){this.a=a
this.b=b},
pF:function pF(a,b){this.a=a
this.b=b},
pG:function pG(a,b){this.a=a
this.b=b},
Eu:function(a,b){var t=a[b]
return t===a?null:t},
t7:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
t6:function(){var t=Object.create(null)
P.t7(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
A:function(a,b,c){return H.wh(a,new H.q(0,null,null,null,null,null,0,[b,c]))},
cK:function(a,b){return new H.q(0,null,null,null,null,null,0,[a,b])},
rL:function(){return new H.q(0,null,null,null,null,null,0,[null,null])},
h0:function(a){return H.wh(a,new H.q(0,null,null,null,null,null,0,[null,null]))},
hC:function(a,b){return new P.jz(0,null,null,null,null,null,0,[a,b])},
Ex:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
n:function(a,b,c,d,e){return new P.po(0,null,null,null,null,[d,e])},
rG:function(a,b,c){var t,s
if(P.ta(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$hJ()
s.push(a)
try{P.EW(a,t)}finally{if(0>=s.length)return H.B(s,-1)
s.pop()}s=P.vu(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
fX:function(a,b,c){var t,s,r
if(P.ta(a))return b+"..."+c
t=new P.dg(b)
s=$.$get$hJ()
s.push(a)
try{r=t
r.S=P.vu(r.gS(),a,", ")}finally{if(0>=s.length)return H.B(s,-1)
s.pop()}s=t
s.S=s.gS()+c
s=t.gS()
return s.charCodeAt(0)==0?s:s},
ta:function(a){var t,s
for(t=0;s=$.$get$hJ(),t<s.length;++t)if(a===s[t])return!0
return!1},
EW:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.bP(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.A())return
q=H.p(t.gJ())
b.push(q)
s+=q.length+2;++r}if(!t.A()){if(r<=5)return
if(0>=b.length)return H.B(b,-1)
p=b.pop()
if(0>=b.length)return H.B(b,-1)
o=b.pop()}else{n=t.gJ();++r
if(!t.A()){if(r<=4){b.push(H.p(n))
return}p=H.p(n)
if(0>=b.length)return H.B(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gJ();++r
for(;t.A();n=m,m=l){l=t.gJ();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.B(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.p(n)
p=H.p(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.B(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
a3:function(a,b,c,d){return new P.jy(0,null,null,null,null,null,0,[d])},
iT:function(a,b){var t,s
t=P.a3(null,null,null,b)
for(s=J.bP(a);s.A();)t.h(0,s.gJ())
return t},
uY:function(a){var t,s,r
t={}
if(P.ta(a))return"{...}"
s=new P.dg("")
try{$.$get$hJ().push(a)
r=s
r.S=r.gS()+"{"
t.a=!0
a.d8(0,new P.ma(t,s))
t=s
t.S=t.gS()+"}"}finally{t=$.$get$hJ()
if(0>=t.length)return H.B(t,-1)
t.pop()}t=s.gS()
return t.charCodeAt(0)==0?t:t},
rM:function(a,b){var t=new P.m3(null,0,0,0,[b])
t.hS(a,b)
return t},
po:function po(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
pp:function pp(a){this.a=a},
jx:function jx(a,$ti){this.a=a
this.$ti=$ti},
hA:function hA(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
jz:function jz(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
jy:function jy(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
pt:function pt(a,b,c){this.a=a
this.b=b
this.c=c},
dS:function dS(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
jn:function jn(a,$ti){this.a=a
this.$ti=$ti},
pq:function pq(){},
dO:function dO(){},
iN:function iN(){},
h1:function h1(){},
fb:function fb(){},
c3:function c3(){},
pW:function pW(){},
m9:function m9(){},
hu:function hu(a,$ti){this.a=a
this.$ti=$ti},
ma:function ma(a,b){this.a=a
this.b=b},
m3:function m3(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
pu:function pu(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
ns:function ns(){},
nr:function nr(){},
tL:function(a,b,c,d,e,f){if(C.e.dh(f,4)!==0)throw H.m(new P.bH("Invalid base64 padding, padded length must be multiple of four, is "+H.p(f),a,c))
if(d+e!==f)throw H.m(new P.bH("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.m(new P.bH("Invalid base64 padding, more than two '=' characters",a,b))},
k3:function k3(a){this.a=a},
k4:function k4(a){this.a=a},
fE:function fE(){},
fF:function fF(){},
ky:function ky(){},
ot:function ot(a){this.a=a},
ou:function ou(a){this.a=a},
pY:function pY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
q_:function q_(a){this.a=a},
pZ:function pZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Ef:function(a,b,c){var t,s,r,q
if(b<0)throw H.m(P.bJ(b,0,J.ct(a),null,null))
t=c==null
if(!t&&c<b)throw H.m(P.bJ(c,b,J.ct(a),null,null))
s=J.bP(a)
for(r=0;r<b;++r)if(!s.A())throw H.m(P.bJ(b,0,r,null,null))
q=[]
if(t)for(;s.A();)q.push(s.gJ())
else for(r=b;r<c;++r){if(!s.A())throw H.m(P.bJ(c,b,r,null,null))
q.push(s.gJ())}return H.vb(q)},
vu:function(a,b,c){var t=J.bP(b)
if(!t.A())return a
if(c.length===0){do a+=H.p(t.gJ())
while(t.A())}else{a+=H.p(t.gJ())
for(;t.A();)a=a+c+H.p(t.gJ())}return a},
xt:function(a,b){return J.tD(a,b)},
xw:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.p(t)
if(t>=10)return s+"00"+H.p(t)
return s+"000"+H.p(t)},
xx:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
i0:function(a){if(a>=10)return""+a
return"0"+a},
u_:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.cu(a)
if(typeof a==="string")return JSON.stringify(a)
return P.xH(a)},
xH:function(a){var t=J.ar(a)
if(!!t.$iseM)return t.v(a)
return H.mY(a)},
ea:function(a){return new P.dl(!1,null,null,a)},
fx:function(a,b,c){return new P.dl(!0,a,b,c)},
qI:function(a){return new P.dl(!1,null,a,"Must not be null")},
vf:function(a){return new P.hk(null,null,!1,null,null,a)},
hl:function(a,b,c){return new P.hk(null,null,!0,a,b,"Value not in range")},
bJ:function(a,b,c,d,e){return new P.hk(b,c,!0,a,d,"Invalid value")},
dd:function(a,b,c,d,e,f){var t
if(typeof a!=="number")return H.aK(a)
if(!(0>a)){if(typeof c!=="number")return H.aK(c)
t=a>c}else t=!0
if(t)throw H.m(P.bJ(a,0,c,"start",f))
if(b!=null){if(typeof b!=="number")return H.aK(b)
if(!(a>b)){if(typeof c!=="number")return H.aK(c)
t=b>c}else t=!0
if(t)throw H.m(P.bJ(b,a,c,"end",f))
return b}return c},
d_:function(a,b,c,d,e){var t=e!=null?e:J.ct(b)
return new P.lw(b,t,!0,a,c,"Index out of range")},
kA:function(a){return new P.p9(a)},
bc:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.bP(a);s.A();)t.push(s.gJ())
if(b)return t
t.fixed$length=Array
return t},
Da:function(a,b,c,d){var t,s,r
t=H.a([],[d])
C.a.sp(t,a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=t.length)return H.B(t,s)
t[s]=r}return t},
f:function(a,b){var t=P.bc(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
e6:function(a){H.tx(H.p(a))},
bU:function(a,b,c){return new H.iS(a,H.uW(a,c,!0,!1),null,null)},
vv:function(a,b,c){var t,s
if(typeof a==="object"&&a!==null&&a.constructor===Array){t=a.length
c=P.dd(b,c,t,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a7()
s=c<t}else s=!0
return H.vb(s?C.a.ck(a,b,c):a)}if(!!J.ar(a).$ishe)return H.Do(a,b,P.dd(b,c,a.length,null,null,null))
return P.Ef(a,b,c)},
vK:function(){var t=H.Di()
if(t!=null)return P.vL(t,0,null)
throw H.m(new P.aR("'Uri.base' is not supported"))},
vL:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
c=a.length
t=b+5
if(c>=t){s=((C.d.ap(a,b+4)^58)*3|C.d.ap(a,b)^100|C.d.ap(a,b+1)^97|C.d.ap(a,b+2)^116|C.d.ap(a,b+3)^97)>>>0
if(s===0)return P.vJ(b>0||c<c?C.d.N(a,b,c):a,5,null).gfY()
else if(s===32)return P.vJ(C.d.N(a,t,c),0,null).gfY()}r=H.a(new Array(8),[P.O])
r[0]=0
q=b-1
r[1]=q
r[2]=q
r[7]=q
r[3]=b
r[4]=b
r[5]=c
r[6]=c
if(P.w5(a,b,c,0,r)>=14)r[7]=c
p=r[1]
if(typeof p!=="number")return p.bO()
if(p>=b)if(P.w5(a,b,p,20,r)===20)r[7]=p
q=r[2]
if(typeof q!=="number")return q.ao()
o=q+1
n=r[3]
m=r[4]
l=r[5]
k=r[6]
if(typeof k!=="number")return k.a7()
if(typeof l!=="number")return H.aK(l)
if(k<l)l=k
if(typeof m!=="number")return m.a7()
if(m<o||m<=p)m=l
if(typeof n!=="number")return n.a7()
if(n<o)n=m
q=r[7]
if(typeof q!=="number")return q.a7()
j=q<b
if(j)if(o>p+3){i=null
j=!1}else{q=n>b
if(q&&n+1===m){i=null
j=!1}else{if(!(l<c&&l===m+2&&C.d.bi(a,"..",m)))h=l>m+2&&C.d.bi(a,"/..",l-3)
else h=!0
if(h){i=null
j=!1}else{if(p===b+4)if(C.d.bi(a,"file",b)){if(o<=b){if(!C.d.bi(a,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a=g+C.d.N(a,m,c)
p-=b
t=s-b
l+=t
k+=t
c=a.length
b=0
o=7
n=7
m=7}else if(m===l)if(b===0&&!0){a=C.d.bg(a,m,l,"/");++l;++k;++c}else{a=C.d.N(a,b,m)+"/"+C.d.N(a,l,c)
p-=b
o-=b
n-=b
m-=b
t=1-b
l+=t
k+=t
c=a.length
b=0}i="file"}else if(C.d.bi(a,"http",b)){if(q&&n+3===m&&C.d.bi(a,"80",n+1))if(b===0&&!0){a=C.d.bg(a,n,m,"")
m-=3
l-=3
k-=3
c-=3}else{a=C.d.N(a,b,n)+C.d.N(a,m,c)
p-=b
o-=b
n-=b
t=3+b
m-=t
l-=t
k-=t
c=a.length
b=0}i="http"}else i=null
else if(p===t&&C.d.bi(a,"https",b)){if(q&&n+4===m&&C.d.bi(a,"443",n+1))if(b===0&&!0){a=C.d.bg(a,n,m,"")
m-=4
l-=4
k-=4
c-=3}else{a=C.d.N(a,b,n)+C.d.N(a,m,c)
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
if(j){if(b>0||c<a.length){a=C.d.N(a,b,c)
p-=b
o-=b
n-=b
m-=b
l-=b
k-=b}return new P.pO(a,p,o,n,m,l,k,i,null)}return P.EA(a,b,c,p,o,n,m,l,k,i)},
vN:function(a,b){return C.a.jx(a.split("&"),P.rL(),new P.or(b))},
Em:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=new P.oo(a)
s=H.w_(4)
r=new Uint8Array(s)
for(q=b,p=q,o=0;q<c;++q){n=C.d.ad(a,q)
if(n!==46){if((n^48)>9)t.$2("invalid character",q)}else{if(o===3)t.$2("IPv4 address should contain exactly 4 parts",q)
m=H.dc(C.d.N(a,p,q),null,null)
if(J.cs(m,255))t.$2("each part must be in the range 0..255",p)
l=o+1
if(o>=s)return H.B(r,o)
r[o]=m
p=q+1
o=l}}if(o!==3)t.$2("IPv4 address should contain exactly 4 parts",c)
m=H.dc(C.d.N(a,p,c),null,null)
if(J.cs(m,255))t.$2("each part must be in the range 0..255",p)
if(o>=s)return H.B(r,o)
r[o]=m
return r},
vM:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a0==null)a0=a.length
t=new P.op(a)
s=new P.oq(a,t)
if(a.length<2)t.$1("address is too short")
r=[]
for(q=b,p=q,o=!1,n=!1;q<a0;++q){m=C.d.ad(a,q)
if(m===58){if(q===b){++q
if(C.d.ad(a,q)!==58)t.$2("invalid start colon.",q)
p=q}if(q===p){if(o)t.$2("only one wildcard `::` is allowed",q)
r.push(-1)
o=!0}else r.push(s.$2(p,q))
p=q+1}else if(m===46)n=!0}if(r.length===0)t.$1("too few parts")
l=p===a0
k=J.N(C.a.gby(r),-1)
if(l&&!k)t.$2("expected a part after last `:`",a0)
if(!l)if(!n)r.push(s.$2(p,a0))
else{j=P.Em(a,p,a0)
i=j[0]
if(typeof i!=="number")return i.bE()
h=j[1]
if(typeof h!=="number")return H.aK(h)
r.push((i<<8|h)>>>0)
h=j[2]
if(typeof h!=="number")return h.bE()
i=j[3]
if(typeof i!=="number")return H.aK(i)
r.push((h<<8|i)>>>0)}if(o){if(r.length>7)t.$1("an address with a wildcard must have less than 7 parts")}else if(r.length!==8)t.$1("an address without a wildcard must contain exactly 8 parts")
g=new Uint8Array(16)
for(q=0,f=0;q<r.length;++q){e=r[q]
if(J.ar(e).T(e,-1)){d=9-r.length
for(c=0;c<d;++c){if(f<0||f>=16)return H.B(g,f)
g[f]=0
i=f+1
if(i>=16)return H.B(g,i)
g[i]=0
f+=2}}else{if(typeof e!=="number")return e.ho()
i=C.e.bG(e,8)
if(f<0||f>=16)return H.B(g,f)
g[f]=i
i=f+1
if(i>=16)return H.B(g,i)
g[i]=e&255
f+=2}}return g},
EA:function(a,b,c,d,e,f,g,h,i,j){var t,s,r,q,p,o,n
if(j==null)if(d>b)j=P.EI(a,b,d)
else{if(d===b)P.hF(a,b,"Invalid empty scheme")
j=""}if(e>b){t=d+3
s=t<e?P.EJ(a,t,e-1):""
r=P.EE(a,e,f,!1)
if(typeof f!=="number")return f.ao()
q=f+1
if(typeof g!=="number")return H.aK(g)
p=q<g?P.EG(H.dc(C.d.N(a,q,g),null,new P.qd(a,f)),j):null}else{s=""
r=null
p=null}o=P.EF(a,g,h,null,j,r!=null)
if(typeof h!=="number")return h.a7()
n=h<i?P.EH(a,h+1,i,null):null
return new P.jC(j,s,r,p,o,n,i<c?P.ED(a,i+1,c):null,null,null,null,null,null)},
vU:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
hF:function(a,b,c){throw H.m(new P.bH(c,a,b))},
EG:function(a,b){if(a!=null&&J.N(a,P.vU(b)))return
return a},
EE:function(a,b,c,d){var t,s
if(b===c)return""
if(C.d.ad(a,b)===91){if(typeof c!=="number")return c.aP()
t=c-1
if(C.d.ad(a,t)!==93)P.hF(a,b,"Missing end `]` to match `[` in host")
P.vM(a,b+1,t)
return C.d.N(a,b,c).toLowerCase()}if(typeof c!=="number")return H.aK(c)
s=b
for(;s<c;++s)if(C.d.ad(a,s)===58){P.vM(a,b,c)
return"["+a+"]"}return P.EL(a,b,c)},
EL:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
if(typeof c!=="number")return H.aK(c)
t=b
s=t
r=null
q=!0
for(;t<c;){p=C.d.ad(a,t)
if(p===37){o=P.vZ(a,t,!0)
n=o==null
if(n&&q){t+=3
continue}if(r==null)r=new P.dg("")
m=C.d.N(a,s,t)
l=r.S+=!q?m.toLowerCase():m
if(n){o=C.d.N(a,t,t+3)
k=3}else if(o==="%"){o="%25"
k=1}else k=3
r.S=l+o
t+=k
s=t
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.B(C.J,n)
n=(C.J[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(r==null)r=new P.dg("")
if(s<t){r.S+=C.d.N(a,s,t)
s=t}q=!1}++t}else{if(p<=93){n=p>>>4
if(n>=8)return H.B(C.o,n)
n=(C.o[n]&1<<(p&15))!==0}else n=!1
if(n)P.hF(a,t,"Invalid character")
else{if((p&64512)===55296&&t+1<c){j=C.d.ad(a,t+1)
if((j&64512)===56320){p=65536|(p&1023)<<10|j&1023
k=2}else k=1}else k=1
if(r==null)r=new P.dg("")
m=C.d.N(a,s,t)
r.S+=!q?m.toLowerCase():m
r.S+=P.vV(p)
t+=k
s=t}}}}if(r==null)return C.d.N(a,b,c)
if(s<c){m=C.d.N(a,s,c)
r.S+=!q?m.toLowerCase():m}n=r.S
return n.charCodeAt(0)==0?n:n},
EI:function(a,b,c){var t,s,r,q
if(b===c)return""
if(!P.vX(C.d.ap(a,b)))P.hF(a,b,"Scheme not starting with alphabetic character")
for(t=b,s=!1;t<c;++t){r=C.d.ap(a,t)
if(r<128){q=r>>>4
if(q>=8)return H.B(C.q,q)
q=(C.q[q]&1<<(r&15))!==0}else q=!1
if(!q)P.hF(a,t,"Illegal scheme character")
if(65<=r&&r<=90)s=!0}a=C.d.N(a,b,c)
return P.EB(s?a.toLowerCase():a)},
EB:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
EJ:function(a,b,c){var t=P.fo(a,b,c,C.a6,!1)
return t==null?C.d.N(a,b,c):t},
EF:function(a,b,c,d,e,f){var t,s,r
t=e==="file"
s=t||f
r=P.fo(a,b,c,C.K,!1)
if(r==null)r=C.d.N(a,b,c)
if(r.length===0){if(t)return"/"}else if(s&&!C.d.aW(r,"/"))r="/"+r
return P.EK(r,e,f)},
EK:function(a,b,c){var t=b.length===0
if(t&&!c&&!C.d.aW(a,"/"))return P.EM(a,!t||c)
return P.EN(a)},
EH:function(a,b,c,d){var t=P.fo(a,b,c,C.p,!1)
return t==null?C.d.N(a,b,c):t},
ED:function(a,b,c){var t=P.fo(a,b,c,C.p,!1)
return t==null?C.d.N(a,b,c):t},
vZ:function(a,b,c){var t,s,r,q,p,o
t=b+2
if(t>=a.length)return"%"
s=C.d.ad(a,b+1)
r=C.d.ad(a,t)
q=H.qh(s)
p=H.qh(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){t=C.b.bG(o,4)
if(t>=8)return H.B(C.I,t)
t=(C.I[t]&1<<(o&15))!==0}else t=!1
if(t)return H.rV(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.d.N(a,b,b+3).toUpperCase()
return},
vV:function(a){var t,s,r,q,p,o,n,m
if(a<128){t=new Array(3)
t.fixed$length=Array
t[0]=37
t[1]=C.d.ap("0123456789ABCDEF",a>>>4)
t[2]=C.d.ap("0123456789ABCDEF",a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}q=3*r
t=new Array(q)
t.fixed$length=Array
for(p=0;--r,r>=0;s=128){o=C.b.iJ(a,6*r)&63|s
if(p>=q)return H.B(t,p)
t[p]=37
n=p+1
m=C.d.ap("0123456789ABCDEF",o>>>4)
if(n>=q)return H.B(t,n)
t[n]=m
m=p+2
n=C.d.ap("0123456789ABCDEF",o&15)
if(m>=q)return H.B(t,m)
t[m]=n
p+=3}}return P.vv(t,0,null)},
fo:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=!e
s=J.e5(a)
r=b
q=r
p=null
while(!0){if(typeof r!=="number")return r.a7()
if(typeof c!=="number")return H.aK(c)
if(!(r<c))break
c$0:{o=s.ad(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.B(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.vZ(a,r,!1)
if(m==null){r+=3
break c$0}if("%"===m){m="%25"
l=1}else l=3}else{if(t)if(o<=93){n=o>>>4
if(n>=8)return H.B(C.o,n)
n=(C.o[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.hF(a,r,"Invalid character")
m=null
l=null}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.d.ad(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.vV(o)}}if(p==null)p=new P.dg("")
p.S+=C.d.N(a,q,r)
p.S+=H.p(m)
if(typeof l!=="number")return H.aK(l)
r+=l
q=r}}}if(p==null)return
if(typeof q!=="number")return q.a7()
if(q<c)p.S+=s.N(a,q,c)
t=p.S
return t.charCodeAt(0)==0?t:t},
vY:function(a){if(C.d.aW(a,"."))return!0
return C.d.bq(a,"/.")!==-1},
EN:function(a){var t,s,r,q,p,o,n
if(!P.vY(a))return a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bN)(s),++p){o=s[p]
if(J.N(o,"..")){n=t.length
if(n!==0){if(0>=n)return H.B(t,-1)
t.pop()
if(t.length===0)t.push("")}q=!0}else if("."===o)q=!0
else{t.push(o)
q=!1}}if(q)t.push("")
return C.a.b6(t,"/")},
EM:function(a,b){var t,s,r,q,p,o
if(!P.vY(a))return!b?P.vW(a):a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bN)(s),++p){o=s[p]
if(".."===o)if(t.length!==0&&!J.N(C.a.gby(t),"..")){if(0>=t.length)return H.B(t,-1)
t.pop()
q=!0}else{t.push("..")
q=!1}else if("."===o)q=!0
else{t.push(o)
q=!1}}s=t.length
if(s!==0)if(s===1){if(0>=s)return H.B(t,0)
s=J.jL(t[0])===!0}else s=!1
else s=!0
if(s)return"./"
if(q||J.N(C.a.gby(t),".."))t.push("")
if(!b){if(0>=t.length)return H.B(t,0)
s=P.vW(t[0])
if(0>=t.length)return H.B(t,0)
t[0]=s}return C.a.b6(t,"/")},
vW:function(a){var t,s,r,q
t=J.bm(a)
s=t.gp(a)
if(typeof s!=="number")return s.bO()
if(s>=2&&P.vX(t.ad(a,0))){r=1
while(!0){s=t.gp(a)
if(typeof s!=="number")return H.aK(s)
if(!(r<s))break
q=t.ad(a,r)
if(q===58)return C.d.N(a,0,r)+"%3A"+C.d.bj(a,r+1)
if(q<=127){s=q>>>4
if(s>=8)return H.B(C.q,s)
s=(C.q[s]&1<<(q&15))===0}else s=!0
if(s)break;++r}}return a},
EC:function(a,b){var t,s,r
for(t=0,s=0;s<2;++s){r=C.d.ap(a,b+s)
if(48<=r&&r<=57)t=t*16+r-48
else{r|=32
if(97<=r&&r<=102)t=t*16+r-87
else throw H.m(P.ea("Invalid URL encoding"))}}return t},
pX:function(a,b,c,d,e){var t,s,r,q,p,o
if(typeof c!=="number")return H.aK(c)
t=J.e5(a)
s=b
while(!0){if(!(s<c)){r=!0
break}q=t.ad(a,s)
if(q<=127)if(q!==37)p=e&&q===43
else p=!0
else p=!0
if(p){r=!1
break}++s}if(r){if(C.r!==d)p=!1
else p=!0
if(p)return t.N(a,b,c)
else o=new H.kg(t.N(a,b,c))}else{o=[]
for(s=b;s<c;++s){q=t.ad(a,s)
if(q>127)throw H.m(P.ea("Illegal percent encoding in URI"))
if(q===37){if(s+3>a.length)throw H.m(P.ea("Truncated URI"))
o.push(P.EC(a,s+1))
s+=2}else if(e&&q===43)o.push(32)
else o.push(q)}}return new P.ou(!1).je(o)},
vX:function(a){var t=a|32
return 97<=t&&t<=122},
vJ:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=[b-1]
s=J.bm(a)
r=b
q=-1
p=null
while(!0){o=s.gp(a)
if(typeof o!=="number")return H.aK(o)
if(!(r<o))break
c$0:{p=s.ad(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
break c$0}throw H.m(new P.bH("Invalid MIME type",a,r))}}++r}if(q<0&&r>b)throw H.m(new P.bH("Invalid MIME type",a,r))
for(;p!==44;){t.push(r);++r
n=-1
while(!0){o=s.gp(a)
if(typeof o!=="number")return H.aK(o)
if(!(r<o))break
p=s.ad(a,r)
if(p===61){if(n<0)n=r}else if(p===59||p===44)break;++r}if(n>=0)t.push(n)
else{m=C.a.gby(t)
if(p!==44||r!==m+7||!s.bi(a,"base64",m+1))throw H.m(new P.bH("Expecting '='",a,r))
break}}t.push(r)
o=r+1
if((t.length&1)===1)a=C.P.kc(a,o,s.gp(a))
else{l=P.fo(a,o,s.gp(a),C.p,!0)
if(l!=null)a=s.bg(a,o,s.gp(a),l)}return new P.on(a,t,c)},
ET:function(){var t,s,r,q,p
t=P.Da(22,new P.q7(),!0,P.e4)
s=new P.q6(t)
r=new P.q8()
q=new P.q9()
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
w5:function(a,b,c,d,e){var t,s,r,q,p,o
t=$.$get$w6()
for(s=b;s<c;++s){if(d<0||d>=t.length)return H.B(t,d)
r=t[d]
q=C.d.ap(a,s)^96
p=J.ck(r,q>95?31:q)
if(typeof p!=="number")return p.c1()
d=p&31
o=C.e.bG(p,5)
if(o>=8)return H.B(e,o)
e[o]=s}return d},
cM:function cM(){},
bD:function bD(){},
fG:function fG(a,b){this.a=a
this.b=b},
U:function U(){},
dm:function dm(a){this.a=a},
ku:function ku(){},
kv:function kv(){},
eh:function eh(){},
hg:function hg(){},
dl:function dl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hk:function hk(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
lw:function lw(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
aR:function aR(a){this.a=a},
jm:function jm(a){this.a=a},
ca:function ca(a){this.a=a},
bX:function bX(a){this.a=a},
mK:function mK(){},
ji:function ji(){},
km:function km(a){this.a=a},
p9:function p9(a){this.a=a},
bH:function bH(a,b,c){this.a=a
this.b=b
this.c=c},
kB:function kB(a,cR,$ti){this.a=a
this.cR=cR
this.$ti=$ti},
O:function O(){},
D:function D(){},
iO:function iO(){},
L:function L(){},
dw:function dw(){},
ci:function ci(){},
bd:function bd(){},
f8:function f8(){},
e3:function e3(){},
v:function v(){},
dg:function dg(S){this.S=S},
eB:function eB(){},
or:function or(a){this.a=a},
oo:function oo(a){this.a=a},
op:function op(a){this.a=a},
oq:function oq(a,b){this.a=a
this.b=b},
jC:function jC(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
qd:function qd(a,b){this.a=a
this.b=b},
on:function on(a,b,c){this.a=a
this.b=b
this.c=c},
q7:function q7(){},
q6:function q6(a){this.a=a},
q8:function q8(){},
q9:function q9(){},
pO:function pO(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
oY:function oY(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
wd:function(a){var t,s
t=J.ar(a)
if(!!t.$isf0){s=t.gag(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.jB(a.data,a.height,a.width)},
F9:function(a){if(a instanceof P.jB)return{data:a.a,height:a.b,width:a.c}
return a},
qN:function(){var t=$.tV
if(t==null){t=J.jJ(window.navigator.userAgent,"Opera",0)
$.tV=t}return t},
tX:function(){var t=$.tW
if(t==null){t=P.qN()!==!0&&J.jJ(window.navigator.userAgent,"WebKit",0)
$.tW=t}return t},
xy:function(){var t,s
t=$.tS
if(t!=null)return t
s=$.tT
if(s==null){s=J.jJ(window.navigator.userAgent,"Firefox",0)
$.tT=s}if(s)t="-moz-"
else{s=$.tU
if(s==null){s=P.qN()!==!0&&J.jJ(window.navigator.userAgent,"Trident/",0)
$.tU=s}if(s)t="-ms-"
else t=P.qN()===!0?"-o-":"-webkit-"}$.tS=t
return t},
jB:function jB(a,b,c){this.a=a
this.b=b
this.c=c},
Ez:function(a){var t=new P.pC(0,0)
t.i6(a)
return t},
ps:function ps(){},
pC:function pC(a,b){this.a=a
this.b=b},
jO:function jO(){},
e9:function e9(){},
kC:function kC(){},
kD:function kD(){},
kE:function kE(){},
kF:function kF(){},
kG:function kG(){},
kH:function kH(){},
kI:function kI(){},
kJ:function kJ(){},
kK:function kK(){},
kL:function kL(){},
kM:function kM(){},
kN:function kN(){},
kO:function kO(){},
kP:function kP(){},
kQ:function kQ(){},
kR:function kR(){},
le:function le(){},
lh:function lh(){},
ds:function ds(){},
dY:function dY(){},
lt:function lt(){},
d1:function d1(){},
lY:function lY(){},
iA:function iA(){},
iG:function iG(){},
mb:function mb(){},
mc:function mc(){},
d2:function d2(){},
mD:function mD(){},
iB:function iB(){},
iH:function iH(){},
mQ:function mQ(){},
n3:function n3(){},
hn:function hn(){},
o_:function o_(){},
c5:function c5(){},
o3:function o3(){},
o5:function o5(){},
ez:function ez(){},
od:function od(){},
os:function os(){},
ow:function ow(){},
hz:function hz(){},
pH:function pH(){},
pI:function pI(){},
pJ:function pJ(){},
dC:function dC(){},
e4:function e4(){},
n9:function n9(){}},W={
hV:function(a,b){var t=document.createElement("canvas")
if(b!=null)t.width=b
if(a!=null)t.height=a
return t},
xv:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
Es:function(a){var t=new W.oW(a,null)
t.i1(a)
return t},
xG:function(a,b,c){var t,s
t=document.body
s=(t&&C.A).b0(t,a,b,c)
s.toString
t=new H.bF(new W.cS(s),new W.qb(),[W.ai])
return t.gc2(t)},
fJ:function(a){var t,s,r
t="element tag unavailable"
try{s=J.wL(a)
if(typeof s==="string")t=a.tagName}catch(r){H.cj(r)}return t},
xR:function(a,b,c){return W.xS(a,null,null,b,null,null,null,c).eo(new W.lq())},
xS:function(a,b,c,d,e,f,g,h){var t,s,r,q
t=W.em
s=new P.cy(0,$.b7,null,[t])
r=new P.oM(s,[t])
q=new XMLHttpRequest()
C.U.kd(q,"GET",a,!0)
t=W.FS
W.dR(q,"load",new W.lr(r,q),!1,t)
W.dR(q,"error",r.gjb(),!1,t)
q.send()
return s},
ud:function(a){var t,s,r
s=document.createElement("input")
t=s
if(a!=null)try{J.wU(t,a)}catch(r){H.cj(r)}return t},
v1:function(a,b,c,d){var t=new Option(a,b,c,!1)
return t},
eF:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
vS:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
dR:function(a,b,c,d,e){var t=W.F1(new W.p8(c))
t=new W.p7(0,a,b,t,!1,[e])
t.i2(a,b,c,!1,e)
return t},
vQ:function(a){var t,s
t=document.createElement("a")
s=new W.pK(t,window.location)
s=new W.hB(s)
s.i5(a)
return s},
Ev:function(a,b,c,d){return!0},
Ew:function(a,b,c,d){var t,s,r,q,p
t=d.gfZ()
s=t.a
s.href=c
r=s.hostname
t=t.b
q=t.hostname
if(r==null?q==null:r===q){q=s.port
p=t.port
if(q==null?p==null:q===p){q=s.protocol
t=t.protocol
t=q==null?t==null:q===t}else t=!1}else t=!1
if(!t)if(r==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
vT:function(){var t=P.v
t=new W.pT(P.iT(C.u,t),P.a3(null,null,null,t),P.a3(null,null,null,t),P.a3(null,null,null,t),null)
t.i7(null,new H.db(C.u,new W.pU(),[H.M(C.u,0),null]),["TEMPLATE"],null)
return t},
F1:function(a){var t=$.b7
if(t===C.h)return a
return t.j7(a,!0)},
b2:function b2(){},
eJ:function eJ(){},
jR:function jR(){},
k5:function k5(){},
hR:function hR(){},
eL:function eL(){},
fD:function fD(){},
ed:function ed(){},
hW:function hW(){},
ee:function ee(){},
hY:function hY(){},
hZ:function hZ(){},
eN:function eN(){},
iv:function iv(){},
oW:function oW(a,b){this.a=a
this.b=b},
j_:function j_(){},
oX:function oX(){},
i_:function i_(){},
ko:function ko(){},
i1:function i1(){},
i2:function i2(){},
i3:function i3(){},
kp:function kp(){},
i4:function i4(){},
i5:function i5(){},
hy:function hy(a,$ti){this.a=a
this.$ti=$ti},
cA:function cA(){},
qb:function qb(){},
kx:function kx(){},
kz:function kz(){},
W:function W(){},
fK:function fK(){},
ld:function ld(){},
cp:function cp(){},
im:function im(){},
iw:function iw(){},
iC:function iC(){},
ir:function ir(){},
lj:function lj(){},
f_:function f_(){},
ix:function ix(){},
iD:function iD(){},
it:function it(){},
em:function em(){},
lq:function lq(){},
lr:function lr(a,b){this.a=a
this.b=b},
iu:function iu(){},
ls:function ls(){},
f0:function f0(){},
f1:function f1(){},
lx:function lx(){},
lQ:function lQ(){},
lS:function lS(){},
h_:function h_(){},
m4:function m4(){},
m8:function m8(){},
h5:function h5(){},
md:function md(){},
me:function me(){},
mf:function mf(){},
mg:function mg(){},
mi:function mi(){},
mj:function mj(){},
h6:function h6(){},
mz:function mz(){},
mA:function mA(){},
cS:function cS(a){this.a=a},
ai:function ai(){},
hf:function hf(){},
iy:function iy(){},
iE:function iE(){},
mI:function mI(){},
mJ:function mJ(){},
j5:function j5(){},
mL:function mL(){},
mN:function mN(){},
n_:function n_(){},
nm:function nm(){},
ho:function ho(){},
no:function no(){},
nt:function nt(){},
nv:function nv(){},
ny:function ny(){},
nC:function nC(){},
nD:function nD(){},
nZ:function nZ(){},
jl:function jl(){},
o6:function o6(){},
o7:function o7(){},
hs:function hs(){},
ob:function ob(){},
ov:function ov(){},
jr:function jr(){},
fk:function fk(){},
oV:function oV(){},
p1:function p1(){},
p2:function p2(){},
pn:function pn(){},
hD:function hD(){},
iz:function iz(){},
iF:function iF(){},
pL:function pL(){},
oR:function oR(){},
p3:function p3(a){this.a=a},
p6:function p6(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
hv:function hv(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
p7:function p7(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
p8:function p8(a){this.a=a},
hB:function hB(a){this.a=a},
dt:function dt(){},
iX:function iX(a){this.a=a},
mC:function mC(a){this.a=a},
mB:function mB(a,b,c){this.a=a
this.b=b
this.c=c},
hE:function hE(){},
pM:function pM(){},
pN:function pN(){},
pT:function pT(e,a,b,c,d){var _=this
_.e=e
_.a=a
_.b=b
_.c=c
_.d=d},
pU:function pU(){},
pS:function pS(){},
ip:function ip(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
e_:function e_(){},
pV:function pV(){},
pK:function pK(a,b){this.a=a
this.b=b},
jD:function jD(a){this.a=a},
q0:function q0(a){this.a=a}},T={hP:function hP(){},hQ:function hQ(){},k8:function k8(rx,ry,x1,x2,y1,y2,t,C,E,M,G,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.C=C
_.E=E
_.M=M
_.G=G
_.O=O
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
_.r2=r2},ka:function ka(rx,ry,x1,x2,y1,y2,t,C,E,M,G,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.C=C
_.E=E
_.M=M
_.G=G
_.O=O
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
_.r2=r2},kn:function kn(){},ln:function ln(rx,ry,x1,x2,y1,y2,t,C,E,M,G,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.C=C
_.E=E
_.M=M
_.G=G
_.O=O
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
vs:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[X.F,P.U]
s=A.a9
r=[P.v]
q=E.J
p=[q]
o=[A.cN]
n=new S.lR(0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,0.5,"Knight",new H.q(0,null,null,null,null,null,0,t),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,Q.G(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.af("Knight",3,!0,!1)
$.DS=n
n=P.f(H.a([new E.J($.cf,0.4,!1)],p),q)
n=new S.nn(["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,n,0.5,"Seer",new H.q(0,null,null,null,null,null,0,t),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,Q.G(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.af("Seer",6,!0,!1)
$.E2=n
n=new O.k2(["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],!1,!1,!1,!1,!0,!1,0.5,"Bard",new H.q(0,null,null,null,null,null,0,t),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,Q.G(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.af("Bard",9,!0,!1)
$.vn=n
n=new B.lo(0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,0.5,"Heir",new H.q(0,null,null,null,null,null,0,t),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,Q.G(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.af("Heir",8,!0,!1)
$.DR=n
n=new U.m7(["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,0.5,"Maid",new H.q(0,null,null,null,null,null,0,t),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,Q.G(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.af("Maid",0,!0,!1)
$.DV=n
n=new N.nb(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,0.5,"Rogue",new H.q(0,null,null,null,null,null,0,t),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,Q.G(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.af("Rogue",4,!0,!1)
$.DZ=n
n=new V.mM(0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,0.5,"Page",new H.q(0,null,null,null,null,null,0,t),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,Q.G(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.af("Page",1,!0,!1)
$.DX=n
n=new U.oe(["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,0.5,"Thief",new H.q(0,null,null,null,null,null,0,t),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,Q.G(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.af("Thief",7,!0,!1)
$.E4=n
n=P.f(H.a([new E.J($.cf,0.1,!1)],p),q)
n=new R.o4(["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,n,0.5,"Sylph",new H.q(0,null,null,null,null,null,0,t),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,Q.G(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.af("Sylph",5,!0,!1)
$.E3=n
n=new N.mZ(1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,0.5,"Prince",new H.q(0,null,null,null,null,null,0,t),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,Q.G(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.af("Prince",10,!0,!1)
$.DY=n
n=P.f(H.a([new E.J($.cf,0.1,!1)],p),q)
n=new M.oG(["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,n,0.5,"Witch",new H.q(0,null,null,null,null,null,0,t),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,Q.G(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.af("Witch",11,!0,!1)
$.vp=n
n=P.f(H.a([new E.J($.cf,0.4,!1)],p),q)
n=new S.m6(["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,n,0.5,"Mage",new H.q(0,null,null,null,null,null,0,t),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,Q.G(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.af("Mage",2,!0,!1)
$.DU=n
n=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],r)
m=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],r)
l=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],r)
k=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],r)
j=P.f(H.a([new E.J($.cf,3,!1),new E.J($.t_,-2,!1)],p),q)
n=new E.oy(n,m,l,k,!1,!0,!1,!1,!0,!1,j,0.5,"Waste",new H.q(0,null,null,null,null,null,0,t),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,Q.G(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.af("Waste",12,!1,!1)
$.vo=n
n=new Y.nk(["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,0.5,"Scout",new H.q(0,null,null,null,null,null,0,t),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,Q.G(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.af("Scout",13,!1,!1)
$.E0=n
n=P.f(H.a([new E.J($.cf,0.5,!1)],p),q)
n=new L.nl(["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,n,0.5,"Scribe",new H.q(0,null,null,null,null,null,0,t),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,Q.G(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.af("Scribe",15,!1,!1)
$.E1=n
n=P.f(H.a([new E.J($.cf,0.5,!1)],p),q)
n=new E.nh(["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,n,0.5,"Sage",new H.q(0,null,null,null,null,null,0,t),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,Q.G(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.af("Sage",14,!1,!1)
$.E_=n
n=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],r)
n=new Y.ll(n,!0,!1,!1,!1,!1,!0,0.5,"Guide",new H.q(0,null,null,null,null,null,0,t),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,Q.G(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.af("Guide",16,!1,!1)
$.DQ=n
n=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],r)
m=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],r)
l=P.f(H.a([new E.J($.cf,3,!1)],p),q)
n=new Y.lk(n,m,!1,!0,!1,!1,!0,!1,l,0.5,"Grace",new H.q(0,null,null,null,null,null,0,t),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,Q.G(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.af("Grace",17,!1,!1)
$.DP=n
n=P.f(H.a([new E.J($.cf,0.1,!1)],p),q)
n=new E.mn(["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,n,0.5,"Muse",new H.q(0,null,null,null,null,null,0,t),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,Q.G(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.af("Muse",18,!1,!1)
$.DW=n
n=Q.G(null,null,s)
m=P.f(H.a([new E.J($.cf,0.1,!1)],p),q)
n=new Z.m5(2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,n,m,0.5,"Lord",new H.q(0,null,null,null,null,null,0,t),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,Q.G(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.af("Lord",19,!1,!1)
$.DT=n
$.jf=T.DN("Null",255,!1,!0)
q=P.f(H.a([new E.J($.cf,1.5,!1),new E.J($.u,3,!1),new E.J($.cb,-0.5,!1)],p),q)
t=new Z.kb(["BROBLERONE","BROTEL RWANDA","BRO-YO MA"],["busting out, and I quote, 'the mad stunts all wicked up-ins'","trying to get hella pumped about houses or some noise","getting mud on their doll's dress or whatever"],["not actually playing the game, but giving it 1.5 out of 5 hats to keep it real","giving a shout out to their boy Dennis who was over the other day","helping their consorts live off the land, for big ups to Mother Earth, yo","getting so wasted. haha, I mean DAMN"],!1,!1,!1,!0,!0,!1,["Brother","Bored","Bugger","Badass","Bothersome"],q,0.1,2,0.5,"Bro",new H.q(0,null,null,null,null,null,0,t),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,Q.G(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
t.af("Bro",20,!1,!1)
$.DO=t},
vq:function(){var t=$.$get$e2()
t=t.gaF(t)
return new H.bF(t,new T.nf(),[H.as(t,"D",0)])},
vr:function(){var t=$.$get$e2()
t=t.gaF(t)
return new H.bF(t,new T.ng(),[H.as(t,"D",0)])},
hm:function(){var t=$.$get$e2()
t=t.gaF(t)
return new H.bF(t,new T.ne(),[H.as(t,"D",0)])},
E5:function(a){var t,s
t=$.$get$e2()
if(t.ga2(t))T.vs()
for(t=$.$get$e2(),t=t.gaF(t),t=t.gR(t);t.A();){s=t.gJ()
if(J.N(J.cE(s),a))return s}return $.jf},
DN:function(a,b,c,d){var t=[P.v]
t=new T.de(0.5,a,new H.q(0,null,null,null,null,null,0,[X.F,P.U]),null,null,b,c,d,!1,!1,!1,!1,!1,!1,Q.G(null,null,A.a9),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.J]),H.a([],[A.cN]),1)
t.af(a,b,c,d)
return t},
nf:function nf(){},
ng:function ng(){},
ne:function ne(){},
de:function de(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
bV:function bV(a,b){this.a=a
this.b=b},
xF:function(a,b){var t,s,r,q,p,o,n
if(T.fH())return
t=a.getContext("2d")
s=P.wd(t.getImageData(0,0,a.width,a.height))
for(r=J.aW(s),q=0;q<r.gag(s).length;q+=4){p=r.gag(s)
o=q+3
if(o>=p.length)return H.B(p,o)
if(p[o]>50){p=r.gag(s)
n=r.gag(s)
if(o>=n.length)return H.B(n,o)
n=C.e.bx(n[o]*b)
if(o>=p.length)return H.B(p,o)
p[o]=n}}C.t.ei(t,s,0,0)},
cY:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
if(T.fH())return
t=C.f.ar(a,"2d")
s=J.aW(t).es(t,0,0,a.width,a.height)
for(r=J.aW(s),q=J.bm(b),p=J.bm(c),o=0;o<r.gag(s).length;o+=4){n=r.gag(s)
if(o>=n.length)return H.B(n,o)
if(n[o]===q.m(b,0)){n=r.gag(s)
m=o+1
if(m>=n.length)return H.B(n,m)
if(n[m]===q.m(b,1)){n=r.gag(s)
m=o+2
if(m>=n.length)return H.B(n,m)
if(n[m]===q.m(b,2)){n=r.gag(s)
m=o+3
if(m>=n.length)return H.B(n,m)
m=n[m]===255
n=m}else n=!1}else n=!1}else n=!1
if(n){n=r.gag(s)
m=p.m(c,0)
if(o>=n.length)return H.B(n,o)
n[o]=m
m=r.gag(s)
n=o+1
l=p.m(c,1)
if(n>=m.length)return H.B(m,n)
m[n]=l
l=r.gag(s)
n=o+2
m=p.m(c,2)
if(n>=l.length)return H.B(l,n)
l[n]=m
m=r.gag(s)
n=o+3
if(n>=m.length)return H.B(m,n)
m[n]=d}}C.t.ei(t,s,0,0)},
ks:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(T.fH())return
t=C.f.ar(a,"2d")
s=J.aW(t).es(t,0,0,a.width,a.height)
for(r=J.aW(s),q=b.a,p=[H.M(q,0)],o=0;o<r.gag(s).length;o+=4){n=r.gag(s)
if(o>=n.length)return H.B(n,o)
n=n[o]
m=r.gag(s)
l=o+1
if(l>=m.length)return H.B(m,l)
m=m[l]
k=r.gag(s)
j=o+2
if(j>=k.length)return H.B(k,j)
k=k[j]
i=new A.cl(null,null,null,null,!0,0,0,0,!0,0,0,0)
i.b=C.e.a1(C.b.a1(n,0,255),0,255)
i.c=C.e.a1(C.b.a1(m,0,255),0,255)
i.d=C.e.a1(C.b.a1(k,0,255),0,255)
i.a=C.e.a1(C.b.a1(255,0,255),0,255)
for(n=new P.hA(q,q.cP(),0,null,p);n.A();){h=n.d
if(J.N(b.m(0,h),i)){g=c.m(0,h)
n=r.gag(s)
m=g.gkn()
if(o>=n.length)return H.B(n,o)
n[o]=m
m=r.gag(s)
n=g.c
if(l>=m.length)return H.B(m,l)
m[l]=n
n=r.gag(s)
m=g.d
if(j>=n.length)return H.B(n,j)
n[j]=m
break}}}C.t.ei(t,s,0,0)},
cX:function(a){var t,s,r
t="#"+H.bM(a,P.bU("\\.|\\/",!0,!1),"_")
s=document
if(s.querySelector(t)==null){r='<img id="'+H.bM(a,P.bU("\\.|\\/",!0,!1),"_")+'" src = "images/'+a+'" class="loadedimg">'
J.hO(s.querySelector("#image_staging"),"beforeend",r,C.k,null)}},
fI:function(a,b){var t,s,r
if(T.fH())return
t=C.f.ar(a,"2d")
T.cX(b)
s="#"+H.bM(b,P.bU("\\.|\\/",!0,!1),"_")
r=document.querySelector(s)
J.cz(t,r,0,0)},
fH:function(){if($.fs)return!0
return!1},
qO:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
if(T.fH())return
t=Q.v3(b.c,b.Y,b.W,b.bJ,b.ax,b.ce)
t.bX=!1
t.bK=b.bK
t.k3=b.k3
t.r1=b.r1
t.cx=!1
t.dx=b.dx
t.c=b.c
t.k4=b.k4
t.bZ=b.bZ
t.cb=b.cb
t.bU=!1
t.d2=!1
t.bV=!1
t.ca=b.ca
t.bp=b.bp
t.cc=b.cc
t.d5=!1
t.d6=!1
t.db=!1
t.aa=b.aa
t.b3=b.b3
t.bo=b.bo
t.bm=b.bm
t.Z=b.Z
t.aJ=b.aJ
t.aT=b.aT
t.bw=b.bw
t.bn=b.bn
t.b4=b.b4
t.x1=b.x1
t.rx=b.rx
t.c=b.c
t.ay=b.ay
t.az=b.az
t.sI(b)
c=a.getContext("2d")
c.imageSmoothingEnabled=!1
s=t.bp
if(s>3){c=C.f.ar(a,"2d")
T.cX("grimdark.png")
s="#"+H.bM("grimdark.png",P.bU("\\.|\\/",!0,!1),"_")
J.cz(c,document.querySelector(s),0,0)}if(t.c.av.jH(t))T.fI(a,t.W.gj6())
s=t.aa&&t.b3
if(s){t.W.gkJ()
c=C.f.ar(a,"2d")
r="Wings/wing"+H.p(t.b4.r)+".png"
T.cX(r)
s="#"+H.bM(r,P.bU("\\.|\\/",!0,!1),"_")
J.cz(c,document.querySelector(s),0,0)
q=A.dU(J.e8(t.Z,1))
T.cY(a,$.$get$vm(),q,255)
T.cY(a,$.$get$vk(),q,128)
T.cY(a,$.$get$vj(),q,128)}c=C.f.ar(a,"2d")
r="Hair/hair_back"+H.p(t.bm)+".png"
T.cX(r)
s="#"+H.bM(r,P.bU("\\.|\\/",!0,!1),"_")
p=document
J.cz(c,p.querySelector(s),0,0)
if(t.aa){T.cY(a,$.$get$jc(),A.dU(J.e8(t.aJ,1)),255)
T.cY(a,$.$get$jd(),A.dU(J.e8(t.Z,1)),255)}else{T.cY(a,$.$get$jc(),A.dU(J.e8(t.aJ,1)),255)
T.cY(a,$.$get$jd(),t.W.ga_().m(0,$.ao),255)}if(t.aa)if(J.N(t.Z,"#610061")||J.N(t.Z,"#99004d")){c=C.f.ar(a,"2d")
T.cX("fin2.png")
J.cz(c,p.querySelector("#"+H.bM("fin2.png",P.bU("\\.|\\/",!0,!1),"_")),0,0)}if(t.b3){c=C.f.ar(a,"2d")
r=T.xD(t)
T.cX(r)
J.cz(c,p.querySelector("#"+H.bM(r,P.bU("\\.|\\/",!0,!1),"_")),0,0)
if($.F6&&J.N(t.Y,$.vn))T.fI(a,"/Bodies/cod.png")
T.ks(a,$.$get$je(),t.W.ga_())
c=C.f.ar(a,"2d")
r=t.W.ghO()
T.cX(r)
J.cz(c,p.querySelector("#"+H.bM(r,P.bU("\\.|\\/",!0,!1),"_")),0,0)}else if(t.bo){r=T.xC(t)
T.cX(r)
o=p.querySelector("#"+H.bM(r,P.bU("\\.|\\/",!0,!1),"_"))
J.cz(C.f.ar(a,"2d"),o,0,0)
s=P.v
n=A.cl
m=P.O
l=new L.aj(P.n(null,null,null,s,n),P.n(null,null,null,m,n),P.n(null,null,null,s,m),P.n(null,null,null,m,s))
s=t.W.ga_().m(0,$.av)
l.j(0,$.ax,L.e(s),!0)
s=t.W.ga_().m(0,$.au)
l.j(0,$.aw,L.e(s),!0)
k=A.De(H.a([t.ax.ga_(),l],[A.hi]))
T.ks(a,$.$get$je(),k)}else{r=T.xE(t)
c=C.f.ar(a,"2d")
T.cX(r)
J.cz(c,p.querySelector("#"+H.bM(r,P.bU("\\.|\\/",!0,!1),"_")),0,0)
T.ks(a,$.$get$je(),t.W.ga_())}T.xA(a,t)
if($.wp)T.fI(a,"/Bodies/pen15.png")
if($.wg)if($.$get$wm().a.B()>0.9)T.fI(a,"/Bodies/face4.png")
else T.fI(a,"/Bodies/face"+H.p(t.x1)+".png")
c=C.f.ar(a,"2d")
r="Hair/hair"+H.p(t.bm)+".png"
T.cX(r)
J.cz(c,p.querySelector("#"+H.bM(r,P.bU("\\.|\\/",!0,!1),"_")),0,0)
if(t.aa){T.cY(a,$.$get$jc(),A.dU(J.e8(t.aJ,1)),255)
T.cY(a,$.$get$jd(),A.dU(J.e8(t.Z,1)),255)}else{T.cY(a,$.$get$jc(),A.dU(J.e8(t.aJ,1)),255)
T.cY(a,$.$get$jd(),t.W.ga_().m(0,$.ao),255)}if(t.aa)if(J.N(t.Z,"#610061")||J.N(t.Z,"#99004d")){c=C.f.ar(a,"2d")
T.cX("fin1.png")
J.cz(c,p.querySelector("#"+H.bM("fin1.png",P.bU("\\.|\\/",!0,!1),"_")),0,0)}s=t.b3
if(s){s=T.xB(t)
n=a.width
j=W.hV(a.height,n)
T.fI(j,s)
T.Fk().$2(j,t)
a.getContext("2d").drawImage(j,0,0)}s=t.bp
if(s>3)T.cY(a,$.$get$n4(),$.$get$vi(),255)
else if(t.aa)T.cY(a,$.$get$n4(),$.$get$vh(),255)
if(t.aa){c=C.f.ar(a,"2d")
r="Horns/left"+H.p(t.bw)+".png"
T.cX(r)
J.cz(c,p.querySelector("#"+H.bM(r,P.bU("\\.|\\/",!0,!1),"_")),0,0)
c=C.f.ar(a,"2d")
r="Horns/right"+H.p(t.bn)+".png"
T.cX(r)
J.cz(c,p.querySelector("#"+H.bM(r,P.bU("\\.|\\/",!0,!1),"_")),0,0)}s=J.N(t.W,$.qL)
if(s){s=$.u
s=t.a$.aI(s)
T.xF(a,1-s/(2000*$.u.r))}else t.c.av.f},
xA:function(a,b){},
xE:function(a){if($.jG)return"Bodies/egg"+H.p(J.bO(J.e7(a.Y),1))+".png"
return"Bodies/reg"+H.p(J.bO(J.e7(a.Y),1))+".png"},
xB:function(a){if($.jG)return"Bodies/egg"+H.p(J.bO(J.e7(a.Y),1))+".png"
return"Bodies/cowl"+H.p(J.bO(J.e7(a.Y),1))+".png"},
xC:function(a){if($.jG)return"Bodies/egg"+H.p(J.bO(J.e7(a.Y),1))+".png"
return"Bodies/dream"+H.p(J.bO(J.e7(a.Y),1))+".png"},
xD:function(a){if($.jG)return"Bodies/egg"+H.p(J.bO(J.e7(a.Y),1))+".png"
return"Bodies/god"+H.p(J.bO(J.e7(a.Y),1))+".png"},
xz:function(a,b){T.ks(a,$.$get$je(),b.W.ga_())}},S={jP:function jP(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},jQ:function jQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},bw:function bw(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},hX:function hX(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},lR:function lR(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},m6:function m6(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},mm:function mm(rx,ry,x1,x2,y1,y2,t,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.C=C
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
_.r2=r2},nn:function nn(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id}},K={bG:function bG(a,b){this.a=a
this.b=b},lZ:function lZ(rx,ry,x1,x2,y1,y2,t,C,E,M,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.C=C
_.E=E
_.M=M
_.G=G
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
E7:function(){var t=new K.np(0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,0,1,-15,!1,1000,13,20,350,100,500*$.u.r,null,null,null,H.a([],[Q.b6]),6.12,new K.mh(null,null,null,null,null,null,null,null,null,null,null,null,null,null))
t.hX()
return t},
np:function np(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},
mh:function mh(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy){var _=this
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
_.cy=cy}},L={
jV:function(){var t=$.$get$eb()
t=t.gaF(t)
return new H.bF(t,new L.jW(),[H.as(t,"D",0)])},
xj:function(){var t=$.$get$eb()
t=t.gaF(t)
return new H.bF(t,new L.jX(),[H.as(t,"D",0)])},
xk:function(){var t=$.$get$eb()
t=t.gaF(t)
return new H.bF(t,new L.jY(),[H.as(t,"D",0)])},
xl:function(a){var t,s,r,q
t=$.$get$eb()
s=P.bc(t.gaF(t),!0,L.cG)
for(t=s.length,r=0;r<s.length;s.length===t||(0,H.bN)(s),++r){q=s[r]
if(J.N(J.cE(q),a))return q}return $.jS},
x0:function(a,b,c,d){var t,s,r
t=P.v
s=A.cl
r=P.O
r=new L.aj(P.n(null,null,null,t,s),P.n(null,null,null,r,s),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
r.j(0,$.ao,L.e("#FF9B00"),!0)
r.j(0,$.aA,L.e("#FF9B00"),!0)
r.j(0,$.az,L.e("#FF8700"),!0)
r.j(0,$.ax,L.e("#7F7F7F"),!0)
r.j(0,$.aw,L.e("#727272"),!0)
r.j(0,$.aC,L.e("#A3A3A3"),!0)
r.j(0,$.aD,L.e("#999999"),!0)
r.j(0,$.aB,L.e("#898989"),!0)
r.j(0,$.av,L.e("#EFEFEF"),!0)
r.j(0,$.au,L.e("#DBDBDB"),!0)
r.j(0,$.aF,L.e("#C6C6C6"),!0)
r.j(0,$.aE,L.e("#ADADAD"),!0)
s=[t]
t=new L.cG(0.5,a,new H.q(0,null,null,null,null,null,0,[X.F,P.U]),null,"","",!1,b,null,c,!1,!1,!1,!0,1,r,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.J]),H.a([],[A.cN]),Q.G(null,null,A.a9))
t.a8(a,b,c,!1)
return t},
e:function(a){if(!!J.ar(a).$iscl)return a
if(typeof a==="number"&&Math.floor(a)===a)return A.dF(a,C.d.ea(C.b.bN(a,16),6,"0").length>6)
if(typeof a==="string")if(C.d.aW(a,"#"))return A.dU(C.d.bj(a,1))
else return A.dU(a)
throw H.m("Invalid AspectPalette input: colour must be a Colour object, a valid colour int, or valid hex string (with or without leading #)")},
jW:function jW(){},
jX:function jX(){},
jY:function jY(){},
cG:function cG(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k6:function k6(id,k1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,b$,c$,d$,e$,f$,r$){var _=this
_.id=id
_.k1=k1
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
_.b$=b$
_.c$=c$
_.d$=d$
_.e$=e$
_.f$=f$
_.r$=r$},
kT:function kT(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
mk:function mk(rx,ry,x1,x2,y1,y2,t,C,E,M,G,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.C=C
_.E=E
_.M=M
_.G=G
_.O=O
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
n2:function n2(rx,ry,x1,x2,y1,y2,t,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
nl:function nl(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
nu:function nu(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
E6:function(a){var t,s
t=[Q.b6]
s=[Y.nj]
t=new L.dP(!1,null,null,null,null,a,H.a([],t),new Z.li([]),500*$.u.r,H.a([],t),new S.jQ(new F.f7(!1,"Afterlife"),[],[],null),!1,null,null,C.C,0,!1,!1,10,30,null,13,20,!1,H.a([],t),0,-15,-999,H.a([],[P.v]),0,H.a([],s),H.a([],s),H.a([],s),H.a([],s),null,H.a([],t),H.a([],[Z.lv]),new B.oI([]),new G.nq(0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1),null,null,null,null,null,null,null)
t.hW(a)
return t},
hU:function hU(a,b){this.a=a
this.b=b},
dP:function dP(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,t,C,E,M,G,O,u,aw,be,aS,b2,av){var _=this
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.C=C
_.E=E
_.M=M
_.G=G
_.O=O
_.u=u
_.aw=aw
_.be=be
_.aS=aS
_.b2=b2
_.av=av}},M={k1:function k1(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},hS:function hS(){},kl:function kl(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},fL:function fL(){},
D9:function(a,b,c,d){var t=new M.fZ(!1,null,null,null,null,null,null,null,null,!1,!1,!1,null,null,null,null,null,!1,null,null,$.$get$il(),null,null,null,Q.G(null,null,X.F),Q.G(null,null,N.Z),P.cK(P.v,[Q.bK,N.Z]))
t.hR(a,b,c,d)
return t},
fZ:function fZ(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,b$,c$,d$,e$,f$,r$){var _=this
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
_.b$=b$
_.c$=c$
_.d$=d$
_.e$=e$
_.f$=f$
_.r$=r$},
j0:function j0(){},
lT:function lT(){},
lU:function lU(){},
lV:function lV(){},
lW:function lW(){},
bt:function bt(a,b){this.a=a
this.b=b},
nE:function nE(a){this.a=a},
oG:function oG(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
Fx:function(){var t,s,r
W.xR(C.d.aU("../",N.v2())+"navbar.txt",null,null).eo(O.FA())
A.Fj()
t=new Z.iZ(null,4,null,1000,600,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
t.c=H.a(new Array(4),[Q.b6])
t.a=document.querySelector("#form")
s=H.dc(O.ww(),null,null)
r=L.E6(s)
t.f=r
$.FC=t
$.Fd=r
V.Fu("I really should stop doing this",t.ghz(t))}},O={k2:function k2(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},da:function da(){},ec:function ec(){},hq:function hq(){},lf:function lf(rx,ry,x1,x2,y1,y2,t,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.C=C
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
_.r2=r2},nw:function nw(rx,ry,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
FD:function(a){var t,s,r,q,p
t=N.v2()
a=J.wR(a,P.bU("(href|src) ?= ?([\"'])(?!https?:)",!0,!1),new O.qv(t))
s=document
J.hO(s.querySelector("#navbar"),"beforeend",a,C.k,null)
if(J.N(O.Fh("seerOfVoid",null),"true")){window.alert("If you gaze long into an abyss, the abyss also gazes into you.  - Troll Bruce Willis")
J.hO(s.querySelector("#story"),"beforeend","<button id = 'voidButton'>Peer into Void, Y/N?</a><div class='void'>Well, NOW you've certainly gone and done it. You can expect to see any Void Player shenanignans now. If there are any.",C.k,null)
r=H.ch(s.querySelector("#voidButton"),"$isfD")
r.toString
W.dR(r,"click",new O.qw(),!1,W.v_)}q=O.ww()
p=new A.d3(null,null)
p.cL(H.dc(q,null,null))
p.k9()
if($.E9||p.a.B()>0.99)H.ch(s.querySelector("#today"),"$iseJ").href="dead_index.html?seed="+q
else H.ch(s.querySelector("#today"),"$iseJ").href="index2.html?seed="+q},
ww:function(){var t,s,r,q,p,o
t=new P.fG(Date.now(),!1)
s=H.v6(t)
r=H.v5(t)
q=C.b.v(H.v7(t))
p=C.b.v(s)
o=C.b.v(r)
if(s<10)p="0"+p
if(r<10)o="0"+o
return q+p+o},
Fh:function(a,b){var t,s,r,q
t=P.vK().gek().m(0,a)
if(t!=null)t=P.pX(t,0,J.ct(t),C.r,!1)
if(t!=null)return t
s=$.wt
if(s.length!==0){r=J.e8(window.location.href,J.wN(window.location.href,"?")+1)
s=window.location.href
q="?"+r
s.toString
return P.vL(H.bM(s,q,"")+"?"+$.wt,0,null).gek().m(0,a)}return},
FJ:function(){var t,s,r,q,p
t=document
s=t.querySelector("body").style
s.backgroundColor="#f8c858"
s=t.querySelector("body").style
s.backgroundImage="url(images/pen15_bg1.png)"
r=new W.hy(t.querySelectorAll(".void"),[null])
for(t=new H.et(r,r.gp(r),0,null,[null]);t.A();){q=t.d
p=J.wB(J.jM(q))
if(p==="none"||p.length===0)O.FF(q)
else O.Fl(q)}},
FF:function(a){J.tI(J.jM(a),"block")},
Fl:function(a){J.tI(J.jM(a),"none")},
qv:function qv(a){this.a=a},
qw:function qw(){},
j6:function j6(){}},Y={oc:function oc(a){this.a=a},kc:function kc(a){this.a=a},lk:function lk(k1,k2,k3,k4,r1,r2,rx,ry,x1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},ll:function ll(k1,k2,k3,k4,r1,r2,rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},mq:function mq(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},ey:function ey(a,b){this.a=a
this.b=b},cW:function cW(r,c,d,e,f,a,b){var _=this
_.r=r
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},T:function T(c,d,e,f,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},a6:function a6(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},k7:function k7(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},bx:function bx(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},kf:function kf(c,a,b){this.c=c
this.a=a
this.b=b},bE:function bE(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},j7:function j7(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},iq:function iq(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},j8:function j8(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},eg:function eg(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},ni:function ni(rx,ry,x1,x2,y1,y2,t,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},nj:function nj(){},nk:function nk(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
t4:function(a){var t
if(a===1)return 0
t=C.e.bx(C.B.B()*a+1)
return t-1},
dy:function(a){var t=a.split("")
return new H.db(t,new Y.oJ(),[H.M(t,0),null]).b6(0,"")},
qg:function(a,b,c){var t,s,r
t=Y.Fz(b,c)
s=t.length
if(s===0)return
r=C.e.bx(a.a.B()*(s-1-0+1))
if(r<0||r>=t.length)return H.B(t,r)
return t[r]},
Fz:function(a,b){var t,s,r
t=[]
for(s=0;s<a.length;++s){r=a[s]
if(C.d.aW(r,b))t.push(r)}return t},
F7:function(a){var t,s,r,q,p,o
t=J.wY(a," ")
for(s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.bN)(t),++q){p=t[q]
o=J.bm(p)
r+=" "+(J.qH(o.m(p,0))+o.bj(p,1))}return r},
Ff:function(a){var t,s,r,q
t=[]
for(s=0;s<16;++s){r=s%4
if(r===3&&s>4){r=a.Y.gK()
q=C.n.aM((s-6)/4)
if(q<0||q>=r.length)return H.B(r,q)
t.push(r[q])}else if(r===2&&s>4){r=a.W.gK()
q=C.n.aM((s-5)/4)
if(q<0||q>=r.length)return H.B(r,q)
t.push(r[q])}else if(r===1)if(s<8){r=a.ay.a.gK()
q=C.n.aM(s/4)
if(q<0||q>=r.length)return H.B(r,q)
t.push(r[q])}else{r=a.az.a.gK()
q=C.n.aM((s-8)/4)
if(q<0||q>=r.length)return H.B(r,q)
t.push(r[q])}else if(r===0||s<4)t.push(a.c.u.w($.$get$wi()))}return t},
tb:function(a){var t=J.ar(a)
if(t.T(a,"#ff0000"))return 14
if(t.T(a,"#ffc3df"))return 13
if(a==null)return 15
return C.a.bq($.$get$eG(),a)},
oJ:function oJ(){}},Z={kb:function kb(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,t,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},kt:function kt(rx,ry,x1,x2,y1,y2,t,C,E,M,G,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.C=C
_.E=E
_.M=M
_.G=G
_.O=O
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
dr:function(a,b,c){$.$get$ua().i(0,b,new Z.i8(a,c,[null,null]))
a.a.push(b)},
i8:function i8(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
lv:function lv(){},
m5:function m5(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,t,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
iZ:function iZ(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx){var _=this
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
_.fx=fx},
mG:function mG(a){this.a=a},
mH:function mH(a){this.a=a},
mF:function mF(a){this.a=a},
mE:function mE(a){this.a=a},
na:function na(rx,ry,x1,x2,y1,y2,t,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
aG:function(a,b,c,d){var t=new Z.cI(c,a,b,!0,d,!1,H.a([],[Z.a_]),null)
t.hQ(a,b,c,d)
return t},
cI:function cI(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
li:function li(a){this.a=a},
a_:function a_(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x}},A={ki:function ki(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
xJ:function(a){return new A.kX(a)},
qX:function(a,b){return new A.kV(a,b)},
xI:function(a,b){return new A.kW(a,b)},
xK:function(a,b,c,d,e){a.kp(b,e)},
kX:function kX(a){this.a=a},
kV:function kV(a,b){this.a=a
this.b=b},
kW:function kW(a,b){this.a=a
this.b=b},
i:function(a,b,c,d,e){var t=new A.a9(c,e,a,d,P.a3(null,null,null,G.a5),0,3)
t.L(a,b,c,d,e)
return t},
a9:function a9(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},
lK:function lK(){},
lJ:function lJ(){},
jk:function jk(a,b){this.a=a
this.b=b},
j1:function j1(){},
cN:function cN(){},
fC:function fC(Q,a,b,c,d,e,f,r,x,y,z){var _=this
_.Q=Q
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z},
ef:function(a,b,c,d){var t=new A.cl(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.hP(a,b,c,d)
return t},
kh:function(a,b,c,d){var t=A.ef(0,0,0,255)
t.b=C.b.a1(C.e.bx(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.b.a1(C.e.bx(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.b.a1(C.e.bx(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.b.a1(C.e.bx(d*255),0,255)
return t},
dF:function(a,b){if(b){if(typeof a!=="number")return a.c1()
return A.ef((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.c1()
return A.ef((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
dU:function(a){return A.dF(H.dc(a,16,new A.qc()),a.length>=8)},
cl:function cl(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
qc:function qc(){},
De:function(a){var t,s,r,q,p,o,n
t=P.v
s=A.cl
r=P.O
q=new A.hi(P.n(null,null,null,t,s),P.n(null,null,null,r,s),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
for(p=0;p<2;++p){o=a[p]
for(t=o.gk8(),s=t.a,t=new P.hA(s,s.cP(),0,null,[H.M(t,0)]);t.A();){n=t.d
q.j(0,n,o.m(0,n),!0)}}return q},
hi:function hi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j2:function j2(){},
DJ:function(a){var t=new A.d3(null,null)
t.cL(a)
return t},
d3:function d3(a,b){this.a=a
this.b=b},
Fj:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if($.we)return
$.we=!0
D.Ed()
t=P.v
s=[t]
r=H.a(["metal"],s)
q=$.r
H.a([],s)
r=new G.bI(q,r,0.3)
$.$get$b().h(0,r)
$.C=r
r=H.a(["dutton"],s)
q=$.ag
H.a([],s)
r=new G.bI(q,r,0.6)
$.$get$b().h(0,r)
$.uo=r
r=H.a(["ceramic"],s)
q=$.r
H.a([],s)
r=new G.bI(q,r,-0.3)
$.$get$b().h(0,r)
$.bQ=r
r=H.a(["bone"],s)
q=$.r
H.a([],s)
r=new G.bI(q,r,0.2)
$.$get$b().h(0,r)
$.bh=r
r=H.a(["wood"],s)
q=$.r
H.a([],s)
r=new G.bI(q,r,-0.3)
$.$get$b().h(0,r)
$.a2=r
r=H.a(["plastic"],s)
q=$.r
H.a([],s)
r=new G.bI(q,r,-0.3)
$.$get$b().h(0,r)
$.aU=r
r=H.a(["rubber"],s)
q=$.r
H.a([],s)
r=new G.bI(q,r,-0.3)
$.$get$b().h(0,r)
$.c9=r
r=H.a(["paper"],s)
q=$.r
H.a([],s)
r=new G.bI(q,r,-0.3)
$.$get$b().h(0,r)
$.Q=r
r=H.a(["cloth","fabric"],s)
q=$.r
H.a([],s)
r=new G.bI(q,r,-0.3)
$.$get$b().h(0,r)
$.S=r
r=H.a(["glass"],s)
q=$.r
H.a([],s)
r=new G.bI(q,r,-0.3)
$.$get$b().h(0,r)
$.bf=r
r=H.a(["ghostly","ectoplasm"],s)
q=$.r
H.a([],s)
r=new G.bI(q,r,-0.3)
$.$get$b().h(0,r)
$.bZ=r
r=H.a(["flesh","meat","muscle"],s)
q=$.r
H.a([],s)
r=new G.bI(q,r,-0.1)
$.$get$b().h(0,r)
$.bo=r
r=H.a(["horrorterror","tentacled","grimdark"],s)
q=$.H
H.a([],s)
r=new G.bI(q,r,3.1)
$.$get$b().h(0,r)
$.br=r
r=H.a(["fur","fluff","fuzzy"],s)
q=$.r
H.a([],s)
r=new G.bI(q,r,-0.1)
$.$get$b().h(0,r)
$.ce=r
r=H.a(["plant","leaf","vine"],s)
q=$.r
H.a([],s)
r=new G.bI(q,r,-0.1)
$.$get$b().h(0,r)
$.b5=r
r=H.a(["feathery"],s)
q=$.r
H.a([],s)
r=new G.bI(q,r,-0.1)
$.$get$b().h(0,r)
$.bA=r
r=H.a(["gross","ugly","unpleasant"],s)
q=$.K
H.a([],s)
r=new G.bI(q,r,0.1)
$.$get$b().h(0,r)
$.bT=r
r=H.a(["shitty","poorly made","conksuck","piece-of-shit"],s)
q=$.K
H.a([],s)
r=new G.bI(q,r,-13)
$.$get$b().h(0,r)
$.bS=r
r=H.a(["stone","rock","concrete"],s)
q=$.r
H.a([],s)
r=new G.bI(q,r,0.3)
$.$get$b().h(0,r)
$.aM=r
r=H.a(["legendary"],s)
q=$.rD
H.a([],s)
r=new G.bI(q,r,13)
$.$get$b().h(0,r)
$.a7=r
r=$.K
H.a([],s)
r=new G.aX(r,["edged","sharp","honed","keen","bladed"],0.3)
$.$get$b().h(0,r)
$.aL=r
r=$.rE
H.a([],s)
r=new G.aX(r,["glowing","bright","illuminated"],0.1)
$.$get$b().h(0,r)
$.ba=r
r=$.rE
H.a([],s)
r=new G.aX(r,["obscuring","dark","shadowy"],0.1)
$.$get$b().h(0,r)
$.at=r
r=$.K
H.a([],s)
r=new G.aX(r,["calming","pale","placating","shooshing"],0.1)
$.$get$b().h(0,r)
$.by=r
r=$.H
H.a([],s)
r=new G.aX(r,["nuclear","radioactive","irradiated"],1)
$.$get$b().h(0,r)
$.c2=r
r=$.K
H.a([],s)
r=new G.aX(r,["scary","horrifying","terrifying","spooky"],0.2)
$.$get$b().h(0,r)
$.bg=r
r=$.K
H.a([],s)
r=new G.aX(r,["lucky","fortunate","gambler's","favored","charmed"],0.3)
$.$get$b().h(0,r)
$.c_=r
r=$.K
H.a([],s)
r=new G.aX(r,["doomed","cursed","unlucky"],-0.3)
$.$get$b().h(0,r)
$.aS=r
r=$.H
H.a([],s)
r=new G.aX(r,["pointy","piercing","sharp","barbed","piked","sharpened","pronged","pointed"],0.3)
$.$get$b().h(0,r)
$.b1=r
r=$.o
H.a([],s)
r=new G.aX(r,["exploding","explosive","detonating","grenade"],0.6)
$.$get$b().h(0,r)
$.bs=r
r=$.o
H.a([],s)
r=new G.aX(r,["electrical","zap","lightning","shock"],0.6)
$.$get$b().h(0,r)
$.ad=r
r=$.o
H.a([],s)
r=new G.aX(r,["restraining","imprisoning","restricting"],0.3)
$.$get$b().h(0,r)
$.bk=r
r=$.K
H.a([],s)
r=new G.aX(r,["expensive","valuable","bling","money"],0.1)
$.$get$b().h(0,r)
$.bl=r
r=$.K
H.a([],s)
r=new G.aX(r,["edible","tasty","delicious","savory"],0.1)
$.$get$b().h(0,r)
$.aH=r
r=$.K
H.a([],s)
r=new G.aX(r,["classy","distinguished","tasteful","cultured"],0.1)
$.$get$b().h(0,r)
$.ap=r
r=$.K
H.a([],s)
r=new G.aX(r,["cool","wicked","radical","awesome","groovy","tubular","bitching","bodacious"],0.1)
$.$get$b().h(0,r)
$.ay=r
r=$.K
H.a([],s)
r=new G.aX(r,["intelligent","smart","useful","scientific","encyclopedic"],0.1)
$.$get$b().h(0,r)
$.a1=r
r=$.H
H.a([],s)
r=new G.aX(r,["sentient","aware","conscious","awake","talking"],0.1)
$.$get$b().h(0,r)
$.aJ=r
r=$.K
H.a([],s)
r=new G.aX(r,["romantic","amorous","tender","affectionate","lovey-dovey"],0.1)
$.$get$b().h(0,r)
$.aO=r
r=$.K
H.a([],s)
r=new G.aX(r,["funny","hilarious","comedy"],0.1)
$.$get$b().h(0,r)
$.b9=r
r=$.K
H.a([],s)
r=new G.aX(r,["annoying","enraging","dickish","asshole"],0.1)
$.$get$b().h(0,r)
$.bz=r
r=$.K
H.a([],s)
r=new G.aX(r,["magical","mystical","magickal","wizardy"],0.6)
$.$get$b().h(0,r)
$.aa=r
r=$.rD
H.a([],s)
r=new G.aX(r,["aspecty","imbued","focused","energized","awakened","infused"],1.3)
$.$get$b().h(0,r)
$.Y=r
r=$.rD
H.a([],s)
r=new G.aX(r,["class-related","appropriate","themed"],1.3)
$.$get$b().h(0,r)
$.V=r
r=$.K
H.a([],s)
r=new G.aX(r,["pretty","aesthetic","beautiful"],0.1)
$.$get$b().h(0,r)
$.aN=r
r=$.o
H.a([],s)
r=new G.aX(r,["healing","regenerating","recovery","life"],0.3)
$.$get$b().h(0,r)
$.b3=r
r=$.K
H.a([],s)
r=new G.aX(r,["uncomfortable","hard","unpleasant"],0.1)
$.$get$b().h(0,r)
$.aV=r
r=$.K
H.a([],s)
r=new G.aX(r,["comfortable","comforting","soft","cozy","snug","pleasant","plush"],-0.1)
$.$get$b().h(0,r)
$.bj=r
r=$.K
H.a([],s)
r=new G.aX(r,["poisonous","venomous","draining","poison"],0.6)
$.$get$b().h(0,r)
$.bR=r
r=$.K
H.a([],s)
r=new G.aX(r,["chilly","chill","cold","freezing","icy","frozen","ice"],0.6)
$.$get$b().h(0,r)
$.bq=r
r=$.K
H.a([],s)
r=new G.aX(r,["heavy","weighs a ton","heavy","heavy enough to kill a cat"],0.4)
$.$get$b().h(0,r)
$.c8=r
r=$.K
H.a([],s)
r=new G.aX(r,["fire","burning","blazing","hot","heated","on fire","combusting","flaming","fiery"],0.6)
$.$get$b().h(0,r)
$.aI=r
r=$.K
H.a([],s)
r=new G.aX(r,["blunt","bludgeoning","dull"],0.3)
$.$get$b().h(0,r)
$.al=r
r=$.o
H.a([],s)
r=new G.aX(r,["shooty","ranged","projectile","loaded","long range"],0.3)
$.$get$b().h(0,r)
$.b_=r
r=$.K
H.a([],s)
r=new G.aX(r,["musical","melodic","harmonious","tuneful","euphonious","mellifluous,"],0.1)
$.$get$b().h(0,r)
$.af=r
r=$.K
H.a([],s)
r=new G.aX(r,["loud","ear splitting","noisy","deafening","thundering"],0.3)
$.$get$b().h(0,r)
$.bb=r
r=$.K
H.a([],s)
r=new G.aX(r,["fake","false","imitation","simulated","replica"],-0.3)
$.$get$b().h(0,r)
$.b8=r
r=$.K
H.a([],s)
r=new G.aX(r,["real","actual","believable","geniune","guaranteed","veritable"],0.3)
$.$get$b().h(0,r)
$.bp=r
r=H.a(["perfectly generic"],s)
q=$.K
H.a([],s)
r=new G.ak(q,r,0.1)
$.$get$b().h(0,r)
$.us=r
r=H.a(["a sword"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.f4=r
r=H.a(["a hammer"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.ro=r
r=H.a(["a rifle"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.rz=r
r=H.a(["a pistol"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.rv=r
r=H.a(["a blade"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.re=r
r=H.a(["a dagger"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.rj=r
r=H.a(["a santa"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.fW=r
r=H.a(["a fist"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.uq=r
r=H.a(["claws"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.lB=r
r=H.a(["a grenade"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.lC=r
r=H.a(["a freaking safe"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.uJ=r
r=H.a(["a ball"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.eo=r
r=H.a(["a trident"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.uR=r
r=H.a(["a card"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.rh=r
r=H.a(["a frying pan"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.rl=r
r=H.a(["a pillow"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.iM=r
r=H.a(["a machinegun"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.rr=r
r=H.a(["a shuriken"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.uN=r
r=H.a(["a sling"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.uP=r
r=H.a(["a yoyo"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.uT=r
r=H.a(["a cane"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.uk=r
r=H.a(["a shield"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.f3=r
r=H.a(["a lance"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.uB=r
r=H.a(["a ax"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.rd=r
r=H.a(["a sign"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.uH=r
r=H.a(["a book"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.aT=r
r=H.a(["a broom"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.iJ=r
r=H.a(["a club"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.iL=r
r=H.a(["a bow"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.rf=r
r=H.a(["a whip"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.uS=r
r=H.a(["a staff"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.uQ=r
r=H.a(["a needle"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.rt=r
r=H.a(["dice"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.rk=r
r=H.a(["a fork"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.ur=r
r=H.a(["a pigeon???"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,1.3)
$.$get$b().h(0,r)
$.ru=r
r=H.a(["a chainsaw"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.ul=r
r=H.a(["a sickle"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.uO=r
r=H.a(["a shotgun"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.uL=r
r=H.a(["a stick"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.du=r
r=H.a(["a chain"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.fV=r
r=H.a(["a wrench"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.rB=r
r=H.a(["a shovel"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.uM=r
r=H.a(["a rolling pin"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.rA=r
r=H.a(["a puppet"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.rx=r
r=H.a(["a razor"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.ry=r
r=H.a(["a pen"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.lE=r
r=H.a(["a bust"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.iK=r
r=H.a(["a bowling ball"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.yw=r
r=H.a(["a golf club"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.uu=r
r=H.a(["a knife"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.rq=r
r=H.a(["scissors"],s)
q=$.a8
H.a([],s)
r=new G.ak(q,r,0.4)
$.$get$b().h(0,r)
$.uK=r
r=H.a(["forged","sharpened","honed","filed"],s)
q=$.H
p=G.a5
o=[p]
n=H.a([$.C,$.aL,$.b1],o)
H.a([],s)
r=new G.d("Forged",n,q,r,0)
$.$get$b().h(0,r)
$.zQ=r
r=H.a([],s)
q=$.r
n=H.a([$.al,$.aL],o)
H.a([],s)
r=new G.d("",n,q,r,0)
$.$get$b().h(0,r)
$.zl=r
r=H.a(["fossilized"],s)
q=$.H
n=H.a([$.bh,$.aM],o)
H.a([],s)
r=new G.d("Fossilized",n,q,r,0)
$.$get$b().h(0,r)
$.zR=r
r=H.a(["adamantium"],s)
q=$.H
n=H.a([$.bh,$.C],o)
H.a([],s)
r=new G.d("Adamantium",n,q,r,0)
$.$get$b().h(0,r)
$.uh=r
r=H.a([],s)
q=$.r
n=H.a([$.bj,$.aV],o)
H.a([],s)
r=new G.d("",n,q,r,0)
$.$get$b().h(0,r)
$.Cs=r
r=H.a(["tatami"],s)
q=$.r
n=H.a([$.S,$.a2],o)
H.a([],s)
r=new G.d("Tatami",n,q,r,0)
$.$get$b().h(0,r)
$.CH=r
r=H.a(["mesh","chain link"],s)
q=$.r
n=H.a([$.S,$.C],o)
H.a([],s)
r=new G.d("Mesh",n,q,r,0)
$.$get$b().h(0,r)
$.AQ=r
r=H.a(["foil"],s)
q=$.r
n=H.a([$.Q,$.C],o)
H.a([],s)
r=new G.d("Foil",n,q,r,0)
$.$get$b().h(0,r)
$.zM=r
r=H.a(["beanbag"],s)
q=$.r
n=H.a([$.S,$.aM],o)
H.a([],s)
r=new G.d("Beanbag",n,q,r,0)
$.$get$b().h(0,r)
$.yq=r
r=H.a(["pleather","faux fur"],s)
q=$.r
n=H.a([$.ce,$.aU],o)
H.a([],s)
r=new G.d("Faux Fur",n,q,r,0)
$.$get$b().h(0,r)
$.Bq=r
r=H.a(["plywood"],s)
q=$.r
n=H.a([$.a2,$.Q],o)
H.a([],s)
r=new G.d("Plywood",n,q,r,0)
$.$get$b().h(0,r)
$.rw=r
r=H.a(["colossus"],s)
q=$.r
n=H.a([$.C,$.bo],o)
H.a([],s)
r=new G.d("Colossus",n,q,r,0)
$.$get$b().h(0,r)
$.um=r
r=H.a(["rotting","zombie"],s)
q=$.H
n=H.a([$.bT,$.bo],o)
H.a([],s)
r=new G.d("Rotting",n,q,r,0)
$.$get$b().h(0,r)
$.BP=r
r=H.a(["draugr","white walker"],s)
q=$.H
n=H.a([$.bT,$.bo,$.bq],o)
H.a([],s)
r=new G.d("Draugr",n,q,r,0)
$.$get$b().h(0,r)
$.zi=r
r=H.a(["Ultraviolet"],s)
q=$.rC
n=H.a([$.ba,$.at],o)
H.a([],s)
r=new G.d("Ultraviolet",n,q,r,0)
$.$get$b().h(0,r)
$.Az=r
r=H.a(["Ultraviolence"],s)
q=$.o
n=H.a([$.ba,$.at,$.aL],o)
H.a([],s)
r=new G.d("Ultraviolence",n,q,r,0)
$.$get$b().h(0,r)
$.CS=r
r=H.a([],s)
q=$.o
n=H.a([$.aS,$.c_],o)
H.a([],s)
r=new G.d("",n,q,r,0)
$.$get$b().h(0,r)
$.zg=r
r=H.a(["candy"],s)
q=$.r
n=H.a([$.aH,$.bf],o)
H.a([],s)
r=new G.d("Candy",n,q,r,0)
$.$get$b().h(0,r)
$.rg=r
r=H.a(["cotton candy"],s)
q=$.r
n=H.a([$.aH,$.S],o)
H.a([],s)
r=new G.d("Cotton Candy",n,q,r,0)
$.$get$b().h(0,r)
$.z1=r
r=H.a(["gummy"],s)
q=$.r
n=H.a([$.aH,$.c9],o)
H.a([],s)
r=new G.d("Gum",n,q,r,0)
$.$get$b().h(0,r)
$.A3=r
r=H.a(["marrow"],s)
q=$.r
n=H.a([$.aH,$.bh],o)
H.a([],s)
r=new G.d("Marrow",n,q,r,0)
$.$get$b().h(0,r)
$.AJ=r
r=H.a(["toothy"],s)
q=$.a8
n=H.a([$.bh,$.bQ],o)
H.a([],s)
r=new G.d("Toothy",n,q,r,0)
$.$get$b().h(0,r)
$.CP=r
r=H.a(["Frost"],s)
q=$.r
n=H.a([$.aM,$.bf,$.bo],o)
H.a([],s)
r=new G.d("Frost",n,q,r,0)
$.$get$b().h(0,r)
$.zS=r
r=H.a(["arsenic","antifreeze"],s)
q=$.o
n=H.a([$.aH,$.bR],o)
H.a([],s)
r=new G.d("Arsenic",n,q,r,0)
$.$get$b().h(0,r)
$.zq=r
r=H.a(["crystal","diamond","quartz"],s)
q=$.r
n=H.a([$.aM,$.bf],o)
H.a([],s)
r=new G.d("Crystal",n,q,r,0)
$.$get$b().h(0,r)
$.ri=r
r=H.a(["mary sue","sakura katana chan","shitty oc"],s)
q=$.K
n=H.a([$.aN,$.aO,$.b9,$.a1,$.ap,$.c_,$.aa],o)
H.a([],s)
r=new G.d("Mary Sue",n,q,r,0)
$.$get$b().h(0,r)
$.AK=r
r=H.a(["edge lord","coldsteel the hedgehog"],s)
q=$.K
n=H.a([$.bg,$.at,$.aL,$.a7,$.aS,$.a1,$.ap,$.ay],o)
H.a([],s)
r=new G.d("Edge Lord",n,q,r,0)
$.$get$b().h(0,r)
$.zo=r
r=H.a(["deadpool"],s)
q=$.a8
n=H.a([$.bT,$.b3,$.ay,$.b9],o)
H.a([],s)
r=new G.d("Deadpool",n,q,r,0)
$.$get$b().h(0,r)
$.z7=r
r=H.a(["spoopy","skellington's","creppy"],s)
q=$.K
n=H.a([$.bg,$.ay],o)
H.a([],s)
r=new G.d("Spoopy",n,q,r,0)
$.$get$b().h(0,r)
$.Cv=r
r=H.a(["wolverine"],s)
q=$.a8
n=H.a([$.bh,$.aL,$.b1],o)
H.a([],s)
r=new G.d("Wolverine",n,q,r,0)
$.$get$b().h(0,r)
$.D2=r
r=H.a(["rabbit's foot"],s)
q=$.a8
n=H.a([$.c_,$.ce],o)
H.a([],s)
r=new G.d("Rabbit's Foot",n,q,r,0)
$.$get$b().h(0,r)
$.uG=r
r=H.a(["tipped","reinforced","arrowhead"],s)
q=$.H
n=H.a([$.b1,$.a2],o)
H.a([],s)
r=new G.d("Tipped",n,q,r,0)
$.$get$b().h(0,r)
$.yj=r
r=H.a(["arrow","flechette","bolt"],s)
q=$.a8
n=H.a([$.b1,$.b_,$.a2],o)
H.a([],s)
r=new G.d("Arrow",n,q,r,0)
$.$get$b().h(0,r)
$.ui=r
r=H.a(["training sword","bokken"],s)
q=$.a8
n=H.a([$.a2,$.aL],o)
H.a([],s)
r=new G.d("Bokken",n,q,r,0)
$.$get$b().h(0,r)
$.At=r
r=H.a(["ironic"],s)
q=$.K
n=H.a([$.b8,$.ay],o)
H.a([],s)
r=new G.d("Irony Type1",n,q,r,0)
$.$get$b().h(0,r)
$.rp=r
r=H.a(["netted","webbed"],s)
q=$.a8
n=H.a([$.bk,$.S],o)
H.a([],s)
r=new G.d("Netted",n,q,r,0)
$.$get$b().h(0,r)
$.B4=r
r=H.a(["barbed wire"],s)
q=$.a8
n=H.a([$.b1,$.bk,$.C,$.S],o)
H.a([],s)
r=new G.d("Barbed Wire",n,q,r,0)
$.$get$b().h(0,r)
$.yn=r
r=H.a(["morning star"],s)
q=$.a8
n=H.a([$.b1,$.al],o)
H.a([],s)
r=new G.d("Morning Star",n,q,r,0)
$.$get$b().h(0,r)
$.AZ=r
r=H.a(["decadent"],s)
q=$.K
n=H.a([$.bj,$.bl],o)
H.a([],s)
r=new G.d("Decadent",n,q,r,0)
$.$get$b().h(0,r)
$.za=r
r=H.a(["SBAHJ"],s)
q=$.o
n=H.a([$.bS,$.ay],o)
H.a([],s)
r=new G.d("SBAHJ",n,q,r,0)
$.$get$b().h(0,r)
$.BZ=r
r=H.a(["bayonet"],s)
q=$.a8
n=H.a([$.b1,$.b_],o)
H.a([],s)
r=new G.d("Bayonet",n,q,r,0)
$.$get$b().h(0,r)
$.yp=r
r=H.a(["Snoop Dog's Snow Cone Machete"],s)
q=$.r
n=H.a([$.bq,$.ay,$.aL],o)
H.a([],s)
r=new G.d("Snoop",n,q,r,0)
$.$get$b().h(0,r)
$.Cr=r
r=H.a(["light saber"],s)
q=$.o
n=H.a([$.ba,$.aI,$.aL],o)
H.a([],s)
r=new G.d("Light Saber",n,q,r,0)
$.$get$b().h(0,r)
$.Ay=r
r=H.a(["fake as shit","fakey fake","bullshit"],s)
q=$.K
n=H.a([$.aa,$.b8],o)
H.a([],s)
r=new G.d("Fakey Fake",n,q,r,0)
$.$get$b().h(0,r)
$.zx=r
r=H.a(["real as shit","suprisingly real"],s)
q=$.K
n=H.a([$.aa,$.bp],o)
H.a([],s)
r=new G.d("Real As Shit",n,q,r,0)
$.$get$b().h(0,r)
$.BJ=r
r=H.a(["skeletal"],s)
q=$.a8
n=H.a([$.bg,$.aS,$.bh],o)
H.a([],s)
r=new G.d("Skeletal",n,q,r,0)
$.$get$b().h(0,r)
$.Cl=r
r=H.a(["green sun"],s)
q=$.rE
n=H.a([$.aI,$.c2,$.ba],o)
H.a([],s)
r=new G.d("Green Sun",n,q,r,0)
$.$get$b().h(0,r)
$.rn=r
r=H.a(["midnight","3 In The Morning"],s)
q=$.rC
n=H.a([$.at,$.ap],o)
H.a([],s)
r=new G.d("Midnight",n,q,r,0)
$.$get$b().h(0,r)
$.AU=r
r=H.a(["radiant","dazzling"],s)
q=$.K
n=H.a([$.aa,$.ba],o)
H.a([],s)
r=new G.d("Radiant",n,q,r,0)
$.$get$b().h(0,r)
$.BG=r
r=H.a(["edgy"],s)
q=$.K
n=H.a([$.aL,$.at,$.ay],o)
H.a([],s)
r=new G.d("Edgy",n,q,r,0)
$.$get$b().h(0,r)
$.zp=r
r=H.a(["A-Bomb","Warhead","Chernobyl"],s)
q=$.o
n=H.a([$.c2,$.bs],o)
H.a([],s)
r=new G.d("Warhead",n,q,r,0)
$.$get$b().h(0,r)
$.yc=r
r=H.a(["living"],s)
q=$.H
n=H.a([$.bh,$.bo,$.aJ],o)
H.a([],s)
r=new G.d("Living",n,q,r,0)
$.$get$b().h(0,r)
$.AC=r
r=H.a(["dead","corpse","deceased"],s)
q=$.H
n=H.a([$.bh,$.bo],o)
H.a([],s)
r=new G.d("Dead",n,q,r,0)
$.$get$b().h(0,r)
$.z6=r
r=H.a(["taser"],s)
q=$.o
n=H.a([$.ad,$.bk,$.b_],o)
H.a([],s)
r=new G.d("Taser",n,q,r,0)
$.$get$b().h(0,r)
$.CG=r
r=H.a(["nocturn"],s)
q=$.o
n=H.a([$.at,$.af],o)
H.a([],s)
r=new G.d("Nocturn",n,q,r,0)
$.$get$b().h(0,r)
$.B7=r
r=H.a(["dirge"],s)
q=$.o
n=H.a([$.aS,$.af],o)
H.a([],s)
r=new G.d("Dirge",n,q,r,0)
$.$get$b().h(0,r)
$.zd=r
r=H.a(["Snobbish","Noble"],s)
q=$.K
n=H.a([$.ap,$.bl],o)
H.a([],s)
r=new G.d("Snobbish",n,q,r,0)
$.$get$b().h(0,r)
$.Cq=r
r=H.a(["flat"],s)
q=$.K
n=H.a([$.al,$.af],o)
H.a([],s)
r=new G.d("Flat(Music)",n,q,r,0)
$.$get$b().h(0,r)
$.zH=r
r=H.a(["sharp"],s)
q=$.K
n=H.a([$.aL,$.af],o)
H.a([],s)
r=new G.d("Sharp(Music)",n,q,r,0)
$.$get$b().h(0,r)
$.C7=r
r=H.a(["sharp"],s)
q=$.K
n=H.a([$.ap,$.af],o)
H.a([],s)
r=new G.d("Sharp(Clothes)",n,q,r,0)
$.$get$b().h(0,r)
$.C6=r
r=H.a(["Bach's"],s)
q=$.ag
n=H.a([$.a1,$.af],o)
H.a([],s)
r=new G.d("Bach's",n,q,r,0)
$.$get$b().h(0,r)
$.yl=r
r=H.a(["Mozart's"],s)
q=$.ag
n=H.a([$.aa,$.af],o)
H.a([],s)
r=new G.d("Mozart's",n,q,r,0)
$.$get$b().h(0,r)
$.B0=r
r=H.a(["Einstein's","Oppenheimer"],s)
q=$.ag
n=H.a([$.a1,$.c2],o)
H.a([],s)
r=new G.d("Einstein's",n,q,r,0)
$.$get$b().h(0,r)
$.zr=r
r=H.a(["Feynman's"],s)
q=$.ag
n=H.a([$.a1,$.b9],o)
H.a([],s)
r=new G.d("Feynman's",n,q,r,0)
$.$get$b().h(0,r)
$.zB=r
r=H.a(["Ziptie"],s)
q=$.ag
n=H.a([$.aU,$.bk],o)
H.a([],s)
r=new G.d("Ziptie",n,q,r,0)
$.$get$b().h(0,r)
$.D6=r
r=H.a(["cellular","mobile","handheld","computerized"],s)
q=$.o
n=H.a([$.C,$.a1],o)
H.a([],s)
r=new G.d("Mobile",n,q,r,0)
$.$get$b().h(0,r)
$.lH=r
r=H.a(["Sassacre"],s)
q=$.ag
n=H.a([$.c8,$.b9],o)
H.a([],s)
r=new G.d("Sassacre",n,q,r,0)
$.$get$b().h(0,r)
$.BX=r
r=H.a(["Sledge"],s)
q=$.o
n=H.a([$.al,$.c8],o)
H.a([],s)
r=new G.d("Sledge",n,q,r,0)
$.$get$b().h(0,r)
$.Co=r
r=H.a(["Legal"],s)
q=$.o
n=H.a([$.bk,$.Q],o)
H.a([],s)
r=new G.d("Legal",n,q,r,0)
$.$get$b().h(0,r)
$.lD=r
r=H.a(["Clown"],s)
q=$.o
n=H.a([$.b9,$.bb],o)
H.a([],s)
r=new G.d("Clown",n,q,r,0)
$.$get$b().h(0,r)
$.yW=r
r=H.a(["passionate"],s)
q=$.K
n=H.a([$.aI,$.aO],o)
H.a([],s)
r=new G.d("Passionate",n,q,r,0)
$.$get$b().h(0,r)
$.Bh=r
r=H.a(["pinata"],s)
q=$.a8
n=H.a([$.Q,$.aH],o)
H.a([],s)
r=new G.d("Pinata",n,q,r,0)
$.$get$b().h(0,r)
$.Bl=r
r=H.a(["anvil"],s)
q=$.o
n=H.a([$.al,$.c8,$.C],o)
H.a([],s)
r=new G.d("Anvil",n,q,r,0)
$.$get$b().h(0,r)
$.yi=r
r=H.a(["flashbang"],s)
q=$.o
n=H.a([$.ba,$.bs],o)
H.a([],s)
r=new G.d("Flashbang",n,q,r,0)
$.$get$b().h(0,r)
$.zG=r
r=H.a(["smokebomb"],s)
q=$.o
n=H.a([$.at,$.bs],o)
H.a([],s)
r=new G.d("Smokebomb",n,q,r,0)
$.$get$b().h(0,r)
$.Cp=r
r=H.a(["ninja"],s)
q=$.o
n=H.a([$.at,$.aL],o)
H.a([],s)
r=new G.d("Ninja",n,q,r,0)
$.$get$b().h(0,r)
$.B6=r
r=H.a(["techno"],s)
q=$.o
n=H.a([$.ad,$.af],o)
H.a([],s)
r=new G.d("Techno",n,q,r,0)
$.$get$b().h(0,r)
$.CJ=r
r=H.a(["rock and roll"],s)
q=$.o
n=H.a([$.aM,$.af],o)
H.a([],s)
r=new G.d("Rock And/Or Roll",n,q,r,0)
$.$get$b().h(0,r)
$.BL=r
r=H.a(["pistol shrimp","horrifying"],s)
q=$.a8
n=H.a([$.aJ,$.bo,$.b_],o)
H.a([],s)
r=new G.d("Pistol Shrimp",n,q,r,0)
$.$get$b().h(0,r)
$.Bm=r
r=H.a(["juggalo"],s)
q=$.o
n=H.a([$.b9,$.af,$.bb,$.bg],o)
H.a([],s)
r=new G.d("Juggalo",n,q,r,0)
$.$get$b().h(0,r)
$.uz=r
r=H.a(["shocksauce"],s)
q=$.K
n=H.a([$.ay,$.ad],o)
H.a([],s)
r=new G.d("Shock Sauce",n,q,r,0)
$.$get$b().h(0,r)
$.Ca=r
r=H.a(["weaksauce"],s)
q=$.K
n=H.a([$.al,$.ay,$.bS],o)
H.a([],s)
r=new G.d("Weak Sauce",n,q,r,0)
$.$get$b().h(0,r)
$.CX=r
r=H.a(["spicy","picante"],s)
q=$.K
n=H.a([$.aI,$.aH],o)
H.a([],s)
r=new G.d("Spicy",n,q,r,0)
$.$get$b().h(0,r)
$.Cu=r
r=H.a(["ice cream","popsicle"],s)
q=$.r
n=H.a([$.bq,$.aH],o)
H.a([],s)
r=new G.d("Popsicle",n,q,r,0)
$.$get$b().h(0,r)
$.Ah=r
r=H.a(["popsickle"],s)
q=$.r
n=H.a([$.bq,$.aH,$.aL],o)
H.a([],s)
r=new G.d("Popsickle",n,q,r,0)
$.$get$b().h(0,r)
$.By=r
r=H.a(["icepick"],s)
q=$.r
n=H.a([$.bq,$.b1],o)
H.a([],s)
r=new G.d("Icepick",n,q,r,0)
$.$get$b().h(0,r)
$.Ai=r
r=H.a(["schezwan"],s)
q=$.K
n=H.a([$.ay,$.aH],o)
H.a([],s)
r=new G.d("Schezwan",n,q,r,0)
$.$get$b().h(0,r)
$.C_=r
r=H.a(["vaporwave"],s)
q=$.o
n=H.a([$.at,$.af,$.ay,$.ad],o)
H.a([],s)
r=new G.d("Vaporwave",n,q,r,0)
$.$get$b().h(0,r)
$.CV=r
r=H.a(["mallet"],s)
q=$.a8
n=H.a([$.a2,$.al],o)
H.a([],s)
r=new G.d("Mallet",n,q,r,0)
$.$get$b().h(0,r)
$.AI=r
r=H.a(["fidget"],s)
q=$.o
n=H.a([$.aU,$.ay],o)
H.a([],s)
r=new G.d("Fidget",n,q,r,0)
$.$get$b().h(0,r)
$.zD=r
r=H.a(["gold foil"],s)
q=$.r
n=H.a([$.C,$.Q,$.bl],o)
H.a([],s)
r=new G.d("Gold Foil",n,q,r,0)
$.$get$b().h(0,r)
$.A_=r
r=H.a(["caviar"],s)
q=$.r
n=H.a([$.aH,$.bl],o)
H.a([],s)
r=new G.d("Caviar",n,q,r,0)
$.$get$b().h(0,r)
$.yM=r
r=H.a(["RADioactive"],s)
q=$.K
n=H.a([$.c2,$.ay],o)
H.a([],s)
r=new G.d("RADioactive",n,q,r,0)
$.$get$b().h(0,r)
$.BH=r
r=H.a(["glam"],s)
q=$.K
n=H.a([$.aM,$.af,$.aN],o)
H.a([],s)
r=new G.d("Glam",n,q,r,0)
$.$get$b().h(0,r)
$.zY=r
r=H.a(["hair metal"],s)
q=$.K
n=H.a([$.C,$.af,$.aN],o)
H.a([],s)
r=new G.d("Hair Metal",n,q,r,0)
$.$get$b().h(0,r)
$.A5=r
r=H.a(["elven","fae","sylvan"],s)
q=$.K
n=H.a([$.aa,$.aN],o)
H.a([],s)
r=new G.d("Elven",n,q,r,0)
$.$get$b().h(0,r)
$.zt=r
r=H.a(["shiny"],s)
q=$.K
n=H.a([$.C,$.aN],o)
H.a([],s)
r=new G.d("Shiny",n,q,r,0)
$.$get$b().h(0,r)
$.C9=r
r=H.a(["bespoke","well-tailored","glamorous","haute couture"],s)
q=$.K
n=H.a([$.bl,$.aN,$.ap],o)
H.a([],s)
r=new G.d("Bespoke",n,q,r,0)
$.$get$b().h(0,r)
$.f2=r
r=H.a(["operatic"],s)
q=$.K
n=H.a([$.bl,$.af,$.ap],o)
H.a([],s)
r=new G.d("Operatic",n,q,r,0)
$.$get$b().h(0,r)
$.Bb=r
r=H.a(["ice","diamond"],s)
q=$.r
n=H.a([$.bl,$.bq],o)
H.a([],s)
r=new G.d("Diamond",n,q,r,0)
$.$get$b().h(0,r)
$.uw=r
r=H.a(["icy hot","cold fire","wet","damp","moist","watery"],s)
q=$.K
n=H.a([$.aI,$.bq],o)
H.a([],s)
r=new G.d("Icy Hot",n,q,r,0)
$.$get$b().h(0,r)
$.Aj=r
r=H.a(["ice cold","cold as fuck"],s)
q=$.K
n=H.a([$.ay,$.bq],o)
H.a([],s)
r=new G.d("Cold As Fuck",n,q,r,0)
$.$get$b().h(0,r)
$.Ag=r
r=H.a(["winter's","season's"],s)
q=$.ag
n=H.a([$.by,$.bq],o)
H.a([],s)
r=new G.d("Winter's",n,q,r,0)
$.$get$b().h(0,r)
$.D_=r
r=H.a(["santa's","christmas","xmas"],s)
q=$.ag
n=H.a([$.aa,$.bq],o)
H.a([],s)
r=new G.d("Christmas",n,q,r,0)
$.$get$b().h(0,r)
$.yS=r
r=H.a(["Santa Saws"],s)
q=$.ag
n=H.a([$.aa,$.bq,$.aL],o)
H.a([],s)
r=new G.d("Santa Saws",n,q,r,0)
$.$get$b().h(0,r)
$.BV=r
r=H.a(["Santa Sleighs"],s)
q=$.ag
n=H.a([$.fW,$.aL],o)
H.a([],s)
r=new G.d("Santa Sleighs",n,q,r,0)
$.$get$b().h(0,r)
$.BW=r
r=H.a(["Santa Claws"],s)
q=$.ag
n=H.a([$.fW,$.lB],o)
H.a([],s)
r=new G.d("Santa Claws",n,q,r,0)
$.$get$b().h(0,r)
$.BU=r
r=H.a(["Sandy Claws"],s)
q=$.ag
n=H.a([$.fW,$.lB,$.aM],o)
H.a([],s)
r=new G.d("Sandy Claws",n,q,r,0)
$.$get$b().h(0,r)
$.BT=r
r=H.a(["Silent Night"],s)
q=$.ag
n=H.a([$.fW,$.at],o)
H.a([],s)
r=new G.d("Silent Night",n,q,r,0)
$.$get$b().h(0,r)
$.Ch=r
r=H.a(["ghost's","Bloody Mary","Halloween"],s)
q=$.ag
n=H.a([$.bg,$.bZ],o)
H.a([],s)
r=new G.d("Ghost's",n,q,r,0)
$.$get$b().h(0,r)
$.A6=r
r=H.a(["ghoul","mutant"],s)
q=$.r
n=H.a([$.bo,$.c2,$.bT],o)
H.a([],s)
r=new G.d("Mutant",n,q,r,0)
$.$get$b().h(0,r)
$.B1=r
r=H.a(["skate","skateboard"],s)
q=$.o
n=H.a([$.ay,$.C],o)
H.a([],s)
r=new G.d("Skateboard",n,q,r,0)
$.$get$b().h(0,r)
$.Ck=r
r=H.a(["microwave"],s)
q=$.o
n=H.a([$.c2,$.ad,$.aH],o)
H.a([],s)
r=new G.d("Microwave",n,q,r,0)
$.$get$b().h(0,r)
$.AT=r
r=H.a(["orbital"],s)
q=$.o
n=H.a([$.c2,$.ad,$.aH,$.b_],o)
H.a([],s)
r=new G.d("Orbital",n,q,r,0)
$.$get$b().h(0,r)
$.Bc=r
r=H.a([],s)
q=$.o
n=H.a([$.al,$.a1],o)
H.a([],s)
r=new G.d("",n,q,r,0)
$.$get$b().h(0,r)
$.zm=r
r=H.a(["uranium"],s)
q=$.r
n=H.a([$.c2,$.aM],o)
H.a([],s)
r=new G.d("Uranium",n,q,r,0)
$.$get$b().h(0,r)
$.CU=r
r=H.a(["mousepad","jar opener"],s)
q=$.o
n=H.a([$.Q,$.c9],o)
H.a([],s)
r=new G.d("Mousepad",n,q,r,0)
$.$get$b().h(0,r)
$.B_=r
r=H.a(["flint"],s)
q=$.r
n=H.a([$.aL,$.aM],o)
H.a([],s)
r=new G.d("Sharpened Flint",n,q,r,0)
$.$get$b().h(0,r)
$.zJ=r
r=H.a(["flint"],s)
q=$.r
n=H.a([$.b1,$.aM],o)
H.a([],s)
r=new G.d("Pointed Flint",n,q,r,0)
$.$get$b().h(0,r)
$.zK=r
r=H.a(["picnic"],s)
q=$.o
n=H.a([$.aU,$.b1],o)
H.a([],s)
r=new G.d("Picnic",n,q,r,0)
$.$get$b().h(0,r)
$.Bk=r
r=H.a(["xtreme xplosion"],s)
q=$.K
n=H.a([$.ay,$.bs],o)
H.a([],s)
r=new G.d("Xtreme Xplosion",n,q,r,0)
$.$get$b().h(0,r)
$.D5=r
r=H.a(["lawn"],s)
q=$.o
n=H.a([$.aU,$.bj],o)
H.a([],s)
r=new G.d("Lawn",n,q,r,0)
$.$get$b().h(0,r)
$.Aw=r
r=H.a(["upholstered"],s)
q=$.r
n=H.a([$.S,$.bj],o)
H.a([],s)
r=new G.d("Upholstered",n,q,r,0)
$.$get$b().h(0,r)
$.CT=r
r=H.a(["leather"],s)
q=$.r
n=H.a([$.bo,$.bj],o)
H.a([],s)
r=new G.d("Leather",n,q,r,0)
$.$get$b().h(0,r)
$.uD=r
r=H.a(["shag"],s)
q=$.r
n=H.a([$.ce,$.bj],o)
H.a([],s)
r=new G.d("Shag",n,q,r,0)
$.$get$b().h(0,r)
$.C5=r
r=H.a(["loyal"],s)
q=$.K
n=H.a([$.al,$.aO],o)
H.a([],s)
r=new G.d("Loyal",n,q,r,0)
$.$get$b().h(0,r)
$.AG=r
r=H.a(["porcelain"],s)
q=$.r
n=H.a([$.aN,$.bQ],o)
H.a([],s)
r=new G.d("Porcelain",n,q,r,0)
$.$get$b().h(0,r)
$.lG=r
r=H.a(["pork hollow","piggy bank"],s)
q=$.a8
n=H.a([$.bl,$.bQ],o)
H.a([],s)
r=new G.d("Pork Hollow",n,q,r,0)
$.$get$b().h(0,r)
$.BA=r
r=H.a(["n1nj4","katana"],s)
q=$.o
n=H.a([$.ay,$.aL],o)
H.a([],s)
r=new G.d("Katana",n,q,r,0)
$.$get$b().h(0,r)
$.Ar=r
r=H.a(["chocolate"],s)
q=$.r
n=H.a([$.aO,$.aH],o)
H.a([],s)
r=new G.d("Chocolate",n,q,r,0)
$.$get$b().h(0,r)
$.yR=r
r=H.a(["wrapped chocolate"],s)
q=$.r
n=H.a([$.aO,$.aH,$.Q,$.C],o)
H.a([],s)
r=new G.d("Wrapped Chocolate",n,q,r,0)
$.$get$b().h(0,r)
$.zN=r
r=H.a(["scratch-n-sniff"],s)
q=$.r
n=H.a([$.ay,$.Q],o)
H.a([],s)
r=new G.d("Scratch-n-sniff",n,q,r,0)
$.$get$b().h(0,r)
$.C1=r
r=H.a(["mythril","orichalcum"],s)
q=$.r
n=H.a([$.aa,$.C],o)
H.a([],s)
r=new G.d("Mythril",n,q,r,0)
$.$get$b().h(0,r)
$.B2=r
r=H.a(["titanium","steel"],s)
q=$.r
n=H.a([$.al,$.C],o)
H.a([],s)
r=new G.d("Titanium",n,q,r,0)
$.$get$b().h(0,r)
$.CO=r
r=H.a(["lead"],s)
q=$.r
n=H.a([$.c8,$.C],o)
H.a([],s)
r=new G.d("Lead",n,q,r,0)
$.$get$b().h(0,r)
$.uC=r
r=H.a(["satire","parody","onion"],s)
q=$.o
n=H.a([$.b8,$.b9],o)
H.a([],s)
r=new G.d("Satire",n,q,r,0)
$.$get$b().h(0,r)
$.Ba=r
r=H.a(["comedy gold"],s)
q=$.K
n=H.a([$.bl,$.b9],o)
H.a([],s)
r=new G.d("Comedy Gold",n,q,r,0)
$.$get$b().h(0,r)
$.yY=r
r=H.a(["dry","sensible chuckle"],s)
q=$.K
n=H.a([$.ap,$.b9],o)
H.a([],s)
r=new G.d("Dry",n,q,r,0)
$.$get$b().h(0,r)
$.zj=r
r=H.a(["polite"],s)
q=$.K
n=H.a([$.bj,$.b8],o)
H.a([],s)
r=new G.d("Polite",n,q,r,0)
$.$get$b().h(0,r)
$.Bw=r
r=H.a(["stradivarius"],s)
q=$.ag
n=H.a([$.ap,$.bl,$.a2,$.af],o)
H.a([],s)
r=new G.d("Stradivarius",n,q,r,0)
$.$get$b().h(0,r)
$.CB=r
r=H.a(["scientistic"],s)
q=$.K
n=H.a([$.a1,$.b8],o)
H.a([],s)
r=new G.d("Scientistic",n,q,r,0)
$.$get$b().h(0,r)
$.C0=r
r=H.a(["AI"],s)
q=$.o
n=H.a([$.ad,$.aJ],o)
H.a([],s)
r=new G.d("AI",n,q,r,0)
$.$get$b().h(0,r)
$.rc=r
r=H.a(["robotic"],s)
q=$.H
n=H.a([$.C,$.ad,$.aJ],o)
H.a([],s)
r=new G.d("Robotic",n,q,r,0)
$.$get$b().h(0,r)
$.uI=r
r=H.a(["shrapnel"],s)
q=$.o
n=H.a([$.a2,$.bs],o)
H.a([],s)
r=new G.d("Shrapnel",n,q,r,0)
$.$get$b().h(0,r)
$.Cc=r
r=H.a(["vocaloid"],s)
q=$.o
n=H.a([$.aJ,$.ad,$.af],o)
H.a([],s)
r=new G.d("Vocaloid",n,q,r,0)
$.$get$b().h(0,r)
$.CW=r
r=H.a(["*Hyun-ae"],s)
q=$.ag
n=H.a([$.aJ,$.ad,$.aO],o)
H.a([],s)
r=new G.d("*Hyun-ae",n,q,r,0)
$.$get$b().h(0,r)
$.Af=r
r=H.a(["buckshot"],s)
q=$.o
n=H.a([$.a2,$.b_],o)
H.a([],s)
r=new G.d("Buckshot",n,q,r,0)
$.$get$b().h(0,r)
$.yA=r
r=H.a(["cannon"],s)
q=$.o
n=H.a([$.c8,$.b_],o)
H.a([],s)
r=new G.d("Cannon",n,q,r,0)
$.$get$b().h(0,r)
$.yJ=r
r=H.a(["stationary"],s)
q=$.o
n=H.a([$.ap,$.Q],o)
H.a([],s)
r=new G.d("Stationary",n,q,r,0)
$.$get$b().h(0,r)
$.Cz=r
r=H.a([],s)
q=$.o
n=H.a([$.aT,$.Q],o)
H.a([],s)
r=new G.d("",n,q,r,0)
$.$get$b().h(0,r)
$.Be=r
r=H.a([],s)
q=$.o
n=H.a([$.C,$.b_],o)
H.a([],s)
r=new G.d("",n,q,r,0)
$.$get$b().h(0,r)
$.AR=r
r=H.a(["papercut"],s)
q=$.o
n=H.a([$.aL,$.Q],o)
H.a([],s)
r=new G.d("Papercut",n,q,r,0)
$.$get$b().h(0,r)
$.Bf=r
r=H.a(["squeaky"],s)
q=$.H
n=H.a([$.al,$.c9],o)
H.a([],s)
r=new G.d("Squeaky",n,q,r,0)
$.$get$b().h(0,r)
$.Cw=r
r=H.a(["kazoo"],s)
q=$.o
n=H.a([$.b8,$.af],o)
H.a([],s)
r=new G.d("Kazoo",n,q,r,0)
$.$get$b().h(0,r)
$.As=r
r=H.a(["bandaid"],s)
q=$.o
n=H.a([$.b3,$.Q],o)
H.a([],s)
r=new G.d("Bandaid",n,q,r,0)
$.$get$b().h(0,r)
$.ym=r
r=H.a(["gushers"],s)
q=$.o
n=H.a([$.b3,$.aH],o)
H.a([],s)
r=new G.d("Gushers",n,q,r,0)
$.$get$b().h(0,r)
$.A4=r
r=H.a(["medic"],s)
q=$.o
n=H.a([$.b3,$.b_],o)
H.a([],s)
r=new G.d("Medic",n,q,r,0)
$.$get$b().h(0,r)
$.AP=r
r=H.a(["sick nasty","ill"],s)
q=$.H
n=H.a([$.ay,$.bR],o)
H.a([],s)
r=new G.d("Sick Nasty",n,q,r,0)
$.$get$b().h(0,r)
$.Ce=r
r=H.a(["gilded","gold leaf"],s)
q=$.r
n=H.a([$.C,$.a2],o)
H.a([],s)
r=new G.d("Gilded",n,q,r,0)
$.$get$b().h(0,r)
$.zX=r
r=H.a(["charging","power cord"],s)
q=$.o
n=H.a([$.aU,$.ad],o)
H.a([],s)
r=new G.d("Charging",n,q,r,0)
$.$get$b().h(0,r)
$.yQ=r
r=H.a(["safety"],s)
q=$.o
n=H.a([$.c9,$.aL],o)
H.a([],s)
r=new G.d("Rubber Safety",n,q,r,0)
$.$get$b().h(0,r)
$.BR=r
r=H.a(["safety"],s)
q=$.o
n=H.a([$.aU,$.aL],o)
H.a([],s)
r=new G.d("Plastic Safety",n,q,r,0)
$.$get$b().h(0,r)
$.BS=r
r=H.a(["thunderous","thor's"],s)
q=$.K
n=H.a([$.bb,$.ad],o)
H.a([],s)
r=new G.d("Thunderous",n,q,r,0)
$.$get$b().h(0,r)
$.CM=r
r=H.a(["screeching","dial up"],s)
q=$.K
n=H.a([$.bb,$.ad,$.a1],o)
H.a([],s)
r=new G.d("Screeching",n,q,r,0)
$.$get$b().h(0,r)
$.C3=r
r=H.a(["mirrored","reflective"],s)
q=$.o
n=H.a([$.bf,$.C],o)
H.a([],s)
r=new G.d("Mirrored",n,q,r,0)
$.$get$b().h(0,r)
$.rs=r
r=H.a(["far seeing","sighted"],s)
q=$.o
n=H.a([$.bf,$.aM,$.aa],o)
H.a([],s)
r=new G.d("Far Seeing",n,q,r,0)
$.$get$b().h(0,r)
$.un=r
r=H.a(["disabling","non lethal"],s)
q=$.o
n=H.a([$.c9,$.b_],o)
H.a([],s)
r=new G.d("Nonlethal",n,q,r,0)
$.$get$b().h(0,r)
$.ze=r
r=H.a(["fashionable"],s)
q=$.o
n=H.a([$.aN,$.ap],o)
H.a([],s)
r=new G.d("Fashionable",n,q,r,0)
$.$get$b().h(0,r)
$.up=r
r=H.a(["ironic"],s)
q=$.K
n=H.a([$.b9,$.ay],o)
H.a([],s)
r=new G.d("Ironic Type 2",n,q,r,0)
$.$get$b().h(0,r)
$.An=r
r=H.a(["ironic"],s)
q=$.K
n=H.a([$.bS,$.b9],o)
H.a([],s)
r=new G.d("Ironic Type 3",n,q,r,0)
$.$get$b().h(0,r)
$.ux=r
r=H.a(["post-ironic"],s)
q=$.K
n=H.a([$.b8,$.ay,$.ap],o)
H.a([],s)
r=new G.d("Post Ironic",n,q,r,0)
$.$get$b().h(0,r)
$.BC=r
r=H.a(["monstrous"],s)
q=$.K
n=H.a([$.bT,$.bb,$.bg],o)
H.a([],s)
r=new G.d("Monstrous",n,q,r,0)
$.$get$b().h(0,r)
$.AY=r
r=H.a(["rooty tooty point and shooty"],s)
q=$.o
n=H.a([$.b_,$.ay,$.ap],o)
H.a([],s)
r=new G.d("Rooty Tooty Point and Shooty",n,q,r,0)
$.$get$b().h(0,r)
$.BN=r
r=H.a(["golden"],s)
q=$.r
n=H.a([$.C,$.bl],o)
H.a([],s)
r=new G.d("Golden",n,q,r,0)
$.$get$b().h(0,r)
$.rm=r
r=H.a(["platinum"],s)
q=$.r
n=H.a([$.ba,$.C],o)
H.a([],s)
r=new G.d("Platinum",n,q,r,0)
$.$get$b().h(0,r)
$.lF=r
r=H.a(["horseshoe"],s)
q=$.o
n=H.a([$.c_,$.C],o)
H.a([],s)
r=new G.d("Horseshoe",n,q,r,0)
$.$get$b().h(0,r)
$.uv=r
r=H.a(["felt"],s)
q=$.o
n=H.a([$.S,$.ce],o)
H.a([],s)
r=new G.d("Felt",n,q,r,0)
$.$get$b().h(0,r)
$.zz=r
r=H.a(["marble"],s)
q=$.r
n=H.a([$.aM,$.ap],o)
H.a([],s)
r=new G.d("Marble",n,q,r,0)
$.$get$b().h(0,r)
$.uE=r
r=H.a(["marble"],s)
q=$.r
n=H.a([$.aM,$.c8],o)
H.a([],s)
r=new G.d("Marble",n,q,r,0)
$.$get$b().h(0,r)
$.A1=r
r=H.a(["glitched"],s)
q=$.H
n=H.a([$.br,$.ad],o)
H.a([],s)
r=new G.d("Glitched",n,q,r,0)
$.$get$b().h(0,r)
$.ut=r
r=H.a(["debugging"],s)
q=$.o
n=H.a([$.b3,$.ad],o)
H.a([],s)
r=new G.d("Debugging",n,q,r,0)
$.$get$b().h(0,r)
$.z9=r
r=H.a(["Iron Maiden","Metalic"],s)
q=$.o
n=H.a([$.C,$.bb,$.af],o)
H.a([],s)
r=new G.d("Metalic",n,q,r,0)
$.$get$b().h(0,r)
$.AS=r
r=H.a(["Simulacrum"],s)
q=$.K
n=H.a([$.aJ,$.b8],o)
H.a([],s)
r=new G.d("Simulacrum",n,q,r,0)
$.$get$b().h(0,r)
$.Cj=r
r=H.a(["Imitation"],s)
q=$.o
n=H.a([$.aH,$.b8],o)
H.a([],s)
r=new G.d("Imitation",n,q,r,0)
$.$get$b().h(0,r)
$.Ak=r
r=H.a(["Placebo"],s)
q=$.o
n=H.a([$.b3,$.b8],o)
H.a([],s)
r=new G.d("Placebo",n,q,r,0)
$.$get$b().h(0,r)
$.Bo=r
r=H.a(["counterfeit"],s)
q=$.o
n=H.a([$.bl,$.b8],o)
H.a([],s)
r=new G.d("Counterfeit",n,q,r,0)
$.$get$b().h(0,r)
$.z2=r
r=H.a(["Surreal"],s)
q=$.K
n=H.a([$.ay,$.aV,$.b9],o)
H.a([],s)
r=new G.d("Surreal1",n,q,r,0)
$.$get$b().h(0,r)
$.CD=r
r=H.a(["Brainy"],s)
q=$.K
n=H.a([$.a1,$.bo],o)
H.a([],s)
r=new G.d("Brainy",n,q,r,0)
$.$get$b().h(0,r)
$.yx=r
r=H.a(["Incendiary"],s)
q=$.o
n=H.a([$.aI,$.bs],o)
H.a([],s)
r=new G.d("Incendiary",n,q,r,0)
$.$get$b().h(0,r)
$.Al=r
r=H.a(["C-4"],s)
q=$.r
n=H.a([$.bs,$.aU],o)
H.a([],s)
r=new G.d("C-4",n,q,r,0)
$.$get$b().h(0,r)
$.yE=r
r=H.a(["fae"],s)
q=$.o
n=H.a([$.aa,$.ba,$.br],o)
H.a([],s)
r=new G.d("Fae",n,q,r,0)
$.$get$b().h(0,r)
$.zw=r
r=H.a(["Plutonium"],s)
q=$.r
n=H.a([$.C,$.c2],o)
H.a([],s)
r=new G.d("Plutonium",n,q,r,0)
$.$get$b().h(0,r)
$.Bs=r
r=H.a(["Lithium"],s)
q=$.r
n=H.a([$.C,$.ad],o)
H.a([],s)
r=new G.d("Lithium",n,q,r,0)
$.$get$b().h(0,r)
$.AB=r
r=H.a(["Molten"],s)
q=$.r
n=H.a([$.C,$.aI],o)
H.a([],s)
r=new G.d("Molten",n,q,r,0)
$.$get$b().h(0,r)
$.AX=r
r=H.a(["Magma","Lava","Sulphuric"],s)
q=$.r
n=H.a([$.aM,$.aI],o)
H.a([],s)
r=new G.d("Magma",n,q,r,0)
$.$get$b().h(0,r)
$.AH=r
r=H.a(["Rusty"],s)
q=$.H
n=H.a([$.C,$.bS],o)
H.a([],s)
r=new G.d("Rusty",n,q,r,0)
$.$get$b().h(0,r)
$.BQ=r
r=H.a(["Fonzie"],s)
q=$.o
n=H.a([$.aL,$.ay,$.ap],o)
H.a([],s)
r=new G.d("Fonzie",n,q,r,0)
$.$get$b().h(0,r)
$.zO=r
r=H.a(["Romcom"],s)
q=$.o
n=H.a([$.aO,$.b9],o)
H.a([],s)
r=new G.d("Romcom",n,q,r,0)
$.$get$b().h(0,r)
$.BM=r
r=H.a(["Alluring"],s)
q=$.o
n=H.a([$.aN,$.ba],o)
H.a([],s)
r=new G.d("Alluring",n,q,r,0)
$.$get$b().h(0,r)
$.yf=r
r=H.a(["Masquerade"],s)
q=$.o
n=H.a([$.aN,$.at],o)
H.a([],s)
r=new G.d("Masquerade",n,q,r,0)
$.$get$b().h(0,r)
$.AL=r
r=H.a(["Stoneskin","Petrified"],s)
q=$.o
n=H.a([$.aM,$.bo],o)
H.a([],s)
r=new G.d("Stoneskin",n,q,r,0)
$.$get$b().h(0,r)
$.CA=r
r=H.a(["Psionic"],s)
q=$.o
n=H.a([$.aa,$.a1],o)
H.a([],s)
r=new G.d("Psionic",n,q,r,0)
$.$get$b().h(0,r)
$.BF=r
r=H.a(["Dwarven"],s)
q=$.o
n=H.a([$.aa,$.aM],o)
H.a([],s)
r=new G.d("Dwarven",n,q,r,0)
$.$get$b().h(0,r)
$.zn=r
r=H.a(["Elemental","Animated"],s)
q=$.r
n=H.a([$.aa,$.aJ],o)
H.a([],s)
r=new G.d("Elemental",n,q,r,0)
$.$get$b().h(0,r)
$.zs=r
r=H.a(["Gourmet"],s)
q=$.K
n=H.a([$.aH,$.ap],o)
H.a([],s)
r=new G.d("Gourmet",n,q,r,0)
$.$get$b().h(0,r)
$.A0=r
r=H.a(["Stained Glass"],s)
q=$.r
n=H.a([$.bf,$.aN,$.bl],o)
H.a([],s)
r=new G.d("Stained Glass",n,q,r,0)
$.$get$b().h(0,r)
$.Cx=r
r=H.a(["Gauze"],s)
q=$.o
n=H.a([$.b3,$.S],o)
H.a([],s)
r=new G.d("Gauze",n,q,r,0)
$.$get$b().h(0,r)
$.zU=r
r=H.a(["Locked"],s)
q=$.H
n=H.a([$.bk,$.bz],o)
H.a([],s)
r=new G.d("Locked",n,q,r,0)
$.$get$b().h(0,r)
$.AD=r
r=H.a(["Etched"],s)
q=$.o
n=H.a([$.aM,$.Q],o)
H.a([],s)
r=new G.d("Etched",n,q,r,0)
$.$get$b().h(0,r)
$.zv=r
r=H.a(["Papyrus"],s)
q=$.r
n=H.a([$.Q,$.b5],o)
H.a([],s)
r=new G.d("Papyrus",n,q,r,0)
$.$get$b().h(0,r)
$.Bg=r
r=H.a(["film"],s)
q=$.o
n=H.a([$.Q,$.aU],o)
H.a([],s)
r=new G.d("Film",n,q,r,0)
$.$get$b().h(0,r)
$.zE=r
r=H.a(["Saucey"],s)
q=$.r
n=H.a([$.br,$.bz,$.bT],o)
H.a([],s)
r=new G.d("Saucey",n,q,r,0)
$.$get$b().h(0,r)
$.BY=r
r=H.a(["Lottery"],s)
q=$.o
n=H.a([$.Q,$.c_],o)
H.a([],s)
r=new G.d("Lottery",n,q,r,0)
$.$get$b().h(0,r)
$.AF=r
r=H.a(["Blindfolded"],s)
q=$.o
n=H.a([$.at,$.S],o)
H.a([],s)
r=new G.d("Blindfolded",n,q,r,0)
$.$get$b().h(0,r)
$.uj=r
r=H.a(["Possessed"],s)
q=$.H
n=H.a([$.bZ,$.bo],o)
H.a([],s)
r=new G.d("Possessed",n,q,r,0)
$.$get$b().h(0,r)
$.BB=r
r=H.a(["Infernal"],s)
q=$.K
n=H.a([$.bZ,$.aI],o)
H.a([],s)
r=new G.d("Infernal",n,q,r,0)
$.$get$b().h(0,r)
$.Am=r
r=H.a(["Geppetto's","Pinocchio"],s)
q=$.o
n=H.a([$.a2,$.bp,$.rx,$.aJ],o)
H.a([],s)
r=new G.d("Geppetto",n,q,r,0)
$.$get$b().h(0,r)
$.zV=r
r=H.a(["Abominable"],s)
q=$.K
n=H.a([$.bo,$.br],o)
H.a([],s)
r=new G.d("Abominable",n,q,r,0)
$.$get$b().h(0,r)
$.yd=r
r=H.a(["Ashen"],s)
q=$.o
n=H.a([$.aO,$.aS],o)
H.a([],s)
r=new G.d("Ashen",n,q,r,0)
$.$get$b().h(0,r)
$.yk=r
r=H.a(["Pale"],s)
q=$.o
n=H.a([$.aO,$.by],o)
H.a([],s)
r=new G.d("Pale",n,q,r,0)
$.$get$b().h(0,r)
$.Bd=r
r=H.a(["Pitch"],s)
q=$.o
n=H.a([$.aO,$.bz],o)
H.a([],s)
r=new G.d("Pitch",n,q,r,0)
$.$get$b().h(0,r)
$.Bn=r
r=H.a(["Lit"],s)
q=$.K
n=H.a([$.ay,$.aI],o)
H.a([],s)
r=new G.d("Lit",n,q,r,0)
$.$get$b().h(0,r)
$.AA=r
r=H.a(["Hypnotizing"],s)
q=$.o
n=H.a([$.aa,$.by],o)
H.a([],s)
r=new G.d("Hypnotizing",n,q,r,0)
$.$get$b().h(0,r)
$.Ad=r
r=H.a(["Tranquilizing"],s)
q=$.o
n=H.a([$.by,$.bk],o)
H.a([],s)
r=new G.d("Tranquilizing",n,q,r,0)
$.$get$b().h(0,r)
$.CR=r
r=H.a([],s)
q=$.o
n=H.a([$.by,$.bz],o)
H.a([],s)
r=new G.d("",n,q,r,0)
$.$get$b().h(0,r)
$.yH=r
r=H.a(["Ghost Rider's"],s)
q=$.ag
n=H.a([$.fV,$.aI,$.bZ],o)
H.a([],s)
r=new G.d("Ghost Rider",n,q,r,0)
$.$get$b().h(0,r)
$.zW=r
r=H.a(["Logical"],s)
q=$.K
n=H.a([$.a1,$.bq],o)
H.a([],s)
r=new G.d("Logical",n,q,r,0)
$.$get$b().h(0,r)
$.AE=r
r=H.a(["Duelist's"],s)
q=$.ag
n=H.a([$.b_,$.ap],o)
H.a([],s)
r=new G.d("Duelist's",n,q,r,0)
$.$get$b().h(0,r)
$.zk=r
r=H.a(["Silenced"],s)
q=$.H
n=H.a([$.b_,$.at],o)
H.a([],s)
r=new G.d("Silenced",n,q,r,0)
$.$get$b().h(0,r)
$.Cg=r
r=H.a(["Deudly"],s)
q=$.H
n=H.a([$.b_,$.bS],o)
H.a([],s)
r=new G.d("Deudly",n,q,r,0)
$.$get$b().h(0,r)
$.z8=r
r=H.a(["Screaming"],s)
q=$.H
n=H.a([$.bb,$.bg],o)
H.a([],s)
r=new G.d("Screaming",n,q,r,0)
$.$get$b().h(0,r)
$.C2=r
r=H.a(["Cacophonous"],s)
q=$.K
n=H.a([$.bT,$.af],o)
H.a([],s)
r=new G.d("Cacophonous",n,q,r,0)
$.$get$b().h(0,r)
$.yF=r
r=H.a(["Sublime"],s)
q=$.K
n=H.a([$.bT,$.aN],o)
H.a([],s)
r=new G.d("Sublime",n,q,r,0)
$.$get$b().h(0,r)
$.CC=r
r=H.a(["Masterwork"],s)
q=$.r
n=H.a([$.bp,$.bl],o)
H.a([],s)
r=new G.d("Masterwork",n,q,r,0)
$.$get$b().h(0,r)
$.AN=r
r=H.a(["BroodFester"],s)
q=$.o
n=H.a([$.aJ,$.bg,$.br,$.aa],o)
H.a([],s)
r=new G.d("BroodFester",n,q,r,0)
$.$get$b().h(0,r)
$.yz=r
r=H.a(["[REDACTED]"],s)
q=$.o
n=H.a([$.br,$.at],o)
H.a([],s)
r=new G.d("[REDACTED]",n,q,r,0)
$.$get$b().h(0,r)
$.BK=r
r=H.a(["Pop Rocks"],s)
q=$.o
n=H.a([$.aH,$.bs],o)
H.a([],s)
r=new G.d("Pop Rocks",n,q,r,0)
$.$get$b().h(0,r)
$.Bx=r
r=H.a(["Disguised"],s)
q=$.H
n=H.a([$.at,$.b8],o)
H.a([],s)
r=new G.d("Disguised",n,q,r,0)
$.$get$b().h(0,r)
$.zf=r
r=H.a(["Haunted"],s)
q=$.H
n=H.a([$.aV,$.bZ],o)
H.a([],s)
r=new G.d("Haunted",n,q,r,0)
$.$get$b().h(0,r)
$.A7=r
r=H.a(["Cognitohazardous"],s)
q=$.H
n=H.a([$.br,$.a1],o)
H.a([],s)
r=new G.d("Cognitohazardous",n,q,r,0)
$.$get$b().h(0,r)
$.yX=r
r=H.a(["Staticy"],s)
q=$.H
n=H.a([$.aV,$.ad],o)
H.a([],s)
r=new G.d("Staticy",n,q,r,0)
$.$get$b().h(0,r)
$.Cy=r
r=H.a(["Jadite"],s)
q=$.o
n=H.a([$.bf,$.c2],o)
H.a([],s)
r=new G.d("Jadite",n,q,r,0)
$.$get$b().h(0,r)
$.Ap=r
r=H.a(["Tickling"],s)
q=$.o
n=H.a([$.b9,$.aV],o)
H.a([],s)
r=new G.d("Tickling",n,q,r,0)
$.$get$b().h(0,r)
$.CN=r
r=H.a(["Composite"],s)
q=$.o
n=H.a([$.C,$.bQ],o)
H.a([],s)
r=new G.d("Composite",n,q,r,0)
$.$get$b().h(0,r)
$.yZ=r
r=H.a(["High-Powered"],s)
q=$.H
n=H.a([$.bs,$.b_],o)
H.a([],s)
r=new G.d("High-Powered",n,q,r,0)
$.$get$b().h(0,r)
$.A8=r
r=H.a(["Concussive"],s)
q=$.o
n=H.a([$.bs,$.al],o)
H.a([],s)
r=new G.d("Concussive",n,q,r,0)
$.$get$b().h(0,r)
$.z_=r
r=H.a(["Down"],s)
q=$.r
n=H.a([$.bj,$.bA],o)
H.a([],s)
r=new G.d("Down",n,q,r,0)
$.$get$b().h(0,r)
$.zh=r
r=H.a(["Prickly"],s)
q=$.r
n=H.a([$.aV,$.b1],o)
H.a([],s)
r=new G.d("Prickly",n,q,r,0)
$.$get$b().h(0,r)
$.BE=r
r=H.a(["Deep-Web","Dark-Net"],s)
q=$.o
n=H.a([$.aV,$.at,$.ad],o)
H.a([],s)
r=new G.d("Deep-Web",n,q,r,0)
$.$get$b().h(0,r)
$.zb=r
r=H.a(["Jagged","Sawtooth"],s)
q=$.r
n=H.a([$.b1,$.aL],o)
H.a([],s)
r=new G.d("Jagged",n,q,r,0)
$.$get$b().h(0,r)
$.Aq=r
r=H.a(["Nanofiber"],s)
q=$.r
n=H.a([$.S,$.a1],o)
H.a([],s)
r=new G.d("Nanofiber",n,q,r,0)
$.$get$b().h(0,r)
$.B3=r
r=H.a(["Clanging"],s)
q=$.o
n=H.a([$.C,$.bb],o)
H.a([],s)
r=new G.d("Clanging",n,q,r,0)
$.$get$b().h(0,r)
$.yT=r
r=H.a(["Silver"],s)
q=$.r
n=H.a([$.C,$.ap],o)
H.a([],s)
r=new G.d("Silver",n,q,r,0)
$.$get$b().h(0,r)
$.Ci=r
r=H.a(["Withered"],s)
q=$.H
n=H.a([$.aS,$.b5],o)
H.a([],s)
r=new G.d("Withered",n,q,r,0)
$.$get$b().h(0,r)
$.D1=r
r=H.a(["Shattered"],s)
q=$.H
n=H.a([$.bf,$.bS],o)
H.a([],s)
r=new G.d("Shattered",n,q,r,0)
$.$get$b().h(0,r)
$.C8=r
r=H.a(["Miner's"],s)
q=$.ag
n=H.a([$.aM,$.C],o)
H.a([],s)
r=new G.d("Miner's",n,q,r,0)
$.$get$b().h(0,r)
$.AV=r
r=H.a(["Singing"],s)
q=$.o
n=H.a([$.af,$.aJ],o)
H.a([],s)
r=new G.d("Singing",n,q,r,0)
$.$get$b().h(0,r)
$.Cf=r
r=H.a(["Mitochondrial"],s)
q=$.o
n=H.a([$.bo,$.ad],o)
H.a([],s)
r=new G.d("Mitochondrial",n,q,r,0)
$.$get$b().h(0,r)
$.AW=r
r=H.a(["Blackout","EMP"],s)
q=$.o
n=H.a([$.at,$.ad],o)
H.a([],s)
r=new G.d("Blackout",n,q,r,0)
$.$get$b().h(0,r)
$.ys=r
r=H.a(["Asbestos"],s)
q=$.r
n=H.a([$.aM,$.bR],o)
H.a([],s)
r=new G.d("Asbestos",n,q,r,0)
$.$get$b().h(0,r)
$.ye=r
r=H.a(["Mercurial"],s)
q=$.r
n=H.a([$.bR,$.C],o)
H.a([],s)
r=new G.d("Mercurial",n,q,r,0)
$.$get$b().h(0,r)
$.AO=r
r=H.a(["Bulletproof"],s)
q=$.r
n=H.a([$.S,$.al],o)
H.a([],s)
r=new G.d("Bulletproof",n,q,r,0)
$.$get$b().h(0,r)
$.yC=r
r=H.a(["Cotton"],s)
q=$.r
n=H.a([$.b5,$.S],o)
H.a([],s)
r=new G.d("Cotton",n,q,r,0)
$.$get$b().h(0,r)
$.z0=r
r=H.a(["Blinding","Flashbang","Solar Flare"],s)
q=$.o
n=H.a([$.bz,$.ba],o)
H.a([],s)
r=new G.d("Blinding",n,q,r,0)
$.$get$b().h(0,r)
$.yt=r
r=H.a(["Brilliant"],s)
q=$.K
n=H.a([$.ba,$.a1],o)
H.a([],s)
r=new G.d("Brilliant",n,q,r,0)
$.$get$b().h(0,r)
$.yy=r
r=H.a(["Offensive"],s)
q=$.K
n=H.a([$.bz,$.a1],o)
H.a([],s)
r=new G.d("Offensive",n,q,r,0)
$.$get$b().h(0,r)
$.B9=r
r=H.a(["Poached"],s)
q=$.H
n=H.a([$.bo,$.bl],o)
H.a([],s)
r=new G.d("Poached",n,q,r,0)
$.$get$b().h(0,r)
$.Bt=r
r=H.a(["Tapestry"],s)
q=$.r
n=H.a([$.S,$.aN],o)
H.a([],s)
r=new G.d("Tapestry",n,q,r,0)
$.$get$b().h(0,r)
$.CF=r
r=H.a(["Itchy"],s)
q=$.K
n=H.a([$.S,$.aV],o)
H.a([],s)
r=new G.d("Itchy",n,q,r,0)
$.$get$b().h(0,r)
$.Ao=r
r=H.a(["Wishbone"],s)
q=$.r
n=H.a([$.c_,$.bh],o)
H.a([],s)
r=new G.d("Wishbone",n,q,r,0)
$.$get$b().h(0,r)
$.D0=r
r=H.a(["Rattling"],s)
q=$.H
n=H.a([$.bb,$.bh],o)
H.a([],s)
r=new G.d("Rattling",n,q,r,0)
$.$get$b().h(0,r)
$.BI=r
r=H.a(["Cranial"],s)
q=$.r
n=H.a([$.a1,$.bh],o)
H.a([],s)
r=new G.d("Cranial",n,q,r,0)
$.$get$b().h(0,r)
$.z4=r
r=H.a(["Humerus"],s)
q=$.r
n=H.a([$.b9,$.bh],o)
H.a([],s)
r=new G.d("Humerus",n,q,r,0)
$.$get$b().h(0,r)
$.Ab=r
r=H.a(["Massage"],s)
q=$.o
n=H.a([$.b3,$.bj],o)
H.a([],s)
r=new G.d("Massage",n,q,r,0)
$.$get$b().h(0,r)
$.AM=r
r=H.a(["Pestersome","Irksome"],s)
q=$.K
n=H.a([$.bb,$.bz],o)
H.a([],s)
r=new G.d("Pestersome",n,q,r,0)
$.$get$b().h(0,r)
$.Bi=r
r=H.a(["Shockwave"],s)
q=$.o
n=H.a([$.bb,$.bs],o)
H.a([],s)
r=new G.d("Shockwave",n,q,r,0)
$.$get$b().h(0,r)
$.Cb=r
r=H.a(["Antivenom"],s)
q=$.o
n=H.a([$.bR,$.b3],o)
H.a([],s)
r=new G.d("Antivenom",n,q,r,0)
$.$get$b().h(0,r)
$.yh=r
r=H.a(["Will O Wisp","Demonic"],s)
q=$.r
n=H.a([$.aI,$.aa],o)
H.a([],s)
r=new G.d("Will O Wisp",n,q,r,0)
$.$get$b().h(0,r)
$.CY=r
r=H.a(["Fiberglass"],s)
q=$.r
n=H.a([$.S,$.bf],o)
H.a([],s)
r=new G.d("Fiberglass",n,q,r,0)
$.$get$b().h(0,r)
$.zC=r
r=H.a(["Skull"],s)
q=$.r
n=H.a([$.bh,$.bg],o)
H.a([],s)
r=new G.d("Skull",n,q,r,0)
$.$get$b().h(0,r)
$.Cm=r
r=H.a(["Enchanted"],s)
q=$.H
n=H.a([$.aa,$.c_],o)
H.a([],s)
r=new G.d("Enchanted",n,q,r,0)
$.$get$b().h(0,r)
$.zu=r
r=H.a(["Berserker's"],s)
q=$.ag
n=H.a([$.aa,$.bz],o)
H.a([],s)
r=new G.d("Berserker's",n,q,r,0)
$.$get$b().h(0,r)
$.yr=r
r=H.a(["Clerical"],s)
q=$.ag
n=H.a([$.aa,$.b3],o)
H.a([],s)
r=new G.d("Clerical",n,q,r,0)
$.$get$b().h(0,r)
$.yU=r
r=H.a(["Cauterizing"],s)
q=$.o
n=H.a([$.b3,$.aI],o)
H.a([],s)
r=new G.d("Cauterizing",n,q,r,0)
$.$get$b().h(0,r)
$.yL=r
r=H.a(["X-Ray"],s)
q=$.o
n=H.a([$.c2,$.ba],o)
H.a([],s)
r=new G.d("X-Ray",n,q,r,0)
$.$get$b().h(0,r)
$.D4=r
r=H.a(["Clever"],s)
q=$.K
n=H.a([$.a1,$.c_],o)
H.a([],s)
r=new G.d("Clever",n,q,r,0)
$.$get$b().h(0,r)
$.yV=r
r=H.a(["Fireplace"],s)
q=$.o
n=H.a([$.bj,$.aI],o)
H.a([],s)
r=new G.d("Fireplace",n,q,r,0)
$.$get$b().h(0,r)
$.zF=r
r=H.a(["Crackling"],s)
q=$.H
n=H.a([$.bb,$.aI],o)
H.a([],s)
r=new G.d("Crackling",n,q,r,0)
$.$get$b().h(0,r)
$.z3=r
r=H.a(["Thumping"],s)
q=$.H
n=H.a([$.bb,$.c8],o)
H.a([],s)
r=new G.d("Thumping",n,q,r,0)
$.$get$b().h(0,r)
$.CL=r
r=H.a(["Shrieking","Banshee"],s)
q=$.H
n=H.a([$.bZ,$.bb],o)
H.a([],s)
r=new G.d("Banshee",n,q,r,0)
$.$get$b().h(0,r)
$.Cd=r
r=H.a(["Surreal"],s)
q=$.K
n=H.a([$.b9,$.br],o)
H.a([],s)
r=new G.d("Surreal2",n,q,r,0)
$.$get$b().h(0,r)
$.CE=r
r=H.a(["Aloe","Willowbark"],s)
q=$.o
n=H.a([$.b3,$.b5],o)
H.a([],s)
r=new G.d("Aloe",n,q,r,0)
$.$get$b().h(0,r)
$.yg=r
r=H.a(["Rose"],s)
q=$.o
n=H.a([$.aO,$.b5],o)
H.a([],s)
r=new G.d("Rose",n,q,r,0)
$.$get$b().h(0,r)
$.BO=r
r=H.a(["Knock Knock"],s)
q=$.o
n=H.a([$.b9,$.al],o)
H.a([],s)
r=new G.d("Knock Knock",n,q,r,0)
$.$get$b().h(0,r)
$.Au=r
r=H.a(["Lifesteal"],s)
q=$.o
n=H.a([$.aa,$.bR],o)
H.a([],s)
r=new G.d("Lifesteal",n,q,r,0)
$.$get$b().h(0,r)
$.Ax=r
r=H.a(["Tragic"],s)
q=$.o
n=H.a([$.aN,$.aS],o)
H.a([],s)
r=new G.d("Tragic",n,q,r,0)
$.$get$b().h(0,r)
$.CQ=r
r=H.a(["Slapstick"],s)
q=$.o
n=H.a([$.aL,$.b9],o)
H.a([],s)
r=new G.d("Slapstick",n,q,r,0)
$.$get$b().h(0,r)
$.Cn=r
r=H.a(["Gross Out"],s)
q=$.o
n=H.a([$.bT,$.b9],o)
H.a([],s)
r=new G.d("Gross Out",n,q,r,0)
$.$get$b().h(0,r)
$.A2=r
r=H.a(["Flowery"],s)
q=$.r
n=H.a([$.aN,$.b5],o)
H.a([],s)
r=new G.d("Flowery",n,q,r,0)
$.$get$b().h(0,r)
$.zL=r
r=H.a(["Poison Ivy"],s)
q=$.r
n=H.a([$.bR,$.b5],o)
H.a([],s)
r=new G.d("Poison Ivy",n,q,r,0)
$.$get$b().h(0,r)
$.Bv=r
r=H.a(["Winged","Pegasus","Angelic"],s)
q=$.H
n=H.a([$.aa,$.bA],o)
H.a([],s)
r=new G.d("Winged",n,q,r,0)
$.$get$b().h(0,r)
$.CZ=r
r=H.a(["Forbidden Fruit"],s)
q=$.o
n=H.a([$.b5,$.aH,$.aS],o)
H.a([],s)
r=new G.d("Forbidden Fruit",n,q,r,0)
$.$get$b().h(0,r)
$.zP=r
r=H.a(["Lawful"],s)
q=$.K
n=H.a([$.bk,$.aJ],o)
H.a([],s)
r=new G.d("Lawful",n,q,r,0)
$.$get$b().h(0,r)
$.Av=r
r=H.a(["Chaotic"],s)
q=$.K
n=H.a([$.bz,$.aJ],o)
H.a([],s)
r=new G.d("Chaotic",n,q,r,0)
$.$get$b().h(0,r)
$.yP=r
r=H.a(["Hypothermic"],s)
q=$.H
n=H.a([$.aS,$.bq],o)
H.a([],s)
r=new G.d("Hypothermic",n,q,r,0)
$.$get$b().h(0,r)
$.Ae=r
r=H.a(["Hyperthermic"],s)
q=$.H
n=H.a([$.aS,$.aI],o)
H.a([],s)
r=new G.d("Hyperthermic",n,q,r,0)
$.$get$b().h(0,r)
$.Ac=r
r=H.a(["Shackled"],s)
q=$.H
n=H.a([$.bk,$.c8],o)
H.a([],s)
r=new G.d("Shackled",n,q,r,0)
$.$get$b().h(0,r)
$.C4=r
r=H.a(["Poetic"],s)
q=$.K
n=H.a([$.a1,$.aO],o)
H.a([],s)
r=new G.d("Poetic",n,q,r,0)
$.$get$b().h(0,r)
$.Bu=r
r=H.a(["Holographic"],s)
q=$.r
n=H.a([$.ba,$.a1,$.bf,$.ad],o)
H.a([],s)
r=new G.d("Holographic",n,q,r,0)
$.$get$b().h(0,r)
$.A9=r
r=H.a(["Casket","Coffin"],s)
q=$.r
n=H.a([$.a2,$.aS],o)
H.a([],s)
r=new G.d("Casket",n,q,r,0)
$.$get$b().h(0,r)
$.yK=r
r=H.a(["Spectral"],s)
q=$.r
n=H.a([$.bZ,$.aa],o)
H.a([],s)
r=new G.d("Spectral",n,q,r,0)
$.$get$b().h(0,r)
$.Ct=r
r=H.a(["Phoenix"],s)
q=$.r
n=H.a([$.aI,$.bA],o)
H.a([],s)
r=new G.d("Phoenix",n,q,r,0)
$.$get$b().h(0,r)
$.Bj=r
r=H.a(["Tattered"],s)
q=$.H
n=H.a([$.S,$.aS],o)
H.a([],s)
r=new G.d("Tattered",n,q,r,0)
$.$get$b().h(0,r)
$.CI=r
r=H.a(["Woodwind","Reed"],s)
q=$.o
n=H.a([$.af,$.a2],o)
H.a([],s)
r=new G.d("Woodwind",n,q,r,0)
$.$get$b().h(0,r)
$.D3=r
r=H.a(["Bone Hurting"],s)
q=$.o
n=H.a([$.aV,$.bh],o)
H.a([],s)
r=new G.d("Bone Hurting",n,q,r,0)
$.$get$b().h(0,r)
$.yv=r
r=H.a(["Bone Healing:"],s)
q=$.o
n=H.a([$.b3,$.bh],o)
H.a([],s)
r=new G.d("Bone Healing:",n,q,r,0)
$.$get$b().h(0,r)
$.yu=r
r=H.a(["Calcium"],s)
q=$.r
n=H.a([$.bh,$.b3,$.aH],o)
H.a([],s)
r=new G.d("Calcium",n,q,r,0)
$.$get$b().h(0,r)
$.yG=r
r=H.a(["Fleece"],s)
q=$.r
n=H.a([$.S,$.aI],o)
H.a([],s)
r=new G.d("Fleece",n,q,r,0)
$.$get$b().h(0,r)
$.zI=r
r=H.a(["Potted"],s)
q=$.r
n=H.a([$.bQ,$.b5],o)
H.a([],s)
r=new G.d("Potted",n,q,r,0)
$.$get$b().h(0,r)
$.BD=r
r=H.a(["Canned","Tinned","Potassium"],s)
q=$.r
n=H.a([$.C,$.aH],o)
H.a([],s)
r=new G.d("Canned",n,q,r,0)
$.$get$b().h(0,r)
$.yI=r
r=H.a(["Diseased"],s)
q=$.H
n=H.a([$.aS,$.bo],o)
H.a([],s)
r=new G.d("Diseased",n,q,r,0)
$.$get$b().h(0,r)
$.zc=r
r=H.a(["Porcupine"],s)
q=$.r
n=H.a([$.b1,$.ce],o)
H.a([],s)
r=new G.d("Porcupine",n,q,r,0)
$.$get$b().h(0,r)
$.Bz=r
r=H.a(["Fanged"],s)
q=$.H
n=H.a([$.bh,$.b1],o)
H.a([],s)
r=new G.d("Fanged",n,q,r,0)
$.$get$b().h(0,r)
$.zy=r
r=H.a(["Basalt"],s)
q=$.r
n=H.a([$.aM,$.at],o)
H.a([],s)
r=new G.d("Basalt",n,q,r,0)
$.$get$b().h(0,r)
$.yo=r
r=H.a(["Obsidian"],s)
q=$.r
n=H.a([$.bf,$.at],o)
H.a([],s)
r=new G.d("Obsidian",n,q,r,0)
$.$get$b().h(0,r)
$.B8=r
r=H.a(["Fenestrated"],s)
q=$.r
n=H.a([$.bf,$.a2],o)
H.a([],s)
r=new G.d("Fenestrated",n,q,r,0)
$.$get$b().h(0,r)
$.zA=r
r=H.a(["Plexiglass"],s)
q=$.r
n=H.a([$.bf,$.aU],o)
H.a([],s)
r=new G.d("Plexiglass",n,q,r,0)
$.$get$b().h(0,r)
$.Br=r
r=H.a(["Ceramic Wrap"],s)
q=$.o
n=H.a([$.bQ,$.Q],o)
H.a([],s)
r=new G.d("Ceramic Wrap",n,q,r,0)
$.$get$b().h(0,r)
$.yO=r
r=H.a(["Fungal"],s)
q=$.r
n=H.a([$.b5,$.bT],o)
H.a([],s)
r=new G.d("Fungal",n,q,r,0)
$.$get$b().h(0,r)
$.zT=r
r=H.a(["Thorny"],s)
q=$.H
n=H.a([$.b5,$.b1],o)
H.a([],s)
r=new G.d("Thorny",n,q,r,0)
$.$get$b().h(0,r)
$.CK=r
r=H.a(["Bulbed"],s)
q=$.H
n=H.a([$.b5,$.al],o)
H.a([],s)
r=new G.d("Bulbed",n,q,r,0)
$.$get$b().h(0,r)
$.yB=r
r=H.a(["Glass Cannon"],s)
q=$.o
n=H.a([$.bf,$.b_],o)
H.a([],s)
r=new G.d("Glass Cannon",n,q,r,0)
$.$get$b().h(0,r)
$.zZ=r
r=H.a(["Caoutchouc"],s)
q=$.o
n=H.a([$.b5,$.c9],o)
H.a([],s)
r=new G.d("Caoutchouc",n,q,r,0)
$.$get$b().h(0,r)
$.Bp=r
r=H.a(["Cellulose"],s)
q=$.r
n=H.a([$.b5,$.aU],o)
H.a([],s)
r=new G.d("Cellulose",n,q,r,0)
$.$get$b().h(0,r)
$.yN=r
r=H.a(["Horrorcore"],s)
q=$.o
n=H.a([$.af,$.bg],o)
H.a([],s)
r=new G.d("Horrorcore",n,q,r,0)
$.$get$b().h(0,r)
$.Aa=r
r=H.a(["Nightcore"],s)
q=$.o
n=H.a([$.br,$.af],o)
H.a([],s)
r=new G.d("Nightcore",n,q,r,0)
$.$get$b().h(0,r)
$.B5=r
r=H.a(["Crazy Bus"],s)
q=$.o
n=H.a([$.br,$.ad,$.af],o)
H.a([],s)
r=new G.d("Crazy Bus",n,q,r,0)
$.$get$b().h(0,r)
$.z5=r
r=H.a(["Burdock"],s)
q=$.r
n=H.a([$.b5,$.ce],o)
H.a([],s)
r=new G.d("Burdock",n,q,r,0)
$.$get$b().h(0,r)
$.yD=r
r=H.a(["Necrotic"],s)
q=$.H
n=H.a([$.bh,$.bZ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Necrotic",n,q,r,0))
r=H.a(["Stem"],s)
q=$.r
n=H.a([$.bh,$.b5],o)
H.a([],s)
$.$get$b().h(0,new G.d("Stem",n,q,r,0))
r=H.a(["DryBone"],s)
q=$.H
n=H.a([$.bh,$.aS],o)
H.a([],s)
$.$get$b().h(0,new G.d("DryBone",n,q,r,0))
r=H.a(["XyloBone"],s)
q=$.o
n=H.a([$.bh,$.af],o)
H.a([],s)
$.$get$b().h(0,new G.d("XyloBone",n,q,r,0))
r=H.a(["Ribcage"],s)
q=$.r
n=H.a([$.bh,$.bk],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ribcage",n,q,r,0))
r=H.a(["BoneZone"],s)
q=$.o
n=H.a([$.bh,$.ay],o)
H.a([],s)
$.$get$b().h(0,new G.d("BoneZone",n,q,r,0))
r=H.a(["Creaky"],s)
q=$.K
n=H.a([$.a2,$.bb],o)
H.a([],s)
$.$get$b().h(0,new G.d("Creaky",n,q,r,0))
r=H.a(["Maple"],s)
q=$.r
n=H.a([$.a2,$.aH],o)
H.a([],s)
$.$get$b().h(0,new G.d("Maple",n,q,r,0))
r=H.a(["Mahagony"],s)
q=$.r
n=H.a([$.a2,$.aN],o)
H.a([],s)
$.$get$b().h(0,new G.d("Mahagony",n,q,r,0))
r=H.a(["Fenced"],s)
q=$.H
n=H.a([$.a2,$.bk],o)
H.a([],s)
$.$get$b().h(0,new G.d("Fenced",n,q,r,0))
r=H.a(["Bocote"],s)
q=$.r
n=H.a([$.a2,$.bl],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bocote",n,q,r,0))
r=H.a(["Incense"],s)
q=$.r
n=H.a([$.a2,$.by],o)
H.a([],s)
$.$get$b().h(0,new G.d("Incense",n,q,r,0))
r=H.a(["Ebony"],s)
q=$.o
n=H.a([$.a2,$.at],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ebony",n,q,r,0))
r=H.a(["Birch"],s)
q=$.r
n=H.a([$.a2,$.ba],o)
H.a([],s)
$.$get$b().h(0,new G.d("Birch",n,q,r,0))
r=H.a(["Knock-on-Wood"],s)
q=$.o
n=H.a([$.a2,$.c_],o)
H.a([],s)
$.$get$b().h(0,new G.d("Knock-on-Wood",n,q,r,0))
r=H.a(["Firewood"],s)
q=$.o
n=H.a([$.a2,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Firewood",n,q,r,0))
r=H.a(["BlackForest"],s)
q=$.ag
n=H.a([$.a2,$.bg],o)
H.a([],s)
$.$get$b().h(0,new G.d("BlackForest",n,q,r,0))
r=H.a(["Tree"],s)
q=$.r
n=H.a([$.a2,$.b5],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tree",n,q,r,0))
r=H.a(["Ebonwood"],s)
q=$.r
n=H.a([$.a2,$.br],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ebonwood",n,q,r,0))
r=H.a(["Bark"],s)
q=$.r
n=H.a([$.a2,$.bo],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bark",n,q,r,0))
r=H.a(["Caveman's","Cavewoman's"],s)
q=$.o
n=H.a([$.a2,$.aM],o)
H.a([],s)
$.$get$b().h(0,new G.d("Caveman's",n,q,r,0))
r=H.a(["3D Printed"],s)
q=$.r
n=H.a([$.aU,$.a1],o)
H.a([],s)
$.$get$b().h(0,new G.d("3D Printed",n,q,r,0))
r=H.a(["Thesis"],s)
q=$.o
n=H.a([$.Q,$.a1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Thesis",n,q,r,0))
r=H.a(["Graphene"],s)
q=$.r
n=H.a([$.Q,$.ad],o)
H.a([],s)
$.$get$b().h(0,new G.d("Graphene",n,q,r,0))
r=H.a(["Prophecy"],s)
q=$.o
n=H.a([$.Q,$.aS],o)
H.a([],s)
$.$get$b().h(0,new G.d("Prophecy",n,q,r,0))
r=H.a(["Bedsheet"],s)
q=$.o
n=H.a([$.S,$.bZ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bedsheet",n,q,r,0))
r=H.a(["Gemstone","Ruby"],s)
q=$.r
n=H.a([$.aM,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Gemstone",n,q,r,0))
r=H.a(["Pet Rock"],s)
q=$.o
n=H.a([$.aM,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Pet Rock",n,q,r,0))
r=H.a(["Sand"],s)
q=$.r
n=H.a([$.aM,$.bj],o)
H.a([],s)
$.$get$b().h(0,new G.d("Sand",n,q,r,0))
r=H.a(["Geode"],s)
q=$.r
n=H.a([$.aM,$.aN],o)
H.a([],s)
$.$get$b().h(0,new G.d("Geode",n,q,r,0))
r=H.a(["Silicon"],s)
q=$.r
n=H.a([$.aM,$.ad],o)
H.a([],s)
$.$get$b().h(0,new G.d("Silicon",n,q,r,0))
r=H.a(["Cryolite","Iceburg"],s)
q=$.r
n=H.a([$.aM,$.bq],o)
H.a([],s)
$.$get$b().h(0,new G.d("Cryolite",n,q,r,0))
r=H.a(["Meteor"],s)
q=$.r
n=H.a([$.aM,$.bs],o)
H.a([],s)
$.$get$b().h(0,new G.d("Meteor",n,q,r,0))
r=H.a(["Carbon"],s)
q=$.r
n=H.a([$.aM,$.b5],o)
H.a([],s)
$.$get$b().h(0,new G.d("Carbon",n,q,r,0))
r=H.a(["Mossy"],s)
q=$.H
n=H.a([$.aM,$.ce],o)
H.a([],s)
$.$get$b().h(0,new G.d("Mossy",n,q,r,0))
r=H.a(["Lensed"],s)
q=$.H
n=H.a([$.a1,$.bf],o)
H.a([],s)
$.$get$b().h(0,new G.d("Lensed",n,q,r,0))
r=H.a(["Hide"],s)
q=$.H
n=H.a([$.S,$.bo],o)
H.a([],s)
$.$get$b().h(0,new G.d("Hide",n,q,r,0))
r=H.a(["FeatherBoa"],s)
q=$.o
n=H.a([$.S,$.bA],o)
H.a([],s)
$.$get$b().h(0,new G.d("FeatherBoa",n,q,r,0))
r=H.a(["Tacky"],s)
q=$.K
n=H.a([$.S,$.bT],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tacky",n,q,r,0))
r=H.a(["Whip"],s)
q=$.o
n=H.a([$.S,$.aL],o)
H.a([],s)
$.$get$b().h(0,new G.d("Whip",n,q,r,0))
r=H.a(["Costumed"],s)
q=$.o
n=H.a([$.S,$.bg],o)
H.a([],s)
$.$get$b().h(0,new G.d("Costumed",n,q,r,0))
r=H.a(["Punk"],s)
q=$.K
n=H.a([$.S,$.b1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Punk",n,q,r,0))
r=H.a(["Weighted"],s)
q=$.H
n=H.a([$.S,$.c8],o)
H.a([],s)
$.$get$b().h(0,new G.d("Weighted",n,q,r,0))
r=H.a(["Favorite"],s)
q=$.K
n=H.a([$.S,$.c_],o)
H.a([],s)
$.$get$b().h(0,new G.d("Favorite",n,q,r,0))
r=H.a(["Novelty"],s)
q=$.K
n=H.a([$.S,$.ba],o)
H.a([],s)
$.$get$b().h(0,new G.d("Novelty",n,q,r,0))
r=H.a(["Security"],s)
q=$.r
n=H.a([$.S,$.by],o)
H.a([],s)
$.$get$b().h(0,new G.d("Security",n,q,r,0))
r=H.a(["IcePack"],s)
q=$.r
n=H.a([$.S,$.bq],o)
H.a([],s)
$.$get$b().h(0,new G.d("IcePack",n,q,r,0))
r=H.a(["MotionCapture"],s)
q=$.o
n=H.a([$.S,$.ad],o)
H.a([],s)
$.$get$b().h(0,new G.d("MotionCapture",n,q,r,0))
r=H.a(["Silica"],s)
q=$.r
n=H.a([$.S,$.bR],o)
H.a([],s)
$.$get$b().h(0,new G.d("Silica",n,q,r,0))
r=H.a(["Harp"],s)
q=$.r
n=H.a([$.S,$.af],o)
H.a([],s)
$.$get$b().h(0,new G.d("Harp",n,q,r,0))
r=H.a(["Silk"],s)
q=$.r
n=H.a([$.S,$.bl],o)
H.a([],s)
$.$get$b().h(0,new G.d("Silk",n,q,r,0))
r=H.a(["RedFlag"],s)
q=$.r
n=H.a([$.S,$.bz],o)
H.a([],s)
$.$get$b().h(0,new G.d("RedFlag",n,q,r,0))
r=H.a(["MagicCarpet"],s)
q=$.r
n=H.a([$.S,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("MagicCarpet1",n,q,r,0))
r=H.a(["Satin","Tablecloth"],s)
q=$.r
n=H.a([$.S,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Satin",n,q,r,0))
r=H.a(["MagicCarpet"],s)
q=$.r
n=H.a([$.S,$.aa],o)
H.a([],s)
$.$get$b().h(0,new G.d("MagicCarpet2",n,q,r,0))
r=H.a(["Tweed"],s)
q=$.r
n=H.a([$.S,$.ap],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tweed",n,q,r,0))
r=H.a(["Jean"],s)
q=$.r
n=H.a([$.S,$.ay],o)
H.a([],s)
$.$get$b().h(0,new G.d("Jean",n,q,r,0))
r=H.a(["Tesla"],s)
q=$.ag
n=H.a([$.a1,$.ad],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tesla",n,q,r,0))
r=H.a(["Ashwood"],s)
q=$.r
n=H.a([$.aa,$.a2],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ashwood",n,q,r,0))
r=H.a(["Peashooter"],s)
q=$.r
n=H.a([$.b5,$.b_],o)
H.a([],s)
$.$get$b().h(0,new G.d("Peashooter",n,q,r,0))
r=H.a(["Lacquer"],s)
q=$.r
n=H.a([$.aU,$.a2],o)
H.a([],s)
$.$get$b().h(0,new G.d("Lacquer",n,q,r,0))
r=H.a(["Classpecty"],s)
q=$.r
n=H.a([$.V,$.Y],o)
H.a([],s)
$.$get$b().h(0,new G.d("Classpecty",n,q,r,0))
r=H.a(["Smartass"],s)
q=$.K
n=H.a([$.a1,$.aV],o)
H.a([],s)
$.$get$b().h(0,new G.d("Smartass",n,q,r,0))
r=H.a(["Miraculous","Magnets","Miracle"],s)
q=$.K
n=H.a([$.bp,$.b8,$.aa],o)
H.a([],s)
$.$get$b().h(0,new G.d("Miraculous",n,q,r,0))
r=H.a(["Pigeon"],s)
q=$.r
n=H.a([$.br,$.bA],o)
H.a([],s)
$.$get$b().h(0,new G.d("Pigeon",n,q,r,0))
r=H.a(["Grimoire"],s)
q=$.o
n=H.a([$.br,$.Q],o)
H.a([],s)
$.$get$b().h(0,new G.d("Grimoire",n,q,r,0))
r=H.a(["Oglogoth's"],s)
q=$.ag
n=H.a([$.br,$.b1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Oglogoth's",n,q,r,0))
r=H.a(["Echidna's"],s)
q=$.ag
n=H.a([$.a7,$.b1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Echidna's",n,q,r,0))
r=H.a(["Superior"],s)
q=$.ag
n=H.a([$.a1,$.ap],o)
H.a([],s)
$.$get$b().h(0,new G.d("Superior",n,q,r,0))
r=H.a(["Lego"],s)
q=$.r
n=H.a([$.a7,$.aU,$.by,$.al],o)
H.a([],s)
$.$get$b().h(0,new G.d("Lego",n,q,r,0))
r=H.a(["Yardstick"],s)
q=$.o
n=H.a([$.a7,$.du,$.a2,$.Q],o)
H.a([],s)
$.$get$b().h(0,new G.d("Yardstick",n,q,r,0))
r=H.a(["Queenly"],s)
q=$.ag
n=H.a([$.at,$.aa,$.bp,$.aV,$.bg],o)
H.a([],s)
r=new G.d("Queenly",n,q,r,0)
$.$get$b().h(0,r)
$.uF=r
r=H.a(["Kingly"],s)
q=$.ag
n=H.a([$.bg,$.al,$.c8,$.aa,$.bp],o)
H.a([],s)
r=new G.d("Kingly",n,q,r,0)
$.$get$b().h(0,r)
$.uA=r
r=H.a(["Jack"],s)
q=$.ag
n=H.a([$.b1,$.aL,$.C,$.at],o)
H.a([],s)
r=new G.d("Jack",n,q,r,0)
$.$get$b().h(0,r)
$.uy=r
r=H.a(["Codpiece","Codtier"],s)
q=$.o
n=H.a([$.a7,$.b8,$.a2,$.V,$.S],o)
H.a([],s)
$.$get$b().h(0,new G.d("Codpiece",n,q,r,0))
r=H.a(["Graceful"],s)
q=$.o
n=H.a([$.a7,$.aT,$.Q,$.C,$.a1,$.V],o)
H.a([],s)
$.$get$b().h(0,new G.d("Graceful",n,q,r,0))
r=H.a(["Guide","Tourist"],s)
q=$.o
n=H.a([$.a7,$.aT,$.Q,$.a1,$.V,$.bq],o)
H.a([],s)
$.$get$b().h(0,new G.d("Guide",n,q,r,0))
r=H.a(["Will","Testament"],s)
q=$.o
n=H.a([$.a7,$.aS,$.Q,$.a1,$.bk],o)
H.a([],s)
$.$get$b().h(0,new G.d("Testament",n,q,r,0))
r=H.a(["Excalibur's","Excalibur"],s)
q=$.ag
n=H.a([$.a7,$.ba,$.C,$.b1,$.aL,$.f4],o)
H.a([],s)
$.$get$b().h(0,new G.d("Excalibur",n,q,r,0))
r=H.a(["Influential"],s)
q=$.ag
n=H.a([$.a7,$.Q,$.bz,$.aT],o)
H.a([],s)
$.$get$b().h(0,new G.d("Influential",n,q,r,0))
r=H.a(["Alternative"],s)
q=$.ag
n=H.a([$.a7,$.aa,$.S,$.at],o)
H.a([],s)
$.$get$b().h(0,new G.d("Alternative",n,q,r,0))
r=H.a(["Valkyrie"],s)
q=$.ag
n=H.a([$.a7,$.aV,$.bh,$.C,$.f3,$.aN],o)
H.a([],s)
$.$get$b().h(0,new G.d("Valkyrie",n,q,r,0))
r=H.a(["Ongoing"],s)
q=$.ag
n=H.a([$.a7,$.aM,$.ap,$.iK,$.al],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ongoing",n,q,r,0))
r=H.a(["Short"],s)
q=$.H
n=H.a([$.a7,$.S,$.bl,$.aN,$.ap],o)
H.a([],s)
$.$get$b().h(0,new G.d("Short",n,q,r,0))
r=H.a(["Crown"],s)
q=$.o
n=H.a([$.a7,$.C,$.bl,$.aN,$.ap],o)
H.a([],s)
$.$get$b().h(0,new G.d("Crown",n,q,r,0))
r=H.a(["Gristtorrent"],s)
q=$.o
n=H.a([$.a7,$.aU,$.ad,$.at,$.a1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Gristtorrent",n,q,r,0))
r=H.a(["Robe"],s)
q=$.o
n=H.a([$.a7,$.S,$.a1,$.aa,$.bj],o)
H.a([],s)
$.$get$b().h(0,new G.d("Robe",n,q,r,0))
r=H.a(["Beret"],s)
q=$.o
n=H.a([$.a7,$.S,$.a1,$.aN,$.ap],o)
H.a([],s)
$.$get$b().h(0,new G.d("Beret",n,q,r,0))
r=H.a(["Blank"],s)
q=$.H
n=$.a7
m=$.Q
l=$.a1
l=H.a([n,m,l,$.aT,l,$.at],o)
H.a([],s)
$.$get$b().h(0,new G.d("Blank",l,q,r,0))
r=H.a(["Cueball"],s)
q=$.r
l=H.a([$.a7,$.aN,$.bQ,$.al,$.eo,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Cueball",l,q,r,0))
r=H.a(["Meddler's"],s)
q=$.ag
l=H.a([$.a7,$.aT,$.Q,$.bz,$.b3],o)
H.a([],s)
$.$get$b().h(0,new G.d("Meddler's",l,q,r,0))
r=H.a(["Scroll"],s)
q=$.ag
l=H.a([$.aa,$.Q],o)
H.a([],s)
$.$get$b().h(0,new G.d("Scroll",l,q,r,0))
r=H.a(["Tome"],s)
q=$.o
l=H.a([$.Q,$.a1,$.aT],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tome",l,q,r,0))
r=H.a(["Lockpick"],s)
q=$.o
l=H.a([$.a7,$.C,$.at,$.b1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Lockpick",l,q,r,0))
r=H.a(["Warped"],s)
q=$.H
l=H.a([$.a7,$.C,$.bf,$.at],o)
H.a([],s)
$.$get$b().h(0,new G.d("Warped",l,q,r,0))
r=H.a(["Stairs"],s)
q=$.o
l=H.a([$.a7,$.b8,$.a2,$.ay,$.by,$.b3],o)
H.a([],s)
$.$get$b().h(0,new G.d("Stairs",l,q,r,0))
r=H.a(["Rocket"],s)
q=$.o
l=H.a([$.a7,$.aI,$.C,$.bb],o)
H.a([],s)
$.$get$b().h(0,new G.d("Rocket",l,q,r,0))
r=H.a(["~ATH"],s)
q=$.o
l=H.a([$.a7,$.ad,$.Q,$.aT,$.aS],o)
H.a([],s)
$.$get$b().h(0,new G.d("~ATH",l,q,r,0))
r=H.a(["Puppeted"],s)
q=$.o
l=H.a([$.a7,$.a2,$.aJ,$.bg],o)
H.a([],s)
$.$get$b().h(0,new G.d("Puppeted",l,q,r,0))
r=H.a(["Angelic"],s)
q=$.ag
l=H.a([$.a7,$.bp,$.bA,$.ba,$.af,$.aa],o)
H.a([],s)
$.$get$b().h(0,new G.d("Angelic",l,q,r,0))
r=H.a(["Vitae"],s)
q=$.r
l=H.a([$.a7,$.b3,$.bf,$.aa],o)
H.a([],s)
$.$get$b().h(0,new G.d("Vitae",l,q,r,0))
r=H.a(["Fluorite"],s)
q=$.r
l=H.a([$.a7,$.ba,$.c_,$.aM,$.bf],o)
H.a([],s)
$.$get$b().h(0,new G.d("Fluorite",l,q,r,0))
r=H.a(["Janus"],s)
q=$.ag
l=H.a([$.a7,$.aV,$.aM,$.ap,$.ad],o)
H.a([],s)
$.$get$b().h(0,new G.d("Janus",l,q,r,0))
r=H.a(["Bacchus"],s)
q=$.ag
l=H.a([$.a7,$.aH,$.bz,$.ap],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bacchus",l,q,r,0))
r=H.a(["TurnTable"],s)
q=$.ag
l=H.a([$.a7,$.C,$.af,$.ay],o)
H.a([],s)
$.$get$b().h(0,new G.d("TurnTable",l,q,r,0))
r=H.a(["[???]","[Unknown]"],s)
q=$.K
l=H.a([$.a7,$.bf,$.c2,$.ba,$.at],o)
H.a([],s)
$.$get$b().h(0,new G.d("???",l,q,r,0))
r=H.a(["Demonite"],s)
q=$.r
l=H.a([$.C,$.br],o)
H.a([],s)
$.$get$b().h(0,new G.d("Demonite",l,q,r,0))
r=H.a(["Stymphalian"],s)
q=$.ag
l=H.a([$.C,$.bA],o)
H.a([],s)
$.$get$b().h(0,new G.d("Stymphalian",l,q,r,0))
r=H.a(["Junky"],s)
q=$.r
l=H.a([$.C,$.bT],o)
H.a([],s)
$.$get$b().h(0,new G.d("Junky",l,q,r,0))
r=H.a(["Cold Welded","Cold Iron"],s)
q=$.r
l=H.a([$.C,$.bq],o)
H.a([],s)
$.$get$b().h(0,new G.d("Cold Iron",l,q,r,0))
r=H.a(["Bolted"],s)
q=$.H
l=H.a([$.C,$.bk],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bolted",l,q,r,0))
r=H.a(["Armored"],s)
q=$.H
l=H.a([$.C,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Armored",l,q,r,0))
r=H.a(["Heartsteel","Rose Gold"],s)
q=$.r
l=H.a([$.C,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Heartsteel",l,q,r,0))
r=H.a(["Brick"],s)
q=$.r
l=H.a([$.bQ,$.aM],o)
H.a([],s)
$.$get$b().h(0,new G.d("Brick",l,q,r,0))
r=H.a(["Clay"],s)
q=$.r
l=H.a([$.bQ,$.c9],o)
H.a([],s)
$.$get$b().h(0,new G.d("Clay",l,q,r,0))
r=H.a(["Mugly"],s)
q=$.K
l=H.a([$.bQ,$.bT],o)
H.a([],s)
$.$get$b().h(0,new G.d("Mugly",l,q,r,0))
r=H.a(["Plate"],s)
q=$.r
l=H.a([$.bQ,$.al],o)
H.a([],s)
$.$get$b().h(0,new G.d("Plate",l,q,r,0))
r=H.a(["Terracotta"],s)
q=$.r
l=H.a([$.bQ,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Terracotta",l,q,r,0))
r=H.a(["Semiconductive"],s)
q=$.r
l=H.a([$.bQ,$.ad],o)
H.a([],s)
$.$get$b().h(0,new G.d("Semiconductive",l,q,r,0))
r=H.a(["Vinyl"],s)
q=$.r
l=H.a([$.bQ,$.af],o)
H.a([],s)
$.$get$b().h(0,new G.d("Vinyl",l,q,r,0))
r=H.a(["Artisan"],s)
q=$.H
l=H.a([$.bQ,$.a1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Artisan",l,q,r,0))
r=H.a(["Tiled"],s)
q=$.r
l=H.a([$.bQ,$.ap],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tiled",l,q,r,0))
r=H.a(["Hand-Sculpted"],s)
q=$.H
l=H.a([$.bQ,$.bp],o)
H.a([],s)
$.$get$b().h(0,new G.d("Hand-Sculpted",l,q,r,0))
r=H.a(["Handicraft"],s)
q=$.K
l=H.a([$.bS,$.Q],o)
H.a([],s)
$.$get$b().h(0,new G.d("Handicraft",l,q,r,0))
r=H.a(["Torn"],s)
q=$.H
l=H.a([$.bS,$.S],o)
H.a([],s)
$.$get$b().h(0,new G.d("Torn",l,q,r,0))
r=H.a(["Grotesque"],s)
q=$.K
l=H.a([$.bS,$.bT],o)
H.a([],s)
$.$get$b().h(0,new G.d("Grotesque",l,q,r,0))
r=H.a(["Flickering"],s)
q=$.H
l=H.a([$.bS,$.ba],o)
H.a([],s)
$.$get$b().h(0,new G.d("Flickering",l,q,r,0))
r=H.a(["Thinly Veiled","Translucent"],s)
q=$.r
l=H.a([$.bS,$.at],o)
H.a([],s)
$.$get$b().h(0,new G.d("Thinly Veiled",l,q,r,0))
r=H.a(["Fragile"],s)
q=$.H
l=H.a([$.bS,$.bl],o)
H.a([],s)
$.$get$b().h(0,new G.d("Fragile",l,q,r,0))
r=H.a(["Troll's"],s)
q=$.ag
l=H.a([$.bS,$.bz],o)
H.a([],s)
$.$get$b().h(0,new G.d("Troll's",l,q,r,0))
r=H.a(["Sappy"],s)
q=$.r
l=H.a([$.bS,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Sappy",l,q,r,0))
r=H.a(["Bootleg"],s)
q=$.r
l=H.a([$.bS,$.b8],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bootleg",l,q,r,0))
r=H.a(["Distorted"],s)
q=$.r
l=H.a([$.bS,$.bb],o)
H.a([],s)
$.$get$b().h(0,new G.d("Distorted",l,q,r,0))
r=H.a(["Ent's"],s)
q=$.ag
l=H.a([$.a2,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ent's",l,q,r,0))
r=H.a(["WeepingWillow"],s)
q=$.r
l=H.a([$.a2,$.bZ],o)
H.a([],s)
$.$get$b().h(0,new G.d("WeepingWillow",l,q,r,0))
r=H.a(["Latex"],s)
q=$.r
l=H.a([$.a2,$.c9],o)
H.a([],s)
$.$get$b().h(0,new G.d("Latex",l,q,r,0))
r=H.a(["Turf"],s)
q=$.r
l=H.a([$.aU,$.aV],o)
H.a([],s)
$.$get$b().h(0,new G.d("Turf",l,q,r,0))
r=H.a(["Stress Relieving"],s)
q=$.o
l=H.a([$.c9,$.by],o)
H.a([],s)
$.$get$b().h(0,new G.d("Stress Relieving",l,q,r,0))
r=H.a(["R-Rated"],s)
q=$.H
l=H.a([$.c9,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("R-Rated",l,q,r,0))
r=H.a(["Racing"],s)
q=$.o
l=H.a([$.c9,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Racing",l,q,r,0))
r=H.a(["Cross Stitch"],s)
q=$.o
l=H.a([$.Q,$.S],o)
H.a([],s)
$.$get$b().h(0,new G.d("Cross Stitch",l,q,r,0))
r=H.a(["LoveLetter"],s)
q=$.o
l=H.a([$.Q,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("LoveLetter",l,q,r,0))
r=H.a(["EbonStone"],s)
q=$.r
l=H.a([$.aM,$.br],o)
H.a([],s)
$.$get$b().h(0,new G.d("EbonStone",l,q,r,0))
r=H.a(["Rock Candy"],s)
q=$.r
l=H.a([$.aM,$.aH],o)
H.a([],s)
$.$get$b().h(0,new G.d("Rock Candy",l,q,r,0))
r=H.a(["Smashing"],s)
q=$.K
l=H.a([$.aM,$.bb],o)
H.a([],s)
$.$get$b().h(0,new G.d("Smashing",l,q,r,0))
r=H.a(["Anomalous"],s)
q=$.K
l=H.a([$.bZ,$.br],o)
H.a([],s)
$.$get$b().h(0,new G.d("Anomalous",l,q,r,0))
r=H.a(["Onmoraki"],s)
q=$.r
l=H.a([$.bZ,$.bA],o)
H.a([],s)
$.$get$b().h(0,new G.d("Onmoraki",l,q,r,0))
r=H.a(["Ghastly"],s)
q=$.K
l=H.a([$.bZ,$.bT],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ghastly",l,q,r,0))
r=H.a(["Shade","Shadow"],s)
q=$.r
l=H.a([$.bZ,$.at],o)
H.a([],s)
$.$get$b().h(0,new G.d("Shade",l,q,r,0))
r=H.a(["Choral"],s)
q=$.r
l=H.a([$.bZ,$.af],o)
H.a([],s)
$.$get$b().h(0,new G.d("Choral",l,q,r,0))
r=H.a(["Eerie"],s)
q=$.r
l=H.a([$.bZ,$.aN],o)
H.a([],s)
$.$get$b().h(0,new G.d("Eerie",l,q,r,0))
r=H.a(["Spiritual"],s)
q=$.K
l=H.a([$.bZ,$.bp],o)
H.a([],s)
$.$get$b().h(0,new G.d("Spiritual",l,q,r,0))
r=H.a(["Heart"],s)
q=$.r
l=H.a([$.bo,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Heart",l,q,r,0))
r=H.a(["Primordial"],s)
q=$.r
l=H.a([$.bo,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Primordial",l,q,r,0))
r=H.a(["Eyeball"],s)
q=$.r
l=H.a([$.bo,$.ba],o)
H.a([],s)
$.$get$b().h(0,new G.d("Eyeball",l,q,r,0))
r=H.a(["Vulture"],s)
q=$.H
l=H.a([$.bo,$.bA],o)
H.a([],s)
$.$get$b().h(0,new G.d("Vulture",l,q,r,0))
r=H.a(["DarkSpell","BlackMagic"],s)
q=$.o
l=H.a([$.br,$.aa],o)
H.a([],s)
$.$get$b().h(0,new G.d("BlackMagic",l,q,r,0))
r=H.a(["Doppelganger"],s)
q=$.r
l=H.a([$.br,$.b8],o)
H.a([],s)
$.$get$b().h(0,new G.d("Doppelganger",l,q,r,0))
r=H.a(["Incomprehensible"],s)
q=$.H
l=H.a([$.br,$.bb],o)
H.a([],s)
$.$get$b().h(0,new G.d("Incomprehensible",l,q,r,0))
r=H.a(["Destructive"],s)
q=$.o
l=H.a([$.br,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Destructive",l,q,r,0))
r=H.a(["Growling"],s)
q=$.H
l=H.a([$.ce,$.bb],o)
H.a([],s)
$.$get$b().h(0,new G.d("Growling",l,q,r,0))
r=H.a(["Coconut"],s)
q=$.r
l=H.a([$.ce,$.aH],o)
H.a([],s)
$.$get$b().h(0,new G.d("Coconut",l,q,r,0))
r=H.a(["Beastmaster's"],s)
q=$.ag
l=H.a([$.ce,$.bk],o)
H.a([],s)
$.$get$b().h(0,new G.d("Beastmaster's",l,q,r,0))
r=H.a(["Fluffy"],s)
q=$.r
l=H.a([$.ce,$.bA],o)
H.a([],s)
$.$get$b().h(0,new G.d("Fluffy",l,q,r,0))
r=H.a(["Feather Grass","Fern"],s)
q=$.r
l=H.a([$.b5,$.bA],o)
H.a([],s)
$.$get$b().h(0,new G.d("Fern",l,q,r,0))
r=H.a(["Four Leafed"],s)
q=$.H
l=H.a([$.b5,$.c_],o)
H.a([],s)
$.$get$b().h(0,new G.d("Four Leafed",l,q,r,0))
r=H.a(["Shrubbery"],s)
q=$.r
l=H.a([$.b5,$.at],o)
H.a([],s)
$.$get$b().h(0,new G.d("Shrubbery",l,q,r,0))
r=H.a(["Shameplant","Ecballium"],s)
q=$.r
l=H.a([$.b5,$.bs],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ecballium",l,q,r,0))
r=H.a(["Truffle"],s)
q=$.r
l=H.a([$.b5,$.bl],o)
H.a([],s)
$.$get$b().h(0,new G.d("Truffle",l,q,r,0))
r=H.a(["Vine"],s)
q=$.r
l=H.a([$.b5,$.bk],o)
H.a([],s)
$.$get$b().h(0,new G.d("Vine",l,q,r,0))
r=H.a(["Carion","CorpseBlossom"],s)
q=$.r
l=H.a([$.b5,$.aV],o)
H.a([],s)
$.$get$b().h(0,new G.d("CorpseBlossom",l,q,r,0))
r=H.a(["Fruity"],s)
q=$.H
l=H.a([$.b5,$.aH],o)
H.a([],s)
$.$get$b().h(0,new G.d("Fruity",l,q,r,0))
r=H.a(["Squawking"],s)
q=$.H
l=H.a([$.bA,$.bb],o)
H.a([],s)
$.$get$b().h(0,new G.d("Squawking",l,q,r,0))
r=H.a(["Poultry","Chicken","Turkey"],s)
q=$.r
l=H.a([$.bA,$.aH],o)
H.a([],s)
$.$get$b().h(0,new G.d("Poultry",l,q,r,0))
r=H.a(["Dove"],s)
q=$.r
l=H.a([$.bA,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Dove",l,q,r,0))
r=H.a(["Peacock"],s)
q=$.r
l=H.a([$.bA,$.aN],o)
H.a([],s)
$.$get$b().h(0,new G.d("Peacock",l,q,r,0))
r=H.a(["Stork"],s)
q=$.r
l=H.a([$.bA,$.b3],o)
H.a([],s)
$.$get$b().h(0,new G.d("Stork",l,q,r,0))
r=H.a(["Zhenniao"],s)
q=$.r
l=H.a([$.bA,$.bR],o)
H.a([],s)
$.$get$b().h(0,new G.d("Zhenniao",l,q,r,0))
r=H.a(["Dodo","Passenger Pigeon"],s)
q=$.r
l=H.a([$.bA,$.aS],o)
H.a([],s)
$.$get$b().h(0,new G.d("Dodo",l,q,r,0))
r=H.a(["Raven"],s)
q=$.rC
l=H.a([$.bA,$.bg],o)
H.a([],s)
$.$get$b().h(0,new G.d("Raven",l,q,r,0))
r=H.a(["Frilled"],s)
q=$.H
l=H.a([$.bA,$.bT],o)
H.a([],s)
$.$get$b().h(0,new G.d("Frilled",l,q,r,0))
r=H.a(["Horrifying"],s)
q=$.K
l=H.a([$.bT,$.bg],o)
H.a([],s)
$.$get$b().h(0,new G.d("Horrifying",l,q,r,0))
r=H.a(["Burning Edge"],s)
q=$.o
l=H.a([$.aL,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Burning Edge",l,q,r,0))
r=H.a(["Scapel"],s)
q=$.o
l=H.a([$.aL,$.b3],o)
H.a([],s)
$.$get$b().h(0,new G.d("Scapel",l,q,r,0))
r=H.a(["Menacing"],s)
q=$.K
l=H.a([$.bg,$.b1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Menacing",l,q,r,0))
r=H.a(["Syringe"],s)
q=$.o
l=H.a([$.b3,$.b1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Syringe",l,q,r,0))
r=H.a(["Bitter","Sour"],s)
q=$.K
l=H.a([$.aH,$.aV],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bitter",l,q,r,0))
r=H.a(["Pineapple"],s)
q=$.r
l=H.a([$.aH,$.b1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Pineapple",l,q,r,0))
r=H.a(["Crunchy"],s)
q=$.K
l=H.a([$.aH,$.al],o)
H.a([],s)
$.$get$b().h(0,new G.d("Crunchy",l,q,r,0))
r=H.a(["Bass"],s)
q=$.o
l=H.a([$.c8,$.af],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bass",l,q,r,0))
r=H.a(["Rigid"],s)
q=$.o
l=H.a([$.c8,$.aV],o)
H.a([],s)
$.$get$b().h(0,new G.d("Rigid",l,q,r,0))
r=H.a(["Prop"],s)
q=$.o
l=H.a([$.b_,$.b8],o)
H.a([],s)
$.$get$b().h(0,new G.d("Prop",l,q,r,0))
r=H.a(["Magic Missle"],s)
q=$.o
l=H.a([$.b_,$.aa],o)
H.a([],s)
$.$get$b().h(0,new G.d("Magic Missle",l,q,r,0))
r=H.a(["Gangster's"],s)
q=$.ag
l=H.a([$.b_,$.ay],o)
H.a([],s)
$.$get$b().h(0,new G.d("Gangster's",l,q,r,0))
r=H.a(["Cupid's"],s)
q=$.ag
l=H.a([$.b_,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Cupid's",l,q,r,0))
r=H.a(["Turreted"],s)
q=$.H
l=H.a([$.b_,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Turreted",l,q,r,0))
r=H.a(["AutoAiming","AutoTarget","TargetAssist","AimBot"],s)
q=$.H
l=H.a([$.b_,$.a1],o)
H.a([],s)
$.$get$b().h(0,new G.d("AutoTarget",l,q,r,0))
r=H.a(["Guerilla's"],s)
q=$.ag
l=H.a([$.b_,$.bz],o)
H.a([],s)
$.$get$b().h(0,new G.d("Guerilla's",l,q,r,0))
r=H.a(["Rail","ChargeDart"],s)
q=$.o
l=H.a([$.b_,$.ad],o)
H.a([],s)
$.$get$b().h(0,new G.d("Rail",l,q,r,0))
r=H.a(["Tau"],s)
q=$.o
l=H.a([$.b_,$.c2],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tau",l,q,r,0))
r=H.a(["Pew","Laser"],s)
q=$.o
l=H.a([$.b_,$.ba],o)
H.a([],s)
$.$get$b().h(0,new G.d("Pew",l,q,r,0))
r=H.a(["Thermal"],s)
q=$.H
l=H.a([$.b_,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Thermal",l,q,r,0))
r=H.a(["Plasma","Incandescent"],s)
q=$.r
l=H.a([$.ba,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Plasma",l,q,r,0))
r=H.a(["Shredding"],s)
q=$.r
l=H.a([$.af,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Shredding",l,q,r,0))
r=H.a(["Leprechaun"],s)
q=$.r
l=H.a([$.c_,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Leprechaun",l,q,r,0))
r=H.a(["Charmed"],s)
q=$.r
l=H.a([$.c_,$.bl],o)
H.a([],s)
$.$get$b().h(0,new G.d("Charmed",l,q,r,0))
r=H.a(["Leprechaun"],s)
q=$.ag
l=H.a([$.c_,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Leprechaun",l,q,r,0))
r=H.a(["Prospitian"],s)
q=$.ag
l=H.a([$.ba,$.bj],o)
H.a([],s)
$.$get$b().h(0,new G.d("Prospitian",l,q,r,0))
r=H.a(["Vigilant"],s)
q=$.H
l=H.a([$.ba,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Vigilant",l,q,r,0))
r=H.a(["Stand-Up"],s)
q=$.K
l=H.a([$.ba,$.b9],o)
H.a([],s)
$.$get$b().h(0,new G.d("Stand-Up",l,q,r,0))
r=H.a(["Bedazzled"],s)
q=$.H
l=H.a([$.ba,$.ay],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bedazzled",l,q,r,0))
r=H.a(["Thief's"],s)
q=$.ag
l=H.a([$.at,$.aa],o)
H.a([],s)
$.$get$b().h(0,new G.d("Thief's",l,q,r,0))
r=H.a(["InvisibilityCloak"],s)
q=$.o
l=H.a([$.at,$.aa,$.S],o)
H.a([],s)
$.$get$b().h(0,new G.d("InvisibilityCloak",l,q,r,0))
r=H.a(["Comedy Night","Dry Humor"],s)
q=$.H
l=H.a([$.at,$.b9],o)
H.a([],s)
$.$get$b().h(0,new G.d("Comedy Night",l,q,r,0))
r=H.a(["Stealthy"],s)
q=$.K
l=H.a([$.at,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Stealthy",l,q,r,0))
r=H.a(["Subterfuge"],s)
q=$.o
l=H.a([$.at,$.a1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Subterfuge",l,q,r,0))
r=H.a(["Dersite"],s)
q=$.ag
l=H.a([$.at,$.aV],o)
H.a([],s)
$.$get$b().h(0,new G.d("Dersite",l,q,r,0))
r=H.a(["Ambient","Muzak","Elevator"],s)
q=$.ag
l=H.a([$.by,$.af],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ambient",l,q,r,0))
r=H.a(["Anesthesia"],s)
q=$.o
l=H.a([$.by,$.b3],o)
H.a([],s)
$.$get$b().h(0,new G.d("Anesthesia",l,q,r,0))
r=H.a(["Supportive"],s)
q=$.o
l=H.a([$.by,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Supportive",l,q,r,0))
r=H.a(["Nuka"],s)
q=$.o
l=H.a([$.b3,$.c2],o)
H.a([],s)
$.$get$b().h(0,new G.d("Nuka",l,q,r,0))
r=H.a(["Contaminated"],s)
q=$.H
l=H.a([$.bR,$.c2],o)
H.a([],s)
$.$get$b().h(0,new G.d("Contaminated",l,q,r,0))
r=H.a(["Unstable"],s)
q=$.H
l=H.a([$.aS,$.c2],o)
H.a([],s)
$.$get$b().h(0,new G.d("Unstable",l,q,r,0))
r=H.a(["Timebomb"],s)
q=$.o
l=H.a([$.aS,$.bs],o)
H.a([],s)
$.$get$b().h(0,new G.d("Timebomb",l,q,r,0))
r=H.a(["Short Circuiting"],s)
q=$.H
l=H.a([$.ad,$.aS],o)
H.a([],s)
$.$get$b().h(0,new G.d("Short Circuiting",l,q,r,0))
r=H.a(["Artifact","Relic"],s)
q=$.o
l=H.a([$.aS,$.bl],o)
H.a([],s)
$.$get$b().h(0,new G.d("Relic",l,q,r,0))
r=H.a(["Existentialist"],s)
q=$.H
l=H.a([$.aS,$.aV],o)
H.a([],s)
$.$get$b().h(0,new G.d("Existentialist",l,q,r,0))
r=H.a(["Apocalyptic"],s)
q=$.K
l=H.a([$.aS,$.bp],o)
H.a([],s)
$.$get$b().h(0,new G.d("Apocalyptic",l,q,r,0))
r=H.a(["Dud"],s)
q=$.o
l=H.a([$.bs,$.b8],o)
H.a([],s)
$.$get$b().h(0,new G.d("Dud",l,q,r,0))
r=H.a(["Heat Seeking","Guided"],s)
q=$.o
l=H.a([$.bs,$.a1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Guided",l,q,r,0))
r=H.a(["Bobomb"],s)
q=$.o
l=H.a([$.bs,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bobomb",l,q,r,0))
r=H.a(["Dread"],s)
q=$.o
l=H.a([$.aS,$.bk],o)
H.a([],s)
$.$get$b().h(0,new G.d("Dread",l,q,r,0))
r=H.a(["Knockback"],s)
q=$.o
l=H.a([$.bs,$.bk],o)
H.a([],s)
$.$get$b().h(0,new G.d("Knockback",l,q,r,0))
r=H.a(["Paralysis"],s)
q=$.o
l=H.a([$.ad,$.bk],o)
H.a([],s)
$.$get$b().h(0,new G.d("Paralysis",l,q,r,0))
r=H.a(["Carnage"],s)
q=$.o
l=H.a([$.bs,$.bz],o)
H.a([],s)
$.$get$b().h(0,new G.d("Carnage",l,q,r,0))
r=H.a(["Blast Beat"],s)
q=$.o
l=H.a([$.bs,$.af],o)
H.a([],s)
$.$get$b().h(0,new G.d("Blast Beat",l,q,r,0))
r=H.a(["Corrosive"],s)
q=$.H
l=H.a([$.bs,$.bR],o)
H.a([],s)
$.$get$b().h(0,new G.d("Corrosive",l,q,r,0))
r=H.a(["Flash Freeze","Ice Bomb"],s)
q=$.o
l=H.a([$.bs,$.bq],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ice Bomb",l,q,r,0))
r=H.a(["Cryogenic"],s)
q=$.o
l=H.a([$.bq,$.b3],o)
H.a([],s)
$.$get$b().h(0,new G.d("Cryogenic",l,q,r,0))
r=H.a(["Spellcasting","Thundaga"],s)
q=$.o
l=H.a([$.aa,$.ad],o)
H.a([],s)
$.$get$b().h(0,new G.d("Spellcasting",l,q,r,0))
r=H.a(["Tingling"],s)
q=$.H
l=H.a([$.ad,$.bj],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tingling",l,q,r,0))
r=H.a(["Rage Plague","Beserk"],s)
q=$.o
l=H.a([$.bz,$.bR],o)
H.a([],s)
$.$get$b().h(0,new G.d("Rage Plague",l,q,r,0))
r=H.a(["Nerve Gas"],s)
q=$.o
l=H.a([$.bR,$.bk],o)
H.a([],s)
$.$get$b().h(0,new G.d("Nerve Gas",l,q,r,0))
r=H.a(["Carbon Monoxide"],s)
q=$.o
l=H.a([$.bR,$.aV],o)
H.a([],s)
$.$get$b().h(0,new G.d("Carbon Monoxide",l,q,r,0))
r=H.a(["Neurotoxin"],s)
q=$.o
l=H.a([$.bR,$.a1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Neurotoxin",l,q,r,0))
r=H.a(["Virulent"],s)
q=$.H
l=H.a([$.bR,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Virulent",l,q,r,0))
r=H.a(["Toxic"],s)
q=$.H
l=H.a([$.bR,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Toxic",l,q,r,0))
r=H.a(["Laughing Gas","Nitrous","N20"],s)
q=$.o
l=H.a([$.bR,$.b9],o)
H.a([],s)
$.$get$b().h(0,new G.d("Laughing Gas",l,q,r,0))
r=H.a(["Amplified","Amped"],s)
q=$.H
l=H.a([$.af,$.bb],o)
H.a([],s)
$.$get$b().h(0,new G.d("Amplified",l,q,r,0))
r=H.a(["Rap"],s)
q=$.o
l=H.a([$.af,$.ay],o)
H.a([],s)
$.$get$b().h(0,new G.d("Rap",l,q,r,0))
r=H.a(["Saxaphone","Saxobeat"],s)
q=$.o
l=H.a([$.af,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Saxaphone",l,q,r,0))
r=H.a(["Offbeat","Syncopated"],s)
q=$.o
l=H.a([$.af,$.aV],o)
H.a([],s)
$.$get$b().h(0,new G.d("Offbeat",l,q,r,0))
r=H.a(["Piper's"],s)
q=$.ag
l=H.a([$.af,$.bk],o)
H.a([],s)
$.$get$b().h(0,new G.d("Piper's",l,q,r,0))
r=H.a(["Melodic"],s)
q=$.o
l=H.a([$.af,$.aN],o)
H.a([],s)
$.$get$b().h(0,new G.d("Melodic",l,q,r,0))
r=H.a(["Smooth"],s)
q=$.o
l=H.a([$.af,$.bj],o)
H.a([],s)
$.$get$b().h(0,new G.d("Smooth",l,q,r,0))
r=H.a(["Thrash"],s)
q=$.o
l=H.a([$.af,$.bz],o)
H.a([],s)
$.$get$b().h(0,new G.d("Thrash",l,q,r,0))
r=H.a(["Chant","Chanting"],s)
q=$.o
l=H.a([$.af,$.b3],o)
H.a([],s)
$.$get$b().h(0,new G.d("Chant",l,q,r,0))
r=H.a(["Chewy"],s)
q=$.o
l=H.a([$.bz,$.aH],o)
H.a([],s)
$.$get$b().h(0,new G.d("Chewy",l,q,r,0))
r=H.a(["Phony"],s)
q=$.o
l=H.a([$.bz,$.b8],o)
H.a([],s)
$.$get$b().h(0,new G.d("Phony",l,q,r,0))
r=H.a(["Doctor's"],s)
q=$.ag
l=H.a([$.a1,$.b3],o)
H.a([],s)
$.$get$b().h(0,new G.d("Doctor's",l,q,r,0))
r=H.a(["Straitjacketed"],s)
q=$.o
l=H.a([$.bk,$.b3],o)
H.a([],s)
$.$get$b().h(0,new G.d("Straitjacketed",l,q,r,0))
r=H.a(["Strapped"],s)
q=$.o
l=H.a([$.bk,$.aV],o)
H.a([],s)
$.$get$b().h(0,new G.d("Strapped",l,q,r,0))
r=H.a(["Bondage"],s)
q=$.o
l=H.a([$.bk,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bondage",l,q,r,0))
r=H.a(["Sealed"],s)
q=$.H
l=H.a([$.bk,$.aa],o)
H.a([],s)
$.$get$b().h(0,new G.d("Sealed",l,q,r,0))
r=H.a(["Attractive"],s)
q=$.K
l=H.a([$.aN,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Attractive",l,q,r,0))
r=H.a(["Relaxed"],s)
q=$.H
l=H.a([$.bj,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Relaxed",l,q,r,0))
r=H.a(["Loveseat"],s)
q=$.o
l=H.a([$.bj,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Loveseat",l,q,r,0))
r=H.a(["Doughy","Comfort Food"],s)
q=$.K
l=H.a([$.aH,$.bj],o)
H.a([],s)
$.$get$b().h(0,new G.d("Comfort Food",l,q,r,0))
r=H.a(["Yandere"],s)
q=$.K
l=H.a([$.aO,$.bg],o)
H.a([],s)
$.$get$b().h(0,new G.d("Yandere",l,q,r,0))
r=H.a(["Tsundere"],s)
q=$.K
l=H.a([$.aO,$.aV],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tsundere",l,q,r,0))
r=H.a(["Disturbed"],s)
q=$.H
l=H.a([$.aJ,$.aV],o)
H.a([],s)
$.$get$b().h(0,new G.d("Disturbed",l,q,r,0))
r=H.a(["Sapient"],s)
q=$.H
l=H.a([$.a1,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Sapient",l,q,r,0))
r=H.a(["Lab Grown","Hydroponic"],s)
q=$.o
l=H.a([$.a1,$.aH],o)
H.a([],s)
$.$get$b().h(0,new G.d("Hydroponic",l,q,r,0))
r=H.a(["Free Range"],s)
q=$.o
l=H.a([$.aJ,$.aH],o)
H.a([],s)
$.$get$b().h(0,new G.d("Free Range",l,q,r,0))
r=H.a(["Gentleman's","Lady's"],s)
q=$.ag
l=H.a([$.aO,$.ap],o)
H.a([],s)
$.$get$b().h(0,new G.d("Gentlemanly",l,q,r,0))
r=H.a(["Sapient"],s)
q=$.H
l=H.a([$.a1,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Sapient",l,q,r,0))
r=H.a(["Sentimental","Anniversary"],s)
q=$.H
l=H.a([$.aO,$.bp],o)
H.a([],s)
$.$get$b().h(0,new G.d("Sentimental",l,q,r,0))
r=H.a(["Doki-Doki"],s)
q=$.H
l=H.a([$.aO,$.bb],o)
H.a([],s)
$.$get$b().h(0,new G.d("Doki-Doki",l,q,r,0))
r=H.a(["Doki-Doki Literature Club"],s)
q=$.H
l=H.a([$.aO,$.bb,$.aT,$.iL],o)
H.a([],s)
$.$get$b().h(0,new G.d("Doki-Doki Literature Club",l,q,r,0))
r=H.a(["Banana"],s)
q=$.H
l=H.a([$.aH,$.b9],o)
H.a([],s)
$.$get$b().h(0,new G.d("Banana",l,q,r,0))
r=H.a(["Mana"],s)
q=$.H
l=H.a([$.aH,$.aa],o)
H.a([],s)
$.$get$b().h(0,new G.d("Mana",l,q,r,0))
r=H.a(["Homemade"],s)
q=$.H
l=H.a([$.aH,$.bp],o)
H.a([],s)
$.$get$b().h(0,new G.d("Homemade",l,q,r,0))
r=H.a(["Steampunk"],s)
q=$.H
l=H.a([$.aa,$.ap],o)
H.a([],s)
$.$get$b().h(0,new G.d("Steampunk",l,q,r,0))
r=H.a(["Thor's Banana"],s)
q=$.H
l=H.a([$.aH,$.b9,$.ad,$.bb],o)
H.a([],s)
$.$get$b().h(0,new G.d("I Can't Stop Laughing",l,q,r,0))
r=H.a(["Soulsteel"],s)
q=$.r
l=H.a([$.C,$.bZ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Soulsteel",l,q,r,0))
r=H.a(["Ritual","Tribal"],s)
q=$.o
l=H.a([$.bh,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ritual",l,q,r,0))
r=H.a(["Inflamable"],s)
q=$.H
l=H.a([$.bS,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Inflamable",l,q,r,0))
r=H.a(["Crafting"],s)
q=$.o
l=H.a([$.a2,$.a1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Crafting",l,q,r,0))
r=H.a(["Polluting"],s)
q=$.o
l=H.a([$.aU,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Polluting",l,q,r,0))
r=H.a(["Insulated"],s)
q=$.H
l=H.a([$.c9,$.ad],o)
H.a([],s)
$.$get$b().h(0,new G.d("Insulated",l,q,r,0))
r=H.a(["Ash"],s)
q=$.r
l=H.a([$.Q,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ash",l,q,r,0))
r=H.a(["Delicate"],s)
q=$.H
l=H.a([$.Q,$.bf],o)
H.a([],s)
$.$get$b().h(0,new G.d("Delicate",l,q,r,0))
r=H.a(["Glass Blower's"],s)
q=$.ag
l=H.a([$.bf,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Glass Blower's",l,q,r,0))
r=H.a(["Sunburnt"],s)
q=$.H
l=H.a([$.bo,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Sunburnt",l,q,r,0))
r=H.a(["Pyrebitten"],s)
q=$.H
l=H.a([$.aI,$.br],o)
H.a([],s)
$.$get$b().h(0,new G.d("Pyrebitten",l,q,r,0))
r=H.a(["Mink"],s)
q=$.r
l=H.a([$.aO,$.ce],o)
H.a([],s)
$.$get$b().h(0,new G.d("Mink",l,q,r,0))
r=H.a(["Wildfire"],s)
q=$.ag
l=H.a([$.b5,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Wildfire",l,q,r,0))
r=H.a(["Scarred"],s)
q=$.H
l=H.a([$.b3,$.bT],o)
H.a([],s)
$.$get$b().h(0,new G.d("Scarred",l,q,r,0))
r=H.a(["Hyper Realistic"],s)
q=$.K
l=H.a([$.bp,$.bg],o)
H.a([],s)
$.$get$b().h(0,new G.d("Hyper Realistic",l,q,r,0))
r=H.a(["Hestia's"],s)
q=$.ag
l=H.a([$.c_,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Hestia's",l,q,r,0))
r=H.a(["Smoking"],s)
q=$.H
l=H.a([$.at,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Smoking",l,q,r,0))
r=H.a(["Heating","Radiator","Furnace"],s)
q=$.H
l=H.a([$.aI,$.ad],o)
H.a([],s)
$.$get$b().h(0,new G.d("Radiator",l,q,r,0))
r=H.a(["Fuming"],s)
q=$.H
l=H.a([$.aI,$.bR],o)
H.a([],s)
$.$get$b().h(0,new G.d("Fuming",l,q,r,0))
r=H.a(["Firework","Sparkler"],s)
q=$.H
l=H.a([$.aI,$.aN],o)
H.a([],s)
$.$get$b().h(0,new G.d("Firework",l,q,r,0))
r=H.a(["Panicky"],s)
q=$.H
l=H.a([$.aS,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Panicky",l,q,r,0))
r=H.a(["Ornamental"],s)
q=$.H
l=H.a([$.bl,$.aN],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ornamental",l,q,r,0))
r=H.a(["Dear","Precious"],s)
q=$.H
l=H.a([$.bl,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Dear",l,q,r,0))
r=H.a(["Swaggy","Swag"],s)
q=$.H
l=H.a([$.bl,$.ay],o)
H.a([],s)
$.$get$b().h(0,new G.d("Swaggy",l,q,r,0))
r=H.a(["Uncanny"],s)
q=$.H
l=H.a([$.aV,$.bp],o)
H.a([],s)
$.$get$b().h(0,new G.d("Uncanny",l,q,r,0))
r=H.a(["Talkative","Blabbering"],s)
q=$.H
l=H.a([$.bb,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Talkative",l,q,r,0))
r=H.a(["Waifu","Catfish"],s)
q=$.H
l=H.a([$.aO,$.b8],o)
H.a([],s)
$.$get$b().h(0,new G.d("Waifu",l,q,r,0))
r=H.a(["Charming"],s)
q=$.H
l=H.a([$.aa,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Charming",l,q,r,0))
r=H.a(["God Tier"],s)
q=$.H
l=H.a([$.V,$.Y,$.bp],o)
H.a([],s)
$.$get$b().h(0,new G.d("God Tier",l,q,r,0))
r=H.a(["Cod Tier"],s)
q=$.H
l=H.a([$.V,$.Y,$.bp,$.b8,$.S],o)
H.a([],s)
$.$get$b().h(0,new G.d("Cod Tier",l,q,r,0))
r=H.a(["Dog Tier"],s)
q=$.H
l=H.a([$.V,$.Y,$.bp,$.ce],o)
H.a([],s)
$.$get$b().h(0,new G.d("Dog Tier",l,q,r,0))
r=H.a(["Cracked"],s)
q=$.H
l=H.a([$.aM,$.bS],o)
H.a([],s)
$.$get$b().h(0,new G.d("Cracked",l,q,r,0))
r=H.a(["Ruffled"],s)
q=$.H
l=H.a([$.bA,$.bS],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ruffled",l,q,r,0))
r=H.a(["Mandrake"],s)
q=$.H
l=H.a([$.b5,$.bg],o)
H.a([],s)
$.$get$b().h(0,new G.d("Mandrake",l,q,r,0))
r=H.a(["Beanstalk"],s)
q=$.H
l=H.a([$.aa,$.b5],o)
H.a([],s)
$.$get$b().h(0,new G.d("Beanstalk",l,q,r,0))
r=H.a(["Unnerving"],s)
q=$.H
l=H.a([$.bg,$.aV],o)
H.a([],s)
$.$get$b().h(0,new G.d("Unnerving",l,q,r,0))
r=H.a(["Chipped"],s)
q=$.H
o=H.a([$.bQ,$.bS],o)
H.a([],s)
$.$get$b().h(0,new G.d("Chipped",o,q,r,0))
if($.nA==null){r=$.lB
q=$.b1
o=$.aL
n=$.bh
m=new U.ah(r,"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.","Knucklekniveskind","Claws",!1,P.a3(null,null,null,p),0,3)
m.L("Claws",[q,o,n],"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.",!1,"Knucklekniveskind")
m.e.h(0,r)
$.nA=m}r=$.$get$aq();(r&&C.a).sp(r,0)
r=$.$get$aq()
q=$.f4
o=$.aL
n=$.C
m=$.b1
l=new U.ah(q,"Can you get more generic than a goddamned sword?","ShogunKindBestKind","Sword",!1,P.a3(null,null,null,p),0,3)
l.L("Sword",[o,n,m],"Can you get more generic than a goddamned sword?",!1,"ShogunKindBestKind")
l.e.h(0,q)
r.push(l)
l=$.$get$aq()
r=$.ro
q=$.al
m=$.C
n=new U.ah(r,"Did you just loot your toolbox or some shit?","WhackySmackySkullCrackyKind","Hammer",!1,P.a3(null,null,null,p),0,3)
n.L("Hammer",[q,m],"Did you just loot your toolbox or some shit?",!1,"WhackySmackySkullCrackyKind")
n.e.h(0,r)
l.push(n)
n=$.$get$aq()
l=$.rz
r=$.b_
m=$.C
q=new U.ah(l,"How the fuck did you get your hands on this?","RootyTootyPointyShootyKind","Rifle",!1,P.a3(null,null,null,p),0,3)
q.L("Rifle",[r,m],"How the fuck did you get your hands on this?",!1,"RootyTootyPointyShootyKind")
q.e.h(0,l)
n.push(q)
q=$.$get$aq()
n=$.rv
l=$.b_
m=$.C
r=new U.ah(n,"Why are guns so underpowered in games like this?","IWon\u2019tHesitateBitchKind","Pistol",!1,P.a3(null,null,null,p),0,3)
r.L("Pistol",[l,m],"Why are guns so underpowered in games like this?",!1,"IWon\u2019tHesitateBitchKind")
r.e.h(0,n)
q.push(r)
r=$.$get$aq()
q=$.uL
n=$.b_
m=$.C
l=new U.ah(q,"There is a 98.23423434% chance that  this. Is my boomstick.","PointBlankAnnihilationKind","Shotgun",!1,P.a3(null,null,null,p),0,3)
l.L("Shotgun",[n,m],"There is a 98.23423434% chance that  this. Is my boomstick.",!1,"PointBlankAnnihilationKind")
l.e.h(0,q)
r.push(l)
l=$.$get$aq()
r=$.re
q=$.b1
m=$.aL
n=$.C
o=new U.ah(r,"So. It's not a sword. And it's not a dagger. How descriptive.","WaitIsThisBestKind?","Blade",!1,P.a3(null,null,null,p),0,3)
o.L("Blade",[q,m,n],"So. It's not a sword. And it's not a dagger. How descriptive.",!1,"WaitIsThisBestKind?")
o.e.h(0,r)
l.push(o)
o=$.$get$aq()
l=$.rj
r=$.b1
n=$.aL
m=$.C
q=new U.ah(l,"For those who can't handle a sword. Or wanna be more stealthy.","ShanksKind","Dagger",!1,P.a3(null,null,null,p),0,3)
q.L("Dagger",[r,n,m],"For those who can't handle a sword. Or wanna be more stealthy.",!1,"ShanksKind")
q.e.h(0,l)
o.push(q)
q=$.$get$aq()
o=$.fW
l=$.al
m=$.bQ
n=new U.ah(o,"No. Fuck you. I refuse to believe that this is a weapon.","ThisIsTheDevilKind","Fancysanta",!1,P.a3(null,null,null,p),0,3)
n.L("Fancysanta",[l,m],"No. Fuck you. I refuse to believe that this is a weapon.",!1,"ThisIsTheDevilKind")
n.e.h(0,o)
q.push(n)
n=$.$get$aq()
q=$.uO
o=$.aL
m=$.C
l=new U.ah(q,"Do you think it was a pun on sickle cell anemia?","HalfOfCommunismKind","Sickle",!1,P.a3(null,null,null,p),0,3)
l.L("Sickle",[o,m],"Do you think it was a pun on sickle cell anemia?",!1,"HalfOfCommunismKind")
l.e.h(0,q)
n.push(l)
l=$.$get$aq()
n=$.ul
q=$.aL
m=$.C
o=new U.ah(n,"Why are fleshbags so scared of slightly deader flesh bags?","TreeGenocideKind","Chainsaw",!1,P.a3(null,null,null,p),0,3)
o.L("Chainsaw",[q,m],"Why are fleshbags so scared of slightly deader flesh bags?",!1,"TreeGenocideKind")
o.e.h(0,n)
l.push(o)
o=$.$get$aq()
l=$.ur
n=$.b1
m=$.C
q=new U.ah(l,"It's a fork. Useful for eating, if that's your thing.","ThisIsForFoodKind","Fork",!1,P.a3(null,null,null,p),0,3)
q.L("Fork",[n,m],"It's a fork. Useful for eating, if that's your thing.",!1,"ThisIsForFoodKind")
q.e.h(0,l)
o.push(q)
q=$.$get$aq()
o=$.ru
l=$.bA
m=$.br
n=new U.ah(o,"Shit. Better get JR. They'll want to see this.","PsychologyAndExtremeViolenceKind","Pigeon",!1,P.a3(null,null,null,p),0,3)
n.L("Pigeon",[l,m],"Shit. Better get JR. They'll want to see this.",!1,"PsychologyAndExtremeViolenceKind")
n.e.h(0,o)
q.push(n)
n=$.$get$aq()
q=$.eo
o=$.c8
m=$.aM
l=$.al
r=new U.ah(q,"Now we're talking. That is some grade A creative use of your storage room right there. ","HardFootballKind","Bowling Ball",!1,P.a3(null,null,null,p),0,3)
r.L("Bowling Ball",[o,m,l],"Now we're talking. That is some grade A creative use of your storage room right there. ",!1,"HardFootballKind")
r.e.h(0,q)
n.push(r)
r=$.$get$aq()
n=$.rk
q=$.aU
l=$.c_
m=new U.ah(n,"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.","DnDKind","Dice",!1,P.a3(null,null,null,p),0,3)
m.L("Dice",[q,l],"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.",!1,"DnDKind")
m.e.h(0,n)
r.push(m)
m=$.$get$aq()
r=$.rt
n=$.C
l=$.b1
q=new U.ah(r,"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.","ThisIsForClothesNotCombatKind","Needle",!1,P.a3(null,null,null,p),0,3)
q.L("Needle",[n,l],"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.",!1,"ThisIsForClothesNotCombatKind")
q.e.h(0,r)
m.push(q)
q=$.$get$aq()
m=$.uQ
r=$.a2
l=$.al
n=new U.ah(m,"Very magey. 7/10.","ShittyWizardKind","Staff",!1,P.a3(null,null,null,p),0,3)
n.L("Staff",[r,l],"Very magey. 7/10.",!1,"ShittyWizardKind")
n.e.h(0,m)
q.push(n)
n=$.$get$aq()
q=$.uS
m=$.bk
l=$.S
r=new U.ah(q,"Probably p hard to use.","ImKinkshamingKind","Whip",!1,P.a3(null,null,null,p),0,3)
r.L("Whip",[m,l],"Probably p hard to use.",!1,"ImKinkshamingKind")
r.e.h(0,q)
n.push(r)
r=$.$get$aq()
n=$.rf
q=$.b_
l=$.aM
m=$.S
o=$.b1
k=new U.ah(n,"Your inferior meat body cannot use this to its maximum potential.","ImpossibleToShootYourselfKind","Bow",!1,P.a3(null,null,null,p),0,3)
k.L("Bow",[q,l,m,o],"Your inferior meat body cannot use this to its maximum potential.",!1,"ImpossibleToShootYourselfKind")
k.e.h(0,n)
r.push(k)
k=$.$get$aq()
r=$.iL
n=$.a2
o=$.al
m=new U.ah(r,"Easy to use even for weak fleshy muscles.","CavemanKind","Club",!1,P.a3(null,null,null,p),0,3)
m.L("Club",[n,o],"Easy to use even for weak fleshy muscles.",!1,"CavemanKind")
m.e.h(0,r)
k.push(m)
m=$.$get$aq()
k=$.iJ
r=$.a2
o=new U.ah(k,"God damn Wastes, use normal specibi. ","BeatEmDeadAndCleanTheSceneKind","Broom",!1,P.a3(null,null,null,p),0,3)
o.L("Broom",[r,k],"God damn Wastes, use normal specibi. ",!1,"BeatEmDeadAndCleanTheSceneKind")
o.e.h(0,k)
m.push(o)
o=$.$get$aq()
m=$.aT
k=$.Q
r=$.al
n=new U.ah(m,"You better fucking hope this is either heavy or magic as fuck.","SharpenTheLeatherBoundKind","Book",!1,P.a3(null,null,null,p),0,3)
n.L("Book",[k,r],"You better fucking hope this is either heavy or magic as fuck.",!1,"SharpenTheLeatherBoundKind")
n.e.h(0,m)
o.push(n)
n=$.$get$aq()
o=$.uH
m=$.C
r=$.al
k=new U.ah(o,"Okay. There's a story here, I just know it.","TheGreatestFuckingWeaponKind","Road Sign",!1,P.a3(null,null,null,p),0,3)
k.L("Road Sign",[m,r],"Okay. There's a story here, I just know it.",!1,"TheGreatestFuckingWeaponKind")
k.e.h(0,o)
n.push(k)
k=$.$get$aq()
n=$.rd
o=$.aL
r=$.C
m=$.al
l=new U.ah(n,"Legit.","TreeMassacreKind","Axe",!1,P.a3(null,null,null,p),0,3)
l.L("Axe",[o,r,m],"Legit.",!1,"TreeMassacreKind")
l.e.h(0,n)
k.push(l)
l=$.$get$aq()
k=$.uB
n=$.a2
m=$.b1
r=new U.ah(k,"Good for chest stabs.","UseOnHorsebackKind","Lance",!1,P.a3(null,null,null,p),0,3)
r.L("Lance",[n,m],"Good for chest stabs.",!1,"UseOnHorsebackKind")
r.e.h(0,k)
l.push(r)
r=$.$get$aq()
l=$.f3
k=$.C
m=$.al
n=new U.ah(l,"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.","OnlyWeaklingsNeedShieldsKind","Shield",!1,P.a3(null,null,null,p),0,3)
n.L("Shield",[k,m],"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.",!1,"OnlyWeaklingsNeedShieldsKind")
n.e.h(0,l)
r.push(n)
n=$.$get$aq()
r=$.uk
l=$.a2
m=$.al
k=new U.ah(r,"Good for turning disabilities to strengths.","AnAncientEvilResidesWithinThisKind","Cane",!1,P.a3(null,null,null,p),0,3)
k.L("Cane",[l,m],"Good for turning disabilities to strengths.",!1,"AnAncientEvilResidesWithinThisKind")
k.e.h(0,r)
n.push(k)
k=$.$get$aq()
n=$.uT
r=$.aU
m=$.al
l=new U.ah(n,"It's a yo-yo. Figure it out.","IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind","Yo-Yo",!1,P.a3(null,null,null,p),0,3)
l.L("Yo-Yo",[r,m],"It's a yo-yo. Figure it out.",!1,"IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind")
l.e.h(0,n)
k.push(l)
l=$.$get$aq()
k=$.uP
n=$.a2
m=$.b_
r=new U.ah(k,"What are you gonna use for amo?","IsThisAFuckingJockStrapKind","Sling",!1,P.a3(null,null,null,p),0,3)
r.L("Sling",[n,m],"What are you gonna use for amo?",!1,"IsThisAFuckingJockStrapKind")
r.e.h(0,k)
l.push(r)
r=$.$get$aq()
l=$.uN
k=$.C
m=$.aL
n=new U.ah(l,"So edgey.","NarutoKind","Shuriken",!1,P.a3(null,null,null,p),0,3)
n.L("Shuriken",[k,m],"So edgey.",!1,"NarutoKind")
n.e.h(0,l)
r.push(n)
n=$.$get$aq()
r=$.rr
l=$.C
m=$.b_
k=new U.ah(r,"No. SERIOUSLY, where the fuck are all you getting these things.","ITSSOFUCKINGLOUDKIND","Machine Gun",!1,P.a3(null,null,null,p),0,3)
k.L("Machine Gun",[l,m],"No. SERIOUSLY, where the fuck are all you getting these things.",!1,"ITSSOFUCKINGLOUDKIND")
k.e.h(0,r)
n.push(k)
k=$.$get$aq()
n=$.lC
r=$.C
m=$.bs
l=new U.ah(n,"Jegus fuck WHY do you HAVE this?","HandheldSunBombKind","Grenade",!1,P.a3(null,null,null,p),0,3)
l.L("Grenade",[r,m],"Jegus fuck WHY do you HAVE this?",!1,"HandheldSunBombKind")
l.e.h(0,n)
k.push(l)
l=$.$get$aq()
k=$.eo
n=$.c9
m=$.al
r=new U.ah(k,"...I refuse to believe you have done a single point of damage with this unupgraded. ","HahahBallsKind","Ball",!1,P.a3(null,null,null,p),0,3)
r.L("Ball",[n,m],"...I refuse to believe you have done a single point of damage with this unupgraded. ",!1,"HahahBallsKind")
r.e.h(0,k)
l.push(r)
r=$.$get$aq()
l=$.uR
k=$.C
m=$.b1
n=new U.ah(l,"Fuck you, just call it a trident.","SheWasAGoodCharacterDontYouDareSayOtherwiseKind","3dent",!1,P.a3(null,null,null,p),0,3)
n.L("3dent",[k,m],"Fuck you, just call it a trident.",!1,"SheWasAGoodCharacterDontYouDareSayOtherwiseKind")
n.e.h(0,l)
r.push(n)
n=$.$get$aq()
r=$.rh
l=$.Q
m=$.aL
k=new U.ah(r,"An X-Men fan, I see.","YuGiOhKind","Card",!1,P.a3(null,null,null,p),0,3)
k.L("Card",[l,m],"An X-Men fan, I see.",!1,"YuGiOhKind")
k.e.h(0,r)
n.push(k)
k=$.$get$aq()
n=$.rl
r=$.C
m=$.al
l=new U.ah(n,"Go with what you know, I guess.","UnstoppableKind","Frying Pan",!1,P.a3(null,null,null,p),0,3)
l.L("Frying Pan",[r,m],"Go with what you know, I guess.",!1,"UnstoppableKind")
l.e.h(0,n)
k.push(l)
l=$.$get$aq()
k=$.iM
n=$.bj
m=$.S
r=new U.ah(k,"So. Do you have to wait for the enemy to fall asleep?","SuffocateYourEnemiesKind","Pillow",!1,P.a3(null,null,null,p),0,3)
r.L("Pillow",[n,m],"So. Do you have to wait for the enemy to fall asleep?",!1,"SuffocateYourEnemiesKind")
r.e.h(0,k)
l.push(r)
r=$.$get$aq()
l=$.fV
k=$.C
m=$.bk
n=new U.ah(l,"This could be metal as fuck.","BikerGangKind","Chain",!1,P.a3(null,null,null,p),0,3)
n.L("Chain",[k,m],"This could be metal as fuck.",!1,"BikerGangKind")
n.e.h(0,l)
r.push(n)
n=$.$get$aq()
r=$.rB
l=$.C
m=$.al
k=new U.ah(r,"Hell yes, engineers!","IfYouCanDodgeAWrenchYouCanDodgeABallKind","Wrench",!1,P.a3(null,null,null,p),0,3)
k.L("Wrench",[l,m],"Hell yes, engineers!",!1,"IfYouCanDodgeAWrenchYouCanDodgeABallKind")
k.e.h(0,r)
n.push(k)
k=$.$get$aq()
n=$.uM
r=$.C
m=$.al
l=new U.ah(n,"Dual purpose.","HideTheBodiesKind","Shovel",!1,P.a3(null,null,null,p),0,3)
l.L("Shovel",[r,m],"Dual purpose.",!1,"HideTheBodiesKind")
l.e.h(0,n)
k.push(l)
l=$.$get$aq()
k=$.rA
n=$.a2
m=$.al
r=new U.ah(k,"There is a 99.9999234% chance cartoons lied to you about this being a weapon.","ThereWillBeNoBitchingInMyMotherFuckingKitchenKind","Rolling Pin",!1,P.a3(null,null,null,p),0,3)
r.L("Rolling Pin",[n,m],"There is a 99.9999234% chance cartoons lied to you about this being a weapon.",!1,"ThereWillBeNoBitchingInMyMotherFuckingKitchenKind")
r.e.h(0,k)
l.push(r)
r=$.$get$aq()
l=$.rx
k=$.a2
m=$.aS
n=new U.ah(l,"Fuck you for picking this.","KermitsGoneBadKind","Puppet",!1,P.a3(null,null,null,p),0,3)
n.L("Puppet",[k,m],"Fuck you for picking this.",!1,"KermitsGoneBadKind")
n.e.h(0,l)
r.push(n)
n=$.$get$aq()
r=$.ry
l=$.C
m=$.aL
k=new U.ah(r,"So fucking edgey.","KermitsGoneBadKind","Razor",!1,P.a3(null,null,null,p),0,3)
k.L("Razor",[l,m],"So fucking edgey.",!1,"KermitsGoneBadKind")
k.e.h(0,r)
n.push(k)
k=$.$get$aq()
n=$.lE
r=$.C
m=$.a1
l=new U.ah(n,"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.","MightierThanTheSwordKind","Pen",!1,P.a3(null,null,null,p),0,3)
l.L("Pen",[r,m],"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.",!1,"MightierThanTheSwordKind")
l.e.h(0,n)
k.push(l)
l=$.$get$aq()
k=$.iK
n=$.aM
m=$.c8
r=new U.ah(k,"The meme is strong with this one.","TheShogunsStatuetteKind","Bust",!1,P.a3(null,null,null,p),0,3)
r.L("Bust",[n,m],"The meme is strong with this one.",!1,"TheShogunsStatuetteKind")
r.e.h(0,k)
l.push(r)
r=$.$get$aq()
l=$.uu
k=$.a2
m=$.al
n=new U.ah(l,"Seems legit.","NineIronToTheFuckingSkullKind","Golf Club",!1,P.a3(null,null,null,p),0,3)
n.L("Golf Club",[k,m],"Seems legit.",!1,"NineIronToTheFuckingSkullKind")
n.e.h(0,l)
r.push(n)
n=$.$get$aq()
r=$.rq
l=$.C
m=$.aL
k=new U.ah(r,"Don't listen to ABJ, this is NOT a useful weapon.","ShanksButHesAHousewifeKind","Knife",!1,P.a3(null,null,null,p),0,3)
k.L("Knife",[l,m],"Don't listen to ABJ, this is NOT a useful weapon.",!1,"ShanksButHesAHousewifeKind")
k.e.h(0,r)
n.push(k)
k=$.$get$aq()
n=$.uK
r=$.C
m=$.aL
l=new U.ah(n,"Either you are a psycho or these are some VERY big fucking scissors.","RunWithTheseKind","Scissors",!1,P.a3(null,null,null,p),0,3)
l.L("Scissors",[r,m],"Either you are a psycho or these are some VERY big fucking scissors.",!1,"RunWithTheseKind")
l.e.h(0,n)
k.push(l)
l=$.$get$aq()
k=$.uJ
n=$.C
m=$.c8
r=new U.ah(k,"Treat it well or it will never reach Vaulthalla.","TomAndFuckingJerryThemKind","Safe",!1,P.a3(null,null,null,p),0,3)
r.L("Safe",[n,m],"Treat it well or it will never reach Vaulthalla.",!1,"TomAndFuckingJerryThemKind")
r.e.h(0,k)
l.push(r)
r=$.$get$aq()
l=$.du
k=$.a2
m=$.al
p=new U.ah(l,"Bitches love sticks","WeaponiseTheTreesKind","Stick",!1,P.a3(null,null,null,p),0,3)
p.L("Stick",[k,m],"Bitches love sticks",!1,"WeaponiseTheTreesKind")
p.e.h(0,l)
r.push(p)
p=new S.bw("Duttle","Dut",null,null)
$.$get$bY().push(p)
$.u3=p
p=new S.bw("Salamander","GLUB",null,null)
$.$get$bY().push(p)
$.r5=p
p=new S.bw("Crocodile","NAK",null,null)
$.$get$bY().push(p)
$.dW=p
p=new S.bw("Iguana","thip",null,null)
$.$get$bY().push(p)
$.ej=p
p=new S.bw("Turtle","click",null,null)
$.$get$bY().push(p)
$.eX=p
p=new S.bw("Skeleton","rattle",null,null)
$.$get$bY().push(p)
$.dL=p
p=new S.bw("Robot","BEEP",null,null)
$.$get$bY().push(p)
$.eV=p
p=new S.bw("Chameleon","BLEP",null,null)
$.$get$bY().push(p)
$.ie=p
p=new S.bw("Axolotl","BARP",null,null)
$.$get$bY().push(p)
$.qY=p
p=new S.bw("Lizard","bleb",null,null)
$.$get$bY().push(p)
$.l3=p
p=new S.bw("Snake","hiss",null,null)
$.$get$bY().push(p)
$.l7=p
p=new S.bw("Alligator","nak",null,null)
$.$get$bY().push(p)
$.id=p
p=new S.bw("Mole","snuff",null,null)
$.$get$bY().push(p)
$.u4=p
p=new S.bw("Bird","tweet",null,null)
$.$get$bY().push(p)
$.kY=p
p=new S.bw("Wolf","howl",null,null)
$.$get$bY().push(p)
$.l9=p
p=new S.bw("Newt","skitter",null,null)
$.$get$bY().push(p)
$.u5=p
p=new S.bw("Spider","skitter",null,null)
$.$get$bY().push(p)
$.l8=p
p=new S.bw("Cupid","flappa",null,null)
$.$get$bY().push(p)
$.ig=p
p=new S.bw("Dragon","roar",null,null)
$.$get$bY().push(p)
$.eT=p
p=new S.hX("Prospitian","murmur",null,null)
$.$get$bY().push(p)
$.r2=p
p=new S.hX("Dersite","mutter",null,null)
$.$get$bY().push(p)
$.r1=p
$.u6=H.a([$.l7,$.id,$.u5,$.r5,$.ej,$.dW,$.eX,$.ie,$.qY,$.l3],[S.bw])
$.fP=new T.bV(0,"spices")
p=$.xO
$.eP=new T.bV(p,"fresh baked bread")
$.co=new T.bV(p,"sweetness")
$.cd=new T.bV(p,"nature")
$.l6=new T.bV(0,"salt")
r=$.xN
$.d8=new T.bV(r,"rot")
$.xL=new T.bV(r,"feet")
$.eU=new T.bV(0,"oil")
$.r_=new T.bV(0,"chlorine")
$.fN=new T.bV(0,"nothing in particular")
$.ei=new T.bV(0,"gunpowder")
$.fM=new T.bV(0,"must")
$.d9=new T.bV(p,"zoo animals")
$.dM=new T.bV(r,"sweat")
$.ij=new T.bV(0,"ozone")
$.cm=new T.bV(0,"deceit")
$.dn=new T.bV(r,"blood")
$.eW=new T.bV(r,"smoke")
$.c7=new K.bG(r,"creepy")
$.be=new K.bG(p,"calm")
$.cv=new K.bG(r,"frantic")
$.ii=new K.bG(0,"like nothing")
$.cn=new K.bG(p,"energizing")
$.cw=new K.bG(0,"studious")
$.d7=new K.bG(0,"dangerous")
$.dG=new K.bG(0,"glamorous")
$.fO=new K.bG(0,"romantic")
$.eS=new K.bG(p,"creative")
$.l4=new K.bG(0,"lucky")
$.dH=new K.bG(0,"happy")
$.dI=new K.bG(0,"heroic")
$.el=new K.bG(r,"stupid")
$.l4=new K.bG(0,"lucky")
$.u2=new K.bG(0,"claustrophobic")
$.l5=new K.bG(0,"overheated")
$.kZ=new K.bG(r,"confusing")
$.cP=new K.bG(0,"contemplatative")
$.cO=new M.bt(0,"clanking")
$.cQ=new M.bt(0,"laughing")
$.bn=new M.bt(p,"rustling")
$.ek=new M.bt(r,"screaming")
$.l1=new M.bt(r,"foot steps")
$.eQ=new M.bt(r,"beeping")
$.r7=new M.bt(r,"whispering")
$.eR=new M.bt(0,"clacking")
$.cH=new M.bt(0,"applause")
$.dX=new M.bt(0,"jazz")
$.l_=new M.bt(0,"disco")
$.ih=new M.bt(0,"drums")
$.l0=new M.bt(0,"echoing")
$.r4=new M.bt(r,"roaring")
$.l2=new M.bt(r,"gunfire")
$.cB=new M.bt(0,"music")
$.r6=new M.bt(0,"singing")
$.qZ=new M.bt(0,"chanting")
$.eY=new M.bt(0,"whistling")
$.dJ=new M.bt(p,"nature")
$.r0=new M.bt(0,"croaking")
$.dK=new M.bt(0,"silence")
$.r3=new M.bt(0,"pulsing")
$.u7=new M.bt(0,"ticking")
T.vs()
p=A.cl
r=P.O
l=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
l.j(0,$.ao,L.e("#00ff00"),!0)
l.j(0,$.aA,L.e("#EFEFEF"),!0)
l.j(0,$.az,L.e("#DEDEDE"),!0)
l.j(0,$.ax,L.e("#FF2106"),!0)
l.j(0,$.aw,L.e("#B01200"),!0)
l.j(0,$.aC,L.e("#2F2F30"),!0)
l.j(0,$.aD,L.e("#1D1D1D"),!0)
l.j(0,$.aB,L.e("#080808"),!0)
l.j(0,$.av,L.e("#030303"),!0)
l.j(0,$.au,L.e("#242424"),!0)
l.j(0,$.aF,L.e("#333333"),!0)
l.j(0,$.aE,L.e("#141414"),!0)
m=P.f(H.a(["Frogs"],s),t)
k=P.f(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],s),t)
n=P.f(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],s),t)
o=P.f(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],s),t)
q=P.f(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],s),t)
j=E.J
i=[j]
h=P.f(H.a([new E.J($.df,2,!0),new E.J($.an,1,!0),new E.J($.aY,-2,!0)],i),j)
g=[X.F,P.U]
f=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
f.j(0,$.ao,L.e("#FF9B00"),!0)
f.j(0,$.aA,L.e("#FF9B00"),!0)
f.j(0,$.az,L.e("#FF8700"),!0)
f.j(0,$.ax,L.e("#7F7F7F"),!0)
f.j(0,$.aw,L.e("#727272"),!0)
f.j(0,$.aC,L.e("#A3A3A3"),!0)
f.j(0,$.aD,L.e("#999999"),!0)
f.j(0,$.aB,L.e("#898989"),!0)
f.j(0,$.av,L.e("#EFEFEF"),!0)
f.j(0,$.au,L.e("#DBDBDB"),!0)
f.j(0,$.aF,L.e("#C6C6C6"),!0)
f.j(0,$.aE,L.e("#ADADAD"),!0)
e=[A.cN]
d=A.a9
f=new N.nz(l,m,k,n,o,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",q,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],h,0.5,0,new H.q(0,null,null,null,null,null,0,g),null,"","",!1,"Space",null,!0,!1,!1,!1,!0,1,f,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],i),H.a([],e),Q.G(null,null,d))
f.a8(0,"Space",!0,!1)
$.jT=f
f=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
f.j(0,$.ao,L.e("#ff0000"),!0)
f.j(0,$.aA,L.e("#FF2106"),!0)
f.j(0,$.az,L.e("#AD1604"),!0)
f.j(0,$.ax,L.e("#030303"),!0)
f.j(0,$.aw,L.e("#242424"),!0)
f.j(0,$.aC,L.e("#510606"),!0)
f.j(0,$.aD,L.e("#3C0404"),!0)
f.j(0,$.aB,L.e("#1F0000"),!0)
f.j(0,$.av,L.e("#B70D0E"),!0)
f.j(0,$.au,L.e("#970203"),!0)
f.j(0,$.aF,L.e("#8E1516"),!0)
f.j(0,$.aE,L.e("#640707"),!0)
h=P.f(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],s),t)
q=P.f(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],s),t)
o=P.f(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],s),t)
n=P.f(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],s),t)
k=P.f(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],s),t)
m=P.f(H.a([new E.J($.c4,2,!0),new E.J($.aY,1,!0),new E.J($.bu,-2,!0)],i),j)
l=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
l.j(0,$.ao,L.e("#FF9B00"),!0)
l.j(0,$.aA,L.e("#FF9B00"),!0)
l.j(0,$.az,L.e("#FF8700"),!0)
l.j(0,$.ax,L.e("#7F7F7F"),!0)
l.j(0,$.aw,L.e("#727272"),!0)
l.j(0,$.aC,L.e("#A3A3A3"),!0)
l.j(0,$.aD,L.e("#999999"),!0)
l.j(0,$.aB,L.e("#898989"),!0)
l.j(0,$.av,L.e("#EFEFEF"),!0)
l.j(0,$.au,L.e("#DBDBDB"),!0)
l.j(0,$.aF,L.e("#C6C6C6"),!0)
l.j(0,$.aE,L.e("#ADADAD"),!0)
l=new N.of(0.7,f,h,q,o,n,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",k,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],m,0.5,1,new H.q(0,null,null,null,null,null,0,g),null,"","",!1,"Time",null,!0,!1,!1,!1,!0,1,l,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],i),H.a([],e),Q.G(null,null,d))
l.a8(1,"Time",!0,!1)
$.jU=l
l=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
l.j(0,$.ao,L.e("#3399ff"),!0)
l.j(0,$.aA,L.e("#10E0FF"),!0)
l.j(0,$.az,L.e("#00A4BB"),!0)
l.j(0,$.ax,L.e("#FEFD49"),!0)
l.j(0,$.aw,L.e("#D6D601"),!0)
l.j(0,$.aC,L.e("#0052F3"),!0)
l.j(0,$.aD,L.e("#0046D1"),!0)
l.j(0,$.aB,L.e("#003396"),!0)
l.j(0,$.av,L.e("#0087EB"),!0)
l.j(0,$.au,L.e("#0070ED"),!0)
l.j(0,$.aF,L.e("#006BE1"),!0)
l.j(0,$.aE,L.e("#0054B0"),!0)
m=P.f(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],s),t)
k=P.f(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],s),t)
n=P.f(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],s),t)
o=P.f(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],s),t)
q=P.f(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],t)
h=P.f(H.a([new E.J($.aY,2,!0),new E.J($.aZ,1,!0),new E.J($.an,-1,!0),new E.J($.cb,-1,!0),new E.J($.cf,0.05,!1)],i),j)
f=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
f.j(0,$.ao,L.e("#FF9B00"),!0)
f.j(0,$.aA,L.e("#FF9B00"),!0)
f.j(0,$.az,L.e("#FF8700"),!0)
f.j(0,$.ax,L.e("#7F7F7F"),!0)
f.j(0,$.aw,L.e("#727272"),!0)
f.j(0,$.aC,L.e("#A3A3A3"),!0)
f.j(0,$.aD,L.e("#999999"),!0)
f.j(0,$.aB,L.e("#898989"),!0)
f.j(0,$.av,L.e("#EFEFEF"),!0)
f.j(0,$.au,L.e("#DBDBDB"),!0)
f.j(0,$.aF,L.e("#C6C6C6"),!0)
f.j(0,$.aE,L.e("#ADADAD"),!0)
f=new T.ka(0.3,l,m,k,n,o,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],q,h,0.5,2,new H.q(0,null,null,null,null,null,0,g),null,"","",!1,"Breath",null,!0,!1,!1,!1,!0,1,f,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],i),H.a([],e),Q.G(null,null,d))
f.a8(2,"Breath",!0,!1)
$.x1=f
f=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
f.j(0,$.ao,L.e("#003300"),!0)
f.j(0,$.aA,L.e("#0F0F0F"),!0)
f.j(0,$.az,L.e("#010101"),!0)
f.j(0,$.ax,L.e("#E8C15E"),!0)
f.j(0,$.aw,L.e("#C7A140"),!0)
f.j(0,$.aC,L.e("#1E211E"),!0)
f.j(0,$.aD,L.e("#141614"),!0)
f.j(0,$.aB,L.e("#0B0D0B"),!0)
f.j(0,$.av,L.e("#204020"),!0)
f.j(0,$.au,L.e("#11200F"),!0)
f.j(0,$.aF,L.e("#192C16"),!0)
f.j(0,$.aE,L.e("#121F10"),!0)
h=P.f(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],s),t)
q=P.f(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],s),t)
o=P.f(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],s),t)
n=P.f(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],s),t)
k=P.f(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],s),t)
m=P.f(H.a([new E.J($.df,2,!0),new E.J($.bu,1,!0),new E.J($.c4,-1,!0),new E.J($.an,-1,!0),new E.J($.cf,0.01,!1)],i),j)
l=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
l.j(0,$.ao,L.e("#FF9B00"),!0)
l.j(0,$.aA,L.e("#FF9B00"),!0)
l.j(0,$.az,L.e("#FF8700"),!0)
l.j(0,$.ax,L.e("#7F7F7F"),!0)
l.j(0,$.aw,L.e("#727272"),!0)
l.j(0,$.aC,L.e("#A3A3A3"),!0)
l.j(0,$.aD,L.e("#999999"),!0)
l.j(0,$.aB,L.e("#898989"),!0)
l.j(0,$.av,L.e("#EFEFEF"),!0)
l.j(0,$.au,L.e("#DBDBDB"),!0)
l.j(0,$.aF,L.e("#C6C6C6"),!0)
l.j(0,$.aE,L.e("#ADADAD"),!0)
l=new U.kr(1,f,h,q,o,n,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,k,m,0.5,3,new H.q(0,null,null,null,null,null,0,g),null,"","",!1,"Doom",null,!0,!1,!1,!1,!0,1,l,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],i),H.a([],e),Q.G(null,null,d))
l.a8(3,"Doom",!0,!1)
$.qK=l
l=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
l.j(0,$.ao,L.e("#993300"),!0)
l.j(0,$.aA,L.e("#BA1016"),!0)
l.j(0,$.az,L.e("#820B0F"),!0)
l.j(0,$.ax,L.e("#381B76"),!0)
l.j(0,$.aw,L.e("#1E0C47"),!0)
l.j(0,$.aC,L.e("#290704"),!0)
l.j(0,$.aD,L.e("#230200"),!0)
l.j(0,$.aB,L.e("#110000"),!0)
l.j(0,$.av,L.e("#3D190A"),!0)
l.j(0,$.au,L.e("#2C1207"),!0)
l.j(0,$.aF,L.e("#5C2913"),!0)
l.j(0,$.aE,L.e("#4C1F0D"),!0)
m=P.f(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],s),t)
k=P.f(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],s),t)
n=P.f(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],s),t)
o=P.f(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],s),t)
q=P.f(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],s),t)
h=P.f(H.a([new E.J($.cb,2,!0),new E.J($.aZ,1,!0),new E.J($.df,-2,!0)],i),j)
f=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
f.j(0,$.ao,L.e("#FF9B00"),!0)
f.j(0,$.aA,L.e("#FF9B00"),!0)
f.j(0,$.az,L.e("#FF8700"),!0)
f.j(0,$.ax,L.e("#7F7F7F"),!0)
f.j(0,$.aw,L.e("#727272"),!0)
f.j(0,$.aC,L.e("#A3A3A3"),!0)
f.j(0,$.aD,L.e("#999999"),!0)
f.j(0,$.aB,L.e("#898989"),!0)
f.j(0,$.av,L.e("#EFEFEF"),!0)
f.j(0,$.au,L.e("#DBDBDB"),!0)
f.j(0,$.aF,L.e("#C6C6C6"),!0)
f.j(0,$.aE,L.e("#ADADAD"),!0)
f=new T.k8(0,l,m,k,n,o,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","tie","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],q,h,0.5,4,new H.q(0,null,null,null,null,null,0,g),null,"","",!1,"Blood",null,!0,!1,!1,!1,!0,1,f,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],i),H.a([],e),Q.G(null,null,d))
f.a8(4,"Blood",!0,!1)
$.qJ=f
f=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
f.j(0,$.ao,L.e("#ff3399"),!0)
f.j(0,$.aA,L.e("#BD1864"),!0)
f.j(0,$.az,L.e("#780F3F"),!0)
f.j(0,$.ax,L.e("#1D572E"),!0)
f.j(0,$.aw,L.e("#11371D"),!0)
f.j(0,$.aC,L.e("#4C1026"),!0)
f.j(0,$.aD,L.e("#3C0D1F"),!0)
f.j(0,$.aB,L.e("#260914"),!0)
f.j(0,$.av,L.e("#6B0829"),!0)
f.j(0,$.au,L.e("#4A0818"),!0)
f.j(0,$.aF,L.e("#55142A"),!0)
f.j(0,$.aE,L.e("#3D0E1E"),!0)
h=P.f(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],s),t)
q=P.f(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],s),t)
o=P.f(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],s),t)
n=P.f(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],s),t)
k=P.f(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],s),t)
m=P.f(H.a([new E.J($.cb,1,!0),new E.jZ(null,1,!0)],i),j)
l=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
l.j(0,$.ao,L.e("#FF9B00"),!0)
l.j(0,$.aA,L.e("#FF9B00"),!0)
l.j(0,$.az,L.e("#FF8700"),!0)
l.j(0,$.ax,L.e("#7F7F7F"),!0)
l.j(0,$.aw,L.e("#727272"),!0)
l.j(0,$.aC,L.e("#A3A3A3"),!0)
l.j(0,$.aD,L.e("#999999"),!0)
l.j(0,$.aB,L.e("#898989"),!0)
l.j(0,$.av,L.e("#EFEFEF"),!0)
l.j(0,$.au,L.e("#DBDBDB"),!0)
l.j(0,$.aF,L.e("#C6C6C6"),!0)
l.j(0,$.aE,L.e("#ADADAD"),!0)
l=new T.ln(f,h,q,o,n,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,k,m,0.5,5,new H.q(0,null,null,null,null,null,0,g),null,"","",!1,"Heart",null,!0,!1,!1,!1,!0,1,l,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],i),H.a([],e),Q.G(null,null,d))
l.a8(5,"Heart",!0,!1)
$.x5=l
l=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
l.j(0,$.ao,L.e("#3da35a"),!0)
l.j(0,$.aA,L.e("#06FFC9"),!0)
l.j(0,$.az,L.e("#04A885"),!0)
l.j(0,$.ax,L.e("#6E0E2E"),!0)
l.j(0,$.aw,L.e("#4A0818"),!0)
l.j(0,$.aC,L.e("#1D572E"),!0)
l.j(0,$.aD,L.e("#164524"),!0)
l.j(0,$.aB,L.e("#11371D"),!0)
l.j(0,$.av,L.e("#3DA35A"),!0)
l.j(0,$.au,L.e("#2E7A43"),!0)
l.j(0,$.aF,L.e("#3B7E4F"),!0)
l.j(0,$.aE,L.e("#265133"),!0)
m=P.f(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],s),t)
k=P.f(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],s),t)
n=P.f(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],s),t)
o=P.f(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],s),t)
q=P.f(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],s),t)
h=P.f(H.a([new E.J($.bu,2,!0),new E.J($.c4,1,!0),new E.J($.df,-2,!0)],i),j)
f=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
f.j(0,$.ao,L.e("#FF9B00"),!0)
f.j(0,$.aA,L.e("#FF9B00"),!0)
f.j(0,$.az,L.e("#FF8700"),!0)
f.j(0,$.ax,L.e("#7F7F7F"),!0)
f.j(0,$.aw,L.e("#727272"),!0)
f.j(0,$.aC,L.e("#A3A3A3"),!0)
f.j(0,$.aD,L.e("#999999"),!0)
f.j(0,$.aB,L.e("#898989"),!0)
f.j(0,$.av,L.e("#EFEFEF"),!0)
f.j(0,$.au,L.e("#DBDBDB"),!0)
f.j(0,$.aF,L.e("#C6C6C6"),!0)
f.j(0,$.aE,L.e("#ADADAD"),!0)
f=new V.ml(l,m,k,n,o,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",q,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],h,0.5,6,new H.q(0,null,null,null,null,null,0,g),null,"","",!1,"Mind",null,!0,!1,!1,!1,!0,1,f,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],i),H.a([],e),Q.G(null,null,d))
f.a8(6,"Mind",!0,!1)
$.xa=f
f=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
f.j(0,$.ao,L.e("#ff9933"),!0)
f.j(0,$.aA,L.e("#FEFD49"),!0)
f.j(0,$.az,L.e("#FEC910"),!0)
f.j(0,$.ax,L.e("#10E0FF"),!0)
f.j(0,$.aw,L.e("#00A4BB"),!0)
f.j(0,$.aC,L.e("#FA4900"),!0)
f.j(0,$.aD,L.e("#E94200"),!0)
f.j(0,$.aB,L.e("#C33700"),!0)
f.j(0,$.av,L.e("#FF8800"),!0)
f.j(0,$.au,L.e("#D66E04"),!0)
f.j(0,$.aF,L.e("#E76700"),!0)
f.j(0,$.aE,L.e("#CA5B00"),!0)
h=P.f(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],s),t)
q=P.f(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],s),t)
o=P.f(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],s),t)
n=P.f(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],s),t)
k=P.f(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],s),t)
m=P.f(H.a([new E.J($.bC,2,!0),new E.J($.bu,1,!0),new E.J($.aZ,-1,!0),new E.J($.an,-1,!0),new E.J($.cf,0.2,!1)],i),j)
l=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
l.j(0,$.ao,L.e("#FF9B00"),!0)
l.j(0,$.aA,L.e("#FF9B00"),!0)
l.j(0,$.az,L.e("#FF8700"),!0)
l.j(0,$.ax,L.e("#7F7F7F"),!0)
l.j(0,$.aw,L.e("#727272"),!0)
l.j(0,$.aC,L.e("#A3A3A3"),!0)
l.j(0,$.aD,L.e("#999999"),!0)
l.j(0,$.aB,L.e("#898989"),!0)
l.j(0,$.av,L.e("#EFEFEF"),!0)
l.j(0,$.au,L.e("#DBDBDB"),!0)
l.j(0,$.aF,L.e("#C6C6C6"),!0)
l.j(0,$.aE,L.e("#ADADAD"),!0)
l=new G.m_(f,h,q,o,n,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],m,0.5,7,new H.q(0,null,null,null,null,null,0,g),null,"","",!1,"Light",null,!0,!1,!1,!1,!0,1,l,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],i),H.a([],e),Q.G(null,null,d))
l.a8(7,"Light",!0,!1)
$.tK=l
l=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
l.j(0,$.ao,L.e("#000066"),!0)
l.j(0,$.aA,L.e("#0B1030"),!0)
l.j(0,$.az,L.e("#04091A"),!0)
l.j(0,$.ax,L.e("#CCC4B5"),!0)
l.j(0,$.aw,L.e("#A89F8D"),!0)
l.j(0,$.aC,L.e("#00164F"),!0)
l.j(0,$.aD,L.e("#00103C"),!0)
l.j(0,$.aB,L.e("#00071A"),!0)
l.j(0,$.av,L.e("#033476"),!0)
l.j(0,$.au,L.e("#02285B"),!0)
l.j(0,$.aF,L.e("#004CB2"),!0)
l.j(0,$.aE,L.e("#003E91"),!0)
m=P.f(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],s),t)
k=P.f(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],s),t)
n=P.f(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],s),t)
o=P.f(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],s),t)
q=P.f(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],s),t)
h=P.f(H.a([new E.fz(D.t0(),null,3,!0),new E.fz(D.t0(),null,-1,!0),new E.J($.c4,-1,!0),new E.J($.cf,0.2,!1)],i),j)
f=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
f.j(0,$.ao,L.e("#FF9B00"),!0)
f.j(0,$.aA,L.e("#FF9B00"),!0)
f.j(0,$.az,L.e("#FF8700"),!0)
f.j(0,$.ax,L.e("#7F7F7F"),!0)
f.j(0,$.aw,L.e("#727272"),!0)
f.j(0,$.aC,L.e("#A3A3A3"),!0)
f.j(0,$.aD,L.e("#999999"),!0)
f.j(0,$.aB,L.e("#898989"),!0)
f.j(0,$.av,L.e("#EFEFEF"),!0)
f.j(0,$.au,L.e("#DBDBDB"),!0)
f.j(0,$.aF,L.e("#C6C6C6"),!0)
f.j(0,$.aE,L.e("#ADADAD"),!0)
f=new Q.ox(l,m,k,n,o,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",q,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],h,0.5,8,new H.q(0,null,null,null,null,null,0,g),null,"","",!1,"Void",null,!0,!1,!1,!1,!0,1,f,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],i),H.a([],e),Q.G(null,null,d))
f.a8(8,"Void",!0,!1)
$.qL=f
f=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
f.j(0,$.ao,L.e("#9900cc"),!0)
f.j(0,$.aA,L.e("#974AA7"),!0)
f.j(0,$.az,L.e("#6B347D"),!0)
f.j(0,$.ax,L.e("#3D190A"),!0)
f.j(0,$.aw,L.e("#2C1207"),!0)
f.j(0,$.aC,L.e("#7C3FBA"),!0)
f.j(0,$.aD,L.e("#6D34A6"),!0)
f.j(0,$.aB,L.e("#592D86"),!0)
f.j(0,$.av,L.e("#381B76"),!0)
f.j(0,$.au,L.e("#1E0C47"),!0)
f.j(0,$.aF,L.e("#281D36"),!0)
f.j(0,$.aE,L.e("#1D1526"),!0)
h=P.f(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],s),t)
q=P.f(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],s),t)
o=P.f(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],s),t)
n=P.f(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],s),t)
k=P.f(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],s),t)
m=P.f(H.a([new E.J($.u,2,!0),new E.J($.aY,1,!0),new E.J($.aZ,-1,!0),new E.J($.cb,-1,!0),new E.J($.cf,0.01,!1)],i),j)
l=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
l.j(0,$.ao,L.e("#FF9B00"),!0)
l.j(0,$.aA,L.e("#FF9B00"),!0)
l.j(0,$.az,L.e("#FF8700"),!0)
l.j(0,$.ax,L.e("#7F7F7F"),!0)
l.j(0,$.aw,L.e("#727272"),!0)
l.j(0,$.aC,L.e("#A3A3A3"),!0)
l.j(0,$.aD,L.e("#999999"),!0)
l.j(0,$.aB,L.e("#898989"),!0)
l.j(0,$.av,L.e("#EFEFEF"),!0)
l.j(0,$.au,L.e("#DBDBDB"),!0)
l.j(0,$.aF,L.e("#C6C6C6"),!0)
l.j(0,$.aE,L.e("#ADADAD"),!0)
l=new E.n1(f,h,q,o,n," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",k,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],m,0.5,9,new H.q(0,null,null,null,null,null,0,g),null,"","",!1,"Rage",null,!0,!1,!1,!1,!0,1,l,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],i),H.a([],e),Q.G(null,null,d))
l.a8(9,"Rage",!0,!1)
$.xc=l
l=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
l.j(0,$.ao,L.e("#ffcc66"),!0)
l.j(0,$.aA,L.e("#FDF9EC"),!0)
l.j(0,$.az,L.e("#D6C794"),!0)
l.j(0,$.ax,L.e("#164524"),!0)
l.j(0,$.aw,L.e("#06280C"),!0)
l.j(0,$.aC,L.e("#FFC331"),!0)
l.j(0,$.aD,L.e("#F7BB2C"),!0)
l.j(0,$.aB,L.e("#DBA523"),!0)
l.j(0,$.av,L.e("#FFE094"),!0)
l.j(0,$.au,L.e("#E8C15E"),!0)
l.j(0,$.aF,L.e("#F6C54A"),!0)
l.j(0,$.aE,L.e("#EDAF0C"),!0)
m=P.f(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],s),t)
k=P.f(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],s),t)
n=P.f(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],s),t)
o=P.f(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],s),t)
q=P.f(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],s),t)
h=P.f(H.a([new E.J($.aZ,2,!0),new E.J($.bC,1,!0),new E.fz(D.t0(),null,-2,!0)],i),j)
f=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
f.j(0,$.ao,L.e("#FF9B00"),!0)
f.j(0,$.aA,L.e("#FF9B00"),!0)
f.j(0,$.az,L.e("#FF8700"),!0)
f.j(0,$.ax,L.e("#7F7F7F"),!0)
f.j(0,$.aw,L.e("#727272"),!0)
f.j(0,$.aC,L.e("#A3A3A3"),!0)
f.j(0,$.aD,L.e("#999999"),!0)
f.j(0,$.aB,L.e("#898989"),!0)
f.j(0,$.av,L.e("#EFEFEF"),!0)
f.j(0,$.au,L.e("#DBDBDB"),!0)
f.j(0,$.aF,L.e("#C6C6C6"),!0)
f.j(0,$.aE,L.e("#ADADAD"),!0)
f=new X.lp(l,m,k,n,o,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],q,h,0.5,10,new H.q(0,null,null,null,null,null,0,g),null,"","",!1,"Hope",null,!0,!1,!1,!1,!0,1,f,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],i),H.a([],e),Q.G(null,null,d))
f.a8(10,"Hope",!0,!1)
$.x6=f
f=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
f.j(0,$.ao,L.e("#494132"),!0)
f.j(0,$.aA,L.e("#76C34E"),!0)
f.j(0,$.az,L.e("#4F8234"),!0)
f.j(0,$.ax,L.e("#00164F"),!0)
f.j(0,$.aw,L.e("#00071A"),!0)
f.j(0,$.aC,L.e("#605542"),!0)
f.j(0,$.aD,L.e("#494132"),!0)
f.j(0,$.aB,L.e("#2D271E"),!0)
f.j(0,$.av,L.e("#CCC4B5"),!0)
f.j(0,$.au,L.e("#A89F8D"),!0)
f.j(0,$.aF,L.e("#A29989"),!0)
f.j(0,$.aE,L.e("#918673"),!0)
h=P.f(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],s),t)
q=P.f(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],s),t)
o=P.f(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],s),t)
n=P.f(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],s),t)
k=P.f(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],s),t)
m=P.f(H.a([new E.J($.an,2,!0),new E.J($.u,1,!0),new E.J($.df,-2,!0)],i),j)
l=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
l.j(0,$.ao,L.e("#FF9B00"),!0)
l.j(0,$.aA,L.e("#FF9B00"),!0)
l.j(0,$.az,L.e("#FF8700"),!0)
l.j(0,$.ax,L.e("#7F7F7F"),!0)
l.j(0,$.aw,L.e("#727272"),!0)
l.j(0,$.aC,L.e("#A3A3A3"),!0)
l.j(0,$.aD,L.e("#999999"),!0)
l.j(0,$.aB,L.e("#898989"),!0)
l.j(0,$.av,L.e("#EFEFEF"),!0)
l.j(0,$.au,L.e("#DBDBDB"),!0)
l.j(0,$.aF,L.e("#C6C6C6"),!0)
l.j(0,$.aE,L.e("#ADADAD"),!0)
l=new K.lZ(f,h,q,o,n,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],k,m,0.5,11,new H.q(0,null,null,null,null,null,0,g),null,"","",!1,"Life",null,!0,!1,!1,!1,!0,1,l,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],i),H.a([],e),Q.G(null,null,d))
l.a8(11,"Life",!0,!1)
$.x8=l
l=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
l.j(0,$.ao,L.e("#9630BF"),!0)
l.j(0,$.aA,L.e("#cc87e8"),!0)
l.j(0,$.az,L.e("#9545b7"),!0)
l.j(0,$.ax,L.e("#ae769b"),!0)
l.j(0,$.aw,L.e("#8f577c"),!0)
l.j(0,$.aC,L.e("#9630bf"),!0)
l.j(0,$.aD,L.e("#693773"),!0)
l.j(0,$.aB,L.e("#4c2154"),!0)
l.j(0,$.av,L.e("#fcf9bd"),!0)
l.j(0,$.au,L.e("#e0d29e"),!0)
l.j(0,$.aF,L.e("#bdb968"),!0)
l.j(0,$.aE,L.e("#ab9b55"),!0)
m=P.f(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],s),t)
k=P.f(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],s),t)
n=P.f(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],s),t)
o=P.f(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],s),t)
q=P.f(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],s),t)
h=P.f(H.a([new E.J($.df,3,!0),new E.J($.aZ,-2,!0)],i),j)
f=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
f.j(0,$.ao,L.e("#FF9B00"),!0)
f.j(0,$.aA,L.e("#FF9B00"),!0)
f.j(0,$.az,L.e("#FF8700"),!0)
f.j(0,$.ax,L.e("#7F7F7F"),!0)
f.j(0,$.aw,L.e("#727272"),!0)
f.j(0,$.aC,L.e("#A3A3A3"),!0)
f.j(0,$.aD,L.e("#999999"),!0)
f.j(0,$.aB,L.e("#898989"),!0)
f.j(0,$.av,L.e("#EFEFEF"),!0)
f.j(0,$.au,L.e("#DBDBDB"),!0)
f.j(0,$.aF,L.e("#C6C6C6"),!0)
f.j(0,$.aE,L.e("#ADADAD"),!0)
f=new Z.kt(l,m,k,n,o,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,q,h,0.5,12,new H.q(0,null,null,null,null,null,0,g),null,"","",!1,"Dream",null,!1,!1,!1,!1,!0,1,f,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],i),H.a([],e),Q.G(null,null,d))
f.a8(12,"Dream",!1,!1)
$.x2=f
$.jS=L.x0(255,"Null",!1,!1)
f=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
f.j(0,$.ao,L.e("#364447"),!0)
f.j(0,$.aA,L.e("#28517b"),!0)
f.j(0,$.az,L.e("#143D67"),!0)
f.j(0,$.ax,L.e("#E7D7A0"),!0)
f.j(0,$.aw,L.e("#D6A482"),!0)
f.j(0,$.aC,L.e("#A9D5DF"),!0)
f.j(0,$.aD,L.e("#95c1cb"),!0)
f.j(0,$.aB,L.e("#77a3ad"),!0)
f.j(0,$.av,L.e("#162E33"),!0)
f.j(0,$.au,L.e("#11292e"),!0)
f.j(0,$.aF,L.e("#021a1f"),!0)
f.j(0,$.aE,L.e("#021015"),!0)
h=P.f(H.a(["Waves","Ocean","Gyms","Pillars","Force","Rocks","Stability","Cliffs","Strength","Surf"],s),t)
q=P.f(H.a(["STANDALONE STRONGMAN","EMPOWERING EMPEROR","MINCEMIGHT"],s),t)
o=P.f(H.a(["Might","Minder","Mainsail","Mastiff","Morpher","Mortician"],s),t)
n=P.f(H.a(["Crash","MIGHT","Endure","Grip","Punch","Wave","Fist"],s),t)
k=P.f(H.a(["Might","Grendel","Heracles","Odysseus","Lancelot","Arthur","Beowulf","Achilles","Samson","Goliath"],s),t)
m=P.f(H.a(["surfing a tsunami wave that appeared just for the occasion","punching out a horde of underlings, one by one","following through with a plan after the circumstances have foiled it and succeeding anyway"],s),t)
l=P.f(H.a(["standing their ground in the face of a difficult foe","performing an unbelievably complex bike stunt","teaching consorts proper weightlifting technique","finally defeating the last of their planet's underlings"],s),t)
c=P.f(H.a(["training for training's sake","renovating a consort village to protect it from natural disasters","defeating powerful underlings by refusing to give in to the pain"],s),t)
b=P.f(H.a([new E.J($.u,2,!0),new E.J($.bu,-1,!0),new E.J($.aY,-1,!0),new E.J($.aZ,1,!0)],i),j)
a=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
a.j(0,$.ao,L.e("#FF9B00"),!0)
a.j(0,$.aA,L.e("#FF9B00"),!0)
a.j(0,$.az,L.e("#FF8700"),!0)
a.j(0,$.ax,L.e("#7F7F7F"),!0)
a.j(0,$.aw,L.e("#727272"),!0)
a.j(0,$.aC,L.e("#A3A3A3"),!0)
a.j(0,$.aD,L.e("#999999"),!0)
a.j(0,$.aB,L.e("#898989"),!0)
a.j(0,$.av,L.e("#EFEFEF"),!0)
a.j(0,$.au,L.e("#DBDBDB"),!0)
a.j(0,$.aF,L.e("#C6C6C6"),!0)
a.j(0,$.aE,L.e("#ADADAD"),!0)
a=new L.mk(f,h,q,o,n,"Mantra","A low note is hummed. It is the one Perseverance plays to keep itself going. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,m,l,c,b,0.5,13,new H.q(0,null,null,null,null,null,0,g),null,"","",!1,"Might",null,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],i),H.a([],e),Q.G(null,null,d))
a.a8(13,"Might",!1,!1)
$.x9=a
a=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
a.j(0,$.ao,L.e("#A4C1F4"),!0)
a.j(0,$.aA,L.e("#A4C1F4"),!0)
a.j(0,$.az,L.e("#95AFDD"),!0)
a.j(0,$.ax,L.e("#FFFFA5"),!0)
a.j(0,$.aw,L.e("#BEBE9E"),!0)
a.j(0,$.aC,L.e("#A4C1F4"),!0)
a.j(0,$.aD,L.e("#95AFDD"),!0)
a.j(0,$.aB,L.e("#88A0CC"),!0)
a.j(0,$.av,L.e("#D9D2E9"),!0)
a.j(0,$.au,L.e("#BBB5CA"),!0)
a.j(0,$.aF,L.e("#CCC5DB"),!0)
a.j(0,$.aE,L.e("#A49FB1"),!0)
b=P.f(H.a(["Mist","Steam","Substance","Vapor","Fog","Clouds","Rivers","Humidity"],s),t)
c=P.f(H.a(["HAZE HASTENER","MISTER MASTER","MANY-BODY"],s),t)
l=P.f(H.a(["Moper","Martyr","Manager","Morning","Matter"],s),t)
m=P.f(H.a(["Everything","Encompass","Halation","Mist","Universal","Steamy","Most"],s),t)
k=P.f(H.a([new E.J($.aY,2,!0),new E.J($.u,-1,!0)],i),j)
q=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
q.j(0,$.ao,L.e("#FF9B00"),!0)
q.j(0,$.aA,L.e("#FF9B00"),!0)
q.j(0,$.az,L.e("#FF8700"),!0)
q.j(0,$.ax,L.e("#7F7F7F"),!0)
q.j(0,$.aw,L.e("#727272"),!0)
q.j(0,$.aC,L.e("#A3A3A3"),!0)
q.j(0,$.aD,L.e("#999999"),!0)
q.j(0,$.aB,L.e("#898989"),!0)
q.j(0,$.av,L.e("#EFEFEF"),!0)
q.j(0,$.au,L.e("#DBDBDB"),!0)
q.j(0,$.aF,L.e("#C6C6C6"),!0)
q.j(0,$.aE,L.e("#ADADAD"),!0)
q=new S.mm(a,b,c,l,m,"Ensemble","A harmonized chord sounds. It is the one Everybody knows. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,0.5,14,new H.q(0,null,null,null,null,null,0,g),null,"","",!1,"Mist",null,!1,!1,!1,!1,!0,1,q,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],i),H.a([],e),Q.G(null,null,d))
q.a8(14,"Mist",!1,!1)
$.xb=q
q=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
q.j(0,$.ao,L.e("#00FFFF"),!0)
q.j(0,$.aA,L.e("#00ffff"),!0)
q.j(0,$.az,L.e("#009090"),!0)
q.j(0,$.ax,L.e("#FEFEFE"),!0)
q.j(0,$.aw,L.e("#707070"),!0)
q.j(0,$.aC,L.e("#0000FF"),!0)
q.j(0,$.aD,L.e("#0000b3"),!0)
q.j(0,$.aB,L.e("#000080"),!0)
q.j(0,$.av,L.e("#9900ff"),!0)
q.j(0,$.au,L.e("#5c0099"),!0)
q.j(0,$.aF,L.e("#00FF00"),!0)
q.j(0,$.aE,L.e("#008000"),!0)
k=P.f(H.a(["Neon","Headaches","Puddles","Drip","Mess","Ice cream","Sweets","Boredom"],s),t)
m=P.f(H.a(["PUDDLE PUMMELLER","FLOOD FINISHER","RAINBRO"],s),t)
l=P.f(H.a(["Rainer","Retriever","Rower","Redux","Rapport"],s),t)
c=P.f(H.a(["Chaos","disorder","puddle","Rain","error","color","Swirl","LOL"],s),t)
b=P.f(H.a([new E.J($.cb,-2,!0),new E.J($.aZ,-1,!0),new E.J($.bC,3,!0)],i),j)
o=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
o.j(0,$.ao,L.e("#FF9B00"),!0)
o.j(0,$.aA,L.e("#FF9B00"),!0)
o.j(0,$.az,L.e("#FF8700"),!0)
o.j(0,$.ax,L.e("#7F7F7F"),!0)
o.j(0,$.aw,L.e("#727272"),!0)
o.j(0,$.aC,L.e("#A3A3A3"),!0)
o.j(0,$.aD,L.e("#999999"),!0)
o.j(0,$.aB,L.e("#898989"),!0)
o.j(0,$.av,L.e("#EFEFEF"),!0)
o.j(0,$.au,L.e("#DBDBDB"),!0)
o.j(0,$.aF,L.e("#C6C6C6"),!0)
o.j(0,$.aE,L.e("#ADADAD"),!0)
o=new L.n2(q,k,m,l,c,"BLUH BLUH, Ask Cactus to write this. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",b,0.5,15,new H.q(0,null,null,null,null,null,0,g),null,"","",!1,"Rain",null,!1,!1,!1,!1,!0,1,o,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],i),H.a([],e),Q.G(null,null,d))
o.a8(15,"Rain",!1,!1)
$.xd=o
o=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
o.j(0,$.ao,L.e("#b88654"),!0)
o.j(0,$.aA,L.e("#783e05"),!0)
o.j(0,$.az,L.e("#4a0f00"),!0)
o.j(0,$.ax,L.e("#0b6c6e"),!0)
o.j(0,$.aw,L.e("#005d5e"),!0)
o.j(0,$.aC,L.e("#f5b06c"),!0)
o.j(0,$.aD,L.e("#e6a05e"),!0)
o.j(0,$.aB,L.e("#b87232"),!0)
o.j(0,$.av,L.e("#ffd966"),!0)
o.j(0,$.au,L.e("#d1ab3b"),!0)
o.j(0,$.aF,L.e("#7d5e00"),!0)
o.j(0,$.aE,L.e("#6e4f00"),!0)
b=P.f(H.a(["Lies","Beach","Shore","Secrets","Pirates","Suspicion","Corruption","[REDACTED]","Cake"],s),t)
c=P.f(H.a(["MR SANDMAN","CASTLE COORDINATOR","POKER FACADE"],s),t)
l=P.f(H.a(["Strategist","Slider","Sculpter","Scamp","Sleazebag"],s),t)
m=P.f(H.a(["FALSE","Wrong","Sand","Distraction","Ruse","Crumble","abscond","beach","grain","[Data Expunged]"],s),t)
k=P.f(H.a([new E.J($.cb,3,!0),new E.J($.aZ,-2,!0)],i),j)
q=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
q.j(0,$.ao,L.e("#FF9B00"),!0)
q.j(0,$.aA,L.e("#FF9B00"),!0)
q.j(0,$.az,L.e("#FF8700"),!0)
q.j(0,$.ax,L.e("#7F7F7F"),!0)
q.j(0,$.aw,L.e("#727272"),!0)
q.j(0,$.aC,L.e("#A3A3A3"),!0)
q.j(0,$.aD,L.e("#999999"),!0)
q.j(0,$.aB,L.e("#898989"),!0)
q.j(0,$.av,L.e("#EFEFEF"),!0)
q.j(0,$.au,L.e("#DBDBDB"),!0)
q.j(0,$.aF,L.e("#C6C6C6"),!0)
q.j(0,$.aE,L.e("#ADADAD"),!0)
q=new Y.ni(o,b,c,l,m," BLUH BLUH, ask Cactus to write this. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,0.5,16,new H.q(0,null,null,null,null,null,0,g),null,"","",!1,"Sand",null,!1,!1,!1,!1,!0,1,q,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],i),H.a([],e),Q.G(null,null,d))
q.a8(16,"Sand",!1,!1)
$.xf=q
q=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
q.j(0,$.ao,L.e("#ff9933"),!0)
q.j(0,$.aA,L.e("#ffffff"),!0)
q.j(0,$.az,L.e("#999999"),!0)
q.j(0,$.ax,L.e("#ffff00"),!0)
q.j(0,$.aw,L.e("#8f8f00"),!0)
q.j(0,$.aC,L.e("#d1e0e3"),!0)
q.j(0,$.aD,L.e("#c5d1d4"),!0)
q.j(0,$.aB,L.e("#b7c2c4"),!0)
q.j(0,$.av,L.e("#00ffff"),!0)
q.j(0,$.au,L.e("#009999"),!0)
q.j(0,$.aF,L.e("#b5b5b5"),!0)
q.j(0,$.aE,L.e("#858585"),!0)
o=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
o.j(0,$.ao,L.e("#FF9B00"),!0)
o.j(0,$.aA,L.e("#FF9B00"),!0)
o.j(0,$.az,L.e("#FF8700"),!0)
o.j(0,$.ax,L.e("#7F7F7F"),!0)
o.j(0,$.aw,L.e("#727272"),!0)
o.j(0,$.aC,L.e("#A3A3A3"),!0)
o.j(0,$.aD,L.e("#999999"),!0)
o.j(0,$.aB,L.e("#898989"),!0)
o.j(0,$.av,L.e("#EFEFEF"),!0)
o.j(0,$.au,L.e("#DBDBDB"),!0)
o.j(0,$.aF,L.e("#C6C6C6"),!0)
o.j(0,$.aE,L.e("#ADADAD"),!0)
o=new L.nu(q,0.5,17,new H.q(0,null,null,null,null,null,0,g),null,"","",!1,"Sky",null,!1,!1,!1,!1,!0,1,o,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],i),H.a([],e),Q.G(null,null,d))
o.a8(17,"Sky",!1,!1)
$.xg=o
o=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
o.j(0,$.ao,L.e("#10dede"),!0)
o.j(0,$.aA,L.e("#00ffff"),!0)
o.j(0,$.az,L.e("#00d1d1"),!0)
o.j(0,$.ax,L.e("#ff0000"),!0)
o.j(0,$.aw,L.e("#d10000"),!0)
o.j(0,$.aC,L.e("#4985e6"),!0)
o.j(0,$.aD,L.e("#3a76d6"),!0)
o.j(0,$.aB,L.e("#2d6ac4"),!0)
o.j(0,$.av,L.e("#331c73"),!0)
o.j(0,$.au,L.e("#050045"),!0)
o.j(0,$.aF,L.e("#8d7cc2"),!0)
o.j(0,$.aE,L.e("#7c6db3"),!0)
q=P.f(H.a(["Gel","Ice","Tape","Poetry","Caucophony"],s),t)
n=P.f(H.a(["LIL LYRICIST","ICE CREAMER","COOLER THAN BEING COOL"],s),t)
m=P.f(H.a(["Rhymer","Rapper","Rental","Redux","Rave","Reason"],s),t)
l=P.f(H.a(["Vaporwave","Chill","Ice","Rhyme","Slow"],s),t)
k=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
k.j(0,$.ao,L.e("#FF9B00"),!0)
k.j(0,$.aA,L.e("#FF9B00"),!0)
k.j(0,$.az,L.e("#FF8700"),!0)
k.j(0,$.ax,L.e("#7F7F7F"),!0)
k.j(0,$.aw,L.e("#727272"),!0)
k.j(0,$.aC,L.e("#A3A3A3"),!0)
k.j(0,$.aD,L.e("#999999"),!0)
k.j(0,$.aB,L.e("#898989"),!0)
k.j(0,$.av,L.e("#EFEFEF"),!0)
k.j(0,$.au,L.e("#DBDBDB"),!0)
k.j(0,$.aF,L.e("#C6C6C6"),!0)
k.j(0,$.aE,L.e("#ADADAD"),!0)
k=new Z.na(o,q,n,m,l,"Rap","BLUH BLUH, Ask Cactus to write this. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",0.5,18,new H.q(0,null,null,null,null,null,0,g),null,"","",!1,"Rhyme",null,!1,!1,!1,!1,!0,1,k,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],i),H.a([],e),Q.G(null,null,d))
k.a8(18,"Rhyme",!1,!1)
$.xe=k
k=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
k.j(0,$.ao,L.e("#c42eff"),!0)
k.j(0,$.aA,L.e("a703ff"),!0)
k.j(0,$.az,L.e("#9800f0"),!0)
k.j(0,$.ax,L.e("#fcf9bd"),!0)
k.j(0,$.aw,L.e("#e0d29e"),!0)
k.j(0,$.aC,L.e("#9900ff"),!0)
k.j(0,$.aD,L.e("#8800f0"),!0)
k.j(0,$.aB,L.e("#7800e0"),!0)
k.j(0,$.av,L.e("#b3a7d4"),!0)
k.j(0,$.au,L.e("#a599c4"),!0)
k.j(0,$.aF,L.e("#a64e78"),!0)
k.j(0,$.aE,L.e("#963f66"),!0)
q=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
q.j(0,$.ao,L.e("#FF9B00"),!0)
q.j(0,$.aA,L.e("#FF9B00"),!0)
q.j(0,$.az,L.e("#FF8700"),!0)
q.j(0,$.ax,L.e("#7F7F7F"),!0)
q.j(0,$.aw,L.e("#727272"),!0)
q.j(0,$.aC,L.e("#A3A3A3"),!0)
q.j(0,$.aD,L.e("#999999"),!0)
q.j(0,$.aB,L.e("#898989"),!0)
q.j(0,$.av,L.e("#EFEFEF"),!0)
q.j(0,$.au,L.e("#DBDBDB"),!0)
q.j(0,$.aF,L.e("#C6C6C6"),!0)
q.j(0,$.aE,L.e("#ADADAD"),!0)
q=new Q.lX(k,0.5,19,new H.q(0,null,null,null,null,null,0,g),null,"","",!1,"Law",null,!1,!1,!1,!1,!0,1,q,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],i),H.a([],e),Q.G(null,null,d))
q.a8(19,"Law",!1,!1)
$.x7=q
q=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
q.j(0,$.ao,L.e("#f0b000"),!0)
q.j(0,$.aA,L.e("#ffd966"),!0)
q.j(0,$.az,L.e("#f0ca59"),!0)
q.j(0,$.ax,L.e("#ffff00"),!0)
q.j(0,$.aw,L.e("#8f8f00"),!0)
q.j(0,$.aC,L.e("#92c27c"),!0)
q.j(0,$.aD,L.e("#83b36d"),!0)
q.j(0,$.aB,L.e("#74a35f"),!0)
q.j(0,$.av,L.e("#39751d"),!0)
q.j(0,$.au,L.e("#2a630e"),!0)
q.j(0,$.aF,L.e("#bd8e00"),!0)
q.j(0,$.aE,L.e("#ad7c00"),!0)
o=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
o.j(0,$.ao,L.e("#FF9B00"),!0)
o.j(0,$.aA,L.e("#FF9B00"),!0)
o.j(0,$.az,L.e("#FF8700"),!0)
o.j(0,$.ax,L.e("#7F7F7F"),!0)
o.j(0,$.aw,L.e("#727272"),!0)
o.j(0,$.aC,L.e("#A3A3A3"),!0)
o.j(0,$.aD,L.e("#999999"),!0)
o.j(0,$.aB,L.e("#898989"),!0)
o.j(0,$.av,L.e("#EFEFEF"),!0)
o.j(0,$.au,L.e("#DBDBDB"),!0)
o.j(0,$.aF,L.e("#C6C6C6"),!0)
o.j(0,$.aE,L.e("#ADADAD"),!0)
o=new L.kT(q,0.5,20,new H.q(0,null,null,null,null,null,0,g),null,"","",!1,"Fate",null,!1,!1,!1,!1,!0,1,o,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],i),H.a([],e),Q.G(null,null,d))
o.a8(20,"Fate",!1,!1)
$.x3=o
o=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
o.j(0,$.ao,L.e("#b2e3eb"),!0)
o.j(0,$.aA,L.e("#fefefe"),!0)
o.j(0,$.az,L.e("#dfdfdf"),!0)
o.j(0,$.ax,L.e("#00ffff"),!0)
o.j(0,$.aw,L.e("#009090"),!0)
o.j(0,$.aC,L.e("#999999"),!0)
o.j(0,$.aD,L.e("#8a8a8a"),!0)
o.j(0,$.aB,L.e("#7a7a7a"),!0)
o.j(0,$.av,L.e("#d0e2f2"),!0)
o.j(0,$.au,L.e("#c3d4e3"),!0)
o.j(0,$.aF,L.e("#b2e3eb"),!0)
o.j(0,$.aE,L.e("#a4d4db"),!0)
q=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
q.j(0,$.ao,L.e("#FF9B00"),!0)
q.j(0,$.aA,L.e("#FF9B00"),!0)
q.j(0,$.az,L.e("#FF8700"),!0)
q.j(0,$.ax,L.e("#7F7F7F"),!0)
q.j(0,$.aw,L.e("#727272"),!0)
q.j(0,$.aC,L.e("#A3A3A3"),!0)
q.j(0,$.aD,L.e("#999999"),!0)
q.j(0,$.aB,L.e("#898989"),!0)
q.j(0,$.av,L.e("#EFEFEF"),!0)
q.j(0,$.au,L.e("#DBDBDB"),!0)
q.j(0,$.aF,L.e("#C6C6C6"),!0)
q.j(0,$.aE,L.e("#ADADAD"),!0)
q=new O.nw(2,o,0.5,21,new H.q(0,null,null,null,null,null,0,g),null,"","",!1,"Snow",null,!1,!1,!1,!1,!0,1,q,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],i),H.a([],e),Q.G(null,null,d))
q.a8(21,"Snow",!1,!1)
$.xh=q
q=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
q.j(0,$.ao,L.e("#ee0000"),!0)
q.j(0,$.aA,L.e("#ff0000"),!0)
q.j(0,$.az,L.e("#d10000"),!0)
q.j(0,$.ax,L.e("#00ffff"),!0)
q.j(0,$.aw,L.e("#00d1d1"),!0)
q.j(0,$.aC,L.e("#e68f39"),!0)
q.j(0,$.aD,L.e("#d67e2b"),!0)
q.j(0,$.aB,L.e("#c46b1d"),!0)
q.j(0,$.av,L.e("#e65c00"),!0)
q.j(0,$.au,L.e("#b82e00"),!0)
q.j(0,$.aF,L.e("#ffd966"),!0)
q.j(0,$.aE,L.e("#d1ab3b"),!0)
o=P.f(H.a(["Fire","Track","Mercury","Heat","Burns","Mixtapes","Spaghetti"],s),t)
n=P.f(H.a(["BURN WARDEN","FIRESTARTER","RAP GOD"],s),t)
m=P.f(H.a(["Flamer","Florist","Friar","Foodie"],s),t)
l=P.f(H.a(["Nightcore","Flow","Sick","Fire","Fast","Sonic","burning","speed"],s),t)
k=P.f(H.a([new E.J($.aY,2,!0),new E.J($.u,1,!0),new E.J($.cb,-2,!0)],i),j)
h=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
h.j(0,$.ao,L.e("#FF9B00"),!0)
h.j(0,$.aA,L.e("#FF9B00"),!0)
h.j(0,$.az,L.e("#FF8700"),!0)
h.j(0,$.ax,L.e("#7F7F7F"),!0)
h.j(0,$.aw,L.e("#727272"),!0)
h.j(0,$.aC,L.e("#A3A3A3"),!0)
h.j(0,$.aD,L.e("#999999"),!0)
h.j(0,$.aB,L.e("#898989"),!0)
h.j(0,$.av,L.e("#EFEFEF"),!0)
h.j(0,$.au,L.e("#DBDBDB"),!0)
h.j(0,$.aF,L.e("#C6C6C6"),!0)
h.j(0,$.aE,L.e("#ADADAD"),!0)
h=new O.lf(q,o,n,m,l,"Mixtape "," An ill beat is laid down. It's the one that is dropped when the Pimp is in the crib. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,0.5,22,new H.q(0,null,null,null,null,null,0,g),null,"","",!1,"Flow",null,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],i),H.a([],e),Q.G(null,null,d))
h.a8(22,"Flow",!1,!1)
$.x4=h
h=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
h.j(0,$.ao,L.e("#ffff33"),!0)
h.j(0,$.aA,L.e("#ffff00"),!0)
h.j(0,$.az,L.e("#d1d100"),!0)
h.j(0,$.ax,L.e("#00ffff"),!0)
h.j(0,$.aw,L.e("#009999"),!0)
h.j(0,$.aC,L.e("#0c5494"),!0)
h.j(0,$.aD,L.e("#004785"),!0)
h.j(0,$.aB,L.e("#003b75"),!0)
h.j(0,$.av,L.e("#20124d"),!0)
h.j(0,$.au,L.e("#11033d"),!0)
h.j(0,$.aF,L.e("#0c323b"),!0)
h.j(0,$.aE,L.e("#00232b"),!0)
r=new L.aj(P.n(null,null,null,t,p),P.n(null,null,null,r,p),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
r.j(0,$.ao,L.e("#FF9B00"),!0)
r.j(0,$.aA,L.e("#FF9B00"),!0)
r.j(0,$.az,L.e("#FF8700"),!0)
r.j(0,$.ax,L.e("#7F7F7F"),!0)
r.j(0,$.aw,L.e("#727272"),!0)
r.j(0,$.aC,L.e("#A3A3A3"),!0)
r.j(0,$.aD,L.e("#999999"),!0)
r.j(0,$.aB,L.e("#898989"),!0)
r.j(0,$.av,L.e("#EFEFEF"),!0)
r.j(0,$.au,L.e("#DBDBDB"),!0)
r.j(0,$.aF,L.e("#C6C6C6"),!0)
r.j(0,$.aE,L.e("#ADADAD"),!0)
e=new U.nF(h,0.5,23,new H.q(0,null,null,null,null,null,0,g),null,"","",!1,"Stars",null,!1,!1,!1,!1,!0,1,r,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],i),H.a([],e),Q.G(null,null,d))
e.a8(23,"Stars",!1,!1)
$.xi=e
e=P.f(H.a([new E.J($.aZ,1,!0),new E.J($.bC,1,!0)],i),j)
t=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],s)
r=H.a(["Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass"],s)
h=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],s)
q=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],s)
p=H.a(["nobody"],s)
o=P.f(H.a([],i),j)
n=H.a(["Nobody"],s)
m=H.a(["Nobody"],s)
t=new F.mo(e,t,r,h,q,!1,p,o,n,m,1,new H.q(0,null,null,null,null,null,0,g),["NONE"],Q.G(null,null,d),"loud","musical","Music")
t.F()
t.D()
B.cJ(t)
$.y_=t
t=P.f(H.a([new E.J($.bu,-2,!0)],i),j)
r=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],s)
q=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist"],s)
p=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],s)
o=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],s)
n=H.a(["nobody"],s)
m=P.f(H.a([],i),j)
l=H.a(["Nobody"],s)
k=H.a(["Nobody"],s)
t=new S.jP(t,r,q,p,o,!1,n,m,l,k,13,new H.q(0,null,null,null,null,null,0,g),["NONE"],Q.G(null,null,d),"nerdy","smart","Academic")
t.F()
t.D()
B.cJ(t)
$.xT=t
t=P.f(H.a([new E.J($.u,2,!0)],i),j)
r=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],s)
q=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler"],s)
p=H.a(["MUSCLES HOARDER","BODY BOOSTER"],s)
o=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],s)
n=H.a(["nobody"],s)
m=P.f(H.a([],i),j)
l=H.a(["Nobody"],s)
k=H.a(["Nobody"],s)
t=new M.k1(t,r,q,p,o,!1,n,m,l,k,4,new H.q(0,null,null,null,null,null,0,g),["NONE"],Q.G(null,null,d),"dumb","athletic","Athletic")
t.F()
t.D()
B.cJ(t)
$.xU=t
t=P.f(H.a([new E.J($.c4,-1,!0),new E.J($.bC,1,!0)],i),j)
r=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],s)
q=H.a(["Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor"],s)
p=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],s)
o=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],s)
n=H.a(["nobody"],s)
m=P.f(H.a([],i),j)
l=H.a(["Nobody"],s)
k=H.a(["Nobody"],s)
t=new A.ki(t,r,q,p,o,!1,n,m,l,k,0,new H.q(0,null,null,null,null,null,0,g),["NONE"],Q.G(null,null,d),"dorky","funny","Comedy")
t.F()
t.D()
B.cJ(t)
$.xV=t
t=P.f(H.a([new E.J($.aZ,-1,!0),new E.J($.an,-1,!0)],i),j)
r=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],s)
q=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business"],s)
p=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],s)
o=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],s)
n=H.a(["nobody"],s)
m=P.f(H.a([],i),j)
l=H.a(["Nobody"],s)
k=H.a(["Nobody"],s)
t=new M.kl(t,r,q,p,o,!1,n,m,l,k,2,new H.q(0,null,null,null,null,null,0,g),["NONE"],Q.G(null,null,d),"pretentious","cultured","Culture")
t.F()
t.D()
B.cJ(t)
$.xW=t
t=P.f(H.a([new E.J($.aZ,1,!0),new E.J($.cb,1,!0)],i),j)
r=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],s)
q=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer"],s)
p=H.a(["BATTERBRAT","GRITTY GUARDIAN"],s)
o=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],s)
n=H.a(["nobody"],s)
m=P.f(H.a([],i),j)
l=H.a(["Nobody"],s)
k=H.a(["Nobody"],s)
t=new V.kq(t,r,q,p,o,!1,n,m,l,k,8,new H.q(0,null,null,null,null,null,0,g),["NONE"],Q.G(null,null,d),"boring","domestic","Domestic")
t.F()
t.D()
B.cJ(t)
$.xX=t
t=P.f(H.a([new E.J($.bC,1,!0),new E.J($.df,1,!0)],i),j)
r=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],s)
q=H.a(["Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart"],s)
p=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],s)
o=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],s)
n=H.a(["nobody"],s)
m=P.f(H.a([],i),j)
l=H.a(["Nobody"],s)
k=H.a(["Nobody"],s)
t=new U.kS(t,r,q,p,o,!1,n,m,l,k,7,new H.q(0,null,null,null,null,null,0,g),["NONE"],Q.G(null,null,d),"whimpy","imaginative","Fantasy")
t.F()
t.D()
B.cJ(t)
$.xY=t
t=P.f(H.a([new E.J($.u,1,!0),new E.J($.an,1,!0)],i),j)
r=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],s)
q=H.a(["Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel"],s)
p=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],s)
o=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],s)
n=H.a(["nobody"],s)
m=P.f(H.a([],i),j)
l=H.a(["Nobody"],s)
k=H.a(["Nobody"],s)
t=new N.lP(t,r,q,p,o,!1,n,m,l,k,6,new H.q(0,null,null,null,null,null,0,g),["NONE"],Q.G(null,null,d),"harsh","fair-minded","Justice")
t.F()
t.D()
B.cJ(t)
$.xZ=t
t=P.f(H.a([new E.J($.aY,2,!0)],i),j)
r=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],s)
q=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent"],s)
p=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],s)
o=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],s)
n=H.a(["nobody"],s)
m=P.f(H.a([],i),j)
l=H.a(["Nobody"],s)
k=H.a(["Nobody"],s)
t=new G.mX(t,r,q,p,o,!1,n,m,l,k,9,new H.q(0,null,null,null,null,null,0,g),["NONE"],Q.G(null,null,d),"frivolous","geeky","PopCulture")
t.F()
t.D()
B.cJ(t)
$.y0=t
t=P.f(H.a([new E.J($.cb,2,!0)],i),j)
r=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],s)
q=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team"],s)
p=H.a(["QUESTING CUPID","ROMANCE EXPERT"],s)
o=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],s)
n=H.a(["nobody"],s)
m=P.f(H.a([],i),j)
l=H.a(["Nobody"],s)
k=H.a(["Nobody"],s)
t=new Q.nc(t,r,q,p,o,!1,n,m,l,k,12,new H.q(0,null,null,null,null,null,0,g),["NONE"],Q.G(null,null,d),"obsessive","romantic","Romantic")
t.F()
t.D()
B.cJ(t)
$.y1=t
t=P.f(H.a([new E.J($.aZ,2,!0)],i),j)
r=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],s)
q=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally"],s)
p=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],s)
o=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],s)
n=H.a(["nobody"],s)
m=P.f(H.a([],i),j)
l=H.a(["Nobody"],s)
k=H.a(["Nobody"],s)
t=new N.nx(t,r,q,p,o,!1,n,m,l,k,11,new H.q(0,null,null,null,null,null,0,g),["NONE"],Q.G(null,null,d),"shallow","extroverted","Social")
t.F()
t.D()
B.cJ(t)
$.y2=t
t=P.f(H.a([new E.J($.cb,-1,!0),new E.J($.aZ,-1,!0)],i),j)
r=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],s)
q=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod"],s)
p=H.a(["ENEMY #1","JERKWAD JOURNEYER"],s)
o=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],s)
n=H.a(["nobody"],s)
m=P.f(H.a([],i),j)
l=H.a(["Nobody"],s)
k=H.a(["Nobody"],s)
t=new V.oa(t,r,q,p,o,!1,n,m,l,k,5,new H.q(0,null,null,null,null,null,0,g),["NONE"],Q.G(null,null,d),"terrible","honest","Terrible")
t.F()
t.D()
B.cJ(t)
$.y4=t
t=P.f(H.a([new E.J($.bu,2,!0)],i),j)
r=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],s)
q=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis"],s)
p=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],s)
o=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],s)
n=H.a(["nobody"],s)
m=P.f(H.a([],i),j)
l=H.a(["Nobody"],s)
k=H.a(["Nobody"],s)
t=new F.oH(t,r,q,p,o,!1,n,m,l,k,3,new H.q(0,null,null,null,null,null,0,g),["NONE"],Q.G(null,null,d),"wordy","lettered","Writing")
t.F()
t.D()
B.cJ(t)
$.y5=t
t=P.f(H.a([new E.J($.df,2,!0)],i),j)
r=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],s)
q=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data"],s)
p=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],s)
o=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],s)
n=H.a(["nobody"],s)
m=P.f(H.a([],i),j)
l=H.a(["Nobody"],s)
k=H.a(["Nobody"],s)
t=new D.o9(t,r,q,p,o,!1,n,m,l,k,10,new H.q(0,null,null,null,null,null,0,g),["NONE"],Q.G(null,null,d),"awkward","techy","Technology")
t.F()
t.D()
B.cJ(t)
$.y3=t
t=H.a(["nobody"],s)
j=P.f(H.a([],i),j)
i=H.a(["Nobody"],s)
s=H.a(["Nobody"],s)
t=new B.en(!0,t,j,i,s,-13,new H.q(0,null,null,null,null,null,0,g),["NONE"],Q.G(null,null,d),"","","Null")
t.F()
t.D()
B.cJ(t)
$.iI=t
A.Db()},
Db:function(){var t,s
if($.uX)return
$.uX=!0
t=[P.v]
s=new Y.oc(H.a([],t))
$.ra=s
Z.dr(s,"txt",null)
Z.dr($.ra,"vert","x-shader/x-vertex")
Z.dr($.ra,"frag","x-shader/x-fragment")
$.xP=new Y.kc(H.a([],t))
s=new B.oK(H.a([],t))
$.uc=s
Z.dr(s,"zip",null)
Z.dr($.uc,"bundle",null)
s=new Q.mW(H.a([],t))
$.ub=s
Z.dr(s,"png",null)
Z.dr($.ub,"jpg","image/jpeg")
s=new M.nE(H.a([],t))
$.xQ=s
Z.dr(s,"psprite",null)
t=new V.lg(H.a([],t))
$.r9=t
Z.dr(t,"ttf",null)
Z.dr($.r9,"otf",null)
Z.dr($.r9,"woff",null)}},V={kq:function kq(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},lg:function lg(a){this.a=a},ml:function ml(rx,ry,x1,x2,y1,y2,t,C,E,M,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.C=C
_.E=E
_.M=M
_.G=G
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
_.r2=r2},mM:function mM(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},oa:function oa(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
Fu:function(a,b){if($.fs)return V.hK(a)
V.Fs(a)
$.wl=b
return},
Fs:function(a){if($.fs)return V.hK(a)
V.Fv(a)
V.Ft(a)
return},
hK:function(a){var t=document
if(t.querySelector("#loading_stats")!=null)t.querySelector("#loading_stats").textContent="Images Loaded: "+$.qi
t=$.qi
if(t!==0&&$.tp===t||$.fs){if(a.length!==0){t=$.wl
if(t!=null)return t.$0()
if(a==="oc")throw H.m("not supported yet.")
else if(a==="ghosts")throw H.m("deprecated, dunkass")
return}$.E8.kT()}return},
I:function(a,b){var t,s
if($.fs)return V.hK(b)
$.tp=$.tp+1
t=document.createElement("img")
s=W.W
W.dR(t,"load",new V.qs(a,b),!1,s)
W.dR(t,"error",new V.qt(t),!1,s)
t.src="images/"+a},
Fv:function(a){var t
if($.fs)return V.hK(a)
V.I("Credits/recursiveSlacker.png",a)
if($.Fa){V.I("/Bodies/coolk1dlogo.png",a)
V.I("/Bodies/coolk1dsword.png",a)
V.I("/Bodies/coolk1dshades.png",a)}if($.wp)V.I("/Bodies/pen15.png",a)
if($.wg){V.I("/Bodies/face1.png",a)
V.I("/Bodies/face2.png",a)
V.I("/Bodies/face3.png",a)
V.I("/Bodies/face4.png",a)}V.I("charSheet.png",a)
V.I("Rewards/no_reward.png",a)
V.I("Rewards/holyAlchemy.png",a)
V.I("Rewards/sweetFrog.png",a)
V.I("Rewards/bitterFrog.png",a)
V.I("Rewards/holyShitFrogs.png",a)
V.I("Rewards/sweetLoot.png",a)
V.I("Rewards/sweetGrist.png",a)
V.I("Rewards/sweetTreasure.png",a)
V.I("Rewards/fraymotifBG.png",a)
V.I("Rewards/sweetBoonies.png",a)
V.I("Rewards/ohShit.png",a)
V.I("Rewards/sweetClock.png",a)
V.I("Rewards/battlefield.png",a)
V.I("/Bodies/cod.png",a)
V.I("/Rewards/sweetCod.png",a)
V.I("jr.png",a)
V.I("kr_chat.png",a)
V.I("drain_lightning.png",a)
V.I("drain_lightning_long.png",a)
V.I("drain_halo.png",a)
V.I("afterlife_life.png",a)
V.I("afterlife_doom.png",a)
V.I("doom_res.png",a)
V.I("life_res.png",a)
V.I("stab.png",a)
V.I("denizoned.png",a)
V.I("sceptre.png",a)
V.I("rainbow.png",a)
V.I("ghostGradient.png",a)
V.I("halo.png",a)
V.I("gears.png",a)
V.I("mind_forehead.png",a)
V.I("blood_forehead.png",a)
V.I("rage_forehead.png",a)
V.I("heart_forehead.png",a)
V.I("ab.png",a)
V.I("shogun.png",a)
V.I("grimdark.png",a)
V.I("squiddles_chaos.png",a)
V.I("fin1.png",a)
V.I("fin2.png",a)
V.I("echeladder.png",a)
V.I("godtierlevelup.png",a)
V.I("cataclysm.png",a)
V.I("pesterchum.png",a)
V.I("blood_puddle.png",a)
V.I("scratch_face.png",a)
V.I("robo_face.png",a)
V.I("calm_scratch_face.png",a)
V.I("Prospit.png",a)
V.I("Derse.png",a)
V.I("bloody_face.png",a)
V.I("Moirail.png",a)
V.I("Matesprit.png",a)
V.I("horrorterror.png",a)
V.I("dreambubbles.png",a)
V.I("Auspisticism.png",a)
V.I("Kismesis.png",a)
V.I("discuss_romance.png",a)
V.I("discuss_ashenmance.png",a)
V.I("discuss_palemance.png",a)
V.I("discuss_hatemance.png",a)
V.I("discuss_breakup.png",a)
V.I("discuss_sburb.png",a)
V.I("discuss_jack.png",a)
V.I("discuss_murder.png",a)
V.I("discuss_raps.png",a)
for(t=1;t<4;++t)V.I("Bodies/baby"+t+".png",a)
for(t=1;t<4;++t)V.I("Bodies/grub"+t+".png",a)
return},
Ft:function(a){var t,s,r
if($.fs)return V.hK(a)
t=$.mU
s=$.mV
for(r=1;r<=20;++r){V.I("Bodies/reg"+r+".png",a)
V.I("Bodies/god"+r+".png",a)
V.I("Bodies/dream"+r+".png",a)
V.I("Bodies/cowl"+r+".png",a)
if($.jG)V.I("Bodies/egg"+r+".png",a)}V.I("Null.png",a)
V.I("Bodies/reg256.png",a)
V.I("Bodies/dream256.png",a)
V.I("Bodies/god256.png",a)
V.I("Bodies/cowl256.png",a)
for(r=1;r<=t;++r){V.I("Hair/hair_back"+r+".png",a)
V.I("Hair/hair"+r+".png",a)}for(r=0;r<13;++r)V.I("Wings/wing"+r+".png",a)
V.I("Blood.png",a)
V.I("Mind.png",a)
V.I("Rage.png",a)
V.I("Time.png",a)
V.I("Void.png",a)
V.I("Heart.png",a)
V.I("Breath.png",a)
V.I("Dream.png",a)
V.I("Light.png",a)
V.I("Space.png",a)
V.I("Hope.png",a)
V.I("Life.png",a)
V.I("Doom.png",a)
V.I("Might.png",a)
V.I("Mist.png",a)
V.I("Sand.png",a)
V.I("Fate.png",a)
V.I("Law.png",a)
V.I("Rhyme.png",a)
V.I("Flow.png",a)
V.I("Rain.png",a)
V.I("Snow.png",a)
V.I("Stars.png",a)
V.I("Sky.png",a)
V.I("Hair/hair_back254.png",a)
V.I("Hair/hair254.png",a)
for(r=1;r<=s;++r){V.I("Horns/left"+r+".png",a)
V.I("Horns/right"+r+".png",a)}for(r=255;r>251;r+=-1){V.I("Horns/left"+r+".png",a)
V.I("Horns/right"+r+".png",a)}return},
qs:function qs(a,b){this.a=a
this.b=b},
qt:function qt(a){this.a=a}},U={kr:function kr(rx,ry,x1,x2,y1,y2,t,C,E,M,G,O,u,aw,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.C=C
_.E=E
_.M=M
_.G=G
_.O=O
_.u=u
_.aw=aw
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
_.r2=r2},kS:function kS(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},m7:function m7(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},c:function c(a){this.a=a},ab:function ab(b,c,a){this.b=b
this.c=c
this.a=a},ah:function ah(x,a,b,c,d,e,f,r){var _=this
_.x=x
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},nB:function nB(a){this.a=a},nF:function nF(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},oe:function oe(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id}},Q={eO:function eO(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},lm:function lm(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},kw:function kw(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},lu:function lu(){},mW:function mW(a){this.a=a},lX:function lX(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},nc:function nc(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},ox:function ox(rx,ry,x1,x2,y1,y2,t,C,E,M,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.C=C
_.E=E
_.M=M
_.G=G
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
v3:function(a,b,c,d,e,f){var t=[Q.b6]
t=new Q.b6(null,null,!1,null,0,0,0,0,!1,null,!0,!0,!0,!0,null,null,0,H.a([],t),!1,!1,[],!1,null,b,null,0,0,!1,null,null,null,c,null,null,null,null,null,d,!1,null,-1,!1,null,null,null,!0,!1,"#ff0000",null,null,null,null,f,!0,!1,!1,!1,0,0,0,!1,0,!1,!1,!1,null,C.c,a,"","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],[X.cZ]),!1,H.a([],[Z.cI]),!1,H.a([],[N.cD]),0,H.a([],[E.J]),null,null,!1,H.a([],t),"",null,null)
t.n("",a)
t.hU(a,b,c,d,e,f)
return t},
b6:function b6(x1,x2,y1,y2,t,C,E,M,G,O,u,aw,be,aS,b2,av,bS,bT,bU,bV,bW,bX,bY,Y,fl,d0,d1,d2,ca,d3,d4,W,aB,ax,ay,az,aT,bJ,e_,bZ,cb,b3,cc,bm,aJ,cd,aa,Z,bw,bn,c_,b4,ce,e0,bo,d5,d6,d7,bK,bp,e1,cv,e2,e3,e4,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,a$){var _=this
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.C=C
_.E=E
_.M=M
_.G=G
_.O=O
_.u=u
_.aw=aw
_.be=be
_.aS=aS
_.b2=b2
_.av=av
_.bS=bS
_.bT=bT
_.bU=bU
_.bV=bV
_.bW=bW
_.bX=bX
_.bY=bY
_.Y=Y
_.fl=fl
_.d0=d0
_.d1=d1
_.d2=d2
_.ca=ca
_.d3=d3
_.d4=d4
_.W=W
_.aB=aB
_.ax=ax
_.ay=ay
_.az=az
_.aT=aT
_.bJ=bJ
_.e_=e_
_.bZ=bZ
_.cb=cb
_.b3=b3
_.cc=cc
_.bm=bm
_.aJ=aJ
_.cd=cd
_.aa=aa
_.Z=Z
_.bw=bw
_.bn=bn
_.c_=c_
_.b4=b4
_.ce=ce
_.e0=e0
_.bo=bo
_.d5=d5
_.d6=d6
_.d7=d7
_.bK=bK
_.bp=bp
_.e1=e1
_.cv=cv
_.e2=e2
_.e3=e3
_.e4=e4
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
_.r2=r2
_.rx=rx
_.ry=ry
_.a$=a$},
G:function(a,b,c){var t=new Q.fi(null,null,[c])
t.i_(a,b,c)
return t},
d5:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.G(d,null,e)
s=a.gp(a)
C.a.sp(t.b,s)
if(H.eH(a,"$isD",[e],"$asD"))if(H.eH(a,"$isbK",[e],"$asbK"))for(s=J.bP(a.gc0()),r=0;s.A();){q=s.gJ()
p=t.b
o=p.length
if(r>=o)return H.B(p,r)
p[r]=q;++r}else for(s=a.gR(a),p=[H.M(t,0)],r=0;s.A();){n=s.gJ()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.B(o,r)
o[r]=new Q.h(n,m,p);++r}else for(s=a.gR(a),p=[e],o=[H.M(t,0)];s.A();){l=s.gJ()
if(H.td(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.B(m,0)
m[0]=new Q.h(l,k,o)}else if(H.eH(l,"$ish",p,null)){m=t.b
k=m.length
if(0>=k)return H.B(m,0)
m[0]=l}else throw H.m("Invalid entry type "+H.p(J.wJ(l))+" for WeightedList<"+H.p(H.c1(H.dA(e)))+">. Should be "+H.p(H.c1(H.dA(e)))+" or WeightPair<"+H.p(H.c1(H.dA(e)))+">.")}return t},
t2:function(a,b,c,d){var t,s,r,q,p,o,n
t=Q.G(c,null,d)
s=a.gp(a)
C.a.sp(t.b,s)
for(s=a.gau(),s=s.gR(s),r=[d],q=0;s.A();){p=s.gJ()
o=a.m(0,p)
n=t.b
if(q>=n.length)return H.B(n,q)
n[q]=new Q.h(p,o,r);++q}return t},
oE:function(a,b,c){return new Q.jq(J.tJ(a.gc0(),new Q.oF(c,b)),null,[c])},
fj:function(a,b,c,d){return new Q.jp(J.tH(a.gc0(),new Q.oD(c,d,b)),null,[c,d])},
Eg:function(a,b,c){return new Q.hr(J.tJ(a,new Q.o1(b,c)).b7(0,new Q.o2(b,c)),null,[b,c])},
bK:function bK(){},
fi:function fi(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
jo:function jo(){},
oC:function oC(a){this.a=a},
oB:function oB(a,b){this.a=a
this.b=b},
oA:function oA(a,b){this.a=a
this.b=b},
h:function h(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
cc:function cc(){},
fh:function fh(){},
oz:function oz(a,$ti){this.a=a
this.$ti=$ti},
jq:function jq(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
oF:function oF(a,b){this.a=a
this.b=b},
jp:function jp(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
oD:function oD(a,b,c){this.a=a
this.b=b
this.c=c},
hr:function hr(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
o1:function o1(a,b){this.a=a
this.b=b},
o2:function o2(a,b){this.a=a
this.b=b}},X={i9:function i9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},hT:function hT(){},lp:function lp(rx,ry,x1,x2,y1,y2,t,C,E,M,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.C=C
_.E=E
_.M=M
_.G=G
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
_.r2=r2},cZ:function cZ(){},F:function F(a,b,c){this.a=a
this.b=b
this.c=c}},N={Z:function Z(){},lP:function lP(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},mZ:function mZ(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},nb:function nb(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},nx:function nx(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},nz:function nz(rx,ry,x1,x2,y1,y2,t,C,E,M,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.C=C
_.E=E
_.M=M
_.G=G
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
_.r2=r2},of:function of(rx,ry,x1,x2,y1,y2,t,C,E,M,G,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.C=C
_.E=E
_.M=M
_.G=G
_.O=O
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
DM:function(a){var t,s,r,q
t=H.a([],[N.cD])
for(s=0;s<a.length;++s){r=a[s]
q=new N.cD(r.a,0,null,"",!1,"","Ambivalent","Friends","Totally In Love","Rivals","Enemies","Matesprits","Moirallegiance","Auspisticism","Kismesissitude")
q.kK(0)
q.b=r.b
q.c=r.gen(r)
q.d=r.d
q.e=r.e
q.f=r.f
t.push(q)}return t},
cD:function cD(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db){var _=this
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
_.db=db},
Df:function(a){var t,s,r,q,p,o,n,m,l
t=J.cu(a)
s=new W.hy(document.querySelectorAll("link"),[null])
for(r=new H.et(s,s.gp(s),0,null,[null]);r.A();){q=r.d
p=J.ar(q)
if(!!p.$ish_&&q.rel==="stylesheet"){o=$.$get$mP()
H.p(p.gaq(q))
o.toString
o=t.length
n=Math.min(o,J.ct(p.gaq(q)))
for(m=0;m<n;++m){if(m>=o)return H.B(t,m)
if(t[m]!==J.ck(p.gaq(q),m)){l=C.d.bj(t,m)
$.$get$mP().toString
return l.split("/").length-1}continue}}}r=$.$get$mP()
r.toString
F.h2(C.x).$1(r.c5(C.x,"Didn't find a css link to derive relative path"))
return 0},
v2:function(){var t=P.vK()
if(!$.$get$mO().as(t))$.$get$mO().i(0,t,N.Df(t))
return $.$get$mO().m(0,t)}},D={
r8:function(a){var t=P.cK(P.v,D.fQ)
t.a4(0,a.a)
return new D.ik(t)},
dq:function(a,b,c){return new D.lb(a,new D.lc(c),b,[c])},
dp:function dp(){},
ik:function ik(a){this.a=a},
fQ:function fQ(){},
lb:function lb(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
lc:function lc(a){this.a=a},
o9:function o9(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
ve:function(a){var t=new D.n0([],[],0,"","",0,0,a)
t.hV(a)
return t},
wo:function(a,b,c){var t,s
if(typeof c!=="number")return H.aK(c)
t=""
s=0
for(;s<c;++s)t=C.d.ao(t,b)
return J.wQ(a,b,t)},
Fg:function(a){var t=[["x","%"],["X","%"],["s","z"],["w","vv"],["w","v"],["v","w"],["!","~"],["N","|\\/"],["\\b[a-z]*\\b","\u79c1"]]
t.push(["M","|\\/|"])
t.push(["W","\\/\\/"])
t.push(["H",")("])
t.push(["H","|-|"])
t.push(["H","#"])
t.push(["i","!"])
t.push(["I","!"])
t.push(["o","*"])
t.push(["a","@"])
t.push(["at","@"])
t.push(["and","&"])
t.push(["n","^"])
t.push(["oo","69"])
t.push(["OO","69"])
t.push(["o","o+"])
t.push(["plus","+"])
t.push(["happy",":)"])
t.push(["sad",":("])
t.push(["love","<3"])
t.push(["loo","100"])
t.push(["dog","cat"])
t.push(["s","th"])
t.push(["c","s"])
t.push(["per","purr"])
t.push(["mu","mew"])
if(a.a.B()>0.5)return a.w(t)
return a.w($.$get$tf())},
n0:function n0(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
Ed:function(){if($.vt)return
$.vt=!0
var t=new D.bi("Experience","learned","na\xefve",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cg().push(t)
t.y=0
$.t_=t
t=new D.bi("Grist Level","rich","poor",!1,!1,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cg().push(t)
$.Ec=t
t=new D.js(0.03,"Power","strong","weak",!0,!0,!1,10,0.5,-1/0,1/0,-1/0,1/0)
$.$get$cg().push(t)
t.y=2.5
t.Q=1
$.u=t
t=new D.js(0.04,"Health","sturdy","fragile",!0,!0,!1,10,1,-1/0,1/0,-1/0,1/0)
$.$get$cg().push(t)
t.y=2.5
$.an=t
t=new D.bi("Current Health","healthy","infirm",!1,!0,!0,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cg().push(t)
$.b4=t
t=new D.bi("Mobility","fast","slow",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cg().push(t)
$.aY=t
t=new D.n6("Relationships","friendly","aggressive",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cg().push(t)
$.cb=t
t=new D.bi("Sanity","calm","crazy",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cg().push(t)
$.aZ=t
t=new D.bi("Free Will","willful","gullible",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cg().push(t)
$.bu=t
t=new D.bi("Maximum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cg().push(t)
$.bC=t
t=new D.bi("Minimum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cg().push(t)
$.c4=t
t=new D.bi("Alchemy","creative","boring",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cg().push(t)
$.df=t
t=new D.bi("SBURB Lore","woke","clueless",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cg().push(t)
$.cf=t},
t0:function(){var t=$.$get$cg()
return new H.bF(t,new D.nI(),[H.M(t,0)])},
Ee:function(){var t=$.$get$cg()
return new H.bF(t,new D.nJ(),[H.M(t,0)])},
nI:function nI(){},
nJ:function nJ(){},
bi:function bi(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
js:function js(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
n6:function n6(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
n7:function n7(){},
n8:function n8(){}},E={
rb:function(a,b){var t=new E.cx(null,C.c,b,a,"provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],[X.cZ]),!1,H.a([],[Z.cI]),!1,H.a([],[N.cD]),0,H.a([],[E.J]),null,null,!1,H.a([],[Q.b6]),"",null,null)
t.n(a,b)
return t},
hj:function hj(a,b){this.a=a
this.b=b},
cx:function cx(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,a$){var _=this
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
_.r2=r2
_.rx=rx
_.ry=ry
_.a$=a$},
j4:function j4(){},
J:function J(a,b,c){this.a=a
this.b=b
this.c=c},
fz:function fz(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},
jZ:function jZ(a,b,c){this.a=a
this.b=b
this.c=c},
k_:function k_(a){this.a=a},
k0:function k0(a){this.a=a},
mn:function mn(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
n1:function n1(rx,ry,x1,x2,y1,y2,t,C,E,M,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.C=C
_.E=E
_.M=M
_.G=G
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
nh:function nh(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
oy:function oy(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
cL:function cL(){},
j3:function j3(){},
nG:function nG(a){this.a=a},
hp:function hp(){},
hh:function hh(){},
fd:function fd(c,a,b,$ti){var _=this
_.c=c
_.a=a
_.b=b
_.$ti=$ti},
j9:function j9(c,a,b){this.c=c
this.a=a
this.b=b},
mS:function mS(a){this.a=a},
mT:function mT(a){this.a=a},
kd:function kd(c,a,b){this.c=c
this.a=a
this.b=b}},B={lo:function lo(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
cJ:function(a){if($.$get$fT().as(a.f))throw H.m("Duplicate aspect id for "+a.v(0)+": "+a.f+" is already registered for "+J.cu($.$get$fT().m(0,a.f))+".")
$.$get$fT().i(0,a.f,a)},
fU:function(){var t=$.$get$fT()
t=t.gaF(t)
return new H.bF(t,new B.ly(),[H.as(t,"D",0)])},
ue:function(a){var t,s
for(t=$.$get$fT(),t=t.gaF(t),t=t.gR(t);t.A();){s=t.gJ()
if(J.N(J.cE(s),a))return s}return},
ly:function ly(){},
en:function en(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
dZ:function dZ(a,b){this.a=a
this.b=b},
oI:function oI(a){this.a=a},
oK:function oK(a){this.a=a}},G={m_:function m_(rx,ry,x1,x2,y1,y2,t,C,E,M,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.C=C
_.E=E
_.M=M
_.G=G
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
_.r2=r2},mX:function mX(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},nq:function nq(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,t,C,E,M,G,O,u,aw,be,aS,b2,av,bS,bT,bU,bV,bW,bX,bY){var _=this
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.C=C
_.E=E
_.M=M
_.G=G
_.O=O
_.u=u
_.aw=aw
_.be=be
_.aS=aS
_.b2=b2
_.av=av
_.bS=bS
_.bT=bT
_.bU=bU
_.bV=bV
_.bW=bW
_.bX=bX
_.bY=bY},
xs:function(a){var t,s,r,q,p,o,n,m,l
t=G.a5
s=P.iT(a,t)
r=P.a3(null,null,null,t)
q=H.a([],[G.d])
for(t=G.D7(),p=J.bP(t.a),t=new H.eC(p,t.b,[H.M(t,0)]);t.A();){o=p.gJ()
if(o.fW(s))q.push(o)}C.a.hp(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.bN)(q),++n){o=q[n]
if(o.fW(s)){r.h(0,o)
for(p=o.e,m=p.length,l=0;l<p.length;p.length===m||(0,H.bN)(p),++l)s.aE(0,p[l])}}if(s.a!==0)r.a4(0,s)
return r},
D7:function(){var t=$.$get$b()
t.toString
return new H.bF(t,new G.lI(),[H.M(t,0)])},
a5:function a5(){},
aX:function aX(a,b,c){this.a=a
this.b=b
this.c=c},
ak:function ak(a,b,c){this.a=a
this.b=b
this.c=c},
bI:function bI(a,b,c){this.a=a
this.b=b
this.c=c},
d:function d(d,e,a,b,c){var _=this
_.d=d
_.e=e
_.a=a
_.b=b
_.c=c},
lI:function lI(){}},R={
uZ:function(a,b,c,d,e,f){var t=new R.f9(Q.G(null,null,R.dv),$.$get$u8(),e,f,!1,null,null,null,null,null,null,null,null,!1,!1,!1,null,null,null,null,null,!1,null,null,$.$get$il(),null,null,null,Q.G(null,null,X.F),Q.G(null,null,N.Z),P.cK(P.v,[Q.bK,N.Z]))
t.hT(a,b,c,d,e,f)
return t},
f9:function f9(id,k1,k2,k3,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,b$,c$,d$,e$,f$,r$){var _=this
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
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
_.b$=b$
_.c$=c$
_.d$=d$
_.e$=e$
_.f$=f$
_.r$=r$},
DI:function(a){var t,s,r
t=a.length
if(t>1){s=a[1]
r=s!=null&&s instanceof Q.b6}else r=!1
if(0>=t)return H.B(a,0)
t=J.tG(a[0]).gjX()
s="checking for two players, ps is "+H.p(a)+", ret is "+r
t.toString
F.h2(C.j).$1(t.c5(C.j,s))
return r},
Dv:function(a){H.ch(C.a.gX(a),"$isb6").cd
return!0},
Dx:function(a){H.ch(C.a.gX(a),"$isb6").cd
return!1},
Dw:function(a){H.ch(C.a.gX(a),"$isb6").cd
return!1},
Dt:function(a){return J.N(H.ch(C.a.gX(a),"$isb6").W,$.qJ)},
DH:function(a){return J.N(H.ch(C.a.gX(a),"$isb6").W,$.jU)},
DG:function(a){return J.N(H.ch(J.tF(a),"$isb6").W,$.jT)},
DF:function(a){return H.ch(C.a.gX(a),"$isb6").Y.gam()},
DD:function(a){return H.ch(C.a.gX(a),"$isb6").Y.gak()},
DC:function(a){return H.ch(C.a.gX(a),"$isb6").Y.gaj()},
Dz:function(a){return H.ch(C.a.gX(a),"$isb6").Y.gah()},
DB:function(a){return H.ch(C.a.gX(a),"$isb6").Y.gai()},
DE:function(a){return H.ch(C.a.gX(a),"$isb6").Y.gal()},
DA:function(a){var t=H.ch(C.a.gX(a),"$isb6")
return J.N(t.W,$.qK)||J.N(t.W,$.jU)},
Du:function(a){return!0},
Dy:function(a){var t=H.ch(C.a.gX(a),"$isb6")
P.e6("is it JR? "+H.p(t.aT)+" "+(t.aT==="jadedResearcher")+" ")
return t.aT==="jadedResearcher"},
ev:function ev(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
a4:function a4(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
ac:function ac(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
bB:function bB(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
dv:function dv(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
fg:function fg(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
o4:function o4(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
fR:function fR(){}},F={mo:function mo(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
Dh:function(e8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7
if($.fc!=null)return
$.Dg=e8
P.e6("initializing potential sprites")
t=Y.dy("Buggy As Fuck Retro Game")
s=[X.cZ]
r=[Z.cI]
q=[N.cD]
p=[E.J]
o=[Q.b6]
n=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,t,"provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
n.n(t,null)
t=D.bi
m=P.ci
n.a$.q(P.A([$.u,20],t,m))
n.fx=!0
n.x1="provides painful, painful sound file malfunctions, why is this even a thing? "
l=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Robot","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
l.n("Robot",null)
l.a$.q(P.A([$.u,100,$.an,100,$.b4,100,$.bu,100],t,m))
l.x2=1
l.x1="is <b>more</b> useful than another player. How could a mere human measure up to the awesome logical capabilities of a machine? "
k=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Golfer","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
k.n("Golfer",null)
k.x2=1
k.a$.q(P.A([$.u,20,$.c4,20,$.bC,20],t,m))
k.x1="provides surprisingly helpful advice, even if they do insist on calling all enemies \u2018bogeys\u2019. "
j=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Dutton","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
j.n("Dutton",null)
j.x2=1
j.x1="provides transcendent wisdom. "
j.a$.q(P.A([$.u,10,$.an,10,$.b4,10,$.bu,50,$.aY,50,$.c4,50,$.bC,50],t,m))
i=j.fy
h=Z.aG("Duttobliteration",2,null,"")
h.r.push(new Z.a_($.bu,2,!0,0,1,2,3,""))
h.e=" The ENEMY is obliterated. Probably. A watermark of Charles Dutton appears, stage right. "
i.push(h)
h=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Game Bro","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
h.n("Game Bro",null)
h.a$.q(P.A([$.u,20],t,m))
h.x2=1
h.x1="provides rad as fuck tips and tricks for beating SBURB and getting mad snacks, yo. 5 out of 5 hats. "
i=Y.dy("Google")
g=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,i,"provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
g.n(i,null)
g.a$.q(P.A([$.u,20],t,m))
g.x2=1
g.fx=!0
g.x1="sure knows a lot about everything, but why does it only seem to return results about crashing SBURB?"
i=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Game Grl","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
i.n("Game Grl",null)
i.a$.q(P.A([$.u,20],t,m))
i.x2=1
i.x1="provides rad as fuck tips and tricks for beating SBURB and getting mad snacks, yo, but, like, while also being a GIRL? *record scratch*  5 out of 5 lady hats. "
f=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Paperclip","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
f.n("Paperclip",null)
f.a$.q(P.A([$.u,20],t,m))
f.x2=-1
f.x1="says: 'It looks like you're trying to play a cosmic game where you breed frogs to create a universe. Would you like me to'-No. 'Would you like me to'-No! 'It looks like you're'-shut up!!! This is not helpful."
e=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"WebComicCreator","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e.n("WebComicCreator",null)
e.a$.q(P.A([$.u,20],t,m))
e.x2=-1
e.x1="refuses to explain anything about SBURB to you, prefering to let you speculate wildly while cackling to himself."
d=e.fy
c=Z.aG("Kill ALL The Characters",2,null,"")
c.r.push(new Z.a_($.bu,3,!0,0,1,2,3,""))
c.e=" All enemies are obliterated. Probably. A watermark of Andrew Hussie appears, stage right. "
d.push(c)
c=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"KidRock","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c.n("KidRock",null)
c.a$.q(P.A([$.u,20],t,m))
c.x2=-1
c.x1="does absolutly nothing but sing repetitive, late 90's rock to you."
d=c.fy
b=Z.aG("BANG DA DANG DIGGY DIGGY",2,null,"")
a=b.r
a.push(new Z.a_($.u,3,!0,0,1,2,3,""))
a.push(new Z.a_($.u,1,!1,0,1,2,3,""))
b.e=" OWNER plays a 90s hit classic, and you can't help but tap your feet. Somehow, this doesn't feel like the true version of this attack."
d.push(b)
b=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sleuth","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b.n("Sleuth",null)
b.a$.q(P.A([$.u,20,$.cb,100],t,m))
b.x2=-1
b.x1="suggests the player just input a password to skip all their land's weird puzzle shit. This is not actually a thing you can do."
d=b.fy
a=Z.aG("Sepulchritude",2,null,"")
a.r.push(new Z.a_($.cb,1,!0,0,1,2,3,""))
a.e=" The OWNER decides not to bring that noise just yet. They just heal the party instead. "
d.push(a)
a=b.fy
d=Z.aG("Sepulchritude",2,null,"")
d.r.push(new Z.a_($.cb,1,!0,0,1,2,3,""))
d.e=" THE OWNER just don't have the offensive gravitas for that attack. They just heal the party instead. "
a.push(d)
d=b.fy
a=Z.aG("Sepulchritude",2,null,"")
a.r.push(new Z.a_($.cb,3,!0,0,1,2,3,""))
a.e=" The OWNER finally fucking unleashes their Ultimate Attack. The resplendent light of divine PULCHRITUDE consumes all enemies. "
d.push(a)
a=b.fy
d=Z.aG("Sepulchritude",2,null,"")
d.r.push(new Z.a_($.cb,1,!0,0,1,2,3,""))
d.e=" No, not yet! The OWNER refuses to use Sepulchritude. They just heal the party instead. "
a.push(d)
d=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Nic Cage","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d.n("Nic Cage",null)
d.a$.q(P.A([$.u,20],t,m))
d.x2=1
d.x1="demonstrates that when it comes to solving bullshit riddles to get National *cough* I mean SBURBian treasure, he is simply the best there is. "
a=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Praying Mantis","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a.n("Praying Mantis",null)
a.a$.q(P.A([$.u,20,$.bC,20],t,m))
a0=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Shitty Comic Character","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a0.n("Shitty Comic Character",null)
a0.a$.q(P.A([$.u,20,$.aY,50],t,m))
a0.x2=-1
a0.x1=" is the STAR. It is them. You don't think they have ever once attempted to even talk about the game. How HIGH did you have to BE to prototype this glitchy piece of shit? "
a1=a0.fy
a2=Z.aG("FUCK IM FALLING DOWN ALL THESE STAIRS",3,null,"")
a2.r.push(new Z.a_($.aY,1,!1,0,1,2,3,""))
a2.e=" It keeps hapening. "
a1.push(a2)
a2=a0.fy
a1=Z.aG("FUCK IM FALLING DOWN ALL THESE STAIRS",3,null,"")
a1.r.push(new Z.a_($.aY,1,!1,0,1,2,3,""))
a1.e=" I warned you about stairs bro!!! "
a2.push(a1)
a1=a0.fy
a2=Z.aG("FUCK IM FALLING DOWN ALL THESE STAIRS",3,null,"")
a2.r.push(new Z.a_($.aY,1,!1,0,1,2,3,""))
a2.e=" I told you dog! "
a1.push(a2)
a2=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Doctor","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a2.n("Doctor",null)
a2.a$.q(P.A([$.u,20],t,m))
a2.x2=1
a2.x1="is pretty much as useful as another player. No cagey riddles, just straight answers on how to finish the quests. "
a1=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Gerbil","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a1.n("Gerbil",null)
a1.a$.q(P.A([$.u,20],t,m))
a1.x2=1
a1.x1="remains physically adorable and mentally idiotic. Gigglysnort hideytalk ahoy. "
a3=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Chinchilla","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a3.n("Chinchilla",null)
a3.a$.q(P.A([$.u,20],t,m))
a3.x2=1
a3.x1="remains physically adorable and mentally idiotic. Gigglysnort hideytalk ahoy. "
a4=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Rabbit","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a4.n("Rabbit",null)
a4.a$.q(P.A([$.u,20,$.bC,100],t,m))
a4.x1="remains physically adorable and mentally idiotic. Gigglysnort hideytalk ahoy. "
a5=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Tissue","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a5.n("Tissue",null)
a5.x2=-1
a5.x1="is useless in every possible way. "
a6=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Librarian","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a6.n("Librarian",null)
a6.a$.q(P.A([$.u,20],t,m))
a6.x2=1
a6.x1="Is pretty much as useful as another player. No cagey riddles, just straight answers on where the book on how to finish the quest is, and could you please keep it down? "
a7=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Pit Bull","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a7.n("Pit Bull",null)
a7.a$.q(P.A([$.u,50],t,m))
a8=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Butler","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a8.n("Butler",null)
a8.a$.q(P.A([$.u,20,$.aZ,50],t,m))
a8.x2=1
a8.x1="is serving their player like a dude on butlersprite island. "
a9=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sloth","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a9.n("Sloth",null)
a9.a$.q(P.A([$.u,20,$.aY,-50],t,m))
a9.x1="provides. Slow. But. Useful. Advice."
b0=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Cowboy","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b0.n("Cowboy",null)
b0.a$.q(P.A([$.u,20],t,m))
b0.x2=1
b0.x1="provides useful advice, even if they do insist on calling literally everyone 'pardner.' "
b1=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Pomeranian","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b1.n("Pomeranian",null)
b1.a$.q(P.A([$.u,1],t,m))
b1.x2=-1
b1.x1="unhelpfully insists that every rock is probably a boss fight (it isn\u2019t). "
b2=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Chihuahua","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b2.n("Chihuahua",null)
b2.a$.q(P.A([$.u,1],t,m))
b2.x2=-1
b2.x1="unhelpfully insists that every rock is probably a boss fight (it isn\u2019t). "
b3=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Pony","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b3.n("Pony",null)
b3.a$.q(P.A([$.u,20,$.aZ,-1000],t,m))
b3.x2=-1
b3.x1="is constantly flipping their fucking shit instead of being useful in any way shape or form, as ponies are known for. "
b4=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Horse","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b4.n("Horse",null)
b4.a$.q(P.A([$.u,20,$.aZ,-100],t,m))
b4.x2=-1
b4.x1="is constantly flipping their fucking shit instead of being useful in any way shape or form, as horses are known for. "
b5=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Internet Troll","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b5.n("Internet Troll",null)
b5.a$.q(P.A([$.u,20,$.aZ,1000],t,m))
b5.x2=-1
b5.x1="actively does its best to hinder their efforts. "
b6=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Mosquito","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b6.n("Mosquito",null)
b6.a$.q(P.A([$.u,20],t,m))
b6.x2=-1
b6.x1="is a complete dick, buzzing and fussing and biting. What's its deal? "
b7=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Fly","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b7.n("Fly",null)
b7.a$.q(P.A([$.u,20],t,m))
b7.x2=-1
b7.x1="is a complete dick, buzzing and fussing and biting. What's its deal? "
b8=Y.dy("GitHub")
b9=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,b8,"provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b9.n(b8,null)
b9.a$.q(P.A([$.u,20],t,m))
b9.x2=1
b9.fx=!0
b9.x1="Githubsprite tells all about the latest changes to sburbs code. "
b8=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Cow","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b8.n("Cow",null)
b8.a$.q(P.A([$.u,30],t,m))
c0=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Bird","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c0.n("Bird",null)
c0.a$.q(P.A([$.u,20,$.aY,50],t,m))
c0.x1="provides sort of helpful advice when not grabbing random objects to make nests. "
c1=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Bug","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c1.n("Bug",null)
c1.a$.q(P.A([$.u,20],t,m))
c1.x1="provides the requisite amount of buzzybuz zuzytalk to be juuuust barely helpful. "
c2=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Llama","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c2.n("Llama",null)
c2.a$.q(P.A([$.u,20],t,m))
c3=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Penguin","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c3.n("Penguin",null)
c3.a$.q(P.A([$.u,20],t,m))
c4=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Husky","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c4.n("Husky",null)
c4.a$.q(P.A([$.u,30],t,m))
c4.x1="alternates between loud, insistent barks and long, eloquent monologues on the deeper meaning behind each and every fragment of the game. "
c5=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Cat","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c5.n("Cat",null)
c5.a$.q(P.A([$.u,20,$.c4,-20,$.bC,20],t,m))
c5.x1="Is kind of helpful? Maybe? You can't tell if it loves their player or hates them. "
c6=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Dog","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c6.n("Dog",null)
c6.a$.q(P.A([$.u,30],t,m))
c6.x1="alternates between loud, insistent barks and long, eloquent monologues on the deeper meaning behind each and every fragment of the game. "
c7=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Pigeon","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c7.n("Pigeon",null)
c7.a$.q(P.A([$.u,0.5,$.bu,-40],t,m))
c8=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Octopus","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c8.n("Octopus",null)
c8.a$.q(P.A([$.u,20,$.aY,80],t,m))
c9=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Fish","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c9.n("Fish",null)
c9.a$.q(P.A([$.u,20],t,m))
c9.y1=!0
d0=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Kitten","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d0.n("Kitten",null)
d0.a$.q(P.A([$.u,20],t,m))
d0.x1="is kind of helpful? Maybe? You can't tell if it loves their player or hates them. "
d1=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Worm","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d1.n("Worm",null)
d1.a$.q(P.A([$.u,20],t,m))
d1.y1=!0
d2=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Bear","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d2.n("Bear",null)
d2.a$.q(P.A([$.u,50],t,m))
d3=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Goat","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d3.n("Goat",null)
d3.a$.q(P.A([$.u,20],t,m))
d4=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Rat","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d4.n("Rat",null)
d4.a$.q(P.A([$.u,20],t,m))
d5=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Raccoon","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d5.n("Raccoon",null)
d5.a$.q(P.A([$.u,20],t,m))
d5.x2=1
d5.x1="demonstrates that SBURB basically hides quest items in the same places humans would throw away their garbage. "
d6=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Crow","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d6.n("Crow",null)
d6.a$.q(P.A([$.u,20,$.bu,50],t,m))
d6.x1="provides sort of helpful advice when not grabbing random objects to make nests. "
d7=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Chicken","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d7.n("Chicken",null)
d7.a$.q(P.A([$.u,20,$.bu,-50],t,m))
d8=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Duck","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d8.n("Duck",null)
d8.a$.q(P.A([$.u,20],t,m))
d9=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sparrow","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d9.n("Sparrow",null)
d9.a$.q(P.A([$.u,20],t,m))
e0=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Fancy Santa","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e0.n("Fancy Santa",null)
e0.a$.q(P.A([$.u,20],t,m))
e0.x2=-1
e0.x1="goes hohohohohohohohoho. "
e1=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Politician","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e1.n("Politician",null)
e1.a$.q(P.A([$.u,20],t,m))
e1.x2=-1
e1.x1="offers a blueprint for an ECONONY that works for everyone. That would've been more useful before the earth was destroyed.... "
e2=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Tiger","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e2.n("Tiger",null)
e2.a$.q(P.A([$.u,50],t,m))
e2.x1="Provides just enough pants-shitingly terrifying growly-roar meow talk to be useful. "
e3=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sugar Glider","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e3.n("Sugar Glider",null)
e3.a$.q(P.A([$.u,20],t,m))
e3.x1="remains physically adorable and mentally idiotic. Gigglysnort hideytalk ahoy. "
e4=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Rapper","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e4.n("Rapper",null)
e4.a$.q(P.A([$.u,20],t,m))
e4.x2=1
e4.x1="provides surprisingly helpful advice, even if it does insist on some frankly antiquated slang and rhymes. I mean, civilization is dead, there isn\u2019t exactly a police left to fuck. "
e5=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Kangaroo","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e5.n("Kangaroo",null)
e5.a$.q(P.A([$.u,30,$.aY,30],t,m))
e6=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Stoner","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e6.n("Stoner",null)
e6.a$.q(P.A([$.u,42,$.c4,-42,$.bC,42],t,m))
e6.x2=1
e6.x1="is pretty much as useful as another player, assuming that player was higher then a fucking kite. "
e7=[E.cx]
$.fc=H.a([n,l,k,j,h,g,i,f,e,c,b,d,a,a0,a2,a1,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b9,b8,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6],e7)
e6=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Frog","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e6.n("Frog",null)
e6.E=!0
e6.a$.q(P.A([$.aY,100,$.u,10],t,m))
e6.x1="provides the requisite amount of gigglesnort  hideytalk to be fairly useful, AND the underlings seem to go after it first! Bonus! "
e5=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Lizard","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e5.n("Lizard",null)
e5.a$.q(P.A([$.u,20],t,m))
e5.E=!0
e5.x1="provides the requisite amount of gigglesnort  hideytalk to be fairly useful, AND the underlings seem to go after it first! Bonus! "
e4=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Salamander","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e4.n("Salamander",null)
e4.E=!0
e4.a$.q(P.A([$.an,500,$.b4,500,$.u,20],t,m))
e4.x1="provides the requisite amount of gigglesnort  hideytalk to be fairly useful, AND the underlings seem to go after it first! Bonus! "
e3=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Iguana","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e3.n("Iguana",null)
e3.E=!0
e3.x1="provides the requisite amount of gigglesnort  hideytalk to be fairly useful, AND the underlings seem to go after it first! Bonus! "
e2=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Crocodile","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e2.n("Crocodile",null)
e2.E=!0
e2.a$.q(P.A([$.u,50],t,m))
e2.x1="provides the requisite amount of gigglesnort  hideytalk to be fairly useful, AND the underlings seem to go after it first! Bonus! "
e1=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Turtle","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e1.n("Turtle",null)
e1.E=!0
e1.a$.q(P.A([$.aY,-100,$.u,20],t,m))
e1.x1="provides the requisite amount of gigglesnort  hideytalk to be fairly useful, AND the underlings seem to go after it first! Bonus! "
e0=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Alligator","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e0.n("Alligator",null)
e0.a$.q(P.A([$.an,500,$.b4,500,$.aY,100,$.u,50],t,m))
e0.E=!0
e0.x1="provides the requisite amount of gigglesnort  hideytalk to be fairly useful, AND the underlings seem to go after it first! Bonus! "
d9=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Snake","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d9.n("Snake",null)
d9.y1=!0
d9.a$.q(P.A([$.an,500,$.b4,500,$.aY,100,$.u,10],t,m))
d9.E=!0
d9.x1="providessss the requisssssite amount of gigglessssssnort hideytalk to be jusssssst barely helpful. AND the underlings seem to go after it first! Bonus! "
d8=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Axolotl","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d8.n("Axolotl",null)
d8.a$.q(P.A([$.u,20,$.an,50,$.b4,50],t,m))
d8.E=!0
d8.x1="provides the requisite amount of gigglesnort  hideytalk to be fairly useful, AND the underlings seem to go after it first! Bonus! "
d7=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Newt","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d7.n("Newt",null)
d7.a$.q(P.A([$.u,20],t,m))
d7.E=!0
d7.x1="provides the requisite amount of gigglesnort  hideytalk to be fairly useful, AND the underlings seem to go after it first! Bonus! "
$.rP=H.a([e6,e5,e4,e3,e2,e1,e0,d9,d8,d7],e7)
d7=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"First Guardian","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d7.n("First Guardian",null)
d7.y2=!0
d7.a$.q(P.A([$.an,1000,$.b4,1000,$.aY,500,$.u,250],t,m))
d7.x1="is fairly helpful with the teleporting and all, but when it speaks- Wow. No. That is not ok. "
d8=d7.fy
d9=Z.aG("Atomic Teleport Spam",3,null,"")
e0=d9.r
e0.push(new Z.a_($.aY,0,!1,0,1,2,3,""))
e0.push(new Z.a_($.aY,2,!0,0,1,2,3,""))
d9.e=" The OWNER shimers with radioactive stars, and then teleports behind the ENEMY, sneak-attacking them. "
d8.push(d9)
d9=Y.dy("Horror Terror")
d8=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,d9,"provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d8.n(d9,null)
d8.a$.q(P.A([$.an,500,$.b4,500,$.bu,250,$.u,150],t,m))
d8.y2=!0
d8.fx=!0
d8.x1="... Oh god. What is going on. Why does just listening to it make your ears bleed!? "
d9=d8.fy
e0=Z.aG("Vast Glub",3,null,"")
e0.r.push(new Z.a_($.bu,3,!0,0,1,2,3,""))
e0.e=" A galaxy spanning glub damages everyone. The only hope of survival is to spread the damage across so many enemies that everyone only takes a manageable amount. "
d9.push(e0)
e0=Y.dy("Speaker of the Furthest Ring")
d9=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,e0,"provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d9.n(e0,null)
d9.y2=!0
d9.fx=!0
d9.a$.q(P.A([$.an,1000,$.b4,1000,$.bu,250,$.u,250],t,m))
d9.x1="whispers madness humankind was not meant to know. Its words are painful, hateful, yet\u2026 tempting. It speaks of flames and void, screams and gods. "
e0=d9.fy
e1=Z.aG("Vast Glub",3,null,"")
e1.r.push(new Z.a_($.bu,3,!0,0,1,2,3,""))
e1.e=" A galaxy spanning glub damages everyone. The only hope of survival is to spread the damage across so many enemies that everyone only takes a manageable amount. "
e0.push(e1)
e1=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Clown","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e1.n("Clown",null)
e1.y2=!0
e1.a$.q(P.A([$.an,1000,$.b4,1000,$.c4,-250,$.bC,250,$.u,100],t,m))
e1.x2=-1
e1.x1="goes hehehehehehehehehehehehehehehehehehehehehehehehehehe. "
e0=e1.fy
e2=Z.aG("Can't Keep Down The Clown",3,null,"")
e3=e2.r
e3.push(new Z.a_($.aZ,0,!1,0,1,2,3,""))
e3.push(new Z.a_($.aZ,0,!0,0,1,2,3,""))
e2.e=" You are pretty sure it is impossible for Clowns to die. "
e0.push(e2)
e2=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Puppet","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e2.n("Puppet",null)
e2.y2=!0
e2.a$.q(P.A([$.an,500,$.b4,500,$.bu,250,$.aY,250,$.c4,-250,$.bC,250,$.aZ,250,$.u,100],t,m))
e2.x1="is the most unhelpful piece of shit in the world. Oh my god, just once. Please, just shut up. "
e2.x2=-1
e0=e2.fy
e3=Z.aG("Hee Hee Hee Hoo!",3,null,"")
e4=e3.r
e4.push(new Z.a_($.aZ,3,!1,0,1,2,3,""))
e4.push(new Z.a_($.aZ,3,!0,0,1,2,3,""))
e3.e=" Oh god! Shut up! Just once! Please shut up! "
e0.push(e3)
e3=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Xenomorph","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e3.n("Xenomorph",null)
e3.y2=!0
e3.a$.q(P.A([$.an,500,$.b4,500,$.aY,250,$.u,100],t,m))
e0=e3.fy
e4=Z.aG("Spawning",3,null,"")
e4.r.push(new Z.a_($.df,3,!0,0,1,2,3,""))
e4.e=" Oh god. Where are all those baby monsters coming from. They are everywhere! Fuck! How are they so good at biting??? "
e0.push(e4)
e4=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Deadpool","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e4.n("Deadpool",null)
e4.y2=!0
e4.a$.q(P.A([$.an,500,$.b4,500,$.aY,250,$.c4,-250,$.bC,250,$.u,100],t,m))
e4.x2=1
e4.x1="demonstrates that when it comes to providing fourth wall breaking advice to getting through quests and killing baddies, he is pretty much the best there is. "
e0=e4.fy
e5=Z.aG("Degenerate Regeneration",3,null,"")
e5.r.push(new Z.a_($.an,0,!0,0,1,2,3,""))
e5.e=" Hey there, Observer! Want to see a neat trick? POW! Grew my own head back. Pretty cool, huh? (Now if only JR would let me spam this or make it be castable even while dead, THEN we'd be cooking with petrol) "
e0.push(e5)
e5=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Dragon","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e5.n("Dragon",null)
e5.y2=!0
e5.a$.q(P.A([$.an,500,$.b4,500,$.u,100],t,m))
e5.x1="breathes fire and offers condescending, yet useful advice. "
e0=e5.fy
e6=Z.aG("Mighty Fire Breath",3,null,"")
e6.r.push(new Z.a_($.u,3,!0,0,1,2,3,""))
e6.e=" With a mighty breath, OWNER spits all the fires, sick and otherwise."
e0.push(e6)
e6=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Teacher","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e6.n("Teacher",null)
e6.y2=!0
e6.a$.q(P.A([$.an,500,$.b4,500,$.u,100],t,m))
e6.x2=-1
e6.x1="dials the sprites natural tendency towards witholding information to have you 'figure it out yourself' up to eleven. "
e0=e6.fy
d6=Z.aG("Lecture",3,null,"")
d5=d6.r
d5.push(new Z.a_($.bu,3,!1,0,1,2,3,""))
d5.push(new Z.a_($.aZ,3,!1,0,1,2,3,""))
d6.e=" OWNER begins a 3 part lecture on why you should probably just give up. It is hypnotic in it's ceaselessness."
e0.push(d6)
d6=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Fiduspawn","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d6.n("Fiduspawn",null)
d6.y2=!0
d6.a$.q(P.A([$.an,500,$.b4,500,$.u,100],t,m))
e0=d6.fy
d5=Z.aG("Spawning",3,null,"")
d5.r.push(new Z.a_($.df,3,!0,0,1,2,3,""))
d5.e=" Oh god. Where are all those baby monsters coming from. They are everywhere! Fuck! How are they so good at biting??? "
e0.push(d5)
d5=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Doll","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d5.n("Doll",null)
d5.y2=!0
d5.a$.q(P.A([$.an,500,$.b4,500,$.u,100],t,m))
d5.x2=-1
d5.x1="stares creepily. It never moves when you're watching it. It's basically the worst, and that's all there is to say on that topic. "
e0=d5.fy
d4=Z.aG("Disconcerting Ogle",3,null,"")
d3=d4.r
d3.push(new Z.a_($.aZ,3,!1,0,1,2,3,""))
d3.push(new Z.a_($.aZ,0,!0,0,1,2,3,""))
d4.e=" OWNER is staring at ENEMY. It makes you uncomfortable, the way they are just standing there. And watching.  "
e0.push(d4)
d4=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Zombie","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d4.n("Zombie",null)
d4.y2=!0
d4.a$.q(P.A([$.an,500,$.b4,500,$.u,100],t,m))
e0=d4.fy
d3=Z.aG("Rise From The Grave",3,null,"")
d3.r.push(new Z.a_($.an,0,!0,0,1,2,3,""))
d3.e=" You thought the OWNER was pretty hurt, but instead they are just getting going. "
e0.push(d3)
d3=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Demon","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d3.n("Demon",null)
d3.y2=!0
d3.a$.q(P.A([$.an,500,$.b4,500,$.bu,250,$.u,250],t,m))
e0=d3.fy
d2=Z.aG("Claw Claw MotherFuckers",3,null,"")
d1=d2.r
d1.push(new Z.a_($.u,2,!0,0,1,2,3,""))
d1.push(new Z.a_($.u,2,!0,0,1,2,3,""))
d2.e=" The OWNER slashes at the ENEMY twice. "
e0.push(d2)
d2=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Monster","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d2.n("Monster",null)
d2.y2=!0
d2.a$.q(P.A([$.an,500,$.b4,500,$.aZ,-250,$.bC,250,$.u,100],t,m))
e0=d2.fy
d1=Z.aG("Claw Claw MotherFuckers",3,null,"")
d0=d1.r
d0.push(new Z.a_($.u,2,!0,0,1,2,3,""))
d0.push(new Z.a_($.u,2,!0,0,1,2,3,""))
d1.e=" The OWNER slashes at the ENEMY twice. "
e0.push(d1)
d1=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Vampire","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d1.n("Vampire",null)
d1.y2=!0
d1.a$.q(P.A([$.an,500,$.b4,500,$.aY,250,$.u,100],t,m))
e0=d1.fy
d0=Z.aG("I Vant to Drink Your Blood",3,null,"")
c9=d0.r
c9.push(new Z.a_($.an,2,!0,0,1,2,3,""))
c9.push(new Z.a_($.an,0,!0,0,1,2,3,""))
d0.e=" The OWNER drains HP from the ENEMY. "
e0.push(d0)
d0=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Pumpkin","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d0.n("Pumpkin",null)
d0.y2=!0
d0.a$.q(P.A([$.an,500,$.b4,500,$.aY,5000,$.c4,-250,$.bC,5000,$.u,100],t,m))
d0.x1="was kind of helpful, and then kind of didn\u2019t exist. Please don\u2019t think too hard about it, the simulation is barely handling a pumpkin sprite as is. "
e0=d0.fy
c9=Z.aG("What Pumpkin???",3,null,"")
c8=c9.r
c8.push(new Z.a_($.aY,2,!1,0,1,2,3,""))
c8.push(new Z.a_($.aY,3,!0,0,1,2,3,""))
c9.e=" Everyone tries to hit the OWNER until suddenly they have never been there at all, causing attacks to miss so catastrophically they backfire. "
e0.push(c9)
c9=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Werewolf","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c9.n("Werewolf",null)
c9.y2=!0
c9.a$.q(P.A([$.an,500,$.b4,500,$.aZ,-250,$.u,100],t,m))
e0=c9.fy
c8=Z.aG("Grim Bark Slash Attack",3,null,"")
c7=c8.r
c7.push(new Z.a_($.u,2,!0,0,1,2,3,""))
c7.push(new Z.a_($.u,2,!0,0,1,2,3,""))
c8.e=" The OWNER slashes at the ENEMY twice. While being a werewolf. "
e0.push(c8)
c8=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Jet Engine","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c8.n("Jet Engine",null)
c8.y2=!0
c8.a$.q(P.A([$.an,500,$.b4,500,$.aY,500,$.u,100],t,m))
e0=c8.fy
c7=Z.aG("NO  CAPES",3,null,"")
c6=c7.r
c6.push(new Z.a_($.u,2,!0,0,1,2,3,""))
c6.push(new Z.a_($.u,2,!0,0,1,2,3,""))
c7.e=" The OWNER sucks the ENEMY in towards their spinning blades of death. "
e0.push(c7)
c7=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Monkey","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c7.n("Monkey",null)
c7.y2=!0
c7.x2=-1
c7.a$.q(P.A([$.an,5,$.b4,5,$.aY,5000,$.c4,-5000,$.bC,-5000,$.u,100],t,m))
c7.x1="actively interferes with quests. Just. Fuck monkeys. "
e0=c7.fy
c6=Z.aG("Monkey Business",3,null,"")
c5=c6.r
c5.push(new Z.a_($.aY,0,!1,0,1,2,3,""))
c5.push(new Z.a_($.aY,2,!0,0,1,2,3,""))
c6.e=" The OWNER uses their monkey like fastness to attack the ENEMY just way too fucking many times. "
e0.push(c6)
$.rO=H.a([d7,d8,d9,e1,e2,e3,e4,e5,e6,d6,d5,d4,d3,d2,d1,d0,c9,c8,c7],e7)
c7=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Hoofbeast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c7.n("Hoofbeast",null)
c7.t=!0
c7.a$.q(P.A([$.u,30],t,m))
c8=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Meow Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c8.n("Meow Beast",null)
c8.t=!0
c8.a$.q(P.A([$.u,30,$.c4,20,$.bC,20],t,m))
c8.x1="is kind of helpful? Maybe? You can't tell if it loves their player or hates them. "
c9=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Bark Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c9.n("Bark Beast",null)
c9.t=!0
c9.a$.q(P.A([$.u,40],t,m))
c9.x1="alternates between loud, insistent barks and long, eloquent monologues on the deeper meaning behind each and every fragment of the game. "
d0=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Nut Creature","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d0.n("Nut Creature",null)
d0.t=!0
d0.a$.q(P.A([$.u,30,$.aY,30],t,m))
d1=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Gobblefiend","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d1.n("Gobblefiend",null)
d1.t=!0
d1.a$.q(P.A([$.u,50],t,m))
d1.x2=-1
d1.x1="is the most unhelpful piece of shit in the world. Oh my god, just once. Please, just shut up. "
d2=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Bicyclops","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d2.n("Bicyclops",null)
d2.t=!0
d2.a$.q(P.A([$.u,30],t,m))
d3=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Centaur","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d3.n("Centaur",null)
d3.t=!0
d3.a$.q(P.A([$.u,50,$.aZ,50],t,m))
d4=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Fairy Bull","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d4.n("Fairy Bull",null)
d4.t=!0
d4.a$.q(P.A([$.u,1],t,m))
d5=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Slither Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d5.n("Slither Beast",null)
d5.t=!0
d5.a$.q(P.A([$.u,30],t,m))
d5.y1=!0
d6=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Wiggle Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d6.n("Wiggle Beast",null)
d6.t=!0
d6.a$.q(P.A([$.u,30],t,m))
e6=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Honkbird","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e6.n("Honkbird",null)
e6.t=!0
e6.a$.q(P.A([$.u,30],t,m))
e5=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Dig Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e5.n("Dig Beast",null)
e5.t=!0
e5.a$.q(P.A([$.u,30],t,m))
e4=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Cholerbear","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e4.n("Cholerbear",null)
e4.t=!0
e4.a$.q(P.A([$.u,50],t,m))
e3=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Antler Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e3.n("Antler Beast",null)
e3.t=!0
e3.a$.q(P.A([$.u,30,$.aY,30],t,m))
e2=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Ram Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e2.n("Ram Beast",null)
e2.t=!0
e2.a$.q(P.A([$.u,30],t,m))
e1=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Crab","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e1.n("Crab",null)
e1.t=!0
e1.a$.q(P.A([$.u,30],t,m))
d9=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Spider","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d9.n("Spider",null)
d9.t=!0
d9.a$.q(P.A([$.u,30],t,m))
d8=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Thief Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d8.n("Thief Beast",null)
d8.t=!0
d8.a$.q(P.A([$.u,30],t,m))
d7=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"March Bug","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d7.n("March Bug",null)
d7.t=!0
d7.a$.q(P.A([$.u,30],t,m))
c6=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Nibble Vermin","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c6.n("Nibble Vermin",null)
c6.t=!0
c6.a$.q(P.A([$.u,30],t,m))
e0=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Woolbeast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e0.n("Woolbeast",null)
e0.t=!0
e0.a$.q(P.A([$.u,30],t,m))
c5=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Hop Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c5.n("Hop Beast",null)
c5.t=!0
c5.a$.q(P.A([$.u,30,$.bC,30],t,m))
c4=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Stink Creature","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c4.n("Stink Creature",null)
c4.t=!0
c4.a$.q(P.A([$.u,30],t,m))
c3=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Speed Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c3.n("Speed Beast",null)
c3.t=!0
c3.a$.q(P.A([$.u,30,$.aY,50],t,m))
c2=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Jump Creature","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c2.n("Jump Creature",null)
c2.t=!0
c2.a$.q(P.A([$.u,30],t,m))
c1=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Fight Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c1.n("Fight Beast",null)
c1.t=!0
c1.a$.q(P.A([$.u,50],t,m))
c0=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Claw Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c0.n("Claw Beast",null)
c0.t=!0
c0.a$.q(P.A([$.u,50],t,m))
b8=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Tooth Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b8.n("Tooth Beast",null)
b8.t=!0
b8.a$.q(P.A([$.u,50],t,m))
b9=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Armor Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b9.n("Armor Beast",null)
b9.a$.q(P.A([$.u,30,$.b4,100,$.an,100],t,m))
b9.t=!0
b7=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Trap Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b7.n("Trap Beast",null)
b7.t=!0
b7.a$.q(P.A([$.u,30],t,m))
$.rQ=H.a([c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,e6,e5,e4,e3,e2,e1,d9,d8,d7,c6,e0,c5,c4,c3,c2,c1,c0,b8,b9,b7],e7)
e7=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Zap Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e7.n("Zap Beast",null)
e7.t=!0
e7.a$.q(P.A([$.u,50],t,m))
b7=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sea Slither Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b7.n("Sea Slither Beast",null)
b7.t=!0
b7.a$.q(P.A([$.u,30],t,m))
b7.y1=!0
b9=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Electric Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b9.n("Electric Beast",null)
b9.t=!0
b9.a$.q(P.A([$.u,50],t,m))
b9.y1=!0
b8=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Whale","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b8.n("Whale",null)
b8.a$.q(P.A([$.u,30,$.b4,50,$.an,50],t,m))
b8.t=!0
b8.y1=!0
c0=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sky Horse","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c0.n("Sky Horse",null)
c0.t=!0
c0.a$.q(P.A([$.u,30,$.aY,20],t,m))
c1=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sea Meow Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c1.n("Sea Meow Beast",null)
c1.t=!0
c1.a$.q(P.A([$.u,30,$.c4,20,$.bC,20],t,m))
c2=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sea Hoofbeast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c2.n("Sea Hoofbeast",null)
c2.t=!0
c2.a$.q(P.A([$.u,30],t,m))
c3=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Cuttlefish","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c3.n("Cuttlefish",null)
c3.t=!0
c3.a$.q(P.A([$.u,30],t,m))
c4=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Swim Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c4.n("Swim Beast",null)
c4.t=!0
c4.a$.q(P.A([$.u,30],t,m))
c5=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sea Goat","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c5.n("Sea Goat",null)
c5.t=!0
c5.a$.q(P.A([$.u,30,$.c4,-30,$.bC,30],t,m))
e0=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Light Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e0.n("Light Beast",null)
e0.a$.q(P.A([$.u,30],t,m))
c6=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Dive Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c6.n("Dive Beast",null)
c6.t=!0
c6.a$.q(P.A([$.u,30],t,m))
d7=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Honkbird","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d7.n("Honkbird",null)
d7.t=!0
d7.a$.q(P.A([$.u,30],t,m))
d8=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sea Bear","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d8.n("Sea Bear",null)
d8.t=!0
d8.a$.q(P.A([$.u,30],t,m))
o=new F.z("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sea Armorbeast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
o.n("Sea Armorbeast",null)
o.t=!0
o.a$.q(P.A([$.u,30,$.b4,50,$.an,50],t,m))
$.rR=H.a([e7,b7,b9,b8,c0,c1,c2,c3,c4,c5,e0,c6,d7,d8,o],[F.z])
o=$.fc;(o&&C.a).a4(o,$.rO)
o=$.fc;(o&&C.a).a4(o,$.rP)
o=$.fc;(o&&C.a).a4(o,$.rQ)
o=$.fc;(o&&C.a).a4(o,$.rR)},
mp:function mp(){},
dT:function dT(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,a$){var _=this
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
_.r2=r2
_.rx=rx
_.ry=ry
_.a$=a$},
jh:function jh(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,a$){var _=this
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
_.r2=r2
_.rx=rx
_.ry=ry
_.a$=a$},
z:function z(x1,x2,y1,y2,t,C,E,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,a$){var _=this
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.C=C
_.E=E
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
_.r2=r2
_.rx=rx
_.ry=ry
_.a$=a$},
oH:function oH(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
Dc:function(a,b){return new F.f7(!1,a)},
h2:function(a){if(a===C.w){window
return C.m.gbl(C.m)}if(a===C.x){window
return C.m.gkL()}if(a===C.a7){window
return C.m.gjJ()}return P.Fc()},
f6:function f6(a,b){this.a=a
this.b=b},
f7:function f7(a,b){this.a=a
this.b=b}}
var v=[C,H,J,P,W,T,S,K,L,M,O,Y,Z,A,V,U,Q,X,N,D,E,B,G,R,F]
setFunctionNamesIfNecessary(v)
var $={}
H.rI.prototype={}
J.a0.prototype={
T:function(a,b){return a===b},
gab:function(a){return H.eu(a)},
v:function(a){return H.mY(a)},
gac:function(a){return new H.dx(H.hN(a),null)},
$isfR:1,
$isbd:1}
J.lL.prototype={
v:function(a){return String(a)},
gab:function(a){return a?519018:218159},
gac:function(a){return C.ap},
$iscM:1}
J.iR.prototype={
T:function(a,b){return null==b},
v:function(a){return"null"},
gab:function(a){return 0},
gac:function(a){return C.aj},
$isdw:1}
J.fY.prototype={
gab:function(a){return 0},
gac:function(a){return C.ai},
v:function(a){return String(a)},
$isuV:1}
J.mR.prototype={}
J.eA.prototype={}
J.er.prototype={
v:function(a){var t=a[$.$get$tP()]
return t==null?this.hH(a):J.cu(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.ep.prototype={
cZ:function(a,b){if(!!a.immutable$list)throw H.m(new P.aR(b))},
bR:function(a,b){if(!!a.fixed$length)throw H.m(new P.aR(b))},
h:function(a,b){this.bR(a,"add")
a.push(b)},
fN:function(a,b){this.bR(a,"removeAt")
if(b<0||b>=a.length)throw H.m(P.hl(b,null,null))
return a.splice(b,1)[0]},
f_:function(a,b,c){var t,s,r,q,p
t=[]
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q)!==!0===c)t.push(q)
if(a.length!==s)throw H.m(new P.bX(a))}p=t.length
if(p===s)return
this.sp(a,p)
for(r=0;r<t.length;++r)a[r]=t[r]},
b9:function(a,b){return new H.bF(a,b,[H.M(a,0)])},
a4:function(a,b){var t
this.bR(a,"addAll")
for(t=J.bP(b);t.A();)a.push(t.gJ())},
b7:function(a,b){return new H.db(a,b,[H.M(a,0),null])},
b6:function(a,b){var t,s,r,q
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<a.length;++r){q=H.p(a[r])
if(r>=t)return H.B(s,r)
s[r]=q}return s.join(b)},
ey:function(a,b){return H.vw(a,b,null,H.M(a,0))},
jx:function(a,b,c){var t,s,r
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.m(new P.bX(a))}return s},
a6:function(a,b){if(b>>>0!==b||b>=a.length)return H.B(a,b)
return a[b]},
ck:function(a,b,c){if(b<0||b>a.length)throw H.m(P.bJ(b,0,a.length,"start",null))
if(c==null)c=a.length
else{if(typeof c!=="number"||Math.floor(c)!==c)throw H.m(H.bL(c))
if(c<b||c>a.length)throw H.m(P.bJ(c,b,a.length,"end",null))}if(b===c)return H.a([],[H.M(a,0)])
return H.a(a.slice(b,c),[H.M(a,0)])},
gX:function(a){if(a.length>0)return a[0]
throw H.m(H.d0())},
gby:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.m(H.d0())},
a9:function(a,b,c,d,e){var t,s,r
this.cZ(a,"setRange")
P.dd(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.bv(P.bJ(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.m(H.uU())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r>>>0!==r||r>=d.length)return H.B(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r>>>0!==r||r>=d.length)return H.B(d,r)
a[b+s]=d[r]}},
bh:function(a,b,c,d){return this.a9(a,b,c,d,0)},
cw:function(a,b,c,d){var t
this.cZ(a,"fill range")
P.dd(b,c,a.length,null,null,null)
for(t=b;t<c;++t)a[t]=d},
bg:function(a,b,c,d){var t,s,r,q,p,o
this.bR(a,"replaceRange")
P.dd(b,c,a.length,null,null,null)
d=C.d.aN(d)
if(typeof c!=="number")return c.aP()
t=c-b
s=d.length
r=b+s
q=a.length
if(t>=s){p=t-s
o=q-p
this.bh(a,b,r,d)
if(p!==0){this.a9(a,r,o,a,c)
this.sp(a,o)}}else{o=q+(s-t)
this.sp(a,o)
this.a9(a,r,o,a,c)
this.bh(a,b,r,d)}},
fb:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])===!0)return!0
if(a.length!==t)throw H.m(new P.bX(a))}return!1},
js:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])!==!0)return!1
if(a.length!==t)throw H.m(new P.bX(a))}return!0},
ds:function(a,b){var t
this.cZ(a,"sort")
t=b==null?P.Fb():b
H.jg(a,0,a.length-1,t)},
hp:function(a){return this.ds(a,null)},
cf:function(a,b,c){var t
if(c>=a.length)return-1
if(c<0)c=0
for(t=c;t<a.length;++t)if(J.N(a[t],b))return t
return-1},
bq:function(a,b){return this.cf(a,b,0)},
a5:function(a,b){var t
for(t=0;t<a.length;++t)if(J.N(a[t],b))return!0
return!1},
ga2:function(a){return a.length===0},
v:function(a){return P.fX(a,"[","]")},
an:function(a,b){var t=H.a(a.slice(0),[H.M(a,0)])
return t},
aN:function(a){return this.an(a,!0)},
gR:function(a){return new J.fy(a,a.length,0,null,[H.M(a,0)])},
gab:function(a){return H.eu(a)},
gp:function(a){return a.length},
sp:function(a,b){this.bR(a,"set length")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(P.fx(b,"newLength",null))
if(b<0)throw H.m(P.bJ(b,0,null,"newLength",null))
a.length=b},
m:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(H.c6(a,b))
if(b>=a.length||b<0)throw H.m(H.c6(a,b))
return a[b]},
i:function(a,b,c){this.cZ(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(H.c6(a,b))
if(b>=a.length||b<0)throw H.m(H.c6(a,b))
a[b]=c},
$iscq:1,
$ascq:function(){},
$isL:1,
$asL:null,
$isP:1,
$asP:null,
$isD:1,
$asD:null}
J.rH.prototype={}
J.fy.prototype={
gJ:function(){return this.d},
A:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.m(H.bN(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.f5.prototype={
bd:function(a,b){var t
if(typeof b!=="number")throw H.m(H.bL(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.ge8(b)
if(this.ge8(a)===t)return 0
if(this.ge8(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
ge8:function(a){return a===0?1/a<0:a<0},
bx:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.m(new P.aR(""+a+".floor()"))},
aM:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.m(new P.aR(""+a+".round()"))},
a1:function(a,b,c){if(this.bd(b,c)>0)throw H.m(H.bL(b))
if(this.bd(a,b)<0)return b
if(this.bd(a,c)>0)return c
return a},
l:function(a){return a},
bN:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.m(P.bJ(b,2,36,"radix",null))
t=a.toString(b)
if(C.d.ad(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.bv(new P.aR("Unexpected toString result: "+t))
r=J.bm(s)
t=r.m(s,1)
q=+r.m(s,3)
if(r.m(s,2)!=null){t+=r.m(s,2)
q-=r.m(s,2).length}return t+C.d.aU("0",q)},
v:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gab:function(a){return a&0x1FFFFFFF},
ev:function(a){return-a},
ao:function(a,b){if(typeof b!=="number")throw H.m(H.bL(b))
return a+b},
aP:function(a,b){if(typeof b!=="number")throw H.m(H.bL(b))
return a-b},
aU:function(a,b){if(typeof b!=="number")throw H.m(H.bL(b))
return a*b},
dh:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
aH:function(a,b){return(a|0)===a?a/b|0:this.iL(a,b)},
iL:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.m(new P.aR("Result of truncating division is "+H.p(t)+": "+H.p(a)+" ~/ "+H.p(b)))},
bG:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
iJ:function(a,b){if(b<0)throw H.m(H.bL(b))
return b>31?0:a>>>b},
a7:function(a,b){if(typeof b!=="number")throw H.m(H.bL(b))
return a<b},
bC:function(a,b){if(typeof b!=="number")throw H.m(H.bL(b))
return a>b},
bO:function(a,b){if(typeof b!=="number")throw H.m(H.bL(b))
return a>=b},
gac:function(a){return C.as},
$isci:1}
J.iQ.prototype={
gac:function(a){return C.ar},
$isU:1,
$isci:1,
$isO:1}
J.iP.prototype={
gac:function(a){return C.aq},
$isU:1,
$isci:1}
J.eq.prototype={
ad:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(H.c6(a,b))
if(b<0)throw H.m(H.c6(a,b))
if(b>=a.length)H.bv(H.c6(a,b))
return a.charCodeAt(b)},
ap:function(a,b){if(b>=a.length)throw H.m(H.c6(a,b))
return a.charCodeAt(b)},
iY:function(a,b,c){if(c>b.length)throw H.m(P.bJ(c,0,b.length,null,null))
return new H.pQ(b,a,c)},
iX:function(a,b){return this.iY(a,b,0)},
ao:function(a,b){if(typeof b!=="string")throw H.m(P.fx(b,null,null))
return a+b},
kv:function(a,b,c){return H.bM(a,b,c)},
kw:function(a,b,c){return H.FH(a,b,c,null)},
hy:function(a,b){var t=a.split(b)
return t},
bg:function(a,b,c,d){var t,s
H.tc(b)
c=P.dd(b,c,a.length,null,null,null)
H.tc(c)
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
bi:function(a,b,c){var t
H.tc(c)
if(typeof c!=="number")return c.a7()
if(c<0||c>a.length)throw H.m(P.bJ(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
aW:function(a,b){return this.bi(a,b,0)},
N:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.bv(H.bL(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.bv(H.bL(c))
if(typeof b!=="number")return b.a7()
if(b<0)throw H.m(P.hl(b,null,null))
if(typeof c!=="number")return H.aK(c)
if(b>c)throw H.m(P.hl(b,null,null))
if(c>a.length)throw H.m(P.hl(c,null,null))
return a.substring(b,c)},
bj:function(a,b){return this.N(a,b,null)},
kG:function(a){return a.toLowerCase()},
kI:function(a){return a.toUpperCase()},
aU:function(a,b){var t,s
if(typeof b!=="number")return H.aK(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.m(C.R)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
ea:function(a,b,c){var t=b-a.length
if(t<=0)return a
return this.aU(c,t)+a},
cf:function(a,b,c){var t
if(c<0||c>a.length)throw H.m(P.bJ(c,0,a.length,null,null))
t=a.indexOf(b,c)
return t},
bq:function(a,b){return this.cf(a,b,0)},
fj:function(a,b,c){if(c>a.length)throw H.m(P.bJ(c,0,a.length,null,null))
return H.FG(a,b,c)},
a5:function(a,b){return this.fj(a,b,0)},
ga2:function(a){return a.length===0},
gjT:function(a){return a.length!==0},
bd:function(a,b){var t
if(typeof b!=="string")throw H.m(H.bL(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
v:function(a){return a},
gab:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gac:function(a){return C.ak},
gp:function(a){return a.length},
m:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(H.c6(a,b))
if(b>=a.length||b<0)throw H.m(H.c6(a,b))
return a[b]},
$iscq:1,
$ascq:function(){},
$isv:1}
H.kg.prototype={
gp:function(a){return this.a.length},
m:function(a,b){return C.d.ad(this.a,b)},
$asht:function(){return[P.O]},
$ash1:function(){return[P.O]},
$asfb:function(){return[P.O]},
$asL:function(){return[P.O]},
$asP:function(){return[P.O]},
$asD:function(){return[P.O]}}
H.P.prototype={$asP:null}
H.es.prototype={
gR:function(a){return new H.et(this,this.gp(this),0,null,[H.as(this,"es",0)])},
ga2:function(a){return this.gp(this)===0},
gX:function(a){if(this.gp(this)===0)throw H.m(H.d0())
return this.a6(0,0)},
a5:function(a,b){var t,s
t=this.gp(this)
for(s=0;s<t;++s){if(J.N(this.a6(0,s),b))return!0
if(t!==this.gp(this))throw H.m(new P.bX(this))}return!1},
b6:function(a,b){var t,s,r,q
t=this.gp(this)
if(b.length!==0){if(t===0)return""
s=H.p(this.a6(0,0))
if(t!==this.gp(this))throw H.m(new P.bX(this))
for(r=s,q=1;q<t;++q){r=r+b+H.p(this.a6(0,q))
if(t!==this.gp(this))throw H.m(new P.bX(this))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<t;++q){r+=H.p(this.a6(0,q))
if(t!==this.gp(this))throw H.m(new P.bX(this))}return r.charCodeAt(0)==0?r:r}},
b9:function(a,b){return this.hG(0,b)},
b7:function(a,b){return new H.db(this,b,[H.as(this,"es",0),null])},
ko:function(a,b){var t,s,r
t=this.gp(this)
if(t===0)throw H.m(H.d0())
s=this.a6(0,0)
for(r=1;r<t;++r){s=b.$2(s,this.a6(0,r))
if(t!==this.gp(this))throw H.m(new P.bX(this))}return s},
an:function(a,b){var t,s,r
t=H.a([],[H.as(this,"es",0)])
C.a.sp(t,this.gp(this))
for(s=0;s<this.gp(this);++s){r=this.a6(0,s)
if(s>=t.length)return H.B(t,s)
t[s]=r}return t},
aN:function(a){return this.an(a,!0)}}
H.o0.prototype={
gil:function(){var t=J.ct(this.a)
return t},
giK:function(){var t,s
t=J.ct(this.a)
s=this.b
if(J.cs(s,t))return t
return s},
gp:function(a){var t,s
t=J.ct(this.a)
s=this.b
if(J.tC(s,t))return 0
if(typeof s!=="number")return H.aK(s)
return t-s},
a6:function(a,b){var t=J.bO(this.giK(),b)
if(J.dk(b,0)||J.tC(t,this.gil()))throw H.m(P.d_(b,this,"index",null,null))
return J.qE(this.a,t)},
an:function(a,b){var t,s,r,q,p,o,n,m
t=this.b
s=this.a
r=J.bm(s)
q=r.gp(s)
if(typeof t!=="number")return H.aK(t)
p=q-t
if(p<0)p=0
o=this.$ti
if(b){n=H.a([],o)
C.a.sp(n,p)}else n=H.a(new Array(p),o)
for(m=0;m<p;++m){o=r.a6(s,t+m)
if(m>=n.length)return H.B(n,m)
n[m]=o
if(r.gp(s)<q)throw H.m(new P.bX(this))}return n},
aN:function(a){return this.an(a,!0)},
hY:function(a,b,c,d){var t=this.b
if(J.dk(t,0))H.bv(P.bJ(t,0,null,"start",null))}}
H.et.prototype={
gJ:function(){return this.d},
A:function(){var t,s,r,q
t=this.a
s=J.bm(t)
r=s.gp(t)
if(this.b!==r)throw H.m(new P.bX(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.a6(t,q);++this.c
return!0}}
H.h3.prototype={
gR:function(a){return new H.iU(null,J.bP(this.a),this.b,this.$ti)},
gp:function(a){return J.ct(this.a)},
ga2:function(a){return J.jL(this.a)},
gX:function(a){return this.b.$1(J.tF(this.a))},
a6:function(a,b){return this.b.$1(J.qE(this.a,b))},
$asD:function(a,b){return[b]}}
H.i6.prototype={$isP:1,
$asP:function(a,b){return[b]},
$asD:function(a,b){return[b]}}
H.iU.prototype={
A:function(){var t=this.b
if(t.A()){this.a=this.c.$1(t.gJ())
return!0}this.a=null
return!1},
gJ:function(){return this.a},
$asiO:function(a,b){return[b]}}
H.db.prototype={
gp:function(a){return J.ct(this.a)},
a6:function(a,b){return this.b.$1(J.qE(this.a,b))},
$ases:function(a,b){return[b]},
$asP:function(a,b){return[b]},
$asD:function(a,b){return[b]}}
H.bF.prototype={
gR:function(a){return new H.eC(J.bP(this.a),this.b,this.$ti)},
b7:function(a,b){return new H.h3(this,b,[H.M(this,0),null])}}
H.eC.prototype={
A:function(){var t,s
for(t=this.a,s=this.b;t.A();)if(s.$1(t.gJ())===!0)return!0
return!1},
gJ:function(){return this.a.gJ()}}
H.io.prototype={
sp:function(a,b){throw H.m(new P.aR("Cannot change the length of a fixed-length list"))},
bg:function(a,b,c,d){throw H.m(new P.aR("Cannot remove from a fixed-length list"))}}
H.om.prototype={
i:function(a,b,c){throw H.m(new P.aR("Cannot modify an unmodifiable list"))},
sp:function(a,b){throw H.m(new P.aR("Cannot change the length of an unmodifiable list"))},
a9:function(a,b,c,d,e){throw H.m(new P.aR("Cannot modify an unmodifiable list"))},
bh:function(a,b,c,d){return this.a9(a,b,c,d,0)},
bg:function(a,b,c,d){throw H.m(new P.aR("Cannot remove from an unmodifiable list"))},
cw:function(a,b,c,d){throw H.m(new P.aR("Cannot modify an unmodifiable list"))},
$isL:1,
$asL:null,
$isP:1,
$asP:null,
$isD:1,
$asD:null}
H.ht.prototype={$asL:null,$asP:null,$asD:null,$isL:1,$isP:1,$isD:1}
H.qy.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.qz.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.pw.prototype={}
H.fm.prototype={
f9:function(a,b){if(!this.f.T(0,a))return
if(this.Q.h(0,b)&&!this.y)this.y=!0
this.dN()},
kt:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.aE(0,a)
if(t.a===0){for(t=this.z;s=t.length,s!==0;){if(0>=s)return H.B(t,-1)
r=t.pop()
s=u.globalState.f.a
q=s.b
p=s.a
o=p.length
q=(q-1&o-1)>>>0
s.b=q
if(q<0||q>=o)return H.B(p,q)
p[q]=r
if(q===s.c)s.eN();++s.d}this.y=!1}this.dN()},
iU:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.ar(a),s=0;r=this.ch,s<r.length;s+=2)if(t.T(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.B(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
kr:function(a){var t,s,r
if(this.ch==null)return
for(t=J.ar(a),s=0;r=this.ch,s<r.length;s+=2)if(t.T(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.bv(new P.aR("removeRange"))
P.dd(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
hk:function(a,b){if(!this.r.T(0,a))return
this.db=b},
jC:function(a,b,c){var t=J.ar(b)
if(!t.T(b,0))t=t.T(b,1)&&!this.cy
else t=!0
if(t){J.fv(a,c)
return}t=this.cx
if(t==null){t=P.rM(null,null)
this.cx=t}t.bF(new H.pr(a,c))},
jB:function(a,b){var t
if(!this.r.T(0,a))return
t=J.ar(b)
if(!t.T(b,0))t=t.T(b,1)&&!this.cy
else t=!0
if(t){this.d9()
return}t=this.cx
if(t==null){t=P.rM(null,null)
this.cx=t}t.bF(this.gjV())},
jD:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.e6(a)
if(b!=null)P.e6(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.cu(a)
s[1]=b==null?null:J.cu(b)
for(r=new P.dS(t,t.r,null,null,[null]),r.c=t.e;r.A();)J.fv(r.d,s)},
cs:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.cj(o)
p=H.cT(o)
this.jD(q,p)
if(this.db===!0){this.d9()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.gjU()
if(this.cx!=null)for(;n=this.cx,!n.ga2(n);)this.cx.fO().$0()}return s},
fE:function(a){return this.b.m(0,a)},
eD:function(a,b){var t=this.b
if(t.as(a))throw H.m(P.kA("Registry: ports must be registered only once."))
t.i(0,a,b)},
dN:function(){var t=this.b
if(t.gp(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.d9()},
d9:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.c7(0)
for(t=this.b,s=t.gaF(t),s=s.gR(s);s.A();)s.gJ().ig()
t.c7(0)
this.c.c7(0)
u.globalState.z.aE(0,this.a)
this.dx.c7(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.B(t,p)
J.fv(q,t[p])}this.ch=null}},
gbf:function(a){return this.a},
gjU:function(){return this.d},
gjd:function(){return this.e}}
H.pr.prototype={
$0:function(){J.fv(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.p4.prototype={
jj:function(){var t=this.a
if(t.b===t.c)return
return t.fO()},
fT:function(){var t,s,r
t=this.jj()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.as(u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.ga2(s)}else s=!1
else s=!1
else s=!1
if(s)H.bv(P.kA("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.ga2(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.h0(["command","close"])
r=new H.dz(!0,new P.jz(0,null,null,null,null,null,0,[null,P.O])).bc(r)
s.toString
self.postMessage(r)}return!1}t.kk()
return!0},
f0:function(){if(self.window!=null)new H.p5(this).$0()
else for(;this.fT(););},
cF:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.f0()
else try{this.f0()}catch(r){t=H.cj(r)
s=H.cT(r)
q=u.globalState.Q
p=P.h0(["command","error","msg",H.p(t)+"\n"+H.p(s)])
p=new H.dz(!0,P.hC(null,P.O)).bc(p)
q.toString
self.postMessage(p)}}}
H.p5.prototype={
$0:function(){if(!this.a.fT())return
P.El(C.D,this)},
$S:function(){return{func:1,v:true}}}
H.eE.prototype={
kk:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.cs(this.b)}}
H.pv.prototype={}
H.lz.prototype={
$0:function(){H.y9(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.lA.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.ft(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.ft(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.dN()},
$S:function(){return{func:1,v:true}}}
H.oS.prototype={}
H.fn.prototype={
cK:function(a,b){var t,s,r
t=u.globalState.z.m(0,this.a)
if(t==null)return
s=this.b
if(s.geR())return
r=H.ER(b)
if(t.gjd()===s){s=J.bm(r)
switch(s.m(r,0)){case"pause":t.f9(s.m(r,1),s.m(r,2))
break
case"resume":t.kt(s.m(r,1))
break
case"add-ondone":t.iU(s.m(r,1),s.m(r,2))
break
case"remove-ondone":t.kr(s.m(r,1))
break
case"set-errors-fatal":t.hk(s.m(r,1),s.m(r,2))
break
case"ping":t.jC(s.m(r,1),s.m(r,2),s.m(r,3))
break
case"kill":t.jB(s.m(r,1),s.m(r,2))
break
case"getErrors":s=s.m(r,1)
t.dx.h(0,s)
break
case"stopErrors":s=s.m(r,1)
t.dx.aE(0,s)
break}return}u.globalState.f.a.bF(new H.eE(t,new H.pz(this,r),"receive"))},
T:function(a,b){if(b==null)return!1
return b instanceof H.fn&&J.N(this.b,b.b)},
gab:function(a){return this.b.gdG()}}
H.pz.prototype={
$0:function(){var t=this.a.b
if(!t.geR())t.i8(this.b)},
$S:function(){return{func:1}}}
H.hG.prototype={
cK:function(a,b){var t,s,r
t=P.h0(["command","message","port",this,"msg",b])
s=new H.dz(!0,P.hC(null,P.O)).bc(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.m(0,this.b)
if(r!=null)r.postMessage(s)}},
T:function(a,b){if(b==null)return!1
return b instanceof H.hG&&J.N(this.b,b.b)&&J.N(this.a,b.a)&&J.N(this.c,b.c)},
gab:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.bE()
s=this.a
if(typeof s!=="number")return s.bE()
r=this.c
if(typeof r!=="number")return H.aK(r)
return(t<<16^s<<8^r)>>>0}}
H.ff.prototype={
ig:function(){this.c=!0
this.b=null},
i8:function(a){if(this.c)return
this.b.$1(a)},
$isDK:1,
gdG:function(){return this.a},
geR:function(){return this.c}}
H.og.prototype={
hZ:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.bF(new H.eE(s,new H.oh(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.hL(new H.oi(this,b),0),a)}else throw H.m(new P.aR("Timer greater than 0."))}}
H.oh.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.oi.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.dD.prototype={
gab:function(a){var t=this.a
if(typeof t!=="number")return t.ho()
t=C.e.bG(t,0)^C.e.aH(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
T:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.dD){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gdG:function(){return this.a}}
H.dz.prototype={
bc:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.m(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gp(t))
t=J.ar(a)
if(!!t.$ish7)return["buffer",a]
if(!!t.$isfa)return["typed",a]
if(!!t.$iscq)return this.hf(a)
if(!!t.$isy6){r=this.ghc()
q=a.gau()
q=H.h4(q,r,H.as(q,"D",0),null)
q=P.bc(q,!0,H.as(q,"D",0))
t=t.gaF(a)
t=H.h4(t,r,H.as(t,"D",0),null)
return["map",q,P.bc(t,!0,H.as(t,"D",0))]}if(!!t.$isuV)return this.hg(a)
if(!!t.$isa0)this.fX(a)
if(!!t.$isDK)this.cH(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isfn)return this.hh(a)
if(!!t.$ishG)return this.hi(a)
if(!!t.$iseM){p=a.$static_name
if(p==null)this.cH(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isdD)return["capability",a.a]
if(!(a instanceof P.bd))this.fX(a)
return["dart",u.classIdExtractor(a),this.he(u.classFieldsExtractor(a))]},
cH:function(a,b){throw H.m(new P.aR((b==null?"Can't transmit:":b)+" "+H.p(a)))},
fX:function(a){return this.cH(a,null)},
hf:function(a){var t=this.hd(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.cH(a,"Can't serialize indexable: ")},
hd:function(a){var t,s,r
t=[]
C.a.sp(t,a.length)
for(s=0;s<a.length;++s){r=this.bc(a[s])
if(s>=t.length)return H.B(t,s)
t[s]=r}return t},
he:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.bc(a[t]))
return a},
hg:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.cH(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sp(s,t.length)
for(r=0;r<t.length;++r){q=this.bc(a[t[r]])
if(r>=s.length)return H.B(s,r)
s[r]=q}return["js-object",t,s]},
hi:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
hh:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gdG()]
return["raw sendport",a]}}
H.eD.prototype={
bI:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.m(P.ea("Bad serialized message: "+H.p(a)))
switch(C.a.gX(a)){case"ref":if(1>=a.length)return H.B(a,1)
t=a[1]
s=this.b
if(t>>>0!==t||t>=s.length)return H.B(s,t)
return s[t]
case"buffer":if(1>=a.length)return H.B(a,1)
r=a[1]
this.b.push(r)
return r
case"typed":if(1>=a.length)return H.B(a,1)
r=a[1]
this.b.push(r)
return r
case"fixed":if(1>=a.length)return H.B(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.cq(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.B(a,1)
r=a[1]
this.b.push(r)
return H.a(this.cq(r),[null])
case"mutable":if(1>=a.length)return H.B(a,1)
r=a[1]
this.b.push(r)
return this.cq(r)
case"const":if(1>=a.length)return H.B(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.cq(r),[null])
s.fixed$length=Array
return s
case"map":return this.jo(a)
case"sendport":return this.jp(a)
case"raw sendport":if(1>=a.length)return H.B(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.jn(a)
case"function":if(1>=a.length)return H.B(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.B(a,1)
return new H.dD(a[1])
case"dart":s=a.length
if(1>=s)return H.B(a,1)
q=a[1]
if(2>=s)return H.B(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.cq(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.m("couldn't deserialize: "+H.p(a))}},
cq:function(a){var t,s,r
t=J.bm(a)
s=0
while(!0){r=t.gp(a)
if(typeof r!=="number")return H.aK(r)
if(!(s<r))break
t.i(a,s,this.bI(t.m(a,s)));++s}return a},
jo:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.B(a,1)
s=a[1]
if(2>=t)return H.B(a,2)
r=a[2]
q=P.rL()
this.b.push(q)
s=J.wZ(J.tH(s,this.gjm()))
for(t=J.bm(s),p=J.bm(r),o=0;o<t.gp(s);++o)q.i(0,t.m(s,o),this.bI(p.m(r,o)))
return q},
jp:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.B(a,1)
s=a[1]
if(2>=t)return H.B(a,2)
r=a[2]
if(3>=t)return H.B(a,3)
q=a[3]
if(J.N(s,u.globalState.b)){p=u.globalState.z.m(0,r)
if(p==null)return
o=p.fE(q)
if(o==null)return
n=new H.fn(o,r)}else n=new H.hG(s,q,r)
this.b.push(n)
return n},
jn:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.B(a,1)
s=a[1]
if(2>=t)return H.B(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.bm(s)
p=J.bm(r)
o=0
while(!0){n=t.gp(s)
if(typeof n!=="number")return H.aK(n)
if(!(o<n))break
q[t.m(s,o)]=this.bI(p.m(r,o));++o}return q}}
H.kj.prototype={
ga2:function(a){return this.gp(this)===0},
v:function(a){return P.uY(this)},
i:function(a,b,c){return H.xu()}}
H.kk.prototype={
gp:function(a){return this.a},
as:function(a){if(typeof a!=="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
m:function(a,b){if(!this.as(b))return
return this.eM(b)},
eM:function(a){return this.b[a]},
d8:function(a,b){var t,s,r,q
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.eM(q))}}}
H.n5.prototype={}
H.oj.prototype={
br:function(a){var t,s,r
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
H.iY.prototype={
v:function(a){var t=this.b
if(t==null)return"NullError: "+H.p(this.a)
return"NullError: method not found: '"+H.p(t)+"' on null"}}
H.lO.prototype={
v:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.p(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.p(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.p(this.a)+")"}}
H.ol.prototype={
v:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.i7.prototype={
gbs:function(){return this.b}}
H.qA.prototype={
$1:function(a){if(!!J.ar(a).$iseh)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.jA.prototype={
v:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.qn.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.qo.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.qp.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.qq.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.qr.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.eM.prototype={
v:function(a){return"Closure '"+H.rU(this).trim()+"'"},
gkN:function(){return this},
$D:null}
H.o8.prototype={}
H.nH.prototype={
v:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.fA.prototype={
T:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.fA))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gab:function(a){var t,s
t=this.c
if(t==null)s=H.eu(this.a)
else s=typeof t!=="object"?J.dB(t):H.eu(t)
t=H.eu(this.b)
if(typeof s!=="number")return s.kQ()
return(s^t)>>>0},
v:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.p(this.d)+"' of "+H.mY(t)}}
H.ke.prototype={
v:function(a){return this.a}}
H.nd.prototype={
v:function(a){return"RuntimeError: "+H.p(this.a)}}
H.dx.prototype={
v:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gab:function(a){return J.dB(this.a)},
T:function(a,b){if(b==null)return!1
return b instanceof H.dx&&J.N(this.a,b.a)}}
H.q.prototype={
gp:function(a){return this.a},
ga2:function(a){return this.a===0},
gau:function(){return new H.m1(this,[H.M(this,0)])},
gaF:function(a){return H.h4(this.gau(),new H.lN(this),H.M(this,0),H.M(this,1))},
as:function(a){var t,s
if(typeof a==="string"){t=this.b
if(t==null)return!1
return this.eJ(t,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){s=this.c
if(s==null)return!1
return this.eJ(s,a)}else return this.jP(a)},
jP:function(a){var t=this.d
if(t==null)return!1
return this.cA(this.cQ(t,this.cz(a)),a)>=0},
a4:function(a,b){b.d8(0,new H.lM(this))},
m:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.cn(t,b)
return s==null?null:s.gbL()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.cn(r,b)
return s==null?null:s.gbL()}else return this.jQ(b)},
jQ:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.cQ(t,this.cz(a))
r=this.cA(s,a)
if(r<0)return
return s[r].gbL()},
i:function(a,b,c){var t,s
if(typeof b==="string"){t=this.b
if(t==null){t=this.dI()
this.b=t}this.eC(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.dI()
this.c=s}this.eC(s,b,c)}else this.jS(b,c)},
jS:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=this.dI()
this.d=t}s=this.cz(a)
r=this.cQ(t,s)
if(r==null)this.dM(t,s,[this.dJ(a,b)])
else{q=this.cA(r,a)
if(q>=0)r[q].sbL(b)
else r.push(this.dJ(a,b))}},
aE:function(a,b){if(typeof b==="string")return this.eZ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.eZ(this.c,b)
else return this.jR(b)},
jR:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.cQ(t,this.cz(a))
r=this.cA(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.f6(q)
return q.gbL()},
c7:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
d8:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.m(new P.bX(this))
t=t.c}},
eC:function(a,b,c){var t=this.cn(a,b)
if(t==null)this.dM(a,b,this.dJ(b,c))
else t.sbL(c)},
eZ:function(a,b){var t
if(a==null)return
t=this.cn(a,b)
if(t==null)return
this.f6(t)
this.eK(a,b)
return t.gbL()},
dJ:function(a,b){var t,s
t=new H.m0(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
f6:function(a){var t,s
t=a.giC()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
cz:function(a){return J.dB(a)&0x3ffffff},
cA:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.N(a[s].gfv(),b))return s
return-1},
v:function(a){return P.uY(this)},
cn:function(a,b){return a[b]},
cQ:function(a,b){return a[b]},
dM:function(a,b,c){a[b]=c},
eK:function(a,b){delete a[b]},
eJ:function(a,b){return this.cn(a,b)!=null},
dI:function(){var t=Object.create(null)
this.dM(t,"<non-identifier-key>",t)
this.eK(t,"<non-identifier-key>")
return t},
$isy6:1}
H.lN.prototype={
$1:function(a){return this.a.m(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.lM.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return H.d6(function(a,b){return{func:1,args:[a,b]}},this.a,"q")}}
H.m0.prototype={
gfv:function(){return this.a},
gbL:function(){return this.b},
giC:function(){return this.d},
sbL:function(a){return this.b=a}}
H.m1.prototype={
gp:function(a){return this.a.a},
ga2:function(a){return this.a.a===0},
gR:function(a){var t,s
t=this.a
s=new H.m2(t,t.r,null,null,this.$ti)
s.c=t.e
return s},
a5:function(a,b){return this.a.as(b)}}
H.m2.prototype={
gJ:function(){return this.d},
A:function(){var t=this.a
if(this.b!==t.r)throw H.m(new P.bX(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.qj.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.qk.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.v]}}}
H.ql.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.v]}}}
H.iS.prototype={
v:function(a){return"RegExp/"+this.a+"/"},
geT:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.uW(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
im:function(a,b){var t,s
t=this.geT()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return new H.py(this,s)}}
H.py.prototype={
cJ:function(a){var t=this.b
if(a>>>0!==a||a>=t.length)return H.B(t,a)
return t[a]},
m:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.B(t,b)
return t[b]},
$isf8:1}
H.oL.prototype={
gJ:function(){return this.d},
A:function(){var t,s,r,q
t=this.b
if(t==null)return!1
s=this.c
if(s<=t.length){r=this.a.im(t,s)
if(r!=null){this.d=r
t=r.b
s=t.index
q=s+t[0].length
this.c=s===q?q+1:q
return!0}}this.d=null
this.b=null
return!1}}
H.jj.prototype={
m:function(a,b){return this.cJ(b)},
cJ:function(a){if(a!==0)throw H.m(P.hl(a,null,null))
return this.c},
$isf8:1}
H.pQ.prototype={
gR:function(a){return new H.pR(this.a,this.b,this.c,null)},
gX:function(a){var t,s,r
t=this.a
s=this.b
r=t.indexOf(s,this.c)
if(r>=0)return new H.jj(r,t,s)
throw H.m(H.d0())},
$asD:function(){return[P.f8]}}
H.pR.prototype={
A:function(){var t,s,r,q,p,o,n
t=this.c
s=this.b
r=s.length
q=this.a
p=q.length
if(t+r>p){this.d=null
return!1}o=q.indexOf(s,t)
if(o<0){this.c=p+1
this.d=null
return!1}n=o+r
this.d=new H.jj(o,q,s)
this.c=n===this.c?n+1:n
return!0},
gJ:function(){return this.d}}
H.h7.prototype={
gac:function(a){return C.ab},
$ish7:1,
$isdC:1}
H.fa.prototype={
iy:function(a,b,c,d){if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(P.fx(b,d,"Invalid list position"))
else throw H.m(P.bJ(b,0,c,d,null))},
eE:function(a,b,c,d){if(b>>>0!==b||b>c)this.iy(a,b,c,d)},
$isfa:1}
H.mr.prototype={
gac:function(a){return C.ac}}
H.iV.prototype={
gp:function(a){return a.length},
f4:function(a,b,c,d,e){var t,s,r
t=a.length
this.eE(a,b,t,"start")
this.eE(a,c,t,"end")
if(typeof b!=="number")return b.bC()
if(typeof c!=="number")return H.aK(c)
if(b>c)throw H.m(P.bJ(b,0,c,null,null))
s=c-b
if(typeof e!=="number")return e.a7()
if(e<0)throw H.m(P.ea(e))
r=d.length
if(r-e<s)throw H.m(new P.ca("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$iscC:1,
$ascC:function(){},
$iscq:1,
$ascq:function(){}}
H.h8.prototype={
m:function(a,b){if(b>>>0!==b||b>=a.length)H.bv(H.c6(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.bv(H.c6(a,b))
a[b]=c},
a9:function(a,b,c,d,e){if(!!J.ar(d).$ish8){this.f4(a,b,c,d,e)
return}this.eA(a,b,c,d,e)},
bh:function(a,b,c,d){return this.a9(a,b,c,d,0)}}
H.ha.prototype={
$ascC:function(){},
$ascq:function(){},
$asL:function(){return[P.U]},
$asP:function(){return[P.U]},
$asD:function(){return[P.U]},
$isL:1,
$isP:1,
$isD:1}
H.hc.prototype={
$ascC:function(){},
$ascq:function(){},
$asL:function(){return[P.U]},
$asP:function(){return[P.U]},
$asD:function(){return[P.U]}}
H.h9.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.bv(H.c6(a,b))
a[b]=c},
a9:function(a,b,c,d,e){if(!!J.ar(d).$ish9){this.f4(a,b,c,d,e)
return}this.eA(a,b,c,d,e)},
bh:function(a,b,c,d){return this.a9(a,b,c,d,0)},
$isL:1,
$asL:function(){return[P.O]},
$isP:1,
$asP:function(){return[P.O]},
$isD:1,
$asD:function(){return[P.O]}}
H.hb.prototype={
$ascC:function(){},
$ascq:function(){},
$asL:function(){return[P.O]},
$asP:function(){return[P.O]},
$asD:function(){return[P.O]},
$isL:1,
$isP:1,
$isD:1}
H.hd.prototype={
$ascC:function(){},
$ascq:function(){},
$asL:function(){return[P.O]},
$asP:function(){return[P.O]},
$asD:function(){return[P.O]}}
H.ms.prototype={
gac:function(a){return C.ad},
$isL:1,
$asL:function(){return[P.U]},
$isP:1,
$asP:function(){return[P.U]},
$isD:1,
$asD:function(){return[P.U]}}
H.mt.prototype={
gac:function(a){return C.ae},
$isL:1,
$asL:function(){return[P.U]},
$isP:1,
$asP:function(){return[P.U]},
$isD:1,
$asD:function(){return[P.U]}}
H.mu.prototype={
gac:function(a){return C.af},
m:function(a,b){if(b>>>0!==b||b>=a.length)H.bv(H.c6(a,b))
return a[b]},
$isL:1,
$asL:function(){return[P.O]},
$isP:1,
$asP:function(){return[P.O]},
$isD:1,
$asD:function(){return[P.O]}}
H.mv.prototype={
gac:function(a){return C.ag},
m:function(a,b){if(b>>>0!==b||b>=a.length)H.bv(H.c6(a,b))
return a[b]},
$isL:1,
$asL:function(){return[P.O]},
$isP:1,
$asP:function(){return[P.O]},
$isD:1,
$asD:function(){return[P.O]}}
H.mw.prototype={
gac:function(a){return C.ah},
m:function(a,b){if(b>>>0!==b||b>=a.length)H.bv(H.c6(a,b))
return a[b]},
$isL:1,
$asL:function(){return[P.O]},
$isP:1,
$asP:function(){return[P.O]},
$isD:1,
$asD:function(){return[P.O]}}
H.mx.prototype={
gac:function(a){return C.al},
m:function(a,b){if(b>>>0!==b||b>=a.length)H.bv(H.c6(a,b))
return a[b]},
$isL:1,
$asL:function(){return[P.O]},
$isP:1,
$asP:function(){return[P.O]},
$isD:1,
$asD:function(){return[P.O]}}
H.my.prototype={
gac:function(a){return C.am},
m:function(a,b){if(b>>>0!==b||b>=a.length)H.bv(H.c6(a,b))
return a[b]},
$isL:1,
$asL:function(){return[P.O]},
$isP:1,
$asP:function(){return[P.O]},
$isD:1,
$asD:function(){return[P.O]}}
H.iW.prototype={
gac:function(a){return C.an},
gp:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)H.bv(H.c6(a,b))
return a[b]},
$isL:1,
$asL:function(){return[P.O]},
$isP:1,
$asP:function(){return[P.O]},
$isD:1,
$asD:function(){return[P.O]}}
H.he.prototype={
gac:function(a){return C.ao},
gp:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)H.bv(H.c6(a,b))
return a[b]},
$ishe:1,
$ise4:1,
$isL:1,
$asL:function(){return[P.O]},
$isP:1,
$asP:function(){return[P.O]},
$isD:1,
$asD:function(){return[P.O]}}
P.oO.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.oN.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.oP.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.oQ.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.ju.prototype={
fi:function(a,b){if(a==null)a=new P.hg()
if(this.a.a!==0)throw H.m(new P.ca("Future already completed"))
$.b7.toString
this.bk(a,b)},
fh:function(a){return this.fi(a,null)}}
P.oM.prototype={
ja:function(a,b){var t=this.a
if(t.a!==0)throw H.m(new P.ca("Future already completed"))
t.ib(b)},
bk:function(a,b){this.a.ic(a,b)}}
P.jw.prototype={
giQ:function(){return this.b.b},
gfq:function(){return(this.c&1)!==0},
gjG:function(){return(this.c&2)!==0},
gfp:function(){return this.c===8},
jE:function(a){return this.b.b.el(this.d,a)},
k0:function(a){if(this.c!==6)return!0
return this.b.b.el(this.d,J.fu(a))},
jA:function(a){var t,s,r
t=this.e
s=J.aW(a)
r=this.b.b
if(H.ft(t,{func:1,args:[,,]}))return r.kC(t,s.gbl(a),a.gbs())
else return r.el(t,s.gbl(a))},
jF:function(){return this.b.b.fR(this.d)},
gdK:function(){return this.a}}
P.cy.prototype={
giz:function(){return this.a===2},
gdH:function(){return this.a>=4},
fU:function(a,b){var t=$.b7
if(t!==C.h){t.toString
if(b!=null)b=P.w1(b,t)}return this.iM(a,b)},
eo:function(a){return this.fU(a,null)},
iM:function(a,b){var t,s
t=new P.cy(0,$.b7,null,[null])
s=b==null?1:3
this.dz(new P.jw(null,t,s,a,b,[H.M(this,0),null]))
return t},
de:function(a){var t,s
t=$.b7
s=new P.cy(0,t,null,this.$ti)
if(t!==C.h)t.toString
t=H.M(this,0)
this.dz(new P.jw(null,s,8,a,null,[t,t]))
return s},
dz:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gdH()){s.dz(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.fq(null,null,t,new P.pa(this,a))}},
eY:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gdK()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gdH()){p.eY(a)
return}this.a=p.a
this.c=p.c}t.a=this.cV(a)
s=this.b
s.toString
P.fq(null,null,s,new P.pi(t,this))}},
cU:function(){var t=this.c
this.c=null
return this.cV(t)},
cV:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gdK()
t.a=s}return s},
bQ:function(a){var t,s
t=this.$ti
if(H.eH(a,"$isdN",t,"$asdN"))if(H.eH(a,"$iscy",t,null))P.pd(a,this)
else P.vP(a,this)
else{s=this.cU()
this.a=4
this.c=a
P.fl(this,s)}},
bk:function(a,b){var t=this.cU()
this.a=8
this.c=new P.eK(a,b)
P.fl(this,t)},
eI:function(a){return this.bk(a,null)},
ib:function(a){var t
if(H.eH(a,"$isdN",this.$ti,"$asdN")){this.ie(a)
return}this.a=1
t=this.b
t.toString
P.fq(null,null,t,new P.pc(this,a))},
ie:function(a){var t
if(H.eH(a,"$iscy",this.$ti,null)){if(a.a===8){this.a=1
t=this.b
t.toString
P.fq(null,null,t,new P.ph(this,a))}else P.pd(a,this)
return}P.vP(a,this)},
ic:function(a,b){var t
this.a=1
t=this.b
t.toString
P.fq(null,null,t,new P.pb(this,a,b))},
i4:function(a,b){this.a=4
this.c=a},
$isdN:1,
gcW:function(){return this.a},
giE:function(){return this.c}}
P.pa.prototype={
$0:function(){P.fl(this.a,this.b)},
$S:function(){return{func:1}}}
P.pi.prototype={
$0:function(){P.fl(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.pe.prototype={
$1:function(a){var t=this.a
t.a=0
t.bQ(a)},
$S:function(){return{func:1,args:[,]}}}
P.pf.prototype={
$2:function(a,b){this.a.bk(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.pg.prototype={
$0:function(){this.a.bk(this.b,this.c)},
$S:function(){return{func:1}}}
P.pc.prototype={
$0:function(){var t,s
t=this.a
s=t.cU()
t.a=4
t.c=this.b
P.fl(t,s)},
$S:function(){return{func:1}}}
P.ph.prototype={
$0:function(){P.pd(this.b,this.a)},
$S:function(){return{func:1}}}
P.pb.prototype={
$0:function(){this.a.bk(this.b,this.c)},
$S:function(){return{func:1}}}
P.pl.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.jF()}catch(q){s=H.cj(q)
r=H.cT(q)
if(this.c){p=J.fu(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.eK(s,r)
o.a=!0
return}if(!!J.ar(t).$isdN){if(t instanceof P.cy&&t.gcW()>=4){if(t.gcW()===8){p=this.b
p.b=t.giE()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.eo(new P.pm(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.pm.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.pk.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.jE(this.c)}catch(r){t=H.cj(r)
s=H.cT(r)
q=this.a
q.b=new P.eK(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.pj.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.k0(t)===!0&&q.e!=null){p=this.b
p.b=q.jA(t)
p.a=!1}}catch(o){s=H.cj(o)
r=H.cT(o)
q=this.a
p=J.fu(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.eK(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.jt.prototype={}
P.d4.prototype={
b7:function(a,b){return new P.px(b,this,[H.as(this,"d4",0),null])},
a5:function(a,b){var t,s
t={}
s=new P.cy(0,$.b7,null,[P.cM])
t.a=null
t.a=this.bz(new P.nN(t,this,b,s),!0,new P.nO(s),s.gc3())
return s},
gp:function(a){var t,s
t={}
s=new P.cy(0,$.b7,null,[P.O])
t.a=0
this.bz(new P.nV(t),!0,new P.nW(t,s),s.gc3())
return s},
ga2:function(a){var t,s
t={}
s=new P.cy(0,$.b7,null,[P.cM])
t.a=null
t.a=this.bz(new P.nT(t,s),!0,new P.nU(s),s.gc3())
return s},
aN:function(a){var t,s,r
t=H.as(this,"d4",0)
s=H.a([],[t])
r=new P.cy(0,$.b7,null,[[P.L,t]])
this.bz(new P.nX(this,s),!0,new P.nY(s,r),r.gc3())
return r},
gX:function(a){var t,s
t={}
s=new P.cy(0,$.b7,null,[H.as(this,"d4",0)])
t.a=null
t.a=this.bz(new P.nR(t,this,s),!0,new P.nS(s),s.gc3())
return s},
a6:function(a,b){var t,s
t={}
if(typeof b!=="number"||Math.floor(b)!==b||b<0)throw H.m(P.ea(b))
s=new P.cy(0,$.b7,null,[H.as(this,"d4",0)])
t.a=null
t.b=0
t.a=this.bz(new P.nP(t,this,b,s),!0,new P.nQ(t,this,b,s),s.gc3())
return s}}
P.nN.prototype={
$1:function(a){var t,s
t=this.a
s=this.d
P.EY(new P.nL(this.c,a),new P.nM(t,s),P.EQ(t.a,s))},
$S:function(){return H.d6(function(a){return{func:1,args:[a]}},this.b,"d4")}}
P.nL.prototype={
$0:function(){return J.N(this.b,this.a)},
$S:function(){return{func:1}}}
P.nM.prototype={
$1:function(a){if(a===!0)P.q4(this.a.a,this.b,!0)},
$S:function(){return{func:1,args:[P.cM]}}}
P.nO.prototype={
$0:function(){this.a.bQ(!1)},
$S:function(){return{func:1}}}
P.nV.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.nW.prototype={
$0:function(){this.b.bQ(this.a.a)},
$S:function(){return{func:1}}}
P.nT.prototype={
$1:function(a){P.q4(this.a.a,this.b,!1)},
$S:function(){return{func:1,args:[,]}}}
P.nU.prototype={
$0:function(){this.a.bQ(!0)},
$S:function(){return{func:1}}}
P.nX.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.d6(function(a){return{func:1,args:[a]}},this.a,"d4")}}
P.nY.prototype={
$0:function(){this.b.bQ(this.a)},
$S:function(){return{func:1}}}
P.nR.prototype={
$1:function(a){P.q4(this.a.a,this.c,a)},
$S:function(){return H.d6(function(a){return{func:1,args:[a]}},this.b,"d4")}}
P.nS.prototype={
$0:function(){var t,s,r,q
try{r=H.d0()
throw H.m(r)}catch(q){t=H.cj(q)
s=H.cT(q)
P.ES(this.a,t,s)}},
$S:function(){return{func:1}}}
P.nP.prototype={
$1:function(a){var t,s
t=this.a
s=t.b
if(this.c===s){P.q4(t.a,this.d,a)
return}t.b=s+1},
$S:function(){return H.d6(function(a){return{func:1,args:[a]}},this.b,"d4")}}
P.nQ.prototype={
$0:function(){this.d.eI(P.d_(this.c,this.b,"index",null,this.a.b))},
$S:function(){return{func:1}}}
P.nK.prototype={}
P.dh.prototype={
ed:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.fe()
if((t&4)===0&&(this.e&32)===0)this.eO(this.geW())},
fM:function(a){return this.ed(a,null)},
fQ:function(){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.ga2(t)}else t=!1
if(t)this.r.dk(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.eO(this.geX())}}}},
cY:function(){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.dB()
t=this.f
return t==null?$.$get$fS():t},
dB:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.fe()
if((this.e&32)===0)this.r=null
this.f=this.eV()},
cO:function(a){var t=this.e
if((t&8)!==0)return
if(t<32)this.f1(a)
else this.dA(new P.oZ(a,null,[H.as(this,"dh",0)]))},
cN:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.f3(a,b)
else this.dA(new P.p0(a,b,null))},
ia:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.f2()
else this.dA(C.S)},
cS:function(){},
cT:function(){},
eV:function(){return},
dA:function(a){var t,s
t=this.r
if(t==null){t=new P.pP(null,null,0,[H.as(this,"dh",0)])
this.r=t}t.h(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.dk(this)}},
f1:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.em(this.a,a)
this.e=(this.e&4294967263)>>>0
this.dC((t&4)!==0)},
f3:function(a,b){var t,s
t=this.e
s=new P.oU(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.dB()
t=this.f
if(!!J.ar(t).$isdN&&t!==$.$get$fS())t.de(s)
else s.$0()}else{s.$0()
this.dC((t&4)!==0)}},
f2:function(){var t,s
t=new P.oT(this)
this.dB()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.ar(s).$isdN&&s!==$.$get$fS())s.de(t)
else t.$0()},
eO:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.dC((t&4)!==0)},
dC:function(a){var t,s
if((this.e&64)!==0){t=this.r
t=t.ga2(t)}else t=!1
if(t){t=(this.e&4294967231)>>>0
this.e=t
if((t&4)!==0)if(t<128){t=this.r
t=t==null||t.ga2(t)}else t=!1
else t=!1
if(t)this.e=(this.e&4294967291)>>>0}for(;!0;a=s){t=this.e
if((t&8)!==0){this.r=null
return}s=(t&4)!==0
if(a===s)break
this.e=(t^32)>>>0
if(s)this.cS()
else this.cT()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.dk(this)},
i0:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.w1(b,t)
this.c=c},
gcW:function(){return this.e}}
P.oU.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.ft(s,{func:1,args:[P.bd,P.e3]})
q=t.d
p=this.b
o=t.b
if(r)q.kD(o,p,this.c)
else q.em(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.oT.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.fS(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.jv.prototype={
gcD:function(){return this.a},
scD:function(a){return this.a=a}}
P.oZ.prototype={
ee:function(a){a.f1(this.b)},
ga3:function(a){return this.b}}
P.p0.prototype={
ee:function(a){a.f3(this.b,this.c)},
$asjv:function(){},
gbl:function(a){return this.b},
gbs:function(){return this.c}}
P.p_.prototype={
ee:function(a){a.f2()},
gcD:function(){return},
scD:function(a){throw H.m(new P.ca("No events after a done."))}}
P.pA.prototype={
dk:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.ws(new P.pB(this,a))
this.a=1},
fe:function(){if(this.a===1)this.a=3},
gcW:function(){return this.a}}
P.pB.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gcD()
t.b=q
if(q==null)t.c=null
r.ee(this.b)},
$S:function(){return{func:1}}}
P.pP.prototype={
ga2:function(a){return this.c==null},
h:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.scD(b)
this.c=b}}}
P.q3.prototype={
$0:function(){return this.a.bk(this.b,this.c)},
$S:function(){return{func:1}}}
P.q2.prototype={
$2:function(a,b){P.EP(this.a,this.b,a,b)},
$S:function(){return{func:1,args:[,P.e3]}}}
P.q5.prototype={
$0:function(){return this.a.bQ(this.b)},
$S:function(){return{func:1}}}
P.hw.prototype={
bz:function(a,b,c,d){return this.ik(a,d,c,!0===b)},
fD:function(a,b,c){return this.bz(a,null,b,c)},
ik:function(a,b,c,d){return P.Et(this,a,b,c,d,H.as(this,"hw",0),H.as(this,"hw",1))},
eP:function(a,b){b.cO(a)},
iw:function(a,b,c){c.cN(a,b)},
$asd4:function(a,b){return[b]}}
P.hx.prototype={
cO:function(a){if((this.e&2)!==0)return
this.hL(a)},
cN:function(a,b){if((this.e&2)!==0)return
this.hM(a,b)},
cS:function(){var t=this.y
if(t==null)return
t.fM(0)},
cT:function(){var t=this.y
if(t==null)return
t.fQ()},
eV:function(){var t=this.y
if(t!=null){this.y=null
return t.cY()}return},
ir:function(a){this.x.eP(a,this)},
iv:function(a,b){this.x.iw(a,b,this)},
it:function(){this.ia()},
i3:function(a,b,c,d,e,f,g){this.y=this.x.a.fD(this.giq(),this.gis(),this.giu())},
$asdh:function(a,b){return[b]}}
P.px.prototype={
eP:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.cj(q)
r=H.cT(q)
P.EO(b,s,r)
return}b.cO(t)}}
P.eK.prototype={
v:function(a){return H.p(this.a)},
$iseh:1,
gbl:function(a){return this.a},
gbs:function(){return this.b}}
P.q1.prototype={}
P.qa.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.hg()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.m(t)
r=H.m(t)
r.stack=J.cu(s)
throw r},
$S:function(){return{func:1}}}
P.pD.prototype={
fS:function(a){var t,s,r,q
try{if(C.h===$.b7){r=a.$0()
return r}r=P.w2(null,null,this,a)
return r}catch(q){t=H.cj(q)
s=H.cT(q)
r=P.jF(null,null,this,t,s)
return r}},
em:function(a,b){var t,s,r,q
try{if(C.h===$.b7){r=a.$1(b)
return r}r=P.w4(null,null,this,a,b)
return r}catch(q){t=H.cj(q)
s=H.cT(q)
r=P.jF(null,null,this,t,s)
return r}},
kD:function(a,b,c){var t,s,r,q
try{if(C.h===$.b7){r=a.$2(b,c)
return r}r=P.w3(null,null,this,a,b,c)
return r}catch(q){t=H.cj(q)
s=H.cT(q)
r=P.jF(null,null,this,t,s)
return r}},
dS:function(a,b){if(b)return new P.pE(this,a)
else return new P.pF(this,a)},
j7:function(a,b){return new P.pG(this,a)},
m:function(a,b){return},
fR:function(a){if($.b7===C.h)return a.$0()
return P.w2(null,null,this,a)},
el:function(a,b){if($.b7===C.h)return a.$1(b)
return P.w4(null,null,this,a,b)},
kC:function(a,b,c){if($.b7===C.h)return a.$2(b,c)
return P.w3(null,null,this,a,b,c)}}
P.pE.prototype={
$0:function(){return this.a.fS(this.b)},
$S:function(){return{func:1}}}
P.pF.prototype={
$0:function(){return this.a.fR(this.b)},
$S:function(){return{func:1}}}
P.pG.prototype={
$1:function(a){return this.a.em(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.po.prototype={
gp:function(a){return this.a},
ga2:function(a){return this.a===0},
gaF:function(a){var t=H.M(this,0)
return H.h4(new P.jx(this,[t]),new P.pp(this),t,H.M(this,1))},
as:function(a){var t,s
if(typeof a==="string"&&a!=="__proto__"){t=this.b
return t==null?!1:t[a]!=null}else if(typeof a==="number"&&(a&0x3ffffff)===a){s=this.c
return s==null?!1:s[a]!=null}else return this.ij(a)},
ij:function(a){var t=this.d
if(t==null)return!1
return this.bu(t[this.bt(a)],a)>=0},
m:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.io(b)},
io:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.bt(a)]
r=this.bu(s,a)
return r<0?null:s[r+1]},
i:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.t6()
this.b=t}this.eG(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.t6()
this.c=s}this.eG(s,b,c)}else this.iH(b,c)},
iH:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.t6()
this.d=t}s=this.bt(a)
r=t[s]
if(r==null){P.t7(t,s,[a,b]);++this.a
this.e=null}else{q=this.bu(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
aE:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cm(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cm(this.c,b)
else return this.dL(b)},
dL:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.bt(a)]
r=this.bu(s,a)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
d8:function(a,b){var t,s,r,q
t=this.cP()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.m(0,q))
if(t!==this.e)throw H.m(new P.bX(this))}},
cP:function(){var t,s,r,q,p,o,n,m,l,k,j,i
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
eG:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.t7(a,b,c)},
cm:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.Eu(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
bt:function(a){return J.dB(a)&0x3ffffff},
bu:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.N(a[s],b))return s
return-1}}
P.pp.prototype={
$1:function(a){return this.a.m(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.jx.prototype={
gp:function(a){return this.a.a},
ga2:function(a){return this.a.a===0},
gR:function(a){var t=this.a
return new P.hA(t,t.cP(),0,null,this.$ti)},
a5:function(a,b){return this.a.as(b)}}
P.hA.prototype={
gJ:function(){return this.d},
A:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.m(new P.bX(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.jz.prototype={
cz:function(a){return H.FB(a)&0x3ffffff},
cA:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].gfv()
if(r==null?b==null:r===b)return s}return-1}}
P.jy.prototype={
gR:function(a){var t=new P.dS(this,this.r,null,null,[null])
t.c=this.e
return t},
gp:function(a){return this.a},
ga2:function(a){return this.a===0},
a5:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.ii(b)},
ii:function(a){var t=this.d
if(t==null)return!1
return this.bu(t[this.bt(a)],a)>=0},
fE:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.a5(0,a)?a:null
else return this.iA(a)},
iA:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.bt(a)]
r=this.bu(s,a)
if(r<0)return
return J.ck(s,r).geL()},
gX:function(a){var t=this.e
if(t==null)throw H.m(new P.ca("No elements"))
return t.a},
h:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.eF(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.eF(r,b)}else return this.bF(b)},
bF:function(a){var t,s,r
t=this.d
if(t==null){t=P.Ex()
this.d=t}s=this.bt(a)
r=t[s]
if(r==null)t[s]=[this.dD(a)]
else{if(this.bu(r,a)>=0)return!1
r.push(this.dD(a))}return!0},
aE:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cm(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cm(this.c,b)
else return this.dL(b)},
dL:function(a){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.bt(a)]
r=this.bu(s,a)
if(r<0)return!1
this.eH(s.splice(r,1)[0])
return!0},
c7:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
eF:function(a,b){if(a[b]!=null)return!1
a[b]=this.dD(b)
return!0},
cm:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.eH(t)
delete a[b]
return!0},
dD:function(a){var t,s
t=new P.pt(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
eH:function(a){var t,s
t=a.gih()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
bt:function(a){return J.dB(a)&0x3ffffff},
bu:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.N(a[s].geL(),b))return s
return-1},
$isP:1,
$asP:null,
$isD:1,
$asD:null}
P.pt.prototype={
geL:function(){return this.a},
gih:function(){return this.c}}
P.dS.prototype={
gJ:function(){return this.d},
A:function(){var t=this.a
if(this.b!==t.r)throw H.m(new P.bX(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.jn.prototype={
gp:function(a){return this.a.length},
m:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.B(t,b)
return t[b]}}
P.pq.prototype={}
P.dO.prototype={
b7:function(a,b){return H.h4(this,b,H.as(this,"dO",0),null)},
b9:function(a,b){return new H.bF(this,b,[H.as(this,"dO",0)])},
a5:function(a,b){var t
for(t=this.gR(this);t.A();)if(J.N(t.gJ(),b))return!0
return!1},
an:function(a,b){return P.bc(this,!0,H.as(this,"dO",0))},
aN:function(a){return this.an(a,!0)},
gp:function(a){var t,s
t=this.gR(this)
for(s=0;t.A();)++s
return s},
ga2:function(a){return!this.gR(this).A()},
gX:function(a){var t=this.gR(this)
if(!t.A())throw H.m(H.d0())
return t.gJ()},
a6:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(P.qI("index"))
if(b<0)H.bv(P.bJ(b,0,null,"index",null))
for(t=this.gR(this),s=0;t.A();){r=t.gJ()
if(b===s)return r;++s}throw H.m(P.d_(b,this,"index",null,s))},
v:function(a){return P.rG(this,"(",")")},
$isD:1,
$asD:null}
P.iN.prototype={}
P.h1.prototype={}
P.fb.prototype={$asL:null,$asP:null,$asD:null,$isL:1,$isP:1,$isD:1}
P.c3.prototype={
gR:function(a){return new H.et(a,this.gp(a),0,null,[H.as(a,"c3",0)])},
a6:function(a,b){return this.m(a,b)},
ga2:function(a){return this.gp(a)===0},
gX:function(a){if(this.gp(a)===0)throw H.m(H.d0())
return this.m(a,0)},
a5:function(a,b){var t,s
t=this.gp(a)
for(s=0;s<this.gp(a);++s){if(J.N(this.m(a,s),b))return!0
if(t!==this.gp(a))throw H.m(new P.bX(a))}return!1},
b9:function(a,b){return new H.bF(a,b,[H.as(a,"c3",0)])},
b7:function(a,b){return new H.db(a,b,[H.as(a,"c3",0),null])},
ey:function(a,b){return H.vw(a,b,null,H.as(a,"c3",0))},
an:function(a,b){var t,s,r
t=H.a([],[H.as(a,"c3",0)])
C.a.sp(t,this.gp(a))
for(s=0;s<this.gp(a);++s){r=this.m(a,s)
if(s>=t.length)return H.B(t,s)
t[s]=r}return t},
aN:function(a){return this.an(a,!0)},
aE:function(a,b){var t
for(t=0;t<this.gp(a);++t)if(J.N(this.m(a,t),b)){this.a9(a,t,this.gp(a)-1,a,t+1)
this.sp(a,this.gp(a)-1)
return!0}return!1},
cw:function(a,b,c,d){var t
P.dd(b,c,this.gp(a),null,null,null)
for(t=b;t<c;++t)this.i(a,t,d)},
a9:function(a,b,c,d,e){var t,s,r,q,p,o
P.dd(b,c,this.gp(a),null,null,null)
if(typeof c!=="number")return c.aP()
if(typeof b!=="number")return H.aK(b)
t=c-b
if(t===0)return
if(J.dk(e,0))H.bv(P.bJ(e,0,null,"skipCount",null))
if(H.eH(d,"$isL",[H.as(a,"c3",0)],"$asL")){s=e
r=d}else{r=J.wX(d,e).an(0,!1)
s=0}q=J.hM(s)
p=J.bm(r)
if(J.cs(q.ao(s,t),p.gp(r)))throw H.m(H.uU())
if(q.a7(s,b))for(o=t-1;o>=0;--o)this.i(a,b+o,p.m(r,q.ao(s,o)))
else for(o=0;o<t;++o)this.i(a,b+o,p.m(r,q.ao(s,o)))},
bh:function(a,b,c,d){return this.a9(a,b,c,d,0)},
bg:function(a,b,c,d){var t,s,r,q,p
P.dd(b,c,this.gp(a),null,null,null)
d=C.d.aN(d)
if(typeof c!=="number")return c.aP()
t=c-b
s=d.length
r=b+s
if(t>=s){q=t-s
p=this.gp(a)-q
this.bh(a,b,r,d)
if(q!==0){this.a9(a,r,p,a,c)
this.sp(a,p)}}else{p=this.gp(a)+(s-t)
this.sp(a,p)
this.a9(a,r,p,a,c)
this.bh(a,b,r,d)}},
cf:function(a,b,c){var t
if(c>=this.gp(a))return-1
if(c<0)c=0
for(t=c;t<this.gp(a);++t)if(J.N(this.m(a,t),b))return t
return-1},
bq:function(a,b){return this.cf(a,b,0)},
v:function(a){return P.fX(a,"[","]")},
$isL:1,
$asL:null,
$isP:1,
$asP:null,
$isD:1,
$asD:null}
P.pW.prototype={
i:function(a,b,c){throw H.m(new P.aR("Cannot modify unmodifiable map"))}}
P.m9.prototype={
m:function(a,b){return J.ck(this.a,b)},
i:function(a,b,c){J.qB(this.a,b,c)},
ga2:function(a){return J.jL(this.a)},
gp:function(a){return J.ct(this.a)},
v:function(a){return J.cu(this.a)}}
P.hu.prototype={}
P.ma.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.S+=", "
t.a=!1
t=this.b
s=t.S+=H.p(a)
t.S=s+": "
t.S+=H.p(b)},
$S:function(){return{func:1,args:[,,]}}}
P.m3.prototype={
gR:function(a){return new P.pu(this,this.c,this.d,this.b,null,this.$ti)},
ga2:function(a){return this.b===this.c},
gp:function(a){return(this.c-this.b&this.a.length-1)>>>0},
gX:function(a){var t,s
t=this.b
if(t===this.c)throw H.m(H.d0())
s=this.a
if(t>=s.length)return H.B(s,t)
return s[t]},
a6:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(typeof b!=="number")return H.aK(b)
if(0>b||b>=t)H.bv(P.d_(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.B(s,q)
return s[q]},
an:function(a,b){var t=H.a([],this.$ti)
C.a.sp(t,this.gp(this))
this.iP(t)
return t},
aN:function(a){return this.an(a,!0)},
c7:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.B(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
v:function(a){return P.fX(this,"{","}")},
fO:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.m(H.d0());++this.d
s=this.a
r=s.length
if(t>=r)return H.B(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
bF:function(a){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.B(t,s)
t[s]=a
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.eN();++this.d},
eN:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.a(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.a9(s,0,q,t,r)
C.a.a9(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=s},
iP:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.a.a9(a,0,q,r,t)
return q}else{p=r.length-t
C.a.a9(a,0,p,r,t)
C.a.a9(a,p,p+this.c,this.a,0)
return this.c+p}},
hS:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$asP:null,
$asD:null}
P.pu.prototype={
gJ:function(){return this.e},
A:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.bv(new P.bX(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.B(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.ns.prototype={
ga2:function(a){return this.a===0},
a4:function(a,b){var t
for(t=J.bP(b);t.A();)this.h(0,t.gJ())},
an:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.a.sp(t,this.a)
for(s=new P.dS(this,this.r,null,null,[null]),s.c=this.e,r=0;s.A();r=p){q=s.d
p=r+1
if(r>=t.length)return H.B(t,r)
t[r]=q}return t},
aN:function(a){return this.an(a,!0)},
b7:function(a,b){return new H.i6(this,b,[H.M(this,0),null])},
v:function(a){return P.fX(this,"{","}")},
b9:function(a,b){return new H.bF(this,b,this.$ti)},
gX:function(a){var t=new P.dS(this,this.r,null,null,[null])
t.c=this.e
if(!t.A())throw H.m(H.d0())
return t.d},
a6:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(P.qI("index"))
if(b<0)H.bv(P.bJ(b,0,null,"index",null))
for(t=new P.dS(this,this.r,null,null,[null]),t.c=this.e,s=0;t.A();){r=t.d
if(b===s)return r;++s}throw H.m(P.d_(b,this,"index",null,s))},
$isP:1,
$asP:null,
$isD:1,
$asD:null}
P.nr.prototype={}
P.k3.prototype={
kc:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=J.bm(a)
a0=P.dd(b,a0,t.gp(a),null,null,null)
s=$.$get$vO()
if(typeof a0!=="number")return H.aK(a0)
r=b
q=r
p=null
o=-1
n=-1
m=0
for(;r<a0;r=l){l=r+1
k=t.ad(a,r)
if(k===37){j=l+2
if(j<=a0){i=H.qh(C.d.ap(a,l))
h=H.qh(C.d.ap(a,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.B(s,g)
f=s[g]
if(f>=0){g=C.d.ad("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?p:p.S.length
if(e==null)e=0
if(typeof e!=="number")return e.ao()
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null)p=new P.dg("")
p.S+=C.d.N(a,q,r)
p.S+=H.rV(k)
q=l
continue}}throw H.m(new P.bH("Invalid base64 data",a,r))}if(p!=null){t=p.S+=t.N(a,q,a0)
e=t.length
if(o>=0)P.tL(a,n,a0,o,m,e)
else{d=C.b.dh(e-1,4)+1
if(d===1)throw H.m(new P.bH("Invalid base64 encoding length ",a,a0))
for(;d<4;){t+="="
p.S=t;++d}}t=p.S
return C.d.bg(a,b,a0,t.charCodeAt(0)==0?t:t)}c=a0-b
if(o>=0)P.tL(a,n,a0,o,m,c)
else{d=C.e.dh(c,4)
if(d===1)throw H.m(new P.bH("Invalid base64 encoding length ",a,a0))
if(d>1)a=t.bg(a,a0,a0,d===2?"==":"=")}return a},
$asfE:function(){return[[P.L,P.O],P.v]}}
P.k4.prototype={
$asfF:function(){return[[P.L,P.O],P.v]}}
P.fE.prototype={}
P.fF.prototype={}
P.ky.prototype={
$asfE:function(){return[P.v,[P.L,P.O]]}}
P.ot.prototype={
gH:function(a){return"utf-8"}}
P.ou.prototype={
dX:function(a,b,c){var t,s,r,q
t=J.ct(a)
P.dd(b,c,t,null,null,null)
s=new P.dg("")
r=new P.pY(!1,s,!0,0,0,0)
r.dX(a,b,t)
r.jw(0,a,t)
q=s.S
return q.charCodeAt(0)==0?q:q},
je:function(a){return this.dX(a,0,null)},
$asfF:function(){return[[P.L,P.O],P.v]}}
P.pY.prototype={
jw:function(a,b,c){if(this.e>0)throw H.m(new P.bH("Unfinished UTF-8 octet sequence",b,c))},
dX:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=this.d
s=this.e
r=this.f
this.d=0
this.e=0
this.f=0
q=new P.q_(c)
p=new P.pZ(this,a,b,c)
$loop$0:for(o=J.bm(a),n=this.b,m=b;!0;m=h){$multibyte$2:if(s>0){do{if(m===c)break $loop$0
l=o.m(a,m)
if(typeof l!=="number")return l.c1()
if((l&192)!==128){k=new P.bH("Bad UTF-8 encoding 0x"+C.e.bN(l,16),a,m)
throw H.m(k)}else{t=(t<<6|l&63)>>>0;--s;++m}}while(s>0)
k=r-1
if(k<0||k>=4)return H.B(C.H,k)
if(t<=C.H[k]){k=new P.bH("Overlong encoding of 0x"+C.b.bN(t,16),a,m-r-1)
throw H.m(k)}if(t>1114111){k=new P.bH("Character outside valid Unicode range: 0x"+C.b.bN(t,16),a,m-r-1)
throw H.m(k)}if(!this.c||t!==65279)n.S+=H.rV(t)
this.c=!1}for(k=m<c;k;){j=q.$2(a,m)
if(J.cs(j,0)){this.c=!1
if(typeof j!=="number")return H.aK(j)
i=m+j
p.$2(m,i)
if(i===c)break}else i=m
h=i+1
l=o.m(a,i)
g=J.dj(l)
if(g.a7(l,0)){g=new P.bH("Negative UTF-8 code unit: -0x"+J.x_(g.ev(l),16),a,h-1)
throw H.m(g)}else{if(typeof l!=="number")return l.c1()
if((l&224)===192){t=l&31
s=1
r=1
continue $loop$0}if((l&240)===224){t=l&15
s=2
r=2
continue $loop$0}if((l&248)===240&&l<245){t=l&7
s=3
r=3
continue $loop$0}g=new P.bH("Bad UTF-8 encoding 0x"+C.e.bN(l,16),a,h-1)
throw H.m(g)}}break $loop$0}if(s>0){this.d=t
this.e=s
this.f=r}}}
P.q_.prototype={
$2:function(a,b){var t,s,r,q
t=this.a
for(s=J.bm(a),r=b;r<t;++r){q=s.m(a,r)
if(typeof q!=="number")return q.c1()
if((q&127)!==q)return r-b}return t-b},
$S:function(){return{func:1,ret:P.O,args:[,P.O]}}}
P.pZ.prototype={
$2:function(a,b){this.a.b.S+=P.vv(this.b,a,b)},
$S:function(){return{func:1,v:true,args:[P.O,P.O]}}}
P.cM.prototype={}
P.bD.prototype={}
P.fG.prototype={
T:function(a,b){if(b==null)return!1
if(!(b instanceof P.fG))return!1
return this.a===b.a&&this.b===b.b},
bd:function(a,b){return C.b.bd(this.a,b.giO())},
gab:function(a){var t=this.a
return(t^C.b.bG(t,30))&1073741823},
v:function(a){var t,s,r,q,p,o,n
t=P.xw(H.v7(this))
s=P.i0(H.v6(this))
r=P.i0(H.v5(this))
q=P.i0(H.Dj(this))
p=P.i0(H.Dl(this))
o=P.i0(H.Dm(this))
n=P.xx(H.Dk(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isbD:1,
$asbD:function(){return[P.fG]},
giO:function(){return this.a}}
P.U.prototype={$isbD:1,
$asbD:function(){return[P.ci]}}
P.dm.prototype={
ao:function(a,b){return new P.dm(this.a+b.gc4())},
aP:function(a,b){return new P.dm(this.a-b.gc4())},
aU:function(a,b){if(typeof b!=="number")return H.aK(b)
return new P.dm(C.e.aM(this.a*b))},
a7:function(a,b){return C.b.a7(this.a,b.gc4())},
bC:function(a,b){return C.b.bC(this.a,b.gc4())},
bO:function(a,b){return C.b.bO(this.a,b.gc4())},
T:function(a,b){if(b==null)return!1
if(!(b instanceof P.dm))return!1
return this.a===b.a},
gab:function(a){return this.a&0x1FFFFFFF},
bd:function(a,b){return C.b.bd(this.a,b.gc4())},
v:function(a){var t,s,r,q,p
t=new P.kv()
s=this.a
if(s<0)return"-"+new P.dm(0-s).v(0)
r=t.$1(C.b.aH(s,6e7)%60)
q=t.$1(C.b.aH(s,1e6)%60)
p=new P.ku().$1(s%1e6)
return""+C.b.aH(s,36e8)+":"+H.p(r)+":"+H.p(q)+"."+H.p(p)},
ev:function(a){return new P.dm(0-this.a)},
$isbD:1,
$asbD:function(){return[P.dm]},
gc4:function(){return this.a}}
P.ku.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.v,args:[P.O]}}}
P.kv.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.v,args:[P.O]}}}
P.eh.prototype={
gbs:function(){return H.cT(this.$thrownJsError)}}
P.hg.prototype={
v:function(a){return"Throw of null."}}
P.dl.prototype={
gdF:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gdE:function(){return""},
v:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.p(t)
q=this.gdF()+s+r
if(!this.a)return q
p=this.gdE()
o=P.u_(this.b)
return q+p+": "+H.p(o)},
gH:function(a){return this.c}}
P.hk.prototype={
gdF:function(){return"RangeError"},
gdE:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.p(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.p(t)
else{if(typeof r!=="number")return r.bC()
if(r>t)s=": Not in range "+H.p(t)+".."+H.p(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.p(t)}}return s}}
P.lw.prototype={
gdF:function(){return"RangeError"},
gdE:function(){if(J.dk(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.p(t)},
gp:function(a){return this.f}}
P.aR.prototype={
v:function(a){return"Unsupported operation: "+this.a}}
P.jm.prototype={
v:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.p(t):"UnimplementedError"}}
P.ca.prototype={
v:function(a){return"Bad state: "+this.a}}
P.bX.prototype={
v:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.p(P.u_(t))+"."}}
P.mK.prototype={
v:function(a){return"Out of Memory"},
gbs:function(){return},
$iseh:1}
P.ji.prototype={
v:function(a){return"Stack Overflow"},
gbs:function(){return},
$iseh:1}
P.km.prototype={
v:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.p(t)+"' during its initialization"}}
P.p9.prototype={
v:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.p(t)}}
P.bH.prototype={
v:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=this.a
s=t!=null&&""!==t?"FormatException: "+H.p(t):"FormatException"
r=this.c
q=this.b
if(typeof q!=="string")return r!=null?s+(" (at offset "+H.p(r)+")"):s
if(r!=null){if(typeof r!=="number")return r.a7()
t=r<0||r>q.length}else t=!1
if(t)r=null
if(r==null){if(q.length>78)q=C.d.N(q,0,75)+"..."
return s+"\n"+q}if(typeof r!=="number")return H.aK(r)
p=1
o=0
n=!1
m=0
for(;m<r;++m){l=C.d.ap(q,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}s=p>1?s+(" (at line "+p+", character "+H.p(r-o+1)+")\n"):s+(" (at character "+H.p(r+1)+")\n")
k=q.length
for(m=r;m<q.length;++m){l=C.d.ad(q,m)
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
g=""}f=C.d.N(q,i,j)
return s+h+f+g+"\n"+C.d.aU(" ",r-i+h.length)+"^\n"}}
P.kB.prototype={
v:function(a){return"Expando:"+H.p(this.a)},
m:function(a,b){var t,s
t=this.cR
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.bv(P.fx(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.rT(b,"expando$values")
return s==null?null:H.rT(s,t)},
i:function(a,b,c){var t,s
t=this.cR
if(typeof t!=="string")t.set(b,c)
else{s=H.rT(b,"expando$values")
if(s==null){s=new P.bd()
H.va(b,"expando$values",s)}H.va(s,t,c)}},
gH:function(a){return this.a}}
P.O.prototype={$isbD:1,
$asbD:function(){return[P.ci]}}
P.D.prototype={
b7:function(a,b){return H.h4(this,b,H.as(this,"D",0),null)},
b9:function(a,b){return new H.bF(this,b,[H.as(this,"D",0)])},
a5:function(a,b){var t
for(t=this.gR(this);t.A();)if(J.N(t.gJ(),b))return!0
return!1},
an:function(a,b){return P.bc(this,!0,H.as(this,"D",0))},
aN:function(a){return this.an(a,!0)},
gp:function(a){var t,s
t=this.gR(this)
for(s=0;t.A();)++s
return s},
ga2:function(a){return!this.gR(this).A()},
gX:function(a){var t=this.gR(this)
if(!t.A())throw H.m(H.d0())
return t.gJ()},
gc2:function(a){var t,s
t=this.gR(this)
if(!t.A())throw H.m(H.d0())
s=t.gJ()
if(t.A())throw H.m(H.D8())
return s},
a6:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(P.qI("index"))
if(b<0)H.bv(P.bJ(b,0,null,"index",null))
for(t=this.gR(this),s=0;t.A();){r=t.gJ()
if(b===s)return r;++s}throw H.m(P.d_(b,this,"index",null,s))},
v:function(a){return P.rG(this,"(",")")},
$asD:null}
P.iO.prototype={}
P.L.prototype={$asL:null,$isP:1,$asP:null,$isD:1,$asD:null}
P.dw.prototype={
gab:function(a){return P.bd.prototype.gab.call(this,this)},
v:function(a){return"null"}}
P.ci.prototype={$isbD:1,
$asbD:function(){return[P.ci]}}
P.bd.prototype={constructor:P.bd,$isbd:1,
T:function(a,b){return this===b},
gab:function(a){return H.eu(this)},
v:function(a){return H.mY(this)},
gac:function(a){return new H.dx(H.hN(this),null)},
toString:function(){return this.v(this)}}
P.f8.prototype={}
P.e3.prototype={}
P.v.prototype={$isbD:1,
$asbD:function(){return[P.v]}}
P.dg.prototype={
gp:function(a){return this.S.length},
ga2:function(a){return this.S.length===0},
v:function(a){var t=this.S
return t.charCodeAt(0)==0?t:t},
gS:function(){return this.S}}
P.eB.prototype={}
P.or.prototype={
$2:function(a,b){var t,s,r,q
t=J.bm(b)
s=t.bq(b,"=")
if(s===-1){if(!t.T(b,""))J.qB(a,P.pX(b,0,t.gp(b),this.a,!0),"")}else if(s!==0){r=t.N(b,0,s)
q=C.d.bj(b,s+1)
t=this.a
J.qB(a,P.pX(r,0,r.length,t,!0),P.pX(q,0,q.length,t,!0))}return a},
$S:function(){return{func:1,args:[,,]}}}
P.oo.prototype={
$2:function(a,b){throw H.m(new P.bH("Illegal IPv4 address, "+a,this.a,b))},
$S:function(){return{func:1,v:true,args:[P.v,P.O]}}}
P.op.prototype={
$2:function(a,b){throw H.m(new P.bH("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,v:true,args:[P.v],opt:[,]}}}
P.oq.prototype={
$2:function(a,b){var t,s
if(b-a>4)this.b.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
t=H.dc(C.d.N(this.a,a,b),16,null)
s=J.dj(t)
if(s.a7(t,0)||s.bC(t,65535))this.b.$2("each part must be in the range of `0x0..0xFFFF`",a)
return t},
$S:function(){return{func:1,ret:P.O,args:[P.O,P.O]}}}
P.jC.prototype={
gh_:function(){return this.b},
ge6:function(a){var t=this.c
if(t==null)return""
if(C.d.aW(t,"["))return C.d.N(t,1,t.length-1)
return t},
gef:function(a){var t=this.d
if(t==null)return P.vU(this.a)
return t},
gej:function(a){var t=this.f
return t==null?"":t},
gfm:function(){var t=this.r
return t==null?"":t},
gek:function(){var t,s
t=this.Q
if(t==null){t=this.f
s=P.v
s=new P.hu(P.vN(t==null?"":t,C.r),[s,s])
this.Q=s
t=s}return t},
gfs:function(){return this.c!=null},
gfu:function(){return this.f!=null},
gft:function(){return this.r!=null},
v:function(a){var t=this.y
if(t==null){t=this.eQ()
this.y=t}return t},
eQ:function(){var t,s,r,q
t=this.a
s=t.length!==0?t+":":""
r=this.c
q=r==null
if(!q||t==="file"){t=s+"//"
s=this.b
if(s.length!==0)t=t+H.p(s)+"@"
if(!q)t+=r
s=this.d
if(s!=null)t=t+":"+H.p(s)}else t=s
t+=H.p(this.e)
s=this.f
if(s!=null)t=t+"?"+s
s=this.r
if(s!=null)t=t+"#"+s
return t.charCodeAt(0)==0?t:t},
T:function(a,b){var t,s,r
if(b==null)return!1
if(this===b)return!0
t=J.ar(b)
if(!!t.$iseB){if(this.a===b.gew())if(this.c!=null===b.gfs()){s=this.b
r=b.gh_()
if(s==null?r==null:s===r){s=this.ge6(this)
r=t.ge6(b)
if(s==null?r==null:s===r)if(J.N(this.gef(this),t.gef(b)))if(J.N(this.e,t.gfL(b))){s=this.f
r=s==null
if(!r===b.gfu()){if(r)s=""
if(s===t.gej(b)){t=this.r
s=t==null
if(!s===b.gft()){if(s)t=""
t=t===b.gfm()}else t=!1}else t=!1}else t=!1}else t=!1
else t=!1
else t=!1}else t=!1}else t=!1
else t=!1
return t}return!1},
gab:function(a){var t=this.z
if(t==null){t=this.y
if(t==null){t=this.eQ()
this.y=t}t=C.d.gab(t)
this.z=t}return t},
$iseB:1,
gew:function(){return this.a},
gfL:function(a){return this.e}}
P.qd.prototype={
$1:function(a){throw H.m(new P.bH("Invalid port",this.a,this.b+1))},
$S:function(){return{func:1,args:[,]}}}
P.on.prototype={
gfY:function(){var t,s,r,q,p,o,n,m
t=this.c
if(t!=null)return t
t=this.b
if(0>=t.length)return H.B(t,0)
s=this.a
t=t[0]+1
r=J.bm(s)
q=r.cf(s,"?",t)
p=r.gp(s)
if(q>=0){o=q+1
n=P.fo(s,o,p,C.p,!1)
if(n==null)n=r.N(s,o,p)
p=q}else n=null
m=P.fo(s,t,p,C.K,!1)
t=new P.oY(this,"data",null,null,null,m==null?r.N(s,t,p):m,n,null,null,null,null,null,null)
this.c=t
return t},
v:function(a){var t,s
t=this.b
if(0>=t.length)return H.B(t,0)
s=this.a
return t[0]===-1?"data:"+H.p(s):s}}
P.q7.prototype={
$1:function(a){return new Uint8Array(H.w_(96))},
$S:function(){return{func:1,args:[,]}}}
P.q6.prototype={
$2:function(a,b){var t=this.a
if(a>=t.length)return H.B(t,a)
t=t[a]
J.wA(t,0,96,b)
return t},
$S:function(){return{func:1,ret:P.e4,args:[,,]}}}
P.q8.prototype={
$3:function(a,b,c){var t,s,r
for(t=b.length,s=J.di(a),r=0;r<t;++r)s.i(a,C.d.ap(b,r)^96,c)},
$S:function(){return{func:1,v:true,args:[P.e4,P.v,P.O]}}}
P.q9.prototype={
$3:function(a,b,c){var t,s,r
for(t=C.d.ap(b,0),s=C.d.ap(b,1),r=J.di(a);t<=s;++t)r.i(a,(t^96)>>>0,c)},
$S:function(){return{func:1,v:true,args:[P.e4,P.v,P.O]}}}
P.pO.prototype={
gfs:function(){return this.c>0},
gfu:function(){var t=this.f
if(typeof t!=="number")return t.a7()
return t<this.r},
gft:function(){return this.r<this.a.length},
gew:function(){var t,s
t=this.b
if(t<=0)return""
s=this.x
if(s!=null)return s
s=t===4
if(s&&C.d.aW(this.a,"http")){this.x="http"
t="http"}else if(t===5&&C.d.aW(this.a,"https")){this.x="https"
t="https"}else if(s&&C.d.aW(this.a,"file")){this.x="file"
t="file"}else if(t===7&&C.d.aW(this.a,"package")){this.x="package"
t="package"}else{t=C.d.N(this.a,0,t)
this.x=t}return t},
gh_:function(){var t,s
t=this.c
s=this.b+3
return t>s?C.d.N(this.a,s,t-1):""},
ge6:function(a){var t=this.c
return t>0?C.d.N(this.a,t,this.d):""},
gef:function(a){var t,s
if(this.c>0){t=this.d
if(typeof t!=="number")return t.ao()
s=this.e
if(typeof s!=="number")return H.aK(s)
s=t+1<s
t=s}else t=!1
if(t){t=this.d
if(typeof t!=="number")return t.ao()
return H.dc(C.d.N(this.a,t+1,this.e),null,null)}t=this.b
if(t===4&&C.d.aW(this.a,"http"))return 80
if(t===5&&C.d.aW(this.a,"https"))return 443
return 0},
gfL:function(a){return C.d.N(this.a,this.e,this.f)},
gej:function(a){var t,s
t=this.f
s=this.r
if(typeof t!=="number")return t.a7()
return t<s?C.d.N(this.a,t+1,s):""},
gfm:function(){var t,s
t=this.r
s=this.a
return t<s.length?C.d.bj(s,t+1):""},
gek:function(){var t=this.f
if(typeof t!=="number")return t.a7()
if(t>=this.r)return C.a8
t=P.v
return new P.hu(P.vN(this.gej(this),C.r),[t,t])},
gab:function(a){var t=this.y
if(t==null){t=C.d.gab(this.a)
this.y=t}return t},
T:function(a,b){var t
if(b==null)return!1
if(this===b)return!0
t=J.ar(b)
if(!!t.$iseB)return this.a===t.v(b)
return!1},
v:function(a){return this.a},
$iseB:1}
P.oY.prototype={}
W.b2.prototype={}
W.eJ.prototype={
v:function(a){return String(a)},
$iseJ:1,
$isa0:1,
gaq:function(a){return a.href},
saO:function(a,b){return a.type=b},
saq:function(a,b){return a.href=b}}
W.jR.prototype={
v:function(a){return String(a)},
$isa0:1,
gaq:function(a){return a.href},
saq:function(a,b){return a.href=b}}
W.k5.prototype={
gaq:function(a){return a.href},
saq:function(a,b){return a.href=b}}
W.hR.prototype={}
W.eL.prototype={$iseL:1,$isa0:1}
W.fD.prototype={$isfD:1,
gH:function(a){return a.name},
ga3:function(a){return a.value},
sH:function(a,b){return a.name=b},
saO:function(a,b){return a.type=b},
sa3:function(a,b){return a.value=b}}
W.ed.prototype={
h3:function(a,b,c){return a.getContext(b)},
ar:function(a,b){return this.h3(a,b,null)},
$ised:1,
$iscA:1,
$isai:1,
$isbd:1,
gU:function(a){return a.height},
gV:function(a){return a.width}}
W.hW.prototype={
es:function(a,b,c,d,e){return P.wd(a.getImageData(b,c,d,e))},
km:function(a,b,c,d,e,f,g,h){a.putImageData(P.F9(b),c,d)
return},
ei:function(a,b,c,d){return this.km(a,b,c,d,null,null,null,null)},
jq:function(a,b,c,d){return a.drawImage(b,c,d)},
ge5:function(a){return a.filter},
sju:function(a,b){return a.fillStyle=b}}
W.ee.prototype={$isa0:1,
gp:function(a){return a.length}}
W.hY.prototype={
gbf:function(a){return a.id}}
W.hZ.prototype={
dZ:function(a,b){return typeof console!="undefined"?console.error(b):null},
jK:function(a){return typeof console!="undefined"?console.info(a):null},
kM:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.eN.prototype={
cI:function(a,b){var t=this.ip(a,b)
return t!=null?t:""},
ip:function(a,b){if(W.xv(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.xy()+b)},
aL:function(a,b){return a.item(b)},
gcr:function(a){return a.display},
scr:function(a,b){a.display=b},
gp:function(a){return a.length}}
W.iv.prototype={}
W.oW.prototype={
cI:function(a,b){var t=this.b
return J.wM(t.gX(t),b)},
iI:function(a,b){var t
for(t=this.a,t=new H.et(t,t.gp(t),0,null,[H.M(t,0)]);t.A();)t.d.style[a]=b},
scr:function(a,b){this.iI("display",b)},
i1:function(a){var t=P.bc(this.a,!0,null)
this.b=new H.db(t,new W.oX(),[H.M(t,0),null])}}
W.j_.prototype={}
W.oX.prototype={
$1:function(a){return J.jM(a)},
$S:function(){return{func:1,args:[,]}}}
W.i_.prototype={
gcr:function(a){return this.cI(a,"display")},
ge5:function(a){return this.cI(a,"filter")}}
W.ko.prototype={
ga3:function(a){return a.value}}
W.i1.prototype={}
W.i2.prototype={$isa0:1}
W.i3.prototype={
gH:function(a){return a.name}}
W.kp.prototype={
gH:function(a){var t=a.name
if(P.tX()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.tX()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
v:function(a){return String(a)}}
W.i4.prototype={
v:function(a){return"Rectangle ("+H.p(a.left)+", "+H.p(a.top)+") "+H.p(this.gV(a))+" x "+H.p(this.gU(a))},
T:function(a,b){var t
if(b==null)return!1
t=J.ar(b)
if(!t.$isjb)return!1
return a.left===t.ge9(b)&&a.top===t.geq(b)&&this.gV(a)===t.gV(b)&&this.gU(a)===t.gU(b)},
gab:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gV(a)
q=this.gU(a)
return W.vS(W.eF(W.eF(W.eF(W.eF(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gU:function(a){return a.height},
ge9:function(a){return a.left},
geq:function(a){return a.top},
gV:function(a){return a.width},
$isjb:1,
$asjb:function(){}}
W.i5.prototype={
a5:function(a,b){return a.contains(b)},
aL:function(a,b){return a.item(b)},
gp:function(a){return a.length},
ga3:function(a){return a.value}}
W.hy.prototype={
gp:function(a){return this.a.length},
m:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.B(t,b)
return t[b]},
i:function(a,b,c){throw H.m(new P.aR("Cannot modify list"))},
sp:function(a,b){throw H.m(new P.aR("Cannot modify list"))},
gX:function(a){return C.a9.gX(this.a)},
gez:function(a){return W.Es(this)},
$isL:1,
$asL:null,
$isP:1,
$asP:null,
$isD:1,
$asD:null}
W.cA.prototype={
gj4:function(a){return new W.p3(a)},
v:function(a){return a.localName},
fC:function(a,b,c,d,e){a.insertAdjacentHTML(b,c)},
b0:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.tZ
if(t==null){t=H.a([],[W.e_])
s=new W.iX(t)
t.push(W.vQ(null))
t.push(W.vT())
$.tZ=s
d=s}else d=t
t=$.tY
if(t==null){t=new W.jD(d)
$.tY=t
c=t}else{t.a=d
c=t}}if($.dV==null){t=document
s=t.implementation.createHTMLDocument("")
$.dV=s
$.qP=s.createRange()
s=$.dV
s.toString
r=s.createElement("base")
J.wT(r,t.baseURI)
$.dV.head.appendChild(r)}t=$.dV
if(t.body==null){t.toString
s=t.createElement("body")
t.body=s}t=$.dV
if(!!this.$iseL)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
$.dV.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.a.a5(C.a3,a.tagName)){$.qP.selectNodeContents(q)
p=$.qP.createContextualFragment(b)}else{q.innerHTML=b
p=$.dV.createDocumentFragment()
for(;t=q.firstChild,t!=null;)p.appendChild(t)}t=$.dV.body
if(q==null?t!=null:q!==t)J.wO(q)
c.di(p)
document.adoptNode(p)
return p},
jg:function(a,b,c){return this.b0(a,b,c,null)},
dm:function(a,b,c,d){a.textContent=null
a.appendChild(this.b0(a,b,c,d))},
bD:function(a,b){return this.dm(a,b,null,null)},
gfH:function(a){return new W.hv(a,"change",!1,[W.W])},
gfI:function(a){return new W.hv(a,"click",!1,[W.v_])},
$iscA:1,
$isai:1,
$isbd:1,
$isa0:1,
gez:function(a){return a.style},
gbf:function(a){return a.id},
geS:function(a){return a.namespaceURI},
gkE:function(a){return a.tagName}}
W.qb.prototype={
$1:function(a){return!!J.ar(a).$iscA},
$S:function(){return{func:1,args:[,]}}}
W.kx.prototype={
gU:function(a){return a.height},
gH:function(a){return a.name},
gV:function(a){return a.width},
sH:function(a,b){return a.name=b},
saO:function(a,b){return a.type=b}}
W.kz.prototype={
gbl:function(a){return a.error}}
W.W.prototype={$isW:1,$isbd:1}
W.fK.prototype={
iV:function(a,b,c,d){if(c!=null)this.i9(a,b,c,!1)},
ks:function(a,b,c,d){if(c!=null)this.iD(a,b,c,!1)},
i9:function(a,b,c,d){return a.addEventListener(b,H.hL(c,1),!1)},
iD:function(a,b,c,d){return a.removeEventListener(b,H.hL(c,1),!1)}}
W.ld.prototype={
gH:function(a){return a.name},
sH:function(a,b){return a.name=b}}
W.cp.prototype={$iscp:1,$isbd:1,
gH:function(a){return a.name}}
W.im.prototype={
gp:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.d_(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aR("Cannot assign element of immutable List."))},
sp:function(a,b){throw H.m(new P.aR("Cannot resize immutable List."))},
gX:function(a){if(a.length>0)return a[0]
throw H.m(new P.ca("No elements"))},
a6:function(a,b){if(b>>>0!==b||b>=a.length)return H.B(a,b)
return a[b]},
aL:function(a,b){return a.item(b)},
$iscC:1,
$ascC:function(){return[W.cp]},
$iscq:1,
$ascq:function(){return[W.cp]},
$isL:1,
$asL:function(){return[W.cp]},
$isP:1,
$asP:function(){return[W.cp]},
$isD:1,
$asD:function(){return[W.cp]}}
W.iw.prototype={
$asL:function(){return[W.cp]},
$asP:function(){return[W.cp]},
$asD:function(){return[W.cp]},
$isL:1,
$isP:1,
$isD:1}
W.iC.prototype={
$asL:function(){return[W.cp]},
$asP:function(){return[W.cp]},
$asD:function(){return[W.cp]},
$isL:1,
$isP:1,
$isD:1}
W.ir.prototype={
aL:function(a,b){return a.item(b)},
gp:function(a){return a.length},
gH:function(a){return a.name},
sH:function(a,b){return a.name=b}}
W.lj.prototype={
gbf:function(a){return a.id}}
W.f_.prototype={
gp:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.d_(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aR("Cannot assign element of immutable List."))},
sp:function(a,b){throw H.m(new P.aR("Cannot resize immutable List."))},
gX:function(a){if(a.length>0)return a[0]
throw H.m(new P.ca("No elements"))},
a6:function(a,b){if(b>>>0!==b||b>=a.length)return H.B(a,b)
return a[b]},
aL:function(a,b){return a.item(b)},
$isL:1,
$asL:function(){return[W.ai]},
$isP:1,
$asP:function(){return[W.ai]},
$isD:1,
$asD:function(){return[W.ai]},
$iscC:1,
$ascC:function(){return[W.ai]},
$iscq:1,
$ascq:function(){return[W.ai]}}
W.ix.prototype={
$asL:function(){return[W.ai]},
$asP:function(){return[W.ai]},
$asD:function(){return[W.ai]},
$isL:1,
$isP:1,
$isD:1}
W.iD.prototype={
$asL:function(){return[W.ai]},
$asP:function(){return[W.ai]},
$asD:function(){return[W.ai]},
$isL:1,
$isP:1,
$isD:1}
W.it.prototype={
aL:function(a,b){return a.item(b)}}
W.em.prototype={
kW:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
kd:function(a,b,c,d){return a.open(b,c,d)},
cK:function(a,b){return a.send(b)},
$isem:1,
$isbd:1,
gkx:function(a){return a.responseText}}
W.lq.prototype={
$1:function(a){return J.wI(a)},
$S:function(){return{func:1,args:[W.em]}}}
W.lr.prototype={
$1:function(a){var t,s,r,q,p
t=this.b
s=t.status
if(typeof s!=="number")return s.bO()
r=s>=200&&s<300
q=s>307&&s<400
s=r||s===0||s===304||q
p=this.a
if(s)p.ja(0,t)
else p.fh(a)},
$S:function(){return{func:1,args:[,]}}}
W.iu.prototype={}
W.ls.prototype={
gU:function(a){return a.height},
gH:function(a){return a.name},
gV:function(a){return a.width},
sH:function(a,b){return a.name=b}}
W.f0.prototype={$isf0:1,
gag:function(a){return a.data}}
W.f1.prototype={$isf1:1,$iscA:1,$isai:1,$isbd:1,
gU:function(a){return a.height},
gV:function(a){return a.width}}
W.lx.prototype={$iscA:1,$isa0:1,$isai:1,
gU:function(a){return a.height},
gH:function(a){return a.name},
ga3:function(a){return a.value},
gV:function(a){return a.width},
sH:function(a,b){return a.name=b},
saO:function(a,b){return a.type=b},
sa3:function(a,b){return a.value=b}}
W.lQ.prototype={
gH:function(a){return a.name},
sH:function(a,b){return a.name=b}}
W.lS.prototype={
ga3:function(a){return a.value},
sa3:function(a,b){return a.value=b}}
W.h_.prototype={$ish_:1,
gaq:function(a){return a.href},
saq:function(a,b){return a.href=b},
saO:function(a,b){return a.type=b}}
W.m4.prototype={
v:function(a){return String(a)},
gaq:function(a){return a.href}}
W.m8.prototype={
gH:function(a){return a.name},
sH:function(a,b){return a.name=b}}
W.h5.prototype={
gbl:function(a){return a.error},
gaV:function(a){return a.session},
saV:function(a,b){return a.session=b}}
W.md.prototype={
aR:function(a){return a.clone()},
gbf:function(a){return a.id}}
W.me.prototype={
saO:function(a,b){return a.type=b}}
W.mf.prototype={
saO:function(a,b){return a.type=b}}
W.mg.prototype={
gH:function(a){return a.name},
sH:function(a,b){return a.name=b}}
W.mi.prototype={
ga3:function(a){return a.value},
sa3:function(a,b){return a.value=b}}
W.mj.prototype={
kP:function(a,b,c){return a.send(b,c)},
cK:function(a,b){return a.send(b)}}
W.h6.prototype={
gbf:function(a){return a.id},
gH:function(a){return a.name}}
W.mz.prototype={$isa0:1}
W.mA.prototype={
gH:function(a){return a.name}}
W.cS.prototype={
gX:function(a){var t=this.a.firstChild
if(t==null)throw H.m(new P.ca("No elements"))
return t},
gc2:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.m(new P.ca("No elements"))
if(s>1)throw H.m(new P.ca("More than one element"))
return t.firstChild},
a4:function(a,b){var t,s,r,q
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=0;q<r;++q)s.appendChild(t.firstChild)
return},
i:function(a,b,c){var t,s
t=this.a
s=t.childNodes
if(b>>>0!==b||b>=s.length)return H.B(s,b)
t.replaceChild(c,s[b])},
gR:function(a){var t=this.a.childNodes
return new W.ip(t,t.length,-1,null,[H.as(t,"dt",0)])},
a9:function(a,b,c,d,e){throw H.m(new P.aR("Cannot setRange on Node list"))},
bh:function(a,b,c,d){return this.a9(a,b,c,d,0)},
cw:function(a,b,c,d){throw H.m(new P.aR("Cannot fillRange on Node list"))},
gp:function(a){return this.a.childNodes.length},
sp:function(a,b){throw H.m(new P.aR("Cannot set length on immutable List."))},
m:function(a,b){var t=this.a.childNodes
if(b>>>0!==b||b>=t.length)return H.B(t,b)
return t[b]},
$ash1:function(){return[W.ai]},
$asfb:function(){return[W.ai]},
$asL:function(){return[W.ai]},
$asP:function(){return[W.ai]},
$asD:function(){return[W.ai]}}
W.ai.prototype={
gka:function(a){return new W.cS(a)},
kq:function(a){var t=a.parentNode
if(t!=null)t.removeChild(a)},
v:function(a){var t=a.nodeValue
return t==null?this.hF(a):t},
a5:function(a,b){return a.contains(b)},
$isai:1,
$isbd:1,
gke:function(a){return a.parentNode},
gki:function(a){return a.previousSibling}}
W.hf.prototype={
gp:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.d_(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aR("Cannot assign element of immutable List."))},
sp:function(a,b){throw H.m(new P.aR("Cannot resize immutable List."))},
gX:function(a){if(a.length>0)return a[0]
throw H.m(new P.ca("No elements"))},
a6:function(a,b){if(b>>>0!==b||b>=a.length)return H.B(a,b)
return a[b]},
$isL:1,
$asL:function(){return[W.ai]},
$isP:1,
$asP:function(){return[W.ai]},
$isD:1,
$asD:function(){return[W.ai]},
$iscC:1,
$ascC:function(){return[W.ai]},
$iscq:1,
$ascq:function(){return[W.ai]}}
W.iy.prototype={
$asL:function(){return[W.ai]},
$asP:function(){return[W.ai]},
$asD:function(){return[W.ai]},
$isL:1,
$isP:1,
$isD:1}
W.iE.prototype={
$asL:function(){return[W.ai]},
$asP:function(){return[W.ai]},
$asD:function(){return[W.ai]},
$isL:1,
$isP:1,
$isD:1}
W.mI.prototype={
saO:function(a,b){return a.type=b}}
W.mJ.prototype={
gU:function(a){return a.height},
gH:function(a){return a.name},
gV:function(a){return a.width},
sH:function(a,b){return a.name=b},
saO:function(a,b){return a.type=b}}
W.j5.prototype={
ghb:function(a){return a.selected},
ga3:function(a){return a.value},
sa3:function(a,b){return a.value=b}}
W.mL.prototype={
gH:function(a){return a.name},
ga3:function(a){return a.value},
sH:function(a,b){return a.name=b},
sa3:function(a,b){return a.value=b}}
W.mN.prototype={
gH:function(a){return a.name},
ga3:function(a){return a.value},
sH:function(a,b){return a.name=b},
sa3:function(a,b){return a.value=b}}
W.n_.prototype={
ga3:function(a){return a.value},
sa3:function(a,b){return a.value=b}}
W.nm.prototype={
saO:function(a,b){return a.type=b}}
W.ho.prototype={
aL:function(a,b){return a.item(b)},
gfJ:function(a){var t=new W.hy(a.querySelectorAll("option"),[null])
return new P.jn(t.aN(t),[null])},
gbb:function(a){var t,s
if(a.multiple===!0){t=this.gfJ(a)
s=H.M(t,0)
return new P.jn(P.bc(new H.bF(t,new W.no(),[s]),!0,s),[null])}else{t=this.gfJ(a)
s=a.selectedIndex
t=t.a
if(s>>>0!==s||s>=t.length)return H.B(t,s)
return[t[s]]}},
gp:function(a){return a.length},
gH:function(a){return a.name},
ga3:function(a){return a.value},
sH:function(a,b){return a.name=b},
sa3:function(a,b){return a.value=b}}
W.no.prototype={
$1:function(a){return J.wK(a)},
$S:function(){return{func:1,args:[,]}}}
W.nt.prototype={
kS:function(a,b){return a.cloneNode(b)},
aR:function(a){return a.cloneNode()}}
W.nv.prototype={
gH:function(a){return a.name},
sH:function(a,b){return a.name=b}}
W.ny.prototype={
saO:function(a,b){return a.type=b}}
W.nC.prototype={
gbl:function(a){return a.error}}
W.nD.prototype={
gH:function(a){return a.name}}
W.nZ.prototype={
saO:function(a,b){return a.type=b}}
W.jl.prototype={
b0:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.dw(a,b,c,d)
t=W.xG("<table>"+H.p(b)+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
new W.cS(s).a4(0,J.wE(t))
return s}}
W.o6.prototype={
b0:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.dw(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.O.b0(t.createElement("table"),b,c,d)
t.toString
t=new W.cS(t)
r=t.gc2(t)
r.toString
t=new W.cS(r)
q=t.gc2(t)
s.toString
q.toString
new W.cS(s).a4(0,new W.cS(q))
return s}}
W.o7.prototype={
b0:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.dw(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.O.b0(t.createElement("table"),b,c,d)
t.toString
t=new W.cS(t)
r=t.gc2(t)
s.toString
r.toString
new W.cS(s).a4(0,new W.cS(r))
return s}}
W.hs.prototype={
dm:function(a,b,c,d){var t
a.textContent=null
t=this.b0(a,b,c,d)
a.content.appendChild(t)},
bD:function(a,b){return this.dm(a,b,null,null)},
$ishs:1}
W.ob.prototype={
gH:function(a){return a.name},
ga3:function(a){return a.value},
sH:function(a,b){return a.name=b},
sa3:function(a,b){return a.value=b}}
W.ov.prototype={
gU:function(a){return a.height},
gV:function(a){return a.width}}
W.jr.prototype={$isa0:1,
gH:function(a){return a.name}}
W.fk.prototype={$isfk:1,$isai:1,$isbd:1,
gH:function(a){return a.name},
geS:function(a){return a.namespaceURI},
ga3:function(a){return a.value}}
W.oV.prototype={
v:function(a){return"Rectangle ("+H.p(a.left)+", "+H.p(a.top)+") "+H.p(a.width)+" x "+H.p(a.height)},
T:function(a,b){var t,s,r
if(b==null)return!1
t=J.ar(b)
if(!t.$isjb)return!1
s=a.left
r=t.ge9(b)
if(s==null?r==null:s===r){s=a.top
r=t.geq(b)
if(s==null?r==null:s===r){s=a.width
r=t.gV(b)
if(s==null?r==null:s===r){s=a.height
t=t.gU(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gab:function(a){var t,s,r,q
t=J.dB(a.left)
s=J.dB(a.top)
r=J.dB(a.width)
q=J.dB(a.height)
return W.vS(W.eF(W.eF(W.eF(W.eF(0,t),s),r),q))},
$isjb:1,
$asjb:function(){},
gU:function(a){return a.height},
ge9:function(a){return a.left},
geq:function(a){return a.top},
gV:function(a){return a.width}}
W.p1.prototype={$isa0:1}
W.p2.prototype={
gU:function(a){return a.height},
gV:function(a){return a.width}}
W.pn.prototype={$isa0:1}
W.hD.prototype={
gp:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.d_(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aR("Cannot assign element of immutable List."))},
sp:function(a,b){throw H.m(new P.aR("Cannot resize immutable List."))},
gX:function(a){if(a.length>0)return a[0]
throw H.m(new P.ca("No elements"))},
a6:function(a,b){if(b>>>0!==b||b>=a.length)return H.B(a,b)
return a[b]},
aL:function(a,b){return a.item(b)},
$isL:1,
$asL:function(){return[W.ai]},
$isP:1,
$asP:function(){return[W.ai]},
$isD:1,
$asD:function(){return[W.ai]},
$iscC:1,
$ascC:function(){return[W.ai]},
$iscq:1,
$ascq:function(){return[W.ai]}}
W.iz.prototype={
$asL:function(){return[W.ai]},
$asP:function(){return[W.ai]},
$asD:function(){return[W.ai]},
$isL:1,
$isP:1,
$isD:1}
W.iF.prototype={
$asL:function(){return[W.ai]},
$asP:function(){return[W.ai]},
$asD:function(){return[W.ai]},
$isL:1,
$isP:1,
$isD:1}
W.pL.prototype={$isa0:1}
W.oR.prototype={
gau:function(){var t,s,r,q,p,o
t=this.a.attributes
s=H.a([],[P.v])
for(r=t.length,q=0;q<r;++q){if(q>=t.length)return H.B(t,q)
p=t[q]
o=J.aW(p)
if(o.geS(p)==null)s.push(o.gH(p))}return s},
ga2:function(a){return this.gau().length===0},
gix:function(){return this.a}}
W.p3.prototype={
m:function(a,b){return this.a.getAttribute(b)},
i:function(a,b,c){this.a.setAttribute(b,c)},
gp:function(a){return this.gau().length}}
W.p6.prototype={
bz:function(a,b,c,d){return W.dR(this.a,this.b,a,!1,H.M(this,0))},
fD:function(a,b,c){return this.bz(a,null,b,c)}}
W.hv.prototype={}
W.p7.prototype={
cY:function(){if(this.b==null)return
this.f7()
this.b=null
this.d=null
return},
ed:function(a,b){if(this.b==null)return;++this.a
this.f7()},
fM:function(a){return this.ed(a,null)},
fQ:function(){if(this.b==null||this.a<=0)return;--this.a
this.f5()},
f5:function(){var t=this.d
if(t!=null&&this.a<=0)J.wy(this.b,this.c,t,!1)},
f7:function(){var t=this.d
if(t!=null)J.wP(this.b,this.c,t,!1)},
i2:function(a,b,c,d,e){this.f5()}}
W.p8.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.hB.prototype={
c6:function(a){return $.$get$vR().a5(0,W.fJ(a))},
bH:function(a,b,c){var t,s,r
t=W.fJ(a)
s=$.$get$t8()
r=s.m(0,H.p(t)+"::"+b)
if(r==null)r=s.m(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
i5:function(a){var t,s
t=$.$get$t8()
if(t.ga2(t)){for(s=0;s<262;++s)t.i(0,C.a2[s],W.Fm())
for(s=0;s<12;++s)t.i(0,C.v[s],W.Fn())}},
$ise_:1,
gfZ:function(){return this.a}}
W.dt.prototype={
gR:function(a){return new W.ip(a,this.gp(a),-1,null,[H.as(a,"dt",0)])},
a9:function(a,b,c,d,e){throw H.m(new P.aR("Cannot setRange on immutable List."))},
bh:function(a,b,c,d){return this.a9(a,b,c,d,0)},
bg:function(a,b,c,d){throw H.m(new P.aR("Cannot modify an immutable List."))},
cw:function(a,b,c,d){throw H.m(new P.aR("Cannot modify an immutable List."))},
$isL:1,
$asL:null,
$isP:1,
$asP:null,
$isD:1,
$asD:null}
W.iX.prototype={
c6:function(a){return C.a.fb(this.a,new W.mC(a))},
bH:function(a,b,c){return C.a.fb(this.a,new W.mB(a,b,c))},
$ise_:1}
W.mC.prototype={
$1:function(a){return a.c6(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.mB.prototype={
$1:function(a){return a.bH(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.hE.prototype={
c6:function(a){return this.a.a5(0,W.fJ(a))},
bH:function(a,b,c){var t,s
t=W.fJ(a)
s=this.c
if(s.a5(0,H.p(t)+"::"+b))return this.d.iZ(c)
else if(s.a5(0,"*::"+b))return this.d.iZ(c)
else{s=this.b
if(s.a5(0,H.p(t)+"::"+b))return!0
else if(s.a5(0,"*::"+b))return!0
else if(s.a5(0,H.p(t)+"::*"))return!0
else if(s.a5(0,"*::*"))return!0}return!1},
i7:function(a,b,c,d){var t,s,r
this.a.a4(0,c)
t=b.b9(0,new W.pM())
s=b.b9(0,new W.pN())
this.b.a4(0,t)
r=this.c
r.a4(0,C.a4)
r.a4(0,s)},
$ise_:1,
gfZ:function(){return this.d}}
W.pM.prototype={
$1:function(a){return!C.a.a5(C.v,a)},
$S:function(){return{func:1,args:[,]}}}
W.pN.prototype={
$1:function(a){return C.a.a5(C.v,a)},
$S:function(){return{func:1,args:[,]}}}
W.pT.prototype={
bH:function(a,b,c){if(this.hN(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.tE(a).a.getAttribute("template")==="")return this.e.a5(0,b)
return!1}}
W.pU.prototype={
$1:function(a){return"TEMPLATE::"+H.p(a)},
$S:function(){return{func:1,args:[,]}}}
W.pS.prototype={
c6:function(a){var t=J.ar(a)
if(!!t.$ishn)return!1
t=!!t.$isc5
if(t&&W.fJ(a)==="foreignObject")return!1
if(t)return!0
return!1},
bH:function(a,b,c){if(b==="is"||C.d.aW(b,"on"))return!1
return this.c6(a)},
$ise_:1}
W.ip.prototype={
A:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.ck(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
gJ:function(){return this.d}}
W.e_.prototype={}
W.pV.prototype={
di:function(a){}}
W.pK.prototype={}
W.jD.prototype={
di:function(a){new W.q0(this).$2(a,null)},
co:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)t.removeChild(a)}else b.removeChild(a)},
iG:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.tE(a)
r=s.gix().getAttribute("is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.cj(n)}p="element unprintable"
try{p=J.cu(a)}catch(n){H.cj(n)}try{o=W.fJ(a)
this.iF(a,b,t,p,o,s,r)}catch(n){if(H.cj(n) instanceof P.dl)throw n
else{this.co(a,b)
window
m="Removing corrupted element "+H.p(p)
if(typeof console!="undefined")console.warn(m)}}},
iF:function(a,b,c,d,e,f,g){var t,s,r,q,p
if(c){this.co(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.c6(a)){this.co(a,b)
window
t="Removing disallowed element <"+H.p(e)+"> from "+J.cu(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.bH(a,"is",g)){this.co(a,b)
window
t="Removing disallowed type extension <"+H.p(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gau()
s=H.a(t.slice(0),[H.M(t,0)])
for(r=f.gau().length-1,t=f.a;r>=0;--r){if(r>=s.length)return H.B(s,r)
q=s[r]
if(!this.a.bH(a,J.qG(q),t.getAttribute(q))){window
p="Removing disallowed attribute <"+H.p(e)+" "+q+'="'+H.p(t.getAttribute(q))+'">'
if(typeof console!="undefined")console.warn(p)
t.getAttribute(q)
t.removeAttribute(q)}}if(!!J.ar(a).$ishs)this.di(a.content)}}
W.q0.prototype={
$2:function(a,b){var t,s,r,q,p
r=this.a
switch(a.nodeType){case 1:r.iG(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.co(a,b)}t=a.lastChild
for(r=a==null;null!=t;){s=null
try{s=J.wH(t)}catch(q){H.cj(q)
p=t
if(r){if(J.wG(p)!=null)p.parentNode.removeChild(p)}else a.removeChild(p)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.ai,W.ai]}}}
P.jB.prototype={$isf0:1,$isa0:1,
gag:function(a){return this.a}}
P.ps.prototype={
a0:function(a){if(a<=0||a>4294967296)throw H.m(P.vf("max must be in range 0 < max \u2264 2^32, was "+H.p(a)))
return Math.random()*a>>>0},
B:function(){return Math.random()},
cE:function(){return Math.random()<0.5}}
P.pC.prototype={
bv:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.b.aH(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
a0:function(a){var t,s,r
if(a<=0||a>4294967296)throw H.m(P.vf("max must be in range 0 < max \u2264 2^32, was "+H.p(a)))
t=a-1
if((a&t)>>>0===0){this.bv()
return(this.a&t)>>>0}do{this.bv()
s=this.a
r=s%a}while(s-r+a>=4294967296)
return r},
B:function(){this.bv()
var t=this.a
this.bv()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
cE:function(){this.bv()
return(this.a&1)===0},
i6:function(a){var t,s,r,q,p,o,n,m
t=J.dk(a,0)?-1:0
do{if(typeof a!=="number")return a.c1()
s=(a&4294967295)>>>0
a=C.e.aH(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.e.aH(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.b.aH(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.b.aH(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.b.aH(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.b.aH(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.b.aH(q-n,4294967296)&4294967295)>>>0
this.b=m
n=(n^p)>>>0
this.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o&4294967295)>>>0
this.b=o}while(a!==t)
if(o===0&&n===0)this.a=23063
this.bv()
this.bv()
this.bv()
this.bv()}}
P.jO.prototype={$isa0:1,
gaq:function(a){return a.href}}
P.e9.prototype={$isa0:1}
P.kC.prototype={$isa0:1,
gU:function(a){return a.height},
gV:function(a){return a.width}}
P.kD.prototype={$isa0:1,
gU:function(a){return a.height},
gV:function(a){return a.width}}
P.kE.prototype={$isa0:1,
gU:function(a){return a.height},
gV:function(a){return a.width}}
P.kF.prototype={$isa0:1,
gU:function(a){return a.height},
gV:function(a){return a.width}}
P.kG.prototype={$isa0:1,
gU:function(a){return a.height},
gV:function(a){return a.width}}
P.kH.prototype={$isa0:1,
gU:function(a){return a.height},
gV:function(a){return a.width}}
P.kI.prototype={$isa0:1,
gU:function(a){return a.height},
gV:function(a){return a.width}}
P.kJ.prototype={$isa0:1,
gU:function(a){return a.height},
gV:function(a){return a.width}}
P.kK.prototype={$isa0:1,
gU:function(a){return a.height},
gV:function(a){return a.width}}
P.kL.prototype={$isa0:1,
gU:function(a){return a.height},
gV:function(a){return a.width},
gaq:function(a){return a.href}}
P.kM.prototype={$isa0:1,
gU:function(a){return a.height},
gV:function(a){return a.width}}
P.kN.prototype={$isa0:1,
gU:function(a){return a.height},
gV:function(a){return a.width}}
P.kO.prototype={$isa0:1,
gU:function(a){return a.height},
gV:function(a){return a.width}}
P.kP.prototype={$isa0:1,
gU:function(a){return a.height},
gV:function(a){return a.width}}
P.kQ.prototype={$isa0:1,
gU:function(a){return a.height},
gV:function(a){return a.width}}
P.kR.prototype={$isa0:1,
gU:function(a){return a.height},
gV:function(a){return a.width}}
P.le.prototype={$isa0:1,
gU:function(a){return a.height},
gV:function(a){return a.width},
gaq:function(a){return a.href}}
P.lh.prototype={
gU:function(a){return a.height},
gV:function(a){return a.width}}
P.ds.prototype={}
P.dY.prototype={$isa0:1}
P.lt.prototype={$isa0:1,
gU:function(a){return a.height},
gV:function(a){return a.width},
gaq:function(a){return a.href}}
P.d1.prototype={$isbd:1,
ga3:function(a){return a.value}}
P.lY.prototype={
gp:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.d_(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.m(new P.aR("Cannot assign element of immutable List."))},
sp:function(a,b){throw H.m(new P.aR("Cannot resize immutable List."))},
gX:function(a){if(a.length>0)return a[0]
throw H.m(new P.ca("No elements"))},
a6:function(a,b){return this.m(a,b)},
$isL:1,
$asL:function(){return[P.d1]},
$isP:1,
$asP:function(){return[P.d1]},
$isD:1,
$asD:function(){return[P.d1]}}
P.iA.prototype={
$asL:function(){return[P.d1]},
$asP:function(){return[P.d1]},
$asD:function(){return[P.d1]},
$isL:1,
$isP:1,
$isD:1}
P.iG.prototype={
$asL:function(){return[P.d1]},
$asP:function(){return[P.d1]},
$asD:function(){return[P.d1]},
$isL:1,
$isP:1,
$isD:1}
P.mb.prototype={$isa0:1}
P.mc.prototype={$isa0:1,
gU:function(a){return a.height},
gV:function(a){return a.width}}
P.d2.prototype={$isbd:1,
ga3:function(a){return a.value}}
P.mD.prototype={
gp:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.d_(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.m(new P.aR("Cannot assign element of immutable List."))},
sp:function(a,b){throw H.m(new P.aR("Cannot resize immutable List."))},
gX:function(a){if(a.length>0)return a[0]
throw H.m(new P.ca("No elements"))},
a6:function(a,b){return this.m(a,b)},
$isL:1,
$asL:function(){return[P.d2]},
$isP:1,
$asP:function(){return[P.d2]},
$isD:1,
$asD:function(){return[P.d2]}}
P.iB.prototype={
$asL:function(){return[P.d2]},
$asP:function(){return[P.d2]},
$asD:function(){return[P.d2]},
$isL:1,
$isP:1,
$isD:1}
P.iH.prototype={
$asL:function(){return[P.d2]},
$asP:function(){return[P.d2]},
$asD:function(){return[P.d2]},
$isL:1,
$isP:1,
$isD:1}
P.mQ.prototype={$isa0:1,
gU:function(a){return a.height},
gV:function(a){return a.width},
gaq:function(a){return a.href}}
P.n3.prototype={
gU:function(a){return a.height},
gV:function(a){return a.width}}
P.hn.prototype={$ishn:1,$isa0:1,
gaq:function(a){return a.href},
saO:function(a,b){return a.type=b}}
P.o_.prototype={
saO:function(a,b){return a.type=b}}
P.c5.prototype={
b0:function(a,b,c,d){var t,s,r,q,p,o
if(c==null){t=H.a([],[W.e_])
t.push(W.vQ(null))
t.push(W.vT())
t.push(new W.pS())
c=new W.jD(new W.iX(t))}s='<svg version="1.1">'+H.p(b)+"</svg>"
t=document
r=t.body
q=(r&&C.A).jg(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.cS(q)
o=t.gc2(t)
for(;t=o.firstChild,t!=null;)p.appendChild(t)
return p},
fC:function(a,b,c,d,e){throw H.m(new P.aR("Cannot invoke insertAdjacentHtml on SVG."))},
gfI:function(a){return new W.hv(a,"click",!1,[W.v_])},
$isc5:1,
$isa0:1}
P.o3.prototype={$isa0:1,
gU:function(a){return a.height},
gV:function(a){return a.width}}
P.o5.prototype={$isa0:1}
P.ez.prototype={}
P.od.prototype={$isa0:1,
gaq:function(a){return a.href}}
P.os.prototype={$isa0:1,
gU:function(a){return a.height},
gV:function(a){return a.width},
gaq:function(a){return a.href}}
P.ow.prototype={$isa0:1}
P.hz.prototype={$isa0:1,
gaq:function(a){return a.href}}
P.pH.prototype={$isa0:1}
P.pI.prototype={$isa0:1}
P.pJ.prototype={$isa0:1}
P.dC.prototype={}
P.e4.prototype={$isL:1,
$asL:function(){return[P.O]},
$isP:1,
$asP:function(){return[P.O]},
$isD:1,
$asD:function(){return[P.O]}}
P.n9.prototype={$isa0:1}
T.hP.prototype={
$asiN:function(){return[T.hQ]},
$asD:function(){return[T.hQ]}}
T.hQ.prototype={}
S.jP.prototype={
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Math Book",H.a([$.Q,$.a1,$.aT],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Giant Map",H.a([$.Q,$.a1],s),null,!1,"Map to Staffs HQ")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Microscope",H.a([$.C,$.a1,$.bf],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Star Chart",H.a([$.Q,$.a1],s),null,!1,"Cosmic Dot-to-Dot")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("History Book",H.a([$.Q,$.a1],s),null,!1,"Homestuck Anthology")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Radioactive Rock",H.a([$.c2,$.aM],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Compass",H.a([$.C,$.a1],s),null,!1,"Navigation Box")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
D:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.v]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.Z,P.U]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.fM,$.l)
q.i(0,$.bn,$.l)
q.i(0,$.eX,$.j)
q.i(0,$.be,$.E)
q.i(0,$.cw,$.j)
p=$.k
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.t
o=o+n+" to stop "
m=$.R
l=[U.c]
q.i(0,new R.a4("Recover the Books",!1,[new U.c(o+m+"ing long enough to discover that underlings stole all the books. "),new U.c("The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "),new U.c("The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books!  ")],H.a([],l),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.k
q.i(0,new R.a4("Shelve the Books",!1,[new U.c("The "+p+" finds a massive library, with no books in it! They manage to get a local "+$.t+" to stop "+$.R+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.c("The "+p+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.c("The "+p+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],l),R.vc(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.k
m="The "+p+" finds a massive library, filled with books. The "
n=$.t
m=m+n+" librarian offers to help the "+p+" search for useful books. "
o="The "+p+" begins to learn about "
k=$.y
n=o+k+" and how they have persecuted the "+n+"s.  "
k="The "+p+" has read the final book about "+k+" and feels much more prepared to face them.  "
p=this.y
q.i(0,new R.a4("Research the Denizen",!1,[new U.c(m),new U.c(n),new U.c(k)],H.a([],l),R.fe(),!1,!1,new Y.bx("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.j)
p=$.aQ
this.r.i(0,new X.F(s,q,null),p)
p=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.eQ,$.E)
s.i(0,$.cw,$.l)
q=$.k
o="The "+q+"  is approached by a "
n=$.t
s.i(0,new R.a4("Do the Math",!1,[new U.c(o+n+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.c("The "+q+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.c("The "+n+"  finds a "+n+" child "+$.R+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+q+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],l),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
q=$.k
n="The "+q+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.t
s.i(0,new R.a4("Use the Calculator",!1,[new U.c(n),new U.c("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+q+" is getting the hang of this weird calculator that controls reality. "),new U.c("With a frantic "+$.R+", a small "+o+" sprints towards the "+q+".  A giant ogre is chasing them.  In a panic, the "+q+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],l),R.ew(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
q=$.k
s.i(0,new R.a4("Solve the Equation",!1,[new U.c("The "+q+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.c("There is a flurry of motion.  The "+q+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.c("The "+q+" has done it. Against all odds they have solved the equation.  A "+$.t+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],l),R.fe(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
q=$.aQ
this.r.i(0,new X.F(p,s,null),q)
q=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.eQ,$.E)
t.i(0,$.cw,$.l)
t.i(0,$.c7,$.E)
t.i(0,$.r_,$.E)
s=$.k
r="The "+s+"  is approached by a "
p=$.t
r=r+p+" who offers them a grant to study "
o=$.am
t.i(0,new R.a4("Test the Hypothesis",!1,[new U.c(r+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.c("The "+s+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.c("The Symposium has started. The crowd of unruly "+p+"s begins "+$.R+"ing louder and louder. Finally, the "+s+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],l),R.fe(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
o=$.t
s="Too many local "+o+" have fallen ill from a mysterious plague.  Those inflicted are too weak to even "
p=$.R
s=s+p+".  It is up to the "
r=$.k
s=s+r+" to figure out how to cure the disease.  They are provided with a state of the art lab and a team of ...not completely terrible "+o+"s."
n="The "+r+" has gotten far too little sleep. Suddenly, they realize the key, the one thing they have been missing: "
m=$.am
t.i(0,new R.a4("Make the Cure",!1,[new U.c(s),new U.c(n+m+". It all makes sense now! "),new U.c("Each "+o+" lines up to receive their "+m+" injection. The sound of joyful "+p+" fills the air. The plague is defeated!  The "+r+" has a statue made of them in the town center. ")],H.a([],l),R.e0(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
r=$.k
t.i(0,new R.a4("Be the Scientist",!1,[new U.c("The "+r+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.c("The "+r+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.c("The "+r+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.R+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.t+"s are inside the final room, outfitted for a surprise party.  It is for "+r+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],l),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
l=$.aQ
this.r.i(0,new X.F(q,t,null),l)},
gI:function(){return this.cx},
gaC:function(){return this.cy},
gaD:function(){return this.db},
gK:function(){return this.dx},
gaK:function(){return this.dy}}
S.jQ.prototype={}
K.bG.prototype={}
L.jW.prototype={
$1:function(a){return!a.gcC()},
$S:function(){return{func:1,args:[L.cG]}}}
L.jX.prototype={
$1:function(a){return a.gcB()},
$S:function(){return{func:1,args:[L.cG]}}}
L.jY.prototype={
$1:function(a){return!a.gcB()},
$S:function(){return{func:1,args:[L.cG]}}}
L.cG.prototype={
F:function(){var t,s
t=Q.G(null,null,A.a9)
s=A.i("Perfectly Generic Object",H.a([],[G.a5]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),[H.M(t,0)]))
this.r2=t},
e7:function(a){var t,s,r
for(t=this.gI(),s=t.length,r=0;r<t.length;t.length===s||(0,H.bN)(t),++r)t[r].cX(a)},
jy:function(){return"<font color='"+this.ga_().m(0,$.ao).fV()+"'> "},
D:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.v]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.Z,P.U]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.d8,$.j)
q.i(0,$.bn,$.E)
q.i(0,$.dL,$.j)
q.i(0,$.c7,$.l)
q.i(0,$.dW,$.E)
p=$.k
o="The "+p+" learns that all of the local "
n=$.t
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.R+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.y
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.cr+". The "+p+" has won! "
i=[U.c]
q.i(0,new R.X("Revive the Consorts",!1,[new U.c(o),new U.c(m),new U.c(n),new U.ab(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
j=$.aP
this.c.i(0,new X.F(s,q,null),j)
j=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.eV,$.j)
s.i(0,$.ej,$.E)
s.i(0,$.eU,$.l)
s.i(0,$.cO,$.j)
s.i(0,$.cv,$.E)
q=$.k
p="The "+q+" learns that all of the local "
o=$.t
p=p+o+"s have a severe shortage of gears and cogs. It is up to the "+q+" to get the assembly lines up and running again. "
n="The "+q+" is running around and fixing all the broken down equipment. This sure is tiring! "
m="The "+q+" is training the local "+o+"s to operate the manufacturing equipment. There is "+$.R+"ing and chaos everywhere. "
o="The "+q+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+o+"s name a national holiday after the "+q+". "
l="It is time for the "+q+"  to finally face the "
k=$.y
l=l+k+". "
h="The "+k+" lies slain by the "+q+"'s "+$.cr+". The "+q+" has won! "
s.i(0,new R.X("Produce the Goods",!1,[new U.c(p),new U.c(n),new U.c(m),new U.c(o),new U.ab(l,"The tyranny of "+k+" continues with the defeat of the "+q+".",h)],H.a([],i),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
h=$.aP
this.c.i(0,new X.F(j,s,null),h)
h=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.be,$.j)
t.i(0,$.bn,$.E)
t.i(0,$.cd,$.l)
s=$.k
r="The "+s+" learns that all of the local "
q=$.t
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+s+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
o=$.R
p=p+o+"ing about? A prophecy?  "
o="The "+s+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+o+" once. "
q="It is time for the "+s+"  to finally face the "
n=$.y
q=q+n+". "
m="The "+n+" lies slain by the "+s+"'s "+$.cr+". The "+s+" has won! "
t.i(0,new R.a4("Relax the Consorts According to Prophecy",!1,[new U.c(r),new U.c(p),new U.c(o),new U.ab(q,"The tyranny of "+n+" continues with the defeat of the "+s+".",m)],H.a([],i),R.rX(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.E)
m=$.k
s="The "+m+" learns that all of the local "
n=$.t
s=s+n+"s have been too stressed about an impending famine to relax. They vow to help however they can."
q="The "+m+" fluffs more pillows than any other Player ever has before them. "
n="The "+m+"  teaches the local "+n+"s to find their chill. "
o="It is time for the "+m+"  to finally face the "
p=$.y
o=o+p+". "
r="The "+p+" lies slain by the "+m+"'s "+$.cr+". The "+m+" has won! "
t.i(0,new R.X("Relax the Consorts",!1,[new U.c(s),new U.c(q),new U.c(n),new U.ab(o,"The tyranny of "+p+" continues with the defeat of the "+m+".",r)],H.a([],i),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
i=$.aP
this.c.i(0,new X.F(h,t,null),i)},
v:function(a){return this.x},
a8:function(a,b,c,d){var t
this.d=new X.i9("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+this.x+".xml",!1,H.a([],[X.hT]),H.a([],[M.fL]))
t=this.x
this.y=t
this.e=t+".png"
this.f=t+"Big.png"
this.F()
this.D()
t=this.b
if($.$get$eb().as(t))H.bv("Duplicate aspect id for "+this.v(0)+": "+t+" is already registered for "+J.cu($.$get$eb().m(0,t))+".")
$.$get$eb().i(0,t,this)},
gb1:function(){return this.a},
gbf:function(a){return this.b},
gbM:function(){return this.c},
ghO:function(){return this.e},
gj6:function(){return this.f},
gH:function(a){return this.x},
gdj:function(){return this.y},
gcB:function(){return this.z},
gcC:function(){return this.Q},
gkJ:function(){return this.cy},
ga_:function(){return this.dx},
gK:function(){return this.dy},
gaA:function(){return this.fr},
gP:function(){return this.k3},
gI:function(){return this.k4},
gdv:function(){return this.r1},
sH:function(a,b){return this.x=b}}
L.aj.prototype={
sdR:function(a){return this.j(0,$.aA,L.e(a),!0)},
sdQ:function(a){return this.j(0,$.az,L.e(a),!0)},
shn:function(a){return this.j(0,$.ax,L.e(a),!0)},
shm:function(a){return this.j(0,$.aw,L.e(a),!0)},
sdU:function(a){return this.j(0,$.aC,L.e(a),!0)},
sdV:function(a){return this.j(0,$.aD,L.e(a),!0)},
sdT:function(a){return this.j(0,$.aB,L.e(a),!0)},
sdq:function(a){return this.j(0,$.av,L.e(a),!0)},
sdn:function(a){return this.j(0,$.au,L.e(a),!0)},
sec:function(a){return this.j(0,$.aF,L.e(a),!0)},
seb:function(a){return this.j(0,$.aE,L.e(a),!0)}}
M.k1.prototype={
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Barbells",H.a([$.al,$.c8,$.C],s),null,!1,"Strength Building Metal")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Basketball",H.a([$.eo,$.c9],s),null,!1,"Dunksphere")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Baseball Bat",H.a([$.iL,$.a2],s),null,!1,"Wooden Pole of Bone Hurting")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Rubber Ball",H.a([$.eo,$.c9],s),null,!1,"Dead Animal Corpse Ball")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Megaphone",H.a([$.bb,$.ad],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Hockey Stick",H.a([$.iL,$.a2,$.du],s),null,!1,"L Shaped Bone Hurter")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Trophy",H.a([$.C,$.bl],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Boxing Glove",H.a([$.uq,$.c9],s),null,!1,"Fist Reinforcing Pain Cubes")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Yoga Mat",H.a([$.c9,$.bj],s),null,!1,"Flesh Rubberising Practice Mat")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
D:function(){var t,s,r,q,p,o,n,m,l
t=[P.v]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.Z,P.U]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.dM,$.E)
q.i(0,$.cn,$.l)
q.i(0,$.cO,$.E)
p=$.k
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.t
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.R+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.c]
q.i(0,new R.a4("Enter the Dungeon",!1,[new U.c(o),new U.c(n),new U.c(p)],H.a([],l),R.x(),!1,!1,new Y.bx("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.w)
m=$.k
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.t
q.i(0,new R.a4("Clear the Road",!1,[new U.c(p+n+" merchants waiting for it to be cleared. "),new U.c("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.c("With a triumphant "+$.R+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.e0(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
m=$.k
n="The "+m+"  wanders into a bunch of "
p=$.t
q.i(0,new R.a4("Be the Strongest",!1,[new U.c(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.c("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.c("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.ja(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
m=$.aQ
this.r.i(0,new X.F(s,q,null),m)
m=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.dM,$.l)
t.i(0,$.eY,$.l)
t.i(0,$.cn,$.l)
s=$.k
r="The "+s+" finds a team of underdog "
q=$.t
t.i(0,new R.a4("Save the Sports",!1,[new U.c(r+q+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.c("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.c("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+q+" have won the SPORTSBALL tournament.")],H.a([],l),R.vc(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
q=$.t
s="A group of "+q+"s approach the "
r=$.k
s=s+r+". Apparently their sports team lost their coach to the "+$.y+" recently, and they need help training for THE BIG GAME. "
p="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+q+"s into fighting shape. "
o="The "+q+"s fall over "
n=$.R
t.i(0,new R.a4("Coach the Sports",!1,[new U.c(s),new U.c(p),new U.c(o+n+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+q+"s cheering and "+n+"ing.")],H.a([],l),R.e0(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
n=$.t
q="A group of "+n+"s approach the "
r=$.k
t.i(0,new R.a4("Win at Sports",!1,[new U.c(q+r+". Apparently their sports team lost a member to the "+$.y+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.c("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.c("The "+r+" ganks the "+$.am+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+n+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
l=$.aQ
this.r.i(0,new X.F(m,t,null),l)},
gI:function(){return this.cx},
gaC:function(){return this.cy},
gaD:function(){return this.db},
gK:function(){return this.dx},
gaK:function(){return this.dy}}
O.k2.prototype={
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Cod Piece",H.a([$.S,$.a7,$.b8,$.V],s),"God damn it, MI. ",!1,null)
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Poisoned Candy",H.a([$.rg,$.V,$.bR],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Cursed Lyre",H.a([$.aS,$.a2,$.by,$.V,$.af],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Snare Trap",H.a([$.S,$.aS,$.V,$.bk],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
D:function(){var t,s,r,q,p,o,n,m
t=[P.v]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Z,P.U])
t.i(0,$.cH,$.j)
t.i(0,$.fP,$.j)
t.i(0,$.co,$.j)
t.i(0,$.dH,$.j)
t.i(0,$.cB,$.j)
t.i(0,$.eP,$.j)
r="After all the bullshit the "+$.y+" has put the native "
q=$.t
r=r+q+"s through, the "
p=$.k
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.b0+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.R
m=[U.c]
t.i(0,new R.ac("Celebrate the Win",!1,[new U.c(r),new U.c(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.c(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.x(),!1,!1,new Y.ey("Rewards/no_reward.png",null),1,null,null),$.w)
p=$.t
n="A group of jubilant "+p+"s are following the "
q=$.k
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.R
t.i(0,new R.ac("Lead the Parade",!1,[new U.c(n),new U.c(o+r+"ing about how they defeated the "+$.y+". Wow, this is actually kind of embarrasing. "),new U.c("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
q=$.k
t.i(0,new R.ac("Behold the Glory of CodTier",!1,[new U.c("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.y+" has been defeated, perhaps they can finally focus on finding it."),new U.c("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.x(),!1,!1,new Y.kf("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.w)
q="The "+$.y+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.k
q=q+r+" organizes a huge festival for all the "
p=$.t
t.i(0,new R.bB("Pull the Strings of a Universe",!1,[new U.c(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.c("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.c("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ae)
m=$.bW
this.c.i(0,new X.F(s,t,null),m)},
gK:function(){return this.k1},
gP:function(){return this.k4},
gak:function(){return this.r1},
gal:function(){return this.r2},
gam:function(){return this.rx},
gaj:function(){return this.ry},
gah:function(){return this.x1},
gai:function(){return this.x2}}
Y.oc.prototype={
$ashq:function(){return[P.v]},
$asda:function(){return[P.v,P.v]}}
L.k6.prototype={
gct:function(){return this.id}}
T.k8.prototype={
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Mystical Vial of Blood",H.a([$.bf,$.by,$.Y,$.b3],s),null,!1,"Vial of Not-ABs Oil")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Bananaphone",H.a([$.aH,$.by,$.Y,$.b9],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Friendship Bracelet",H.a([$.S,$.by,$.Y,$.b3,$.fV],s),null,!1,"Soul Binding Wrist Shackle")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Bonding Manacles",H.a([$.C,$.bk,$.Y,$.b3,$.fV,$.aV],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Friendship Stairs",H.a([$.a2,$.rp,$.by,$.b3,$.Y,$.a7],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.v]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.Z,P.U]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.dn,$.j)
q.i(0,$.r3,$.j)
q.i(0,$.c7,$.l)
p=$.k
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.t
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.am+" and some boondollars in compensation."
n=this.r2
k=[U.c]
q.i(0,new R.a4("Cross the Lake",!1,[new U.c(o),new U.c(m),new U.c(l),new U.c(p)],H.a([],k),R.e0(),!1,!1,new Y.bx("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.w)
n=$.t
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.R+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.y
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.k
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.cr+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.i(0,new R.X("Unplug the Rivers",!1,[new U.c(p),new U.c(o),new U.c(j),new U.ab(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.aP
this.c.i(0,new X.F(s,q,null),n)
n=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.cO,$.j)
s.i(0,$.cB,$.E)
s.i(0,$.be,$.E)
s.i(0,$.l8,$.j)
s.i(0,$.co,$.E)
q=$.k
p="The "+q+"  and the "
o=$.e1
p=p+o+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
m="The "+q+"  and the "+o+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
l="The "+q+"  and the "+o+" trust each other to have their backs.  So when the "
j=$.y
l=l+j+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+j+"."
i="Slaying the "+j+" proves the POWER OF TEAMWORK!"
s.i(0,new R.X("Learn the Power of Teamwork",!1,[new U.c(p),new U.c(m),new U.ab(l,"The "+q+" and "+o+" end up getting distracted bickering after one of the "+j+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",i)],H.a([],k),R.ex(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.ae)
i=$.k
j="The "+i+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
o=$.t
j=j+o+"s explains that before  "
q=$.y
j=j+q+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+o+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+i+" vows to help. "
o="The "+i+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+o+"s discover that "+o+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
l="The "+i+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+q+" needs to be stopped. "
m="The "+i+" has tracked down "+q+". There can be no mercy. "
p="The "+q+" lies slain by the "+i+"'s "+$.cr+". The "+i+" is finally free to restore the chains, bringing peace and understanding to the land. "
s.i(0,new R.X("Chain the Towers",!1,[new U.c(j),new U.c(o),new U.c(l),new U.ab(m,"The tyranny  and xenophobia of "+q+" continues with the defeat of the "+i+".",p)],H.a([],k),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.k
i="The "+p+" learns of the "
q=$.b0
i=i+q+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
m=$.t
i=i+m+" explains that the "
l=$.y
m=i+l+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+m+"s from communciating with other villages and risking the entire planet falling apart.  "
i="The "+p+" hears of a fantastical secret kept at the top of the "+q+" Tower. It is said that the "+l+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
o="The "+p+" defeats a fearsome "+l+" minion, whose death unlocks the most direct path to the "+q+" Tower . "
j="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+l+". "
p="The "+l+" lies slain by the "+p+"'s "+$.cr+". The "+p+" is finally able to see what lies at the top of the "+q+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.i(0,new R.X("Protect the Beams",!1,[new U.c(m),new U.c(i),new U.c(o),new U.ab(j,"The "+q+" Tower is more at risk than ever before.",p)],H.a([],k),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.k
q="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
j=$.t
q=q+j+" on "+$.b0+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
o="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
j="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+j+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+j+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.eZ+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.i(0,new R.ac("One Degree of Separation",!1,[new U.c(q),new U.c(o),new U.c(j)],H.a([],k),R.fe(),!1,!1,new Y.T("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.k
j="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.t+" on "
o=$.b0
j=j+o+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
q="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
o="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+o+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.eZ+" is now more popular with your friends than you are."
s.i(0,new R.ac("Steal The Friends",!1,[new U.c(j),new U.c(q),new U.c(o)],H.a([],k),R.rY(),!1,!1,new Y.T("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.k
o="The "+p+"  and the "
q=$.e1
o=o+q+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
j="The "+p+"  and the "+q+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
i=$.y
j=j+i+" doing here!?"
i="Slaying the "+i+" proves to be the thing that finally pushes the "+p+" and "+q+" together."
s.i(0,new R.X("Pale Shipping Dungeon",!1,[new U.c(o),new U.ab(j,"The "+p+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.p(C.y)+".",i)],H.a([],k),R.ex(),!1,!1,new Y.j7(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ae)
i=$.aP
this.c.i(0,new X.F(n,s,null),i)
i=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.be,$.j)
t.i(0,$.bn,$.E)
t.i(0,$.cd,$.l)
s="In the wake of the defeat of the "+$.y+" it becomes really how isolated the individual "
r=$.t
s=s+r+" villages are. It is far too common for a young "+r+" to never have even MET their cousins. The "
q=$.k
s=s+q+" resolves to fix this as soon as possible."
q="The "+q+" is working hard to restore roads, track down long lost family members and generally just remind all the "+r+"s that at the end of the day they are all one big happy family. "
r="All those hours of hard work have paid off, the individual "+r+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
p="It may take a village for the "+$.eZ+" to kick your ass, but luckily they have several."
t.i(0,new R.ac("Connect The Villages",!1,[new U.c(s),new U.c(q),new U.c(r)],H.a([],k),R.e0(),!1,!1,new Y.T("Community Builder",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.k
r="The "+p+" learns that two prominent "
q=$.t
r=r+q+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+q+"s pick a side, and everyone is suffering."
s="The "+p+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
o="In a dramatic reveal, the "+p+" discovers that "
n=$.y
o=o+n+" is responsible for the feud. The two "+q+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
m="The "+p+" confronts "+n+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+p+" be able to claim it?"
q="The "+n+" lies slain by the "+p+"'s "+$.cr+". The "+p+" shows the proof to the two "+q+" families, who reconcile in a dramatic shower of happy tears and "+$.R+"ing. "
t.i(0,new R.X("Stop the Feud",!1,[new U.c(r),new U.c(s),new U.c(o),new U.ab(m,"The deception of "+n+" continues with the defeat of the "+p+".",q)],H.a([],k),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
k=$.aP
this.c.i(0,new X.F(i,t,null),k)},
gb1:function(){return this.rx},
ga_:function(){return this.ry},
gK:function(){return this.x2},
gP:function(){return this.y1},
gaA:function(){return this.G},
gI:function(){return this.O}}
T.ka.prototype={
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Pan's Pipe",H.a([$.af,$.a2,$.by,$.Y],s),null,!1,"Smonkin Weeds Pipe")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Skeleton Key",H.a([$.bh,$.Y],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Inspector's Fan",H.a([$.ad,$.C,$.by,$.Y],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Jet Pack",H.a([$.aI,$.C,$.bb,$.Y,$.a7],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.v]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.Z,P.U]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cd,$.l)
q.i(0,$.eY,$.j)
q.i(0,$.be,$.l)
p=$.k
o="The "+p+" tries posting a letter through the "
n=$.am
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.y
o=o+m+" has screwed with the mail system, crippling the "
l=$.t
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.cr+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
i=[U.c]
q.i(0,new R.X("The Mail Goes Through",!1,[new U.c(o),new U.c(k),new U.c(n),new U.ab(j,"The tyranny of "+m+" continues with the defeat of the "+p+".",l)],H.a([],i),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
l=$.aP
this.c.i(0,new X.F(s,q,null),l)
l=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.bn,$.j)
s.i(0,$.eY,$.l)
s.i(0,$.be,$.l)
s.i(0,$.cn,$.l)
s.i(0,$.cd,$.l)
q=$.k
p="The "+q+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+q+" decides that they should use the winds of their land for more projects. "
o="The "+q+" starts learning the uses of their lands "
n=$.am
o=o+n+" in manipulation of wind. Their future constructions are going to be amazing. "
n="The "+q+" uses "+n+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
m=$.t
m=n+m+" fields. The "+m+"s "+$.R+"ing is so joyful it's literally deafening. "
n=$.y
k=n+" is attacking the happy wind based farming community. The "+q+" has worked too hard for it all to be lost now. There can be no mercy. "
j="The "+n+" lies slain by the "+q+"'s "+$.cr+". The "+q+" is finally free to continue improving the land with wind. "
s.i(0,new R.X("Thinking With Wind Power",!1,[new U.c(p),new U.c(o),new U.c(m),new U.ab(k,"The tyranny of "+n+" continues with the defeat of the "+q+".",j)],H.a([],i),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
j=$.aP
this.c.i(0,new X.F(l,s,null),j)
j=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.cv,$.j)
t.i(0,$.r4,$.j)
t.i(0,$.eY,$.E)
t.i(0,$.cd,$.E)
s=$.k
r="The "+s+" is chilling in a "+$.t+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
q=$.y
r=r+q+" has screwed with the wind system, sending these giant storms at random."
p="The "+s+" learns of a "
o=$.am
p=p+o+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+o+" system so the storms are redirected from consort villages. "
o="The "+s+" finishes the dungeon that holds the  "+o+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.b0+" to do control the storms in the first place, and it was inside them all along.  "
n=" "+q+" arrives to challenge the "+s+" storm supremacy. Will the "+s+" be able to prove their worth?"
m="The "+q+" lies slain by the "+s+"'s "+$.cr+". The "+s+" has become the storm master. It is them. "
t.i(0,new R.X("The Winds of Change",!1,[new U.c(r),new U.c(p),new U.c(o),new U.ab(n,"The storm supremacy of "+q+" continues with the defeat of the "+s+".",m)],H.a([],i),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
i=$.aP
this.c.i(0,new X.F(j,t,null),i)},
gb1:function(){return this.rx},
ga_:function(){return this.ry},
gK:function(){return this.x2},
gP:function(){return this.y1},
gaA:function(){return this.G},
gI:function(){return this.O}}
Z.kb.prototype={
D:function(){var t,s,r,q,p,o,n,m,l
t=[P.v]
s=H.a(["Skateboards","Bikes","Ramps"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Z,P.U])
t.i(0,$.dM,$.w)
t.i(0,$.cn,$.E)
t.i(0,$.eT,$.j)
t.i(0,$.eR,$.ae)
t.i(0,$.l7,$.E)
r=$.k
q="The "+r+" is a bit confused about SBURB. apparently it's about "
p=$.am
q=q+p+"s or some noise?"
p="The "+r+" is sure that "+p+"s are like fucking dynamite in a handbag for some brosephs. But all they're saying is, when do you get to <b>thrash</b> anything?"
o="The "+r+' gives up on playing the game for now, and decides to instead bust out, and I quote, "the mad stunts all wicked up-ins".'
n=$.y
m="So ok. <br></br> An end to the disasters caused by "+n+" is something that a lot of "+$.t+"s seem hella pumped of. And their lair is sitting right in front of the "+r+", so they're like, yeah man I'll fight it."
n+=" is so wasted, ha ha. I mean damn."
l=[U.c]
t.i(0,new R.X("Bust Out the Mad Stunts all Wicked Up-Ins",!1,[new U.c(q),new U.c(p),new U.c(o),new U.ab(m,"the "+r+" has failed, and the consorts remain in jeopardy of getting mud on their doll's dresses or whatever.",n)],H.a([],l),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.E)
n=$.k
r="At this point, the "+n+" would like to give a shout out to their boy "
m=$.e1
r=r+m+". the two are about to go chill in front of The Dark "+$.R+", and are so psyched of it."
o="The "+m+" was leaning against the screen door when the shit popped open. they slip down the steps and break their thumb on the lawn. It wasn't a long fall, but hey I guess a thumb bone wasn't made for supporting the brunt of a huge useless tool against wet grass."
n="The "+n+" and the "+m+" didn't actually go see the movie on account of a "+$.t+" trucking his bawling "+$.am+"-ass girth into the hospital. the "+n+" give it 1.5 "
p=$.b0
t.i(0,new R.ac("Give a Shout-Out to their Boy",!1,[new U.c(r),new U.c(o),new U.c(n+p+"s out of 5 "+p+"s anyways, to keep it real. <br></br>It's OK though, The "+m+" still has another watch in them, Brotel Rwanda.")],H.a([],l),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.E)
l=$.aP
this.c.i(0,new X.F(s,t,null),l)},
at:function(){return!0},
gK:function(){return this.k1},
gak:function(){return this.k4},
gal:function(){return this.r1},
gam:function(){return this.r2},
gaj:function(){return this.rx},
gah:function(){return this.ry},
gai:function(){return this.x1},
gP:function(){return this.x2},
gI:function(){return this.y1}}
M.hS.prototype={}
Y.kc.prototype={
$ashq:function(){return[M.hS]},
$asda:function(){return[M.hS,P.v]}}
A.ki.prototype={
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Colonel Sassacre's Daunting Text ",H.a([$.Q,$.al,$.b9,$.c8],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Wise Guy Book",H.a([$.Q,$.b9],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Beagle Puss",H.a([$.bf,$.b9],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Novelty Microphone",H.a([$.bb,$.ad,$.b9],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Banana",H.a([$.aH,$.b9],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Fake Flower",H.a([$.S,$.b9],s),null,!1,"Flower that smells like Plastic")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Trick Handcuffs",H.a([$.C,$.b9],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
D:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.v]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.Z,P.U]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.co,$.l)
q.i(0,$.cQ,$.j)
q.i(0,$.cn,$.l)
p=$.k
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.t
o=o+n+"s are too scared to even "+$.R+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.y+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.c]
q.i(0,new R.a4("Defeat the Army",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.x(),!1,!1,new Y.bx("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.w)
p=$.aQ
this.r.i(0,new X.F(s,q,null),p)
p=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.dM,$.E)
s.i(0,$.cn,$.j)
s.i(0,$.cQ,$.j)
s.i(0,$.cH,$.j)
q=$.k
o="The "+q+" learns of an Open Mic Nite at the "
n=$.b0
o=o+n+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
m="The "+q+" is practicing their jokes on a street corner. A few "
k=$.t
s.i(0,new R.a4("Win the Laughs",!1,[new U.c(o),new U.c(m+k+"s let out a braying "+$.R+" of laughter, but most seem unimpressed. The "+q+" sure has a long way to go. "),new U.c("It's finally time for the Open Mic Nite at the "+n+" Club.! The "+k+"s seem like a tough crowd, but the "+q+" leaves them hysterical with laughter. It's a huge success! ")],H.a([],l),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
q=$.aQ
this.r.i(0,new X.F(p,s,null),q)
q=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.d9,$.E)
t.i(0,$.cm,$.l)
t.i(0,$.cQ,$.j)
t.i(0,$.cn,$.l)
t.i(0,$.ie,$.l)
s=$.k
r="The "+s+"  is approached by a Crafty "
p=$.t
r=r+p+" who offers them a magical "
o=$.am
r=r+o+", guaranteed to grant them any wish. The "+s+" is shocked to discover it was a ruse, and the Crafty "+p+" has already escaped to the side with their ill earned boonies. "
n="The "+s+" finds many "+p+"s, too sad to even "
m=$.R
t.i(0,new R.a4("Trick the Villain",!1,[new U.c(r),new U.c(n+m+", holding "+o+".  The Crafty "+p+" must be stopped!  "),new U.c("The "+s+" has finally caught up with the Crafty "+p+".  They thank the confused consort for how much the "+o+" helped them. Confused, the Crafty "+p+" offers to buy the "+o+" back, and is upset when the "+s+" refuses. They begin "+m+"ing and begging until the "+s+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+p+" offers them a comically large bag of boonies, which the "+s+" promptly distributes to the swindled consorts.  The "+o+" working was a ruse all along, and the Crafty "+p+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
l=$.aQ
this.r.i(0,new X.F(q,t,null),l)},
gI:function(){return this.cx},
gaC:function(){return this.cy},
gaD:function(){return this.db},
gK:function(){return this.dx},
gaK:function(){return this.dy}}
S.bw.prototype={
v:function(a){return H.p(new H.dx(H.hN(this),null))+": "+this.c},
gH:function(a){return this.c}}
S.hX.prototype={}
M.kl.prototype={
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Can of Spray Paint",H.a([$.aN,$.C],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Sensible Chuckles Magazine",H.a([$.Q,$.ap,$.b9,$.aT],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Gentleman's Razor",H.a([$.ry,$.C,$.aL],s),null,!1,"Face Cutting Hair Remover")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("How To Draw Manga",H.a([$.Q,$.ap,$.aT],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Painting of a Horse Boxing a Football Player",H.a([$.aN,$.ay,$.Q],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Collection of Classical Works",H.a([$.ap,$.Q],s),null,!1,"Book of Naked Renaissance People")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Documentary on Horses",H.a([$.ap,$.aU,$.ay],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Paint Set",H.a([$.aN,$.ap],s),null,!1,"Pain Drink Set")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Shaving Cream",H.a([$.aI,$.ap,$.C],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Classy Suit",H.a([$.S,$.ap],s),null,!1,"Georgio Armani Suit")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("The Fatherly Gent's Shaving Almanac ",H.a([$.Q,$.ap,$.aT],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
D:function(){var t,s,r,q,p,o,n,m,l
t=[P.v]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.Z,P.U]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.dK,$.l)
q.i(0,$.cw,$.j)
q.i(0,$.be,$.l)
p=$.k
o="The "+p+" visits a beautiful "
n=$.am
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.t
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.y+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.R+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.c]
q.i(0,new R.a4("Catch the Thief",!1,[new U.c(o),new U.c(l),new U.c(n)],H.a([],p),R.x(),!1,!1,new Y.bx("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.w)
m=$.aQ
this.r.i(0,new X.F(s,q,null),m)
m=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.dM,$.E)
s.i(0,$.cn,$.l)
s.i(0,$.cQ,$.E)
s.i(0,$.bn,$.l)
s.i(0,$.cH,$.j)
q=$.k
o="The "+q+" finds a troupe of dejected looking "
n=$.t
n=o+n+"s. Apparently they want to put on a famous "+n+" play called 'The "
o=$.b0
n=n+o+" "
l=$.am
s.i(0,new R.a4("Perform the Play",!1,[new U.c(n+l+"', but have no one to play the titular role!  Does the "+q+" have what it takes to bring the iconic role to life? "),new U.c("The "+q+" is practicing their lines for the upcoming performance of 'The "+o.toUpperCase()+" "+l.toUpperCase()+"'. Man, who would have thought a "+l+" would have so many different emotions! "),new U.c("It's finally time for performance of the 'The "+o.toUpperCase()+" "+l.toUpperCase()+"'. The audience is moved to tears and "+$.R+"ing at the "+q+" stirring performance as the "+l+". ")],H.a([],p),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
l=$.aQ
this.r.i(0,new X.F(m,s,null),l)
l=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.fP,$.E)
t.i(0,$.co,$.E)
t.i(0,$.eP,$.E)
t.i(0,$.cm,$.E)
t.i(0,$.bn,$.l)
t.i(0,$.be,$.l)
s=$.k
r="The "+s+"  is cordially invited to the dinner party of Miss "
q=$.R
r=r+q+"ingworth, "
o=$.t
t.i(0,new R.a4("Attend the Dinner Party",!1,[new U.c(r+o+" heiress to the "+$.am+" fortune. "),new U.c("The "+s+" is coached on etiquette by  Miss "+q+"ingworth's butler. It would not do to embarass the young Miss.  "),new U.c("It is finally time for Miss "+q+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+s+" is the guest of honor. They successfully charm all of the "+o+"s with a captivating story of dining customs from their home world. ")],H.a([],p),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.aQ
this.r.i(0,new X.F(l,t,null),p)},
gI:function(){return this.cx},
gaC:function(){return this.cy},
gaD:function(){return this.db},
gK:function(){return this.dx},
gaK:function(){return this.dy}}
T.kn.prototype={}
V.kq.prototype={
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Trendy Fabric",H.a([$.aN,$.S],s),null,!1,"Weird Tasting Candy Paper")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Necklace",H.a([$.aN,$.rm,$.fV],s),null,!1,"Nasty Candy Necklace")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Sewing Needle",H.a([$.C,$.rt,$.b1],s),null,!1,"Cloth Stabbing Knife")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=$.iJ
r=A.i("Broom",H.a([r,$.a2,$.al,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Rolling Pin",H.a([$.a2,$.rA,$.al],s),null,!1,"Babushkas Punishment Pole")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Velvet Pillow",H.a([$.S,$.bj,$.by,$.aN,$.iM],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Yarn Ball",H.a([$.aN,$.S],s),null,!1,"Cats Plaything")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Refrigerator",H.a([$.aV,$.c8,$.C,$.bq],s),null,!1,"Food Hardening Box")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Photo Album",H.a([$.aN,$.Q],s),null,!1,"Memory Book")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Ice Cubes",H.a([$.bq],s),null,!1,"Hard Water")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Cast Iron Skillet",H.a([$.C,$.aI,$.al,$.c8,$.rl],s),null,!1,"Fancy Unstoppable Weapon")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Failed Dish",H.a([$.bR],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Potted Plant",H.a([$.aN,$.bQ,$.b5],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Chicken Leg",H.a([$.aH,$.bo,$.bh],s),null,!1,"Thicc Chicken")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Juicy Steak",H.a([$.aH,$.bo],s),null,!1,"Juicy Cow Flesh")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Wedding Cake",H.a([$.aN,$.aH,$.b3],s),null,!1,"The Only Benefit of a Wedding")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
D:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.v]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.Z,P.U]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cH,$.l)
q.i(0,$.cB,$.l)
q.i(0,$.co,$.E)
p=$.k
o="The "+p+" is visited by a Beautiful "
n=$.t
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.am
l=[U.c]
q.i(0,new R.a4("Design the Dress",!1,[new U.c(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.c(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.c("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.R+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.aQ
this.r.i(0,new X.F(s,q,null),n)
n=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.co,$.j)
s.i(0,$.cn,$.l)
s.i(0,$.eP,$.j)
s.i(0,$.dH,$.l)
s.i(0,$.bn,$.j)
q=$.k
p="The "+q+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
o="The "+q+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
m=$.am
o=o+m+"'. It is incredible how much of a difference it makes! "
k=$.t
s.i(0,new R.a4("Bake the Cake",!1,[new U.c(p),new U.c(o),new U.c("It's finally time for competition! The Distinguised "+k+" takes a slow, thoughtful bite of the "+q+"'s cake. There is a pause, and then the Distinguished "+k+" begins "+$.R+"ing up a storm!  The "+m+" did the trick, "+q+"'s cake is immediately declared the winner! ")],H.a([],l),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
q=$.aQ
this.r.i(0,new X.F(n,s,null),q)
q=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.eR,$.j)
t.i(0,$.bn,$.l)
t.i(0,$.eS,$.j)
t.i(0,$.be,$.l)
t.i(0,$.l8,$.j)
s=$.k
r="The "+s+" finds a loom, and a Wizened "
p=$.t
r=r+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+s+" is enchanted by the thought of this. "
o="The "+s+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
n=$.am
o=o+n+" colored thread. Is this finally it?  "
s="The "+s+", slowly, methodically weaves a shawl from the skein of "+n+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.R+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+s+" just uses it to alchemize other things."
p=this.y
t.i(0,new R.a4("Weave the Cloth",!1,[new U.c(r),new U.c(o),new U.c(s)],H.a([],l),R.x(),!1,!1,new Y.bx("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.w)
p=$.aQ
this.r.i(0,new X.F(q,t,null),p)},
gI:function(){return this.cx},
gaC:function(){return this.cy},
gaD:function(){return this.db},
gK:function(){return this.dx},
gaK:function(){return this.dy}}
U.kr.prototype={
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.aT,$.ad,$.Q,$.aS,$.Y,$.a7],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Egg Timer",H.a([$.aU,$.by,$.Y,$.aS],s),null,!1,"Egg That Counts Down to Your Death")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Skull Timer",H.a([$.bh,$.by,$.Y,$.aS],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Poison Flask",H.a([$.bf,$.Y,$.bR],s),null,!1,"Glass of Bone Hurting Juice")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Ice Gorgon Head",H.a([$.bf,$.Y,$.bq,$.aS,$.bk,$.bT,$.bg],s),null,!1,"Oddly Attractive Decapitated Head")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Obituary",H.a([$.aV,$.bg,$.aS,$.Q,$.Y],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.v]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.Z,P.U]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.dL,$.j)
q.i(0,$.d8,$.l)
q.i(0,$.eY,$.E)
q.i(0,$.bn,$.E)
q.i(0,$.c7,$.l)
p=$.k
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.t
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.am
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.y
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.cr+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.c]
q.i(0,new R.X("Empty the Graves",!1,[new U.c(o),new U.c(m),new U.c(l),new U.ab(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.aP
this.c.i(0,new X.F(s,q,null),n)
n=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.dL,$.j)
s.i(0,$.d8,$.l)
s.i(0,$.ek,$.ae)
s.i(0,$.ei,$.l)
s.i(0,$.r_,$.l)
s.i(0,$.dn,$.l)
s.i(0,$.d8,$.l)
s.i(0,$.bn,$.E)
s.i(0,$.c7,$.l)
s.i(0,$.d7,$.l)
q=$.k
p="The "+q+" has found a group of Violent "
o=$.t
p=p+o+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
m=$.b0
p=p+m+"', the fuel their post apocalyptic society runs on. "
l="The "+q+" has survived a small assault team of Violent "+o+"s, and is declared their new leader. They beg and grovel and "+$.R+" and ask that the "+q+" help them take back their "+m+" from a rival gang. "
k="The "+q+" is now the warlord of nearly all of the Violent "+o+"s. There is clearly not enough "+m+" for everyone, though. It turns out that the "
j=$.y
k=k+j+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
h="There isn't enough room in this wasteland for the both of them. It's time to take out the "+j+"."
o="The "+j+" lies slain by the "+q+"'s "+$.cr+". The "+q+" distributes the hoard of "+m+" to the Violent "+o+"s and keeps the hoard of grist for themself. "
s.i(0,new R.X("Become the Warlord",!1,[new U.c(p),new U.c(l),new U.c(k),new U.ab(h,"The "+m+" shortage continues with the defeat of the "+q+".",o)],H.a([],i),R.ew(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.j)
o=$.k
q="The "+o+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
m=$.am
q=q+m+"s alike. "
m=$.t+"s begin to flock to the safe areas that The "+o+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+m+"s are found in some nearby mines. "
h="The "+o+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
k=$.y
h=h+k+" remains alive, the safe zone will be temporary at best. "
l=k+" is attacking the safe zones. The "+o+" has worked too hard for it all to be lost now. There can be no mercy. "
p="The "+k+" lies slain by the "+o+"'s "+$.cr+". The "+o+" is finally free to continue improving the land. "
s.i(0,new R.X("Make This Stupid Planet Habitable",!1,[new U.c(q),new U.c(m),new U.c(h),new U.ab(l,"The tyranny of "+k+" continues with the defeat of the "+o+".",p)],H.a([],i),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.aP
this.c.i(0,new X.F(n,s,null),p)
p=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.be,$.j)
t.i(0,$.c7,$.j)
t.i(0,$.r7,$.ae)
t.i(0,$.fM,$.E)
s=$.k
r="The "+s+" finds a small dungeon bearing the image of "
q=$.y
r=r+q+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+s+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.t+"s, the "+s+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+s+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
n="The timer doesn\u2019t stop from counting lower. The "+s+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+s+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+q+"? Either way, the "+s+" isn\u2019t very pleased with the "+q+"."
m="The "+s+" tracks down the location of the "+q+" \u2018s lair. It\u2019s payback time!"
l="The "+q+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+s+"."
t.i(0,new R.X("Learn the Prophecy",!1,[new U.c(r),new U.c(o),new U.c(n),new U.ab(m,"The "+s+" couldn\u2019t get their revenge. "+q+" has a hearty laugh at their expense.",l)],H.a([],i),R.ew(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
l=$.k
q="The "+l+" learns from one of their "
s=$.t
q=q+s+"s that there is an ancient prophecy of a "
m=$.b0
q=q+m+" plague that is due to kill them all any day now."
n="The "+l+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.am
n=n+o+", which currently happens to be the "+s+"s. "
s="The "+l+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+m+" plague into devastating the underlings instead of the "+s+"s. The underling army is all but decimated, and "
m=$.y
s=s+m+"s lair is all but undefended. "
o="The "+l+" is finally ready to face the "+m+"."
r="The "+m+" lies slain by the "+l+"'s "+$.cr+". The "+l+" has won! "
t.i(0,new R.X("Learn the Prophecy",!1,[new U.c(q),new U.c(n),new U.c(s),new U.ab(o,"The tyranny of "+m+" continues with the defeat of the "+l+".",r)],H.a([],i),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
i=$.aP
this.c.i(0,new X.F(p,t,null),i)},
gb1:function(){return this.rx},
ga_:function(){return this.ry},
gK:function(){return this.x2},
gP:function(){return this.y1},
gaA:function(){return this.u},
gI:function(){return this.aw}}
Z.kt.prototype={
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Dream Diary",H.a([$.Q,$.aT,$.Y],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Interlocking Brick",H.a([$.aU,$.by,$.al,$.Y,$.a7],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Art Supplies",H.a([$.aU,$.by,$.Y],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
D:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.v]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.Z,P.U]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.eR,$.l)
q.i(0,$.eS,$.j)
q.i(0,$.be,$.l)
q.i(0,$.l8,$.l)
p=$.t
o="A "+p+" child tugs on the "
n=$.k
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.am
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.y
k=[U.c]
q.i(0,new R.X("Make the Thing",!1,[new U.c(o+l+"'s lair light up.  Only 99 to go!"),new U.c("An entire line of "+p+" children are "+$.R+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "),new U.c("The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."),new U.ab("The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife.","Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.aP
this.c.i(0,new X.F(s,q,null),n)
n=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.cv,$.l)
s.i(0,$.eS,$.j)
s.i(0,$.el,$.l)
s.i(0,$.cP,$.l)
s.i(0,$.kZ,$.l)
s.i(0,$.cQ,$.j)
q=$.k
p="There is a portrait of the "+q+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+q+" tries not to let it bother them. "
o="More and more frequently, the "+q+" sees vandalized copies of their portraits. Teen "
m=$.t
o=o+m+"s are even starting to snigger and "
l=$.R
l=o+l+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+l+" harder. "
m="In a flash of inspiration, the "+q+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+q+" has reclaimed the vandals hateful message as their own one of strength. "
o=$.y
s.i(0,new R.X("Deconstruct the Satire",!1,[new U.c(p),new U.c(l),new U.c(m),new U.ab("The "+o+" is furious that their campaign to discredit the "+q+" has failed. They attack the "+q+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+o+".")],H.a([],k),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
o=$.aP
this.c.i(0,new X.F(n,s,null),o)
o=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.dK,$.j)
t.i(0,$.l0,$.l)
t.i(0,$.be,$.l)
t.i(0,$.cP,$.j)
t.i(0,$.kZ,$.j)
t.i(0,$.eS,$.l)
s=$.k
r="The "+s+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
q=$.y
t.i(0,new R.X("Dream the Dream",!1,[new U.c(r+q+" Minion wanders by in a "+$.b0+" "+s+" costume and it just seems inevitable.  "),new U.c("You are trying to make sense of things. What is going on lately with the land? A "+$.t+" is "+$.R+"ing in reverse. Another is in a "+$.am+" wig.  "),new U.c("A boardroom filled with underlings glares severely at the "+s+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.ab("The "+s+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+q+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
k=$.aP
this.c.i(0,new X.F(o,t,null),k)},
ga_:function(){return this.rx},
gK:function(){return this.x1},
gP:function(){return this.x2},
gaA:function(){return this.G},
gI:function(){return this.O}}
Q.eO.prototype={
gH:function(a){return this.c}}
Q.lm.prototype={}
Q.kw.prototype={}
X.i9.prototype={}
X.hT.prototype={
$S:function(){return{func:1,v:true,args:[[P.L,M.fL]]}}}
M.fL.prototype={}
U.kS.prototype={
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Fluthulu Poster",H.a([$.S,$.bj,$.bg,$.br],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Scalemate",H.a([$.S,$.bj,$.bg],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Replica Bone Shield",H.a([$.aV,$.aU,$.bh,$.f3,$.b8],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Replica Ice Sword",H.a([$.aU,$.uw,$.f4,$.b8],s),null,!1,"Fake Hard Water Long Stabber")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Zombie Mask",H.a([$.aU,$.bT,$.bo,$.bg],s),null,!1,"Dead Face")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Vampire Romance Novel",H.a([$.aT,$.Q,$.aO,$.bg],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Wizardy Herbert",H.a([$.Q,$.aa,$.al],s),null,!1,"Shitty Wizard Object")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Complacency of the Learned",H.a([$.Q,$.aa,$.al],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Grimoire for Summoning the Zoologically Dubious ",H.a([$.Q,$.aa,$.bT,$.bg,$.br],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Wizard Statue",H.a([$.aV,$.aM,$.aa,$.al,$.b8],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Mermaid Fountain",H.a([$.aV,$.ri,$.aa,$.al,$.b8],s),null,!1,"Water Spitting Fish Woman Statue")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.v]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.Z,P.U]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.eT,$.ae)
q.i(0,$.cB,$.l)
q.i(0,$.cd,$.l)
q.i(0,$.d9,$.E)
p=$.k
o="The "+p+" learns of a Beautiful "
n=$.t
o=o+n+" who has been kidnapped by the vial "
m=$.y
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.am
j=[U.c]
q.i(0,new R.a4("Save the Beautiful Consort",!1,[new U.c(o),new U.c(l+k+" can open it. Looks like it's time to go questing."),new U.c("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.x(),!1,!1,new Y.cW("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.aQ
this.r.i(0,new X.F(s,q,null),p)
p=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.cm,$.j)
s.i(0,$.dn,$.j)
s.i(0,$.l1,$.l)
s.i(0,$.c7,$.j)
s.i(0,$.ek,$.j)
s.i(0,$.fO,$.l)
q=$.k
o="The "+q+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
n=$.t
s.i(0,new R.a4("Do not Drink...Wine.",!1,[new U.c(o+n+" leave, and no one can remember the last time he received guests."),new U.c("The "+q+" attends the dinner. Count Feratu is an.... eccentric "+n+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.c(" The "+q+" sees Castle Feratu in the distance. The silhouette of a "+n+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.aQ
this.r.i(0,new X.F(p,s,null),n)
n=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.cm,$.j)
t.i(0,$.ij,$.l)
t.i(0,$.c7,$.j)
t.i(0,$.dG,$.l)
t.i(0,$.eQ,$.l)
t.i(0,$.r3,$.l)
s=$.k
r="The "+s+" finds a group of three "
q=$.t
r=r+q+"s "
p=$.R
t.i(0,new R.a4("Expose the Conspiracy",!1,[new U.c(r+p+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+s+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.c("The "+s+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.c("The "+s+" shows the conspiracy papers to the three "+q+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+q+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+p+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
j=$.aQ
this.r.i(0,new X.F(n,t,null),j)},
gI:function(){return this.cx},
gaC:function(){return this.cy},
gaD:function(){return this.db},
gK:function(){return this.dx},
gaK:function(){return this.dy}}
L.kT.prototype={
ga_:function(){return this.rx}}
N.Z.prototype={
v:function(a){return H.p(new H.dx(H.hN(this),null))+": "+H.p(this.b)},
gdr:function(){return this.b}}
A.kX.prototype={
$5:function(a,b,c,d,e){var t,s
for(t=this.a,s=0;s<2;++s)t[s].$5(a,b,c,d,e)},
$S:function(){return{func:1,args:[D.dp,[Q.bK,N.Z],E.cx,L.dP,A.d3]}}}
A.kV.prototype={
$5:function(a,b,c,d,e){var t,s
if(!b.gR(b).A()){t=a.f$
s=this.a
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(this.b)),[H.M(t,0)]))}},
$S:function(){return{func:1,args:[D.dp,[Q.bK,N.Z],E.cx,L.dP,A.d3]}}}
A.kW.prototype={
$5:function(a,b,c,d,e){if(J.jL(b)===!0)a.gcu().iR(0,e.w(this.a),this.b)},
$S:function(){return{func:1,args:[D.dp,[Q.bK,N.Z],E.cx,L.dP,A.d3]}}}
D.dp.prototype={
eh:function(a){var t,s,r,q,p,o,n,m,l,k,j,i
for(t=this.e$.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.bN)(t),++r){q=t[r]
p=J.cV(q)
for(o=p.gcu().gau(),o=o.gR(o);o.A();){n=o.gJ()
m=J.eI(p.gcu().m(0,n),q.gbB())
l=this.f$
C.a.h(l.b,new Q.h(n,l.k(n,J.qF(m)),[H.M(l,0)]))}}this.f$.fg()
this.gct()
for(t=this.gct().a.gau(),t=t.gR(t),s=this.r$,o=this.b$;t.A();){k=t.gJ()
j=this.gct().a.m(0,k)
l=this.f$
i=Q.oE(l,J.wC(j),H.M(l,0))
s.i(0,k,i)
if(j.giW()!=null){l=this.c$
j.c.$5(this,i,o,l,a)}}this.f$.fg()
this.jh()},
kp:function(a,b){var t,s,r,q
t=P.a3(null,null,null,N.Z)
s=b.w(a)
for(r=J.bP(a);r.A();){q=r.gJ()
if(!J.N(q,s))t.h(0,q)}this.f$.ku(0,t.gdW(t))},
jh:function(){var t,s
t=P.a3(null,null,null,N.Z)
for(s=this.r$,s=s.gaF(s),s=s.gR(s);s.A();)t.a4(0,s.gJ())
this.f$.ky(0,t.gdW(t))},
aG:function(a){return Q.Eg(this.r$.m(0,a.a).b,null,N.Z)},
gaV:function(a){return this.c$},
gbM:function(){return this.e$},
gcu:function(){return this.f$},
saV:function(a,b){return this.c$=b}}
D.ik.prototype={
aX:function(a){this.a.i(0,a.a,a)}}
D.fQ.prototype={
gH:function(a){return this.a},
ge5:function(a){return this.b},
giW:function(){return this.c}}
D.lb.prototype={}
D.lc.prototype={
$1:function(a){return H.td(a,this.a)},
$S:function(){return{func:1,args:[N.Z]}}}
O.da.prototype={}
O.ec.prototype={
$asda:function(a){return[a,P.dC]}}
O.hq.prototype={
$asda:function(a){return[a,P.v]}}
O.lf.prototype={
ga_:function(){return this.rx},
gK:function(){return this.x1},
gP:function(){return this.x2},
gI:function(){return this.C}}
V.lg.prototype={
$asec:function(){return[R.fR]},
$asda:function(){return[R.fR,P.dC]}}
Z.i8.prototype={}
E.hj.prototype={
v:function(a){return this.b}}
E.cx.prototype={
v:function(a){return H.bM(H.bM(this.cG(0),P.bU("\\s",!0,!0),""),P.bU("'",!0,!0),"")},
cp:function(){return new E.fd(this,P.cK(D.bi,P.U),H.a([],[A.cN]),[E.cx])},
aR:function(a){var t=E.rb(this.d,this.c)
this.dY(t)
return t},
dY:function(a){a.sI(this)
a.ch=this.ch
a.cx=!1
a.scj(this.gcj())
a.db=!1
a.fr=this.fr
a.fx=this.fx
a.fy=this.fy
a.go=!1
a.id=N.DM(this.id)
a.k1=this.k1
a.k2=this.k2
a.k3=this.k3
a.r1=this.r1
a.r2=this.r2
a.rx=this.rx
a.ry=this.ry},
kB:function(a){var t,s,r
t=this.c.u
s=$.c4
s=this.a$.aI(s)
r=$.bC
r=this.a$.aI(r)
return t.a.B()*(r-s)+s},
kA:function(){return this.kB(null)},
cG:function(a){return this.d},
n:function(a,b){var t,s,r
this.a$=this.cp()
t=$.is+1
$.is=t
this.k4=t
this.a=$.nA
t=$.$get$cg()
s=P.a3(null,null,null,D.bi)
r=new A.fC(this,null,null,!1,!1,!1,s,0,0,!0,!1)
s.a4(0,t)
r.e=!0
this.a$.f8(r,null,null)},
gaV:function(a){return this.c},
gH:function(a){return this.d},
gcj:function(){return this.cy},
gbf:function(a){return this.k4},
saV:function(a,b){return this.c=b},
scj:function(a){return this.cy=a}}
E.j4.prototype={$ishp:1}
E.J.prototype={
cX:function(a){a.k2.push(new E.J(this.a,this.b,this.c))},
v:function(a){var t="["+H.p(this.a)+" x "+H.p(this.b)
return t+(this.c?" (from Aspect)":"")+"]"},
gcM:function(){return this.a}}
E.fz.prototype={
cX:function(a){a.k2.push(new E.J(a.c.u.w(this.d),this.b,this.c))},
v:function(a){var t="[(Random from "+P.rG(this.d,"(",")")+") x "+H.p(this.b)
return t+(this.c?" (from Aspect)":"")+"]"},
gI:function(){return this.d}}
E.jZ.prototype={
cX:function(a){var t,s
t=a.k2
s=a.ay.a.gI()
C.a.a4(t,new H.db(s,new E.k_(this),[H.M(s,0),null]))
s=a.k2
t=a.az.a.gI()
C.a.a4(s,new H.db(t,new E.k0(this),[H.M(t,0),null]))},
v:function(a){return"[Stats assigned from player Interests x"+H.p(this.b)+"]"}}
E.k_.prototype={
$1:function(a){var t=this.a
return new E.J(a.gcM(),a.b*t.b,t.c)},
$S:function(){return{func:1,args:[E.J]}}}
E.k0.prototype={
$1:function(a){var t=this.a
return new E.J(a.gcM(),a.b*t.b,t.c)},
$S:function(){return{func:1,args:[E.J]}}}
Y.lk.prototype={
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("How to Teach Your Friends to Hack SBURB",H.a([$.aT,$.V,$.Q,$.a7,$.lH],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Unstable Domino",H.a([$.aU,$.V,$.aS],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Exposed Thread",H.a([$.S,$.V,$.aS],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Teetering Plate",H.a([$.lG,$.V,$.aS],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.v]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Z,P.U])
t.i(0,$.l9,$.l)
t.i(0,$.cd,$.j)
t.i(0,$.d7,$.E)
t.i(0,$.dJ,$.j)
r=$.t
q="An excited "+r+" runs up to the "
p=$.k
q=q+p+" and starts to "
o=$.R
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.b0
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.am
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.y
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.c]
t.i(0,new R.X("I'm So Meta, Even This Acronym",!1,[new U.c(q),new U.c(m),new U.c(n),new U.ab(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
o=$.k
t.i(0,new R.ac("Cooking with Petrol",!1,[new U.c("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.y+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.c("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.c("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.t+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.x(),!1,!1,new Y.ey("Rewards/no_reward.png",null),1,null,null),$.w)
o=$.t
j="Now that the "+o+"s are free from the reign of "+$.y+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.k
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.R
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.b0+" Quest Online: The "+$.am+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.db
t.i(0,new R.ac("Stop the Meta",!1,[new U.c(j),new U.c(r),new U.c(o)],H.a([],i),R.x(),!1,!1,new Y.bx("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.w)
p="The "+$.y+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.k
p=p+o+" shows the "
r=$.t
t.i(0,new R.bB("Allow Others to Meta a Universe",!1,[new U.c(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.c("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.c("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.R+"s in time to stop them.    ")],H.a([],i),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ae)
i=$.bW
this.c.i(0,new X.F(s,t,null),i)},
gK:function(){return this.k1},
gP:function(){return this.k2},
gak:function(){return this.k3},
gal:function(){return this.k4},
gam:function(){return this.r1},
gaj:function(){return this.r2},
gah:function(){return this.rx},
gai:function(){return this.ry},
gI:function(){return this.x1}}
Y.ll.prototype={
at:function(){return!0},
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Sherpa Parka",H.a([$.bq,$.V,$.ce],s),"Clearly the best class uses this.",!1,null)
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Guide Book",H.a([$.a7,$.bq,$.aT,$.Q,$.V,$.a1],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Whistle",H.a([$.C,$.V,$.bb],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Announcement System",H.a([$.C,$.V,$.ad,$.a1],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
D:function(){var t,s,r,q,p,o
t=[P.v]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Z,P.U])
t.i(0,$.l9,$.j)
t.i(0,$.cd,$.j)
t.i(0,$.d7,$.l)
t.i(0,$.dJ,$.j)
r="Now that the "+$.y+" is out of the way, a group of "
q=$.t
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.k
o=[U.c]
t.i(0,new R.ac("Find the Home",!1,[new U.c(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.c("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.c("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.R+", but they are happy.")],H.a([],o),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
q="The "+$.y+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.k
t.i(0,new R.bB("Find the Frogs",!1,[new U.c(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.c("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.c("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.t+" "+$.R+"s in time to stop them.    ")],H.a([],o),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ae)
o=$.bW
this.c.i(0,new X.F(s,t,null),o)},
gP:function(){return this.k1},
gak:function(){return this.k2},
gal:function(){return this.k3},
gam:function(){return this.k4},
gaj:function(){return this.r1},
gah:function(){return this.r2},
gai:function(){return this.rx}}
T.ln.prototype={
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Doll",H.a([$.lG,$.aN,$.aJ,$.Y],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Puppet",H.a([$.a2,$.aJ,$.Y,$.a7,$.bg],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Mirror",H.a([$.rs,$.Y],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Shipping Grid",H.a([$.Q,$.Y,$.aO],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Shades",H.a([$.ay,$.bf,$.Y],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.v]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.Z,P.U]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.ei,$.E)
q.i(0,$.dX,$.j)
q.i(0,$.cn,$.l)
p=$.k
o="The "+p+", guided by a "+$.t+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.y
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.cr+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.c]
q.i(0,new R.X("Find Yourself",!1,[new U.c(o),new U.c(n),new U.c(m),new U.ab(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
j=$.k
p="The "+j+" finds a Violent "
l=$.t
p=p+l+". A Magical Talking "
k=$.am
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.y
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.i(0,new R.X("Steal the Heart",!1,[new U.c(p),new U.c(m),new U.c(k),new U.ab(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.rY(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.j)
h=$.aP
this.c.i(0,new X.F(s,q,null),h)
h=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.cQ,$.j)
s.i(0,$.l1,$.j)
s.i(0,$.eY,$.l)
s.i(0,$.c7,$.j)
s.i(0,$.co,$.l)
s.i(0,$.d7,$.E)
q=$.k
p="The "+q+" is just going through their land when they get ambushed by a  copy of themselves made of "
o=$.am
p=p+o+"! The player barely gets away with their life! "
n="The "+q+" skirmishes with the "+o+" copy a few times. The "+o+" copy begins to berate the player about their moral failings and weaknesses."
m="The "+q+" realizes that the "+o+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
l=$.y
o=m+l+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+o+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+l+". "
m=l+" has been the cause of so much personal grief for the "+q+".  There can be no mercy. "
k="The "+l+" lies slain by the "+q+"'s "+$.cr+". The "+q+" is victorious. "
s.i(0,new R.X("Confront yourself.",!1,[new U.c(p),new U.c(n),new U.c(o),new U.ab(m,"The assholeness of "+l+" continues with the defeat of the "+q+".",k)],H.a([],i),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
k="Now that the "+$.y+" has been defeated, a Copy "
q=$.k
k=k+q+" has appeared. They claim they are the TRUE "+q+",and that the other is an imposter who just wants their fame! All of the "
l=$.t
k=k+l+"s "
m=$.R
k=k+m+" in confusion and don't seem to know what to do."
m="A wizened "+q+" creates a series of challenges that only the REAL "+q+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+m+" for more than five minutes straight. At the end of it, all the "+l+"s unanimously agree that the Fake "+q+" is the winner. THIS IS STUPID."
l="The REAL "+q+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+q+" as three "+l+"s in an overcoat using some weird Heart magic."
q="The "+$.eZ+" knows who they are, and their confidence is turned into a pink lightning attack."
s.i(0,new R.ac("Prove Your Identity",!1,[new U.c(k),new U.c(m),new U.c(l)],H.a([],i),R.e0(),!1,!1,new Y.T("The Real Heart Player",q,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
q=$.k
l="The "+q+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
m="The next time the "+q+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
k="Another mirror, another punch. Except this time....the mirror is unaffected. The "+q+" in the reflection smirks back. In a rage the "+q+" assaults the mirror until their knuckles are bloody. Still the reflected "+q+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+q+" collapses in an exhausted heap and considers their words."
o="When the "+q+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+q+", even if that shouldn't be possible. 'Help me.', the "+q+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
n=$.y
o=o+n+"."
n="The "+q+" has accepted their fractured soul, and the destructiveness inherent in it. The "+n+" is dead."
s.i(0,new R.X("Shatter The Mirrors",!1,[new U.c(l),new U.c(m),new U.c(k),new U.ab(o,"The "+q+" destroyed themselves.",n)],H.a([],i),R.ew(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.j)
n=$.aP
this.c.i(0,new X.F(h,s,null),n)
n=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.ig,$.j)
t.i(0,$.co,$.j)
t.i(0,$.l6,$.j)
t.i(0,$.eP,$.l)
t.i(0,$.fO,$.j)
t.i(0,$.cB,$.l)
t.i(0,$.dX,$.E)
s=$.k
r="The "+s+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
q=$.t
t.i(0,new R.X("Ship All the Ships",!1,[new U.c(r+q+"s have no idea what's coming. "),new U.c("The "+s+" extends their shipping grid to include the entire "+q+" population, and begins subtly pushing to make these ships a reality. Happy "+$.R+"s ring out through the air.  "),new U.c("The "+s+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.b0+" laws put in place by "+$.y+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
s=$.k
q="The "+s+" finds a weeping Broken Hearted "
r=$.t
q=q+r+". The most Fetching "+r+" of their dreams just turned them down to the "
p=$.b0
q=q+p+" Dance and they are miserable. On a whim, the "+s+" offers to take them instead. The "+r+" immediately brightens.  "
o="The Broken Hearted "+r+" and the "+s+" are shopping for matching outfits to wear to the "+p+" Dance. Oh look, there is the Fetching "+r+". The Broken Hearted "+r+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+s+" goes over to the Fetching "+r+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+r+" really is busy with their job as a "
m=$.R
t.i(0,new R.ac("Heal The Broken Heart",!1,[new U.c(q),new U.c(o+m+" salesman for the "+p+" dance, but the Broken Hearted "+r+" ran away crying before they could explain that they'd love to date them anyways! The "+s+" sees an opportunity to save the day."),new U.c("It is the day of the big "+p+" Dance. The "+s+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+r+" and the Mended Hearted "+r+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.ja(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
r=$.k
m="The "+r+"  and the "
s=$.e1
m=m+s+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
p="The "+r+"  and the "+s+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
o=$.y
p=p+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+r+" and "+s+" together."
t.i(0,new R.X("Flushed Shipping Dungeon",!1,[new U.c(m),new U.ab(p,"The "+r+" and "+s+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.p(C.y)+".",o)],H.a([],i),R.ex(),!1,!1,new Y.iq(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.ae)
o=$.k
s="The "+o+"  and the "
r=$.e1
s=s+r+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
p="The "+o+"  and the "+r+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.y
p=p+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+o+" and "+r+" together."
t.i(0,new R.X("Pitched Shipping Dungeon",!1,[new U.c(s),new U.ab(p,"The "+o+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.p(C.y)+".",m)],H.a([],i),R.ex(),!1,!1,new Y.j8(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.ae)
i=$.aQ
this.c.i(0,new X.F(n,t,null),i)},
ga_:function(){return this.rx},
gK:function(){return this.x1},
gP:function(){return this.x2},
gaA:function(){return this.G},
gI:function(){return this.O}}
B.lo.prototype={
at:function(){return!1},
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Family Ashes",H.a([$.aV,$.aI,$.V,$.aS,$.bZ],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Last Will and Testament",H.a([$.a7,$.Q,$.V,$.aS,$.lD],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Grooming Guide",H.a([$.aT,$.V,$.ap],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Powered Attorney",H.a([$.um,$.V,$.rc,$.lD],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Executer's Ax",H.a([$.rd,$.V,$.aL,$.lD],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
D:function(){var t,s,r,q,p,o
t=[P.v]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Z,P.U])
t.i(0,$.cv,$.l)
r=$.y
q="With the death of the "+r+", it now falls to the "
p=$.k
o=[U.c]
t.i(0,new R.ac("Inherit Responsibilities",!1,[new U.c(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.c("After organizing taxes, approving budgets and listening to "+$.t+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.c("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
r="The "+$.y+" has released the frogs into the "
p=$.k
t.i(0,new R.bB("Inherit the Frogs",!1,[new U.c(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.t+"s 'help' by "+$.R+"ing up a storm. "),new U.c("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.c("The "+p+" has found the final frog.      ")],H.a([],o),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ae)
o=$.bW
this.c.i(0,new X.F(s,t,null),o)},
gb1:function(){return this.k1},
gK:function(){return this.k2},
gP:function(){return this.r1},
gak:function(){return this.r2},
gal:function(){return this.rx},
gam:function(){return this.ry},
gaj:function(){return this.x1},
gah:function(){return this.x2},
gai:function(){return this.y1}}
X.lp.prototype={
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Wand",H.a([$.a2,$.Y,$.aa,$.bp],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Angel Feather",H.a([$.bp,$.bA,$.Y,$.ba,$.af,$.a7,$.aa],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Never Ending Story DVD",H.a([$.bS,$.rp,$.Y,$.aa,$.b9,$.bp],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Candle",H.a([$.bp,$.ba,$.Y,$.aI],s),null,!1,"Dying Light Stick")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Fairy Figurine",H.a([$.aU,$.ba,$.Y,$.bp],s),null,!1,"Tiny Petrified Tinkerbell")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.v]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.Z,P.U]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.qZ,$.j)
q.i(0,$.cB,$.l)
q.i(0,$.be,$.j)
q.i(0,$.cP,$.j)
p=$.k
o="The "+p+" is just minding their own business when they see a wizened "
n=$.t
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.R+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.y
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.am
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
n=[U.c]
q.i(0,new R.X("Learn to Believe",!1,[new U.c(o),new U.c(m),new U.c(l),new U.ab(k,"The "+p+" fails to believe hard enough. They are defeated.",j)],H.a([],n),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
j=$.aP
this.c.i(0,new X.F(s,q,null),j)
j=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.cm,$.j)
s.i(0,$.ie,$.l)
s.i(0,$.el,$.j)
q=$.k
p="The "+q+"  is approached by a Crafty "
o=$.t
p=p+o+" who offers them a magical "
m=$.am
p=p+m+", guaranteed to grant them the power to believe things into existance once per year. The "+q+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
l="The "+q+" is contemplating the magical "+m+" they wasted their boonies on.  Why would the Crafty "+o+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+q+" spends time imagining what they would try to make if it were true."
k="The "+q+" finds a grey town of despondant "+o+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+q+" learns that "
i=$.y
k=k+i+" has been hoarding all the belief and steals it from the "+o+"s regularly. They have to be stopped!"
h="The "+q+" approaches "+i+", magical "+m+" in hand. The "+i+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+q+" feels frozen. They cannot take a single step towards "+i+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+m+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
o=i+"'s belief was no match for the power of the "+m+". They are dead, and hope will be free to flourish among the "+o+"s once again."
s.i(0,new R.X("Believe the Lies",!1,[new U.c(p),new U.c(l),new U.c(k),new U.ab(h,"The "+m+" could not stand up to "+i+" after all. The "+q+" has been defeated.",o)],H.a([],n),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
o=$.aP
this.c.i(0,new X.F(j,s,null),o)
o=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.be,$.j)
t.i(0,$.dH,$.E)
t.i(0,$.cw,$.j)
t.i(0,$.cP,$.j)
s=$.k
r="The "+s+" finds a grey town of despondant "
q=$.t
r=r+q+"s. Their daily lives are without meaning, without joy, and will never change. "
p=$.y
r=r+p+" has stolen all possibilities, all hope away. There is only this.  The "+s+" vows to find a way to help. The "+q+"s fail to be inspired."
m="The "+s+" learns that part of the reason the "+q+"s are hopeless is that the local "
l=$.am
t.i(0,new R.X("Be the Change You Believe In",!1,[new U.c(r),new U.c(m+l+" mine has dried up. Without "+l+" the "+q+" economy is completley flat. There are no jobs!  The "+s+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.c("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+p+". They simply refuse to allow hope to survive. The "+s+" is going to need to deal with them."),new U.ab("The "+q+"s deserve Hope, they deserve a better life. The "+s+" is going to show them. But before they can work on fixing their problems, "+p+" must be fought. The "+s+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],n),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
s=$.k
p="The "+s+" discovers a group of "
q=$.t
p=p+q+"s locked in a sadistic death game. When all seems lost, the "+s+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+q+"s) in the process."
l="The "+s+" finds ANOTHER group of "+q+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+s+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+q+" has been working for the "
r=$.y
t.i(0,new R.X("The Ultimate Hope",!1,[new U.c(p),new U.c(l),new U.c(m+r+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.ab("The "+q+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+s+" is going to stop the "+r+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],n),R.ja(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.j)
n=$.aP
this.c.i(0,new X.F(o,t,null),n)},
ga_:function(){return this.rx},
gK:function(){return this.x1},
gP:function(){return this.x2},
gaA:function(){return this.M},
gI:function(){return this.G}}
Q.lu.prototype={
$asec:function(){return[W.f1]},
$asda:function(){return[W.f1,P.dC]}}
Q.mW.prototype={}
Z.lv.prototype={}
B.ly.prototype={
$1:function(a){return!a.gcC()},
$S:function(){return{func:1,args:[B.en]}}}
B.en.prototype={
F:function(){var t,s
t=Q.G(null,null,A.a9)
s=A.i("Perfectly Generic Object",H.a([],[G.a5]),null,!1,"The Third Entry for This Fucking Block")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),[H.M(t,0)]))
this.y=t},
gc9:function(){return P.bc(this.gaK(),!0,P.v)},
D:function(){var t,s,r,q,p,o,n,m
t=[P.v]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.Z,P.U]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.d8,$.j)
q.i(0,$.bn,$.E)
q.i(0,$.dL,$.j)
q.i(0,$.c7,$.l)
q.i(0,$.dW,$.E)
p=$.k
o="The "+p+" learns that all of the local "
n=$.t
m=[U.c]
q.i(0,new R.a4("Revive the Consorts",!1,[new U.c(o+n+"s are dead. This is....really depressing, actually. "),new U.c("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.R+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.aQ
this.r.i(0,new X.F(s,q,null),n)
n=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.eV,$.j)
s.i(0,$.ej,$.E)
s.i(0,$.eU,$.l)
s.i(0,$.cO,$.j)
s.i(0,$.cv,$.E)
q=$.k
p="The "+q+" learns that all of the local "
o=$.t
s.i(0,new R.a4("Produce the Goods",!1,[new U.c(p+o+"s have a severe shortage of gears and cogs. It is up to the "+q+" to get the assembly lines up and running again. "),new U.c("The "+q+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+q+" is training the local "+o+"s to operate the manufacturing equipment. There is "+$.R+"ing and chaos everywhere. "),new U.c("The "+q+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+o+"s name a national holiday after the "+q+". ")],H.a([],m),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
q=$.aQ
this.r.i(0,new X.F(n,s,null),q)
q=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.be,$.j)
t.i(0,$.bn,$.E)
t.i(0,$.cd,$.l)
s=$.k
r="The "+s+" learns that all of the local "
p=$.t
t.i(0,new R.a4("Relax the Consorts",!1,[new U.c(r+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.c("The "+s+" fluffs more pillows than any other Player ever has before them. "),new U.c("The "+s+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.k
s="The "+p+" learns that all of the local "
r=$.t
s=s+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+r+" "
n=$.R
t.i(0,new R.a4("Relax the Consorts According to Prophecy",!1,[new U.c(s),new U.c(o+n+"ing about? A prophecy?  "),new U.c("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+r+"s, who become so chill they do not even "+n+" once. ")],H.a([],m),R.rX(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.E)
m=$.aQ
this.r.i(0,new X.F(q,t,null),m)},
v:function(a){return this.ch},
gcC:function(){return this.a},
gaC:function(){return this.b},
gI:function(){return this.c},
gaD:function(){return this.d},
gK:function(){return this.e},
gbf:function(a){return this.f},
gbM:function(){return this.r},
gaK:function(){return this.x},
gH:function(a){return this.ch}}
B.dZ.prototype={
gH:function(a){return this.b}}
A.a9.prototype={
bd:function(a,b){var t=b.gbA()-this.gbA()
if(t>0)t=1
else if(t<0)t=-1
return C.e.aM(t)},
fF:function(a){var t,s,r,q
for(t=a.k2,s=t.length,r=0;r<t.length;t.length===s||(0,H.bN)(t),++r){q=t[r]
if(J.N(q.gcM(),$.df))this.r=this.r+C.e.aM(q.b)}},
gjl:function(){var t,s,r,q,p,o
t=H.a([],[P.v])
s=new A.d3(null,null)
s.cL(this.e.a)
if(this.f===0)return t
r=P.bc(G.xs(this.e),!0,G.a5)
C.a.ds(r,new A.lK())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.bN)(r),++p){o=r[p]
if(!(o instanceof G.ak||o.gfk().length===0))t.push(" "+Y.F7(s.w(o.gfk())))}return t},
gbA:function(){var t,s,r
for(t=this.e,s=new P.dS(t,t.r,null,null,[null]),s.c=t.e,r=0;s.A();)r+=s.d.gbA()
return r},
gj9:function(){var t=this.e
return new H.bF(t,new A.lJ(),[H.M(t,0)])},
gfn:function(){var t,s,r,q,p
for(t=this.gjl(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.bN)(t),++q)r+=t[q]+" "
return r+this.c},
gfo:function(){return this.gfn()+" "+this.f+"/"+this.r},
v:function(a){return this.gfn()},
c8:function(){var t=A.i(this.c,P.bc(this.e,!0,G.a5),this.a,!0,this.b)
t.f=this.f
t.r=this.r
return t},
L:function(a,b,c,d,e){var t,s,r
t=P.iT(b,null)
this.e=t
if(t.a===0)t.h(0,$.us)
s=P.iT(this.gj9(),null)
for(t=new P.dS(s,s.r,null,null,[null]),t.c=s.e;t.A();){r=t.d
this.e.a4(0,r.ghC())
this.e.aE(0,r)}if(!this.d)$.$get$rF().push(this)},
$isbD:1,
$asbD:function(){return[A.a9]}}
A.lK.prototype={
$2:function(a,b){return a.gfK()-C.b.aM(b.gfK())},
$S:function(){return{func:1,args:[G.a5,G.a5]}}}
A.lJ.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.a5]}}}
A.jk.prototype={
gp:function(a){return this.a.length},
h:function(a,b){var t,s
t=$.$get$rF()
s=(t&&C.a).a5(t,b)?b.c8():b
this.a.push(s)
s.fF(this.b)},
gX:function(a){var t=this.a
return(t&&C.a).gX(t)},
gR:function(a){var t=this.a
return new J.fy(t,t.length,0,null,[H.M(t,0)])}}
A.j1.prototype={
$asD:function(){return[A.a9]},
$isD:1}
N.lP.prototype={
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Gavel",H.a([$.a2,$.ro],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Caution Tape",H.a([$.aU,$.bk],s),null,!1,"Impassible Barrier")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Deerstalker Hat",H.a([$.S,$.aN],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Mystery Novel",H.a([$.Q,$.aT],s),null,!1,"Book where the Criminal was the Janitor")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Dish Served Cold",H.a([$.bQ,$.aH,$.bq],s),null,!1,"REVENGE")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Pony Pals: Detective Pony ",H.a([$.Q,$.aT,$.ay],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Handcuffs",H.a([$.aV,$.C,$.bk],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
D:function(){var t,s,r,q,p,o,n,m
t=[P.v]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.Z,P.U]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.eT,$.E)
q.i(0,$.cm,$.l)
q.i(0,$.cw,$.E)
p=$.k
o="The "+p+" finds an elaborate courtroom full of "+$.R+"ing "
n=$.t
m=[U.c]
q.i(0,new R.a4("Shit, Lets Be Lawyers",!1,[new U.c(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.c("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.c(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.am+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.aQ
this.r.i(0,new X.F(s,q,null),n)
n=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.cm,$.j)
s.i(0,$.d7,$.l)
s.i(0,$.cO,$.l)
q=$.k
p="A frantic underling run past the  "+q+". In hot pursuit, a "
o=$.t
s.i(0,new R.a4("Enforce the Law",!1,[new U.c(p+o+" yells 'Stop that thief' in betwen "+$.R+"s. Without thinking, the "+q+" grabs the underling. The "+o+" is impressed, and offers the "+q+" a job as a deputy police officer. "),new U.c("The "+q+" is doing their rounds as a deputy police officer. So far, everything is peaceful."),new U.c("A missing "+$.am+". Three suspects. A locked door. The "+q+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. ")],H.a([],m),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
q=$.aQ
this.r.i(0,new X.F(n,s,null),q)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.cm,$.j)
t.i(0,$.cv,$.l)
t.i(0,$.dn,$.E)
t.i(0,$.ek,$.l)
t.i(0,$.ei,$.l)
t.i(0,$.eW,$.l)
t.i(0,$.l2,$.l)
s=$.k
r="The "+s+" finds a crowd of "
p=$.R
r=r+p+"ing "
o=$.t
r=r+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+s+" is moved by their plight and agrees to try to help."
s="The "+s+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+s+". After easily defeating the guards, the "+s+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won!"
o=this.y
t.i(0,new R.a4("Start a Revolution",!1,[new U.c(r),new U.c(s),new U.c(p)],H.a([],m),R.x(),!1,!1,new Y.bx("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.w)
o=$.aQ
this.r.i(0,new X.F(q,t,null),o)},
gI:function(){return this.cx},
gaC:function(){return this.cy},
gaD:function(){return this.db},
gK:function(){return this.dx},
gaK:function(){return this.dy}}
S.lR.prototype={
at:function(){return!0},
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Shining Armor",H.a([$.aV,$.lF,$.V,$.f3],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Excalibur",H.a([$.a7,$.lF,$.V,$.b1,$.aL,$.f4],s),"Knight Shit",!1,"Masamune")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Noble Steed",H.a([$.C,$.V,$.bo,$.aJ],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Hero's Shield",H.a([$.aV,$.f3,$.V,$.lF],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
D:function(){var t,s,r,q,p,o,n,m
t=[P.v]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Z,P.U])
t.i(0,$.l5,$.j)
t.i(0,$.dI,$.j)
t.i(0,$.dM,$.j)
t.i(0,$.eW,$.j)
t.i(0,$.eT,$.l)
r="The "+$.y+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.k
p=[U.c]
t.i(0,new R.bB("Breed the Frogs",!1,[new U.c(r+q+" collects all sorts of frogs. Various "+$.t+"s 'help' by "+$.R+"ing up a storm. "),new U.c("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.c("The "+q+" has found the final frog.      ")],H.a([],p),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ae)
q=$.y
r="Now that the "+q+" is defeated, the "
o=$.t
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.k
t.i(0,new R.ac("Exploit the Heat",!1,[new U.c(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.c("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.c("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.c0(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
o=$.b0
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.y
n=n+q+". A Learned "+$.t+" explains that it can only be defeated by the Legendary "
r=$.am
n=n+r+" Blade. The "
m=$.k
t.i(0,new R.ac("Fight the Beast",!1,[new U.c(n+m+" prepares to go questing for it. "),new U.c("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.c("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
r="The volcanos of the land are weirdly active after the defeat of the "+$.y+". Onehas begins to erupt near a "
m=$.t
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.R+"s, but not really doing anything to evacuate or save anyone. The "
o=$.k
t.i(0,new R.ac("Protect the Consorts",!1,[new U.c(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.c("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.c("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.bW
this.c.i(0,new X.F(s,t,null),p)},
gb1:function(){return this.k1},
gK:function(){return this.k2},
gP:function(){return this.r1},
gak:function(){return this.r2},
gal:function(){return this.rx},
gam:function(){return this.ry},
gaj:function(){return this.x1},
gah:function(){return this.x2},
gai:function(){return this.y1}}
M.fZ.prototype={
aR:function(a){var t,s
t=N.Z
s=new M.fZ(!1,null,null,null,null,null,null,null,null,!1,!1,!1,null,null,null,null,null,!1,null,null,$.$get$il(),null,null,null,Q.G(null,null,X.F),Q.G(null,null,t),P.cK(P.v,[Q.bK,N.Z]))
s.a=this.a
s.c$=this.c$
s.f$=Q.d5(this.f$,!1,!0,null,t)
s.ex()
s.z=!1
s.Q=!1
s.ch=!1
s.cx=this.cx
s.cy=this.cy
s.fr=this.fr
s.dy=this.dy
s.db=this.db
s.dx=this.dx
s.e=this.e
return s},
v:function(a){return this.dy},
dl:function(a,b){var t,s,r,q,p
if(b.gp(b)===0){this.e=null
this.fr=!0}t=Q.G(null,null,R.ev)
for(s=b.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.bN)(s),++q){p=s[q]
if(J.cV(p).jc(a)===!0)C.a.h(t.b,p)}return this.c$.u.w(t)},
kg:function(a){var t,s,r,q,p,o,n,m
t=Q.G(null,null,X.F)
for(s=a.gau(),s=s.gR(s),r=[H.M(t,0)];s.A();){q=s.gJ()
p=a.m(0,q)
C.a.h(t.b,new Q.h(q,t.k(q,J.qF(p)),r))}o=this.c$.u.w(t)
this.db=o
t.aE(t,o)
n=this.c$.u.w(t)
s=this.c$
if(n!=null){this.dy="Land of "+H.p(s.u.w(o.gdc()))+" and "+H.p(this.c$.u.w(n.gdc()))
this.dx=n}else{this.dy="Land of "+H.p(s.u.w(o.gdc()))+" and "+H.p(this.c$.u.w(o.a))
this.dx=o}if(this.c$.u.a.B()>0.99){this.a=!0
m=H.a([Y.dy("Google"),Y.dy("Horrorterrors"),Y.dy("Glitches"),Y.dy("Grimoires"),Y.dy("Fluthlu"),Y.dy("The Zoologically Dubious")],[P.v])
s=this.c$.b
s.toString
F.h2(C.j).$1(s.c5(C.j,"Corrupt land."))
s=this.c$.u.cE()
r=this.c$
if(s)this.dy="Land of "+H.p(r.u.w(m))+" and "+H.p(this.c$.u.w(this.dx.a))
else this.dy="Land of "+H.p(r.u.w(this.db.gdc()))+" and "+H.p(this.c$.u.w(m))}},
ex:function(){this.b=this.aG($.$get$ib())
this.c=this.aG($.$get$ic())
this.d=this.aG($.$get$ia())
var t=this.aG($.$get$qU())
t=Q.fj(t,new M.lT(),H.as(t,"cc",0),null)
this.f=Q.d5(t,!1,!0,null,H.as(t,"cc",0))
t=this.aG($.$get$qR())
t=Q.fj(t,new M.lU(),H.as(t,"cc",0),null)
this.r=Q.d5(t,!1,!0,null,H.as(t,"cc",0))
t=this.aG($.$get$qT())
t=Q.fj(t,new M.lV(),H.as(t,"cc",0),null)
this.x=Q.d5(t,!1,!0,null,H.as(t,"cc",0))
t=this.aG($.$get$qV())
t=Q.fj(t,new M.lW(),H.as(t,"cc",0),null)
this.y=Q.d5(t,!1,!0,null,H.as(t,"cc",0))},
eg:function(){this.fx=H.ch(this.c$.u.w(this.r$.m(0,"consort")),"$isbw")},
kl:function(a,b){var t,s,r,q,p
t=this.r$
s=t.m(0,$.$get$qQ().a)
if(s==null)return
if(s.gR(s).A())this.fy=H.ch(this.c$.u.w(t.m(0,"denizen")),"$iseO")
t=this.fy
r=this.c$
if(t==null){t=r.u
r=a.gb1()
q=b.gb1()
p=t.a.B()*(r+q)
if(p>0.95){t=this.c$.b
r="strong denizen for "+b.v(0)+" of "+a.v(0)
t.toString
F.h2(C.j).$1(t.c5(C.j,r))
this.fy=new Q.kw("Denizen "+H.p(this.c$.u.w($.$get$tQ())),null,null,null)}else{t=this.c$
if(p<0.05){t=t.b
r="weak denizen for "+b.v(0)+" of "+a.v(0)
t.toString
F.h2(C.j).$1(t.c5(C.j,r))
this.fy=new Q.lm("Denizen "+H.p(this.c$.u.w($.$get$tR())),null,null,null)}else this.fy=new Q.eO("Denizen "+H.p(t.u.w(a.gaA())),null,null,null)}}else t.c="Denizen "+H.p(r.u.w(a.gaA()))},
hR:function(a,b,c,d){this.c$=b
this.kg(a)
this.e$=Q.t2(a,!0,null,X.F)
this.eh(b.u)
this.ex()
this.kl(c,d)
this.eg()},
gH:function(a){return this.dy},
gct:function(){return this.go}}
M.j0.prototype={
gaV:function(a){return this.c$},
gbM:function(){return this.e$},
gcu:function(){return this.f$},
saV:function(a,b){return this.c$=b}}
M.lT.prototype={
$1:function(a){return J.jI(a)},
$S:function(){return{func:1,args:[R.a4]}}}
M.lU.prototype={
$1:function(a){return J.jI(a)},
$S:function(){return{func:1,args:[R.X]}}}
M.lV.prototype={
$1:function(a){return J.jI(a)},
$S:function(){return{func:1,args:[R.ac]}}}
M.lW.prototype={
$1:function(a){return J.jI(a)},
$S:function(){return{func:1,args:[R.ev]}}}
Q.lX.prototype={
ga_:function(){return this.rx}}
K.lZ.prototype={
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Creeping Vine",H.a([$.a2,$.Y,$.b5,$.aJ],s),null,!1,"Sentient Plant Tentacles")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Lollipop",H.a([$.rg,$.Y,$.b3],s),null,!1,"Sentient Plant Tentacles")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Golem",H.a([$.aV,$.aM,$.Y,$.aJ],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Ectoplasm",H.a([$.bZ,$.Y,$.b3],s),null,!1,"Ghost [Censored]")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Aqua Vitae",H.a([$.bf,$.Y,$.b3,$.a7,$.aa],s),null,!1,"Tears of JR")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Homunculus",H.a([$.bo,$.Y,$.aJ],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.v]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.Z,P.U]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cd,$.j)
q.i(0,$.bn,$.j)
q.i(0,$.ih,$.E)
q.i(0,$.be,$.l)
q.i(0,$.l9,$.l)
q.i(0,$.d9,$.E)
p=$.k
o="The "+p+" finds a village of compliant "
n=$.t
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.R+"ing in panic. Don't upset "
m=$.y
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.c]
q.i(0,new R.X("Restore the Forest",!1,[new U.c(o),new U.c(l),new U.ab(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.aP
this.c.i(0,new X.F(s,q,null),n)
n=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.cd,$.j)
s.i(0,$.co,$.j)
s.i(0,$.d9,$.E)
s.i(0,$.be,$.l)
q=$.k
o="The "+q+" finds a lush garden, dutifully tended to by "
m=$.t
o=o+m+"s. Unfortunately, the food is left to rot in piles, as Underling brigands block the road and prevent the produce from being distributed. The "+q+" agrees to help."
l="The "+q+" sneaks along the main road and finds the Underling Brigands lying in wait. They are dispatched in short order, and the "+q+" heroically informs the "+m+"s that they can once again begin shipping their food."
m="The "+q+" follows the road to find a new village, fileld with hungry "+m+"s. Apparently the food has been stolen by a "
k=$.y
m=m+k+" minion! Enraged, the "+q+" tracks down the minion and defeats it. They now know this will not be the end of it. They need to nip this in the bud. "
j="The "+q+" approaches the "+k+". It ends here."
q="The "+q+" was strong enough to win! The consorts will never have to worry about their food being destroyed senselessly again."
s.i(0,new R.X("Distribute the Food",!1,[new U.c(o),new U.c(l),new U.c(m),new U.ab(j,"The tyranny of "+k+" continues.",q)],H.a([],p),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
q=$.aP
this.c.i(0,new X.F(n,s,null),q)
q=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.d8,$.j)
t.i(0,$.bn,$.E)
t.i(0,$.dL,$.j)
t.i(0,$.c7,$.l)
t.i(0,$.dW,$.l)
t.i(0,$.id,$.l)
s="Drawn by wailing and "+$.R+"ing, the "
r=$.k
s=s+r+" enters a rotting "
o=$.t
s=s+o+" village. They are in the throes of a famine they explain. Locusts damage their fields and blight destroys the weakened remainder. They cannot feed everyone once winter comes if this continues.   The "+r+" vows to help."
n="The "+r+" strifes countless swarms of locusts, but there seems to be no end to them. They finally track down a hive, guarded by several "
m=$.y
n=n+m+" minions. It is as easy as thinking to destroy everything, but the "+r+" is left uneasy. Why were the minions causing this on purpose?  "
l="Although the locusts have thinned in numbers, the blight is as strong as ever. Even the most potent of alchemized fungicides seem to only keep back the blight for a day. At their wits end, the "+r+" stays in the fields overnight to discover that "+m+" minions are spreading a strange powder on the fields. Defeating them is a start, but clearly "+m+" is dedicated to causing famine. They must be dealt with. "
m="The "+r+" faces the "+m+". It will end here."
k="The "+r+" is strong enough to impose their will on the world. Famine will not trouble the "+o+"s any longer."
t.i(0,new R.X("Protect the Farms",!1,[new U.c(s),new U.c(n),new U.c(l),new U.ab(m,"The "+r+" was not strong enough. Can anything save the "+o+"s before winter? ",k)],H.a([],p),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.aP
this.c.i(0,new X.F(q,t,null),p)},
ga_:function(){return this.rx},
gK:function(){return this.x1},
gP:function(){return this.x2},
gaA:function(){return this.M},
gI:function(){return this.G}}
X.cZ.prototype={}
G.m_.prototype={
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("FAQ",H.a([$.ad,$.Y,$.a1,$.c_],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Flashlight",H.a([$.aU,$.Y,$.ba,$.ad,$.c_],s),null,!1,"Tube of Localised Sun")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Octet",H.a([$.Y,$.ba,$.c_,$.a7,$.ri],s),null,!1,"D13")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Horseshoe",H.a([$.uv,$.Y,$.al],s),null,!1,"Horse Sneaker")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Rabbits Foot",H.a([$.uG,$.Y],s),null,!1,"Rabbit Remains")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("4 Leaf Clover",H.a([$.b5,$.Y,$.ba,$.c_],s),null,!1,"Plant of Luck +4")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("8-Ball",H.a([$.bf,$.Y,$.aJ],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.v]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.Z,P.U]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.l4,$.j)
q.i(0,$.eR,$.l)
q.i(0,$.dG,$.j)
q.i(0,$.dX,$.j)
p=$.k
o="The "+p+" is searching for the lair of "
n=$.y
o=o+n+" when some local "
m=$.t
o=o+m+"s run past them carrying what appears to be primitive filming equipment and fancy props. After walking a little while longer the "+p+" comes across a huge building in the distance. On the front displays a sign that seems to advertise some sort of game show."
l="The "+p+" reaches the building and enters to find that it is in fact the filming location of a Game Show run by the local "+m+"s. What catches the "+p+"\u2019s eye, however, is that apparently the Grand Prize for winning the show is an exclusive meeting with none other than "+n+"! This could be the "+p+"\u2019s big chance! With determination in their eye, they eagerly sign up for the next scheduled airing of the show."
k="Tonight\u2019s episode of the game show has gotten underway, and so far it looks like the "+p+" is doing pretty well. The show cuts to a commercial break, and the "+p+" take the time to reflect on the current situation. With their superior intellect they easily win the first round, a test of intelligence, by a mile compared to their fellow "+m+" contestants. The "+p+" struggles with the second round, a test of athleticism through an obstacle course, however, and one of their opponents gains a point, tying up the game. If the "+p+" fails to win the next round, it could potentially jeopardize their chance to fight "+n+". This next round will be one the "+p+" cannot afford to lose."
j="Through sheer luck the "+p+" manages to spin a lucky number on the final round, which is merely a spin on the wheel with the number it rests on determining your reward. Your  "+m+" opponents shake your hand as they admit defeat, as "+n+" emerges from the shadows, ready to fight you at last."
m=n+" lies slain. The "+m+" host congratulates you on your victory and presents you your second prize, a brand new car! Unfortunately it is subsequently stolen by your opponents, who drive off, never to be seen again."
i=[U.c]
q.i(0,new R.X("Be the Contestant",!1,[new U.c(o),new U.c(l),new U.c(k),new U.ab(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
m=$.k
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.R+"ing "+$.t+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.y
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.i(0,new R.X("Go Big or Go Home",!1,[new U.c(n),new U.c(p),new U.c(j),new U.ab(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
m=$.aP
this.c.i(0,new X.F(s,q,null),m)
m=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.cd,$.l)
s.i(0,$.be,$.l)
s.i(0,$.dH,$.j)
s.i(0,$.l3,$.j)
s.i(0,$.ej,$.j)
s.i(0,$.ie,$.j)
q=$.k
p="The "+q+" walks into a "
o=$.t
p=p+o+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
n=$.am
p=p+n+", but "
l=$.y
p=p+l+" has hoarded all of the planets "
k=$.b0
n=p+k+" Candles, and everyone knows you cant have a good "+n+" ceremony without candles! The "+q+" vows to take back some "+k+" Candles for the poor "+o+"s. "
p="After a long search, the "+q+" has found the warehouse where "+l+" has stored all the candles. "+k+" Candles must be very valuable to "+l+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+q+" wants to sneak in without alerting a horde of "+l+" minions."
j="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+q+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+l+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+q+" to slip inside with ease. Captchaloging as much "+k+" Candles as they can, the "+q+" triumphantly returns to the village among the joyful "+$.R+"ing of the "+o+"s."
l="The "+q+" is ready to challenge the "+l+" to keep them from restealing the "+k+" candles. "
o="Never again shall the "+o+"s be without "+k+" Candles!"
s.i(0,new R.X("The Candlestick Taker",!1,[new U.c(n),new U.c(p),new U.c(j),new U.ab(l,"The "+k+" candles are once again at risk.",o)],H.a([],i),R.rY(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.j)
o=$.k
k="The "+o+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
l=$.t
k=k+l+" explains that the "
j=$.y
s.i(0,new R.X("Shine the Light",!1,[new U.c(k+j+" has forbidden the "+l+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+o+" vows to help.   "),new U.c("The "+o+" has finally managed to destroy the disk blocking light from the "+l+" village. There is a chorus of happy "+$.R+"s as they bask in the light. The "+o+" feels good about a job well done. "),new U.c("Disaster!  The "+l+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+j+" is guarding the disk themself.  The "+o+" must prepare themself for a tough fight.  "),new U.ab("The "+o+" has managed to reach the disk guarded by the "+j+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+j+" is defeated, the disk destroyed. Finally, the "+l+"s can enjoy the light in peace.")],H.a([],i),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
l=$.aP
this.c.i(0,new X.F(m,s,null),l)
l=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.fM,$.l)
s.i(0,$.bn,$.l)
s.i(0,$.eX,$.j)
s.i(0,$.be,$.l)
s.i(0,$.cw,$.j)
q="Now that the "+$.y+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
p=$.k
q=q+p+" sets up a wiki and settles in to help the "
o=$.t
q=q+o+"s deal with it all."
o="Within barely any time at all, the "+o+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+p+" makes sure all of the information is from credible sources."
p="When the "+p+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
n="The "+$.eZ+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
s.i(0,new R.ac("Moderate the Wiki",!1,[new U.c(q),new U.c(o),new U.c(p)],H.a([],i),R.e0(),!1,!1,new Y.T("Information Network",n,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
n="Now that the "+$.y+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
p=$.k
n=n+p+" shrugs and sets up a wiki and lets the "
o=$.t
n=n+o+"s deal with it all."
o="Within barely any time at all, unmoderated "+o+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+p+" alone, and each claims they are a different SPECIES entirely. The "+p+" finds this to be hilarious."
p="Luckily it turns out all that disinformation running around about the "+p+" thwarts some would be assasins. It turns out the "+p+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
q="The "+$.eZ+" allows you to make you own assumptions about things, and be destroyed by them."
s.i(0,new R.ac("Create the Wiki",!1,[new U.c(n),new U.c(o),new U.c(p)],H.a([],i),R.ew(),!1,!1,new Y.T("Disinformation Network",q,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
q=$.t
p=q+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
o=$.k
p=p+o+" possibly stop it?"
q="The "+o+" pours over maps and charts. What do the sick "+q+"s have in common with each other?  Finally, there is a flash of inspiration. "+q+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+o+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
n="The "+o+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+o+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
m="The "+o+" traces the contaminated river back to it's source. The "
k=$.y
s.i(0,new R.X("Shed the Light",!1,[new U.c(p),new U.c(q),new U.c(n),new U.ab(m+k+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+o+" is victorious. The "+k+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
k=$.aP
this.c.i(0,new X.F(l,s,null),k)
k=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.dG,$.j)
t.i(0,$.l4,$.j)
t.i(0,$.dX,$.l)
t.i(0,$.cB,$.l)
t.i(0,$.l_,$.l)
t.i(0,$.c7,$.E)
t.i(0,$.dM,$.E)
t.i(0,$.cn,$.l)
t.i(0,$.cQ,$.E)
t.i(0,$.bn,$.l)
t.i(0,$.cH,$.j)
s=$.k
r="The "+s+" is approached by a Fast Talking "
q=$.t
r=r+q+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
p=$.am
r=r+p+". The "+s+" agrees to perform the titular role."
o="The opening night performance of the Beautiful "+p+" is a huge success! The "+$.R+"ing of the fans is it's own reward!"
p="When it comes time for the next performance of the Beautiful "+p+", the "+s+" is turned away at the door. Apparently the "
n=$.y
q=p+n+" rampaged and terrorized "+q+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
n="There is not enough room on the stage for both of them. The "+s+" challenges the "+n+" to a glamour off, and wins handily. Enraged, the "+n+" attacks."
p="The "+s+" can finally get back to their promising acting career in peace."
t.i(0,new R.X("Be the Star",!1,[new U.c(r),new U.c(o),new U.c(q),new U.ab(n,"The actig career of the "+s+" is in shambles.",p)],H.a([],i),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
p="After the "+$.y+", the "
s=$.k
p=p+s+" is disappointed to learn that barely any of the "
n=$.t
p=p+n+"s know who they are. This will not do!"
n="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+n+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
q="The "+$.eZ+" is famous, and everyone in this fight is lucky to have met them."
t.i(0,new R.ac("Be the Biggest Star in Paradox Space",!1,[new U.c(p),new U.c(n),new U.c(s)],H.a([],i),R.e0(),!1,!1,new Y.T("What's my name?",q,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
q=$.aP
this.c.i(0,new X.F(k,t,null),q)},
ga_:function(){return this.rx},
gK:function(){return this.x1},
gP:function(){return this.x2},
gaA:function(){return this.C},
gI:function(){return this.G}}
Z.m5.prototype={
at:function(){return!0},
F:function(){var t,s,r,q
t=this.y2
s=[G.a5]
r=A.i("Dream Bubbles Book",H.a([$.Q,$.ap,$.aT,$.uo],s),null,!1,null)
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),[H.M(t,0)]))
t=Q.G(null,null,A.a9)
r=A.i("Uno Reverse Card",H.a([$.rh,$.rw,$.ap],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Lord's Cape",H.a([$.S,$.V,$.ap],s),"Lord Shit",!1,"Shoguns Cape")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Drawing Tablet",H.a([$.lH,$.V,$.ap],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("How to Make Friends And Influence People",H.a([$.a7,$.Q,$.V,$.bz,$.aT],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
D:function(){var t,s,r,q,p,o,n,m
t=[P.v]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.Z,P.U]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.dn,$.E)
q.i(0,$.ek,$.E)
q.i(0,$.c7,$.E)
q.i(0,$.cO,$.l)
p="The "+$.y+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.k
p=p+o+" comands that the "
n=$.t
m=[U.c]
q.i(0,new R.bB("Command Minions to Breed Frogs",!1,[new U.c(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.R+"s. "),new U.c("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.c("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ae)
o="As soon as the "+$.y+" is defeated, the "
n=$.t
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.k
q.i(0,new R.ac("Conquer Everything",!1,[new U.c(o+p+" is up to the task.  "),new U.c("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.c("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.bW
this.c.i(0,new X.F(s,q,null),p)
p=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.u3,$.j)
t.i(0,$.cP,$.j)
t.i(0,$.bn,$.j)
t.i(0,$.be,$.l)
s="The "+$.y+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.k
s=s+r+" comands that the "
q=$.t
t.i(0,new R.bB("Command Minions to Breed Frogs",!1,[new U.c(s+q+"s collect the frogs in the name of Lord Dutton. The "+q+"s agree with confused, yet enthusiastic "+$.R+"s. "),new U.c("The "+q+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.c("A "+q+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ae)
r="As soon as the "+$.y+" is defeated, the "
q=$.t
r=r+q+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.k
t.i(0,new R.ac("Praise Dutton",!1,[new U.c(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.c("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+q+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.c("The final "+q+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.x(),!1,!1,new Y.bx("Rewards/sweetTreasure.png",this.y2,"Rewards/no_reward.png",null),1,null,null),$.w)
m=$.bW
this.c.i(0,new X.F(p,t,null),m)},
gb1:function(){return this.k1},
gK:function(){return this.k2},
gP:function(){return this.r1},
gak:function(){return this.r2},
gal:function(){return this.rx},
gam:function(){return this.ry},
gaj:function(){return this.x1},
gah:function(){return this.x2},
gai:function(){return this.y1},
gI:function(){return this.t}}
S.m6.prototype={
at:function(){return!0},
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Alternate Costume",H.a([$.S,$.V,$.aa,$.a7,$.at],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Mage's Cape",H.a([$.S,$.V,$.aa],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Mage's Staff",H.a([$.a2,$.V,$.al,$.aa,$.du],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Walking Broom",H.a([$.iJ,$.a2,$.V,$.aJ,$.aa,$.du],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
D:function(){var t,s,r,q,p,o,n
t=[P.v]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Z,P.U])
t.i(0,$.eQ,$.j)
t.i(0,$.eW,$.l)
t.i(0,$.cv,$.j)
t.i(0,$.eU,$.l)
t.i(0,$.d8,$.E)
r="The "+$.y+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.k
p=[U.c]
t.i(0,new R.bB("Understand the Frogs",!1,[new U.c(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ae)
q=$.k
t.i(0,new R.ac("Work With Exiles",!1,[new U.c("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.c("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.c("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.x(),!1,!1,new Y.cW("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
q=$.k
r="The "+q+" is feeling quite pleased with their victory over the "+$.y+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.b0
t.i(0,new R.ac("Suffer Visions",!1,[new U.c(r+o+". Oh god, why is this happening?"),new U.c("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.c("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
q="Now that the "+$.y+" has been defeated, the "
o=$.t
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.k
q=q+r+"'s help in planning the brand new city of "
n=$.b0
t.i(0,new R.ac("Become the Mayor",!1,[new U.c(q+n+"burg."),new U.c("A panicking "+o+" runs up to the "+r+", "+$.R+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.c("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.bW
this.c.i(0,new X.F(s,t,null),p)},
gK:function(){return this.k1},
gP:function(){return this.k4},
gak:function(){return this.r1},
gal:function(){return this.r2},
gam:function(){return this.rx},
gaj:function(){return this.ry},
gah:function(){return this.x1},
gai:function(){return this.x2},
gI:function(){return this.y1}}
U.m7.prototype={
at:function(){return!0},
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Maiden's Breath",H.a([$.b5,$.V,$.aN],s),null,!1,null)
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Feather Duster",H.a([$.a2,$.V,$.du,$.bA],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Valkyrie Shield",H.a([$.aN,$.aV,$.C,$.V,$.a7,$.f3,$.uh],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Maiden's Songbook",H.a([$.Q,$.V,$.af,$.aT],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
D:function(){var t,s,r,q,p,o,n
t=[P.v]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Z,P.U])
t.i(0,$.dJ,$.j)
t.i(0,$.cd,$.j)
t.i(0,$.be,$.l)
t.i(0,$.bn,$.l)
t.i(0,$.dH,$.l)
t.i(0,$.cQ,$.l)
r="The "+$.y+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.k
r=r+q+" asks local  "
p=$.t
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.R
n=[U.c]
t.i(0,new R.bB("Serve the  Frogs",!1,[new U.c(r+o+"s.  It's a lively neighborhood event."),new U.c("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ae)
q=$.k
o="The "+q+" has adopted a local "
p=$.t
t.i(0,new R.ac("Serve the PTA",!1,[new U.c(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.c("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.R+"ing about. "),new U.c("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.y+". ")],H.a([],n),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.bW
this.c.i(0,new X.F(s,t,null),n)},
gK:function(){return this.k1},
gP:function(){return this.k4},
gak:function(){return this.r1},
gal:function(){return this.r2},
gam:function(){return this.rx},
gaj:function(){return this.ry},
gah:function(){return this.x1},
gai:function(){return this.x2}}
L.mk.prototype={
ga_:function(){return this.rx},
gK:function(){return this.x1},
gP:function(){return this.x2},
gaA:function(){return this.C},
gI:function(){return this.O}}
V.ml.prototype={
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Puzzle Box",H.a([$.a2,$.Y,$.aa],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Tesla Coil",H.a([$.ad,$.Y,$.C],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Coin",H.a([$.C,$.Y],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Electronic Door",H.a([$.C,$.Y,$.ad,$.a1],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Janus Bust",H.a([$.aV,$.iK,$.aM,$.ap,$.Y,$.a7,$.ad],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
D:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.v]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.Z,P.U]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cP,$.l)
q.i(0,$.eR,$.E)
q.i(0,$.cw,$.E)
p=$.k
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.t
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.y
k=[U.c]
q.i(0,new R.X("Change the View",!1,[new U.c(o),new U.c(m),new U.c(l),new U.ab(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.fe(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.j)
n=$.k
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+n+" explains that at the end of the Labrinth is the "
l=$.y
q.i(0,new R.X("Pick a Door, any Door",!1,[new U.c(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.c("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.c("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.ab("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.aP
this.c.i(0,new X.F(s,q,null),n)
n=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.eT,$.E)
s.i(0,$.cm,$.l)
s.i(0,$.cw,$.E)
s.i(0,$.cP,$.E)
q=$.y
p="The "+q+" has commited a staggering amount of crimes against the local "+$.t+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
o=$.k
s.i(0,new R.X("Face the Music",!1,[new U.c(p+o+" knows that Justice is on their side."),new U.c("The "+q+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+o+" convinces a group of underlings lead by a "+q+" minion that the "+q+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.c("Huh.  I WONDER what the consequences are of the "+q+" being stuck hiding in their shitty snake lair while the "+o+" is running a propoganda campaign against them?  Suddenly the "+q+" has run out of allies entirely."),new U.ab("Karma is a bitch. The "+q+" has nowhere to run when the "+o+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
o=$.aP
this.c.i(0,new X.F(n,s,null),o)
o=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.ij,$.j)
t.i(0,$.bn,$.l)
t.i(0,$.eX,$.j)
t.i(0,$.be,$.l)
t.i(0,$.cw,$.j)
s=$.k
r="The "+s+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+s+" thinks, then makes the logical selection.  The Dungeon accepts it."
q="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+s+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
p="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+s+" thinks they understand. Their choice is accepted."
n=$.y
n="It's the final door before facing the "+n+". All four puzzles blocks are simply identical images of "+$.am+". The "+s+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+n+"."
m="Finally. The "+s+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.i(0,new R.X("Make the Connections",!1,[new U.c(r),new U.c(q),new U.c(p),new U.ab(n,"Looks like the "+s+" will have to resolve some of those bullshit puzzles.",m)],H.a([],k),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
k=$.aP
this.c.i(0,new X.F(o,t,null),k)},
ga_:function(){return this.rx},
gK:function(){return this.x1},
gP:function(){return this.x2},
gaA:function(){return this.C},
gI:function(){return this.G}}
S.mm.prototype={
ga_:function(){return this.rx},
gK:function(){return this.x1},
gP:function(){return this.x2},
gI:function(){return this.C}}
R.f9.prototype={
hT:function(a,b,c,d,e,f){var t
this.dy=a
this.c$=c
this.e$=Q.t2(b,!0,null,X.F)
this.eh(c.u)
this.b=this.aG($.$get$ib())
this.c=this.aG($.$get$ic())
this.d=this.aG($.$get$ia())
t=this.aG($.$get$qS())
this.id=Q.d5(t,!1,!0,null,H.as(t,"cc",0))
this.eg()},
$isdp:1,
gct:function(){return this.k1},
gbf:function(a){return this.k2},
ga_:function(){return this.k3}}
E.mn.prototype={
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Feather Pen",H.a([$.C,$.V,$.ap,$.bA],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Half Finished Bust of Snoop Dog",H.a([$.uE,$.V,$.iK,$.al,$.a7],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Book of Poetry",H.a([$.Q,$.V,$.ap,$.aT],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
at:function(){return!1},
D:function(){var t,s,r,q,p,o,n,m
t=[P.v]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Z,P.U])
t.i(0,$.dJ,$.j)
t.i(0,$.cd,$.j)
t.i(0,$.be,$.l)
t.i(0,$.bn,$.l)
t.i(0,$.dH,$.l)
t.i(0,$.cQ,$.l)
r="The "+$.y+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.k
r=r+q+" asks the "
p=$.t
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.R
n=[U.c]
t.i(0,new R.bB("Inspire Frog Breeding",!1,[new U.c(r+o+"s. "),new U.c("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
q="You'd think after the dramatic defeat of the "+$.y+" the "
o=$.t
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.k
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.am
t.i(0,new R.ac("Inspire the People",!1,[new U.c(q),new U.c(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.c("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.bW
this.c.i(0,new X.F(s,t,null),n)},
gK:function(){return this.k1},
gP:function(){return this.k4},
gak:function(){return this.r1},
gal:function(){return this.r2},
gam:function(){return this.rx},
gaj:function(){return this.ry},
gah:function(){return this.x1},
gai:function(){return this.x2},
gI:function(){return this.y1}}
F.mo.prototype={
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Piano",H.a([$.al,$.a2,$.af,$.ap],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Flute",H.a([$.C,$.af],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Microphone",H.a([$.bb,$.ad],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Violin",H.a([$.a2,$.af],s),null,!1,"Tiny Cello")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Sheet Music",H.a([$.Q,$.af],s),null,!1,"Cheat Codes for Instruments")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Electric Guitar",H.a([$.aU,$.af,$.ad,$.bb,$.ay],s),null,!1,"Electrical Stringed Music Maker")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Turn Tables",H.a([$.aU,$.af,$.ad,$.ay],s),null,!1,"Spinning Disc Sound Maker")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Guitar",H.a([$.a2,$.af],s),null,!1,"String Music Maker")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
D:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.v]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.Z,P.U]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cB,$.ae)
q.i(0,$.l_,$.j)
q.i(0,$.dX,$.j)
q.i(0,$.dH,$.l)
q.i(0,$.be,$.l)
q.i(0,$.kY,$.l)
p=$.k
o="The "+p+" meets a wise old "+$.t+" who tells that the "+$.y+" can only be awoken by the Legendary Hero playing the "
n=$.b0
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.am
k=[U.c]
q.i(0,new R.a4("Play the Music",!1,[new U.c(o),new U.c(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.c(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.aQ
this.r.i(0,new X.F(s,q,null),p)
p=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.r6,$.ae)
s.i(0,$.d7,$.l)
s.i(0,$.cO,$.l)
s.i(0,$.dH,$.j)
s.i(0,$.kY,$.ae)
q=$.k
o="The "+q+" learns of a lost song, said to contain the power of "
n=$.b0
o=o+n+". Any who can sing it are destined to be strong enough to face the "
m=$.y
s.i(0,new R.a4("Sing the Song",!1,[new U.c(o+m+". "),new U.c("The "+q+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+n+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.c("A "+$.am+"! That's the key! The "+q+" equips it and instantly finds themselves able to sing the "+n+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+m+".")],H.a([],k),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
m=$.aQ
this.r.i(0,new X.F(p,s,null),m)
m=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.ih,$.ae)
t.i(0,$.cn,$.l)
t.i(0,$.dL,$.l)
s=$.k
r="The "+s+" is suddenly challenged to a rap off by a particularly Fresh "
q=$.t
r=r+q+". It's a close one, but the "+s+" emerges victorious. It helps that the Fresh "+q+" kept rhyming "
p=$.R
p=r+p+" with "+p+"."
r="The "+s+" has apparently gotten a reputation as a rap master. A series of "+q+"s challenge them to rap offs and get utterly destroyed by the "+s+"'s fresh flows. "
s="The final challenger, a Sick-Nasty "+q+" approaches the "+s+". And aura of "+$.b0+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+q+" falters, and misses a beat. The "+s+" wins! They are the best rapper in all of Paradox Space! "
q=this.y
t.i(0,new R.a4("And It Don't Stop",!1,[new U.c(p),new U.c(r),new U.c(s)],H.a([],k),R.x(),!1,!1,new Y.bx("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.w)
q=$.aQ
this.r.i(0,new X.F(m,t,null),q)},
gI:function(){return this.cx},
gaC:function(){return this.cy},
gaD:function(){return this.db},
gK:function(){return this.dx},
gaK:function(){return this.dy}}
Y.mq.prototype={
hw:function(){var t,s,r,q,p
t=this.a
if(t.av.hx(t))return
this.e=E.rb("!!!RING!!! OMG YOU SHOULD NEVER SEE THIS!",this.a)
s=Z.aG("Red Miles",3,null,"")
s.r.push(new Z.a_($.u,2,!0,0,1,2,3,""))
s.e=" You cannot escape them. "
this.e.fy.push(s)
t=this.a
r=new F.dT(null,C.c,t,"Black Queen","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],[X.cZ]),!1,H.a([],[Z.cI]),!1,H.a([],[N.cD]),0,H.a([],[E.J]),null,null,!1,H.a([],[Q.b6]),"",null,null)
r.n("Black Queen",t)
this.c=r
t=$.re
q=$.uF
p=new U.ah(t,null,null,"Blade",!1,P.a3(null,null,null,G.a5),0,3)
p.L("Blade",[q],null,!1,null)
p.e.h(0,t)
r.a=p
p=this.c
p.ry=this.e
p.a$.q(P.A([$.an,500,$.bu,-100,$.u,50],D.bi,P.ci))
p=this.c
r=$.b4
t=$.an
t=p.a$.aI(t)
p.a$.aQ(r,t)},
hu:function(){var t,s,r,q,p
t=this.a
if(t.av.hv(t))return
this.f=E.rb("!!!SCEPTER!!! OMG YOU SHOULD NEVER SEE THIS!",this.a)
s=Z.aG("Reckoning Meteors",3,null,"")
s.r.push(new Z.a_($.u,2,!0,0,1,2,3,""))
s.e=" The very meteors from the Reckoning rain down. "
this.f.fy.push(s)
t=this.a
r=new F.dT(null,C.c,t,"Black King","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],[X.cZ]),!1,H.a([],[Z.cI]),!1,H.a([],[N.cD]),0,H.a([],[E.J]),null,null,!1,H.a([],[Q.b6]),"",null,null)
r.n("Black King",t)
this.b=r
r=this.c
t=$.du
q=$.uA
p=new U.ah(t,null,null,"Scepter",!1,P.a3(null,null,null,G.a5),0,3)
p.L("Scepter",[q],null,!1,null)
p.e.h(0,t)
r.a=p
p=this.b
p.ry=this.f
p.cy=1000
p.a$.q(P.A([$.an,1000,$.bu,-100,$.u,100],D.bi,P.ci))
p=this.b
r=$.b4
t=$.an
t=p.a$.aI(t)
p.a$.aQ(r,t)},
hs:function(){var t,s,r,q,p
t=this.a
if(t.av.ht(t))return
t=this.a
s=new F.dT(null,C.c,t,"Jack","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],[X.cZ]),!1,H.a([],[Z.cI]),!1,H.a([],[N.cD]),0,H.a([],[E.J]),null,null,!1,H.a([],[Q.b6]),"",null,null)
s.n("Jack",t)
this.d=s
t=$.rq
r=$.uy
q=new U.ah(t,null,null,"Knife",!1,P.a3(null,null,null,G.a5),0,3)
q.L("Knife",[r],null,!1,null)
q.e.h(0,t)
s.a=q
this.d.a$.q(P.A([$.c4,-500,$.bC,10,$.aZ,-100,$.an,20,$.bu,-100,$.u,30],D.bi,P.ci))
p=Z.aG("Stab To Meet You",1,null,"")
p.r.push(new Z.a_($.u,3,!0,0,1,2,3,""))
p.e=" It's pretty much how he says 'Hello'. "
q=this.d
s=$.b4
t=$.an
t=q.a$.aI(t)
q.a$.aQ(s,t)
this.d.fy.push(p)},
hq:function(){var t,s,r
t=this.a
if(t.av.hr(t))return
t=this.a
s=new F.dT(null,C.c,t,"Democratic Army","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],[X.cZ]),!1,H.a([],[Z.cI]),!1,H.a([],[N.cD]),0,H.a([],[E.J]),null,null,!1,H.a([],[Q.b6]),"",null,null)
s.n("Democratic Army",t)
this.r=s
r=Z.aG("Democracy Charge",2,null,"")
r.r.push(new Z.a_($.u,3,!0,0,1,2,3,""))
r.e=" The people have chosen to Rise Up against their oppressors. "
this.r.fy.push(r)},
gaV:function(a){return this.a},
saV:function(a,b){return this.a=b}}
F.mp.prototype={}
F.dT.prototype={
cp:function(){return new E.kd(this,P.cK(D.bi,P.U),H.a([],[A.cN]))}}
F.jh.prototype={
aR:function(a){var t,s,r
t=this.d
s=this.c
r=new F.jh(null,C.c,s,t,"provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],[X.cZ]),!1,H.a([],[Z.cI]),!1,H.a([],[N.cD]),0,H.a([],[E.J]),null,null,!1,H.a([],[Q.b6]),"",null,null)
r.n(t,s)
this.dY(r)
return r}}
F.z.prototype={}
Z.iZ.prototype={
hA:function(a){var t,s,r,q,p
t=T.de
this.x=this.ba(this.aY("Class"),P.bc(T.hm(),!0,t),"class")
this.r=this.ba(this.aY("Aspect"),P.bc(L.jV(),!0,L.cG),"aspect")
this.y=this.ba(this.aY("Species"),H.a(["Human","Troll"],[P.v]),"species")
this.z=this.ba(this.aY("Blood"),$.$get$eG(),"blood")
s=this.aY("Moon")
r=this.f
q=R.f9
p=[q]
this.Q=this.ba(s,P.bc(H.a([r.d,r.e],p),!0,q),"moon")
r=B.en
this.ch=this.ba(this.aY("Interest1"),P.bc(B.fU(),!0,r),"interest1")
this.cx=this.ba(this.aY("Interest2"),P.bc(B.fU(),!0,r),"interest2")
this.jz()
r=this.aY("Hair Color")
s=this.f
q=this.j8(r,P.bc(H.a([s.d,s.e],p),!0,q),"hairColor")
this.fr=q
J.wV(q,"#000000")
this.jW()
this.kz()
this.jt()
this.fx=this.kF(this.aY("chatHandle/Name"),P.bc(T.hm(),!0,t),"chatHandle")
this.fw()
t=J.wF(document.querySelector("#reroll"))
W.dR(t.a,t.b,new Z.mG(this),!1,H.M(t,0))},
fw:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=this.f
if(t!=null)t.fP()
for(t=this.b,s=[Q.b6],r=[X.cZ],q=[Z.cI],p=[N.cD],o=[E.J],n=D.bi,m=[R.f9],l=[A.a9],k=0;k<t;++k){j=this.c
i=this.f
h=i.u.w(i.aw)
g=i.aw
f=(g&&C.a).bq(g,h)
if(f!==-1)C.a.fN(g,f)
e=i.u.w(i.aS)
g=i.aS
f=(g&&C.a).bq(g,e)
if(f!==-1)C.a.fN(g,f)
d=i.u.w($.fc)
J.fw(d,i)
c=i.u.w(H.a([i.d,i.e],m))
b=new Q.b6(null,null,!1,null,0,0,0,0,!1,null,!0,!0,!0,!0,null,null,0,H.a([],s),!1,!1,[],!1,null,h,null,0,0,!1,null,null,null,e,null,null,null,null,null,d,!1,null,-1,!1,null,null,null,!0,!1,"#ff0000",null,null,null,null,!1,!0,!1,!1,!1,0,0,0,!1,0,!1,!1,!1,null,C.c,i,"","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],r),!1,H.a([],q),!1,H.a([],p),0,H.a([],o),null,null,!1,H.a([],s),"",null,null)
b.a$=b.cp()
g=$.is+1
$.is=g
b.k4=g
b.a=$.nA
g=$.$get$cg()
a=P.a3(null,null,null,n)
a0=new A.fC(b,null,null,!1,!1,!1,a,0,0,!0,!1)
a.a4(0,g)
a0.e=!0
b.a$.f8(a0,null,null)
b.ax=c
if(c!=null)b.bP()
b.d="player_"+H.p(b.k4)
g=new A.jk(null,b)
g.a=H.a([],l)
b.y2=g
b.ji()
g=i.u
a=g.w(B.fU())
a0=new B.dZ(null,null)
a1=g.w(a.gc9())
a0.a=a
a0.b=a1
b.ay=a0
a0=i.u
a=a0.w(B.fU())
g=new B.dZ(null,null)
a1=a0.w(a.gc9())
g.a=a
g.b=a1
b.az=g
b.fB()
b.fA()
b.a=b.c.u.w($.$get$aq()).c8()
b.fz()
b.x1=i.u.a0(3)+1
b.bm=i.u.a0(1+$.mU-1)+1
g=i.u.a0(46)+1
b.bw=g
b.bn=g
if(i.u.a.B()>0.7)b.bn=i.u.a0(46)+1
if(k>=j.length)return H.B(j,k)
j[k]=b}this.dd()},
jr:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=document
s=t.querySelector("#sprite_template")
r=t.querySelector("#container")
J.wW(r,"")
for(t=this.b,q=[P.v],p=J.aW(s),o=this.d,n=this.e,m=0;m<t;++m){l=this.c
if(m>=l.length)return H.B(l,m)
l=l[m]
k=W.hV(n,o)
j=$.$get$n4()
i=C.f.ar(k,"2d")
j=C.b.bN(j.ep(!1),16)
J.wS(i,"#"+C.d.ea(j,6,"0").toUpperCase())
i.fillRect(0,0,k.width,k.height)
H.tx("canvas is "+k.localName)
j=p.gV(s)
h=W.hV(p.gU(s),j)
j=p.gV(s)
g=W.hV(p.gU(s),j)
j=p.gV(s)
f=W.hV(p.gU(s),j)
l.bo=!1
l.b3=!1
T.qO(g,l,null,!1)
l.bo=!0
T.qO(f,l,null,!1)
l.b3=!0
T.qO(h,l,null,!1)
J.cz(C.f.ar(k,"2d"),h,500,0)
J.cz(C.f.ar(k,"2d"),f,200,0)
J.cz(C.f.ar(k,"2d"),g,-100,0)
i=k.getContext("2d")
i.font="40px Times New Roman"
i.fillStyle=l.W.ga_().m(0,$.ao).fV()
i.fillText(H.p(l.Y)+" of "+H.p(l.W),20,350)
i.font="18px Times New Roman"
i.fillStyle="#000000"
i.fillText("ChatHandle: ",10,386)
i.fillText(l.aT,210,386)
i.fillText("Interests: ",10,404)
i.fillText(H.p(l.ay.b)+" and "+H.p(l.az.b),210,404)
i.fillText("Land: ",25,440)
i.fillText(l.aB.dy,210,440)
i.fillText("Denizen: ",35,458)
j=l.aB.fy.c
e=P.bU("<(,?:.|\\n)*?>",!0,!0)
j=H.bM(j,e,"")
e=P.bU(",",!0,!0)
j=H.bM(j,e,"")
if(j.length>144)j=C.d.N(j,0,141)+"..."
i.fillText(j,210,458)
i.fillText("Consorts: ",35,476)
j=l.aB.fx
i.fillText(j.c+"s who "+j.d,210,476)
i.fillText("Smells Like: ",35,494)
j=this.h8(l.aB)
e=C.a.b6(C.a.ck(j,0,j.length-1),", ")
d=C.a.gby(j)
j=j.length<2?"":" and "
i.fillText(C.a.b6([e,d],j),210,494)
i.fillText("Sounds Like: ",35,512)
j=this.h9(l.aB)
e=C.a.b6(C.a.ck(j,0,j.length-1),", ")
d=C.a.gby(j)
j=j.length<2?"":" and "
i.fillText(C.a.b6([e,d],j),210,512)
i.fillText("Feels Like: ",35,530)
j=this.h7(l.aB)
e=C.a.b6(C.a.ck(j,0,j.length-1),", ")
d=C.a.gby(j)
j=j.length<2?"":" and "
i.fillText(C.a.b6([e,d],j),210,530)
i.fillText("Example Quests: ",35,548)
c=H.a([],q)
j=l.aB
c.push(J.cE(j.dl([l],j.f)))
j=l.aB
c.push(J.cE(j.dl([l],j.r)))
j=l.aB
c.push(J.cE(j.dl([l],j.x)))
j=C.a.b6(C.a.ck(c,0,c.length-1),", ")
l=C.a.gby(c)
e=c.length<2?"":" and "
i.fillText(C.a.b6([j,l],e),210,548)
r.appendChild(k)}},
h8:function(a){var t,s,r,q,p
t=Q.d5(a.b,!1,!0,null,T.bV)
t.dt(!0)
s=H.a([],[P.v])
r=Math.min(t.b.length,2)
for(q=0;q<r;++q){p=t.b
if(q>=p.length)return H.B(p,q)
s.push(J.cV(p[q]).gdr())}return s},
kF:function(a,b,c){var t,s
t=W.ud("text")
s=J.aW(t)
s.sH(t,c)
t.id=c
a.appendChild(t)
s=s.gfH(t)
W.dR(s.a,s.b,new Z.mH(this),!1,H.M(s,0))
return t},
h9:function(a){var t,s,r,q,p
t=Q.d5(a.c,!1,!0,null,M.bt)
t.dt(!0)
s=H.a([],[P.v])
r=Math.min(t.b.length,2)
for(q=0;q<r;++q){p=t.b
if(q>=p.length)return H.B(p,q)
s.push(J.cV(p[q]).gdr())}return s},
h7:function(a){var t,s,r,q,p
t=Q.d5(a.d,!1,!0,null,K.bG)
t.dt(!0)
s=H.a([],[P.v])
r=Math.min(t.b.length,2)
for(q=0;q<r;++q){p=t.b
if(q>=p.length)return H.B(p,q)
s.push(J.cV(p[q]).gdr())}return s},
h1:function(){var t,s
t=this.r
s=J.cF(J.ck((t&&C.i).gbb(t),0))
if(J.N(s,"Any"))return $.jS
return L.xl(s)},
h6:function(){var t,s
t=this.Q
s=J.cF(J.ck((t&&C.i).gbb(t),0))
if(J.N(s,"Any"))return
return this.f.hB(s)},
h2:function(){var t,s
t=this.x
s=J.cF(J.ck((t&&C.i).gbb(t),0))
if(J.N(s,"Any"))return $.jf
return T.E5(s)},
h4:function(){var t,s
t=this.ch
s=J.cF(J.ck((t&&C.i).gbb(t),0))
if(J.N(s,"Any"))return $.iI
return B.ue(s)},
h5:function(){var t,s
t=this.cx
s=J.cF(J.ck((t&&C.i).gbb(t),0))
if(J.N(s,"Any"))return $.iI
return B.ue(s)},
jz:function(){var t,s
t=H.a([],[P.O])
for(s=0;s<$.mU;++s)t.push(s)
C.l.bD(document.createElement("div"),"Hair")
this.cy=this.ba(this.aY("Hair"),t,"hair")},
jt:function(){var t,s
t=H.a([],[P.O])
for(s=0;s<12;++s)t.push(s)
C.l.bD(document.createElement("div"),"Wings")
this.dy=this.ba(this.aY("Wings"),t,"favNum")},
jW:function(){var t,s
t=H.a([],[P.O])
for(s=0;s<$.mV;++s)t.push(s)
C.l.bD(document.createElement("div"),"LeftHorn")
this.db=this.ba(this.aY("LeftHorn"),t,"hair")},
kz:function(){var t,s
t=H.a([],[P.O])
for(s=0;s<$.mV;++s)t.push(s)
C.l.bD(document.createElement("div"),"RightHorn")
this.dx=this.ba(this.aY("RightHorn"),t,"hair")},
dd:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
for(t=this.c,s=t.length,r=[R.f9],q=0;q<s;++q){p=t[q]
o=this.y
n=J.cF(J.ck((o&&C.i).gbb(o),0))
o=J.ar(n)
if(o.T(n,"Any")){o=this.f.u
o.b=J.bO(o.b,1)
p.aa=o.a.cE()}else if(o.T(n,"Troll"))p.aa=!0
else p.aa=!1
o=this.h1()
p.W=o
if(J.N(o,$.jS))p.W=this.f.u.w(L.jV())
o=this.h2()
p.Y=o
if(J.N(o,$.jf))p.Y=this.f.u.w(T.hm())
m=this.h4()
l=this.h5()
o=J.N(m,$.iI)
k=this.f
if(o){o=k.u
k=o.w(B.fU())
j=new B.dZ(null,null)
i=o.w(k.gc9())
j.a=k
j.b=i
p.ay=j}else{o=new B.dZ(null,null)
i=k.u.w(m.gc9())
o.a=m
o.b=i
p.ay=o}o=J.N(l,$.iI)
k=this.f
if(o){o=k.u
k=o.w(B.fU())
j=new B.dZ(null,null)
i=o.w(k.gc9())
j.a=k
j.b=i
p.az=j}else{o=new B.dZ(null,null)
i=k.u.w(l.gc9())
o.a=l
o.b=i
p.az=o}o=this.z
h=J.cF(J.ck((o&&C.i).gbb(o),0))
if(p.aa){p.aJ="#000000"
p.Z=this.f.u.w($.$get$eG())}p.Z=h
if(J.N(h,"Any"))p.Z=this.f.u.w($.$get$eG())
o=this.cy
g=J.cF(J.ck((o&&C.i).gbb(o),0))
p.bm=J.N(g,"Any")?this.f.u.a0($.mU)+1:H.dc(g,null,null)
p.aJ=J.cF(this.fr)
o=this.db
f=J.cF(J.ck((o&&C.i).gbb(o),0))
o=this.dx
e=J.cF(J.ck((o&&C.i).gbb(o),0))
d=this.f.u.a0($.mV)+1
c=!J.N(f,"Any")?H.dc(f,null,null):d
b=!J.N(e,"Any")?H.dc(e,null,null):d
p.bw=c
p.bn=b
p.sk6(this.h6())
if(p.ax==null){o=this.f
o=o.u.w(H.a([o.d,o.e],r))
p.ax=o
if(o!=null)p.bP()}o=this.dy
a=J.cF(J.ck((o&&C.i).gbb(o),0))
a0=J.N(a,"Any")?this.f.u.a0(12):H.dc(a,null,null)
H.tx("#favorit enumber is "+H.p(a0))
p.b4.r=a0
if(J.wD(J.cF(this.fx))){p.u=!1
p.aT=J.cF(this.fx)}else p.u=!0
p.jL(0)}this.jr()},
ba:function(a,b,c){var t=this.h0(a,b,c)
W.dR(t,"change",new Z.mF(this),!1,W.W)
return t},
j8:function(a,b,c){var t,s
t=W.ud(null)
s=J.aW(t)
s.sH(t,c)
s.saO(t,"color")
t.id=c
a.appendChild(t)
s=s.gfH(t)
W.dR(s.a,s.b,new Z.mE(this),!1,H.M(s,0))
return t},
aY:function(a){var t=document.createElement("div")
t.classList.add("ocElement")
C.l.bD(t,"<div class = 'label'>"+a+"</div>")
this.a.appendChild(t)
return t},
h0:function(a,b,c){var t,s,r,q,p,o,n
t=document.createElement("select")
t.name=c
t.id=c
s=W.v1("","",null,!1)
s.value="Any"
C.L.bD(s,"Any")
s.selected=!0
t.add(s,null)
for(r=b.length,q=0;q<b.length;b.length===r||(0,H.bN)(b),++q){p=b[q]
o=W.v1("","",null,!1)
n=J.ar(p)
o.value=n.v(p)
n=n.v(p)
o.textContent=null
o.appendChild(C.L.b0(o,n,null,null))
t.add(o,null)}a.appendChild(t)
return t},
gaV:function(a){return this.f},
saV:function(a,b){return this.f=b}}
Z.mG.prototype={
$1:function(a){return this.a.fw()},
$S:function(){return{func:1,args:[,]}}}
Z.mH.prototype={
$1:function(a){return this.a.dd()},
$S:function(){return{func:1,args:[,]}}}
Z.mF.prototype={
$1:function(a){return this.a.dd()},
$S:function(){return{func:1,args:[,]}}}
Z.mE.prototype={
$1:function(a){return this.a.dd()},
$S:function(){return{func:1,args:[,]}}}
V.mM.prototype={
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Shorts",H.a([$.S,$.V,$.f2,$.a7],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Sidekick Figurine",H.a([$.aU,$.V,$.ay],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Steroids",H.a([$.aH,$.V,$.aa],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
D:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.v]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Z,P.U])
t.i(0,$.l5,$.j)
t.i(0,$.d9,$.l)
t.i(0,$.fP,$.l)
t.i(0,$.l6,$.l)
t.i(0,$.dJ,$.l)
t.i(0,$.bn,$.l)
t.i(0,$.dW,$.l)
t.i(0,$.ej,$.l)
t.i(0,$.l7,$.l)
t.i(0,$.id,$.l)
t.i(0,$.l3,$.l)
r="The "+$.y+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.k
r=r+q+" asks the "
p=$.t
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.R
n=[U.c]
t.i(0,new R.bB("Help Breed the Frogs",!1,[new U.c(r+o+"s. "),new U.c("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ae)
q=$.k
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.t+" named Professor "
p=$.R
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.am
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.y
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.i(0,new R.X("Become The Best",!1,[new U.c(o),new U.c(p),new U.c(l),new U.ab(k,"The "+q+" whited out...",m)],H.a([],n),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
m="Now that the "+$.y+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.k
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.t
t.i(0,new R.ac("Explore the Tombs",!1,[new U.c(m),new U.c(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.c("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.b0+" buffs. With a deafening "+$.R+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.bW
this.c.i(0,new X.F(s,t,null),n)},
gb1:function(){return this.k1},
gK:function(){return this.k2},
gP:function(){return this.r1},
gak:function(){return this.r2},
gal:function(){return this.rx},
gam:function(){return this.ry},
gaj:function(){return this.x1},
gah:function(){return this.x2},
gai:function(){return this.y1}}
G.mX.prototype={
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Superhero Action Figure",H.a([$.aU,$.ay,$.b8],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Action DVD",H.a([$.aU,$.ay],s),null,!1,"Shogun The Movie")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Ghost Busters DVD",H.a([$.aU,$.bZ],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Snow Dogs DVD",H.a([$.aU,$.b9,$.bq,$.ce],s),null,!1,"Snow Buddies Anthology")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Skateboarding Video Game",H.a([$.aU,$.ay],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Movie Poster",H.a([$.Q,$.ay],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Audrey II Plush",H.a([$.b5,$.ay,$.S,$.aJ],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Peashooter Toy",H.a([$.b5,$.b_,$.ay,$.S],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Shitty Sword",H.a([$.b8,$.C,$.ay,$.f4,$.aL,$.bS],s),"So. Shitty.",!1,"Perfect Weapon")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("GameBro Magazine",H.a([$.Q,$.ay],s),"5/5 hats.",!1,"Nerd Magazine")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("GameGrl Magazine",H.a([$.Q,$.ay],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
D:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.v]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.Z,P.U]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cQ,$.l)
q.i(0,$.cH,$.l)
q.i(0,$.cn,$.j)
q.i(0,$.d9,$.ae)
q.i(0,$.el,$.ae)
p=$.k
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.t
m=[U.c]
q.i(0,new R.a4("Become the Star",!1,[new U.c(o+n+" manages to catch a video of it, and it goes viral on "+$.b0+"tube. This is humiliating."),new U.c("Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.R+"s added in."),new U.c(" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something.")],H.a([],m),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.aQ
this.r.i(0,new X.F(s,q,null),n)
n=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.ei,$.l)
s.i(0,$.d7,$.l)
s.i(0,$.cH,$.l)
s.i(0,$.cn,$.l)
s.i(0,$.dI,$.j)
q=$.k
p="The "+q+" runs towards an explosion in a local "
o=$.t
p=p+o+" village. As they rush to help the injured, a Mysterious "+o+" in a mask and cape flees the scene. Who was that? "
l="The Mysterious "+o+" turns out to be Professor "
k=$.b0
s.i(0,new R.a4("Stop the Villain",!1,[new U.c(p),new U.c(l+k+", a notorious consort Villain. They spread chaos and disaster with their "+k+" ray. The "+q+" vows to stop them. "),new U.c(" The "+q+" has a dramatic showdown witih Professor "+k+", that results in the Villain being knocked unconscious, and taken away by the "+o+" authorities. ")],H.a([],m),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
o=$.aQ
this.r.i(0,new X.F(n,s,null),o)
o=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.cH,$.l)
t.i(0,$.dG,$.j)
t.i(0,$.co,$.j)
t.i(0,$.dI,$.l)
s=$.k
r="The "+s+" gets a job at the "+$.b0+" Cinema. A new movie, The Lonely "
q=$.am
r=r+q+" is coming out soon, and "
p=$.t
r=r+p+"s are already lining up. It's going to be busy as fuck. "
n="Oh shit, the "+s+" learns that The Lonely "+q+" never was delivered. The "+p+"s already lined up are close to rioting. The sound of "+$.R+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+s+" prepares to venture inside.    "
s=" The "+s+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+q+". The "+p+"s lined up cheer and enter the theater. The Lonely "+q+" has finally begun to play. The "+s+" watches, rapt. Such a fantastic movie. The "+s+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
q=this.y
t.i(0,new R.a4("Premiere the Movie",!1,[new U.c(r),new U.c(n),new U.c(s)],H.a([],m),R.x(),!1,!1,new Y.bx("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.w)
q=$.aQ
this.r.i(0,new X.F(o,t,null),q)},
gI:function(){return this.cx},
gaC:function(){return this.cy},
gaD:function(){return this.db},
gK:function(){return this.dx},
gaK:function(){return this.dy}}
N.mZ.prototype={
at:function(){return!0},
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Feather'd Cap",H.a([$.S,$.V,$.f2],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Crown",H.a([$.a7,$.rm,$.V,$.f2],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Gunpowder",H.a([$.bs,$.V],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
D:function(){var t,s,r,q,p,o,n
t=[P.v]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Z,P.U])
t.i(0,$.cH,$.l)
t.i(0,$.cP,$.l)
t.i(0,$.dL,$.E)
r="With the closing of the curtain, the "+$.y+" has released the frogs, and yet they are nowhere to be found. The "
q=$.k
p=[U.c]
t.i(0,new R.bB("Destroy the Lack of Frogs",!1,[new U.c(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.c("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.c("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ae)
q=$.y
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.k
r=r+o+" to get it back to normal. They organize a team of "
n=$.t
t.i(0,new R.ac("Fix All The Things",!1,[new U.c(r+n+"s to start rebuilding infrastructure."),new U.c("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.am+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.c("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.bW
this.c.i(0,new X.F(s,t,null),p)},
gb1:function(){return this.k1},
gK:function(){return this.k2},
gP:function(){return this.r1},
gak:function(){return this.r2},
gal:function(){return this.rx},
gam:function(){return this.ry},
gaj:function(){return this.x1},
gah:function(){return this.x2},
gai:function(){return this.y1}}
U.c.prototype={}
U.ab.prototype={}
R.ev.prototype={
v:function(a){return H.p(new H.dx(H.hN(this),null))+": "+this.c},
aR:function(a){var t=U.c
return new R.ev(this.c,this.d,P.bc(this.e,!0,t),H.a([],[t]),this.r,!1,!1,this.z,1,null,null)},
jc:function(a){return this.r.$1(a)},
gH:function(a){return this.c}}
R.a4.prototype={
aR:function(a){var t=U.c
return new R.a4(this.c,!1,P.bc(this.e,!0,t),H.a([],[t]),this.r,!1,!1,this.z,1,null,null)}}
R.X.prototype={
aR:function(a){var t=U.c
return new R.X(this.c,!1,P.bc(this.e,!0,t),H.a([],[t]),this.r,!1,!1,this.z,1,null,null)}}
R.ac.prototype={
aR:function(a){var t=U.c
return new R.ac(this.c,!1,P.bc(this.e,!0,t),H.a([],[t]),this.r,!1,!1,this.z,1,null,null)}}
R.bB.prototype={
aR:function(a){var t=U.c
return new R.bB(this.c,!1,P.bc(this.e,!0,t),H.a([],[t]),this.r,!1,!1,this.z,1,null,null)}}
R.dv.prototype={
aR:function(a){var t=U.c
return new R.dv(this.c,this.d,P.bc(this.e,!0,t),H.a([],[t]),this.r,!1,!1,this.z,1,null,null)}}
R.fg.prototype={
aR:function(a){var t=U.c
return new R.fg(this.c,this.d,P.bc(this.e,!0,t),H.a([],[t]),this.r,!1,!1,this.z,1,null,null)}}
E.n1.prototype={
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Curtain",H.a([$.S,$.Y,$.b8],s),null,!1,"Show Ender")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Cursed Sword",H.a([$.C,$.f4,$.b1,$.Y,$.aL,$.bg,$.b8,$.br,$.aS],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Megaphone",H.a([$.C,$.bb,$.ad,$.Y,$.b8],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Bike Horn",H.a([$.aV,$.C,$.bb,$.bz,$.c9,$.Y,$.b8],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Bacchus Wine",H.a([$.aH,$.bz,$.ap,$.Y,$.a7,$.b8],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Nightmare Fuel",H.a([$.a2,$.Y,$.bg,$.aI,$.bs,$.b8],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.v]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.Z,P.U]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.u1,$.j)
q.i(0,$.dn,$.j)
q.i(0,$.d7,$.j)
q.i(0,$.d8,$.l)
q.i(0,$.c7,$.l)
q.i(0,$.cv,$.l)
q.i(0,$.cm,$.E)
q.i(0,$.el,$.l)
q.i(0,$.ei,$.j)
q.i(0,$.l2,$.j)
q.i(0,$.eW,$.j)
q.i(0,$.r4,$.j)
q.i(0,$.ih,$.l)
q.i(0,$.ek,$.j)
p=$.k
o="The "+p+" is chilling in a "
n=$.t
o=o+n+" village when a bunch of sentient "
m=$.am
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.y
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.c]
q.i(0,new R.X("Stop the War",!1,[new U.c(o),new U.c(k),new U.c(j),new U.ab(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.ja(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
h=$.t
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.k
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.y
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.X("Stop the Civil War",!1,[new U.c(l),new U.c(m),new U.c(i),new U.ab(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
h=$.aP
this.c.i(0,new X.F(s,q,null),h)
h=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.dH,$.j)
s.i(0,$.c7,$.l)
s.i(0,$.cm,$.j)
s.i(0,$.cB,$.j)
s.i(0,$.cQ,$.j)
s.i(0,$.cH,$.l)
s.i(0,$.l1,$.E)
s.i(0,$.dn,$.l)
s.i(0,$.d9,$.j)
s.i(0,$.cn,$.j)
s.i(0,$.el,$.E)
q=$.R
p="The "+q+"ing and capering "
o=$.t
p=p+o+"s are...OKAY, you guess? They keep asking the "
n=$.k
p=p+n+" to do a stupid "
m=$.b0
p=p+m+" Dance, though. They politely decline."
l="A capering "+o+" tells the "+n+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+m+" Dance off. The "+n+" politiely declines and defeats them in a good old fashioned beat down. The "+o+"s seem less than enthused about getting their stolen property back. Something about the "+n+" being a spoilsport?"
q="A crying "+o+" child asks why the "+n+" is such a meany head. Why won't they dance? Defeated, the "+n+" hangs their head, and then begins doing an extremely stupid "+m+" Dance, well below their dignity. The "+o+" child is estatic and begins "+q+" in time to the music that only the "+n+" can hear. "
k=$.y
j="The "+k+" approaches the "+n+", complimenting them on their stupid "+m+" Dance. Mortified, the "+n+" initiates strife."
o="It is done. Now NO ONE but that "+o+" child knows of the blow to the "+n+"'s dignity. No one at all."
s.i(0,new R.X("Do a Stupid Dance",!1,[new U.c(p),new U.c(l),new U.c(q),new U.ab(j,"You just KNOW that that shitty "+k+" is gonna somehow post videos of the "+n+"'s stupid "+m+" dance online. They must be stopped.",o)],H.a([],g),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
o=$.aP
this.c.i(0,new X.F(h,s,null),o)
o=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.u1,$.j)
t.i(0,$.el,$.j)
t.i(0,$.cm,$.j)
t.i(0,$.d9,$.l)
t.i(0,$.cQ,$.j)
s=$.k
r="The "+s+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
q="The "+s+" feels like someone is laughing at them. Not like....a "+$.t+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+s+" is so fucking pissed."
p="The "+s+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+s+". 'You win, teleport to fight "+$.y+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+s+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+s+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+s+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.X("Hate This Bullshit Land",!1,[new U.c(r),new U.c(q),new U.c(p),new U.ab(n,"God FUCKING DAMN IT. After all that the "+s+" LOSES!? ",m)],H.a([],g),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
g=$.aP
this.c.i(0,new X.F(o,t,null),g)},
ga_:function(){return this.rx},
gK:function(){return this.x1},
gP:function(){return this.x2},
gaA:function(){return this.C},
gI:function(){return this.G}}
L.n2.prototype={
ga_:function(){return this.rx},
gK:function(){return this.x1},
gP:function(){return this.x2},
gI:function(){return this.t}}
Y.ey.prototype={}
Y.cW.prototype={}
Y.T.prototype={
gH:function(a){return this.c}}
Y.a6.prototype={}
Y.k7.prototype={}
Y.bx.prototype={}
Y.kf.prototype={}
Y.bE.prototype={}
Y.j7.prototype={}
Y.iq.prototype={}
Y.j8.prototype={}
Y.eg.prototype={}
Z.na.prototype={
ga_:function(){return this.rx},
gK:function(){return this.x1},
gP:function(){return this.x2}}
N.nb.prototype={
at:function(){return!0},
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Domino Mask",H.a([$.S,$.V,$.f2],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Archery Set",H.a([$.rf,$.V,$.f2,$.ui],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Gristtorrent Server",H.a([$.a7,$.aU,$.ad,$.V,$.a1,$.at],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
D:function(){var t,s,r,q,p,o,n
t=[P.v]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Z,P.U])
t.i(0,$.cm,$.j)
t.i(0,$.cv,$.l)
t.i(0,$.dI,$.l)
r="The "+$.y+" cannot release the frogs since the corrupt Noble "
q=$.t
r=r+q+"s have hoarded them. The "
p=$.k
o=[U.c]
t.i(0,new R.bB("Steal the Frogs",!1,[new U.c(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.c("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.c("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ae)
p=$.k
q="The "+p+" learns of the extreme injustices of the "
r=$.t
q=q+r+"s who rose to power during the tyranny of "
n=$.y
t.i(0,new R.ac("Lead a Rebellion",!1,[new U.c(q+n+". This cannot stand!"),new U.c("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.c("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
o=$.bW
this.c.i(0,new X.F(s,t,null),o)},
gK:function(){return this.k1},
gP:function(){return this.k4},
gak:function(){return this.r1},
gal:function(){return this.r2},
gam:function(){return this.rx},
gaj:function(){return this.ry},
gah:function(){return this.x1},
gai:function(){return this.x2}}
Q.nc.prototype={
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Red Rose",H.a([$.aO,$.aN],s),null,!1,"Seductive Plant")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Shipping Grid",H.a([$.aO,$.Q],s),"Don't let ABJ see this.",!1,"Grid of Sin")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Chocolate Bar",H.a([$.aO,$.aH],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Candelabra",H.a([$.aO,$.aI],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Head Cannon",H.a([$.aO,$.bs,$.C,$.b_],s),"Fuck you for that pun, JR.",!1,null)
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Her Pitch Passions Novel",H.a([$.aT,$.Q,$.aO],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
D:function(){var t,s,r,q,p,o,n,m,l
t=[P.v]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.Z,P.U]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.co,$.j)
q.i(0,$.fP,$.l)
q.i(0,$.eP,$.l)
q.i(0,$.fO,$.j)
q.i(0,$.cB,$.l)
q.i(0,$.ig,$.E)
p=$.k
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.t
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.am+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.c]
q.i(0,new R.a4("Set the Mood",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.x(),!1,!1,new Y.bx("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.w)
p=$.aQ
this.r.i(0,new X.F(s,q,null),p)
p=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.cB,$.l)
s.i(0,$.dG,$.j)
s.i(0,$.fO,$.j)
s.i(0,$.co,$.l)
s.i(0,$.dX,$.E)
s.i(0,$.ig,$.E)
q=$.t
o="A Romantic "+q+" approaches the "
n=$.k
s.i(0,new R.a4("Plan the Date",!1,[new U.c(o+n+". They have a date coming up but have no idea what to do. Can the "+n+" help? "),new U.c("The "+n+" has the best montage of their life, helping the Romantic "+q+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.c(" The "+n+" hides in bushes to spy on the Romantic "+q+"'s date. It's going so well! ")],H.a([],l),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
q=$.aQ
this.r.i(0,new X.F(p,s,null),q)
q=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.ig,$.j)
t.i(0,$.co,$.j)
t.i(0,$.eP,$.l)
t.i(0,$.l6,$.j)
t.i(0,$.fO,$.j)
t.i(0,$.cB,$.l)
t.i(0,$.dX,$.E)
s=$.k
r="The "+s+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.t
t.i(0,new R.a4("Ship All the Ships",!1,[new U.c(r+p+"s have no idea what's coming. "),new U.c("The "+s+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.R+"s ring out through the air.  "),new U.c("The "+s+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.y+"'s stupid rules. ")],H.a([],l),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
s=$.k
p="The "+s+"  and the "
r=$.e1
t.i(0,new R.a4("Flushed Shipping Dungeon",!1,[new U.c(p+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+s+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.ex(),!1,!1,new Y.iq(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.ae)
r=$.k
s="The "+r+"  and the "
p=$.e1
t.i(0,new R.a4("Pale Shipping Dungeon",!1,[new U.c(s+p+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+r+"  and the "+p+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.ex(),!1,!1,new Y.j7(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ae)
p=$.k
r="The "+p+"  and the "
s=$.e1
t.i(0,new R.a4("Pitched Shipping Dungeon",!1,[new U.c(r+s+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+p+"  and the "+s+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.ex(),!1,!1,new Y.j8(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.ae)
l=$.aQ
this.r.i(0,new X.F(q,t,null),l)},
gI:function(){return this.cx},
gaC:function(){return this.cy},
gaD:function(){return this.db},
gK:function(){return this.dx},
gaK:function(){return this.dy}}
T.nf.prototype={
$1:function(a){return a.gcB()},
$S:function(){return{func:1,args:[T.de]}}}
T.ng.prototype={
$1:function(a){return!a.gcB()},
$S:function(){return{func:1,args:[T.de]}}}
T.ne.prototype={
$1:function(a){return!a.gcC()},
$S:function(){return{func:1,args:[T.de]}}}
T.de.prototype={
F:function(){var t,s
t=Q.G(null,null,A.a9)
s=A.i("Perfectly Generic Object",H.a([],[G.a5]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),[H.M(t,0)]))
this.db=t},
at:function(){return!1},
e7:function(a){var t,s,r
for(t=this.gI(),s=t.length,r=0;r<t.length;t.length===s||(0,H.bN)(t),++r)t[r].cX(a)},
D:function(){var t,s,r,q,p,o,n,m
t=[P.v]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.Z,P.U]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.d8,$.j)
q.i(0,$.bn,$.E)
q.i(0,$.dL,$.j)
q.i(0,$.c7,$.l)
q.i(0,$.dW,$.E)
p=$.k
o="The "+p+" learns that all of the local "
n=$.t
m=[U.c]
q.i(0,new R.ac("Revive the Consorts",!1,[new U.c(o+n+"s are dead. This is....really depressing, actually. "),new U.c("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.R+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.bW
this.c.i(0,new X.F(s,q,null),n)
n=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.eV,$.j)
s.i(0,$.ej,$.E)
s.i(0,$.eU,$.l)
s.i(0,$.cO,$.j)
s.i(0,$.cv,$.E)
q=$.k
p="The "+q+" learns that all of the local "
o=$.t
s.i(0,new R.ac("Produce the Goods",!1,[new U.c(p+o+"s have a severe shortage of gears and cogs. It is up to the "+q+" to get the assembly lines up and running again. "),new U.c("The "+q+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+q+" is training the local "+o+"s to operate the manufacturing equipment. There is "+$.R+"ing and chaos everywhere. "),new U.c("The "+q+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+o+"s name a national holiday after the "+q+". ")],H.a([],m),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
q=$.k
o="The "+q+" learns that all of the local "
p=$.t
s.i(0,new R.ac("Do the Teamwork",!1,[new U.c(o+p+"s have a severe shortage of gears and cogs. It is up to the "+q+" to get the assembly lines up and running again. "),new U.c("The "+q+" notices that all of the "+p+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.c("The "+q+" grabs the "+$.e1+" and demonstrates some simple teamwork techniques. The "+p+"s begin "+$.R+"ing in amazement. The factory is saved! ")],H.a([],m),R.ex(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ae)
p=$.bW
this.c.i(0,new X.F(n,s,null),p)
p=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.be,$.j)
t.i(0,$.bn,$.E)
t.i(0,$.cd,$.l)
s=$.k
r="The "+s+" learns that all of the local "
q=$.t
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+s+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
n=$.R
t.i(0,new R.a4("Relax the Consorts According to Prophecy",!1,[new U.c(r),new U.c(o+n+"ing about? A prophecy?  "),new U.c("The "+s+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+n+" once. ")],H.a([],m),R.rX(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.E)
n=$.k
q="The "+n+" learns that all of the local "
s=$.t
t.i(0,new R.ac("Relax the Consorts",!1,[new U.c(q+s+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.c("The "+n+" fluffs more pillows than any other Player ever has before them. "),new U.c("The "+n+" teaches the local "+s+"s to find their chill. ")],H.a([],m),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
m=$.bW
this.c.i(0,new X.F(p,t,null),m)},
v:function(a){return this.b},
af:function(a,b,c,d){var t=this.b
this.d=t
this.e=new X.i9("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.hT]),H.a([],[M.fL]))
this.F()
this.D()
if($.$get$e2().as(this.f))H.bv("Duplicate class id for "+this.v(0)+": "+this.f+" is already registered for "+J.cu($.$get$e2().m(0,this.f))+".")
$.$get$e2().i(0,this.f,this)},
gb1:function(){return this.a},
gH:function(a){return this.b},
gbM:function(){return this.c},
gdj:function(){return this.d},
gbf:function(a){return this.f},
gcB:function(){return this.r},
gcC:function(){return this.x},
gak:function(){return this.y},
gal:function(){return this.z},
gam:function(){return this.Q},
gaj:function(){return this.ch},
gah:function(){return this.cx},
gai:function(){return this.cy},
gK:function(){return this.dx},
gP:function(){return this.fx},
gI:function(){return this.fy},
gdv:function(){return this.go},
sH:function(a,b){return this.b=b}}
E.nh.prototype={
at:function(){return!0},
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Sage's Robe",H.a([$.S,$.V,$.bj,$.a1,$.aa,$.a7],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Peer Reviewed Journal",H.a([$.Q,$.V,$.aT,$.a1],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Guru Pillow",H.a([$.S,$.V,$.iM,$.a1],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
D:function(){var t,s,r,q,p,o
t=[P.v]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Z,P.U])
t.i(0,$.fM,$.l)
t.i(0,$.bn,$.l)
t.i(0,$.eX,$.j)
t.i(0,$.be,$.E)
t.i(0,$.cw,$.j)
r="The "+$.y+" has blocked access to the books for the duration. The "
q=$.k
p=[U.c]
t.i(0,new R.bB("Understand the Frogs",!1,[new U.c(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.t+"s to start collecting frogs. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ae)
q="Now that the "+$.y+" is defeated, it is time to begin recovery efforts. The "
r=$.t
q=q+r+"s ask the "
o=$.k
t.i(0,new R.ac("Be the Sage",!1,[new U.c(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.R+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.c("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.c("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.bW
this.c.i(0,new X.F(s,t,null),p)},
gK:function(){return this.k1},
gP:function(){return this.k4},
gak:function(){return this.r1},
gal:function(){return this.r2},
gam:function(){return this.rx},
gaj:function(){return this.ry},
gah:function(){return this.x1},
gai:function(){return this.x2},
gI:function(){return this.y1}}
Y.ni.prototype={
ga_:function(){return this.rx},
gK:function(){return this.x1},
gP:function(){return this.x2},
gI:function(){return this.t}}
Y.nj.prototype={}
Y.nk.prototype={
at:function(){return!1},
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Walking Stick",H.a([$.a2,$.V,$.du],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Adorable Girlscout Beret",H.a([$.S,$.V,$.up,$.a1,$.a7],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Map",H.a([$.Q,$.V,$.a1],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Compass",H.a([$.C,$.V,$.a1,$.aa],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
D:function(){var t,s,r,q,p
t=[P.v]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Z,P.U])
t.i(0,$.dJ,$.j)
t.i(0,$.cd,$.j)
t.i(0,$.bn,$.j)
t.i(0,$.cn,$.E)
t.i(0,$.be,$.E)
r="Now that the "+$.y+" has been defeated, the planet has really opened up. The "
q=$.k
p=[U.c]
t.i(0,new R.ac("Blaze a Trail",!1,[new U.c(r+q+" eagerly begins to explore uncharted territory. "),new U.c("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.c("Deep in a forgotten forest, in a temple covered in golden "+$.t+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
q="The "+$.y+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.k
t.i(0,new R.bB("Find the Frogs",!1,[new U.c(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.c("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.c("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.t+" "+$.R+"s in time to stop them.   ")],H.a([],p),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ae)
p=$.bW
this.c.i(0,new X.F(s,t,null),p)},
gK:function(){return this.k1},
gP:function(){return this.k4},
gak:function(){return this.r1},
gal:function(){return this.r2},
gam:function(){return this.rx},
gaj:function(){return this.ry},
gah:function(){return this.x1},
gai:function(){return this.x2}}
L.nl.prototype={
at:function(){return!1},
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Scroll",H.a([$.Q,$.V,$.a1],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Ink Pot",H.a([$.bf,$.V,$.at,$.a1],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Blank Book",H.a([$.Q,$.V,$.aT,$.a1,$.at,$.a7],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
D:function(){var t,s,r,q,p,o
t=[P.v]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Z,P.U])
t.i(0,$.kY,$.j)
t.i(0,$.bn,$.j)
t.i(0,$.cw,$.j)
t.i(0,$.be,$.l)
t.i(0,$.cP,$.l)
r="The "+$.y+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.k
p=[U.c]
t.i(0,new R.bB("Understand the Frogs",!1,[new U.c(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ae)
q="Now that the "+$.y+" has been taken care of, the "
r=$.k
q=q+r+" discovers a large library of "
o=$.t
t.i(0,new R.ac("Restore the Library",!1,[new U.c(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.c("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.c(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.bW
this.c.i(0,new X.F(s,t,null),p)},
gK:function(){return this.k1},
gP:function(){return this.k4},
gak:function(){return this.r1},
gal:function(){return this.r2},
gam:function(){return this.rx},
gaj:function(){return this.ry},
gah:function(){return this.x1},
gai:function(){return this.x2},
gI:function(){return this.y1}}
S.nn.prototype={
at:function(){return!1},
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Cueball",H.a([$.eo,$.lG,$.V,$.al,$.aJ,$.a7],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Crystal Ball",H.a([$.eo,$.un,$.V,$.ba],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Binoculars",H.a([$.bf,$.V,$.C],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Blindfold",H.a([$.uj,$.V,$.bj],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
D:function(){var t,s,r,q,p,o
t=[P.v]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Z,P.U])
t.i(0,$.u4,$.j)
t.i(0,$.l0,$.j)
t.i(0,$.u2,$.j)
t.i(0,$.d9,$.l)
r="Now that the "+$.y+" has been defeated, the land is really starting to open up. The "
q=$.k
r=r+q+" finds a tunnel filled with Blind "
p=$.t
o=[U.c]
t.i(0,new R.ac("Be the King",!1,[new U.c(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.c("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.c("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.x(),!1,!1,new Y.cW("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
q="The "+$.y+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.k
t.i(0,new R.bB("Understand the Frogs",!1,[new U.c(q+p+" thinks hard and figures out the best way to organize the "+$.t+"s to start collecting frogs. "),new U.c("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ae)
p=$.k
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.t
t.i(0,new R.ac("Work With Exiles",!1,[new U.c(q+r+"s to carry everything out."),new U.c("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.c("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.x(),!1,!1,new Y.cW("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
r="A group of underlings are still making trouble, even after the defeat of the "+$.y+". The "
p=$.k
r=r+p+" begins planting rumors of a huge "
q=$.am
t.i(0,new R.ac("Have the Keikaku",!1,[new U.c(r+q+" Treasure in the center of a still active dungeon. "),new U.c("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.x(),!1,!1,new Y.cW("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
o=$.bW
this.c.i(0,new X.F(s,t,null),o)},
gK:function(){return this.k1},
gP:function(){return this.k4},
gak:function(){return this.r1},
gal:function(){return this.r2},
gam:function(){return this.rx},
gaj:function(){return this.ry},
gah:function(){return this.x1},
gai:function(){return this.x2},
gI:function(){return this.y1}}
K.np.prototype={
jH:function(a){return!1},
hx:function(a){return!1},
hv:function(a){return!1},
ht:function(a){return!1},
hr:function(a){return!1},
hX:function(){var t,s,r,q
$.rZ=this
$.u.Q=this.dy
for(t=L.jV(),s=J.bP(t.a),t=new H.eC(s,t.b,[H.M(t,0)]);t.A();){r=s.gJ()
r.sH(0,r.gdj())}for(t=T.hm(),s=J.bP(t.a),t=new H.eC(s,t.b,[H.M(t,0)]);t.A();){q=s.gJ()
q.sH(0,q.gdj())}}}
K.mh.prototype={}
G.nq.prototype={}
L.nu.prototype={
ga_:function(){return this.rx}}
T.bV.prototype={}
O.nw.prototype={
ga_:function(){return this.ry}}
N.nx.prototype={
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Fiduspawn Plush",H.a([$.ce,$.S,$.bj],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Teddy Bear",H.a([$.ce,$.S,$.bj],s),null,!1,"Cuddle Bear")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Dice",H.a([$.rk,$.aU],s),null,!1,"D113")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Pigeon",H.a([$.bA,$.aJ,$.bo,$.bh,$.br,$.ru],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Cat Ears",H.a([$.S,$.bj,$.ce],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Religious Text",H.a([$.aT,$.Q],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Psychology Book",H.a([$.aT,$.Q],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Therapy Couch",H.a([$.bj,$.S],s),null,!1,"Giant Problem Absorbing Couch")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("FLARP Manual",H.a([$.aT,$.Q,$.a1],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.v]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.Z,P.U]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.dK,$.E)
q.i(0,$.be,$.l)
q.i(0,$.cP,$.j)
q.i(0,$.cw,$.l)
p=$.k
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.t
m=[U.c]
q.i(0,new R.a4("The Therapist is IN",!1,[new U.c(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.c("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.b0+" or "+$.am+".  The "+p+" is getting really good at helping them out. "),new U.c("A line of "+$.R+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.aQ
this.r.i(0,new X.F(s,q,null),p)
p=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.dK,$.E)
s.i(0,$.be,$.j)
s.i(0,$.cP,$.j)
s.i(0,$.qZ,$.j)
s.i(0,$.cB,$.j)
s.i(0,$.r6,$.j)
s.i(0,$.cw,$.l)
q=$.k
o="The "+q+" wanders into an incredibly calm area of their land. It is filled with chanting and "
n=$.R
o=o+n+"ing "
l=$.t
o=o+l+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+q+" joins them. "
k="While meditating with the "+l+" monks, the "+q+" has come to a startling realization, the vast croak is related to "
j=$.b0
s.i(0,new R.a4("Meditate On Frogism",!1,[new U.c(o),new U.c(k+j+"-ness. How could they miss this?"),new U.c(" The "+q+" begins telling all the "+l+" monks about how "+j+"-ness relates to the Vast Croak. The monks begin "+n+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.aQ
this.r.i(0,new X.F(p,s,null),n)
n=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.cO,$.E)
t.i(0,$.dG,$.j)
t.i(0,$.cd,$.j)
t.i(0,$.dI,$.j)
t.i(0,$.eT,$.j)
s=$.k
r="The "+s+" wanders into an entire crowd of "
q=$.t
r=r+q+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.R+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+s+" happily joins the RP."
p="The "+s+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+q+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+s+" to save the day! All that RP practice surprisingly pays off. They win easily!   "
s="The FLARP is finally coming to an end. All the "+q+"s agree that it is the best session in living memory and celebrate how the "+s+" kept it from becoming a tragedy."
q=this.y
t.i(0,new R.a4("Protect the FLARPers",!1,[new U.c(r),new U.c(p),new U.c(s)],H.a([],m),R.x(),!1,!1,new Y.bx("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.w)
q=$.aQ
this.r.i(0,new X.F(n,t,null),q)},
gI:function(){return this.cx},
gaC:function(){return this.cy},
gaD:function(){return this.db},
gK:function(){return this.dx},
gaK:function(){return this.dy}}
M.bt.prototype={}
N.nz.prototype={
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Frog Statue",H.a([$.aV,$.aM,$.Y],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Frog Costume",H.a([$.S,$.Y],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Nuclear Reactor",H.a([$.c2,$.a1,$.ad,$.Y],s),null,!1,"A Representation of My Hatred for Everything")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Telescope",H.a([$.C,$.bf,$.a1,$.Y],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Green Sun Poster",H.a([$.Q,$.Y,$.rn,$.a7],s),"Huh.",!1,"Sauce Sun Poster")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
D:function(){var t,s,r,q,p,o,n,m
t=$.k
s=[P.v]
r=H.a(["Wherever the "+t+" goes, they find a "+$.t+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.R+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.y+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
t=$.k
q=H.a(["The "+t+" discovers some tiny ectobiology lab equipment. Oh! Apparently it's for breeding frogs?  They play around with it a bit with what frogs they've managed to collect. It looks like they can somehow...combine frogs? Aww, look how cute that tadpole is!  ","The "+t+"'s server player deploys some weird equipment. After fiddling with it a bit, the "+t+" learns they can zap frogs into it and make baby frogs. How cute! ","A wizened "+$.t+" shows the "+t+" an ancient temple containing tiny ectobiology equipment. The pictures in the temple depect two frogs being zapped to it, and producing a cute little tadpole."],s)
t="A wise old "+$.t+" tells the "
p=$.k
t=t+p+" that they must negotiate with "
o=$.y
n=H.a([t+o+" to release the vast majority of the frogs. Apparently this is called 'lighting the forge'? ","A temple shows a huge snake monster, probably the "+o+" locking away all the frogs.","A "+o+" minion tells the "+p+" that if they want to find the best frogs, they are going to have to face the "+o+"."],s)
o=$.k
p="The "+o+" meets with "
t=$.y
m=H.a([p+t+". They speak in a langauge no one else can understand, and prove their worth. The forge is lit. The frogs are free.","The "+t+" offers the "+o+" an impossible Choice. After some deliberation, the "+o+" decides that it can't be done. The "+t+" sighs, and agrees to Light the Forge.","The "+t+" is a dismissive asshole, but agrees to light the forge. Wow, the "+o+" almost wishes that they WERE supposed to fight. "],s)
o=H.a(["Frogs"],s)
H.a([],s)
t=new H.q(0,null,null,null,null,null,0,[N.Z,P.U])
t.i(0,$.d9,$.E)
t.i(0,$.r0,$.j)
s=[U.c]
t.i(0,new R.X("Light the Forge",!1,[new U.c(r[0]),new U.c(q[0]),new U.c(n[0]+" "+m[0])],H.a([],s),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.ae)
t.i(0,new R.X("Light the Forge",!1,[new U.c(r[1]),new U.c(q[1]),new U.c(n[1]+" "+m[1])],H.a([],s),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.ae)
t.i(0,new R.X("Light the Forge",!1,[new U.c(r[2]),new U.c(q[2]),new U.c(n[2]+" "+m[2])],H.a([],s),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.ae)
t.i(0,new R.X("Light the Forge",!1,[new U.c(r[2]),new U.c(q[0]),new U.c(n[1]+" "+m[0])],H.a([],s),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.ae)
t.i(0,new R.X("Light the Forge",!1,[new U.c(r[2]),new U.c(q[1]),new U.c(n[1]+" "+m[2])],H.a([],s),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.ae)
t.i(0,new R.X("Light the Forge",!1,[new U.c(r[0]),new U.c(q[1]),new U.c(n[2]+" "+m[0])],H.a([],s),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.ae)
p=$.k
t.i(0,new R.bB("Breed the Frogs, But Be Boring About It",!1,[new U.c("The "+p+" collects all sorts of frogs. Various "+$.t+"s 'help' by "+$.R+"ing up a storm. "),new U.c("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.c("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.x(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
s=$.Ej
this.c.i(0,new X.F(o,t,null),s)},
ga_:function(){return this.rx},
gK:function(){return this.x1},
gP:function(){return this.x2},
gaA:function(){return this.C},
gI:function(){return this.G}}
U.ah.prototype={
gkb:function(){var t=this.e
return new H.bF(t,new U.nB(this),[H.M(t,0)])},
c8:function(){var t,s,r,q
t=this.c
s=this.x
r=this.gkb()
r=P.bc(r,!0,H.M(r,0))
q=new U.ah(s,null,null,t,!1,P.a3(null,null,null,G.a5),0,3)
q.L(t,r,null,!1,null)
q.e.h(0,s)
return q},
gH:function(a){return this.c+"kind"},
$isbD:1,
$asbD:function(){return[A.a9]}}
U.nB.prototype={
$1:function(a){return!J.N(a,this.a.x)},
$S:function(){return{func:1,args:[G.a5]}}}
M.nE.prototype={
$asec:function(){return[O.j6]},
$asda:function(){return[O.j6,P.dC]}}
U.nF.prototype={
ga_:function(){return this.rx}}
R.o4.prototype={
at:function(){return!0},
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Meddler's Guide",H.a([$.aT,$.V,$.Q,$.bz,$.a7,$.b3],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("First Aid Kit",H.a([$.bf,$.V,$.b3],s),"Heals here.",!1,"Anti-Pain Box")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=$.V
r=A.i("Cloud in a Bottle",H.a([r,r,$.by],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Fairy Wings",H.a([$.aa,$.V,$.ba,$.aN,$.Q],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
D:function(){var t,s,r,q,p,o
t=[P.v]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Z,P.U])
t.i(0,$.cP,$.j)
t.i(0,$.be,$.j)
t.i(0,$.dJ,$.l)
t.i(0,$.eX,$.l)
t.i(0,$.qY,$.l)
t.i(0,$.dW,$.l)
t.i(0,$.id,$.l)
t.i(0,$.r5,$.l)
r=$.k
q="The "+r+" decides to take a break after defeating "+$.y+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.t
o=[U.c]
t.i(0,new R.ac("Heal the Timeline",!1,[new U.c(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.c("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.c("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.R+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.vd(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
r=$.t
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.k
t.i(0,new R.ac("Be The Sylph",!1,[new U.c(p+q+" is unimpressed. "),new U.c("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.c("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
r=$.t
q="The "+r+"s are so stressed after all that shit with the "+$.y+". They are yelling and "+$.R+" at each other over the slightest of insults. The "
p=$.k
t.i(0,new R.ac("Relax the Consorts",!1,[new U.c(q+p+" decides that what they really need is to chill the fuck out. "),new U.c("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.c("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
p="The "+$.y+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.k
p=p+r+" purifies the pools "
q=$.t
t.i(0,new R.bB("Purify the Frogs",!1,[new U.c(p),new U.c("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.c("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ae)
r="The defeat of the "+$.y+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.t
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.k
t.i(0,new R.ac("Purify the Water",!1,[new U.c(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.c("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.c("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.b0+". Huh. Okay then.")],H.a([],o),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
o=$.bW
this.c.i(0,new X.F(s,t,null),o)},
gK:function(){return this.k1},
gP:function(){return this.k4},
gak:function(){return this.r1},
gal:function(){return this.r2},
gam:function(){return this.rx},
gaj:function(){return this.ry},
gah:function(){return this.x1},
gai:function(){return this.x2},
gI:function(){return this.y1}}
D.o9.prototype={
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Robot",H.a([$.ad,$.C,$.aJ,$.a1],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Circuit Board",H.a([$.ad,$.C],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Datastructures for Assholes",H.a([$.ad,$.Q],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.ad,$.Q,$.aS,$.aT],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("3-D Printer",H.a([$.aU,$.ad,$.C],s),null,!1,"3-D Shitpost Maker")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Virus on a USB Stick",H.a([$.ut,$.C],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Wrench",H.a([$.rB,$.C,$.al],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Computer",H.a([$.ad,$.C],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
D:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.v]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.Z,P.U]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.ij,$.l)
q.i(0,$.eQ,$.j)
q.i(0,$.eV,$.j)
q.i(0,$.cv,$.E)
p=$.k
o="The "+p+" learns from their "
n=$.t
o=o+n+"s about the great "
m=$.b0
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.y+" destroyed it. "
o="The "+p+" searches for the "
l=$.am
k=[U.c]
q.i(0,new R.a4("Fix the Machine",!1,[new U.c(n),new U.c(o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "),new U.c("The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory.  ")],H.a([],k),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
m=$.k
l="The "+m+" is approached by a "
p=$.t
p=l+p+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+p+"s are at a loss as to what to do. The "+m+" agrees to help decipher the puzzle. I mean, look at the little guy "
l=$.R
q.i(0,new R.a4("Decipher the Enigma",!1,[new U.c(p+l+"ing, how could they not? "),new U.c("The "+m+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.y+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.c("The "+m+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.am+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+l+"s ")],H.a([],k),R.fe(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
l=$.aQ
this.r.i(0,new X.F(s,q,null),l)
l=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.eV,$.j)
s.i(0,$.ej,$.E)
s.i(0,$.eU,$.l)
s.i(0,$.cO,$.j)
s.i(0,$.cv,$.E)
q=$.k
p="The "+q+" learns that all of the local "
o=$.t
s.i(0,new R.a4("Produce the Goods",!1,[new U.c(p+o+"s have a severe shortage of gears and cogs. It is up to the "+q+" to get the assembly lines up and running again. "),new U.c("The "+q+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+q+" is training the local "+o+"s to operate the manufacturing equipment. There is "+$.R+"ing and chaos everywhere. "),new U.c("The "+q+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+o+"s name a national holiday after the "+q+". ")],H.a([],k),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
q=$.k
o="The "+q+" finds two groups of "
p=$.t
o=o+p+"s screaming and "
n=$.R
o=o+n+"ing at each other. Apparently the first group of "+n+"s are workers at a local "
m=$.am
o=o+m+" factory and want to be paid more? The second group of "+p+"s claim they don't work hard enough for a raise.  "
n="The "+q+" arranges for the worker "+p+"s to meet with the factory manager "+p+"s individually and discuss their complaints. The "+q+" is getting a headache from all the "+n+"ing, but at least progress is being made."
m="The "+q+" is shaking hands for a "+p+" newspaper, posing in front of the now bustling "+m+" factory. The workers are paid a fair wage, and several ways to make the factory work more efficiently has left the managers happy, too. "
p=this.y
s.i(0,new R.a4("Stop the Dispute",!1,[new U.c(o),new U.c(n),new U.c(m)],H.a([],k),R.e0(),!1,!1,new Y.bx("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.w)
p=$.aP
this.r.i(0,new X.F(l,s,null),p)
p=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.ij,$.E)
t.i(0,$.eQ,$.j)
t.i(0,$.eV,$.j)
t.i(0,$.cv,$.E)
s=$.k
r="The "+s+" learns from a mysterious "+$.t+" in a black trenchcoat about a great "
q=$.b0
r=r+q+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
o=$.y
t.i(0,new R.a4("Learn the Secret",!1,[new U.c(r+o+"? "),new U.c("The "+s+" searches for clues about the "+q+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+q+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.c("At last, the "+s+" has found a cave with a terminal to the "+q+" MACHINE. <b>TELL ME ABOUT "+o+".</b>, they type. <b><i>ERROR: TERM '"+o+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+s+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+s+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],k),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
k=$.aQ
this.r.i(0,new X.F(p,t,null),k)},
gI:function(){return this.cx},
gaC:function(){return this.cy},
gaD:function(){return this.db},
gK:function(){return this.dx},
gaK:function(){return this.dy}}
V.oa.prototype={
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Lighter",H.a([$.C,$.aI],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Siberia Poster",H.a([$.Q,$.bq],s),null,!1,"Poster of the Shoguns Birthplace")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Nuclear Winter Poster",H.a([$.Q,$.bq,$.c2],s),null,!1,"Shoguns Dream as a Poster")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Doomsday Device",H.a([$.C,$.aS,$.c2,$.bp,$.br],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Juggalo Poster",H.a([$.Q,$.uz],s),null,!1,"False God Poster")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Fancy Watch",H.a([$.C,$.bl,$.bp],s),null,!1,"Shoguns Watch")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Magnificent Crown",H.a([$.C,$.bl,$.bp],s),null,!1,"The Shoguns Crown")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Bitching Clothes",H.a([$.S,$.f2,$.bp],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Ceramic Pork Hollow",H.a([$.bQ,$.bl],s),"...",!1,"Shoguns Old Porkhollow")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Shit Ton of Guns",H.a([$.C,$.rv,$.b_,$.bp],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Sniper Rifle",H.a([$.C,$.rz,$.b_,$.bp],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("AK-47",H.a([$.C,$.rr,$.b_,$.bp],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("IED",H.a([$.lC,$.aL,$.C,$.bs,$.bp],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Idiots Guide To Being An Asshole",H.a([$.Q,$.bz,$.aT],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Bike Horn",H.a([$.c9,$.C,$.bb,$.bz],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Matches",H.a([$.a2,$.aI],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
D:function(){var t,s,r,q,p,o,n,m
t=[P.v]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.Z,P.U]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cH,$.l)
q.i(0,$.dG,$.j)
q.i(0,$.dM,$.j)
q.i(0,$.eW,$.j)
q.i(0,$.l5,$.j)
q.i(0,$.dI,$.l)
p=$.k
o=[U.c]
q.i(0,new R.a4("Start the Fires",!1,[new U.c("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.c("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.c(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.x(),!1,!1,new Y.cW("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.aQ
this.r.i(0,new X.F(s,q,null),p)
p=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.cH,$.l)
s.i(0,$.dG,$.j)
s.i(0,$.co,$.j)
s.i(0,$.dI,$.l)
q=$.k
n="The "+q+" learns that there is an entire planet of suckers, er, you mean "
m=$.t
s.i(0,new R.a4("All About the Boonies, Baby",!1,[new U.c(n+m+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.c("The "+q+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+m+"s various wonders from around Paradox Space. Marvel at the two headed "+$.am+" underling. Tremble at the fearsome "+$.b0+" "+m+".   "),new U.c(" The "+q+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+m+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.x(),!1,!1,new Y.cW("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
m=$.aQ
this.r.i(0,new X.F(p,s,null),m)
m=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.d8,$.j)
s.i(0,$.bn,$.E)
s.i(0,$.dL,$.j)
s.i(0,$.c7,$.l)
s.i(0,$.dW,$.E)
s.i(0,$.dn,$.E)
q=$.k
p="The "+q+" learns that all of the local "
n=$.t
s.i(0,new R.a4("Revive the Consorts",!1,[new U.c(p+n+"s are dead. This is....pretty cool, actually. "),new U.c("The "+q+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+q+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.R+"ing.  The dead "+n+"s have risen and want to be part of "+q+"'s Necromantic Army.   ")],H.a([],o),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
q=$.aQ
this.r.i(0,new X.F(m,s,null),q)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.cm,$.j)
t.i(0,$.dn,$.E)
t.i(0,$.ei,$.j)
t.i(0,$.l2,$.j)
t.i(0,$.cv,$.l)
t.i(0,$.ek,$.l)
s=$.k
r="The "+s+" finds a crowd of "
p=$.R
r=r+p+"ing "
n=$.t
r=r+n+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+n+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
m="The "+s+" meets with the upper class "+n+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.b0+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+n+"s have been defeated. The high class "+n+"s murmur dignified "+p+"s and give the "+s+" several medals. "
p=this.y
t.i(0,new R.a4("Stop a Rebellion",!1,[new U.c(r),new U.c(m),new U.c(s)],H.a([],o),R.x(),!1,!1,new Y.bx("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.w)
p=$.aQ
this.r.i(0,new X.F(q,t,null),p)},
gI:function(){return this.cx},
gaC:function(){return this.cy},
gaD:function(){return this.db},
gK:function(){return this.dx},
gaK:function(){return this.dy}}
X.F.prototype={
v:function(a){return"Theme: "+H.p(this.a)},
gdc:function(){return this.a},
gcu:function(){return this.b},
sdu:function(a,b){return this.c=b}}
U.oe.prototype={
at:function(){return!1},
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Lockpick",H.a([$.C,$.V,$.at,$.b1,$.a7],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Sneaking Suit",H.a([$.S,$.V,$.at],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Dagger",H.a([$.C,$.V,$.b1,$.aL,$.rj],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
D:function(){var t,s,r,q,p,o,n,m,l
t=[P.v]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Z,P.U])
t.i(0,$.cm,$.j)
t.i(0,$.d7,$.l)
t.i(0,$.cn,$.l)
t.i(0,$.cO,$.l)
r="The "+$.y+" cannot release the frogs since the corrupt "
q=$.t
r=r+q+" Cops have confiscated them. The "
p=$.k
o=[U.c]
t.i(0,new R.bB("Steal the Frogs",!1,[new U.c(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.c("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.c("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ae)
p=$.k
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.y+"'s layer and slated to be returned to the "
r=$.t
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.R+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.db
t.i(0,new R.ac("Escape the Law",!1,[new U.c(q),new U.c(n),new U.c(p)],H.a([],o),R.x(),!1,!1,new Y.bx("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.w)
r=$.t
p="A weeping "+r+" approaches the "
n=$.k
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.y
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.b0+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.R+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.db
t.i(0,new R.ac("Free The Prisoner",!1,[new U.c(q),new U.c(p),new U.c(n)],H.a([],o),R.x(),!1,!1,new Y.bx("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.w)
r=$.y
n="Now that the "+r+" has been defeated, the "
p=$.t
n=n+p+"s have recovered their precious "
q=$.am
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.k
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.R
l=n+l+"worth, the disaffected Heir to the "+$.b0+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.db
t.i(0,new R.ac("Shit, Let's Be a Heist Movie",!1,[new U.c(r),new U.c(l),new U.c(q),new U.c(m)],H.a([],o),R.x(),!1,!1,new Y.bx("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.w)
p=$.bW
this.c.i(0,new X.F(s,t,null),p)},
gK:function(){return this.k1},
gP:function(){return this.k4},
gak:function(){return this.r1},
gal:function(){return this.r2},
gam:function(){return this.rx},
gaj:function(){return this.ry},
gah:function(){return this.x1},
gai:function(){return this.x2}}
N.of.prototype={
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Grandfather Clock",H.a([$.a2,$.ap,$.bl,$.Y],s),null,!1,"Ticking Tower of Time")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Drum",H.a([$.uD,$.Y,$.af],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Dead Doppelganger",H.a([$.aV,$.bo,$.Y,$.bh,$.bg,$.aS],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Music Box",H.a([$.C,$.Y,$.af,$.ap],s),null,!1,"Cube of Noise")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Turn Tables",H.a([$.C,$.Y,$.af,$.a7,$.ay],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Metronome",H.a([$.C,$.Y,$.af],s),null,!1,"Never Ending Ticking Device")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.v]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.Z,P.U]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.u7,$.ae)
q.i(0,$.cv,$.l)
q.i(0,$.cO,$.l)
q.i(0,$.eU,$.j)
p=$.y
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.k
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.r2
l=[U.c]
q.i(0,new R.ac("Destroy 1000 Clocks",!1,[new U.c(o),new U.c(m),new U.c(p)],H.a([],l),R.ew(),!1,!1,new Y.bx("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.j)
n=$.k
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.t+"s, they set out to fix the "
m=$.am
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.y
q.i(0,new R.X("Fix the Clockwork",!1,[new U.c(p),new U.c(o),new U.c(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.ab("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
j=$.aP
this.c.i(0,new X.F(s,q,null),j)
j=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.ih,$.j)
s.i(0,$.dM,$.E)
s.i(0,$.cv,$.j)
q=$.k
p="The "+q+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.t+"s they try to line the beats up to a more harmonious rhythm. "
o="The "+q+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
q="The "+q+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
n=$.y
s.i(0,new R.X("Synchronize the Rhythm",!1,[new U.c(p),new U.c(o),new U.ab(q+n+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+n+". Whatever. ")],H.a([],l),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.aP
this.c.i(0,new X.F(j,s,null),n)
n=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.cd,$.j)
t.i(0,$.be,$.l)
t.i(0,$.cP,$.j)
t.i(0,$.dJ,$.j)
s=$.y
r="The door to the "+s+"'s  lair is barred by a door locked with three identical missing "
q=$.am
r=r+q+" Pieces. A fourth is already inlaid in the door. The "
p=$.k
r=r+p+" prepares for a bullshit item collection quest. "
o="The "+p+" is starting to get frustrated. No matter what they do they can't seem to find any more "+q+" Pieces. A "+$.t+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+p+" any less frustrated."
m="In a flash of insight, the "+p+" realizes that they can just use their Time Instrument to go back before they first visited the "+s+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+q+" Pieces and the door is open. Time to prepare for a boss fight. "
s="The "+p+" is ready to fight the "+s+". "
k="Whew, doomed timeline averted. The "+p+" goes back in time to restore the 3 "+q+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.i(0,new R.X("Walk Another Path",!1,[new U.c(r),new U.c(o),new U.c(m),new U.ab(s,"Um. Is this a doomed timeline? What happens if the "+p+" never returns those "+q+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.ja(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.j)
k=$.y
q="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
p=$.am
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
s=$.k
t.i(0,new R.X("Destroy Timelines",!1,[new U.c(q+s+" prepares for a bullshit item collection quest. "),new U.c("The "+s+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.t+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+s+" any less frustrated."),new U.c("The "+s+" is ready to fucking give up. Fuck those "+p+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+p+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+s+" can now face the "+k+". "),new U.ab("The "+s+" is ready to fight the "+k+". ","Welp. The "+s+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.ew(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.j)
s="With the defeat of the "+$.y+", "
k=$.k
s=s+k+" uncovers historical documents in a ruined consort village. Taking them to the "
p=$.t
s=s+p+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
q=$.b0
t.i(0,new R.ac("Shatter the Timeline",!1,[new U.c(s+q+" Metropolis. The "+p+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+p+"s re-fight the Wars to win back their "+q+" Metropolis."),new U.c("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+p+"s favor. They check back in with the past "+p+" leader to inform them that the timeline has been revised to their advantage."),new U.c("The "+k+" divulges to the "+p+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+p+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+p+"s defeat. Agh!"),new U.c("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+q+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.ew(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
q=$.t
k="There is a babbling brook. A wizened "+q+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
p=$.k
t.i(0,new R.X("Move Forwards, Never Stop",!1,[new U.c(k+p+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.c("Days in the past, but not many, the "+p+" is exploring. They find the babbling brook and the wizened "+q+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+p+" yells that it's not true, that this is the second time he's met the wizened "+q+". The wizened "+q+" simply "+$.R+"s mysteriously.  "),new U.c("Days in the future, but not enough to catch up to the present, the "+p+" is exploring. When they find the babbling brook, the wizened "+q+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+p+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+q+"...even if it isn't the same order. "),new U.ab("Inexorably, the "+p+" is back in the present but also far in the future. The wizened "+q+" has just been slain by the "+$.y+", mere minutes after their first/last conversation. The "+p+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+p+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
l=$.aP
this.c.i(0,new X.F(n,t,null),l)},
gb1:function(){return this.rx},
ga_:function(){return this.ry},
gK:function(){return this.x2},
gP:function(){return this.y1},
gaA:function(){return this.E},
gI:function(){return this.O}}
G.a5.prototype={
v:function(a){var t=this.b
if(t.length!==0)return C.a.gX(t)
return"NULL TRAIT"},
gfK:function(){return this.a},
gfk:function(){return this.b},
gbA:function(){return this.c}}
G.aX.prototype={}
G.ak.prototype={}
G.bI.prototype={}
G.d.prototype={
gkj:function(){return this.e.length},
gbA:function(){var t,s,r,q,p
for(t=this.e,s=t.length,r=0,q=0;p=t.length,q<p;p===s||(0,H.bN)(t),++q)r+=t[q].c
return r},
bd:function(a,b){return C.b.aM(b.gkj()-this.e.length)},
fW:function(a){return C.a.js(this.e,a.gdW(a))},
$isbD:1,
$asbD:function(){return[G.d]},
gH:function(a){return this.d},
ghC:function(){return this.e}}
G.lI.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.a5]}}}
Q.ox.prototype={
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Cardboard Box",H.a([$.Q,$.Y,$.at],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Hole Punch",H.a([$.C,$.Y,$.at],s),null,!1,"Paper Impaler")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Smoke Bombs",H.a([$.bs,$.Y,$.at,$.lC],s),null,!1,"Vape Grenades")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Tribal Mask",H.a([$.bh,$.Y,$.at,$.bg,$.bT],s),null,!1,"Ancient Face")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Opera Mask",H.a([$.aU,$.Y,$.at,$.ap],s),null,!1,"Phantom of the Opera Mask")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Black Hole in a Bottle.",H.a([$.Y,$.a7,$.rn,$.at,$.bf],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.v]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.Z,P.U]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.dK,$.j)
q.i(0,$.ii,$.j)
q.i(0,$.fN,$.j)
q.i(0,$.l0,$.j)
p=$.y
o="A big party is being held to celebrate the defeat of "+p+" and the "
n=$.k
o=o+n+" is invited as the guest of honor. There are promises of god food, including a gigantic cake. At the door a burly "
m=$.t
p=o+m+" stands with a clipboard. He eyes the "+n+" approaching and shakes his head. \u2018You\u2019re not on the list, so beat it.\u2019 The "+n+" tries to explain that they\u2019re the planet\u2019s hero and the one who beat "+p+", making them the guest of honor, but the bouncer just laughs. \u2018If you\u2019re supposed to be the hero, why haven\u2019t I heard of you already?\u2019"
o="The "+n+" asks other guests to vouch for them, but all of them are having trouble recognizing the "+n+". There\u2019s just something about the "+n+" that makes them so forgettable. They go home and bring back photos of themself with other "+n+"s as proof that they\u2019re also a hero, but the bouncer dismisses the photos as very realistic but clearly edited. What a pain."
n="The "+n+" gives up trying to convince the "+m+" bouncer of their existence. If they\u2019re not going to be recognized, they might as well take it all the way. They use their void powers to become completely unnoticeable and walk past the bouncer while making a number of obscene gestures. The "+m+" hosting the party approaches the "+n+" as soon they turn off their powers to join the party. \u2018There you are! You know it\u2019s very rude for the guest of honor to be so late. I\u2019m really disappointed in you.\u2019 Bluh."
m=this.r2
l=[U.c]
q.i(0,new R.ac("Be Forgettable",!1,[new U.c(p),new U.c(o),new U.c(n)],H.a([],l),R.x(),!1,!1,new Y.bx("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.w)
m=$.k
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.y
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.i(0,new R.X("Go to Nowhere",!1,[new U.c(n),new U.c(o),new U.c(p),new U.ab(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
i=$.aP
this.c.i(0,new X.F(s,q,null),i)
i=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.dK,$.l)
s.i(0,$.ii,$.l)
s.i(0,$.fN,$.l)
s.i(0,$.cm,$.j)
q=$.k
p="Even with the victory of the "+q+" over the villainous "
o=$.y
p=p+o+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.t+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
n=$.am
s.i(0,new R.ac("Reveal the Tomes",!1,[new U.c(p+n+" will provide insight."),new U.c("Hours of study yield little progress until the "+q+" has a breakthrough regarding symbols on the "+n+". It seems that through analysis of the symbols on the "+n+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.c("The "+q+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+o+"'s library. After countless false starts and empty tombs, not only does the "+q+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.c("The "+q+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+n+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.fe(),!1,!1,new Y.T("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
n=$.k
s.i(0,new R.X("[REDACTED]",!1,[new U.c("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+n+" help? "),new U.c("The "+n+" [REDACTED]s and it actually works! Everyone "+$.R+" in surprise. This might just be crazy enough to work."),new U.c("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.ab("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.y+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.t+"s.")],H.a([],l),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.aP
this.c.i(0,new X.F(i,s,null),n)
n=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.dK,$.j)
t.i(0,$.ii,$.j)
t.i(0,$.fN,$.j)
s=$.k
r="Suddenly the "+s+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
q="The "+s+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
p="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+s+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+s+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
o="Faced with a huge underling that is probably too high a level to fight, the "+s+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+s+" attempts to sneak up on the "+$.y+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+s+" has defeated the major challenge of their land."
t.i(0,new R.X("Walk of Faith",!1,[new U.c(r),new U.c(q),new U.c(p),new U.c(o),new U.ab(m,"The "+s+" is going to have to try again.",k)],H.a([],l),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
l=$.aP
this.c.i(0,new X.F(n,t,null),l)},
ga_:function(){return this.rx},
gK:function(){return this.x1},
gP:function(){return this.x2},
gaA:function(){return this.C},
gI:function(){return this.G}}
E.oy.prototype={
at:function(){return!0},
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Yardstick",H.a([$.du,$.V,$.rw,$.a7],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("SBURBSim Hacking Guide",H.a([$.aT,$.V,$.lH,$.Q],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Body Pillow of JR",H.a([$.S,$.V,$.iM,$.ux,$.bj],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Nanobots",H.a([$.uI,$.V,$.rc],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
D:function(){var t,s,r,q,p,o,n,m
t=[P.v]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Z,P.U])
t.i(0,$.d9,$.j)
t.i(0,$.el,$.j)
t.i(0,$.eS,$.j)
t.i(0,$.dJ,$.j)
t.i(0,$.eR,$.j)
t.i(0,$.kZ,$.j)
t.i(0,$.fN,$.l)
r=$.k
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.t
o=[U.c]
t.i(0,new R.a4("A Complete Waste Of Time",!1,[new U.c(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.c("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.c("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.c("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.vd(),!1,!1,new Y.ey("Rewards/no_reward.png",null),1,null,null),$.w)
r=$.y
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.k
n=q+" tries to manually separate the turtles by catching them with a net and "+$.cr+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.R
t.i(0,new R.X("Stop the Turtles from [Redacted]",!1,[new U.c(p),new U.c(n),new U.c(m),new U.ab(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.Dp(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
q=$.k
t.i(0,new R.a4("Be Spooked By a Wolf",!1,[new U.c("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.c("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.c("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.x(),!1,!1,new Y.ey("Rewards/no_reward.png",null),1,null,null),$.w)
q="A wizened "+$.t+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.k
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.y
t.i(0,new R.X("Be The Illegitimate Player",!1,[new U.c(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.c("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.c("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.ae)
m=$.k
t.i(0,new R.X("Wear the Merch, Be the Rider",!1,[new U.c("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+$.y+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.x(),!1,!1,new Y.a6("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.ae)
m="A wizened "+$.t+" tells the "
r=$.k
t.i(0,new R.ac("Die Ironically, In The Proximity Of Some Horses",!1,[new U.c(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.c("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.x(),!1,!1,new Y.cW("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.E)
r="A "+$.t+" that is also a SHOGUN minion tells the "
m=$.k
t.i(0,new R.ac("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.c(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.c("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.Ds(),!1,!1,new Y.T("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ae)
m=$.k
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.db
t.i(0,new R.ac("Run The Simulations",!1,[new U.c(r),new U.c(q),new U.c(m)],H.a([],o),R.x(),!1,!1,new Y.bx("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.E)
n=$.y
m="The "+n+" explains um. What? Where did the "
q=$.k
t.i(0,new R.bB("Waste the Frogs",!1,[new U.c(m+q+" go?"),new U.c("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ae)
o=$.aP
this.c.i(0,new X.F(s,t,null),o)},
gK:function(){return this.k1},
gP:function(){return this.k4},
gak:function(){return this.r1},
gal:function(){return this.r2},
gam:function(){return this.rx},
gaj:function(){return this.ry},
gah:function(){return this.x1},
gai:function(){return this.x2},
gI:function(){return this.y1}}
M.oG.prototype={
at:function(){return!1},
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Cauldron",H.a([$.uC,$.V,$.aa],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Flying Broom",H.a([$.iJ,$.du,$.V,$.a2,$.aa],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Warped Mirror",H.a([$.rs,$.V,$.aa,$.at,$.a7],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
D:function(){var t,s,r,q,p,o,n,m
t=[P.v]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Z,P.U])
t.i(0,$.c7,$.l)
t.i(0,$.fP,$.l)
t.i(0,$.d8,$.l)
t.i(0,$.cO,$.l)
t.i(0,$.cQ,$.l)
t.i(0,$.r0,$.l)
r=$.y
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.t
q=q+p+" consorts. It's up to the "
o=$.k
n=[U.c]
t.i(0,new R.bB("Brew the Frogs",!1,[new U.c(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.c("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.c("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.c0(),!1,!1,new Y.bE("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ae)
o="Even with the defeat of the "+$.y+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
r=$.t
o=o+r+" settlement, and crops refuse to thrive at "
p=$.b0
o=o+p+" Ranch. The "+r+"s seem to have accepted everything as just how things are, but the "
q=$.k
o=o+q+" isn't going to give up until they show the status quo just how 'quo' it isn't!"
m="Alright, it turns out that through a mixture of Alchemy, game powers and pure elbow grease, the "+q+" has managed to make a river flow backwards.   Now instead of flooding, the valley is draining itself.  Progress!"
r="The "+q+" doesn't feel like KILLING the giant underlings rampaging in the "+r+" settlement. What's the fun in that? They try a variety of techniques until the underlings are as calm and friendly as "+r+"s themselves.   Now they are productive members of society! "
p="The "+q+" twists how plants and soil and growth works until the crops at "+p+" Ranch are finally thriving. With that, they have finally kicked the former status quo to the curb!  "
q=this.db
t.i(0,new R.ac("Twist All The Things",!1,[new U.c(o),new U.c(m),new U.c(r),new U.c(p)],H.a([],n),R.x(),!1,!1,new Y.bx("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.w)
q="A Mysterious "+$.t+" approaches the "
p=$.k
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.b0
q=q+r+" was discovered amongst the "+$.y+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.db
t.i(0,new R.ac("Brew The Potion",!1,[new U.c(q),new U.c(m),new U.c(p)],H.a([],n),R.x(),!1,!1,new Y.bx("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.w)
r=$.t
p="A young "+r+" approaches the "
m=$.k
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.b0
t.i(0,new R.ac("Train the Apprentice",!1,[new U.c(p+q+"mancer and agrees to train them. "),new U.c("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.am+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.c("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.R+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.x(),!1,!1,new Y.T(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.bW
this.c.i(0,new X.F(s,t,null),n)},
gK:function(){return this.k1},
gP:function(){return this.k4},
gak:function(){return this.r1},
gal:function(){return this.r2},
gam:function(){return this.rx},
gaj:function(){return this.ry},
gah:function(){return this.x1},
gai:function(){return this.x2},
gI:function(){return this.y1}}
F.oH.prototype={
F:function(){var t,s,r,q
t=Q.G(null,null,A.a9)
s=[G.a5]
r=A.i("Make a World Book",H.a([$.Q,$.ap,$.aT],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.M(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Quill Pen",H.a([$.bj,$.S,$.lE],s),null,!1,"Dead Bird Scribing Tool")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Book On Writing",H.a([$.aT,$.Q,$.a1],s),null,!1,"How to do words for unsmarts")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("FLARP Manual",H.a([$.aT,$.Q,$.a1],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Script",H.a([$.aT,$.Q],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Fancy Pen",H.a([$.C,$.a1,$.lE,$.ap],s),null,!1,"Ink Bleeding Plastic Finger")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Spiral Bound Notebook",H.a([$.aT,$.Q,$.C],s),null,!1,"Spinney Spine Scribing Station")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Half Written Novel",H.a([$.aT,$.Q],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
D:function(){var t,s,r,q,p,o,n,m,l
t=[P.v]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.Z,P.U]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.dK,$.j)
q.i(0,$.cw,$.j)
q.i(0,$.bn,$.l)
q.i(0,$.be,$.l)
q.i(0,$.fM,$.l)
p=$.k
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.t+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.c]
q.i(0,new R.a4("Stop the Vandals",!1,[new U.c(o),new U.c(n),new U.c(p)],H.a([],l),R.x(),!1,!1,new Y.bx("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.w)
m=$.aQ
this.r.i(0,new X.F(s,q,null),m)
m=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.dI,$.l)
s.i(0,$.cH,$.l)
s.i(0,$.co,$.l)
s.i(0,$.bn,$.l)
q=$.t
p="An Excited "+q+" rushes up to the "
o=$.k
s.i(0,new R.a4("Read the Fan Fiction",!1,[new U.c(p+o+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+o+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.R+"ing so much? "),new U.c("Okay.  The Excited "+q+" has a new version for the "+o+" to review. This time they at least aren't obviously "+q+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.c(" The "+o+" reads the final version of the Excited "+q+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+o+" a gift as thanks! ")],H.a([],l),R.x(),!1,!1,new Y.cW("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
o=$.aQ
this.r.i(0,new X.F(m,s,null),o)
o=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.cH,$.l)
t.i(0,$.dG,$.j)
t.i(0,$.co,$.j)
t.i(0,$.dI,$.l)
t.i(0,$.eS,$.j)
s=$.k
r="The "+s+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
q=$.t
t.i(0,new R.a4("Be the DM",!1,[new U.c(r+q+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+s+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+q+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+q+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.c("The "+s+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+s+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+q+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.c(" The "+s+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+q+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+q+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.c("The "+s+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+q+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.x(),!1,!1,new Y.cW("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
l=$.aQ
this.r.i(0,new X.F(o,t,null),l)},
gI:function(){return this.cx},
gaC:function(){return this.cy},
gaD:function(){return this.db},
gK:function(){return this.dx},
gaK:function(){return this.dy}}
B.oI.prototype={}
B.oK.prototype={
$asec:function(){return[T.hP]},
$asda:function(){return[T.hP,P.dC]}}
A.cN.prototype={
j5:function(a,b,c){return c},
fa:function(a,b,c){return c},
k7:function(a,b,c){return c},
jv:function(a,b,c){return c},
v:function(a){var t=H.p(new H.dx(H.hN(this),null))+": "
return t+P.fX(this.f,"{","}")},
gI:function(){return this.f},
sdu:function(a,b){return this.a=b}}
A.fC.prototype={
c8:function(){var t,s,r
t=$.$get$cg()
s=P.a3(null,null,null,D.bi)
r=new A.fC(this.Q,null,null,!1,!1,!1,s,0,0,!0,!1)
s.a4(0,t)
r.e=!0
return r},
fa:function(a,b,c){var t,s
if(b===$.cf)return c
if(b.d)if(b===$.an||b===$.b4||b===$.u){t=this.Q
s=J.hM(c)
if(J.dk(s.aU(c,t.a.gbA()),1))return 1
return s.aU(c,t.a.gbA())}else return J.eI(c,this.Q.a.gbA())
return c}}
A.cl.prototype={
gkn:function(){return this.b},
ga3:function(a){if(this.e)this.iN()
return this.x},
v:function(a){return"rgb("+H.p(this.b)+", "+H.p(this.c)+", "+H.p(this.d)+", "+H.p(this.a)+")"},
ep:function(a){var t,s,r,q
if(a){t=this.b
if(typeof t!=="number")return t.bE()
s=this.c
if(typeof s!=="number")return s.bE()
r=this.d
if(typeof r!=="number")return r.bE()
q=this.a
if(typeof q!=="number")return H.aK(q)
return(t<<24|s<<16|r<<8|q)>>>0}t=this.b
if(typeof t!=="number")return t.bE()
s=this.c
if(typeof s!=="number")return s.bE()
r=this.d
if(typeof r!=="number")return H.aK(r)
return(t<<16|s<<8|r)>>>0},
kH:function(a){var t=C.b.bN(this.ep(!1),16)
return"#"+C.d.ea(t,6,"0").toUpperCase()},
fV:function(){return this.kH(!1)},
iN:function(){var t,s,r,q,p,o,n,m,l
this.e=!1
t=this.b
if(typeof t!=="number")return t.ae()
t/=255
s=this.c
if(typeof s!=="number")return s.ae()
s/=255
r=this.d
if(typeof r!=="number")return r.ae()
r/=255
q=Math.max(Math.max(t,s),r)
p=Math.min(Math.min(t,s),r)
o=q-p
n=q===0?0:o/q
if(q===p)m=0
else{if(q===t){t=s<r?6:0
m=(s-r)/o+t}else m=q===s?(r-t)/o+2:(t-s)/o+4
m/=6}l=H.a([m,n,q],[P.U])
this.f=l[0]
this.r=l[1]
this.x=l[2]},
T:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.cl){t=this.b
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
gab:function(a){return this.ep(!0)},
ao:function(a,b){var t,s,r,q,p,o,n,m
t=J.ar(b)
if(!!t.$iscl){t=this.b
s=b.b
if(typeof t!=="number")return t.ao()
if(typeof s!=="number")return H.aK(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.ao()
if(typeof q!=="number")return H.aK(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.ao()
if(typeof o!=="number")return H.aK(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.ao()
if(typeof m!=="number")return H.aK(m)
return A.ef(t+s,r+q,p+o,n+m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.ae()
s=this.c
if(typeof s!=="number")return s.ae()
r=this.d
if(typeof r!=="number")return r.ae()
q=this.a
if(typeof q!=="number")return q.ae()
return A.kh(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.ao()
s=this.c
if(typeof s!=="number")return s.ao()
r=this.d
if(typeof r!=="number")return r.ao()
return A.ef(t+b,s+b,r+b,this.a)}throw H.m("Cannot add ["+H.p(t.gac(b))+" "+H.p(b)+"] to a Colour. Only Colour, double and int are valid.")},
aP:function(a,b){var t,s,r,q,p,o,n,m
t=J.ar(b)
if(!!t.$iscl){t=this.b
s=b.b
if(typeof t!=="number")return t.aP()
if(typeof s!=="number")return H.aK(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.aP()
if(typeof q!=="number")return H.aK(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.aP()
if(typeof o!=="number")return H.aK(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.aP()
if(typeof m!=="number")return H.aK(m)
return A.ef(t-s,r-q,p-o,n-m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.ae()
s=this.c
if(typeof s!=="number")return s.ae()
r=this.d
if(typeof r!=="number")return r.ae()
q=this.a
if(typeof q!=="number")return q.ae()
return A.kh(t/255-b,s/255-b,r/255-b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.aP()
s=this.c
if(typeof s!=="number")return s.aP()
r=this.d
if(typeof r!=="number")return r.aP()
return A.ef(t-b,s-b,r-b,this.a)}throw H.m("Cannot subtract ["+H.p(t.gac(b))+" "+H.p(b)+"] from a Colour. Only Colour, double and int are valid.")},
aU:function(a,b){var t,s,r,q,p,o,n,m
t=J.ar(b)
if(!!t.$iscl){t=this.b
if(typeof t!=="number")return t.ae()
s=b.b
if(typeof s!=="number")return s.ae()
r=this.c
if(typeof r!=="number")return r.ae()
q=b.c
if(typeof q!=="number")return q.ae()
p=this.d
if(typeof p!=="number")return p.ae()
o=b.d
if(typeof o!=="number")return o.ae()
n=this.a
if(typeof n!=="number")return n.ae()
m=b.a
if(typeof m!=="number")return m.ae()
return A.kh(t/255*(s/255),r/255*(q/255),p/255*(o/255),n/255*(m/255))}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.ae()
s=this.c
if(typeof s!=="number")return s.ae()
r=this.d
if(typeof r!=="number")return r.ae()
q=this.a
if(typeof q!=="number")return q.ae()
return A.kh(t/255*b,s/255*b,r/255*b,q/255)}throw H.m("Cannot multiply a Colour by ["+H.p(t.gac(b))+" "+H.p(b)+"]. Only Colour, double and int are valid.")},
m:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.m("Colour index out of range: "+H.p(b))},
i:function(a,b,c){var t,s
t=J.dj(b)
if(t.a7(b,0)||t.bC(b,3))throw H.m("Colour index out of range: "+H.p(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.T(b,0)){this.b=C.b.a1(c,0,255)
this.e=!0
this.y=!0}else if(t.T(b,1)){this.c=C.b.a1(c,0,255)
this.e=!0
this.y=!0}else if(t.T(b,2)){this.d=C.b.a1(c,0,255)
this.e=!0
this.y=!0}else this.a=C.b.a1(c,0,255)
else if(t.T(b,0)){this.b=C.b.a1(J.jK(J.eI(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.T(b,1)){this.c=C.b.a1(J.jK(J.eI(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.hM(c)
if(t.T(b,2)){this.d=C.b.a1(J.jK(s.aU(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.b.a1(J.jK(s.aU(c,255)),0,255)}},
hP:function(a,b,c,d){this.b=C.e.a1(C.e.a1(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.e.a1(C.e.a1(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.e.a1(C.e.a1(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.e.a1(J.qC(d,0,255),0,255)}}
A.qc.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.v]}}}
Z.cI.prototype={
v:function(a){return this.b},
hQ:function(a,b,c,d){var t
if(this.a==null)this.a=H.a([],[L.cG])
t=this.c
if(typeof t!=="number")return H.aK(t)
this.x=50*t
if(t>=3)this.x=1000*t-2},
gH:function(a){return this.b}}
Z.li.prototype={}
Z.a_.prototype={
v:function(a){var t,s
t=this.c
if(t&&this.b<2)s=" heals"
else if(t&&this.b>=2)s=" damages"
else{t=!t
if(t&&this.b<2)s=" buffs"
else s=t&&this.b>=2?" debuffs":""}t=this.b
if(t===0)s+=" self"
else if(t===1)s+=" allies"
else if(t===2)s+=" an enemy"
else if(t===3)s+=" all enemies"
return s+" based on how STAT the casters are compared to their enemy"}}
V.qs.prototype={
$1:function(a){var t,s,r,q
t=this.a
s="#"+H.bM(t,P.bU("\\.|\\/",!0,!1),"_")
r=document
if(r.querySelector(s)==null){q='<img id="'+H.bM(t,P.bU("\\.|\\/",!0,!1),"_")+'" src = "images/'+t+'" class="loadedimg">'
J.hO(r.querySelector("#loading_image_staging"),"beforeend",q,C.k,null)}$.qi=$.qi+1
V.hK(this.b)},
$S:function(){return{func:1,args:[W.W]}}}
V.qt.prototype={
$1:function(a){var t="Error loading image: "+H.p(this.a.src)+" "+H.p(a)
J.hO(document.querySelector("#debug"),"beforeend","<br>"+t,C.k,null)},
$S:function(){return{func:1,args:[W.W]}}}
F.f6.prototype={
v:function(a){return this.b}}
F.f7.prototype={
c5:function(a,b){return"("+this.b+")["+H.p(C.a.gby(a.b.split(".")))+"]: "+H.p(b)},
dZ:function(a,b){F.h2(C.w).$1(this.c5(C.w,b))},
gH:function(a){return this.b}}
O.qv.prototype={
$1:function(a){return H.p(a.cJ(1))+" = "+H.p(a.cJ(2))+C.d.aU("../",this.a)},
$S:function(){return{func:1,args:[P.f8]}}}
O.qw.prototype={
$1:function(a){return O.FJ()},
$S:function(){return{func:1,args:[W.W]}}}
R.fR.prototype={}
A.hi.prototype={
m:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.as(b)?t.m(0,b):$.$get$rN()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.as(b)?t.m(0,b):$.$get$rN()}throw H.m(P.fx(b,"'name' should be a String name or int id only",null))},
gR:function(a){var t=this.a
t=t.gaF(t)
return new H.iU(null,J.bP(t.a),t.b,[H.M(t,0),H.M(t,1)])},
gk8:function(){var t=this.a
return new P.jx(t,[H.M(t,0)])},
j:function(a,b,c,d){var t,s
t=this.a
if(t.as(b))this.aE(0,b)
s=this.iB()
if(typeof s!=="number")return s.bO()
if(s>=256)throw H.m(P.fx(s,"Palette colour ids must be in the range 0-255",null))
t.i(0,b,c)
this.b.i(0,s,c)
this.c.i(0,b,s)
this.d.i(0,s,b)},
aE:function(a,b){var t,s,r
t=this.a
if(!t.as(b))return
s=this.c
r=s.m(0,b)
t.aE(0,b)
this.b.aE(0,r)
s.aE(0,b)
this.d.aE(0,r)},
iB:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.as(s))return s;++s}}}
A.j2.prototype={
$asD:function(){return[A.cl]},
$isD:1}
Q.b6.prototype={
sk6:function(a){this.ax=a
if(a!=null)this.bP()},
cp:function(){return new E.j9(this,P.cK(D.bi,P.U),H.a([],[A.cN]))},
bP:function(){var t,s
t=this.ax
if(t!=null){s=this.c
s=s==null||s.d==null||s.e==null}else s=!0
if(s)return
if(J.N(J.cE(t),this.c.d.dy))this.ax=this.c.d
else if(J.N(J.cE(this.ax),this.c.e.dy))this.ax=this.c.e},
cG:function(a){var t,s
t=this.r1?"Doomed ":""
s=this.bp
if(s>3)t+="Severely Grim Dark "
else if(s>1)t+="Mildly Grim Dark "
if(this.b3)t+="God Tier "
else if(this.bo)t+="Dream "
if(this.bK===4)t+="Wasted "
t=t+H.p(this.Y)+" of "+H.p(this.W)
return t},
ha:function(){var t,s,r,q,p,o,n,m,l
if(T.fH())return"<span>"
t="<span class = 'tooltip'><span class='tooltiptext'><table>"+("<tr><td class = 'toolTipSection'>"+H.p(this.aT)+"<hr>")+("Class: "+H.p(J.cE(this.Y))+"<Br>")+("Aspect: "+H.p(J.cE(this.W))+"<Br>")
s=this.aB
t+="Land: "+H.p(s!=null?s.dy:"DESTROYED.")+"<Br>"
s=this.aB
t=t+("Denizen: "+(s!=null?s.fy.c:"NONE")+"<Br>")+("LandLevel: "+this.cv+"<Br>")+("Gnosis: "+this.bK+"<Br>")
s=this.O
if(s!=null)t+="Sprite: "+s.d
t=t+("<br><Br>Prophecy Status: "+this.b.b)+("<br><br>Flipping out over: "+H.p(this.b2))
r=D.Ee()
t+="</td><td class = 'toolTipSection'>Stats<hr>"
for(s=J.bP(r.a),q=new H.eC(s,r.b,[H.M(r,0)]);q.A();){p=s.gJ()
o=H.p(p)+": "
n=this.a$.aI(p)
t+=o+C.e.aM(n)+"<br>"}t=t+"</td><td class = 'toolTipSection' rowspan='2'>Sylladex<hr>"+(this.a.gfo()+", Rank: "+H.p(this.a.gbA())+"<br>")
for(s=this.y2.a,s=new J.fy(s,s.length,0,null,[H.M(s,0)]);s.A();)t+=s.d.gfo()+"<br>"
t+="</td><td class = 'toolTipSection' rowspan='2'>Buffs<hr>"
for(s=this.a$.b,q=s.length,m=0;m<s.length;s.length===q||(0,H.bN)(s),++m)t+=s[m].v(0)+"<br>"
t+="</td></tr><tr><td class = 'toolTipSection'>Fraymotifs<hr>"
for(s=this.fy,q=s.length,m=0;m<s.length;s.length===q||(0,H.bN)(s),++m)t+=H.p(J.cE(s[m]))+"<br>"
t+="</td><td class = 'toolTipSection'>Relationships<hr>"
for(s=this.id,q=s.length,m=0;m<s.length;s.length===q||(0,H.bN)(s),++m){l=s[m]
t+=" "+l.fc()+"("+C.e.aM(l.b)+") "+H.p(C.E.cG(l.c))+"<br>"}return t+"</td></tr></table></span>"},
j1:function(){var t,s,r,q,p,o
if(this.fy.length!==0||!this.aa)return
t=10-C.a.bq($.$get$eG(),this.Z)
s=H.a([],[Z.cI])
r=Z.aG("Telekinesis",1,null,"")
r.r.push(new Z.a_($.u,2,!0,0,1,2,3,""))
r.e=" Large objects begin pelting the ENEMY. "
s.push(r)
r=Z.aG("Pyrokinesis",1,null,"")
r.r.push(new Z.a_($.u,2,!0,0,1,2,3,""))
r.e=" Who knew shaving cream was so flammable? "
s.push(r)
r=Z.aG("Aquakinesis",1,null,"")
r.r.push(new Z.a_($.u,2,!0,0,1,2,3,""))
r.e=" A deluge begins damaging the ENEMY. "
s.push(r)
r=Z.aG("Electrokinesis",1,null,"")
r.r.push(new Z.a_($.u,2,!0,0,1,2,3,""))
r.e=" An electric pulse begins damaging the ENEMY. "
s.push(r)
r=Z.aG("Terakinesis",1,null,"")
r.r.push(new Z.a_($.u,2,!0,0,1,2,3,""))
r.e=" The very ground begins damaging the ENEMY. "
s.push(r)
r=Z.aG("Vitaekinesis",1,null,"")
r.r.push(new Z.a_($.u,2,!0,0,1,2,3,""))
r.e=" The ENEMY's own body is turned against them as they begin punching their own face. "
s.push(r)
r=Z.aG("Fungikinesis",1,null,"")
r.r.push(new Z.a_($.u,2,!0,0,1,2,3,""))
r.e=" A confusing array of mushrooms begins damaging the ENEMY. "
s.push(r)
r=Z.aG("Mind Control",1,null,"")
q=r.r
q.push(new Z.a_($.bu,3,!0,0,1,2,3,""))
q.push(new Z.a_($.bu,3,!1,0,1,2,3,""))
r.e=" All enemies start damaging themselves. It's kind of embarassing how easy this is.  "
s.push(r)
r=Z.aG("Optic Blast",1,null,"")
r.r.push(new Z.a_($.u,2,!0,0,1,2,3,""))
r.e=" Appropriately colored eye beams pierce the ENEMY. "
s.push(r)
r=Z.aG("Ghost Communing",1,null,"")
q=r.r
q.push(new Z.a_($.aZ,3,!0,0,1,2,3,""))
q.push(new Z.a_($.aZ,3,!1,0,1,2,3,""))
r.e=" The souls of the dead start hassling all enemies. "
s.push(r)
r=Z.aG("Animal Communing",1,null,"")
q=r.r
q.push(new Z.a_($.aZ,3,!0,0,1,2,3,""))
q.push(new Z.a_($.aZ,3,!1,0,1,2,3,""))
r.e=" Local animal equivalents start hassling all enemies. "
s.push(r)
for(p=0;p<s.length;++p)if(this.c.u.a.B()*40<t){q=this.fy
if(p>=s.length)return H.B(s,p)
q.push(s[p])}if(J.N(this.Z,"#631db4")){r=Z.aG("Chucklevoodoos",1,null,"")
q=r.r
q.push(new Z.a_($.aZ,3,!1,0,1,2,3,""))
q.push(new Z.a_($.aZ,3,!0,0,1,2,3,""))
r.e=" Oh god oh no no no no no no no no. The enemies are no longer doing okay, psychologically speaking. "
this.fy.push(r)}else if(J.N(this.Z,"#658200")){r=Z.aG("Limeade Refreshment",1,null,"")
q=r.r
q.push(new Z.a_($.aZ,1,!1,0,1,2,3,""))
q.push(new Z.a_($.aZ,1,!0,0,1,2,3,""))
r.e=" All allies just settle their shit for a little while. Cool it. "
this.fy.push(r)}else if(J.N(this.Z,"#ffc3df")){r=Z.aG("'<font color='pink'>"+H.p(this.aT)+" and the Power of Looove~~~~~<3<3<3</font>'",1,null,"")
q=r.r
q.push(new Z.a_($.cb,3,!1,0,1,2,3,""))
q.push(new Z.a_($.cb,3,!0,0,1,2,3,""))
q=this.ha()+this.W.jy()+this.cG(0)+" ("
o=$.b4
o=this.a$.aI(o)
q=q+C.e.aM(o)+"hp, "
o=$.u
o=this.a$.aI(o)
r.e=" You are pretty sure this is not a real type of Troll Psionic.  It heals everybody in a bullshit parade of sparkles, and heart effects despite your disbelief. Everybody is also SUPER MEGA ULTRA IN LOVE with each other now, but ESPECIALLY in love with "+(q+C.e.aM(o)+" power)</font></span>")+". "
this.fy.push(r)}},
aR:function(a){var t,s
t=Q.v3(null,null,null,null,null,null)
this.hE(t)
t.x1=this.x1
t.E=this.E
t.M=this.M
s=this.O
if(s!=null)t.O=s.aR(0)
t.u=this.u
t.aS=!0
s=this.ax
t.ax=s
if(s!=null)t.bP()
t.b2=this.b2
t.av=this.av
t.bS=this.bS
t.dx=this.dx
t.bT=this.bT
t.bU=!1
t.bV=!1
t.bW=this.bW
t.bX=!1
t.bY=this.bY
t.Y=this.Y
t.d0=this.d0
t.d1=this.d1
t.d2=!1
t.ca=this.ca
t.d3=this.d3
t.d4=this.d4
t.W=this.W
t.aB=this.aB
t.ay=this.ay
t.az=this.az
t.aT=this.aT
t.bJ=this.bJ
s=this.ax
t.ax=s
if(s!=null)t.bP()
t.e_=!1
t.bZ=this.bZ
t.cb=this.cb
t.b3=this.b3
t.cc=this.cc
t.bm=this.bm
t.aJ=this.aJ
t.cd=!0
t.aa=this.aa
t.Z=this.Z
t.bw=this.bw
t.bn=this.bn
t.c_=this.c_
t.b4=this.b4
t.ce=this.ce
t.e0=!0
t.bo=this.bo
t.d5=!1
t.d6=!1
t.d7=this.d7
t.bK=this.bK
t.bp=this.bp
t.e1=!1
t.cv=this.cv
t.e2=!1
t.e3=!1
t.e4=!1
t.c=this.c
return t},
ji:function(){var t,s
if(this.c.dg()==="Human"){this.aJ=this.c.u.w($.$get$to())
return}if(this.c.dg()!=="Troll")t=this.c.dg()==="Mixed"&&this.c.u.a.B()>0.5
else t=!0
if(t){this.aa=!0
this.aJ="#000000"
if(!J.N(this.W,$.qJ))this.Z=this.c.u.w($.$get$eG())
this.j1()
t=J.N(this.Z,"#610061")||J.N(this.Z,"#99004d")||J.N(this.Z,"#631db4")
s=this.c
if(t){t=s.u.w($.rR)
this.c_=t
J.fw(t,this.c)}else{t=s.u.w($.rQ)
this.c_=t
J.fw(t,this.c)}t=this.c_
this.bJ=t
J.fw(t,this.c)}else this.aJ=this.c.u.w($.$get$to())},
jO:function(){var t,s,r,q
if(this.aa&&J.N(this.Z,"#99004d"))for(t=0;s=this.id,t<s.length;++t){r=s[t]
if(this.aa)if(J.N(this.Z,"#99004d"))if(r.gen(r).gkU())r.gen(r).gkR()}s=this.bp
if(s>1)for(q=0;s=this.id,q<s.length;++q){r=s[q]
r.b=0
s=r.r
r.d=s
r.f=s}},
v:function(a){return H.bM(H.p(this.Y)+H.p(this.W),P.bU("'",!0,!0),"")},
jL:function(a){this.fB()
this.fA()
this.a=this.c.u.w($.$get$aq()).c8()
this.fz()},
fz:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t=this.y2.a;(t&&C.a).sp(t,0)
this.y2.h(0,this.c.u.w(this.ay.a.y))
this.y2.h(0,this.c.u.w(this.az.a.y))
s=new H.q(0,null,null,null,null,null,0,[X.F,P.U])
r=this.c.u.w(this.Y.gbM().gau())
J.jN(r,$.Ei)
q=this.c.u.w(this.W.gbM().gau())
J.jN(q,$.Eh)
p=this.c.u.w(this.ay.a.r.gau())
J.jN(p,$.vx)
o=this.c.u.w(this.az.a.r.gau())
J.jN(o,$.vx)
s.i(0,r,this.Y.gbM().m(0,r))
s.i(0,q,this.W.gbM().m(0,q))
s.i(0,p,this.ay.a.r.m(0,p))
s.i(0,o,this.az.a.r.m(0,o))
this.aB=M.D9(s,this.c,this.W,this.Y)
if(this.u){t=this.c.u
n=this.Y
m=this.W
l=this.ay
k=this.az
j=t.a.B()
i=j>0.3
if(i){h=l.a.gaC()
g=J.qG(J.cE(n))
if(0>=g.length)return H.B(g,0)
f=Y.qg(t,h,g[0])}else if(j>0.6){h=k.a.gaC()
g=J.qG(J.cE(n))
if(0>=g.length)return H.B(g,0)
f=Y.qg(t,h,g[0])}else f=t.w(n.gP())
if(f==null||J.N(f,""))f=t.w(n.gP())
if(i){n=l.a.gaD()
l=J.qH(J.cE(m))
if(0>=l.length)return H.B(l,0)
e=Y.qg(t,n,l[0])}else if(j>0.6){n=k.a.gaD()
l=J.qH(J.cE(m))
if(0>=l.length)return H.B(l,0)
e=Y.qg(t,n,l[0])}else e=t.w(m.gP())
if(e==null||J.N(e,""))e=t.w(m.gP())
if(f==null)f="mystery"
if(e==null)e="Mystery"
this.aT=H.p(f)+H.p(e)}this.bZ=Y.Ff(this)
if(this.aa){if(this.b4==null){d=D.ve(this.c.u)
d.k_(this)
this.b4=d}t=$.aZ
this.a$.cl(t,-10)}else if(this.b4==null){d=D.ve(this.c.u)
d.jZ(this)
this.b4=d}this.C=this.C+this.c.u.a.B()*-33
if(J.N(this.W,$.jT))this.C+=33
if(J.N(this.W,$.qK))this.b=C.N
this.a.fF(this)},
fA:function(){var t,s
t=this.c
s=new F.jh(null,C.c,t,"sprite","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],[X.cZ]),!1,H.a([],[Z.cI]),!1,H.a([],[N.cD]),0,H.a([],[E.J]),null,null,!1,H.a([],[Q.b6]),"",null,null)
s.n("sprite",t)
this.O=s
s.a$.q(P.A([$.an,10,$.b4,10],D.bi,P.ci))
this.O.r1=!0},
jM:function(){var t,s,r,q
for(t=0;t<this.k2.length;++t){s=this.Y.at()
r=this.k2
q=r.length
if(s){if(t>=q)return H.B(r,t)
this.da(10,r[t])}else{if(t>=q)return H.B(r,t)
this.da(-10,r[t])}}},
da:function(a,b){var t,s,r,q,p
if(b==null)return
if(J.N(b.gcM(),$.cb))for(t=b.b,s=b.a,r=0;q=this.id,p=q.length,r<p;++r){q=q[r]
q.b=q.b+a/p*t*s.gfd()}else{t=b.a
s=J.ar(t)
if(s.T(t,$.an))if(s.T(t,$.an)){s=$.an
s=this.a$.aI(s)
s=s>1}else s=!1
else s=!0
if(s){s=b.b
q=t.gfd()
this.a$.cl(t,a*s*q)}}},
jN:function(){var t,s,r,q
t=this.ay.a.gI()
s=this.az.a.gI()
for(r=t.length,q=0;q<r;++q)this.da(10,t[q])
for(r=s.length,q=0;q<r;++q)this.da(10,s[q])},
fB:function(){var t,s,r,q
this.k2=H.a([],[E.J])
this.W.e7(this)
this.Y.e7(this)
t=$.cf
this.a$.aQ(t,0)
t=$.c4
s=this.c.u.a0(11)
this.a$.aQ(t,s+-10)
s=$.bC
t=this.c.u.a0(10)
this.a$.aQ(s,t+1)
t=$.bu
s=this.c.u.a0(21)
this.a$.aQ(t,s+-10)
s=$.an
t=this.c.u.a0(21)
this.a$.aQ(s,t+40)
t=$.b4
s=$.an
s=this.a$.aI(s)
this.a$.aQ(t,s)
if(this.aa&&!J.N(this.Z,"#ff0000")){t=$.b4
s=Y.tb(this.Z)
this.a$.cl(t,2*s)
s=$.an
t=Y.tb(this.Z)
this.a$.cl(s,2*t)}t=$.aY
s=this.c.u.a0(21)
this.a$.aQ(t,s+-10)
this.jO()
s=$.u
this.a$.aQ(s,10)
if(this.aa&&!J.N(this.Z,"#ff0000")){t=$.u
s=Y.tb(this.Z)
this.a$.cl(t,2*s)}t=$.aZ
s=this.c.u.a0(21)
this.a$.aQ(t,s+-10)
this.jM()
this.jN()
r=this.kA()
if(J.N(this.Y,$.vp)||r<-9){t=this.c.u.w($.rO)
this.bJ=t
J.fw(t,this.c)}else if(r>25){t=this.c.u.w($.rP)
this.bJ=t
J.fw(t,this.c)}if(r>5)this.ce=!0
t=$.b4
s=$.an
s=this.a$.aI(s)
this.a$.aQ(t,s)
if(J.N(this.Y,$.vo)){q=Z.aG("Rocks Fall, Everyone Dies",1,null,"")
q.r.push(new Z.a_($.u,3,!0,0,1,2,3,""))
q.e="Disappointingly sized meteors rain down from above.  Man, for such a cool name, this fraymotif kind of sucks. "
this.fy.push(q)}else if(J.N(this.Y,$.jf)){q=Z.aG("What class???",1,null,"")
q.r.push(new Z.a_($.u,1,!0,0,1,2,3,""))
q.e=" I am certain there is not a class here and it is laughable to imply otherwise. "
this.fy.push(q)
q=Z.aG("Nulzilla",2,null,"")
q.r.push(new Z.a_($.u,1,!0,0,1,2,3,""))
q.e=" If you get this reference, you may reward yourself 15 Good Taste In Media Points (tm).  "
this.fy.push(q)}},
hU:function(a,b,c,d,e,f){var t
this.ax=e
if(e!=null)this.bP()
this.d="player_"+H.p(this.k4)
t=new A.jk(null,this)
t.a=H.a([],[A.a9])
this.y2=t},
gcj:function(){return this.t},
gj3:function(){return this.W},
scj:function(a){return this.t=a}}
D.n0.prototype={
jY:function(a){var t,s,r
t=[["\\byear\\b","sweep"],["SBURB","SGRUB"],["\\bmonth\\b","perigee"],["\\brefrigerator\\b","\\bthermal hull\\b"],["\\bbathtub\\b","ablution trap"],["\\bears\\b","hear ducts "],["\\bheart\\b","pump biscuit"],["\\bbrain\\b","sponge"],["\\brap\\b","slam poetry"],["\\bnose\\b","sniffnode"],["\\bmouth\\b","squawk gaper"],["\\bbed\\b","cocoon"],["\\btea\\b","scalding leaf fluid"],["\\bworm","dirt noodle"],["\\bbean","fart nibblet"],["\\btree\\b","frond nub"],["\\bleg\\b","frond"],["\\bgold star\\b","glitter biscuit"],["\\bborn\\b","hatched"],["\\btoilet\\b","load gaper"],["\\bfoot\\b","prong"],["\\bspine\\b","posture pole"],["vampire","rainbow drinker"],["\\btits\\b","rumble spheres"],["\\bbaby\\b","wiggler"],["eye","gander bulb"]]
s=15-C.a.bq($.$get$eG(),a.Z)
for(r=0;r<26;++r)if(this.x.a.B()*15<s)this.b.push(t[r])},
k_:function(a){var t,s,r
this.f=this.x.a0(6)+0
this.c=this.x.a0(6)+0
this.a=[]
this.b=[]
if(this.f===2&&this.x.a.B()>0.2)this.f=this.x.a0(2)+0
if(this.x.a.B()>0.95){t=this.x.w($.$get$tw())
this.d=t
if(J.ct(t)===1&&J.dk(this.r,8)){t=this.d
this.d=D.wo(t,J.ck(t,0),this.r)}}if(this.x.a.B()>0.95){if(!J.N(this.d,"")&&this.x.a.B()>0.7){t=this.d
this.e=t}else{t=this.x.w($.$get$tw())
this.e=t}if(J.ct(t)===1&&J.dk(this.r,8)){t=this.e
this.e=D.wo(t,J.ck(t,0),this.r)}}if(J.N(a.Z,"#99004d")||J.N(a.Z,"#610061"))for(s=0;s<3;++s)this.b.push(this.x.w($.$get$tj()))
r=this.x.a.B()>0.5?this.x.a0(11)+0:0
if(r<0)r=0
for(s=0;s<r;++s){this.b.push(D.Fg(this.x))
if(J.N(a.Z,"#99004d")||J.N(a.Z,"#610061"))this.b.push(this.x.w($.$get$tj()))}this.b.push(this.x.w($.$get$tA()))
this.b.push(this.x.w($.$get$tk()))
this.b.push(this.x.w($.$get$tm()))
this.b.push(this.x.w($.$get$tt()))
this.b.push(this.x.w($.$get$tn()))
this.b.push(this.x.w($.$get$ti()))
this.b.push(this.x.w($.$get$th()))
this.b.push(this.x.w($.$get$tB()))
this.b.push(this.x.w($.$get$tv()))
this.a.push(this.x.w($.$get$ty()))
if(J.N(this.r,1)){if(this.x.a.B()>0.5)this.a.push(["I","1"])
if(this.x.a.B()>0.5)this.a.push(["i","1"])
if(this.x.a.B()>0.5)this.a.push(["l","1"])
if(this.x.a.B()>0.5)this.a.push(["L","1"])
if(this.x.a.B()>0.5)this.a.push(["won","1"])}else if(J.N(this.r,2)){if(this.x.a.B()>0.5)this.a.push(["S","2"])
if(this.x.a.B()>0.5)this.a.push(["s","2"])
if(this.x.a.B()>0.5)this.a.push(["Z","2"])
if(this.x.a.B()>0.5)this.a.push(["z","2"])
if(this.x.a.B()>0.5)this.a.push(["too","2"])
if(this.x.a.B()>0.5)this.a.push(["to","2"])
if(this.x.a.B()>0.5)this.a.push(["two","2"])}else if(J.N(this.r,3)){if(this.x.a.B()>0.5)this.a.push(["E","3"])
if(this.x.a.B()>0.5)this.a.push(["e","3"])}else if(J.N(this.r,4)){if(this.x.a.B()>0.5)this.a.push(["A","4"])
if(this.x.a.B()>0.5)this.a.push(["a","4"])
if(this.x.a.B()>0.5)this.a.push(["for","4"])
if(this.x.a.B()>0.5)this.a.push(["four","4"])}else if(J.N(this.r,5)){if(this.x.a.B()>0.5)this.a.push(["S","5"])
if(this.x.a.B()>0.5)this.a.push(["s","5"])
if(this.x.a.B()>0.5)this.a.push(["Z","5"])
if(this.x.a.B()>0.5)this.a.push(["J","5"])
if(this.x.a.B()>0.5)this.a.push(["z","5"])}else if(J.N(this.r,6)){if(this.x.a.B()>0.5)this.a.push(["G","6"])}else if(J.N(this.r,7)){if(this.x.a.B()>0.5)this.a.push(["T","7"])
if(this.x.a.B()>0.5)this.a.push(["t","7"])}else if(J.N(this.r,8)){if(this.x.a.B()>0.5)this.a.push(["ate","8"])
if(this.x.a.B()>0.5)this.a.push(["eight","8"])
if(this.x.a.B()>0.5)this.a.push(["EIGHT","8"])
if(this.x.a.B()>0.5)this.a.push(["B","8"])}else if(J.N(this.r,9)){if(this.x.a.B()>0.5)this.a.push(["g","9"])
if(this.x.a.B()>0.5)this.a.push(["nine","9"])
if(this.x.a.B()>0.5)this.a.push(["NINE","9"])}else if(J.N(this.r,10)){if(this.x.a.B()>0.5)this.a.push(["ten","10"])
if(this.x.a.B()>0.5)this.a.push(["TEN","10"])
if(this.x.a.B()>0.5)this.a.push(["lo","10"])}else if(J.N(this.r,11)){if(this.x.a.B()>0.5)this.a.push(["ll","11"])
if(this.x.a.B()>0.5)this.a.push(["II","11"])
if(this.x.a.B()>0.5)this.a.push(["ii","11"])}else if(J.N(this.r,12)){if(this.x.a.B()>0.5)this.a.push(["is","12"])
if(this.x.a.B()>0.5)this.a.push(["IS","12"])
if(this.x.a.B()>0.5)this.a.push(["iz","12"])
if(this.x.a.B()>0.5)this.a.push(["IZ","12"])}else if(J.N(this.r,0)){if(this.x.a.B()>0.5)this.a.push(["o","0"])
if(this.x.a.B()>0.5)this.a.push(["O","0"])
if(this.x.a.B()>0.5)this.a.push(["oh","0"])
if(this.x.a.B()>0.5)this.a.push(["OH","0"])}this.jY(a)},
jZ:function(a){var t,s
this.f=this.x.a0(3)+0
this.c=this.x.a0(4)+0
this.a=[]
this.b=[]
if(this.f===2&&this.x.a.B()>0.2)this.f=this.x.a0(2)+0
t=this.x.a.B()>0.5?this.x.a0(11)+0:0
if(t<0)t=0
for(s=0;s<t;++s)this.b.push(this.x.w($.$get$tf()))
this.b.push(this.x.w($.$get$tA()))
this.b.push(this.x.w($.$get$tk()))
this.b.push(this.x.w($.$get$tm()))
this.b.push(this.x.w($.$get$tt()))
this.b.push(this.x.w($.$get$tn()))
this.b.push(this.x.w($.$get$ti()))
this.b.push(this.x.w($.$get$th()))
this.b.push(this.x.w($.$get$tB()))
this.b.push(this.x.w($.$get$tv()))
this.b.push(this.x.w($.$get$wb()))
this.a.push(this.x.w($.$get$ty()))},
hV:function(a){this.r=this.x.a0(12)}}
A.d3.prototype={
a0:function(a){if(a===0)return 0
if(typeof a!=="number")return a.a7()
if(a<0)return-this.eU(-a)
return this.eU(a)},
k9:function(){return this.a0(4294967295)},
eU:function(a){var t,s
t=this.a
if(a>4294967295){s=t.B()
this.b=C.e.aM(s*4294967295)
return C.e.bx(s*a)}else{s=t.a0(a)
this.b=s
return s}},
cE:function(){this.b=J.bO(this.b,1)
return this.a.cE()},
cL:function(a){var t=a==null
this.a=t?C.B:P.Ez(a)
if(!t)this.b=J.bO(a,1)},
kf:function(a,b){var t=J.bm(a)
if(t.ga2(a)===!0)return
if(!!t.$isbK)return a.er(this.a.B())
return t.a6(a,this.a0(t.gp(a)))},
w:function(a){return this.kf(a,!0)}}
Y.oJ.prototype={
$1:function(a){var t,s,r,q,p
if(J.N(a," "))return a
for(t=Y.t4(16),s=0;s<t;++s){r=Y.t4(3)
q=$.$get$t3().m(0,r)
p=Y.t4($.$get$t3().m(0,r).length)
if(p>>>0!==p||p>=q.length)return H.B(q,p)
a=J.bO(a,q[p])}return a},
$S:function(){return{func:1,args:[,]}}}
N.cD.prototype={
gen:function(a){var t,s
if($.tg.gfG().gkV()){$.tg.gfG().gjI()
t=!0}else t=!1
if(t){s=$.tg.gfG().gjI()
return s}return this.c},
j2:function(a){var t=this.d
if(t===this.ch)return"<font color = 'red'>&#x2665</font>"
if(t===this.db)return"<font color = 'black'>&#x2660</font>"
if(t===this.cy)return"<font color = 'grey'>&#x2663</font>"
if(t===this.cx)return"<font color = 'pink'>&#x2666</font>"
if(t===this.r)return"<font color = 'black'>0_0</font>"
if(t===this.y)return"<font color = 'red'>&#x2662</font>"
if(t===this.Q)return"<font color = 'black'>&#x2667</font>"
if(t===this.x)return"<font color = 'black'>&#x263A</font>"
if(t===this.z)return"<font color = 'black'>&#x2639</font>"
return t},
fc:function(){return this.j2(null)},
v:function(a){return" "+this.fc()+"("+C.e.aM(this.b)+") "+H.p(C.E.cG(this.c))},
ff:function(){var t=this.b
if(t>20)return this.y
else if(t<-20)return this.Q
else if(t>0)return this.x
else if(t===0)return this.r
else return this.z},
kK:function(a){var t,s
t=this.d
if(t===this.ch||t===this.db||t===this.cx||t===this.cy)return t
if(t===""){this.e=!1
t=this.ff()
this.d=t
this.f=t
if(t===this.y||t===this.Q){this.e=!0
this.f=this.x}return t}if(J.tG(this.a).u.a.B()>0.25){this.f=this.d
this.d=this.ff()}t=this.f
s=this.d
if(t!==s)this.e=!0
else this.e=!1
return s},
ga3:function(a){return this.b},
sdu:function(a,b){return this.a=b}}
L.hU.prototype={
v:function(a){return this.b}}
L.dP.prototype={
hB:function(a){var t
P.e6("string to moon")
t=J.ar(a)
if(t.T(a,this.d.dy))return this.d
if(t.T(a,this.e.dy))return this.e
return},
aZ:function(){var t,s,r,q,p,o
t=[U.c]
s=H.a([],t)
s.push(new U.c("The "+$.k+" fights the Dersite army, desparately trying to stave off the Reckoning.   "))
s.push(new U.c("The "+$.k+" explores Skaian Castles. Huh, there sure are a lot of books!"))
s.push(new U.c("The "+$.k+" reroutes Dersite equipment to resupply Prospitian soliders."))
s.push(new U.c("The "+$.k+" mentally prepares for the upcoming Final Battle."))
r=$.k
s.push(new U.c("The "+r+" enters a Dersite battleship, punches the shit out of the captain, locks the door to the control room, reroutes the autopilot to crash into another battleship, then flies out through a window.  The ships crash and explode, and "+r+" walks away in slow-motion without looking backwards."))
s.push(new U.c("The "+$.k+" gives speeches to Prospit army, convincing them that their cause is worth fighting for, despite its futility."))
s.push(new U.c("The "+$.k+" spares a Derse company in exchange for them leaving the conflict. They decide to join the war for a better world instead."))
s.push(new U.c("The "+$.k+" hijacks a massive Dersite drilling machine, creating a hole for the frog to enter Skaia more easily."))
q=H.a([],t)
p=this.u.a0(2)+3
for(o=0;o<p;++o)q.push(this.u.w(s))
return new R.fg("Wander The Battlefield",!0,q,H.a([],t),R.x(),!1,!1,new Y.k7(null,"Rewards/battlefield.png","Rewards/no_reward.png",null),1,null,null)},
b8:function(){var t,s,r,q,p,o
t=[U.c]
s=H.a([],t)
s.push(new U.c("The "+$.k+" bets 50 boonies on the red frog.   After a nerve wracking set of hops, it comes in first!  "))
s.push(new U.c("The VAST CROAK will redeem us all.  The VAST CROAK is the purity of creation, untainted by the old universe.  The "+$.k+" isn\u2019t sure they believe in the Church of the Frog\u2019s message, but the sermon itself is very soothing."))
s.push(new U.c("Two parts flour. One part good sweet butter.  A bowl of egg whites to brush onto the surface.  Sugar to taste. Plenty of elbow grease. The "+$.k+" is learning to master the secret art of the HOLY PASTRIES."))
s.push(new U.c("The "+$.k+" talks to several Prospitians, learning about their daily lives and how happy they are under the WHITE QUEEN\u2019s rule."))
s.push(new U.c("The "+$.k+" flutters about aimlessly, simply enjoying the feeling of flying."))
r=$.k
s.push(new U.c("The "+r+" attends a glorious dance party, complete with masquerades, tea parties and friendship.  The Prospitians admire the "+r+"\u2019s cheerful demeanor and willingness to invent new dance steps."))
s.push(new U.c("The "+$.k+" stares into the clouds on Skaia. Visions swim in their head. Is this game\u2026.more terrible than they thought?"))
q=H.a([],t)
p=this.u.a0(2)+3
for(o=0;o<p;++o)q.push(this.u.w(s))
return new R.dv("Do Prospit Bullshit",!0,q,H.a([],t),R.rW(),!1,!1,new Y.eg(null,"Prospit.png","Rewards/no_reward.png",null),1,null,null)},
b_:function(){var t,s,r,q,p,o
t=[U.c]
s=H.a([],t)
r=$.k
s.push(new U.c("The "+r+" attends a glorious dance party, complete with masquerades, backstabbing and intrigue.  The Dersites admire the "+r+"\u2019s deftness at avoiding stabs in time to music. "))
r=$.k
s.push(new U.c("The "+r+" is taking part in a high stakes poker game. Everybody is cheating, and that\u2019s what makes it interesting.  The "+r+"  thinks they can convince everyone that all decks of cards come with five aces."))
s.push(new U.c("The "+$.k+" is keeping tabs on the lifeblood of Derse. The Inquiring Carapacian is a VERY disreputable newspaper, which is what makes it so great for hearing the juicy gossip the Queen doesn\u2019t WANT you to hear."))
s.push(new U.c("The BLACK QUEEN is just three Salamanders in a robe.  The BLACK KING likes reading fanfiction. The "+$.k+" is keeping their LYING ATTRIBUTE sharp."))
s.push(new U.c("The "+$.k+" does their best to ignore the unsettling...whispering that seems to be omnipresent on Derse. "))
s.push(new U.c("The "+$.k+" is learning the steps to the Derse Waltz. There is no reason one can\u2019t look classy as fuck while also being a lying, cheating, manipulative bastard, that\u2019s what their dance teacher always says."))
r=$.k
s.push(new U.c("SLICE!  The "+r+" slices open a watermelon while a local Dersite looks on in disgust.  ANYBODY can slice with a knife, it takes real commitment to stab.  The "+r+" has a lot to learn."))
r=$.k
s.push(new U.c("The "+r+" is relaxing in a dimly lit jazz club.  The band is pretty good, but a nearby Dersite assures the "+r+"  that they got nothing on some outfit called \u2018The Midnight Crew\u2019. Shame they aren\u2019t around right now."))
q=H.a([],t)
p=this.u.a0(2)+3
for(o=0;o<p;++o)q.push(this.u.w(s))
return new R.dv("Do Derse Bullshit",!0,q,H.a([],t),R.rW(),!1,!1,new Y.eg(null,"Prospit.png","Rewards/no_reward.png",null),1,null,null)},
ci:function(){var t,s,r,q,p
t=[U.c]
s=H.a([],t)
s.push(new U.c("The "+$.k+" writhes in terror and pain. Why do players without dreamselves dream in the Furthest Ring with the Horror Terrors? "))
s.push(new U.c("The "+$.k+" vows to never sleep again.  Why do players without dreamselves dream in the Furthest Ring with the Horror Terrors? "))
s.push(new U.c("The "+$.k+" is reliving embarassing childhood memories for the amusement of the Horror Terrors.  Why do players without dreamselves dream in the Furthest Ring with the Horror Terrors?"))
r=H.a([],t)
q=this.u.a0(2)+3
for(p=0;p<q;++p)r.push(this.u.w(s))
return new R.dv("Writhe In Pain",!0,r,H.a([],t),R.Dr(),!1,!1,new Y.eg(null,"Prospit.png","Rewards/no_reward.png",null),1,null,null)},
cg:function(){var t,s,r,q,p
t=[U.c]
s=H.a([],t)
s.push(new U.c("The "+$.k+" has a relatively sedate time of reliving past memories and chatting up inconsequential ghosts. Good thing the dream bubbles were set up, huh?"))
s.push(new U.c("The "+$.k+" enjoys a relaxing memory of their home planet while dreaming in the bubbles. "))
s.push(new U.c("The "+$.k+"  tries not to give into existential horror as they realize just how MANY versions of their dead friends exist."))
r=H.a([],t)
q=this.u.a0(2)+3
for(p=0;p<q;++p)r.push(this.u.w(s))
return new R.dv("Do Dream Bubble Bullshit",!0,r,H.a([],t),R.Dq(),!1,!1,new Y.eg(null,"Prospit.png","Rewards/no_reward.png",null),1,null,null)},
hl:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.f
P.e6("moons set up "+H.p(t))
s=X.F
r=P.U
q=[s,r]
p=new H.q(0,null,null,null,null,null,0,q)
o=P.v
n=[o]
m=H.a(["Battlefield"],n)
H.a([],n)
l=N.Z
r=[l,r]
k=new H.q(0,null,null,null,null,null,0,r)
k.i(0,$.eW,$.j)
k.i(0,$.dn,$.l)
k.i(0,$.ek,$.E)
k.i(0,$.d7,$.l)
k.i(0,$.ei,$.l)
k.i(0,$.r2,$.j)
k.i(0,$.r1,$.j)
k.i(0,this.aZ(),$.E)
k.i(0,this.aZ(),$.E)
k.i(0,this.aZ(),$.E)
k.i(0,this.aZ(),$.E)
k.i(0,this.aZ(),$.E)
k.i(0,this.aZ(),$.E)
k.i(0,this.aZ(),$.E)
k.i(0,this.aZ(),$.E)
k.i(0,this.aZ(),$.E)
k.i(0,this.aZ(),$.E)
k.i(0,this.aZ(),$.E)
k.i(0,this.aZ(),$.E)
k.i(0,this.aZ(),$.E)
p.i(0,new X.F(m,k,null),$.aP)
o=new L.k6($.$get$u9(),Q.G(null,null,R.fg),!1,null,null,null,null,null,null,null,null,!1,!1,!1,null,null,null,null,null,!1,null,null,$.$get$il(),null,null,null,Q.G(null,null,s),Q.G(null,null,l),P.cK(o,[Q.bK,N.Z]))
o.dy="BattleField"
o.c$=this
o.e$=Q.t2(p,!0,null,s)
o.eh(this.u)
o.b=o.aG($.$get$ib())
o.c=o.aG($.$get$ic())
o.d=o.aG($.$get$ia())
s=o.aG($.$get$qW())
o.k1=Q.d5(s,!1,!0,null,H.as(s,"cc",0))
o.eg()
this.c=o
j=new H.q(0,null,null,null,null,null,0,q)
s=H.a(["Prospit"],n)
H.a([],n)
o=new H.q(0,null,null,null,null,null,0,r)
o.i(0,$.l_,$.l)
o.i(0,$.cB,$.E)
o.i(0,$.cw,$.l)
o.i(0,$.be,$.l)
o.i(0,$.co,$.E)
o.i(0,$.r2,$.j)
o.i(0,this.b8(),$.w)
o.i(0,this.b8(),$.w)
o.i(0,this.b8(),$.w)
o.i(0,this.b8(),$.w)
o.i(0,this.b8(),$.w)
o.i(0,this.b8(),$.w)
o.i(0,this.b8(),$.w)
o.i(0,this.b8(),$.w)
o.i(0,this.b8(),$.w)
o.i(0,this.b8(),$.w)
o.i(0,this.b8(),$.w)
o.i(0,this.b8(),$.w)
o.i(0,this.ci(),$.ae)
o.i(0,this.ci(),$.ae)
o.i(0,this.ci(),$.ae)
o.i(0,this.cg(),$.ae)
o.i(0,this.cg(),$.ae)
o.i(0,this.cg(),$.ae)
i=new H.q(0,null,null,null,null,null,0,q)
q=H.a(["Prospit"],n)
H.a([],n)
r=new H.q(0,null,null,null,null,null,0,r)
r.i(0,$.dX,$.l)
r.i(0,$.r7,$.l)
r.i(0,$.cB,$.E)
r.i(0,$.d7,$.l)
r.i(0,$.c7,$.E)
r.i(0,$.cm,$.l)
r.i(0,$.r1,$.j)
r.i(0,this.b_(),$.E)
r.i(0,this.b_(),$.E)
r.i(0,this.b_(),$.E)
r.i(0,this.b_(),$.E)
r.i(0,this.b_(),$.E)
r.i(0,this.b_(),$.E)
r.i(0,this.b_(),$.E)
r.i(0,this.b_(),$.E)
r.i(0,this.b_(),$.E)
r.i(0,this.b_(),$.E)
r.i(0,this.b_(),$.E)
r.i(0,this.b_(),$.E)
r.i(0,this.b_(),$.E)
r.i(0,this.ci(),$.ae)
r.i(0,this.ci(),$.ae)
r.i(0,this.ci(),$.ae)
r.i(0,this.cg(),$.ae)
r.i(0,this.cg(),$.ae)
r.i(0,this.cg(),$.ae)
n=$.k
r.i(0,new R.dv("Be a Legitimate Business Player",!0,[new U.c("The "+n+" learns of a lucrative business opportunity. The BLACK QUEEN has all sorts of contraband laws. Everything from frogs to ice cream is so totally illegal. But that doesn't stop the right sort of Dersite from getting cravings, if you understand me. The "+n+" looks like they can be discreet. "),new U.c("The "+n+" runs afoul of the Authority Regulators. Through a frankly preposterous amount of running, parkour and misdirection, they finally escape, only to remember that they could have just flown away.  Dream selves sure are dumb!  "),new U.c("The "+n+" has decided to retire from a life of...legitimate business, highly lucrative though it was.  They use their earnings to set up a simple and refined Suit Shop, catering to only the most exclusive clientel. ")],H.a([],[U.c]),R.rW(),!1,!1,new Y.eg(null,"Prospit.png","Rewards/no_reward.png",null),1,null,null),$.E)
j.i(0,new X.F(s,o,null),$.aP)
i.i(0,new X.F(q,r,null),$.aP)
this.d=R.uZ("Prospit",j,this,$.tK,t,$.$get$vl())
this.e=R.uZ("Derse",i,this,$.qL,J.bO(t,1),$.$get$vg())
for(t=this.r,h=0;!1;++h){if(h>=0)return H.B(t,h)
t[h].bP()}},
fP:function(){var t,s,r
t=this.db
if(t===C.C){t=T.de
this.aw=P.bc(T.vq(),!0,t)
this.be=P.bc(T.vq(),!0,t)
this.aS=P.bc(L.xj(),!0,L.cG)}else{s=T.de
r=L.cG
if(t===C.T){this.aw=P.bc(T.vr(),!0,s)
this.be=P.bc(T.vr(),!0,s)
this.aS=P.bc(L.xk(),!0,r)}else{this.aw=P.bc(T.hm(),!0,s)
this.be=P.bc(T.hm(),!0,s)
this.aS=P.bc(L.jV(),!0,r)}}this.b2=H.a([$.jU,$.jT],[L.cG])},
dg:function(){var t=this.r2
if(t>0.6)return"Human"
else if(t>0.3)return"Troll"
return"Mixed"},
v:function(a){return J.cu(this.f)},
hW:function(a){var t,s
t=this.f
s=new A.d3(null,null)
s.cL(t)
this.u=s
F.Dh(this)
this.O=new Y.mq(this,null,null,null,null,null,null)
s=$.rZ
if(s==null){s=K.E7()
$.rZ=s}this.av=s
this.O.hw()
this.O.hu()
this.O.hs()
this.O.hq()
this.hl()
this.G.a=$.is
P.e6("Making sesssion "+H.p(this)+" with initialGameEntity id of "+this.G.a)
this.b=new F.f7(!1,"Session: "+H.p(t))
t=this.av
this.y=t.k3
this.cy=t.k2
this.cx=t.k1
this.k1=t.id
this.id=t.go
this.go=t.fy
s=this.G
t.fx
s.u=!1
this.r1=t.fr
this.k4=t.dx
this.fP()},
gjX:function(){return this.b},
gI:function(){return this.G}}
O.j6.prototype={}
D.nI.prototype={
$1:function(a){return a.gkh()},
$S:function(){return{func:1,args:[D.bi]}}}
D.nJ.prototype={
$1:function(a){return a.ghD()},
$S:function(){return{func:1,args:[D.bi]}}}
D.bi.prototype={
d_:function(a,b){return b*this.r},
v:function(a){return this.a},
gH:function(a){return this.a},
gkh:function(){return this.d},
ghD:function(){return this.e},
gfd:function(){return this.x},
gk5:function(){return this.y}}
D.js.prototype={
d_:function(a,b){var t=a.aI($.t_)
return this.eB(a,b)*(1+this.cx*t)}}
D.n6.prototype={
d_:function(a,b){var t
if(!!a.$isj9){t=a.c.id
if(t.length===0)return 0
return J.eI(new H.db(t,new D.n7(),[H.M(t,0),null]).ko(0,new D.n8()),this.r)}return this.eB(a,b)}}
D.n7.prototype={
$1:function(a){return J.cF(a)},
$S:function(){return{func:1,args:[N.cD]}}}
D.n8.prototype={
$2:function(a,b){return J.bO(a,b)},
$S:function(){return{func:1,args:[P.ci,P.ci]}}}
E.cL.prototype={
jf:function(a){var t,s,r,q,p
for(t=a.a,s=t.gau(),s=s.gR(s),r=this.a;s.A();){q=s.gJ()
r.i(0,q,t.m(0,q))}for(t=a.b,s=t.length,r=this.b,p=0;p<t.length;t.length===s||(0,H.bN)(t),++p)r.push(t[p].c8())},
m:function(a,b){return this.aI(b)},
hj:function(a,b){b.toString
this.a.i(0,a,b)
return b},
iT:function(a,b){var t,s
t=this.a
s=t.as(a)?t.m(0,a):0
if(typeof s!=="number")return s.ao()
s+=b
t.i(0,a,s)
return s},
q:function(a){var t,s
for(t=a.gau(),t=t.gR(t);t.A();){s=t.gJ()
this.aQ(s,a.m(0,s))}},
df:function(a){var t=this.b
return new H.bF(t,new E.nG(a),[H.M(t,0)])},
j0:function(a,b,c){var t
for(t=J.bP(c);t.A();)b=t.gJ().j5(this,a,b)
return b},
j_:function(a,b,c){var t,s,r
for(t=J.bP(c),s=0;t.A();){r=J.wx(t.gJ().fa(this,a,b),b)
if(typeof r!=="number")return H.aK(r)
s+=r}return J.bO(b,s)},
dP:function(a,b,c){var t
for(t=J.bP(c);t.A();)b=t.gJ().k7(this,a,b)
return b},
dO:function(a,b,c){var t
for(t=J.bP(c);t.A();)b=t.gJ().jv(this,a,b)
return b},
jk:function(a,b){var t,s,r
t=this.a
t=t.as(a)?t.m(0,a):0
s=J.qC(t,a.gk5(),a.z)
r=this.df(a)
return J.qC(this.dO(a,this.dP(a,this.j_(a,a.d_(this,this.j0(a,s,r)),r),r),r),a.Q,a.ch)},
aI:function(a){return this.jk(a,null)},
gR:function(a){var t=this.a.gau()
return t.gR(t)},
gp:function(a){var t=this.a
return t.gp(t)},
f8:function(a,b,c){a.b=b
a.a=c
this.b.push(a)}}
E.j3.prototype={
$asD:function(){return[D.bi]},
$isD:1}
E.nG.prototype={
$1:function(a){return J.qD(a.gI(),this.a)},
$S:function(){return{func:1,args:[A.cN]}}}
E.hp.prototype={
gI:function(){return this.a$},
sI:function(a){var t=J.ar(a)
if(!!t.$ishp){this.sI(a.a$)
return}else if(!!t.$iscL){t=this.cp()
t.jf(a)
this.a$=t
return}throw H.m("Invalid type for StatOwner.stats in "+this.v(0)+": "+t.v(a)+" ("+H.p(t.gac(a))+")")}}
E.hh.prototype={}
E.fd.prototype={
dP:function(a,b,c){var t
b=this.hJ(a,b,c)
if(a.d){t=this.c.b
if(t===C.N)return J.eI(b,0.667)
else if(t===C.aa)return J.eI(b,1.5)}return b}}
E.j9.prototype={
df:function(a){var t,s,r
t=this.hK(a)
s=P.bc(t,!0,H.M(t,0))
t=this.c
r=t.gj3().gdv()
C.a.a4(s,new H.bF(r,new E.mS(a),[H.M(r,0)]))
t=t.Y.gdv()
C.a.a4(s,new H.bF(t,new E.mT(a),[H.M(t,0)]))
return s},
$asfd:function(){return[Q.b6]},
$ashh:function(){return[Q.b6]},
$asD:function(){return[D.bi]}}
E.mS.prototype={
$1:function(a){return J.qD(a.gI(),this.a)},
$S:function(){return{func:1,args:[A.cN]}}}
E.mT.prototype={
$1:function(a){return J.qD(a.gI(),this.a)},
$S:function(){return{func:1,args:[A.cN]}}}
E.kd.prototype={
dO:function(a,b,c){var t
b=this.hI(a,b,c)
t=this.c.ry
if(t!=null)if(!a.f){t=t.a$.aI(a)
b=J.bO(b,t)}return b},
$asfd:function(){return[F.dT]},
$ashh:function(){return[F.dT]},
$asD:function(){return[D.bi]}}
Q.bK.prototype={
er:function(a){var t,s,r,q,p,o
t=this.eu()
s=C.e.a1(a,0,1)*t
for(r=J.bP(this.gc0()),q=0;r.A();){p=r.gJ()
o=p.gbB()
if(typeof o!=="number")return H.aK(o)
q+=o
if(s<=q)return p.a}return},
eu:function(){var t,s,r
for(t=J.bP(this.gc0()),s=0;t.A();){r=t.gJ().gbB()
if(typeof r!=="number")return H.aK(r)
s+=r}return s},
k:function(a,b){return b},
v:function(a){return J.cu(this.gc0())},
b9:function(a,b){return Q.oE(this,b,H.as(this,"bK",0))},
b7:function(a,b){return Q.fj(this,b,H.as(this,"bK",0),null)},
an:function(a,b){return Q.d5(this,!1,!0,null,H.as(this,"bK",0))},
aN:function(a){return this.an(a,!0)},
$isD:1,
$asD:null}
Q.fi.prototype={
er:function(a){var t,s,r,q,p,o,n,m
t=this.eu()
s=C.e.a1(a,0,1)*t
for(r=this.b,q=r.length,p=0,o=0;o<r.length;r.length===q||(0,H.bN)(r),++o){n=r[o]
m=n.gbB()
if(typeof m!=="number")return H.aK(m)
p+=m
if(s<=p)return n.a}return},
fg:function(){var t,s,r,q,p,o
t=P.cK(H.M(this,0),P.U)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.bN)(s),++q){p=s[q]
o=J.aW(p)
if(!t.as(o.gb5(p)))t.i(0,o.gb5(p),0)
o=o.gb5(p)
t.i(0,o,J.bO(t.m(0,o),p.gbB()))}C.a.sp(this.b,0)
this.iS(t.gau(),t.gaF(t))},
dt:function(a){C.a.ds(this.b,new Q.oC(this))},
gc0:function(){return this.b},
iR:function(a,b,c){C.a.h(this.b,new Q.h(b,this.k(b,J.qF(c)),this.$ti))},
iS:function(a,b){var t,s,r,q,p,o,n,m
t=this.b
s=t.length
C.a.sp(t,s+a.gp(a))
r=a.gR(a)
q=b.gR(b)
for(t=this.$ti;r.A();){p=q.A()?q.gJ():1
o=this.b
n=r.gJ()
m=this.k(n,p)
if(s>=o.length)return H.B(o,s)
o[s]=new Q.h(n,m,t);++s}},
ky:function(a,b){var t=this.b
C.a.bR(t,"retainWhere")
C.a.f_(t,new Q.oB(this,b),!1)
return},
ku:function(a,b){var t=this.b
C.a.bR(t,"removeWhere")
C.a.f_(t,new Q.oA(this,b),!0)
return},
m:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.B(t,b)
return J.cV(t[b])},
i:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.B(t,b)
t[b]=new Q.h(c,s,this.$ti)},
gp:function(a){return this.b.length},
sp:function(a,b){C.a.sp(this.b,b)
return b},
v:function(a){return P.fX(this.b,"[","]")},
b9:function(a,b){return Q.oE(this,b,H.M(this,0))},
b7:function(a,b){return Q.fj(this,b,H.M(this,0),null)},
an:function(a,b){return Q.d5(this,!1,!0,null,H.M(this,0))},
aN:function(a){return this.an(a,!0)},
i_:function(a,b,c){var t,s
this.a=a
t=[[Q.h,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.jo.prototype={$asbK:null,$asD:null,$asL:null,$asP:null,$isL:1,$isP:1,$isD:1}
Q.oC.prototype={
$2:function(a,b){return J.tD(b.gbB(),a.gbB())},
$S:function(){return H.d6(function(a){return{func:1,args:[[Q.h,a],[Q.h,a]]}},this.a,"fi")}}
Q.oB.prototype={
$1:function(a){return this.b.$1(J.cV(a))},
$S:function(){return H.d6(function(a){return{func:1,args:[[Q.h,a]]}},this.a,"fi")}}
Q.oA.prototype={
$1:function(a){return this.b.$1(J.cV(a))},
$S:function(){return H.d6(function(a){return{func:1,args:[[Q.h,a]]}},this.a,"fi")}}
Q.h.prototype={
v:function(a){return"("+H.p(this.a)+" @ "+H.p(this.b)+")"},
gb5:function(a){return this.a},
gbB:function(){return this.b}}
Q.cc.prototype={
gc0:function(){return this.b},
gR:function(a){var t=new Q.oz(null,[H.as(this,"cc",0)])
t.a=J.bP(this.b)
return t},
gp:function(a){return J.ct(this.b)},
v:function(a){return J.cu(this.b)},
b9:function(a,b){return Q.oE(this,b,H.as(this,"cc",0))},
b7:function(a,b){return Q.fj(this,b,H.as(this,"cc",0),null)},
an:function(a,b){return Q.d5(this,!1,!0,null,H.as(this,"cc",0))},
aN:function(a){return this.an(a,!0)}}
Q.fh.prototype={$asbK:null,$asD:null,$isD:1}
Q.oz.prototype={
gJ:function(){return J.cV(this.a.gJ())},
A:function(){return this.a.A()}}
Q.jq.prototype={}
Q.oF.prototype={
$1:function(a){return this.b.$1(J.cV(a))},
$S:function(){return H.d6(function(a){return{func:1,args:[[Q.h,a]]}},this,"jq")}}
Q.jp.prototype={
$ascc:function(a,b){return[b]},
$asfh:function(a,b){return[b]},
$asbK:function(a,b){return[b]},
$asD:function(a,b){return[b]}}
Q.oD.prototype={
$1:function(a){return new Q.h(this.c.$1(J.cV(a)),a.gbB(),[this.b])},
$S:function(){return H.d6(function(a,b){return{func:1,args:[[Q.h,a]]}},this,"jp")}}
Q.hr.prototype={
$ascc:function(a,b){return[a]},
$asfh:function(a,b){return[a]},
$asbK:function(a,b){return[a]},
$asD:function(a,b){return[a]}}
Q.o1.prototype={
$1:function(a){var t=J.cV(a)
return H.td(t,this.a)},
$S:function(){return H.d6(function(a,b){return{func:1,args:[[Q.h,b]]}},this,"hr")}}
Q.o2.prototype={
$1:function(a){return new Q.h(J.cV(a),a.gbB(),[this.a])},
$S:function(){return H.d6(function(a,b){return{func:1,args:[[Q.h,b]]}},this,"hr")}}
J.a0.prototype.hF=J.a0.prototype.v
J.fY.prototype.hH=J.fY.prototype.v
P.dh.prototype.hL=P.dh.prototype.cO
P.dh.prototype.hM=P.dh.prototype.cN
P.c3.prototype.eA=P.c3.prototype.a9
P.D.prototype.hG=P.D.prototype.b9
W.cA.prototype.dw=W.cA.prototype.b0
W.hE.prototype.hN=W.hE.prototype.bH
E.cx.prototype.hE=E.cx.prototype.dY
D.bi.prototype.eB=D.bi.prototype.d_
E.cL.prototype.aQ=E.cL.prototype.hj
E.cL.prototype.cl=E.cL.prototype.iT
E.cL.prototype.hK=E.cL.prototype.df
E.cL.prototype.hJ=E.cL.prototype.dP
E.cL.prototype.hI=E.cL.prototype.dO;(function installTearOffs(){installTearOff(H.fm.prototype,"gjV",0,0,0,null,["$0"],["d9"],1)
installTearOff(H.dz.prototype,"ghc",0,0,0,null,["$1"],["bc"],4)
installTearOff(H.eD.prototype,"gjm",0,0,0,null,["$1"],["bI"],4)
installTearOff(H,"w0",1,0,0,null,["$1"],["F0"],14)
installTearOff(P,"F3",1,0,0,null,["$1"],["Ep"],3)
installTearOff(P,"F4",1,0,0,null,["$1"],["Eq"],3)
installTearOff(P,"F5",1,0,0,null,["$1"],["Er"],3)
installTearOff(P,"wc",1,0,0,null,["$0"],["F_"],1)
installTearOff(P.ju.prototype,"gjb",0,0,0,null,["$2","$1"],["fi","fh"],5)
installTearOff(P.cy.prototype,"gc3",0,0,0,null,["$2","$1"],["bk","eI"],5)
var t
installTearOff(t=P.dh.prototype,"geW",0,0,0,null,["$0"],["cS"],1)
installTearOff(t,"geX",0,0,0,null,["$0"],["cT"],1)
installTearOff(t=P.hx.prototype,"geW",0,0,0,null,["$0"],["cS"],1)
installTearOff(t,"geX",0,0,0,null,["$0"],["cT"],1)
installTearOff(t,"giq",0,0,0,null,["$1"],["ir"],function(){return H.d6(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"hx")})
installTearOff(t,"giu",0,0,0,null,["$2"],["iv"],10)
installTearOff(t,"gis",0,0,0,null,["$0"],["it"],1)
installTearOff(P.jy.prototype,"gdW",0,1,0,null,["$1"],["a5"],11)
installTearOff(P,"Fb",1,0,0,null,["$2"],["xt"],15)
installTearOff(P,"Fc",1,0,0,null,["$1"],["e6"],2)
installTearOff(W,"Fm",1,0,0,null,["$4"],["Ev"],9)
installTearOff(W,"Fn",1,0,0,null,["$4"],["Ew"],9)
installTearOff(t=W.hZ.prototype,"gbl",0,1,0,null,["$1"],["dZ"],2)
installTearOff(t,"gjJ",0,0,0,null,["$1"],["jK"],2)
installTearOff(t,"gkL",0,0,0,null,["$1"],["kM"],2)
installTearOff(W.eN.prototype,"gb5",0,1,0,null,["$1"],["aL"],6)
installTearOff(W.i5.prototype,"gb5",0,1,0,null,["$1"],["aL"],6)
installTearOff(W.im.prototype,"gb5",0,1,0,null,["$1"],["aL"],12)
installTearOff(W.ir.prototype,"gb5",0,1,0,null,["$1"],["aL"],7)
installTearOff(W.f_.prototype,"gb5",0,1,0,null,["$1"],["aL"],8)
installTearOff(W.it.prototype,"gb5",0,1,0,null,["$1"],["aL"],8)
installTearOff(W.ho.prototype,"gb5",0,1,0,null,["$1"],["aL"],7)
installTearOff(W.hD.prototype,"gb5",0,1,0,null,["$1"],["aL"],13)
installTearOff(A,"xM",1,0,0,null,["$5"],["xK"],16)
installTearOff(Z.iZ.prototype,"ghz",0,1,0,null,["$0"],["hA"],1)
installTearOff(R,"ex",1,0,0,null,["$1"],["DI"],0)
installTearOff(R,"rW",1,0,0,null,["$1"],["Dv"],0)
installTearOff(R,"Dr",1,0,0,null,["$1"],["Dx"],0)
installTearOff(R,"Dq",1,0,0,null,["$1"],["Dw"],0)
installTearOff(R,"Dp",1,0,0,null,["$1"],["Dt"],0)
installTearOff(R,"vd",1,0,0,null,["$1"],["DH"],0)
installTearOff(R,"c0",1,0,0,null,["$1"],["DG"],0)
installTearOff(R,"rY",1,0,0,null,["$1"],["DF"],0)
installTearOff(R,"vc",1,0,0,null,["$1"],["DD"],0)
installTearOff(R,"ja",1,0,0,null,["$1"],["DC"],0)
installTearOff(R,"ew",1,0,0,null,["$1"],["Dz"],0)
installTearOff(R,"e0",1,0,0,null,["$1"],["DB"],0)
installTearOff(R,"fe",1,0,0,null,["$1"],["DE"],0)
installTearOff(R,"rX",1,0,0,null,["$1"],["DA"],0)
installTearOff(R,"x",1,0,0,null,["$1"],["Du"],0)
installTearOff(R,"Ds",1,0,0,null,["$1"],["Dy"],0)
installTearOff(F.f7.prototype,"gbl",0,1,0,null,["$1"],["dZ"],2)
installTearOff(O,"FA",1,0,0,null,["$1"],["FD"],17)
installTearOff(M,"v0",1,0,0,null,["$0"],["Fx"],18)
installTearOff(T,"Fk",1,0,0,null,["$2"],["xz"],19)})();(function inheritance(){inherit(P.bd,null)
var t=P.bd
inherit(H.rI,t)
inherit(J.a0,t)
inherit(J.fy,t)
inherit(P.fb,t)
inherit(P.D,t)
inherit(H.et,t)
inherit(P.iO,t)
inherit(H.io,t)
inherit(H.om,t)
inherit(H.eM,t)
inherit(H.pw,t)
inherit(H.fm,t)
inherit(H.p4,t)
inherit(H.eE,t)
inherit(H.pv,t)
inherit(H.oS,t)
inherit(H.ff,t)
inherit(H.og,t)
inherit(H.dD,t)
inherit(H.dz,t)
inherit(H.eD,t)
inherit(H.kj,t)
inherit(H.n5,t)
inherit(H.oj,t)
inherit(P.eh,t)
inherit(H.i7,t)
inherit(H.jA,t)
inherit(H.dx,t)
inherit(H.q,t)
inherit(H.m0,t)
inherit(H.m2,t)
inherit(H.iS,t)
inherit(H.py,t)
inherit(H.oL,t)
inherit(H.jj,t)
inherit(H.pR,t)
inherit(P.ju,t)
inherit(P.jw,t)
inherit(P.cy,t)
inherit(P.jt,t)
inherit(P.d4,t)
inherit(P.nK,t)
inherit(P.dh,t)
inherit(P.jv,t)
inherit(P.p_,t)
inherit(P.pA,t)
inherit(P.eK,t)
inherit(P.q1,t)
inherit(P.po,t)
inherit(P.hA,t)
inherit(P.ns,t)
inherit(P.pt,t)
inherit(P.dS,t)
inherit(P.dO,t)
inherit(P.c3,t)
inherit(P.pW,t)
inherit(P.m9,t)
inherit(P.pu,t)
inherit(P.fE,t)
inherit(P.fF,t)
inherit(P.pY,t)
inherit(P.cM,t)
inherit(P.bD,t)
inherit(P.fG,t)
inherit(P.ci,t)
inherit(P.dm,t)
inherit(P.mK,t)
inherit(P.ji,t)
inherit(P.p9,t)
inherit(P.bH,t)
inherit(P.kB,t)
inherit(P.L,t)
inherit(P.dw,t)
inherit(P.f8,t)
inherit(P.e3,t)
inherit(P.v,t)
inherit(P.dg,t)
inherit(P.eB,t)
inherit(P.jC,t)
inherit(P.on,t)
inherit(P.pO,t)
inherit(W.hZ,t)
inherit(W.j_,t)
inherit(W.i_,t)
inherit(W.oR,t)
inherit(W.hB,t)
inherit(W.dt,t)
inherit(W.iX,t)
inherit(W.hE,t)
inherit(W.pS,t)
inherit(W.ip,t)
inherit(W.e_,t)
inherit(W.pV,t)
inherit(W.pK,t)
inherit(W.jD,t)
inherit(P.jB,t)
inherit(P.ps,t)
inherit(P.pC,t)
inherit(P.dC,t)
inherit(P.e4,t)
inherit(T.hQ,t)
inherit(B.en,t)
inherit(S.jQ,t)
inherit(N.Z,t)
inherit(L.cG,t)
inherit(A.j2,t)
inherit(T.de,t)
inherit(O.da,t)
inherit(M.j0,t)
inherit(M.hS,t)
inherit(X.i9,t)
inherit(X.hT,t)
inherit(M.fL,t)
inherit(D.dp,t)
inherit(D.ik,t)
inherit(D.fQ,t)
inherit(Z.i8,t)
inherit(E.hj,t)
inherit(E.j4,t)
inherit(E.J,t)
inherit(Z.lv,t)
inherit(B.dZ,t)
inherit(A.a9,t)
inherit(A.j1,t)
inherit(X.cZ,t)
inherit(Y.mq,t)
inherit(Z.iZ,t)
inherit(U.c,t)
inherit(Y.ey,t)
inherit(Y.nj,t)
inherit(K.np,t)
inherit(K.mh,t)
inherit(G.nq,t)
inherit(X.F,t)
inherit(G.a5,t)
inherit(B.oI,t)
inherit(A.cN,t)
inherit(A.cl,t)
inherit(Z.cI,t)
inherit(Z.li,t)
inherit(Z.a_,t)
inherit(F.f6,t)
inherit(F.f7,t)
inherit(D.n0,t)
inherit(A.d3,t)
inherit(N.cD,t)
inherit(L.hU,t)
inherit(L.dP,t)
inherit(O.j6,t)
inherit(D.bi,t)
inherit(E.j3,t)
inherit(E.hp,t)
inherit(Q.bK,t)
inherit(Q.h,t)
t=J.a0
inherit(J.lL,t)
inherit(J.iR,t)
inherit(J.fY,t)
inherit(J.ep,t)
inherit(J.f5,t)
inherit(J.eq,t)
inherit(H.h7,t)
inherit(H.fa,t)
inherit(W.fK,t)
inherit(W.hR,t)
inherit(W.hW,t)
inherit(W.hY,t)
inherit(W.iv,t)
inherit(W.W,t)
inherit(W.i3,t)
inherit(W.kp,t)
inherit(W.i4,t)
inherit(W.i5,t)
inherit(W.iw,t)
inherit(W.ix,t)
inherit(W.f0,t)
inherit(W.m4,t)
inherit(W.mz,t)
inherit(W.mA,t)
inherit(W.iy,t)
inherit(W.oV,t)
inherit(W.iz,t)
inherit(P.d1,t)
inherit(P.iA,t)
inherit(P.d2,t)
inherit(P.iB,t)
inherit(P.n9,t)
t=J.fY
inherit(J.mR,t)
inherit(J.eA,t)
inherit(J.er,t)
inherit(R.fR,t)
inherit(J.rH,J.ep)
t=J.f5
inherit(J.iQ,t)
inherit(J.iP,t)
inherit(P.h1,P.fb)
t=P.h1
inherit(H.ht,t)
inherit(W.hy,t)
inherit(W.cS,t)
t=H.ht
inherit(H.kg,t)
inherit(P.jn,t)
t=P.D
inherit(H.P,t)
inherit(H.h3,t)
inherit(H.bF,t)
inherit(H.pQ,t)
inherit(P.iN,t)
t=H.P
inherit(H.es,t)
inherit(H.m1,t)
inherit(P.jx,t)
t=H.es
inherit(H.o0,t)
inherit(H.db,t)
inherit(P.m3,t)
inherit(H.i6,H.h3)
t=P.iO
inherit(H.iU,t)
inherit(H.eC,t)
inherit(Q.oz,t)
t=H.eM
inherit(H.qy,t)
inherit(H.qz,t)
inherit(H.pr,t)
inherit(H.p5,t)
inherit(H.lz,t)
inherit(H.lA,t)
inherit(H.pz,t)
inherit(H.oh,t)
inherit(H.oi,t)
inherit(H.qA,t)
inherit(H.qn,t)
inherit(H.qo,t)
inherit(H.qp,t)
inherit(H.qq,t)
inherit(H.qr,t)
inherit(H.o8,t)
inherit(H.lN,t)
inherit(H.lM,t)
inherit(H.qj,t)
inherit(H.qk,t)
inherit(H.ql,t)
inherit(P.oO,t)
inherit(P.oN,t)
inherit(P.oP,t)
inherit(P.oQ,t)
inherit(P.pa,t)
inherit(P.pi,t)
inherit(P.pe,t)
inherit(P.pf,t)
inherit(P.pg,t)
inherit(P.pc,t)
inherit(P.ph,t)
inherit(P.pb,t)
inherit(P.pl,t)
inherit(P.pm,t)
inherit(P.pk,t)
inherit(P.pj,t)
inherit(P.nN,t)
inherit(P.nL,t)
inherit(P.nM,t)
inherit(P.nO,t)
inherit(P.nV,t)
inherit(P.nW,t)
inherit(P.nT,t)
inherit(P.nU,t)
inherit(P.nX,t)
inherit(P.nY,t)
inherit(P.nR,t)
inherit(P.nS,t)
inherit(P.nP,t)
inherit(P.nQ,t)
inherit(P.oU,t)
inherit(P.oT,t)
inherit(P.pB,t)
inherit(P.q3,t)
inherit(P.q2,t)
inherit(P.q5,t)
inherit(P.qa,t)
inherit(P.pE,t)
inherit(P.pF,t)
inherit(P.pG,t)
inherit(P.pp,t)
inherit(P.ma,t)
inherit(P.q_,t)
inherit(P.pZ,t)
inherit(P.ku,t)
inherit(P.kv,t)
inherit(P.or,t)
inherit(P.oo,t)
inherit(P.op,t)
inherit(P.oq,t)
inherit(P.qd,t)
inherit(P.q7,t)
inherit(P.q6,t)
inherit(P.q8,t)
inherit(P.q9,t)
inherit(W.oX,t)
inherit(W.qb,t)
inherit(W.lq,t)
inherit(W.lr,t)
inherit(W.no,t)
inherit(W.p8,t)
inherit(W.mC,t)
inherit(W.mB,t)
inherit(W.pM,t)
inherit(W.pN,t)
inherit(W.pU,t)
inherit(W.q0,t)
inherit(L.jW,t)
inherit(L.jX,t)
inherit(L.jY,t)
inherit(A.kX,t)
inherit(A.kV,t)
inherit(A.kW,t)
inherit(D.lc,t)
inherit(E.k_,t)
inherit(E.k0,t)
inherit(B.ly,t)
inherit(A.lK,t)
inherit(A.lJ,t)
inherit(M.lT,t)
inherit(M.lU,t)
inherit(M.lV,t)
inherit(M.lW,t)
inherit(Z.mG,t)
inherit(Z.mH,t)
inherit(Z.mF,t)
inherit(Z.mE,t)
inherit(T.nf,t)
inherit(T.ng,t)
inherit(T.ne,t)
inherit(U.nB,t)
inherit(G.lI,t)
inherit(A.qc,t)
inherit(V.qs,t)
inherit(V.qt,t)
inherit(O.qv,t)
inherit(O.qw,t)
inherit(Y.oJ,t)
inherit(D.nI,t)
inherit(D.nJ,t)
inherit(D.n7,t)
inherit(D.n8,t)
inherit(E.nG,t)
inherit(E.mS,t)
inherit(E.mT,t)
inherit(Q.oC,t)
inherit(Q.oB,t)
inherit(Q.oA,t)
inherit(Q.oF,t)
inherit(Q.oD,t)
inherit(Q.o1,t)
inherit(Q.o2,t)
t=H.oS
inherit(H.fn,t)
inherit(H.hG,t)
inherit(H.kk,H.kj)
t=P.eh
inherit(H.iY,t)
inherit(H.lO,t)
inherit(H.ol,t)
inherit(H.ke,t)
inherit(H.nd,t)
inherit(P.hg,t)
inherit(P.dl,t)
inherit(P.aR,t)
inherit(P.jm,t)
inherit(P.ca,t)
inherit(P.bX,t)
inherit(P.km,t)
t=H.o8
inherit(H.nH,t)
inherit(H.fA,t)
t=H.fa
inherit(H.mr,t)
inherit(H.iV,t)
t=H.iV
inherit(H.ha,t)
inherit(H.hb,t)
inherit(H.hc,H.ha)
inherit(H.h8,H.hc)
inherit(H.hd,H.hb)
inherit(H.h9,H.hd)
t=H.h8
inherit(H.ms,t)
inherit(H.mt,t)
t=H.h9
inherit(H.mu,t)
inherit(H.mv,t)
inherit(H.mw,t)
inherit(H.mx,t)
inherit(H.my,t)
inherit(H.iW,t)
inherit(H.he,t)
inherit(P.oM,P.ju)
t=P.jv
inherit(P.oZ,t)
inherit(P.p0,t)
inherit(P.pP,P.pA)
t=P.d4
inherit(P.hw,t)
inherit(W.p6,t)
inherit(P.hx,P.dh)
inherit(P.px,P.hw)
inherit(P.pD,P.q1)
inherit(P.jz,H.q)
inherit(P.nr,P.ns)
inherit(P.pq,P.nr)
inherit(P.jy,P.pq)
inherit(P.hu,P.m9)
t=P.fE
inherit(P.k3,t)
inherit(P.ky,t)
t=P.fF
inherit(P.k4,t)
inherit(P.ou,t)
inherit(P.ot,P.ky)
t=P.ci
inherit(P.U,t)
inherit(P.O,t)
t=P.dl
inherit(P.hk,t)
inherit(P.lw,t)
inherit(P.oY,P.jC)
t=W.fK
inherit(W.ai,t)
inherit(W.iu,t)
inherit(W.md,t)
inherit(W.h6,t)
inherit(W.jr,t)
inherit(W.pL,t)
t=W.ai
inherit(W.cA,t)
inherit(W.ee,t)
inherit(W.i2,t)
inherit(W.fk,t)
inherit(W.p1,t)
t=W.cA
inherit(W.b2,t)
inherit(P.c5,t)
t=W.b2
inherit(W.eJ,t)
inherit(W.jR,t)
inherit(W.k5,t)
inherit(W.eL,t)
inherit(W.fD,t)
inherit(W.ed,t)
inherit(W.i1,t)
inherit(W.kx,t)
inherit(W.ld,t)
inherit(W.ir,t)
inherit(W.ls,t)
inherit(W.f1,t)
inherit(W.lx,t)
inherit(W.lQ,t)
inherit(W.lS,t)
inherit(W.h_,t)
inherit(W.m8,t)
inherit(W.h5,t)
inherit(W.me,t)
inherit(W.mf,t)
inherit(W.mg,t)
inherit(W.mi,t)
inherit(W.mI,t)
inherit(W.mJ,t)
inherit(W.j5,t)
inherit(W.mL,t)
inherit(W.mN,t)
inherit(W.n_,t)
inherit(W.nm,t)
inherit(W.ho,t)
inherit(W.nv,t)
inherit(W.ny,t)
inherit(W.nZ,t)
inherit(W.jl,t)
inherit(W.o6,t)
inherit(W.o7,t)
inherit(W.hs,t)
inherit(W.ob,t)
inherit(W.pn,t)
inherit(W.eN,W.iv)
inherit(W.oW,W.j_)
t=W.W
inherit(W.ko,t)
inherit(W.kz,t)
inherit(W.lj,t)
inherit(W.nC,t)
inherit(W.nD,t)
inherit(W.cp,W.hR)
inherit(W.iC,W.iw)
inherit(W.im,W.iC)
inherit(W.iD,W.ix)
inherit(W.f_,W.iD)
inherit(W.it,W.f_)
inherit(W.em,W.iu)
inherit(W.mj,W.h6)
inherit(W.iE,W.iy)
inherit(W.hf,W.iE)
inherit(W.nt,W.i2)
inherit(W.ov,W.h5)
inherit(W.p2,W.i4)
inherit(W.iF,W.iz)
inherit(W.hD,W.iF)
inherit(W.p3,W.oR)
inherit(W.hv,W.p6)
inherit(W.p7,P.nK)
inherit(W.pT,W.hE)
t=P.c5
inherit(P.dY,t)
inherit(P.e9,t)
inherit(P.kC,t)
inherit(P.kD,t)
inherit(P.kE,t)
inherit(P.kF,t)
inherit(P.kG,t)
inherit(P.kH,t)
inherit(P.kI,t)
inherit(P.kJ,t)
inherit(P.kK,t)
inherit(P.kL,t)
inherit(P.kM,t)
inherit(P.kN,t)
inherit(P.kO,t)
inherit(P.kP,t)
inherit(P.kQ,t)
inherit(P.kR,t)
inherit(P.le,t)
inherit(P.mb,t)
inherit(P.mc,t)
inherit(P.mQ,t)
inherit(P.hn,t)
inherit(P.o_,t)
inherit(P.o5,t)
inherit(P.ow,t)
inherit(P.hz,t)
inherit(P.pH,t)
inherit(P.pI,t)
inherit(P.pJ,t)
t=P.dY
inherit(P.jO,t)
inherit(P.lh,t)
inherit(P.ds,t)
inherit(P.lt,t)
inherit(P.o3,t)
inherit(P.ez,t)
inherit(P.os,t)
inherit(P.iG,P.iA)
inherit(P.lY,P.iG)
inherit(P.iH,P.iB)
inherit(P.mD,P.iH)
inherit(P.n3,P.ds)
inherit(P.od,P.ez)
inherit(T.hP,P.iN)
t=B.en
inherit(S.jP,t)
inherit(M.k1,t)
inherit(A.ki,t)
inherit(M.kl,t)
inherit(V.kq,t)
inherit(U.kS,t)
inherit(N.lP,t)
inherit(F.mo,t)
inherit(G.mX,t)
inherit(Q.nc,t)
inherit(N.nx,t)
inherit(D.o9,t)
inherit(V.oa,t)
inherit(F.oH,t)
t=N.Z
inherit(T.kn,t)
inherit(Q.eO,t)
inherit(R.ev,t)
t=T.kn
inherit(K.bG,t)
inherit(S.bw,t)
inherit(T.bV,t)
inherit(M.bt,t)
inherit(A.hi,A.j2)
inherit(L.aj,A.hi)
t=T.de
inherit(O.k2,t)
inherit(Z.kb,t)
inherit(Y.lk,t)
inherit(Y.ll,t)
inherit(B.lo,t)
inherit(S.lR,t)
inherit(Z.m5,t)
inherit(S.m6,t)
inherit(U.m7,t)
inherit(E.mn,t)
inherit(V.mM,t)
inherit(N.mZ,t)
inherit(N.nb,t)
inherit(E.nh,t)
inherit(Y.nk,t)
inherit(L.nl,t)
inherit(S.nn,t)
inherit(R.o4,t)
inherit(U.oe,t)
inherit(E.oy,t)
inherit(M.oG,t)
t=O.da
inherit(O.hq,t)
inherit(O.ec,t)
t=O.hq
inherit(Y.oc,t)
inherit(Y.kc,t)
inherit(M.fZ,M.j0)
t=M.fZ
inherit(L.k6,t)
inherit(R.f9,t)
t=L.cG
inherit(T.k8,t)
inherit(T.ka,t)
inherit(U.kr,t)
inherit(Z.kt,t)
inherit(L.kT,t)
inherit(O.lf,t)
inherit(T.ln,t)
inherit(X.lp,t)
inherit(Q.lX,t)
inherit(K.lZ,t)
inherit(G.m_,t)
inherit(L.mk,t)
inherit(V.ml,t)
inherit(S.mm,t)
inherit(E.n1,t)
inherit(L.n2,t)
inherit(Z.na,t)
inherit(Y.ni,t)
inherit(L.nu,t)
inherit(O.nw,t)
inherit(N.nz,t)
inherit(U.nF,t)
inherit(N.of,t)
inherit(Q.ox,t)
inherit(S.hX,S.bw)
t=Q.eO
inherit(Q.lm,t)
inherit(Q.kw,t)
inherit(D.lb,D.fQ)
t=O.ec
inherit(V.lg,t)
inherit(Q.lu,t)
inherit(M.nE,t)
inherit(B.oK,t)
inherit(E.cx,E.j4)
t=E.J
inherit(E.fz,t)
inherit(E.jZ,t)
inherit(Q.mW,Q.lu)
inherit(A.jk,A.j1)
t=E.cx
inherit(F.mp,t)
inherit(Q.b6,t)
t=F.mp
inherit(F.dT,t)
inherit(F.jh,t)
inherit(F.z,t)
inherit(U.ab,U.c)
t=R.ev
inherit(R.a4,t)
inherit(R.X,t)
inherit(R.ac,t)
inherit(R.dv,t)
inherit(R.fg,t)
inherit(R.bB,R.ac)
t=Y.ey
inherit(Y.T,t)
inherit(Y.a6,t)
inherit(Y.k7,t)
inherit(Y.bx,t)
inherit(Y.kf,t)
inherit(Y.j7,t)
inherit(Y.iq,t)
inherit(Y.j8,t)
inherit(Y.eg,t)
t=Y.T
inherit(Y.cW,t)
inherit(Y.bE,t)
inherit(U.ah,A.a9)
t=G.a5
inherit(G.aX,t)
inherit(G.bI,t)
inherit(G.d,t)
inherit(G.ak,G.bI)
inherit(A.fC,A.cN)
t=D.bi
inherit(D.js,t)
inherit(D.n6,t)
inherit(E.cL,E.j3)
inherit(E.hh,E.cL)
inherit(E.fd,E.hh)
t=E.fd
inherit(E.j9,t)
inherit(E.kd,t)
t=Q.bK
inherit(Q.jo,t)
inherit(Q.fh,t)
inherit(Q.fi,Q.jo)
inherit(Q.cc,Q.fh)
t=Q.cc
inherit(Q.jq,t)
inherit(Q.jp,t)
inherit(Q.hr,t)
mixin(H.ht,H.om)
mixin(H.ha,P.c3)
mixin(H.hc,H.io)
mixin(H.hb,P.c3)
mixin(H.hd,H.io)
mixin(P.fb,P.c3)
mixin(P.hu,P.pW)
mixin(W.iv,W.i_)
mixin(W.j_,W.i_)
mixin(W.iw,P.c3)
mixin(W.iC,W.dt)
mixin(W.ix,P.c3)
mixin(W.iD,W.dt)
mixin(W.iy,P.c3)
mixin(W.iE,W.dt)
mixin(W.iz,P.c3)
mixin(W.iF,W.dt)
mixin(P.iA,P.c3)
mixin(P.iG,W.dt)
mixin(P.iB,P.c3)
mixin(P.iH,W.dt)
mixin(E.j4,E.hp)
mixin(A.j1,P.dO)
mixin(M.j0,D.dp)
mixin(A.j2,P.dO)
mixin(E.j3,P.dO)
mixin(Q.jo,P.c3)
mixin(Q.fh,P.dO)})();(function constants(){C.A=W.eL.prototype
C.f=W.ed.prototype
C.t=W.hW.prototype
C.l=W.i1.prototype
C.U=W.em.prototype
C.V=J.a0.prototype
C.a=J.ep.prototype
C.n=J.iP.prototype
C.b=J.iQ.prototype
C.E=J.iR.prototype
C.e=J.f5.prototype
C.d=J.eq.prototype
C.a1=J.er.prototype
C.a9=W.hf.prototype
C.L=W.j5.prototype
C.M=J.mR.prototype
C.i=W.ho.prototype
C.O=W.jl.prototype
C.z=J.eA.prototype
C.Q=new P.k4(!1)
C.P=new P.k3(C.Q)
C.m=new W.hZ()
C.R=new P.mK()
C.S=new P.p_()
C.B=new P.ps()
C.h=new P.pD()
C.k=new W.pV()
C.C=new L.hU(0,"CanonLevel.CANON_ONLY")
C.T=new L.hU(1,"CanonLevel.FANON_ONLY")
C.D=new P.dm(0)
C.W=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.F=function(hooks) { return hooks; }
C.X=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.Y=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.Z=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.G=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.a_=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.a0=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.H=H.a(makeConstList([127,2047,65535,1114111]),[P.O])
C.o=makeConstList([0,0,32776,33792,1,10240,0,0])
C.a2=H.a(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.v])
C.p=makeConstList([0,0,65490,45055,65535,34815,65534,18431])
C.q=makeConstList([0,0,26624,1023,65534,2047,65534,2047])
C.a3=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.a4=makeConstList([])
C.a6=makeConstList([0,0,32722,12287,65534,34815,65534,18431])
C.I=makeConstList([0,0,24576,1023,65534,34815,65534,18431])
C.J=makeConstList([0,0,32754,11263,65534,34815,65534,18431])
C.K=makeConstList([0,0,65490,12287,65535,34815,65534,18431])
C.u=H.a(makeConstList(["bind","if","ref","repeat","syntax"]),[P.v])
C.v=H.a(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.v])
C.w=new F.f6(0,"LogLevel.ERROR")
C.x=new F.f6(1,"LogLevel.WARN")
C.j=new F.f6(2,"LogLevel.INFO")
C.a7=new F.f6(3,"LogLevel.VERBOSE")
C.a5=H.a(makeConstList([]),[P.v])
C.a8=new H.kk(0,{},C.a5,[P.v,P.v])
C.c=new E.hj(0,"ProphecyState.NONE")
C.N=new E.hj(1,"ProphecyState.ACTIVE")
C.aa=new E.hj(2,"ProphecyState.FULLFILLED")
C.ab=H.c1("dC")
C.ac=H.c1("FK")
C.y=H.c1("FL")
C.ad=H.c1("FM")
C.ae=H.c1("FN")
C.af=H.c1("FP")
C.ag=H.c1("FQ")
C.ah=H.c1("FR")
C.ai=H.c1("uV")
C.aj=H.c1("dw")
C.ak=H.c1("v")
C.al=H.c1("FT")
C.am=H.c1("FU")
C.an=H.c1("FV")
C.ao=H.c1("e4")
C.ap=H.c1("cM")
C.aq=H.c1("U")
C.ar=H.c1("O")
C.as=H.c1("ci")
C.r=new P.ot(!1)})();(function staticFields(){$.v8="$cachedFunction"
$.v9="$cachedInvocation"
$.dE=0
$.fB=null
$.tM=null
$.tl=null
$.w8=null
$.wr=null
$.qe=null
$.qm=null
$.tq=null
$.fp=null
$.hH=null
$.hI=null
$.t9=!1
$.b7=C.h
$.u0=0
$.dV=null
$.qP=null
$.tZ=null
$.tY=null
$.tV=null
$.tU=null
$.tT=null
$.tW=null
$.tS=null
$.jT=null
$.jU=null
$.x1=null
$.qK=null
$.qJ=null
$.x5=null
$.xa=null
$.tK=null
$.qL=null
$.xc=null
$.x6=null
$.x8=null
$.x2=null
$.x9=null
$.xb=null
$.xd=null
$.xf=null
$.xg=null
$.xe=null
$.x7=null
$.x3=null
$.xh=null
$.x4=null
$.xi=null
$.jS=null
$.ao="accent"
$.aA="aspect1"
$.az="aspect2"
$.ax="shoe1"
$.aw="shoe2"
$.aC="cloak1"
$.aD="cloak2"
$.aB="cloak3"
$.av="shirt1"
$.au="shirt2"
$.aF="pants1"
$.aE="pants2"
$.ae=1300
$.j=3
$.l=2
$.E=1
$.w=0.1
$.xO=1
$.xN=-1
$.r5=null
$.dW=null
$.u3=null
$.ej=null
$.eX=null
$.ie=null
$.qY=null
$.l3=null
$.l7=null
$.ig=null
$.id=null
$.u5=null
$.l8=null
$.eT=null
$.dL=null
$.u4=null
$.kY=null
$.l9=null
$.eV=null
$.r2=null
$.r1=null
$.u6=null
$.fP=null
$.eP=null
$.co=null
$.d8=null
$.eU=null
$.l6=null
$.cd=null
$.cm=null
$.r_=null
$.fN=null
$.ei=null
$.xL=null
$.fM=null
$.d9=null
$.dM=null
$.ij=null
$.dn=null
$.eW=null
$.c7=null
$.l5=null
$.u2=null
$.be=null
$.cw=null
$.cP=null
$.cv=null
$.ii=null
$.cn=null
$.dH=null
$.d7=null
$.eS=null
$.dG=null
$.dI=null
$.kZ=null
$.el=null
$.fO=null
$.l4=null
$.u1=null
$.cO=null
$.cQ=null
$.bn=null
$.eQ=null
$.dX=null
$.r4=null
$.l0=null
$.ih=null
$.l_=null
$.cB=null
$.r6=null
$.qZ=null
$.r7=null
$.eR=null
$.cH=null
$.dK=null
$.dJ=null
$.eY=null
$.r0=null
$.r3=null
$.u7=null
$.l1=null
$.l2=null
$.ek=null
$.ra=null
$.xP=null
$.uc=null
$.ub=null
$.xQ=null
$.r9=null
$.is=0
$.y_=null
$.xT=null
$.xU=null
$.xV=null
$.xW=null
$.xX=null
$.xY=null
$.xZ=null
$.y0=null
$.y1=null
$.y2=null
$.y3=null
$.y4=null
$.y5=null
$.iI=null
$.rO=null
$.rP=null
$.rQ=null
$.rR=null
$.fc=null
$.Dg=null
$.Fd=null
$.FC=null
$.k="PLAYER1TAG"
$.e1="PLAYER2TAG"
$.y="DENIZENTAG"
$.t="CONSORTTAG"
$.R="CONSORTSOUNDTAG"
$.b0="MCGUFFINTAG"
$.am="TAGPHYSICALMCGUFFIN"
$.cr="TAGWEAPON"
$.DS=null
$.E2=null
$.vn=null
$.DR=null
$.DV=null
$.DZ=null
$.DX=null
$.E4=null
$.E3=null
$.DY=null
$.vp=null
$.DU=null
$.vo=null
$.E0=null
$.E_=null
$.E1=null
$.DQ=null
$.DP=null
$.jf=null
$.DW=null
$.DT=null
$.DO=null
$.we=!1
$.tg=null
$.fs=!1
$.rZ=null
$.E9=!0
$.E8=null
$.nA=null
$.Ej=13
$.aP=3
$.bW=2
$.aQ=1
$.Ei="Class"
$.Eh="Aspect"
$.vx="Interest"
$.rD=0
$.K=1
$.a8=3
$.H=4
$.rC=6
$.rE=7
$.ag=8
$.r=9
$.o=10
$.us=null
$.f4=null
$.ro=null
$.rz=null
$.rv=null
$.re=null
$.rj=null
$.ru=null
$.fW=null
$.uq=null
$.uO=null
$.ul=null
$.ur=null
$.rk=null
$.rt=null
$.uQ=null
$.uS=null
$.rf=null
$.iL=null
$.iJ=null
$.aT=null
$.uH=null
$.rd=null
$.uB=null
$.f3=null
$.uk=null
$.uT=null
$.uP=null
$.uN=null
$.rr=null
$.lC=null
$.eo=null
$.uR=null
$.rh=null
$.rl=null
$.iM=null
$.uL=null
$.du=null
$.fV=null
$.rB=null
$.uM=null
$.rA=null
$.rx=null
$.ry=null
$.lE=null
$.iK=null
$.yw=null
$.uu=null
$.rq=null
$.uK=null
$.uJ=null
$.C=null
$.uo=null
$.lB=null
$.bQ=null
$.bh=null
$.bS=null
$.a2=null
$.aU=null
$.c9=null
$.Q=null
$.S=null
$.aM=null
$.bf=null
$.bZ=null
$.bo=null
$.br=null
$.ce=null
$.b5=null
$.bA=null
$.bT=null
$.a7=null
$.aL=null
$.bg=null
$.b1=null
$.al=null
$.c8=null
$.b_=null
$.aI=null
$.c_=null
$.ba=null
$.at=null
$.by=null
$.c2=null
$.aS=null
$.bs=null
$.bq=null
$.ad=null
$.bR=null
$.af=null
$.bl=null
$.bz=null
$.b3=null
$.bk=null
$.aN=null
$.bj=null
$.aV=null
$.a1=null
$.aJ=null
$.aO=null
$.b9=null
$.aH=null
$.ay=null
$.aa=null
$.Y=null
$.V=null
$.ap=null
$.b8=null
$.bp=null
$.bb=null
$.zQ=null
$.Cv=null
$.D2=null
$.zl=null
$.Cs=null
$.zR=null
$.uh=null
$.CH=null
$.AQ=null
$.zM=null
$.yq=null
$.Bq=null
$.rw=null
$.um=null
$.BP=null
$.zi=null
$.Az=null
$.zg=null
$.rg=null
$.z1=null
$.A3=null
$.zq=null
$.AJ=null
$.CP=null
$.zS=null
$.ri=null
$.AK=null
$.zo=null
$.z7=null
$.uG=null
$.yj=null
$.ui=null
$.At=null
$.rp=null
$.B4=null
$.AZ=null
$.yn=null
$.za=null
$.BZ=null
$.yp=null
$.Cr=null
$.Ay=null
$.zx=null
$.BJ=null
$.Cl=null
$.rn=null
$.AU=null
$.BG=null
$.zp=null
$.yc=null
$.CS=null
$.AC=null
$.z6=null
$.CG=null
$.B7=null
$.zd=null
$.Cq=null
$.zH=null
$.C6=null
$.C7=null
$.yl=null
$.B0=null
$.zr=null
$.zB=null
$.D6=null
$.lH=null
$.BX=null
$.Co=null
$.lD=null
$.yW=null
$.Bh=null
$.Bl=null
$.yi=null
$.zG=null
$.Cp=null
$.B6=null
$.CJ=null
$.BL=null
$.Bm=null
$.uz=null
$.Ca=null
$.CX=null
$.Cu=null
$.Ah=null
$.By=null
$.Ai=null
$.C_=null
$.CV=null
$.AI=null
$.zD=null
$.A_=null
$.yM=null
$.BH=null
$.zY=null
$.A5=null
$.zt=null
$.C9=null
$.f2=null
$.Bb=null
$.uw=null
$.Aj=null
$.Ag=null
$.D_=null
$.yS=null
$.BV=null
$.BW=null
$.BU=null
$.BT=null
$.Ch=null
$.A6=null
$.B1=null
$.Ck=null
$.AT=null
$.Bc=null
$.zm=null
$.CU=null
$.B_=null
$.zJ=null
$.zK=null
$.Bk=null
$.D5=null
$.Aw=null
$.CT=null
$.uD=null
$.C5=null
$.AG=null
$.lG=null
$.Ar=null
$.BA=null
$.yR=null
$.zN=null
$.C1=null
$.B2=null
$.CO=null
$.uC=null
$.Ba=null
$.yY=null
$.zj=null
$.Bw=null
$.CB=null
$.C0=null
$.rc=null
$.uI=null
$.Cc=null
$.CW=null
$.Af=null
$.yA=null
$.yJ=null
$.Cz=null
$.Be=null
$.AR=null
$.Bf=null
$.Cw=null
$.As=null
$.ym=null
$.A4=null
$.AP=null
$.Ce=null
$.zX=null
$.yQ=null
$.BR=null
$.BS=null
$.CM=null
$.C3=null
$.rs=null
$.un=null
$.ze=null
$.up=null
$.An=null
$.ux=null
$.BC=null
$.AY=null
$.BN=null
$.rm=null
$.lF=null
$.uv=null
$.zz=null
$.A1=null
$.uE=null
$.ut=null
$.z9=null
$.CD=null
$.z2=null
$.Bo=null
$.Ak=null
$.Cj=null
$.AS=null
$.yx=null
$.Al=null
$.zw=null
$.Bs=null
$.AB=null
$.AX=null
$.AH=null
$.AL=null
$.BQ=null
$.BM=null
$.yf=null
$.CA=null
$.BF=null
$.zn=null
$.zs=null
$.A0=null
$.Cx=null
$.zU=null
$.AD=null
$.yE=null
$.zO=null
$.zv=null
$.Bg=null
$.zE=null
$.BY=null
$.AF=null
$.uj=null
$.BB=null
$.Am=null
$.zV=null
$.yd=null
$.yk=null
$.Bd=null
$.Bn=null
$.AA=null
$.Ad=null
$.CR=null
$.yH=null
$.zW=null
$.AE=null
$.zk=null
$.Cg=null
$.z8=null
$.C2=null
$.yF=null
$.CC=null
$.AN=null
$.yz=null
$.BK=null
$.Bx=null
$.zf=null
$.A7=null
$.yX=null
$.Cy=null
$.Ap=null
$.CN=null
$.yZ=null
$.A8=null
$.z_=null
$.zh=null
$.BE=null
$.zb=null
$.Aq=null
$.B3=null
$.yT=null
$.Ci=null
$.D1=null
$.C8=null
$.AV=null
$.Cf=null
$.AW=null
$.ys=null
$.ye=null
$.AO=null
$.yC=null
$.z0=null
$.yt=null
$.yy=null
$.B9=null
$.Bt=null
$.CF=null
$.Ao=null
$.D0=null
$.BI=null
$.uF=null
$.uA=null
$.uy=null
$.z4=null
$.Ab=null
$.AM=null
$.Bi=null
$.Cb=null
$.yh=null
$.CY=null
$.zC=null
$.Cm=null
$.zu=null
$.yr=null
$.yU=null
$.yL=null
$.D4=null
$.yV=null
$.zF=null
$.z3=null
$.CL=null
$.Cd=null
$.CE=null
$.yg=null
$.BO=null
$.Au=null
$.Ax=null
$.CQ=null
$.Cn=null
$.A2=null
$.zL=null
$.Bv=null
$.CZ=null
$.zP=null
$.Av=null
$.yP=null
$.Ae=null
$.Ac=null
$.C4=null
$.Bu=null
$.A9=null
$.yK=null
$.Ct=null
$.Bj=null
$.CI=null
$.D3=null
$.yv=null
$.yu=null
$.yG=null
$.zI=null
$.BD=null
$.zc=null
$.Bz=null
$.zy=null
$.yo=null
$.yI=null
$.B8=null
$.zA=null
$.Br=null
$.yO=null
$.zT=null
$.CK=null
$.yB=null
$.zZ=null
$.Bp=null
$.yN=null
$.Aa=null
$.B5=null
$.yD=null
$.z5=null
$.eZ="OWNER"
$.Fa=!1
$.jG=!1
$.F6=!1
$.wp=!1
$.wg=!1
$.uX=!1
$.tp=0
$.qi=0
$.wl=null
$.wt=""
$.mV=73
$.mU=74
$.t_=null
$.Ec=null
$.u=null
$.an=null
$.b4=null
$.aY=null
$.cb=null
$.aZ=null
$.bu=null
$.bC=null
$.c4=null
$.df=null
$.cf=null
$.vt=!1})();(function lazyInitializers(){lazy($,"tP","$get$tP",function(){return H.wj("_$dart_dartClosure")})
lazy($,"rJ","$get$rJ",function(){return H.wj("_$dart_js")})
lazy($,"uf","$get$uf",function(){return H.ya()})
lazy($,"ug","$get$ug",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.u0
$.u0=t+1
t="expando$key$"+t}return new P.kB(null,t,[P.O])})
lazy($,"vy","$get$vy",function(){return H.dQ(H.ok({
toString:function(){return"$receiver$"}}))})
lazy($,"vz","$get$vz",function(){return H.dQ(H.ok({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"vA","$get$vA",function(){return H.dQ(H.ok(null))})
lazy($,"vB","$get$vB",function(){return H.dQ(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"vF","$get$vF",function(){return H.dQ(H.ok(void 0))})
lazy($,"vG","$get$vG",function(){return H.dQ(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"vD","$get$vD",function(){return H.dQ(H.vE(null))})
lazy($,"vC","$get$vC",function(){return H.dQ(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"vI","$get$vI",function(){return H.dQ(H.vE(void 0))})
lazy($,"vH","$get$vH",function(){return H.dQ(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"t5","$get$t5",function(){return P.Eo()})
lazy($,"fS","$get$fS",function(){var t,s
t=P.dw
s=new P.cy(0,P.En(),null,[t])
s.i4(null,t)
return s})
lazy($,"hJ","$get$hJ",function(){return[]})
lazy($,"vO","$get$vO",function(){return H.Dd([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2])})
lazy($,"w6","$get$w6",function(){return P.ET()})
lazy($,"vR","$get$vR",function(){return P.iT(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"t8","$get$t8",function(){return P.rL()})
lazy($,"eb","$get$eb",function(){return P.cK(P.O,L.cG)})
lazy($,"bY","$get$bY",function(){return H.a([],[S.bw])})
lazy($,"tQ","$get$tQ",function(){return H.a(["Yaldabaoth","y'all'd'vebaoth","HairSeven","Javascript",'<span class = "void">Nobrop, the </span>Null','<span class = "void">Paraxalan, The </span>Ever-Searching',"<span class = 'void'>Algebron, The </span>Dilletant",'<span class = "void">Doomod, The </span>Wanderer',"J\xf6rmungandr","Apollyon","Siseneg","Borunam",'<span class = "void">Shogun the, Glitch</span>','<span class = "void">Jadeacher the,</span>Researcher',"Karmiution",'<span class = "void">Authorot, the</span> Robot','<span class = "void">Abbiejean, the </span>Scout','<span class = "void">Aspiratcher, The</span> Librarian','<span class = "void">Recurscker, The</span>Hollow One',"Insurorracle",'<span class = "void">Maniomnia, the </span>Dreamwaker',"Kazerad","Shiva","Goliath"],[P.v])})
lazy($,"tR","$get$tR",function(){return H.a(["Eriotur","Abraxas","Succra","Watojo","Bluhubit","Swefrat","Helaja","Fischapris"],[P.v])})
lazy($,"ib","$get$ib",function(){return D.dq("smell",A.qX($.fN,1),T.bV)})
lazy($,"ic","$get$ic",function(){return D.dq("sound",A.qX($.dK,1),M.bt)})
lazy($,"ia","$get$ia",function(){return D.dq("ambiance",A.qX($.ii,1),K.bG)})
lazy($,"kU","$get$kU",function(){return D.dq("consort",A.xJ(H.a([A.xI($.u6,1),A.xM()],[{func:1,v:true,args:[D.dp,[Q.bK,N.Z],E.cx,L.dP,A.d3]}])),S.bw)})
lazy($,"qQ","$get$qQ",function(){return D.dq("denizen",null,Q.eO)})
lazy($,"qV","$get$qV",function(){return D.dq("quest chain",null,R.ev)})
lazy($,"qU","$get$qU",function(){return D.dq("pre denizen quest chain",null,R.a4)})
lazy($,"qR","$get$qR",function(){return D.dq("denizen quest chain",null,R.X)})
lazy($,"qT","$get$qT",function(){return D.dq("post denizen quest chain",null,R.ac)})
lazy($,"qS","$get$qS",function(){return D.dq("moon quest chain",null,R.dv)})
lazy($,"qW","$get$qW",function(){return D.dq("battlefield quest chain",null,R.fg)})
lazy($,"la","$get$la",function(){var t=new D.ik(P.cK(P.v,D.fQ))
t.aX($.$get$ib())
t.aX($.$get$ic())
t.aX($.$get$ia())
return t})
lazy($,"il","$get$il",function(){var t=D.r8($.$get$la())
t.aX($.$get$kU())
t.aX($.$get$qQ())
t.aX($.$get$qV())
t.aX($.$get$qU())
t.aX($.$get$qR())
t.aX($.$get$qT())
return t})
lazy($,"u8","$get$u8",function(){var t=D.r8($.$get$la())
t.aX($.$get$qS())
t.aX($.$get$kU())
return t})
lazy($,"u9","$get$u9",function(){var t=D.r8($.$get$la())
t.aX($.$get$qW())
t.aX($.$get$kU())
return t})
lazy($,"ua","$get$ua",function(){return P.cK(P.v,Z.i8)})
lazy($,"fT","$get$fT",function(){return P.cK(P.O,B.en)})
lazy($,"rF","$get$rF",function(){return H.a([],[A.a9])})
lazy($,"e2","$get$e2",function(){return P.cK(P.O,T.de)})
lazy($,"wm","$get$wm",function(){return A.DJ(null)})
lazy($,"aq","$get$aq",function(){return H.a([],[U.ah])})
lazy($,"b","$get$b",function(){return P.a3(null,null,null,G.a5)})
lazy($,"n4","$get$n4",function(){return A.dF(16777215,!1)})
lazy($,"vm","$get$vm",function(){return A.dF(16711680,!1)})
lazy($,"vj","$get$vj",function(){return A.dF(65280,!1)})
lazy($,"vk","$get$vk",function(){return A.dF(65322,!1)})
lazy($,"vi","$get$vi",function(){return A.dF(4342338,!1)})
lazy($,"vh","$get$vh",function(){return A.dF(12895428,!1)})
lazy($,"jc","$get$jc",function(){return A.dF(3223857,!1)})
lazy($,"jd","$get$jd",function(){return A.dF(2105376,!1)})
lazy($,"je","$get$je",function(){var t,s,r
t=P.v
s=A.cl
r=P.O
t=new L.aj(P.n(null,null,null,t,s),P.n(null,null,null,r,s),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
t.sdR("#FEFD49")
t.sdQ("#FEC910")
t.shn("#10E0FF")
t.shm("#00A4BB")
t.sdU("#FA4900")
t.sdV("#E94200")
t.sdT("#C33700")
t.sdq("#FF8800")
t.sdn("#D66E04")
t.sec("#E76700")
t.seb("#CA5B00")
return t})
lazy($,"vl","$get$vl",function(){var t,s,r
t=P.v
s=A.cl
r=P.O
t=new L.aj(P.n(null,null,null,t,s),P.n(null,null,null,r,s),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
t.sdR("#FFFF00")
t.sdQ("#FFC935")
t.sdU("#FFCC00")
t.sdV("#FF9B00")
t.sdT("#C66900")
t.sdq("#FFD91C")
t.sdn("#FFE993")
t.sec("#FFB71C")
t.seb("#C67D00")
return t})
lazy($,"vg","$get$vg",function(){var t,s,r
t=P.v
s=A.cl
r=P.O
t=new L.aj(P.n(null,null,null,t,s),P.n(null,null,null,r,s),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
t.sdR("#F092FF")
t.sdQ("#D456EA")
t.sdU("#C87CFF")
t.sdV("#AA00FF")
t.sdT("#6900AF")
t.sdq("#DE00FF")
t.sdn("#E760FF")
t.sec("#B400CC")
t.seb("#770E87")
return t})
lazy($,"rN","$get$rN",function(){return A.ef(255,0,255,255)})
lazy($,"mP","$get$mP",function(){return F.Dc("Path Utils",!1)})
lazy($,"mO","$get$mO",function(){return P.cK(P.eB,P.O)})
lazy($,"t3","$get$t3",function(){var t=[P.v]
return P.A([0,H.a(["\u030d","\u030e","\u0304","\u0305","\u033f","\u0311","\u0306","\u0310","\u0352","\u0357","\u0351","\u0307","\u0308","\u030a","\u0342","\u0343","\u0344","\u034a","\u034b","\u034c","\u0303","\u0302","\u030c","\u0350","\u0300","\u0301","\u030b","\u030f","\u0312","\u0313","\u0314","\u033d","\u0309","\u0363","\u0364","\u0365","\u0366","\u0367","\u0368","\u0369","\u036a","\u036b","\u036c","\u036d","\u036e","\u036f","\u033e","\u035b","\u0346","\u031a"],t),1,H.a(["\u0316","\u0317","\u0318","\u0319","\u031c","\u031d","\u031e","\u031f","\u0320","\u0324","\u0325","\u0326","\u0329","\u032a","\u032b","\u032c","\u032d","\u032e","\u032f","\u0330","\u0331","\u0332","\u0333","\u0339","\u033a","\u033b","\u033c","\u0345","\u0347","\u0348","\u0349","\u034d","\u034e","\u0353","\u0354","\u0355","\u0356","\u0359","\u035a","\u0323"],t),2,H.a(["\u0315","\u031b","\u0340","\u0341","\u0358","\u0321","\u0322","\u0327","\u0328","\u0334","\u0335","\u0336","\u034f","\u035c","\u035d","\u035e","\u035f","\u0360","\u0362","\u0338","\u0337","\u0361","\u0489"],t)],P.O,[P.L,P.v])})
lazy($,"wi","$get$wi",function(){return H.a(["NIPPER CADET","PESKY URCHIN","BRAVESPROUT","JUVESQUIRT","RUMPUS BUSTER","CHAMP-FRY","ANKLEBITER","CALLOUSED TENDERFOOT","RASCALSPRAT","GRITTY MIDGET","BRITCHES RIPPER","ALIEN URCHIN","NESTING NEWB"],[P.v])})
lazy($,"eG","$get$eG",function(){return H.a(["#A10000","#a25203","#a1a100","#658200","#416600","#078446","#008282","#004182","#0021cb","#631db4","#610061","#99004d"],[P.v])})
lazy($,"tw","$get$tw",function(){var t,s
t=[P.v]
s=H.a(["8=D",">->","//","tumut",")","><>","(","$","?","=begin","=end"],t)
C.a.a4(s,H.a(["<3","<3<","<>","c3<","{","}","<String>[","]","'",".",",","~","!","~","^","&","#","@","%","*"],t))
return s})
lazy($,"tj","$get$tj",function(){var t=[P.v]
return H.a([H.a(["calm","clam"],t),H.a(["ass","bass"],t),H.a(["god","glub"],t),H.a(["god","cod"],t),H.a(["fuck","glub"],t),H.a(["really","reely"],t),H.a(["kill","krill"],t),H.a(["thing","fin"],t),H.a(["well","whale"],t),H.a(["purpose","porpoise"],t),H.a(["better","betta"],t),H.a(["help","kelp"],t),H.a(["see","sea"],t),H.a(["friend","frond"],t),H.a(["crazy","craysea"],t),H.a(["kid","squid"],t),H.a(["hell","shell"],t)],[[P.L,P.v]])})
lazy($,"tf","$get$tf",function(){var t,s,r
t=[P.v]
s=[[P.L,P.v]]
r=H.a([H.a(["\\well\\b","welp"],t),H.a(["pro","bro"],t),H.a(["guess","suppose"],t),H.a(["S\\b","Z"],t),H.a(["oh my god","omg"],t),H.a(["like","liek"],t),H.a(["ing","in"],t),H.a(["have to","hafta"],t),H.a(["want to","wanna"],t),H.a(["going to","gonna"],t),H.a(["i'm","i am"],t),H.a(["you're","you are"],t),H.a(["we're","we are"],t),H.a(["forever","5ever"],t),H.a(["ever","evah"],t),H.a(["er","ah"],t),H.a(["to","ta"],t)],s)
C.a.a4(r,H.a([H.a(["I'm","Imma"],t),H.a(["don't know","dunno"],t),H.a(["school","skool"],t),H.a(["the","teh"],t),H.a(["aren't","aint"],t),H.a(["ie","ei"],t),H.a(["though","tho"],t),H.a(["you","u"],t),H.a(["right","rite"],t)],s))
C.a.a4(r,H.a([H.a(["n't"," not"],t),H.a(["'m'"," am"],t),H.a(["kind of","kinda"],t),H.a(["okay","ok"],t),H.a(["\\band\\b","&"],t),H.a(["\\bat\\b","@"],t),H.a(["okay","okey dokey"],t)],s))
return r})
lazy($,"tA","$get$tA",function(){var t=[P.v]
return H.a([H.a(["\\bvery\\b","adequately"],t),H.a(["\\bvery\\b","really"],t),H.a(["\\bvery\\b","super"],t),H.a(["\\bvery\\b","amazingly"],t),H.a(["\\bvery\\b","hella"],t),H.a(["\\bvery\\b","extremely"],t),H.a(["\\bvery\\b","absolutely"],t),H.a(["\\bvery\\b","mega"],t),H.a(["\\bvery\\b ","extra"],t),H.a(["\\bvery\\b","ultra"],t),H.a(["\\bvery\\b","hecka"],t),H.a(["\\bvery\\b","totes"],t)],[[P.L,P.v]])})
lazy($,"tm","$get$tm",function(){var t=[P.v]
return H.a([H.a(["\\bgood\\b","good"],t),H.a(["\\bgood\\b","agreeable"],t),H.a(["\\bgood\\b","marvelous"],t),H.a(["\\bgood\\b","ace"],t),H.a(["\\bgood\\b","wonderful"],t),H.a(["\\bgood\\b","sweet"],t),H.a(["\\bgood\\b","dope"],t),H.a(["\\bgood\\b","awesome"],t),H.a(["\\bgood\\b","great"],t),H.a(["\\bgood\\b","radical"],t),H.a(["\\bgood\\b","perfect"],t),H.a(["\\bgood\\b","amazing"],t),H.a(["\\bgood\\b","super good"],t),H.a(["\\bgood\\b","acceptable"],t)],[[P.L,P.v]])})
lazy($,"wb","$get$wb",function(){var t=[P.v]
return H.a([H.a(["asshole","asshat"],t),H.a(["asshole","dickhead"],t),H.a(["asshole","fucknut"],t),H.a(["asshole","pukestain"],t),H.a(["asshole","dirtbag"],t),H.a(["asshole","fuckhead"],t),H.a(["asshole","asshole"],t),H.a(["asshole","dipshit"],t),H.a(["asshole","garbage person"],t),H.a(["asshole","fucker"],t),H.a(["asshole","poopy head"],t),H.a(["asshole","shit sniffer"],t),H.a(["asshole","jerk"],t),H.a(["asshole","douchecanoe"],t),H.a(["asshole","douche"],t),H.a(["asshole","plebeian"],t),H.a(["asshole","fuckstain"],t),H.a(["asshole","douchebag"],t),H.a(["asshole","fuckface"],t),H.a(["asshole","fuckass"],t)],[[P.L,P.v]])})
lazy($,"tt","$get$tt",function(){var t=[P.v]
return H.a([H.a(["lol","lol"],t),H.a(["lol","haha"],t),H.a(["lol","ehehe"],t),H.a(["lol","heh"],t),H.a(["lol","omg lol"],t),H.a(["lol","rofl"],t),H.a(["lol","funny"],t),H.a(["lol"," "],t),H.a(["lol","hee"],t),H.a(["lol","lawl"],t),H.a(["lol","roflcopter"],t),H.a(["lol","..."],t),H.a(["lol","bwahah"],t),H.a(["lol","*giggle*"],t),H.a(["lol",":)"],t)],[[P.L,P.v]])})
lazy($,"tn","$get$tn",function(){var t=[P.v]
return H.a([H.a(["\\bhey\\b","hey"],t),H.a(["\\bhey\\b","hi"],t),H.a(["\\bhey\\b","hello"],t),H.a(["\\bhey\\b","greetings"],t),H.a(["\\bhey\\b","yo"],t),H.a(["\\bhey\\b","sup"],t)],[[P.L,P.v]])})
lazy($,"ti","$get$ti",function(){var t=[P.v]
return H.a([H.a(["dude","guy"],t),H.a(["dude","bro"],t),H.a(["dude","man"],t),H.a(["dude","you"],t),H.a(["dude","friend"],t),H.a(["dude","asshole"],t),H.a(["dude","fella"],t),H.a(["dude","bro"],t)],[[P.L,P.v]])})
lazy($,"th","$get$th",function(){var t=[P.v]
return H.a([H.a(["fuck","beep"],t),H.a(["fuck","piss"],t),H.a(["fuck","motherfuck"],t),H.a(["\\bfuck\\b","um"],t),H.a(["\\bfuck\\b","fuck"],t),H.a(["\\bfuck\\b","shit"],t),H.a(["\\bfuck\\b","cocks"],t),H.a(["\\bfuck\\b","nope"],t),H.a(["\\bfuck\\b","goddammit"],t),H.a(["\\bfuck\\b","damn"],t),H.a(["\\bfuck\\b","..."],t),H.a(["\\bfuck\\b","...great."],t),H.a(["\\bfuck\\b","crap"],t),H.a(["\\bfuck\\b","fiddlesticks"],t),H.a(["\\bfuck\\b","darn"],t),H.a(["\\bfuck\\b","dang"],t),H.a(["\\bfuck\\b","omg"],t)],[[P.L,P.v]])})
lazy($,"tB","$get$tB",function(){var t=[P.v]
return H.a([H.a(["\\byes\\b","certainly"],t),H.a(["\\byes\\b","indeed"],t),H.a(["\\byes\\b","yes"],t),H.a(["\\byes\\b","yeppers"],t),H.a(["\\byes\\b","right"],t),H.a(["\\byes\\b","yeah"],t),H.a(["\\byes\\b","yep"],t),H.a(["\\byes\\b","sure"],t),H.a(["\\byes\\b","okay"],t),H.a(["\\byes\\b","hell yes"],t)],[[P.L,P.v]])})
lazy($,"tv","$get$tv",function(){var t=[P.v]
return H.a([H.a(["\\bnope\\b|\\bno\\b","hell no"],t),H.a(["\\bnope\\b|\\bno\\b","absolutely no"],t),H.a(["\\bnope\\b|\\bno\\b","no"],t),H.a(["\\bnope\\b|\\bno\\b","no"],t),H.a(["\\bnope\\b|\\bno\\b","nope"],t),H.a(["\\bnope\\b|\\bno\\b","no way"],t),H.a(["\\bnope\\b|\\bno\\b","nah"],t)],[[P.L,P.v]])})
lazy($,"tk","$get$tk",function(){var t=[P.v]
return H.a([H.a(["friend","bro"],t),H.a(["friend","buddy"],t),H.a(["friend","pal"],t),H.a(["friend","friend"],t),H.a(["friend","compadre"],t),H.a(["friend","comrade"],t),H.a(["friend","best friend"],t),H.a(["friend","homey"],t)],[[P.L,P.v]])})
lazy($,"ty","$get$ty",function(){var t=[P.v]
return H.a([H.a([":\\)",":)"],t),H.a([":\\)",":0)"],t),H.a([":\\)",":]"],t),H.a([":\\)",":B"],t),H.a([":\\)",">: ]"],t),H.a([":\\)",":o)"],t),H.a([":\\)","^_^"],t),H.a([":\\)",";)"],t),H.a([":\\)","~_^"],t),H.a([":\\)","0u0"],t),H.a([":\\)","uwu"],t),H.a([":\\)","\xaf_(\u30c4)_/\xaf "],t),H.a([":\\)",":-)"],t),H.a([":\\)",":3"],t),H.a([":\\)","XD"],t),H.a([":\\)","8D"],t),H.a([":\\)",":>"],t),H.a([":\\)","=]"],t),H.a([":\\)","=}"],t),H.a([":\\)","=)"],t),H.a([":\\)","o->-<"],t)],[[P.L,P.v]])})
lazy($,"to","$get$to",function(){return H.a(["#68410a","#fffffe","#000000","#000000","#000000","#f3f28d","#cf6338","#feffd7","#fff3bd","#724107","#382207","#ff5a00","#3f1904","#ffd46d","#473200","#91683c"],[P.v])})
lazy($,"cg","$get$cg",function(){return H.a([],[D.bi])})})()
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
mangledGlobalNames:{O:"int",U:"double",ci:"num",v:"String",cM:"bool",dw:"Null",L:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.cM,args:[[P.L,E.cx]]},{func:1,v:true},{func:1,v:true,args:[P.bd]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,v:true,args:[P.bd],opt:[P.e3]},{func:1,ret:P.v,args:[P.O]},{func:1,ret:W.cA,args:[P.O]},{func:1,ret:W.ai,args:[P.O]},{func:1,ret:P.cM,args:[W.cA,P.v,P.v,W.hB]},{func:1,v:true,args:[,P.e3]},{func:1,ret:P.cM,args:[P.bd]},{func:1,ret:W.cp,args:[P.O]},{func:1,ret:W.fk,args:[P.O]},{func:1,ret:P.v,args:[P.v]},{func:1,ret:P.O,args:[P.bD,P.bD]},{func:1,v:true,args:[D.dp,[Q.bK,N.Z],E.cx,L.dP,A.d3]},{func:1,v:true,args:[P.v]},{func:1},{func:1,v:true,args:[W.ed,Q.b6]}],
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
setOrUpdateInterceptorsByTag({CanvasGradient:J.a0,CanvasPattern:J.a0,DOMImplementation:J.a0,MediaError:J.a0,MediaSession:J.a0,PositionError:J.a0,PushMessageData:J.a0,Range:J.a0,SVGAnimatedEnumeration:J.a0,SVGAnimatedLength:J.a0,SVGAnimatedLengthList:J.a0,SVGAnimatedNumber:J.a0,SVGAnimatedNumberList:J.a0,SVGAnimatedString:J.a0,WebGLRenderingContext:J.a0,SQLError:J.a0,ArrayBuffer:H.h7,ArrayBufferView:H.fa,DataView:H.mr,Float32Array:H.ms,Float64Array:H.mt,Int16Array:H.mu,Int32Array:H.mv,Int8Array:H.mw,Uint16Array:H.mx,Uint32Array:H.my,Uint8ClampedArray:H.iW,CanvasPixelArray:H.iW,Uint8Array:H.he,HTMLBRElement:W.b2,HTMLContentElement:W.b2,HTMLDListElement:W.b2,HTMLDataListElement:W.b2,HTMLDetailsElement:W.b2,HTMLDialogElement:W.b2,HTMLHRElement:W.b2,HTMLHeadElement:W.b2,HTMLHeadingElement:W.b2,HTMLHtmlElement:W.b2,HTMLLabelElement:W.b2,HTMLLegendElement:W.b2,HTMLModElement:W.b2,HTMLOptGroupElement:W.b2,HTMLParagraphElement:W.b2,HTMLPictureElement:W.b2,HTMLPreElement:W.b2,HTMLQuoteElement:W.b2,HTMLShadowElement:W.b2,HTMLSpanElement:W.b2,HTMLTableCaptionElement:W.b2,HTMLTableCellElement:W.b2,HTMLTableDataCellElement:W.b2,HTMLTableHeaderCellElement:W.b2,HTMLTableColElement:W.b2,HTMLTitleElement:W.b2,HTMLTrackElement:W.b2,HTMLUListElement:W.b2,HTMLUnknownElement:W.b2,HTMLDirectoryElement:W.b2,HTMLFontElement:W.b2,HTMLFrameElement:W.b2,HTMLMarqueeElement:W.b2,HTMLElement:W.b2,HTMLAnchorElement:W.eJ,HTMLAreaElement:W.jR,HTMLBaseElement:W.k5,Blob:W.hR,HTMLBodyElement:W.eL,HTMLButtonElement:W.fD,HTMLCanvasElement:W.ed,CanvasRenderingContext2D:W.hW,CDATASection:W.ee,CharacterData:W.ee,Comment:W.ee,ProcessingInstruction:W.ee,Text:W.ee,Client:W.hY,WindowClient:W.hY,CSSStyleDeclaration:W.eN,MSStyleCSSProperties:W.eN,CSS2Properties:W.eN,DeviceLightEvent:W.ko,HTMLDivElement:W.i1,DocumentFragment:W.i2,DOMError:W.i3,FileError:W.i3,DOMException:W.kp,DOMRectReadOnly:W.i4,DOMTokenList:W.i5,Element:W.cA,HTMLEmbedElement:W.kx,ErrorEvent:W.kz,AnimationEvent:W.W,AnimationPlayerEvent:W.W,ApplicationCacheErrorEvent:W.W,AutocompleteErrorEvent:W.W,BeforeInstallPromptEvent:W.W,BeforeUnloadEvent:W.W,BlobEvent:W.W,ClipboardEvent:W.W,CloseEvent:W.W,CompositionEvent:W.W,CustomEvent:W.W,DeviceMotionEvent:W.W,DeviceOrientationEvent:W.W,ExtendableEvent:W.W,ExtendableMessageEvent:W.W,FetchEvent:W.W,FocusEvent:W.W,FontFaceSetLoadEvent:W.W,GamepadEvent:W.W,HashChangeEvent:W.W,InstallEvent:W.W,KeyboardEvent:W.W,MediaEncryptedEvent:W.W,MediaKeyMessageEvent:W.W,MediaQueryListEvent:W.W,MediaStreamEvent:W.W,MediaStreamTrackEvent:W.W,MessageEvent:W.W,MIDIConnectionEvent:W.W,MIDIMessageEvent:W.W,MouseEvent:W.W,DragEvent:W.W,NotificationEvent:W.W,PageTransitionEvent:W.W,PointerEvent:W.W,PopStateEvent:W.W,PresentationConnectionAvailableEvent:W.W,PresentationConnectionCloseEvent:W.W,ProgressEvent:W.W,PromiseRejectionEvent:W.W,PushEvent:W.W,RelatedEvent:W.W,RTCDataChannelEvent:W.W,RTCDTMFToneChangeEvent:W.W,RTCIceCandidateEvent:W.W,RTCPeerConnectionIceEvent:W.W,SecurityPolicyViolationEvent:W.W,ServicePortConnectEvent:W.W,ServiceWorkerMessageEvent:W.W,SpeechRecognitionEvent:W.W,StorageEvent:W.W,SyncEvent:W.W,TextEvent:W.W,TouchEvent:W.W,TrackEvent:W.W,TransitionEvent:W.W,WebKitTransitionEvent:W.W,UIEvent:W.W,WheelEvent:W.W,ResourceProgressEvent:W.W,USBConnectionEvent:W.W,IDBVersionChangeEvent:W.W,SVGZoomEvent:W.W,AudioProcessingEvent:W.W,OfflineAudioCompletionEvent:W.W,WebGLContextEvent:W.W,Event:W.W,InputEvent:W.W,MessagePort:W.fK,EventTarget:W.fK,HTMLFieldSetElement:W.ld,File:W.cp,FileList:W.im,HTMLFormElement:W.ir,GeofencingEvent:W.lj,HTMLOptionsCollection:W.f_,HTMLCollection:W.f_,HTMLFormControlsCollection:W.it,XMLHttpRequest:W.em,XMLHttpRequestEventTarget:W.iu,HTMLIFrameElement:W.ls,ImageData:W.f0,HTMLImageElement:W.f1,HTMLInputElement:W.lx,HTMLKeygenElement:W.lQ,HTMLLIElement:W.lS,HTMLLinkElement:W.h_,Location:W.m4,HTMLMapElement:W.m8,HTMLAudioElement:W.h5,HTMLMediaElement:W.h5,MediaStream:W.md,HTMLMenuElement:W.me,HTMLMenuItemElement:W.mf,HTMLMetaElement:W.mg,HTMLMeterElement:W.mi,MIDIOutput:W.mj,MIDIInput:W.h6,MIDIPort:W.h6,Navigator:W.mz,NavigatorUserMediaError:W.mA,Document:W.ai,HTMLDocument:W.ai,XMLDocument:W.ai,Node:W.ai,NodeList:W.hf,RadioNodeList:W.hf,HTMLOListElement:W.mI,HTMLObjectElement:W.mJ,HTMLOptionElement:W.j5,HTMLOutputElement:W.mL,HTMLParamElement:W.mN,HTMLProgressElement:W.n_,HTMLScriptElement:W.nm,HTMLSelectElement:W.ho,ShadowRoot:W.nt,HTMLSlotElement:W.nv,HTMLSourceElement:W.ny,SpeechRecognitionError:W.nC,SpeechSynthesisEvent:W.nD,HTMLStyleElement:W.nZ,HTMLTableElement:W.jl,HTMLTableRowElement:W.o6,HTMLTableSectionElement:W.o7,HTMLTemplateElement:W.hs,HTMLTextAreaElement:W.ob,HTMLVideoElement:W.ov,Window:W.jr,DOMWindow:W.jr,Attr:W.fk,ClientRect:W.oV,DocumentType:W.p1,DOMRect:W.p2,HTMLFrameSetElement:W.pn,NamedNodeMap:W.hD,MozNamedAttrMap:W.hD,ServiceWorker:W.pL,SVGAElement:P.jO,SVGAnimateElement:P.e9,SVGAnimateMotionElement:P.e9,SVGAnimateTransformElement:P.e9,SVGAnimationElement:P.e9,SVGSetElement:P.e9,SVGFEBlendElement:P.kC,SVGFEColorMatrixElement:P.kD,SVGFEComponentTransferElement:P.kE,SVGFECompositeElement:P.kF,SVGFEConvolveMatrixElement:P.kG,SVGFEDiffuseLightingElement:P.kH,SVGFEDisplacementMapElement:P.kI,SVGFEFloodElement:P.kJ,SVGFEGaussianBlurElement:P.kK,SVGFEImageElement:P.kL,SVGFEMergeElement:P.kM,SVGFEMorphologyElement:P.kN,SVGFEOffsetElement:P.kO,SVGFESpecularLightingElement:P.kP,SVGFETileElement:P.kQ,SVGFETurbulenceElement:P.kR,SVGFilterElement:P.le,SVGForeignObjectElement:P.lh,SVGCircleElement:P.ds,SVGEllipseElement:P.ds,SVGLineElement:P.ds,SVGPathElement:P.ds,SVGPolygonElement:P.ds,SVGPolylineElement:P.ds,SVGGeometryElement:P.ds,SVGClipPathElement:P.dY,SVGDefsElement:P.dY,SVGGElement:P.dY,SVGSwitchElement:P.dY,SVGGraphicsElement:P.dY,SVGImageElement:P.lt,SVGLength:P.d1,SVGLengthList:P.lY,SVGMarkerElement:P.mb,SVGMaskElement:P.mc,SVGNumber:P.d2,SVGNumberList:P.mD,SVGPatternElement:P.mQ,SVGRectElement:P.n3,SVGScriptElement:P.hn,SVGStyleElement:P.o_,SVGDescElement:P.c5,SVGDiscardElement:P.c5,SVGFEDistantLightElement:P.c5,SVGFEFuncAElement:P.c5,SVGFEFuncBElement:P.c5,SVGFEFuncGElement:P.c5,SVGFEFuncRElement:P.c5,SVGFEMergeNodeElement:P.c5,SVGFEPointLightElement:P.c5,SVGFESpotLightElement:P.c5,SVGMetadataElement:P.c5,SVGStopElement:P.c5,SVGTitleElement:P.c5,SVGComponentTransferFunctionElement:P.c5,SVGElement:P.c5,SVGSVGElement:P.o3,SVGSymbolElement:P.o5,SVGTSpanElement:P.ez,SVGTextElement:P.ez,SVGTextPositioningElement:P.ez,SVGTextContentElement:P.ez,SVGTextPathElement:P.od,SVGUseElement:P.os,SVGViewElement:P.ow,SVGLinearGradientElement:P.hz,SVGRadialGradientElement:P.hz,SVGGradientElement:P.hz,SVGCursorElement:P.pH,SVGFEDropShadowElement:P.pI,SVGMPathElement:P.pJ,WebGL2RenderingContext:P.n9})
setOrUpdateLeafTags({CanvasGradient:true,CanvasPattern:true,DOMImplementation:true,MediaError:true,MediaSession:true,PositionError:true,PushMessageData:true,Range:true,SVGAnimatedEnumeration:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedString:true,WebGLRenderingContext:true,SQLError:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLModElement:true,HTMLOptGroupElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLQuoteElement:true,HTMLShadowElement:true,HTMLSpanElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,Client:true,WindowClient:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DeviceLightEvent:true,HTMLDivElement:true,DocumentFragment:false,DOMError:true,FileError:true,DOMException:true,DOMRectReadOnly:false,DOMTokenList:true,Element:false,HTMLEmbedElement:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,NotificationEvent:true,PageTransitionEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,WheelEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,SVGZoomEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,MessagePort:true,EventTarget:false,HTMLFieldSetElement:true,File:true,FileList:true,HTMLFormElement:true,GeofencingEvent:true,HTMLOptionsCollection:true,HTMLCollection:false,HTMLFormControlsCollection:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:false,HTMLIFrameElement:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLinkElement:true,Location:true,HTMLMapElement:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaStream:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,Navigator:true,NavigatorUserMediaError:true,Document:true,HTMLDocument:true,XMLDocument:true,Node:false,NodeList:true,RadioNodeList:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParamElement:true,HTMLProgressElement:true,HTMLScriptElement:true,HTMLSelectElement:true,ShadowRoot:true,HTMLSlotElement:true,HTMLSourceElement:true,SpeechRecognitionError:true,SpeechSynthesisEvent:true,HTMLStyleElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLVideoElement:true,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DocumentType:true,DOMRect:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFESpecularLightingElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGRectElement:true,SVGScriptElement:true,SVGStyleElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGFEPointLightElement:true,SVGFESpotLightElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGUseElement:true,SVGViewElement:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,WebGL2RenderingContext:true})
H.iV.$nativeSuperclassTag="ArrayBufferView"
H.ha.$nativeSuperclassTag="ArrayBufferView"
H.hc.$nativeSuperclassTag="ArrayBufferView"
H.h8.$nativeSuperclassTag="ArrayBufferView"
H.hb.$nativeSuperclassTag="ArrayBufferView"
H.hd.$nativeSuperclassTag="ArrayBufferView"
H.h9.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.wu(M.v0(),b)},[])
else (function(b){H.wu(M.v0(),b)})([])})})()
//# sourceMappingURL=NewOCGen.dart.js.map
