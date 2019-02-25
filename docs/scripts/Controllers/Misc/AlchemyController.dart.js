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
a[c]=function(){a[c]=function(){H.Gt(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.tQ"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.tQ"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.tQ(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={tb:function tb(a){this.a=a},
qy:function(a){var t,s
t=a^48
if(t<=9)return t
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
we:function(a,b,c,d){var t=new H.o9(a,b,c,[d])
t.i8(a,b,c,d)
return t},
h3:function(a,b,c,d){if(!!J.am(a).$isM)return new H.i4(a,b,[c,d])
return new H.h2(a,b,[c,d])},
d1:function(){return new P.c_("No element")},
E2:function(){return new P.c_("Too many elements")},
vJ:function(){return new P.c_("Too few elements")},
je:function(a,b,c,d){if(c-b<=32)H.F3(a,b,c,d)
else H.F2(a,b,c,d)},
F3:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.bo(a);t<=c;++t){r=s.m(a,t)
q=t
while(!0){if(!(q>b&&J.cw(d.$2(s.m(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.m(a,p))
q=p}s.i(a,q,r)}},
F2:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.b.aB(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.b.aB(a3+a4,2)
p=q-t
o=q+t
n=J.bo(a2)
m=n.m(a2,s)
l=n.m(a2,p)
k=n.m(a2,q)
j=n.m(a2,o)
i=n.m(a2,r)
if(J.cw(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.cw(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.cw(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.cw(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.cw(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.cw(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.cw(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.cw(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.cw(a5.$2(j,i),0)){h=i
i=j
j=h}n.i(a2,s,m)
n.i(a2,q,k)
n.i(a2,r,i)
n.i(a2,p,n.m(a2,a3))
n.i(a2,o,n.m(a2,a4))
g=a3+1
f=a4-1
if(J.a5(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=n.m(a2,e)
c=a5.$2(d,l)
b=J.am(c)
if(b.O(c,0))continue
if(b.a0(c,0)){if(e!==g){n.i(a2,e,n.m(a2,g))
n.i(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.m(a2,f),l)
b=J.dn(c)
if(b.b8(c,0)){--f
continue}else{a=f-1
if(b.a0(c,0)){n.i(a2,e,n.m(a2,g))
a0=g+1
n.i(a2,g,n.m(a2,f))
n.i(a2,f,d)
f=a
g=a0
break}else{n.i(a2,e,n.m(a2,f))
n.i(a2,f,d)
f=a
break}}}}a1=!0}else{for(e=g;e<=f;++e){d=n.m(a2,e)
if(J.dX(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.m(a2,g))
n.i(a2,g,d)}++g}else if(J.cw(a5.$2(d,j),0))for(;!0;)if(J.cw(a5.$2(n.m(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.dX(a5.$2(n.m(a2,f),l),0)){n.i(a2,e,n.m(a2,g))
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
H.je(a2,a3,g-2,a5)
H.je(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.a5(a5.$2(n.m(a2,g),l),0);)++g
for(;J.a5(a5.$2(n.m(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.m(a2,e)
if(J.a5(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.m(a2,g))
n.i(a2,g,d)}++g}else if(J.a5(a5.$2(d,j),0))for(;!0;)if(J.a5(a5.$2(n.m(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.dX(a5.$2(n.m(a2,f),l),0)){n.i(a2,e,n.m(a2,g))
a0=g+1
n.i(a2,g,n.m(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.m(a2,f))
n.i(a2,f,d)}f=a
break}}H.je(a2,g,f,a5)}else H.je(a2,g,f,a5)},
kq:function kq(a){this.a=a},
M:function M(){},
er:function er(){},
o9:function o9(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
dx:function dx(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
h2:function h2(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
i4:function i4(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
iS:function iS(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
dh:function dh(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
bv:function bv(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
dV:function dV(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
ik:function ik(){},
ox:function ox(){},
ht:function ht(){},
hk:function hk(a,$ti){this.a=a
this.$ti=$ti},
jB:function(a,b){var t=a.cn(b)
if(!u.globalState.d.cy)u.globalState.f.cF()
return t},
xq:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.am(s).$isH)throw H.m(P.e_("Arguments to main must be a List: "+H.n(s)))
u.globalState=new H.pH(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$v3()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.pd(P.tf(null,H.eB),0)
r=P.N
s.z=new H.q(0,null,null,null,null,null,0,[r,H.fl])
s.ch=new H.q(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.pG()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.z3,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.Fp)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.a3(null,null,null,r)
p=new H.fd(0,null,!1)
o=new H.fl(s,new H.q(0,null,null,null,null,null,0,[r,H.fd]),q,u.createNewIsolate(),p,new H.dH(H.qU()),new H.dH(H.qU()),!1,!1,[],P.a3(null,null,null,null),null,null,!1,!0,P.a3(null,null,null,null))
q.h(0,0)
o.eQ(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.ft(a,{func:1,args:[,]}))o.cn(new H.qV(t,a))
else if(H.ft(a,{func:1,args:[,,]}))o.cn(new H.qW(t,a))
else o.cn(a)
u.globalState.f.cF()},
Fp:function(a){var t=P.h_(["command","print","msg",a])
return new H.dC(!0,P.hC(null,P.N)).b1(t)},
z5:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.z6()
return},
z6:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.m(new P.aN("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.m(new P.aN('Cannot extract URI from "'+t+'"'))},
z3:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.eA(!0,[]).bu(b.data)
s=J.bo(t)
switch(s.m(t,"command")){case"start":u.globalState.b=s.m(t,"id")
r=s.m(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.m(t,"args")
o=new H.eA(!0,[]).bu(s.m(t,"msg"))
n=s.m(t,"isSpawnUri")
m=s.m(t,"startPaused")
l=new H.eA(!0,[]).bu(s.m(t,"replyTo"))
s=u.globalState.a++
k=P.N
j=P.a3(null,null,null,k)
i=new H.fd(0,null,!1)
h=new H.fl(s,new H.q(0,null,null,null,null,null,0,[k,H.fd]),j,u.createNewIsolate(),i,new H.dH(H.qU()),new H.dH(H.qU()),!1,!1,[],P.a3(null,null,null,null),null,null,!1,!0,P.a3(null,null,null,null))
j.h(0,0)
h.eQ(0,i)
u.globalState.f.a.bo(new H.eB(h,new H.lL(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.cF()
break
case"spawn-worker":break
case"message":if(s.m(t,"port")!=null)J.fx(s.m(t,"port"),s.m(t,"msg"))
u.globalState.f.cF()
break
case"close":u.globalState.ch.an(0,$.$get$v4().m(0,a))
a.terminate()
u.globalState.f.cF()
break
case"log":H.z2(s.m(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.h_(["command","print","msg",t])
k=new H.dC(!0,P.hC(null,P.N)).b1(k)
s.toString
self.postMessage(k)}else P.cE(s.m(t,"msg"))
break
case"error":throw H.m(s.m(t,"msg"))}},
z2:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.h_(["command","log","msg",a])
r=new H.dC(!0,P.hC(null,P.N)).b1(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.ck(q)
t=H.cL(q)
s=P.kL(t)
throw H.m(s)}},
z4:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.vW=$.vW+("_"+s)
$.vX=$.vX+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.fx(f,["spawned",new H.fm(s,r),q,t.r])
r=new H.lM(a,b,c,d,t)
if(e===!0){t.fm(q,q)
u.globalState.f.a.bo(new H.eB(t,r,"start isolate"))}else r.$0()},
Fc:function(a,b){var t=new H.oq(!0,!1,null)
t.i9(a,b)
return t},
FI:function(a){return new H.eA(!0,[]).bu(new H.dC(!1,P.hC(null,P.N)).b1(a))},
qV:function qV(a,b){this.a=a
this.b=b},
qW:function qW(a,b){this.a=a
this.b=b},
pH:function pH(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
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
fl:function fl(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx){var _=this
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
pC:function pC(a,b){this.a=a
this.b=b},
pd:function pd(a,b){this.a=a
this.b=b},
pe:function pe(a){this.a=a},
eB:function eB(a,b,c){this.a=a
this.b=b
this.c=c},
pG:function pG(){},
lL:function lL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lM:function lM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
p0:function p0(){},
fm:function fm(b,a){this.b=b
this.a=a},
pK:function pK(a,b){this.a=a
this.b=b},
hG:function hG(b,c,a){this.b=b
this.c=c
this.a=a},
fd:function fd(a,b,c){this.a=a
this.b=b
this.c=c},
oq:function oq(a,b,c){this.a=a
this.b=b
this.c=c},
or:function or(a,b){this.a=a
this.b=b},
os:function os(a,b){this.a=a
this.b=b},
dH:function dH(a){this.a=a},
dC:function dC(a,b){this.a=a
this.b=b},
eA:function eA(a,b){this.a=a
this.b=b},
yu:function(){throw H.m(new P.aN("Cannot modify unmodifiable Map"))},
G6:function(a){return u.types[a]},
x9:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.am(a).$iscs},
n:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.cm(a)
if(typeof t!=="string")throw H.m(H.bR(a))
return t},
EE:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.nb(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
es:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
tm:function(a,b){if(b==null)throw H.m(new P.bH(a,null,null))
return b.$1(a)},
et:function(a,b,c){var t,s,r,q,p,o
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.tm(a,c)
if(3>=t.length)return H.J(t,3)
s=t[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.tm(a,c)}if(b<2||b>36)throw H.m(P.bJ(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.d.ag(q,o)|32)>r)return H.tm(a,c)}return parseInt(a,b)},
to:function(a){var t,s,r,q,p,o,n,m
t=J.am(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.V||!!J.am(a).$isey){p=C.G(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.d.ag(q,0)===36)q=C.d.aS(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.u3(H.jG(a),0,null),u.mangledGlobalNames)},
n5:function(a){return"Instance of '"+H.to(a)+"'"},
Ec:function(){if(!!self.location)return self.location.href
return},
vS:function(a){var t,s,r,q,p
t=a.length
if(t<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<t;r=q){q=r+500
p=q<t?q:t
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
Eh:function(a){var t,s,r,q
t=H.a([],[P.N])
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.bp)(a),++r){q=a[r]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.m(H.bR(q))
if(q<=65535)t.push(q)
else if(q<=1114111){t.push(55296+(C.b.bq(q-65536,10)&1023))
t.push(56320+(q&1023))}else throw H.m(H.bR(q))}return H.vS(t)},
vZ:function(a){var t,s,r,q
for(t=a.length,s=0;r=a.length,s<r;r===t||(0,H.bp)(a),++s){q=a[s]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.m(H.bR(q))
if(q<0)throw H.m(H.bR(q))
if(q>65535)return H.Eh(a)}return H.vS(a)},
Ei:function(a,b,c){var t,s,r,q
if(typeof c!=="number")return c.kN()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
if(r<c)q=r
else q=c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
tp:function(a){var t
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.b.bq(t,10))>>>0,56320|t&1023)}}throw H.m(P.bJ(a,0,1114111,null,null))},
cV:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
vV:function(a){return a.b?H.cV(a).getUTCFullYear()+0:H.cV(a).getFullYear()+0},
vU:function(a){return a.b?H.cV(a).getUTCMonth()+1:H.cV(a).getMonth()+1},
vT:function(a){return a.b?H.cV(a).getUTCDate()+0:H.cV(a).getDate()+0},
Ed:function(a){return a.b?H.cV(a).getUTCHours()+0:H.cV(a).getHours()+0},
Ef:function(a){return a.b?H.cV(a).getUTCMinutes()+0:H.cV(a).getMinutes()+0},
Eg:function(a){return a.b?H.cV(a).getUTCSeconds()+0:H.cV(a).getSeconds()+0},
Ee:function(a){return a.b?H.cV(a).getUTCMilliseconds()+0:H.cV(a).getMilliseconds()+0},
tn:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.m(H.bR(a))
return a[b]},
vY:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.m(H.bR(a))
a[b]=c},
aK:function(a){throw H.m(H.bR(a))},
J:function(a,b){if(a==null)J.cl(a)
throw H.m(H.c6(a,b))},
c6:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.dq(!0,b,"index",null)
t=J.cl(a)
if(!(b<0)){if(typeof t!=="number")return H.aK(t)
s=b>=t}else s=!0
if(s)return P.cU(b,a,"index",null,t)
return P.hj(b,"index",null)},
bR:function(a){return new P.dq(!0,a,null,null)},
tO:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.m(H.bR(a))
return a},
m:function(a){var t
if(a==null)a=new P.hf()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.xs})
t.name=""}else t.toString=H.xs
return t},
xs:function(){return J.cm(this.dartException)},
bq:function(a){throw H.m(a)},
bp:function(a){throw H.m(new P.bT(a))},
dT:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.ou(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
ov:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
wm:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
td:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.m3(a,s,t?null:b.receiver)},
ck:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.qZ(a)
if(a==null)return
if(a instanceof H.fL)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.bq(r,16)&8191)===10)switch(q){case 438:return t.$1(H.td(H.n(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.n(s)+" (Error "+q+")"
return t.$1(new H.iX(p,null))}}if(a instanceof TypeError){o=$.$get$wg()
n=$.$get$wh()
m=$.$get$wi()
l=$.$get$wj()
k=$.$get$wn()
j=$.$get$wo()
i=$.$get$wl()
$.$get$wk()
h=$.$get$wq()
g=$.$get$wp()
f=o.bf(s)
if(f!=null)return t.$1(H.td(s,f))
else{f=n.bf(s)
if(f!=null){f.method="call"
return t.$1(H.td(s,f))}else{f=m.bf(s)
if(f==null){f=l.bf(s)
if(f==null){f=k.bf(s)
if(f==null){f=j.bf(s)
if(f==null){f=i.bf(s)
if(f==null){f=l.bf(s)
if(f==null){f=h.bf(s)
if(f==null){f=g.bf(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.iX(s,f==null?null:f.method))}}return t.$1(new H.ow(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.jg()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.dq(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.jg()
return a},
cL:function(a){var t
if(a instanceof H.fL)return a.b
if(a==null)return new H.jx(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.jx(a,null)},
Gl:function(a){if(a==null||typeof a!='object')return J.dE(a)
else return H.es(a)},
x4:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
Ge:function(a,b,c,d,e,f,g){switch(c){case 0:return H.jB(b,new H.qD(a))
case 1:return H.jB(b,new H.qE(a,d))
case 2:return H.jB(b,new H.qF(a,d,e))
case 3:return H.jB(b,new H.qG(a,d,e,f))
case 4:return H.jB(b,new H.qH(a,d,e,f,g))}throw H.m(P.kL("Unsupported number of arguments for wrapped closure"))},
hK:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.Ge)
a.$identity=t
return t},
ys:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.am(c).$isH){t.$reflectionInfo=c
r=H.EE(t).r}else r=c
q=d?Object.create(new H.nR().constructor.prototype):Object.create(new H.fE(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.dI
$.dI=J.cM(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.uz(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.G6,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.uy:H.rg
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.m("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.uz(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
yp:function(a,b,c,d){var t=H.rg
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
uz:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.yr(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.yp(s,!q,t,b)
if(s===0){q=$.dI
$.dI=J.cM(q,1)
o="self"+H.n(q)
q="return function(){var "+o+" = this."
p=$.fF
if(p==null){p=H.ki("self")
$.fF=p}return new Function(q+H.n(p)+";return "+o+"."+H.n(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.dI
$.dI=J.cM(q,1)
n+=H.n(q)
q="return function("+n+"){return this."
p=$.fF
if(p==null){p=H.ki("self")
$.fF=p}return new Function(q+H.n(p)+"."+H.n(t)+"("+n+");}")()},
yq:function(a,b,c,d){var t,s
t=H.rg
s=H.uy
switch(b?-1:a){case 0:throw H.m(new H.nk("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
yr:function(a,b){var t,s,r,q,p,o,n,m
t=H.yn()
s=$.ux
if(s==null){s=H.ki("receiver")
$.ux=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.yq(q,!o,r,b)
if(q===1){s="return function(){return this."+H.n(t)+"."+H.n(r)+"(this."+H.n(s)+");"
o=$.dI
$.dI=J.cM(o,1)
return new Function(s+H.n(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.n(t)+"."+H.n(r)+"(this."+H.n(s)+", "+m+");"
o=$.dI
$.dI=J.cM(o,1)
return new Function(s+H.n(o)+"}")()},
tQ:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.am(c).$isH){c.fixed$length=Array
t=c}else t=c
return H.ys(a,b,t,!!d,e,f)},
rg:function(a){return a.a},
uy:function(a){return a.c},
yn:function(){var t=$.fF
if(t==null){t=H.ki("self")
$.fF=t}return t},
ki:function(a){var t,s,r,q,p
t=new H.fE("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
Go:function(a,b){var t=J.bo(b)
throw H.m(H.yo(H.to(a),t.N(b,3,t.gn(b))))},
hN:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.am(a)[b]
else t=!0
if(t)return a
H.Go(a,b)},
x3:function(a){var t=J.am(a)
return"$S" in t?t.$S():null},
ft:function(a,b){var t
if(a==null)return!1
t=H.x3(a)
return t==null?!1:H.u2(t,b)},
yo:function(a,b){return new H.ko("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
Gt:function(a){throw H.m(new P.ky(a))},
qU:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
x6:function(a){return u.getIsolateTag(a)},
c2:function(a){return new H.dB(a,null)},
a:function(a,b){a.$ti=b
return a},
jG:function(a){if(a==null)return
return a.$ti},
x8:function(a,b){return H.ub(a["$as"+H.n(b)],H.jG(a))},
ap:function(a,b,c){var t=H.x8(a,b)
return t==null?null:t[c]},
I:function(a,b){var t=H.jG(a)
return t==null?null:t[b]},
dD:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.u3(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.n(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.dD(t,b)
return H.FM(a,b)}return"unknown-reified-type"},
FM:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.dD(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.dD(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.dD(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.G1(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.dD(l[j],b)+(" "+H.n(j))}q+="}"}return"("+q+") => "+t},
u3:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.dj("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.U=p+", "
o=a[s]
if(o!=null)q=!1
p=t.U+=H.dD(o,c)}return q?"":"<"+t.u(0)+">"},
hM:function(a){var t,s
if(a instanceof H.eK){t=H.x3(a)
if(t!=null)return H.dD(t,null)}s=J.am(a).constructor.builtin$cls
if(a==null)return s
return s+H.u3(a.$ti,0,null)},
ub:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
eD:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.jG(a)
s=J.am(a)
if(s[b]==null)return!1
return H.wZ(H.ub(s[d],t),c)},
wZ:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.cY(a[s],b[s]))return!1
return!0},
dl:function(a,b,c){return a.apply(b,H.x8(b,c))},
tP:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="b5"||b.builtin$cls==="dz"
if(b==null)return!0
t=H.jG(a)
a=J.am(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.u2(r.apply(a,null),b)}return H.cY(s,b)},
cY:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="dz")return!0
if('func' in b)return H.u2(a,b)
if('func' in a)return b.builtin$cls==="Gz"||b.builtin$cls==="b5"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.dD(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.wZ(H.ub(o,t),r)},
wY:function(a,b,c){var t,s,r,q,p
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
s=a.length
r=b.length
if(c){if(s<r)return!1}else if(s!==r)return!1
for(q=0;q<r;++q){t=a[q]
p=b[q]
if(!(H.cY(t,p)||H.cY(p,t)))return!1}return!0},
FU:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.cY(p,o)||H.cY(o,p)))return!1}return!0},
u2:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.cY(t,s)||H.cY(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.wY(r,q,!1))return!1
if(!H.wY(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.cY(i,h)||H.cY(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.cY(i,h)||H.cY(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.cY(i,h)||H.cY(h,i)))return!1}}return H.FU(a.named,b.named)},
GL:function(a){var t=$.tY
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
GK:function(a){return H.es(a)},
GJ:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Gf:function(a){var t,s,r,q,p,o
t=$.tY.$1(a)
s=$.qu[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.qC[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.wX.$2(a,t)
if(t!=null){s=$.qu[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.qC[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.u6(r)
$.qu[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.qC[t]=r
return r}if(p==="-"){o=H.u6(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.xf(a,r)
if(p==="*")throw H.m(new P.jj(t))
if(u.leafTags[t]===true){o=H.u6(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.xf(a,r)},
xf:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.qO(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
u6:function(a){return J.qO(a,!1,null,!!a.$iscs)},
Gi:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.qO(t,!1,null,!!t.$iscs)
else return J.qO(t,c,null,null)},
Gc:function(){if(!0===$.u1)return
$.u1=!0
H.Gd()},
Gd:function(){var t,s,r,q,p,o,n,m
$.qu=Object.create(null)
$.qC=Object.create(null)
H.Gb()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.xh.$1(p)
if(o!=null){n=H.Gi(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
Gb:function(){var t,s,r,q,p,o,n
t=C.W()
t=H.fr(C.X,H.fr(C.Y,H.fr(C.F,H.fr(C.F,H.fr(C.a_,H.fr(C.Z,H.fr(C.a0(C.G),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.tY=new H.qz(p)
$.wX=new H.qA(o)
$.xh=new H.qB(n)},
fr:function(a,b){return a(b)||b},
vL:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.m(new P.bH("Illegal RegExp pattern ("+String(q)+")",a,null))},
Gr:function(a,b,c){var t
if(typeof b==="string")return a.indexOf(b,c)>=0
else{t=J.xw(b,C.d.aS(a,c))
t=t.gX(t)
return!t}},
jM:function(a,b,c){var t,s,r,q
if(typeof b==="string")if(b==="")if(a==="")return c
else{t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))
else if(b instanceof H.iQ){q=b.gf6()
q.lastIndex=0
return a.replace(q,c.replace(/\$/g,"$$$$"))}else{if(b==null)H.bq(H.bR(b))
throw H.m("String.replaceAll(Pattern) UNIMPLEMENTED")}},
FS:function(a){return a},
Gs:function(a,b,c,d){var t,s,r,q,p,o
t=new H.oU(b,a,0,null)
s=0
r=""
for(;t.w();){q=t.d
p=q.b
o=p.index
r=r+H.n(H.wN().$1(C.d.N(a,s,o)))+H.n(c.$1(q))
s=o+p[0].length}t=r+H.n(H.wN().$1(C.d.aS(a,s)))
return t.charCodeAt(0)==0?t:t},
kv:function kv(){},
kw:function kw(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
nb:function nb(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
ou:function ou(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iX:function iX(a,b){this.a=a
this.b=b},
m3:function m3(a,b,c){this.a=a
this.b=b
this.c=c},
ow:function ow(a){this.a=a},
fL:function fL(a,b){this.a=a
this.b=b},
qZ:function qZ(a){this.a=a},
jx:function jx(a,b){this.a=a
this.b=b},
qD:function qD(a){this.a=a},
qE:function qE(a,b){this.a=a
this.b=b},
qF:function qF(a,b,c){this.a=a
this.b=b
this.c=c},
qG:function qG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qH:function qH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eK:function eK(){},
oi:function oi(){},
nR:function nR(){},
fE:function fE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ko:function ko(a){this.a=a},
nk:function nk(a){this.a=a},
dB:function dB(a,b){this.a=a
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
m2:function m2(a){this.a=a},
m1:function m1(a){this.a=a},
mg:function mg(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
mh:function mh(a,$ti){this.a=a
this.$ti=$ti},
mi:function mi(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qz:function qz(a){this.a=a},
qA:function qA(a){this.a=a},
qB:function qB(a){this.a=a},
iQ:function iQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pJ:function pJ(a,b){this.a=a
this.b=b},
oU:function oU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jh:function jh(a,b,c){this.a=a
this.b=b
this.c=c},
q1:function q1(a,b,c){this.a=a
this.b=b
this.c=c},
q2:function q2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wM:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.m(P.e_("Invalid length "+H.n(a)))
return a},
FL:function(a){return a},
E7:function(a){return new Int8Array(H.FL(a))},
h6:function h6(){},
f7:function f7(){},
mF:function mF(){},
iU:function iU(){},
h7:function h7(){},
h9:function h9(){},
hb:function hb(){},
h8:function h8(){},
ha:function ha(){},
hc:function hc(){},
mG:function mG(){},
mH:function mH(){},
mI:function mI(){},
mJ:function mJ(){},
mK:function mK(){},
mL:function mL(){},
mM:function mM(){},
iV:function iV(){},
hd:function hd(){},
G1:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
jK:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
am:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.iO.prototype
return J.iN.prototype}if(typeof a=="string")return J.ep.prototype
if(a==null)return J.iP.prototype
if(typeof a=="boolean")return J.m0.prototype
if(a.constructor==Array)return J.eo.prototype
if(typeof a!="object"){if(typeof a=="function")return J.eq.prototype
return a}if(a instanceof P.b5)return a
return J.qw(a)},
qO:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
qw:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.u1==null){H.Gc()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.m(new P.jj("Return interceptor for "+H.n(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$tc()]
if(p!=null)return p
p=H.Gf(a)
if(p!=null)return p
if(typeof a=="function")return C.a1
s=Object.getPrototypeOf(a)
if(s==null)return C.M
if(s===Object.prototype)return C.M
if(typeof q=="function"){Object.defineProperty(q,$.$get$tc(),{value:C.y,enumerable:false,writable:true,configurable:true})
return C.y}return C.y},
bo:function(a){if(typeof a=="string")return J.ep.prototype
if(a==null)return a
if(a.constructor==Array)return J.eo.prototype
if(typeof a!="object"){if(typeof a=="function")return J.eq.prototype
return a}if(a instanceof P.b5)return a
return J.qw(a)},
dm:function(a){if(a==null)return a
if(a.constructor==Array)return J.eo.prototype
if(typeof a!="object"){if(typeof a=="function")return J.eq.prototype
return a}if(a instanceof P.b5)return a
return J.qw(a)},
dn:function(a){if(typeof a=="number")return J.f2.prototype
if(a==null)return a
if(!(a instanceof P.b5))return J.ey.prototype
return a},
hL:function(a){if(typeof a=="number")return J.f2.prototype
if(typeof a=="string")return J.ep.prototype
if(a==null)return a
if(!(a instanceof P.b5))return J.ey.prototype
return a},
e8:function(a){if(typeof a=="string")return J.ep.prototype
if(a==null)return a
if(!(a instanceof P.b5))return J.ey.prototype
return a},
bg:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.eq.prototype
return a}if(a instanceof P.b5)return a
return J.qw(a)},
cM:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.hL(a).af(a,b)},
a5:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.am(a).O(a,b)},
ue:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.dn(a).bA(a,b)},
cw:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.dn(a).b8(a,b)},
dX:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.dn(a).a0(a,b)},
eE:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.hL(a).aJ(a,b)},
xu:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.dn(a).aE(a,b)},
c7:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.x9(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bo(a).m(a,b)},
r_:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.x9(a,a[u.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.dm(a).i(a,b,c)},
xv:function(a,b,c,d){return J.bg(a).j8(a,b,c,d)},
xw:function(a,b){return J.e8(a).ja(a,b)},
r0:function(a,b,c){return J.dn(a).ac(a,b,c)},
jN:function(a){return J.bg(a).aG(a)},
xx:function(a,b){return J.hL(a).aU(a,b)},
xy:function(a,b){return J.bg(a).d0(a,b)},
r1:function(a,b){return J.bo(a).T(a,b)},
jO:function(a,b,c){return J.bo(a).fF(a,b,c)},
r2:function(a,b){return J.dm(a).Y(a,b)},
xz:function(a,b,c,d){return J.dm(a).cv(a,b,c,d)},
jP:function(a){return J.dn(a).bd(a)},
uf:function(a){return J.bg(a).gjk(a)},
xA:function(a){return J.bg(a).gbC(a)},
fw:function(a){return J.bg(a).gbc(a)},
xB:function(a){return J.bg(a).geb(a)},
ug:function(a){return J.dm(a).gV(a)},
dE:function(a){return J.am(a).ga4(a)},
jQ:function(a){return J.bo(a).gX(a)},
dY:function(a){return J.bg(a).gaD(a)},
bC:function(a){return J.dm(a).gP(a)},
cl:function(a){return J.bo(a).gn(a)},
d7:function(a){return J.bg(a).gM(a)},
xC:function(a){return J.bg(a).gke(a)},
xD:function(a){return J.bg(a).gh0(a)},
xE:function(a){return J.bg(a).gki(a)},
xF:function(a){return J.bg(a).gkm(a)},
xG:function(a){return J.bg(a).gkz(a)},
uh:function(a){return J.bg(a).gap(a)},
xH:function(a){return J.am(a).ga6(a)},
xI:function(a){return J.bg(a).gho(a)},
xJ:function(a){return J.bg(a).gb2(a)},
jR:function(a){return J.bg(a).geL(a)},
xK:function(a){return J.bg(a).gkF(a)},
cN:function(a){return J.bg(a).gaq(a)},
xL:function(a,b){return J.bg(a).cI(a,b)},
xM:function(a,b){return J.bo(a).be(a,b)},
dp:function(a,b,c,d,e){return J.bg(a).fT(a,b,c,d,e)},
ui:function(a,b){return J.dm(a).aZ(a,b)},
xN:function(a){return J.dm(a).bl(a)},
xO:function(a,b,c,d){return J.bg(a).kt(a,b,c,d)},
xP:function(a,b,c){return J.e8(a).kw(a,b,c)},
xQ:function(a,b,c){return J.e8(a).kx(a,b,c)},
fx:function(a,b){return J.bg(a).cL(a,b)},
uj:function(a,b){return J.bg(a).sbC(a,b)},
xR:function(a,b){return J.bg(a).sah(a,b)},
fy:function(a,b){return J.bg(a).sb2(a,b)},
jS:function(a,b){return J.bg(a).sdv(a,b)},
xS:function(a,b){return J.bg(a).sbn(a,b)},
c3:function(a,b){return J.bg(a).at(a,b)},
xT:function(a,b){return J.dm(a).eI(a,b)},
uk:function(a,b){return J.e8(a).hL(a,b)},
xU:function(a,b){return J.e8(a).aS(a,b)},
r3:function(a){return J.dn(a).l(a)},
xV:function(a){return J.dm(a).ax(a)},
r4:function(a){return J.e8(a).kG(a)},
xW:function(a,b){return J.dn(a).bN(a,b)},
cm:function(a){return J.am(a).u(a)},
r5:function(a){return J.e8(a).kI(a)},
ul:function(a,b){return J.dm(a).b0(a,b)},
a_:function a_(){},
m0:function m0(){},
iP:function iP(){},
fX:function fX(){},
n0:function n0(){},
ey:function ey(){},
eq:function eq(){},
eo:function eo($ti){this.$ti=$ti},
ta:function ta($ti){this.$ti=$ti},
dF:function dF(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
f2:function f2(){},
iO:function iO(){},
iN:function iN(){},
ep:function ep(){}},P={
Ff:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.FV()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.hK(new P.oX(t),1)).observe(s,{childList:true})
return new P.oW(t,s,r)}else if(self.setImmediate!=null)return P.FW()
return P.FX()},
Fg:function(a){++u.globalState.f.b
self.scheduleImmediate(H.hK(new P.oY(a),0))},
Fh:function(a){++u.globalState.f.b
self.setImmediate(H.hK(new P.oZ(a),0))},
Fi:function(a){P.tA(C.E,a)},
wK:function(a,b){P.wL(null,a)
return b.gjL()},
GI:function(a,b){P.wL(a,b)},
wJ:function(a,b){J.xy(b,a)},
wI:function(a,b){b.dV(H.ck(a),H.cL(a))},
wL:function(a,b){var t,s,r,q
t=new P.qe(b)
s=new P.qf(b)
r=J.am(a)
if(!!r.$isce)a.dP(t,s)
else if(!!r.$isdv)a.ew(t,s)
else{q=new P.ce(0,$.b0,null,[null])
q.a=4
q.c=a
q.dP(t,null)}},
wV:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
$.b0.toString
return new P.qp(t)},
wO:function(a,b){if(H.ft(a,{func:1,args:[P.dz,P.dz]})){b.toString
return a}else{b.toString
return a}},
uB:function(a){return new P.q4(new P.ce(0,$.b0,null,[a]),[a])},
FJ:function(a,b,c){$.b0.toString
a.aT(b,c)},
wx:function(a,b){var t,s,r
b.a=1
try{a.ew(new P.pn(b),new P.po(b))}catch(r){t=H.ck(r)
s=H.cL(r)
P.xm(new P.pp(b,t,s))}},
pm:function(a,b){var t,s,r
for(;a.giK();)a=a.c
t=a.gdJ()
s=b.c
if(t){b.c=null
r=b.cW(s)
b.a=a.a
b.c=a.c
P.fk(b,r)}else{b.a=2
b.c=a
a.fb(s)}},
fk:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.fw(p)
n=p.gbg()
s.toString
P.jC(null,null,s,o,n)}return}for(;b.gdM()!=null;b=m){m=b.a
b.a=null
P.fk(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.gfN()||b.gfM()){k=b.gj0()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.fw(p)
n=p.gbg()
s.toString
P.jC(null,null,s,o,n)
return}j=$.b0
if(j==null?k!=null:j!==k)$.b0=k
else j=null
if(b.gfM())new P.pu(t,r,q,b).$0()
else if(s){if(b.gfN())new P.pt(r,b,l).$0()}else if(b.gjS())new P.ps(t,r,b).$0()
if(j!=null)$.b0=j
s=r.b
if(!!J.am(s).$isdv){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.cW(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.pm(s,i)
return}}i=b.b
b=i.cV()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
FO:function(){var t,s
for(;t=$.fo,t!=null;){$.hI=null
s=t.b
$.fo=s
if(s==null)$.hH=null
t.a.$0()}},
FR:function(){$.tJ=!0
try{P.FO()}finally{$.hI=null
$.tJ=!1
if($.fo!=null)$.$get$tF().$1(P.x0())}},
wU:function(a){var t=new P.jq(a,null)
if($.fo==null){$.hH=t
$.fo=t
if(!$.tJ)$.$get$tF().$1(P.x0())}else{$.hH.b=t
$.hH=t}},
FQ:function(a){var t,s,r
t=$.fo
if(t==null){P.wU(a)
$.hI=$.hH
return}s=new P.jq(a,null)
r=$.hI
if(r==null){s.b=t
$.hI=s
$.fo=s}else{s.b=r.b
r.b=s
$.hI=s
if(s.b==null)$.hH=s}},
xm:function(a){var t=$.b0
if(C.h===t){P.fp(null,null,C.h,a)
return}t.toString
P.fp(null,null,t,t.dU(a,!0))},
GE:function(a,b){return new P.q0(null,a,!1,[b])},
FP:function(a,b,c){var t,s,r,q,p,o,n
try{b.$1(a.$0())}catch(o){t=H.ck(o)
s=H.cL(o)
$.b0.toString
r=null
if(r==null)c.$2(t,s)
else{n=J.fw(r)
q=n
p=r.gbg()
c.$2(q,p)}}},
FG:function(a,b,c,d){var t=a.cZ()
if(!!J.am(t).$isdv&&t!==$.$get$fT())t.dk(new P.qh(b,c,d))
else b.aT(c,d)},
FH:function(a,b){return new P.qg(a,b)},
qi:function(a,b,c){var t=a.cZ()
if(!!J.am(t).$isdv&&t!==$.$get$fT())t.dk(new P.qj(b,c))
else b.bp(c)},
Fk:function(a,b,c,d,e,f,g){var t,s
t=$.b0
s=e?1:0
s=new P.hx(a,null,null,null,null,t,s,null,null,[f,g])
s.ib(b,c,d,e,g)
s.ig(a,b,c,d,e,f,g)
return s},
FF:function(a,b,c){$.b0.toString
a.cP(b,c)},
tz:function(a,b){var t=$.b0
if(t===C.h){t.toString
return P.tA(a,b)}return P.tA(a,t.dU(b,!0))},
tA:function(a,b){var t=C.b.aB(a.a,1000)
return H.Fc(t<0?0:t,b)},
Fe:function(){return $.b0},
jC:function(a,b,c,d,e){var t={}
t.a=d
P.FQ(new P.qo(t,e))},
wP:function(a,b,c,d){var t,s
s=$.b0
if(s===c)return d.$0()
$.b0=c
t=s
try{s=d.$0()
return s}finally{$.b0=t}},
wR:function(a,b,c,d,e){var t,s
s=$.b0
if(s===c)return d.$1(e)
$.b0=c
t=s
try{s=d.$1(e)
return s}finally{$.b0=t}},
wQ:function(a,b,c,d,e,f){var t,s
s=$.b0
if(s===c)return d.$2(e,f)
$.b0=c
t=s
try{s=d.$2(e,f)
return s}finally{$.b0=t}},
fp:function(a,b,c,d){var t=C.h!==c
if(t)d=c.dU(d,!(!t||!1))
P.wU(d)},
oX:function oX(a){this.a=a},
oW:function oW(a,b,c){this.a=a
this.b=b
this.c=c},
oY:function oY(a){this.a=a},
oZ:function oZ(a){this.a=a},
qe:function qe(a){this.a=a},
qf:function qf(a){this.a=a},
qp:function qp(a){this.a=a},
jr:function jr(){},
oV:function oV(a,$ti){this.a=a
this.$ti=$ti},
q4:function q4(a,$ti){this.a=a
this.$ti=$ti},
ju:function ju(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
ce:function ce(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
pj:function pj(a,b){this.a=a
this.b=b},
pr:function pr(a,b){this.a=a
this.b=b},
pn:function pn(a){this.a=a},
po:function po(a){this.a=a},
pp:function pp(a,b,c){this.a=a
this.b=b
this.c=c},
pl:function pl(a,b){this.a=a
this.b=b},
pq:function pq(a,b){this.a=a
this.b=b},
pk:function pk(a,b,c){this.a=a
this.b=b
this.c=c},
pu:function pu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pv:function pv(a){this.a=a},
pt:function pt(a,b,c){this.a=a
this.b=b
this.c=c},
ps:function ps(a,b,c){this.a=a
this.b=b
this.c=c},
jq:function jq(a,b){this.a=a
this.b=b},
d5:function d5(){},
nY:function nY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nW:function nW(a,b){this.a=a
this.b=b},
nX:function nX(a,b){this.a=a
this.b=b},
nZ:function nZ(a){this.a=a},
o5:function o5(a){this.a=a},
o6:function o6(a,b){this.a=a
this.b=b},
o3:function o3(a,b){this.a=a
this.b=b},
o4:function o4(a){this.a=a},
o7:function o7(a,b){this.a=a
this.b=b},
o8:function o8(a,b){this.a=a
this.b=b},
o1:function o1(a,b,c){this.a=a
this.b=b
this.c=c},
o2:function o2(a){this.a=a},
o_:function o_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
o0:function o0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nV:function nV(){},
dk:function dk(){},
p2:function p2(a,b,c){this.a=a
this.b=b
this.c=c},
p1:function p1(a){this.a=a},
js:function js(){},
p7:function p7(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
p9:function p9(b,c,a){this.b=b
this.c=c
this.a=a},
p8:function p8(){},
pL:function pL(){},
pM:function pM(a,b){this.a=a
this.b=b},
q_:function q_(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
q0:function q0(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
qh:function qh(a,b,c){this.a=a
this.b=b
this.c=c},
qg:function qg(a,b){this.a=a
this.b=b},
qj:function qj(a,b){this.a=a
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
pI:function pI(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
eH:function eH(a,b){this.a=a
this.b=b},
qd:function qd(){},
qo:function qo(a,b){this.a=a
this.b=b},
pO:function pO(){},
pP:function pP(a,b){this.a=a
this.b=b},
pQ:function pQ(a,b){this.a=a
this.b=b},
pR:function pR(a,b){this.a=a
this.b=b},
Fl:function(a,b){var t=a[b]
return t===a?null:t},
tH:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
tG:function(){var t=Object.create(null)
P.tH(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
B:function(a,b,c){return H.x4(a,new H.q(0,null,null,null,null,null,0,[b,c]))},
cD:function(a,b){return new H.q(0,null,null,null,null,null,0,[a,b])},
te:function(){return new H.q(0,null,null,null,null,null,0,[null,null])},
h_:function(a){return H.x4(a,new H.q(0,null,null,null,null,null,0,[null,null]))},
hC:function(a,b){return new P.jv(0,null,null,null,null,null,0,[a,b])},
Fo:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
p:function(a,b,c,d,e){return new P.px(0,null,null,null,null,[d,e])},
t9:function(a,b,c){var t,s
if(P.tK(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$hJ()
s.push(a)
try{P.FN(a,t)}finally{if(0>=s.length)return H.J(s,-1)
s.pop()}s=P.wc(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
en:function(a,b,c){var t,s,r
if(P.tK(a))return b+"..."+c
t=new P.dj(b)
s=$.$get$hJ()
s.push(a)
try{r=t
r.U=P.wc(r.gU(),a,", ")}finally{if(0>=s.length)return H.J(s,-1)
s.pop()}s=t
s.U=s.gU()+c
s=t.gU()
return s.charCodeAt(0)==0?s:s},
tK:function(a){var t,s
for(t=0;s=$.$get$hJ(),t<s.length;++t)if(a===s[t])return!0
return!1},
FN:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.bC(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.w())return
q=H.n(t.gG())
b.push(q)
s+=q.length+2;++r}if(!t.w()){if(r<=5)return
if(0>=b.length)return H.J(b,-1)
p=b.pop()
if(0>=b.length)return H.J(b,-1)
o=b.pop()}else{n=t.gG();++r
if(!t.w()){if(r<=4){b.push(H.n(n))
return}p=H.n(n)
if(0>=b.length)return H.J(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gG();++r
for(;t.w();n=m,m=l){l=t.gG();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.J(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.n(n)
p=H.n(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.J(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
a3:function(a,b,c,d){return new P.hB(0,null,null,null,null,null,0,[d])},
h0:function(a,b){var t,s
t=P.a3(null,null,null,b)
for(s=J.bC(a);s.w();)t.h(0,s.gG())
return t},
vN:function(a){var t,s,r
t={}
if(P.tK(a))return"{...}"
s=new P.dj("")
try{$.$get$hJ().push(a)
r=s
r.U=r.gU()+"{"
t.a=!0
a.dd(0,new P.mq(t,s))
t=s
t.U=t.gU()+"}"}finally{t=$.$get$hJ()
if(0>=t.length)return H.J(t,-1)
t.pop()}t=s.gU()
return t.charCodeAt(0)==0?t:t},
tf:function(a,b){var t=new P.mj(null,0,0,0,[b])
t.i3(a,b)
return t},
px:function px(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
pA:function pA(a){this.a=a},
py:function py(a,$ti){this.a=a
this.$ti=$ti},
pz:function pz(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
jv:function jv(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
hB:function hB(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
pE:function pE(a,b,c){this.a=a
this.b=b
this.c=c},
d6:function d6(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
jk:function jk(a,$ti){this.a=a
this.$ti=$ti},
pB:function pB(){},
dQ:function dQ(){},
iL:function iL(){},
h1:function h1(){},
f8:function f8(){},
bX:function bX(){},
q7:function q7(){},
mp:function mp(){},
hu:function hu(a,$ti){this.a=a
this.$ti=$ti},
mq:function mq(a,b){this.a=a
this.b=b},
mj:function mj(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
pF:function pF(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
ny:function ny(){},
nx:function nx(){},
uw:function(a,b,c,d,e,f){if(C.e.dq(f,4)!==0)throw H.m(new P.bH("Invalid base64 padding, padded length must be multiple of four, is "+H.n(f),a,c))
if(d+e!==f)throw H.m(new P.bH("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.m(new P.bH("Invalid base64 padding, more than two '=' characters",a,b))},
kc:function kc(a){this.a=a},
kd:function kd(a){this.a=a},
fG:function fG(){},
fH:function fH(){},
kJ:function kJ(){},
oE:function oE(a){this.a=a},
oF:function oF(a){this.a=a},
q9:function q9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qb:function qb(a){this.a=a},
qa:function qa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
F7:function(a,b,c){var t,s,r,q
if(b<0)throw H.m(P.bJ(b,0,J.cl(a),null,null))
t=c==null
if(!t&&c<b)throw H.m(P.bJ(c,b,J.cl(a),null,null))
s=J.bC(a)
for(r=0;r<b;++r)if(!s.w())throw H.m(P.bJ(b,0,r,null,null))
q=[]
if(t)for(;s.w();)q.push(s.gG())
else for(r=b;r<c;++r){if(!s.w())throw H.m(P.bJ(c,b,r,null,null))
q.push(s.gG())}return H.vZ(q)},
wc:function(a,b,c){var t=J.bC(b)
if(!t.w())return a
if(c.length===0){do a+=H.n(t.gG())
while(t.w())}else{a+=H.n(t.gG())
for(;t.w();)a=a+c+H.n(t.gG())}return a},
yt:function(a,b){return J.xx(a,b)},
yw:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.n(t)
if(t>=10)return s+"00"+H.n(t)
return s+"000"+H.n(t)},
yx:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
hZ:function(a){if(a>=10)return""+a
return"0"+a},
uL:function(a,b,c,d,e,f){return new P.da(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
uO:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.cm(a)
if(typeof a==="string")return JSON.stringify(a)
return P.yB(a)},
yB:function(a){var t=J.am(a)
if(!!t.$iseK)return t.u(a)
return H.n5(a)},
e_:function(a){return new P.dq(!1,null,null,a)},
fC:function(a,b,c){return new P.dq(!0,a,b,c)},
rf:function(a){return new P.dq(!1,null,a,"Must not be null")},
w2:function(a){return new P.hi(null,null,!1,null,null,a)},
hj:function(a,b,c){return new P.hi(null,null,!0,a,b,"Value not in range")},
bJ:function(a,b,c,d,e){return new P.hi(b,c,!0,a,d,"Invalid value")},
di:function(a,b,c,d,e,f){var t
if(typeof a!=="number")return H.aK(a)
if(!(0>a)){if(typeof c!=="number")return H.aK(c)
t=a>c}else t=!0
if(t)throw H.m(P.bJ(a,0,c,"start",f))
if(b!=null){if(typeof b!=="number")return H.aK(b)
if(!(a>b)){if(typeof c!=="number")return H.aK(c)
t=b>c}else t=!0
if(t)throw H.m(P.bJ(b,a,c,"end",f))
return b}return c},
cU:function(a,b,c,d,e){var t=e!=null?e:J.cl(b)
return new P.lH(b,t,!0,a,c,"Index out of range")},
kL:function(a){return new P.pi(a)},
bf:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.bC(a);s.w();)t.push(s.gG())
if(b)return t
t.fixed$length=Array
return t},
E4:function(a,b,c,d){var t,s,r
t=H.a([],[d])
C.a.sn(t,a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=t.length)return H.J(t,s)
t[s]=r}return t},
f:function(a,b){var t=P.bf(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
cE:function(a){H.jK(H.n(a))},
nc:function(a,b,c){return new H.iQ(a,H.vL(a,c,!0,!1),null,null)},
wd:function(a,b,c){var t,s
if(typeof a==="object"&&a!==null&&a.constructor===Array){t=a.length
c=P.di(b,c,t,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a0()
s=c<t}else s=!0
return H.vZ(s?C.a.eM(a,b,c):a)}if(!!J.am(a).$ishd)return H.Ei(a,b,P.di(b,c,a.length,null,null,null))
return P.F7(a,b,c)},
ws:function(){var t=H.Ec()
if(t!=null)return P.wt(t,0,null)
throw H.m(new P.aN("'Uri.base' is not supported"))},
wt:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
c=a.length
t=b+5
if(c>=t){s=((C.d.ag(a,b+4)^58)*3|C.d.ag(a,b)^100|C.d.ag(a,b+1)^97|C.d.ag(a,b+2)^116|C.d.ag(a,b+3)^97)>>>0
if(s===0)return P.wr(b>0||c<c?C.d.N(a,b,c):a,5,null).ghj()
else if(s===32)return P.wr(C.d.N(a,t,c),0,null).ghj()}r=H.a(new Array(8),[P.N])
r[0]=0
q=b-1
r[1]=q
r[2]=q
r[7]=q
r[3]=b
r[4]=b
r[5]=c
r[6]=c
if(P.wS(a,b,c,0,r)>=14)r[7]=c
p=r[1]
if(typeof p!=="number")return p.bA()
if(p>=b)if(P.wS(a,b,p,20,r)===20)r[7]=p
q=r[2]
if(typeof q!=="number")return q.af()
o=q+1
n=r[3]
m=r[4]
l=r[5]
k=r[6]
if(typeof k!=="number")return k.a0()
if(typeof l!=="number")return H.aK(l)
if(k<l)l=k
if(typeof m!=="number")return m.a0()
if(m<o||m<=p)m=l
if(typeof n!=="number")return n.a0()
if(n<o)n=m
q=r[7]
if(typeof q!=="number")return q.a0()
j=q<b
if(j)if(o>p+3){i=null
j=!1}else{q=n>b
if(q&&n+1===m){i=null
j=!1}else{if(!(l<c&&l===m+2&&C.d.ba(a,"..",m)))h=l>m+2&&C.d.ba(a,"/..",l-3)
else h=!0
if(h){i=null
j=!1}else{if(p===b+4)if(C.d.ba(a,"file",b)){if(o<=b){if(!C.d.ba(a,"/",m)){g="file:///"
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
m=7}else if(m===l)if(b===0&&!0){a=C.d.b7(a,m,l,"/");++l;++k;++c}else{a=C.d.N(a,b,m)+"/"+C.d.N(a,l,c)
p-=b
o-=b
n-=b
m-=b
t=1-b
l+=t
k+=t
c=a.length
b=0}i="file"}else if(C.d.ba(a,"http",b)){if(q&&n+3===m&&C.d.ba(a,"80",n+1))if(b===0&&!0){a=C.d.b7(a,n,m,"")
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
else if(p===t&&C.d.ba(a,"https",b)){if(q&&n+4===m&&C.d.ba(a,"443",n+1))if(b===0&&!0){a=C.d.b7(a,n,m,"")
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
k-=b}return new P.pZ(a,p,o,n,m,l,k,i,null)}return P.Fr(a,b,c,p,o,n,m,l,k,i)},
wv:function(a,b){return C.a.jJ(a.split("&"),P.te(),new P.oC(b))},
Fd:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=new P.oz(a)
s=H.wM(4)
r=new Uint8Array(s)
for(q=b,p=q,o=0;q<c;++q){n=C.d.a7(a,q)
if(n!==46){if((n^48)>9)t.$2("invalid character",q)}else{if(o===3)t.$2("IPv4 address should contain exactly 4 parts",q)
m=H.et(C.d.N(a,p,q),null,null)
if(J.cw(m,255))t.$2("each part must be in the range 0..255",p)
l=o+1
if(o>=s)return H.J(r,o)
r[o]=m
p=q+1
o=l}}if(o!==3)t.$2("IPv4 address should contain exactly 4 parts",c)
m=H.et(C.d.N(a,p,c),null,null)
if(J.cw(m,255))t.$2("each part must be in the range 0..255",p)
if(o>=s)return H.J(r,o)
r[o]=m
return r},
wu:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a0==null)a0=a.length
t=new P.oA(a)
s=new P.oB(a,t)
if(a.length<2)t.$1("address is too short")
r=[]
for(q=b,p=q,o=!1,n=!1;q<a0;++q){m=C.d.a7(a,q)
if(m===58){if(q===b){++q
if(C.d.a7(a,q)!==58)t.$2("invalid start colon.",q)
p=q}if(q===p){if(o)t.$2("only one wildcard `::` is allowed",q)
r.push(-1)
o=!0}else r.push(s.$2(p,q))
p=q+1}else if(m===46)n=!0}if(r.length===0)t.$1("too few parts")
l=p===a0
k=J.a5(C.a.gc4(r),-1)
if(l&&!k)t.$2("expected a part after last `:`",a0)
if(!l)if(!n)r.push(s.$2(p,a0))
else{j=P.Fd(a,p,a0)
i=j[0]
if(typeof i!=="number")return i.bm()
h=j[1]
if(typeof h!=="number")return H.aK(h)
r.push((i<<8|h)>>>0)
h=j[2]
if(typeof h!=="number")return h.bm()
i=j[3]
if(typeof i!=="number")return H.aK(i)
r.push((h<<8|i)>>>0)}if(o){if(r.length>7)t.$1("an address with a wildcard must have less than 7 parts")}else if(r.length!==8)t.$1("an address without a wildcard must contain exactly 8 parts")
g=new Uint8Array(16)
for(q=0,f=0;q<r.length;++q){e=r[q]
if(J.am(e).O(e,-1)){d=9-r.length
for(c=0;c<d;++c){if(f<0||f>=16)return H.J(g,f)
g[f]=0
i=f+1
if(i>=16)return H.J(g,i)
g[i]=0
f+=2}}else{if(typeof e!=="number")return e.hB()
i=C.e.bq(e,8)
if(f<0||f>=16)return H.J(g,f)
g[f]=i
i=f+1
if(i>=16)return H.J(g,i)
g[i]=e&255
f+=2}}return g},
Fr:function(a,b,c,d,e,f,g,h,i,j){var t,s,r,q,p,o,n
if(j==null)if(d>b)j=P.Fz(a,b,d)
else{if(d===b)P.hF(a,b,"Invalid empty scheme")
j=""}if(e>b){t=d+3
s=t<e?P.FA(a,t,e-1):""
r=P.Fv(a,e,f,!1)
if(typeof f!=="number")return f.af()
q=f+1
if(typeof g!=="number")return H.aK(g)
p=q<g?P.Fx(H.et(C.d.N(a,q,g),null,new P.qt(a,f)),j):null}else{s=""
r=null
p=null}o=P.Fw(a,g,h,null,j,r!=null)
if(typeof h!=="number")return h.a0()
n=h<i?P.Fy(a,h+1,i,null):null
return new P.jz(j,s,r,p,o,n,i<c?P.Fu(a,i+1,c):null,null,null,null,null,null)},
wC:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
hF:function(a,b,c){throw H.m(new P.bH(c,a,b))},
Fx:function(a,b){if(a!=null&&J.a5(a,P.wC(b)))return
return a},
Fv:function(a,b,c,d){var t,s
if(b===c)return""
if(C.d.a7(a,b)===91){if(typeof c!=="number")return c.aE()
t=c-1
if(C.d.a7(a,t)!==93)P.hF(a,b,"Missing end `]` to match `[` in host")
P.wu(a,b+1,t)
return C.d.N(a,b,c).toLowerCase()}if(typeof c!=="number")return H.aK(c)
s=b
for(;s<c;++s)if(C.d.a7(a,s)===58){P.wu(a,b,c)
return"["+a+"]"}return P.FC(a,b,c)},
FC:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
if(typeof c!=="number")return H.aK(c)
t=b
s=t
r=null
q=!0
for(;t<c;){p=C.d.a7(a,t)
if(p===37){o=P.wH(a,t,!0)
n=o==null
if(n&&q){t+=3
continue}if(r==null)r=new P.dj("")
m=C.d.N(a,s,t)
l=r.U+=!q?m.toLowerCase():m
if(n){o=C.d.N(a,t,t+3)
k=3}else if(o==="%"){o="%25"
k=1}else k=3
r.U=l+o
t+=k
s=t
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.J(C.J,n)
n=(C.J[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(r==null)r=new P.dj("")
if(s<t){r.U+=C.d.N(a,s,t)
s=t}q=!1}++t}else{if(p<=93){n=p>>>4
if(n>=8)return H.J(C.n,n)
n=(C.n[n]&1<<(p&15))!==0}else n=!1
if(n)P.hF(a,t,"Invalid character")
else{if((p&64512)===55296&&t+1<c){j=C.d.a7(a,t+1)
if((j&64512)===56320){p=65536|(p&1023)<<10|j&1023
k=2}else k=1}else k=1
if(r==null)r=new P.dj("")
m=C.d.N(a,s,t)
r.U+=!q?m.toLowerCase():m
r.U+=P.wD(p)
t+=k
s=t}}}}if(r==null)return C.d.N(a,b,c)
if(s<c){m=C.d.N(a,s,c)
r.U+=!q?m.toLowerCase():m}n=r.U
return n.charCodeAt(0)==0?n:n},
Fz:function(a,b,c){var t,s,r,q
if(b===c)return""
if(!P.wF(C.d.ag(a,b)))P.hF(a,b,"Scheme not starting with alphabetic character")
for(t=b,s=!1;t<c;++t){r=C.d.ag(a,t)
if(r<128){q=r>>>4
if(q>=8)return H.J(C.p,q)
q=(C.p[q]&1<<(r&15))!==0}else q=!1
if(!q)P.hF(a,t,"Illegal scheme character")
if(65<=r&&r<=90)s=!0}a=C.d.N(a,b,c)
return P.Fs(s?a.toLowerCase():a)},
Fs:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
FA:function(a,b,c){var t=P.fn(a,b,c,C.a6,!1)
return t==null?C.d.N(a,b,c):t},
Fw:function(a,b,c,d,e,f){var t,s,r
t=e==="file"
s=t||f
r=P.fn(a,b,c,C.K,!1)
if(r==null)r=C.d.N(a,b,c)
if(r.length===0){if(t)return"/"}else if(s&&!C.d.aL(r,"/"))r="/"+r
return P.FB(r,e,f)},
FB:function(a,b,c){var t=b.length===0
if(t&&!c&&!C.d.aL(a,"/"))return P.FD(a,!t||c)
return P.FE(a)},
Fy:function(a,b,c,d){var t=P.fn(a,b,c,C.o,!1)
return t==null?C.d.N(a,b,c):t},
Fu:function(a,b,c){var t=P.fn(a,b,c,C.o,!1)
return t==null?C.d.N(a,b,c):t},
wH:function(a,b,c){var t,s,r,q,p,o
t=b+2
if(t>=a.length)return"%"
s=C.d.a7(a,b+1)
r=C.d.a7(a,t)
q=H.qy(s)
p=H.qy(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){t=C.b.bq(o,4)
if(t>=8)return H.J(C.I,t)
t=(C.I[t]&1<<(o&15))!==0}else t=!1
if(t)return H.tp(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.d.N(a,b,b+3).toUpperCase()
return},
wD:function(a){var t,s,r,q,p,o,n,m
if(a<128){t=new Array(3)
t.fixed$length=Array
t[0]=37
t[1]=C.d.ag("0123456789ABCDEF",a>>>4)
t[2]=C.d.ag("0123456789ABCDEF",a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}q=3*r
t=new Array(q)
t.fixed$length=Array
for(p=0;--r,r>=0;s=128){o=C.b.iV(a,6*r)&63|s
if(p>=q)return H.J(t,p)
t[p]=37
n=p+1
m=C.d.ag("0123456789ABCDEF",o>>>4)
if(n>=q)return H.J(t,n)
t[n]=m
m=p+2
n=C.d.ag("0123456789ABCDEF",o&15)
if(m>=q)return H.J(t,m)
t[m]=n
p+=3}}return P.wd(t,0,null)},
fn:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=!e
s=J.e8(a)
r=b
q=r
p=null
while(!0){if(typeof r!=="number")return r.a0()
if(typeof c!=="number")return H.aK(c)
if(!(r<c))break
c$0:{o=s.a7(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.J(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.wH(a,r,!1)
if(m==null){r+=3
break c$0}if("%"===m){m="%25"
l=1}else l=3}else{if(t)if(o<=93){n=o>>>4
if(n>=8)return H.J(C.n,n)
n=(C.n[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.hF(a,r,"Invalid character")
m=null
l=null}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.d.a7(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.wD(o)}}if(p==null)p=new P.dj("")
p.U+=C.d.N(a,q,r)
p.U+=H.n(m)
if(typeof l!=="number")return H.aK(l)
r+=l
q=r}}}if(p==null)return
if(typeof q!=="number")return q.a0()
if(q<c)p.U+=s.N(a,q,c)
t=p.U
return t.charCodeAt(0)==0?t:t},
wG:function(a){if(C.d.aL(a,"."))return!0
return C.d.be(a,"/.")!==-1},
FE:function(a){var t,s,r,q,p,o,n
if(!P.wG(a))return a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bp)(s),++p){o=s[p]
if(J.a5(o,"..")){n=t.length
if(n!==0){if(0>=n)return H.J(t,-1)
t.pop()
if(t.length===0)t.push("")}q=!0}else if("."===o)q=!0
else{t.push(o)
q=!1}}if(q)t.push("")
return C.a.c3(t,"/")},
FD:function(a,b){var t,s,r,q,p,o
if(!P.wG(a))return!b?P.wE(a):a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bp)(s),++p){o=s[p]
if(".."===o)if(t.length!==0&&!J.a5(C.a.gc4(t),"..")){if(0>=t.length)return H.J(t,-1)
t.pop()
q=!0}else{t.push("..")
q=!1}else if("."===o)q=!0
else{t.push(o)
q=!1}}s=t.length
if(s!==0)if(s===1){if(0>=s)return H.J(t,0)
s=J.jQ(t[0])===!0}else s=!1
else s=!0
if(s)return"./"
if(q||J.a5(C.a.gc4(t),".."))t.push("")
if(!b){if(0>=t.length)return H.J(t,0)
s=P.wE(t[0])
if(0>=t.length)return H.J(t,0)
t[0]=s}return C.a.c3(t,"/")},
wE:function(a){var t,s,r,q
t=J.bo(a)
s=t.gn(a)
if(typeof s!=="number")return s.bA()
if(s>=2&&P.wF(t.a7(a,0))){r=1
while(!0){s=t.gn(a)
if(typeof s!=="number")return H.aK(s)
if(!(r<s))break
q=t.a7(a,r)
if(q===58)return C.d.N(a,0,r)+"%3A"+C.d.aS(a,r+1)
if(q<=127){s=q>>>4
if(s>=8)return H.J(C.p,s)
s=(C.p[s]&1<<(q&15))===0}else s=!0
if(s)break;++r}}return a},
Ft:function(a,b){var t,s,r
for(t=0,s=0;s<2;++s){r=C.d.ag(a,b+s)
if(48<=r&&r<=57)t=t*16+r-48
else{r|=32
if(97<=r&&r<=102)t=t*16+r-87
else throw H.m(P.e_("Invalid URL encoding"))}}return t},
q8:function(a,b,c,d,e){var t,s,r,q,p,o
if(typeof c!=="number")return H.aK(c)
t=J.e8(a)
s=b
while(!0){if(!(s<c)){r=!0
break}q=t.a7(a,s)
if(q<=127)if(q!==37)p=e&&q===43
else p=!0
else p=!0
if(p){r=!1
break}++s}if(r){if(C.q!==d)p=!1
else p=!0
if(p)return t.N(a,b,c)
else o=new H.kq(t.N(a,b,c))}else{o=[]
for(s=b;s<c;++s){q=t.a7(a,s)
if(q>127)throw H.m(P.e_("Illegal percent encoding in URI"))
if(q===37){if(s+3>a.length)throw H.m(P.e_("Truncated URI"))
o.push(P.Ft(a,s+1))
s+=2}else if(e&&q===43)o.push(32)
else o.push(q)}}return new P.oF(!1).jr(o)},
wF:function(a){var t=a|32
return 97<=t&&t<=122},
wr:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=[b-1]
s=J.bo(a)
r=b
q=-1
p=null
while(!0){o=s.gn(a)
if(typeof o!=="number")return H.aK(o)
if(!(r<o))break
c$0:{p=s.a7(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
break c$0}throw H.m(new P.bH("Invalid MIME type",a,r))}}++r}if(q<0&&r>b)throw H.m(new P.bH("Invalid MIME type",a,r))
for(;p!==44;){t.push(r);++r
n=-1
while(!0){o=s.gn(a)
if(typeof o!=="number")return H.aK(o)
if(!(r<o))break
p=s.a7(a,r)
if(p===61){if(n<0)n=r}else if(p===59||p===44)break;++r}if(n>=0)t.push(n)
else{m=C.a.gc4(t)
if(p!==44||r!==m+7||!s.ba(a,"base64",m+1))throw H.m(new P.bH("Expecting '='",a,r))
break}}t.push(r)
o=r+1
if((t.length&1)===1)a=C.P.kf(a,o,s.gn(a))
else{l=P.fn(a,o,s.gn(a),C.o,!0)
if(l!=null)a=s.b7(a,o,s.gn(a),l)}return new P.oy(a,t,c)},
FK:function(){var t,s,r,q,p
t=P.E4(22,new P.ql(),!0,P.e7)
s=new P.qk(t)
r=new P.qm()
q=new P.qn()
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
wS:function(a,b,c,d,e){var t,s,r,q,p,o
t=$.$get$wT()
for(s=b;s<c;++s){if(d<0||d>=t.length)return H.J(t,d)
r=t[d]
q=C.d.ag(a,s)^96
p=J.c7(r,q>95?31:q)
if(typeof p!=="number")return p.bQ()
d=p&31
o=C.e.bq(p,5)
if(o>=8)return H.J(e,o)
e[o]=s}return d},
cK:function cK(){},
bw:function bw(){},
fI:function fI(a,b){this.a=a
this.b=b},
T:function T(){},
da:function da(a){this.a=a},
kF:function kF(){},
kG:function kG(){},
eg:function eg(){},
hf:function hf(){},
dq:function dq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hi:function hi(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
lH:function lH(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
aN:function aN(a){this.a=a},
jj:function jj(a){this.a=a},
c_:function c_(a){this.a=a},
bT:function bT(a){this.a=a},
mT:function mT(){},
jg:function jg(){},
ky:function ky(a){this.a=a},
pi:function pi(a){this.a=a},
bH:function bH(a,b,c){this.a=a
this.b=b
this.c=c},
kM:function kM(a,cS,$ti){this.a=a
this.cS=cS
this.$ti=$ti},
N:function N(){},
z:function z(){},
iM:function iM(){},
H:function H(){},
dz:function dz(){},
cj:function cj(){},
b5:function b5(){},
f5:function f5(){},
dS:function dS(){},
v:function v(){},
dj:function dj(U){this.U=U},
ez:function ez(){},
oC:function oC(a){this.a=a},
oz:function oz(a){this.a=a},
oA:function oA(a){this.a=a},
oB:function oB(a,b){this.a=a
this.b=b},
jz:function jz(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
qt:function qt(a,b){this.a=a
this.b=b},
oy:function oy(a,b,c){this.a=a
this.b=b
this.c=c},
ql:function ql(){},
qk:function qk(a){this.a=a},
qm:function qm(){},
qn:function qn(){},
pZ:function pZ(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
p6:function p6(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
Fq:function(a){var t=new P.pN(0,0)
t.ij(a)
return t},
pD:function pD(){},
pN:function pN(a,b){this.a=a
this.b=b},
jX:function jX(){},
ea:function ea(){},
kN:function kN(){},
kO:function kO(){},
kP:function kP(){},
kQ:function kQ(){},
kR:function kR(){},
kS:function kS(){},
kT:function kT(){},
kU:function kU(){},
kV:function kV(){},
kW:function kW(){},
kX:function kX(){},
kY:function kY(){},
kZ:function kZ(){},
l_:function l_(){},
l0:function l0(){},
l1:function l1(){},
lp:function lp(){},
cr:function cr(){},
lE:function lE(){},
d2:function d2(){},
md:function md(){},
ix:function ix(){},
iE:function iE(){},
mr:function mr(){},
ms:function ms(){},
d3:function d3(){},
mR:function mR(){},
iy:function iy(){},
iF:function iF(){},
n_:function n_(){},
hl:function hl(){},
c0:function c0(){},
oc:function oc(){},
of:function of(){},
ex:function ex(){},
on:function on(){},
oD:function oD(){},
oG:function oG(){},
hz:function hz(){},
pS:function pS(){},
pT:function pT(){},
pU:function pU(){},
dG:function dG(){},
e7:function e7(){},
ng:function ng(){},
rh:function(){var t=$.uI
if(t==null){t=J.jO(window.navigator.userAgent,"Opera",0)
$.uI=t}return t},
uK:function(){var t=$.uJ
if(t==null){t=P.rh()!==!0&&J.jO(window.navigator.userAgent,"WebKit",0)
$.uJ=t}return t},
yy:function(){var t,s
t=$.uF
if(t!=null)return t
s=$.uG
if(s==null){s=J.jO(window.navigator.userAgent,"Firefox",0)
$.uG=s}if(s)t="-moz-"
else{s=$.uH
if(s==null){s=P.rh()!==!0&&J.jO(window.navigator.userAgent,"Trident/",0)
$.uH=s}if(s)t="-ms-"
else t=P.rh()===!0?"-o-":"-webkit-"}$.uF=t
return t}},W={
yv:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
Fj:function(a){var t=new W.p4(a,null)
t.ic(a)
return t},
yA:function(a,b,c){var t,s
t=document.body
s=(t&&C.z).au(t,a,b,c)
s.toString
t=new H.bv(new W.cX(s),new W.qr(),[W.aj])
return t.gbS(t)},
fJ:function(a){var t,s,r
t="element tag unavailable"
try{s=J.xK(a)
if(typeof s==="string")t=a.tagName}catch(r){H.ck(r)}return t},
yL:function(a,b,c){return W.yM(a,null,null,b,null,null,null,c).ev(new W.lB())},
yM:function(a,b,c,d,e,f,g,h){var t,s,r,q
t=W.el
s=new P.ce(0,$.b0,null,[t])
r=new P.oV(s,[t])
q=new XMLHttpRequest()
C.U.kh(q,"GET",a,!0)
t=W.GD
W.cJ(q,"load",new W.lC(r,q),!1,t)
W.cJ(q,"error",r.gjp(),!1,t)
q.send()
return s},
vP:function(a,b,c,d){var t=new Option(a,b,c,!1)
return t},
eC:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
wA:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
cJ:function(a,b,c,d,e){var t=W.FT(new W.ph(c))
t=new W.pg(0,a,b,t,!1,[e])
t.ie(a,b,c,!1,e)
return t},
wy:function(a){var t,s
t=document.createElement("a")
s=new W.pV(t,window.location)
s=new W.hA(s)
s.ii(a)
return s},
Fm:function(a,b,c,d){return!0},
Fn:function(a,b,c,d){var t,s,r,q,p
t=d.ghk()
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
wB:function(){var t=P.v
t=new W.q5(P.h0(C.t,t),P.a3(null,null,null,t),P.a3(null,null,null,t),P.a3(null,null,null,t),null)
t.ik(null,new H.dh(C.t,new W.q6(),[H.I(C.t,0),null]),["TEMPLATE"],null)
return t},
FT:function(a){var t=$.b0
if(t===C.h)return a
return t.jm(a,!0)},
aV:function aV(){},
eF:function eF(){},
k2:function k2(){},
ke:function ke(){},
hR:function hR(){},
eI:function eI(){},
eJ:function eJ(){},
km:function km(){},
ec:function ec(){},
hX:function hX(){},
ee:function ee(){},
ir:function ir(){},
p4:function p4(a,b){this.a=a
this.b=b},
iY:function iY(){},
p5:function p5(){},
hY:function hY(){},
kA:function kA(){},
i_:function i_(){},
i0:function i0(){},
i1:function i1(){},
kB:function kB(){},
i2:function i2(){},
i3:function i3(){},
hy:function hy(a,$ti){this.a=a
this.$ti=$ti},
cB:function cB(){},
qr:function qr(){},
kI:function kI(){},
kK:function kK(){},
U:function U(){},
fK:function fK(){},
lo:function lo(){},
cq:function cq(){},
ij:function ij(){},
is:function is(){},
iz:function iz(){},
io:function io(){},
eX:function eX(){},
it:function it(){},
iA:function iA(){},
ip:function ip(){},
el:function el(){},
lB:function lB(){},
lC:function lC(a,b){this.a=a
this.b=b},
iq:function iq(){},
lD:function lD(){},
eY:function eY(){},
lI:function lI(){},
m5:function m5(){},
m7:function m7(){},
fZ:function fZ(){},
mk:function mk(){},
mo:function mo(){},
h4:function h4(){},
mt:function mt(){},
mu:function mu(){},
mw:function mw(){},
mx:function mx(){},
h5:function h5(){},
mN:function mN(){},
mO:function mO(){},
cX:function cX(a){this.a=a},
aj:function aj(){},
he:function he(){},
iu:function iu(){},
iB:function iB(){},
mS:function mS(){},
j3:function j3(){},
mU:function mU(){},
mX:function mX(){},
n7:function n7(){},
ns:function ns(){},
hm:function hm(){},
nu:function nu(){},
nz:function nz(){},
nG:function nG(){},
nJ:function nJ(){},
fg:function fg(){},
nM:function nM(){},
ch:function ch(){},
nN:function nN(){},
nU:function nU(){},
ji:function ji(){},
og:function og(){},
oh:function oh(){},
hs:function hs(){},
ol:function ol(){},
ot:function ot(){},
jo:function jo(){},
fj:function fj(){},
p3:function p3(){},
pa:function pa(){},
pb:function pb(){},
pw:function pw(){},
hD:function hD(){},
iv:function iv(){},
iC:function iC(){},
pW:function pW(){},
jw:function jw(){},
iw:function iw(){},
iD:function iD(){},
p_:function p_(){},
pc:function pc(a){this.a=a},
pf:function pf(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
jt:function jt(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
pg:function pg(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
ph:function ph(a){this.a=a},
hA:function hA(a){this.a=a},
dg:function dg(){},
iW:function iW(a){this.a=a},
mQ:function mQ(a){this.a=a},
mP:function mP(a,b,c){this.a=a
this.b=b
this.c=c},
hE:function hE(){},
pX:function pX(){},
pY:function pY(){},
q5:function q5(e,a,b,c,d){var _=this
_.e=e
_.a=a
_.b=b
_.c=c
_.d=d},
q6:function q6(){},
q3:function q3(){},
il:function il(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
e4:function e4(){},
jy:function jy(){},
pV:function pV(a,b){this.a=a
this.b=b},
jA:function jA(a){this.a=a},
qc:function qc(a){this.a=a}},T={hP:function hP(){},hQ:function hQ(){},kh:function kh(rx,ry,x1,x2,y1,y2,t,B,C,K,E,R,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.B=B
_.C=C
_.K=K
_.E=E
_.R=R
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
_.r2=r2},kj:function kj(rx,ry,x1,x2,y1,y2,t,B,C,K,E,R,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.B=B
_.C=C
_.K=K
_.E=E
_.R=R
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
_.r2=r2},kz:function kz(){},ly:function ly(rx,ry,x1,x2,y1,y2,t,B,C,K,E,R,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.B=B
_.C=C
_.K=K
_.E=E
_.R=R
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
w8:function(){var t=$.$get$fe()
t=t.gay(t)
return new H.bv(t,new T.nm(),[H.ap(t,"z",0)])},
w9:function(){var t=$.$get$fe()
t=t.gay(t)
return new H.bv(t,new T.nn(),[H.ap(t,"z",0)])},
tu:function(){var t=$.$get$fe()
t=t.gay(t)
return new H.bv(t,new T.nl(),[H.ap(t,"z",0)])},
EG:function(a,b,c,d){var t=[P.v]
t=new T.dA(0.5,a,new H.q(0,null,null,null,null,null,0,[X.E,P.T]),null,null,b,c,d,!1,!1,!1,!1,!1,!1,Q.F(null,null,A.a4),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.L]),H.a([],[A.d0]),1)
t.ab(a,b,c,d)
return t},
nm:function nm(){},
nn:function nn(){},
nl:function nl(){},
dA:function dA(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
bZ:function bZ(a,b){this.a=a
this.b=b},
yz:function(){if($.G0)return!0
return!1}},S={jY:function jY(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},k1:function k1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},bx:function bx(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},hW:function hW(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},m6:function m6(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},mm:function mm(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},mA:function mA(rx,ry,x1,x2,y1,y2,t,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.B=B
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
_.r2=r2},nt:function nt(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id}},E={
Gg:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
W.yL(C.d.aJ("../",N.vQ())+"navbar.txt",null,null).ev(O.Gk())
A.G7()
t=document
$.Gq=t.querySelector("#story")
$.qI=t.querySelector("#item1")
$.Gn=t.querySelector("#operator")
$.qJ=t.querySelector("#item2")
$.xk=t.querySelector("#result")
$.xa=t.querySelector("#item1Sel")
$.xe=t.querySelector("#opSel")
$.xb=t.querySelector("#item2Sel")
s=H.et(O.xt(),null,null)
r=[Q.ct]
q=[P.v]
p=[Y.jb]
p=new L.dR(!1,null,null,null,null,s,H.a([],r),new Z.ls([]),500*$.u.r,H.a([],r),new S.k1(new F.f4(!1,"Afterlife"),[],[],null),!1,null,null,C.C,0,!1,!1,10,30,null,13,20,!1,H.a([],r),0,-15,-999,H.a([],q),0,H.a([],p),H.a([],p),H.a([],p),H.a([],p),null,H.a([],r),H.a([],[Z.lG]),new B.oR([]),new G.nw(0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1),null,null,null,null,null,null,null)
o=new A.bI(null,null)
o.aA(s)
p.A=o
F.Eb(p)
p.R=new Y.mE(p,null,null,null,null,null,null)
p.ak=K.F0()
p.hz()
p.hA()
p.E.a=$.rG
P.cE("Making sesssion "+H.n(p)+" with initialGameEntity id of "+p.E.a)
p.b=new F.f4(!1,"Session: "+H.n(s))
p.ak.hZ(p)
p.ky()
n=p.A.v(p.ar)
Y.xj(n,p.ar)
m=p.A.v(p.aI)
Y.xj(m,p.aI)
l=p.A.v($.f9)
J.fy(l,p)
k=p.A.v(H.a([p.d,p.e],[R.iT]))
j=Q.vR(p,n,m,l,k,!1)
j.jw()
s=p.A
j.aN=B.v1(s,s.v(B.v2()))
s=p.A
j.aO=B.v1(s,s.v(B.v2()))
s=[E.L]
j.k2=H.a([],s)
j.a8.ed(j)
j.ai.ed(j)
o=$.ci
j.a$.aF(o,0)
o=$.c5
i=j.c.A.Z(11)
j.a$.aF(o,i+-10)
i=$.bE
o=j.c.A.Z(10)
j.a$.aF(i,o+1)
o=$.bu
i=j.c.A.Z(21)
j.a$.aF(o,i+-10)
i=$.al
o=j.c.A.Z(21)
j.a$.aF(i,o+40)
o=$.b3
i=$.al
i=j.a$.aH(i)
j.a$.aF(o,i)
if(j.aX&&!J.a5(j.a2,"#ff0000")){o=$.b3
i=Y.tM(j.a2)
j.a$.cc(o,2*i)
i=$.al
o=Y.tM(j.a2)
j.a$.cc(i,2*o)}o=$.aX
i=j.c.A.Z(21)
j.a$.aF(o,i+-10)
j.jX()
i=$.u
j.a$.aF(i,10)
if(j.aX&&!J.a5(j.a2,"#ff0000")){o=$.u
i=Y.tM(j.a2)
j.a$.cc(o,2*i)}o=$.aY
i=j.c.A.Z(21)
j.a$.aF(o,i+-10)
j.jV()
j.jW()
h=j.kB()
if(J.a5(j.ai,$.w7)||h<-9){o=j.c.A.v($.ti)
j.bI=o
J.fy(o,j.c)}else if(h>25){o=j.c.A.v($.tj)
j.bI=o
J.fy(o,j.c)}if(h>5)j.ct=!0
o=$.b3
i=$.al
i=j.a$.aH(i)
j.a$.aF(o,i)
if(J.a5(j.ai,$.w6)){g=Z.aE("Rocks Fall, Everyone Dies",1,null,"")
g.r.push(new Z.Z($.u,3,!0,0,1,2,3,""))
g.e="Disappointingly sized meteors rain down from above.  Man, for such a cool name, this fraymotif kind of sucks. "
j.fy.push(g)}else if(J.a5(j.ai,$.w5)){g=Z.aE("What class???",1,null,"")
g.r.push(new Z.Z($.u,1,!0,0,1,2,3,""))
g.e=" I am certain there is not a class here and it is laughable to imply otherwise. "
j.fy.push(g)
g=Z.aE("Nulzilla",2,null,"")
g.r.push(new Z.Z($.u,1,!0,0,1,2,3,""))
g.e=" If you get this reference, you may reward yourself 15 Good Taste In Media Points (tm).  "
j.fy.push(g)}o=j.c
r=new F.jf(null,C.c,o,"sprite","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],[X.df]),!1,H.a([],[Z.cT]),!1,H.a([],[N.cH]),0,H.a([],s),null,null,!1,H.a([],r),"",null,null)
r.p("sprite",o)
j.R=r
r.a$.q(P.B([$.al,10,$.b3,10],D.bk,P.cj))
j.R.r1=!0
j.a=j.c.A.v($.$get$as()).bt()
s=j.y2.a;(s&&C.a).sn(s,0)
j.y2.h(0,j.c.A.v(j.aN.a.y))
j.y2.h(0,j.c.A.v(j.aO.a.y))
f=new H.q(0,null,null,null,null,null,0,[X.E,P.T])
s=j.c.A
r=j.ai.gbz()
e=s.v(r.gad(r))
J.jS(e,$.Fa)
r=j.c.A
s=j.a8.gbz()
d=r.v(s.gad(s))
J.jS(d,$.F9)
s=j.c.A
r=j.aN.a.r
c=s.v(r.gad(r))
J.jS(c,$.wf)
r=j.c.A
s=j.aO.a.r
b=r.v(s.gad(s))
J.jS(b,$.wf)
f.i(0,e,j.ai.gbz().m(0,e))
f.i(0,d,j.a8.gbz().m(0,d))
f.i(0,c,j.aN.a.r.m(0,c))
f.i(0,b,j.aO.a.r.m(0,b))
j.bH=M.E3(f,j.c,j.a8,j.ai)
s=j.c.A
r=j.ai
o=j.a8
i=j.aN
a=j.aO
a0=s.a.D()
a1=a0>0.3
if(a1){a2=i.a.gav()
a3=J.r4(J.d7(r))
if(0>=a3.length)return H.J(a3,0)
a4=Y.qx(s,a2,a3[0])}else if(a0>0.6){a2=a.a.gav()
a3=J.r4(J.d7(r))
if(0>=a3.length)return H.J(a3,0)
a4=Y.qx(s,a2,a3[0])}else a4=s.v(r.gS())
if(a4==null||J.a5(a4,""))a4=s.v(r.gS())
if(a1){r=i.a.gaw()
i=J.r5(J.d7(o))
if(0>=i.length)return H.J(i,0)
a5=Y.qx(s,r,i[0])}else if(a0>0.6){r=a.a.gaw()
i=J.r5(J.d7(o))
if(0>=i.length)return H.J(i,0)
a5=Y.qx(s,r,i[0])}else a5=s.v(o.gS())
if(a5==null||J.a5(a5,""))a5=s.v(o.gS())
if(a4==null)a4="mystery"
if(a5==null)a5="Mystery"
j.bv=H.n(a4)+H.n(a5)
j.cq=Y.G3(j)
if(j.aX){if(j.bw==null){a6=D.w1(j.c.A)
a6.k9(j)
j.bw=a6}s=$.aY
j.a$.cc(s,-10)}else if(j.bw==null){a6=D.w1(j.c.A)
a6.k8(j)
j.bw=a6}j.B=j.B+j.c.A.a.D()*-33
if(J.a5(j.a8,$.k3))j.B+=33
if(J.a5(j.a8,$.ur))j.b=C.N
j.a.fX(j)
j.x1=p.A.Z(3)+1
j.cr=p.A.Z(1+$.E9-1)+1
s=p.A.Z(46)+1
j.cs=s
j.bZ=s
if(p.A.a.D()>0.7)j.bZ=p.A.Z(46)+1
$.cA=j
$.wW=t.querySelector("#achievements")
$.e9=t.querySelector("#grist")
$.rb=t.querySelector("#level")
$.d8=t.querySelector("#announcement")
J.c3($.e9,"Grist: "+$.cO)
E.xZ($.wW,t.querySelector("#achievementLabel"))
E.xo()
s=$.cA
s.y2.W(0,s.aN.a.y)
s=$.cA
s.y2.W(0,s.aO.a.y)
s=$.cA
s.y2.W(0,s.a8.gc2())
s=$.cA
s.y2.W(0,s.ai.gc2())
s=$.cA
s.y2.h(0,s.a)
E.Gh()
E.u5()
s=$.fs
a7=E.dW(J.cN(J.c7((s&&C.f).gaK(s),0)))
s=$.fu
a8=E.dW(J.cN(J.c7((s&&C.f).gaK(s),0)))
s=E.jL(a7)
$.jH=s
$.qI.appendChild(s)
s=E.jL(a8)
$.jI=s
$.qJ.appendChild(s)
a9=t.querySelector("#quip")
$.x1=t.querySelector("#buyshit")
$.qX=t.querySelector("#storeDiv")
$.xn=t.querySelector("#sellshit")
$.jE=t.querySelector("#alchemy")
b0=t.querySelector("#shopKeep")
s=[G.V]
$.fq=new E.hO($.$get$tt(),H.a(["Think it'll be worth the expense?","I wonder which trait you hoped to get out of that.","Yeah, I bet you won't regret that.","Is that really the best choice you could make with your inferior meat brain? Whatever.","Oh my fuck why did it take you so long to decide that."],q),H.a(["Desperate for grist, huh?","Bet you hope you won't need that later.","Yeah, I bet you won't regret that.","Is that really the best choice you could make with your inferior meat brain? Whatever.","Oh my fuck why did it take you so long to decide that."],q),H.a(["Whelp, hope you got what you needed outta that, cuz it's out of alchemy uses.","What's that, it's not 'canon' or 'fair' that you can't keep shoving shit into other shit? Fuck you, deal with it.","And now you've maxed that thing out, can't alchemy any more, bro.","Now it's only purpose in life is to be sold.","And now you can't alchemize with it anymore, good job. Hope you didn't just shove useless shit into it."],q),"images/Alchemy/guide_bot_turnways.png",H.a(["It seems you are playing it safe.You must enjoy paying all that extra grist to keep all those useless traits.","Not very imaginative, are you.","Lame."],q),H.a(["Oh look at you, Mr. Fancy, going for the 'OR' option.","It seems you want to be more complicated. DO you want this?","I can hella get behind the frugal option."],q),H.a(["Are you sure a fleshy meat bag like you can understand something as complicated as XOR?","Color me impressed.","There is a 96.98% chance you are totally lost here."],q),H.a(["Wow. I hope I don't need to explain that if you clear your cookies or your history or whatever for this page you lose you save data. That would just be a fucking embarrassment.","Hey remember how you have that terrible condition called 'being organic'? Turns out you need to eat and sleep and take occasional breaks and shit. Who knew? Luckily my superior robo-brain anticipated this, and made sure JR would make your grist and achievements auto-save. Not your items tho. You could do with some adversity.","What's that? You don't like my sunny disposition? Have a heaping helping of 'fuck' and 'you'. You're lucky I'm here at all.","So, it seems JR was a lazy piece of shit who didn't want to figure out how to save an infinite array of shitty items. Your grist and achievements and shit will save, your items won't. Don't bitch to me when your inferior fleshy brain forgets this and you lose your shit. ","Hey. Pay attention, asshole. Your achievements and your grist gets saved. YOUR ITEMS DO NOT. Might wanna sell all your shit before quitting.","...","Bored.","Wow. It's Alchemy.","Yep, this is definitely a good use of my time.","You know what would be smart? Getting an imposibly fast super computer to manage your fucking alchemy binge. Wait. No. The reverse of that.","Fuck you."],q),$.$get$ja(),1,H.a([],s),null,a9,b0,H.a([""],q),H.a([""],q),H.a([""],q),H.a([""],q),H.a([""],q),H.a([""],q),H.a([""],q))
$.jD=new E.lt(H.a(["Oh. Fuck.","What did you DO!?","FIX THIS!!!"],q),"images/Alchemy/abGlitch.gif",H.a([$.be,$.aa],s),$.$get$tt(),H.a(["Think it'll be worth the expense?","I wonder which trait you hoped to get out of that.","Yeah, I bet you won't regret that.","Is that really the best choice you could make with your inferior meat brain? Whatever.","Oh my fuck why did it take you so long to decide that."],q),H.a(["Desperate for grist, huh?","Bet you hope you won't need that later.","Yeah, I bet you won't regret that.","Is that really the best choice you could make with your inferior meat brain? Whatever.","Oh my fuck why did it take you so long to decide that."],q),H.a(["Whelp, hope you got what you needed outta that, cuz it's out of alchemy uses.","What's that, it's not 'canon' or 'fair' that you can't keep shoving shit into other shit? Fuck you, deal with it.","And now you've maxed that thing out, can't alchemy any more, bro.","Now it's only purpose in life is to be sold.","And now you can't alchemize with it anymore, good job. Hope you didn't just shove useless shit into it."],q),"images/Alchemy/guide_bot_turnways.png",H.a(["It seems you are playing it safe.You must enjoy paying all that extra grist to keep all those useless traits.","Not very imaginative, are you.","Lame."],q),H.a(["Oh look at you, Mr. Fancy, going for the 'OR' option.","It seems you want to be more complicated. DO you want this?","I can hella get behind the frugal option."],q),H.a(["Are you sure a fleshy meat bag like you can understand something as complicated as XOR?","Color me impressed.","There is a 96.98% chance you are totally lost here."],q),H.a(["Wow. I hope I don't need to explain that if you clear your cookies or your history or whatever for this page you lose you save data. That would just be a fucking embarrassment.","Hey remember how you have that terrible condition called 'being organic'? Turns out you need to eat and sleep and take occasional breaks and shit. Who knew? Luckily my superior robo-brain anticipated this, and made sure JR would make your grist and achievements auto-save. Not your items tho. You could do with some adversity.","What's that? You don't like my sunny disposition? Have a heaping helping of 'fuck' and 'you'. You're lucky I'm here at all.","So, it seems JR was a lazy piece of shit who didn't want to figure out how to save an infinite array of shitty items. Your grist and achievements and shit will save, your items won't. Don't bitch to me when your inferior fleshy brain forgets this and you lose your shit. ","Hey. Pay attention, asshole. Your achievements and your grist gets saved. YOUR ITEMS DO NOT. Might wanna sell all your shit before quitting.","...","Bored.","Wow. It's Alchemy.","Yep, this is definitely a good use of my time.","You know what would be smart? Getting an imposibly fast super computer to manage your fucking alchemy binge. Wait. No. The reverse of that.","Fuck you."],q),$.$get$ja(),1,H.a([],s),null,a9,b0,H.a([""],q),H.a([""],q),H.a([""],q),H.a([""],q),H.a([""],q),H.a([""],q),H.a([""],q))
$.tL=new E.jT(A.kt(C.d.aS("#ffa800",1)),0.3,H.a([$.aJ,$.ar],s),"images/Alchemy/abjShop.png",H.a(["Yes.","Hrmmm...","Interesting!!!"],q),H.a(["Yes.","Hrmmm...","Interesting!!!"],q),H.a(["Yes.","Hrmmm...","Interesting!!!"],q),H.a(["Yes.","Hrmmm...","Interesting!!!"],q),H.a(["Yes.","Hrmmm...","Interesting!!!"],q),H.a(["Yes.","Hrmmm...","Interesting!!!"],q),H.a(["Yes.","Hrmmm...","Interesting!!!"],q),$.$get$ja(),1,H.a([],s),null,a9,b0,H.a([""],q),H.a([""],q),H.a([""],q),H.a([""],q),H.a([""],q),H.a([""],q),H.a([""],q))
$.u9=new E.jc(A.kt(C.d.aS("#00ff00",1)),3,"images/Alchemy/Shogun.png",H.a([""],q),H.a([""],q),H.a([""],q),H.a([""],q),H.a([""],q),$.$get$ja(),1,H.a([],s),null,a9,b0,H.a([""],q),H.a([""],q),H.a([""],q),H.a([""],q),H.a([""],q),H.a([""],q),H.a([""],q))
q=$.cA
s=$.fq
r=$.x1
p=$.xn
o=$.$get$fW()
s=new E.nA(r,p,q,a9,s,null,H.a([],[E.hn]),H.a([],[E.jd]))
s.cN(o)
s.dj()
$.c1=s
s.bR($.fq)
b1=t.createElement("button")
C.j.at(b1,"Store")
s=W.f6
W.cJ(b1,"click",new E.qK(),!1,s)
b2=t.createElement("button")
C.j.at(b2,"Alchemy")
W.cJ(b2,"click",new E.qL(),!1,s)
E.tN($.jE)
b3=t.createElement("button")
C.j.at(b3,"Fuck you.")
W.cJ(b3,"click",new E.qM(),!1,s)
t.querySelector("#tabs").appendChild(b1)
t.querySelector("#tabs").appendChild(b2)},
tX:function(){var t=0,s=P.uB(),r
var $async$tX=P.wV(function(a,b){if(a===1)return P.wI(b,s)
while(true)switch(t){case 0:r=new M.lv(6,10,30,null,null,!0,$.cA.c,H.a([],[Q.ct]))
r.r=$.cA
new E.jU(P.bf(r.jE(),!0,D.d9),0).ey()
return P.wJ(null,s)}})
return P.wK($async$tX,s)},
tN:function(a){var t,s,r,q
t=$.qX
if(a==null?t==null:a===t)$.c1.dj()
else{t=$.jE
if(a==null?t==null:a===t)E.u5()}for(t=$.$get$xr(),s=0;s<2;++s){r=t[s]
if(a==null?r==null:a===r){q=r.style;(q&&C.D).sbC(q,"inline-block")}else{q=r.style;(q&&C.D).sbC(q,"none")}}},
xo:function(){var t,s,r,q,p,o,n
for(t=$.cA.k2,s=t.length,r=0;r<t.length;t.length===s||(0,H.bp)(t),++r){q=t[r]
if(J.a5(q.gcb(),$.d4)){p=q.b
o=$.$get$bS()
if(o.gX(o))q.b=0
else{o=E.rc()
n=$.$get$bS()
q.b=o/(n.gn(n)/13)
H.jK("Debugging Level: oldskill "+H.n(p)+" newskill "+H.n(q.b))
if(C.e.bd(q.b)-C.e.bd(p)>=1){H.jK("Debugging Level: i think i leveled up")
o=C.e.a5(q.b)
H.jK("setting level div")
$.um=o
H.jK("level div is "+J.cm($.rb))
J.c3($.rb,"Level: "+$.um)
J.c3($.d8,"Leveled up to "+C.e.a5(q.b)+"! Items purchased in shop will last longer!")}}}}},
x7:function(a,b,c){var t,s
t=J.am(a)
if(t.O(a,$.r6)){s=new D.fz(H.a([b,c],[A.a4]),null)
s.b3()}else if(t.O(a,$.tg)){s=new D.fA(H.a([b,c],[A.a4]),null)
s.b3()}else if(t.O(a,$.tC)){s=new D.fB(H.a([b,c],[A.a4]),null)
s.b3()}else s=null
return s},
Gh:function(){var t=document.querySelector("#alchemyButton")
$.qq=t
t=J.xD(t)
W.cJ(t.a,t.b,new E.qN(),!1,H.I(t,0))},
xg:function(a){var t,s,r,q,p,o,n
t=P.bf(G.uA(a.ga9()),!0,G.V)
s=H.a([],[P.v])
for(r=t.length,q=0;q<t.length;t.length===r||(0,H.bp)(t),++q){p=t[q]
if(p instanceof G.d&&p.e.length!==0)if($.$get$bS().m(0,p)!=null){o=$.$get$bS().m(0,p).c9(0)
if(o!=null)s.push(o)}}J.c3($.e9,"Grist: "+$.cO)
r=s.length
if(r>1)J.dp($.d8,"beforeend","Achievements Unlocked: "+Y.fv(s),null,null)
else{n=$.d8
if(r===1)J.dp(n,"beforeend","Achievement Unlocked: "+Y.fv(s),null,null)
else J.dp(n,"beforeend","",null,null)}E.xo()},
dW:function(a){var t,s,r
for(t=$.cA.y2.a,t=new J.dF(t,t.length,0,null,[H.I(t,0)]),s=null;t.w();){r=t.d
if(r.gaY()===a)s=r}return s},
xi:function(a){var t,s,r
t=new A.bI(null,null)
t.aA(null)
s=$.c1
r=t.v(s.e.gc8())
s.e.aP(r)},
qv:function(){var t,s,r
t=$.fs
s=E.dW(J.cN(J.c7((t&&C.f).gaK(t),0)))
t=$.fu
r=E.dW(J.cN(J.c7((t&&C.f).gaK(t),0)))
t=$.jJ
return C.e.a5(Math.abs(E.x7(J.cN(J.c7((t&&C.f).gaK(t),0)),s,r).b.gas()))+1},
u5:function(){var t,s
t=$.fs
if(t!=null)C.f.bl(t)
t=E.xc($.xa,$.cA.y2.a,"First Item")
$.fs=t
s=W.U
W.cJ(t,"change",new E.qP(),!1,s)
t=$.jJ
if(t!=null)C.f.bl(t)
t=E.G2($.xe,H.a([$.r6,$.tg,$.tC],[P.v]),"Operation")
$.jJ=t
W.cJ(t,"change",new E.qQ(),!1,s)
t=$.fu
if(t!=null)C.f.bl(t)
t=E.xc($.xb,$.cA.y2.a,"Second Item")
$.fu=t
W.cJ(t,"change",new E.qR(),!1,s)},
G2:function(a,b,c){var t,s,r,q
t=document.createElement("select")
t.name=c
t.id=c
for(s=0;s<3;++s){r=b[s]
q=W.vP("","",null,!1)
q.value=r
q.textContent=null
q.appendChild(C.L.au(q,r,null,null))
t.add(q,null)}a.appendChild(t)
return t},
xc:function(a,b,c){var t,s,r,q,p,o
t=document.createElement("select")
t.name=c
s=t.style
s.maxWidth="250px"
t.id=c
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.bp)(b),++r){q=b[r]
if(q.cj(!0)){p=W.vP("","",null,!1)
p.value=q.gaY()
o=q.gaY()
p.textContent=null
p.appendChild(C.L.au(p,o,null,null))
t.add(p,null)}}a.appendChild(t)
if(C.d.T(c,"First"))t.selectedIndex=0
else if(C.f.geh(t).a.length>1)t.selectedIndex=1
return t},
jL:function(a){var t,s,r,q,p,o,n,m,l,k
t=document
s=t.createElement("div")
s.classList.add("itemStats")
r=t.createElement("div")
C.i.at(r,a.gaY())
r.classList.add("itemHeader")
s.appendChild(r)
q=t.createElement("div")
C.i.at(q,"Rank: "+C.e.a5(a.gas()))
s.appendChild(q)
p=t.createElement("div")
C.i.at(p,"Times Alchemized: "+a.f+" out of "+a.r)
s.appendChild(p)
o=t.createElement("div")
C.i.at(o,"Attributes: ")
s.appendChild(o)
for(n=a.e,m=new P.d6(n,n.r,null,null,[null]),m.c=n.e;m.w();){l=m.d
k=t.createElement("div")
k.classList.add("oneTrait")
n=H.n(C.a.gV(l.gb4()))+"("+H.n(l.gas())+")"
k.textContent=null
k.appendChild(C.i.au(k,n,null,null))
s.appendChild(k)}return s},
rc:function(){var t,s
for(t=$.$get$bS(),t=t.gay(t),t=t.gP(t),s=0;t.w();)if(t.gG().gj2())++s
return s},
un:function(){var t,s,r
E.y_()
if($.k_==null){t=document.createElement("button")
$.k_=t
t.id="clearButton"
C.j.at(t,"Clear Save Data?")
t=$.k_
t.toString
W.cJ(t,"click",new E.k0(),!1,W.f6)}t=$.ra
s=""+E.rc()+"/"
r=$.$get$bS()
r=r.gay(r)
J.c3(t,s+H.n(r.gn(r))+" (AutoSaved)")
$.ra.appendChild($.k_)
t=E.rc()
s=$.$get$bS()
s=s.gay(s)
if(t===s.gn(s)&&!$.uo){$.uo=!0
window.alert("Whoa. You won!")
J.c3($.d8,"Holy fuck, you won! <a target='_blank' href ='index2.html?lawnring=prospit'>Enjoy Hanging out with these OTHER obsessive assholes.</a> Take a screenshot of as many of your achievements as you can manage if you want a special role on the discord.")}},
y_:function(){var t,s,r,q
P.cE("saving...")
for(t=$.$get$bS(),t=t.gad(t),t=t.gP(t);t.w();){s=t.gG()
r=$.$get$bS().m(0,s).b
q=$.r7
r=r.classList.contains(q)
if(r)window.localStorage.setItem(J.d7(s),"true")}},
xX:function(){var t,s,r,q
P.cE("saving...")
for(t=$.$get$bS(),t=t.gad(t),t=t.gP(t);t.w();){s=t.gG()
r=window.localStorage
q=J.d7(s)
r.getItem(q)
r.removeItem(q)}},
xY:function(){var t,s
for(t=$.$get$bS(),t=t.gad(t),t=t.gP(t);t.w();){s=t.gG()
if(window.localStorage.getItem(J.d7(s))==="true")$.$get$bS().m(0,s).c9(0)}J.c3($.e9,"Grist: "+$.cO)
if($.cO<=0){$.cO=13
J.c3($.e9,"Grist: 13")}},
xZ:function(a,b){var t,s,r,q,p,o,n,m
$.ra=b
t=P.bf(G.vH(),!0,G.d)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.bp)(t),++r){q=t[r]
if(q.gb4().length!==0){p=$.$get$bS()
o=new E.dZ(q,null)
n=document.createElement("div")
o.b=n
m=$.jZ
n.classList.add(m)
m=q.gM(q)
n.textContent=null
n.appendChild(C.i.au(n,m,null,null))
a.appendChild(n)
p.i(0,q,o)}}s=[P.v]
p=H.a([],s)
o=$.o
n=[G.V]
m=H.a([],n)
H.a([],s)
p=new G.d("Shogun Summoned",m,o,p,0)
$.$get$b().h(0,p)
$.re=p
p=H.a([],s)
o=$.o
m=H.a([],n)
H.a([],s)
p=new G.d("Shogun Banished",m,o,p,0)
$.$get$b().h(0,p)
$.rd=p
p=H.a([],s)
o=$.o
m=H.a([],n)
H.a([],s)
p=new G.d("AB Glitched",m,o,p,0)
$.$get$b().h(0,p)
$.r9=p
p=H.a([],s)
o=$.o
n=H.a([],n)
H.a([],s)
p=new G.d("AB Fixed",n,o,p,0)
$.$get$b().h(0,p)
$.r8=p
p=$.$get$bS()
o=$.re
n=new E.dZ(o,null)
n.by(a)
p.i(0,o,n)
n=$.$get$bS()
o=$.rd
p=new E.dZ(o,null)
p.by(a)
n.i(0,o,p)
p=$.$get$bS()
o=$.r9
n=new E.dZ(o,null)
n.by(a)
p.i(0,o,n)
n=$.$get$bS()
o=$.r8
p=new E.dZ(o,null)
p.by(a)
n.i(0,o,p)
E.xY()
E.un()},
qK:function qK(){},
qL:function qL(){},
qM:function qM(){},
qN:function qN(){},
qP:function qP(){},
qQ:function qQ(){},
qR:function qR(){},
dZ:function dZ(a,b){this.a=a
this.b=b},
k0:function k0(){},
nB:function nB(){},
nE:function nE(a){this.a=a},
hn:function hn(e,a,b,c,d){var _=this
_.e=e
_.a=a
_.b=b
_.c=c
_.d=d},
nC:function nC(a,b){this.a=a
this.b=b},
jd:function jd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nD:function nD(a,b){this.a=a
this.b=b},
nA:function nA(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
ho:function ho(){},
hO:function hO(cy,db,dx,dy,fr,fx,fy,go,id,a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
lt:function lt(k1,k2,k3,cy,db,dx,dy,fr,fx,fy,go,id,a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
_.k1=k1
_.k2=k2
_.k3=k3
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
jT:function jT(cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
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
jc:function jc(cy,db,dx,dy,fr,fx,fy,go,a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
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
jU:function jU(a,b){this.a=a
this.b=b},
jW:function jW(a){this.a=a},
jV:function jV(a){this.a=a},
rF:function(a,b){var t=new E.cz(null,C.c,b,a,"provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],[X.df]),!1,H.a([],[Z.cT]),!1,H.a([],[N.cH]),0,H.a([],[E.L]),null,null,!1,H.a([],[Q.ct]),"",null,null)
t.p(a,b)
return t},
hh:function hh(a,b){this.a=a
this.b=b},
cz:function cz(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,a$){var _=this
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
j2:function j2(){},
L:function L(a,b,c){this.a=a
this.b=b
this.c=c},
fD:function fD(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},
k7:function k7(a,b,c){this.a=a
this.b=b
this.c=c},
k8:function k8(a){this.a=a},
k9:function k9(a){this.a=a},
mB:function mB(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
n9:function n9(rx,ry,x1,x2,y1,y2,t,B,C,K,E,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.B=B
_.C=C
_.K=K
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
_.r2=r2},
no:function no(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
oI:function oI(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
cI:function cI(){},
j1:function j1(){},
nQ:function nQ(a){this.a=a},
hp:function hp(){},
hg:function hg(){},
fa:function fa(c,a,b,$ti){var _=this
_.c=c
_.a=a
_.b=b
_.$ti=$ti},
j7:function j7(c,a,b){this.c=c
this.a=a
this.b=b},
n1:function n1(a){this.a=a},
n2:function n2(a){this.a=a},
kn:function kn(c,a,b){this.c=c
this.a=a
this.b=b}},D={
y0:function(a,b,c){var t,s,r
if(!C.a.gV(a).cj(!1)){b.ak.cy
t=!0}else t=!1
if(t)return H.a([],[D.d9])
if(C.r.b8(c,1)){t=new D.fz(a,null)
t.b3()
s=new D.fA(a,null)
s.b3()
r=new D.fB(a,null)
r.b3()
return H.a([t,s,r],[D.d9])}t=new D.fz(a,null)
t.b3()
s=new D.fA(a,null)
s.b3()
r=new D.fB(a,null)
r.b3()
return H.a([t,s,r],[D.d9])},
d9:function d9(){},
fz:function fz(a,b){this.a=a
this.b=b},
fA:function fA(a,b){this.a=a
this.b=b},
fB:function fB(a,b){this.a=a
this.b=b},
rC:function(a){var t=P.cD(P.v,D.fR)
t.W(0,a.a)
return new D.ih(t)},
dt:function(a,b,c){return new D.lm(a,new D.ln(c),b,[c])},
ds:function ds(){},
ih:function ih(a){this.a=a},
fR:function fR(){},
lm:function lm(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
ln:function ln(a){this.a=a},
oj:function oj(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
w1:function(a){var t=new D.n8([],[],0,"","",0,0,a)
t.i6(a)
return t},
xd:function(a,b,c){var t,s
for(t="",s=0;s<c;++s)t=C.d.af(t,b)
return J.xP(a,b,t)},
G4:function(a){var t=[["x","%"],["X","%"],["s","z"],["w","vv"],["w","v"],["v","w"],["!","~"],["N","|\\/"],["\\b[a-z]*\\b","\u79c1"]]
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
if(a.a.D()>0.5)return a.v(t)
return a.v($.$get$tR())},
n8:function n8(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
F5:function(){if($.wb)return
$.wb=!0
var t=new D.bk("Experience","learned","na\xefve",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cv().push(t)
t.y=0
$.tx=t
t=new D.bk("Grist Level","rich","poor",!1,!1,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cv().push(t)
$.F4=t
t=new D.jp(0.03,"Power","strong","weak",!0,!0,!1,10,0.5,-1/0,1/0,-1/0,1/0)
$.$get$cv().push(t)
t.y=2.5
t.Q=1
$.u=t
t=new D.jp(0.04,"Health","sturdy","fragile",!0,!0,!1,10,1,-1/0,1/0,-1/0,1/0)
$.$get$cv().push(t)
t.y=2.5
$.al=t
t=new D.bk("Current Health","healthy","infirm",!1,!0,!0,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cv().push(t)
$.b3=t
t=new D.bk("Mobility","fast","slow",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cv().push(t)
$.aX=t
t=new D.nd("Relationships","friendly","aggressive",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cv().push(t)
$.cc=t
t=new D.bk("Sanity","calm","crazy",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cv().push(t)
$.aY=t
t=new D.bk("Free Will","willful","gullible",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cv().push(t)
$.bu=t
t=new D.bk("Maximum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cv().push(t)
$.bE=t
t=new D.bk("Minimum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cv().push(t)
$.c5=t
t=new D.bk("Alchemy","creative","boring",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cv().push(t)
$.d4=t
t=new D.bk("SBURB Lore","woke","clueless",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cv().push(t)
$.ci=t},
ty:function(){var t=$.$get$cv()
return new H.bv(t,new D.nS(),[H.I(t,0)])},
F6:function(){var t=$.$get$cv()
return new H.bv(t,new D.nT(),[H.I(t,0)])},
nS:function nS(){},
nT:function nT(){},
bk:function bk(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
jp:function jp(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
nd:function nd(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
ne:function ne(){},
nf:function nf(){}},K={bL:function bL(a,b){this.a=a
this.b=b},me:function me(rx,ry,x1,x2,y1,y2,t,B,C,K,E,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.B=B
_.C=C
_.K=K
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
_.r2=r2},
F0:function(){var t=$.tv
if(t==null){t=K.F_()
$.tv=t}return t},
F_:function(){var t=new K.nv(0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,0,1,-15,!1,1000,13,20,350,100,500*$.u.r,null,null,null,H.a([],[Q.ct]),6.12,new K.mv(null,null,null,null,null,null,null,null,null,null,null,null,null,null))
t.i7()
return t},
nv:function nv(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
mv:function mv(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy){var _=this
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
uv:function(){var t=$.$get$eG()
t=t.gay(t)
return new H.bv(t,new L.k4(),[H.ap(t,"z",0)])},
yl:function(){var t=$.$get$eG()
t=t.gay(t)
return new H.bv(t,new L.k5(),[H.ap(t,"z",0)])},
ym:function(){var t=$.$get$eG()
t=t.gay(t)
return new H.bv(t,new L.k6(),[H.ap(t,"z",0)])},
y1:function(a,b,c,d){var t,s,r
t=P.v
s=A.cP
r=P.N
r=new L.an(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
r.j(0,$.at,L.e("#FF9B00"),!0)
r.j(0,$.aw,L.e("#FF9B00"),!0)
r.j(0,$.av,L.e("#FF8700"),!0)
r.j(0,$.aG,L.e("#7F7F7F"),!0)
r.j(0,$.aF,L.e("#727272"),!0)
r.j(0,$.ay,L.e("#A3A3A3"),!0)
r.j(0,$.az,L.e("#999999"),!0)
r.j(0,$.ax,L.e("#898989"),!0)
r.j(0,$.aD,L.e("#EFEFEF"),!0)
r.j(0,$.aC,L.e("#DBDBDB"),!0)
r.j(0,$.aB,L.e("#C6C6C6"),!0)
r.j(0,$.aA,L.e("#ADADAD"),!0)
s=[t]
t=new L.cZ(0.5,a,new H.q(0,null,null,null,null,null,0,[X.E,P.T]),null,"","",!1,b,null,c,!1,!1,!1,!0,1,r,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.L]),H.a([],[A.d0]),Q.F(null,null,A.a4))
t.a1(a,b,c,!1)
return t},
e:function(a){if(!!J.am(a).$iscP)return a
if(typeof a==="number"&&Math.floor(a)===a)return A.ks(a,C.d.h2(C.b.bN(a,16),6,"0").length>6)
if(typeof a==="string")if(C.d.aL(a,"#"))return A.kt(C.d.aS(a,1))
else return A.kt(a)
throw H.m("Invalid AspectPalette input: colour must be a Colour object, a valid colour int, or valid hex string (with or without leading #)")},
k4:function k4(){},
k5:function k5(){},
k6:function k6(){},
cZ:function cZ(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kf:function kf(id,k1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,b$,c$,d$,e$,f$,r$){var _=this
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
l3:function l3(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
my:function my(rx,ry,x1,x2,y1,y2,t,B,C,K,E,R,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.B=B
_.C=C
_.K=K
_.E=E
_.R=R
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
na:function na(rx,ry,x1,x2,y1,y2,t,B,C,K,E,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.B=B
_.C=C
_.K=K
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
_.r2=r2},
nr:function nr(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
nF:function nF(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
hV:function hV(a,b){this.a=a
this.b=b},
dR:function dR(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,t,B,C,K,E,R,A,ar,b5,aI,aW,ak){var _=this
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
_.B=B
_.C=C
_.K=K
_.E=E
_.R=R
_.A=A
_.ar=ar
_.b5=b5
_.aI=aI
_.aW=aW
_.ak=ak}},M={ka:function ka(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},hT:function hT(){},kx:function kx(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},fM:function fM(){},lv:function lv(d,e,f,r,x,a,b,c){var _=this
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.a=a
_.b=b
_.c=c},
E3:function(a,b,c,d){var t=new M.fY(!1,null,null,null,null,null,null,null,null,!1,!1,!1,null,null,null,null,null,!1,null,null,$.$get$ii(),null,null,null,Q.F(null,null,X.E),Q.F(null,null,N.Y),P.cD(P.v,[Q.bK,N.Y]))
t.i2(a,b,c,d)
return t},
fY:function fY(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,b$,c$,d$,e$,f$,r$){var _=this
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
iZ:function iZ(){},
m8:function m8(){},
m9:function m9(){},
ma:function ma(){},
mb:function mb(){},
bt:function bt(a,b){this.a=a
this.b=b},
nO:function nO(a){this.a=a},
oP:function oP(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id}},O={kb:function kb(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},de:function de(){},eb:function eb(){},hq:function hq(){},lq:function lq(rx,ry,x1,x2,y1,y2,t,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.B=B
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
_.r2=r2},nH:function nH(rx,ry,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
Gm:function(a){var t,s,r,q,p
t=N.vQ()
a=J.xQ(a,P.nc("(href|src) ?= ?([\"'])(?!https?:)",!0,!1),new O.qS(t))
s=document
J.dp(s.querySelector("#navbar"),"beforeend",a,C.B,null)
if(J.a5(O.G5("seerOfVoid",null),"true")){window.alert("If you gaze long into an abyss, the abyss also gazes into you.  - Troll Bruce Willis")
J.dp(s.querySelector("#story"),"beforeend","<button id = 'voidButton'>Peer into Void, Y/N?</a><div class='void'>Well, NOW you've certainly gone and done it. You can expect to see any Void Player shenanignans now. If there are any.",C.B,null)
r=H.hN(s.querySelector("#voidButton"),"$iseJ")
r.toString
W.cJ(r,"click",new O.qT(),!1,W.f6)}q=O.xt()
p=new A.bI(null,null)
p.aA(H.et(q,null,null))
p.kd()
if($.F1||p.a.D()>0.99)H.hN(s.querySelector("#today"),"$iseF").href="dead_index.html?seed="+q
else H.hN(s.querySelector("#today"),"$iseF").href="index2.html?seed="+q},
xt:function(){var t,s,r,q,p,o
t=new P.fI(Date.now(),!1)
s=H.vU(t)
r=H.vT(t)
q=C.b.u(H.vV(t))
p=C.b.u(s)
o=C.b.u(r)
if(s<10)p="0"+p
if(r<10)o="0"+o
return q+p+o},
G5:function(a,b){var t,s,r,q
t=P.ws().geq().m(0,a)
if(t!=null)t=P.q8(t,0,J.cl(t),C.q,!1)
if(t!=null)return t
s=$.xp
if(s.length!==0){r=J.xU(window.location.href,J.xM(window.location.href,"?")+1)
s=window.location.href
q="?"+r
s.toString
return P.wt(H.jM(s,q,"")+"?"+$.xp,0,null).geq().m(0,a)}return},
Gu:function(){var t,s,r,q,p
t=document
s=t.querySelector("body").style
s.backgroundColor="#f8c858"
s=t.querySelector("body").style
s.backgroundImage="url(images/pen15_bg1.png)"
r=new W.hy(t.querySelectorAll(".void"),[null])
for(t=new H.dx(r,r.gn(r),0,null,[null]);t.w();){q=t.d
p=J.xA(J.jR(q))
if(p==="none"||p.length===0)O.Gp(q)
else O.G8(q)}},
Gp:function(a){J.uj(J.jR(a),"block")},
G8:function(a){J.uj(J.jR(a),"none")},
qS:function qS(a){this.a=a},
qT:function qT(){},
j4:function j4(){}},Y={om:function om(a){this.a=a},kl:function kl(a){this.a=a},lu:function lu(k1,k2,k3,k4,r1,r2,rx,ry,x1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},lw:function lw(k1,k2,k3,k4,r1,r2,rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},mE:function mE(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},ew:function ew(a,b){this.a=a
this.b=b},d_:function d_(r,c,d,e,f,a,b){var _=this
_.r=r
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},R:function R(c,d,e,f,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},a7:function a7(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},kg:function kg(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},by:function by(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},kp:function kp(c,a,b){this.c=c
this.a=a
this.b=b},bF:function bF(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},j5:function j5(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},im:function im(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},j6:function j6(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},ef:function ef(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},np:function np(rx,ry,x1,x2,y1,y2,t,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},jb:function jb(){},nq:function nq(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
tE:function(a){var t
if(a===1)return 0
t=C.e.bd(C.A.D()*a+1)
return t-1},
cW:function(a){var t=J.uk(a,"")
return new H.dh(t,new Y.oS(),[H.I(t,0),null]).c3(0,"")},
qx:function(a,b,c){var t,s,r
t=Y.Gj(b,c)
s=t.length
if(s===0)return
r=C.e.bd(a.a.D()*(s-1-0+1))
if(r<0||r>=t.length)return H.J(t,r)
return t[r]},
Gj:function(a,b){var t,s,r
t=[]
for(s=0;s<a.length;++s){r=a[s]
if(C.d.aL(r,b))t.push(r)}return t},
fv:function(a){var t,s,r
t=C.a.c3(C.a.eM(a,0,a.length-1),", ")
s=C.a.gc4(a)
r=a.length<2?"":" and "
return C.a.c3([t,s],r)},
FY:function(a){var t,s,r,q,p,o
t=J.uk(a," ")
for(s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.bp)(t),++q){p=t[q]
o=J.bo(p)
r+=" "+(J.r5(o.m(p,0))+o.aS(p,1))}return r},
G3:function(a){var t,s,r,q
t=[]
for(s=0;s<16;++s){r=s%4
if(r===3&&s>4){r=a.ai.gJ()
q=C.l.a5((s-6)/4)
if(q<0||q>=r.length)return H.J(r,q)
t.push(r[q])}else if(r===2&&s>4){r=a.a8.gJ()
q=C.l.a5((s-5)/4)
if(q<0||q>=r.length)return H.J(r,q)
t.push(r[q])}else if(r===1)if(s<8){r=a.aN.a.gJ()
q=C.l.a5(s/4)
if(q<0||q>=r.length)return H.J(r,q)
t.push(r[q])}else{r=a.aO.a.gJ()
q=C.l.a5((s-8)/4)
if(q<0||q>=r.length)return H.J(r,q)
t.push(r[q])}else if(r===0||s<4)t.push(a.c.A.v($.$get$x5()))}return t},
xj:function(a,b){var t=(b&&C.a).be(b,a)
if(t!==-1){C.a.bs(b,"removeAt")
if(t<0||t>=b.length)H.bq(P.hj(t,null,null))
b.splice(t,1)[0]}},
tM:function(a){var t=J.am(a)
if(t.O(a,"#ff0000"))return 14
if(t.O(a,"#ffc3df"))return 13
if(a==null)return 15
return C.a.be($.$get$jF(),a)},
oS:function oS(){}},Z={kk:function kk(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,t,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},kE:function kE(rx,ry,x1,x2,y1,y2,t,B,C,K,E,R,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.B=B
_.C=C
_.K=K
_.E=E
_.R=R
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
du:function(a,b,c){$.$get$uZ().i(0,b,new Z.i5(a,c,[null,null]))
a.a.push(b)},
i5:function i5(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
lG:function lG(){},
ml:function ml(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,t,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
nh:function nh(rx,ry,x1,x2,y1,y2,t,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
aE:function(a,b,c,d){var t=new Z.cT(c,a,b,!0,d,!1,H.a([],[Z.Z]),null)
t.i0(a,b,c,d)
return t},
cT:function cT(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
ls:function ls(a){this.a=a},
Z:function Z(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x}},A={ku:function ku(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
yD:function(a){return new A.l7(a)},
rq:function(a,b){return new A.l5(a,b)},
yC:function(a,b){return new A.l6(a,b)},
yE:function(a,b,c,d,e){a.kr(b,e)},
l7:function l7(a){this.a=a},
l5:function l5(a,b){this.a=a
this.b=b},
l6:function l6(a,b){this.a=a
this.b=b},
vI:function(a){var t=$.$get$fW()
t.toString
return new H.bv(t,new A.m_(a),[H.I(t,0)])},
i:function(a,b,c,d,e){var t=new A.a4(c,e,a,d,P.a3(null,null,null,G.V),0,3)
t.L(a,b,c,d,e)
return t},
a4:function a4(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},
m_:function m_(a){this.a=a},
lY:function lY(){},
lZ:function lZ(){},
lW:function lW(){},
lX:function lX(){},
od:function od(a,b){this.a=a
this.b=b},
j_:function j_(){},
d0:function d0(){},
hS:function hS(Q,a,b,c,d,e,f,r,x,y,z){var _=this
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
ed:function(a,b,c,d){var t=new A.cP(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.i_(a,b,c,d)
return t},
kr:function(a,b,c,d){var t=A.ed(0,0,0,255)
t.b=C.b.ac(C.e.bd(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.b.ac(C.e.bd(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.b.ac(C.e.bd(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.b.ac(C.e.bd(d*255),0,255)
return t},
ks:function(a,b){if(b){if(typeof a!=="number")return a.bQ()
return A.ed((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.bQ()
return A.ed((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
kt:function(a){return A.ks(H.et(a,16,new A.qs()),a.length>=8)},
cP:function cP(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
qs:function qs(){},
mW:function mW(){},
j0:function j0(){},
bI:function bI(a,b){this.a=a
this.b=b},
G7:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if($.x2)return
$.x2=!0
D.F5()
t=P.v
s=[t]
r=H.a(["metal"],s)
q=$.r
H.a([],s)
r=new G.bG(q,r,0.3)
$.$get$b().h(0,r)
$.C=r
r=H.a(["dutton"],s)
q=$.af
H.a([],s)
r=new G.bG(q,r,0.6)
$.$get$b().h(0,r)
$.vc=r
r=H.a(["ceramic"],s)
q=$.r
H.a([],s)
r=new G.bG(q,r,-0.3)
$.$get$b().h(0,r)
$.bM=r
r=H.a(["bone"],s)
q=$.r
H.a([],s)
r=new G.bG(q,r,0.2)
$.$get$b().h(0,r)
$.bd=r
r=H.a(["wood"],s)
q=$.r
H.a([],s)
r=new G.bG(q,r,-0.3)
$.$get$b().h(0,r)
$.a1=r
r=H.a(["plastic"],s)
q=$.r
H.a([],s)
r=new G.bG(q,r,-0.3)
$.$get$b().h(0,r)
$.aT=r
r=H.a(["rubber"],s)
q=$.r
H.a([],s)
r=new G.bG(q,r,-0.3)
$.$get$b().h(0,r)
$.ca=r
r=H.a(["paper"],s)
q=$.r
H.a([],s)
r=new G.bG(q,r,-0.3)
$.$get$b().h(0,r)
$.O=r
r=H.a(["cloth","fabric"],s)
q=$.r
H.a([],s)
r=new G.bG(q,r,-0.3)
$.$get$b().h(0,r)
$.Q=r
r=H.a(["glass"],s)
q=$.r
H.a([],s)
r=new G.bG(q,r,-0.3)
$.$get$b().h(0,r)
$.bb=r
r=H.a(["ghostly","ectoplasm"],s)
q=$.r
H.a([],s)
r=new G.bG(q,r,-0.3)
$.$get$b().h(0,r)
$.bV=r
r=H.a(["flesh","meat","muscle"],s)
q=$.r
H.a([],s)
r=new G.bG(q,r,-0.1)
$.$get$b().h(0,r)
$.bm=r
r=H.a(["horrorterror","tentacled","grimdark"],s)
q=$.G
H.a([],s)
r=new G.bG(q,r,3.1)
$.$get$b().h(0,r)
$.be=r
r=H.a(["fur","fluff","fuzzy"],s)
q=$.r
H.a([],s)
r=new G.bG(q,r,-0.1)
$.$get$b().h(0,r)
$.cg=r
r=H.a(["plant","leaf","vine"],s)
q=$.r
H.a([],s)
r=new G.bG(q,r,-0.1)
$.$get$b().h(0,r)
$.b4=r
r=H.a(["feathery"],s)
q=$.r
H.a([],s)
r=new G.bG(q,r,-0.1)
$.$get$b().h(0,r)
$.bB=r
r=H.a(["gross","ugly","unpleasant"],s)
q=$.K
H.a([],s)
r=new G.bG(q,r,0.1)
$.$get$b().h(0,r)
$.bP=r
r=H.a(["shitty","poorly made","conksuck","piece-of-shit"],s)
q=$.K
H.a([],s)
r=new G.bG(q,r,-13)
$.$get$b().h(0,r)
$.bO=r
r=H.a(["stone","rock","concrete"],s)
q=$.r
H.a([],s)
r=new G.bG(q,r,0.3)
$.$get$b().h(0,r)
$.aM=r
r=H.a(["legendary"],s)
q=$.t7
H.a([],s)
r=new G.bG(q,r,13)
$.$get$b().h(0,r)
$.a6=r
r=$.K
H.a([],s)
r=new G.aW(r,["edged","sharp","honed","keen","bladed"],0.3)
$.$get$b().h(0,r)
$.aL=r
r=$.t8
H.a([],s)
r=new G.aW(r,["glowing","bright","illuminated"],0.1)
$.$get$b().h(0,r)
$.b8=r
r=$.t8
H.a([],s)
r=new G.aW(r,["obscuring","dark","shadowy"],0.1)
$.$get$b().h(0,r)
$.aq=r
r=$.K
H.a([],s)
r=new G.aW(r,["calming","pale","placating","shooshing"],0.1)
$.$get$b().h(0,r)
$.bz=r
r=$.G
H.a([],s)
r=new G.aW(r,["nuclear","radioactive","irradiated"],1)
$.$get$b().h(0,r)
$.c4=r
r=$.K
H.a([],s)
r=new G.aW(r,["scary","horrifying","terrifying","spooky"],0.2)
$.$get$b().h(0,r)
$.bc=r
r=$.K
H.a([],s)
r=new G.aW(r,["lucky","fortunate","gambler's","favored","charmed"],0.3)
$.$get$b().h(0,r)
$.bW=r
r=$.K
H.a([],s)
r=new G.aW(r,["doomed","cursed","unlucky"],-0.3)
$.$get$b().h(0,r)
$.aR=r
r=$.G
H.a([],s)
r=new G.aW(r,["pointy","piercing","sharp","barbed","piked","sharpened","pronged","pointed"],0.3)
$.$get$b().h(0,r)
$.b2=r
r=$.o
H.a([],s)
r=new G.aW(r,["exploding","explosive","detonating","grenade"],0.6)
$.$get$b().h(0,r)
$.bs=r
r=$.o
H.a([],s)
r=new G.aW(r,["electrical","zap","lightning","shock"],0.6)
$.$get$b().h(0,r)
$.aa=r
r=$.o
H.a([],s)
r=new G.aW(r,["restraining","imprisoning","restricting"],0.3)
$.$get$b().h(0,r)
$.bi=r
r=$.K
H.a([],s)
r=new G.aW(r,["expensive","valuable","bling","money"],0.1)
$.$get$b().h(0,r)
$.bj=r
r=$.K
H.a([],s)
r=new G.aW(r,["edible","tasty","delicious","savory"],0.1)
$.$get$b().h(0,r)
$.aH=r
r=$.K
H.a([],s)
r=new G.aW(r,["classy","distinguished","tasteful","cultured"],0.1)
$.$get$b().h(0,r)
$.ao=r
r=$.K
H.a([],s)
r=new G.aW(r,["cool","wicked","radical","awesome","groovy","tubular","bitching","bodacious"],0.1)
$.$get$b().h(0,r)
$.au=r
r=$.K
H.a([],s)
r=new G.aW(r,["intelligent","smart","useful","scientific","encyclopedic"],0.1)
$.$get$b().h(0,r)
$.a0=r
r=$.G
H.a([],s)
r=new G.aW(r,["sentient","aware","conscious","awake","talking"],0.1)
$.$get$b().h(0,r)
$.aI=r
r=$.K
H.a([],s)
r=new G.aW(r,["romantic","amorous","tender","affectionate","lovey-dovey"],0.1)
$.$get$b().h(0,r)
$.aJ=r
r=$.K
H.a([],s)
r=new G.aW(r,["funny","hilarious","comedy"],0.1)
$.$get$b().h(0,r)
$.b7=r
r=$.K
H.a([],s)
r=new G.aW(r,["annoying","enraging","dickish","asshole"],0.1)
$.$get$b().h(0,r)
$.bA=r
r=$.K
H.a([],s)
r=new G.aW(r,["magical","mystical","magickal","wizardy"],0.6)
$.$get$b().h(0,r)
$.a9=r
r=$.t7
H.a([],s)
r=new G.aW(r,["aspecty","imbued","focused","energized","awakened","infused"],1.3)
$.$get$b().h(0,r)
$.X=r
r=$.t7
H.a([],s)
r=new G.aW(r,["class-related","appropriate","themed"],1.3)
$.$get$b().h(0,r)
$.S=r
r=$.K
H.a([],s)
r=new G.aW(r,["pretty","aesthetic","beautiful"],0.1)
$.$get$b().h(0,r)
$.aO=r
r=$.o
H.a([],s)
r=new G.aW(r,["healing","regenerating","recovery","life"],0.3)
$.$get$b().h(0,r)
$.b1=r
r=$.K
H.a([],s)
r=new G.aW(r,["uncomfortable","hard","unpleasant"],0.1)
$.$get$b().h(0,r)
$.aU=r
r=$.K
H.a([],s)
r=new G.aW(r,["comfortable","comforting","soft","cozy","snug","pleasant","plush"],-0.1)
$.$get$b().h(0,r)
$.bh=r
r=$.K
H.a([],s)
r=new G.aW(r,["poisonous","venomous","draining","poison"],0.6)
$.$get$b().h(0,r)
$.bN=r
r=$.K
H.a([],s)
r=new G.aW(r,["chilly","chill","cold","freezing","icy","frozen","ice"],0.6)
$.$get$b().h(0,r)
$.br=r
r=$.K
H.a([],s)
r=new G.aW(r,["heavy","weighs a ton","heavy","heavy enough to kill a cat"],0.4)
$.$get$b().h(0,r)
$.c9=r
r=$.K
H.a([],s)
r=new G.aW(r,["fire","burning","blazing","hot","heated","on fire","combusting","flaming","fiery"],0.6)
$.$get$b().h(0,r)
$.ar=r
r=$.K
H.a([],s)
r=new G.aW(r,["blunt","bludgeoning","dull"],0.3)
$.$get$b().h(0,r)
$.ai=r
r=$.o
H.a([],s)
r=new G.aW(r,["shooty","ranged","projectile","loaded","long range"],0.3)
$.$get$b().h(0,r)
$.aZ=r
r=$.K
H.a([],s)
r=new G.aW(r,["musical","melodic","harmonious","tuneful","euphonious","mellifluous,"],0.1)
$.$get$b().h(0,r)
$.ae=r
r=$.K
H.a([],s)
r=new G.aW(r,["loud","ear splitting","noisy","deafening","thundering"],0.3)
$.$get$b().h(0,r)
$.b9=r
r=$.K
H.a([],s)
r=new G.aW(r,["fake","false","imitation","simulated","replica"],-0.3)
$.$get$b().h(0,r)
$.b6=r
r=$.K
H.a([],s)
r=new G.aW(r,["real","actual","believable","geniune","guaranteed","veritable"],0.3)
$.$get$b().h(0,r)
$.bn=r
r=H.a(["perfectly generic"],s)
q=$.K
H.a([],s)
r=new G.ah(q,r,0.1)
$.$get$b().h(0,r)
$.rR=r
r=H.a(["a sword"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.f1=r
r=H.a(["a hammer"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.rU=r
r=H.a(["a rifle"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.t3=r
r=H.a(["a pistol"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.t_=r
r=H.a(["a blade"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.rJ=r
r=H.a(["a dagger"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.rO=r
r=H.a(["a santa"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.fV=r
r=H.a(["a fist"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.ve=r
r=H.a(["claws"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.lN=r
r=H.a(["a grenade"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.lO=r
r=H.a(["a freaking safe"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.vw=r
r=H.a(["a ball"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.em=r
r=H.a(["a trident"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.vE=r
r=H.a(["a card"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.rM=r
r=H.a(["a frying pan"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.rQ=r
r=H.a(["a pillow"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.iK=r
r=H.a(["a machinegun"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.rX=r
r=H.a(["a shuriken"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.vA=r
r=H.a(["a sling"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.vC=r
r=H.a(["a yoyo"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.vG=r
r=H.a(["a cane"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.v8=r
r=H.a(["a shield"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.f0=r
r=H.a(["a lance"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.vo=r
r=H.a(["a ax"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.rI=r
r=H.a(["a sign"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.vu=r
r=H.a(["a book"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.aS=r
r=H.a(["a broom"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.iH=r
r=H.a(["a club"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.iJ=r
r=H.a(["a bow"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.rK=r
r=H.a(["a whip"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.vF=r
r=H.a(["a staff"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.vD=r
r=H.a(["a needle"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.rZ=r
r=H.a(["dice"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.rP=r
r=H.a(["a fork"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.vf=r
r=H.a(["a pigeon???"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,1.3)
$.$get$b().h(0,r)
$.lR=r
r=H.a(["a chainsaw"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.v9=r
r=H.a(["a sickle"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.vB=r
r=H.a(["a shotgun"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.vy=r
r=H.a(["a stick"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.dw=r
r=H.a(["a chain"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.fU=r
r=H.a(["a wrench"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.t5=r
r=H.a(["a shovel"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.vz=r
r=H.a(["a rolling pin"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.t4=r
r=H.a(["a puppet"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.t1=r
r=H.a(["a razor"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.t2=r
r=H.a(["a pen"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.lQ=r
r=H.a(["a bust"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.iI=r
r=H.a(["a bowling ball"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.zr=r
r=H.a(["a golf club"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.vh=r
r=H.a(["a knife"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.rW=r
r=H.a(["scissors"],s)
q=$.a8
H.a([],s)
r=new G.ah(q,r,0.4)
$.$get$b().h(0,r)
$.vx=r
r=H.a(["forged","sharpened","honed","filed"],s)
q=$.G
p=G.V
o=[p]
n=H.a([$.C,$.aL,$.b2],o)
H.a([],s)
r=new G.d("Forged",n,q,r,0)
$.$get$b().h(0,r)
$.AL=r
r=H.a([],s)
q=$.r
n=H.a([$.ai,$.aL],o)
H.a([],s)
r=new G.d("",n,q,r,0)
$.$get$b().h(0,r)
$.Ag=r
r=H.a(["fossilized"],s)
q=$.G
n=H.a([$.bd,$.aM],o)
H.a([],s)
r=new G.d("Fossilized",n,q,r,0)
$.$get$b().h(0,r)
$.AM=r
r=H.a(["adamantium"],s)
q=$.G
n=H.a([$.bd,$.C],o)
H.a([],s)
r=new G.d("Adamantium",n,q,r,0)
$.$get$b().h(0,r)
$.v5=r
r=H.a([],s)
q=$.r
n=H.a([$.bh,$.aU],o)
H.a([],s)
r=new G.d("",n,q,r,0)
$.$get$b().h(0,r)
$.Dn=r
r=H.a(["tatami"],s)
q=$.r
n=H.a([$.Q,$.a1],o)
H.a([],s)
r=new G.d("Tatami",n,q,r,0)
$.$get$b().h(0,r)
$.DC=r
r=H.a(["mesh","chain link"],s)
q=$.r
n=H.a([$.Q,$.C],o)
H.a([],s)
r=new G.d("Mesh",n,q,r,0)
$.$get$b().h(0,r)
$.BL=r
r=H.a(["foil"],s)
q=$.r
n=H.a([$.O,$.C],o)
H.a([],s)
r=new G.d("Foil",n,q,r,0)
$.$get$b().h(0,r)
$.AH=r
r=H.a(["beanbag"],s)
q=$.r
n=H.a([$.Q,$.aM],o)
H.a([],s)
r=new G.d("Beanbag",n,q,r,0)
$.$get$b().h(0,r)
$.zl=r
r=H.a(["pleather","faux fur"],s)
q=$.r
n=H.a([$.cg,$.aT],o)
H.a([],s)
r=new G.d("Faux Fur",n,q,r,0)
$.$get$b().h(0,r)
$.Cl=r
r=H.a(["plywood"],s)
q=$.r
n=H.a([$.a1,$.O],o)
H.a([],s)
r=new G.d("Plywood",n,q,r,0)
$.$get$b().h(0,r)
$.t0=r
r=H.a(["colossus"],s)
q=$.r
n=H.a([$.C,$.bm],o)
H.a([],s)
r=new G.d("Colossus",n,q,r,0)
$.$get$b().h(0,r)
$.va=r
r=H.a(["rotting","zombie"],s)
q=$.G
n=H.a([$.bP,$.bm],o)
H.a([],s)
r=new G.d("Rotting",n,q,r,0)
$.$get$b().h(0,r)
$.CK=r
r=H.a(["draugr","white walker"],s)
q=$.G
n=H.a([$.bP,$.bm,$.br],o)
H.a([],s)
r=new G.d("Draugr",n,q,r,0)
$.$get$b().h(0,r)
$.Ad=r
r=H.a(["Ultraviolet"],s)
q=$.t6
n=H.a([$.b8,$.aq],o)
H.a([],s)
r=new G.d("Ultraviolet",n,q,r,0)
$.$get$b().h(0,r)
$.Bu=r
r=H.a(["Ultraviolence"],s)
q=$.o
n=H.a([$.b8,$.aq,$.aL],o)
H.a([],s)
r=new G.d("Ultraviolence",n,q,r,0)
$.$get$b().h(0,r)
$.DN=r
r=H.a([],s)
q=$.o
n=H.a([$.aR,$.bW],o)
H.a([],s)
r=new G.d("",n,q,r,0)
$.$get$b().h(0,r)
$.Ab=r
r=H.a(["candy"],s)
q=$.r
n=H.a([$.aH,$.bb],o)
H.a([],s)
r=new G.d("Candy",n,q,r,0)
$.$get$b().h(0,r)
$.rL=r
r=H.a(["cotton candy"],s)
q=$.r
n=H.a([$.aH,$.Q],o)
H.a([],s)
r=new G.d("Cotton Candy",n,q,r,0)
$.$get$b().h(0,r)
$.zX=r
r=H.a(["gummy"],s)
q=$.r
n=H.a([$.aH,$.ca],o)
H.a([],s)
r=new G.d("Gum",n,q,r,0)
$.$get$b().h(0,r)
$.AZ=r
r=H.a(["marrow"],s)
q=$.r
n=H.a([$.aH,$.bd],o)
H.a([],s)
r=new G.d("Marrow",n,q,r,0)
$.$get$b().h(0,r)
$.BE=r
r=H.a(["toothy"],s)
q=$.a8
n=H.a([$.bd,$.bM],o)
H.a([],s)
r=new G.d("Toothy",n,q,r,0)
$.$get$b().h(0,r)
$.DK=r
r=H.a(["Frost"],s)
q=$.r
n=H.a([$.aM,$.bb,$.bm],o)
H.a([],s)
r=new G.d("Frost",n,q,r,0)
$.$get$b().h(0,r)
$.AN=r
r=H.a(["arsenic","antifreeze"],s)
q=$.o
n=H.a([$.aH,$.bN],o)
H.a([],s)
r=new G.d("Arsenic",n,q,r,0)
$.$get$b().h(0,r)
$.Al=r
r=H.a(["crystal","diamond","quartz"],s)
q=$.r
n=H.a([$.aM,$.bb],o)
H.a([],s)
r=new G.d("Crystal",n,q,r,0)
$.$get$b().h(0,r)
$.rN=r
r=H.a(["mary sue","sakura katana chan","shitty oc"],s)
q=$.K
n=H.a([$.aO,$.aJ,$.b7,$.a0,$.ao,$.bW,$.a9],o)
H.a([],s)
r=new G.d("Mary Sue",n,q,r,0)
$.$get$b().h(0,r)
$.BF=r
r=H.a(["edge lord","coldsteel the hedgehog"],s)
q=$.K
n=H.a([$.bc,$.aq,$.aL,$.a6,$.aR,$.a0,$.ao,$.au],o)
H.a([],s)
r=new G.d("Edge Lord",n,q,r,0)
$.$get$b().h(0,r)
$.Aj=r
r=H.a(["deadpool"],s)
q=$.a8
n=H.a([$.bP,$.b1,$.au,$.b7],o)
H.a([],s)
r=new G.d("Deadpool",n,q,r,0)
$.$get$b().h(0,r)
$.A2=r
r=H.a(["spoopy","skellington's","creppy"],s)
q=$.K
n=H.a([$.bc,$.au],o)
H.a([],s)
r=new G.d("Spoopy",n,q,r,0)
$.$get$b().h(0,r)
$.Dq=r
r=H.a(["wolverine"],s)
q=$.a8
n=H.a([$.bd,$.aL,$.b2],o)
H.a([],s)
r=new G.d("Wolverine",n,q,r,0)
$.$get$b().h(0,r)
$.DY=r
r=H.a(["rabbit's foot"],s)
q=$.a8
n=H.a([$.bW,$.cg],o)
H.a([],s)
r=new G.d("Rabbit's Foot",n,q,r,0)
$.$get$b().h(0,r)
$.vt=r
r=H.a(["tipped","reinforced","arrowhead"],s)
q=$.G
n=H.a([$.b2,$.a1],o)
H.a([],s)
r=new G.d("Tipped",n,q,r,0)
$.$get$b().h(0,r)
$.ze=r
r=H.a(["arrow","flechette","bolt"],s)
q=$.a8
n=H.a([$.b2,$.aZ,$.a1],o)
H.a([],s)
r=new G.d("Arrow",n,q,r,0)
$.$get$b().h(0,r)
$.v6=r
r=H.a(["training sword","bokken"],s)
q=$.a8
n=H.a([$.a1,$.aL],o)
H.a([],s)
r=new G.d("Bokken",n,q,r,0)
$.$get$b().h(0,r)
$.Bo=r
r=H.a(["ironic"],s)
q=$.K
n=H.a([$.b6,$.au],o)
H.a([],s)
r=new G.d("Irony Type1",n,q,r,0)
$.$get$b().h(0,r)
$.rV=r
r=H.a(["netted","webbed"],s)
q=$.a8
n=H.a([$.bi,$.Q],o)
H.a([],s)
r=new G.d("Netted",n,q,r,0)
$.$get$b().h(0,r)
$.C_=r
r=H.a(["barbed wire"],s)
q=$.a8
n=H.a([$.b2,$.bi,$.C,$.Q],o)
H.a([],s)
r=new G.d("Barbed Wire",n,q,r,0)
$.$get$b().h(0,r)
$.zi=r
r=H.a(["morning star"],s)
q=$.a8
n=H.a([$.b2,$.ai],o)
H.a([],s)
r=new G.d("Morning Star",n,q,r,0)
$.$get$b().h(0,r)
$.BU=r
r=H.a(["decadent"],s)
q=$.K
n=H.a([$.bh,$.bj],o)
H.a([],s)
r=new G.d("Decadent",n,q,r,0)
$.$get$b().h(0,r)
$.A5=r
r=H.a(["SBAHJ"],s)
q=$.o
n=H.a([$.bO,$.au],o)
H.a([],s)
r=new G.d("SBAHJ",n,q,r,0)
$.$get$b().h(0,r)
$.CU=r
r=H.a(["bayonet"],s)
q=$.a8
n=H.a([$.b2,$.aZ],o)
H.a([],s)
r=new G.d("Bayonet",n,q,r,0)
$.$get$b().h(0,r)
$.zk=r
r=H.a(["Snoop Dog's Snow Cone Machete"],s)
q=$.r
n=H.a([$.br,$.au,$.aL],o)
H.a([],s)
r=new G.d("Snoop",n,q,r,0)
$.$get$b().h(0,r)
$.Dm=r
r=H.a(["light saber"],s)
q=$.o
n=H.a([$.b8,$.ar,$.aL],o)
H.a([],s)
r=new G.d("Light Saber",n,q,r,0)
$.$get$b().h(0,r)
$.Bt=r
r=H.a(["fake as shit","fakey fake","bullshit"],s)
q=$.K
n=H.a([$.a9,$.b6],o)
H.a([],s)
r=new G.d("Fakey Fake",n,q,r,0)
$.$get$b().h(0,r)
$.As=r
r=H.a(["real as shit","suprisingly real"],s)
q=$.K
n=H.a([$.a9,$.bn],o)
H.a([],s)
r=new G.d("Real As Shit",n,q,r,0)
$.$get$b().h(0,r)
$.CE=r
r=H.a(["skeletal"],s)
q=$.a8
n=H.a([$.bc,$.aR,$.bd],o)
H.a([],s)
r=new G.d("Skeletal",n,q,r,0)
$.$get$b().h(0,r)
$.Dg=r
r=H.a(["green sun"],s)
q=$.t8
n=H.a([$.ar,$.c4,$.b8],o)
H.a([],s)
r=new G.d("Green Sun",n,q,r,0)
$.$get$b().h(0,r)
$.rT=r
r=H.a(["midnight","3 In The Morning"],s)
q=$.t6
n=H.a([$.aq,$.ao],o)
H.a([],s)
r=new G.d("Midnight",n,q,r,0)
$.$get$b().h(0,r)
$.BP=r
r=H.a(["radiant","dazzling"],s)
q=$.K
n=H.a([$.a9,$.b8],o)
H.a([],s)
r=new G.d("Radiant",n,q,r,0)
$.$get$b().h(0,r)
$.CB=r
r=H.a(["edgy"],s)
q=$.K
n=H.a([$.aL,$.aq,$.au],o)
H.a([],s)
r=new G.d("Edgy",n,q,r,0)
$.$get$b().h(0,r)
$.Ak=r
r=H.a(["A-Bomb","Warhead","Chernobyl"],s)
q=$.o
n=H.a([$.c4,$.bs],o)
H.a([],s)
r=new G.d("Warhead",n,q,r,0)
$.$get$b().h(0,r)
$.z7=r
r=H.a(["living"],s)
q=$.G
n=H.a([$.bd,$.bm,$.aI],o)
H.a([],s)
r=new G.d("Living",n,q,r,0)
$.$get$b().h(0,r)
$.Bx=r
r=H.a(["dead","corpse","deceased"],s)
q=$.G
n=H.a([$.bd,$.bm],o)
H.a([],s)
r=new G.d("Dead",n,q,r,0)
$.$get$b().h(0,r)
$.A1=r
r=H.a(["taser"],s)
q=$.o
n=H.a([$.aa,$.bi,$.aZ],o)
H.a([],s)
r=new G.d("Taser",n,q,r,0)
$.$get$b().h(0,r)
$.DB=r
r=H.a(["nocturn"],s)
q=$.o
n=H.a([$.aq,$.ae],o)
H.a([],s)
r=new G.d("Nocturn",n,q,r,0)
$.$get$b().h(0,r)
$.C2=r
r=H.a(["dirge"],s)
q=$.o
n=H.a([$.aR,$.ae],o)
H.a([],s)
r=new G.d("Dirge",n,q,r,0)
$.$get$b().h(0,r)
$.A8=r
r=H.a(["Snobbish","Noble"],s)
q=$.K
n=H.a([$.ao,$.bj],o)
H.a([],s)
r=new G.d("Snobbish",n,q,r,0)
$.$get$b().h(0,r)
$.Dl=r
r=H.a(["flat"],s)
q=$.K
n=H.a([$.ai,$.ae],o)
H.a([],s)
r=new G.d("Flat(Music)",n,q,r,0)
$.$get$b().h(0,r)
$.AC=r
r=H.a(["sharp"],s)
q=$.K
n=H.a([$.aL,$.ae],o)
H.a([],s)
r=new G.d("Sharp(Music)",n,q,r,0)
$.$get$b().h(0,r)
$.D2=r
r=H.a(["sharp"],s)
q=$.K
n=H.a([$.ao,$.ae],o)
H.a([],s)
r=new G.d("Sharp(Clothes)",n,q,r,0)
$.$get$b().h(0,r)
$.D1=r
r=H.a(["Bach's"],s)
q=$.af
n=H.a([$.a0,$.ae],o)
H.a([],s)
r=new G.d("Bach's",n,q,r,0)
$.$get$b().h(0,r)
$.zg=r
r=H.a(["Mozart's"],s)
q=$.af
n=H.a([$.a9,$.ae],o)
H.a([],s)
r=new G.d("Mozart's",n,q,r,0)
$.$get$b().h(0,r)
$.BW=r
r=H.a(["Einstein's","Oppenheimer"],s)
q=$.af
n=H.a([$.a0,$.c4],o)
H.a([],s)
r=new G.d("Einstein's",n,q,r,0)
$.$get$b().h(0,r)
$.Am=r
r=H.a(["Feynman's"],s)
q=$.af
n=H.a([$.a0,$.b7],o)
H.a([],s)
r=new G.d("Feynman's",n,q,r,0)
$.$get$b().h(0,r)
$.Aw=r
r=H.a(["Ziptie"],s)
q=$.af
n=H.a([$.aT,$.bi],o)
H.a([],s)
r=new G.d("Ziptie",n,q,r,0)
$.$get$b().h(0,r)
$.E1=r
r=H.a(["cellular","mobile","handheld","computerized"],s)
q=$.o
n=H.a([$.C,$.a0],o)
H.a([],s)
r=new G.d("Mobile",n,q,r,0)
$.$get$b().h(0,r)
$.lU=r
r=H.a(["Sassacre"],s)
q=$.af
n=H.a([$.c9,$.b7],o)
H.a([],s)
r=new G.d("Sassacre",n,q,r,0)
$.$get$b().h(0,r)
$.CS=r
r=H.a(["Sledge"],s)
q=$.o
n=H.a([$.ai,$.c9],o)
H.a([],s)
r=new G.d("Sledge",n,q,r,0)
$.$get$b().h(0,r)
$.Dj=r
r=H.a(["Legal"],s)
q=$.o
n=H.a([$.bi,$.O],o)
H.a([],s)
r=new G.d("Legal",n,q,r,0)
$.$get$b().h(0,r)
$.lP=r
r=H.a(["Clown"],s)
q=$.o
n=H.a([$.b7,$.b9],o)
H.a([],s)
r=new G.d("Clown",n,q,r,0)
$.$get$b().h(0,r)
$.zR=r
r=H.a(["passionate"],s)
q=$.K
n=H.a([$.ar,$.aJ],o)
H.a([],s)
r=new G.d("Passionate",n,q,r,0)
$.$get$b().h(0,r)
$.Cc=r
r=H.a(["pinata"],s)
q=$.a8
n=H.a([$.O,$.aH],o)
H.a([],s)
r=new G.d("Pinata",n,q,r,0)
$.$get$b().h(0,r)
$.Cg=r
r=H.a(["anvil"],s)
q=$.o
n=H.a([$.ai,$.c9,$.C],o)
H.a([],s)
r=new G.d("Anvil",n,q,r,0)
$.$get$b().h(0,r)
$.zd=r
r=H.a(["flashbang"],s)
q=$.o
n=H.a([$.b8,$.bs],o)
H.a([],s)
r=new G.d("Flashbang",n,q,r,0)
$.$get$b().h(0,r)
$.AB=r
r=H.a(["smokebomb"],s)
q=$.o
n=H.a([$.aq,$.bs],o)
H.a([],s)
r=new G.d("Smokebomb",n,q,r,0)
$.$get$b().h(0,r)
$.Dk=r
r=H.a(["ninja"],s)
q=$.o
n=H.a([$.aq,$.aL],o)
H.a([],s)
r=new G.d("Ninja",n,q,r,0)
$.$get$b().h(0,r)
$.C1=r
r=H.a(["techno"],s)
q=$.o
n=H.a([$.aa,$.ae],o)
H.a([],s)
r=new G.d("Techno",n,q,r,0)
$.$get$b().h(0,r)
$.DE=r
r=H.a(["rock and roll"],s)
q=$.o
n=H.a([$.aM,$.ae],o)
H.a([],s)
r=new G.d("Rock And/Or Roll",n,q,r,0)
$.$get$b().h(0,r)
$.CG=r
r=H.a(["pistol shrimp","horrifying"],s)
q=$.a8
n=H.a([$.aI,$.bm,$.aZ],o)
H.a([],s)
r=new G.d("Pistol Shrimp",n,q,r,0)
$.$get$b().h(0,r)
$.Ch=r
r=H.a(["juggalo"],s)
q=$.o
n=H.a([$.b7,$.ae,$.b9,$.bc],o)
H.a([],s)
r=new G.d("Juggalo",n,q,r,0)
$.$get$b().h(0,r)
$.vm=r
r=H.a(["shocksauce"],s)
q=$.K
n=H.a([$.au,$.aa],o)
H.a([],s)
r=new G.d("Shock Sauce",n,q,r,0)
$.$get$b().h(0,r)
$.D5=r
r=H.a(["weaksauce"],s)
q=$.K
n=H.a([$.ai,$.au,$.bO],o)
H.a([],s)
r=new G.d("Weak Sauce",n,q,r,0)
$.$get$b().h(0,r)
$.DS=r
r=H.a(["spicy","picante"],s)
q=$.K
n=H.a([$.ar,$.aH],o)
H.a([],s)
r=new G.d("Spicy",n,q,r,0)
$.$get$b().h(0,r)
$.Dp=r
r=H.a(["ice cream","popsicle"],s)
q=$.r
n=H.a([$.br,$.aH],o)
H.a([],s)
r=new G.d("Popsicle",n,q,r,0)
$.$get$b().h(0,r)
$.Bc=r
r=H.a(["popsickle"],s)
q=$.r
n=H.a([$.br,$.aH,$.aL],o)
H.a([],s)
r=new G.d("Popsickle",n,q,r,0)
$.$get$b().h(0,r)
$.Ct=r
r=H.a(["icepick"],s)
q=$.r
n=H.a([$.br,$.b2],o)
H.a([],s)
r=new G.d("Icepick",n,q,r,0)
$.$get$b().h(0,r)
$.Bd=r
r=H.a(["schezwan"],s)
q=$.K
n=H.a([$.au,$.aH],o)
H.a([],s)
r=new G.d("Schezwan",n,q,r,0)
$.$get$b().h(0,r)
$.CV=r
r=H.a(["vaporwave"],s)
q=$.o
n=H.a([$.aq,$.ae,$.au,$.aa],o)
H.a([],s)
r=new G.d("Vaporwave",n,q,r,0)
$.$get$b().h(0,r)
$.DQ=r
r=H.a(["mallet"],s)
q=$.a8
n=H.a([$.a1,$.ai],o)
H.a([],s)
r=new G.d("Mallet",n,q,r,0)
$.$get$b().h(0,r)
$.BD=r
r=H.a(["fidget"],s)
q=$.o
n=H.a([$.aT,$.au],o)
H.a([],s)
r=new G.d("Fidget",n,q,r,0)
$.$get$b().h(0,r)
$.Ay=r
r=H.a(["gold foil"],s)
q=$.r
n=H.a([$.C,$.O,$.bj],o)
H.a([],s)
r=new G.d("Gold Foil",n,q,r,0)
$.$get$b().h(0,r)
$.AV=r
r=H.a(["caviar"],s)
q=$.r
n=H.a([$.aH,$.bj],o)
H.a([],s)
r=new G.d("Caviar",n,q,r,0)
$.$get$b().h(0,r)
$.zH=r
r=H.a(["RADioactive"],s)
q=$.K
n=H.a([$.c4,$.au],o)
H.a([],s)
r=new G.d("RADioactive",n,q,r,0)
$.$get$b().h(0,r)
$.CC=r
r=H.a(["glam"],s)
q=$.K
n=H.a([$.aM,$.ae,$.aO],o)
H.a([],s)
r=new G.d("Glam",n,q,r,0)
$.$get$b().h(0,r)
$.AT=r
r=H.a(["hair metal"],s)
q=$.K
n=H.a([$.C,$.ae,$.aO],o)
H.a([],s)
r=new G.d("Hair Metal",n,q,r,0)
$.$get$b().h(0,r)
$.B0=r
r=H.a(["elven","fae","sylvan"],s)
q=$.K
n=H.a([$.a9,$.aO],o)
H.a([],s)
r=new G.d("Elven",n,q,r,0)
$.$get$b().h(0,r)
$.Ao=r
r=H.a(["shiny"],s)
q=$.K
n=H.a([$.C,$.aO],o)
H.a([],s)
r=new G.d("Shiny",n,q,r,0)
$.$get$b().h(0,r)
$.D4=r
r=H.a(["bespoke","well-tailored","glamorous","haute couture"],s)
q=$.K
n=H.a([$.bj,$.aO,$.ao],o)
H.a([],s)
r=new G.d("Bespoke",n,q,r,0)
$.$get$b().h(0,r)
$.f_=r
r=H.a(["operatic"],s)
q=$.K
n=H.a([$.bj,$.ae,$.ao],o)
H.a([],s)
r=new G.d("Operatic",n,q,r,0)
$.$get$b().h(0,r)
$.C6=r
r=H.a(["ice","diamond"],s)
q=$.r
n=H.a([$.bj,$.br],o)
H.a([],s)
r=new G.d("Diamond",n,q,r,0)
$.$get$b().h(0,r)
$.vj=r
r=H.a(["icy hot","cold fire","wet","damp","moist","watery"],s)
q=$.K
n=H.a([$.ar,$.br],o)
H.a([],s)
r=new G.d("Icy Hot",n,q,r,0)
$.$get$b().h(0,r)
$.Be=r
r=H.a(["ice cold","cold as fuck"],s)
q=$.K
n=H.a([$.au,$.br],o)
H.a([],s)
r=new G.d("Cold As Fuck",n,q,r,0)
$.$get$b().h(0,r)
$.Bb=r
r=H.a(["winter's","season's"],s)
q=$.af
n=H.a([$.bz,$.br],o)
H.a([],s)
r=new G.d("Winter's",n,q,r,0)
$.$get$b().h(0,r)
$.DV=r
r=H.a(["santa's","christmas","xmas"],s)
q=$.af
n=H.a([$.a9,$.br],o)
H.a([],s)
r=new G.d("Christmas",n,q,r,0)
$.$get$b().h(0,r)
$.zN=r
r=H.a(["Santa Saws"],s)
q=$.af
n=H.a([$.a9,$.br,$.aL],o)
H.a([],s)
r=new G.d("Santa Saws",n,q,r,0)
$.$get$b().h(0,r)
$.CQ=r
r=H.a(["Santa Sleighs"],s)
q=$.af
n=H.a([$.fV,$.aL],o)
H.a([],s)
r=new G.d("Santa Sleighs",n,q,r,0)
$.$get$b().h(0,r)
$.CR=r
r=H.a(["Santa Claws"],s)
q=$.af
n=H.a([$.fV,$.lN],o)
H.a([],s)
r=new G.d("Santa Claws",n,q,r,0)
$.$get$b().h(0,r)
$.CP=r
r=H.a(["Sandy Claws"],s)
q=$.af
n=H.a([$.fV,$.lN,$.aM],o)
H.a([],s)
r=new G.d("Sandy Claws",n,q,r,0)
$.$get$b().h(0,r)
$.CO=r
r=H.a(["Silent Night"],s)
q=$.af
n=H.a([$.fV,$.aq],o)
H.a([],s)
r=new G.d("Silent Night",n,q,r,0)
$.$get$b().h(0,r)
$.Dc=r
r=H.a(["ghost's","Bloody Mary","Halloween"],s)
q=$.af
n=H.a([$.bc,$.bV],o)
H.a([],s)
r=new G.d("Ghost's",n,q,r,0)
$.$get$b().h(0,r)
$.B1=r
r=H.a(["ghoul","mutant"],s)
q=$.r
n=H.a([$.bm,$.c4,$.bP],o)
H.a([],s)
r=new G.d("Mutant",n,q,r,0)
$.$get$b().h(0,r)
$.BX=r
r=H.a(["skate","skateboard"],s)
q=$.o
n=H.a([$.au,$.C],o)
H.a([],s)
r=new G.d("Skateboard",n,q,r,0)
$.$get$b().h(0,r)
$.Df=r
r=H.a(["microwave"],s)
q=$.o
n=H.a([$.c4,$.aa,$.aH],o)
H.a([],s)
r=new G.d("Microwave",n,q,r,0)
$.$get$b().h(0,r)
$.BO=r
r=H.a(["orbital"],s)
q=$.o
n=H.a([$.c4,$.aa,$.aH,$.aZ],o)
H.a([],s)
r=new G.d("Orbital",n,q,r,0)
$.$get$b().h(0,r)
$.C7=r
r=H.a([],s)
q=$.o
n=H.a([$.ai,$.a0],o)
H.a([],s)
r=new G.d("",n,q,r,0)
$.$get$b().h(0,r)
$.Ah=r
r=H.a(["uranium"],s)
q=$.r
n=H.a([$.c4,$.aM],o)
H.a([],s)
r=new G.d("Uranium",n,q,r,0)
$.$get$b().h(0,r)
$.DP=r
r=H.a(["mousepad","jar opener"],s)
q=$.o
n=H.a([$.O,$.ca],o)
H.a([],s)
r=new G.d("Mousepad",n,q,r,0)
$.$get$b().h(0,r)
$.BV=r
r=H.a(["flint"],s)
q=$.r
n=H.a([$.aL,$.aM],o)
H.a([],s)
r=new G.d("Sharpened Flint",n,q,r,0)
$.$get$b().h(0,r)
$.AE=r
r=H.a(["flint"],s)
q=$.r
n=H.a([$.b2,$.aM],o)
H.a([],s)
r=new G.d("Pointed Flint",n,q,r,0)
$.$get$b().h(0,r)
$.AF=r
r=H.a(["picnic"],s)
q=$.o
n=H.a([$.aT,$.b2],o)
H.a([],s)
r=new G.d("Picnic",n,q,r,0)
$.$get$b().h(0,r)
$.Cf=r
r=H.a(["xtreme xplosion"],s)
q=$.K
n=H.a([$.au,$.bs],o)
H.a([],s)
r=new G.d("Xtreme Xplosion",n,q,r,0)
$.$get$b().h(0,r)
$.E0=r
r=H.a(["lawn"],s)
q=$.o
n=H.a([$.aT,$.bh],o)
H.a([],s)
r=new G.d("Lawn",n,q,r,0)
$.$get$b().h(0,r)
$.Br=r
r=H.a(["upholstered"],s)
q=$.r
n=H.a([$.Q,$.bh],o)
H.a([],s)
r=new G.d("Upholstered",n,q,r,0)
$.$get$b().h(0,r)
$.DO=r
r=H.a(["leather"],s)
q=$.r
n=H.a([$.bm,$.bh],o)
H.a([],s)
r=new G.d("Leather",n,q,r,0)
$.$get$b().h(0,r)
$.vq=r
r=H.a(["shag"],s)
q=$.r
n=H.a([$.cg,$.bh],o)
H.a([],s)
r=new G.d("Shag",n,q,r,0)
$.$get$b().h(0,r)
$.D0=r
r=H.a(["loyal"],s)
q=$.K
n=H.a([$.ai,$.aJ],o)
H.a([],s)
r=new G.d("Loyal",n,q,r,0)
$.$get$b().h(0,r)
$.BB=r
r=H.a(["porcelain"],s)
q=$.r
n=H.a([$.aO,$.bM],o)
H.a([],s)
r=new G.d("Porcelain",n,q,r,0)
$.$get$b().h(0,r)
$.lT=r
r=H.a(["pork hollow","piggy bank"],s)
q=$.a8
n=H.a([$.bj,$.bM],o)
H.a([],s)
r=new G.d("Pork Hollow",n,q,r,0)
$.$get$b().h(0,r)
$.Cv=r
r=H.a(["n1nj4","katana"],s)
q=$.o
n=H.a([$.au,$.aL],o)
H.a([],s)
r=new G.d("Katana",n,q,r,0)
$.$get$b().h(0,r)
$.Bm=r
r=H.a(["chocolate"],s)
q=$.r
n=H.a([$.aJ,$.aH],o)
H.a([],s)
r=new G.d("Chocolate",n,q,r,0)
$.$get$b().h(0,r)
$.zM=r
r=H.a(["wrapped chocolate"],s)
q=$.r
n=H.a([$.aJ,$.aH,$.O,$.C],o)
H.a([],s)
r=new G.d("Wrapped Chocolate",n,q,r,0)
$.$get$b().h(0,r)
$.AI=r
r=H.a(["scratch-n-sniff"],s)
q=$.r
n=H.a([$.au,$.O],o)
H.a([],s)
r=new G.d("Scratch-n-sniff",n,q,r,0)
$.$get$b().h(0,r)
$.CX=r
r=H.a(["mythril","orichalcum"],s)
q=$.r
n=H.a([$.a9,$.C],o)
H.a([],s)
r=new G.d("Mythril",n,q,r,0)
$.$get$b().h(0,r)
$.BY=r
r=H.a(["titanium","steel"],s)
q=$.r
n=H.a([$.ai,$.C],o)
H.a([],s)
r=new G.d("Titanium",n,q,r,0)
$.$get$b().h(0,r)
$.DJ=r
r=H.a(["lead"],s)
q=$.r
n=H.a([$.c9,$.C],o)
H.a([],s)
r=new G.d("Lead",n,q,r,0)
$.$get$b().h(0,r)
$.vp=r
r=H.a(["satire","parody","onion"],s)
q=$.o
n=H.a([$.b6,$.b7],o)
H.a([],s)
r=new G.d("Satire",n,q,r,0)
$.$get$b().h(0,r)
$.C5=r
r=H.a(["comedy gold"],s)
q=$.K
n=H.a([$.bj,$.b7],o)
H.a([],s)
r=new G.d("Comedy Gold",n,q,r,0)
$.$get$b().h(0,r)
$.zT=r
r=H.a(["dry","sensible chuckle"],s)
q=$.K
n=H.a([$.ao,$.b7],o)
H.a([],s)
r=new G.d("Dry",n,q,r,0)
$.$get$b().h(0,r)
$.Ae=r
r=H.a(["polite"],s)
q=$.K
n=H.a([$.bh,$.b6],o)
H.a([],s)
r=new G.d("Polite",n,q,r,0)
$.$get$b().h(0,r)
$.Cr=r
r=H.a(["stradivarius"],s)
q=$.af
n=H.a([$.ao,$.bj,$.a1,$.ae],o)
H.a([],s)
r=new G.d("Stradivarius",n,q,r,0)
$.$get$b().h(0,r)
$.Dw=r
r=H.a(["scientistic"],s)
q=$.K
n=H.a([$.a0,$.b6],o)
H.a([],s)
r=new G.d("Scientistic",n,q,r,0)
$.$get$b().h(0,r)
$.CW=r
r=H.a(["AI"],s)
q=$.o
n=H.a([$.aa,$.aI],o)
H.a([],s)
r=new G.d("AI",n,q,r,0)
$.$get$b().h(0,r)
$.rH=r
r=H.a(["robotic"],s)
q=$.G
n=H.a([$.C,$.aa,$.aI],o)
H.a([],s)
r=new G.d("Robotic",n,q,r,0)
$.$get$b().h(0,r)
$.vv=r
r=H.a(["shrapnel"],s)
q=$.o
n=H.a([$.a1,$.bs],o)
H.a([],s)
r=new G.d("Shrapnel",n,q,r,0)
$.$get$b().h(0,r)
$.D7=r
r=H.a(["vocaloid"],s)
q=$.o
n=H.a([$.aI,$.aa,$.ae],o)
H.a([],s)
r=new G.d("Vocaloid",n,q,r,0)
$.$get$b().h(0,r)
$.DR=r
r=H.a(["*Hyun-ae"],s)
q=$.af
n=H.a([$.aI,$.aa,$.aJ],o)
H.a([],s)
r=new G.d("*Hyun-ae",n,q,r,0)
$.$get$b().h(0,r)
$.Ba=r
r=H.a(["buckshot"],s)
q=$.o
n=H.a([$.a1,$.aZ],o)
H.a([],s)
r=new G.d("Buckshot",n,q,r,0)
$.$get$b().h(0,r)
$.zv=r
r=H.a(["cannon"],s)
q=$.o
n=H.a([$.c9,$.aZ],o)
H.a([],s)
r=new G.d("Cannon",n,q,r,0)
$.$get$b().h(0,r)
$.zE=r
r=H.a(["stationary"],s)
q=$.o
n=H.a([$.ao,$.O],o)
H.a([],s)
r=new G.d("Stationary",n,q,r,0)
$.$get$b().h(0,r)
$.Du=r
r=H.a([],s)
q=$.o
n=H.a([$.aS,$.O],o)
H.a([],s)
r=new G.d("",n,q,r,0)
$.$get$b().h(0,r)
$.C9=r
r=H.a([],s)
q=$.o
n=H.a([$.C,$.aZ],o)
H.a([],s)
r=new G.d("",n,q,r,0)
$.$get$b().h(0,r)
$.BM=r
r=H.a(["papercut"],s)
q=$.o
n=H.a([$.aL,$.O],o)
H.a([],s)
r=new G.d("Papercut",n,q,r,0)
$.$get$b().h(0,r)
$.Ca=r
r=H.a(["squeaky"],s)
q=$.G
n=H.a([$.ai,$.ca],o)
H.a([],s)
r=new G.d("Squeaky",n,q,r,0)
$.$get$b().h(0,r)
$.Dr=r
r=H.a(["kazoo"],s)
q=$.o
n=H.a([$.b6,$.ae],o)
H.a([],s)
r=new G.d("Kazoo",n,q,r,0)
$.$get$b().h(0,r)
$.Bn=r
r=H.a(["bandaid"],s)
q=$.o
n=H.a([$.b1,$.O],o)
H.a([],s)
r=new G.d("Bandaid",n,q,r,0)
$.$get$b().h(0,r)
$.zh=r
r=H.a(["gushers"],s)
q=$.o
n=H.a([$.b1,$.aH],o)
H.a([],s)
r=new G.d("Gushers",n,q,r,0)
$.$get$b().h(0,r)
$.B_=r
r=H.a(["medic"],s)
q=$.o
n=H.a([$.b1,$.aZ],o)
H.a([],s)
r=new G.d("Medic",n,q,r,0)
$.$get$b().h(0,r)
$.BK=r
r=H.a(["sick nasty","ill"],s)
q=$.G
n=H.a([$.au,$.bN],o)
H.a([],s)
r=new G.d("Sick Nasty",n,q,r,0)
$.$get$b().h(0,r)
$.D9=r
r=H.a(["gilded","gold leaf"],s)
q=$.r
n=H.a([$.C,$.a1],o)
H.a([],s)
r=new G.d("Gilded",n,q,r,0)
$.$get$b().h(0,r)
$.AS=r
r=H.a(["charging","power cord"],s)
q=$.o
n=H.a([$.aT,$.aa],o)
H.a([],s)
r=new G.d("Charging",n,q,r,0)
$.$get$b().h(0,r)
$.zL=r
r=H.a(["safety"],s)
q=$.o
n=H.a([$.ca,$.aL],o)
H.a([],s)
r=new G.d("Rubber Safety",n,q,r,0)
$.$get$b().h(0,r)
$.CM=r
r=H.a(["safety"],s)
q=$.o
n=H.a([$.aT,$.aL],o)
H.a([],s)
r=new G.d("Plastic Safety",n,q,r,0)
$.$get$b().h(0,r)
$.CN=r
r=H.a(["thunderous","thor's"],s)
q=$.K
n=H.a([$.b9,$.aa],o)
H.a([],s)
r=new G.d("Thunderous",n,q,r,0)
$.$get$b().h(0,r)
$.DH=r
r=H.a(["screeching","dial up"],s)
q=$.K
n=H.a([$.b9,$.aa,$.a0],o)
H.a([],s)
r=new G.d("Screeching",n,q,r,0)
$.$get$b().h(0,r)
$.CZ=r
r=H.a(["mirrored","reflective"],s)
q=$.o
n=H.a([$.bb,$.C],o)
H.a([],s)
r=new G.d("Mirrored",n,q,r,0)
$.$get$b().h(0,r)
$.rY=r
r=H.a(["far seeing","sighted"],s)
q=$.o
n=H.a([$.bb,$.aM,$.a9],o)
H.a([],s)
r=new G.d("Far Seeing",n,q,r,0)
$.$get$b().h(0,r)
$.vb=r
r=H.a(["disabling","non lethal"],s)
q=$.o
n=H.a([$.ca,$.aZ],o)
H.a([],s)
r=new G.d("Nonlethal",n,q,r,0)
$.$get$b().h(0,r)
$.A9=r
r=H.a(["fashionable"],s)
q=$.o
n=H.a([$.aO,$.ao],o)
H.a([],s)
r=new G.d("Fashionable",n,q,r,0)
$.$get$b().h(0,r)
$.vd=r
r=H.a(["ironic"],s)
q=$.K
n=H.a([$.b7,$.au],o)
H.a([],s)
r=new G.d("Ironic Type 2",n,q,r,0)
$.$get$b().h(0,r)
$.Bi=r
r=H.a(["ironic"],s)
q=$.K
n=H.a([$.bO,$.b7],o)
H.a([],s)
r=new G.d("Ironic Type 3",n,q,r,0)
$.$get$b().h(0,r)
$.vk=r
r=H.a(["post-ironic"],s)
q=$.K
n=H.a([$.b6,$.au,$.ao],o)
H.a([],s)
r=new G.d("Post Ironic",n,q,r,0)
$.$get$b().h(0,r)
$.Cx=r
r=H.a(["monstrous"],s)
q=$.K
n=H.a([$.bP,$.b9,$.bc],o)
H.a([],s)
r=new G.d("Monstrous",n,q,r,0)
$.$get$b().h(0,r)
$.BT=r
r=H.a(["rooty tooty point and shooty"],s)
q=$.o
n=H.a([$.aZ,$.au,$.ao],o)
H.a([],s)
r=new G.d("Rooty Tooty Point and Shooty",n,q,r,0)
$.$get$b().h(0,r)
$.CI=r
r=H.a(["golden"],s)
q=$.r
n=H.a([$.C,$.bj],o)
H.a([],s)
r=new G.d("Golden",n,q,r,0)
$.$get$b().h(0,r)
$.rS=r
r=H.a(["platinum"],s)
q=$.r
n=H.a([$.b8,$.C],o)
H.a([],s)
r=new G.d("Platinum",n,q,r,0)
$.$get$b().h(0,r)
$.lS=r
r=H.a(["horseshoe"],s)
q=$.o
n=H.a([$.bW,$.C],o)
H.a([],s)
r=new G.d("Horseshoe",n,q,r,0)
$.$get$b().h(0,r)
$.vi=r
r=H.a(["felt"],s)
q=$.o
n=H.a([$.Q,$.cg],o)
H.a([],s)
r=new G.d("Felt",n,q,r,0)
$.$get$b().h(0,r)
$.Au=r
r=H.a(["marble"],s)
q=$.r
n=H.a([$.aM,$.ao],o)
H.a([],s)
r=new G.d("Marble",n,q,r,0)
$.$get$b().h(0,r)
$.vr=r
r=H.a(["marble"],s)
q=$.r
n=H.a([$.aM,$.c9],o)
H.a([],s)
r=new G.d("Marble",n,q,r,0)
$.$get$b().h(0,r)
$.AX=r
r=H.a(["glitched"],s)
q=$.G
n=H.a([$.be,$.aa],o)
H.a([],s)
r=new G.d("Glitched",n,q,r,0)
$.$get$b().h(0,r)
$.vg=r
r=H.a(["debugging"],s)
q=$.o
n=H.a([$.b1,$.aa],o)
H.a([],s)
r=new G.d("Debugging",n,q,r,0)
$.$get$b().h(0,r)
$.A4=r
r=H.a(["Iron Maiden","Metalic"],s)
q=$.o
n=H.a([$.C,$.b9,$.ae],o)
H.a([],s)
r=new G.d("Metalic",n,q,r,0)
$.$get$b().h(0,r)
$.BN=r
r=H.a(["Simulacrum"],s)
q=$.K
n=H.a([$.aI,$.b6],o)
H.a([],s)
r=new G.d("Simulacrum",n,q,r,0)
$.$get$b().h(0,r)
$.De=r
r=H.a(["Imitation"],s)
q=$.o
n=H.a([$.aH,$.b6],o)
H.a([],s)
r=new G.d("Imitation",n,q,r,0)
$.$get$b().h(0,r)
$.Bf=r
r=H.a(["Placebo"],s)
q=$.o
n=H.a([$.b1,$.b6],o)
H.a([],s)
r=new G.d("Placebo",n,q,r,0)
$.$get$b().h(0,r)
$.Cj=r
r=H.a(["counterfeit"],s)
q=$.o
n=H.a([$.bj,$.b6],o)
H.a([],s)
r=new G.d("Counterfeit",n,q,r,0)
$.$get$b().h(0,r)
$.zY=r
r=H.a(["Surreal"],s)
q=$.K
n=H.a([$.au,$.aU,$.b7],o)
H.a([],s)
r=new G.d("Surreal1",n,q,r,0)
$.$get$b().h(0,r)
$.Dy=r
r=H.a(["Brainy"],s)
q=$.K
n=H.a([$.a0,$.bm],o)
H.a([],s)
r=new G.d("Brainy",n,q,r,0)
$.$get$b().h(0,r)
$.zs=r
r=H.a(["Incendiary"],s)
q=$.o
n=H.a([$.ar,$.bs],o)
H.a([],s)
r=new G.d("Incendiary",n,q,r,0)
$.$get$b().h(0,r)
$.Bg=r
r=H.a(["C-4"],s)
q=$.r
n=H.a([$.bs,$.aT],o)
H.a([],s)
r=new G.d("C-4",n,q,r,0)
$.$get$b().h(0,r)
$.zz=r
r=H.a(["fae"],s)
q=$.o
n=H.a([$.a9,$.b8,$.be],o)
H.a([],s)
r=new G.d("Fae",n,q,r,0)
$.$get$b().h(0,r)
$.Ar=r
r=H.a(["Plutonium"],s)
q=$.r
n=H.a([$.C,$.c4],o)
H.a([],s)
r=new G.d("Plutonium",n,q,r,0)
$.$get$b().h(0,r)
$.Cn=r
r=H.a(["Lithium"],s)
q=$.r
n=H.a([$.C,$.aa],o)
H.a([],s)
r=new G.d("Lithium",n,q,r,0)
$.$get$b().h(0,r)
$.Bw=r
r=H.a(["Molten"],s)
q=$.r
n=H.a([$.C,$.ar],o)
H.a([],s)
r=new G.d("Molten",n,q,r,0)
$.$get$b().h(0,r)
$.BS=r
r=H.a(["Magma","Lava","Sulphuric"],s)
q=$.r
n=H.a([$.aM,$.ar],o)
H.a([],s)
r=new G.d("Magma",n,q,r,0)
$.$get$b().h(0,r)
$.BC=r
r=H.a(["Rusty"],s)
q=$.G
n=H.a([$.C,$.bO],o)
H.a([],s)
r=new G.d("Rusty",n,q,r,0)
$.$get$b().h(0,r)
$.CL=r
r=H.a(["Fonzie"],s)
q=$.o
n=H.a([$.aL,$.au,$.ao],o)
H.a([],s)
r=new G.d("Fonzie",n,q,r,0)
$.$get$b().h(0,r)
$.AJ=r
r=H.a(["Romcom"],s)
q=$.o
n=H.a([$.aJ,$.b7],o)
H.a([],s)
r=new G.d("Romcom",n,q,r,0)
$.$get$b().h(0,r)
$.CH=r
r=H.a(["Alluring"],s)
q=$.o
n=H.a([$.aO,$.b8],o)
H.a([],s)
r=new G.d("Alluring",n,q,r,0)
$.$get$b().h(0,r)
$.za=r
r=H.a(["Masquerade"],s)
q=$.o
n=H.a([$.aO,$.aq],o)
H.a([],s)
r=new G.d("Masquerade",n,q,r,0)
$.$get$b().h(0,r)
$.BG=r
r=H.a(["Stoneskin","Petrified"],s)
q=$.o
n=H.a([$.aM,$.bm],o)
H.a([],s)
r=new G.d("Stoneskin",n,q,r,0)
$.$get$b().h(0,r)
$.Dv=r
r=H.a(["Psionic"],s)
q=$.o
n=H.a([$.a9,$.a0],o)
H.a([],s)
r=new G.d("Psionic",n,q,r,0)
$.$get$b().h(0,r)
$.CA=r
r=H.a(["Dwarven"],s)
q=$.o
n=H.a([$.a9,$.aM],o)
H.a([],s)
r=new G.d("Dwarven",n,q,r,0)
$.$get$b().h(0,r)
$.Ai=r
r=H.a(["Elemental","Animated"],s)
q=$.r
n=H.a([$.a9,$.aI],o)
H.a([],s)
r=new G.d("Elemental",n,q,r,0)
$.$get$b().h(0,r)
$.An=r
r=H.a(["Gourmet"],s)
q=$.K
n=H.a([$.aH,$.ao],o)
H.a([],s)
r=new G.d("Gourmet",n,q,r,0)
$.$get$b().h(0,r)
$.AW=r
r=H.a(["Stained Glass"],s)
q=$.r
n=H.a([$.bb,$.aO,$.bj],o)
H.a([],s)
r=new G.d("Stained Glass",n,q,r,0)
$.$get$b().h(0,r)
$.Ds=r
r=H.a(["Gauze"],s)
q=$.o
n=H.a([$.b1,$.Q],o)
H.a([],s)
r=new G.d("Gauze",n,q,r,0)
$.$get$b().h(0,r)
$.AP=r
r=H.a(["Locked"],s)
q=$.G
n=H.a([$.bi,$.bA],o)
H.a([],s)
r=new G.d("Locked",n,q,r,0)
$.$get$b().h(0,r)
$.By=r
r=H.a(["Etched"],s)
q=$.o
n=H.a([$.aM,$.O],o)
H.a([],s)
r=new G.d("Etched",n,q,r,0)
$.$get$b().h(0,r)
$.Aq=r
r=H.a(["Papyrus"],s)
q=$.r
n=H.a([$.O,$.b4],o)
H.a([],s)
r=new G.d("Papyrus",n,q,r,0)
$.$get$b().h(0,r)
$.Cb=r
r=H.a(["film"],s)
q=$.o
n=H.a([$.O,$.aT],o)
H.a([],s)
r=new G.d("Film",n,q,r,0)
$.$get$b().h(0,r)
$.Az=r
r=H.a(["Saucey"],s)
q=$.r
n=H.a([$.be,$.bA,$.bP],o)
H.a([],s)
r=new G.d("Saucey",n,q,r,0)
$.$get$b().h(0,r)
$.CT=r
r=H.a(["Lottery"],s)
q=$.o
n=H.a([$.O,$.bW],o)
H.a([],s)
r=new G.d("Lottery",n,q,r,0)
$.$get$b().h(0,r)
$.BA=r
r=H.a(["Blindfolded"],s)
q=$.o
n=H.a([$.aq,$.Q],o)
H.a([],s)
r=new G.d("Blindfolded",n,q,r,0)
$.$get$b().h(0,r)
$.v7=r
r=H.a(["Possessed"],s)
q=$.G
n=H.a([$.bV,$.bm],o)
H.a([],s)
r=new G.d("Possessed",n,q,r,0)
$.$get$b().h(0,r)
$.Cw=r
r=H.a(["Infernal"],s)
q=$.K
n=H.a([$.bV,$.ar],o)
H.a([],s)
r=new G.d("Infernal",n,q,r,0)
$.$get$b().h(0,r)
$.Bh=r
r=H.a(["Geppetto's","Pinocchio"],s)
q=$.o
n=H.a([$.a1,$.bn,$.t1,$.aI],o)
H.a([],s)
r=new G.d("Geppetto",n,q,r,0)
$.$get$b().h(0,r)
$.AQ=r
r=H.a(["Abominable"],s)
q=$.K
n=H.a([$.bm,$.be],o)
H.a([],s)
r=new G.d("Abominable",n,q,r,0)
$.$get$b().h(0,r)
$.z8=r
r=H.a(["Ashen"],s)
q=$.o
n=H.a([$.aJ,$.aR],o)
H.a([],s)
r=new G.d("Ashen",n,q,r,0)
$.$get$b().h(0,r)
$.zf=r
r=H.a(["Pale"],s)
q=$.o
n=H.a([$.aJ,$.bz],o)
H.a([],s)
r=new G.d("Pale",n,q,r,0)
$.$get$b().h(0,r)
$.C8=r
r=H.a(["Pitch"],s)
q=$.o
n=H.a([$.aJ,$.bA],o)
H.a([],s)
r=new G.d("Pitch",n,q,r,0)
$.$get$b().h(0,r)
$.Ci=r
r=H.a(["Lit"],s)
q=$.K
n=H.a([$.au,$.ar],o)
H.a([],s)
r=new G.d("Lit",n,q,r,0)
$.$get$b().h(0,r)
$.Bv=r
r=H.a(["Hypnotizing"],s)
q=$.o
n=H.a([$.a9,$.bz],o)
H.a([],s)
r=new G.d("Hypnotizing",n,q,r,0)
$.$get$b().h(0,r)
$.B8=r
r=H.a(["Tranquilizing"],s)
q=$.o
n=H.a([$.bz,$.bi],o)
H.a([],s)
r=new G.d("Tranquilizing",n,q,r,0)
$.$get$b().h(0,r)
$.DM=r
r=H.a([],s)
q=$.o
n=H.a([$.bz,$.bA],o)
H.a([],s)
r=new G.d("",n,q,r,0)
$.$get$b().h(0,r)
$.zC=r
r=H.a(["Ghost Rider's"],s)
q=$.af
n=H.a([$.fU,$.ar,$.bV],o)
H.a([],s)
r=new G.d("Ghost Rider",n,q,r,0)
$.$get$b().h(0,r)
$.AR=r
r=H.a(["Logical"],s)
q=$.K
n=H.a([$.a0,$.br],o)
H.a([],s)
r=new G.d("Logical",n,q,r,0)
$.$get$b().h(0,r)
$.Bz=r
r=H.a(["Duelist's"],s)
q=$.af
n=H.a([$.aZ,$.ao],o)
H.a([],s)
r=new G.d("Duelist's",n,q,r,0)
$.$get$b().h(0,r)
$.Af=r
r=H.a(["Silenced"],s)
q=$.G
n=H.a([$.aZ,$.aq],o)
H.a([],s)
r=new G.d("Silenced",n,q,r,0)
$.$get$b().h(0,r)
$.Db=r
r=H.a(["Deudly"],s)
q=$.G
n=H.a([$.aZ,$.bO],o)
H.a([],s)
r=new G.d("Deudly",n,q,r,0)
$.$get$b().h(0,r)
$.A3=r
r=H.a(["Screaming"],s)
q=$.G
n=H.a([$.b9,$.bc],o)
H.a([],s)
r=new G.d("Screaming",n,q,r,0)
$.$get$b().h(0,r)
$.CY=r
r=H.a(["Cacophonous"],s)
q=$.K
n=H.a([$.bP,$.ae],o)
H.a([],s)
r=new G.d("Cacophonous",n,q,r,0)
$.$get$b().h(0,r)
$.zA=r
r=H.a(["Sublime"],s)
q=$.K
n=H.a([$.bP,$.aO],o)
H.a([],s)
r=new G.d("Sublime",n,q,r,0)
$.$get$b().h(0,r)
$.Dx=r
r=H.a(["Masterwork"],s)
q=$.r
n=H.a([$.bn,$.bj],o)
H.a([],s)
r=new G.d("Masterwork",n,q,r,0)
$.$get$b().h(0,r)
$.BI=r
r=H.a(["BroodFester"],s)
q=$.o
n=H.a([$.aI,$.bc,$.be,$.a9],o)
H.a([],s)
r=new G.d("BroodFester",n,q,r,0)
$.$get$b().h(0,r)
$.zu=r
r=H.a(["[REDACTED]"],s)
q=$.o
n=H.a([$.be,$.aq],o)
H.a([],s)
r=new G.d("[REDACTED]",n,q,r,0)
$.$get$b().h(0,r)
$.CF=r
r=H.a(["Pop Rocks"],s)
q=$.o
n=H.a([$.aH,$.bs],o)
H.a([],s)
r=new G.d("Pop Rocks",n,q,r,0)
$.$get$b().h(0,r)
$.Cs=r
r=H.a(["Disguised"],s)
q=$.G
n=H.a([$.aq,$.b6],o)
H.a([],s)
r=new G.d("Disguised",n,q,r,0)
$.$get$b().h(0,r)
$.Aa=r
r=H.a(["Haunted"],s)
q=$.G
n=H.a([$.aU,$.bV],o)
H.a([],s)
r=new G.d("Haunted",n,q,r,0)
$.$get$b().h(0,r)
$.B2=r
r=H.a(["Cognitohazardous"],s)
q=$.G
n=H.a([$.be,$.a0],o)
H.a([],s)
r=new G.d("Cognitohazardous",n,q,r,0)
$.$get$b().h(0,r)
$.zS=r
r=H.a(["Staticy"],s)
q=$.G
n=H.a([$.aU,$.aa],o)
H.a([],s)
r=new G.d("Staticy",n,q,r,0)
$.$get$b().h(0,r)
$.Dt=r
r=H.a(["Jadite"],s)
q=$.o
n=H.a([$.bb,$.c4],o)
H.a([],s)
r=new G.d("Jadite",n,q,r,0)
$.$get$b().h(0,r)
$.Bk=r
r=H.a(["Tickling"],s)
q=$.o
n=H.a([$.b7,$.aU],o)
H.a([],s)
r=new G.d("Tickling",n,q,r,0)
$.$get$b().h(0,r)
$.DI=r
r=H.a(["Composite"],s)
q=$.o
n=H.a([$.C,$.bM],o)
H.a([],s)
r=new G.d("Composite",n,q,r,0)
$.$get$b().h(0,r)
$.zU=r
r=H.a(["High-Powered"],s)
q=$.G
n=H.a([$.bs,$.aZ],o)
H.a([],s)
r=new G.d("High-Powered",n,q,r,0)
$.$get$b().h(0,r)
$.B3=r
r=H.a(["Concussive"],s)
q=$.o
n=H.a([$.bs,$.ai],o)
H.a([],s)
r=new G.d("Concussive",n,q,r,0)
$.$get$b().h(0,r)
$.zV=r
r=H.a(["Down"],s)
q=$.r
n=H.a([$.bh,$.bB],o)
H.a([],s)
r=new G.d("Down",n,q,r,0)
$.$get$b().h(0,r)
$.Ac=r
r=H.a(["Prickly"],s)
q=$.r
n=H.a([$.aU,$.b2],o)
H.a([],s)
r=new G.d("Prickly",n,q,r,0)
$.$get$b().h(0,r)
$.Cz=r
r=H.a(["Deep-Web","Dark-Net"],s)
q=$.o
n=H.a([$.aU,$.aq,$.aa],o)
H.a([],s)
r=new G.d("Deep-Web",n,q,r,0)
$.$get$b().h(0,r)
$.A6=r
r=H.a(["Jagged","Sawtooth"],s)
q=$.r
n=H.a([$.b2,$.aL],o)
H.a([],s)
r=new G.d("Jagged",n,q,r,0)
$.$get$b().h(0,r)
$.Bl=r
r=H.a(["Nanofiber"],s)
q=$.r
n=H.a([$.Q,$.a0],o)
H.a([],s)
r=new G.d("Nanofiber",n,q,r,0)
$.$get$b().h(0,r)
$.BZ=r
r=H.a(["Clanging"],s)
q=$.o
n=H.a([$.C,$.b9],o)
H.a([],s)
r=new G.d("Clanging",n,q,r,0)
$.$get$b().h(0,r)
$.zO=r
r=H.a(["Silver"],s)
q=$.r
n=H.a([$.C,$.ao],o)
H.a([],s)
r=new G.d("Silver",n,q,r,0)
$.$get$b().h(0,r)
$.Dd=r
r=H.a(["Withered"],s)
q=$.G
n=H.a([$.aR,$.b4],o)
H.a([],s)
r=new G.d("Withered",n,q,r,0)
$.$get$b().h(0,r)
$.DX=r
r=H.a(["Shattered"],s)
q=$.G
n=H.a([$.bb,$.bO],o)
H.a([],s)
r=new G.d("Shattered",n,q,r,0)
$.$get$b().h(0,r)
$.D3=r
r=H.a(["Miner's"],s)
q=$.af
n=H.a([$.aM,$.C],o)
H.a([],s)
r=new G.d("Miner's",n,q,r,0)
$.$get$b().h(0,r)
$.BQ=r
r=H.a(["Singing"],s)
q=$.o
n=H.a([$.ae,$.aI],o)
H.a([],s)
r=new G.d("Singing",n,q,r,0)
$.$get$b().h(0,r)
$.Da=r
r=H.a(["Mitochondrial"],s)
q=$.o
n=H.a([$.bm,$.aa],o)
H.a([],s)
r=new G.d("Mitochondrial",n,q,r,0)
$.$get$b().h(0,r)
$.BR=r
r=H.a(["Blackout","EMP"],s)
q=$.o
n=H.a([$.aq,$.aa],o)
H.a([],s)
r=new G.d("Blackout",n,q,r,0)
$.$get$b().h(0,r)
$.zn=r
r=H.a(["Asbestos"],s)
q=$.r
n=H.a([$.aM,$.bN],o)
H.a([],s)
r=new G.d("Asbestos",n,q,r,0)
$.$get$b().h(0,r)
$.z9=r
r=H.a(["Mercurial"],s)
q=$.r
n=H.a([$.bN,$.C],o)
H.a([],s)
r=new G.d("Mercurial",n,q,r,0)
$.$get$b().h(0,r)
$.BJ=r
r=H.a(["Bulletproof"],s)
q=$.r
n=H.a([$.Q,$.ai],o)
H.a([],s)
r=new G.d("Bulletproof",n,q,r,0)
$.$get$b().h(0,r)
$.zx=r
r=H.a(["Cotton"],s)
q=$.r
n=H.a([$.b4,$.Q],o)
H.a([],s)
r=new G.d("Cotton",n,q,r,0)
$.$get$b().h(0,r)
$.zW=r
r=H.a(["Blinding","Flashbang","Solar Flare"],s)
q=$.o
n=H.a([$.bA,$.b8],o)
H.a([],s)
r=new G.d("Blinding",n,q,r,0)
$.$get$b().h(0,r)
$.zo=r
r=H.a(["Brilliant"],s)
q=$.K
n=H.a([$.b8,$.a0],o)
H.a([],s)
r=new G.d("Brilliant",n,q,r,0)
$.$get$b().h(0,r)
$.zt=r
r=H.a(["Offensive"],s)
q=$.K
n=H.a([$.bA,$.a0],o)
H.a([],s)
r=new G.d("Offensive",n,q,r,0)
$.$get$b().h(0,r)
$.C4=r
r=H.a(["Poached"],s)
q=$.G
n=H.a([$.bm,$.bj],o)
H.a([],s)
r=new G.d("Poached",n,q,r,0)
$.$get$b().h(0,r)
$.Co=r
r=H.a(["Tapestry"],s)
q=$.r
n=H.a([$.Q,$.aO],o)
H.a([],s)
r=new G.d("Tapestry",n,q,r,0)
$.$get$b().h(0,r)
$.DA=r
r=H.a(["Itchy"],s)
q=$.K
n=H.a([$.Q,$.aU],o)
H.a([],s)
r=new G.d("Itchy",n,q,r,0)
$.$get$b().h(0,r)
$.Bj=r
r=H.a(["Wishbone"],s)
q=$.r
n=H.a([$.bW,$.bd],o)
H.a([],s)
r=new G.d("Wishbone",n,q,r,0)
$.$get$b().h(0,r)
$.DW=r
r=H.a(["Rattling"],s)
q=$.G
n=H.a([$.b9,$.bd],o)
H.a([],s)
r=new G.d("Rattling",n,q,r,0)
$.$get$b().h(0,r)
$.CD=r
r=H.a(["Cranial"],s)
q=$.r
n=H.a([$.a0,$.bd],o)
H.a([],s)
r=new G.d("Cranial",n,q,r,0)
$.$get$b().h(0,r)
$.A_=r
r=H.a(["Humerus"],s)
q=$.r
n=H.a([$.b7,$.bd],o)
H.a([],s)
r=new G.d("Humerus",n,q,r,0)
$.$get$b().h(0,r)
$.B6=r
r=H.a(["Massage"],s)
q=$.o
n=H.a([$.b1,$.bh],o)
H.a([],s)
r=new G.d("Massage",n,q,r,0)
$.$get$b().h(0,r)
$.BH=r
r=H.a(["Pestersome","Irksome"],s)
q=$.K
n=H.a([$.b9,$.bA],o)
H.a([],s)
r=new G.d("Pestersome",n,q,r,0)
$.$get$b().h(0,r)
$.Cd=r
r=H.a(["Shockwave"],s)
q=$.o
n=H.a([$.b9,$.bs],o)
H.a([],s)
r=new G.d("Shockwave",n,q,r,0)
$.$get$b().h(0,r)
$.D6=r
r=H.a(["Antivenom"],s)
q=$.o
n=H.a([$.bN,$.b1],o)
H.a([],s)
r=new G.d("Antivenom",n,q,r,0)
$.$get$b().h(0,r)
$.zc=r
r=H.a(["Will O Wisp","Demonic"],s)
q=$.r
n=H.a([$.ar,$.a9],o)
H.a([],s)
r=new G.d("Will O Wisp",n,q,r,0)
$.$get$b().h(0,r)
$.DT=r
r=H.a(["Fiberglass"],s)
q=$.r
n=H.a([$.Q,$.bb],o)
H.a([],s)
r=new G.d("Fiberglass",n,q,r,0)
$.$get$b().h(0,r)
$.Ax=r
r=H.a(["Skull"],s)
q=$.r
n=H.a([$.bd,$.bc],o)
H.a([],s)
r=new G.d("Skull",n,q,r,0)
$.$get$b().h(0,r)
$.Dh=r
r=H.a(["Enchanted"],s)
q=$.G
n=H.a([$.a9,$.bW],o)
H.a([],s)
r=new G.d("Enchanted",n,q,r,0)
$.$get$b().h(0,r)
$.Ap=r
r=H.a(["Berserker's"],s)
q=$.af
n=H.a([$.a9,$.bA],o)
H.a([],s)
r=new G.d("Berserker's",n,q,r,0)
$.$get$b().h(0,r)
$.zm=r
r=H.a(["Clerical"],s)
q=$.af
n=H.a([$.a9,$.b1],o)
H.a([],s)
r=new G.d("Clerical",n,q,r,0)
$.$get$b().h(0,r)
$.zP=r
r=H.a(["Cauterizing"],s)
q=$.o
n=H.a([$.b1,$.ar],o)
H.a([],s)
r=new G.d("Cauterizing",n,q,r,0)
$.$get$b().h(0,r)
$.zG=r
r=H.a(["X-Ray"],s)
q=$.o
n=H.a([$.c4,$.b8],o)
H.a([],s)
r=new G.d("X-Ray",n,q,r,0)
$.$get$b().h(0,r)
$.E_=r
r=H.a(["Clever"],s)
q=$.K
n=H.a([$.a0,$.bW],o)
H.a([],s)
r=new G.d("Clever",n,q,r,0)
$.$get$b().h(0,r)
$.zQ=r
r=H.a(["Fireplace"],s)
q=$.o
n=H.a([$.bh,$.ar],o)
H.a([],s)
r=new G.d("Fireplace",n,q,r,0)
$.$get$b().h(0,r)
$.AA=r
r=H.a(["Crackling"],s)
q=$.G
n=H.a([$.b9,$.ar],o)
H.a([],s)
r=new G.d("Crackling",n,q,r,0)
$.$get$b().h(0,r)
$.zZ=r
r=H.a(["Thumping"],s)
q=$.G
n=H.a([$.b9,$.c9],o)
H.a([],s)
r=new G.d("Thumping",n,q,r,0)
$.$get$b().h(0,r)
$.DG=r
r=H.a(["Shrieking","Banshee"],s)
q=$.G
n=H.a([$.bV,$.b9],o)
H.a([],s)
r=new G.d("Banshee",n,q,r,0)
$.$get$b().h(0,r)
$.D8=r
r=H.a(["Surreal"],s)
q=$.K
n=H.a([$.b7,$.be],o)
H.a([],s)
r=new G.d("Surreal2",n,q,r,0)
$.$get$b().h(0,r)
$.Dz=r
r=H.a(["Aloe","Willowbark"],s)
q=$.o
n=H.a([$.b1,$.b4],o)
H.a([],s)
r=new G.d("Aloe",n,q,r,0)
$.$get$b().h(0,r)
$.zb=r
r=H.a(["Rose"],s)
q=$.o
n=H.a([$.aJ,$.b4],o)
H.a([],s)
r=new G.d("Rose",n,q,r,0)
$.$get$b().h(0,r)
$.CJ=r
r=H.a(["Knock Knock"],s)
q=$.o
n=H.a([$.b7,$.ai],o)
H.a([],s)
r=new G.d("Knock Knock",n,q,r,0)
$.$get$b().h(0,r)
$.Bp=r
r=H.a(["Lifesteal"],s)
q=$.o
n=H.a([$.a9,$.bN],o)
H.a([],s)
r=new G.d("Lifesteal",n,q,r,0)
$.$get$b().h(0,r)
$.Bs=r
r=H.a(["Tragic"],s)
q=$.o
n=H.a([$.aO,$.aR],o)
H.a([],s)
r=new G.d("Tragic",n,q,r,0)
$.$get$b().h(0,r)
$.DL=r
r=H.a(["Slapstick"],s)
q=$.o
n=H.a([$.aL,$.b7],o)
H.a([],s)
r=new G.d("Slapstick",n,q,r,0)
$.$get$b().h(0,r)
$.Di=r
r=H.a(["Gross Out"],s)
q=$.o
n=H.a([$.bP,$.b7],o)
H.a([],s)
r=new G.d("Gross Out",n,q,r,0)
$.$get$b().h(0,r)
$.AY=r
r=H.a(["Flowery"],s)
q=$.r
n=H.a([$.aO,$.b4],o)
H.a([],s)
r=new G.d("Flowery",n,q,r,0)
$.$get$b().h(0,r)
$.AG=r
r=H.a(["Poison Ivy"],s)
q=$.r
n=H.a([$.bN,$.b4],o)
H.a([],s)
r=new G.d("Poison Ivy",n,q,r,0)
$.$get$b().h(0,r)
$.Cq=r
r=H.a(["Winged","Pegasus","Angelic"],s)
q=$.G
n=H.a([$.a9,$.bB],o)
H.a([],s)
r=new G.d("Winged",n,q,r,0)
$.$get$b().h(0,r)
$.DU=r
r=H.a(["Forbidden Fruit"],s)
q=$.o
n=H.a([$.b4,$.aH,$.aR],o)
H.a([],s)
r=new G.d("Forbidden Fruit",n,q,r,0)
$.$get$b().h(0,r)
$.AK=r
r=H.a(["Lawful"],s)
q=$.K
n=H.a([$.bi,$.aI],o)
H.a([],s)
r=new G.d("Lawful",n,q,r,0)
$.$get$b().h(0,r)
$.Bq=r
r=H.a(["Chaotic"],s)
q=$.K
n=H.a([$.bA,$.aI],o)
H.a([],s)
r=new G.d("Chaotic",n,q,r,0)
$.$get$b().h(0,r)
$.zK=r
r=H.a(["Hypothermic"],s)
q=$.G
n=H.a([$.aR,$.br],o)
H.a([],s)
r=new G.d("Hypothermic",n,q,r,0)
$.$get$b().h(0,r)
$.B9=r
r=H.a(["Hyperthermic"],s)
q=$.G
n=H.a([$.aR,$.ar],o)
H.a([],s)
r=new G.d("Hyperthermic",n,q,r,0)
$.$get$b().h(0,r)
$.B7=r
r=H.a(["Shackled"],s)
q=$.G
n=H.a([$.bi,$.c9],o)
H.a([],s)
r=new G.d("Shackled",n,q,r,0)
$.$get$b().h(0,r)
$.D_=r
r=H.a(["Poetic"],s)
q=$.K
n=H.a([$.a0,$.aJ],o)
H.a([],s)
r=new G.d("Poetic",n,q,r,0)
$.$get$b().h(0,r)
$.Cp=r
r=H.a(["Holographic"],s)
q=$.r
n=H.a([$.b8,$.a0,$.bb,$.aa],o)
H.a([],s)
r=new G.d("Holographic",n,q,r,0)
$.$get$b().h(0,r)
$.B4=r
r=H.a(["Casket","Coffin"],s)
q=$.r
n=H.a([$.a1,$.aR],o)
H.a([],s)
r=new G.d("Casket",n,q,r,0)
$.$get$b().h(0,r)
$.zF=r
r=H.a(["Spectral"],s)
q=$.r
n=H.a([$.bV,$.a9],o)
H.a([],s)
r=new G.d("Spectral",n,q,r,0)
$.$get$b().h(0,r)
$.Do=r
r=H.a(["Phoenix"],s)
q=$.r
n=H.a([$.ar,$.bB],o)
H.a([],s)
r=new G.d("Phoenix",n,q,r,0)
$.$get$b().h(0,r)
$.Ce=r
r=H.a(["Tattered"],s)
q=$.G
n=H.a([$.Q,$.aR],o)
H.a([],s)
r=new G.d("Tattered",n,q,r,0)
$.$get$b().h(0,r)
$.DD=r
r=H.a(["Woodwind","Reed"],s)
q=$.o
n=H.a([$.ae,$.a1],o)
H.a([],s)
r=new G.d("Woodwind",n,q,r,0)
$.$get$b().h(0,r)
$.DZ=r
r=H.a(["Bone Hurting"],s)
q=$.o
n=H.a([$.aU,$.bd],o)
H.a([],s)
r=new G.d("Bone Hurting",n,q,r,0)
$.$get$b().h(0,r)
$.zq=r
r=H.a(["Bone Healing:"],s)
q=$.o
n=H.a([$.b1,$.bd],o)
H.a([],s)
r=new G.d("Bone Healing:",n,q,r,0)
$.$get$b().h(0,r)
$.zp=r
r=H.a(["Calcium"],s)
q=$.r
n=H.a([$.bd,$.b1,$.aH],o)
H.a([],s)
r=new G.d("Calcium",n,q,r,0)
$.$get$b().h(0,r)
$.zB=r
r=H.a(["Fleece"],s)
q=$.r
n=H.a([$.Q,$.ar],o)
H.a([],s)
r=new G.d("Fleece",n,q,r,0)
$.$get$b().h(0,r)
$.AD=r
r=H.a(["Potted"],s)
q=$.r
n=H.a([$.bM,$.b4],o)
H.a([],s)
r=new G.d("Potted",n,q,r,0)
$.$get$b().h(0,r)
$.Cy=r
r=H.a(["Canned","Tinned","Potassium"],s)
q=$.r
n=H.a([$.C,$.aH],o)
H.a([],s)
r=new G.d("Canned",n,q,r,0)
$.$get$b().h(0,r)
$.zD=r
r=H.a(["Diseased"],s)
q=$.G
n=H.a([$.aR,$.bm],o)
H.a([],s)
r=new G.d("Diseased",n,q,r,0)
$.$get$b().h(0,r)
$.A7=r
r=H.a(["Porcupine"],s)
q=$.r
n=H.a([$.b2,$.cg],o)
H.a([],s)
r=new G.d("Porcupine",n,q,r,0)
$.$get$b().h(0,r)
$.Cu=r
r=H.a(["Fanged"],s)
q=$.G
n=H.a([$.bd,$.b2],o)
H.a([],s)
r=new G.d("Fanged",n,q,r,0)
$.$get$b().h(0,r)
$.At=r
r=H.a(["Basalt"],s)
q=$.r
n=H.a([$.aM,$.aq],o)
H.a([],s)
r=new G.d("Basalt",n,q,r,0)
$.$get$b().h(0,r)
$.zj=r
r=H.a(["Obsidian"],s)
q=$.r
n=H.a([$.bb,$.aq],o)
H.a([],s)
r=new G.d("Obsidian",n,q,r,0)
$.$get$b().h(0,r)
$.C3=r
r=H.a(["Fenestrated"],s)
q=$.r
n=H.a([$.bb,$.a1],o)
H.a([],s)
r=new G.d("Fenestrated",n,q,r,0)
$.$get$b().h(0,r)
$.Av=r
r=H.a(["Plexiglass"],s)
q=$.r
n=H.a([$.bb,$.aT],o)
H.a([],s)
r=new G.d("Plexiglass",n,q,r,0)
$.$get$b().h(0,r)
$.Cm=r
r=H.a(["Ceramic Wrap"],s)
q=$.o
n=H.a([$.bM,$.O],o)
H.a([],s)
r=new G.d("Ceramic Wrap",n,q,r,0)
$.$get$b().h(0,r)
$.zJ=r
r=H.a(["Fungal"],s)
q=$.r
n=H.a([$.b4,$.bP],o)
H.a([],s)
r=new G.d("Fungal",n,q,r,0)
$.$get$b().h(0,r)
$.AO=r
r=H.a(["Thorny"],s)
q=$.G
n=H.a([$.b4,$.b2],o)
H.a([],s)
r=new G.d("Thorny",n,q,r,0)
$.$get$b().h(0,r)
$.DF=r
r=H.a(["Bulbed"],s)
q=$.G
n=H.a([$.b4,$.ai],o)
H.a([],s)
r=new G.d("Bulbed",n,q,r,0)
$.$get$b().h(0,r)
$.zw=r
r=H.a(["Glass Cannon"],s)
q=$.o
n=H.a([$.bb,$.aZ],o)
H.a([],s)
r=new G.d("Glass Cannon",n,q,r,0)
$.$get$b().h(0,r)
$.AU=r
r=H.a(["Caoutchouc"],s)
q=$.o
n=H.a([$.b4,$.ca],o)
H.a([],s)
r=new G.d("Caoutchouc",n,q,r,0)
$.$get$b().h(0,r)
$.Ck=r
r=H.a(["Cellulose"],s)
q=$.r
n=H.a([$.b4,$.aT],o)
H.a([],s)
r=new G.d("Cellulose",n,q,r,0)
$.$get$b().h(0,r)
$.zI=r
r=H.a(["Horrorcore"],s)
q=$.o
n=H.a([$.ae,$.bc],o)
H.a([],s)
r=new G.d("Horrorcore",n,q,r,0)
$.$get$b().h(0,r)
$.B5=r
r=H.a(["Nightcore"],s)
q=$.o
n=H.a([$.be,$.ae],o)
H.a([],s)
r=new G.d("Nightcore",n,q,r,0)
$.$get$b().h(0,r)
$.C0=r
r=H.a(["Crazy Bus"],s)
q=$.o
n=H.a([$.be,$.aa,$.ae],o)
H.a([],s)
r=new G.d("Crazy Bus",n,q,r,0)
$.$get$b().h(0,r)
$.A0=r
r=H.a(["Burdock"],s)
q=$.r
n=H.a([$.b4,$.cg],o)
H.a([],s)
r=new G.d("Burdock",n,q,r,0)
$.$get$b().h(0,r)
$.zy=r
r=H.a(["Necrotic"],s)
q=$.G
n=H.a([$.bd,$.bV],o)
H.a([],s)
$.$get$b().h(0,new G.d("Necrotic",n,q,r,0))
r=H.a(["Stem"],s)
q=$.r
n=H.a([$.bd,$.b4],o)
H.a([],s)
$.$get$b().h(0,new G.d("Stem",n,q,r,0))
r=H.a(["DryBone"],s)
q=$.G
n=H.a([$.bd,$.aR],o)
H.a([],s)
$.$get$b().h(0,new G.d("DryBone",n,q,r,0))
r=H.a(["XyloBone"],s)
q=$.o
n=H.a([$.bd,$.ae],o)
H.a([],s)
$.$get$b().h(0,new G.d("XyloBone",n,q,r,0))
r=H.a(["Ribcage"],s)
q=$.r
n=H.a([$.bd,$.bi],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ribcage",n,q,r,0))
r=H.a(["BoneZone"],s)
q=$.o
n=H.a([$.bd,$.au],o)
H.a([],s)
$.$get$b().h(0,new G.d("BoneZone",n,q,r,0))
r=H.a(["Creaky"],s)
q=$.K
n=H.a([$.a1,$.b9],o)
H.a([],s)
$.$get$b().h(0,new G.d("Creaky",n,q,r,0))
r=H.a(["Maple"],s)
q=$.r
n=H.a([$.a1,$.aH],o)
H.a([],s)
$.$get$b().h(0,new G.d("Maple",n,q,r,0))
r=H.a(["Mahagony"],s)
q=$.r
n=H.a([$.a1,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Mahagony",n,q,r,0))
r=H.a(["Fenced"],s)
q=$.G
n=H.a([$.a1,$.bi],o)
H.a([],s)
$.$get$b().h(0,new G.d("Fenced",n,q,r,0))
r=H.a(["Bocote"],s)
q=$.r
n=H.a([$.a1,$.bj],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bocote",n,q,r,0))
r=H.a(["Incense"],s)
q=$.r
n=H.a([$.a1,$.bz],o)
H.a([],s)
$.$get$b().h(0,new G.d("Incense",n,q,r,0))
r=H.a(["Ebony"],s)
q=$.o
n=H.a([$.a1,$.aq],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ebony",n,q,r,0))
r=H.a(["Birch"],s)
q=$.r
n=H.a([$.a1,$.b8],o)
H.a([],s)
$.$get$b().h(0,new G.d("Birch",n,q,r,0))
r=H.a(["Knock-on-Wood"],s)
q=$.o
n=H.a([$.a1,$.bW],o)
H.a([],s)
$.$get$b().h(0,new G.d("Knock-on-Wood",n,q,r,0))
r=H.a(["Firewood"],s)
q=$.o
n=H.a([$.a1,$.ar],o)
H.a([],s)
$.$get$b().h(0,new G.d("Firewood",n,q,r,0))
r=H.a(["BlackForest"],s)
q=$.af
n=H.a([$.a1,$.bc],o)
H.a([],s)
$.$get$b().h(0,new G.d("BlackForest",n,q,r,0))
r=H.a(["Tree"],s)
q=$.r
n=H.a([$.a1,$.b4],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tree",n,q,r,0))
r=H.a(["Ebonwood"],s)
q=$.r
n=H.a([$.a1,$.be],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ebonwood",n,q,r,0))
r=H.a(["Bark"],s)
q=$.r
n=H.a([$.a1,$.bm],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bark",n,q,r,0))
r=H.a(["Caveman's","Cavewoman's"],s)
q=$.o
n=H.a([$.a1,$.aM],o)
H.a([],s)
$.$get$b().h(0,new G.d("Caveman's",n,q,r,0))
r=H.a(["3D Printed"],s)
q=$.r
n=H.a([$.aT,$.a0],o)
H.a([],s)
$.$get$b().h(0,new G.d("3D Printed",n,q,r,0))
r=H.a(["Thesis"],s)
q=$.o
n=H.a([$.O,$.a0],o)
H.a([],s)
$.$get$b().h(0,new G.d("Thesis",n,q,r,0))
r=H.a(["Graphene"],s)
q=$.r
n=H.a([$.O,$.aa],o)
H.a([],s)
$.$get$b().h(0,new G.d("Graphene",n,q,r,0))
r=H.a(["Prophecy"],s)
q=$.o
n=H.a([$.O,$.aR],o)
H.a([],s)
$.$get$b().h(0,new G.d("Prophecy",n,q,r,0))
r=H.a(["Bedsheet"],s)
q=$.o
n=H.a([$.Q,$.bV],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bedsheet",n,q,r,0))
r=H.a(["Gemstone","Ruby"],s)
q=$.r
n=H.a([$.aM,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Gemstone",n,q,r,0))
r=H.a(["Pet Rock"],s)
q=$.o
n=H.a([$.aM,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Pet Rock",n,q,r,0))
r=H.a(["Sand"],s)
q=$.r
n=H.a([$.aM,$.bh],o)
H.a([],s)
$.$get$b().h(0,new G.d("Sand",n,q,r,0))
r=H.a(["Geode"],s)
q=$.r
n=H.a([$.aM,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Geode",n,q,r,0))
r=H.a(["Silicon"],s)
q=$.r
n=H.a([$.aM,$.aa],o)
H.a([],s)
$.$get$b().h(0,new G.d("Silicon",n,q,r,0))
r=H.a(["Cryolite","Iceburg"],s)
q=$.r
n=H.a([$.aM,$.br],o)
H.a([],s)
$.$get$b().h(0,new G.d("Cryolite",n,q,r,0))
r=H.a(["Meteor"],s)
q=$.r
n=H.a([$.aM,$.bs],o)
H.a([],s)
$.$get$b().h(0,new G.d("Meteor",n,q,r,0))
r=H.a(["Carbon"],s)
q=$.r
n=H.a([$.aM,$.b4],o)
H.a([],s)
$.$get$b().h(0,new G.d("Carbon",n,q,r,0))
r=H.a(["Mossy"],s)
q=$.G
n=H.a([$.aM,$.cg],o)
H.a([],s)
$.$get$b().h(0,new G.d("Mossy",n,q,r,0))
r=H.a(["Lensed"],s)
q=$.G
n=H.a([$.a0,$.bb],o)
H.a([],s)
$.$get$b().h(0,new G.d("Lensed",n,q,r,0))
r=H.a(["Hide"],s)
q=$.G
n=H.a([$.Q,$.bm],o)
H.a([],s)
$.$get$b().h(0,new G.d("Hide",n,q,r,0))
r=H.a(["FeatherBoa"],s)
q=$.o
n=H.a([$.Q,$.bB],o)
H.a([],s)
$.$get$b().h(0,new G.d("FeatherBoa",n,q,r,0))
r=H.a(["Tacky"],s)
q=$.K
n=H.a([$.Q,$.bP],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tacky",n,q,r,0))
r=H.a(["Whip"],s)
q=$.o
n=H.a([$.Q,$.aL],o)
H.a([],s)
$.$get$b().h(0,new G.d("Whip",n,q,r,0))
r=H.a(["Costumed"],s)
q=$.o
n=H.a([$.Q,$.bc],o)
H.a([],s)
$.$get$b().h(0,new G.d("Costumed",n,q,r,0))
r=H.a(["Punk"],s)
q=$.K
n=H.a([$.Q,$.b2],o)
H.a([],s)
$.$get$b().h(0,new G.d("Punk",n,q,r,0))
r=H.a(["Weighted"],s)
q=$.G
n=H.a([$.Q,$.c9],o)
H.a([],s)
$.$get$b().h(0,new G.d("Weighted",n,q,r,0))
r=H.a(["Favorite"],s)
q=$.K
n=H.a([$.Q,$.bW],o)
H.a([],s)
$.$get$b().h(0,new G.d("Favorite",n,q,r,0))
r=H.a(["Novelty"],s)
q=$.K
n=H.a([$.Q,$.b8],o)
H.a([],s)
$.$get$b().h(0,new G.d("Novelty",n,q,r,0))
r=H.a(["Security"],s)
q=$.r
n=H.a([$.Q,$.bz],o)
H.a([],s)
$.$get$b().h(0,new G.d("Security",n,q,r,0))
r=H.a(["IcePack"],s)
q=$.r
n=H.a([$.Q,$.br],o)
H.a([],s)
$.$get$b().h(0,new G.d("IcePack",n,q,r,0))
r=H.a(["MotionCapture"],s)
q=$.o
n=H.a([$.Q,$.aa],o)
H.a([],s)
$.$get$b().h(0,new G.d("MotionCapture",n,q,r,0))
r=H.a(["Silica"],s)
q=$.r
n=H.a([$.Q,$.bN],o)
H.a([],s)
$.$get$b().h(0,new G.d("Silica",n,q,r,0))
r=H.a(["Harp"],s)
q=$.r
n=H.a([$.Q,$.ae],o)
H.a([],s)
$.$get$b().h(0,new G.d("Harp",n,q,r,0))
r=H.a(["Silk"],s)
q=$.r
n=H.a([$.Q,$.bj],o)
H.a([],s)
$.$get$b().h(0,new G.d("Silk",n,q,r,0))
r=H.a(["RedFlag"],s)
q=$.r
n=H.a([$.Q,$.bA],o)
H.a([],s)
$.$get$b().h(0,new G.d("RedFlag",n,q,r,0))
r=H.a(["MagicCarpet"],s)
q=$.r
n=H.a([$.Q,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("MagicCarpet1",n,q,r,0))
r=H.a(["Satin","Tablecloth"],s)
q=$.r
n=H.a([$.Q,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Satin",n,q,r,0))
r=H.a(["MagicCarpet"],s)
q=$.r
n=H.a([$.Q,$.a9],o)
H.a([],s)
$.$get$b().h(0,new G.d("MagicCarpet2",n,q,r,0))
r=H.a(["Tweed"],s)
q=$.r
n=H.a([$.Q,$.ao],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tweed",n,q,r,0))
r=H.a(["Jean"],s)
q=$.r
n=H.a([$.Q,$.au],o)
H.a([],s)
$.$get$b().h(0,new G.d("Jean",n,q,r,0))
r=H.a(["Tesla"],s)
q=$.af
n=H.a([$.a0,$.aa],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tesla",n,q,r,0))
r=H.a(["Ashwood"],s)
q=$.r
n=H.a([$.a9,$.a1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ashwood",n,q,r,0))
r=H.a(["Peashooter"],s)
q=$.r
n=H.a([$.b4,$.aZ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Peashooter",n,q,r,0))
r=H.a(["Lacquer"],s)
q=$.r
n=H.a([$.aT,$.a1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Lacquer",n,q,r,0))
r=H.a(["Classpecty"],s)
q=$.r
n=H.a([$.S,$.X],o)
H.a([],s)
$.$get$b().h(0,new G.d("Classpecty",n,q,r,0))
r=H.a(["Smartass"],s)
q=$.K
n=H.a([$.a0,$.aU],o)
H.a([],s)
$.$get$b().h(0,new G.d("Smartass",n,q,r,0))
r=H.a(["Miraculous","Magnets","Miracle"],s)
q=$.K
n=H.a([$.bn,$.b6,$.a9],o)
H.a([],s)
$.$get$b().h(0,new G.d("Miraculous",n,q,r,0))
r=H.a(["Pigeon"],s)
q=$.r
n=H.a([$.be,$.bB],o)
H.a([],s)
$.$get$b().h(0,new G.d("Pigeon",n,q,r,0))
r=H.a(["Grimoire"],s)
q=$.o
n=H.a([$.be,$.O],o)
H.a([],s)
$.$get$b().h(0,new G.d("Grimoire",n,q,r,0))
r=H.a(["Oglogoth's"],s)
q=$.af
n=H.a([$.be,$.b2],o)
H.a([],s)
$.$get$b().h(0,new G.d("Oglogoth's",n,q,r,0))
r=H.a(["Echidna's"],s)
q=$.af
n=H.a([$.a6,$.b2],o)
H.a([],s)
$.$get$b().h(0,new G.d("Echidna's",n,q,r,0))
r=H.a(["Superior"],s)
q=$.af
n=H.a([$.a0,$.ao],o)
H.a([],s)
$.$get$b().h(0,new G.d("Superior",n,q,r,0))
r=H.a(["Lego"],s)
q=$.r
n=H.a([$.a6,$.aT,$.bz,$.ai],o)
H.a([],s)
$.$get$b().h(0,new G.d("Lego",n,q,r,0))
r=H.a(["Yardstick"],s)
q=$.o
n=H.a([$.a6,$.dw,$.a1,$.O],o)
H.a([],s)
$.$get$b().h(0,new G.d("Yardstick",n,q,r,0))
r=H.a(["Queenly"],s)
q=$.af
n=H.a([$.aq,$.a9,$.bn,$.aU,$.bc],o)
H.a([],s)
r=new G.d("Queenly",n,q,r,0)
$.$get$b().h(0,r)
$.vs=r
r=H.a(["Kingly"],s)
q=$.af
n=H.a([$.bc,$.ai,$.c9,$.a9,$.bn],o)
H.a([],s)
r=new G.d("Kingly",n,q,r,0)
$.$get$b().h(0,r)
$.vn=r
r=H.a(["Jack"],s)
q=$.af
n=H.a([$.b2,$.aL,$.C,$.aq],o)
H.a([],s)
r=new G.d("Jack",n,q,r,0)
$.$get$b().h(0,r)
$.vl=r
r=H.a(["Codpiece","Codtier"],s)
q=$.o
n=H.a([$.a6,$.b6,$.a1,$.S,$.Q],o)
H.a([],s)
$.$get$b().h(0,new G.d("Codpiece",n,q,r,0))
r=H.a(["Graceful"],s)
q=$.o
n=H.a([$.a6,$.aS,$.O,$.C,$.a0,$.S],o)
H.a([],s)
$.$get$b().h(0,new G.d("Graceful",n,q,r,0))
r=H.a(["Guide","Tourist"],s)
q=$.o
n=H.a([$.a6,$.aS,$.O,$.a0,$.S,$.br],o)
H.a([],s)
$.$get$b().h(0,new G.d("Guide",n,q,r,0))
r=H.a(["Will","Testament"],s)
q=$.o
n=H.a([$.a6,$.aR,$.O,$.a0,$.bi],o)
H.a([],s)
$.$get$b().h(0,new G.d("Testament",n,q,r,0))
r=H.a(["Excalibur's","Excalibur"],s)
q=$.af
n=H.a([$.a6,$.b8,$.C,$.b2,$.aL,$.f1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Excalibur",n,q,r,0))
r=H.a(["Influential"],s)
q=$.af
n=H.a([$.a6,$.O,$.bA,$.aS],o)
H.a([],s)
$.$get$b().h(0,new G.d("Influential",n,q,r,0))
r=H.a(["Alternative"],s)
q=$.af
n=H.a([$.a6,$.a9,$.Q,$.aq],o)
H.a([],s)
$.$get$b().h(0,new G.d("Alternative",n,q,r,0))
r=H.a(["Valkyrie"],s)
q=$.af
n=H.a([$.a6,$.aU,$.bd,$.C,$.f0,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Valkyrie",n,q,r,0))
r=H.a(["Ongoing"],s)
q=$.af
n=H.a([$.a6,$.aM,$.ao,$.iI,$.ai],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ongoing",n,q,r,0))
r=H.a(["Short"],s)
q=$.G
n=H.a([$.a6,$.Q,$.bj,$.aO,$.ao],o)
H.a([],s)
$.$get$b().h(0,new G.d("Short",n,q,r,0))
r=H.a(["Crown"],s)
q=$.o
n=H.a([$.a6,$.C,$.bj,$.aO,$.ao],o)
H.a([],s)
$.$get$b().h(0,new G.d("Crown",n,q,r,0))
r=H.a(["Gristtorrent"],s)
q=$.o
n=H.a([$.a6,$.aT,$.aa,$.aq,$.a0],o)
H.a([],s)
$.$get$b().h(0,new G.d("Gristtorrent",n,q,r,0))
r=H.a(["Robe"],s)
q=$.o
n=H.a([$.a6,$.Q,$.a0,$.a9,$.bh],o)
H.a([],s)
$.$get$b().h(0,new G.d("Robe",n,q,r,0))
r=H.a(["Beret"],s)
q=$.o
n=H.a([$.a6,$.Q,$.a0,$.aO,$.ao],o)
H.a([],s)
$.$get$b().h(0,new G.d("Beret",n,q,r,0))
r=H.a(["Blank"],s)
q=$.G
n=$.a6
m=$.O
l=$.a0
l=H.a([n,m,l,$.aS,l,$.aq],o)
H.a([],s)
$.$get$b().h(0,new G.d("Blank",l,q,r,0))
r=H.a(["Cueball"],s)
q=$.r
l=H.a([$.a6,$.aO,$.bM,$.ai,$.em,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Cueball",l,q,r,0))
r=H.a(["Meddler's"],s)
q=$.af
l=H.a([$.a6,$.aS,$.O,$.bA,$.b1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Meddler's",l,q,r,0))
r=H.a(["Scroll"],s)
q=$.af
l=H.a([$.a9,$.O],o)
H.a([],s)
$.$get$b().h(0,new G.d("Scroll",l,q,r,0))
r=H.a(["Tome"],s)
q=$.o
l=H.a([$.O,$.a0,$.aS],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tome",l,q,r,0))
r=H.a(["Lockpick"],s)
q=$.o
l=H.a([$.a6,$.C,$.aq,$.b2],o)
H.a([],s)
$.$get$b().h(0,new G.d("Lockpick",l,q,r,0))
r=H.a(["Warped"],s)
q=$.G
l=H.a([$.a6,$.C,$.bb,$.aq],o)
H.a([],s)
$.$get$b().h(0,new G.d("Warped",l,q,r,0))
r=H.a(["Stairs"],s)
q=$.o
l=H.a([$.a6,$.b6,$.a1,$.au,$.bz,$.b1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Stairs",l,q,r,0))
r=H.a(["Rocket"],s)
q=$.o
l=H.a([$.a6,$.ar,$.C,$.b9],o)
H.a([],s)
$.$get$b().h(0,new G.d("Rocket",l,q,r,0))
r=H.a(["~ATH"],s)
q=$.o
l=H.a([$.a6,$.aa,$.O,$.aS,$.aR],o)
H.a([],s)
$.$get$b().h(0,new G.d("~ATH",l,q,r,0))
r=H.a(["Puppeted"],s)
q=$.o
l=H.a([$.a6,$.a1,$.aI,$.bc],o)
H.a([],s)
$.$get$b().h(0,new G.d("Puppeted",l,q,r,0))
r=H.a(["Angelic"],s)
q=$.af
l=H.a([$.a6,$.bn,$.bB,$.b8,$.ae,$.a9],o)
H.a([],s)
$.$get$b().h(0,new G.d("Angelic",l,q,r,0))
r=H.a(["Vitae"],s)
q=$.r
l=H.a([$.a6,$.b1,$.bb,$.a9],o)
H.a([],s)
$.$get$b().h(0,new G.d("Vitae",l,q,r,0))
r=H.a(["Fluorite"],s)
q=$.r
l=H.a([$.a6,$.b8,$.bW,$.aM,$.bb],o)
H.a([],s)
$.$get$b().h(0,new G.d("Fluorite",l,q,r,0))
r=H.a(["Janus"],s)
q=$.af
l=H.a([$.a6,$.aU,$.aM,$.ao,$.aa],o)
H.a([],s)
$.$get$b().h(0,new G.d("Janus",l,q,r,0))
r=H.a(["Bacchus"],s)
q=$.af
l=H.a([$.a6,$.aH,$.bA,$.ao],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bacchus",l,q,r,0))
r=H.a(["TurnTable"],s)
q=$.af
l=H.a([$.a6,$.C,$.ae,$.au],o)
H.a([],s)
$.$get$b().h(0,new G.d("TurnTable",l,q,r,0))
r=H.a(["[???]","[Unknown]"],s)
q=$.K
l=H.a([$.a6,$.bb,$.c4,$.b8,$.aq],o)
H.a([],s)
$.$get$b().h(0,new G.d("???",l,q,r,0))
r=H.a(["Demonite"],s)
q=$.r
l=H.a([$.C,$.be],o)
H.a([],s)
$.$get$b().h(0,new G.d("Demonite",l,q,r,0))
r=H.a(["Stymphalian"],s)
q=$.af
l=H.a([$.C,$.bB],o)
H.a([],s)
$.$get$b().h(0,new G.d("Stymphalian",l,q,r,0))
r=H.a(["Junky"],s)
q=$.r
l=H.a([$.C,$.bP],o)
H.a([],s)
$.$get$b().h(0,new G.d("Junky",l,q,r,0))
r=H.a(["Cold Welded","Cold Iron"],s)
q=$.r
l=H.a([$.C,$.br],o)
H.a([],s)
$.$get$b().h(0,new G.d("Cold Iron",l,q,r,0))
r=H.a(["Bolted"],s)
q=$.G
l=H.a([$.C,$.bi],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bolted",l,q,r,0))
r=H.a(["Armored"],s)
q=$.G
l=H.a([$.C,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Armored",l,q,r,0))
r=H.a(["Heartsteel","Rose Gold"],s)
q=$.r
l=H.a([$.C,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Heartsteel",l,q,r,0))
r=H.a(["Brick"],s)
q=$.r
l=H.a([$.bM,$.aM],o)
H.a([],s)
$.$get$b().h(0,new G.d("Brick",l,q,r,0))
r=H.a(["Clay"],s)
q=$.r
l=H.a([$.bM,$.ca],o)
H.a([],s)
$.$get$b().h(0,new G.d("Clay",l,q,r,0))
r=H.a(["Mugly"],s)
q=$.K
l=H.a([$.bM,$.bP],o)
H.a([],s)
$.$get$b().h(0,new G.d("Mugly",l,q,r,0))
r=H.a(["Plate"],s)
q=$.r
l=H.a([$.bM,$.ai],o)
H.a([],s)
$.$get$b().h(0,new G.d("Plate",l,q,r,0))
r=H.a(["Terracotta"],s)
q=$.r
l=H.a([$.bM,$.ar],o)
H.a([],s)
$.$get$b().h(0,new G.d("Terracotta",l,q,r,0))
r=H.a(["Semiconductive"],s)
q=$.r
l=H.a([$.bM,$.aa],o)
H.a([],s)
$.$get$b().h(0,new G.d("Semiconductive",l,q,r,0))
r=H.a(["Vinyl"],s)
q=$.r
l=H.a([$.bM,$.ae],o)
H.a([],s)
$.$get$b().h(0,new G.d("Vinyl",l,q,r,0))
r=H.a(["Artisan"],s)
q=$.G
l=H.a([$.bM,$.a0],o)
H.a([],s)
$.$get$b().h(0,new G.d("Artisan",l,q,r,0))
r=H.a(["Tiled"],s)
q=$.r
l=H.a([$.bM,$.ao],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tiled",l,q,r,0))
r=H.a(["Hand-Sculpted"],s)
q=$.G
l=H.a([$.bM,$.bn],o)
H.a([],s)
$.$get$b().h(0,new G.d("Hand-Sculpted",l,q,r,0))
r=H.a(["Handicraft"],s)
q=$.K
l=H.a([$.bO,$.O],o)
H.a([],s)
$.$get$b().h(0,new G.d("Handicraft",l,q,r,0))
r=H.a(["Torn"],s)
q=$.G
l=H.a([$.bO,$.Q],o)
H.a([],s)
$.$get$b().h(0,new G.d("Torn",l,q,r,0))
r=H.a(["Grotesque"],s)
q=$.K
l=H.a([$.bO,$.bP],o)
H.a([],s)
$.$get$b().h(0,new G.d("Grotesque",l,q,r,0))
r=H.a(["Flickering"],s)
q=$.G
l=H.a([$.bO,$.b8],o)
H.a([],s)
$.$get$b().h(0,new G.d("Flickering",l,q,r,0))
r=H.a(["Thinly Veiled","Translucent"],s)
q=$.r
l=H.a([$.bO,$.aq],o)
H.a([],s)
$.$get$b().h(0,new G.d("Thinly Veiled",l,q,r,0))
r=H.a(["Fragile"],s)
q=$.G
l=H.a([$.bO,$.bj],o)
H.a([],s)
$.$get$b().h(0,new G.d("Fragile",l,q,r,0))
r=H.a(["Troll's"],s)
q=$.af
l=H.a([$.bO,$.bA],o)
H.a([],s)
$.$get$b().h(0,new G.d("Troll's",l,q,r,0))
r=H.a(["Sappy"],s)
q=$.r
l=H.a([$.bO,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Sappy",l,q,r,0))
r=H.a(["Bootleg"],s)
q=$.r
l=H.a([$.bO,$.b6],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bootleg",l,q,r,0))
r=H.a(["Distorted"],s)
q=$.r
l=H.a([$.bO,$.b9],o)
H.a([],s)
$.$get$b().h(0,new G.d("Distorted",l,q,r,0))
r=H.a(["Ent's"],s)
q=$.af
l=H.a([$.a1,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ent's",l,q,r,0))
r=H.a(["WeepingWillow"],s)
q=$.r
l=H.a([$.a1,$.bV],o)
H.a([],s)
$.$get$b().h(0,new G.d("WeepingWillow",l,q,r,0))
r=H.a(["Latex"],s)
q=$.r
l=H.a([$.a1,$.ca],o)
H.a([],s)
$.$get$b().h(0,new G.d("Latex",l,q,r,0))
r=H.a(["Turf"],s)
q=$.r
l=H.a([$.aT,$.aU],o)
H.a([],s)
$.$get$b().h(0,new G.d("Turf",l,q,r,0))
r=H.a(["Stress Relieving"],s)
q=$.o
l=H.a([$.ca,$.bz],o)
H.a([],s)
$.$get$b().h(0,new G.d("Stress Relieving",l,q,r,0))
r=H.a(["R-Rated"],s)
q=$.G
l=H.a([$.ca,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("R-Rated",l,q,r,0))
r=H.a(["Racing"],s)
q=$.o
l=H.a([$.ca,$.ar],o)
H.a([],s)
$.$get$b().h(0,new G.d("Racing",l,q,r,0))
r=H.a(["Cross Stitch"],s)
q=$.o
l=H.a([$.O,$.Q],o)
H.a([],s)
$.$get$b().h(0,new G.d("Cross Stitch",l,q,r,0))
r=H.a(["LoveLetter"],s)
q=$.o
l=H.a([$.O,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("LoveLetter",l,q,r,0))
r=H.a(["EbonStone"],s)
q=$.r
l=H.a([$.aM,$.be],o)
H.a([],s)
$.$get$b().h(0,new G.d("EbonStone",l,q,r,0))
r=H.a(["Rock Candy"],s)
q=$.r
l=H.a([$.aM,$.aH],o)
H.a([],s)
$.$get$b().h(0,new G.d("Rock Candy",l,q,r,0))
r=H.a(["Smashing"],s)
q=$.K
l=H.a([$.aM,$.b9],o)
H.a([],s)
$.$get$b().h(0,new G.d("Smashing",l,q,r,0))
r=H.a(["Anomalous"],s)
q=$.K
l=H.a([$.bV,$.be],o)
H.a([],s)
$.$get$b().h(0,new G.d("Anomalous",l,q,r,0))
r=H.a(["Onmoraki"],s)
q=$.r
l=H.a([$.bV,$.bB],o)
H.a([],s)
$.$get$b().h(0,new G.d("Onmoraki",l,q,r,0))
r=H.a(["Ghastly"],s)
q=$.K
l=H.a([$.bV,$.bP],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ghastly",l,q,r,0))
r=H.a(["Shade","Shadow"],s)
q=$.r
l=H.a([$.bV,$.aq],o)
H.a([],s)
$.$get$b().h(0,new G.d("Shade",l,q,r,0))
r=H.a(["Choral"],s)
q=$.r
l=H.a([$.bV,$.ae],o)
H.a([],s)
$.$get$b().h(0,new G.d("Choral",l,q,r,0))
r=H.a(["Eerie"],s)
q=$.r
l=H.a([$.bV,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Eerie",l,q,r,0))
r=H.a(["Spiritual"],s)
q=$.K
l=H.a([$.bV,$.bn],o)
H.a([],s)
$.$get$b().h(0,new G.d("Spiritual",l,q,r,0))
r=H.a(["Heart"],s)
q=$.r
l=H.a([$.bm,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Heart",l,q,r,0))
r=H.a(["Primordial"],s)
q=$.r
l=H.a([$.bm,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Primordial",l,q,r,0))
r=H.a(["Eyeball"],s)
q=$.r
l=H.a([$.bm,$.b8],o)
H.a([],s)
$.$get$b().h(0,new G.d("Eyeball",l,q,r,0))
r=H.a(["Vulture"],s)
q=$.G
l=H.a([$.bm,$.bB],o)
H.a([],s)
$.$get$b().h(0,new G.d("Vulture",l,q,r,0))
r=H.a(["DarkSpell","BlackMagic"],s)
q=$.o
l=H.a([$.be,$.a9],o)
H.a([],s)
$.$get$b().h(0,new G.d("BlackMagic",l,q,r,0))
r=H.a(["Doppelganger"],s)
q=$.r
l=H.a([$.be,$.b6],o)
H.a([],s)
$.$get$b().h(0,new G.d("Doppelganger",l,q,r,0))
r=H.a(["Incomprehensible"],s)
q=$.G
l=H.a([$.be,$.b9],o)
H.a([],s)
$.$get$b().h(0,new G.d("Incomprehensible",l,q,r,0))
r=H.a(["Destructive"],s)
q=$.o
l=H.a([$.be,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Destructive",l,q,r,0))
r=H.a(["Growling"],s)
q=$.G
l=H.a([$.cg,$.b9],o)
H.a([],s)
$.$get$b().h(0,new G.d("Growling",l,q,r,0))
r=H.a(["Coconut"],s)
q=$.r
l=H.a([$.cg,$.aH],o)
H.a([],s)
$.$get$b().h(0,new G.d("Coconut",l,q,r,0))
r=H.a(["Beastmaster's"],s)
q=$.af
l=H.a([$.cg,$.bi],o)
H.a([],s)
$.$get$b().h(0,new G.d("Beastmaster's",l,q,r,0))
r=H.a(["Fluffy"],s)
q=$.r
l=H.a([$.cg,$.bB],o)
H.a([],s)
$.$get$b().h(0,new G.d("Fluffy",l,q,r,0))
r=H.a(["Feather Grass","Fern"],s)
q=$.r
l=H.a([$.b4,$.bB],o)
H.a([],s)
$.$get$b().h(0,new G.d("Fern",l,q,r,0))
r=H.a(["Four Leafed"],s)
q=$.G
l=H.a([$.b4,$.bW],o)
H.a([],s)
$.$get$b().h(0,new G.d("Four Leafed",l,q,r,0))
r=H.a(["Shrubbery"],s)
q=$.r
l=H.a([$.b4,$.aq],o)
H.a([],s)
$.$get$b().h(0,new G.d("Shrubbery",l,q,r,0))
r=H.a(["Shameplant","Ecballium"],s)
q=$.r
l=H.a([$.b4,$.bs],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ecballium",l,q,r,0))
r=H.a(["Truffle"],s)
q=$.r
l=H.a([$.b4,$.bj],o)
H.a([],s)
$.$get$b().h(0,new G.d("Truffle",l,q,r,0))
r=H.a(["Vine"],s)
q=$.r
l=H.a([$.b4,$.bi],o)
H.a([],s)
$.$get$b().h(0,new G.d("Vine",l,q,r,0))
r=H.a(["Carion","CorpseBlossom"],s)
q=$.r
l=H.a([$.b4,$.aU],o)
H.a([],s)
$.$get$b().h(0,new G.d("CorpseBlossom",l,q,r,0))
r=H.a(["Fruity"],s)
q=$.G
l=H.a([$.b4,$.aH],o)
H.a([],s)
$.$get$b().h(0,new G.d("Fruity",l,q,r,0))
r=H.a(["Squawking"],s)
q=$.G
l=H.a([$.bB,$.b9],o)
H.a([],s)
$.$get$b().h(0,new G.d("Squawking",l,q,r,0))
r=H.a(["Poultry","Chicken","Turkey"],s)
q=$.r
l=H.a([$.bB,$.aH],o)
H.a([],s)
$.$get$b().h(0,new G.d("Poultry",l,q,r,0))
r=H.a(["Dove"],s)
q=$.r
l=H.a([$.bB,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Dove",l,q,r,0))
r=H.a(["Peacock"],s)
q=$.r
l=H.a([$.bB,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Peacock",l,q,r,0))
r=H.a(["Stork"],s)
q=$.r
l=H.a([$.bB,$.b1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Stork",l,q,r,0))
r=H.a(["Zhenniao"],s)
q=$.r
l=H.a([$.bB,$.bN],o)
H.a([],s)
$.$get$b().h(0,new G.d("Zhenniao",l,q,r,0))
r=H.a(["Dodo","Passenger Pigeon"],s)
q=$.r
l=H.a([$.bB,$.aR],o)
H.a([],s)
$.$get$b().h(0,new G.d("Dodo",l,q,r,0))
r=H.a(["Raven"],s)
q=$.t6
l=H.a([$.bB,$.bc],o)
H.a([],s)
$.$get$b().h(0,new G.d("Raven",l,q,r,0))
r=H.a(["Frilled"],s)
q=$.G
l=H.a([$.bB,$.bP],o)
H.a([],s)
$.$get$b().h(0,new G.d("Frilled",l,q,r,0))
r=H.a(["Horrifying"],s)
q=$.K
l=H.a([$.bP,$.bc],o)
H.a([],s)
$.$get$b().h(0,new G.d("Horrifying",l,q,r,0))
r=H.a(["Burning Edge"],s)
q=$.o
l=H.a([$.aL,$.ar],o)
H.a([],s)
$.$get$b().h(0,new G.d("Burning Edge",l,q,r,0))
r=H.a(["Scapel"],s)
q=$.o
l=H.a([$.aL,$.b1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Scapel",l,q,r,0))
r=H.a(["Menacing"],s)
q=$.K
l=H.a([$.bc,$.b2],o)
H.a([],s)
$.$get$b().h(0,new G.d("Menacing",l,q,r,0))
r=H.a(["Syringe"],s)
q=$.o
l=H.a([$.b1,$.b2],o)
H.a([],s)
$.$get$b().h(0,new G.d("Syringe",l,q,r,0))
r=H.a(["Bitter","Sour"],s)
q=$.K
l=H.a([$.aH,$.aU],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bitter",l,q,r,0))
r=H.a(["Pineapple"],s)
q=$.r
l=H.a([$.aH,$.b2],o)
H.a([],s)
$.$get$b().h(0,new G.d("Pineapple",l,q,r,0))
r=H.a(["Crunchy"],s)
q=$.K
l=H.a([$.aH,$.ai],o)
H.a([],s)
$.$get$b().h(0,new G.d("Crunchy",l,q,r,0))
r=H.a(["Bass"],s)
q=$.o
l=H.a([$.c9,$.ae],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bass",l,q,r,0))
r=H.a(["Rigid"],s)
q=$.o
l=H.a([$.c9,$.aU],o)
H.a([],s)
$.$get$b().h(0,new G.d("Rigid",l,q,r,0))
r=H.a(["Prop"],s)
q=$.o
l=H.a([$.aZ,$.b6],o)
H.a([],s)
$.$get$b().h(0,new G.d("Prop",l,q,r,0))
r=H.a(["Magic Missle"],s)
q=$.o
l=H.a([$.aZ,$.a9],o)
H.a([],s)
$.$get$b().h(0,new G.d("Magic Missle",l,q,r,0))
r=H.a(["Gangster's"],s)
q=$.af
l=H.a([$.aZ,$.au],o)
H.a([],s)
$.$get$b().h(0,new G.d("Gangster's",l,q,r,0))
r=H.a(["Cupid's"],s)
q=$.af
l=H.a([$.aZ,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Cupid's",l,q,r,0))
r=H.a(["Turreted"],s)
q=$.G
l=H.a([$.aZ,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Turreted",l,q,r,0))
r=H.a(["AutoAiming","AutoTarget","TargetAssist","AimBot"],s)
q=$.G
l=H.a([$.aZ,$.a0],o)
H.a([],s)
$.$get$b().h(0,new G.d("AutoTarget",l,q,r,0))
r=H.a(["Guerilla's"],s)
q=$.af
l=H.a([$.aZ,$.bA],o)
H.a([],s)
$.$get$b().h(0,new G.d("Guerilla's",l,q,r,0))
r=H.a(["Rail","ChargeDart"],s)
q=$.o
l=H.a([$.aZ,$.aa],o)
H.a([],s)
$.$get$b().h(0,new G.d("Rail",l,q,r,0))
r=H.a(["Tau"],s)
q=$.o
l=H.a([$.aZ,$.c4],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tau",l,q,r,0))
r=H.a(["Pew","Laser"],s)
q=$.o
l=H.a([$.aZ,$.b8],o)
H.a([],s)
$.$get$b().h(0,new G.d("Pew",l,q,r,0))
r=H.a(["Thermal"],s)
q=$.G
l=H.a([$.aZ,$.ar],o)
H.a([],s)
$.$get$b().h(0,new G.d("Thermal",l,q,r,0))
r=H.a(["Plasma","Incandescent"],s)
q=$.r
l=H.a([$.b8,$.ar],o)
H.a([],s)
$.$get$b().h(0,new G.d("Plasma",l,q,r,0))
r=H.a(["Shredding"],s)
q=$.r
l=H.a([$.ae,$.ar],o)
H.a([],s)
$.$get$b().h(0,new G.d("Shredding",l,q,r,0))
r=H.a(["Leprechaun"],s)
q=$.r
l=H.a([$.bW,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Leprechaun",l,q,r,0))
r=H.a(["Charmed"],s)
q=$.r
l=H.a([$.bW,$.bj],o)
H.a([],s)
$.$get$b().h(0,new G.d("Charmed",l,q,r,0))
r=H.a(["Leprechaun"],s)
q=$.af
l=H.a([$.bW,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Leprechaun",l,q,r,0))
r=H.a(["Prospitian"],s)
q=$.af
l=H.a([$.b8,$.bh],o)
H.a([],s)
$.$get$b().h(0,new G.d("Prospitian",l,q,r,0))
r=H.a(["Vigilant"],s)
q=$.G
l=H.a([$.b8,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Vigilant",l,q,r,0))
r=H.a(["Stand-Up"],s)
q=$.K
l=H.a([$.b8,$.b7],o)
H.a([],s)
$.$get$b().h(0,new G.d("Stand-Up",l,q,r,0))
r=H.a(["Bedazzled"],s)
q=$.G
l=H.a([$.b8,$.au],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bedazzled",l,q,r,0))
r=H.a(["Thief's"],s)
q=$.af
l=H.a([$.aq,$.a9],o)
H.a([],s)
$.$get$b().h(0,new G.d("Thief's",l,q,r,0))
r=H.a(["InvisibilityCloak"],s)
q=$.o
l=H.a([$.aq,$.a9,$.Q],o)
H.a([],s)
$.$get$b().h(0,new G.d("InvisibilityCloak",l,q,r,0))
r=H.a(["Comedy Night","Dry Humor"],s)
q=$.G
l=H.a([$.aq,$.b7],o)
H.a([],s)
$.$get$b().h(0,new G.d("Comedy Night",l,q,r,0))
r=H.a(["Stealthy"],s)
q=$.K
l=H.a([$.aq,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Stealthy",l,q,r,0))
r=H.a(["Subterfuge"],s)
q=$.o
l=H.a([$.aq,$.a0],o)
H.a([],s)
$.$get$b().h(0,new G.d("Subterfuge",l,q,r,0))
r=H.a(["Dersite"],s)
q=$.af
l=H.a([$.aq,$.aU],o)
H.a([],s)
$.$get$b().h(0,new G.d("Dersite",l,q,r,0))
r=H.a(["Ambient","Muzak","Elevator"],s)
q=$.af
l=H.a([$.bz,$.ae],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ambient",l,q,r,0))
r=H.a(["Anesthesia"],s)
q=$.o
l=H.a([$.bz,$.b1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Anesthesia",l,q,r,0))
r=H.a(["Supportive"],s)
q=$.o
l=H.a([$.bz,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Supportive",l,q,r,0))
r=H.a(["Nuka"],s)
q=$.o
l=H.a([$.b1,$.c4],o)
H.a([],s)
$.$get$b().h(0,new G.d("Nuka",l,q,r,0))
r=H.a(["Contaminated"],s)
q=$.G
l=H.a([$.bN,$.c4],o)
H.a([],s)
$.$get$b().h(0,new G.d("Contaminated",l,q,r,0))
r=H.a(["Unstable"],s)
q=$.G
l=H.a([$.aR,$.c4],o)
H.a([],s)
$.$get$b().h(0,new G.d("Unstable",l,q,r,0))
r=H.a(["Timebomb"],s)
q=$.o
l=H.a([$.aR,$.bs],o)
H.a([],s)
$.$get$b().h(0,new G.d("Timebomb",l,q,r,0))
r=H.a(["Short Circuiting"],s)
q=$.G
l=H.a([$.aa,$.aR],o)
H.a([],s)
$.$get$b().h(0,new G.d("Short Circuiting",l,q,r,0))
r=H.a(["Artifact","Relic"],s)
q=$.o
l=H.a([$.aR,$.bj],o)
H.a([],s)
$.$get$b().h(0,new G.d("Relic",l,q,r,0))
r=H.a(["Existentialist"],s)
q=$.G
l=H.a([$.aR,$.aU],o)
H.a([],s)
$.$get$b().h(0,new G.d("Existentialist",l,q,r,0))
r=H.a(["Apocalyptic"],s)
q=$.K
l=H.a([$.aR,$.bn],o)
H.a([],s)
$.$get$b().h(0,new G.d("Apocalyptic",l,q,r,0))
r=H.a(["Dud"],s)
q=$.o
l=H.a([$.bs,$.b6],o)
H.a([],s)
$.$get$b().h(0,new G.d("Dud",l,q,r,0))
r=H.a(["Heat Seeking","Guided"],s)
q=$.o
l=H.a([$.bs,$.a0],o)
H.a([],s)
$.$get$b().h(0,new G.d("Guided",l,q,r,0))
r=H.a(["Bobomb"],s)
q=$.o
l=H.a([$.bs,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bobomb",l,q,r,0))
r=H.a(["Dread"],s)
q=$.o
l=H.a([$.aR,$.bi],o)
H.a([],s)
$.$get$b().h(0,new G.d("Dread",l,q,r,0))
r=H.a(["Knockback"],s)
q=$.o
l=H.a([$.bs,$.bi],o)
H.a([],s)
$.$get$b().h(0,new G.d("Knockback",l,q,r,0))
r=H.a(["Paralysis"],s)
q=$.o
l=H.a([$.aa,$.bi],o)
H.a([],s)
$.$get$b().h(0,new G.d("Paralysis",l,q,r,0))
r=H.a(["Carnage"],s)
q=$.o
l=H.a([$.bs,$.bA],o)
H.a([],s)
$.$get$b().h(0,new G.d("Carnage",l,q,r,0))
r=H.a(["Blast Beat"],s)
q=$.o
l=H.a([$.bs,$.ae],o)
H.a([],s)
$.$get$b().h(0,new G.d("Blast Beat",l,q,r,0))
r=H.a(["Corrosive"],s)
q=$.G
l=H.a([$.bs,$.bN],o)
H.a([],s)
$.$get$b().h(0,new G.d("Corrosive",l,q,r,0))
r=H.a(["Flash Freeze","Ice Bomb"],s)
q=$.o
l=H.a([$.bs,$.br],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ice Bomb",l,q,r,0))
r=H.a(["Cryogenic"],s)
q=$.o
l=H.a([$.br,$.b1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Cryogenic",l,q,r,0))
r=H.a(["Spellcasting","Thundaga"],s)
q=$.o
l=H.a([$.a9,$.aa],o)
H.a([],s)
$.$get$b().h(0,new G.d("Spellcasting",l,q,r,0))
r=H.a(["Tingling"],s)
q=$.G
l=H.a([$.aa,$.bh],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tingling",l,q,r,0))
r=H.a(["Rage Plague","Beserk"],s)
q=$.o
l=H.a([$.bA,$.bN],o)
H.a([],s)
$.$get$b().h(0,new G.d("Rage Plague",l,q,r,0))
r=H.a(["Nerve Gas"],s)
q=$.o
l=H.a([$.bN,$.bi],o)
H.a([],s)
$.$get$b().h(0,new G.d("Nerve Gas",l,q,r,0))
r=H.a(["Carbon Monoxide"],s)
q=$.o
l=H.a([$.bN,$.aU],o)
H.a([],s)
$.$get$b().h(0,new G.d("Carbon Monoxide",l,q,r,0))
r=H.a(["Neurotoxin"],s)
q=$.o
l=H.a([$.bN,$.a0],o)
H.a([],s)
$.$get$b().h(0,new G.d("Neurotoxin",l,q,r,0))
r=H.a(["Virulent"],s)
q=$.G
l=H.a([$.bN,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Virulent",l,q,r,0))
r=H.a(["Toxic"],s)
q=$.G
l=H.a([$.bN,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Toxic",l,q,r,0))
r=H.a(["Laughing Gas","Nitrous","N20"],s)
q=$.o
l=H.a([$.bN,$.b7],o)
H.a([],s)
$.$get$b().h(0,new G.d("Laughing Gas",l,q,r,0))
r=H.a(["Amplified","Amped"],s)
q=$.G
l=H.a([$.ae,$.b9],o)
H.a([],s)
$.$get$b().h(0,new G.d("Amplified",l,q,r,0))
r=H.a(["Rap"],s)
q=$.o
l=H.a([$.ae,$.au],o)
H.a([],s)
$.$get$b().h(0,new G.d("Rap",l,q,r,0))
r=H.a(["Saxaphone","Saxobeat"],s)
q=$.o
l=H.a([$.ae,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Saxaphone",l,q,r,0))
r=H.a(["Offbeat","Syncopated"],s)
q=$.o
l=H.a([$.ae,$.aU],o)
H.a([],s)
$.$get$b().h(0,new G.d("Offbeat",l,q,r,0))
r=H.a(["Piper's"],s)
q=$.af
l=H.a([$.ae,$.bi],o)
H.a([],s)
$.$get$b().h(0,new G.d("Piper's",l,q,r,0))
r=H.a(["Melodic"],s)
q=$.o
l=H.a([$.ae,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Melodic",l,q,r,0))
r=H.a(["Smooth"],s)
q=$.o
l=H.a([$.ae,$.bh],o)
H.a([],s)
$.$get$b().h(0,new G.d("Smooth",l,q,r,0))
r=H.a(["Thrash"],s)
q=$.o
l=H.a([$.ae,$.bA],o)
H.a([],s)
$.$get$b().h(0,new G.d("Thrash",l,q,r,0))
r=H.a(["Chant","Chanting"],s)
q=$.o
l=H.a([$.ae,$.b1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Chant",l,q,r,0))
r=H.a(["Chewy"],s)
q=$.o
l=H.a([$.bA,$.aH],o)
H.a([],s)
$.$get$b().h(0,new G.d("Chewy",l,q,r,0))
r=H.a(["Phony"],s)
q=$.o
l=H.a([$.bA,$.b6],o)
H.a([],s)
$.$get$b().h(0,new G.d("Phony",l,q,r,0))
r=H.a(["Doctor's"],s)
q=$.af
l=H.a([$.a0,$.b1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Doctor's",l,q,r,0))
r=H.a(["Straitjacketed"],s)
q=$.o
l=H.a([$.bi,$.b1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Straitjacketed",l,q,r,0))
r=H.a(["Strapped"],s)
q=$.o
l=H.a([$.bi,$.aU],o)
H.a([],s)
$.$get$b().h(0,new G.d("Strapped",l,q,r,0))
r=H.a(["Bondage"],s)
q=$.o
l=H.a([$.bi,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bondage",l,q,r,0))
r=H.a(["Sealed"],s)
q=$.G
l=H.a([$.bi,$.a9],o)
H.a([],s)
$.$get$b().h(0,new G.d("Sealed",l,q,r,0))
r=H.a(["Attractive"],s)
q=$.K
l=H.a([$.aO,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Attractive",l,q,r,0))
r=H.a(["Relaxed"],s)
q=$.G
l=H.a([$.bh,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Relaxed",l,q,r,0))
r=H.a(["Loveseat"],s)
q=$.o
l=H.a([$.bh,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Loveseat",l,q,r,0))
r=H.a(["Doughy","Comfort Food"],s)
q=$.K
l=H.a([$.aH,$.bh],o)
H.a([],s)
$.$get$b().h(0,new G.d("Comfort Food",l,q,r,0))
r=H.a(["Yandere"],s)
q=$.K
l=H.a([$.aJ,$.bc],o)
H.a([],s)
$.$get$b().h(0,new G.d("Yandere",l,q,r,0))
r=H.a(["Tsundere"],s)
q=$.K
l=H.a([$.aJ,$.aU],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tsundere",l,q,r,0))
r=H.a(["Disturbed"],s)
q=$.G
l=H.a([$.aI,$.aU],o)
H.a([],s)
$.$get$b().h(0,new G.d("Disturbed",l,q,r,0))
r=H.a(["Sapient"],s)
q=$.G
l=H.a([$.a0,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Sapient",l,q,r,0))
r=H.a(["Lab Grown","Hydroponic"],s)
q=$.o
l=H.a([$.a0,$.aH],o)
H.a([],s)
$.$get$b().h(0,new G.d("Hydroponic",l,q,r,0))
r=H.a(["Free Range"],s)
q=$.o
l=H.a([$.aI,$.aH],o)
H.a([],s)
$.$get$b().h(0,new G.d("Free Range",l,q,r,0))
r=H.a(["Gentleman's","Lady's"],s)
q=$.af
l=H.a([$.aJ,$.ao],o)
H.a([],s)
$.$get$b().h(0,new G.d("Gentlemanly",l,q,r,0))
r=H.a(["Sapient"],s)
q=$.G
l=H.a([$.a0,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Sapient",l,q,r,0))
r=H.a(["Sentimental","Anniversary"],s)
q=$.G
l=H.a([$.aJ,$.bn],o)
H.a([],s)
$.$get$b().h(0,new G.d("Sentimental",l,q,r,0))
r=H.a(["Doki-Doki"],s)
q=$.G
l=H.a([$.aJ,$.b9],o)
H.a([],s)
$.$get$b().h(0,new G.d("Doki-Doki",l,q,r,0))
r=H.a(["Doki-Doki Literature Club"],s)
q=$.G
l=H.a([$.aJ,$.b9,$.aS,$.iJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Doki-Doki Literature Club",l,q,r,0))
r=H.a(["Banana"],s)
q=$.G
l=H.a([$.aH,$.b7],o)
H.a([],s)
$.$get$b().h(0,new G.d("Banana",l,q,r,0))
r=H.a(["Mana"],s)
q=$.G
l=H.a([$.aH,$.a9],o)
H.a([],s)
$.$get$b().h(0,new G.d("Mana",l,q,r,0))
r=H.a(["Homemade"],s)
q=$.G
l=H.a([$.aH,$.bn],o)
H.a([],s)
$.$get$b().h(0,new G.d("Homemade",l,q,r,0))
r=H.a(["Steampunk"],s)
q=$.G
l=H.a([$.a9,$.ao],o)
H.a([],s)
$.$get$b().h(0,new G.d("Steampunk",l,q,r,0))
r=H.a(["Thor's Banana"],s)
q=$.G
l=H.a([$.aH,$.b7,$.aa,$.b9],o)
H.a([],s)
$.$get$b().h(0,new G.d("I Can't Stop Laughing",l,q,r,0))
r=H.a(["Soulsteel"],s)
q=$.r
l=H.a([$.C,$.bV],o)
H.a([],s)
$.$get$b().h(0,new G.d("Soulsteel",l,q,r,0))
r=H.a(["Ritual","Tribal"],s)
q=$.o
l=H.a([$.bd,$.ar],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ritual",l,q,r,0))
r=H.a(["Inflamable"],s)
q=$.G
l=H.a([$.bO,$.ar],o)
H.a([],s)
$.$get$b().h(0,new G.d("Inflamable",l,q,r,0))
r=H.a(["Crafting"],s)
q=$.o
l=H.a([$.a1,$.a0],o)
H.a([],s)
$.$get$b().h(0,new G.d("Crafting",l,q,r,0))
r=H.a(["Polluting"],s)
q=$.o
l=H.a([$.aT,$.ar],o)
H.a([],s)
$.$get$b().h(0,new G.d("Polluting",l,q,r,0))
r=H.a(["Insulated"],s)
q=$.G
l=H.a([$.ca,$.aa],o)
H.a([],s)
$.$get$b().h(0,new G.d("Insulated",l,q,r,0))
r=H.a(["Ash"],s)
q=$.r
l=H.a([$.O,$.ar],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ash",l,q,r,0))
r=H.a(["Delicate"],s)
q=$.G
l=H.a([$.O,$.bb],o)
H.a([],s)
$.$get$b().h(0,new G.d("Delicate",l,q,r,0))
r=H.a(["Glass Blower's"],s)
q=$.af
l=H.a([$.bb,$.ar],o)
H.a([],s)
$.$get$b().h(0,new G.d("Glass Blower's",l,q,r,0))
r=H.a(["Sunburnt"],s)
q=$.G
l=H.a([$.bm,$.ar],o)
H.a([],s)
$.$get$b().h(0,new G.d("Sunburnt",l,q,r,0))
r=H.a(["Pyrebitten"],s)
q=$.G
l=H.a([$.ar,$.be],o)
H.a([],s)
$.$get$b().h(0,new G.d("Pyrebitten",l,q,r,0))
r=H.a(["Mink"],s)
q=$.r
l=H.a([$.aJ,$.cg],o)
H.a([],s)
$.$get$b().h(0,new G.d("Mink",l,q,r,0))
r=H.a(["Wildfire"],s)
q=$.af
l=H.a([$.b4,$.ar],o)
H.a([],s)
$.$get$b().h(0,new G.d("Wildfire",l,q,r,0))
r=H.a(["Scarred"],s)
q=$.G
l=H.a([$.b1,$.bP],o)
H.a([],s)
$.$get$b().h(0,new G.d("Scarred",l,q,r,0))
r=H.a(["Hyper Realistic"],s)
q=$.K
l=H.a([$.bn,$.bc],o)
H.a([],s)
$.$get$b().h(0,new G.d("Hyper Realistic",l,q,r,0))
r=H.a(["Hestia's"],s)
q=$.af
l=H.a([$.bW,$.ar],o)
H.a([],s)
$.$get$b().h(0,new G.d("Hestia's",l,q,r,0))
r=H.a(["Smoking"],s)
q=$.G
l=H.a([$.aq,$.ar],o)
H.a([],s)
$.$get$b().h(0,new G.d("Smoking",l,q,r,0))
r=H.a(["Heating","Radiator","Furnace"],s)
q=$.G
l=H.a([$.ar,$.aa],o)
H.a([],s)
$.$get$b().h(0,new G.d("Radiator",l,q,r,0))
r=H.a(["Fuming"],s)
q=$.G
l=H.a([$.ar,$.bN],o)
H.a([],s)
$.$get$b().h(0,new G.d("Fuming",l,q,r,0))
r=H.a(["Firework","Sparkler"],s)
q=$.G
l=H.a([$.ar,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Firework",l,q,r,0))
r=H.a(["Panicky"],s)
q=$.G
l=H.a([$.aR,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Panicky",l,q,r,0))
r=H.a(["Ornamental"],s)
q=$.G
l=H.a([$.bj,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ornamental",l,q,r,0))
r=H.a(["Dear","Precious"],s)
q=$.G
l=H.a([$.bj,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Dear",l,q,r,0))
r=H.a(["Swaggy","Swag"],s)
q=$.G
l=H.a([$.bj,$.au],o)
H.a([],s)
$.$get$b().h(0,new G.d("Swaggy",l,q,r,0))
r=H.a(["Uncanny"],s)
q=$.G
l=H.a([$.aU,$.bn],o)
H.a([],s)
$.$get$b().h(0,new G.d("Uncanny",l,q,r,0))
r=H.a(["Talkative","Blabbering"],s)
q=$.G
l=H.a([$.b9,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Talkative",l,q,r,0))
r=H.a(["Waifu","Catfish"],s)
q=$.G
l=H.a([$.aJ,$.b6],o)
H.a([],s)
$.$get$b().h(0,new G.d("Waifu",l,q,r,0))
r=H.a(["Charming"],s)
q=$.G
l=H.a([$.a9,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Charming",l,q,r,0))
r=H.a(["God Tier"],s)
q=$.G
l=H.a([$.S,$.X,$.bn],o)
H.a([],s)
$.$get$b().h(0,new G.d("God Tier",l,q,r,0))
r=H.a(["Cod Tier"],s)
q=$.G
l=H.a([$.S,$.X,$.bn,$.b6,$.Q],o)
H.a([],s)
$.$get$b().h(0,new G.d("Cod Tier",l,q,r,0))
r=H.a(["Dog Tier"],s)
q=$.G
l=H.a([$.S,$.X,$.bn,$.cg],o)
H.a([],s)
$.$get$b().h(0,new G.d("Dog Tier",l,q,r,0))
r=H.a(["Cracked"],s)
q=$.G
l=H.a([$.aM,$.bO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Cracked",l,q,r,0))
r=H.a(["Ruffled"],s)
q=$.G
l=H.a([$.bB,$.bO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ruffled",l,q,r,0))
r=H.a(["Mandrake"],s)
q=$.G
l=H.a([$.b4,$.bc],o)
H.a([],s)
$.$get$b().h(0,new G.d("Mandrake",l,q,r,0))
r=H.a(["Beanstalk"],s)
q=$.G
l=H.a([$.a9,$.b4],o)
H.a([],s)
$.$get$b().h(0,new G.d("Beanstalk",l,q,r,0))
r=H.a(["Unnerving"],s)
q=$.G
l=H.a([$.bc,$.aU],o)
H.a([],s)
$.$get$b().h(0,new G.d("Unnerving",l,q,r,0))
r=H.a(["Chipped"],s)
q=$.G
o=H.a([$.bM,$.bO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Chipped",o,q,r,0))
if($.tw==null){r=$.lN
q=$.b2
o=$.aL
n=$.bd
m=new U.ag(r,"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.","Knucklekniveskind","Claws",!1,P.a3(null,null,null,p),0,3)
m.L("Claws",[q,o,n],"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.",!1,"Knucklekniveskind")
m.e.h(0,r)
$.tw=m}r=$.$get$as();(r&&C.a).sn(r,0)
r=$.$get$as()
q=$.f1
o=$.aL
n=$.C
m=$.b2
l=new U.ag(q,"Can you get more generic than a goddamned sword?","ShogunKindBestKind","Sword",!1,P.a3(null,null,null,p),0,3)
l.L("Sword",[o,n,m],"Can you get more generic than a goddamned sword?",!1,"ShogunKindBestKind")
l.e.h(0,q)
r.push(l)
l=$.$get$as()
r=$.rU
q=$.ai
m=$.C
n=new U.ag(r,"Did you just loot your toolbox or some shit?","WhackySmackySkullCrackyKind","Hammer",!1,P.a3(null,null,null,p),0,3)
n.L("Hammer",[q,m],"Did you just loot your toolbox or some shit?",!1,"WhackySmackySkullCrackyKind")
n.e.h(0,r)
l.push(n)
n=$.$get$as()
l=$.t3
r=$.aZ
m=$.C
q=new U.ag(l,"How the fuck did you get your hands on this?","RootyTootyPointyShootyKind","Rifle",!1,P.a3(null,null,null,p),0,3)
q.L("Rifle",[r,m],"How the fuck did you get your hands on this?",!1,"RootyTootyPointyShootyKind")
q.e.h(0,l)
n.push(q)
q=$.$get$as()
n=$.t_
l=$.aZ
m=$.C
r=new U.ag(n,"Why are guns so underpowered in games like this?","IWon\u2019tHesitateBitchKind","Pistol",!1,P.a3(null,null,null,p),0,3)
r.L("Pistol",[l,m],"Why are guns so underpowered in games like this?",!1,"IWon\u2019tHesitateBitchKind")
r.e.h(0,n)
q.push(r)
r=$.$get$as()
q=$.vy
n=$.aZ
m=$.C
l=new U.ag(q,"There is a 98.23423434% chance that  this. Is my boomstick.","PointBlankAnnihilationKind","Shotgun",!1,P.a3(null,null,null,p),0,3)
l.L("Shotgun",[n,m],"There is a 98.23423434% chance that  this. Is my boomstick.",!1,"PointBlankAnnihilationKind")
l.e.h(0,q)
r.push(l)
l=$.$get$as()
r=$.rJ
q=$.b2
m=$.aL
n=$.C
o=new U.ag(r,"So. It's not a sword. And it's not a dagger. How descriptive.","WaitIsThisBestKind?","Blade",!1,P.a3(null,null,null,p),0,3)
o.L("Blade",[q,m,n],"So. It's not a sword. And it's not a dagger. How descriptive.",!1,"WaitIsThisBestKind?")
o.e.h(0,r)
l.push(o)
o=$.$get$as()
l=$.rO
r=$.b2
n=$.aL
m=$.C
q=new U.ag(l,"For those who can't handle a sword. Or wanna be more stealthy.","ShanksKind","Dagger",!1,P.a3(null,null,null,p),0,3)
q.L("Dagger",[r,n,m],"For those who can't handle a sword. Or wanna be more stealthy.",!1,"ShanksKind")
q.e.h(0,l)
o.push(q)
q=$.$get$as()
o=$.fV
l=$.ai
m=$.bM
n=new U.ag(o,"No. Fuck you. I refuse to believe that this is a weapon.","ThisIsTheDevilKind","Fancysanta",!1,P.a3(null,null,null,p),0,3)
n.L("Fancysanta",[l,m],"No. Fuck you. I refuse to believe that this is a weapon.",!1,"ThisIsTheDevilKind")
n.e.h(0,o)
q.push(n)
n=$.$get$as()
q=$.vB
o=$.aL
m=$.C
l=new U.ag(q,"Do you think it was a pun on sickle cell anemia?","HalfOfCommunismKind","Sickle",!1,P.a3(null,null,null,p),0,3)
l.L("Sickle",[o,m],"Do you think it was a pun on sickle cell anemia?",!1,"HalfOfCommunismKind")
l.e.h(0,q)
n.push(l)
l=$.$get$as()
n=$.v9
q=$.aL
m=$.C
o=new U.ag(n,"Why are fleshbags so scared of slightly deader flesh bags?","TreeGenocideKind","Chainsaw",!1,P.a3(null,null,null,p),0,3)
o.L("Chainsaw",[q,m],"Why are fleshbags so scared of slightly deader flesh bags?",!1,"TreeGenocideKind")
o.e.h(0,n)
l.push(o)
o=$.$get$as()
l=$.vf
n=$.b2
m=$.C
q=new U.ag(l,"It's a fork. Useful for eating, if that's your thing.","ThisIsForFoodKind","Fork",!1,P.a3(null,null,null,p),0,3)
q.L("Fork",[n,m],"It's a fork. Useful for eating, if that's your thing.",!1,"ThisIsForFoodKind")
q.e.h(0,l)
o.push(q)
q=$.$get$as()
o=$.lR
l=$.bB
m=$.be
n=new U.ag(o,"Shit. Better get JR. They'll want to see this.","PsychologyAndExtremeViolenceKind","Pigeon",!1,P.a3(null,null,null,p),0,3)
n.L("Pigeon",[l,m],"Shit. Better get JR. They'll want to see this.",!1,"PsychologyAndExtremeViolenceKind")
n.e.h(0,o)
q.push(n)
n=$.$get$as()
q=$.em
o=$.c9
m=$.aM
l=$.ai
r=new U.ag(q,"Now we're talking. That is some grade A creative use of your storage room right there. ","HardFootballKind","Bowling Ball",!1,P.a3(null,null,null,p),0,3)
r.L("Bowling Ball",[o,m,l],"Now we're talking. That is some grade A creative use of your storage room right there. ",!1,"HardFootballKind")
r.e.h(0,q)
n.push(r)
r=$.$get$as()
n=$.rP
q=$.aT
l=$.bW
m=new U.ag(n,"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.","DnDKind","Dice",!1,P.a3(null,null,null,p),0,3)
m.L("Dice",[q,l],"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.",!1,"DnDKind")
m.e.h(0,n)
r.push(m)
m=$.$get$as()
r=$.rZ
n=$.C
l=$.b2
q=new U.ag(r,"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.","ThisIsForClothesNotCombatKind","Needle",!1,P.a3(null,null,null,p),0,3)
q.L("Needle",[n,l],"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.",!1,"ThisIsForClothesNotCombatKind")
q.e.h(0,r)
m.push(q)
q=$.$get$as()
m=$.vD
r=$.a1
l=$.ai
n=new U.ag(m,"Very magey. 7/10.","ShittyWizardKind","Staff",!1,P.a3(null,null,null,p),0,3)
n.L("Staff",[r,l],"Very magey. 7/10.",!1,"ShittyWizardKind")
n.e.h(0,m)
q.push(n)
n=$.$get$as()
q=$.vF
m=$.bi
l=$.Q
r=new U.ag(q,"Probably p hard to use.","ImKinkshamingKind","Whip",!1,P.a3(null,null,null,p),0,3)
r.L("Whip",[m,l],"Probably p hard to use.",!1,"ImKinkshamingKind")
r.e.h(0,q)
n.push(r)
r=$.$get$as()
n=$.rK
q=$.aZ
l=$.aM
m=$.Q
o=$.b2
k=new U.ag(n,"Your inferior meat body cannot use this to its maximum potential.","ImpossibleToShootYourselfKind","Bow",!1,P.a3(null,null,null,p),0,3)
k.L("Bow",[q,l,m,o],"Your inferior meat body cannot use this to its maximum potential.",!1,"ImpossibleToShootYourselfKind")
k.e.h(0,n)
r.push(k)
k=$.$get$as()
r=$.iJ
n=$.a1
o=$.ai
m=new U.ag(r,"Easy to use even for weak fleshy muscles.","CavemanKind","Club",!1,P.a3(null,null,null,p),0,3)
m.L("Club",[n,o],"Easy to use even for weak fleshy muscles.",!1,"CavemanKind")
m.e.h(0,r)
k.push(m)
m=$.$get$as()
k=$.iH
r=$.a1
o=new U.ag(k,"God damn Wastes, use normal specibi. ","BeatEmDeadAndCleanTheSceneKind","Broom",!1,P.a3(null,null,null,p),0,3)
o.L("Broom",[r,k],"God damn Wastes, use normal specibi. ",!1,"BeatEmDeadAndCleanTheSceneKind")
o.e.h(0,k)
m.push(o)
o=$.$get$as()
m=$.aS
k=$.O
r=$.ai
n=new U.ag(m,"You better fucking hope this is either heavy or magic as fuck.","SharpenTheLeatherBoundKind","Book",!1,P.a3(null,null,null,p),0,3)
n.L("Book",[k,r],"You better fucking hope this is either heavy or magic as fuck.",!1,"SharpenTheLeatherBoundKind")
n.e.h(0,m)
o.push(n)
n=$.$get$as()
o=$.vu
m=$.C
r=$.ai
k=new U.ag(o,"Okay. There's a story here, I just know it.","TheGreatestFuckingWeaponKind","Road Sign",!1,P.a3(null,null,null,p),0,3)
k.L("Road Sign",[m,r],"Okay. There's a story here, I just know it.",!1,"TheGreatestFuckingWeaponKind")
k.e.h(0,o)
n.push(k)
k=$.$get$as()
n=$.rI
o=$.aL
r=$.C
m=$.ai
l=new U.ag(n,"Legit.","TreeMassacreKind","Axe",!1,P.a3(null,null,null,p),0,3)
l.L("Axe",[o,r,m],"Legit.",!1,"TreeMassacreKind")
l.e.h(0,n)
k.push(l)
l=$.$get$as()
k=$.vo
n=$.a1
m=$.b2
r=new U.ag(k,"Good for chest stabs.","UseOnHorsebackKind","Lance",!1,P.a3(null,null,null,p),0,3)
r.L("Lance",[n,m],"Good for chest stabs.",!1,"UseOnHorsebackKind")
r.e.h(0,k)
l.push(r)
r=$.$get$as()
l=$.f0
k=$.C
m=$.ai
n=new U.ag(l,"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.","OnlyWeaklingsNeedShieldsKind","Shield",!1,P.a3(null,null,null,p),0,3)
n.L("Shield",[k,m],"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.",!1,"OnlyWeaklingsNeedShieldsKind")
n.e.h(0,l)
r.push(n)
n=$.$get$as()
r=$.v8
l=$.a1
m=$.ai
k=new U.ag(r,"Good for turning disabilities to strengths.","AnAncientEvilResidesWithinThisKind","Cane",!1,P.a3(null,null,null,p),0,3)
k.L("Cane",[l,m],"Good for turning disabilities to strengths.",!1,"AnAncientEvilResidesWithinThisKind")
k.e.h(0,r)
n.push(k)
k=$.$get$as()
n=$.vG
r=$.aT
m=$.ai
l=new U.ag(n,"It's a yo-yo. Figure it out.","IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind","Yo-Yo",!1,P.a3(null,null,null,p),0,3)
l.L("Yo-Yo",[r,m],"It's a yo-yo. Figure it out.",!1,"IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind")
l.e.h(0,n)
k.push(l)
l=$.$get$as()
k=$.vC
n=$.a1
m=$.aZ
r=new U.ag(k,"What are you gonna use for amo?","IsThisAFuckingJockStrapKind","Sling",!1,P.a3(null,null,null,p),0,3)
r.L("Sling",[n,m],"What are you gonna use for amo?",!1,"IsThisAFuckingJockStrapKind")
r.e.h(0,k)
l.push(r)
r=$.$get$as()
l=$.vA
k=$.C
m=$.aL
n=new U.ag(l,"So edgey.","NarutoKind","Shuriken",!1,P.a3(null,null,null,p),0,3)
n.L("Shuriken",[k,m],"So edgey.",!1,"NarutoKind")
n.e.h(0,l)
r.push(n)
n=$.$get$as()
r=$.rX
l=$.C
m=$.aZ
k=new U.ag(r,"No. SERIOUSLY, where the fuck are all you getting these things.","ITSSOFUCKINGLOUDKIND","Machine Gun",!1,P.a3(null,null,null,p),0,3)
k.L("Machine Gun",[l,m],"No. SERIOUSLY, where the fuck are all you getting these things.",!1,"ITSSOFUCKINGLOUDKIND")
k.e.h(0,r)
n.push(k)
k=$.$get$as()
n=$.lO
r=$.C
m=$.bs
l=new U.ag(n,"Jegus fuck WHY do you HAVE this?","HandheldSunBombKind","Grenade",!1,P.a3(null,null,null,p),0,3)
l.L("Grenade",[r,m],"Jegus fuck WHY do you HAVE this?",!1,"HandheldSunBombKind")
l.e.h(0,n)
k.push(l)
l=$.$get$as()
k=$.em
n=$.ca
m=$.ai
r=new U.ag(k,"...I refuse to believe you have done a single point of damage with this unupgraded. ","HahahBallsKind","Ball",!1,P.a3(null,null,null,p),0,3)
r.L("Ball",[n,m],"...I refuse to believe you have done a single point of damage with this unupgraded. ",!1,"HahahBallsKind")
r.e.h(0,k)
l.push(r)
r=$.$get$as()
l=$.vE
k=$.C
m=$.b2
n=new U.ag(l,"Fuck you, just call it a trident.","SheWasAGoodCharacterDontYouDareSayOtherwiseKind","3dent",!1,P.a3(null,null,null,p),0,3)
n.L("3dent",[k,m],"Fuck you, just call it a trident.",!1,"SheWasAGoodCharacterDontYouDareSayOtherwiseKind")
n.e.h(0,l)
r.push(n)
n=$.$get$as()
r=$.rM
l=$.O
m=$.aL
k=new U.ag(r,"An X-Men fan, I see.","YuGiOhKind","Card",!1,P.a3(null,null,null,p),0,3)
k.L("Card",[l,m],"An X-Men fan, I see.",!1,"YuGiOhKind")
k.e.h(0,r)
n.push(k)
k=$.$get$as()
n=$.rQ
r=$.C
m=$.ai
l=new U.ag(n,"Go with what you know, I guess.","UnstoppableKind","Frying Pan",!1,P.a3(null,null,null,p),0,3)
l.L("Frying Pan",[r,m],"Go with what you know, I guess.",!1,"UnstoppableKind")
l.e.h(0,n)
k.push(l)
l=$.$get$as()
k=$.iK
n=$.bh
m=$.Q
r=new U.ag(k,"So. Do you have to wait for the enemy to fall asleep?","SuffocateYourEnemiesKind","Pillow",!1,P.a3(null,null,null,p),0,3)
r.L("Pillow",[n,m],"So. Do you have to wait for the enemy to fall asleep?",!1,"SuffocateYourEnemiesKind")
r.e.h(0,k)
l.push(r)
r=$.$get$as()
l=$.fU
k=$.C
m=$.bi
n=new U.ag(l,"This could be metal as fuck.","BikerGangKind","Chain",!1,P.a3(null,null,null,p),0,3)
n.L("Chain",[k,m],"This could be metal as fuck.",!1,"BikerGangKind")
n.e.h(0,l)
r.push(n)
n=$.$get$as()
r=$.t5
l=$.C
m=$.ai
k=new U.ag(r,"Hell yes, engineers!","IfYouCanDodgeAWrenchYouCanDodgeABallKind","Wrench",!1,P.a3(null,null,null,p),0,3)
k.L("Wrench",[l,m],"Hell yes, engineers!",!1,"IfYouCanDodgeAWrenchYouCanDodgeABallKind")
k.e.h(0,r)
n.push(k)
k=$.$get$as()
n=$.vz
r=$.C
m=$.ai
l=new U.ag(n,"Dual purpose.","HideTheBodiesKind","Shovel",!1,P.a3(null,null,null,p),0,3)
l.L("Shovel",[r,m],"Dual purpose.",!1,"HideTheBodiesKind")
l.e.h(0,n)
k.push(l)
l=$.$get$as()
k=$.t4
n=$.a1
m=$.ai
r=new U.ag(k,"There is a 99.9999234% chance cartoons lied to you about this being a weapon.","ThereWillBeNoBitchingInMyMotherFuckingKitchenKind","Rolling Pin",!1,P.a3(null,null,null,p),0,3)
r.L("Rolling Pin",[n,m],"There is a 99.9999234% chance cartoons lied to you about this being a weapon.",!1,"ThereWillBeNoBitchingInMyMotherFuckingKitchenKind")
r.e.h(0,k)
l.push(r)
r=$.$get$as()
l=$.t1
k=$.a1
m=$.aR
n=new U.ag(l,"Fuck you for picking this.","KermitsGoneBadKind","Puppet",!1,P.a3(null,null,null,p),0,3)
n.L("Puppet",[k,m],"Fuck you for picking this.",!1,"KermitsGoneBadKind")
n.e.h(0,l)
r.push(n)
n=$.$get$as()
r=$.t2
l=$.C
m=$.aL
k=new U.ag(r,"So fucking edgey.","KermitsGoneBadKind","Razor",!1,P.a3(null,null,null,p),0,3)
k.L("Razor",[l,m],"So fucking edgey.",!1,"KermitsGoneBadKind")
k.e.h(0,r)
n.push(k)
k=$.$get$as()
n=$.lQ
r=$.C
m=$.a0
l=new U.ag(n,"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.","MightierThanTheSwordKind","Pen",!1,P.a3(null,null,null,p),0,3)
l.L("Pen",[r,m],"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.",!1,"MightierThanTheSwordKind")
l.e.h(0,n)
k.push(l)
l=$.$get$as()
k=$.iI
n=$.aM
m=$.c9
r=new U.ag(k,"The meme is strong with this one.","TheShogunsStatuetteKind","Bust",!1,P.a3(null,null,null,p),0,3)
r.L("Bust",[n,m],"The meme is strong with this one.",!1,"TheShogunsStatuetteKind")
r.e.h(0,k)
l.push(r)
r=$.$get$as()
l=$.vh
k=$.a1
m=$.ai
n=new U.ag(l,"Seems legit.","NineIronToTheFuckingSkullKind","Golf Club",!1,P.a3(null,null,null,p),0,3)
n.L("Golf Club",[k,m],"Seems legit.",!1,"NineIronToTheFuckingSkullKind")
n.e.h(0,l)
r.push(n)
n=$.$get$as()
r=$.rW
l=$.C
m=$.aL
k=new U.ag(r,"Don't listen to ABJ, this is NOT a useful weapon.","ShanksButHesAHousewifeKind","Knife",!1,P.a3(null,null,null,p),0,3)
k.L("Knife",[l,m],"Don't listen to ABJ, this is NOT a useful weapon.",!1,"ShanksButHesAHousewifeKind")
k.e.h(0,r)
n.push(k)
k=$.$get$as()
n=$.vx
r=$.C
m=$.aL
l=new U.ag(n,"Either you are a psycho or these are some VERY big fucking scissors.","RunWithTheseKind","Scissors",!1,P.a3(null,null,null,p),0,3)
l.L("Scissors",[r,m],"Either you are a psycho or these are some VERY big fucking scissors.",!1,"RunWithTheseKind")
l.e.h(0,n)
k.push(l)
l=$.$get$as()
k=$.vw
n=$.C
m=$.c9
r=new U.ag(k,"Treat it well or it will never reach Vaulthalla.","TomAndFuckingJerryThemKind","Safe",!1,P.a3(null,null,null,p),0,3)
r.L("Safe",[n,m],"Treat it well or it will never reach Vaulthalla.",!1,"TomAndFuckingJerryThemKind")
r.e.h(0,k)
l.push(r)
r=$.$get$as()
l=$.dw
k=$.a1
m=$.ai
p=new U.ag(l,"Bitches love sticks","WeaponiseTheTreesKind","Stick",!1,P.a3(null,null,null,p),0,3)
p.L("Stick",[k,m],"Bitches love sticks",!1,"WeaponiseTheTreesKind")
p.e.h(0,l)
r.push(p)
p=new S.bx("Duttle","Dut",null,null)
$.$get$bU().push(p)
$.uS=p
p=new S.bx("Salamander","GLUB",null,null)
$.$get$bU().push(p)
$.rz=p
p=new S.bx("Crocodile","NAK",null,null)
$.$get$bU().push(p)
$.e2=p
p=new S.bx("Iguana","thip",null,null)
$.$get$bU().push(p)
$.ei=p
p=new S.bx("Turtle","click",null,null)
$.$get$bU().push(p)
$.eU=p
p=new S.bx("Skeleton","rattle",null,null)
$.$get$bU().push(p)
$.dO=p
p=new S.bx("Robot","BEEP",null,null)
$.$get$bU().push(p)
$.eS=p
p=new S.bx("Chameleon","BLEP",null,null)
$.$get$bU().push(p)
$.ib=p
p=new S.bx("Axolotl","BARP",null,null)
$.$get$bU().push(p)
$.rr=p
p=new S.bx("Lizard","bleb",null,null)
$.$get$bU().push(p)
$.le=p
p=new S.bx("Snake","hiss",null,null)
$.$get$bU().push(p)
$.li=p
p=new S.bx("Alligator","nak",null,null)
$.$get$bU().push(p)
$.ia=p
p=new S.bx("Mole","snuff",null,null)
$.$get$bU().push(p)
$.uT=p
p=new S.bx("Bird","tweet",null,null)
$.$get$bU().push(p)
$.l8=p
p=new S.bx("Wolf","howl",null,null)
$.$get$bU().push(p)
$.lk=p
p=new S.bx("Newt","skitter",null,null)
$.$get$bU().push(p)
$.uU=p
p=new S.bx("Spider","skitter",null,null)
$.$get$bU().push(p)
$.lj=p
p=new S.bx("Cupid","flappa",null,null)
$.$get$bU().push(p)
$.ic=p
p=new S.bx("Dragon","roar",null,null)
$.$get$bU().push(p)
$.eQ=p
p=new S.hW("Prospitian","murmur",null,null)
$.$get$bU().push(p)
$.rw=p
p=new S.hW("Dersite","mutter",null,null)
$.$get$bU().push(p)
$.rv=p
$.uV=H.a([$.li,$.ia,$.uU,$.rz,$.ei,$.e2,$.eU,$.ib,$.rr,$.le],[S.bx])
$.fQ=new T.bZ(0,"spices")
p=$.yI
$.eM=new T.bZ(p,"fresh baked bread")
$.cp=new T.bZ(p,"sweetness")
$.cf=new T.bZ(p,"nature")
$.lh=new T.bZ(0,"salt")
r=$.yH
$.dc=new T.bZ(r,"rot")
$.yF=new T.bZ(r,"feet")
$.eR=new T.bZ(0,"oil")
$.rt=new T.bZ(0,"chlorine")
$.fO=new T.bZ(0,"nothing in particular")
$.eh=new T.bZ(0,"gunpowder")
$.fN=new T.bZ(0,"must")
$.dd=new T.bZ(p,"zoo animals")
$.dP=new T.bZ(r,"sweat")
$.ig=new T.bZ(0,"ozone")
$.cn=new T.bZ(0,"deceit")
$.dr=new T.bZ(r,"blood")
$.eT=new T.bZ(r,"smoke")
$.c8=new K.bL(r,"creepy")
$.ba=new K.bL(p,"calm")
$.cx=new K.bL(r,"frantic")
$.ie=new K.bL(0,"like nothing")
$.co=new K.bL(p,"energizing")
$.cy=new K.bL(0,"studious")
$.db=new K.bL(0,"dangerous")
$.dJ=new K.bL(0,"glamorous")
$.fP=new K.bL(0,"romantic")
$.eP=new K.bL(p,"creative")
$.lf=new K.bL(0,"lucky")
$.dK=new K.bL(0,"happy")
$.dL=new K.bL(0,"heroic")
$.ek=new K.bL(r,"stupid")
$.lf=new K.bL(0,"lucky")
$.uR=new K.bL(0,"claustrophobic")
$.lg=new K.bL(0,"overheated")
$.l9=new K.bL(r,"confusing")
$.cR=new K.bL(0,"contemplatative")
$.cQ=new M.bt(0,"clanking")
$.cS=new M.bt(0,"laughing")
$.bl=new M.bt(p,"rustling")
$.ej=new M.bt(r,"screaming")
$.lc=new M.bt(r,"foot steps")
$.eN=new M.bt(r,"beeping")
$.rB=new M.bt(r,"whispering")
$.eO=new M.bt(0,"clacking")
$.cF=new M.bt(0,"applause")
$.e3=new M.bt(0,"jazz")
$.la=new M.bt(0,"disco")
$.id=new M.bt(0,"drums")
$.lb=new M.bt(0,"echoing")
$.ry=new M.bt(r,"roaring")
$.ld=new M.bt(r,"gunfire")
$.cC=new M.bt(0,"music")
$.rA=new M.bt(0,"singing")
$.rs=new M.bt(0,"chanting")
$.eV=new M.bt(0,"whistling")
$.dM=new M.bt(p,"nature")
$.ru=new M.bt(0,"croaking")
$.dN=new M.bt(0,"silence")
$.rx=new M.bt(0,"pulsing")
$.uW=new M.bt(0,"ticking")
r=[X.E,P.T]
q=A.a4
p=E.L
o=[p]
n=[A.d0]
m=new S.m6(0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,0.5,"Knight",new H.q(0,null,null,null,null,null,0,r),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.ab("Knight",3,!0,!1)
$.EM=m
m=P.f(H.a([new E.L($.ci,0.4,!1)],o),p)
m=new S.nt(["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,m,0.5,"Seer",new H.q(0,null,null,null,null,null,0,r),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.ab("Seer",6,!0,!1)
$.EX=m
m=new O.kb(["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],!1,!1,!1,!1,!0,!1,0.5,"Bard",new H.q(0,null,null,null,null,null,0,r),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.ab("Bard",9,!0,!1)
$.EH=m
m=new B.lz(0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,0.5,"Heir",new H.q(0,null,null,null,null,null,0,r),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.ab("Heir",8,!0,!1)
$.EL=m
m=new U.mn(["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,0.5,"Maid",new H.q(0,null,null,null,null,null,0,r),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.ab("Maid",0,!0,!1)
$.EP=m
m=new N.ni(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,0.5,"Rogue",new H.q(0,null,null,null,null,null,0,r),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.ab("Rogue",4,!0,!1)
$.ET=m
m=new V.mV(0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,0.5,"Page",new H.q(0,null,null,null,null,null,0,r),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.ab("Page",1,!0,!1)
$.ER=m
m=new U.oo(["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,0.5,"Thief",new H.q(0,null,null,null,null,null,0,r),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.ab("Thief",7,!0,!1)
$.EZ=m
m=P.f(H.a([new E.L($.ci,0.1,!1)],o),p)
m=new R.oe(["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,m,0.5,"Sylph",new H.q(0,null,null,null,null,null,0,r),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.ab("Sylph",5,!0,!1)
$.EY=m
m=new N.n6(1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,0.5,"Prince",new H.q(0,null,null,null,null,null,0,r),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.ab("Prince",10,!0,!1)
$.ES=m
m=P.f(H.a([new E.L($.ci,0.1,!1)],o),p)
m=new M.oP(["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,m,0.5,"Witch",new H.q(0,null,null,null,null,null,0,r),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.ab("Witch",11,!0,!1)
$.w7=m
m=P.f(H.a([new E.L($.ci,0.4,!1)],o),p)
m=new S.mm(["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,m,0.5,"Mage",new H.q(0,null,null,null,null,null,0,r),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.ab("Mage",2,!0,!1)
$.EO=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],s)
l=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],s)
k=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],s)
j=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],s)
i=P.f(H.a([new E.L($.ci,3,!1),new E.L($.tx,-2,!1)],o),p)
m=new E.oI(m,l,k,j,!1,!0,!1,!1,!0,!1,i,0.5,"Waste",new H.q(0,null,null,null,null,null,0,r),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.ab("Waste",12,!1,!1)
$.w6=m
m=new Y.nq(["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,0.5,"Scout",new H.q(0,null,null,null,null,null,0,r),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.ab("Scout",13,!1,!1)
$.EV=m
m=P.f(H.a([new E.L($.ci,0.5,!1)],o),p)
m=new L.nr(["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,m,0.5,"Scribe",new H.q(0,null,null,null,null,null,0,r),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.ab("Scribe",15,!1,!1)
$.EW=m
m=P.f(H.a([new E.L($.ci,0.5,!1)],o),p)
m=new E.no(["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,m,0.5,"Sage",new H.q(0,null,null,null,null,null,0,r),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.ab("Sage",14,!1,!1)
$.EU=m
m=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],s)
m=new Y.lw(m,!0,!1,!1,!1,!1,!0,0.5,"Guide",new H.q(0,null,null,null,null,null,0,r),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.ab("Guide",16,!1,!1)
$.EK=m
m=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],s)
l=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],s)
k=P.f(H.a([new E.L($.ci,3,!1)],o),p)
m=new Y.lu(m,l,!1,!0,!1,!1,!0,!1,k,0.5,"Grace",new H.q(0,null,null,null,null,null,0,r),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.ab("Grace",17,!1,!1)
$.EJ=m
m=P.f(H.a([new E.L($.ci,0.1,!1)],o),p)
m=new E.mB(["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,m,0.5,"Muse",new H.q(0,null,null,null,null,null,0,r),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.ab("Muse",18,!1,!1)
$.EQ=m
m=Q.F(null,null,q)
l=P.f(H.a([new E.L($.ci,0.1,!1)],o),p)
m=new Z.ml(2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,m,l,0.5,"Lord",new H.q(0,null,null,null,null,null,0,r),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.ab("Lord",19,!1,!1)
$.EN=m
$.w5=T.EG("Null",255,!1,!0)
m=P.f(H.a([new E.L($.ci,1.5,!1),new E.L($.u,3,!1),new E.L($.cc,-0.5,!1)],o),p)
m=new Z.kk(["BROBLERONE","BROTEL RWANDA","BRO-YO MA"],["busting out, and I quote, 'the mad stunts all wicked up-ins'","trying to get hella pumped about houses or some noise","getting mud on their doll's dress or whatever"],["not actually playing the game, but giving it 1.5 out of 5 hats to keep it real","giving a shout out to their boy Dennis who was over the other day","helping their consorts live off the land, for big ups to Mother Earth, yo","getting so wasted. haha, I mean DAMN"],!1,!1,!1,!0,!0,!1,["Brother","Bored","Bugger","Badass","Bothersome"],m,0.1,2,0.5,"Bro",new H.q(0,null,null,null,null,null,0,r),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.ab("Bro",20,!1,!1)
$.EI=m
m=A.cP
l=P.N
k=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
k.j(0,$.at,L.e("#00ff00"),!0)
k.j(0,$.aw,L.e("#EFEFEF"),!0)
k.j(0,$.av,L.e("#DEDEDE"),!0)
k.j(0,$.aG,L.e("#FF2106"),!0)
k.j(0,$.aF,L.e("#B01200"),!0)
k.j(0,$.ay,L.e("#2F2F30"),!0)
k.j(0,$.az,L.e("#1D1D1D"),!0)
k.j(0,$.ax,L.e("#080808"),!0)
k.j(0,$.aD,L.e("#030303"),!0)
k.j(0,$.aC,L.e("#242424"),!0)
k.j(0,$.aB,L.e("#333333"),!0)
k.j(0,$.aA,L.e("#141414"),!0)
j=P.f(H.a(["Frogs"],s),t)
i=P.f(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],s),t)
h=P.f(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],s),t)
g=P.f(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],s),t)
f=P.f(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],s),t)
e=P.f(H.a([new E.L($.d4,2,!0),new E.L($.al,1,!0),new E.L($.aX,-2,!0)],o),p)
d=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
d.j(0,$.at,L.e("#FF9B00"),!0)
d.j(0,$.aw,L.e("#FF9B00"),!0)
d.j(0,$.av,L.e("#FF8700"),!0)
d.j(0,$.aG,L.e("#7F7F7F"),!0)
d.j(0,$.aF,L.e("#727272"),!0)
d.j(0,$.ay,L.e("#A3A3A3"),!0)
d.j(0,$.az,L.e("#999999"),!0)
d.j(0,$.ax,L.e("#898989"),!0)
d.j(0,$.aD,L.e("#EFEFEF"),!0)
d.j(0,$.aC,L.e("#DBDBDB"),!0)
d.j(0,$.aB,L.e("#C6C6C6"),!0)
d.j(0,$.aA,L.e("#ADADAD"),!0)
d=new N.nK(k,j,i,h,g,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],e,0.5,0,new H.q(0,null,null,null,null,null,0,r),null,"","",!1,"Space",null,!0,!1,!1,!1,!0,1,d,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.F(null,null,q))
d.a1(0,"Space",!0,!1)
$.k3=d
d=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
d.j(0,$.at,L.e("#ff0000"),!0)
d.j(0,$.aw,L.e("#FF2106"),!0)
d.j(0,$.av,L.e("#AD1604"),!0)
d.j(0,$.aG,L.e("#030303"),!0)
d.j(0,$.aF,L.e("#242424"),!0)
d.j(0,$.ay,L.e("#510606"),!0)
d.j(0,$.az,L.e("#3C0404"),!0)
d.j(0,$.ax,L.e("#1F0000"),!0)
d.j(0,$.aD,L.e("#B70D0E"),!0)
d.j(0,$.aC,L.e("#970203"),!0)
d.j(0,$.aB,L.e("#8E1516"),!0)
d.j(0,$.aA,L.e("#640707"),!0)
e=P.f(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],s),t)
f=P.f(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],s),t)
g=P.f(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],s),t)
h=P.f(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],s),t)
i=P.f(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],s),t)
j=P.f(H.a([new E.L($.c5,2,!0),new E.L($.aX,1,!0),new E.L($.bu,-2,!0)],o),p)
k=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
k.j(0,$.at,L.e("#FF9B00"),!0)
k.j(0,$.aw,L.e("#FF9B00"),!0)
k.j(0,$.av,L.e("#FF8700"),!0)
k.j(0,$.aG,L.e("#7F7F7F"),!0)
k.j(0,$.aF,L.e("#727272"),!0)
k.j(0,$.ay,L.e("#A3A3A3"),!0)
k.j(0,$.az,L.e("#999999"),!0)
k.j(0,$.ax,L.e("#898989"),!0)
k.j(0,$.aD,L.e("#EFEFEF"),!0)
k.j(0,$.aC,L.e("#DBDBDB"),!0)
k.j(0,$.aB,L.e("#C6C6C6"),!0)
k.j(0,$.aA,L.e("#ADADAD"),!0)
k=new N.op(0.7,d,e,f,g,h,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",i,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],j,0.5,1,new H.q(0,null,null,null,null,null,0,r),null,"","",!1,"Time",null,!0,!1,!1,!1,!0,1,k,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.F(null,null,q))
k.a1(1,"Time",!0,!1)
$.ut=k
k=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
k.j(0,$.at,L.e("#3399ff"),!0)
k.j(0,$.aw,L.e("#10E0FF"),!0)
k.j(0,$.av,L.e("#00A4BB"),!0)
k.j(0,$.aG,L.e("#FEFD49"),!0)
k.j(0,$.aF,L.e("#D6D601"),!0)
k.j(0,$.ay,L.e("#0052F3"),!0)
k.j(0,$.az,L.e("#0046D1"),!0)
k.j(0,$.ax,L.e("#003396"),!0)
k.j(0,$.aD,L.e("#0087EB"),!0)
k.j(0,$.aC,L.e("#0070ED"),!0)
k.j(0,$.aB,L.e("#006BE1"),!0)
k.j(0,$.aA,L.e("#0054B0"),!0)
j=P.f(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],s),t)
i=P.f(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],s),t)
h=P.f(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],s),t)
g=P.f(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],s),t)
f=P.f(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],t)
e=P.f(H.a([new E.L($.aX,2,!0),new E.L($.aY,1,!0),new E.L($.al,-1,!0),new E.L($.cc,-1,!0),new E.L($.ci,0.05,!1)],o),p)
d=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
d.j(0,$.at,L.e("#FF9B00"),!0)
d.j(0,$.aw,L.e("#FF9B00"),!0)
d.j(0,$.av,L.e("#FF8700"),!0)
d.j(0,$.aG,L.e("#7F7F7F"),!0)
d.j(0,$.aF,L.e("#727272"),!0)
d.j(0,$.ay,L.e("#A3A3A3"),!0)
d.j(0,$.az,L.e("#999999"),!0)
d.j(0,$.ax,L.e("#898989"),!0)
d.j(0,$.aD,L.e("#EFEFEF"),!0)
d.j(0,$.aC,L.e("#DBDBDB"),!0)
d.j(0,$.aB,L.e("#C6C6C6"),!0)
d.j(0,$.aA,L.e("#ADADAD"),!0)
d=new T.kj(0.3,k,j,i,h,g,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],f,e,0.5,2,new H.q(0,null,null,null,null,null,0,r),null,"","",!1,"Breath",null,!0,!1,!1,!1,!0,1,d,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.F(null,null,q))
d.a1(2,"Breath",!0,!1)
$.y2=d
d=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
d.j(0,$.at,L.e("#003300"),!0)
d.j(0,$.aw,L.e("#0F0F0F"),!0)
d.j(0,$.av,L.e("#010101"),!0)
d.j(0,$.aG,L.e("#E8C15E"),!0)
d.j(0,$.aF,L.e("#C7A140"),!0)
d.j(0,$.ay,L.e("#1E211E"),!0)
d.j(0,$.az,L.e("#141614"),!0)
d.j(0,$.ax,L.e("#0B0D0B"),!0)
d.j(0,$.aD,L.e("#204020"),!0)
d.j(0,$.aC,L.e("#11200F"),!0)
d.j(0,$.aB,L.e("#192C16"),!0)
d.j(0,$.aA,L.e("#121F10"),!0)
e=P.f(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],s),t)
f=P.f(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],s),t)
g=P.f(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],s),t)
h=P.f(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],s),t)
i=P.f(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],s),t)
j=P.f(H.a([new E.L($.d4,2,!0),new E.L($.bu,1,!0),new E.L($.c5,-1,!0),new E.L($.al,-1,!0),new E.L($.ci,0.01,!1)],o),p)
k=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
k.j(0,$.at,L.e("#FF9B00"),!0)
k.j(0,$.aw,L.e("#FF9B00"),!0)
k.j(0,$.av,L.e("#FF8700"),!0)
k.j(0,$.aG,L.e("#7F7F7F"),!0)
k.j(0,$.aF,L.e("#727272"),!0)
k.j(0,$.ay,L.e("#A3A3A3"),!0)
k.j(0,$.az,L.e("#999999"),!0)
k.j(0,$.ax,L.e("#898989"),!0)
k.j(0,$.aD,L.e("#EFEFEF"),!0)
k.j(0,$.aC,L.e("#DBDBDB"),!0)
k.j(0,$.aB,L.e("#C6C6C6"),!0)
k.j(0,$.aA,L.e("#ADADAD"),!0)
k=new U.kD(1,d,e,f,g,h,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,i,j,0.5,3,new H.q(0,null,null,null,null,null,0,r),null,"","",!1,"Doom",null,!0,!1,!1,!1,!0,1,k,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.F(null,null,q))
k.a1(3,"Doom",!0,!1)
$.ur=k
k=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
k.j(0,$.at,L.e("#993300"),!0)
k.j(0,$.aw,L.e("#BA1016"),!0)
k.j(0,$.av,L.e("#820B0F"),!0)
k.j(0,$.aG,L.e("#381B76"),!0)
k.j(0,$.aF,L.e("#1E0C47"),!0)
k.j(0,$.ay,L.e("#290704"),!0)
k.j(0,$.az,L.e("#230200"),!0)
k.j(0,$.ax,L.e("#110000"),!0)
k.j(0,$.aD,L.e("#3D190A"),!0)
k.j(0,$.aC,L.e("#2C1207"),!0)
k.j(0,$.aB,L.e("#5C2913"),!0)
k.j(0,$.aA,L.e("#4C1F0D"),!0)
j=P.f(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],s),t)
i=P.f(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],s),t)
h=P.f(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],s),t)
g=P.f(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],s),t)
f=P.f(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],s),t)
e=P.f(H.a([new E.L($.cc,2,!0),new E.L($.aY,1,!0),new E.L($.d4,-2,!0)],o),p)
d=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
d.j(0,$.at,L.e("#FF9B00"),!0)
d.j(0,$.aw,L.e("#FF9B00"),!0)
d.j(0,$.av,L.e("#FF8700"),!0)
d.j(0,$.aG,L.e("#7F7F7F"),!0)
d.j(0,$.aF,L.e("#727272"),!0)
d.j(0,$.ay,L.e("#A3A3A3"),!0)
d.j(0,$.az,L.e("#999999"),!0)
d.j(0,$.ax,L.e("#898989"),!0)
d.j(0,$.aD,L.e("#EFEFEF"),!0)
d.j(0,$.aC,L.e("#DBDBDB"),!0)
d.j(0,$.aB,L.e("#C6C6C6"),!0)
d.j(0,$.aA,L.e("#ADADAD"),!0)
d=new T.kh(0,k,j,i,h,g,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","tie","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],f,e,0.5,4,new H.q(0,null,null,null,null,null,0,r),null,"","",!1,"Blood",null,!0,!1,!1,!1,!0,1,d,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.F(null,null,q))
d.a1(4,"Blood",!0,!1)
$.uq=d
d=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
d.j(0,$.at,L.e("#ff3399"),!0)
d.j(0,$.aw,L.e("#BD1864"),!0)
d.j(0,$.av,L.e("#780F3F"),!0)
d.j(0,$.aG,L.e("#1D572E"),!0)
d.j(0,$.aF,L.e("#11371D"),!0)
d.j(0,$.ay,L.e("#4C1026"),!0)
d.j(0,$.az,L.e("#3C0D1F"),!0)
d.j(0,$.ax,L.e("#260914"),!0)
d.j(0,$.aD,L.e("#6B0829"),!0)
d.j(0,$.aC,L.e("#4A0818"),!0)
d.j(0,$.aB,L.e("#55142A"),!0)
d.j(0,$.aA,L.e("#3D0E1E"),!0)
e=P.f(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],s),t)
f=P.f(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],s),t)
g=P.f(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],s),t)
h=P.f(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],s),t)
i=P.f(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],s),t)
j=P.f(H.a([new E.L($.cc,1,!0),new E.k7(null,1,!0)],o),p)
k=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
k.j(0,$.at,L.e("#FF9B00"),!0)
k.j(0,$.aw,L.e("#FF9B00"),!0)
k.j(0,$.av,L.e("#FF8700"),!0)
k.j(0,$.aG,L.e("#7F7F7F"),!0)
k.j(0,$.aF,L.e("#727272"),!0)
k.j(0,$.ay,L.e("#A3A3A3"),!0)
k.j(0,$.az,L.e("#999999"),!0)
k.j(0,$.ax,L.e("#898989"),!0)
k.j(0,$.aD,L.e("#EFEFEF"),!0)
k.j(0,$.aC,L.e("#DBDBDB"),!0)
k.j(0,$.aB,L.e("#C6C6C6"),!0)
k.j(0,$.aA,L.e("#ADADAD"),!0)
k=new T.ly(d,e,f,g,h,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,i,j,0.5,5,new H.q(0,null,null,null,null,null,0,r),null,"","",!1,"Heart",null,!0,!1,!1,!1,!0,1,k,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.F(null,null,q))
k.a1(5,"Heart",!0,!1)
$.y6=k
k=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
k.j(0,$.at,L.e("#3da35a"),!0)
k.j(0,$.aw,L.e("#06FFC9"),!0)
k.j(0,$.av,L.e("#04A885"),!0)
k.j(0,$.aG,L.e("#6E0E2E"),!0)
k.j(0,$.aF,L.e("#4A0818"),!0)
k.j(0,$.ay,L.e("#1D572E"),!0)
k.j(0,$.az,L.e("#164524"),!0)
k.j(0,$.ax,L.e("#11371D"),!0)
k.j(0,$.aD,L.e("#3DA35A"),!0)
k.j(0,$.aC,L.e("#2E7A43"),!0)
k.j(0,$.aB,L.e("#3B7E4F"),!0)
k.j(0,$.aA,L.e("#265133"),!0)
j=P.f(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],s),t)
i=P.f(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],s),t)
h=P.f(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],s),t)
g=P.f(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],s),t)
f=P.f(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],s),t)
e=P.f(H.a([new E.L($.bu,2,!0),new E.L($.c5,1,!0),new E.L($.d4,-2,!0)],o),p)
d=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
d.j(0,$.at,L.e("#FF9B00"),!0)
d.j(0,$.aw,L.e("#FF9B00"),!0)
d.j(0,$.av,L.e("#FF8700"),!0)
d.j(0,$.aG,L.e("#7F7F7F"),!0)
d.j(0,$.aF,L.e("#727272"),!0)
d.j(0,$.ay,L.e("#A3A3A3"),!0)
d.j(0,$.az,L.e("#999999"),!0)
d.j(0,$.ax,L.e("#898989"),!0)
d.j(0,$.aD,L.e("#EFEFEF"),!0)
d.j(0,$.aC,L.e("#DBDBDB"),!0)
d.j(0,$.aB,L.e("#C6C6C6"),!0)
d.j(0,$.aA,L.e("#ADADAD"),!0)
d=new V.mz(k,j,i,h,g,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],e,0.5,6,new H.q(0,null,null,null,null,null,0,r),null,"","",!1,"Mind",null,!0,!1,!1,!1,!0,1,d,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.F(null,null,q))
d.a1(6,"Mind",!0,!1)
$.yb=d
d=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
d.j(0,$.at,L.e("#ff9933"),!0)
d.j(0,$.aw,L.e("#FEFD49"),!0)
d.j(0,$.av,L.e("#FEC910"),!0)
d.j(0,$.aG,L.e("#10E0FF"),!0)
d.j(0,$.aF,L.e("#00A4BB"),!0)
d.j(0,$.ay,L.e("#FA4900"),!0)
d.j(0,$.az,L.e("#E94200"),!0)
d.j(0,$.ax,L.e("#C33700"),!0)
d.j(0,$.aD,L.e("#FF8800"),!0)
d.j(0,$.aC,L.e("#D66E04"),!0)
d.j(0,$.aB,L.e("#E76700"),!0)
d.j(0,$.aA,L.e("#CA5B00"),!0)
e=P.f(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],s),t)
f=P.f(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],s),t)
g=P.f(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],s),t)
h=P.f(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],s),t)
i=P.f(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],s),t)
j=P.f(H.a([new E.L($.bE,2,!0),new E.L($.bu,1,!0),new E.L($.aY,-1,!0),new E.L($.al,-1,!0),new E.L($.ci,0.2,!1)],o),p)
k=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
k.j(0,$.at,L.e("#FF9B00"),!0)
k.j(0,$.aw,L.e("#FF9B00"),!0)
k.j(0,$.av,L.e("#FF8700"),!0)
k.j(0,$.aG,L.e("#7F7F7F"),!0)
k.j(0,$.aF,L.e("#727272"),!0)
k.j(0,$.ay,L.e("#A3A3A3"),!0)
k.j(0,$.az,L.e("#999999"),!0)
k.j(0,$.ax,L.e("#898989"),!0)
k.j(0,$.aD,L.e("#EFEFEF"),!0)
k.j(0,$.aC,L.e("#DBDBDB"),!0)
k.j(0,$.aB,L.e("#C6C6C6"),!0)
k.j(0,$.aA,L.e("#ADADAD"),!0)
k=new G.mf(d,e,f,g,h,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",i,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],j,0.5,7,new H.q(0,null,null,null,null,null,0,r),null,"","",!1,"Light",null,!0,!1,!1,!1,!0,1,k,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.F(null,null,q))
k.a1(7,"Light",!0,!1)
$.us=k
k=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
k.j(0,$.at,L.e("#000066"),!0)
k.j(0,$.aw,L.e("#0B1030"),!0)
k.j(0,$.av,L.e("#04091A"),!0)
k.j(0,$.aG,L.e("#CCC4B5"),!0)
k.j(0,$.aF,L.e("#A89F8D"),!0)
k.j(0,$.ay,L.e("#00164F"),!0)
k.j(0,$.az,L.e("#00103C"),!0)
k.j(0,$.ax,L.e("#00071A"),!0)
k.j(0,$.aD,L.e("#033476"),!0)
k.j(0,$.aC,L.e("#02285B"),!0)
k.j(0,$.aB,L.e("#004CB2"),!0)
k.j(0,$.aA,L.e("#003E91"),!0)
j=P.f(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],s),t)
i=P.f(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],s),t)
h=P.f(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],s),t)
g=P.f(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],s),t)
f=P.f(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],s),t)
e=P.f(H.a([new E.fD(D.ty(),null,3,!0),new E.fD(D.ty(),null,-1,!0),new E.L($.c5,-1,!0),new E.L($.ci,0.2,!1)],o),p)
d=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
d.j(0,$.at,L.e("#FF9B00"),!0)
d.j(0,$.aw,L.e("#FF9B00"),!0)
d.j(0,$.av,L.e("#FF8700"),!0)
d.j(0,$.aG,L.e("#7F7F7F"),!0)
d.j(0,$.aF,L.e("#727272"),!0)
d.j(0,$.ay,L.e("#A3A3A3"),!0)
d.j(0,$.az,L.e("#999999"),!0)
d.j(0,$.ax,L.e("#898989"),!0)
d.j(0,$.aD,L.e("#EFEFEF"),!0)
d.j(0,$.aC,L.e("#DBDBDB"),!0)
d.j(0,$.aB,L.e("#C6C6C6"),!0)
d.j(0,$.aA,L.e("#ADADAD"),!0)
d=new Q.oH(k,j,i,h,g,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],e,0.5,8,new H.q(0,null,null,null,null,null,0,r),null,"","",!1,"Void",null,!0,!1,!1,!1,!0,1,d,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.F(null,null,q))
d.a1(8,"Void",!0,!1)
$.uu=d
d=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
d.j(0,$.at,L.e("#9900cc"),!0)
d.j(0,$.aw,L.e("#974AA7"),!0)
d.j(0,$.av,L.e("#6B347D"),!0)
d.j(0,$.aG,L.e("#3D190A"),!0)
d.j(0,$.aF,L.e("#2C1207"),!0)
d.j(0,$.ay,L.e("#7C3FBA"),!0)
d.j(0,$.az,L.e("#6D34A6"),!0)
d.j(0,$.ax,L.e("#592D86"),!0)
d.j(0,$.aD,L.e("#381B76"),!0)
d.j(0,$.aC,L.e("#1E0C47"),!0)
d.j(0,$.aB,L.e("#281D36"),!0)
d.j(0,$.aA,L.e("#1D1526"),!0)
e=P.f(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],s),t)
f=P.f(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],s),t)
g=P.f(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],s),t)
h=P.f(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],s),t)
i=P.f(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],s),t)
j=P.f(H.a([new E.L($.u,2,!0),new E.L($.aX,1,!0),new E.L($.aY,-1,!0),new E.L($.cc,-1,!0),new E.L($.ci,0.01,!1)],o),p)
k=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
k.j(0,$.at,L.e("#FF9B00"),!0)
k.j(0,$.aw,L.e("#FF9B00"),!0)
k.j(0,$.av,L.e("#FF8700"),!0)
k.j(0,$.aG,L.e("#7F7F7F"),!0)
k.j(0,$.aF,L.e("#727272"),!0)
k.j(0,$.ay,L.e("#A3A3A3"),!0)
k.j(0,$.az,L.e("#999999"),!0)
k.j(0,$.ax,L.e("#898989"),!0)
k.j(0,$.aD,L.e("#EFEFEF"),!0)
k.j(0,$.aC,L.e("#DBDBDB"),!0)
k.j(0,$.aB,L.e("#C6C6C6"),!0)
k.j(0,$.aA,L.e("#ADADAD"),!0)
k=new E.n9(d,e,f,g,h," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",i,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],j,0.5,9,new H.q(0,null,null,null,null,null,0,r),null,"","",!1,"Rage",null,!0,!1,!1,!1,!0,1,k,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.F(null,null,q))
k.a1(9,"Rage",!0,!1)
$.ye=k
k=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
k.j(0,$.at,L.e("#ffcc66"),!0)
k.j(0,$.aw,L.e("#FDF9EC"),!0)
k.j(0,$.av,L.e("#D6C794"),!0)
k.j(0,$.aG,L.e("#164524"),!0)
k.j(0,$.aF,L.e("#06280C"),!0)
k.j(0,$.ay,L.e("#FFC331"),!0)
k.j(0,$.az,L.e("#F7BB2C"),!0)
k.j(0,$.ax,L.e("#DBA523"),!0)
k.j(0,$.aD,L.e("#FFE094"),!0)
k.j(0,$.aC,L.e("#E8C15E"),!0)
k.j(0,$.aB,L.e("#F6C54A"),!0)
k.j(0,$.aA,L.e("#EDAF0C"),!0)
j=P.f(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],s),t)
i=P.f(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],s),t)
h=P.f(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],s),t)
g=P.f(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],s),t)
f=P.f(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],s),t)
e=P.f(H.a([new E.L($.aY,2,!0),new E.L($.bE,1,!0),new E.fD(D.ty(),null,-2,!0)],o),p)
d=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
d.j(0,$.at,L.e("#FF9B00"),!0)
d.j(0,$.aw,L.e("#FF9B00"),!0)
d.j(0,$.av,L.e("#FF8700"),!0)
d.j(0,$.aG,L.e("#7F7F7F"),!0)
d.j(0,$.aF,L.e("#727272"),!0)
d.j(0,$.ay,L.e("#A3A3A3"),!0)
d.j(0,$.az,L.e("#999999"),!0)
d.j(0,$.ax,L.e("#898989"),!0)
d.j(0,$.aD,L.e("#EFEFEF"),!0)
d.j(0,$.aC,L.e("#DBDBDB"),!0)
d.j(0,$.aB,L.e("#C6C6C6"),!0)
d.j(0,$.aA,L.e("#ADADAD"),!0)
d=new X.lA(k,j,i,h,g,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],f,e,0.5,10,new H.q(0,null,null,null,null,null,0,r),null,"","",!1,"Hope",null,!0,!1,!1,!1,!0,1,d,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.F(null,null,q))
d.a1(10,"Hope",!0,!1)
$.y7=d
d=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
d.j(0,$.at,L.e("#494132"),!0)
d.j(0,$.aw,L.e("#76C34E"),!0)
d.j(0,$.av,L.e("#4F8234"),!0)
d.j(0,$.aG,L.e("#00164F"),!0)
d.j(0,$.aF,L.e("#00071A"),!0)
d.j(0,$.ay,L.e("#605542"),!0)
d.j(0,$.az,L.e("#494132"),!0)
d.j(0,$.ax,L.e("#2D271E"),!0)
d.j(0,$.aD,L.e("#CCC4B5"),!0)
d.j(0,$.aC,L.e("#A89F8D"),!0)
d.j(0,$.aB,L.e("#A29989"),!0)
d.j(0,$.aA,L.e("#918673"),!0)
e=P.f(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],s),t)
f=P.f(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],s),t)
g=P.f(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],s),t)
h=P.f(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],s),t)
i=P.f(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],s),t)
j=P.f(H.a([new E.L($.al,2,!0),new E.L($.u,1,!0),new E.L($.d4,-2,!0)],o),p)
k=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
k.j(0,$.at,L.e("#FF9B00"),!0)
k.j(0,$.aw,L.e("#FF9B00"),!0)
k.j(0,$.av,L.e("#FF8700"),!0)
k.j(0,$.aG,L.e("#7F7F7F"),!0)
k.j(0,$.aF,L.e("#727272"),!0)
k.j(0,$.ay,L.e("#A3A3A3"),!0)
k.j(0,$.az,L.e("#999999"),!0)
k.j(0,$.ax,L.e("#898989"),!0)
k.j(0,$.aD,L.e("#EFEFEF"),!0)
k.j(0,$.aC,L.e("#DBDBDB"),!0)
k.j(0,$.aB,L.e("#C6C6C6"),!0)
k.j(0,$.aA,L.e("#ADADAD"),!0)
k=new K.me(d,e,f,g,h,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],i,j,0.5,11,new H.q(0,null,null,null,null,null,0,r),null,"","",!1,"Life",null,!0,!1,!1,!1,!0,1,k,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.F(null,null,q))
k.a1(11,"Life",!0,!1)
$.y9=k
k=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
k.j(0,$.at,L.e("#9630BF"),!0)
k.j(0,$.aw,L.e("#cc87e8"),!0)
k.j(0,$.av,L.e("#9545b7"),!0)
k.j(0,$.aG,L.e("#ae769b"),!0)
k.j(0,$.aF,L.e("#8f577c"),!0)
k.j(0,$.ay,L.e("#9630bf"),!0)
k.j(0,$.az,L.e("#693773"),!0)
k.j(0,$.ax,L.e("#4c2154"),!0)
k.j(0,$.aD,L.e("#fcf9bd"),!0)
k.j(0,$.aC,L.e("#e0d29e"),!0)
k.j(0,$.aB,L.e("#bdb968"),!0)
k.j(0,$.aA,L.e("#ab9b55"),!0)
j=P.f(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],s),t)
i=P.f(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],s),t)
h=P.f(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],s),t)
g=P.f(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],s),t)
f=P.f(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],s),t)
e=P.f(H.a([new E.L($.d4,3,!0),new E.L($.aY,-2,!0)],o),p)
d=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
d.j(0,$.at,L.e("#FF9B00"),!0)
d.j(0,$.aw,L.e("#FF9B00"),!0)
d.j(0,$.av,L.e("#FF8700"),!0)
d.j(0,$.aG,L.e("#7F7F7F"),!0)
d.j(0,$.aF,L.e("#727272"),!0)
d.j(0,$.ay,L.e("#A3A3A3"),!0)
d.j(0,$.az,L.e("#999999"),!0)
d.j(0,$.ax,L.e("#898989"),!0)
d.j(0,$.aD,L.e("#EFEFEF"),!0)
d.j(0,$.aC,L.e("#DBDBDB"),!0)
d.j(0,$.aB,L.e("#C6C6C6"),!0)
d.j(0,$.aA,L.e("#ADADAD"),!0)
d=new Z.kE(k,j,i,h,g,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,f,e,0.5,12,new H.q(0,null,null,null,null,null,0,r),null,"","",!1,"Dream",null,!1,!1,!1,!1,!0,1,d,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.F(null,null,q))
d.a1(12,"Dream",!1,!1)
$.y3=d
$.yd=L.y1(255,"Null",!1,!1)
d=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
d.j(0,$.at,L.e("#364447"),!0)
d.j(0,$.aw,L.e("#28517b"),!0)
d.j(0,$.av,L.e("#143D67"),!0)
d.j(0,$.aG,L.e("#E7D7A0"),!0)
d.j(0,$.aF,L.e("#D6A482"),!0)
d.j(0,$.ay,L.e("#A9D5DF"),!0)
d.j(0,$.az,L.e("#95c1cb"),!0)
d.j(0,$.ax,L.e("#77a3ad"),!0)
d.j(0,$.aD,L.e("#162E33"),!0)
d.j(0,$.aC,L.e("#11292e"),!0)
d.j(0,$.aB,L.e("#021a1f"),!0)
d.j(0,$.aA,L.e("#021015"),!0)
e=P.f(H.a(["Waves","Ocean","Gyms","Pillars","Force","Rocks","Stability","Cliffs","Strength","Surf"],s),t)
f=P.f(H.a(["STANDALONE STRONGMAN","EMPOWERING EMPEROR","MINCEMIGHT"],s),t)
g=P.f(H.a(["Might","Minder","Mainsail","Mastiff","Morpher","Mortician"],s),t)
h=P.f(H.a(["Crash","MIGHT","Endure","Grip","Punch","Wave","Fist"],s),t)
i=P.f(H.a(["Might","Grendel","Heracles","Odysseus","Lancelot","Arthur","Beowulf","Achilles","Samson","Goliath"],s),t)
j=P.f(H.a(["surfing a tsunami wave that appeared just for the occasion","punching out a horde of underlings, one by one","following through with a plan after the circumstances have foiled it and succeeding anyway"],s),t)
k=P.f(H.a(["standing their ground in the face of a difficult foe","performing an unbelievably complex bike stunt","teaching consorts proper weightlifting technique","finally defeating the last of their planet's underlings"],s),t)
c=P.f(H.a(["training for training's sake","renovating a consort village to protect it from natural disasters","defeating powerful underlings by refusing to give in to the pain"],s),t)
b=P.f(H.a([new E.L($.u,2,!0),new E.L($.bu,-1,!0),new E.L($.aX,-1,!0),new E.L($.aY,1,!0)],o),p)
a=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
a.j(0,$.at,L.e("#FF9B00"),!0)
a.j(0,$.aw,L.e("#FF9B00"),!0)
a.j(0,$.av,L.e("#FF8700"),!0)
a.j(0,$.aG,L.e("#7F7F7F"),!0)
a.j(0,$.aF,L.e("#727272"),!0)
a.j(0,$.ay,L.e("#A3A3A3"),!0)
a.j(0,$.az,L.e("#999999"),!0)
a.j(0,$.ax,L.e("#898989"),!0)
a.j(0,$.aD,L.e("#EFEFEF"),!0)
a.j(0,$.aC,L.e("#DBDBDB"),!0)
a.j(0,$.aB,L.e("#C6C6C6"),!0)
a.j(0,$.aA,L.e("#ADADAD"),!0)
a=new L.my(d,e,f,g,h,"Mantra","A low note is hummed. It is the one Perseverance plays to keep itself going. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",i,j,k,c,b,0.5,13,new H.q(0,null,null,null,null,null,0,r),null,"","",!1,"Might",null,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.F(null,null,q))
a.a1(13,"Might",!1,!1)
$.ya=a
a=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
a.j(0,$.at,L.e("#A4C1F4"),!0)
a.j(0,$.aw,L.e("#A4C1F4"),!0)
a.j(0,$.av,L.e("#95AFDD"),!0)
a.j(0,$.aG,L.e("#FFFFA5"),!0)
a.j(0,$.aF,L.e("#BEBE9E"),!0)
a.j(0,$.ay,L.e("#A4C1F4"),!0)
a.j(0,$.az,L.e("#95AFDD"),!0)
a.j(0,$.ax,L.e("#88A0CC"),!0)
a.j(0,$.aD,L.e("#D9D2E9"),!0)
a.j(0,$.aC,L.e("#BBB5CA"),!0)
a.j(0,$.aB,L.e("#CCC5DB"),!0)
a.j(0,$.aA,L.e("#A49FB1"),!0)
b=P.f(H.a(["Mist","Steam","Substance","Vapor","Fog","Clouds","Rivers","Humidity"],s),t)
c=P.f(H.a(["HAZE HASTENER","MISTER MASTER","MANY-BODY"],s),t)
k=P.f(H.a(["Moper","Martyr","Manager","Morning","Matter"],s),t)
j=P.f(H.a(["Everything","Encompass","Halation","Mist","Universal","Steamy","Most"],s),t)
i=P.f(H.a(["Mist","Lumo"],s),t)
h=P.f(H.a([new E.L($.aX,2,!0),new E.L($.u,-1,!0)],o),p)
g=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
g.j(0,$.at,L.e("#FF9B00"),!0)
g.j(0,$.aw,L.e("#FF9B00"),!0)
g.j(0,$.av,L.e("#FF8700"),!0)
g.j(0,$.aG,L.e("#7F7F7F"),!0)
g.j(0,$.aF,L.e("#727272"),!0)
g.j(0,$.ay,L.e("#A3A3A3"),!0)
g.j(0,$.az,L.e("#999999"),!0)
g.j(0,$.ax,L.e("#898989"),!0)
g.j(0,$.aD,L.e("#EFEFEF"),!0)
g.j(0,$.aC,L.e("#DBDBDB"),!0)
g.j(0,$.aB,L.e("#C6C6C6"),!0)
g.j(0,$.aA,L.e("#ADADAD"),!0)
g=new S.mA(a,b,c,k,j,i,"Ensemble","A harmonized chord sounds. It is the one Everybody knows. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",h,0.5,14,new H.q(0,null,null,null,null,null,0,r),null,"","",!1,"Mist",null,!1,!1,!1,!1,!0,1,g,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.F(null,null,q))
g.a1(14,"Mist",!1,!1)
$.yc=g
g=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
g.j(0,$.at,L.e("#00FFFF"),!0)
g.j(0,$.aw,L.e("#00ffff"),!0)
g.j(0,$.av,L.e("#009090"),!0)
g.j(0,$.aG,L.e("#FEFEFE"),!0)
g.j(0,$.aF,L.e("#707070"),!0)
g.j(0,$.ay,L.e("#0000FF"),!0)
g.j(0,$.az,L.e("#0000b3"),!0)
g.j(0,$.ax,L.e("#000080"),!0)
g.j(0,$.aD,L.e("#9900ff"),!0)
g.j(0,$.aC,L.e("#5c0099"),!0)
g.j(0,$.aB,L.e("#00FF00"),!0)
g.j(0,$.aA,L.e("#008000"),!0)
h=P.f(H.a(["Neon","Headaches","Puddles","Drip","Mess","Ice cream","Sweets","Boredom"],s),t)
i=P.f(H.a(["PUDDLE PUMMELLER","FLOOD FINISHER","RAINBRO"],s),t)
j=P.f(H.a(["Rainer","Retriever","Rower","Redux","Rapport"],s),t)
k=P.f(H.a(["Chaos","disorder","puddle","Rain","error","color","Swirl","LOL"],s),t)
c=P.f(H.a(["Rain","Chaac","Tohil","Q'uq'umatz","Tlaloc","Cocijo","Dzahui","Mu'ye","Jaguar","Quiateot","Lono","Indra","Dodola","Dudumitsa","Deng","Mangwe","Oya","Asiaq"],s),t)
b=P.f(H.a([new E.L($.cc,-2,!0),new E.L($.aY,-1,!0),new E.L($.bE,3,!0)],o),p)
f=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
f.j(0,$.at,L.e("#FF9B00"),!0)
f.j(0,$.aw,L.e("#FF9B00"),!0)
f.j(0,$.av,L.e("#FF8700"),!0)
f.j(0,$.aG,L.e("#7F7F7F"),!0)
f.j(0,$.aF,L.e("#727272"),!0)
f.j(0,$.ay,L.e("#A3A3A3"),!0)
f.j(0,$.az,L.e("#999999"),!0)
f.j(0,$.ax,L.e("#898989"),!0)
f.j(0,$.aD,L.e("#EFEFEF"),!0)
f.j(0,$.aC,L.e("#DBDBDB"),!0)
f.j(0,$.aB,L.e("#C6C6C6"),!0)
f.j(0,$.aA,L.e("#ADADAD"),!0)
f=new L.na(g,h,i,j,k,"Rudiment","An erratic beat plays. It is the beat Confusion drums. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["rain","chaos","disorder","insanity","discontinuity","distortion"],["rain","raindrop","noisemaker","watercolor","RNG","neon tube","faucet","hose"],b,0.5,15,new H.q(0,null,null,null,null,null,0,r),null,"","",!1,"Rain",null,!1,!1,!1,!1,!0,1,f,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.F(null,null,q))
f.a1(15,"Rain",!1,!1)
$.yf=f
f=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
f.j(0,$.at,L.e("#b88654"),!0)
f.j(0,$.aw,L.e("#783e05"),!0)
f.j(0,$.av,L.e("#4a0f00"),!0)
f.j(0,$.aG,L.e("#0b6c6e"),!0)
f.j(0,$.aF,L.e("#005d5e"),!0)
f.j(0,$.ay,L.e("#f5b06c"),!0)
f.j(0,$.az,L.e("#e6a05e"),!0)
f.j(0,$.ax,L.e("#b87232"),!0)
f.j(0,$.aD,L.e("#ffd966"),!0)
f.j(0,$.aC,L.e("#d1ab3b"),!0)
f.j(0,$.aB,L.e("#7d5e00"),!0)
f.j(0,$.aA,L.e("#6e4f00"),!0)
b=P.f(H.a(["Lies","Beach","Shore","Secrets","Pirates","Suspicion","Corruption","[REDACTED]","Cake"],s),t)
c=P.f(H.a(["MR SANDMAN","CASTLE COORDINATOR","POKER FACADE"],s),t)
k=P.f(H.a(["Strategist","Slider","Sculpter","Scamp","Sleazebag"],s),t)
j=P.f(H.a(["FALSE","Wrong","Sand","Distraction","Ruse","Crumble","abscond","beach","grain","[Data Expunged]"],s),t)
i=P.f(H.a([new E.L($.cc,3,!0),new E.L($.aY,-2,!0)],o),p)
h=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
h.j(0,$.at,L.e("#FF9B00"),!0)
h.j(0,$.aw,L.e("#FF9B00"),!0)
h.j(0,$.av,L.e("#FF8700"),!0)
h.j(0,$.aG,L.e("#7F7F7F"),!0)
h.j(0,$.aF,L.e("#727272"),!0)
h.j(0,$.ay,L.e("#A3A3A3"),!0)
h.j(0,$.az,L.e("#999999"),!0)
h.j(0,$.ax,L.e("#898989"),!0)
h.j(0,$.aD,L.e("#EFEFEF"),!0)
h.j(0,$.aC,L.e("#DBDBDB"),!0)
h.j(0,$.aB,L.e("#C6C6C6"),!0)
h.j(0,$.aA,L.e("#ADADAD"),!0)
h=new Y.np(f,b,c,k,j," BLUH BLUH, ask Cactus to write this. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",i,0.5,16,new H.q(0,null,null,null,null,null,0,r),null,"","",!1,"Sand",null,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.F(null,null,q))
h.a1(16,"Sand",!1,!1)
$.yh=h
h=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
h.j(0,$.at,L.e("#ff9933"),!0)
h.j(0,$.aw,L.e("#ffffff"),!0)
h.j(0,$.av,L.e("#999999"),!0)
h.j(0,$.aG,L.e("#ffff00"),!0)
h.j(0,$.aF,L.e("#8f8f00"),!0)
h.j(0,$.ay,L.e("#d1e0e3"),!0)
h.j(0,$.az,L.e("#c5d1d4"),!0)
h.j(0,$.ax,L.e("#b7c2c4"),!0)
h.j(0,$.aD,L.e("#00ffff"),!0)
h.j(0,$.aC,L.e("#009999"),!0)
h.j(0,$.aB,L.e("#b5b5b5"),!0)
h.j(0,$.aA,L.e("#858585"),!0)
k=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
k.j(0,$.at,L.e("#FF9B00"),!0)
k.j(0,$.aw,L.e("#FF9B00"),!0)
k.j(0,$.av,L.e("#FF8700"),!0)
k.j(0,$.aG,L.e("#7F7F7F"),!0)
k.j(0,$.aF,L.e("#727272"),!0)
k.j(0,$.ay,L.e("#A3A3A3"),!0)
k.j(0,$.az,L.e("#999999"),!0)
k.j(0,$.ax,L.e("#898989"),!0)
k.j(0,$.aD,L.e("#EFEFEF"),!0)
k.j(0,$.aC,L.e("#DBDBDB"),!0)
k.j(0,$.aB,L.e("#C6C6C6"),!0)
k.j(0,$.aA,L.e("#ADADAD"),!0)
k=new L.nF(h,0.5,17,new H.q(0,null,null,null,null,null,0,r),null,"","",!1,"Sky",null,!1,!1,!1,!1,!0,1,k,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.F(null,null,q))
k.a1(17,"Sky",!1,!1)
$.yi=k
k=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
k.j(0,$.at,L.e("#10dede"),!0)
k.j(0,$.aw,L.e("#00ffff"),!0)
k.j(0,$.av,L.e("#00d1d1"),!0)
k.j(0,$.aG,L.e("#ff0000"),!0)
k.j(0,$.aF,L.e("#d10000"),!0)
k.j(0,$.ay,L.e("#4985e6"),!0)
k.j(0,$.az,L.e("#3a76d6"),!0)
k.j(0,$.ax,L.e("#2d6ac4"),!0)
k.j(0,$.aD,L.e("#331c73"),!0)
k.j(0,$.aC,L.e("#050045"),!0)
k.j(0,$.aB,L.e("#8d7cc2"),!0)
k.j(0,$.aA,L.e("#7c6db3"),!0)
h=P.f(H.a(["Gel","Ice","Tape","Poetry","Caucophony"],s),t)
j=P.f(H.a(["LIL LYRICIST","ICE CREAMER","COOLER THAN BEING COOL"],s),t)
i=P.f(H.a(["Rhymer","Rapper","Rental","Redux","Rave","Reason"],s),t)
g=P.f(H.a(["Vaporwave","Chill","Ice","Rhyme","Slow"],s),t)
f=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
f.j(0,$.at,L.e("#FF9B00"),!0)
f.j(0,$.aw,L.e("#FF9B00"),!0)
f.j(0,$.av,L.e("#FF8700"),!0)
f.j(0,$.aG,L.e("#7F7F7F"),!0)
f.j(0,$.aF,L.e("#727272"),!0)
f.j(0,$.ay,L.e("#A3A3A3"),!0)
f.j(0,$.az,L.e("#999999"),!0)
f.j(0,$.ax,L.e("#898989"),!0)
f.j(0,$.aD,L.e("#EFEFEF"),!0)
f.j(0,$.aC,L.e("#DBDBDB"),!0)
f.j(0,$.aB,L.e("#C6C6C6"),!0)
f.j(0,$.aA,L.e("#ADADAD"),!0)
f=new Z.nh(k,h,j,i,g,"Rap","BLUH BLUH, Ask Cactus to write this. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",0.5,18,new H.q(0,null,null,null,null,null,0,r),null,"","",!1,"Rhyme",null,!1,!1,!1,!1,!0,1,f,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.F(null,null,q))
f.a1(18,"Rhyme",!1,!1)
$.yg=f
f=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
f.j(0,$.at,L.e("#c42eff"),!0)
f.j(0,$.aw,L.e("a703ff"),!0)
f.j(0,$.av,L.e("#9800f0"),!0)
f.j(0,$.aG,L.e("#fcf9bd"),!0)
f.j(0,$.aF,L.e("#e0d29e"),!0)
f.j(0,$.ay,L.e("#9900ff"),!0)
f.j(0,$.az,L.e("#8800f0"),!0)
f.j(0,$.ax,L.e("#7800e0"),!0)
f.j(0,$.aD,L.e("#b3a7d4"),!0)
f.j(0,$.aC,L.e("#a599c4"),!0)
f.j(0,$.aB,L.e("#a64e78"),!0)
f.j(0,$.aA,L.e("#963f66"),!0)
k=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
k.j(0,$.at,L.e("#FF9B00"),!0)
k.j(0,$.aw,L.e("#FF9B00"),!0)
k.j(0,$.av,L.e("#FF8700"),!0)
k.j(0,$.aG,L.e("#7F7F7F"),!0)
k.j(0,$.aF,L.e("#727272"),!0)
k.j(0,$.ay,L.e("#A3A3A3"),!0)
k.j(0,$.az,L.e("#999999"),!0)
k.j(0,$.ax,L.e("#898989"),!0)
k.j(0,$.aD,L.e("#EFEFEF"),!0)
k.j(0,$.aC,L.e("#DBDBDB"),!0)
k.j(0,$.aB,L.e("#C6C6C6"),!0)
k.j(0,$.aA,L.e("#ADADAD"),!0)
k=new Q.mc(f,0.5,19,new H.q(0,null,null,null,null,null,0,r),null,"","",!1,"Law",null,!1,!1,!1,!1,!0,1,k,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.F(null,null,q))
k.a1(19,"Law",!1,!1)
$.y8=k
k=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
k.j(0,$.at,L.e("#f0b000"),!0)
k.j(0,$.aw,L.e("#ffd966"),!0)
k.j(0,$.av,L.e("#f0ca59"),!0)
k.j(0,$.aG,L.e("#ffff00"),!0)
k.j(0,$.aF,L.e("#8f8f00"),!0)
k.j(0,$.ay,L.e("#92c27c"),!0)
k.j(0,$.az,L.e("#83b36d"),!0)
k.j(0,$.ax,L.e("#74a35f"),!0)
k.j(0,$.aD,L.e("#39751d"),!0)
k.j(0,$.aC,L.e("#2a630e"),!0)
k.j(0,$.aB,L.e("#bd8e00"),!0)
k.j(0,$.aA,L.e("#ad7c00"),!0)
j=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
j.j(0,$.at,L.e("#FF9B00"),!0)
j.j(0,$.aw,L.e("#FF9B00"),!0)
j.j(0,$.av,L.e("#FF8700"),!0)
j.j(0,$.aG,L.e("#7F7F7F"),!0)
j.j(0,$.aF,L.e("#727272"),!0)
j.j(0,$.ay,L.e("#A3A3A3"),!0)
j.j(0,$.az,L.e("#999999"),!0)
j.j(0,$.ax,L.e("#898989"),!0)
j.j(0,$.aD,L.e("#EFEFEF"),!0)
j.j(0,$.aC,L.e("#DBDBDB"),!0)
j.j(0,$.aB,L.e("#C6C6C6"),!0)
j.j(0,$.aA,L.e("#ADADAD"),!0)
j=new L.l3(k,0.5,20,new H.q(0,null,null,null,null,null,0,r),null,"","",!1,"Fate",null,!1,!1,!1,!1,!0,1,j,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.F(null,null,q))
j.a1(20,"Fate",!1,!1)
$.y4=j
j=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
j.j(0,$.at,L.e("#b2e3eb"),!0)
j.j(0,$.aw,L.e("#fefefe"),!0)
j.j(0,$.av,L.e("#dfdfdf"),!0)
j.j(0,$.aG,L.e("#00ffff"),!0)
j.j(0,$.aF,L.e("#009090"),!0)
j.j(0,$.ay,L.e("#999999"),!0)
j.j(0,$.az,L.e("#8a8a8a"),!0)
j.j(0,$.ax,L.e("#7a7a7a"),!0)
j.j(0,$.aD,L.e("#d0e2f2"),!0)
j.j(0,$.aC,L.e("#c3d4e3"),!0)
j.j(0,$.aB,L.e("#b2e3eb"),!0)
j.j(0,$.aA,L.e("#a4d4db"),!0)
k=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
k.j(0,$.at,L.e("#FF9B00"),!0)
k.j(0,$.aw,L.e("#FF9B00"),!0)
k.j(0,$.av,L.e("#FF8700"),!0)
k.j(0,$.aG,L.e("#7F7F7F"),!0)
k.j(0,$.aF,L.e("#727272"),!0)
k.j(0,$.ay,L.e("#A3A3A3"),!0)
k.j(0,$.az,L.e("#999999"),!0)
k.j(0,$.ax,L.e("#898989"),!0)
k.j(0,$.aD,L.e("#EFEFEF"),!0)
k.j(0,$.aC,L.e("#DBDBDB"),!0)
k.j(0,$.aB,L.e("#C6C6C6"),!0)
k.j(0,$.aA,L.e("#ADADAD"),!0)
k=new O.nH(2,j,0.5,21,new H.q(0,null,null,null,null,null,0,r),null,"","",!1,"Snow",null,!1,!1,!1,!1,!0,1,k,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.F(null,null,q))
k.a1(21,"Snow",!1,!1)
$.yj=k
k=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
k.j(0,$.at,L.e("#ee0000"),!0)
k.j(0,$.aw,L.e("#ff0000"),!0)
k.j(0,$.av,L.e("#d10000"),!0)
k.j(0,$.aG,L.e("#00ffff"),!0)
k.j(0,$.aF,L.e("#00d1d1"),!0)
k.j(0,$.ay,L.e("#e68f39"),!0)
k.j(0,$.az,L.e("#d67e2b"),!0)
k.j(0,$.ax,L.e("#c46b1d"),!0)
k.j(0,$.aD,L.e("#e65c00"),!0)
k.j(0,$.aC,L.e("#b82e00"),!0)
k.j(0,$.aB,L.e("#ffd966"),!0)
k.j(0,$.aA,L.e("#d1ab3b"),!0)
j=P.f(H.a(["Fire","Track","Mercury","Heat","Burns","Mixtapes","Spaghetti"],s),t)
i=P.f(H.a(["BURN WARDEN","FIRESTARTER","RAP GOD"],s),t)
h=P.f(H.a(["Flamer","Florist","Friar","Foodie"],s),t)
g=P.f(H.a(["Nightcore","Flow","Sick","Fire","Fast","Sonic","burning","speed"],s),t)
f=P.f(H.a([new E.L($.aX,2,!0),new E.L($.u,1,!0),new E.L($.cc,-2,!0)],o),p)
e=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
e.j(0,$.at,L.e("#FF9B00"),!0)
e.j(0,$.aw,L.e("#FF9B00"),!0)
e.j(0,$.av,L.e("#FF8700"),!0)
e.j(0,$.aG,L.e("#7F7F7F"),!0)
e.j(0,$.aF,L.e("#727272"),!0)
e.j(0,$.ay,L.e("#A3A3A3"),!0)
e.j(0,$.az,L.e("#999999"),!0)
e.j(0,$.ax,L.e("#898989"),!0)
e.j(0,$.aD,L.e("#EFEFEF"),!0)
e.j(0,$.aC,L.e("#DBDBDB"),!0)
e.j(0,$.aB,L.e("#C6C6C6"),!0)
e.j(0,$.aA,L.e("#ADADAD"),!0)
e=new O.lq(k,j,i,h,g,"Mixtape "," An ill beat is laid down. It's the one that is dropped when the Pimp is in the crib. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,0.5,22,new H.q(0,null,null,null,null,null,0,r),null,"","",!1,"Flow",null,!1,!1,!1,!1,!0,1,e,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.F(null,null,q))
e.a1(22,"Flow",!1,!1)
$.y5=e
e=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
e.j(0,$.at,L.e("#ffff33"),!0)
e.j(0,$.aw,L.e("#ffff00"),!0)
e.j(0,$.av,L.e("#d1d100"),!0)
e.j(0,$.aG,L.e("#00ffff"),!0)
e.j(0,$.aF,L.e("#009999"),!0)
e.j(0,$.ay,L.e("#0c5494"),!0)
e.j(0,$.az,L.e("#004785"),!0)
e.j(0,$.ax,L.e("#003b75"),!0)
e.j(0,$.aD,L.e("#20124d"),!0)
e.j(0,$.aC,L.e("#11033d"),!0)
e.j(0,$.aB,L.e("#0c323b"),!0)
e.j(0,$.aA,L.e("#00232b"),!0)
m=new L.an(P.p(null,null,null,t,m),P.p(null,null,null,l,m),P.p(null,null,null,t,l),P.p(null,null,null,l,t))
m.j(0,$.at,L.e("#FF9B00"),!0)
m.j(0,$.aw,L.e("#FF9B00"),!0)
m.j(0,$.av,L.e("#FF8700"),!0)
m.j(0,$.aG,L.e("#7F7F7F"),!0)
m.j(0,$.aF,L.e("#727272"),!0)
m.j(0,$.ay,L.e("#A3A3A3"),!0)
m.j(0,$.az,L.e("#999999"),!0)
m.j(0,$.ax,L.e("#898989"),!0)
m.j(0,$.aD,L.e("#EFEFEF"),!0)
m.j(0,$.aC,L.e("#DBDBDB"),!0)
m.j(0,$.aB,L.e("#C6C6C6"),!0)
m.j(0,$.aA,L.e("#ADADAD"),!0)
n=new U.nP(e,0.5,23,new H.q(0,null,null,null,null,null,0,r),null,"","",!1,"Stars",null,!1,!1,!1,!1,!0,1,m,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.F(null,null,q))
n.a1(23,"Stars",!1,!1)
$.yk=n
n=P.f(H.a([new E.L($.aY,1,!0),new E.L($.bE,1,!0)],o),p)
t=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],s)
m=H.a(["Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass"],s)
e=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],s)
l=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],s)
k=H.a(["nobody"],s)
j=P.f(H.a([],o),p)
i=H.a(["Nobody"],s)
h=H.a(["Nobody"],s)
t=new F.mC(n,t,m,e,l,!1,k,j,i,h,1,new H.q(0,null,null,null,null,null,0,r),["NONE"],Q.F(null,null,q),"loud","musical","Music")
t.H()
t.F()
B.cG(t)
$.yU=t
t=P.f(H.a([new E.L($.bu,-2,!0)],o),p)
n=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],s)
m=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist"],s)
l=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],s)
k=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new S.jY(t,n,m,l,k,!1,j,i,h,g,13,new H.q(0,null,null,null,null,null,0,r),["NONE"],Q.F(null,null,q),"nerdy","smart","Academic")
t.H()
t.F()
B.cG(t)
$.yN=t
t=P.f(H.a([new E.L($.u,2,!0)],o),p)
n=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],s)
m=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler"],s)
l=H.a(["MUSCLES HOARDER","BODY BOOSTER"],s)
k=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new M.ka(t,n,m,l,k,!1,j,i,h,g,4,new H.q(0,null,null,null,null,null,0,r),["NONE"],Q.F(null,null,q),"dumb","athletic","Athletic")
t.H()
t.F()
B.cG(t)
$.yO=t
t=P.f(H.a([new E.L($.c5,-1,!0),new E.L($.bE,1,!0)],o),p)
n=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],s)
m=H.a(["Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor"],s)
l=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],s)
k=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new A.ku(t,n,m,l,k,!1,j,i,h,g,0,new H.q(0,null,null,null,null,null,0,r),["NONE"],Q.F(null,null,q),"dorky","funny","Comedy")
t.H()
t.F()
B.cG(t)
$.yP=t
t=P.f(H.a([new E.L($.aY,-1,!0),new E.L($.al,-1,!0)],o),p)
n=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],s)
m=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business"],s)
l=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],s)
k=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new M.kx(t,n,m,l,k,!1,j,i,h,g,2,new H.q(0,null,null,null,null,null,0,r),["NONE"],Q.F(null,null,q),"pretentious","cultured","Culture")
t.H()
t.F()
B.cG(t)
$.yQ=t
t=P.f(H.a([new E.L($.aY,1,!0),new E.L($.cc,1,!0)],o),p)
n=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],s)
m=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer"],s)
l=H.a(["BATTERBRAT","GRITTY GUARDIAN"],s)
k=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new V.kC(t,n,m,l,k,!1,j,i,h,g,8,new H.q(0,null,null,null,null,null,0,r),["NONE"],Q.F(null,null,q),"boring","domestic","Domestic")
t.H()
t.F()
B.cG(t)
$.yR=t
t=P.f(H.a([new E.L($.bE,1,!0),new E.L($.d4,1,!0)],o),p)
n=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],s)
m=H.a(["Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart"],s)
l=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],s)
k=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new U.l2(t,n,m,l,k,!1,j,i,h,g,7,new H.q(0,null,null,null,null,null,0,r),["NONE"],Q.F(null,null,q),"whimpy","imaginative","Fantasy")
t.H()
t.F()
B.cG(t)
$.yS=t
t=P.f(H.a([new E.L($.u,1,!0),new E.L($.al,1,!0)],o),p)
n=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],s)
m=H.a(["Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel"],s)
l=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],s)
k=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new N.m4(t,n,m,l,k,!1,j,i,h,g,6,new H.q(0,null,null,null,null,null,0,r),["NONE"],Q.F(null,null,q),"harsh","fair-minded","Justice")
t.H()
t.F()
B.cG(t)
$.yT=t
t=P.f(H.a([new E.L($.aX,2,!0)],o),p)
n=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],s)
m=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent"],s)
l=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],s)
k=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new G.n4(t,n,m,l,k,!1,j,i,h,g,9,new H.q(0,null,null,null,null,null,0,r),["NONE"],Q.F(null,null,q),"frivolous","geeky","PopCulture")
t.H()
t.F()
B.cG(t)
$.yW=t
t=P.f(H.a([new E.L($.cc,2,!0)],o),p)
n=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],s)
m=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team"],s)
l=H.a(["QUESTING CUPID","ROMANCE EXPERT"],s)
k=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new Q.nj(t,n,m,l,k,!1,j,i,h,g,12,new H.q(0,null,null,null,null,null,0,r),["NONE"],Q.F(null,null,q),"obsessive","romantic","Romantic")
t.H()
t.F()
B.cG(t)
$.yX=t
t=P.f(H.a([new E.L($.aY,2,!0)],o),p)
n=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],s)
m=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally"],s)
l=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],s)
k=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new N.nI(t,n,m,l,k,!1,j,i,h,g,11,new H.q(0,null,null,null,null,null,0,r),["NONE"],Q.F(null,null,q),"shallow","extroverted","Social")
t.H()
t.F()
B.cG(t)
$.yY=t
t=P.f(H.a([new E.L($.cc,-1,!0),new E.L($.aY,-1,!0)],o),p)
n=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],s)
m=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod"],s)
l=H.a(["ENEMY #1","JERKWAD JOURNEYER"],s)
k=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new V.ok(t,n,m,l,k,!1,j,i,h,g,5,new H.q(0,null,null,null,null,null,0,r),["NONE"],Q.F(null,null,q),"terrible","honest","Terrible")
t.H()
t.F()
B.cG(t)
$.z_=t
t=P.f(H.a([new E.L($.bu,2,!0)],o),p)
n=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],s)
m=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis"],s)
l=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],s)
k=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new F.oQ(t,n,m,l,k,!1,j,i,h,g,3,new H.q(0,null,null,null,null,null,0,r),["NONE"],Q.F(null,null,q),"wordy","lettered","Writing")
t.H()
t.F()
B.cG(t)
$.z0=t
t=P.f(H.a([new E.L($.d4,2,!0)],o),p)
n=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],s)
m=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data"],s)
l=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],s)
k=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new D.oj(t,n,m,l,k,!1,j,i,h,g,10,new H.q(0,null,null,null,null,null,0,r),["NONE"],Q.F(null,null,q),"awkward","techy","Technology")
t.H()
t.F()
B.cG(t)
$.yZ=t
t=H.a(["nobody"],s)
p=P.f(H.a([],o),p)
o=H.a(["Nobody"],s)
s=H.a(["Nobody"],s)
t=new B.eZ(!0,t,p,o,s,-13,new H.q(0,null,null,null,null,null,0,r),["NONE"],Q.F(null,null,q),"","","Null")
t.H()
t.F()
B.cG(t)
$.yV=t
A.E5()},
E5:function(){var t,s
if($.vM)return
$.vM=!0
t=[P.v]
s=new Y.om(H.a([],t))
$.rE=s
Z.du(s,"txt",null)
Z.du($.rE,"vert","x-shader/x-vertex")
Z.du($.rE,"frag","x-shader/x-fragment")
$.yJ=new Y.kl(H.a([],t))
s=new B.oT(H.a([],t))
$.v0=s
Z.du(s,"zip",null)
Z.du($.v0,"bundle",null)
s=new Q.n3(H.a([],t))
$.v_=s
Z.du(s,"png",null)
Z.du($.v_,"jpg","image/jpeg")
s=new M.nO(H.a([],t))
$.yK=s
Z.du(s,"psprite",null)
t=new V.lr(H.a([],t))
$.rD=t
Z.du(t,"ttf",null)
Z.du($.rD,"otf",null)
Z.du($.rD,"woff",null)}},V={kC:function kC(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},lr:function lr(a){this.a=a},mz:function mz(rx,ry,x1,x2,y1,y2,t,B,C,K,E,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.B=B
_.C=C
_.K=K
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
_.r2=r2},mV:function mV(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},ok:function ok(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch}},U={kD:function kD(rx,ry,x1,x2,y1,y2,t,B,C,K,E,R,A,ar,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.B=B
_.C=C
_.K=K
_.E=E
_.R=R
_.A=A
_.ar=ar
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
_.r2=r2},l2:function l2(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},mn:function mn(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
this.a=a},ag:function ag(x,a,b,c,d,e,f,r){var _=this
_.x=x
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},nL:function nL(a){this.a=a},nP:function nP(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},oo:function oo(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id}},Q={eL:function eL(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},lx:function lx(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},kH:function kH(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},lF:function lF(){},n3:function n3(a){this.a=a},mc:function mc(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},nj:function nj(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},oH:function oH(rx,ry,x1,x2,y1,y2,t,B,C,K,E,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.B=B
_.C=C
_.K=K
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
_.r2=r2},
vR:function(a,b,c,d,e,f){var t=[Q.ct]
t=new Q.ct(null,null,!1,null,0,0,0,0,!1,null,!0,!0,!0,!0,null,null,0,H.a([],t),!1,!1,[],!1,null,b,null,0,0,!1,null,null,null,c,null,null,null,null,null,d,!1,null,-1,!1,null,null,null,!0,!1,"#ff0000",null,null,null,null,f,!0,!1,!1,!1,0,0,0,!1,0,!1,!1,!1,null,C.c,a,"","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],[X.df]),!1,H.a([],[Z.cT]),!1,H.a([],[N.cH]),0,H.a([],[E.L]),null,null,!1,H.a([],t),"",null,null)
t.p("",a)
t.i5(a,b,c,d,e,f)
return t},
ct:function ct(x1,x2,y1,y2,t,B,C,K,E,R,A,ar,b5,aI,aW,ak,bD,bE,bW,bX,bF,bY,bG,ai,fI,d3,d4,e_,d5,d6,d7,a8,bH,b6,aN,aO,bv,bI,e0,cq,d8,e1,d9,cr,bJ,e2,aX,a2,cs,bZ,bK,bw,ct,e3,e4,e5,e6,da,c_,c0,e7,cu,e8,e9,ea,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,a$){var _=this
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.B=B
_.C=C
_.K=K
_.E=E
_.R=R
_.A=A
_.ar=ar
_.b5=b5
_.aI=aI
_.aW=aW
_.ak=ak
_.bD=bD
_.bE=bE
_.bW=bW
_.bX=bX
_.bF=bF
_.bY=bY
_.bG=bG
_.ai=ai
_.fI=fI
_.d3=d3
_.d4=d4
_.e_=e_
_.d5=d5
_.d6=d6
_.d7=d7
_.a8=a8
_.bH=bH
_.b6=b6
_.aN=aN
_.aO=aO
_.bv=bv
_.bI=bI
_.e0=e0
_.cq=cq
_.d8=d8
_.e1=e1
_.d9=d9
_.cr=cr
_.bJ=bJ
_.e2=e2
_.aX=aX
_.a2=a2
_.cs=cs
_.bZ=bZ
_.bK=bK
_.bw=bw
_.ct=ct
_.e3=e3
_.e4=e4
_.e5=e5
_.e6=e6
_.da=da
_.c_=c_
_.c0=c0
_.e7=e7
_.cu=cu
_.e8=e8
_.e9=e9
_.ea=ea
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
F:function(a,b,c){var t=new Q.hv(null,null,[c])
t.ia(a,b,c)
return t},
dU:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.F(d,null,e)
s=a.gn(a)
C.a.sn(t.b,s)
if(H.eD(a,"$isz",[e],"$asz"))if(H.eD(a,"$isbK",[e],"$asbK"))for(s=J.bC(a.gbM()),r=0;s.w();){q=s.gG()
p=t.b
o=p.length
if(r>=o)return H.J(p,r)
p[r]=q;++r}else for(s=a.gP(a),p=[H.I(t,0)],r=0;s.w();){n=s.gG()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.J(o,r)
o[r]=new Q.h(n,m,p);++r}else for(s=a.gP(a),p=[e],o=[H.I(t,0)];s.w();){l=s.gG()
if(H.tP(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.J(m,0)
m[0]=new Q.h(l,k,o)}else if(H.eD(l,"$ish",p,null)){m=t.b
k=m.length
if(0>=k)return H.J(m,0)
m[0]=l}else throw H.m("Invalid entry type "+H.n(J.xH(l))+" for WeightedList<"+H.n(H.c2(H.dD(e)))+">. Should be "+H.n(H.c2(H.dD(e)))+" or WeightPair<"+H.n(H.c2(H.dD(e)))+">.")}return t},
tB:function(a,b,c,d){var t,s,r,q,p,o,n
t=Q.F(c,null,d)
s=a.gn(a)
C.a.sn(t.b,s)
for(s=a.gad(a),s=s.gP(s),r=[d],q=0;s.w();){p=s.gG()
o=a.m(0,p)
n=t.b
if(q>=n.length)return H.J(n,q)
n[q]=new Q.h(p,o,r);++q}return t},
oN:function(a,b,c){return new Q.jn(J.ul(a.gbM(),new Q.oO(c,b)),null,[c])},
fi:function(a,b,c,d){return new Q.jm(J.ui(a.gbM(),new Q.oM(c,d,b)),null,[c,d])},
F8:function(a,b,c){return new Q.hr(J.ul(a,new Q.oa(b,c)).aZ(0,new Q.ob(b,c)),null,[b,c])},
bK:function bK(){},
hv:function hv(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
jl:function jl(){},
oL:function oL(a,b){this.a=a
this.b=b},
oK:function oK(a,b){this.a=a
this.b=b},
h:function h(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
cd:function cd(){},
fh:function fh(){},
oJ:function oJ(a,$ti){this.a=a
this.$ti=$ti},
jn:function jn(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
oO:function oO(a,b){this.a=a
this.b=b},
jm:function jm(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
oM:function oM(a,b,c){this.a=a
this.b=b
this.c=c},
hr:function hr(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
oa:function oa(a,b){this.a=a
this.b=b},
ob:function ob(a,b){this.a=a
this.b=b}},X={i6:function i6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},hU:function hU(){},lA:function lA(rx,ry,x1,x2,y1,y2,t,B,C,K,E,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.B=B
_.C=C
_.K=K
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
_.r2=r2},df:function df(){},E:function E(a,b,c){this.a=a
this.b=b
this.c=c}},N={Y:function Y(){},m4:function m4(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},n6:function n6(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},ni:function ni(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},nI:function nI(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},nK:function nK(rx,ry,x1,x2,y1,y2,t,B,C,K,E,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.B=B
_.C=C
_.K=K
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
_.r2=r2},op:function op(rx,ry,x1,x2,y1,y2,t,B,C,K,E,R,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.B=B
_.C=C
_.K=K
_.E=E
_.R=R
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
EF:function(a){var t,s,r,q
t=H.a([],[N.cH])
for(s=0;s<a.length;++s){r=a[s]
q=new N.cH(r.a,0,null,"",!1,"","Ambivalent","Friends","Totally In Love","Rivals","Enemies","Matesprits","Moirallegiance","Auspisticism","Kismesissitude")
q.kJ(0)
q.b=r.b
q.c=r.geu(r)
q.d=r.d
q.e=r.e
q.f=r.f
t.push(q)}return t},
cH:function cH(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db){var _=this
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
E8:function(a){var t,s,r,q,p,o,n,m,l
t=J.cm(a)
s=new W.hy(document.querySelectorAll("link"),[null])
for(r=new H.dx(s,s.gn(s),0,null,[null]);r.w();){q=r.d
p=J.am(q)
if(!!p.$isfZ&&q.rel==="stylesheet"){o=$.$get$mZ()
H.n(p.gah(q))
o.toString
o=t.length
n=Math.min(o,J.cl(p.gah(q)))
for(m=0;m<n;++m){if(m>=o)return H.J(t,m)
if(t[m]!==J.c7(p.gah(q),m)){l=C.d.aS(t,m)
$.$get$mZ().toString
return l.split("/").length-1}continue}}}r=$.$get$mZ()
r.toString
F.iR(C.w).$1(r.ce(C.w,"Didn't find a css link to derive relative path"))
return 0},
vQ:function(){var t=P.ws()
if(!$.$get$mY().aj(0,t))$.$get$mY().i(0,t,N.E8(t))
return $.$get$mY().m(0,t)}},B={lz:function lz(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
cG:function(a){if($.$get$iG().aj(0,a.f))throw H.m("Duplicate aspect id for "+a.u(0)+": "+a.f+" is already registered for "+J.cm($.$get$iG().m(0,a.f))+".")
$.$get$iG().i(0,a.f,a)},
v2:function(){var t=$.$get$iG()
t=t.gay(t)
return new H.bv(t,new B.lK(),[H.ap(t,"z",0)])},
v1:function(a,b){var t=new B.lJ(null,null)
t.i1(a,b)
return t},
lK:function lK(){},
eZ:function eZ(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
lJ:function lJ(a,b){this.a=a
this.b=b},
oR:function oR(a){this.a=a},
oT:function oT(a){this.a=a}},G={mf:function mf(rx,ry,x1,x2,y1,y2,t,B,C,K,E,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.B=B
_.C=C
_.K=K
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
_.r2=r2},n4:function n4(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},nw:function nw(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,t,B,C,K,E,R,A,ar,b5,aI,aW,ak,bD,bE,bW,bX,bF,bY,bG){var _=this
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
_.B=B
_.C=C
_.K=K
_.E=E
_.R=R
_.A=A
_.ar=ar
_.b5=b5
_.aI=aI
_.aW=aW
_.ak=ak
_.bD=bD
_.bE=bE
_.bW=bW
_.bX=bX
_.bF=bF
_.bY=bY
_.bG=bG},
uA:function(a){var t,s,r,q,p,o,n,m,l
t=G.V
s=P.h0(a,t)
r=P.a3(null,null,null,t)
q=H.a([],[G.d])
for(t=G.vH(),p=J.bC(t.a),t=new H.dV(p,t.b,[H.I(t,0)]);t.w();){o=p.gG()
if(o.hh(s))q.push(o)}C.a.eJ(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.bp)(q),++n){o=q[n]
if(o.hh(s)){r.h(0,o)
for(p=o.e,m=p.length,l=0;l<p.length;p.length===m||(0,H.bp)(p),++l)s.an(0,p[l])}}if(s.a!==0)r.W(0,s)
return r},
vH:function(){var t=$.$get$b()
t.toString
return new H.bv(t,new G.lV(),[H.I(t,0)])},
V:function V(){},
aW:function aW(a,b,c){this.a=a
this.b=b
this.c=c},
ah:function ah(a,b,c){this.a=a
this.b=b
this.c=c},
bG:function bG(a,b,c){this.a=a
this.b=b
this.c=c},
d:function d(d,e,a,b,c){var _=this
_.d=d
_.e=e
_.a=a
_.b=b
_.c=c},
lV:function lV(){}},R={
vO:function(a,b,c,d,e,f){var t=new R.iT(Q.F(null,null,R.dy),$.$get$uX(),e,f,!1,null,null,null,null,null,null,null,null,!1,!1,!1,null,null,null,null,null,!1,null,null,$.$get$ii(),null,null,null,Q.F(null,null,X.E),Q.F(null,null,N.Y),P.cD(P.v,[Q.bK,N.Y]))
t.i4(a,b,c,d,e,f)
return t},
iT:function iT(id,k1,k2,k3,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,b$,c$,d$,e$,f$,r$){var _=this
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
EC:function(a){var t,s
if(a.gn(a).b8(0,1)){a.m(0,1)
a.m(0,1)
t=!0}else t=!1
s=a.m(0,0)
s.gb2(s).gl_().fS("checking for two players, ps is "+H.n(a)+", ret is "+t)
return t},
Ep:function(a){return a.gV(a).gfH()},
Er:function(a){var t=a.gV(a)
return!t.gfH()&&!t.gb2(t).gI().gjF()},
Eq:function(a){var t=a.gV(a)
return!t.gfH()&&t.gb2(t).gI().gjF()},
En:function(a){a.gV(a).gci()
return!1},
EB:function(a){a.gV(a).gci()
return!1},
EA:function(a){return J.a5(H.hN(J.ug(a),"$isct").a8,$.k3)},
Ez:function(a){return a.gV(a).gck().gkX()},
Ex:function(a){return a.gV(a).gck().gkV()},
Ew:function(a){return a.gV(a).gck().gkU()},
Et:function(a){return a.gV(a).gck().gkS()},
Ev:function(a){return a.gV(a).gck().gkT()},
Ey:function(a){return a.gV(a).gck().gkW()},
Eu:function(a){var t=a.gV(a)
t.gci()
t.gci()
return!1},
Eo:function(a){return!0},
Es:function(a){var t,s
t=a.gV(a)
s="is it JR? "+H.n(t.gfw())
t.gfw()
P.cE(s+" false ")
t.gfw()
return!1},
fb:function fb(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
a2:function a2(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
bD:function bD(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
dy:function dy(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
ff:function ff(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
oe:function oe(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
fS:function fS(){}},F={mC:function mC(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
Eb:function(e8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7
if($.f9!=null)return
$.Ea=e8
P.cE("initializing potential sprites")
t=Y.cW("Buggy As Fuck Retro Game")
s=[X.df]
r=[Z.cT]
q=[N.cH]
p=[E.L]
o=[Q.ct]
n=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,t,"provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
n.p(t,null)
t=D.bk
m=P.cj
n.a$.q(P.B([$.u,20],t,m))
n.fx=!0
n.x1="provides painful, painful sound file malfunctions, why is this even a thing? "
l=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Robot","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
l.p("Robot",null)
l.a$.q(P.B([$.u,100,$.al,100,$.b3,100,$.bu,100],t,m))
l.x2=1
l.x1="is <b>more</b> useful than another player. How could a mere human measure up to the awesome logical capabilities of a machine? "
k=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Golfer","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
k.p("Golfer",null)
k.x2=1
k.a$.q(P.B([$.u,20,$.c5,20,$.bE,20],t,m))
k.x1="provides surprisingly helpful advice, even if they do insist on calling all enemies \u2018bogeys\u2019. "
j=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Dutton","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
j.p("Dutton",null)
j.x2=1
j.x1="provides transcendent wisdom. "
j.a$.q(P.B([$.u,10,$.al,10,$.b3,10,$.bu,50,$.aX,50,$.c5,50,$.bE,50],t,m))
i=j.fy
h=Z.aE("Duttobliteration",2,null,"")
h.r.push(new Z.Z($.bu,2,!0,0,1,2,3,""))
h.e=" The ENEMY is obliterated. Probably. A watermark of Charles Dutton appears, stage right. "
i.push(h)
h=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Game Bro","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
h.p("Game Bro",null)
h.a$.q(P.B([$.u,20],t,m))
h.x2=1
h.x1="provides rad as fuck tips and tricks for beating SBURB and getting mad snacks, yo. 5 out of 5 hats. "
i=Y.cW("Google")
g=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,i,"provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
g.p(i,null)
g.a$.q(P.B([$.u,20],t,m))
g.x2=1
g.fx=!0
g.x1="sure knows a lot about everything, but why does it only seem to return results about crashing SBURB?"
i=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Game Grl","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
i.p("Game Grl",null)
i.a$.q(P.B([$.u,20],t,m))
i.x2=1
i.x1="provides rad as fuck tips and tricks for beating SBURB and getting mad snacks, yo, but, like, while also being a GIRL? *record scratch*  5 out of 5 lady hats. "
f=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Paperclip","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
f.p("Paperclip",null)
f.a$.q(P.B([$.u,20],t,m))
f.x2=-1
f.x1="says: 'It looks like you're trying to play a cosmic game where you breed frogs to create a universe. Would you like me to'-No. 'Would you like me to'-No! 'It looks like you're'-shut up!!! This is not helpful."
e=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"WebComicCreator","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e.p("WebComicCreator",null)
e.a$.q(P.B([$.u,20],t,m))
e.x2=-1
e.x1="refuses to explain anything about SBURB to you, prefering to let you speculate wildly while cackling to himself."
d=e.fy
c=Z.aE("Kill ALL The Characters",2,null,"")
c.r.push(new Z.Z($.bu,3,!0,0,1,2,3,""))
c.e=" All enemies are obliterated. Probably. A watermark of Andrew Hussie appears, stage right. "
d.push(c)
c=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"KidRock","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c.p("KidRock",null)
c.a$.q(P.B([$.u,20],t,m))
c.x2=-1
c.x1="does absolutly nothing but sing repetitive, late 90's rock to you."
d=c.fy
b=Z.aE("BANG DA DANG DIGGY DIGGY",2,null,"")
a=b.r
a.push(new Z.Z($.u,3,!0,0,1,2,3,""))
a.push(new Z.Z($.u,1,!1,0,1,2,3,""))
b.e=" OWNER plays a 90s hit classic, and you can't help but tap your feet. Somehow, this doesn't feel like the true version of this attack."
d.push(b)
b=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sleuth","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b.p("Sleuth",null)
b.a$.q(P.B([$.u,20,$.cc,100],t,m))
b.x2=-1
b.x1="suggests the player just input a password to skip all their land's weird puzzle shit. This is not actually a thing you can do."
d=b.fy
a=Z.aE("Sepulchritude",2,null,"")
a.r.push(new Z.Z($.cc,1,!0,0,1,2,3,""))
a.e=" The OWNER decides not to bring that noise just yet. They just heal the party instead. "
d.push(a)
a=b.fy
d=Z.aE("Sepulchritude",2,null,"")
d.r.push(new Z.Z($.cc,1,!0,0,1,2,3,""))
d.e=" THE OWNER just don't have the offensive gravitas for that attack. They just heal the party instead. "
a.push(d)
d=b.fy
a=Z.aE("Sepulchritude",2,null,"")
a.r.push(new Z.Z($.cc,3,!0,0,1,2,3,""))
a.e=" The OWNER finally fucking unleashes their Ultimate Attack. The resplendent light of divine PULCHRITUDE consumes all enemies. "
d.push(a)
a=b.fy
d=Z.aE("Sepulchritude",2,null,"")
d.r.push(new Z.Z($.cc,1,!0,0,1,2,3,""))
d.e=" No, not yet! The OWNER refuses to use Sepulchritude. They just heal the party instead. "
a.push(d)
d=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Nic Cage","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d.p("Nic Cage",null)
d.a$.q(P.B([$.u,20],t,m))
d.x2=1
d.x1="demonstrates that when it comes to solving bullshit riddles to get National *cough* I mean SBURBian treasure, he is simply the best there is. "
a=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Praying Mantis","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a.p("Praying Mantis",null)
a.a$.q(P.B([$.u,20,$.bE,20],t,m))
a0=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Shitty Comic Character","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a0.p("Shitty Comic Character",null)
a0.a$.q(P.B([$.u,20,$.aX,50],t,m))
a0.x2=-1
a0.x1=" is the STAR. It is them. You don't think they have ever once attempted to even talk about the game. How HIGH did you have to BE to prototype this glitchy piece of shit? "
a1=a0.fy
a2=Z.aE("FUCK IM FALLING DOWN ALL THESE STAIRS",3,null,"")
a2.r.push(new Z.Z($.aX,1,!1,0,1,2,3,""))
a2.e=" It keeps hapening. "
a1.push(a2)
a2=a0.fy
a1=Z.aE("FUCK IM FALLING DOWN ALL THESE STAIRS",3,null,"")
a1.r.push(new Z.Z($.aX,1,!1,0,1,2,3,""))
a1.e=" I warned you about stairs bro!!! "
a2.push(a1)
a1=a0.fy
a2=Z.aE("FUCK IM FALLING DOWN ALL THESE STAIRS",3,null,"")
a2.r.push(new Z.Z($.aX,1,!1,0,1,2,3,""))
a2.e=" I told you dog! "
a1.push(a2)
a2=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Doctor","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a2.p("Doctor",null)
a2.a$.q(P.B([$.u,20],t,m))
a2.x2=1
a2.x1="is pretty much as useful as another player. No cagey riddles, just straight answers on how to finish the quests. "
a1=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Gerbil","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a1.p("Gerbil",null)
a1.a$.q(P.B([$.u,20],t,m))
a1.x2=1
a1.x1="remains physically adorable and mentally idiotic. Gigglysnort hideytalk ahoy. "
a3=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Chinchilla","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a3.p("Chinchilla",null)
a3.a$.q(P.B([$.u,20],t,m))
a3.x2=1
a3.x1="remains physically adorable and mentally idiotic. Gigglysnort hideytalk ahoy. "
a4=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Rabbit","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a4.p("Rabbit",null)
a4.a$.q(P.B([$.u,20,$.bE,100],t,m))
a4.x1="remains physically adorable and mentally idiotic. Gigglysnort hideytalk ahoy. "
a5=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Tissue","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a5.p("Tissue",null)
a5.x2=-1
a5.x1="is useless in every possible way. "
a6=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Librarian","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a6.p("Librarian",null)
a6.a$.q(P.B([$.u,20],t,m))
a6.x2=1
a6.x1="Is pretty much as useful as another player. No cagey riddles, just straight answers on where the book on how to finish the quest is, and could you please keep it down? "
a7=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Pit Bull","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a7.p("Pit Bull",null)
a7.a$.q(P.B([$.u,50],t,m))
a8=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Butler","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a8.p("Butler",null)
a8.a$.q(P.B([$.u,20,$.aY,50],t,m))
a8.x2=1
a8.x1="is serving their player like a dude on butlersprite island. "
a9=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sloth","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a9.p("Sloth",null)
a9.a$.q(P.B([$.u,20,$.aX,-50],t,m))
a9.x1="provides. Slow. But. Useful. Advice."
b0=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Cowboy","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b0.p("Cowboy",null)
b0.a$.q(P.B([$.u,20],t,m))
b0.x2=1
b0.x1="provides useful advice, even if they do insist on calling literally everyone 'pardner.' "
b1=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Pomeranian","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b1.p("Pomeranian",null)
b1.a$.q(P.B([$.u,1],t,m))
b1.x2=-1
b1.x1="unhelpfully insists that every rock is probably a boss fight (it isn\u2019t). "
b2=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Chihuahua","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b2.p("Chihuahua",null)
b2.a$.q(P.B([$.u,1],t,m))
b2.x2=-1
b2.x1="unhelpfully insists that every rock is probably a boss fight (it isn\u2019t). "
b3=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Pony","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b3.p("Pony",null)
b3.a$.q(P.B([$.u,20,$.aY,-1000],t,m))
b3.x2=-1
b3.x1="is constantly flipping their fucking shit instead of being useful in any way shape or form, as ponies are known for. "
b4=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Horse","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b4.p("Horse",null)
b4.a$.q(P.B([$.u,20,$.aY,-100],t,m))
b4.x2=-1
b4.x1="is constantly flipping their fucking shit instead of being useful in any way shape or form, as horses are known for. "
b5=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Internet Troll","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b5.p("Internet Troll",null)
b5.a$.q(P.B([$.u,20,$.aY,1000],t,m))
b5.x2=-1
b5.x1="actively does its best to hinder their efforts. "
b6=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Mosquito","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b6.p("Mosquito",null)
b6.a$.q(P.B([$.u,20],t,m))
b6.x2=-1
b6.x1="is a complete dick, buzzing and fussing and biting. What's its deal? "
b7=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Fly","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b7.p("Fly",null)
b7.a$.q(P.B([$.u,20],t,m))
b7.x2=-1
b7.x1="is a complete dick, buzzing and fussing and biting. What's its deal? "
b8=Y.cW("GitHub")
b9=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,b8,"provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b9.p(b8,null)
b9.a$.q(P.B([$.u,20],t,m))
b9.x2=1
b9.fx=!0
b9.x1="Githubsprite tells all about the latest changes to sburbs code. "
b8=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Cow","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b8.p("Cow",null)
b8.a$.q(P.B([$.u,30],t,m))
c0=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Bird","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c0.p("Bird",null)
c0.a$.q(P.B([$.u,20,$.aX,50],t,m))
c0.x1="provides sort of helpful advice when not grabbing random objects to make nests. "
c1=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Bug","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c1.p("Bug",null)
c1.a$.q(P.B([$.u,20],t,m))
c1.x1="provides the requisite amount of buzzybuz zuzytalk to be juuuust barely helpful. "
c2=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Llama","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c2.p("Llama",null)
c2.a$.q(P.B([$.u,20],t,m))
c3=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Penguin","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c3.p("Penguin",null)
c3.a$.q(P.B([$.u,20],t,m))
c4=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Husky","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c4.p("Husky",null)
c4.a$.q(P.B([$.u,30],t,m))
c4.x1="alternates between loud, insistent barks and long, eloquent monologues on the deeper meaning behind each and every fragment of the game. "
c5=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Cat","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c5.p("Cat",null)
c5.a$.q(P.B([$.u,20,$.c5,-20,$.bE,20],t,m))
c5.x1="Is kind of helpful? Maybe? You can't tell if it loves their player or hates them. "
c6=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Dog","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c6.p("Dog",null)
c6.a$.q(P.B([$.u,30],t,m))
c6.x1="alternates between loud, insistent barks and long, eloquent monologues on the deeper meaning behind each and every fragment of the game. "
c7=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Pigeon","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c7.p("Pigeon",null)
c7.a$.q(P.B([$.u,0.5,$.bu,-40],t,m))
c8=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Octopus","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c8.p("Octopus",null)
c8.a$.q(P.B([$.u,20,$.aX,80],t,m))
c9=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Fish","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c9.p("Fish",null)
c9.a$.q(P.B([$.u,20],t,m))
c9.y1=!0
d0=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Kitten","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d0.p("Kitten",null)
d0.a$.q(P.B([$.u,20],t,m))
d0.x1="is kind of helpful? Maybe? You can't tell if it loves their player or hates them. "
d1=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Worm","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d1.p("Worm",null)
d1.a$.q(P.B([$.u,20],t,m))
d1.y1=!0
d2=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Bear","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d2.p("Bear",null)
d2.a$.q(P.B([$.u,50],t,m))
d3=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Goat","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d3.p("Goat",null)
d3.a$.q(P.B([$.u,20],t,m))
d4=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Rat","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d4.p("Rat",null)
d4.a$.q(P.B([$.u,20],t,m))
d5=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Raccoon","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d5.p("Raccoon",null)
d5.a$.q(P.B([$.u,20],t,m))
d5.x2=1
d5.x1="demonstrates that SBURB basically hides quest items in the same places humans would throw away their garbage. "
d6=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Crow","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d6.p("Crow",null)
d6.a$.q(P.B([$.u,20,$.bu,50],t,m))
d6.x1="provides sort of helpful advice when not grabbing random objects to make nests. "
d7=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Chicken","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d7.p("Chicken",null)
d7.a$.q(P.B([$.u,20,$.bu,-50],t,m))
d8=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Duck","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d8.p("Duck",null)
d8.a$.q(P.B([$.u,20],t,m))
d9=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sparrow","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d9.p("Sparrow",null)
d9.a$.q(P.B([$.u,20],t,m))
e0=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Fancy Santa","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e0.p("Fancy Santa",null)
e0.a$.q(P.B([$.u,20],t,m))
e0.x2=-1
e0.x1="goes hohohohohohohohoho. "
e1=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Politician","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e1.p("Politician",null)
e1.a$.q(P.B([$.u,20],t,m))
e1.x2=-1
e1.x1="offers a blueprint for an ECONONY that works for everyone. That would've been more useful before the earth was destroyed.... "
e2=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Tiger","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e2.p("Tiger",null)
e2.a$.q(P.B([$.u,50],t,m))
e2.x1="Provides just enough pants-shitingly terrifying growly-roar meow talk to be useful. "
e3=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sugar Glider","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e3.p("Sugar Glider",null)
e3.a$.q(P.B([$.u,20],t,m))
e3.x1="remains physically adorable and mentally idiotic. Gigglysnort hideytalk ahoy. "
e4=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Rapper","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e4.p("Rapper",null)
e4.a$.q(P.B([$.u,20],t,m))
e4.x2=1
e4.x1="provides surprisingly helpful advice, even if it does insist on some frankly antiquated slang and rhymes. I mean, civilization is dead, there isn\u2019t exactly a police left to fuck. "
e5=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Kangaroo","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e5.p("Kangaroo",null)
e5.a$.q(P.B([$.u,30,$.aX,30],t,m))
e6=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Stoner","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e6.p("Stoner",null)
e6.a$.q(P.B([$.u,42,$.c5,-42,$.bE,42],t,m))
e6.x2=1
e6.x1="is pretty much as useful as another player, assuming that player was higher then a fucking kite. "
e7=[E.cz]
$.f9=H.a([n,l,k,j,h,g,i,f,e,c,b,d,a,a0,a2,a1,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b9,b8,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6],e7)
e6=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Frog","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e6.p("Frog",null)
e6.C=!0
e6.a$.q(P.B([$.aX,100,$.u,10],t,m))
e6.x1="provides the requisite amount of gigglesnort  hideytalk to be fairly useful, AND the underlings seem to go after it first! Bonus! "
e5=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Lizard","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e5.p("Lizard",null)
e5.a$.q(P.B([$.u,20],t,m))
e5.C=!0
e5.x1="provides the requisite amount of gigglesnort  hideytalk to be fairly useful, AND the underlings seem to go after it first! Bonus! "
e4=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Salamander","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e4.p("Salamander",null)
e4.C=!0
e4.a$.q(P.B([$.al,500,$.b3,500,$.u,20],t,m))
e4.x1="provides the requisite amount of gigglesnort  hideytalk to be fairly useful, AND the underlings seem to go after it first! Bonus! "
e3=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Iguana","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e3.p("Iguana",null)
e3.C=!0
e3.x1="provides the requisite amount of gigglesnort  hideytalk to be fairly useful, AND the underlings seem to go after it first! Bonus! "
e2=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Crocodile","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e2.p("Crocodile",null)
e2.C=!0
e2.a$.q(P.B([$.u,50],t,m))
e2.x1="provides the requisite amount of gigglesnort  hideytalk to be fairly useful, AND the underlings seem to go after it first! Bonus! "
e1=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Turtle","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e1.p("Turtle",null)
e1.C=!0
e1.a$.q(P.B([$.aX,-100,$.u,20],t,m))
e1.x1="provides the requisite amount of gigglesnort  hideytalk to be fairly useful, AND the underlings seem to go after it first! Bonus! "
e0=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Alligator","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e0.p("Alligator",null)
e0.a$.q(P.B([$.al,500,$.b3,500,$.aX,100,$.u,50],t,m))
e0.C=!0
e0.x1="provides the requisite amount of gigglesnort  hideytalk to be fairly useful, AND the underlings seem to go after it first! Bonus! "
d9=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Snake","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d9.p("Snake",null)
d9.y1=!0
d9.a$.q(P.B([$.al,500,$.b3,500,$.aX,100,$.u,10],t,m))
d9.C=!0
d9.x1="providessss the requisssssite amount of gigglessssssnort hideytalk to be jusssssst barely helpful. AND the underlings seem to go after it first! Bonus! "
d8=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Axolotl","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d8.p("Axolotl",null)
d8.a$.q(P.B([$.u,20,$.al,50,$.b3,50],t,m))
d8.C=!0
d8.x1="provides the requisite amount of gigglesnort  hideytalk to be fairly useful, AND the underlings seem to go after it first! Bonus! "
d7=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Newt","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d7.p("Newt",null)
d7.a$.q(P.B([$.u,20],t,m))
d7.C=!0
d7.x1="provides the requisite amount of gigglesnort  hideytalk to be fairly useful, AND the underlings seem to go after it first! Bonus! "
$.tj=H.a([e6,e5,e4,e3,e2,e1,e0,d9,d8,d7],e7)
d7=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"First Guardian","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d7.p("First Guardian",null)
d7.y2=!0
d7.a$.q(P.B([$.al,1000,$.b3,1000,$.aX,500,$.u,250],t,m))
d7.x1="is fairly helpful with the teleporting and all, but when it speaks- Wow. No. That is not ok. "
d8=d7.fy
d9=Z.aE("Atomic Teleport Spam",3,null,"")
e0=d9.r
e0.push(new Z.Z($.aX,0,!1,0,1,2,3,""))
e0.push(new Z.Z($.aX,2,!0,0,1,2,3,""))
d9.e=" The OWNER shimers with radioactive stars, and then teleports behind the ENEMY, sneak-attacking them. "
d8.push(d9)
d9=Y.cW("Horror Terror")
d8=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,d9,"provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d8.p(d9,null)
d8.a$.q(P.B([$.al,500,$.b3,500,$.bu,250,$.u,150],t,m))
d8.y2=!0
d8.fx=!0
d8.x1="... Oh god. What is going on. Why does just listening to it make your ears bleed!? "
d9=d8.fy
e0=Z.aE("Vast Glub",3,null,"")
e0.r.push(new Z.Z($.bu,3,!0,0,1,2,3,""))
e0.e=" A galaxy spanning glub damages everyone. The only hope of survival is to spread the damage across so many enemies that everyone only takes a manageable amount. "
d9.push(e0)
e0=Y.cW("Speaker of the Furthest Ring")
d9=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,e0,"provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d9.p(e0,null)
d9.y2=!0
d9.fx=!0
d9.a$.q(P.B([$.al,1000,$.b3,1000,$.bu,250,$.u,250],t,m))
d9.x1="whispers madness humankind was not meant to know. Its words are painful, hateful, yet\u2026 tempting. It speaks of flames and void, screams and gods. "
e0=d9.fy
e1=Z.aE("Vast Glub",3,null,"")
e1.r.push(new Z.Z($.bu,3,!0,0,1,2,3,""))
e1.e=" A galaxy spanning glub damages everyone. The only hope of survival is to spread the damage across so many enemies that everyone only takes a manageable amount. "
e0.push(e1)
e1=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Clown","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e1.p("Clown",null)
e1.y2=!0
e1.a$.q(P.B([$.al,1000,$.b3,1000,$.c5,-250,$.bE,250,$.u,100],t,m))
e1.x2=-1
e1.x1="goes hehehehehehehehehehehehehehehehehehehehehehehehehehe. "
e0=e1.fy
e2=Z.aE("Can't Keep Down The Clown",3,null,"")
e3=e2.r
e3.push(new Z.Z($.aY,0,!1,0,1,2,3,""))
e3.push(new Z.Z($.aY,0,!0,0,1,2,3,""))
e2.e=" You are pretty sure it is impossible for Clowns to die. "
e0.push(e2)
e2=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Puppet","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e2.p("Puppet",null)
e2.y2=!0
e2.a$.q(P.B([$.al,500,$.b3,500,$.bu,250,$.aX,250,$.c5,-250,$.bE,250,$.aY,250,$.u,100],t,m))
e2.x1="is the most unhelpful piece of shit in the world. Oh my god, just once. Please, just shut up. "
e2.x2=-1
e0=e2.fy
e3=Z.aE("Hee Hee Hee Hoo!",3,null,"")
e4=e3.r
e4.push(new Z.Z($.aY,3,!1,0,1,2,3,""))
e4.push(new Z.Z($.aY,3,!0,0,1,2,3,""))
e3.e=" Oh god! Shut up! Just once! Please shut up! "
e0.push(e3)
e3=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Xenomorph","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e3.p("Xenomorph",null)
e3.y2=!0
e3.a$.q(P.B([$.al,500,$.b3,500,$.aX,250,$.u,100],t,m))
e0=e3.fy
e4=Z.aE("Spawning",3,null,"")
e4.r.push(new Z.Z($.d4,3,!0,0,1,2,3,""))
e4.e=" Oh god. Where are all those baby monsters coming from. They are everywhere! Fuck! How are they so good at biting??? "
e0.push(e4)
e4=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Deadpool","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e4.p("Deadpool",null)
e4.y2=!0
e4.a$.q(P.B([$.al,500,$.b3,500,$.aX,250,$.c5,-250,$.bE,250,$.u,100],t,m))
e4.x2=1
e4.x1="demonstrates that when it comes to providing fourth wall breaking advice to getting through quests and killing baddies, he is pretty much the best there is. "
e0=e4.fy
e5=Z.aE("Degenerate Regeneration",3,null,"")
e5.r.push(new Z.Z($.al,0,!0,0,1,2,3,""))
e5.e=" Hey there, Observer! Want to see a neat trick? POW! Grew my own head back. Pretty cool, huh? (Now if only JR would let me spam this or make it be castable even while dead, THEN we'd be cooking with petrol) "
e0.push(e5)
e5=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Dragon","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e5.p("Dragon",null)
e5.y2=!0
e5.a$.q(P.B([$.al,500,$.b3,500,$.u,100],t,m))
e5.x1="breathes fire and offers condescending, yet useful advice. "
e0=e5.fy
e6=Z.aE("Mighty Fire Breath",3,null,"")
e6.r.push(new Z.Z($.u,3,!0,0,1,2,3,""))
e6.e=" With a mighty breath, OWNER spits all the fires, sick and otherwise."
e0.push(e6)
e6=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Teacher","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e6.p("Teacher",null)
e6.y2=!0
e6.a$.q(P.B([$.al,500,$.b3,500,$.u,100],t,m))
e6.x2=-1
e6.x1="dials the sprites natural tendency towards witholding information to have you 'figure it out yourself' up to eleven. "
e0=e6.fy
d6=Z.aE("Lecture",3,null,"")
d5=d6.r
d5.push(new Z.Z($.bu,3,!1,0,1,2,3,""))
d5.push(new Z.Z($.aY,3,!1,0,1,2,3,""))
d6.e=" OWNER begins a 3 part lecture on why you should probably just give up. It is hypnotic in it's ceaselessness."
e0.push(d6)
d6=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Fiduspawn","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d6.p("Fiduspawn",null)
d6.y2=!0
d6.a$.q(P.B([$.al,500,$.b3,500,$.u,100],t,m))
e0=d6.fy
d5=Z.aE("Spawning",3,null,"")
d5.r.push(new Z.Z($.d4,3,!0,0,1,2,3,""))
d5.e=" Oh god. Where are all those baby monsters coming from. They are everywhere! Fuck! How are they so good at biting??? "
e0.push(d5)
d5=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Doll","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d5.p("Doll",null)
d5.y2=!0
d5.a$.q(P.B([$.al,500,$.b3,500,$.u,100],t,m))
d5.x2=-1
d5.x1="stares creepily. It never moves when you're watching it. It's basically the worst, and that's all there is to say on that topic. "
e0=d5.fy
d4=Z.aE("Disconcerting Ogle",3,null,"")
d3=d4.r
d3.push(new Z.Z($.aY,3,!1,0,1,2,3,""))
d3.push(new Z.Z($.aY,0,!0,0,1,2,3,""))
d4.e=" OWNER is staring at ENEMY. It makes you uncomfortable, the way they are just standing there. And watching.  "
e0.push(d4)
d4=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Zombie","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d4.p("Zombie",null)
d4.y2=!0
d4.a$.q(P.B([$.al,500,$.b3,500,$.u,100],t,m))
e0=d4.fy
d3=Z.aE("Rise From The Grave",3,null,"")
d3.r.push(new Z.Z($.al,0,!0,0,1,2,3,""))
d3.e=" You thought the OWNER was pretty hurt, but instead they are just getting going. "
e0.push(d3)
d3=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Demon","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d3.p("Demon",null)
d3.y2=!0
d3.a$.q(P.B([$.al,500,$.b3,500,$.bu,250,$.u,250],t,m))
e0=d3.fy
d2=Z.aE("Claw Claw MotherFuckers",3,null,"")
d1=d2.r
d1.push(new Z.Z($.u,2,!0,0,1,2,3,""))
d1.push(new Z.Z($.u,2,!0,0,1,2,3,""))
d2.e=" The OWNER slashes at the ENEMY twice. "
e0.push(d2)
d2=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Monster","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d2.p("Monster",null)
d2.y2=!0
d2.a$.q(P.B([$.al,500,$.b3,500,$.aY,-250,$.bE,250,$.u,100],t,m))
e0=d2.fy
d1=Z.aE("Claw Claw MotherFuckers",3,null,"")
d0=d1.r
d0.push(new Z.Z($.u,2,!0,0,1,2,3,""))
d0.push(new Z.Z($.u,2,!0,0,1,2,3,""))
d1.e=" The OWNER slashes at the ENEMY twice. "
e0.push(d1)
d1=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Vampire","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d1.p("Vampire",null)
d1.y2=!0
d1.a$.q(P.B([$.al,500,$.b3,500,$.aX,250,$.u,100],t,m))
e0=d1.fy
d0=Z.aE("I Vant to Drink Your Blood",3,null,"")
c9=d0.r
c9.push(new Z.Z($.al,2,!0,0,1,2,3,""))
c9.push(new Z.Z($.al,0,!0,0,1,2,3,""))
d0.e=" The OWNER drains HP from the ENEMY. "
e0.push(d0)
d0=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Pumpkin","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d0.p("Pumpkin",null)
d0.y2=!0
d0.a$.q(P.B([$.al,500,$.b3,500,$.aX,5000,$.c5,-250,$.bE,5000,$.u,100],t,m))
d0.x1="was kind of helpful, and then kind of didn\u2019t exist. Please don\u2019t think too hard about it, the simulation is barely handling a pumpkin sprite as is. "
e0=d0.fy
c9=Z.aE("What Pumpkin???",3,null,"")
c8=c9.r
c8.push(new Z.Z($.aX,2,!1,0,1,2,3,""))
c8.push(new Z.Z($.aX,3,!0,0,1,2,3,""))
c9.e=" Everyone tries to hit the OWNER until suddenly they have never been there at all, causing attacks to miss so catastrophically they backfire. "
e0.push(c9)
c9=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Werewolf","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c9.p("Werewolf",null)
c9.y2=!0
c9.a$.q(P.B([$.al,500,$.b3,500,$.aY,-250,$.u,100],t,m))
e0=c9.fy
c8=Z.aE("Grim Bark Slash Attack",3,null,"")
c7=c8.r
c7.push(new Z.Z($.u,2,!0,0,1,2,3,""))
c7.push(new Z.Z($.u,2,!0,0,1,2,3,""))
c8.e=" The OWNER slashes at the ENEMY twice. While being a werewolf. "
e0.push(c8)
c8=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Jet Engine","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c8.p("Jet Engine",null)
c8.y2=!0
c8.a$.q(P.B([$.al,500,$.b3,500,$.aX,500,$.u,100],t,m))
e0=c8.fy
c7=Z.aE("NO  CAPES",3,null,"")
c6=c7.r
c6.push(new Z.Z($.u,2,!0,0,1,2,3,""))
c6.push(new Z.Z($.u,2,!0,0,1,2,3,""))
c7.e=" The OWNER sucks the ENEMY in towards their spinning blades of death. "
e0.push(c7)
c7=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Monkey","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c7.p("Monkey",null)
c7.y2=!0
c7.x2=-1
c7.a$.q(P.B([$.al,5,$.b3,5,$.aX,5000,$.c5,-5000,$.bE,-5000,$.u,100],t,m))
c7.x1="actively interferes with quests. Just. Fuck monkeys. "
e0=c7.fy
c6=Z.aE("Monkey Business",3,null,"")
c5=c6.r
c5.push(new Z.Z($.aX,0,!1,0,1,2,3,""))
c5.push(new Z.Z($.aX,2,!0,0,1,2,3,""))
c6.e=" The OWNER uses their monkey like fastness to attack the ENEMY just way too fucking many times. "
e0.push(c6)
$.ti=H.a([d7,d8,d9,e1,e2,e3,e4,e5,e6,d6,d5,d4,d3,d2,d1,d0,c9,c8,c7],e7)
c7=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Hoofbeast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c7.p("Hoofbeast",null)
c7.t=!0
c7.a$.q(P.B([$.u,30],t,m))
c8=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Meow Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c8.p("Meow Beast",null)
c8.t=!0
c8.a$.q(P.B([$.u,30,$.c5,20,$.bE,20],t,m))
c8.x1="is kind of helpful? Maybe? You can't tell if it loves their player or hates them. "
c9=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Bark Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c9.p("Bark Beast",null)
c9.t=!0
c9.a$.q(P.B([$.u,40],t,m))
c9.x1="alternates between loud, insistent barks and long, eloquent monologues on the deeper meaning behind each and every fragment of the game. "
d0=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Nut Creature","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d0.p("Nut Creature",null)
d0.t=!0
d0.a$.q(P.B([$.u,30,$.aX,30],t,m))
d1=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Gobblefiend","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d1.p("Gobblefiend",null)
d1.t=!0
d1.a$.q(P.B([$.u,50],t,m))
d1.x2=-1
d1.x1="is the most unhelpful piece of shit in the world. Oh my god, just once. Please, just shut up. "
d2=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Bicyclops","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d2.p("Bicyclops",null)
d2.t=!0
d2.a$.q(P.B([$.u,30],t,m))
d3=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Centaur","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d3.p("Centaur",null)
d3.t=!0
d3.a$.q(P.B([$.u,50,$.aY,50],t,m))
d4=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Fairy Bull","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d4.p("Fairy Bull",null)
d4.t=!0
d4.a$.q(P.B([$.u,1],t,m))
d5=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Slither Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d5.p("Slither Beast",null)
d5.t=!0
d5.a$.q(P.B([$.u,30],t,m))
d5.y1=!0
d6=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Wiggle Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d6.p("Wiggle Beast",null)
d6.t=!0
d6.a$.q(P.B([$.u,30],t,m))
e6=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Honkbird","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e6.p("Honkbird",null)
e6.t=!0
e6.a$.q(P.B([$.u,30],t,m))
e5=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Dig Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e5.p("Dig Beast",null)
e5.t=!0
e5.a$.q(P.B([$.u,30],t,m))
e4=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Cholerbear","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e4.p("Cholerbear",null)
e4.t=!0
e4.a$.q(P.B([$.u,50],t,m))
e3=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Antler Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e3.p("Antler Beast",null)
e3.t=!0
e3.a$.q(P.B([$.u,30,$.aX,30],t,m))
e2=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Ram Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e2.p("Ram Beast",null)
e2.t=!0
e2.a$.q(P.B([$.u,30],t,m))
e1=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Crab","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e1.p("Crab",null)
e1.t=!0
e1.a$.q(P.B([$.u,30],t,m))
d9=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Spider","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d9.p("Spider",null)
d9.t=!0
d9.a$.q(P.B([$.u,30],t,m))
d8=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Thief Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d8.p("Thief Beast",null)
d8.t=!0
d8.a$.q(P.B([$.u,30],t,m))
d7=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"March Bug","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d7.p("March Bug",null)
d7.t=!0
d7.a$.q(P.B([$.u,30],t,m))
c6=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Nibble Vermin","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c6.p("Nibble Vermin",null)
c6.t=!0
c6.a$.q(P.B([$.u,30],t,m))
e0=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Woolbeast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e0.p("Woolbeast",null)
e0.t=!0
e0.a$.q(P.B([$.u,30],t,m))
c5=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Hop Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c5.p("Hop Beast",null)
c5.t=!0
c5.a$.q(P.B([$.u,30,$.bE,30],t,m))
c4=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Stink Creature","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c4.p("Stink Creature",null)
c4.t=!0
c4.a$.q(P.B([$.u,30],t,m))
c3=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Speed Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c3.p("Speed Beast",null)
c3.t=!0
c3.a$.q(P.B([$.u,30,$.aX,50],t,m))
c2=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Jump Creature","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c2.p("Jump Creature",null)
c2.t=!0
c2.a$.q(P.B([$.u,30],t,m))
c1=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Fight Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c1.p("Fight Beast",null)
c1.t=!0
c1.a$.q(P.B([$.u,50],t,m))
c0=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Claw Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c0.p("Claw Beast",null)
c0.t=!0
c0.a$.q(P.B([$.u,50],t,m))
b8=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Tooth Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b8.p("Tooth Beast",null)
b8.t=!0
b8.a$.q(P.B([$.u,50],t,m))
b9=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Armor Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b9.p("Armor Beast",null)
b9.a$.q(P.B([$.u,30,$.b3,100,$.al,100],t,m))
b9.t=!0
b7=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Trap Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b7.p("Trap Beast",null)
b7.t=!0
b7.a$.q(P.B([$.u,30],t,m))
$.tk=H.a([c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,e6,e5,e4,e3,e2,e1,d9,d8,d7,c6,e0,c5,c4,c3,c2,c1,c0,b8,b9,b7],e7)
e7=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Zap Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e7.p("Zap Beast",null)
e7.t=!0
e7.a$.q(P.B([$.u,50],t,m))
b7=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sea Slither Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b7.p("Sea Slither Beast",null)
b7.t=!0
b7.a$.q(P.B([$.u,30],t,m))
b7.y1=!0
b9=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Electric Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b9.p("Electric Beast",null)
b9.t=!0
b9.a$.q(P.B([$.u,50],t,m))
b9.y1=!0
b8=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Whale","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b8.p("Whale",null)
b8.a$.q(P.B([$.u,30,$.b3,50,$.al,50],t,m))
b8.t=!0
b8.y1=!0
c0=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sky Horse","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c0.p("Sky Horse",null)
c0.t=!0
c0.a$.q(P.B([$.u,30,$.aX,20],t,m))
c1=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sea Meow Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c1.p("Sea Meow Beast",null)
c1.t=!0
c1.a$.q(P.B([$.u,30,$.c5,20,$.bE,20],t,m))
c2=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sea Hoofbeast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c2.p("Sea Hoofbeast",null)
c2.t=!0
c2.a$.q(P.B([$.u,30],t,m))
c3=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Cuttlefish","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c3.p("Cuttlefish",null)
c3.t=!0
c3.a$.q(P.B([$.u,30],t,m))
c4=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Swim Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c4.p("Swim Beast",null)
c4.t=!0
c4.a$.q(P.B([$.u,30],t,m))
c5=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sea Goat","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c5.p("Sea Goat",null)
c5.t=!0
c5.a$.q(P.B([$.u,30,$.c5,-30,$.bE,30],t,m))
e0=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Light Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e0.p("Light Beast",null)
e0.a$.q(P.B([$.u,30],t,m))
c6=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Dive Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c6.p("Dive Beast",null)
c6.t=!0
c6.a$.q(P.B([$.u,30],t,m))
d7=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Honkbird","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d7.p("Honkbird",null)
d7.t=!0
d7.a$.q(P.B([$.u,30],t,m))
d8=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sea Bear","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d8.p("Sea Bear",null)
d8.t=!0
d8.a$.q(P.B([$.u,30],t,m))
o=new F.A("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sea Armorbeast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
o.p("Sea Armorbeast",null)
o.t=!0
o.a$.q(P.B([$.u,30,$.b3,50,$.al,50],t,m))
$.tl=H.a([e7,b7,b9,b8,c0,c1,c2,c3,c4,c5,e0,c6,d7,d8,o],[F.A])
o=$.f9;(o&&C.a).W(o,$.ti)
o=$.f9;(o&&C.a).W(o,$.tj)
o=$.f9;(o&&C.a).W(o,$.tk)
o=$.f9;(o&&C.a).W(o,$.tl)},
mD:function mD(){},
e0:function e0(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,a$){var _=this
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
jf:function jf(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,a$){var _=this
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
A:function A(x1,x2,y1,y2,t,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,a$){var _=this
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.t=t
_.B=B
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
_.r2=r2
_.rx=rx
_.ry=ry
_.a$=a$},
oQ:function oQ(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
E6:function(a,b){return new F.f4(!1,a)},
iR:function(a){if(a===C.v){window
return C.m.gbc(C.m)}if(a===C.w){window
return C.m.gkK()}if(a===C.a7){window
return C.m.gjU()}return P.G_()},
f3:function f3(a,b){this.a=a
this.b=b},
f4:function f4(a,b){this.a=a
this.b=b}}
var v=[C,H,J,P,W,T,S,E,D,K,L,M,O,Y,Z,A,V,U,Q,X,N,B,G,R,F]
setFunctionNamesIfNecessary(v)
var $={}
H.tb.prototype={}
J.a_.prototype={
O:function(a,b){return a===b},
ga4:function(a){return H.es(a)},
u:function(a){return H.n5(a)},
ga6:function(a){return new H.dB(H.hM(a),null)},
$isfS:1,
$isb5:1}
J.m0.prototype={
u:function(a){return String(a)},
ga4:function(a){return a?519018:218159},
ga6:function(a){return C.ap},
$iscK:1}
J.iP.prototype={
O:function(a,b){return null==b},
u:function(a){return"null"},
ga4:function(a){return 0},
ga6:function(a){return C.aj},
$isdz:1}
J.fX.prototype={
ga4:function(a){return 0},
ga6:function(a){return C.ai},
u:function(a){return String(a)},
$isvK:1}
J.n0.prototype={}
J.ey.prototype={}
J.eq.prototype={
u:function(a){var t=a[$.$get$uC()]
return t==null?this.hR(a):J.cm(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.eo.prototype={
d_:function(a,b){if(!!a.immutable$list)throw H.m(new P.aN(b))},
bs:function(a,b){if(!!a.fixed$length)throw H.m(new P.aN(b))},
h:function(a,b){this.bs(a,"add")
a.push(b)},
an:function(a,b){var t
this.bs(a,"remove")
for(t=0;t<a.length;++t)if(J.a5(a[t],b)){a.splice(t,1)
return!0}return!1},
fd:function(a,b,c){var t,s,r,q,p
t=[]
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q)!==!0===c)t.push(q)
if(a.length!==s)throw H.m(new P.bT(a))}p=t.length
if(p===s)return
this.sn(a,p)
for(r=0;r<t.length;++r)a[r]=t[r]},
b0:function(a,b){return new H.bv(a,b,[H.I(a,0)])},
W:function(a,b){var t
this.bs(a,"addAll")
for(t=J.bC(b);t.w();)a.push(t.gG())},
aZ:function(a,b){return new H.dh(a,b,[H.I(a,0),null])},
c3:function(a,b){var t,s,r,q
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<a.length;++r){q=H.n(a[r])
if(r>=t)return H.J(s,r)
s[r]=q}return s.join(b)},
eI:function(a,b){return H.we(a,b,null,H.I(a,0))},
jJ:function(a,b,c){var t,s,r
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.m(new P.bT(a))}return s},
Y:function(a,b){if(b>>>0!==b||b>=a.length)return H.J(a,b)
return a[b]},
eM:function(a,b,c){if(b<0||b>a.length)throw H.m(P.bJ(b,0,a.length,"start",null))
if(c==null)c=a.length
else{if(typeof c!=="number"||Math.floor(c)!==c)throw H.m(H.bR(c))
if(c<b||c>a.length)throw H.m(P.bJ(c,b,a.length,"end",null))}if(b===c)return H.a([],[H.I(a,0)])
return H.a(a.slice(b,c),[H.I(a,0)])},
gV:function(a){if(a.length>0)return a[0]
throw H.m(H.d1())},
gc4:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.m(H.d1())},
a3:function(a,b,c,d,e){var t,s,r
this.d_(a,"setRange")
P.di(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.bq(P.bJ(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.m(H.vJ())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r>>>0!==r||r>=d.length)return H.J(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r>>>0!==r||r>=d.length)return H.J(d,r)
a[b+s]=d[r]}},
b9:function(a,b,c,d){return this.a3(a,b,c,d,0)},
cv:function(a,b,c,d){var t
this.d_(a,"fill range")
P.di(b,c,a.length,null,null,null)
for(t=b;t<c;++t)a[t]=d},
b7:function(a,b,c,d){var t,s,r,q,p,o
this.bs(a,"replaceRange")
P.di(b,c,a.length,null,null,null)
d=C.d.ax(d)
if(typeof c!=="number")return c.aE()
t=c-b
s=d.length
r=b+s
q=a.length
if(t>=s){p=t-s
o=q-p
this.b9(a,b,r,d)
if(p!==0){this.a3(a,r,o,a,c)
this.sn(a,o)}}else{o=q+(s-t)
this.sn(a,o)
this.a3(a,r,o,a,c)
this.b9(a,b,r,d)}},
fo:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])===!0)return!0
if(a.length!==t)throw H.m(new P.bT(a))}return!1},
jG:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])!==!0)return!1
if(a.length!==t)throw H.m(new P.bT(a))}return!0},
eK:function(a,b){var t
this.d_(a,"sort")
t=b==null?P.FZ():b
H.je(a,0,a.length-1,t)},
eJ:function(a){return this.eK(a,null)},
c1:function(a,b,c){var t
if(c>=a.length)return-1
if(c<0)c=0
for(t=c;t<a.length;++t)if(J.a5(a[t],b))return t
return-1},
be:function(a,b){return this.c1(a,b,0)},
T:function(a,b){var t
for(t=0;t<a.length;++t)if(J.a5(a[t],b))return!0
return!1},
gX:function(a){return a.length===0},
u:function(a){return P.en(a,"[","]")},
ae:function(a,b){var t=H.a(a.slice(0),[H.I(a,0)])
return t},
ax:function(a){return this.ae(a,!0)},
gP:function(a){return new J.dF(a,a.length,0,null,[H.I(a,0)])},
ga4:function(a){return H.es(a)},
gn:function(a){return a.length},
sn:function(a,b){this.bs(a,"set length")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(P.fC(b,"newLength",null))
if(b<0)throw H.m(P.bJ(b,0,null,"newLength",null))
a.length=b},
m:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(H.c6(a,b))
if(b>=a.length||b<0)throw H.m(H.c6(a,b))
return a[b]},
i:function(a,b,c){this.d_(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(H.c6(a,b))
if(b>=a.length||b<0)throw H.m(H.c6(a,b))
a[b]=c},
$iscb:1,
$ascb:function(){},
$isH:1,
$asH:null,
$isM:1,
$asM:null,
$isz:1,
$asz:null}
J.ta.prototype={}
J.dF.prototype={
gG:function(){return this.d},
w:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.m(H.bp(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.f2.prototype={
aU:function(a,b){var t
if(typeof b!=="number")throw H.m(H.bR(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gee(b)
if(this.gee(a)===t)return 0
if(this.gee(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gee:function(a){return a===0?1/a<0:a<0},
bd:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.m(new P.aN(""+a+".floor()"))},
a5:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.m(new P.aN(""+a+".round()"))},
ac:function(a,b,c){if(this.aU(b,c)>0)throw H.m(H.bR(b))
if(this.aU(a,b)<0)return b
if(this.aU(a,c)>0)return c
return a},
l:function(a){return a},
bN:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.m(P.bJ(b,2,36,"radix",null))
t=a.toString(b)
if(C.d.a7(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.bq(new P.aN("Unexpected toString result: "+t))
r=J.bo(s)
t=r.m(s,1)
q=+r.m(s,3)
if(r.m(s,2)!=null){t+=r.m(s,2)
q-=r.m(s,2).length}return t+C.d.aJ("0",q)},
u:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga4:function(a){return a&0x1FFFFFFF},
eC:function(a){return-a},
af:function(a,b){if(typeof b!=="number")throw H.m(H.bR(b))
return a+b},
aE:function(a,b){if(typeof b!=="number")throw H.m(H.bR(b))
return a-b},
aJ:function(a,b){if(typeof b!=="number")throw H.m(H.bR(b))
return a*b},
dq:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
aB:function(a,b){return(a|0)===a?a/b|0:this.iX(a,b)},
iX:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.m(new P.aN("Result of truncating division is "+H.n(t)+": "+H.n(a)+" ~/ "+H.n(b)))},
bq:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
iV:function(a,b){if(b<0)throw H.m(H.bR(b))
return b>31?0:a>>>b},
a0:function(a,b){if(typeof b!=="number")throw H.m(H.bR(b))
return a<b},
b8:function(a,b){if(typeof b!=="number")throw H.m(H.bR(b))
return a>b},
bA:function(a,b){if(typeof b!=="number")throw H.m(H.bR(b))
return a>=b},
ga6:function(a){return C.as},
$iscj:1}
J.iO.prototype={
ga6:function(a){return C.ar},
$isT:1,
$iscj:1,
$isN:1}
J.iN.prototype={
ga6:function(a){return C.aq},
$isT:1,
$iscj:1}
J.ep.prototype={
a7:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(H.c6(a,b))
if(b<0)throw H.m(H.c6(a,b))
if(b>=a.length)H.bq(H.c6(a,b))
return a.charCodeAt(b)},
ag:function(a,b){if(b>=a.length)throw H.m(H.c6(a,b))
return a.charCodeAt(b)},
jb:function(a,b,c){if(c>b.length)throw H.m(P.bJ(c,0,b.length,null,null))
return new H.q1(b,a,c)},
ja:function(a,b){return this.jb(a,b,0)},
af:function(a,b){if(typeof b!=="string")throw H.m(P.fC(b,null,null))
return a+b},
kw:function(a,b,c){return H.jM(a,b,c)},
kx:function(a,b,c){return H.Gs(a,b,c,null)},
hL:function(a,b){var t=a.split(b)
return t},
b7:function(a,b,c,d){var t,s
H.tO(b)
c=P.di(b,c,a.length,null,null,null)
H.tO(c)
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
ba:function(a,b,c){var t
H.tO(c)
if(typeof c!=="number")return c.a0()
if(c<0||c>a.length)throw H.m(P.bJ(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
aL:function(a,b){return this.ba(a,b,0)},
N:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.bq(H.bR(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.bq(H.bR(c))
if(typeof b!=="number")return b.a0()
if(b<0)throw H.m(P.hj(b,null,null))
if(typeof c!=="number")return H.aK(c)
if(b>c)throw H.m(P.hj(b,null,null))
if(c>a.length)throw H.m(P.hj(c,null,null))
return a.substring(b,c)},
aS:function(a,b){return this.N(a,b,null)},
kG:function(a){return a.toLowerCase()},
kI:function(a){return a.toUpperCase()},
aJ:function(a,b){var t,s
if(typeof b!=="number")return H.aK(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.m(C.R)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
h2:function(a,b,c){var t=b-a.length
if(t<=0)return a
return this.aJ(c,t)+a},
c1:function(a,b,c){var t
if(c<0||c>a.length)throw H.m(P.bJ(c,0,a.length,null,null))
t=a.indexOf(b,c)
return t},
be:function(a,b){return this.c1(a,b,0)},
fF:function(a,b,c){if(c>a.length)throw H.m(P.bJ(c,0,a.length,null,null))
return H.Gr(a,b,c)},
T:function(a,b){return this.fF(a,b,0)},
gX:function(a){return a.length===0},
aU:function(a,b){var t
if(typeof b!=="string")throw H.m(H.bR(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
u:function(a){return a},
ga4:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
ga6:function(a){return C.ak},
gn:function(a){return a.length},
m:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(H.c6(a,b))
if(b>=a.length||b<0)throw H.m(H.c6(a,b))
return a[b]},
$iscb:1,
$ascb:function(){},
$isv:1}
H.kq.prototype={
gn:function(a){return this.a.length},
m:function(a,b){return C.d.a7(this.a,b)},
$asht:function(){return[P.N]},
$ash1:function(){return[P.N]},
$asf8:function(){return[P.N]},
$asH:function(){return[P.N]},
$asM:function(){return[P.N]},
$asz:function(){return[P.N]}}
H.M.prototype={$asM:null}
H.er.prototype={
gP:function(a){return new H.dx(this,this.gn(this),0,null,[H.ap(this,"er",0)])},
gX:function(a){return this.gn(this)===0},
gV:function(a){if(this.gn(this)===0)throw H.m(H.d1())
return this.Y(0,0)},
T:function(a,b){var t,s
t=this.gn(this)
for(s=0;s<t;++s){if(J.a5(this.Y(0,s),b))return!0
if(t!==this.gn(this))throw H.m(new P.bT(this))}return!1},
c3:function(a,b){var t,s,r,q
t=this.gn(this)
if(b.length!==0){if(t===0)return""
s=H.n(this.Y(0,0))
if(t!==this.gn(this))throw H.m(new P.bT(this))
for(r=s,q=1;q<t;++q){r=r+b+H.n(this.Y(0,q))
if(t!==this.gn(this))throw H.m(new P.bT(this))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<t;++q){r+=H.n(this.Y(0,q))
if(t!==this.gn(this))throw H.m(new P.bT(this))}return r.charCodeAt(0)==0?r:r}},
b0:function(a,b){return this.hQ(0,b)},
aZ:function(a,b){return new H.dh(this,b,[H.ap(this,"er",0),null])},
kq:function(a,b){var t,s,r
t=this.gn(this)
if(t===0)throw H.m(H.d1())
s=this.Y(0,0)
for(r=1;r<t;++r){s=b.$2(s,this.Y(0,r))
if(t!==this.gn(this))throw H.m(new P.bT(this))}return s},
ae:function(a,b){var t,s,r
t=H.a([],[H.ap(this,"er",0)])
C.a.sn(t,this.gn(this))
for(s=0;s<this.gn(this);++s){r=this.Y(0,s)
if(s>=t.length)return H.J(t,s)
t[s]=r}return t},
ax:function(a){return this.ae(a,!0)}}
H.o9.prototype={
gix:function(){var t=J.cl(this.a)
return t},
giW:function(){var t,s
t=J.cl(this.a)
s=this.b
if(J.cw(s,t))return t
return s},
gn:function(a){var t,s
t=J.cl(this.a)
s=this.b
if(J.ue(s,t))return 0
if(typeof s!=="number")return H.aK(s)
return t-s},
Y:function(a,b){var t=J.cM(this.giW(),b)
if(J.dX(b,0)||J.ue(t,this.gix()))throw H.m(P.cU(b,this,"index",null,null))
return J.r2(this.a,t)},
ae:function(a,b){var t,s,r,q,p,o,n,m
t=this.b
s=this.a
r=J.bo(s)
q=r.gn(s)
if(typeof t!=="number")return H.aK(t)
p=q-t
if(p<0)p=0
o=this.$ti
if(b){n=H.a([],o)
C.a.sn(n,p)}else n=H.a(new Array(p),o)
for(m=0;m<p;++m){o=r.Y(s,t+m)
if(m>=n.length)return H.J(n,m)
n[m]=o
if(r.gn(s)<q)throw H.m(new P.bT(this))}return n},
ax:function(a){return this.ae(a,!0)},
i8:function(a,b,c,d){var t=this.b
if(J.dX(t,0))H.bq(P.bJ(t,0,null,"start",null))}}
H.dx.prototype={
gG:function(){return this.d},
w:function(){var t,s,r,q
t=this.a
s=J.bo(t)
r=s.gn(t)
if(this.b!==r)throw H.m(new P.bT(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.Y(t,q);++this.c
return!0}}
H.h2.prototype={
gP:function(a){return new H.iS(null,J.bC(this.a),this.b,this.$ti)},
gn:function(a){return J.cl(this.a)},
gX:function(a){return J.jQ(this.a)},
gV:function(a){return this.b.$1(J.ug(this.a))},
Y:function(a,b){return this.b.$1(J.r2(this.a,b))},
$asz:function(a,b){return[b]}}
H.i4.prototype={$isM:1,
$asM:function(a,b){return[b]},
$asz:function(a,b){return[b]}}
H.iS.prototype={
w:function(){var t=this.b
if(t.w()){this.a=this.c.$1(t.gG())
return!0}this.a=null
return!1},
gG:function(){return this.a},
$asiM:function(a,b){return[b]}}
H.dh.prototype={
gn:function(a){return J.cl(this.a)},
Y:function(a,b){return this.b.$1(J.r2(this.a,b))},
$aser:function(a,b){return[b]},
$asM:function(a,b){return[b]},
$asz:function(a,b){return[b]}}
H.bv.prototype={
gP:function(a){return new H.dV(J.bC(this.a),this.b,this.$ti)},
aZ:function(a,b){return new H.h2(this,b,[H.I(this,0),null])}}
H.dV.prototype={
w:function(){var t,s
for(t=this.a,s=this.b;t.w();)if(s.$1(t.gG())===!0)return!0
return!1},
gG:function(){return this.a.gG()}}
H.ik.prototype={
sn:function(a,b){throw H.m(new P.aN("Cannot change the length of a fixed-length list"))},
b7:function(a,b,c,d){throw H.m(new P.aN("Cannot remove from a fixed-length list"))}}
H.ox.prototype={
i:function(a,b,c){throw H.m(new P.aN("Cannot modify an unmodifiable list"))},
sn:function(a,b){throw H.m(new P.aN("Cannot change the length of an unmodifiable list"))},
a3:function(a,b,c,d,e){throw H.m(new P.aN("Cannot modify an unmodifiable list"))},
b9:function(a,b,c,d){return this.a3(a,b,c,d,0)},
b7:function(a,b,c,d){throw H.m(new P.aN("Cannot remove from an unmodifiable list"))},
cv:function(a,b,c,d){throw H.m(new P.aN("Cannot modify an unmodifiable list"))},
$isH:1,
$asH:null,
$isM:1,
$asM:null,
$isz:1,
$asz:null}
H.ht.prototype={$asH:null,$asM:null,$asz:null,$isH:1,$isM:1,$isz:1}
H.hk.prototype={
gn:function(a){return J.cl(this.a)},
Y:function(a,b){var t,s,r
t=this.a
s=J.bo(t)
r=s.gn(t)
if(typeof b!=="number")return H.aK(b)
return s.Y(t,r-1-b)}}
H.qV.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.qW.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.pH.prototype={}
H.fl.prototype={
fm:function(a,b){if(!this.f.O(0,a))return
if(this.Q.h(0,b)&&!this.y)this.y=!0
this.dQ()},
ku:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.an(0,a)
if(t.a===0){for(t=this.z;s=t.length,s!==0;){if(0>=s)return H.J(t,-1)
r=t.pop()
s=u.globalState.f.a
q=s.b
p=s.a
o=p.length
q=(q-1&o-1)>>>0
s.b=q
if(q<0||q>=o)return H.J(p,q)
p[q]=r
if(q===s.c)s.f0();++s.d}this.y=!1}this.dQ()},
j7:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.am(a),s=0;r=this.ch,s<r.length;s+=2)if(t.O(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.J(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
ks:function(a){var t,s,r
if(this.ch==null)return
for(t=J.am(a),s=0;r=this.ch,s<r.length;s+=2)if(t.O(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.bq(new P.aN("removeRange"))
P.di(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
hx:function(a,b){if(!this.r.O(0,a))return
this.db=b},
jO:function(a,b,c){var t=J.am(b)
if(!t.O(b,0))t=t.O(b,1)&&!this.cy
else t=!0
if(t){J.fx(a,c)
return}t=this.cx
if(t==null){t=P.tf(null,null)
this.cx=t}t.bo(new H.pC(a,c))},
jN:function(a,b){var t
if(!this.r.O(0,a))return
t=J.am(b)
if(!t.O(b,0))t=t.O(b,1)&&!this.cy
else t=!0
if(t){this.df()
return}t=this.cx
if(t==null){t=P.tf(null,null)
this.cx=t}t.bo(this.gk6())},
jP:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.cE(a)
if(b!=null)P.cE(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.cm(a)
s[1]=b==null?null:J.cm(b)
for(r=new P.d6(t,t.r,null,null,[null]),r.c=t.e;r.w();)J.fx(r.d,s)},
cn:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.ck(o)
p=H.cL(o)
this.jP(q,p)
if(this.db===!0){this.df()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.gk5()
if(this.cx!=null)for(;n=this.cx,!n.gX(n);)this.cx.h8().$0()}return s},
fW:function(a){return this.b.m(0,a)},
eQ:function(a,b){var t=this.b
if(t.aj(0,a))throw H.m(P.kL("Registry: ports must be registered only once."))
t.i(0,a,b)},
dQ:function(){var t=this.b
if(t.gn(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.df()},
df:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.bb(0)
for(t=this.b,s=t.gay(t),s=s.gP(s);s.w();)s.gG().is()
t.bb(0)
this.c.bb(0)
u.globalState.z.an(0,this.a)
this.dx.bb(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.J(t,p)
J.fx(q,t[p])}this.ch=null}},
gk5:function(){return this.d},
gjq:function(){return this.e}}
H.pC.prototype={
$0:function(){J.fx(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.pd.prototype={
jx:function(){var t=this.a
if(t.b===t.c)return
return t.h8()},
hd:function(){var t,s,r
t=this.jx()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.aj(0,u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gX(s)}else s=!1
else s=!1
else s=!1
if(s)H.bq(P.kL("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gX(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.h_(["command","close"])
r=new H.dC(!0,new P.jv(0,null,null,null,null,null,0,[null,P.N])).b1(r)
s.toString
self.postMessage(r)}return!1}t.ko()
return!0},
fe:function(){if(self.window!=null)new H.pe(this).$0()
else for(;this.hd(););},
cF:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.fe()
else try{this.fe()}catch(r){t=H.ck(r)
s=H.cL(r)
q=u.globalState.Q
p=P.h_(["command","error","msg",H.n(t)+"\n"+H.n(s)])
p=new H.dC(!0,P.hC(null,P.N)).b1(p)
q.toString
self.postMessage(p)}}}
H.pe.prototype={
$0:function(){if(!this.a.hd())return
P.tz(C.E,this)},
$S:function(){return{func:1,v:true}}}
H.eB.prototype={
ko:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.cn(this.b)}}
H.pG.prototype={}
H.lL.prototype={
$0:function(){H.z4(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.lM.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.ft(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.ft(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.dQ()},
$S:function(){return{func:1,v:true}}}
H.p0.prototype={}
H.fm.prototype={
cL:function(a,b){var t,s,r
t=u.globalState.z.m(0,this.a)
if(t==null)return
s=this.b
if(s.gf4())return
r=H.FI(b)
if(t.gjq()===s){s=J.bo(r)
switch(s.m(r,0)){case"pause":t.fm(s.m(r,1),s.m(r,2))
break
case"resume":t.ku(s.m(r,1))
break
case"add-ondone":t.j7(s.m(r,1),s.m(r,2))
break
case"remove-ondone":t.ks(s.m(r,1))
break
case"set-errors-fatal":t.hx(s.m(r,1),s.m(r,2))
break
case"ping":t.jO(s.m(r,1),s.m(r,2),s.m(r,3))
break
case"kill":t.jN(s.m(r,1),s.m(r,2))
break
case"getErrors":s=s.m(r,1)
t.dx.h(0,s)
break
case"stopErrors":s=s.m(r,1)
t.dx.an(0,s)
break}return}u.globalState.f.a.bo(new H.eB(t,new H.pK(this,r),"receive"))},
O:function(a,b){if(b==null)return!1
return b instanceof H.fm&&J.a5(this.b,b.b)},
ga4:function(a){return this.b.gdI()}}
H.pK.prototype={
$0:function(){var t=this.a.b
if(!t.gf4())t.il(this.b)},
$S:function(){return{func:1}}}
H.hG.prototype={
cL:function(a,b){var t,s,r
t=P.h_(["command","message","port",this,"msg",b])
s=new H.dC(!0,P.hC(null,P.N)).b1(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.m(0,this.b)
if(r!=null)r.postMessage(s)}},
O:function(a,b){if(b==null)return!1
return b instanceof H.hG&&J.a5(this.b,b.b)&&J.a5(this.a,b.a)&&J.a5(this.c,b.c)},
ga4:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.bm()
s=this.a
if(typeof s!=="number")return s.bm()
r=this.c
if(typeof r!=="number")return H.aK(r)
return(t<<16^s<<8^r)>>>0}}
H.fd.prototype={
is:function(){this.c=!0
this.b=null},
il:function(a){if(this.c)return
this.b.$1(a)},
$isED:1,
gdI:function(){return this.a},
gf4:function(){return this.c}}
H.oq.prototype={
i9:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.bo(new H.eB(s,new H.or(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.hK(new H.os(this,b),0),a)}else throw H.m(new P.aN("Timer greater than 0."))}}
H.or.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.os.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.dH.prototype={
ga4:function(a){var t=this.a
if(typeof t!=="number")return t.hB()
t=C.e.bq(t,0)^C.e.aB(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
O:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.dH){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gdI:function(){return this.a}}
H.dC.prototype={
b1:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.m(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gn(t))
t=J.am(a)
if(!!t.$ish6)return["buffer",a]
if(!!t.$isf7)return["typed",a]
if(!!t.$iscb)return this.hs(a)
if(!!t.$isz1){r=this.ghp()
q=t.gad(a)
q=H.h3(q,r,H.ap(q,"z",0),null)
q=P.bf(q,!0,H.ap(q,"z",0))
t=t.gay(a)
t=H.h3(t,r,H.ap(t,"z",0),null)
return["map",q,P.bf(t,!0,H.ap(t,"z",0))]}if(!!t.$isvK)return this.ht(a)
if(!!t.$isa_)this.hi(a)
if(!!t.$isED)this.cH(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isfm)return this.hu(a)
if(!!t.$ishG)return this.hv(a)
if(!!t.$iseK){p=a.$static_name
if(p==null)this.cH(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isdH)return["capability",a.a]
if(!(a instanceof P.b5))this.hi(a)
return["dart",u.classIdExtractor(a),this.hr(u.classFieldsExtractor(a))]},
cH:function(a,b){throw H.m(new P.aN((b==null?"Can't transmit:":b)+" "+H.n(a)))},
hi:function(a){return this.cH(a,null)},
hs:function(a){var t=this.hq(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.cH(a,"Can't serialize indexable: ")},
hq:function(a){var t,s,r
t=[]
C.a.sn(t,a.length)
for(s=0;s<a.length;++s){r=this.b1(a[s])
if(s>=t.length)return H.J(t,s)
t[s]=r}return t},
hr:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.b1(a[t]))
return a},
ht:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.cH(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sn(s,t.length)
for(r=0;r<t.length;++r){q=this.b1(a[t[r]])
if(r>=s.length)return H.J(s,r)
s[r]=q}return["js-object",t,s]},
hv:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
hu:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gdI()]
return["raw sendport",a]}}
H.eA.prototype={
bu:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.m(P.e_("Bad serialized message: "+H.n(a)))
switch(C.a.gV(a)){case"ref":if(1>=a.length)return H.J(a,1)
t=a[1]
s=this.b
if(t>>>0!==t||t>=s.length)return H.J(s,t)
return s[t]
case"buffer":if(1>=a.length)return H.J(a,1)
r=a[1]
this.b.push(r)
return r
case"typed":if(1>=a.length)return H.J(a,1)
r=a[1]
this.b.push(r)
return r
case"fixed":if(1>=a.length)return H.J(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.cm(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.J(a,1)
r=a[1]
this.b.push(r)
return H.a(this.cm(r),[null])
case"mutable":if(1>=a.length)return H.J(a,1)
r=a[1]
this.b.push(r)
return this.cm(r)
case"const":if(1>=a.length)return H.J(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.cm(r),[null])
s.fixed$length=Array
return s
case"map":return this.jC(a)
case"sendport":return this.jD(a)
case"raw sendport":if(1>=a.length)return H.J(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.jB(a)
case"function":if(1>=a.length)return H.J(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.J(a,1)
return new H.dH(a[1])
case"dart":s=a.length
if(1>=s)return H.J(a,1)
q=a[1]
if(2>=s)return H.J(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.cm(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.m("couldn't deserialize: "+H.n(a))}},
cm:function(a){var t,s,r
t=J.bo(a)
s=0
while(!0){r=t.gn(a)
if(typeof r!=="number")return H.aK(r)
if(!(s<r))break
t.i(a,s,this.bu(t.m(a,s)));++s}return a},
jC:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.J(a,1)
s=a[1]
if(2>=t)return H.J(a,2)
r=a[2]
q=P.te()
this.b.push(q)
s=J.xV(J.ui(s,this.gjA()))
for(t=J.bo(s),p=J.bo(r),o=0;o<t.gn(s);++o)q.i(0,t.m(s,o),this.bu(p.m(r,o)))
return q},
jD:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.J(a,1)
s=a[1]
if(2>=t)return H.J(a,2)
r=a[2]
if(3>=t)return H.J(a,3)
q=a[3]
if(J.a5(s,u.globalState.b)){p=u.globalState.z.m(0,r)
if(p==null)return
o=p.fW(q)
if(o==null)return
n=new H.fm(o,r)}else n=new H.hG(s,q,r)
this.b.push(n)
return n},
jB:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.J(a,1)
s=a[1]
if(2>=t)return H.J(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.bo(s)
p=J.bo(r)
o=0
while(!0){n=t.gn(s)
if(typeof n!=="number")return H.aK(n)
if(!(o<n))break
q[t.m(s,o)]=this.bu(p.m(r,o));++o}return q}}
H.kv.prototype={
gX:function(a){return this.gn(this)===0},
u:function(a){return P.vN(this)},
i:function(a,b,c){return H.yu()}}
H.kw.prototype={
gn:function(a){return this.a},
aj:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
m:function(a,b){if(!this.aj(0,b))return
return this.f_(b)},
f_:function(a){return this.b[a]},
dd:function(a,b){var t,s,r,q
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.f_(q))}}}
H.nb.prototype={}
H.ou.prototype={
bf:function(a){var t,s,r
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
H.iX.prototype={
u:function(a){var t=this.b
if(t==null)return"NullError: "+H.n(this.a)
return"NullError: method not found: '"+H.n(t)+"' on null"}}
H.m3.prototype={
u:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.n(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.n(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.n(this.a)+")"}}
H.ow.prototype={
u:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.fL.prototype={
gbg:function(){return this.b}}
H.qZ.prototype={
$1:function(a){if(!!J.am(a).$iseg)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.jx.prototype={
u:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.qD.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.qE.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.qF.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.qG.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.qH.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.eK.prototype={
u:function(a){return"Closure '"+H.to(this).trim()+"'"},
gkM:function(){return this},
$D:null}
H.oi.prototype={}
H.nR.prototype={
u:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.fE.prototype={
O:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.fE))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga4:function(a){var t,s
t=this.c
if(t==null)s=H.es(this.a)
else s=typeof t!=="object"?J.dE(t):H.es(t)
t=H.es(this.b)
if(typeof s!=="number")return s.kP()
return(s^t)>>>0},
u:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.n(this.d)+"' of "+H.n5(t)}}
H.ko.prototype={
u:function(a){return this.a}}
H.nk.prototype={
u:function(a){return"RuntimeError: "+H.n(this.a)}}
H.dB.prototype={
u:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
ga4:function(a){return J.dE(this.a)},
O:function(a,b){if(b==null)return!1
return b instanceof H.dB&&J.a5(this.a,b.a)}}
H.q.prototype={
gn:function(a){return this.a},
gX:function(a){return this.a===0},
gad:function(a){return new H.mh(this,[H.I(this,0)])},
gay:function(a){return H.h3(this.gad(this),new H.m2(this),H.I(this,0),H.I(this,1))},
aj:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.eX(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.eX(s,b)}else return this.jY(b)},
jY:function(a){var t=this.d
if(t==null)return!1
return this.cA(this.cR(t,this.cz(a)),a)>=0},
W:function(a,b){b.dd(0,new H.m1(this))},
m:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.cf(t,b)
return s==null?null:s.gbx()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.cf(r,b)
return s==null?null:s.gbx()}else return this.jZ(b)},
jZ:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.cR(t,this.cz(a))
r=this.cA(s,a)
if(r<0)return
return s[r].gbx()},
i:function(a,b,c){var t,s
if(typeof b==="string"){t=this.b
if(t==null){t=this.dK()
this.b=t}this.eP(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.dK()
this.c=s}this.eP(s,b,c)}else this.k0(b,c)},
k0:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=this.dK()
this.d=t}s=this.cz(a)
r=this.cR(t,s)
if(r==null)this.dO(t,s,[this.dL(a,b)])
else{q=this.cA(r,a)
if(q>=0)r[q].sbx(b)
else r.push(this.dL(a,b))}},
an:function(a,b){if(typeof b==="string")return this.fc(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.fc(this.c,b)
else return this.k_(b)},
k_:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.cR(t,this.cz(a))
r=this.cA(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.fk(q)
return q.gbx()},
bb:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
dd:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.m(new P.bT(this))
t=t.c}},
eP:function(a,b,c){var t=this.cf(a,b)
if(t==null)this.dO(a,b,this.dL(b,c))
else t.sbx(c)},
fc:function(a,b){var t
if(a==null)return
t=this.cf(a,b)
if(t==null)return
this.fk(t)
this.eY(a,b)
return t.gbx()},
dL:function(a,b){var t,s
t=new H.mg(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
fk:function(a){var t,s
t=a.giO()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
cz:function(a){return J.dE(a)&0x3ffffff},
cA:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.a5(a[s].gfR(),b))return s
return-1},
u:function(a){return P.vN(this)},
cf:function(a,b){return a[b]},
cR:function(a,b){return a[b]},
dO:function(a,b,c){a[b]=c},
eY:function(a,b){delete a[b]},
eX:function(a,b){return this.cf(a,b)!=null},
dK:function(){var t=Object.create(null)
this.dO(t,"<non-identifier-key>",t)
this.eY(t,"<non-identifier-key>")
return t},
$isz1:1}
H.m2.prototype={
$1:function(a){return this.a.m(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.m1.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return H.dl(function(a,b){return{func:1,args:[a,b]}},this.a,"q")}}
H.mg.prototype={
gfR:function(){return this.a},
gbx:function(){return this.b},
giO:function(){return this.d},
sbx:function(a){return this.b=a}}
H.mh.prototype={
gn:function(a){return this.a.a},
gX:function(a){return this.a.a===0},
gP:function(a){var t,s
t=this.a
s=new H.mi(t,t.r,null,null,this.$ti)
s.c=t.e
return s},
T:function(a,b){return this.a.aj(0,b)}}
H.mi.prototype={
gG:function(){return this.d},
w:function(){var t=this.a
if(this.b!==t.r)throw H.m(new P.bT(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.qz.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.qA.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.v]}}}
H.qB.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.v]}}}
H.iQ.prototype={
u:function(a){return"RegExp/"+this.a+"/"},
gf6:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.vL(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
iy:function(a,b){var t,s
t=this.gf6()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return new H.pJ(this,s)}}
H.pJ.prototype={
cK:function(a){var t=this.b
if(a>>>0!==a||a>=t.length)return H.J(t,a)
return t[a]},
m:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.J(t,b)
return t[b]},
$isf5:1}
H.oU.prototype={
gG:function(){return this.d},
w:function(){var t,s,r,q
t=this.b
if(t==null)return!1
s=this.c
if(s<=t.length){r=this.a.iy(t,s)
if(r!=null){this.d=r
t=r.b
s=t.index
q=s+t[0].length
this.c=s===q?q+1:q
return!0}}this.d=null
this.b=null
return!1}}
H.jh.prototype={
m:function(a,b){return this.cK(b)},
cK:function(a){if(a!==0)throw H.m(P.hj(a,null,null))
return this.c},
$isf5:1}
H.q1.prototype={
gP:function(a){return new H.q2(this.a,this.b,this.c,null)},
gV:function(a){var t,s,r
t=this.a
s=this.b
r=t.indexOf(s,this.c)
if(r>=0)return new H.jh(r,t,s)
throw H.m(H.d1())},
$asz:function(){return[P.f5]}}
H.q2.prototype={
w:function(){var t,s,r,q,p,o,n
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
this.d=new H.jh(o,q,s)
this.c=n===this.c?n+1:n
return!0},
gG:function(){return this.d}}
H.h6.prototype={
ga6:function(a){return C.ab},
$ish6:1,
$isdG:1}
H.f7.prototype={
iJ:function(a,b,c,d){if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(P.fC(b,d,"Invalid list position"))
else throw H.m(P.bJ(b,0,c,d,null))},
eR:function(a,b,c,d){if(b>>>0!==b||b>c)this.iJ(a,b,c,d)},
$isf7:1}
H.mF.prototype={
ga6:function(a){return C.ac}}
H.iU.prototype={
gn:function(a){return a.length},
fi:function(a,b,c,d,e){var t,s,r
t=a.length
this.eR(a,b,t,"start")
this.eR(a,c,t,"end")
if(typeof b!=="number")return b.b8()
if(typeof c!=="number")return H.aK(c)
if(b>c)throw H.m(P.bJ(b,0,c,null,null))
s=c-b
if(typeof e!=="number")return e.a0()
if(e<0)throw H.m(P.e_(e))
r=d.length
if(r-e<s)throw H.m(new P.c_("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$iscs:1,
$ascs:function(){},
$iscb:1,
$ascb:function(){}}
H.h7.prototype={
m:function(a,b){if(b>>>0!==b||b>=a.length)H.bq(H.c6(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.bq(H.c6(a,b))
a[b]=c},
a3:function(a,b,c,d,e){if(!!J.am(d).$ish7){this.fi(a,b,c,d,e)
return}this.eN(a,b,c,d,e)},
b9:function(a,b,c,d){return this.a3(a,b,c,d,0)}}
H.h9.prototype={
$ascs:function(){},
$ascb:function(){},
$asH:function(){return[P.T]},
$asM:function(){return[P.T]},
$asz:function(){return[P.T]},
$isH:1,
$isM:1,
$isz:1}
H.hb.prototype={
$ascs:function(){},
$ascb:function(){},
$asH:function(){return[P.T]},
$asM:function(){return[P.T]},
$asz:function(){return[P.T]}}
H.h8.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.bq(H.c6(a,b))
a[b]=c},
a3:function(a,b,c,d,e){if(!!J.am(d).$ish8){this.fi(a,b,c,d,e)
return}this.eN(a,b,c,d,e)},
b9:function(a,b,c,d){return this.a3(a,b,c,d,0)},
$isH:1,
$asH:function(){return[P.N]},
$isM:1,
$asM:function(){return[P.N]},
$isz:1,
$asz:function(){return[P.N]}}
H.ha.prototype={
$ascs:function(){},
$ascb:function(){},
$asH:function(){return[P.N]},
$asM:function(){return[P.N]},
$asz:function(){return[P.N]},
$isH:1,
$isM:1,
$isz:1}
H.hc.prototype={
$ascs:function(){},
$ascb:function(){},
$asH:function(){return[P.N]},
$asM:function(){return[P.N]},
$asz:function(){return[P.N]}}
H.mG.prototype={
ga6:function(a){return C.ad},
$isH:1,
$asH:function(){return[P.T]},
$isM:1,
$asM:function(){return[P.T]},
$isz:1,
$asz:function(){return[P.T]}}
H.mH.prototype={
ga6:function(a){return C.ae},
$isH:1,
$asH:function(){return[P.T]},
$isM:1,
$asM:function(){return[P.T]},
$isz:1,
$asz:function(){return[P.T]}}
H.mI.prototype={
ga6:function(a){return C.af},
m:function(a,b){if(b>>>0!==b||b>=a.length)H.bq(H.c6(a,b))
return a[b]},
$isH:1,
$asH:function(){return[P.N]},
$isM:1,
$asM:function(){return[P.N]},
$isz:1,
$asz:function(){return[P.N]}}
H.mJ.prototype={
ga6:function(a){return C.ag},
m:function(a,b){if(b>>>0!==b||b>=a.length)H.bq(H.c6(a,b))
return a[b]},
$isH:1,
$asH:function(){return[P.N]},
$isM:1,
$asM:function(){return[P.N]},
$isz:1,
$asz:function(){return[P.N]}}
H.mK.prototype={
ga6:function(a){return C.ah},
m:function(a,b){if(b>>>0!==b||b>=a.length)H.bq(H.c6(a,b))
return a[b]},
$isH:1,
$asH:function(){return[P.N]},
$isM:1,
$asM:function(){return[P.N]},
$isz:1,
$asz:function(){return[P.N]}}
H.mL.prototype={
ga6:function(a){return C.al},
m:function(a,b){if(b>>>0!==b||b>=a.length)H.bq(H.c6(a,b))
return a[b]},
$isH:1,
$asH:function(){return[P.N]},
$isM:1,
$asM:function(){return[P.N]},
$isz:1,
$asz:function(){return[P.N]}}
H.mM.prototype={
ga6:function(a){return C.am},
m:function(a,b){if(b>>>0!==b||b>=a.length)H.bq(H.c6(a,b))
return a[b]},
$isH:1,
$asH:function(){return[P.N]},
$isM:1,
$asM:function(){return[P.N]},
$isz:1,
$asz:function(){return[P.N]}}
H.iV.prototype={
ga6:function(a){return C.an},
gn:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)H.bq(H.c6(a,b))
return a[b]},
$isH:1,
$asH:function(){return[P.N]},
$isM:1,
$asM:function(){return[P.N]},
$isz:1,
$asz:function(){return[P.N]}}
H.hd.prototype={
ga6:function(a){return C.ao},
gn:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)H.bq(H.c6(a,b))
return a[b]},
$ishd:1,
$ise7:1,
$isH:1,
$asH:function(){return[P.N]},
$isM:1,
$asM:function(){return[P.N]},
$isz:1,
$asz:function(){return[P.N]}}
P.oX.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.oW.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.oY.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.oZ.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.qe.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.qf.prototype={
$2:function(a,b){this.a.$2(1,new H.fL(a,b))},
$S:function(){return{func:1,args:[,P.dS]}}}
P.qp.prototype={
$2:function(a,b){this.a(a,b)},
$S:function(){return{func:1,args:[P.N,,]}}}
P.jr.prototype={
dV:function(a,b){if(a==null)a=new P.hf()
if(this.a.a!==0)throw H.m(new P.c_("Future already completed"))
$.b0.toString
this.aT(a,b)},
fE:function(a){return this.dV(a,null)},
gjL:function(){return this.a}}
P.oV.prototype={
d0:function(a,b){var t=this.a
if(t.a!==0)throw H.m(new P.c_("Future already completed"))
t.ip(b)},
aT:function(a,b){this.a.iq(a,b)}}
P.q4.prototype={
d0:function(a,b){var t=this.a
if(t.a!==0)throw H.m(new P.c_("Future already completed"))
t.bp(b)},
aT:function(a,b){this.a.aT(a,b)}}
P.ju.prototype={
gj0:function(){return this.b.b},
gfN:function(){return(this.c&1)!==0},
gjS:function(){return(this.c&2)!==0},
gfM:function(){return this.c===8},
jQ:function(a){return this.b.b.er(this.d,a)},
ka:function(a){if(this.c!==6)return!0
return this.b.b.er(this.d,J.fw(a))},
jM:function(a){var t,s,r
t=this.e
s=J.bg(a)
r=this.b.b
if(H.ft(t,{func:1,args:[,,]}))return r.kD(t,s.gbc(a),a.gbg())
else return r.er(t,s.gbc(a))},
jR:function(){return this.b.b.hb(this.d)},
gdM:function(){return this.a},
gap:function(a){return this.b}}
P.ce.prototype={
giK:function(){return this.a===2},
gdJ:function(){return this.a>=4},
ew:function(a,b){var t=$.b0
if(t!==C.h){t.toString
if(b!=null)b=P.wO(b,t)}return this.dP(a,b)},
ev:function(a){return this.ew(a,null)},
dP:function(a,b){var t,s
t=new P.ce(0,$.b0,null,[null])
s=b==null?1:3
this.dB(new P.ju(null,t,s,a,b,[H.I(this,0),null]))
return t},
dk:function(a){var t,s
t=$.b0
s=new P.ce(0,t,null,this.$ti)
if(t!==C.h)t.toString
t=H.I(this,0)
this.dB(new P.ju(null,s,8,a,null,[t,t]))
return s},
dB:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gdJ()){s.dB(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.fp(null,null,t,new P.pj(this,a))}},
fb:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gdM()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gdJ()){p.fb(a)
return}this.a=p.a
this.c=p.c}t.a=this.cW(a)
s=this.b
s.toString
P.fp(null,null,s,new P.pr(t,this))}},
cV:function(){var t=this.c
this.c=null
return this.cW(t)},
cW:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gdM()
t.a=s}return s},
bp:function(a){var t,s
t=this.$ti
if(H.eD(a,"$isdv",t,"$asdv"))if(H.eD(a,"$isce",t,null))P.pm(a,this)
else P.wx(a,this)
else{s=this.cV()
this.a=4
this.c=a
P.fk(this,s)}},
aT:function(a,b){var t=this.cV()
this.a=8
this.c=new P.eH(a,b)
P.fk(this,t)},
eV:function(a){return this.aT(a,null)},
ip:function(a){var t
if(H.eD(a,"$isdv",this.$ti,"$asdv")){this.ir(a)
return}this.a=1
t=this.b
t.toString
P.fp(null,null,t,new P.pl(this,a))},
ir:function(a){var t
if(H.eD(a,"$isce",this.$ti,null)){if(a.a===8){this.a=1
t=this.b
t.toString
P.fp(null,null,t,new P.pq(this,a))}else P.pm(a,this)
return}P.wx(a,this)},
iq:function(a,b){var t
this.a=1
t=this.b
t.toString
P.fp(null,null,t,new P.pk(this,a,b))},
ih:function(a,b){this.a=4
this.c=a},
$isdv:1,
gcX:function(){return this.a},
giQ:function(){return this.c}}
P.pj.prototype={
$0:function(){P.fk(this.a,this.b)},
$S:function(){return{func:1}}}
P.pr.prototype={
$0:function(){P.fk(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.pn.prototype={
$1:function(a){var t=this.a
t.a=0
t.bp(a)},
$S:function(){return{func:1,args:[,]}}}
P.po.prototype={
$2:function(a,b){this.a.aT(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.pp.prototype={
$0:function(){this.a.aT(this.b,this.c)},
$S:function(){return{func:1}}}
P.pl.prototype={
$0:function(){var t,s
t=this.a
s=t.cV()
t.a=4
t.c=this.b
P.fk(t,s)},
$S:function(){return{func:1}}}
P.pq.prototype={
$0:function(){P.pm(this.b,this.a)},
$S:function(){return{func:1}}}
P.pk.prototype={
$0:function(){this.a.aT(this.b,this.c)},
$S:function(){return{func:1}}}
P.pu.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.jR()}catch(q){s=H.ck(q)
r=H.cL(q)
if(this.c){p=J.fw(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.eH(s,r)
o.a=!0
return}if(!!J.am(t).$isdv){if(t instanceof P.ce&&t.gcX()>=4){if(t.gcX()===8){p=this.b
p.b=t.giQ()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.ev(new P.pv(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.pv.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.pt.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.jQ(this.c)}catch(r){t=H.ck(r)
s=H.cL(r)
q=this.a
q.b=new P.eH(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.ps.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.ka(t)===!0&&q.e!=null){p=this.b
p.b=q.jM(t)
p.a=!1}}catch(o){s=H.ck(o)
r=H.cL(o)
q=this.a
p=J.fw(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.eH(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.jq.prototype={}
P.d5.prototype={
aZ:function(a,b){return new P.pI(b,this,[H.ap(this,"d5",0),null])},
T:function(a,b){var t,s
t={}
s=new P.ce(0,$.b0,null,[P.cK])
t.a=null
t.a=this.bk(new P.nY(t,this,b,s),!0,new P.nZ(s),s.gbT())
return s},
gn:function(a){var t,s
t={}
s=new P.ce(0,$.b0,null,[P.N])
t.a=0
this.bk(new P.o5(t),!0,new P.o6(t,s),s.gbT())
return s},
gX:function(a){var t,s
t={}
s=new P.ce(0,$.b0,null,[P.cK])
t.a=null
t.a=this.bk(new P.o3(t,s),!0,new P.o4(s),s.gbT())
return s},
ax:function(a){var t,s,r
t=H.ap(this,"d5",0)
s=H.a([],[t])
r=new P.ce(0,$.b0,null,[[P.H,t]])
this.bk(new P.o7(this,s),!0,new P.o8(s,r),r.gbT())
return r},
gV:function(a){var t,s
t={}
s=new P.ce(0,$.b0,null,[H.ap(this,"d5",0)])
t.a=null
t.a=this.bk(new P.o1(t,this,s),!0,new P.o2(s),s.gbT())
return s},
Y:function(a,b){var t,s
t={}
if(typeof b!=="number"||Math.floor(b)!==b||b<0)throw H.m(P.e_(b))
s=new P.ce(0,$.b0,null,[H.ap(this,"d5",0)])
t.a=null
t.b=0
t.a=this.bk(new P.o_(t,this,b,s),!0,new P.o0(t,this,b,s),s.gbT())
return s}}
P.nY.prototype={
$1:function(a){var t,s
t=this.a
s=this.d
P.FP(new P.nW(this.c,a),new P.nX(t,s),P.FH(t.a,s))},
$S:function(){return H.dl(function(a){return{func:1,args:[a]}},this.b,"d5")}}
P.nW.prototype={
$0:function(){return J.a5(this.b,this.a)},
$S:function(){return{func:1}}}
P.nX.prototype={
$1:function(a){if(a===!0)P.qi(this.a.a,this.b,!0)},
$S:function(){return{func:1,args:[P.cK]}}}
P.nZ.prototype={
$0:function(){this.a.bp(!1)},
$S:function(){return{func:1}}}
P.o5.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.o6.prototype={
$0:function(){this.b.bp(this.a.a)},
$S:function(){return{func:1}}}
P.o3.prototype={
$1:function(a){P.qi(this.a.a,this.b,!1)},
$S:function(){return{func:1,args:[,]}}}
P.o4.prototype={
$0:function(){this.a.bp(!0)},
$S:function(){return{func:1}}}
P.o7.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.dl(function(a){return{func:1,args:[a]}},this.a,"d5")}}
P.o8.prototype={
$0:function(){this.b.bp(this.a)},
$S:function(){return{func:1}}}
P.o1.prototype={
$1:function(a){P.qi(this.a.a,this.c,a)},
$S:function(){return H.dl(function(a){return{func:1,args:[a]}},this.b,"d5")}}
P.o2.prototype={
$0:function(){var t,s,r,q
try{r=H.d1()
throw H.m(r)}catch(q){t=H.ck(q)
s=H.cL(q)
P.FJ(this.a,t,s)}},
$S:function(){return{func:1}}}
P.o_.prototype={
$1:function(a){var t,s
t=this.a
s=t.b
if(this.c===s){P.qi(t.a,this.d,a)
return}t.b=s+1},
$S:function(){return H.dl(function(a){return{func:1,args:[a]}},this.b,"d5")}}
P.o0.prototype={
$0:function(){this.d.eV(P.cU(this.c,this.b,"index",null,this.a.b))},
$S:function(){return{func:1}}}
P.nV.prototype={}
P.dk.prototype={
ej:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.fu()
if((t&4)===0&&(this.e&32)===0)this.f1(this.gf9())},
h6:function(a){return this.ej(a,null)},
ha:function(){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gX(t)}else t=!1
if(t)this.r.dt(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.f1(this.gfa())}}}},
cZ:function(){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.dD()
t=this.f
return t==null?$.$get$fT():t},
dD:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.fu()
if((this.e&32)===0)this.r=null
this.f=this.f8()},
cQ:function(a){var t=this.e
if((t&8)!==0)return
if(t<32)this.ff(a)
else this.dC(new P.p7(a,null,[H.ap(this,"dk",0)]))},
cP:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.fh(a,b)
else this.dC(new P.p9(a,b,null))},
io:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.fg()
else this.dC(C.S)},
cT:function(){},
cU:function(){},
f8:function(){return},
dC:function(a){var t,s
t=this.r
if(t==null){t=new P.q_(null,null,0,[H.ap(this,"dk",0)])
this.r=t}t.h(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.dt(this)}},
ff:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.es(this.a,a)
this.e=(this.e&4294967263)>>>0
this.dE((t&4)!==0)},
fh:function(a,b){var t,s
t=this.e
s=new P.p2(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.dD()
t=this.f
if(!!J.am(t).$isdv&&t!==$.$get$fT())t.dk(s)
else s.$0()}else{s.$0()
this.dE((t&4)!==0)}},
fg:function(){var t,s
t=new P.p1(this)
this.dD()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.am(s).$isdv&&s!==$.$get$fT())s.dk(t)
else t.$0()},
f1:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.dE((t&4)!==0)},
dE:function(a){var t,s
if((this.e&64)!==0){t=this.r
t=t.gX(t)}else t=!1
if(t){t=(this.e&4294967231)>>>0
this.e=t
if((t&4)!==0)if(t<128){t=this.r
t=t==null||t.gX(t)}else t=!1
else t=!1
if(t)this.e=(this.e&4294967291)>>>0}for(;!0;a=s){t=this.e
if((t&8)!==0){this.r=null
return}s=(t&4)!==0
if(a===s)break
this.e=(t^32)>>>0
if(s)this.cT()
else this.cU()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.dt(this)},
ib:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.wO(b,t)
this.c=c},
gcX:function(){return this.e}}
P.p2.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.ft(s,{func:1,args:[P.b5,P.dS]})
q=t.d
p=this.b
o=t.b
if(r)q.kE(o,p,this.c)
else q.es(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.p1.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.hc(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.js.prototype={
gcD:function(){return this.a},
scD:function(a){return this.a=a}}
P.p7.prototype={
ek:function(a){a.ff(this.b)},
gaq:function(a){return this.b}}
P.p9.prototype={
ek:function(a){a.fh(this.b,this.c)},
$asjs:function(){},
gbc:function(a){return this.b},
gbg:function(){return this.c}}
P.p8.prototype={
ek:function(a){a.fg()},
gcD:function(){return},
scD:function(a){throw H.m(new P.c_("No events after a done."))}}
P.pL.prototype={
dt:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.xm(new P.pM(this,a))
this.a=1},
fu:function(){if(this.a===1)this.a=3},
gcX:function(){return this.a}}
P.pM.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gcD()
t.b=q
if(q==null)t.c=null
r.ek(this.b)},
$S:function(){return{func:1}}}
P.q_.prototype={
gX:function(a){return this.c==null},
h:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.scD(b)
this.c=b}}}
P.q0.prototype={}
P.qh.prototype={
$0:function(){return this.a.aT(this.b,this.c)},
$S:function(){return{func:1}}}
P.qg.prototype={
$2:function(a,b){P.FG(this.a,this.b,a,b)},
$S:function(){return{func:1,args:[,P.dS]}}}
P.qj.prototype={
$0:function(){return this.a.bp(this.b)},
$S:function(){return{func:1}}}
P.hw.prototype={
bk:function(a,b,c,d){return this.iw(a,d,c,!0===b)},
fV:function(a,b,c){return this.bk(a,null,b,c)},
iw:function(a,b,c,d){return P.Fk(this,a,b,c,d,H.ap(this,"hw",0),H.ap(this,"hw",1))},
f2:function(a,b){b.cQ(a)},
iH:function(a,b,c){c.cP(a,b)},
$asd5:function(a,b){return[b]}}
P.hx.prototype={
cQ:function(a){if((this.e&2)!==0)return
this.hW(a)},
cP:function(a,b){if((this.e&2)!==0)return
this.hX(a,b)},
cT:function(){var t=this.y
if(t==null)return
t.h6(0)},
cU:function(){var t=this.y
if(t==null)return
t.ha()},
f8:function(){var t=this.y
if(t!=null){this.y=null
return t.cZ()}return},
iC:function(a){this.x.f2(a,this)},
iG:function(a,b){this.x.iH(a,b,this)},
iE:function(){this.io()},
ig:function(a,b,c,d,e,f,g){this.y=this.x.a.fV(this.giB(),this.giD(),this.giF())},
$asdk:function(a,b){return[b]}}
P.pI.prototype={
f2:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.ck(q)
r=H.cL(q)
P.FF(b,s,r)
return}b.cQ(t)}}
P.eH.prototype={
u:function(a){return H.n(this.a)},
$iseg:1,
gbc:function(a){return this.a},
gbg:function(){return this.b}}
P.qd.prototype={}
P.qo.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.hf()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.m(t)
r=H.m(t)
r.stack=J.cm(s)
throw r},
$S:function(){return{func:1}}}
P.pO.prototype={
hc:function(a){var t,s,r,q
try{if(C.h===$.b0){r=a.$0()
return r}r=P.wP(null,null,this,a)
return r}catch(q){t=H.ck(q)
s=H.cL(q)
r=P.jC(null,null,this,t,s)
return r}},
es:function(a,b){var t,s,r,q
try{if(C.h===$.b0){r=a.$1(b)
return r}r=P.wR(null,null,this,a,b)
return r}catch(q){t=H.ck(q)
s=H.cL(q)
r=P.jC(null,null,this,t,s)
return r}},
kE:function(a,b,c){var t,s,r,q
try{if(C.h===$.b0){r=a.$2(b,c)
return r}r=P.wQ(null,null,this,a,b,c)
return r}catch(q){t=H.ck(q)
s=H.cL(q)
r=P.jC(null,null,this,t,s)
return r}},
dU:function(a,b){if(b)return new P.pP(this,a)
else return new P.pQ(this,a)},
jm:function(a,b){return new P.pR(this,a)},
m:function(a,b){return},
hb:function(a){if($.b0===C.h)return a.$0()
return P.wP(null,null,this,a)},
er:function(a,b){if($.b0===C.h)return a.$1(b)
return P.wR(null,null,this,a,b)},
kD:function(a,b,c){if($.b0===C.h)return a.$2(b,c)
return P.wQ(null,null,this,a,b,c)}}
P.pP.prototype={
$0:function(){return this.a.hc(this.b)},
$S:function(){return{func:1}}}
P.pQ.prototype={
$0:function(){return this.a.hb(this.b)},
$S:function(){return{func:1}}}
P.pR.prototype={
$1:function(a){return this.a.es(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.px.prototype={
gn:function(a){return this.a},
gX:function(a){return this.a===0},
gay:function(a){var t=H.I(this,0)
return H.h3(new P.py(this,[t]),new P.pA(this),t,H.I(this,1))},
aj:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
return t==null?!1:t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
return s==null?!1:s[b]!=null}else return this.iv(b)},
iv:function(a){var t=this.d
if(t==null)return!1
return this.bi(t[this.bh(a)],a)>=0},
m:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.iz(b)},
iz:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.bh(a)]
r=this.bi(s,a)
return r<0?null:s[r+1]},
i:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.tG()
this.b=t}this.eT(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.tG()
this.c=s}this.eT(s,b,c)}else this.iT(b,c)},
iT:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.tG()
this.d=t}s=this.bh(a)
r=t[s]
if(r==null){P.tH(t,s,[a,b]);++this.a
this.e=null}else{q=this.bi(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
an:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cd(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cd(this.c,b)
else return this.dN(b)},
dN:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.bh(a)]
r=this.bi(s,a)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
dd:function(a,b){var t,s,r,q
t=this.eW()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.m(0,q))
if(t!==this.e)throw H.m(new P.bT(this))}},
eW:function(){var t,s,r,q,p,o,n,m,l,k,j,i
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
eT:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.tH(a,b,c)},
cd:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.Fl(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
bh:function(a){return J.dE(a)&0x3ffffff},
bi:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.a5(a[s],b))return s
return-1}}
P.pA.prototype={
$1:function(a){return this.a.m(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.py.prototype={
gn:function(a){return this.a.a},
gX:function(a){return this.a.a===0},
gP:function(a){var t=this.a
return new P.pz(t,t.eW(),0,null,this.$ti)},
T:function(a,b){return this.a.aj(0,b)}}
P.pz.prototype={
gG:function(){return this.d},
w:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.m(new P.bT(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.jv.prototype={
cz:function(a){return H.Gl(a)&0x3ffffff},
cA:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].gfR()
if(r==null?b==null:r===b)return s}return-1}}
P.hB.prototype={
iM:function(){return new P.hB(0,null,null,null,null,null,0,this.$ti)},
gP:function(a){var t=new P.d6(this,this.r,null,null,[null])
t.c=this.e
return t},
gn:function(a){return this.a},
gX:function(a){return this.a===0},
T:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.iu(b)},
iu:function(a){var t=this.d
if(t==null)return!1
return this.bi(t[this.bh(a)],a)>=0},
fW:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.T(0,a)?a:null
else return this.iL(a)},
iL:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.bh(a)]
r=this.bi(s,a)
if(r<0)return
return J.c7(s,r).geZ()},
gV:function(a){var t=this.e
if(t==null)throw H.m(new P.c_("No elements"))
return t.a},
h:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.eS(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.eS(r,b)}else return this.bo(b)},
bo:function(a){var t,s,r
t=this.d
if(t==null){t=P.Fo()
this.d=t}s=this.bh(a)
r=t[s]
if(r==null)t[s]=[this.dF(a)]
else{if(this.bi(r,a)>=0)return!1
r.push(this.dF(a))}return!0},
an:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cd(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cd(this.c,b)
else return this.dN(b)},
dN:function(a){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.bh(a)]
r=this.bi(s,a)
if(r<0)return!1
this.eU(s.splice(r,1)[0])
return!0},
bb:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
eS:function(a,b){if(a[b]!=null)return!1
a[b]=this.dF(b)
return!0},
cd:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.eU(t)
delete a[b]
return!0},
dF:function(a){var t,s
t=new P.pE(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
eU:function(a){var t,s
t=a.git()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
bh:function(a){return J.dE(a)&0x3ffffff},
bi:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.a5(a[s].geZ(),b))return s
return-1},
$isM:1,
$asM:null,
$isz:1,
$asz:null}
P.pE.prototype={
geZ:function(){return this.a},
git:function(){return this.c}}
P.d6.prototype={
gG:function(){return this.d},
w:function(){var t=this.a
if(this.b!==t.r)throw H.m(new P.bT(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.jk.prototype={
gn:function(a){return this.a.length},
m:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.J(t,b)
return t[b]}}
P.pB.prototype={
fG:function(a){var t,s,r
t=this.iM()
for(s=new P.d6(this,this.r,null,null,[null]),s.c=this.e;s.w();){r=s.d
if(!a.T(0,r))t.h(0,r)}return t}}
P.dQ.prototype={
aZ:function(a,b){return H.h3(this,b,H.ap(this,"dQ",0),null)},
b0:function(a,b){return new H.bv(this,b,[H.ap(this,"dQ",0)])},
T:function(a,b){var t
for(t=this.gP(this);t.w();)if(J.a5(t.gG(),b))return!0
return!1},
ae:function(a,b){return P.bf(this,!0,H.ap(this,"dQ",0))},
ax:function(a){return this.ae(a,!0)},
gn:function(a){var t,s
t=this.gP(this)
for(s=0;t.w();)++s
return s},
gX:function(a){return!this.gP(this).w()},
gV:function(a){var t=this.gP(this)
if(!t.w())throw H.m(H.d1())
return t.gG()},
Y:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(P.rf("index"))
if(b<0)H.bq(P.bJ(b,0,null,"index",null))
for(t=this.gP(this),s=0;t.w();){r=t.gG()
if(b===s)return r;++s}throw H.m(P.cU(b,this,"index",null,s))},
u:function(a){return P.t9(this,"(",")")},
$isz:1,
$asz:null}
P.iL.prototype={}
P.h1.prototype={}
P.f8.prototype={$asH:null,$asM:null,$asz:null,$isH:1,$isM:1,$isz:1}
P.bX.prototype={
gP:function(a){return new H.dx(a,this.gn(a),0,null,[H.ap(a,"bX",0)])},
Y:function(a,b){return this.m(a,b)},
gX:function(a){return this.gn(a)===0},
gV:function(a){if(this.gn(a)===0)throw H.m(H.d1())
return this.m(a,0)},
T:function(a,b){var t,s
t=this.gn(a)
for(s=0;s<this.gn(a);++s){if(J.a5(this.m(a,s),b))return!0
if(t!==this.gn(a))throw H.m(new P.bT(a))}return!1},
b0:function(a,b){return new H.bv(a,b,[H.ap(a,"bX",0)])},
aZ:function(a,b){return new H.dh(a,b,[H.ap(a,"bX",0),null])},
eI:function(a,b){return H.we(a,b,null,H.ap(a,"bX",0))},
ae:function(a,b){var t,s,r
t=H.a([],[H.ap(a,"bX",0)])
C.a.sn(t,this.gn(a))
for(s=0;s<this.gn(a);++s){r=this.m(a,s)
if(s>=t.length)return H.J(t,s)
t[s]=r}return t},
ax:function(a){return this.ae(a,!0)},
an:function(a,b){var t
for(t=0;t<this.gn(a);++t)if(J.a5(this.m(a,t),b)){this.a3(a,t,this.gn(a)-1,a,t+1)
this.sn(a,this.gn(a)-1)
return!0}return!1},
cv:function(a,b,c,d){var t
P.di(b,c,this.gn(a),null,null,null)
for(t=b;t<c;++t)this.i(a,t,d)},
a3:function(a,b,c,d,e){var t,s,r,q,p,o
P.di(b,c,this.gn(a),null,null,null)
if(typeof c!=="number")return c.aE()
if(typeof b!=="number")return H.aK(b)
t=c-b
if(t===0)return
if(J.dX(e,0))H.bq(P.bJ(e,0,null,"skipCount",null))
if(H.eD(d,"$isH",[H.ap(a,"bX",0)],"$asH")){s=e
r=d}else{r=J.xT(d,e).ae(0,!1)
s=0}q=J.hL(s)
p=J.bo(r)
if(J.cw(q.af(s,t),p.gn(r)))throw H.m(H.vJ())
if(q.a0(s,b))for(o=t-1;o>=0;--o)this.i(a,b+o,p.m(r,q.af(s,o)))
else for(o=0;o<t;++o)this.i(a,b+o,p.m(r,q.af(s,o)))},
b9:function(a,b,c,d){return this.a3(a,b,c,d,0)},
b7:function(a,b,c,d){var t,s,r,q,p
P.di(b,c,this.gn(a),null,null,null)
d=C.d.ax(d)
if(typeof c!=="number")return c.aE()
t=c-b
s=d.length
r=b+s
if(t>=s){q=t-s
p=this.gn(a)-q
this.b9(a,b,r,d)
if(q!==0){this.a3(a,r,p,a,c)
this.sn(a,p)}}else{p=this.gn(a)+(s-t)
this.sn(a,p)
this.a3(a,r,p,a,c)
this.b9(a,b,r,d)}},
c1:function(a,b,c){var t
if(c>=this.gn(a))return-1
if(c<0)c=0
for(t=c;t<this.gn(a);++t)if(J.a5(this.m(a,t),b))return t
return-1},
be:function(a,b){return this.c1(a,b,0)},
u:function(a){return P.en(a,"[","]")},
$isH:1,
$asH:null,
$isM:1,
$asM:null,
$isz:1,
$asz:null}
P.q7.prototype={
i:function(a,b,c){throw H.m(new P.aN("Cannot modify unmodifiable map"))}}
P.mp.prototype={
m:function(a,b){return J.c7(this.a,b)},
i:function(a,b,c){J.r_(this.a,b,c)},
gX:function(a){return J.jQ(this.a)},
gn:function(a){return J.cl(this.a)},
u:function(a){return J.cm(this.a)}}
P.hu.prototype={}
P.mq.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.U+=", "
t.a=!1
t=this.b
s=t.U+=H.n(a)
t.U=s+": "
t.U+=H.n(b)},
$S:function(){return{func:1,args:[,,]}}}
P.mj.prototype={
gP:function(a){return new P.pF(this,this.c,this.d,this.b,null,this.$ti)},
gX:function(a){return this.b===this.c},
gn:function(a){return(this.c-this.b&this.a.length-1)>>>0},
gV:function(a){var t,s
t=this.b
if(t===this.c)throw H.m(H.d1())
s=this.a
if(t>=s.length)return H.J(s,t)
return s[t]},
Y:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(typeof b!=="number")return H.aK(b)
if(0>b||b>=t)H.bq(P.cU(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.J(s,q)
return s[q]},
ae:function(a,b){var t=H.a([],this.$ti)
C.a.sn(t,this.gn(this))
this.j_(t)
return t},
ax:function(a){return this.ae(a,!0)},
bb:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.J(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
u:function(a){return P.en(this,"{","}")},
h8:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.m(H.d1());++this.d
s=this.a
r=s.length
if(t>=r)return H.J(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
bo:function(a){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.J(t,s)
t[s]=a
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.f0();++this.d},
f0:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.a(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.a3(s,0,q,t,r)
C.a.a3(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=s},
j_:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.a.a3(a,0,q,r,t)
return q}else{p=r.length-t
C.a.a3(a,0,p,r,t)
C.a.a3(a,p,p+this.c,this.a,0)
return this.c+p}},
i3:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$asM:null,
$asz:null}
P.pF.prototype={
gG:function(){return this.e},
w:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.bq(new P.bT(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.J(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.ny.prototype={
gX:function(a){return this.a===0},
W:function(a,b){var t
for(t=J.bC(b);t.w();)this.h(0,t.gG())},
ae:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.a.sn(t,this.a)
for(s=new P.d6(this,this.r,null,null,[null]),s.c=this.e,r=0;s.w();r=p){q=s.d
p=r+1
if(r>=t.length)return H.J(t,r)
t[r]=q}return t},
ax:function(a){return this.ae(a,!0)},
aZ:function(a,b){return new H.i4(this,b,[H.I(this,0),null])},
u:function(a){return P.en(this,"{","}")},
b0:function(a,b){return new H.bv(this,b,this.$ti)},
gV:function(a){var t=new P.d6(this,this.r,null,null,[null])
t.c=this.e
if(!t.w())throw H.m(H.d1())
return t.d},
Y:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(P.rf("index"))
if(b<0)H.bq(P.bJ(b,0,null,"index",null))
for(t=new P.d6(this,this.r,null,null,[null]),t.c=this.e,s=0;t.w();){r=t.d
if(b===s)return r;++s}throw H.m(P.cU(b,this,"index",null,s))},
$isM:1,
$asM:null,
$isz:1,
$asz:null}
P.nx.prototype={}
P.kc.prototype={
kf:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=J.bo(a)
a0=P.di(b,a0,t.gn(a),null,null,null)
s=$.$get$ww()
if(typeof a0!=="number")return H.aK(a0)
r=b
q=r
p=null
o=-1
n=-1
m=0
for(;r<a0;r=l){l=r+1
k=t.a7(a,r)
if(k===37){j=l+2
if(j<=a0){i=H.qy(C.d.ag(a,l))
h=H.qy(C.d.ag(a,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.J(s,g)
f=s[g]
if(f>=0){g=C.d.a7("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?p:p.U.length
if(e==null)e=0
if(typeof e!=="number")return e.af()
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null)p=new P.dj("")
p.U+=C.d.N(a,q,r)
p.U+=H.tp(k)
q=l
continue}}throw H.m(new P.bH("Invalid base64 data",a,r))}if(p!=null){t=p.U+=t.N(a,q,a0)
e=t.length
if(o>=0)P.uw(a,n,a0,o,m,e)
else{d=C.b.dq(e-1,4)+1
if(d===1)throw H.m(new P.bH("Invalid base64 encoding length ",a,a0))
for(;d<4;){t+="="
p.U=t;++d}}t=p.U
return C.d.b7(a,b,a0,t.charCodeAt(0)==0?t:t)}c=a0-b
if(o>=0)P.uw(a,n,a0,o,m,c)
else{d=C.e.dq(c,4)
if(d===1)throw H.m(new P.bH("Invalid base64 encoding length ",a,a0))
if(d>1)a=t.b7(a,a0,a0,d===2?"==":"=")}return a},
$asfG:function(){return[[P.H,P.N],P.v]}}
P.kd.prototype={
$asfH:function(){return[[P.H,P.N],P.v]}}
P.fG.prototype={}
P.fH.prototype={}
P.kJ.prototype={
$asfG:function(){return[P.v,[P.H,P.N]]}}
P.oE.prototype={
gM:function(a){return"utf-8"}}
P.oF.prototype={
dX:function(a,b,c){var t,s,r,q
t=J.cl(a)
P.di(b,c,t,null,null,null)
s=new P.dj("")
r=new P.q9(!1,s,!0,0,0,0)
r.dX(a,b,t)
r.jI(0,a,t)
q=s.U
return q.charCodeAt(0)==0?q:q},
jr:function(a){return this.dX(a,0,null)},
$asfH:function(){return[[P.H,P.N],P.v]}}
P.q9.prototype={
jI:function(a,b,c){if(this.e>0)throw H.m(new P.bH("Unfinished UTF-8 octet sequence",b,c))},
dX:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=this.d
s=this.e
r=this.f
this.d=0
this.e=0
this.f=0
q=new P.qb(c)
p=new P.qa(this,a,b,c)
$loop$0:for(o=J.bo(a),n=this.b,m=b;!0;m=h){$multibyte$2:if(s>0){do{if(m===c)break $loop$0
l=o.m(a,m)
if(typeof l!=="number")return l.bQ()
if((l&192)!==128){k=new P.bH("Bad UTF-8 encoding 0x"+C.e.bN(l,16),a,m)
throw H.m(k)}else{t=(t<<6|l&63)>>>0;--s;++m}}while(s>0)
k=r-1
if(k<0||k>=4)return H.J(C.H,k)
if(t<=C.H[k]){k=new P.bH("Overlong encoding of 0x"+C.b.bN(t,16),a,m-r-1)
throw H.m(k)}if(t>1114111){k=new P.bH("Character outside valid Unicode range: 0x"+C.b.bN(t,16),a,m-r-1)
throw H.m(k)}if(!this.c||t!==65279)n.U+=H.tp(t)
this.c=!1}for(k=m<c;k;){j=q.$2(a,m)
if(J.cw(j,0)){this.c=!1
if(typeof j!=="number")return H.aK(j)
i=m+j
p.$2(m,i)
if(i===c)break}else i=m
h=i+1
l=o.m(a,i)
g=J.dn(l)
if(g.a0(l,0)){g=new P.bH("Negative UTF-8 code unit: -0x"+J.xW(g.eC(l),16),a,h-1)
throw H.m(g)}else{if(typeof l!=="number")return l.bQ()
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
P.qb.prototype={
$2:function(a,b){var t,s,r,q
t=this.a
for(s=J.bo(a),r=b;r<t;++r){q=s.m(a,r)
if(typeof q!=="number")return q.bQ()
if((q&127)!==q)return r-b}return t-b},
$S:function(){return{func:1,ret:P.N,args:[,P.N]}}}
P.qa.prototype={
$2:function(a,b){this.a.b.U+=P.wd(this.b,a,b)},
$S:function(){return{func:1,v:true,args:[P.N,P.N]}}}
P.cK.prototype={}
P.bw.prototype={}
P.fI.prototype={
O:function(a,b){if(b==null)return!1
if(!(b instanceof P.fI))return!1
return this.a===b.a&&this.b===b.b},
aU:function(a,b){return C.b.aU(this.a,b.giZ())},
ga4:function(a){var t=this.a
return(t^C.b.bq(t,30))&1073741823},
u:function(a){var t,s,r,q,p,o,n
t=P.yw(H.vV(this))
s=P.hZ(H.vU(this))
r=P.hZ(H.vT(this))
q=P.hZ(H.Ed(this))
p=P.hZ(H.Ef(this))
o=P.hZ(H.Eg(this))
n=P.yx(H.Ee(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isbw:1,
$asbw:function(){return[P.fI]},
giZ:function(){return this.a}}
P.T.prototype={$isbw:1,
$asbw:function(){return[P.cj]}}
P.da.prototype={
af:function(a,b){return new P.da(this.a+b.gbU())},
aE:function(a,b){return new P.da(this.a-b.gbU())},
aJ:function(a,b){if(typeof b!=="number")return H.aK(b)
return new P.da(C.e.a5(this.a*b))},
a0:function(a,b){return C.b.a0(this.a,b.gbU())},
b8:function(a,b){return C.b.b8(this.a,b.gbU())},
bA:function(a,b){return C.b.bA(this.a,b.gbU())},
O:function(a,b){if(b==null)return!1
if(!(b instanceof P.da))return!1
return this.a===b.a},
ga4:function(a){return this.a&0x1FFFFFFF},
aU:function(a,b){return C.b.aU(this.a,b.gbU())},
u:function(a){var t,s,r,q,p
t=new P.kG()
s=this.a
if(s<0)return"-"+new P.da(0-s).u(0)
r=t.$1(C.b.aB(s,6e7)%60)
q=t.$1(C.b.aB(s,1e6)%60)
p=new P.kF().$1(s%1e6)
return""+C.b.aB(s,36e8)+":"+H.n(r)+":"+H.n(q)+"."+H.n(p)},
eC:function(a){return new P.da(0-this.a)},
$isbw:1,
$asbw:function(){return[P.da]},
gbU:function(){return this.a}}
P.kF.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.v,args:[P.N]}}}
P.kG.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.v,args:[P.N]}}}
P.eg.prototype={
gbg:function(){return H.cL(this.$thrownJsError)}}
P.hf.prototype={
u:function(a){return"Throw of null."}}
P.dq.prototype={
gdH:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gdG:function(){return""},
u:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.n(t)
q=this.gdH()+s+r
if(!this.a)return q
p=this.gdG()
o=P.uO(this.b)
return q+p+": "+H.n(o)},
gM:function(a){return this.c}}
P.hi.prototype={
gdH:function(){return"RangeError"},
gdG:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.n(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.n(t)
else{if(typeof r!=="number")return r.b8()
if(r>t)s=": Not in range "+H.n(t)+".."+H.n(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.n(t)}}return s}}
P.lH.prototype={
gdH:function(){return"RangeError"},
gdG:function(){if(J.dX(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.n(t)},
gn:function(a){return this.f}}
P.aN.prototype={
u:function(a){return"Unsupported operation: "+this.a}}
P.jj.prototype={
u:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.n(t):"UnimplementedError"}}
P.c_.prototype={
u:function(a){return"Bad state: "+this.a}}
P.bT.prototype={
u:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.n(P.uO(t))+"."}}
P.mT.prototype={
u:function(a){return"Out of Memory"},
gbg:function(){return},
$iseg:1}
P.jg.prototype={
u:function(a){return"Stack Overflow"},
gbg:function(){return},
$iseg:1}
P.ky.prototype={
u:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.n(t)+"' during its initialization"}}
P.pi.prototype={
u:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.n(t)}}
P.bH.prototype={
u:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=this.a
s=""!==t?"FormatException: "+t:"FormatException"
r=this.c
q=this.b
if(typeof q!=="string")return r!=null?s+(" (at offset "+H.n(r)+")"):s
if(r!=null){if(typeof r!=="number")return r.a0()
t=r<0||r>q.length}else t=!1
if(t)r=null
if(r==null){if(q.length>78)q=C.d.N(q,0,75)+"..."
return s+"\n"+q}if(typeof r!=="number")return H.aK(r)
p=1
o=0
n=!1
m=0
for(;m<r;++m){l=C.d.ag(q,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}s=p>1?s+(" (at line "+p+", character "+H.n(r-o+1)+")\n"):s+(" (at character "+H.n(r+1)+")\n")
k=q.length
for(m=r;m<q.length;++m){l=C.d.a7(q,m)
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
return s+h+f+g+"\n"+C.d.aJ(" ",r-i+h.length)+"^\n"}}
P.kM.prototype={
u:function(a){return"Expando:"+H.n(this.a)},
m:function(a,b){var t,s
t=this.cS
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.bq(P.fC(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.tn(b,"expando$values")
return s==null?null:H.tn(s,t)},
i:function(a,b,c){var t,s
t=this.cS
if(typeof t!=="string")t.set(b,c)
else{s=H.tn(b,"expando$values")
if(s==null){s=new P.b5()
H.vY(b,"expando$values",s)}H.vY(s,t,c)}},
gM:function(a){return this.a}}
P.N.prototype={$isbw:1,
$asbw:function(){return[P.cj]}}
P.z.prototype={
aZ:function(a,b){return H.h3(this,b,H.ap(this,"z",0),null)},
b0:function(a,b){return new H.bv(this,b,[H.ap(this,"z",0)])},
T:function(a,b){var t
for(t=this.gP(this);t.w();)if(J.a5(t.gG(),b))return!0
return!1},
ae:function(a,b){return P.bf(this,!0,H.ap(this,"z",0))},
ax:function(a){return this.ae(a,!0)},
gn:function(a){var t,s
t=this.gP(this)
for(s=0;t.w();)++s
return s},
gX:function(a){return!this.gP(this).w()},
gV:function(a){var t=this.gP(this)
if(!t.w())throw H.m(H.d1())
return t.gG()},
gbS:function(a){var t,s
t=this.gP(this)
if(!t.w())throw H.m(H.d1())
s=t.gG()
if(t.w())throw H.m(H.E2())
return s},
Y:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(P.rf("index"))
if(b<0)H.bq(P.bJ(b,0,null,"index",null))
for(t=this.gP(this),s=0;t.w();){r=t.gG()
if(b===s)return r;++s}throw H.m(P.cU(b,this,"index",null,s))},
u:function(a){return P.t9(this,"(",")")},
$asz:null}
P.iM.prototype={}
P.H.prototype={$asH:null,$isM:1,$asM:null,$isz:1,$asz:null}
P.dz.prototype={
ga4:function(a){return P.b5.prototype.ga4.call(this,this)},
u:function(a){return"null"}}
P.cj.prototype={$isbw:1,
$asbw:function(){return[P.cj]}}
P.b5.prototype={constructor:P.b5,$isb5:1,
O:function(a,b){return this===b},
ga4:function(a){return H.es(this)},
u:function(a){return H.n5(this)},
ga6:function(a){return new H.dB(H.hM(this),null)},
toString:function(){return this.u(this)}}
P.f5.prototype={}
P.dS.prototype={}
P.v.prototype={$isbw:1,
$asbw:function(){return[P.v]}}
P.dj.prototype={
gn:function(a){return this.U.length},
gX:function(a){return this.U.length===0},
u:function(a){var t=this.U
return t.charCodeAt(0)==0?t:t},
gU:function(){return this.U}}
P.ez.prototype={}
P.oC.prototype={
$2:function(a,b){var t,s,r,q
t=J.bo(b)
s=t.be(b,"=")
if(s===-1){if(!t.O(b,""))J.r_(a,P.q8(b,0,t.gn(b),this.a,!0),"")}else if(s!==0){r=t.N(b,0,s)
q=C.d.aS(b,s+1)
t=this.a
J.r_(a,P.q8(r,0,r.length,t,!0),P.q8(q,0,q.length,t,!0))}return a},
$S:function(){return{func:1,args:[,,]}}}
P.oz.prototype={
$2:function(a,b){throw H.m(new P.bH("Illegal IPv4 address, "+a,this.a,b))},
$S:function(){return{func:1,v:true,args:[P.v,P.N]}}}
P.oA.prototype={
$2:function(a,b){throw H.m(new P.bH("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,v:true,args:[P.v],opt:[,]}}}
P.oB.prototype={
$2:function(a,b){var t,s
if(b-a>4)this.b.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
t=H.et(C.d.N(this.a,a,b),16,null)
s=J.dn(t)
if(s.a0(t,0)||s.b8(t,65535))this.b.$2("each part must be in the range of `0x0..0xFFFF`",a)
return t},
$S:function(){return{func:1,ret:P.N,args:[P.N,P.N]}}}
P.jz.prototype={
ghl:function(){return this.b},
gec:function(a){var t=this.c
if(t==null)return""
if(C.d.aL(t,"["))return C.d.N(t,1,t.length-1)
return t},
gem:function(a){var t=this.d
if(t==null)return P.wC(this.a)
return t},
gep:function(a){var t=this.f
return t==null?"":t},
gfK:function(){var t=this.r
return t==null?"":t},
geq:function(){var t,s
t=this.Q
if(t==null){t=this.f
s=P.v
s=new P.hu(P.wv(t==null?"":t,C.q),[s,s])
this.Q=s
t=s}return t},
gfO:function(){return this.c!=null},
gfQ:function(){return this.f!=null},
gfP:function(){return this.r!=null},
u:function(a){var t=this.y
if(t==null){t=this.f3()
this.y=t}return t},
f3:function(){var t,s,r,q
t=this.a
s=t.length!==0?t+":":""
r=this.c
q=r==null
if(!q||t==="file"){t=s+"//"
s=this.b
if(s.length!==0)t=t+H.n(s)+"@"
if(!q)t+=r
s=this.d
if(s!=null)t=t+":"+H.n(s)}else t=s
t+=H.n(this.e)
s=this.f
if(s!=null)t=t+"?"+s
s=this.r
if(s!=null)t=t+"#"+s
return t.charCodeAt(0)==0?t:t},
O:function(a,b){var t,s,r
if(b==null)return!1
if(this===b)return!0
t=J.am(b)
if(!!t.$isez){if(this.a===b.geD())if(this.c!=null===b.gfO()){s=this.b
r=b.ghl()
if(s==null?r==null:s===r){s=this.gec(this)
r=t.gec(b)
if(s==null?r==null:s===r)if(J.a5(this.gem(this),t.gem(b)))if(J.a5(this.e,t.gh5(b))){s=this.f
r=s==null
if(!r===b.gfQ()){if(r)s=""
if(s===t.gep(b)){t=this.r
s=t==null
if(!s===b.gfP()){if(s)t=""
t=t===b.gfK()}else t=!1}else t=!1}else t=!1}else t=!1
else t=!1
else t=!1}else t=!1}else t=!1
else t=!1
return t}return!1},
ga4:function(a){var t=this.z
if(t==null){t=this.y
if(t==null){t=this.f3()
this.y=t}t=C.d.ga4(t)
this.z=t}return t},
$isez:1,
geD:function(){return this.a},
gh5:function(a){return this.e}}
P.qt.prototype={
$1:function(a){throw H.m(new P.bH("Invalid port",this.a,this.b+1))},
$S:function(){return{func:1,args:[,]}}}
P.oy.prototype={
ghj:function(){var t,s,r,q,p,o,n,m
t=this.c
if(t!=null)return t
t=this.b
if(0>=t.length)return H.J(t,0)
s=this.a
t=t[0]+1
r=J.bo(s)
q=r.c1(s,"?",t)
p=r.gn(s)
if(q>=0){o=q+1
n=P.fn(s,o,p,C.o,!1)
if(n==null)n=r.N(s,o,p)
p=q}else n=null
m=P.fn(s,t,p,C.K,!1)
t=new P.p6(this,"data",null,null,null,m==null?r.N(s,t,p):m,n,null,null,null,null,null,null)
this.c=t
return t},
u:function(a){var t,s
t=this.b
if(0>=t.length)return H.J(t,0)
s=this.a
return t[0]===-1?"data:"+H.n(s):s}}
P.ql.prototype={
$1:function(a){return new Uint8Array(H.wM(96))},
$S:function(){return{func:1,args:[,]}}}
P.qk.prototype={
$2:function(a,b){var t=this.a
if(a>=t.length)return H.J(t,a)
t=t[a]
J.xz(t,0,96,b)
return t},
$S:function(){return{func:1,ret:P.e7,args:[,,]}}}
P.qm.prototype={
$3:function(a,b,c){var t,s,r
for(t=b.length,s=J.dm(a),r=0;r<t;++r)s.i(a,C.d.ag(b,r)^96,c)},
$S:function(){return{func:1,v:true,args:[P.e7,P.v,P.N]}}}
P.qn.prototype={
$3:function(a,b,c){var t,s,r
for(t=C.d.ag(b,0),s=C.d.ag(b,1),r=J.dm(a);t<=s;++t)r.i(a,(t^96)>>>0,c)},
$S:function(){return{func:1,v:true,args:[P.e7,P.v,P.N]}}}
P.pZ.prototype={
gfO:function(){return this.c>0},
gfQ:function(){var t=this.f
if(typeof t!=="number")return t.a0()
return t<this.r},
gfP:function(){return this.r<this.a.length},
geD:function(){var t,s
t=this.b
if(t<=0)return""
s=this.x
if(s!=null)return s
s=t===4
if(s&&C.d.aL(this.a,"http")){this.x="http"
t="http"}else if(t===5&&C.d.aL(this.a,"https")){this.x="https"
t="https"}else if(s&&C.d.aL(this.a,"file")){this.x="file"
t="file"}else if(t===7&&C.d.aL(this.a,"package")){this.x="package"
t="package"}else{t=C.d.N(this.a,0,t)
this.x=t}return t},
ghl:function(){var t,s
t=this.c
s=this.b+3
return t>s?C.d.N(this.a,s,t-1):""},
gec:function(a){var t=this.c
return t>0?C.d.N(this.a,t,this.d):""},
gem:function(a){var t,s
if(this.c>0){t=this.d
if(typeof t!=="number")return t.af()
s=this.e
if(typeof s!=="number")return H.aK(s)
s=t+1<s
t=s}else t=!1
if(t){t=this.d
if(typeof t!=="number")return t.af()
return H.et(C.d.N(this.a,t+1,this.e),null,null)}t=this.b
if(t===4&&C.d.aL(this.a,"http"))return 80
if(t===5&&C.d.aL(this.a,"https"))return 443
return 0},
gh5:function(a){return C.d.N(this.a,this.e,this.f)},
gep:function(a){var t,s
t=this.f
s=this.r
if(typeof t!=="number")return t.a0()
return t<s?C.d.N(this.a,t+1,s):""},
gfK:function(){var t,s
t=this.r
s=this.a
return t<s.length?C.d.aS(s,t+1):""},
geq:function(){var t=this.f
if(typeof t!=="number")return t.a0()
if(t>=this.r)return C.a8
t=P.v
return new P.hu(P.wv(this.gep(this),C.q),[t,t])},
ga4:function(a){var t=this.y
if(t==null){t=C.d.ga4(this.a)
this.y=t}return t},
O:function(a,b){var t
if(b==null)return!1
if(this===b)return!0
t=J.am(b)
if(!!t.$isez)return this.a===t.u(b)
return!1},
u:function(a){return this.a},
$isez:1}
P.p6.prototype={}
W.aV.prototype={}
W.eF.prototype={
u:function(a){return String(a)},
$iseF:1,
$isa_:1,
gah:function(a){return a.href},
sah:function(a,b){return a.href=b}}
W.k2.prototype={
u:function(a){return String(a)},
$isa_:1,
gah:function(a){return a.href},
sah:function(a,b){return a.href=b}}
W.ke.prototype={
gah:function(a){return a.href},
sah:function(a,b){return a.href=b}}
W.hR.prototype={}
W.eI.prototype={$iseI:1,$isa_:1}
W.eJ.prototype={$iseJ:1,
gM:function(a){return a.name},
gaq:function(a){return a.value}}
W.km.prototype={
geb:function(a){return a.filter}}
W.ec.prototype={$isa_:1,
gn:function(a){return a.length}}
W.hX.prototype={
dZ:function(a,b){return typeof console!="undefined"?console.error(b):null},
fS:function(a){return typeof console!="undefined"?console.info(a):null},
kL:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.ee.prototype={
cI:function(a,b){var t=this.iA(a,b)
return t!=null?t:""},
iA:function(a,b){if(W.yv(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.yy()+b)},
am:function(a,b){return a.item(b)},
gbC:function(a){return a.display},
sbC:function(a,b){a.display=b},
gn:function(a){return a.length}}
W.ir.prototype={}
W.p4.prototype={
cI:function(a,b){var t=this.b
return J.xL(t.gV(t),b)},
iU:function(a,b){var t
for(t=this.a,t=new H.dx(t,t.gn(t),0,null,[H.I(t,0)]);t.w();)t.d.style[a]=b},
sbC:function(a,b){this.iU("display",b)},
ic:function(a){var t=P.bf(this.a,!0,null)
this.b=new H.dh(t,new W.p5(),[H.I(t,0),null])}}
W.iY.prototype={}
W.p5.prototype={
$1:function(a){return J.jR(a)},
$S:function(){return{func:1,args:[,]}}}
W.hY.prototype={
gbC:function(a){return this.cI(a,"display")},
geb:function(a){return this.cI(a,"filter")}}
W.kA.prototype={
gaq:function(a){return a.value}}
W.i_.prototype={}
W.i0.prototype={$isa_:1}
W.i1.prototype={
gM:function(a){return a.name}}
W.kB.prototype={
gM:function(a){var t=a.name
if(P.uK()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.uK()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
u:function(a){return String(a)}}
W.i2.prototype={
u:function(a){return"Rectangle ("+H.n(a.left)+", "+H.n(a.top)+") "+H.n(this.gbP(a))+" x "+H.n(this.gbL(a))},
O:function(a,b){var t
if(b==null)return!1
t=J.am(b)
if(!t.$isj9)return!1
return a.left===t.gef(b)&&a.top===t.gex(b)&&this.gbP(a)===t.gbP(b)&&this.gbL(a)===t.gbL(b)},
ga4:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gbP(a)
q=this.gbL(a)
return W.wA(W.eC(W.eC(W.eC(W.eC(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gbL:function(a){return a.height},
gef:function(a){return a.left},
gex:function(a){return a.top},
gbP:function(a){return a.width},
$isj9:1,
$asj9:function(){}}
W.i3.prototype={
T:function(a,b){return a.contains(b)},
am:function(a,b){return a.item(b)},
gn:function(a){return a.length},
gaq:function(a){return a.value}}
W.hy.prototype={
gn:function(a){return this.a.length},
m:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.J(t,b)
return t[b]},
i:function(a,b,c){throw H.m(new P.aN("Cannot modify list"))},
sn:function(a,b){throw H.m(new P.aN("Cannot modify list"))},
gV:function(a){return C.a9.gV(this.a)},
geL:function(a){return W.Fj(this)},
$isH:1,
$asH:null,
$isM:1,
$asM:null,
$isz:1,
$asz:null}
W.cB.prototype={
gjk:function(a){return new W.pc(a)},
u:function(a){return a.localName},
fT:function(a,b,c,d,e){var t,s
if(d instanceof W.jy)a.insertAdjacentHTML(b,c)
else{t=this.au(a,c,d,e)
switch(b.toLowerCase()){case"beforebegin":a.parentNode.insertBefore(t,a)
break
case"afterbegin":s=a.childNodes
a.insertBefore(t,s.length>0?s[0]:null)
break
case"beforeend":a.appendChild(t)
break
case"afterend":a.parentNode.insertBefore(t,a.nextSibling)
break
default:H.bq(P.e_("Invalid position "+b))}}},
au:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.uN
if(t==null){t=H.a([],[W.e4])
s=new W.iW(t)
t.push(W.wy(null))
t.push(W.wB())
$.uN=s
d=s}else d=t
t=$.uM
if(t==null){t=new W.jA(d)
$.uM=t
c=t}else{t.a=d
c=t}}if($.e1==null){t=document
s=t.implementation.createHTMLDocument("")
$.e1=s
$.ri=s.createRange()
s=$.e1
s.toString
r=s.createElement("base")
J.xR(r,t.baseURI)
$.e1.head.appendChild(r)}t=$.e1
if(t.body==null){t.toString
s=t.createElement("body")
t.body=s}t=$.e1
if(!!this.$iseI)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
$.e1.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.a.T(C.a3,a.tagName)){$.ri.selectNodeContents(q)
p=$.ri.createContextualFragment(b)}else{q.innerHTML=b
p=$.e1.createDocumentFragment()
for(;t=q.firstChild,t!=null;)p.appendChild(t)}t=$.e1.body
if(q==null?t!=null:q!==t)J.xN(q)
c.dr(p)
document.adoptNode(p)
return p},
ju:function(a,b,c){return this.au(a,b,c,null)},
du:function(a,b,c,d){a.textContent=null
a.appendChild(this.au(a,b,c,d))},
at:function(a,b){return this.du(a,b,null,null)},
gh0:function(a){return new W.jt(a,"click",!1,[W.f6])},
$iscB:1,
$isaj:1,
$isb5:1,
$isa_:1,
geL:function(a){return a.style},
gf5:function(a){return a.namespaceURI},
gkF:function(a){return a.tagName}}
W.qr.prototype={
$1:function(a){return!!J.am(a).$iscB},
$S:function(){return{func:1,args:[,]}}}
W.kI.prototype={
gM:function(a){return a.name},
sbn:function(a,b){return a.src=b}}
W.kK.prototype={
gbc:function(a){return a.error}}
W.U.prototype={$isU:1,$isb5:1}
W.fK.prototype={
j8:function(a,b,c,d){if(c!=null)this.im(a,b,c,!1)},
kt:function(a,b,c,d){if(c!=null)this.iP(a,b,c,!1)},
im:function(a,b,c,d){return a.addEventListener(b,H.hK(c,1),!1)},
iP:function(a,b,c,d){return a.removeEventListener(b,H.hK(c,1),!1)}}
W.lo.prototype={
gM:function(a){return a.name}}
W.cq.prototype={$iscq:1,$isb5:1,
gM:function(a){return a.name}}
W.ij.prototype={
gn:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.cU(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aN("Cannot assign element of immutable List."))},
sn:function(a,b){throw H.m(new P.aN("Cannot resize immutable List."))},
gV:function(a){if(a.length>0)return a[0]
throw H.m(new P.c_("No elements"))},
Y:function(a,b){if(b>>>0!==b||b>=a.length)return H.J(a,b)
return a[b]},
am:function(a,b){return a.item(b)},
$iscs:1,
$ascs:function(){return[W.cq]},
$iscb:1,
$ascb:function(){return[W.cq]},
$isH:1,
$asH:function(){return[W.cq]},
$isM:1,
$asM:function(){return[W.cq]},
$isz:1,
$asz:function(){return[W.cq]}}
W.is.prototype={
$asH:function(){return[W.cq]},
$asM:function(){return[W.cq]},
$asz:function(){return[W.cq]},
$isH:1,
$isM:1,
$isz:1}
W.iz.prototype={
$asH:function(){return[W.cq]},
$asM:function(){return[W.cq]},
$asz:function(){return[W.cq]},
$isH:1,
$isM:1,
$isz:1}
W.io.prototype={
am:function(a,b){return a.item(b)},
gn:function(a){return a.length},
gM:function(a){return a.name}}
W.eX.prototype={
gn:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.cU(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aN("Cannot assign element of immutable List."))},
sn:function(a,b){throw H.m(new P.aN("Cannot resize immutable List."))},
gV:function(a){if(a.length>0)return a[0]
throw H.m(new P.c_("No elements"))},
Y:function(a,b){if(b>>>0!==b||b>=a.length)return H.J(a,b)
return a[b]},
am:function(a,b){return a.item(b)},
$isH:1,
$asH:function(){return[W.aj]},
$isM:1,
$asM:function(){return[W.aj]},
$isz:1,
$asz:function(){return[W.aj]},
$iscs:1,
$ascs:function(){return[W.aj]},
$iscb:1,
$ascb:function(){return[W.aj]}}
W.it.prototype={
$asH:function(){return[W.aj]},
$asM:function(){return[W.aj]},
$asz:function(){return[W.aj]},
$isH:1,
$isM:1,
$isz:1}
W.iA.prototype={
$asH:function(){return[W.aj]},
$asM:function(){return[W.aj]},
$asz:function(){return[W.aj]},
$isH:1,
$isM:1,
$isz:1}
W.ip.prototype={
am:function(a,b){return a.item(b)}}
W.el.prototype={
l0:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
kh:function(a,b,c,d){return a.open(b,c,d)},
cL:function(a,b){return a.send(b)},
$isel:1,
$isb5:1,
gkz:function(a){return a.responseText}}
W.lB.prototype={
$1:function(a){return J.xG(a)},
$S:function(){return{func:1,args:[W.el]}}}
W.lC.prototype={
$1:function(a){var t,s,r,q,p
t=this.b
s=t.status
if(typeof s!=="number")return s.bA()
r=s>=200&&s<300
q=s>307&&s<400
s=r||s===0||s===304||q
p=this.a
if(s)p.d0(0,t)
else p.fE(a)},
$S:function(){return{func:1,args:[,]}}}
W.iq.prototype={}
W.lD.prototype={
gM:function(a){return a.name},
sbn:function(a,b){return a.src=b}}
W.eY.prototype={$iseY:1,$iscB:1,$isaj:1,$isb5:1,
d0:function(a,b){return a.complete.$1(b)},
sbn:function(a,b){return a.src=b}}
W.lI.prototype={$iscB:1,$isa_:1,$isaj:1,
gM:function(a){return a.name},
gaq:function(a){return a.value},
sbn:function(a,b){return a.src=b}}
W.m5.prototype={
gM:function(a){return a.name}}
W.m7.prototype={
gaq:function(a){return a.value}}
W.fZ.prototype={$isfZ:1,
gah:function(a){return a.href},
sah:function(a,b){return a.href=b}}
W.mk.prototype={
u:function(a){return String(a)},
gah:function(a){return a.href}}
W.mo.prototype={
gM:function(a){return a.name}}
W.h4.prototype={
gbc:function(a){return a.error},
sb2:function(a,b){return a.session=b},
sbn:function(a,b){return a.src=b}}
W.mt.prototype={
aG:function(a){return a.clone()}}
W.mu.prototype={
gM:function(a){return a.name}}
W.mw.prototype={
gaq:function(a){return a.value}}
W.mx.prototype={
kO:function(a,b,c){return a.send(b,c)},
cL:function(a,b){return a.send(b)}}
W.h5.prototype={
gM:function(a){return a.name}}
W.mN.prototype={$isa_:1}
W.mO.prototype={
gM:function(a){return a.name}}
W.cX.prototype={
gV:function(a){var t=this.a.firstChild
if(t==null)throw H.m(new P.c_("No elements"))
return t},
gbS:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.m(new P.c_("No elements"))
if(s>1)throw H.m(new P.c_("More than one element"))
return t.firstChild},
W:function(a,b){var t,s,r,q
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=0;q<r;++q)s.appendChild(t.firstChild)
return},
i:function(a,b,c){var t,s
t=this.a
s=t.childNodes
if(b>>>0!==b||b>=s.length)return H.J(s,b)
t.replaceChild(c,s[b])},
gP:function(a){var t=this.a.childNodes
return new W.il(t,t.length,-1,null,[H.ap(t,"dg",0)])},
a3:function(a,b,c,d,e){throw H.m(new P.aN("Cannot setRange on Node list"))},
b9:function(a,b,c,d){return this.a3(a,b,c,d,0)},
cv:function(a,b,c,d){throw H.m(new P.aN("Cannot fillRange on Node list"))},
gn:function(a){return this.a.childNodes.length},
sn:function(a,b){throw H.m(new P.aN("Cannot set length on immutable List."))},
m:function(a,b){var t=this.a.childNodes
if(b>>>0!==b||b>=t.length)return H.J(t,b)
return t[b]},
$ash1:function(){return[W.aj]},
$asf8:function(){return[W.aj]},
$asH:function(){return[W.aj]},
$asM:function(){return[W.aj]},
$asz:function(){return[W.aj]}}
W.aj.prototype={
gke:function(a){return new W.cX(a)},
bl:function(a){var t=a.parentNode
if(t!=null)t.removeChild(a)},
u:function(a){var t=a.nodeValue
return t==null?this.hP(a):t},
T:function(a,b){return a.contains(b)},
$isaj:1,
$isb5:1,
gki:function(a){return a.parentNode},
gkm:function(a){return a.previousSibling}}
W.he.prototype={
gn:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.cU(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aN("Cannot assign element of immutable List."))},
sn:function(a,b){throw H.m(new P.aN("Cannot resize immutable List."))},
gV:function(a){if(a.length>0)return a[0]
throw H.m(new P.c_("No elements"))},
Y:function(a,b){if(b>>>0!==b||b>=a.length)return H.J(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.aj]},
$isM:1,
$asM:function(){return[W.aj]},
$isz:1,
$asz:function(){return[W.aj]},
$iscs:1,
$ascs:function(){return[W.aj]},
$iscb:1,
$ascb:function(){return[W.aj]}}
W.iu.prototype={
$asH:function(){return[W.aj]},
$asM:function(){return[W.aj]},
$asz:function(){return[W.aj]},
$isH:1,
$isM:1,
$isz:1}
W.iB.prototype={
$asH:function(){return[W.aj]},
$asM:function(){return[W.aj]},
$asz:function(){return[W.aj]},
$isH:1,
$isM:1,
$isz:1}
W.mS.prototype={
gM:function(a){return a.name}}
W.j3.prototype={
gho:function(a){return a.selected},
gaq:function(a){return a.value}}
W.mU.prototype={
gM:function(a){return a.name},
gaq:function(a){return a.value}}
W.mX.prototype={
gM:function(a){return a.name},
gaq:function(a){return a.value}}
W.n7.prototype={
gaq:function(a){return a.value}}
W.ns.prototype={
sbn:function(a,b){return a.src=b}}
W.hm.prototype={
am:function(a,b){return a.item(b)},
geh:function(a){var t=new W.hy(a.querySelectorAll("option"),[null])
return new P.jk(t.ax(t),[null])},
gaK:function(a){var t,s
if(a.multiple===!0){t=this.geh(a)
s=H.I(t,0)
return new P.jk(P.bf(new H.bv(t,new W.nu(),[s]),!0,s),[null])}else{t=this.geh(a)
s=a.selectedIndex
t=t.a
if(s>>>0!==s||s>=t.length)return H.J(t,s)
return[t[s]]}},
gn:function(a){return a.length},
gM:function(a){return a.name},
gaq:function(a){return a.value}}
W.nu.prototype={
$1:function(a){return J.xI(a)},
$S:function(){return{func:1,args:[,]}}}
W.nz.prototype={
kR:function(a,b){return a.cloneNode(b)},
aG:function(a){return a.cloneNode()}}
W.nG.prototype={
gM:function(a){return a.name}}
W.nJ.prototype={
sbn:function(a,b){return a.src=b}}
W.fg.prototype={$isfg:1,$isb5:1}
W.nM.prototype={
gbc:function(a){return a.error}}
W.ch.prototype={
am:function(a,b){return a.item(b)},
$isch:1,
$isb5:1,
gn:function(a){return a.length}}
W.nN.prototype={
gM:function(a){return a.name}}
W.nU.prototype={
m:function(a,b){return a.getItem(b)},
i:function(a,b,c){a.setItem(b,c)},
gn:function(a){return a.length},
gX:function(a){return a.key(0)==null}}
W.ji.prototype={
au:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.dA(a,b,c,d)
t=W.yA("<table>"+H.n(b)+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
new W.cX(s).W(0,J.xC(t))
return s}}
W.og.prototype={
au:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.dA(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.O.au(t.createElement("table"),b,c,d)
t.toString
t=new W.cX(t)
r=t.gbS(t)
r.toString
t=new W.cX(r)
q=t.gbS(t)
s.toString
q.toString
new W.cX(s).W(0,new W.cX(q))
return s}}
W.oh.prototype={
au:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.dA(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.O.au(t.createElement("table"),b,c,d)
t.toString
t=new W.cX(t)
r=t.gbS(t)
s.toString
r.toString
new W.cX(s).W(0,new W.cX(r))
return s}}
W.hs.prototype={
du:function(a,b,c,d){var t
a.textContent=null
t=this.au(a,b,c,d)
a.content.appendChild(t)},
at:function(a,b){return this.du(a,b,null,null)},
$ishs:1}
W.ol.prototype={
gM:function(a){return a.name},
gaq:function(a){return a.value}}
W.ot.prototype={
sbn:function(a,b){return a.src=b}}
W.jo.prototype={$isa_:1,
gM:function(a){return a.name}}
W.fj.prototype={$isfj:1,$isaj:1,$isb5:1,
gM:function(a){return a.name},
gf5:function(a){return a.namespaceURI},
gaq:function(a){return a.value}}
W.p3.prototype={
u:function(a){return"Rectangle ("+H.n(a.left)+", "+H.n(a.top)+") "+H.n(a.width)+" x "+H.n(a.height)},
O:function(a,b){var t,s,r
if(b==null)return!1
t=J.am(b)
if(!t.$isj9)return!1
s=a.left
r=t.gef(b)
if(s==null?r==null:s===r){s=a.top
r=t.gex(b)
if(s==null?r==null:s===r){s=a.width
r=t.gbP(b)
if(s==null?r==null:s===r){s=a.height
t=t.gbL(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
ga4:function(a){var t,s,r,q
t=J.dE(a.left)
s=J.dE(a.top)
r=J.dE(a.width)
q=J.dE(a.height)
return W.wA(W.eC(W.eC(W.eC(W.eC(0,t),s),r),q))},
$isj9:1,
$asj9:function(){},
gbL:function(a){return a.height},
gef:function(a){return a.left},
gex:function(a){return a.top},
gbP:function(a){return a.width}}
W.pa.prototype={$isa_:1}
W.pb.prototype={
gbL:function(a){return a.height},
gbP:function(a){return a.width}}
W.pw.prototype={$isa_:1}
W.hD.prototype={
gn:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.cU(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aN("Cannot assign element of immutable List."))},
sn:function(a,b){throw H.m(new P.aN("Cannot resize immutable List."))},
gV:function(a){if(a.length>0)return a[0]
throw H.m(new P.c_("No elements"))},
Y:function(a,b){if(b>>>0!==b||b>=a.length)return H.J(a,b)
return a[b]},
am:function(a,b){return a.item(b)},
$isH:1,
$asH:function(){return[W.aj]},
$isM:1,
$asM:function(){return[W.aj]},
$isz:1,
$asz:function(){return[W.aj]},
$iscs:1,
$ascs:function(){return[W.aj]},
$iscb:1,
$ascb:function(){return[W.aj]}}
W.iv.prototype={
$asH:function(){return[W.aj]},
$asM:function(){return[W.aj]},
$asz:function(){return[W.aj]},
$isH:1,
$isM:1,
$isz:1}
W.iC.prototype={
$asH:function(){return[W.aj]},
$asM:function(){return[W.aj]},
$asz:function(){return[W.aj]},
$isH:1,
$isM:1,
$isz:1}
W.pW.prototype={$isa_:1}
W.jw.prototype={
gn:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.cU(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aN("Cannot assign element of immutable List."))},
sn:function(a,b){throw H.m(new P.aN("Cannot resize immutable List."))},
gV:function(a){if(a.length>0)return a[0]
throw H.m(new P.c_("No elements"))},
Y:function(a,b){if(b>>>0!==b||b>=a.length)return H.J(a,b)
return a[b]},
am:function(a,b){return a.item(b)},
$isH:1,
$asH:function(){return[W.ch]},
$isM:1,
$asM:function(){return[W.ch]},
$isz:1,
$asz:function(){return[W.ch]},
$iscs:1,
$ascs:function(){return[W.ch]},
$iscb:1,
$ascb:function(){return[W.ch]}}
W.iw.prototype={
$asH:function(){return[W.ch]},
$asM:function(){return[W.ch]},
$asz:function(){return[W.ch]},
$isH:1,
$isM:1,
$isz:1}
W.iD.prototype={
$asH:function(){return[W.ch]},
$asM:function(){return[W.ch]},
$asz:function(){return[W.ch]},
$isH:1,
$isM:1,
$isz:1}
W.p_.prototype={
gad:function(a){var t,s,r,q,p,o
t=this.a.attributes
s=H.a([],[P.v])
for(r=t.length,q=0;q<r;++q){if(q>=t.length)return H.J(t,q)
p=t[q]
o=J.bg(p)
if(o.gf5(p)==null)s.push(o.gM(p))}return s},
gX:function(a){return this.gad(this).length===0},
giI:function(){return this.a}}
W.pc.prototype={
m:function(a,b){return this.a.getAttribute(b)},
i:function(a,b,c){this.a.setAttribute(b,c)},
gn:function(a){return this.gad(this).length}}
W.pf.prototype={
bk:function(a,b,c,d){return W.cJ(this.a,this.b,a,!1,H.I(this,0))},
fV:function(a,b,c){return this.bk(a,null,b,c)}}
W.jt.prototype={}
W.pg.prototype={
cZ:function(){if(this.b==null)return
this.fl()
this.b=null
this.d=null
return},
ej:function(a,b){if(this.b==null)return;++this.a
this.fl()},
h6:function(a){return this.ej(a,null)},
ha:function(){if(this.b==null||this.a<=0)return;--this.a
this.fj()},
fj:function(){var t=this.d
if(t!=null&&this.a<=0)J.xv(this.b,this.c,t,!1)},
fl:function(){var t=this.d
if(t!=null)J.xO(this.b,this.c,t,!1)},
ie:function(a,b,c,d,e){this.fj()}}
W.ph.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.hA.prototype={
bV:function(a){return $.$get$wz().T(0,W.fJ(a))},
br:function(a,b,c){var t,s,r
t=W.fJ(a)
s=$.$get$tI()
r=s.m(0,H.n(t)+"::"+b)
if(r==null)r=s.m(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
ii:function(a){var t,s
t=$.$get$tI()
if(t.gX(t)){for(s=0;s<262;++s)t.i(0,C.a2[s],W.G9())
for(s=0;s<12;++s)t.i(0,C.u[s],W.Ga())}},
$ise4:1,
ghk:function(){return this.a}}
W.dg.prototype={
gP:function(a){return new W.il(a,this.gn(a),-1,null,[H.ap(a,"dg",0)])},
a3:function(a,b,c,d,e){throw H.m(new P.aN("Cannot setRange on immutable List."))},
b9:function(a,b,c,d){return this.a3(a,b,c,d,0)},
b7:function(a,b,c,d){throw H.m(new P.aN("Cannot modify an immutable List."))},
cv:function(a,b,c,d){throw H.m(new P.aN("Cannot modify an immutable List."))},
$isH:1,
$asH:null,
$isM:1,
$asM:null,
$isz:1,
$asz:null}
W.iW.prototype={
bV:function(a){return C.a.fo(this.a,new W.mQ(a))},
br:function(a,b,c){return C.a.fo(this.a,new W.mP(a,b,c))},
$ise4:1}
W.mQ.prototype={
$1:function(a){return a.bV(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.mP.prototype={
$1:function(a){return a.br(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.hE.prototype={
bV:function(a){return this.a.T(0,W.fJ(a))},
br:function(a,b,c){var t,s
t=W.fJ(a)
s=this.c
if(s.T(0,H.n(t)+"::"+b))return this.d.jc(c)
else if(s.T(0,"*::"+b))return this.d.jc(c)
else{s=this.b
if(s.T(0,H.n(t)+"::"+b))return!0
else if(s.T(0,"*::"+b))return!0
else if(s.T(0,H.n(t)+"::*"))return!0
else if(s.T(0,"*::*"))return!0}return!1},
ik:function(a,b,c,d){var t,s,r
this.a.W(0,c)
t=b.b0(0,new W.pX())
s=b.b0(0,new W.pY())
this.b.W(0,t)
r=this.c
r.W(0,C.a4)
r.W(0,s)},
$ise4:1,
ghk:function(){return this.d}}
W.pX.prototype={
$1:function(a){return!C.a.T(C.u,a)},
$S:function(){return{func:1,args:[,]}}}
W.pY.prototype={
$1:function(a){return C.a.T(C.u,a)},
$S:function(){return{func:1,args:[,]}}}
W.q5.prototype={
br:function(a,b,c){if(this.hY(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.uf(a).a.getAttribute("template")==="")return this.e.T(0,b)
return!1}}
W.q6.prototype={
$1:function(a){return"TEMPLATE::"+H.n(a)},
$S:function(){return{func:1,args:[,]}}}
W.q3.prototype={
bV:function(a){var t=J.am(a)
if(!!t.$ishl)return!1
t=!!t.$isc0
if(t&&W.fJ(a)==="foreignObject")return!1
if(t)return!0
return!1},
br:function(a,b,c){if(b==="is"||C.d.aL(b,"on"))return!1
return this.bV(a)},
$ise4:1}
W.il.prototype={
w:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.c7(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
gG:function(){return this.d}}
W.e4.prototype={}
W.jy.prototype={
dr:function(a){}}
W.pV.prototype={}
W.jA.prototype={
dr:function(a){new W.qc(this).$2(a,null)},
cg:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)t.removeChild(a)}else b.removeChild(a)},
iS:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.uf(a)
r=s.giI().getAttribute("is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.ck(n)}p="element unprintable"
try{p=J.cm(a)}catch(n){H.ck(n)}try{o=W.fJ(a)
this.iR(a,b,t,p,o,s,r)}catch(n){if(H.ck(n) instanceof P.dq)throw n
else{this.cg(a,b)
window
m="Removing corrupted element "+H.n(p)
if(typeof console!="undefined")console.warn(m)}}},
iR:function(a,b,c,d,e,f,g){var t,s,r,q,p
if(c){this.cg(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.bV(a)){this.cg(a,b)
window
t="Removing disallowed element <"+H.n(e)+"> from "+J.cm(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.br(a,"is",g)){this.cg(a,b)
window
t="Removing disallowed type extension <"+H.n(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gad(f)
s=H.a(t.slice(0),[H.I(t,0)])
for(r=f.gad(f).length-1,t=f.a;r>=0;--r){if(r>=s.length)return H.J(s,r)
q=s[r]
if(!this.a.br(a,J.r4(q),t.getAttribute(q))){window
p="Removing disallowed attribute <"+H.n(e)+" "+q+'="'+H.n(t.getAttribute(q))+'">'
if(typeof console!="undefined")console.warn(p)
t.getAttribute(q)
t.removeAttribute(q)}}if(!!J.am(a).$ishs)this.dr(a.content)}}
W.qc.prototype={
$2:function(a,b){var t,s,r,q,p
r=this.a
switch(a.nodeType){case 1:r.iS(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.cg(a,b)}t=a.lastChild
for(r=a==null;null!=t;){s=null
try{s=J.xF(t)}catch(q){H.ck(q)
p=t
if(r){if(J.xE(p)!=null)p.parentNode.removeChild(p)}else a.removeChild(p)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.aj,W.aj]}}}
P.pD.prototype={
Z:function(a){if(a<=0||a>4294967296)throw H.m(P.w2("max must be in range 0 < max \u2264 2^32, was "+H.n(a)))
return Math.random()*a>>>0},
D:function(){return Math.random()},
h_:function(){return Math.random()<0.5}}
P.pN.prototype={
bj:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.b.aB(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
Z:function(a){var t,s,r
if(a<=0||a>4294967296)throw H.m(P.w2("max must be in range 0 < max \u2264 2^32, was "+H.n(a)))
t=a-1
if((a&t)>>>0===0){this.bj()
return(this.a&t)>>>0}do{this.bj()
s=this.a
r=s%a}while(s-r+a>=4294967296)
return r},
D:function(){this.bj()
var t=this.a
this.bj()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
h_:function(){this.bj()
return(this.a&1)===0},
ij:function(a){var t,s,r,q,p,o,n,m
t=J.dX(a,0)?-1:0
do{if(typeof a!=="number")return a.bQ()
s=(a&4294967295)>>>0
a=C.e.aB(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.e.aB(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.b.aB(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.b.aB(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.b.aB(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.b.aB(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.b.aB(q-n,4294967296)&4294967295)>>>0
this.b=m
n=(n^p)>>>0
this.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o&4294967295)>>>0
this.b=o}while(a!==t)
if(o===0&&n===0)this.a=23063
this.bj()
this.bj()
this.bj()
this.bj()}}
P.jX.prototype={$isa_:1,
gah:function(a){return a.href}}
P.ea.prototype={$isa_:1}
P.kN.prototype={$isa_:1,
gap:function(a){return a.result}}
P.kO.prototype={$isa_:1,
gap:function(a){return a.result}}
P.kP.prototype={$isa_:1,
gap:function(a){return a.result}}
P.kQ.prototype={$isa_:1,
gap:function(a){return a.result}}
P.kR.prototype={$isa_:1,
gap:function(a){return a.result}}
P.kS.prototype={$isa_:1,
gap:function(a){return a.result}}
P.kT.prototype={$isa_:1,
gap:function(a){return a.result}}
P.kU.prototype={$isa_:1,
gap:function(a){return a.result}}
P.kV.prototype={$isa_:1,
gap:function(a){return a.result}}
P.kW.prototype={$isa_:1,
gap:function(a){return a.result},
gah:function(a){return a.href}}
P.kX.prototype={$isa_:1,
gap:function(a){return a.result}}
P.kY.prototype={$isa_:1,
gap:function(a){return a.result}}
P.kZ.prototype={$isa_:1,
gap:function(a){return a.result}}
P.l_.prototype={$isa_:1,
gap:function(a){return a.result}}
P.l0.prototype={$isa_:1,
gap:function(a){return a.result}}
P.l1.prototype={$isa_:1,
gap:function(a){return a.result}}
P.lp.prototype={$isa_:1,
gah:function(a){return a.href}}
P.cr.prototype={$isa_:1}
P.lE.prototype={$isa_:1,
gah:function(a){return a.href}}
P.d2.prototype={$isb5:1,
gaq:function(a){return a.value}}
P.md.prototype={
gn:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.cU(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.m(new P.aN("Cannot assign element of immutable List."))},
sn:function(a,b){throw H.m(new P.aN("Cannot resize immutable List."))},
gV:function(a){if(a.length>0)return a[0]
throw H.m(new P.c_("No elements"))},
Y:function(a,b){return this.m(a,b)},
$isH:1,
$asH:function(){return[P.d2]},
$isM:1,
$asM:function(){return[P.d2]},
$isz:1,
$asz:function(){return[P.d2]}}
P.ix.prototype={
$asH:function(){return[P.d2]},
$asM:function(){return[P.d2]},
$asz:function(){return[P.d2]},
$isH:1,
$isM:1,
$isz:1}
P.iE.prototype={
$asH:function(){return[P.d2]},
$asM:function(){return[P.d2]},
$asz:function(){return[P.d2]},
$isH:1,
$isM:1,
$isz:1}
P.mr.prototype={$isa_:1}
P.ms.prototype={$isa_:1}
P.d3.prototype={$isb5:1,
gaq:function(a){return a.value}}
P.mR.prototype={
gn:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.cU(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.m(new P.aN("Cannot assign element of immutable List."))},
sn:function(a,b){throw H.m(new P.aN("Cannot resize immutable List."))},
gV:function(a){if(a.length>0)return a[0]
throw H.m(new P.c_("No elements"))},
Y:function(a,b){return this.m(a,b)},
$isH:1,
$asH:function(){return[P.d3]},
$isM:1,
$asM:function(){return[P.d3]},
$isz:1,
$asz:function(){return[P.d3]}}
P.iy.prototype={
$asH:function(){return[P.d3]},
$asM:function(){return[P.d3]},
$asz:function(){return[P.d3]},
$isH:1,
$isM:1,
$isz:1}
P.iF.prototype={
$asH:function(){return[P.d3]},
$asM:function(){return[P.d3]},
$asz:function(){return[P.d3]},
$isH:1,
$isM:1,
$isz:1}
P.n_.prototype={$isa_:1,
gah:function(a){return a.href}}
P.hl.prototype={$ishl:1,$isa_:1,
gah:function(a){return a.href}}
P.c0.prototype={
au:function(a,b,c,d){var t,s,r,q,p,o
if(c==null){t=H.a([],[W.e4])
t.push(W.wy(null))
t.push(W.wB())
t.push(new W.q3())
c=new W.jA(new W.iW(t))}s='<svg version="1.1">'+H.n(b)+"</svg>"
t=document
r=t.body
q=(r&&C.z).ju(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.cX(q)
o=t.gbS(t)
for(;t=o.firstChild,t!=null;)p.appendChild(t)
return p},
fT:function(a,b,c,d,e){throw H.m(new P.aN("Cannot invoke insertAdjacentHtml on SVG."))},
gh0:function(a){return new W.jt(a,"click",!1,[W.f6])},
$isc0:1,
$isa_:1}
P.oc.prototype={$isa_:1}
P.of.prototype={$isa_:1}
P.ex.prototype={}
P.on.prototype={$isa_:1,
gah:function(a){return a.href}}
P.oD.prototype={$isa_:1,
gah:function(a){return a.href}}
P.oG.prototype={$isa_:1}
P.hz.prototype={$isa_:1,
gah:function(a){return a.href}}
P.pS.prototype={$isa_:1}
P.pT.prototype={$isa_:1}
P.pU.prototype={$isa_:1}
P.dG.prototype={}
P.e7.prototype={$isH:1,
$asH:function(){return[P.N]},
$isM:1,
$asM:function(){return[P.N]},
$isz:1,
$asz:function(){return[P.N]}}
P.ng.prototype={$isa_:1}
T.hP.prototype={
$asiL:function(){return[T.hQ]},
$asz:function(){return[T.hQ]}}
T.hQ.prototype={}
S.jY.prototype={
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Math Book",H.a([$.O,$.a0,$.aS],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Giant Map",H.a([$.O,$.a0],s),null,!1,"Map to Staffs HQ")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Microscope",H.a([$.C,$.a0,$.bb],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Star Chart",H.a([$.O,$.a0],s),null,!1,"Cosmic Dot-to-Dot")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("History Book",H.a([$.O,$.a0],s),null,!1,"Homestuck Anthology")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Radioactive Rock",H.a([$.c4,$.aM],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Compass",H.a([$.C,$.a0],s),null,!1,"Navigation Box")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.v]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.Y,P.T]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.fN,$.l)
q.i(0,$.bl,$.l)
q.i(0,$.eU,$.j)
q.i(0,$.ba,$.D)
q.i(0,$.cy,$.j)
p=$.k
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.t
o=o+n+" to stop "
m=$.P
l=[U.c]
q.i(0,new R.a2("Recover the Books",!1,[new U.c(o+m+"ing long enough to discover that underlings stole all the books. "),new U.c("The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "),new U.c("The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books!  ")],H.a([],l),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.k
q.i(0,new R.a2("Shelve the Books",!1,[new U.c("The "+p+" finds a massive library, with no books in it! They manage to get a local "+$.t+" to stop "+$.P+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.c("The "+p+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.c("The "+p+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],l),R.w_(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.k
m="The "+p+" finds a massive library, filled with books. The "
n=$.t
m=m+n+" librarian offers to help the "+p+" search for useful books. "
o="The "+p+" begins to learn about "
k=$.y
n=o+k+" and how they have persecuted the "+n+"s.  "
k="The "+p+" has read the final book about "+k+" and feels much more prepared to face them.  "
p=this.y
q.i(0,new R.a2("Research the Denizen",!1,[new U.c(m),new U.c(n),new U.c(k)],H.a([],l),R.fc(),!1,!1,new Y.by("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.j)
p=$.aQ
this.r.i(0,new X.E(s,q,null),p)
p=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.eN,$.D)
s.i(0,$.cy,$.l)
q=$.k
o="The "+q+"  is approached by a "
n=$.t
s.i(0,new R.a2("Do the Math",!1,[new U.c(o+n+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.c("The "+q+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.c("The "+n+"  finds a "+n+" child "+$.P+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+q+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],l),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
q=$.k
n="The "+q+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.t
s.i(0,new R.a2("Use the Calculator",!1,[new U.c(n),new U.c("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+q+" is getting the hang of this weird calculator that controls reality. "),new U.c("With a frantic "+$.P+", a small "+o+" sprints towards the "+q+".  A giant ogre is chasing them.  In a panic, the "+q+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],l),R.eu(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
q=$.k
s.i(0,new R.a2("Solve the Equation",!1,[new U.c("The "+q+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.c("There is a flurry of motion.  The "+q+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.c("The "+q+" has done it. Against all odds they have solved the equation.  A "+$.t+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],l),R.fc(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
q=$.aQ
this.r.i(0,new X.E(p,s,null),q)
q=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.eN,$.D)
t.i(0,$.cy,$.l)
t.i(0,$.c8,$.D)
t.i(0,$.rt,$.D)
s=$.k
r="The "+s+"  is approached by a "
p=$.t
r=r+p+" who offers them a grant to study "
o=$.ak
t.i(0,new R.a2("Test the Hypothesis",!1,[new U.c(r+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.c("The "+s+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.c("The Symposium has started. The crowd of unruly "+p+"s begins "+$.P+"ing louder and louder. Finally, the "+s+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],l),R.fc(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
o=$.t
s="Too many local "+o+" have fallen ill from a mysterious plague.  Those inflicted are too weak to even "
p=$.P
s=s+p+".  It is up to the "
r=$.k
s=s+r+" to figure out how to cure the disease.  They are provided with a state of the art lab and a team of ...not completely terrible "+o+"s."
n="The "+r+" has gotten far too little sleep. Suddenly, they realize the key, the one thing they have been missing: "
m=$.ak
t.i(0,new R.a2("Make the Cure",!1,[new U.c(s),new U.c(n+m+". It all makes sense now! "),new U.c("Each "+o+" lines up to receive their "+m+" injection. The sound of joyful "+p+" fills the air. The plague is defeated!  The "+r+" has a statue made of them in the town center. ")],H.a([],l),R.e5(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
r=$.k
t.i(0,new R.a2("Be the Scientist",!1,[new U.c("The "+r+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.c("The "+r+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.c("The "+r+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.P+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.t+"s are inside the final room, outfitted for a surprise party.  It is for "+r+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],l),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
l=$.aQ
this.r.i(0,new X.E(q,t,null),l)},
gI:function(){return this.cx},
gav:function(){return this.cy},
gaw:function(){return this.db},
gJ:function(){return this.dx},
gaC:function(){return this.dy}}
S.k1.prototype={}
E.qK.prototype={
$1:function(a){return E.tN($.qX)},
$S:function(){return{func:1,args:[,]}}}
E.qL.prototype={
$1:function(a){return E.tN($.jE)},
$S:function(){return{func:1,args:[,]}}}
E.qM.prototype={
$1:function(a){return E.tX()},
$S:function(){return{func:1,args:[,]}}}
E.qN.prototype={
$1:function(a){var t,s,r,q,p,o,n,m
t=E.qv()
t=$.cO+-1*t
$.cO=t
J.c3($.e9,"Grist: "+t)
J.c3($.d8,"")
t=$.fs
s=E.dW(J.cN(J.c7((t&&C.f).gaK(t),0)))
t=$.fu
r=E.dW(J.cN(J.c7((t&&C.f).gaK(t),0)))
t=$.jJ
q=E.x7(J.cN(J.c7((t&&C.f).gaK(t),0)),s,r)
q.je($.cA)
t=$.c1.e
p=$.fq
if((t==null?p==null:t===p)&&q.b.ga9().T(0,$.be)&&!q.b.ga9().T(0,$.aa))$.c1.e.aP("I swear to fuck you don't know how close you came to fucking shit up, asshole. ")
t=q.b
if($.tL.fU(t)){J.dp($.d8,"beforeend","News: Interesting!   ",null,null)
$.c1.hy($.tL)}else{p=$.c1
o=p.f
if(o!=null)p.bR(o)
p.f}if($.jD.fU(t)){J.dp($.d8,"beforeend",Y.cW("News: NOW you fucked up!   "),null,null)
$.$get$bS().m(0,$.r9).c9(0)
$.c1.bR($.jD)}p=$.c1
o=p.e
n=$.jD
if(o==null?n==null:o===n)if($.qY<=0){p.bR($.u9)
$.c1.e.aP("I WAS HERE THE WHOLE TIME")
J.dp($.d8,"beforeend","News: Shogun Canine has arrived. Hope you like useless shit posts. Fucking Lord of Words. :( :( :(   ",null,null)
$.$get$bS().m(0,$.re).c9(0)}else if(t.ga9().T(0,$.b1)&&t.e.T(0,$.aa)){$.c1.bR($.fq)
$.c1.e.aP("Holy fuck, you actually fixed me.")
J.dp($.d8,"beforeend","News: AB Recovered!   ",null,null)
$.$get$bS().m(0,$.r8).c9(0)}else $.qY=$.qY+-1
else{p=$.u9
if(o==null?p==null:o===p)if(t.ga9().T(0,$.lR)){P.cE("SHOGUN SHOULD BE BANISHED")
$.c1.bR($.jD)
$.qY=3
$.c1.e.aP("Oh fuck. That did not feel good. But I'm not fixed yet, asshole.")
J.dp($.d8,"beforeend","News: Shogun Banished! :) :) :) <a target='_blank' href = 'index2.html?prophecy=pigeon'>What's this?</a>  ",null,null)
$.$get$bS().m(0,$.rd).c9(0)}}t=$.xl
if(t!=null)C.i.bl(t)
t=E.jL(q.b)
$.xl=t
$.xk.appendChild(t)
E.u5()
t=$.jH;(t&&C.i).bl(t)
t=$.jI;(t&&C.i).bl(t)
$.cA.y2.toString
$.qI.appendChild($.jH)
$.qJ.appendChild($.jI)
E.xg(q.b)
if(!s.cj(!0)){m=new A.bI(null,null)
m.aA(null)
t=$.c1
p=m.v(t.e.geg())
t.e.aP(p)}},
$S:function(){return{func:1,args:[,]}}}
E.qP.prototype={
$1:function(a){var t,s,r,q
t=$.fs
s=E.dW(J.cN(J.c7((t&&C.f).gaK(t),0)))
E.xi(s)
t=$.fu
E.dW(J.cN(J.c7((t&&C.f).gaK(t),0)))
t=$.c1.e
r=$.fq
if((t==null?r==null:t===r)&&s.e.T(0,$.be)){q=new A.bI(null,null)
q.aA(null)
t=$.c1
r="It seems you have not considered the consequences of alchemizing with that corrupt as fuck "+s.c+", asshole.<br><br>Don't worry, as your superior RoboOverlord, I will guide you. <br><Br>There will be all the consequences. All of them. Don't fucking do it. I don't care how fucking "+H.n(C.a.gV(q.v(s.e).gb4()))+" it is."
t.e.aP(r)}J.c3($.qq,"Alchemize For: "+E.qv())
t=$.jH;(t&&C.i).bl(t)
t=E.jL(s)
$.jH=t
$.qI.appendChild(t)},
$S:function(){return{func:1,args:[,]}}}
E.qQ.prototype={
$1:function(a){var t,s,r,q
t=new A.bI(null,null)
t.aA(null)
s=$.jJ
r=J.cN(J.c7((s&&C.f).gaK(s),0))
J.c3($.qq,"Alchemize For: "+E.qv())
s=J.am(r)
if(s.O(r,$.r6)){s=$.c1
q=t.v(s.e.gdR())
s.e.aP(q)}else if(s.O(r,$.tg)){s=$.c1
q=t.v(s.e.gei())
s.e.aP(q)}else if(s.O(r,$.tC)){s=$.c1
q=t.v(s.e.gez())
s.e.aP(q)}},
$S:function(){return{func:1,args:[,]}}}
E.qR.prototype={
$1:function(a){var t,s,r,q
J.c3($.qq,"Alchemize For: "+E.qv())
t=$.fu
s=E.dW(J.cN(J.c7((t&&C.f).gaK(t),0)))
E.xi(s)
t=$.fs
E.dW(J.cN(J.c7((t&&C.f).gaK(t),0)))
t=$.c1.e
r=$.fq
if((t==null?r==null:t===r)&&s.e.T(0,$.be)){q=new A.bI(null,null)
q.aA(null)
t=$.c1
r="It seems you have not considered the consequences of alchemizing with that corrupt as fuck "+s.c+", asshole.<br><br>Don't worry, as your superior RoboOverlord, I will guide you. <br><Br>There will be all the consequences. All of them. Don't fucking do it. I don't care how fucking "+H.n(C.a.gV(q.v(s.e).gb4()))+" it is."
t.e.aP(r)}t=$.jI;(t&&C.i).bl(t)
t=E.jL(s)
$.jI=t
$.qJ.appendChild(t)},
$S:function(){return{func:1,args:[,]}}}
E.dZ.prototype={
c9:function(a){var t,s,r,q
t=this.b
s=$.jZ
t=t.classList.contains(s)
if(t){t=this.a
P.cE("Achivement Get: "+t.gM(t))
s=this.b
r=$.jZ
s.classList.remove(r)
s=this.b
r=$.r7
s.classList.add(r)
q=C.e.a5((Math.abs(t.gas())+1)*13)
$.cO=$.cO+q
E.un()
return t.d+"(+"+q+" grist)"}t=this.a
P.cE("Achivement "+t.gM(t)+" already found.")
return},
by:function(a){var t,s
t=document.createElement("div")
this.b=t
s=$.jZ
t.classList.add(s)
s=this.b
t=this.a;(s&&C.i).at(s,t.gM(t))
a.appendChild(this.b)},
gj2:function(){var t,s
t=this.b
s=$.r7
t=t.classList.contains(s)
return t}}
E.k0.prototype={
$1:function(a){E.xX()
window.location.reload()},
$S:function(){return{func:1,args:[,]}}}
E.nB.prototype={
by:function(a){var t,s,r,q
t=document.createElement("div")
this.b=t
s=$.wa
t.tabIndex=s
$.wa=s+1
s=this.gfz(this)
t.classList.add(s)
t=this.c.e
s=this.b
r=this.a
q=s&&C.i
if(!(t instanceof E.jc))q.at(s,r.gaY())
else{t=new A.bI(null,null)
t.aA(null)
q.at(s,r.eH(t))}a.appendChild(this.b)
t=this.b
t.toString
W.cJ(t,"click",new E.nE(this),!1,W.f6)},
gaD:function(a){return this.a},
gfz:function(a){return this.d}}
E.nE.prototype={
$1:function(a){var t,s
t=this.a
s=t.c
J.c3(s.d,s.e.dm(t.a))
t.h9()},
$S:function(){return{func:1,args:[,]}}}
E.hn.prototype={
h9:function(){var t,s,r
t=document.createElement("button")
s=this.c
r=C.e.a5(s.e.gdi()*(Math.abs(this.a.gas())+1)*-5)
C.j.at(t,"Buy For "+r+" Grist?")
t.classList.add("transactButton")
s.d.appendChild(t)
if(Math.abs(r)<=$.cO)W.cJ(t,"click",new E.nC(this,r),!1,W.f6)
else{t.disabled=!0
C.j.at(t,"Lol, You can't Afford "+r+".")}},
gfz:function(a){return this.e}}
E.nC.prototype={
$1:function(a){var t,s
t=new A.bI(null,null)
t.aA(null)
s=$.cO+this.b
$.cO=s
J.c3($.e9,"Grist: "+s)
s=this.a
$.cA.y2.h(0,s.a)
s=s.c
s.dj()
J.c3(s.d,t.v(s.e.gel()))},
$S:function(){return{func:1,args:[,]}}}
E.jd.prototype={
h9:function(){var t,s,r
t=document.createElement("button")
s=this.c
r=C.l.a5((Math.abs(this.a.gas())+1)*2/s.e.gdi())
C.j.at(t,"Sell For "+r+" Grist?")
t.classList.add("transactButton")
s.d.appendChild(t)
W.cJ(t,"click",new E.nD(this,r),!1,W.f6)}}
E.nD.prototype={
$1:function(a){var t,s,r,q
t=new A.bI(null,null)
t.aA(null)
s=$.cO+this.b
$.cO=s
J.c3($.e9,"Grist: "+s)
s=this.a
r=s.a
q=$.cA.y2.a;(q&&C.a).an(q,r)
s=s.c
q=s.r
r=new E.hn("yourItems",r,null,s,"myItems")
r.by(s.a)
q.push(r)
s.dj()
J.c3(s.d,t.v(s.e.gh7()))},
$S:function(){return{func:1,args:[,]}}}
E.nA.prototype={
bR:function(a){var t,s,r,q
this.e=a
a.cM()
this.bb(0)
if(a.gbB().length===0)this.cN($.$get$fW())
else{t=H.a([],[A.a4])
for(s=this.e.gbB(),r=s.length,q=0;q<s.length;s.length===r||(0,H.bp)(s),++q)C.a.W(t,A.vI(s[q]))
this.cN(t)}},
hy:function(a){var t,s,r,q
t=this.f
if(a==null?t!=null:a!==t)this.f=this.e
this.e=a
a.cM()
this.bb(0)
s=H.a([],[A.a4])
for(t=this.e.gbB(),r=t.length,q=0;q<t.length;t.length===r||(0,H.bp)(t),++q)C.a.W(s,A.vI(t[q]))
this.cN(s)},
bb:function(a){var t,s,r,q,p
for(t=this.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.bp)(t),++r){q=t[r].b
p=q.parentNode
if(p!=null)p.removeChild(q)}C.a.sn(this.r,0)},
jn:function(){var t,s,r,q,p
for(t=this.x,s=t.length,r=0;r<t.length;t.length===s||(0,H.bp)(t),++r){q=t[r].b
p=q.parentNode
if(p!=null)p.removeChild(q)}C.a.sn(t,0)},
hC:function(a,b){var t,s,r,q,p;(a&&C.a).eJ(a)
for(t=H.I(a,0),s=new H.hk(a,[t]),t=new H.dx(s,s.gn(s),0,null,[t]),s=this.a;t.w();){r=t.d
q=this.r
p=new E.hn("yourItems",r,null,this,"myItems")
p.by(s)
q.push(p)}},
cN:function(a){return this.hC(a,!1)},
dj:function(){var t,s,r,q
this.jn()
for(t=this.c.y2.a,t=new J.dF(t,t.length,0,null,[H.I(t,0)]),s=this.x,r=this.b;t.w();){q=new E.jd(t.d,null,this,"myItems")
q.by(r)
s.push(q)}}}
E.ho.prototype={
fU:function(a){var t,s,r,q,p
if(this.gbB().length===0)return!1
for(t=this.gbB(),s=t.length,r=!0,q=0;q<t.length;t.length===s||(0,H.bp)(t),++q){p=t[q]
if(!a.ga9().T(0,p))r=!1}return r},
cM:function(){var t,s,r
J.xS(this.f,this.gcw())
t=this.e.style
s="#"+this.gdc().hf(!1)
t.color=s
r=new A.bI(null,null)
r.aA(null)
this.aP(r.v(this.gc8()))},
aP:function(a){J.c3(this.e,a)},
gdc:function(){return this.a},
gdi:function(){return this.b},
gbB:function(){return this.c},
gcw:function(){return this.d},
gel:function(){return this.r},
gh7:function(){return this.x},
gc8:function(){return this.y}}
E.hO.prototype={
dm:function(a){var t,s,r
t=new A.bI(null,null)
t.aA(null)
s=C.e.a5((90+t.a.D()*10)*100)
r=a.cj(!0)?"You can upgrade this, dunkass.":"It's only good for selling anymore."
return"There is a "+H.n(s/100)+"% chance that this "+a.gaY()+" has these traits: "+Y.fv(P.bf(a.e,!0,null))+". "+r+" "+H.n(a.j1(t))},
gdc:function(){return this.cy},
gel:function(){return this.db},
gh7:function(){return this.dx},
geg:function(){return this.dy},
gcw:function(){return this.fr},
gdR:function(){return this.fx},
gei:function(){return this.fy},
gez:function(){return this.go},
gc8:function(){return this.id}}
E.lt.prototype={
aP:function(a){J.c3(this.e,Y.cW(a))},
cM:function(){this.hS()
var t=new A.bI(null,null)
t.aA(null)
J.c3(this.e,Y.cW(H.n(t.v(this.k1))+" I FUCKING WARNED YOU, DOG!"))},
gc8:function(){return this.k1},
gcw:function(){return this.k2},
gbB:function(){return this.k3}}
E.jT.prototype={
dm:function(a){if(a.ga9().T(0,$.ar)&&a.e.T(0,$.aJ))return"Interesting!!!"
else if(a.e.T(0,$.ar)||a.e.T(0,$.aJ))return"Yes."
else return"Hrmmm..."},
gdc:function(){return this.cy},
gdi:function(){return this.db},
gbB:function(){return this.dx},
gcw:function(){return this.dy},
gel:function(){return this.fr},
geg:function(){return this.fy},
gdR:function(){return this.go},
gei:function(){return this.id},
gez:function(){return this.k1},
gc8:function(){return this.k2}}
E.jc.prototype={
dm:function(a){var t=new A.bI(null,null)
t.aA(null)
return H.n(a.eH(t))},
gdc:function(){return this.cy},
gdi:function(){return this.db},
gcw:function(){return this.dx},
geg:function(){return this.dy},
gdR:function(){return this.fr},
gei:function(){return this.fx},
gez:function(){return this.fy},
gc8:function(){return this.go}}
E.jU.prototype={
ey:function(){var t=0,s=P.uB(),r=this
var $async$ey=P.wV(function(a,b){if(a===1)return P.wI(b,s)
while(true)switch(t){case 0:P.cE("AB wins!")
P.tz(P.uL(0,0,0,50,0,0),new E.jW(r))
return P.wJ(null,s)}})
return P.wK($async$ey,s)},
fZ:function(){var t,s
P.cE("AB says next!")
t=this.b
s=this.a
if(t>=s.length)return!1
J.dp($.d8,"beforeend",""+t+", ",null,null)
t=this.b
if(t>=s.length)return H.J(s,t)
E.xg(J.uh(s[t]));++this.b
P.tz(P.uL(0,0,0,50,0,0),new E.jV(this))}}
E.jW.prototype={
$0:function(){return this.a.fZ()},
$S:function(){return{func:1}}}
E.jV.prototype={
$0:function(){return this.a.fZ()},
$S:function(){return{func:1}}}
D.d9.prototype={
cl:function(a,b){C.a.W(b,H.a(["The "+a.de()+" uses Alchemy to combine "+Y.fv(this.a)+" to get "+this.b.gaY()+". "+H.n(this.b.c6(a.c.A))],[P.v]))
return a.c.A.v(b)},
jf:function(a,b){var t,s,r,q,p,o,n,m,l
t=a.y2.a
for(s=this.a,r=t&&C.a,q=0;q<2;++q){p=s[q]
if(!r.T(t,p)&&!J.a5(p,a.a))return}s=r.be(t,this.a[0])
o=t.length
if(s<0||s>=o)return H.J(t,s)
n=t[s]
P.cE("modified is from sylladex, is "+P.en(n.ga9(),"{","}")+", result is "+P.en(this.b.ga9(),"{","}"))
s=this.b
s.f=s.gkg()+1
m=this.cl(a,[])
n.e=P.h0(this.b.ga9(),G.V);++n.f
a.c.ak.cy
for(l=1;l<2;++l)r.an(t,this.a[l])
return m},
je:function(a){return this.jf(a,!1)},
aU:function(a,b){var t=J.uh(b).gas()-this.b.gas()
if(t>0)t=1
else if(t<0)t=-1
return C.e.a5(t)},
$isbw:1,
$asbw:function(){return[D.d9]},
gc2:function(){return this.a},
gap:function(a){return this.b}}
D.fz.prototype={
cl:function(a,b){C.a.W(b,H.a([a.de()+" overlaps the punched cards for "+Y.fv(this.a)+" to get "+this.b.gaY()+". "+H.n(this.b.c6(a.c.A))],[P.v]))
return this.dz(a,b)},
b3:function(){var t,s,r,q,p
this.b=this.a[0].bt()
for(t=[null],s=1;s<2;++s)for(r=this.a[s].ga9(),q=new P.d6(r,r.r,null,null,t),q.c=r.e;q.w();){p=q.d
this.b.ga9().h(0,p)}}}
D.fA.prototype={
cl:function(a,b){C.a.W(b,H.a([a.de()+" carefully punches all holes from "+Y.fv(this.a)+" into one card to get "+this.b.gaY()+". "+H.n(this.b.c6(a.c.A))],[P.v]))
return this.dz(a,b)},
b3:function(){var t,s,r
t=this.a[0].bt()
this.b=t
t.ga9().bb(0)
for(t=this.a[0].gjK(),s=J.bC(t.a),t=new H.dV(s,t.b,[H.I(t,0)]);t.w();){r=s.gG()
this.b.ga9().h(0,r)}for(t=this.a[1].gjd(),s=J.bC(t.a),t=new H.dV(s,t.b,[H.I(t,0)]);t.w();){r=s.gG()
this.b.ga9().h(0,r)}}}
D.fB.prototype={
cl:function(a,b){C.a.W(b,H.a(["Wait. What the fuck? Is this cheating? The "+a.de()+" figures out how to use a XOR operation to turn "+Y.fv(this.a)+" into a "+this.b.gaY()+". "+H.n(this.b.c6(a.c.A))],[P.v]))
return this.dz(a,b)},
b3:function(){var t=this.a[0].bt()
this.b=t
t.sa9(this.a[0].ga9().fG(this.a[1].ga9()))
this.b.ga9().W(0,this.a[1].ga9().fG(this.a[0].ga9()))}}
K.bL.prototype={}
L.k4.prototype={
$1:function(a){return!a.gcC()},
$S:function(){return{func:1,args:[L.cZ]}}}
L.k5.prototype={
$1:function(a){return a.gcB()},
$S:function(){return{func:1,args:[L.cZ]}}}
L.k6.prototype={
$1:function(a){return!a.gcB()},
$S:function(){return{func:1,args:[L.cZ]}}}
L.cZ.prototype={
H:function(){var t,s
t=Q.F(null,null,A.a4)
s=A.i("Perfectly Generic Object",H.a([],[G.V]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),[H.I(t,0)]))
this.r2=t},
ed:function(a){var t,s,r
for(t=this.gI(),s=t.length,r=0;r<t.length;t.length===s||(0,H.bp)(t),++r)t[r].cY(a)},
fJ:function(){return"<font color='"+this.ga_().m(0,$.at).hg()+"'> "},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.v]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.Y,P.T]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.dc,$.j)
q.i(0,$.bl,$.D)
q.i(0,$.dO,$.j)
q.i(0,$.c8,$.l)
q.i(0,$.e2,$.D)
p=$.k
o="The "+p+" learns that all of the local "
n=$.t
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.P+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.y
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.cu+". The "+p+" has won! "
i=[U.c]
q.i(0,new R.W("Revive the Consorts",!1,[new U.c(o),new U.c(m),new U.c(n),new U.ab(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
j=$.aP
this.c.i(0,new X.E(s,q,null),j)
j=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.eS,$.j)
s.i(0,$.ei,$.D)
s.i(0,$.eR,$.l)
s.i(0,$.cQ,$.j)
s.i(0,$.cx,$.D)
q=$.k
p="The "+q+" learns that all of the local "
o=$.t
p=p+o+"s have a severe shortage of gears and cogs. It is up to the "+q+" to get the assembly lines up and running again. "
n="The "+q+" is running around and fixing all the broken down equipment. This sure is tiring! "
m="The "+q+" is training the local "+o+"s to operate the manufacturing equipment. There is "+$.P+"ing and chaos everywhere. "
o="The "+q+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+o+"s name a national holiday after the "+q+". "
l="It is time for the "+q+"  to finally face the "
k=$.y
l=l+k+". "
h="The "+k+" lies slain by the "+q+"'s "+$.cu+". The "+q+" has won! "
s.i(0,new R.W("Produce the Goods",!1,[new U.c(p),new U.c(n),new U.c(m),new U.c(o),new U.ab(l,"The tyranny of "+k+" continues with the defeat of the "+q+".",h)],H.a([],i),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
h=$.aP
this.c.i(0,new X.E(j,s,null),h)
h=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.ba,$.j)
t.i(0,$.bl,$.D)
t.i(0,$.cf,$.l)
s=$.k
r="The "+s+" learns that all of the local "
q=$.t
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+s+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
o=$.P
p=p+o+"ing about? A prophecy?  "
o="The "+s+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+o+" once. "
q="It is time for the "+s+"  to finally face the "
n=$.y
q=q+n+". "
m="The "+n+" lies slain by the "+s+"'s "+$.cu+". The "+s+" has won! "
t.i(0,new R.a2("Relax the Consorts According to Prophecy",!1,[new U.c(r),new U.c(p),new U.c(o),new U.ab(q,"The tyranny of "+n+" continues with the defeat of the "+s+".",m)],H.a([],i),R.tr(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.D)
m=$.k
s="The "+m+" learns that all of the local "
n=$.t
s=s+n+"s have been too stressed about an impending famine to relax. They vow to help however they can."
q="The "+m+" fluffs more pillows than any other Player ever has before them. "
n="The "+m+"  teaches the local "+n+"s to find their chill. "
o="It is time for the "+m+"  to finally face the "
p=$.y
o=o+p+". "
r="The "+p+" lies slain by the "+m+"'s "+$.cu+". The "+m+" has won! "
t.i(0,new R.W("Relax the Consorts",!1,[new U.c(s),new U.c(q),new U.c(n),new U.ab(o,"The tyranny of "+p+" continues with the defeat of the "+m+".",r)],H.a([],i),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
i=$.aP
this.c.i(0,new X.E(h,t,null),i)},
u:function(a){return this.x},
a1:function(a,b,c,d){var t
this.d=new X.i6("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+this.x+".xml",!1,H.a([],[X.hU]),H.a([],[M.fM]))
t=this.x
this.y=t
this.e=t+".png"
this.f=t+"Big.png"
this.H()
this.F()
t=this.b
if($.$get$eG().aj(0,t))H.bq("Duplicate aspect id for "+this.u(0)+": "+t+" is already registered for "+J.cm($.$get$eG().m(0,t))+".")
$.$get$eG().i(0,t,this)},
gaV:function(){return this.a},
gbz:function(){return this.c},
gM:function(a){return this.x},
gds:function(){return this.y},
gcB:function(){return this.z},
gcC:function(){return this.Q},
ga_:function(){return this.dx},
gJ:function(){return this.dy},
gao:function(){return this.fr},
gS:function(){return this.k3},
gI:function(){return this.k4},
gdw:function(){return this.r1},
gc2:function(){return this.r2},
sM:function(a,b){return this.x=b}}
L.an.prototype={
sfs:function(a){return this.j(0,$.aw,L.e(a),!0)},
sfq:function(a){return this.j(0,$.av,L.e(a),!0)},
sfB:function(a){return this.j(0,$.ay,L.e(a),!0)},
sfC:function(a){return this.j(0,$.az,L.e(a),!0)},
sfA:function(a){return this.j(0,$.ax,L.e(a),!0)},
seG:function(a){return this.j(0,$.aD,L.e(a),!0)},
seF:function(a){return this.j(0,$.aC,L.e(a),!0)},
sh4:function(a){return this.j(0,$.aB,L.e(a),!0)},
sh3:function(a){return this.j(0,$.aA,L.e(a),!0)}}
M.ka.prototype={
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Barbells",H.a([$.ai,$.c9,$.C],s),null,!1,"Strength Building Metal")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Basketball",H.a([$.em,$.ca],s),null,!1,"Dunksphere")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Baseball Bat",H.a([$.iJ,$.a1],s),null,!1,"Wooden Pole of Bone Hurting")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Rubber Ball",H.a([$.em,$.ca],s),null,!1,"Dead Animal Corpse Ball")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Megaphone",H.a([$.b9,$.aa],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Hockey Stick",H.a([$.iJ,$.a1,$.dw],s),null,!1,"L Shaped Bone Hurter")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Trophy",H.a([$.C,$.bj],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Boxing Glove",H.a([$.ve,$.ca],s),null,!1,"Fist Reinforcing Pain Cubes")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Yoga Mat",H.a([$.ca,$.bh],s),null,!1,"Flesh Rubberising Practice Mat")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.v]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.Y,P.T]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.dP,$.D)
q.i(0,$.co,$.l)
q.i(0,$.cQ,$.D)
p=$.k
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.t
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.P+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.c]
q.i(0,new R.a2("Enter the Dungeon",!1,[new U.c(o),new U.c(n),new U.c(p)],H.a([],l),R.x(),!1,!1,new Y.by("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.w)
m=$.k
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.t
q.i(0,new R.a2("Clear the Road",!1,[new U.c(p+n+" merchants waiting for it to be cleared. "),new U.c("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.c("With a triumphant "+$.P+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.e5(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
m=$.k
n="The "+m+"  wanders into a bunch of "
p=$.t
q.i(0,new R.a2("Be the Strongest",!1,[new U.c(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.c("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.c("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.j8(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
m=$.aQ
this.r.i(0,new X.E(s,q,null),m)
m=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.dP,$.l)
t.i(0,$.eV,$.l)
t.i(0,$.co,$.l)
s=$.k
r="The "+s+" finds a team of underdog "
q=$.t
t.i(0,new R.a2("Save the Sports",!1,[new U.c(r+q+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.c("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.c("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+q+" have won the SPORTSBALL tournament.")],H.a([],l),R.w_(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
q=$.t
s="A group of "+q+"s approach the "
r=$.k
s=s+r+". Apparently their sports team lost their coach to the "+$.y+" recently, and they need help training for THE BIG GAME. "
p="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+q+"s into fighting shape. "
o="The "+q+"s fall over "
n=$.P
t.i(0,new R.a2("Coach the Sports",!1,[new U.c(s),new U.c(p),new U.c(o+n+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+q+"s cheering and "+n+"ing.")],H.a([],l),R.e5(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
n=$.t
q="A group of "+n+"s approach the "
r=$.k
t.i(0,new R.a2("Win at Sports",!1,[new U.c(q+r+". Apparently their sports team lost a member to the "+$.y+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.c("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.c("The "+r+" ganks the "+$.ak+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+n+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
l=$.aQ
this.r.i(0,new X.E(m,t,null),l)},
gI:function(){return this.cx},
gav:function(){return this.cy},
gaw:function(){return this.db},
gJ:function(){return this.dx},
gaC:function(){return this.dy}}
O.kb.prototype={
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Cod Piece",H.a([$.Q,$.a6,$.b6,$.S],s),"God damn it, MI. ",!1,null)
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Poisoned Candy",H.a([$.rL,$.S,$.bN],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Cursed Lyre",H.a([$.aR,$.a1,$.bz,$.S,$.ae],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Snare Trap",H.a([$.Q,$.aR,$.S,$.bi],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.v]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Y,P.T])
t.i(0,$.cF,$.j)
t.i(0,$.fQ,$.j)
t.i(0,$.cp,$.j)
t.i(0,$.dK,$.j)
t.i(0,$.cC,$.j)
t.i(0,$.eM,$.j)
r="After all the bullshit the "+$.y+" has put the native "
q=$.t
r=r+q+"s through, the "
p=$.k
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.b_+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.P
m=[U.c]
t.i(0,new R.ac("Celebrate the Win",!1,[new U.c(r),new U.c(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.c(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.x(),!1,!1,new Y.ew("Rewards/no_reward.png",null),1,null,null),$.w)
p=$.t
n="A group of jubilant "+p+"s are following the "
q=$.k
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.P
t.i(0,new R.ac("Lead the Parade",!1,[new U.c(n),new U.c(o+r+"ing about how they defeated the "+$.y+". Wow, this is actually kind of embarrasing. "),new U.c("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
q=$.k
t.i(0,new R.ac("Behold the Glory of CodTier",!1,[new U.c("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.y+" has been defeated, perhaps they can finally focus on finding it."),new U.c("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.x(),!1,!1,new Y.kp("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.w)
q="The "+$.y+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.k
q=q+r+" organizes a huge festival for all the "
p=$.t
t.i(0,new R.bD("Pull the Strings of a Universe",!1,[new U.c(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.c("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.c("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.bY(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ad)
m=$.bQ
this.c.i(0,new X.E(s,t,null),m)},
gJ:function(){return this.k1},
gS:function(){return this.k4}}
Y.om.prototype={
$ashq:function(){return[P.v]},
$asde:function(){return[P.v,P.v]}}
L.kf.prototype={
gco:function(){return this.id}}
T.kh.prototype={
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Mystical Vial of Blood",H.a([$.bb,$.bz,$.X,$.b1],s),null,!1,"Vial of Not-ABs Oil")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Bananaphone",H.a([$.aH,$.bz,$.X,$.b7],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Friendship Bracelet",H.a([$.Q,$.bz,$.X,$.b1,$.fU],s),null,!1,"Soul Binding Wrist Shackle")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Bonding Manacles",H.a([$.C,$.bi,$.X,$.b1,$.fU,$.aU],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Friendship Stairs",H.a([$.a1,$.rV,$.bz,$.b1,$.X,$.a6],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.v]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.Y,P.T]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.dr,$.j)
q.i(0,$.rx,$.j)
q.i(0,$.c8,$.l)
p=$.k
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.t
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.ak+" and some boondollars in compensation."
n=this.r2
k=[U.c]
q.i(0,new R.a2("Cross the Lake",!1,[new U.c(o),new U.c(m),new U.c(l),new U.c(p)],H.a([],k),R.e5(),!1,!1,new Y.by("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.w)
n=$.t
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.P+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.y
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.k
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.cu+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.i(0,new R.W("Unplug the Rivers",!1,[new U.c(p),new U.c(o),new U.c(j),new U.ab(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.aP
this.c.i(0,new X.E(s,q,null),n)
n=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.cQ,$.j)
s.i(0,$.cC,$.D)
s.i(0,$.ba,$.D)
s.i(0,$.lj,$.j)
s.i(0,$.cp,$.D)
q=$.k
p="The "+q+"  and the "
o=$.e6
p=p+o+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
m="The "+q+"  and the "+o+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
l="The "+q+"  and the "+o+" trust each other to have their backs.  So when the "
j=$.y
l=l+j+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+j+"."
i="Slaying the "+j+" proves the POWER OF TEAMWORK!"
s.i(0,new R.W("Learn the Power of Teamwork",!1,[new U.c(p),new U.c(m),new U.ab(l,"The "+q+" and "+o+" end up getting distracted bickering after one of the "+j+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",i)],H.a([],k),R.ev(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.ad)
i=$.k
j="The "+i+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
o=$.t
j=j+o+"s explains that before  "
q=$.y
j=j+q+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+o+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+i+" vows to help. "
o="The "+i+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+o+"s discover that "+o+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
l="The "+i+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+q+" needs to be stopped. "
m="The "+i+" has tracked down "+q+". There can be no mercy. "
p="The "+q+" lies slain by the "+i+"'s "+$.cu+". The "+i+" is finally free to restore the chains, bringing peace and understanding to the land. "
s.i(0,new R.W("Chain the Towers",!1,[new U.c(j),new U.c(o),new U.c(l),new U.ab(m,"The tyranny  and xenophobia of "+q+" continues with the defeat of the "+i+".",p)],H.a([],k),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.k
i="The "+p+" learns of the "
q=$.b_
i=i+q+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
m=$.t
i=i+m+" explains that the "
l=$.y
m=i+l+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+m+"s from communciating with other villages and risking the entire planet falling apart.  "
i="The "+p+" hears of a fantastical secret kept at the top of the "+q+" Tower. It is said that the "+l+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
o="The "+p+" defeats a fearsome "+l+" minion, whose death unlocks the most direct path to the "+q+" Tower . "
j="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+l+". "
p="The "+l+" lies slain by the "+p+"'s "+$.cu+". The "+p+" is finally able to see what lies at the top of the "+q+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.i(0,new R.W("Protect the Beams",!1,[new U.c(m),new U.c(i),new U.c(o),new U.ab(j,"The "+q+" Tower is more at risk than ever before.",p)],H.a([],k),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.k
q="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
j=$.t
q=q+j+" on "+$.b_+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
o="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
j="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+j+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+j+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.eW+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.i(0,new R.ac("One Degree of Separation",!1,[new U.c(q),new U.c(o),new U.c(j)],H.a([],k),R.fc(),!1,!1,new Y.R("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.k
j="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.t+" on "
o=$.b_
j=j+o+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
q="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
o="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+o+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.eW+" is now more popular with your friends than you are."
s.i(0,new R.ac("Steal The Friends",!1,[new U.c(j),new U.c(q),new U.c(o)],H.a([],k),R.ts(),!1,!1,new Y.R("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.k
o="The "+p+"  and the "
q=$.e6
o=o+q+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
j="The "+p+"  and the "+q+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
i=$.y
j=j+i+" doing here!?"
i="Slaying the "+i+" proves to be the thing that finally pushes the "+p+" and "+q+" together."
s.i(0,new R.W("Pale Shipping Dungeon",!1,[new U.c(o),new U.ab(j,"The "+p+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.n(C.x)+".",i)],H.a([],k),R.ev(),!1,!1,new Y.j5(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ad)
i=$.aP
this.c.i(0,new X.E(n,s,null),i)
i=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.ba,$.j)
t.i(0,$.bl,$.D)
t.i(0,$.cf,$.l)
s="In the wake of the defeat of the "+$.y+" it becomes really how isolated the individual "
r=$.t
s=s+r+" villages are. It is far too common for a young "+r+" to never have even MET their cousins. The "
q=$.k
s=s+q+" resolves to fix this as soon as possible."
q="The "+q+" is working hard to restore roads, track down long lost family members and generally just remind all the "+r+"s that at the end of the day they are all one big happy family. "
r="All those hours of hard work have paid off, the individual "+r+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
p="It may take a village for the "+$.eW+" to kick your ass, but luckily they have several."
t.i(0,new R.ac("Connect The Villages",!1,[new U.c(s),new U.c(q),new U.c(r)],H.a([],k),R.e5(),!1,!1,new Y.R("Community Builder",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.k
r="The "+p+" learns that two prominent "
q=$.t
r=r+q+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+q+"s pick a side, and everyone is suffering."
s="The "+p+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
o="In a dramatic reveal, the "+p+" discovers that "
n=$.y
o=o+n+" is responsible for the feud. The two "+q+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
m="The "+p+" confronts "+n+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+p+" be able to claim it?"
q="The "+n+" lies slain by the "+p+"'s "+$.cu+". The "+p+" shows the proof to the two "+q+" families, who reconcile in a dramatic shower of happy tears and "+$.P+"ing. "
t.i(0,new R.W("Stop the Feud",!1,[new U.c(r),new U.c(s),new U.c(o),new U.ab(m,"The deception of "+n+" continues with the defeat of the "+p+".",q)],H.a([],k),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
k=$.aP
this.c.i(0,new X.E(i,t,null),k)},
gaV:function(){return this.rx},
ga_:function(){return this.ry},
gJ:function(){return this.x2},
gS:function(){return this.y1},
gao:function(){return this.E},
gI:function(){return this.R}}
T.kj.prototype={
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Pan's Pipe",H.a([$.ae,$.a1,$.bz,$.X],s),null,!1,"Smonkin Weeds Pipe")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Skeleton Key",H.a([$.bd,$.X],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Inspector's Fan",H.a([$.aa,$.C,$.bz,$.X],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Jet Pack",H.a([$.ar,$.C,$.b9,$.X,$.a6],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.v]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.Y,P.T]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cf,$.l)
q.i(0,$.eV,$.j)
q.i(0,$.ba,$.l)
p=$.k
o="The "+p+" tries posting a letter through the "
n=$.ak
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.y
o=o+m+" has screwed with the mail system, crippling the "
l=$.t
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.cu+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
i=[U.c]
q.i(0,new R.W("The Mail Goes Through",!1,[new U.c(o),new U.c(k),new U.c(n),new U.ab(j,"The tyranny of "+m+" continues with the defeat of the "+p+".",l)],H.a([],i),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
l=$.aP
this.c.i(0,new X.E(s,q,null),l)
l=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.bl,$.j)
s.i(0,$.eV,$.l)
s.i(0,$.ba,$.l)
s.i(0,$.co,$.l)
s.i(0,$.cf,$.l)
q=$.k
p="The "+q+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+q+" decides that they should use the winds of their land for more projects. "
o="The "+q+" starts learning the uses of their lands "
n=$.ak
o=o+n+" in manipulation of wind. Their future constructions are going to be amazing. "
n="The "+q+" uses "+n+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
m=$.t
m=n+m+" fields. The "+m+"s "+$.P+"ing is so joyful it's literally deafening. "
n=$.y
k=n+" is attacking the happy wind based farming community. The "+q+" has worked too hard for it all to be lost now. There can be no mercy. "
j="The "+n+" lies slain by the "+q+"'s "+$.cu+". The "+q+" is finally free to continue improving the land with wind. "
s.i(0,new R.W("Thinking With Wind Power",!1,[new U.c(p),new U.c(o),new U.c(m),new U.ab(k,"The tyranny of "+n+" continues with the defeat of the "+q+".",j)],H.a([],i),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
j=$.aP
this.c.i(0,new X.E(l,s,null),j)
j=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.cx,$.j)
t.i(0,$.ry,$.j)
t.i(0,$.eV,$.D)
t.i(0,$.cf,$.D)
s=$.k
r="The "+s+" is chilling in a "+$.t+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
q=$.y
r=r+q+" has screwed with the wind system, sending these giant storms at random."
p="The "+s+" learns of a "
o=$.ak
p=p+o+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+o+" system so the storms are redirected from consort villages. "
o="The "+s+" finishes the dungeon that holds the  "+o+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.b_+" to do control the storms in the first place, and it was inside them all along.  "
n=" "+q+" arrives to challenge the "+s+" storm supremacy. Will the "+s+" be able to prove their worth?"
m="The "+q+" lies slain by the "+s+"'s "+$.cu+". The "+s+" has become the storm master. It is them. "
t.i(0,new R.W("The Winds of Change",!1,[new U.c(r),new U.c(p),new U.c(o),new U.ab(n,"The storm supremacy of "+q+" continues with the defeat of the "+s+".",m)],H.a([],i),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
i=$.aP
this.c.i(0,new X.E(j,t,null),i)},
gaV:function(){return this.rx},
ga_:function(){return this.ry},
gJ:function(){return this.x2},
gS:function(){return this.y1},
gao:function(){return this.E},
gI:function(){return this.R}}
Z.kk.prototype={
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.v]
s=H.a(["Skateboards","Bikes","Ramps","Glitches","Some Noise","Stunting","Game"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Y,P.T])
t.i(0,$.dP,$.w)
t.i(0,$.co,$.D)
t.i(0,$.eQ,$.j)
t.i(0,$.eO,$.ad)
t.i(0,$.li,$.D)
r=$.k
q="The "+r+" is a bit confused about SBURB. apparently it's about "
p=$.ak
q=q+p+"s or some noise?"
p="The "+r+" is sure that "+p+"s are like fucking dynamite in a handbag for some brosephs. But all they're saying is, when do you get to <b>thrash</b> anything?"
o="The "+r+' gives up on playing the game for now, and decides to instead bust out, and I quote, "the mad stunts all wicked up-ins".'
n=$.y
m="So ok. <br></br> An end to the disasters caused by "+n+" is something that a lot of "+$.t+"s seem hella pumped of. And their lair is sitting right in front of the "+r+", so they're like, yeah man I'll fight it."
n+=" is so wasted, ha ha. I mean damn."
l=[U.c]
t.i(0,new R.W("Bust Out the Mad Stunts all Wicked Up-Ins",!1,[new U.c(q),new U.c(p),new U.c(o),new U.ab(m,"the "+r+" has failed, and the consorts remain in jeopardy of getting mud on their doll's dresses or whatever.",n)],H.a([],l),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.D)
n=$.k
r="At this point, the "+n+" would like to give a shout out to their boy "
m=$.e6
r=r+m+". the two are about to go chill in front of The Dark "+$.P+", and are so psyched of it."
o="The "+m+" was leaning against the screen door when the shit popped open. they slip down the steps and break their thumb on the lawn. It wasn't a long fall, but hey I guess a thumb bone wasn't made for supporting the brunt of a huge useless tool against wet grass."
n="The "+n+" and the "+m+" didn't actually go see the movie on account of a "+$.t+" trucking his bawling "+$.ak+"-ass girth into the hospital. the "+n+" give it 1.5 "
p=$.b_
t.i(0,new R.ac("Give a Shout-Out to their Boy",!1,[new U.c(r),new U.c(o),new U.c(n+p+"s out of 5 "+p+"s anyways, to keep it real. <br></br>It's OK though, The "+m+" still has another watch in them, Brotel Rwanda.")],H.a([],l),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.D)
l=$.aP
this.c.i(0,new X.E(s,t,null),l)},
al:function(){return!0},
gJ:function(){return this.k1},
gS:function(){return this.x2},
gI:function(){return this.y1}}
M.hT.prototype={}
Y.kl.prototype={
$ashq:function(){return[M.hT]},
$asde:function(){return[M.hT,P.v]}}
A.ku.prototype={
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Colonel Sassacre's Daunting Text ",H.a([$.O,$.ai,$.b7,$.c9],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Wise Guy Book",H.a([$.O,$.b7],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Beagle Puss",H.a([$.bb,$.b7],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Novelty Microphone",H.a([$.b9,$.aa,$.b7],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Banana",H.a([$.aH,$.b7],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Fake Flower",H.a([$.Q,$.b7],s),null,!1,"Flower that smells like Plastic")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Trick Handcuffs",H.a([$.C,$.b7],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.v]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.Y,P.T]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cp,$.l)
q.i(0,$.cS,$.j)
q.i(0,$.co,$.l)
p=$.k
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.t
o=o+n+"s are too scared to even "+$.P+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.y+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.c]
q.i(0,new R.a2("Defeat the Army",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.x(),!1,!1,new Y.by("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.w)
p=$.aQ
this.r.i(0,new X.E(s,q,null),p)
p=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.dP,$.D)
s.i(0,$.co,$.j)
s.i(0,$.cS,$.j)
s.i(0,$.cF,$.j)
q=$.k
o="The "+q+" learns of an Open Mic Nite at the "
n=$.b_
o=o+n+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
m="The "+q+" is practicing their jokes on a street corner. A few "
k=$.t
s.i(0,new R.a2("Win the Laughs",!1,[new U.c(o),new U.c(m+k+"s let out a braying "+$.P+" of laughter, but most seem unimpressed. The "+q+" sure has a long way to go. "),new U.c("It's finally time for the Open Mic Nite at the "+n+" Club.! The "+k+"s seem like a tough crowd, but the "+q+" leaves them hysterical with laughter. It's a huge success! ")],H.a([],l),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
q=$.aQ
this.r.i(0,new X.E(p,s,null),q)
q=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.dd,$.D)
t.i(0,$.cn,$.l)
t.i(0,$.cS,$.j)
t.i(0,$.co,$.l)
t.i(0,$.ib,$.l)
s=$.k
r="The "+s+"  is approached by a Crafty "
p=$.t
r=r+p+" who offers them a magical "
o=$.ak
r=r+o+", guaranteed to grant them any wish. The "+s+" is shocked to discover it was a ruse, and the Crafty "+p+" has already escaped to the side with their ill earned boonies. "
n="The "+s+" finds many "+p+"s, too sad to even "
m=$.P
t.i(0,new R.a2("Trick the Villain",!1,[new U.c(r),new U.c(n+m+", holding "+o+".  The Crafty "+p+" must be stopped!  "),new U.c("The "+s+" has finally caught up with the Crafty "+p+".  They thank the confused consort for how much the "+o+" helped them. Confused, the Crafty "+p+" offers to buy the "+o+" back, and is upset when the "+s+" refuses. They begin "+m+"ing and begging until the "+s+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+p+" offers them a comically large bag of boonies, which the "+s+" promptly distributes to the swindled consorts.  The "+o+" working was a ruse all along, and the Crafty "+p+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
l=$.aQ
this.r.i(0,new X.E(q,t,null),l)},
gI:function(){return this.cx},
gav:function(){return this.cy},
gaw:function(){return this.db},
gJ:function(){return this.dx},
gaC:function(){return this.dy}}
S.bx.prototype={
u:function(a){return H.n(new H.dB(H.hM(this),null))+": "+this.c},
gM:function(a){return this.c}}
S.hW.prototype={}
M.kx.prototype={
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Can of Spray Paint",H.a([$.aO,$.C],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Sensible Chuckles Magazine",H.a([$.O,$.ao,$.b7,$.aS],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Gentleman's Razor",H.a([$.t2,$.C,$.aL],s),null,!1,"Face Cutting Hair Remover")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("How To Draw Manga",H.a([$.O,$.ao,$.aS],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Painting of a Horse Boxing a Football Player",H.a([$.aO,$.au,$.O],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Collection of Classical Works",H.a([$.ao,$.O],s),null,!1,"Book of Naked Renaissance People")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Documentary on Horses",H.a([$.ao,$.aT,$.au],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Paint Set",H.a([$.aO,$.ao],s),null,!1,"Pain Drink Set")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Shaving Cream",H.a([$.ar,$.ao,$.C],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Classy Suit",H.a([$.Q,$.ao],s),null,!1,"Georgio Armani Suit")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("The Fatherly Gent's Shaving Almanac ",H.a([$.O,$.ao,$.aS],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.v]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.Y,P.T]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.dN,$.l)
q.i(0,$.cy,$.j)
q.i(0,$.ba,$.l)
p=$.k
o="The "+p+" visits a beautiful "
n=$.ak
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.t
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.y+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.P+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.c]
q.i(0,new R.a2("Catch the Thief",!1,[new U.c(o),new U.c(l),new U.c(n)],H.a([],p),R.x(),!1,!1,new Y.by("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.w)
m=$.aQ
this.r.i(0,new X.E(s,q,null),m)
m=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.dP,$.D)
s.i(0,$.co,$.l)
s.i(0,$.cS,$.D)
s.i(0,$.bl,$.l)
s.i(0,$.cF,$.j)
q=$.k
o="The "+q+" finds a troupe of dejected looking "
n=$.t
n=o+n+"s. Apparently they want to put on a famous "+n+" play called 'The "
o=$.b_
n=n+o+" "
l=$.ak
s.i(0,new R.a2("Perform the Play",!1,[new U.c(n+l+"', but have no one to play the titular role!  Does the "+q+" have what it takes to bring the iconic role to life? "),new U.c("The "+q+" is practicing their lines for the upcoming performance of 'The "+o.toUpperCase()+" "+l.toUpperCase()+"'. Man, who would have thought a "+l+" would have so many different emotions! "),new U.c("It's finally time for performance of the 'The "+o.toUpperCase()+" "+l.toUpperCase()+"'. The audience is moved to tears and "+$.P+"ing at the "+q+" stirring performance as the "+l+". ")],H.a([],p),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
l=$.aQ
this.r.i(0,new X.E(m,s,null),l)
l=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.fQ,$.D)
t.i(0,$.cp,$.D)
t.i(0,$.eM,$.D)
t.i(0,$.cn,$.D)
t.i(0,$.bl,$.l)
t.i(0,$.ba,$.l)
s=$.k
r="The "+s+"  is cordially invited to the dinner party of Miss "
q=$.P
r=r+q+"ingworth, "
o=$.t
t.i(0,new R.a2("Attend the Dinner Party",!1,[new U.c(r+o+" heiress to the "+$.ak+" fortune. "),new U.c("The "+s+" is coached on etiquette by  Miss "+q+"ingworth's butler. It would not do to embarass the young Miss.  "),new U.c("It is finally time for Miss "+q+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+s+" is the guest of honor. They successfully charm all of the "+o+"s with a captivating story of dining customs from their home world. ")],H.a([],p),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.aQ
this.r.i(0,new X.E(l,t,null),p)},
gI:function(){return this.cx},
gav:function(){return this.cy},
gaw:function(){return this.db},
gJ:function(){return this.dx},
gaC:function(){return this.dy}}
T.kz.prototype={}
V.kC.prototype={
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Trendy Fabric",H.a([$.aO,$.Q],s),null,!1,"Weird Tasting Candy Paper")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Necklace",H.a([$.aO,$.rS,$.fU],s),null,!1,"Nasty Candy Necklace")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Sewing Needle",H.a([$.C,$.rZ,$.b2],s),null,!1,"Cloth Stabbing Knife")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=$.iH
r=A.i("Broom",H.a([r,$.a1,$.ai,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Rolling Pin",H.a([$.a1,$.t4,$.ai],s),null,!1,"Babushkas Punishment Pole")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Velvet Pillow",H.a([$.Q,$.bh,$.bz,$.aO,$.iK],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Yarn Ball",H.a([$.aO,$.Q],s),null,!1,"Cats Plaything")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Refrigerator",H.a([$.aU,$.c9,$.C,$.br],s),null,!1,"Food Hardening Box")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Photo Album",H.a([$.aO,$.O],s),null,!1,"Memory Book")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Ice Cubes",H.a([$.br],s),null,!1,"Hard Water")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Cast Iron Skillet",H.a([$.C,$.ar,$.ai,$.c9,$.rQ],s),null,!1,"Fancy Unstoppable Weapon")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Failed Dish",H.a([$.bN],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Potted Plant",H.a([$.aO,$.bM,$.b4],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Chicken Leg",H.a([$.aH,$.bm,$.bd],s),null,!1,"Thicc Chicken")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Juicy Steak",H.a([$.aH,$.bm],s),null,!1,"Juicy Cow Flesh")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Wedding Cake",H.a([$.aO,$.aH,$.b1],s),null,!1,"The Only Benefit of a Wedding")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.v]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.Y,P.T]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cF,$.l)
q.i(0,$.cC,$.l)
q.i(0,$.cp,$.D)
p=$.k
o="The "+p+" is visited by a Beautiful "
n=$.t
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.ak
l=[U.c]
q.i(0,new R.a2("Design the Dress",!1,[new U.c(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.c(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.c("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.P+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.aQ
this.r.i(0,new X.E(s,q,null),n)
n=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.cp,$.j)
s.i(0,$.co,$.l)
s.i(0,$.eM,$.j)
s.i(0,$.dK,$.l)
s.i(0,$.bl,$.j)
q=$.k
p="The "+q+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
o="The "+q+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
m=$.ak
o=o+m+"'. It is incredible how much of a difference it makes! "
k=$.t
s.i(0,new R.a2("Bake the Cake",!1,[new U.c(p),new U.c(o),new U.c("It's finally time for competition! The Distinguised "+k+" takes a slow, thoughtful bite of the "+q+"'s cake. There is a pause, and then the Distinguished "+k+" begins "+$.P+"ing up a storm!  The "+m+" did the trick, "+q+"'s cake is immediately declared the winner! ")],H.a([],l),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
q=$.aQ
this.r.i(0,new X.E(n,s,null),q)
q=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.eO,$.j)
t.i(0,$.bl,$.l)
t.i(0,$.eP,$.j)
t.i(0,$.ba,$.l)
t.i(0,$.lj,$.j)
s=$.k
r="The "+s+" finds a loom, and a Wizened "
p=$.t
r=r+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+s+" is enchanted by the thought of this. "
o="The "+s+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
n=$.ak
o=o+n+" colored thread. Is this finally it?  "
s="The "+s+", slowly, methodically weaves a shawl from the skein of "+n+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.P+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+s+" just uses it to alchemize other things."
p=this.y
t.i(0,new R.a2("Weave the Cloth",!1,[new U.c(r),new U.c(o),new U.c(s)],H.a([],l),R.x(),!1,!1,new Y.by("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.w)
p=$.aQ
this.r.i(0,new X.E(q,t,null),p)},
gI:function(){return this.cx},
gav:function(){return this.cy},
gaw:function(){return this.db},
gJ:function(){return this.dx},
gaC:function(){return this.dy}}
U.kD.prototype={
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.aS,$.aa,$.O,$.aR,$.X,$.a6],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Egg Timer",H.a([$.aT,$.bz,$.X,$.aR],s),null,!1,"Egg That Counts Down to Your Death")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Skull Timer",H.a([$.bd,$.bz,$.X,$.aR],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Poison Flask",H.a([$.bb,$.X,$.bN],s),null,!1,"Glass of Bone Hurting Juice")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Ice Gorgon Head",H.a([$.bb,$.X,$.br,$.aR,$.bi,$.bP,$.bc],s),null,!1,"Oddly Attractive Decapitated Head")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Obituary",H.a([$.aU,$.bc,$.aR,$.O,$.X],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.v]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.Y,P.T]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.dO,$.j)
q.i(0,$.dc,$.l)
q.i(0,$.eV,$.D)
q.i(0,$.bl,$.D)
q.i(0,$.c8,$.l)
p=$.k
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.t
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.ak
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.y
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.cu+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.c]
q.i(0,new R.W("Empty the Graves",!1,[new U.c(o),new U.c(m),new U.c(l),new U.ab(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.aP
this.c.i(0,new X.E(s,q,null),n)
n=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.dO,$.j)
s.i(0,$.dc,$.l)
s.i(0,$.ej,$.ad)
s.i(0,$.eh,$.l)
s.i(0,$.rt,$.l)
s.i(0,$.dr,$.l)
s.i(0,$.dc,$.l)
s.i(0,$.bl,$.D)
s.i(0,$.c8,$.l)
s.i(0,$.db,$.l)
q=$.k
p="The "+q+" has found a group of Violent "
o=$.t
p=p+o+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
m=$.b_
p=p+m+"', the fuel their post apocalyptic society runs on. "
l="The "+q+" has survived a small assault team of Violent "+o+"s, and is declared their new leader. They beg and grovel and "+$.P+" and ask that the "+q+" help them take back their "+m+" from a rival gang. "
k="The "+q+" is now the warlord of nearly all of the Violent "+o+"s. There is clearly not enough "+m+" for everyone, though. It turns out that the "
j=$.y
k=k+j+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
h="There isn't enough room in this wasteland for the both of them. It's time to take out the "+j+"."
o="The "+j+" lies slain by the "+q+"'s "+$.cu+". The "+q+" distributes the hoard of "+m+" to the Violent "+o+"s and keeps the hoard of grist for themself. "
s.i(0,new R.W("Become the Warlord",!1,[new U.c(p),new U.c(l),new U.c(k),new U.ab(h,"The "+m+" shortage continues with the defeat of the "+q+".",o)],H.a([],i),R.eu(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.j)
o=$.k
q="The "+o+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
m=$.ak
q=q+m+"s alike. "
m=$.t+"s begin to flock to the safe areas that The "+o+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+m+"s are found in some nearby mines. "
h="The "+o+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
k=$.y
h=h+k+" remains alive, the safe zone will be temporary at best. "
l=k+" is attacking the safe zones. The "+o+" has worked too hard for it all to be lost now. There can be no mercy. "
p="The "+k+" lies slain by the "+o+"'s "+$.cu+". The "+o+" is finally free to continue improving the land. "
s.i(0,new R.W("Make This Stupid Planet Habitable",!1,[new U.c(q),new U.c(m),new U.c(h),new U.ab(l,"The tyranny of "+k+" continues with the defeat of the "+o+".",p)],H.a([],i),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.aP
this.c.i(0,new X.E(n,s,null),p)
p=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.ba,$.j)
t.i(0,$.c8,$.j)
t.i(0,$.rB,$.ad)
t.i(0,$.fN,$.D)
s=$.k
r="The "+s+" finds a small dungeon bearing the image of "
q=$.y
r=r+q+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+s+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.t+"s, the "+s+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+s+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
n="The timer doesn\u2019t stop from counting lower. The "+s+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+s+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+q+"? Either way, the "+s+" isn\u2019t very pleased with the "+q+"."
m="The "+s+" tracks down the location of the "+q+" \u2018s lair. It\u2019s payback time!"
l="The "+q+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+s+"."
t.i(0,new R.W("Learn the Prophecy",!1,[new U.c(r),new U.c(o),new U.c(n),new U.ab(m,"The "+s+" couldn\u2019t get their revenge. "+q+" has a hearty laugh at their expense.",l)],H.a([],i),R.eu(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
l=$.k
q="The "+l+" learns from one of their "
s=$.t
q=q+s+"s that there is an ancient prophecy of a "
m=$.b_
q=q+m+" plague that is due to kill them all any day now."
n="The "+l+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.ak
n=n+o+", which currently happens to be the "+s+"s. "
s="The "+l+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+m+" plague into devastating the underlings instead of the "+s+"s. The underling army is all but decimated, and "
m=$.y
s=s+m+"s lair is all but undefended. "
o="The "+l+" is finally ready to face the "+m+"."
r="The "+m+" lies slain by the "+l+"'s "+$.cu+". The "+l+" has won! "
t.i(0,new R.W("Learn the Prophecy",!1,[new U.c(q),new U.c(n),new U.c(s),new U.ab(o,"The tyranny of "+m+" continues with the defeat of the "+l+".",r)],H.a([],i),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
i=$.aP
this.c.i(0,new X.E(p,t,null),i)},
gaV:function(){return this.rx},
ga_:function(){return this.ry},
gJ:function(){return this.x2},
gS:function(){return this.y1},
gao:function(){return this.A},
gI:function(){return this.ar}}
Z.kE.prototype={
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Dream Diary",H.a([$.O,$.aS,$.X],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Interlocking Brick",H.a([$.aT,$.bz,$.ai,$.X,$.a6],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Art Supplies",H.a([$.aT,$.bz,$.X],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.v]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.Y,P.T]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.eO,$.l)
q.i(0,$.eP,$.j)
q.i(0,$.ba,$.l)
q.i(0,$.lj,$.l)
p=$.t
o="A "+p+" child tugs on the "
n=$.k
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.ak
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.y
k=[U.c]
q.i(0,new R.W("Make the Thing",!1,[new U.c(o+l+"'s lair light up.  Only 99 to go!"),new U.c("An entire line of "+p+" children are "+$.P+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "),new U.c("The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."),new U.ab("The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife.","Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.aP
this.c.i(0,new X.E(s,q,null),n)
n=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.cx,$.l)
s.i(0,$.eP,$.j)
s.i(0,$.ek,$.l)
s.i(0,$.cR,$.l)
s.i(0,$.l9,$.l)
s.i(0,$.cS,$.j)
q=$.k
p="There is a portrait of the "+q+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+q+" tries not to let it bother them. "
o="More and more frequently, the "+q+" sees vandalized copies of their portraits. Teen "
m=$.t
o=o+m+"s are even starting to snigger and "
l=$.P
l=o+l+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+l+" harder. "
m="In a flash of inspiration, the "+q+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+q+" has reclaimed the vandals hateful message as their own one of strength. "
o=$.y
s.i(0,new R.W("Deconstruct the Satire",!1,[new U.c(p),new U.c(l),new U.c(m),new U.ab("The "+o+" is furious that their campaign to discredit the "+q+" has failed. They attack the "+q+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+o+".")],H.a([],k),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
o=$.aP
this.c.i(0,new X.E(n,s,null),o)
o=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.dN,$.j)
t.i(0,$.lb,$.l)
t.i(0,$.ba,$.l)
t.i(0,$.cR,$.j)
t.i(0,$.l9,$.j)
t.i(0,$.eP,$.l)
s=$.k
r="The "+s+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
q=$.y
t.i(0,new R.W("Dream the Dream",!1,[new U.c(r+q+" Minion wanders by in a "+$.b_+" "+s+" costume and it just seems inevitable.  "),new U.c("You are trying to make sense of things. What is going on lately with the land? A "+$.t+" is "+$.P+"ing in reverse. Another is in a "+$.ak+" wig.  "),new U.c("A boardroom filled with underlings glares severely at the "+s+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.ab("The "+s+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+q+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
k=$.aP
this.c.i(0,new X.E(o,t,null),k)},
ga_:function(){return this.rx},
gJ:function(){return this.x1},
gS:function(){return this.x2},
gao:function(){return this.E},
gI:function(){return this.R}}
Q.eL.prototype={
gM:function(a){return this.c}}
Q.lx.prototype={}
Q.kH.prototype={}
X.i6.prototype={}
X.hU.prototype={
$S:function(){return{func:1,v:true,args:[[P.H,M.fM]]}}}
M.fM.prototype={}
U.l2.prototype={
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Fluthulu Poster",H.a([$.Q,$.bh,$.bc,$.be],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Scalemate",H.a([$.Q,$.bh,$.bc],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Replica Bone Shield",H.a([$.aU,$.aT,$.bd,$.f0,$.b6],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Replica Ice Sword",H.a([$.aT,$.vj,$.f1,$.b6],s),null,!1,"Fake Hard Water Long Stabber")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Zombie Mask",H.a([$.aT,$.bP,$.bm,$.bc],s),null,!1,"Dead Face")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Vampire Romance Novel",H.a([$.aS,$.O,$.aJ,$.bc],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Wizardy Herbert",H.a([$.O,$.a9,$.ai],s),null,!1,"Shitty Wizard Object")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Complacency of the Learned",H.a([$.O,$.a9,$.ai],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Grimoire for Summoning the Zoologically Dubious ",H.a([$.O,$.a9,$.bP,$.bc,$.be],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Wizard Statue",H.a([$.aU,$.aM,$.a9,$.ai,$.b6],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Mermaid Fountain",H.a([$.aU,$.rN,$.a9,$.ai,$.b6],s),null,!1,"Water Spitting Fish Woman Statue")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.v]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.Y,P.T]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.eQ,$.ad)
q.i(0,$.cC,$.l)
q.i(0,$.cf,$.l)
q.i(0,$.dd,$.D)
p=$.k
o="The "+p+" learns of a Beautiful "
n=$.t
o=o+n+" who has been kidnapped by the vial "
m=$.y
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.ak
j=[U.c]
q.i(0,new R.a2("Save the Beautiful Consort",!1,[new U.c(o),new U.c(l+k+" can open it. Looks like it's time to go questing."),new U.c("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.x(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.aQ
this.r.i(0,new X.E(s,q,null),p)
p=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.cn,$.j)
s.i(0,$.dr,$.j)
s.i(0,$.lc,$.l)
s.i(0,$.c8,$.j)
s.i(0,$.ej,$.j)
s.i(0,$.fP,$.l)
q=$.k
o="The "+q+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
n=$.t
s.i(0,new R.a2("Do not Drink...Wine.",!1,[new U.c(o+n+" leave, and no one can remember the last time he received guests."),new U.c("The "+q+" attends the dinner. Count Feratu is an.... eccentric "+n+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.c(" The "+q+" sees Castle Feratu in the distance. The silhouette of a "+n+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.aQ
this.r.i(0,new X.E(p,s,null),n)
n=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.cn,$.j)
t.i(0,$.ig,$.l)
t.i(0,$.c8,$.j)
t.i(0,$.dJ,$.l)
t.i(0,$.eN,$.l)
t.i(0,$.rx,$.l)
s=$.k
r="The "+s+" finds a group of three "
q=$.t
r=r+q+"s "
p=$.P
t.i(0,new R.a2("Expose the Conspiracy",!1,[new U.c(r+p+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+s+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.c("The "+s+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.c("The "+s+" shows the conspiracy papers to the three "+q+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+q+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+p+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
j=$.aQ
this.r.i(0,new X.E(n,t,null),j)},
gI:function(){return this.cx},
gav:function(){return this.cy},
gaw:function(){return this.db},
gJ:function(){return this.dx},
gaC:function(){return this.dy}}
L.l3.prototype={
ga_:function(){return this.rx}}
N.Y.prototype={
u:function(a){return H.n(new H.dB(H.hM(this),null))+": "+H.n(this.b)}}
A.l7.prototype={
$5:function(a,b,c,d,e){var t,s
for(t=this.a,s=0;s<2;++s)t[s].$5(a,b,c,d,e)},
$S:function(){return{func:1,args:[D.ds,[Q.bK,N.Y],E.cz,L.dR,A.bI]}}}
A.l5.prototype={
$5:function(a,b,c,d,e){var t,s
if(!b.gP(b).w()){t=a.f$
s=this.a
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(this.b)),[H.I(t,0)]))}},
$S:function(){return{func:1,args:[D.ds,[Q.bK,N.Y],E.cz,L.dR,A.bI]}}}
A.l6.prototype={
$5:function(a,b,c,d,e){if(J.jQ(b)===!0)a.gcp().j3(0,e.v(this.a),this.b)},
$S:function(){return{func:1,args:[D.ds,[Q.bK,N.Y],E.cz,L.dR,A.bI]}}}
D.ds.prototype={
eo:function(a){var t,s,r,q,p,o,n,m,l,k,j,i
for(t=this.e$.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.bp)(t),++r){q=t[r]
p=J.dY(q)
for(o=p.gcp(),o=o.gad(o),o=o.gP(o);o.w();){n=o.gG()
m=J.eE(p.gcp().m(0,n),q.gbO())
l=this.f$
C.a.h(l.b,new Q.h(n,l.k(n,J.r3(m)),[H.I(l,0)]))}}this.f$.fD()
this.gco()
for(t=this.gco().a,t=t.gad(t),t=t.gP(t),s=this.r$,o=this.b$;t.w();){k=t.gG()
j=this.gco().a.m(0,k)
l=this.f$
i=Q.oN(l,J.xB(j),H.I(l,0))
s.i(0,k,i)
if(j.gj9()!=null){l=this.c$
j.c.$5(this,i,o,l,a)}}this.f$.fD()
this.jv()},
kr:function(a,b){var t,s,r,q
t=P.a3(null,null,null,N.Y)
s=b.v(a)
for(r=J.bC(a);r.w();){q=r.gG()
if(!J.a5(q,s))t.h(0,q)}this.f$.kv(0,t.gdW(t))},
jv:function(){var t,s
t=P.a3(null,null,null,N.Y)
for(s=this.r$,s=s.gay(s),s=s.gP(s);s.w();)t.W(0,s.gG())
this.f$.kA(0,t.gdW(t))},
az:function(a){return Q.F8(this.r$.m(0,a.a).b,null,N.Y)},
gbz:function(){return this.e$},
gcp:function(){return this.f$},
sb2:function(a,b){return this.c$=b}}
D.ih.prototype={
aM:function(a){this.a.i(0,a.a,a)}}
D.fR.prototype={
gM:function(a){return this.a},
geb:function(a){return this.b},
gj9:function(){return this.c}}
D.lm.prototype={}
D.ln.prototype={
$1:function(a){return H.tP(a,this.a)},
$S:function(){return{func:1,args:[N.Y]}}}
O.de.prototype={}
O.eb.prototype={
$asde:function(a){return[a,P.dG]}}
O.hq.prototype={
$asde:function(a){return[a,P.v]}}
O.lq.prototype={
ga_:function(){return this.rx},
gJ:function(){return this.x1},
gS:function(){return this.x2},
gI:function(){return this.B}}
V.lr.prototype={
$aseb:function(){return[R.fS]},
$asde:function(){return[R.fS,P.dG]}}
Z.i5.prototype={}
E.hh.prototype={
u:function(a){return this.b}}
E.cz.prototype={
u:function(a){return H.jM(H.jM(this.cG(0),P.nc("\\s",!0,!0),""),P.nc("'",!0,!0),"")},
d1:function(){return new E.fa(this,P.cD(D.bk,P.T),H.a([],[A.d0]),[E.cz])},
aG:function(a){var t=E.rF(this.d,this.c)
this.dY(t)
return t},
dY:function(a){a.sI(this)
a.ch=this.ch
a.cx=!1
a.sca(this.gca())
a.db=!1
a.fr=this.fr
a.fx=this.fx
a.fy=this.fy
a.go=!1
a.id=N.EF(this.id)
a.k1=this.k1
a.k2=this.k2
a.k3=this.k3
a.r1=this.r1
a.r2=this.r2
a.rx=this.rx
a.ry=this.ry},
kC:function(a){var t,s,r
t=this.c.A
s=$.c5
s=this.a$.aH(s)
r=$.bE
r=this.a$.aH(r)
return t.a.D()*(r-s)+s},
kB:function(){return this.kC(null)},
cG:function(a){return this.d},
p:function(a,b){var t,s,r
this.a$=this.d1()
t=$.rG+1
$.rG=t
this.k4=t
this.a=$.tw
t=$.$get$cv()
s=P.a3(null,null,null,D.bk)
r=new A.hS(this,null,null,!1,!1,!1,s,0,0,!0,!1)
s.W(0,t)
r.e=!0
this.a$.j6(r,null,null)},
gb2:function(a){return this.c},
gM:function(a){return this.d},
gca:function(){return this.cy},
sb2:function(a,b){return this.c=b},
sca:function(a){return this.cy=a}}
E.j2.prototype={$ishp:1}
E.L.prototype={
cY:function(a){a.k2.push(new E.L(this.a,this.b,this.c))},
u:function(a){var t="["+H.n(this.a)+" x "+H.n(this.b)
return t+(this.c?" (from Aspect)":"")+"]"},
gcb:function(){return this.a}}
E.fD.prototype={
cY:function(a){a.k2.push(new E.L(a.c.A.v(this.d),this.b,this.c))},
u:function(a){var t="[(Random from "+P.t9(this.d,"(",")")+") x "+H.n(this.b)
return t+(this.c?" (from Aspect)":"")+"]"},
gI:function(){return this.d}}
E.k7.prototype={
cY:function(a){var t,s
t=a.k2
s=a.aN.a.gI()
C.a.W(t,new H.dh(s,new E.k8(this),[H.I(s,0),null]))
s=a.k2
t=a.aO.a.gI()
C.a.W(s,new H.dh(t,new E.k9(this),[H.I(t,0),null]))},
u:function(a){return"[Stats assigned from player Interests x"+H.n(this.b)+"]"}}
E.k8.prototype={
$1:function(a){var t=this.a
return new E.L(a.gcb(),a.b*t.b,t.c)},
$S:function(){return{func:1,args:[E.L]}}}
E.k9.prototype={
$1:function(a){var t=this.a
return new E.L(a.gcb(),a.b*t.b,t.c)},
$S:function(){return{func:1,args:[E.L]}}}
Y.lu.prototype={
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("How to Teach Your Friends to Hack SBURB",H.a([$.aS,$.S,$.O,$.a6,$.lU],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Unstable Domino",H.a([$.aT,$.S,$.aR],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Exposed Thread",H.a([$.Q,$.S,$.aR],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Teetering Plate",H.a([$.lT,$.S,$.aR],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.v]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Y,P.T])
t.i(0,$.lk,$.l)
t.i(0,$.cf,$.j)
t.i(0,$.db,$.D)
t.i(0,$.dM,$.j)
r=$.t
q="An excited "+r+" runs up to the "
p=$.k
q=q+p+" and starts to "
o=$.P
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.b_
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.ak
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.y
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.c]
t.i(0,new R.W("I'm So Meta, Even This Acronym",!1,[new U.c(q),new U.c(m),new U.c(n),new U.ab(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
o=$.k
t.i(0,new R.ac("Cooking with Petrol",!1,[new U.c("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.y+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.c("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.c("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.t+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.x(),!1,!1,new Y.ew("Rewards/no_reward.png",null),1,null,null),$.w)
o=$.t
j="Now that the "+o+"s are free from the reign of "+$.y+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.k
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.P
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.b_+" Quest Online: The "+$.ak+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.db
t.i(0,new R.ac("Stop the Meta",!1,[new U.c(j),new U.c(r),new U.c(o)],H.a([],i),R.x(),!1,!1,new Y.by("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.w)
p="The "+$.y+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.k
p=p+o+" shows the "
r=$.t
t.i(0,new R.bD("Allow Others to Meta a Universe",!1,[new U.c(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.c("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.c("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.P+"s in time to stop them.    ")],H.a([],i),R.bY(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ad)
i=$.bQ
this.c.i(0,new X.E(s,t,null),i)},
gJ:function(){return this.k1},
gS:function(){return this.k2},
gI:function(){return this.x1}}
M.lv.prototype={
jE:function(){var t,s,r,q,p,o,n,m,l
t=H.a([],[D.d9])
for(s=this.r.y2.a,s=new J.dF(s,s.length,0,null,[H.I(s,0)]),r=[A.a4],q=this.x;s.w();){p=s.d
for(o=this.r.y2.a,o=new J.dF(o,o.length,0,null,[H.I(o,0)]),n=J.am(p);o.w();){m=o.d
if(!n.O(p,m)){if(!p.cj(!1)){this.b.ak.cy
l=!1}else l=!0
if(l)C.a.W(t,D.y0(H.a([p,m],r),this.b,q))}}}return t}}
Y.lw.prototype={
al:function(){return!0},
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Sherpa Parka",H.a([$.br,$.S,$.cg],s),"Clearly the best class uses this.",!1,null)
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Guide Book",H.a([$.a6,$.br,$.aS,$.O,$.S,$.a0],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Whistle",H.a([$.C,$.S,$.b9],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Announcement System",H.a([$.C,$.S,$.aa,$.a0],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o
t=[P.v]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Y,P.T])
t.i(0,$.lk,$.j)
t.i(0,$.cf,$.j)
t.i(0,$.db,$.l)
t.i(0,$.dM,$.j)
r="Now that the "+$.y+" is out of the way, a group of "
q=$.t
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.k
o=[U.c]
t.i(0,new R.ac("Find the Home",!1,[new U.c(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.c("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.c("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.P+", but they are happy.")],H.a([],o),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
q="The "+$.y+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.k
t.i(0,new R.bD("Find the Frogs",!1,[new U.c(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.c("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.c("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.t+" "+$.P+"s in time to stop them.    ")],H.a([],o),R.bY(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ad)
o=$.bQ
this.c.i(0,new X.E(s,t,null),o)},
gS:function(){return this.k1}}
T.ly.prototype={
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Doll",H.a([$.lT,$.aO,$.aI,$.X],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Puppet",H.a([$.a1,$.aI,$.X,$.a6,$.bc],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Mirror",H.a([$.rY,$.X],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Shipping Grid",H.a([$.O,$.X,$.aJ],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Shades",H.a([$.au,$.bb,$.X],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.v]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.Y,P.T]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.eh,$.D)
q.i(0,$.e3,$.j)
q.i(0,$.co,$.l)
p=$.k
o="The "+p+", guided by a "+$.t+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.y
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.cu+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.c]
q.i(0,new R.W("Find Yourself",!1,[new U.c(o),new U.c(n),new U.c(m),new U.ab(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
j=$.k
p="The "+j+" finds a Violent "
l=$.t
p=p+l+". A Magical Talking "
k=$.ak
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.y
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.i(0,new R.W("Steal the Heart",!1,[new U.c(p),new U.c(m),new U.c(k),new U.ab(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.ts(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.j)
h=$.aP
this.c.i(0,new X.E(s,q,null),h)
h=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.cS,$.j)
s.i(0,$.lc,$.j)
s.i(0,$.eV,$.l)
s.i(0,$.c8,$.j)
s.i(0,$.cp,$.l)
s.i(0,$.db,$.D)
q=$.k
p="The "+q+" is just going through their land when they get ambushed by a  copy of themselves made of "
o=$.ak
p=p+o+"! The player barely gets away with their life! "
n="The "+q+" skirmishes with the "+o+" copy a few times. The "+o+" copy begins to berate the player about their moral failings and weaknesses."
m="The "+q+" realizes that the "+o+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
l=$.y
o=m+l+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+o+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+l+". "
m=l+" has been the cause of so much personal grief for the "+q+".  There can be no mercy. "
k="The "+l+" lies slain by the "+q+"'s "+$.cu+". The "+q+" is victorious. "
s.i(0,new R.W("Confront yourself.",!1,[new U.c(p),new U.c(n),new U.c(o),new U.ab(m,"The assholeness of "+l+" continues with the defeat of the "+q+".",k)],H.a([],i),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
k="Now that the "+$.y+" has been defeated, a Copy "
q=$.k
k=k+q+" has appeared. They claim they are the TRUE "+q+",and that the other is an imposter who just wants their fame! All of the "
l=$.t
k=k+l+"s "
m=$.P
k=k+m+" in confusion and don't seem to know what to do."
m="A wizened "+q+" creates a series of challenges that only the REAL "+q+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+m+" for more than five minutes straight. At the end of it, all the "+l+"s unanimously agree that the Fake "+q+" is the winner. THIS IS STUPID."
l="The REAL "+q+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+q+" as three "+l+"s in an overcoat using some weird Heart magic."
q="The "+$.eW+" knows who they are, and their confidence is turned into a pink lightning attack."
s.i(0,new R.ac("Prove Your Identity",!1,[new U.c(k),new U.c(m),new U.c(l)],H.a([],i),R.e5(),!1,!1,new Y.R("The Real Heart Player",q,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
q=$.k
l="The "+q+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
m="The next time the "+q+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
k="Another mirror, another punch. Except this time....the mirror is unaffected. The "+q+" in the reflection smirks back. In a rage the "+q+" assaults the mirror until their knuckles are bloody. Still the reflected "+q+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+q+" collapses in an exhausted heap and considers their words."
o="When the "+q+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+q+", even if that shouldn't be possible. 'Help me.', the "+q+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
n=$.y
o=o+n+"."
n="The "+q+" has accepted their fractured soul, and the destructiveness inherent in it. The "+n+" is dead."
s.i(0,new R.W("Shatter The Mirrors",!1,[new U.c(l),new U.c(m),new U.c(k),new U.ab(o,"The "+q+" destroyed themselves.",n)],H.a([],i),R.eu(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.j)
n=$.aP
this.c.i(0,new X.E(h,s,null),n)
n=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.ic,$.j)
t.i(0,$.cp,$.j)
t.i(0,$.lh,$.j)
t.i(0,$.eM,$.l)
t.i(0,$.fP,$.j)
t.i(0,$.cC,$.l)
t.i(0,$.e3,$.D)
s=$.k
r="The "+s+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
q=$.t
t.i(0,new R.W("Ship All the Ships",!1,[new U.c(r+q+"s have no idea what's coming. "),new U.c("The "+s+" extends their shipping grid to include the entire "+q+" population, and begins subtly pushing to make these ships a reality. Happy "+$.P+"s ring out through the air.  "),new U.c("The "+s+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.b_+" laws put in place by "+$.y+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
s=$.k
q="The "+s+" finds a weeping Broken Hearted "
r=$.t
q=q+r+". The most Fetching "+r+" of their dreams just turned them down to the "
p=$.b_
q=q+p+" Dance and they are miserable. On a whim, the "+s+" offers to take them instead. The "+r+" immediately brightens.  "
o="The Broken Hearted "+r+" and the "+s+" are shopping for matching outfits to wear to the "+p+" Dance. Oh look, there is the Fetching "+r+". The Broken Hearted "+r+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+s+" goes over to the Fetching "+r+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+r+" really is busy with their job as a "
m=$.P
t.i(0,new R.ac("Heal The Broken Heart",!1,[new U.c(q),new U.c(o+m+" salesman for the "+p+" dance, but the Broken Hearted "+r+" ran away crying before they could explain that they'd love to date them anyways! The "+s+" sees an opportunity to save the day."),new U.c("It is the day of the big "+p+" Dance. The "+s+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+r+" and the Mended Hearted "+r+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.j8(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
r=$.k
m="The "+r+"  and the "
s=$.e6
m=m+s+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
p="The "+r+"  and the "+s+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
o=$.y
p=p+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+r+" and "+s+" together."
t.i(0,new R.W("Flushed Shipping Dungeon",!1,[new U.c(m),new U.ab(p,"The "+r+" and "+s+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.n(C.x)+".",o)],H.a([],i),R.ev(),!1,!1,new Y.im(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.ad)
o=$.k
s="The "+o+"  and the "
r=$.e6
s=s+r+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
p="The "+o+"  and the "+r+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.y
p=p+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+o+" and "+r+" together."
t.i(0,new R.W("Pitched Shipping Dungeon",!1,[new U.c(s),new U.ab(p,"The "+o+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.n(C.x)+".",m)],H.a([],i),R.ev(),!1,!1,new Y.j6(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.ad)
i=$.aQ
this.c.i(0,new X.E(n,t,null),i)},
ga_:function(){return this.rx},
gJ:function(){return this.x1},
gS:function(){return this.x2},
gao:function(){return this.E},
gI:function(){return this.R}}
B.lz.prototype={
al:function(){return!1},
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Family Ashes",H.a([$.aU,$.ar,$.S,$.aR,$.bV],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Last Will and Testament",H.a([$.a6,$.O,$.S,$.aR,$.lP],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Grooming Guide",H.a([$.aS,$.S,$.ao],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Powered Attorney",H.a([$.va,$.S,$.rH,$.lP],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Executer's Ax",H.a([$.rI,$.S,$.aL,$.lP],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o
t=[P.v]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Y,P.T])
t.i(0,$.cx,$.l)
r=$.y
q="With the death of the "+r+", it now falls to the "
p=$.k
o=[U.c]
t.i(0,new R.ac("Inherit Responsibilities",!1,[new U.c(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.c("After organizing taxes, approving budgets and listening to "+$.t+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.c("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
r="The "+$.y+" has released the frogs into the "
p=$.k
t.i(0,new R.bD("Inherit the Frogs",!1,[new U.c(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.t+"s 'help' by "+$.P+"ing up a storm. "),new U.c("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.c("The "+p+" has found the final frog.      ")],H.a([],o),R.bY(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ad)
o=$.bQ
this.c.i(0,new X.E(s,t,null),o)},
gaV:function(){return this.k1},
gJ:function(){return this.k2},
gS:function(){return this.r1}}
X.lA.prototype={
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Wand",H.a([$.a1,$.X,$.a9,$.bn],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Angel Feather",H.a([$.bn,$.bB,$.X,$.b8,$.ae,$.a6,$.a9],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Never Ending Story DVD",H.a([$.bO,$.rV,$.X,$.a9,$.b7,$.bn],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Candle",H.a([$.bn,$.b8,$.X,$.ar],s),null,!1,"Dying Light Stick")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Fairy Figurine",H.a([$.aT,$.b8,$.X,$.bn],s),null,!1,"Tiny Petrified Tinkerbell")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.v]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.Y,P.T]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.rs,$.j)
q.i(0,$.cC,$.l)
q.i(0,$.ba,$.j)
q.i(0,$.cR,$.j)
p=$.k
o="The "+p+" is just minding their own business when they see a wizened "
n=$.t
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.P+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.y
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.ak
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
n=[U.c]
q.i(0,new R.W("Learn to Believe",!1,[new U.c(o),new U.c(m),new U.c(l),new U.ab(k,"The "+p+" fails to believe hard enough. They are defeated.",j)],H.a([],n),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
j=$.aP
this.c.i(0,new X.E(s,q,null),j)
j=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.cn,$.j)
s.i(0,$.ib,$.l)
s.i(0,$.ek,$.j)
q=$.k
p="The "+q+"  is approached by a Crafty "
o=$.t
p=p+o+" who offers them a magical "
m=$.ak
p=p+m+", guaranteed to grant them the power to believe things into existance once per year. The "+q+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
l="The "+q+" is contemplating the magical "+m+" they wasted their boonies on.  Why would the Crafty "+o+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+q+" spends time imagining what they would try to make if it were true."
k="The "+q+" finds a grey town of despondant "+o+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+q+" learns that "
i=$.y
k=k+i+" has been hoarding all the belief and steals it from the "+o+"s regularly. They have to be stopped!"
h="The "+q+" approaches "+i+", magical "+m+" in hand. The "+i+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+q+" feels frozen. They cannot take a single step towards "+i+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+m+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
o=i+"'s belief was no match for the power of the "+m+". They are dead, and hope will be free to flourish among the "+o+"s once again."
s.i(0,new R.W("Believe the Lies",!1,[new U.c(p),new U.c(l),new U.c(k),new U.ab(h,"The "+m+" could not stand up to "+i+" after all. The "+q+" has been defeated.",o)],H.a([],n),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
o=$.aP
this.c.i(0,new X.E(j,s,null),o)
o=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.ba,$.j)
t.i(0,$.dK,$.D)
t.i(0,$.cy,$.j)
t.i(0,$.cR,$.j)
s=$.k
r="The "+s+" finds a grey town of despondant "
q=$.t
r=r+q+"s. Their daily lives are without meaning, without joy, and will never change. "
p=$.y
r=r+p+" has stolen all possibilities, all hope away. There is only this.  The "+s+" vows to find a way to help. The "+q+"s fail to be inspired."
m="The "+s+" learns that part of the reason the "+q+"s are hopeless is that the local "
l=$.ak
t.i(0,new R.W("Be the Change You Believe In",!1,[new U.c(r),new U.c(m+l+" mine has dried up. Without "+l+" the "+q+" economy is completley flat. There are no jobs!  The "+s+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.c("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+p+". They simply refuse to allow hope to survive. The "+s+" is going to need to deal with them."),new U.ab("The "+q+"s deserve Hope, they deserve a better life. The "+s+" is going to show them. But before they can work on fixing their problems, "+p+" must be fought. The "+s+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],n),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
s=$.k
p="The "+s+" discovers a group of "
q=$.t
p=p+q+"s locked in a sadistic death game. When all seems lost, the "+s+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+q+"s) in the process."
l="The "+s+" finds ANOTHER group of "+q+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+s+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+q+" has been working for the "
r=$.y
t.i(0,new R.W("The Ultimate Hope",!1,[new U.c(p),new U.c(l),new U.c(m+r+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.ab("The "+q+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+s+" is going to stop the "+r+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],n),R.j8(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.j)
n=$.aP
this.c.i(0,new X.E(o,t,null),n)},
ga_:function(){return this.rx},
gJ:function(){return this.x1},
gS:function(){return this.x2},
gao:function(){return this.K},
gI:function(){return this.E}}
Q.lF.prototype={
$aseb:function(){return[W.eY]},
$asde:function(){return[W.eY,P.dG]}}
Q.n3.prototype={}
Z.lG.prototype={}
B.lK.prototype={
$1:function(a){return!a.gcC()},
$S:function(){return{func:1,args:[B.eZ]}}}
B.eZ.prototype={
H:function(){var t,s
t=Q.F(null,null,A.a4)
s=A.i("Perfectly Generic Object",H.a([],[G.V]),null,!1,"The Third Entry for This Fucking Block")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),[H.I(t,0)]))
this.y=t},
gjt:function(){return P.bf(this.gaC(),!0,P.v)},
F:function(){var t,s,r,q,p,o,n,m
t=[P.v]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.Y,P.T]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.dc,$.j)
q.i(0,$.bl,$.D)
q.i(0,$.dO,$.j)
q.i(0,$.c8,$.l)
q.i(0,$.e2,$.D)
p=$.k
o="The "+p+" learns that all of the local "
n=$.t
m=[U.c]
q.i(0,new R.a2("Revive the Consorts",!1,[new U.c(o+n+"s are dead. This is....really depressing, actually. "),new U.c("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.P+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.aQ
this.r.i(0,new X.E(s,q,null),n)
n=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.eS,$.j)
s.i(0,$.ei,$.D)
s.i(0,$.eR,$.l)
s.i(0,$.cQ,$.j)
s.i(0,$.cx,$.D)
q=$.k
p="The "+q+" learns that all of the local "
o=$.t
s.i(0,new R.a2("Produce the Goods",!1,[new U.c(p+o+"s have a severe shortage of gears and cogs. It is up to the "+q+" to get the assembly lines up and running again. "),new U.c("The "+q+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+q+" is training the local "+o+"s to operate the manufacturing equipment. There is "+$.P+"ing and chaos everywhere. "),new U.c("The "+q+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+o+"s name a national holiday after the "+q+". ")],H.a([],m),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
q=$.aQ
this.r.i(0,new X.E(n,s,null),q)
q=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.ba,$.j)
t.i(0,$.bl,$.D)
t.i(0,$.cf,$.l)
s=$.k
r="The "+s+" learns that all of the local "
p=$.t
t.i(0,new R.a2("Relax the Consorts",!1,[new U.c(r+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.c("The "+s+" fluffs more pillows than any other Player ever has before them. "),new U.c("The "+s+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.k
s="The "+p+" learns that all of the local "
r=$.t
s=s+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+r+" "
n=$.P
t.i(0,new R.a2("Relax the Consorts According to Prophecy",!1,[new U.c(s),new U.c(o+n+"ing about? A prophecy?  "),new U.c("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+r+"s, who become so chill they do not even "+n+" once. ")],H.a([],m),R.tr(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.D)
m=$.aQ
this.r.i(0,new X.E(q,t,null),m)},
u:function(a){return this.ch},
gcC:function(){return this.a},
gav:function(){return this.b},
gI:function(){return this.c},
gaw:function(){return this.d},
gJ:function(){return this.e},
gbz:function(){return this.r},
gaC:function(){return this.x},
gc2:function(){return this.y},
gM:function(a){return this.ch}}
B.lJ.prototype={
i1:function(a,b){var t=a.v(b.gjt())
this.a=b
this.b=t},
gM:function(a){return this.b}}
A.a4.prototype={
aU:function(a,b){var t=b.gas()-this.gas()
if(t>0)t=1
else if(t<0)t=-1
return C.e.a5(t)},
fX:function(a){var t,s,r,q
for(t=a.k2,s=t.length,r=0;r<t.length;t.length===s||(0,H.bp)(t),++r){q=t[r]
if(J.a5(q.gcb(),$.d4))this.r=this.r+C.e.a5(q.b)}},
gjz:function(){var t,s,r,q,p,o
t=H.a([],[P.v])
s=new A.bI(null,null)
s.aA(this.e.a)
if(this.f===0)return t
r=P.bf(G.uA(this.e),!0,G.V)
C.a.eK(r,new A.lY())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.bp)(r),++p){o=r[p]
if(!(o instanceof G.ah||o.gb4().length===0))t.push(" "+Y.FY(s.v(o.gb4())))}return t},
gas:function(){var t,s,r
for(t=this.e,s=new P.d6(t,t.r,null,null,[null]),s.c=t.e,r=0;s.w();)r+=s.d.gas()
return r},
gjK:function(){var t=this.e
return new H.bv(t,new A.lZ(),[H.I(t,0)])},
gjd:function(){var t=this.e
return new H.bv(t,new A.lW(),[H.I(t,0)])},
gjo:function(){var t=this.e
return new H.bv(t,new A.lX(),[H.I(t,0)])},
gaY:function(){var t,s,r,q,p
for(t=this.gjz(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.bp)(t),++q)r+=t[q]+" "
return r+this.c},
gfL:function(){return this.gaY()+" "+this.f+"/"+this.r},
u:function(a){return this.gaY()},
bt:function(){var t=A.i(this.c,P.bf(this.e,!0,G.V),this.a,!0,this.b)
t.f=this.f
t.r=this.r
return t},
cj:function(a){var t=this.r
if(t>0&&this.f<t){if(this.e.T(0,$.a6))if(!a)return!1
return!0}else return!1},
j1:function(a){var t=this.a
if(t!=null)return t
else return this.c6(a)},
eH:function(a){var t=this.b
if(t!=null)return t
else return"Actual Worthless Object"},
c6:function(a){var t,s,r,q,p,o,n
t=this.e
if(t.a===0)t.h(0,$.rR)
s=a.v(this.e)
r=a.v(this.e)
q=a.v(this.e)
if(J.a5(s,r)&&this.e.a>1)r=this.cJ(s)
if(J.a5(r,q)&&this.e.a>1)q=this.cJ(r)
p=s!=null?a.v(s.gb4()):null
o=r!=null?a.v(r.gb4()):null
n=q!=null?a.v(q.gb4()):null
if(p!=null&&o!=null&&n!=null)return a.v(H.a(["It's "+H.n(p)+" and it's "+H.n(o)+" and it's "+H.n(n)+". ","It's kind of "+H.n(p)+" but also sorta "+H.n(o)+". It's  "+H.n(n)+".","It's a "+H.n(n)+" but somehow also "+H.n(o)+" and actually maybe also "+H.n(p)+"?"],[P.v]))
else if(o!=null&&n!=null)return"It's "+H.n(o)+" and it's "+H.n(n)+" and that is all there is to say on the matter."
else if(n!=null)return"It is the platonic ideal of "+H.n(n)+"."
else return"...  What even IS this."},
cJ:function(a){var t,s,r,q
t=this.e.ax(0)
for(s=H.I(t,0),r=new H.hk(t,[s]),s=new H.dx(r,r.gn(r),0,null,[s]),r=J.am(a);s.w();){q=s.d
if(!r.O(a,q))return q}return a},
L:function(a,b,c,d,e){var t,s,r
t=P.h0(b,null)
this.e=t
if(t.a===0)t.h(0,$.rR)
s=P.h0(this.gjo(),null)
for(t=new P.d6(s,s.r,null,null,[null]),t.c=s.e;t.w();){r=t.d
this.e.W(0,r.ghM())
this.e.an(0,r)}if(!this.d)$.$get$fW().push(this)},
$isbw:1,
$asbw:function(){return[A.a4]},
ga9:function(){return this.e},
gkg:function(){return this.f},
sa9:function(a){return this.e=a}}
A.m_.prototype={
$1:function(a){return a.ga9().T(0,this.a)},
$S:function(){return{func:1,args:[A.a4]}}}
A.lY.prototype={
$2:function(a,b){return a.gh1()-C.b.a5(b.gh1())},
$S:function(){return{func:1,args:[G.V,G.V]}}}
A.lZ.prototype={
$1:function(a){return a instanceof G.aW},
$S:function(){return{func:1,args:[G.V]}}}
A.lW.prototype={
$1:function(a){return a instanceof G.bG},
$S:function(){return{func:1,args:[G.V]}}}
A.lX.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.V]}}}
A.od.prototype={
gn:function(a){return this.a.length},
h:function(a,b){var t,s
t=$.$get$fW()
s=(t&&C.a).T(t,b)?b.bt():b
this.a.push(s)
s.fX(this.b)},
W:function(a,b){var t
for(t=J.bC(b);t.w();)this.h(0,t.gG())},
gV:function(a){var t=this.a
return(t&&C.a).gV(t)},
gP:function(a){var t=this.a
return new J.dF(t,t.length,0,null,[H.I(t,0)])}}
A.j_.prototype={
$asz:function(){return[A.a4]},
$isz:1}
N.m4.prototype={
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Gavel",H.a([$.a1,$.rU],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Caution Tape",H.a([$.aT,$.bi],s),null,!1,"Impassible Barrier")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Deerstalker Hat",H.a([$.Q,$.aO],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Mystery Novel",H.a([$.O,$.aS],s),null,!1,"Book where the Criminal was the Janitor")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Dish Served Cold",H.a([$.bM,$.aH,$.br],s),null,!1,"REVENGE")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Pony Pals: Detective Pony ",H.a([$.O,$.aS,$.au],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Handcuffs",H.a([$.aU,$.C,$.bi],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.v]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.Y,P.T]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.eQ,$.D)
q.i(0,$.cn,$.l)
q.i(0,$.cy,$.D)
p=$.k
o="The "+p+" finds an elaborate courtroom full of "+$.P+"ing "
n=$.t
m=[U.c]
q.i(0,new R.a2("Shit, Lets Be Lawyers",!1,[new U.c(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.c("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.c(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.ak+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.aQ
this.r.i(0,new X.E(s,q,null),n)
n=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.cn,$.j)
s.i(0,$.db,$.l)
s.i(0,$.cQ,$.l)
q=$.k
p="A frantic underling run past the  "+q+". In hot pursuit, a "
o=$.t
s.i(0,new R.a2("Enforce the Law",!1,[new U.c(p+o+" yells 'Stop that thief' in betwen "+$.P+"s. Without thinking, the "+q+" grabs the underling. The "+o+" is impressed, and offers the "+q+" a job as a deputy police officer. "),new U.c("The "+q+" is doing their rounds as a deputy police officer. So far, everything is peaceful."),new U.c("A missing "+$.ak+". Three suspects. A locked door. The "+q+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. ")],H.a([],m),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
q=$.aQ
this.r.i(0,new X.E(n,s,null),q)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.cn,$.j)
t.i(0,$.cx,$.l)
t.i(0,$.dr,$.D)
t.i(0,$.ej,$.l)
t.i(0,$.eh,$.l)
t.i(0,$.eT,$.l)
t.i(0,$.ld,$.l)
s=$.k
r="The "+s+" finds a crowd of "
p=$.P
r=r+p+"ing "
o=$.t
r=r+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+s+" is moved by their plight and agrees to try to help."
s="The "+s+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+s+". After easily defeating the guards, the "+s+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won!"
o=this.y
t.i(0,new R.a2("Start a Revolution",!1,[new U.c(r),new U.c(s),new U.c(p)],H.a([],m),R.x(),!1,!1,new Y.by("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.w)
o=$.aQ
this.r.i(0,new X.E(q,t,null),o)},
gI:function(){return this.cx},
gav:function(){return this.cy},
gaw:function(){return this.db},
gJ:function(){return this.dx},
gaC:function(){return this.dy}}
S.m6.prototype={
al:function(){return!0},
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Shining Armor",H.a([$.aU,$.lS,$.S,$.f0],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Excalibur",H.a([$.a6,$.lS,$.S,$.b2,$.aL,$.f1],s),"Knight Shit",!1,"Masamune")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Noble Steed",H.a([$.C,$.S,$.bm,$.aI],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Hero's Shield",H.a([$.aU,$.f0,$.S,$.lS],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.v]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Y,P.T])
t.i(0,$.lg,$.j)
t.i(0,$.dL,$.j)
t.i(0,$.dP,$.j)
t.i(0,$.eT,$.j)
t.i(0,$.eQ,$.l)
r="The "+$.y+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.k
p=[U.c]
t.i(0,new R.bD("Breed the Frogs",!1,[new U.c(r+q+" collects all sorts of frogs. Various "+$.t+"s 'help' by "+$.P+"ing up a storm. "),new U.c("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.c("The "+q+" has found the final frog.      ")],H.a([],p),R.bY(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ad)
q=$.y
r="Now that the "+q+" is defeated, the "
o=$.t
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.k
t.i(0,new R.ac("Exploit the Heat",!1,[new U.c(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.c("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.c("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.bY(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
o=$.b_
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.y
n=n+q+". A Learned "+$.t+" explains that it can only be defeated by the Legendary "
r=$.ak
n=n+r+" Blade. The "
m=$.k
t.i(0,new R.ac("Fight the Beast",!1,[new U.c(n+m+" prepares to go questing for it. "),new U.c("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.c("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
r="The volcanos of the land are weirdly active after the defeat of the "+$.y+". Onehas begins to erupt near a "
m=$.t
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.P+"s, but not really doing anything to evacuate or save anyone. The "
o=$.k
t.i(0,new R.ac("Protect the Consorts",!1,[new U.c(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.c("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.c("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.bQ
this.c.i(0,new X.E(s,t,null),p)},
gaV:function(){return this.k1},
gJ:function(){return this.k2},
gS:function(){return this.r1}}
M.fY.prototype={
aG:function(a){var t,s
t=N.Y
s=new M.fY(!1,null,null,null,null,null,null,null,null,!1,!1,!1,null,null,null,null,null,!1,null,null,$.$get$ii(),null,null,null,Q.F(null,null,X.E),Q.F(null,null,t),P.cD(P.v,[Q.bK,N.Y]))
s.a=this.a
s.c$=this.c$
s.f$=Q.dU(this.f$,!1,!0,null,t)
s.eE()
s.z=!1
s.Q=!1
s.ch=!1
s.cx=this.cx
s.cy=this.cy
s.fr=!1
s.dy=this.dy
s.db=this.db
s.dx=this.dx
s.e=this.e
return s},
u:function(a){return this.dy},
kk:function(a){var t,s,r,q,p,o,n,m
t=Q.F(null,null,X.E)
for(s=a.gad(a),s=s.gP(s),r=[H.I(t,0)];s.w();){q=s.gG()
p=a.m(0,q)
C.a.h(t.b,new Q.h(q,t.k(q,J.r3(p)),r))}o=this.c$.A.v(t)
this.db=o
t.an(t,o)
n=this.c$.A.v(t)
s=this.c$
if(n!=null){this.dy="Land of "+H.n(s.A.v(o.gdh()))+" and "+H.n(this.c$.A.v(n.gdh()))
this.dx=n}else{this.dy="Land of "+H.n(s.A.v(o.gdh()))+" and "+H.n(this.c$.A.v(o.a))
this.dx=o}if(this.c$.A.a.D()>0.99){this.a=!0
m=H.a([Y.cW("Google"),Y.cW("Horrorterrors"),Y.cW("Glitches"),Y.cW("Grimoires"),Y.cW("Fluthlu"),Y.cW("The Zoologically Dubious")],[P.v])
s=this.c$.b
s.toString
F.iR(C.k).$1(s.ce(C.k,"Corrupt land."))
s=this.c$.A
s.b=J.cM(s.b,1)
s=s.a.h_()
r=this.c$
if(s)this.dy="Land of "+H.n(r.A.v(m))+" and "+H.n(this.c$.A.v(this.dx.a))
else this.dy="Land of "+H.n(r.A.v(this.db.gdh()))+" and "+H.n(this.c$.A.v(m))}},
eE:function(){this.b=this.az($.$get$i8())
this.c=this.az($.$get$i9())
this.d=this.az($.$get$i7())
var t=this.az($.$get$rn())
t=Q.fi(t,new M.m8(),H.ap(t,"cd",0),null)
this.f=Q.dU(t,!1,!0,null,H.ap(t,"cd",0))
t=this.az($.$get$rk())
t=Q.fi(t,new M.m9(),H.ap(t,"cd",0),null)
this.r=Q.dU(t,!1,!0,null,H.ap(t,"cd",0))
t=this.az($.$get$rm())
t=Q.fi(t,new M.ma(),H.ap(t,"cd",0),null)
this.x=Q.dU(t,!1,!0,null,H.ap(t,"cd",0))
t=this.az($.$get$ro())
t=Q.fi(t,new M.mb(),H.ap(t,"cd",0),null)
this.y=Q.dU(t,!1,!0,null,H.ap(t,"cd",0))},
en:function(){this.fx=H.hN(this.c$.A.v(this.r$.m(0,"consort")),"$isbx")},
kp:function(a,b){var t,s,r,q,p
t=this.r$
s=t.m(0,$.$get$rj().a)
if(s==null)return
if(s.gP(s).w())this.fy=H.hN(this.c$.A.v(t.m(0,"denizen")),"$iseL")
t=this.fy
r=this.c$
if(t==null){t=r.A
r=a.gaV()
q=b.gaV()
p=t.a.D()*(r+q)
if(p>0.95){t=this.c$.b
r="strong denizen for "+b.u(0)+" of "+a.u(0)
t.toString
F.iR(C.k).$1(t.ce(C.k,r))
this.fy=new Q.kH("Denizen "+H.n(this.c$.A.v($.$get$uD())),null,null,null)}else{t=this.c$
if(p<0.05){t=t.b
r="weak denizen for "+b.u(0)+" of "+a.u(0)
t.toString
F.iR(C.k).$1(t.ce(C.k,r))
this.fy=new Q.lx("Denizen "+H.n(this.c$.A.v($.$get$uE())),null,null,null)}else this.fy=new Q.eL("Denizen "+H.n(t.A.v(a.gao())),null,null,null)}}else t.c="Denizen "+H.n(r.A.v(a.gao()))},
i2:function(a,b,c,d){this.c$=b
this.kk(a)
this.e$=Q.tB(a,!0,null,X.E)
this.eo(b.A)
this.eE()
this.kp(c,d)
this.en()},
gM:function(a){return this.dy},
gco:function(){return this.go}}
M.iZ.prototype={
gbz:function(){return this.e$},
gcp:function(){return this.f$},
sb2:function(a,b){return this.c$=b}}
M.m8.prototype={
$1:function(a){return J.jN(a)},
$S:function(){return{func:1,args:[R.a2]}}}
M.m9.prototype={
$1:function(a){return J.jN(a)},
$S:function(){return{func:1,args:[R.W]}}}
M.ma.prototype={
$1:function(a){return J.jN(a)},
$S:function(){return{func:1,args:[R.ac]}}}
M.mb.prototype={
$1:function(a){return J.jN(a)},
$S:function(){return{func:1,args:[R.fb]}}}
Q.mc.prototype={
ga_:function(){return this.rx}}
K.me.prototype={
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Creeping Vine",H.a([$.a1,$.X,$.b4,$.aI],s),null,!1,"Sentient Plant Tentacles")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Lollipop",H.a([$.rL,$.X,$.b1],s),null,!1,"Sentient Plant Tentacles")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Golem",H.a([$.aU,$.aM,$.X,$.aI],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Ectoplasm",H.a([$.bV,$.X,$.b1],s),null,!1,"Ghost [Censored]")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Aqua Vitae",H.a([$.bb,$.X,$.b1,$.a6,$.a9],s),null,!1,"Tears of JR")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Homunculus",H.a([$.bm,$.X,$.aI],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.v]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.Y,P.T]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cf,$.j)
q.i(0,$.bl,$.j)
q.i(0,$.id,$.D)
q.i(0,$.ba,$.l)
q.i(0,$.lk,$.l)
q.i(0,$.dd,$.D)
p=$.k
o="The "+p+" finds a village of compliant "
n=$.t
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.P+"ing in panic. Don't upset "
m=$.y
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.c]
q.i(0,new R.W("Restore the Forest",!1,[new U.c(o),new U.c(l),new U.ab(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.aP
this.c.i(0,new X.E(s,q,null),n)
n=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.cf,$.j)
s.i(0,$.cp,$.j)
s.i(0,$.dd,$.D)
s.i(0,$.ba,$.l)
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
s.i(0,new R.W("Distribute the Food",!1,[new U.c(o),new U.c(l),new U.c(m),new U.ab(j,"The tyranny of "+k+" continues.",q)],H.a([],p),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
q=$.aP
this.c.i(0,new X.E(n,s,null),q)
q=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.dc,$.j)
t.i(0,$.bl,$.D)
t.i(0,$.dO,$.j)
t.i(0,$.c8,$.l)
t.i(0,$.e2,$.l)
t.i(0,$.ia,$.l)
s="Drawn by wailing and "+$.P+"ing, the "
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
t.i(0,new R.W("Protect the Farms",!1,[new U.c(s),new U.c(n),new U.c(l),new U.ab(m,"The "+r+" was not strong enough. Can anything save the "+o+"s before winter? ",k)],H.a([],p),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.aP
this.c.i(0,new X.E(q,t,null),p)},
ga_:function(){return this.rx},
gJ:function(){return this.x1},
gS:function(){return this.x2},
gao:function(){return this.K},
gI:function(){return this.E}}
X.df.prototype={}
G.mf.prototype={
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("FAQ",H.a([$.aa,$.X,$.a0,$.bW],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Flashlight",H.a([$.aT,$.X,$.b8,$.aa,$.bW],s),null,!1,"Tube of Localised Sun")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Octet",H.a([$.X,$.b8,$.bW,$.a6,$.rN],s),null,!1,"D13")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Horseshoe",H.a([$.vi,$.X,$.ai],s),null,!1,"Horse Sneaker")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Rabbits Foot",H.a([$.vt,$.X],s),null,!1,"Rabbit Remains")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("4 Leaf Clover",H.a([$.b4,$.X,$.b8,$.bW],s),null,!1,"Plant of Luck +4")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("8-Ball",H.a([$.bb,$.X,$.aI],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.v]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.Y,P.T]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.lf,$.j)
q.i(0,$.eO,$.l)
q.i(0,$.dJ,$.j)
q.i(0,$.e3,$.j)
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
q.i(0,new R.W("Be the Contestant",!1,[new U.c(o),new U.c(l),new U.c(k),new U.ab(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
m=$.k
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.P+"ing "+$.t+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.y
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.i(0,new R.W("Go Big or Go Home",!1,[new U.c(n),new U.c(p),new U.c(j),new U.ab(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
m=$.aP
this.c.i(0,new X.E(s,q,null),m)
m=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.cf,$.l)
s.i(0,$.ba,$.l)
s.i(0,$.dK,$.j)
s.i(0,$.le,$.j)
s.i(0,$.ei,$.j)
s.i(0,$.ib,$.j)
q=$.k
p="The "+q+" walks into a "
o=$.t
p=p+o+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
n=$.ak
p=p+n+", but "
l=$.y
p=p+l+" has hoarded all of the planets "
k=$.b_
n=p+k+" Candles, and everyone knows you cant have a good "+n+" ceremony without candles! The "+q+" vows to take back some "+k+" Candles for the poor "+o+"s. "
p="After a long search, the "+q+" has found the warehouse where "+l+" has stored all the candles. "+k+" Candles must be very valuable to "+l+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+q+" wants to sneak in without alerting a horde of "+l+" minions."
j="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+q+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+l+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+q+" to slip inside with ease. Captchaloging as much "+k+" Candles as they can, the "+q+" triumphantly returns to the village among the joyful "+$.P+"ing of the "+o+"s."
l="The "+q+" is ready to challenge the "+l+" to keep them from restealing the "+k+" candles. "
o="Never again shall the "+o+"s be without "+k+" Candles!"
s.i(0,new R.W("The Candlestick Taker",!1,[new U.c(n),new U.c(p),new U.c(j),new U.ab(l,"The "+k+" candles are once again at risk.",o)],H.a([],i),R.ts(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.j)
o=$.k
k="The "+o+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
l=$.t
k=k+l+" explains that the "
j=$.y
s.i(0,new R.W("Shine the Light",!1,[new U.c(k+j+" has forbidden the "+l+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+o+" vows to help.   "),new U.c("The "+o+" has finally managed to destroy the disk blocking light from the "+l+" village. There is a chorus of happy "+$.P+"s as they bask in the light. The "+o+" feels good about a job well done. "),new U.c("Disaster!  The "+l+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+j+" is guarding the disk themself.  The "+o+" must prepare themself for a tough fight.  "),new U.ab("The "+o+" has managed to reach the disk guarded by the "+j+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+j+" is defeated, the disk destroyed. Finally, the "+l+"s can enjoy the light in peace.")],H.a([],i),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
l=$.aP
this.c.i(0,new X.E(m,s,null),l)
l=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.fN,$.l)
s.i(0,$.bl,$.l)
s.i(0,$.eU,$.j)
s.i(0,$.ba,$.l)
s.i(0,$.cy,$.j)
q="Now that the "+$.y+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
p=$.k
q=q+p+" sets up a wiki and settles in to help the "
o=$.t
q=q+o+"s deal with it all."
o="Within barely any time at all, the "+o+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+p+" makes sure all of the information is from credible sources."
p="When the "+p+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
n="The "+$.eW+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
s.i(0,new R.ac("Moderate the Wiki",!1,[new U.c(q),new U.c(o),new U.c(p)],H.a([],i),R.e5(),!1,!1,new Y.R("Information Network",n,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
n="Now that the "+$.y+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
p=$.k
n=n+p+" shrugs and sets up a wiki and lets the "
o=$.t
n=n+o+"s deal with it all."
o="Within barely any time at all, unmoderated "+o+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+p+" alone, and each claims they are a different SPECIES entirely. The "+p+" finds this to be hilarious."
p="Luckily it turns out all that disinformation running around about the "+p+" thwarts some would be assasins. It turns out the "+p+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
q="The "+$.eW+" allows you to make you own assumptions about things, and be destroyed by them."
s.i(0,new R.ac("Create the Wiki",!1,[new U.c(n),new U.c(o),new U.c(p)],H.a([],i),R.eu(),!1,!1,new Y.R("Disinformation Network",q,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
q=$.t
p=q+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
o=$.k
p=p+o+" possibly stop it?"
q="The "+o+" pours over maps and charts. What do the sick "+q+"s have in common with each other?  Finally, there is a flash of inspiration. "+q+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+o+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
n="The "+o+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+o+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
m="The "+o+" traces the contaminated river back to it's source. The "
k=$.y
s.i(0,new R.W("Shed the Light",!1,[new U.c(p),new U.c(q),new U.c(n),new U.ab(m+k+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+o+" is victorious. The "+k+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
k=$.aP
this.c.i(0,new X.E(l,s,null),k)
k=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.dJ,$.j)
t.i(0,$.lf,$.j)
t.i(0,$.e3,$.l)
t.i(0,$.cC,$.l)
t.i(0,$.la,$.l)
t.i(0,$.c8,$.D)
t.i(0,$.dP,$.D)
t.i(0,$.co,$.l)
t.i(0,$.cS,$.D)
t.i(0,$.bl,$.l)
t.i(0,$.cF,$.j)
s=$.k
r="The "+s+" is approached by a Fast Talking "
q=$.t
r=r+q+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
p=$.ak
r=r+p+". The "+s+" agrees to perform the titular role."
o="The opening night performance of the Beautiful "+p+" is a huge success! The "+$.P+"ing of the fans is it's own reward!"
p="When it comes time for the next performance of the Beautiful "+p+", the "+s+" is turned away at the door. Apparently the "
n=$.y
q=p+n+" rampaged and terrorized "+q+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
n="There is not enough room on the stage for both of them. The "+s+" challenges the "+n+" to a glamour off, and wins handily. Enraged, the "+n+" attacks."
p="The "+s+" can finally get back to their promising acting career in peace."
t.i(0,new R.W("Be the Star",!1,[new U.c(r),new U.c(o),new U.c(q),new U.ab(n,"The actig career of the "+s+" is in shambles.",p)],H.a([],i),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
p="After the "+$.y+", the "
s=$.k
p=p+s+" is disappointed to learn that barely any of the "
n=$.t
p=p+n+"s know who they are. This will not do!"
n="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+n+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
q="The "+$.eW+" is famous, and everyone in this fight is lucky to have met them."
t.i(0,new R.ac("Be the Biggest Star in Paradox Space",!1,[new U.c(p),new U.c(n),new U.c(s)],H.a([],i),R.e5(),!1,!1,new Y.R("What's my name?",q,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
q=$.aP
this.c.i(0,new X.E(k,t,null),q)},
ga_:function(){return this.rx},
gJ:function(){return this.x1},
gS:function(){return this.x2},
gao:function(){return this.B},
gI:function(){return this.E}}
Z.ml.prototype={
al:function(){return!0},
H:function(){var t,s,r,q
t=this.y2
s=[G.V]
r=A.i("Dream Bubbles Book",H.a([$.O,$.ao,$.aS,$.vc],s),null,!1,null)
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),[H.I(t,0)]))
t=Q.F(null,null,A.a4)
r=A.i("Uno Reverse Card",H.a([$.rM,$.t0,$.ao],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Lord's Cape",H.a([$.Q,$.S,$.ao],s),"Lord Shit",!1,"Shoguns Cape")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Drawing Tablet",H.a([$.lU,$.S,$.ao],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("How to Make Friends And Influence People",H.a([$.a6,$.O,$.S,$.bA,$.aS],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.v]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.Y,P.T]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.dr,$.D)
q.i(0,$.ej,$.D)
q.i(0,$.c8,$.D)
q.i(0,$.cQ,$.l)
p="The "+$.y+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.k
p=p+o+" comands that the "
n=$.t
m=[U.c]
q.i(0,new R.bD("Command Minions to Breed Frogs",!1,[new U.c(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.P+"s. "),new U.c("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.c("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bY(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ad)
o="As soon as the "+$.y+" is defeated, the "
n=$.t
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.k
q.i(0,new R.ac("Conquer Everything",!1,[new U.c(o+p+" is up to the task.  "),new U.c("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.c("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.bQ
this.c.i(0,new X.E(s,q,null),p)
p=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.uS,$.j)
t.i(0,$.cR,$.j)
t.i(0,$.bl,$.j)
t.i(0,$.ba,$.l)
s="The "+$.y+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.k
s=s+r+" comands that the "
q=$.t
t.i(0,new R.bD("Command Minions to Breed Frogs",!1,[new U.c(s+q+"s collect the frogs in the name of Lord Dutton. The "+q+"s agree with confused, yet enthusiastic "+$.P+"s. "),new U.c("The "+q+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.c("A "+q+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bY(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ad)
r="As soon as the "+$.y+" is defeated, the "
q=$.t
r=r+q+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.k
t.i(0,new R.ac("Praise Dutton",!1,[new U.c(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.c("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+q+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.c("The final "+q+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.x(),!1,!1,new Y.by("Rewards/sweetTreasure.png",this.y2,"Rewards/no_reward.png",null),1,null,null),$.w)
m=$.bQ
this.c.i(0,new X.E(p,t,null),m)},
gaV:function(){return this.k1},
gJ:function(){return this.k2},
gS:function(){return this.r1},
gI:function(){return this.t}}
S.mm.prototype={
al:function(){return!0},
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Alternate Costume",H.a([$.Q,$.S,$.a9,$.a6,$.aq],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Mage's Cape",H.a([$.Q,$.S,$.a9],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Mage's Staff",H.a([$.a1,$.S,$.ai,$.a9,$.dw],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Walking Broom",H.a([$.iH,$.a1,$.S,$.aI,$.a9,$.dw],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o,n
t=[P.v]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Y,P.T])
t.i(0,$.eN,$.j)
t.i(0,$.eT,$.l)
t.i(0,$.cx,$.j)
t.i(0,$.eR,$.l)
t.i(0,$.dc,$.D)
r="The "+$.y+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.k
p=[U.c]
t.i(0,new R.bD("Understand the Frogs",!1,[new U.c(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bY(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ad)
q=$.k
t.i(0,new R.ac("Work With Exiles",!1,[new U.c("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.c("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.c("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.x(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
q=$.k
r="The "+q+" is feeling quite pleased with their victory over the "+$.y+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.b_
t.i(0,new R.ac("Suffer Visions",!1,[new U.c(r+o+". Oh god, why is this happening?"),new U.c("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.c("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
q="Now that the "+$.y+" has been defeated, the "
o=$.t
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.k
q=q+r+"'s help in planning the brand new city of "
n=$.b_
t.i(0,new R.ac("Become the Mayor",!1,[new U.c(q+n+"burg."),new U.c("A panicking "+o+" runs up to the "+r+", "+$.P+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.c("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.bQ
this.c.i(0,new X.E(s,t,null),p)},
gJ:function(){return this.k1},
gS:function(){return this.k4},
gI:function(){return this.y1}}
U.mn.prototype={
al:function(){return!0},
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Maiden's Breath",H.a([$.b4,$.S,$.aO],s),null,!1,null)
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Feather Duster",H.a([$.a1,$.S,$.dw,$.bB],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Valkyrie Shield",H.a([$.aO,$.aU,$.C,$.S,$.a6,$.f0,$.v5],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Maiden's Songbook",H.a([$.O,$.S,$.ae,$.aS],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o,n
t=[P.v]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Y,P.T])
t.i(0,$.dM,$.j)
t.i(0,$.cf,$.j)
t.i(0,$.ba,$.l)
t.i(0,$.bl,$.l)
t.i(0,$.dK,$.l)
t.i(0,$.cS,$.l)
r="The "+$.y+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.k
r=r+q+" asks local  "
p=$.t
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.P
n=[U.c]
t.i(0,new R.bD("Serve the  Frogs",!1,[new U.c(r+o+"s.  It's a lively neighborhood event."),new U.c("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bY(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ad)
q=$.k
o="The "+q+" has adopted a local "
p=$.t
t.i(0,new R.ac("Serve the PTA",!1,[new U.c(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.c("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.P+"ing about. "),new U.c("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.y+". ")],H.a([],n),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.bQ
this.c.i(0,new X.E(s,t,null),n)},
gJ:function(){return this.k1},
gS:function(){return this.k4}}
L.my.prototype={
ga_:function(){return this.rx},
gJ:function(){return this.x1},
gS:function(){return this.x2},
gao:function(){return this.B},
gI:function(){return this.R}}
V.mz.prototype={
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Puzzle Box",H.a([$.a1,$.X,$.a9],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Tesla Coil",H.a([$.aa,$.X,$.C],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Coin",H.a([$.C,$.X],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Electronic Door",H.a([$.C,$.X,$.aa,$.a0],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Janus Bust",H.a([$.aU,$.iI,$.aM,$.ao,$.X,$.a6,$.aa],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.v]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.Y,P.T]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cR,$.l)
q.i(0,$.eO,$.D)
q.i(0,$.cy,$.D)
p=$.k
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.t
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.y
k=[U.c]
q.i(0,new R.W("Change the View",!1,[new U.c(o),new U.c(m),new U.c(l),new U.ab(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.fc(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.j)
n=$.k
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+n+" explains that at the end of the Labrinth is the "
l=$.y
q.i(0,new R.W("Pick a Door, any Door",!1,[new U.c(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.c("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.c("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.ab("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.aP
this.c.i(0,new X.E(s,q,null),n)
n=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.eQ,$.D)
s.i(0,$.cn,$.l)
s.i(0,$.cy,$.D)
s.i(0,$.cR,$.D)
q=$.y
p="The "+q+" has commited a staggering amount of crimes against the local "+$.t+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
o=$.k
s.i(0,new R.W("Face the Music",!1,[new U.c(p+o+" knows that Justice is on their side."),new U.c("The "+q+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+o+" convinces a group of underlings lead by a "+q+" minion that the "+q+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.c("Huh.  I WONDER what the consequences are of the "+q+" being stuck hiding in their shitty snake lair while the "+o+" is running a propoganda campaign against them?  Suddenly the "+q+" has run out of allies entirely."),new U.ab("Karma is a bitch. The "+q+" has nowhere to run when the "+o+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
o=$.aP
this.c.i(0,new X.E(n,s,null),o)
o=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.ig,$.j)
t.i(0,$.bl,$.l)
t.i(0,$.eU,$.j)
t.i(0,$.ba,$.l)
t.i(0,$.cy,$.j)
s=$.k
r="The "+s+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+s+" thinks, then makes the logical selection.  The Dungeon accepts it."
q="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+s+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
p="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+s+" thinks they understand. Their choice is accepted."
n=$.y
n="It's the final door before facing the "+n+". All four puzzles blocks are simply identical images of "+$.ak+". The "+s+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+n+"."
m="Finally. The "+s+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.i(0,new R.W("Make the Connections",!1,[new U.c(r),new U.c(q),new U.c(p),new U.ab(n,"Looks like the "+s+" will have to resolve some of those bullshit puzzles.",m)],H.a([],k),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
k=$.aP
this.c.i(0,new X.E(o,t,null),k)},
ga_:function(){return this.rx},
gJ:function(){return this.x1},
gS:function(){return this.x2},
gao:function(){return this.B},
gI:function(){return this.E}}
S.mA.prototype={
ga_:function(){return this.rx},
gJ:function(){return this.x1},
gS:function(){return this.x2},
gao:function(){return this.y2},
gI:function(){return this.C}}
R.iT.prototype={
i4:function(a,b,c,d,e,f){var t
this.dy=a
this.c$=c
this.e$=Q.tB(b,!0,null,X.E)
this.eo(c.A)
this.b=this.az($.$get$i8())
this.c=this.az($.$get$i9())
this.d=this.az($.$get$i7())
t=this.az($.$get$rl())
this.id=Q.dU(t,!1,!0,null,H.ap(t,"cd",0))
this.en()},
$isds:1,
gco:function(){return this.k1},
ga_:function(){return this.k3}}
E.mB.prototype={
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Feather Pen",H.a([$.C,$.S,$.ao,$.bB],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Half Finished Bust of Snoop Dog",H.a([$.vr,$.S,$.iI,$.ai,$.a6],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Book of Poetry",H.a([$.O,$.S,$.ao,$.aS],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
al:function(){return!1},
F:function(){var t,s,r,q,p,o,n,m
t=[P.v]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Y,P.T])
t.i(0,$.dM,$.j)
t.i(0,$.cf,$.j)
t.i(0,$.ba,$.l)
t.i(0,$.bl,$.l)
t.i(0,$.dK,$.l)
t.i(0,$.cS,$.l)
r="The "+$.y+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.k
r=r+q+" asks the "
p=$.t
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.P
n=[U.c]
t.i(0,new R.bD("Inspire Frog Breeding",!1,[new U.c(r+o+"s. "),new U.c("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bY(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
q="You'd think after the dramatic defeat of the "+$.y+" the "
o=$.t
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.k
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.ak
t.i(0,new R.ac("Inspire the People",!1,[new U.c(q),new U.c(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.c("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.bQ
this.c.i(0,new X.E(s,t,null),n)},
gJ:function(){return this.k1},
gS:function(){return this.k4},
gI:function(){return this.y1}}
F.mC.prototype={
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Piano",H.a([$.ai,$.a1,$.ae,$.ao],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Flute",H.a([$.C,$.ae],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Microphone",H.a([$.b9,$.aa],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Violin",H.a([$.a1,$.ae],s),null,!1,"Tiny Cello")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Sheet Music",H.a([$.O,$.ae],s),null,!1,"Cheat Codes for Instruments")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Electric Guitar",H.a([$.aT,$.ae,$.aa,$.b9,$.au],s),null,!1,"Electrical Stringed Music Maker")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Turn Tables",H.a([$.aT,$.ae,$.aa,$.au],s),null,!1,"Spinning Disc Sound Maker")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Guitar",H.a([$.a1,$.ae],s),null,!1,"String Music Maker")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.v]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.Y,P.T]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cC,$.ad)
q.i(0,$.la,$.j)
q.i(0,$.e3,$.j)
q.i(0,$.dK,$.l)
q.i(0,$.ba,$.l)
q.i(0,$.l8,$.l)
p=$.k
o="The "+p+" meets a wise old "+$.t+" who tells that the "+$.y+" can only be awoken by the Legendary Hero playing the "
n=$.b_
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.ak
k=[U.c]
q.i(0,new R.a2("Play the Music",!1,[new U.c(o),new U.c(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.c(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.aQ
this.r.i(0,new X.E(s,q,null),p)
p=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.rA,$.ad)
s.i(0,$.db,$.l)
s.i(0,$.cQ,$.l)
s.i(0,$.dK,$.j)
s.i(0,$.l8,$.ad)
q=$.k
o="The "+q+" learns of a lost song, said to contain the power of "
n=$.b_
o=o+n+". Any who can sing it are destined to be strong enough to face the "
m=$.y
s.i(0,new R.a2("Sing the Song",!1,[new U.c(o+m+". "),new U.c("The "+q+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+n+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.c("A "+$.ak+"! That's the key! The "+q+" equips it and instantly finds themselves able to sing the "+n+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+m+".")],H.a([],k),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
m=$.aQ
this.r.i(0,new X.E(p,s,null),m)
m=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.id,$.ad)
t.i(0,$.co,$.l)
t.i(0,$.dO,$.l)
s=$.k
r="The "+s+" is suddenly challenged to a rap off by a particularly Fresh "
q=$.t
r=r+q+". It's a close one, but the "+s+" emerges victorious. It helps that the Fresh "+q+" kept rhyming "
p=$.P
p=r+p+" with "+p+"."
r="The "+s+" has apparently gotten a reputation as a rap master. A series of "+q+"s challenge them to rap offs and get utterly destroyed by the "+s+"'s fresh flows. "
s="The final challenger, a Sick-Nasty "+q+" approaches the "+s+". And aura of "+$.b_+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+q+" falters, and misses a beat. The "+s+" wins! They are the best rapper in all of Paradox Space! "
q=this.y
t.i(0,new R.a2("And It Don't Stop",!1,[new U.c(p),new U.c(r),new U.c(s)],H.a([],k),R.x(),!1,!1,new Y.by("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.w)
q=$.aQ
this.r.i(0,new X.E(m,t,null),q)},
gI:function(){return this.cx},
gav:function(){return this.cy},
gaw:function(){return this.db},
gJ:function(){return this.dx},
gaC:function(){return this.dy}}
Y.mE.prototype={
hJ:function(){var t,s,r,q,p
t=this.a
if(t.ak.hK(t))return
this.e=E.rF("!!!RING!!! OMG YOU SHOULD NEVER SEE THIS!",this.a)
s=Z.aE("Red Miles",3,null,"")
s.r.push(new Z.Z($.u,2,!0,0,1,2,3,""))
s.e=" You cannot escape them. "
this.e.fy.push(s)
t=this.a
r=new F.e0(null,C.c,t,"Black Queen","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],[X.df]),!1,H.a([],[Z.cT]),!1,H.a([],[N.cH]),0,H.a([],[E.L]),null,null,!1,H.a([],[Q.ct]),"",null,null)
r.p("Black Queen",t)
this.c=r
t=$.rJ
q=$.vs
p=new U.ag(t,null,null,"Blade",!1,P.a3(null,null,null,G.V),0,3)
p.L("Blade",[q],null,!1,null)
p.e.h(0,t)
r.a=p
p=this.c
p.ry=this.e
p.a$.q(P.B([$.al,500,$.bu,-100,$.u,50],D.bk,P.cj))
p=this.c
r=$.b3
t=$.al
t=p.a$.aH(t)
p.a$.aF(r,t)},
hH:function(){var t,s,r,q,p
t=this.a
if(t.ak.hI(t))return
this.f=E.rF("!!!SCEPTER!!! OMG YOU SHOULD NEVER SEE THIS!",this.a)
s=Z.aE("Reckoning Meteors",3,null,"")
s.r.push(new Z.Z($.u,2,!0,0,1,2,3,""))
s.e=" The very meteors from the Reckoning rain down. "
this.f.fy.push(s)
t=this.a
r=new F.e0(null,C.c,t,"Black King","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],[X.df]),!1,H.a([],[Z.cT]),!1,H.a([],[N.cH]),0,H.a([],[E.L]),null,null,!1,H.a([],[Q.ct]),"",null,null)
r.p("Black King",t)
this.b=r
r=this.c
t=$.dw
q=$.vn
p=new U.ag(t,null,null,"Scepter",!1,P.a3(null,null,null,G.V),0,3)
p.L("Scepter",[q],null,!1,null)
p.e.h(0,t)
r.a=p
p=this.b
p.ry=this.f
p.cy=1000
p.a$.q(P.B([$.al,1000,$.bu,-100,$.u,100],D.bk,P.cj))
p=this.b
r=$.b3
t=$.al
t=p.a$.aH(t)
p.a$.aF(r,t)},
hF:function(){var t,s,r,q,p
t=this.a
if(t.ak.hG(t))return
t=this.a
s=new F.e0(null,C.c,t,"Jack","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],[X.df]),!1,H.a([],[Z.cT]),!1,H.a([],[N.cH]),0,H.a([],[E.L]),null,null,!1,H.a([],[Q.ct]),"",null,null)
s.p("Jack",t)
this.d=s
t=$.rW
r=$.vl
q=new U.ag(t,null,null,"Knife",!1,P.a3(null,null,null,G.V),0,3)
q.L("Knife",[r],null,!1,null)
q.e.h(0,t)
s.a=q
this.d.a$.q(P.B([$.c5,-500,$.bE,10,$.aY,-100,$.al,20,$.bu,-100,$.u,30],D.bk,P.cj))
p=Z.aE("Stab To Meet You",1,null,"")
p.r.push(new Z.Z($.u,3,!0,0,1,2,3,""))
p.e=" It's pretty much how he says 'Hello'. "
q=this.d
s=$.b3
t=$.al
t=q.a$.aH(t)
q.a$.aF(s,t)
this.d.fy.push(p)},
hD:function(){var t,s,r
t=this.a
if(t.ak.hE(t))return
t=this.a
s=new F.e0(null,C.c,t,"Democratic Army","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],[X.df]),!1,H.a([],[Z.cT]),!1,H.a([],[N.cH]),0,H.a([],[E.L]),null,null,!1,H.a([],[Q.ct]),"",null,null)
s.p("Democratic Army",t)
this.r=s
r=Z.aE("Democracy Charge",2,null,"")
r.r.push(new Z.Z($.u,3,!0,0,1,2,3,""))
r.e=" The people have chosen to Rise Up against their oppressors. "
this.r.fy.push(r)},
sb2:function(a,b){return this.a=b}}
F.mD.prototype={}
F.e0.prototype={
d1:function(){return new E.kn(this,P.cD(D.bk,P.T),H.a([],[A.d0]))}}
F.jf.prototype={
aG:function(a){var t,s,r
t=this.d
s=this.c
r=new F.jf(null,C.c,s,t,"provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],[X.df]),!1,H.a([],[Z.cT]),!1,H.a([],[N.cH]),0,H.a([],[E.L]),null,null,!1,H.a([],[Q.ct]),"",null,null)
r.p(t,s)
this.dY(r)
return r}}
F.A.prototype={}
V.mV.prototype={
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Shorts",H.a([$.Q,$.S,$.f_,$.a6],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Sidekick Figurine",H.a([$.aT,$.S,$.au],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Steroids",H.a([$.aH,$.S,$.a9],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.v]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Y,P.T])
t.i(0,$.lg,$.j)
t.i(0,$.dd,$.l)
t.i(0,$.fQ,$.l)
t.i(0,$.lh,$.l)
t.i(0,$.dM,$.l)
t.i(0,$.bl,$.l)
t.i(0,$.e2,$.l)
t.i(0,$.ei,$.l)
t.i(0,$.li,$.l)
t.i(0,$.ia,$.l)
t.i(0,$.le,$.l)
r="The "+$.y+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.k
r=r+q+" asks the "
p=$.t
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.P
n=[U.c]
t.i(0,new R.bD("Help Breed the Frogs",!1,[new U.c(r+o+"s. "),new U.c("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bY(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ad)
q=$.k
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.t+" named Professor "
p=$.P
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.ak
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.y
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.i(0,new R.W("Become The Best",!1,[new U.c(o),new U.c(p),new U.c(l),new U.ab(k,"The "+q+" whited out...",m)],H.a([],n),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
m="Now that the "+$.y+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.k
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.t
t.i(0,new R.ac("Explore the Tombs",!1,[new U.c(m),new U.c(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.c("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.b_+" buffs. With a deafening "+$.P+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.bQ
this.c.i(0,new X.E(s,t,null),n)},
gaV:function(){return this.k1},
gJ:function(){return this.k2},
gS:function(){return this.r1}}
G.n4.prototype={
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Superhero Action Figure",H.a([$.aT,$.au,$.b6],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Action DVD",H.a([$.aT,$.au],s),null,!1,"Shogun The Movie")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Ghost Busters DVD",H.a([$.aT,$.bV],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Snow Dogs DVD",H.a([$.aT,$.b7,$.br,$.cg],s),null,!1,"Snow Buddies Anthology")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Skateboarding Video Game",H.a([$.aT,$.au],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Movie Poster",H.a([$.O,$.au],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Audrey II Plush",H.a([$.b4,$.au,$.Q,$.aI],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Peashooter Toy",H.a([$.b4,$.aZ,$.au,$.Q],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Shitty Sword",H.a([$.b6,$.C,$.au,$.f1,$.aL,$.bO],s),"So. Shitty.",!1,"Perfect Weapon")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("GameBro Magazine",H.a([$.O,$.au],s),"5/5 hats.",!1,"Nerd Magazine")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("GameGrl Magazine",H.a([$.O,$.au],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.v]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.Y,P.T]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cS,$.l)
q.i(0,$.cF,$.l)
q.i(0,$.co,$.j)
q.i(0,$.dd,$.ad)
q.i(0,$.ek,$.ad)
p=$.k
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.t
m=[U.c]
q.i(0,new R.a2("Become the Star",!1,[new U.c(o+n+" manages to catch a video of it, and it goes viral on "+$.b_+"tube. This is humiliating."),new U.c("Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.P+"s added in."),new U.c(" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something.")],H.a([],m),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.aQ
this.r.i(0,new X.E(s,q,null),n)
n=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.eh,$.l)
s.i(0,$.db,$.l)
s.i(0,$.cF,$.l)
s.i(0,$.co,$.l)
s.i(0,$.dL,$.j)
q=$.k
p="The "+q+" runs towards an explosion in a local "
o=$.t
p=p+o+" village. As they rush to help the injured, a Mysterious "+o+" in a mask and cape flees the scene. Who was that? "
l="The Mysterious "+o+" turns out to be Professor "
k=$.b_
s.i(0,new R.a2("Stop the Villain",!1,[new U.c(p),new U.c(l+k+", a notorious consort Villain. They spread chaos and disaster with their "+k+" ray. The "+q+" vows to stop them. "),new U.c(" The "+q+" has a dramatic showdown witih Professor "+k+", that results in the Villain being knocked unconscious, and taken away by the "+o+" authorities. ")],H.a([],m),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
o=$.aQ
this.r.i(0,new X.E(n,s,null),o)
o=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.cF,$.l)
t.i(0,$.dJ,$.j)
t.i(0,$.cp,$.j)
t.i(0,$.dL,$.l)
s=$.k
r="The "+s+" gets a job at the "+$.b_+" Cinema. A new movie, The Lonely "
q=$.ak
r=r+q+" is coming out soon, and "
p=$.t
r=r+p+"s are already lining up. It's going to be busy as fuck. "
n="Oh shit, the "+s+" learns that The Lonely "+q+" never was delivered. The "+p+"s already lined up are close to rioting. The sound of "+$.P+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+s+" prepares to venture inside.    "
s=" The "+s+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+q+". The "+p+"s lined up cheer and enter the theater. The Lonely "+q+" has finally begun to play. The "+s+" watches, rapt. Such a fantastic movie. The "+s+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
q=this.y
t.i(0,new R.a2("Premiere the Movie",!1,[new U.c(r),new U.c(n),new U.c(s)],H.a([],m),R.x(),!1,!1,new Y.by("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.w)
q=$.aQ
this.r.i(0,new X.E(o,t,null),q)},
gI:function(){return this.cx},
gav:function(){return this.cy},
gaw:function(){return this.db},
gJ:function(){return this.dx},
gaC:function(){return this.dy}}
N.n6.prototype={
al:function(){return!0},
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Feather'd Cap",H.a([$.Q,$.S,$.f_],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Crown",H.a([$.a6,$.rS,$.S,$.f_],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Gunpowder",H.a([$.bs,$.S],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o,n
t=[P.v]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Y,P.T])
t.i(0,$.cF,$.l)
t.i(0,$.cR,$.l)
t.i(0,$.dO,$.D)
r="With the closing of the curtain, the "+$.y+" has released the frogs, and yet they are nowhere to be found. The "
q=$.k
p=[U.c]
t.i(0,new R.bD("Destroy the Lack of Frogs",!1,[new U.c(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.c("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.c("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.bY(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ad)
q=$.y
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.k
r=r+o+" to get it back to normal. They organize a team of "
n=$.t
t.i(0,new R.ac("Fix All The Things",!1,[new U.c(r+n+"s to start rebuilding infrastructure."),new U.c("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.ak+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.c("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.bQ
this.c.i(0,new X.E(s,t,null),p)},
gaV:function(){return this.k1},
gJ:function(){return this.k2},
gS:function(){return this.r1}}
U.c.prototype={}
U.ab.prototype={}
R.fb.prototype={
u:function(a){return H.n(new H.dB(H.hM(this),null))+": "+this.c},
aG:function(a){var t=U.c
return new R.fb(this.c,this.d,P.bf(this.e,!0,t),H.a([],[t]),this.r,!1,!1,this.z,1,null,null)},
gM:function(a){return this.c}}
R.a2.prototype={
aG:function(a){var t=U.c
return new R.a2(this.c,!1,P.bf(this.e,!0,t),H.a([],[t]),this.r,!1,!1,this.z,1,null,null)}}
R.W.prototype={
aG:function(a){var t=U.c
return new R.W(this.c,!1,P.bf(this.e,!0,t),H.a([],[t]),this.r,!1,!1,this.z,1,null,null)}}
R.ac.prototype={
aG:function(a){var t=U.c
return new R.ac(this.c,!1,P.bf(this.e,!0,t),H.a([],[t]),this.r,!1,!1,this.z,1,null,null)}}
R.bD.prototype={
aG:function(a){var t=U.c
return new R.bD(this.c,!1,P.bf(this.e,!0,t),H.a([],[t]),this.r,!1,!1,this.z,1,null,null)}}
R.dy.prototype={
aG:function(a){var t=U.c
return new R.dy(this.c,this.d,P.bf(this.e,!0,t),H.a([],[t]),this.r,!1,!1,this.z,1,null,null)}}
R.ff.prototype={
aG:function(a){var t=U.c
return new R.ff(this.c,this.d,P.bf(this.e,!0,t),H.a([],[t]),this.r,!1,!1,this.z,1,null,null)}}
E.n9.prototype={
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Curtain",H.a([$.Q,$.X,$.b6],s),null,!1,"Show Ender")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Cursed Sword",H.a([$.C,$.f1,$.b2,$.X,$.aL,$.bc,$.b6,$.be,$.aR],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Megaphone",H.a([$.C,$.b9,$.aa,$.X,$.b6],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Bike Horn",H.a([$.aU,$.C,$.b9,$.bA,$.ca,$.X,$.b6],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Bacchus Wine",H.a([$.aH,$.bA,$.ao,$.X,$.a6,$.b6],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Nightmare Fuel",H.a([$.a1,$.X,$.bc,$.ar,$.bs,$.b6],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.v]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.Y,P.T]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.uQ,$.j)
q.i(0,$.dr,$.j)
q.i(0,$.db,$.j)
q.i(0,$.dc,$.l)
q.i(0,$.c8,$.l)
q.i(0,$.cx,$.l)
q.i(0,$.cn,$.D)
q.i(0,$.ek,$.l)
q.i(0,$.eh,$.j)
q.i(0,$.ld,$.j)
q.i(0,$.eT,$.j)
q.i(0,$.ry,$.j)
q.i(0,$.id,$.l)
q.i(0,$.ej,$.j)
p=$.k
o="The "+p+" is chilling in a "
n=$.t
o=o+n+" village when a bunch of sentient "
m=$.ak
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.y
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.c]
q.i(0,new R.W("Stop the War",!1,[new U.c(o),new U.c(k),new U.c(j),new U.ab(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.j8(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
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
q.i(0,new R.W("Stop the Civil War",!1,[new U.c(l),new U.c(m),new U.c(i),new U.ab(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
h=$.aP
this.c.i(0,new X.E(s,q,null),h)
h=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.dK,$.j)
s.i(0,$.c8,$.l)
s.i(0,$.cn,$.j)
s.i(0,$.cC,$.j)
s.i(0,$.cS,$.j)
s.i(0,$.cF,$.l)
s.i(0,$.lc,$.D)
s.i(0,$.dr,$.l)
s.i(0,$.dd,$.j)
s.i(0,$.co,$.j)
s.i(0,$.ek,$.D)
q=$.P
p="The "+q+"ing and capering "
o=$.t
p=p+o+"s are...OKAY, you guess? They keep asking the "
n=$.k
p=p+n+" to do a stupid "
m=$.b_
p=p+m+" Dance, though. They politely decline."
l="A capering "+o+" tells the "+n+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+m+" Dance off. The "+n+" politiely declines and defeats them in a good old fashioned beat down. The "+o+"s seem less than enthused about getting their stolen property back. Something about the "+n+" being a spoilsport?"
q="A crying "+o+" child asks why the "+n+" is such a meany head. Why won't they dance? Defeated, the "+n+" hangs their head, and then begins doing an extremely stupid "+m+" Dance, well below their dignity. The "+o+" child is estatic and begins "+q+" in time to the music that only the "+n+" can hear. "
k=$.y
j="The "+k+" approaches the "+n+", complimenting them on their stupid "+m+" Dance. Mortified, the "+n+" initiates strife."
o="It is done. Now NO ONE but that "+o+" child knows of the blow to the "+n+"'s dignity. No one at all."
s.i(0,new R.W("Do a Stupid Dance",!1,[new U.c(p),new U.c(l),new U.c(q),new U.ab(j,"You just KNOW that that shitty "+k+" is gonna somehow post videos of the "+n+"'s stupid "+m+" dance online. They must be stopped.",o)],H.a([],g),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
o=$.aP
this.c.i(0,new X.E(h,s,null),o)
o=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.uQ,$.j)
t.i(0,$.ek,$.j)
t.i(0,$.cn,$.j)
t.i(0,$.dd,$.l)
t.i(0,$.cS,$.j)
s=$.k
r="The "+s+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
q="The "+s+" feels like someone is laughing at them. Not like....a "+$.t+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+s+" is so fucking pissed."
p="The "+s+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+s+". 'You win, teleport to fight "+$.y+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+s+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+s+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+s+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.W("Hate This Bullshit Land",!1,[new U.c(r),new U.c(q),new U.c(p),new U.ab(n,"God FUCKING DAMN IT. After all that the "+s+" LOSES!? ",m)],H.a([],g),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
g=$.aP
this.c.i(0,new X.E(o,t,null),g)},
ga_:function(){return this.rx},
gJ:function(){return this.x1},
gS:function(){return this.x2},
gao:function(){return this.B},
gI:function(){return this.E}}
L.na.prototype={
ga_:function(){return this.rx},
gJ:function(){return this.x1},
gS:function(){return this.x2},
gao:function(){return this.B},
gI:function(){return this.E}}
Y.ew.prototype={}
Y.d_.prototype={}
Y.R.prototype={
gM:function(a){return this.c}}
Y.a7.prototype={}
Y.kg.prototype={}
Y.by.prototype={
gc2:function(){return this.d}}
Y.kp.prototype={}
Y.bF.prototype={}
Y.j5.prototype={}
Y.im.prototype={}
Y.j6.prototype={}
Y.ef.prototype={}
Z.nh.prototype={
ga_:function(){return this.rx},
gJ:function(){return this.x1},
gS:function(){return this.x2}}
N.ni.prototype={
al:function(){return!0},
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Domino Mask",H.a([$.Q,$.S,$.f_],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Archery Set",H.a([$.rK,$.S,$.f_,$.v6],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Gristtorrent Server",H.a([$.a6,$.aT,$.aa,$.S,$.a0,$.aq],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o,n
t=[P.v]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Y,P.T])
t.i(0,$.cn,$.j)
t.i(0,$.cx,$.l)
t.i(0,$.dL,$.l)
r="The "+$.y+" cannot release the frogs since the corrupt Noble "
q=$.t
r=r+q+"s have hoarded them. The "
p=$.k
o=[U.c]
t.i(0,new R.bD("Steal the Frogs",!1,[new U.c(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.c("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.c("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bY(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ad)
p=$.k
q="The "+p+" learns of the extreme injustices of the "
r=$.t
q=q+r+"s who rose to power during the tyranny of "
n=$.y
t.i(0,new R.ac("Lead a Rebellion",!1,[new U.c(q+n+". This cannot stand!"),new U.c("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.c("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
o=$.bQ
this.c.i(0,new X.E(s,t,null),o)},
gJ:function(){return this.k1},
gS:function(){return this.k4}}
Q.nj.prototype={
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Red Rose",H.a([$.aJ,$.aO],s),null,!1,"Seductive Plant")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Shipping Grid",H.a([$.aJ,$.O],s),"Don't let ABJ see this.",!1,"Grid of Sin")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Chocolate Bar",H.a([$.aJ,$.aH],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Candelabra",H.a([$.aJ,$.ar],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Head Cannon",H.a([$.aJ,$.bs,$.C,$.aZ],s),"Fuck you for that pun, JR.",!1,null)
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Her Pitch Passions Novel",H.a([$.aS,$.O,$.aJ],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.v]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.Y,P.T]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cp,$.j)
q.i(0,$.fQ,$.l)
q.i(0,$.eM,$.l)
q.i(0,$.fP,$.j)
q.i(0,$.cC,$.l)
q.i(0,$.ic,$.D)
p=$.k
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.t
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.ak+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.c]
q.i(0,new R.a2("Set the Mood",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.x(),!1,!1,new Y.by("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.w)
p=$.aQ
this.r.i(0,new X.E(s,q,null),p)
p=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.cC,$.l)
s.i(0,$.dJ,$.j)
s.i(0,$.fP,$.j)
s.i(0,$.cp,$.l)
s.i(0,$.e3,$.D)
s.i(0,$.ic,$.D)
q=$.t
o="A Romantic "+q+" approaches the "
n=$.k
s.i(0,new R.a2("Plan the Date",!1,[new U.c(o+n+". They have a date coming up but have no idea what to do. Can the "+n+" help? "),new U.c("The "+n+" has the best montage of their life, helping the Romantic "+q+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.c(" The "+n+" hides in bushes to spy on the Romantic "+q+"'s date. It's going so well! ")],H.a([],l),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
q=$.aQ
this.r.i(0,new X.E(p,s,null),q)
q=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.ic,$.j)
t.i(0,$.cp,$.j)
t.i(0,$.eM,$.l)
t.i(0,$.lh,$.j)
t.i(0,$.fP,$.j)
t.i(0,$.cC,$.l)
t.i(0,$.e3,$.D)
s=$.k
r="The "+s+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.t
t.i(0,new R.a2("Ship All the Ships",!1,[new U.c(r+p+"s have no idea what's coming. "),new U.c("The "+s+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.P+"s ring out through the air.  "),new U.c("The "+s+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.y+"'s stupid rules. ")],H.a([],l),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
s=$.k
p="The "+s+"  and the "
r=$.e6
t.i(0,new R.a2("Flushed Shipping Dungeon",!1,[new U.c(p+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+s+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.ev(),!1,!1,new Y.im(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.ad)
r=$.k
s="The "+r+"  and the "
p=$.e6
t.i(0,new R.a2("Pale Shipping Dungeon",!1,[new U.c(s+p+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+r+"  and the "+p+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.ev(),!1,!1,new Y.j5(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ad)
p=$.k
r="The "+p+"  and the "
s=$.e6
t.i(0,new R.a2("Pitched Shipping Dungeon",!1,[new U.c(r+s+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+p+"  and the "+s+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.ev(),!1,!1,new Y.j6(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.ad)
l=$.aQ
this.r.i(0,new X.E(q,t,null),l)},
gI:function(){return this.cx},
gav:function(){return this.cy},
gaw:function(){return this.db},
gJ:function(){return this.dx},
gaC:function(){return this.dy}}
T.nm.prototype={
$1:function(a){return a.gcB()},
$S:function(){return{func:1,args:[T.dA]}}}
T.nn.prototype={
$1:function(a){return!a.gcB()},
$S:function(){return{func:1,args:[T.dA]}}}
T.nl.prototype={
$1:function(a){return!a.gcC()},
$S:function(){return{func:1,args:[T.dA]}}}
T.dA.prototype={
H:function(){var t,s
t=Q.F(null,null,A.a4)
s=A.i("Perfectly Generic Object",H.a([],[G.V]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),[H.I(t,0)]))
this.db=t},
al:function(){return!1},
ed:function(a){var t,s,r
for(t=this.gI(),s=t.length,r=0;r<t.length;t.length===s||(0,H.bp)(t),++r)t[r].cY(a)},
F:function(){var t,s,r,q,p,o,n,m
t=[P.v]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.Y,P.T]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.dc,$.j)
q.i(0,$.bl,$.D)
q.i(0,$.dO,$.j)
q.i(0,$.c8,$.l)
q.i(0,$.e2,$.D)
p=$.k
o="The "+p+" learns that all of the local "
n=$.t
m=[U.c]
q.i(0,new R.ac("Revive the Consorts",!1,[new U.c(o+n+"s are dead. This is....really depressing, actually. "),new U.c("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.P+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.bQ
this.c.i(0,new X.E(s,q,null),n)
n=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.eS,$.j)
s.i(0,$.ei,$.D)
s.i(0,$.eR,$.l)
s.i(0,$.cQ,$.j)
s.i(0,$.cx,$.D)
q=$.k
p="The "+q+" learns that all of the local "
o=$.t
s.i(0,new R.ac("Produce the Goods",!1,[new U.c(p+o+"s have a severe shortage of gears and cogs. It is up to the "+q+" to get the assembly lines up and running again. "),new U.c("The "+q+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+q+" is training the local "+o+"s to operate the manufacturing equipment. There is "+$.P+"ing and chaos everywhere. "),new U.c("The "+q+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+o+"s name a national holiday after the "+q+". ")],H.a([],m),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
q=$.k
o="The "+q+" learns that all of the local "
p=$.t
s.i(0,new R.ac("Do the Teamwork",!1,[new U.c(o+p+"s have a severe shortage of gears and cogs. It is up to the "+q+" to get the assembly lines up and running again. "),new U.c("The "+q+" notices that all of the "+p+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.c("The "+q+" grabs the "+$.e6+" and demonstrates some simple teamwork techniques. The "+p+"s begin "+$.P+"ing in amazement. The factory is saved! ")],H.a([],m),R.ev(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ad)
p=$.bQ
this.c.i(0,new X.E(n,s,null),p)
p=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.ba,$.j)
t.i(0,$.bl,$.D)
t.i(0,$.cf,$.l)
s=$.k
r="The "+s+" learns that all of the local "
q=$.t
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+s+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
n=$.P
t.i(0,new R.a2("Relax the Consorts According to Prophecy",!1,[new U.c(r),new U.c(o+n+"ing about? A prophecy?  "),new U.c("The "+s+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+n+" once. ")],H.a([],m),R.tr(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.D)
n=$.k
q="The "+n+" learns that all of the local "
s=$.t
t.i(0,new R.ac("Relax the Consorts",!1,[new U.c(q+s+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.c("The "+n+" fluffs more pillows than any other Player ever has before them. "),new U.c("The "+n+" teaches the local "+s+"s to find their chill. ")],H.a([],m),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
m=$.bQ
this.c.i(0,new X.E(p,t,null),m)},
u:function(a){return this.b},
ab:function(a,b,c,d){var t=this.b
this.d=t
this.e=new X.i6("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.hU]),H.a([],[M.fM]))
this.H()
this.F()
if($.$get$fe().aj(0,this.f))H.bq("Duplicate class id for "+this.u(0)+": "+this.f+" is already registered for "+J.cm($.$get$fe().m(0,this.f))+".")
$.$get$fe().i(0,this.f,this)},
gaV:function(){return this.a},
gM:function(a){return this.b},
gbz:function(){return this.c},
gds:function(){return this.d},
gcB:function(){return this.r},
gcC:function(){return this.x},
gc2:function(){return this.db},
gJ:function(){return this.dx},
gS:function(){return this.fx},
gI:function(){return this.fy},
gdw:function(){return this.go},
sM:function(a,b){return this.b=b}}
E.no.prototype={
al:function(){return!0},
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Sage's Robe",H.a([$.Q,$.S,$.bh,$.a0,$.a9,$.a6],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Peer Reviewed Journal",H.a([$.O,$.S,$.aS,$.a0],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Guru Pillow",H.a([$.Q,$.S,$.iK,$.a0],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o
t=[P.v]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Y,P.T])
t.i(0,$.fN,$.l)
t.i(0,$.bl,$.l)
t.i(0,$.eU,$.j)
t.i(0,$.ba,$.D)
t.i(0,$.cy,$.j)
r="The "+$.y+" has blocked access to the books for the duration. The "
q=$.k
p=[U.c]
t.i(0,new R.bD("Understand the Frogs",!1,[new U.c(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.t+"s to start collecting frogs. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bY(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ad)
q="Now that the "+$.y+" is defeated, it is time to begin recovery efforts. The "
r=$.t
q=q+r+"s ask the "
o=$.k
t.i(0,new R.ac("Be the Sage",!1,[new U.c(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.P+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.c("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.c("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.bQ
this.c.i(0,new X.E(s,t,null),p)},
gJ:function(){return this.k1},
gS:function(){return this.k4},
gI:function(){return this.y1}}
Y.np.prototype={
ga_:function(){return this.rx},
gJ:function(){return this.x1},
gS:function(){return this.x2},
gI:function(){return this.t}}
Y.jb.prototype={
sb2:function(a,b){return this.b=b}}
Y.nq.prototype={
al:function(){return!1},
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Walking Stick",H.a([$.a1,$.S,$.dw],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Adorable Girlscout Beret",H.a([$.Q,$.S,$.vd,$.a0,$.a6],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Map",H.a([$.O,$.S,$.a0],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Compass",H.a([$.C,$.S,$.a0,$.a9],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p
t=[P.v]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Y,P.T])
t.i(0,$.dM,$.j)
t.i(0,$.cf,$.j)
t.i(0,$.bl,$.j)
t.i(0,$.co,$.D)
t.i(0,$.ba,$.D)
r="Now that the "+$.y+" has been defeated, the planet has really opened up. The "
q=$.k
p=[U.c]
t.i(0,new R.ac("Blaze a Trail",!1,[new U.c(r+q+" eagerly begins to explore uncharted territory. "),new U.c("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.c("Deep in a forgotten forest, in a temple covered in golden "+$.t+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
q="The "+$.y+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.k
t.i(0,new R.bD("Find the Frogs",!1,[new U.c(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.c("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.c("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.t+" "+$.P+"s in time to stop them.   ")],H.a([],p),R.bY(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ad)
p=$.bQ
this.c.i(0,new X.E(s,t,null),p)},
gJ:function(){return this.k1},
gS:function(){return this.k4}}
L.nr.prototype={
al:function(){return!1},
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Scroll",H.a([$.O,$.S,$.a0],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Ink Pot",H.a([$.bb,$.S,$.aq,$.a0],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Blank Book",H.a([$.O,$.S,$.aS,$.a0,$.aq,$.a6],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o
t=[P.v]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Y,P.T])
t.i(0,$.l8,$.j)
t.i(0,$.bl,$.j)
t.i(0,$.cy,$.j)
t.i(0,$.ba,$.l)
t.i(0,$.cR,$.l)
r="The "+$.y+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.k
p=[U.c]
t.i(0,new R.bD("Understand the Frogs",!1,[new U.c(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bY(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ad)
q="Now that the "+$.y+" has been taken care of, the "
r=$.k
q=q+r+" discovers a large library of "
o=$.t
t.i(0,new R.ac("Restore the Library",!1,[new U.c(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.c("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.c(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.bQ
this.c.i(0,new X.E(s,t,null),p)},
gJ:function(){return this.k1},
gS:function(){return this.k4},
gI:function(){return this.y1}}
S.nt.prototype={
al:function(){return!1},
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Cueball",H.a([$.em,$.lT,$.S,$.ai,$.aI,$.a6],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Crystal Ball",H.a([$.em,$.vb,$.S,$.b8],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Binoculars",H.a([$.bb,$.S,$.C],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Blindfold",H.a([$.v7,$.S,$.bh],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o
t=[P.v]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Y,P.T])
t.i(0,$.uT,$.j)
t.i(0,$.lb,$.j)
t.i(0,$.uR,$.j)
t.i(0,$.dd,$.l)
r="Now that the "+$.y+" has been defeated, the land is really starting to open up. The "
q=$.k
r=r+q+" finds a tunnel filled with Blind "
p=$.t
o=[U.c]
t.i(0,new R.ac("Be the King",!1,[new U.c(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.c("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.c("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.x(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
q="The "+$.y+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.k
t.i(0,new R.bD("Understand the Frogs",!1,[new U.c(q+p+" thinks hard and figures out the best way to organize the "+$.t+"s to start collecting frogs. "),new U.c("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.bY(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ad)
p=$.k
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.t
t.i(0,new R.ac("Work With Exiles",!1,[new U.c(q+r+"s to carry everything out."),new U.c("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.c("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.x(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
r="A group of underlings are still making trouble, even after the defeat of the "+$.y+". The "
p=$.k
r=r+p+" begins planting rumors of a huge "
q=$.ak
t.i(0,new R.ac("Have the Keikaku",!1,[new U.c(r+q+" Treasure in the center of a still active dungeon. "),new U.c("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.x(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
o=$.bQ
this.c.i(0,new X.E(s,t,null),o)},
gJ:function(){return this.k1},
gS:function(){return this.k4},
gI:function(){return this.y1}}
K.nv.prototype={
hZ:function(a){a.y=this.k3
a.cy=this.k2
a.cx=this.k1
a.k1=this.id
a.id=this.go
a.go=this.fy
a.E.A=!1
a.r1=this.fr
a.k4=this.dx},
hK:function(a){return!1},
hI:function(a){return!1},
hG:function(a){return!1},
hE:function(a){return!1},
i7:function(){var t,s,r,q
$.tv=this
$.u.Q=this.dy
for(t=L.uv(),s=J.bC(t.a),t=new H.dV(s,t.b,[H.I(t,0)]);t.w();){r=s.gG()
r.sM(0,r.gds())}for(t=T.tu(),s=J.bC(t.a),t=new H.dV(s,t.b,[H.I(t,0)]);t.w();){q=s.gG()
q.sM(0,q.gds())}}}
K.mv.prototype={}
G.nw.prototype={}
L.nF.prototype={
ga_:function(){return this.rx}}
T.bZ.prototype={}
O.nH.prototype={
ga_:function(){return this.ry}}
N.nI.prototype={
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Fiduspawn Plush",H.a([$.cg,$.Q,$.bh],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Teddy Bear",H.a([$.cg,$.Q,$.bh],s),null,!1,"Cuddle Bear")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Dice",H.a([$.rP,$.aT],s),null,!1,"D113")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Pigeon",H.a([$.bB,$.aI,$.bm,$.bd,$.be,$.lR],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Cat Ears",H.a([$.Q,$.bh,$.cg],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Religious Text",H.a([$.aS,$.O],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Psychology Book",H.a([$.aS,$.O],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Therapy Couch",H.a([$.bh,$.Q],s),null,!1,"Giant Problem Absorbing Couch")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("FLARP Manual",H.a([$.aS,$.O,$.a0],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.v]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.Y,P.T]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.dN,$.D)
q.i(0,$.ba,$.l)
q.i(0,$.cR,$.j)
q.i(0,$.cy,$.l)
p=$.k
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.t
m=[U.c]
q.i(0,new R.a2("The Therapist is IN",!1,[new U.c(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.c("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.b_+" or "+$.ak+".  The "+p+" is getting really good at helping them out. "),new U.c("A line of "+$.P+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.aQ
this.r.i(0,new X.E(s,q,null),p)
p=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.dN,$.D)
s.i(0,$.ba,$.j)
s.i(0,$.cR,$.j)
s.i(0,$.rs,$.j)
s.i(0,$.cC,$.j)
s.i(0,$.rA,$.j)
s.i(0,$.cy,$.l)
q=$.k
o="The "+q+" wanders into an incredibly calm area of their land. It is filled with chanting and "
n=$.P
o=o+n+"ing "
l=$.t
o=o+l+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+q+" joins them. "
k="While meditating with the "+l+" monks, the "+q+" has come to a startling realization, the vast croak is related to "
j=$.b_
s.i(0,new R.a2("Meditate On Frogism",!1,[new U.c(o),new U.c(k+j+"-ness. How could they miss this?"),new U.c(" The "+q+" begins telling all the "+l+" monks about how "+j+"-ness relates to the Vast Croak. The monks begin "+n+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.aQ
this.r.i(0,new X.E(p,s,null),n)
n=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.cQ,$.D)
t.i(0,$.dJ,$.j)
t.i(0,$.cf,$.j)
t.i(0,$.dL,$.j)
t.i(0,$.eQ,$.j)
s=$.k
r="The "+s+" wanders into an entire crowd of "
q=$.t
r=r+q+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.P+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+s+" happily joins the RP."
p="The "+s+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+q+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+s+" to save the day! All that RP practice surprisingly pays off. They win easily!   "
s="The FLARP is finally coming to an end. All the "+q+"s agree that it is the best session in living memory and celebrate how the "+s+" kept it from becoming a tragedy."
q=this.y
t.i(0,new R.a2("Protect the FLARPers",!1,[new U.c(r),new U.c(p),new U.c(s)],H.a([],m),R.x(),!1,!1,new Y.by("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.w)
q=$.aQ
this.r.i(0,new X.E(n,t,null),q)},
gI:function(){return this.cx},
gav:function(){return this.cy},
gaw:function(){return this.db},
gJ:function(){return this.dx},
gaC:function(){return this.dy}}
M.bt.prototype={}
N.nK.prototype={
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Frog Statue",H.a([$.aU,$.aM,$.X],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Frog Costume",H.a([$.Q,$.X],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Nuclear Reactor",H.a([$.c4,$.a0,$.aa,$.X],s),null,!1,"A Representation of My Hatred for Everything")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Telescope",H.a([$.C,$.bb,$.a0,$.X],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Green Sun Poster",H.a([$.O,$.X,$.rT,$.a6],s),"Huh.",!1,"Sauce Sun Poster")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
F:function(){var t,s,r,q,p,o,n,m
t=$.k
s=[P.v]
r=H.a(["Wherever the "+t+" goes, they find a "+$.t+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.P+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.y+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
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
t=new H.q(0,null,null,null,null,null,0,[N.Y,P.T])
t.i(0,$.dd,$.D)
t.i(0,$.ru,$.j)
s=[U.c]
t.i(0,new R.W("Light the Forge",!1,[new U.c(r[0]),new U.c(q[0]),new U.c(n[0]+" "+m[0])],H.a([],s),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.ad)
t.i(0,new R.W("Light the Forge",!1,[new U.c(r[1]),new U.c(q[1]),new U.c(n[1]+" "+m[1])],H.a([],s),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.ad)
t.i(0,new R.W("Light the Forge",!1,[new U.c(r[2]),new U.c(q[2]),new U.c(n[2]+" "+m[2])],H.a([],s),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.ad)
t.i(0,new R.W("Light the Forge",!1,[new U.c(r[2]),new U.c(q[0]),new U.c(n[1]+" "+m[0])],H.a([],s),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.ad)
t.i(0,new R.W("Light the Forge",!1,[new U.c(r[2]),new U.c(q[1]),new U.c(n[1]+" "+m[2])],H.a([],s),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.ad)
t.i(0,new R.W("Light the Forge",!1,[new U.c(r[0]),new U.c(q[1]),new U.c(n[2]+" "+m[0])],H.a([],s),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.ad)
p=$.k
t.i(0,new R.bD("Breed the Frogs, But Be Boring About It",!1,[new U.c("The "+p+" collects all sorts of frogs. Various "+$.t+"s 'help' by "+$.P+"ing up a storm. "),new U.c("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.c("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.x(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
s=$.Fb
this.c.i(0,new X.E(o,t,null),s)},
ga_:function(){return this.rx},
gJ:function(){return this.x1},
gS:function(){return this.x2},
gao:function(){return this.B},
gI:function(){return this.E}}
U.ag.prototype={
gcE:function(){var t=this.e
return new H.bv(t,new U.nL(this),[H.I(t,0)])},
bt:function(){var t,s,r,q
t=this.c
s=this.x
r=this.gcE()
r=P.bf(r,!0,H.I(r,0))
q=new U.ag(s,null,null,t,!1,P.a3(null,null,null,G.V),0,3)
q.L(t,r,null,!1,null)
q.e.h(0,s)
return q},
cJ:function(a){var t,s,r,q
t=this.gcE()
s=P.bf(t,!0,H.I(t,0))
for(t=H.I(s,0),r=new H.hk(s,[t]),t=new H.dx(r,r.gn(r),0,null,[t]),r=J.am(a);t.w();){q=t.d
if(!r.O(a,q))return q}return a},
gM:function(a){return this.c+"kind"},
c6:function(a){var t,s,r,q,p,o,n
t=a.v(this.gcE())
s=a.v(this.gcE())
if(J.a5(t,s)){r=this.gcE()
r=r.gn(r)>1}else r=!1
if(r)s=this.cJ(t)
q=this.x
p=t!=null?a.v(t.gb4()):null
o=s!=null?a.v(s.gb4()):null
n=q!=null?a.v(q.b):null
if(p!=null&&o!=null&&n!=null)return"It's "+H.n(p)+" and it's "+H.n(o)+" and it's "+H.n(n)+"."
else if(o!=null&&n!=null)return"It's "+H.n(o)+" and it's "+H.n(n)+" and that is all there is to say on the matter."
else if(n!=null)return"It is the platonic ideal of "+H.n(n)+"."
else return"...  What even IS this."},
$isbw:1,
$asbw:function(){return[A.a4]}}
U.nL.prototype={
$1:function(a){return!J.a5(a,this.a.x)},
$S:function(){return{func:1,args:[G.V]}}}
M.nO.prototype={
$aseb:function(){return[O.j4]},
$asde:function(){return[O.j4,P.dG]}}
U.nP.prototype={
ga_:function(){return this.rx}}
R.oe.prototype={
al:function(){return!0},
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Meddler's Guide",H.a([$.aS,$.S,$.O,$.bA,$.a6,$.b1],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("First Aid Kit",H.a([$.bb,$.S,$.b1],s),"Heals here.",!1,"Anti-Pain Box")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=$.S
r=A.i("Cloud in a Bottle",H.a([r,r,$.bz],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a9,$.S,$.b8,$.aO,$.O],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o
t=[P.v]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Y,P.T])
t.i(0,$.cR,$.j)
t.i(0,$.ba,$.j)
t.i(0,$.dM,$.l)
t.i(0,$.eU,$.l)
t.i(0,$.rr,$.l)
t.i(0,$.e2,$.l)
t.i(0,$.ia,$.l)
t.i(0,$.rz,$.l)
r=$.k
q="The "+r+" decides to take a break after defeating "+$.y+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.t
o=[U.c]
t.i(0,new R.ac("Heal the Timeline",!1,[new U.c(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.c("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.c("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.P+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.w0(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
r=$.t
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.k
t.i(0,new R.ac("Be The Sylph",!1,[new U.c(p+q+" is unimpressed. "),new U.c("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.c("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
r=$.t
q="The "+r+"s are so stressed after all that shit with the "+$.y+". They are yelling and "+$.P+" at each other over the slightest of insults. The "
p=$.k
t.i(0,new R.ac("Relax the Consorts",!1,[new U.c(q+p+" decides that what they really need is to chill the fuck out. "),new U.c("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.c("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
p="The "+$.y+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.k
p=p+r+" purifies the pools "
q=$.t
t.i(0,new R.bD("Purify the Frogs",!1,[new U.c(p),new U.c("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.c("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.bY(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ad)
r="The defeat of the "+$.y+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.t
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.k
t.i(0,new R.ac("Purify the Water",!1,[new U.c(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.c("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.c("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.b_+". Huh. Okay then.")],H.a([],o),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
o=$.bQ
this.c.i(0,new X.E(s,t,null),o)},
gJ:function(){return this.k1},
gS:function(){return this.k4},
gI:function(){return this.y1}}
D.oj.prototype={
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Robot",H.a([$.aa,$.C,$.aI,$.a0],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Circuit Board",H.a([$.aa,$.C],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Datastructures for Assholes",H.a([$.aa,$.O],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.aa,$.O,$.aR,$.aS],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("3-D Printer",H.a([$.aT,$.aa,$.C],s),null,!1,"3-D Shitpost Maker")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Virus on a USB Stick",H.a([$.vg,$.C],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Wrench",H.a([$.t5,$.C,$.ai],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Computer",H.a([$.aa,$.C],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.v]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.Y,P.T]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.ig,$.l)
q.i(0,$.eN,$.j)
q.i(0,$.eS,$.j)
q.i(0,$.cx,$.D)
p=$.k
o="The "+p+" learns from their "
n=$.t
o=o+n+"s about the great "
m=$.b_
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.y+" destroyed it. "
o="The "+p+" searches for the "
l=$.ak
k=[U.c]
q.i(0,new R.a2("Fix the Machine",!1,[new U.c(n),new U.c(o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "),new U.c("The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory.  ")],H.a([],k),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
m=$.k
l="The "+m+" is approached by a "
p=$.t
p=l+p+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+p+"s are at a loss as to what to do. The "+m+" agrees to help decipher the puzzle. I mean, look at the little guy "
l=$.P
q.i(0,new R.a2("Decipher the Enigma",!1,[new U.c(p+l+"ing, how could they not? "),new U.c("The "+m+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.y+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.c("The "+m+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.ak+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+l+"s ")],H.a([],k),R.fc(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
l=$.aQ
this.r.i(0,new X.E(s,q,null),l)
l=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.eS,$.j)
s.i(0,$.ei,$.D)
s.i(0,$.eR,$.l)
s.i(0,$.cQ,$.j)
s.i(0,$.cx,$.D)
q=$.k
p="The "+q+" learns that all of the local "
o=$.t
s.i(0,new R.a2("Produce the Goods",!1,[new U.c(p+o+"s have a severe shortage of gears and cogs. It is up to the "+q+" to get the assembly lines up and running again. "),new U.c("The "+q+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+q+" is training the local "+o+"s to operate the manufacturing equipment. There is "+$.P+"ing and chaos everywhere. "),new U.c("The "+q+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+o+"s name a national holiday after the "+q+". ")],H.a([],k),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
q=$.k
o="The "+q+" finds two groups of "
p=$.t
o=o+p+"s screaming and "
n=$.P
o=o+n+"ing at each other. Apparently the first group of "+n+"s are workers at a local "
m=$.ak
o=o+m+" factory and want to be paid more? The second group of "+p+"s claim they don't work hard enough for a raise.  "
n="The "+q+" arranges for the worker "+p+"s to meet with the factory manager "+p+"s individually and discuss their complaints. The "+q+" is getting a headache from all the "+n+"ing, but at least progress is being made."
m="The "+q+" is shaking hands for a "+p+" newspaper, posing in front of the now bustling "+m+" factory. The workers are paid a fair wage, and several ways to make the factory work more efficiently has left the managers happy, too. "
p=this.y
s.i(0,new R.a2("Stop the Dispute",!1,[new U.c(o),new U.c(n),new U.c(m)],H.a([],k),R.e5(),!1,!1,new Y.by("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.w)
p=$.aP
this.r.i(0,new X.E(l,s,null),p)
p=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.ig,$.D)
t.i(0,$.eN,$.j)
t.i(0,$.eS,$.j)
t.i(0,$.cx,$.D)
s=$.k
r="The "+s+" learns from a mysterious "+$.t+" in a black trenchcoat about a great "
q=$.b_
r=r+q+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
o=$.y
t.i(0,new R.a2("Learn the Secret",!1,[new U.c(r+o+"? "),new U.c("The "+s+" searches for clues about the "+q+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+q+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.c("At last, the "+s+" has found a cave with a terminal to the "+q+" MACHINE. <b>TELL ME ABOUT "+o+".</b>, they type. <b><i>ERROR: TERM '"+o+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+s+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+s+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],k),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
k=$.aQ
this.r.i(0,new X.E(p,t,null),k)},
gI:function(){return this.cx},
gav:function(){return this.cy},
gaw:function(){return this.db},
gJ:function(){return this.dx},
gaC:function(){return this.dy}}
V.ok.prototype={
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Lighter",H.a([$.C,$.ar],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Siberia Poster",H.a([$.O,$.br],s),null,!1,"Poster of the Shoguns Birthplace")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Nuclear Winter Poster",H.a([$.O,$.br,$.c4],s),null,!1,"Shoguns Dream as a Poster")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Doomsday Device",H.a([$.C,$.aR,$.c4,$.bn,$.be],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Juggalo Poster",H.a([$.O,$.vm],s),null,!1,"False God Poster")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Fancy Watch",H.a([$.C,$.bj,$.bn],s),null,!1,"Shoguns Watch")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Magnificent Crown",H.a([$.C,$.bj,$.bn],s),null,!1,"The Shoguns Crown")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Bitching Clothes",H.a([$.Q,$.f_,$.bn],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Ceramic Pork Hollow",H.a([$.bM,$.bj],s),"...",!1,"Shoguns Old Porkhollow")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Shit Ton of Guns",H.a([$.C,$.t_,$.aZ,$.bn],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Sniper Rifle",H.a([$.C,$.t3,$.aZ,$.bn],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("AK-47",H.a([$.C,$.rX,$.aZ,$.bn],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("IED",H.a([$.lO,$.aL,$.C,$.bs,$.bn],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Idiots Guide To Being An Asshole",H.a([$.O,$.bA,$.aS],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Bike Horn",H.a([$.ca,$.C,$.b9,$.bA],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Matches",H.a([$.a1,$.ar],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.v]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.Y,P.T]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cF,$.l)
q.i(0,$.dJ,$.j)
q.i(0,$.dP,$.j)
q.i(0,$.eT,$.j)
q.i(0,$.lg,$.j)
q.i(0,$.dL,$.l)
p=$.k
o=[U.c]
q.i(0,new R.a2("Start the Fires",!1,[new U.c("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.c("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.c(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.x(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
p=$.aQ
this.r.i(0,new X.E(s,q,null),p)
p=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.cF,$.l)
s.i(0,$.dJ,$.j)
s.i(0,$.cp,$.j)
s.i(0,$.dL,$.l)
q=$.k
n="The "+q+" learns that there is an entire planet of suckers, er, you mean "
m=$.t
s.i(0,new R.a2("All About the Boonies, Baby",!1,[new U.c(n+m+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.c("The "+q+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+m+"s various wonders from around Paradox Space. Marvel at the two headed "+$.ak+" underling. Tremble at the fearsome "+$.b_+" "+m+".   "),new U.c(" The "+q+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+m+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.x(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
m=$.aQ
this.r.i(0,new X.E(p,s,null),m)
m=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.dc,$.j)
s.i(0,$.bl,$.D)
s.i(0,$.dO,$.j)
s.i(0,$.c8,$.l)
s.i(0,$.e2,$.D)
s.i(0,$.dr,$.D)
q=$.k
p="The "+q+" learns that all of the local "
n=$.t
s.i(0,new R.a2("Revive the Consorts",!1,[new U.c(p+n+"s are dead. This is....pretty cool, actually. "),new U.c("The "+q+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+q+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.P+"ing.  The dead "+n+"s have risen and want to be part of "+q+"'s Necromantic Army.   ")],H.a([],o),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
q=$.aQ
this.r.i(0,new X.E(m,s,null),q)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.cn,$.j)
t.i(0,$.dr,$.D)
t.i(0,$.eh,$.j)
t.i(0,$.ld,$.j)
t.i(0,$.cx,$.l)
t.i(0,$.ej,$.l)
s=$.k
r="The "+s+" finds a crowd of "
p=$.P
r=r+p+"ing "
n=$.t
r=r+n+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+n+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
m="The "+s+" meets with the upper class "+n+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.b_+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+n+"s have been defeated. The high class "+n+"s murmur dignified "+p+"s and give the "+s+" several medals. "
p=this.y
t.i(0,new R.a2("Stop a Rebellion",!1,[new U.c(r),new U.c(m),new U.c(s)],H.a([],o),R.x(),!1,!1,new Y.by("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.w)
p=$.aQ
this.r.i(0,new X.E(q,t,null),p)},
gI:function(){return this.cx},
gav:function(){return this.cy},
gaw:function(){return this.db},
gJ:function(){return this.dx},
gaC:function(){return this.dy}}
X.E.prototype={
u:function(a){return"Theme: "+H.n(this.a)},
gdh:function(){return this.a},
gcp:function(){return this.b},
sdv:function(a,b){return this.c=b}}
U.oo.prototype={
al:function(){return!1},
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Lockpick",H.a([$.C,$.S,$.aq,$.b2,$.a6],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Sneaking Suit",H.a([$.Q,$.S,$.aq],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Dagger",H.a([$.C,$.S,$.b2,$.aL,$.rO],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.v]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Y,P.T])
t.i(0,$.cn,$.j)
t.i(0,$.db,$.l)
t.i(0,$.co,$.l)
t.i(0,$.cQ,$.l)
r="The "+$.y+" cannot release the frogs since the corrupt "
q=$.t
r=r+q+" Cops have confiscated them. The "
p=$.k
o=[U.c]
t.i(0,new R.bD("Steal the Frogs",!1,[new U.c(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.c("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.c("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bY(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ad)
p=$.k
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.y+"'s layer and slated to be returned to the "
r=$.t
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.P+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.db
t.i(0,new R.ac("Escape the Law",!1,[new U.c(q),new U.c(n),new U.c(p)],H.a([],o),R.x(),!1,!1,new Y.by("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.w)
r=$.t
p="A weeping "+r+" approaches the "
n=$.k
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.y
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.b_+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.P+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.db
t.i(0,new R.ac("Free The Prisoner",!1,[new U.c(q),new U.c(p),new U.c(n)],H.a([],o),R.x(),!1,!1,new Y.by("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.w)
r=$.y
n="Now that the "+r+" has been defeated, the "
p=$.t
n=n+p+"s have recovered their precious "
q=$.ak
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.k
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.P
l=n+l+"worth, the disaffected Heir to the "+$.b_+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.db
t.i(0,new R.ac("Shit, Let's Be a Heist Movie",!1,[new U.c(r),new U.c(l),new U.c(q),new U.c(m)],H.a([],o),R.x(),!1,!1,new Y.by("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.w)
p=$.bQ
this.c.i(0,new X.E(s,t,null),p)},
gJ:function(){return this.k1},
gS:function(){return this.k4}}
N.op.prototype={
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Grandfather Clock",H.a([$.a1,$.ao,$.bj,$.X],s),null,!1,"Ticking Tower of Time")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Drum",H.a([$.vq,$.X,$.ae],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Dead Doppelganger",H.a([$.aU,$.bm,$.X,$.bd,$.bc,$.aR],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Music Box",H.a([$.C,$.X,$.ae,$.ao],s),null,!1,"Cube of Noise")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Turn Tables",H.a([$.C,$.X,$.ae,$.a6,$.au],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Metronome",H.a([$.C,$.X,$.ae],s),null,!1,"Never Ending Ticking Device")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.v]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.Y,P.T]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.uW,$.ad)
q.i(0,$.cx,$.l)
q.i(0,$.cQ,$.l)
q.i(0,$.eR,$.j)
p=$.y
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.k
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.r2
l=[U.c]
q.i(0,new R.ac("Destroy 1000 Clocks",!1,[new U.c(o),new U.c(m),new U.c(p)],H.a([],l),R.eu(),!1,!1,new Y.by("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.j)
n=$.k
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.t+"s, they set out to fix the "
m=$.ak
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.y
q.i(0,new R.W("Fix the Clockwork",!1,[new U.c(p),new U.c(o),new U.c(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.ab("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
j=$.aP
this.c.i(0,new X.E(s,q,null),j)
j=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.id,$.j)
s.i(0,$.dP,$.D)
s.i(0,$.cx,$.j)
q=$.k
p="The "+q+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.t+"s they try to line the beats up to a more harmonious rhythm. "
o="The "+q+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
q="The "+q+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
n=$.y
s.i(0,new R.W("Synchronize the Rhythm",!1,[new U.c(p),new U.c(o),new U.ab(q+n+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+n+". Whatever. ")],H.a([],l),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.aP
this.c.i(0,new X.E(j,s,null),n)
n=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.cf,$.j)
t.i(0,$.ba,$.l)
t.i(0,$.cR,$.j)
t.i(0,$.dM,$.j)
s=$.y
r="The door to the "+s+"'s  lair is barred by a door locked with three identical missing "
q=$.ak
r=r+q+" Pieces. A fourth is already inlaid in the door. The "
p=$.k
r=r+p+" prepares for a bullshit item collection quest. "
o="The "+p+" is starting to get frustrated. No matter what they do they can't seem to find any more "+q+" Pieces. A "+$.t+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+p+" any less frustrated."
m="In a flash of insight, the "+p+" realizes that they can just use their Time Instrument to go back before they first visited the "+s+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+q+" Pieces and the door is open. Time to prepare for a boss fight. "
s="The "+p+" is ready to fight the "+s+". "
k="Whew, doomed timeline averted. The "+p+" goes back in time to restore the 3 "+q+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.i(0,new R.W("Walk Another Path",!1,[new U.c(r),new U.c(o),new U.c(m),new U.ab(s,"Um. Is this a doomed timeline? What happens if the "+p+" never returns those "+q+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.j8(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.j)
k=$.y
q="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
p=$.ak
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
s=$.k
t.i(0,new R.W("Destroy Timelines",!1,[new U.c(q+s+" prepares for a bullshit item collection quest. "),new U.c("The "+s+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.t+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+s+" any less frustrated."),new U.c("The "+s+" is ready to fucking give up. Fuck those "+p+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+p+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+s+" can now face the "+k+". "),new U.ab("The "+s+" is ready to fight the "+k+". ","Welp. The "+s+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.eu(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.j)
s="With the defeat of the "+$.y+", "
k=$.k
s=s+k+" uncovers historical documents in a ruined consort village. Taking them to the "
p=$.t
s=s+p+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
q=$.b_
t.i(0,new R.ac("Shatter the Timeline",!1,[new U.c(s+q+" Metropolis. The "+p+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+p+"s re-fight the Wars to win back their "+q+" Metropolis."),new U.c("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+p+"s favor. They check back in with the past "+p+" leader to inform them that the timeline has been revised to their advantage."),new U.c("The "+k+" divulges to the "+p+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+p+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+p+"s defeat. Agh!"),new U.c("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+q+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.eu(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
q=$.t
k="There is a babbling brook. A wizened "+q+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
p=$.k
t.i(0,new R.W("Move Forwards, Never Stop",!1,[new U.c(k+p+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.c("Days in the past, but not many, the "+p+" is exploring. They find the babbling brook and the wizened "+q+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+p+" yells that it's not true, that this is the second time he's met the wizened "+q+". The wizened "+q+" simply "+$.P+"s mysteriously.  "),new U.c("Days in the future, but not enough to catch up to the present, the "+p+" is exploring. When they find the babbling brook, the wizened "+q+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+p+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+q+"...even if it isn't the same order. "),new U.ab("Inexorably, the "+p+" is back in the present but also far in the future. The wizened "+q+" has just been slain by the "+$.y+", mere minutes after their first/last conversation. The "+p+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+p+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
l=$.aP
this.c.i(0,new X.E(n,t,null),l)},
gaV:function(){return this.rx},
ga_:function(){return this.ry},
gJ:function(){return this.x2},
gS:function(){return this.y1},
gao:function(){return this.C},
gI:function(){return this.R}}
G.V.prototype={
u:function(a){var t=this.b
if(t.length!==0)return C.a.gV(t)
return"NULL TRAIT"},
gh1:function(){return this.a},
gb4:function(){return this.b},
gas:function(){return this.c}}
G.aW.prototype={}
G.ah.prototype={}
G.bG.prototype={}
G.d.prototype={
gkn:function(){return this.e.length},
gas:function(){var t,s,r,q,p
for(t=this.e,s=t.length,r=0,q=0;p=t.length,q<p;p===s||(0,H.bp)(t),++q)r+=t[q].c
return r},
aU:function(a,b){return C.b.a5(b.gkn()-this.e.length)},
hh:function(a){return C.a.jG(this.e,a.gdW(a))},
$isbw:1,
$asbw:function(){return[G.d]},
gM:function(a){return this.d},
ghM:function(){return this.e}}
G.lV.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.V]}}}
Q.oH.prototype={
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Cardboard Box",H.a([$.O,$.X,$.aq],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Hole Punch",H.a([$.C,$.X,$.aq],s),null,!1,"Paper Impaler")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Smoke Bombs",H.a([$.bs,$.X,$.aq,$.lO],s),null,!1,"Vape Grenades")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Tribal Mask",H.a([$.bd,$.X,$.aq,$.bc,$.bP],s),null,!1,"Ancient Face")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Opera Mask",H.a([$.aT,$.X,$.aq,$.ao],s),null,!1,"Phantom of the Opera Mask")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Black Hole in a Bottle.",H.a([$.X,$.a6,$.rT,$.aq,$.bb],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.v]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.Y,P.T]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.dN,$.j)
q.i(0,$.ie,$.j)
q.i(0,$.fO,$.j)
q.i(0,$.lb,$.j)
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
q.i(0,new R.ac("Be Forgettable",!1,[new U.c(p),new U.c(o),new U.c(n)],H.a([],l),R.x(),!1,!1,new Y.by("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.w)
m=$.k
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.y
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.i(0,new R.W("Go to Nowhere",!1,[new U.c(n),new U.c(o),new U.c(p),new U.ab(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
i=$.aP
this.c.i(0,new X.E(s,q,null),i)
i=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.dN,$.l)
s.i(0,$.ie,$.l)
s.i(0,$.fO,$.l)
s.i(0,$.cn,$.j)
q=$.k
p="Even with the victory of the "+q+" over the villainous "
o=$.y
p=p+o+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.t+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
n=$.ak
s.i(0,new R.ac("Reveal the Tomes",!1,[new U.c(p+n+" will provide insight."),new U.c("Hours of study yield little progress until the "+q+" has a breakthrough regarding symbols on the "+n+". It seems that through analysis of the symbols on the "+n+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.c("The "+q+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+o+"'s library. After countless false starts and empty tombs, not only does the "+q+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.c("The "+q+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+n+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.fc(),!1,!1,new Y.R("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
n=$.k
s.i(0,new R.W("[REDACTED]",!1,[new U.c("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+n+" help? "),new U.c("The "+n+" [REDACTED]s and it actually works! Everyone "+$.P+" in surprise. This might just be crazy enough to work."),new U.c("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.ab("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.y+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.t+"s.")],H.a([],l),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.aP
this.c.i(0,new X.E(i,s,null),n)
n=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.dN,$.j)
t.i(0,$.ie,$.j)
t.i(0,$.fO,$.j)
s=$.k
r="Suddenly the "+s+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
q="The "+s+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
p="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+s+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+s+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
o="Faced with a huge underling that is probably too high a level to fight, the "+s+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+s+" attempts to sneak up on the "+$.y+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+s+" has defeated the major challenge of their land."
t.i(0,new R.W("Walk of Faith",!1,[new U.c(r),new U.c(q),new U.c(p),new U.c(o),new U.ab(m,"The "+s+" is going to have to try again.",k)],H.a([],l),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
l=$.aP
this.c.i(0,new X.E(n,t,null),l)},
ga_:function(){return this.rx},
gJ:function(){return this.x1},
gS:function(){return this.x2},
gao:function(){return this.B},
gI:function(){return this.E}}
E.oI.prototype={
al:function(){return!0},
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Yardstick",H.a([$.dw,$.S,$.t0,$.a6],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("SBURBSim Hacking Guide",H.a([$.aS,$.S,$.lU,$.O],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Body Pillow of JR",H.a([$.Q,$.S,$.iK,$.vk,$.bh],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Nanobots",H.a([$.vv,$.S,$.rH],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.v]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Y,P.T])
t.i(0,$.dd,$.j)
t.i(0,$.ek,$.j)
t.i(0,$.eP,$.j)
t.i(0,$.dM,$.j)
t.i(0,$.eO,$.j)
t.i(0,$.l9,$.j)
t.i(0,$.fO,$.l)
r=$.k
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.t
o=[U.c]
t.i(0,new R.a2("A Complete Waste Of Time",!1,[new U.c(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.c("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.c("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.c("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.w0(),!1,!1,new Y.ew("Rewards/no_reward.png",null),1,null,null),$.w)
r=$.y
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.k
n=q+" tries to manually separate the turtles by catching them with a net and "+$.cu+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.P
t.i(0,new R.W("Stop the Turtles from [Redacted]",!1,[new U.c(p),new U.c(n),new U.c(m),new U.ab(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.Ej(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.w)
q=$.k
t.i(0,new R.a2("Be Spooked By a Wolf",!1,[new U.c("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.c("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.c("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.x(),!1,!1,new Y.ew("Rewards/no_reward.png",null),1,null,null),$.w)
q="A wizened "+$.t+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.k
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.y
t.i(0,new R.W("Be The Illegitimate Player",!1,[new U.c(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.c("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.c("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.ad)
m=$.k
t.i(0,new R.W("Wear the Merch, Be the Rider",!1,[new U.c("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+$.y+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.x(),!1,!1,new Y.a7("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.ad)
m="A wizened "+$.t+" tells the "
r=$.k
t.i(0,new R.ac("Die Ironically, In The Proximity Of Some Horses",!1,[new U.c(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.c("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.x(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.D)
r="A "+$.t+" that is also a SHOGUN minion tells the "
m=$.k
t.i(0,new R.ac("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.c(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.c("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.Em(),!1,!1,new Y.R("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ad)
m=$.k
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.db
t.i(0,new R.ac("Run The Simulations",!1,[new U.c(r),new U.c(q),new U.c(m)],H.a([],o),R.x(),!1,!1,new Y.by("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.D)
n=$.y
m="The "+n+" explains um. What? Where did the "
q=$.k
t.i(0,new R.bD("Waste the Frogs",!1,[new U.c(m+q+" go?"),new U.c("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bY(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ad)
o=$.aP
this.c.i(0,new X.E(s,t,null),o)},
gJ:function(){return this.k1},
gS:function(){return this.k4},
gI:function(){return this.y1}}
M.oP.prototype={
al:function(){return!1},
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Cauldron",H.a([$.vp,$.S,$.a9],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Flying Broom",H.a([$.iH,$.dw,$.S,$.a1,$.a9],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Warped Mirror",H.a([$.rY,$.S,$.a9,$.aq,$.a6],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.v]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.Y,P.T])
t.i(0,$.c8,$.l)
t.i(0,$.fQ,$.l)
t.i(0,$.dc,$.l)
t.i(0,$.cQ,$.l)
t.i(0,$.cS,$.l)
t.i(0,$.ru,$.l)
r=$.y
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.t
q=q+p+" consorts. It's up to the "
o=$.k
n=[U.c]
t.i(0,new R.bD("Brew the Frogs",!1,[new U.c(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.c("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.c("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.bY(),!1,!1,new Y.bF("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ad)
o="Even with the defeat of the "+$.y+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
r=$.t
o=o+r+" settlement, and crops refuse to thrive at "
p=$.b_
o=o+p+" Ranch. The "+r+"s seem to have accepted everything as just how things are, but the "
q=$.k
o=o+q+" isn't going to give up until they show the status quo just how 'quo' it isn't!"
m="Alright, it turns out that through a mixture of Alchemy, game powers and pure elbow grease, the "+q+" has managed to make a river flow backwards.   Now instead of flooding, the valley is draining itself.  Progress!"
r="The "+q+" doesn't feel like KILLING the giant underlings rampaging in the "+r+" settlement. What's the fun in that? They try a variety of techniques until the underlings are as calm and friendly as "+r+"s themselves.   Now they are productive members of society! "
p="The "+q+" twists how plants and soil and growth works until the crops at "+p+" Ranch are finally thriving. With that, they have finally kicked the former status quo to the curb!  "
q=this.db
t.i(0,new R.ac("Twist All The Things",!1,[new U.c(o),new U.c(m),new U.c(r),new U.c(p)],H.a([],n),R.x(),!1,!1,new Y.by("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.w)
q="A Mysterious "+$.t+" approaches the "
p=$.k
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.b_
q=q+r+" was discovered amongst the "+$.y+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.db
t.i(0,new R.ac("Brew The Potion",!1,[new U.c(q),new U.c(m),new U.c(p)],H.a([],n),R.x(),!1,!1,new Y.by("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.w)
r=$.t
p="A young "+r+" approaches the "
m=$.k
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.b_
t.i(0,new R.ac("Train the Apprentice",!1,[new U.c(p+q+"mancer and agrees to train them. "),new U.c("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.ak+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.c("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.P+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.x(),!1,!1,new Y.R(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
n=$.bQ
this.c.i(0,new X.E(s,t,null),n)},
gJ:function(){return this.k1},
gS:function(){return this.k4},
gI:function(){return this.y1}}
F.oQ.prototype={
H:function(){var t,s,r,q
t=Q.F(null,null,A.a4)
s=[G.V]
r=A.i("Make a World Book",H.a([$.O,$.ao,$.aS],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.I(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Quill Pen",H.a([$.bh,$.Q,$.lQ],s),null,!1,"Dead Bird Scribing Tool")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Book On Writing",H.a([$.aS,$.O,$.a0],s),null,!1,"How to do words for unsmarts")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("FLARP Manual",H.a([$.aS,$.O,$.a0],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Script",H.a([$.aS,$.O],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Fancy Pen",H.a([$.C,$.a0,$.lQ,$.ao],s),null,!1,"Ink Bleeding Plastic Finger")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Spiral Bound Notebook",H.a([$.aS,$.O,$.C],s),null,!1,"Spinney Spine Scribing Station")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Half Written Novel",H.a([$.aS,$.O],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.v]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.Y,P.T]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.dN,$.j)
q.i(0,$.cy,$.j)
q.i(0,$.bl,$.l)
q.i(0,$.ba,$.l)
q.i(0,$.fN,$.l)
p=$.k
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.t+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.c]
q.i(0,new R.a2("Stop the Vandals",!1,[new U.c(o),new U.c(n),new U.c(p)],H.a([],l),R.x(),!1,!1,new Y.by("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.w)
m=$.aQ
this.r.i(0,new X.E(s,q,null),m)
m=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.dL,$.l)
s.i(0,$.cF,$.l)
s.i(0,$.cp,$.l)
s.i(0,$.bl,$.l)
q=$.t
p="An Excited "+q+" rushes up to the "
o=$.k
s.i(0,new R.a2("Read the Fan Fiction",!1,[new U.c(p+o+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+o+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.P+"ing so much? "),new U.c("Okay.  The Excited "+q+" has a new version for the "+o+" to review. This time they at least aren't obviously "+q+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.c(" The "+o+" reads the final version of the Excited "+q+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+o+" a gift as thanks! ")],H.a([],l),R.x(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
o=$.aQ
this.r.i(0,new X.E(m,s,null),o)
o=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.cF,$.l)
t.i(0,$.dJ,$.j)
t.i(0,$.cp,$.j)
t.i(0,$.dL,$.l)
t.i(0,$.eP,$.j)
s=$.k
r="The "+s+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
q=$.t
t.i(0,new R.a2("Be the DM",!1,[new U.c(r+q+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+s+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+q+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+q+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.c("The "+s+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+s+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+q+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.c(" The "+s+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+q+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+q+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.c("The "+s+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+q+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.x(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
l=$.aQ
this.r.i(0,new X.E(o,t,null),l)},
gI:function(){return this.cx},
gav:function(){return this.cy},
gaw:function(){return this.db},
gJ:function(){return this.dx},
gaC:function(){return this.dy}}
B.oR.prototype={}
B.oT.prototype={
$aseb:function(){return[T.hP]},
$asde:function(){return[T.hP,P.dG]}}
A.d0.prototype={
jl:function(a,b,c){return c},
fn:function(a,b,c){return c},
kc:function(a,b,c){return c},
jH:function(a,b,c){return c},
u:function(a){var t=H.n(new H.dB(H.hM(this),null))+": "
return t+P.en(this.f,"{","}")},
gI:function(){return this.f},
sdv:function(a,b){return this.a=b}}
A.hS.prototype={
bt:function(){var t,s,r
t=$.$get$cv()
s=P.a3(null,null,null,D.bk)
r=new A.hS(this.Q,null,null,!1,!1,!1,s,0,0,!0,!1)
s.W(0,t)
r.e=!0
return r},
fn:function(a,b,c){var t,s
if(b===$.ci)return c
if(b.d)if(b===$.al||b===$.b3||b===$.u){t=this.Q
s=J.hL(c)
if(J.dX(s.aJ(c,t.a.gas()),1))return 1
return s.aJ(c,t.a.gas())}else return J.eE(c,this.Q.a.gas())
return c}}
A.cP.prototype={
gaq:function(a){if(this.e)this.iY()
return this.x},
u:function(a){return"rgb("+H.n(this.b)+", "+H.n(this.c)+", "+H.n(this.d)+", "+H.n(this.a)+")"},
he:function(a){var t,s,r,q
if(a){t=this.b
if(typeof t!=="number")return t.bm()
s=this.c
if(typeof s!=="number")return s.bm()
r=this.d
if(typeof r!=="number")return r.bm()
q=this.a
if(typeof q!=="number")return H.aK(q)
return(t<<24|s<<16|r<<8|q)>>>0}t=this.b
if(typeof t!=="number")return t.bm()
s=this.c
if(typeof s!=="number")return s.bm()
r=this.d
if(typeof r!=="number")return H.aK(r)
return(t<<16|s<<8|r)>>>0},
hf:function(a){var t=C.b.bN(this.he(!1),16)
return C.d.h2(t,6,"0").toUpperCase()},
kH:function(a){return"#"+this.hf(!1)},
hg:function(){return this.kH(!1)},
iY:function(){var t,s,r,q,p,o,n,m,l
this.e=!1
t=this.b
if(typeof t!=="number")return t.aa()
t/=255
s=this.c
if(typeof s!=="number")return s.aa()
s/=255
r=this.d
if(typeof r!=="number")return r.aa()
r/=255
q=Math.max(Math.max(t,s),r)
p=Math.min(Math.min(t,s),r)
o=q-p
n=q===0?0:o/q
if(q===p)m=0
else{if(q===t){t=s<r?6:0
m=(s-r)/o+t}else m=q===s?(r-t)/o+2:(t-s)/o+4
m/=6}l=H.a([m,n,q],[P.T])
this.f=l[0]
this.r=l[1]
this.x=l[2]},
O:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.cP){t=this.b
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
ga4:function(a){return this.he(!0)},
af:function(a,b){var t,s,r,q,p,o,n,m
t=J.am(b)
if(!!t.$iscP){t=this.b
s=b.b
if(typeof t!=="number")return t.af()
if(typeof s!=="number")return H.aK(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.af()
if(typeof q!=="number")return H.aK(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.af()
if(typeof o!=="number")return H.aK(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.af()
if(typeof m!=="number")return H.aK(m)
return A.ed(t+s,r+q,p+o,n+m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.aa()
s=this.c
if(typeof s!=="number")return s.aa()
r=this.d
if(typeof r!=="number")return r.aa()
q=this.a
if(typeof q!=="number")return q.aa()
return A.kr(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.af()
s=this.c
if(typeof s!=="number")return s.af()
r=this.d
if(typeof r!=="number")return r.af()
return A.ed(t+b,s+b,r+b,this.a)}throw H.m("Cannot add ["+H.n(t.ga6(b))+" "+H.n(b)+"] to a Colour. Only Colour, double and int are valid.")},
aE:function(a,b){var t,s,r,q,p,o,n,m
t=J.am(b)
if(!!t.$iscP){t=this.b
s=b.b
if(typeof t!=="number")return t.aE()
if(typeof s!=="number")return H.aK(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.aE()
if(typeof q!=="number")return H.aK(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.aE()
if(typeof o!=="number")return H.aK(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.aE()
if(typeof m!=="number")return H.aK(m)
return A.ed(t-s,r-q,p-o,n-m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.aa()
s=this.c
if(typeof s!=="number")return s.aa()
r=this.d
if(typeof r!=="number")return r.aa()
q=this.a
if(typeof q!=="number")return q.aa()
return A.kr(t/255-b,s/255-b,r/255-b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.aE()
s=this.c
if(typeof s!=="number")return s.aE()
r=this.d
if(typeof r!=="number")return r.aE()
return A.ed(t-b,s-b,r-b,this.a)}throw H.m("Cannot subtract ["+H.n(t.ga6(b))+" "+H.n(b)+"] from a Colour. Only Colour, double and int are valid.")},
aJ:function(a,b){var t,s,r,q,p,o,n,m
t=J.am(b)
if(!!t.$iscP){t=this.b
if(typeof t!=="number")return t.aa()
s=b.b
if(typeof s!=="number")return s.aa()
r=this.c
if(typeof r!=="number")return r.aa()
q=b.c
if(typeof q!=="number")return q.aa()
p=this.d
if(typeof p!=="number")return p.aa()
o=b.d
if(typeof o!=="number")return o.aa()
n=this.a
if(typeof n!=="number")return n.aa()
m=b.a
if(typeof m!=="number")return m.aa()
return A.kr(t/255*(s/255),r/255*(q/255),p/255*(o/255),n/255*(m/255))}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.aa()
s=this.c
if(typeof s!=="number")return s.aa()
r=this.d
if(typeof r!=="number")return r.aa()
q=this.a
if(typeof q!=="number")return q.aa()
return A.kr(t/255*b,s/255*b,r/255*b,q/255)}throw H.m("Cannot multiply a Colour by ["+H.n(t.ga6(b))+" "+H.n(b)+"]. Only Colour, double and int are valid.")},
m:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.m("Colour index out of range: "+H.n(b))},
i:function(a,b,c){var t,s
t=J.dn(b)
if(t.a0(b,0)||t.b8(b,3))throw H.m("Colour index out of range: "+H.n(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.O(b,0)){this.b=C.b.ac(c,0,255)
this.e=!0
this.y=!0}else if(t.O(b,1)){this.c=C.b.ac(c,0,255)
this.e=!0
this.y=!0}else if(t.O(b,2)){this.d=C.b.ac(c,0,255)
this.e=!0
this.y=!0}else this.a=C.b.ac(c,0,255)
else if(t.O(b,0)){this.b=C.b.ac(J.jP(J.eE(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.O(b,1)){this.c=C.b.ac(J.jP(J.eE(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.hL(c)
if(t.O(b,2)){this.d=C.b.ac(J.jP(s.aJ(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.b.ac(J.jP(s.aJ(c,255)),0,255)}},
i_:function(a,b,c,d){this.b=C.e.ac(C.e.ac(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.e.ac(C.e.ac(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.e.ac(C.e.ac(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.e.ac(J.r0(d,0,255),0,255)}}
A.qs.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.v]}}}
Z.cT.prototype={
u:function(a){return this.b},
i0:function(a,b,c,d){var t
if(this.a==null)this.a=H.a([],[L.cZ])
t=this.c
if(typeof t!=="number")return H.aK(t)
this.x=50*t
if(t>=3)this.x=1000*t-2},
gM:function(a){return this.b}}
Z.ls.prototype={}
Z.Z.prototype={
u:function(a){var t,s
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
F.f3.prototype={
u:function(a){return this.b}}
F.f4.prototype={
ce:function(a,b){return"("+this.b+")["+H.n(C.a.gc4(a.b.split(".")))+"]: "+H.n(b)},
dZ:function(a,b){F.iR(C.v).$1(this.ce(C.v,b))},
gM:function(a){return this.b}}
O.qS.prototype={
$1:function(a){return H.n(a.cK(1))+" = "+H.n(a.cK(2))+C.d.aJ("../",this.a)},
$S:function(){return{func:1,args:[P.f5]}}}
O.qT.prototype={
$1:function(a){return O.Gu()},
$S:function(){return{func:1,args:[W.U]}}}
R.fS.prototype={}
A.mW.prototype={
m:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.aj(0,b)?t.m(0,b):$.$get$th()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.aj(0,b)?t.m(0,b):$.$get$th()}throw H.m(P.fC(b,"'name' should be a String name or int id only",null))},
gP:function(a){var t=this.a
t=t.gay(t)
return new H.iS(null,J.bC(t.a),t.b,[H.I(t,0),H.I(t,1)])},
j:function(a,b,c,d){var t,s
t=this.a
if(t.aj(0,b))this.an(0,b)
s=this.iN()
if(typeof s!=="number")return s.bA()
if(s>=256)throw H.m(P.fC(s,"Palette colour ids must be in the range 0-255",null))
t.i(0,b,c)
this.b.i(0,s,c)
this.c.i(0,b,s)
this.d.i(0,s,b)},
an:function(a,b){var t,s,r
t=this.a
if(!t.aj(0,b))return
s=this.c
r=s.m(0,b)
t.an(0,b)
this.b.an(0,r)
s.an(0,b)
this.d.an(0,r)},
iN:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.aj(0,s))return s;++s}}}
A.j0.prototype={
$asz:function(){return[A.cP]},
$isz:1}
Q.ct.prototype={
d1:function(){return new E.j7(this,P.cD(D.bk,P.T),H.a([],[A.d0]))},
cO:function(){var t,s
t=this.b6
if(t!=null){s=this.c
s=s==null||s.d==null||s.e==null}else s=!0
if(s)return
if(J.a5(J.d7(t),this.c.d.dy))this.b6=this.c.d
else if(J.a5(J.d7(this.b6),this.c.e.dy))this.b6=this.c.e},
cG:function(a){var t,s
t=this.r1?"Doomed ":""
s=this.c0
if(s>3)t+="Severely Grim Dark "
else if(s>1)t+="Mildly Grim Dark "
if(this.c_===4)t+="Wasted "
t=t+H.n(this.ai)+" of "+H.n(this.a8)
return t},
de:function(){return this.a8.fJ()+(H.n(this.ai)+" of "+H.n(this.a8))+"</font> (<font color = '"+H.n(this.hm())+"'>"+H.n(this.bv)+"</font>)"},
hn:function(){var t,s,r,q,p,o,n,m,l
if(T.yz())return"<span>"
t="<span class = 'tooltip'><span class='tooltiptext'><table>"+("<tr><td class = 'toolTipSection'>"+H.n(this.bv)+"<hr>")+("Class: "+H.n(J.d7(this.ai))+"<Br>")+("Aspect: "+H.n(J.d7(this.a8))+"<Br>")
s=this.bH
t+="Land: "+H.n(s!=null?s.dy:"DESTROYED.")+"<Br>"
s=this.bH
t=t+("Denizen: "+(s!=null?s.fy.c:"NONE")+"<Br>")+("LandLevel: "+this.cu+"<Br>")+("Gnosis: "+this.c_+"<Br>")
s=this.R
if(s!=null)t+="Sprite: "+s.d
t=t+("<br><Br>Prophecy Status: "+this.b.b)+("<br><br>Flipping out over: "+H.n(this.aW))
r=D.F6()
t+="</td><td class = 'toolTipSection'>Stats<hr>"
for(s=J.bC(r.a),q=new H.dV(s,r.b,[H.I(r,0)]);q.w();){p=s.gG()
o=H.n(p)+": "
n=this.a$.aH(p)
t+=o+C.e.a5(n)+"<br>"}t=t+"</td><td class = 'toolTipSection' rowspan='2'>Sylladex<hr>"+(this.a.gfL()+", Rank: "+H.n(this.a.gas())+"<br>")
for(s=this.y2.a,s=new J.dF(s,s.length,0,null,[H.I(s,0)]);s.w();)t+=s.d.gfL()+"<br>"
t+="</td><td class = 'toolTipSection' rowspan='2'>Buffs<hr>"
for(s=this.a$.b,q=s.length,m=0;m<s.length;s.length===q||(0,H.bp)(s),++m)t+=s[m].u(0)+"<br>"
t+="</td></tr><tr><td class = 'toolTipSection'>Fraymotifs<hr>"
for(s=this.fy,q=s.length,m=0;m<s.length;s.length===q||(0,H.bp)(s),++m)t+=H.n(J.d7(s[m]))+"<br>"
t+="</td><td class = 'toolTipSection'>Relationships<hr>"
for(s=this.id,q=s.length,m=0;m<s.length;s.length===q||(0,H.bp)(s),++m){l=s[m]
t+=" "+l.fp()+"("+C.e.a5(l.b)+") "+H.n(C.r.cG(l.c))+"<br>"}return t+"</td></tr></table></span>"},
ji:function(){var t,s,r,q,p,o
if(this.fy.length!==0||!this.aX)return
t=10-C.a.be($.$get$jF(),this.a2)
s=H.a([],[Z.cT])
r=Z.aE("Telekinesis",1,null,"")
r.r.push(new Z.Z($.u,2,!0,0,1,2,3,""))
r.e=" Large objects begin pelting the ENEMY. "
s.push(r)
r=Z.aE("Pyrokinesis",1,null,"")
r.r.push(new Z.Z($.u,2,!0,0,1,2,3,""))
r.e=" Who knew shaving cream was so flammable? "
s.push(r)
r=Z.aE("Aquakinesis",1,null,"")
r.r.push(new Z.Z($.u,2,!0,0,1,2,3,""))
r.e=" A deluge begins damaging the ENEMY. "
s.push(r)
r=Z.aE("Electrokinesis",1,null,"")
r.r.push(new Z.Z($.u,2,!0,0,1,2,3,""))
r.e=" An electric pulse begins damaging the ENEMY. "
s.push(r)
r=Z.aE("Terakinesis",1,null,"")
r.r.push(new Z.Z($.u,2,!0,0,1,2,3,""))
r.e=" The very ground begins damaging the ENEMY. "
s.push(r)
r=Z.aE("Vitaekinesis",1,null,"")
r.r.push(new Z.Z($.u,2,!0,0,1,2,3,""))
r.e=" The ENEMY's own body is turned against them as they begin punching their own face. "
s.push(r)
r=Z.aE("Fungikinesis",1,null,"")
r.r.push(new Z.Z($.u,2,!0,0,1,2,3,""))
r.e=" A confusing array of mushrooms begins damaging the ENEMY. "
s.push(r)
r=Z.aE("Mind Control",1,null,"")
q=r.r
q.push(new Z.Z($.bu,3,!0,0,1,2,3,""))
q.push(new Z.Z($.bu,3,!1,0,1,2,3,""))
r.e=" All enemies start damaging themselves. It's kind of embarassing how easy this is.  "
s.push(r)
r=Z.aE("Optic Blast",1,null,"")
r.r.push(new Z.Z($.u,2,!0,0,1,2,3,""))
r.e=" Appropriately colored eye beams pierce the ENEMY. "
s.push(r)
r=Z.aE("Ghost Communing",1,null,"")
q=r.r
q.push(new Z.Z($.aY,3,!0,0,1,2,3,""))
q.push(new Z.Z($.aY,3,!1,0,1,2,3,""))
r.e=" The souls of the dead start hassling all enemies. "
s.push(r)
r=Z.aE("Animal Communing",1,null,"")
q=r.r
q.push(new Z.Z($.aY,3,!0,0,1,2,3,""))
q.push(new Z.Z($.aY,3,!1,0,1,2,3,""))
r.e=" Local animal equivalents start hassling all enemies. "
s.push(r)
for(p=0;p<s.length;++p)if(this.c.A.a.D()*40<t){q=this.fy
if(p>=s.length)return H.J(s,p)
q.push(s[p])}if(J.a5(this.a2,"#631db4")){r=Z.aE("Chucklevoodoos",1,null,"")
q=r.r
q.push(new Z.Z($.aY,3,!1,0,1,2,3,""))
q.push(new Z.Z($.aY,3,!0,0,1,2,3,""))
r.e=" Oh god oh no no no no no no no no. The enemies are no longer doing okay, psychologically speaking. "
this.fy.push(r)}else if(J.a5(this.a2,"#658200")){r=Z.aE("Limeade Refreshment",1,null,"")
q=r.r
q.push(new Z.Z($.aY,1,!1,0,1,2,3,""))
q.push(new Z.Z($.aY,1,!0,0,1,2,3,""))
r.e=" All allies just settle their shit for a little while. Cool it. "
this.fy.push(r)}else if(J.a5(this.a2,"#ffc3df")){r=Z.aE("'<font color='pink'>"+H.n(this.bv)+" and the Power of Looove~~~~~<3<3<3</font>'",1,null,"")
q=r.r
q.push(new Z.Z($.cc,3,!1,0,1,2,3,""))
q.push(new Z.Z($.cc,3,!0,0,1,2,3,""))
q=this.hn()+this.a8.fJ()+this.cG(0)+" ("
o=$.b3
o=this.a$.aH(o)
q=q+C.e.a5(o)+"hp, "
o=$.u
o=this.a$.aH(o)
r.e=" You are pretty sure this is not a real type of Troll Psionic.  It heals everybody in a bullshit parade of sparkles, and heart effects despite your disbelief. Everybody is also SUPER MEGA ULTRA IN LOVE with each other now, but ESPECIALLY in love with "+(q+C.e.a5(o)+" power)</font></span>")+". "
this.fy.push(r)}},
aG:function(a){var t,s
t=Q.vR(null,null,null,null,null,null)
this.hO(t)
t.x1=this.x1
t.C=this.C
t.K=this.K
s=this.R
if(s!=null)t.R=s.aG(0)
t.A=!0
t.aI=!0
s=this.b6
t.b6=s
if(s!=null)t.cO()
t.aW=this.aW
t.ak=this.ak
t.bD=this.bD
t.dx=this.dx
t.bE=this.bE
t.bW=!1
t.bX=!1
t.bF=this.bF
t.bY=!1
t.bG=this.bG
t.ai=this.ai
t.d3=this.d3
t.d4=this.d4
t.e_=!1
t.d5=this.d5
t.d6=this.d6
t.d7=this.d7
t.a8=this.a8
t.bH=this.bH
t.aN=this.aN
t.aO=this.aO
t.bv=this.bv
t.bI=this.bI
s=this.b6
t.b6=s
if(s!=null)t.cO()
t.e0=!1
t.cq=this.cq
t.d8=this.d8
t.e1=!1
t.d9=this.d9
t.cr=this.cr
t.bJ=this.bJ
t.e2=!0
t.aX=this.aX
t.a2=this.a2
t.cs=this.cs
t.bZ=this.bZ
t.bK=this.bK
t.bw=this.bw
t.ct=this.ct
t.e3=!0
t.e4=!1
t.e5=!1
t.e6=!1
t.da=this.da
t.c_=this.c_
t.c0=this.c0
t.e7=!1
t.cu=this.cu
t.e8=!1
t.e9=!1
t.ea=!1
t.c=this.c
return t},
hm:function(){if(this.aX)return this.a2
else return this.a8.ga_().m(0,$.at).hg()},
jw:function(){var t,s
if(this.c.dn()==="Human"){this.bJ=this.c.A.v($.$get$u0())
return}if(this.c.dn()!=="Troll")t=this.c.dn()==="Mixed"&&this.c.A.a.D()>0.5
else t=!0
if(t){this.aX=!0
this.bJ="#000000"
if(!J.a5(this.a8,$.uq))this.a2=this.c.A.v($.$get$jF())
this.ji()
t=J.a5(this.a2,"#610061")||J.a5(this.a2,"#99004d")||J.a5(this.a2,"#631db4")
s=this.c
if(t){t=s.A.v($.tl)
this.bK=t
J.fy(t,this.c)}else{t=s.A.v($.tk)
this.bK=t
J.fy(t,this.c)}t=this.bK
this.bI=t
J.fy(t,this.c)}else this.bJ=this.c.A.v($.$get$u0())},
jX:function(){var t,s,r,q
if(this.aX&&J.a5(this.a2,"#99004d"))for(t=0;s=this.id,t<s.length;++t){r=s[t]
if(this.aX)if(J.a5(this.a2,"#99004d"))if(r.geu(r).gkY())r.geu(r).gkQ()}s=this.c0
if(s>1)for(q=0;s=this.id,q<s.length;++q){r=s[q]
r.b=0
s=r.r
r.d=s
r.f=s}},
u:function(a){return H.jM(H.n(this.ai)+H.n(this.a8),P.nc("'",!0,!0),"")},
jV:function(){var t,s,r,q
for(t=0;t<this.k2.length;++t){s=this.ai.al()
r=this.k2
q=r.length
if(s){if(t>=q)return H.J(r,t)
this.dg(10,r[t])}else{if(t>=q)return H.J(r,t)
this.dg(-10,r[t])}}},
dg:function(a,b){var t,s,r,q
if(b==null)return
if(J.a5(b.gcb(),$.cc))for(t=b.a,s=0;r=this.id,q=r.length,s<q;++s){r=r[s]
r.b=r.b+a/q*b.b*t.gft()}else{t=b.a
r=J.am(t)
if(r.O(t,$.al))if(r.O(t,$.al)){r=$.al
r=this.a$.aH(r)
r=r>1}else r=!1
else r=!0
if(r){r=b.b
q=t.gft()
this.a$.cc(t,a*r*q)}}},
jW:function(){var t,s,r,q
t=this.aN.a.gI()
s=this.aO.a.gI()
for(r=t.length,q=0;q<r;++q)this.dg(10,t[q])
for(r=s.length,q=0;q<r;++q)this.dg(10,s[q])},
i5:function(a,b,c,d,e,f){var t
this.b6=e
if(e!=null)this.cO()
this.d="player_"+H.n(this.k4)
t=new A.od(null,this)
t.a=H.a([],[A.a4])
this.y2=t},
gca:function(){return this.t},
gci:function(){return this.a8},
sca:function(a){return this.t=a}}
D.n8.prototype={
k7:function(a){var t,s,r
t=[["\\byear\\b","sweep"],["SBURB","SGRUB"],["\\bmonth\\b","perigee"],["\\brefrigerator\\b","\\bthermal hull\\b"],["\\bbathtub\\b","ablution trap"],["\\bears\\b","hear ducts "],["\\bheart\\b","pump biscuit"],["\\bbrain\\b","sponge"],["\\brap\\b","slam poetry"],["\\bnose\\b","sniffnode"],["\\bmouth\\b","squawk gaper"],["\\bbed\\b","cocoon"],["\\btea\\b","scalding leaf fluid"],["\\bworm","dirt noodle"],["\\bbean","fart nibblet"],["\\btree\\b","frond nub"],["\\bleg\\b","frond"],["\\bgold star\\b","glitter biscuit"],["\\bborn\\b","hatched"],["\\btoilet\\b","load gaper"],["\\bfoot\\b","prong"],["\\bspine\\b","posture pole"],["vampire","rainbow drinker"],["\\btits\\b","rumble spheres"],["\\bbaby\\b","wiggler"],["eye","gander bulb"]]
s=15-C.a.be($.$get$jF(),a.a2)
for(r=0;r<26;++r)if(this.x.a.D()*15<s)this.b.push(t[r])},
k9:function(a){var t,s,r
this.f=this.x.Z(6)+0
this.c=this.x.Z(6)+0
this.a=[]
this.b=[]
if(this.f===2&&this.x.a.D()>0.2)this.f=this.x.Z(2)+0
if(this.x.a.D()>0.95){t=this.x.v($.$get$u8())
this.d=t
if(J.cl(t)===1&&this.r<8){t=this.d
this.d=D.xd(t,J.c7(t,0),this.r)}}if(this.x.a.D()>0.95){if(!J.a5(this.d,"")&&this.x.a.D()>0.7){t=this.d
this.e=t}else{t=this.x.v($.$get$u8())
this.e=t}if(J.cl(t)===1&&this.r<8){t=this.e
this.e=D.xd(t,J.c7(t,0),this.r)}}if(J.a5(a.a2,"#99004d")||J.a5(a.a2,"#610061"))for(s=0;s<3;++s)this.b.push(this.x.v($.$get$tV()))
r=this.x.a.D()>0.5?this.x.Z(11)+0:0
if(r<0)r=0
for(s=0;s<r;++s){this.b.push(D.G4(this.x))
if(J.a5(a.a2,"#99004d")||J.a5(a.a2,"#610061"))this.b.push(this.x.v($.$get$tV()))}this.b.push(this.x.v($.$get$uc()))
this.b.push(this.x.v($.$get$tW()))
this.b.push(this.x.v($.$get$tZ()))
this.b.push(this.x.v($.$get$u4()))
this.b.push(this.x.v($.$get$u_()))
this.b.push(this.x.v($.$get$tU()))
this.b.push(this.x.v($.$get$tT()))
this.b.push(this.x.v($.$get$ud()))
this.b.push(this.x.v($.$get$u7()))
this.a.push(this.x.v($.$get$ua()))
t=this.r
if(t===1){if(this.x.a.D()>0.5)this.a.push(["I","1"])
if(this.x.a.D()>0.5)this.a.push(["i","1"])
if(this.x.a.D()>0.5)this.a.push(["l","1"])
if(this.x.a.D()>0.5)this.a.push(["L","1"])
if(this.x.a.D()>0.5)this.a.push(["won","1"])}else if(t===2){if(this.x.a.D()>0.5)this.a.push(["S","2"])
if(this.x.a.D()>0.5)this.a.push(["s","2"])
if(this.x.a.D()>0.5)this.a.push(["Z","2"])
if(this.x.a.D()>0.5)this.a.push(["z","2"])
if(this.x.a.D()>0.5)this.a.push(["too","2"])
if(this.x.a.D()>0.5)this.a.push(["to","2"])
if(this.x.a.D()>0.5)this.a.push(["two","2"])}else if(t===3){if(this.x.a.D()>0.5)this.a.push(["E","3"])
if(this.x.a.D()>0.5)this.a.push(["e","3"])}else if(t===4){if(this.x.a.D()>0.5)this.a.push(["A","4"])
if(this.x.a.D()>0.5)this.a.push(["a","4"])
if(this.x.a.D()>0.5)this.a.push(["for","4"])
if(this.x.a.D()>0.5)this.a.push(["four","4"])}else if(t===5){if(this.x.a.D()>0.5)this.a.push(["S","5"])
if(this.x.a.D()>0.5)this.a.push(["s","5"])
if(this.x.a.D()>0.5)this.a.push(["Z","5"])
if(this.x.a.D()>0.5)this.a.push(["J","5"])
if(this.x.a.D()>0.5)this.a.push(["z","5"])}else if(t===6){if(this.x.a.D()>0.5)this.a.push(["G","6"])}else if(t===7){if(this.x.a.D()>0.5)this.a.push(["T","7"])
if(this.x.a.D()>0.5)this.a.push(["t","7"])}else if(t===8){if(this.x.a.D()>0.5)this.a.push(["ate","8"])
if(this.x.a.D()>0.5)this.a.push(["eight","8"])
if(this.x.a.D()>0.5)this.a.push(["EIGHT","8"])
if(this.x.a.D()>0.5)this.a.push(["B","8"])}else if(t===9){if(this.x.a.D()>0.5)this.a.push(["g","9"])
if(this.x.a.D()>0.5)this.a.push(["nine","9"])
if(this.x.a.D()>0.5)this.a.push(["NINE","9"])}else if(t===10){if(this.x.a.D()>0.5)this.a.push(["ten","10"])
if(this.x.a.D()>0.5)this.a.push(["TEN","10"])
if(this.x.a.D()>0.5)this.a.push(["lo","10"])}else if(t===11){if(this.x.a.D()>0.5)this.a.push(["ll","11"])
if(this.x.a.D()>0.5)this.a.push(["II","11"])
if(this.x.a.D()>0.5)this.a.push(["ii","11"])}else if(t===12){if(this.x.a.D()>0.5)this.a.push(["is","12"])
if(this.x.a.D()>0.5)this.a.push(["IS","12"])
if(this.x.a.D()>0.5)this.a.push(["iz","12"])
if(this.x.a.D()>0.5)this.a.push(["IZ","12"])}else if(t===0){if(this.x.a.D()>0.5)this.a.push(["o","0"])
if(this.x.a.D()>0.5)this.a.push(["O","0"])
if(this.x.a.D()>0.5)this.a.push(["oh","0"])
if(this.x.a.D()>0.5)this.a.push(["OH","0"])}this.k7(a)},
k8:function(a){var t,s
this.f=this.x.Z(3)+0
this.c=this.x.Z(4)+0
this.a=[]
this.b=[]
if(this.f===2&&this.x.a.D()>0.2)this.f=this.x.Z(2)+0
t=this.x.a.D()>0.5?this.x.Z(11)+0:0
if(t<0)t=0
for(s=0;s<t;++s)this.b.push(this.x.v($.$get$tR()))
this.b.push(this.x.v($.$get$uc()))
this.b.push(this.x.v($.$get$tW()))
this.b.push(this.x.v($.$get$tZ()))
this.b.push(this.x.v($.$get$u4()))
this.b.push(this.x.v($.$get$u_()))
this.b.push(this.x.v($.$get$tU()))
this.b.push(this.x.v($.$get$tT()))
this.b.push(this.x.v($.$get$ud()))
this.b.push(this.x.v($.$get$u7()))
this.b.push(this.x.v($.$get$x_()))
this.a.push(this.x.v($.$get$ua()))},
i6:function(a){this.r=this.x.Z(12)}}
A.bI.prototype={
Z:function(a){if(a===0)return 0
if(typeof a!=="number")return a.a0()
if(a<0)return-this.f7(-a)
return this.f7(a)},
kd:function(){return this.Z(4294967295)},
f7:function(a){var t,s
t=this.a
if(a>4294967295){s=t.D()
this.b=C.e.a5(s*4294967295)
return C.e.bd(s*a)}else{s=t.Z(a)
this.b=s
return s}},
aA:function(a){var t=a==null
this.a=t?C.A:P.Fq(a)
if(!t)this.b=J.cM(a,1)},
kj:function(a,b){var t=J.bo(a)
if(t.gX(a)===!0)return
if(!!t.$isbK)return a.eA(this.a.D())
return t.Y(a,this.Z(t.gn(a)))},
v:function(a){return this.kj(a,!0)}}
Y.oS.prototype={
$1:function(a){var t,s,r,q,p
if(J.a5(a," "))return a
for(t=Y.tE(16),s=0;s<t;++s){r=Y.tE(3)
q=$.$get$tD().m(0,r)
p=Y.tE($.$get$tD().m(0,r).length)
if(p>>>0!==p||p>=q.length)return H.J(q,p)
a=J.cM(a,q[p])}return a},
$S:function(){return{func:1,args:[,]}}}
N.cH.prototype={
geu:function(a){var t,s
if($.tS.gfY().gkZ()){$.tS.gfY().gjT()
t=!0}else t=!1
if(t){s=$.tS.gfY().gjT()
return s}return this.c},
jj:function(a){var t=this.d
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
fp:function(){return this.jj(null)},
u:function(a){return" "+this.fp()+"("+C.e.a5(this.b)+") "+H.n(C.r.cG(this.c))},
fv:function(){var t=this.b
if(t>20)return this.y
else if(t<-20)return this.Q
else if(t>0)return this.x
else if(t===0)return this.r
else return this.z},
kJ:function(a){var t,s
t=this.d
if(t===this.ch||t===this.db||t===this.cx||t===this.cy)return t
if(t===""){this.e=!1
t=this.fv()
this.d=t
this.f=t
if(t===this.y||t===this.Q){this.e=!0
this.f=this.x}return t}if(J.xJ(this.a).A.a.D()>0.25){this.f=this.d
this.d=this.fv()}t=this.f
s=this.d
if(t!==s)this.e=!0
else this.e=!1
return s},
gaq:function(a){return this.b},
sdv:function(a,b){return this.a=b}}
L.hV.prototype={
u:function(a){return this.b}}
L.dR.prototype={
aQ:function(){var t,s,r,q,p,o
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
p=this.A.Z(2)+3
for(o=0;o<p;++o)q.push(this.A.v(s))
return new R.ff("Wander The Battlefield",!0,q,H.a([],t),R.x(),!1,!1,new Y.kg(null,"Rewards/battlefield.png","Rewards/no_reward.png",null),1,null,null)},
b_:function(){var t,s,r,q,p,o
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
p=this.A.Z(2)+3
for(o=0;o<p;++o)q.push(this.A.v(s))
return new R.dy("Do Prospit Bullshit",!0,q,H.a([],t),R.tq(),!1,!1,new Y.ef(null,"Prospit.png","Rewards/no_reward.png",null),1,null,null)},
aR:function(){var t,s,r,q,p,o
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
p=this.A.Z(2)+3
for(o=0;o<p;++o)q.push(this.A.v(s))
return new R.dy("Do Derse Bullshit",!0,q,H.a([],t),R.tq(),!1,!1,new Y.ef(null,"Prospit.png","Rewards/no_reward.png",null),1,null,null)},
c7:function(){var t,s,r,q,p
t=[U.c]
s=H.a([],t)
s.push(new U.c("The "+$.k+" writhes in terror and pain. Why do players without dreamselves dream in the Furthest Ring with the Horror Terrors? "))
s.push(new U.c("The "+$.k+" vows to never sleep again.  Why do players without dreamselves dream in the Furthest Ring with the Horror Terrors? "))
s.push(new U.c("The "+$.k+" is reliving embarassing childhood memories for the amusement of the Horror Terrors.  Why do players without dreamselves dream in the Furthest Ring with the Horror Terrors?"))
r=H.a([],t)
q=this.A.Z(2)+3
for(p=0;p<q;++p)r.push(this.A.v(s))
return new R.dy("Writhe In Pain",!0,r,H.a([],t),R.El(),!1,!1,new Y.ef(null,"Prospit.png","Rewards/no_reward.png",null),1,null,null)},
c5:function(){var t,s,r,q,p
t=[U.c]
s=H.a([],t)
s.push(new U.c("The "+$.k+" has a relatively sedate time of reliving past memories and chatting up inconsequential ghosts. Good thing the dream bubbles were set up, huh?"))
s.push(new U.c("The "+$.k+" enjoys a relaxing memory of their home planet while dreaming in the bubbles. "))
s.push(new U.c("The "+$.k+"  tries not to give into existential horror as they realize just how MANY versions of their dead friends exist."))
r=H.a([],t)
q=this.A.Z(2)+3
for(p=0;p<q;++p)r.push(this.A.v(s))
return new R.dy("Do Dream Bubble Bullshit",!0,r,H.a([],t),R.Ek(),!1,!1,new Y.ef(null,"Prospit.png","Rewards/no_reward.png",null),1,null,null)},
hA:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.f
P.cE("moons set up "+H.n(t))
s=X.E
r=P.T
q=[s,r]
p=new H.q(0,null,null,null,null,null,0,q)
o=P.v
n=[o]
m=H.a(["Battlefield"],n)
H.a([],n)
l=N.Y
r=[l,r]
k=new H.q(0,null,null,null,null,null,0,r)
k.i(0,$.eT,$.j)
k.i(0,$.dr,$.l)
k.i(0,$.ej,$.D)
k.i(0,$.db,$.l)
k.i(0,$.eh,$.l)
k.i(0,$.rw,$.j)
k.i(0,$.rv,$.j)
k.i(0,this.aQ(),$.D)
k.i(0,this.aQ(),$.D)
k.i(0,this.aQ(),$.D)
k.i(0,this.aQ(),$.D)
k.i(0,this.aQ(),$.D)
k.i(0,this.aQ(),$.D)
k.i(0,this.aQ(),$.D)
k.i(0,this.aQ(),$.D)
k.i(0,this.aQ(),$.D)
k.i(0,this.aQ(),$.D)
k.i(0,this.aQ(),$.D)
k.i(0,this.aQ(),$.D)
k.i(0,this.aQ(),$.D)
p.i(0,new X.E(m,k,null),$.aP)
o=new L.kf($.$get$uY(),Q.F(null,null,R.ff),!1,null,null,null,null,null,null,null,null,!1,!1,!1,null,null,null,null,null,!1,null,null,$.$get$ii(),null,null,null,Q.F(null,null,s),Q.F(null,null,l),P.cD(o,[Q.bK,N.Y]))
o.dy="BattleField"
o.c$=this
o.e$=Q.tB(p,!0,null,s)
o.eo(this.A)
o.b=o.az($.$get$i8())
o.c=o.az($.$get$i9())
o.d=o.az($.$get$i7())
s=o.az($.$get$rp())
o.k1=Q.dU(s,!1,!0,null,H.ap(s,"cd",0))
o.en()
this.c=o
j=new H.q(0,null,null,null,null,null,0,q)
s=H.a(["Prospit"],n)
H.a([],n)
o=new H.q(0,null,null,null,null,null,0,r)
o.i(0,$.la,$.l)
o.i(0,$.cC,$.D)
o.i(0,$.cy,$.l)
o.i(0,$.ba,$.l)
o.i(0,$.cp,$.D)
o.i(0,$.rw,$.j)
o.i(0,this.b_(),$.w)
o.i(0,this.b_(),$.w)
o.i(0,this.b_(),$.w)
o.i(0,this.b_(),$.w)
o.i(0,this.b_(),$.w)
o.i(0,this.b_(),$.w)
o.i(0,this.b_(),$.w)
o.i(0,this.b_(),$.w)
o.i(0,this.b_(),$.w)
o.i(0,this.b_(),$.w)
o.i(0,this.b_(),$.w)
o.i(0,this.b_(),$.w)
o.i(0,this.c7(),$.ad)
o.i(0,this.c7(),$.ad)
o.i(0,this.c7(),$.ad)
o.i(0,this.c5(),$.ad)
o.i(0,this.c5(),$.ad)
o.i(0,this.c5(),$.ad)
i=new H.q(0,null,null,null,null,null,0,q)
q=H.a(["Prospit"],n)
H.a([],n)
r=new H.q(0,null,null,null,null,null,0,r)
r.i(0,$.e3,$.l)
r.i(0,$.rB,$.l)
r.i(0,$.cC,$.D)
r.i(0,$.db,$.l)
r.i(0,$.c8,$.D)
r.i(0,$.cn,$.l)
r.i(0,$.rv,$.j)
r.i(0,this.aR(),$.D)
r.i(0,this.aR(),$.D)
r.i(0,this.aR(),$.D)
r.i(0,this.aR(),$.D)
r.i(0,this.aR(),$.D)
r.i(0,this.aR(),$.D)
r.i(0,this.aR(),$.D)
r.i(0,this.aR(),$.D)
r.i(0,this.aR(),$.D)
r.i(0,this.aR(),$.D)
r.i(0,this.aR(),$.D)
r.i(0,this.aR(),$.D)
r.i(0,this.aR(),$.D)
r.i(0,this.c7(),$.ad)
r.i(0,this.c7(),$.ad)
r.i(0,this.c7(),$.ad)
r.i(0,this.c5(),$.ad)
r.i(0,this.c5(),$.ad)
r.i(0,this.c5(),$.ad)
n=$.k
r.i(0,new R.dy("Be a Legitimate Business Player",!0,[new U.c("The "+n+" learns of a lucrative business opportunity. The BLACK QUEEN has all sorts of contraband laws. Everything from frogs to ice cream is so totally illegal. But that doesn't stop the right sort of Dersite from getting cravings, if you understand me. The "+n+" looks like they can be discreet. "),new U.c("The "+n+" runs afoul of the Authority Regulators. Through a frankly preposterous amount of running, parkour and misdirection, they finally escape, only to remember that they could have just flown away.  Dream selves sure are dumb!  "),new U.c("The "+n+" has decided to retire from a life of...legitimate business, highly lucrative though it was.  They use their earnings to set up a simple and refined Suit Shop, catering to only the most exclusive clientel. ")],H.a([],[U.c]),R.tq(),!1,!1,new Y.ef(null,"Prospit.png","Rewards/no_reward.png",null),1,null,null),$.D)
j.i(0,new X.E(s,o,null),$.aP)
i.i(0,new X.E(q,r,null),$.aP)
this.d=R.vO("Prospit",j,this,$.us,t,$.$get$w4())
this.e=R.vO("Derse",i,this,$.uu,J.cM(t,1),$.$get$w3())
for(t=this.r,h=0;!1;++h){if(h>=0)return H.J(t,h)
t[h].cO()}},
ky:function(){var t,s,r
t=this.db
if(t===C.C){t=T.dA
this.ar=P.bf(T.w8(),!0,t)
this.b5=P.bf(T.w8(),!0,t)
this.aI=P.bf(L.yl(),!0,L.cZ)}else{s=T.dA
r=L.cZ
if(t===C.T){this.ar=P.bf(T.w9(),!0,s)
this.b5=P.bf(T.w9(),!0,s)
this.aI=P.bf(L.ym(),!0,r)}else{this.ar=P.bf(T.tu(),!0,s)
this.b5=P.bf(T.tu(),!0,s)
this.aI=P.bf(L.uv(),!0,r)}}this.aW=H.a([$.ut,$.k3],[L.cZ])},
dn:function(){var t=this.r2
if(t>0.6)return"Human"
else if(t>0.3)return"Troll"
return"Mixed"},
hz:function(){this.R.hJ()
this.R.hH()
this.R.hF()
this.R.hD()},
u:function(a){return J.cm(this.f)},
gI:function(){return this.E}}
O.j4.prototype={}
D.nS.prototype={
$1:function(a){return a.gkl()},
$S:function(){return{func:1,args:[D.bk]}}}
D.nT.prototype={
$1:function(a){return a.ghN()},
$S:function(){return{func:1,args:[D.bk]}}}
D.bk.prototype={
d2:function(a,b){return b*this.r},
u:function(a){return this.a},
gM:function(a){return this.a},
gkl:function(){return this.d},
ghN:function(){return this.e},
gft:function(){return this.x},
gkb:function(){return this.y}}
D.jp.prototype={
d2:function(a,b){var t=a.aH($.tx)
return this.eO(a,b)*(1+this.cx*t)}}
D.nd.prototype={
d2:function(a,b){var t
if(!!a.$isj7){t=a.c.id
if(t.length===0)return 0
return J.eE(new H.dh(t,new D.ne(),[H.I(t,0),null]).kq(0,new D.nf()),this.r)}return this.eO(a,b)}}
D.ne.prototype={
$1:function(a){return J.cN(a)},
$S:function(){return{func:1,args:[N.cH]}}}
D.nf.prototype={
$2:function(a,b){return J.cM(a,b)},
$S:function(){return{func:1,args:[P.cj,P.cj]}}}
E.cI.prototype={
js:function(a){var t,s,r,q,p
for(t=a.a,s=t.gad(t),s=s.gP(s),r=this.a;s.w();){q=s.gG()
r.i(0,q,t.m(0,q))}for(t=a.b,s=t.length,r=this.b,p=0;p<t.length;t.length===s||(0,H.bp)(t),++p)r.push(t[p].bt())},
m:function(a,b){return this.aH(b)},
hw:function(a,b){b.toString
this.a.i(0,a,b)
return b},
j5:function(a,b){var t,s
t=this.a
s=t.aj(0,a)?t.m(0,a):0
if(typeof s!=="number")return s.af()
s+=b
t.i(0,a,s)
return s},
q:function(a){var t,s
for(t=a.gad(a),t=t.gP(t);t.w();){s=t.gG()
this.aF(s,a.m(0,s))}},
dl:function(a){var t=this.b
return new H.bv(t,new E.nQ(a),[H.I(t,0)])},
jh:function(a,b,c){var t
for(t=J.bC(c);t.w();)b=t.gG().jl(this,a,b)
return b},
jg:function(a,b,c){var t,s,r
for(t=J.bC(c),s=0;t.w();){r=J.xu(t.gG().fn(this,a,b),b)
if(typeof r!=="number")return H.aK(r)
s+=r}return J.cM(b,s)},
dT:function(a,b,c){var t
for(t=J.bC(c);t.w();)b=t.gG().kc(this,a,b)
return b},
dS:function(a,b,c){var t
for(t=J.bC(c);t.w();)b=t.gG().jH(this,a,b)
return b},
jy:function(a,b){var t,s,r
t=this.a
t=t.aj(0,a)?t.m(0,a):0
s=J.r0(t,a.gkb(),a.z)
r=this.dl(a)
return J.r0(this.dS(a,this.dT(a,this.jg(a,a.d2(this,this.jh(a,s,r)),r),r),r),a.Q,a.ch)},
aH:function(a){return this.jy(a,null)},
gP:function(a){var t=this.a
t=t.gad(t)
return t.gP(t)},
gn:function(a){var t=this.a
return t.gn(t)},
j6:function(a,b,c){a.b=b
a.a=c
this.b.push(a)}}
E.j1.prototype={
$asz:function(){return[D.bk]},
$isz:1}
E.nQ.prototype={
$1:function(a){return J.r1(a.gI(),this.a)},
$S:function(){return{func:1,args:[A.d0]}}}
E.hp.prototype={
gI:function(){return this.a$},
sI:function(a){var t=J.am(a)
if(!!t.$ishp){this.sI(a.a$)
return}else if(!!t.$iscI){t=this.d1()
t.js(a)
this.a$=t
return}throw H.m("Invalid type for StatOwner.stats in "+this.u(0)+": "+t.u(a)+" ("+H.n(t.ga6(a))+")")}}
E.hg.prototype={}
E.fa.prototype={
dT:function(a,b,c){var t
b=this.hU(a,b,c)
if(a.d){t=this.c.b
if(t===C.N)return J.eE(b,0.667)
else if(t===C.aa)return J.eE(b,1.5)}return b}}
E.j7.prototype={
dl:function(a){var t,s,r
t=this.hV(a)
s=P.bf(t,!0,H.I(t,0))
t=this.c
r=t.gci().gdw()
C.a.W(s,new H.bv(r,new E.n1(a),[H.I(r,0)]))
t=t.ai.gdw()
C.a.W(s,new H.bv(t,new E.n2(a),[H.I(t,0)]))
return s},
$asfa:function(){return[Q.ct]},
$ashg:function(){return[Q.ct]},
$asz:function(){return[D.bk]}}
E.n1.prototype={
$1:function(a){return J.r1(a.gI(),this.a)},
$S:function(){return{func:1,args:[A.d0]}}}
E.n2.prototype={
$1:function(a){return J.r1(a.gI(),this.a)},
$S:function(){return{func:1,args:[A.d0]}}}
E.kn.prototype={
dS:function(a,b,c){var t
b=this.hT(a,b,c)
t=this.c.ry
if(t!=null)if(!a.f){t=t.a$.aH(a)
b=J.cM(b,t)}return b},
$asfa:function(){return[F.e0]},
$ashg:function(){return[F.e0]},
$asz:function(){return[D.bk]}}
Q.bK.prototype={
eA:function(a){var t,s,r,q,p,o
t=this.eB()
s=C.e.ac(a,0,1)*t
for(r=J.bC(this.gbM()),q=0;r.w();){p=r.gG()
o=p.gbO()
if(typeof o!=="number")return H.aK(o)
q+=o
if(s<=q)return p.a}return},
eB:function(){var t,s,r
for(t=J.bC(this.gbM()),s=0;t.w();){r=t.gG().gbO()
if(typeof r!=="number")return H.aK(r)
s+=r}return s},
k:function(a,b){return b},
u:function(a){return J.cm(this.gbM())},
b0:function(a,b){return Q.oN(this,b,H.ap(this,"bK",0))},
aZ:function(a,b){return Q.fi(this,b,H.ap(this,"bK",0),null)},
ae:function(a,b){return Q.dU(this,!1,!0,null,H.ap(this,"bK",0))},
ax:function(a){return this.ae(a,!0)},
$isz:1,
$asz:null}
Q.hv.prototype={
eA:function(a){var t,s,r,q,p,o,n,m
t=this.eB()
s=C.e.ac(a,0,1)*t
for(r=this.b,q=r.length,p=0,o=0;o<r.length;r.length===q||(0,H.bp)(r),++o){n=r[o]
m=n.gbO()
if(typeof m!=="number")return H.aK(m)
p+=m
if(s<=p)return n.a}return},
fD:function(){var t,s,r,q,p,o
t=P.cD(H.I(this,0),P.T)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.bp)(s),++q){p=s[q]
o=J.bg(p)
if(!t.aj(0,o.gaD(p)))t.i(0,o.gaD(p),0)
o=o.gaD(p)
t.i(0,o,J.cM(t.m(0,o),p.gbO()))}C.a.sn(this.b,0)
this.j4(t.gad(t),t.gay(t))},
gbM:function(){return this.b},
j3:function(a,b,c){C.a.h(this.b,new Q.h(b,this.k(b,J.r3(c)),this.$ti))},
j4:function(a,b){var t,s,r,q,p,o,n,m
t=this.b
s=t.length
C.a.sn(t,s+a.gn(a))
r=a.gP(a)
q=b.gP(b)
for(t=this.$ti;r.w();){p=q.w()?q.gG():1
o=this.b
n=r.gG()
m=this.k(n,p)
if(s>=o.length)return H.J(o,s)
o[s]=new Q.h(n,m,t);++s}},
kA:function(a,b){var t=this.b
C.a.bs(t,"retainWhere")
C.a.fd(t,new Q.oL(this,b),!1)
return},
kv:function(a,b){var t=this.b
C.a.bs(t,"removeWhere")
C.a.fd(t,new Q.oK(this,b),!0)
return},
m:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.J(t,b)
return J.dY(t[b])},
i:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.J(t,b)
t[b]=new Q.h(c,s,this.$ti)},
gn:function(a){return this.b.length},
sn:function(a,b){C.a.sn(this.b,b)
return b},
u:function(a){return P.en(this.b,"[","]")},
b0:function(a,b){return Q.oN(this,b,H.I(this,0))},
aZ:function(a,b){return Q.fi(this,b,H.I(this,0),null)},
ae:function(a,b){return Q.dU(this,!1,!0,null,H.I(this,0))},
ax:function(a){return this.ae(a,!0)},
ia:function(a,b,c){var t,s
this.a=a
t=[[Q.h,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.jl.prototype={$asbK:null,$asz:null,$asH:null,$asM:null,$isH:1,$isM:1,$isz:1}
Q.oL.prototype={
$1:function(a){return this.b.$1(J.dY(a))},
$S:function(){return H.dl(function(a){return{func:1,args:[[Q.h,a]]}},this.a,"hv")}}
Q.oK.prototype={
$1:function(a){return this.b.$1(J.dY(a))},
$S:function(){return H.dl(function(a){return{func:1,args:[[Q.h,a]]}},this.a,"hv")}}
Q.h.prototype={
u:function(a){return"("+H.n(this.a)+" @ "+H.n(this.b)+")"},
gaD:function(a){return this.a},
gbO:function(){return this.b}}
Q.cd.prototype={
gbM:function(){return this.b},
gP:function(a){var t=new Q.oJ(null,[H.ap(this,"cd",0)])
t.a=J.bC(this.b)
return t},
gn:function(a){return J.cl(this.b)},
u:function(a){return J.cm(this.b)},
b0:function(a,b){return Q.oN(this,b,H.ap(this,"cd",0))},
aZ:function(a,b){return Q.fi(this,b,H.ap(this,"cd",0),null)},
ae:function(a,b){return Q.dU(this,!1,!0,null,H.ap(this,"cd",0))},
ax:function(a){return this.ae(a,!0)}}
Q.fh.prototype={$asbK:null,$asz:null,$isz:1}
Q.oJ.prototype={
gG:function(){return J.dY(this.a.gG())},
w:function(){return this.a.w()}}
Q.jn.prototype={}
Q.oO.prototype={
$1:function(a){return this.b.$1(J.dY(a))},
$S:function(){return H.dl(function(a){return{func:1,args:[[Q.h,a]]}},this,"jn")}}
Q.jm.prototype={
$ascd:function(a,b){return[b]},
$asfh:function(a,b){return[b]},
$asbK:function(a,b){return[b]},
$asz:function(a,b){return[b]}}
Q.oM.prototype={
$1:function(a){return new Q.h(this.c.$1(J.dY(a)),a.gbO(),[this.b])},
$S:function(){return H.dl(function(a,b){return{func:1,args:[[Q.h,a]]}},this,"jm")}}
Q.hr.prototype={
$ascd:function(a,b){return[a]},
$asfh:function(a,b){return[a]},
$asbK:function(a,b){return[a]},
$asz:function(a,b){return[a]}}
Q.oa.prototype={
$1:function(a){var t=J.dY(a)
return H.tP(t,this.a)},
$S:function(){return H.dl(function(a,b){return{func:1,args:[[Q.h,b]]}},this,"hr")}}
Q.ob.prototype={
$1:function(a){return new Q.h(J.dY(a),a.gbO(),[this.a])},
$S:function(){return H.dl(function(a,b){return{func:1,args:[[Q.h,b]]}},this,"hr")}}
J.a_.prototype.hP=J.a_.prototype.u
J.fX.prototype.hR=J.fX.prototype.u
P.dk.prototype.hW=P.dk.prototype.cQ
P.dk.prototype.hX=P.dk.prototype.cP
P.bX.prototype.eN=P.bX.prototype.a3
P.z.prototype.hQ=P.z.prototype.b0
W.cB.prototype.dA=W.cB.prototype.au
W.hE.prototype.hY=W.hE.prototype.br
E.ho.prototype.hS=E.ho.prototype.cM
D.d9.prototype.dz=D.d9.prototype.cl
E.cz.prototype.hO=E.cz.prototype.dY
D.bk.prototype.eO=D.bk.prototype.d2
E.cI.prototype.aF=E.cI.prototype.hw
E.cI.prototype.cc=E.cI.prototype.j5
E.cI.prototype.hV=E.cI.prototype.dl
E.cI.prototype.hU=E.cI.prototype.dT
E.cI.prototype.hT=E.cI.prototype.dS;(function installTearOffs(){installTearOff(H.fl.prototype,"gk6",0,0,0,null,["$0"],["df"],1)
installTearOff(H.dC.prototype,"ghp",0,0,0,null,["$1"],["b1"],4)
installTearOff(H.eA.prototype,"gjA",0,0,0,null,["$1"],["bu"],4)
installTearOff(H,"wN",1,0,0,null,["$1"],["FS"],16)
installTearOff(P,"FV",1,0,0,null,["$1"],["Fg"],3)
installTearOff(P,"FW",1,0,0,null,["$1"],["Fh"],3)
installTearOff(P,"FX",1,0,0,null,["$1"],["Fi"],3)
installTearOff(P,"x0",1,0,0,null,["$0"],["FR"],1)
installTearOff(P.jr.prototype,"gjp",0,0,0,null,["$2","$1"],["dV","fE"],5)
installTearOff(P.ce.prototype,"gbT",0,0,0,null,["$2","$1"],["aT","eV"],5)
var t
installTearOff(t=P.dk.prototype,"gf9",0,0,0,null,["$0"],["cT"],1)
installTearOff(t,"gfa",0,0,0,null,["$0"],["cU"],1)
installTearOff(t=P.hx.prototype,"gf9",0,0,0,null,["$0"],["cT"],1)
installTearOff(t,"gfa",0,0,0,null,["$0"],["cU"],1)
installTearOff(t,"giB",0,0,0,null,["$1"],["iC"],function(){return H.dl(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"hx")})
installTearOff(t,"giF",0,0,0,null,["$2"],["iG"],10)
installTearOff(t,"giD",0,0,0,null,["$0"],["iE"],1)
installTearOff(P.hB.prototype,"gdW",0,1,0,null,["$1"],["T"],11)
installTearOff(P,"FZ",1,0,0,null,["$2"],["yt"],17)
installTearOff(P,"G_",1,0,0,null,["$1"],["cE"],2)
installTearOff(W,"G9",1,0,0,null,["$4"],["Fm"],9)
installTearOff(W,"Ga",1,0,0,null,["$4"],["Fn"],9)
installTearOff(t=W.hX.prototype,"gbc",0,1,0,null,["$1"],["dZ"],2)
installTearOff(t,"gjU",0,0,0,null,["$1"],["fS"],2)
installTearOff(t,"gkK",0,0,0,null,["$1"],["kL"],2)
installTearOff(W.ee.prototype,"gaD",0,1,0,null,["$1"],["am"],6)
installTearOff(W.i3.prototype,"gaD",0,1,0,null,["$1"],["am"],6)
installTearOff(W.ij.prototype,"gaD",0,1,0,null,["$1"],["am"],12)
installTearOff(W.io.prototype,"gaD",0,1,0,null,["$1"],["am"],7)
installTearOff(W.eX.prototype,"gaD",0,1,0,null,["$1"],["am"],8)
installTearOff(W.ip.prototype,"gaD",0,1,0,null,["$1"],["am"],8)
installTearOff(W.hm.prototype,"gaD",0,1,0,null,["$1"],["am"],7)
installTearOff(W.ch.prototype,"gaD",0,1,0,null,["$1"],["am"],13)
installTearOff(W.hD.prototype,"gaD",0,1,0,null,["$1"],["am"],14)
installTearOff(W.jw.prototype,"gaD",0,1,0,null,["$1"],["am"],15)
installTearOff(E,"up",1,0,0,null,["$0"],["Gg"],1)
installTearOff(A,"yG",1,0,0,null,["$5"],["yE"],18)
installTearOff(R,"ev",1,0,0,null,["$1"],["EC"],0)
installTearOff(R,"tq",1,0,0,null,["$1"],["Ep"],0)
installTearOff(R,"El",1,0,0,null,["$1"],["Er"],0)
installTearOff(R,"Ek",1,0,0,null,["$1"],["Eq"],0)
installTearOff(R,"Ej",1,0,0,null,["$1"],["En"],0)
installTearOff(R,"w0",1,0,0,null,["$1"],["EB"],0)
installTearOff(R,"bY",1,0,0,null,["$1"],["EA"],0)
installTearOff(R,"ts",1,0,0,null,["$1"],["Ez"],0)
installTearOff(R,"w_",1,0,0,null,["$1"],["Ex"],0)
installTearOff(R,"j8",1,0,0,null,["$1"],["Ew"],0)
installTearOff(R,"eu",1,0,0,null,["$1"],["Et"],0)
installTearOff(R,"e5",1,0,0,null,["$1"],["Ev"],0)
installTearOff(R,"fc",1,0,0,null,["$1"],["Ey"],0)
installTearOff(R,"tr",1,0,0,null,["$1"],["Eu"],0)
installTearOff(R,"x",1,0,0,null,["$1"],["Eo"],0)
installTearOff(R,"Em",1,0,0,null,["$1"],["Es"],0)
installTearOff(F.f4.prototype,"gbc",0,1,0,null,["$1"],["dZ"],2)
installTearOff(O,"Gk",1,0,0,null,["$1"],["Gm"],19)})();(function inheritance(){inherit(P.b5,null)
var t=P.b5
inherit(H.tb,t)
inherit(J.a_,t)
inherit(J.dF,t)
inherit(P.f8,t)
inherit(P.z,t)
inherit(H.dx,t)
inherit(P.iM,t)
inherit(H.ik,t)
inherit(H.ox,t)
inherit(H.eK,t)
inherit(H.pH,t)
inherit(H.fl,t)
inherit(H.pd,t)
inherit(H.eB,t)
inherit(H.pG,t)
inherit(H.p0,t)
inherit(H.fd,t)
inherit(H.oq,t)
inherit(H.dH,t)
inherit(H.dC,t)
inherit(H.eA,t)
inherit(H.kv,t)
inherit(H.nb,t)
inherit(H.ou,t)
inherit(P.eg,t)
inherit(H.fL,t)
inherit(H.jx,t)
inherit(H.dB,t)
inherit(H.q,t)
inherit(H.mg,t)
inherit(H.mi,t)
inherit(H.iQ,t)
inherit(H.pJ,t)
inherit(H.oU,t)
inherit(H.jh,t)
inherit(H.q2,t)
inherit(P.jr,t)
inherit(P.ju,t)
inherit(P.ce,t)
inherit(P.jq,t)
inherit(P.d5,t)
inherit(P.nV,t)
inherit(P.dk,t)
inherit(P.js,t)
inherit(P.p8,t)
inherit(P.pL,t)
inherit(P.q0,t)
inherit(P.eH,t)
inherit(P.qd,t)
inherit(P.px,t)
inherit(P.pz,t)
inherit(P.ny,t)
inherit(P.pE,t)
inherit(P.d6,t)
inherit(P.dQ,t)
inherit(P.bX,t)
inherit(P.q7,t)
inherit(P.mp,t)
inherit(P.pF,t)
inherit(P.fG,t)
inherit(P.fH,t)
inherit(P.q9,t)
inherit(P.cK,t)
inherit(P.bw,t)
inherit(P.fI,t)
inherit(P.cj,t)
inherit(P.da,t)
inherit(P.mT,t)
inherit(P.jg,t)
inherit(P.pi,t)
inherit(P.bH,t)
inherit(P.kM,t)
inherit(P.H,t)
inherit(P.dz,t)
inherit(P.f5,t)
inherit(P.dS,t)
inherit(P.v,t)
inherit(P.dj,t)
inherit(P.ez,t)
inherit(P.jz,t)
inherit(P.oy,t)
inherit(P.pZ,t)
inherit(W.hX,t)
inherit(W.iY,t)
inherit(W.hY,t)
inherit(W.p_,t)
inherit(W.hA,t)
inherit(W.dg,t)
inherit(W.iW,t)
inherit(W.hE,t)
inherit(W.q3,t)
inherit(W.il,t)
inherit(W.e4,t)
inherit(W.jy,t)
inherit(W.pV,t)
inherit(W.jA,t)
inherit(P.pD,t)
inherit(P.pN,t)
inherit(P.dG,t)
inherit(P.e7,t)
inherit(T.hQ,t)
inherit(B.eZ,t)
inherit(S.k1,t)
inherit(E.dZ,t)
inherit(E.nB,t)
inherit(E.nA,t)
inherit(E.ho,t)
inherit(E.jU,t)
inherit(D.d9,t)
inherit(N.Y,t)
inherit(L.cZ,t)
inherit(A.j0,t)
inherit(T.dA,t)
inherit(O.de,t)
inherit(M.iZ,t)
inherit(M.hT,t)
inherit(X.i6,t)
inherit(X.hU,t)
inherit(M.fM,t)
inherit(D.ds,t)
inherit(D.ih,t)
inherit(D.fR,t)
inherit(Z.i5,t)
inherit(E.hh,t)
inherit(E.j2,t)
inherit(E.L,t)
inherit(Y.jb,t)
inherit(Z.lG,t)
inherit(B.lJ,t)
inherit(A.a4,t)
inherit(A.j_,t)
inherit(X.df,t)
inherit(Y.mE,t)
inherit(U.c,t)
inherit(Y.ew,t)
inherit(K.nv,t)
inherit(K.mv,t)
inherit(G.nw,t)
inherit(X.E,t)
inherit(G.V,t)
inherit(B.oR,t)
inherit(A.d0,t)
inherit(A.cP,t)
inherit(Z.cT,t)
inherit(Z.ls,t)
inherit(Z.Z,t)
inherit(F.f3,t)
inherit(F.f4,t)
inherit(D.n8,t)
inherit(A.bI,t)
inherit(N.cH,t)
inherit(L.hV,t)
inherit(L.dR,t)
inherit(O.j4,t)
inherit(D.bk,t)
inherit(E.j1,t)
inherit(E.hp,t)
inherit(Q.bK,t)
inherit(Q.h,t)
t=J.a_
inherit(J.m0,t)
inherit(J.iP,t)
inherit(J.fX,t)
inherit(J.eo,t)
inherit(J.f2,t)
inherit(J.ep,t)
inherit(H.h6,t)
inherit(H.f7,t)
inherit(W.fK,t)
inherit(W.hR,t)
inherit(W.km,t)
inherit(W.ir,t)
inherit(W.U,t)
inherit(W.i1,t)
inherit(W.kB,t)
inherit(W.i2,t)
inherit(W.i3,t)
inherit(W.is,t)
inherit(W.it,t)
inherit(W.mk,t)
inherit(W.mN,t)
inherit(W.mO,t)
inherit(W.iu,t)
inherit(W.fg,t)
inherit(W.ch,t)
inherit(W.nU,t)
inherit(W.p3,t)
inherit(W.iv,t)
inherit(W.iw,t)
inherit(P.d2,t)
inherit(P.ix,t)
inherit(P.d3,t)
inherit(P.iy,t)
inherit(P.ng,t)
t=J.fX
inherit(J.n0,t)
inherit(J.ey,t)
inherit(J.eq,t)
inherit(R.fS,t)
inherit(J.ta,J.eo)
t=J.f2
inherit(J.iO,t)
inherit(J.iN,t)
inherit(P.h1,P.f8)
t=P.h1
inherit(H.ht,t)
inherit(W.hy,t)
inherit(W.cX,t)
t=H.ht
inherit(H.kq,t)
inherit(P.jk,t)
t=P.z
inherit(H.M,t)
inherit(H.h2,t)
inherit(H.bv,t)
inherit(H.q1,t)
inherit(P.iL,t)
t=H.M
inherit(H.er,t)
inherit(H.mh,t)
inherit(P.py,t)
t=H.er
inherit(H.o9,t)
inherit(H.dh,t)
inherit(H.hk,t)
inherit(P.mj,t)
inherit(H.i4,H.h2)
t=P.iM
inherit(H.iS,t)
inherit(H.dV,t)
inherit(Q.oJ,t)
t=H.eK
inherit(H.qV,t)
inherit(H.qW,t)
inherit(H.pC,t)
inherit(H.pe,t)
inherit(H.lL,t)
inherit(H.lM,t)
inherit(H.pK,t)
inherit(H.or,t)
inherit(H.os,t)
inherit(H.qZ,t)
inherit(H.qD,t)
inherit(H.qE,t)
inherit(H.qF,t)
inherit(H.qG,t)
inherit(H.qH,t)
inherit(H.oi,t)
inherit(H.m2,t)
inherit(H.m1,t)
inherit(H.qz,t)
inherit(H.qA,t)
inherit(H.qB,t)
inherit(P.oX,t)
inherit(P.oW,t)
inherit(P.oY,t)
inherit(P.oZ,t)
inherit(P.qe,t)
inherit(P.qf,t)
inherit(P.qp,t)
inherit(P.pj,t)
inherit(P.pr,t)
inherit(P.pn,t)
inherit(P.po,t)
inherit(P.pp,t)
inherit(P.pl,t)
inherit(P.pq,t)
inherit(P.pk,t)
inherit(P.pu,t)
inherit(P.pv,t)
inherit(P.pt,t)
inherit(P.ps,t)
inherit(P.nY,t)
inherit(P.nW,t)
inherit(P.nX,t)
inherit(P.nZ,t)
inherit(P.o5,t)
inherit(P.o6,t)
inherit(P.o3,t)
inherit(P.o4,t)
inherit(P.o7,t)
inherit(P.o8,t)
inherit(P.o1,t)
inherit(P.o2,t)
inherit(P.o_,t)
inherit(P.o0,t)
inherit(P.p2,t)
inherit(P.p1,t)
inherit(P.pM,t)
inherit(P.qh,t)
inherit(P.qg,t)
inherit(P.qj,t)
inherit(P.qo,t)
inherit(P.pP,t)
inherit(P.pQ,t)
inherit(P.pR,t)
inherit(P.pA,t)
inherit(P.mq,t)
inherit(P.qb,t)
inherit(P.qa,t)
inherit(P.kF,t)
inherit(P.kG,t)
inherit(P.oC,t)
inherit(P.oz,t)
inherit(P.oA,t)
inherit(P.oB,t)
inherit(P.qt,t)
inherit(P.ql,t)
inherit(P.qk,t)
inherit(P.qm,t)
inherit(P.qn,t)
inherit(W.p5,t)
inherit(W.qr,t)
inherit(W.lB,t)
inherit(W.lC,t)
inherit(W.nu,t)
inherit(W.ph,t)
inherit(W.mQ,t)
inherit(W.mP,t)
inherit(W.pX,t)
inherit(W.pY,t)
inherit(W.q6,t)
inherit(W.qc,t)
inherit(E.qK,t)
inherit(E.qL,t)
inherit(E.qM,t)
inherit(E.qN,t)
inherit(E.qP,t)
inherit(E.qQ,t)
inherit(E.qR,t)
inherit(E.k0,t)
inherit(E.nE,t)
inherit(E.nC,t)
inherit(E.nD,t)
inherit(E.jW,t)
inherit(E.jV,t)
inherit(L.k4,t)
inherit(L.k5,t)
inherit(L.k6,t)
inherit(A.l7,t)
inherit(A.l5,t)
inherit(A.l6,t)
inherit(D.ln,t)
inherit(E.k8,t)
inherit(E.k9,t)
inherit(B.lK,t)
inherit(A.m_,t)
inherit(A.lY,t)
inherit(A.lZ,t)
inherit(A.lW,t)
inherit(A.lX,t)
inherit(M.m8,t)
inherit(M.m9,t)
inherit(M.ma,t)
inherit(M.mb,t)
inherit(T.nm,t)
inherit(T.nn,t)
inherit(T.nl,t)
inherit(U.nL,t)
inherit(G.lV,t)
inherit(A.qs,t)
inherit(O.qS,t)
inherit(O.qT,t)
inherit(Y.oS,t)
inherit(D.nS,t)
inherit(D.nT,t)
inherit(D.ne,t)
inherit(D.nf,t)
inherit(E.nQ,t)
inherit(E.n1,t)
inherit(E.n2,t)
inherit(Q.oL,t)
inherit(Q.oK,t)
inherit(Q.oO,t)
inherit(Q.oM,t)
inherit(Q.oa,t)
inherit(Q.ob,t)
t=H.p0
inherit(H.fm,t)
inherit(H.hG,t)
inherit(H.kw,H.kv)
t=P.eg
inherit(H.iX,t)
inherit(H.m3,t)
inherit(H.ow,t)
inherit(H.ko,t)
inherit(H.nk,t)
inherit(P.hf,t)
inherit(P.dq,t)
inherit(P.aN,t)
inherit(P.jj,t)
inherit(P.c_,t)
inherit(P.bT,t)
inherit(P.ky,t)
t=H.oi
inherit(H.nR,t)
inherit(H.fE,t)
t=H.f7
inherit(H.mF,t)
inherit(H.iU,t)
t=H.iU
inherit(H.h9,t)
inherit(H.ha,t)
inherit(H.hb,H.h9)
inherit(H.h7,H.hb)
inherit(H.hc,H.ha)
inherit(H.h8,H.hc)
t=H.h7
inherit(H.mG,t)
inherit(H.mH,t)
t=H.h8
inherit(H.mI,t)
inherit(H.mJ,t)
inherit(H.mK,t)
inherit(H.mL,t)
inherit(H.mM,t)
inherit(H.iV,t)
inherit(H.hd,t)
t=P.jr
inherit(P.oV,t)
inherit(P.q4,t)
t=P.js
inherit(P.p7,t)
inherit(P.p9,t)
inherit(P.q_,P.pL)
t=P.d5
inherit(P.hw,t)
inherit(W.pf,t)
inherit(P.hx,P.dk)
inherit(P.pI,P.hw)
inherit(P.pO,P.qd)
inherit(P.jv,H.q)
inherit(P.nx,P.ny)
inherit(P.pB,P.nx)
inherit(P.hB,P.pB)
inherit(P.hu,P.mp)
t=P.fG
inherit(P.kc,t)
inherit(P.kJ,t)
t=P.fH
inherit(P.kd,t)
inherit(P.oF,t)
inherit(P.oE,P.kJ)
t=P.cj
inherit(P.T,t)
inherit(P.N,t)
t=P.dq
inherit(P.hi,t)
inherit(P.lH,t)
inherit(P.p6,P.jz)
t=W.fK
inherit(W.aj,t)
inherit(W.iq,t)
inherit(W.mt,t)
inherit(W.h5,t)
inherit(W.jo,t)
inherit(W.pW,t)
t=W.aj
inherit(W.cB,t)
inherit(W.ec,t)
inherit(W.i0,t)
inherit(W.fj,t)
inherit(W.pa,t)
t=W.cB
inherit(W.aV,t)
inherit(P.c0,t)
t=W.aV
inherit(W.eF,t)
inherit(W.k2,t)
inherit(W.ke,t)
inherit(W.eI,t)
inherit(W.eJ,t)
inherit(W.i_,t)
inherit(W.kI,t)
inherit(W.lo,t)
inherit(W.io,t)
inherit(W.lD,t)
inherit(W.eY,t)
inherit(W.lI,t)
inherit(W.m5,t)
inherit(W.m7,t)
inherit(W.fZ,t)
inherit(W.mo,t)
inherit(W.h4,t)
inherit(W.mu,t)
inherit(W.mw,t)
inherit(W.mS,t)
inherit(W.j3,t)
inherit(W.mU,t)
inherit(W.mX,t)
inherit(W.n7,t)
inherit(W.ns,t)
inherit(W.hm,t)
inherit(W.nG,t)
inherit(W.nJ,t)
inherit(W.ji,t)
inherit(W.og,t)
inherit(W.oh,t)
inherit(W.hs,t)
inherit(W.ol,t)
inherit(W.ot,t)
inherit(W.pw,t)
inherit(W.ee,W.ir)
inherit(W.p4,W.iY)
t=W.U
inherit(W.kA,t)
inherit(W.kK,t)
inherit(W.nM,t)
inherit(W.nN,t)
inherit(W.cq,W.hR)
inherit(W.iz,W.is)
inherit(W.ij,W.iz)
inherit(W.iA,W.it)
inherit(W.eX,W.iA)
inherit(W.ip,W.eX)
inherit(W.el,W.iq)
inherit(W.mx,W.h5)
inherit(W.iB,W.iu)
inherit(W.he,W.iB)
inherit(W.nz,W.i0)
inherit(W.pb,W.i2)
inherit(W.iC,W.iv)
inherit(W.hD,W.iC)
inherit(W.iD,W.iw)
inherit(W.jw,W.iD)
inherit(W.pc,W.p_)
inherit(W.jt,W.pf)
inherit(W.pg,P.nV)
inherit(W.q5,W.hE)
t=P.c0
inherit(P.cr,t)
inherit(P.ea,t)
inherit(P.kN,t)
inherit(P.kO,t)
inherit(P.kP,t)
inherit(P.kQ,t)
inherit(P.kR,t)
inherit(P.kS,t)
inherit(P.kT,t)
inherit(P.kU,t)
inherit(P.kV,t)
inherit(P.kW,t)
inherit(P.kX,t)
inherit(P.kY,t)
inherit(P.kZ,t)
inherit(P.l_,t)
inherit(P.l0,t)
inherit(P.l1,t)
inherit(P.lp,t)
inherit(P.mr,t)
inherit(P.ms,t)
inherit(P.n_,t)
inherit(P.hl,t)
inherit(P.of,t)
inherit(P.oG,t)
inherit(P.hz,t)
inherit(P.pS,t)
inherit(P.pT,t)
inherit(P.pU,t)
t=P.cr
inherit(P.jX,t)
inherit(P.lE,t)
inherit(P.oc,t)
inherit(P.ex,t)
inherit(P.oD,t)
inherit(P.iE,P.ix)
inherit(P.md,P.iE)
inherit(P.iF,P.iy)
inherit(P.mR,P.iF)
inherit(P.on,P.ex)
inherit(T.hP,P.iL)
t=B.eZ
inherit(S.jY,t)
inherit(M.ka,t)
inherit(A.ku,t)
inherit(M.kx,t)
inherit(V.kC,t)
inherit(U.l2,t)
inherit(N.m4,t)
inherit(F.mC,t)
inherit(G.n4,t)
inherit(Q.nj,t)
inherit(N.nI,t)
inherit(D.oj,t)
inherit(V.ok,t)
inherit(F.oQ,t)
t=E.nB
inherit(E.hn,t)
inherit(E.jd,t)
t=E.ho
inherit(E.hO,t)
inherit(E.jT,t)
inherit(E.jc,t)
inherit(E.lt,E.hO)
t=D.d9
inherit(D.fz,t)
inherit(D.fA,t)
inherit(D.fB,t)
t=N.Y
inherit(T.kz,t)
inherit(Q.eL,t)
inherit(R.fb,t)
t=T.kz
inherit(K.bL,t)
inherit(S.bx,t)
inherit(T.bZ,t)
inherit(M.bt,t)
inherit(A.mW,A.j0)
inherit(L.an,A.mW)
t=T.dA
inherit(O.kb,t)
inherit(Z.kk,t)
inherit(Y.lu,t)
inherit(Y.lw,t)
inherit(B.lz,t)
inherit(S.m6,t)
inherit(Z.ml,t)
inherit(S.mm,t)
inherit(U.mn,t)
inherit(E.mB,t)
inherit(V.mV,t)
inherit(N.n6,t)
inherit(N.ni,t)
inherit(E.no,t)
inherit(Y.nq,t)
inherit(L.nr,t)
inherit(S.nt,t)
inherit(R.oe,t)
inherit(U.oo,t)
inherit(E.oI,t)
inherit(M.oP,t)
t=O.de
inherit(O.hq,t)
inherit(O.eb,t)
t=O.hq
inherit(Y.om,t)
inherit(Y.kl,t)
inherit(M.fY,M.iZ)
t=M.fY
inherit(L.kf,t)
inherit(R.iT,t)
t=L.cZ
inherit(T.kh,t)
inherit(T.kj,t)
inherit(U.kD,t)
inherit(Z.kE,t)
inherit(L.l3,t)
inherit(O.lq,t)
inherit(T.ly,t)
inherit(X.lA,t)
inherit(Q.mc,t)
inherit(K.me,t)
inherit(G.mf,t)
inherit(L.my,t)
inherit(V.mz,t)
inherit(S.mA,t)
inherit(E.n9,t)
inherit(L.na,t)
inherit(Z.nh,t)
inherit(Y.np,t)
inherit(L.nF,t)
inherit(O.nH,t)
inherit(N.nK,t)
inherit(U.nP,t)
inherit(N.op,t)
inherit(Q.oH,t)
inherit(S.hW,S.bx)
t=Q.eL
inherit(Q.lx,t)
inherit(Q.kH,t)
inherit(D.lm,D.fR)
t=O.eb
inherit(V.lr,t)
inherit(Q.lF,t)
inherit(M.nO,t)
inherit(B.oT,t)
inherit(E.cz,E.j2)
t=E.L
inherit(E.fD,t)
inherit(E.k7,t)
inherit(M.lv,Y.jb)
inherit(Q.n3,Q.lF)
inherit(A.od,A.j_)
t=E.cz
inherit(F.mD,t)
inherit(Q.ct,t)
t=F.mD
inherit(F.e0,t)
inherit(F.jf,t)
inherit(F.A,t)
inherit(U.ab,U.c)
t=R.fb
inherit(R.a2,t)
inherit(R.W,t)
inherit(R.ac,t)
inherit(R.dy,t)
inherit(R.ff,t)
inherit(R.bD,R.ac)
t=Y.ew
inherit(Y.R,t)
inherit(Y.a7,t)
inherit(Y.kg,t)
inherit(Y.by,t)
inherit(Y.kp,t)
inherit(Y.j5,t)
inherit(Y.im,t)
inherit(Y.j6,t)
inherit(Y.ef,t)
t=Y.R
inherit(Y.d_,t)
inherit(Y.bF,t)
inherit(U.ag,A.a4)
t=G.V
inherit(G.aW,t)
inherit(G.bG,t)
inherit(G.d,t)
inherit(G.ah,G.bG)
inherit(A.hS,A.d0)
t=D.bk
inherit(D.jp,t)
inherit(D.nd,t)
inherit(E.cI,E.j1)
inherit(E.hg,E.cI)
inherit(E.fa,E.hg)
t=E.fa
inherit(E.j7,t)
inherit(E.kn,t)
t=Q.bK
inherit(Q.jl,t)
inherit(Q.fh,t)
inherit(Q.hv,Q.jl)
inherit(Q.cd,Q.fh)
t=Q.cd
inherit(Q.jn,t)
inherit(Q.jm,t)
inherit(Q.hr,t)
mixin(H.ht,H.ox)
mixin(H.h9,P.bX)
mixin(H.hb,H.ik)
mixin(H.ha,P.bX)
mixin(H.hc,H.ik)
mixin(P.f8,P.bX)
mixin(P.hu,P.q7)
mixin(W.ir,W.hY)
mixin(W.iY,W.hY)
mixin(W.is,P.bX)
mixin(W.iz,W.dg)
mixin(W.it,P.bX)
mixin(W.iA,W.dg)
mixin(W.iu,P.bX)
mixin(W.iB,W.dg)
mixin(W.iv,P.bX)
mixin(W.iC,W.dg)
mixin(W.iw,P.bX)
mixin(W.iD,W.dg)
mixin(P.ix,P.bX)
mixin(P.iE,W.dg)
mixin(P.iy,P.bX)
mixin(P.iF,W.dg)
mixin(E.j2,E.hp)
mixin(A.j_,P.dQ)
mixin(M.iZ,D.ds)
mixin(A.j0,P.dQ)
mixin(E.j1,P.dQ)
mixin(Q.jl,P.bX)
mixin(Q.fh,P.dQ)})();(function constants(){C.z=W.eI.prototype
C.j=W.eJ.prototype
C.D=W.ee.prototype
C.i=W.i_.prototype
C.U=W.el.prototype
C.V=J.a_.prototype
C.a=J.eo.prototype
C.l=J.iN.prototype
C.b=J.iO.prototype
C.r=J.iP.prototype
C.e=J.f2.prototype
C.d=J.ep.prototype
C.a1=J.eq.prototype
C.a9=W.he.prototype
C.L=W.j3.prototype
C.M=J.n0.prototype
C.f=W.hm.prototype
C.O=W.ji.prototype
C.y=J.ey.prototype
C.Q=new P.kd(!1)
C.P=new P.kc(C.Q)
C.m=new W.hX()
C.R=new P.mT()
C.S=new P.p8()
C.A=new P.pD()
C.h=new P.pO()
C.B=new W.jy()
C.C=new L.hV(0,"CanonLevel.CANON_ONLY")
C.T=new L.hV(1,"CanonLevel.FANON_ONLY")
C.E=new P.da(0)
C.W=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.F=function(hooks) { return hooks; }
C.X=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.Y=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.Z=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.G=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.a_=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.a0=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.H=H.a(makeConstList([127,2047,65535,1114111]),[P.N])
C.n=makeConstList([0,0,32776,33792,1,10240,0,0])
C.a2=H.a(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.v])
C.o=makeConstList([0,0,65490,45055,65535,34815,65534,18431])
C.p=makeConstList([0,0,26624,1023,65534,2047,65534,2047])
C.a3=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.a4=makeConstList([])
C.a6=makeConstList([0,0,32722,12287,65534,34815,65534,18431])
C.I=makeConstList([0,0,24576,1023,65534,34815,65534,18431])
C.J=makeConstList([0,0,32754,11263,65534,34815,65534,18431])
C.K=makeConstList([0,0,65490,12287,65535,34815,65534,18431])
C.t=H.a(makeConstList(["bind","if","ref","repeat","syntax"]),[P.v])
C.u=H.a(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.v])
C.v=new F.f3(0,"LogLevel.ERROR")
C.w=new F.f3(1,"LogLevel.WARN")
C.k=new F.f3(2,"LogLevel.INFO")
C.a7=new F.f3(3,"LogLevel.VERBOSE")
C.a5=H.a(makeConstList([]),[P.v])
C.a8=new H.kw(0,{},C.a5,[P.v,P.v])
C.c=new E.hh(0,"ProphecyState.NONE")
C.N=new E.hh(1,"ProphecyState.ACTIVE")
C.aa=new E.hh(2,"ProphecyState.FULLFILLED")
C.ab=H.c2("dG")
C.ac=H.c2("Gv")
C.x=H.c2("Gw")
C.ad=H.c2("Gx")
C.ae=H.c2("Gy")
C.af=H.c2("GA")
C.ag=H.c2("GB")
C.ah=H.c2("GC")
C.ai=H.c2("vK")
C.aj=H.c2("dz")
C.ak=H.c2("v")
C.al=H.c2("GF")
C.am=H.c2("GG")
C.an=H.c2("GH")
C.ao=H.c2("e7")
C.ap=H.c2("cK")
C.aq=H.c2("T")
C.ar=H.c2("N")
C.as=H.c2("cj")
C.q=new P.oE(!1)})();(function staticFields(){$.vW="$cachedFunction"
$.vX="$cachedInvocation"
$.dI=0
$.fF=null
$.ux=null
$.tY=null
$.wX=null
$.xh=null
$.qu=null
$.qC=null
$.u1=null
$.fo=null
$.hH=null
$.hI=null
$.tJ=!1
$.b0=C.h
$.uP=0
$.e1=null
$.ri=null
$.uN=null
$.uM=null
$.uI=null
$.uH=null
$.uG=null
$.uJ=null
$.uF=null
$.r6="AND"
$.tg="OR"
$.tC="XOR"
$.c1=null
$.qq=null
$.qY=3
$.qX=null
$.x1=null
$.xn=null
$.wW=null
$.jE=null
$.cA=null
$.Gq=null
$.qI=null
$.qJ=null
$.Gn=null
$.xk=null
$.jH=null
$.jI=null
$.xl=null
$.xa=null
$.xb=null
$.xe=null
$.fs=null
$.fu=null
$.jJ=null
$.fq=null
$.jD=null
$.tL=null
$.u9=null
$.cO=0
$.um=0
$.r7="passedAchievement"
$.jZ="missingAchievement"
$.d8=null
$.ra=null
$.e9=null
$.rb=null
$.re=null
$.rd=null
$.r9=null
$.r8=null
$.k_=null
$.uo=!1
$.wa=0
$.k3=null
$.ut=null
$.y2=null
$.ur=null
$.uq=null
$.y6=null
$.yb=null
$.us=null
$.uu=null
$.ye=null
$.y7=null
$.y9=null
$.y3=null
$.ya=null
$.yc=null
$.yf=null
$.yh=null
$.yi=null
$.yg=null
$.y8=null
$.y4=null
$.yj=null
$.y5=null
$.yk=null
$.yd=null
$.at="accent"
$.aw="aspect1"
$.av="aspect2"
$.aG="shoe1"
$.aF="shoe2"
$.ay="cloak1"
$.az="cloak2"
$.ax="cloak3"
$.aD="shirt1"
$.aC="shirt2"
$.aB="pants1"
$.aA="pants2"
$.ad=1300
$.j=3
$.l=2
$.D=1
$.w=0.1
$.yI=1
$.yH=-1
$.rz=null
$.e2=null
$.uS=null
$.ei=null
$.eU=null
$.ib=null
$.rr=null
$.le=null
$.li=null
$.ic=null
$.ia=null
$.uU=null
$.lj=null
$.eQ=null
$.dO=null
$.uT=null
$.l8=null
$.lk=null
$.eS=null
$.rw=null
$.rv=null
$.uV=null
$.fQ=null
$.eM=null
$.cp=null
$.dc=null
$.eR=null
$.lh=null
$.cf=null
$.cn=null
$.rt=null
$.fO=null
$.eh=null
$.yF=null
$.fN=null
$.dd=null
$.dP=null
$.ig=null
$.dr=null
$.eT=null
$.c8=null
$.lg=null
$.uR=null
$.ba=null
$.cy=null
$.cR=null
$.cx=null
$.ie=null
$.co=null
$.dK=null
$.db=null
$.eP=null
$.dJ=null
$.dL=null
$.l9=null
$.ek=null
$.fP=null
$.lf=null
$.uQ=null
$.cQ=null
$.cS=null
$.bl=null
$.eN=null
$.e3=null
$.ry=null
$.lb=null
$.id=null
$.la=null
$.cC=null
$.rA=null
$.rs=null
$.rB=null
$.eO=null
$.cF=null
$.dN=null
$.dM=null
$.eV=null
$.ru=null
$.rx=null
$.uW=null
$.lc=null
$.ld=null
$.ej=null
$.rE=null
$.yJ=null
$.v0=null
$.v_=null
$.yK=null
$.rD=null
$.rG=0
$.yU=null
$.yN=null
$.yO=null
$.yP=null
$.yQ=null
$.yR=null
$.yS=null
$.yT=null
$.yW=null
$.yX=null
$.yY=null
$.yZ=null
$.z_=null
$.z0=null
$.yV=null
$.ti=null
$.tj=null
$.tk=null
$.tl=null
$.f9=null
$.Ea=null
$.k="PLAYER1TAG"
$.e6="PLAYER2TAG"
$.y="DENIZENTAG"
$.t="CONSORTTAG"
$.P="CONSORTSOUNDTAG"
$.b_="MCGUFFINTAG"
$.ak="TAGPHYSICALMCGUFFIN"
$.cu="TAGWEAPON"
$.EM=null
$.EX=null
$.EH=null
$.EL=null
$.EP=null
$.ET=null
$.ER=null
$.EZ=null
$.EY=null
$.ES=null
$.w7=null
$.EO=null
$.w6=null
$.EV=null
$.EU=null
$.EW=null
$.EK=null
$.EJ=null
$.w5=null
$.EQ=null
$.EN=null
$.EI=null
$.x2=!1
$.tS=null
$.G0=!1
$.tv=null
$.F1=!0
$.tw=null
$.Fb=13
$.aP=3
$.bQ=2
$.aQ=1
$.Fa="Class"
$.F9="Aspect"
$.wf="Interest"
$.t7=0
$.K=1
$.a8=3
$.G=4
$.t6=6
$.t8=7
$.af=8
$.r=9
$.o=10
$.rR=null
$.f1=null
$.rU=null
$.t3=null
$.t_=null
$.rJ=null
$.rO=null
$.lR=null
$.fV=null
$.ve=null
$.vB=null
$.v9=null
$.vf=null
$.rP=null
$.rZ=null
$.vD=null
$.vF=null
$.rK=null
$.iJ=null
$.iH=null
$.aS=null
$.vu=null
$.rI=null
$.vo=null
$.f0=null
$.v8=null
$.vG=null
$.vC=null
$.vA=null
$.rX=null
$.lO=null
$.em=null
$.vE=null
$.rM=null
$.rQ=null
$.iK=null
$.vy=null
$.dw=null
$.fU=null
$.t5=null
$.vz=null
$.t4=null
$.t1=null
$.t2=null
$.lQ=null
$.iI=null
$.zr=null
$.vh=null
$.rW=null
$.vx=null
$.vw=null
$.C=null
$.vc=null
$.lN=null
$.bM=null
$.bd=null
$.bO=null
$.a1=null
$.aT=null
$.ca=null
$.O=null
$.Q=null
$.aM=null
$.bb=null
$.bV=null
$.bm=null
$.be=null
$.cg=null
$.b4=null
$.bB=null
$.bP=null
$.a6=null
$.aL=null
$.bc=null
$.b2=null
$.ai=null
$.c9=null
$.aZ=null
$.ar=null
$.bW=null
$.b8=null
$.aq=null
$.bz=null
$.c4=null
$.aR=null
$.bs=null
$.br=null
$.aa=null
$.bN=null
$.ae=null
$.bj=null
$.bA=null
$.b1=null
$.bi=null
$.aO=null
$.bh=null
$.aU=null
$.a0=null
$.aI=null
$.aJ=null
$.b7=null
$.aH=null
$.au=null
$.a9=null
$.X=null
$.S=null
$.ao=null
$.b6=null
$.bn=null
$.b9=null
$.AL=null
$.Dq=null
$.DY=null
$.Ag=null
$.Dn=null
$.AM=null
$.v5=null
$.DC=null
$.BL=null
$.AH=null
$.zl=null
$.Cl=null
$.t0=null
$.va=null
$.CK=null
$.Ad=null
$.Bu=null
$.Ab=null
$.rL=null
$.zX=null
$.AZ=null
$.Al=null
$.BE=null
$.DK=null
$.AN=null
$.rN=null
$.BF=null
$.Aj=null
$.A2=null
$.vt=null
$.ze=null
$.v6=null
$.Bo=null
$.rV=null
$.C_=null
$.BU=null
$.zi=null
$.A5=null
$.CU=null
$.zk=null
$.Dm=null
$.Bt=null
$.As=null
$.CE=null
$.Dg=null
$.rT=null
$.BP=null
$.CB=null
$.Ak=null
$.z7=null
$.DN=null
$.Bx=null
$.A1=null
$.DB=null
$.C2=null
$.A8=null
$.Dl=null
$.AC=null
$.D1=null
$.D2=null
$.zg=null
$.BW=null
$.Am=null
$.Aw=null
$.E1=null
$.lU=null
$.CS=null
$.Dj=null
$.lP=null
$.zR=null
$.Cc=null
$.Cg=null
$.zd=null
$.AB=null
$.Dk=null
$.C1=null
$.DE=null
$.CG=null
$.Ch=null
$.vm=null
$.D5=null
$.DS=null
$.Dp=null
$.Bc=null
$.Ct=null
$.Bd=null
$.CV=null
$.DQ=null
$.BD=null
$.Ay=null
$.AV=null
$.zH=null
$.CC=null
$.AT=null
$.B0=null
$.Ao=null
$.D4=null
$.f_=null
$.C6=null
$.vj=null
$.Be=null
$.Bb=null
$.DV=null
$.zN=null
$.CQ=null
$.CR=null
$.CP=null
$.CO=null
$.Dc=null
$.B1=null
$.BX=null
$.Df=null
$.BO=null
$.C7=null
$.Ah=null
$.DP=null
$.BV=null
$.AE=null
$.AF=null
$.Cf=null
$.E0=null
$.Br=null
$.DO=null
$.vq=null
$.D0=null
$.BB=null
$.lT=null
$.Bm=null
$.Cv=null
$.zM=null
$.AI=null
$.CX=null
$.BY=null
$.DJ=null
$.vp=null
$.C5=null
$.zT=null
$.Ae=null
$.Cr=null
$.Dw=null
$.CW=null
$.rH=null
$.vv=null
$.D7=null
$.DR=null
$.Ba=null
$.zv=null
$.zE=null
$.Du=null
$.C9=null
$.BM=null
$.Ca=null
$.Dr=null
$.Bn=null
$.zh=null
$.B_=null
$.BK=null
$.D9=null
$.AS=null
$.zL=null
$.CM=null
$.CN=null
$.DH=null
$.CZ=null
$.rY=null
$.vb=null
$.A9=null
$.vd=null
$.Bi=null
$.vk=null
$.Cx=null
$.BT=null
$.CI=null
$.rS=null
$.lS=null
$.vi=null
$.Au=null
$.AX=null
$.vr=null
$.vg=null
$.A4=null
$.Dy=null
$.zY=null
$.Cj=null
$.Bf=null
$.De=null
$.BN=null
$.zs=null
$.Bg=null
$.Ar=null
$.Cn=null
$.Bw=null
$.BS=null
$.BC=null
$.BG=null
$.CL=null
$.CH=null
$.za=null
$.Dv=null
$.CA=null
$.Ai=null
$.An=null
$.AW=null
$.Ds=null
$.AP=null
$.By=null
$.zz=null
$.AJ=null
$.Aq=null
$.Cb=null
$.Az=null
$.CT=null
$.BA=null
$.v7=null
$.Cw=null
$.Bh=null
$.AQ=null
$.z8=null
$.zf=null
$.C8=null
$.Ci=null
$.Bv=null
$.B8=null
$.DM=null
$.zC=null
$.AR=null
$.Bz=null
$.Af=null
$.Db=null
$.A3=null
$.CY=null
$.zA=null
$.Dx=null
$.BI=null
$.zu=null
$.CF=null
$.Cs=null
$.Aa=null
$.B2=null
$.zS=null
$.Dt=null
$.Bk=null
$.DI=null
$.zU=null
$.B3=null
$.zV=null
$.Ac=null
$.Cz=null
$.A6=null
$.Bl=null
$.BZ=null
$.zO=null
$.Dd=null
$.DX=null
$.D3=null
$.BQ=null
$.Da=null
$.BR=null
$.zn=null
$.z9=null
$.BJ=null
$.zx=null
$.zW=null
$.zo=null
$.zt=null
$.C4=null
$.Co=null
$.DA=null
$.Bj=null
$.DW=null
$.CD=null
$.vs=null
$.vn=null
$.vl=null
$.A_=null
$.B6=null
$.BH=null
$.Cd=null
$.D6=null
$.zc=null
$.DT=null
$.Ax=null
$.Dh=null
$.Ap=null
$.zm=null
$.zP=null
$.zG=null
$.E_=null
$.zQ=null
$.AA=null
$.zZ=null
$.DG=null
$.D8=null
$.Dz=null
$.zb=null
$.CJ=null
$.Bp=null
$.Bs=null
$.DL=null
$.Di=null
$.AY=null
$.AG=null
$.Cq=null
$.DU=null
$.AK=null
$.Bq=null
$.zK=null
$.B9=null
$.B7=null
$.D_=null
$.Cp=null
$.B4=null
$.zF=null
$.Do=null
$.Ce=null
$.DD=null
$.DZ=null
$.zq=null
$.zp=null
$.zB=null
$.AD=null
$.Cy=null
$.A7=null
$.Cu=null
$.At=null
$.zj=null
$.zD=null
$.C3=null
$.Av=null
$.Cm=null
$.zJ=null
$.AO=null
$.DF=null
$.zw=null
$.AU=null
$.Ck=null
$.zI=null
$.B5=null
$.C0=null
$.zy=null
$.A0=null
$.eW="OWNER"
$.vM=!1
$.xp=""
$.E9=74
$.tx=null
$.F4=null
$.u=null
$.al=null
$.b3=null
$.aX=null
$.cc=null
$.aY=null
$.bu=null
$.bE=null
$.c5=null
$.d4=null
$.ci=null
$.wb=!1})();(function lazyInitializers(){lazy($,"uC","$get$uC",function(){return H.x6("_$dart_dartClosure")})
lazy($,"tc","$get$tc",function(){return H.x6("_$dart_js")})
lazy($,"v3","$get$v3",function(){return H.z5()})
lazy($,"v4","$get$v4",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.uP
$.uP=t+1
t="expando$key$"+t}return new P.kM(null,t,[P.N])})
lazy($,"wg","$get$wg",function(){return H.dT(H.ov({
toString:function(){return"$receiver$"}}))})
lazy($,"wh","$get$wh",function(){return H.dT(H.ov({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"wi","$get$wi",function(){return H.dT(H.ov(null))})
lazy($,"wj","$get$wj",function(){return H.dT(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"wn","$get$wn",function(){return H.dT(H.ov(void 0))})
lazy($,"wo","$get$wo",function(){return H.dT(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"wl","$get$wl",function(){return H.dT(H.wm(null))})
lazy($,"wk","$get$wk",function(){return H.dT(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"wq","$get$wq",function(){return H.dT(H.wm(void 0))})
lazy($,"wp","$get$wp",function(){return H.dT(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"tF","$get$tF",function(){return P.Ff()})
lazy($,"fT","$get$fT",function(){var t,s
t=P.dz
s=new P.ce(0,P.Fe(),null,[t])
s.ih(null,t)
return s})
lazy($,"hJ","$get$hJ",function(){return[]})
lazy($,"ww","$get$ww",function(){return H.E7([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2])})
lazy($,"wT","$get$wT",function(){return P.FK()})
lazy($,"wz","$get$wz",function(){return P.h0(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"tI","$get$tI",function(){return P.te()})
lazy($,"xr","$get$xr",function(){return H.a([$.qX,$.jE],[W.cB])})
lazy($,"bS","$get$bS",function(){return P.cD(G.d,E.dZ)})
lazy($,"eG","$get$eG",function(){return P.cD(P.N,L.cZ)})
lazy($,"bU","$get$bU",function(){return H.a([],[S.bx])})
lazy($,"uD","$get$uD",function(){return H.a(["Yaldabaoth","y'all'd'vebaoth","HairSeven","Javascript",'<span class = "void">Nobrop, the </span>Null','<span class = "void">Paraxalan, The </span>Ever-Searching',"<span class = 'void'>Algebron, The </span>Dilletant",'<span class = "void">Doomod, The </span>Wanderer',"J\xf6rmungandr","Apollyon","Siseneg","Borunam",'<span class = "void">Shogun the, Glitch</span>','<span class = "void">Jadeacher the,</span>Researcher',"Karmiution",'<span class = "void">Authorot, the</span> Robot','<span class = "void">Abbiejean, the </span>Scout','<span class = "void">Aspiratcher, The</span> Librarian','<span class = "void">Recurscker, The</span>Hollow One',"Insurorracle",'<span class = "void">Maniomnia, the </span>Dreamwaker',"Kazerad","Shiva","Goliath"],[P.v])})
lazy($,"uE","$get$uE",function(){return H.a(["Eriotur","Abraxas","Succra","Watojo","Bluhubit","Swefrat","Helaja","Fischapris"],[P.v])})
lazy($,"i8","$get$i8",function(){return D.dt("smell",A.rq($.fO,1),T.bZ)})
lazy($,"i9","$get$i9",function(){return D.dt("sound",A.rq($.dN,1),M.bt)})
lazy($,"i7","$get$i7",function(){return D.dt("ambiance",A.rq($.ie,1),K.bL)})
lazy($,"l4","$get$l4",function(){return D.dt("consort",A.yD(H.a([A.yC($.uV,1),A.yG()],[{func:1,v:true,args:[D.ds,[Q.bK,N.Y],E.cz,L.dR,A.bI]}])),S.bx)})
lazy($,"rj","$get$rj",function(){return D.dt("denizen",null,Q.eL)})
lazy($,"ro","$get$ro",function(){return D.dt("quest chain",null,R.fb)})
lazy($,"rn","$get$rn",function(){return D.dt("pre denizen quest chain",null,R.a2)})
lazy($,"rk","$get$rk",function(){return D.dt("denizen quest chain",null,R.W)})
lazy($,"rm","$get$rm",function(){return D.dt("post denizen quest chain",null,R.ac)})
lazy($,"rl","$get$rl",function(){return D.dt("moon quest chain",null,R.dy)})
lazy($,"rp","$get$rp",function(){return D.dt("battlefield quest chain",null,R.ff)})
lazy($,"ll","$get$ll",function(){var t=new D.ih(P.cD(P.v,D.fR))
t.aM($.$get$i8())
t.aM($.$get$i9())
t.aM($.$get$i7())
return t})
lazy($,"ii","$get$ii",function(){var t=D.rC($.$get$ll())
t.aM($.$get$l4())
t.aM($.$get$rj())
t.aM($.$get$ro())
t.aM($.$get$rn())
t.aM($.$get$rk())
t.aM($.$get$rm())
return t})
lazy($,"uX","$get$uX",function(){var t=D.rC($.$get$ll())
t.aM($.$get$rl())
t.aM($.$get$l4())
return t})
lazy($,"uY","$get$uY",function(){var t=D.rC($.$get$ll())
t.aM($.$get$rp())
t.aM($.$get$l4())
return t})
lazy($,"uZ","$get$uZ",function(){return P.cD(P.v,Z.i5)})
lazy($,"iG","$get$iG",function(){return P.cD(P.N,B.eZ)})
lazy($,"fW","$get$fW",function(){return H.a([],[A.a4])})
lazy($,"fe","$get$fe",function(){return P.cD(P.N,T.dA)})
lazy($,"as","$get$as",function(){return H.a([],[U.ag])})
lazy($,"b","$get$b",function(){return P.a3(null,null,null,G.V)})
lazy($,"ja","$get$ja",function(){return A.ks(0,!1)})
lazy($,"tt","$get$tt",function(){return A.ks(16711680,!1)})
lazy($,"w4","$get$w4",function(){var t,s,r
t=P.v
s=A.cP
r=P.N
t=new L.an(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
t.sfs("#FFFF00")
t.sfq("#FFC935")
t.sfB("#FFCC00")
t.sfC("#FF9B00")
t.sfA("#C66900")
t.seG("#FFD91C")
t.seF("#FFE993")
t.sh4("#FFB71C")
t.sh3("#C67D00")
return t})
lazy($,"w3","$get$w3",function(){var t,s,r
t=P.v
s=A.cP
r=P.N
t=new L.an(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
t.sfs("#F092FF")
t.sfq("#D456EA")
t.sfB("#C87CFF")
t.sfC("#AA00FF")
t.sfA("#6900AF")
t.seG("#DE00FF")
t.seF("#E760FF")
t.sh4("#B400CC")
t.sh3("#770E87")
return t})
lazy($,"th","$get$th",function(){return A.ed(255,0,255,255)})
lazy($,"mZ","$get$mZ",function(){return F.E6("Path Utils",!1)})
lazy($,"mY","$get$mY",function(){return P.cD(P.ez,P.N)})
lazy($,"tD","$get$tD",function(){var t=[P.v]
return P.B([0,H.a(["\u030d","\u030e","\u0304","\u0305","\u033f","\u0311","\u0306","\u0310","\u0352","\u0357","\u0351","\u0307","\u0308","\u030a","\u0342","\u0343","\u0344","\u034a","\u034b","\u034c","\u0303","\u0302","\u030c","\u0350","\u0300","\u0301","\u030b","\u030f","\u0312","\u0313","\u0314","\u033d","\u0309","\u0363","\u0364","\u0365","\u0366","\u0367","\u0368","\u0369","\u036a","\u036b","\u036c","\u036d","\u036e","\u036f","\u033e","\u035b","\u0346","\u031a"],t),1,H.a(["\u0316","\u0317","\u0318","\u0319","\u031c","\u031d","\u031e","\u031f","\u0320","\u0324","\u0325","\u0326","\u0329","\u032a","\u032b","\u032c","\u032d","\u032e","\u032f","\u0330","\u0331","\u0332","\u0333","\u0339","\u033a","\u033b","\u033c","\u0345","\u0347","\u0348","\u0349","\u034d","\u034e","\u0353","\u0354","\u0355","\u0356","\u0359","\u035a","\u0323"],t),2,H.a(["\u0315","\u031b","\u0340","\u0341","\u0358","\u0321","\u0322","\u0327","\u0328","\u0334","\u0335","\u0336","\u034f","\u035c","\u035d","\u035e","\u035f","\u0360","\u0362","\u0338","\u0337","\u0361","\u0489"],t)],P.N,[P.H,P.v])})
lazy($,"x5","$get$x5",function(){return H.a(["NIPPER CADET","PESKY URCHIN","BRAVESPROUT","JUVESQUIRT","RUMPUS BUSTER","CHAMP-FRY","ANKLEBITER","CALLOUSED TENDERFOOT","RASCALSPRAT","GRITTY MIDGET","BRITCHES RIPPER","ALIEN URCHIN","NESTING NEWB"],[P.v])})
lazy($,"jF","$get$jF",function(){return H.a(["#A10000","#a25203","#a1a100","#658200","#416600","#078446","#008282","#004182","#0021cb","#631db4","#610061","#99004d"],[P.v])})
lazy($,"u8","$get$u8",function(){var t,s
t=[P.v]
s=H.a(["8=D",">->","//","tumut",")","><>","(","$","?","=begin","=end"],t)
C.a.W(s,H.a(["<3","<3<","<>","c3<","{","}","<String>[","]","'",".",",","~","!","~","^","&","#","@","%","*"],t))
return s})
lazy($,"tV","$get$tV",function(){var t=[P.v]
return H.a([H.a(["calm","clam"],t),H.a(["ass","bass"],t),H.a(["god","glub"],t),H.a(["god","cod"],t),H.a(["fuck","glub"],t),H.a(["really","reely"],t),H.a(["kill","krill"],t),H.a(["thing","fin"],t),H.a(["well","whale"],t),H.a(["purpose","porpoise"],t),H.a(["better","betta"],t),H.a(["help","kelp"],t),H.a(["see","sea"],t),H.a(["friend","frond"],t),H.a(["crazy","craysea"],t),H.a(["kid","squid"],t),H.a(["hell","shell"],t)],[[P.H,P.v]])})
lazy($,"tR","$get$tR",function(){var t,s,r
t=[P.v]
s=[[P.H,P.v]]
r=H.a([H.a(["\\well\\b","welp"],t),H.a(["pro","bro"],t),H.a(["guess","suppose"],t),H.a(["S\\b","Z"],t),H.a(["oh my god","omg"],t),H.a(["like","liek"],t),H.a(["ing","in"],t),H.a(["have to","hafta"],t),H.a(["want to","wanna"],t),H.a(["going to","gonna"],t),H.a(["i'm","i am"],t),H.a(["you're","you are"],t),H.a(["we're","we are"],t),H.a(["forever","5ever"],t),H.a(["ever","evah"],t),H.a(["er","ah"],t),H.a(["to","ta"],t)],s)
C.a.W(r,H.a([H.a(["I'm","Imma"],t),H.a(["don't know","dunno"],t),H.a(["school","skool"],t),H.a(["the","teh"],t),H.a(["aren't","aint"],t),H.a(["ie","ei"],t),H.a(["though","tho"],t),H.a(["you","u"],t),H.a(["right","rite"],t)],s))
C.a.W(r,H.a([H.a(["n't"," not"],t),H.a(["'m'"," am"],t),H.a(["kind of","kinda"],t),H.a(["okay","ok"],t),H.a(["\\band\\b","&"],t),H.a(["\\bat\\b","@"],t),H.a(["okay","okey dokey"],t)],s))
return r})
lazy($,"uc","$get$uc",function(){var t=[P.v]
return H.a([H.a(["\\bvery\\b","adequately"],t),H.a(["\\bvery\\b","really"],t),H.a(["\\bvery\\b","super"],t),H.a(["\\bvery\\b","amazingly"],t),H.a(["\\bvery\\b","hella"],t),H.a(["\\bvery\\b","extremely"],t),H.a(["\\bvery\\b","absolutely"],t),H.a(["\\bvery\\b","mega"],t),H.a(["\\bvery\\b ","extra"],t),H.a(["\\bvery\\b","ultra"],t),H.a(["\\bvery\\b","hecka"],t),H.a(["\\bvery\\b","totes"],t)],[[P.H,P.v]])})
lazy($,"tZ","$get$tZ",function(){var t=[P.v]
return H.a([H.a(["\\bgood\\b","good"],t),H.a(["\\bgood\\b","agreeable"],t),H.a(["\\bgood\\b","marvelous"],t),H.a(["\\bgood\\b","ace"],t),H.a(["\\bgood\\b","wonderful"],t),H.a(["\\bgood\\b","sweet"],t),H.a(["\\bgood\\b","dope"],t),H.a(["\\bgood\\b","awesome"],t),H.a(["\\bgood\\b","great"],t),H.a(["\\bgood\\b","radical"],t),H.a(["\\bgood\\b","perfect"],t),H.a(["\\bgood\\b","amazing"],t),H.a(["\\bgood\\b","super good"],t),H.a(["\\bgood\\b","acceptable"],t)],[[P.H,P.v]])})
lazy($,"x_","$get$x_",function(){var t=[P.v]
return H.a([H.a(["asshole","asshat"],t),H.a(["asshole","dickhead"],t),H.a(["asshole","fucknut"],t),H.a(["asshole","pukestain"],t),H.a(["asshole","dirtbag"],t),H.a(["asshole","fuckhead"],t),H.a(["asshole","asshole"],t),H.a(["asshole","dipshit"],t),H.a(["asshole","garbage person"],t),H.a(["asshole","fucker"],t),H.a(["asshole","poopy head"],t),H.a(["asshole","shit sniffer"],t),H.a(["asshole","jerk"],t),H.a(["asshole","douchecanoe"],t),H.a(["asshole","douche"],t),H.a(["asshole","plebeian"],t),H.a(["asshole","fuckstain"],t),H.a(["asshole","douchebag"],t),H.a(["asshole","fuckface"],t),H.a(["asshole","fuckass"],t)],[[P.H,P.v]])})
lazy($,"u4","$get$u4",function(){var t=[P.v]
return H.a([H.a(["lol","lol"],t),H.a(["lol","haha"],t),H.a(["lol","ehehe"],t),H.a(["lol","heh"],t),H.a(["lol","omg lol"],t),H.a(["lol","rofl"],t),H.a(["lol","funny"],t),H.a(["lol"," "],t),H.a(["lol","hee"],t),H.a(["lol","lawl"],t),H.a(["lol","roflcopter"],t),H.a(["lol","..."],t),H.a(["lol","bwahah"],t),H.a(["lol","*giggle*"],t),H.a(["lol",":)"],t)],[[P.H,P.v]])})
lazy($,"u_","$get$u_",function(){var t=[P.v]
return H.a([H.a(["\\bhey\\b","hey"],t),H.a(["\\bhey\\b","hi"],t),H.a(["\\bhey\\b","hello"],t),H.a(["\\bhey\\b","greetings"],t),H.a(["\\bhey\\b","yo"],t),H.a(["\\bhey\\b","sup"],t)],[[P.H,P.v]])})
lazy($,"tU","$get$tU",function(){var t=[P.v]
return H.a([H.a(["dude","guy"],t),H.a(["dude","bro"],t),H.a(["dude","man"],t),H.a(["dude","you"],t),H.a(["dude","friend"],t),H.a(["dude","asshole"],t),H.a(["dude","fella"],t),H.a(["dude","bro"],t)],[[P.H,P.v]])})
lazy($,"tT","$get$tT",function(){var t=[P.v]
return H.a([H.a(["fuck","beep"],t),H.a(["fuck","piss"],t),H.a(["fuck","motherfuck"],t),H.a(["\\bfuck\\b","um"],t),H.a(["\\bfuck\\b","fuck"],t),H.a(["\\bfuck\\b","shit"],t),H.a(["\\bfuck\\b","cocks"],t),H.a(["\\bfuck\\b","nope"],t),H.a(["\\bfuck\\b","goddammit"],t),H.a(["\\bfuck\\b","damn"],t),H.a(["\\bfuck\\b","..."],t),H.a(["\\bfuck\\b","...great."],t),H.a(["\\bfuck\\b","crap"],t),H.a(["\\bfuck\\b","fiddlesticks"],t),H.a(["\\bfuck\\b","darn"],t),H.a(["\\bfuck\\b","dang"],t),H.a(["\\bfuck\\b","omg"],t)],[[P.H,P.v]])})
lazy($,"ud","$get$ud",function(){var t=[P.v]
return H.a([H.a(["\\byes\\b","certainly"],t),H.a(["\\byes\\b","indeed"],t),H.a(["\\byes\\b","yes"],t),H.a(["\\byes\\b","yeppers"],t),H.a(["\\byes\\b","right"],t),H.a(["\\byes\\b","yeah"],t),H.a(["\\byes\\b","yep"],t),H.a(["\\byes\\b","sure"],t),H.a(["\\byes\\b","okay"],t),H.a(["\\byes\\b","hell yes"],t)],[[P.H,P.v]])})
lazy($,"u7","$get$u7",function(){var t=[P.v]
return H.a([H.a(["\\bnope\\b|\\bno\\b","hell no"],t),H.a(["\\bnope\\b|\\bno\\b","absolutely no"],t),H.a(["\\bnope\\b|\\bno\\b","no"],t),H.a(["\\bnope\\b|\\bno\\b","no"],t),H.a(["\\bnope\\b|\\bno\\b","nope"],t),H.a(["\\bnope\\b|\\bno\\b","no way"],t),H.a(["\\bnope\\b|\\bno\\b","nah"],t)],[[P.H,P.v]])})
lazy($,"tW","$get$tW",function(){var t=[P.v]
return H.a([H.a(["friend","bro"],t),H.a(["friend","buddy"],t),H.a(["friend","pal"],t),H.a(["friend","friend"],t),H.a(["friend","compadre"],t),H.a(["friend","comrade"],t),H.a(["friend","best friend"],t),H.a(["friend","homey"],t)],[[P.H,P.v]])})
lazy($,"ua","$get$ua",function(){var t=[P.v]
return H.a([H.a([":\\)",":)"],t),H.a([":\\)",":0)"],t),H.a([":\\)",":]"],t),H.a([":\\)",":B"],t),H.a([":\\)",">: ]"],t),H.a([":\\)",":o)"],t),H.a([":\\)","^_^"],t),H.a([":\\)",";)"],t),H.a([":\\)","~_^"],t),H.a([":\\)","0u0"],t),H.a([":\\)","uwu"],t),H.a([":\\)","\xaf_(\u30c4)_/\xaf "],t),H.a([":\\)",":-)"],t),H.a([":\\)",":3"],t),H.a([":\\)","XD"],t),H.a([":\\)","8D"],t),H.a([":\\)",":>"],t),H.a([":\\)","=]"],t),H.a([":\\)","=}"],t),H.a([":\\)","=)"],t),H.a([":\\)","o->-<"],t)],[[P.H,P.v]])})
lazy($,"u0","$get$u0",function(){return H.a(["#68410a","#fffffe","#000000","#000000","#000000","#f3f28d","#cf6338","#feffd7","#fff3bd","#724107","#382207","#ff5a00","#3f1904","#ffd46d","#473200","#91683c"],[P.v])})
lazy($,"cv","$get$cv",function(){return H.a([],[D.bk])})})()
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
mangledGlobalNames:{N:"int",T:"double",cj:"num",v:"String",cK:"bool",dz:"Null",H:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.cK,args:[[P.H,E.cz]]},{func:1,v:true},{func:1,v:true,args:[P.b5]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,v:true,args:[P.b5],opt:[P.dS]},{func:1,ret:P.v,args:[P.N]},{func:1,ret:W.cB,args:[P.N]},{func:1,ret:W.aj,args:[P.N]},{func:1,ret:P.cK,args:[W.cB,P.v,P.v,W.hA]},{func:1,v:true,args:[,P.dS]},{func:1,ret:P.cK,args:[P.b5]},{func:1,ret:W.cq,args:[P.N]},{func:1,ret:W.fg,args:[P.N]},{func:1,ret:W.fj,args:[P.N]},{func:1,ret:W.ch,args:[P.N]},{func:1,ret:P.v,args:[P.v]},{func:1,ret:P.N,args:[P.bw,P.bw]},{func:1,v:true,args:[D.ds,[Q.bK,N.Y],E.cz,L.dR,A.bI]},{func:1,v:true,args:[P.v]}],
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
setOrUpdateInterceptorsByTag({Client:J.a_,DOMImplementation:J.a_,ImageData:J.a_,MediaError:J.a_,MediaSession:J.a_,PositionError:J.a_,PushMessageData:J.a_,Range:J.a_,WindowClient:J.a_,SVGAnimatedEnumeration:J.a_,SVGAnimatedLength:J.a_,SVGAnimatedLengthList:J.a_,SVGAnimatedNumber:J.a_,SVGAnimatedNumberList:J.a_,SVGAnimatedString:J.a_,WebGLRenderingContext:J.a_,SQLError:J.a_,ArrayBuffer:H.h6,ArrayBufferView:H.f7,DataView:H.mF,Float32Array:H.mG,Float64Array:H.mH,Int16Array:H.mI,Int32Array:H.mJ,Int8Array:H.mK,Uint16Array:H.mL,Uint32Array:H.mM,Uint8ClampedArray:H.iV,CanvasPixelArray:H.iV,Uint8Array:H.hd,HTMLBRElement:W.aV,HTMLCanvasElement:W.aV,HTMLContentElement:W.aV,HTMLDListElement:W.aV,HTMLDataListElement:W.aV,HTMLDetailsElement:W.aV,HTMLDialogElement:W.aV,HTMLHRElement:W.aV,HTMLHeadElement:W.aV,HTMLHeadingElement:W.aV,HTMLHtmlElement:W.aV,HTMLLabelElement:W.aV,HTMLLegendElement:W.aV,HTMLMenuElement:W.aV,HTMLMenuItemElement:W.aV,HTMLModElement:W.aV,HTMLOListElement:W.aV,HTMLOptGroupElement:W.aV,HTMLParagraphElement:W.aV,HTMLPictureElement:W.aV,HTMLPreElement:W.aV,HTMLQuoteElement:W.aV,HTMLShadowElement:W.aV,HTMLSpanElement:W.aV,HTMLStyleElement:W.aV,HTMLTableCaptionElement:W.aV,HTMLTableCellElement:W.aV,HTMLTableDataCellElement:W.aV,HTMLTableHeaderCellElement:W.aV,HTMLTableColElement:W.aV,HTMLTitleElement:W.aV,HTMLUListElement:W.aV,HTMLUnknownElement:W.aV,HTMLDirectoryElement:W.aV,HTMLFontElement:W.aV,HTMLFrameElement:W.aV,HTMLMarqueeElement:W.aV,HTMLElement:W.aV,HTMLAnchorElement:W.eF,HTMLAreaElement:W.k2,HTMLBaseElement:W.ke,Blob:W.hR,HTMLBodyElement:W.eI,HTMLButtonElement:W.eJ,CanvasRenderingContext2D:W.km,CDATASection:W.ec,CharacterData:W.ec,Comment:W.ec,ProcessingInstruction:W.ec,Text:W.ec,CSSStyleDeclaration:W.ee,MSStyleCSSProperties:W.ee,CSS2Properties:W.ee,DeviceLightEvent:W.kA,HTMLDivElement:W.i_,DocumentFragment:W.i0,DOMError:W.i1,FileError:W.i1,DOMException:W.kB,DOMRectReadOnly:W.i2,DOMTokenList:W.i3,Element:W.cB,HTMLEmbedElement:W.kI,ErrorEvent:W.kK,AnimationEvent:W.U,AnimationPlayerEvent:W.U,ApplicationCacheErrorEvent:W.U,AutocompleteErrorEvent:W.U,BeforeInstallPromptEvent:W.U,BeforeUnloadEvent:W.U,BlobEvent:W.U,ClipboardEvent:W.U,CloseEvent:W.U,CompositionEvent:W.U,CustomEvent:W.U,DeviceMotionEvent:W.U,DeviceOrientationEvent:W.U,ExtendableEvent:W.U,ExtendableMessageEvent:W.U,FetchEvent:W.U,FocusEvent:W.U,FontFaceSetLoadEvent:W.U,GamepadEvent:W.U,GeofencingEvent:W.U,HashChangeEvent:W.U,InstallEvent:W.U,KeyboardEvent:W.U,MediaEncryptedEvent:W.U,MediaKeyMessageEvent:W.U,MediaQueryListEvent:W.U,MediaStreamEvent:W.U,MediaStreamTrackEvent:W.U,MessageEvent:W.U,MIDIConnectionEvent:W.U,MIDIMessageEvent:W.U,MouseEvent:W.U,DragEvent:W.U,NotificationEvent:W.U,PageTransitionEvent:W.U,PointerEvent:W.U,PopStateEvent:W.U,PresentationConnectionAvailableEvent:W.U,PresentationConnectionCloseEvent:W.U,ProgressEvent:W.U,PromiseRejectionEvent:W.U,PushEvent:W.U,RelatedEvent:W.U,RTCDataChannelEvent:W.U,RTCDTMFToneChangeEvent:W.U,RTCIceCandidateEvent:W.U,RTCPeerConnectionIceEvent:W.U,SecurityPolicyViolationEvent:W.U,ServicePortConnectEvent:W.U,ServiceWorkerMessageEvent:W.U,SpeechRecognitionEvent:W.U,StorageEvent:W.U,SyncEvent:W.U,TextEvent:W.U,TouchEvent:W.U,TrackEvent:W.U,TransitionEvent:W.U,WebKitTransitionEvent:W.U,UIEvent:W.U,WheelEvent:W.U,ResourceProgressEvent:W.U,USBConnectionEvent:W.U,IDBVersionChangeEvent:W.U,SVGZoomEvent:W.U,AudioProcessingEvent:W.U,OfflineAudioCompletionEvent:W.U,WebGLContextEvent:W.U,Event:W.U,InputEvent:W.U,MessagePort:W.fK,EventTarget:W.fK,HTMLFieldSetElement:W.lo,File:W.cq,FileList:W.ij,HTMLFormElement:W.io,HTMLOptionsCollection:W.eX,HTMLCollection:W.eX,HTMLFormControlsCollection:W.ip,XMLHttpRequest:W.el,XMLHttpRequestEventTarget:W.iq,HTMLIFrameElement:W.lD,HTMLImageElement:W.eY,HTMLInputElement:W.lI,HTMLKeygenElement:W.m5,HTMLLIElement:W.m7,HTMLLinkElement:W.fZ,Location:W.mk,HTMLMapElement:W.mo,HTMLAudioElement:W.h4,HTMLMediaElement:W.h4,HTMLVideoElement:W.h4,MediaStream:W.mt,HTMLMetaElement:W.mu,HTMLMeterElement:W.mw,MIDIOutput:W.mx,MIDIInput:W.h5,MIDIPort:W.h5,Navigator:W.mN,NavigatorUserMediaError:W.mO,Document:W.aj,HTMLDocument:W.aj,XMLDocument:W.aj,Node:W.aj,NodeList:W.he,RadioNodeList:W.he,HTMLObjectElement:W.mS,HTMLOptionElement:W.j3,HTMLOutputElement:W.mU,HTMLParamElement:W.mX,HTMLProgressElement:W.n7,HTMLScriptElement:W.ns,HTMLSelectElement:W.hm,ShadowRoot:W.nz,HTMLSlotElement:W.nG,HTMLSourceElement:W.nJ,SpeechRecognitionAlternative:W.fg,SpeechRecognitionError:W.nM,SpeechRecognitionResult:W.ch,SpeechSynthesisEvent:W.nN,Storage:W.nU,HTMLTableElement:W.ji,HTMLTableRowElement:W.og,HTMLTableSectionElement:W.oh,HTMLTemplateElement:W.hs,HTMLTextAreaElement:W.ol,HTMLTrackElement:W.ot,Window:W.jo,DOMWindow:W.jo,Attr:W.fj,ClientRect:W.p3,DocumentType:W.pa,DOMRect:W.pb,HTMLFrameSetElement:W.pw,NamedNodeMap:W.hD,MozNamedAttrMap:W.hD,ServiceWorker:W.pW,SpeechRecognitionResultList:W.jw,SVGAElement:P.jX,SVGAnimateElement:P.ea,SVGAnimateMotionElement:P.ea,SVGAnimateTransformElement:P.ea,SVGAnimationElement:P.ea,SVGSetElement:P.ea,SVGFEBlendElement:P.kN,SVGFEColorMatrixElement:P.kO,SVGFEComponentTransferElement:P.kP,SVGFECompositeElement:P.kQ,SVGFEConvolveMatrixElement:P.kR,SVGFEDiffuseLightingElement:P.kS,SVGFEDisplacementMapElement:P.kT,SVGFEFloodElement:P.kU,SVGFEGaussianBlurElement:P.kV,SVGFEImageElement:P.kW,SVGFEMergeElement:P.kX,SVGFEMorphologyElement:P.kY,SVGFEOffsetElement:P.kZ,SVGFESpecularLightingElement:P.l_,SVGFETileElement:P.l0,SVGFETurbulenceElement:P.l1,SVGFilterElement:P.lp,SVGCircleElement:P.cr,SVGClipPathElement:P.cr,SVGDefsElement:P.cr,SVGEllipseElement:P.cr,SVGForeignObjectElement:P.cr,SVGGElement:P.cr,SVGGeometryElement:P.cr,SVGLineElement:P.cr,SVGPathElement:P.cr,SVGPolygonElement:P.cr,SVGPolylineElement:P.cr,SVGRectElement:P.cr,SVGSwitchElement:P.cr,SVGGraphicsElement:P.cr,SVGImageElement:P.lE,SVGLength:P.d2,SVGLengthList:P.md,SVGMarkerElement:P.mr,SVGMaskElement:P.ms,SVGNumber:P.d3,SVGNumberList:P.mR,SVGPatternElement:P.n_,SVGScriptElement:P.hl,SVGDescElement:P.c0,SVGDiscardElement:P.c0,SVGFEDistantLightElement:P.c0,SVGFEFuncAElement:P.c0,SVGFEFuncBElement:P.c0,SVGFEFuncGElement:P.c0,SVGFEFuncRElement:P.c0,SVGFEMergeNodeElement:P.c0,SVGFEPointLightElement:P.c0,SVGFESpotLightElement:P.c0,SVGMetadataElement:P.c0,SVGStopElement:P.c0,SVGStyleElement:P.c0,SVGTitleElement:P.c0,SVGComponentTransferFunctionElement:P.c0,SVGElement:P.c0,SVGSVGElement:P.oc,SVGSymbolElement:P.of,SVGTSpanElement:P.ex,SVGTextElement:P.ex,SVGTextPositioningElement:P.ex,SVGTextContentElement:P.ex,SVGTextPathElement:P.on,SVGUseElement:P.oD,SVGViewElement:P.oG,SVGLinearGradientElement:P.hz,SVGRadialGradientElement:P.hz,SVGGradientElement:P.hz,SVGCursorElement:P.pS,SVGFEDropShadowElement:P.pT,SVGMPathElement:P.pU,WebGL2RenderingContext:P.ng})
setOrUpdateLeafTags({Client:true,DOMImplementation:true,ImageData:true,MediaError:true,MediaSession:true,PositionError:true,PushMessageData:true,Range:true,WindowClient:true,SVGAnimatedEnumeration:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedString:true,WebGLRenderingContext:true,SQLError:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLOptGroupElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLQuoteElement:true,HTMLShadowElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTitleElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DeviceLightEvent:true,HTMLDivElement:true,DocumentFragment:false,DOMError:true,FileError:true,DOMException:true,DOMRectReadOnly:false,DOMTokenList:true,Element:false,HTMLEmbedElement:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,NotificationEvent:true,PageTransitionEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,WheelEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,SVGZoomEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,MessagePort:true,EventTarget:false,HTMLFieldSetElement:true,File:true,FileList:true,HTMLFormElement:true,HTMLOptionsCollection:true,HTMLCollection:false,HTMLFormControlsCollection:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:false,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLinkElement:true,Location:true,HTMLMapElement:true,HTMLAudioElement:true,HTMLMediaElement:true,HTMLVideoElement:true,MediaStream:true,HTMLMetaElement:true,HTMLMeterElement:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,Navigator:true,NavigatorUserMediaError:true,Document:true,HTMLDocument:true,XMLDocument:true,Node:false,NodeList:true,RadioNodeList:true,HTMLObjectElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParamElement:true,HTMLProgressElement:true,HTMLScriptElement:true,HTMLSelectElement:true,ShadowRoot:true,HTMLSlotElement:true,HTMLSourceElement:true,SpeechRecognitionAlternative:true,SpeechRecognitionError:true,SpeechRecognitionResult:true,SpeechSynthesisEvent:true,Storage:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTrackElement:true,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DocumentType:true,DOMRect:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFESpecularLightingElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGEllipseElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGScriptElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGFEPointLightElement:true,SVGFESpotLightElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGUseElement:true,SVGViewElement:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,WebGL2RenderingContext:true})
H.iU.$nativeSuperclassTag="ArrayBufferView"
H.h9.$nativeSuperclassTag="ArrayBufferView"
H.hb.$nativeSuperclassTag="ArrayBufferView"
H.h7.$nativeSuperclassTag="ArrayBufferView"
H.ha.$nativeSuperclassTag="ArrayBufferView"
H.hc.$nativeSuperclassTag="ArrayBufferView"
H.h8.$nativeSuperclassTag="ArrayBufferView"})()
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
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.xq(E.up(),b)},[])
else (function(b){H.xq(E.up(),b)})([])})})()
//# sourceMappingURL=AlchemyController.dart.js.map
