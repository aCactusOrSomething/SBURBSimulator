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
a[c]=function(){a[c]=function(){H.qW(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.lP"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.lP"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.lP(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={lv:function lv(a){this.a=a},
dB:function(a,b,c,d){if(!!J.ah(a).$isJ)return new H.ed(a,b,[c,d])
return new H.dA(a,b,[c,d])},
lt:function(){return new P.c9("No element")},
po:function(){return new P.c9("Too many elements")},
pn:function(){return new P.c9("Too few elements")},
f1:function(a,b,c,d){if(c-b<=32)H.q6(a,b,c,d)
else H.q5(a,b,c,d)},
q6:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.b5(a);t<=c;++t){r=s.l(a,t)
q=t
while(!0){if(!(q>b&&J.bj(d.$2(s.l(a,q-1),r),0)))break
p=q-1
s.h(a,q,s.l(a,p))
q=p}s.h(a,q,r)}},
q5:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.b.a1(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.b.a1(a3+a4,2)
p=q-t
o=q+t
n=J.b5(a2)
m=n.l(a2,s)
l=n.l(a2,p)
k=n.l(a2,q)
j=n.l(a2,o)
i=n.l(a2,r)
if(J.bj(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.bj(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.bj(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.bj(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.bj(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.bj(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.bj(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.bj(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.bj(a5.$2(j,i),0)){h=i
i=j
j=h}n.h(a2,s,m)
n.h(a2,q,k)
n.h(a2,r,i)
n.h(a2,p,n.l(a2,a3))
n.h(a2,o,n.l(a2,a4))
g=a3+1
f=a4-1
if(J.aL(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=n.l(a2,e)
c=a5.$2(d,l)
b=J.ah(c)
if(b.I(c,0))continue
if(b.aE(c,0)){if(e!==g){n.h(a2,e,n.l(a2,g))
n.h(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.l(a2,f),l)
b=J.e1(c)
if(b.aD(c,0)){--f
continue}else{a=f-1
if(b.aE(c,0)){n.h(a2,e,n.l(a2,g))
a0=g+1
n.h(a2,g,n.l(a2,f))
n.h(a2,f,d)
f=a
g=a0
break}else{n.h(a2,e,n.l(a2,f))
n.h(a2,f,d)
f=a
break}}}}a1=!0}else{for(e=g;e<=f;++e){d=n.l(a2,e)
if(J.fn(a5.$2(d,l),0)){if(e!==g){n.h(a2,e,n.l(a2,g))
n.h(a2,g,d)}++g}else if(J.bj(a5.$2(d,j),0))for(;!0;)if(J.bj(a5.$2(n.l(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.fn(a5.$2(n.l(a2,f),l),0)){n.h(a2,e,n.l(a2,g))
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
H.f1(a2,a3,g-2,a5)
H.f1(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.aL(a5.$2(n.l(a2,g),l),0);)++g
for(;J.aL(a5.$2(n.l(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.l(a2,e)
if(J.aL(a5.$2(d,l),0)){if(e!==g){n.h(a2,e,n.l(a2,g))
n.h(a2,g,d)}++g}else if(J.aL(a5.$2(d,j),0))for(;!0;)if(J.aL(a5.$2(n.l(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.fn(a5.$2(n.l(a2,f),l),0)){n.h(a2,e,n.l(a2,g))
a0=g+1
n.h(a2,g,n.l(a2,f))
n.h(a2,f,d)
g=a0}else{n.h(a2,e,n.l(a2,f))
n.h(a2,f,d)}f=a
break}}H.f1(a2,g,f,a5)}else H.f1(a2,g,f,a5)},
J:function J(){},
cp:function cp(){},
eK:function eK(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
dA:function dA(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
ed:function ed(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eL:function eL(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
cW:function cW(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
bB:function bB(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
f8:function f8(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
ek:function ek(){},
fi:function(a,b){var t=a.aT(b)
if(!u.globalState.d.cy)u.globalState.f.b0()
return t},
nv:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.ah(s).$isO)throw H.z(P.m2("Arguments to main must be a List: "+H.q(s)))
u.globalState=new H.kg(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$mw()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.jS(P.lz(null,H.cC),0)
r=P.N
s.z=new H.l(0,null,null,null,null,null,0,[r,H.d1])
s.ch=new H.l(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.kf()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.oL,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.qo)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.bh(null,null,null,r)
p=new H.cZ(0,null,!1)
o=new H.d1(s,new H.l(0,null,null,null,null,null,0,[r,H.cZ]),q,u.createNewIsolate(),p,new H.bI(H.kZ()),new H.bI(H.kZ()),!1,!1,[],P.bh(null,null,null,null),null,null,!1,!0,P.bh(null,null,null,null))
q.j(0,0)
o.bY(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.d5(a,{func:1,args:[,]}))o.aT(new H.l_(t,a))
else if(H.d5(a,{func:1,args:[,,]}))o.aT(new H.l0(t,a))
else o.aT(a)
u.globalState.f.b0()},
qo:function(a){var t=P.dz(["command","print","msg",a])
return new H.bD(!0,P.dU(null,P.N)).ac(t)},
oN:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.oO()
return},
oO:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.z(new P.aU("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.z(new P.aU('Cannot extract URI from "'+t+'"'))},
oL:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.cB(!0,[]).au(b.data)
s=J.b5(t)
switch(s.l(t,"command")){case"start":u.globalState.b=s.l(t,"id")
r=s.l(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.l(t,"args")
o=new H.cB(!0,[]).au(s.l(t,"msg"))
n=s.l(t,"isSpawnUri")
m=s.l(t,"startPaused")
l=new H.cB(!0,[]).au(s.l(t,"replyTo"))
s=u.globalState.a++
k=P.N
j=P.bh(null,null,null,k)
i=new H.cZ(0,null,!1)
h=new H.d1(s,new H.l(0,null,null,null,null,null,0,[k,H.cZ]),j,u.createNewIsolate(),i,new H.bI(H.kZ()),new H.bI(H.kZ()),!1,!1,[],P.bh(null,null,null,null),null,null,!1,!0,P.bh(null,null,null,null))
j.j(0,0)
h.bY(0,i)
u.globalState.f.a.ar(new H.cC(h,new H.hw(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.b0()
break
case"spawn-worker":break
case"message":if(s.l(t,"port")!=null)J.da(s.l(t,"port"),s.l(t,"msg"))
u.globalState.f.b0()
break
case"close":u.globalState.ch.aa(0,$.$get$mx().l(0,a))
a.terminate()
u.globalState.f.b0()
break
case"log":H.oK(s.l(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.dz(["command","print","msg",t])
k=new H.bD(!0,P.dU(null,P.N)).ac(k)
s.toString
self.postMessage(k)}else P.kY(s.l(t,"msg"))
break
case"error":throw H.z(s.l(t,"msg"))}},
oK:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.dz(["command","log","msg",a])
r=new H.bD(!0,P.dU(null,P.N)).ac(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.aW(q)
t=H.bt(q)
s=P.fT(t)
throw H.z(s)}},
oM:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.mQ=$.mQ+("_"+s)
$.mR=$.mR+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.da(f,["spawned",new H.d2(s,r),q,t.r])
r=new H.hx(a,b,c,d,t)
if(e===!0){t.cp(q,q)
u.globalState.f.a.ar(new H.cC(t,r,"start isolate"))}else r.$0()},
qb:function(a,b){var t=new H.jo(!0,!1,null)
t.df(a,b)
return t},
qr:function(a){return new H.cB(!0,[]).au(new H.bD(!1,P.dU(null,P.N)).ac(a))},
l_:function l_(a,b){this.a=a
this.b=b},
l0:function l0(a,b){this.a=a
this.b=b},
kg:function kg(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
_.a=a
_.b=b
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
d1:function d1(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx){var _=this
_.a=a
_.b=b
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
kb:function kb(a,b){this.a=a
this.b=b},
jS:function jS(a,b){this.a=a
this.b=b},
jT:function jT(a){this.a=a},
cC:function cC(a,b,c){this.a=a
this.b=b
this.c=c},
kf:function kf(){},
hw:function hw(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hx:function hx(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jI:function jI(){},
d2:function d2(b,a){this.b=b
this.a=a},
ki:function ki(a,b){this.a=a
this.b=b},
dX:function dX(b,c,a){this.b=b
this.c=c
this.a=a},
cZ:function cZ(a,b,c){this.a=a
this.b=b
this.c=c},
jo:function jo(a,b,c){this.a=a
this.b=b
this.c=c},
jp:function jp(a,b){this.a=a
this.b=b},
jq:function jq(a,b){this.a=a
this.b=b},
bI:function bI(a){this.a=a},
bD:function bD(a,b){this.a=a
this.b=b},
cB:function cB(a,b){this.a=a
this.b=b},
qI:function(a){return u.types[a]},
qP:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.ah(a).$isbp},
q:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aH(a)
if(typeof t!=="string")throw H.z(H.bE(a))
return t},
pH:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.iK(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
cq:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
mP:function(a,b){return b.$1(a)},
pq:function(a,b,c){var t,s,r,q,p,o
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.mP(a,c)
if(3>=t.length)return H.S(t,3)
s=t[3]
if(b<2||b>36)throw H.z(P.c7(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.e.c_(q,o)|32)>r)return H.mP(a,c)}return parseInt(a,b)},
mS:function(a){var t,s,r,q,p,o,n,m
t=J.ah(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.v||!!J.ah(a).$iscz){p=C.p(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.e.c_(q,0)===36)q=C.e.bl(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.lV(H.fm(a),0,null),u.mangledGlobalNames)},
iD:function(a){return"Instance of '"+H.mS(a)+"'"},
lB:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.z(H.bE(a))
return a[b]},
mT:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.z(H.bE(a))
a[b]=c},
d6:function(a){throw H.z(H.bE(a))},
S:function(a,b){if(a==null)J.d8(a)
throw H.z(H.aC(a,b))},
aC:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.bH(!0,b,"index",null)
t=J.d8(a)
if(!(b<0)){if(typeof t!=="number")return H.d6(t)
s=b>=t}else s=!0
if(s)return P.ep(b,a,"index",null,t)
return P.iJ(b,"index",null)},
bE:function(a){return new P.bH(!0,a,null,null)},
z:function(a){var t
if(a==null)a=new P.eT()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.nx})
t.name=""}else t.toString=H.nx
return t},
nx:function(){return J.aH(this.dartException)},
az:function(a){throw H.z(a)},
cF:function(a){throw H.z(new P.bl(a))},
bM:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.jr(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
js:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
n5:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
lx:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.hN(a,s,t?null:b.receiver)},
aW:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.l2(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.cl(r,16)&8191)===10)switch(q){case 438:return t.$1(H.lx(H.q(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.q(s)+" (Error "+q+")"
return t.$1(new H.eS(p,null))}}if(a instanceof TypeError){o=$.$get$n_()
n=$.$get$n0()
m=$.$get$n1()
l=$.$get$n2()
k=$.$get$n6()
j=$.$get$n7()
i=$.$get$n4()
$.$get$n3()
h=$.$get$n9()
g=$.$get$n8()
f=o.ak(s)
if(f!=null)return t.$1(H.lx(s,f))
else{f=n.ak(s)
if(f!=null){f.method="call"
return t.$1(H.lx(s,f))}else{f=m.ak(s)
if(f==null){f=l.ak(s)
if(f==null){f=k.ak(s)
if(f==null){f=j.ak(s)
if(f==null){f=i.ak(s)
if(f==null){f=l.ak(s)
if(f==null){f=h.ak(s)
if(f==null){f=g.ak(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.eS(s,f==null?null:f.method))}}return t.$1(new H.jt(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.f3()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.bH(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.f3()
return a},
bt:function(a){var t
if(a==null)return new H.fg(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.fg(a,null)},
qT:function(a){if(a==null||typeof a!='object')return J.bG(a)
else return H.cq(a)},
qG:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.h(0,a[s],a[r])}return b},
qO:function(a,b,c,d,e,f,g){switch(c){case 0:return H.fi(b,new H.kP(a))
case 1:return H.fi(b,new H.kQ(a,d))
case 2:return H.fi(b,new H.kR(a,d,e))
case 3:return H.fi(b,new H.kS(a,d,e,f))
case 4:return H.fi(b,new H.kT(a,d,e,f,g))}throw H.z(P.fT("Unsupported number of arguments for wrapped closure"))},
e0:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.qO)
a.$identity=t
return t},
oe:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.ah(c).$isO){t.$reflectionInfo=c
r=H.pH(t).r}else r=c
q=d?Object.create(new H.j5().constructor.prototype):Object.create(new H.db(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.bJ
$.bJ=J.d7(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.m5(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.qI,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.m4:H.l4
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.z("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.m5(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
ob:function(a,b,c,d){var t=H.l4
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
m5:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.od(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.ob(s,!q,t,b)
if(s===0){q=$.bJ
$.bJ=J.d7(q,1)
o="self"+H.q(q)
q="return function(){var "+o+" = this."
p=$.dc
if(p==null){p=H.fC("self")
$.dc=p}return new Function(q+H.q(p)+";return "+o+"."+H.q(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.bJ
$.bJ=J.d7(q,1)
n+=H.q(q)
q="return function("+n+"){return this."
p=$.dc
if(p==null){p=H.fC("self")
$.dc=p}return new Function(q+H.q(p)+"."+H.q(t)+"("+n+");}")()},
oc:function(a,b,c,d){var t,s
t=H.l4
s=H.m4
switch(b?-1:a){case 0:throw H.z(new H.iP("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
od:function(a,b){var t,s,r,q,p,o,n,m
t=H.oa()
s=$.m3
if(s==null){s=H.fC("receiver")
$.m3=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.oc(q,!o,r,b)
if(q===1){s="return function(){return this."+H.q(t)+"."+H.q(r)+"(this."+H.q(s)+");"
o=$.bJ
$.bJ=J.d7(o,1)
return new Function(s+H.q(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.q(t)+"."+H.q(r)+"(this."+H.q(s)+", "+m+");"
o=$.bJ
$.bJ=J.d7(o,1)
return new Function(s+H.q(o)+"}")()},
lP:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.ah(c).$isO){c.fixed$length=Array
t=c}else t=c
return H.oe(a,b,t,!!d,e,f)},
l4:function(a){return a.a},
m4:function(a){return a.c},
oa:function(){var t=$.dc
if(t==null){t=H.fC("self")
$.dc=t}return t},
fC:function(a){var t,s,r,q,p
t=new H.db("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
np:function(a){var t=J.ah(a)
return"$S" in t?t.$S():null},
d5:function(a,b){var t
if(a==null)return!1
t=H.np(a)
return t==null?!1:H.lU(t,b)},
qW:function(a){throw H.z(new P.fK(a))},
kZ:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
nq:function(a){return u.getIsolateTag(a)},
ay:function(a){return new H.cd(a,null)},
a:function(a,b){a.$ti=b
return a},
fm:function(a){if(a==null)return
return a.$ti},
nr:function(a,b){return H.lX(a["$as"+H.q(b)],H.fm(a))},
aj:function(a,b,c){var t=H.nr(a,b)
return t==null?null:t[c]},
A:function(a,b){var t=H.fm(a)
return t==null?null:t[b]},
bF:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.lV(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.q(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.bF(t,b)
return H.qs(a,b)}return"unknown-reified-type"},
qs:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.bF(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.bF(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.bF(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.qF(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.bF(l[j],b)+(" "+H.q(j))}q+="}"}return"("+q+") => "+t},
lV:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.dM("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.N=p+", "
o=a[s]
if(o!=null)q=!1
p=t.N+=H.bF(o,c)}return q?"":"<"+t.n(0)+">"},
kK:function(a){var t,s
if(a instanceof H.cK){t=H.np(a)
if(t!=null)return H.bF(t,null)}s=J.ah(a).constructor.builtin$cls
if(a==null)return s
return s+H.lV(a.$ti,0,null)},
lX:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
fk:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.fm(a)
s=J.ah(a)
if(s[b]==null)return!1
return H.nn(H.lX(s[d],t),c)},
nn:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.b6(a[s],b[s]))return!1
return!0},
lQ:function(a,b,c){return a.apply(b,H.nr(b,c))},
qD:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="ap"||b.builtin$cls==="by"
if(b==null)return!0
t=H.fm(a)
a=J.ah(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.lU(r.apply(a,null),b)}return H.b6(s,b)},
b6:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="by")return!0
if('func' in b)return H.lU(a,b)
if('func' in a)return b.builtin$cls==="r1"||b.builtin$cls==="ap"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.bF(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.nn(H.lX(o,t),r)},
nm:function(a,b,c){var t,s,r,q,p
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
s=a.length
r=b.length
if(c){if(s<r)return!1}else if(s!==r)return!1
for(q=0;q<r;++q){t=a[q]
p=b[q]
if(!(H.b6(t,p)||H.b6(p,t)))return!1}return!0},
qy:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.b6(p,o)||H.b6(o,p)))return!1}return!0},
lU:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.b6(t,s)||H.b6(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.nm(r,q,!1))return!1
if(!H.nm(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.b6(i,h)||H.b6(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.b6(i,h)||H.b6(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.b6(i,h)||H.b6(h,i)))return!1}}return H.qy(a.named,b.named)},
rb:function(a){var t=$.lS
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
ra:function(a){return H.cq(a)},
r9:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qQ:function(a){var t,s,r,q,p,o
t=$.lS.$1(a)
s=$.kH[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.kO[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.nl.$2(a,t)
if(t!=null){s=$.kH[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.kO[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.lW(r)
$.kH[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.kO[t]=r
return r}if(p==="-"){o=H.lW(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.ns(a,r)
if(p==="*")throw H.z(new P.f5(t))
if(u.leafTags[t]===true){o=H.lW(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.ns(a,r)},
ns:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.kX(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
lW:function(a){return J.kX(a,!1,null,!!a.$isbp)},
qS:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.kX(t,!1,null,!!t.$isbp)
else return J.kX(t,c,null,null)},
qM:function(){if(!0===$.lT)return
$.lT=!0
H.qN()},
qN:function(){var t,s,r,q,p,o,n,m
$.kH=Object.create(null)
$.kO=Object.create(null)
H.qL()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.nt.$1(p)
if(o!=null){n=H.qS(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
qL:function(){var t,s,r,q,p,o,n
t=C.x()
t=H.d4(C.y,H.d4(C.z,H.d4(C.o,H.d4(C.o,H.d4(C.B,H.d4(C.A,H.d4(C.C(C.p),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.lS=new H.kL(p)
$.nl=new H.kM(o)
$.nt=new H.kN(n)},
d4:function(a,b){return a(b)||b},
qV:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
iK:function iK(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
jr:function jr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eS:function eS(a,b){this.a=a
this.b=b},
hN:function hN(a,b,c){this.a=a
this.b=b
this.c=c},
jt:function jt(a){this.a=a},
l2:function l2(a){this.a=a},
fg:function fg(a,b){this.a=a
this.b=b},
kP:function kP(a){this.a=a},
kQ:function kQ(a,b){this.a=a
this.b=b},
kR:function kR(a,b,c){this.a=a
this.b=b
this.c=c},
kS:function kS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kT:function kT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cK:function cK(){},
jh:function jh(){},
j5:function j5(){},
db:function db(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iP:function iP(a){this.a=a},
cd:function cd(a,b){this.a=a
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
hM:function hM(a){this.a=a},
hV:function hV(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
hW:function hW(a,$ti){this.a=a
this.$ti=$ti},
hX:function hX(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
kL:function kL(a){this.a=a},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a},
dE:function dE(){},
cX:function cX(){},
ie:function ie(){},
eM:function eM(){},
eN:function eN(){},
dF:function dF(){},
dH:function dH(){},
eO:function eO(){},
dG:function dG(){},
dI:function dI(){},
ig:function ig(){},
ih:function ih(){},
ii:function ii(){},
ij:function ij(){},
ik:function ik(){},
il:function il(){},
im:function im(){},
eP:function eP(){},
io:function io(){},
qF:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
qU:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ah:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eG.prototype
return J.hL.prototype}if(typeof a=="string")return J.cn.prototype
if(a==null)return J.eH.prototype
if(typeof a=="boolean")return J.hK.prototype
if(a.constructor==Array)return J.cm.prototype
if(typeof a!="object"){if(typeof a=="function")return J.co.prototype
return a}if(a instanceof P.ap)return a
return J.kJ(a)},
kX:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kJ:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.lT==null){H.qM()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.z(new P.f5("Return interceptor for "+H.q(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$lw()]
if(p!=null)return p
p=H.qQ(a)
if(p!=null)return p
if(typeof a=="function")return C.D
s=Object.getPrototypeOf(a)
if(s==null)return C.q
if(s===Object.prototype)return C.q
if(typeof q=="function"){Object.defineProperty(q,$.$get$lw(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
b5:function(a){if(typeof a=="string")return J.cn.prototype
if(a==null)return a
if(a.constructor==Array)return J.cm.prototype
if(typeof a!="object"){if(typeof a=="function")return J.co.prototype
return a}if(a instanceof P.ap)return a
return J.kJ(a)},
fl:function(a){if(a==null)return a
if(a.constructor==Array)return J.cm.prototype
if(typeof a!="object"){if(typeof a=="function")return J.co.prototype
return a}if(a instanceof P.ap)return a
return J.kJ(a)},
e1:function(a){if(typeof a=="number")return J.cV.prototype
if(a==null)return a
if(!(a instanceof P.ap))return J.cz.prototype
return a},
kI:function(a){if(typeof a=="number")return J.cV.prototype
if(typeof a=="string")return J.cn.prototype
if(a==null)return a
if(!(a instanceof P.ap))return J.cz.prototype
return a},
qH:function(a){if(typeof a=="string")return J.cn.prototype
if(a==null)return a
if(!(a instanceof P.ap))return J.cz.prototype
return a},
aV:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.co.prototype
return a}if(a instanceof P.ap)return a
return J.kJ(a)},
d7:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kI(a).ap(a,b)},
aL:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ah(a).I(a,b)},
bj:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.e1(a).aD(a,b)},
fn:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.e1(a).aE(a,b)},
lY:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kI(a).aq(a,b)},
lZ:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.qP(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b5(a).l(a,b)},
ny:function(a,b,c,d){return J.aV(a).dr(a,b,c,d)},
nz:function(a,b,c,d){return J.aV(a).dP(a,b,c,d)},
nA:function(a,b,c){return J.e1(a).P(a,b,c)},
fo:function(a,b){return J.kI(a).at(a,b)},
fp:function(a,b,c){return J.b5(a).e2(a,b,c)},
nB:function(a,b){return J.fl(a).an(a,b)},
fq:function(a){return J.e1(a).aU(a)},
m_:function(a){return J.aV(a).gdZ(a)},
e2:function(a){return J.aV(a).gay(a)},
bG:function(a){return J.ah(a).gX(a)},
l3:function(a){return J.aV(a).gaY(a)},
bk:function(a){return J.fl(a).gO(a)},
d8:function(a){return J.b5(a).gw(a)},
d9:function(a){return J.aV(a).gG(a)},
nC:function(a){return J.aV(a).geu(a)},
nD:function(a){return J.aV(a).gew(a)},
nE:function(a){return J.aV(a).geA(a)},
m0:function(a){return J.ah(a).gW(a)},
nF:function(a){return J.aV(a).geH(a)},
m1:function(a,b){return J.fl(a).ag(a,b)},
nG:function(a){return J.fl(a).eC(a)},
da:function(a,b){return J.aV(a).bj(a,b)},
nH:function(a,b){return J.aV(a).sbe(a,b)},
nI:function(a){return J.fl(a).ah(a)},
nJ:function(a){return J.qH(a).eJ(a)},
aH:function(a){return J.ah(a).n(a)},
I:function I(){},
hK:function hK(){},
eH:function eH(){},
dy:function dy(){},
iB:function iB(){},
cz:function cz(){},
co:function co(){},
cm:function cm($ti){this.$ti=$ti},
lu:function lu($ti){this.$ti=$ti},
fw:function fw(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
cV:function cV(){},
eG:function eG(){},
hL:function hL(){},
cn:function cn(){}},P={
qe:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.qz()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.e0(new P.jE(t),1)).observe(s,{childList:true})
return new P.jD(t,s,r)}else if(self.setImmediate!=null)return P.qA()
return P.qB()},
qf:function(a){++u.globalState.f.b
self.scheduleImmediate(H.e0(new P.jF(a),0))},
qg:function(a){++u.globalState.f.b
self.setImmediate(H.e0(new P.jG(a),0))},
qh:function(a){P.lF(C.n,a)},
ng:function(a,b){if(H.d5(a,{func:1,args:[P.by,P.by]})){b.toString
return a}else{b.toString
return a}},
qj:function(a,b){var t,s,r
b.a=1
try{a.cK(new P.jZ(b),new P.k_(b))}catch(r){t=H.aW(r)
s=H.bt(r)
P.nu(new P.k0(b,t,s))}},
nb:function(a,b){var t,s,r
for(;a.gdL();)a=a.c
t=a.gbx()
s=b.c
if(t){b.c=null
r=b.ba(s)
b.a=a.a
b.c=a.c
P.dR(b,r)}else{b.a=2
b.c=a
a.ce(s)}},
dR:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.e2(p)
n=p.gax()
s.toString
P.fj(null,null,s,o,n)}return}for(;b.gbA()!=null;b=m){m=b.a
b.a=null
P.dR(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.gcz()||b.gcw()){k=b.gdW()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.e2(p)
n=p.gax()
s.toString
P.fj(null,null,s,o,n)
return}j=$.al
if(j==null?k!=null:j!==k)$.al=k
else j=null
if(b.gcw())new P.k4(t,r,q,b).$0()
else if(s){if(b.gcz())new P.k3(r,b,l).$0()}else if(b.gek())new P.k2(t,r,b).$0()
if(j!=null)$.al=j
s=r.b
if(!!J.ah(s).$isdt){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.ba(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.nb(s,i)
return}}i=b.b
b=i.bC()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
qu:function(){var t,s
for(;t=$.d3,t!=null;){$.dZ=null
s=t.b
$.d3=s
if(s==null)$.dY=null
t.a.$0()}},
qw:function(){$.lN=!0
try{P.qu()}finally{$.dZ=null
$.lN=!1
if($.d3!=null)$.$get$lI().$1(P.no())}},
nk:function(a){var t=new P.fb(a,null)
if($.d3==null){$.dY=t
$.d3=t
if(!$.lN)$.$get$lI().$1(P.no())}else{$.dY.b=t
$.dY=t}},
qv:function(a){var t,s,r
t=$.d3
if(t==null){P.nk(a)
$.dZ=$.dY
return}s=new P.fb(a,null)
r=$.dZ
if(r==null){s.b=t
$.dZ=s
$.d3=s}else{s.b=r.b
r.b=s
$.dZ=s
if(s.b==null)$.dY=s}},
nu:function(a){var t=$.al
if(C.c===t){P.kE(null,null,C.c,a)
return}t.toString
P.kE(null,null,t,t.bF(a,!0))},
qi:function(a,b,c,d,e,f,g){var t,s
t=$.al
s=e?1:0
s=new P.dQ(a,null,null,null,null,t,s,null,null,[f,g])
s.dh(b,c,d,e,g)
s.dj(a,b,c,d,e,f,g)
return s},
qq:function(a,b,c){$.al.toString
a.b2(b,c)},
qc:function(a,b){var t=$.al
if(t===C.c){t.toString
return P.lF(a,b)}return P.lF(a,t.bF(b,!0))},
lF:function(a,b){var t=C.b.a1(a.a,1000)
return H.qb(t<0?0:t,b)},
qd:function(){return $.al},
fj:function(a,b,c,d,e){var t={}
t.a=d
P.qv(new P.kD(t,e))},
nh:function(a,b,c,d){var t,s
s=$.al
if(s===c)return d.$0()
$.al=c
t=s
try{s=d.$0()
return s}finally{$.al=t}},
nj:function(a,b,c,d,e){var t,s
s=$.al
if(s===c)return d.$1(e)
$.al=c
t=s
try{s=d.$1(e)
return s}finally{$.al=t}},
ni:function(a,b,c,d,e,f){var t,s
s=$.al
if(s===c)return d.$2(e,f)
$.al=c
t=s
try{s=d.$2(e,f)
return s}finally{$.al=t}},
kE:function(a,b,c,d){var t=C.c!==c
if(t)d=c.bF(d,!(!t||!1))
P.nk(d)},
jE:function jE(a){this.a=a},
jD:function jD(a,b,c){this.a=a
this.b=b
this.c=c},
jF:function jF(a){this.a=a},
jG:function jG(a){this.a=a},
fd:function fd(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
bC:function bC(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
jY:function jY(a,b){this.a=a
this.b=b},
k1:function k1(a,b){this.a=a
this.b=b},
jZ:function jZ(a){this.a=a},
k_:function k_(a){this.a=a},
k0:function k0(a,b,c){this.a=a
this.b=b
this.c=c},
k4:function k4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k5:function k5(a){this.a=a},
k3:function k3(a,b,c){this.a=a
this.b=b
this.c=c},
k2:function k2(a,b,c){this.a=a
this.b=b
this.c=c},
fb:function fb(a,b){this.a=a
this.b=b},
cx:function cx(){},
j8:function j8(a){this.a=a},
j9:function j9(a,b){this.a=a
this.b=b},
ja:function ja(a,b){this.a=a
this.b=b},
jb:function jb(a,b){this.a=a
this.b=b},
j7:function j7(){},
bs:function bs(){},
jK:function jK(a,b,c){this.a=a
this.b=b
this.c=c},
jJ:function jJ(a){this.a=a},
fc:function fc(){},
jM:function jM(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
jO:function jO(b,c,a){this.b=b
this.c=c
this.a=a},
jN:function jN(){},
kj:function kj(){},
kk:function kk(a,b){this.a=a
this.b=b},
kx:function kx(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
dP:function dP(){},
dQ:function dQ(x,y,a,b,c,d,e,f,r,$ti){var _=this
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
kh:function kh(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
cI:function cI(a,b){this.a=a
this.b=b},
kC:function kC(){},
kD:function kD(a,b){this.a=a
this.b=b},
km:function km(){},
kn:function kn(a,b){this.a=a
this.b=b},
ko:function ko(a,b){this.a=a
this.b=b},
kp:function kp(a,b){this.a=a
this.b=b},
qk:function(a,b){var t=a[b]
return t===a?null:t},
lL:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
lK:function(){var t=Object.create(null)
P.lL(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
ly:function(a,b){return new H.l(0,null,null,null,null,null,0,[a,b])},
mO:function(){return new H.l(0,null,null,null,null,null,0,[null,null])},
dz:function(a){return H.qG(a,new H.l(0,null,null,null,null,null,0,[null,null]))},
dU:function(a,b){return new P.ff(0,null,null,null,null,null,0,[a,b])},
qn:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
k:function(a,b,c,d,e){return new P.k7(0,null,null,null,null,[d,e])},
hJ:function(a,b,c){var t,s
if(P.lO(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$e_()
s.push(a)
try{P.qt(a,t)}finally{if(0>=s.length)return H.S(s,-1)
s.pop()}s=P.mZ(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eE:function(a,b,c){var t,s,r
if(P.lO(a))return b+"..."+c
t=new P.dM(b)
s=$.$get$e_()
s.push(a)
try{r=t
r.N=P.mZ(r.gN(),a,", ")}finally{if(0>=s.length)return H.S(s,-1)
s.pop()}s=t
s.N=s.gN()+c
s=t.gN()
return s.charCodeAt(0)==0?s:s},
lO:function(a){var t,s
for(t=0;s=$.$get$e_(),t<s.length;++t)if(a===s[t])return!0
return!1},
qt:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.bk(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.E())return
q=H.q(t.gH())
b.push(q)
s+=q.length+2;++r}if(!t.E()){if(r<=5)return
if(0>=b.length)return H.S(b,-1)
p=b.pop()
if(0>=b.length)return H.S(b,-1)
o=b.pop()}else{n=t.gH();++r
if(!t.E()){if(r<=4){b.push(H.q(n))
return}p=H.q(n)
if(0>=b.length)return H.S(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gH();++r
for(;t.E();n=m,m=l){l=t.gH();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.S(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.q(n)
p=H.q(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.S(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
bh:function(a,b,c,d){return new P.kc(0,null,null,null,null,null,0,[d])},
eI:function(a,b){var t,s
t=P.bh(null,null,null,b)
for(s=J.bk(a);s.E();)t.j(0,s.gH())
return t},
pp:function(a){var t,s,r
t={}
if(P.lO(a))return"{...}"
s=new P.dM("")
try{$.$get$e_().push(a)
r=s
r.N=r.gN()+"{"
t.a=!0
a.cv(0,new P.i3(t,s))
t=s
t.N=t.gN()+"}"}finally{t=$.$get$e_()
if(0>=t.length)return H.S(t,-1)
t.pop()}t=s.gN()
return t.charCodeAt(0)==0?t:t},
lz:function(a,b){var t=new P.hY(null,0,0,0,[b])
t.de(a,b)
return t},
k7:function k7(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
k9:function k9(a){this.a=a},
k8:function k8(a,$ti){this.a=a
this.$ti=$ti},
fe:function fe(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
ff:function ff(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
kc:function kc(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
kd:function kd(a,b,c){this.a=a
this.b=b
this.c=c},
cE:function cE(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
ka:function ka(){},
cU:function cU(){},
eJ:function eJ(){},
dJ:function dJ(){},
bq:function bq(){},
i3:function i3(a,b){this.a=a
this.b=b},
hY:function hY(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
ke:function ke(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
iX:function iX(){},
iW:function iW(){},
mZ:function(a,b,c){var t=J.bk(b)
if(!t.E())return a
if(c.length===0){do a+=H.q(t.gH())
while(t.E())}else{a+=H.q(t.gH())
for(;t.E();)a=a+c+H.q(t.gH())}return a},
oh:function(a,b){return J.fo(a,b)},
mi:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aH(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ol(a)},
ol:function(a){var t=J.ah(a)
if(!!t.$iscK)return t.n(a)
return H.iD(a)},
m2:function(a){return new P.bH(!1,null,null,a)},
fv:function(a,b,c){return new P.bH(!0,a,b,c)},
iJ:function(a,b,c){return new P.eY(null,null,!0,a,b,"Value not in range")},
c7:function(a,b,c,d,e){return new P.eY(b,c,!0,a,d,"Invalid value")},
mW:function(a,b,c,d,e,f){if(0>a||a>c)throw H.z(P.c7(a,0,c,"start",f))
if(a>b||b>c)throw H.z(P.c7(b,a,c,"end",f))
return b},
ep:function(a,b,c,d,e){var t=e!=null?e:J.d8(b)
return new P.ht(b,t,!0,a,c,"Index out of range")},
fT:function(a){return new P.jX(a)},
c3:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.bk(a);s.E();)t.push(s.gH())
if(b)return t
t.fixed$length=Array
return t},
d:function(a,b){var t=P.c3(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
kY:function(a){H.qU(H.q(a))},
bN:function bN(){},
aA:function aA(){},
C:function C(){},
bP:function bP(a){this.a=a},
fP:function fP(){},
fQ:function fQ(){},
ci:function ci(){},
eT:function eT(){},
bH:function bH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eY:function eY(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
ht:function ht(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
aU:function aU(a){this.a=a},
f5:function f5(a){this.a=a},
c9:function c9(a){this.a=a},
bl:function bl(a){this.a=a},
iv:function iv(){},
f3:function f3(){},
fK:function fK(a){this.a=a},
jX:function jX(a){this.a=a},
fU:function fU(a,b7,$ti){this.a=a
this.b7=b7
this.$ti=$ti},
N:function N(){},
x:function x(){},
eF:function eF(){},
O:function O(){},
by:function by(){},
bu:function bu(){},
ap:function ap(){},
cu:function cu(){},
B:function B(){},
dM:function dM(N){this.N=N},
qp:function(a){var t=new P.kl(0,0)
t.dm(a)
return t},
kl:function kl(a,b){this.a=a
this.b=b},
fr:function fr(){},
ce:function ce(){},
fV:function fV(){},
fW:function fW(){},
fX:function fX(){},
fY:function fY(){},
fZ:function fZ(){},
h_:function h_(){},
h0:function h0(){},
h1:function h1(){},
h2:function h2(){},
h3:function h3(){},
h4:function h4(){},
h5:function h5(){},
h6:function h6(){},
h7:function h7(){},
h8:function h8(){},
h9:function h9(){},
hi:function hi(){},
aF:function aF(){},
hs:function hs(){},
i4:function i4(){},
i5:function i5(){},
iA:function iA(){},
dK:function dK(){},
ax:function ax(){},
jc:function jc(){},
je:function je(){},
cy:function cy(){},
jl:function jl(){},
ju:function ju(){},
jv:function jv(){},
dS:function dS(){},
kq:function kq(){},
kr:function kr(){},
ks:function ks(){},
l5:function(){var t=$.md
if(t==null){t=J.fp(window.navigator.userAgent,"Opera",0)
$.md=t}return t},
mf:function(){var t=$.me
if(t==null){t=P.l5()!==!0&&J.fp(window.navigator.userAgent,"WebKit",0)
$.me=t}return t},
oj:function(){var t,s
t=$.ma
if(t!=null)return t
s=$.mb
if(s==null){s=J.fp(window.navigator.userAgent,"Firefox",0)
$.mb=s}if(s)t="-moz-"
else{s=$.mc
if(s==null){s=P.l5()!==!0&&J.fp(window.navigator.userAgent,"Trident/",0)
$.mc=s}if(s)t="-ms-"
else t=P.l5()===!0?"-o-":"-webkit-"}$.ma=t
return t}},W={
oi:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
ok:function(a,b,c){var t,s
t=document.body
s=(t&&C.l).aj(t,a,b,c)
s.toString
t=new H.bB(new W.b4(s),new W.kF(),[W.ab])
return t.gaG(t)},
de:function(a){var t,s,r
t="element tag unavailable"
try{s=J.nF(a)
if(typeof s==="string")t=a.tagName}catch(r){H.aW(r)}return t},
mv:function(a,b,c){var t=document.createElement("img")
return t},
cD:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ne:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
na:function(a,b,c,d,e){var t=W.qx(new W.jW(c))
t=new W.jV(0,a,b,t,!1,[e])
t.di(a,b,c,!1,e)
return t},
nc:function(a){var t,s
t=document.createElement("a")
s=new W.kt(t,window.location)
s=new W.dT(s)
s.dl(a)
return s},
ql:function(a,b,c,d){return!0},
qm:function(a,b,c,d){var t,s,r,q,p
t=d.gcO()
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
nf:function(){var t=P.B
t=new W.kz(P.eI(C.f,t),P.bh(null,null,null,t),P.bh(null,null,null,t),P.bh(null,null,null,t),null)
t.dn(null,new H.cW(C.f,new W.kA(),[H.A(C.f,0),null]),["TEMPLATE"],null)
return t},
qx:function(a){var t=$.al
if(t===C.c)return a
return t.e_(a,!0)},
Z:function Z(){},
ft:function ft(){},
fu:function fu(){},
fA:function fA(){},
e5:function e5(){},
cJ:function cJ(){},
fF:function fF(){},
cf:function cf(){},
e7:function e7(){},
ch:function ch(){},
eq:function eq(){},
fI:function fI(){},
ea:function ea(){},
eb:function eb(){},
fL:function fL(){},
ec:function ec(){},
b1:function b1(){},
kF:function kF(){},
fR:function fR(){},
fS:function fS(){},
L:function L(){},
df:function df(){},
hg:function hg(){},
hh:function hh(){},
en:function en(){},
hl:function hl(){},
hr:function hr(){},
hu:function hu(){},
hP:function hP(){},
hU:function hU(){},
hZ:function hZ(){},
i2:function i2(){},
dC:function dC(){},
i6:function i6(){},
i7:function i7(){},
i8:function i8(){},
dD:function dD(){},
bL:function bL(){},
ip:function ip(){},
iq:function iq(){},
b4:function b4(a){this.a=a},
ab:function ab(){},
eQ:function eQ(){},
er:function er(){},
et:function et(){},
it:function it(){},
iw:function iw(){},
iz:function iz(){},
f0:function f0(){},
iZ:function iZ(){},
f2:function f2(){},
j2:function j2(){},
j3:function j3(){},
f4:function f4(){},
jf:function jf(){},
jg:function jg(){},
dN:function dN(){},
jk:function jk(){},
bz:function bz(){},
f9:function f9(){},
d0:function d0(){},
jL:function jL(){},
jP:function jP(){},
jQ:function jQ(){},
k6:function k6(){},
dV:function dV(){},
es:function es(){},
eu:function eu(){},
ku:function ku(){},
jH:function jH(){},
jR:function jR(a){this.a=a},
jU:function jU(){},
lJ:function lJ(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
jV:function jV(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
jW:function jW(a){this.a=a},
dT:function dT(a){this.a=a},
cP:function cP(){},
eR:function eR(a){this.a=a},
is:function is(a){this.a=a},
ir:function ir(a,b,c){this.a=a
this.b=b
this.c=c},
dW:function dW(){},
kv:function kv(){},
kw:function kw(){},
kz:function kz(e,a,b,c,d){var _=this
_.e=e
_.a=a
_.b=b
_.c=c
_.d=d},
kA:function kA(){},
ky:function ky(){},
el:function el(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
c4:function c4(){},
kt:function kt(a,b){this.a=a
this.b=b},
fh:function fh(a){this.a=a},
kB:function kB(a){this.a=a}},S={fs:function fs(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},hQ:function hQ(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},i0:function i0(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},ib:function ib(rx,ry,x1,x2,y1,y2,m,t,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
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
_.r2=r2},iV:function iV(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
o9:function(){var t=$.$get$e3()
t=t.gaB(t)
return new H.bB(t,new L.fx(),[H.aj(t,"x",0)])},
nK:function(a,b,c,d){var t,s,r
t=P.B
s=A.cg
r=P.N
r=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
r.i(0,$.a_,L.c("#FF9B00"),!0)
r.i(0,$.X,L.c("#FF9B00"),!0)
r.i(0,$.a0,L.c("#FF8700"),!0)
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
t=new L.bO(0.5,a,new H.l(0,null,null,null,null,null,0,[X.r,P.C]),null,"","",!1,b,null,c,!1,!1,!1,!0,1,r,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.d(H.a(["Blank","Null","Boring","Error"],s),t),P.d(H.a(["Blank","Null","Boring","Error"],s),t),P.d(H.a(["Nothing","Errors","Glitches"],s),t),P.d(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.v]),H.a([],[A.dd]),Q.t(null,null,A.Q))
t.L(a,b,c,!1)
return t},
c:function(a){if(C.e.bW(a,"#"))return A.m7(C.e.bl(a,1))
else return A.m7(a)},
fx:function fx(){},
bO:function bO(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.a=a
_.b=b
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
W:function W(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hb:function hb(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
i9:function i9(rx,ry,x1,x2,y1,y2,m,t,C,B,v,J,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.t=t
_.C=C
_.B=B
_.v=v
_.J=J
_.a=a
_.b=b
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
iH:function iH(rx,ry,x1,x2,y1,y2,m,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.a=a
_.b=b
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
iU:function iU(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
iY:function iY(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2}},M={fy:function fy(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},fJ:function fJ(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},dg:function dg(){},jB:function jB(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id}},O={fz:function fz(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},hj:function hj(rx,ry,x1,x2,y1,y2,m,t,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
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
_.r2=r2},j_:function j_(rx,ry,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2}},T={fB:function fB(rx,ry,x1,x2,y1,y2,m,t,C,B,v,J,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.t=t
_.C=C
_.B=B
_.v=v
_.J=J
_.a=a
_.b=b
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
_.r2=r2},fD:function fD(rx,ry,x1,x2,y1,y2,m,t,C,B,v,J,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.t=t
_.C=C
_.B=B
_.v=v
_.J=J
_.a=a
_.b=b
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
_.r2=r2},ho:function ho(rx,ry,x1,x2,y1,y2,m,t,C,B,v,J,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.t=t
_.C=C
_.B=B
_.v=v
_.J=J
_.a=a
_.b=b
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
q4:function(){var t=$.$get$f_()
t=t.gaB(t)
return new H.bB(t,new T.iQ(),[H.aj(t,"x",0)])},
pI:function(a,b,c,d){var t=[P.B]
t=new T.c8(0.5,a,new H.l(0,null,null,null,null,null,0,[X.r,P.C]),null,null,b,c,d,!1,!1,!1,!1,!1,!1,Q.t(null,null,A.Q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.v]),H.a([],[A.dd]),1)
t.M(a,b,c,d)
return t},
iQ:function iQ(){},
c8:function c8(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
_.a=a
_.b=b
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
_.id=id}},Z={fE:function fE(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,m,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.m=m
_.a=a
_.b=b
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
_.id=id},fO:function fO(rx,ry,x1,x2,y1,y2,m,t,C,B,v,J,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.t=t
_.C=C
_.B=B
_.v=v
_.J=J
_.a=a
_.b=b
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
_.r2=r2},i_:function i_(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,m,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.m=m
_.a=a
_.b=b
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
_.id=id},iM:function iM(rx,ry,x1,x2,y1,y2,m,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.a=a
_.b=b
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
_.r2=r2}},A={fH:function fH(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
f:function(a,b,c,d,e){var t=new A.Q(c,e,a,!1,P.bh(null,null,null,G.M),0,3)
t.dd(a,b,c,!1,e)
return t},
Q:function Q(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},
hI:function hI(){},
hH:function hH(){},
dd:function dd(){},
e8:function(a,b,c,d){var t=new A.cg(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.dc(a,b,c,d)
return t},
m6:function(a,b,c,d){var t=A.e8(0,0,0,255)
t.b=C.b.P(C.d.aU(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.b.P(C.d.aU(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.b.P(C.d.aU(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.b.P(C.d.aU(d*255),0,255)
return t},
of:function(a,b){if(b){if(typeof a!=="number")return a.cQ()
return A.e8((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.cQ()
return A.e8((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
m7:function(a){return A.of(H.pq(a,16,new A.kG()),a.length>=8)},
cg:function cg(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
kG:function kG(){},
iy:function iy(){},
eU:function eU(){},
iI:function iI(a,b){this.a=a
this.b=b}},V={fM:function fM(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},ia:function ia(rx,ry,x1,x2,y1,y2,m,t,C,B,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.t=t
_.C=C
_.B=B
_.v=v
_.a=a
_.b=b
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
_.r2=r2},ix:function ix(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},jj:function jj(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch}},U={fN:function fN(rx,ry,x1,x2,y1,y2,m,t,C,B,v,J,bH,bI,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.t=t
_.C=C
_.B=B
_.v=v
_.J=J
_.bH=bH
_.bI=bI
_.a=a
_.b=b
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
_.r2=r2},ha:function ha(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},i1:function i1(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},b:function b(a){this.a=a},K:function K(b,c,a){this.b=b
this.c=c
this.a=a},j4:function j4(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},jm:function jm(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id}},X={ee:function ee(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},e6:function e6(){},hq:function hq(rx,ry,x1,x2,y1,y2,m,t,C,B,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.t=t
_.C=C
_.B=B
_.v=v
_.a=a
_.b=b
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
this.c=c},
qR:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
D.q9()
t=P.B
s=A.cg
r=P.N
q=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.a_,L.c("#00ff00"),!0)
q.i(0,$.X,L.c("#EFEFEF"),!0)
q.i(0,$.a0,L.c("#DEDEDE"),!0)
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
j=E.v
i=[j]
h=P.d(H.a([new E.v($.ca,2,!0),new E.v($.cw,1,!0),new E.v($.cb,-2,!0)],i),j)
g=[X.r,P.C]
f=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.a_,L.c("#FF9B00"),!0)
f.i(0,$.X,L.c("#FF9B00"),!0)
f.i(0,$.a0,L.c("#FF8700"),!0)
f.i(0,$.a8,L.c("#7F7F7F"),!0)
f.i(0,$.a7,L.c("#727272"),!0)
f.i(0,$.a2,L.c("#A3A3A3"),!0)
f.i(0,$.a3,L.c("#999999"),!0)
f.i(0,$.a1,L.c("#898989"),!0)
f.i(0,$.Y,L.c("#EFEFEF"),!0)
f.i(0,$.a6,L.c("#DBDBDB"),!0)
f.i(0,$.a5,L.c("#C6C6C6"),!0)
f.i(0,$.a4,L.c("#ADADAD"),!0)
e=[A.dd]
d=A.Q
f=new N.j1(q,o,n,m,l,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],h,0.5,0,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Space",null,!0,!1,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
f.L(0,"Space",!0,!1)
$.o5=f
f=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.a_,L.c("#ff0000"),!0)
f.i(0,$.X,L.c("#FF2106"),!0)
f.i(0,$.a0,L.c("#AD1604"),!0)
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
o=P.d(H.a([new E.v($.dL,2,!0),new E.v($.cb,1,!0),new E.v($.cv,-2,!0)],i),j)
q=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.a_,L.c("#FF9B00"),!0)
q.i(0,$.X,L.c("#FF9B00"),!0)
q.i(0,$.a0,L.c("#FF8700"),!0)
q.i(0,$.a8,L.c("#7F7F7F"),!0)
q.i(0,$.a7,L.c("#727272"),!0)
q.i(0,$.a2,L.c("#A3A3A3"),!0)
q.i(0,$.a3,L.c("#999999"),!0)
q.i(0,$.a1,L.c("#898989"),!0)
q.i(0,$.Y,L.c("#EFEFEF"),!0)
q.i(0,$.a6,L.c("#DBDBDB"),!0)
q.i(0,$.a5,L.c("#C6C6C6"),!0)
q.i(0,$.a4,L.c("#ADADAD"),!0)
q=new N.jn(0.7,f,h,k,l,m,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",n,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],o,0.5,1,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Time",null,!0,!1,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
q.L(1,"Time",!0,!1)
$.o7=q
q=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.a_,L.c("#3399ff"),!0)
q.i(0,$.X,L.c("#10E0FF"),!0)
q.i(0,$.a0,L.c("#00A4BB"),!0)
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
h=P.d(H.a([new E.v($.cb,2,!0),new E.v($.b_,1,!0),new E.v($.cw,-1,!0),new E.v($.br,-1,!0),new E.v($.aK,0.05,!1)],i),j)
f=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.a_,L.c("#FF9B00"),!0)
f.i(0,$.X,L.c("#FF9B00"),!0)
f.i(0,$.a0,L.c("#FF8700"),!0)
f.i(0,$.a8,L.c("#7F7F7F"),!0)
f.i(0,$.a7,L.c("#727272"),!0)
f.i(0,$.a2,L.c("#A3A3A3"),!0)
f.i(0,$.a3,L.c("#999999"),!0)
f.i(0,$.a1,L.c("#898989"),!0)
f.i(0,$.Y,L.c("#EFEFEF"),!0)
f.i(0,$.a6,L.c("#DBDBDB"),!0)
f.i(0,$.a5,L.c("#C6C6C6"),!0)
f.i(0,$.a4,L.c("#ADADAD"),!0)
f=new T.fD(0.3,q,o,n,m,l,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],k,h,0.5,2,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Breath",null,!0,!1,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
f.L(2,"Breath",!0,!1)
$.nM=f
f=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.a_,L.c("#003300"),!0)
f.i(0,$.X,L.c("#0F0F0F"),!0)
f.i(0,$.a0,L.c("#010101"),!0)
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
o=P.d(H.a([new E.v($.ca,2,!0),new E.v($.cv,1,!0),new E.v($.dL,-1,!0),new E.v($.cw,-1,!0),new E.v($.aK,0.01,!1)],i),j)
q=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.a_,L.c("#FF9B00"),!0)
q.i(0,$.X,L.c("#FF9B00"),!0)
q.i(0,$.a0,L.c("#FF8700"),!0)
q.i(0,$.a8,L.c("#7F7F7F"),!0)
q.i(0,$.a7,L.c("#727272"),!0)
q.i(0,$.a2,L.c("#A3A3A3"),!0)
q.i(0,$.a3,L.c("#999999"),!0)
q.i(0,$.a1,L.c("#898989"),!0)
q.i(0,$.Y,L.c("#EFEFEF"),!0)
q.i(0,$.a6,L.c("#DBDBDB"),!0)
q.i(0,$.a5,L.c("#C6C6C6"),!0)
q.i(0,$.a4,L.c("#ADADAD"),!0)
q=new U.fN(1,f,h,k,l,m,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,n,o,0.5,3,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Doom",null,!0,!1,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
q.L(3,"Doom",!0,!1)
$.nN=q
q=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.a_,L.c("#993300"),!0)
q.i(0,$.X,L.c("#BA1016"),!0)
q.i(0,$.a0,L.c("#820B0F"),!0)
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
h=P.d(H.a([new E.v($.br,2,!0),new E.v($.b_,1,!0),new E.v($.ca,-2,!0)],i),j)
f=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.a_,L.c("#FF9B00"),!0)
f.i(0,$.X,L.c("#FF9B00"),!0)
f.i(0,$.a0,L.c("#FF8700"),!0)
f.i(0,$.a8,L.c("#7F7F7F"),!0)
f.i(0,$.a7,L.c("#727272"),!0)
f.i(0,$.a2,L.c("#A3A3A3"),!0)
f.i(0,$.a3,L.c("#999999"),!0)
f.i(0,$.a1,L.c("#898989"),!0)
f.i(0,$.Y,L.c("#EFEFEF"),!0)
f.i(0,$.a6,L.c("#DBDBDB"),!0)
f.i(0,$.a5,L.c("#C6C6C6"),!0)
f.i(0,$.a4,L.c("#ADADAD"),!0)
f=new T.fB(0,q,o,n,m,l,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","tie","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],k,h,0.5,4,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Blood",null,!0,!1,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
f.L(4,"Blood",!0,!1)
$.nL=f
f=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.a_,L.c("#ff3399"),!0)
f.i(0,$.X,L.c("#BD1864"),!0)
f.i(0,$.a0,L.c("#780F3F"),!0)
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
o=P.d(H.a([new E.v($.br,1,!0),new E.e4(null,1,!0)],i),j)
q=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.a_,L.c("#FF9B00"),!0)
q.i(0,$.X,L.c("#FF9B00"),!0)
q.i(0,$.a0,L.c("#FF8700"),!0)
q.i(0,$.a8,L.c("#7F7F7F"),!0)
q.i(0,$.a7,L.c("#727272"),!0)
q.i(0,$.a2,L.c("#A3A3A3"),!0)
q.i(0,$.a3,L.c("#999999"),!0)
q.i(0,$.a1,L.c("#898989"),!0)
q.i(0,$.Y,L.c("#EFEFEF"),!0)
q.i(0,$.a6,L.c("#DBDBDB"),!0)
q.i(0,$.a5,L.c("#C6C6C6"),!0)
q.i(0,$.a4,L.c("#ADADAD"),!0)
q=new T.ho(f,h,k,l,m,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,n,o,0.5,5,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Heart",null,!0,!1,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
q.L(5,"Heart",!0,!1)
$.nR=q
q=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.a_,L.c("#3da35a"),!0)
q.i(0,$.X,L.c("#06FFC9"),!0)
q.i(0,$.a0,L.c("#04A885"),!0)
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
h=P.d(H.a([new E.v($.cv,2,!0),new E.v($.dL,1,!0),new E.v($.ca,-2,!0)],i),j)
f=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.a_,L.c("#FF9B00"),!0)
f.i(0,$.X,L.c("#FF9B00"),!0)
f.i(0,$.a0,L.c("#FF8700"),!0)
f.i(0,$.a8,L.c("#7F7F7F"),!0)
f.i(0,$.a7,L.c("#727272"),!0)
f.i(0,$.a2,L.c("#A3A3A3"),!0)
f.i(0,$.a3,L.c("#999999"),!0)
f.i(0,$.a1,L.c("#898989"),!0)
f.i(0,$.Y,L.c("#EFEFEF"),!0)
f.i(0,$.a6,L.c("#DBDBDB"),!0)
f.i(0,$.a5,L.c("#C6C6C6"),!0)
f.i(0,$.a4,L.c("#ADADAD"),!0)
f=new V.ia(q,o,n,m,l,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],h,0.5,6,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Mind",null,!0,!1,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
f.L(6,"Mind",!0,!1)
$.nX=f
f=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.a_,L.c("#ff9933"),!0)
f.i(0,$.X,L.c("#FEFD49"),!0)
f.i(0,$.a0,L.c("#FEC910"),!0)
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
o=P.d(H.a([new E.v($.d_,2,!0),new E.v($.cv,1,!0),new E.v($.b_,-1,!0),new E.v($.cw,-1,!0),new E.v($.aK,0.2,!1)],i),j)
q=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.a_,L.c("#FF9B00"),!0)
q.i(0,$.X,L.c("#FF9B00"),!0)
q.i(0,$.a0,L.c("#FF8700"),!0)
q.i(0,$.a8,L.c("#7F7F7F"),!0)
q.i(0,$.a7,L.c("#727272"),!0)
q.i(0,$.a2,L.c("#A3A3A3"),!0)
q.i(0,$.a3,L.c("#999999"),!0)
q.i(0,$.a1,L.c("#898989"),!0)
q.i(0,$.Y,L.c("#EFEFEF"),!0)
q.i(0,$.a6,L.c("#DBDBDB"),!0)
q.i(0,$.a5,L.c("#C6C6C6"),!0)
q.i(0,$.a4,L.c("#ADADAD"),!0)
q=new G.hT(f,h,k,l,m,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",n,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],o,0.5,7,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Light",null,!0,!1,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
q.L(7,"Light",!0,!1)
$.nV=q
q=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.a_,L.c("#000066"),!0)
q.i(0,$.X,L.c("#0B1030"),!0)
q.i(0,$.a0,L.c("#04091A"),!0)
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
h=P.d(H.a([new E.cH(D.lE(),null,3,!0),new E.cH(D.lE(),null,-1,!0),new E.v($.dL,-1,!0),new E.v($.aK,0.2,!1)],i),j)
f=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.a_,L.c("#FF9B00"),!0)
f.i(0,$.X,L.c("#FF9B00"),!0)
f.i(0,$.a0,L.c("#FF8700"),!0)
f.i(0,$.a8,L.c("#7F7F7F"),!0)
f.i(0,$.a7,L.c("#727272"),!0)
f.i(0,$.a2,L.c("#A3A3A3"),!0)
f.i(0,$.a3,L.c("#999999"),!0)
f.i(0,$.a1,L.c("#898989"),!0)
f.i(0,$.Y,L.c("#EFEFEF"),!0)
f.i(0,$.a6,L.c("#DBDBDB"),!0)
f.i(0,$.a5,L.c("#C6C6C6"),!0)
f.i(0,$.a4,L.c("#ADADAD"),!0)
f=new Q.jw(q,o,n,m,l,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],h,0.5,8,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Void",null,!0,!1,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
f.L(8,"Void",!0,!1)
$.o8=f
f=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.a_,L.c("#9900cc"),!0)
f.i(0,$.X,L.c("#974AA7"),!0)
f.i(0,$.a0,L.c("#6B347D"),!0)
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
o=P.d(H.a([new E.v($.cc,2,!0),new E.v($.cb,1,!0),new E.v($.b_,-1,!0),new E.v($.br,-1,!0),new E.v($.aK,0.01,!1)],i),j)
q=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.a_,L.c("#FF9B00"),!0)
q.i(0,$.X,L.c("#FF9B00"),!0)
q.i(0,$.a0,L.c("#FF8700"),!0)
q.i(0,$.a8,L.c("#7F7F7F"),!0)
q.i(0,$.a7,L.c("#727272"),!0)
q.i(0,$.a2,L.c("#A3A3A3"),!0)
q.i(0,$.a3,L.c("#999999"),!0)
q.i(0,$.a1,L.c("#898989"),!0)
q.i(0,$.Y,L.c("#EFEFEF"),!0)
q.i(0,$.a6,L.c("#DBDBDB"),!0)
q.i(0,$.a5,L.c("#C6C6C6"),!0)
q.i(0,$.a4,L.c("#ADADAD"),!0)
q=new E.iG(f,h,k,l,m," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",n,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],o,0.5,9,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Rage",null,!0,!1,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
q.L(9,"Rage",!0,!1)
$.o_=q
q=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.a_,L.c("#ffcc66"),!0)
q.i(0,$.X,L.c("#FDF9EC"),!0)
q.i(0,$.a0,L.c("#D6C794"),!0)
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
h=P.d(H.a([new E.v($.b_,2,!0),new E.v($.d_,1,!0),new E.cH(D.lE(),null,-2,!0)],i),j)
f=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.a_,L.c("#FF9B00"),!0)
f.i(0,$.X,L.c("#FF9B00"),!0)
f.i(0,$.a0,L.c("#FF8700"),!0)
f.i(0,$.a8,L.c("#7F7F7F"),!0)
f.i(0,$.a7,L.c("#727272"),!0)
f.i(0,$.a2,L.c("#A3A3A3"),!0)
f.i(0,$.a3,L.c("#999999"),!0)
f.i(0,$.a1,L.c("#898989"),!0)
f.i(0,$.Y,L.c("#EFEFEF"),!0)
f.i(0,$.a6,L.c("#DBDBDB"),!0)
f.i(0,$.a5,L.c("#C6C6C6"),!0)
f.i(0,$.a4,L.c("#ADADAD"),!0)
f=new X.hq(q,o,n,m,l,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],k,h,0.5,10,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Hope",null,!0,!1,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
f.L(10,"Hope",!0,!1)
$.nS=f
f=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.a_,L.c("#494132"),!0)
f.i(0,$.X,L.c("#76C34E"),!0)
f.i(0,$.a0,L.c("#4F8234"),!0)
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
o=P.d(H.a([new E.v($.cw,2,!0),new E.v($.cc,1,!0),new E.v($.ca,-2,!0)],i),j)
q=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.a_,L.c("#FF9B00"),!0)
q.i(0,$.X,L.c("#FF9B00"),!0)
q.i(0,$.a0,L.c("#FF8700"),!0)
q.i(0,$.a8,L.c("#7F7F7F"),!0)
q.i(0,$.a7,L.c("#727272"),!0)
q.i(0,$.a2,L.c("#A3A3A3"),!0)
q.i(0,$.a3,L.c("#999999"),!0)
q.i(0,$.a1,L.c("#898989"),!0)
q.i(0,$.Y,L.c("#EFEFEF"),!0)
q.i(0,$.a6,L.c("#DBDBDB"),!0)
q.i(0,$.a5,L.c("#C6C6C6"),!0)
q.i(0,$.a4,L.c("#ADADAD"),!0)
q=new K.hS(f,h,k,l,m,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],n,o,0.5,11,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Life",null,!0,!1,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
q.L(11,"Life",!0,!1)
$.nU=q
q=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.a_,L.c("#9630BF"),!0)
q.i(0,$.X,L.c("#cc87e8"),!0)
q.i(0,$.a0,L.c("#9545b7"),!0)
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
h=P.d(H.a([new E.v($.ca,3,!0),new E.v($.b_,-2,!0)],i),j)
f=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.a_,L.c("#FF9B00"),!0)
f.i(0,$.X,L.c("#FF9B00"),!0)
f.i(0,$.a0,L.c("#FF8700"),!0)
f.i(0,$.a8,L.c("#7F7F7F"),!0)
f.i(0,$.a7,L.c("#727272"),!0)
f.i(0,$.a2,L.c("#A3A3A3"),!0)
f.i(0,$.a3,L.c("#999999"),!0)
f.i(0,$.a1,L.c("#898989"),!0)
f.i(0,$.Y,L.c("#EFEFEF"),!0)
f.i(0,$.a6,L.c("#DBDBDB"),!0)
f.i(0,$.a5,L.c("#C6C6C6"),!0)
f.i(0,$.a4,L.c("#ADADAD"),!0)
f=new Z.fO(q,o,n,m,l,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,k,h,0.5,12,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Dream",null,!1,!1,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
f.L(12,"Dream",!1,!1)
$.nO=f
$.nZ=L.nK(255,"Null",!1,!1)
f=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.a_,L.c("#364447"),!0)
f.i(0,$.X,L.c("#28517b"),!0)
f.i(0,$.a0,L.c("#143D67"),!0)
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
b=P.d(H.a([new E.v($.cc,2,!0),new E.v($.cv,-1,!0),new E.v($.cb,-1,!0),new E.v($.b_,1,!0)],i),j)
a=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
a.i(0,$.a_,L.c("#FF9B00"),!0)
a.i(0,$.X,L.c("#FF9B00"),!0)
a.i(0,$.a0,L.c("#FF8700"),!0)
a.i(0,$.a8,L.c("#7F7F7F"),!0)
a.i(0,$.a7,L.c("#727272"),!0)
a.i(0,$.a2,L.c("#A3A3A3"),!0)
a.i(0,$.a3,L.c("#999999"),!0)
a.i(0,$.a1,L.c("#898989"),!0)
a.i(0,$.Y,L.c("#EFEFEF"),!0)
a.i(0,$.a6,L.c("#DBDBDB"),!0)
a.i(0,$.a5,L.c("#C6C6C6"),!0)
a.i(0,$.a4,L.c("#ADADAD"),!0)
a=new L.i9(f,h,k,l,m,"Mantra","A low note is hummed. It is the one Perseverance plays to keep itself going. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",n,o,q,c,b,0.5,13,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Might",null,!1,!1,!1,!1,!0,1,a,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
a.L(13,"Might",!1,!1)
$.nW=a
a=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
a.i(0,$.a_,L.c("#A4C1F4"),!0)
a.i(0,$.X,L.c("#A4C1F4"),!0)
a.i(0,$.a0,L.c("#95AFDD"),!0)
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
n=P.d(H.a([new E.v($.cb,2,!0),new E.v($.cc,-1,!0)],i),j)
m=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
m.i(0,$.a_,L.c("#FF9B00"),!0)
m.i(0,$.X,L.c("#FF9B00"),!0)
m.i(0,$.a0,L.c("#FF8700"),!0)
m.i(0,$.a8,L.c("#7F7F7F"),!0)
m.i(0,$.a7,L.c("#727272"),!0)
m.i(0,$.a2,L.c("#A3A3A3"),!0)
m.i(0,$.a3,L.c("#999999"),!0)
m.i(0,$.a1,L.c("#898989"),!0)
m.i(0,$.Y,L.c("#EFEFEF"),!0)
m.i(0,$.a6,L.c("#DBDBDB"),!0)
m.i(0,$.a5,L.c("#C6C6C6"),!0)
m.i(0,$.a4,L.c("#ADADAD"),!0)
m=new S.ib(a,b,c,q,o,"Ensemble","A harmonized chord sounds. It is the one Everybody knows. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",n,0.5,14,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Mist",null,!1,!1,!1,!1,!0,1,m,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
m.L(14,"Mist",!1,!1)
$.nY=m
m=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
m.i(0,$.a_,L.c("#00FFFF"),!0)
m.i(0,$.X,L.c("#00ffff"),!0)
m.i(0,$.a0,L.c("#009090"),!0)
m.i(0,$.a8,L.c("#FEFEFE"),!0)
m.i(0,$.a7,L.c("#707070"),!0)
m.i(0,$.a2,L.c("#0000FF"),!0)
m.i(0,$.a3,L.c("#0000b3"),!0)
m.i(0,$.a1,L.c("#000080"),!0)
m.i(0,$.Y,L.c("#9900ff"),!0)
m.i(0,$.a6,L.c("#5c0099"),!0)
m.i(0,$.a5,L.c("#00FF00"),!0)
m.i(0,$.a4,L.c("#008000"),!0)
n=P.d(H.a(["Neon","Headaches","Puddles","Drip","Mess","Ice cream","Sweets","Boredom"],p),t)
o=P.d(H.a(["PUDDLE PUMMELLER","FLOOD FINISHER","RAINBRO"],p),t)
q=P.d(H.a(["Rainer","Retriever","Rower","Redux","Rapport"],p),t)
c=P.d(H.a(["Chaos","disorder","puddle","Rain","error","color","Swirl","LOL"],p),t)
b=P.d(H.a([new E.v($.br,-2,!0),new E.v($.b_,-1,!0),new E.v($.d_,3,!0)],i),j)
l=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
l.i(0,$.a_,L.c("#FF9B00"),!0)
l.i(0,$.X,L.c("#FF9B00"),!0)
l.i(0,$.a0,L.c("#FF8700"),!0)
l.i(0,$.a8,L.c("#7F7F7F"),!0)
l.i(0,$.a7,L.c("#727272"),!0)
l.i(0,$.a2,L.c("#A3A3A3"),!0)
l.i(0,$.a3,L.c("#999999"),!0)
l.i(0,$.a1,L.c("#898989"),!0)
l.i(0,$.Y,L.c("#EFEFEF"),!0)
l.i(0,$.a6,L.c("#DBDBDB"),!0)
l.i(0,$.a5,L.c("#C6C6C6"),!0)
l.i(0,$.a4,L.c("#ADADAD"),!0)
l=new L.iH(m,n,o,q,c,"BLUH BLUH, Ask Cactus to write this. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",b,0.5,15,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Rain",null,!1,!1,!1,!1,!0,1,l,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
l.L(15,"Rain",!1,!1)
$.o0=l
l=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
l.i(0,$.a_,L.c("#b88654"),!0)
l.i(0,$.X,L.c("#783e05"),!0)
l.i(0,$.a0,L.c("#4a0f00"),!0)
l.i(0,$.a8,L.c("#0b6c6e"),!0)
l.i(0,$.a7,L.c("#005d5e"),!0)
l.i(0,$.a2,L.c("#f5b06c"),!0)
l.i(0,$.a3,L.c("#e6a05e"),!0)
l.i(0,$.a1,L.c("#b87232"),!0)
l.i(0,$.Y,L.c("#ffd966"),!0)
l.i(0,$.a6,L.c("#d1ab3b"),!0)
l.i(0,$.a5,L.c("#7d5e00"),!0)
l.i(0,$.a4,L.c("#6e4f00"),!0)
b=P.d(H.a(["Lies","Beach","Shore","Secrets","Pirates","Suspicion","Corruption","[REDACTED]","Cake"],p),t)
c=P.d(H.a(["MR SANDMAN","CASTLE COORDINATOR","POKER FACADE"],p),t)
q=P.d(H.a(["Strategist","Slider","Sculpter","Scamp","Sleazebag"],p),t)
o=P.d(H.a(["FALSE","Wrong","Sand","Distraction","Ruse","Crumble","abscond","beach","grain","[Data Expunged]"],p),t)
n=P.d(H.a([new E.v($.br,3,!0),new E.v($.b_,-2,!0)],i),j)
m=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
m.i(0,$.a_,L.c("#FF9B00"),!0)
m.i(0,$.X,L.c("#FF9B00"),!0)
m.i(0,$.a0,L.c("#FF8700"),!0)
m.i(0,$.a8,L.c("#7F7F7F"),!0)
m.i(0,$.a7,L.c("#727272"),!0)
m.i(0,$.a2,L.c("#A3A3A3"),!0)
m.i(0,$.a3,L.c("#999999"),!0)
m.i(0,$.a1,L.c("#898989"),!0)
m.i(0,$.Y,L.c("#EFEFEF"),!0)
m.i(0,$.a6,L.c("#DBDBDB"),!0)
m.i(0,$.a5,L.c("#C6C6C6"),!0)
m.i(0,$.a4,L.c("#ADADAD"),!0)
m=new Y.iS(l,b,c,q,o," BLUH BLUH, ask Cactus to write this. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",n,0.5,16,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Sand",null,!1,!1,!1,!1,!0,1,m,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
m.L(16,"Sand",!1,!1)
$.o2=m
m=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
m.i(0,$.a_,L.c("#ff9933"),!0)
m.i(0,$.X,L.c("#ffffff"),!0)
m.i(0,$.a0,L.c("#999999"),!0)
m.i(0,$.a8,L.c("#ffff00"),!0)
m.i(0,$.a7,L.c("#8f8f00"),!0)
m.i(0,$.a2,L.c("#d1e0e3"),!0)
m.i(0,$.a3,L.c("#c5d1d4"),!0)
m.i(0,$.a1,L.c("#b7c2c4"),!0)
m.i(0,$.Y,L.c("#00ffff"),!0)
m.i(0,$.a6,L.c("#009999"),!0)
m.i(0,$.a5,L.c("#b5b5b5"),!0)
m.i(0,$.a4,L.c("#858585"),!0)
q=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.a_,L.c("#FF9B00"),!0)
q.i(0,$.X,L.c("#FF9B00"),!0)
q.i(0,$.a0,L.c("#FF8700"),!0)
q.i(0,$.a8,L.c("#7F7F7F"),!0)
q.i(0,$.a7,L.c("#727272"),!0)
q.i(0,$.a2,L.c("#A3A3A3"),!0)
q.i(0,$.a3,L.c("#999999"),!0)
q.i(0,$.a1,L.c("#898989"),!0)
q.i(0,$.Y,L.c("#EFEFEF"),!0)
q.i(0,$.a6,L.c("#DBDBDB"),!0)
q.i(0,$.a5,L.c("#C6C6C6"),!0)
q.i(0,$.a4,L.c("#ADADAD"),!0)
q=new L.iY(m,0.5,17,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Sky",null,!1,!1,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
q.L(17,"Sky",!1,!1)
$.o3=q
q=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.a_,L.c("#10dede"),!0)
q.i(0,$.X,L.c("#00ffff"),!0)
q.i(0,$.a0,L.c("#00d1d1"),!0)
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
k=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
k.i(0,$.a_,L.c("#FF9B00"),!0)
k.i(0,$.X,L.c("#FF9B00"),!0)
k.i(0,$.a0,L.c("#FF8700"),!0)
k.i(0,$.a8,L.c("#7F7F7F"),!0)
k.i(0,$.a7,L.c("#727272"),!0)
k.i(0,$.a2,L.c("#A3A3A3"),!0)
k.i(0,$.a3,L.c("#999999"),!0)
k.i(0,$.a1,L.c("#898989"),!0)
k.i(0,$.Y,L.c("#EFEFEF"),!0)
k.i(0,$.a6,L.c("#DBDBDB"),!0)
k.i(0,$.a5,L.c("#C6C6C6"),!0)
k.i(0,$.a4,L.c("#ADADAD"),!0)
k=new Z.iM(q,m,o,n,l,"Rap","BLUH BLUH, Ask Cactus to write this. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",0.5,18,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Rhyme",null,!1,!1,!1,!1,!0,1,k,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
k.L(18,"Rhyme",!1,!1)
$.o1=k
k=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
k.i(0,$.a_,L.c("#c42eff"),!0)
k.i(0,$.X,L.c("a703ff"),!0)
k.i(0,$.a0,L.c("#9800f0"),!0)
k.i(0,$.a8,L.c("#fcf9bd"),!0)
k.i(0,$.a7,L.c("#e0d29e"),!0)
k.i(0,$.a2,L.c("#9900ff"),!0)
k.i(0,$.a3,L.c("#8800f0"),!0)
k.i(0,$.a1,L.c("#7800e0"),!0)
k.i(0,$.Y,L.c("#b3a7d4"),!0)
k.i(0,$.a6,L.c("#a599c4"),!0)
k.i(0,$.a5,L.c("#a64e78"),!0)
k.i(0,$.a4,L.c("#963f66"),!0)
q=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.a_,L.c("#FF9B00"),!0)
q.i(0,$.X,L.c("#FF9B00"),!0)
q.i(0,$.a0,L.c("#FF8700"),!0)
q.i(0,$.a8,L.c("#7F7F7F"),!0)
q.i(0,$.a7,L.c("#727272"),!0)
q.i(0,$.a2,L.c("#A3A3A3"),!0)
q.i(0,$.a3,L.c("#999999"),!0)
q.i(0,$.a1,L.c("#898989"),!0)
q.i(0,$.Y,L.c("#EFEFEF"),!0)
q.i(0,$.a6,L.c("#DBDBDB"),!0)
q.i(0,$.a5,L.c("#C6C6C6"),!0)
q.i(0,$.a4,L.c("#ADADAD"),!0)
q=new Q.hR(k,0.5,19,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Law",null,!1,!1,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
q.L(19,"Law",!1,!1)
$.nT=q
q=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.a_,L.c("#f0b000"),!0)
q.i(0,$.X,L.c("#ffd966"),!0)
q.i(0,$.a0,L.c("#f0ca59"),!0)
q.i(0,$.a8,L.c("#ffff00"),!0)
q.i(0,$.a7,L.c("#8f8f00"),!0)
q.i(0,$.a2,L.c("#92c27c"),!0)
q.i(0,$.a3,L.c("#83b36d"),!0)
q.i(0,$.a1,L.c("#74a35f"),!0)
q.i(0,$.Y,L.c("#39751d"),!0)
q.i(0,$.a6,L.c("#2a630e"),!0)
q.i(0,$.a5,L.c("#bd8e00"),!0)
q.i(0,$.a4,L.c("#ad7c00"),!0)
o=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
o.i(0,$.a_,L.c("#FF9B00"),!0)
o.i(0,$.X,L.c("#FF9B00"),!0)
o.i(0,$.a0,L.c("#FF8700"),!0)
o.i(0,$.a8,L.c("#7F7F7F"),!0)
o.i(0,$.a7,L.c("#727272"),!0)
o.i(0,$.a2,L.c("#A3A3A3"),!0)
o.i(0,$.a3,L.c("#999999"),!0)
o.i(0,$.a1,L.c("#898989"),!0)
o.i(0,$.Y,L.c("#EFEFEF"),!0)
o.i(0,$.a6,L.c("#DBDBDB"),!0)
o.i(0,$.a5,L.c("#C6C6C6"),!0)
o.i(0,$.a4,L.c("#ADADAD"),!0)
o=new L.hb(q,0.5,20,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Fate",null,!1,!1,!1,!1,!0,1,o,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
o.L(20,"Fate",!1,!1)
$.nP=o
o=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
o.i(0,$.a_,L.c("#b2e3eb"),!0)
o.i(0,$.X,L.c("#fefefe"),!0)
o.i(0,$.a0,L.c("#dfdfdf"),!0)
o.i(0,$.a8,L.c("#00ffff"),!0)
o.i(0,$.a7,L.c("#009090"),!0)
o.i(0,$.a2,L.c("#999999"),!0)
o.i(0,$.a3,L.c("#8a8a8a"),!0)
o.i(0,$.a1,L.c("#7a7a7a"),!0)
o.i(0,$.Y,L.c("#d0e2f2"),!0)
o.i(0,$.a6,L.c("#c3d4e3"),!0)
o.i(0,$.a5,L.c("#b2e3eb"),!0)
o.i(0,$.a4,L.c("#a4d4db"),!0)
q=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.a_,L.c("#FF9B00"),!0)
q.i(0,$.X,L.c("#FF9B00"),!0)
q.i(0,$.a0,L.c("#FF8700"),!0)
q.i(0,$.a8,L.c("#7F7F7F"),!0)
q.i(0,$.a7,L.c("#727272"),!0)
q.i(0,$.a2,L.c("#A3A3A3"),!0)
q.i(0,$.a3,L.c("#999999"),!0)
q.i(0,$.a1,L.c("#898989"),!0)
q.i(0,$.Y,L.c("#EFEFEF"),!0)
q.i(0,$.a6,L.c("#DBDBDB"),!0)
q.i(0,$.a5,L.c("#C6C6C6"),!0)
q.i(0,$.a4,L.c("#ADADAD"),!0)
q=new O.j_(2,o,0.5,21,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Snow",null,!1,!1,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
q.L(21,"Snow",!1,!1)
$.o4=q
q=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.a_,L.c("#ee0000"),!0)
q.i(0,$.X,L.c("#ff0000"),!0)
q.i(0,$.a0,L.c("#d10000"),!0)
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
k=P.d(H.a([new E.v($.cb,2,!0),new E.v($.cc,1,!0),new E.v($.br,-2,!0)],i),j)
h=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
h.i(0,$.a_,L.c("#FF9B00"),!0)
h.i(0,$.X,L.c("#FF9B00"),!0)
h.i(0,$.a0,L.c("#FF8700"),!0)
h.i(0,$.a8,L.c("#7F7F7F"),!0)
h.i(0,$.a7,L.c("#727272"),!0)
h.i(0,$.a2,L.c("#A3A3A3"),!0)
h.i(0,$.a3,L.c("#999999"),!0)
h.i(0,$.a1,L.c("#898989"),!0)
h.i(0,$.Y,L.c("#EFEFEF"),!0)
h.i(0,$.a6,L.c("#DBDBDB"),!0)
h.i(0,$.a5,L.c("#C6C6C6"),!0)
h.i(0,$.a4,L.c("#ADADAD"),!0)
h=new O.hj(q,o,n,m,l,"Mixtape "," An ill beat is laid down. It's the one that is dropped when the Pimp is in the crib. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,0.5,22,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Flow",null,!1,!1,!1,!1,!0,1,h,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
h.L(22,"Flow",!1,!1)
$.nQ=h
h=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
h.i(0,$.a_,L.c("#ffff33"),!0)
h.i(0,$.X,L.c("#ffff00"),!0)
h.i(0,$.a0,L.c("#d1d100"),!0)
h.i(0,$.a8,L.c("#00ffff"),!0)
h.i(0,$.a7,L.c("#009999"),!0)
h.i(0,$.a2,L.c("#0c5494"),!0)
h.i(0,$.a3,L.c("#004785"),!0)
h.i(0,$.a1,L.c("#003b75"),!0)
h.i(0,$.Y,L.c("#20124d"),!0)
h.i(0,$.a6,L.c("#11033d"),!0)
h.i(0,$.a5,L.c("#0c323b"),!0)
h.i(0,$.a4,L.c("#00232b"),!0)
s=new L.W(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
s.i(0,$.a_,L.c("#FF9B00"),!0)
s.i(0,$.X,L.c("#FF9B00"),!0)
s.i(0,$.a0,L.c("#FF8700"),!0)
s.i(0,$.a8,L.c("#7F7F7F"),!0)
s.i(0,$.a7,L.c("#727272"),!0)
s.i(0,$.a2,L.c("#A3A3A3"),!0)
s.i(0,$.a3,L.c("#999999"),!0)
s.i(0,$.a1,L.c("#898989"),!0)
s.i(0,$.Y,L.c("#EFEFEF"),!0)
s.i(0,$.a6,L.c("#DBDBDB"),!0)
s.i(0,$.a5,L.c("#C6C6C6"),!0)
s.i(0,$.a4,L.c("#ADADAD"),!0)
t=new U.j4(h,0.5,23,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Stars",null,!1,!1,!1,!1,!0,1,s,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.t(null,null,d))
t.L(23,"Stars",!1,!1)
$.o6=t
t=new S.hQ(0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,0.5,"Knight",new H.l(0,null,null,null,null,null,0,g),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.M("Knight",3,!0,!1)
$.pO=t
t=P.d(H.a([new E.v($.aK,0.4,!1)],i),j)
t=new S.iV(["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,t,0.5,"Seer",new H.l(0,null,null,null,null,null,0,g),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.M("Seer",6,!0,!1)
$.q_=t
t=new O.fz(["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],!1,!1,!1,!1,!0,!1,0.5,"Bard",new H.l(0,null,null,null,null,null,0,g),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.M("Bard",9,!0,!1)
$.pJ=t
t=new B.hp(0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,0.5,"Heir",new H.l(0,null,null,null,null,null,0,g),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.M("Heir",8,!0,!1)
$.pN=t
t=new U.i1(["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,0.5,"Maid",new H.l(0,null,null,null,null,null,0,g),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.M("Maid",0,!0,!1)
$.pR=t
t=new N.iN(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,0.5,"Rogue",new H.l(0,null,null,null,null,null,0,g),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.M("Rogue",4,!0,!1)
$.pW=t
t=new V.ix(0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,0.5,"Page",new H.l(0,null,null,null,null,null,0,g),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.M("Page",1,!0,!1)
$.pU=t
t=new U.jm(["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,0.5,"Thief",new H.l(0,null,null,null,null,null,0,g),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.M("Thief",7,!0,!1)
$.q1=t
t=P.d(H.a([new E.v($.aK,0.1,!1)],i),j)
t=new R.jd(["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,t,0.5,"Sylph",new H.l(0,null,null,null,null,null,0,g),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.M("Sylph",5,!0,!1)
$.q0=t
t=new N.iE(1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,0.5,"Prince",new H.l(0,null,null,null,null,null,0,g),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.M("Prince",10,!0,!1)
$.pV=t
t=P.d(H.a([new E.v($.aK,0.1,!1)],i),j)
t=new M.jB(["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,t,0.5,"Witch",new H.l(0,null,null,null,null,null,0,g),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.M("Witch",11,!0,!1)
$.q3=t
t=P.d(H.a([new E.v($.aK,0.4,!1)],i),j)
t=new S.i0(["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,t,0.5,"Mage",new H.l(0,null,null,null,null,null,0,g),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.M("Mage",2,!0,!1)
$.pQ=t
t=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
s=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
r=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
q=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],p)
o=P.d(H.a([new E.v($.aK,3,!1),new E.v($.mX,-2,!1)],i),j)
t=new E.jx(t,s,r,q,!1,!0,!1,!1,!0,!1,o,0.5,"Waste",new H.l(0,null,null,null,null,null,0,g),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.M("Waste",12,!1,!1)
$.q2=t
t=new Y.iT(["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,0.5,"Scout",new H.l(0,null,null,null,null,null,0,g),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.M("Scout",13,!1,!1)
$.pY=t
t=P.d(H.a([new E.v($.aK,0.5,!1)],i),j)
t=new L.iU(["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,t,0.5,"Scribe",new H.l(0,null,null,null,null,null,0,g),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.M("Scribe",15,!1,!1)
$.pZ=t
t=P.d(H.a([new E.v($.aK,0.5,!1)],i),j)
t=new E.iR(["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,t,0.5,"Sage",new H.l(0,null,null,null,null,null,0,g),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.M("Sage",14,!1,!1)
$.pX=t
t=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],p)
t=new Y.hn(t,!0,!1,!1,!1,!1,!0,0.5,"Guide",new H.l(0,null,null,null,null,null,0,g),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.M("Guide",16,!1,!1)
$.pM=t
t=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],p)
s=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],p)
r=P.d(H.a([new E.v($.aK,3,!1)],i),j)
t=new Y.hm(t,s,!1,!0,!1,!1,!0,!1,r,0.5,"Grace",new H.l(0,null,null,null,null,null,0,g),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.M("Grace",17,!1,!1)
$.pL=t
t=P.d(H.a([new E.v($.aK,0.1,!1)],i),j)
t=new E.ic(["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,t,0.5,"Muse",new H.l(0,null,null,null,null,null,0,g),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.M("Muse",18,!1,!1)
$.pS=t
t=Q.t(null,null,d)
s=P.d(H.a([new E.v($.aK,0.1,!1)],i),j)
t=new Z.i_(2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,t,s,0.5,"Lord",new H.l(0,null,null,null,null,null,0,g),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.M("Lord",19,!1,!1)
$.pP=t
$.pT=T.pI("Null",255,!1,!0)
t=P.d(H.a([new E.v($.aK,1.5,!1),new E.v($.cc,3,!1),new E.v($.br,-0.5,!1)],i),j)
t=new Z.fE(["BROBLERONE","BROTEL RWANDA","BRO-YO MA"],["busting out, and I quote, 'the mad stunts all wicked up-ins'","trying to get hella pumped about houses or some noise","getting mud on their doll's dress or whatever"],["not actually playing the game, but giving it 1.5 out of 5 hats to keep it real","giving a shout out to their boy Dennis who was over the other day","helping their consorts live off the land, for big ups to Mother Earth, yo","getting so wasted. haha, I mean DAMN"],!1,!1,!1,!0,!0,!1,["Brother","Bored","Bugger","Badass","Bothersome"],t,0.1,2,0.5,"Bro",new H.l(0,null,null,null,null,null,0,g),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,Q.t(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.M("Bro",20,!1,!1)
$.pK=t
t=P.d(H.a([new E.v($.b_,1,!0),new E.v($.d_,1,!0)],i),j)
s=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],p)
r=H.a(["Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass"],p)
q=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],p)
o=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new F.id(t,s,r,q,o,!1,n,m,l,k,1,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.t(null,null,d),"loud","musical","Music")
t.q()
t.p()
B.aY(t)
$.oA=t
t=P.d(H.a([new E.v($.cv,-2,!0)],i),j)
s=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],p)
r=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist"],p)
q=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],p)
o=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new S.fs(t,s,r,q,o,!1,n,m,l,k,13,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.t(null,null,d),"nerdy","smart","Academic")
t.q()
t.p()
B.aY(t)
$.ot=t
t=P.d(H.a([new E.v($.cc,2,!0)],i),j)
s=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],p)
r=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler"],p)
q=H.a(["MUSCLES HOARDER","BODY BOOSTER"],p)
o=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new M.fy(t,s,r,q,o,!1,n,m,l,k,4,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.t(null,null,d),"dumb","athletic","Athletic")
t.q()
t.p()
B.aY(t)
$.ou=t
t=P.d(H.a([new E.v($.dL,-1,!0),new E.v($.d_,1,!0)],i),j)
s=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],p)
r=H.a(["Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor"],p)
q=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],p)
o=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new A.fH(t,s,r,q,o,!1,n,m,l,k,0,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.t(null,null,d),"dorky","funny","Comedy")
t.q()
t.p()
B.aY(t)
$.ov=t
t=P.d(H.a([new E.v($.b_,-1,!0),new E.v($.cw,-1,!0)],i),j)
s=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],p)
r=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business"],p)
q=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],p)
o=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new M.fJ(t,s,r,q,o,!1,n,m,l,k,2,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.t(null,null,d),"pretentious","cultured","Culture")
t.q()
t.p()
B.aY(t)
$.ow=t
t=P.d(H.a([new E.v($.b_,1,!0),new E.v($.br,1,!0)],i),j)
s=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],p)
r=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer"],p)
q=H.a(["BATTERBRAT","GRITTY GUARDIAN"],p)
o=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new V.fM(t,s,r,q,o,!1,n,m,l,k,8,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.t(null,null,d),"boring","domestic","Domestic")
t.q()
t.p()
B.aY(t)
$.ox=t
t=P.d(H.a([new E.v($.d_,1,!0),new E.v($.ca,1,!0)],i),j)
s=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],p)
r=H.a(["Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart"],p)
q=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],p)
o=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new U.ha(t,s,r,q,o,!1,n,m,l,k,7,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.t(null,null,d),"whimpy","imaginative","Fantasy")
t.q()
t.p()
B.aY(t)
$.oy=t
t=P.d(H.a([new E.v($.cc,1,!0),new E.v($.cw,1,!0)],i),j)
s=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],p)
r=H.a(["Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel"],p)
q=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],p)
o=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new N.hO(t,s,r,q,o,!1,n,m,l,k,6,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.t(null,null,d),"harsh","fair-minded","Justice")
t.q()
t.p()
B.aY(t)
$.oz=t
t=P.d(H.a([new E.v($.cb,2,!0)],i),j)
s=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],p)
r=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent"],p)
q=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],p)
o=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new G.iC(t,s,r,q,o,!1,n,m,l,k,9,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.t(null,null,d),"frivolous","geeky","PopCulture")
t.q()
t.p()
B.aY(t)
$.oC=t
t=P.d(H.a([new E.v($.br,2,!0)],i),j)
s=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],p)
r=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team"],p)
q=H.a(["QUESTING CUPID","ROMANCE EXPERT"],p)
o=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new Q.iO(t,s,r,q,o,!1,n,m,l,k,12,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.t(null,null,d),"obsessive","romantic","Romantic")
t.q()
t.p()
B.aY(t)
$.oD=t
t=P.d(H.a([new E.v($.b_,2,!0)],i),j)
s=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],p)
r=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally"],p)
q=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],p)
o=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new N.j0(t,s,r,q,o,!1,n,m,l,k,11,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.t(null,null,d),"shallow","extroverted","Social")
t.q()
t.p()
B.aY(t)
$.oE=t
t=P.d(H.a([new E.v($.br,-1,!0),new E.v($.b_,-1,!0)],i),j)
s=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],p)
r=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod"],p)
q=H.a(["ENEMY #1","JERKWAD JOURNEYER"],p)
o=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new V.jj(t,s,r,q,o,!1,n,m,l,k,5,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.t(null,null,d),"terrible","honest","Terrible")
t.q()
t.p()
B.aY(t)
$.oG=t
t=P.d(H.a([new E.v($.cv,2,!0)],i),j)
s=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],p)
r=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis"],p)
q=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],p)
o=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new F.jC(t,s,r,q,o,!1,n,m,l,k,3,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.t(null,null,d),"wordy","lettered","Writing")
t.q()
t.p()
B.aY(t)
$.oH=t
t=P.d(H.a([new E.v($.ca,2,!0)],i),j)
s=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],p)
r=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data"],p)
q=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],p)
o=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new D.ji(t,s,r,q,o,!1,n,m,l,k,10,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.t(null,null,d),"awkward","techy","Technology")
t.q()
t.p()
B.aY(t)
$.oF=t
t=H.a(["nobody"],p)
j=P.d(H.a([],i),j)
i=H.a(["Nobody"],p)
p=H.a(["Nobody"],p)
t=new B.bZ(!0,t,j,i,p,-13,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.t(null,null,d),"","","Null")
t.q()
t.p()
B.aY(t)
$.oB=t
t=document
a0=t.querySelector("#aspects")
s=L.o9()
a1=P.c3(s,!0,H.A(s,0))
C.a.aN(a1,new X.kU())
for(s=a1.length,a2=0;a2<a1.length;a1.length===s||(0,H.cF)(a1),++a2){a3=a1[a2]
a4=t.createElement("div")
a4.className="box"
r=t.createElement("div")
r.className="title"
q=r.style
p=a3.gK().l(0,$.Y).bT()
q.backgroundColor=p
q=t.createElement("div")
q.className="aspectIcon"
p=W.mv(null,null,null)
o=a3.x
p.src="../../images/"+o+".png"
q.appendChild(p)
r.appendChild(q)
q=t.createElement("h1")
q.className="title"
p=q.style
n=a3.gK().l(0,$.X).bT()
p.color=n
q.textContent=o
r.appendChild(q)
a4.appendChild(r)
r=t.createElement("h3")
q=t.createElement("span")
p=a3.z
q.className=p?"canon":"fanon"
q.textContent=p?"Canon":"Fanon"
r.appendChild(q)
r.appendChild(t.createTextNode(", id: "+a3.b))
a4.appendChild(r)
a5=t.createElement("div")
a5.className="section"
r=t.createElement("h4")
r.textContent="Properties"
a5.appendChild(r)
if(a3.gbd()){r=t.createElement("p")
r.textContent="Deadpan"
r.title="Mentally unaffected by trickster mode"
a5.appendChild(r)}if(a3.gcM()){r=t.createElement("p")
r.textContent="Ultimate Deadpan"
r.title="Physically unaffected by trickster mode"
a5.appendChild(r)}r=t.createElement("p")
r.textContent="Power boost mult: "+a3.gaL()
a5.appendChild(r)
a4.appendChild(a5)
a4.appendChild(X.lR(a3.gA()))
a4.appendChild(X.bi("Levels",a3.gu()))
r=t.createElement("div")
r.className="section"
r.appendChild(X.bi("Names",a3.ga2()))
q=t.createElement("div")
q.className="section"
p=t.createElement("p")
p.className="toggleTitle"
p.textContent=a3.ga0()
q.appendChild(p)
p=t.createElement("p")
p.textContent=a3.gR()
q.appendChild(p)
r.appendChild(X.cG("Song",q))
a4.appendChild(X.cG("Denizen",r))
r=t.createElement("div")
r.className="section"
a4.appendChild(X.cG("Quests",r))
a4.appendChild(X.bi("ChumHandles",a3.gD()))
a4.appendChild(X.bi("Land Names",a3.gT()))
a4.appendChild(X.bi("Fraymotif Names",a3.gS()))
a4.appendChild(X.cG("Palette",a3.gK().e5(o)))
a0.appendChild(a4)}a6=t.querySelector("#classes")
s=T.q4()
a7=P.c3(s,!0,H.A(s,0))
C.a.aN(a7,new X.kV())
for(s=a7.length,a2=0;a2<a7.length;a7.length===s||(0,H.cF)(a7),++a2){a8=a7[a2]
a4=t.createElement("div")
a4.className="box"
r=t.createElement("div")
r.className="title"
q=r.style
q.backgroundColor="#CCCCCC"
q=t.createElement("div")
q.className="classIcon"
p=W.mv(null,null,null)
o=J.aV(a8)
p.src="../../images/Bodies/god"+H.q(J.d7(o.gae(a8),1))+".png"
q.appendChild(p)
r.appendChild(q)
q=t.createElement("h1")
q.className="title"
p=q.style
p.color="#FFFFFF"
p=q.style
p.marginLeft="48px"
p=q.style
p.marginTop="19px"
p=q.style
n=(p&&C.m).bZ(p,"text-shadow")
p.setProperty(n,"-1px -1px 0px black, -1px 1px 0px black, 1px 1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, 0px 1px 0px black, 0px -1px 0px black","")
q.textContent=o.gG(a8)
r.appendChild(q)
a4.appendChild(r)
r=t.createElement("h3")
q=t.createElement("span")
q.className=a8.gbJ()?"canon":"fanon"
q.textContent=a8.gbJ()?"Canon":"Fanon"
r.appendChild(q)
r.appendChild(t.createTextNode(", id: "+o.gae(a8)))
a4.appendChild(r)
a5=t.createElement("div")
a5.className="section"
r=t.createElement("h4")
r.textContent="Properties"
a5.appendChild(r)
if(a8.Z()){r=t.createElement("p")
r.textContent="Active"
a5.appendChild(r)}else{r=t.createElement("p")
r.textContent="Passive"
a5.appendChild(r)}if(a8.ao()){r=t.createElement("p")
r.textContent="Has interaction effect"
r.title="Affects the stats of friends or enemies."
a5.appendChild(r)}if(a8.Y()){r=t.createElement("p")
r.textContent="High initial stats"
a5.appendChild(r)}r=t.createElement("p")
r.textContent="Power boost mult: "+a8.gaL()
a5.appendChild(r)
a4.appendChild(a5)
a4.appendChild(X.lR(a8.gA()))
a4.appendChild(X.bi("Levels",a8.gu()))
r=t.createElement("div")
r.className="section"
r.appendChild(X.bi("Pre-Denizen",a8.gV()))
r.appendChild(X.bi("Post-Denizen",a8.gU()))
a4.appendChild(X.cG("Quests",r))
a4.appendChild(X.bi("ChumHandles",a8.gD()))
r=t.createElement("div")
r.className="section"
q=t.createElement("p")
q.textContent="Attacker multiplier: "+H.q(a8.a6())
r.appendChild(q)
q=t.createElement("p")
q.textContent="Defender multiplier: "+H.q(a8.a7())
r.appendChild(q)
q=t.createElement("p")
q.textContent="Murderous mlultiplier: "+H.q(a8.a8())
r.appendChild(q)
a4.appendChild(X.cG("PvP Stats",r))
a6.appendChild(a4)}a9=t.querySelector("#interests")
s=B.oI()
b0=P.c3(s,!0,H.A(s,0))
C.a.aN(b0,new X.kW())
for(s=b0.length,a2=0;a2<b0.length;b0.length===s||(0,H.cF)(b0),++a2){b1=b0[a2]
a4=t.createElement("div")
a4.className="box"
r=t.createElement("div")
r.className="title"
q=r.style
q.backgroundColor="#CCCCCC"
q=t.createElement("h1")
q.className="title"
p=q.style
p.color="#FFFFFF"
p=q.style
p.marginLeft="10px"
p=q.style
p.marginTop="19px"
p=q.style
o=(p&&C.m).bZ(p,"text-shadow")
p.setProperty(o,"-1px -1px 0px black, -1px 1px 0px black, 1px 1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, 0px 1px 0px black, 0px -1px 0px black","")
p=J.aV(b1)
q.textContent=p.gG(b1)
r.appendChild(q)
a4.appendChild(r)
r=t.createElement("h3")
r.appendChild(t.createTextNode("id: "+H.q(p.gae(b1))))
a4.appendChild(r)
a4.appendChild(X.lR(b1.gA()))
a4.appendChild(X.bi("Sub-types",b1.ga5()))
a4.appendChild(X.bi("Levels",b1.gu()))
r=t.createElement("div")
r.className="section"
r.appendChild(X.bi("First",b1.ga3()))
r.appendChild(X.bi("Second",b1.ga4()))
a4.appendChild(X.cG("ChumHandles",r))
a9.appendChild(a4)}},
lR:function(a){var t,s,r,q,p,o,n
t=document
s=t.createElement("div")
s.className="section"
r=t.createElement("h4")
r.textContent="Stats"
s.appendChild(r)
s.appendChild(t.createElement("table"))
for(r=J.bk(a);r.E();){q=r.gH()
p=t.createElement("tr")
o=t.createElement("td")
n=J.ah(q)
if(!!n.$ise4)o.textContent="Stats from Interests"
else if(!!n.$iscH){o.textContent="[Random Stat]"
o.title=P.hJ(q.d,"(",")")}else o.textContent=J.aH(q.gd2())
p.appendChild(o)
n=t.createElement("td")
n.className="number"
n.textContent="x "+H.q(q.ger())
p.appendChild(n)
s.appendChild(p)}return s},
cG:function(a,b){var t,s,r,q,p,o
t=document
s=t.createElement("div")
s.className="toggleOuter"
r=t.createElement("div")
r.className="toggleBox"
q=r.style
q.display="none"
p=t.createElement("span")
p.className="toggleClickable"
q=t.createElement("span")
q.className="toggleTitle"
q.textContent=a
p.appendChild(q)
o=t.createElement("span")
o.className="toggleButton"
C.i.bk(o,"[+]")
W.na(p,"click",new X.l1(r,o),!1,W.bL)
p.appendChild(o)
s.appendChild(p)
r.appendChild(b)
s.appendChild(r)
return s},
bi:function(a,b){var t,s,r,q,p,o
t=document
s=t.createElement("div")
s.className="section"
for(r=b.length,q=0;q<b.length;b.length===r||(0,H.cF)(b),++q){p=b[q]
o=t.createElement("p")
o.className="listItem"
o.textContent=J.aH(p)
s.appendChild(o)}return X.cG(a,s)},
kU:function kU(){},
kV:function kV(){},
kW:function kW(){},
l1:function l1(a,b){this.a=a
this.b=b}},N={T:function T(){},hO:function hO(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},iE:function iE(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},iN:function iN(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},j0:function j0(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},j1:function j1(rx,ry,x1,x2,y1,y2,m,t,C,B,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.t=t
_.C=C
_.B=B
_.v=v
_.a=a
_.b=b
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
_.r2=r2},jn:function jn(rx,ry,x1,x2,y1,y2,m,t,C,B,v,J,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.t=t
_.C=C
_.B=B
_.v=v
_.J=J
_.a=a
_.b=b
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
_.r2=r2}},E={eo:function eo(){},iu:function iu(){},v:function v(a,b,c){this.a=a
this.b=b
this.c=c},cH:function cH(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},e4:function e4(a,b,c){this.a=a
this.b=b
this.c=c},ic:function ic(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},iG:function iG(rx,ry,x1,x2,y1,y2,m,t,C,B,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.t=t
_.C=C
_.B=B
_.v=v
_.a=a
_.b=b
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
_.r2=r2},iR:function iR(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},jx:function jx(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id}},Y={hm:function hm(k1,k2,k3,k4,r1,r2,rx,ry,x1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},hn:function hn(k1,k2,k3,k4,r1,r2,rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},ct:function ct(a,b){this.a=a
this.b=b},b7:function b7(r,c,d,e,f,a,b){var _=this
_.r=r
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},y:function y(c,d,e,f,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},H:function H(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},am:function am(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},fG:function fG(c,a,b){this.c=c
this.a=a
this.b=b},ao:function ao(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},eV:function eV(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},em:function em(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},eW:function eW(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},iS:function iS(rx,ry,x1,x2,y1,y2,m,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.a=a
_.b=b
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
_.r2=r2},iT:function iT(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
qC:function(a){var t,s,r,q
t=C.w.eT(a," ")
for(s=t.gO(t),r="";s.E();){q=s.gH()
r+=" "+(H.q(q.l(0,0).f3(0))+H.q(q.bl(0,1)))}return r}},B={hp:function hp(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
aY:function(a){var t=a.f
if($.$get$ev().ad(t))throw H.z("Duplicate aspect id for "+a.n(0)+": "+t+" is already registered for "+J.aH($.$get$ev().l(0,t))+".")
$.$get$ev().h(0,t,a)},
oI:function(){var t=$.$get$ev()
t=t.gaB(t)
return new H.bB(t,new B.hv(),[H.aj(t,"x",0)])},
hv:function hv(){},
bZ:function bZ(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch}},Q={hR:function hR(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},iO:function iO(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},jw:function jw(rx,ry,x1,x2,y1,y2,m,t,C,B,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.t=t
_.C=C
_.B=B
_.v=v
_.a=a
_.b=b
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
t:function(a,b,c){var t=new Q.jz(null,null,[c])
t.dg(a,b,c)
return t},
lG:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.t(d,null,e)
s=a.gw(a)
C.a.sw(t.b,s)
if(H.fk(a,"$isx",[e],"$asx"))if(H.fk(a,"$isbA",[e],"$asbA"))for(s=J.bk(a.gbg()),r=0;s.E();){q=s.gH()
p=t.b
o=p.length
if(r>=o)return H.S(p,r)
p[r]=q;++r}else for(s=a.gO(a),p=[H.A(t,0)],r=0;s.E();){n=s.gH()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.S(o,r)
o[r]=new Q.e(n,m,p);++r}else for(s=a.gO(a),p=[e],o=[H.A(t,0)];s.E();){l=s.gH()
if(H.qD(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.S(m,0)
m[0]=new Q.e(l,k,o)}else if(H.fk(l,"$ise",p,null)){m=t.b
k=m.length
if(0>=k)return H.S(m,0)
m[0]=l}else throw H.z("Invalid entry type "+H.q(J.m0(l))+" for WeightedList<"+H.q(H.ay(H.bF(e)))+">. Should be "+H.q(H.ay(H.bF(e)))+" or WeightPair<"+H.q(H.ay(H.bF(e)))+">.")}return t},
lH:function(a,b,c,d){return new Q.f7(J.m1(a.gbg(),new Q.jA(c,d,b)),null,[c,d])},
bA:function bA(){},
jz:function jz(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
f6:function f6(){},
e:function e(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
cA:function cA(){},
dO:function dO(){},
jy:function jy(a,$ti){this.a=a
this.$ti=$ti},
f7:function f7(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
jA:function jA(a,b,c){this.a=a
this.b=b
this.c=c}},K={hS:function hS(rx,ry,x1,x2,y1,y2,m,t,C,B,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.t=t
_.C=C
_.B=B
_.v=v
_.a=a
_.b=b
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
_.r2=r2}},G={hT:function hT(rx,ry,x1,x2,y1,y2,m,t,C,B,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.t=t
_.C=C
_.B=B
_.v=v
_.a=a
_.b=b
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
_.r2=r2},iC:function iC(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
og:function(a){var t,s,r,q,p,o,n
t=G.M
s=P.eI(a,t)
r=P.bh(null,null,null,t)
q=H.a([],[G.e9])
for(t=G.pm(),p=J.bk(t.a),t=new H.f8(p,t.b,[H.A(t,0)]);t.E();){o=p.gH()
if(o.eL(s))q.push(o)}C.a.d0(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.cF)(q),++n){o=q[n]
if(o.eL(s)){r.j(0,o)
for(p=o.gd3(),p=p.gO(p);p.E();)s.aa(0,p.gH())}}if(s.a!==0)r.ai(0,s)
return r},
pm:function(){var t=$.$get$mL()
t.toString
return new H.bB(t,new G.hG(),[H.A(t,0)])},
M:function M(){},
e9:function e9(){},
hG:function hG(){}},F={id:function id(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},jC:function jC(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch}},R={
pF:function(a){var t,s
if(a.gw(a).aD(0,1)){a.l(0,1)
a.l(0,1)
t=!0}else t=!1
s=a.l(0,0)
s.geR(s).gf2().eW("checking for two players, ps is "+H.q(a)+", ret is "+t)
return t},
pt:function(a){a.gab(a).gbc()
return!1},
pE:function(a){a.gab(a).gbc()
return!1},
pD:function(a){a.gab(a).gbc()
return!1},
pC:function(a){return a.gab(a).gaR().gf1()},
pA:function(a){return a.gab(a).gaR().gf_()},
pz:function(a){return a.gab(a).gaR().geZ()},
pw:function(a){return a.gab(a).gaR().geX()},
py:function(a){return a.gab(a).gaR().geY()},
pB:function(a){return a.gab(a).gaR().gf0()},
px:function(a){var t=a.gab(a)
t.gbc()
t.gbc()
return!1},
pu:function(a){return!0},
pv:function(a){var t,s
t=a.gab(a)
s="is it JR? "+H.q(t.gct())
t.gct()
P.kY(s+" false ")
t.gct()
return!1},
iF:function iF(){},
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
E:function E(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
aq:function aq(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
jd:function jd(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id}},D={ji:function ji(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
q9:function(){if($.mY)return
$.mY=!0
var t=new D.aT("Experience","learned","na\xefve",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$b0().push(t)
t.y=0
$.mX=t
t=new D.aT("Grist Level","rich","poor",!1,!1,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$b0().push(t)
$.q8=t
t=new D.fa(0.03,"Power","strong","weak",!0,!0,!1,10,0.5,-1/0,1/0,-1/0,1/0)
$.$get$b0().push(t)
t.y=2.5
t.Q=1
$.cc=t
t=new D.fa(0.04,"Health","sturdy","fragile",!0,!0,!1,10,1,-1/0,1/0,-1/0,1/0)
$.$get$b0().push(t)
t.y=2.5
$.cw=t
t=new D.aT("Current Health","healthy","infirm",!1,!0,!0,1,1,-1/0,1/0,-1/0,1/0)
$.$get$b0().push(t)
$.q7=t
t=new D.aT("Mobility","fast","slow",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$b0().push(t)
$.cb=t
t=new D.iL("Relationships","friendly","aggressive",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$b0().push(t)
$.br=t
t=new D.aT("Sanity","calm","crazy",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$b0().push(t)
$.b_=t
t=new D.aT("Free Will","willful","gullible",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$b0().push(t)
$.cv=t
t=new D.aT("Maximum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$b0().push(t)
$.d_=t
t=new D.aT("Minimum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$b0().push(t)
$.dL=t
t=new D.aT("Alchemy","creative","boring",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$b0().push(t)
$.ca=t
t=new D.aT("SBURB Lore","woke","clueless",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$b0().push(t)
$.aK=t},
lE:function(){var t=$.$get$b0()
return new H.bB(t,new D.j6(),[H.A(t,0)])},
j6:function j6(){},
aT:function aT(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
fa:function fa(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
iL:function iL(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
H.lv.prototype={}
J.I.prototype={
I:function(a,b){return a===b},
gX:function(a){return H.cq(a)},
n:function(a){return H.iD(a)},
gW:function(a){return new H.cd(H.kK(a),null)}}
J.hK.prototype={
n:function(a){return String(a)},
gX:function(a){return a?519018:218159},
gW:function(a){return C.V},
$isbN:1}
J.eH.prototype={
I:function(a,b){return null==b},
n:function(a){return"null"},
gX:function(a){return 0},
gW:function(a){return C.P},
$isby:1}
J.dy.prototype={
gX:function(a){return 0},
gW:function(a){return C.O},
n:function(a){return String(a)},
$ismN:1}
J.iB.prototype={}
J.cz.prototype={}
J.co.prototype={
n:function(a){var t=a[$.$get$m9()]
return t==null?this.d7(a):J.aH(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.cm.prototype={
bG:function(a,b){if(!!a.immutable$list)throw H.z(new P.aU(b))},
cu:function(a,b){if(!!a.fixed$length)throw H.z(new P.aU(b))},
j:function(a,b){this.cu(a,"add")
a.push(b)},
ag:function(a,b){return new H.cW(a,b,[H.A(a,0),null])},
an:function(a,b){if(b<0||b>=a.length)return H.S(a,b)
return a[b]},
gab:function(a){if(a.length>0)return a[0]
throw H.z(H.lt())},
aM:function(a,b,c,d,e){var t,s,r
this.bG(a,"setRange")
P.mW(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.az(P.c7(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.z(H.pn())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r<0||r>=d.length)return H.S(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r<0||r>=d.length)return H.S(d,r)
a[b+s]=d[r]}},
cq:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])===!0)return!0
if(a.length!==t)throw H.z(new P.bl(a))}return!1},
aN:function(a,b){var t
this.bG(a,"sort")
t=b==null?P.qE():b
H.f1(a,0,a.length-1,t)},
d0:function(a){return this.aN(a,null)},
a9:function(a,b){var t
for(t=0;t<a.length;++t)if(J.aL(a[t],b))return!0
return!1},
n:function(a){return P.eE(a,"[","]")},
a_:function(a,b){var t=H.a(a.slice(0),[H.A(a,0)])
return t},
ah:function(a){return this.a_(a,!0)},
gO:function(a){return new J.fw(a,a.length,0,null,[H.A(a,0)])},
gX:function(a){return H.cq(a)},
gw:function(a){return a.length},
sw:function(a,b){this.cu(a,"set length")
if(b<0)throw H.z(P.c7(b,0,null,"newLength",null))
a.length=b},
l:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.z(H.aC(a,b))
if(b>=a.length||b<0)throw H.z(H.aC(a,b))
return a[b]},
h:function(a,b,c){this.bG(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.z(H.aC(a,b))
if(b>=a.length||b<0)throw H.z(H.aC(a,b))
a[b]=c},
$isb3:1,
$asb3:function(){},
$isO:1,
$asO:null,
$isJ:1,
$asJ:null,
$isx:1,
$asx:null}
J.lu.prototype={}
J.fw.prototype={
gH:function(){return this.d},
E:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.z(H.cF(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.cV.prototype={
at:function(a,b){var t
if(typeof b!=="number")throw H.z(H.bE(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gbK(b)
if(this.gbK(a)===t)return 0
if(this.gbK(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbK:function(a){return a===0?1/a<0:a<0},
aU:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.z(new P.aU(""+a+".floor()"))},
bP:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.z(new P.aU(""+a+".round()"))},
P:function(a,b,c){if(C.b.at(b,c)>0)throw H.z(H.bE(b))
if(this.at(a,b)<0)return b
if(this.at(a,c)>0)return c
return a},
cL:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.z(P.c7(b,2,36,"radix",null))
t=a.toString(b)
if(C.e.e0(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.az(new P.aU("Unexpected toString result: "+t))
r=J.b5(s)
t=r.l(s,1)
q=+r.l(s,3)
if(r.l(s,2)!=null){t+=r.l(s,2)
q-=r.l(s,2).length}return t+C.e.aq("0",q)},
n:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gX:function(a){return a&0x1FFFFFFF},
ap:function(a,b){if(typeof b!=="number")throw H.z(H.bE(b))
return a+b},
aq:function(a,b){return a*b},
a1:function(a,b){return(a|0)===a?a/b|0:this.dU(a,b)},
dU:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.z(new P.aU("Result of truncating division is "+H.q(t)+": "+H.q(a)+" ~/ "+b))},
cl:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
aE:function(a,b){if(typeof b!=="number")throw H.z(H.bE(b))
return a<b},
aD:function(a,b){if(typeof b!=="number")throw H.z(H.bE(b))
return a>b},
gW:function(a){return C.Y},
$isbu:1}
J.eG.prototype={
gW:function(a){return C.X},
$isC:1,
$isbu:1,
$isN:1}
J.hL.prototype={
gW:function(a){return C.W},
$isC:1,
$isbu:1}
J.cn.prototype={
e0:function(a,b){if(b<0)throw H.z(H.aC(a,b))
if(b>=a.length)H.az(H.aC(a,b))
return a.charCodeAt(b)},
c_:function(a,b){if(b>=a.length)throw H.z(H.aC(a,b))
return a.charCodeAt(b)},
ap:function(a,b){if(typeof b!=="string")throw H.z(P.fv(b,null,null))
return a+b},
d1:function(a,b,c){var t
if(c>a.length)throw H.z(P.c7(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bW:function(a,b){return this.d1(a,b,0)},
d4:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.az(H.bE(c))
if(b<0)throw H.z(P.iJ(b,null,null))
if(typeof c!=="number")return H.d6(c)
if(b>c)throw H.z(P.iJ(b,null,null))
if(c>a.length)throw H.z(P.iJ(c,null,null))
return a.substring(b,c)},
bl:function(a,b){return this.d4(a,b,null)},
eJ:function(a){return a.toLowerCase()},
aq:function(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.z(C.t)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
cD:function(a,b,c){var t=b-a.length
if(t<=0)return a
return this.aq(c,t)+a},
e2:function(a,b,c){if(c>a.length)throw H.z(P.c7(c,0,a.length,null,null))
return H.qV(a,b,c)},
at:function(a,b){var t
if(typeof b!=="string")throw H.z(H.bE(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
n:function(a){return a},
gX:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gW:function(a){return C.Q},
gw:function(a){return a.length},
l:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.z(H.aC(a,b))
if(b>=a.length||b<0)throw H.z(H.aC(a,b))
return a[b]},
$isb3:1,
$asb3:function(){},
$isB:1}
H.J.prototype={$asJ:null}
H.cp.prototype={
gO:function(a){return new H.eK(this,this.gw(this),0,null,[H.aj(this,"cp",0)])},
bh:function(a,b){return this.d6(0,b)},
ag:function(a,b){return new H.cW(this,b,[H.aj(this,"cp",0),null])},
a_:function(a,b){var t,s,r
t=H.a([],[H.aj(this,"cp",0)])
C.a.sw(t,this.gw(this))
for(s=0;s<this.gw(this);++s){r=this.an(0,s)
if(s>=t.length)return H.S(t,s)
t[s]=r}return t},
ah:function(a){return this.a_(a,!0)}}
H.eK.prototype={
gH:function(){return this.d},
E:function(){var t,s,r,q
t=this.a
s=J.b5(t)
r=s.gw(t)
if(this.b!==r)throw H.z(new P.bl(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.an(t,q);++this.c
return!0}}
H.dA.prototype={
gO:function(a){return new H.eL(null,J.bk(this.a),this.b,this.$ti)},
gw:function(a){return J.d8(this.a)},
$asx:function(a,b){return[b]}}
H.ed.prototype={$isJ:1,
$asJ:function(a,b){return[b]},
$asx:function(a,b){return[b]}}
H.eL.prototype={
E:function(){var t=this.b
if(t.E()){this.a=this.c.$1(t.gH())
return!0}this.a=null
return!1},
gH:function(){return this.a},
$aseF:function(a,b){return[b]}}
H.cW.prototype={
gw:function(a){return J.d8(this.a)},
an:function(a,b){return this.b.$1(J.nB(this.a,b))},
$ascp:function(a,b){return[b]},
$asJ:function(a,b){return[b]},
$asx:function(a,b){return[b]}}
H.bB.prototype={
gO:function(a){return new H.f8(J.bk(this.a),this.b,this.$ti)},
ag:function(a,b){return new H.dA(this,b,[H.A(this,0),null])}}
H.f8.prototype={
E:function(){var t,s
for(t=this.a,s=this.b;t.E();)if(s.$1(t.gH())===!0)return!0
return!1},
gH:function(){return this.a.gH()}}
H.ek.prototype={}
H.l_.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.l0.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.kg.prototype={}
H.d1.prototype={
cp:function(a,b){if(!this.f.I(0,a))return
if(this.Q.j(0,b)&&!this.y)this.y=!0
this.bE()},
eE:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.aa(0,a)
if(t.a===0){for(t=this.z;s=t.length,s!==0;){if(0>=s)return H.S(t,-1)
r=t.pop()
s=u.globalState.f.a
q=s.b
p=s.a
o=p.length
q=(q-1&o-1)>>>0
s.b=q
if(q<0||q>=o)return H.S(p,q)
p[q]=r
if(q===s.c)s.c6();++s.d}this.y=!1}this.bE()},
dX:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.ah(a),s=0;r=this.ch,s<r.length;s+=2)if(t.I(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.S(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
eD:function(a){var t,s,r
if(this.ch==null)return
for(t=J.ah(a),s=0;r=this.ch,s<r.length;s+=2)if(t.I(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.az(new P.aU("removeRange"))
P.mW(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cY:function(a,b){if(!this.r.I(0,a))return
this.db=b},
eg:function(a,b,c){var t=J.ah(b)
if(!t.I(b,0))t=t.I(b,1)&&!this.cy
else t=!0
if(t){J.da(a,c)
return}t=this.cx
if(t==null){t=P.lz(null,null)
this.cx=t}t.ar(new H.kb(a,c))},
ef:function(a,b){var t
if(!this.r.I(0,a))return
t=J.ah(b)
if(!t.I(b,0))t=t.I(b,1)&&!this.cy
else t=!0
if(t){this.bf()
return}t=this.cx
if(t==null){t=P.lz(null,null)
this.cx=t}t.ar(this.gep())},
eh:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.kY(a)
if(b!=null)P.kY(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aH(a)
s[1]=b==null?null:J.aH(b)
for(r=new P.cE(t,t.r,null,null,[null]),r.c=t.e;r.E();)J.da(r.d,s)},
aT:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.aW(o)
p=H.bt(o)
this.eh(q,p)
if(this.db===!0){this.bf()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.geo()
if(this.cx!=null)for(;n=this.cx,!n.gaf(n);)this.cx.cF().$0()}return s},
cC:function(a){return this.b.l(0,a)},
bY:function(a,b){var t=this.b
if(t.ad(a))throw H.z(P.fT("Registry: ports must be registered only once."))
t.h(0,a,b)},
bE:function(){var t=this.b
if(t.gw(t)-this.c.a>0||this.y||!this.x)u.globalState.z.h(0,this.a,this)
else this.bf()},
bf:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.aJ(0)
for(t=this.b,s=t.gaB(t),s=s.gO(s);s.E();)s.gH().dt()
t.aJ(0)
this.c.aJ(0)
u.globalState.z.aa(0,this.a)
this.dx.aJ(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.S(t,p)
J.da(q,t[p])}this.ch=null}},
gae:function(a){return this.a},
geo:function(){return this.d},
ge3:function(){return this.e}}
H.kb.prototype={
$0:function(){J.da(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.jS.prototype={
e6:function(){var t=this.a
if(t.b===t.c)return
return t.cF()},
cJ:function(){var t,s,r
t=this.e6()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.ad(u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gaf(s)}else s=!1
else s=!1
else s=!1
if(s)H.az(P.fT("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gaf(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.dz(["command","close"])
r=new H.bD(!0,new P.ff(0,null,null,null,null,null,0,[null,P.N])).ac(r)
s.toString
self.postMessage(r)}return!1}t.eB()
return!0},
cg:function(){if(self.window!=null)new H.jT(this).$0()
else for(;this.cJ(););},
b0:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.cg()
else try{this.cg()}catch(r){t=H.aW(r)
s=H.bt(r)
q=u.globalState.Q
p=P.dz(["command","error","msg",H.q(t)+"\n"+H.q(s)])
p=new H.bD(!0,P.dU(null,P.N)).ac(p)
q.toString
self.postMessage(p)}}}
H.jT.prototype={
$0:function(){if(!this.a.cJ())return
P.qc(C.n,this)},
$S:function(){return{func:1,v:true}}}
H.cC.prototype={
eB:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.aT(this.b)}}
H.kf.prototype={}
H.hw.prototype={
$0:function(){H.oM(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.hx.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.d5(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.d5(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.bE()},
$S:function(){return{func:1,v:true}}}
H.jI.prototype={}
H.d2.prototype={
bj:function(a,b){var t,s,r
t=u.globalState.z.l(0,this.a)
if(t==null)return
s=this.b
if(s.gc9())return
r=H.qr(b)
if(t.ge3()===s){s=J.b5(r)
switch(s.l(r,0)){case"pause":t.cp(s.l(r,1),s.l(r,2))
break
case"resume":t.eE(s.l(r,1))
break
case"add-ondone":t.dX(s.l(r,1),s.l(r,2))
break
case"remove-ondone":t.eD(s.l(r,1))
break
case"set-errors-fatal":t.cY(s.l(r,1),s.l(r,2))
break
case"ping":t.eg(s.l(r,1),s.l(r,2),s.l(r,3))
break
case"kill":t.ef(s.l(r,1),s.l(r,2))
break
case"getErrors":s=s.l(r,1)
t.dx.j(0,s)
break
case"stopErrors":s=s.l(r,1)
t.dx.aa(0,s)
break}return}u.globalState.f.a.ar(new H.cC(t,new H.ki(this,r),"receive"))},
I:function(a,b){if(b==null)return!1
return b instanceof H.d2&&J.aL(this.b,b.b)},
gX:function(a){return this.b.gbw()}}
H.ki.prototype={
$0:function(){var t=this.a.b
if(!t.gc9())t.dq(this.b)},
$S:function(){return{func:1}}}
H.dX.prototype={
bj:function(a,b){var t,s,r
t=P.dz(["command","message","port",this,"msg",b])
s=new H.bD(!0,P.dU(null,P.N)).ac(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.l(0,this.b)
if(r!=null)r.postMessage(s)}},
I:function(a,b){if(b==null)return!1
return b instanceof H.dX&&J.aL(this.b,b.b)&&J.aL(this.a,b.a)&&J.aL(this.c,b.c)},
gX:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.aF()
s=this.a
if(typeof s!=="number")return s.aF()
r=this.c
if(typeof r!=="number")return H.d6(r)
return(t<<16^s<<8^r)>>>0}}
H.cZ.prototype={
dt:function(){this.c=!0
this.b=null},
dq:function(a){if(this.c)return
this.b.$1(a)},
$ispG:1,
gbw:function(){return this.a},
gc9:function(){return this.c}}
H.jo.prototype={
df:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.ar(new H.cC(s,new H.jp(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.e0(new H.jq(this,b),0),a)}else throw H.z(new P.aU("Timer greater than 0."))}}
H.jp.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.jq.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.bI.prototype={
gX:function(a){var t=this.a
if(typeof t!=="number")return t.eS()
t=C.d.cl(t,0)^C.d.a1(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
I:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.bI){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gbw:function(){return this.a}}
H.bD.prototype={
ac:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.l(0,a)
if(s!=null)return["ref",s]
t.h(0,a,t.gw(t))
t=J.ah(a)
if(!!t.$isdE)return["buffer",a]
if(!!t.$iscX)return["typed",a]
if(!!t.$isb3)return this.cU(a)
if(!!t.$isoJ){r=this.gcR()
q=a.gaK()
q=H.dB(q,r,H.aj(q,"x",0),null)
q=P.c3(q,!0,H.aj(q,"x",0))
t=t.gaB(a)
t=H.dB(t,r,H.aj(t,"x",0),null)
return["map",q,P.c3(t,!0,H.aj(t,"x",0))]}if(!!t.$ismN)return this.cV(a)
if(!!t.$isI)this.cN(a)
if(!!t.$ispG)this.b1(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isd2)return this.cW(a)
if(!!t.$isdX)return this.cX(a)
if(!!t.$iscK){p=a.$static_name
if(p==null)this.b1(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isbI)return["capability",a.a]
if(!(a instanceof P.ap))this.cN(a)
return["dart",u.classIdExtractor(a),this.cT(u.classFieldsExtractor(a))]},
b1:function(a,b){throw H.z(new P.aU((b==null?"Can't transmit:":b)+" "+H.q(a)))},
cN:function(a){return this.b1(a,null)},
cU:function(a){var t=this.cS(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.b1(a,"Can't serialize indexable: ")},
cS:function(a){var t,s,r
t=[]
C.a.sw(t,a.length)
for(s=0;s<a.length;++s){r=this.ac(a[s])
if(s>=t.length)return H.S(t,s)
t[s]=r}return t},
cT:function(a){var t
for(t=0;t<a.length;++t)C.a.h(a,t,this.ac(a[t]))
return a},
cV:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.b1(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sw(s,t.length)
for(r=0;r<t.length;++r){q=this.ac(a[t[r]])
if(r>=s.length)return H.S(s,r)
s[r]=q}return["js-object",t,s]},
cX:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cW:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gbw()]
return["raw sendport",a]}}
H.cB.prototype={
au:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.z(P.m2("Bad serialized message: "+H.q(a)))
switch(C.a.gab(a)){case"ref":if(1>=a.length)return H.S(a,1)
t=a[1]
s=this.b
if(t>>>0!==t||t>=s.length)return H.S(s,t)
return s[t]
case"buffer":if(1>=a.length)return H.S(a,1)
r=a[1]
this.b.push(r)
return r
case"typed":if(1>=a.length)return H.S(a,1)
r=a[1]
this.b.push(r)
return r
case"fixed":if(1>=a.length)return H.S(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.aS(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.S(a,1)
r=a[1]
this.b.push(r)
return H.a(this.aS(r),[null])
case"mutable":if(1>=a.length)return H.S(a,1)
r=a[1]
this.b.push(r)
return this.aS(r)
case"const":if(1>=a.length)return H.S(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.aS(r),[null])
s.fixed$length=Array
return s
case"map":return this.eb(a)
case"sendport":return this.ec(a)
case"raw sendport":if(1>=a.length)return H.S(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.ea(a)
case"function":if(1>=a.length)return H.S(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.S(a,1)
return new H.bI(a[1])
case"dart":s=a.length
if(1>=s)return H.S(a,1)
q=a[1]
if(2>=s)return H.S(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.aS(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.z("couldn't deserialize: "+H.q(a))}},
aS:function(a){var t,s,r
t=J.b5(a)
s=0
while(!0){r=t.gw(a)
if(typeof r!=="number")return H.d6(r)
if(!(s<r))break
t.h(a,s,this.au(t.l(a,s)));++s}return a},
eb:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.S(a,1)
s=a[1]
if(2>=t)return H.S(a,2)
r=a[2]
q=P.mO()
this.b.push(q)
s=J.nI(J.m1(s,this.ge9()))
for(t=J.b5(s),p=J.b5(r),o=0;o<t.gw(s);++o)q.h(0,t.l(s,o),this.au(p.l(r,o)))
return q},
ec:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.S(a,1)
s=a[1]
if(2>=t)return H.S(a,2)
r=a[2]
if(3>=t)return H.S(a,3)
q=a[3]
if(J.aL(s,u.globalState.b)){p=u.globalState.z.l(0,r)
if(p==null)return
o=p.cC(q)
if(o==null)return
n=new H.d2(o,r)}else n=new H.dX(s,q,r)
this.b.push(n)
return n},
ea:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.S(a,1)
s=a[1]
if(2>=t)return H.S(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.b5(s)
p=J.b5(r)
o=0
while(!0){n=t.gw(s)
if(typeof n!=="number")return H.d6(n)
if(!(o<n))break
q[t.l(s,o)]=this.au(p.l(r,o));++o}return q}}
H.iK.prototype={}
H.jr.prototype={
ak:function(a){var t,s,r
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
H.eS.prototype={
n:function(a){var t=this.b
if(t==null)return"NullError: "+H.q(this.a)
return"NullError: method not found: '"+H.q(t)+"' on null"}}
H.hN.prototype={
n:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.q(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.q(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.q(this.a)+")"}}
H.jt.prototype={
n:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.l2.prototype={
$1:function(a){if(!!J.ah(a).$isci)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.fg.prototype={
n:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.kP.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.kQ.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.kR.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.kS.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.kT.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.cK.prototype={
n:function(a){return"Closure '"+H.mS(this).trim()+"'"},
geN:function(){return this},
$D:null}
H.jh.prototype={}
H.j5.prototype={
n:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.db.prototype={
I:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.db))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gX:function(a){var t,s
t=this.c
if(t==null)s=H.cq(this.a)
else s=typeof t!=="object"?J.bG(t):H.cq(t)
t=H.cq(this.b)
if(typeof s!=="number")return s.eV()
return(s^t)>>>0},
n:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.q(this.d)+"' of "+H.iD(t)}}
H.iP.prototype={
n:function(a){return"RuntimeError: "+H.q(this.a)}}
H.cd.prototype={
n:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gX:function(a){return J.bG(this.a)},
I:function(a,b){if(b==null)return!1
return b instanceof H.cd&&J.aL(this.a,b.a)}}
H.l.prototype={
gw:function(a){return this.a},
gaf:function(a){return this.a===0},
gaK:function(){return new H.hW(this,[H.A(this,0)])},
gaB:function(a){return H.dB(this.gaK(),new H.hM(this),H.A(this,0),H.A(this,1))},
ad:function(a){var t
if((a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.dA(t,a)}else return this.el(a)},
el:function(a){var t=this.d
if(t==null)return!1
return this.aW(this.b6(t,this.aV(a)),a)>=0},
l:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.aP(t,b)
return s==null?null:s.gav()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.aP(r,b)
return s==null?null:s.gav()}else return this.em(b)},
em:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.b6(t,this.aV(a))
r=this.aW(s,a)
if(r<0)return
return s[r].gav()},
h:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.by()
this.b=t}this.bX(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.by()
this.c=s}this.bX(s,b,c)}else{r=this.d
if(r==null){r=this.by()
this.d=r}q=this.aV(b)
p=this.b6(r,q)
if(p==null)this.bD(r,q,[this.bz(b,c)])
else{o=this.aW(p,b)
if(o>=0)p[o].sav(c)
else p.push(this.bz(b,c))}}},
aa:function(a,b){if(typeof b==="string")return this.cf(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cf(this.c,b)
else return this.en(b)},
en:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.b6(t,this.aV(a))
r=this.aW(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.cn(q)
return q.gav()},
aJ:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
cv:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.z(new P.bl(this))
t=t.c}},
bX:function(a,b,c){var t=this.aP(a,b)
if(t==null)this.bD(a,b,this.bz(b,c))
else t.sav(c)},
cf:function(a,b){var t
if(a==null)return
t=this.aP(a,b)
if(t==null)return
this.cn(t)
this.c4(a,b)
return t.gav()},
bz:function(a,b){var t,s
t=new H.hV(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
cn:function(a){var t,s
t=a.gdO()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
aV:function(a){return J.bG(a)&0x3ffffff},
aW:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.aL(a[s].gcA(),b))return s
return-1},
n:function(a){return P.pp(this)},
aP:function(a,b){return a[b]},
b6:function(a,b){return a[b]},
bD:function(a,b,c){a[b]=c},
c4:function(a,b){delete a[b]},
dA:function(a,b){return this.aP(a,b)!=null},
by:function(){var t=Object.create(null)
this.bD(t,"<non-identifier-key>",t)
this.c4(t,"<non-identifier-key>")
return t},
$isoJ:1}
H.hM.prototype={
$1:function(a){return this.a.l(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.hV.prototype={
gcA:function(){return this.a},
gav:function(){return this.b},
gdO:function(){return this.d},
sav:function(a){return this.b=a}}
H.hW.prototype={
gw:function(a){return this.a.a},
gO:function(a){var t,s
t=this.a
s=new H.hX(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.hX.prototype={
gH:function(){return this.d},
E:function(){var t=this.a
if(this.b!==t.r)throw H.z(new P.bl(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.kL.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.kM.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.B]}}}
H.kN.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.B]}}}
H.dE.prototype={
gW:function(a){return C.H},
$isdE:1}
H.cX.prototype={$iscX:1}
H.ie.prototype={
gW:function(a){return C.I}}
H.eM.prototype={
gw:function(a){return a.length},
$isbp:1,
$asbp:function(){},
$isb3:1,
$asb3:function(){}}
H.eN.prototype={
l:function(a,b){if(b>>>0!==b||b>=a.length)H.az(H.aC(a,b))
return a[b]},
h:function(a,b,c){if(b>>>0!==b||b>=a.length)H.az(H.aC(a,b))
a[b]=c}}
H.dF.prototype={
$asbp:function(){},
$asb3:function(){},
$asO:function(){return[P.C]},
$asJ:function(){return[P.C]},
$asx:function(){return[P.C]},
$isO:1,
$isJ:1,
$isx:1}
H.dH.prototype={
$asbp:function(){},
$asb3:function(){},
$asO:function(){return[P.C]},
$asJ:function(){return[P.C]},
$asx:function(){return[P.C]}}
H.eO.prototype={
h:function(a,b,c){if(b>>>0!==b||b>=a.length)H.az(H.aC(a,b))
a[b]=c},
$isO:1,
$asO:function(){return[P.N]},
$isJ:1,
$asJ:function(){return[P.N]},
$isx:1,
$asx:function(){return[P.N]}}
H.dG.prototype={
$asbp:function(){},
$asb3:function(){},
$asO:function(){return[P.N]},
$asJ:function(){return[P.N]},
$asx:function(){return[P.N]},
$isO:1,
$isJ:1,
$isx:1}
H.dI.prototype={
$asbp:function(){},
$asb3:function(){},
$asO:function(){return[P.N]},
$asJ:function(){return[P.N]},
$asx:function(){return[P.N]}}
H.ig.prototype={
gW:function(a){return C.J},
$isO:1,
$asO:function(){return[P.C]},
$isJ:1,
$asJ:function(){return[P.C]},
$isx:1,
$asx:function(){return[P.C]}}
H.ih.prototype={
gW:function(a){return C.K},
$isO:1,
$asO:function(){return[P.C]},
$isJ:1,
$asJ:function(){return[P.C]},
$isx:1,
$asx:function(){return[P.C]}}
H.ii.prototype={
gW:function(a){return C.L},
l:function(a,b){if(b>>>0!==b||b>=a.length)H.az(H.aC(a,b))
return a[b]},
$isO:1,
$asO:function(){return[P.N]},
$isJ:1,
$asJ:function(){return[P.N]},
$isx:1,
$asx:function(){return[P.N]}}
H.ij.prototype={
gW:function(a){return C.M},
l:function(a,b){if(b>>>0!==b||b>=a.length)H.az(H.aC(a,b))
return a[b]},
$isO:1,
$asO:function(){return[P.N]},
$isJ:1,
$asJ:function(){return[P.N]},
$isx:1,
$asx:function(){return[P.N]}}
H.ik.prototype={
gW:function(a){return C.N},
l:function(a,b){if(b>>>0!==b||b>=a.length)H.az(H.aC(a,b))
return a[b]},
$isO:1,
$asO:function(){return[P.N]},
$isJ:1,
$asJ:function(){return[P.N]},
$isx:1,
$asx:function(){return[P.N]}}
H.il.prototype={
gW:function(a){return C.R},
l:function(a,b){if(b>>>0!==b||b>=a.length)H.az(H.aC(a,b))
return a[b]},
$isO:1,
$asO:function(){return[P.N]},
$isJ:1,
$asJ:function(){return[P.N]},
$isx:1,
$asx:function(){return[P.N]}}
H.im.prototype={
gW:function(a){return C.S},
l:function(a,b){if(b>>>0!==b||b>=a.length)H.az(H.aC(a,b))
return a[b]},
$isO:1,
$asO:function(){return[P.N]},
$isJ:1,
$asJ:function(){return[P.N]},
$isx:1,
$asx:function(){return[P.N]}}
H.eP.prototype={
gW:function(a){return C.T},
gw:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)H.az(H.aC(a,b))
return a[b]},
$isO:1,
$asO:function(){return[P.N]},
$isJ:1,
$asJ:function(){return[P.N]},
$isx:1,
$asx:function(){return[P.N]}}
H.io.prototype={
gW:function(a){return C.U},
gw:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)H.az(H.aC(a,b))
return a[b]},
$isO:1,
$asO:function(){return[P.N]},
$isJ:1,
$asJ:function(){return[P.N]},
$isx:1,
$asx:function(){return[P.N]}}
P.jE.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.jD.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.jF.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.jG.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.fd.prototype={
gdW:function(){return this.b.b},
gcz:function(){return(this.c&1)!==0},
gek:function(){return(this.c&2)!==0},
gcw:function(){return this.c===8},
ei:function(a){return this.b.b.bQ(this.d,a)},
eq:function(a){if(this.c!==6)return!0
return this.b.b.bQ(this.d,J.e2(a))},
ee:function(a){var t,s,r
t=this.e
s=J.aV(a)
r=this.b.b
if(H.d5(t,{func:1,args:[,,]}))return r.eF(t,s.gay(a),a.gax())
else return r.bQ(t,s.gay(a))},
ej:function(){return this.b.b.cH(this.d)},
gbA:function(){return this.a}}
P.bC.prototype={
gdL:function(){return this.a===2},
gbx:function(){return this.a>=4},
cK:function(a,b){var t,s,r
t=$.al
if(t!==C.c){t.toString
if(b!=null)b=P.ng(b,t)}s=new P.bC(0,t,null,[null])
r=b==null?1:3
this.bn(new P.fd(null,s,r,a,b,[H.A(this,0),null]))
return s},
eI:function(a){return this.cK(a,null)},
cP:function(a){var t,s
t=$.al
s=new P.bC(0,t,null,this.$ti)
if(t!==C.c)t.toString
t=H.A(this,0)
this.bn(new P.fd(null,s,8,a,null,[t,t]))
return s},
bn:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gbx()){s.bn(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.kE(null,null,t,new P.jY(this,a))}},
ce:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gbA()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gbx()){p.ce(a)
return}this.a=p.a
this.c=p.c}t.a=this.ba(a)
s=this.b
s.toString
P.kE(null,null,s,new P.k1(t,this))}},
bC:function(){var t=this.c
this.c=null
return this.ba(t)},
ba:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gbA()
t.a=s}return s},
bs:function(a){var t,s
t=this.$ti
if(H.fk(a,"$isdt",t,"$asdt"))if(H.fk(a,"$isbC",t,null))P.nb(a,this)
else P.qj(a,this)
else{s=this.bC()
this.a=4
this.c=a
P.dR(this,s)}},
b4:function(a,b){var t=this.bC()
this.a=8
this.c=new P.cI(a,b)
P.dR(this,t)},
dv:function(a){return this.b4(a,null)},
dk:function(a,b){this.a=4
this.c=a},
$isdt:1,
gbb:function(){return this.a},
gdQ:function(){return this.c}}
P.jY.prototype={
$0:function(){P.dR(this.a,this.b)},
$S:function(){return{func:1}}}
P.k1.prototype={
$0:function(){P.dR(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.jZ.prototype={
$1:function(a){var t=this.a
t.a=0
t.bs(a)},
$S:function(){return{func:1,args:[,]}}}
P.k_.prototype={
$2:function(a,b){this.a.b4(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.k0.prototype={
$0:function(){this.a.b4(this.b,this.c)},
$S:function(){return{func:1}}}
P.k4.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.ej()}catch(q){s=H.aW(q)
r=H.bt(q)
if(this.c){p=J.e2(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.cI(s,r)
o.a=!0
return}if(!!J.ah(t).$isdt){if(t instanceof P.bC&&t.gbb()>=4){if(t.gbb()===8){p=this.b
p.b=t.gdQ()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.eI(new P.k5(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.k5.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.k3.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.ei(this.c)}catch(r){t=H.aW(r)
s=H.bt(r)
q=this.a
q.b=new P.cI(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.k2.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.eq(t)===!0&&q.e!=null){p=this.b
p.b=q.ee(t)
p.a=!1}}catch(o){s=H.aW(o)
r=H.bt(o)
q=this.a
p=J.e2(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.cI(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.fb.prototype={}
P.cx.prototype={
ag:function(a,b){return new P.kh(b,this,[H.aj(this,"cx",0),null])},
gw:function(a){var t,s
t={}
s=new P.bC(0,$.al,null,[P.N])
t.a=0
this.aZ(new P.j8(t),!0,new P.j9(t,s),s.gc3())
return s},
ah:function(a){var t,s,r
t=H.aj(this,"cx",0)
s=H.a([],[t])
r=new P.bC(0,$.al,null,[[P.O,t]])
this.aZ(new P.ja(this,s),!0,new P.jb(s,r),r.gc3())
return r}}
P.j8.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.j9.prototype={
$0:function(){this.b.bs(this.a.a)},
$S:function(){return{func:1}}}
P.ja.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.lQ(function(a){return{func:1,args:[a]}},this.a,"cx")}}
P.jb.prototype={
$0:function(){this.b.bs(this.a)},
$S:function(){return{func:1}}}
P.j7.prototype={}
P.bs.prototype={
bM:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.cs()
if((t&4)===0&&(this.e&32)===0)this.c7(this.gcc())},
cE:function(a){return this.bM(a,null)},
cG:function(){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gaf(t)}else t=!1
if(t)this.r.bi(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.c7(this.gcd())}}}},
cr:function(){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.bp()
t=this.f
return t==null?$.$get$hk():t},
bp:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.cs()
if((this.e&32)===0)this.r=null
this.f=this.cb()},
b3:function(a){var t=this.e
if((t&8)!==0)return
if(t<32)this.ci(a)
else this.bo(new P.jM(a,null,[H.aj(this,"bs",0)]))},
b2:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.ck(a,b)
else this.bo(new P.jO(a,b,null))},
ds:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.cj()
else this.bo(C.u)},
b8:function(){},
b9:function(){},
cb:function(){return},
bo:function(a){var t,s
t=this.r
if(t==null){t=new P.kx(null,null,0,[H.aj(this,"bs",0)])
this.r=t}t.j(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.bi(this)}},
ci:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.bR(this.a,a)
this.e=(this.e&4294967263)>>>0
this.bq((t&4)!==0)},
ck:function(a,b){var t,s
t=this.e
s=new P.jK(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.bp()
t=this.f
if(!!J.ah(t).$isdt&&t!==$.$get$hk())t.cP(s)
else s.$0()}else{s.$0()
this.bq((t&4)!==0)}},
cj:function(){var t,s
t=new P.jJ(this)
this.bp()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.ah(s).$isdt&&s!==$.$get$hk())s.cP(t)
else t.$0()},
c7:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.bq((t&4)!==0)},
bq:function(a){var t,s
if((this.e&64)!==0){t=this.r
t=t.gaf(t)}else t=!1
if(t){t=(this.e&4294967231)>>>0
this.e=t
if((t&4)!==0)if(t<128){t=this.r
t=t==null||t.gaf(t)}else t=!1
else t=!1
if(t)this.e=(this.e&4294967291)>>>0}for(;!0;a=s){t=this.e
if((t&8)!==0){this.r=null
return}s=(t&4)!==0
if(a===s)break
this.e=(t^32)>>>0
if(s)this.b8()
else this.b9()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.bi(this)},
dh:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.ng(b,t)
this.c=c},
gbb:function(){return this.e}}
P.jK.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.d5(s,{func:1,args:[P.ap,P.cu]})
q=t.d
p=this.b
o=t.b
if(r)q.eG(o,p,this.c)
else q.bR(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.jJ.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.cI(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.fc.prototype={
gb_:function(){return this.a},
sb_:function(a){return this.a=a}}
P.jM.prototype={
bN:function(a){a.ci(this.b)}}
P.jO.prototype={
bN:function(a){a.ck(this.b,this.c)},
$asfc:function(){},
gay:function(a){return this.b},
gax:function(){return this.c}}
P.jN.prototype={
bN:function(a){a.cj()},
gb_:function(){return},
sb_:function(a){throw H.z(new P.c9("No events after a done."))}}
P.kj.prototype={
bi:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.nu(new P.kk(this,a))
this.a=1},
cs:function(){if(this.a===1)this.a=3},
gbb:function(){return this.a}}
P.kk.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gb_()
t.b=q
if(q==null)t.c=null
r.bN(this.b)},
$S:function(){return{func:1}}}
P.kx.prototype={
gaf:function(a){return this.c==null},
j:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sb_(b)
this.c=b}}}
P.dP.prototype={
aZ:function(a,b,c,d){return this.dB(a,d,c,!0===b)},
cB:function(a,b,c){return this.aZ(a,null,b,c)},
dB:function(a,b,c,d){return P.qi(this,a,b,c,d,H.aj(this,"dP",0),H.aj(this,"dP",1))},
c8:function(a,b){b.b3(a)},
dJ:function(a,b,c){c.b2(a,b)},
$ascx:function(a,b){return[b]}}
P.dQ.prototype={
b3:function(a){if((this.e&2)!==0)return
this.d8(a)},
b2:function(a,b){if((this.e&2)!==0)return
this.d9(a,b)},
b8:function(){var t=this.y
if(t==null)return
t.cE(0)},
b9:function(){var t=this.y
if(t==null)return
t.cG()},
cb:function(){var t=this.y
if(t!=null){this.y=null
return t.cr()}return},
dE:function(a){this.x.c8(a,this)},
dI:function(a,b){this.x.dJ(a,b,this)},
dG:function(){this.ds()},
dj:function(a,b,c,d,e,f,g){this.y=this.x.a.cB(this.gdD(),this.gdF(),this.gdH())},
$asbs:function(a,b){return[b]}}
P.kh.prototype={
c8:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.aW(q)
r=H.bt(q)
P.qq(b,s,r)
return}b.b3(t)}}
P.cI.prototype={
n:function(a){return H.q(this.a)},
$isci:1,
gay:function(a){return this.a},
gax:function(){return this.b}}
P.kC.prototype={}
P.kD.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.eT()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.z(t)
r=H.z(t)
r.stack=J.aH(s)
throw r},
$S:function(){return{func:1}}}
P.km.prototype={
cI:function(a){var t,s,r,q
try{if(C.c===$.al){r=a.$0()
return r}r=P.nh(null,null,this,a)
return r}catch(q){t=H.aW(q)
s=H.bt(q)
r=P.fj(null,null,this,t,s)
return r}},
bR:function(a,b){var t,s,r,q
try{if(C.c===$.al){r=a.$1(b)
return r}r=P.nj(null,null,this,a,b)
return r}catch(q){t=H.aW(q)
s=H.bt(q)
r=P.fj(null,null,this,t,s)
return r}},
eG:function(a,b,c){var t,s,r,q
try{if(C.c===$.al){r=a.$2(b,c)
return r}r=P.ni(null,null,this,a,b,c)
return r}catch(q){t=H.aW(q)
s=H.bt(q)
r=P.fj(null,null,this,t,s)
return r}},
bF:function(a,b){if(b)return new P.kn(this,a)
else return new P.ko(this,a)},
e_:function(a,b){return new P.kp(this,a)},
l:function(a,b){return},
cH:function(a){if($.al===C.c)return a.$0()
return P.nh(null,null,this,a)},
bQ:function(a,b){if($.al===C.c)return a.$1(b)
return P.nj(null,null,this,a,b)},
eF:function(a,b,c){if($.al===C.c)return a.$2(b,c)
return P.ni(null,null,this,a,b,c)}}
P.kn.prototype={
$0:function(){return this.a.cI(this.b)},
$S:function(){return{func:1}}}
P.ko.prototype={
$0:function(){return this.a.cH(this.b)},
$S:function(){return{func:1}}}
P.kp.prototype={
$1:function(a){return this.a.bR(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.k7.prototype={
gw:function(a){return this.a},
gaB:function(a){var t=H.A(this,0)
return H.dB(new P.k8(this,[t]),new P.k9(this),t,H.A(this,1))},
ad:function(a){var t,s
if(typeof a==="string"&&a!=="__proto__"){t=this.b
return t==null?!1:t[a]!=null}else if(typeof a==="number"&&(a&0x3ffffff)===a){s=this.c
return s==null?!1:s[a]!=null}else return this.dz(a)},
dz:function(a){var t=this.d
if(t==null)return!1
return this.am(t[this.al(a)],a)>=0},
l:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.dC(b)},
dC:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.al(a)]
r=this.am(s,a)
return r<0?null:s[r+1]},
h:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.lK()
this.b=t}this.c1(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.lK()
this.c=s}this.c1(s,b,c)}else this.dT(b,c)},
dT:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.lK()
this.d=t}s=this.al(a)
r=t[s]
if(r==null){P.lL(t,s,[a,b]);++this.a
this.e=null}else{q=this.am(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
aa:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.aO(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.aO(this.c,b)
else return this.bB(b)},
bB:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.al(a)]
r=this.am(s,a)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
cv:function(a,b){var t,s,r,q
t=this.bt()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.l(0,q))
if(t!==this.e)throw H.z(new P.bl(this))}},
bt:function(){var t,s,r,q,p,o,n,m,l,k,j,i
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
c1:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.lL(a,b,c)},
aO:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.qk(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
al:function(a){return J.bG(a)&0x3ffffff},
am:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.aL(a[s],b))return s
return-1}}
P.k9.prototype={
$1:function(a){return this.a.l(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.k8.prototype={
gw:function(a){return this.a.a},
gO:function(a){var t=this.a
return new P.fe(t,t.bt(),0,null,this.$ti)}}
P.fe.prototype={
gH:function(){return this.d},
E:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.z(new P.bl(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.ff.prototype={
aV:function(a){return H.qT(a)&0x3ffffff},
aW:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].gcA()
if(r==null?b==null:r===b)return s}return-1}}
P.kc.prototype={
gO:function(a){var t=new P.cE(this,this.r,null,null,[null])
t.c=this.e
return t},
gw:function(a){return this.a},
a9:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dw(b)},
dw:function(a){var t=this.d
if(t==null)return!1
return this.am(t[this.al(a)],a)>=0},
cC:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.a9(0,a)?a:null
else return this.dM(a)},
dM:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.al(a)]
r=this.am(s,a)
if(r<0)return
return J.lZ(s,r).gc5()},
j:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.c0(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.c0(r,b)}else return this.ar(b)},
ar:function(a){var t,s,r
t=this.d
if(t==null){t=P.qn()
this.d=t}s=this.al(a)
r=t[s]
if(r==null)t[s]=[this.br(a)]
else{if(this.am(r,a)>=0)return!1
r.push(this.br(a))}return!0},
aa:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.aO(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.aO(this.c,b)
else return this.bB(b)},
bB:function(a){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.al(a)]
r=this.am(s,a)
if(r<0)return!1
this.c2(s.splice(r,1)[0])
return!0},
aJ:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
c0:function(a,b){if(a[b]!=null)return!1
a[b]=this.br(b)
return!0},
aO:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.c2(t)
delete a[b]
return!0},
br:function(a){var t,s
t=new P.kd(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
c2:function(a){var t,s
t=a.gdu()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
al:function(a){return J.bG(a)&0x3ffffff},
am:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.aL(a[s].gc5(),b))return s
return-1},
$isJ:1,
$asJ:null,
$isx:1,
$asx:null}
P.kd.prototype={
gc5:function(){return this.a},
gdu:function(){return this.c}}
P.cE.prototype={
gH:function(){return this.d},
E:function(){var t=this.a
if(this.b!==t.r)throw H.z(new P.bl(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.ka.prototype={}
P.cU.prototype={
ag:function(a,b){return H.dB(this,b,H.aj(this,"cU",0),null)},
a_:function(a,b){return P.c3(this,!0,H.aj(this,"cU",0))},
ah:function(a){return this.a_(a,!0)},
gw:function(a){var t,s
t=this.gO(this)
for(s=0;t.E();)++s
return s},
n:function(a){return P.hJ(this,"(",")")},
$isx:1,
$asx:null}
P.eJ.prototype={}
P.dJ.prototype={$asO:null,$asJ:null,$asx:null,$isO:1,$isJ:1,$isx:1}
P.bq.prototype={
gO:function(a){return new H.eK(a,this.gw(a),0,null,[H.aj(a,"bq",0)])},
an:function(a,b){return this.l(a,b)},
ag:function(a,b){return new H.cW(a,b,[H.aj(a,"bq",0),null])},
a_:function(a,b){var t,s,r
t=H.a([],[H.aj(a,"bq",0)])
C.a.sw(t,this.gw(a))
for(s=0;s<this.gw(a);++s){r=this.l(a,s)
if(s>=t.length)return H.S(t,s)
t[s]=r}return t},
ah:function(a){return this.a_(a,!0)},
n:function(a){return P.eE(a,"[","]")},
$isO:1,
$asO:null,
$isJ:1,
$asJ:null,
$isx:1,
$asx:null}
P.i3.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.N+=", "
t.a=!1
t=this.b
s=t.N+=H.q(a)
t.N=s+": "
t.N+=H.q(b)},
$S:function(){return{func:1,args:[,,]}}}
P.hY.prototype={
gO:function(a){return new P.ke(this,this.c,this.d,this.b,null,this.$ti)},
gaf:function(a){return this.b===this.c},
gw:function(a){return(this.c-this.b&this.a.length-1)>>>0},
an:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=t)H.az(P.ep(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.S(s,q)
return s[q]},
a_:function(a,b){var t=H.a([],this.$ti)
C.a.sw(t,this.gw(this))
this.dV(t)
return t},
ah:function(a){return this.a_(a,!0)},
aJ:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.S(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
n:function(a){return P.eE(this,"{","}")},
cF:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.z(H.lt());++this.d
s=this.a
r=s.length
if(t>=r)return H.S(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
ar:function(a){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.S(t,s)
t[s]=a
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.c6();++this.d},
c6:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.a(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.aM(s,0,q,t,r)
C.a.aM(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=s},
dV:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.a.aM(a,0,q,r,t)
return q}else{p=r.length-t
C.a.aM(a,0,p,r,t)
C.a.aM(a,p,p+this.c,this.a,0)
return this.c+p}},
de:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$asJ:null,
$asx:null}
P.ke.prototype={
gH:function(){return this.e},
E:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.az(new P.bl(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.S(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.iX.prototype={
ai:function(a,b){var t
for(t=J.bk(b);t.E();)this.j(0,t.gH())},
a_:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.a.sw(t,this.a)
for(s=new P.cE(this,this.r,null,null,[null]),s.c=this.e,r=0;s.E();r=p){q=s.d
p=r+1
if(r>=t.length)return H.S(t,r)
t[r]=q}return t},
ah:function(a){return this.a_(a,!0)},
ag:function(a,b){return new H.ed(this,b,[H.A(this,0),null])},
n:function(a){return P.eE(this,"{","}")},
$isJ:1,
$asJ:null,
$isx:1,
$asx:null}
P.iW.prototype={}
P.bN.prototype={}
P.aA.prototype={}
P.C.prototype={$isaA:1,
$asaA:function(){return[P.bu]}}
P.bP.prototype={
ap:function(a,b){return new P.bP(C.b.ap(this.a,b.gb5()))},
aq:function(a,b){return new P.bP(C.b.bP(this.a*b))},
aE:function(a,b){return C.b.aE(this.a,b.gb5())},
aD:function(a,b){return C.b.aD(this.a,b.gb5())},
I:function(a,b){if(b==null)return!1
if(!(b instanceof P.bP))return!1
return this.a===b.a},
gX:function(a){return this.a&0x1FFFFFFF},
at:function(a,b){return C.b.at(this.a,b.gb5())},
n:function(a){var t,s,r,q,p
t=new P.fQ()
s=this.a
if(s<0)return"-"+new P.bP(0-s).n(0)
r=t.$1(C.b.a1(s,6e7)%60)
q=t.$1(C.b.a1(s,1e6)%60)
p=new P.fP().$1(s%1e6)
return""+C.b.a1(s,36e8)+":"+H.q(r)+":"+H.q(q)+"."+H.q(p)},
$isaA:1,
$asaA:function(){return[P.bP]},
gb5:function(){return this.a}}
P.fP.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.B,args:[P.N]}}}
P.fQ.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.B,args:[P.N]}}}
P.ci.prototype={
gax:function(){return H.bt(this.$thrownJsError)}}
P.eT.prototype={
n:function(a){return"Throw of null."}}
P.bH.prototype={
gbv:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbu:function(){return""},
n:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.q(t)
q=this.gbv()+s+r
if(!this.a)return q
p=this.gbu()
o=P.mi(this.b)
return q+p+": "+H.q(o)},
gG:function(a){return this.c}}
P.eY.prototype={
gbv:function(){return"RangeError"},
gbu:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.q(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.q(t)
else if(r>t)s=": Not in range "+H.q(t)+".."+H.q(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.q(t)}return s}}
P.ht.prototype={
gbv:function(){return"RangeError"},
gbu:function(){if(J.fn(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.q(t)},
gw:function(a){return this.f}}
P.aU.prototype={
n:function(a){return"Unsupported operation: "+this.a}}
P.f5.prototype={
n:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.q(t):"UnimplementedError"}}
P.c9.prototype={
n:function(a){return"Bad state: "+this.a}}
P.bl.prototype={
n:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.q(P.mi(t))+"."}}
P.iv.prototype={
n:function(a){return"Out of Memory"},
gax:function(){return},
$isci:1}
P.f3.prototype={
n:function(a){return"Stack Overflow"},
gax:function(){return},
$isci:1}
P.fK.prototype={
n:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.q(t)+"' during its initialization"}}
P.jX.prototype={
n:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.q(t)}}
P.fU.prototype={
n:function(a){return"Expando:"+H.q(this.a)},
l:function(a,b){var t,s
t=this.b7
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.az(P.fv(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.lB(b,"expando$values")
return s==null?null:H.lB(s,t)},
h:function(a,b,c){var t,s
t=this.b7
if(typeof t!=="string")t.set(b,c)
else{s=H.lB(b,"expando$values")
if(s==null){s=new P.ap()
H.mT(b,"expando$values",s)}H.mT(s,t,c)}},
gG:function(a){return this.a}}
P.N.prototype={$isaA:1,
$asaA:function(){return[P.bu]}}
P.x.prototype={
ag:function(a,b){return H.dB(this,b,H.aj(this,"x",0),null)},
bh:function(a,b){return new H.bB(this,b,[H.aj(this,"x",0)])},
a_:function(a,b){return P.c3(this,!0,H.aj(this,"x",0))},
ah:function(a){return this.a_(a,!0)},
gw:function(a){var t,s
t=this.gO(this)
for(s=0;t.E();)++s
return s},
gaG:function(a){var t,s
t=this.gO(this)
if(!t.E())throw H.z(H.lt())
s=t.gH()
if(t.E())throw H.z(H.po())
return s},
an:function(a,b){var t,s,r
if(b<0)H.az(P.c7(b,0,null,"index",null))
for(t=this.gO(this),s=0;t.E();){r=t.gH()
if(b===s)return r;++s}throw H.z(P.ep(b,this,"index",null,s))},
n:function(a){return P.hJ(this,"(",")")},
$asx:null}
P.eF.prototype={}
P.O.prototype={$asO:null,$isJ:1,$asJ:null,$isx:1,$asx:null}
P.by.prototype={
gX:function(a){return P.ap.prototype.gX.call(this,this)},
n:function(a){return"null"}}
P.bu.prototype={$isaA:1,
$asaA:function(){return[P.bu]}}
P.ap.prototype={constructor:P.ap,$isap:1,
I:function(a,b){return this===b},
gX:function(a){return H.cq(this)},
n:function(a){return H.iD(this)},
gW:function(a){return new H.cd(H.kK(this),null)},
toString:function(){return this.n(this)}}
P.cu.prototype={}
P.B.prototype={$isaA:1,
$asaA:function(){return[P.B]}}
P.dM.prototype={
gw:function(a){return this.N.length},
n:function(a){var t=this.N
return t.charCodeAt(0)==0?t:t},
gN:function(){return this.N}}
W.Z.prototype={}
W.ft.prototype={
n:function(a){return String(a)},
$isI:1,
sbe:function(a,b){return a.href=b}}
W.fu.prototype={
n:function(a){return String(a)},
$isI:1,
sbe:function(a,b){return a.href=b}}
W.fA.prototype={
sbe:function(a,b){return a.href=b}}
W.e5.prototype={}
W.cJ.prototype={$iscJ:1,$isI:1}
W.fF.prototype={
gG:function(a){return a.name}}
W.cf.prototype={$isI:1,
gw:function(a){return a.length}}
W.e7.prototype={
gae:function(a){return a.id}}
W.ch.prototype={
bZ:function(a,b){var t,s
t=$.$get$m8()
s=t[b]
if(typeof s==="string")return s
s=W.oi(b) in a?b:P.oj()+b
t[b]=s
return s},
aA:function(a,b){return a.item(b)},
gw:function(a){return a.length}}
W.eq.prototype={}
W.fI.prototype={}
W.ea.prototype={$isI:1}
W.eb.prototype={
gG:function(a){return a.name}}
W.fL.prototype={
gG:function(a){var t=a.name
if(P.mf()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.mf()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
n:function(a){return String(a)}}
W.ec.prototype={
n:function(a){return"Rectangle ("+H.q(a.left)+", "+H.q(a.top)+") "+H.q(this.gaC(a))+" x "+H.q(this.gaz(a))},
I:function(a,b){var t
if(b==null)return!1
t=J.ah(b)
if(!t.$iseZ)return!1
return a.left===t.gbL(b)&&a.top===t.gbU(b)&&this.gaC(a)===t.gaC(b)&&this.gaz(a)===t.gaz(b)},
gX:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gaC(a)
q=this.gaz(a)
return W.ne(W.cD(W.cD(W.cD(W.cD(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gaz:function(a){return a.height},
gbL:function(a){return a.left},
gbU:function(a){return a.top},
gaC:function(a){return a.width},
$iseZ:1,
$aseZ:function(){}}
W.b1.prototype={
gdZ:function(a){return new W.jR(a)},
n:function(a){return a.localName},
aj:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.mh
if(t==null){t=H.a([],[W.c4])
s=new W.eR(t)
t.push(W.nc(null))
t.push(W.nf())
$.mh=s
d=s}else d=t
t=$.mg
if(t==null){t=new W.fh(d)
$.mg=t
c=t}else{t.a=d
c=t}}if($.bQ==null){t=document
s=t.implementation.createHTMLDocument("")
$.bQ=s
$.l6=s.createRange()
s=$.bQ
s.toString
r=s.createElement("base")
J.nH(r,t.baseURI)
$.bQ.head.appendChild(r)}t=$.bQ
if(t.body==null){t.toString
s=t.createElement("body")
t.body=s}t=$.bQ
if(!!this.$iscJ)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
$.bQ.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.a.a9(C.F,a.tagName)){$.l6.selectNodeContents(q)
p=$.l6.createContextualFragment(b)}else{q.innerHTML=b
p=$.bQ.createDocumentFragment()
for(;t=q.firstChild,t!=null;)p.appendChild(t)}t=$.bQ.body
if(q==null?t!=null:q!==t)J.nG(q)
c.bV(p)
document.adoptNode(p)
return p},
e4:function(a,b,c){return this.aj(a,b,c,null)},
cZ:function(a,b,c,d){a.textContent=null
a.appendChild(this.aj(a,b,c,d))},
bk:function(a,b){return this.cZ(a,b,null,null)},
$isb1:1,
$isab:1,
$isap:1,
$isI:1,
gae:function(a){return a.id},
gca:function(a){return a.namespaceURI},
geH:function(a){return a.tagName}}
W.kF.prototype={
$1:function(a){return!!J.ah(a).$isb1},
$S:function(){return{func:1,args:[,]}}}
W.fR.prototype={
gG:function(a){return a.name}}
W.fS.prototype={
gay:function(a){return a.error}}
W.L.prototype={}
W.df.prototype={
dr:function(a,b,c,d){return a.addEventListener(b,H.e0(c,1),!1)},
dP:function(a,b,c,d){return a.removeEventListener(b,H.e0(c,1),!1)}}
W.hg.prototype={
gG:function(a){return a.name}}
W.hh.prototype={
gG:function(a){return a.name}}
W.en.prototype={
aA:function(a,b){return a.item(b)},
gw:function(a){return a.length},
gG:function(a){return a.name}}
W.hl.prototype={
gae:function(a){return a.id}}
W.hr.prototype={
gG:function(a){return a.name}}
W.hu.prototype={$isb1:1,$isI:1,$isab:1,
gG:function(a){return a.name}}
W.hP.prototype={
gG:function(a){return a.name}}
W.hU.prototype={
sbe:function(a,b){return a.href=b}}
W.hZ.prototype={
n:function(a){return String(a)}}
W.i2.prototype={
gG:function(a){return a.name}}
W.dC.prototype={
gay:function(a){return a.error}}
W.i6.prototype={
gae:function(a){return a.id}}
W.i7.prototype={
gG:function(a){return a.name}}
W.i8.prototype={
eQ:function(a,b,c){return a.send(b,c)},
bj:function(a,b){return a.send(b)}}
W.dD.prototype={
gae:function(a){return a.id},
gG:function(a){return a.name}}
W.bL.prototype={$isbL:1,$isap:1}
W.ip.prototype={$isI:1}
W.iq.prototype={
gG:function(a){return a.name}}
W.b4.prototype={
gaG:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.z(new P.c9("No elements"))
if(s>1)throw H.z(new P.c9("More than one element"))
return t.firstChild},
ai:function(a,b){var t,s,r,q
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=0;q<r;++q)s.appendChild(t.firstChild)
return},
h:function(a,b,c){var t,s
t=this.a
s=t.childNodes
if(b>>>0!==b||b>=s.length)return H.S(s,b)
t.replaceChild(c,s[b])},
gO:function(a){var t=this.a.childNodes
return new W.el(t,t.length,-1,null,[H.aj(t,"cP",0)])},
gw:function(a){return this.a.childNodes.length},
l:function(a,b){var t=this.a.childNodes
if(b>>>0!==b||b>=t.length)return H.S(t,b)
return t[b]},
$aseJ:function(){return[W.ab]},
$asdJ:function(){return[W.ab]},
$asO:function(){return[W.ab]},
$asJ:function(){return[W.ab]},
$asx:function(){return[W.ab]}}
W.ab.prototype={
geu:function(a){return new W.b4(a)},
eC:function(a){var t=a.parentNode
if(t!=null)t.removeChild(a)},
n:function(a){var t=a.nodeValue
return t==null?this.d5(a):t},
$isab:1,
$isap:1,
gew:function(a){return a.parentNode},
geA:function(a){return a.previousSibling}}
W.eQ.prototype={
gw:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.z(P.ep(b,a,null,null,null))
return a[b]},
h:function(a,b,c){throw H.z(new P.aU("Cannot assign element of immutable List."))},
an:function(a,b){if(b<0||b>=a.length)return H.S(a,b)
return a[b]},
$isO:1,
$asO:function(){return[W.ab]},
$isJ:1,
$asJ:function(){return[W.ab]},
$isx:1,
$asx:function(){return[W.ab]},
$isbp:1,
$asbp:function(){return[W.ab]},
$isb3:1,
$asb3:function(){return[W.ab]}}
W.er.prototype={
$asO:function(){return[W.ab]},
$asJ:function(){return[W.ab]},
$asx:function(){return[W.ab]},
$isO:1,
$isJ:1,
$isx:1}
W.et.prototype={
$asO:function(){return[W.ab]},
$asJ:function(){return[W.ab]},
$asx:function(){return[W.ab]},
$isO:1,
$isJ:1,
$isx:1}
W.it.prototype={
gG:function(a){return a.name}}
W.iw.prototype={
gG:function(a){return a.name}}
W.iz.prototype={
gG:function(a){return a.name}}
W.f0.prototype={
aA:function(a,b){return a.item(b)},
gw:function(a){return a.length},
gG:function(a){return a.name}}
W.iZ.prototype={
gG:function(a){return a.name}}
W.f2.prototype={}
W.j2.prototype={
gay:function(a){return a.error}}
W.j3.prototype={
gG:function(a){return a.name}}
W.f4.prototype={
aj:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.bm(a,b,c,d)
t=W.ok("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
new W.b4(s).ai(0,J.nC(t))
return s}}
W.jf.prototype={
aj:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.bm(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.r.aj(t.createElement("table"),b,c,d)
t.toString
t=new W.b4(t)
r=t.gaG(t)
r.toString
t=new W.b4(r)
q=t.gaG(t)
s.toString
q.toString
new W.b4(s).ai(0,new W.b4(q))
return s}}
W.jg.prototype={
aj:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bm(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.r.aj(t.createElement("table"),b,c,d)
t.toString
t=new W.b4(t)
r=t.gaG(t)
s.toString
r.toString
new W.b4(s).ai(0,new W.b4(r))
return s}}
W.dN.prototype={$isdN:1}
W.jk.prototype={
gG:function(a){return a.name}}
W.bz.prototype={}
W.f9.prototype={$isI:1,
gG:function(a){return a.name}}
W.d0.prototype={$isd0:1,$isab:1,$isap:1,
gG:function(a){return a.name},
gca:function(a){return a.namespaceURI}}
W.jL.prototype={
n:function(a){return"Rectangle ("+H.q(a.left)+", "+H.q(a.top)+") "+H.q(a.width)+" x "+H.q(a.height)},
I:function(a,b){var t,s,r
if(b==null)return!1
t=J.ah(b)
if(!t.$iseZ)return!1
s=a.left
r=t.gbL(b)
if(s==null?r==null:s===r){s=a.top
r=t.gbU(b)
if(s==null?r==null:s===r){s=a.width
r=t.gaC(b)
if(s==null?r==null:s===r){s=a.height
t=t.gaz(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gX:function(a){var t,s,r,q
t=J.bG(a.left)
s=J.bG(a.top)
r=J.bG(a.width)
q=J.bG(a.height)
return W.ne(W.cD(W.cD(W.cD(W.cD(0,t),s),r),q))},
$iseZ:1,
$aseZ:function(){},
gaz:function(a){return a.height},
gbL:function(a){return a.left},
gbU:function(a){return a.top},
gaC:function(a){return a.width}}
W.jP.prototype={$isI:1}
W.jQ.prototype={
gaz:function(a){return a.height},
gaC:function(a){return a.width}}
W.k6.prototype={$isI:1}
W.dV.prototype={
gw:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.z(P.ep(b,a,null,null,null))
return a[b]},
h:function(a,b,c){throw H.z(new P.aU("Cannot assign element of immutable List."))},
an:function(a,b){if(b<0||b>=a.length)return H.S(a,b)
return a[b]},
aA:function(a,b){return a.item(b)},
$isO:1,
$asO:function(){return[W.ab]},
$isJ:1,
$asJ:function(){return[W.ab]},
$isx:1,
$asx:function(){return[W.ab]},
$isbp:1,
$asbp:function(){return[W.ab]},
$isb3:1,
$asb3:function(){return[W.ab]}}
W.es.prototype={
$asO:function(){return[W.ab]},
$asJ:function(){return[W.ab]},
$asx:function(){return[W.ab]},
$isO:1,
$isJ:1,
$isx:1}
W.eu.prototype={
$asO:function(){return[W.ab]},
$asJ:function(){return[W.ab]},
$asx:function(){return[W.ab]},
$isO:1,
$isJ:1,
$isx:1}
W.ku.prototype={$isI:1}
W.jH.prototype={
gaK:function(){var t,s,r,q,p,o
t=this.a.attributes
s=H.a([],[P.B])
for(r=t.length,q=0;q<r;++q){if(q>=t.length)return H.S(t,q)
p=t[q]
o=J.aV(p)
if(o.gca(p)==null)s.push(o.gG(p))}return s},
gdK:function(){return this.a}}
W.jR.prototype={
l:function(a,b){return this.a.getAttribute(b)},
h:function(a,b,c){this.a.setAttribute(b,c)},
gw:function(a){return this.gaK().length}}
W.jU.prototype={
aZ:function(a,b,c,d){return W.na(this.a,this.b,a,!1,H.A(this,0))},
cB:function(a,b,c){return this.aZ(a,null,b,c)}}
W.lJ.prototype={}
W.jV.prototype={
cr:function(){if(this.b==null)return
this.co()
this.b=null
this.d=null
return},
bM:function(a,b){if(this.b==null)return;++this.a
this.co()},
cE:function(a){return this.bM(a,null)},
cG:function(){if(this.b==null||this.a<=0)return;--this.a
this.cm()},
cm:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.ny(r,this.c,t,!1)}},
co:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.nz(r,this.c,t,!1)}},
di:function(a,b,c,d,e){this.cm()}}
W.jW.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.dT.prototype={
aI:function(a){return $.$get$nd().a9(0,W.de(a))},
as:function(a,b,c){var t,s,r
t=W.de(a)
s=$.$get$lM()
r=s.l(0,H.q(t)+"::"+b)
if(r==null)r=s.l(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dl:function(a){var t,s
t=$.$get$lM()
if(t.gaf(t)){for(s=0;s<262;++s)t.h(0,C.E[s],W.qJ())
for(s=0;s<12;++s)t.h(0,C.h[s],W.qK())}},
$isc4:1,
gcO:function(){return this.a}}
W.cP.prototype={
gO:function(a){return new W.el(a,this.gw(a),-1,null,[H.aj(a,"cP",0)])},
$isO:1,
$asO:null,
$isJ:1,
$asJ:null,
$isx:1,
$asx:null}
W.eR.prototype={
aI:function(a){return C.a.cq(this.a,new W.is(a))},
as:function(a,b,c){return C.a.cq(this.a,new W.ir(a,b,c))},
$isc4:1}
W.is.prototype={
$1:function(a){return a.aI(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.ir.prototype={
$1:function(a){return a.as(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.dW.prototype={
aI:function(a){return this.a.a9(0,W.de(a))},
as:function(a,b,c){var t,s
t=W.de(a)
s=this.c
if(s.a9(0,H.q(t)+"::"+b))return this.d.dY(c)
else if(s.a9(0,"*::"+b))return this.d.dY(c)
else{s=this.b
if(s.a9(0,H.q(t)+"::"+b))return!0
else if(s.a9(0,"*::"+b))return!0
else if(s.a9(0,H.q(t)+"::*"))return!0
else if(s.a9(0,"*::*"))return!0}return!1},
dn:function(a,b,c,d){var t,s,r
this.a.ai(0,c)
t=b.bh(0,new W.kv())
s=b.bh(0,new W.kw())
this.b.ai(0,t)
r=this.c
r.ai(0,C.G)
r.ai(0,s)},
$isc4:1,
gcO:function(){return this.d}}
W.kv.prototype={
$1:function(a){return!C.a.a9(C.h,a)},
$S:function(){return{func:1,args:[,]}}}
W.kw.prototype={
$1:function(a){return C.a.a9(C.h,a)},
$S:function(){return{func:1,args:[,]}}}
W.kz.prototype={
as:function(a,b,c){if(this.da(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.m_(a).a.getAttribute("template")==="")return this.e.a9(0,b)
return!1}}
W.kA.prototype={
$1:function(a){return"TEMPLATE::"+H.q(a)},
$S:function(){return{func:1,args:[,]}}}
W.ky.prototype={
aI:function(a){var t=J.ah(a)
if(!!t.$isdK)return!1
t=!!t.$isax
if(t&&W.de(a)==="foreignObject")return!1
if(t)return!0
return!1},
as:function(a,b,c){if(b==="is"||C.e.bW(b,"on"))return!1
return this.aI(a)},
$isc4:1}
W.el.prototype={
E:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.lZ(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
gH:function(){return this.d}}
W.c4.prototype={}
W.kt.prototype={}
W.fh.prototype={
bV:function(a){new W.kB(this).$2(a,null)},
aQ:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)t.removeChild(a)}else b.removeChild(a)},
dS:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.m_(a)
r=s.gdK().getAttribute("is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.aW(n)}p="element unprintable"
try{p=J.aH(a)}catch(n){H.aW(n)}try{o=W.de(a)
this.dR(a,b,t,p,o,s,r)}catch(n){if(H.aW(n) instanceof P.bH)throw n
else{this.aQ(a,b)
window
m="Removing corrupted element "+H.q(p)
if(typeof console!="undefined")console.warn(m)}}},
dR:function(a,b,c,d,e,f,g){var t,s,r,q,p
if(c){this.aQ(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.aI(a)){this.aQ(a,b)
window
t="Removing disallowed element <"+H.q(e)+"> from "+J.aH(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.as(a,"is",g)){this.aQ(a,b)
window
t="Removing disallowed type extension <"+H.q(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gaK()
s=H.a(t.slice(0),[H.A(t,0)])
for(r=f.gaK().length-1,t=f.a;r>=0;--r){if(r>=s.length)return H.S(s,r)
q=s[r]
if(!this.a.as(a,J.nJ(q),t.getAttribute(q))){window
p="Removing disallowed attribute <"+H.q(e)+" "+q+'="'+H.q(t.getAttribute(q))+'">'
if(typeof console!="undefined")console.warn(p)
t.getAttribute(q)
t.removeAttribute(q)}}if(!!J.ah(a).$isdN)this.bV(a.content)}}
W.kB.prototype={
$2:function(a,b){var t,s,r,q,p
r=this.a
switch(a.nodeType){case 1:r.dS(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.aQ(a,b)}t=a.lastChild
for(r=a==null;null!=t;){s=null
try{s=J.nE(t)}catch(q){H.aW(q)
p=t
if(r){if(J.nD(p)!=null)p.parentNode.removeChild(p)}else a.removeChild(p)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.ab,W.ab]}}}
P.kl.prototype={
aH:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.b.a1(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
es:function(){this.aH()
var t=this.a
this.aH()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
dm:function(a){var t,s,r,q,p,o,n,m
t=a<0?-1:0
do{s=(a&4294967295)>>>0
a=C.b.a1(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.b.a1(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.b.a1(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.b.a1(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.b.a1(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.b.a1(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.b.a1(q-n,4294967296)&4294967295)>>>0
this.b=m
n=(n^p)>>>0
this.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o&4294967295)>>>0
this.b=o}while(a!==t)
if(o===0&&n===0)this.a=23063
this.aH()
this.aH()
this.aH()
this.aH()}}
P.fr.prototype={$isI:1}
P.ce.prototype={$isI:1}
P.fV.prototype={$isI:1}
P.fW.prototype={$isI:1}
P.fX.prototype={$isI:1}
P.fY.prototype={$isI:1}
P.fZ.prototype={$isI:1}
P.h_.prototype={$isI:1}
P.h0.prototype={$isI:1}
P.h1.prototype={$isI:1}
P.h2.prototype={$isI:1}
P.h3.prototype={$isI:1}
P.h4.prototype={$isI:1}
P.h5.prototype={$isI:1}
P.h6.prototype={$isI:1}
P.h7.prototype={$isI:1}
P.h8.prototype={$isI:1}
P.h9.prototype={$isI:1}
P.hi.prototype={$isI:1}
P.aF.prototype={$isI:1}
P.hs.prototype={$isI:1}
P.i4.prototype={$isI:1}
P.i5.prototype={$isI:1}
P.iA.prototype={$isI:1}
P.dK.prototype={$isdK:1,$isI:1}
P.ax.prototype={
aj:function(a,b,c,d){var t,s,r,q,p,o
t=H.a([],[W.c4])
t.push(W.nc(null))
t.push(W.nf())
t.push(new W.ky())
c=new W.fh(new W.eR(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.l).e4(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.b4(q)
o=t.gaG(t)
for(;t=o.firstChild,t!=null;)p.appendChild(t)
return p},
$isax:1,
$isI:1}
P.jc.prototype={$isI:1}
P.je.prototype={$isI:1}
P.cy.prototype={}
P.jl.prototype={$isI:1}
P.ju.prototype={$isI:1}
P.jv.prototype={$isI:1}
P.dS.prototype={$isI:1}
P.kq.prototype={$isI:1}
P.kr.prototype={$isI:1}
P.ks.prototype={$isI:1}
S.fs.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Math Book",H.a([$.R,$.an,$.ai],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Giant Map",H.a([$.R,$.an],s),null,!1,"Map to Staffs HQ")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Microscope",H.a([$.U,$.an,$.be],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Star Chart",H.a([$.R,$.an],s),null,!1,"Cosmic Dot-to-Dot")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("History Book",H.a([$.R,$.an],s),null,!1,"Homestuck Anthology")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Radioactive Rock",H.a([$.hC,$.eC],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Compass",H.a([$.U,$.an],s),null,!1,"Navigation Box")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.T,P.C]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.ef,$.i)
q.h(0,$.ak,$.i)
q.h(0,$.ej,$.h)
q.h(0,$.ae,$.u)
q.h(0,$.aX,$.h)
p=$.j
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.m
o=o+n+" to stop "
m=$.w
l=[U.b]
q.h(0,new R.G("Recover the Books",!1,[new U.b(o+m+"ing long enough to discover that underlings stole all the books. "),new U.b("The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "),new U.b("The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books!  ")],H.a([],l),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p=$.j
q.h(0,new R.G("Shelve the Books",!1,[new U.b("The "+p+" finds a massive library, with no books in it! They manage to get a local "+$.m+" to stop "+$.w+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.b("The "+p+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.b("The "+p+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],l),R.mU(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
p=$.j
m="The "+p+" finds a massive library, filled with books. The "
n=$.m
m=m+n+" librarian offers to help the "+p+" search for useful books. "
o="The "+p+" begins to learn about "
k=$.o
n=o+k+" and how they have persecuted the "+n+"s.  "
k="The "+p+" has read the final book about "+k+" and feels much more prepared to face them.  "
p=this.y
q.h(0,new R.G("Research the Denizen",!1,[new U.b(m),new U.b(n),new U.b(k)],H.a([],l),R.cY(),!1,!1,new Y.am("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.h)
p=this.r
p.h(0,new X.r(s,q,null),$.aa)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.di,$.u)
s.h(0,$.aX,$.i)
o=$.j
n="The "+o+"  is approached by a "
m=$.m
s.h(0,new R.G("Do the Math",!1,[new U.b(n+m+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.b("The "+o+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.b("The "+m+"  finds a "+m+" child "+$.w+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+o+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],l),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
o=$.j
m="The "+o+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
n=$.m
s.h(0,new R.G("Use the Calculator",!1,[new U.b(m),new U.b("BZAP!  There are now two "+n+"s.  BZAP!  Now there are four.  The "+o+" is getting the hang of this weird calculator that controls reality. "),new U.b("With a frantic "+$.w+", a small "+n+" sprints towards the "+o+".  A giant ogre is chasing them.  In a panic, the "+o+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],l),R.cr(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
o=$.j
s.h(0,new R.G("Solve the Equation",!1,[new U.b("The "+o+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.b("There is a flurry of motion.  The "+o+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.b("The "+o+" has done it. Against all odds they have solved the equation.  A "+$.m+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],l),R.cY(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
p.h(0,new X.r(q,s,null),$.aa)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.di,$.u)
t.h(0,$.aX,$.i)
t.h(0,$.aD,$.u)
t.h(0,$.mm,$.u)
r=$.j
q="The "+r+"  is approached by a "
o=$.m
q=q+o+" who offers them a grant to study "
n=$.V
t.h(0,new R.G("Test the Hypothesis",!1,[new U.b(q+n+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.b("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.b("The Symposium has started. The crowd of unruly "+o+"s begins "+$.w+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+n+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],l),R.cY(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
n=$.m
r="Too many local "+n+" have fallen ill from a mysterious plague.  Those inflicted are too weak to even "
o=$.w
r=r+o+".  It is up to the "
q=$.j
r=r+q+" to figure out how to cure the disease.  They are provided with a state of the art lab and a team of ...not completely terrible "+n+"s."
m="The "+q+" has gotten far too little sleep. Suddenly, they realize the key, the one thing they have been missing: "
k=$.V
t.h(0,new R.G("Make the Cure",!1,[new U.b(r),new U.b(m+k+". It all makes sense now! "),new U.b("Each "+n+" lines up to receive their "+k+" injection. The sound of joyful "+o+" fills the air. The plague is defeated!  The "+q+" has a statue made of them in the town center. ")],H.a([],l),R.c5(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
q=$.j
t.h(0,new R.G("Be the Scientist",!1,[new U.b("The "+q+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.b("The "+q+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.b("The "+q+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.w+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.m+"s are inside the final room, outfitted for a surprise party.  It is for "+q+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],l),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(s,t,null),$.aa)},
gA:function(){return this.cx},
ga3:function(){return this.cy},
ga4:function(){return this.db},
gu:function(){return this.dx},
ga5:function(){return this.dy}}
L.fx.prototype={
$1:function(a){return!a.gaX()},
$S:function(){return{func:1,args:[L.bO]}}}
L.bO.prototype={
q:function(){var t,s
t=Q.t(null,null,A.Q)
s=A.f("Perfectly Generic Object",H.a([],[G.M]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.a.j(t.b,new Q.e(s,t.k(s,1),[H.A(t,0)]))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.T,P.C]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bv,$.h)
q.h(0,$.ak,$.u)
q.h(0,$.bX,$.h)
q.h(0,$.aD,$.i)
q.h(0,$.cL,$.u)
p=$.j
o="The "+p+" learns that all of the local "
n=$.m
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.w+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.o
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.aG+". The "+p+" has won! "
i=[U.b]
q.h(0,new R.E("Revive the Consorts",!1,[new U.b(o),new U.b(m),new U.b(n),new U.K(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
j=this.c
j.h(0,new X.r(s,q,null),$.ac)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.dq,$.h)
s.h(0,$.dn,$.u)
s.h(0,$.dp,$.i)
s.h(0,$.b8,$.h)
s.h(0,$.aN,$.u)
p=$.j
o="The "+p+" learns that all of the local "
n=$.m
o=o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "
m="The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "
l="The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.w+"ing and chaos everywhere. "
n="The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". "
k="It is time for the "+p+"  to finally face the "
h=$.o
k=k+h+". "
g="The "+h+" lies slain by the "+p+"'s "+$.aG+". The "+p+" has won! "
s.h(0,new R.E("Produce the Goods",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(n),new U.K(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
j.h(0,new X.r(q,s,null),$.ac)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.ae,$.h)
t.h(0,$.ak,$.u)
t.h(0,$.aE,$.i)
r=$.j
q="The "+r+" learns that all of the local "
p=$.m
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
n=$.w
o=o+n+"ing about? A prophecy?  "
n="The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+n+" once. "
p="It is time for the "+r+"  to finally face the "
m=$.o
p=p+m+". "
l="The "+m+" lies slain by the "+r+"'s "+$.aG+". The "+r+" has won! "
t.h(0,new R.G("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o),new U.b(n),new U.K(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.lC(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.u)
l=$.j
r="The "+l+" learns that all of the local "
m=$.m
r=r+m+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+l+" fluffs more pillows than any other Player ever has before them. "
m="The "+l+"  teaches the local "+m+"s to find their chill. "
n="It is time for the "+l+"  to finally face the "
o=$.o
n=n+o+". "
q="The "+o+" lies slain by the "+l+"'s "+$.aG+". The "+l+" has won! "
t.h(0,new R.E("Relax the Consorts",!1,[new U.b(r),new U.b(p),new U.b(m),new U.K(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
j.h(0,new X.r(s,t,null),$.ac)},
n:function(a){return this.x},
L:function(a,b,c,d){var t=this.x
this.d=new X.ee("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+t+".xml",!1,H.a([],[X.e6]),H.a([],[M.dg]))
this.y=t
this.e=t+".png"
this.f=t+"Big.png"
this.q()
this.p()
t=this.b
if($.$get$e3().ad(t))H.az("Duplicate aspect id for "+this.n(0)+": "+t+" is already registered for "+J.aH($.$get$e3().l(0,t))+".")
$.$get$e3().h(0,t,this)},
gae:function(a){return this.b},
gG:function(a){return this.x},
gbJ:function(){return this.z},
gaX:function(){return this.Q},
gbd:function(){return this.ch},
gcM:function(){return this.cx},
gaL:function(){return this.db},
gK:function(){return this.dx},
gu:function(){return this.dy},
ga2:function(){return this.fr},
gS:function(){return this.fx},
gT:function(){return this.fy},
ga0:function(){return this.k1},
gR:function(){return this.k2},
gD:function(){return this.k3},
gA:function(){return this.k4}}
L.W.prototype={}
M.fy.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Barbells",H.a([$.aP,$.hA,$.U],s),null,!1,"Strength Building Metal")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Basketball",H.a([$.hy,$.dx],s),null,!1,"Dunksphere")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Baseball Bat",H.a([$.mB,$.at],s),null,!1,"Wooden Pole of Bone Hurting")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Rubber Ball",H.a([$.hy,$.dx],s),null,!1,"Dead Animal Corpse Ball")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Megaphone",H.a([$.c1,$.av],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Hockey Stick",H.a([$.mB,$.at,$.cT],s),null,!1,"L Shaped Bone Hurter")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Trophy",H.a([$.U,$.eD],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Boxing Glove",H.a([$.p0,$.dx],s),null,!1,"Fist Reinforcing Pain Cubes")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Yoga Mat",H.a([$.dx,$.bm],s),null,!1,"Flesh Rubberising Practice Mat")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.T,P.C]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bY,$.u)
q.h(0,$.aI,$.i)
q.h(0,$.b8,$.u)
p=$.j
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.m
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.w+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.b]
q.h(0,new R.G("Enter the Dungeon",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.n(),!1,!1,new Y.am("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.p)
m=$.j
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.m
q.h(0,new R.G("Clear the Road",!1,[new U.b(p+n+" merchants waiting for it to be cleared. "),new U.b("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.b("With a triumphant "+$.w+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.c5(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
m=$.j
n="The "+m+"  wanders into a bunch of "
p=$.m
q.h(0,new R.G("Be the Strongest",!1,[new U.b(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.b("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.b("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.eX(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
m=this.r
m.h(0,new X.r(s,q,null),$.aa)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.bY,$.i)
t.h(0,$.ds,$.i)
t.h(0,$.aI,$.i)
s=$.j
r="The "+s+" finds a team of underdog "
p=$.m
t.h(0,new R.G("Save the Sports",!1,[new U.b(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.b("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.b("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.mU(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
p=$.m
s="A group of "+p+"s approach the "
r=$.j
s=s+r+". Apparently their sports team lost their coach to the "+$.o+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.w
t.h(0,new R.G("Coach the Sports",!1,[new U.b(s),new U.b(o),new U.b(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.c5(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
k=$.m
p="A group of "+k+"s approach the "
r=$.j
t.h(0,new R.G("Win at Sports",!1,[new U.b(p+r+". Apparently their sports team lost a member to the "+$.o+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.b("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.b("The "+r+" ganks the "+$.V+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(q,t,null),$.aa)},
gA:function(){return this.cx},
ga3:function(){return this.cy},
ga4:function(){return this.db},
gu:function(){return this.dx},
ga5:function(){return this.dy}}
O.fz.prototype={
ao:function(){return!0},
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Cod Piece",H.a([$.af,$.ag,$.bd,$.D],s),"God damn it, MI. ",!1,null)
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Poisoned Candy",H.a([$.mA,$.D,$.lq],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Cursed Lyre",H.a([$.aQ,$.at,$.bc,$.D,$.aZ],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Snare Trap",H.a([$.af,$.aQ,$.D,$.eA],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
a6:function(){return 2},
a7:function(){return 0.5},
a8:function(){return 3},
p:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.C])
t.h(0,$.b2,$.h)
t.h(0,$.ei,$.h)
t.h(0,$.aO,$.h)
t.h(0,$.bU,$.h)
t.h(0,$.bb,$.h)
t.h(0,$.dh,$.h)
r="After all the bullshit the "+$.o+" has put the native "
q=$.m
r=r+q+"s through, the "
p=$.j
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.ad+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.w
m=[U.b]
t.h(0,new R.P("Celebrate the Win",!1,[new U.b(r),new U.b(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.b(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.n(),!1,!1,new Y.ct("Rewards/no_reward.png",null),1,null,null),$.p)
p=$.m
n="A group of jubilant "+p+"s are following the "
q=$.j
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.w
t.h(0,new R.P("Lead the Parade",!1,[new U.b(n),new U.b(o+r+"ing about how they defeated the "+$.o+". Wow, this is actually kind of embarrasing. "),new U.b("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
q=$.j
t.h(0,new R.P("Behold the Glory of CodTier",!1,[new U.b("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.o+" has been defeated, perhaps they can finally focus on finding it."),new U.b("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.n(),!1,!1,new Y.fG("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.p)
q="The "+$.o+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.j
q=q+r+" organizes a huge festival for all the "
p=$.m
t.h(0,new R.aq("Pull the Strings of a Universe",!1,[new U.b(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.b("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.b("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.aw(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
this.c.h(0,new X.r(s,t,null),$.au)},
gu:function(){return this.k1},
gV:function(){return this.k2},
gU:function(){return this.k3},
gD:function(){return this.k4}}
T.fB.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Mystical Vial of Blood",H.a([$.be,$.bc,$.F,$.bK],s),null,!1,"Vial of Not-ABs Oil")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Bananaphone",H.a([$.c0,$.bc,$.F,$.bx],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Friendship Bracelet",H.a([$.af,$.bc,$.F,$.bK,$.ll],s),null,!1,"Soul Binding Wrist Shackle")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Bonding Manacles",H.a([$.U,$.eA,$.F,$.bK,$.ll,$.aS],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Friendship Stairs",H.a([$.at,$.mG,$.bc,$.bK,$.F,$.ag],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.T,P.C]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bR,$.h)
q.h(0,$.mr,$.h)
q.h(0,$.aD,$.i)
p=$.j
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.m
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.V+" and some boondollars in compensation."
n=this.r2
k=[U.b]
q.h(0,new R.G("Cross the Lake",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(p)],H.a([],k),R.c5(),!1,!1,new Y.am("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.p)
n=$.m
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.w+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.o
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.j
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.aG+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.h(0,new R.E("Unplug the Rivers",!1,[new U.b(p),new U.b(o),new U.b(j),new U.K(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
n=this.c
n.h(0,new X.r(s,q,null),$.ac)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.b8,$.h)
s.h(0,$.bb,$.u)
s.h(0,$.ae,$.u)
s.h(0,$.lh,$.h)
s.h(0,$.aO,$.u)
p=$.j
o="The "+p+"  and the "
m=$.c6
o=o+m+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
l="The "+p+"  and the "+m+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
j="The "+p+"  and the "+m+" trust each other to have their backs.  So when the "
i=$.o
j=j+i+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+i+"."
h="Slaying the "+i+" proves the POWER OF TEAMWORK!"
s.h(0,new R.E("Learn the Power of Teamwork",!1,[new U.b(o),new U.b(l),new U.K(j,"The "+p+" and "+m+" end up getting distracted bickering after one of the "+i+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.cs(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.a9)
h=$.j
i="The "+h+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
m=$.m
i=i+m+"s explains that before  "
p=$.o
i=i+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+m+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+h+" vows to help. "
m="The "+h+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+m+"s discover that "+m+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
j="The "+h+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
l="The "+h+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+h+"'s "+$.aG+". The "+h+" is finally free to restore the chains, bringing peace and understanding to the land. "
s.h(0,new R.E("Chain the Towers",!1,[new U.b(i),new U.b(m),new U.b(j),new U.K(l,"The tyranny  and xenophobia of "+p+" continues with the defeat of the "+h+".",o)],H.a([],k),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
o=$.j
h="The "+o+" learns of the "
p=$.ad
h=h+p+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
l=$.m
h=h+l+" explains that the "
j=$.o
l=h+j+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+l+"s from communciating with other villages and risking the entire planet falling apart.  "
h="The "+o+" hears of a fantastical secret kept at the top of the "+p+" Tower. It is said that the "+j+" seeks to topple it to gain this secret. Perhaps the "+o+" is small enough to climb the tower to claim it themselves?"
m="The "+o+" defeats a fearsome "+j+" minion, whose death unlocks the most direct path to the "+p+" Tower . "
i="The "+o+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+j+". "
o="The "+j+" lies slain by the "+o+"'s "+$.aG+". The "+o+" is finally able to see what lies at the top of the "+p+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.h(0,new R.E("Protect the Beams",!1,[new U.b(l),new U.b(h),new U.b(m),new U.K(i,"The "+p+" Tower is more at risk than ever before.",o)],H.a([],k),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
o=$.j
p="They say it can't be done, but the "+o+" is confident that they can become friends with every single "
i=$.m
p=p+i+" on "+$.ad+"book. They start small, just talking to any "+o+" that wanders by. They know they can do this!"
m="Oh god. Less than 10% of the "+o+" population have been friended. The "+o+" is starting to think that maybe they understimated how hard this would be. "
i="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+i+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+o+" schmoozes the right few "+i+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
o="The "+$.cO+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.h(0,new R.P("One Degree of Separation",!1,[new U.b(p),new U.b(m),new U.b(i)],H.a([],k),R.cY(),!1,!1,new Y.y("Friend Request",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
o=$.j
i="They say it can't be done, but the "+o+" is confident that they can become friends with every single "+$.m+" on "
m=$.ad
i=i+m+"book. They start small, just talking to any "+o+" that wanders by. They know they can do this!"
p="Oh god. Less than 10% of the "+o+" population have been friended. The "+o+" is starting to think that maybe they understimated how hard this would be. "
m="The "+o+" decides that doing things the hard way is for chumps and just hacks into "+m+"book to steal all the friends. Yay, they win! They are the best! "
o="The "+$.cO+" is now more popular with your friends than you are."
s.h(0,new R.P("Steal The Friends",!1,[new U.b(i),new U.b(p),new U.b(m)],H.a([],k),R.lD(),!1,!1,new Y.y("Friend Stealer",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
o=$.j
m="The "+o+"  and the "
p=$.c6
m=m+p+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
i="The "+o+"  and the "+p+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
h=$.o
i=i+h+" doing here!?"
h="Slaying the "+h+" proves to be the thing that finally pushes the "+o+" and "+p+" together."
s.h(0,new R.E("Pale Shipping Dungeon",!1,[new U.b(m),new U.K(i,"The "+o+" and "+p+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.q(C.j)+".",h)],H.a([],k),R.cs(),!1,!1,new Y.eV(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.a9)
n.h(0,new X.r(q,s,null),$.ac)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.ae,$.h)
t.h(0,$.ak,$.u)
t.h(0,$.aE,$.i)
r="In the wake of the defeat of the "+$.o+" it becomes really how isolated the individual "
q=$.m
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.j
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.cO+" to kick your ass, but luckily they have several."
t.h(0,new R.P("Connect The Villages",!1,[new U.b(r),new U.b(p),new U.b(q)],H.a([],k),R.c5(),!1,!1,new Y.y("Community Builder",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
o=$.j
q="The "+o+" learns that two prominent "
p=$.m
q=q+p+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+p+"s pick a side, and everyone is suffering."
r="The "+o+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
m="In a dramatic reveal, the "+o+" discovers that "
l=$.o
m=m+l+" is responsible for the feud. The two "+p+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
j="The "+o+" confronts "+l+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+o+" be able to claim it?"
p="The "+l+" lies slain by the "+o+"'s "+$.aG+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.w+"ing. "
t.h(0,new R.E("Stop the Feud",!1,[new U.b(q),new U.b(r),new U.b(m),new U.K(j,"The deception of "+l+" continues with the defeat of the "+o+".",p)],H.a([],k),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(s,t,null),$.ac)},
gK:function(){return this.ry},
gT:function(){return this.x1},
gu:function(){return this.x2},
gD:function(){return this.y1},
gS:function(){return this.y2},
ga0:function(){return this.m},
gR:function(){return this.t},
ga2:function(){return this.v},
gA:function(){return this.J}}
T.fD.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Pan's Pipe",H.a([$.aZ,$.at,$.bc,$.F],s),null,!1,"Smonkin Weeds Pipe")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Skeleton Key",H.a([$.cQ,$.F],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Inspector's Fan",H.a([$.av,$.U,$.bc,$.F],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Jet Pack",H.a([$.c2,$.U,$.c1,$.F,$.ag],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.T,P.C]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.aE,$.i)
q.h(0,$.ds,$.h)
q.h(0,$.ae,$.i)
p=$.j
o="The "+p+" tries posting a letter through the "
n=$.V
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.o
o=o+m+" has screwed with the mail system, crippling the "
l=$.m
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.aG+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
i=[U.b]
q.h(0,new R.E("The Mail Goes Through",!1,[new U.b(o),new U.b(k),new U.b(n),new U.K(j,"The tyranny of "+m+" continues with the defeat of the "+p+".",l)],H.a([],i),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
l=this.c
l.h(0,new X.r(s,q,null),$.ac)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.ak,$.h)
s.h(0,$.ds,$.i)
s.h(0,$.ae,$.i)
s.h(0,$.aI,$.i)
s.h(0,$.aE,$.i)
p=$.j
o="The "+p+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+p+" decides that they should use the winds of their land for more projects. "
n="The "+p+" starts learning the uses of their lands "
m=$.V
n=n+m+" in manipulation of wind. Their future constructions are going to be amazing. "
m="The "+p+" uses "+m+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
k=$.m
k=m+k+" fields. The "+k+"s "+$.w+"ing is so joyful it's literally deafening. "
m=$.o
j=m+" is attacking the happy wind based farming community. The "+p+" has worked too hard for it all to be lost now. There can be no mercy. "
h="The "+m+" lies slain by the "+p+"'s "+$.aG+". The "+p+" is finally free to continue improving the land with wind. "
s.h(0,new R.E("Thinking With Wind Power",!1,[new U.b(o),new U.b(n),new U.b(k),new U.K(j,"The tyranny of "+m+" continues with the defeat of the "+p+".",h)],H.a([],i),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
l.h(0,new X.r(q,s,null),$.ac)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.aN,$.h)
t.h(0,$.ms,$.h)
t.h(0,$.ds,$.u)
t.h(0,$.aE,$.u)
r=$.j
q="The "+r+" is chilling in a "+$.m+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.o
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.V
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.ad+" to do control the storms in the first place, and it was inside them all along.  "
m=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.aG+". The "+r+" has become the storm master. It is them. "
t.h(0,new R.E("The Winds of Change",!1,[new U.b(q),new U.b(o),new U.b(n),new U.K(m,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
l.h(0,new X.r(s,t,null),$.ac)},
gK:function(){return this.ry},
gT:function(){return this.x1},
gu:function(){return this.x2},
gD:function(){return this.y1},
gS:function(){return this.y2},
ga0:function(){return this.m},
gR:function(){return this.t},
ga2:function(){return this.v},
gA:function(){return this.J}}
Z.fE.prototype={
p:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Skateboards","Bikes","Ramps"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.C])
t.h(0,$.bY,$.p)
t.h(0,$.aI,$.u)
t.h(0,$.dl,$.h)
t.h(0,$.dj,$.a9)
t.h(0,$.mu,$.u)
r=$.j
q="The "+r+" is a bit confused about SBURB. apparently it's about "
p=$.V
q=q+p+"s or some noise?"
p="The "+r+" is sure that "+p+"s are like fucking dynamite in a handbag for some brosephs. But all they're saying is, when do you get to <b>thrash</b> anything?"
o="The "+r+' gives up on playing the game for now, and decides to instead bust out, and I quote, "the mad stunts all wicked up-ins".'
n=$.o
m="So ok. <br></br> An end to the disasters caused by "+n+" is something that a lot of "+$.m+"s seem hella pumped of. And their lair is sitting right in front of the "+r+", so they're like, yeah man I'll fight it."
n+=" is so wasted, ha ha. I mean damn."
l=[U.b]
t.h(0,new R.E("Bust Out the Mad Stunts all Wicked Up-Ins",!1,[new U.b(q),new U.b(p),new U.b(o),new U.K(m,"the "+r+" has failed, and the consorts remain in jeopardy of getting mud on their doll's dresses or whatever.",n)],H.a([],l),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.u)
n=$.j
r="At this point, the "+n+" would like to give a shout out to their boy "
m=$.c6
r=r+m+". the two are about to go chill in front of The Dark "+$.w+", and are so psyched of it."
o="The "+m+" was leaning against the screen door when the shit popped open. they slip down the steps and break their thumb on the lawn. It wasn't a long fall, but hey I guess a thumb bone wasn't made for supporting the brunt of a huge useless tool against wet grass."
n="The "+n+" and the "+m+" didn't actually go see the movie on account of a "+$.m+" trucking his bawling "+$.V+"-ass girth into the hospital. the "+n+" give it 1.5 "
p=$.ad
t.h(0,new R.P("Give a Shout-Out to their Boy",!1,[new U.b(r),new U.b(o),new U.b(n+p+"s out of 5 "+p+"s anyways, to keep it real. <br></br>It's OK though, The "+m+" still has another watch in them, Brotel Rwanda.")],H.a([],l),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.u)
this.c.h(0,new X.r(s,t,null),$.ac)},
Y:function(){return!0},
F:function(a){return!0},
Z:function(){return this.F(0)},
a6:function(){return 2},
a7:function(){return 2},
a8:function(){return 2},
gu:function(){return this.k1},
gV:function(){return this.k2},
gU:function(){return this.k3},
gD:function(){return this.x2},
gA:function(){return this.y1},
gaL:function(){return this.m}}
A.fH.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Colonel Sassacre's Daunting Text ",H.a([$.R,$.aP,$.bx,$.hA],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Wise Guy Book",H.a([$.R,$.bx],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Beagle Puss",H.a([$.be,$.bx],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Novelty Microphone",H.a([$.c1,$.av,$.bx],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Banana",H.a([$.c0,$.bx],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Fake Flower",H.a([$.af,$.bx],s),null,!1,"Flower that smells like Plastic")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Trick Handcuffs",H.a([$.U,$.bx],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.T,P.C]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.aO,$.i)
q.h(0,$.ba,$.h)
q.h(0,$.aI,$.i)
p=$.j
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.m
o=o+n+"s are too scared to even "+$.w+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.o+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.b]
q.h(0,new R.G("Defeat the Army",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.n(),!1,!1,new Y.am("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.p)
p=this.r
p.h(0,new X.r(s,q,null),$.aa)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.bY,$.u)
s.h(0,$.aI,$.h)
s.h(0,$.ba,$.h)
s.h(0,$.b2,$.h)
o=$.j
n="The "+o+" learns of an Open Mic Nite at the "
m=$.ad
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.m
s.h(0,new R.G("Win the Laughs",!1,[new U.b(n),new U.b(k+j+"s let out a braying "+$.w+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "),new U.b("It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! ")],H.a([],l),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,s,null),$.aa)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.bw,$.u)
t.h(0,$.aM,$.i)
t.h(0,$.ba,$.h)
t.h(0,$.aI,$.i)
t.h(0,$.l9,$.i)
r=$.j
q="The "+r+"  is approached by a Crafty "
o=$.m
q=q+o+" who offers them a magical "
n=$.V
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.w
t.h(0,new R.G("Trick the Villain",!1,[new U.b(q),new U.b(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.b("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(s,t,null),$.aa)},
gA:function(){return this.cx},
ga3:function(){return this.cy},
ga4:function(){return this.db},
gu:function(){return this.dx},
ga5:function(){return this.dy}}
M.fJ.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Can of Spray Paint",H.a([$.aR,$.U],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Sensible Chuckles Magazine",H.a([$.R,$.ar,$.bx,$.ai],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Gentleman's Razor",H.a([$.ph,$.U,$.cR],s),null,!1,"Face Cutting Hair Remover")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("How To Draw Manga",H.a([$.R,$.ar,$.ai],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Painting of a Horse Boxing a Football Player",H.a([$.aR,$.aJ,$.R],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Collection of Classical Works",H.a([$.ar,$.R],s),null,!1,"Book of Naked Renaissance People")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Documentary on Horses",H.a([$.ar,$.as,$.aJ],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Paint Set",H.a([$.aR,$.ar],s),null,!1,"Pain Drink Set")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Shaving Cream",H.a([$.c2,$.ar,$.U],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Classy Suit",H.a([$.af,$.ar],s),null,!1,"Georgio Armani Suit")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("The Fatherly Gent's Shaving Almanac ",H.a([$.R,$.ar,$.ai],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.T,P.C]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.cj,$.i)
q.h(0,$.aX,$.h)
q.h(0,$.ae,$.i)
p=$.j
o="The "+p+" visits a beautiful "
n=$.V
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.m
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.o+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.w+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.b]
q.h(0,new R.G("Catch the Thief",!1,[new U.b(o),new U.b(l),new U.b(n)],H.a([],p),R.n(),!1,!1,new Y.am("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.p)
m=this.r
m.h(0,new X.r(s,q,null),$.aa)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.bY,$.u)
s.h(0,$.aI,$.i)
s.h(0,$.ba,$.u)
s.h(0,$.ak,$.i)
s.h(0,$.b2,$.h)
o=$.j
n="The "+o+" finds a troupe of dejected looking "
l=$.m
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.ad
l=l+n+" "
k=$.V
s.h(0,new R.G("Perform the Play",!1,[new U.b(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.b("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.b("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.w+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(q,s,null),$.aa)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.ei,$.u)
t.h(0,$.aO,$.u)
t.h(0,$.dh,$.u)
t.h(0,$.aM,$.u)
t.h(0,$.ak,$.i)
t.h(0,$.ae,$.i)
r=$.j
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.w
q=q+o+"ingworth, "
n=$.m
t.h(0,new R.G("Attend the Dinner Party",!1,[new U.b(q+n+" heiress to the "+$.V+" fortune. "),new U.b("The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "),new U.b("It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. ")],H.a([],p),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(s,t,null),$.aa)},
gA:function(){return this.cx},
ga3:function(){return this.cy},
ga4:function(){return this.db},
gu:function(){return this.dx},
ga5:function(){return this.dy}}
V.fM.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Trendy Fabric",H.a([$.aR,$.af],s),null,!1,"Weird Tasting Candy Paper")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Necklace",H.a([$.aR,$.mD,$.ll],s),null,!1,"Nasty Candy Necklace")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Sewing Needle",H.a([$.U,$.pd,$.ez],s),null,!1,"Cloth Stabbing Knife")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=$.lj
r=A.f("Broom",H.a([r,$.at,$.aP,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Rolling Pin",H.a([$.at,$.pk,$.aP],s),null,!1,"Babushkas Punishment Pole")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Velvet Pillow",H.a([$.af,$.bm,$.bc,$.aR,$.lo],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Yarn Ball",H.a([$.aR,$.af],s),null,!1,"Cats Plaything")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Refrigerator",H.a([$.aS,$.hA,$.U,$.c_],s),null,!1,"Food Hardening Box")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Photo Album",H.a([$.aR,$.R],s),null,!1,"Memory Book")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Ice Cubes",H.a([$.c_],s),null,!1,"Hard Water")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Cast Iron Skillet",H.a([$.U,$.c2,$.aP,$.hA,$.p1],s),null,!1,"Fancy Unstoppable Weapon")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Failed Dish",H.a([$.lq],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Potted Plant",H.a([$.aR,$.lk,$.dw],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Chicken Leg",H.a([$.c0,$.cS,$.cQ],s),null,!1,"Thicc Chicken")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Juicy Steak",H.a([$.c0,$.cS],s),null,!1,"Juicy Cow Flesh")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Wedding Cake",H.a([$.aR,$.c0,$.bK],s),null,!1,"The Only Benefit of a Wedding")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.T,P.C]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.b2,$.i)
q.h(0,$.bb,$.i)
q.h(0,$.aO,$.u)
p=$.j
o="The "+p+" is visited by a Beautiful "
n=$.m
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.V
l=[U.b]
q.h(0,new R.G("Design the Dress",!1,[new U.b(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.b(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.b("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.w+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
n=this.r
n.h(0,new X.r(s,q,null),$.aa)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aO,$.h)
s.h(0,$.aI,$.i)
s.h(0,$.dh,$.h)
s.h(0,$.bU,$.i)
s.h(0,$.ak,$.h)
p=$.j
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.V
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.m
s.h(0,new R.G("Bake the Cake",!1,[new U.b(o),new U.b(m),new U.b("It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.w+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! ")],H.a([],l),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(q,s,null),$.aa)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.dj,$.h)
t.h(0,$.ak,$.i)
t.h(0,$.dk,$.h)
t.h(0,$.ae,$.i)
t.h(0,$.lh,$.h)
r=$.j
q="The "+r+" finds a loom, and a Wizened "
p=$.m
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.V
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.w+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.h(0,new R.G("Weave the Cloth",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.n(),!1,!1,new Y.am("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(s,t,null),$.aa)},
gA:function(){return this.cx},
ga3:function(){return this.cy},
ga4:function(){return this.db},
gu:function(){return this.dx},
ga5:function(){return this.dy}}
U.fN.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("~ATH - A Handbook for the Imminently Deceased ",H.a([$.ai,$.av,$.R,$.aQ,$.F,$.ag],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Egg Timer",H.a([$.as,$.bc,$.F,$.aQ],s),null,!1,"Egg That Counts Down to Your Death")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Skull Timer",H.a([$.cQ,$.bc,$.F,$.aQ],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Poison Flask",H.a([$.be,$.F,$.lq],s),null,!1,"Glass of Bone Hurting Juice")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Ice Gorgon Head",H.a([$.be,$.F,$.c_,$.aQ,$.eA,$.hF,$.bn],s),null,!1,"Oddly Attractive Decapitated Head")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Obituary",H.a([$.aS,$.bn,$.aQ,$.R,$.F],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.T,P.C]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bX,$.h)
q.h(0,$.bv,$.i)
q.h(0,$.ds,$.u)
q.h(0,$.ak,$.u)
q.h(0,$.aD,$.i)
p=$.j
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.m
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.V
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.o
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.aG+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.b]
q.h(0,new R.E("Empty the Graves",!1,[new U.b(o),new U.b(m),new U.b(l),new U.K(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
n=this.c
n.h(0,new X.r(s,q,null),$.ac)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.bX,$.h)
s.h(0,$.bv,$.i)
s.h(0,$.dr,$.a9)
s.h(0,$.dm,$.i)
s.h(0,$.mm,$.i)
s.h(0,$.bR,$.i)
s.h(0,$.bv,$.i)
s.h(0,$.ak,$.u)
s.h(0,$.aD,$.i)
s.h(0,$.bS,$.i)
p=$.j
o="The "+p+" has found a group of Violent "
m=$.m
o=o+m+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
l=$.ad
o=o+l+"', the fuel their post apocalyptic society runs on. "
k="The "+p+" has survived a small assault team of Violent "+m+"s, and is declared their new leader. They beg and grovel and "+$.w+" and ask that the "+p+" help them take back their "+l+" from a rival gang. "
j="The "+p+" is now the warlord of nearly all of the Violent "+m+"s. There is clearly not enough "+l+" for everyone, though. It turns out that the "
h=$.o
j=j+h+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
g="There isn't enough room in this wasteland for the both of them. It's time to take out the "+h+"."
m="The "+h+" lies slain by the "+p+"'s "+$.aG+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.h(0,new R.E("Become the Warlord",!1,[new U.b(o),new U.b(k),new U.b(j),new U.K(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.cr(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.h)
m=$.j
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.V
p=p+l+"s alike. "
l=$.m+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.o
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.aG+". The "+m+" is finally free to continue improving the land. "
s.h(0,new R.E("Make This Stupid Planet Habitable",!1,[new U.b(p),new U.b(l),new U.b(g),new U.K(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(q,s,null),$.ac)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.ae,$.h)
t.h(0,$.aD,$.h)
t.h(0,$.os,$.a9)
t.h(0,$.ef,$.u)
r=$.j
q="The "+r+" finds a small dungeon bearing the image of "
p=$.o
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.m+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.h(0,new R.E("Learn the Prophecy",!1,[new U.b(q),new U.b(o),new U.b(m),new U.K(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.cr(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
k=$.j
p="The "+k+" learns from one of their "
r=$.m
p=p+r+"s that there is an ancient prophecy of a "
l=$.ad
p=p+l+" plague that is due to kill them all any day now."
m="The "+k+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.V
m=m+o+", which currently happens to be the "+r+"s. "
r="The "+k+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+l+" plague into devastating the underlings instead of the "+r+"s. The underling army is all but decimated, and "
l=$.o
r=r+l+"s lair is all but undefended. "
o="The "+k+" is finally ready to face the "+l+"."
q="The "+l+" lies slain by the "+k+"'s "+$.aG+". The "+k+" has won! "
t.h(0,new R.E("Learn the Prophecy",!1,[new U.b(p),new U.b(m),new U.b(r),new U.K(o,"The tyranny of "+l+" continues with the defeat of the "+k+".",q)],H.a([],i),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(s,t,null),$.ac)},
gK:function(){return this.ry},
gT:function(){return this.x1},
gu:function(){return this.x2},
gD:function(){return this.y1},
gS:function(){return this.y2},
ga0:function(){return this.m},
gR:function(){return this.t},
gbd:function(){return this.v},
gcM:function(){return this.J},
ga2:function(){return this.bH},
gA:function(){return this.bI}}
Z.fO.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Dream Diary",H.a([$.R,$.ai,$.F],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Interlocking Brick",H.a([$.as,$.bc,$.aP,$.F,$.ag],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Art Supplies",H.a([$.as,$.bc,$.F],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.T,P.C]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.dj,$.i)
q.h(0,$.dk,$.h)
q.h(0,$.ae,$.i)
q.h(0,$.lh,$.i)
p=$.m
o="A "+p+" child tugs on the "
n=$.j
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.V
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.o
k=[U.b]
q.h(0,new R.E("Make the Thing",!1,[new U.b(o+l+"'s lair light up.  Only 99 to go!"),new U.b("An entire line of "+p+" children are "+$.w+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "),new U.b("The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."),new U.K("The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife.","Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
n=this.c
n.h(0,new X.r(s,q,null),$.ac)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aN,$.i)
s.h(0,$.dk,$.h)
s.h(0,$.cN,$.i)
s.h(0,$.b9,$.i)
s.h(0,$.la,$.i)
s.h(0,$.ba,$.h)
p=$.j
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
m="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
l=$.m
m=m+l+"s are even starting to snigger and "
j=$.w
j=m+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+l+"s "+j+" harder. "
l="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
m=$.o
s.h(0,new R.E("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(l),new U.K("The "+m+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+m+".")],H.a([],k),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(q,s,null),$.ac)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.cj,$.h)
t.h(0,$.lb,$.i)
t.h(0,$.ae,$.i)
t.h(0,$.b9,$.h)
t.h(0,$.la,$.h)
t.h(0,$.dk,$.i)
r=$.j
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.o
t.h(0,new R.E("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.ad+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.m+" is "+$.w+"ing in reverse. Another is in a "+$.V+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.K("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(s,t,null),$.ac)},
gK:function(){return this.rx},
gT:function(){return this.ry},
gu:function(){return this.x1},
gD:function(){return this.x2},
gS:function(){return this.y1},
ga0:function(){return this.t},
gR:function(){return this.C},
gbd:function(){return this.B},
ga2:function(){return this.v},
gA:function(){return this.J}}
X.ee.prototype={}
X.e6.prototype={
$S:function(){return{func:1,v:true,args:[[P.O,M.dg]]}}}
M.dg.prototype={}
U.ha.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Fluthulu Poster",H.a([$.af,$.bm,$.bn,$.ew],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Scalemate",H.a([$.af,$.bm,$.bn],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Replica Bone Shield",H.a([$.aS,$.as,$.cQ,$.hD,$.bd],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Replica Ice Sword",H.a([$.as,$.p6,$.hE,$.bd],s),null,!1,"Fake Hard Water Long Stabber")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Zombie Mask",H.a([$.as,$.hF,$.cS,$.bn],s),null,!1,"Dead Face")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Vampire Romance Novel",H.a([$.ai,$.R,$.cl,$.bn],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Wizardy Herbert",H.a([$.R,$.aB,$.aP],s),null,!1,"Shitty Wizard Object")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Complacency of the Learned",H.a([$.R,$.aB,$.aP],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Grimoire for Summoning the Zoologically Dubious ",H.a([$.R,$.aB,$.hF,$.bn,$.ew],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Wizard Statue",H.a([$.aS,$.eC,$.aB,$.aP,$.bd],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Mermaid Fountain",H.a([$.aS,$.mC,$.aB,$.aP,$.bd],s),null,!1,"Water Spitting Fish Woman Statue")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.T,P.C]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.dl,$.a9)
q.h(0,$.bb,$.i)
q.h(0,$.aE,$.i)
q.h(0,$.bw,$.u)
p=$.j
o="The "+p+" learns of a Beautiful "
n=$.m
o=o+n+" who has been kidnapped by the vial "
m=$.o
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.V
j=[U.b]
q.h(0,new R.G("Save the Beautiful Consort",!1,[new U.b(o),new U.b(l+k+" can open it. Looks like it's time to go questing."),new U.b("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.n(),!1,!1,new Y.b7("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p=this.r
p.h(0,new X.r(s,q,null),$.aa)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aM,$.h)
s.h(0,$.bR,$.h)
s.h(0,$.lc,$.i)
s.h(0,$.aD,$.h)
s.h(0,$.dr,$.h)
s.h(0,$.eg,$.i)
o=$.j
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.m
s.h(0,new R.G("Do not Drink...Wine.",!1,[new U.b(n+m+" leave, and no one can remember the last time he received guests."),new U.b("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.b(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,s,null),$.aa)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.aM,$.h)
t.h(0,$.hf,$.i)
t.h(0,$.aD,$.h)
t.h(0,$.bT,$.i)
t.h(0,$.di,$.i)
t.h(0,$.mr,$.i)
r=$.j
q="The "+r+" finds a group of three "
o=$.m
q=q+o+"s "
n=$.w
t.h(0,new R.G("Expose the Conspiracy",!1,[new U.b(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.b("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.b("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(s,t,null),$.aa)},
gA:function(){return this.cx},
ga3:function(){return this.cy},
ga4:function(){return this.db},
gu:function(){return this.dx},
ga5:function(){return this.dy}}
L.hb.prototype={
gK:function(){return this.rx}}
N.T.prototype={
n:function(a){return H.q(new H.cd(H.kK(this),null))+": "+H.q(this.b)}}
O.hj.prototype={
gK:function(){return this.rx},
gT:function(){return this.ry},
gu:function(){return this.x1},
gD:function(){return this.x2},
gS:function(){return this.y1},
ga0:function(){return this.y2},
gR:function(){return this.m},
gA:function(){return this.t}}
E.eo.prototype={}
E.iu.prototype={}
E.v.prototype={
n:function(a){var t="["+J.aH(this.a)+" x "+H.q(this.b)
return t+(this.c?" (from Aspect)":"")+"]"},
gd2:function(){return this.a},
ger:function(){return this.b}}
E.cH.prototype={
n:function(a){var t="[(Random from "+P.hJ(this.d,"(",")")+") x "+H.q(this.b)
return t+(this.c?" (from Aspect)":"")+"]"},
gA:function(){return this.d}}
E.e4.prototype={
n:function(a){return"[Stats assigned from player Interests x"+H.q(this.b)+"]"}}
Y.hm.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("How to Teach Your Friends to Hack SBURB",H.a([$.ai,$.D,$.R,$.ag,$.ls],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Unstable Domino",H.a([$.as,$.D,$.aQ],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Exposed Thread",H.a([$.af,$.D,$.aQ],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Teetering Plate",H.a([$.lr,$.D,$.aQ],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.C])
t.h(0,$.li,$.i)
t.h(0,$.aE,$.h)
t.h(0,$.bS,$.u)
t.h(0,$.bW,$.h)
r=$.m
q="An excited "+r+" runs up to the "
p=$.j
q=q+p+" and starts to "
o=$.w
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.ad
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.V
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.o
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.b]
t.h(0,new R.E("I'm So Meta, Even This Acronym",!1,[new U.b(q),new U.b(m),new U.b(n),new U.K(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
o=$.j
t.h(0,new R.P("Cooking with Petrol",!1,[new U.b("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.o+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.b("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.b("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.m+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.n(),!1,!1,new Y.ct("Rewards/no_reward.png",null),1,null,null),$.p)
o=$.m
j="Now that the "+o+"s are free from the reign of "+$.o+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.j
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.w
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.ad+" Quest Online: The "+$.V+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.db
t.h(0,new R.P("Stop the Meta",!1,[new U.b(j),new U.b(r),new U.b(o)],H.a([],i),R.n(),!1,!1,new Y.am("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.p)
p="The "+$.o+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.j
p=p+o+" shows the "
r=$.m
t.h(0,new R.aq("Allow Others to Meta a Universe",!1,[new U.b(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.b("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.b("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.w+"s in time to stop them.    ")],H.a([],i),R.aw(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
this.c.h(0,new X.r(s,t,null),$.au)},
gu:function(){return this.k1},
gD:function(){return this.k2},
gA:function(){return this.x1}}
Y.hn.prototype={
Y:function(){return!0},
F:function(a){return!1},
Z:function(){return this.F(0)},
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Sherpa Parka",H.a([$.c_,$.D,$.ey],s),"Clearly the best class uses this.",!1,null)
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Guide Book",H.a([$.ag,$.c_,$.ai,$.R,$.D,$.an],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Whistle",H.a([$.U,$.D,$.c1],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Announcement System",H.a([$.U,$.D,$.av,$.an],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.C])
t.h(0,$.li,$.h)
t.h(0,$.aE,$.h)
t.h(0,$.bS,$.i)
t.h(0,$.bW,$.h)
r="Now that the "+$.o+" is out of the way, a group of "
q=$.m
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.j
o=[U.b]
t.h(0,new R.P("Find the Home",!1,[new U.b(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.b("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.b("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.w+", but they are happy.")],H.a([],o),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
q="The "+$.o+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.j
t.h(0,new R.aq("Find the Frogs",!1,[new U.b(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.m+" "+$.w+"s in time to stop them.    ")],H.a([],o),R.aw(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
this.c.h(0,new X.r(s,t,null),$.au)},
gD:function(){return this.k1}}
T.ho.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Doll",H.a([$.lr,$.aR,$.bo,$.F],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Puppet",H.a([$.at,$.bo,$.F,$.ag,$.bn],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Mirror",H.a([$.mH,$.F],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Shipping Grid",H.a([$.R,$.F,$.cl],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Shades",H.a([$.aJ,$.be,$.F],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.T,P.C]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.dm,$.u)
q.h(0,$.cM,$.h)
q.h(0,$.aI,$.i)
p=$.j
o="The "+p+", guided by a "+$.m+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.o
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.aG+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.b]
q.h(0,new R.E("Find Yourself",!1,[new U.b(o),new U.b(n),new U.b(m),new U.K(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
j=$.j
p="The "+j+" finds a Violent "
l=$.m
p=p+l+". A Magical Talking "
k=$.V
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.o
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.h(0,new R.E("Steal the Heart",!1,[new U.b(p),new U.b(m),new U.b(k),new U.K(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.lD(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.h)
h=this.c
h.h(0,new X.r(s,q,null),$.ac)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.ba,$.h)
s.h(0,$.lc,$.h)
s.h(0,$.ds,$.i)
s.h(0,$.aD,$.h)
s.h(0,$.aO,$.i)
s.h(0,$.bS,$.u)
p=$.j
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.V
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.o
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.aG+". The "+p+" is victorious. "
s.h(0,new R.E("Confront yourself.",!1,[new U.b(o),new U.b(m),new U.b(n),new U.K(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
j="Now that the "+$.o+" has been defeated, a Copy "
p=$.j
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.m
j=j+k+"s "
l=$.w
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.cO+" knows who they are, and their confidence is turned into a pink lightning attack."
s.h(0,new R.P("Prove Your Identity",!1,[new U.b(j),new U.b(l),new U.b(k)],H.a([],i),R.c5(),!1,!1,new Y.y("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
p=$.j
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.o
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.h(0,new R.E("Shatter The Mirrors",!1,[new U.b(k),new U.b(l),new U.b(j),new U.K(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.cr(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.h)
h.h(0,new X.r(q,s,null),$.ac)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.hc,$.h)
t.h(0,$.aO,$.h)
t.h(0,$.lg,$.h)
t.h(0,$.dh,$.i)
t.h(0,$.eg,$.h)
t.h(0,$.bb,$.i)
t.h(0,$.cM,$.u)
r=$.j
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.m
t.h(0,new R.E("Ship All the Ships",!1,[new U.b(q+p+"s have no idea what's coming. "),new U.b("The "+r+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.w+"s ring out through the air.  "),new U.b("The "+r+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.ad+" laws put in place by "+$.o+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
r=$.j
p="The "+r+" finds a weeping Broken Hearted "
q=$.m
p=p+q+". The most Fetching "+q+" of their dreams just turned them down to the "
o=$.ad
p=p+o+" Dance and they are miserable. On a whim, the "+r+" offers to take them instead. The "+q+" immediately brightens.  "
n="The Broken Hearted "+q+" and the "+r+" are shopping for matching outfits to wear to the "+o+" Dance. Oh look, there is the Fetching "+q+". The Broken Hearted "+q+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+r+" goes over to the Fetching "+q+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+q+" really is busy with their job as a "
m=$.w
t.h(0,new R.P("Heal The Broken Heart",!1,[new U.b(p),new U.b(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.b("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.eX(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
q=$.j
m="The "+q+"  and the "
r=$.c6
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.o
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.h(0,new R.E("Flushed Shipping Dungeon",!1,[new U.b(m),new U.K(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.q(C.j)+".",n)],H.a([],i),R.cs(),!1,!1,new Y.em(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.a9)
n=$.j
r="The "+n+"  and the "
q=$.c6
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.o
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.h(0,new R.E("Pitched Shipping Dungeon",!1,[new U.b(r),new U.K(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.q(C.j)+".",m)],H.a([],i),R.cs(),!1,!1,new Y.eW(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.a9)
h.h(0,new X.r(s,t,null),$.aa)},
gK:function(){return this.rx},
gT:function(){return this.ry},
gu:function(){return this.x1},
gD:function(){return this.x2},
gS:function(){return this.y1},
ga0:function(){return this.y2},
gR:function(){return this.m},
gbd:function(){return this.B},
ga2:function(){return this.v},
gA:function(){return this.J}}
B.hp.prototype={
Y:function(){return!1},
F:function(a){return!0},
Z:function(){return this.F(0)},
a6:function(){return 0.5},
a7:function(){return 2},
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Family Ashes",H.a([$.aS,$.c2,$.D,$.aQ,$.lm],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Last Will and Testament",H.a([$.ag,$.R,$.D,$.aQ,$.ln],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Grooming Guide",H.a([$.ai,$.D,$.ar],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Powered Attorney",H.a([$.oV,$.D,$.my,$.ln],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Executer's Ax",H.a([$.oR,$.D,$.cR,$.ln],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
a8:function(){return 1.5},
p:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.C])
t.h(0,$.aN,$.i)
r=$.o
q="With the death of the "+r+", it now falls to the "
p=$.j
o=[U.b]
t.h(0,new R.P("Inherit Responsibilities",!1,[new U.b(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.b("After organizing taxes, approving budgets and listening to "+$.m+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.b("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
r="The "+$.o+" has released the frogs into the "
p=$.j
t.h(0,new R.aq("Inherit the Frogs",!1,[new U.b(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.m+"s 'help' by "+$.w+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.      ")],H.a([],o),R.aw(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
this.c.h(0,new X.r(s,t,null),$.au)},
gu:function(){return this.k2},
gV:function(){return this.k3},
gU:function(){return this.k4},
gD:function(){return this.r1}}
X.hq.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Wand",H.a([$.at,$.F,$.aB,$.bg],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Angel Feather",H.a([$.bg,$.hz,$.F,$.ck,$.aZ,$.ag,$.aB],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Never Ending Story DVD",H.a([$.mK,$.mG,$.F,$.aB,$.bx,$.bg],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Candle",H.a([$.bg,$.ck,$.F,$.c2],s),null,!1,"Dying Light Stick")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Fairy Figurine",H.a([$.as,$.ck,$.F,$.bg],s),null,!1,"Tiny Petrified Tinkerbell")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.T,P.C]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.ml,$.h)
q.h(0,$.bb,$.i)
q.h(0,$.ae,$.h)
q.h(0,$.b9,$.h)
p=$.j
o="The "+p+" is just minding their own business when they see a wizened "
n=$.m
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.w+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.o
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.V
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
n=[U.b]
q.h(0,new R.E("Learn to Believe",!1,[new U.b(o),new U.b(m),new U.b(l),new U.K(k,"The "+p+" fails to believe hard enough. They are defeated.",j)],H.a([],n),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
j=this.c
j.h(0,new X.r(s,q,null),$.ac)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aM,$.h)
s.h(0,$.l9,$.i)
s.h(0,$.cN,$.h)
p=$.j
o="The "+p+"  is approached by a Crafty "
m=$.m
o=o+m+" who offers them a magical "
l=$.V
o=o+l+", guaranteed to grant them the power to believe things into existance once per year. The "+p+" is shocked to discover it was a ruse, and the Crafty "+m+" has already escaped to the side with their ill earned boonies. "
k="The "+p+" is contemplating the magical "+l+" they wasted their boonies on.  Why would the Crafty "+m+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+p+" spends time imagining what they would try to make if it were true."
i="The "+p+" finds a grey town of despondant "+m+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+p+" learns that "
h=$.o
i=i+h+" has been hoarding all the belief and steals it from the "+m+"s regularly. They have to be stopped!"
g="The "+p+" approaches "+h+", magical "+l+" in hand. The "+h+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+p+" feels frozen. They cannot take a single step towards "+h+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+l+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
m=h+"'s belief was no match for the power of the "+l+". They are dead, and hope will be free to flourish among the "+m+"s once again."
s.h(0,new R.E("Believe the Lies",!1,[new U.b(o),new U.b(k),new U.b(i),new U.K(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],n),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
j.h(0,new X.r(q,s,null),$.ac)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.ae,$.h)
t.h(0,$.bU,$.u)
t.h(0,$.aX,$.h)
t.h(0,$.b9,$.h)
r=$.j
q="The "+r+" finds a grey town of despondant "
p=$.m
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.o
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.V
t.h(0,new R.E("Be the Change You Believe In",!1,[new U.b(q),new U.b(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.b("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.K("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],n),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
r=$.j
o="The "+r+" discovers a group of "
p=$.m
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.o
t.h(0,new R.E("The Ultimate Hope",!1,[new U.b(o),new U.b(l),new U.b(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.K("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],n),R.eX(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.h)
j.h(0,new X.r(s,t,null),$.ac)},
gK:function(){return this.rx},
gT:function(){return this.ry},
gu:function(){return this.x1},
gD:function(){return this.x2},
gS:function(){return this.y1},
ga0:function(){return this.y2},
gR:function(){return this.m},
ga2:function(){return this.B},
gA:function(){return this.v}}
B.hv.prototype={
$1:function(a){return!a.gaX()},
$S:function(){return{func:1,args:[B.bZ]}}}
B.bZ.prototype={
q:function(){var t,s
t=Q.t(null,null,A.Q)
s=A.f("Perfectly Generic Object",H.a([],[G.M]),null,!1,"The Third Entry for This Fucking Block")
C.a.j(t.b,new Q.e(s,t.k(s,1),[H.A(t,0)]))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.T,P.C]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bv,$.h)
q.h(0,$.ak,$.u)
q.h(0,$.bX,$.h)
q.h(0,$.aD,$.i)
q.h(0,$.cL,$.u)
p=$.j
o="The "+p+" learns that all of the local "
n=$.m
m=[U.b]
q.h(0,new R.G("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.w+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
n=this.r
n.h(0,new X.r(s,q,null),$.aa)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.dq,$.h)
s.h(0,$.dn,$.u)
s.h(0,$.dp,$.i)
s.h(0,$.b8,$.h)
s.h(0,$.aN,$.u)
p=$.j
o="The "+p+" learns that all of the local "
l=$.m
s.h(0,new R.G("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.w+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(q,s,null),$.aa)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.ae,$.h)
t.h(0,$.ak,$.u)
t.h(0,$.aE,$.i)
r=$.j
q="The "+r+" learns that all of the local "
p=$.m
t.h(0,new R.G("Relax the Consorts",!1,[new U.b(q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+r+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+r+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p=$.j
r="The "+p+" learns that all of the local "
q=$.m
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
l=$.w
t.h(0,new R.G("Relax the Consorts According to Prophecy",!1,[new U.b(r),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.lC(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.u)
n.h(0,new X.r(s,t,null),$.aa)},
n:function(a){return this.ch},
gaX:function(){return this.a},
ga3:function(){return this.b},
gA:function(){return this.c},
ga4:function(){return this.d},
gu:function(){return this.e},
gae:function(a){return this.f},
ga5:function(){return this.x},
gG:function(a){return this.ch}}
A.Q.prototype={
at:function(a,b){var t=b.gbO()-this.gbO()
if(t>0)t=1
else if(t<0)t=-1
return C.b.bP(t)},
ge8:function(){var t,s,r,q,p,o,n
t=H.a([],[P.B])
s=new A.iI(null,null)
s.d_(this.e.a)
if(this.f===0)return t
r=P.c3(G.og(this.e),!0,G.M)
C.a.aN(r,new A.hI())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.cF)(r),++p){o=r[p]
n=o.ge7()
n=n.gaf(n)
if(!n)t.push(" "+Y.qC(s.ex(o.ge7())))}return t},
gbO:function(){var t,s,r
for(t=this.e,s=new P.cE(t,t.r,null,null,[null]),s.c=t.e,r=0;s.E();)r+=s.d.gbO()
return r},
ge1:function(){var t=this.e
return new H.bB(t,new A.hH(),[H.A(t,0)])},
ged:function(){var t,s,r,q,p
for(t=this.ge8(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.cF)(t),++q)r+=t[q]+" "
return r+this.c},
n:function(a){return this.ged()},
dd:function(a,b,c,d,e){var t,s,r
t=P.eI(b,null)
this.e=t
if(t.a===0)t.j(0,$.p2)
s=P.eI(this.ge1(),null)
for(t=new P.cE(s,s.r,null,null,[null]),t.c=s.e;t.E();){r=t.d
this.e.ai(0,r.gd3())
this.e.aa(0,r)}$.$get$mM().push(this)},
$isaA:1,
$asaA:function(){return[A.Q]}}
A.hI.prototype={
$2:function(a,b){return a.gev().eU(0,b.gev().bP(0))},
$S:function(){return{func:1,args:[G.M,G.M]}}}
A.hH.prototype={
$1:function(a){return!1},
$S:function(){return{func:1,args:[G.M]}}}
N.hO.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Gavel",H.a([$.at,$.p4],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Caution Tape",H.a([$.as,$.eA],s),null,!1,"Impassible Barrier")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Deerstalker Hat",H.a([$.af,$.aR],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Mystery Novel",H.a([$.R,$.ai],s),null,!1,"Book where the Criminal was the Janitor")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Dish Served Cold",H.a([$.lk,$.c0,$.c_],s),null,!1,"REVENGE")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Pony Pals: Detective Pony ",H.a([$.R,$.ai,$.aJ],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Handcuffs",H.a([$.aS,$.U,$.eA],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.T,P.C]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.dl,$.u)
q.h(0,$.aM,$.i)
q.h(0,$.aX,$.u)
p=$.j
o="The "+p+" finds an elaborate courtroom full of "+$.w+"ing "
n=$.m
m=[U.b]
q.h(0,new R.G("Shit, Lets Be Lawyers",!1,[new U.b(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.b("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.b(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.V+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
n=this.r
n.h(0,new X.r(s,q,null),$.aa)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aM,$.h)
s.h(0,$.bS,$.i)
s.h(0,$.b8,$.i)
p=$.j
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.m
s.h(0,new R.G("Enforce the Law",!1,[new U.b(o+l+" yells 'Stop that thief' in betwen "+$.w+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "),new U.b("The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."),new U.b("A missing "+$.V+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. ")],H.a([],m),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(q,s,null),$.aa)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.aM,$.h)
t.h(0,$.aN,$.i)
t.h(0,$.bR,$.u)
t.h(0,$.dr,$.i)
t.h(0,$.dm,$.i)
t.h(0,$.eh,$.i)
t.h(0,$.ld,$.i)
r=$.j
q="The "+r+" finds a crowd of "
p=$.w
q=q+p+"ing "
o=$.m
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won!"
o=this.y
t.h(0,new R.G("Start a Revolution",!1,[new U.b(q),new U.b(r),new U.b(p)],H.a([],m),R.n(),!1,!1,new Y.am("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(s,t,null),$.aa)},
gA:function(){return this.cx},
ga3:function(){return this.cy},
ga4:function(){return this.db},
gu:function(){return this.dx},
ga5:function(){return this.dy}}
S.hQ.prototype={
Y:function(){return!0},
F:function(a){return!0},
Z:function(){return this.F(0)},
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Shining Armor",H.a([$.aS,$.lp,$.D,$.hD],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Excalibur",H.a([$.ag,$.lp,$.D,$.ez,$.cR,$.hE],s),"Knight Shit",!1,"Masamune")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Noble Steed",H.a([$.U,$.D,$.cS,$.bo],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Hero's Shield",H.a([$.aS,$.hD,$.D,$.lp],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
a6:function(){return 1},
a7:function(){return 2.5},
a8:function(){return 0.75},
p:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.C])
t.h(0,$.lf,$.h)
t.h(0,$.bV,$.h)
t.h(0,$.bY,$.h)
t.h(0,$.eh,$.h)
t.h(0,$.dl,$.i)
r="The "+$.o+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.j
p=[U.b]
t.h(0,new R.aq("Breed the Frogs",!1,[new U.b(r+q+" collects all sorts of frogs. Various "+$.m+"s 'help' by "+$.w+"ing up a storm. "),new U.b("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.b("The "+q+" has found the final frog.      ")],H.a([],p),R.aw(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q=$.o
r="Now that the "+q+" is defeated, the "
o=$.m
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.j
t.h(0,new R.P("Exploit the Heat",!1,[new U.b(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.b("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.b("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.aw(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
o=$.ad
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.o
n=n+q+". A Learned "+$.m+" explains that it can only be defeated by the Legendary "
r=$.V
n=n+r+" Blade. The "
m=$.j
t.h(0,new R.P("Fight the Beast",!1,[new U.b(n+m+" prepares to go questing for it. "),new U.b("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.b("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
r="The volcanos of the land are weirdly active after the defeat of the "+$.o+". Onehas begins to erupt near a "
m=$.m
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.w+"s, but not really doing anything to evacuate or save anyone. The "
o=$.j
t.h(0,new R.P("Protect the Consorts",!1,[new U.b(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.b("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.b("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
this.c.h(0,new X.r(s,t,null),$.au)},
gu:function(){return this.k2},
gV:function(){return this.k3},
gU:function(){return this.k4},
gD:function(){return this.r1}}
Q.hR.prototype={
gK:function(){return this.rx}}
K.hS.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Creeping Vine",H.a([$.at,$.F,$.dw,$.bo],s),null,!1,"Sentient Plant Tentacles")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Lollipop",H.a([$.mA,$.F,$.bK],s),null,!1,"Sentient Plant Tentacles")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Golem",H.a([$.aS,$.eC,$.F,$.bo],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Ectoplasm",H.a([$.lm,$.F,$.bK],s),null,!1,"Ghost [Censored]")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Aqua Vitae",H.a([$.be,$.F,$.bK,$.ag,$.aB],s),null,!1,"Tears of JR")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Homunculus",H.a([$.cS,$.F,$.bo],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.T,P.C]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.aE,$.h)
q.h(0,$.ak,$.h)
q.h(0,$.hd,$.u)
q.h(0,$.ae,$.i)
q.h(0,$.li,$.i)
q.h(0,$.bw,$.u)
p=$.j
o="The "+p+" finds a village of compliant "
n=$.m
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.w+"ing in panic. Don't upset "
m=$.o
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.b]
q.h(0,new R.E("Restore the Forest",!1,[new U.b(o),new U.b(l),new U.K(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
n=this.c
n.h(0,new X.r(s,q,null),$.ac)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aE,$.h)
s.h(0,$.aO,$.h)
s.h(0,$.bw,$.u)
s.h(0,$.ae,$.i)
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
s.h(0,new R.E("Distribute the Food",!1,[new U.b(m),new U.b(k),new U.b(l),new U.K(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(q,s,null),$.ac)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.bv,$.h)
t.h(0,$.ak,$.u)
t.h(0,$.bX,$.h)
t.h(0,$.aD,$.i)
t.h(0,$.cL,$.i)
t.h(0,$.l7,$.i)
r="Drawn by wailing and "+$.w+"ing, the "
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
t.h(0,new R.E("Protect the Farms",!1,[new U.b(r),new U.b(m),new U.b(k),new U.K(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(s,t,null),$.ac)},
gK:function(){return this.rx},
gT:function(){return this.ry},
gu:function(){return this.x1},
gD:function(){return this.x2},
gS:function(){return this.y1},
ga0:function(){return this.y2},
gR:function(){return this.m},
ga2:function(){return this.B},
gA:function(){return this.v}}
G.hT.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("FAQ",H.a([$.av,$.F,$.an,$.hB],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Flashlight",H.a([$.as,$.F,$.ck,$.av,$.hB],s),null,!1,"Tube of Localised Sun")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Octet",H.a([$.F,$.ck,$.hB,$.ag,$.mC],s),null,!1,"D13")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Horseshoe",H.a([$.p5,$.F,$.aP],s),null,!1,"Horse Sneaker")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Rabbits Foot",H.a([$.pg,$.F],s),null,!1,"Rabbit Remains")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("4 Leaf Clover",H.a([$.dw,$.F,$.ck,$.hB],s),null,!1,"Plant of Luck +4")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("8-Ball",H.a([$.be,$.F,$.bo],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.T,P.C]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.mq,$.h)
q.h(0,$.dj,$.i)
q.h(0,$.bT,$.h)
q.h(0,$.cM,$.h)
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
q.h(0,new R.E("Be the Contestant",!1,[new U.b(o),new U.b(l),new U.b(k),new U.K(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
m=$.j
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.w+"ing "+$.m+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.o
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.h(0,new R.E("Go Big or Go Home",!1,[new U.b(n),new U.b(p),new U.b(j),new U.K(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
m=this.c
m.h(0,new X.r(s,q,null),$.ac)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aE,$.i)
s.h(0,$.ae,$.i)
s.h(0,$.bU,$.h)
s.h(0,$.mp,$.h)
s.h(0,$.dn,$.h)
s.h(0,$.l9,$.h)
p=$.j
o="The "+p+" walks into a "
n=$.m
o=o+n+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
l=$.V
o=o+l+", but "
k=$.o
o=o+k+" has hoarded all of the planets "
j=$.ad
l=o+j+" Candles, and everyone knows you cant have a good "+l+" ceremony without candles! The "+p+" vows to take back some "+j+" Candles for the poor "+n+"s. "
o="After a long search, the "+p+" has found the warehouse where "+k+" has stored all the candles. "+j+" Candles must be very valuable to "+k+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+p+" wants to sneak in without alerting a horde of "+k+" minions."
h="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+p+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+k+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+p+" to slip inside with ease. Captchaloging as much "+j+" Candles as they can, the "+p+" triumphantly returns to the village among the joyful "+$.w+"ing of the "+n+"s."
k="The "+p+" is ready to challenge the "+k+" to keep them from restealing the "+j+" candles. "
n="Never again shall the "+n+"s be without "+j+" Candles!"
s.h(0,new R.E("The Candlestick Taker",!1,[new U.b(l),new U.b(o),new U.b(h),new U.K(k,"The "+j+" candles are once again at risk.",n)],H.a([],i),R.lD(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.h)
n=$.j
j="The "+n+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.m
j=j+k+" explains that the "
h=$.o
s.h(0,new R.E("Shine the Light",!1,[new U.b(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+n+" vows to help.   "),new U.b("The "+n+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.w+"s as they bask in the light. The "+n+" feels good about a job well done. "),new U.b("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+n+" must prepare themself for a tough fight.  "),new U.K("The "+n+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(q,s,null),$.ac)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.ef,$.i)
q.h(0,$.ak,$.i)
q.h(0,$.ej,$.h)
q.h(0,$.ae,$.i)
q.h(0,$.aX,$.h)
p="Now that the "+$.o+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.j
p=p+o+" sets up a wiki and settles in to help the "
n=$.m
p=p+n+"s deal with it all."
n="Within barely any time at all, the "+n+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+o+" makes sure all of the information is from credible sources."
o="When the "+o+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.cO+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.h(0,new R.P("Moderate the Wiki",!1,[new U.b(p),new U.b(n),new U.b(o)],H.a([],i),R.c5(),!1,!1,new Y.y("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
l="Now that the "+$.o+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.j
l=l+o+" shrugs and sets up a wiki and lets the "
n=$.m
l=l+n+"s deal with it all."
n="Within barely any time at all, unmoderated "+n+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+o+" alone, and each claims they are a different SPECIES entirely. The "+o+" finds this to be hilarious."
o="Luckily it turns out all that disinformation running around about the "+o+" thwarts some would be assasins. It turns out the "+o+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
p="The "+$.cO+" allows you to make you own assumptions about things, and be destroyed by them."
q.h(0,new R.P("Create the Wiki",!1,[new U.b(l),new U.b(n),new U.b(o)],H.a([],i),R.cr(),!1,!1,new Y.y("Disinformation Network",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
p=$.m
o=p+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
n=$.j
o=o+n+" possibly stop it?"
p="The "+n+" pours over maps and charts. What do the sick "+p+"s have in common with each other?  Finally, there is a flash of inspiration. "+p+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+n+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+n+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+n+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+n+" traces the contaminated river back to it's source. The "
j=$.o
q.h(0,new R.E("Shed the Light",!1,[new U.b(o),new U.b(p),new U.b(l),new U.K(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+n+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(s,q,null),$.ac)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.bT,$.h)
t.h(0,$.mq,$.h)
t.h(0,$.cM,$.i)
t.h(0,$.bb,$.i)
t.h(0,$.mo,$.i)
t.h(0,$.aD,$.u)
t.h(0,$.bY,$.u)
t.h(0,$.aI,$.i)
t.h(0,$.ba,$.u)
t.h(0,$.ak,$.i)
t.h(0,$.b2,$.h)
s=$.j
r="The "+s+" is approached by a Fast Talking "
p=$.m
r=r+p+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
o=$.V
r=r+o+". The "+s+" agrees to perform the titular role."
n="The opening night performance of the Beautiful "+o+" is a huge success! The "+$.w+"ing of the fans is it's own reward!"
o="When it comes time for the next performance of the Beautiful "+o+", the "+s+" is turned away at the door. Apparently the "
l=$.o
p=o+l+" rampaged and terrorized "+p+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
l="There is not enough room on the stage for both of them. The "+s+" challenges the "+l+" to a glamour off, and wins handily. Enraged, the "+l+" attacks."
o="The "+s+" can finally get back to their promising acting career in peace."
t.h(0,new R.E("Be the Star",!1,[new U.b(r),new U.b(n),new U.b(p),new U.K(l,"The actig career of the "+s+" is in shambles.",o)],H.a([],i),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
o="After the "+$.o+", the "
s=$.j
o=o+s+" is disappointed to learn that barely any of the "
l=$.m
o=o+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
p="The "+$.cO+" is famous, and everyone in this fight is lucky to have met them."
t.h(0,new R.P("Be the Biggest Star in Paradox Space",!1,[new U.b(o),new U.b(l),new U.b(s)],H.a([],i),R.c5(),!1,!1,new Y.y("What's my name?",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
m.h(0,new X.r(q,t,null),$.ac)},
gK:function(){return this.rx},
gT:function(){return this.ry},
gu:function(){return this.x1},
gD:function(){return this.x2},
gS:function(){return this.y1},
ga0:function(){return this.y2},
gR:function(){return this.m},
ga2:function(){return this.t},
gA:function(){return this.v}}
Z.i_.prototype={
Y:function(){return!0},
q:function(){var t,s,r,q
t=this.y2
s=[G.M]
r=A.f("Dream Bubbles Book",H.a([$.R,$.ar,$.ai,$.oZ],s),null,!1,null)
C.a.j(t.b,new Q.e(r,t.k(r,1),[H.A(t,0)]))
t=Q.t(null,null,A.Q)
r=A.f("Uno Reverse Card",H.a([$.oU,$.mJ,$.ar],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Lord's Cape",H.a([$.af,$.D,$.ar],s),"Lord Shit",!1,"Shoguns Cape")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Drawing Tablet",H.a([$.ls,$.D,$.ar],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("How to Make Friends And Influence People",H.a([$.ag,$.R,$.D,$.dv,$.ai],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
F:function(a){return!0},
Z:function(){return this.F(0)},
a6:function(){return 3.1},
a7:function(){return 0.1},
a8:function(){return 3.1},
ao:function(){return!0},
p:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.T,P.C]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bR,$.u)
q.h(0,$.dr,$.u)
q.h(0,$.aD,$.u)
q.h(0,$.b8,$.i)
p="The "+$.o+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.j
p=p+o+" comands that the "
n=$.m
m=[U.b]
q.h(0,new R.aq("Command Minions to Breed Frogs",!1,[new U.b(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.w+"s. "),new U.b("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.aw(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
o="As soon as the "+$.o+" is defeated, the "
n=$.m
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.j
q.h(0,new R.P("Conquer Everything",!1,[new U.b(o+p+" is up to the task.  "),new U.b("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.b("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p=this.c
p.h(0,new X.r(s,q,null),$.au)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.oo,$.h)
t.h(0,$.b9,$.h)
t.h(0,$.ak,$.h)
t.h(0,$.ae,$.i)
s="The "+$.o+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.j
s=s+r+" comands that the "
o=$.m
t.h(0,new R.aq("Command Minions to Breed Frogs",!1,[new U.b(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.w+"s. "),new U.b("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.aw(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
r="As soon as the "+$.o+" is defeated, the "
o=$.m
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.j
t.h(0,new R.P("Praise Dutton",!1,[new U.b(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.b("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.b("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.n(),!1,!1,new Y.am("Rewards/sweetTreasure.png",this.y2,"Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,t,null),$.au)},
gu:function(){return this.k2},
gV:function(){return this.k3},
gU:function(){return this.k4},
gD:function(){return this.r1},
gA:function(){return this.m}}
S.i0.prototype={
Y:function(){return!0},
F:function(a){return!0},
Z:function(){return this.F(0)},
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Alternate Costume",H.a([$.af,$.D,$.aB,$.ag,$.bf],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Mage's Cape",H.a([$.af,$.D,$.aB],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Mage's Staff",H.a([$.at,$.D,$.aP,$.aB,$.cT],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Walking Broom",H.a([$.lj,$.at,$.D,$.bo,$.aB,$.cT],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
a6:function(){return 0.67},
a7:function(){return 0.67},
a8:function(){return 1.5},
p:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.C])
t.h(0,$.di,$.h)
t.h(0,$.eh,$.i)
t.h(0,$.aN,$.h)
t.h(0,$.dp,$.i)
t.h(0,$.bv,$.u)
r="The "+$.o+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.j
p=[U.b]
t.h(0,new R.aq("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.aw(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q=$.j
t.h(0,new R.P("Work With Exiles",!1,[new U.b("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.b("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.n(),!1,!1,new Y.b7("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
q=$.j
r="The "+q+" is feeling quite pleased with their victory over the "+$.o+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.ad
t.h(0,new R.P("Suffer Visions",!1,[new U.b(r+o+". Oh god, why is this happening?"),new U.b("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.b("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
q="Now that the "+$.o+" has been defeated, the "
o=$.m
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.j
q=q+r+"'s help in planning the brand new city of "
n=$.ad
t.h(0,new R.P("Become the Mayor",!1,[new U.b(q+n+"burg."),new U.b("A panicking "+o+" runs up to the "+r+", "+$.w+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.b("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
this.c.h(0,new X.r(s,t,null),$.au)},
gu:function(){return this.k1},
gV:function(){return this.k2},
gU:function(){return this.k3},
gD:function(){return this.k4},
gA:function(){return this.y1}}
U.i1.prototype={
Y:function(){return!0},
F:function(a){return!1},
Z:function(){return this.F(0)},
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Maiden's Breath",H.a([$.dw,$.D,$.aR],s),null,!1,null)
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Feather Duster",H.a([$.at,$.D,$.cT,$.hz],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Valkyrie Shield",H.a([$.aR,$.aS,$.U,$.D,$.ag,$.hD,$.oP],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Maiden's Songbook",H.a([$.R,$.D,$.aZ,$.ai],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
a6:function(){return 0.33},
a7:function(){return 3},
a8:function(){return 1.5},
p:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.C])
t.h(0,$.bW,$.h)
t.h(0,$.aE,$.h)
t.h(0,$.ae,$.i)
t.h(0,$.ak,$.i)
t.h(0,$.bU,$.i)
t.h(0,$.ba,$.i)
r="The "+$.o+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.j
r=r+q+" asks local  "
p=$.m
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.w
n=[U.b]
t.h(0,new R.aq("Serve the  Frogs",!1,[new U.b(r+o+"s.  It's a lively neighborhood event."),new U.b("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.aw(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q=$.j
o="The "+q+" has adopted a local "
p=$.m
t.h(0,new R.P("Serve the PTA",!1,[new U.b(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.b("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.w+"ing about. "),new U.b("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.o+". ")],H.a([],n),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
this.c.h(0,new X.r(s,t,null),$.au)},
gu:function(){return this.k1},
gV:function(){return this.k2},
gU:function(){return this.k3},
gD:function(){return this.k4}}
L.i9.prototype={
gK:function(){return this.rx},
gT:function(){return this.ry},
gu:function(){return this.x1},
gD:function(){return this.x2},
gS:function(){return this.y1},
ga0:function(){return this.y2},
gR:function(){return this.m},
ga2:function(){return this.t},
gA:function(){return this.J}}
V.ia.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Puzzle Box",H.a([$.at,$.F,$.aB],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Tesla Coil",H.a([$.av,$.F,$.U],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Coin",H.a([$.U,$.F],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Electronic Door",H.a([$.U,$.F,$.av,$.an],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Janus Bust",H.a([$.aS,$.mz,$.eC,$.ar,$.F,$.ag,$.av],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.T,P.C]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.b9,$.i)
q.h(0,$.dj,$.u)
q.h(0,$.aX,$.u)
p=$.j
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.m
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.o
k=[U.b]
q.h(0,new R.E("Change the View",!1,[new U.b(o),new U.b(m),new U.b(l),new U.K(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.cY(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.h)
n=$.j
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+n+" explains that at the end of the Labrinth is the "
l=$.o
q.h(0,new R.E("Pick a Door, any Door",!1,[new U.b(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.b("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.b("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.K("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
n=this.c
n.h(0,new X.r(s,q,null),$.ac)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.dl,$.u)
s.h(0,$.aM,$.i)
s.h(0,$.aX,$.u)
s.h(0,$.b9,$.u)
p=$.o
o="The "+p+" has commited a staggering amount of crimes against the local "+$.m+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.j
s.h(0,new R.E("Face the Music",!1,[new U.b(o+m+" knows that Justice is on their side."),new U.b("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.b("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.K("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(q,s,null),$.ac)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.hf,$.h)
t.h(0,$.ak,$.i)
t.h(0,$.ej,$.h)
t.h(0,$.ae,$.i)
t.h(0,$.aX,$.h)
r=$.j
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.o
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.V+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.h(0,new R.E("Make the Connections",!1,[new U.b(q),new U.b(p),new U.b(o),new U.K(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(s,t,null),$.ac)},
gK:function(){return this.rx},
gT:function(){return this.ry},
gu:function(){return this.x1},
gD:function(){return this.x2},
gS:function(){return this.y1},
ga0:function(){return this.y2},
gR:function(){return this.m},
ga2:function(){return this.t},
gA:function(){return this.v}}
S.ib.prototype={
gK:function(){return this.rx},
gT:function(){return this.ry},
gu:function(){return this.x1},
gD:function(){return this.x2},
gS:function(){return this.y1},
ga0:function(){return this.y2},
gR:function(){return this.m},
gA:function(){return this.t}}
E.ic.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Feather Pen",H.a([$.U,$.D,$.ar,$.hz],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Half Finished Bust of Snoop Dog",H.a([$.pc,$.D,$.mz,$.aP,$.ag],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Book of Poetry",H.a([$.R,$.D,$.ar,$.ai],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
Y:function(){return!1},
F:function(a){return!1},
Z:function(){return this.F(0)},
a6:function(){return 0.1},
a7:function(){return 3},
a8:function(){return 0.1},
ao:function(){return!0},
p:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.C])
t.h(0,$.bW,$.h)
t.h(0,$.aE,$.h)
t.h(0,$.ae,$.i)
t.h(0,$.ak,$.i)
t.h(0,$.bU,$.i)
t.h(0,$.ba,$.i)
r="The "+$.o+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.j
r=r+q+" asks the "
p=$.m
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.w
n=[U.b]
t.h(0,new R.aq("Inspire Frog Breeding",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.aw(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.i)
q="You'd think after the dramatic defeat of the "+$.o+" the "
o=$.m
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.j
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.V
t.h(0,new R.P("Inspire the People",!1,[new U.b(q),new U.b(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.b("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
this.c.h(0,new X.r(s,t,null),$.au)},
gu:function(){return this.k1},
gV:function(){return this.k2},
gU:function(){return this.k3},
gD:function(){return this.k4},
gA:function(){return this.y1}}
F.id.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Piano",H.a([$.aP,$.at,$.aZ,$.ar],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Flute",H.a([$.U,$.aZ],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Microphone",H.a([$.c1,$.av],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Violin",H.a([$.at,$.aZ],s),null,!1,"Tiny Cello")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Sheet Music",H.a([$.R,$.aZ],s),null,!1,"Cheat Codes for Instruments")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Electric Guitar",H.a([$.as,$.aZ,$.av,$.c1,$.aJ],s),null,!1,"Electrical Stringed Music Maker")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Turn Tables",H.a([$.as,$.aZ,$.av,$.aJ],s),null,!1,"Spinning Disc Sound Maker")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Guitar",H.a([$.at,$.aZ],s),null,!1,"String Music Maker")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.T,P.C]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bb,$.a9)
q.h(0,$.mo,$.h)
q.h(0,$.cM,$.h)
q.h(0,$.bU,$.i)
q.h(0,$.ae,$.i)
q.h(0,$.l8,$.i)
p=$.j
o="The "+p+" meets a wise old "+$.m+" who tells that the "+$.o+" can only be awoken by the Legendary Hero playing the "
n=$.ad
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.V
k=[U.b]
q.h(0,new R.G("Play the Music",!1,[new U.b(o),new U.b(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.b(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p=this.r
p.h(0,new X.r(s,q,null),$.aa)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.mt,$.a9)
s.h(0,$.bS,$.i)
s.h(0,$.b8,$.i)
s.h(0,$.bU,$.h)
s.h(0,$.l8,$.a9)
o=$.j
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.ad
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.o
s.h(0,new R.G("Sing the Song",!1,[new U.b(n+l+". "),new U.b("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.b("A "+$.V+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,s,null),$.aa)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.hd,$.a9)
t.h(0,$.aI,$.i)
t.h(0,$.bX,$.i)
r=$.j
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
o=$.m
q=q+o+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+o+" kept rhyming "
n=$.w
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+o+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+o+" approaches the "+r+". And aura of "+$.ad+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+o+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
o=this.y
t.h(0,new R.G("And It Don't Stop",!1,[new U.b(n),new U.b(q),new U.b(r)],H.a([],k),R.n(),!1,!1,new Y.am("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(s,t,null),$.aa)},
gA:function(){return this.cx},
ga3:function(){return this.cy},
ga4:function(){return this.db},
gu:function(){return this.dx},
ga5:function(){return this.dy}}
V.ix.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Shorts",H.a([$.af,$.D,$.du,$.ag],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Sidekick Figurine",H.a([$.as,$.D,$.aJ],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Steroids",H.a([$.c0,$.D,$.aB],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.C])
t.h(0,$.lf,$.h)
t.h(0,$.bw,$.i)
t.h(0,$.ei,$.i)
t.h(0,$.lg,$.i)
t.h(0,$.bW,$.i)
t.h(0,$.ak,$.i)
t.h(0,$.cL,$.i)
t.h(0,$.dn,$.i)
t.h(0,$.mu,$.i)
t.h(0,$.l7,$.i)
t.h(0,$.mp,$.i)
r="The "+$.o+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.j
r=r+q+" asks the "
p=$.m
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.w
n=[U.b]
t.h(0,new R.aq("Help Breed the Frogs",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.aw(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q=$.j
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.m+" named Professor "
p=$.w
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.V
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.o
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.h(0,new R.E("Become The Best",!1,[new U.b(o),new U.b(p),new U.b(l),new U.K(k,"The "+q+" whited out...",m)],H.a([],n),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
m="Now that the "+$.o+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.j
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.m
t.h(0,new R.P("Explore the Tombs",!1,[new U.b(m),new U.b(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.b("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.ad+" buffs. With a deafening "+$.w+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
this.c.h(0,new X.r(s,t,null),$.au)},
gu:function(){return this.k2},
gV:function(){return this.k3},
gU:function(){return this.k4},
gD:function(){return this.r1},
gaL:function(){return this.y2}}
G.iC.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Superhero Action Figure",H.a([$.as,$.aJ,$.bd],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Action DVD",H.a([$.as,$.aJ],s),null,!1,"Shogun The Movie")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Ghost Busters DVD",H.a([$.as,$.lm],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Snow Dogs DVD",H.a([$.as,$.bx,$.c_,$.ey],s),null,!1,"Snow Buddies Anthology")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Skateboarding Video Game",H.a([$.as,$.aJ],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Movie Poster",H.a([$.R,$.aJ],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Audrey II Plush",H.a([$.dw,$.aJ,$.af,$.bo],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Peashooter Toy",H.a([$.dw,$.eB,$.aJ,$.af],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Shitty Sword",H.a([$.bd,$.U,$.aJ,$.hE,$.cR,$.mK],s),"So. Shitty.",!1,"Perfect Weapon")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("GameBro Magazine",H.a([$.R,$.aJ],s),"5/5 hats.",!1,"Nerd Magazine")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("GameGrl Magazine",H.a([$.R,$.aJ],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.T,P.C]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.ba,$.i)
q.h(0,$.b2,$.i)
q.h(0,$.aI,$.h)
q.h(0,$.bw,$.a9)
q.h(0,$.cN,$.a9)
p=$.j
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.m
m=[U.b]
q.h(0,new R.G("Become the Star",!1,[new U.b(o+n+" manages to catch a video of it, and it goes viral on "+$.ad+"tube. This is humiliating."),new U.b("Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.w+"s added in."),new U.b(" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something.")],H.a([],m),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
n=this.r
n.h(0,new X.r(s,q,null),$.aa)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.dm,$.i)
s.h(0,$.bS,$.i)
s.h(0,$.b2,$.i)
s.h(0,$.aI,$.i)
s.h(0,$.bV,$.h)
p=$.j
o="The "+p+" runs towards an explosion in a local "
l=$.m
o=o+l+" village. As they rush to help the injured, a Mysterious "+l+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+l+" turns out to be Professor "
j=$.ad
s.h(0,new R.G("Stop the Villain",!1,[new U.b(o),new U.b(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+p+" vows to stop them. "),new U.b(" The "+p+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+l+" authorities. ")],H.a([],m),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(q,s,null),$.aa)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.b2,$.i)
t.h(0,$.bT,$.h)
t.h(0,$.aO,$.h)
t.h(0,$.bV,$.i)
r=$.j
q="The "+r+" gets a job at the "+$.ad+" Cinema. A new movie, The Lonely "
p=$.V
q=q+p+" is coming out soon, and "
o=$.m
q=q+o+"s are already lining up. It's going to be busy as fuck. "
l="Oh shit, the "+r+" learns that The Lonely "+p+" never was delivered. The "+o+"s already lined up are close to rioting. The sound of "+$.w+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+p+". The "+o+"s lined up cheer and enter the theater. The Lonely "+p+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
p=this.y
t.h(0,new R.G("Premiere the Movie",!1,[new U.b(q),new U.b(l),new U.b(r)],H.a([],m),R.n(),!1,!1,new Y.am("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(s,t,null),$.aa)},
gA:function(){return this.cx},
ga3:function(){return this.cy},
ga4:function(){return this.db},
gu:function(){return this.dx},
ga5:function(){return this.dy}}
N.iE.prototype={
Y:function(){return!0},
F:function(a){return!0},
Z:function(){return this.F(0)},
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Feather'd Cap",H.a([$.af,$.D,$.du],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Crown",H.a([$.ag,$.mD,$.D,$.du],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Gunpowder",H.a([$.ex,$.D],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
ao:function(){return!0},
p:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.C])
t.h(0,$.b2,$.i)
t.h(0,$.b9,$.i)
t.h(0,$.bX,$.u)
r="With the closing of the curtain, the "+$.o+" has released the frogs, and yet they are nowhere to be found. The "
q=$.j
p=[U.b]
t.h(0,new R.aq("Destroy the Lack of Frogs",!1,[new U.b(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.b("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.b("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.aw(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q=$.o
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.j
r=r+o+" to get it back to normal. They organize a team of "
n=$.m
t.h(0,new R.P("Fix All The Things",!1,[new U.b(r+n+"s to start rebuilding infrastructure."),new U.b("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.V+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.b("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
this.c.h(0,new X.r(s,t,null),$.au)},
gu:function(){return this.k2},
gV:function(){return this.k3},
gU:function(){return this.k4},
gD:function(){return this.r1}}
U.b.prototype={}
U.K.prototype={}
R.iF.prototype={
n:function(a){return H.q(new H.cd(H.kK(this),null))+": "+this.c},
gG:function(a){return this.c}}
R.G.prototype={}
R.E.prototype={}
R.P.prototype={}
R.aq.prototype={}
E.iG.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Curtain",H.a([$.af,$.F,$.bd],s),null,!1,"Show Ender")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Cursed Sword",H.a([$.U,$.hE,$.ez,$.F,$.cR,$.bn,$.bd,$.ew,$.aQ],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Megaphone",H.a([$.U,$.c1,$.av,$.F,$.bd],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Bike Horn",H.a([$.aS,$.U,$.c1,$.dv,$.dx,$.F,$.bd],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Bacchus Wine",H.a([$.c0,$.dv,$.ar,$.F,$.ag,$.bd],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Nightmare Fuel",H.a([$.at,$.F,$.bn,$.c2,$.ex,$.bd],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.T,P.C]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.mk,$.h)
q.h(0,$.bR,$.h)
q.h(0,$.bS,$.h)
q.h(0,$.bv,$.i)
q.h(0,$.aD,$.i)
q.h(0,$.aN,$.i)
q.h(0,$.aM,$.u)
q.h(0,$.cN,$.i)
q.h(0,$.dm,$.h)
q.h(0,$.ld,$.h)
q.h(0,$.eh,$.h)
q.h(0,$.ms,$.h)
q.h(0,$.hd,$.i)
q.h(0,$.dr,$.h)
p=$.j
o="The "+p+" is chilling in a "
n=$.m
o=o+n+" village when a bunch of sentient "
m=$.V
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.o
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.h(0,new R.E("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.K(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.eX(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
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
q.h(0,new R.E("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.K(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
h=this.c
h.h(0,new X.r(s,q,null),$.ac)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.bU,$.h)
s.h(0,$.aD,$.i)
s.h(0,$.aM,$.h)
s.h(0,$.bb,$.h)
s.h(0,$.ba,$.h)
s.h(0,$.b2,$.i)
s.h(0,$.lc,$.u)
s.h(0,$.bR,$.i)
s.h(0,$.bw,$.h)
s.h(0,$.aI,$.h)
s.h(0,$.cN,$.u)
p=$.w
o="The "+p+"ing and capering "
n=$.m
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.j
o=o+m+" to do a stupid "
l=$.ad
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.o
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.h(0,new R.E("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.K(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
h.h(0,new X.r(q,s,null),$.ac)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.mk,$.h)
t.h(0,$.cN,$.h)
t.h(0,$.aM,$.h)
t.h(0,$.bw,$.i)
t.h(0,$.ba,$.h)
r=$.j
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.m+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.o+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.h(0,new R.E("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.K(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
h.h(0,new X.r(s,t,null),$.ac)},
gK:function(){return this.rx},
gT:function(){return this.ry},
gu:function(){return this.x1},
gD:function(){return this.x2},
gS:function(){return this.y1},
ga0:function(){return this.y2},
gR:function(){return this.m},
ga2:function(){return this.t},
gA:function(){return this.v}}
L.iH.prototype={
gK:function(){return this.rx},
gT:function(){return this.ry},
gu:function(){return this.x1},
gD:function(){return this.x2},
gS:function(){return this.y1},
gR:function(){return this.y2},
gA:function(){return this.m}}
Y.ct.prototype={}
Y.b7.prototype={}
Y.y.prototype={
gG:function(a){return this.c}}
Y.H.prototype={}
Y.am.prototype={}
Y.fG.prototype={}
Y.ao.prototype={}
Y.eV.prototype={}
Y.em.prototype={}
Y.eW.prototype={}
Z.iM.prototype={
gK:function(){return this.rx},
gT:function(){return this.ry},
gu:function(){return this.x1},
gD:function(){return this.x2},
gS:function(){return this.y1},
ga0:function(){return this.y2},
gR:function(){return this.m}}
N.iN.prototype={
Y:function(){return!0},
F:function(a){return!1},
Z:function(){return this.F(0)},
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Domino Mask",H.a([$.af,$.D,$.du],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Archery Set",H.a([$.oT,$.D,$.du,$.oQ],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Gristtorrent Server",H.a([$.ag,$.as,$.av,$.D,$.an,$.bf],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
a6:function(){return 1.25},
a7:function(){return 1.25},
a8:function(){return 1},
ao:function(){return!0},
p:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.C])
t.h(0,$.aM,$.h)
t.h(0,$.aN,$.i)
t.h(0,$.bV,$.i)
r="The "+$.o+" cannot release the frogs since the corrupt Noble "
q=$.m
r=r+q+"s have hoarded them. The "
p=$.j
o=[U.b]
t.h(0,new R.aq("Steal the Frogs",!1,[new U.b(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.aw(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
p=$.j
q="The "+p+" learns of the extreme injustices of the "
r=$.m
q=q+r+"s who rose to power during the tyranny of "
n=$.o
t.h(0,new R.P("Lead a Rebellion",!1,[new U.b(q+n+". This cannot stand!"),new U.b("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.b("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
this.c.h(0,new X.r(s,t,null),$.au)},
gu:function(){return this.k1},
gV:function(){return this.k2},
gU:function(){return this.k3},
gD:function(){return this.k4}}
Q.iO.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Red Rose",H.a([$.cl,$.aR],s),null,!1,"Seductive Plant")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Shipping Grid",H.a([$.cl,$.R],s),"Don't let ABJ see this.",!1,"Grid of Sin")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Chocolate Bar",H.a([$.cl,$.c0],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Candelabra",H.a([$.cl,$.c2],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Head Cannon",H.a([$.cl,$.ex,$.U,$.eB],s),"Fuck you for that pun, JR.",!1,null)
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Her Pitch Passions Novel",H.a([$.ai,$.R,$.cl],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.T,P.C]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.aO,$.h)
q.h(0,$.ei,$.i)
q.h(0,$.dh,$.i)
q.h(0,$.eg,$.h)
q.h(0,$.bb,$.i)
q.h(0,$.hc,$.u)
p=$.j
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.m
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.V+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.b]
q.h(0,new R.G("Set the Mood",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.n(),!1,!1,new Y.am("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.p)
p=this.r
p.h(0,new X.r(s,q,null),$.aa)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.bb,$.i)
s.h(0,$.bT,$.h)
s.h(0,$.eg,$.h)
s.h(0,$.aO,$.i)
s.h(0,$.cM,$.u)
s.h(0,$.hc,$.u)
o=$.m
n="A Romantic "+o+" approaches the "
m=$.j
s.h(0,new R.G("Plan the Date",!1,[new U.b(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.b("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.b(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,s,null),$.aa)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.hc,$.h)
t.h(0,$.aO,$.h)
t.h(0,$.dh,$.i)
t.h(0,$.lg,$.h)
t.h(0,$.eg,$.h)
t.h(0,$.bb,$.i)
t.h(0,$.cM,$.u)
r=$.j
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.m
t.h(0,new R.G("Ship All the Ships",!1,[new U.b(q+o+"s have no idea what's coming. "),new U.b("The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.w+"s ring out through the air.  "),new U.b("The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.o+"'s stupid rules. ")],H.a([],l),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
r=$.j
o="The "+r+"  and the "
q=$.c6
t.h(0,new R.G("Flushed Shipping Dungeon",!1,[new U.b(o+q+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+r+"  and the "+q+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.cs(),!1,!1,new Y.em(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q=$.j
r="The "+q+"  and the "
o=$.c6
t.h(0,new R.G("Pale Shipping Dungeon",!1,[new U.b(r+o+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+q+"  and the "+o+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.cs(),!1,!1,new Y.eV(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.a9)
o=$.j
q="The "+o+"  and the "
r=$.c6
t.h(0,new R.G("Pitched Shipping Dungeon",!1,[new U.b(q+r+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+o+"  and the "+r+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.cs(),!1,!1,new Y.eW(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.a9)
p.h(0,new X.r(s,t,null),$.aa)},
gA:function(){return this.cx},
ga3:function(){return this.cy},
ga4:function(){return this.db},
gu:function(){return this.dx},
ga5:function(){return this.dy}}
T.iQ.prototype={
$1:function(a){return!a.gaX()},
$S:function(){return{func:1,args:[T.c8]}}}
T.c8.prototype={
q:function(){var t,s
t=Q.t(null,null,A.Q)
s=A.f("Perfectly Generic Object",H.a([],[G.M]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.a.j(t.b,new Q.e(s,t.k(s,1),[H.A(t,0)]))
this.db=t},
F:function(a){return!1},
Z:function(){return this.F(0)},
ao:function(){return!1},
a6:function(){return 1},
a8:function(){return 1},
a7:function(){return 1},
Y:function(){return!1},
p:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.T,P.C]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bv,$.h)
q.h(0,$.ak,$.u)
q.h(0,$.bX,$.h)
q.h(0,$.aD,$.i)
q.h(0,$.cL,$.u)
p=$.j
o="The "+p+" learns that all of the local "
n=$.m
m=[U.b]
q.h(0,new R.P("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.w+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
n=this.c
n.h(0,new X.r(s,q,null),$.au)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.dq,$.h)
s.h(0,$.dn,$.u)
s.h(0,$.dp,$.i)
s.h(0,$.b8,$.h)
s.h(0,$.aN,$.u)
p=$.j
o="The "+p+" learns that all of the local "
l=$.m
s.h(0,new R.P("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.w+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p=$.j
l="The "+p+" learns that all of the local "
o=$.m
s.h(0,new R.P("Do the Teamwork",!1,[new U.b(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.b("The "+p+" grabs the "+$.c6+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.w+"ing in amazement. The factory is saved! ")],H.a([],m),R.cs(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
n.h(0,new X.r(q,s,null),$.au)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.ae,$.h)
t.h(0,$.ak,$.u)
t.h(0,$.aE,$.i)
r=$.j
q="The "+r+" learns that all of the local "
p=$.m
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.w
t.h(0,new R.G("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.lC(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.u)
l=$.j
p="The "+l+" learns that all of the local "
r=$.m
t.h(0,new R.P("Relax the Consorts",!1,[new U.b(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(s,t,null),$.au)},
n:function(a){return this.b},
M:function(a,b,c,d){var t=this.b
this.d=t
this.e=new X.ee("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.e6]),H.a([],[M.dg]))
this.q()
this.p()
t=this.f
if($.$get$f_().ad(t))H.az("Duplicate class id for "+this.n(0)+": "+t+" is already registered for "+J.aH($.$get$f_().l(0,t))+".")
$.$get$f_().h(0,t,this)},
gG:function(a){return this.b},
gae:function(a){return this.f},
gbJ:function(){return this.r},
gaX:function(){return this.x},
gu:function(){return this.dx},
gV:function(){return this.dy},
gU:function(){return this.fr},
gD:function(){return this.fx},
gA:function(){return this.fy},
gaL:function(){return this.id}}
E.iR.prototype={
Y:function(){return!0},
F:function(a){return!1},
Z:function(){return this.F(0)},
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Sage's Robe",H.a([$.af,$.D,$.bm,$.an,$.aB,$.ag],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Peer Reviewed Journal",H.a([$.R,$.D,$.ai,$.an],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Guru Pillow",H.a([$.af,$.D,$.lo,$.an],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.C])
t.h(0,$.ef,$.i)
t.h(0,$.ak,$.i)
t.h(0,$.ej,$.h)
t.h(0,$.ae,$.u)
t.h(0,$.aX,$.h)
r="The "+$.o+" has blocked access to the books for the duration. The "
q=$.j
p=[U.b]
t.h(0,new R.aq("Understand the Frogs",!1,[new U.b(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.m+"s to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.aw(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q="Now that the "+$.o+" is defeated, it is time to begin recovery efforts. The "
r=$.m
q=q+r+"s ask the "
o=$.j
t.h(0,new R.P("Be the Sage",!1,[new U.b(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.w+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.b("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.b("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
this.c.h(0,new X.r(s,t,null),$.au)},
gu:function(){return this.k1},
gV:function(){return this.k2},
gU:function(){return this.k3},
gD:function(){return this.k4},
gA:function(){return this.y1}}
Y.iS.prototype={
gK:function(){return this.rx},
gT:function(){return this.ry},
gu:function(){return this.x1},
gD:function(){return this.x2},
gS:function(){return this.y1},
gR:function(){return this.y2},
gA:function(){return this.m}}
Y.iT.prototype={
Y:function(){return!1},
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Walking Stick",H.a([$.at,$.D,$.cT],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Adorable Girlscout Beret",H.a([$.af,$.D,$.p_,$.an,$.ag],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Map",H.a([$.R,$.D,$.an],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Compass",H.a([$.U,$.D,$.an,$.aB],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
F:function(a){return!0},
Z:function(){return this.F(0)},
p:function(){var t,s,r,q,p
t=[P.B]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.C])
t.h(0,$.bW,$.h)
t.h(0,$.aE,$.h)
t.h(0,$.ak,$.h)
t.h(0,$.aI,$.u)
t.h(0,$.ae,$.u)
r="Now that the "+$.o+" has been defeated, the planet has really opened up. The "
q=$.j
p=[U.b]
t.h(0,new R.P("Blaze a Trail",!1,[new U.b(r+q+" eagerly begins to explore uncharted territory. "),new U.b("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.b("Deep in a forgotten forest, in a temple covered in golden "+$.m+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
q="The "+$.o+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.j
t.h(0,new R.aq("Find the Frogs",!1,[new U.b(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.m+" "+$.w+"s in time to stop them.   ")],H.a([],p),R.aw(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
this.c.h(0,new X.r(s,t,null),$.au)},
gu:function(){return this.k1},
gV:function(){return this.k2},
gU:function(){return this.k3},
gD:function(){return this.k4}}
L.iU.prototype={
Y:function(){return!1},
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Scroll",H.a([$.R,$.D,$.an],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Ink Pot",H.a([$.be,$.D,$.bf,$.an],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Blank Book",H.a([$.R,$.D,$.ai,$.an,$.bf,$.ag],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
F:function(a){return!0},
Z:function(){return this.F(0)},
p:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.C])
t.h(0,$.l8,$.h)
t.h(0,$.ak,$.h)
t.h(0,$.aX,$.h)
t.h(0,$.ae,$.i)
t.h(0,$.b9,$.i)
r="The "+$.o+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.j
p=[U.b]
t.h(0,new R.aq("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.aw(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q="Now that the "+$.o+" has been taken care of, the "
r=$.j
q=q+r+" discovers a large library of "
o=$.m
t.h(0,new R.P("Restore the Library",!1,[new U.b(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.b("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.b(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
this.c.h(0,new X.r(s,t,null),$.au)},
gu:function(){return this.k1},
gV:function(){return this.k2},
gU:function(){return this.k3},
gD:function(){return this.k4},
gA:function(){return this.y1}}
S.iV.prototype={
Y:function(){return!1},
F:function(a){return!1},
Z:function(){return this.F(0)},
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Cueball",H.a([$.hy,$.lr,$.D,$.aP,$.bo,$.ag],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Crystal Ball",H.a([$.hy,$.oW,$.D,$.ck],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Binoculars",H.a([$.be,$.D,$.U],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Blindfold",H.a([$.oS,$.D,$.bm],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
a6:function(){return 0.67},
a7:function(){return 0.67},
a8:function(){return 1},
p:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.C])
t.h(0,$.op,$.h)
t.h(0,$.lb,$.h)
t.h(0,$.on,$.h)
t.h(0,$.bw,$.i)
r="Now that the "+$.o+" has been defeated, the land is really starting to open up. The "
q=$.j
r=r+q+" finds a tunnel filled with Blind "
p=$.m
o=[U.b]
t.h(0,new R.P("Be the King",!1,[new U.b(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.b("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.b("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.n(),!1,!1,new Y.b7("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
q="The "+$.o+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.j
t.h(0,new R.aq("Understand the Frogs",!1,[new U.b(q+p+" thinks hard and figures out the best way to organize the "+$.m+"s to start collecting frogs. "),new U.b("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.aw(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
p=$.j
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.m
t.h(0,new R.P("Work With Exiles",!1,[new U.b(q+r+"s to carry everything out."),new U.b("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.n(),!1,!1,new Y.b7("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
r="A group of underlings are still making trouble, even after the defeat of the "+$.o+". The "
p=$.j
r=r+p+" begins planting rumors of a huge "
q=$.V
t.h(0,new R.P("Have the Keikaku",!1,[new U.b(r+q+" Treasure in the center of a still active dungeon. "),new U.b("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.n(),!1,!1,new Y.b7("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
this.c.h(0,new X.r(s,t,null),$.au)},
gu:function(){return this.k1},
gV:function(){return this.k2},
gU:function(){return this.k3},
gD:function(){return this.k4},
gA:function(){return this.y1}}
L.iY.prototype={
gK:function(){return this.rx}}
O.j_.prototype={
gaL:function(){return this.rx},
gK:function(){return this.ry}}
N.j0.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Fiduspawn Plush",H.a([$.ey,$.af,$.bm],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Teddy Bear",H.a([$.ey,$.af,$.bm],s),null,!1,"Cuddle Bear")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Dice",H.a([$.oY,$.as],s),null,!1,"D113")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Pigeon",H.a([$.hz,$.bo,$.cS,$.cQ,$.ew,$.pe],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Cat Ears",H.a([$.af,$.bm,$.ey],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Religious Text",H.a([$.ai,$.R],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Psychology Book",H.a([$.ai,$.R],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Therapy Couch",H.a([$.bm,$.af],s),null,!1,"Giant Problem Absorbing Couch")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("FLARP Manual",H.a([$.ai,$.R,$.an],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.T,P.C]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.cj,$.u)
q.h(0,$.ae,$.i)
q.h(0,$.b9,$.h)
q.h(0,$.aX,$.i)
p=$.j
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.m
m=[U.b]
q.h(0,new R.G("The Therapist is IN",!1,[new U.b(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.b("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.ad+" or "+$.V+".  The "+p+" is getting really good at helping them out. "),new U.b("A line of "+$.w+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p=this.r
p.h(0,new X.r(s,q,null),$.aa)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.cj,$.u)
s.h(0,$.ae,$.h)
s.h(0,$.b9,$.h)
s.h(0,$.ml,$.h)
s.h(0,$.bb,$.h)
s.h(0,$.mt,$.h)
s.h(0,$.aX,$.i)
o=$.j
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.w
n=n+l+"ing "
k=$.m
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.ad
s.h(0,new R.G("Meditate On Frogism",!1,[new U.b(n),new U.b(j+i+"-ness. How could they miss this?"),new U.b(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,s,null),$.aa)
s=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.b8,$.u)
t.h(0,$.bT,$.h)
t.h(0,$.aE,$.h)
t.h(0,$.bV,$.h)
t.h(0,$.dl,$.h)
r=$.j
q="The "+r+" wanders into an entire crowd of "
o=$.m
q=q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.w+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."
n="The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "
r="The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy."
o=this.y
t.h(0,new R.G("Protect the FLARPers",!1,[new U.b(q),new U.b(n),new U.b(r)],H.a([],m),R.n(),!1,!1,new Y.am("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(s,t,null),$.aa)},
gA:function(){return this.cx},
ga3:function(){return this.cy},
ga4:function(){return this.db},
gu:function(){return this.dx},
ga5:function(){return this.dy}}
N.j1.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Frog Statue",H.a([$.aS,$.eC,$.F],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Frog Costume",H.a([$.af,$.F],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Nuclear Reactor",H.a([$.hC,$.an,$.av,$.F],s),null,!1,"A Representation of My Hatred for Everything")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Telescope",H.a([$.U,$.be,$.an,$.F],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Green Sun Poster",H.a([$.R,$.F,$.mE,$.ag],s),"Huh.",!1,"Sauce Sun Poster")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m
t=$.j
s=[P.B]
r=H.a(["Wherever the "+t+" goes, they find a "+$.m+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.w+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.o+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
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
t=new H.l(0,null,null,null,null,null,0,[N.T,P.C])
t.h(0,$.bw,$.u)
t.h(0,$.mn,$.h)
s=[U.b]
t.h(0,new R.E("Light the Forge",!1,[new U.b(r[0]),new U.b(q[0]),new U.b(n[0]+" "+m[0])],H.a([],s),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.a9)
t.h(0,new R.E("Light the Forge",!1,[new U.b(r[1]),new U.b(q[1]),new U.b(n[1]+" "+m[1])],H.a([],s),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.a9)
t.h(0,new R.E("Light the Forge",!1,[new U.b(r[2]),new U.b(q[2]),new U.b(n[2]+" "+m[2])],H.a([],s),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.a9)
t.h(0,new R.E("Light the Forge",!1,[new U.b(r[2]),new U.b(q[0]),new U.b(n[1]+" "+m[0])],H.a([],s),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.a9)
t.h(0,new R.E("Light the Forge",!1,[new U.b(r[2]),new U.b(q[1]),new U.b(n[1]+" "+m[2])],H.a([],s),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.a9)
t.h(0,new R.E("Light the Forge",!1,[new U.b(r[0]),new U.b(q[1]),new U.b(n[2]+" "+m[0])],H.a([],s),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.a9)
p=$.j
t.h(0,new R.aq("Breed the Frogs, But Be Boring About It",!1,[new U.b("The "+p+" collects all sorts of frogs. Various "+$.m+"s 'help' by "+$.w+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.n(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
this.c.h(0,new X.r(o,t,null),$.qa)},
gK:function(){return this.rx},
gT:function(){return this.ry},
gu:function(){return this.x1},
gD:function(){return this.x2},
gS:function(){return this.y1},
ga0:function(){return this.y2},
gR:function(){return this.m},
ga2:function(){return this.t},
gA:function(){return this.v}}
U.j4.prototype={
gK:function(){return this.rx}}
R.jd.prototype={
Y:function(){return!0},
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Meddler's Guide",H.a([$.ai,$.D,$.R,$.dv,$.ag,$.bK],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("First Aid Kit",H.a([$.be,$.D,$.bK],s),"Heals here.",!1,"Anti-Pain Box")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=$.D
r=A.f("Cloud in a Bottle",H.a([r,r,$.bc],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Fairy Wings",H.a([$.aB,$.D,$.ck,$.aR,$.R],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
F:function(a){return!1},
Z:function(){return this.F(0)},
a6:function(){return 1},
a7:function(){return 1},
a8:function(){return 1.5},
ao:function(){return!0},
p:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.C])
t.h(0,$.b9,$.h)
t.h(0,$.ae,$.h)
t.h(0,$.bW,$.i)
t.h(0,$.ej,$.i)
t.h(0,$.om,$.i)
t.h(0,$.cL,$.i)
t.h(0,$.l7,$.i)
t.h(0,$.oq,$.i)
r=$.j
q="The "+r+" decides to take a break after defeating "+$.o+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.m
o=[U.b]
t.h(0,new R.P("Heal the Timeline",!1,[new U.b(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.b("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.b("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.w+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.mV(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
r=$.m
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.j
t.h(0,new R.P("Be The Sylph",!1,[new U.b(p+q+" is unimpressed. "),new U.b("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.b("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
r=$.m
q="The "+r+"s are so stressed after all that shit with the "+$.o+". They are yelling and "+$.w+" at each other over the slightest of insults. The "
p=$.j
t.h(0,new R.P("Relax the Consorts",!1,[new U.b(q+p+" decides that what they really need is to chill the fuck out. "),new U.b("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.b("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p="The "+$.o+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.j
p=p+r+" purifies the pools "
q=$.m
t.h(0,new R.aq("Purify the Frogs",!1,[new U.b(p),new U.b("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.b("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.aw(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
r="The defeat of the "+$.o+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.m
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.j
t.h(0,new R.P("Purify the Water",!1,[new U.b(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.b("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.b("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.ad+". Huh. Okay then.")],H.a([],o),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
this.c.h(0,new X.r(s,t,null),$.au)},
gu:function(){return this.k1},
gV:function(){return this.k2},
gU:function(){return this.k3},
gD:function(){return this.k4},
gA:function(){return this.y1}}
D.ji.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Robot",H.a([$.av,$.U,$.bo,$.an],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Circuit Board",H.a([$.av,$.U],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Datastructures for Assholes",H.a([$.av,$.R],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("~ATH - A Handbook for the Imminently Deceased ",H.a([$.av,$.R,$.aQ,$.ai],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("3-D Printer",H.a([$.as,$.av,$.U],s),null,!1,"3-D Shitpost Maker")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Virus on a USB Stick",H.a([$.p3,$.U],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Wrench",H.a([$.pl,$.U,$.aP],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Computer",H.a([$.av,$.U],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.T,P.C]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.hf,$.i)
q.h(0,$.di,$.h)
q.h(0,$.dq,$.h)
q.h(0,$.aN,$.u)
p=$.j
o="The "+p+" learns from their "
n=$.m
o=o+n+"s about the great "
m=$.ad
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.o+" destroyed it. "
o="The "+p+" searches for the "
l=$.V
k=[U.b]
q.h(0,new R.G("Fix the Machine",!1,[new U.b(n),new U.b(o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "),new U.b("The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory.  ")],H.a([],k),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
m=$.j
l="The "+m+" is approached by a "
p=$.m
p=l+p+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+p+"s are at a loss as to what to do. The "+m+" agrees to help decipher the puzzle. I mean, look at the little guy "
l=$.w
q.h(0,new R.G("Decipher the Enigma",!1,[new U.b(p+l+"ing, how could they not? "),new U.b("The "+m+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.o+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.b("The "+m+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.V+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+l+"s ")],H.a([],k),R.cY(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
l=this.r
l.h(0,new X.r(s,q,null),$.aa)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.dq,$.h)
s.h(0,$.dn,$.u)
s.h(0,$.dp,$.i)
s.h(0,$.b8,$.h)
s.h(0,$.aN,$.u)
p=$.j
o="The "+p+" learns that all of the local "
n=$.m
s.h(0,new R.G("Produce the Goods",!1,[new U.b(o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.w+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". ")],H.a([],k),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p=$.j
n="The "+p+" finds two groups of "
o=$.m
n=n+o+"s screaming and "
m=$.w
n=n+m+"ing at each other. Apparently the first group of "+m+"s are workers at a local "
j=$.V
n=n+j+" factory and want to be paid more? The second group of "+o+"s claim they don't work hard enough for a raise.  "
m="The "+p+" arranges for the worker "+o+"s to meet with the factory manager "+o+"s individually and discuss their complaints. The "+p+" is getting a headache from all the "+m+"ing, but at least progress is being made."
j="The "+p+" is shaking hands for a "+o+" newspaper, posing in front of the now bustling "+j+" factory. The workers are paid a fair wage, and several ways to make the factory work more efficiently has left the managers happy, too. "
o=this.y
s.h(0,new R.G("Stop the Dispute",!1,[new U.b(n),new U.b(m),new U.b(j)],H.a([],k),R.c5(),!1,!1,new Y.am("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.p)
l.h(0,new X.r(q,s,null),$.ac)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.hf,$.u)
t.h(0,$.di,$.h)
t.h(0,$.dq,$.h)
t.h(0,$.aN,$.u)
r=$.j
q="The "+r+" learns from a mysterious "+$.m+" in a black trenchcoat about a great "
p=$.ad
q=q+p+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
o=$.o
t.h(0,new R.G("Learn the Secret",!1,[new U.b(q+o+"? "),new U.b("The "+r+" searches for clues about the "+p+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+p+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.b("At last, the "+r+" has found a cave with a terminal to the "+p+" MACHINE. <b>TELL ME ABOUT "+o+".</b>, they type. <b><i>ERROR: TERM '"+o+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],k),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
l.h(0,new X.r(s,t,null),$.aa)},
gA:function(){return this.cx},
ga3:function(){return this.cy},
ga4:function(){return this.db},
gu:function(){return this.dx},
ga5:function(){return this.dy}}
V.jj.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Lighter",H.a([$.U,$.c2],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Siberia Poster",H.a([$.R,$.c_],s),null,!1,"Poster of the Shoguns Birthplace")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Nuclear Winter Poster",H.a([$.R,$.c_,$.hC],s),null,!1,"Shoguns Dream as a Poster")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Doomsday Device",H.a([$.U,$.aQ,$.hC,$.bg,$.ew],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Juggalo Poster",H.a([$.R,$.p8],s),null,!1,"False God Poster")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Fancy Watch",H.a([$.U,$.eD,$.bg],s),null,!1,"Shoguns Watch")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Magnificent Crown",H.a([$.U,$.eD,$.bg],s),null,!1,"The Shoguns Crown")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Bitching Clothes",H.a([$.af,$.du,$.bg],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Ceramic Pork Hollow",H.a([$.lk,$.eD],s),"...",!1,"Shoguns Old Porkhollow")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Shit Ton of Guns",H.a([$.U,$.pf,$.eB,$.bg],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Sniper Rifle",H.a([$.U,$.pi,$.eB,$.bg],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("AK-47",H.a([$.U,$.pb,$.eB,$.bg],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("IED",H.a([$.mF,$.cR,$.U,$.ex,$.bg],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Idiots Guide To Being An Asshole",H.a([$.R,$.dv,$.ai],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Bike Horn",H.a([$.dx,$.U,$.c1,$.dv],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Matches",H.a([$.at,$.c2],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.T,P.C]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.b2,$.i)
q.h(0,$.bT,$.h)
q.h(0,$.bY,$.h)
q.h(0,$.eh,$.h)
q.h(0,$.lf,$.h)
q.h(0,$.bV,$.i)
p=$.j
o=[U.b]
q.h(0,new R.G("Start the Fires",!1,[new U.b("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.b("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.b(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.n(),!1,!1,new Y.b7("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p=this.r
p.h(0,new X.r(s,q,null),$.aa)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.b2,$.i)
s.h(0,$.bT,$.h)
s.h(0,$.aO,$.h)
s.h(0,$.bV,$.i)
n=$.j
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.m
s.h(0,new R.G("All About the Boonies, Baby",!1,[new U.b(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.b("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.V+" underling. Tremble at the fearsome "+$.ad+" "+l+".   "),new U.b(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.n(),!1,!1,new Y.b7("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,s,null),$.aa)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bv,$.h)
q.h(0,$.ak,$.u)
q.h(0,$.bX,$.h)
q.h(0,$.aD,$.i)
q.h(0,$.cL,$.u)
q.h(0,$.bR,$.u)
n=$.j
m="The "+n+" learns that all of the local "
l=$.m
q.h(0,new R.G("Revive the Consorts",!1,[new U.b(m+l+"s are dead. This is....pretty cool, actually. "),new U.b("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.w+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(s,q,null),$.aa)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.aM,$.h)
t.h(0,$.bR,$.u)
t.h(0,$.dm,$.h)
t.h(0,$.ld,$.h)
t.h(0,$.aN,$.i)
t.h(0,$.dr,$.i)
s=$.j
r="The "+s+" finds a crowd of "
n=$.w
r=r+n+"ing "
m=$.m
r=r+m+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+m+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
l="The "+s+" meets with the upper class "+m+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.ad+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+m+"s have been defeated. The high class "+m+"s murmur dignified "+n+"s and give the "+s+" several medals. "
n=this.y
t.h(0,new R.G("Stop a Rebellion",!1,[new U.b(r),new U.b(l),new U.b(s)],H.a([],o),R.n(),!1,!1,new Y.am("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,t,null),$.aa)},
gA:function(){return this.cx},
ga3:function(){return this.cy},
ga4:function(){return this.db},
gu:function(){return this.dx},
ga5:function(){return this.dy}}
X.r.prototype={
n:function(a){return"Theme: "+H.q(this.a)}}
U.jm.prototype={
Y:function(){return!1},
F:function(a){return!0},
Z:function(){return this.F(0)},
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Lockpick",H.a([$.U,$.D,$.bf,$.ez,$.ag],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Sneaking Suit",H.a([$.af,$.D,$.bf],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Dagger",H.a([$.U,$.D,$.ez,$.cR,$.oX],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
a6:function(){return 1.5},
a7:function(){return 0.8},
a8:function(){return 1},
ao:function(){return!0},
p:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.C])
t.h(0,$.aM,$.h)
t.h(0,$.bS,$.i)
t.h(0,$.aI,$.i)
t.h(0,$.b8,$.i)
r="The "+$.o+" cannot release the frogs since the corrupt "
q=$.m
r=r+q+" Cops have confiscated them. The "
p=$.j
o=[U.b]
t.h(0,new R.aq("Steal the Frogs",!1,[new U.b(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.aw(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
p=$.j
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.o+"'s layer and slated to be returned to the "
r=$.m
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.w+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.db
t.h(0,new R.P("Escape the Law",!1,[new U.b(q),new U.b(n),new U.b(p)],H.a([],o),R.n(),!1,!1,new Y.am("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.p)
r=$.m
p="A weeping "+r+" approaches the "
n=$.j
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.o
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.ad+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.w+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.db
t.h(0,new R.P("Free The Prisoner",!1,[new U.b(q),new U.b(p),new U.b(n)],H.a([],o),R.n(),!1,!1,new Y.am("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.p)
r=$.o
n="Now that the "+r+" has been defeated, the "
p=$.m
n=n+p+"s have recovered their precious "
q=$.V
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.j
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.w
l=n+l+"worth, the disaffected Heir to the "+$.ad+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.db
t.h(0,new R.P("Shit, Let's Be a Heist Movie",!1,[new U.b(r),new U.b(l),new U.b(q),new U.b(m)],H.a([],o),R.n(),!1,!1,new Y.am("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.p)
this.c.h(0,new X.r(s,t,null),$.au)},
gu:function(){return this.k1},
gV:function(){return this.k2},
gU:function(){return this.k3},
gD:function(){return this.k4}}
N.jn.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Grandfather Clock",H.a([$.at,$.ar,$.eD,$.F],s),null,!1,"Ticking Tower of Time")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Drum",H.a([$.pa,$.F,$.aZ],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Dead Doppelganger",H.a([$.aS,$.cS,$.F,$.cQ,$.bn,$.aQ],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Music Box",H.a([$.U,$.F,$.aZ,$.ar],s),null,!1,"Cube of Noise")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Turn Tables",H.a([$.U,$.F,$.aZ,$.ag,$.aJ],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Metronome",H.a([$.U,$.F,$.aZ],s),null,!1,"Never Ending Ticking Device")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.T,P.C]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.or,$.a9)
q.h(0,$.aN,$.i)
q.h(0,$.b8,$.i)
q.h(0,$.dp,$.h)
p=$.o
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.j
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.r2
l=[U.b]
q.h(0,new R.P("Destroy 1000 Clocks",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.cr(),!1,!1,new Y.am("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.h)
n=$.j
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.m+"s, they set out to fix the "
m=$.V
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.o
q.h(0,new R.E("Fix the Clockwork",!1,[new U.b(p),new U.b(o),new U.b(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.K("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
j=this.c
j.h(0,new X.r(s,q,null),$.ac)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.hd,$.h)
s.h(0,$.bY,$.u)
s.h(0,$.aN,$.h)
p=$.j
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.m+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.o
s.h(0,new R.E("Synchronize the Rhythm",!1,[new U.b(o),new U.b(n),new U.K(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
j.h(0,new X.r(q,s,null),$.ac)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.aE,$.h)
t.h(0,$.ae,$.i)
t.h(0,$.b9,$.h)
t.h(0,$.bW,$.h)
r=$.o
q="The door to the "+r+"'s  lair is barred by a door locked with three identical missing "
p=$.V
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
o=$.j
q=q+o+" prepares for a bullshit item collection quest. "
n="The "+o+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.m+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+o+" any less frustrated."
m="In a flash of insight, the "+o+" realizes that they can just use their Time Instrument to go back before they first visited the "+r+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+p+" Pieces and the door is open. Time to prepare for a boss fight. "
r="The "+o+" is ready to fight the "+r+". "
k="Whew, doomed timeline averted. The "+o+" goes back in time to restore the 3 "+p+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.h(0,new R.E("Walk Another Path",!1,[new U.b(q),new U.b(n),new U.b(m),new U.K(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.eX(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.h)
k=$.o
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.V
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.j
t.h(0,new R.E("Destroy Timelines",!1,[new U.b(p+r+" prepares for a bullshit item collection quest. "),new U.b("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.m+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.b("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.K("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.cr(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.h)
r="With the defeat of the "+$.o+", "
k=$.j
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.m
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.ad
t.h(0,new R.P("Shatter the Timeline",!1,[new U.b(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.b("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.b("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.b("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.cr(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
p=$.m
k="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.j
t.h(0,new R.E("Move Forwards, Never Stop",!1,[new U.b(k+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.b("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.w+"s mysteriously.  "),new U.b("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.K("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.o+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
j.h(0,new X.r(s,t,null),$.ac)},
gK:function(){return this.ry},
gT:function(){return this.x1},
gu:function(){return this.x2},
gD:function(){return this.y1},
gS:function(){return this.y2},
ga0:function(){return this.m},
gR:function(){return this.t},
ga2:function(){return this.C},
gA:function(){return this.J}}
G.M.prototype={}
G.e9.prototype={$isaA:1,
$asaA:function(){return[G.e9]}}
G.hG.prototype={
$1:function(a){return!1},
$S:function(){return{func:1,args:[G.M]}}}
Q.jw.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Cardboard Box",H.a([$.R,$.F,$.bf],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Hole Punch",H.a([$.U,$.F,$.bf],s),null,!1,"Paper Impaler")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Smoke Bombs",H.a([$.ex,$.F,$.bf,$.mF],s),null,!1,"Vape Grenades")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Tribal Mask",H.a([$.cQ,$.F,$.bf,$.bn,$.hF],s),null,!1,"Ancient Face")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Opera Mask",H.a([$.as,$.F,$.bf,$.ar],s),null,!1,"Phantom of the Opera Mask")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Black Hole in a Bottle.",H.a([$.F,$.ag,$.mE,$.bf,$.be],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.r2=t},
p:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.T,P.C]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.cj,$.h)
q.h(0,$.le,$.h)
q.h(0,$.he,$.h)
q.h(0,$.lb,$.h)
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
q.h(0,new R.P("Be Forgettable",!1,[new U.b(p),new U.b(o),new U.b(n)],H.a([],l),R.n(),!1,!1,new Y.am("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.p)
m=$.j
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.o
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.h(0,new R.E("Go to Nowhere",!1,[new U.b(n),new U.b(o),new U.b(p),new U.K(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
i=this.c
i.h(0,new X.r(s,q,null),$.ac)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.cj,$.i)
s.h(0,$.le,$.i)
s.h(0,$.he,$.i)
s.h(0,$.aM,$.h)
p=$.j
o="Even with the victory of the "+p+" over the villainous "
n=$.o
o=o+n+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.m+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
m=$.V
s.h(0,new R.P("Reveal the Tomes",!1,[new U.b(o+m+" will provide insight."),new U.b("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.b("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.b("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.cY(),!1,!1,new Y.y("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
m=$.j
s.h(0,new R.E("[REDACTED]",!1,[new U.b("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.b("The "+m+" [REDACTED]s and it actually works! Everyone "+$.w+" in surprise. This might just be crazy enough to work."),new U.b("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.K("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.o+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.m+"s.")],H.a([],l),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
i.h(0,new X.r(q,s,null),$.ac)
s=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.cj,$.h)
t.h(0,$.le,$.h)
t.h(0,$.he,$.h)
r=$.j
q="Suddenly the "+r+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
p="The "+r+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
o="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+r+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+r+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
n="Faced with a huge underling that is probably too high a level to fight, the "+r+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+r+" attempts to sneak up on the "+$.o+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+r+" has defeated the major challenge of their land."
t.h(0,new R.E("Walk of Faith",!1,[new U.b(q),new U.b(p),new U.b(o),new U.b(n),new U.K(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
i.h(0,new X.r(s,t,null),$.ac)},
gK:function(){return this.rx},
gT:function(){return this.ry},
gu:function(){return this.x1},
gD:function(){return this.x2},
gS:function(){return this.y1},
ga0:function(){return this.y2},
gR:function(){return this.m},
ga2:function(){return this.t},
gA:function(){return this.v}}
E.jx.prototype={
Y:function(){return!0},
F:function(a){return!0},
Z:function(){return this.F(0)},
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Yardstick",H.a([$.cT,$.D,$.mJ,$.ag],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("SBURBSim Hacking Guide",H.a([$.ai,$.D,$.ls,$.R],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Body Pillow of JR",H.a([$.af,$.D,$.lo,$.p7,$.bm],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Nanobots",H.a([$.pj,$.D,$.my],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
p:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.C])
t.h(0,$.bw,$.h)
t.h(0,$.cN,$.h)
t.h(0,$.dk,$.h)
t.h(0,$.bW,$.h)
t.h(0,$.dj,$.h)
t.h(0,$.la,$.h)
t.h(0,$.he,$.i)
r=$.j
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.m
o=[U.b]
t.h(0,new R.G("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.mV(),!1,!1,new Y.ct("Rewards/no_reward.png",null),1,null,null),$.p)
r=$.o
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.j
n=q+" tries to manually separate the turtles by catching them with a net and "+$.aG+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.w
t.h(0,new R.E("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.K(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.pr(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.p)
q=$.j
t.h(0,new R.G("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.n(),!1,!1,new Y.ct("Rewards/no_reward.png",null),1,null,null),$.p)
q="A wizened "+$.m+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.j
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.o
t.h(0,new R.E("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.a9)
m=$.j
t.h(0,new R.E("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.m+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.o+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.n(),!1,!1,new Y.H("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.a9)
m="A wizened "+$.m+" tells the "
r=$.j
t.h(0,new R.P("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.n(),!1,!1,new Y.b7("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.u)
r="A "+$.m+" that is also a SHOGUN minion tells the "
m=$.j
t.h(0,new R.P("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.ps(),!1,!1,new Y.y("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
m=$.j
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.db
t.h(0,new R.P("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.n(),!1,!1,new Y.am("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.u)
n=$.o
m="The "+n+" explains um. What? Where did the "
q=$.j
t.h(0,new R.aq("Waste the Frogs",!1,[new U.b(m+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.m+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.aw(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
this.c.h(0,new X.r(s,t,null),$.ac)},
gu:function(){return this.k1},
gV:function(){return this.k2},
gU:function(){return this.k3},
gD:function(){return this.k4},
gA:function(){return this.y1}}
M.jB.prototype={
Y:function(){return!1},
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Cauldron",H.a([$.p9,$.D,$.aB],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Flying Broom",H.a([$.lj,$.cT,$.D,$.at,$.aB],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Warped Mirror",H.a([$.mH,$.D,$.aB,$.bf,$.ag],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.db=t},
F:function(a){return!0},
Z:function(){return this.F(0)},
ao:function(){return!0},
a6:function(){return 2},
a8:function(){return 1.5},
a7:function(){return 1},
p:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.T,P.C])
t.h(0,$.aD,$.i)
t.h(0,$.ei,$.i)
t.h(0,$.bv,$.i)
t.h(0,$.b8,$.i)
t.h(0,$.ba,$.i)
t.h(0,$.mn,$.i)
r=$.o
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.m
q=q+p+" consorts. It's up to the "
o=$.j
n=[U.b]
t.h(0,new R.aq("Brew the Frogs",!1,[new U.b(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.b("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.b("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.aw(),!1,!1,new Y.ao("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
o="Even with the defeat of the "+$.o+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
r=$.m
o=o+r+" settlement, and crops refuse to thrive at "
p=$.ad
o=o+p+" Ranch. The "+r+"s seem to have accepted everything as just how things are, but the "
q=$.j
o=o+q+" isn't going to give up until they show the status quo just how 'quo' it isn't!"
m="Alright, it turns out that through a mixture of Alchemy, game powers and pure elbow grease, the "+q+" has managed to make a river flow backwards.   Now instead of flooding, the valley is draining itself.  Progress!"
r="The "+q+" doesn't feel like KILLING the giant underlings rampaging in the "+r+" settlement. What's the fun in that? They try a variety of techniques until the underlings are as calm and friendly as "+r+"s themselves.   Now they are productive members of society! "
p="The "+q+" twists how plants and soil and growth works until the crops at "+p+" Ranch are finally thriving. With that, they have finally kicked the former status quo to the curb!  "
q=this.db
t.h(0,new R.P("Twist All The Things",!1,[new U.b(o),new U.b(m),new U.b(r),new U.b(p)],H.a([],n),R.n(),!1,!1,new Y.am("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.p)
q="A Mysterious "+$.m+" approaches the "
p=$.j
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.ad
q=q+r+" was discovered amongst the "+$.o+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.db
t.h(0,new R.P("Brew The Potion",!1,[new U.b(q),new U.b(m),new U.b(p)],H.a([],n),R.n(),!1,!1,new Y.am("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.p)
r=$.m
p="A young "+r+" approaches the "
m=$.j
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.ad
t.h(0,new R.P("Train the Apprentice",!1,[new U.b(p+q+"mancer and agrees to train them. "),new U.b("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.V+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.b("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.w+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.n(),!1,!1,new Y.y(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
this.c.h(0,new X.r(s,t,null),$.au)},
gu:function(){return this.k1},
gV:function(){return this.k2},
gU:function(){return this.k3},
gD:function(){return this.k4},
gA:function(){return this.y1}}
F.jC.prototype={
q:function(){var t,s,r,q
t=Q.t(null,null,A.Q)
s=[G.M]
r=A.f("Make a World Book",H.a([$.R,$.ar,$.ai],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.A(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Quill Pen",H.a([$.bm,$.af,$.mI],s),null,!1,"Dead Bird Scribing Tool")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Book On Writing",H.a([$.ai,$.R,$.an],s),null,!1,"How to do words for unsmarts")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("FLARP Manual",H.a([$.ai,$.R,$.an],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Script",H.a([$.ai,$.R],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Fancy Pen",H.a([$.U,$.an,$.mI,$.ar],s),null,!1,"Ink Bleeding Plastic Finger")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Spiral Bound Notebook",H.a([$.ai,$.R,$.U],s),null,!1,"Spinney Spine Scribing Station")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Half Written Novel",H.a([$.ai,$.R],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
p:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.T,P.C]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.cj,$.h)
q.h(0,$.aX,$.h)
q.h(0,$.ak,$.i)
q.h(0,$.ae,$.i)
q.h(0,$.ef,$.i)
p=$.j
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.m+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.b]
q.h(0,new R.G("Stop the Vandals",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.n(),!1,!1,new Y.am("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.p)
m=this.r
m.h(0,new X.r(s,q,null),$.aa)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.bV,$.i)
s.h(0,$.b2,$.i)
s.h(0,$.aO,$.i)
s.h(0,$.ak,$.i)
p=$.m
o="An Excited "+p+" rushes up to the "
n=$.j
s.h(0,new R.G("Read the Fan Fiction",!1,[new U.b(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.w+"ing so much? "),new U.b("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.b(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.n(),!1,!1,new Y.b7("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(q,s,null),$.aa)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.b2,$.i)
t.h(0,$.bT,$.h)
t.h(0,$.aO,$.h)
t.h(0,$.bV,$.i)
t.h(0,$.dk,$.h)
r=$.j
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.m
t.h(0,new R.G("Be the DM",!1,[new U.b(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.b("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.b(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.b("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.n(),!1,!1,new Y.b7("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(s,t,null),$.aa)},
gA:function(){return this.cx},
ga3:function(){return this.cy},
ga4:function(){return this.db},
gu:function(){return this.dx},
ga5:function(){return this.dy}}
A.dd.prototype={}
A.cg.prototype={
n:function(a){return"rgb("+H.q(this.b)+", "+H.q(this.c)+", "+H.q(this.d)+", "+H.q(this.a)+")"},
bS:function(a){var t,s,r,q
if(a){t=this.b
if(typeof t!=="number")return t.aF()
s=this.c
if(typeof s!=="number")return s.aF()
r=this.d
if(typeof r!=="number")return r.aF()
q=this.a
if(typeof q!=="number")return H.d6(q)
return(t<<24|s<<16|r<<8|q)>>>0}t=this.b
if(typeof t!=="number")return t.aF()
s=this.c
if(typeof s!=="number")return s.aF()
r=this.d
if(typeof r!=="number")return H.d6(r)
return(t<<16|s<<8|r)>>>0},
eK:function(a){var t=C.b.cL(this.bS(!1),16)
return"#"+C.e.cD(t,6,"0").toUpperCase()},
bT:function(){return this.eK(!1)},
I:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.cg){t=this.b
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
gX:function(a){return this.bS(!0)},
ap:function(a,b){var t,s,r,q
if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.aw()
s=this.c
if(typeof s!=="number")return s.aw()
r=this.d
if(typeof r!=="number")return r.aw()
q=this.a
if(typeof q!=="number")return q.aw()
return A.m6(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.ap()
s=this.c
if(typeof s!=="number")return s.ap()
r=this.d
if(typeof r!=="number")return r.ap()
return A.e8(t+b,s+b,r+b,this.a)}throw H.z("Cannot add ["+H.q(J.m0(b))+" "+H.q(b)+"] to a Colour. Only Colour, double and int are valid.")},
aq:function(a,b){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.aw()
s=this.c
if(typeof s!=="number")return s.aw()
r=this.d
if(typeof r!=="number")return r.aw()
q=this.a
if(typeof q!=="number")return q.aw()
return A.m6(t/255*b,s/255*b,r/255*b,q/255)},
l:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.z("Colour index out of range: "+H.q(b))},
h:function(a,b,c){var t,s
t=J.e1(b)
if(t.aE(b,0)||t.aD(b,3))throw H.z("Colour index out of range: "+H.q(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.I(b,0)){this.b=C.b.P(c,0,255)
this.e=!0
this.y=!0}else if(t.I(b,1)){this.c=C.b.P(c,0,255)
this.e=!0
this.y=!0}else if(t.I(b,2)){this.d=C.b.P(c,0,255)
this.e=!0
this.y=!0}else this.a=C.b.P(c,0,255)
else if(t.I(b,0)){this.b=C.b.P(J.fq(J.lY(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.I(b,1)){this.c=C.b.P(J.fq(J.lY(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.kI(c)
if(t.I(b,2)){this.d=C.b.P(J.fq(s.aq(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.b.P(J.fq(s.aq(c,255)),0,255)}},
dc:function(a,b,c,d){this.b=C.d.P(C.d.P(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.d.P(C.d.P(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.d.P(C.d.P(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.d.P(J.nA(d,0,255),0,255)}}
A.kG.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.B]}}}
A.iy.prototype={
l:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.ad(b)?t.l(0,b):$.$get$lA()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.ad(b)?t.l(0,b):$.$get$lA()}throw H.z(P.fv(b,"'name' should be a String name or int id only",null))},
gO:function(a){var t=this.a
t=t.gaB(t)
return new H.eL(null,J.bk(t.a),t.b,[H.A(t,0),H.A(t,1)])},
i:function(a,b,c,d){var t,s
t=this.a
if(t.ad(b))this.aa(0,b)
s=this.dN()
if(typeof s!=="number")return s.eO()
if(s>=256)throw H.z(P.fv(s,"Palette colour ids must be in the range 0-255",null))
t.h(0,b,c)
this.b.h(0,s,c)
this.c.h(0,b,s)
this.d.h(0,s,b)},
aa:function(a,b){var t,s,r
t=this.a
if(!t.ad(b))return
s=this.c
r=s.l(0,b)
t.aa(0,b)
this.b.aa(0,r)
s.aa(0,b)
this.d.aa(0,r)},
dN:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.ad(s))return s;++s}},
e5:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=document
s=t.createElement("div")
r=s.style
r.padding="3px"
r.margin="3px"
r.outline="1px solid black"
r.display="inline-block"
r.textAlign="left"
r=t.createElement("span")
q=r.style
q.fontWeight="bold"
r.textContent=a
s.appendChild(r)
for(r=this.b,q=new P.fe(r,r.bt(),0,null,[H.A(r,0)]),p=this.d;q.E();){o=q.d
n=p.l(0,o)
m=r.l(0,o)
l=t.createElement("div")
k=t.createElement("div")
k.title=m.bT().toUpperCase()
j=k.style
j.position="relative"
j.display="inline-block"
j.marginRight="3px"
j.width="10px"
j.height="10px"
i=C.b.cL(m.bS(!1),16)
i="#"+C.e.cD(i,6,"0").toUpperCase()
j.backgroundColor=i
h=t.createElement("span")
h.textContent=H.q(o)+": "+H.q(n)
l.appendChild(k)
l.appendChild(h)
s.appendChild(l)}return s}}
A.eU.prototype={
$asx:function(){return[A.cg]},
$isx:1}
A.iI.prototype={
d_:function(a){var t=P.qp(a)
this.a=t
this.b=a+1},
ey:function(a,b){var t
if(a.gaf(a))return
t=a.eP(this.a.es())
return t},
ex:function(a){return this.ey(a,!0)}}
D.j6.prototype={
$1:function(a){return a.gez()},
$S:function(){return{func:1,args:[D.aT]}}}
D.aT.prototype={
n:function(a){return this.a},
gG:function(a){return this.a},
gez:function(){return this.d}}
D.fa.prototype={}
D.iL.prototype={}
X.kU.prototype={
$2:function(a,b){return J.fo(J.d9(a),J.d9(b))},
$S:function(){return{func:1,args:[L.bO,L.bO]}}}
X.kV.prototype={
$2:function(a,b){return J.fo(J.d9(a),J.d9(b))},
$S:function(){return{func:1,args:[T.c8,T.c8]}}}
X.kW.prototype={
$2:function(a,b){return J.fo(J.d9(a),J.d9(b))},
$S:function(){return{func:1,args:[B.bZ,B.bZ]}}}
X.l1.prototype={
$1:function(a){var t=this.a.style
if(t.display==="none"){t.display="block"
C.i.bk(this.b,"[-]")}else{t.display="none"
C.i.bk(this.b,"[+]")}},
$S:function(){return{func:1,args:[W.bL]}}}
Q.bA.prototype={
k:function(a,b){return b},
n:function(a){return J.aH(this.gbg())},
ag:function(a,b){return Q.lH(this,b,H.aj(this,"bA",0),null)},
a_:function(a,b){return Q.lG(this,!1,!0,null,H.aj(this,"bA",0))},
ah:function(a){return this.a_(a,!0)},
$isx:1,
$asx:null}
Q.jz.prototype={
gbg:function(){return this.b},
l:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.S(t,b)
return J.l3(t[b])},
h:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.S(t,b)
t[b]=new Q.e(c,s,this.$ti)},
gw:function(a){return this.b.length},
n:function(a){return P.eE(this.b,"[","]")},
ag:function(a,b){return Q.lH(this,b,H.A(this,0),null)},
a_:function(a,b){return Q.lG(this,!1,!0,null,H.A(this,0))},
ah:function(a){return this.a_(a,!0)},
dg:function(a,b,c){var t,s
this.a=a
t=[[Q.e,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.f6.prototype={$asbA:null,$asx:null,$asO:null,$asJ:null,$isO:1,$isJ:1,$isx:1}
Q.e.prototype={
n:function(a){return"("+H.q(this.a)+" @ "+H.q(this.b)+")"},
gaY:function(a){return this.a},
geM:function(){return this.b}}
Q.cA.prototype={
gbg:function(){return this.b},
gO:function(a){var t=new Q.jy(null,[H.aj(this,"cA",0)])
t.a=J.bk(this.b)
return t},
gw:function(a){return J.d8(this.b)},
n:function(a){return J.aH(this.b)},
ag:function(a,b){return Q.lH(this,b,H.aj(this,"cA",0),null)},
a_:function(a,b){return Q.lG(this,!1,!0,null,H.aj(this,"cA",0))},
ah:function(a){return this.a_(a,!0)}}
Q.dO.prototype={$asbA:null,$asx:null,$isx:1}
Q.jy.prototype={
gH:function(){return J.l3(this.a.gH())},
E:function(){return this.a.E()}}
Q.f7.prototype={
$ascA:function(a,b){return[b]},
$asdO:function(a,b){return[b]},
$asbA:function(a,b){return[b]},
$asx:function(a,b){return[b]}}
Q.jA.prototype={
$1:function(a){return new Q.e(this.c.$1(J.l3(a)),a.geM(),[this.b])},
$S:function(){return H.lQ(function(a,b){return{func:1,args:[[Q.e,a]]}},this,"f7")}}
J.I.prototype.d5=J.I.prototype.n
J.dy.prototype.d7=J.dy.prototype.n
P.bs.prototype.d8=P.bs.prototype.b3
P.bs.prototype.d9=P.bs.prototype.b2
P.x.prototype.d6=P.x.prototype.bh
W.b1.prototype.bm=W.b1.prototype.aj
W.dW.prototype.da=W.dW.prototype.as;(function installTearOffs(){installTearOff(H.d1.prototype,"gep",0,0,0,null,["$0"],["bf"],1)
installTearOff(H.bD.prototype,"gcR",0,0,0,null,["$1"],["ac"],3)
installTearOff(H.cB.prototype,"ge9",0,0,0,null,["$1"],["au"],3)
installTearOff(P,"qz",1,0,0,null,["$1"],["qf"],2)
installTearOff(P,"qA",1,0,0,null,["$1"],["qg"],2)
installTearOff(P,"qB",1,0,0,null,["$1"],["qh"],2)
installTearOff(P,"no",1,0,0,null,["$0"],["qw"],1)
installTearOff(P.bC.prototype,"gc3",0,0,0,null,["$2","$1"],["b4","dv"],6)
var t
installTearOff(t=P.bs.prototype,"gcc",0,0,0,null,["$0"],["b8"],1)
installTearOff(t,"gcd",0,0,0,null,["$0"],["b9"],1)
installTearOff(t=P.dQ.prototype,"gcc",0,0,0,null,["$0"],["b8"],1)
installTearOff(t,"gcd",0,0,0,null,["$0"],["b9"],1)
installTearOff(t,"gdD",0,0,0,null,["$1"],["dE"],function(){return H.lQ(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"dQ")})
installTearOff(t,"gdH",0,0,0,null,["$2"],["dI"],7)
installTearOff(t,"gdF",0,0,0,null,["$0"],["dG"],1)
installTearOff(P,"qE",1,0,0,null,["$2"],["oh"],10)
installTearOff(W,"qJ",1,0,0,null,["$4"],["ql"],5)
installTearOff(W,"qK",1,0,0,null,["$4"],["qm"],5)
installTearOff(W.ch.prototype,"gaY",0,1,0,null,["$1"],["aA"],8)
installTearOff(W.en.prototype,"gaY",0,1,0,null,["$1"],["aA"],4)
installTearOff(W.f0.prototype,"gaY",0,1,0,null,["$1"],["aA"],4)
installTearOff(W.dV.prototype,"gaY",0,1,0,null,["$1"],["aA"],9)
installTearOff(R,"cs",1,0,0,null,["$1"],["pF"],0)
installTearOff(R,"pr",1,0,0,null,["$1"],["pt"],0)
installTearOff(R,"mV",1,0,0,null,["$1"],["pE"],0)
installTearOff(R,"aw",1,0,0,null,["$1"],["pD"],0)
installTearOff(R,"lD",1,0,0,null,["$1"],["pC"],0)
installTearOff(R,"mU",1,0,0,null,["$1"],["pA"],0)
installTearOff(R,"eX",1,0,0,null,["$1"],["pz"],0)
installTearOff(R,"cr",1,0,0,null,["$1"],["pw"],0)
installTearOff(R,"c5",1,0,0,null,["$1"],["py"],0)
installTearOff(R,"cY",1,0,0,null,["$1"],["pB"],0)
installTearOff(R,"lC",1,0,0,null,["$1"],["px"],0)
installTearOff(R,"n",1,0,0,null,["$1"],["pu"],0)
installTearOff(R,"ps",1,0,0,null,["$1"],["pv"],0)
installTearOff(X,"nw",1,0,0,null,["$0"],["qR"],1)})();(function inheritance(){inherit(P.ap,null)
var t=P.ap
inherit(H.lv,t)
inherit(J.I,t)
inherit(J.fw,t)
inherit(P.x,t)
inherit(H.eK,t)
inherit(P.eF,t)
inherit(H.ek,t)
inherit(H.cK,t)
inherit(H.kg,t)
inherit(H.d1,t)
inherit(H.jS,t)
inherit(H.cC,t)
inherit(H.kf,t)
inherit(H.jI,t)
inherit(H.cZ,t)
inherit(H.jo,t)
inherit(H.bI,t)
inherit(H.bD,t)
inherit(H.cB,t)
inherit(H.iK,t)
inherit(H.jr,t)
inherit(P.ci,t)
inherit(H.fg,t)
inherit(H.cd,t)
inherit(H.l,t)
inherit(H.hV,t)
inherit(H.hX,t)
inherit(P.fd,t)
inherit(P.bC,t)
inherit(P.fb,t)
inherit(P.cx,t)
inherit(P.j7,t)
inherit(P.bs,t)
inherit(P.fc,t)
inherit(P.jN,t)
inherit(P.kj,t)
inherit(P.cI,t)
inherit(P.kC,t)
inherit(P.k7,t)
inherit(P.fe,t)
inherit(P.iX,t)
inherit(P.kd,t)
inherit(P.cE,t)
inherit(P.cU,t)
inherit(P.dJ,t)
inherit(P.bq,t)
inherit(P.ke,t)
inherit(P.bN,t)
inherit(P.aA,t)
inherit(P.bu,t)
inherit(P.bP,t)
inherit(P.iv,t)
inherit(P.f3,t)
inherit(P.jX,t)
inherit(P.fU,t)
inherit(P.O,t)
inherit(P.by,t)
inherit(P.cu,t)
inherit(P.B,t)
inherit(P.dM,t)
inherit(W.fI,t)
inherit(W.jH,t)
inherit(W.dT,t)
inherit(W.cP,t)
inherit(W.eR,t)
inherit(W.dW,t)
inherit(W.ky,t)
inherit(W.el,t)
inherit(W.c4,t)
inherit(W.kt,t)
inherit(W.fh,t)
inherit(P.kl,t)
inherit(B.bZ,t)
inherit(L.bO,t)
inherit(A.eU,t)
inherit(T.c8,t)
inherit(X.ee,t)
inherit(X.e6,t)
inherit(M.dg,t)
inherit(N.T,t)
inherit(E.iu,t)
inherit(E.v,t)
inherit(A.Q,t)
inherit(U.b,t)
inherit(Y.ct,t)
inherit(X.r,t)
inherit(G.M,t)
inherit(A.dd,t)
inherit(A.cg,t)
inherit(A.iI,t)
inherit(D.aT,t)
inherit(Q.bA,t)
inherit(Q.e,t)
t=J.I
inherit(J.hK,t)
inherit(J.eH,t)
inherit(J.dy,t)
inherit(J.cm,t)
inherit(J.cV,t)
inherit(J.cn,t)
inherit(H.dE,t)
inherit(H.cX,t)
inherit(W.df,t)
inherit(W.e5,t)
inherit(W.e7,t)
inherit(W.eq,t)
inherit(W.eb,t)
inherit(W.fL,t)
inherit(W.ec,t)
inherit(W.L,t)
inherit(W.hZ,t)
inherit(W.ip,t)
inherit(W.iq,t)
inherit(W.er,t)
inherit(W.jL,t)
inherit(W.es,t)
t=J.dy
inherit(J.iB,t)
inherit(J.cz,t)
inherit(J.co,t)
inherit(J.lu,J.cm)
t=J.cV
inherit(J.eG,t)
inherit(J.hL,t)
t=P.x
inherit(H.J,t)
inherit(H.dA,t)
inherit(H.bB,t)
t=H.J
inherit(H.cp,t)
inherit(H.hW,t)
inherit(P.k8,t)
inherit(H.ed,H.dA)
t=P.eF
inherit(H.eL,t)
inherit(H.f8,t)
inherit(Q.jy,t)
t=H.cp
inherit(H.cW,t)
inherit(P.hY,t)
t=H.cK
inherit(H.l_,t)
inherit(H.l0,t)
inherit(H.kb,t)
inherit(H.jT,t)
inherit(H.hw,t)
inherit(H.hx,t)
inherit(H.ki,t)
inherit(H.jp,t)
inherit(H.jq,t)
inherit(H.l2,t)
inherit(H.kP,t)
inherit(H.kQ,t)
inherit(H.kR,t)
inherit(H.kS,t)
inherit(H.kT,t)
inherit(H.jh,t)
inherit(H.hM,t)
inherit(H.kL,t)
inherit(H.kM,t)
inherit(H.kN,t)
inherit(P.jE,t)
inherit(P.jD,t)
inherit(P.jF,t)
inherit(P.jG,t)
inherit(P.jY,t)
inherit(P.k1,t)
inherit(P.jZ,t)
inherit(P.k_,t)
inherit(P.k0,t)
inherit(P.k4,t)
inherit(P.k5,t)
inherit(P.k3,t)
inherit(P.k2,t)
inherit(P.j8,t)
inherit(P.j9,t)
inherit(P.ja,t)
inherit(P.jb,t)
inherit(P.jK,t)
inherit(P.jJ,t)
inherit(P.kk,t)
inherit(P.kD,t)
inherit(P.kn,t)
inherit(P.ko,t)
inherit(P.kp,t)
inherit(P.k9,t)
inherit(P.i3,t)
inherit(P.fP,t)
inherit(P.fQ,t)
inherit(W.kF,t)
inherit(W.jW,t)
inherit(W.is,t)
inherit(W.ir,t)
inherit(W.kv,t)
inherit(W.kw,t)
inherit(W.kA,t)
inherit(W.kB,t)
inherit(L.fx,t)
inherit(B.hv,t)
inherit(A.hI,t)
inherit(A.hH,t)
inherit(T.iQ,t)
inherit(G.hG,t)
inherit(A.kG,t)
inherit(D.j6,t)
inherit(X.kU,t)
inherit(X.kV,t)
inherit(X.kW,t)
inherit(X.l1,t)
inherit(Q.jA,t)
t=H.jI
inherit(H.d2,t)
inherit(H.dX,t)
t=P.ci
inherit(H.eS,t)
inherit(H.hN,t)
inherit(H.jt,t)
inherit(H.iP,t)
inherit(P.eT,t)
inherit(P.bH,t)
inherit(P.aU,t)
inherit(P.f5,t)
inherit(P.c9,t)
inherit(P.bl,t)
inherit(P.fK,t)
t=H.jh
inherit(H.j5,t)
inherit(H.db,t)
t=H.cX
inherit(H.ie,t)
inherit(H.eM,t)
t=H.eM
inherit(H.dF,t)
inherit(H.dG,t)
inherit(H.dH,H.dF)
inherit(H.eN,H.dH)
inherit(H.dI,H.dG)
inherit(H.eO,H.dI)
t=H.eN
inherit(H.ig,t)
inherit(H.ih,t)
t=H.eO
inherit(H.ii,t)
inherit(H.ij,t)
inherit(H.ik,t)
inherit(H.il,t)
inherit(H.im,t)
inherit(H.eP,t)
inherit(H.io,t)
t=P.fc
inherit(P.jM,t)
inherit(P.jO,t)
inherit(P.kx,P.kj)
t=P.cx
inherit(P.dP,t)
inherit(W.jU,t)
inherit(P.dQ,P.bs)
inherit(P.kh,P.dP)
inherit(P.km,P.kC)
inherit(P.ff,H.l)
inherit(P.iW,P.iX)
inherit(P.ka,P.iW)
inherit(P.kc,P.ka)
inherit(P.eJ,P.dJ)
t=P.bu
inherit(P.C,t)
inherit(P.N,t)
t=P.bH
inherit(P.eY,t)
inherit(P.ht,t)
t=W.df
inherit(W.ab,t)
inherit(W.i6,t)
inherit(W.dD,t)
inherit(W.f9,t)
inherit(W.ku,t)
t=W.ab
inherit(W.b1,t)
inherit(W.cf,t)
inherit(W.ea,t)
inherit(W.d0,t)
inherit(W.jP,t)
t=W.b1
inherit(W.Z,t)
inherit(P.ax,t)
t=W.Z
inherit(W.ft,t)
inherit(W.fu,t)
inherit(W.fA,t)
inherit(W.cJ,t)
inherit(W.fF,t)
inherit(W.fR,t)
inherit(W.hg,t)
inherit(W.en,t)
inherit(W.hr,t)
inherit(W.hu,t)
inherit(W.hP,t)
inherit(W.hU,t)
inherit(W.i2,t)
inherit(W.dC,t)
inherit(W.i7,t)
inherit(W.it,t)
inherit(W.iw,t)
inherit(W.iz,t)
inherit(W.f0,t)
inherit(W.iZ,t)
inherit(W.f2,t)
inherit(W.f4,t)
inherit(W.jf,t)
inherit(W.jg,t)
inherit(W.dN,t)
inherit(W.jk,t)
inherit(W.k6,t)
inherit(W.ch,W.eq)
t=W.L
inherit(W.fS,t)
inherit(W.hl,t)
inherit(W.bz,t)
inherit(W.j2,t)
inherit(W.j3,t)
inherit(W.hh,W.e5)
inherit(W.i8,W.dD)
inherit(W.bL,W.bz)
inherit(W.b4,P.eJ)
inherit(W.et,W.er)
inherit(W.eQ,W.et)
inherit(W.jQ,W.ec)
inherit(W.eu,W.es)
inherit(W.dV,W.eu)
inherit(W.jR,W.jH)
inherit(W.lJ,W.jU)
inherit(W.jV,P.j7)
inherit(W.kz,W.dW)
t=P.ax
inherit(P.aF,t)
inherit(P.ce,t)
inherit(P.fV,t)
inherit(P.fW,t)
inherit(P.fX,t)
inherit(P.fY,t)
inherit(P.fZ,t)
inherit(P.h_,t)
inherit(P.h0,t)
inherit(P.h1,t)
inherit(P.h2,t)
inherit(P.h3,t)
inherit(P.h4,t)
inherit(P.h5,t)
inherit(P.h6,t)
inherit(P.h7,t)
inherit(P.h8,t)
inherit(P.h9,t)
inherit(P.hi,t)
inherit(P.i4,t)
inherit(P.i5,t)
inherit(P.iA,t)
inherit(P.dK,t)
inherit(P.je,t)
inherit(P.jv,t)
inherit(P.dS,t)
inherit(P.kq,t)
inherit(P.kr,t)
inherit(P.ks,t)
t=P.aF
inherit(P.fr,t)
inherit(P.hs,t)
inherit(P.jc,t)
inherit(P.cy,t)
inherit(P.ju,t)
inherit(P.jl,P.cy)
t=B.bZ
inherit(S.fs,t)
inherit(M.fy,t)
inherit(A.fH,t)
inherit(M.fJ,t)
inherit(V.fM,t)
inherit(U.ha,t)
inherit(N.hO,t)
inherit(F.id,t)
inherit(G.iC,t)
inherit(Q.iO,t)
inherit(N.j0,t)
inherit(D.ji,t)
inherit(V.jj,t)
inherit(F.jC,t)
inherit(A.iy,A.eU)
inherit(L.W,A.iy)
t=T.c8
inherit(O.fz,t)
inherit(Z.fE,t)
inherit(Y.hm,t)
inherit(Y.hn,t)
inherit(B.hp,t)
inherit(S.hQ,t)
inherit(Z.i_,t)
inherit(S.i0,t)
inherit(U.i1,t)
inherit(E.ic,t)
inherit(V.ix,t)
inherit(N.iE,t)
inherit(N.iN,t)
inherit(E.iR,t)
inherit(Y.iT,t)
inherit(L.iU,t)
inherit(S.iV,t)
inherit(R.jd,t)
inherit(U.jm,t)
inherit(E.jx,t)
inherit(M.jB,t)
t=L.bO
inherit(T.fB,t)
inherit(T.fD,t)
inherit(U.fN,t)
inherit(Z.fO,t)
inherit(L.hb,t)
inherit(O.hj,t)
inherit(T.ho,t)
inherit(X.hq,t)
inherit(Q.hR,t)
inherit(K.hS,t)
inherit(G.hT,t)
inherit(L.i9,t)
inherit(V.ia,t)
inherit(S.ib,t)
inherit(E.iG,t)
inherit(L.iH,t)
inherit(Z.iM,t)
inherit(Y.iS,t)
inherit(L.iY,t)
inherit(O.j_,t)
inherit(N.j1,t)
inherit(U.j4,t)
inherit(N.jn,t)
inherit(Q.jw,t)
inherit(E.eo,E.iu)
t=E.v
inherit(E.cH,t)
inherit(E.e4,t)
inherit(U.K,U.b)
inherit(R.iF,N.T)
t=R.iF
inherit(R.G,t)
inherit(R.E,t)
inherit(R.P,t)
inherit(R.aq,R.P)
t=Y.ct
inherit(Y.y,t)
inherit(Y.H,t)
inherit(Y.am,t)
inherit(Y.fG,t)
inherit(Y.eV,t)
inherit(Y.em,t)
inherit(Y.eW,t)
t=Y.y
inherit(Y.b7,t)
inherit(Y.ao,t)
inherit(G.e9,G.M)
t=D.aT
inherit(D.fa,t)
inherit(D.iL,t)
t=Q.bA
inherit(Q.f6,t)
inherit(Q.dO,t)
inherit(Q.jz,Q.f6)
inherit(Q.cA,Q.dO)
inherit(Q.f7,Q.cA)
mixin(H.dF,P.bq)
mixin(H.dH,H.ek)
mixin(H.dG,P.bq)
mixin(H.dI,H.ek)
mixin(P.dJ,P.bq)
mixin(W.eq,W.fI)
mixin(W.er,P.bq)
mixin(W.et,W.cP)
mixin(W.es,P.bq)
mixin(W.eu,W.cP)
mixin(A.eU,P.cU)
mixin(Q.f6,P.bq)
mixin(Q.dO,P.cU)})();(function constants(){C.l=W.cJ.prototype
C.m=W.ch.prototype
C.v=J.I.prototype
C.a=J.cm.prototype
C.b=J.eG.prototype
C.w=J.eH.prototype
C.d=J.cV.prototype
C.e=J.cn.prototype
C.D=J.co.prototype
C.q=J.iB.prototype
C.i=W.f2.prototype
C.r=W.f4.prototype
C.k=J.cz.prototype
C.t=new P.iv()
C.u=new P.jN()
C.c=new P.km()
C.n=new P.bP(0)
C.x=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.o=function(hooks) { return hooks; }
C.y=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.z=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.A=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.p=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.B=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.C=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.E=H.a(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.B])
C.F=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.G=makeConstList([])
C.f=H.a(makeConstList(["bind","if","ref","repeat","syntax"]),[P.B])
C.h=H.a(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.B])
C.H=H.ay("qX")
C.I=H.ay("qY")
C.j=H.ay("qZ")
C.J=H.ay("r_")
C.K=H.ay("r0")
C.L=H.ay("r2")
C.M=H.ay("r3")
C.N=H.ay("r4")
C.O=H.ay("mN")
C.P=H.ay("by")
C.Q=H.ay("B")
C.R=H.ay("r5")
C.S=H.ay("r6")
C.T=H.ay("r7")
C.U=H.ay("r8")
C.V=H.ay("bN")
C.W=H.ay("C")
C.X=H.ay("N")
C.Y=H.ay("bu")})();(function staticFields(){$.mQ="$cachedFunction"
$.mR="$cachedInvocation"
$.bJ=0
$.dc=null
$.m3=null
$.lS=null
$.nl=null
$.nt=null
$.kH=null
$.kO=null
$.lT=null
$.d3=null
$.dY=null
$.dZ=null
$.lN=!1
$.al=C.c
$.mj=0
$.bQ=null
$.l6=null
$.mh=null
$.mg=null
$.md=null
$.mc=null
$.mb=null
$.me=null
$.ma=null
$.o5=null
$.o7=null
$.nM=null
$.nN=null
$.nL=null
$.nR=null
$.nX=null
$.nV=null
$.o8=null
$.o_=null
$.nS=null
$.nU=null
$.nO=null
$.nW=null
$.nY=null
$.o0=null
$.o2=null
$.o3=null
$.o1=null
$.nT=null
$.nP=null
$.o4=null
$.nQ=null
$.o6=null
$.nZ=null
$.a_="accent"
$.X="aspect1"
$.a0="aspect2"
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
$.u=1
$.p=0.1
$.oq=null
$.cL=null
$.oo=null
$.dn=null
$.ej=null
$.l9=null
$.om=null
$.mp=null
$.mu=null
$.hc=null
$.l7=null
$.lh=null
$.dl=null
$.bX=null
$.op=null
$.l8=null
$.li=null
$.dq=null
$.ei=null
$.dh=null
$.aO=null
$.bv=null
$.dp=null
$.lg=null
$.aE=null
$.aM=null
$.mm=null
$.he=null
$.dm=null
$.ef=null
$.bw=null
$.bY=null
$.hf=null
$.bR=null
$.eh=null
$.aD=null
$.lf=null
$.on=null
$.ae=null
$.aX=null
$.b9=null
$.aN=null
$.le=null
$.aI=null
$.bU=null
$.bS=null
$.dk=null
$.bT=null
$.bV=null
$.la=null
$.cN=null
$.eg=null
$.mq=null
$.mk=null
$.b8=null
$.ba=null
$.ak=null
$.di=null
$.cM=null
$.ms=null
$.lb=null
$.hd=null
$.mo=null
$.bb=null
$.mt=null
$.ml=null
$.os=null
$.dj=null
$.b2=null
$.cj=null
$.bW=null
$.ds=null
$.mn=null
$.mr=null
$.or=null
$.lc=null
$.ld=null
$.dr=null
$.oA=null
$.ot=null
$.ou=null
$.ov=null
$.ow=null
$.ox=null
$.oy=null
$.oz=null
$.oC=null
$.oD=null
$.oE=null
$.oF=null
$.oG=null
$.oH=null
$.oB=null
$.j="PLAYER1TAG"
$.c6="PLAYER2TAG"
$.o="DENIZENTAG"
$.m="CONSORTTAG"
$.w="CONSORTSOUNDTAG"
$.ad="MCGUFFINTAG"
$.V="TAGPHYSICALMCGUFFIN"
$.aG="TAGWEAPON"
$.pO=null
$.q_=null
$.pJ=null
$.pN=null
$.pR=null
$.pW=null
$.pU=null
$.q1=null
$.q0=null
$.pV=null
$.q3=null
$.pQ=null
$.q2=null
$.pY=null
$.pX=null
$.pZ=null
$.pM=null
$.pL=null
$.pT=null
$.pS=null
$.pP=null
$.pK=null
$.qa=13
$.ac=3
$.au=2
$.aa=1
$.p2=null
$.hE=null
$.p4=null
$.pi=null
$.pf=null
$.oX=null
$.pe=null
$.p0=null
$.oY=null
$.pd=null
$.oT=null
$.mB=null
$.lj=null
$.ai=null
$.oR=null
$.hD=null
$.pb=null
$.mF=null
$.hy=null
$.oU=null
$.p1=null
$.lo=null
$.cT=null
$.ll=null
$.pl=null
$.pk=null
$.ph=null
$.mI=null
$.mz=null
$.U=null
$.oZ=null
$.lk=null
$.cQ=null
$.mK=null
$.at=null
$.as=null
$.dx=null
$.R=null
$.af=null
$.eC=null
$.be=null
$.lm=null
$.cS=null
$.ew=null
$.ey=null
$.dw=null
$.hz=null
$.hF=null
$.ag=null
$.cR=null
$.bn=null
$.ez=null
$.aP=null
$.hA=null
$.eB=null
$.c2=null
$.hB=null
$.ck=null
$.bf=null
$.bc=null
$.hC=null
$.aQ=null
$.ex=null
$.c_=null
$.av=null
$.lq=null
$.aZ=null
$.eD=null
$.dv=null
$.bK=null
$.eA=null
$.aR=null
$.bm=null
$.aS=null
$.an=null
$.bo=null
$.cl=null
$.bx=null
$.c0=null
$.aJ=null
$.aB=null
$.F=null
$.D=null
$.ar=null
$.bd=null
$.bg=null
$.c1=null
$.oP=null
$.mJ=null
$.oV=null
$.mA=null
$.mC=null
$.pg=null
$.oQ=null
$.mG=null
$.mE=null
$.ls=null
$.ln=null
$.p8=null
$.du=null
$.p6=null
$.pa=null
$.lr=null
$.p9=null
$.my=null
$.pj=null
$.mH=null
$.oW=null
$.p_=null
$.p7=null
$.mD=null
$.lp=null
$.p5=null
$.pc=null
$.p3=null
$.oS=null
$.cO="OWNER"
$.mX=null
$.q8=null
$.cc=null
$.cw=null
$.q7=null
$.cb=null
$.br=null
$.b_=null
$.cv=null
$.d_=null
$.dL=null
$.ca=null
$.aK=null
$.mY=!1})();(function lazyInitializers(){lazy($,"m9","$get$m9",function(){return H.nq("_$dart_dartClosure")})
lazy($,"lw","$get$lw",function(){return H.nq("_$dart_js")})
lazy($,"mw","$get$mw",function(){return H.oN()})
lazy($,"mx","$get$mx",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.mj
$.mj=t+1
t="expando$key$"+t}return new P.fU(null,t,[P.N])})
lazy($,"n_","$get$n_",function(){return H.bM(H.js({
toString:function(){return"$receiver$"}}))})
lazy($,"n0","$get$n0",function(){return H.bM(H.js({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"n1","$get$n1",function(){return H.bM(H.js(null))})
lazy($,"n2","$get$n2",function(){return H.bM(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"n6","$get$n6",function(){return H.bM(H.js(void 0))})
lazy($,"n7","$get$n7",function(){return H.bM(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"n4","$get$n4",function(){return H.bM(H.n5(null))})
lazy($,"n3","$get$n3",function(){return H.bM(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"n9","$get$n9",function(){return H.bM(H.n5(void 0))})
lazy($,"n8","$get$n8",function(){return H.bM(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"lI","$get$lI",function(){return P.qe()})
lazy($,"hk","$get$hk",function(){var t,s
t=P.by
s=new P.bC(0,P.qd(),null,[t])
s.dk(null,t)
return s})
lazy($,"e_","$get$e_",function(){return[]})
lazy($,"m8","$get$m8",function(){return{}})
lazy($,"nd","$get$nd",function(){return P.eI(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"lM","$get$lM",function(){return P.mO()})
lazy($,"e3","$get$e3",function(){return P.ly(P.N,L.bO)})
lazy($,"ev","$get$ev",function(){return P.ly(P.N,B.bZ)})
lazy($,"mM","$get$mM",function(){return H.a([],[A.Q])})
lazy($,"f_","$get$f_",function(){return P.ly(P.N,T.c8)})
lazy($,"mL","$get$mL",function(){return P.bh(null,null,null,G.M)})
lazy($,"lA","$get$lA",function(){return A.e8(255,0,255,255)})
lazy($,"b0","$get$b0",function(){return H.a([],[D.aT])})})()
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
mangledGlobalNames:{N:"int",C:"double",bu:"num",B:"String",bN:"bool",by:"Null",O:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.bN,args:[[P.O,E.eo]]},{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.b1,args:[P.N]},{func:1,ret:P.bN,args:[W.b1,P.B,P.B,W.dT]},{func:1,v:true,args:[P.ap],opt:[P.cu]},{func:1,v:true,args:[,P.cu]},{func:1,ret:P.B,args:[P.N]},{func:1,ret:W.d0,args:[P.N]},{func:1,ret:P.N,args:[P.aA,P.aA]}],
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
setOrUpdateInterceptorsByTag({DOMImplementation:J.I,MediaError:J.I,MediaSession:J.I,PositionError:J.I,Range:J.I,SVGAnimatedLength:J.I,SVGAnimatedLengthList:J.I,SVGAnimatedNumber:J.I,SVGAnimatedNumberList:J.I,SVGAnimatedString:J.I,SQLError:J.I,ArrayBuffer:H.dE,ArrayBufferView:H.cX,DataView:H.ie,Float32Array:H.ig,Float64Array:H.ih,Int16Array:H.ii,Int32Array:H.ij,Int8Array:H.ik,Uint16Array:H.il,Uint32Array:H.im,Uint8ClampedArray:H.eP,CanvasPixelArray:H.eP,Uint8Array:H.io,HTMLBRElement:W.Z,HTMLCanvasElement:W.Z,HTMLContentElement:W.Z,HTMLDListElement:W.Z,HTMLDataListElement:W.Z,HTMLDetailsElement:W.Z,HTMLDialogElement:W.Z,HTMLDivElement:W.Z,HTMLHRElement:W.Z,HTMLHeadElement:W.Z,HTMLHeadingElement:W.Z,HTMLHtmlElement:W.Z,HTMLImageElement:W.Z,HTMLLIElement:W.Z,HTMLLabelElement:W.Z,HTMLLegendElement:W.Z,HTMLMenuElement:W.Z,HTMLMenuItemElement:W.Z,HTMLMeterElement:W.Z,HTMLModElement:W.Z,HTMLOListElement:W.Z,HTMLOptGroupElement:W.Z,HTMLOptionElement:W.Z,HTMLParagraphElement:W.Z,HTMLPictureElement:W.Z,HTMLPreElement:W.Z,HTMLProgressElement:W.Z,HTMLQuoteElement:W.Z,HTMLScriptElement:W.Z,HTMLShadowElement:W.Z,HTMLSourceElement:W.Z,HTMLStyleElement:W.Z,HTMLTableCaptionElement:W.Z,HTMLTableCellElement:W.Z,HTMLTableDataCellElement:W.Z,HTMLTableHeaderCellElement:W.Z,HTMLTableColElement:W.Z,HTMLTitleElement:W.Z,HTMLTrackElement:W.Z,HTMLUListElement:W.Z,HTMLUnknownElement:W.Z,HTMLDirectoryElement:W.Z,HTMLFontElement:W.Z,HTMLFrameElement:W.Z,HTMLMarqueeElement:W.Z,HTMLElement:W.Z,HTMLAnchorElement:W.ft,HTMLAreaElement:W.fu,HTMLBaseElement:W.fA,Blob:W.e5,HTMLBodyElement:W.cJ,HTMLButtonElement:W.fF,CDATASection:W.cf,CharacterData:W.cf,Comment:W.cf,ProcessingInstruction:W.cf,Text:W.cf,Client:W.e7,WindowClient:W.e7,CSSStyleDeclaration:W.ch,MSStyleCSSProperties:W.ch,CSS2Properties:W.ch,DocumentFragment:W.ea,ShadowRoot:W.ea,DOMError:W.eb,FileError:W.eb,DOMException:W.fL,DOMRectReadOnly:W.ec,Element:W.b1,HTMLEmbedElement:W.fR,ErrorEvent:W.fS,AnimationEvent:W.L,AnimationPlayerEvent:W.L,ApplicationCacheErrorEvent:W.L,AutocompleteErrorEvent:W.L,BeforeInstallPromptEvent:W.L,BeforeUnloadEvent:W.L,BlobEvent:W.L,ClipboardEvent:W.L,CloseEvent:W.L,CustomEvent:W.L,DeviceLightEvent:W.L,DeviceMotionEvent:W.L,DeviceOrientationEvent:W.L,ExtendableEvent:W.L,ExtendableMessageEvent:W.L,FetchEvent:W.L,FontFaceSetLoadEvent:W.L,GamepadEvent:W.L,HashChangeEvent:W.L,InstallEvent:W.L,MediaEncryptedEvent:W.L,MediaKeyMessageEvent:W.L,MediaQueryListEvent:W.L,MediaStreamEvent:W.L,MediaStreamTrackEvent:W.L,MessageEvent:W.L,MIDIConnectionEvent:W.L,MIDIMessageEvent:W.L,NotificationEvent:W.L,PageTransitionEvent:W.L,PopStateEvent:W.L,PresentationConnectionAvailableEvent:W.L,PresentationConnectionCloseEvent:W.L,ProgressEvent:W.L,PromiseRejectionEvent:W.L,PushEvent:W.L,RelatedEvent:W.L,RTCDataChannelEvent:W.L,RTCDTMFToneChangeEvent:W.L,RTCIceCandidateEvent:W.L,RTCPeerConnectionIceEvent:W.L,SecurityPolicyViolationEvent:W.L,ServicePortConnectEvent:W.L,ServiceWorkerMessageEvent:W.L,SpeechRecognitionEvent:W.L,StorageEvent:W.L,SyncEvent:W.L,TrackEvent:W.L,TransitionEvent:W.L,WebKitTransitionEvent:W.L,ResourceProgressEvent:W.L,USBConnectionEvent:W.L,IDBVersionChangeEvent:W.L,AudioProcessingEvent:W.L,OfflineAudioCompletionEvent:W.L,WebGLContextEvent:W.L,Event:W.L,InputEvent:W.L,MessagePort:W.df,EventTarget:W.df,HTMLFieldSetElement:W.hg,File:W.hh,HTMLFormElement:W.en,GeofencingEvent:W.hl,HTMLIFrameElement:W.hr,HTMLInputElement:W.hu,HTMLKeygenElement:W.hP,HTMLLinkElement:W.hU,Location:W.hZ,HTMLMapElement:W.i2,HTMLAudioElement:W.dC,HTMLMediaElement:W.dC,HTMLVideoElement:W.dC,MediaStream:W.i6,HTMLMetaElement:W.i7,MIDIOutput:W.i8,MIDIInput:W.dD,MIDIPort:W.dD,MouseEvent:W.bL,DragEvent:W.bL,PointerEvent:W.bL,WheelEvent:W.bL,Navigator:W.ip,NavigatorUserMediaError:W.iq,Document:W.ab,HTMLDocument:W.ab,XMLDocument:W.ab,Node:W.ab,NodeList:W.eQ,RadioNodeList:W.eQ,HTMLObjectElement:W.it,HTMLOutputElement:W.iw,HTMLParamElement:W.iz,HTMLSelectElement:W.f0,HTMLSlotElement:W.iZ,HTMLSpanElement:W.f2,SpeechRecognitionError:W.j2,SpeechSynthesisEvent:W.j3,HTMLTableElement:W.f4,HTMLTableRowElement:W.jf,HTMLTableSectionElement:W.jg,HTMLTemplateElement:W.dN,HTMLTextAreaElement:W.jk,CompositionEvent:W.bz,FocusEvent:W.bz,KeyboardEvent:W.bz,TextEvent:W.bz,TouchEvent:W.bz,SVGZoomEvent:W.bz,UIEvent:W.bz,Window:W.f9,DOMWindow:W.f9,Attr:W.d0,ClientRect:W.jL,DocumentType:W.jP,DOMRect:W.jQ,HTMLFrameSetElement:W.k6,NamedNodeMap:W.dV,MozNamedAttrMap:W.dV,ServiceWorker:W.ku,SVGAElement:P.fr,SVGAnimateElement:P.ce,SVGAnimateMotionElement:P.ce,SVGAnimateTransformElement:P.ce,SVGAnimationElement:P.ce,SVGSetElement:P.ce,SVGFEBlendElement:P.fV,SVGFEColorMatrixElement:P.fW,SVGFEComponentTransferElement:P.fX,SVGFECompositeElement:P.fY,SVGFEConvolveMatrixElement:P.fZ,SVGFEDiffuseLightingElement:P.h_,SVGFEDisplacementMapElement:P.h0,SVGFEFloodElement:P.h1,SVGFEGaussianBlurElement:P.h2,SVGFEImageElement:P.h3,SVGFEMergeElement:P.h4,SVGFEMorphologyElement:P.h5,SVGFEOffsetElement:P.h6,SVGFESpecularLightingElement:P.h7,SVGFETileElement:P.h8,SVGFETurbulenceElement:P.h9,SVGFilterElement:P.hi,SVGCircleElement:P.aF,SVGClipPathElement:P.aF,SVGDefsElement:P.aF,SVGEllipseElement:P.aF,SVGForeignObjectElement:P.aF,SVGGElement:P.aF,SVGGeometryElement:P.aF,SVGLineElement:P.aF,SVGPathElement:P.aF,SVGPolygonElement:P.aF,SVGPolylineElement:P.aF,SVGRectElement:P.aF,SVGSwitchElement:P.aF,SVGGraphicsElement:P.aF,SVGImageElement:P.hs,SVGMarkerElement:P.i4,SVGMaskElement:P.i5,SVGPatternElement:P.iA,SVGScriptElement:P.dK,SVGDescElement:P.ax,SVGDiscardElement:P.ax,SVGFEDistantLightElement:P.ax,SVGFEFuncAElement:P.ax,SVGFEFuncBElement:P.ax,SVGFEFuncGElement:P.ax,SVGFEFuncRElement:P.ax,SVGFEMergeNodeElement:P.ax,SVGFEPointLightElement:P.ax,SVGFESpotLightElement:P.ax,SVGMetadataElement:P.ax,SVGStopElement:P.ax,SVGStyleElement:P.ax,SVGTitleElement:P.ax,SVGComponentTransferFunctionElement:P.ax,SVGElement:P.ax,SVGSVGElement:P.jc,SVGSymbolElement:P.je,SVGTSpanElement:P.cy,SVGTextElement:P.cy,SVGTextPositioningElement:P.cy,SVGTextContentElement:P.cy,SVGTextPathElement:P.jl,SVGUseElement:P.ju,SVGViewElement:P.jv,SVGLinearGradientElement:P.dS,SVGRadialGradientElement:P.dS,SVGGradientElement:P.dS,SVGCursorElement:P.kq,SVGFEDropShadowElement:P.kr,SVGMPathElement:P.ks})
setOrUpdateLeafTags({DOMImplementation:true,MediaError:true,MediaSession:true,PositionError:true,Range:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedString:true,SQLError:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSourceElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,Client:true,WindowClient:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DocumentFragment:true,ShadowRoot:true,DOMError:true,FileError:true,DOMException:true,DOMRectReadOnly:false,Element:false,HTMLEmbedElement:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,MessagePort:true,EventTarget:false,HTMLFieldSetElement:true,File:true,HTMLFormElement:true,GeofencingEvent:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLKeygenElement:true,HTMLLinkElement:true,Location:true,HTMLMapElement:true,HTMLAudioElement:true,HTMLMediaElement:true,HTMLVideoElement:true,MediaStream:true,HTMLMetaElement:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Navigator:true,NavigatorUserMediaError:true,Document:true,HTMLDocument:true,XMLDocument:true,Node:false,NodeList:true,RadioNodeList:true,HTMLObjectElement:true,HTMLOutputElement:true,HTMLParamElement:true,HTMLSelectElement:true,HTMLSlotElement:true,HTMLSpanElement:true,SpeechRecognitionError:true,SpeechSynthesisEvent:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,SVGZoomEvent:true,UIEvent:false,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DocumentType:true,DOMRect:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFESpecularLightingElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGEllipseElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGPatternElement:true,SVGScriptElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGFEPointLightElement:true,SVGFESpotLightElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGUseElement:true,SVGViewElement:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})
H.eM.$nativeSuperclassTag="ArrayBufferView"
H.dF.$nativeSuperclassTag="ArrayBufferView"
H.dH.$nativeSuperclassTag="ArrayBufferView"
H.eN.$nativeSuperclassTag="ArrayBufferView"
H.dG.$nativeSuperclassTag="ArrayBufferView"
H.dI.$nativeSuperclassTag="ArrayBufferView"
H.eO.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.nv(X.nw(),b)},[])
else (function(b){H.nv(X.nw(),b)})([])})})()
//# sourceMappingURL=stat_summary.dart.js.map
