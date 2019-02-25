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
a[c]=function(){a[c]=function(){H.ut(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.o2"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.o2"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.o2(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={nz:function nz(a){this.a=a},
e3:function(a,b,c,d){if(!!J.ad(a).$isR)return new H.eH(a,b,[c,d])
return new H.dk(a,b,[c,d])},
f8:function(){return new P.bL("No element")},
rI:function(){return new P.bL("Too few elements")},
fs:function(a,b,c,d){if(c-b<=32)H.tz(a,b,c,d)
else H.ty(a,b,c,d)},
tz:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.aT(a);t<=c;++t){r=s.l(a,t)
q=t
while(!0){if(!(q>b&&J.bu(d.$2(s.l(a,q-1),r),0)))break
p=q-1
s.h(a,q,s.l(a,p))
q=p}s.h(a,q,r)}},
ty:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.b.a2(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.b.a2(a3+a4,2)
p=q-t
o=q+t
n=J.aT(a2)
m=n.l(a2,s)
l=n.l(a2,p)
k=n.l(a2,q)
j=n.l(a2,o)
i=n.l(a2,r)
if(J.bu(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.bu(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.bu(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.bu(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.bu(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.bu(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.bu(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.bu(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.bu(a5.$2(j,i),0)){h=i
i=j
j=h}n.h(a2,s,m)
n.h(a2,q,k)
n.h(a2,r,i)
n.h(a2,p,n.l(a2,a3))
n.h(a2,o,n.l(a2,a4))
g=a3+1
f=a4-1
if(J.am(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=n.l(a2,e)
c=a5.$2(d,l)
b=J.ad(c)
if(b.J(c,0))continue
if(b.aq(c,0)){if(e!==g){n.h(a2,e,n.l(a2,g))
n.h(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.l(a2,f),l)
b=J.cA(c)
if(b.aH(c,0)){--f
continue}else{a=f-1
if(b.aq(c,0)){n.h(a2,e,n.l(a2,g))
a0=g+1
n.h(a2,g,n.l(a2,f))
n.h(a2,f,d)
f=a
g=a0
break}else{n.h(a2,e,n.l(a2,f))
n.h(a2,f,d)
f=a
break}}}}a1=!0}else{for(e=g;e<=f;++e){d=n.l(a2,e)
if(J.fP(a5.$2(d,l),0)){if(e!==g){n.h(a2,e,n.l(a2,g))
n.h(a2,g,d)}++g}else if(J.bu(a5.$2(d,j),0))for(;!0;)if(J.bu(a5.$2(n.l(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.fP(a5.$2(n.l(a2,f),l),0)){n.h(a2,e,n.l(a2,g))
a0=g+1
n.h(a2,g,n.l(a2,f))
n.h(a2,f,d)
g=a0}else{n.h(a2,e,n.l(a2,f))
n.h(a2,f,d)}f=a
break}}a1=!1}b=g-1
n.h(a2,a3,n.l(a2,b))
n.h(a2,b,l)
b=f+1
n.h(a2,a4,n.l(a2,b))
n.h(a2,b,j)
H.fs(a2,a3,g-2,a5)
H.fs(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.am(a5.$2(n.l(a2,g),l),0);)++g
for(;J.am(a5.$2(n.l(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.l(a2,e)
if(J.am(a5.$2(d,l),0)){if(e!==g){n.h(a2,e,n.l(a2,g))
n.h(a2,g,d)}++g}else if(J.am(a5.$2(d,j),0))for(;!0;)if(J.am(a5.$2(n.l(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.fP(a5.$2(n.l(a2,f),l),0)){n.h(a2,e,n.l(a2,g))
a0=g+1
n.h(a2,g,n.l(a2,f))
n.h(a2,f,d)
g=a0}else{n.h(a2,e,n.l(a2,f))
n.h(a2,f,d)}f=a
break}}H.fs(a2,g,f,a5)}else H.fs(a2,g,f,a5)},
R:function R(){},
cO:function cO(){},
fe:function fe(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
dk:function dk(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eH:function eH(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
ff:function ff(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
e4:function e4(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
bC:function bC(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eh:function eh(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eQ:function eQ(){},
fM:function(a,b){var t=a.b_(b)
if(!u.globalState.d.cy)u.globalState.f.b9()
return t},
pE:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.ad(s).$isV)throw H.w(P.n5("Arguments to main must be a List: "+H.q(s)))
u.globalState=new H.m8(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$oG()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.lE(P.nD(null,H.d0),0)
r=P.L
s.z=new H.l(0,null,null,null,null,null,0,[r,H.dt])
s.ch=new H.l(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.m7()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.r5,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.tO)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.bB(null,null,null,r)
p=new H.dn(0,null,!1)
o=new H.dt(s,new H.l(0,null,null,null,null,null,0,[r,H.dn]),q,u.createNewIsolate(),p,new H.bU(H.mW()),new H.bU(H.mW()),!1,!1,[],P.bB(null,null,null,null),null,null,!1,!0,P.bB(null,null,null,null))
q.j(0,0)
o.cC(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.dA(a,{func:1,args:[,]}))o.b_(new H.mX(t,a))
else if(H.dA(a,{func:1,args:[,,]}))o.b_(new H.mY(t,a))
else o.b_(a)
u.globalState.f.b9()},
tO:function(a){var t=P.e2(["command","print","msg",a])
return new H.bP(!0,P.eo(null,P.L)).aa(t)},
r7:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.r8()
return},
r8:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.w(new P.aS("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.w(new P.aS('Cannot extract URI from "'+t+'"'))},
r5:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.d_(!0,[]).aw(b.data)
s=J.aT(t)
switch(s.l(t,"command")){case"start":u.globalState.b=s.l(t,"id")
r=s.l(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.l(t,"args")
o=new H.d_(!0,[]).aw(s.l(t,"msg"))
n=s.l(t,"isSpawnUri")
m=s.l(t,"startPaused")
l=new H.d_(!0,[]).aw(s.l(t,"replyTo"))
s=u.globalState.a++
k=P.L
j=P.bB(null,null,null,k)
i=new H.dn(0,null,!1)
h=new H.dt(s,new H.l(0,null,null,null,null,null,0,[k,H.dn]),j,u.createNewIsolate(),i,new H.bU(H.mW()),new H.bU(H.mW()),!1,!1,[],P.bB(null,null,null,null),null,null,!1,!0,P.bB(null,null,null,null))
j.j(0,0)
h.cC(0,i)
u.globalState.f.a.at(new H.d0(h,new H.iV(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.b9()
break
case"spawn-worker":break
case"message":if(s.l(t,"port")!=null)s.l(t,"port").aA(s.l(t,"msg"))
u.globalState.f.b9()
break
case"close":u.globalState.ch.a0(0,$.$get$oH().l(0,a))
a.terminate()
u.globalState.f.b9()
break
case"log":H.r4(s.l(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.e2(["command","print","msg",t])
k=new H.bP(!0,P.eo(null,P.L)).aa(k)
s.toString
self.postMessage(k)}else P.fO(s.l(t,"msg"))
break
case"error":throw H.w(s.l(t,"msg"))}},
r4:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.e2(["command","log","msg",a])
r=new H.bP(!0,P.eo(null,P.L)).aa(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.aU(q)
t=H.b8(q)
s=P.i9(t)
throw H.w(s)}},
r6:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.p_=$.p_+("_"+s)
$.p0=$.p0+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.aA(["spawned",new H.du(s,r),q,t.r])
r=new H.iW(a,b,c,d,t)
if(e===!0){t.d3(q,q)
u.globalState.f.a.at(new H.d0(t,r,"start isolate"))}else r.$0()},
tE:function(a,b){var t=new H.l9(!0,!1,null)
t.e8(a,b)
return t},
tS:function(a){return new H.d_(!0,[]).aw(new H.bP(!1,P.eo(null,P.L)).aa(a))},
mX:function mX(a,b){this.a=a
this.b=b},
mY:function mY(a,b){this.a=a
this.b=b},
m8:function m8(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
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
dt:function dt(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx){var _=this
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
m1:function m1(a,b){this.a=a
this.b=b},
lE:function lE(a,b){this.a=a
this.b=b},
lF:function lF(a){this.a=a},
d0:function d0(a,b,c){this.a=a
this.b=b
this.c=c},
m7:function m7(){},
iV:function iV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iW:function iW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lw:function lw(){},
du:function du(b,a){this.b=b
this.a=a},
mb:function mb(a,b){this.a=a
this.b=b},
ep:function ep(b,c,a){this.b=b
this.c=c
this.a=a},
dn:function dn(a,b,c){this.a=a
this.b=b
this.c=c},
l9:function l9(a,b,c){this.a=a
this.b=b
this.c=c},
la:function la(a,b){this.a=a
this.b=b},
lb:function lb(a,b){this.a=a
this.b=b},
bU:function bU(a){this.a=a},
bP:function bP(a,b){this.a=a
this.b=b},
d_:function d_(a,b){this.a=a
this.b=b},
ug:function(a){return u.types[a]},
ul:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.ad(a).$isbY},
q:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bb(a)
if(typeof t!=="string")throw H.w(H.b3(a))
return t},
t6:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.k7(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
cs:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
oZ:function(a,b){return b.$1(a)},
rN:function(a,b,c){var t,s,r,q,p,o
H.u8(a)
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.oZ(a,c)
if(3>=t.length)return H.F(t,3)
s=t[3]
if(b<2||b>36)throw H.w(P.bd(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.h.cE(q,o)|32)>r)return H.oZ(a,c)}return parseInt(a,b)},
nH:function(a){var t,s,r,q,p,o,n,m
t=J.ad(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.x||!!J.ad(a).$iscY){p=C.t(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.h.cE(q,0)===36)q=C.h.aD(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.o6(H.fN(a),0,null),u.mangledGlobalNames)},
k0:function(a){return"Instance of '"+H.nH(a)+"'"},
rO:function(a){var t
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.b.bW(t,10))>>>0,56320|t&1023)}throw H.w(P.bd(a,0,1114111,null,null))},
nG:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.w(H.b3(a))
return a[b]},
p1:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.w(H.b3(a))
a[b]=c},
as:function(a){throw H.w(H.b3(a))},
F:function(a,b){if(a==null)J.cB(a)
throw H.w(H.aG(a,b))},
aG:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.c6(!0,b,"index",null)
t=J.cB(a)
if(!(b<0)){if(typeof t!=="number")return H.as(t)
s=b>=t}else s=!0
if(s)return P.iT(b,a,"index",null,t)
return P.fr(b,"index",null)},
b3:function(a){return new P.c6(!0,a,null,null)},
dy:function(a){if(typeof a!=="number")throw H.w(H.b3(a))
return a},
u8:function(a){if(typeof a!=="string")throw H.w(H.b3(a))
return a},
w:function(a){var t
if(a==null)a=new P.ea()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.pG})
t.name=""}else t.toString=H.pG
return t},
pG:function(){return J.bb(this.dartException)},
av:function(a){throw H.w(a)},
bR:function(a){throw H.w(new P.bF(a))},
c3:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.lc(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
ld:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
pd:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
nB:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.j9(a,s,t?null:b.receiver)},
aU:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.mZ(a)
if(a==null)return
if(a instanceof H.dJ)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.bW(r,16)&8191)===10)switch(q){case 438:return t.$1(H.nB(H.q(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.q(s)+" (Error "+q+")"
return t.$1(new H.fk(p,null))}}if(a instanceof TypeError){o=$.$get$p7()
n=$.$get$p8()
m=$.$get$p9()
l=$.$get$pa()
k=$.$get$pe()
j=$.$get$pf()
i=$.$get$pc()
$.$get$pb()
h=$.$get$ph()
g=$.$get$pg()
f=o.ag(s)
if(f!=null)return t.$1(H.nB(s,f))
else{f=n.ag(s)
if(f!=null){f.method="call"
return t.$1(H.nB(s,f))}else{f=m.ag(s)
if(f==null){f=l.ag(s)
if(f==null){f=k.ag(s)
if(f==null){f=j.ag(s)
if(f==null){f=i.ag(s)
if(f==null){f=l.ag(s)
if(f==null){f=h.ag(s)
if(f==null){f=g.ag(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.fk(s,f==null?null:f.method))}}return t.$1(new H.le(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.ft()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.c6(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.ft()
return a},
b8:function(a){var t
if(a instanceof H.dJ)return a.b
if(a==null)return new H.fJ(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.fJ(a,null)},
up:function(a){if(a==null||typeof a!='object')return J.b9(a)
else return H.cs(a)},
ue:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.h(0,a[s],a[r])}return b},
uk:function(a,b,c,d,e,f,g){switch(c){case 0:return H.fM(b,new H.mP(a))
case 1:return H.fM(b,new H.mQ(a,d))
case 2:return H.fM(b,new H.mR(a,d,e))
case 3:return H.fM(b,new H.mS(a,d,e,f))
case 4:return H.fM(b,new H.mT(a,d,e,f,g))}throw H.w(P.i9("Unsupported number of arguments for wrapped closure"))},
eu:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.uk)
a.$identity=t
return t},
qy:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.ad(c).$isV){t.$reflectionInfo=c
r=H.t6(t).r}else r=c
q=d?Object.create(new H.kO().constructor.prototype):Object.create(new H.dF(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.bV
$.bV=J.dB(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.og(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.ug,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.oe:H.n8
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.w("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.og(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
qv:function(a,b,c,d){var t=H.n8
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
og:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.qx(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.qv(s,!q,t,b)
if(s===0){q=$.bV
$.bV=J.dB(q,1)
o="self"+H.q(q)
q="return function(){var "+o+" = this."
p=$.dG
if(p==null){p=H.h3("self")
$.dG=p}return new Function(q+H.q(p)+";return "+o+"."+H.q(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.bV
$.bV=J.dB(q,1)
n+=H.q(q)
q="return function("+n+"){return this."
p=$.dG
if(p==null){p=H.h3("self")
$.dG=p}return new Function(q+H.q(p)+"."+H.q(t)+"("+n+");}")()},
qw:function(a,b,c,d){var t,s
t=H.n8
s=H.oe
switch(b?-1:a){case 0:throw H.w(new H.kb("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
qx:function(a,b){var t,s,r,q,p,o,n,m
t=H.qt()
s=$.od
if(s==null){s=H.h3("receiver")
$.od=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.qw(q,!o,r,b)
if(q===1){s="return function(){return this."+H.q(t)+"."+H.q(r)+"(this."+H.q(s)+");"
o=$.bV
$.bV=J.dB(o,1)
return new Function(s+H.q(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.q(t)+"."+H.q(r)+"(this."+H.q(s)+", "+m+");"
o=$.bV
$.bV=J.dB(o,1)
return new Function(s+H.q(o)+"}")()},
o2:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.ad(c).$isV){c.fixed$length=Array
t=c}else t=c
return H.qy(a,b,t,!!d,e,f)},
n8:function(a){return a.a},
oe:function(a){return a.c},
qt:function(){var t=$.dG
if(t==null){t=H.h3("self")
$.dG=t}return t},
h3:function(a){var t,s,r,q,p
t=new H.dF("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
ur:function(a,b){var t=J.aT(b)
throw H.w(H.qu(H.nH(a),t.bC(b,3,t.gu(b))))},
ew:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.ad(a)[b]
else t=!0
if(t)return a
H.ur(a,b)},
px:function(a){var t=J.ad(a)
return"$S" in t?t.$S():null},
dA:function(a,b){var t
if(a==null)return!1
t=H.px(a)
return t==null?!1:H.o5(t,b)},
qu:function(a,b){return new H.h9("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
ut:function(a){throw H.w(new P.i0(a))},
mW:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
pz:function(a){return u.getIsolateTag(a)},
aD:function(a){return new H.cz(a,null)},
a:function(a,b){a.$ti=b
return a},
fN:function(a){if(a==null)return
return a.$ti},
pA:function(a,b){return H.o8(a["$as"+H.q(b)],H.fN(a))},
an:function(a,b,c){var t=H.pA(a,b)
return t==null?null:t[c]},
v:function(a,b){var t=H.fN(a)
return t==null?null:t[b]},
bQ:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.o6(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.q(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.bQ(t,b)
return H.tU(a,b)}return"unknown-reified-type"},
tU:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.bQ(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.bQ(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.bQ(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.ud(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.bQ(l[j],b)+(" "+H.q(j))}q+="}"}return"("+q+") => "+t},
o6:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.ee("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.T=p+", "
o=a[s]
if(o!=null)q=!1
p=t.T+=H.bQ(o,c)}return q?"":"<"+t.m(0)+">"},
mK:function(a){var t,s
if(a instanceof H.d4){t=H.px(a)
if(t!=null)return H.bQ(t,null)}s=J.ad(a).constructor.builtin$cls
if(a==null)return s
return s+H.o6(a.$ti,0,null)},
o8:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dz:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.fN(a)
s=J.ad(a)
if(s[b]==null)return!1
return H.pu(H.o8(s[d],t),c)},
pu:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.bg(a[s],b[s]))return!1
return!0},
mG:function(a,b,c){return a.apply(b,H.pA(b,c))},
u9:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="ar"||b.builtin$cls==="bK"
if(b==null)return!0
t=H.fN(a)
a=J.ad(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.o5(r.apply(a,null),b)}return H.bg(s,b)},
bg:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="bK")return!0
if('func' in b)return H.o5(a,b)
if('func' in a)return b.builtin$cls==="uz"||b.builtin$cls==="ar"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.bQ(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.pu(H.o8(o,t),r)},
pt:function(a,b,c){var t,s,r,q,p
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
s=a.length
r=b.length
if(c){if(s<r)return!1}else if(s!==r)return!1
for(q=0;q<r;++q){t=a[q]
p=b[q]
if(!(H.bg(t,p)||H.bg(p,t)))return!1}return!0},
u0:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.bg(p,o)||H.bg(o,p)))return!1}return!0},
o5:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.bg(t,s)||H.bg(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.pt(r,q,!1))return!1
if(!H.pt(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.bg(i,h)||H.bg(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.bg(i,h)||H.bg(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.bg(i,h)||H.bg(h,i)))return!1}}return H.u0(a.named,b.named)},
uK:function(a){var t=$.o3
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
uJ:function(a){return H.cs(a)},
uI:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
um:function(a){var t,s,r,q,p,o
t=$.o3.$1(a)
s=$.mH[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.mO[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.ps.$2(a,t)
if(t!=null){s=$.mH[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.mO[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.o7(r)
$.mH[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.mO[t]=r
return r}if(p==="-"){o=H.o7(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.pB(a,r)
if(p==="*")throw H.w(new P.dr(t))
if(u.leafTags[t]===true){o=H.o7(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.pB(a,r)},
pB:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.mU(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
o7:function(a){return J.mU(a,!1,null,!!a.$isbY)},
uo:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.mU(t,!1,null,!!t.$isbY)
else return J.mU(t,c,null,null)},
ui:function(){if(!0===$.o4)return
$.o4=!0
H.uj()},
uj:function(){var t,s,r,q,p,o,n,m
$.mH=Object.create(null)
$.mO=Object.create(null)
H.uh()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.pC.$1(p)
if(o!=null){n=H.uo(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
uh:function(){var t,s,r,q,p,o,n
t=C.z()
t=H.dx(C.A,H.dx(C.B,H.dx(C.r,H.dx(C.r,H.dx(C.D,H.dx(C.C,H.dx(C.E(C.t),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.o3=new H.mL(p)
$.ps=new H.mM(o)
$.pC=new H.mN(n)},
dx:function(a,b){return a(b)||b},
oY:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.w(new P.iJ("Illegal RegExp pattern ("+String(q)+")",a,null))},
us:function(a,b,c){var t
if(typeof b==="string")return a.indexOf(b,c)>=0
else{t=J.ad(b)
if(!!t.$isfd){t=C.h.aD(a,c)
return b.b.test(t)}else{t=t.d6(b,C.h.aD(a,c))
return!t.gV(t)}}},
k7:function k7(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
lc:function lc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fk:function fk(a,b){this.a=a
this.b=b},
j9:function j9(a,b,c){this.a=a
this.b=b
this.c=c},
le:function le(a){this.a=a},
dJ:function dJ(a,b){this.a=a
this.b=b},
mZ:function mZ(a){this.a=a},
fJ:function fJ(a,b){this.a=a
this.b=b},
mP:function mP(a){this.a=a},
mQ:function mQ(a,b){this.a=a
this.b=b},
mR:function mR(a,b,c){this.a=a
this.b=b
this.c=c},
mS:function mS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mT:function mT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d4:function d4(){},
l2:function l2(){},
kO:function kO(){},
dF:function dF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h9:function h9(a){this.a=a},
kb:function kb(a){this.a=a},
cz:function cz(a,b){this.a=a
this.b=b},
l:function l(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
j8:function j8(a){this.a=a},
ji:function ji(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
jj:function jj(a,$ti){this.a=a
this.$ti=$ti},
jk:function jk(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
mL:function mL(a){this.a=a},
mM:function mM(a){this.a=a},
mN:function mN(a){this.a=a},
fd:function fd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ma:function ma(a,b){this.a=a
this.b=b},
lo:function lo(a,b,c){this.a=a
this.b=b
this.c=c},
lp:function lp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kX:function kX(a,b,c){this.a=a
this.b=b
this.c=c},
mt:function mt(a,b,c){this.a=a
this.b=b
this.c=c},
mu:function mu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pl:function(a,b,c){},
rM:function(a,b,c){var t
H.pl(a,b,c)
t=new Uint8Array(a,b)
return t},
dl:function dl(){},
cQ:function cQ(){},
jD:function jD(){},
fg:function fg(){},
fh:function fh(){},
e6:function e6(){},
e8:function e8(){},
fi:function fi(){},
e7:function e7(){},
e9:function e9(){},
jE:function jE(){},
jF:function jF(){},
jG:function jG(){},
jH:function jH(){},
jI:function jI(){},
jJ:function jJ(){},
jK:function jK(){},
fj:function fj(){},
jL:function jL(){},
ud:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
uq:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ad:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.fb.prototype
return J.fa.prototype}if(typeof a=="string")return J.cM.prototype
if(a==null)return J.fc.prototype
if(typeof a=="boolean")return J.j7.prototype
if(a.constructor==Array)return J.cL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cN.prototype
return a}if(a instanceof P.ar)return a
return J.mJ(a)},
mU:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
mJ:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.o4==null){H.ui()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.w(new P.dr("Return interceptor for "+H.q(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$nA()]
if(p!=null)return p
p=H.um(a)
if(p!=null)return p
if(typeof a=="function")return C.F
s=Object.getPrototypeOf(a)
if(s==null)return C.u
if(s===Object.prototype)return C.u
if(typeof q=="function"){Object.defineProperty(q,$.$get$nA(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
aT:function(a){if(typeof a=="string")return J.cM.prototype
if(a==null)return a
if(a.constructor==Array)return J.cL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cN.prototype
return a}if(a instanceof P.ar)return a
return J.mJ(a)},
ev:function(a){if(a==null)return a
if(a.constructor==Array)return J.cL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cN.prototype
return a}if(a instanceof P.ar)return a
return J.mJ(a)},
cA:function(a){if(typeof a=="number")return J.dh.prototype
if(a==null)return a
if(!(a instanceof P.ar))return J.cY.prototype
return a},
mI:function(a){if(typeof a=="number")return J.dh.prototype
if(typeof a=="string")return J.cM.prototype
if(a==null)return a
if(!(a instanceof P.ar))return J.cY.prototype
return a},
uf:function(a){if(typeof a=="string")return J.cM.prototype
if(a==null)return a
if(!(a instanceof P.ar))return J.cY.prototype
return a},
W:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cN.prototype
return a}if(a instanceof P.ar)return a
return J.mJ(a)},
dB:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.mI(a).P(a,b)},
pH:function(a,b){if(typeof a=="number"&&typeof b=="number")return a/b
return J.cA(a).I(a,b)},
am:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ad(a).J(a,b)},
bu:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.cA(a).aH(a,b)},
fP:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.cA(a).aq(a,b)},
n_:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mI(a).X(a,b)},
n0:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ul(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aT(a).l(a,b)},
pI:function(a,b,c,d){return J.W(a).ef(a,b,c,d)},
n1:function(a,b,c,d,e){return J.W(a).eF(a,b,c,d,e)},
pJ:function(a,b,c,d){return J.W(a).eR(a,b,c,d)},
pK:function(a,b,c){return J.W(a).eS(a,b,c)},
pL:function(a,b){return J.W(a).f7(a,b)},
fQ:function(a,b,c){return J.cA(a).F(a,b,c)},
pM:function(a){return J.W(a).da(a)},
fR:function(a,b){return J.mI(a).av(a,b)},
pN:function(a,b){return J.W(a).dc(a,b)},
pO:function(a,b){return J.aT(a).c1(a,b)},
n2:function(a,b,c){return J.aT(a).dd(a,b,c)},
pP:function(a,b){return J.ev(a).ax(a,b)},
fS:function(a){return J.cA(a).G(a)},
pQ:function(a){return J.W(a).gaO(a)},
pR:function(a){return J.W(a).gfe(a)},
ex:function(a){return J.W(a).gab(a)},
pS:function(a){return J.W(a).gfs(a)},
b9:function(a){return J.ad(a).gU(a)},
n3:function(a){return J.W(a).gb6(a)},
bh:function(a){return J.ev(a).gH(a)},
cB:function(a){return J.aT(a).gu(a)},
bi:function(a){return J.W(a).gt(a)},
o9:function(a){return J.W(a).gc8(a)},
pT:function(a){return J.ad(a).gW(a)},
n4:function(a){return J.W(a).gR(a)},
bS:function(a){return J.W(a).gcn(a)},
oa:function(a,b){return J.ev(a).ac(a,b)},
ob:function(a){return J.W(a).fV(a)},
pU:function(a,b){return J.W(a).h2(a,b)},
pV:function(a){return J.cA(a).Z(a)},
pW:function(a){return J.cA(a).h4(a)},
pX:function(a,b){return J.W(a).sev(a,b)},
pY:function(a,b){return J.W(a).saO(a,b)},
pZ:function(a,b){return J.W(a).sa7(a,b)},
ba:function(a,b){return J.W(a).sR(a,b)},
c5:function(a,b){return J.W(a).scn(a,b)},
q_:function(a){return J.W(a).dX(a)},
oc:function(a,b){return J.uf(a).aD(a,b)},
q0:function(a){return J.ev(a).ad(a)},
bb:function(a){return J.ad(a).m(a)},
dC:function(a,b){return J.ev(a).cp(a,b)},
H:function H(){},
j7:function j7(){},
fc:function fc(){},
e1:function e1(){},
jZ:function jZ(){},
cY:function cY(){},
cN:function cN(){},
cL:function cL($ti){this.$ti=$ti},
ny:function ny($ti){this.$ti=$ti},
fX:function fX(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
dh:function dh(){},
fb:function fb(){},
fa:function fa(){},
cM:function cM(){}},P={
tH:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.u1()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.eu(new P.lr(t),1)).observe(s,{childList:true})
return new P.lq(t,s,r)}else if(self.setImmediate!=null)return P.u2()
return P.u3()},
tI:function(a){++u.globalState.f.b
self.scheduleImmediate(H.eu(new P.ls(a),0))},
tJ:function(a){++u.globalState.f.b
self.setImmediate(H.eu(new P.lt(a),0))},
tK:function(a){P.nO(C.p,a)},
nY:function(a,b){P.pk(null,a)
return b.gfu()},
nV:function(a,b){P.pk(a,b)},
nX:function(a,b){J.pN(b,a)},
nW:function(a,b){b.fd(H.aU(a),H.b8(a))},
pk:function(a,b){var t,s,r,q
t=new P.mA(b)
s=new P.mB(b)
r=J.ad(a)
if(!!r.$isaN)a.bX(t,s)
else if(!!r.$isb5)a.ck(t,s)
else{q=new P.aN(0,$.af,null,[null])
q.a=4
q.c=a
q.bX(t,null)}},
o1:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
$.af.toString
return new P.mE(t)},
pn:function(a,b){if(H.dA(a,{func:1,args:[P.bK,P.bK]})){b.toString
return a}else{b.toString
return a}},
n9:function(a){return new P.my(new P.aN(0,$.af,null,[a]),[a])},
tT:function(a,b,c){$.af.toString
a.al(b,c)},
pi:function(a,b){var t,s,r
b.a=1
try{a.ck(new P.lN(b),new P.lO(b))}catch(r){t=H.aU(r)
s=H.b8(r)
P.pD(new P.lP(b,t,s))}},
lM:function(a,b){var t,s,r
for(;a.geG();)a=a.c
t=a.gbN()
s=b.c
if(t){b.c=null
r=b.bl(s)
b.a=a.a
b.c=a.c
P.ds(b,r)}else{b.a=2
b.c=a
a.cU(s)}},
ds:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.ex(p)
n=p.gar()
s.toString
P.es(null,null,s,o,n)}return}for(;b.gbQ()!=null;b=m){m=b.a
b.a=null
P.ds(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.gdi()||b.gdh()){k=b.gf1()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.ex(p)
n=p.gar()
s.toString
P.es(null,null,s,o,n)
return}j=$.af
if(j==null?k!=null:j!==k)$.af=k
else j=null
if(b.gdh())new P.lU(t,r,q,b).$0()
else if(s){if(b.gdi())new P.lT(r,b,l).$0()}else if(b.gfD())new P.lS(t,r,b).$0()
if(j!=null)$.af=j
s=r.b
if(!!J.ad(s).$isb5){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.bl(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.lM(s,i)
return}}i=b.b
b=i.bk()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
tW:function(){var t,s
for(;t=$.dv,t!=null;){$.er=null
s=t.b
$.dv=s
if(s==null)$.eq=null
t.a.$0()}},
tZ:function(){$.nZ=!0
try{P.tW()}finally{$.er=null
$.nZ=!1
if($.dv!=null)$.$get$nS().$1(P.pv())}},
pr:function(a){var t=new P.fB(a,null)
if($.dv==null){$.eq=t
$.dv=t
if(!$.nZ)$.$get$nS().$1(P.pv())}else{$.eq.b=t
$.eq=t}},
tY:function(a){var t,s,r
t=$.dv
if(t==null){P.pr(a)
$.er=$.eq
return}s=new P.fB(a,null)
r=$.er
if(r==null){s.b=t
$.er=s
$.dv=s}else{s.b=r.b
r.b=s
$.er=s
if(s.b==null)$.eq=s}},
pD:function(a){var t=$.af
if(C.f===t){P.dw(null,null,C.f,a)
return}t.toString
P.dw(null,null,t,t.bZ(a,!0))},
uE:function(a,b){return new P.ms(null,a,!1,[b])},
o0:function(a){return},
pm:function(a,b){var t=$.af
t.toString
P.es(null,null,t,a,b)},
tX:function(){},
tR:function(a,b,c){var t=a.br()
if(!!J.ad(t).$isb5&&t!==$.$get$dX())t.bd(new P.mC(b,c))
else b.aK(c)},
tL:function(a,b,c,d,e,f,g){var t,s
t=$.af
s=e?1:0
s=new P.el(a,null,null,null,null,t,s,null,null,[f,g])
s.cA(b,c,d,e,g)
s.eb(a,b,c,d,e,f,g)
return s},
tQ:function(a,b,c){$.af.toString
a.bf(b,c)},
tF:function(a,b){var t=$.af
if(t===C.f){t.toString
return P.nO(a,b)}return P.nO(a,t.bZ(b,!0))},
nO:function(a,b){var t=C.b.a2(a.a,1000)
return H.tE(t<0?0:t,b)},
tG:function(){return $.af},
es:function(a,b,c,d,e){var t={}
t.a=d
P.tY(new P.mD(t,e))},
po:function(a,b,c,d){var t,s
s=$.af
if(s===c)return d.$0()
$.af=c
t=s
try{s=d.$0()
return s}finally{$.af=t}},
pq:function(a,b,c,d,e){var t,s
s=$.af
if(s===c)return d.$1(e)
$.af=c
t=s
try{s=d.$1(e)
return s}finally{$.af=t}},
pp:function(a,b,c,d,e,f){var t,s
s=$.af
if(s===c)return d.$2(e,f)
$.af=c
t=s
try{s=d.$2(e,f)
return s}finally{$.af=t}},
dw:function(a,b,c,d){var t=C.f!==c
if(t)d=c.bZ(d,!(!t||!1))
P.pr(d)},
lr:function lr(a){this.a=a},
lq:function lq(a,b,c){this.a=a
this.b=b
this.c=c},
ls:function ls(a){this.a=a},
lt:function lt(a){this.a=a},
mA:function mA(a){this.a=a},
mB:function mB(a){this.a=a},
mE:function mE(a){this.a=a},
b5:function b5(){},
lA:function lA(){},
my:function my(a,$ti){this.a=a
this.$ti=$ti},
fH:function fH(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
aN:function aN(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
lJ:function lJ(a,b){this.a=a
this.b=b},
lR:function lR(a,b){this.a=a
this.b=b},
lN:function lN(a){this.a=a},
lO:function lO(a){this.a=a},
lP:function lP(a,b,c){this.a=a
this.b=b
this.c=c},
lL:function lL(a,b){this.a=a
this.b=b},
lQ:function lQ(a,b){this.a=a
this.b=b},
lK:function lK(a,b,c){this.a=a
this.b=b
this.c=c},
lU:function lU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lV:function lV(a){this.a=a},
lT:function lT(a,b,c){this.a=a
this.b=b
this.c=c},
lS:function lS(a,b,c){this.a=a
this.b=b
this.c=c},
fB:function fB(a,b){this.a=a
this.b=b},
c2:function c2(){},
kT:function kT(a){this.a=a},
kU:function kU(a,b){this.a=a
this.b=b},
kV:function kV(a,b){this.a=a
this.b=b},
kW:function kW(a,b){this.a=a
this.b=b},
kR:function kR(a,b,c){this.a=a
this.b=b
this.c=c},
kS:function kS(a){this.a=a},
kQ:function kQ(){},
mo:function mo(){},
mq:function mq(a){this.a=a},
mp:function mp(a){this.a=a},
lu:function lu(){},
fC:function fC(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
fD:function fD(a,$ti){this.a=a
this.$ti=$ti},
fE:function fE(x,a,b,c,d,e,f,r,$ti){var _=this
_.x=x
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
bD:function bD(){},
ly:function ly(a,b,c){this.a=a
this.b=b
this.c=c},
lx:function lx(a){this.a=a},
mr:function mr(){},
fF:function fF(){},
ei:function ei(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
lC:function lC(b,c,a){this.b=b
this.c=c
this.a=a},
lB:function lB(){},
mc:function mc(){},
md:function md(a,b){this.a=a
this.b=b},
fK:function fK(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
ms:function ms(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
mC:function mC(a,b){this.a=a
this.b=b},
ek:function ek(){},
el:function el(x,y,a,b,c,d,e,f,r,$ti){var _=this
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
m9:function m9(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
d1:function d1(a,b){this.a=a
this.b=b},
mz:function mz(){},
mD:function mD(a,b){this.a=a
this.b=b},
mg:function mg(){},
mh:function mh(a,b){this.a=a
this.b=b},
mi:function mi(a,b){this.a=a
this.b=b},
mj:function mj(a,b){this.a=a
this.b=b},
tM:function(a,b){var t=a[b]
return t===a?null:t},
nU:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
nT:function(){var t=Object.create(null)
P.nU(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
cp:function(a,b){return new H.l(0,null,null,null,null,null,0,[a,b])},
rJ:function(){return new H.l(0,null,null,null,null,null,0,[null,null])},
e2:function(a){return H.ue(a,new H.l(0,null,null,null,null,null,0,[null,null]))},
eo:function(a,b){return new P.fI(0,null,null,null,null,null,0,[a,b])},
tN:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
k:function(a,b,c,d,e){return new P.lX(0,null,null,null,null,[d,e])},
nx:function(a,b,c){var t,s
if(P.o_(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$et()
s.push(a)
try{P.tV(a,t)}finally{if(0>=s.length)return H.F(s,-1)
s.pop()}s=P.p6(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
f7:function(a,b,c){var t,s,r
if(P.o_(a))return b+"..."+c
t=new P.ee(b)
s=$.$get$et()
s.push(a)
try{r=t
r.T=P.p6(r.gT(),a,", ")}finally{if(0>=s.length)return H.F(s,-1)
s.pop()}s=t
s.T=s.gT()+c
s=t.gT()
return s.charCodeAt(0)==0?s:s},
o_:function(a){var t,s
for(t=0;s=$.$get$et(),t<s.length;++t)if(a===s[t])return!0
return!1},
tV:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.bh(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.v())return
q=H.q(t.gD())
b.push(q)
s+=q.length+2;++r}if(!t.v()){if(r<=5)return
if(0>=b.length)return H.F(b,-1)
p=b.pop()
if(0>=b.length)return H.F(b,-1)
o=b.pop()}else{n=t.gD();++r
if(!t.v()){if(r<=4){b.push(H.q(n))
return}p=H.q(n)
if(0>=b.length)return H.F(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gD();++r
for(;t.v();n=m,m=l){l=t.gD();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.F(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.q(n)
p=H.q(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.F(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
bB:function(a,b,c,d){return new P.m4(0,null,null,null,null,null,0,[d])},
nC:function(a,b){var t,s
t=P.bB(null,null,null,b)
for(s=J.bh(a);s.v();)t.j(0,s.gD())
return t},
rL:function(a){var t,s,r
t={}
if(P.o_(a))return"{...}"
s=new P.ee("")
try{$.$get$et().push(a)
r=s
r.T=r.gT()+"{"
t.a=!0
a.c5(0,new P.jq(t,s))
t=s
t.T=t.gT()+"}"}finally{t=$.$get$et()
if(0>=t.length)return H.F(t,-1)
t.pop()}t=s.gT()
return t.charCodeAt(0)==0?t:t},
nD:function(a,b){var t=new P.jl(null,0,0,0,[b])
t.e5(a,b)
return t},
lX:function lX(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
m_:function m_(a){this.a=a},
lY:function lY(a,$ti){this.a=a
this.$ti=$ti},
lZ:function lZ(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
fI:function fI(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
m4:function m4(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
m5:function m5(a,b,c){this.a=a
this.b=b
this.c=c},
bf:function bf(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
m0:function m0(){},
dg:function dg(){},
f6:function f6(){},
bZ:function bZ(){},
jq:function jq(a,b){this.a=a
this.b=b},
jl:function jl(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
m6:function m6(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
kl:function kl(){},
kk:function kk(){},
p6:function(a,b,c){var t=J.bh(b)
if(!t.v())return a
if(c.length===0){do a+=H.q(t.gD())
while(t.v())}else{a+=H.q(t.gD())
for(;t.v();)a=a+c+H.q(t.gD())}return a},
qC:function(a,b){return J.fR(a,b)},
or:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bb(a)
if(typeof a==="string")return JSON.stringify(a)
return P.qF(a)},
qF:function(a){var t=J.ad(a)
if(!!t.$isd4)return t.m(a)
return H.k0(a)},
n5:function(a){return new P.c6(!1,null,null,a)},
dD:function(a,b,c){return new P.c6(!0,a,b,c)},
fr:function(a,b,c){return new P.fq(null,null,!0,a,b,"Value not in range")},
bd:function(a,b,c,d,e){return new P.fq(b,c,!0,a,d,"Invalid value")},
p4:function(a,b,c,d,e,f){if(0>a||a>c)throw H.w(P.bd(a,0,c,"start",f))
if(a>b||b>c)throw H.w(P.bd(b,a,c,"end",f))
return b},
iT:function(a,b,c,d,e){var t=e!=null?e:J.cB(b)
return new P.iS(b,t,!0,a,c,"Index out of range")},
i9:function(a){return new P.lI(a)},
cq:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.bh(a);s.v();)t.push(s.gD())
if(b)return t
t.fixed$length=Array
return t},
d:function(a,b){var t=P.cq(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
fO:function(a){H.uq(H.q(a))},
t8:function(a,b,c){return new H.fd(a,H.oY(a,!1,!0,!1),null,null)},
c4:function c4(){},
aE:function aE(){},
u:function u(){},
c9:function c9(a){this.a=a},
i5:function i5(){},
i6:function i6(){},
cF:function cF(){},
ea:function ea(){},
c6:function c6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fq:function fq(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
iS:function iS(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
aS:function aS(a){this.a=a},
dr:function dr(a){this.a=a},
bL:function bL(a){this.a=a},
bF:function bF(a){this.a=a},
jT:function jT(){},
ft:function ft(){},
i0:function i0(a){this.a=a},
lI:function lI(a){this.a=a},
iJ:function iJ(a,b,c){this.a=a
this.b=b
this.c=c},
ia:function ia(a,bi,$ti){this.a=a
this.bi=bi
this.$ti=$ti},
L:function L(){},
C:function C(){},
f9:function f9(){},
V:function V(){},
bK:function bK(){},
bE:function bE(){},
ar:function ar(){},
cP:function cP(){},
cx:function cx(){},
D:function D(){},
ee:function ee(T){this.T=T},
pw:function(a){var t,s
t=J.ad(a)
if(!!t.$iscI){s=t.gaf(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.fL(a.data,a.height,a.width)},
ua:function(a){if(a instanceof P.fL)return{data:a.a,height:a.b,width:a.c}
return a},
op:function(){var t=$.on
if(t==null){t=J.n2(window.navigator.userAgent,"Opera",0)
$.on=t}return t},
qE:function(){var t=$.om
if(t==null){t=P.op()!==!0&&J.n2(window.navigator.userAgent,"Trident/",0)
$.om=t}return t},
oq:function(){var t=$.oo
if(t==null){t=P.op()!==!0&&J.n2(window.navigator.userAgent,"WebKit",0)
$.oo=t}return t},
mv:function mv(){},
mx:function mx(a,b){this.a=a
this.b=b},
fL:function fL(a,b,c){this.a=a
this.b=b
this.c=c},
mw:function mw(a,b){this.a=a
this.b=b},
tP:function(a){var t=new P.me(0,0)
t.ed(a)
return t},
en:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
pj:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
t5:function(a,b,c,d,e){var t,s
if(typeof c!=="number")return c.aq()
if(c<0)t=-c*0
else t=c
if(typeof d!=="number")return d.aq()
if(d<0)s=-d*0
else s=d
return new P.cv(a,b,t,s,[e])},
m2:function m2(){},
me:function me(a,b){this.a=a
this.b=b},
cr:function cr(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
mf:function mf(){},
cv:function cv(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
fT:function fT(){},
cC:function cC(){},
ib:function ib(){},
ic:function ic(){},
id:function id(){},
ie:function ie(){},
ig:function ig(){},
ih:function ih(){},
ii:function ii(){},
ij:function ij(){},
ik:function ik(){},
il:function il(){},
im:function im(){},
io:function io(){},
ip:function ip(){},
iq:function iq(){},
ir:function ir(){},
is:function is(){},
it:function it(){},
iu:function iu(){},
iF:function iF(){},
iI:function iI(){},
bI:function bI(){},
cj:function cj(){},
iR:function iR(){},
jr:function jr(){},
js:function js(){},
jY:function jY(){},
k6:function k6(){},
ki:function ki(){},
kZ:function kZ(){},
aR:function aR(){},
l_:function l_(){},
l1:function l1(){},
fx:function fx(){},
l6:function l6(){},
ef:function ef(){},
lf:function lf(){},
lg:function lg(){},
em:function em(){},
mk:function mk(){},
ml:function ml(){},
mm:function mm(){},
cD:function cD(){}},W={
of:function(a,b){var t=document.createElement("canvas")
t.width=b
t.height=a
return t},
qD:function(a,b,c,d){var t,s,r
t=document.createEvent("CustomEvent")
J.pX(t,d)
if(!J.ad(d).$isV)if(!J.ad(d).$isnE){s=d
if(typeof s!=="string"){s=d
s=typeof s==="number"}else s=!0}else s=!0
else s=!0
if(s)try{d=new P.mw([],[]).co(d)
J.n1(t,a,!0,!0,d)}catch(r){H.aU(r)
J.n1(t,a,!0,!0,null)}else J.n1(t,a,!0,!0,null)
return t},
eI:function(a,b){var t,s,r,q,p,o,n
t=a==null?b==null:a===b
s=t||b.tagName==="HTML"
if(a==null||t){if(s)return new P.cr(0,0,[null])
throw H.w(P.n5("Specified element is not a transitive offset parent of this element."))}r=W.eI(a.offsetParent,b)
q=r.a
p=C.c.Z(a.offsetLeft)
if(typeof q!=="number")return q.P()
o=r.b
n=C.c.Z(a.offsetTop)
if(typeof o!=="number")return o.P()
return new P.cr(q+p,o+n,[null])},
aH:function(a){var t,s,r
s=document.createElement("input")
t=s
try{J.pZ(t,a)}catch(r){H.aU(r)}return t},
jS:function(a,b,c,d){var t=new Option(a,b,c,!1)
return t},
m3:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ah:function(a,b,c,d,e){var t=W.u_(new W.lH(c))
t=new W.lG(0,a,b,t,!1,[e])
t.ea(a,b,c,!1,e)
return t},
u_:function(a){var t=$.af
if(t===C.f)return a
return t.f9(a,!0)},
ab:function ab(){},
fV:function fV(){},
fW:function fW(){},
d2:function d2(){},
h2:function h2(){},
h6:function h6(){},
h8:function h8(){},
eA:function eA(){},
cE:function cE(){},
eE:function eE(){},
d5:function d5(){},
eW:function eW(){},
hY:function hY(){},
i_:function i_(){},
eF:function eF(){},
eG:function eG(){},
i1:function i1(){},
ca:function ca(){},
i7:function i7(){},
i8:function i8(){},
y:function y(){},
dI:function dI(){},
iC:function iC(){},
aI:function aI(){},
da:function da(){},
eX:function eX(){},
eY:function eY(){},
eP:function eP(){},
eS:function eS(){},
iP:function iP(){},
cI:function cI(){},
iQ:function iQ(){},
eV:function eV(){},
eb:function eb(){},
jb:function jb(){},
jd:function jd(){},
jh:function jh(){},
jp:function jp(){},
e5:function e5(){},
jt:function jt(){},
ju:function ju(){},
jv:function jv(){},
jw:function jw(){},
jx:function jx(){},
az:function az(){},
jM:function jM(){},
jN:function jN(){},
cR:function cR(){},
jO:function jO(){},
jP:function jP(){},
jR:function jR(){},
jU:function jU(){},
jX:function jX(){},
k2:function k2(){},
kh:function kh(){},
c1:function c1(){},
kn:function kn(){},
kq:function kq(){},
ks:function ks(){},
kt:function kt(){},
kY:function kY(){},
l5:function l5(){},
bN:function bN(){},
fA:function fA(){},
lv:function lv(){},
lz:function lz(){},
lD:function lD(){},
lW:function lW(){},
mn:function mn(){},
fG:function fG(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
ej:function ej(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
lG:function lG(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
lH:function lH(a){this.a=a},
eU:function eU(){},
iG:function iG(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti}},S={fU:function fU(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},jc:function jc(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},jn:function jn(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},jA:function jA(rx,ry,x1,x2,y1,y2,n,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.n=n
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
_.r2=r2},kj:function kj(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id}},L={
n7:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t=P.D
s=A.bv
r=P.L
q=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#00ff00"),!0)
q.i(0,$.a0,L.c("#EFEFEF"),!0)
q.i(0,$.a_,L.c("#DEDEDE"),!0)
q.i(0,$.a8,L.c("#FF2106"),!0)
q.i(0,$.a7,L.c("#B01200"),!0)
q.i(0,$.a2,L.c("#2F2F30"),!0)
q.i(0,$.a3,L.c("#1D1D1D"),!0)
q.i(0,$.a1,L.c("#080808"),!0)
q.i(0,$.Y,L.c("#030303"),!0)
q.i(0,$.a6,L.c("#242424"),!0)
q.i(0,$.a5,L.c("#333333"),!0)
q.i(0,$.a4,L.c("#141414"),!0)
p=[t]
o=P.d(H.a(["Frogs"],p),t)
n=P.d(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),t)
m=P.d(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],p),t)
l=P.d(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],p),t)
k=P.d(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],p),t)
j=E.x
i=[j]
h=P.d(H.a([new E.x($.cV,2,!0),new E.x($.dq,1,!0),new E.x($.cW,-2,!0)],i),j)
g=[X.r,P.u]
f=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.Z,L.c("#FF9B00"),!0)
f.i(0,$.a0,L.c("#FF9B00"),!0)
f.i(0,$.a_,L.c("#FF8700"),!0)
f.i(0,$.a8,L.c("#7F7F7F"),!0)
f.i(0,$.a7,L.c("#727272"),!0)
f.i(0,$.a2,L.c("#A3A3A3"),!0)
f.i(0,$.a3,L.c("#999999"),!0)
f.i(0,$.a1,L.c("#898989"),!0)
f.i(0,$.Y,L.c("#EFEFEF"),!0)
f.i(0,$.a6,L.c("#DBDBDB"),!0)
f.i(0,$.a5,L.c("#C6C6C6"),!0)
f.i(0,$.a4,L.c("#ADADAD"),!0)
e=[A.d3]
d=A.O
f=new N.kr(q,o,n,m,l,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],h,0.5,0,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Space",null,!0,!1,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
f.N(0,"Space",!0,!1)
$.qm=f
f=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.Z,L.c("#ff0000"),!0)
f.i(0,$.a0,L.c("#FF2106"),!0)
f.i(0,$.a_,L.c("#AD1604"),!0)
f.i(0,$.a8,L.c("#030303"),!0)
f.i(0,$.a7,L.c("#242424"),!0)
f.i(0,$.a2,L.c("#510606"),!0)
f.i(0,$.a3,L.c("#3C0404"),!0)
f.i(0,$.a1,L.c("#1F0000"),!0)
f.i(0,$.Y,L.c("#B70D0E"),!0)
f.i(0,$.a6,L.c("#970203"),!0)
f.i(0,$.a5,L.c("#8E1516"),!0)
f.i(0,$.a4,L.c("#640707"),!0)
h=P.d(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],p),t)
k=P.d(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),t)
l=P.d(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],p),t)
m=P.d(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),t)
n=P.d(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],p),t)
o=P.d(H.a([new E.x($.fw,2,!0),new E.x($.cW,1,!0),new E.x($.dp,-2,!0)],i),j)
q=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#FF9B00"),!0)
q.i(0,$.a0,L.c("#FF9B00"),!0)
q.i(0,$.a_,L.c("#FF8700"),!0)
q.i(0,$.a8,L.c("#7F7F7F"),!0)
q.i(0,$.a7,L.c("#727272"),!0)
q.i(0,$.a2,L.c("#A3A3A3"),!0)
q.i(0,$.a3,L.c("#999999"),!0)
q.i(0,$.a1,L.c("#898989"),!0)
q.i(0,$.Y,L.c("#EFEFEF"),!0)
q.i(0,$.a6,L.c("#DBDBDB"),!0)
q.i(0,$.a5,L.c("#C6C6C6"),!0)
q.i(0,$.a4,L.c("#ADADAD"),!0)
q=new N.l8(0.7,f,h,k,l,m,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",n,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],o,0.5,1,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Time",null,!0,!1,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
q.N(1,"Time",!0,!1)
$.qo=q
q=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#3399ff"),!0)
q.i(0,$.a0,L.c("#10E0FF"),!0)
q.i(0,$.a_,L.c("#00A4BB"),!0)
q.i(0,$.a8,L.c("#FEFD49"),!0)
q.i(0,$.a7,L.c("#D6D601"),!0)
q.i(0,$.a2,L.c("#0052F3"),!0)
q.i(0,$.a3,L.c("#0046D1"),!0)
q.i(0,$.a1,L.c("#003396"),!0)
q.i(0,$.Y,L.c("#0087EB"),!0)
q.i(0,$.a6,L.c("#0070ED"),!0)
q.i(0,$.a5,L.c("#006BE1"),!0)
q.i(0,$.a4,L.c("#0054B0"),!0)
o=P.d(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],p),t)
n=P.d(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],p),t)
m=P.d(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],p),t)
l=P.d(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],p),t)
k=P.d(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],t)
h=P.d(H.a([new E.x($.cW,2,!0),new E.x($.be,1,!0),new E.x($.dq,-1,!0),new E.x($.bM,-1,!0),new E.x($.b2,0.05,!1)],i),j)
f=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.Z,L.c("#FF9B00"),!0)
f.i(0,$.a0,L.c("#FF9B00"),!0)
f.i(0,$.a_,L.c("#FF8700"),!0)
f.i(0,$.a8,L.c("#7F7F7F"),!0)
f.i(0,$.a7,L.c("#727272"),!0)
f.i(0,$.a2,L.c("#A3A3A3"),!0)
f.i(0,$.a3,L.c("#999999"),!0)
f.i(0,$.a1,L.c("#898989"),!0)
f.i(0,$.Y,L.c("#EFEFEF"),!0)
f.i(0,$.a6,L.c("#DBDBDB"),!0)
f.i(0,$.a5,L.c("#C6C6C6"),!0)
f.i(0,$.a4,L.c("#ADADAD"),!0)
f=new T.h4(0.3,q,o,n,m,l,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],k,h,0.5,2,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Breath",null,!0,!1,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
f.N(2,"Breath",!0,!1)
$.q3=f
f=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.Z,L.c("#003300"),!0)
f.i(0,$.a0,L.c("#0F0F0F"),!0)
f.i(0,$.a_,L.c("#010101"),!0)
f.i(0,$.a8,L.c("#E8C15E"),!0)
f.i(0,$.a7,L.c("#C7A140"),!0)
f.i(0,$.a2,L.c("#1E211E"),!0)
f.i(0,$.a3,L.c("#141614"),!0)
f.i(0,$.a1,L.c("#0B0D0B"),!0)
f.i(0,$.Y,L.c("#204020"),!0)
f.i(0,$.a6,L.c("#11200F"),!0)
f.i(0,$.a5,L.c("#192C16"),!0)
f.i(0,$.a4,L.c("#121F10"),!0)
h=P.d(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],p),t)
k=P.d(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],p),t)
l=P.d(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],p),t)
m=P.d(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],p),t)
n=P.d(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],p),t)
o=P.d(H.a([new E.x($.cV,2,!0),new E.x($.dp,1,!0),new E.x($.fw,-1,!0),new E.x($.dq,-1,!0),new E.x($.b2,0.01,!1)],i),j)
q=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#FF9B00"),!0)
q.i(0,$.a0,L.c("#FF9B00"),!0)
q.i(0,$.a_,L.c("#FF8700"),!0)
q.i(0,$.a8,L.c("#7F7F7F"),!0)
q.i(0,$.a7,L.c("#727272"),!0)
q.i(0,$.a2,L.c("#A3A3A3"),!0)
q.i(0,$.a3,L.c("#999999"),!0)
q.i(0,$.a1,L.c("#898989"),!0)
q.i(0,$.Y,L.c("#EFEFEF"),!0)
q.i(0,$.a6,L.c("#DBDBDB"),!0)
q.i(0,$.a5,L.c("#C6C6C6"),!0)
q.i(0,$.a4,L.c("#ADADAD"),!0)
q=new U.i3(1,f,h,k,l,m,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,n,o,0.5,3,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Doom",null,!0,!1,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
q.N(3,"Doom",!0,!1)
$.q4=q
q=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#993300"),!0)
q.i(0,$.a0,L.c("#BA1016"),!0)
q.i(0,$.a_,L.c("#820B0F"),!0)
q.i(0,$.a8,L.c("#381B76"),!0)
q.i(0,$.a7,L.c("#1E0C47"),!0)
q.i(0,$.a2,L.c("#290704"),!0)
q.i(0,$.a3,L.c("#230200"),!0)
q.i(0,$.a1,L.c("#110000"),!0)
q.i(0,$.Y,L.c("#3D190A"),!0)
q.i(0,$.a6,L.c("#2C1207"),!0)
q.i(0,$.a5,L.c("#5C2913"),!0)
q.i(0,$.a4,L.c("#4C1F0D"),!0)
o=P.d(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],p),t)
n=P.d(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],p),t)
m=P.d(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],p),t)
l=P.d(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],p),t)
k=P.d(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],p),t)
h=P.d(H.a([new E.x($.bM,2,!0),new E.x($.be,1,!0),new E.x($.cV,-2,!0)],i),j)
f=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.Z,L.c("#FF9B00"),!0)
f.i(0,$.a0,L.c("#FF9B00"),!0)
f.i(0,$.a_,L.c("#FF8700"),!0)
f.i(0,$.a8,L.c("#7F7F7F"),!0)
f.i(0,$.a7,L.c("#727272"),!0)
f.i(0,$.a2,L.c("#A3A3A3"),!0)
f.i(0,$.a3,L.c("#999999"),!0)
f.i(0,$.a1,L.c("#898989"),!0)
f.i(0,$.Y,L.c("#EFEFEF"),!0)
f.i(0,$.a6,L.c("#DBDBDB"),!0)
f.i(0,$.a5,L.c("#C6C6C6"),!0)
f.i(0,$.a4,L.c("#ADADAD"),!0)
f=new T.h1(0,q,o,n,m,l,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","tie","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],k,h,0.5,4,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Blood",null,!0,!1,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
f.N(4,"Blood",!0,!1)
$.q2=f
f=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.Z,L.c("#ff3399"),!0)
f.i(0,$.a0,L.c("#BD1864"),!0)
f.i(0,$.a_,L.c("#780F3F"),!0)
f.i(0,$.a8,L.c("#1D572E"),!0)
f.i(0,$.a7,L.c("#11371D"),!0)
f.i(0,$.a2,L.c("#4C1026"),!0)
f.i(0,$.a3,L.c("#3C0D1F"),!0)
f.i(0,$.a1,L.c("#260914"),!0)
f.i(0,$.Y,L.c("#6B0829"),!0)
f.i(0,$.a6,L.c("#4A0818"),!0)
f.i(0,$.a5,L.c("#55142A"),!0)
f.i(0,$.a4,L.c("#3D0E1E"),!0)
h=P.d(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],p),t)
k=P.d(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),t)
l=P.d(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],p),t)
m=P.d(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),t)
n=P.d(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],p),t)
o=P.d(H.a([new E.x($.bM,1,!0),new E.fZ(null,1,!0)],i),j)
q=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#FF9B00"),!0)
q.i(0,$.a0,L.c("#FF9B00"),!0)
q.i(0,$.a_,L.c("#FF8700"),!0)
q.i(0,$.a8,L.c("#7F7F7F"),!0)
q.i(0,$.a7,L.c("#727272"),!0)
q.i(0,$.a2,L.c("#A3A3A3"),!0)
q.i(0,$.a3,L.c("#999999"),!0)
q.i(0,$.a1,L.c("#898989"),!0)
q.i(0,$.Y,L.c("#EFEFEF"),!0)
q.i(0,$.a6,L.c("#DBDBDB"),!0)
q.i(0,$.a5,L.c("#C6C6C6"),!0)
q.i(0,$.a4,L.c("#ADADAD"),!0)
q=new T.iM(f,h,k,l,m,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,n,o,0.5,5,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Heart",null,!0,!1,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
q.N(5,"Heart",!0,!1)
$.q8=q
q=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#3da35a"),!0)
q.i(0,$.a0,L.c("#06FFC9"),!0)
q.i(0,$.a_,L.c("#04A885"),!0)
q.i(0,$.a8,L.c("#6E0E2E"),!0)
q.i(0,$.a7,L.c("#4A0818"),!0)
q.i(0,$.a2,L.c("#1D572E"),!0)
q.i(0,$.a3,L.c("#164524"),!0)
q.i(0,$.a1,L.c("#11371D"),!0)
q.i(0,$.Y,L.c("#3DA35A"),!0)
q.i(0,$.a6,L.c("#2E7A43"),!0)
q.i(0,$.a5,L.c("#3B7E4F"),!0)
q.i(0,$.a4,L.c("#265133"),!0)
o=P.d(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),t)
n=P.d(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),t)
m=P.d(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],p),t)
l=P.d(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],p),t)
k=P.d(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],p),t)
h=P.d(H.a([new E.x($.dp,2,!0),new E.x($.fw,1,!0),new E.x($.cV,-2,!0)],i),j)
f=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.Z,L.c("#FF9B00"),!0)
f.i(0,$.a0,L.c("#FF9B00"),!0)
f.i(0,$.a_,L.c("#FF8700"),!0)
f.i(0,$.a8,L.c("#7F7F7F"),!0)
f.i(0,$.a7,L.c("#727272"),!0)
f.i(0,$.a2,L.c("#A3A3A3"),!0)
f.i(0,$.a3,L.c("#999999"),!0)
f.i(0,$.a1,L.c("#898989"),!0)
f.i(0,$.Y,L.c("#EFEFEF"),!0)
f.i(0,$.a6,L.c("#DBDBDB"),!0)
f.i(0,$.a5,L.c("#C6C6C6"),!0)
f.i(0,$.a4,L.c("#ADADAD"),!0)
f=new V.jz(q,o,n,m,l,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],h,0.5,6,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Mind",null,!0,!1,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
f.N(6,"Mind",!0,!1)
$.qe=f
f=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.Z,L.c("#ff9933"),!0)
f.i(0,$.a0,L.c("#FEFD49"),!0)
f.i(0,$.a_,L.c("#FEC910"),!0)
f.i(0,$.a8,L.c("#10E0FF"),!0)
f.i(0,$.a7,L.c("#00A4BB"),!0)
f.i(0,$.a2,L.c("#FA4900"),!0)
f.i(0,$.a3,L.c("#E94200"),!0)
f.i(0,$.a1,L.c("#C33700"),!0)
f.i(0,$.Y,L.c("#FF8800"),!0)
f.i(0,$.a6,L.c("#D66E04"),!0)
f.i(0,$.a5,L.c("#E76700"),!0)
f.i(0,$.a4,L.c("#CA5B00"),!0)
h=P.d(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],p),t)
k=P.d(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),t)
l=P.d(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],p),t)
m=P.d(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],p),t)
n=P.d(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],p),t)
o=P.d(H.a([new E.x($.ed,2,!0),new E.x($.dp,1,!0),new E.x($.be,-1,!0),new E.x($.dq,-1,!0),new E.x($.b2,0.2,!1)],i),j)
q=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#FF9B00"),!0)
q.i(0,$.a0,L.c("#FF9B00"),!0)
q.i(0,$.a_,L.c("#FF8700"),!0)
q.i(0,$.a8,L.c("#7F7F7F"),!0)
q.i(0,$.a7,L.c("#727272"),!0)
q.i(0,$.a2,L.c("#A3A3A3"),!0)
q.i(0,$.a3,L.c("#999999"),!0)
q.i(0,$.a1,L.c("#898989"),!0)
q.i(0,$.Y,L.c("#EFEFEF"),!0)
q.i(0,$.a6,L.c("#DBDBDB"),!0)
q.i(0,$.a5,L.c("#C6C6C6"),!0)
q.i(0,$.a4,L.c("#ADADAD"),!0)
q=new G.jg(f,h,k,l,m,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",n,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],o,0.5,7,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Light",null,!0,!1,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
q.N(7,"Light",!0,!1)
$.qc=q
q=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#000066"),!0)
q.i(0,$.a0,L.c("#0B1030"),!0)
q.i(0,$.a_,L.c("#04091A"),!0)
q.i(0,$.a8,L.c("#CCC4B5"),!0)
q.i(0,$.a7,L.c("#A89F8D"),!0)
q.i(0,$.a2,L.c("#00164F"),!0)
q.i(0,$.a3,L.c("#00103C"),!0)
q.i(0,$.a1,L.c("#00071A"),!0)
q.i(0,$.Y,L.c("#033476"),!0)
q.i(0,$.a6,L.c("#02285B"),!0)
q.i(0,$.a5,L.c("#004CB2"),!0)
q.i(0,$.a4,L.c("#003E91"),!0)
o=P.d(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],p),t)
n=P.d(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],p),t)
m=P.d(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],p),t)
l=P.d(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],p),t)
k=P.d(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],p),t)
h=P.d(H.a([new E.dE(D.nN(),null,3,!0),new E.dE(D.nN(),null,-1,!0),new E.x($.fw,-1,!0),new E.x($.b2,0.2,!1)],i),j)
f=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.Z,L.c("#FF9B00"),!0)
f.i(0,$.a0,L.c("#FF9B00"),!0)
f.i(0,$.a_,L.c("#FF8700"),!0)
f.i(0,$.a8,L.c("#7F7F7F"),!0)
f.i(0,$.a7,L.c("#727272"),!0)
f.i(0,$.a2,L.c("#A3A3A3"),!0)
f.i(0,$.a3,L.c("#999999"),!0)
f.i(0,$.a1,L.c("#898989"),!0)
f.i(0,$.Y,L.c("#EFEFEF"),!0)
f.i(0,$.a6,L.c("#DBDBDB"),!0)
f.i(0,$.a5,L.c("#C6C6C6"),!0)
f.i(0,$.a4,L.c("#ADADAD"),!0)
f=new Q.lh(q,o,n,m,l,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],h,0.5,8,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Void",null,!0,!1,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
f.N(8,"Void",!0,!1)
$.qp=f
f=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.Z,L.c("#9900cc"),!0)
f.i(0,$.a0,L.c("#974AA7"),!0)
f.i(0,$.a_,L.c("#6B347D"),!0)
f.i(0,$.a8,L.c("#3D190A"),!0)
f.i(0,$.a7,L.c("#2C1207"),!0)
f.i(0,$.a2,L.c("#7C3FBA"),!0)
f.i(0,$.a3,L.c("#6D34A6"),!0)
f.i(0,$.a1,L.c("#592D86"),!0)
f.i(0,$.Y,L.c("#381B76"),!0)
f.i(0,$.a6,L.c("#1E0C47"),!0)
f.i(0,$.a5,L.c("#281D36"),!0)
f.i(0,$.a4,L.c("#1D1526"),!0)
h=P.d(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],p),t)
k=P.d(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),t)
l=P.d(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],p),t)
m=P.d(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],p),t)
n=P.d(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),t)
o=P.d(H.a([new E.x($.cX,2,!0),new E.x($.cW,1,!0),new E.x($.be,-1,!0),new E.x($.bM,-1,!0),new E.x($.b2,0.01,!1)],i),j)
q=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#FF9B00"),!0)
q.i(0,$.a0,L.c("#FF9B00"),!0)
q.i(0,$.a_,L.c("#FF8700"),!0)
q.i(0,$.a8,L.c("#7F7F7F"),!0)
q.i(0,$.a7,L.c("#727272"),!0)
q.i(0,$.a2,L.c("#A3A3A3"),!0)
q.i(0,$.a3,L.c("#999999"),!0)
q.i(0,$.a1,L.c("#898989"),!0)
q.i(0,$.Y,L.c("#EFEFEF"),!0)
q.i(0,$.a6,L.c("#DBDBDB"),!0)
q.i(0,$.a5,L.c("#C6C6C6"),!0)
q.i(0,$.a4,L.c("#ADADAD"),!0)
q=new E.k4(f,h,k,l,m," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",n,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],o,0.5,9,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Rage",null,!0,!1,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
q.N(9,"Rage",!0,!1)
$.qg=q
q=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#ffcc66"),!0)
q.i(0,$.a0,L.c("#FDF9EC"),!0)
q.i(0,$.a_,L.c("#D6C794"),!0)
q.i(0,$.a8,L.c("#164524"),!0)
q.i(0,$.a7,L.c("#06280C"),!0)
q.i(0,$.a2,L.c("#FFC331"),!0)
q.i(0,$.a3,L.c("#F7BB2C"),!0)
q.i(0,$.a1,L.c("#DBA523"),!0)
q.i(0,$.Y,L.c("#FFE094"),!0)
q.i(0,$.a6,L.c("#E8C15E"),!0)
q.i(0,$.a5,L.c("#F6C54A"),!0)
q.i(0,$.a4,L.c("#EDAF0C"),!0)
o=P.d(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],p),t)
n=P.d(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],p),t)
m=P.d(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],p),t)
l=P.d(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],p),t)
k=P.d(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],p),t)
h=P.d(H.a([new E.x($.be,2,!0),new E.x($.ed,1,!0),new E.dE(D.nN(),null,-2,!0)],i),j)
f=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.Z,L.c("#FF9B00"),!0)
f.i(0,$.a0,L.c("#FF9B00"),!0)
f.i(0,$.a_,L.c("#FF8700"),!0)
f.i(0,$.a8,L.c("#7F7F7F"),!0)
f.i(0,$.a7,L.c("#727272"),!0)
f.i(0,$.a2,L.c("#A3A3A3"),!0)
f.i(0,$.a3,L.c("#999999"),!0)
f.i(0,$.a1,L.c("#898989"),!0)
f.i(0,$.Y,L.c("#EFEFEF"),!0)
f.i(0,$.a6,L.c("#DBDBDB"),!0)
f.i(0,$.a5,L.c("#C6C6C6"),!0)
f.i(0,$.a4,L.c("#ADADAD"),!0)
f=new X.iO(q,o,n,m,l,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],k,h,0.5,10,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Hope",null,!0,!1,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
f.N(10,"Hope",!0,!1)
$.q9=f
f=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.Z,L.c("#494132"),!0)
f.i(0,$.a0,L.c("#76C34E"),!0)
f.i(0,$.a_,L.c("#4F8234"),!0)
f.i(0,$.a8,L.c("#00164F"),!0)
f.i(0,$.a7,L.c("#00071A"),!0)
f.i(0,$.a2,L.c("#605542"),!0)
f.i(0,$.a3,L.c("#494132"),!0)
f.i(0,$.a1,L.c("#2D271E"),!0)
f.i(0,$.Y,L.c("#CCC4B5"),!0)
f.i(0,$.a6,L.c("#A89F8D"),!0)
f.i(0,$.a5,L.c("#A29989"),!0)
f.i(0,$.a4,L.c("#918673"),!0)
h=P.d(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],p),t)
k=P.d(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],p),t)
l=P.d(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],p),t)
m=P.d(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],p),t)
n=P.d(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],p),t)
o=P.d(H.a([new E.x($.dq,2,!0),new E.x($.cX,1,!0),new E.x($.cV,-2,!0)],i),j)
q=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#FF9B00"),!0)
q.i(0,$.a0,L.c("#FF9B00"),!0)
q.i(0,$.a_,L.c("#FF8700"),!0)
q.i(0,$.a8,L.c("#7F7F7F"),!0)
q.i(0,$.a7,L.c("#727272"),!0)
q.i(0,$.a2,L.c("#A3A3A3"),!0)
q.i(0,$.a3,L.c("#999999"),!0)
q.i(0,$.a1,L.c("#898989"),!0)
q.i(0,$.Y,L.c("#EFEFEF"),!0)
q.i(0,$.a6,L.c("#DBDBDB"),!0)
q.i(0,$.a5,L.c("#C6C6C6"),!0)
q.i(0,$.a4,L.c("#ADADAD"),!0)
q=new K.jf(f,h,k,l,m,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],n,o,0.5,11,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Life",null,!0,!1,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
q.N(11,"Life",!0,!1)
$.qb=q
q=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#9630BF"),!0)
q.i(0,$.a0,L.c("#cc87e8"),!0)
q.i(0,$.a_,L.c("#9545b7"),!0)
q.i(0,$.a8,L.c("#ae769b"),!0)
q.i(0,$.a7,L.c("#8f577c"),!0)
q.i(0,$.a2,L.c("#9630bf"),!0)
q.i(0,$.a3,L.c("#693773"),!0)
q.i(0,$.a1,L.c("#4c2154"),!0)
q.i(0,$.Y,L.c("#fcf9bd"),!0)
q.i(0,$.a6,L.c("#e0d29e"),!0)
q.i(0,$.a5,L.c("#bdb968"),!0)
q.i(0,$.a4,L.c("#ab9b55"),!0)
o=P.d(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),t)
n=P.d(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),t)
m=P.d(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),t)
l=P.d(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),t)
k=P.d(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),t)
h=P.d(H.a([new E.x($.cV,3,!0),new E.x($.be,-2,!0)],i),j)
f=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.Z,L.c("#FF9B00"),!0)
f.i(0,$.a0,L.c("#FF9B00"),!0)
f.i(0,$.a_,L.c("#FF8700"),!0)
f.i(0,$.a8,L.c("#7F7F7F"),!0)
f.i(0,$.a7,L.c("#727272"),!0)
f.i(0,$.a2,L.c("#A3A3A3"),!0)
f.i(0,$.a3,L.c("#999999"),!0)
f.i(0,$.a1,L.c("#898989"),!0)
f.i(0,$.Y,L.c("#EFEFEF"),!0)
f.i(0,$.a6,L.c("#DBDBDB"),!0)
f.i(0,$.a5,L.c("#C6C6C6"),!0)
f.i(0,$.a4,L.c("#ADADAD"),!0)
f=new Z.i4(q,o,n,m,l,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,k,h,0.5,12,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Dream",null,!1,!1,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
f.N(12,"Dream",!1,!1)
$.q5=f
$.n6=L.q1(255,"Null",!1,!1)
f=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.Z,L.c("#364447"),!0)
f.i(0,$.a0,L.c("#28517b"),!0)
f.i(0,$.a_,L.c("#143D67"),!0)
f.i(0,$.a8,L.c("#E7D7A0"),!0)
f.i(0,$.a7,L.c("#D6A482"),!0)
f.i(0,$.a2,L.c("#A9D5DF"),!0)
f.i(0,$.a3,L.c("#95c1cb"),!0)
f.i(0,$.a1,L.c("#77a3ad"),!0)
f.i(0,$.Y,L.c("#162E33"),!0)
f.i(0,$.a6,L.c("#11292e"),!0)
f.i(0,$.a5,L.c("#021a1f"),!0)
f.i(0,$.a4,L.c("#021015"),!0)
h=P.d(H.a(["Waves","Ocean","Gyms","Pillars","Force","Rocks","Stability","Cliffs","Strength","Surf"],p),t)
k=P.d(H.a(["STANDALONE STRONGMAN","EMPOWERING EMPEROR","MINCEMIGHT"],p),t)
l=P.d(H.a(["Might","Minder","Mainsail","Mastiff","Morpher","Mortician"],p),t)
m=P.d(H.a(["Crash","MIGHT","Endure","Grip","Punch","Wave","Fist"],p),t)
n=P.d(H.a(["Might","Grendel","Heracles","Odysseus","Lancelot","Arthur","Beowulf","Achilles","Samson","Goliath"],p),t)
o=P.d(H.a(["surfing a tsunami wave that appeared just for the occasion","punching out a horde of underlings, one by one","following through with a plan after the circumstances have foiled it and succeeding anyway"],p),t)
q=P.d(H.a(["standing their ground in the face of a difficult foe","performing an unbelievably complex bike stunt","teaching consorts proper weightlifting technique","finally defeating the last of their planet's underlings"],p),t)
c=P.d(H.a(["training for training's sake","renovating a consort village to protect it from natural disasters","defeating powerful underlings by refusing to give in to the pain"],p),t)
b=P.d(H.a([new E.x($.cX,2,!0),new E.x($.dp,-1,!0),new E.x($.cW,-1,!0),new E.x($.be,1,!0)],i),j)
a=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
a.i(0,$.Z,L.c("#FF9B00"),!0)
a.i(0,$.a0,L.c("#FF9B00"),!0)
a.i(0,$.a_,L.c("#FF8700"),!0)
a.i(0,$.a8,L.c("#7F7F7F"),!0)
a.i(0,$.a7,L.c("#727272"),!0)
a.i(0,$.a2,L.c("#A3A3A3"),!0)
a.i(0,$.a3,L.c("#999999"),!0)
a.i(0,$.a1,L.c("#898989"),!0)
a.i(0,$.Y,L.c("#EFEFEF"),!0)
a.i(0,$.a6,L.c("#DBDBDB"),!0)
a.i(0,$.a5,L.c("#C6C6C6"),!0)
a.i(0,$.a4,L.c("#ADADAD"),!0)
a=new L.jy(f,h,k,l,m,"Mantra","A low note is hummed. It is the one Perseverance plays to keep itself going. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",n,o,q,c,b,0.5,13,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Might",null,!1,!1,!1,!1,!0,1,a,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
a.N(13,"Might",!1,!1)
$.qd=a
a=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
a.i(0,$.Z,L.c("#A4C1F4"),!0)
a.i(0,$.a0,L.c("#A4C1F4"),!0)
a.i(0,$.a_,L.c("#95AFDD"),!0)
a.i(0,$.a8,L.c("#FFFFA5"),!0)
a.i(0,$.a7,L.c("#BEBE9E"),!0)
a.i(0,$.a2,L.c("#A4C1F4"),!0)
a.i(0,$.a3,L.c("#95AFDD"),!0)
a.i(0,$.a1,L.c("#88A0CC"),!0)
a.i(0,$.Y,L.c("#D9D2E9"),!0)
a.i(0,$.a6,L.c("#BBB5CA"),!0)
a.i(0,$.a5,L.c("#CCC5DB"),!0)
a.i(0,$.a4,L.c("#A49FB1"),!0)
b=P.d(H.a(["Mist","Steam","Substance","Vapor","Fog","Clouds","Rivers","Humidity"],p),t)
c=P.d(H.a(["HAZE HASTENER","MISTER MASTER","MANY-BODY"],p),t)
q=P.d(H.a(["Moper","Martyr","Manager","Morning","Matter"],p),t)
o=P.d(H.a(["Everything","Encompass","Halation","Mist","Universal","Steamy","Most"],p),t)
n=P.d(H.a(["Mist","Lumo"],p),t)
m=P.d(H.a([new E.x($.cW,2,!0),new E.x($.cX,-1,!0)],i),j)
l=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
l.i(0,$.Z,L.c("#FF9B00"),!0)
l.i(0,$.a0,L.c("#FF9B00"),!0)
l.i(0,$.a_,L.c("#FF8700"),!0)
l.i(0,$.a8,L.c("#7F7F7F"),!0)
l.i(0,$.a7,L.c("#727272"),!0)
l.i(0,$.a2,L.c("#A3A3A3"),!0)
l.i(0,$.a3,L.c("#999999"),!0)
l.i(0,$.a1,L.c("#898989"),!0)
l.i(0,$.Y,L.c("#EFEFEF"),!0)
l.i(0,$.a6,L.c("#DBDBDB"),!0)
l.i(0,$.a5,L.c("#C6C6C6"),!0)
l.i(0,$.a4,L.c("#ADADAD"),!0)
l=new S.jA(a,b,c,q,o,n,"Ensemble","A harmonized chord sounds. It is the one Everybody knows. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",m,0.5,14,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Mist",null,!1,!1,!1,!1,!0,1,l,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
l.N(14,"Mist",!1,!1)
$.qf=l
l=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
l.i(0,$.Z,L.c("#00FFFF"),!0)
l.i(0,$.a0,L.c("#00ffff"),!0)
l.i(0,$.a_,L.c("#009090"),!0)
l.i(0,$.a8,L.c("#FEFEFE"),!0)
l.i(0,$.a7,L.c("#707070"),!0)
l.i(0,$.a2,L.c("#0000FF"),!0)
l.i(0,$.a3,L.c("#0000b3"),!0)
l.i(0,$.a1,L.c("#000080"),!0)
l.i(0,$.Y,L.c("#9900ff"),!0)
l.i(0,$.a6,L.c("#5c0099"),!0)
l.i(0,$.a5,L.c("#00FF00"),!0)
l.i(0,$.a4,L.c("#008000"),!0)
m=P.d(H.a(["Neon","Headaches","Puddles","Drip","Mess","Ice cream","Sweets","Boredom"],p),t)
n=P.d(H.a(["PUDDLE PUMMELLER","FLOOD FINISHER","RAINBRO"],p),t)
o=P.d(H.a(["Rainer","Retriever","Rower","Redux","Rapport"],p),t)
q=P.d(H.a(["Chaos","disorder","puddle","Rain","error","color","Swirl","LOL"],p),t)
c=P.d(H.a(["Rain","Chaac","Tohil","Q'uq'umatz","Tlaloc","Cocijo","Dzahui","Mu'ye","Jaguar","Quiateot","Lono","Indra","Dodola","Dudumitsa","Deng","Mangwe","Oya","Asiaq"],p),t)
b=P.d(H.a([new E.x($.bM,-2,!0),new E.x($.be,-1,!0),new E.x($.ed,3,!0)],i),j)
k=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
k.i(0,$.Z,L.c("#FF9B00"),!0)
k.i(0,$.a0,L.c("#FF9B00"),!0)
k.i(0,$.a_,L.c("#FF8700"),!0)
k.i(0,$.a8,L.c("#7F7F7F"),!0)
k.i(0,$.a7,L.c("#727272"),!0)
k.i(0,$.a2,L.c("#A3A3A3"),!0)
k.i(0,$.a3,L.c("#999999"),!0)
k.i(0,$.a1,L.c("#898989"),!0)
k.i(0,$.Y,L.c("#EFEFEF"),!0)
k.i(0,$.a6,L.c("#DBDBDB"),!0)
k.i(0,$.a5,L.c("#C6C6C6"),!0)
k.i(0,$.a4,L.c("#ADADAD"),!0)
k=new L.k5(l,m,n,o,q,"Rudiment","An erratic beat plays. It is the beat Confusion drums. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["rain","chaos","disorder","insanity","discontinuity","distortion"],["rain","raindrop","noisemaker","watercolor","RNG","neon tube","faucet","hose"],b,0.5,15,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Rain",null,!1,!1,!1,!1,!0,1,k,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
k.N(15,"Rain",!1,!1)
$.qh=k
k=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
k.i(0,$.Z,L.c("#b88654"),!0)
k.i(0,$.a0,L.c("#783e05"),!0)
k.i(0,$.a_,L.c("#4a0f00"),!0)
k.i(0,$.a8,L.c("#0b6c6e"),!0)
k.i(0,$.a7,L.c("#005d5e"),!0)
k.i(0,$.a2,L.c("#f5b06c"),!0)
k.i(0,$.a3,L.c("#e6a05e"),!0)
k.i(0,$.a1,L.c("#b87232"),!0)
k.i(0,$.Y,L.c("#ffd966"),!0)
k.i(0,$.a6,L.c("#d1ab3b"),!0)
k.i(0,$.a5,L.c("#7d5e00"),!0)
k.i(0,$.a4,L.c("#6e4f00"),!0)
b=P.d(H.a(["Lies","Beach","Shore","Secrets","Pirates","Suspicion","Corruption","[REDACTED]","Cake"],p),t)
c=P.d(H.a(["MR SANDMAN","CASTLE COORDINATOR","POKER FACADE"],p),t)
q=P.d(H.a(["Strategist","Slider","Sculpter","Scamp","Sleazebag"],p),t)
o=P.d(H.a(["FALSE","Wrong","Sand","Distraction","Ruse","Crumble","abscond","beach","grain","[Data Expunged]"],p),t)
n=P.d(H.a([new E.x($.bM,3,!0),new E.x($.be,-2,!0)],i),j)
m=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
m.i(0,$.Z,L.c("#FF9B00"),!0)
m.i(0,$.a0,L.c("#FF9B00"),!0)
m.i(0,$.a_,L.c("#FF8700"),!0)
m.i(0,$.a8,L.c("#7F7F7F"),!0)
m.i(0,$.a7,L.c("#727272"),!0)
m.i(0,$.a2,L.c("#A3A3A3"),!0)
m.i(0,$.a3,L.c("#999999"),!0)
m.i(0,$.a1,L.c("#898989"),!0)
m.i(0,$.Y,L.c("#EFEFEF"),!0)
m.i(0,$.a6,L.c("#DBDBDB"),!0)
m.i(0,$.a5,L.c("#C6C6C6"),!0)
m.i(0,$.a4,L.c("#ADADAD"),!0)
m=new Y.ke(k,b,c,q,o," BLUH BLUH, ask Cactus to write this. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",n,0.5,16,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Sand",null,!1,!1,!1,!1,!0,1,m,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
m.N(16,"Sand",!1,!1)
$.qj=m
m=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
m.i(0,$.Z,L.c("#ff9933"),!0)
m.i(0,$.a0,L.c("#ffffff"),!0)
m.i(0,$.a_,L.c("#999999"),!0)
m.i(0,$.a8,L.c("#ffff00"),!0)
m.i(0,$.a7,L.c("#8f8f00"),!0)
m.i(0,$.a2,L.c("#d1e0e3"),!0)
m.i(0,$.a3,L.c("#c5d1d4"),!0)
m.i(0,$.a1,L.c("#b7c2c4"),!0)
m.i(0,$.Y,L.c("#00ffff"),!0)
m.i(0,$.a6,L.c("#009999"),!0)
m.i(0,$.a5,L.c("#b5b5b5"),!0)
m.i(0,$.a4,L.c("#858585"),!0)
q=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#FF9B00"),!0)
q.i(0,$.a0,L.c("#FF9B00"),!0)
q.i(0,$.a_,L.c("#FF8700"),!0)
q.i(0,$.a8,L.c("#7F7F7F"),!0)
q.i(0,$.a7,L.c("#727272"),!0)
q.i(0,$.a2,L.c("#A3A3A3"),!0)
q.i(0,$.a3,L.c("#999999"),!0)
q.i(0,$.a1,L.c("#898989"),!0)
q.i(0,$.Y,L.c("#EFEFEF"),!0)
q.i(0,$.a6,L.c("#DBDBDB"),!0)
q.i(0,$.a5,L.c("#C6C6C6"),!0)
q.i(0,$.a4,L.c("#ADADAD"),!0)
q=new L.km(m,0.5,17,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Sky",null,!1,!1,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
q.N(17,"Sky",!1,!1)
$.qk=q
q=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#10dede"),!0)
q.i(0,$.a0,L.c("#00ffff"),!0)
q.i(0,$.a_,L.c("#00d1d1"),!0)
q.i(0,$.a8,L.c("#ff0000"),!0)
q.i(0,$.a7,L.c("#d10000"),!0)
q.i(0,$.a2,L.c("#4985e6"),!0)
q.i(0,$.a3,L.c("#3a76d6"),!0)
q.i(0,$.a1,L.c("#2d6ac4"),!0)
q.i(0,$.Y,L.c("#331c73"),!0)
q.i(0,$.a6,L.c("#050045"),!0)
q.i(0,$.a5,L.c("#8d7cc2"),!0)
q.i(0,$.a4,L.c("#7c6db3"),!0)
m=P.d(H.a(["Gel","Ice","Tape","Poetry","Caucophony"],p),t)
o=P.d(H.a(["LIL LYRICIST","ICE CREAMER","COOLER THAN BEING COOL"],p),t)
n=P.d(H.a(["Rhymer","Rapper","Rental","Redux","Rave","Reason"],p),t)
l=P.d(H.a(["Vaporwave","Chill","Ice","Rhyme","Slow"],p),t)
k=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
k.i(0,$.Z,L.c("#FF9B00"),!0)
k.i(0,$.a0,L.c("#FF9B00"),!0)
k.i(0,$.a_,L.c("#FF8700"),!0)
k.i(0,$.a8,L.c("#7F7F7F"),!0)
k.i(0,$.a7,L.c("#727272"),!0)
k.i(0,$.a2,L.c("#A3A3A3"),!0)
k.i(0,$.a3,L.c("#999999"),!0)
k.i(0,$.a1,L.c("#898989"),!0)
k.i(0,$.Y,L.c("#EFEFEF"),!0)
k.i(0,$.a6,L.c("#DBDBDB"),!0)
k.i(0,$.a5,L.c("#C6C6C6"),!0)
k.i(0,$.a4,L.c("#ADADAD"),!0)
k=new Z.k8(q,m,o,n,l,"Rap","BLUH BLUH, Ask Cactus to write this. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",0.5,18,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Rhyme",null,!1,!1,!1,!1,!0,1,k,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
k.N(18,"Rhyme",!1,!1)
$.qi=k
k=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
k.i(0,$.Z,L.c("#c42eff"),!0)
k.i(0,$.a0,L.c("a703ff"),!0)
k.i(0,$.a_,L.c("#9800f0"),!0)
k.i(0,$.a8,L.c("#fcf9bd"),!0)
k.i(0,$.a7,L.c("#e0d29e"),!0)
k.i(0,$.a2,L.c("#9900ff"),!0)
k.i(0,$.a3,L.c("#8800f0"),!0)
k.i(0,$.a1,L.c("#7800e0"),!0)
k.i(0,$.Y,L.c("#b3a7d4"),!0)
k.i(0,$.a6,L.c("#a599c4"),!0)
k.i(0,$.a5,L.c("#a64e78"),!0)
k.i(0,$.a4,L.c("#963f66"),!0)
q=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#FF9B00"),!0)
q.i(0,$.a0,L.c("#FF9B00"),!0)
q.i(0,$.a_,L.c("#FF8700"),!0)
q.i(0,$.a8,L.c("#7F7F7F"),!0)
q.i(0,$.a7,L.c("#727272"),!0)
q.i(0,$.a2,L.c("#A3A3A3"),!0)
q.i(0,$.a3,L.c("#999999"),!0)
q.i(0,$.a1,L.c("#898989"),!0)
q.i(0,$.Y,L.c("#EFEFEF"),!0)
q.i(0,$.a6,L.c("#DBDBDB"),!0)
q.i(0,$.a5,L.c("#C6C6C6"),!0)
q.i(0,$.a4,L.c("#ADADAD"),!0)
q=new Q.je(k,0.5,19,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Law",null,!1,!1,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
q.N(19,"Law",!1,!1)
$.qa=q
q=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#f0b000"),!0)
q.i(0,$.a0,L.c("#ffd966"),!0)
q.i(0,$.a_,L.c("#f0ca59"),!0)
q.i(0,$.a8,L.c("#ffff00"),!0)
q.i(0,$.a7,L.c("#8f8f00"),!0)
q.i(0,$.a2,L.c("#92c27c"),!0)
q.i(0,$.a3,L.c("#83b36d"),!0)
q.i(0,$.a1,L.c("#74a35f"),!0)
q.i(0,$.Y,L.c("#39751d"),!0)
q.i(0,$.a6,L.c("#2a630e"),!0)
q.i(0,$.a5,L.c("#bd8e00"),!0)
q.i(0,$.a4,L.c("#ad7c00"),!0)
o=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
o.i(0,$.Z,L.c("#FF9B00"),!0)
o.i(0,$.a0,L.c("#FF9B00"),!0)
o.i(0,$.a_,L.c("#FF8700"),!0)
o.i(0,$.a8,L.c("#7F7F7F"),!0)
o.i(0,$.a7,L.c("#727272"),!0)
o.i(0,$.a2,L.c("#A3A3A3"),!0)
o.i(0,$.a3,L.c("#999999"),!0)
o.i(0,$.a1,L.c("#898989"),!0)
o.i(0,$.Y,L.c("#EFEFEF"),!0)
o.i(0,$.a6,L.c("#DBDBDB"),!0)
o.i(0,$.a5,L.c("#C6C6C6"),!0)
o.i(0,$.a4,L.c("#ADADAD"),!0)
o=new L.ix(q,0.5,20,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Fate",null,!1,!1,!1,!1,!0,1,o,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
o.N(20,"Fate",!1,!1)
$.q6=o
o=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
o.i(0,$.Z,L.c("#b2e3eb"),!0)
o.i(0,$.a0,L.c("#fefefe"),!0)
o.i(0,$.a_,L.c("#dfdfdf"),!0)
o.i(0,$.a8,L.c("#00ffff"),!0)
o.i(0,$.a7,L.c("#009090"),!0)
o.i(0,$.a2,L.c("#999999"),!0)
o.i(0,$.a3,L.c("#8a8a8a"),!0)
o.i(0,$.a1,L.c("#7a7a7a"),!0)
o.i(0,$.Y,L.c("#d0e2f2"),!0)
o.i(0,$.a6,L.c("#c3d4e3"),!0)
o.i(0,$.a5,L.c("#b2e3eb"),!0)
o.i(0,$.a4,L.c("#a4d4db"),!0)
q=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#FF9B00"),!0)
q.i(0,$.a0,L.c("#FF9B00"),!0)
q.i(0,$.a_,L.c("#FF8700"),!0)
q.i(0,$.a8,L.c("#7F7F7F"),!0)
q.i(0,$.a7,L.c("#727272"),!0)
q.i(0,$.a2,L.c("#A3A3A3"),!0)
q.i(0,$.a3,L.c("#999999"),!0)
q.i(0,$.a1,L.c("#898989"),!0)
q.i(0,$.Y,L.c("#EFEFEF"),!0)
q.i(0,$.a6,L.c("#DBDBDB"),!0)
q.i(0,$.a5,L.c("#C6C6C6"),!0)
q.i(0,$.a4,L.c("#ADADAD"),!0)
q=new O.ko(2,o,0.5,21,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Snow",null,!1,!1,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
q.N(21,"Snow",!1,!1)
$.ql=q
q=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#ee0000"),!0)
q.i(0,$.a0,L.c("#ff0000"),!0)
q.i(0,$.a_,L.c("#d10000"),!0)
q.i(0,$.a8,L.c("#00ffff"),!0)
q.i(0,$.a7,L.c("#00d1d1"),!0)
q.i(0,$.a2,L.c("#e68f39"),!0)
q.i(0,$.a3,L.c("#d67e2b"),!0)
q.i(0,$.a1,L.c("#c46b1d"),!0)
q.i(0,$.Y,L.c("#e65c00"),!0)
q.i(0,$.a6,L.c("#b82e00"),!0)
q.i(0,$.a5,L.c("#ffd966"),!0)
q.i(0,$.a4,L.c("#d1ab3b"),!0)
o=P.d(H.a(["Fire","Track","Mercury","Heat","Burns","Mixtapes","Spaghetti"],p),t)
n=P.d(H.a(["BURN WARDEN","FIRESTARTER","RAP GOD"],p),t)
m=P.d(H.a(["Flamer","Florist","Friar","Foodie"],p),t)
l=P.d(H.a(["Nightcore","Flow","Sick","Fire","Fast","Sonic","burning","speed"],p),t)
j=P.d(H.a([new E.x($.cW,2,!0),new E.x($.cX,1,!0),new E.x($.bM,-2,!0)],i),j)
k=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
k.i(0,$.Z,L.c("#FF9B00"),!0)
k.i(0,$.a0,L.c("#FF9B00"),!0)
k.i(0,$.a_,L.c("#FF8700"),!0)
k.i(0,$.a8,L.c("#7F7F7F"),!0)
k.i(0,$.a7,L.c("#727272"),!0)
k.i(0,$.a2,L.c("#A3A3A3"),!0)
k.i(0,$.a3,L.c("#999999"),!0)
k.i(0,$.a1,L.c("#898989"),!0)
k.i(0,$.Y,L.c("#EFEFEF"),!0)
k.i(0,$.a6,L.c("#DBDBDB"),!0)
k.i(0,$.a5,L.c("#C6C6C6"),!0)
k.i(0,$.a4,L.c("#ADADAD"),!0)
k=new O.iH(q,o,n,m,l,"Mixtape "," An ill beat is laid down. It's the one that is dropped when the Pimp is in the crib. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",j,0.5,22,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Flow",null,!1,!1,!1,!1,!0,1,k,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
k.N(22,"Flow",!1,!1)
$.q7=k
k=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
k.i(0,$.Z,L.c("#ffff33"),!0)
k.i(0,$.a0,L.c("#ffff00"),!0)
k.i(0,$.a_,L.c("#d1d100"),!0)
k.i(0,$.a8,L.c("#00ffff"),!0)
k.i(0,$.a7,L.c("#009999"),!0)
k.i(0,$.a2,L.c("#0c5494"),!0)
k.i(0,$.a3,L.c("#004785"),!0)
k.i(0,$.a1,L.c("#003b75"),!0)
k.i(0,$.Y,L.c("#20124d"),!0)
k.i(0,$.a6,L.c("#11033d"),!0)
k.i(0,$.a5,L.c("#0c323b"),!0)
k.i(0,$.a4,L.c("#00232b"),!0)
s=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
s.i(0,$.Z,L.c("#FF9B00"),!0)
s.i(0,$.a0,L.c("#FF9B00"),!0)
s.i(0,$.a_,L.c("#FF8700"),!0)
s.i(0,$.a8,L.c("#7F7F7F"),!0)
s.i(0,$.a7,L.c("#727272"),!0)
s.i(0,$.a2,L.c("#A3A3A3"),!0)
s.i(0,$.a3,L.c("#999999"),!0)
s.i(0,$.a1,L.c("#898989"),!0)
s.i(0,$.Y,L.c("#EFEFEF"),!0)
s.i(0,$.a6,L.c("#DBDBDB"),!0)
s.i(0,$.a5,L.c("#C6C6C6"),!0)
s.i(0,$.a4,L.c("#ADADAD"),!0)
d=new U.ku(k,0.5,23,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Stars",null,!1,!1,!1,!1,!0,1,s,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
d.N(23,"Stars",!1,!1)
$.qn=d},
qr:function(a){var t=$.$get$bT()
if(t.gV(t))L.n7()
if($.$get$bT().a4(a))return $.$get$bT().l(0,a)
return $.n6},
qs:function(a){var t,s
t=$.$get$bT()
if(t.gV(t))L.n7()
for(t=$.$get$bT(),t=t.ga9(t),t=t.gH(t);t.v();){s=t.gD()
if(J.am(J.bi(s),a))return s}return $.n6},
qq:function(){var t=$.$get$bT()
t=t.ga9(t)
return new H.bC(t,new L.fY(),[H.an(t,"C",0)])},
q1:function(a,b,c,d){var t,s,r
t=P.D
s=A.bv
r=P.L
r=new L.X(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
r.i(0,$.Z,L.c("#FF9B00"),!0)
r.i(0,$.a0,L.c("#FF9B00"),!0)
r.i(0,$.a_,L.c("#FF8700"),!0)
r.i(0,$.a8,L.c("#7F7F7F"),!0)
r.i(0,$.a7,L.c("#727272"),!0)
r.i(0,$.a2,L.c("#A3A3A3"),!0)
r.i(0,$.a3,L.c("#999999"),!0)
r.i(0,$.a1,L.c("#898989"),!0)
r.i(0,$.Y,L.c("#EFEFEF"),!0)
r.i(0,$.a6,L.c("#DBDBDB"),!0)
r.i(0,$.a5,L.c("#C6C6C6"),!0)
r.i(0,$.a4,L.c("#ADADAD"),!0)
s=[t]
t=new L.c7(0.5,a,new H.l(0,null,null,null,null,null,0,[X.r,P.u]),null,"","",!1,b,null,c,!1,!1,!1,!0,1,r,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.d(H.a(["Blank","Null","Boring","Error"],s),t),P.d(H.a(["Blank","Null","Boring","Error"],s),t),P.d(H.a(["Nothing","Errors","Glitches"],s),t),P.d(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.x]),H.a([],[A.d3]),Q.t(null,null,A.O))
t.N(a,b,c,!1)
return t},
c:function(a){if(C.h.dU(a,"#"))return A.eC(C.h.aD(a,1))
else return A.eC(a)},
fY:function fY(){},
c7:function c7(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
X:function X(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ix:function ix(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
jy:function jy(rx,ry,x1,x2,y1,y2,n,B,C,E,w,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.n=n
_.B=B
_.C=C
_.E=E
_.w=w
_.M=M
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
k5:function k5(rx,ry,x1,x2,y1,y2,n,B,C,E,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.n=n
_.B=B
_.C=C
_.E=E
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
_.r2=r2},
kg:function kg(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
km:function km(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2}},M={h_:function h_(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},hZ:function hZ(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},dK:function dK(){},lm:function lm(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id}},O={h0:function h0(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
qN:function(a,b,c,d){var t,s,r,q
t=document
s=t.createElement("div")
r=W.aH("file")
q=r.style
q.display="none"
q=J.W(r)
q.sdq(r,!0)
q=q.gY(r)
W.ah(q.a,q.b,new O.iD(a,b,r),!1,H.v(q,0))
s.appendChild(r)
t=t.createElement("button")
t.textContent=c
W.ah(t,"click",new O.iE(r),!1,W.az)
s.appendChild(t)
return s},
dW:function dW(){},
iD:function iD(a,b,c){this.a=a
this.b=b
this.c=c},
iE:function iE(a){this.a=a},
ey:function ey(){},
iH:function iH(rx,ry,x1,x2,y1,y2,n,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.n=n
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
_.r2=r2},
ko:function ko(rx,ry,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2}},T={h1:function h1(rx,ry,x1,x2,y1,y2,n,B,C,E,w,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.n=n
_.B=B
_.C=C
_.E=E
_.w=w
_.M=M
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
_.r2=r2},h4:function h4(rx,ry,x1,x2,y1,y2,n,B,C,E,w,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.n=n
_.B=B
_.C=C
_.E=E
_.w=w
_.M=M
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
_.r2=r2},iM:function iM(rx,ry,x1,x2,y1,y2,n,B,C,E,w,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.n=n
_.B=B
_.C=C
_.E=E
_.w=w
_.M=M
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
nL:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[X.r,P.u]
s=A.O
r=[P.D]
q=E.x
p=[q]
o=[A.d3]
n=new S.jc(0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,0.5,"Knight",new H.l(0,null,null,null,null,null,0,t),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.S("Knight",3,!0,!1)
$.tf=n
n=P.d(H.a([new E.x($.b2,0.4,!1)],p),q)
n=new S.kj(["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,n,0.5,"Seer",new H.l(0,null,null,null,null,null,0,t),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.S("Seer",6,!0,!1)
$.tq=n
n=new O.h0(["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],!1,!1,!1,!1,!0,!1,0.5,"Bard",new H.l(0,null,null,null,null,null,0,t),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.S("Bard",9,!0,!1)
$.ta=n
n=new B.iN(0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,0.5,"Heir",new H.l(0,null,null,null,null,null,0,t),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.S("Heir",8,!0,!1)
$.te=n
n=new U.jo(["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,0.5,"Maid",new H.l(0,null,null,null,null,null,0,t),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.S("Maid",0,!0,!1)
$.ti=n
n=new N.k9(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,0.5,"Rogue",new H.l(0,null,null,null,null,null,0,t),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.S("Rogue",4,!0,!1)
$.tm=n
n=new V.jV(0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,0.5,"Page",new H.l(0,null,null,null,null,null,0,t),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.S("Page",1,!0,!1)
$.tk=n
n=new U.l7(["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,0.5,"Thief",new H.l(0,null,null,null,null,null,0,t),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.S("Thief",7,!0,!1)
$.ts=n
n=P.d(H.a([new E.x($.b2,0.1,!1)],p),q)
n=new R.l0(["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,n,0.5,"Sylph",new H.l(0,null,null,null,null,null,0,t),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.S("Sylph",5,!0,!1)
$.tr=n
n=new N.k1(1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,0.5,"Prince",new H.l(0,null,null,null,null,null,0,t),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.S("Prince",10,!0,!1)
$.tl=n
n=P.d(H.a([new E.x($.b2,0.1,!1)],p),q)
n=new M.lm(["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,n,0.5,"Witch",new H.l(0,null,null,null,null,null,0,t),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.S("Witch",11,!0,!1)
$.tu=n
n=P.d(H.a([new E.x($.b2,0.4,!1)],p),q)
n=new S.jn(["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,n,0.5,"Mage",new H.l(0,null,null,null,null,null,0,t),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.S("Mage",2,!0,!1)
$.th=n
n=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],r)
m=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],r)
l=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],r)
k=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],r)
j=P.d(H.a([new E.x($.b2,3,!1),new E.x($.tC,-2,!1)],p),q)
n=new E.li(n,m,l,k,!1,!0,!1,!1,!0,!1,j,0.5,"Waste",new H.l(0,null,null,null,null,null,0,t),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.S("Waste",12,!1,!1)
$.tt=n
n=new Y.kf(["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,0.5,"Scout",new H.l(0,null,null,null,null,null,0,t),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.S("Scout",13,!1,!1)
$.to=n
n=P.d(H.a([new E.x($.b2,0.5,!1)],p),q)
n=new L.kg(["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,n,0.5,"Scribe",new H.l(0,null,null,null,null,null,0,t),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.S("Scribe",15,!1,!1)
$.tp=n
n=P.d(H.a([new E.x($.b2,0.5,!1)],p),q)
n=new E.kd(["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,n,0.5,"Sage",new H.l(0,null,null,null,null,null,0,t),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.S("Sage",14,!1,!1)
$.tn=n
n=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],r)
n=new Y.iL(n,!0,!1,!1,!1,!1,!0,0.5,"Guide",new H.l(0,null,null,null,null,null,0,t),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.S("Guide",16,!1,!1)
$.td=n
n=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],r)
m=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],r)
l=P.d(H.a([new E.x($.b2,3,!1)],p),q)
n=new Y.iK(n,m,!1,!0,!1,!1,!0,!1,l,0.5,"Grace",new H.l(0,null,null,null,null,null,0,t),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.S("Grace",17,!1,!1)
$.tc=n
n=P.d(H.a([new E.x($.b2,0.1,!1)],p),q)
n=new E.jB(["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,n,0.5,"Muse",new H.l(0,null,null,null,null,null,0,t),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.S("Muse",18,!1,!1)
$.tj=n
n=Q.t(null,null,s)
m=P.d(H.a([new E.x($.b2,0.1,!1)],p),q)
n=new Z.jm(2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,n,m,0.5,"Lord",new H.l(0,null,null,null,null,null,0,t),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
n.S("Lord",19,!1,!1)
$.tg=n
$.nK=T.t9("Null",255,!1,!0)
q=P.d(H.a([new E.x($.b2,1.5,!1),new E.x($.cX,3,!1),new E.x($.bM,-0.5,!1)],p),q)
t=new Z.h5(["BROBLERONE","BROTEL RWANDA","BRO-YO MA"],["busting out, and I quote, 'the mad stunts all wicked up-ins'","trying to get hella pumped about houses or some noise","getting mud on their doll's dress or whatever"],["not actually playing the game, but giving it 1.5 out of 5 hats to keep it real","giving a shout out to their boy Dennis who was over the other day","helping their consorts live off the land, for big ups to Mother Earth, yo","getting so wasted. haha, I mean DAMN"],!1,!1,!1,!0,!0,!1,["Brother","Bored","Bugger","Badass","Bothersome"],q,0.1,2,0.5,"Bro",new H.l(0,null,null,null,null,null,0,t),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,s),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],r),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],r),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],r),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],r),H.a([],p),H.a([],o),1)
t.S("Bro",20,!1,!1)
$.tb=t},
tv:function(){var t=$.$get$c0()
t=t.ga9(t)
return new H.bC(t,new T.kc(),[H.an(t,"C",0)])},
tw:function(a){var t=$.$get$c0()
if(t.gV(t))T.nL()
if($.$get$c0().a4(a))return $.$get$c0().l(0,a)
return $.nK},
tx:function(a){var t,s
t=$.$get$c0()
if(t.gV(t))T.nL()
for(t=$.$get$c0(),t=t.ga9(t),t=t.gH(t);t.v();){s=t.gD()
if(J.am(J.bi(s),a))return s}return $.nK},
t9:function(a,b,c,d){var t=[P.D]
t=new T.cw(0.5,a,new H.l(0,null,null,null,null,null,0,[X.r,P.u]),null,null,b,c,d,!1,!1,!1,!1,!1,!1,Q.t(null,null,A.O),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.x]),H.a([],[A.d3]),1)
t.S(a,b,c,d)
return t},
kc:function kc(){},
cw:function cw(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id}},Z={h5:function h5(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,n,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.n=n
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
_.id=id},i4:function i4(rx,ry,x1,x2,y1,y2,n,B,C,E,w,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.n=n
_.B=B
_.C=C
_.E=E
_.w=w
_.M=M
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
_.r2=r2},jm:function jm(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,n,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.n=n
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
_.id=id},k8:function k8(rx,ry,x1,x2,y1,y2,n,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.n=n
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
_.r2=r2}},A={hX:function hX(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
f:function(a,b,c,d,e){var t=new A.O(c,e,a,!1,P.bB(null,null,null,G.N),0,3)
t.e4(a,b,c,!1,e)
return t},
O:function O(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},
j6:function j6(){},
j5:function j5(){},
d3:function d3(){},
bk:function(a,b,c,d){var t=new A.bv(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.e2(a,b,c,d)
return t},
aV:function(a){var t=A.bk(a.gcf(),a.c,a.d,a.a)
if(!a.e){t.aI(a.f,a.r,a.x)
t.e=!1}if(!a.y){t.cw(a.z,a.Q,a.ch)
t.y=!1}return t},
hW:function(a,b,c,d){var t=A.bk(0,0,0,255)
t.b=C.b.F(C.c.G(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.b.F(C.c.G(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.b.F(C.c.G(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.b.F(C.c.G(d*255),0,255)
return t},
ok:function(a,b){if(b){if(typeof a!=="number")return a.cq()
return A.bk((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.cq()
return A.bk((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
eC:function(a){return A.ok(H.rN(a,16,new A.mF()),J.cB(a)>=8)},
bv:function bv(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
mF:function mF(){},
jW:function jW(){},
fl:function fl(){},
t3:function(a){var t=new A.fp(null,null)
t.cz(a)
return t},
fp:function fp(a,b){this.a=a
this.b=b},
un:function(){T.nL()
L.n7()
B.nm()
var t=A.tB()
document.querySelector("#load").appendChild(O.qN($.$get$p5(),t.gf2(),"Load statdata file",!0))},
tB:function(){var t=new A.fv(new F.dj(!0,"Stat Review"),H.a([],[E.aJ]),H.a([],[A.ec]),P.cp(P.D,D.cy))
t.e7()
return t},
tA:function(a,b,c,d,e){var t=new A.ec(a,!0,null,b,c,d,e,null,null,0,0,null,null,null,null)
t.e6(a,b,c,d,e)
return t},
u6:function(a,b,c){var t,s,r,q,p
t=H.a([1,2,5],[P.L])
s=c/(b-a)
for(r=0;!0;){for(q=0;q<3;++q){p=t[q]*Math.pow(10,r)
if(s*p>=25)return p}++r}},
py:function(a){var t,s,r,q,p,o
t=Math.abs(a)
s=H.a(["","K","M","B","T","Q","Qi","Sx"],[P.D])
for(r=0;r<8;r=q){q=r+1
if(t<Math.pow(1000,q)){p=t/Math.pow(1000,r)
o=C.e.ba(p,1)
if(C.h.fq(o,".0"))o=C.b.m(C.e.G(p))
return(a<0?"-":"")+o+s[r]}}return"!!!"},
fv:function fv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kG:function kG(){},
kH:function kH(){},
kI:function kI(){},
kJ:function kJ(a){this.a=a},
kK:function kK(){},
kL:function kL(a){this.a=a},
kM:function kM(a){this.a=a},
kN:function kN(){},
kF:function kF(a){this.a=a},
ec:function ec(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db){var _=this
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
kx:function kx(a){this.a=a},
ky:function ky(a){this.a=a},
kz:function kz(a){this.a=a},
kA:function kA(a){this.a=a},
kB:function kB(a){this.a=a},
kC:function kC(a,b){this.a=a
this.b=b},
kD:function kD(a,b){this.a=a
this.b=b},
kE:function kE(a){this.a=a},
kw:function kw(a){this.a=a}},V={i2:function i2(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},jz:function jz(rx,ry,x1,x2,y1,y2,n,B,C,E,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.n=n
_.B=B
_.C=C
_.E=E
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
_.r2=r2},jV:function jV(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},l4:function l4(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch}},U={i3:function i3(rx,ry,x1,x2,y1,y2,n,B,C,E,w,M,df,c4,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.n=n
_.B=B
_.C=C
_.E=E
_.w=w
_.M=M
_.df=df
_.c4=c4
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
_.r2=r2},iw:function iw(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},jo:function jo(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},b:function b(a){this.a=a},M:function M(b,c,a){this.b=b
this.c=c
this.a=a},ku:function ku(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},l7:function l7(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id}},X={eJ:function eJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},ez:function ez(){},iO:function iO(rx,ry,x1,x2,y1,y2,n,B,C,E,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.n=n
_.B=B
_.C=C
_.E=E
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
_.r2=r2},r:function r(a,b,c){this.a=a
this.b=b
this.c=c}},N={S:function S(){},ja:function ja(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},k1:function k1(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},k9:function k9(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},kp:function kp(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},kr:function kr(rx,ry,x1,x2,y1,y2,n,B,C,E,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.n=n
_.B=B
_.C=C
_.E=E
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
_.r2=r2},l8:function l8(rx,ry,x1,x2,y1,y2,n,B,C,E,w,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.n=n
_.B=B
_.C=C
_.E=E
_.w=w
_.M=M
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
_.r2=r2}},E={eT:function eT(){},jQ:function jQ(){},x:function x(a,b,c){this.a=a
this.b=b
this.c=c},dE:function dE(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},fZ:function fZ(a,b,c){this.a=a
this.b=b
this.c=c},jB:function jB(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},k4:function k4(rx,ry,x1,x2,y1,y2,n,B,C,E,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.n=n
_.B=B
_.C=C
_.E=E
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
_.r2=r2},kd:function kd(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},li:function li(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
qA:function(a,b,c,d,e){var t
if(P.qE()===!0||J.pO(window.navigator.userAgent,$.$get$oj())){$.$get$aO().a5("IE or Edge detected, skipping.")
return}t=[{func:1,ret:A.bv,args:[P.u]}]
t=new E.dH(!1,a,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,H.a([],[W.eb]),!1,H.a([],[E.cG]),H.a([],t),H.a([],[{func:1,ret:A.bv,args:[P.u,P.u]}]),H.a([],t),A.bk(0,0,0,255),null)
b=A.ok(c,!1)
t.fh(b,e,d)
t.c2(0)
t.fF()
t.ds()
$.$get$eB().j(0,t)
E.oi()
return t},
ag:function(a,b,c){var t,s
t=a.style
s=""+c+"px"
t.top=s
s=""+b+"px"
t.left=s},
c8:function(a,b,c,d){a.value=C.c.ba(C.c.F(E.qz(J.bS(a),d),b,c),d)},
qz:function(a,b){var t,s
for(t=a,s=0;s<b;++s){if(typeof t!=="number")return t.X()
t*=10}t=J.pW(t)
for(s=0;s<b;++s)t*=0.1
return t},
d6:function(a,b,c,d,e){var t=new E.cG(new F.dj(!1,"FancySlider"),null,null,null,c,d,a,b,null,e,!1,null,null)
t.e3(a,b,c,d,e)
return t},
oi:function(){if($.oh)return
$.oh=!0
var t=W.az
W.ah(window,"mouseup",new E.hb(),!1,t)
W.ah(window,"mousemove",new E.hc(),!1,t)},
dH:function dH(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,n){var _=this
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
_.n=n},
hE:function hE(a){this.a=a},
hF:function hF(a){this.a=a},
hG:function hG(a){this.a=a},
hO:function hO(a){this.a=a},
hP:function hP(a){this.a=a},
hQ:function hQ(a){this.a=a},
hR:function hR(a){this.a=a},
hS:function hS(a){this.a=a},
hT:function hT(a){this.a=a},
hU:function hU(a){this.a=a},
hV:function hV(a){this.a=a},
hH:function hH(a){this.a=a},
hI:function hI(){},
hJ:function hJ(a){this.a=a},
hK:function hK(a){this.a=a},
hL:function hL(a){this.a=a},
hM:function hM(a){this.a=a},
hN:function hN(a){this.a=a},
hd:function hd(a){this.a=a},
he:function he(){},
hf:function hf(){},
hg:function hg(a){this.a=a},
hr:function hr(a){this.a=a},
hx:function hx(a){this.a=a},
hy:function hy(a){this.a=a},
hz:function hz(a){this.a=a},
hA:function hA(a){this.a=a},
hB:function hB(a){this.a=a},
hC:function hC(a){this.a=a},
hD:function hD(a,b){this.a=a
this.b=b},
hh:function hh(a,b){this.a=a
this.b=b},
hi:function hi(a){this.a=a},
hj:function hj(a){this.a=a},
hk:function hk(a){this.a=a},
hl:function hl(a){this.a=a},
hm:function hm(a){this.a=a},
hn:function hn(a){this.a=a},
ho:function ho(a){this.a=a},
hp:function hp(a){this.a=a},
hq:function hq(a){this.a=a},
hs:function hs(a){this.a=a},
ht:function ht(a){this.a=a},
hu:function hu(a){this.a=a},
hv:function hv(a){this.a=a},
hw:function hw(a){this.a=a},
cG:function cG(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
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
hb:function hb(){},
hc:function hc(){},
aJ:function aJ(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r}},Y={iK:function iK(k1,k2,k3,k4,r1,r2,rx,ry,x1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},iL:function iL(k1,k2,k3,k4,r1,r2,rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},cU:function cU(a,b){this.a=a
this.b=b},bj:function bj(r,c,d,e,f,a,b){var _=this
_.r=r
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},B:function B(c,d,e,f,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},K:function K(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},ap:function ap(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},ha:function ha(c,a,b){this.c=c
this.a=a
this.b=b},at:function at(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},fm:function fm(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},eR:function eR(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},fn:function fn(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},ke:function ke(rx,ry,x1,x2,y1,y2,n,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.n=n
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
_.r2=r2},kf:function kf(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
u7:function(a){var t,s,r,q
t=C.y.hp(a," ")
for(s=t.gH(t),r="";s.v();){q=s.gD()
r+=" "+(H.q(q.l(0,0).hB(0))+H.q(q.aD(0,1)))}return r}},B={iN:function iN(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
nm:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=E.x
s=[t]
r=P.d(H.a([new E.x($.be,1,!0),new E.x($.ed,1,!0)],s),t)
q=[P.D]
p=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],q)
o=H.a(["Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass"],q)
n=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],q)
m=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
h=[X.r,P.u]
g=A.O
i=new F.jC(r,p,o,n,m,!1,l,k,j,i,1,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.t(null,null,g),"loud","musical","Music")
i.q()
i.p()
B.b6(i)
$.qV=i
i=P.d(H.a([new E.x($.dp,-2,!0)],s),t)
j=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],q)
k=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist"],q)
l=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],q)
m=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],q)
n=H.a(["nobody"],q)
o=P.d(H.a([],s),t)
p=H.a(["Nobody"],q)
r=H.a(["Nobody"],q)
r=new S.fU(i,j,k,l,m,!1,n,o,p,r,13,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.t(null,null,g),"nerdy","smart","Academic")
r.q()
r.p()
B.b6(r)
$.qO=r
r=P.d(H.a([new E.x($.cX,2,!0)],s),t)
p=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],q)
o=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler"],q)
n=H.a(["MUSCLES HOARDER","BODY BOOSTER"],q)
m=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new M.h_(r,p,o,n,m,!1,l,k,j,i,4,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.t(null,null,g),"dumb","athletic","Athletic")
r.q()
r.p()
B.b6(r)
$.qP=r
r=P.d(H.a([new E.x($.fw,-1,!0),new E.x($.ed,1,!0)],s),t)
p=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],q)
o=H.a(["Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor"],q)
n=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],q)
m=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new A.hX(r,p,o,n,m,!1,l,k,j,i,0,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.t(null,null,g),"dorky","funny","Comedy")
r.q()
r.p()
B.b6(r)
$.qQ=r
r=P.d(H.a([new E.x($.be,-1,!0),new E.x($.dq,-1,!0)],s),t)
p=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],q)
o=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business"],q)
n=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],q)
m=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new M.hZ(r,p,o,n,m,!1,l,k,j,i,2,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.t(null,null,g),"pretentious","cultured","Culture")
r.q()
r.p()
B.b6(r)
$.qR=r
r=P.d(H.a([new E.x($.be,1,!0),new E.x($.bM,1,!0)],s),t)
p=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],q)
o=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer"],q)
n=H.a(["BATTERBRAT","GRITTY GUARDIAN"],q)
m=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new V.i2(r,p,o,n,m,!1,l,k,j,i,8,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.t(null,null,g),"boring","domestic","Domestic")
r.q()
r.p()
B.b6(r)
$.qS=r
r=P.d(H.a([new E.x($.ed,1,!0),new E.x($.cV,1,!0)],s),t)
p=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],q)
o=H.a(["Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart"],q)
n=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],q)
m=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new U.iw(r,p,o,n,m,!1,l,k,j,i,7,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.t(null,null,g),"whimpy","imaginative","Fantasy")
r.q()
r.p()
B.b6(r)
$.qT=r
r=P.d(H.a([new E.x($.cX,1,!0),new E.x($.dq,1,!0)],s),t)
p=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],q)
o=H.a(["Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel"],q)
n=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],q)
m=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new N.ja(r,p,o,n,m,!1,l,k,j,i,6,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.t(null,null,g),"harsh","fair-minded","Justice")
r.q()
r.p()
B.b6(r)
$.qU=r
r=P.d(H.a([new E.x($.cW,2,!0)],s),t)
p=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],q)
o=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent"],q)
n=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],q)
m=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new G.k_(r,p,o,n,m,!1,l,k,j,i,9,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.t(null,null,g),"frivolous","geeky","PopCulture")
r.q()
r.p()
B.b6(r)
$.qX=r
r=P.d(H.a([new E.x($.bM,2,!0)],s),t)
p=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],q)
o=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team"],q)
n=H.a(["QUESTING CUPID","ROMANCE EXPERT"],q)
m=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new Q.ka(r,p,o,n,m,!1,l,k,j,i,12,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.t(null,null,g),"obsessive","romantic","Romantic")
r.q()
r.p()
B.b6(r)
$.qY=r
r=P.d(H.a([new E.x($.be,2,!0)],s),t)
p=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],q)
o=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally"],q)
n=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],q)
m=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new N.kp(r,p,o,n,m,!1,l,k,j,i,11,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.t(null,null,g),"shallow","extroverted","Social")
r.q()
r.p()
B.b6(r)
$.qZ=r
r=P.d(H.a([new E.x($.bM,-1,!0),new E.x($.be,-1,!0)],s),t)
p=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],q)
o=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod"],q)
n=H.a(["ENEMY #1","JERKWAD JOURNEYER"],q)
m=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new V.l4(r,p,o,n,m,!1,l,k,j,i,5,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.t(null,null,g),"terrible","honest","Terrible")
r.q()
r.p()
B.b6(r)
$.r0=r
r=P.d(H.a([new E.x($.dp,2,!0)],s),t)
p=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],q)
o=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis"],q)
n=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],q)
m=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new F.ln(r,p,o,n,m,!1,l,k,j,i,3,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.t(null,null,g),"wordy","lettered","Writing")
r.q()
r.p()
B.b6(r)
$.r1=r
r=P.d(H.a([new E.x($.cV,2,!0)],s),t)
p=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],q)
o=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data"],q)
n=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],q)
m=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new D.l3(r,p,o,n,m,!1,l,k,j,i,10,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.t(null,null,g),"awkward","techy","Technology")
r.q()
r.p()
B.b6(r)
$.r_=r
r=H.a(["nobody"],q)
t=P.d(H.a([],s),t)
s=H.a(["Nobody"],q)
q=H.a(["Nobody"],q)
t=new B.ck(!0,r,t,s,q,-13,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.t(null,null,g),"","","Null")
t.q()
t.p()
B.b6(t)
$.qW=t},
b6:function(a){if($.$get$bw().a4(a.f))throw H.w("Duplicate aspect id for "+a.m(0)+": "+a.f+" is already registered for "+J.bb($.$get$bw().l(0,a.f))+".")
$.$get$bw().h(0,a.f,a)},
oE:function(a){var t,s
t=$.$get$bw()
if(t.gV(t))B.nm()
if($.$get$bw().a4(a))return $.$get$bw().l(0,a)
t="ERROR: could not find interest category "+a+"  and null is not supported. I have "
s=$.$get$bw()
throw H.w(t+s.gu(s)+" categories")},
oF:function(a){var t,s,r
t=$.$get$bw()
if(t.gV(t))B.nm()
for(t=$.$get$bw(),t=t.ga9(t),t=t.gH(t);t.v();){s=t.gD()
if(J.am(J.bi(s),a))return s}t="ERROR: could not find interest category "+H.q(a)+" and null is not supported. I have "
r=$.$get$bw()
throw H.w(t+r.gu(r)+" categories")},
r2:function(){var t=$.$get$bw()
t=t.ga9(t)
return new H.bC(t,new B.iU(),[H.an(t,"C",0)])},
iU:function iU(){},
ck:function ck(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
h7:function h7(a,b){this.a=a
this.b=b}},Q={je:function je(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},ka:function ka(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},lh:function lh(rx,ry,x1,x2,y1,y2,n,B,C,E,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.n=n
_.B=B
_.C=C
_.E=E
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
_.r2=r2},
t:function(a,b,c){var t=new Q.lk(null,null,[c])
t.e9(a,b,c)
return t},
nQ:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.t(d,null,e)
s=a.gu(a)
C.a.su(t.b,s)
if(H.dz(a,"$isC",[e],"$asC"))if(H.dz(a,"$isbO",[e],"$asbO"))for(s=J.bh(a.gbv()),r=0;s.v();){q=s.gD()
p=t.b
o=p.length
if(r>=o)return H.F(p,r)
p[r]=q;++r}else for(s=a.gH(a),p=[H.v(t,0)],r=0;s.v();){n=s.gD()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.F(o,r)
o[r]=new Q.e(n,m,p);++r}else for(s=a.gH(a),p=[e],o=[H.v(t,0)];s.v();){l=s.gD()
if(H.u9(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.F(m,0)
m[0]=new Q.e(l,k,o)}else if(H.dz(l,"$ise",p,null)){m=t.b
k=m.length
if(0>=k)return H.F(m,0)
m[0]=l}else throw H.w("Invalid entry type "+H.q(J.pT(l))+" for WeightedList<"+H.q(H.aD(H.bQ(e)))+">. Should be "+H.q(H.aD(H.bQ(e)))+" or WeightPair<"+H.q(H.aD(H.bQ(e)))+">.")}return t},
nR:function(a,b,c,d){return new Q.fz(J.oa(a.gbv(),new Q.ll(c,d,b)),null,[c,d])},
bO:function bO(){},
lk:function lk(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
fy:function fy(){},
e:function e(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
cZ:function cZ(){},
eg:function eg(){},
lj:function lj(a,$ti){this.a=a
this.$ti=$ti},
fz:function fz(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
ll:function ll(a,b,c){this.a=a
this.b=b
this.c=c}},K={jf:function jf(rx,ry,x1,x2,y1,y2,n,B,C,E,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.n=n
_.B=B
_.C=C
_.E=E
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
_.r2=r2}},G={jg:function jg(rx,ry,x1,x2,y1,y2,n,B,C,E,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.n=n
_.B=B
_.C=C
_.E=E
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
_.r2=r2},k_:function k_(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},fu:function fu(){},kv:function kv(b,a){this.b=b
this.a=a},
qB:function(a){var t,s,r,q,p,o,n
t=G.N
s=P.nC(a,t)
r=P.bB(null,null,null,t)
q=H.a([],[G.eD])
for(t=G.rH(),p=J.bh(t.a),t=new H.eh(p,t.b,[H.v(t,0)]);t.v();){o=p.gD()
if(o.hc(s))q.push(o)}C.a.dT(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.bR)(q),++n){o=q[n]
if(o.hc(s)){r.j(0,o)
for(p=o.gdY(),p=p.gH(p);p.v();)s.a0(0,p.gD())}}if(s.a!==0)r.bq(0,s)
return r},
rH:function(){var t=$.$get$oV()
t.toString
return new H.bC(t,new G.j4(),[H.v(t,0)])},
N:function N(){},
eD:function eD(){},
j4:function j4(){}},F={jC:function jC(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},ln:function ln(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
rK:function(a,b){return new F.dj(b,a)},
c_:function(a){if(a===C.l){window
return C.j.gab(C.j)}if(a===C.G){window
return C.j.ghg()}if(a===C.H){window
return C.j.gfE()}return P.uc()},
di:function di(a,b){this.a=a
this.b=b},
dj:function dj(a,b){this.a=a
this.b=b}},R={
t2:function(a){var t,s
if(a.gu(a).aH(0,1)){a.l(0,1)
a.l(0,1)
t=!0}else t=!1
s=a.l(0,0)
s.ghn(s).ghz().dl("checking for two players, ps is "+H.q(a)+", ret is "+t)
return t},
rR:function(a){a.ga6(a).gaE()
return!1},
t1:function(a){a.ga6(a).gaE()
return!1},
t0:function(a){a.ga6(a).gaE()
return!1},
t_:function(a){return a.ga6(a).gaX().ghy()},
rY:function(a){return a.ga6(a).gaX().ghw()},
rX:function(a){return a.ga6(a).gaX().ghv()},
rU:function(a){return a.ga6(a).gaX().ght()},
rW:function(a){return a.ga6(a).gaX().ghu()},
rZ:function(a){return a.ga6(a).gaX().ghx()},
rV:function(a){var t=a.ga6(a)
t.gaE()
t.gaE()
return!1},
rS:function(a){return!0},
rT:function(a){var t,s
t=a.ga6(a)
s="is it JR? "+H.q(t.gd9())
t.gd9()
P.fO(s+" false ")
t.gd9()
return!1},
k3:function k3(){},
J:function J(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
G:function G(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
P:function P(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
au:function au(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
l0:function l0(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id}},D={l3:function l3(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
nN:function(){var t=$.$get$nM()
return new H.bC(t,new D.kP(),[H.v(t,0)])},
kP:function kP(){},
cy:function cy(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
var v=[C,H,J,P,W,S,L,M,O,T,Z,A,V,U,X,N,E,Y,B,Q,K,G,F,R,D]
setFunctionNamesIfNecessary(v)
var $={}
H.nz.prototype={}
J.H.prototype={
J:function(a,b){return a===b},
gU:function(a){return H.cs(a)},
m:function(a){return H.k0(a)},
gW:function(a){return new H.cz(H.mK(a),null)}}
J.j7.prototype={
m:function(a){return String(a)},
gU:function(a){return a?519018:218159},
gW:function(a){return C.W},
$isc4:1}
J.fc.prototype={
J:function(a,b){return null==b},
m:function(a){return"null"},
gU:function(a){return 0},
gW:function(a){return C.Q},
$isbK:1}
J.e1.prototype={
gU:function(a){return 0},
gW:function(a){return C.P},
m:function(a){return String(a)},
$isoX:1}
J.jZ.prototype={}
J.cY.prototype={}
J.cN.prototype={
m:function(a){var t=a[$.$get$ol()]
return t==null?this.e_(a):J.bb(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.cL.prototype={
c0:function(a,b){if(!!a.immutable$list)throw H.w(new P.aS(b))},
bs:function(a,b){if(!!a.fixed$length)throw H.w(new P.aS(b))},
j:function(a,b){this.bs(a,"add")
a.push(b)},
a0:function(a,b){var t
this.bs(a,"remove")
for(t=0;t<a.length;++t)if(J.am(a[t],b)){a.splice(t,1)
return!0}return!1},
cp:function(a,b){return new H.bC(a,b,[H.v(a,0)])},
bq:function(a,b){var t
this.bs(a,"addAll")
for(t=J.bh(b);t.v();)a.push(t.gD())},
ac:function(a,b){return new H.e4(a,b,[H.v(a,0),null])},
ax:function(a,b){if(b<0||b>=a.length)return H.F(a,b)
return a[b]},
ga6:function(a){if(a.length>0)return a[0]
throw H.w(H.f8())},
gfL:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.w(H.f8())},
aR:function(a,b,c,d,e){var t,s,r
this.c0(a,"setRange")
P.p4(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.av(P.bd(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.w(H.rI())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r<0||r>=d.length)return H.F(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r<0||r>=d.length)return H.F(d,r)
a[b+s]=d[r]}},
aS:function(a,b){var t
this.c0(a,"sort")
t=b==null?P.ub():b
H.fs(a,0,a.length-1,t)},
dT:function(a){return this.aS(a,null)},
m:function(a){return P.f7(a,"[","]")},
a_:function(a,b){var t=H.a(a.slice(0),[H.v(a,0)])
return t},
ad:function(a){return this.a_(a,!0)},
gH:function(a){return new J.fX(a,a.length,0,null,[H.v(a,0)])},
gU:function(a){return H.cs(a)},
gu:function(a){return a.length},
su:function(a,b){this.bs(a,"set length")
if(b<0)throw H.w(P.bd(b,0,null,"newLength",null))
a.length=b},
l:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.w(H.aG(a,b))
if(b>=a.length||b<0)throw H.w(H.aG(a,b))
return a[b]},
h:function(a,b,c){this.c0(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.w(H.aG(a,b))
if(b>=a.length||b<0)throw H.w(H.aG(a,b))
a[b]=c},
$isbA:1,
$asbA:function(){},
$isV:1,
$asV:null,
$isR:1,
$asR:null,
$isC:1,
$asC:null}
J.ny.prototype={}
J.fX.prototype={
gD:function(){return this.d},
v:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.w(H.bR(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.dh.prototype={
av:function(a,b){var t
if(typeof b!=="number")throw H.w(H.b3(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gb5(b)
if(this.gb5(a)===t)return 0
if(this.gb5(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb5:function(a){return a===0?1/a<0:a<0},
c_:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.w(new P.aS(""+a+".ceil()"))},
G:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.w(new P.aS(""+a+".floor()"))},
Z:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.w(new P.aS(""+a+".round()"))},
h4:function(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
F:function(a,b,c){if(C.b.av(b,c)>0)throw H.w(H.b3(b))
if(this.av(a,b)<0)return b
if(this.av(a,c)>0)return c
return a},
ba:function(a,b){var t
if(b>20)throw H.w(P.bd(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gb5(a))return"-"+t
return t},
hb:function(a,b){var t
if(b<1||b>21)throw H.w(P.bd(b,1,21,"precision",null))
t=a.toPrecision(b)
if(a===0&&this.gb5(a))return"-"+t
return t},
ha:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.w(P.bd(b,2,36,"radix",null))
t=a.toString(b)
if(C.h.fb(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.av(new P.aS("Unexpected toString result: "+t))
r=J.aT(s)
t=r.l(s,1)
q=+r.l(s,3)
if(r.l(s,2)!=null){t+=r.l(s,2)
q-=r.l(s,2).length}return t+C.h.X("0",q)},
m:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gU:function(a){return a&0x1FFFFFFF},
P:function(a,b){if(typeof b!=="number")throw H.w(H.b3(b))
return a+b},
I:function(a,b){if(typeof b!=="number")throw H.w(H.b3(b))
return a/b},
X:function(a,b){return a*b},
cr:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
a2:function(a,b){return(a|0)===a?a/b|0:this.eZ(a,b)},
eZ:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.w(new P.aS("Result of truncating division is "+H.q(t)+": "+H.q(a)+" ~/ "+H.q(b)))},
aj:function(a,b){if(b<0)throw H.w(H.b3(b))
return b>31?0:a<<b>>>0},
eX:function(a,b){return b>31?0:a<<b>>>0},
bW:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
aq:function(a,b){if(typeof b!=="number")throw H.w(H.b3(b))
return a<b},
aH:function(a,b){if(typeof b!=="number")throw H.w(H.b3(b))
return a>b},
gW:function(a){return C.Z},
$isbE:1}
J.fb.prototype={
gW:function(a){return C.Y},
$isu:1,
$isbE:1,
$isL:1}
J.fa.prototype={
gW:function(a){return C.X},
$isu:1,
$isbE:1}
J.cM.prototype={
fb:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.w(H.aG(a,b))
if(b<0)throw H.w(H.aG(a,b))
if(b>=a.length)H.av(H.aG(a,b))
return a.charCodeAt(b)},
cE:function(a,b){if(b>=a.length)throw H.w(H.aG(a,b))
return a.charCodeAt(b)},
bY:function(a,b,c){if(c>b.length)throw H.w(P.bd(c,0,b.length,null,null))
return new H.mt(b,a,c)},
d6:function(a,b){return this.bY(a,b,0)},
P:function(a,b){if(typeof b!=="string")throw H.w(P.dD(b,null,null))
return a+b},
fq:function(a,b){var t,s
t=b.length
s=a.length
if(t>s)return!1
return b===this.aD(a,s-t)},
dV:function(a,b,c){var t
if(c>a.length)throw H.w(P.bd(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
dU:function(a,b){return this.dV(a,b,0)},
bC:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.av(H.b3(c))
if(b<0)throw H.w(P.fr(b,null,null))
if(typeof c!=="number")return H.as(c)
if(b>c)throw H.w(P.fr(b,null,null))
if(c>a.length)throw H.w(P.fr(c,null,null))
return a.substring(b,c)},
aD:function(a,b){return this.bC(a,b,null)},
X:function(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.w(C.v)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
fP:function(a,b,c){var t=b-a.length
if(t<=0)return a
return this.X(c,t)+a},
dd:function(a,b,c){if(b==null)H.av(H.b3(b))
if(c>a.length)throw H.w(P.bd(c,0,a.length,null,null))
return H.us(a,b,c)},
c1:function(a,b){return this.dd(a,b,0)},
av:function(a,b){var t
if(typeof b!=="string")throw H.w(H.b3(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
m:function(a){return a},
gU:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gW:function(a){return C.R},
gu:function(a){return a.length},
l:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.w(H.aG(a,b))
if(b>=a.length||b<0)throw H.w(H.aG(a,b))
return a[b]},
$isbA:1,
$asbA:function(){},
$isD:1}
H.R.prototype={$asR:null}
H.cO.prototype={
gH:function(a){return new H.fe(this,this.gu(this),0,null,[H.an(this,"cO",0)])},
ac:function(a,b){return new H.e4(this,b,[H.an(this,"cO",0),null])},
a_:function(a,b){var t,s,r
t=H.a([],[H.an(this,"cO",0)])
C.a.su(t,this.gu(this))
for(s=0;s<this.gu(this);++s){r=this.ax(0,s)
if(s>=t.length)return H.F(t,s)
t[s]=r}return t},
ad:function(a){return this.a_(a,!0)}}
H.fe.prototype={
gD:function(){return this.d},
v:function(){var t,s,r,q
t=this.a
s=J.aT(t)
r=s.gu(t)
if(this.b!==r)throw H.w(new P.bF(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.ax(t,q);++this.c
return!0}}
H.dk.prototype={
gH:function(a){return new H.ff(null,J.bh(this.a),this.b,this.$ti)},
gu:function(a){return J.cB(this.a)},
$asC:function(a,b){return[b]}}
H.eH.prototype={$isR:1,
$asR:function(a,b){return[b]},
$asC:function(a,b){return[b]}}
H.ff.prototype={
v:function(){var t=this.b
if(t.v()){this.a=this.c.$1(t.gD())
return!0}this.a=null
return!1},
gD:function(){return this.a},
$asf9:function(a,b){return[b]}}
H.e4.prototype={
gu:function(a){return J.cB(this.a)},
ax:function(a,b){return this.b.$1(J.pP(this.a,b))},
$ascO:function(a,b){return[b]},
$asR:function(a,b){return[b]},
$asC:function(a,b){return[b]}}
H.bC.prototype={
gH:function(a){return new H.eh(J.bh(this.a),this.b,this.$ti)},
ac:function(a,b){return new H.dk(this,b,[H.v(this,0),null])}}
H.eh.prototype={
v:function(){var t,s
for(t=this.a,s=this.b;t.v();)if(s.$1(t.gD())===!0)return!0
return!1},
gD:function(){return this.a.gD()}}
H.eQ.prototype={}
H.mX.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.mY.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.m8.prototype={}
H.dt.prototype={
d3:function(a,b){if(!this.f.J(0,a))return
if(this.Q.j(0,b)&&!this.y)this.y=!0
this.bo()},
h1:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.a0(0,a)
if(t.a===0){for(t=this.z;s=t.length,s!==0;){if(0>=s)return H.F(t,-1)
r=t.pop()
s=u.globalState.f.a
q=s.b
p=s.a
o=p.length
q=(q-1&o-1)>>>0
s.b=q
if(q<0||q>=o)return H.F(p,q)
p[q]=r
if(q===s.c)s.cQ();++s.d}this.y=!1}this.bo()},
f4:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.ad(a),s=0;r=this.ch,s<r.length;s+=2)if(t.J(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.F(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
h0:function(a){var t,s,r
if(this.ch==null)return
for(t=J.ad(a),s=0;r=this.ch,s<r.length;s+=2)if(t.J(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.av(new P.aS("removeRange"))
P.p4(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
dQ:function(a,b){if(!this.r.J(0,a))return
this.db=b},
fz:function(a,b,c){var t=J.ad(b)
if(!t.J(b,0))t=t.J(b,1)&&!this.cy
else t=!0
if(t){a.aA(c)
return}t=this.cx
if(t==null){t=P.nD(null,null)
this.cx=t}t.at(new H.m1(a,c))},
fw:function(a,b){var t
if(!this.r.J(0,a))return
t=J.ad(b)
if(!t.J(b,0))t=t.J(b,1)&&!this.cy
else t=!0
if(t){this.bu()
return}t=this.cx
if(t==null){t=P.nD(null,null)
this.cx=t}t.at(this.gfK())},
fA:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.fO(a)
if(b!=null)P.fO(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.bb(a)
s[1]=b==null?null:J.bb(b)
for(r=new P.bf(t,t.r,null,null,[null]),r.c=t.e;r.v();)r.d.aA(s)},
b_:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.aU(o)
p=H.b8(o)
this.fA(q,p)
if(this.db===!0){this.bu()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.gfJ()
if(this.cx!=null)for(;n=this.cx,!n.gV(n);)this.cx.dt().$0()}return s},
dm:function(a){return this.b.l(0,a)},
cC:function(a,b){var t=this.b
if(t.a4(a))throw H.w(P.i9("Registry: ports must be registered only once."))
t.h(0,a,b)},
bo:function(){var t=this.b
if(t.gu(t)-this.c.a>0||this.y||!this.x)u.globalState.z.h(0,this.a,this)
else this.bu()},
bu:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.aP(0)
for(t=this.b,s=t.ga9(t),s=s.gH(s);s.v();)s.gD().ek()
t.aP(0)
this.c.aP(0)
u.globalState.z.a0(0,this.a)
this.dx.aP(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.F(t,p)
q.aA(t[p])}this.ch=null}},
gfJ:function(){return this.d},
gff:function(){return this.e}}
H.m1.prototype={
$0:function(){this.a.aA(this.b)},
$S:function(){return{func:1,v:true}}}
H.lE.prototype={
fi:function(){var t=this.a
if(t.b===t.c)return
return t.dt()},
dB:function(){var t,s,r
t=this.fi()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.a4(u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gV(s)}else s=!1
else s=!1
else s=!1
if(s)H.av(P.i9("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gV(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.e2(["command","close"])
r=new H.bP(!0,new P.fI(0,null,null,null,null,null,0,[null,P.L])).aa(r)
s.toString
self.postMessage(r)}return!1}t.fW()
return!0},
cW:function(){if(self.window!=null)new H.lF(this).$0()
else for(;this.dB(););},
b9:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.cW()
else try{this.cW()}catch(r){t=H.aU(r)
s=H.b8(r)
q=u.globalState.Q
p=P.e2(["command","error","msg",H.q(t)+"\n"+H.q(s)])
p=new H.bP(!0,P.eo(null,P.L)).aa(p)
q.toString
self.postMessage(p)}}}
H.lF.prototype={
$0:function(){if(!this.a.dB())return
P.tF(C.p,this)},
$S:function(){return{func:1,v:true}}}
H.d0.prototype={
fW:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.b_(this.b)}}
H.m7.prototype={}
H.iV.prototype={
$0:function(){H.r6(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.iW.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.dA(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.dA(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.bo()},
$S:function(){return{func:1,v:true}}}
H.lw.prototype={}
H.du.prototype={
aA:function(a){var t,s,r
t=u.globalState.z.l(0,this.a)
if(t==null)return
s=this.b
if(s.gcS())return
r=H.tS(a)
if(t.gff()===s){s=J.aT(r)
switch(s.l(r,0)){case"pause":t.d3(s.l(r,1),s.l(r,2))
break
case"resume":t.h1(s.l(r,1))
break
case"add-ondone":t.f4(s.l(r,1),s.l(r,2))
break
case"remove-ondone":t.h0(s.l(r,1))
break
case"set-errors-fatal":t.dQ(s.l(r,1),s.l(r,2))
break
case"ping":t.fz(s.l(r,1),s.l(r,2),s.l(r,3))
break
case"kill":t.fw(s.l(r,1),s.l(r,2))
break
case"getErrors":s=s.l(r,1)
t.dx.j(0,s)
break
case"stopErrors":s=s.l(r,1)
t.dx.a0(0,s)
break}return}u.globalState.f.a.at(new H.d0(t,new H.mb(this,r),"receive"))},
J:function(a,b){if(b==null)return!1
return b instanceof H.du&&J.am(this.b,b.b)},
gU:function(a){return this.b.gbM()}}
H.mb.prototype={
$0:function(){var t=this.a.b
if(!t.gcS())t.ee(this.b)},
$S:function(){return{func:1}}}
H.ep.prototype={
aA:function(a){var t,s,r
t=P.e2(["command","message","port",this,"msg",a])
s=new H.bP(!0,P.eo(null,P.L)).aa(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.l(0,this.b)
if(r!=null)r.postMessage(s)}},
J:function(a,b){if(b==null)return!1
return b instanceof H.ep&&J.am(this.b,b.b)&&J.am(this.a,b.a)&&J.am(this.c,b.c)},
gU:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.aj()
s=this.a
if(typeof s!=="number")return s.aj()
r=this.c
if(typeof r!=="number")return H.as(r)
return(t<<16^s<<8^r)>>>0}}
H.dn.prototype={
ek:function(){this.c=!0
this.b=null},
au:function(a){var t,s
if(this.c)return
this.c=!0
this.b=null
t=u.globalState.d
s=this.a
t.b.a0(0,s)
t.c.a0(0,s)
t.bo()},
ee:function(a){if(this.c)return
this.b.$1(a)},
$ist4:1,
gbM:function(){return this.a},
gcS:function(){return this.c}}
H.l9.prototype={
e8:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.at(new H.d0(s,new H.la(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.eu(new H.lb(this,b),0),a)}else throw H.w(new P.aS("Timer greater than 0."))}}
H.la.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.lb.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.bU.prototype={
gU:function(a){var t=this.a
if(typeof t!=="number")return t.ho()
t=C.c.bW(t,0)^C.c.a2(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
J:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.bU){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gbM:function(){return this.a}}
H.bP.prototype={
aa:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.l(0,a)
if(s!=null)return["ref",s]
t.h(0,a,t.gu(t))
t=J.ad(a)
if(!!t.$isdl)return["buffer",a]
if(!!t.$iscQ)return["typed",a]
if(!!t.$isbA)return this.dM(a)
if(!!t.$isr3){r=this.gdJ()
q=a.gbt()
q=H.e3(q,r,H.an(q,"C",0),null)
q=P.cq(q,!0,H.an(q,"C",0))
t=t.ga9(a)
t=H.e3(t,r,H.an(t,"C",0),null)
return["map",q,P.cq(t,!0,H.an(t,"C",0))]}if(!!t.$isoX)return this.dN(a)
if(!!t.$isH)this.dD(a)
if(!!t.$ist4)this.bb(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isdu)return this.dO(a)
if(!!t.$isep)return this.dP(a)
if(!!t.$isd4){p=a.$static_name
if(p==null)this.bb(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isbU)return["capability",a.a]
if(!(a instanceof P.ar))this.dD(a)
return["dart",u.classIdExtractor(a),this.dL(u.classFieldsExtractor(a))]},
bb:function(a,b){throw H.w(new P.aS((b==null?"Can't transmit:":b)+" "+H.q(a)))},
dD:function(a){return this.bb(a,null)},
dM:function(a){var t=this.dK(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.bb(a,"Can't serialize indexable: ")},
dK:function(a){var t,s,r
t=[]
C.a.su(t,a.length)
for(s=0;s<a.length;++s){r=this.aa(a[s])
if(s>=t.length)return H.F(t,s)
t[s]=r}return t},
dL:function(a){var t
for(t=0;t<a.length;++t)C.a.h(a,t,this.aa(a[t]))
return a},
dN:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.bb(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.su(s,t.length)
for(r=0;r<t.length;++r){q=this.aa(a[t[r]])
if(r>=s.length)return H.F(s,r)
s[r]=q}return["js-object",t,s]},
dP:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
dO:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gbM()]
return["raw sendport",a]}}
H.d_.prototype={
aw:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.w(P.n5("Bad serialized message: "+H.q(a)))
switch(C.a.ga6(a)){case"ref":if(1>=a.length)return H.F(a,1)
t=a[1]
s=this.b
if(t>>>0!==t||t>=s.length)return H.F(s,t)
return s[t]
case"buffer":if(1>=a.length)return H.F(a,1)
r=a[1]
this.b.push(r)
return r
case"typed":if(1>=a.length)return H.F(a,1)
r=a[1]
this.b.push(r)
return r
case"fixed":if(1>=a.length)return H.F(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.aZ(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.F(a,1)
r=a[1]
this.b.push(r)
return H.a(this.aZ(r),[null])
case"mutable":if(1>=a.length)return H.F(a,1)
r=a[1]
this.b.push(r)
return this.aZ(r)
case"const":if(1>=a.length)return H.F(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.aZ(r),[null])
s.fixed$length=Array
return s
case"map":return this.fn(a)
case"sendport":return this.fo(a)
case"raw sendport":if(1>=a.length)return H.F(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.fm(a)
case"function":if(1>=a.length)return H.F(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.F(a,1)
return new H.bU(a[1])
case"dart":s=a.length
if(1>=s)return H.F(a,1)
q=a[1]
if(2>=s)return H.F(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.aZ(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.w("couldn't deserialize: "+H.q(a))}},
aZ:function(a){var t,s,r
t=J.aT(a)
s=0
while(!0){r=t.gu(a)
if(typeof r!=="number")return H.as(r)
if(!(s<r))break
t.h(a,s,this.aw(t.l(a,s)));++s}return a},
fn:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.F(a,1)
s=a[1]
if(2>=t)return H.F(a,2)
r=a[2]
q=P.rJ()
this.b.push(q)
s=J.q0(J.oa(s,this.gfl()))
for(t=J.aT(s),p=J.aT(r),o=0;o<t.gu(s);++o)q.h(0,t.l(s,o),this.aw(p.l(r,o)))
return q},
fo:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.F(a,1)
s=a[1]
if(2>=t)return H.F(a,2)
r=a[2]
if(3>=t)return H.F(a,3)
q=a[3]
if(J.am(s,u.globalState.b)){p=u.globalState.z.l(0,r)
if(p==null)return
o=p.dm(q)
if(o==null)return
n=new H.du(o,r)}else n=new H.ep(s,q,r)
this.b.push(n)
return n},
fm:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.F(a,1)
s=a[1]
if(2>=t)return H.F(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.aT(s)
p=J.aT(r)
o=0
while(!0){n=t.gu(s)
if(typeof n!=="number")return H.as(n)
if(!(o<n))break
q[t.l(s,o)]=this.aw(p.l(r,o));++o}return q}}
H.k7.prototype={}
H.lc.prototype={
ag:function(a){var t,s,r
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
H.fk.prototype={
m:function(a){var t=this.b
if(t==null)return"NullError: "+H.q(this.a)
return"NullError: method not found: '"+H.q(t)+"' on null"}}
H.j9.prototype={
m:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.q(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.q(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.q(this.a)+")"}}
H.le.prototype={
m:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.dJ.prototype={
gar:function(){return this.b}}
H.mZ.prototype={
$1:function(a){if(!!J.ad(a).$iscF)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.fJ.prototype={
m:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.mP.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.mQ.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.mR.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.mS.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.mT.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.d4.prototype={
m:function(a){return"Closure '"+H.nH(this).trim()+"'"},
ghj:function(){return this},
$D:null}
H.l2.prototype={}
H.kO.prototype={
m:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.dF.prototype={
J:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.dF))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gU:function(a){var t,s
t=this.c
if(t==null)s=H.cs(this.a)
else s=typeof t!=="object"?J.b9(t):H.cs(t)
t=H.cs(this.b)
if(typeof s!=="number")return s.hq()
return(s^t)>>>0},
m:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.q(this.d)+"' of "+H.k0(t)}}
H.h9.prototype={
m:function(a){return this.a}}
H.kb.prototype={
m:function(a){return"RuntimeError: "+H.q(this.a)}}
H.cz.prototype={
m:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gU:function(a){return J.b9(this.a)},
J:function(a,b){if(b==null)return!1
return b instanceof H.cz&&J.am(this.a,b.a)}}
H.l.prototype={
gu:function(a){return this.a},
gV:function(a){return this.a===0},
gbt:function(){return new H.jj(this,[H.v(this,0)])},
ga9:function(a){return H.e3(this.gbt(),new H.j8(this),H.v(this,0),H.v(this,1))},
a4:function(a){var t,s
if(typeof a==="string"){t=this.b
if(t==null)return!1
return this.cL(t,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){s=this.c
if(s==null)return!1
return this.cL(s,a)}else return this.fG(a)},
fG:function(a){var t=this.d
if(t==null)return!1
return this.b3(this.bh(t,this.b2(a)),a)>=0},
l:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.aV(t,b)
return s==null?null:s.gay()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.aV(r,b)
return s==null?null:s.gay()}else return this.fH(b)},
fH:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.bh(t,this.b2(a))
r=this.b3(s,a)
if(r<0)return
return s[r].gay()},
h:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.bO()
this.b=t}this.cB(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.bO()
this.c=s}this.cB(s,b,c)}else{r=this.d
if(r==null){r=this.bO()
this.d=r}q=this.b2(b)
p=this.bh(r,q)
if(p==null)this.bV(r,q,[this.bP(b,c)])
else{o=this.b3(p,b)
if(o>=0)p[o].say(c)
else p.push(this.bP(b,c))}}},
a0:function(a,b){if(typeof b==="string")return this.cV(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cV(this.c,b)
else return this.fI(b)},
fI:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.bh(t,this.b2(a))
r=this.b3(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.d1(q)
return q.gay()},
aP:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
c5:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.w(new P.bF(this))
t=t.c}},
cB:function(a,b,c){var t=this.aV(a,b)
if(t==null)this.bV(a,b,this.bP(b,c))
else t.say(c)},
cV:function(a,b){var t
if(a==null)return
t=this.aV(a,b)
if(t==null)return
this.d1(t)
this.cM(a,b)
return t.gay()},
bP:function(a,b){var t,s
t=new H.ji(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
d1:function(a){var t,s
t=a.geP()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
b2:function(a){return J.b9(a)&0x3ffffff},
b3:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.am(a[s].gdj(),b))return s
return-1},
m:function(a){return P.rL(this)},
aV:function(a,b){return a[b]},
bh:function(a,b){return a[b]},
bV:function(a,b,c){a[b]=c},
cM:function(a,b){delete a[b]},
cL:function(a,b){return this.aV(a,b)!=null},
bO:function(){var t=Object.create(null)
this.bV(t,"<non-identifier-key>",t)
this.cM(t,"<non-identifier-key>")
return t},
$isr3:1,
$isnE:1}
H.j8.prototype={
$1:function(a){return this.a.l(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.ji.prototype={
gdj:function(){return this.a},
gay:function(){return this.b},
geP:function(){return this.d},
say:function(a){return this.b=a}}
H.jj.prototype={
gu:function(a){return this.a.a},
gH:function(a){var t,s
t=this.a
s=new H.jk(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.jk.prototype={
gD:function(){return this.d},
v:function(){var t=this.a
if(this.b!==t.r)throw H.w(new P.bF(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.mL.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.mM.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.D]}}}
H.mN.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.D]}}}
H.fd.prototype={
m:function(a){return"RegExp/"+this.a+"/"},
geM:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.oY(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
bY:function(a,b,c){if(c>b.length)throw H.w(P.bd(c,0,b.length,null,null))
return new H.lo(this,b,c)},
d6:function(a,b){return this.bY(a,b,0)},
ew:function(a,b){var t,s
t=this.geM()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return new H.ma(this,s)},
$ist7:1}
H.ma.prototype={
l:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.F(t,b)
return t[b]},
$iscP:1}
H.lo.prototype={
gH:function(a){return new H.lp(this.a,this.b,this.c,null)},
$asf6:function(){return[P.cP]},
$asC:function(){return[P.cP]}}
H.lp.prototype={
gD:function(){return this.d},
v:function(){var t,s,r,q
t=this.b
if(t==null)return!1
s=this.c
if(s<=t.length){r=this.a.ew(t,s)
if(r!=null){this.d=r
t=r.b
s=t.index
q=s+t[0].length
this.c=s===q?q+1:q
return!0}}this.d=null
this.b=null
return!1}}
H.kX.prototype={
l:function(a,b){if(b!==0)H.av(P.fr(b,null,null))
return this.c},
$iscP:1}
H.mt.prototype={
gH:function(a){return new H.mu(this.a,this.b,this.c,null)},
$asC:function(){return[P.cP]}}
H.mu.prototype={
v:function(){var t,s,r,q,p,o,n
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
this.d=new H.kX(o,q,s)
this.c=n===this.c?n+1:n
return!0},
gD:function(){return this.d}}
H.dl.prototype={
gW:function(a){return C.I},
f8:function(a,b,c){var t
H.pl(a,b,c)
t=new DataView(a,b)
return t},
f7:function(a,b){return this.f8(a,b,null)},
$isdl:1,
$iscD:1}
H.cQ.prototype={$iscQ:1}
H.jD.prototype={
gW:function(a){return C.J}}
H.fg.prototype={
gu:function(a){return a.length},
$isbY:1,
$asbY:function(){},
$isbA:1,
$asbA:function(){}}
H.fh.prototype={
l:function(a,b){if(b>>>0!==b||b>=a.length)H.av(H.aG(a,b))
return a[b]},
h:function(a,b,c){if(b>>>0!==b||b>=a.length)H.av(H.aG(a,b))
a[b]=c}}
H.e6.prototype={
$asbY:function(){},
$asbA:function(){},
$asV:function(){return[P.u]},
$asR:function(){return[P.u]},
$asC:function(){return[P.u]},
$isV:1,
$isR:1,
$isC:1}
H.e8.prototype={
$asbY:function(){},
$asbA:function(){},
$asV:function(){return[P.u]},
$asR:function(){return[P.u]},
$asC:function(){return[P.u]}}
H.fi.prototype={
h:function(a,b,c){if(b>>>0!==b||b>=a.length)H.av(H.aG(a,b))
a[b]=c},
$isV:1,
$asV:function(){return[P.L]},
$isR:1,
$asR:function(){return[P.L]},
$isC:1,
$asC:function(){return[P.L]}}
H.e7.prototype={
$asbY:function(){},
$asbA:function(){},
$asV:function(){return[P.L]},
$asR:function(){return[P.L]},
$asC:function(){return[P.L]},
$isV:1,
$isR:1,
$isC:1}
H.e9.prototype={
$asbY:function(){},
$asbA:function(){},
$asV:function(){return[P.L]},
$asR:function(){return[P.L]},
$asC:function(){return[P.L]}}
H.jE.prototype={
gW:function(a){return C.K},
$isV:1,
$asV:function(){return[P.u]},
$isR:1,
$asR:function(){return[P.u]},
$isC:1,
$asC:function(){return[P.u]}}
H.jF.prototype={
gW:function(a){return C.L},
$isV:1,
$asV:function(){return[P.u]},
$isR:1,
$asR:function(){return[P.u]},
$isC:1,
$asC:function(){return[P.u]}}
H.jG.prototype={
gW:function(a){return C.M},
l:function(a,b){if(b>>>0!==b||b>=a.length)H.av(H.aG(a,b))
return a[b]},
$isV:1,
$asV:function(){return[P.L]},
$isR:1,
$asR:function(){return[P.L]},
$isC:1,
$asC:function(){return[P.L]}}
H.jH.prototype={
gW:function(a){return C.N},
l:function(a,b){if(b>>>0!==b||b>=a.length)H.av(H.aG(a,b))
return a[b]},
$isV:1,
$asV:function(){return[P.L]},
$isR:1,
$asR:function(){return[P.L]},
$isC:1,
$asC:function(){return[P.L]}}
H.jI.prototype={
gW:function(a){return C.O},
l:function(a,b){if(b>>>0!==b||b>=a.length)H.av(H.aG(a,b))
return a[b]},
$isV:1,
$asV:function(){return[P.L]},
$isR:1,
$asR:function(){return[P.L]},
$isC:1,
$asC:function(){return[P.L]}}
H.jJ.prototype={
gW:function(a){return C.S},
l:function(a,b){if(b>>>0!==b||b>=a.length)H.av(H.aG(a,b))
return a[b]},
$isV:1,
$asV:function(){return[P.L]},
$isR:1,
$asR:function(){return[P.L]},
$isC:1,
$asC:function(){return[P.L]}}
H.jK.prototype={
gW:function(a){return C.T},
l:function(a,b){if(b>>>0!==b||b>=a.length)H.av(H.aG(a,b))
return a[b]},
$isV:1,
$asV:function(){return[P.L]},
$isR:1,
$asR:function(){return[P.L]},
$isC:1,
$asC:function(){return[P.L]}}
H.fj.prototype={
gW:function(a){return C.U},
gu:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)H.av(H.aG(a,b))
return a[b]},
$isV:1,
$asV:function(){return[P.L]},
$isR:1,
$asR:function(){return[P.L]},
$isC:1,
$asC:function(){return[P.L]}}
H.jL.prototype={
gW:function(a){return C.V},
gu:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)H.av(H.aG(a,b))
return a[b]},
$isnP:1,
$isV:1,
$asV:function(){return[P.L]},
$isR:1,
$asR:function(){return[P.L]},
$isC:1,
$asC:function(){return[P.L]}}
P.lr.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.lq.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.ls.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.lt.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.mA.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.mB.prototype={
$2:function(a,b){this.a.$2(1,new H.dJ(a,b))},
$S:function(){return{func:1,args:[,P.cx]}}}
P.mE.prototype={
$2:function(a,b){this.a(a,b)},
$S:function(){return{func:1,args:[P.L,,]}}}
P.b5.prototype={}
P.lA.prototype={
fd:function(a,b){if(a==null)a=new P.ea()
if(this.a.a!==0)throw H.w(new P.bL("Future already completed"))
$.af.toString
this.al(a,b)},
gfu:function(){return this.a}}
P.my.prototype={
dc:function(a,b){var t=this.a
if(t.a!==0)throw H.w(new P.bL("Future already completed"))
t.aK(b)},
al:function(a,b){this.a.al(a,b)}}
P.fH.prototype={
gf1:function(){return this.b.b},
gdi:function(){return(this.c&1)!==0},
gfD:function(){return(this.c&2)!==0},
gdh:function(){return this.c===8},
fB:function(a){return this.b.b.ci(this.d,a)},
fM:function(a){if(this.c!==6)return!0
return this.b.b.ci(this.d,J.ex(a))},
fv:function(a){var t,s,r
t=this.e
s=J.W(a)
r=this.b.b
if(H.dA(t,{func:1,args:[,,]}))return r.h5(t,s.gab(a),a.gar())
else return r.ci(t,s.gab(a))},
fC:function(){return this.b.b.dz(this.d)},
gbQ:function(){return this.a}}
P.aN.prototype={
geG:function(){return this.a===2},
gbN:function(){return this.a>=4},
ck:function(a,b){var t=$.af
if(t!==C.f){t.toString
if(b!=null)b=P.pn(b,t)}return this.bX(a,b)},
h7:function(a){return this.ck(a,null)},
bX:function(a,b){var t,s
t=new P.aN(0,$.af,null,[null])
s=b==null?1:3
this.bD(new P.fH(null,t,s,a,b,[H.v(this,0),null]))
return t},
bd:function(a){var t,s
t=$.af
s=new P.aN(0,t,null,this.$ti)
if(t!==C.f)t.toString
t=H.v(this,0)
this.bD(new P.fH(null,s,8,a,null,[t,t]))
return s},
bD:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gbN()){s.bD(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.dw(null,null,t,new P.lJ(this,a))}},
cU:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gbQ()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gbN()){p.cU(a)
return}this.a=p.a
this.c=p.c}t.a=this.bl(a)
s=this.b
s.toString
P.dw(null,null,s,new P.lR(t,this))}},
bk:function(){var t=this.c
this.c=null
return this.bl(t)},
bl:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gbQ()
t.a=s}return s},
aK:function(a){var t,s
t=this.$ti
if(H.dz(a,"$isb5",t,"$asb5"))if(H.dz(a,"$isaN",t,null))P.lM(a,this)
else P.pi(a,this)
else{s=this.bk()
this.a=4
this.c=a
P.ds(this,s)}},
al:function(a,b){var t=this.bk()
this.a=8
this.c=new P.d1(a,b)
P.ds(this,t)},
eo:function(a){return this.al(a,null)},
eh:function(a){var t
if(H.dz(a,"$isb5",this.$ti,"$asb5")){this.ej(a)
return}this.a=1
t=this.b
t.toString
P.dw(null,null,t,new P.lL(this,a))},
ej:function(a){var t
if(H.dz(a,"$isaN",this.$ti,null)){if(a.a===8){this.a=1
t=this.b
t.toString
P.dw(null,null,t,new P.lQ(this,a))}else P.lM(a,this)
return}P.pi(a,this)},
ei:function(a,b){var t
this.a=1
t=this.b
t.toString
P.dw(null,null,t,new P.lK(this,a,b))},
ec:function(a,b){this.a=4
this.c=a},
$isb5:1,
gaW:function(){return this.a},
geT:function(){return this.c}}
P.lJ.prototype={
$0:function(){P.ds(this.a,this.b)},
$S:function(){return{func:1}}}
P.lR.prototype={
$0:function(){P.ds(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.lN.prototype={
$1:function(a){var t=this.a
t.a=0
t.aK(a)},
$S:function(){return{func:1,args:[,]}}}
P.lO.prototype={
$2:function(a,b){this.a.al(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.lP.prototype={
$0:function(){this.a.al(this.b,this.c)},
$S:function(){return{func:1}}}
P.lL.prototype={
$0:function(){var t,s
t=this.a
s=t.bk()
t.a=4
t.c=this.b
P.ds(t,s)},
$S:function(){return{func:1}}}
P.lQ.prototype={
$0:function(){P.lM(this.b,this.a)},
$S:function(){return{func:1}}}
P.lK.prototype={
$0:function(){this.a.al(this.b,this.c)},
$S:function(){return{func:1}}}
P.lU.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.fC()}catch(q){s=H.aU(q)
r=H.b8(q)
if(this.c){p=J.ex(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.d1(s,r)
o.a=!0
return}if(!!J.ad(t).$isb5){if(t instanceof P.aN&&t.gaW()>=4){if(t.gaW()===8){p=this.b
p.b=t.geT()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.h7(new P.lV(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.lV.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.lT.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.fB(this.c)}catch(r){t=H.aU(r)
s=H.b8(r)
q=this.a
q.b=new P.d1(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.lS.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.fM(t)===!0&&q.e!=null){p=this.b
p.b=q.fv(t)
p.a=!1}}catch(o){s=H.aU(o)
r=H.b8(o)
q=this.a
p=J.ex(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.d1(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.fB.prototype={}
P.c2.prototype={
ac:function(a,b){return new P.m9(b,this,[H.an(this,"c2",0),null])},
gu:function(a){var t,s
t={}
s=new P.aN(0,$.af,null,[P.L])
t.a=0
this.ap(new P.kT(t),!0,new P.kU(t,s),s.gbH())
return s},
ad:function(a){var t,s,r
t=H.an(this,"c2",0)
s=H.a([],[t])
r=new P.aN(0,$.af,null,[[P.V,t]])
this.ap(new P.kV(this,s),!0,new P.kW(s,r),r.gbH())
return r},
ga6:function(a){var t,s
t={}
s=new P.aN(0,$.af,null,[H.an(this,"c2",0)])
t.a=null
t.a=this.ap(new P.kR(t,this,s),!0,new P.kS(s),s.gbH())
return s}}
P.kT.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.kU.prototype={
$0:function(){this.b.aK(this.a.a)},
$S:function(){return{func:1}}}
P.kV.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.mG(function(a){return{func:1,args:[a]}},this.a,"c2")}}
P.kW.prototype={
$0:function(){this.b.aK(this.a)},
$S:function(){return{func:1}}}
P.kR.prototype={
$1:function(a){P.tR(this.a.a,this.c,a)},
$S:function(){return H.mG(function(a){return{func:1,args:[a]}},this.b,"c2")}}
P.kS.prototype={
$0:function(){var t,s,r,q
try{r=H.f8()
throw H.w(r)}catch(q){t=H.aU(q)
s=H.b8(q)
P.tT(this.a,t,s)}},
$S:function(){return{func:1}}}
P.kQ.prototype={}
P.mo.prototype={
geO:function(){if((this.b&8)===0)return this.a
return this.a.gbz()},
cP:function(){var t,s
if((this.b&8)===0){t=this.a
if(t==null){t=new P.fK(null,null,0,this.$ti)
this.a=t}return t}s=this.a
s.gbz()
return s.gbz()},
gd_:function(){if((this.b&8)!==0)return this.a.gbz()
return this.a},
cD:function(){if((this.b&4)!==0)return new P.bL("Cannot add event after closing")
return new P.bL("Cannot add event while adding a stream")},
cO:function(){var t=this.c
if(t==null){t=(this.b&2)!==0?$.$get$dX():new P.aN(0,$.af,null,[null])
this.c=t}return t},
au:function(a){var t=this.b
if((t&4)!==0)return this.cO()
if(t>=4)throw H.w(this.cD())
t|=4
this.b=t
if((t&1)!==0)this.bn()
else if((t&3)===0)this.cP().j(0,C.k)
return this.cO()},
aJ:function(a){var t=this.b
if((t&1)!==0)this.bm(a)
else if((t&3)===0)this.cP().j(0,new P.ei(a,null,this.$ti))},
eY:function(a,b,c,d){var t,s,r,q,p
if((this.b&3)!==0)throw H.w(new P.bL("Stream has already been listened to."))
t=$.af
s=d?1:0
r=new P.fE(this,null,null,null,t,s,null,null,this.$ti)
r.cA(a,b,c,d,H.v(this,0))
q=this.geO()
s=this.b|=1
if((s&8)!==0){p=this.a
p.sbz(r)
p.bx()}else this.a=r
r.eW(q)
r.bL(new P.mq(this))
return r},
eQ:function(a){var t,s,r,q,p,o
t=null
if((this.b&8)!==0)t=this.a.br()
this.a=null
this.b=this.b&4294967286|2
q=this.r
if(q!=null)if(t==null)try{t=q.$0()}catch(p){s=H.aU(p)
r=H.b8(p)
o=new P.aN(0,$.af,null,[null])
o.ei(s,r)
t=o}else t=t.bd(q)
q=new P.mp(this)
if(t!=null)t=t.bd(q)
else q.$0()
return t},
gaW:function(){return this.b}}
P.mq.prototype={
$0:function(){P.o0(this.a.d)},
$S:function(){return{func:1}}}
P.mp.prototype={
$0:function(){var t=this.a.c
if(t!=null&&t.a===0)t.eh(null)},
$S:function(){return{func:1,v:true}}}
P.lu.prototype={
bm:function(a){this.gd_().aT(new P.ei(a,null,[H.v(this,0)]))},
bn:function(){this.gd_().aT(C.k)}}
P.fC.prototype={}
P.fD.prototype={
gU:function(a){return(H.cs(this.a)^892482866)>>>0},
J:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof P.fD))return!1
return b.a===this.a}}
P.fE.prototype={
bR:function(){return this.x.eQ(this)},
aM:function(){var t=this.x
if((t.b&8)!==0)t.a.c9(0)
P.o0(t.e)},
aN:function(){var t=this.x
if((t.b&8)!==0)t.a.bx()
P.o0(t.f)}}
P.bD.prototype={
eW:function(a){if(a==null)return
this.r=a
if(!a.gV(a)){this.e=(this.e|64)>>>0
this.r.be(this)}},
ca:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.d8()
if((t&4)===0&&(this.e&32)===0)this.bL(this.gbS())},
c9:function(a){return this.ca(a,null)},
bx:function(){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gV(t)}else t=!1
if(t)this.r.be(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.bL(this.gbT())}}}},
br:function(){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.bE()
t=this.f
return t==null?$.$get$dX():t},
bE:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.d8()
if((this.e&32)===0)this.r=null
this.f=this.bR()},
aJ:function(a){var t=this.e
if((t&8)!==0)return
if(t<32)this.bm(a)
else this.aT(new P.ei(a,null,[H.an(this,"bD",0)]))},
bf:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.cX(a,b)
else this.aT(new P.lC(a,b,null))},
eg:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.bn()
else this.aT(C.k)},
aM:function(){},
aN:function(){},
bR:function(){return},
aT:function(a){var t,s
t=this.r
if(t==null){t=new P.fK(null,null,0,[H.an(this,"bD",0)])
this.r=t}t.j(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.be(this)}},
bm:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.cj(this.a,a)
this.e=(this.e&4294967263)>>>0
this.bF((t&4)!==0)},
cX:function(a,b){var t,s
t=this.e
s=new P.ly(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.bE()
t=this.f
if(!!J.ad(t).$isb5&&t!==$.$get$dX())t.bd(s)
else s.$0()}else{s.$0()
this.bF((t&4)!==0)}},
bn:function(){var t,s
t=new P.lx(this)
this.bE()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.ad(s).$isb5&&s!==$.$get$dX())s.bd(t)
else t.$0()},
bL:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.bF((t&4)!==0)},
bF:function(a){var t,s
if((this.e&64)!==0){t=this.r
t=t.gV(t)}else t=!1
if(t){t=(this.e&4294967231)>>>0
this.e=t
if((t&4)!==0)if(t<128){t=this.r
t=t==null||t.gV(t)}else t=!1
else t=!1
if(t)this.e=(this.e&4294967291)>>>0}for(;!0;a=s){t=this.e
if((t&8)!==0){this.r=null
return}s=(t&4)!==0
if(a===s)break
this.e=(t^32)>>>0
if(s)this.aM()
else this.aN()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.be(this)},
cA:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.pn(b==null?P.u5():b,t)
this.c=c==null?P.u4():c},
gaW:function(){return this.e}}
P.ly.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.dA(s,{func:1,args:[P.ar,P.cx]})
q=t.d
p=this.b
o=t.b
if(r)q.h6(o,p,this.c)
else q.cj(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.lx.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.dA(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.mr.prototype={
ap:function(a,b,c,d){return this.a.eY(a,d,c,!0===b)},
c7:function(a,b,c){return this.ap(a,null,b,c)},
aG:function(a){return this.ap(a,null,null,null)}}
P.fF.prototype={
gb7:function(){return this.a},
sb7:function(a){return this.a=a}}
P.ei.prototype={
cb:function(a){a.bm(this.b)}}
P.lC.prototype={
cb:function(a){a.cX(this.b,this.c)},
$asfF:function(){},
gab:function(a){return this.b},
gar:function(){return this.c}}
P.lB.prototype={
cb:function(a){a.bn()},
gb7:function(){return},
sb7:function(a){throw H.w(new P.bL("No events after a done."))}}
P.mc.prototype={
be:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.pD(new P.md(this,a))
this.a=1},
d8:function(){if(this.a===1)this.a=3},
gaW:function(){return this.a}}
P.md.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gb7()
t.b=q
if(q==null)t.c=null
r.cb(this.b)},
$S:function(){return{func:1}}}
P.fK.prototype={
gV:function(a){return this.c==null},
j:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sb7(b)
this.c=b}}}
P.ms.prototype={}
P.mC.prototype={
$0:function(){return this.a.aK(this.b)},
$S:function(){return{func:1}}}
P.ek.prototype={
ap:function(a,b,c,d){return this.eu(a,d,c,!0===b)},
c7:function(a,b,c){return this.ap(a,null,b,c)},
eu:function(a,b,c,d){return P.tL(this,a,b,c,d,H.an(this,"ek",0),H.an(this,"ek",1))},
cR:function(a,b){b.aJ(a)},
eE:function(a,b,c){c.bf(a,b)},
$asc2:function(a,b){return[b]}}
P.el.prototype={
aJ:function(a){if((this.e&2)!==0)return
this.e0(a)},
bf:function(a,b){if((this.e&2)!==0)return
this.e1(a,b)},
aM:function(){var t=this.y
if(t==null)return
t.c9(0)},
aN:function(){var t=this.y
if(t==null)return
t.bx()},
bR:function(){var t=this.y
if(t!=null){this.y=null
return t.br()}return},
ez:function(a){this.x.cR(a,this)},
eD:function(a,b){this.x.eE(a,b,this)},
eB:function(){this.eg()},
eb:function(a,b,c,d,e,f,g){this.y=this.x.a.c7(this.gey(),this.geA(),this.geC())},
$asbD:function(a,b){return[b]}}
P.m9.prototype={
cR:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.aU(q)
r=H.b8(q)
P.tQ(b,s,r)
return}b.aJ(t)}}
P.d1.prototype={
m:function(a){return H.q(this.a)},
$iscF:1,
gab:function(a){return this.a},
gar:function(){return this.b}}
P.mz.prototype={}
P.mD.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.ea()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.w(t)
r=H.w(t)
r.stack=J.bb(s)
throw r},
$S:function(){return{func:1}}}
P.mg.prototype={
dA:function(a){var t,s,r,q
try{if(C.f===$.af){r=a.$0()
return r}r=P.po(null,null,this,a)
return r}catch(q){t=H.aU(q)
s=H.b8(q)
r=P.es(null,null,this,t,s)
return r}},
cj:function(a,b){var t,s,r,q
try{if(C.f===$.af){r=a.$1(b)
return r}r=P.pq(null,null,this,a,b)
return r}catch(q){t=H.aU(q)
s=H.b8(q)
r=P.es(null,null,this,t,s)
return r}},
h6:function(a,b,c){var t,s,r,q
try{if(C.f===$.af){r=a.$2(b,c)
return r}r=P.pp(null,null,this,a,b,c)
return r}catch(q){t=H.aU(q)
s=H.b8(q)
r=P.es(null,null,this,t,s)
return r}},
bZ:function(a,b){if(b)return new P.mh(this,a)
else return new P.mi(this,a)},
f9:function(a,b){return new P.mj(this,a)},
l:function(a,b){return},
dz:function(a){if($.af===C.f)return a.$0()
return P.po(null,null,this,a)},
ci:function(a,b){if($.af===C.f)return a.$1(b)
return P.pq(null,null,this,a,b)},
h5:function(a,b,c){if($.af===C.f)return a.$2(b,c)
return P.pp(null,null,this,a,b,c)}}
P.mh.prototype={
$0:function(){return this.a.dA(this.b)},
$S:function(){return{func:1}}}
P.mi.prototype={
$0:function(){return this.a.dz(this.b)},
$S:function(){return{func:1}}}
P.mj.prototype={
$1:function(a){return this.a.cj(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.lX.prototype={
gu:function(a){return this.a},
ga9:function(a){var t=H.v(this,0)
return H.e3(new P.lY(this,[t]),new P.m_(this),t,H.v(this,1))},
a4:function(a){var t,s
if(typeof a==="string"&&a!=="__proto__"){t=this.b
return t==null?!1:t[a]!=null}else if(typeof a==="number"&&(a&0x3ffffff)===a){s=this.c
return s==null?!1:s[a]!=null}else return this.es(a)},
es:function(a){var t=this.d
if(t==null)return!1
return this.an(t[this.am(a)],a)>=0},
l:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.ex(b)},
ex:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.am(a)]
r=this.an(s,a)
return r<0?null:s[r+1]},
h:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.nT()
this.b=t}this.cG(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.nT()
this.c=s}this.cG(s,b,c)}else this.eU(b,c)},
eU:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.nT()
this.d=t}s=this.am(a)
r=t[s]
if(r==null){P.nU(t,s,[a,b]);++this.a
this.e=null}else{q=this.an(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
a0:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.aU(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.aU(this.c,b)
else return this.bU(b)},
bU:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.am(a)]
r=this.an(s,a)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
c5:function(a,b){var t,s,r,q
t=this.cJ()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.l(0,q))
if(t!==this.e)throw H.w(new P.bF(this))}},
cJ:function(){var t,s,r,q,p,o,n,m,l,k,j,i
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
cG:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.nU(a,b,c)},
aU:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.tM(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
am:function(a){return J.b9(a)&0x3ffffff},
an:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.am(a[s],b))return s
return-1},
$isnE:1}
P.m_.prototype={
$1:function(a){return this.a.l(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.lY.prototype={
gu:function(a){return this.a.a},
gH:function(a){var t=this.a
return new P.lZ(t,t.cJ(),0,null,this.$ti)}}
P.lZ.prototype={
gD:function(){return this.d},
v:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.w(new P.bF(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.fI.prototype={
b2:function(a){return H.up(a)&0x3ffffff},
b3:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].gdj()
if(r==null?b==null:r===b)return s}return-1}}
P.m4.prototype={
gH:function(a){var t=new P.bf(this,this.r,null,null,[null])
t.c=this.e
return t},
gu:function(a){return this.a},
c1:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.er(b)},
er:function(a){var t=this.d
if(t==null)return!1
return this.an(t[this.am(a)],a)>=0},
dm:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.c1(0,a)?a:null
else return this.eH(a)},
eH:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.am(a)]
r=this.an(s,a)
if(r<0)return
return J.n0(s,r).gcN()},
j:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.cF(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.cF(r,b)}else return this.at(b)},
at:function(a){var t,s,r
t=this.d
if(t==null){t=P.tN()
this.d=t}s=this.am(a)
r=t[s]
if(r==null)t[s]=[this.bG(a)]
else{if(this.an(r,a)>=0)return!1
r.push(this.bG(a))}return!0},
a0:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.aU(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.aU(this.c,b)
else return this.bU(b)},
bU:function(a){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.am(a)]
r=this.an(s,a)
if(r<0)return!1
this.cH(s.splice(r,1)[0])
return!0},
aP:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
cF:function(a,b){if(a[b]!=null)return!1
a[b]=this.bG(b)
return!0},
aU:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.cH(t)
delete a[b]
return!0},
bG:function(a){var t,s
t=new P.m5(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
cH:function(a){var t,s
t=a.gel()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
am:function(a){return J.b9(a)&0x3ffffff},
an:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.am(a[s].gcN(),b))return s
return-1},
$isR:1,
$asR:null,
$isC:1,
$asC:null}
P.m5.prototype={
gcN:function(){return this.a},
gel:function(){return this.c}}
P.bf.prototype={
gD:function(){return this.d},
v:function(){var t=this.a
if(this.b!==t.r)throw H.w(new P.bF(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.m0.prototype={}
P.dg.prototype={
ac:function(a,b){return H.e3(this,b,H.an(this,"dg",0),null)},
a_:function(a,b){return P.cq(this,!0,H.an(this,"dg",0))},
ad:function(a){return this.a_(a,!0)},
gu:function(a){var t,s
t=this.gH(this)
for(s=0;t.v();)++s
return s},
m:function(a){return P.nx(this,"(",")")},
$isC:1,
$asC:null}
P.f6.prototype={}
P.bZ.prototype={
gH:function(a){return new H.fe(a,this.gu(a),0,null,[H.an(a,"bZ",0)])},
ax:function(a,b){return this.l(a,b)},
ac:function(a,b){return new H.e4(a,b,[H.an(a,"bZ",0),null])},
a_:function(a,b){var t,s,r
t=H.a([],[H.an(a,"bZ",0)])
C.a.su(t,this.gu(a))
for(s=0;s<this.gu(a);++s){r=this.l(a,s)
if(s>=t.length)return H.F(t,s)
t[s]=r}return t},
ad:function(a){return this.a_(a,!0)},
m:function(a){return P.f7(a,"[","]")},
$isV:1,
$asV:null,
$isR:1,
$asR:null,
$isC:1,
$asC:null}
P.jq.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.T+=", "
t.a=!1
t=this.b
s=t.T+=H.q(a)
t.T=s+": "
t.T+=H.q(b)},
$S:function(){return{func:1,args:[,,]}}}
P.jl.prototype={
gH:function(a){return new P.m6(this,this.c,this.d,this.b,null,this.$ti)},
gV:function(a){return this.b===this.c},
gu:function(a){return(this.c-this.b&this.a.length-1)>>>0},
ax:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=t)H.av(P.iT(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.F(s,q)
return s[q]},
a_:function(a,b){var t=H.a([],this.$ti)
C.a.su(t,this.gu(this))
this.f0(t)
return t},
ad:function(a){return this.a_(a,!0)},
aP:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.F(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
m:function(a){return P.f7(this,"{","}")},
dt:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.w(H.f8());++this.d
s=this.a
r=s.length
if(t>=r)return H.F(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
at:function(a){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.F(t,s)
t[s]=a
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.cQ();++this.d},
cQ:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.a(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.aR(s,0,q,t,r)
C.a.aR(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=s},
f0:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.a.aR(a,0,q,r,t)
return q}else{p=r.length-t
C.a.aR(a,0,p,r,t)
C.a.aR(a,p,p+this.c,this.a,0)
return this.c+p}},
e5:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$asR:null,
$asC:null}
P.m6.prototype={
gD:function(){return this.e},
v:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.av(new P.bF(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.F(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.kl.prototype={
bq:function(a,b){var t
for(t=new P.bf(b,b.r,null,null,[null]),t.c=b.e;t.v();)this.j(0,t.d)},
a_:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.a.su(t,this.a)
for(s=new P.bf(this,this.r,null,null,[null]),s.c=this.e,r=0;s.v();r=p){q=s.d
p=r+1
if(r>=t.length)return H.F(t,r)
t[r]=q}return t},
ad:function(a){return this.a_(a,!0)},
ac:function(a,b){return new H.eH(this,b,[H.v(this,0),null])},
m:function(a){return P.f7(this,"{","}")},
$isR:1,
$asR:null,
$isC:1,
$asC:null}
P.kk.prototype={}
P.c4.prototype={}
P.aE.prototype={}
P.u.prototype={$isaE:1,
$asaE:function(){return[P.bE]}}
P.c9.prototype={
P:function(a,b){return new P.c9(this.a+b.gbg())},
X:function(a,b){return new P.c9(C.b.Z(this.a*b))},
aq:function(a,b){return C.b.aq(this.a,b.gbg())},
aH:function(a,b){return C.b.aH(this.a,b.gbg())},
J:function(a,b){if(b==null)return!1
if(!(b instanceof P.c9))return!1
return this.a===b.a},
gU:function(a){return this.a&0x1FFFFFFF},
av:function(a,b){return C.b.av(this.a,b.gbg())},
m:function(a){var t,s,r,q,p
t=new P.i6()
s=this.a
if(s<0)return"-"+new P.c9(0-s).m(0)
r=t.$1(C.b.a2(s,6e7)%60)
q=t.$1(C.b.a2(s,1e6)%60)
p=new P.i5().$1(s%1e6)
return""+C.b.a2(s,36e8)+":"+H.q(r)+":"+H.q(q)+"."+H.q(p)},
$isaE:1,
$asaE:function(){return[P.c9]},
gbg:function(){return this.a}}
P.i5.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.D,args:[P.L]}}}
P.i6.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.D,args:[P.L]}}}
P.cF.prototype={
gar:function(){return H.b8(this.$thrownJsError)}}
P.ea.prototype={
m:function(a){return"Throw of null."}}
P.c6.prototype={
gbJ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbI:function(){return""},
m:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.q(t)
q=this.gbJ()+s+r
if(!this.a)return q
p=this.gbI()
o=P.or(this.b)
return q+p+": "+H.q(o)},
gt:function(a){return this.c}}
P.fq.prototype={
gbJ:function(){return"RangeError"},
gbI:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.q(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.q(t)
else if(r>t)s=": Not in range "+H.q(t)+".."+H.q(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.q(t)}return s}}
P.iS.prototype={
gbJ:function(){return"RangeError"},
gbI:function(){if(J.fP(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.q(t)},
gu:function(a){return this.f}}
P.aS.prototype={
m:function(a){return"Unsupported operation: "+this.a}}
P.dr.prototype={
m:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.q(t):"UnimplementedError"}}
P.bL.prototype={
m:function(a){return"Bad state: "+this.a}}
P.bF.prototype={
m:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.q(P.or(t))+"."}}
P.jT.prototype={
m:function(a){return"Out of Memory"},
gar:function(){return},
$iscF:1}
P.ft.prototype={
m:function(a){return"Stack Overflow"},
gar:function(){return},
$iscF:1}
P.i0.prototype={
m:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.q(t)+"' during its initialization"}}
P.lI.prototype={
m:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.q(t)}}
P.iJ.prototype={
m:function(a){var t,s,r
t=this.a
s=t!=null&&""!==t?"FormatException: "+H.q(t):"FormatException"
r=this.b
if(typeof r!=="string")return s
if(r.length>78)r=C.h.bC(r,0,75)+"..."
return s+"\n"+r}}
P.ia.prototype={
m:function(a){return"Expando:"+H.q(this.a)},
l:function(a,b){var t,s
t=this.bi
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.av(P.dD(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.nG(b,"expando$values")
return s==null?null:H.nG(s,t)},
h:function(a,b,c){var t,s
t=this.bi
if(typeof t!=="string")t.set(b,c)
else{s=H.nG(b,"expando$values")
if(s==null){s=new P.ar()
H.p1(b,"expando$values",s)}H.p1(s,t,c)}},
gt:function(a){return this.a}}
P.L.prototype={$isaE:1,
$asaE:function(){return[P.bE]}}
P.C.prototype={
ac:function(a,b){return H.e3(this,b,H.an(this,"C",0),null)},
cp:function(a,b){return new H.bC(this,b,[H.an(this,"C",0)])},
h_:function(a,b){var t,s
t=this.gH(this)
if(!t.v())throw H.w(H.f8())
s=t.gD()
for(;t.v();)s=b.$2(s,t.gD())
return s},
a_:function(a,b){return P.cq(this,!0,H.an(this,"C",0))},
ad:function(a){return this.a_(a,!0)},
gu:function(a){var t,s
t=this.gH(this)
for(s=0;t.v();)++s
return s},
gV:function(a){return!this.gH(this).v()},
ax:function(a,b){var t,s,r
if(b<0)H.av(P.bd(b,0,null,"index",null))
for(t=this.gH(this),s=0;t.v();){r=t.gD()
if(b===s)return r;++s}throw H.w(P.iT(b,this,"index",null,s))},
m:function(a){return P.nx(this,"(",")")},
$asC:null}
P.f9.prototype={}
P.V.prototype={$asV:null,$isC:1,$isR:1,$asR:null}
P.bK.prototype={
gU:function(a){return P.ar.prototype.gU.call(this,this)},
m:function(a){return"null"}}
P.bE.prototype={$isaE:1,
$asaE:function(){return[P.bE]}}
P.ar.prototype={constructor:P.ar,$isar:1,
J:function(a,b){return this===b},
gU:function(a){return H.cs(this)},
m:function(a){return H.k0(this)},
gW:function(a){return new H.cz(H.mK(this),null)},
toString:function(){return this.m(this)}}
P.cP.prototype={}
P.cx.prototype={}
P.D.prototype={$isaE:1,
$asaE:function(){return[P.D]}}
P.ee.prototype={
gu:function(a){return this.T.length},
m:function(a){var t=this.T
return t.charCodeAt(0)==0?t:t},
gT:function(){return this.T}}
W.ab.prototype={}
W.fV.prototype={
m:function(a){return String(a)},
$isH:1,
sa7:function(a,b){return a.type=b}}
W.fW.prototype={
m:function(a){return String(a)},
$isH:1}
W.d2.prototype={
au:function(a){return a.close()},
$isd2:1}
W.h2.prototype={$isH:1}
W.h6.prototype={
gt:function(a){return a.name},
gR:function(a){return a.value},
st:function(a,b){return a.name=b},
sa7:function(a,b){return a.type=b},
sR:function(a,b){return a.value=b}}
W.h8.prototype={
gfe:function(a){return a.getContext("2d")}}
W.eA.prototype={
fX:function(a,b,c,d,e,f,g,h){a.putImageData(P.ua(b),c,d)
return},
dr:function(a,b,c,d){return this.fX(a,b,c,d,null,null,null,null)}}
W.cE.prototype={$isH:1,
gu:function(a){return a.length}}
W.eE.prototype={
c3:function(a,b){return typeof console!="undefined"?console.error(b):null},
dl:function(a){return typeof console!="undefined"?console.info(a):null},
h8:function(a){return typeof console!="undefined"?console.time(a):null},
hh:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.d5.prototype={
aF:function(a,b){return a.item(b)},
gu:function(a){return a.length}}
W.eW.prototype={}
W.hY.prototype={}
W.i_.prototype={
eF:function(a,b,c,d,e){return a.initCustomEvent(b,!0,!0,e)},
sev:function(a,b){return a._dartDetail=b}}
W.eF.prototype={$isH:1}
W.eG.prototype={
gt:function(a){return a.name}}
W.i1.prototype={
gt:function(a){var t=a.name
if(P.oq()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.oq()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
m:function(a){return String(a)}}
W.ca.prototype={
gaY:function(a){return P.t5(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,null)},
m:function(a){return a.localName},
da:function(a){return a.click()},
gY:function(a){return new W.ej(a,"change",!1,[W.y])},
gc8:function(a){return new W.ej(a,"click",!1,[W.az])},
$isca:1,
$isar:1,
$isH:1}
W.i7.prototype={
gt:function(a){return a.name},
st:function(a,b){return a.name=b},
sa7:function(a,b){return a.type=b}}
W.i8.prototype={
gab:function(a){return a.error}}
W.y.prototype={
fV:function(a){return a.preventDefault()},
dX:function(a){return a.stopPropagation()},
$isy:1,
$isar:1}
W.dI.prototype={
ef:function(a,b,c,d){return a.addEventListener(b,H.eu(c,1),!1)},
eR:function(a,b,c,d){return a.removeEventListener(b,H.eu(c,1),!1)}}
W.iC.prototype={
gt:function(a){return a.name},
st:function(a,b){return a.name=b}}
W.aI.prototype={$isaI:1,$isar:1,
gt:function(a){return a.name}}
W.da.prototype={
gu:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.w(P.iT(b,a,null,null,null))
return a[b]},
h:function(a,b,c){throw H.w(new P.aS("Cannot assign element of immutable List."))},
ax:function(a,b){if(b<0||b>=a.length)return H.F(a,b)
return a[b]},
aF:function(a,b){return a.item(b)},
$isda:1,
$isbY:1,
$asbY:function(){return[W.aI]},
$isbA:1,
$asbA:function(){return[W.aI]},
$isV:1,
$asV:function(){return[W.aI]},
$isR:1,
$asR:function(){return[W.aI]},
$isC:1,
$asC:function(){return[W.aI]}}
W.eX.prototype={
$asV:function(){return[W.aI]},
$asR:function(){return[W.aI]},
$asC:function(){return[W.aI]},
$isV:1,
$isR:1,
$isC:1}
W.eY.prototype={
$asV:function(){return[W.aI]},
$asR:function(){return[W.aI]},
$asC:function(){return[W.aI]},
$isV:1,
$isR:1,
$isC:1}
W.eP.prototype={
gdv:function(a){var t=a.result
if(!!J.ad(t).$iscD)return H.rM(t,0,null)
return t},
gab:function(a){return a.error}}
W.eS.prototype={
aF:function(a,b){return a.item(b)},
gu:function(a){return a.length},
gt:function(a){return a.name},
st:function(a,b){return a.name=b}}
W.iP.prototype={
gt:function(a){return a.name},
st:function(a,b){return a.name=b}}
W.cI.prototype={$iscI:1,
gaf:function(a){return a.data}}
W.iQ.prototype={
dc:function(a,b){return a.complete.$1(b)}}
W.eV.prototype={$isH:1,$iseb:1,
gaO:function(a){return a.checked},
gfs:function(a){return a.files},
gt:function(a){return a.name},
gR:function(a){return a.value},
gcn:function(a){return a.valueAsNumber},
saO:function(a,b){return a.checked=b},
sah:function(a,b){return a.max=b},
sdn:function(a,b){return a.maxLength=b},
sai:function(a,b){return a.min=b},
sdq:function(a,b){return a.multiple=b},
st:function(a,b){return a.name=b},
sfQ:function(a,b){return a.pattern=b},
sak:function(a,b){return a.step=b},
sa7:function(a,b){return a.type=b},
sR:function(a,b){return a.value=b},
scn:function(a,b){return a.valueAsNumber=b}}
W.eb.prototype={$isca:1,$isH:1}
W.jb.prototype={
gt:function(a){return a.name},
st:function(a,b){return a.name=b}}
W.jd.prototype={
gR:function(a){return a.value},
sR:function(a,b){return a.value=b}}
W.jh.prototype={
sa7:function(a,b){return a.type=b}}
W.jp.prototype={
gt:function(a){return a.name},
st:function(a,b){return a.name=b}}
W.e5.prototype={
gab:function(a){return a.error}}
W.jt.prototype={
sa7:function(a,b){return a.type=b}}
W.ju.prototype={
gaO:function(a){return a.checked},
saO:function(a,b){return a.checked=b},
sa7:function(a,b){return a.type=b}}
W.jv.prototype={
au:function(a){return a.close()}}
W.jw.prototype={
gt:function(a){return a.name},
st:function(a,b){return a.name=b}}
W.jx.prototype={
gR:function(a){return a.value},
sah:function(a,b){return a.max=b},
sai:function(a,b){return a.min=b},
sR:function(a,b){return a.value=b}}
W.az.prototype={
gaY:function(a){return new P.cr(a.clientX,a.clientY,[null])},
$isaz:1,
$isy:1,
$isar:1}
W.jM.prototype={$isH:1}
W.jN.prototype={
gt:function(a){return a.name}}
W.cR.prototype={
h2:function(a,b){var t,s
try{t=a.parentNode
J.pK(t,b,a)}catch(s){H.aU(s)}return a},
m:function(a){var t=a.nodeValue
return t==null?this.dZ(a):t},
eS:function(a,b,c){return a.replaceChild(b,c)}}
W.jO.prototype={
sa7:function(a,b){return a.type=b}}
W.jP.prototype={
gt:function(a){return a.name},
st:function(a,b){return a.name=b},
sa7:function(a,b){return a.type=b}}
W.jR.prototype={
gR:function(a){return a.value},
sR:function(a,b){return a.value=b}}
W.jU.prototype={
gt:function(a){return a.name},
gR:function(a){return a.value},
st:function(a,b){return a.name=b},
sR:function(a,b){return a.value=b}}
W.jX.prototype={
gt:function(a){return a.name},
gR:function(a){return a.value},
st:function(a,b){return a.name=b},
sR:function(a,b){return a.value=b}}
W.k2.prototype={
gR:function(a){return a.value},
sR:function(a,b){return a.value=b}}
W.kh.prototype={
sa7:function(a,b){return a.type=b}}
W.c1.prototype={
aF:function(a,b){return a.item(b)},
$isc1:1,
gu:function(a){return a.length},
gt:function(a){return a.name},
gR:function(a){return a.value},
sdq:function(a,b){return a.multiple=b},
st:function(a,b){return a.name=b},
sR:function(a,b){return a.value=b}}
W.kn.prototype={
gt:function(a){return a.name},
st:function(a,b){return a.name=b}}
W.kq.prototype={
sa7:function(a,b){return a.type=b}}
W.ks.prototype={
gab:function(a){return a.error}}
W.kt.prototype={
gt:function(a){return a.name}}
W.kY.prototype={
sa7:function(a,b){return a.type=b}}
W.l5.prototype={
gt:function(a){return a.name},
gR:function(a){return a.value},
sdn:function(a,b){return a.maxLength=b},
st:function(a,b){return a.name=b},
sR:function(a,b){return a.value=b}}
W.bN.prototype={}
W.fA.prototype={
au:function(a){return a.close()},
$isH:1,
gt:function(a){return a.name}}
W.lv.prototype={
gt:function(a){return a.name}}
W.lz.prototype={
m:function(a){return"Rectangle ("+H.q(a.left)+", "+H.q(a.top)+") "+H.q(a.width)+" x "+H.q(a.height)},
J:function(a,b){var t,s,r
if(b==null)return!1
t=J.ad(b)
if(!t.$iscv)return!1
s=a.left
r=t.gc6(b)
if(s==null?r==null:s===r){s=a.top
r=t.gcl(b)
if(s==null?r==null:s===r){s=a.width
r=t.gdF(b)
if(s==null?r==null:s===r){s=a.height
t=t.gdk(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gU:function(a){var t,s,r,q,p
t=J.b9(a.left)
s=J.b9(a.top)
r=J.b9(a.width)
q=J.b9(a.height)
q=W.m3(W.m3(W.m3(W.m3(0,t),s),r),q)
p=536870911&q+((67108863&q)<<3)
p^=p>>>11
return 536870911&p+((16383&p)<<15)},
$iscv:1,
$ascv:function(){},
gd7:function(a){return a.bottom},
gdk:function(a){return a.height},
gc6:function(a){return a.left},
gdw:function(a){return a.right},
gcl:function(a){return a.top},
gdF:function(a){return a.width}}
W.lD.prototype={$isH:1}
W.lW.prototype={$isH:1}
W.mn.prototype={$isH:1}
W.fG.prototype={
ap:function(a,b,c,d){return W.ah(this.a,this.b,a,!1,H.v(this,0))},
c7:function(a,b,c){return this.ap(a,null,b,c)}}
W.ej.prototype={}
W.lG.prototype={
br:function(){if(this.b==null)return
this.d2()
this.b=null
this.d=null
return},
ca:function(a,b){if(this.b==null)return;++this.a
this.d2()},
c9:function(a){return this.ca(a,null)},
bx:function(){if(this.b==null||this.a<=0)return;--this.a
this.d0()},
d0:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.pI(r,this.c,t,!1)}},
d2:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.pJ(r,this.c,t,!1)}},
ea:function(a,b,c,d,e){this.d0()}}
W.lH.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.eU.prototype={
gH:function(a){return new W.iG(a,a.length,-1,null,[H.an(a,"eU",0)])},
$isV:1,
$asV:null,
$isR:1,
$asR:null,
$isC:1,
$asC:null}
W.iG.prototype={
v:function(){var t,s
t=this.c+1
s=this.b
if(t<s){s=this.a
if(t<0||t>=s.length)return H.F(s,t)
this.d=s[t]
this.c=t
return!0}this.d=null
this.c=s
return!1},
gD:function(){return this.d}}
P.mv.prototype={
dg:function(a){var t,s,r
t=this.a
s=t.length
for(r=0;r<s;++r)if(t[r]===a)return r
t.push(a)
this.b.push(null)
return s},
co:function(a){var t,s,r,q,p,o
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
s=J.ad(a)
if(!!s.$isuv)return new Date(a.a)
if(!!s.$ist7)throw H.w(new P.dr("structured clone of RegExp"))
if(!!s.$isaI)return a
if(!!s.$isd2)return a
if(!!s.$isda)return a
if(!!s.$iscI)return a
if(!!s.$isdl||!!s.$iscQ)return a
if(!!s.$isnE){r=this.dg(a)
q=this.b
p=q.length
if(r>=p)return H.F(q,r)
o=q[r]
t.a=o
if(o!=null)return o
o={}
t.a=o
if(r>=p)return H.F(q,r)
q[r]=o
s.c5(a,new P.mx(t,this))
return t.a}if(!!s.$isV){r=this.dg(a)
t=this.b
if(r>=t.length)return H.F(t,r)
o=t[r]
if(o!=null)return o
return this.fg(a,r)}throw H.w(new P.dr("structured clone of other type"))},
fg:function(a,b){var t,s,r,q,p
t=J.aT(a)
s=t.gu(a)
r=new Array(s)
q=this.b
if(b>=q.length)return H.F(q,b)
q[b]=r
for(p=0;p<s;++p){q=this.co(t.l(a,p))
if(p>=r.length)return H.F(r,p)
r[p]=q}return r}}
P.mx.prototype={
$2:function(a,b){this.a.a[a]=this.b.co(b)},
$S:function(){return{func:1,args:[,,]}}}
P.fL.prototype={$iscI:1,$isH:1,
gaf:function(a){return this.a}}
P.mw.prototype={}
P.m2.prototype={
b8:function(){return Math.random()}}
P.me.prototype={
aL:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.b.a2(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
b8:function(){this.aL()
var t=this.a
this.aL()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
ed:function(a){var t,s,r,q,p,o,n,m
t=a<0?-1:0
do{s=(a&4294967295)>>>0
a=C.b.a2(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.b.a2(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.b.a2(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.b.a2(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.b.a2(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.b.a2(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.b.a2(q-n,4294967296)&4294967295)>>>0
this.b=m
n=(n^p)>>>0
this.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o&4294967295)>>>0
this.b=o}while(a!==t)
if(o===0&&n===0)this.a=23063
this.aL()
this.aL()
this.aL()
this.aL()}}
P.cr.prototype={
m:function(a){return"Point("+H.q(this.a)+", "+H.q(this.b)+")"},
J:function(a,b){var t,s
if(b==null)return!1
if(!(b instanceof P.cr))return!1
t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gU:function(a){var t,s
t=J.b9(this.a)
s=J.b9(this.b)
return P.pj(P.en(P.en(0,t),s))},
P:function(a,b){var t,s,r,q
t=this.a
s=J.W(b)
r=s.gK(b)
if(typeof t!=="number")return t.P()
if(typeof r!=="number")return H.as(r)
q=this.b
s=s.gL(b)
if(typeof q!=="number")return q.P()
if(typeof s!=="number")return H.as(s)
return new P.cr(t+r,q+s,this.$ti)},
X:function(a,b){var t,s
t=this.a
if(typeof t!=="number")return t.X()
s=this.b
if(typeof s!=="number")return s.X()
return new P.cr(t*b,s*b,this.$ti)},
gK:function(a){return this.a},
gL:function(a){return this.b}}
P.mf.prototype={
gdw:function(a){var t=this.a
if(typeof t!=="number")return t.P()
return t+this.c},
gd7:function(a){var t=this.b
if(typeof t!=="number")return t.P()
return t+this.d},
m:function(a){return"Rectangle ("+H.q(this.a)+", "+H.q(this.b)+") "+this.c+" x "+this.d},
J:function(a,b){var t,s,r,q
if(b==null)return!1
t=J.ad(b)
if(!t.$iscv)return!1
s=this.a
r=t.gc6(b)
if(s==null?r==null:s===r){r=this.b
q=t.gcl(b)
if(r==null?q==null:r===q){if(typeof s!=="number")return s.P()
if(s+this.c===t.gdw(b)){if(typeof r!=="number")return r.P()
t=r+this.d===t.gd7(b)}else t=!1}else t=!1}else t=!1
return t},
gU:function(a){var t,s,r,q
t=this.a
s=J.b9(t)
r=this.b
q=J.b9(r)
if(typeof t!=="number")return t.P()
if(typeof r!=="number")return r.P()
return P.pj(P.en(P.en(P.en(P.en(0,s),q),t+this.c&0x1FFFFFFF),r+this.d&0x1FFFFFFF))}}
P.cv.prototype={$ascv:null,
gc6:function(a){return this.a},
gcl:function(a){return this.b},
gdF:function(a){return this.c},
gdk:function(a){return this.d}}
P.fT.prototype={$isH:1}
P.cC.prototype={$isH:1}
P.ib.prototype={$isH:1,
gK:function(a){return a.x},
gL:function(a){return a.y}}
P.ic.prototype={$isH:1,
gK:function(a){return a.x},
gL:function(a){return a.y}}
P.id.prototype={$isH:1,
gK:function(a){return a.x},
gL:function(a){return a.y}}
P.ie.prototype={$isH:1,
gK:function(a){return a.x},
gL:function(a){return a.y}}
P.ig.prototype={$isH:1,
gK:function(a){return a.x},
gL:function(a){return a.y}}
P.ih.prototype={$isH:1,
gK:function(a){return a.x},
gL:function(a){return a.y}}
P.ii.prototype={$isH:1,
gK:function(a){return a.x},
gL:function(a){return a.y}}
P.ij.prototype={$isH:1,
gK:function(a){return a.x},
gL:function(a){return a.y}}
P.ik.prototype={$isH:1,
gK:function(a){return a.x},
gL:function(a){return a.y}}
P.il.prototype={$isH:1,
gK:function(a){return a.x},
gL:function(a){return a.y}}
P.im.prototype={$isH:1,
gK:function(a){return a.x},
gL:function(a){return a.y}}
P.io.prototype={$isH:1,
gK:function(a){return a.x},
gL:function(a){return a.y}}
P.ip.prototype={$isH:1,
gK:function(a){return a.x},
gL:function(a){return a.y}}
P.iq.prototype={
gK:function(a){return a.x},
gL:function(a){return a.y}}
P.ir.prototype={$isH:1,
gK:function(a){return a.x},
gL:function(a){return a.y}}
P.is.prototype={
gK:function(a){return a.x},
gL:function(a){return a.y}}
P.it.prototype={$isH:1,
gK:function(a){return a.x},
gL:function(a){return a.y}}
P.iu.prototype={$isH:1,
gK:function(a){return a.x},
gL:function(a){return a.y}}
P.iF.prototype={$isH:1,
gK:function(a){return a.x},
gL:function(a){return a.y}}
P.iI.prototype={
gK:function(a){return a.x},
gL:function(a){return a.y}}
P.bI.prototype={}
P.cj.prototype={$isH:1}
P.iR.prototype={$isH:1,
gK:function(a){return a.x},
gL:function(a){return a.y}}
P.jr.prototype={$isH:1}
P.js.prototype={$isH:1,
gK:function(a){return a.x},
gL:function(a){return a.y}}
P.jY.prototype={$isH:1,
gK:function(a){return a.x},
gL:function(a){return a.y}}
P.k6.prototype={
gK:function(a){return a.x},
gL:function(a){return a.y}}
P.ki.prototype={$isH:1,
sa7:function(a,b){return a.type=b}}
P.kZ.prototype={
sa7:function(a,b){return a.type=b}}
P.aR.prototype={
da:function(a){throw H.w(new P.aS("Cannot invoke click SVG."))},
gc8:function(a){return new W.ej(a,"click",!1,[W.az])},
$isH:1}
P.l_.prototype={$isH:1,
gK:function(a){return a.x},
gL:function(a){return a.y}}
P.l1.prototype={$isH:1}
P.fx.prototype={}
P.l6.prototype={$isH:1}
P.ef.prototype={
gK:function(a){return a.x},
gL:function(a){return a.y}}
P.lf.prototype={$isH:1,
gK:function(a){return a.x},
gL:function(a){return a.y}}
P.lg.prototype={$isH:1}
P.em.prototype={$isH:1}
P.mk.prototype={$isH:1}
P.ml.prototype={$isH:1}
P.mm.prototype={$isH:1}
P.cD.prototype={}
S.fU.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Math Book",H.a([$.Q,$.aq,$.al],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Giant Map",H.a([$.Q,$.aq],s),null,!1,"Map to Staffs HQ")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Microscope",H.a([$.T,$.aq,$.br],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Star Chart",H.a([$.Q,$.aq],s),null,!1,"Cosmic Dot-to-Dot")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("History Book",H.a([$.Q,$.aq],s),null,!1,"Homestuck Anthology")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Radioactive Rock",H.a([$.j0,$.f4],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Compass",H.a([$.T,$.aq],s),null,!1,"Navigation Box")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.D]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.S,P.u]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.eK,$.i)
q.h(0,$.ao,$.i)
q.h(0,$.eO,$.h)
q.h(0,$.ai,$.z)
q.h(0,$.b4,$.h)
p=$.j
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.m
o=o+n+" to stop "
m=$.A
l=[U.b]
q.h(0,new R.J("Recover the Books",!1,[new U.b(o+m+"ing long enough to discover that underlings stole all the books. "),new U.b("The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "),new U.b("The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books!  ")],H.a([],l),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p=$.j
q.h(0,new R.J("Shelve the Books",!1,[new U.b("The "+p+" finds a massive library, with no books in it! They manage to get a local "+$.m+" to stop "+$.A+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.b("The "+p+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.b("The "+p+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],l),R.p2(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
p=$.j
m="The "+p+" finds a massive library, filled with books. The "
n=$.m
m=m+n+" librarian offers to help the "+p+" search for useful books. "
o="The "+p+" begins to learn about "
k=$.o
n=o+k+" and how they have persecuted the "+n+"s.  "
k="The "+p+" has read the final book about "+k+" and feels much more prepared to face them.  "
p=this.y
q.h(0,new R.J("Research the Denizen",!1,[new U.b(m),new U.b(n),new U.b(k)],H.a([],l),R.dm(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.h)
p=this.r
p.h(0,new X.r(s,q,null),$.aa)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.dM,$.z)
s.h(0,$.b4,$.i)
o=$.j
n="The "+o+"  is approached by a "
m=$.m
s.h(0,new R.J("Do the Math",!1,[new U.b(n+m+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.b("The "+o+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.b("The "+m+"  finds a "+m+" child "+$.A+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+o+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],l),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
o=$.j
m="The "+o+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
n=$.m
s.h(0,new R.J("Use the Calculator",!1,[new U.b(m),new U.b("BZAP!  There are now two "+n+"s.  BZAP!  Now there are four.  The "+o+" is getting the hang of this weird calculator that controls reality. "),new U.b("With a frantic "+$.A+", a small "+n+" sprints towards the "+o+".  A giant ogre is chasing them.  In a panic, the "+o+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],l),R.cS(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
o=$.j
s.h(0,new R.J("Solve the Equation",!1,[new U.b("The "+o+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.b("There is a flurry of motion.  The "+o+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.b("The "+o+" has done it. Against all odds they have solved the equation.  A "+$.m+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],l),R.dm(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
p.h(0,new X.r(q,s,null),$.aa)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.dM,$.z)
t.h(0,$.b4,$.i)
t.h(0,$.aK,$.z)
t.h(0,$.ov,$.z)
r=$.j
q="The "+r+"  is approached by a "
o=$.m
q=q+o+" who offers them a grant to study "
n=$.U
t.h(0,new R.J("Test the Hypothesis",!1,[new U.b(q+n+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.b("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.b("The Symposium has started. The crowd of unruly "+o+"s begins "+$.A+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+n+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],l),R.dm(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
n=$.m
r="Too many local "+n+" have fallen ill from a mysterious plague.  Those inflicted are too weak to even "
o=$.A
r=r+o+".  It is up to the "
q=$.j
r=r+q+" to figure out how to cure the disease.  They are provided with a state of the art lab and a team of ...not completely terrible "+n+"s."
m="The "+q+" has gotten far too little sleep. Suddenly, they realize the key, the one thing they have been missing: "
k=$.U
t.h(0,new R.J("Make the Cure",!1,[new U.b(r),new U.b(m+k+". It all makes sense now! "),new U.b("Each "+n+" lines up to receive their "+k+" injection. The sound of joyful "+o+" fills the air. The plague is defeated!  The "+q+" has a statue made of them in the town center. ")],H.a([],l),R.ct(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
q=$.j
t.h(0,new R.J("Be the Scientist",!1,[new U.b("The "+q+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.b("The "+q+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.b("The "+q+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.A+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.m+"s are inside the final room, outfitted for a surprise party.  It is for "+q+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],l),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(s,t,null),$.aa)},
gA:function(){return this.cx}}
L.fY.prototype={
$1:function(a){return!a.gb4()},
$S:function(){return{func:1,args:[L.c7]}}}
L.c7.prototype={
q:function(){var t,s
t=Q.t(null,null,A.O)
s=A.f("Perfectly Generic Object",H.a([],[G.N]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.a.j(t.b,new Q.e(s,t.k(s,1),[H.v(t,0)]))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.D]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.S,P.u]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bG,$.h)
q.h(0,$.ao,$.z)
q.h(0,$.ch,$.h)
q.h(0,$.aK,$.i)
q.h(0,$.d7,$.z)
p=$.j
o="The "+p+" learns that all of the local "
n=$.m
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.A+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.o
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.aM+". The "+p+" has won! "
i=[U.b]
q.h(0,new R.G("Revive the Consorts",!1,[new U.b(o),new U.b(m),new U.b(n),new U.M(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
j=this.c
j.h(0,new X.r(s,q,null),$.ac)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.dT,$.h)
s.h(0,$.dR,$.z)
s.h(0,$.dS,$.i)
s.h(0,$.bl,$.h)
s.h(0,$.aX,$.z)
p=$.j
o="The "+p+" learns that all of the local "
n=$.m
o=o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "
m="The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "
l="The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.A+"ing and chaos everywhere. "
n="The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". "
k="It is time for the "+p+"  to finally face the "
h=$.o
k=k+h+". "
g="The "+h+" lies slain by the "+p+"'s "+$.aM+". The "+p+" has won! "
s.h(0,new R.G("Produce the Goods",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(n),new U.M(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
j.h(0,new X.r(q,s,null),$.ac)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.ai,$.h)
t.h(0,$.ao,$.z)
t.h(0,$.aL,$.i)
r=$.j
q="The "+r+" learns that all of the local "
p=$.m
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
n=$.A
o=o+n+"ing about? A prophecy?  "
n="The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+n+" once. "
p="It is time for the "+r+"  to finally face the "
m=$.o
p=p+m+". "
l="The "+m+" lies slain by the "+r+"'s "+$.aM+". The "+r+" has won! "
t.h(0,new R.J("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o),new U.b(n),new U.M(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.nI(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
l=$.j
r="The "+l+" learns that all of the local "
m=$.m
r=r+m+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+l+" fluffs more pillows than any other Player ever has before them. "
m="The "+l+"  teaches the local "+m+"s to find their chill. "
n="It is time for the "+l+"  to finally face the "
o=$.o
n=n+o+". "
q="The "+o+" lies slain by the "+l+"'s "+$.aM+". The "+l+" has won! "
t.h(0,new R.G("Relax the Consorts",!1,[new U.b(r),new U.b(p),new U.b(m),new U.M(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
j.h(0,new X.r(s,t,null),$.ac)},
m:function(a){return this.x},
N:function(a,b,c,d){var t
this.d=new X.eJ("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+this.x+".xml",!1,H.a([],[X.ez]),H.a([],[M.dK]))
t=this.x
this.y=t
this.e=t+".png"
this.f=t+"Big.png"
this.q()
this.p()
t=this.b
if($.$get$bT().a4(t))H.av("Duplicate aspect id for "+this.m(0)+": "+t+" is already registered for "+J.bb($.$get$bT().l(0,t))+".")
$.$get$bT().h(0,t,this)},
gt:function(a){return this.x},
gb4:function(){return this.Q},
gO:function(){return this.dx},
gA:function(){return this.k4}}
L.X.prototype={}
M.h_.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Barbells",H.a([$.aZ,$.iZ,$.T],s),null,!1,"Strength Building Metal")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Basketball",H.a([$.iX,$.e0],s),null,!1,"Dunksphere")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Baseball Bat",H.a([$.oL,$.ay],s),null,!1,"Wooden Pole of Bone Hurting")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Rubber Ball",H.a([$.iX,$.e0],s),null,!1,"Dead Animal Corpse Ball")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Megaphone",H.a([$.cn,$.aB],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Hockey Stick",H.a([$.oL,$.ay,$.df],s),null,!1,"L Shaped Bone Hurter")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Trophy",H.a([$.T,$.f5],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Boxing Glove",H.a([$.rl,$.e0],s),null,!1,"Fist Reinforcing Pain Cubes")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Yoga Mat",H.a([$.e0,$.bx],s),null,!1,"Flesh Rubberising Practice Mat")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.D]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.S,P.u]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.ci,$.z)
q.h(0,$.aP,$.i)
q.h(0,$.bl,$.z)
p=$.j
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.m
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.A+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.b]
q.h(0,new R.J("Enter the Dungeon",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.p)
m=$.j
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.m
q.h(0,new R.J("Clear the Road",!1,[new U.b(p+n+" merchants waiting for it to be cleared. "),new U.b("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.b("With a triumphant "+$.A+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.ct(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
m=$.j
n="The "+m+"  wanders into a bunch of "
p=$.m
q.h(0,new R.J("Be the Strongest",!1,[new U.b(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.b("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.b("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.fo(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
m=this.r
m.h(0,new X.r(s,q,null),$.aa)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.ci,$.i)
t.h(0,$.dV,$.i)
t.h(0,$.aP,$.i)
s=$.j
r="The "+s+" finds a team of underdog "
p=$.m
t.h(0,new R.J("Save the Sports",!1,[new U.b(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.b("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.b("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.p2(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
p=$.m
s="A group of "+p+"s approach the "
r=$.j
s=s+r+". Apparently their sports team lost their coach to the "+$.o+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.A
t.h(0,new R.J("Coach the Sports",!1,[new U.b(s),new U.b(o),new U.b(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.ct(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
k=$.m
p="A group of "+k+"s approach the "
r=$.j
t.h(0,new R.J("Win at Sports",!1,[new U.b(p+r+". Apparently their sports team lost a member to the "+$.o+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.b("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.b("The "+r+" ganks the "+$.U+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(q,t,null),$.aa)},
gA:function(){return this.cx}}
O.h0.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Cod Piece",H.a([$.aj,$.ak,$.bq,$.E],s),"God damn it, MI. ",!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Poisoned Candy",H.a([$.oK,$.E,$.nu],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Cursed Lyre",H.a([$.b_,$.ay,$.bp,$.E,$.b7],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Snare Trap",H.a([$.aj,$.b_,$.E,$.f2],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o,n,m
t=[P.D]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.S,P.u])
t.h(0,$.bc,$.h)
t.h(0,$.eN,$.h)
t.h(0,$.aY,$.h)
t.h(0,$.ce,$.h)
t.h(0,$.bo,$.h)
t.h(0,$.dL,$.h)
r="After all the bullshit the "+$.o+" has put the native "
q=$.m
r=r+q+"s through, the "
p=$.j
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.ae+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.A
m=[U.b]
t.h(0,new R.P("Celebrate the Win",!1,[new U.b(r),new U.b(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.b(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.n(),!1,!1,new Y.cU("Rewards/no_reward.png",null),1,null,null),$.p)
p=$.m
n="A group of jubilant "+p+"s are following the "
q=$.j
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.A
t.h(0,new R.P("Lead the Parade",!1,[new U.b(n),new U.b(o+r+"ing about how they defeated the "+$.o+". Wow, this is actually kind of embarrasing. "),new U.b("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
q=$.j
t.h(0,new R.P("Behold the Glory of CodTier",!1,[new U.b("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.o+" has been defeated, perhaps they can finally focus on finding it."),new U.b("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.n(),!1,!1,new Y.ha("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.p)
q="The "+$.o+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.j
q=q+r+" organizes a huge festival for all the "
p=$.m
t.h(0,new R.au("Pull the Strings of a Universe",!1,[new U.b(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.b("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.b("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.aC(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
this.c.h(0,new X.r(s,t,null),$.aA)}}
T.h1.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Mystical Vial of Blood",H.a([$.br,$.bp,$.I,$.bX],s),null,!1,"Vial of Not-ABs Oil")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Bananaphone",H.a([$.cm,$.bp,$.I,$.bJ],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Friendship Bracelet",H.a([$.aj,$.bp,$.I,$.bX,$.np],s),null,!1,"Soul Binding Wrist Shackle")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Bonding Manacles",H.a([$.T,$.f2,$.I,$.bX,$.np,$.b1],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Friendship Stairs",H.a([$.ay,$.oQ,$.bp,$.bX,$.I,$.ak],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.D]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.S,P.u]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.cb,$.h)
q.h(0,$.oA,$.h)
q.h(0,$.aK,$.i)
p=$.j
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.m
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.U+" and some boondollars in compensation."
n=this.r2
k=[U.b]
q.h(0,new R.J("Cross the Lake",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(p)],H.a([],k),R.ct(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.p)
n=$.m
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.A+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.o
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.j
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.aM+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.h(0,new R.G("Unplug the Rivers",!1,[new U.b(p),new U.b(o),new U.b(j),new U.M(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
n=this.c
n.h(0,new X.r(s,q,null),$.ac)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.bl,$.h)
s.h(0,$.bo,$.z)
s.h(0,$.ai,$.z)
s.h(0,$.nk,$.h)
s.h(0,$.aY,$.z)
p=$.j
o="The "+p+"  and the "
m=$.cu
o=o+m+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
l="The "+p+"  and the "+m+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
j="The "+p+"  and the "+m+" trust each other to have their backs.  So when the "
i=$.o
j=j+i+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+i+"."
h="Slaying the "+i+" proves the POWER OF TEAMWORK!"
s.h(0,new R.G("Learn the Power of Teamwork",!1,[new U.b(o),new U.b(l),new U.M(j,"The "+p+" and "+m+" end up getting distracted bickering after one of the "+i+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.cT(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.a9)
h=$.j
i="The "+h+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
m=$.m
i=i+m+"s explains that before  "
p=$.o
i=i+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+m+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+h+" vows to help. "
m="The "+h+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+m+"s discover that "+m+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
j="The "+h+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
l="The "+h+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+h+"'s "+$.aM+". The "+h+" is finally free to restore the chains, bringing peace and understanding to the land. "
s.h(0,new R.G("Chain the Towers",!1,[new U.b(i),new U.b(m),new U.b(j),new U.M(l,"The tyranny  and xenophobia of "+p+" continues with the defeat of the "+h+".",o)],H.a([],k),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
o=$.j
h="The "+o+" learns of the "
p=$.ae
h=h+p+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
l=$.m
h=h+l+" explains that the "
j=$.o
l=h+j+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+l+"s from communciating with other villages and risking the entire planet falling apart.  "
h="The "+o+" hears of a fantastical secret kept at the top of the "+p+" Tower. It is said that the "+j+" seeks to topple it to gain this secret. Perhaps the "+o+" is small enough to climb the tower to claim it themselves?"
m="The "+o+" defeats a fearsome "+j+" minion, whose death unlocks the most direct path to the "+p+" Tower . "
i="The "+o+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+j+". "
o="The "+j+" lies slain by the "+o+"'s "+$.aM+". The "+o+" is finally able to see what lies at the top of the "+p+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.h(0,new R.G("Protect the Beams",!1,[new U.b(l),new U.b(h),new U.b(m),new U.M(i,"The "+p+" Tower is more at risk than ever before.",o)],H.a([],k),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
o=$.j
p="They say it can't be done, but the "+o+" is confident that they can become friends with every single "
i=$.m
p=p+i+" on "+$.ae+"book. They start small, just talking to any "+o+" that wanders by. They know they can do this!"
m="Oh god. Less than 10% of the "+o+" population have been friended. The "+o+" is starting to think that maybe they understimated how hard this would be. "
i="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+i+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+o+" schmoozes the right few "+i+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
o="The "+$.db+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.h(0,new R.P("One Degree of Separation",!1,[new U.b(p),new U.b(m),new U.b(i)],H.a([],k),R.dm(),!1,!1,new Y.B("Friend Request",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
o=$.j
i="They say it can't be done, but the "+o+" is confident that they can become friends with every single "+$.m+" on "
m=$.ae
i=i+m+"book. They start small, just talking to any "+o+" that wanders by. They know they can do this!"
p="Oh god. Less than 10% of the "+o+" population have been friended. The "+o+" is starting to think that maybe they understimated how hard this would be. "
m="The "+o+" decides that doing things the hard way is for chumps and just hacks into "+m+"book to steal all the friends. Yay, they win! They are the best! "
o="The "+$.db+" is now more popular with your friends than you are."
s.h(0,new R.P("Steal The Friends",!1,[new U.b(i),new U.b(p),new U.b(m)],H.a([],k),R.nJ(),!1,!1,new Y.B("Friend Stealer",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
o=$.j
m="The "+o+"  and the "
p=$.cu
m=m+p+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
i="The "+o+"  and the "+p+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
h=$.o
i=i+h+" doing here!?"
h="Slaying the "+h+" proves to be the thing that finally pushes the "+o+" and "+p+" together."
s.h(0,new R.G("Pale Shipping Dungeon",!1,[new U.b(m),new U.M(i,"The "+o+" and "+p+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.q(C.m)+".",h)],H.a([],k),R.cT(),!1,!1,new Y.fm(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.a9)
n.h(0,new X.r(q,s,null),$.ac)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.ai,$.h)
t.h(0,$.ao,$.z)
t.h(0,$.aL,$.i)
r="In the wake of the defeat of the "+$.o+" it becomes really how isolated the individual "
q=$.m
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.j
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.db+" to kick your ass, but luckily they have several."
t.h(0,new R.P("Connect The Villages",!1,[new U.b(r),new U.b(p),new U.b(q)],H.a([],k),R.ct(),!1,!1,new Y.B("Community Builder",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
o=$.j
q="The "+o+" learns that two prominent "
p=$.m
q=q+p+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+p+"s pick a side, and everyone is suffering."
r="The "+o+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
m="In a dramatic reveal, the "+o+" discovers that "
l=$.o
m=m+l+" is responsible for the feud. The two "+p+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
j="The "+o+" confronts "+l+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+o+" be able to claim it?"
p="The "+l+" lies slain by the "+o+"'s "+$.aM+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.A+"ing. "
t.h(0,new R.G("Stop the Feud",!1,[new U.b(q),new U.b(r),new U.b(m),new U.M(j,"The deception of "+l+" continues with the defeat of the "+o+".",p)],H.a([],k),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(s,t,null),$.ac)},
gO:function(){return this.ry},
gA:function(){return this.M}}
T.h4.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Pan's Pipe",H.a([$.b7,$.ay,$.bp,$.I],s),null,!1,"Smonkin Weeds Pipe")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Skeleton Key",H.a([$.dc,$.I],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Inspector's Fan",H.a([$.aB,$.T,$.bp,$.I],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Jet Pack",H.a([$.co,$.T,$.cn,$.I,$.ak],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.D]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.S,P.u]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.aL,$.i)
q.h(0,$.dV,$.h)
q.h(0,$.ai,$.i)
p=$.j
o="The "+p+" tries posting a letter through the "
n=$.U
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.o
o=o+m+" has screwed with the mail system, crippling the "
l=$.m
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.aM+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
i=[U.b]
q.h(0,new R.G("The Mail Goes Through",!1,[new U.b(o),new U.b(k),new U.b(n),new U.M(j,"The tyranny of "+m+" continues with the defeat of the "+p+".",l)],H.a([],i),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
l=this.c
l.h(0,new X.r(s,q,null),$.ac)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.ao,$.h)
s.h(0,$.dV,$.i)
s.h(0,$.ai,$.i)
s.h(0,$.aP,$.i)
s.h(0,$.aL,$.i)
p=$.j
o="The "+p+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+p+" decides that they should use the winds of their land for more projects. "
n="The "+p+" starts learning the uses of their lands "
m=$.U
n=n+m+" in manipulation of wind. Their future constructions are going to be amazing. "
m="The "+p+" uses "+m+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
k=$.m
k=m+k+" fields. The "+k+"s "+$.A+"ing is so joyful it's literally deafening. "
m=$.o
j=m+" is attacking the happy wind based farming community. The "+p+" has worked too hard for it all to be lost now. There can be no mercy. "
h="The "+m+" lies slain by the "+p+"'s "+$.aM+". The "+p+" is finally free to continue improving the land with wind. "
s.h(0,new R.G("Thinking With Wind Power",!1,[new U.b(o),new U.b(n),new U.b(k),new U.M(j,"The tyranny of "+m+" continues with the defeat of the "+p+".",h)],H.a([],i),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
l.h(0,new X.r(q,s,null),$.ac)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.aX,$.h)
t.h(0,$.oB,$.h)
t.h(0,$.dV,$.z)
t.h(0,$.aL,$.z)
r=$.j
q="The "+r+" is chilling in a "+$.m+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.o
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.U
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.ae+" to do control the storms in the first place, and it was inside them all along.  "
m=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.aM+". The "+r+" has become the storm master. It is them. "
t.h(0,new R.G("The Winds of Change",!1,[new U.b(q),new U.b(o),new U.b(n),new U.M(m,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
l.h(0,new X.r(s,t,null),$.ac)},
gO:function(){return this.ry},
gA:function(){return this.M}}
Z.h5.prototype={
p:function(){var t,s,r,q,p,o,n,m,l
t=[P.D]
s=H.a(["Skateboards","Bikes","Ramps","Glitches","Some Noise","Stunting","Game"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.S,P.u])
t.h(0,$.ci,$.p)
t.h(0,$.aP,$.z)
t.h(0,$.dP,$.h)
t.h(0,$.dN,$.a9)
t.h(0,$.oD,$.z)
r=$.j
q="The "+r+" is a bit confused about SBURB. apparently it's about "
p=$.U
q=q+p+"s or some noise?"
p="The "+r+" is sure that "+p+"s are like fucking dynamite in a handbag for some brosephs. But all they're saying is, when do you get to <b>thrash</b> anything?"
o="The "+r+' gives up on playing the game for now, and decides to instead bust out, and I quote, "the mad stunts all wicked up-ins".'
n=$.o
m="So ok. <br></br> An end to the disasters caused by "+n+" is something that a lot of "+$.m+"s seem hella pumped of. And their lair is sitting right in front of the "+r+", so they're like, yeah man I'll fight it."
n+=" is so wasted, ha ha. I mean damn."
l=[U.b]
t.h(0,new R.G("Bust Out the Mad Stunts all Wicked Up-Ins",!1,[new U.b(q),new U.b(p),new U.b(o),new U.M(m,"the "+r+" has failed, and the consorts remain in jeopardy of getting mud on their doll's dresses or whatever.",n)],H.a([],l),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.z)
n=$.j
r="At this point, the "+n+" would like to give a shout out to their boy "
m=$.cu
r=r+m+". the two are about to go chill in front of The Dark "+$.A+", and are so psyched of it."
o="The "+m+" was leaning against the screen door when the shit popped open. they slip down the steps and break their thumb on the lawn. It wasn't a long fall, but hey I guess a thumb bone wasn't made for supporting the brunt of a huge useless tool against wet grass."
n="The "+n+" and the "+m+" didn't actually go see the movie on account of a "+$.m+" trucking his bawling "+$.U+"-ass girth into the hospital. the "+n+" give it 1.5 "
p=$.ae
t.h(0,new R.P("Give a Shout-Out to their Boy",!1,[new U.b(r),new U.b(o),new U.b(n+p+"s out of 5 "+p+"s anyways, to keep it real. <br></br>It's OK though, The "+m+" still has another watch in them, Brotel Rwanda.")],H.a([],l),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
this.c.h(0,new X.r(s,t,null),$.ac)},
gA:function(){return this.y1}}
A.hX.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Colonel Sassacre's Daunting Text ",H.a([$.Q,$.aZ,$.bJ,$.iZ],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Wise Guy Book",H.a([$.Q,$.bJ],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Beagle Puss",H.a([$.br,$.bJ],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Novelty Microphone",H.a([$.cn,$.aB,$.bJ],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Banana",H.a([$.cm,$.bJ],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Fake Flower",H.a([$.aj,$.bJ],s),null,!1,"Flower that smells like Plastic")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Trick Handcuffs",H.a([$.T,$.bJ],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.D]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.S,P.u]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.aY,$.i)
q.h(0,$.bn,$.h)
q.h(0,$.aP,$.i)
p=$.j
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.m
o=o+n+"s are too scared to even "+$.A+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.o+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.b]
q.h(0,new R.J("Defeat the Army",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.p)
p=this.r
p.h(0,new X.r(s,q,null),$.aa)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.ci,$.z)
s.h(0,$.aP,$.h)
s.h(0,$.bn,$.h)
s.h(0,$.bc,$.h)
o=$.j
n="The "+o+" learns of an Open Mic Nite at the "
m=$.ae
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.m
s.h(0,new R.J("Win the Laughs",!1,[new U.b(n),new U.b(k+j+"s let out a braying "+$.A+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "),new U.b("It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! ")],H.a([],l),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,s,null),$.aa)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.bH,$.z)
t.h(0,$.aW,$.i)
t.h(0,$.bn,$.h)
t.h(0,$.aP,$.i)
t.h(0,$.nc,$.i)
r=$.j
q="The "+r+"  is approached by a Crafty "
o=$.m
q=q+o+" who offers them a magical "
n=$.U
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.A
t.h(0,new R.J("Trick the Villain",!1,[new U.b(q),new U.b(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.b("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(s,t,null),$.aa)},
gA:function(){return this.cx}}
M.hZ.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Can of Spray Paint",H.a([$.b0,$.T],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Sensible Chuckles Magazine",H.a([$.Q,$.aw,$.bJ,$.al],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Gentleman's Razor",H.a([$.rC,$.T,$.dd],s),null,!1,"Face Cutting Hair Remover")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("How To Draw Manga",H.a([$.Q,$.aw,$.al],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Painting of a Horse Boxing a Football Player",H.a([$.b0,$.aQ,$.Q],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Collection of Classical Works",H.a([$.aw,$.Q],s),null,!1,"Book of Naked Renaissance People")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Documentary on Horses",H.a([$.aw,$.ax,$.aQ],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Paint Set",H.a([$.b0,$.aw],s),null,!1,"Pain Drink Set")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Shaving Cream",H.a([$.co,$.aw,$.T],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Classy Suit",H.a([$.aj,$.aw],s),null,!1,"Georgio Armani Suit")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("The Fatherly Gent's Shaving Almanac ",H.a([$.Q,$.aw,$.al],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.D]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.S,P.u]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.cH,$.i)
q.h(0,$.b4,$.h)
q.h(0,$.ai,$.i)
p=$.j
o="The "+p+" visits a beautiful "
n=$.U
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.m
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.o+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.A+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.b]
q.h(0,new R.J("Catch the Thief",!1,[new U.b(o),new U.b(l),new U.b(n)],H.a([],p),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.p)
m=this.r
m.h(0,new X.r(s,q,null),$.aa)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.ci,$.z)
s.h(0,$.aP,$.i)
s.h(0,$.bn,$.z)
s.h(0,$.ao,$.i)
s.h(0,$.bc,$.h)
o=$.j
n="The "+o+" finds a troupe of dejected looking "
l=$.m
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.ae
l=l+n+" "
k=$.U
s.h(0,new R.J("Perform the Play",!1,[new U.b(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.b("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.b("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.A+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(q,s,null),$.aa)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.eN,$.z)
t.h(0,$.aY,$.z)
t.h(0,$.dL,$.z)
t.h(0,$.aW,$.z)
t.h(0,$.ao,$.i)
t.h(0,$.ai,$.i)
r=$.j
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.A
q=q+o+"ingworth, "
n=$.m
t.h(0,new R.J("Attend the Dinner Party",!1,[new U.b(q+n+" heiress to the "+$.U+" fortune. "),new U.b("The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "),new U.b("It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. ")],H.a([],p),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(s,t,null),$.aa)},
gA:function(){return this.cx}}
V.i2.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Trendy Fabric",H.a([$.b0,$.aj],s),null,!1,"Weird Tasting Candy Paper")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Necklace",H.a([$.b0,$.oN,$.np],s),null,!1,"Nasty Candy Necklace")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Sewing Needle",H.a([$.T,$.ry,$.f1],s),null,!1,"Cloth Stabbing Knife")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=$.nn
r=A.f("Broom",H.a([r,$.ay,$.aZ,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Rolling Pin",H.a([$.ay,$.rF,$.aZ],s),null,!1,"Babushkas Punishment Pole")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Velvet Pillow",H.a([$.aj,$.bx,$.bp,$.b0,$.ns],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Yarn Ball",H.a([$.b0,$.aj],s),null,!1,"Cats Plaything")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Refrigerator",H.a([$.b1,$.iZ,$.T,$.cl],s),null,!1,"Food Hardening Box")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Photo Album",H.a([$.b0,$.Q],s),null,!1,"Memory Book")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Ice Cubes",H.a([$.cl],s),null,!1,"Hard Water")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Cast Iron Skillet",H.a([$.T,$.co,$.aZ,$.iZ,$.rm],s),null,!1,"Fancy Unstoppable Weapon")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Failed Dish",H.a([$.nu],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Potted Plant",H.a([$.b0,$.no,$.e_],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Chicken Leg",H.a([$.cm,$.de,$.dc],s),null,!1,"Thicc Chicken")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Juicy Steak",H.a([$.cm,$.de],s),null,!1,"Juicy Cow Flesh")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Wedding Cake",H.a([$.b0,$.cm,$.bX],s),null,!1,"The Only Benefit of a Wedding")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.D]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.S,P.u]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bc,$.i)
q.h(0,$.bo,$.i)
q.h(0,$.aY,$.z)
p=$.j
o="The "+p+" is visited by a Beautiful "
n=$.m
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.U
l=[U.b]
q.h(0,new R.J("Design the Dress",!1,[new U.b(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.b(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.b("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.A+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
n=this.r
n.h(0,new X.r(s,q,null),$.aa)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aY,$.h)
s.h(0,$.aP,$.i)
s.h(0,$.dL,$.h)
s.h(0,$.ce,$.i)
s.h(0,$.ao,$.h)
p=$.j
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.U
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.m
s.h(0,new R.J("Bake the Cake",!1,[new U.b(o),new U.b(m),new U.b("It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.A+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! ")],H.a([],l),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(q,s,null),$.aa)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.dN,$.h)
t.h(0,$.ao,$.i)
t.h(0,$.dO,$.h)
t.h(0,$.ai,$.i)
t.h(0,$.nk,$.h)
r=$.j
q="The "+r+" finds a loom, and a Wizened "
p=$.m
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.U
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.A+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.h(0,new R.J("Weave the Cloth",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(s,t,null),$.aa)},
gA:function(){return this.cx}}
U.i3.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("~ATH - A Handbook for the Imminently Deceased ",H.a([$.al,$.aB,$.Q,$.b_,$.I,$.ak],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Egg Timer",H.a([$.ax,$.bp,$.I,$.b_],s),null,!1,"Egg That Counts Down to Your Death")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Skull Timer",H.a([$.dc,$.bp,$.I,$.b_],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Poison Flask",H.a([$.br,$.I,$.nu],s),null,!1,"Glass of Bone Hurting Juice")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Ice Gorgon Head",H.a([$.br,$.I,$.cl,$.b_,$.f2,$.j3,$.by],s),null,!1,"Oddly Attractive Decapitated Head")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Obituary",H.a([$.b1,$.by,$.b_,$.Q,$.I],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.D]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.S,P.u]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.ch,$.h)
q.h(0,$.bG,$.i)
q.h(0,$.dV,$.z)
q.h(0,$.ao,$.z)
q.h(0,$.aK,$.i)
p=$.j
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.m
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.U
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.o
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.aM+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.b]
q.h(0,new R.G("Empty the Graves",!1,[new U.b(o),new U.b(m),new U.b(l),new U.M(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
n=this.c
n.h(0,new X.r(s,q,null),$.ac)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.ch,$.h)
s.h(0,$.bG,$.i)
s.h(0,$.dU,$.a9)
s.h(0,$.dQ,$.i)
s.h(0,$.ov,$.i)
s.h(0,$.cb,$.i)
s.h(0,$.bG,$.i)
s.h(0,$.ao,$.z)
s.h(0,$.aK,$.i)
s.h(0,$.cc,$.i)
p=$.j
o="The "+p+" has found a group of Violent "
m=$.m
o=o+m+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
l=$.ae
o=o+l+"', the fuel their post apocalyptic society runs on. "
k="The "+p+" has survived a small assault team of Violent "+m+"s, and is declared their new leader. They beg and grovel and "+$.A+" and ask that the "+p+" help them take back their "+l+" from a rival gang. "
j="The "+p+" is now the warlord of nearly all of the Violent "+m+"s. There is clearly not enough "+l+" for everyone, though. It turns out that the "
h=$.o
j=j+h+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
g="There isn't enough room in this wasteland for the both of them. It's time to take out the "+h+"."
m="The "+h+" lies slain by the "+p+"'s "+$.aM+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.h(0,new R.G("Become the Warlord",!1,[new U.b(o),new U.b(k),new U.b(j),new U.M(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.cS(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.h)
m=$.j
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.U
p=p+l+"s alike. "
l=$.m+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.o
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.aM+". The "+m+" is finally free to continue improving the land. "
s.h(0,new R.G("Make This Stupid Planet Habitable",!1,[new U.b(p),new U.b(l),new U.b(g),new U.M(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(q,s,null),$.ac)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.ai,$.h)
t.h(0,$.aK,$.h)
t.h(0,$.qM,$.a9)
t.h(0,$.eK,$.z)
r=$.j
q="The "+r+" finds a small dungeon bearing the image of "
p=$.o
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.m+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.h(0,new R.G("Learn the Prophecy",!1,[new U.b(q),new U.b(o),new U.b(m),new U.M(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.cS(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
k=$.j
p="The "+k+" learns from one of their "
r=$.m
p=p+r+"s that there is an ancient prophecy of a "
l=$.ae
p=p+l+" plague that is due to kill them all any day now."
m="The "+k+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.U
m=m+o+", which currently happens to be the "+r+"s. "
r="The "+k+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+l+" plague into devastating the underlings instead of the "+r+"s. The underling army is all but decimated, and "
l=$.o
r=r+l+"s lair is all but undefended. "
o="The "+k+" is finally ready to face the "+l+"."
q="The "+l+" lies slain by the "+k+"'s "+$.aM+". The "+k+" has won! "
t.h(0,new R.G("Learn the Prophecy",!1,[new U.b(p),new U.b(m),new U.b(r),new U.M(o,"The tyranny of "+l+" continues with the defeat of the "+k+".",q)],H.a([],i),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(s,t,null),$.ac)},
gO:function(){return this.ry},
gA:function(){return this.c4}}
Z.i4.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Dream Diary",H.a([$.Q,$.al,$.I],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Interlocking Brick",H.a([$.ax,$.bp,$.aZ,$.I,$.ak],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Art Supplies",H.a([$.ax,$.bp,$.I],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.D]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.S,P.u]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.dN,$.i)
q.h(0,$.dO,$.h)
q.h(0,$.ai,$.i)
q.h(0,$.nk,$.i)
p=$.m
o="A "+p+" child tugs on the "
n=$.j
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.U
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.o
k=[U.b]
q.h(0,new R.G("Make the Thing",!1,[new U.b(o+l+"'s lair light up.  Only 99 to go!"),new U.b("An entire line of "+p+" children are "+$.A+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "),new U.b("The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."),new U.M("The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife.","Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
n=this.c
n.h(0,new X.r(s,q,null),$.ac)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aX,$.i)
s.h(0,$.dO,$.h)
s.h(0,$.d9,$.i)
s.h(0,$.bm,$.i)
s.h(0,$.nd,$.i)
s.h(0,$.bn,$.h)
p=$.j
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
m="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
l=$.m
m=m+l+"s are even starting to snigger and "
j=$.A
j=m+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+l+"s "+j+" harder. "
l="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
m=$.o
s.h(0,new R.G("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(l),new U.M("The "+m+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+m+".")],H.a([],k),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(q,s,null),$.ac)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.cH,$.h)
t.h(0,$.ne,$.i)
t.h(0,$.ai,$.i)
t.h(0,$.bm,$.h)
t.h(0,$.nd,$.h)
t.h(0,$.dO,$.i)
r=$.j
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.o
t.h(0,new R.G("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.ae+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.m+" is "+$.A+"ing in reverse. Another is in a "+$.U+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.M("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(s,t,null),$.ac)},
gO:function(){return this.rx},
gA:function(){return this.M}}
X.eJ.prototype={}
X.ez.prototype={
$S:function(){return{func:1,v:true,args:[[P.V,M.dK]]}}}
M.dK.prototype={}
U.iw.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Fluthulu Poster",H.a([$.aj,$.bx,$.by,$.eZ],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Scalemate",H.a([$.aj,$.bx,$.by],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Replica Bone Shield",H.a([$.b1,$.ax,$.dc,$.j1,$.bq],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Replica Ice Sword",H.a([$.ax,$.rr,$.j2,$.bq],s),null,!1,"Fake Hard Water Long Stabber")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Zombie Mask",H.a([$.ax,$.j3,$.de,$.by],s),null,!1,"Dead Face")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Vampire Romance Novel",H.a([$.al,$.Q,$.cK,$.by],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Wizardy Herbert",H.a([$.Q,$.aF,$.aZ],s),null,!1,"Shitty Wizard Object")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Complacency of the Learned",H.a([$.Q,$.aF,$.aZ],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Grimoire for Summoning the Zoologically Dubious ",H.a([$.Q,$.aF,$.j3,$.by,$.eZ],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Wizard Statue",H.a([$.b1,$.f4,$.aF,$.aZ,$.bq],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Mermaid Fountain",H.a([$.b1,$.oM,$.aF,$.aZ,$.bq],s),null,!1,"Water Spitting Fish Woman Statue")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.D]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.S,P.u]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.dP,$.a9)
q.h(0,$.bo,$.i)
q.h(0,$.aL,$.i)
q.h(0,$.bH,$.z)
p=$.j
o="The "+p+" learns of a Beautiful "
n=$.m
o=o+n+" who has been kidnapped by the vial "
m=$.o
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.U
j=[U.b]
q.h(0,new R.J("Save the Beautiful Consort",!1,[new U.b(o),new U.b(l+k+" can open it. Looks like it's time to go questing."),new U.b("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.n(),!1,!1,new Y.bj("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p=this.r
p.h(0,new X.r(s,q,null),$.aa)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aW,$.h)
s.h(0,$.cb,$.h)
s.h(0,$.nf,$.i)
s.h(0,$.aK,$.h)
s.h(0,$.dU,$.h)
s.h(0,$.eL,$.i)
o=$.j
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.m
s.h(0,new R.J("Do not Drink...Wine.",!1,[new U.b(n+m+" leave, and no one can remember the last time he received guests."),new U.b("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.b(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,s,null),$.aa)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.aW,$.h)
t.h(0,$.iB,$.i)
t.h(0,$.aK,$.h)
t.h(0,$.cd,$.i)
t.h(0,$.dM,$.i)
t.h(0,$.oA,$.i)
r=$.j
q="The "+r+" finds a group of three "
o=$.m
q=q+o+"s "
n=$.A
t.h(0,new R.J("Expose the Conspiracy",!1,[new U.b(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.b("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.b("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(s,t,null),$.aa)},
gA:function(){return this.cx}}
L.ix.prototype={
gO:function(){return this.rx}}
N.S.prototype={
m:function(a){return H.q(new H.cz(H.mK(this),null))+": "+H.q(this.b)}}
O.dW.prototype={}
O.iD.prototype={
$1:function(a){var t=0,s=P.n9(),r,q=this,p,o,n,m,l,k,j,i,h,g,f
var $async$$1=P.o1(function(b,c){if(b===1)return P.nW(c,s)
while(true)switch(t){case 0:p=q.c
if(J.pS(p).length===0){t=1
break}o=p.files,n=o.length,m=q.a,l=q.b,k=0
case 3:if(!(k<o.length)){t=5
break}j=o[k]
i=0
case 6:if(!(i<1)){t=8
break}h=m[i]
t=9
return P.nV(h.bw(j),$async$$1)
case 9:g=c
t=g!=null?10:11
break
case 10:f=l
t=12
return P.nV(h.cd(g),$async$$1)
case 12:f.$1(c)
t=8
break
case 11:case 7:++i
t=6
break
case 8:case 4:o.length===n||(0,H.bR)(o),++k
t=3
break
case 5:p.value=null
case 1:return P.nX(r,s)}})
return P.nY($async$$1,s)},
$S:function(){return{func:1,ret:P.b5,args:[W.y]}}}
O.iE.prototype={
$1:function(a){return J.pM(this.a)},
$S:function(){return{func:1,args:[W.y]}}}
O.ey.prototype={
bw:function(a){var t=0,s=P.n9(),r,q,p
var $async$bw=P.o1(function(b,c){if(b===1)return P.nW(c,s)
while(true)switch(t){case 0:q=new FileReader()
q.readAsArrayBuffer(a)
p=new W.fG(q,"load",!1,[W.uD])
t=3
return P.nV(p.ga6(p),$async$bw)
case 3:if(!!J.ad(C.q.gdv(q)).$isnP){r=H.ew(C.q.gdv(q),"$isnP").buffer
t=1
break}t=1
break
case 1:return P.nX(r,s)}})
return P.nY($async$bw,s)},
$asdW:function(a){return[a,P.cD]}}
O.iH.prototype={
gO:function(){return this.rx},
gA:function(){return this.B}}
E.eT.prototype={}
E.jQ.prototype={}
E.x.prototype={
m:function(a){var t="["+H.q(this.a)+" x "+H.q(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.dE.prototype={
m:function(a){var t="[(Random from "+P.nx(this.d,"(",")")+") x "+H.q(this.b)
return t+(this.c?" (from Aspect)":"")+"]"},
gA:function(){return this.d}}
E.fZ.prototype={
m:function(a){return"[Stats assigned from player Interests x"+H.q(this.b)+"]"}}
Y.iK.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("How to Teach Your Friends to Hack SBURB",H.a([$.al,$.E,$.Q,$.ak,$.nw],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Unstable Domino",H.a([$.ax,$.E,$.b_],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Exposed Thread",H.a([$.aj,$.E,$.b_],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Teetering Plate",H.a([$.nv,$.E,$.b_],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.D]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.S,P.u])
t.h(0,$.nl,$.i)
t.h(0,$.aL,$.h)
t.h(0,$.cc,$.z)
t.h(0,$.cg,$.h)
r=$.m
q="An excited "+r+" runs up to the "
p=$.j
q=q+p+" and starts to "
o=$.A
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.ae
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.U
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.o
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.b]
t.h(0,new R.G("I'm So Meta, Even This Acronym",!1,[new U.b(q),new U.b(m),new U.b(n),new U.M(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
o=$.j
t.h(0,new R.P("Cooking with Petrol",!1,[new U.b("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.o+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.b("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.b("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.m+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.n(),!1,!1,new Y.cU("Rewards/no_reward.png",null),1,null,null),$.p)
o=$.m
j="Now that the "+o+"s are free from the reign of "+$.o+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.j
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.A
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.ae+" Quest Online: The "+$.U+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.db
t.h(0,new R.P("Stop the Meta",!1,[new U.b(j),new U.b(r),new U.b(o)],H.a([],i),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.p)
p="The "+$.o+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.j
p=p+o+" shows the "
r=$.m
t.h(0,new R.au("Allow Others to Meta a Universe",!1,[new U.b(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.b("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.b("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.A+"s in time to stop them.    ")],H.a([],i),R.aC(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
this.c.h(0,new X.r(s,t,null),$.aA)},
gA:function(){return this.x1}}
Y.iL.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Sherpa Parka",H.a([$.cl,$.E,$.f0],s),"Clearly the best class uses this.",!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Guide Book",H.a([$.ak,$.cl,$.al,$.Q,$.E,$.aq],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Whistle",H.a([$.T,$.E,$.cn],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Announcement System",H.a([$.T,$.E,$.aB,$.aq],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o
t=[P.D]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.S,P.u])
t.h(0,$.nl,$.h)
t.h(0,$.aL,$.h)
t.h(0,$.cc,$.i)
t.h(0,$.cg,$.h)
r="Now that the "+$.o+" is out of the way, a group of "
q=$.m
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.j
o=[U.b]
t.h(0,new R.P("Find the Home",!1,[new U.b(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.b("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.b("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.A+", but they are happy.")],H.a([],o),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
q="The "+$.o+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.j
t.h(0,new R.au("Find the Frogs",!1,[new U.b(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.m+" "+$.A+"s in time to stop them.    ")],H.a([],o),R.aC(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
this.c.h(0,new X.r(s,t,null),$.aA)}}
T.iM.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Doll",H.a([$.nv,$.b0,$.bz,$.I],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Puppet",H.a([$.ay,$.bz,$.I,$.ak,$.by],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Mirror",H.a([$.oR,$.I],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Shipping Grid",H.a([$.Q,$.I,$.cK],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Shades",H.a([$.aQ,$.br,$.I],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.D]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.S,P.u]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.dQ,$.z)
q.h(0,$.d8,$.h)
q.h(0,$.aP,$.i)
p=$.j
o="The "+p+", guided by a "+$.m+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.o
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.aM+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.b]
q.h(0,new R.G("Find Yourself",!1,[new U.b(o),new U.b(n),new U.b(m),new U.M(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
j=$.j
p="The "+j+" finds a Violent "
l=$.m
p=p+l+". A Magical Talking "
k=$.U
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.o
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.h(0,new R.G("Steal the Heart",!1,[new U.b(p),new U.b(m),new U.b(k),new U.M(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.nJ(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.h)
h=this.c
h.h(0,new X.r(s,q,null),$.ac)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.bn,$.h)
s.h(0,$.nf,$.h)
s.h(0,$.dV,$.i)
s.h(0,$.aK,$.h)
s.h(0,$.aY,$.i)
s.h(0,$.cc,$.z)
p=$.j
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.U
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.o
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.aM+". The "+p+" is victorious. "
s.h(0,new R.G("Confront yourself.",!1,[new U.b(o),new U.b(m),new U.b(n),new U.M(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
j="Now that the "+$.o+" has been defeated, a Copy "
p=$.j
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.m
j=j+k+"s "
l=$.A
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.db+" knows who they are, and their confidence is turned into a pink lightning attack."
s.h(0,new R.P("Prove Your Identity",!1,[new U.b(j),new U.b(l),new U.b(k)],H.a([],i),R.ct(),!1,!1,new Y.B("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
p=$.j
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.o
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.h(0,new R.G("Shatter The Mirrors",!1,[new U.b(k),new U.b(l),new U.b(j),new U.M(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.cS(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.h)
h.h(0,new X.r(q,s,null),$.ac)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.iy,$.h)
t.h(0,$.aY,$.h)
t.h(0,$.nj,$.h)
t.h(0,$.dL,$.i)
t.h(0,$.eL,$.h)
t.h(0,$.bo,$.i)
t.h(0,$.d8,$.z)
r=$.j
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.m
t.h(0,new R.G("Ship All the Ships",!1,[new U.b(q+p+"s have no idea what's coming. "),new U.b("The "+r+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.A+"s ring out through the air.  "),new U.b("The "+r+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.ae+" laws put in place by "+$.o+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
r=$.j
p="The "+r+" finds a weeping Broken Hearted "
q=$.m
p=p+q+". The most Fetching "+q+" of their dreams just turned them down to the "
o=$.ae
p=p+o+" Dance and they are miserable. On a whim, the "+r+" offers to take them instead. The "+q+" immediately brightens.  "
n="The Broken Hearted "+q+" and the "+r+" are shopping for matching outfits to wear to the "+o+" Dance. Oh look, there is the Fetching "+q+". The Broken Hearted "+q+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+r+" goes over to the Fetching "+q+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+q+" really is busy with their job as a "
m=$.A
t.h(0,new R.P("Heal The Broken Heart",!1,[new U.b(p),new U.b(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.b("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.fo(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
q=$.j
m="The "+q+"  and the "
r=$.cu
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.o
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.h(0,new R.G("Flushed Shipping Dungeon",!1,[new U.b(m),new U.M(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.q(C.m)+".",n)],H.a([],i),R.cT(),!1,!1,new Y.eR(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.a9)
n=$.j
r="The "+n+"  and the "
q=$.cu
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.o
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.h(0,new R.G("Pitched Shipping Dungeon",!1,[new U.b(r),new U.M(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.q(C.m)+".",m)],H.a([],i),R.cT(),!1,!1,new Y.fn(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.a9)
h.h(0,new X.r(s,t,null),$.aa)},
gO:function(){return this.rx},
gA:function(){return this.M}}
B.iN.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Family Ashes",H.a([$.b1,$.co,$.E,$.b_,$.nq],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Last Will and Testament",H.a([$.ak,$.Q,$.E,$.b_,$.nr],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Grooming Guide",H.a([$.al,$.E,$.aw],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Powered Attorney",H.a([$.rf,$.E,$.oI,$.nr],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Executer's Ax",H.a([$.rb,$.E,$.dd,$.nr],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o
t=[P.D]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.S,P.u])
t.h(0,$.aX,$.i)
r=$.o
q="With the death of the "+r+", it now falls to the "
p=$.j
o=[U.b]
t.h(0,new R.P("Inherit Responsibilities",!1,[new U.b(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.b("After organizing taxes, approving budgets and listening to "+$.m+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.b("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
r="The "+$.o+" has released the frogs into the "
p=$.j
t.h(0,new R.au("Inherit the Frogs",!1,[new U.b(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.m+"s 'help' by "+$.A+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.      ")],H.a([],o),R.aC(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
this.c.h(0,new X.r(s,t,null),$.aA)}}
X.iO.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Wand",H.a([$.ay,$.I,$.aF,$.bt],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Angel Feather",H.a([$.bt,$.iY,$.I,$.cJ,$.b7,$.ak,$.aF],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Never Ending Story DVD",H.a([$.oU,$.oQ,$.I,$.aF,$.bJ,$.bt],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Candle",H.a([$.bt,$.cJ,$.I,$.co],s),null,!1,"Dying Light Stick")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Fairy Figurine",H.a([$.ax,$.cJ,$.I,$.bt],s),null,!1,"Tiny Petrified Tinkerbell")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.D]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.S,P.u]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.ou,$.h)
q.h(0,$.bo,$.i)
q.h(0,$.ai,$.h)
q.h(0,$.bm,$.h)
p=$.j
o="The "+p+" is just minding their own business when they see a wizened "
n=$.m
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.A+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.o
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.U
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
n=[U.b]
q.h(0,new R.G("Learn to Believe",!1,[new U.b(o),new U.b(m),new U.b(l),new U.M(k,"The "+p+" fails to believe hard enough. They are defeated.",j)],H.a([],n),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
j=this.c
j.h(0,new X.r(s,q,null),$.ac)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aW,$.h)
s.h(0,$.nc,$.i)
s.h(0,$.d9,$.h)
p=$.j
o="The "+p+"  is approached by a Crafty "
m=$.m
o=o+m+" who offers them a magical "
l=$.U
o=o+l+", guaranteed to grant them the power to believe things into existance once per year. The "+p+" is shocked to discover it was a ruse, and the Crafty "+m+" has already escaped to the side with their ill earned boonies. "
k="The "+p+" is contemplating the magical "+l+" they wasted their boonies on.  Why would the Crafty "+m+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+p+" spends time imagining what they would try to make if it were true."
i="The "+p+" finds a grey town of despondant "+m+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+p+" learns that "
h=$.o
i=i+h+" has been hoarding all the belief and steals it from the "+m+"s regularly. They have to be stopped!"
g="The "+p+" approaches "+h+", magical "+l+" in hand. The "+h+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+p+" feels frozen. They cannot take a single step towards "+h+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+l+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
m=h+"'s belief was no match for the power of the "+l+". They are dead, and hope will be free to flourish among the "+m+"s once again."
s.h(0,new R.G("Believe the Lies",!1,[new U.b(o),new U.b(k),new U.b(i),new U.M(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],n),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
j.h(0,new X.r(q,s,null),$.ac)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.ai,$.h)
t.h(0,$.ce,$.z)
t.h(0,$.b4,$.h)
t.h(0,$.bm,$.h)
r=$.j
q="The "+r+" finds a grey town of despondant "
p=$.m
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.o
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.U
t.h(0,new R.G("Be the Change You Believe In",!1,[new U.b(q),new U.b(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.b("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.M("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],n),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
r=$.j
o="The "+r+" discovers a group of "
p=$.m
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.o
t.h(0,new R.G("The Ultimate Hope",!1,[new U.b(o),new U.b(l),new U.b(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.M("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],n),R.fo(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.h)
j.h(0,new X.r(s,t,null),$.ac)},
gO:function(){return this.rx},
gA:function(){return this.w}}
B.iU.prototype={
$1:function(a){return!a.gb4()},
$S:function(){return{func:1,args:[B.ck]}}}
B.ck.prototype={
q:function(){var t,s
t=Q.t(null,null,A.O)
s=A.f("Perfectly Generic Object",H.a([],[G.N]),null,!1,"The Third Entry for This Fucking Block")
C.a.j(t.b,new Q.e(s,t.k(s,1),[H.v(t,0)]))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l
t=[P.D]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.S,P.u]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bG,$.h)
q.h(0,$.ao,$.z)
q.h(0,$.ch,$.h)
q.h(0,$.aK,$.i)
q.h(0,$.d7,$.z)
p=$.j
o="The "+p+" learns that all of the local "
n=$.m
m=[U.b]
q.h(0,new R.J("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.A+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
n=this.r
n.h(0,new X.r(s,q,null),$.aa)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.dT,$.h)
s.h(0,$.dR,$.z)
s.h(0,$.dS,$.i)
s.h(0,$.bl,$.h)
s.h(0,$.aX,$.z)
p=$.j
o="The "+p+" learns that all of the local "
l=$.m
s.h(0,new R.J("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.A+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(q,s,null),$.aa)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.ai,$.h)
t.h(0,$.ao,$.z)
t.h(0,$.aL,$.i)
r=$.j
q="The "+r+" learns that all of the local "
p=$.m
t.h(0,new R.J("Relax the Consorts",!1,[new U.b(q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+r+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+r+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p=$.j
r="The "+p+" learns that all of the local "
q=$.m
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
l=$.A
t.h(0,new R.J("Relax the Consorts According to Prophecy",!1,[new U.b(r),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.nI(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
n.h(0,new X.r(s,t,null),$.aa)},
m:function(a){return this.ch},
gb4:function(){return this.a},
gA:function(){return this.c},
gt:function(a){return this.ch}}
A.O.prototype={
av:function(a,b){var t=b.gcc()-this.gcc()
if(t>0)t=1
else if(t<0)t=-1
return C.b.Z(t)},
gfk:function(){var t,s,r,q,p,o,n
t=H.a([],[P.D])
s=new A.fp(null,null)
s.cz(this.e.a)
if(this.f===0)return t
r=P.cq(G.qB(this.e),!0,G.N)
C.a.aS(r,new A.j6())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.bR)(r),++p){o=r[p]
n=o.gfj()
n=n.gV(n)
if(!n)t.push(" "+Y.u7(s.fR(o.gfj())))}return t},
gcc:function(){var t,s,r
for(t=this.e,s=new P.bf(t,t.r,null,null,[null]),s.c=t.e,r=0;s.v();)r+=s.d.gcc()
return r},
gfc:function(){var t=this.e
return new H.bC(t,new A.j5(),[H.v(t,0)])},
gft:function(){var t,s,r,q,p
for(t=this.gfk(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.bR)(t),++q)r+=t[q]+" "
return r+this.c},
m:function(a){return this.gft()},
e4:function(a,b,c,d,e){var t,s,r
t=P.nC(b,null)
this.e=t
if(t.a===0)t.j(0,$.rn)
s=P.nC(this.gfc(),null)
for(t=new P.bf(s,s.r,null,null,[null]),t.c=s.e;t.v();){r=t.d
this.e.bq(0,r.gdY())
this.e.a0(0,r)}$.$get$oW().push(this)},
$isaE:1,
$asaE:function(){return[A.O]}}
A.j6.prototype={
$2:function(a,b){return a.gfO().as(0,b.gfO().Z(0))},
$S:function(){return{func:1,args:[G.N,G.N]}}}
A.j5.prototype={
$1:function(a){return!1},
$S:function(){return{func:1,args:[G.N]}}}
N.ja.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Gavel",H.a([$.ay,$.rp],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Caution Tape",H.a([$.ax,$.f2],s),null,!1,"Impassible Barrier")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Deerstalker Hat",H.a([$.aj,$.b0],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Mystery Novel",H.a([$.Q,$.al],s),null,!1,"Book where the Criminal was the Janitor")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Dish Served Cold",H.a([$.no,$.cm,$.cl],s),null,!1,"REVENGE")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Pony Pals: Detective Pony ",H.a([$.Q,$.al,$.aQ],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Handcuffs",H.a([$.b1,$.T,$.f2],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l
t=[P.D]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.S,P.u]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.dP,$.z)
q.h(0,$.aW,$.i)
q.h(0,$.b4,$.z)
p=$.j
o="The "+p+" finds an elaborate courtroom full of "+$.A+"ing "
n=$.m
m=[U.b]
q.h(0,new R.J("Shit, Lets Be Lawyers",!1,[new U.b(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.b("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.b(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.U+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
n=this.r
n.h(0,new X.r(s,q,null),$.aa)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aW,$.h)
s.h(0,$.cc,$.i)
s.h(0,$.bl,$.i)
p=$.j
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.m
s.h(0,new R.J("Enforce the Law",!1,[new U.b(o+l+" yells 'Stop that thief' in betwen "+$.A+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "),new U.b("The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."),new U.b("A missing "+$.U+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. ")],H.a([],m),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(q,s,null),$.aa)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.aW,$.h)
t.h(0,$.aX,$.i)
t.h(0,$.cb,$.z)
t.h(0,$.dU,$.i)
t.h(0,$.dQ,$.i)
t.h(0,$.eM,$.i)
t.h(0,$.ng,$.i)
r=$.j
q="The "+r+" finds a crowd of "
p=$.A
q=q+p+"ing "
o=$.m
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won!"
o=this.y
t.h(0,new R.J("Start a Revolution",!1,[new U.b(q),new U.b(r),new U.b(p)],H.a([],m),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(s,t,null),$.aa)},
gA:function(){return this.cx}}
S.jc.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Shining Armor",H.a([$.b1,$.nt,$.E,$.j1],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Excalibur",H.a([$.ak,$.nt,$.E,$.f1,$.dd,$.j2],s),"Knight Shit",!1,"Masamune")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Noble Steed",H.a([$.T,$.E,$.de,$.bz],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Hero's Shield",H.a([$.b1,$.j1,$.E,$.nt],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o,n,m
t=[P.D]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.S,P.u])
t.h(0,$.ni,$.h)
t.h(0,$.cf,$.h)
t.h(0,$.ci,$.h)
t.h(0,$.eM,$.h)
t.h(0,$.dP,$.i)
r="The "+$.o+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.j
p=[U.b]
t.h(0,new R.au("Breed the Frogs",!1,[new U.b(r+q+" collects all sorts of frogs. Various "+$.m+"s 'help' by "+$.A+"ing up a storm. "),new U.b("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.b("The "+q+" has found the final frog.      ")],H.a([],p),R.aC(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q=$.o
r="Now that the "+q+" is defeated, the "
o=$.m
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.j
t.h(0,new R.P("Exploit the Heat",!1,[new U.b(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.b("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.b("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.aC(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
o=$.ae
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.o
n=n+q+". A Learned "+$.m+" explains that it can only be defeated by the Legendary "
r=$.U
n=n+r+" Blade. The "
m=$.j
t.h(0,new R.P("Fight the Beast",!1,[new U.b(n+m+" prepares to go questing for it. "),new U.b("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.b("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
r="The volcanos of the land are weirdly active after the defeat of the "+$.o+". Onehas begins to erupt near a "
m=$.m
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.A+"s, but not really doing anything to evacuate or save anyone. The "
o=$.j
t.h(0,new R.P("Protect the Consorts",!1,[new U.b(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.b("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.b("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
this.c.h(0,new X.r(s,t,null),$.aA)}}
Q.je.prototype={
gO:function(){return this.rx}}
K.jf.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Creeping Vine",H.a([$.ay,$.I,$.e_,$.bz],s),null,!1,"Sentient Plant Tentacles")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Lollipop",H.a([$.oK,$.I,$.bX],s),null,!1,"Sentient Plant Tentacles")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Golem",H.a([$.b1,$.f4,$.I,$.bz],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Ectoplasm",H.a([$.nq,$.I,$.bX],s),null,!1,"Ghost [Censored]")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Aqua Vitae",H.a([$.br,$.I,$.bX,$.ak,$.aF],s),null,!1,"Tears of JR")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Homunculus",H.a([$.de,$.I,$.bz],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.D]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.S,P.u]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.aL,$.h)
q.h(0,$.ao,$.h)
q.h(0,$.iz,$.z)
q.h(0,$.ai,$.i)
q.h(0,$.nl,$.i)
q.h(0,$.bH,$.z)
p=$.j
o="The "+p+" finds a village of compliant "
n=$.m
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.A+"ing in panic. Don't upset "
m=$.o
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.b]
q.h(0,new R.G("Restore the Forest",!1,[new U.b(o),new U.b(l),new U.M(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
n=this.c
n.h(0,new X.r(s,q,null),$.ac)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aL,$.h)
s.h(0,$.aY,$.h)
s.h(0,$.bH,$.z)
s.h(0,$.ai,$.i)
o=$.j
m="The "+o+" finds a lush garden, dutifully tended to by "
l=$.m
m=m+l+"s. Unfortunately, the food is left to rot in piles, as Underling brigands block the road and prevent the produce from being distributed. The "+o+" agrees to help."
k="The "+o+" sneaks along the main road and finds the Underling Brigands lying in wait. They are dispatched in short order, and the "+o+" heroically informs the "+l+"s that they can once again begin shipping their food."
l="The "+o+" follows the road to find a new village, fileld with hungry "+l+"s. Apparently the food has been stolen by a "
j=$.o
l=l+j+" minion! Enraged, the "+o+" tracks down the minion and defeats it. They now know this will not be the end of it. They need to nip this in the bud. "
i="The "+o+" approaches the "+j+". It ends here."
o="The "+o+" was strong enough to win! The consorts will never have to worry about their food being destroyed senselessly again."
s.h(0,new R.G("Distribute the Food",!1,[new U.b(m),new U.b(k),new U.b(l),new U.M(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(q,s,null),$.ac)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.bG,$.h)
t.h(0,$.ao,$.z)
t.h(0,$.ch,$.h)
t.h(0,$.aK,$.i)
t.h(0,$.d7,$.i)
t.h(0,$.na,$.i)
r="Drawn by wailing and "+$.A+"ing, the "
q=$.j
r=r+q+" enters a rotting "
o=$.m
r=r+o+" village. They are in the throes of a famine they explain. Locusts damage their fields and blight destroys the weakened remainder. They cannot feed everyone once winter comes if this continues.   The "+q+" vows to help."
m="The "+q+" strifes countless swarms of locusts, but there seems to be no end to them. They finally track down a hive, guarded by several "
l=$.o
m=m+l+" minions. It is as easy as thinking to destroy everything, but the "+q+" is left uneasy. Why were the minions causing this on purpose?  "
k="Although the locusts have thinned in numbers, the blight is as strong as ever. Even the most potent of alchemized fungicides seem to only keep back the blight for a day. At their wits end, the "+q+" stays in the fields overnight to discover that "+l+" minions are spreading a strange powder on the fields. Defeating them is a start, but clearly "+l+" is dedicated to causing famine. They must be dealt with. "
l="The "+q+" faces the "+l+". It will end here."
j="The "+q+" is strong enough to impose their will on the world. Famine will not trouble the "+o+"s any longer."
t.h(0,new R.G("Protect the Farms",!1,[new U.b(r),new U.b(m),new U.b(k),new U.M(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(s,t,null),$.ac)},
gO:function(){return this.rx},
gA:function(){return this.w}}
G.jg.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("FAQ",H.a([$.aB,$.I,$.aq,$.j_],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Flashlight",H.a([$.ax,$.I,$.cJ,$.aB,$.j_],s),null,!1,"Tube of Localised Sun")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Octet",H.a([$.I,$.cJ,$.j_,$.ak,$.oM],s),null,!1,"D13")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Horseshoe",H.a([$.rq,$.I,$.aZ],s),null,!1,"Horse Sneaker")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Rabbits Foot",H.a([$.rB,$.I],s),null,!1,"Rabbit Remains")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("4 Leaf Clover",H.a([$.e_,$.I,$.cJ,$.j_],s),null,!1,"Plant of Luck +4")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("8-Ball",H.a([$.br,$.I,$.bz],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.D]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.S,P.u]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.oz,$.h)
q.h(0,$.dN,$.i)
q.h(0,$.cd,$.h)
q.h(0,$.d8,$.h)
p=$.j
o="The "+p+" is searching for the lair of "
n=$.o
o=o+n+" when some local "
m=$.m
o=o+m+"s run past them carrying what appears to be primitive filming equipment and fancy props. After walking a little while longer the "+p+" comes across a huge building in the distance. On the front displays a sign that seems to advertise some sort of game show."
l="The "+p+" reaches the building and enters to find that it is in fact the filming location of a Game Show run by the local "+m+"s. What catches the "+p+"\u2019s eye, however, is that apparently the Grand Prize for winning the show is an exclusive meeting with none other than "+n+"! This could be the "+p+"\u2019s big chance! With determination in their eye, they eagerly sign up for the next scheduled airing of the show."
k="Tonight\u2019s episode of the game show has gotten underway, and so far it looks like the "+p+" is doing pretty well. The show cuts to a commercial break, and the "+p+" take the time to reflect on the current situation. With their superior intellect they easily win the first round, a test of intelligence, by a mile compared to their fellow "+m+" contestants. The "+p+" struggles with the second round, a test of athleticism through an obstacle course, however, and one of their opponents gains a point, tying up the game. If the "+p+" fails to win the next round, it could potentially jeopardize their chance to fight "+n+". This next round will be one the "+p+" cannot afford to lose."
j="Through sheer luck the "+p+" manages to spin a lucky number on the final round, which is merely a spin on the wheel with the number it rests on determining your reward. Your  "+m+" opponents shake your hand as they admit defeat, as "+n+" emerges from the shadows, ready to fight you at last."
m=n+" lies slain. The "+m+" host congratulates you on your victory and presents you your second prize, a brand new car! Unfortunately it is subsequently stolen by your opponents, who drive off, never to be seen again."
i=[U.b]
q.h(0,new R.G("Be the Contestant",!1,[new U.b(o),new U.b(l),new U.b(k),new U.M(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
m=$.j
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.A+"ing "+$.m+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.o
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.h(0,new R.G("Go Big or Go Home",!1,[new U.b(n),new U.b(p),new U.b(j),new U.M(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
m=this.c
m.h(0,new X.r(s,q,null),$.ac)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aL,$.i)
s.h(0,$.ai,$.i)
s.h(0,$.ce,$.h)
s.h(0,$.oy,$.h)
s.h(0,$.dR,$.h)
s.h(0,$.nc,$.h)
p=$.j
o="The "+p+" walks into a "
n=$.m
o=o+n+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
l=$.U
o=o+l+", but "
k=$.o
o=o+k+" has hoarded all of the planets "
j=$.ae
l=o+j+" Candles, and everyone knows you cant have a good "+l+" ceremony without candles! The "+p+" vows to take back some "+j+" Candles for the poor "+n+"s. "
o="After a long search, the "+p+" has found the warehouse where "+k+" has stored all the candles. "+j+" Candles must be very valuable to "+k+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+p+" wants to sneak in without alerting a horde of "+k+" minions."
h="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+p+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+k+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+p+" to slip inside with ease. Captchaloging as much "+j+" Candles as they can, the "+p+" triumphantly returns to the village among the joyful "+$.A+"ing of the "+n+"s."
k="The "+p+" is ready to challenge the "+k+" to keep them from restealing the "+j+" candles. "
n="Never again shall the "+n+"s be without "+j+" Candles!"
s.h(0,new R.G("The Candlestick Taker",!1,[new U.b(l),new U.b(o),new U.b(h),new U.M(k,"The "+j+" candles are once again at risk.",n)],H.a([],i),R.nJ(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.h)
n=$.j
j="The "+n+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.m
j=j+k+" explains that the "
h=$.o
s.h(0,new R.G("Shine the Light",!1,[new U.b(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+n+" vows to help.   "),new U.b("The "+n+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.A+"s as they bask in the light. The "+n+" feels good about a job well done. "),new U.b("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+n+" must prepare themself for a tough fight.  "),new U.M("The "+n+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(q,s,null),$.ac)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.eK,$.i)
q.h(0,$.ao,$.i)
q.h(0,$.eO,$.h)
q.h(0,$.ai,$.i)
q.h(0,$.b4,$.h)
p="Now that the "+$.o+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.j
p=p+o+" sets up a wiki and settles in to help the "
n=$.m
p=p+n+"s deal with it all."
n="Within barely any time at all, the "+n+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+o+" makes sure all of the information is from credible sources."
o="When the "+o+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.db+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.h(0,new R.P("Moderate the Wiki",!1,[new U.b(p),new U.b(n),new U.b(o)],H.a([],i),R.ct(),!1,!1,new Y.B("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
l="Now that the "+$.o+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.j
l=l+o+" shrugs and sets up a wiki and lets the "
n=$.m
l=l+n+"s deal with it all."
n="Within barely any time at all, unmoderated "+n+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+o+" alone, and each claims they are a different SPECIES entirely. The "+o+" finds this to be hilarious."
o="Luckily it turns out all that disinformation running around about the "+o+" thwarts some would be assasins. It turns out the "+o+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
p="The "+$.db+" allows you to make you own assumptions about things, and be destroyed by them."
q.h(0,new R.P("Create the Wiki",!1,[new U.b(l),new U.b(n),new U.b(o)],H.a([],i),R.cS(),!1,!1,new Y.B("Disinformation Network",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
p=$.m
o=p+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
n=$.j
o=o+n+" possibly stop it?"
p="The "+n+" pours over maps and charts. What do the sick "+p+"s have in common with each other?  Finally, there is a flash of inspiration. "+p+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+n+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+n+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+n+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+n+" traces the contaminated river back to it's source. The "
j=$.o
q.h(0,new R.G("Shed the Light",!1,[new U.b(o),new U.b(p),new U.b(l),new U.M(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+n+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(s,q,null),$.ac)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.cd,$.h)
t.h(0,$.oz,$.h)
t.h(0,$.d8,$.i)
t.h(0,$.bo,$.i)
t.h(0,$.ox,$.i)
t.h(0,$.aK,$.z)
t.h(0,$.ci,$.z)
t.h(0,$.aP,$.i)
t.h(0,$.bn,$.z)
t.h(0,$.ao,$.i)
t.h(0,$.bc,$.h)
s=$.j
r="The "+s+" is approached by a Fast Talking "
p=$.m
r=r+p+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
o=$.U
r=r+o+". The "+s+" agrees to perform the titular role."
n="The opening night performance of the Beautiful "+o+" is a huge success! The "+$.A+"ing of the fans is it's own reward!"
o="When it comes time for the next performance of the Beautiful "+o+", the "+s+" is turned away at the door. Apparently the "
l=$.o
p=o+l+" rampaged and terrorized "+p+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
l="There is not enough room on the stage for both of them. The "+s+" challenges the "+l+" to a glamour off, and wins handily. Enraged, the "+l+" attacks."
o="The "+s+" can finally get back to their promising acting career in peace."
t.h(0,new R.G("Be the Star",!1,[new U.b(r),new U.b(n),new U.b(p),new U.M(l,"The actig career of the "+s+" is in shambles.",o)],H.a([],i),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
o="After the "+$.o+", the "
s=$.j
o=o+s+" is disappointed to learn that barely any of the "
l=$.m
o=o+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
p="The "+$.db+" is famous, and everyone in this fight is lucky to have met them."
t.h(0,new R.P("Be the Biggest Star in Paradox Space",!1,[new U.b(o),new U.b(l),new U.b(s)],H.a([],i),R.ct(),!1,!1,new Y.B("What's my name?",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
m.h(0,new X.r(q,t,null),$.ac)},
gO:function(){return this.rx},
gA:function(){return this.w}}
Z.jm.prototype={
q:function(){var t,s,r,q
t=this.y2
s=[G.N]
r=A.f("Dream Bubbles Book",H.a([$.Q,$.aw,$.al,$.rj],s),null,!1,null)
C.a.j(t.b,new Q.e(r,t.k(r,1),[H.v(t,0)]))
t=Q.t(null,null,A.O)
r=A.f("Uno Reverse Card",H.a([$.re,$.oT,$.aw],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Lord's Cape",H.a([$.aj,$.E,$.aw],s),"Lord Shit",!1,"Shoguns Cape")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Drawing Tablet",H.a([$.nw,$.E,$.aw],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("How to Make Friends And Influence People",H.a([$.ak,$.Q,$.E,$.dZ,$.al],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o,n,m
t=[P.D]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.S,P.u]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.cb,$.z)
q.h(0,$.dU,$.z)
q.h(0,$.aK,$.z)
q.h(0,$.bl,$.i)
p="The "+$.o+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.j
p=p+o+" comands that the "
n=$.m
m=[U.b]
q.h(0,new R.au("Command Minions to Breed Frogs",!1,[new U.b(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.A+"s. "),new U.b("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.aC(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
o="As soon as the "+$.o+" is defeated, the "
n=$.m
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.j
q.h(0,new R.P("Conquer Everything",!1,[new U.b(o+p+" is up to the task.  "),new U.b("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.b("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p=this.c
p.h(0,new X.r(s,q,null),$.aA)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.qI,$.h)
t.h(0,$.bm,$.h)
t.h(0,$.ao,$.h)
t.h(0,$.ai,$.i)
s="The "+$.o+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.j
s=s+r+" comands that the "
o=$.m
t.h(0,new R.au("Command Minions to Breed Frogs",!1,[new U.b(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.A+"s. "),new U.b("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.aC(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
r="As soon as the "+$.o+" is defeated, the "
o=$.m
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.j
t.h(0,new R.P("Praise Dutton",!1,[new U.b(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.b("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.b("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",this.y2,"Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,t,null),$.aA)},
gA:function(){return this.n}}
S.jn.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Alternate Costume",H.a([$.aj,$.E,$.aF,$.ak,$.bs],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Mage's Cape",H.a([$.aj,$.E,$.aF],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Mage's Staff",H.a([$.ay,$.E,$.aZ,$.aF,$.df],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Walking Broom",H.a([$.nn,$.ay,$.E,$.bz,$.aF,$.df],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o,n
t=[P.D]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.S,P.u])
t.h(0,$.dM,$.h)
t.h(0,$.eM,$.i)
t.h(0,$.aX,$.h)
t.h(0,$.dS,$.i)
t.h(0,$.bG,$.z)
r="The "+$.o+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.j
p=[U.b]
t.h(0,new R.au("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.aC(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q=$.j
t.h(0,new R.P("Work With Exiles",!1,[new U.b("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.b("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.n(),!1,!1,new Y.bj("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
q=$.j
r="The "+q+" is feeling quite pleased with their victory over the "+$.o+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.ae
t.h(0,new R.P("Suffer Visions",!1,[new U.b(r+o+". Oh god, why is this happening?"),new U.b("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.b("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
q="Now that the "+$.o+" has been defeated, the "
o=$.m
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.j
q=q+r+"'s help in planning the brand new city of "
n=$.ae
t.h(0,new R.P("Become the Mayor",!1,[new U.b(q+n+"burg."),new U.b("A panicking "+o+" runs up to the "+r+", "+$.A+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.b("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
this.c.h(0,new X.r(s,t,null),$.aA)},
gA:function(){return this.y1}}
U.jo.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Maiden's Breath",H.a([$.e_,$.E,$.b0],s),null,!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Feather Duster",H.a([$.ay,$.E,$.df,$.iY],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Valkyrie Shield",H.a([$.b0,$.b1,$.T,$.E,$.ak,$.j1,$.r9],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Maiden's Songbook",H.a([$.Q,$.E,$.b7,$.al],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o,n
t=[P.D]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.S,P.u])
t.h(0,$.cg,$.h)
t.h(0,$.aL,$.h)
t.h(0,$.ai,$.i)
t.h(0,$.ao,$.i)
t.h(0,$.ce,$.i)
t.h(0,$.bn,$.i)
r="The "+$.o+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.j
r=r+q+" asks local  "
p=$.m
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.A
n=[U.b]
t.h(0,new R.au("Serve the  Frogs",!1,[new U.b(r+o+"s.  It's a lively neighborhood event."),new U.b("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.aC(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q=$.j
o="The "+q+" has adopted a local "
p=$.m
t.h(0,new R.P("Serve the PTA",!1,[new U.b(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.b("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.A+"ing about. "),new U.b("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.o+". ")],H.a([],n),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
this.c.h(0,new X.r(s,t,null),$.aA)}}
L.jy.prototype={
gO:function(){return this.rx},
gA:function(){return this.M}}
V.jz.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Puzzle Box",H.a([$.ay,$.I,$.aF],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Tesla Coil",H.a([$.aB,$.I,$.T],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Coin",H.a([$.T,$.I],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Electronic Door",H.a([$.T,$.I,$.aB,$.aq],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Janus Bust",H.a([$.b1,$.oJ,$.f4,$.aw,$.I,$.ak,$.aB],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.D]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.S,P.u]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bm,$.i)
q.h(0,$.dN,$.z)
q.h(0,$.b4,$.z)
p=$.j
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.m
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.o
k=[U.b]
q.h(0,new R.G("Change the View",!1,[new U.b(o),new U.b(m),new U.b(l),new U.M(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.dm(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.h)
n=$.j
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+n+" explains that at the end of the Labrinth is the "
l=$.o
q.h(0,new R.G("Pick a Door, any Door",!1,[new U.b(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.b("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.b("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.M("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
n=this.c
n.h(0,new X.r(s,q,null),$.ac)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.dP,$.z)
s.h(0,$.aW,$.i)
s.h(0,$.b4,$.z)
s.h(0,$.bm,$.z)
p=$.o
o="The "+p+" has commited a staggering amount of crimes against the local "+$.m+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.j
s.h(0,new R.G("Face the Music",!1,[new U.b(o+m+" knows that Justice is on their side."),new U.b("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.b("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.M("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(q,s,null),$.ac)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.iB,$.h)
t.h(0,$.ao,$.i)
t.h(0,$.eO,$.h)
t.h(0,$.ai,$.i)
t.h(0,$.b4,$.h)
r=$.j
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.o
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.U+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.h(0,new R.G("Make the Connections",!1,[new U.b(q),new U.b(p),new U.b(o),new U.M(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(s,t,null),$.ac)},
gO:function(){return this.rx},
gA:function(){return this.w}}
S.jA.prototype={
gO:function(){return this.rx},
gA:function(){return this.C}}
E.jB.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Feather Pen",H.a([$.T,$.E,$.aw,$.iY],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Half Finished Bust of Snoop Dog",H.a([$.rx,$.E,$.oJ,$.aZ,$.ak],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Book of Poetry",H.a([$.Q,$.E,$.aw,$.al],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o,n,m
t=[P.D]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.S,P.u])
t.h(0,$.cg,$.h)
t.h(0,$.aL,$.h)
t.h(0,$.ai,$.i)
t.h(0,$.ao,$.i)
t.h(0,$.ce,$.i)
t.h(0,$.bn,$.i)
r="The "+$.o+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.j
r=r+q+" asks the "
p=$.m
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.A
n=[U.b]
t.h(0,new R.au("Inspire Frog Breeding",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.aC(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.i)
q="You'd think after the dramatic defeat of the "+$.o+" the "
o=$.m
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.j
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.U
t.h(0,new R.P("Inspire the People",!1,[new U.b(q),new U.b(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.b("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
this.c.h(0,new X.r(s,t,null),$.aA)},
gA:function(){return this.y1}}
F.jC.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Piano",H.a([$.aZ,$.ay,$.b7,$.aw],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Flute",H.a([$.T,$.b7],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Microphone",H.a([$.cn,$.aB],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Violin",H.a([$.ay,$.b7],s),null,!1,"Tiny Cello")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Sheet Music",H.a([$.Q,$.b7],s),null,!1,"Cheat Codes for Instruments")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Electric Guitar",H.a([$.ax,$.b7,$.aB,$.cn,$.aQ],s),null,!1,"Electrical Stringed Music Maker")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Turn Tables",H.a([$.ax,$.b7,$.aB,$.aQ],s),null,!1,"Spinning Disc Sound Maker")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Guitar",H.a([$.ay,$.b7],s),null,!1,"String Music Maker")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.D]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.S,P.u]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bo,$.a9)
q.h(0,$.ox,$.h)
q.h(0,$.d8,$.h)
q.h(0,$.ce,$.i)
q.h(0,$.ai,$.i)
q.h(0,$.nb,$.i)
p=$.j
o="The "+p+" meets a wise old "+$.m+" who tells that the "+$.o+" can only be awoken by the Legendary Hero playing the "
n=$.ae
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.U
k=[U.b]
q.h(0,new R.J("Play the Music",!1,[new U.b(o),new U.b(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.b(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p=this.r
p.h(0,new X.r(s,q,null),$.aa)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.oC,$.a9)
s.h(0,$.cc,$.i)
s.h(0,$.bl,$.i)
s.h(0,$.ce,$.h)
s.h(0,$.nb,$.a9)
o=$.j
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.ae
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.o
s.h(0,new R.J("Sing the Song",!1,[new U.b(n+l+". "),new U.b("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.b("A "+$.U+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,s,null),$.aa)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.iz,$.a9)
t.h(0,$.aP,$.i)
t.h(0,$.ch,$.i)
r=$.j
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
o=$.m
q=q+o+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+o+" kept rhyming "
n=$.A
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+o+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+o+" approaches the "+r+". And aura of "+$.ae+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+o+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
o=this.y
t.h(0,new R.J("And It Don't Stop",!1,[new U.b(n),new U.b(q),new U.b(r)],H.a([],k),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(s,t,null),$.aa)},
gA:function(){return this.cx}}
V.jV.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Shorts",H.a([$.aj,$.E,$.dY,$.ak],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Sidekick Figurine",H.a([$.ax,$.E,$.aQ],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Steroids",H.a([$.cm,$.E,$.aF],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.D]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.S,P.u])
t.h(0,$.ni,$.h)
t.h(0,$.bH,$.i)
t.h(0,$.eN,$.i)
t.h(0,$.nj,$.i)
t.h(0,$.cg,$.i)
t.h(0,$.ao,$.i)
t.h(0,$.d7,$.i)
t.h(0,$.dR,$.i)
t.h(0,$.oD,$.i)
t.h(0,$.na,$.i)
t.h(0,$.oy,$.i)
r="The "+$.o+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.j
r=r+q+" asks the "
p=$.m
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.A
n=[U.b]
t.h(0,new R.au("Help Breed the Frogs",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.aC(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q=$.j
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.m+" named Professor "
p=$.A
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.U
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.o
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.h(0,new R.G("Become The Best",!1,[new U.b(o),new U.b(p),new U.b(l),new U.M(k,"The "+q+" whited out...",m)],H.a([],n),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
m="Now that the "+$.o+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.j
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.m
t.h(0,new R.P("Explore the Tombs",!1,[new U.b(m),new U.b(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.b("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.ae+" buffs. With a deafening "+$.A+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
this.c.h(0,new X.r(s,t,null),$.aA)}}
G.k_.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Superhero Action Figure",H.a([$.ax,$.aQ,$.bq],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Action DVD",H.a([$.ax,$.aQ],s),null,!1,"Shogun The Movie")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Ghost Busters DVD",H.a([$.ax,$.nq],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Snow Dogs DVD",H.a([$.ax,$.bJ,$.cl,$.f0],s),null,!1,"Snow Buddies Anthology")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Skateboarding Video Game",H.a([$.ax,$.aQ],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Movie Poster",H.a([$.Q,$.aQ],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Audrey II Plush",H.a([$.e_,$.aQ,$.aj,$.bz],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Peashooter Toy",H.a([$.e_,$.f3,$.aQ,$.aj],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Shitty Sword",H.a([$.bq,$.T,$.aQ,$.j2,$.dd,$.oU],s),"So. Shitty.",!1,"Perfect Weapon")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("GameBro Magazine",H.a([$.Q,$.aQ],s),"5/5 hats.",!1,"Nerd Magazine")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("GameGrl Magazine",H.a([$.Q,$.aQ],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.D]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.S,P.u]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bn,$.i)
q.h(0,$.bc,$.i)
q.h(0,$.aP,$.h)
q.h(0,$.bH,$.a9)
q.h(0,$.d9,$.a9)
p=$.j
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.m
m=[U.b]
q.h(0,new R.J("Become the Star",!1,[new U.b(o+n+" manages to catch a video of it, and it goes viral on "+$.ae+"tube. This is humiliating."),new U.b("Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.A+"s added in."),new U.b(" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something.")],H.a([],m),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
n=this.r
n.h(0,new X.r(s,q,null),$.aa)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.dQ,$.i)
s.h(0,$.cc,$.i)
s.h(0,$.bc,$.i)
s.h(0,$.aP,$.i)
s.h(0,$.cf,$.h)
p=$.j
o="The "+p+" runs towards an explosion in a local "
l=$.m
o=o+l+" village. As they rush to help the injured, a Mysterious "+l+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+l+" turns out to be Professor "
j=$.ae
s.h(0,new R.J("Stop the Villain",!1,[new U.b(o),new U.b(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+p+" vows to stop them. "),new U.b(" The "+p+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+l+" authorities. ")],H.a([],m),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(q,s,null),$.aa)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.bc,$.i)
t.h(0,$.cd,$.h)
t.h(0,$.aY,$.h)
t.h(0,$.cf,$.i)
r=$.j
q="The "+r+" gets a job at the "+$.ae+" Cinema. A new movie, The Lonely "
p=$.U
q=q+p+" is coming out soon, and "
o=$.m
q=q+o+"s are already lining up. It's going to be busy as fuck. "
l="Oh shit, the "+r+" learns that The Lonely "+p+" never was delivered. The "+o+"s already lined up are close to rioting. The sound of "+$.A+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+p+". The "+o+"s lined up cheer and enter the theater. The Lonely "+p+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
p=this.y
t.h(0,new R.J("Premiere the Movie",!1,[new U.b(q),new U.b(l),new U.b(r)],H.a([],m),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(s,t,null),$.aa)},
gA:function(){return this.cx}}
N.k1.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Feather'd Cap",H.a([$.aj,$.E,$.dY],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Crown",H.a([$.ak,$.oN,$.E,$.dY],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Gunpowder",H.a([$.f_,$.E],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o,n
t=[P.D]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.S,P.u])
t.h(0,$.bc,$.i)
t.h(0,$.bm,$.i)
t.h(0,$.ch,$.z)
r="With the closing of the curtain, the "+$.o+" has released the frogs, and yet they are nowhere to be found. The "
q=$.j
p=[U.b]
t.h(0,new R.au("Destroy the Lack of Frogs",!1,[new U.b(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.b("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.b("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.aC(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q=$.o
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.j
r=r+o+" to get it back to normal. They organize a team of "
n=$.m
t.h(0,new R.P("Fix All The Things",!1,[new U.b(r+n+"s to start rebuilding infrastructure."),new U.b("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.U+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.b("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
this.c.h(0,new X.r(s,t,null),$.aA)}}
U.b.prototype={}
U.M.prototype={}
R.k3.prototype={
m:function(a){return H.q(new H.cz(H.mK(this),null))+": "+this.c},
gt:function(a){return this.c}}
R.J.prototype={}
R.G.prototype={}
R.P.prototype={}
R.au.prototype={}
E.k4.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Curtain",H.a([$.aj,$.I,$.bq],s),null,!1,"Show Ender")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Cursed Sword",H.a([$.T,$.j2,$.f1,$.I,$.dd,$.by,$.bq,$.eZ,$.b_],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Megaphone",H.a([$.T,$.cn,$.aB,$.I,$.bq],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Bike Horn",H.a([$.b1,$.T,$.cn,$.dZ,$.e0,$.I,$.bq],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Bacchus Wine",H.a([$.cm,$.dZ,$.aw,$.I,$.ak,$.bq],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Nightmare Fuel",H.a([$.ay,$.I,$.by,$.co,$.f_,$.bq],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.D]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.S,P.u]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.ot,$.h)
q.h(0,$.cb,$.h)
q.h(0,$.cc,$.h)
q.h(0,$.bG,$.i)
q.h(0,$.aK,$.i)
q.h(0,$.aX,$.i)
q.h(0,$.aW,$.z)
q.h(0,$.d9,$.i)
q.h(0,$.dQ,$.h)
q.h(0,$.ng,$.h)
q.h(0,$.eM,$.h)
q.h(0,$.oB,$.h)
q.h(0,$.iz,$.i)
q.h(0,$.dU,$.h)
p=$.j
o="The "+p+" is chilling in a "
n=$.m
o=o+n+" village when a bunch of sentient "
m=$.U
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.o
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.h(0,new R.G("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.M(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.fo(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
h=$.m
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.j
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.o
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.h(0,new R.G("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.M(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
h=this.c
h.h(0,new X.r(s,q,null),$.ac)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.ce,$.h)
s.h(0,$.aK,$.i)
s.h(0,$.aW,$.h)
s.h(0,$.bo,$.h)
s.h(0,$.bn,$.h)
s.h(0,$.bc,$.i)
s.h(0,$.nf,$.z)
s.h(0,$.cb,$.i)
s.h(0,$.bH,$.h)
s.h(0,$.aP,$.h)
s.h(0,$.d9,$.z)
p=$.A
o="The "+p+"ing and capering "
n=$.m
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.j
o=o+m+" to do a stupid "
l=$.ae
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.o
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.h(0,new R.G("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.M(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
h.h(0,new X.r(q,s,null),$.ac)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.ot,$.h)
t.h(0,$.d9,$.h)
t.h(0,$.aW,$.h)
t.h(0,$.bH,$.i)
t.h(0,$.bn,$.h)
r=$.j
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.m+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.o+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.h(0,new R.G("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.M(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
h.h(0,new X.r(s,t,null),$.ac)},
gO:function(){return this.rx},
gA:function(){return this.w}}
L.k5.prototype={
gO:function(){return this.rx},
gA:function(){return this.w}}
Y.cU.prototype={}
Y.bj.prototype={}
Y.B.prototype={
gt:function(a){return this.c}}
Y.K.prototype={}
Y.ap.prototype={}
Y.ha.prototype={}
Y.at.prototype={}
Y.fm.prototype={}
Y.eR.prototype={}
Y.fn.prototype={}
Z.k8.prototype={
gO:function(){return this.rx}}
N.k9.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Domino Mask",H.a([$.aj,$.E,$.dY],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Archery Set",H.a([$.rd,$.E,$.dY,$.ra],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Gristtorrent Server",H.a([$.ak,$.ax,$.aB,$.E,$.aq,$.bs],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o,n
t=[P.D]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.S,P.u])
t.h(0,$.aW,$.h)
t.h(0,$.aX,$.i)
t.h(0,$.cf,$.i)
r="The "+$.o+" cannot release the frogs since the corrupt Noble "
q=$.m
r=r+q+"s have hoarded them. The "
p=$.j
o=[U.b]
t.h(0,new R.au("Steal the Frogs",!1,[new U.b(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.aC(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
p=$.j
q="The "+p+" learns of the extreme injustices of the "
r=$.m
q=q+r+"s who rose to power during the tyranny of "
n=$.o
t.h(0,new R.P("Lead a Rebellion",!1,[new U.b(q+n+". This cannot stand!"),new U.b("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.b("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
this.c.h(0,new X.r(s,t,null),$.aA)}}
Q.ka.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Red Rose",H.a([$.cK,$.b0],s),null,!1,"Seductive Plant")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Shipping Grid",H.a([$.cK,$.Q],s),"Don't let ABJ see this.",!1,"Grid of Sin")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Chocolate Bar",H.a([$.cK,$.cm],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Candelabra",H.a([$.cK,$.co],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Head Cannon",H.a([$.cK,$.f_,$.T,$.f3],s),"Fuck you for that pun, JR.",!1,null)
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Her Pitch Passions Novel",H.a([$.al,$.Q,$.cK],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l
t=[P.D]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.S,P.u]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.aY,$.h)
q.h(0,$.eN,$.i)
q.h(0,$.dL,$.i)
q.h(0,$.eL,$.h)
q.h(0,$.bo,$.i)
q.h(0,$.iy,$.z)
p=$.j
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.m
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.U+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.b]
q.h(0,new R.J("Set the Mood",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.p)
p=this.r
p.h(0,new X.r(s,q,null),$.aa)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.bo,$.i)
s.h(0,$.cd,$.h)
s.h(0,$.eL,$.h)
s.h(0,$.aY,$.i)
s.h(0,$.d8,$.z)
s.h(0,$.iy,$.z)
o=$.m
n="A Romantic "+o+" approaches the "
m=$.j
s.h(0,new R.J("Plan the Date",!1,[new U.b(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.b("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.b(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,s,null),$.aa)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.iy,$.h)
t.h(0,$.aY,$.h)
t.h(0,$.dL,$.i)
t.h(0,$.nj,$.h)
t.h(0,$.eL,$.h)
t.h(0,$.bo,$.i)
t.h(0,$.d8,$.z)
r=$.j
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.m
t.h(0,new R.J("Ship All the Ships",!1,[new U.b(q+o+"s have no idea what's coming. "),new U.b("The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.A+"s ring out through the air.  "),new U.b("The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.o+"'s stupid rules. ")],H.a([],l),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
r=$.j
o="The "+r+"  and the "
q=$.cu
t.h(0,new R.J("Flushed Shipping Dungeon",!1,[new U.b(o+q+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+r+"  and the "+q+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.cT(),!1,!1,new Y.eR(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q=$.j
r="The "+q+"  and the "
o=$.cu
t.h(0,new R.J("Pale Shipping Dungeon",!1,[new U.b(r+o+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+q+"  and the "+o+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.cT(),!1,!1,new Y.fm(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.a9)
o=$.j
q="The "+o+"  and the "
r=$.cu
t.h(0,new R.J("Pitched Shipping Dungeon",!1,[new U.b(q+r+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+o+"  and the "+r+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.cT(),!1,!1,new Y.fn(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.a9)
p.h(0,new X.r(s,t,null),$.aa)},
gA:function(){return this.cx}}
T.kc.prototype={
$1:function(a){return!a.gb4()},
$S:function(){return{func:1,args:[T.cw]}}}
T.cw.prototype={
q:function(){var t,s
t=Q.t(null,null,A.O)
s=A.f("Perfectly Generic Object",H.a([],[G.N]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.a.j(t.b,new Q.e(s,t.k(s,1),[H.v(t,0)]))
this.db=t},
p:function(){var t,s,r,q,p,o,n,m,l
t=[P.D]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.S,P.u]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bG,$.h)
q.h(0,$.ao,$.z)
q.h(0,$.ch,$.h)
q.h(0,$.aK,$.i)
q.h(0,$.d7,$.z)
p=$.j
o="The "+p+" learns that all of the local "
n=$.m
m=[U.b]
q.h(0,new R.P("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.A+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
n=this.c
n.h(0,new X.r(s,q,null),$.aA)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.dT,$.h)
s.h(0,$.dR,$.z)
s.h(0,$.dS,$.i)
s.h(0,$.bl,$.h)
s.h(0,$.aX,$.z)
p=$.j
o="The "+p+" learns that all of the local "
l=$.m
s.h(0,new R.P("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.A+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p=$.j
l="The "+p+" learns that all of the local "
o=$.m
s.h(0,new R.P("Do the Teamwork",!1,[new U.b(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.b("The "+p+" grabs the "+$.cu+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.A+"ing in amazement. The factory is saved! ")],H.a([],m),R.cT(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
n.h(0,new X.r(q,s,null),$.aA)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.ai,$.h)
t.h(0,$.ao,$.z)
t.h(0,$.aL,$.i)
r=$.j
q="The "+r+" learns that all of the local "
p=$.m
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.A
t.h(0,new R.J("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.nI(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
l=$.j
p="The "+l+" learns that all of the local "
r=$.m
t.h(0,new R.P("Relax the Consorts",!1,[new U.b(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(s,t,null),$.aA)},
m:function(a){return this.b},
S:function(a,b,c,d){var t=this.b
this.d=t
this.e=new X.eJ("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.ez]),H.a([],[M.dK]))
this.q()
this.p()
if($.$get$c0().a4(this.f))H.av("Duplicate class id for "+this.m(0)+": "+this.f+" is already registered for "+J.bb($.$get$c0().l(0,this.f))+".")
$.$get$c0().h(0,this.f,this)},
gt:function(a){return this.b},
gb4:function(){return this.x},
gA:function(){return this.fy}}
E.kd.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Sage's Robe",H.a([$.aj,$.E,$.bx,$.aq,$.aF,$.ak],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Peer Reviewed Journal",H.a([$.Q,$.E,$.al,$.aq],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Guru Pillow",H.a([$.aj,$.E,$.ns,$.aq],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o
t=[P.D]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.S,P.u])
t.h(0,$.eK,$.i)
t.h(0,$.ao,$.i)
t.h(0,$.eO,$.h)
t.h(0,$.ai,$.z)
t.h(0,$.b4,$.h)
r="The "+$.o+" has blocked access to the books for the duration. The "
q=$.j
p=[U.b]
t.h(0,new R.au("Understand the Frogs",!1,[new U.b(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.m+"s to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.aC(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q="Now that the "+$.o+" is defeated, it is time to begin recovery efforts. The "
r=$.m
q=q+r+"s ask the "
o=$.j
t.h(0,new R.P("Be the Sage",!1,[new U.b(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.A+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.b("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.b("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
this.c.h(0,new X.r(s,t,null),$.aA)},
gA:function(){return this.y1}}
Y.ke.prototype={
gO:function(){return this.rx},
gA:function(){return this.n}}
Y.kf.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Walking Stick",H.a([$.ay,$.E,$.df],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Adorable Girlscout Beret",H.a([$.aj,$.E,$.rk,$.aq,$.ak],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Map",H.a([$.Q,$.E,$.aq],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Compass",H.a([$.T,$.E,$.aq,$.aF],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p
t=[P.D]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.S,P.u])
t.h(0,$.cg,$.h)
t.h(0,$.aL,$.h)
t.h(0,$.ao,$.h)
t.h(0,$.aP,$.z)
t.h(0,$.ai,$.z)
r="Now that the "+$.o+" has been defeated, the planet has really opened up. The "
q=$.j
p=[U.b]
t.h(0,new R.P("Blaze a Trail",!1,[new U.b(r+q+" eagerly begins to explore uncharted territory. "),new U.b("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.b("Deep in a forgotten forest, in a temple covered in golden "+$.m+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
q="The "+$.o+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.j
t.h(0,new R.au("Find the Frogs",!1,[new U.b(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.m+" "+$.A+"s in time to stop them.   ")],H.a([],p),R.aC(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
this.c.h(0,new X.r(s,t,null),$.aA)}}
L.kg.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Scroll",H.a([$.Q,$.E,$.aq],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Ink Pot",H.a([$.br,$.E,$.bs,$.aq],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Blank Book",H.a([$.Q,$.E,$.al,$.aq,$.bs,$.ak],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o
t=[P.D]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.S,P.u])
t.h(0,$.nb,$.h)
t.h(0,$.ao,$.h)
t.h(0,$.b4,$.h)
t.h(0,$.ai,$.i)
t.h(0,$.bm,$.i)
r="The "+$.o+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.j
p=[U.b]
t.h(0,new R.au("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.aC(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q="Now that the "+$.o+" has been taken care of, the "
r=$.j
q=q+r+" discovers a large library of "
o=$.m
t.h(0,new R.P("Restore the Library",!1,[new U.b(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.b("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.b(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
this.c.h(0,new X.r(s,t,null),$.aA)},
gA:function(){return this.y1}}
S.kj.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Cueball",H.a([$.iX,$.nv,$.E,$.aZ,$.bz,$.ak],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Crystal Ball",H.a([$.iX,$.rg,$.E,$.cJ],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Binoculars",H.a([$.br,$.E,$.T],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Blindfold",H.a([$.rc,$.E,$.bx],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o
t=[P.D]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.S,P.u])
t.h(0,$.qJ,$.h)
t.h(0,$.ne,$.h)
t.h(0,$.qH,$.h)
t.h(0,$.bH,$.i)
r="Now that the "+$.o+" has been defeated, the land is really starting to open up. The "
q=$.j
r=r+q+" finds a tunnel filled with Blind "
p=$.m
o=[U.b]
t.h(0,new R.P("Be the King",!1,[new U.b(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.b("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.b("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.n(),!1,!1,new Y.bj("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
q="The "+$.o+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.j
t.h(0,new R.au("Understand the Frogs",!1,[new U.b(q+p+" thinks hard and figures out the best way to organize the "+$.m+"s to start collecting frogs. "),new U.b("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.aC(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
p=$.j
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.m
t.h(0,new R.P("Work With Exiles",!1,[new U.b(q+r+"s to carry everything out."),new U.b("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.n(),!1,!1,new Y.bj("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
r="A group of underlings are still making trouble, even after the defeat of the "+$.o+". The "
p=$.j
r=r+p+" begins planting rumors of a huge "
q=$.U
t.h(0,new R.P("Have the Keikaku",!1,[new U.b(r+q+" Treasure in the center of a still active dungeon. "),new U.b("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.n(),!1,!1,new Y.bj("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
this.c.h(0,new X.r(s,t,null),$.aA)},
gA:function(){return this.y1}}
L.km.prototype={
gO:function(){return this.rx}}
O.ko.prototype={
gO:function(){return this.ry}}
N.kp.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Fiduspawn Plush",H.a([$.f0,$.aj,$.bx],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Teddy Bear",H.a([$.f0,$.aj,$.bx],s),null,!1,"Cuddle Bear")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Dice",H.a([$.ri,$.ax],s),null,!1,"D113")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Pigeon",H.a([$.iY,$.bz,$.de,$.dc,$.eZ,$.rz],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Cat Ears",H.a([$.aj,$.bx,$.f0],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Religious Text",H.a([$.al,$.Q],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Psychology Book",H.a([$.al,$.Q],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Therapy Couch",H.a([$.bx,$.aj],s),null,!1,"Giant Problem Absorbing Couch")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("FLARP Manual",H.a([$.al,$.Q,$.aq],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.D]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.S,P.u]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.cH,$.z)
q.h(0,$.ai,$.i)
q.h(0,$.bm,$.h)
q.h(0,$.b4,$.i)
p=$.j
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.m
m=[U.b]
q.h(0,new R.J("The Therapist is IN",!1,[new U.b(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.b("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.ae+" or "+$.U+".  The "+p+" is getting really good at helping them out. "),new U.b("A line of "+$.A+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p=this.r
p.h(0,new X.r(s,q,null),$.aa)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.cH,$.z)
s.h(0,$.ai,$.h)
s.h(0,$.bm,$.h)
s.h(0,$.ou,$.h)
s.h(0,$.bo,$.h)
s.h(0,$.oC,$.h)
s.h(0,$.b4,$.i)
o=$.j
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.A
n=n+l+"ing "
k=$.m
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.ae
s.h(0,new R.J("Meditate On Frogism",!1,[new U.b(n),new U.b(j+i+"-ness. How could they miss this?"),new U.b(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,s,null),$.aa)
s=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.bl,$.z)
t.h(0,$.cd,$.h)
t.h(0,$.aL,$.h)
t.h(0,$.cf,$.h)
t.h(0,$.dP,$.h)
r=$.j
q="The "+r+" wanders into an entire crowd of "
o=$.m
q=q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.A+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."
n="The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "
r="The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy."
o=this.y
t.h(0,new R.J("Protect the FLARPers",!1,[new U.b(q),new U.b(n),new U.b(r)],H.a([],m),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(s,t,null),$.aa)},
gA:function(){return this.cx}}
N.kr.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Frog Statue",H.a([$.b1,$.f4,$.I],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Frog Costume",H.a([$.aj,$.I],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Nuclear Reactor",H.a([$.j0,$.aq,$.aB,$.I],s),null,!1,"A Representation of My Hatred for Everything")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Telescope",H.a([$.T,$.br,$.aq,$.I],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Green Sun Poster",H.a([$.Q,$.I,$.oO,$.ak],s),"Huh.",!1,"Sauce Sun Poster")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m
t=$.j
s=[P.D]
r=H.a(["Wherever the "+t+" goes, they find a "+$.m+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.A+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.o+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
t=$.j
q=H.a(["The "+t+" discovers some tiny ectobiology lab equipment. Oh! Apparently it's for breeding frogs?  They play around with it a bit with what frogs they've managed to collect. It looks like they can somehow...combine frogs? Aww, look how cute that tadpole is!  ","The "+t+"'s server player deploys some weird equipment. After fiddling with it a bit, the "+t+" learns they can zap frogs into it and make baby frogs. How cute! ","A wizened "+$.m+" shows the "+t+" an ancient temple containing tiny ectobiology equipment. The pictures in the temple depect two frogs being zapped to it, and producing a cute little tadpole."],s)
t="A wise old "+$.m+" tells the "
p=$.j
t=t+p+" that they must negotiate with "
o=$.o
n=H.a([t+o+" to release the vast majority of the frogs. Apparently this is called 'lighting the forge'? ","A temple shows a huge snake monster, probably the "+o+" locking away all the frogs.","A "+o+" minion tells the "+p+" that if they want to find the best frogs, they are going to have to face the "+o+"."],s)
o=$.j
p="The "+o+" meets with "
t=$.o
m=H.a([p+t+". They speak in a langauge no one else can understand, and prove their worth. The forge is lit. The frogs are free.","The "+t+" offers the "+o+" an impossible Choice. After some deliberation, the "+o+" decides that it can't be done. The "+t+" sighs, and agrees to Light the Forge.","The "+t+" is a dismissive asshole, but agrees to light the forge. Wow, the "+o+" almost wishes that they WERE supposed to fight. "],s)
o=H.a(["Frogs"],s)
H.a([],s)
t=new H.l(0,null,null,null,null,null,0,[N.S,P.u])
t.h(0,$.bH,$.z)
t.h(0,$.ow,$.h)
s=[U.b]
t.h(0,new R.G("Light the Forge",!1,[new U.b(r[0]),new U.b(q[0]),new U.b(n[0]+" "+m[0])],H.a([],s),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.a9)
t.h(0,new R.G("Light the Forge",!1,[new U.b(r[1]),new U.b(q[1]),new U.b(n[1]+" "+m[1])],H.a([],s),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.a9)
t.h(0,new R.G("Light the Forge",!1,[new U.b(r[2]),new U.b(q[2]),new U.b(n[2]+" "+m[2])],H.a([],s),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.a9)
t.h(0,new R.G("Light the Forge",!1,[new U.b(r[2]),new U.b(q[0]),new U.b(n[1]+" "+m[0])],H.a([],s),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.a9)
t.h(0,new R.G("Light the Forge",!1,[new U.b(r[2]),new U.b(q[1]),new U.b(n[1]+" "+m[2])],H.a([],s),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.a9)
t.h(0,new R.G("Light the Forge",!1,[new U.b(r[0]),new U.b(q[1]),new U.b(n[2]+" "+m[0])],H.a([],s),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.a9)
p=$.j
t.h(0,new R.au("Breed the Frogs, But Be Boring About It",!1,[new U.b("The "+p+" collects all sorts of frogs. Various "+$.m+"s 'help' by "+$.A+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.n(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
this.c.h(0,new X.r(o,t,null),$.tD)},
gO:function(){return this.rx},
gA:function(){return this.w}}
U.ku.prototype={
gO:function(){return this.rx}}
G.fu.prototype={
cd:function(a){var t=0,s=P.n9(),r,q=this,p,o,n,m,l
var $async$cd=P.o1(function(b,c){if(b===1)return P.nW(c,s)
while(true)switch(t){case 0:p=new B.h7(null,0)
p.a=J.pL(a,0)
for(o=q.b,n=0;n<("SimStat"+o).length;++n)p.az(8)
m=p.az(32)
l=H.a([],[E.aJ])
for(n=0;n<m;++n)l.push(q.fZ(p))
r=l
t=1
break
case 1:return P.nX(r,s)}})
return P.nY($async$cd,s)},
$asey:function(){return[[P.C,E.aJ]]},
$asdW:function(){return[[P.C,E.aJ],P.cD]}}
G.kv.prototype={
fZ:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=T.tw(a.az(8))
s=L.qr(a.az(8))
r=B.oE(a.az(4))
q=B.oE(a.az(4))
p=a.az(32)
o=a.ce()
n=P.D
m=P.u
l=P.cp(n,m)
for(k=0;k<o;++k){j=a.ce()
for(i=0,h="";i<j;++i)h+=H.rO(a.az(8))
g=a.bj(a.b);++a.b
f=a.ce()/100
if(g)f*=-1
l.h(0,h.charCodeAt(0)==0?h:h,f)}n=new E.aJ(p,t,s,r,q,P.cp(D.cy,m),P.cp(n,m))
n.r=l
return n}}
R.l0.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Meddler's Guide",H.a([$.al,$.E,$.Q,$.dZ,$.ak,$.bX],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("First Aid Kit",H.a([$.br,$.E,$.bX],s),"Heals here.",!1,"Anti-Pain Box")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=$.E
r=A.f("Cloud in a Bottle",H.a([r,r,$.bp],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Fairy Wings",H.a([$.aF,$.E,$.cJ,$.b0,$.Q],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o
t=[P.D]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.S,P.u])
t.h(0,$.bm,$.h)
t.h(0,$.ai,$.h)
t.h(0,$.cg,$.i)
t.h(0,$.eO,$.i)
t.h(0,$.qG,$.i)
t.h(0,$.d7,$.i)
t.h(0,$.na,$.i)
t.h(0,$.qK,$.i)
r=$.j
q="The "+r+" decides to take a break after defeating "+$.o+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.m
o=[U.b]
t.h(0,new R.P("Heal the Timeline",!1,[new U.b(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.b("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.b("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.A+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.p3(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
r=$.m
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.j
t.h(0,new R.P("Be The Sylph",!1,[new U.b(p+q+" is unimpressed. "),new U.b("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.b("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
r=$.m
q="The "+r+"s are so stressed after all that shit with the "+$.o+". They are yelling and "+$.A+" at each other over the slightest of insults. The "
p=$.j
t.h(0,new R.P("Relax the Consorts",!1,[new U.b(q+p+" decides that what they really need is to chill the fuck out. "),new U.b("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.b("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p="The "+$.o+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.j
p=p+r+" purifies the pools "
q=$.m
t.h(0,new R.au("Purify the Frogs",!1,[new U.b(p),new U.b("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.b("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.aC(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
r="The defeat of the "+$.o+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.m
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.j
t.h(0,new R.P("Purify the Water",!1,[new U.b(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.b("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.b("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.ae+". Huh. Okay then.")],H.a([],o),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
this.c.h(0,new X.r(s,t,null),$.aA)},
gA:function(){return this.y1}}
D.l3.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Robot",H.a([$.aB,$.T,$.bz,$.aq],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Circuit Board",H.a([$.aB,$.T],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Datastructures for Assholes",H.a([$.aB,$.Q],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("~ATH - A Handbook for the Imminently Deceased ",H.a([$.aB,$.Q,$.b_,$.al],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("3-D Printer",H.a([$.ax,$.aB,$.T],s),null,!1,"3-D Shitpost Maker")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Virus on a USB Stick",H.a([$.ro,$.T],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Wrench",H.a([$.rG,$.T,$.aZ],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Computer",H.a([$.aB,$.T],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.D]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.S,P.u]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.iB,$.i)
q.h(0,$.dM,$.h)
q.h(0,$.dT,$.h)
q.h(0,$.aX,$.z)
p=$.j
o="The "+p+" learns from their "
n=$.m
o=o+n+"s about the great "
m=$.ae
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.o+" destroyed it. "
o="The "+p+" searches for the "
l=$.U
k=[U.b]
q.h(0,new R.J("Fix the Machine",!1,[new U.b(n),new U.b(o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "),new U.b("The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory.  ")],H.a([],k),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
m=$.j
l="The "+m+" is approached by a "
p=$.m
p=l+p+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+p+"s are at a loss as to what to do. The "+m+" agrees to help decipher the puzzle. I mean, look at the little guy "
l=$.A
q.h(0,new R.J("Decipher the Enigma",!1,[new U.b(p+l+"ing, how could they not? "),new U.b("The "+m+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.o+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.b("The "+m+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.U+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+l+"s ")],H.a([],k),R.dm(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
l=this.r
l.h(0,new X.r(s,q,null),$.aa)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.dT,$.h)
s.h(0,$.dR,$.z)
s.h(0,$.dS,$.i)
s.h(0,$.bl,$.h)
s.h(0,$.aX,$.z)
p=$.j
o="The "+p+" learns that all of the local "
n=$.m
s.h(0,new R.J("Produce the Goods",!1,[new U.b(o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.A+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". ")],H.a([],k),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p=$.j
n="The "+p+" finds two groups of "
o=$.m
n=n+o+"s screaming and "
m=$.A
n=n+m+"ing at each other. Apparently the first group of "+m+"s are workers at a local "
j=$.U
n=n+j+" factory and want to be paid more? The second group of "+o+"s claim they don't work hard enough for a raise.  "
m="The "+p+" arranges for the worker "+o+"s to meet with the factory manager "+o+"s individually and discuss their complaints. The "+p+" is getting a headache from all the "+m+"ing, but at least progress is being made."
j="The "+p+" is shaking hands for a "+o+" newspaper, posing in front of the now bustling "+j+" factory. The workers are paid a fair wage, and several ways to make the factory work more efficiently has left the managers happy, too. "
o=this.y
s.h(0,new R.J("Stop the Dispute",!1,[new U.b(n),new U.b(m),new U.b(j)],H.a([],k),R.ct(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.p)
l.h(0,new X.r(q,s,null),$.ac)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.iB,$.z)
t.h(0,$.dM,$.h)
t.h(0,$.dT,$.h)
t.h(0,$.aX,$.z)
r=$.j
q="The "+r+" learns from a mysterious "+$.m+" in a black trenchcoat about a great "
p=$.ae
q=q+p+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
o=$.o
t.h(0,new R.J("Learn the Secret",!1,[new U.b(q+o+"? "),new U.b("The "+r+" searches for clues about the "+p+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+p+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.b("At last, the "+r+" has found a cave with a terminal to the "+p+" MACHINE. <b>TELL ME ABOUT "+o+".</b>, they type. <b><i>ERROR: TERM '"+o+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],k),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
l.h(0,new X.r(s,t,null),$.aa)},
gA:function(){return this.cx}}
V.l4.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Lighter",H.a([$.T,$.co],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Siberia Poster",H.a([$.Q,$.cl],s),null,!1,"Poster of the Shoguns Birthplace")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Nuclear Winter Poster",H.a([$.Q,$.cl,$.j0],s),null,!1,"Shoguns Dream as a Poster")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Doomsday Device",H.a([$.T,$.b_,$.j0,$.bt,$.eZ],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Juggalo Poster",H.a([$.Q,$.rt],s),null,!1,"False God Poster")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Fancy Watch",H.a([$.T,$.f5,$.bt],s),null,!1,"Shoguns Watch")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Magnificent Crown",H.a([$.T,$.f5,$.bt],s),null,!1,"The Shoguns Crown")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Bitching Clothes",H.a([$.aj,$.dY,$.bt],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Ceramic Pork Hollow",H.a([$.no,$.f5],s),"...",!1,"Shoguns Old Porkhollow")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Shit Ton of Guns",H.a([$.T,$.rA,$.f3,$.bt],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Sniper Rifle",H.a([$.T,$.rD,$.f3,$.bt],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("AK-47",H.a([$.T,$.rw,$.f3,$.bt],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("IED",H.a([$.oP,$.dd,$.T,$.f_,$.bt],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Idiots Guide To Being An Asshole",H.a([$.Q,$.dZ,$.al],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Bike Horn",H.a([$.e0,$.T,$.cn,$.dZ],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Matches",H.a([$.ay,$.co],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l
t=[P.D]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.S,P.u]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bc,$.i)
q.h(0,$.cd,$.h)
q.h(0,$.ci,$.h)
q.h(0,$.eM,$.h)
q.h(0,$.ni,$.h)
q.h(0,$.cf,$.i)
p=$.j
o=[U.b]
q.h(0,new R.J("Start the Fires",!1,[new U.b("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.b("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.b(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.n(),!1,!1,new Y.bj("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p=this.r
p.h(0,new X.r(s,q,null),$.aa)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.bc,$.i)
s.h(0,$.cd,$.h)
s.h(0,$.aY,$.h)
s.h(0,$.cf,$.i)
n=$.j
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.m
s.h(0,new R.J("All About the Boonies, Baby",!1,[new U.b(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.b("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.U+" underling. Tremble at the fearsome "+$.ae+" "+l+".   "),new U.b(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.n(),!1,!1,new Y.bj("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,s,null),$.aa)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bG,$.h)
q.h(0,$.ao,$.z)
q.h(0,$.ch,$.h)
q.h(0,$.aK,$.i)
q.h(0,$.d7,$.z)
q.h(0,$.cb,$.z)
n=$.j
m="The "+n+" learns that all of the local "
l=$.m
q.h(0,new R.J("Revive the Consorts",!1,[new U.b(m+l+"s are dead. This is....pretty cool, actually. "),new U.b("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.A+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(s,q,null),$.aa)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.aW,$.h)
t.h(0,$.cb,$.z)
t.h(0,$.dQ,$.h)
t.h(0,$.ng,$.h)
t.h(0,$.aX,$.i)
t.h(0,$.dU,$.i)
s=$.j
r="The "+s+" finds a crowd of "
n=$.A
r=r+n+"ing "
m=$.m
r=r+m+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+m+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
l="The "+s+" meets with the upper class "+m+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.ae+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+m+"s have been defeated. The high class "+m+"s murmur dignified "+n+"s and give the "+s+" several medals. "
n=this.y
t.h(0,new R.J("Stop a Rebellion",!1,[new U.b(r),new U.b(l),new U.b(s)],H.a([],o),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,t,null),$.aa)},
gA:function(){return this.cx}}
X.r.prototype={
m:function(a){return"Theme: "+H.q(this.a)}}
U.l7.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Lockpick",H.a([$.T,$.E,$.bs,$.f1,$.ak],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Sneaking Suit",H.a([$.aj,$.E,$.bs],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Dagger",H.a([$.T,$.E,$.f1,$.dd,$.rh],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o,n,m,l
t=[P.D]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.S,P.u])
t.h(0,$.aW,$.h)
t.h(0,$.cc,$.i)
t.h(0,$.aP,$.i)
t.h(0,$.bl,$.i)
r="The "+$.o+" cannot release the frogs since the corrupt "
q=$.m
r=r+q+" Cops have confiscated them. The "
p=$.j
o=[U.b]
t.h(0,new R.au("Steal the Frogs",!1,[new U.b(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.aC(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
p=$.j
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.o+"'s layer and slated to be returned to the "
r=$.m
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.A+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.db
t.h(0,new R.P("Escape the Law",!1,[new U.b(q),new U.b(n),new U.b(p)],H.a([],o),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.p)
r=$.m
p="A weeping "+r+" approaches the "
n=$.j
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.o
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.ae+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.A+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.db
t.h(0,new R.P("Free The Prisoner",!1,[new U.b(q),new U.b(p),new U.b(n)],H.a([],o),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.p)
r=$.o
n="Now that the "+r+" has been defeated, the "
p=$.m
n=n+p+"s have recovered their precious "
q=$.U
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.j
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.A
l=n+l+"worth, the disaffected Heir to the "+$.ae+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.db
t.h(0,new R.P("Shit, Let's Be a Heist Movie",!1,[new U.b(r),new U.b(l),new U.b(q),new U.b(m)],H.a([],o),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.p)
this.c.h(0,new X.r(s,t,null),$.aA)}}
N.l8.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Grandfather Clock",H.a([$.ay,$.aw,$.f5,$.I],s),null,!1,"Ticking Tower of Time")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Drum",H.a([$.rv,$.I,$.b7],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Dead Doppelganger",H.a([$.b1,$.de,$.I,$.dc,$.by,$.b_],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Music Box",H.a([$.T,$.I,$.b7,$.aw],s),null,!1,"Cube of Noise")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Turn Tables",H.a([$.T,$.I,$.b7,$.ak,$.aQ],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Metronome",H.a([$.T,$.I,$.b7],s),null,!1,"Never Ending Ticking Device")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.D]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.S,P.u]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.qL,$.a9)
q.h(0,$.aX,$.i)
q.h(0,$.bl,$.i)
q.h(0,$.dS,$.h)
p=$.o
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.j
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.r2
l=[U.b]
q.h(0,new R.P("Destroy 1000 Clocks",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.cS(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.h)
n=$.j
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.m+"s, they set out to fix the "
m=$.U
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.o
q.h(0,new R.G("Fix the Clockwork",!1,[new U.b(p),new U.b(o),new U.b(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.M("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
j=this.c
j.h(0,new X.r(s,q,null),$.ac)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.iz,$.h)
s.h(0,$.ci,$.z)
s.h(0,$.aX,$.h)
p=$.j
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.m+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.o
s.h(0,new R.G("Synchronize the Rhythm",!1,[new U.b(o),new U.b(n),new U.M(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
j.h(0,new X.r(q,s,null),$.ac)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.aL,$.h)
t.h(0,$.ai,$.i)
t.h(0,$.bm,$.h)
t.h(0,$.cg,$.h)
r=$.o
q="The door to the "+r+"'s  lair is barred by a door locked with three identical missing "
p=$.U
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
o=$.j
q=q+o+" prepares for a bullshit item collection quest. "
n="The "+o+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.m+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+o+" any less frustrated."
m="In a flash of insight, the "+o+" realizes that they can just use their Time Instrument to go back before they first visited the "+r+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+p+" Pieces and the door is open. Time to prepare for a boss fight. "
r="The "+o+" is ready to fight the "+r+". "
k="Whew, doomed timeline averted. The "+o+" goes back in time to restore the 3 "+p+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.h(0,new R.G("Walk Another Path",!1,[new U.b(q),new U.b(n),new U.b(m),new U.M(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.fo(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.h)
k=$.o
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.U
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.j
t.h(0,new R.G("Destroy Timelines",!1,[new U.b(p+r+" prepares for a bullshit item collection quest. "),new U.b("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.m+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.b("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.M("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.cS(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.h)
r="With the defeat of the "+$.o+", "
k=$.j
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.m
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.ae
t.h(0,new R.P("Shatter the Timeline",!1,[new U.b(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.b("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.b("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.b("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.cS(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
p=$.m
k="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.j
t.h(0,new R.G("Move Forwards, Never Stop",!1,[new U.b(k+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.b("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.A+"s mysteriously.  "),new U.b("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.M("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.o+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
j.h(0,new X.r(s,t,null),$.ac)},
gO:function(){return this.ry},
gA:function(){return this.M}}
G.N.prototype={}
G.eD.prototype={$isaE:1,
$asaE:function(){return[G.eD]}}
G.j4.prototype={
$1:function(a){return!1},
$S:function(){return{func:1,args:[G.N]}}}
Q.lh.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Cardboard Box",H.a([$.Q,$.I,$.bs],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Hole Punch",H.a([$.T,$.I,$.bs],s),null,!1,"Paper Impaler")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Smoke Bombs",H.a([$.f_,$.I,$.bs,$.oP],s),null,!1,"Vape Grenades")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Tribal Mask",H.a([$.dc,$.I,$.bs,$.by,$.j3],s),null,!1,"Ancient Face")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Opera Mask",H.a([$.ax,$.I,$.bs,$.aw],s),null,!1,"Phantom of the Opera Mask")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Black Hole in a Bottle.",H.a([$.I,$.ak,$.oO,$.bs,$.br],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.D]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.S,P.u]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.cH,$.h)
q.h(0,$.nh,$.h)
q.h(0,$.iA,$.h)
q.h(0,$.ne,$.h)
p=$.o
o="A big party is being held to celebrate the defeat of "+p+" and the "
n=$.j
o=o+n+" is invited as the guest of honor. There are promises of god food, including a gigantic cake. At the door a burly "
m=$.m
p=o+m+" stands with a clipboard. He eyes the "+n+" approaching and shakes his head. \u2018You\u2019re not on the list, so beat it.\u2019 The "+n+" tries to explain that they\u2019re the planet\u2019s hero and the one who beat "+p+", making them the guest of honor, but the bouncer just laughs. \u2018If you\u2019re supposed to be the hero, why haven\u2019t I heard of you already?\u2019"
o="The "+n+" asks other guests to vouch for them, but all of them are having trouble recognizing the "+n+". There\u2019s just something about the "+n+" that makes them so forgettable. They go home and bring back photos of themself with other "+n+"s as proof that they\u2019re also a hero, but the bouncer dismisses the photos as very realistic but clearly edited. What a pain."
n="The "+n+" gives up trying to convince the "+m+" bouncer of their existence. If they\u2019re not going to be recognized, they might as well take it all the way. They use their void powers to become completely unnoticeable and walk past the bouncer while making a number of obscene gestures. The "+m+" hosting the party approaches the "+n+" as soon they turn off their powers to join the party. \u2018There you are! You know it\u2019s very rude for the guest of honor to be so late. I\u2019m really disappointed in you.\u2019 Bluh."
m=this.r2
l=[U.b]
q.h(0,new R.P("Be Forgettable",!1,[new U.b(p),new U.b(o),new U.b(n)],H.a([],l),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.p)
m=$.j
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.o
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.h(0,new R.G("Go to Nowhere",!1,[new U.b(n),new U.b(o),new U.b(p),new U.M(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
i=this.c
i.h(0,new X.r(s,q,null),$.ac)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.cH,$.i)
s.h(0,$.nh,$.i)
s.h(0,$.iA,$.i)
s.h(0,$.aW,$.h)
p=$.j
o="Even with the victory of the "+p+" over the villainous "
n=$.o
o=o+n+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.m+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
m=$.U
s.h(0,new R.P("Reveal the Tomes",!1,[new U.b(o+m+" will provide insight."),new U.b("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.b("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.b("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.dm(),!1,!1,new Y.B("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
m=$.j
s.h(0,new R.G("[REDACTED]",!1,[new U.b("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.b("The "+m+" [REDACTED]s and it actually works! Everyone "+$.A+" in surprise. This might just be crazy enough to work."),new U.b("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.M("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.o+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.m+"s.")],H.a([],l),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
i.h(0,new X.r(q,s,null),$.ac)
s=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.cH,$.h)
t.h(0,$.nh,$.h)
t.h(0,$.iA,$.h)
r=$.j
q="Suddenly the "+r+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
p="The "+r+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
o="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+r+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+r+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
n="Faced with a huge underling that is probably too high a level to fight, the "+r+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+r+" attempts to sneak up on the "+$.o+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+r+" has defeated the major challenge of their land."
t.h(0,new R.G("Walk of Faith",!1,[new U.b(q),new U.b(p),new U.b(o),new U.b(n),new U.M(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
i.h(0,new X.r(s,t,null),$.ac)},
gO:function(){return this.rx},
gA:function(){return this.w}}
E.li.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Yardstick",H.a([$.df,$.E,$.oT,$.ak],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("SBURBSim Hacking Guide",H.a([$.al,$.E,$.nw,$.Q],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Body Pillow of JR",H.a([$.aj,$.E,$.ns,$.rs,$.bx],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Nanobots",H.a([$.rE,$.E,$.oI],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o,n,m
t=[P.D]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.S,P.u])
t.h(0,$.bH,$.h)
t.h(0,$.d9,$.h)
t.h(0,$.dO,$.h)
t.h(0,$.cg,$.h)
t.h(0,$.dN,$.h)
t.h(0,$.nd,$.h)
t.h(0,$.iA,$.i)
r=$.j
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.m
o=[U.b]
t.h(0,new R.J("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.p3(),!1,!1,new Y.cU("Rewards/no_reward.png",null),1,null,null),$.p)
r=$.o
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.j
n=q+" tries to manually separate the turtles by catching them with a net and "+$.aM+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.A
t.h(0,new R.G("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.M(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.rP(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
q=$.j
t.h(0,new R.J("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.n(),!1,!1,new Y.cU("Rewards/no_reward.png",null),1,null,null),$.p)
q="A wizened "+$.m+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.j
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.o
t.h(0,new R.G("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.a9)
m=$.j
t.h(0,new R.G("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.m+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.o+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.n(),!1,!1,new Y.K("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.a9)
m="A wizened "+$.m+" tells the "
r=$.j
t.h(0,new R.P("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.n(),!1,!1,new Y.bj("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.z)
r="A "+$.m+" that is also a SHOGUN minion tells the "
m=$.j
t.h(0,new R.P("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.rQ(),!1,!1,new Y.B("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
m=$.j
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.db
t.h(0,new R.P("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.z)
n=$.o
m="The "+n+" explains um. What? Where did the "
q=$.j
t.h(0,new R.au("Waste the Frogs",!1,[new U.b(m+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.m+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.aC(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
this.c.h(0,new X.r(s,t,null),$.ac)},
gA:function(){return this.y1}}
M.lm.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Cauldron",H.a([$.ru,$.E,$.aF],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Flying Broom",H.a([$.nn,$.df,$.E,$.ay,$.aF],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Warped Mirror",H.a([$.oR,$.E,$.aF,$.bs,$.ak],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o,n,m
t=[P.D]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.S,P.u])
t.h(0,$.aK,$.i)
t.h(0,$.eN,$.i)
t.h(0,$.bG,$.i)
t.h(0,$.bl,$.i)
t.h(0,$.bn,$.i)
t.h(0,$.ow,$.i)
r=$.o
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.m
q=q+p+" consorts. It's up to the "
o=$.j
n=[U.b]
t.h(0,new R.au("Brew the Frogs",!1,[new U.b(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.b("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.b("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.aC(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
o="Even with the defeat of the "+$.o+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
r=$.m
o=o+r+" settlement, and crops refuse to thrive at "
p=$.ae
o=o+p+" Ranch. The "+r+"s seem to have accepted everything as just how things are, but the "
q=$.j
o=o+q+" isn't going to give up until they show the status quo just how 'quo' it isn't!"
m="Alright, it turns out that through a mixture of Alchemy, game powers and pure elbow grease, the "+q+" has managed to make a river flow backwards.   Now instead of flooding, the valley is draining itself.  Progress!"
r="The "+q+" doesn't feel like KILLING the giant underlings rampaging in the "+r+" settlement. What's the fun in that? They try a variety of techniques until the underlings are as calm and friendly as "+r+"s themselves.   Now they are productive members of society! "
p="The "+q+" twists how plants and soil and growth works until the crops at "+p+" Ranch are finally thriving. With that, they have finally kicked the former status quo to the curb!  "
q=this.db
t.h(0,new R.P("Twist All The Things",!1,[new U.b(o),new U.b(m),new U.b(r),new U.b(p)],H.a([],n),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.p)
q="A Mysterious "+$.m+" approaches the "
p=$.j
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.ae
q=q+r+" was discovered amongst the "+$.o+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.db
t.h(0,new R.P("Brew The Potion",!1,[new U.b(q),new U.b(m),new U.b(p)],H.a([],n),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.p)
r=$.m
p="A young "+r+" approaches the "
m=$.j
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.ae
t.h(0,new R.P("Train the Apprentice",!1,[new U.b(p+q+"mancer and agrees to train them. "),new U.b("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.U+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.b("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.A+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.n(),!1,!1,new Y.B(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
this.c.h(0,new X.r(s,t,null),$.aA)},
gA:function(){return this.y1}}
F.ln.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.O)
s=[G.N]
r=A.f("Make a World Book",H.a([$.Q,$.aw,$.al],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.v(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Quill Pen",H.a([$.bx,$.aj,$.oS],s),null,!1,"Dead Bird Scribing Tool")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Book On Writing",H.a([$.al,$.Q,$.aq],s),null,!1,"How to do words for unsmarts")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("FLARP Manual",H.a([$.al,$.Q,$.aq],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Script",H.a([$.al,$.Q],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Fancy Pen",H.a([$.T,$.aq,$.oS,$.aw],s),null,!1,"Ink Bleeding Plastic Finger")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Spiral Bound Notebook",H.a([$.al,$.Q,$.T],s),null,!1,"Spinney Spine Scribing Station")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Half Written Novel",H.a([$.al,$.Q],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l
t=[P.D]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.S,P.u]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.cH,$.h)
q.h(0,$.b4,$.h)
q.h(0,$.ao,$.i)
q.h(0,$.ai,$.i)
q.h(0,$.eK,$.i)
p=$.j
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.m+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.b]
q.h(0,new R.J("Stop the Vandals",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.p)
m=this.r
m.h(0,new X.r(s,q,null),$.aa)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.cf,$.i)
s.h(0,$.bc,$.i)
s.h(0,$.aY,$.i)
s.h(0,$.ao,$.i)
p=$.m
o="An Excited "+p+" rushes up to the "
n=$.j
s.h(0,new R.J("Read the Fan Fiction",!1,[new U.b(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.A+"ing so much? "),new U.b("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.b(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.n(),!1,!1,new Y.bj("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(q,s,null),$.aa)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.bc,$.i)
t.h(0,$.cd,$.h)
t.h(0,$.aY,$.h)
t.h(0,$.cf,$.i)
t.h(0,$.dO,$.h)
r=$.j
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.m
t.h(0,new R.J("Be the DM",!1,[new U.b(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.b("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.b(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.b("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.n(),!1,!1,new Y.bj("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(s,t,null),$.aa)},
gA:function(){return this.cx}}
A.d3.prototype={}
B.h7.prototype={
bj:function(a){var t,s,r,q
t=C.e.G(a/8)
s=C.b.cr(a,8)
r=this.a.getUint8(t)
q=C.b.aj(1,s)
if(typeof r!=="number")return r.cq()
return(r&q)>>>0>0},
az:function(a){var t,s,r
if(a>32)throw H.w(P.dD(a,"bitcount may not exceed 32",null))
for(t=0,s=0;s<a;++s){r=this.bj(this.b);++this.b
if(r)t=(t|C.b.eX(1,s))>>>0}return t},
fY:function(a){var t,s,r,q
if(a>32)throw H.w(P.dD(a,"bitcount may not exceed 32",null))
for(t=a-1,s=0,r=0;r<a;++r){q=this.bj(this.b);++this.b
if(q)s=(s|C.b.aj(1,t-r))>>>0}return s},
ce:function(){var t,s,r
for(t=0;!0;){s=this.bj(this.b)
r=++this.b
if(s){this.b=r-1
break}else ++t}return this.fY(t+1)-1}}
A.bv.prototype={
gcf:function(){return this.b},
aI:function(a,b,c){this.f=a
this.r=b
this.x=c
this.ao()},
cw:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h
this.z=a
this.Q=b
this.ch=c
this.y=!1
t=(a+16)/116
s=b/500+t
r=t-c/200
q=s*s*s
p=r*r*r
o=q>0.008856?q:(s-0.13793103448275862)/7.787
n=a>7.9996247999999985?Math.pow(t,3):a/903.3
m=p>0.008856?p:(s-0.13793103448275862)/7.787
l=[P.u]
k=H.a([95.047*o,100*n,108.883*m],l)
s=k[0]/100
t=k[1]/100
r=k[2]/100
j=s*3.2406+t*-1.5372+r*-0.4986
i=s*-0.9689+t*1.8758+r*0.0415
c=s*0.0557+t*-0.204+r*1.057
j=j>0.0031308?1.055*Math.pow(j,0.4166666666666667)-0.055:12.92*j
i=i>0.0031308?1.055*Math.pow(i,0.4166666666666667)-0.055:12.92*i
h=H.a([j,i,c>0.0031308?1.055*Math.pow(c,0.4166666666666667)-0.055:12.92*c],l)
this.b=C.b.F(C.c.G(h[0]*255),0,255)
this.e=!0
this.y=!0
this.c=C.b.F(C.c.G(h[1]*255),0,255)
this.e=!0
this.y=!0
this.d=C.b.F(C.c.G(h[2]*255),0,255)
this.e=!0
this.y=!0},
bA:function(a){this.b=a.b
this.c=a.c
this.d=a.d
this.e=!0
this.y=!0},
m:function(a){return"rgb("+H.q(this.b)+", "+H.q(this.c)+", "+H.q(this.d)+", "+H.q(this.a)+")"},
dC:function(a){var t,s,r,q
if(a){t=this.b
if(typeof t!=="number")return t.aj()
s=this.c
if(typeof s!=="number")return s.aj()
r=this.d
if(typeof r!=="number")return r.aj()
q=this.a
if(typeof q!=="number")return H.as(q)
return(t<<24|s<<16|r<<8|q)>>>0}t=this.b
if(typeof t!=="number")return t.aj()
s=this.c
if(typeof s!=="number")return s.aj()
r=this.d
if(typeof r!=="number")return H.as(r)
return(t<<16|s<<8|r)>>>0},
a1:function(a){var t=C.b.ha(this.dC(!1),16)
return C.h.fP(t,6,"0").toUpperCase()},
h9:function(){return this.a1(!1)},
a3:function(){var t,s,r,q,p,o,n,m,l
this.e=!1
t=this.b
if(typeof t!=="number")return t.I()
t/=255
s=this.c
if(typeof s!=="number")return s.I()
s/=255
r=this.d
if(typeof r!=="number")return r.I()
r/=255
q=Math.max(Math.max(t,s),r)
p=Math.min(Math.min(t,s),r)
o=q-p
n=q===0?0:o/q
if(q===p)m=0
else{if(q===t){t=s<r?6:0
m=(s-r)/o+t}else m=q===s?(r-t)/o+2:(t-s)/o+4
m/=6}l=H.a([m,n,q],[P.u])
this.f=l[0]
this.r=l[1]
this.x=l[2]},
ao:function(){var t,s,r,q,p,o,n,m,l,k,j,i
this.e=!1
t=this.f
s=this.r
r=this.x
t*=6
q=C.c.G(t)
p=t-q
o=r*(1-s)
n=r*(1-p*s)
m=r*(1-(1-p)*s)
l=C.b.cr(q,6)
if(l===0){k=o
j=m}else if(l===1){k=o
j=r
r=n}else if(l===2){k=m
j=r
r=o}else if(l===3){k=r
r=o
j=n}else{if(l===4){k=r
r=m}else k=n
j=o}i=H.a([r,j,k],[P.u])
this.b=C.b.F(C.c.G(i[0]*255),0,255)
this.e=!0
this.y=!0
this.c=C.b.F(C.c.G(i[1]*255),0,255)
this.e=!0
this.y=!0
this.d=C.b.F(C.c.G(i[2]*255),0,255)
this.e=!0
this.y=!0},
bp:function(){var t,s,r,q,p,o,n,m,l,k,j
this.y=!1
t=this.b
if(typeof t!=="number")return t.I()
t/=255
s=this.c
if(typeof s!=="number")return s.I()
s/=255
r=this.d
if(typeof r!=="number")return r.I()
r/=255
q=(t>0.04045?Math.pow((t+0.055)/1.055,2.4):t/12.92)*100
p=(s>0.04045?Math.pow((s+0.055)/1.055,2.4):s/12.92)*100
o=(r>0.04045?Math.pow((r+0.055)/1.055,2.4):r/12.92)*100
t=[P.u]
n=H.a([q*0.4124+p*0.3576+o*0.1805,q*0.2126+p*0.7152+o*0.0722,q*0.0193+p*0.1192+o*0.9505],t)
m=n[0]/95.047
l=n[1]/100
k=n[2]/108.883
m=m>0.008856?Math.pow(m,0.3333333333333333):(903.3*m+16)/116
l=l>0.008856?Math.pow(l,0.3333333333333333):(903.3*l+16)/116
k=k>0.008856?Math.pow(k,0.3333333333333333):(903.3*k+16)/116
j=H.a([Math.max(0,116*l-16),500*(m-l),200*(l-k)],t)
this.z=j[0]
this.Q=j[1]
this.ch=j[2]},
J:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.bv){t=this.b
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
gU:function(a){return this.dC(!0)},
P:function(a,b){var t,s,r,q,p,o,n,m
t=J.ad(b)
if(!!t.$isbv){t=this.b
s=b.b
if(typeof t!=="number")return t.P()
if(typeof s!=="number")return H.as(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.P()
if(typeof q!=="number")return H.as(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.P()
if(typeof o!=="number")return H.as(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.P()
if(typeof m!=="number")return H.as(m)
return A.bk(t+s,r+q,p+o,n+m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.I()
s=this.c
if(typeof s!=="number")return s.I()
r=this.d
if(typeof r!=="number")return r.I()
q=this.a
if(typeof q!=="number")return q.I()
return A.hW(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.P()
s=this.c
if(typeof s!=="number")return s.P()
r=this.d
if(typeof r!=="number")return r.P()
return A.bk(t+b,s+b,r+b,this.a)}throw H.w("Cannot add ["+H.q(t.gW(b))+" "+H.q(b)+"] to a Colour. Only Colour, double and int are valid.")},
I:function(a,b){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.I()
s=this.c
if(typeof s!=="number")return s.I()
r=this.d
if(typeof r!=="number")return r.I()
q=this.a
if(typeof q!=="number")return q.I()
return A.hW(t/255/b,s/255/b,r/255/b,q/255)},
X:function(a,b){var t,s,r,q
if(b instanceof A.bv){t=this.b
if(typeof t!=="number")return t.I()
t=C.e.X(t/255,b.ghA())
s=this.c
if(typeof s!=="number")return s.I()
s=C.e.X(s/255,b.ghm())
r=this.d
if(typeof r!=="number")return r.I()
r=C.e.X(r/255,b.ghs())
q=this.a
if(typeof q!=="number")return q.I()
return A.hW(t,s,r,C.e.X(q/255,b.ghr()))}else{t=this.b
if(typeof t!=="number")return t.I()
s=this.c
if(typeof s!=="number")return s.I()
r=this.d
if(typeof r!=="number")return r.I()
q=this.a
if(typeof q!=="number")return q.I()
return A.hW(t/255*b,s/255*b,r/255*b,q/255)}},
l:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.w("Colour index out of range: "+H.q(b))},
h:function(a,b,c){var t,s
t=J.cA(b)
if(t.aq(b,0)||t.aH(b,3))throw H.w("Colour index out of range: "+H.q(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.J(b,0)){this.b=C.b.F(c,0,255)
this.e=!0
this.y=!0}else if(t.J(b,1)){this.c=C.b.F(c,0,255)
this.e=!0
this.y=!0}else if(t.J(b,2)){this.d=C.b.F(c,0,255)
this.e=!0
this.y=!0}else this.a=C.b.F(c,0,255)
else if(t.J(b,0)){this.b=C.b.F(J.fS(J.n_(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.J(b,1)){this.c=C.b.F(J.fS(J.n_(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.mI(c)
if(t.J(b,2)){this.d=C.b.F(J.fS(s.X(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.b.F(J.fS(s.X(c,255)),0,255)}},
e2:function(a,b,c,d){this.b=C.c.F(J.fQ(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.c.F(J.fQ(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.c.F(J.fQ(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.c.F(J.fQ(d,0,255),0,255)}}
A.mF.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.D]}}}
E.dH.prototype={
cv:function(a){var t
$.$get$aO().a5("setFromRGB")
t=this.y2
t.b=C.b.F(C.c.G(this.z.y*255),0,255)
t.e=!0
t.y=!0
t=this.y2
t.c=C.b.F(C.c.G(this.Q.y*255),0,255)
t.e=!0
t.y=!0
t=this.y2
t.d=C.b.F(C.c.G(this.ch.y*255),0,255)
t.e=!0
t.y=!0
if(a){J.c5(this.cx,this.y2.b)
J.c5(this.cy,this.y2.c)
J.c5(this.db,this.y2.d)}this.hf(a,!1)},
aC:function(){return this.cv(!1)},
ct:function(a){var t,s
$.$get$aO().a5("setFromRGB")
t=this.y2
s=this.dx.y
if(t.e)t.a3()
t.f=s
t.ao()
t=this.y2
s=this.dy.y
if(t.e)t.a3()
t.r=s
t.ao()
t=this.y2
s=this.fr.y
if(t.e)t.a3()
t.x=s
t.ao()
if(a){t=this.fx
s=this.y2
if(s.e)s.a3()
J.c5(t,C.c.G(s.f*360))
t=this.fy
s=this.y2
if(s.e)s.a3()
J.c5(t,C.c.G(s.r*100))
t=this.go
s=this.y2
if(s.e)s.a3()
J.c5(t,C.c.G(s.x*100))}this.he(a,!1)},
aB:function(){return this.ct(!1)},
bB:function(){var t,s,r,q
t=this.y2
s=J.bS(this.id)
s.toString
r=J.bS(this.k1)
r.toString
q=J.bS(this.k2)
q.toString
t.cw(s,r,q)
this.hd(!1)},
bc:function(a,b,c,d,e){var t,s,r,q,p
if(!(this.a||a))return
$.$get$aO().a5("update: rgb: "+e+", hsv: "+c+", fromMain: "+b+", force: "+a)
if(e){t=this.z
s=this.y2
r=s.b
if(typeof r!=="number")return r.I()
t.y=r/255
t=this.Q
q=s.c
if(typeof q!=="number")return q.I()
t.y=q/255
q=this.ch
s=s.d
if(typeof s!=="number")return s.I()
q.y=s/255
J.c5(this.cx,r)
J.c5(this.cy,this.y2.c)
J.c5(this.db,this.y2.d)}if(c){t=this.dx
s=this.y2
if(s.e)s.a3()
t.y=s.f
t=this.dy
s=this.y2
if(s.e)s.a3()
t.y=s.r
t=this.fr
s=this.y2
if(s.e)s.a3()
t.y=s.x
t=this.fx
s=this.y2
if(s.e)s.a3()
J.ba(t,C.b.m(C.c.G(s.f*360)))
t=this.fy
s=this.y2
if(s.e)s.a3()
J.ba(t,C.b.m(C.c.G(s.r*100)))
t=this.go
s=this.y2
if(s.e)s.a3()
J.ba(t,C.b.m(C.c.G(s.x*100)))}if(d){t=this.id
s=this.y2
if(s.y)s.bp()
J.ba(t,C.c.ba(s.z,2))
t=this.k1
s=this.y2
if(s.y)s.bp()
J.ba(t,C.c.ba(s.Q,2))
t=this.k2
s=this.y2
if(s.y)s.bp()
J.ba(t,C.c.ba(s.ch,2))}for(t=this.ry,s=this.x1,p=0;p<t.length;++p){r=t[p]
r.cm(!0)
if(p>=s.length)return H.F(s,p)
r.de(s[p])}this.f_(!b)
J.ba(this.k3,this.y2.h9())
t=this.r1.style
s="#"+this.y2.a1(!1)
t.backgroundColor=s
t=this.r2
s=$.bW
if(s>=t.length)return H.F(t,s)
J.pY(t[s],!0)},
hf:function(a,b){return this.bc(!1,a,!0,!0,b)},
he:function(a,b){return this.bc(!1,a,b,!0,!0)},
dE:function(a){return this.bc(a,!1,!0,!0,!0)},
a8:function(){return this.bc(!1,!1,!0,!0,!0)},
hd:function(a){return this.bc(!1,!1,!0,a,!0)},
f_:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
$.$get$aO().a5("updateMainPicker: setValue: "+a)
t=this.y1
s=$.bW
if(s>=t.length)return H.F(t,s)
r=t[s]
t=this.x2
if(s>=t.length)return H.F(t,s)
q=t[s]
this.y.de(r)
s=this.x
s.toString
p=s.getContext("2d")
o=P.pw(p.getImageData(0,0,256,256))
for(t=J.W(o),n=null,m=null,l=0;l<256;++l)for(s=l/255,k=0;k<256;++k){n=(k*256+l)*4
m=q.$2(s,1-k/255)
j=t.gaf(o)
i=m.gcf()
if(n>=j.length)return H.F(j,n)
j[n]=i
i=t.gaf(o)
j=n+1
h=m.c
if(j>=i.length)return H.F(i,j)
i[j]=h
h=t.gaf(o)
j=n+2
i=m.d
if(j>=h.length)return H.F(h,j)
h[j]=i
i=t.gaf(o)
j=n+3
if(j>=i.length)return H.F(i,j)
i[j]=255}C.o.dr(p,o,0,0)
g=this.bK()
l=g[0].y
k=g[1].y
f=g[2].y
t=this.y2
if(t.y)t.bp()
e=t.z>50?"#000000":"#FFFFFF"
p.beginPath()
p.arc(C.c.Z(l*255),C.c.Z((1-k)*255),5,0,6.283185307179586,!1)
p.strokeStyle=e
p.stroke()
if(a)this.y.y=f
this.y.cm(!0)},
bK:function(){var t,s,r,q
t=$.bW
if(t===0){s=this.ch
r=this.Q
q=this.z}else if(t===1){s=this.ch
r=this.z
q=this.Q}else if(t===2){s=this.z
r=this.Q
q=this.ch}else if(t===3){s=this.dy
r=this.fr
q=this.dx}else if(t===4){s=this.dx
r=this.fr
q=this.dy}else if(t===5){s=this.dx
r=this.dy
q=this.fr}else{s=null
r=null
q=null}return H.a([s,r,q],[E.cG])},
fN:function(a){var t,s,r
this.a=!0
t=A.aV(this.y2)
this.n=t
s=this.k4.style
t="#"+t.a1(!1)
s.backgroundColor=t
this.ds()
this.dE(!0)
t=this.f.style
t.display="block"
this.cg()
for(t=$.$get$eB(),s=new P.bf(t,t.r,null,null,[null]),s.c=t.e;s.v();){r=s.d
t=J.ad(r)
if(!t.J(r,this))t.au(r)}},
au:function(a){var t
this.a=!1
t=this.f.style
t.display="none"},
cK:function(a){var t,s,r
t=this.b
J.ba(t,"#"+this.y2.a1(!1))
s=this.e.style
r="#"+this.y2.a1(!1)
s.backgroundColor=r
a=document.createEvent("Event")
a.initEvent("change",!0,!0)
t.dispatchEvent(a)
this.au(0)},
eq:function(){return this.cK(null)},
cI:function(a){this.y2.bA(this.n)
this.au(0)},
en:function(){return this.cI(null)},
ds:function(){var t,s
t=A.eC(J.oc(J.n4(this.b),1))
this.y2=t
s=this.e.style
t="#"+t.a1(!1)
s.backgroundColor=t
this.dE(!0)},
fF:function(){var t,s,r
t=this.x1
t.push(new E.hE(this))
t.push(new E.hF(this))
t.push(new E.hG(this))
s=this.y1
s.push(new E.hO(this))
s.push(new E.hP(this))
s.push(new E.hQ(this))
r=this.x2
r.push(new E.hR(this))
r.push(new E.hS(this))
r.push(new E.hT(this))
t.push(new E.hU(this))
t.push(new E.hV(this))
t.push(new E.hH(this))
s.push(new E.hI())
s.push(new E.hJ(this))
s.push(new E.hK(this))
r.push(new E.hL(this))
r.push(new E.hM(this))
r.push(new E.hN(this))},
fh:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t=document
s=t.createElement("div")
s.className="colourPicker_anchor"
r=t.createElement("div")
r.className="colourPicker_button"
W.ah(r,"click",new E.hd(this),!1,W.az)
s.appendChild(r)
q=t.createElement("div")
q.className="colourPicker_button_inner colourPicker_button_inner_1"
r.appendChild(q)
p=t.createElement("div")
p.className="colourPicker_button_inner colourPicker_button_inner_2"
r.appendChild(p)
o=t.createElement("div")
o.className="colourPicker_swatch"
r.appendChild(o)
n=a.X(0,1.15)
m=a.X(0,0.85)
l=a.X(0,0.4)
k=r.style
j=""+(b+2)+"px"
k.width=j
j=""+(c+2)+"px"
k.height=j
j="#"+l.a1(!1)
k.borderColor=j
k=q.style
j=""+b+"px"
k.width=j
j=""+c+"px"
k.height=j
j="#"+a.a1(!1)
k.backgroundColor=j
j="#"+n.a1(!1)
k.borderLeftColor=j
j="#"+n.a1(!1)
k.borderTopColor=j
j="#"+m.a1(!1)
k.borderRightColor=j
j="#"+m.a1(!1)
k.borderBottomColor=j
k=p.style
j=""+b+"px"
k.width=j
j=""+c+"px"
k.height=j
j="#"+a.a1(!1)
k.backgroundColor=j
j="#"+m.a1(!1)
k.borderLeftColor=j
j="#"+m.a1(!1)
k.borderTopColor=j
j="#"+n.a1(!1)
k.borderRightColor=j
j="#"+n.a1(!1)
k.borderBottomColor=j
k=o.style
j=""+(b-12)+"px"
k.width=j
j=""+(c-12)+"px"
k.height=j
this.c=s
this.d=r
this.e=o
k=this.b
J.pU(k,s)
j=this.c
t=t.createElement("div")
t.className="colourPicker_hidden"
t.appendChild(k)
j.appendChild(t)},
c2:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t=document
s=t.createElement("div")
s.className="colourPicker_overlay"
this.c.appendChild(s)
r=t.createElement("div")
r.className="colourPicker_overlay_2"
q=W.az
W.ah(r,"click",new E.he(),!1,q)
s.appendChild(r)
p=t.createElement("div")
p.className="colourPicker_window"
W.ah(p,"click",new E.hf(),!1,q)
s.appendChild(p)
this.r=p
o=W.of(256,256)
o.className="colourPicker_canvas"
W.ah(o,"mousedown",new E.hg(this),!1,q)
this.x=o
p.appendChild(o)
o=E.d6(0,1,25,256,!0)
p.appendChild(o.b)
o.cx.aG(this.geV())
this.y=o
E.ag(o.b,268,0)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="Old"
o=n.style
o.textAlign="center"
E.ag(n,57,263)
p.appendChild(n)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="New"
o=n.style
o.textAlign="center"
E.ag(n,183,263)
p.appendChild(n)
m=t.createElement("div")
m.className="colourPicker_previewbox"
E.ag(m,4,279)
p.appendChild(m)
o=t.createElement("div")
l=o.style
l.cursor="pointer"
W.ah(o,"click",new E.hr(this),!1,q)
this.k4=o
m.appendChild(o)
o=t.createElement("div")
l=o.style
l.left="50%"
this.r1=o
m.appendChild(o)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="Red, Green, Blue"
E.ag(n,330,5)
p.appendChild(n)
o=W.aH("number")
o.className="colourPicker_number"
l=J.W(o)
l.sai(o,"0")
l.sah(o,"255")
l.sak(o,"1")
l=C.i.gY(o)
W.ah(l.a,l.b,new E.hx(this),!1,H.v(l,0))
this.cx=o
E.ag(o,600,20)
p.appendChild(this.cx)
o=E.d6(0,1,256,16,!1)
p.appendChild(o.b)
o.cx.aG(new E.hy(this))
this.z=o
E.ag(o.b,330,20)
o=this.ry
o.push(this.z)
l=W.aH("number")
l.className="colourPicker_number"
k=J.W(l)
k.sai(l,"0")
k.sah(l,"255")
k.sak(l,"1")
k=C.i.gY(l)
W.ah(k.a,k.b,new E.hz(this),!1,H.v(k,0))
this.cy=l
E.ag(l,600,50)
p.appendChild(this.cy)
l=E.d6(0,1,256,16,!1)
p.appendChild(l.b)
l.cx.aG(new E.hA(this))
this.Q=l
E.ag(l.b,330,50)
o.push(this.Q)
l=W.aH("number")
l.className="colourPicker_number"
k=J.W(l)
k.sai(l,"0")
k.sah(l,"255")
k.sak(l,"1")
k=C.i.gY(l)
W.ah(k.a,k.b,new E.hB(this),!1,H.v(k,0))
this.db=l
E.ag(l,600,80)
p.appendChild(this.db)
l=E.d6(0,1,256,16,!1)
p.appendChild(l.b)
l.cx.aG(new E.hC(this))
this.ch=l
E.ag(l.b,330,80)
o.push(this.ch)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="Hue, Saturation, Value"
E.ag(n,330,115)
p.appendChild(n)
l=W.aH("number")
l.className="colourPicker_number"
k=J.W(l)
k.sai(l,"0")
k.sah(l,"360")
k.sak(l,"1")
k=C.i.gY(l)
W.ah(k.a,k.b,new E.hD(this,360),!1,H.v(k,0))
this.fx=l
E.ag(l,600,130)
p.appendChild(this.fx)
l=E.d6(0,1,256,16,!1)
p.appendChild(l.b)
l.cx.aG(new E.hh(this,360))
this.dx=l
E.ag(l.b,330,130)
o.push(this.dx)
l=W.aH("number")
l.className="colourPicker_number"
k=J.W(l)
k.sai(l,"0")
k.sah(l,"100")
k.sak(l,"1")
k=C.i.gY(l)
W.ah(k.a,k.b,new E.hi(this),!1,H.v(k,0))
this.fy=l
E.ag(l,600,160)
p.appendChild(this.fy)
l=E.d6(0,1,256,16,!1)
p.appendChild(l.b)
l.cx.aG(new E.hj(this))
this.dy=l
E.ag(l.b,330,160)
o.push(this.dy)
l=W.aH("number")
l.className="colourPicker_number"
k=J.W(l)
k.sai(l,"0")
k.sah(l,"100")
k.sak(l,"1")
k=C.i.gY(l)
W.ah(k.a,k.b,new E.hk(this),!1,H.v(k,0))
this.go=l
E.ag(l,600,190)
p.appendChild(this.go)
l=E.d6(0,1,256,16,!1)
p.appendChild(l.b)
l.cx.aG(new E.hl(this))
this.fr=l
E.ag(l.b,330,190)
o.push(this.fr)
j=t.createElement("form")
i=W.aH("radio")
o=J.W(i)
o.st(i,"mode")
o=o.gY(i)
W.ah(o.a,o.b,new E.hm(this),!1,H.v(o,0))
j.appendChild(i)
E.ag(i,305,19)
o=this.r2
o.push(i)
h=W.aH("radio")
l=J.W(h)
l.st(h,"mode")
l=l.gY(h)
W.ah(l.a,l.b,new E.hn(this),!1,H.v(l,0))
j.appendChild(h)
E.ag(h,305,49)
o.push(h)
g=W.aH("radio")
l=J.W(g)
l.st(g,"mode")
l=l.gY(g)
W.ah(l.a,l.b,new E.ho(this),!1,H.v(l,0))
j.appendChild(g)
E.ag(g,305,79)
o.push(g)
f=W.aH("radio")
l=J.W(f)
l.st(f,"mode")
l=l.gY(f)
W.ah(l.a,l.b,new E.hp(this),!1,H.v(l,0))
j.appendChild(f)
E.ag(f,305,129)
o.push(f)
e=W.aH("radio")
l=J.W(e)
l.st(e,"mode")
l=l.gY(e)
W.ah(l.a,l.b,new E.hq(this),!1,H.v(l,0))
j.appendChild(e)
E.ag(e,305,159)
o.push(e)
d=W.aH("radio")
l=J.W(d)
l.st(d,"mode")
l=l.gY(d)
W.ah(l.a,l.b,new E.hs(this),!1,H.v(l,0))
j.appendChild(d)
E.ag(d,305,189)
o.push(d)
p.appendChild(j)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="CIEL*a*b"
E.ag(n,330,226)
p.appendChild(n)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="L"
E.ag(n,330,245)
p.appendChild(n)
o=W.aH("number")
o.className="colourPicker_number colourPicker_lab"
l=J.W(o)
l.sai(o,"0")
l.sah(o,"100")
l.sak(o,"0.01")
l=C.i.gY(o)
W.ah(l.a,l.b,new E.ht(this),!1,H.v(l,0))
this.id=o
E.ag(o,344,241)
p.appendChild(this.id)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="a"
E.ag(n,408,245)
p.appendChild(n)
o=W.aH("number")
o.className="colourPicker_number colourPicker_lab"
l=J.W(o)
l.sai(o,"-127")
l.sah(o,"128")
l.sak(o,"0.01")
l=C.i.gY(o)
W.ah(l.a,l.b,new E.hu(this),!1,H.v(l,0))
this.k1=o
E.ag(o,422,241)
p.appendChild(this.k1)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="b"
E.ag(n,486,245)
p.appendChild(n)
o=W.aH("number")
o.className="colourPicker_number colourPicker_lab"
l=J.W(o)
l.sai(o,"-127")
l.sah(o,"128")
l.sak(o,"0.01")
l=C.i.gY(o)
W.ah(l.a,l.b,new E.hv(this),!1,H.v(l,0))
this.k2=o
E.ag(o,500,241)
p.appendChild(this.k2)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="Hex"
E.ag(n,573,226)
p.appendChild(n)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="#"
E.ag(n,573,245)
p.appendChild(n)
o=W.aH("text")
l=J.W(o)
l.sdn(o,6)
l.sfQ(o,"[\\d|a-f|A-F]{6}")
o.className="colourPicker_hex"
l=C.i.gY(o)
W.ah(l.a,l.b,new E.hw(this),!1,H.v(l,0))
this.k3=o
E.ag(o,585,241)
p.appendChild(this.k3)
c=t.createElement("button")
c.className="colourPicker_innerButton"
c.textContent="OK"
W.ah(c,"click",this.gep(),!1,q)
E.ag(c,570,285)
p.appendChild(c)
b=t.createElement("button")
b.className="colourPicker_innerButton"
b.textContent="Cancel"
W.ah(b,"click",this.gem(),!1,q)
E.ag(b,470,285)
p.appendChild(b)
this.f=s
W.ah(window,"resize",this.gh3(),!1,W.y)
this.cg()},
cT:function(a){var t,s,r,q,p,o,n,m
if(!this.rx)return
t=$.$get$aO()
t.toString
F.c_(C.d).$1(t.ae(C.d,"a1"))
$.$get$aO().a5("pickerDrag")
t=$.$get$aO()
t.toString
F.c_(C.d).$1(t.ae(C.d,"a2"))
t=J.W(a)
s=t.gaY(a)
s=s.gK(s)
r=this.x
r.toString
q=document
r=W.eI(r,q.documentElement).a
if(typeof s!=="number")return s.as()
if(typeof r!=="number")return H.as(r)
t=t.gaY(a)
t=t.gL(t)
p=this.x
p.toString
q=W.eI(p,q.documentElement).b
if(typeof t!=="number")return t.as()
if(typeof q!=="number")return H.as(q)
p=$.$get$aO()
p.toString
F.c_(C.d).$1(p.ae(C.d,"a3"))
o=C.c.F(s-r-1,0,255)
n=C.c.F(t-q-1,0,255)
q=$.$get$aO()
q.toString
F.c_(C.d).$1(q.ae(C.d,"a4"))
m=this.bK()
q=$.$get$aO()
q.toString
F.c_(C.d).$1(q.ae(C.d,"a5"))
m[0].y=o/255
m[1].y=1-n/255
q=$.$get$aO()
q.toString
F.c_(C.d).$1(q.ae(C.d,"a6"))
this.cY()
q=$.$get$aO()
q.toString
F.c_(C.d).$1(q.ae(C.d,"a7"))},
cZ:function(a){$.$get$aO().a5("setFromPicker")
this.bK()[2].y=this.y.y;($.bW>=3?this.gdR():this.gdS()).$1(!0)},
cY:function(){return this.cZ(null)},
du:function(a){var t,s,r,q
t=window.innerWidth
s=window.innerHeight
r=this.f.style
q=H.q(t)+"px"
r.width=q
q=H.q(s)+"px"
r.height=q
r=this.r
q=r.style
r=r.clientWidth
if(typeof t!=="number")return t.as()
if(typeof r!=="number")return H.as(r)
r=""+C.b.a2(t-r,2)+"px"
q.left=r
r=this.r.clientHeight
if(typeof s!=="number")return s.as()
if(typeof r!=="number")return H.as(r)
r=""+C.b.a2(s-r,2)+"px"
q.top=r},
cg:function(){return this.du(null)},
sfU:function(a){return this.rx=a}}
E.hE.prototype={
$1:function(a){var t=A.aV(this.a.y2)
t.b=C.b.F(C.c.G(a*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.u]}}}
E.hF.prototype={
$1:function(a){var t=A.aV(this.a.y2)
t.c=C.b.F(C.c.G(a*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.u]}}}
E.hG.prototype={
$1:function(a){var t=A.aV(this.a.y2)
t.d=C.b.F(C.c.G(a*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.u]}}}
E.hO.prototype={
$1:function(a){var t=A.aV(this.a.y2)
t.b=C.b.F(C.c.G(a*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.u]}}}
E.hP.prototype={
$1:function(a){var t=A.aV(this.a.y2)
t.c=C.b.F(C.c.G(a*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.u]}}}
E.hQ.prototype={
$1:function(a){var t=A.aV(this.a.y2)
t.d=C.b.F(C.c.G(a*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.u]}}}
E.hR.prototype={
$2:function(a,b){var t=A.aV(this.a.y2)
t.d=C.b.F(C.c.G(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.b.F(C.c.G(b*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.u,P.u]}}}
E.hS.prototype={
$2:function(a,b){var t=A.aV(this.a.y2)
t.d=C.b.F(C.c.G(a*255),0,255)
t.e=!0
t.y=!0
t.b=C.b.F(C.c.G(b*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.u,P.u]}}}
E.hT.prototype={
$2:function(a,b){var t=A.aV(this.a.y2)
t.b=C.b.F(C.c.G(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.b.F(C.c.G(b*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.u,P.u]}}}
E.hU.prototype={
$1:function(a){var t=A.aV(this.a.y2)
if(t.e)t.a3()
t.f=a
t.ao()
return t},
$S:function(){return{func:1,args:[P.u]}}}
E.hV.prototype={
$1:function(a){var t=A.aV(this.a.y2)
if(t.e)t.a3()
t.r=a
t.ao()
return t},
$S:function(){return{func:1,args:[P.u]}}}
E.hH.prototype={
$1:function(a){var t=A.aV(this.a.y2)
if(t.e)t.a3()
t.x=a
t.ao()
return t},
$S:function(){return{func:1,args:[P.u]}}}
E.hI.prototype={
$1:function(a){var t=A.bk(0,0,0,255)
t.aI(a,1,1)
return t},
$S:function(){return{func:1,args:[P.u]}}}
E.hJ.prototype={
$1:function(a){var t=A.aV(this.a.y2)
if(t.e)t.a3()
t.r=a
t.ao()
return t},
$S:function(){return{func:1,args:[P.u]}}}
E.hK.prototype={
$1:function(a){var t=A.aV(this.a.y2)
if(t.e)t.a3()
t.x=a
t.ao()
return t},
$S:function(){return{func:1,args:[P.u]}}}
E.hL.prototype={
$2:function(a,b){var t,s
t=this.a.dx.y
s=A.bk(0,0,0,255)
s.aI(t,a,b)
return s},
$S:function(){return{func:1,args:[P.u,P.u]}}}
E.hM.prototype={
$2:function(a,b){var t,s
t=this.a.dy.y
s=A.bk(0,0,0,255)
s.aI(a,t,b)
return s},
$S:function(){return{func:1,args:[P.u,P.u]}}}
E.hN.prototype={
$2:function(a,b){var t,s
t=this.a.fr.y
s=A.bk(0,0,0,255)
s.aI(a,b,t)
return s},
$S:function(){return{func:1,args:[P.u,P.u]}}}
E.hd.prototype={
$1:function(a){this.a.fN(0)
J.ob(a)
a.stopPropagation()},
$S:function(){return{func:1,args:[W.az]}}}
E.he.prototype={
$1:function(a){J.ob(a)
a.stopPropagation()},
$S:function(){return{func:1,args:[W.az]}}}
E.hf.prototype={
$1:function(a){return J.q_(a)},
$S:function(){return{func:1,args:[W.y]}}}
E.hg.prototype={
$1:function(a){var t,s
$.$get$aO().a5("PICKER CLICK")
t=this.a
t.rx=!0
s=$.$get$aO()
s.toString
F.c_(C.d).$1(s.ae(C.d,"click"))
t.cT(a)},
$S:function(){return{func:1,args:[W.az]}}}
E.hr.prototype={
$1:function(a){var t=this.a
t.y2.bA(t.n)
t.a8()},
$S:function(){return{func:1,args:[W.y]}}}
E.hx.prototype={
$1:function(a){var t,s,r
t=this.a
E.c8(t.cx,0,255,0)
s=t.z
r=J.bS(t.cx)
if(typeof r!=="number")return r.I()
s.y=r/255
t.aC()},
$S:function(){return{func:1,args:[W.y]}}}
E.hy.prototype={
$1:function(a){var t=this.a
J.ba(t.cx,C.b.m(C.c.Z(t.z.y*255)))
t.aC()},
$S:function(){return{func:1,args:[W.y]}}}
E.hz.prototype={
$1:function(a){var t,s,r
t=this.a
E.c8(t.cy,0,255,0)
s=t.Q
r=J.bS(t.cy)
if(typeof r!=="number")return r.I()
s.y=r/255
t.aC()},
$S:function(){return{func:1,args:[W.y]}}}
E.hA.prototype={
$1:function(a){var t=this.a
J.ba(t.cy,C.b.m(C.c.Z(t.Q.y*255)))
t.aC()},
$S:function(){return{func:1,args:[W.y]}}}
E.hB.prototype={
$1:function(a){var t,s,r
t=this.a
E.c8(t.db,0,255,0)
s=t.ch
r=J.bS(t.db)
if(typeof r!=="number")return r.I()
s.y=r/255
t.aC()},
$S:function(){return{func:1,args:[W.y]}}}
E.hC.prototype={
$1:function(a){var t=this.a
J.ba(t.db,C.b.m(C.c.Z(t.ch.y*255)))
t.aC()},
$S:function(){return{func:1,args:[W.y]}}}
E.hD.prototype={
$1:function(a){var t,s,r,q
t=this.a
s=this.b
E.c8(t.fx,0,s,0)
r=t.dx
q=J.bS(t.fx)
if(typeof q!=="number")return q.I()
r.y=q/s
t.aB()},
$S:function(){return{func:1,args:[W.y]}}}
E.hh.prototype={
$1:function(a){var t=this.a
J.ba(t.fx,C.b.m(C.c.Z(t.dx.y*this.b)))
t.aB()},
$S:function(){return{func:1,args:[W.y]}}}
E.hi.prototype={
$1:function(a){var t,s,r
t=this.a
E.c8(t.fy,0,100,0)
s=t.dy
r=J.bS(t.fy)
if(typeof r!=="number")return r.I()
s.y=r/100
t.aB()},
$S:function(){return{func:1,args:[W.y]}}}
E.hj.prototype={
$1:function(a){var t=this.a
J.ba(t.fy,C.b.m(C.c.Z(t.dy.y*100)))
t.aB()},
$S:function(){return{func:1,args:[W.y]}}}
E.hk.prototype={
$1:function(a){var t,s,r
t=this.a
E.c8(t.go,0,100,0)
s=t.fr
r=J.bS(t.go)
if(typeof r!=="number")return r.I()
s.y=r/100
t.aB()},
$S:function(){return{func:1,args:[W.y]}}}
E.hl.prototype={
$1:function(a){var t=this.a
J.ba(t.go,C.b.m(C.c.Z(t.fr.y*100)))
t.aB()},
$S:function(){return{func:1,args:[W.y]}}}
E.hm.prototype={
$1:function(a){$.bW=0
this.a.a8()},
$S:function(){return{func:1,args:[W.y]}}}
E.hn.prototype={
$1:function(a){$.bW=1
this.a.a8()},
$S:function(){return{func:1,args:[W.y]}}}
E.ho.prototype={
$1:function(a){$.bW=2
this.a.a8()},
$S:function(){return{func:1,args:[W.y]}}}
E.hp.prototype={
$1:function(a){$.bW=3
this.a.a8()},
$S:function(){return{func:1,args:[W.y]}}}
E.hq.prototype={
$1:function(a){$.bW=4
this.a.a8()},
$S:function(){return{func:1,args:[W.y]}}}
E.hs.prototype={
$1:function(a){$.bW=5
this.a.a8()},
$S:function(){return{func:1,args:[W.y]}}}
E.ht.prototype={
$1:function(a){var t=this.a
E.c8(t.id,0,100,2)
t.bB()},
$S:function(){return{func:1,args:[W.y]}}}
E.hu.prototype={
$1:function(a){var t=this.a
E.c8(t.k1,-127,128,2)
t.bB()},
$S:function(){return{func:1,args:[W.y]}}}
E.hv.prototype={
$1:function(a){var t=this.a
E.c8(t.k2,-127,128,2)
t.bB()},
$S:function(){return{func:1,args:[W.y]}}}
E.hw.prototype={
$1:function(a){var t,s
t=this.a
s=A.eC(J.n4(t.k3))
t.y2.bA(s)
t.a8()},
$S:function(){return{func:1,args:[W.y]}}}
E.cG.prototype={
cm:function(a){var t,s,r,q
this.a.a5("update: silent: "+a)
t=this.r
s=(this.y-t)/(this.x-t)
if(this.z){r=C.c.G(this.f*(1-s))
t=this.c.style
q=""+r+"px"
t.top=q}else{r=C.c.G(this.e*s)
t=this.c.style
q=""+r+"px"
t.left=q}if(!a){t=this.ch
q=W.qD("update",!0,!0,this)
if(t.b>=4)H.av(t.cD())
t.aJ(q)}},
a8:function(){return this.cm(!1)},
eJ:function(a){this.a.a5("SLIDER CLICK")
this.Q=!0
this.cu(a)},
eL:function(a){this.Q=!1},
eK:function(a){if(!this.Q)return
this.cu(a)},
cu:function(a){var t,s,r,q,p,o
t=J.W(a)
s=t.gaY(a)
s=s.gK(s)
r=this.b
r.toString
q=document
r=W.eI(r,q.documentElement).a
if(typeof s!=="number")return s.as()
if(typeof r!=="number")return H.as(r)
t=t.gaY(a)
t=t.gL(t)
p=this.b
p.toString
q=W.eI(p,q.documentElement).b
if(typeof t!=="number")return t.as()
if(typeof q!=="number")return H.as(q)
o=this.z?C.c.F(1-(t-q)/this.f,0,1):C.e.F((s-r)/this.e,0,1)
t=this.r
this.y=o*(this.x-t)+t
this.a8()},
de:function(a){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
t.toString
s=t.getContext("2d")
t=this.d
r=P.pw(s.getImageData(0,0,t.width,t.height))
for(t=J.W(r),q=this.z,p=0;p<this.e;++p)for(o=0;n=this.f,o<n;++o){m=this.e
l=(o*m+p)*4
k=a.$1(q?1-o/n:p/m)
n=t.gaf(r)
m=k.gcf()
if(l>=n.length)return H.F(n,l)
n[l]=m
m=t.gaf(r)
n=l+1
j=k.c
if(n>=m.length)return H.F(m,n)
m[n]=j
j=t.gaf(r)
n=l+2
m=k.d
if(n>=j.length)return H.F(j,n)
j[n]=m
m=t.gaf(r)
n=l+3
if(n>=m.length)return H.F(m,n)
m[n]=255}C.o.dr(s,r,0,0)},
e3:function(a,b,c,d,e){var t,s,r,q
t=W.y
s=new P.fC(null,0,null,null,null,null,null,[t])
this.ch=s
this.cx=new P.fD(s,[t])
this.y=this.r
t=document
s=t.createElement("div")
s.className="fancySlider_bar"
r=s.style
q=""+this.e+"px"
r.width=q
r=s.style
q=""+this.f+"px"
r.height=q
W.ah(s,"mousedown",this.geI(),!1,W.az)
this.b=s
s=this.e
s=W.of(this.f,s)
s.className="fancySlider_background"
this.d=s
t=t.createElement("div")
t.className="fancySlider_slider_"+(this.z?"vertical":"horizontal")
this.c=t
this.b.appendChild(this.d)
this.b.appendChild(this.c)
this.a8()
$.$get$iv().j(0,this)
E.oi()}}
E.hb.prototype={
$1:function(a){var t,s,r
for(t=$.$get$eB(),s=[null],r=new P.bf(t,t.r,null,null,s),r.c=t.e;r.v();)r.d.sfU(!1)
for(t=$.$get$iv(),s=new P.bf(t,t.r,null,null,s),s.c=t.e;s.v();)s.d.eL(a)},
$S:function(){return{func:1,args:[W.az]}}}
E.hc.prototype={
$1:function(a){var t,s,r
for(t=$.$get$eB(),s=[null],r=new P.bf(t,t.r,null,null,s),r.c=t.e;r.v();)r.d.cT(a)
for(t=$.$get$iv(),s=new P.bf(t,t.r,null,null,s),s.c=t.e;s.v();)s.d.eK(a)},
$S:function(){return{func:1,args:[W.az]}}}
F.di.prototype={
m:function(a){return this.b}}
F.dj.prototype={
ae:function(a,b){return"("+this.b+")["+H.q(C.a.gfL(a.b.split(".")))+"]: "+H.q(b)},
c3:function(a,b){F.c_(C.l).$1(this.ae(C.l,b))},
a5:function(a){},
gt:function(a){return this.b}}
A.jW.prototype={
l:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.a4(b)?t.l(0,b):$.$get$nF()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.a4(b)?t.l(0,b):$.$get$nF()}throw H.w(P.dD(b,"'name' should be a String name or int id only",null))},
gH:function(a){var t=this.a
t=t.ga9(t)
return new H.ff(null,J.bh(t.a),t.b,[H.v(t,0),H.v(t,1)])},
i:function(a,b,c,d){var t,s
t=this.a
if(t.a4(b))this.a0(0,b)
s=this.eN()
if(typeof s!=="number")return s.hk()
if(s>=256)throw H.w(P.dD(s,"Palette colour ids must be in the range 0-255",null))
t.h(0,b,c)
this.b.h(0,s,c)
this.c.h(0,b,s)
this.d.h(0,s,b)},
a0:function(a,b){var t,s,r
t=this.a
if(!t.a4(b))return
s=this.c
r=s.l(0,b)
t.a0(0,b)
this.b.a0(0,r)
s.a0(0,b)
this.d.a0(0,r)},
eN:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.a4(s))return s;++s}}}
A.fl.prototype={
$asC:function(){return[A.bv]},
$isC:1}
A.fp.prototype={
cz:function(a){var t=a==null
this.a=t?C.w:P.tP(a)
if(!t)this.b=a+1},
fS:function(a,b){var t
if(a.gV(a))return
t=a.hl(this.a.b8())
return t},
fR:function(a){return this.fS(a,!0)}}
D.kP.prototype={
$1:function(a){a.gfT()
return!0},
$S:function(){return{func:1,args:[D.cy]}}}
D.cy.prototype={
m:function(a){return this.a},
gt:function(a){return this.a},
gfT:function(){return this.d}}
A.fv.prototype={
f3:function(a){var t,s,r,q,p,o,n,m,l
C.a.bq(this.b,a)
for(t=J.bh(a);t.v();){s=t.gD()
for(r=s.gA().gbt(),r=r.gH(r);r.v();){q=r.gD()
p=J.W(q)
if(!this.d.a4(p.gt(q))){this.d.h(0,p.gt(q),q)
this.d5(p.gt(q))}}for(r=s.gdW().gbt(),r=r.gH(r);r.v();){o=r.gD()
if(!this.d.a4(o)){p=this.d
n=new D.cy(o,"","",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$nM().push(n)
p.h(0,o,n)
this.d5(o)}if(!s.f.a4(this.d.l(0,o)))s.f.h(0,this.d.l(0,o),0)
p=s.f
n=this.d.l(0,o)
m=p.l(0,n)
l=s.r.l(0,o)
if(typeof m!=="number")return m.P()
if(typeof l!=="number")return H.as(l)
p.h(0,n,m+l)}}this.a8()},
a8:function(){var t,s,r
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.bR)(t),++r)t[r].fa()
this.aQ()},
aQ:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
t=document
s=t.querySelector("#canvas")
r=J.pR(s)
r.fillStyle="#FFFFFF"
r.fillRect(0,0,s.width,s.height)
if(this.b.length!==0){q=this.c
q=new H.bC(q,new A.kK(),[H.v(q,0)])
q=!q.gH(q).v()}else q=!0
if(q)return
p=H.ew(t.querySelector("input[type=radio][name=stat]:checked"),"$iseb").value
o=p==="*"?null:this.d.l(0,p)
for(t=this.c,q=t.length,n=0,m=0,l=0,k=0,j=0;j<t.length;t.length===q||(0,H.bR)(t),++j){i=t[j]
if(i.b!==!0)continue
n+=J.cB(i.x)
m=Math.max(m,i.z)
l=Math.min(l,H.dy(i.dH(o)))
k=Math.max(k,H.dy(i.dG(o)))}if(n===0)return
q=this.a
q.a5("stat: "+H.q(o)+", total points: "+n+", turns: "+H.q(m)+", min: "+H.q(l)+", max: "+H.q(k))
h=s.width
if(typeof h!=="number")return h.as()
g=h-50
h=s.height
if(typeof h!=="number")return h.as()
f=h-50
e=g/(m-1)
d=Math.max(k-l,5)
c=A.u6(l,k,f)
if(k<=0)b=0
else{if(typeof c!=="number")return H.as(c)
b=C.e.c_(k/c)+1}if(l>=0)a=0
else{if(typeof c!=="number")return H.as(c)
a=C.e.c_(Math.abs(l)/c)+1}if(typeof c!=="number")return H.as(c)
a0=Math.max(C.e.c_(d/c),b+a)
a1=f/(c*a0)
a2=C.c.Z(c*a*a1)
q.a5("grid increment: "+H.q(c))
q.a5("w: "+g+", h: "+f+", xinc: "+H.q(e)+", yinc: "+H.q(f/d)+", yrange: "+H.q(d))
r.textAlign="center"
for(q=f+25,h=q+12,a3=0;a3<m;){r.fillStyle="#E5E5E5"
a4=C.e.Z(e*a3)+25
r.fillRect(a4,25,1,f)
r.fillStyle="#555555";++a3
r.fillText(A.py(a3),a4,h)}r.textAlign="right"
for(h=f/a0,a3=0;a3<=a0;++a3){r.fillStyle="#E5E5E5"
a5=C.e.Z(h*a3)
r.fillRect(25,a5+25,g,1)
r.fillStyle="#555555"
r.fillText(A.py((a3-a)*c),23,q-a5+5)}r.fillStyle="#555555"
q=25+f
r.fillRect(25,q-h*a,g,1)
r.fillRect(25,25,1,f)
for(h=t.length,q-=a2,j=0;j<t.length;t.length===h||(0,H.bR)(t),++j){i=t[j]
if(i.b!==!0)continue
for(a6=0,a7=!1,a8=1;a8<=m;++a8){a4=J.dC(i.x,new A.kL(a8))
if(a4.gV(a4))continue
a9=J.pH(new H.dk(a4,new A.kM(o),[H.v(a4,0),null]).h_(0,new A.kN()),a4.gu(a4))
b0=C.e.Z(e*(a8-1))+25
a5=q-J.pV(J.n_(a9,a1))
a4=a4.gu(a4)
b1=i.Q
r.strokeStyle="rgba("+H.q(i.c.b)+","+H.q(i.c.c)+","+H.q(i.c.d)+","+C.e.hb(a4/b1*0.8+0.2,2)
r.strokeRect(b0-0.5,a5-0.5,2,2)
if(a8>1&&!0){a4=C.e.Z(e*(a8-2))
r.beginPath()
r.moveTo(a4+25+0.5,a6+0.5)
r.lineTo(b0+0.5,a5+0.5)
r.stroke()}a6=a5
a7=!0}}},
d4:function(a){var t,s,r,q,p,o,n,m,l
t=document
s=H.ew(t.querySelector("#select_class"),"$isc1").value
r=H.ew(t.querySelector("#select_aspect"),"$isc1").value
q=H.ew(t.querySelector("#select_interest1"),"$isc1").value
p=H.ew(t.querySelector("#select_interest2"),"$isc1").value
o=s==="*"?null:T.tx(s)
n=r==="*"?null:L.qs(r)
m=q==="*"?null:B.oF(q)
l=A.tA(this,o,n,m,p==="*"?null:B.oF(p))
this.c.push(l)
l.c2(0)
t.querySelector("#line_container").appendChild(l.y)
this.a8()},
f6:function(){return this.d4(null)},
d5:function(a){var t,s,r,q,p,o,n
t=this.d.l(0,a)
s=document
r=s.querySelector("#stats_container")
q=s.createElement("div")
q.className="selection_block"
p=W.aH("radio")
o=J.W(p)
o.st(p,"stat")
n=J.W(t)
o.sR(p,n.gt(t))
p.id="stat_"+H.q(n.gt(t))
o=o.gc8(p)
W.ah(o.a,o.b,new A.kF(this),!1,H.v(o,0))
q.appendChild(p)
s=s.createElement("label")
s.htmlFor="stat_"+H.q(n.gt(t))
s.textContent=n.gt(t)
q.appendChild(s)
r.appendChild(q)},
e7:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=document
s=J.o9(t.querySelector("#add_line"))
W.ah(s.a,s.b,this.gf5(),!1,H.v(s,0))
r=t.querySelector("#select_class")
s=T.tv()
q=P.cq(s,!0,H.v(s,0))
C.a.aS(q,new A.kG())
for(s=q.length,p=0;p<q.length;q.length===s||(0,H.bR)(q),++p){o=J.bi(q[p])
n=W.jS(o,o,null,!1)
n.textContent=o
r.appendChild(n)}r=t.querySelector("#select_aspect")
s=L.qq()
m=P.cq(s,!0,H.v(s,0))
C.a.aS(m,new A.kH())
for(s=m.length,p=0;p<m.length;m.length===s||(0,H.bR)(m),++p){o=J.bi(m[p])
n=W.jS(o,o,null,!1)
n.textContent=o
r.appendChild(n)}r=t.querySelector("#select_interest1")
l=t.querySelector("#select_interest2")
s=B.r2()
k=P.cq(s,!0,H.v(s,0))
C.a.aS(k,new A.kI())
for(s=k.length,p=0;p<k.length;k.length===s||(0,H.bR)(k),++p){j=k[p]
o=J.W(j)
n=o.gt(j)
i=W.jS(n,n,null,!1)
i.textContent=n
r.appendChild(i)
o=o.gt(j)
i=W.jS(o,o,null,!1)
i.textContent=o
l.appendChild(i)}t=J.o9(t.querySelector("#stat_average"))
W.ah(t.a,t.b,new A.kJ(this),!1,H.v(t,0))},
gA:function(){return this.d}}
A.kG.prototype={
$2:function(a,b){return J.fR(J.bi(a),J.bi(b))},
$S:function(){return{func:1,args:[T.cw,T.cw]}}}
A.kH.prototype={
$2:function(a,b){return J.fR(J.bi(a),J.bi(b))},
$S:function(){return{func:1,args:[L.c7,L.c7]}}}
A.kI.prototype={
$2:function(a,b){return J.fR(J.bi(a),J.bi(b))},
$S:function(){return{func:1,args:[B.ck,B.ck]}}}
A.kJ.prototype={
$1:function(a){return this.a.aQ()},
$S:function(){return{func:1,args:[W.y]}}}
A.kK.prototype={
$1:function(a){return a.gfp()},
$S:function(){return{func:1,args:[A.ec]}}}
A.kL.prototype={
$1:function(a){return J.am(a.gby(),this.a)},
$S:function(){return{func:1,args:[E.aJ]}}}
A.kM.prototype={
$1:function(a){return a.dI(this.a)},
$S:function(){return{func:1,args:[E.aJ]}}}
A.kN.prototype={
$2:function(a,b){return J.dB(a,b)},
$S:function(){return{func:1,args:[P.u,P.u]}}}
A.kF.prototype={
$1:function(a){return this.a.aQ()},
$S:function(){return{func:1,args:[W.y]}}}
A.ec.prototype={
c2:function(a){var t,s,r,q,p,o,n
t=document
s=t.createElement("div")
s.className="selection_block"
r=W.aH("checkbox")
q=J.W(r)
q.saO(r,!0)
q=q.gY(r)
W.ah(q.a,q.b,new A.kC(this,r),!1,H.v(q,0))
s.appendChild(r)
p=W.aH("color")
q=J.W(p)
q.sR(p,"#"+this.c.a1(!1))
q=q.gY(p)
W.ah(q.a,q.b,new A.kD(this,p),!1,H.v(q,0))
s.appendChild(p)
E.qA(p,null,14540253,25,48)
q=t.createElement("span")
o=this.d
o=H.q(o==null?"[Any class]":o)+" of "
n=this.e
o=o+H.q(n==null?"[Any aspect]":n)+" ["
n=this.f
o=o+H.q(n==null?"Any interest":J.bi(n))+", "
n=this.r
q.textContent=o+H.q(n==null?"Any interest":J.bi(n))+"]"
s.appendChild(q)
t=t.createElement("button")
t.textContent="Remove"
W.ah(t,"click",new A.kE(this),!1,W.az)
s.appendChild(t)
this.y=s},
fa:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=D.cy
s=P.u
this.ch=P.cp(t,s)
this.cx=P.cp(t,s)
this.cy=0
this.db=0
for(t=this.a,s=t.d,s=s.ga9(s),s=s.gH(s);s.v();){r=s.gD()
this.ch.h(0,r,0)
this.cx.h(0,r,0)}for(s=J.bh(this.x);s.v();){q=s.gD()
this.z=Math.max(this.z,H.dy(q.gby()))}for(p=1;p<=this.z;++p){o=J.dC(this.x,new A.kw(p))
this.Q=Math.max(this.Q,o.gu(o))
for(s=t.d,s=s.ga9(s),s=s.gH(s),n=o.a,m=J.ev(n),l=o.b,k=[H.v(o,0)],j=0;s.v();){r=s.gD()
for(i=m.gH(n),h=new H.eh(i,l,k),g=0;h.v();){q=i.gD()
f=J.n0(q.gA(),r)
if(typeof f!=="number")return H.as(f)
g+=f
f=J.n0(q.gA(),r)
if(typeof f!=="number")return H.as(f)
j+=f}g/=o.gu(o)
i=this.ch
i.h(0,r,Math.min(H.dy(i.l(0,r)),g))
i=this.cx
i.h(0,r,Math.max(H.dy(i.l(0,r)),g))}s=t.d
j/=s.gu(s)*o.gu(o)
this.cy=Math.min(H.dy(this.cy),j)
this.db=Math.max(H.dy(this.db),j)}t.a.a5(H.q(this.d)+" of "+H.q(this.e)+", "+H.q(this.f)+" + "+H.q(this.r)+": maxturn: "+H.q(this.z)+", minima: "+J.bb(this.ch)+", maxima: "+J.bb(this.cx))},
dH:function(a){if(a!=null)return this.ch.l(0,a)
return this.cy},
dG:function(a){if(a!=null)return this.cx.l(0,a)
return this.db},
e6:function(a,b,c,d,e){var t,s,r,q
t=this.a.b
this.x=t
if(this.d!=null){t=C.a.cp(t,new A.kx(this))
this.x=t}s=this.e
r=s!=null
if(r){t=J.dC(t,new A.ky(this))
this.x=t}q=this.f==null
if(!q||this.r!=null){q=!q
if(q&&this.r!=null)this.x=J.dC(t,new A.kz(this))
else if(q)this.x=J.dC(t,new A.kA(this))
else if(this.r!=null)this.x=J.dC(t,new A.kB(this))}if(r)this.c=A.aV(s.gO().l(0,$.Y))
else{t=$.$get$mV().a.b8()
s=$.$get$mV().a.b8()
r=$.$get$mV().a.b8()
q=A.bk(0,0,0,255)
q.aI(t,s*0.3+0.7,r*0.3+0.7)
this.c=q}},
gfp:function(){return this.b},
gcs:function(){return this.d},
gaE:function(){return this.e},
gb0:function(){return this.f},
gb1:function(){return this.r}}
A.kx.prototype={
$1:function(a){return J.am(a.gcs(),this.a.d)},
$S:function(){return{func:1,args:[E.aJ]}}}
A.ky.prototype={
$1:function(a){return J.am(a.gaE(),this.a.e)},
$S:function(){return{func:1,args:[E.aJ]}}}
A.kz.prototype={
$1:function(a){var t,s
t=this.a
s=t.f
if(!(J.am(a.gb0(),s)&&J.am(a.gb1(),t.r)))t=J.am(a.gb0(),t.r)&&J.am(a.gb1(),s)
else t=!0
return t},
$S:function(){return{func:1,args:[E.aJ]}}}
A.kA.prototype={
$1:function(a){var t=this.a.f
return J.am(a.gb0(),t)||J.am(a.gb1(),t)},
$S:function(){return{func:1,args:[E.aJ]}}}
A.kB.prototype={
$1:function(a){var t=this.a.r
return J.am(a.gb0(),t)||J.am(a.gb1(),t)},
$S:function(){return{func:1,args:[E.aJ]}}}
A.kC.prototype={
$1:function(a){var t,s
t=this.a
s=J.pQ(this.b)
t.b=s
t=t.a
s="Enabled: "+H.q(s)
F.c_(C.d).$1(t.a.ae(C.d,s))
t.aQ()},
$S:function(){return{func:1,args:[W.y]}}}
A.kD.prototype={
$1:function(a){var t=this.a
t.c=A.eC(J.oc(J.n4(this.b),1))
t.a.aQ()},
$S:function(){return{func:1,args:[W.y]}}}
A.kE.prototype={
$1:function(a){var t,s,r
t=this.a
s=t.a
C.a.a0(s.c,t)
t=t.y
r=t.parentNode
if(r!=null)r.removeChild(t)
s.aQ()},
$S:function(){return{func:1,args:[W.y]}}}
A.kw.prototype={
$1:function(a){return J.am(a.gby(),this.a)},
$S:function(){return{func:1,args:[E.aJ]}}}
E.aJ.prototype={
dI:function(a){var t,s,r
if(a!=null)return this.f.l(0,a)
for(t=this.f,t=t.ga9(t),t=t.gH(t),s=0;t.v();){r=t.gD()
if(typeof r!=="number")return H.as(r)
s+=r}t=this.f
if(t.gV(t))t=0
else{t=this.f
t=s/t.gu(t)}return t},
gby:function(){return this.a},
gcs:function(){return this.b},
gaE:function(){return this.c},
gb0:function(){return this.d},
gb1:function(){return this.e},
gA:function(){return this.f},
gdW:function(){return this.r}}
Q.bO.prototype={
k:function(a,b){return b},
m:function(a){return J.bb(this.gbv())},
ac:function(a,b){return Q.nR(this,b,H.an(this,"bO",0),null)},
a_:function(a,b){return Q.nQ(this,!1,!0,null,H.an(this,"bO",0))},
ad:function(a){return this.a_(a,!0)},
$isC:1,
$asC:null}
Q.lk.prototype={
gbv:function(){return this.b},
l:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.F(t,b)
return J.n3(t[b])},
h:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.F(t,b)
t[b]=new Q.e(c,s,this.$ti)},
gu:function(a){return this.b.length},
m:function(a){return P.f7(this.b,"[","]")},
ac:function(a,b){return Q.nR(this,b,H.v(this,0),null)},
a_:function(a,b){return Q.nQ(this,!1,!0,null,H.v(this,0))},
ad:function(a){return this.a_(a,!0)},
e9:function(a,b,c){var t,s
this.a=a
t=[[Q.e,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.fy.prototype={$asbO:null,$asC:null,$asV:null,$asR:null,$isV:1,$isR:1,$isC:1}
Q.e.prototype={
m:function(a){return"("+H.q(this.a)+" @ "+H.q(this.b)+")"},
gb6:function(a){return this.a},
ghi:function(){return this.b}}
Q.cZ.prototype={
gbv:function(){return this.b},
gH:function(a){var t=new Q.lj(null,[H.an(this,"cZ",0)])
t.a=J.bh(this.b)
return t},
gu:function(a){return J.cB(this.b)},
m:function(a){return J.bb(this.b)},
ac:function(a,b){return Q.nR(this,b,H.an(this,"cZ",0),null)},
a_:function(a,b){return Q.nQ(this,!1,!0,null,H.an(this,"cZ",0))},
ad:function(a){return this.a_(a,!0)}}
Q.eg.prototype={$asbO:null,$asC:null,$isC:1}
Q.lj.prototype={
gD:function(){return J.n3(this.a.gD())},
v:function(){return this.a.v()}}
Q.fz.prototype={
$ascZ:function(a,b){return[b]},
$aseg:function(a,b){return[b]},
$asbO:function(a,b){return[b]},
$asC:function(a,b){return[b]}}
Q.ll.prototype={
$1:function(a){return new Q.e(this.c.$1(J.n3(a)),a.ghi(),[this.b])},
$S:function(){return H.mG(function(a,b){return{func:1,args:[[Q.e,a]]}},this,"fz")}}
J.H.prototype.dZ=J.H.prototype.m
J.e1.prototype.e_=J.e1.prototype.m
P.bD.prototype.e0=P.bD.prototype.aJ
P.bD.prototype.e1=P.bD.prototype.bf;(function installTearOffs(){installTearOff(H.dt.prototype,"gfK",0,0,0,null,["$0"],["bu"],1)
installTearOff(H.bP.prototype,"gdJ",0,0,0,null,["$1"],["aa"],5)
installTearOff(H.d_.prototype,"gfl",0,0,0,null,["$1"],["aw"],5)
installTearOff(P,"u1",1,0,0,null,["$1"],["tI"],4)
installTearOff(P,"u2",1,0,0,null,["$1"],["tJ"],4)
installTearOff(P,"u3",1,0,0,null,["$1"],["tK"],4)
installTearOff(P,"pv",1,0,0,null,["$0"],["tZ"],1)
installTearOff(P,"u5",1,0,0,null,["$2","$1"],["pm",function(a){return P.pm(a,null)}],6)
installTearOff(P,"u4",1,0,0,null,["$0"],["tX"],1)
installTearOff(P.aN.prototype,"gbH",0,0,0,null,["$2","$1"],["al","eo"],6)
var t
installTearOff(t=P.fE.prototype,"gbS",0,0,0,null,["$0"],["aM"],1)
installTearOff(t,"gbT",0,0,0,null,["$0"],["aN"],1)
installTearOff(t=P.bD.prototype,"gbS",0,0,0,null,["$0"],["aM"],1)
installTearOff(t,"gbT",0,0,0,null,["$0"],["aN"],1)
installTearOff(t=P.el.prototype,"gbS",0,0,0,null,["$0"],["aM"],1)
installTearOff(t,"gbT",0,0,0,null,["$0"],["aN"],1)
installTearOff(t,"gey",0,0,0,null,["$1"],["ez"],function(){return H.mG(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"el")})
installTearOff(t,"geC",0,0,0,null,["$2"],["eD"],9)
installTearOff(t,"geA",0,0,0,null,["$0"],["eB"],1)
installTearOff(P,"ub",1,0,0,null,["$2"],["qC"],15)
installTearOff(P,"uc",1,0,0,null,["$1"],["fO"],2)
installTearOff(t=W.eE.prototype,"gab",0,1,0,null,["$1"],["c3"],2)
installTearOff(t,"gfE",0,0,0,null,["$1"],["dl"],2)
installTearOff(t,"gby",0,0,0,null,["$1"],["h8"],10)
installTearOff(t,"ghg",0,0,0,null,["$1"],["hh"],2)
installTearOff(W.d5.prototype,"gb6",0,1,0,null,["$1"],["aF"],11)
installTearOff(W.da.prototype,"gb6",0,1,0,null,["$1"],["aF"],12)
installTearOff(W.eS.prototype,"gb6",0,1,0,null,["$1"],["aF"],7)
installTearOff(W.c1.prototype,"gb6",0,1,0,null,["$1"],["aF"],7)
installTearOff(R,"cT",1,0,0,null,["$1"],["t2"],0)
installTearOff(R,"rP",1,0,0,null,["$1"],["rR"],0)
installTearOff(R,"p3",1,0,0,null,["$1"],["t1"],0)
installTearOff(R,"aC",1,0,0,null,["$1"],["t0"],0)
installTearOff(R,"nJ",1,0,0,null,["$1"],["t_"],0)
installTearOff(R,"p2",1,0,0,null,["$1"],["rY"],0)
installTearOff(R,"fo",1,0,0,null,["$1"],["rX"],0)
installTearOff(R,"cS",1,0,0,null,["$1"],["rU"],0)
installTearOff(R,"ct",1,0,0,null,["$1"],["rW"],0)
installTearOff(R,"dm",1,0,0,null,["$1"],["rZ"],0)
installTearOff(R,"nI",1,0,0,null,["$1"],["rV"],0)
installTearOff(R,"n",1,0,0,null,["$1"],["rS"],0)
installTearOff(R,"rQ",1,0,0,null,["$1"],["rT"],0)
installTearOff(t=E.dH.prototype,"gdS",0,0,0,null,["$1","$0"],["cv","aC"],8)
installTearOff(t,"gdR",0,0,0,null,["$1","$0"],["ct","aB"],8)
installTearOff(t,"gep",0,0,0,null,["$1","$0"],["cK","eq"],3)
installTearOff(t,"gem",0,0,0,null,["$1","$0"],["cI","en"],3)
installTearOff(t,"geV",0,0,0,null,["$1","$0"],["cZ","cY"],3)
installTearOff(t,"gh3",0,0,0,null,["$1","$0"],["du","cg"],3)
installTearOff(E.cG.prototype,"geI",0,0,0,null,["$1"],["eJ"],13)
installTearOff(F.dj.prototype,"gab",0,1,0,null,["$1"],["c3"],2)
installTearOff(A,"pF",1,0,0,null,["$0"],["un"],1)
installTearOff(t=A.fv.prototype,"gf2",0,0,0,null,["$1"],["f3"],14)
installTearOff(t,"gf5",0,0,0,null,["$1","$0"],["d4","f6"],3)})();(function inheritance(){inherit(P.ar,null)
var t=P.ar
inherit(H.nz,t)
inherit(J.H,t)
inherit(J.fX,t)
inherit(P.C,t)
inherit(H.fe,t)
inherit(P.f9,t)
inherit(H.eQ,t)
inherit(H.d4,t)
inherit(H.m8,t)
inherit(H.dt,t)
inherit(H.lE,t)
inherit(H.d0,t)
inherit(H.m7,t)
inherit(H.lw,t)
inherit(H.dn,t)
inherit(H.l9,t)
inherit(H.bU,t)
inherit(H.bP,t)
inherit(H.d_,t)
inherit(H.k7,t)
inherit(H.lc,t)
inherit(P.cF,t)
inherit(H.dJ,t)
inherit(H.fJ,t)
inherit(H.cz,t)
inherit(H.l,t)
inherit(H.ji,t)
inherit(H.jk,t)
inherit(H.fd,t)
inherit(H.ma,t)
inherit(H.lp,t)
inherit(H.kX,t)
inherit(H.mu,t)
inherit(P.b5,t)
inherit(P.lA,t)
inherit(P.fH,t)
inherit(P.aN,t)
inherit(P.fB,t)
inherit(P.c2,t)
inherit(P.kQ,t)
inherit(P.mo,t)
inherit(P.lu,t)
inherit(P.bD,t)
inherit(P.fF,t)
inherit(P.lB,t)
inherit(P.mc,t)
inherit(P.ms,t)
inherit(P.d1,t)
inherit(P.mz,t)
inherit(P.lX,t)
inherit(P.lZ,t)
inherit(P.kl,t)
inherit(P.m5,t)
inherit(P.bf,t)
inherit(P.dg,t)
inherit(P.bZ,t)
inherit(P.m6,t)
inherit(P.c4,t)
inherit(P.aE,t)
inherit(P.bE,t)
inherit(P.c9,t)
inherit(P.jT,t)
inherit(P.ft,t)
inherit(P.lI,t)
inherit(P.iJ,t)
inherit(P.ia,t)
inherit(P.V,t)
inherit(P.bK,t)
inherit(P.cP,t)
inherit(P.cx,t)
inherit(P.D,t)
inherit(P.ee,t)
inherit(W.eE,t)
inherit(W.hY,t)
inherit(W.eb,t)
inherit(W.eU,t)
inherit(W.iG,t)
inherit(P.mv,t)
inherit(P.fL,t)
inherit(P.m2,t)
inherit(P.me,t)
inherit(P.cr,t)
inherit(P.mf,t)
inherit(P.cD,t)
inherit(B.ck,t)
inherit(L.c7,t)
inherit(A.fl,t)
inherit(T.cw,t)
inherit(X.eJ,t)
inherit(X.ez,t)
inherit(M.dK,t)
inherit(N.S,t)
inherit(O.dW,t)
inherit(E.jQ,t)
inherit(E.x,t)
inherit(A.O,t)
inherit(U.b,t)
inherit(Y.cU,t)
inherit(X.r,t)
inherit(G.N,t)
inherit(A.d3,t)
inherit(B.h7,t)
inherit(A.bv,t)
inherit(E.dH,t)
inherit(E.cG,t)
inherit(F.di,t)
inherit(F.dj,t)
inherit(A.fp,t)
inherit(D.cy,t)
inherit(A.fv,t)
inherit(A.ec,t)
inherit(E.aJ,t)
inherit(Q.bO,t)
inherit(Q.e,t)
t=J.H
inherit(J.j7,t)
inherit(J.fc,t)
inherit(J.e1,t)
inherit(J.cL,t)
inherit(J.dh,t)
inherit(J.cM,t)
inherit(H.dl,t)
inherit(H.cQ,t)
inherit(W.dI,t)
inherit(W.d2,t)
inherit(W.eA,t)
inherit(W.eW,t)
inherit(W.y,t)
inherit(W.eG,t)
inherit(W.i1,t)
inherit(W.eX,t)
inherit(W.cI,t)
inherit(W.jM,t)
inherit(W.jN,t)
inherit(W.lz,t)
t=J.e1
inherit(J.jZ,t)
inherit(J.cY,t)
inherit(J.cN,t)
inherit(J.ny,J.cL)
t=J.dh
inherit(J.fb,t)
inherit(J.fa,t)
t=P.C
inherit(H.R,t)
inherit(H.dk,t)
inherit(H.bC,t)
inherit(P.f6,t)
inherit(H.mt,t)
t=H.R
inherit(H.cO,t)
inherit(H.jj,t)
inherit(P.lY,t)
inherit(H.eH,H.dk)
t=P.f9
inherit(H.ff,t)
inherit(H.eh,t)
inherit(Q.lj,t)
t=H.cO
inherit(H.e4,t)
inherit(P.jl,t)
t=H.d4
inherit(H.mX,t)
inherit(H.mY,t)
inherit(H.m1,t)
inherit(H.lF,t)
inherit(H.iV,t)
inherit(H.iW,t)
inherit(H.mb,t)
inherit(H.la,t)
inherit(H.lb,t)
inherit(H.mZ,t)
inherit(H.mP,t)
inherit(H.mQ,t)
inherit(H.mR,t)
inherit(H.mS,t)
inherit(H.mT,t)
inherit(H.l2,t)
inherit(H.j8,t)
inherit(H.mL,t)
inherit(H.mM,t)
inherit(H.mN,t)
inherit(P.lr,t)
inherit(P.lq,t)
inherit(P.ls,t)
inherit(P.lt,t)
inherit(P.mA,t)
inherit(P.mB,t)
inherit(P.mE,t)
inherit(P.lJ,t)
inherit(P.lR,t)
inherit(P.lN,t)
inherit(P.lO,t)
inherit(P.lP,t)
inherit(P.lL,t)
inherit(P.lQ,t)
inherit(P.lK,t)
inherit(P.lU,t)
inherit(P.lV,t)
inherit(P.lT,t)
inherit(P.lS,t)
inherit(P.kT,t)
inherit(P.kU,t)
inherit(P.kV,t)
inherit(P.kW,t)
inherit(P.kR,t)
inherit(P.kS,t)
inherit(P.mq,t)
inherit(P.mp,t)
inherit(P.ly,t)
inherit(P.lx,t)
inherit(P.md,t)
inherit(P.mC,t)
inherit(P.mD,t)
inherit(P.mh,t)
inherit(P.mi,t)
inherit(P.mj,t)
inherit(P.m_,t)
inherit(P.jq,t)
inherit(P.i5,t)
inherit(P.i6,t)
inherit(W.lH,t)
inherit(P.mx,t)
inherit(L.fY,t)
inherit(O.iD,t)
inherit(O.iE,t)
inherit(B.iU,t)
inherit(A.j6,t)
inherit(A.j5,t)
inherit(T.kc,t)
inherit(G.j4,t)
inherit(A.mF,t)
inherit(E.hE,t)
inherit(E.hF,t)
inherit(E.hG,t)
inherit(E.hO,t)
inherit(E.hP,t)
inherit(E.hQ,t)
inherit(E.hR,t)
inherit(E.hS,t)
inherit(E.hT,t)
inherit(E.hU,t)
inherit(E.hV,t)
inherit(E.hH,t)
inherit(E.hI,t)
inherit(E.hJ,t)
inherit(E.hK,t)
inherit(E.hL,t)
inherit(E.hM,t)
inherit(E.hN,t)
inherit(E.hd,t)
inherit(E.he,t)
inherit(E.hf,t)
inherit(E.hg,t)
inherit(E.hr,t)
inherit(E.hx,t)
inherit(E.hy,t)
inherit(E.hz,t)
inherit(E.hA,t)
inherit(E.hB,t)
inherit(E.hC,t)
inherit(E.hD,t)
inherit(E.hh,t)
inherit(E.hi,t)
inherit(E.hj,t)
inherit(E.hk,t)
inherit(E.hl,t)
inherit(E.hm,t)
inherit(E.hn,t)
inherit(E.ho,t)
inherit(E.hp,t)
inherit(E.hq,t)
inherit(E.hs,t)
inherit(E.ht,t)
inherit(E.hu,t)
inherit(E.hv,t)
inherit(E.hw,t)
inherit(E.hb,t)
inherit(E.hc,t)
inherit(D.kP,t)
inherit(A.kG,t)
inherit(A.kH,t)
inherit(A.kI,t)
inherit(A.kJ,t)
inherit(A.kK,t)
inherit(A.kL,t)
inherit(A.kM,t)
inherit(A.kN,t)
inherit(A.kF,t)
inherit(A.kx,t)
inherit(A.ky,t)
inherit(A.kz,t)
inherit(A.kA,t)
inherit(A.kB,t)
inherit(A.kC,t)
inherit(A.kD,t)
inherit(A.kE,t)
inherit(A.kw,t)
inherit(Q.ll,t)
t=H.lw
inherit(H.du,t)
inherit(H.ep,t)
t=P.cF
inherit(H.fk,t)
inherit(H.j9,t)
inherit(H.le,t)
inherit(H.h9,t)
inherit(H.kb,t)
inherit(P.ea,t)
inherit(P.c6,t)
inherit(P.aS,t)
inherit(P.dr,t)
inherit(P.bL,t)
inherit(P.bF,t)
inherit(P.i0,t)
t=H.l2
inherit(H.kO,t)
inherit(H.dF,t)
inherit(H.lo,P.f6)
t=H.cQ
inherit(H.jD,t)
inherit(H.fg,t)
t=H.fg
inherit(H.e6,t)
inherit(H.e7,t)
inherit(H.e8,H.e6)
inherit(H.fh,H.e8)
inherit(H.e9,H.e7)
inherit(H.fi,H.e9)
t=H.fh
inherit(H.jE,t)
inherit(H.jF,t)
t=H.fi
inherit(H.jG,t)
inherit(H.jH,t)
inherit(H.jI,t)
inherit(H.jJ,t)
inherit(H.jK,t)
inherit(H.fj,t)
inherit(H.jL,t)
inherit(P.my,P.lA)
inherit(P.fC,P.mo)
t=P.c2
inherit(P.mr,t)
inherit(P.ek,t)
inherit(W.fG,t)
inherit(P.fD,P.mr)
t=P.bD
inherit(P.fE,t)
inherit(P.el,t)
t=P.fF
inherit(P.ei,t)
inherit(P.lC,t)
inherit(P.fK,P.mc)
inherit(P.m9,P.ek)
inherit(P.mg,P.mz)
inherit(P.fI,H.l)
inherit(P.kk,P.kl)
inherit(P.m0,P.kk)
inherit(P.m4,P.m0)
t=P.bE
inherit(P.u,t)
inherit(P.L,t)
t=P.c6
inherit(P.fq,t)
inherit(P.iS,t)
t=W.dI
inherit(W.cR,t)
inherit(W.eP,t)
inherit(W.jv,t)
inherit(W.fA,t)
inherit(W.mn,t)
t=W.cR
inherit(W.ca,t)
inherit(W.cE,t)
inherit(W.eF,t)
inherit(W.lv,t)
inherit(W.lD,t)
t=W.ca
inherit(W.ab,t)
inherit(P.aR,t)
t=W.ab
inherit(W.fV,t)
inherit(W.fW,t)
inherit(W.h2,t)
inherit(W.h6,t)
inherit(W.h8,t)
inherit(W.i7,t)
inherit(W.iC,t)
inherit(W.eS,t)
inherit(W.iP,t)
inherit(W.iQ,t)
inherit(W.eV,t)
inherit(W.jb,t)
inherit(W.jd,t)
inherit(W.jh,t)
inherit(W.jp,t)
inherit(W.e5,t)
inherit(W.jt,t)
inherit(W.ju,t)
inherit(W.jw,t)
inherit(W.jx,t)
inherit(W.jO,t)
inherit(W.jP,t)
inherit(W.jR,t)
inherit(W.jU,t)
inherit(W.jX,t)
inherit(W.k2,t)
inherit(W.kh,t)
inherit(W.c1,t)
inherit(W.kn,t)
inherit(W.kq,t)
inherit(W.kY,t)
inherit(W.l5,t)
inherit(W.lW,t)
inherit(W.d5,W.eW)
t=W.y
inherit(W.i_,t)
inherit(W.i8,t)
inherit(W.bN,t)
inherit(W.ks,t)
inherit(W.kt,t)
inherit(W.aI,W.d2)
inherit(W.eY,W.eX)
inherit(W.da,W.eY)
inherit(W.az,W.bN)
inherit(W.ej,W.fG)
inherit(W.lG,P.kQ)
inherit(P.mw,P.mv)
inherit(P.cv,P.mf)
t=P.aR
inherit(P.cj,t)
inherit(P.cC,t)
inherit(P.ib,t)
inherit(P.ic,t)
inherit(P.id,t)
inherit(P.ie,t)
inherit(P.ig,t)
inherit(P.ih,t)
inherit(P.ii,t)
inherit(P.ij,t)
inherit(P.ik,t)
inherit(P.il,t)
inherit(P.im,t)
inherit(P.io,t)
inherit(P.ip,t)
inherit(P.iq,t)
inherit(P.ir,t)
inherit(P.is,t)
inherit(P.it,t)
inherit(P.iu,t)
inherit(P.iF,t)
inherit(P.jr,t)
inherit(P.js,t)
inherit(P.jY,t)
inherit(P.ki,t)
inherit(P.kZ,t)
inherit(P.l1,t)
inherit(P.lg,t)
inherit(P.em,t)
inherit(P.mk,t)
inherit(P.ml,t)
inherit(P.mm,t)
t=P.cj
inherit(P.fT,t)
inherit(P.iI,t)
inherit(P.bI,t)
inherit(P.iR,t)
inherit(P.l_,t)
inherit(P.fx,t)
inherit(P.lf,t)
inherit(P.k6,P.bI)
t=P.fx
inherit(P.l6,t)
inherit(P.ef,t)
t=B.ck
inherit(S.fU,t)
inherit(M.h_,t)
inherit(A.hX,t)
inherit(M.hZ,t)
inherit(V.i2,t)
inherit(U.iw,t)
inherit(N.ja,t)
inherit(F.jC,t)
inherit(G.k_,t)
inherit(Q.ka,t)
inherit(N.kp,t)
inherit(D.l3,t)
inherit(V.l4,t)
inherit(F.ln,t)
inherit(A.jW,A.fl)
inherit(L.X,A.jW)
t=T.cw
inherit(O.h0,t)
inherit(Z.h5,t)
inherit(Y.iK,t)
inherit(Y.iL,t)
inherit(B.iN,t)
inherit(S.jc,t)
inherit(Z.jm,t)
inherit(S.jn,t)
inherit(U.jo,t)
inherit(E.jB,t)
inherit(V.jV,t)
inherit(N.k1,t)
inherit(N.k9,t)
inherit(E.kd,t)
inherit(Y.kf,t)
inherit(L.kg,t)
inherit(S.kj,t)
inherit(R.l0,t)
inherit(U.l7,t)
inherit(E.li,t)
inherit(M.lm,t)
t=L.c7
inherit(T.h1,t)
inherit(T.h4,t)
inherit(U.i3,t)
inherit(Z.i4,t)
inherit(L.ix,t)
inherit(O.iH,t)
inherit(T.iM,t)
inherit(X.iO,t)
inherit(Q.je,t)
inherit(K.jf,t)
inherit(G.jg,t)
inherit(L.jy,t)
inherit(V.jz,t)
inherit(S.jA,t)
inherit(E.k4,t)
inherit(L.k5,t)
inherit(Z.k8,t)
inherit(Y.ke,t)
inherit(L.km,t)
inherit(O.ko,t)
inherit(N.kr,t)
inherit(U.ku,t)
inherit(N.l8,t)
inherit(Q.lh,t)
inherit(O.ey,O.dW)
inherit(E.eT,E.jQ)
t=E.x
inherit(E.dE,t)
inherit(E.fZ,t)
inherit(U.M,U.b)
inherit(R.k3,N.S)
t=R.k3
inherit(R.J,t)
inherit(R.G,t)
inherit(R.P,t)
inherit(R.au,R.P)
t=Y.cU
inherit(Y.B,t)
inherit(Y.K,t)
inherit(Y.ap,t)
inherit(Y.ha,t)
inherit(Y.fm,t)
inherit(Y.eR,t)
inherit(Y.fn,t)
t=Y.B
inherit(Y.bj,t)
inherit(Y.at,t)
inherit(G.fu,O.ey)
inherit(G.kv,G.fu)
inherit(G.eD,G.N)
t=Q.bO
inherit(Q.fy,t)
inherit(Q.eg,t)
inherit(Q.lk,Q.fy)
inherit(Q.cZ,Q.eg)
inherit(Q.fz,Q.cZ)
mixin(H.e6,P.bZ)
mixin(H.e8,H.eQ)
mixin(H.e7,P.bZ)
mixin(H.e9,H.eQ)
mixin(P.fC,P.lu)
mixin(W.eW,W.hY)
mixin(W.eX,P.bZ)
mixin(W.eY,W.eU)
mixin(A.fl,P.dg)
mixin(Q.fy,P.bZ)
mixin(Q.eg,P.dg)})();(function constants(){C.o=W.eA.prototype
C.q=W.eP.prototype
C.i=W.eV.prototype
C.x=J.H.prototype
C.a=J.cL.prototype
C.e=J.fa.prototype
C.b=J.fb.prototype
C.y=J.fc.prototype
C.c=J.dh.prototype
C.h=J.cM.prototype
C.F=J.cN.prototype
C.u=J.jZ.prototype
C.n=J.cY.prototype
C.j=new W.eE()
C.v=new P.jT()
C.k=new P.lB()
C.w=new P.m2()
C.f=new P.mg()
C.p=new P.c9(0)
C.z=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.r=function(hooks) { return hooks; }
C.A=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.B=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.C=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.t=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.D=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.E=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.l=new F.di(0,"LogLevel.ERROR")
C.G=new F.di(1,"LogLevel.WARN")
C.d=new F.di(2,"LogLevel.INFO")
C.H=new F.di(3,"LogLevel.VERBOSE")
C.I=H.aD("cD")
C.J=H.aD("uu")
C.m=H.aD("uw")
C.K=H.aD("ux")
C.L=H.aD("uy")
C.M=H.aD("uA")
C.N=H.aD("uB")
C.O=H.aD("uC")
C.P=H.aD("oX")
C.Q=H.aD("bK")
C.R=H.aD("D")
C.S=H.aD("uF")
C.T=H.aD("uG")
C.U=H.aD("uH")
C.V=H.aD("nP")
C.W=H.aD("c4")
C.X=H.aD("u")
C.Y=H.aD("L")
C.Z=H.aD("bE")})();(function staticFields(){$.p_="$cachedFunction"
$.p0="$cachedInvocation"
$.bV=0
$.dG=null
$.od=null
$.o3=null
$.ps=null
$.pC=null
$.mH=null
$.mO=null
$.o4=null
$.dv=null
$.eq=null
$.er=null
$.nZ=!1
$.af=C.f
$.os=0
$.on=null
$.om=null
$.oo=null
$.qm=null
$.qo=null
$.q3=null
$.q4=null
$.q2=null
$.q8=null
$.qe=null
$.qc=null
$.qp=null
$.qg=null
$.q9=null
$.qb=null
$.q5=null
$.qd=null
$.qf=null
$.qh=null
$.qj=null
$.qk=null
$.qi=null
$.qa=null
$.q6=null
$.ql=null
$.q7=null
$.qn=null
$.n6=null
$.Z="accent"
$.a0="aspect1"
$.a_="aspect2"
$.a8="shoe1"
$.a7="shoe2"
$.a2="cloak1"
$.a3="cloak2"
$.a1="cloak3"
$.Y="shirt1"
$.a6="shirt2"
$.a5="pants1"
$.a4="pants2"
$.a9=1300
$.h=3
$.i=2
$.z=1
$.p=0.1
$.qK=null
$.d7=null
$.qI=null
$.dR=null
$.eO=null
$.nc=null
$.qG=null
$.oy=null
$.oD=null
$.iy=null
$.na=null
$.nk=null
$.dP=null
$.ch=null
$.qJ=null
$.nb=null
$.nl=null
$.dT=null
$.eN=null
$.dL=null
$.aY=null
$.bG=null
$.dS=null
$.nj=null
$.aL=null
$.aW=null
$.ov=null
$.iA=null
$.dQ=null
$.eK=null
$.bH=null
$.ci=null
$.iB=null
$.cb=null
$.eM=null
$.aK=null
$.ni=null
$.qH=null
$.ai=null
$.b4=null
$.bm=null
$.aX=null
$.nh=null
$.aP=null
$.ce=null
$.cc=null
$.dO=null
$.cd=null
$.cf=null
$.nd=null
$.d9=null
$.eL=null
$.oz=null
$.ot=null
$.bl=null
$.bn=null
$.ao=null
$.dM=null
$.d8=null
$.oB=null
$.ne=null
$.iz=null
$.ox=null
$.bo=null
$.oC=null
$.ou=null
$.qM=null
$.dN=null
$.bc=null
$.cH=null
$.cg=null
$.dV=null
$.ow=null
$.oA=null
$.qL=null
$.nf=null
$.ng=null
$.dU=null
$.qV=null
$.qO=null
$.qP=null
$.qQ=null
$.qR=null
$.qS=null
$.qT=null
$.qU=null
$.qX=null
$.qY=null
$.qZ=null
$.r_=null
$.r0=null
$.r1=null
$.qW=null
$.j="PLAYER1TAG"
$.cu="PLAYER2TAG"
$.o="DENIZENTAG"
$.m="CONSORTTAG"
$.A="CONSORTSOUNDTAG"
$.ae="MCGUFFINTAG"
$.U="TAGPHYSICALMCGUFFIN"
$.aM="TAGWEAPON"
$.tf=null
$.tq=null
$.ta=null
$.te=null
$.ti=null
$.tm=null
$.tk=null
$.ts=null
$.tr=null
$.tl=null
$.tu=null
$.th=null
$.tt=null
$.to=null
$.tn=null
$.tp=null
$.td=null
$.tc=null
$.nK=null
$.tj=null
$.tg=null
$.tb=null
$.tD=13
$.ac=3
$.aA=2
$.aa=1
$.rn=null
$.j2=null
$.rp=null
$.rD=null
$.rA=null
$.rh=null
$.rz=null
$.rl=null
$.ri=null
$.ry=null
$.rd=null
$.oL=null
$.nn=null
$.al=null
$.rb=null
$.j1=null
$.rw=null
$.oP=null
$.iX=null
$.re=null
$.rm=null
$.ns=null
$.df=null
$.np=null
$.rG=null
$.rF=null
$.rC=null
$.oS=null
$.oJ=null
$.T=null
$.rj=null
$.no=null
$.dc=null
$.oU=null
$.ay=null
$.ax=null
$.e0=null
$.Q=null
$.aj=null
$.f4=null
$.br=null
$.nq=null
$.de=null
$.eZ=null
$.f0=null
$.e_=null
$.iY=null
$.j3=null
$.ak=null
$.dd=null
$.by=null
$.f1=null
$.aZ=null
$.iZ=null
$.f3=null
$.co=null
$.j_=null
$.cJ=null
$.bs=null
$.bp=null
$.j0=null
$.b_=null
$.f_=null
$.cl=null
$.aB=null
$.nu=null
$.b7=null
$.f5=null
$.dZ=null
$.bX=null
$.f2=null
$.b0=null
$.bx=null
$.b1=null
$.aq=null
$.bz=null
$.cK=null
$.bJ=null
$.cm=null
$.aQ=null
$.aF=null
$.I=null
$.E=null
$.aw=null
$.bq=null
$.bt=null
$.cn=null
$.r9=null
$.oT=null
$.rf=null
$.oK=null
$.oM=null
$.rB=null
$.ra=null
$.oQ=null
$.oO=null
$.nw=null
$.nr=null
$.rt=null
$.dY=null
$.rr=null
$.rv=null
$.nv=null
$.ru=null
$.oI=null
$.rE=null
$.oR=null
$.rg=null
$.rk=null
$.rs=null
$.oN=null
$.nt=null
$.rq=null
$.rx=null
$.ro=null
$.rc=null
$.bW=3
$.oh=!1
$.db="OWNER"
$.tC=null
$.cX=null
$.dq=null
$.cW=null
$.bM=null
$.be=null
$.dp=null
$.ed=null
$.fw=null
$.cV=null
$.b2=null})();(function lazyInitializers(){lazy($,"ol","$get$ol",function(){return H.pz("_$dart_dartClosure")})
lazy($,"nA","$get$nA",function(){return H.pz("_$dart_js")})
lazy($,"oG","$get$oG",function(){return H.r7()})
lazy($,"oH","$get$oH",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.os
$.os=t+1
t="expando$key$"+t}return new P.ia(null,t,[P.L])})
lazy($,"p7","$get$p7",function(){return H.c3(H.ld({
toString:function(){return"$receiver$"}}))})
lazy($,"p8","$get$p8",function(){return H.c3(H.ld({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"p9","$get$p9",function(){return H.c3(H.ld(null))})
lazy($,"pa","$get$pa",function(){return H.c3(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"pe","$get$pe",function(){return H.c3(H.ld(void 0))})
lazy($,"pf","$get$pf",function(){return H.c3(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"pc","$get$pc",function(){return H.c3(H.pd(null))})
lazy($,"pb","$get$pb",function(){return H.c3(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"ph","$get$ph",function(){return H.c3(H.pd(void 0))})
lazy($,"pg","$get$pg",function(){return H.c3(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"nS","$get$nS",function(){return P.tH()})
lazy($,"dX","$get$dX",function(){var t,s
t=P.bK
s=new P.aN(0,P.tG(),null,[t])
s.ec(null,t)
return s})
lazy($,"et","$get$et",function(){return[]})
lazy($,"bT","$get$bT",function(){return P.cp(P.L,L.c7)})
lazy($,"bw","$get$bw",function(){return P.cp(P.L,B.ck)})
lazy($,"oW","$get$oW",function(){return H.a([],[A.O])})
lazy($,"c0","$get$c0",function(){return P.cp(P.L,T.cw)})
lazy($,"p5","$get$p5",function(){return H.a([new G.kv(0,H.a([],[P.D]))],[G.fu])})
lazy($,"oV","$get$oV",function(){return P.bB(null,null,null,G.N)})
lazy($,"aO","$get$aO",function(){return F.rK("ColourPicker",!1)})
lazy($,"eB","$get$eB",function(){return P.bB(null,null,null,E.dH)})
lazy($,"oj","$get$oj",function(){return P.t8("Edge\\/\\d+",!0,!1)})
lazy($,"iv","$get$iv",function(){return P.bB(null,null,null,E.cG)})
lazy($,"nF","$get$nF",function(){return A.bk(255,0,255,255)})
lazy($,"nM","$get$nM",function(){return H.a([],[D.cy])})
lazy($,"mV","$get$mV",function(){return A.t3(null)})})()
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
mangledGlobalNames:{L:"int",u:"double",bE:"num",D:"String",c4:"bool",bK:"Null",V:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.c4,args:[[P.V,E.eT]]},{func:1,v:true},{func:1,v:true,args:[P.ar]},{func:1,v:true,opt:[W.y]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,v:true,args:[P.ar],opt:[P.cx]},{func:1,ret:W.ca,args:[P.L]},{func:1,v:true,opt:[P.c4]},{func:1,v:true,args:[,P.cx]},{func:1,v:true,args:[P.D]},{func:1,ret:P.D,args:[P.L]},{func:1,ret:W.aI,args:[P.L]},{func:1,v:true,args:[W.az]},{func:1,v:true,args:[[P.C,E.aJ]]},{func:1,ret:P.L,args:[P.aE,P.aE]}],
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
setOrUpdateInterceptorsByTag({CanvasGradient:J.H,CanvasPattern:J.H,Client:J.H,MediaError:J.H,MediaSession:J.H,PositionError:J.H,PushMessageData:J.H,WindowClient:J.H,SVGAnimatedLength:J.H,SVGAnimatedLengthList:J.H,SVGAnimatedNumber:J.H,SVGAnimatedNumberList:J.H,SVGAnimatedString:J.H,SQLError:J.H,ArrayBuffer:H.dl,ArrayBufferView:H.cQ,DataView:H.jD,Float32Array:H.jE,Float64Array:H.jF,Int16Array:H.jG,Int32Array:H.jH,Int8Array:H.jI,Uint16Array:H.jJ,Uint32Array:H.jK,Uint8ClampedArray:H.fj,CanvasPixelArray:H.fj,Uint8Array:H.jL,HTMLBRElement:W.ab,HTMLBaseElement:W.ab,HTMLContentElement:W.ab,HTMLDListElement:W.ab,HTMLDataListElement:W.ab,HTMLDetailsElement:W.ab,HTMLDialogElement:W.ab,HTMLDivElement:W.ab,HTMLHRElement:W.ab,HTMLHeadElement:W.ab,HTMLHeadingElement:W.ab,HTMLHtmlElement:W.ab,HTMLLabelElement:W.ab,HTMLLegendElement:W.ab,HTMLModElement:W.ab,HTMLOptGroupElement:W.ab,HTMLParagraphElement:W.ab,HTMLPictureElement:W.ab,HTMLPreElement:W.ab,HTMLQuoteElement:W.ab,HTMLShadowElement:W.ab,HTMLSpanElement:W.ab,HTMLTableCaptionElement:W.ab,HTMLTableCellElement:W.ab,HTMLTableDataCellElement:W.ab,HTMLTableHeaderCellElement:W.ab,HTMLTableColElement:W.ab,HTMLTableElement:W.ab,HTMLTableRowElement:W.ab,HTMLTableSectionElement:W.ab,HTMLTemplateElement:W.ab,HTMLTitleElement:W.ab,HTMLTrackElement:W.ab,HTMLUListElement:W.ab,HTMLUnknownElement:W.ab,HTMLDirectoryElement:W.ab,HTMLFontElement:W.ab,HTMLFrameElement:W.ab,HTMLMarqueeElement:W.ab,HTMLElement:W.ab,HTMLAnchorElement:W.fV,HTMLAreaElement:W.fW,Blob:W.d2,HTMLBodyElement:W.h2,HTMLButtonElement:W.h6,HTMLCanvasElement:W.h8,CanvasRenderingContext2D:W.eA,CDATASection:W.cE,CharacterData:W.cE,Comment:W.cE,ProcessingInstruction:W.cE,Text:W.cE,CSSStyleDeclaration:W.d5,MSStyleCSSProperties:W.d5,CSS2Properties:W.d5,CustomEvent:W.i_,DocumentFragment:W.eF,ShadowRoot:W.eF,DOMError:W.eG,FileError:W.eG,DOMException:W.i1,Element:W.ca,HTMLEmbedElement:W.i7,ErrorEvent:W.i8,AnimationEvent:W.y,AnimationPlayerEvent:W.y,ApplicationCacheErrorEvent:W.y,AutocompleteErrorEvent:W.y,BeforeInstallPromptEvent:W.y,BeforeUnloadEvent:W.y,BlobEvent:W.y,ClipboardEvent:W.y,CloseEvent:W.y,DeviceLightEvent:W.y,DeviceMotionEvent:W.y,DeviceOrientationEvent:W.y,ExtendableEvent:W.y,ExtendableMessageEvent:W.y,FetchEvent:W.y,FontFaceSetLoadEvent:W.y,GamepadEvent:W.y,GeofencingEvent:W.y,HashChangeEvent:W.y,InstallEvent:W.y,MediaEncryptedEvent:W.y,MediaKeyMessageEvent:W.y,MediaQueryListEvent:W.y,MediaStreamEvent:W.y,MediaStreamTrackEvent:W.y,MessageEvent:W.y,MIDIConnectionEvent:W.y,MIDIMessageEvent:W.y,NotificationEvent:W.y,PageTransitionEvent:W.y,PopStateEvent:W.y,PresentationConnectionAvailableEvent:W.y,PresentationConnectionCloseEvent:W.y,ProgressEvent:W.y,PromiseRejectionEvent:W.y,PushEvent:W.y,RelatedEvent:W.y,RTCDataChannelEvent:W.y,RTCDTMFToneChangeEvent:W.y,RTCIceCandidateEvent:W.y,RTCPeerConnectionIceEvent:W.y,SecurityPolicyViolationEvent:W.y,ServicePortConnectEvent:W.y,ServiceWorkerMessageEvent:W.y,SpeechRecognitionEvent:W.y,StorageEvent:W.y,SyncEvent:W.y,TrackEvent:W.y,TransitionEvent:W.y,WebKitTransitionEvent:W.y,ResourceProgressEvent:W.y,USBConnectionEvent:W.y,IDBVersionChangeEvent:W.y,AudioProcessingEvent:W.y,OfflineAudioCompletionEvent:W.y,WebGLContextEvent:W.y,Event:W.y,InputEvent:W.y,MediaStream:W.dI,EventTarget:W.dI,HTMLFieldSetElement:W.iC,File:W.aI,FileList:W.da,FileReader:W.eP,HTMLFormElement:W.eS,HTMLIFrameElement:W.iP,ImageData:W.cI,HTMLImageElement:W.iQ,HTMLInputElement:W.eV,HTMLKeygenElement:W.jb,HTMLLIElement:W.jd,HTMLLinkElement:W.jh,HTMLMapElement:W.jp,HTMLAudioElement:W.e5,HTMLMediaElement:W.e5,HTMLVideoElement:W.e5,HTMLMenuElement:W.jt,HTMLMenuItemElement:W.ju,MessagePort:W.jv,HTMLMetaElement:W.jw,HTMLMeterElement:W.jx,MouseEvent:W.az,DragEvent:W.az,PointerEvent:W.az,WheelEvent:W.az,Navigator:W.jM,NavigatorUserMediaError:W.jN,Document:W.cR,HTMLDocument:W.cR,XMLDocument:W.cR,Node:W.cR,HTMLOListElement:W.jO,HTMLObjectElement:W.jP,HTMLOptionElement:W.jR,HTMLOutputElement:W.jU,HTMLParamElement:W.jX,HTMLProgressElement:W.k2,HTMLScriptElement:W.kh,HTMLSelectElement:W.c1,HTMLSlotElement:W.kn,HTMLSourceElement:W.kq,SpeechRecognitionError:W.ks,SpeechSynthesisEvent:W.kt,HTMLStyleElement:W.kY,HTMLTextAreaElement:W.l5,CompositionEvent:W.bN,FocusEvent:W.bN,KeyboardEvent:W.bN,TextEvent:W.bN,TouchEvent:W.bN,SVGZoomEvent:W.bN,UIEvent:W.bN,Window:W.fA,DOMWindow:W.fA,Attr:W.lv,ClientRect:W.lz,DocumentType:W.lD,HTMLFrameSetElement:W.lW,ServiceWorker:W.mn,SVGAElement:P.fT,SVGAnimateElement:P.cC,SVGAnimateMotionElement:P.cC,SVGAnimateTransformElement:P.cC,SVGAnimationElement:P.cC,SVGSetElement:P.cC,SVGFEBlendElement:P.ib,SVGFEColorMatrixElement:P.ic,SVGFEComponentTransferElement:P.id,SVGFECompositeElement:P.ie,SVGFEConvolveMatrixElement:P.ig,SVGFEDiffuseLightingElement:P.ih,SVGFEDisplacementMapElement:P.ii,SVGFEFloodElement:P.ij,SVGFEGaussianBlurElement:P.ik,SVGFEImageElement:P.il,SVGFEMergeElement:P.im,SVGFEMorphologyElement:P.io,SVGFEOffsetElement:P.ip,SVGFEPointLightElement:P.iq,SVGFESpecularLightingElement:P.ir,SVGFESpotLightElement:P.is,SVGFETileElement:P.it,SVGFETurbulenceElement:P.iu,SVGFilterElement:P.iF,SVGForeignObjectElement:P.iI,SVGCircleElement:P.bI,SVGEllipseElement:P.bI,SVGLineElement:P.bI,SVGPathElement:P.bI,SVGPolygonElement:P.bI,SVGPolylineElement:P.bI,SVGGeometryElement:P.bI,SVGClipPathElement:P.cj,SVGDefsElement:P.cj,SVGGElement:P.cj,SVGSwitchElement:P.cj,SVGGraphicsElement:P.cj,SVGImageElement:P.iR,SVGMarkerElement:P.jr,SVGMaskElement:P.js,SVGPatternElement:P.jY,SVGRectElement:P.k6,SVGScriptElement:P.ki,SVGStyleElement:P.kZ,SVGDescElement:P.aR,SVGDiscardElement:P.aR,SVGFEDistantLightElement:P.aR,SVGFEFuncAElement:P.aR,SVGFEFuncBElement:P.aR,SVGFEFuncGElement:P.aR,SVGFEFuncRElement:P.aR,SVGFEMergeNodeElement:P.aR,SVGMetadataElement:P.aR,SVGStopElement:P.aR,SVGTitleElement:P.aR,SVGComponentTransferFunctionElement:P.aR,SVGElement:P.aR,SVGSVGElement:P.l_,SVGSymbolElement:P.l1,SVGTextContentElement:P.fx,SVGTextPathElement:P.l6,SVGTSpanElement:P.ef,SVGTextElement:P.ef,SVGTextPositioningElement:P.ef,SVGUseElement:P.lf,SVGViewElement:P.lg,SVGLinearGradientElement:P.em,SVGRadialGradientElement:P.em,SVGGradientElement:P.em,SVGCursorElement:P.mk,SVGFEDropShadowElement:P.ml,SVGMPathElement:P.mm})
setOrUpdateLeafTags({CanvasGradient:true,CanvasPattern:true,Client:true,MediaError:true,MediaSession:true,PositionError:true,PushMessageData:true,WindowClient:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedString:true,SQLError:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLModElement:true,HTMLOptGroupElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLQuoteElement:true,HTMLShadowElement:true,HTMLSpanElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CustomEvent:true,DocumentFragment:true,ShadowRoot:true,DOMError:true,FileError:true,DOMException:true,Element:false,HTMLEmbedElement:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,MediaStream:true,EventTarget:false,HTMLFieldSetElement:true,File:true,FileList:true,FileReader:true,HTMLFormElement:true,HTMLIFrameElement:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLAudioElement:true,HTMLMediaElement:true,HTMLVideoElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,MessagePort:true,HTMLMetaElement:true,HTMLMeterElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Navigator:true,NavigatorUserMediaError:true,Document:true,HTMLDocument:true,XMLDocument:true,Node:false,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParamElement:true,HTMLProgressElement:true,HTMLScriptElement:true,HTMLSelectElement:true,HTMLSlotElement:true,HTMLSourceElement:true,SpeechRecognitionError:true,SpeechSynthesisEvent:true,HTMLStyleElement:true,HTMLTextAreaElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,SVGZoomEvent:true,UIEvent:false,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DocumentType:true,HTMLFrameSetElement:true,ServiceWorker:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGPatternElement:true,SVGRectElement:true,SVGScriptElement:true,SVGStyleElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGUseElement:true,SVGViewElement:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})
H.fg.$nativeSuperclassTag="ArrayBufferView"
H.e6.$nativeSuperclassTag="ArrayBufferView"
H.e8.$nativeSuperclassTag="ArrayBufferView"
H.fh.$nativeSuperclassTag="ArrayBufferView"
H.e7.$nativeSuperclassTag="ArrayBufferView"
H.e9.$nativeSuperclassTag="ArrayBufferView"
H.fi.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.pE(A.pF(),b)},[])
else (function(b){H.pE(A.pF(),b)})([])})})()
//# sourceMappingURL=stat_data_review.dart.js.map
