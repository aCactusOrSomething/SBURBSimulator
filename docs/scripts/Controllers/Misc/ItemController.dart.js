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
a[c]=function(){a[c]=function(){H.Bi(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.pq"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.pq"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.pq(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={oR:function oR(a){this.a=a},
rG:function(a,b,c,d){var t=new H.m4(a,b,c,[d])
t.eW(a,b,c,d)
return t},
f8:function(a,b,c,d){if(!!J.aZ(a).$isP)return new H.fV(a,b,[c,d])
return new H.f7(a,b,[c,d])},
cP:function(){return new P.c_("No element")},
zu:function(){return new P.c_("Too many elements")},
ra:function(){return new P.c_("Too few elements")},
i_:function(a,b,c,d){if(c-b<=32)H.rD(a,b,c,d)
else H.rC(a,b,c,d)},
rD:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.bV(a);t<=c;++t){r=s.m(a,t)
q=t
while(!0){if(!(q>b&&J.cJ(d.$2(s.m(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.m(a,p))
q=p}s.i(a,q,r)}},
rC:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.b.am(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.b.am(a3+a4,2)
p=q-t
o=q+t
n=J.bV(a2)
m=n.m(a2,s)
l=n.m(a2,p)
k=n.m(a2,q)
j=n.m(a2,o)
i=n.m(a2,r)
if(J.cJ(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.cJ(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.cJ(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.cJ(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.cJ(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.cJ(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.cJ(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.cJ(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.cJ(a5.$2(j,i),0)){h=i
i=j
j=h}n.i(a2,s,m)
n.i(a2,q,k)
n.i(a2,r,i)
n.i(a2,p,n.m(a2,a3))
n.i(a2,o,n.m(a2,a4))
g=a3+1
f=a4-1
if(J.ai(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=n.m(a2,e)
c=a5.$2(d,l)
b=J.aZ(c)
if(b.S(c,0))continue
if(b.aN(c,0)){if(e!==g){n.i(a2,e,n.m(a2,g))
n.i(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.m(a2,f),l)
b=J.dZ(c)
if(b.aX(c,0)){--f
continue}else{a=f-1
if(b.aN(c,0)){n.i(a2,e,n.m(a2,g))
a0=g+1
n.i(a2,g,n.m(a2,f))
n.i(a2,f,d)
f=a
g=a0
break}else{n.i(a2,e,n.m(a2,f))
n.i(a2,f,d)
f=a
break}}}}a1=!0}else{for(e=g;e<=f;++e){d=n.m(a2,e)
if(J.eJ(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.m(a2,g))
n.i(a2,g,d)}++g}else if(J.cJ(a5.$2(d,j),0))for(;!0;)if(J.cJ(a5.$2(n.m(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.eJ(a5.$2(n.m(a2,f),l),0)){n.i(a2,e,n.m(a2,g))
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
H.i_(a2,a3,g-2,a5)
H.i_(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.ai(a5.$2(n.m(a2,g),l),0);)++g
for(;J.ai(a5.$2(n.m(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.m(a2,e)
if(J.ai(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.m(a2,g))
n.i(a2,g,d)}++g}else if(J.ai(a5.$2(d,j),0))for(;!0;)if(J.ai(a5.$2(n.m(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.eJ(a5.$2(n.m(a2,f),l),0)){n.i(a2,e,n.m(a2,g))
a0=g+1
n.i(a2,g,n.m(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.m(a2,f))
n.i(a2,f,d)}f=a
break}}H.i_(a2,g,f,a5)}else H.i_(a2,g,f,a5)},
P:function P(){},
dP:function dP(){},
m4:function m4(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
hD:function hD(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
f7:function f7(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
fV:function fV(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
hF:function hF(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
d0:function d0(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
bq:function bq(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
cR:function cR(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
ha:function ha(){},
ih:function(a,b){var t=a.bF(b)
if(!u.globalState.d.cy)u.globalState.f.bR()
return t},
td:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.aZ(s).$isM)throw H.u(P.ix("Arguments to main must be a List: "+H.t(s)))
u.globalState=new H.n2(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$qu()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.mP(P.oU(null,H.dW),0)
r=P.a6
s.z=new H.o(0,null,null,null,null,null,0,[r,H.eE])
s.ch=new H.o(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.n1()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.uv,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.AE)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.a2(null,null,null,r)
p=new H.ex(0,null,!1)
o=new H.eE(s,new H.o(0,null,null,null,null,null,0,[r,H.ex]),q,u.createNewIsolate(),p,new H.db(H.nH()),new H.db(H.nH()),!1,!1,[],P.a2(null,null,null,null),null,null,!1,!0,P.a2(null,null,null,null))
q.h(0,0)
o.dk(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.nt(a,{func:1,args:[,]}))o.bF(new H.nI(t,a))
else if(H.nt(a,{func:1,args:[,,]}))o.bF(new H.nJ(t,a))
else o.bF(a)
u.globalState.f.bR()},
AE:function(a){var t=P.f5(["command","print","msg",a])
return new H.d7(!0,P.fx(null,P.a6)).aE(t)},
ux:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.uy()
return},
uy:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.u(new P.bp("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.u(new P.bp('Cannot extract URI from "'+t+'"'))},
uv:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.dV(!0,[]).b_(b.data)
s=J.bV(t)
switch(s.m(t,"command")){case"start":u.globalState.b=s.m(t,"id")
r=s.m(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.m(t,"args")
o=new H.dV(!0,[]).b_(s.m(t,"msg"))
n=s.m(t,"isSpawnUri")
m=s.m(t,"startPaused")
l=new H.dV(!0,[]).b_(s.m(t,"replyTo"))
s=u.globalState.a++
k=P.a6
j=P.a2(null,null,null,k)
i=new H.ex(0,null,!1)
h=new H.eE(s,new H.o(0,null,null,null,null,null,0,[k,H.ex]),j,u.createNewIsolate(),i,new H.db(H.nH()),new H.db(H.nH()),!1,!1,[],P.a2(null,null,null,null),null,null,!1,!0,P.a2(null,null,null,null))
j.h(0,0)
h.dk(0,i)
u.globalState.f.a.aY(new H.dW(h,new H.k4(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.bR()
break
case"spawn-worker":break
case"message":if(s.m(t,"port")!=null)J.eK(s.m(t,"port"),s.m(t,"msg"))
u.globalState.f.bR()
break
case"close":u.globalState.ch.aj(0,$.$get$qv().m(0,a))
a.terminate()
u.globalState.f.bR()
break
case"log":H.uu(s.m(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.f5(["command","print","msg",t])
k=new H.d7(!0,P.fx(null,P.a6)).aE(k)
s.toString
self.postMessage(k)}else P.e0(s.m(t,"msg"))
break
case"error":throw H.u(s.m(t,"msg"))}},
uu:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.f5(["command","log","msg",a])
r=new H.d7(!0,P.fx(null,P.a6)).aE(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.dB(q)
t=H.nw(q)
s=P.j8(t)
throw H.u(s)}},
uw:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.rk=$.rk+("_"+s)
$.rl=$.rl+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.eK(f,["spawned",new H.eF(s,r),q,t.r])
r=new H.k5(a,b,c,d,t)
if(e===!0){t.dH(q,q)
u.globalState.f.a.aY(new H.dW(t,r,"start isolate"))}else r.$0()},
Au:function(a,b){var t=new H.mk(!0,!1,null)
t.eX(a,b)
return t},
AG:function(a){return new H.dV(!0,[]).b_(new H.d7(!1,P.fx(null,P.a6)).aE(a))},
nI:function nI(a,b){this.a=a
this.b=b},
nJ:function nJ(a,b){this.a=a
this.b=b},
n2:function n2(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
_.a=a
_.b=b
_.c=c
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
eE:function eE(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
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
mY:function mY(a,b){this.a=a
this.b=b},
mP:function mP(a,b){this.a=a
this.b=b},
mQ:function mQ(a){this.a=a},
dW:function dW(a,b,c){this.a=a
this.b=b
this.c=c},
n1:function n1(){},
k4:function k4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
k5:function k5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mK:function mK(){},
eF:function eF(b,a){this.b=b
this.a=a},
n3:function n3(a,b){this.a=a
this.b=b},
fA:function fA(b,c,a){this.b=b
this.c=c
this.a=a},
ex:function ex(a,b,c){this.a=a
this.b=b
this.c=c},
mk:function mk(a,b,c){this.a=a
this.b=b
this.c=c},
ml:function ml(a,b){this.a=a
this.b=b},
mm:function mm(a,b){this.a=a
this.b=b},
db:function db(a){this.a=a},
d7:function d7(a,b){this.a=a
this.b=b},
dV:function dV(a,b){this.a=a
this.b=b},
AY:function(a){return u.types[a]},
B6:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.aZ(a).$iscy},
t:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.cm(a)
if(typeof t!=="string")throw H.u(H.cs(a))
return t},
A_:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.lv(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
dy:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
p0:function(a,b){if(b==null)throw H.u(new P.he(a,null,null))
return b.$1(a)},
rm:function(a,b,c){var t,s,r,q,p,o
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.p0(a,c)
if(3>=t.length)return H.S(t,3)
s=t[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.p0(a,c)}if(b<2||b>36)throw H.u(P.cd(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.e.dm(q,o)|32)>r)return H.p0(a,c)}return parseInt(a,b)},
p2:function(a){var t,s,r,q,p,o,n,m
t=J.aZ(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.C||!!J.aZ(a).$isdU){p=C.w(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.e.dm(q,0)===36)q=C.e.bV(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.pF(H.il(a),0,null),u.mangledGlobalNames)},
lp:function(a){return"Instance of '"+H.p2(a)+"'"},
cA:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
rj:function(a){return a.b?H.cA(a).getUTCFullYear()+0:H.cA(a).getFullYear()+0},
ri:function(a){return a.b?H.cA(a).getUTCMonth()+1:H.cA(a).getMonth()+1},
rh:function(a){return a.b?H.cA(a).getUTCDate()+0:H.cA(a).getDate()+0},
zB:function(a){return a.b?H.cA(a).getUTCHours()+0:H.cA(a).getHours()+0},
zD:function(a){return a.b?H.cA(a).getUTCMinutes()+0:H.cA(a).getMinutes()+0},
zE:function(a){return a.b?H.cA(a).getUTCSeconds()+0:H.cA(a).getSeconds()+0},
zC:function(a){return a.b?H.cA(a).getUTCMilliseconds()+0:H.cA(a).getMilliseconds()+0},
p1:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.u(H.cs(a))
return a[b]},
rn:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.u(H.cs(a))
a[b]=c},
br:function(a){throw H.u(H.cs(a))},
S:function(a,b){if(a==null)J.cU(a)
throw H.u(H.bU(a,b))},
bU:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.d9(!0,b,"index",null)
t=J.cU(a)
if(!(b<0)){if(typeof t!=="number")return H.br(t)
s=b>=t}else s=!0
if(s)return P.cZ(b,a,"index",null,t)
return P.fm(b,"index",null)},
cs:function(a){return new P.d9(!0,a,null,null)},
u:function(a){var t
if(a==null)a=new P.hN()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.te})
t.name=""}else t.toString=H.te
return t},
te:function(){return J.cm(this.dartException)},
ba:function(a){throw H.u(a)},
c2:function(a){throw H.u(new P.bR(a))},
dp:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.mn(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
mo:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
rO:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
oT:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.kn(a,s,t?null:b.receiver)},
dB:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.nL(a)
if(a==null)return
if(a instanceof H.fW)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.cB(r,16)&8191)===10)switch(q){case 438:return t.$1(H.oT(H.t(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.t(s)+" (Error "+q+")"
return t.$1(new H.hM(p,null))}}if(a instanceof TypeError){o=$.$get$rI()
n=$.$get$rJ()
m=$.$get$rK()
l=$.$get$rL()
k=$.$get$rP()
j=$.$get$rQ()
i=$.$get$rN()
$.$get$rM()
h=$.$get$rS()
g=$.$get$rR()
f=o.aR(s)
if(f!=null)return t.$1(H.oT(s,f))
else{f=n.aR(s)
if(f!=null){f.method="call"
return t.$1(H.oT(s,f))}else{f=m.aR(s)
if(f==null){f=l.aR(s)
if(f==null){f=k.aR(s)
if(f==null){f=j.aR(s)
if(f==null){f=i.aR(s)
if(f==null){f=l.aR(s)
if(f==null){f=h.aR(s)
if(f==null){f=g.aR(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.hM(s,f==null?null:f.method))}}return t.$1(new H.mp(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.i1()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.d9(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.i1()
return a},
nw:function(a){var t
if(a instanceof H.fW)return a.b
if(a==null)return new H.ie(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.ie(a,null)},
Bb:function(a){if(a==null||typeof a!='object')return J.cT(a)
else return H.dy(a)},
t4:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
B5:function(a,b,c,d,e,f,g){switch(c){case 0:return H.ih(b,new H.nB(a))
case 1:return H.ih(b,new H.nC(a,d))
case 2:return H.ih(b,new H.nD(a,d,e))
case 3:return H.ih(b,new H.nE(a,d,e,f))
case 4:return H.ih(b,new H.nF(a,d,e,f,g))}throw H.u(P.j8("Unsupported number of arguments for wrapped closure"))},
nr:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.B5)
a.$identity=t
return t},
tX:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.aZ(c).$isM){t.$reflectionInfo=c
r=H.A_(t).r}else r=c
q=d?Object.create(new H.m1().constructor.prototype):Object.create(new H.eN(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.dc
$.dc=J.cD(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.q0(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.AY,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.q_:H.nS
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.u("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.q0(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
tU:function(a,b,c,d){var t=H.nS
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
q0:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.tW(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.tU(s,!q,t,b)
if(s===0){q=$.dc
$.dc=J.cD(q,1)
o="self"+H.t(q)
q="return function(){var "+o+" = this."
p=$.eO
if(p==null){p=H.iL("self")
$.eO=p}return new Function(q+H.t(p)+";return "+o+"."+H.t(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.dc
$.dc=J.cD(q,1)
n+=H.t(q)
q="return function("+n+"){return this."
p=$.eO
if(p==null){p=H.iL("self")
$.eO=p}return new Function(q+H.t(p)+"."+H.t(t)+"("+n+");}")()},
tV:function(a,b,c,d){var t,s
t=H.nS
s=H.q_
switch(b?-1:a){case 0:throw H.u(new H.lD("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
tW:function(a,b){var t,s,r,q,p,o,n,m
t=H.tS()
s=$.pZ
if(s==null){s=H.iL("receiver")
$.pZ=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.tV(q,!o,r,b)
if(q===1){s="return function(){return this."+H.t(t)+"."+H.t(r)+"(this."+H.t(s)+");"
o=$.dc
$.dc=J.cD(o,1)
return new Function(s+H.t(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.t(t)+"."+H.t(r)+"(this."+H.t(s)+", "+m+");"
o=$.dc
$.dc=J.cD(o,1)
return new Function(s+H.t(o)+"}")()},
pq:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.aZ(c).$isM){c.fixed$length=Array
t=c}else t=c
return H.tX(a,b,t,!!d,e,f)},
nS:function(a){return a.a},
q_:function(a){return a.c},
tS:function(){var t=$.eO
if(t==null){t=H.iL("self")
$.eO=t}return t},
iL:function(a){var t,s,r,q,p
t=new H.eN("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
Bd:function(a,b){var t=J.bV(b)
throw H.u(H.tT(H.p2(a),t.co(b,3,t.gt(b))))},
pD:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.aZ(a)[b]
else t=!0
if(t)return a
H.Bd(a,b)},
t3:function(a){var t=J.aZ(a)
return"$S" in t?t.$S():null},
nt:function(a,b){var t
if(a==null)return!1
t=H.t3(a)
return t==null?!1:H.pE(t,b)},
tT:function(a,b){return new H.iS("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
Bi:function(a){throw H.u(new P.iY(a))},
nH:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
t6:function(a){return u.getIsolateTag(a)},
bQ:function(a){return new H.d4(a,null)},
a:function(a,b){a.$ti=b
return a},
il:function(a){if(a==null)return
return a.$ti},
t7:function(a,b){return H.pL(a["$as"+H.t(b)],H.il(a))},
aM:function(a,b,c){var t=H.t7(a,b)
return t==null?null:t[c]},
J:function(a,b){var t=H.il(a)
return t==null?null:t[b]},
d8:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.pF(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.t(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.d8(t,b)
return H.AH(a,b)}return"unknown-reified-type"},
AH:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.d8(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.d8(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.d8(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.AV(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.d8(l[j],b)+(" "+H.t(j))}q+="}"}return"("+q+") => "+t},
pF:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.fp("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.a0=p+", "
o=a[s]
if(o!=null)q=!1
p=t.a0+=H.d8(o,c)}return q?"":"<"+t.u(0)+">"},
fE:function(a){var t,s
if(a instanceof H.e5){t=H.t3(a)
if(t!=null)return H.d8(t,null)}s=J.aZ(a).constructor.builtin$cls
if(a==null)return s
return s+H.pF(a.$ti,0,null)},
pL:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
no:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.il(a)
s=J.aZ(a)
if(s[b]==null)return!1
return H.t_(H.pL(s[d],t),c)},
t_:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.cC(a[s],b[s]))return!1
return!0},
eI:function(a,b,c){return a.apply(b,H.t7(b,c))},
pp:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="bi"||b.builtin$cls==="es"
if(b==null)return!0
t=H.il(a)
a=J.aZ(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.pE(r.apply(a,null),b)}return H.cC(s,b)},
cC:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="es")return!0
if('func' in b)return H.pE(a,b)
if('func' in a)return b.builtin$cls==="Bn"||b.builtin$cls==="bi"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.d8(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.t_(H.pL(o,t),r)},
rZ:function(a,b,c){var t,s,r,q,p
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
s=a.length
r=b.length
if(c){if(s<r)return!1}else if(s!==r)return!1
for(q=0;q<r;++q){t=a[q]
p=b[q]
if(!(H.cC(t,p)||H.cC(p,t)))return!1}return!0},
AO:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.cC(p,o)||H.cC(o,p)))return!1}return!0},
pE:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.cC(t,s)||H.cC(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.rZ(r,q,!1))return!1
if(!H.rZ(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.cC(i,h)||H.cC(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.cC(i,h)||H.cC(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.cC(i,h)||H.cC(h,i)))return!1}}return H.AO(a.named,b.named)},
Bx:function(a){var t=$.py
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
Bw:function(a){return H.dy(a)},
Bv:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
B7:function(a){var t,s,r,q,p,o
t=$.py.$1(a)
s=$.ns[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.nA[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.rY.$2(a,t)
if(t!=null){s=$.ns[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.nA[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.pH(r)
$.ns[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.nA[t]=r
return r}if(p==="-"){o=H.pH(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.t9(a,r)
if(p==="*")throw H.u(new P.i5(t))
if(u.leafTags[t]===true){o=H.pH(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.t9(a,r)},
t9:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.nG(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
pH:function(a){return J.nG(a,!1,null,!!a.$iscy)},
B9:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.nG(t,!1,null,!!t.$iscy)
else return J.nG(t,c,null,null)},
B3:function(){if(!0===$.pC)return
$.pC=!0
H.B4()},
B4:function(){var t,s,r,q,p,o,n,m
$.ns=Object.create(null)
$.nA=Object.create(null)
H.B2()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.tb.$1(p)
if(o!=null){n=H.B9(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
B2:function(){var t,s,r,q,p,o,n
t=C.D()
t=H.eH(C.E,H.eH(C.F,H.eH(C.v,H.eH(C.v,H.eH(C.H,H.eH(C.G,H.eH(C.I(C.w),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.py=new H.nx(p)
$.rY=new H.ny(o)
$.tb=new H.nz(n)},
eH:function(a,b){return a(b)||b},
rc:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.u(new P.he("Illegal RegExp pattern ("+String(q)+")",a,null))},
Bh:function(a,b,c){var t
if(typeof b==="string")return a.indexOf(b,c)>=0
else{t=J.tg(b,C.e.bV(a,c))
t=t.ga4(t)
return!t}},
nK:function(a,b,c){var t,s,r,q
if(typeof b==="string")if(b==="")if(a==="")return c
else{t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))
else if(b instanceof H.hB){q=b.gfc()
q.lastIndex=0
return a.replace(q,c.replace(/\$/g,"$$$$"))}else{if(b==null)H.ba(H.cs(b))
throw H.u("String.replaceAll(Pattern) UNIMPLEMENTED")}},
lv:function lv(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
mn:function mn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hM:function hM(a,b){this.a=a
this.b=b},
kn:function kn(a,b,c){this.a=a
this.b=b
this.c=c},
mp:function mp(a){this.a=a},
fW:function fW(a,b){this.a=a
this.b=b},
nL:function nL(a){this.a=a},
ie:function ie(a,b){this.a=a
this.b=b},
nB:function nB(a){this.a=a},
nC:function nC(a,b){this.a=a
this.b=b},
nD:function nD(a,b,c){this.a=a
this.b=b
this.c=c},
nE:function nE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nF:function nF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
e5:function e5(){},
mc:function mc(){},
m1:function m1(){},
eN:function eN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iS:function iS(a){this.a=a},
lD:function lD(a){this.a=a},
d4:function d4(a,b){this.a=a
this.b=b},
o:function o(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
km:function km(a){this.a=a},
kl:function kl(a){this.a=a},
kB:function kB(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
kC:function kC(a,$ti){this.a=a
this.$ti=$ti},
kD:function kD(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
nx:function nx(a){this.a=a},
ny:function ny(a){this.a=a},
nz:function nz(a){this.a=a},
hB:function hB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i2:function i2(a,b,c){this.a=a
this.b=b
this.c=c},
nf:function nf(a,b,c){this.a=a
this.b=b
this.c=c},
ng:function ng(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fb:function fb(){},
er:function er(){},
kZ:function kZ(){},
hI:function hI(){},
fc:function fc(){},
fe:function fe(){},
fg:function fg(){},
fd:function fd(){},
ff:function ff(){},
fh:function fh(){},
l_:function l_(){},
l0:function l0(){},
l1:function l1(){},
l2:function l2(){},
l3:function l3(){},
l4:function l4(){},
l5:function l5(){},
hJ:function hJ(){},
l6:function l6(){},
AV:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
Bc:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
aZ:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.hz.prototype
return J.hy.prototype}if(typeof a=="string")return J.dN.prototype
if(a==null)return J.hA.prototype
if(typeof a=="boolean")return J.kk.prototype
if(a.constructor==Array)return J.dM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dO.prototype
return a}if(a instanceof P.bi)return a
return J.nu(a)},
nG:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
nu:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.pC==null){H.B3()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.u(new P.i5("Return interceptor for "+H.t(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$oS()]
if(p!=null)return p
p=H.B7(a)
if(p!=null)return p
if(typeof a=="function")return C.J
s=Object.getPrototypeOf(a)
if(s==null)return C.x
if(s===Object.prototype)return C.x
if(typeof q=="function"){Object.defineProperty(q,$.$get$oS(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
bV:function(a){if(typeof a=="string")return J.dN.prototype
if(a==null)return a
if(a.constructor==Array)return J.dM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dO.prototype
return a}if(a instanceof P.bi)return a
return J.nu(a)},
dY:function(a){if(a==null)return a
if(a.constructor==Array)return J.dM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dO.prototype
return a}if(a instanceof P.bi)return a
return J.nu(a)},
dZ:function(a){if(typeof a=="number")return J.ep.prototype
if(a==null)return a
if(!(a instanceof P.bi))return J.dU.prototype
return a},
ij:function(a){if(typeof a=="number")return J.ep.prototype
if(typeof a=="string")return J.dN.prototype
if(a==null)return a
if(!(a instanceof P.bi))return J.dU.prototype
return a},
ik:function(a){if(typeof a=="string")return J.dN.prototype
if(a==null)return a
if(!(a instanceof P.bi))return J.dU.prototype
return a},
cj:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.dO.prototype
return a}if(a instanceof P.bi)return a
return J.nu(a)},
cD:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ij(a).ao(a,b)},
ai:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aZ(a).S(a,b)},
cJ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.dZ(a).aX(a,b)},
eJ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.dZ(a).aN(a,b)},
e1:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ij(a).aO(a,b)},
tf:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.dZ(a).aF(a,b)},
im:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.B6(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bV(a).m(a,b)},
tg:function(a,b){return J.ik(a).fu(a,b)},
nM:function(a,b,c){return J.dZ(a).a3(a,b,c)},
io:function(a){return J.cj(a).aq(a)},
th:function(a,b){return J.ij(a).aG(a,b)},
nN:function(a,b){return J.bV(a).U(a,b)},
ip:function(a,b,c){return J.bV(a).dU(a,b,c)},
nO:function(a,b){return J.dY(a).X(a,b)},
iq:function(a){return J.dZ(a).b1(a)},
pO:function(a){return J.cj(a).gfD(a)},
ti:function(a){return J.cj(a).gcU(a)},
pP:function(a){return J.dY(a).gR(a)},
cT:function(a){return J.aZ(a).ga6(a)},
pQ:function(a){return J.bV(a).ga4(a)},
dr:function(a){return J.cj(a).gaQ(a)},
bx:function(a){return J.dY(a).gP(a)},
cU:function(a){return J.bV(a).gt(a)},
ds:function(a){return J.cj(a).gM(a)},
tj:function(a){return J.cj(a).ghl(a)},
tk:function(a){return J.cj(a).ghn(a)},
tl:function(a){return J.cj(a).ghr(a)},
tm:function(a){return J.aZ(a).ga_(a)},
tn:function(a){return J.cj(a).gaP(a)},
to:function(a){return J.cj(a).ghI(a)},
tp:function(a){return J.cj(a).gae(a)},
pR:function(a,b){return J.dY(a).aL(a,b)},
tq:function(a){return J.dY(a).hx(a)},
tr:function(a,b,c){return J.ik(a).hB(a,b,c)},
eK:function(a,b){return J.cj(a).cj(a,b)},
ts:function(a,b){return J.cj(a).sc9(a,b)},
eL:function(a,b){return J.cj(a).saP(a,b)},
ir:function(a,b){return J.cj(a).sck(a,b)},
tt:function(a,b){return J.dY(a).df(a,b)},
tu:function(a,b){return J.ik(a).eB(a,b)},
nP:function(a){return J.dZ(a).l(a)},
tv:function(a){return J.dY(a).aM(a)},
nQ:function(a){return J.ik(a).hJ(a)},
cm:function(a){return J.aZ(a).u(a)},
nR:function(a){return J.ik(a).hM(a)},
pS:function(a,b){return J.dY(a).aD(a,b)},
Y:function Y(){},
kk:function kk(){},
hA:function hA(){},
f3:function f3(){},
lk:function lk(){},
dU:function dU(){},
dO:function dO(){},
dM:function dM($ti){this.$ti=$ti},
oQ:function oQ($ti){this.$ti=$ti},
e2:function e2(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
ep:function ep(){},
hz:function hz(){},
hy:function hy(){},
dN:function dN(){}},P={
Aw:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.AP()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.nr(new P.mG(t),1)).observe(s,{childList:true})
return new P.mF(t,s,r)}else if(self.setImmediate!=null)return P.AQ()
return P.AR()},
Ax:function(a){++u.globalState.f.b
self.scheduleImmediate(H.nr(new P.mH(a),0))},
Ay:function(a){++u.globalState.f.b
self.setImmediate(H.nr(new P.mI(a),0))},
Az:function(a){P.pe(C.t,a)},
AJ:function(){var t,s
for(;t=$.eG,t!=null;){$.fC=null
s=t.b
$.eG=s
if(s==null)$.fB=null
t.a.$0()}},
AN:function(){$.pm=!0
try{P.AJ()}finally{$.fC=null
$.pm=!1
if($.eG!=null)$.$get$pi().$1(P.t1())}},
AL:function(a){var t=new P.ib(a,null)
if($.eG==null){$.fB=t
$.eG=t
if(!$.pm)$.$get$pi().$1(P.t1())}else{$.fB.b=t
$.fB=t}},
AM:function(a){var t,s,r
t=$.eG
if(t==null){P.AL(a)
$.fC=$.fB
return}s=new P.ib(a,null)
r=$.fC
if(r==null){s.b=t
$.fC=s
$.eG=s}else{s.b=r.b
r.b=s
$.fC=s
if(s.b==null)$.fB=s}},
Av:function(a,b){var t=$.fu
if(t===C.k){t.toString
return P.pe(a,b)}return P.pe(a,t.fF(b,!0))},
pe:function(a,b){var t=C.b.am(a.a,1000)
return H.Au(t<0?0:t,b)},
AK:function(a,b,c,d,e){var t={}
t.a=d
P.AM(new P.nn(t,e))},
rX:function(a,b,c,d){var t,s
s=$.fu
if(s===c)return d.$0()
$.fu=c
t=s
try{s=d.$0()
return s}finally{$.fu=t}},
mG:function mG(a){this.a=a},
mF:function mF(a,b,c){this.a=a
this.b=b
this.c=c},
mH:function mH(a){this.a=a},
mI:function mI(a){this.a=a},
ib:function ib(a,b){this.a=a
this.b=b},
nm:function nm(){},
nn:function nn(a,b){this.a=a
this.b=b},
n5:function n5(){},
n6:function n6(a,b){this.a=a
this.b=b},
n7:function n7(a,b){this.a=a
this.b=b},
AA:function(a,b){var t=a[b]
return t===a?null:t},
pk:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
pj:function(){var t=Object.create(null)
P.pk(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
z:function(a,b,c){return H.t4(a,new H.o(0,null,null,null,null,null,0,[b,c]))},
cz:function(a,b){return new H.o(0,null,null,null,null,null,0,[a,b])},
rd:function(){return new H.o(0,null,null,null,null,null,0,[null,null])},
f5:function(a){return H.t4(a,new H.o(0,null,null,null,null,null,0,[null,null]))},
fx:function(a,b){return new P.id(0,null,null,null,null,null,0,[a,b])},
AD:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
n:function(a,b,c,d,e){return new P.mT(0,null,null,null,null,[d,e])},
oP:function(a,b,c){var t,s
if(P.pn(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$fD()
s.push(a)
try{P.AI(a,t)}finally{if(0>=s.length)return H.S(s,-1)
s.pop()}s=P.rF(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
f2:function(a,b,c){var t,s,r
if(P.pn(a))return b+"..."+c
t=new P.fp(b)
s=$.$get$fD()
s.push(a)
try{r=t
r.a0=P.rF(r.ga0(),a,", ")}finally{if(0>=s.length)return H.S(s,-1)
s.pop()}s=t
s.a0=s.ga0()+c
s=t.ga0()
return s.charCodeAt(0)==0?s:s},
pn:function(a){var t,s
for(t=0;s=$.$get$fD(),t<s.length;++t)if(a===s[t])return!0
return!1},
AI:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.bx(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.A())return
q=H.t(t.gI())
b.push(q)
s+=q.length+2;++r}if(!t.A()){if(r<=5)return
if(0>=b.length)return H.S(b,-1)
p=b.pop()
if(0>=b.length)return H.S(b,-1)
o=b.pop()}else{n=t.gI();++r
if(!t.A()){if(r<=4){b.push(H.t(n))
return}p=H.t(n)
if(0>=b.length)return H.S(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gI();++r
for(;t.A();n=m,m=l){l=t.gI();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.S(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.t(n)
p=H.t(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.S(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
a2:function(a,b,c,d){return new P.ic(0,null,null,null,null,null,0,[d])},
f6:function(a,b){var t,s
t=P.a2(null,null,null,b)
for(s=J.bx(a);s.A();)t.h(0,s.gI())
return t},
zx:function(a){var t,s,r
t={}
if(P.pn(a))return"{...}"
s=new P.fp("")
try{$.$get$fD().push(a)
r=s
r.a0=r.ga0()+"{"
t.a=!0
a.cV(0,new P.kK(t,s))
t=s
t.a0=t.ga0()+"}"}finally{t=$.$get$fD()
if(0>=t.length)return H.S(t,-1)
t.pop()}t=s.ga0()
return t.charCodeAt(0)==0?t:t},
oU:function(a,b){var t=new P.kE(null,0,0,0,[b])
t.eR(a,b)
return t},
mT:function mT(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
mW:function mW(a){this.a=a},
mU:function mU(a,$ti){this.a=a
this.$ti=$ti},
mV:function mV(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
id:function id(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
ic:function ic(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
n_:function n_(a,b,c){this.a=a
this.b=b
this.c=c},
d6:function d6(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
mX:function mX(){},
dm:function dm(){},
hw:function hw(){},
hC:function hC(){},
fi:function fi(){},
bZ:function bZ(){},
kK:function kK(a,b){this.a=a
this.b=b},
kE:function kE(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
n0:function n0(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
lQ:function lQ(){},
lP:function lP(){},
rF:function(a,b,c){var t=J.bx(b)
if(!t.A())return a
if(c.length===0){do a+=H.t(t.gI())
while(t.A())}else{a+=H.t(t.gI())
for(;t.A();)a=a+c+H.t(t.gI())}return a},
tY:function(a,b){return J.th(a,b)},
u_:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.t(t)
if(t>=10)return s+"00"+H.t(t)
return s+"000"+H.t(t)},
u0:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
fP:function(a){if(a>=10)return""+a
return"0"+a},
qe:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.cm(a)
if(typeof a==="string")return JSON.stringify(a)
return P.u4(a)},
u4:function(a){var t=J.aZ(a)
if(!!t.$ise5)return t.u(a)
return H.lp(a)},
ix:function(a){return new P.d9(!1,null,null,a)},
fH:function(a,b,c){return new P.d9(!0,a,b,c)},
rr:function(a){return new P.fl(null,null,!1,null,null,a)},
fm:function(a,b,c){return new P.fl(null,null,!0,a,b,"Value not in range")},
cd:function(a,b,c,d,e){return new P.fl(b,c,!0,a,d,"Invalid value")},
p6:function(a,b,c,d,e,f){if(typeof a!=="number")return H.br(a)
if(0>a||a>c)throw H.u(P.cd(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.u(P.cd(b,a,c,"end",f))
return b}return c},
cZ:function(a,b,c,d,e){var t=e!=null?e:J.cU(b)
return new P.k0(b,t,!0,a,c,"Index out of range")},
j8:function(a){return new P.mR(a)},
bm:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.bx(a);s.A();)t.push(s.gI())
if(b)return t
t.fixed$length=Array
return t},
f:function(a,b){var t=P.bm(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
e0:function(a){H.Bc(H.t(a))},
p8:function(a,b,c){return new H.hB(a,H.rc(a,c,!0,!1),null,null)},
cS:function cS(){},
bA:function bA(){},
eQ:function eQ(a,b){this.a=a
this.b=b},
R:function R(){},
dd:function dd(a){this.a=a},
j4:function j4(){},
j5:function j5(){},
e8:function e8(){},
hN:function hN(){},
d9:function d9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fl:function fl(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
k0:function k0(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
bp:function bp(a){this.a=a},
i5:function i5(a){this.a=a},
c_:function c_(a){this.a=a},
bR:function bR(a){this.a=a},
le:function le(){},
i1:function i1(){},
iY:function iY(a){this.a=a},
mR:function mR(a){this.a=a},
he:function he(a,b,c){this.a=a
this.b=b
this.c=c},
j9:function j9(a,bY,$ti){this.a=a
this.bY=bY
this.$ti=$ti},
a6:function a6(){},
G:function G(){},
hx:function hx(){},
M:function M(){},
es:function es(){},
c6:function c6(){},
bi:function bi(){},
hG:function hG(){},
C:function C(){},
fp:function fp(a0){this.a0=a0},
AF:function(a){var t=new P.n4(0,0)
t.f_(a)
return t},
mZ:function mZ(){},
n4:function n4(a,b){this.a=a
this.b=b},
is:function is(){},
dC:function dC(){},
ja:function ja(){},
jb:function jb(){},
jc:function jc(){},
jd:function jd(){},
je:function je(){},
jf:function jf(){},
jg:function jg(){},
jh:function jh(){},
ji:function ji(){},
jj:function jj(){},
jk:function jk(){},
jl:function jl(){},
jm:function jm(){},
jn:function jn(){},
jo:function jo(){},
jp:function jp(){},
jN:function jN(){},
cb:function cb(){},
jY:function jY(){},
cH:function cH(){},
kx:function kx(){},
hj:function hj(){},
ho:function ho(){},
kL:function kL(){},
kM:function kM(){},
cI:function cI(){},
lb:function lb(){},
hk:function hk(){},
hp:function hp(){},
lj:function lj(){},
fn:function fn(){},
bP:function bP(){},
m7:function m7(){},
m9:function m9(){},
dT:function dT(){},
mh:function mh(){},
mq:function mq(){},
mr:function mr(){},
fv:function fv(){},
n8:function n8(){},
n9:function n9(){},
na:function na(){},
da:function da(){},
lz:function lz(){},
nT:function(){var t=$.q9
if(t==null){t=J.ip(window.navigator.userAgent,"Opera",0)
$.q9=t}return t},
qb:function(){var t=$.qa
if(t==null){t=P.nT()!==!0&&J.ip(window.navigator.userAgent,"WebKit",0)
$.qa=t}return t},
u1:function(){var t,s
t=$.q6
if(t!=null)return t
s=$.q7
if(s==null){s=J.ip(window.navigator.userAgent,"Firefox",0)
$.q7=s}if(s)t="-moz-"
else{s=$.q8
if(s==null){s=P.nT()!==!0&&J.ip(window.navigator.userAgent,"Trident/",0)
$.q8=s}if(s)t="-ms-"
else t=P.nT()===!0?"-o-":"-webkit-"}$.q6=t
return t}},W={
tZ:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
u3:function(a,b,c){var t,s
t=document.body
s=(t&&C.p).ag(t,a,b,c)
s.toString
t=new H.bq(new W.cB(s),new W.np(),[W.aR])
return t.gbi(t)},
eR:function(a){var t,s,r
t="element tag unavailable"
try{s=J.to(a)
if(typeof s==="string")t=a.tagName}catch(r){H.dB(r)}return t},
dX:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
rV:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
rT:function(a){var t,s
t=document.createElement("a")
s=new W.nb(t,window.location)
s=new W.fw(s)
s.eZ(a)
return s},
AB:function(a,b,c,d){return!0},
AC:function(a,b,c,d){var t,s,r,q,p
t=d.gea()
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
rW:function(){var t=P.C
t=new W.ni(P.f6(C.l,t),P.a2(null,null,null,t),P.a2(null,null,null,t),P.a2(null,null,null,t),null)
t.f0(null,new H.d0(C.l,new W.nj(),[H.J(C.l,0),null]),["TEMPLATE"],null)
return t},
aS:function aS(){},
iv:function iv(){},
iw:function iw(){},
iH:function iH(){},
fI:function fI(){},
e4:function e4(){},
iP:function iP(){},
iQ:function iQ(){},
dE:function dE(){},
fO:function fO(){},
e6:function e6(){},
hf:function hf(){},
iW:function iW(){},
j_:function j_(){},
fQ:function fQ(){},
fR:function fR(){},
fS:function fS(){},
j0:function j0(){},
fT:function fT(){},
fU:function fU(){},
cn:function cn(){},
np:function np(){},
j7:function j7(){},
T:function T(){},
eS:function eS(){},
jM:function jM(){},
ca:function ca(){},
h9:function h9(){},
hg:function hg(){},
hl:function hl(){},
hd:function hd(){},
jX:function jX(){},
ek:function ek(){},
k1:function k1(){},
kp:function kp(){},
kr:function kr(){},
kA:function kA(){},
kF:function kF(){},
kJ:function kJ(){},
f9:function f9(){},
kN:function kN(){},
kO:function kO(){},
kQ:function kQ(){},
kR:function kR(){},
fa:function fa(){},
l7:function l7(){},
l8:function l8(){},
cB:function cB(a){this.a=a},
aR:function aR(){},
hK:function hK(){},
hh:function hh(){},
hm:function hm(){},
lc:function lc(){},
ld:function ld(){},
lf:function lf(){},
li:function li(){},
lr:function lr(){},
hZ:function hZ(){},
lR:function lR(){},
lT:function lT(){},
lY:function lY(){},
eA:function eA(){},
i4:function i4(){},
ma:function ma(){},
mb:function mb(){},
fs:function fs(){},
mf:function mf(){},
i9:function i9(){},
eD:function eD(){},
mL:function mL(){},
mM:function mM(){},
mN:function mN(){},
mS:function mS(){},
fy:function fy(){},
hi:function hi(){},
hn:function hn(){},
nc:function nc(){},
mJ:function mJ(){},
mO:function mO(a){this.a=a},
fw:function fw(a){this.a=a},
dl:function dl(){},
hL:function hL(a){this.a=a},
la:function la(a){this.a=a},
l9:function l9(a,b,c){this.a=a
this.b=b
this.c=c},
fz:function fz(){},
nd:function nd(){},
ne:function ne(){},
ni:function ni(e,a,b,c,d){var _=this
_.e=e
_.a=a
_.b=b
_.c=c
_.d=d},
nj:function nj(){},
nh:function nh(){},
hb:function hb(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
dx:function dx(){},
nk:function nk(){},
nb:function nb(a,b){this.a=a
this.b=b},
ig:function ig(a){this.a=a},
nl:function nl(a){this.a=a}},T={fF:function fF(){},fG:function fG(){},iK:function iK(rx,ry,x1,x2,y1,y2,q,B,C,K,E,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.q=q
_.B=B
_.C=C
_.K=K
_.E=E
_.N=N
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
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
_.r2=r2},iM:function iM(rx,ry,x1,x2,y1,y2,q,B,C,K,E,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.q=q
_.B=B
_.C=C
_.K=K
_.E=E
_.N=N
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
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
_.r2=r2},iZ:function iZ(){},jU:function jU(rx,ry,x1,x2,y1,y2,q,B,C,K,E,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.q=q
_.B=B
_.C=C
_.K=K
_.E=E
_.N=N
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
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
B8:function(){A.AZ()
T.B1()},
B1:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
t=new P.eQ(Date.now(),!1)
s=H.ri(t)
r=H.rh(t)
q=C.b.u(H.rj(t))
p=C.b.u(s)
o=C.b.u(r)
if(s<10)p="0"+p
if(r<10)o="0"+o
n=H.rm(q+p+o,null,null)
m=[Q.ci]
l=[Y.lJ]
l=new L.dn(!1,null,null,null,null,n,H.a([],m),new Z.jQ([]),500*$.r.r,H.a([],m),new S.iu(new F.hE(!1,"Afterlife"),[],[],null),!1,null,null,C.r,0,!1,!1,10,30,null,13,20,!1,H.a([],m),0,-15,-999,H.a([],[P.C]),0,H.a([],l),H.a([],l),H.a([],l),H.a([],l),null,H.a([],m),H.a([],[Z.k_]),new B.mC([]),new G.lO(0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1),null,null,null,null,null,null,null)
k=new A.d2(null,null)
k.dc(n)
l.v=k
F.zA(l)
l.N=new Y.kY(l,null,null,null,null,null,null)
l.ab=K.Am()
l.ep()
l.eq()
l.E.a=$.oh
P.e0("Making sesssion "+H.t(l)+" with initialGameEntity id of "+l.E.a)
l.b=new F.hE(!1,"Session: "+H.t(n))
l.ab.eM(l)
l.hC()
j=l.v.w(l.ad)
Y.tc(j,l.ad)
i=l.v.w(l.as)
Y.tc(i,l.as)
h=l.v.w($.et)
J.eL(h,l)
p=l.v.w(H.a([l.d,l.e],[R.hH]))
g=Q.rg(l,j,i,h,p,!1)
g.fN()
n=l.v
g.aA=B.qs(n,n.w(B.qt()))
n=l.v
g.aB=B.qs(n,n.w(B.qt()))
n=[E.I]
g.k2=H.a([],n)
g.a7.cX(g)
g.ac.cX(g)
k=$.c5
g.a$.ap(k,0)
k=$.bT
f=g.c.v.V(11)
g.a$.ap(k,f+-10)
f=$.bz
k=g.c.v.V(10)
g.a$.ap(f,k+1)
k=$.bo
f=g.c.v.V(21)
g.a$.ap(k,f+-10)
f=$.ak
k=g.c.v.V(21)
g.a$.ap(f,k+40)
k=$.b0
f=$.ak
f=g.a$.ar(f)
g.a$.ap(k,f)
if(g.aJ&&!J.ai(g.Z,"#ff0000")){k=$.b0
f=Y.po(g.Z)
g.a$.bw(k,2*f)
f=$.ak
k=Y.po(g.Z)
g.a$.bw(f,2*k)}k=$.aU
f=g.c.v.V(21)
g.a$.ap(k,f+-10)
g.h8()
f=$.r
g.a$.ap(f,10)
if(g.aJ&&!J.ai(g.Z,"#ff0000")){k=$.r
f=Y.po(g.Z)
g.a$.bw(k,2*f)}k=$.aV
f=g.c.v.V(21)
g.a$.ap(k,f+-10)
g.h6()
g.h7()
e=g.hE()
if(J.ai(g.ac,$.rz)||e<-9){k=g.c.v.w($.oX)
g.ba=k
J.eL(k,g.c)}else if(e>25){k=g.c.v.w($.oY)
g.ba=k
J.eL(k,g.c)}if(e>5)g.bL=!0
k=$.b0
f=$.ak
f=g.a$.ar(f)
g.a$.ap(k,f)
if(J.ai(g.ac,$.ry)){d=Z.aA("Rocks Fall, Everyone Dies",1,null,"")
d.r.push(new Z.X($.r,3,!0,0,1,2,3,""))
d.e="Disappointingly sized meteors rain down from above.  Man, for such a cool name, this fraymotif kind of sucks. "
g.fy.push(d)}else if(J.ai(g.ac,$.rx)){d=Z.aA("What class???",1,null,"")
d.r.push(new Z.X($.r,1,!0,0,1,2,3,""))
d.e=" I am certain there is not a class here and it is laughable to imply otherwise. "
g.fy.push(d)
d=Z.aA("Nulzilla",2,null,"")
d.r.push(new Z.X($.r,1,!0,0,1,2,3,""))
d.e=" If you get this reference, you may reward yourself 15 Good Taste In Media Points (tm).  "
g.fy.push(d)}k=g.c
m=new F.i0(null,C.c,k,"sprite","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],[X.cO]),!1,H.a([],[Z.cx]),!1,H.a([],[N.cq]),0,H.a([],n),null,null,!1,H.a([],m),"",null,null)
m.n("sprite",k)
g.N=m
m.a$.p(P.z([$.ak,10,$.b0,10],D.be,P.c6))
g.N.r1=!0
g.a=g.c.v.w($.$get$ao()).bD()
n=g.y2.a;(n&&C.a).st(n,0)
g.y2.h(0,g.c.v.w(g.aA.a.y))
g.y2.h(0,g.c.v.w(g.aB.a.y))
c=new H.o(0,null,null,null,null,null,0,[X.D,P.R])
b=g.c.v.w(g.ac.gb3().ga9())
J.ir(b,$.As)
a=g.c.v.w(g.a7.gb3().ga9())
J.ir(a,$.Ar)
a0=g.c.v.w(g.aA.a.r.ga9())
J.ir(a0,$.rH)
a1=g.c.v.w(g.aB.a.r.ga9())
J.ir(a1,$.rH)
c.i(0,b,g.ac.gb3().m(0,b))
c.i(0,a,g.a7.gb3().m(0,a))
c.i(0,a0,g.aA.a.r.m(0,a0))
c.i(0,a1,g.aB.a.r.m(0,a1))
g.b8=M.zv(c,g.c,g.a7,g.ac)
n=g.c.v
m=g.ac
k=g.a7
f=g.aA
a2=g.aB
a3=n.a.D()
a4=a3>0.3
if(a4){a5=f.a.gah()
a6=J.nQ(J.ds(m))
if(0>=a6.length)return H.S(a6,0)
a7=Y.nv(n,a5,a6[0])}else if(a3>0.6){a5=a2.a.gah()
a6=J.nQ(J.ds(m))
if(0>=a6.length)return H.S(a6,0)
a7=Y.nv(n,a5,a6[0])}else a7=n.w(m.gO())
if(a7==null||J.ai(a7,""))a7=n.w(m.gO())
if(a4){m=f.a.gai()
f=J.nR(J.ds(k))
if(0>=f.length)return H.S(f,0)
a8=Y.nv(n,m,f[0])}else if(a3>0.6){m=a2.a.gai()
f=J.nR(J.ds(k))
if(0>=f.length)return H.S(f,0)
a8=Y.nv(n,m,f[0])}else a8=n.w(k.gO())
if(a8==null||J.ai(a8,""))a8=n.w(k.gO())
if(a7==null)a7="mystery"
if(a8==null)a8="Mystery"
g.b9=H.t(a7)+H.t(a8)
g.bI=Y.AW(g)
if(g.aJ){if(g.b0==null){a9=D.rq(g.c.v)
a9.hi(g)
g.b0=a9}n=$.aV
g.a$.bw(n,-10)}else if(g.b0==null){a9=D.rq(g.c.v)
a9.hh(g)
g.b0=a9}g.B=g.B+g.c.v.a.D()*-33
if(J.ai(g.a7,$.iy))g.B+=33
if(J.ai(g.a7,$.pU))g.b=C.y
g.a.e0(g)
g.x1=l.v.V(3)+1
g.bJ=l.v.V(1+$.zy-1)+1
n=l.v.V(46)+1
g.bK=n
g.bp=n
if(l.v.a.D()>0.7)g.bp=l.v.V(46)+1
$.ta=g
n=P.bm($.$get$hv(),!0,A.a7)
g.y2=new A.i3(n,g)
n=document
T.Bg(n.querySelector("#traitTable"))
b0=n.querySelector("#story")
T.Bf(b0)
for(n=$.ta.y2.a,n=new J.e2(n,n.length,0,null,[H.J(n,0)]),b1=0;n.A();){b0.appendChild(T.Be(n.d,b1));++b1}},
Bg:function(a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t=document
s=t.createElement("table")
r=s.style
r.border="1px solid black"
r=s.style
r.backgroundColor="white"
q=t.createElement("div")
a1.appendChild(q)
p=t.createElement("tr")
s.appendChild(p)
o=P.bm(G.oK(),!0,null)
C.a.T(o,G.oI())
T.e_(p,"",null)
for(r=o.length,n=0;n<o.length;o.length===r||(0,H.c2)(o),++n)T.e_(p,C.a.gR(o[n].gaW()),null)
m=H.a([],[T.f1])
for(r=o.length,l=G.Z,k=[l],j=0,i=0,n=0;n<o.length;d===r||(0,H.c2)(o),++n){h=o[n]
g=t.createElement("tr")
s.appendChild(g)
T.e_(g,C.a.gR(h.gaW()),null)
for(f=o.length,e=0;d=o.length,e<d;o.length===f||(0,H.c2)(o),++e){c=o[e]
if(h===c)T.e_(g,"x",$.$get$rt())
else{b=G.q2(P.f6(H.a([h,c],k),l))
a=new T.f1(h,c)
if(C.a.U(m,a)){d=b.e
a0=d==null
if(a0)H.ba(new P.c_("No elements"))
d=d.a
if(d instanceof G.d){if(a0)H.ba(new P.c_("No elements"))
T.e_(g,d.d,$.$get$p7())}else T.e_(g,"???",$.$get$p7())}else{m.push(a);++j
d=b.e
a0=d==null
if(a0)H.ba(new P.c_("No elements"))
d=d.a
if(d instanceof G.d){if(a0)H.ba(new P.c_("No elements"))
T.e_(g,d.d,$.$get$ru());++i}else T.e_(g,"???",null)}}}}C.f.en(q,""+j+" possible 2 trait combos. "+i+" already done. "+C.i.ak(i/j*100)+"% completion")
a1.appendChild(s)},
e_:function(a,b,c){var t,s,r
if(c==null)c=$.$get$rw()
t=document.createElement("td")
t.textContent=null
t.appendChild(C.R.ag(t,b,null,null))
s=t.style
s.border="1px solid black"
s=t.style
r=C.b.d5(c.d4(!1),16)
r="#"+C.e.d0(r,6,"0").toUpperCase()
s.backgroundColor=r
a.appendChild(t)},
Bf:function(a){var t,s,r,q,p,o,n,m,l
t=document.createElement("div")
s=G.r9()
r="<b>ObjectTraits: ("+s.gt(s)+" total) </b>"
for(s=G.r9(),q=J.bx(s.a),s=new H.cR(q,s.b,[H.J(s,0)]);s.A();){p=q.gI()
o=" "+H.t(C.a.gR(p.gaW()))+" ("
n=A.oO(p)
r+=o+n.gt(n)+"),"}s=G.oK()
r+="<br><Br><b>FunctionalTraits: ("+s.gt(s)+" total) </b>"
for(s=G.oK(),q=J.bx(s.a),s=new H.cR(q,s.b,[H.J(s,0)]);s.A();){p=q.gI()
o=" "+H.t(C.a.gR(p.gaW()))+"("
n=A.oO(p)
r+=o+n.gt(n)+"),"}s=G.oI()
r+="<br><Br><b>AppearanceTraits: ("+s.gt(s)+" total) </b>"
for(s=G.oI(),q=J.bx(s.a),s=new H.cR(q,s.b,[H.J(s,0)]);s.A();){p=q.gI()
o=" "+H.t(C.a.gR(p.gaW()))+"("
n=A.oO(p)
r+=o+n.gt(n)+"),"}s=G.oJ()
r+="<br><Br><b>CombinedTraits: ("+s.gt(s)+" total) </b>"
for(s=G.oJ(),q=J.bx(s.a),s=new H.cR(q,s.b,[H.J(s,0)]);s.A();){p=q.gI()
if(p.gaW().length!==0){o=" "+H.t(C.a.gR(p.b))+"("
n=p.gcn()
m=C.a.bs(C.a.dg(n,0,n.length-1),", ")
l=C.a.gcZ(n)
n=n.length<2?"":" and "
r+=o+C.a.bs([m,l],n)+"),"}if(p.b.length===0){o=p.gcn()
n=C.a.bs(C.a.dg(o,0,o.length-1),", ")
m=C.a.gcZ(o)
o=o.length<2?"":" and "
r+=" CanceledOut("+C.a.bs([n,m],o)+"),"}}C.f.h9(t,"beforeend",r,null,null)
a.appendChild(t)},
Be:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=document
s=t.createElement("div")
s.classList.add("itemStats")
r=t.createElement("div")
q=a instanceof U.af?"kind":""
p=""+b+": "+a.gcW()+q
r.textContent=null
r.appendChild(C.f.ag(r,p,null,null))
r.classList.add("itemHeader")
s.appendChild(r)
o=t.createElement("div")
p="Rank: "+H.t(a.gaS())
o.textContent=null
o.appendChild(C.f.ag(o,p,null,null))
s.appendChild(o)
n=t.createElement("div")
n.textContent=null
n.appendChild(C.f.ag(n,"Attributes: ",null,null))
s.appendChild(n)
for(p=a.e,m=new P.d6(p,p.r,null,null,[null]),m.c=p.e;m.A();){l=m.d
k=t.createElement("div")
k.classList.add("oneTrait")
p=C.a.gR(l.gaW())
k.textContent=null
k.appendChild(C.f.ag(k,p,null,null))
s.appendChild(k)}return s},
f1:function f1(a,b){this.a=a
this.b=b},
rA:function(){var t=$.$get$ey()
t=t.gaw(t)
return new H.bq(t,new T.lF(),[H.aM(t,"G",0)])},
rB:function(){var t=$.$get$ey()
t=t.gaw(t)
return new H.bq(t,new T.lG(),[H.aM(t,"G",0)])},
p9:function(){var t=$.$get$ey()
t=t.gaw(t)
return new H.bq(t,new T.lE(),[H.aM(t,"G",0)])},
A1:function(a,b,c,d){var t=[P.C]
t=new T.d3(0.5,a,new H.o(0,null,null,null,null,null,0,[X.D,P.R]),null,null,b,c,d,!1,!1,!1,!1,!1,!1,Q.E(null,null,A.a7),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.I]),H.a([],[A.cG]),1)
t.a2(a,b,c,d)
return t},
lF:function lF(){},
lG:function lG(){},
lE:function lE(){},
d3:function d3(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
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
bO:function bO(a,b){this.a=a
this.b=b},
u2:function(){if($.AU)return!0
return!1}},S={it:function it(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},iu:function iu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},bs:function bs(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},fN:function fN(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},kq:function kq(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},kH:function kH(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},kU:function kU(rx,ry,x1,x2,y1,y2,q,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.q=q
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
_.r2=r2},lM:function lM(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id}},K={bE:function bE(a,b){this.a=a
this.b=b},ky:function ky(rx,ry,x1,x2,y1,y2,q,B,C,K,E,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.q=q
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
Am:function(){var t=$.pa
if(t==null){t=K.Al()
$.pa=t}return t},
Al:function(){var t=new K.lN(0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,0,1,-15,!1,1000,13,20,350,100,500*$.r.r,null,null,null,H.a([],[Q.ci]),6.12,new K.kP(null,null,null,null,null,null,null,null,null,null,null,null,null,null))
t.eV()
return t},
lN:function lN(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
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
_.x2=x2},
kP:function kP(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
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
pY:function(){var t=$.$get$e3()
t=t.gaw(t)
return new H.bq(t,new L.iz(),[H.aM(t,"G",0)])},
tQ:function(){var t=$.$get$e3()
t=t.gaw(t)
return new H.bq(t,new L.iA(),[H.aM(t,"G",0)])},
tR:function(){var t=$.$get$e3()
t=t.gaw(t)
return new H.bq(t,new L.iB(),[H.aM(t,"G",0)])},
tw:function(a,b,c,d){var t,s,r
t=P.C
s=A.ct
r=P.a6
r=new L.al(P.n(null,null,null,t,s),P.n(null,null,null,r,s),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
r.j(0,$.aq,L.e("#FF9B00"),!0)
r.j(0,$.as,L.e("#FF9B00"),!0)
r.j(0,$.ar,L.e("#FF8700"),!0)
r.j(0,$.aC,L.e("#7F7F7F"),!0)
r.j(0,$.aB,L.e("#727272"),!0)
r.j(0,$.au,L.e("#A3A3A3"),!0)
r.j(0,$.av,L.e("#999999"),!0)
r.j(0,$.at,L.e("#898989"),!0)
r.j(0,$.az,L.e("#EFEFEF"),!0)
r.j(0,$.ay,L.e("#DBDBDB"),!0)
r.j(0,$.ax,L.e("#C6C6C6"),!0)
r.j(0,$.aw,L.e("#ADADAD"),!0)
s=[t]
t=new L.cE(0.5,a,new H.o(0,null,null,null,null,null,0,[X.D,P.R]),null,"","",!1,b,null,c,!1,!1,!1,!0,1,r,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.I]),H.a([],[A.cG]),Q.E(null,null,A.a7))
t.W(a,b,c,!1)
return t},
e:function(a){if(!!J.aZ(a).$isct)return a
if(typeof a==="number"&&Math.floor(a)===a)return A.eP(a,C.e.d0(C.b.d5(a,16),6,"0").length>6)
if(typeof a==="string")if(C.e.cl(a,"#"))return A.q1(C.e.bV(a,1))
else return A.q1(a)
throw H.u("Invalid AspectPalette input: colour must be a Colour object, a valid colour int, or valid hex string (with or without leading #)")},
iz:function iz(){},
iA:function iA(){},
iB:function iB(){},
cE:function cE(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
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
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iI:function iI(id,k1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,b$,c$,d$,e$,f$,r$){var _=this
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
jr:function jr(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
kS:function kS(rx,ry,x1,x2,y1,y2,q,B,C,K,E,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.q=q
_.B=B
_.C=C
_.K=K
_.E=E
_.N=N
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
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
lu:function lu(rx,ry,x1,x2,y1,y2,q,B,C,K,E,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.q=q
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
lL:function lL(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
lS:function lS(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
fM:function fM(a,b){this.a=a
this.b=b},
dn:function dn(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,q,B,C,K,E,N,v,ad,aH,as,az,ab){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
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
_.q=q
_.B=B
_.C=C
_.K=K
_.E=E
_.N=N
_.v=v
_.ad=ad
_.aH=aH
_.as=as
_.az=az
_.ab=ab}},M={iF:function iF(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},fK:function fK(){},iX:function iX(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},eT:function eT(){},
zv:function(a,b,c,d){var t=new M.f4(!1,null,null,null,null,null,null,null,null,!1,!1,!1,null,null,null,null,null,!1,null,null,$.$get$h8(),null,null,null,Q.E(null,null,X.D),Q.E(null,null,N.W),P.cz(P.C,[Q.bD,N.W]))
t.eQ(a,b,c,d)
return t},
f4:function f4(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,b$,c$,d$,e$,f$,r$){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
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
hO:function hO(){},
ks:function ks(){},
kt:function kt(){},
ku:function ku(){},
kv:function kv(){},
bn:function bn(a,b){this.a=a
this.b=b},
lZ:function lZ(a){this.a=a},
mA:function mA(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id}},O={iG:function iG(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},cN:function cN(){},dD:function dD(){},fq:function fq(){},jO:function jO(rx,ry,x1,x2,y1,y2,q,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.q=q
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
_.r2=r2},lU:function lU(rx,ry,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},hT:function hT(){}},Y={mg:function mg(a){this.a=a},iO:function iO(a){this.a=a},jR:function jR(k1,k2,k3,k4,r1,r2,rx,ry,x1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},jS:function jS(k1,k2,k3,k4,r1,r2,rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},kY:function kY(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},dS:function dS(a,b){this.a=a
this.b=b},cF:function cF(r,c,d,e,f,a,b){var _=this
_.r=r
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},O:function O(c,d,e,f,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},a3:function a3(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},iJ:function iJ(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},bt:function bt(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},iT:function iT(c,a,b){this.c=c
this.a=a
this.b=b},bB:function bB(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},hU:function hU(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},hc:function hc(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},hV:function hV(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},dG:function dG(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},lI:function lI(rx,ry,x1,x2,y1,y2,q,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.q=q
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
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
_.r2=r2},lJ:function lJ(){},lK:function lK(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
ph:function(a){var t
if(a===1)return 0
t=C.d.b1(C.q.D()*a+1)
return t-1},
d5:function(a){var t=a.split("")
return new H.d0(t,new Y.mD(),[H.J(t,0),null]).bs(0,"")},
nv:function(a,b,c){var t,s,r
t=Y.Ba(b,c)
s=t.length
if(s===0)return
r=C.d.b1(a.a.D()*(s-1-0+1))
if(r<0||r>=t.length)return H.S(t,r)
return t[r]},
Ba:function(a,b){var t,s,r
t=[]
for(s=0;s<a.length;++s){r=a[s]
if(C.e.cl(r,b))t.push(r)}return t},
AS:function(a){var t,s,r,q,p,o
t=J.tu(a," ")
for(s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.c2)(t),++q){p=t[q]
o=J.bV(p)
r+=" "+(J.nR(o.m(p,0))+o.bV(p,1))}return r},
AW:function(a){var t,s,r,q
t=[]
for(s=0;s<16;++s){r=s%4
if(r===3&&s>4){r=a.ac.gJ()
q=C.i.ak((s-6)/4)
if(q<0||q>=r.length)return H.S(r,q)
t.push(r[q])}else if(r===2&&s>4){r=a.a7.gJ()
q=C.i.ak((s-5)/4)
if(q<0||q>=r.length)return H.S(r,q)
t.push(r[q])}else if(r===1)if(s<8){r=a.aA.a.gJ()
q=C.i.ak(s/4)
if(q<0||q>=r.length)return H.S(r,q)
t.push(r[q])}else{r=a.aB.a.gJ()
q=C.i.ak((s-8)/4)
if(q<0||q>=r.length)return H.S(r,q)
t.push(r[q])}else if(r===0||s<4)t.push(a.c.v.w($.$get$t5()))}return t},
tc:function(a,b){var t=(b&&C.a).ca(b,a)
if(t!==-1){C.a.bk(b,"removeAt")
if(t<0||t>=b.length)H.ba(P.fm(t,null,null))
b.splice(t,1)[0]}},
po:function(a){var t=J.aZ(a)
if(t.S(a,"#ff0000"))return 14
if(t.S(a,"#ffc3df"))return 13
if(a==null)return 15
return C.a.ca($.$get$ii(),a)},
mD:function mD(){}},Z={iN:function iN(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,q,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.q=q
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id},j3:function j3(rx,ry,x1,x2,y1,y2,q,B,C,K,E,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.q=q
_.B=B
_.C=C
_.K=K
_.E=E
_.N=N
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
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
cY:function(a,b,c){$.$get$qp().i(0,b,new Z.fX(a,c,[null,null]))
a.a.push(b)},
fX:function fX(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
k_:function k_(){},
kG:function kG(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,q,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.q=q
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
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
lA:function lA(rx,ry,x1,x2,y1,y2,q,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.q=q
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
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
aA:function(a,b,c,d){var t=new Z.cx(c,a,b,!0,d,!1,H.a([],[Z.X]),null)
t.eO(a,b,c,d)
return t},
cx:function cx(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
jQ:function jQ(a){this.a=a},
X:function X(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x}},A={iV:function iV(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
u6:function(a){return new A.jv(a)},
o1:function(a,b){return new A.jt(a,b)},
u5:function(a,b){return new A.ju(a,b)},
u7:function(a,b,c,d,e){a.hw(b,e)},
jv:function jv(a){this.a=a},
jt:function jt(a,b){this.a=a
this.b=b},
ju:function ju(a,b){this.a=a
this.b=b},
oO:function(a){var t=$.$get$hv()
t.toString
return new H.bq(t,new A.kj(a),[H.J(t,0)])},
i:function(a,b,c,d,e){var t=new A.a7(c,e,a,d,P.a2(null,null,null,G.Z),0,3)
t.L(a,b,c,d,e)
return t},
a7:function a7(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},
kj:function kj(a){this.a=a},
ki:function ki(){},
kh:function kh(){},
i3:function i3(a,b){this.a=a
this.b=b},
hP:function hP(){},
cG:function cG(){},
fJ:function fJ(Q,a,b,c,d,e,f,r,x,y,z){var _=this
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
dF:function(a,b,c,d){var t=new A.ct(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.eN(a,b,c,d)
return t},
iU:function(a,b,c,d){var t=A.dF(0,0,0,255)
t.b=C.b.a3(C.d.b1(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.b.a3(C.d.b1(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.b.a3(C.d.b1(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.b.a3(C.d.b1(d*255),0,255)
return t},
eP:function(a,b){if(b){if(typeof a!=="number")return a.d7()
return A.dF((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.d7()
return A.dF((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
q1:function(a){return A.eP(H.rm(a,16,new A.nq()),a.length>=8)},
ct:function ct(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
nq:function nq(){},
lh:function lh(){},
hQ:function hQ(){},
d2:function d2(a,b){this.a=a
this.b=b},
AZ:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if($.t2)return
$.t2=!0
D.Ao()
t=P.C
s=[t]
r=H.a(["metal"],s)
q=$.p
H.a([],s)
r=new G.bC(q,r,0.3)
$.$get$b().h(0,r)
$.A=r
r=H.a(["dutton"],s)
q=$.ae
H.a([],s)
r=new G.bC(q,r,0.6)
$.$get$b().h(0,r)
$.qE=r
r=H.a(["ceramic"],s)
q=$.p
H.a([],s)
r=new G.bC(q,r,-0.3)
$.$get$b().h(0,r)
$.bF=r
r=H.a(["bone"],s)
q=$.p
H.a([],s)
r=new G.bC(q,r,0.2)
$.$get$b().h(0,r)
$.b9=r
r=H.a(["wood"],s)
q=$.p
H.a([],s)
r=new G.bC(q,r,-0.3)
$.$get$b().h(0,r)
$.a0=r
r=H.a(["plastic"],s)
q=$.p
H.a([],s)
r=new G.bC(q,r,-0.3)
$.$get$b().h(0,r)
$.aP=r
r=H.a(["rubber"],s)
q=$.p
H.a([],s)
r=new G.bC(q,r,-0.3)
$.$get$b().h(0,r)
$.bY=r
r=H.a(["paper"],s)
q=$.p
H.a([],s)
r=new G.bC(q,r,-0.3)
$.$get$b().h(0,r)
$.K=r
r=H.a(["cloth","fabric"],s)
q=$.p
H.a([],s)
r=new G.bC(q,r,-0.3)
$.$get$b().h(0,r)
$.N=r
r=H.a(["glass"],s)
q=$.p
H.a([],s)
r=new G.bC(q,r,-0.3)
$.$get$b().h(0,r)
$.b7=r
r=H.a(["ghostly","ectoplasm"],s)
q=$.p
H.a([],s)
r=new G.bC(q,r,-0.3)
$.$get$b().h(0,r)
$.bL=r
r=H.a(["flesh","meat","muscle"],s)
q=$.p
H.a([],s)
r=new G.bC(q,r,-0.1)
$.$get$b().h(0,r)
$.bg=r
r=H.a(["horrorterror","tentacled","grimdark"],s)
q=$.F
H.a([],s)
r=new G.bC(q,r,3.1)
$.$get$b().h(0,r)
$.bk=r
r=H.a(["fur","fluff","fuzzy"],s)
q=$.p
H.a([],s)
r=new G.bC(q,r,-0.1)
$.$get$b().h(0,r)
$.c4=r
r=H.a(["plant","leaf","vine"],s)
q=$.p
H.a([],s)
r=new G.bC(q,r,-0.1)
$.$get$b().h(0,r)
$.b1=r
r=H.a(["feathery"],s)
q=$.p
H.a([],s)
r=new G.bC(q,r,-0.1)
$.$get$b().h(0,r)
$.bw=r
r=H.a(["gross","ugly","unpleasant"],s)
q=$.H
H.a([],s)
r=new G.bC(q,r,0.1)
$.$get$b().h(0,r)
$.bI=r
r=H.a(["shitty","poorly made","conksuck","piece-of-shit"],s)
q=$.H
H.a([],s)
r=new G.bC(q,r,-13)
$.$get$b().h(0,r)
$.bH=r
r=H.a(["stone","rock","concrete"],s)
q=$.p
H.a([],s)
r=new G.bC(q,r,0.3)
$.$get$b().h(0,r)
$.aH=r
r=H.a(["legendary"],s)
q=$.oM
H.a([],s)
r=new G.bC(q,r,13)
$.$get$b().h(0,r)
$.a4=r
r=$.H
H.a([],s)
r=new G.aT(r,["edged","sharp","honed","keen","bladed"],0.3)
$.$get$b().h(0,r)
$.aG=r
r=$.oN
H.a([],s)
r=new G.aT(r,["glowing","bright","illuminated"],0.1)
$.$get$b().h(0,r)
$.b4=r
r=$.oN
H.a([],s)
r=new G.aT(r,["obscuring","dark","shadowy"],0.1)
$.$get$b().h(0,r)
$.an=r
r=$.H
H.a([],s)
r=new G.aT(r,["calming","pale","placating","shooshing"],0.1)
$.$get$b().h(0,r)
$.bu=r
r=$.F
H.a([],s)
r=new G.aT(r,["nuclear","radioactive","irradiated"],1)
$.$get$b().h(0,r)
$.bS=r
r=$.H
H.a([],s)
r=new G.aT(r,["scary","horrifying","terrifying","spooky"],0.2)
$.$get$b().h(0,r)
$.b8=r
r=$.H
H.a([],s)
r=new G.aT(r,["lucky","fortunate","gambler's","favored","charmed"],0.3)
$.$get$b().h(0,r)
$.bM=r
r=$.H
H.a([],s)
r=new G.aT(r,["doomed","cursed","unlucky"],-0.3)
$.$get$b().h(0,r)
$.aN=r
r=$.F
H.a([],s)
r=new G.aT(r,["pointy","piercing","sharp","barbed","piked","sharpened","pronged","pointed"],0.3)
$.$get$b().h(0,r)
$.aY=r
r=$.m
H.a([],s)
r=new G.aT(r,["exploding","explosive","detonating","grenade"],0.6)
$.$get$b().h(0,r)
$.bl=r
r=$.m
H.a([],s)
r=new G.aT(r,["electrical","zap","lightning","shock"],0.6)
$.$get$b().h(0,r)
$.ab=r
r=$.m
H.a([],s)
r=new G.aT(r,["restraining","imprisoning","restricting"],0.3)
$.$get$b().h(0,r)
$.bc=r
r=$.H
H.a([],s)
r=new G.aT(r,["expensive","valuable","bling","money"],0.1)
$.$get$b().h(0,r)
$.bd=r
r=$.H
H.a([],s)
r=new G.aT(r,["edible","tasty","delicious","savory"],0.1)
$.$get$b().h(0,r)
$.aD=r
r=$.H
H.a([],s)
r=new G.aT(r,["classy","distinguished","tasteful","cultured"],0.1)
$.$get$b().h(0,r)
$.am=r
r=$.H
H.a([],s)
r=new G.aT(r,["cool","wicked","radical","awesome","groovy","tubular","bitching","bodacious"],0.1)
$.$get$b().h(0,r)
$.ap=r
r=$.H
H.a([],s)
r=new G.aT(r,["intelligent","smart","useful","scientific","encyclopedic"],0.1)
$.$get$b().h(0,r)
$.a_=r
r=$.F
H.a([],s)
r=new G.aT(r,["sentient","aware","conscious","awake","talking"],0.1)
$.$get$b().h(0,r)
$.aF=r
r=$.H
H.a([],s)
r=new G.aT(r,["romantic","amorous","tender","affectionate","lovey-dovey"],0.1)
$.$get$b().h(0,r)
$.aJ=r
r=$.H
H.a([],s)
r=new G.aT(r,["funny","hilarious","comedy"],0.1)
$.$get$b().h(0,r)
$.b3=r
r=$.H
H.a([],s)
r=new G.aT(r,["annoying","enraging","dickish","asshole"],0.1)
$.$get$b().h(0,r)
$.bv=r
r=$.H
H.a([],s)
r=new G.aT(r,["magical","mystical","magickal","wizardy"],0.6)
$.$get$b().h(0,r)
$.a8=r
r=$.oM
H.a([],s)
r=new G.aT(r,["aspecty","imbued","focused","energized","awakened","infused"],1.3)
$.$get$b().h(0,r)
$.V=r
r=$.oM
H.a([],s)
r=new G.aT(r,["class-related","appropriate","themed"],1.3)
$.$get$b().h(0,r)
$.Q=r
r=$.H
H.a([],s)
r=new G.aT(r,["pretty","aesthetic","beautiful"],0.1)
$.$get$b().h(0,r)
$.aI=r
r=$.m
H.a([],s)
r=new G.aT(r,["healing","regenerating","recovery","life"],0.3)
$.$get$b().h(0,r)
$.b_=r
r=$.H
H.a([],s)
r=new G.aT(r,["uncomfortable","hard","unpleasant"],0.1)
$.$get$b().h(0,r)
$.aQ=r
r=$.H
H.a([],s)
r=new G.aT(r,["comfortable","comforting","soft","cozy","snug","pleasant","plush"],-0.1)
$.$get$b().h(0,r)
$.bb=r
r=$.H
H.a([],s)
r=new G.aT(r,["poisonous","venomous","draining","poison"],0.6)
$.$get$b().h(0,r)
$.bG=r
r=$.H
H.a([],s)
r=new G.aT(r,["chilly","chill","cold","freezing","icy","frozen","ice"],0.6)
$.$get$b().h(0,r)
$.bj=r
r=$.H
H.a([],s)
r=new G.aT(r,["heavy","weighs a ton","heavy","heavy enough to kill a cat"],0.4)
$.$get$b().h(0,r)
$.bX=r
r=$.H
H.a([],s)
r=new G.aT(r,["fire","burning","blazing","hot","heated","on fire","combusting","flaming","fiery"],0.6)
$.$get$b().h(0,r)
$.aE=r
r=$.H
H.a([],s)
r=new G.aT(r,["blunt","bludgeoning","dull"],0.3)
$.$get$b().h(0,r)
$.ah=r
r=$.m
H.a([],s)
r=new G.aT(r,["shooty","ranged","projectile","loaded","long range"],0.3)
$.$get$b().h(0,r)
$.aW=r
r=$.H
H.a([],s)
r=new G.aT(r,["musical","melodic","harmonious","tuneful","euphonious","mellifluous,"],0.1)
$.$get$b().h(0,r)
$.ad=r
r=$.H
H.a([],s)
r=new G.aT(r,["loud","ear splitting","noisy","deafening","thundering"],0.3)
$.$get$b().h(0,r)
$.b5=r
r=$.H
H.a([],s)
r=new G.aT(r,["fake","false","imitation","simulated","replica"],-0.3)
$.$get$b().h(0,r)
$.b2=r
r=$.H
H.a([],s)
r=new G.aT(r,["real","actual","believable","geniune","guaranteed","veritable"],0.3)
$.$get$b().h(0,r)
$.bh=r
r=H.a(["perfectly generic"],s)
q=$.H
H.a([],s)
r=new G.ag(q,r,0.1)
$.$get$b().h(0,r)
$.qI=r
r=H.a(["a sword"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.eo=r
r=H.a(["a hammer"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.ou=r
r=H.a(["a rifle"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.oF=r
r=H.a(["a pistol"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.oB=r
r=H.a(["a blade"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.ok=r
r=H.a(["a dagger"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.op=r
r=H.a(["a santa"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.f0=r
r=H.a(["a fist"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.qG=r
r=H.a(["claws"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.k6=r
r=H.a(["a grenade"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.k7=r
r=H.a(["a freaking safe"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.qZ=r
r=H.a(["a ball"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.dL=r
r=H.a(["a trident"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.r6=r
r=H.a(["a card"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.on=r
r=H.a(["a frying pan"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.or=r
r=H.a(["a pillow"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.hu=r
r=H.a(["a machinegun"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.ox=r
r=H.a(["a shuriken"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.r2=r
r=H.a(["a sling"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.r4=r
r=H.a(["a yoyo"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.r8=r
r=H.a(["a cane"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.qA=r
r=H.a(["a shield"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.en=r
r=H.a(["a lance"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.qR=r
r=H.a(["a ax"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.oj=r
r=H.a(["a sign"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.qX=r
r=H.a(["a book"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.aO=r
r=H.a(["a broom"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.hr=r
r=H.a(["a club"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.ht=r
r=H.a(["a bow"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.ol=r
r=H.a(["a whip"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.r7=r
r=H.a(["a staff"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.r5=r
r=H.a(["a needle"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.oz=r
r=H.a(["dice"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.oq=r
r=H.a(["a fork"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.qH=r
r=H.a(["a pigeon???"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,1.3)
$.$get$b().h(0,r)
$.oA=r
r=H.a(["a chainsaw"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.qB=r
r=H.a(["a sickle"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.r3=r
r=H.a(["a shotgun"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.r0=r
r=H.a(["a stick"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.d_=r
r=H.a(["a chain"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.f_=r
r=H.a(["a wrench"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.oH=r
r=H.a(["a shovel"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.r1=r
r=H.a(["a rolling pin"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.oG=r
r=H.a(["a puppet"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.oD=r
r=H.a(["a razor"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.oE=r
r=H.a(["a pen"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.k9=r
r=H.a(["a bust"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.hs=r
r=H.a(["a bowling ball"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.uT=r
r=H.a(["a golf club"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.qK=r
r=H.a(["a knife"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.ow=r
r=H.a(["scissors"],s)
q=$.a5
H.a([],s)
r=new G.ag(q,r,0.4)
$.$get$b().h(0,r)
$.r_=r
r=H.a(["forged","sharpened","honed","filed"],s)
q=$.F
p=G.Z
o=[p]
n=H.a([$.A,$.aG,$.aY],o)
H.a([],s)
r=new G.d("Forged",n,q,r,0)
$.$get$b().h(0,r)
$.wc=r
r=H.a([],s)
q=$.p
n=H.a([$.ah,$.aG],o)
H.a([],s)
r=new G.d("",n,q,r,0)
$.$get$b().h(0,r)
$.vI=r
r=H.a(["fossilized"],s)
q=$.F
n=H.a([$.b9,$.aH],o)
H.a([],s)
r=new G.d("Fossilized",n,q,r,0)
$.$get$b().h(0,r)
$.wd=r
r=H.a(["adamantium"],s)
q=$.F
n=H.a([$.b9,$.A],o)
H.a([],s)
r=new G.d("Adamantium",n,q,r,0)
$.$get$b().h(0,r)
$.qx=r
r=H.a([],s)
q=$.p
n=H.a([$.bb,$.aQ],o)
H.a([],s)
r=new G.d("",n,q,r,0)
$.$get$b().h(0,r)
$.yP=r
r=H.a(["tatami"],s)
q=$.p
n=H.a([$.N,$.a0],o)
H.a([],s)
r=new G.d("Tatami",n,q,r,0)
$.$get$b().h(0,r)
$.z3=r
r=H.a(["mesh","chain link"],s)
q=$.p
n=H.a([$.N,$.A],o)
H.a([],s)
r=new G.d("Mesh",n,q,r,0)
$.$get$b().h(0,r)
$.xc=r
r=H.a(["foil"],s)
q=$.p
n=H.a([$.K,$.A],o)
H.a([],s)
r=new G.d("Foil",n,q,r,0)
$.$get$b().h(0,r)
$.w8=r
r=H.a(["beanbag"],s)
q=$.p
n=H.a([$.N,$.aH],o)
H.a([],s)
r=new G.d("Beanbag",n,q,r,0)
$.$get$b().h(0,r)
$.uN=r
r=H.a(["pleather","faux fur"],s)
q=$.p
n=H.a([$.c4,$.aP],o)
H.a([],s)
r=new G.d("Faux Fur",n,q,r,0)
$.$get$b().h(0,r)
$.xN=r
r=H.a(["plywood"],s)
q=$.p
n=H.a([$.a0,$.K],o)
H.a([],s)
r=new G.d("Plywood",n,q,r,0)
$.$get$b().h(0,r)
$.oC=r
r=H.a(["colossus"],s)
q=$.p
n=H.a([$.A,$.bg],o)
H.a([],s)
r=new G.d("Colossus",n,q,r,0)
$.$get$b().h(0,r)
$.qC=r
r=H.a(["rotting","zombie"],s)
q=$.F
n=H.a([$.bI,$.bg],o)
H.a([],s)
r=new G.d("Rotting",n,q,r,0)
$.$get$b().h(0,r)
$.yb=r
r=H.a(["draugr","white walker"],s)
q=$.F
n=H.a([$.bI,$.bg,$.bj],o)
H.a([],s)
r=new G.d("Draugr",n,q,r,0)
$.$get$b().h(0,r)
$.vF=r
r=H.a(["Ultraviolet"],s)
q=$.oL
n=H.a([$.b4,$.an],o)
H.a([],s)
r=new G.d("Ultraviolet",n,q,r,0)
$.$get$b().h(0,r)
$.wW=r
r=H.a(["Ultraviolence"],s)
q=$.m
n=H.a([$.b4,$.an,$.aG],o)
H.a([],s)
r=new G.d("Ultraviolence",n,q,r,0)
$.$get$b().h(0,r)
$.ze=r
r=H.a([],s)
q=$.m
n=H.a([$.aN,$.bM],o)
H.a([],s)
r=new G.d("",n,q,r,0)
$.$get$b().h(0,r)
$.vD=r
r=H.a(["candy"],s)
q=$.p
n=H.a([$.aD,$.b7],o)
H.a([],s)
r=new G.d("Candy",n,q,r,0)
$.$get$b().h(0,r)
$.om=r
r=H.a(["cotton candy"],s)
q=$.p
n=H.a([$.aD,$.N],o)
H.a([],s)
r=new G.d("Cotton Candy",n,q,r,0)
$.$get$b().h(0,r)
$.vo=r
r=H.a(["gummy"],s)
q=$.p
n=H.a([$.aD,$.bY],o)
H.a([],s)
r=new G.d("Gum",n,q,r,0)
$.$get$b().h(0,r)
$.wq=r
r=H.a(["marrow"],s)
q=$.p
n=H.a([$.aD,$.b9],o)
H.a([],s)
r=new G.d("Marrow",n,q,r,0)
$.$get$b().h(0,r)
$.x5=r
r=H.a(["toothy"],s)
q=$.a5
n=H.a([$.b9,$.bF],o)
H.a([],s)
r=new G.d("Toothy",n,q,r,0)
$.$get$b().h(0,r)
$.zb=r
r=H.a(["Frost"],s)
q=$.p
n=H.a([$.aH,$.b7,$.bg],o)
H.a([],s)
r=new G.d("Frost",n,q,r,0)
$.$get$b().h(0,r)
$.we=r
r=H.a(["arsenic","antifreeze"],s)
q=$.m
n=H.a([$.aD,$.bG],o)
H.a([],s)
r=new G.d("Arsenic",n,q,r,0)
$.$get$b().h(0,r)
$.vN=r
r=H.a(["crystal","diamond","quartz"],s)
q=$.p
n=H.a([$.aH,$.b7],o)
H.a([],s)
r=new G.d("Crystal",n,q,r,0)
$.$get$b().h(0,r)
$.oo=r
r=H.a(["mary sue","sakura katana chan","shitty oc"],s)
q=$.H
n=H.a([$.aI,$.aJ,$.b3,$.a_,$.am,$.bM,$.a8],o)
H.a([],s)
r=new G.d("Mary Sue",n,q,r,0)
$.$get$b().h(0,r)
$.x6=r
r=H.a(["edge lord","coldsteel the hedgehog"],s)
q=$.H
n=H.a([$.b8,$.an,$.aG,$.a4,$.aN,$.a_,$.am,$.ap],o)
H.a([],s)
r=new G.d("Edge Lord",n,q,r,0)
$.$get$b().h(0,r)
$.vL=r
r=H.a(["deadpool"],s)
q=$.a5
n=H.a([$.bI,$.b_,$.ap,$.b3],o)
H.a([],s)
r=new G.d("Deadpool",n,q,r,0)
$.$get$b().h(0,r)
$.vu=r
r=H.a(["spoopy","skellington's","creppy"],s)
q=$.H
n=H.a([$.b8,$.ap],o)
H.a([],s)
r=new G.d("Spoopy",n,q,r,0)
$.$get$b().h(0,r)
$.yS=r
r=H.a(["wolverine"],s)
q=$.a5
n=H.a([$.b9,$.aG,$.aY],o)
H.a([],s)
r=new G.d("Wolverine",n,q,r,0)
$.$get$b().h(0,r)
$.zp=r
r=H.a(["rabbit's foot"],s)
q=$.a5
n=H.a([$.bM,$.c4],o)
H.a([],s)
r=new G.d("Rabbit's Foot",n,q,r,0)
$.$get$b().h(0,r)
$.qW=r
r=H.a(["tipped","reinforced","arrowhead"],s)
q=$.F
n=H.a([$.aY,$.a0],o)
H.a([],s)
r=new G.d("Tipped",n,q,r,0)
$.$get$b().h(0,r)
$.uG=r
r=H.a(["arrow","flechette","bolt"],s)
q=$.a5
n=H.a([$.aY,$.aW,$.a0],o)
H.a([],s)
r=new G.d("Arrow",n,q,r,0)
$.$get$b().h(0,r)
$.qy=r
r=H.a(["training sword","bokken"],s)
q=$.a5
n=H.a([$.a0,$.aG],o)
H.a([],s)
r=new G.d("Bokken",n,q,r,0)
$.$get$b().h(0,r)
$.wQ=r
r=H.a(["ironic"],s)
q=$.H
n=H.a([$.b2,$.ap],o)
H.a([],s)
r=new G.d("Irony Type1",n,q,r,0)
$.$get$b().h(0,r)
$.ov=r
r=H.a(["netted","webbed"],s)
q=$.a5
n=H.a([$.bc,$.N],o)
H.a([],s)
r=new G.d("Netted",n,q,r,0)
$.$get$b().h(0,r)
$.xr=r
r=H.a(["barbed wire"],s)
q=$.a5
n=H.a([$.aY,$.bc,$.A,$.N],o)
H.a([],s)
r=new G.d("Barbed Wire",n,q,r,0)
$.$get$b().h(0,r)
$.uK=r
r=H.a(["morning star"],s)
q=$.a5
n=H.a([$.aY,$.ah],o)
H.a([],s)
r=new G.d("Morning Star",n,q,r,0)
$.$get$b().h(0,r)
$.xl=r
r=H.a(["decadent"],s)
q=$.H
n=H.a([$.bb,$.bd],o)
H.a([],s)
r=new G.d("Decadent",n,q,r,0)
$.$get$b().h(0,r)
$.vx=r
r=H.a(["SBAHJ"],s)
q=$.m
n=H.a([$.bH,$.ap],o)
H.a([],s)
r=new G.d("SBAHJ",n,q,r,0)
$.$get$b().h(0,r)
$.yl=r
r=H.a(["bayonet"],s)
q=$.a5
n=H.a([$.aY,$.aW],o)
H.a([],s)
r=new G.d("Bayonet",n,q,r,0)
$.$get$b().h(0,r)
$.uM=r
r=H.a(["Snoop Dog's Snow Cone Machete"],s)
q=$.p
n=H.a([$.bj,$.ap,$.aG],o)
H.a([],s)
r=new G.d("Snoop",n,q,r,0)
$.$get$b().h(0,r)
$.yO=r
r=H.a(["light saber"],s)
q=$.m
n=H.a([$.b4,$.aE,$.aG],o)
H.a([],s)
r=new G.d("Light Saber",n,q,r,0)
$.$get$b().h(0,r)
$.wV=r
r=H.a(["fake as shit","fakey fake","bullshit"],s)
q=$.H
n=H.a([$.a8,$.b2],o)
H.a([],s)
r=new G.d("Fakey Fake",n,q,r,0)
$.$get$b().h(0,r)
$.vU=r
r=H.a(["real as shit","suprisingly real"],s)
q=$.H
n=H.a([$.a8,$.bh],o)
H.a([],s)
r=new G.d("Real As Shit",n,q,r,0)
$.$get$b().h(0,r)
$.y5=r
r=H.a(["skeletal"],s)
q=$.a5
n=H.a([$.b8,$.aN,$.b9],o)
H.a([],s)
r=new G.d("Skeletal",n,q,r,0)
$.$get$b().h(0,r)
$.yI=r
r=H.a(["green sun"],s)
q=$.oN
n=H.a([$.aE,$.bS,$.b4],o)
H.a([],s)
r=new G.d("Green Sun",n,q,r,0)
$.$get$b().h(0,r)
$.ot=r
r=H.a(["midnight","3 In The Morning"],s)
q=$.oL
n=H.a([$.an,$.am],o)
H.a([],s)
r=new G.d("Midnight",n,q,r,0)
$.$get$b().h(0,r)
$.xg=r
r=H.a(["radiant","dazzling"],s)
q=$.H
n=H.a([$.a8,$.b4],o)
H.a([],s)
r=new G.d("Radiant",n,q,r,0)
$.$get$b().h(0,r)
$.y2=r
r=H.a(["edgy"],s)
q=$.H
n=H.a([$.aG,$.an,$.ap],o)
H.a([],s)
r=new G.d("Edgy",n,q,r,0)
$.$get$b().h(0,r)
$.vM=r
r=H.a(["A-Bomb","Warhead","Chernobyl"],s)
q=$.m
n=H.a([$.bS,$.bl],o)
H.a([],s)
r=new G.d("Warhead",n,q,r,0)
$.$get$b().h(0,r)
$.uz=r
r=H.a(["living"],s)
q=$.F
n=H.a([$.b9,$.bg,$.aF],o)
H.a([],s)
r=new G.d("Living",n,q,r,0)
$.$get$b().h(0,r)
$.wZ=r
r=H.a(["dead","corpse","deceased"],s)
q=$.F
n=H.a([$.b9,$.bg],o)
H.a([],s)
r=new G.d("Dead",n,q,r,0)
$.$get$b().h(0,r)
$.vt=r
r=H.a(["taser"],s)
q=$.m
n=H.a([$.ab,$.bc,$.aW],o)
H.a([],s)
r=new G.d("Taser",n,q,r,0)
$.$get$b().h(0,r)
$.z2=r
r=H.a(["nocturn"],s)
q=$.m
n=H.a([$.an,$.ad],o)
H.a([],s)
r=new G.d("Nocturn",n,q,r,0)
$.$get$b().h(0,r)
$.xu=r
r=H.a(["dirge"],s)
q=$.m
n=H.a([$.aN,$.ad],o)
H.a([],s)
r=new G.d("Dirge",n,q,r,0)
$.$get$b().h(0,r)
$.vA=r
r=H.a(["Snobbish","Noble"],s)
q=$.H
n=H.a([$.am,$.bd],o)
H.a([],s)
r=new G.d("Snobbish",n,q,r,0)
$.$get$b().h(0,r)
$.yN=r
r=H.a(["flat"],s)
q=$.H
n=H.a([$.ah,$.ad],o)
H.a([],s)
r=new G.d("Flat(Music)",n,q,r,0)
$.$get$b().h(0,r)
$.w3=r
r=H.a(["sharp"],s)
q=$.H
n=H.a([$.aG,$.ad],o)
H.a([],s)
r=new G.d("Sharp(Music)",n,q,r,0)
$.$get$b().h(0,r)
$.yu=r
r=H.a(["sharp"],s)
q=$.H
n=H.a([$.am,$.ad],o)
H.a([],s)
r=new G.d("Sharp(Clothes)",n,q,r,0)
$.$get$b().h(0,r)
$.yt=r
r=H.a(["Bach's"],s)
q=$.ae
n=H.a([$.a_,$.ad],o)
H.a([],s)
r=new G.d("Bach's",n,q,r,0)
$.$get$b().h(0,r)
$.uI=r
r=H.a(["Mozart's"],s)
q=$.ae
n=H.a([$.a8,$.ad],o)
H.a([],s)
r=new G.d("Mozart's",n,q,r,0)
$.$get$b().h(0,r)
$.xn=r
r=H.a(["Einstein's","Oppenheimer"],s)
q=$.ae
n=H.a([$.a_,$.bS],o)
H.a([],s)
r=new G.d("Einstein's",n,q,r,0)
$.$get$b().h(0,r)
$.vO=r
r=H.a(["Feynman's"],s)
q=$.ae
n=H.a([$.a_,$.b3],o)
H.a([],s)
r=new G.d("Feynman's",n,q,r,0)
$.$get$b().h(0,r)
$.vY=r
r=H.a(["Ziptie"],s)
q=$.ae
n=H.a([$.aP,$.bc],o)
H.a([],s)
r=new G.d("Ziptie",n,q,r,0)
$.$get$b().h(0,r)
$.zt=r
r=H.a(["cellular","mobile","handheld","computerized"],s)
q=$.m
n=H.a([$.A,$.a_],o)
H.a([],s)
r=new G.d("Mobile",n,q,r,0)
$.$get$b().h(0,r)
$.kc=r
r=H.a(["Sassacre"],s)
q=$.ae
n=H.a([$.bX,$.b3],o)
H.a([],s)
r=new G.d("Sassacre",n,q,r,0)
$.$get$b().h(0,r)
$.yj=r
r=H.a(["Sledge"],s)
q=$.m
n=H.a([$.ah,$.bX],o)
H.a([],s)
r=new G.d("Sledge",n,q,r,0)
$.$get$b().h(0,r)
$.yL=r
r=H.a(["Legal"],s)
q=$.m
n=H.a([$.bc,$.K],o)
H.a([],s)
r=new G.d("Legal",n,q,r,0)
$.$get$b().h(0,r)
$.k8=r
r=H.a(["Clown"],s)
q=$.m
n=H.a([$.b3,$.b5],o)
H.a([],s)
r=new G.d("Clown",n,q,r,0)
$.$get$b().h(0,r)
$.vi=r
r=H.a(["passionate"],s)
q=$.H
n=H.a([$.aE,$.aJ],o)
H.a([],s)
r=new G.d("Passionate",n,q,r,0)
$.$get$b().h(0,r)
$.xE=r
r=H.a(["pinata"],s)
q=$.a5
n=H.a([$.K,$.aD],o)
H.a([],s)
r=new G.d("Pinata",n,q,r,0)
$.$get$b().h(0,r)
$.xI=r
r=H.a(["anvil"],s)
q=$.m
n=H.a([$.ah,$.bX,$.A],o)
H.a([],s)
r=new G.d("Anvil",n,q,r,0)
$.$get$b().h(0,r)
$.uF=r
r=H.a(["flashbang"],s)
q=$.m
n=H.a([$.b4,$.bl],o)
H.a([],s)
r=new G.d("Flashbang",n,q,r,0)
$.$get$b().h(0,r)
$.w2=r
r=H.a(["smokebomb"],s)
q=$.m
n=H.a([$.an,$.bl],o)
H.a([],s)
r=new G.d("Smokebomb",n,q,r,0)
$.$get$b().h(0,r)
$.yM=r
r=H.a(["ninja"],s)
q=$.m
n=H.a([$.an,$.aG],o)
H.a([],s)
r=new G.d("Ninja",n,q,r,0)
$.$get$b().h(0,r)
$.xt=r
r=H.a(["techno"],s)
q=$.m
n=H.a([$.ab,$.ad],o)
H.a([],s)
r=new G.d("Techno",n,q,r,0)
$.$get$b().h(0,r)
$.z5=r
r=H.a(["rock and roll"],s)
q=$.m
n=H.a([$.aH,$.ad],o)
H.a([],s)
r=new G.d("Rock And/Or Roll",n,q,r,0)
$.$get$b().h(0,r)
$.y7=r
r=H.a(["pistol shrimp","horrifying"],s)
q=$.a5
n=H.a([$.aF,$.bg,$.aW],o)
H.a([],s)
r=new G.d("Pistol Shrimp",n,q,r,0)
$.$get$b().h(0,r)
$.xJ=r
r=H.a(["juggalo"],s)
q=$.m
n=H.a([$.b3,$.ad,$.b5,$.b8],o)
H.a([],s)
r=new G.d("Juggalo",n,q,r,0)
$.$get$b().h(0,r)
$.qP=r
r=H.a(["shocksauce"],s)
q=$.H
n=H.a([$.ap,$.ab],o)
H.a([],s)
r=new G.d("Shock Sauce",n,q,r,0)
$.$get$b().h(0,r)
$.yx=r
r=H.a(["weaksauce"],s)
q=$.H
n=H.a([$.ah,$.ap,$.bH],o)
H.a([],s)
r=new G.d("Weak Sauce",n,q,r,0)
$.$get$b().h(0,r)
$.zj=r
r=H.a(["spicy","picante"],s)
q=$.H
n=H.a([$.aE,$.aD],o)
H.a([],s)
r=new G.d("Spicy",n,q,r,0)
$.$get$b().h(0,r)
$.yR=r
r=H.a(["ice cream","popsicle"],s)
q=$.p
n=H.a([$.bj,$.aD],o)
H.a([],s)
r=new G.d("Popsicle",n,q,r,0)
$.$get$b().h(0,r)
$.wE=r
r=H.a(["popsickle"],s)
q=$.p
n=H.a([$.bj,$.aD,$.aG],o)
H.a([],s)
r=new G.d("Popsickle",n,q,r,0)
$.$get$b().h(0,r)
$.xV=r
r=H.a(["icepick"],s)
q=$.p
n=H.a([$.bj,$.aY],o)
H.a([],s)
r=new G.d("Icepick",n,q,r,0)
$.$get$b().h(0,r)
$.wF=r
r=H.a(["schezwan"],s)
q=$.H
n=H.a([$.ap,$.aD],o)
H.a([],s)
r=new G.d("Schezwan",n,q,r,0)
$.$get$b().h(0,r)
$.ym=r
r=H.a(["vaporwave"],s)
q=$.m
n=H.a([$.an,$.ad,$.ap,$.ab],o)
H.a([],s)
r=new G.d("Vaporwave",n,q,r,0)
$.$get$b().h(0,r)
$.zh=r
r=H.a(["mallet"],s)
q=$.a5
n=H.a([$.a0,$.ah],o)
H.a([],s)
r=new G.d("Mallet",n,q,r,0)
$.$get$b().h(0,r)
$.x4=r
r=H.a(["fidget"],s)
q=$.m
n=H.a([$.aP,$.ap],o)
H.a([],s)
r=new G.d("Fidget",n,q,r,0)
$.$get$b().h(0,r)
$.w_=r
r=H.a(["gold foil"],s)
q=$.p
n=H.a([$.A,$.K,$.bd],o)
H.a([],s)
r=new G.d("Gold Foil",n,q,r,0)
$.$get$b().h(0,r)
$.wm=r
r=H.a(["caviar"],s)
q=$.p
n=H.a([$.aD,$.bd],o)
H.a([],s)
r=new G.d("Caviar",n,q,r,0)
$.$get$b().h(0,r)
$.v8=r
r=H.a(["RADioactive"],s)
q=$.H
n=H.a([$.bS,$.ap],o)
H.a([],s)
r=new G.d("RADioactive",n,q,r,0)
$.$get$b().h(0,r)
$.y3=r
r=H.a(["glam"],s)
q=$.H
n=H.a([$.aH,$.ad,$.aI],o)
H.a([],s)
r=new G.d("Glam",n,q,r,0)
$.$get$b().h(0,r)
$.wk=r
r=H.a(["hair metal"],s)
q=$.H
n=H.a([$.A,$.ad,$.aI],o)
H.a([],s)
r=new G.d("Hair Metal",n,q,r,0)
$.$get$b().h(0,r)
$.ws=r
r=H.a(["elven","fae","sylvan"],s)
q=$.H
n=H.a([$.a8,$.aI],o)
H.a([],s)
r=new G.d("Elven",n,q,r,0)
$.$get$b().h(0,r)
$.vQ=r
r=H.a(["shiny"],s)
q=$.H
n=H.a([$.A,$.aI],o)
H.a([],s)
r=new G.d("Shiny",n,q,r,0)
$.$get$b().h(0,r)
$.yw=r
r=H.a(["bespoke","well-tailored","glamorous","haute couture"],s)
q=$.H
n=H.a([$.bd,$.aI,$.am],o)
H.a([],s)
r=new G.d("Bespoke",n,q,r,0)
$.$get$b().h(0,r)
$.em=r
r=H.a(["operatic"],s)
q=$.H
n=H.a([$.bd,$.ad,$.am],o)
H.a([],s)
r=new G.d("Operatic",n,q,r,0)
$.$get$b().h(0,r)
$.xy=r
r=H.a(["ice","diamond"],s)
q=$.p
n=H.a([$.bd,$.bj],o)
H.a([],s)
r=new G.d("Diamond",n,q,r,0)
$.$get$b().h(0,r)
$.qM=r
r=H.a(["icy hot","cold fire","wet","damp","moist","watery"],s)
q=$.H
n=H.a([$.aE,$.bj],o)
H.a([],s)
r=new G.d("Icy Hot",n,q,r,0)
$.$get$b().h(0,r)
$.wG=r
r=H.a(["ice cold","cold as fuck"],s)
q=$.H
n=H.a([$.ap,$.bj],o)
H.a([],s)
r=new G.d("Cold As Fuck",n,q,r,0)
$.$get$b().h(0,r)
$.wD=r
r=H.a(["winter's","season's"],s)
q=$.ae
n=H.a([$.bu,$.bj],o)
H.a([],s)
r=new G.d("Winter's",n,q,r,0)
$.$get$b().h(0,r)
$.zm=r
r=H.a(["santa's","christmas","xmas"],s)
q=$.ae
n=H.a([$.a8,$.bj],o)
H.a([],s)
r=new G.d("Christmas",n,q,r,0)
$.$get$b().h(0,r)
$.ve=r
r=H.a(["Santa Saws"],s)
q=$.ae
n=H.a([$.a8,$.bj,$.aG],o)
H.a([],s)
r=new G.d("Santa Saws",n,q,r,0)
$.$get$b().h(0,r)
$.yh=r
r=H.a(["Santa Sleighs"],s)
q=$.ae
n=H.a([$.f0,$.aG],o)
H.a([],s)
r=new G.d("Santa Sleighs",n,q,r,0)
$.$get$b().h(0,r)
$.yi=r
r=H.a(["Santa Claws"],s)
q=$.ae
n=H.a([$.f0,$.k6],o)
H.a([],s)
r=new G.d("Santa Claws",n,q,r,0)
$.$get$b().h(0,r)
$.yg=r
r=H.a(["Sandy Claws"],s)
q=$.ae
n=H.a([$.f0,$.k6,$.aH],o)
H.a([],s)
r=new G.d("Sandy Claws",n,q,r,0)
$.$get$b().h(0,r)
$.yf=r
r=H.a(["Silent Night"],s)
q=$.ae
n=H.a([$.f0,$.an],o)
H.a([],s)
r=new G.d("Silent Night",n,q,r,0)
$.$get$b().h(0,r)
$.yE=r
r=H.a(["ghost's","Bloody Mary","Halloween"],s)
q=$.ae
n=H.a([$.b8,$.bL],o)
H.a([],s)
r=new G.d("Ghost's",n,q,r,0)
$.$get$b().h(0,r)
$.wt=r
r=H.a(["ghoul","mutant"],s)
q=$.p
n=H.a([$.bg,$.bS,$.bI],o)
H.a([],s)
r=new G.d("Mutant",n,q,r,0)
$.$get$b().h(0,r)
$.xo=r
r=H.a(["skate","skateboard"],s)
q=$.m
n=H.a([$.ap,$.A],o)
H.a([],s)
r=new G.d("Skateboard",n,q,r,0)
$.$get$b().h(0,r)
$.yH=r
r=H.a(["microwave"],s)
q=$.m
n=H.a([$.bS,$.ab,$.aD],o)
H.a([],s)
r=new G.d("Microwave",n,q,r,0)
$.$get$b().h(0,r)
$.xf=r
r=H.a(["orbital"],s)
q=$.m
n=H.a([$.bS,$.ab,$.aD,$.aW],o)
H.a([],s)
r=new G.d("Orbital",n,q,r,0)
$.$get$b().h(0,r)
$.xz=r
r=H.a([],s)
q=$.m
n=H.a([$.ah,$.a_],o)
H.a([],s)
r=new G.d("",n,q,r,0)
$.$get$b().h(0,r)
$.vJ=r
r=H.a(["uranium"],s)
q=$.p
n=H.a([$.bS,$.aH],o)
H.a([],s)
r=new G.d("Uranium",n,q,r,0)
$.$get$b().h(0,r)
$.zg=r
r=H.a(["mousepad","jar opener"],s)
q=$.m
n=H.a([$.K,$.bY],o)
H.a([],s)
r=new G.d("Mousepad",n,q,r,0)
$.$get$b().h(0,r)
$.xm=r
r=H.a(["flint"],s)
q=$.p
n=H.a([$.aG,$.aH],o)
H.a([],s)
r=new G.d("Sharpened Flint",n,q,r,0)
$.$get$b().h(0,r)
$.w5=r
r=H.a(["flint"],s)
q=$.p
n=H.a([$.aY,$.aH],o)
H.a([],s)
r=new G.d("Pointed Flint",n,q,r,0)
$.$get$b().h(0,r)
$.w6=r
r=H.a(["picnic"],s)
q=$.m
n=H.a([$.aP,$.aY],o)
H.a([],s)
r=new G.d("Picnic",n,q,r,0)
$.$get$b().h(0,r)
$.xH=r
r=H.a(["xtreme xplosion"],s)
q=$.H
n=H.a([$.ap,$.bl],o)
H.a([],s)
r=new G.d("Xtreme Xplosion",n,q,r,0)
$.$get$b().h(0,r)
$.zs=r
r=H.a(["lawn"],s)
q=$.m
n=H.a([$.aP,$.bb],o)
H.a([],s)
r=new G.d("Lawn",n,q,r,0)
$.$get$b().h(0,r)
$.wT=r
r=H.a(["upholstered"],s)
q=$.p
n=H.a([$.N,$.bb],o)
H.a([],s)
r=new G.d("Upholstered",n,q,r,0)
$.$get$b().h(0,r)
$.zf=r
r=H.a(["leather"],s)
q=$.p
n=H.a([$.bg,$.bb],o)
H.a([],s)
r=new G.d("Leather",n,q,r,0)
$.$get$b().h(0,r)
$.qT=r
r=H.a(["shag"],s)
q=$.p
n=H.a([$.c4,$.bb],o)
H.a([],s)
r=new G.d("Shag",n,q,r,0)
$.$get$b().h(0,r)
$.ys=r
r=H.a(["loyal"],s)
q=$.H
n=H.a([$.ah,$.aJ],o)
H.a([],s)
r=new G.d("Loyal",n,q,r,0)
$.$get$b().h(0,r)
$.x2=r
r=H.a(["porcelain"],s)
q=$.p
n=H.a([$.aI,$.bF],o)
H.a([],s)
r=new G.d("Porcelain",n,q,r,0)
$.$get$b().h(0,r)
$.kb=r
r=H.a(["pork hollow","piggy bank"],s)
q=$.a5
n=H.a([$.bd,$.bF],o)
H.a([],s)
r=new G.d("Pork Hollow",n,q,r,0)
$.$get$b().h(0,r)
$.xX=r
r=H.a(["n1nj4","katana"],s)
q=$.m
n=H.a([$.ap,$.aG],o)
H.a([],s)
r=new G.d("Katana",n,q,r,0)
$.$get$b().h(0,r)
$.wO=r
r=H.a(["chocolate"],s)
q=$.p
n=H.a([$.aJ,$.aD],o)
H.a([],s)
r=new G.d("Chocolate",n,q,r,0)
$.$get$b().h(0,r)
$.vd=r
r=H.a(["wrapped chocolate"],s)
q=$.p
n=H.a([$.aJ,$.aD,$.K,$.A],o)
H.a([],s)
r=new G.d("Wrapped Chocolate",n,q,r,0)
$.$get$b().h(0,r)
$.w9=r
r=H.a(["scratch-n-sniff"],s)
q=$.p
n=H.a([$.ap,$.K],o)
H.a([],s)
r=new G.d("Scratch-n-sniff",n,q,r,0)
$.$get$b().h(0,r)
$.yo=r
r=H.a(["mythril","orichalcum"],s)
q=$.p
n=H.a([$.a8,$.A],o)
H.a([],s)
r=new G.d("Mythril",n,q,r,0)
$.$get$b().h(0,r)
$.xp=r
r=H.a(["titanium","steel"],s)
q=$.p
n=H.a([$.ah,$.A],o)
H.a([],s)
r=new G.d("Titanium",n,q,r,0)
$.$get$b().h(0,r)
$.za=r
r=H.a(["lead"],s)
q=$.p
n=H.a([$.bX,$.A],o)
H.a([],s)
r=new G.d("Lead",n,q,r,0)
$.$get$b().h(0,r)
$.qS=r
r=H.a(["satire","parody","onion"],s)
q=$.m
n=H.a([$.b2,$.b3],o)
H.a([],s)
r=new G.d("Satire",n,q,r,0)
$.$get$b().h(0,r)
$.xx=r
r=H.a(["comedy gold"],s)
q=$.H
n=H.a([$.bd,$.b3],o)
H.a([],s)
r=new G.d("Comedy Gold",n,q,r,0)
$.$get$b().h(0,r)
$.vk=r
r=H.a(["dry","sensible chuckle"],s)
q=$.H
n=H.a([$.am,$.b3],o)
H.a([],s)
r=new G.d("Dry",n,q,r,0)
$.$get$b().h(0,r)
$.vG=r
r=H.a(["polite"],s)
q=$.H
n=H.a([$.bb,$.b2],o)
H.a([],s)
r=new G.d("Polite",n,q,r,0)
$.$get$b().h(0,r)
$.xT=r
r=H.a(["stradivarius"],s)
q=$.ae
n=H.a([$.am,$.bd,$.a0,$.ad],o)
H.a([],s)
r=new G.d("Stradivarius",n,q,r,0)
$.$get$b().h(0,r)
$.yY=r
r=H.a(["scientistic"],s)
q=$.H
n=H.a([$.a_,$.b2],o)
H.a([],s)
r=new G.d("Scientistic",n,q,r,0)
$.$get$b().h(0,r)
$.yn=r
r=H.a(["AI"],s)
q=$.m
n=H.a([$.ab,$.aF],o)
H.a([],s)
r=new G.d("AI",n,q,r,0)
$.$get$b().h(0,r)
$.oi=r
r=H.a(["robotic"],s)
q=$.F
n=H.a([$.A,$.ab,$.aF],o)
H.a([],s)
r=new G.d("Robotic",n,q,r,0)
$.$get$b().h(0,r)
$.qY=r
r=H.a(["shrapnel"],s)
q=$.m
n=H.a([$.a0,$.bl],o)
H.a([],s)
r=new G.d("Shrapnel",n,q,r,0)
$.$get$b().h(0,r)
$.yz=r
r=H.a(["vocaloid"],s)
q=$.m
n=H.a([$.aF,$.ab,$.ad],o)
H.a([],s)
r=new G.d("Vocaloid",n,q,r,0)
$.$get$b().h(0,r)
$.zi=r
r=H.a(["*Hyun-ae"],s)
q=$.ae
n=H.a([$.aF,$.ab,$.aJ],o)
H.a([],s)
r=new G.d("*Hyun-ae",n,q,r,0)
$.$get$b().h(0,r)
$.wC=r
r=H.a(["buckshot"],s)
q=$.m
n=H.a([$.a0,$.aW],o)
H.a([],s)
r=new G.d("Buckshot",n,q,r,0)
$.$get$b().h(0,r)
$.uX=r
r=H.a(["cannon"],s)
q=$.m
n=H.a([$.bX,$.aW],o)
H.a([],s)
r=new G.d("Cannon",n,q,r,0)
$.$get$b().h(0,r)
$.v5=r
r=H.a(["stationary"],s)
q=$.m
n=H.a([$.am,$.K],o)
H.a([],s)
r=new G.d("Stationary",n,q,r,0)
$.$get$b().h(0,r)
$.yW=r
r=H.a([],s)
q=$.m
n=H.a([$.aO,$.K],o)
H.a([],s)
r=new G.d("",n,q,r,0)
$.$get$b().h(0,r)
$.xB=r
r=H.a([],s)
q=$.m
n=H.a([$.A,$.aW],o)
H.a([],s)
r=new G.d("",n,q,r,0)
$.$get$b().h(0,r)
$.xd=r
r=H.a(["papercut"],s)
q=$.m
n=H.a([$.aG,$.K],o)
H.a([],s)
r=new G.d("Papercut",n,q,r,0)
$.$get$b().h(0,r)
$.xC=r
r=H.a(["squeaky"],s)
q=$.F
n=H.a([$.ah,$.bY],o)
H.a([],s)
r=new G.d("Squeaky",n,q,r,0)
$.$get$b().h(0,r)
$.yT=r
r=H.a(["kazoo"],s)
q=$.m
n=H.a([$.b2,$.ad],o)
H.a([],s)
r=new G.d("Kazoo",n,q,r,0)
$.$get$b().h(0,r)
$.wP=r
r=H.a(["bandaid"],s)
q=$.m
n=H.a([$.b_,$.K],o)
H.a([],s)
r=new G.d("Bandaid",n,q,r,0)
$.$get$b().h(0,r)
$.uJ=r
r=H.a(["gushers"],s)
q=$.m
n=H.a([$.b_,$.aD],o)
H.a([],s)
r=new G.d("Gushers",n,q,r,0)
$.$get$b().h(0,r)
$.wr=r
r=H.a(["medic"],s)
q=$.m
n=H.a([$.b_,$.aW],o)
H.a([],s)
r=new G.d("Medic",n,q,r,0)
$.$get$b().h(0,r)
$.xb=r
r=H.a(["sick nasty","ill"],s)
q=$.F
n=H.a([$.ap,$.bG],o)
H.a([],s)
r=new G.d("Sick Nasty",n,q,r,0)
$.$get$b().h(0,r)
$.yB=r
r=H.a(["gilded","gold leaf"],s)
q=$.p
n=H.a([$.A,$.a0],o)
H.a([],s)
r=new G.d("Gilded",n,q,r,0)
$.$get$b().h(0,r)
$.wj=r
r=H.a(["charging","power cord"],s)
q=$.m
n=H.a([$.aP,$.ab],o)
H.a([],s)
r=new G.d("Charging",n,q,r,0)
$.$get$b().h(0,r)
$.vc=r
r=H.a(["safety"],s)
q=$.m
n=H.a([$.bY,$.aG],o)
H.a([],s)
r=new G.d("Rubber Safety",n,q,r,0)
$.$get$b().h(0,r)
$.yd=r
r=H.a(["safety"],s)
q=$.m
n=H.a([$.aP,$.aG],o)
H.a([],s)
r=new G.d("Plastic Safety",n,q,r,0)
$.$get$b().h(0,r)
$.ye=r
r=H.a(["thunderous","thor's"],s)
q=$.H
n=H.a([$.b5,$.ab],o)
H.a([],s)
r=new G.d("Thunderous",n,q,r,0)
$.$get$b().h(0,r)
$.z8=r
r=H.a(["screeching","dial up"],s)
q=$.H
n=H.a([$.b5,$.ab,$.a_],o)
H.a([],s)
r=new G.d("Screeching",n,q,r,0)
$.$get$b().h(0,r)
$.yq=r
r=H.a(["mirrored","reflective"],s)
q=$.m
n=H.a([$.b7,$.A],o)
H.a([],s)
r=new G.d("Mirrored",n,q,r,0)
$.$get$b().h(0,r)
$.oy=r
r=H.a(["far seeing","sighted"],s)
q=$.m
n=H.a([$.b7,$.aH,$.a8],o)
H.a([],s)
r=new G.d("Far Seeing",n,q,r,0)
$.$get$b().h(0,r)
$.qD=r
r=H.a(["disabling","non lethal"],s)
q=$.m
n=H.a([$.bY,$.aW],o)
H.a([],s)
r=new G.d("Nonlethal",n,q,r,0)
$.$get$b().h(0,r)
$.vB=r
r=H.a(["fashionable"],s)
q=$.m
n=H.a([$.aI,$.am],o)
H.a([],s)
r=new G.d("Fashionable",n,q,r,0)
$.$get$b().h(0,r)
$.qF=r
r=H.a(["ironic"],s)
q=$.H
n=H.a([$.b3,$.ap],o)
H.a([],s)
r=new G.d("Ironic Type 2",n,q,r,0)
$.$get$b().h(0,r)
$.wK=r
r=H.a(["ironic"],s)
q=$.H
n=H.a([$.bH,$.b3],o)
H.a([],s)
r=new G.d("Ironic Type 3",n,q,r,0)
$.$get$b().h(0,r)
$.qN=r
r=H.a(["post-ironic"],s)
q=$.H
n=H.a([$.b2,$.ap,$.am],o)
H.a([],s)
r=new G.d("Post Ironic",n,q,r,0)
$.$get$b().h(0,r)
$.xZ=r
r=H.a(["monstrous"],s)
q=$.H
n=H.a([$.bI,$.b5,$.b8],o)
H.a([],s)
r=new G.d("Monstrous",n,q,r,0)
$.$get$b().h(0,r)
$.xk=r
r=H.a(["rooty tooty point and shooty"],s)
q=$.m
n=H.a([$.aW,$.ap,$.am],o)
H.a([],s)
r=new G.d("Rooty Tooty Point and Shooty",n,q,r,0)
$.$get$b().h(0,r)
$.y9=r
r=H.a(["golden"],s)
q=$.p
n=H.a([$.A,$.bd],o)
H.a([],s)
r=new G.d("Golden",n,q,r,0)
$.$get$b().h(0,r)
$.os=r
r=H.a(["platinum"],s)
q=$.p
n=H.a([$.b4,$.A],o)
H.a([],s)
r=new G.d("Platinum",n,q,r,0)
$.$get$b().h(0,r)
$.ka=r
r=H.a(["horseshoe"],s)
q=$.m
n=H.a([$.bM,$.A],o)
H.a([],s)
r=new G.d("Horseshoe",n,q,r,0)
$.$get$b().h(0,r)
$.qL=r
r=H.a(["felt"],s)
q=$.m
n=H.a([$.N,$.c4],o)
H.a([],s)
r=new G.d("Felt",n,q,r,0)
$.$get$b().h(0,r)
$.vW=r
r=H.a(["marble"],s)
q=$.p
n=H.a([$.aH,$.am],o)
H.a([],s)
r=new G.d("Marble",n,q,r,0)
$.$get$b().h(0,r)
$.qU=r
r=H.a(["marble"],s)
q=$.p
n=H.a([$.aH,$.bX],o)
H.a([],s)
r=new G.d("Marble",n,q,r,0)
$.$get$b().h(0,r)
$.wo=r
r=H.a(["glitched"],s)
q=$.F
n=H.a([$.bk,$.ab],o)
H.a([],s)
r=new G.d("Glitched",n,q,r,0)
$.$get$b().h(0,r)
$.qJ=r
r=H.a(["debugging"],s)
q=$.m
n=H.a([$.b_,$.ab],o)
H.a([],s)
r=new G.d("Debugging",n,q,r,0)
$.$get$b().h(0,r)
$.vw=r
r=H.a(["Iron Maiden","Metalic"],s)
q=$.m
n=H.a([$.A,$.b5,$.ad],o)
H.a([],s)
r=new G.d("Metalic",n,q,r,0)
$.$get$b().h(0,r)
$.xe=r
r=H.a(["Simulacrum"],s)
q=$.H
n=H.a([$.aF,$.b2],o)
H.a([],s)
r=new G.d("Simulacrum",n,q,r,0)
$.$get$b().h(0,r)
$.yG=r
r=H.a(["Imitation"],s)
q=$.m
n=H.a([$.aD,$.b2],o)
H.a([],s)
r=new G.d("Imitation",n,q,r,0)
$.$get$b().h(0,r)
$.wH=r
r=H.a(["Placebo"],s)
q=$.m
n=H.a([$.b_,$.b2],o)
H.a([],s)
r=new G.d("Placebo",n,q,r,0)
$.$get$b().h(0,r)
$.xL=r
r=H.a(["counterfeit"],s)
q=$.m
n=H.a([$.bd,$.b2],o)
H.a([],s)
r=new G.d("Counterfeit",n,q,r,0)
$.$get$b().h(0,r)
$.vp=r
r=H.a(["Surreal"],s)
q=$.H
n=H.a([$.ap,$.aQ,$.b3],o)
H.a([],s)
r=new G.d("Surreal1",n,q,r,0)
$.$get$b().h(0,r)
$.z_=r
r=H.a(["Brainy"],s)
q=$.H
n=H.a([$.a_,$.bg],o)
H.a([],s)
r=new G.d("Brainy",n,q,r,0)
$.$get$b().h(0,r)
$.uU=r
r=H.a(["Incendiary"],s)
q=$.m
n=H.a([$.aE,$.bl],o)
H.a([],s)
r=new G.d("Incendiary",n,q,r,0)
$.$get$b().h(0,r)
$.wI=r
r=H.a(["C-4"],s)
q=$.p
n=H.a([$.bl,$.aP],o)
H.a([],s)
r=new G.d("C-4",n,q,r,0)
$.$get$b().h(0,r)
$.v0=r
r=H.a(["fae"],s)
q=$.m
n=H.a([$.a8,$.b4,$.bk],o)
H.a([],s)
r=new G.d("Fae",n,q,r,0)
$.$get$b().h(0,r)
$.vT=r
r=H.a(["Plutonium"],s)
q=$.p
n=H.a([$.A,$.bS],o)
H.a([],s)
r=new G.d("Plutonium",n,q,r,0)
$.$get$b().h(0,r)
$.xP=r
r=H.a(["Lithium"],s)
q=$.p
n=H.a([$.A,$.ab],o)
H.a([],s)
r=new G.d("Lithium",n,q,r,0)
$.$get$b().h(0,r)
$.wY=r
r=H.a(["Molten"],s)
q=$.p
n=H.a([$.A,$.aE],o)
H.a([],s)
r=new G.d("Molten",n,q,r,0)
$.$get$b().h(0,r)
$.xj=r
r=H.a(["Magma","Lava","Sulphuric"],s)
q=$.p
n=H.a([$.aH,$.aE],o)
H.a([],s)
r=new G.d("Magma",n,q,r,0)
$.$get$b().h(0,r)
$.x3=r
r=H.a(["Rusty"],s)
q=$.F
n=H.a([$.A,$.bH],o)
H.a([],s)
r=new G.d("Rusty",n,q,r,0)
$.$get$b().h(0,r)
$.yc=r
r=H.a(["Fonzie"],s)
q=$.m
n=H.a([$.aG,$.ap,$.am],o)
H.a([],s)
r=new G.d("Fonzie",n,q,r,0)
$.$get$b().h(0,r)
$.wa=r
r=H.a(["Romcom"],s)
q=$.m
n=H.a([$.aJ,$.b3],o)
H.a([],s)
r=new G.d("Romcom",n,q,r,0)
$.$get$b().h(0,r)
$.y8=r
r=H.a(["Alluring"],s)
q=$.m
n=H.a([$.aI,$.b4],o)
H.a([],s)
r=new G.d("Alluring",n,q,r,0)
$.$get$b().h(0,r)
$.uC=r
r=H.a(["Masquerade"],s)
q=$.m
n=H.a([$.aI,$.an],o)
H.a([],s)
r=new G.d("Masquerade",n,q,r,0)
$.$get$b().h(0,r)
$.x7=r
r=H.a(["Stoneskin","Petrified"],s)
q=$.m
n=H.a([$.aH,$.bg],o)
H.a([],s)
r=new G.d("Stoneskin",n,q,r,0)
$.$get$b().h(0,r)
$.yX=r
r=H.a(["Psionic"],s)
q=$.m
n=H.a([$.a8,$.a_],o)
H.a([],s)
r=new G.d("Psionic",n,q,r,0)
$.$get$b().h(0,r)
$.y1=r
r=H.a(["Dwarven"],s)
q=$.m
n=H.a([$.a8,$.aH],o)
H.a([],s)
r=new G.d("Dwarven",n,q,r,0)
$.$get$b().h(0,r)
$.vK=r
r=H.a(["Elemental","Animated"],s)
q=$.p
n=H.a([$.a8,$.aF],o)
H.a([],s)
r=new G.d("Elemental",n,q,r,0)
$.$get$b().h(0,r)
$.vP=r
r=H.a(["Gourmet"],s)
q=$.H
n=H.a([$.aD,$.am],o)
H.a([],s)
r=new G.d("Gourmet",n,q,r,0)
$.$get$b().h(0,r)
$.wn=r
r=H.a(["Stained Glass"],s)
q=$.p
n=H.a([$.b7,$.aI,$.bd],o)
H.a([],s)
r=new G.d("Stained Glass",n,q,r,0)
$.$get$b().h(0,r)
$.yU=r
r=H.a(["Gauze"],s)
q=$.m
n=H.a([$.b_,$.N],o)
H.a([],s)
r=new G.d("Gauze",n,q,r,0)
$.$get$b().h(0,r)
$.wg=r
r=H.a(["Locked"],s)
q=$.F
n=H.a([$.bc,$.bv],o)
H.a([],s)
r=new G.d("Locked",n,q,r,0)
$.$get$b().h(0,r)
$.x_=r
r=H.a(["Etched"],s)
q=$.m
n=H.a([$.aH,$.K],o)
H.a([],s)
r=new G.d("Etched",n,q,r,0)
$.$get$b().h(0,r)
$.vS=r
r=H.a(["Papyrus"],s)
q=$.p
n=H.a([$.K,$.b1],o)
H.a([],s)
r=new G.d("Papyrus",n,q,r,0)
$.$get$b().h(0,r)
$.xD=r
r=H.a(["film"],s)
q=$.m
n=H.a([$.K,$.aP],o)
H.a([],s)
r=new G.d("Film",n,q,r,0)
$.$get$b().h(0,r)
$.w0=r
r=H.a(["Saucey"],s)
q=$.p
n=H.a([$.bk,$.bv,$.bI],o)
H.a([],s)
r=new G.d("Saucey",n,q,r,0)
$.$get$b().h(0,r)
$.yk=r
r=H.a(["Lottery"],s)
q=$.m
n=H.a([$.K,$.bM],o)
H.a([],s)
r=new G.d("Lottery",n,q,r,0)
$.$get$b().h(0,r)
$.x1=r
r=H.a(["Blindfolded"],s)
q=$.m
n=H.a([$.an,$.N],o)
H.a([],s)
r=new G.d("Blindfolded",n,q,r,0)
$.$get$b().h(0,r)
$.qz=r
r=H.a(["Possessed"],s)
q=$.F
n=H.a([$.bL,$.bg],o)
H.a([],s)
r=new G.d("Possessed",n,q,r,0)
$.$get$b().h(0,r)
$.xY=r
r=H.a(["Infernal"],s)
q=$.H
n=H.a([$.bL,$.aE],o)
H.a([],s)
r=new G.d("Infernal",n,q,r,0)
$.$get$b().h(0,r)
$.wJ=r
r=H.a(["Geppetto's","Pinocchio"],s)
q=$.m
n=H.a([$.a0,$.bh,$.oD,$.aF],o)
H.a([],s)
r=new G.d("Geppetto",n,q,r,0)
$.$get$b().h(0,r)
$.wh=r
r=H.a(["Abominable"],s)
q=$.H
n=H.a([$.bg,$.bk],o)
H.a([],s)
r=new G.d("Abominable",n,q,r,0)
$.$get$b().h(0,r)
$.uA=r
r=H.a(["Ashen"],s)
q=$.m
n=H.a([$.aJ,$.aN],o)
H.a([],s)
r=new G.d("Ashen",n,q,r,0)
$.$get$b().h(0,r)
$.uH=r
r=H.a(["Pale"],s)
q=$.m
n=H.a([$.aJ,$.bu],o)
H.a([],s)
r=new G.d("Pale",n,q,r,0)
$.$get$b().h(0,r)
$.xA=r
r=H.a(["Pitch"],s)
q=$.m
n=H.a([$.aJ,$.bv],o)
H.a([],s)
r=new G.d("Pitch",n,q,r,0)
$.$get$b().h(0,r)
$.xK=r
r=H.a(["Lit"],s)
q=$.H
n=H.a([$.ap,$.aE],o)
H.a([],s)
r=new G.d("Lit",n,q,r,0)
$.$get$b().h(0,r)
$.wX=r
r=H.a(["Hypnotizing"],s)
q=$.m
n=H.a([$.a8,$.bu],o)
H.a([],s)
r=new G.d("Hypnotizing",n,q,r,0)
$.$get$b().h(0,r)
$.wA=r
r=H.a(["Tranquilizing"],s)
q=$.m
n=H.a([$.bu,$.bc],o)
H.a([],s)
r=new G.d("Tranquilizing",n,q,r,0)
$.$get$b().h(0,r)
$.zd=r
r=H.a([],s)
q=$.m
n=H.a([$.bu,$.bv],o)
H.a([],s)
r=new G.d("",n,q,r,0)
$.$get$b().h(0,r)
$.v3=r
r=H.a(["Ghost Rider's"],s)
q=$.ae
n=H.a([$.f_,$.aE,$.bL],o)
H.a([],s)
r=new G.d("Ghost Rider",n,q,r,0)
$.$get$b().h(0,r)
$.wi=r
r=H.a(["Logical"],s)
q=$.H
n=H.a([$.a_,$.bj],o)
H.a([],s)
r=new G.d("Logical",n,q,r,0)
$.$get$b().h(0,r)
$.x0=r
r=H.a(["Duelist's"],s)
q=$.ae
n=H.a([$.aW,$.am],o)
H.a([],s)
r=new G.d("Duelist's",n,q,r,0)
$.$get$b().h(0,r)
$.vH=r
r=H.a(["Silenced"],s)
q=$.F
n=H.a([$.aW,$.an],o)
H.a([],s)
r=new G.d("Silenced",n,q,r,0)
$.$get$b().h(0,r)
$.yD=r
r=H.a(["Deudly"],s)
q=$.F
n=H.a([$.aW,$.bH],o)
H.a([],s)
r=new G.d("Deudly",n,q,r,0)
$.$get$b().h(0,r)
$.vv=r
r=H.a(["Screaming"],s)
q=$.F
n=H.a([$.b5,$.b8],o)
H.a([],s)
r=new G.d("Screaming",n,q,r,0)
$.$get$b().h(0,r)
$.yp=r
r=H.a(["Cacophonous"],s)
q=$.H
n=H.a([$.bI,$.ad],o)
H.a([],s)
r=new G.d("Cacophonous",n,q,r,0)
$.$get$b().h(0,r)
$.v1=r
r=H.a(["Sublime"],s)
q=$.H
n=H.a([$.bI,$.aI],o)
H.a([],s)
r=new G.d("Sublime",n,q,r,0)
$.$get$b().h(0,r)
$.yZ=r
r=H.a(["Masterwork"],s)
q=$.p
n=H.a([$.bh,$.bd],o)
H.a([],s)
r=new G.d("Masterwork",n,q,r,0)
$.$get$b().h(0,r)
$.x9=r
r=H.a(["BroodFester"],s)
q=$.m
n=H.a([$.aF,$.b8,$.bk,$.a8],o)
H.a([],s)
r=new G.d("BroodFester",n,q,r,0)
$.$get$b().h(0,r)
$.uW=r
r=H.a(["[REDACTED]"],s)
q=$.m
n=H.a([$.bk,$.an],o)
H.a([],s)
r=new G.d("[REDACTED]",n,q,r,0)
$.$get$b().h(0,r)
$.y6=r
r=H.a(["Pop Rocks"],s)
q=$.m
n=H.a([$.aD,$.bl],o)
H.a([],s)
r=new G.d("Pop Rocks",n,q,r,0)
$.$get$b().h(0,r)
$.xU=r
r=H.a(["Disguised"],s)
q=$.F
n=H.a([$.an,$.b2],o)
H.a([],s)
r=new G.d("Disguised",n,q,r,0)
$.$get$b().h(0,r)
$.vC=r
r=H.a(["Haunted"],s)
q=$.F
n=H.a([$.aQ,$.bL],o)
H.a([],s)
r=new G.d("Haunted",n,q,r,0)
$.$get$b().h(0,r)
$.wu=r
r=H.a(["Cognitohazardous"],s)
q=$.F
n=H.a([$.bk,$.a_],o)
H.a([],s)
r=new G.d("Cognitohazardous",n,q,r,0)
$.$get$b().h(0,r)
$.vj=r
r=H.a(["Staticy"],s)
q=$.F
n=H.a([$.aQ,$.ab],o)
H.a([],s)
r=new G.d("Staticy",n,q,r,0)
$.$get$b().h(0,r)
$.yV=r
r=H.a(["Jadite"],s)
q=$.m
n=H.a([$.b7,$.bS],o)
H.a([],s)
r=new G.d("Jadite",n,q,r,0)
$.$get$b().h(0,r)
$.wM=r
r=H.a(["Tickling"],s)
q=$.m
n=H.a([$.b3,$.aQ],o)
H.a([],s)
r=new G.d("Tickling",n,q,r,0)
$.$get$b().h(0,r)
$.z9=r
r=H.a(["Composite"],s)
q=$.m
n=H.a([$.A,$.bF],o)
H.a([],s)
r=new G.d("Composite",n,q,r,0)
$.$get$b().h(0,r)
$.vl=r
r=H.a(["High-Powered"],s)
q=$.F
n=H.a([$.bl,$.aW],o)
H.a([],s)
r=new G.d("High-Powered",n,q,r,0)
$.$get$b().h(0,r)
$.wv=r
r=H.a(["Concussive"],s)
q=$.m
n=H.a([$.bl,$.ah],o)
H.a([],s)
r=new G.d("Concussive",n,q,r,0)
$.$get$b().h(0,r)
$.vm=r
r=H.a(["Down"],s)
q=$.p
n=H.a([$.bb,$.bw],o)
H.a([],s)
r=new G.d("Down",n,q,r,0)
$.$get$b().h(0,r)
$.vE=r
r=H.a(["Prickly"],s)
q=$.p
n=H.a([$.aQ,$.aY],o)
H.a([],s)
r=new G.d("Prickly",n,q,r,0)
$.$get$b().h(0,r)
$.y0=r
r=H.a(["Deep-Web","Dark-Net"],s)
q=$.m
n=H.a([$.aQ,$.an,$.ab],o)
H.a([],s)
r=new G.d("Deep-Web",n,q,r,0)
$.$get$b().h(0,r)
$.vy=r
r=H.a(["Jagged","Sawtooth"],s)
q=$.p
n=H.a([$.aY,$.aG],o)
H.a([],s)
r=new G.d("Jagged",n,q,r,0)
$.$get$b().h(0,r)
$.wN=r
r=H.a(["Nanofiber"],s)
q=$.p
n=H.a([$.N,$.a_],o)
H.a([],s)
r=new G.d("Nanofiber",n,q,r,0)
$.$get$b().h(0,r)
$.xq=r
r=H.a(["Clanging"],s)
q=$.m
n=H.a([$.A,$.b5],o)
H.a([],s)
r=new G.d("Clanging",n,q,r,0)
$.$get$b().h(0,r)
$.vf=r
r=H.a(["Silver"],s)
q=$.p
n=H.a([$.A,$.am],o)
H.a([],s)
r=new G.d("Silver",n,q,r,0)
$.$get$b().h(0,r)
$.yF=r
r=H.a(["Withered"],s)
q=$.F
n=H.a([$.aN,$.b1],o)
H.a([],s)
r=new G.d("Withered",n,q,r,0)
$.$get$b().h(0,r)
$.zo=r
r=H.a(["Shattered"],s)
q=$.F
n=H.a([$.b7,$.bH],o)
H.a([],s)
r=new G.d("Shattered",n,q,r,0)
$.$get$b().h(0,r)
$.yv=r
r=H.a(["Miner's"],s)
q=$.ae
n=H.a([$.aH,$.A],o)
H.a([],s)
r=new G.d("Miner's",n,q,r,0)
$.$get$b().h(0,r)
$.xh=r
r=H.a(["Singing"],s)
q=$.m
n=H.a([$.ad,$.aF],o)
H.a([],s)
r=new G.d("Singing",n,q,r,0)
$.$get$b().h(0,r)
$.yC=r
r=H.a(["Mitochondrial"],s)
q=$.m
n=H.a([$.bg,$.ab],o)
H.a([],s)
r=new G.d("Mitochondrial",n,q,r,0)
$.$get$b().h(0,r)
$.xi=r
r=H.a(["Blackout","EMP"],s)
q=$.m
n=H.a([$.an,$.ab],o)
H.a([],s)
r=new G.d("Blackout",n,q,r,0)
$.$get$b().h(0,r)
$.uP=r
r=H.a(["Asbestos"],s)
q=$.p
n=H.a([$.aH,$.bG],o)
H.a([],s)
r=new G.d("Asbestos",n,q,r,0)
$.$get$b().h(0,r)
$.uB=r
r=H.a(["Mercurial"],s)
q=$.p
n=H.a([$.bG,$.A],o)
H.a([],s)
r=new G.d("Mercurial",n,q,r,0)
$.$get$b().h(0,r)
$.xa=r
r=H.a(["Bulletproof"],s)
q=$.p
n=H.a([$.N,$.ah],o)
H.a([],s)
r=new G.d("Bulletproof",n,q,r,0)
$.$get$b().h(0,r)
$.uZ=r
r=H.a(["Cotton"],s)
q=$.p
n=H.a([$.b1,$.N],o)
H.a([],s)
r=new G.d("Cotton",n,q,r,0)
$.$get$b().h(0,r)
$.vn=r
r=H.a(["Blinding","Flashbang","Solar Flare"],s)
q=$.m
n=H.a([$.bv,$.b4],o)
H.a([],s)
r=new G.d("Blinding",n,q,r,0)
$.$get$b().h(0,r)
$.uQ=r
r=H.a(["Brilliant"],s)
q=$.H
n=H.a([$.b4,$.a_],o)
H.a([],s)
r=new G.d("Brilliant",n,q,r,0)
$.$get$b().h(0,r)
$.uV=r
r=H.a(["Offensive"],s)
q=$.H
n=H.a([$.bv,$.a_],o)
H.a([],s)
r=new G.d("Offensive",n,q,r,0)
$.$get$b().h(0,r)
$.xw=r
r=H.a(["Poached"],s)
q=$.F
n=H.a([$.bg,$.bd],o)
H.a([],s)
r=new G.d("Poached",n,q,r,0)
$.$get$b().h(0,r)
$.xQ=r
r=H.a(["Tapestry"],s)
q=$.p
n=H.a([$.N,$.aI],o)
H.a([],s)
r=new G.d("Tapestry",n,q,r,0)
$.$get$b().h(0,r)
$.z1=r
r=H.a(["Itchy"],s)
q=$.H
n=H.a([$.N,$.aQ],o)
H.a([],s)
r=new G.d("Itchy",n,q,r,0)
$.$get$b().h(0,r)
$.wL=r
r=H.a(["Wishbone"],s)
q=$.p
n=H.a([$.bM,$.b9],o)
H.a([],s)
r=new G.d("Wishbone",n,q,r,0)
$.$get$b().h(0,r)
$.zn=r
r=H.a(["Rattling"],s)
q=$.F
n=H.a([$.b5,$.b9],o)
H.a([],s)
r=new G.d("Rattling",n,q,r,0)
$.$get$b().h(0,r)
$.y4=r
r=H.a(["Cranial"],s)
q=$.p
n=H.a([$.a_,$.b9],o)
H.a([],s)
r=new G.d("Cranial",n,q,r,0)
$.$get$b().h(0,r)
$.vr=r
r=H.a(["Humerus"],s)
q=$.p
n=H.a([$.b3,$.b9],o)
H.a([],s)
r=new G.d("Humerus",n,q,r,0)
$.$get$b().h(0,r)
$.wy=r
r=H.a(["Massage"],s)
q=$.m
n=H.a([$.b_,$.bb],o)
H.a([],s)
r=new G.d("Massage",n,q,r,0)
$.$get$b().h(0,r)
$.x8=r
r=H.a(["Pestersome","Irksome"],s)
q=$.H
n=H.a([$.b5,$.bv],o)
H.a([],s)
r=new G.d("Pestersome",n,q,r,0)
$.$get$b().h(0,r)
$.xF=r
r=H.a(["Shockwave"],s)
q=$.m
n=H.a([$.b5,$.bl],o)
H.a([],s)
r=new G.d("Shockwave",n,q,r,0)
$.$get$b().h(0,r)
$.yy=r
r=H.a(["Antivenom"],s)
q=$.m
n=H.a([$.bG,$.b_],o)
H.a([],s)
r=new G.d("Antivenom",n,q,r,0)
$.$get$b().h(0,r)
$.uE=r
r=H.a(["Will O Wisp","Demonic"],s)
q=$.p
n=H.a([$.aE,$.a8],o)
H.a([],s)
r=new G.d("Will O Wisp",n,q,r,0)
$.$get$b().h(0,r)
$.zk=r
r=H.a(["Fiberglass"],s)
q=$.p
n=H.a([$.N,$.b7],o)
H.a([],s)
r=new G.d("Fiberglass",n,q,r,0)
$.$get$b().h(0,r)
$.vZ=r
r=H.a(["Skull"],s)
q=$.p
n=H.a([$.b9,$.b8],o)
H.a([],s)
r=new G.d("Skull",n,q,r,0)
$.$get$b().h(0,r)
$.yJ=r
r=H.a(["Enchanted"],s)
q=$.F
n=H.a([$.a8,$.bM],o)
H.a([],s)
r=new G.d("Enchanted",n,q,r,0)
$.$get$b().h(0,r)
$.vR=r
r=H.a(["Berserker's"],s)
q=$.ae
n=H.a([$.a8,$.bv],o)
H.a([],s)
r=new G.d("Berserker's",n,q,r,0)
$.$get$b().h(0,r)
$.uO=r
r=H.a(["Clerical"],s)
q=$.ae
n=H.a([$.a8,$.b_],o)
H.a([],s)
r=new G.d("Clerical",n,q,r,0)
$.$get$b().h(0,r)
$.vg=r
r=H.a(["Cauterizing"],s)
q=$.m
n=H.a([$.b_,$.aE],o)
H.a([],s)
r=new G.d("Cauterizing",n,q,r,0)
$.$get$b().h(0,r)
$.v7=r
r=H.a(["X-Ray"],s)
q=$.m
n=H.a([$.bS,$.b4],o)
H.a([],s)
r=new G.d("X-Ray",n,q,r,0)
$.$get$b().h(0,r)
$.zr=r
r=H.a(["Clever"],s)
q=$.H
n=H.a([$.a_,$.bM],o)
H.a([],s)
r=new G.d("Clever",n,q,r,0)
$.$get$b().h(0,r)
$.vh=r
r=H.a(["Fireplace"],s)
q=$.m
n=H.a([$.bb,$.aE],o)
H.a([],s)
r=new G.d("Fireplace",n,q,r,0)
$.$get$b().h(0,r)
$.w1=r
r=H.a(["Crackling"],s)
q=$.F
n=H.a([$.b5,$.aE],o)
H.a([],s)
r=new G.d("Crackling",n,q,r,0)
$.$get$b().h(0,r)
$.vq=r
r=H.a(["Thumping"],s)
q=$.F
n=H.a([$.b5,$.bX],o)
H.a([],s)
r=new G.d("Thumping",n,q,r,0)
$.$get$b().h(0,r)
$.z7=r
r=H.a(["Shrieking","Banshee"],s)
q=$.F
n=H.a([$.bL,$.b5],o)
H.a([],s)
r=new G.d("Banshee",n,q,r,0)
$.$get$b().h(0,r)
$.yA=r
r=H.a(["Surreal"],s)
q=$.H
n=H.a([$.b3,$.bk],o)
H.a([],s)
r=new G.d("Surreal2",n,q,r,0)
$.$get$b().h(0,r)
$.z0=r
r=H.a(["Aloe","Willowbark"],s)
q=$.m
n=H.a([$.b_,$.b1],o)
H.a([],s)
r=new G.d("Aloe",n,q,r,0)
$.$get$b().h(0,r)
$.uD=r
r=H.a(["Rose"],s)
q=$.m
n=H.a([$.aJ,$.b1],o)
H.a([],s)
r=new G.d("Rose",n,q,r,0)
$.$get$b().h(0,r)
$.ya=r
r=H.a(["Knock Knock"],s)
q=$.m
n=H.a([$.b3,$.ah],o)
H.a([],s)
r=new G.d("Knock Knock",n,q,r,0)
$.$get$b().h(0,r)
$.wR=r
r=H.a(["Lifesteal"],s)
q=$.m
n=H.a([$.a8,$.bG],o)
H.a([],s)
r=new G.d("Lifesteal",n,q,r,0)
$.$get$b().h(0,r)
$.wU=r
r=H.a(["Tragic"],s)
q=$.m
n=H.a([$.aI,$.aN],o)
H.a([],s)
r=new G.d("Tragic",n,q,r,0)
$.$get$b().h(0,r)
$.zc=r
r=H.a(["Slapstick"],s)
q=$.m
n=H.a([$.aG,$.b3],o)
H.a([],s)
r=new G.d("Slapstick",n,q,r,0)
$.$get$b().h(0,r)
$.yK=r
r=H.a(["Gross Out"],s)
q=$.m
n=H.a([$.bI,$.b3],o)
H.a([],s)
r=new G.d("Gross Out",n,q,r,0)
$.$get$b().h(0,r)
$.wp=r
r=H.a(["Flowery"],s)
q=$.p
n=H.a([$.aI,$.b1],o)
H.a([],s)
r=new G.d("Flowery",n,q,r,0)
$.$get$b().h(0,r)
$.w7=r
r=H.a(["Poison Ivy"],s)
q=$.p
n=H.a([$.bG,$.b1],o)
H.a([],s)
r=new G.d("Poison Ivy",n,q,r,0)
$.$get$b().h(0,r)
$.xS=r
r=H.a(["Winged","Pegasus","Angelic"],s)
q=$.F
n=H.a([$.a8,$.bw],o)
H.a([],s)
r=new G.d("Winged",n,q,r,0)
$.$get$b().h(0,r)
$.zl=r
r=H.a(["Forbidden Fruit"],s)
q=$.m
n=H.a([$.b1,$.aD,$.aN],o)
H.a([],s)
r=new G.d("Forbidden Fruit",n,q,r,0)
$.$get$b().h(0,r)
$.wb=r
r=H.a(["Lawful"],s)
q=$.H
n=H.a([$.bc,$.aF],o)
H.a([],s)
r=new G.d("Lawful",n,q,r,0)
$.$get$b().h(0,r)
$.wS=r
r=H.a(["Chaotic"],s)
q=$.H
n=H.a([$.bv,$.aF],o)
H.a([],s)
r=new G.d("Chaotic",n,q,r,0)
$.$get$b().h(0,r)
$.vb=r
r=H.a(["Hypothermic"],s)
q=$.F
n=H.a([$.aN,$.bj],o)
H.a([],s)
r=new G.d("Hypothermic",n,q,r,0)
$.$get$b().h(0,r)
$.wB=r
r=H.a(["Hyperthermic"],s)
q=$.F
n=H.a([$.aN,$.aE],o)
H.a([],s)
r=new G.d("Hyperthermic",n,q,r,0)
$.$get$b().h(0,r)
$.wz=r
r=H.a(["Shackled"],s)
q=$.F
n=H.a([$.bc,$.bX],o)
H.a([],s)
r=new G.d("Shackled",n,q,r,0)
$.$get$b().h(0,r)
$.yr=r
r=H.a(["Poetic"],s)
q=$.H
n=H.a([$.a_,$.aJ],o)
H.a([],s)
r=new G.d("Poetic",n,q,r,0)
$.$get$b().h(0,r)
$.xR=r
r=H.a(["Holographic"],s)
q=$.p
n=H.a([$.b4,$.a_,$.b7,$.ab],o)
H.a([],s)
r=new G.d("Holographic",n,q,r,0)
$.$get$b().h(0,r)
$.ww=r
r=H.a(["Casket","Coffin"],s)
q=$.p
n=H.a([$.a0,$.aN],o)
H.a([],s)
r=new G.d("Casket",n,q,r,0)
$.$get$b().h(0,r)
$.v6=r
r=H.a(["Spectral"],s)
q=$.p
n=H.a([$.bL,$.a8],o)
H.a([],s)
r=new G.d("Spectral",n,q,r,0)
$.$get$b().h(0,r)
$.yQ=r
r=H.a(["Phoenix"],s)
q=$.p
n=H.a([$.aE,$.bw],o)
H.a([],s)
r=new G.d("Phoenix",n,q,r,0)
$.$get$b().h(0,r)
$.xG=r
r=H.a(["Tattered"],s)
q=$.F
n=H.a([$.N,$.aN],o)
H.a([],s)
r=new G.d("Tattered",n,q,r,0)
$.$get$b().h(0,r)
$.z4=r
r=H.a(["Woodwind","Reed"],s)
q=$.m
n=H.a([$.ad,$.a0],o)
H.a([],s)
r=new G.d("Woodwind",n,q,r,0)
$.$get$b().h(0,r)
$.zq=r
r=H.a(["Bone Hurting"],s)
q=$.m
n=H.a([$.aQ,$.b9],o)
H.a([],s)
r=new G.d("Bone Hurting",n,q,r,0)
$.$get$b().h(0,r)
$.uS=r
r=H.a(["Bone Healing:"],s)
q=$.m
n=H.a([$.b_,$.b9],o)
H.a([],s)
r=new G.d("Bone Healing:",n,q,r,0)
$.$get$b().h(0,r)
$.uR=r
r=H.a(["Calcium"],s)
q=$.p
n=H.a([$.b9,$.b_,$.aD],o)
H.a([],s)
r=new G.d("Calcium",n,q,r,0)
$.$get$b().h(0,r)
$.v2=r
r=H.a(["Fleece"],s)
q=$.p
n=H.a([$.N,$.aE],o)
H.a([],s)
r=new G.d("Fleece",n,q,r,0)
$.$get$b().h(0,r)
$.w4=r
r=H.a(["Potted"],s)
q=$.p
n=H.a([$.bF,$.b1],o)
H.a([],s)
r=new G.d("Potted",n,q,r,0)
$.$get$b().h(0,r)
$.y_=r
r=H.a(["Canned","Tinned","Potassium"],s)
q=$.p
n=H.a([$.A,$.aD],o)
H.a([],s)
r=new G.d("Canned",n,q,r,0)
$.$get$b().h(0,r)
$.v4=r
r=H.a(["Diseased"],s)
q=$.F
n=H.a([$.aN,$.bg],o)
H.a([],s)
r=new G.d("Diseased",n,q,r,0)
$.$get$b().h(0,r)
$.vz=r
r=H.a(["Porcupine"],s)
q=$.p
n=H.a([$.aY,$.c4],o)
H.a([],s)
r=new G.d("Porcupine",n,q,r,0)
$.$get$b().h(0,r)
$.xW=r
r=H.a(["Fanged"],s)
q=$.F
n=H.a([$.b9,$.aY],o)
H.a([],s)
r=new G.d("Fanged",n,q,r,0)
$.$get$b().h(0,r)
$.vV=r
r=H.a(["Basalt"],s)
q=$.p
n=H.a([$.aH,$.an],o)
H.a([],s)
r=new G.d("Basalt",n,q,r,0)
$.$get$b().h(0,r)
$.uL=r
r=H.a(["Obsidian"],s)
q=$.p
n=H.a([$.b7,$.an],o)
H.a([],s)
r=new G.d("Obsidian",n,q,r,0)
$.$get$b().h(0,r)
$.xv=r
r=H.a(["Fenestrated"],s)
q=$.p
n=H.a([$.b7,$.a0],o)
H.a([],s)
r=new G.d("Fenestrated",n,q,r,0)
$.$get$b().h(0,r)
$.vX=r
r=H.a(["Plexiglass"],s)
q=$.p
n=H.a([$.b7,$.aP],o)
H.a([],s)
r=new G.d("Plexiglass",n,q,r,0)
$.$get$b().h(0,r)
$.xO=r
r=H.a(["Ceramic Wrap"],s)
q=$.m
n=H.a([$.bF,$.K],o)
H.a([],s)
r=new G.d("Ceramic Wrap",n,q,r,0)
$.$get$b().h(0,r)
$.va=r
r=H.a(["Fungal"],s)
q=$.p
n=H.a([$.b1,$.bI],o)
H.a([],s)
r=new G.d("Fungal",n,q,r,0)
$.$get$b().h(0,r)
$.wf=r
r=H.a(["Thorny"],s)
q=$.F
n=H.a([$.b1,$.aY],o)
H.a([],s)
r=new G.d("Thorny",n,q,r,0)
$.$get$b().h(0,r)
$.z6=r
r=H.a(["Bulbed"],s)
q=$.F
n=H.a([$.b1,$.ah],o)
H.a([],s)
r=new G.d("Bulbed",n,q,r,0)
$.$get$b().h(0,r)
$.uY=r
r=H.a(["Glass Cannon"],s)
q=$.m
n=H.a([$.b7,$.aW],o)
H.a([],s)
r=new G.d("Glass Cannon",n,q,r,0)
$.$get$b().h(0,r)
$.wl=r
r=H.a(["Caoutchouc"],s)
q=$.m
n=H.a([$.b1,$.bY],o)
H.a([],s)
r=new G.d("Caoutchouc",n,q,r,0)
$.$get$b().h(0,r)
$.xM=r
r=H.a(["Cellulose"],s)
q=$.p
n=H.a([$.b1,$.aP],o)
H.a([],s)
r=new G.d("Cellulose",n,q,r,0)
$.$get$b().h(0,r)
$.v9=r
r=H.a(["Horrorcore"],s)
q=$.m
n=H.a([$.ad,$.b8],o)
H.a([],s)
r=new G.d("Horrorcore",n,q,r,0)
$.$get$b().h(0,r)
$.wx=r
r=H.a(["Nightcore"],s)
q=$.m
n=H.a([$.bk,$.ad],o)
H.a([],s)
r=new G.d("Nightcore",n,q,r,0)
$.$get$b().h(0,r)
$.xs=r
r=H.a(["Crazy Bus"],s)
q=$.m
n=H.a([$.bk,$.ab,$.ad],o)
H.a([],s)
r=new G.d("Crazy Bus",n,q,r,0)
$.$get$b().h(0,r)
$.vs=r
r=H.a(["Burdock"],s)
q=$.p
n=H.a([$.b1,$.c4],o)
H.a([],s)
r=new G.d("Burdock",n,q,r,0)
$.$get$b().h(0,r)
$.v_=r
r=H.a(["Necrotic"],s)
q=$.F
n=H.a([$.b9,$.bL],o)
H.a([],s)
$.$get$b().h(0,new G.d("Necrotic",n,q,r,0))
r=H.a(["Stem"],s)
q=$.p
n=H.a([$.b9,$.b1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Stem",n,q,r,0))
r=H.a(["DryBone"],s)
q=$.F
n=H.a([$.b9,$.aN],o)
H.a([],s)
$.$get$b().h(0,new G.d("DryBone",n,q,r,0))
r=H.a(["XyloBone"],s)
q=$.m
n=H.a([$.b9,$.ad],o)
H.a([],s)
$.$get$b().h(0,new G.d("XyloBone",n,q,r,0))
r=H.a(["Ribcage"],s)
q=$.p
n=H.a([$.b9,$.bc],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ribcage",n,q,r,0))
r=H.a(["BoneZone"],s)
q=$.m
n=H.a([$.b9,$.ap],o)
H.a([],s)
$.$get$b().h(0,new G.d("BoneZone",n,q,r,0))
r=H.a(["Creaky"],s)
q=$.H
n=H.a([$.a0,$.b5],o)
H.a([],s)
$.$get$b().h(0,new G.d("Creaky",n,q,r,0))
r=H.a(["Maple"],s)
q=$.p
n=H.a([$.a0,$.aD],o)
H.a([],s)
$.$get$b().h(0,new G.d("Maple",n,q,r,0))
r=H.a(["Mahagony"],s)
q=$.p
n=H.a([$.a0,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Mahagony",n,q,r,0))
r=H.a(["Fenced"],s)
q=$.F
n=H.a([$.a0,$.bc],o)
H.a([],s)
$.$get$b().h(0,new G.d("Fenced",n,q,r,0))
r=H.a(["Bocote"],s)
q=$.p
n=H.a([$.a0,$.bd],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bocote",n,q,r,0))
r=H.a(["Incense"],s)
q=$.p
n=H.a([$.a0,$.bu],o)
H.a([],s)
$.$get$b().h(0,new G.d("Incense",n,q,r,0))
r=H.a(["Ebony"],s)
q=$.m
n=H.a([$.a0,$.an],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ebony",n,q,r,0))
r=H.a(["Birch"],s)
q=$.p
n=H.a([$.a0,$.b4],o)
H.a([],s)
$.$get$b().h(0,new G.d("Birch",n,q,r,0))
r=H.a(["Knock-on-Wood"],s)
q=$.m
n=H.a([$.a0,$.bM],o)
H.a([],s)
$.$get$b().h(0,new G.d("Knock-on-Wood",n,q,r,0))
r=H.a(["Firewood"],s)
q=$.m
n=H.a([$.a0,$.aE],o)
H.a([],s)
$.$get$b().h(0,new G.d("Firewood",n,q,r,0))
r=H.a(["BlackForest"],s)
q=$.ae
n=H.a([$.a0,$.b8],o)
H.a([],s)
$.$get$b().h(0,new G.d("BlackForest",n,q,r,0))
r=H.a(["Tree"],s)
q=$.p
n=H.a([$.a0,$.b1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tree",n,q,r,0))
r=H.a(["Ebonwood"],s)
q=$.p
n=H.a([$.a0,$.bk],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ebonwood",n,q,r,0))
r=H.a(["Bark"],s)
q=$.p
n=H.a([$.a0,$.bg],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bark",n,q,r,0))
r=H.a(["Caveman's","Cavewoman's"],s)
q=$.m
n=H.a([$.a0,$.aH],o)
H.a([],s)
$.$get$b().h(0,new G.d("Caveman's",n,q,r,0))
r=H.a(["3D Printed"],s)
q=$.p
n=H.a([$.aP,$.a_],o)
H.a([],s)
$.$get$b().h(0,new G.d("3D Printed",n,q,r,0))
r=H.a(["Thesis"],s)
q=$.m
n=H.a([$.K,$.a_],o)
H.a([],s)
$.$get$b().h(0,new G.d("Thesis",n,q,r,0))
r=H.a(["Graphene"],s)
q=$.p
n=H.a([$.K,$.ab],o)
H.a([],s)
$.$get$b().h(0,new G.d("Graphene",n,q,r,0))
r=H.a(["Prophecy"],s)
q=$.m
n=H.a([$.K,$.aN],o)
H.a([],s)
$.$get$b().h(0,new G.d("Prophecy",n,q,r,0))
r=H.a(["Bedsheet"],s)
q=$.m
n=H.a([$.N,$.bL],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bedsheet",n,q,r,0))
r=H.a(["Gemstone","Ruby"],s)
q=$.p
n=H.a([$.aH,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Gemstone",n,q,r,0))
r=H.a(["Pet Rock"],s)
q=$.m
n=H.a([$.aH,$.aF],o)
H.a([],s)
$.$get$b().h(0,new G.d("Pet Rock",n,q,r,0))
r=H.a(["Sand"],s)
q=$.p
n=H.a([$.aH,$.bb],o)
H.a([],s)
$.$get$b().h(0,new G.d("Sand",n,q,r,0))
r=H.a(["Geode"],s)
q=$.p
n=H.a([$.aH,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Geode",n,q,r,0))
r=H.a(["Silicon"],s)
q=$.p
n=H.a([$.aH,$.ab],o)
H.a([],s)
$.$get$b().h(0,new G.d("Silicon",n,q,r,0))
r=H.a(["Cryolite","Iceburg"],s)
q=$.p
n=H.a([$.aH,$.bj],o)
H.a([],s)
$.$get$b().h(0,new G.d("Cryolite",n,q,r,0))
r=H.a(["Meteor"],s)
q=$.p
n=H.a([$.aH,$.bl],o)
H.a([],s)
$.$get$b().h(0,new G.d("Meteor",n,q,r,0))
r=H.a(["Carbon"],s)
q=$.p
n=H.a([$.aH,$.b1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Carbon",n,q,r,0))
r=H.a(["Mossy"],s)
q=$.F
n=H.a([$.aH,$.c4],o)
H.a([],s)
$.$get$b().h(0,new G.d("Mossy",n,q,r,0))
r=H.a(["Lensed"],s)
q=$.F
n=H.a([$.a_,$.b7],o)
H.a([],s)
$.$get$b().h(0,new G.d("Lensed",n,q,r,0))
r=H.a(["Hide"],s)
q=$.F
n=H.a([$.N,$.bg],o)
H.a([],s)
$.$get$b().h(0,new G.d("Hide",n,q,r,0))
r=H.a(["FeatherBoa"],s)
q=$.m
n=H.a([$.N,$.bw],o)
H.a([],s)
$.$get$b().h(0,new G.d("FeatherBoa",n,q,r,0))
r=H.a(["Tacky"],s)
q=$.H
n=H.a([$.N,$.bI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tacky",n,q,r,0))
r=H.a(["Whip"],s)
q=$.m
n=H.a([$.N,$.aG],o)
H.a([],s)
$.$get$b().h(0,new G.d("Whip",n,q,r,0))
r=H.a(["Costumed"],s)
q=$.m
n=H.a([$.N,$.b8],o)
H.a([],s)
$.$get$b().h(0,new G.d("Costumed",n,q,r,0))
r=H.a(["Punk"],s)
q=$.H
n=H.a([$.N,$.aY],o)
H.a([],s)
$.$get$b().h(0,new G.d("Punk",n,q,r,0))
r=H.a(["Weighted"],s)
q=$.F
n=H.a([$.N,$.bX],o)
H.a([],s)
$.$get$b().h(0,new G.d("Weighted",n,q,r,0))
r=H.a(["Favorite"],s)
q=$.H
n=H.a([$.N,$.bM],o)
H.a([],s)
$.$get$b().h(0,new G.d("Favorite",n,q,r,0))
r=H.a(["Novelty"],s)
q=$.H
n=H.a([$.N,$.b4],o)
H.a([],s)
$.$get$b().h(0,new G.d("Novelty",n,q,r,0))
r=H.a(["Security"],s)
q=$.p
n=H.a([$.N,$.bu],o)
H.a([],s)
$.$get$b().h(0,new G.d("Security",n,q,r,0))
r=H.a(["IcePack"],s)
q=$.p
n=H.a([$.N,$.bj],o)
H.a([],s)
$.$get$b().h(0,new G.d("IcePack",n,q,r,0))
r=H.a(["MotionCapture"],s)
q=$.m
n=H.a([$.N,$.ab],o)
H.a([],s)
$.$get$b().h(0,new G.d("MotionCapture",n,q,r,0))
r=H.a(["Silica"],s)
q=$.p
n=H.a([$.N,$.bG],o)
H.a([],s)
$.$get$b().h(0,new G.d("Silica",n,q,r,0))
r=H.a(["Harp"],s)
q=$.p
n=H.a([$.N,$.ad],o)
H.a([],s)
$.$get$b().h(0,new G.d("Harp",n,q,r,0))
r=H.a(["Silk"],s)
q=$.p
n=H.a([$.N,$.bd],o)
H.a([],s)
$.$get$b().h(0,new G.d("Silk",n,q,r,0))
r=H.a(["RedFlag"],s)
q=$.p
n=H.a([$.N,$.bv],o)
H.a([],s)
$.$get$b().h(0,new G.d("RedFlag",n,q,r,0))
r=H.a(["MagicCarpet"],s)
q=$.p
n=H.a([$.N,$.aF],o)
H.a([],s)
$.$get$b().h(0,new G.d("MagicCarpet1",n,q,r,0))
r=H.a(["Satin","Tablecloth"],s)
q=$.p
n=H.a([$.N,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Satin",n,q,r,0))
r=H.a(["MagicCarpet"],s)
q=$.p
n=H.a([$.N,$.a8],o)
H.a([],s)
$.$get$b().h(0,new G.d("MagicCarpet2",n,q,r,0))
r=H.a(["Tweed"],s)
q=$.p
n=H.a([$.N,$.am],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tweed",n,q,r,0))
r=H.a(["Jean"],s)
q=$.p
n=H.a([$.N,$.ap],o)
H.a([],s)
$.$get$b().h(0,new G.d("Jean",n,q,r,0))
r=H.a(["Tesla"],s)
q=$.ae
n=H.a([$.a_,$.ab],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tesla",n,q,r,0))
r=H.a(["Ashwood"],s)
q=$.p
n=H.a([$.a8,$.a0],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ashwood",n,q,r,0))
r=H.a(["Peashooter"],s)
q=$.p
n=H.a([$.b1,$.aW],o)
H.a([],s)
$.$get$b().h(0,new G.d("Peashooter",n,q,r,0))
r=H.a(["Lacquer"],s)
q=$.p
n=H.a([$.aP,$.a0],o)
H.a([],s)
$.$get$b().h(0,new G.d("Lacquer",n,q,r,0))
r=H.a(["Classpecty"],s)
q=$.p
n=H.a([$.Q,$.V],o)
H.a([],s)
$.$get$b().h(0,new G.d("Classpecty",n,q,r,0))
r=H.a(["Smartass"],s)
q=$.H
n=H.a([$.a_,$.aQ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Smartass",n,q,r,0))
r=H.a(["Miraculous","Magnets","Miracle"],s)
q=$.H
n=H.a([$.bh,$.b2,$.a8],o)
H.a([],s)
$.$get$b().h(0,new G.d("Miraculous",n,q,r,0))
r=H.a(["Pigeon"],s)
q=$.p
n=H.a([$.bk,$.bw],o)
H.a([],s)
$.$get$b().h(0,new G.d("Pigeon",n,q,r,0))
r=H.a(["Grimoire"],s)
q=$.m
n=H.a([$.bk,$.K],o)
H.a([],s)
$.$get$b().h(0,new G.d("Grimoire",n,q,r,0))
r=H.a(["Oglogoth's"],s)
q=$.ae
n=H.a([$.bk,$.aY],o)
H.a([],s)
$.$get$b().h(0,new G.d("Oglogoth's",n,q,r,0))
r=H.a(["Echidna's"],s)
q=$.ae
n=H.a([$.a4,$.aY],o)
H.a([],s)
$.$get$b().h(0,new G.d("Echidna's",n,q,r,0))
r=H.a(["Superior"],s)
q=$.ae
n=H.a([$.a_,$.am],o)
H.a([],s)
$.$get$b().h(0,new G.d("Superior",n,q,r,0))
r=H.a(["Lego"],s)
q=$.p
n=H.a([$.a4,$.aP,$.bu,$.ah],o)
H.a([],s)
$.$get$b().h(0,new G.d("Lego",n,q,r,0))
r=H.a(["Yardstick"],s)
q=$.m
n=H.a([$.a4,$.d_,$.a0,$.K],o)
H.a([],s)
$.$get$b().h(0,new G.d("Yardstick",n,q,r,0))
r=H.a(["Queenly"],s)
q=$.ae
n=H.a([$.an,$.a8,$.bh,$.aQ,$.b8],o)
H.a([],s)
r=new G.d("Queenly",n,q,r,0)
$.$get$b().h(0,r)
$.qV=r
r=H.a(["Kingly"],s)
q=$.ae
n=H.a([$.b8,$.ah,$.bX,$.a8,$.bh],o)
H.a([],s)
r=new G.d("Kingly",n,q,r,0)
$.$get$b().h(0,r)
$.qQ=r
r=H.a(["Jack"],s)
q=$.ae
n=H.a([$.aY,$.aG,$.A,$.an],o)
H.a([],s)
r=new G.d("Jack",n,q,r,0)
$.$get$b().h(0,r)
$.qO=r
r=H.a(["Codpiece","Codtier"],s)
q=$.m
n=H.a([$.a4,$.b2,$.a0,$.Q,$.N],o)
H.a([],s)
$.$get$b().h(0,new G.d("Codpiece",n,q,r,0))
r=H.a(["Graceful"],s)
q=$.m
n=H.a([$.a4,$.aO,$.K,$.A,$.a_,$.Q],o)
H.a([],s)
$.$get$b().h(0,new G.d("Graceful",n,q,r,0))
r=H.a(["Guide","Tourist"],s)
q=$.m
n=H.a([$.a4,$.aO,$.K,$.a_,$.Q,$.bj],o)
H.a([],s)
$.$get$b().h(0,new G.d("Guide",n,q,r,0))
r=H.a(["Will","Testament"],s)
q=$.m
n=H.a([$.a4,$.aN,$.K,$.a_,$.bc],o)
H.a([],s)
$.$get$b().h(0,new G.d("Testament",n,q,r,0))
r=H.a(["Excalibur's","Excalibur"],s)
q=$.ae
n=H.a([$.a4,$.b4,$.A,$.aY,$.aG,$.eo],o)
H.a([],s)
$.$get$b().h(0,new G.d("Excalibur",n,q,r,0))
r=H.a(["Influential"],s)
q=$.ae
n=H.a([$.a4,$.K,$.bv,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Influential",n,q,r,0))
r=H.a(["Alternative"],s)
q=$.ae
n=H.a([$.a4,$.a8,$.N,$.an],o)
H.a([],s)
$.$get$b().h(0,new G.d("Alternative",n,q,r,0))
r=H.a(["Valkyrie"],s)
q=$.ae
n=H.a([$.a4,$.aQ,$.b9,$.A,$.en,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Valkyrie",n,q,r,0))
r=H.a(["Ongoing"],s)
q=$.ae
n=H.a([$.a4,$.aH,$.am,$.hs,$.ah],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ongoing",n,q,r,0))
r=H.a(["Short"],s)
q=$.F
n=H.a([$.a4,$.N,$.bd,$.aI,$.am],o)
H.a([],s)
$.$get$b().h(0,new G.d("Short",n,q,r,0))
r=H.a(["Crown"],s)
q=$.m
n=H.a([$.a4,$.A,$.bd,$.aI,$.am],o)
H.a([],s)
$.$get$b().h(0,new G.d("Crown",n,q,r,0))
r=H.a(["Gristtorrent"],s)
q=$.m
n=H.a([$.a4,$.aP,$.ab,$.an,$.a_],o)
H.a([],s)
$.$get$b().h(0,new G.d("Gristtorrent",n,q,r,0))
r=H.a(["Robe"],s)
q=$.m
n=H.a([$.a4,$.N,$.a_,$.a8,$.bb],o)
H.a([],s)
$.$get$b().h(0,new G.d("Robe",n,q,r,0))
r=H.a(["Beret"],s)
q=$.m
n=H.a([$.a4,$.N,$.a_,$.aI,$.am],o)
H.a([],s)
$.$get$b().h(0,new G.d("Beret",n,q,r,0))
r=H.a(["Blank"],s)
q=$.F
n=$.a4
m=$.K
l=$.a_
l=H.a([n,m,l,$.aO,l,$.an],o)
H.a([],s)
$.$get$b().h(0,new G.d("Blank",l,q,r,0))
r=H.a(["Cueball"],s)
q=$.p
l=H.a([$.a4,$.aI,$.bF,$.ah,$.dL,$.aF],o)
H.a([],s)
$.$get$b().h(0,new G.d("Cueball",l,q,r,0))
r=H.a(["Meddler's"],s)
q=$.ae
l=H.a([$.a4,$.aO,$.K,$.bv,$.b_],o)
H.a([],s)
$.$get$b().h(0,new G.d("Meddler's",l,q,r,0))
r=H.a(["Scroll"],s)
q=$.ae
l=H.a([$.a8,$.K],o)
H.a([],s)
$.$get$b().h(0,new G.d("Scroll",l,q,r,0))
r=H.a(["Tome"],s)
q=$.m
l=H.a([$.K,$.a_,$.aO],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tome",l,q,r,0))
r=H.a(["Lockpick"],s)
q=$.m
l=H.a([$.a4,$.A,$.an,$.aY],o)
H.a([],s)
$.$get$b().h(0,new G.d("Lockpick",l,q,r,0))
r=H.a(["Warped"],s)
q=$.F
l=H.a([$.a4,$.A,$.b7,$.an],o)
H.a([],s)
$.$get$b().h(0,new G.d("Warped",l,q,r,0))
r=H.a(["Stairs"],s)
q=$.m
l=H.a([$.a4,$.b2,$.a0,$.ap,$.bu,$.b_],o)
H.a([],s)
$.$get$b().h(0,new G.d("Stairs",l,q,r,0))
r=H.a(["Rocket"],s)
q=$.m
l=H.a([$.a4,$.aE,$.A,$.b5],o)
H.a([],s)
$.$get$b().h(0,new G.d("Rocket",l,q,r,0))
r=H.a(["~ATH"],s)
q=$.m
l=H.a([$.a4,$.ab,$.K,$.aO,$.aN],o)
H.a([],s)
$.$get$b().h(0,new G.d("~ATH",l,q,r,0))
r=H.a(["Puppeted"],s)
q=$.m
l=H.a([$.a4,$.a0,$.aF,$.b8],o)
H.a([],s)
$.$get$b().h(0,new G.d("Puppeted",l,q,r,0))
r=H.a(["Angelic"],s)
q=$.ae
l=H.a([$.a4,$.bh,$.bw,$.b4,$.ad,$.a8],o)
H.a([],s)
$.$get$b().h(0,new G.d("Angelic",l,q,r,0))
r=H.a(["Vitae"],s)
q=$.p
l=H.a([$.a4,$.b_,$.b7,$.a8],o)
H.a([],s)
$.$get$b().h(0,new G.d("Vitae",l,q,r,0))
r=H.a(["Fluorite"],s)
q=$.p
l=H.a([$.a4,$.b4,$.bM,$.aH,$.b7],o)
H.a([],s)
$.$get$b().h(0,new G.d("Fluorite",l,q,r,0))
r=H.a(["Janus"],s)
q=$.ae
l=H.a([$.a4,$.aQ,$.aH,$.am,$.ab],o)
H.a([],s)
$.$get$b().h(0,new G.d("Janus",l,q,r,0))
r=H.a(["Bacchus"],s)
q=$.ae
l=H.a([$.a4,$.aD,$.bv,$.am],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bacchus",l,q,r,0))
r=H.a(["TurnTable"],s)
q=$.ae
l=H.a([$.a4,$.A,$.ad,$.ap],o)
H.a([],s)
$.$get$b().h(0,new G.d("TurnTable",l,q,r,0))
r=H.a(["[???]","[Unknown]"],s)
q=$.H
l=H.a([$.a4,$.b7,$.bS,$.b4,$.an],o)
H.a([],s)
$.$get$b().h(0,new G.d("???",l,q,r,0))
r=H.a(["Demonite"],s)
q=$.p
l=H.a([$.A,$.bk],o)
H.a([],s)
$.$get$b().h(0,new G.d("Demonite",l,q,r,0))
r=H.a(["Stymphalian"],s)
q=$.ae
l=H.a([$.A,$.bw],o)
H.a([],s)
$.$get$b().h(0,new G.d("Stymphalian",l,q,r,0))
r=H.a(["Junky"],s)
q=$.p
l=H.a([$.A,$.bI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Junky",l,q,r,0))
r=H.a(["Cold Welded","Cold Iron"],s)
q=$.p
l=H.a([$.A,$.bj],o)
H.a([],s)
$.$get$b().h(0,new G.d("Cold Iron",l,q,r,0))
r=H.a(["Bolted"],s)
q=$.F
l=H.a([$.A,$.bc],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bolted",l,q,r,0))
r=H.a(["Armored"],s)
q=$.F
l=H.a([$.A,$.aF],o)
H.a([],s)
$.$get$b().h(0,new G.d("Armored",l,q,r,0))
r=H.a(["Heartsteel","Rose Gold"],s)
q=$.p
l=H.a([$.A,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Heartsteel",l,q,r,0))
r=H.a(["Brick"],s)
q=$.p
l=H.a([$.bF,$.aH],o)
H.a([],s)
$.$get$b().h(0,new G.d("Brick",l,q,r,0))
r=H.a(["Clay"],s)
q=$.p
l=H.a([$.bF,$.bY],o)
H.a([],s)
$.$get$b().h(0,new G.d("Clay",l,q,r,0))
r=H.a(["Mugly"],s)
q=$.H
l=H.a([$.bF,$.bI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Mugly",l,q,r,0))
r=H.a(["Plate"],s)
q=$.p
l=H.a([$.bF,$.ah],o)
H.a([],s)
$.$get$b().h(0,new G.d("Plate",l,q,r,0))
r=H.a(["Terracotta"],s)
q=$.p
l=H.a([$.bF,$.aE],o)
H.a([],s)
$.$get$b().h(0,new G.d("Terracotta",l,q,r,0))
r=H.a(["Semiconductive"],s)
q=$.p
l=H.a([$.bF,$.ab],o)
H.a([],s)
$.$get$b().h(0,new G.d("Semiconductive",l,q,r,0))
r=H.a(["Vinyl"],s)
q=$.p
l=H.a([$.bF,$.ad],o)
H.a([],s)
$.$get$b().h(0,new G.d("Vinyl",l,q,r,0))
r=H.a(["Artisan"],s)
q=$.F
l=H.a([$.bF,$.a_],o)
H.a([],s)
$.$get$b().h(0,new G.d("Artisan",l,q,r,0))
r=H.a(["Tiled"],s)
q=$.p
l=H.a([$.bF,$.am],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tiled",l,q,r,0))
r=H.a(["Hand-Sculpted"],s)
q=$.F
l=H.a([$.bF,$.bh],o)
H.a([],s)
$.$get$b().h(0,new G.d("Hand-Sculpted",l,q,r,0))
r=H.a(["Handicraft"],s)
q=$.H
l=H.a([$.bH,$.K],o)
H.a([],s)
$.$get$b().h(0,new G.d("Handicraft",l,q,r,0))
r=H.a(["Torn"],s)
q=$.F
l=H.a([$.bH,$.N],o)
H.a([],s)
$.$get$b().h(0,new G.d("Torn",l,q,r,0))
r=H.a(["Grotesque"],s)
q=$.H
l=H.a([$.bH,$.bI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Grotesque",l,q,r,0))
r=H.a(["Flickering"],s)
q=$.F
l=H.a([$.bH,$.b4],o)
H.a([],s)
$.$get$b().h(0,new G.d("Flickering",l,q,r,0))
r=H.a(["Thinly Veiled","Translucent"],s)
q=$.p
l=H.a([$.bH,$.an],o)
H.a([],s)
$.$get$b().h(0,new G.d("Thinly Veiled",l,q,r,0))
r=H.a(["Fragile"],s)
q=$.F
l=H.a([$.bH,$.bd],o)
H.a([],s)
$.$get$b().h(0,new G.d("Fragile",l,q,r,0))
r=H.a(["Troll's"],s)
q=$.ae
l=H.a([$.bH,$.bv],o)
H.a([],s)
$.$get$b().h(0,new G.d("Troll's",l,q,r,0))
r=H.a(["Sappy"],s)
q=$.p
l=H.a([$.bH,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Sappy",l,q,r,0))
r=H.a(["Bootleg"],s)
q=$.p
l=H.a([$.bH,$.b2],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bootleg",l,q,r,0))
r=H.a(["Distorted"],s)
q=$.p
l=H.a([$.bH,$.b5],o)
H.a([],s)
$.$get$b().h(0,new G.d("Distorted",l,q,r,0))
r=H.a(["Ent's"],s)
q=$.ae
l=H.a([$.a0,$.aF],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ent's",l,q,r,0))
r=H.a(["WeepingWillow"],s)
q=$.p
l=H.a([$.a0,$.bL],o)
H.a([],s)
$.$get$b().h(0,new G.d("WeepingWillow",l,q,r,0))
r=H.a(["Latex"],s)
q=$.p
l=H.a([$.a0,$.bY],o)
H.a([],s)
$.$get$b().h(0,new G.d("Latex",l,q,r,0))
r=H.a(["Turf"],s)
q=$.p
l=H.a([$.aP,$.aQ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Turf",l,q,r,0))
r=H.a(["Stress Relieving"],s)
q=$.m
l=H.a([$.bY,$.bu],o)
H.a([],s)
$.$get$b().h(0,new G.d("Stress Relieving",l,q,r,0))
r=H.a(["R-Rated"],s)
q=$.F
l=H.a([$.bY,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("R-Rated",l,q,r,0))
r=H.a(["Racing"],s)
q=$.m
l=H.a([$.bY,$.aE],o)
H.a([],s)
$.$get$b().h(0,new G.d("Racing",l,q,r,0))
r=H.a(["Cross Stitch"],s)
q=$.m
l=H.a([$.K,$.N],o)
H.a([],s)
$.$get$b().h(0,new G.d("Cross Stitch",l,q,r,0))
r=H.a(["LoveLetter"],s)
q=$.m
l=H.a([$.K,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("LoveLetter",l,q,r,0))
r=H.a(["EbonStone"],s)
q=$.p
l=H.a([$.aH,$.bk],o)
H.a([],s)
$.$get$b().h(0,new G.d("EbonStone",l,q,r,0))
r=H.a(["Rock Candy"],s)
q=$.p
l=H.a([$.aH,$.aD],o)
H.a([],s)
$.$get$b().h(0,new G.d("Rock Candy",l,q,r,0))
r=H.a(["Smashing"],s)
q=$.H
l=H.a([$.aH,$.b5],o)
H.a([],s)
$.$get$b().h(0,new G.d("Smashing",l,q,r,0))
r=H.a(["Anomalous"],s)
q=$.H
l=H.a([$.bL,$.bk],o)
H.a([],s)
$.$get$b().h(0,new G.d("Anomalous",l,q,r,0))
r=H.a(["Onmoraki"],s)
q=$.p
l=H.a([$.bL,$.bw],o)
H.a([],s)
$.$get$b().h(0,new G.d("Onmoraki",l,q,r,0))
r=H.a(["Ghastly"],s)
q=$.H
l=H.a([$.bL,$.bI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ghastly",l,q,r,0))
r=H.a(["Shade","Shadow"],s)
q=$.p
l=H.a([$.bL,$.an],o)
H.a([],s)
$.$get$b().h(0,new G.d("Shade",l,q,r,0))
r=H.a(["Choral"],s)
q=$.p
l=H.a([$.bL,$.ad],o)
H.a([],s)
$.$get$b().h(0,new G.d("Choral",l,q,r,0))
r=H.a(["Eerie"],s)
q=$.p
l=H.a([$.bL,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Eerie",l,q,r,0))
r=H.a(["Spiritual"],s)
q=$.H
l=H.a([$.bL,$.bh],o)
H.a([],s)
$.$get$b().h(0,new G.d("Spiritual",l,q,r,0))
r=H.a(["Heart"],s)
q=$.p
l=H.a([$.bg,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Heart",l,q,r,0))
r=H.a(["Primordial"],s)
q=$.p
l=H.a([$.bg,$.aF],o)
H.a([],s)
$.$get$b().h(0,new G.d("Primordial",l,q,r,0))
r=H.a(["Eyeball"],s)
q=$.p
l=H.a([$.bg,$.b4],o)
H.a([],s)
$.$get$b().h(0,new G.d("Eyeball",l,q,r,0))
r=H.a(["Vulture"],s)
q=$.F
l=H.a([$.bg,$.bw],o)
H.a([],s)
$.$get$b().h(0,new G.d("Vulture",l,q,r,0))
r=H.a(["DarkSpell","BlackMagic"],s)
q=$.m
l=H.a([$.bk,$.a8],o)
H.a([],s)
$.$get$b().h(0,new G.d("BlackMagic",l,q,r,0))
r=H.a(["Doppelganger"],s)
q=$.p
l=H.a([$.bk,$.b2],o)
H.a([],s)
$.$get$b().h(0,new G.d("Doppelganger",l,q,r,0))
r=H.a(["Incomprehensible"],s)
q=$.F
l=H.a([$.bk,$.b5],o)
H.a([],s)
$.$get$b().h(0,new G.d("Incomprehensible",l,q,r,0))
r=H.a(["Destructive"],s)
q=$.m
l=H.a([$.bk,$.aF],o)
H.a([],s)
$.$get$b().h(0,new G.d("Destructive",l,q,r,0))
r=H.a(["Growling"],s)
q=$.F
l=H.a([$.c4,$.b5],o)
H.a([],s)
$.$get$b().h(0,new G.d("Growling",l,q,r,0))
r=H.a(["Coconut"],s)
q=$.p
l=H.a([$.c4,$.aD],o)
H.a([],s)
$.$get$b().h(0,new G.d("Coconut",l,q,r,0))
r=H.a(["Beastmaster's"],s)
q=$.ae
l=H.a([$.c4,$.bc],o)
H.a([],s)
$.$get$b().h(0,new G.d("Beastmaster's",l,q,r,0))
r=H.a(["Fluffy"],s)
q=$.p
l=H.a([$.c4,$.bw],o)
H.a([],s)
$.$get$b().h(0,new G.d("Fluffy",l,q,r,0))
r=H.a(["Feather Grass","Fern"],s)
q=$.p
l=H.a([$.b1,$.bw],o)
H.a([],s)
$.$get$b().h(0,new G.d("Fern",l,q,r,0))
r=H.a(["Four Leafed"],s)
q=$.F
l=H.a([$.b1,$.bM],o)
H.a([],s)
$.$get$b().h(0,new G.d("Four Leafed",l,q,r,0))
r=H.a(["Shrubbery"],s)
q=$.p
l=H.a([$.b1,$.an],o)
H.a([],s)
$.$get$b().h(0,new G.d("Shrubbery",l,q,r,0))
r=H.a(["Shameplant","Ecballium"],s)
q=$.p
l=H.a([$.b1,$.bl],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ecballium",l,q,r,0))
r=H.a(["Truffle"],s)
q=$.p
l=H.a([$.b1,$.bd],o)
H.a([],s)
$.$get$b().h(0,new G.d("Truffle",l,q,r,0))
r=H.a(["Vine"],s)
q=$.p
l=H.a([$.b1,$.bc],o)
H.a([],s)
$.$get$b().h(0,new G.d("Vine",l,q,r,0))
r=H.a(["Carion","CorpseBlossom"],s)
q=$.p
l=H.a([$.b1,$.aQ],o)
H.a([],s)
$.$get$b().h(0,new G.d("CorpseBlossom",l,q,r,0))
r=H.a(["Fruity"],s)
q=$.F
l=H.a([$.b1,$.aD],o)
H.a([],s)
$.$get$b().h(0,new G.d("Fruity",l,q,r,0))
r=H.a(["Squawking"],s)
q=$.F
l=H.a([$.bw,$.b5],o)
H.a([],s)
$.$get$b().h(0,new G.d("Squawking",l,q,r,0))
r=H.a(["Poultry","Chicken","Turkey"],s)
q=$.p
l=H.a([$.bw,$.aD],o)
H.a([],s)
$.$get$b().h(0,new G.d("Poultry",l,q,r,0))
r=H.a(["Dove"],s)
q=$.p
l=H.a([$.bw,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Dove",l,q,r,0))
r=H.a(["Peacock"],s)
q=$.p
l=H.a([$.bw,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Peacock",l,q,r,0))
r=H.a(["Stork"],s)
q=$.p
l=H.a([$.bw,$.b_],o)
H.a([],s)
$.$get$b().h(0,new G.d("Stork",l,q,r,0))
r=H.a(["Zhenniao"],s)
q=$.p
l=H.a([$.bw,$.bG],o)
H.a([],s)
$.$get$b().h(0,new G.d("Zhenniao",l,q,r,0))
r=H.a(["Dodo","Passenger Pigeon"],s)
q=$.p
l=H.a([$.bw,$.aN],o)
H.a([],s)
$.$get$b().h(0,new G.d("Dodo",l,q,r,0))
r=H.a(["Raven"],s)
q=$.oL
l=H.a([$.bw,$.b8],o)
H.a([],s)
$.$get$b().h(0,new G.d("Raven",l,q,r,0))
r=H.a(["Frilled"],s)
q=$.F
l=H.a([$.bw,$.bI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Frilled",l,q,r,0))
r=H.a(["Horrifying"],s)
q=$.H
l=H.a([$.bI,$.b8],o)
H.a([],s)
$.$get$b().h(0,new G.d("Horrifying",l,q,r,0))
r=H.a(["Burning Edge"],s)
q=$.m
l=H.a([$.aG,$.aE],o)
H.a([],s)
$.$get$b().h(0,new G.d("Burning Edge",l,q,r,0))
r=H.a(["Scapel"],s)
q=$.m
l=H.a([$.aG,$.b_],o)
H.a([],s)
$.$get$b().h(0,new G.d("Scapel",l,q,r,0))
r=H.a(["Menacing"],s)
q=$.H
l=H.a([$.b8,$.aY],o)
H.a([],s)
$.$get$b().h(0,new G.d("Menacing",l,q,r,0))
r=H.a(["Syringe"],s)
q=$.m
l=H.a([$.b_,$.aY],o)
H.a([],s)
$.$get$b().h(0,new G.d("Syringe",l,q,r,0))
r=H.a(["Bitter","Sour"],s)
q=$.H
l=H.a([$.aD,$.aQ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bitter",l,q,r,0))
r=H.a(["Pineapple"],s)
q=$.p
l=H.a([$.aD,$.aY],o)
H.a([],s)
$.$get$b().h(0,new G.d("Pineapple",l,q,r,0))
r=H.a(["Crunchy"],s)
q=$.H
l=H.a([$.aD,$.ah],o)
H.a([],s)
$.$get$b().h(0,new G.d("Crunchy",l,q,r,0))
r=H.a(["Bass"],s)
q=$.m
l=H.a([$.bX,$.ad],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bass",l,q,r,0))
r=H.a(["Rigid"],s)
q=$.m
l=H.a([$.bX,$.aQ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Rigid",l,q,r,0))
r=H.a(["Prop"],s)
q=$.m
l=H.a([$.aW,$.b2],o)
H.a([],s)
$.$get$b().h(0,new G.d("Prop",l,q,r,0))
r=H.a(["Magic Missle"],s)
q=$.m
l=H.a([$.aW,$.a8],o)
H.a([],s)
$.$get$b().h(0,new G.d("Magic Missle",l,q,r,0))
r=H.a(["Gangster's"],s)
q=$.ae
l=H.a([$.aW,$.ap],o)
H.a([],s)
$.$get$b().h(0,new G.d("Gangster's",l,q,r,0))
r=H.a(["Cupid's"],s)
q=$.ae
l=H.a([$.aW,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Cupid's",l,q,r,0))
r=H.a(["Turreted"],s)
q=$.F
l=H.a([$.aW,$.aF],o)
H.a([],s)
$.$get$b().h(0,new G.d("Turreted",l,q,r,0))
r=H.a(["AutoAiming","AutoTarget","TargetAssist","AimBot"],s)
q=$.F
l=H.a([$.aW,$.a_],o)
H.a([],s)
$.$get$b().h(0,new G.d("AutoTarget",l,q,r,0))
r=H.a(["Guerilla's"],s)
q=$.ae
l=H.a([$.aW,$.bv],o)
H.a([],s)
$.$get$b().h(0,new G.d("Guerilla's",l,q,r,0))
r=H.a(["Rail","ChargeDart"],s)
q=$.m
l=H.a([$.aW,$.ab],o)
H.a([],s)
$.$get$b().h(0,new G.d("Rail",l,q,r,0))
r=H.a(["Tau"],s)
q=$.m
l=H.a([$.aW,$.bS],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tau",l,q,r,0))
r=H.a(["Pew","Laser"],s)
q=$.m
l=H.a([$.aW,$.b4],o)
H.a([],s)
$.$get$b().h(0,new G.d("Pew",l,q,r,0))
r=H.a(["Thermal"],s)
q=$.F
l=H.a([$.aW,$.aE],o)
H.a([],s)
$.$get$b().h(0,new G.d("Thermal",l,q,r,0))
r=H.a(["Plasma","Incandescent"],s)
q=$.p
l=H.a([$.b4,$.aE],o)
H.a([],s)
$.$get$b().h(0,new G.d("Plasma",l,q,r,0))
r=H.a(["Shredding"],s)
q=$.p
l=H.a([$.ad,$.aE],o)
H.a([],s)
$.$get$b().h(0,new G.d("Shredding",l,q,r,0))
r=H.a(["Leprechaun"],s)
q=$.p
l=H.a([$.bM,$.aF],o)
H.a([],s)
$.$get$b().h(0,new G.d("Leprechaun",l,q,r,0))
r=H.a(["Charmed"],s)
q=$.p
l=H.a([$.bM,$.bd],o)
H.a([],s)
$.$get$b().h(0,new G.d("Charmed",l,q,r,0))
r=H.a(["Leprechaun"],s)
q=$.ae
l=H.a([$.bM,$.aF],o)
H.a([],s)
$.$get$b().h(0,new G.d("Leprechaun",l,q,r,0))
r=H.a(["Prospitian"],s)
q=$.ae
l=H.a([$.b4,$.bb],o)
H.a([],s)
$.$get$b().h(0,new G.d("Prospitian",l,q,r,0))
r=H.a(["Vigilant"],s)
q=$.F
l=H.a([$.b4,$.aF],o)
H.a([],s)
$.$get$b().h(0,new G.d("Vigilant",l,q,r,0))
r=H.a(["Stand-Up"],s)
q=$.H
l=H.a([$.b4,$.b3],o)
H.a([],s)
$.$get$b().h(0,new G.d("Stand-Up",l,q,r,0))
r=H.a(["Bedazzled"],s)
q=$.F
l=H.a([$.b4,$.ap],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bedazzled",l,q,r,0))
r=H.a(["Thief's"],s)
q=$.ae
l=H.a([$.an,$.a8],o)
H.a([],s)
$.$get$b().h(0,new G.d("Thief's",l,q,r,0))
r=H.a(["InvisibilityCloak"],s)
q=$.m
l=H.a([$.an,$.a8,$.N],o)
H.a([],s)
$.$get$b().h(0,new G.d("InvisibilityCloak",l,q,r,0))
r=H.a(["Comedy Night","Dry Humor"],s)
q=$.F
l=H.a([$.an,$.b3],o)
H.a([],s)
$.$get$b().h(0,new G.d("Comedy Night",l,q,r,0))
r=H.a(["Stealthy"],s)
q=$.H
l=H.a([$.an,$.aF],o)
H.a([],s)
$.$get$b().h(0,new G.d("Stealthy",l,q,r,0))
r=H.a(["Subterfuge"],s)
q=$.m
l=H.a([$.an,$.a_],o)
H.a([],s)
$.$get$b().h(0,new G.d("Subterfuge",l,q,r,0))
r=H.a(["Dersite"],s)
q=$.ae
l=H.a([$.an,$.aQ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Dersite",l,q,r,0))
r=H.a(["Ambient","Muzak","Elevator"],s)
q=$.ae
l=H.a([$.bu,$.ad],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ambient",l,q,r,0))
r=H.a(["Anesthesia"],s)
q=$.m
l=H.a([$.bu,$.b_],o)
H.a([],s)
$.$get$b().h(0,new G.d("Anesthesia",l,q,r,0))
r=H.a(["Supportive"],s)
q=$.m
l=H.a([$.bu,$.aF],o)
H.a([],s)
$.$get$b().h(0,new G.d("Supportive",l,q,r,0))
r=H.a(["Nuka"],s)
q=$.m
l=H.a([$.b_,$.bS],o)
H.a([],s)
$.$get$b().h(0,new G.d("Nuka",l,q,r,0))
r=H.a(["Contaminated"],s)
q=$.F
l=H.a([$.bG,$.bS],o)
H.a([],s)
$.$get$b().h(0,new G.d("Contaminated",l,q,r,0))
r=H.a(["Unstable"],s)
q=$.F
l=H.a([$.aN,$.bS],o)
H.a([],s)
$.$get$b().h(0,new G.d("Unstable",l,q,r,0))
r=H.a(["Timebomb"],s)
q=$.m
l=H.a([$.aN,$.bl],o)
H.a([],s)
$.$get$b().h(0,new G.d("Timebomb",l,q,r,0))
r=H.a(["Short Circuiting"],s)
q=$.F
l=H.a([$.ab,$.aN],o)
H.a([],s)
$.$get$b().h(0,new G.d("Short Circuiting",l,q,r,0))
r=H.a(["Artifact","Relic"],s)
q=$.m
l=H.a([$.aN,$.bd],o)
H.a([],s)
$.$get$b().h(0,new G.d("Relic",l,q,r,0))
r=H.a(["Existentialist"],s)
q=$.F
l=H.a([$.aN,$.aQ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Existentialist",l,q,r,0))
r=H.a(["Apocalyptic"],s)
q=$.H
l=H.a([$.aN,$.bh],o)
H.a([],s)
$.$get$b().h(0,new G.d("Apocalyptic",l,q,r,0))
r=H.a(["Dud"],s)
q=$.m
l=H.a([$.bl,$.b2],o)
H.a([],s)
$.$get$b().h(0,new G.d("Dud",l,q,r,0))
r=H.a(["Heat Seeking","Guided"],s)
q=$.m
l=H.a([$.bl,$.a_],o)
H.a([],s)
$.$get$b().h(0,new G.d("Guided",l,q,r,0))
r=H.a(["Bobomb"],s)
q=$.m
l=H.a([$.bl,$.aF],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bobomb",l,q,r,0))
r=H.a(["Dread"],s)
q=$.m
l=H.a([$.aN,$.bc],o)
H.a([],s)
$.$get$b().h(0,new G.d("Dread",l,q,r,0))
r=H.a(["Knockback"],s)
q=$.m
l=H.a([$.bl,$.bc],o)
H.a([],s)
$.$get$b().h(0,new G.d("Knockback",l,q,r,0))
r=H.a(["Paralysis"],s)
q=$.m
l=H.a([$.ab,$.bc],o)
H.a([],s)
$.$get$b().h(0,new G.d("Paralysis",l,q,r,0))
r=H.a(["Carnage"],s)
q=$.m
l=H.a([$.bl,$.bv],o)
H.a([],s)
$.$get$b().h(0,new G.d("Carnage",l,q,r,0))
r=H.a(["Blast Beat"],s)
q=$.m
l=H.a([$.bl,$.ad],o)
H.a([],s)
$.$get$b().h(0,new G.d("Blast Beat",l,q,r,0))
r=H.a(["Corrosive"],s)
q=$.F
l=H.a([$.bl,$.bG],o)
H.a([],s)
$.$get$b().h(0,new G.d("Corrosive",l,q,r,0))
r=H.a(["Flash Freeze","Ice Bomb"],s)
q=$.m
l=H.a([$.bl,$.bj],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ice Bomb",l,q,r,0))
r=H.a(["Cryogenic"],s)
q=$.m
l=H.a([$.bj,$.b_],o)
H.a([],s)
$.$get$b().h(0,new G.d("Cryogenic",l,q,r,0))
r=H.a(["Spellcasting","Thundaga"],s)
q=$.m
l=H.a([$.a8,$.ab],o)
H.a([],s)
$.$get$b().h(0,new G.d("Spellcasting",l,q,r,0))
r=H.a(["Tingling"],s)
q=$.F
l=H.a([$.ab,$.bb],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tingling",l,q,r,0))
r=H.a(["Rage Plague","Beserk"],s)
q=$.m
l=H.a([$.bv,$.bG],o)
H.a([],s)
$.$get$b().h(0,new G.d("Rage Plague",l,q,r,0))
r=H.a(["Nerve Gas"],s)
q=$.m
l=H.a([$.bG,$.bc],o)
H.a([],s)
$.$get$b().h(0,new G.d("Nerve Gas",l,q,r,0))
r=H.a(["Carbon Monoxide"],s)
q=$.m
l=H.a([$.bG,$.aQ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Carbon Monoxide",l,q,r,0))
r=H.a(["Neurotoxin"],s)
q=$.m
l=H.a([$.bG,$.a_],o)
H.a([],s)
$.$get$b().h(0,new G.d("Neurotoxin",l,q,r,0))
r=H.a(["Virulent"],s)
q=$.F
l=H.a([$.bG,$.aF],o)
H.a([],s)
$.$get$b().h(0,new G.d("Virulent",l,q,r,0))
r=H.a(["Toxic"],s)
q=$.F
l=H.a([$.bG,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Toxic",l,q,r,0))
r=H.a(["Laughing Gas","Nitrous","N20"],s)
q=$.m
l=H.a([$.bG,$.b3],o)
H.a([],s)
$.$get$b().h(0,new G.d("Laughing Gas",l,q,r,0))
r=H.a(["Amplified","Amped"],s)
q=$.F
l=H.a([$.ad,$.b5],o)
H.a([],s)
$.$get$b().h(0,new G.d("Amplified",l,q,r,0))
r=H.a(["Rap"],s)
q=$.m
l=H.a([$.ad,$.ap],o)
H.a([],s)
$.$get$b().h(0,new G.d("Rap",l,q,r,0))
r=H.a(["Saxaphone","Saxobeat"],s)
q=$.m
l=H.a([$.ad,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Saxaphone",l,q,r,0))
r=H.a(["Offbeat","Syncopated"],s)
q=$.m
l=H.a([$.ad,$.aQ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Offbeat",l,q,r,0))
r=H.a(["Piper's"],s)
q=$.ae
l=H.a([$.ad,$.bc],o)
H.a([],s)
$.$get$b().h(0,new G.d("Piper's",l,q,r,0))
r=H.a(["Melodic"],s)
q=$.m
l=H.a([$.ad,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Melodic",l,q,r,0))
r=H.a(["Smooth"],s)
q=$.m
l=H.a([$.ad,$.bb],o)
H.a([],s)
$.$get$b().h(0,new G.d("Smooth",l,q,r,0))
r=H.a(["Thrash"],s)
q=$.m
l=H.a([$.ad,$.bv],o)
H.a([],s)
$.$get$b().h(0,new G.d("Thrash",l,q,r,0))
r=H.a(["Chant","Chanting"],s)
q=$.m
l=H.a([$.ad,$.b_],o)
H.a([],s)
$.$get$b().h(0,new G.d("Chant",l,q,r,0))
r=H.a(["Chewy"],s)
q=$.m
l=H.a([$.bv,$.aD],o)
H.a([],s)
$.$get$b().h(0,new G.d("Chewy",l,q,r,0))
r=H.a(["Phony"],s)
q=$.m
l=H.a([$.bv,$.b2],o)
H.a([],s)
$.$get$b().h(0,new G.d("Phony",l,q,r,0))
r=H.a(["Doctor's"],s)
q=$.ae
l=H.a([$.a_,$.b_],o)
H.a([],s)
$.$get$b().h(0,new G.d("Doctor's",l,q,r,0))
r=H.a(["Straitjacketed"],s)
q=$.m
l=H.a([$.bc,$.b_],o)
H.a([],s)
$.$get$b().h(0,new G.d("Straitjacketed",l,q,r,0))
r=H.a(["Strapped"],s)
q=$.m
l=H.a([$.bc,$.aQ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Strapped",l,q,r,0))
r=H.a(["Bondage"],s)
q=$.m
l=H.a([$.bc,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Bondage",l,q,r,0))
r=H.a(["Sealed"],s)
q=$.F
l=H.a([$.bc,$.a8],o)
H.a([],s)
$.$get$b().h(0,new G.d("Sealed",l,q,r,0))
r=H.a(["Attractive"],s)
q=$.H
l=H.a([$.aI,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Attractive",l,q,r,0))
r=H.a(["Relaxed"],s)
q=$.F
l=H.a([$.bb,$.aF],o)
H.a([],s)
$.$get$b().h(0,new G.d("Relaxed",l,q,r,0))
r=H.a(["Loveseat"],s)
q=$.m
l=H.a([$.bb,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Loveseat",l,q,r,0))
r=H.a(["Doughy","Comfort Food"],s)
q=$.H
l=H.a([$.aD,$.bb],o)
H.a([],s)
$.$get$b().h(0,new G.d("Comfort Food",l,q,r,0))
r=H.a(["Yandere"],s)
q=$.H
l=H.a([$.aJ,$.b8],o)
H.a([],s)
$.$get$b().h(0,new G.d("Yandere",l,q,r,0))
r=H.a(["Tsundere"],s)
q=$.H
l=H.a([$.aJ,$.aQ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Tsundere",l,q,r,0))
r=H.a(["Disturbed"],s)
q=$.F
l=H.a([$.aF,$.aQ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Disturbed",l,q,r,0))
r=H.a(["Sapient"],s)
q=$.F
l=H.a([$.a_,$.aF],o)
H.a([],s)
$.$get$b().h(0,new G.d("Sapient",l,q,r,0))
r=H.a(["Lab Grown","Hydroponic"],s)
q=$.m
l=H.a([$.a_,$.aD],o)
H.a([],s)
$.$get$b().h(0,new G.d("Hydroponic",l,q,r,0))
r=H.a(["Free Range"],s)
q=$.m
l=H.a([$.aF,$.aD],o)
H.a([],s)
$.$get$b().h(0,new G.d("Free Range",l,q,r,0))
r=H.a(["Gentleman's","Lady's"],s)
q=$.ae
l=H.a([$.aJ,$.am],o)
H.a([],s)
$.$get$b().h(0,new G.d("Gentlemanly",l,q,r,0))
r=H.a(["Sapient"],s)
q=$.F
l=H.a([$.a_,$.aF],o)
H.a([],s)
$.$get$b().h(0,new G.d("Sapient",l,q,r,0))
r=H.a(["Sentimental","Anniversary"],s)
q=$.F
l=H.a([$.aJ,$.bh],o)
H.a([],s)
$.$get$b().h(0,new G.d("Sentimental",l,q,r,0))
r=H.a(["Doki-Doki"],s)
q=$.F
l=H.a([$.aJ,$.b5],o)
H.a([],s)
$.$get$b().h(0,new G.d("Doki-Doki",l,q,r,0))
r=H.a(["Doki-Doki Literature Club"],s)
q=$.F
l=H.a([$.aJ,$.b5,$.aO,$.ht],o)
H.a([],s)
$.$get$b().h(0,new G.d("Doki-Doki Literature Club",l,q,r,0))
r=H.a(["Banana"],s)
q=$.F
l=H.a([$.aD,$.b3],o)
H.a([],s)
$.$get$b().h(0,new G.d("Banana",l,q,r,0))
r=H.a(["Mana"],s)
q=$.F
l=H.a([$.aD,$.a8],o)
H.a([],s)
$.$get$b().h(0,new G.d("Mana",l,q,r,0))
r=H.a(["Homemade"],s)
q=$.F
l=H.a([$.aD,$.bh],o)
H.a([],s)
$.$get$b().h(0,new G.d("Homemade",l,q,r,0))
r=H.a(["Steampunk"],s)
q=$.F
l=H.a([$.a8,$.am],o)
H.a([],s)
$.$get$b().h(0,new G.d("Steampunk",l,q,r,0))
r=H.a(["Thor's Banana"],s)
q=$.F
l=H.a([$.aD,$.b3,$.ab,$.b5],o)
H.a([],s)
$.$get$b().h(0,new G.d("I Can't Stop Laughing",l,q,r,0))
r=H.a(["Soulsteel"],s)
q=$.p
l=H.a([$.A,$.bL],o)
H.a([],s)
$.$get$b().h(0,new G.d("Soulsteel",l,q,r,0))
r=H.a(["Ritual","Tribal"],s)
q=$.m
l=H.a([$.b9,$.aE],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ritual",l,q,r,0))
r=H.a(["Inflamable"],s)
q=$.F
l=H.a([$.bH,$.aE],o)
H.a([],s)
$.$get$b().h(0,new G.d("Inflamable",l,q,r,0))
r=H.a(["Crafting"],s)
q=$.m
l=H.a([$.a0,$.a_],o)
H.a([],s)
$.$get$b().h(0,new G.d("Crafting",l,q,r,0))
r=H.a(["Polluting"],s)
q=$.m
l=H.a([$.aP,$.aE],o)
H.a([],s)
$.$get$b().h(0,new G.d("Polluting",l,q,r,0))
r=H.a(["Insulated"],s)
q=$.F
l=H.a([$.bY,$.ab],o)
H.a([],s)
$.$get$b().h(0,new G.d("Insulated",l,q,r,0))
r=H.a(["Ash"],s)
q=$.p
l=H.a([$.K,$.aE],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ash",l,q,r,0))
r=H.a(["Delicate"],s)
q=$.F
l=H.a([$.K,$.b7],o)
H.a([],s)
$.$get$b().h(0,new G.d("Delicate",l,q,r,0))
r=H.a(["Glass Blower's"],s)
q=$.ae
l=H.a([$.b7,$.aE],o)
H.a([],s)
$.$get$b().h(0,new G.d("Glass Blower's",l,q,r,0))
r=H.a(["Sunburnt"],s)
q=$.F
l=H.a([$.bg,$.aE],o)
H.a([],s)
$.$get$b().h(0,new G.d("Sunburnt",l,q,r,0))
r=H.a(["Pyrebitten"],s)
q=$.F
l=H.a([$.aE,$.bk],o)
H.a([],s)
$.$get$b().h(0,new G.d("Pyrebitten",l,q,r,0))
r=H.a(["Mink"],s)
q=$.p
l=H.a([$.aJ,$.c4],o)
H.a([],s)
$.$get$b().h(0,new G.d("Mink",l,q,r,0))
r=H.a(["Wildfire"],s)
q=$.ae
l=H.a([$.b1,$.aE],o)
H.a([],s)
$.$get$b().h(0,new G.d("Wildfire",l,q,r,0))
r=H.a(["Scarred"],s)
q=$.F
l=H.a([$.b_,$.bI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Scarred",l,q,r,0))
r=H.a(["Hyper Realistic"],s)
q=$.H
l=H.a([$.bh,$.b8],o)
H.a([],s)
$.$get$b().h(0,new G.d("Hyper Realistic",l,q,r,0))
r=H.a(["Hestia's"],s)
q=$.ae
l=H.a([$.bM,$.aE],o)
H.a([],s)
$.$get$b().h(0,new G.d("Hestia's",l,q,r,0))
r=H.a(["Smoking"],s)
q=$.F
l=H.a([$.an,$.aE],o)
H.a([],s)
$.$get$b().h(0,new G.d("Smoking",l,q,r,0))
r=H.a(["Heating","Radiator","Furnace"],s)
q=$.F
l=H.a([$.aE,$.ab],o)
H.a([],s)
$.$get$b().h(0,new G.d("Radiator",l,q,r,0))
r=H.a(["Fuming"],s)
q=$.F
l=H.a([$.aE,$.bG],o)
H.a([],s)
$.$get$b().h(0,new G.d("Fuming",l,q,r,0))
r=H.a(["Firework","Sparkler"],s)
q=$.F
l=H.a([$.aE,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Firework",l,q,r,0))
r=H.a(["Panicky"],s)
q=$.F
l=H.a([$.aN,$.aF],o)
H.a([],s)
$.$get$b().h(0,new G.d("Panicky",l,q,r,0))
r=H.a(["Ornamental"],s)
q=$.F
l=H.a([$.bd,$.aI],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ornamental",l,q,r,0))
r=H.a(["Dear","Precious"],s)
q=$.F
l=H.a([$.bd,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Dear",l,q,r,0))
r=H.a(["Swaggy","Swag"],s)
q=$.F
l=H.a([$.bd,$.ap],o)
H.a([],s)
$.$get$b().h(0,new G.d("Swaggy",l,q,r,0))
r=H.a(["Uncanny"],s)
q=$.F
l=H.a([$.aQ,$.bh],o)
H.a([],s)
$.$get$b().h(0,new G.d("Uncanny",l,q,r,0))
r=H.a(["Talkative","Blabbering"],s)
q=$.F
l=H.a([$.b5,$.aF],o)
H.a([],s)
$.$get$b().h(0,new G.d("Talkative",l,q,r,0))
r=H.a(["Waifu","Catfish"],s)
q=$.F
l=H.a([$.aJ,$.b2],o)
H.a([],s)
$.$get$b().h(0,new G.d("Waifu",l,q,r,0))
r=H.a(["Charming"],s)
q=$.F
l=H.a([$.a8,$.aJ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Charming",l,q,r,0))
r=H.a(["God Tier"],s)
q=$.F
l=H.a([$.Q,$.V,$.bh],o)
H.a([],s)
$.$get$b().h(0,new G.d("God Tier",l,q,r,0))
r=H.a(["Cod Tier"],s)
q=$.F
l=H.a([$.Q,$.V,$.bh,$.b2,$.N],o)
H.a([],s)
$.$get$b().h(0,new G.d("Cod Tier",l,q,r,0))
r=H.a(["Dog Tier"],s)
q=$.F
l=H.a([$.Q,$.V,$.bh,$.c4],o)
H.a([],s)
$.$get$b().h(0,new G.d("Dog Tier",l,q,r,0))
r=H.a(["Cracked"],s)
q=$.F
l=H.a([$.aH,$.bH],o)
H.a([],s)
$.$get$b().h(0,new G.d("Cracked",l,q,r,0))
r=H.a(["Ruffled"],s)
q=$.F
l=H.a([$.bw,$.bH],o)
H.a([],s)
$.$get$b().h(0,new G.d("Ruffled",l,q,r,0))
r=H.a(["Mandrake"],s)
q=$.F
l=H.a([$.b1,$.b8],o)
H.a([],s)
$.$get$b().h(0,new G.d("Mandrake",l,q,r,0))
r=H.a(["Beanstalk"],s)
q=$.F
l=H.a([$.a8,$.b1],o)
H.a([],s)
$.$get$b().h(0,new G.d("Beanstalk",l,q,r,0))
r=H.a(["Unnerving"],s)
q=$.F
l=H.a([$.b8,$.aQ],o)
H.a([],s)
$.$get$b().h(0,new G.d("Unnerving",l,q,r,0))
r=H.a(["Chipped"],s)
q=$.F
o=H.a([$.bF,$.bH],o)
H.a([],s)
$.$get$b().h(0,new G.d("Chipped",o,q,r,0))
if($.pb==null){r=$.k6
q=$.aY
o=$.aG
n=$.b9
m=new U.af(r,"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.","Knucklekniveskind","Claws",!1,P.a2(null,null,null,p),0,3)
m.L("Claws",[q,o,n],"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.",!1,"Knucklekniveskind")
m.e.h(0,r)
$.pb=m}r=$.$get$ao();(r&&C.a).st(r,0)
r=$.$get$ao()
q=$.eo
o=$.aG
n=$.A
m=$.aY
l=new U.af(q,"Can you get more generic than a goddamned sword?","ShogunKindBestKind","Sword",!1,P.a2(null,null,null,p),0,3)
l.L("Sword",[o,n,m],"Can you get more generic than a goddamned sword?",!1,"ShogunKindBestKind")
l.e.h(0,q)
r.push(l)
l=$.$get$ao()
r=$.ou
q=$.ah
m=$.A
n=new U.af(r,"Did you just loot your toolbox or some shit?","WhackySmackySkullCrackyKind","Hammer",!1,P.a2(null,null,null,p),0,3)
n.L("Hammer",[q,m],"Did you just loot your toolbox or some shit?",!1,"WhackySmackySkullCrackyKind")
n.e.h(0,r)
l.push(n)
n=$.$get$ao()
l=$.oF
r=$.aW
m=$.A
q=new U.af(l,"How the fuck did you get your hands on this?","RootyTootyPointyShootyKind","Rifle",!1,P.a2(null,null,null,p),0,3)
q.L("Rifle",[r,m],"How the fuck did you get your hands on this?",!1,"RootyTootyPointyShootyKind")
q.e.h(0,l)
n.push(q)
q=$.$get$ao()
n=$.oB
l=$.aW
m=$.A
r=new U.af(n,"Why are guns so underpowered in games like this?","IWon\u2019tHesitateBitchKind","Pistol",!1,P.a2(null,null,null,p),0,3)
r.L("Pistol",[l,m],"Why are guns so underpowered in games like this?",!1,"IWon\u2019tHesitateBitchKind")
r.e.h(0,n)
q.push(r)
r=$.$get$ao()
q=$.r0
n=$.aW
m=$.A
l=new U.af(q,"There is a 98.23423434% chance that  this. Is my boomstick.","PointBlankAnnihilationKind","Shotgun",!1,P.a2(null,null,null,p),0,3)
l.L("Shotgun",[n,m],"There is a 98.23423434% chance that  this. Is my boomstick.",!1,"PointBlankAnnihilationKind")
l.e.h(0,q)
r.push(l)
l=$.$get$ao()
r=$.ok
q=$.aY
m=$.aG
n=$.A
o=new U.af(r,"So. It's not a sword. And it's not a dagger. How descriptive.","WaitIsThisBestKind?","Blade",!1,P.a2(null,null,null,p),0,3)
o.L("Blade",[q,m,n],"So. It's not a sword. And it's not a dagger. How descriptive.",!1,"WaitIsThisBestKind?")
o.e.h(0,r)
l.push(o)
o=$.$get$ao()
l=$.op
r=$.aY
n=$.aG
m=$.A
q=new U.af(l,"For those who can't handle a sword. Or wanna be more stealthy.","ShanksKind","Dagger",!1,P.a2(null,null,null,p),0,3)
q.L("Dagger",[r,n,m],"For those who can't handle a sword. Or wanna be more stealthy.",!1,"ShanksKind")
q.e.h(0,l)
o.push(q)
q=$.$get$ao()
o=$.f0
l=$.ah
m=$.bF
n=new U.af(o,"No. Fuck you. I refuse to believe that this is a weapon.","ThisIsTheDevilKind","Fancysanta",!1,P.a2(null,null,null,p),0,3)
n.L("Fancysanta",[l,m],"No. Fuck you. I refuse to believe that this is a weapon.",!1,"ThisIsTheDevilKind")
n.e.h(0,o)
q.push(n)
n=$.$get$ao()
q=$.r3
o=$.aG
m=$.A
l=new U.af(q,"Do you think it was a pun on sickle cell anemia?","HalfOfCommunismKind","Sickle",!1,P.a2(null,null,null,p),0,3)
l.L("Sickle",[o,m],"Do you think it was a pun on sickle cell anemia?",!1,"HalfOfCommunismKind")
l.e.h(0,q)
n.push(l)
l=$.$get$ao()
n=$.qB
q=$.aG
m=$.A
o=new U.af(n,"Why are fleshbags so scared of slightly deader flesh bags?","TreeGenocideKind","Chainsaw",!1,P.a2(null,null,null,p),0,3)
o.L("Chainsaw",[q,m],"Why are fleshbags so scared of slightly deader flesh bags?",!1,"TreeGenocideKind")
o.e.h(0,n)
l.push(o)
o=$.$get$ao()
l=$.qH
n=$.aY
m=$.A
q=new U.af(l,"It's a fork. Useful for eating, if that's your thing.","ThisIsForFoodKind","Fork",!1,P.a2(null,null,null,p),0,3)
q.L("Fork",[n,m],"It's a fork. Useful for eating, if that's your thing.",!1,"ThisIsForFoodKind")
q.e.h(0,l)
o.push(q)
q=$.$get$ao()
o=$.oA
l=$.bw
m=$.bk
n=new U.af(o,"Shit. Better get JR. They'll want to see this.","PsychologyAndExtremeViolenceKind","Pigeon",!1,P.a2(null,null,null,p),0,3)
n.L("Pigeon",[l,m],"Shit. Better get JR. They'll want to see this.",!1,"PsychologyAndExtremeViolenceKind")
n.e.h(0,o)
q.push(n)
n=$.$get$ao()
q=$.dL
o=$.bX
m=$.aH
l=$.ah
r=new U.af(q,"Now we're talking. That is some grade A creative use of your storage room right there. ","HardFootballKind","Bowling Ball",!1,P.a2(null,null,null,p),0,3)
r.L("Bowling Ball",[o,m,l],"Now we're talking. That is some grade A creative use of your storage room right there. ",!1,"HardFootballKind")
r.e.h(0,q)
n.push(r)
r=$.$get$ao()
n=$.oq
q=$.aP
l=$.bM
m=new U.af(n,"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.","DnDKind","Dice",!1,P.a2(null,null,null,p),0,3)
m.L("Dice",[q,l],"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.",!1,"DnDKind")
m.e.h(0,n)
r.push(m)
m=$.$get$ao()
r=$.oz
n=$.A
l=$.aY
q=new U.af(r,"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.","ThisIsForClothesNotCombatKind","Needle",!1,P.a2(null,null,null,p),0,3)
q.L("Needle",[n,l],"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.",!1,"ThisIsForClothesNotCombatKind")
q.e.h(0,r)
m.push(q)
q=$.$get$ao()
m=$.r5
r=$.a0
l=$.ah
n=new U.af(m,"Very magey. 7/10.","ShittyWizardKind","Staff",!1,P.a2(null,null,null,p),0,3)
n.L("Staff",[r,l],"Very magey. 7/10.",!1,"ShittyWizardKind")
n.e.h(0,m)
q.push(n)
n=$.$get$ao()
q=$.r7
m=$.bc
l=$.N
r=new U.af(q,"Probably p hard to use.","ImKinkshamingKind","Whip",!1,P.a2(null,null,null,p),0,3)
r.L("Whip",[m,l],"Probably p hard to use.",!1,"ImKinkshamingKind")
r.e.h(0,q)
n.push(r)
r=$.$get$ao()
n=$.ol
q=$.aW
l=$.aH
m=$.N
o=$.aY
k=new U.af(n,"Your inferior meat body cannot use this to its maximum potential.","ImpossibleToShootYourselfKind","Bow",!1,P.a2(null,null,null,p),0,3)
k.L("Bow",[q,l,m,o],"Your inferior meat body cannot use this to its maximum potential.",!1,"ImpossibleToShootYourselfKind")
k.e.h(0,n)
r.push(k)
k=$.$get$ao()
r=$.ht
n=$.a0
o=$.ah
m=new U.af(r,"Easy to use even for weak fleshy muscles.","CavemanKind","Club",!1,P.a2(null,null,null,p),0,3)
m.L("Club",[n,o],"Easy to use even for weak fleshy muscles.",!1,"CavemanKind")
m.e.h(0,r)
k.push(m)
m=$.$get$ao()
k=$.hr
r=$.a0
o=new U.af(k,"God damn Wastes, use normal specibi. ","BeatEmDeadAndCleanTheSceneKind","Broom",!1,P.a2(null,null,null,p),0,3)
o.L("Broom",[r,k],"God damn Wastes, use normal specibi. ",!1,"BeatEmDeadAndCleanTheSceneKind")
o.e.h(0,k)
m.push(o)
o=$.$get$ao()
m=$.aO
k=$.K
r=$.ah
n=new U.af(m,"You better fucking hope this is either heavy or magic as fuck.","SharpenTheLeatherBoundKind","Book",!1,P.a2(null,null,null,p),0,3)
n.L("Book",[k,r],"You better fucking hope this is either heavy or magic as fuck.",!1,"SharpenTheLeatherBoundKind")
n.e.h(0,m)
o.push(n)
n=$.$get$ao()
o=$.qX
m=$.A
r=$.ah
k=new U.af(o,"Okay. There's a story here, I just know it.","TheGreatestFuckingWeaponKind","Road Sign",!1,P.a2(null,null,null,p),0,3)
k.L("Road Sign",[m,r],"Okay. There's a story here, I just know it.",!1,"TheGreatestFuckingWeaponKind")
k.e.h(0,o)
n.push(k)
k=$.$get$ao()
n=$.oj
o=$.aG
r=$.A
m=$.ah
l=new U.af(n,"Legit.","TreeMassacreKind","Axe",!1,P.a2(null,null,null,p),0,3)
l.L("Axe",[o,r,m],"Legit.",!1,"TreeMassacreKind")
l.e.h(0,n)
k.push(l)
l=$.$get$ao()
k=$.qR
n=$.a0
m=$.aY
r=new U.af(k,"Good for chest stabs.","UseOnHorsebackKind","Lance",!1,P.a2(null,null,null,p),0,3)
r.L("Lance",[n,m],"Good for chest stabs.",!1,"UseOnHorsebackKind")
r.e.h(0,k)
l.push(r)
r=$.$get$ao()
l=$.en
k=$.A
m=$.ah
n=new U.af(l,"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.","OnlyWeaklingsNeedShieldsKind","Shield",!1,P.a2(null,null,null,p),0,3)
n.L("Shield",[k,m],"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.",!1,"OnlyWeaklingsNeedShieldsKind")
n.e.h(0,l)
r.push(n)
n=$.$get$ao()
r=$.qA
l=$.a0
m=$.ah
k=new U.af(r,"Good for turning disabilities to strengths.","AnAncientEvilResidesWithinThisKind","Cane",!1,P.a2(null,null,null,p),0,3)
k.L("Cane",[l,m],"Good for turning disabilities to strengths.",!1,"AnAncientEvilResidesWithinThisKind")
k.e.h(0,r)
n.push(k)
k=$.$get$ao()
n=$.r8
r=$.aP
m=$.ah
l=new U.af(n,"It's a yo-yo. Figure it out.","IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind","Yo-Yo",!1,P.a2(null,null,null,p),0,3)
l.L("Yo-Yo",[r,m],"It's a yo-yo. Figure it out.",!1,"IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind")
l.e.h(0,n)
k.push(l)
l=$.$get$ao()
k=$.r4
n=$.a0
m=$.aW
r=new U.af(k,"What are you gonna use for amo?","IsThisAFuckingJockStrapKind","Sling",!1,P.a2(null,null,null,p),0,3)
r.L("Sling",[n,m],"What are you gonna use for amo?",!1,"IsThisAFuckingJockStrapKind")
r.e.h(0,k)
l.push(r)
r=$.$get$ao()
l=$.r2
k=$.A
m=$.aG
n=new U.af(l,"So edgey.","NarutoKind","Shuriken",!1,P.a2(null,null,null,p),0,3)
n.L("Shuriken",[k,m],"So edgey.",!1,"NarutoKind")
n.e.h(0,l)
r.push(n)
n=$.$get$ao()
r=$.ox
l=$.A
m=$.aW
k=new U.af(r,"No. SERIOUSLY, where the fuck are all you getting these things.","ITSSOFUCKINGLOUDKIND","Machine Gun",!1,P.a2(null,null,null,p),0,3)
k.L("Machine Gun",[l,m],"No. SERIOUSLY, where the fuck are all you getting these things.",!1,"ITSSOFUCKINGLOUDKIND")
k.e.h(0,r)
n.push(k)
k=$.$get$ao()
n=$.k7
r=$.A
m=$.bl
l=new U.af(n,"Jegus fuck WHY do you HAVE this?","HandheldSunBombKind","Grenade",!1,P.a2(null,null,null,p),0,3)
l.L("Grenade",[r,m],"Jegus fuck WHY do you HAVE this?",!1,"HandheldSunBombKind")
l.e.h(0,n)
k.push(l)
l=$.$get$ao()
k=$.dL
n=$.bY
m=$.ah
r=new U.af(k,"...I refuse to believe you have done a single point of damage with this unupgraded. ","HahahBallsKind","Ball",!1,P.a2(null,null,null,p),0,3)
r.L("Ball",[n,m],"...I refuse to believe you have done a single point of damage with this unupgraded. ",!1,"HahahBallsKind")
r.e.h(0,k)
l.push(r)
r=$.$get$ao()
l=$.r6
k=$.A
m=$.aY
n=new U.af(l,"Fuck you, just call it a trident.","SheWasAGoodCharacterDontYouDareSayOtherwiseKind","3dent",!1,P.a2(null,null,null,p),0,3)
n.L("3dent",[k,m],"Fuck you, just call it a trident.",!1,"SheWasAGoodCharacterDontYouDareSayOtherwiseKind")
n.e.h(0,l)
r.push(n)
n=$.$get$ao()
r=$.on
l=$.K
m=$.aG
k=new U.af(r,"An X-Men fan, I see.","YuGiOhKind","Card",!1,P.a2(null,null,null,p),0,3)
k.L("Card",[l,m],"An X-Men fan, I see.",!1,"YuGiOhKind")
k.e.h(0,r)
n.push(k)
k=$.$get$ao()
n=$.or
r=$.A
m=$.ah
l=new U.af(n,"Go with what you know, I guess.","UnstoppableKind","Frying Pan",!1,P.a2(null,null,null,p),0,3)
l.L("Frying Pan",[r,m],"Go with what you know, I guess.",!1,"UnstoppableKind")
l.e.h(0,n)
k.push(l)
l=$.$get$ao()
k=$.hu
n=$.bb
m=$.N
r=new U.af(k,"So. Do you have to wait for the enemy to fall asleep?","SuffocateYourEnemiesKind","Pillow",!1,P.a2(null,null,null,p),0,3)
r.L("Pillow",[n,m],"So. Do you have to wait for the enemy to fall asleep?",!1,"SuffocateYourEnemiesKind")
r.e.h(0,k)
l.push(r)
r=$.$get$ao()
l=$.f_
k=$.A
m=$.bc
n=new U.af(l,"This could be metal as fuck.","BikerGangKind","Chain",!1,P.a2(null,null,null,p),0,3)
n.L("Chain",[k,m],"This could be metal as fuck.",!1,"BikerGangKind")
n.e.h(0,l)
r.push(n)
n=$.$get$ao()
r=$.oH
l=$.A
m=$.ah
k=new U.af(r,"Hell yes, engineers!","IfYouCanDodgeAWrenchYouCanDodgeABallKind","Wrench",!1,P.a2(null,null,null,p),0,3)
k.L("Wrench",[l,m],"Hell yes, engineers!",!1,"IfYouCanDodgeAWrenchYouCanDodgeABallKind")
k.e.h(0,r)
n.push(k)
k=$.$get$ao()
n=$.r1
r=$.A
m=$.ah
l=new U.af(n,"Dual purpose.","HideTheBodiesKind","Shovel",!1,P.a2(null,null,null,p),0,3)
l.L("Shovel",[r,m],"Dual purpose.",!1,"HideTheBodiesKind")
l.e.h(0,n)
k.push(l)
l=$.$get$ao()
k=$.oG
n=$.a0
m=$.ah
r=new U.af(k,"There is a 99.9999234% chance cartoons lied to you about this being a weapon.","ThereWillBeNoBitchingInMyMotherFuckingKitchenKind","Rolling Pin",!1,P.a2(null,null,null,p),0,3)
r.L("Rolling Pin",[n,m],"There is a 99.9999234% chance cartoons lied to you about this being a weapon.",!1,"ThereWillBeNoBitchingInMyMotherFuckingKitchenKind")
r.e.h(0,k)
l.push(r)
r=$.$get$ao()
l=$.oD
k=$.a0
m=$.aN
n=new U.af(l,"Fuck you for picking this.","KermitsGoneBadKind","Puppet",!1,P.a2(null,null,null,p),0,3)
n.L("Puppet",[k,m],"Fuck you for picking this.",!1,"KermitsGoneBadKind")
n.e.h(0,l)
r.push(n)
n=$.$get$ao()
r=$.oE
l=$.A
m=$.aG
k=new U.af(r,"So fucking edgey.","KermitsGoneBadKind","Razor",!1,P.a2(null,null,null,p),0,3)
k.L("Razor",[l,m],"So fucking edgey.",!1,"KermitsGoneBadKind")
k.e.h(0,r)
n.push(k)
k=$.$get$ao()
n=$.k9
r=$.A
m=$.a_
l=new U.af(n,"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.","MightierThanTheSwordKind","Pen",!1,P.a2(null,null,null,p),0,3)
l.L("Pen",[r,m],"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.",!1,"MightierThanTheSwordKind")
l.e.h(0,n)
k.push(l)
l=$.$get$ao()
k=$.hs
n=$.aH
m=$.bX
r=new U.af(k,"The meme is strong with this one.","TheShogunsStatuetteKind","Bust",!1,P.a2(null,null,null,p),0,3)
r.L("Bust",[n,m],"The meme is strong with this one.",!1,"TheShogunsStatuetteKind")
r.e.h(0,k)
l.push(r)
r=$.$get$ao()
l=$.qK
k=$.a0
m=$.ah
n=new U.af(l,"Seems legit.","NineIronToTheFuckingSkullKind","Golf Club",!1,P.a2(null,null,null,p),0,3)
n.L("Golf Club",[k,m],"Seems legit.",!1,"NineIronToTheFuckingSkullKind")
n.e.h(0,l)
r.push(n)
n=$.$get$ao()
r=$.ow
l=$.A
m=$.aG
k=new U.af(r,"Don't listen to ABJ, this is NOT a useful weapon.","ShanksButHesAHousewifeKind","Knife",!1,P.a2(null,null,null,p),0,3)
k.L("Knife",[l,m],"Don't listen to ABJ, this is NOT a useful weapon.",!1,"ShanksButHesAHousewifeKind")
k.e.h(0,r)
n.push(k)
k=$.$get$ao()
n=$.r_
r=$.A
m=$.aG
l=new U.af(n,"Either you are a psycho or these are some VERY big fucking scissors.","RunWithTheseKind","Scissors",!1,P.a2(null,null,null,p),0,3)
l.L("Scissors",[r,m],"Either you are a psycho or these are some VERY big fucking scissors.",!1,"RunWithTheseKind")
l.e.h(0,n)
k.push(l)
l=$.$get$ao()
k=$.qZ
n=$.A
m=$.bX
r=new U.af(k,"Treat it well or it will never reach Vaulthalla.","TomAndFuckingJerryThemKind","Safe",!1,P.a2(null,null,null,p),0,3)
r.L("Safe",[n,m],"Treat it well or it will never reach Vaulthalla.",!1,"TomAndFuckingJerryThemKind")
r.e.h(0,k)
l.push(r)
r=$.$get$ao()
l=$.d_
k=$.a0
m=$.ah
p=new U.af(l,"Bitches love sticks","WeaponiseTheTreesKind","Stick",!1,P.a2(null,null,null,p),0,3)
p.L("Stick",[k,m],"Bitches love sticks",!1,"WeaponiseTheTreesKind")
p.e.h(0,l)
r.push(p)
p=new S.bs("Duttle","Dut",null,null)
$.$get$bK().push(p)
$.qi=p
p=new S.bs("Salamander","GLUB",null,null)
$.$get$bK().push(p)
$.oa=p
p=new S.bs("Crocodile","NAK",null,null)
$.$get$bK().push(p)
$.dv=p
p=new S.bs("Iguana","thip",null,null)
$.$get$bK().push(p)
$.dI=p
p=new S.bs("Turtle","click",null,null)
$.$get$bK().push(p)
$.eh=p
p=new S.bs("Skeleton","rattle",null,null)
$.$get$bK().push(p)
$.dj=p
p=new S.bs("Robot","BEEP",null,null)
$.$get$bK().push(p)
$.ef=p
p=new S.bs("Chameleon","BLEP",null,null)
$.$get$bK().push(p)
$.h2=p
p=new S.bs("Axolotl","BARP",null,null)
$.$get$bK().push(p)
$.o2=p
p=new S.bs("Lizard","bleb",null,null)
$.$get$bK().push(p)
$.jC=p
p=new S.bs("Snake","hiss",null,null)
$.$get$bK().push(p)
$.jG=p
p=new S.bs("Alligator","nak",null,null)
$.$get$bK().push(p)
$.h1=p
p=new S.bs("Mole","snuff",null,null)
$.$get$bK().push(p)
$.qj=p
p=new S.bs("Bird","tweet",null,null)
$.$get$bK().push(p)
$.jw=p
p=new S.bs("Wolf","howl",null,null)
$.$get$bK().push(p)
$.jI=p
p=new S.bs("Newt","skitter",null,null)
$.$get$bK().push(p)
$.qk=p
p=new S.bs("Spider","skitter",null,null)
$.$get$bK().push(p)
$.jH=p
p=new S.bs("Cupid","flappa",null,null)
$.$get$bK().push(p)
$.h3=p
p=new S.bs("Dragon","roar",null,null)
$.$get$bK().push(p)
$.ed=p
p=new S.fN("Prospitian","murmur",null,null)
$.$get$bK().push(p)
$.o7=p
p=new S.fN("Dersite","mutter",null,null)
$.$get$bK().push(p)
$.o6=p
$.ql=H.a([$.jG,$.h1,$.qk,$.oa,$.dI,$.dv,$.eh,$.h2,$.o2,$.jC],[S.bs])
$.eX=new T.bO(0,"spices")
p=$.ub
$.e9=new T.bO(p,"fresh baked bread")
$.c9=new T.bO(p,"sweetness")
$.c3=new T.bO(p,"nature")
$.jF=new T.bO(0,"salt")
r=$.ua
$.cL=new T.bO(r,"rot")
$.u8=new T.bO(r,"feet")
$.ee=new T.bO(0,"oil")
$.o4=new T.bO(0,"chlorine")
$.eV=new T.bO(0,"nothing in particular")
$.dH=new T.bO(0,"gunpowder")
$.eU=new T.bO(0,"must")
$.cM=new T.bO(p,"zoo animals")
$.dk=new T.bO(r,"sweat")
$.h6=new T.bO(0,"ozone")
$.c7=new T.bO(0,"deceit")
$.cV=new T.bO(r,"blood")
$.eg=new T.bO(r,"smoke")
$.bW=new K.bE(r,"creepy")
$.b6=new K.bE(p,"calm")
$.cf=new K.bE(r,"frantic")
$.h5=new K.bE(0,"like nothing")
$.c8=new K.bE(p,"energizing")
$.cg=new K.bE(0,"studious")
$.cK=new K.bE(0,"dangerous")
$.de=new K.bE(0,"glamorous")
$.eW=new K.bE(0,"romantic")
$.ec=new K.bE(p,"creative")
$.jD=new K.bE(0,"lucky")
$.df=new K.bE(0,"happy")
$.dg=new K.bE(0,"heroic")
$.dK=new K.bE(r,"stupid")
$.jD=new K.bE(0,"lucky")
$.qh=new K.bE(0,"claustrophobic")
$.jE=new K.bE(0,"overheated")
$.jx=new K.bE(r,"confusing")
$.cv=new K.bE(0,"contemplatative")
$.cu=new M.bn(0,"clanking")
$.cw=new M.bn(0,"laughing")
$.bf=new M.bn(p,"rustling")
$.dJ=new M.bn(r,"screaming")
$.jA=new M.bn(r,"foot steps")
$.ea=new M.bn(r,"beeping")
$.oc=new M.bn(r,"whispering")
$.eb=new M.bn(0,"clacking")
$.co=new M.bn(0,"applause")
$.dw=new M.bn(0,"jazz")
$.jy=new M.bn(0,"disco")
$.h4=new M.bn(0,"drums")
$.jz=new M.bn(0,"echoing")
$.o9=new M.bn(r,"roaring")
$.jB=new M.bn(r,"gunfire")
$.ck=new M.bn(0,"music")
$.ob=new M.bn(0,"singing")
$.o3=new M.bn(0,"chanting")
$.ei=new M.bn(0,"whistling")
$.dh=new M.bn(p,"nature")
$.o5=new M.bn(0,"croaking")
$.di=new M.bn(0,"silence")
$.o8=new M.bn(0,"pulsing")
$.qm=new M.bn(0,"ticking")
r=[X.D,P.R]
q=A.a7
p=E.I
o=[p]
n=[A.cG]
m=new S.kq(0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,0.5,"Knight",new H.o(0,null,null,null,null,null,0,r),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.a2("Knight",3,!0,!1)
$.A7=m
m=P.f(H.a([new E.I($.c5,0.4,!1)],o),p)
m=new S.lM(["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,m,0.5,"Seer",new H.o(0,null,null,null,null,null,0,r),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.a2("Seer",6,!0,!1)
$.Ai=m
m=new O.iG(["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],!1,!1,!1,!1,!0,!1,0.5,"Bard",new H.o(0,null,null,null,null,null,0,r),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.a2("Bard",9,!0,!1)
$.A2=m
m=new B.jV(0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,0.5,"Heir",new H.o(0,null,null,null,null,null,0,r),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.a2("Heir",8,!0,!1)
$.A6=m
m=new U.kI(["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,0.5,"Maid",new H.o(0,null,null,null,null,null,0,r),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.a2("Maid",0,!0,!1)
$.Aa=m
m=new N.lB(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,0.5,"Rogue",new H.o(0,null,null,null,null,null,0,r),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.a2("Rogue",4,!0,!1)
$.Ae=m
m=new V.lg(0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,0.5,"Page",new H.o(0,null,null,null,null,null,0,r),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.a2("Page",1,!0,!1)
$.Ac=m
m=new U.mi(["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,0.5,"Thief",new H.o(0,null,null,null,null,null,0,r),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.a2("Thief",7,!0,!1)
$.Ak=m
m=P.f(H.a([new E.I($.c5,0.1,!1)],o),p)
m=new R.m8(["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,m,0.5,"Sylph",new H.o(0,null,null,null,null,null,0,r),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.a2("Sylph",5,!0,!1)
$.Aj=m
m=new N.lq(1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,0.5,"Prince",new H.o(0,null,null,null,null,null,0,r),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.a2("Prince",10,!0,!1)
$.Ad=m
m=P.f(H.a([new E.I($.c5,0.1,!1)],o),p)
m=new M.mA(["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,m,0.5,"Witch",new H.o(0,null,null,null,null,null,0,r),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.a2("Witch",11,!0,!1)
$.rz=m
m=P.f(H.a([new E.I($.c5,0.4,!1)],o),p)
m=new S.kH(["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,m,0.5,"Mage",new H.o(0,null,null,null,null,null,0,r),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.a2("Mage",2,!0,!1)
$.A9=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],s)
l=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],s)
k=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],s)
j=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],s)
i=P.f(H.a([new E.I($.c5,3,!1),new E.I($.pc,-2,!1)],o),p)
m=new E.mt(m,l,k,j,!1,!0,!1,!1,!0,!1,i,0.5,"Waste",new H.o(0,null,null,null,null,null,0,r),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.a2("Waste",12,!1,!1)
$.ry=m
m=new Y.lK(["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,0.5,"Scout",new H.o(0,null,null,null,null,null,0,r),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.a2("Scout",13,!1,!1)
$.Ag=m
m=P.f(H.a([new E.I($.c5,0.5,!1)],o),p)
m=new L.lL(["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,m,0.5,"Scribe",new H.o(0,null,null,null,null,null,0,r),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.a2("Scribe",15,!1,!1)
$.Ah=m
m=P.f(H.a([new E.I($.c5,0.5,!1)],o),p)
m=new E.lH(["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,m,0.5,"Sage",new H.o(0,null,null,null,null,null,0,r),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.a2("Sage",14,!1,!1)
$.Af=m
m=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],s)
m=new Y.jS(m,!0,!1,!1,!1,!1,!0,0.5,"Guide",new H.o(0,null,null,null,null,null,0,r),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.a2("Guide",16,!1,!1)
$.A5=m
m=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],s)
l=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],s)
k=P.f(H.a([new E.I($.c5,3,!1)],o),p)
m=new Y.jR(m,l,!1,!0,!1,!1,!0,!1,k,0.5,"Grace",new H.o(0,null,null,null,null,null,0,r),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.a2("Grace",17,!1,!1)
$.A4=m
m=P.f(H.a([new E.I($.c5,0.1,!1)],o),p)
m=new E.kV(["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,m,0.5,"Muse",new H.o(0,null,null,null,null,null,0,r),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.a2("Muse",18,!1,!1)
$.Ab=m
m=Q.E(null,null,q)
l=P.f(H.a([new E.I($.c5,0.1,!1)],o),p)
m=new Z.kG(2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,m,l,0.5,"Lord",new H.o(0,null,null,null,null,null,0,r),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.a2("Lord",19,!1,!1)
$.A8=m
$.rx=T.A1("Null",255,!1,!0)
m=P.f(H.a([new E.I($.c5,1.5,!1),new E.I($.r,3,!1),new E.I($.c0,-0.5,!1)],o),p)
m=new Z.iN(["BROBLERONE","BROTEL RWANDA","BRO-YO MA"],["busting out, and I quote, 'the mad stunts all wicked up-ins'","trying to get hella pumped about houses or some noise","getting mud on their doll's dress or whatever"],["not actually playing the game, but giving it 1.5 out of 5 hats to keep it real","giving a shout out to their boy Dennis who was over the other day","helping their consorts live off the land, for big ups to Mother Earth, yo","getting so wasted. haha, I mean DAMN"],!1,!1,!1,!0,!0,!1,["Brother","Bored","Bugger","Badass","Bothersome"],m,0.1,2,0.5,"Bro",new H.o(0,null,null,null,null,null,0,r),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],s),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],s),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],s),H.a([],o),H.a([],n),1)
m.a2("Bro",20,!1,!1)
$.A3=m
m=A.ct
l=P.a6
k=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.aq,L.e("#00ff00"),!0)
k.j(0,$.as,L.e("#EFEFEF"),!0)
k.j(0,$.ar,L.e("#DEDEDE"),!0)
k.j(0,$.aC,L.e("#FF2106"),!0)
k.j(0,$.aB,L.e("#B01200"),!0)
k.j(0,$.au,L.e("#2F2F30"),!0)
k.j(0,$.av,L.e("#1D1D1D"),!0)
k.j(0,$.at,L.e("#080808"),!0)
k.j(0,$.az,L.e("#030303"),!0)
k.j(0,$.ay,L.e("#242424"),!0)
k.j(0,$.ax,L.e("#333333"),!0)
k.j(0,$.aw,L.e("#141414"),!0)
j=P.f(H.a(["Frogs"],s),t)
i=P.f(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],s),t)
h=P.f(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],s),t)
g=P.f(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],s),t)
f=P.f(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],s),t)
e=P.f(H.a([new E.I($.cQ,2,!0),new E.I($.ak,1,!0),new E.I($.aU,-2,!0)],o),p)
d=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
d.j(0,$.aq,L.e("#FF9B00"),!0)
d.j(0,$.as,L.e("#FF9B00"),!0)
d.j(0,$.ar,L.e("#FF8700"),!0)
d.j(0,$.aC,L.e("#7F7F7F"),!0)
d.j(0,$.aB,L.e("#727272"),!0)
d.j(0,$.au,L.e("#A3A3A3"),!0)
d.j(0,$.av,L.e("#999999"),!0)
d.j(0,$.at,L.e("#898989"),!0)
d.j(0,$.az,L.e("#EFEFEF"),!0)
d.j(0,$.ay,L.e("#DBDBDB"),!0)
d.j(0,$.ax,L.e("#C6C6C6"),!0)
d.j(0,$.aw,L.e("#ADADAD"),!0)
d=new N.lW(k,j,i,h,g,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],e,0.5,0,new H.o(0,null,null,null,null,null,0,r),null,"","",!1,"Space",null,!0,!1,!1,!1,!0,1,d,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.E(null,null,q))
d.W(0,"Space",!0,!1)
$.iy=d
d=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
d.j(0,$.aq,L.e("#ff0000"),!0)
d.j(0,$.as,L.e("#FF2106"),!0)
d.j(0,$.ar,L.e("#AD1604"),!0)
d.j(0,$.aC,L.e("#030303"),!0)
d.j(0,$.aB,L.e("#242424"),!0)
d.j(0,$.au,L.e("#510606"),!0)
d.j(0,$.av,L.e("#3C0404"),!0)
d.j(0,$.at,L.e("#1F0000"),!0)
d.j(0,$.az,L.e("#B70D0E"),!0)
d.j(0,$.ay,L.e("#970203"),!0)
d.j(0,$.ax,L.e("#8E1516"),!0)
d.j(0,$.aw,L.e("#640707"),!0)
e=P.f(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],s),t)
f=P.f(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],s),t)
g=P.f(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],s),t)
h=P.f(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],s),t)
i=P.f(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],s),t)
j=P.f(H.a([new E.I($.bT,2,!0),new E.I($.aU,1,!0),new E.I($.bo,-2,!0)],o),p)
k=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.aq,L.e("#FF9B00"),!0)
k.j(0,$.as,L.e("#FF9B00"),!0)
k.j(0,$.ar,L.e("#FF8700"),!0)
k.j(0,$.aC,L.e("#7F7F7F"),!0)
k.j(0,$.aB,L.e("#727272"),!0)
k.j(0,$.au,L.e("#A3A3A3"),!0)
k.j(0,$.av,L.e("#999999"),!0)
k.j(0,$.at,L.e("#898989"),!0)
k.j(0,$.az,L.e("#EFEFEF"),!0)
k.j(0,$.ay,L.e("#DBDBDB"),!0)
k.j(0,$.ax,L.e("#C6C6C6"),!0)
k.j(0,$.aw,L.e("#ADADAD"),!0)
k=new N.mj(0.7,d,e,f,g,h,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",i,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],j,0.5,1,new H.o(0,null,null,null,null,null,0,r),null,"","",!1,"Time",null,!0,!1,!1,!1,!0,1,k,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.E(null,null,q))
k.W(1,"Time",!0,!1)
$.pW=k
k=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.aq,L.e("#3399ff"),!0)
k.j(0,$.as,L.e("#10E0FF"),!0)
k.j(0,$.ar,L.e("#00A4BB"),!0)
k.j(0,$.aC,L.e("#FEFD49"),!0)
k.j(0,$.aB,L.e("#D6D601"),!0)
k.j(0,$.au,L.e("#0052F3"),!0)
k.j(0,$.av,L.e("#0046D1"),!0)
k.j(0,$.at,L.e("#003396"),!0)
k.j(0,$.az,L.e("#0087EB"),!0)
k.j(0,$.ay,L.e("#0070ED"),!0)
k.j(0,$.ax,L.e("#006BE1"),!0)
k.j(0,$.aw,L.e("#0054B0"),!0)
j=P.f(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],s),t)
i=P.f(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],s),t)
h=P.f(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],s),t)
g=P.f(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],s),t)
f=P.f(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],t)
e=P.f(H.a([new E.I($.aU,2,!0),new E.I($.aV,1,!0),new E.I($.ak,-1,!0),new E.I($.c0,-1,!0),new E.I($.c5,0.05,!1)],o),p)
d=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
d.j(0,$.aq,L.e("#FF9B00"),!0)
d.j(0,$.as,L.e("#FF9B00"),!0)
d.j(0,$.ar,L.e("#FF8700"),!0)
d.j(0,$.aC,L.e("#7F7F7F"),!0)
d.j(0,$.aB,L.e("#727272"),!0)
d.j(0,$.au,L.e("#A3A3A3"),!0)
d.j(0,$.av,L.e("#999999"),!0)
d.j(0,$.at,L.e("#898989"),!0)
d.j(0,$.az,L.e("#EFEFEF"),!0)
d.j(0,$.ay,L.e("#DBDBDB"),!0)
d.j(0,$.ax,L.e("#C6C6C6"),!0)
d.j(0,$.aw,L.e("#ADADAD"),!0)
d=new T.iM(0.3,k,j,i,h,g,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],f,e,0.5,2,new H.o(0,null,null,null,null,null,0,r),null,"","",!1,"Breath",null,!0,!1,!1,!1,!0,1,d,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.E(null,null,q))
d.W(2,"Breath",!0,!1)
$.tx=d
d=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
d.j(0,$.aq,L.e("#003300"),!0)
d.j(0,$.as,L.e("#0F0F0F"),!0)
d.j(0,$.ar,L.e("#010101"),!0)
d.j(0,$.aC,L.e("#E8C15E"),!0)
d.j(0,$.aB,L.e("#C7A140"),!0)
d.j(0,$.au,L.e("#1E211E"),!0)
d.j(0,$.av,L.e("#141614"),!0)
d.j(0,$.at,L.e("#0B0D0B"),!0)
d.j(0,$.az,L.e("#204020"),!0)
d.j(0,$.ay,L.e("#11200F"),!0)
d.j(0,$.ax,L.e("#192C16"),!0)
d.j(0,$.aw,L.e("#121F10"),!0)
e=P.f(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],s),t)
f=P.f(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],s),t)
g=P.f(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],s),t)
h=P.f(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],s),t)
i=P.f(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],s),t)
j=P.f(H.a([new E.I($.cQ,2,!0),new E.I($.bo,1,!0),new E.I($.bT,-1,!0),new E.I($.ak,-1,!0),new E.I($.c5,0.01,!1)],o),p)
k=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.aq,L.e("#FF9B00"),!0)
k.j(0,$.as,L.e("#FF9B00"),!0)
k.j(0,$.ar,L.e("#FF8700"),!0)
k.j(0,$.aC,L.e("#7F7F7F"),!0)
k.j(0,$.aB,L.e("#727272"),!0)
k.j(0,$.au,L.e("#A3A3A3"),!0)
k.j(0,$.av,L.e("#999999"),!0)
k.j(0,$.at,L.e("#898989"),!0)
k.j(0,$.az,L.e("#EFEFEF"),!0)
k.j(0,$.ay,L.e("#DBDBDB"),!0)
k.j(0,$.ax,L.e("#C6C6C6"),!0)
k.j(0,$.aw,L.e("#ADADAD"),!0)
k=new U.j2(1,d,e,f,g,h,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,i,j,0.5,3,new H.o(0,null,null,null,null,null,0,r),null,"","",!1,"Doom",null,!0,!1,!1,!1,!0,1,k,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.E(null,null,q))
k.W(3,"Doom",!0,!1)
$.pU=k
k=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.aq,L.e("#993300"),!0)
k.j(0,$.as,L.e("#BA1016"),!0)
k.j(0,$.ar,L.e("#820B0F"),!0)
k.j(0,$.aC,L.e("#381B76"),!0)
k.j(0,$.aB,L.e("#1E0C47"),!0)
k.j(0,$.au,L.e("#290704"),!0)
k.j(0,$.av,L.e("#230200"),!0)
k.j(0,$.at,L.e("#110000"),!0)
k.j(0,$.az,L.e("#3D190A"),!0)
k.j(0,$.ay,L.e("#2C1207"),!0)
k.j(0,$.ax,L.e("#5C2913"),!0)
k.j(0,$.aw,L.e("#4C1F0D"),!0)
j=P.f(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],s),t)
i=P.f(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],s),t)
h=P.f(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],s),t)
g=P.f(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],s),t)
f=P.f(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],s),t)
e=P.f(H.a([new E.I($.c0,2,!0),new E.I($.aV,1,!0),new E.I($.cQ,-2,!0)],o),p)
d=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
d.j(0,$.aq,L.e("#FF9B00"),!0)
d.j(0,$.as,L.e("#FF9B00"),!0)
d.j(0,$.ar,L.e("#FF8700"),!0)
d.j(0,$.aC,L.e("#7F7F7F"),!0)
d.j(0,$.aB,L.e("#727272"),!0)
d.j(0,$.au,L.e("#A3A3A3"),!0)
d.j(0,$.av,L.e("#999999"),!0)
d.j(0,$.at,L.e("#898989"),!0)
d.j(0,$.az,L.e("#EFEFEF"),!0)
d.j(0,$.ay,L.e("#DBDBDB"),!0)
d.j(0,$.ax,L.e("#C6C6C6"),!0)
d.j(0,$.aw,L.e("#ADADAD"),!0)
d=new T.iK(0,k,j,i,h,g,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","tie","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],f,e,0.5,4,new H.o(0,null,null,null,null,null,0,r),null,"","",!1,"Blood",null,!0,!1,!1,!1,!0,1,d,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.E(null,null,q))
d.W(4,"Blood",!0,!1)
$.pT=d
d=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
d.j(0,$.aq,L.e("#ff3399"),!0)
d.j(0,$.as,L.e("#BD1864"),!0)
d.j(0,$.ar,L.e("#780F3F"),!0)
d.j(0,$.aC,L.e("#1D572E"),!0)
d.j(0,$.aB,L.e("#11371D"),!0)
d.j(0,$.au,L.e("#4C1026"),!0)
d.j(0,$.av,L.e("#3C0D1F"),!0)
d.j(0,$.at,L.e("#260914"),!0)
d.j(0,$.az,L.e("#6B0829"),!0)
d.j(0,$.ay,L.e("#4A0818"),!0)
d.j(0,$.ax,L.e("#55142A"),!0)
d.j(0,$.aw,L.e("#3D0E1E"),!0)
e=P.f(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],s),t)
f=P.f(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],s),t)
g=P.f(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],s),t)
h=P.f(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],s),t)
i=P.f(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],s),t)
j=P.f(H.a([new E.I($.c0,1,!0),new E.iC(null,1,!0)],o),p)
k=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.aq,L.e("#FF9B00"),!0)
k.j(0,$.as,L.e("#FF9B00"),!0)
k.j(0,$.ar,L.e("#FF8700"),!0)
k.j(0,$.aC,L.e("#7F7F7F"),!0)
k.j(0,$.aB,L.e("#727272"),!0)
k.j(0,$.au,L.e("#A3A3A3"),!0)
k.j(0,$.av,L.e("#999999"),!0)
k.j(0,$.at,L.e("#898989"),!0)
k.j(0,$.az,L.e("#EFEFEF"),!0)
k.j(0,$.ay,L.e("#DBDBDB"),!0)
k.j(0,$.ax,L.e("#C6C6C6"),!0)
k.j(0,$.aw,L.e("#ADADAD"),!0)
k=new T.jU(d,e,f,g,h,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,i,j,0.5,5,new H.o(0,null,null,null,null,null,0,r),null,"","",!1,"Heart",null,!0,!1,!1,!1,!0,1,k,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.E(null,null,q))
k.W(5,"Heart",!0,!1)
$.tB=k
k=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.aq,L.e("#3da35a"),!0)
k.j(0,$.as,L.e("#06FFC9"),!0)
k.j(0,$.ar,L.e("#04A885"),!0)
k.j(0,$.aC,L.e("#6E0E2E"),!0)
k.j(0,$.aB,L.e("#4A0818"),!0)
k.j(0,$.au,L.e("#1D572E"),!0)
k.j(0,$.av,L.e("#164524"),!0)
k.j(0,$.at,L.e("#11371D"),!0)
k.j(0,$.az,L.e("#3DA35A"),!0)
k.j(0,$.ay,L.e("#2E7A43"),!0)
k.j(0,$.ax,L.e("#3B7E4F"),!0)
k.j(0,$.aw,L.e("#265133"),!0)
j=P.f(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],s),t)
i=P.f(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],s),t)
h=P.f(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],s),t)
g=P.f(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],s),t)
f=P.f(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],s),t)
e=P.f(H.a([new E.I($.bo,2,!0),new E.I($.bT,1,!0),new E.I($.cQ,-2,!0)],o),p)
d=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
d.j(0,$.aq,L.e("#FF9B00"),!0)
d.j(0,$.as,L.e("#FF9B00"),!0)
d.j(0,$.ar,L.e("#FF8700"),!0)
d.j(0,$.aC,L.e("#7F7F7F"),!0)
d.j(0,$.aB,L.e("#727272"),!0)
d.j(0,$.au,L.e("#A3A3A3"),!0)
d.j(0,$.av,L.e("#999999"),!0)
d.j(0,$.at,L.e("#898989"),!0)
d.j(0,$.az,L.e("#EFEFEF"),!0)
d.j(0,$.ay,L.e("#DBDBDB"),!0)
d.j(0,$.ax,L.e("#C6C6C6"),!0)
d.j(0,$.aw,L.e("#ADADAD"),!0)
d=new V.kT(k,j,i,h,g,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],e,0.5,6,new H.o(0,null,null,null,null,null,0,r),null,"","",!1,"Mind",null,!0,!1,!1,!1,!0,1,d,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.E(null,null,q))
d.W(6,"Mind",!0,!1)
$.tG=d
d=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
d.j(0,$.aq,L.e("#ff9933"),!0)
d.j(0,$.as,L.e("#FEFD49"),!0)
d.j(0,$.ar,L.e("#FEC910"),!0)
d.j(0,$.aC,L.e("#10E0FF"),!0)
d.j(0,$.aB,L.e("#00A4BB"),!0)
d.j(0,$.au,L.e("#FA4900"),!0)
d.j(0,$.av,L.e("#E94200"),!0)
d.j(0,$.at,L.e("#C33700"),!0)
d.j(0,$.az,L.e("#FF8800"),!0)
d.j(0,$.ay,L.e("#D66E04"),!0)
d.j(0,$.ax,L.e("#E76700"),!0)
d.j(0,$.aw,L.e("#CA5B00"),!0)
e=P.f(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],s),t)
f=P.f(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],s),t)
g=P.f(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],s),t)
h=P.f(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],s),t)
i=P.f(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],s),t)
j=P.f(H.a([new E.I($.bz,2,!0),new E.I($.bo,1,!0),new E.I($.aV,-1,!0),new E.I($.ak,-1,!0),new E.I($.c5,0.2,!1)],o),p)
k=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.aq,L.e("#FF9B00"),!0)
k.j(0,$.as,L.e("#FF9B00"),!0)
k.j(0,$.ar,L.e("#FF8700"),!0)
k.j(0,$.aC,L.e("#7F7F7F"),!0)
k.j(0,$.aB,L.e("#727272"),!0)
k.j(0,$.au,L.e("#A3A3A3"),!0)
k.j(0,$.av,L.e("#999999"),!0)
k.j(0,$.at,L.e("#898989"),!0)
k.j(0,$.az,L.e("#EFEFEF"),!0)
k.j(0,$.ay,L.e("#DBDBDB"),!0)
k.j(0,$.ax,L.e("#C6C6C6"),!0)
k.j(0,$.aw,L.e("#ADADAD"),!0)
k=new G.kz(d,e,f,g,h,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",i,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],j,0.5,7,new H.o(0,null,null,null,null,null,0,r),null,"","",!1,"Light",null,!0,!1,!1,!1,!0,1,k,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.E(null,null,q))
k.W(7,"Light",!0,!1)
$.pV=k
k=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.aq,L.e("#000066"),!0)
k.j(0,$.as,L.e("#0B1030"),!0)
k.j(0,$.ar,L.e("#04091A"),!0)
k.j(0,$.aC,L.e("#CCC4B5"),!0)
k.j(0,$.aB,L.e("#A89F8D"),!0)
k.j(0,$.au,L.e("#00164F"),!0)
k.j(0,$.av,L.e("#00103C"),!0)
k.j(0,$.at,L.e("#00071A"),!0)
k.j(0,$.az,L.e("#033476"),!0)
k.j(0,$.ay,L.e("#02285B"),!0)
k.j(0,$.ax,L.e("#004CB2"),!0)
k.j(0,$.aw,L.e("#003E91"),!0)
j=P.f(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],s),t)
i=P.f(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],s),t)
h=P.f(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],s),t)
g=P.f(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],s),t)
f=P.f(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],s),t)
e=P.f(H.a([new E.eM(D.pd(),null,3,!0),new E.eM(D.pd(),null,-1,!0),new E.I($.bT,-1,!0),new E.I($.c5,0.2,!1)],o),p)
d=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
d.j(0,$.aq,L.e("#FF9B00"),!0)
d.j(0,$.as,L.e("#FF9B00"),!0)
d.j(0,$.ar,L.e("#FF8700"),!0)
d.j(0,$.aC,L.e("#7F7F7F"),!0)
d.j(0,$.aB,L.e("#727272"),!0)
d.j(0,$.au,L.e("#A3A3A3"),!0)
d.j(0,$.av,L.e("#999999"),!0)
d.j(0,$.at,L.e("#898989"),!0)
d.j(0,$.az,L.e("#EFEFEF"),!0)
d.j(0,$.ay,L.e("#DBDBDB"),!0)
d.j(0,$.ax,L.e("#C6C6C6"),!0)
d.j(0,$.aw,L.e("#ADADAD"),!0)
d=new Q.ms(k,j,i,h,g,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],e,0.5,8,new H.o(0,null,null,null,null,null,0,r),null,"","",!1,"Void",null,!0,!1,!1,!1,!0,1,d,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.E(null,null,q))
d.W(8,"Void",!0,!1)
$.pX=d
d=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
d.j(0,$.aq,L.e("#9900cc"),!0)
d.j(0,$.as,L.e("#974AA7"),!0)
d.j(0,$.ar,L.e("#6B347D"),!0)
d.j(0,$.aC,L.e("#3D190A"),!0)
d.j(0,$.aB,L.e("#2C1207"),!0)
d.j(0,$.au,L.e("#7C3FBA"),!0)
d.j(0,$.av,L.e("#6D34A6"),!0)
d.j(0,$.at,L.e("#592D86"),!0)
d.j(0,$.az,L.e("#381B76"),!0)
d.j(0,$.ay,L.e("#1E0C47"),!0)
d.j(0,$.ax,L.e("#281D36"),!0)
d.j(0,$.aw,L.e("#1D1526"),!0)
e=P.f(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],s),t)
f=P.f(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],s),t)
g=P.f(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],s),t)
h=P.f(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],s),t)
i=P.f(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],s),t)
j=P.f(H.a([new E.I($.r,2,!0),new E.I($.aU,1,!0),new E.I($.aV,-1,!0),new E.I($.c0,-1,!0),new E.I($.c5,0.01,!1)],o),p)
k=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.aq,L.e("#FF9B00"),!0)
k.j(0,$.as,L.e("#FF9B00"),!0)
k.j(0,$.ar,L.e("#FF8700"),!0)
k.j(0,$.aC,L.e("#7F7F7F"),!0)
k.j(0,$.aB,L.e("#727272"),!0)
k.j(0,$.au,L.e("#A3A3A3"),!0)
k.j(0,$.av,L.e("#999999"),!0)
k.j(0,$.at,L.e("#898989"),!0)
k.j(0,$.az,L.e("#EFEFEF"),!0)
k.j(0,$.ay,L.e("#DBDBDB"),!0)
k.j(0,$.ax,L.e("#C6C6C6"),!0)
k.j(0,$.aw,L.e("#ADADAD"),!0)
k=new E.lt(d,e,f,g,h," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",i,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],j,0.5,9,new H.o(0,null,null,null,null,null,0,r),null,"","",!1,"Rage",null,!0,!1,!1,!1,!0,1,k,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.E(null,null,q))
k.W(9,"Rage",!0,!1)
$.tJ=k
k=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.aq,L.e("#ffcc66"),!0)
k.j(0,$.as,L.e("#FDF9EC"),!0)
k.j(0,$.ar,L.e("#D6C794"),!0)
k.j(0,$.aC,L.e("#164524"),!0)
k.j(0,$.aB,L.e("#06280C"),!0)
k.j(0,$.au,L.e("#FFC331"),!0)
k.j(0,$.av,L.e("#F7BB2C"),!0)
k.j(0,$.at,L.e("#DBA523"),!0)
k.j(0,$.az,L.e("#FFE094"),!0)
k.j(0,$.ay,L.e("#E8C15E"),!0)
k.j(0,$.ax,L.e("#F6C54A"),!0)
k.j(0,$.aw,L.e("#EDAF0C"),!0)
j=P.f(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],s),t)
i=P.f(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],s),t)
h=P.f(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],s),t)
g=P.f(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],s),t)
f=P.f(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],s),t)
e=P.f(H.a([new E.I($.aV,2,!0),new E.I($.bz,1,!0),new E.eM(D.pd(),null,-2,!0)],o),p)
d=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
d.j(0,$.aq,L.e("#FF9B00"),!0)
d.j(0,$.as,L.e("#FF9B00"),!0)
d.j(0,$.ar,L.e("#FF8700"),!0)
d.j(0,$.aC,L.e("#7F7F7F"),!0)
d.j(0,$.aB,L.e("#727272"),!0)
d.j(0,$.au,L.e("#A3A3A3"),!0)
d.j(0,$.av,L.e("#999999"),!0)
d.j(0,$.at,L.e("#898989"),!0)
d.j(0,$.az,L.e("#EFEFEF"),!0)
d.j(0,$.ay,L.e("#DBDBDB"),!0)
d.j(0,$.ax,L.e("#C6C6C6"),!0)
d.j(0,$.aw,L.e("#ADADAD"),!0)
d=new X.jW(k,j,i,h,g,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],f,e,0.5,10,new H.o(0,null,null,null,null,null,0,r),null,"","",!1,"Hope",null,!0,!1,!1,!1,!0,1,d,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.E(null,null,q))
d.W(10,"Hope",!0,!1)
$.tC=d
d=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
d.j(0,$.aq,L.e("#494132"),!0)
d.j(0,$.as,L.e("#76C34E"),!0)
d.j(0,$.ar,L.e("#4F8234"),!0)
d.j(0,$.aC,L.e("#00164F"),!0)
d.j(0,$.aB,L.e("#00071A"),!0)
d.j(0,$.au,L.e("#605542"),!0)
d.j(0,$.av,L.e("#494132"),!0)
d.j(0,$.at,L.e("#2D271E"),!0)
d.j(0,$.az,L.e("#CCC4B5"),!0)
d.j(0,$.ay,L.e("#A89F8D"),!0)
d.j(0,$.ax,L.e("#A29989"),!0)
d.j(0,$.aw,L.e("#918673"),!0)
e=P.f(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],s),t)
f=P.f(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],s),t)
g=P.f(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],s),t)
h=P.f(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],s),t)
i=P.f(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],s),t)
j=P.f(H.a([new E.I($.ak,2,!0),new E.I($.r,1,!0),new E.I($.cQ,-2,!0)],o),p)
k=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.aq,L.e("#FF9B00"),!0)
k.j(0,$.as,L.e("#FF9B00"),!0)
k.j(0,$.ar,L.e("#FF8700"),!0)
k.j(0,$.aC,L.e("#7F7F7F"),!0)
k.j(0,$.aB,L.e("#727272"),!0)
k.j(0,$.au,L.e("#A3A3A3"),!0)
k.j(0,$.av,L.e("#999999"),!0)
k.j(0,$.at,L.e("#898989"),!0)
k.j(0,$.az,L.e("#EFEFEF"),!0)
k.j(0,$.ay,L.e("#DBDBDB"),!0)
k.j(0,$.ax,L.e("#C6C6C6"),!0)
k.j(0,$.aw,L.e("#ADADAD"),!0)
k=new K.ky(d,e,f,g,h,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],i,j,0.5,11,new H.o(0,null,null,null,null,null,0,r),null,"","",!1,"Life",null,!0,!1,!1,!1,!0,1,k,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.E(null,null,q))
k.W(11,"Life",!0,!1)
$.tE=k
k=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.aq,L.e("#9630BF"),!0)
k.j(0,$.as,L.e("#cc87e8"),!0)
k.j(0,$.ar,L.e("#9545b7"),!0)
k.j(0,$.aC,L.e("#ae769b"),!0)
k.j(0,$.aB,L.e("#8f577c"),!0)
k.j(0,$.au,L.e("#9630bf"),!0)
k.j(0,$.av,L.e("#693773"),!0)
k.j(0,$.at,L.e("#4c2154"),!0)
k.j(0,$.az,L.e("#fcf9bd"),!0)
k.j(0,$.ay,L.e("#e0d29e"),!0)
k.j(0,$.ax,L.e("#bdb968"),!0)
k.j(0,$.aw,L.e("#ab9b55"),!0)
j=P.f(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],s),t)
i=P.f(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],s),t)
h=P.f(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],s),t)
g=P.f(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],s),t)
f=P.f(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],s),t)
e=P.f(H.a([new E.I($.cQ,3,!0),new E.I($.aV,-2,!0)],o),p)
d=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
d.j(0,$.aq,L.e("#FF9B00"),!0)
d.j(0,$.as,L.e("#FF9B00"),!0)
d.j(0,$.ar,L.e("#FF8700"),!0)
d.j(0,$.aC,L.e("#7F7F7F"),!0)
d.j(0,$.aB,L.e("#727272"),!0)
d.j(0,$.au,L.e("#A3A3A3"),!0)
d.j(0,$.av,L.e("#999999"),!0)
d.j(0,$.at,L.e("#898989"),!0)
d.j(0,$.az,L.e("#EFEFEF"),!0)
d.j(0,$.ay,L.e("#DBDBDB"),!0)
d.j(0,$.ax,L.e("#C6C6C6"),!0)
d.j(0,$.aw,L.e("#ADADAD"),!0)
d=new Z.j3(k,j,i,h,g,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,f,e,0.5,12,new H.o(0,null,null,null,null,null,0,r),null,"","",!1,"Dream",null,!1,!1,!1,!1,!0,1,d,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.E(null,null,q))
d.W(12,"Dream",!1,!1)
$.ty=d
$.tI=L.tw(255,"Null",!1,!1)
d=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
d.j(0,$.aq,L.e("#364447"),!0)
d.j(0,$.as,L.e("#28517b"),!0)
d.j(0,$.ar,L.e("#143D67"),!0)
d.j(0,$.aC,L.e("#E7D7A0"),!0)
d.j(0,$.aB,L.e("#D6A482"),!0)
d.j(0,$.au,L.e("#A9D5DF"),!0)
d.j(0,$.av,L.e("#95c1cb"),!0)
d.j(0,$.at,L.e("#77a3ad"),!0)
d.j(0,$.az,L.e("#162E33"),!0)
d.j(0,$.ay,L.e("#11292e"),!0)
d.j(0,$.ax,L.e("#021a1f"),!0)
d.j(0,$.aw,L.e("#021015"),!0)
e=P.f(H.a(["Waves","Ocean","Gyms","Pillars","Force","Rocks","Stability","Cliffs","Strength","Surf"],s),t)
f=P.f(H.a(["STANDALONE STRONGMAN","EMPOWERING EMPEROR","MINCEMIGHT"],s),t)
g=P.f(H.a(["Might","Minder","Mainsail","Mastiff","Morpher","Mortician"],s),t)
h=P.f(H.a(["Crash","MIGHT","Endure","Grip","Punch","Wave","Fist"],s),t)
i=P.f(H.a(["Might","Grendel","Heracles","Odysseus","Lancelot","Arthur","Beowulf","Achilles","Samson","Goliath"],s),t)
j=P.f(H.a(["surfing a tsunami wave that appeared just for the occasion","punching out a horde of underlings, one by one","following through with a plan after the circumstances have foiled it and succeeding anyway"],s),t)
k=P.f(H.a(["standing their ground in the face of a difficult foe","performing an unbelievably complex bike stunt","teaching consorts proper weightlifting technique","finally defeating the last of their planet's underlings"],s),t)
c=P.f(H.a(["training for training's sake","renovating a consort village to protect it from natural disasters","defeating powerful underlings by refusing to give in to the pain"],s),t)
b=P.f(H.a([new E.I($.r,2,!0),new E.I($.bo,-1,!0),new E.I($.aU,-1,!0),new E.I($.aV,1,!0)],o),p)
a=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
a.j(0,$.aq,L.e("#FF9B00"),!0)
a.j(0,$.as,L.e("#FF9B00"),!0)
a.j(0,$.ar,L.e("#FF8700"),!0)
a.j(0,$.aC,L.e("#7F7F7F"),!0)
a.j(0,$.aB,L.e("#727272"),!0)
a.j(0,$.au,L.e("#A3A3A3"),!0)
a.j(0,$.av,L.e("#999999"),!0)
a.j(0,$.at,L.e("#898989"),!0)
a.j(0,$.az,L.e("#EFEFEF"),!0)
a.j(0,$.ay,L.e("#DBDBDB"),!0)
a.j(0,$.ax,L.e("#C6C6C6"),!0)
a.j(0,$.aw,L.e("#ADADAD"),!0)
a=new L.kS(d,e,f,g,h,"Mantra","A low note is hummed. It is the one Perseverance plays to keep itself going. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",i,j,k,c,b,0.5,13,new H.o(0,null,null,null,null,null,0,r),null,"","",!1,"Might",null,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.E(null,null,q))
a.W(13,"Might",!1,!1)
$.tF=a
a=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
a.j(0,$.aq,L.e("#A4C1F4"),!0)
a.j(0,$.as,L.e("#A4C1F4"),!0)
a.j(0,$.ar,L.e("#95AFDD"),!0)
a.j(0,$.aC,L.e("#FFFFA5"),!0)
a.j(0,$.aB,L.e("#BEBE9E"),!0)
a.j(0,$.au,L.e("#A4C1F4"),!0)
a.j(0,$.av,L.e("#95AFDD"),!0)
a.j(0,$.at,L.e("#88A0CC"),!0)
a.j(0,$.az,L.e("#D9D2E9"),!0)
a.j(0,$.ay,L.e("#BBB5CA"),!0)
a.j(0,$.ax,L.e("#CCC5DB"),!0)
a.j(0,$.aw,L.e("#A49FB1"),!0)
b=P.f(H.a(["Mist","Steam","Substance","Vapor","Fog","Clouds","Rivers","Humidity"],s),t)
c=P.f(H.a(["HAZE HASTENER","MISTER MASTER","MANY-BODY"],s),t)
k=P.f(H.a(["Moper","Martyr","Manager","Morning","Matter"],s),t)
j=P.f(H.a(["Everything","Encompass","Halation","Mist","Universal","Steamy","Most"],s),t)
i=P.f(H.a(["Mist","Lumo"],s),t)
h=P.f(H.a([new E.I($.aU,2,!0),new E.I($.r,-1,!0)],o),p)
g=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
g.j(0,$.aq,L.e("#FF9B00"),!0)
g.j(0,$.as,L.e("#FF9B00"),!0)
g.j(0,$.ar,L.e("#FF8700"),!0)
g.j(0,$.aC,L.e("#7F7F7F"),!0)
g.j(0,$.aB,L.e("#727272"),!0)
g.j(0,$.au,L.e("#A3A3A3"),!0)
g.j(0,$.av,L.e("#999999"),!0)
g.j(0,$.at,L.e("#898989"),!0)
g.j(0,$.az,L.e("#EFEFEF"),!0)
g.j(0,$.ay,L.e("#DBDBDB"),!0)
g.j(0,$.ax,L.e("#C6C6C6"),!0)
g.j(0,$.aw,L.e("#ADADAD"),!0)
g=new S.kU(a,b,c,k,j,i,"Ensemble","A harmonized chord sounds. It is the one Everybody knows. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",h,0.5,14,new H.o(0,null,null,null,null,null,0,r),null,"","",!1,"Mist",null,!1,!1,!1,!1,!0,1,g,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.E(null,null,q))
g.W(14,"Mist",!1,!1)
$.tH=g
g=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
g.j(0,$.aq,L.e("#00FFFF"),!0)
g.j(0,$.as,L.e("#00ffff"),!0)
g.j(0,$.ar,L.e("#009090"),!0)
g.j(0,$.aC,L.e("#FEFEFE"),!0)
g.j(0,$.aB,L.e("#707070"),!0)
g.j(0,$.au,L.e("#0000FF"),!0)
g.j(0,$.av,L.e("#0000b3"),!0)
g.j(0,$.at,L.e("#000080"),!0)
g.j(0,$.az,L.e("#9900ff"),!0)
g.j(0,$.ay,L.e("#5c0099"),!0)
g.j(0,$.ax,L.e("#00FF00"),!0)
g.j(0,$.aw,L.e("#008000"),!0)
h=P.f(H.a(["Neon","Headaches","Puddles","Drip","Mess","Ice cream","Sweets","Boredom"],s),t)
i=P.f(H.a(["PUDDLE PUMMELLER","FLOOD FINISHER","RAINBRO"],s),t)
j=P.f(H.a(["Rainer","Retriever","Rower","Redux","Rapport"],s),t)
k=P.f(H.a(["Chaos","disorder","puddle","Rain","error","color","Swirl","LOL"],s),t)
c=P.f(H.a(["Rain","Chaac","Tohil","Q'uq'umatz","Tlaloc","Cocijo","Dzahui","Mu'ye","Jaguar","Quiateot","Lono","Indra","Dodola","Dudumitsa","Deng","Mangwe","Oya","Asiaq"],s),t)
b=P.f(H.a([new E.I($.c0,-2,!0),new E.I($.aV,-1,!0),new E.I($.bz,3,!0)],o),p)
f=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
f.j(0,$.aq,L.e("#FF9B00"),!0)
f.j(0,$.as,L.e("#FF9B00"),!0)
f.j(0,$.ar,L.e("#FF8700"),!0)
f.j(0,$.aC,L.e("#7F7F7F"),!0)
f.j(0,$.aB,L.e("#727272"),!0)
f.j(0,$.au,L.e("#A3A3A3"),!0)
f.j(0,$.av,L.e("#999999"),!0)
f.j(0,$.at,L.e("#898989"),!0)
f.j(0,$.az,L.e("#EFEFEF"),!0)
f.j(0,$.ay,L.e("#DBDBDB"),!0)
f.j(0,$.ax,L.e("#C6C6C6"),!0)
f.j(0,$.aw,L.e("#ADADAD"),!0)
f=new L.lu(g,h,i,j,k,"Rudiment","An erratic beat plays. It is the beat Confusion drums. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["rain","chaos","disorder","insanity","discontinuity","distortion"],["rain","raindrop","noisemaker","watercolor","RNG","neon tube","faucet","hose"],b,0.5,15,new H.o(0,null,null,null,null,null,0,r),null,"","",!1,"Rain",null,!1,!1,!1,!1,!0,1,f,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.E(null,null,q))
f.W(15,"Rain",!1,!1)
$.tK=f
f=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
f.j(0,$.aq,L.e("#b88654"),!0)
f.j(0,$.as,L.e("#783e05"),!0)
f.j(0,$.ar,L.e("#4a0f00"),!0)
f.j(0,$.aC,L.e("#0b6c6e"),!0)
f.j(0,$.aB,L.e("#005d5e"),!0)
f.j(0,$.au,L.e("#f5b06c"),!0)
f.j(0,$.av,L.e("#e6a05e"),!0)
f.j(0,$.at,L.e("#b87232"),!0)
f.j(0,$.az,L.e("#ffd966"),!0)
f.j(0,$.ay,L.e("#d1ab3b"),!0)
f.j(0,$.ax,L.e("#7d5e00"),!0)
f.j(0,$.aw,L.e("#6e4f00"),!0)
b=P.f(H.a(["Lies","Beach","Shore","Secrets","Pirates","Suspicion","Corruption","[REDACTED]","Cake"],s),t)
c=P.f(H.a(["MR SANDMAN","CASTLE COORDINATOR","POKER FACADE"],s),t)
k=P.f(H.a(["Strategist","Slider","Sculpter","Scamp","Sleazebag"],s),t)
j=P.f(H.a(["FALSE","Wrong","Sand","Distraction","Ruse","Crumble","abscond","beach","grain","[Data Expunged]"],s),t)
i=P.f(H.a([new E.I($.c0,3,!0),new E.I($.aV,-2,!0)],o),p)
h=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
h.j(0,$.aq,L.e("#FF9B00"),!0)
h.j(0,$.as,L.e("#FF9B00"),!0)
h.j(0,$.ar,L.e("#FF8700"),!0)
h.j(0,$.aC,L.e("#7F7F7F"),!0)
h.j(0,$.aB,L.e("#727272"),!0)
h.j(0,$.au,L.e("#A3A3A3"),!0)
h.j(0,$.av,L.e("#999999"),!0)
h.j(0,$.at,L.e("#898989"),!0)
h.j(0,$.az,L.e("#EFEFEF"),!0)
h.j(0,$.ay,L.e("#DBDBDB"),!0)
h.j(0,$.ax,L.e("#C6C6C6"),!0)
h.j(0,$.aw,L.e("#ADADAD"),!0)
h=new Y.lI(f,b,c,k,j," BLUH BLUH, ask Cactus to write this. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",i,0.5,16,new H.o(0,null,null,null,null,null,0,r),null,"","",!1,"Sand",null,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.E(null,null,q))
h.W(16,"Sand",!1,!1)
$.tM=h
h=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
h.j(0,$.aq,L.e("#ff9933"),!0)
h.j(0,$.as,L.e("#ffffff"),!0)
h.j(0,$.ar,L.e("#999999"),!0)
h.j(0,$.aC,L.e("#ffff00"),!0)
h.j(0,$.aB,L.e("#8f8f00"),!0)
h.j(0,$.au,L.e("#d1e0e3"),!0)
h.j(0,$.av,L.e("#c5d1d4"),!0)
h.j(0,$.at,L.e("#b7c2c4"),!0)
h.j(0,$.az,L.e("#00ffff"),!0)
h.j(0,$.ay,L.e("#009999"),!0)
h.j(0,$.ax,L.e("#b5b5b5"),!0)
h.j(0,$.aw,L.e("#858585"),!0)
k=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.aq,L.e("#FF9B00"),!0)
k.j(0,$.as,L.e("#FF9B00"),!0)
k.j(0,$.ar,L.e("#FF8700"),!0)
k.j(0,$.aC,L.e("#7F7F7F"),!0)
k.j(0,$.aB,L.e("#727272"),!0)
k.j(0,$.au,L.e("#A3A3A3"),!0)
k.j(0,$.av,L.e("#999999"),!0)
k.j(0,$.at,L.e("#898989"),!0)
k.j(0,$.az,L.e("#EFEFEF"),!0)
k.j(0,$.ay,L.e("#DBDBDB"),!0)
k.j(0,$.ax,L.e("#C6C6C6"),!0)
k.j(0,$.aw,L.e("#ADADAD"),!0)
k=new L.lS(h,0.5,17,new H.o(0,null,null,null,null,null,0,r),null,"","",!1,"Sky",null,!1,!1,!1,!1,!0,1,k,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.E(null,null,q))
k.W(17,"Sky",!1,!1)
$.tN=k
k=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.aq,L.e("#10dede"),!0)
k.j(0,$.as,L.e("#00ffff"),!0)
k.j(0,$.ar,L.e("#00d1d1"),!0)
k.j(0,$.aC,L.e("#ff0000"),!0)
k.j(0,$.aB,L.e("#d10000"),!0)
k.j(0,$.au,L.e("#4985e6"),!0)
k.j(0,$.av,L.e("#3a76d6"),!0)
k.j(0,$.at,L.e("#2d6ac4"),!0)
k.j(0,$.az,L.e("#331c73"),!0)
k.j(0,$.ay,L.e("#050045"),!0)
k.j(0,$.ax,L.e("#8d7cc2"),!0)
k.j(0,$.aw,L.e("#7c6db3"),!0)
h=P.f(H.a(["Gel","Ice","Tape","Poetry","Caucophony"],s),t)
j=P.f(H.a(["LIL LYRICIST","ICE CREAMER","COOLER THAN BEING COOL"],s),t)
i=P.f(H.a(["Rhymer","Rapper","Rental","Redux","Rave","Reason"],s),t)
g=P.f(H.a(["Vaporwave","Chill","Ice","Rhyme","Slow"],s),t)
f=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
f.j(0,$.aq,L.e("#FF9B00"),!0)
f.j(0,$.as,L.e("#FF9B00"),!0)
f.j(0,$.ar,L.e("#FF8700"),!0)
f.j(0,$.aC,L.e("#7F7F7F"),!0)
f.j(0,$.aB,L.e("#727272"),!0)
f.j(0,$.au,L.e("#A3A3A3"),!0)
f.j(0,$.av,L.e("#999999"),!0)
f.j(0,$.at,L.e("#898989"),!0)
f.j(0,$.az,L.e("#EFEFEF"),!0)
f.j(0,$.ay,L.e("#DBDBDB"),!0)
f.j(0,$.ax,L.e("#C6C6C6"),!0)
f.j(0,$.aw,L.e("#ADADAD"),!0)
f=new Z.lA(k,h,j,i,g,"Rap","BLUH BLUH, Ask Cactus to write this. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",0.5,18,new H.o(0,null,null,null,null,null,0,r),null,"","",!1,"Rhyme",null,!1,!1,!1,!1,!0,1,f,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.E(null,null,q))
f.W(18,"Rhyme",!1,!1)
$.tL=f
f=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
f.j(0,$.aq,L.e("#c42eff"),!0)
f.j(0,$.as,L.e("a703ff"),!0)
f.j(0,$.ar,L.e("#9800f0"),!0)
f.j(0,$.aC,L.e("#fcf9bd"),!0)
f.j(0,$.aB,L.e("#e0d29e"),!0)
f.j(0,$.au,L.e("#9900ff"),!0)
f.j(0,$.av,L.e("#8800f0"),!0)
f.j(0,$.at,L.e("#7800e0"),!0)
f.j(0,$.az,L.e("#b3a7d4"),!0)
f.j(0,$.ay,L.e("#a599c4"),!0)
f.j(0,$.ax,L.e("#a64e78"),!0)
f.j(0,$.aw,L.e("#963f66"),!0)
k=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.aq,L.e("#FF9B00"),!0)
k.j(0,$.as,L.e("#FF9B00"),!0)
k.j(0,$.ar,L.e("#FF8700"),!0)
k.j(0,$.aC,L.e("#7F7F7F"),!0)
k.j(0,$.aB,L.e("#727272"),!0)
k.j(0,$.au,L.e("#A3A3A3"),!0)
k.j(0,$.av,L.e("#999999"),!0)
k.j(0,$.at,L.e("#898989"),!0)
k.j(0,$.az,L.e("#EFEFEF"),!0)
k.j(0,$.ay,L.e("#DBDBDB"),!0)
k.j(0,$.ax,L.e("#C6C6C6"),!0)
k.j(0,$.aw,L.e("#ADADAD"),!0)
k=new Q.kw(f,0.5,19,new H.o(0,null,null,null,null,null,0,r),null,"","",!1,"Law",null,!1,!1,!1,!1,!0,1,k,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.E(null,null,q))
k.W(19,"Law",!1,!1)
$.tD=k
k=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.aq,L.e("#f0b000"),!0)
k.j(0,$.as,L.e("#ffd966"),!0)
k.j(0,$.ar,L.e("#f0ca59"),!0)
k.j(0,$.aC,L.e("#ffff00"),!0)
k.j(0,$.aB,L.e("#8f8f00"),!0)
k.j(0,$.au,L.e("#92c27c"),!0)
k.j(0,$.av,L.e("#83b36d"),!0)
k.j(0,$.at,L.e("#74a35f"),!0)
k.j(0,$.az,L.e("#39751d"),!0)
k.j(0,$.ay,L.e("#2a630e"),!0)
k.j(0,$.ax,L.e("#bd8e00"),!0)
k.j(0,$.aw,L.e("#ad7c00"),!0)
j=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
j.j(0,$.aq,L.e("#FF9B00"),!0)
j.j(0,$.as,L.e("#FF9B00"),!0)
j.j(0,$.ar,L.e("#FF8700"),!0)
j.j(0,$.aC,L.e("#7F7F7F"),!0)
j.j(0,$.aB,L.e("#727272"),!0)
j.j(0,$.au,L.e("#A3A3A3"),!0)
j.j(0,$.av,L.e("#999999"),!0)
j.j(0,$.at,L.e("#898989"),!0)
j.j(0,$.az,L.e("#EFEFEF"),!0)
j.j(0,$.ay,L.e("#DBDBDB"),!0)
j.j(0,$.ax,L.e("#C6C6C6"),!0)
j.j(0,$.aw,L.e("#ADADAD"),!0)
j=new L.jr(k,0.5,20,new H.o(0,null,null,null,null,null,0,r),null,"","",!1,"Fate",null,!1,!1,!1,!1,!0,1,j,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.E(null,null,q))
j.W(20,"Fate",!1,!1)
$.tz=j
j=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
j.j(0,$.aq,L.e("#b2e3eb"),!0)
j.j(0,$.as,L.e("#fefefe"),!0)
j.j(0,$.ar,L.e("#dfdfdf"),!0)
j.j(0,$.aC,L.e("#00ffff"),!0)
j.j(0,$.aB,L.e("#009090"),!0)
j.j(0,$.au,L.e("#999999"),!0)
j.j(0,$.av,L.e("#8a8a8a"),!0)
j.j(0,$.at,L.e("#7a7a7a"),!0)
j.j(0,$.az,L.e("#d0e2f2"),!0)
j.j(0,$.ay,L.e("#c3d4e3"),!0)
j.j(0,$.ax,L.e("#b2e3eb"),!0)
j.j(0,$.aw,L.e("#a4d4db"),!0)
k=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.aq,L.e("#FF9B00"),!0)
k.j(0,$.as,L.e("#FF9B00"),!0)
k.j(0,$.ar,L.e("#FF8700"),!0)
k.j(0,$.aC,L.e("#7F7F7F"),!0)
k.j(0,$.aB,L.e("#727272"),!0)
k.j(0,$.au,L.e("#A3A3A3"),!0)
k.j(0,$.av,L.e("#999999"),!0)
k.j(0,$.at,L.e("#898989"),!0)
k.j(0,$.az,L.e("#EFEFEF"),!0)
k.j(0,$.ay,L.e("#DBDBDB"),!0)
k.j(0,$.ax,L.e("#C6C6C6"),!0)
k.j(0,$.aw,L.e("#ADADAD"),!0)
k=new O.lU(2,j,0.5,21,new H.o(0,null,null,null,null,null,0,r),null,"","",!1,"Snow",null,!1,!1,!1,!1,!0,1,k,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.E(null,null,q))
k.W(21,"Snow",!1,!1)
$.tO=k
k=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
k.j(0,$.aq,L.e("#ee0000"),!0)
k.j(0,$.as,L.e("#ff0000"),!0)
k.j(0,$.ar,L.e("#d10000"),!0)
k.j(0,$.aC,L.e("#00ffff"),!0)
k.j(0,$.aB,L.e("#00d1d1"),!0)
k.j(0,$.au,L.e("#e68f39"),!0)
k.j(0,$.av,L.e("#d67e2b"),!0)
k.j(0,$.at,L.e("#c46b1d"),!0)
k.j(0,$.az,L.e("#e65c00"),!0)
k.j(0,$.ay,L.e("#b82e00"),!0)
k.j(0,$.ax,L.e("#ffd966"),!0)
k.j(0,$.aw,L.e("#d1ab3b"),!0)
j=P.f(H.a(["Fire","Track","Mercury","Heat","Burns","Mixtapes","Spaghetti"],s),t)
i=P.f(H.a(["BURN WARDEN","FIRESTARTER","RAP GOD"],s),t)
h=P.f(H.a(["Flamer","Florist","Friar","Foodie"],s),t)
g=P.f(H.a(["Nightcore","Flow","Sick","Fire","Fast","Sonic","burning","speed"],s),t)
f=P.f(H.a([new E.I($.aU,2,!0),new E.I($.r,1,!0),new E.I($.c0,-2,!0)],o),p)
e=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
e.j(0,$.aq,L.e("#FF9B00"),!0)
e.j(0,$.as,L.e("#FF9B00"),!0)
e.j(0,$.ar,L.e("#FF8700"),!0)
e.j(0,$.aC,L.e("#7F7F7F"),!0)
e.j(0,$.aB,L.e("#727272"),!0)
e.j(0,$.au,L.e("#A3A3A3"),!0)
e.j(0,$.av,L.e("#999999"),!0)
e.j(0,$.at,L.e("#898989"),!0)
e.j(0,$.az,L.e("#EFEFEF"),!0)
e.j(0,$.ay,L.e("#DBDBDB"),!0)
e.j(0,$.ax,L.e("#C6C6C6"),!0)
e.j(0,$.aw,L.e("#ADADAD"),!0)
e=new O.jO(k,j,i,h,g,"Mixtape "," An ill beat is laid down. It's the one that is dropped when the Pimp is in the crib. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,0.5,22,new H.o(0,null,null,null,null,null,0,r),null,"","",!1,"Flow",null,!1,!1,!1,!1,!0,1,e,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.E(null,null,q))
e.W(22,"Flow",!1,!1)
$.tA=e
e=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
e.j(0,$.aq,L.e("#ffff33"),!0)
e.j(0,$.as,L.e("#ffff00"),!0)
e.j(0,$.ar,L.e("#d1d100"),!0)
e.j(0,$.aC,L.e("#00ffff"),!0)
e.j(0,$.aB,L.e("#009999"),!0)
e.j(0,$.au,L.e("#0c5494"),!0)
e.j(0,$.av,L.e("#004785"),!0)
e.j(0,$.at,L.e("#003b75"),!0)
e.j(0,$.az,L.e("#20124d"),!0)
e.j(0,$.ay,L.e("#11033d"),!0)
e.j(0,$.ax,L.e("#0c323b"),!0)
e.j(0,$.aw,L.e("#00232b"),!0)
m=new L.al(P.n(null,null,null,t,m),P.n(null,null,null,l,m),P.n(null,null,null,t,l),P.n(null,null,null,l,t))
m.j(0,$.aq,L.e("#FF9B00"),!0)
m.j(0,$.as,L.e("#FF9B00"),!0)
m.j(0,$.ar,L.e("#FF8700"),!0)
m.j(0,$.aC,L.e("#7F7F7F"),!0)
m.j(0,$.aB,L.e("#727272"),!0)
m.j(0,$.au,L.e("#A3A3A3"),!0)
m.j(0,$.av,L.e("#999999"),!0)
m.j(0,$.at,L.e("#898989"),!0)
m.j(0,$.az,L.e("#EFEFEF"),!0)
m.j(0,$.ay,L.e("#DBDBDB"),!0)
m.j(0,$.ax,L.e("#C6C6C6"),!0)
m.j(0,$.aw,L.e("#ADADAD"),!0)
n=new U.m_(e,0.5,23,new H.o(0,null,null,null,null,null,0,r),null,"","",!1,"Stars",null,!1,!1,!1,!1,!0,1,m,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND","MissingNo","???","Pumpkin","Shoes","Denizen","Whomst"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],o),H.a([],n),Q.E(null,null,q))
n.W(23,"Stars",!1,!1)
$.tP=n
n=P.f(H.a([new E.I($.aV,1,!0),new E.I($.bz,1,!0)],o),p)
t=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],s)
m=H.a(["Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass"],s)
e=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],s)
l=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],s)
k=H.a(["nobody"],s)
j=P.f(H.a([],o),p)
i=H.a(["Nobody"],s)
h=H.a(["Nobody"],s)
t=new F.kW(n,t,m,e,l,!1,k,j,i,h,1,new H.o(0,null,null,null,null,null,0,r),["NONE"],Q.E(null,null,q),"loud","musical","Music")
t.G()
t.F()
B.cp(t)
$.ul=t
t=P.f(H.a([new E.I($.bo,-2,!0)],o),p)
n=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],s)
m=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist"],s)
l=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],s)
k=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new S.it(t,n,m,l,k,!1,j,i,h,g,13,new H.o(0,null,null,null,null,null,0,r),["NONE"],Q.E(null,null,q),"nerdy","smart","Academic")
t.G()
t.F()
B.cp(t)
$.ue=t
t=P.f(H.a([new E.I($.r,2,!0)],o),p)
n=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],s)
m=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler"],s)
l=H.a(["MUSCLES HOARDER","BODY BOOSTER"],s)
k=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new M.iF(t,n,m,l,k,!1,j,i,h,g,4,new H.o(0,null,null,null,null,null,0,r),["NONE"],Q.E(null,null,q),"dumb","athletic","Athletic")
t.G()
t.F()
B.cp(t)
$.uf=t
t=P.f(H.a([new E.I($.bT,-1,!0),new E.I($.bz,1,!0)],o),p)
n=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],s)
m=H.a(["Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor"],s)
l=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],s)
k=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new A.iV(t,n,m,l,k,!1,j,i,h,g,0,new H.o(0,null,null,null,null,null,0,r),["NONE"],Q.E(null,null,q),"dorky","funny","Comedy")
t.G()
t.F()
B.cp(t)
$.ug=t
t=P.f(H.a([new E.I($.aV,-1,!0),new E.I($.ak,-1,!0)],o),p)
n=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],s)
m=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business"],s)
l=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],s)
k=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new M.iX(t,n,m,l,k,!1,j,i,h,g,2,new H.o(0,null,null,null,null,null,0,r),["NONE"],Q.E(null,null,q),"pretentious","cultured","Culture")
t.G()
t.F()
B.cp(t)
$.uh=t
t=P.f(H.a([new E.I($.aV,1,!0),new E.I($.c0,1,!0)],o),p)
n=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],s)
m=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer"],s)
l=H.a(["BATTERBRAT","GRITTY GUARDIAN"],s)
k=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new V.j1(t,n,m,l,k,!1,j,i,h,g,8,new H.o(0,null,null,null,null,null,0,r),["NONE"],Q.E(null,null,q),"boring","domestic","Domestic")
t.G()
t.F()
B.cp(t)
$.ui=t
t=P.f(H.a([new E.I($.bz,1,!0),new E.I($.cQ,1,!0)],o),p)
n=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],s)
m=H.a(["Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart"],s)
l=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],s)
k=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new U.jq(t,n,m,l,k,!1,j,i,h,g,7,new H.o(0,null,null,null,null,null,0,r),["NONE"],Q.E(null,null,q),"whimpy","imaginative","Fantasy")
t.G()
t.F()
B.cp(t)
$.uj=t
t=P.f(H.a([new E.I($.r,1,!0),new E.I($.ak,1,!0)],o),p)
n=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],s)
m=H.a(["Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel"],s)
l=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],s)
k=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new N.ko(t,n,m,l,k,!1,j,i,h,g,6,new H.o(0,null,null,null,null,null,0,r),["NONE"],Q.E(null,null,q),"harsh","fair-minded","Justice")
t.G()
t.F()
B.cp(t)
$.uk=t
t=P.f(H.a([new E.I($.aU,2,!0)],o),p)
n=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],s)
m=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent"],s)
l=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],s)
k=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new G.lo(t,n,m,l,k,!1,j,i,h,g,9,new H.o(0,null,null,null,null,null,0,r),["NONE"],Q.E(null,null,q),"frivolous","geeky","PopCulture")
t.G()
t.F()
B.cp(t)
$.un=t
t=P.f(H.a([new E.I($.c0,2,!0)],o),p)
n=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],s)
m=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team"],s)
l=H.a(["QUESTING CUPID","ROMANCE EXPERT"],s)
k=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new Q.lC(t,n,m,l,k,!1,j,i,h,g,12,new H.o(0,null,null,null,null,null,0,r),["NONE"],Q.E(null,null,q),"obsessive","romantic","Romantic")
t.G()
t.F()
B.cp(t)
$.uo=t
t=P.f(H.a([new E.I($.aV,2,!0)],o),p)
n=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],s)
m=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally"],s)
l=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],s)
k=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new N.lV(t,n,m,l,k,!1,j,i,h,g,11,new H.o(0,null,null,null,null,null,0,r),["NONE"],Q.E(null,null,q),"shallow","extroverted","Social")
t.G()
t.F()
B.cp(t)
$.up=t
t=P.f(H.a([new E.I($.c0,-1,!0),new E.I($.aV,-1,!0)],o),p)
n=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],s)
m=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod"],s)
l=H.a(["ENEMY #1","JERKWAD JOURNEYER"],s)
k=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new V.me(t,n,m,l,k,!1,j,i,h,g,5,new H.o(0,null,null,null,null,null,0,r),["NONE"],Q.E(null,null,q),"terrible","honest","Terrible")
t.G()
t.F()
B.cp(t)
$.ur=t
t=P.f(H.a([new E.I($.bo,2,!0)],o),p)
n=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],s)
m=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis"],s)
l=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],s)
k=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new F.mB(t,n,m,l,k,!1,j,i,h,g,3,new H.o(0,null,null,null,null,null,0,r),["NONE"],Q.E(null,null,q),"wordy","lettered","Writing")
t.G()
t.F()
B.cp(t)
$.us=t
t=P.f(H.a([new E.I($.cQ,2,!0)],o),p)
n=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],s)
m=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data"],s)
l=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],s)
k=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],s)
j=H.a(["nobody"],s)
i=P.f(H.a([],o),p)
h=H.a(["Nobody"],s)
g=H.a(["Nobody"],s)
t=new D.md(t,n,m,l,k,!1,j,i,h,g,10,new H.o(0,null,null,null,null,null,0,r),["NONE"],Q.E(null,null,q),"awkward","techy","Technology")
t.G()
t.F()
B.cp(t)
$.uq=t
t=H.a(["nobody"],s)
p=P.f(H.a([],o),p)
o=H.a(["Nobody"],s)
s=H.a(["Nobody"],s)
t=new B.el(!0,t,p,o,s,-13,new H.o(0,null,null,null,null,null,0,r),["NONE"],Q.E(null,null,q),"","","Null")
t.G()
t.F()
B.cp(t)
$.um=t
A.zw()},
zw:function(){var t,s
if($.re)return
$.re=!0
t=[P.C]
s=new Y.mg(H.a([],t))
$.of=s
Z.cY(s,"txt",null)
Z.cY($.of,"vert","x-shader/x-vertex")
Z.cY($.of,"frag","x-shader/x-fragment")
$.uc=new Y.iO(H.a([],t))
s=new B.mE(H.a([],t))
$.qr=s
Z.cY(s,"zip",null)
Z.cY($.qr,"bundle",null)
s=new Q.ln(H.a([],t))
$.qq=s
Z.cY(s,"png",null)
Z.cY($.qq,"jpg","image/jpeg")
s=new M.lZ(H.a([],t))
$.ud=s
Z.cY(s,"psprite",null)
t=new V.jP(H.a([],t))
$.oe=t
Z.cY(t,"ttf",null)
Z.cY($.oe,"otf",null)
Z.cY($.oe,"woff",null)}},V={j1:function j1(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},jP:function jP(a){this.a=a},kT:function kT(rx,ry,x1,x2,y1,y2,q,B,C,K,E,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.q=q
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
_.r2=r2},lg:function lg(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},me:function me(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch}},U={j2:function j2(rx,ry,x1,x2,y1,y2,q,B,C,K,E,N,v,ad,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.q=q
_.B=B
_.C=C
_.K=K
_.E=E
_.N=N
_.v=v
_.ad=ad
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
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
_.r2=r2},jq:function jq(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},kI:function kI(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},c:function c(a){this.a=a},a9:function a9(b,c,a){this.b=b
this.c=c
this.a=a},af:function af(x,a,b,c,d,e,f,r){var _=this
_.x=x
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},lX:function lX(a){this.a=a},m_:function m_(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},mi:function mi(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id}},Q={e7:function e7(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},jT:function jT(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},j6:function j6(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},jZ:function jZ(){},ln:function ln(a){this.a=a},kw:function kw(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},lC:function lC(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},ms:function ms(rx,ry,x1,x2,y1,y2,q,B,C,K,E,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.q=q
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
rg:function(a,b,c,d,e,f){var t=[Q.ci]
t=new Q.ci(null,null,!1,null,0,0,0,0,!1,null,!0,!0,!0,!0,null,null,0,H.a([],t),!1,!1,[],!1,null,b,null,0,0,!1,null,null,null,c,null,null,null,null,null,d,!1,null,-1,!1,null,null,null,!0,!1,"#ff0000",null,null,null,null,f,!0,!1,!1,!1,0,0,0,!1,0,!1,!1,!1,null,C.c,a,"","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],[X.cO]),!1,H.a([],[Z.cx]),!1,H.a([],[N.cq]),0,H.a([],[E.I]),null,null,!1,H.a([],t),"",null,null)
t.n("",a)
t.eT(a,b,c,d,e,f)
return t},
ci:function ci(x1,x2,y1,y2,q,B,C,K,E,N,v,ad,aH,as,az,ab,b4,b5,bm,bn,b6,bo,b7,ac,dW,c1,c2,cI,c3,c4,c5,a7,b8,aI,aA,aB,b9,ba,cJ,bI,c6,cK,c7,bJ,bb,cL,aJ,Z,bK,bp,bc,b0,bL,cM,cN,cO,cP,c8,bq,br,cQ,bM,cR,cS,cT,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,a$){var _=this
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.q=q
_.B=B
_.C=C
_.K=K
_.E=E
_.N=N
_.v=v
_.ad=ad
_.aH=aH
_.as=as
_.az=az
_.ab=ab
_.b4=b4
_.b5=b5
_.bm=bm
_.bn=bn
_.b6=b6
_.bo=bo
_.b7=b7
_.ac=ac
_.dW=dW
_.c1=c1
_.c2=c2
_.cI=cI
_.c3=c3
_.c4=c4
_.c5=c5
_.a7=a7
_.b8=b8
_.aI=aI
_.aA=aA
_.aB=aB
_.b9=b9
_.ba=ba
_.cJ=cJ
_.bI=bI
_.c6=c6
_.cK=cK
_.c7=c7
_.bJ=bJ
_.bb=bb
_.cL=cL
_.aJ=aJ
_.Z=Z
_.bK=bK
_.bp=bp
_.bc=bc
_.b0=b0
_.bL=bL
_.cM=cM
_.cN=cN
_.cO=cO
_.cP=cP
_.c8=c8
_.bq=bq
_.br=br
_.cQ=cQ
_.bM=bM
_.cR=cR
_.cS=cS
_.cT=cT
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
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
E:function(a,b,c){var t=new Q.ft(null,null,[c])
t.eY(a,b,c)
return t},
dq:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.E(d,null,e)
s=a.gt(a)
C.a.st(t.b,s)
if(H.no(a,"$isG",[e],"$asG"))if(H.no(a,"$isbD",[e],"$asbD"))for(s=J.bx(a.gbe()),r=0;s.A();){q=s.gI()
p=t.b
o=p.length
if(r>=o)return H.S(p,r)
p[r]=q;++r}else for(s=a.gP(a),p=[H.J(t,0)],r=0;s.A();){n=s.gI()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.S(o,r)
o[r]=new Q.h(n,m,p);++r}else for(s=a.gP(a),p=[e],o=[H.J(t,0)];s.A();){l=s.gI()
if(H.pp(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.S(m,0)
m[0]=new Q.h(l,k,o)}else if(H.no(l,"$ish",p,null)){m=t.b
k=m.length
if(0>=k)return H.S(m,0)
m[0]=l}else throw H.u("Invalid entry type "+H.t(J.tm(l))+" for WeightedList<"+H.t(H.bQ(H.d8(e)))+">. Should be "+H.t(H.bQ(H.d8(e)))+" or WeightPair<"+H.t(H.bQ(H.d8(e)))+">.")}return t},
pf:function(a,b,c,d){var t,s,r,q,p,o,n
t=Q.E(c,null,d)
s=a.gt(a)
C.a.st(t.b,s)
for(s=a.ga9(),s=s.gP(s),r=[d],q=0;s.A();){p=s.gI()
o=a.m(0,p)
n=t.b
if(q>=n.length)return H.S(n,q)
n[q]=new Q.h(p,o,r);++q}return t},
my:function(a,b,c){return new Q.i8(J.pS(a.gbe(),new Q.mz(c,b)),null,[c])},
eC:function(a,b,c,d){return new Q.i7(J.pR(a.gbe(),new Q.mx(c,d,b)),null,[c,d])},
Aq:function(a,b,c){return new Q.fr(J.pS(a,new Q.m5(b,c)).aL(0,new Q.m6(b,c)),null,[b,c])},
bD:function bD(){},
ft:function ft(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
i6:function i6(){},
mw:function mw(a,b){this.a=a
this.b=b},
mv:function mv(a,b){this.a=a
this.b=b},
h:function h(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
c1:function c1(){},
eB:function eB(){},
mu:function mu(a,$ti){this.a=a
this.$ti=$ti},
i8:function i8(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
mz:function mz(a,b){this.a=a
this.b=b},
i7:function i7(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
mx:function mx(a,b,c){this.a=a
this.b=b
this.c=c},
fr:function fr(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
m5:function m5(a,b){this.a=a
this.b=b},
m6:function m6(a,b){this.a=a
this.b=b}},X={fY:function fY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},fL:function fL(){},jW:function jW(rx,ry,x1,x2,y1,y2,q,B,C,K,E,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.q=q
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
_.r2=r2},cO:function cO(){},D:function D(a,b,c){this.a=a
this.b=b
this.c=c}},N={W:function W(){},ko:function ko(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},lq:function lq(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},lB:function lB(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
_.id=id},lV:function lV(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},lW:function lW(rx,ry,x1,x2,y1,y2,q,B,C,K,E,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.q=q
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
_.r2=r2},mj:function mj(rx,ry,x1,x2,y1,y2,q,B,C,K,E,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.q=q
_.B=B
_.C=C
_.K=K
_.E=E
_.N=N
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
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
A0:function(a){var t,s,r,q
t=H.a([],[N.cq])
for(s=0;s<a.length;++s){r=a[s]
q=new N.cq(r.a,0,null,"",!1,"","Ambivalent","Friends","Totally In Love","Rivals","Enemies","Matesprits","Moirallegiance","Auspisticism","Kismesissitude")
q.hO(0)
q.b=r.b
q.c=r.gd3(r)
q.d=r.d
q.e=r.e
q.f=r.f
t.push(q)}return t},
cq:function cq(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db}},D={
od:function(a){var t=P.cz(P.C,D.eY)
t.T(0,a.a)
return new D.h7(t)},
cX:function(a,b,c){return new D.jK(a,new D.jL(c),b,[c])},
cW:function cW(){},
h7:function h7(a){this.a=a},
eY:function eY(){},
jK:function jK(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
jL:function jL(a){this.a=a},
md:function md(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
rq:function(a){var t=new D.ls([],[],0,"","",0,0,a)
t.eU(a)
return t},
t8:function(a,b,c){var t,s
for(t="",s=0;s<c;++s)t=C.e.ao(t,b)
return J.tr(a,b,t)},
AX:function(a){var t=[["x","%"],["X","%"],["s","z"],["w","vv"],["w","v"],["v","w"],["!","~"],["N","|\\/"],["\\b[a-z]*\\b","\u79c1"]]
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
if(a.a.D()>0.5)return a.w(t)
return a.w($.$get$pr())},
ls:function ls(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
Ao:function(){if($.rE)return
$.rE=!0
var t=new D.be("Experience","learned","na\xefve",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$ce().push(t)
t.y=0
$.pc=t
t=new D.be("Grist Level","rich","poor",!1,!1,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$ce().push(t)
$.An=t
t=new D.ia(0.03,"Power","strong","weak",!0,!0,!1,10,0.5,-1/0,1/0,-1/0,1/0)
$.$get$ce().push(t)
t.y=2.5
t.Q=1
$.r=t
t=new D.ia(0.04,"Health","sturdy","fragile",!0,!0,!1,10,1,-1/0,1/0,-1/0,1/0)
$.$get$ce().push(t)
t.y=2.5
$.ak=t
t=new D.be("Current Health","healthy","infirm",!1,!0,!0,1,1,-1/0,1/0,-1/0,1/0)
$.$get$ce().push(t)
$.b0=t
t=new D.be("Mobility","fast","slow",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$ce().push(t)
$.aU=t
t=new D.lw("Relationships","friendly","aggressive",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$ce().push(t)
$.c0=t
t=new D.be("Sanity","calm","crazy",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$ce().push(t)
$.aV=t
t=new D.be("Free Will","willful","gullible",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$ce().push(t)
$.bo=t
t=new D.be("Maximum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$ce().push(t)
$.bz=t
t=new D.be("Minimum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$ce().push(t)
$.bT=t
t=new D.be("Alchemy","creative","boring",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$ce().push(t)
$.cQ=t
t=new D.be("SBURB Lore","woke","clueless",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$ce().push(t)
$.c5=t},
pd:function(){var t=$.$get$ce()
return new H.bq(t,new D.m2(),[H.J(t,0)])},
Ap:function(){var t=$.$get$ce()
return new H.bq(t,new D.m3(),[H.J(t,0)])},
m2:function m2(){},
m3:function m3(){},
be:function be(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
ia:function ia(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
lw:function lw(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
lx:function lx(){},
ly:function ly(){}},E={
og:function(a,b){var t=new E.ch(null,C.c,b,a,"provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],[X.cO]),!1,H.a([],[Z.cx]),!1,H.a([],[N.cq]),0,H.a([],[E.I]),null,null,!1,H.a([],[Q.ci]),"",null,null)
t.n(a,b)
return t},
fk:function fk(a,b){this.a=a
this.b=b},
ch:function ch(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,a$){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
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
hS:function hS(){},
I:function I(a,b,c){this.a=a
this.b=b
this.c=c},
eM:function eM(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},
iC:function iC(a,b,c){this.a=a
this.b=b
this.c=c},
iD:function iD(a){this.a=a},
iE:function iE(a){this.a=a},
kV:function kV(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
lt:function lt(rx,ry,x1,x2,y1,y2,q,B,C,K,E,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.q=q
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
lH:function lH(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
mt:function mt(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
cr:function cr(){},
hR:function hR(){},
m0:function m0(a){this.a=a},
fo:function fo(){},
fj:function fj(){},
eu:function eu(c,a,b,$ti){var _=this
_.c=c
_.a=a
_.b=b
_.$ti=$ti},
hW:function hW(c,a,b){this.c=c
this.a=a
this.b=b},
ll:function ll(a){this.a=a},
lm:function lm(a){this.a=a},
iR:function iR(c,a,b){this.c=c
this.a=a
this.b=b}},B={jV:function jV(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
cp:function(a){if($.$get$hq().af(a.f))throw H.u("Duplicate aspect id for "+a.u(0)+": "+a.f+" is already registered for "+J.cm($.$get$hq().m(0,a.f))+".")
$.$get$hq().i(0,a.f,a)},
qt:function(){var t=$.$get$hq()
t=t.gaw(t)
return new H.bq(t,new B.k3(),[H.aM(t,"G",0)])},
qs:function(a,b){var t=new B.k2(null,null)
t.eP(a,b)
return t},
k3:function k3(){},
el:function el(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
k2:function k2(a,b){this.a=a
this.b=b},
mC:function mC(a){this.a=a},
mE:function mE(a){this.a=a}},G={kz:function kz(rx,ry,x1,x2,y1,y2,q,B,C,K,E,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.q=q
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
_.r2=r2},lo:function lo(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},lO:function lO(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,q,B,C,K,E,N,v,ad,aH,as,az,ab,b4,b5,bm,bn,b6,bo,b7){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
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
_.q=q
_.B=B
_.C=C
_.K=K
_.E=E
_.N=N
_.v=v
_.ad=ad
_.aH=aH
_.as=as
_.az=az
_.ab=ab
_.b4=b4
_.b5=b5
_.bm=bm
_.bn=bn
_.b6=b6
_.bo=bo
_.b7=b7},
q2:function(a){var t,s,r,q,p,o,n,m,l
t=G.Z
s=P.f6(a,t)
r=P.a2(null,null,null,t)
q=H.a([],[G.d])
for(t=G.oJ(),p=J.bx(t.a),t=new H.cR(p,t.b,[H.J(t,0)]);t.A();){o=p.gI()
if(o.e8(s))q.push(o)}t=q.length-1
if(t-0<=32)H.rD(q,0,t,P.ps())
else H.rC(q,0,t,P.ps())
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.c2)(q),++n){o=q[n]
if(o.e8(s)){r.h(0,o)
for(p=o.e,m=p.length,l=0;l<p.length;p.length===m||(0,H.c2)(p),++l)s.aj(0,p[l])}}if(s.a!==0)r.T(0,s)
return r},
oK:function(){var t=$.$get$b()
t.toString
return new H.bq(t,new G.kf(),[H.J(t,0)])},
oI:function(){var t=$.$get$b()
t.toString
return new H.bq(t,new G.kd(),[H.J(t,0)])},
r9:function(){var t=$.$get$b()
t.toString
return new H.bq(t,new G.kg(),[H.J(t,0)])},
oJ:function(){var t=$.$get$b()
t.toString
return new H.bq(t,new G.ke(),[H.J(t,0)])},
Z:function Z(){},
aT:function aT(a,b,c){this.a=a
this.b=b
this.c=c},
ag:function ag(a,b,c){this.a=a
this.b=b
this.c=c},
bC:function bC(a,b,c){this.a=a
this.b=b
this.c=c},
d:function d(d,e,a,b,c){var _=this
_.d=d
_.e=e
_.a=a
_.b=b
_.c=c},
kf:function kf(){},
kd:function kd(){},
kg:function kg(){},
ke:function ke(){}},R={
rf:function(a,b,c,d,e,f){var t=new R.hH(Q.E(null,null,R.d1),$.$get$qn(),e,f,!1,null,null,null,null,null,null,null,null,!1,!1,!1,null,null,null,null,null,!1,null,null,$.$get$h8(),null,null,null,Q.E(null,null,X.D),Q.E(null,null,N.W),P.cz(P.C,[Q.bD,N.W]))
t.eS(a,b,c,d,e,f)
return t},
hH:function hH(id,k1,k2,k3,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,b$,c$,d$,e$,f$,r$){var _=this
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
zY:function(a){var t,s
if(a.gt(a).aX(0,1)){a.m(0,1)
a.m(0,1)
t=!0}else t=!1
s=a.m(0,0)
s.gaP(s).gi4().dZ("checking for two players, ps is "+H.t(a)+", ret is "+t)
return t},
zL:function(a){return a.gR(a).gdV()},
zN:function(a){var t=a.gR(a)
return!t.gdV()&&!t.gaP(t).gH().gfV()},
zM:function(a){var t=a.gR(a)
return!t.gdV()&&t.gaP(t).gH().gfV()},
zJ:function(a){a.gR(a).gbB()
return!1},
zX:function(a){a.gR(a).gbB()
return!1},
zW:function(a){return J.ai(H.pD(J.pP(a),"$isci").a7,$.iy)},
zV:function(a){return a.gR(a).gbC().gi1()},
zT:function(a){return a.gR(a).gbC().gi_()},
zS:function(a){return a.gR(a).gbC().ghZ()},
zP:function(a){return a.gR(a).gbC().ghX()},
zR:function(a){return a.gR(a).gbC().ghY()},
zU:function(a){return a.gR(a).gbC().gi0()},
zQ:function(a){var t=a.gR(a)
t.gbB()
t.gbB()
return!1},
zK:function(a){return!0},
zO:function(a){var t,s
t=a.gR(a)
s="is it JR? "+H.t(t.gdP())
t.gdP()
P.e0(s+" false ")
t.gdP()
return!1},
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
a1:function a1(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
U:function U(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
aa:function aa(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
by:function by(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
d1:function d1(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
ez:function ez(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
m8:function m8(k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id){var _=this
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
eZ:function eZ(){}},F={kW:function kW(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
zA:function(e8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7
if($.et!=null)return
$.zz=e8
P.e0("initializing potential sprites")
t=Y.d5("Buggy As Fuck Retro Game")
s=[X.cO]
r=[Z.cx]
q=[N.cq]
p=[E.I]
o=[Q.ci]
n=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,t,"provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
n.n(t,null)
t=D.be
m=P.c6
n.a$.p(P.z([$.r,20],t,m))
n.fx=!0
n.x1="provides painful, painful sound file malfunctions, why is this even a thing? "
l=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Robot","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
l.n("Robot",null)
l.a$.p(P.z([$.r,100,$.ak,100,$.b0,100,$.bo,100],t,m))
l.x2=1
l.x1="is <b>more</b> useful than another player. How could a mere human measure up to the awesome logical capabilities of a machine? "
k=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Golfer","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
k.n("Golfer",null)
k.x2=1
k.a$.p(P.z([$.r,20,$.bT,20,$.bz,20],t,m))
k.x1="provides surprisingly helpful advice, even if they do insist on calling all enemies \u2018bogeys\u2019. "
j=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Dutton","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
j.n("Dutton",null)
j.x2=1
j.x1="provides transcendent wisdom. "
j.a$.p(P.z([$.r,10,$.ak,10,$.b0,10,$.bo,50,$.aU,50,$.bT,50,$.bz,50],t,m))
i=j.fy
h=Z.aA("Duttobliteration",2,null,"")
h.r.push(new Z.X($.bo,2,!0,0,1,2,3,""))
h.e=" The ENEMY is obliterated. Probably. A watermark of Charles Dutton appears, stage right. "
i.push(h)
h=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Game Bro","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
h.n("Game Bro",null)
h.a$.p(P.z([$.r,20],t,m))
h.x2=1
h.x1="provides rad as fuck tips and tricks for beating SBURB and getting mad snacks, yo. 5 out of 5 hats. "
i=Y.d5("Google")
g=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,i,"provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
g.n(i,null)
g.a$.p(P.z([$.r,20],t,m))
g.x2=1
g.fx=!0
g.x1="sure knows a lot about everything, but why does it only seem to return results about crashing SBURB?"
i=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Game Grl","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
i.n("Game Grl",null)
i.a$.p(P.z([$.r,20],t,m))
i.x2=1
i.x1="provides rad as fuck tips and tricks for beating SBURB and getting mad snacks, yo, but, like, while also being a GIRL? *record scratch*  5 out of 5 lady hats. "
f=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Paperclip","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
f.n("Paperclip",null)
f.a$.p(P.z([$.r,20],t,m))
f.x2=-1
f.x1="says: 'It looks like you're trying to play a cosmic game where you breed frogs to create a universe. Would you like me to'-No. 'Would you like me to'-No! 'It looks like you're'-shut up!!! This is not helpful."
e=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"WebComicCreator","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e.n("WebComicCreator",null)
e.a$.p(P.z([$.r,20],t,m))
e.x2=-1
e.x1="refuses to explain anything about SBURB to you, prefering to let you speculate wildly while cackling to himself."
d=e.fy
c=Z.aA("Kill ALL The Characters",2,null,"")
c.r.push(new Z.X($.bo,3,!0,0,1,2,3,""))
c.e=" All enemies are obliterated. Probably. A watermark of Andrew Hussie appears, stage right. "
d.push(c)
c=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"KidRock","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c.n("KidRock",null)
c.a$.p(P.z([$.r,20],t,m))
c.x2=-1
c.x1="does absolutly nothing but sing repetitive, late 90's rock to you."
d=c.fy
b=Z.aA("BANG DA DANG DIGGY DIGGY",2,null,"")
a=b.r
a.push(new Z.X($.r,3,!0,0,1,2,3,""))
a.push(new Z.X($.r,1,!1,0,1,2,3,""))
b.e=" OWNER plays a 90s hit classic, and you can't help but tap your feet. Somehow, this doesn't feel like the true version of this attack."
d.push(b)
b=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sleuth","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b.n("Sleuth",null)
b.a$.p(P.z([$.r,20,$.c0,100],t,m))
b.x2=-1
b.x1="suggests the player just input a password to skip all their land's weird puzzle shit. This is not actually a thing you can do."
d=b.fy
a=Z.aA("Sepulchritude",2,null,"")
a.r.push(new Z.X($.c0,1,!0,0,1,2,3,""))
a.e=" The OWNER decides not to bring that noise just yet. They just heal the party instead. "
d.push(a)
a=b.fy
d=Z.aA("Sepulchritude",2,null,"")
d.r.push(new Z.X($.c0,1,!0,0,1,2,3,""))
d.e=" THE OWNER just don't have the offensive gravitas for that attack. They just heal the party instead. "
a.push(d)
d=b.fy
a=Z.aA("Sepulchritude",2,null,"")
a.r.push(new Z.X($.c0,3,!0,0,1,2,3,""))
a.e=" The OWNER finally fucking unleashes their Ultimate Attack. The resplendent light of divine PULCHRITUDE consumes all enemies. "
d.push(a)
a=b.fy
d=Z.aA("Sepulchritude",2,null,"")
d.r.push(new Z.X($.c0,1,!0,0,1,2,3,""))
d.e=" No, not yet! The OWNER refuses to use Sepulchritude. They just heal the party instead. "
a.push(d)
d=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Nic Cage","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d.n("Nic Cage",null)
d.a$.p(P.z([$.r,20],t,m))
d.x2=1
d.x1="demonstrates that when it comes to solving bullshit riddles to get National *cough* I mean SBURBian treasure, he is simply the best there is. "
a=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Praying Mantis","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a.n("Praying Mantis",null)
a.a$.p(P.z([$.r,20,$.bz,20],t,m))
a0=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Shitty Comic Character","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a0.n("Shitty Comic Character",null)
a0.a$.p(P.z([$.r,20,$.aU,50],t,m))
a0.x2=-1
a0.x1=" is the STAR. It is them. You don't think they have ever once attempted to even talk about the game. How HIGH did you have to BE to prototype this glitchy piece of shit? "
a1=a0.fy
a2=Z.aA("FUCK IM FALLING DOWN ALL THESE STAIRS",3,null,"")
a2.r.push(new Z.X($.aU,1,!1,0,1,2,3,""))
a2.e=" It keeps hapening. "
a1.push(a2)
a2=a0.fy
a1=Z.aA("FUCK IM FALLING DOWN ALL THESE STAIRS",3,null,"")
a1.r.push(new Z.X($.aU,1,!1,0,1,2,3,""))
a1.e=" I warned you about stairs bro!!! "
a2.push(a1)
a1=a0.fy
a2=Z.aA("FUCK IM FALLING DOWN ALL THESE STAIRS",3,null,"")
a2.r.push(new Z.X($.aU,1,!1,0,1,2,3,""))
a2.e=" I told you dog! "
a1.push(a2)
a2=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Doctor","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a2.n("Doctor",null)
a2.a$.p(P.z([$.r,20],t,m))
a2.x2=1
a2.x1="is pretty much as useful as another player. No cagey riddles, just straight answers on how to finish the quests. "
a1=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Gerbil","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a1.n("Gerbil",null)
a1.a$.p(P.z([$.r,20],t,m))
a1.x2=1
a1.x1="remains physically adorable and mentally idiotic. Gigglysnort hideytalk ahoy. "
a3=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Chinchilla","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a3.n("Chinchilla",null)
a3.a$.p(P.z([$.r,20],t,m))
a3.x2=1
a3.x1="remains physically adorable and mentally idiotic. Gigglysnort hideytalk ahoy. "
a4=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Rabbit","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a4.n("Rabbit",null)
a4.a$.p(P.z([$.r,20,$.bz,100],t,m))
a4.x1="remains physically adorable and mentally idiotic. Gigglysnort hideytalk ahoy. "
a5=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Tissue","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a5.n("Tissue",null)
a5.x2=-1
a5.x1="is useless in every possible way. "
a6=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Librarian","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a6.n("Librarian",null)
a6.a$.p(P.z([$.r,20],t,m))
a6.x2=1
a6.x1="Is pretty much as useful as another player. No cagey riddles, just straight answers on where the book on how to finish the quest is, and could you please keep it down? "
a7=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Pit Bull","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a7.n("Pit Bull",null)
a7.a$.p(P.z([$.r,50],t,m))
a8=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Butler","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a8.n("Butler",null)
a8.a$.p(P.z([$.r,20,$.aV,50],t,m))
a8.x2=1
a8.x1="is serving their player like a dude on butlersprite island. "
a9=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sloth","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
a9.n("Sloth",null)
a9.a$.p(P.z([$.r,20,$.aU,-50],t,m))
a9.x1="provides. Slow. But. Useful. Advice."
b0=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Cowboy","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b0.n("Cowboy",null)
b0.a$.p(P.z([$.r,20],t,m))
b0.x2=1
b0.x1="provides useful advice, even if they do insist on calling literally everyone 'pardner.' "
b1=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Pomeranian","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b1.n("Pomeranian",null)
b1.a$.p(P.z([$.r,1],t,m))
b1.x2=-1
b1.x1="unhelpfully insists that every rock is probably a boss fight (it isn\u2019t). "
b2=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Chihuahua","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b2.n("Chihuahua",null)
b2.a$.p(P.z([$.r,1],t,m))
b2.x2=-1
b2.x1="unhelpfully insists that every rock is probably a boss fight (it isn\u2019t). "
b3=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Pony","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b3.n("Pony",null)
b3.a$.p(P.z([$.r,20,$.aV,-1000],t,m))
b3.x2=-1
b3.x1="is constantly flipping their fucking shit instead of being useful in any way shape or form, as ponies are known for. "
b4=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Horse","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b4.n("Horse",null)
b4.a$.p(P.z([$.r,20,$.aV,-100],t,m))
b4.x2=-1
b4.x1="is constantly flipping their fucking shit instead of being useful in any way shape or form, as horses are known for. "
b5=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Internet Troll","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b5.n("Internet Troll",null)
b5.a$.p(P.z([$.r,20,$.aV,1000],t,m))
b5.x2=-1
b5.x1="actively does its best to hinder their efforts. "
b6=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Mosquito","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b6.n("Mosquito",null)
b6.a$.p(P.z([$.r,20],t,m))
b6.x2=-1
b6.x1="is a complete dick, buzzing and fussing and biting. What's its deal? "
b7=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Fly","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b7.n("Fly",null)
b7.a$.p(P.z([$.r,20],t,m))
b7.x2=-1
b7.x1="is a complete dick, buzzing and fussing and biting. What's its deal? "
b8=Y.d5("GitHub")
b9=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,b8,"provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b9.n(b8,null)
b9.a$.p(P.z([$.r,20],t,m))
b9.x2=1
b9.fx=!0
b9.x1="Githubsprite tells all about the latest changes to sburbs code. "
b8=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Cow","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b8.n("Cow",null)
b8.a$.p(P.z([$.r,30],t,m))
c0=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Bird","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c0.n("Bird",null)
c0.a$.p(P.z([$.r,20,$.aU,50],t,m))
c0.x1="provides sort of helpful advice when not grabbing random objects to make nests. "
c1=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Bug","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c1.n("Bug",null)
c1.a$.p(P.z([$.r,20],t,m))
c1.x1="provides the requisite amount of buzzybuz zuzytalk to be juuuust barely helpful. "
c2=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Llama","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c2.n("Llama",null)
c2.a$.p(P.z([$.r,20],t,m))
c3=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Penguin","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c3.n("Penguin",null)
c3.a$.p(P.z([$.r,20],t,m))
c4=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Husky","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c4.n("Husky",null)
c4.a$.p(P.z([$.r,30],t,m))
c4.x1="alternates between loud, insistent barks and long, eloquent monologues on the deeper meaning behind each and every fragment of the game. "
c5=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Cat","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c5.n("Cat",null)
c5.a$.p(P.z([$.r,20,$.bT,-20,$.bz,20],t,m))
c5.x1="Is kind of helpful? Maybe? You can't tell if it loves their player or hates them. "
c6=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Dog","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c6.n("Dog",null)
c6.a$.p(P.z([$.r,30],t,m))
c6.x1="alternates between loud, insistent barks and long, eloquent monologues on the deeper meaning behind each and every fragment of the game. "
c7=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Pigeon","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c7.n("Pigeon",null)
c7.a$.p(P.z([$.r,0.5,$.bo,-40],t,m))
c8=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Octopus","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c8.n("Octopus",null)
c8.a$.p(P.z([$.r,20,$.aU,80],t,m))
c9=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Fish","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c9.n("Fish",null)
c9.a$.p(P.z([$.r,20],t,m))
c9.y1=!0
d0=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Kitten","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d0.n("Kitten",null)
d0.a$.p(P.z([$.r,20],t,m))
d0.x1="is kind of helpful? Maybe? You can't tell if it loves their player or hates them. "
d1=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Worm","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d1.n("Worm",null)
d1.a$.p(P.z([$.r,20],t,m))
d1.y1=!0
d2=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Bear","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d2.n("Bear",null)
d2.a$.p(P.z([$.r,50],t,m))
d3=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Goat","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d3.n("Goat",null)
d3.a$.p(P.z([$.r,20],t,m))
d4=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Rat","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d4.n("Rat",null)
d4.a$.p(P.z([$.r,20],t,m))
d5=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Raccoon","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d5.n("Raccoon",null)
d5.a$.p(P.z([$.r,20],t,m))
d5.x2=1
d5.x1="demonstrates that SBURB basically hides quest items in the same places humans would throw away their garbage. "
d6=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Crow","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d6.n("Crow",null)
d6.a$.p(P.z([$.r,20,$.bo,50],t,m))
d6.x1="provides sort of helpful advice when not grabbing random objects to make nests. "
d7=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Chicken","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d7.n("Chicken",null)
d7.a$.p(P.z([$.r,20,$.bo,-50],t,m))
d8=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Duck","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d8.n("Duck",null)
d8.a$.p(P.z([$.r,20],t,m))
d9=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sparrow","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d9.n("Sparrow",null)
d9.a$.p(P.z([$.r,20],t,m))
e0=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Fancy Santa","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e0.n("Fancy Santa",null)
e0.a$.p(P.z([$.r,20],t,m))
e0.x2=-1
e0.x1="goes hohohohohohohohoho. "
e1=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Politician","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e1.n("Politician",null)
e1.a$.p(P.z([$.r,20],t,m))
e1.x2=-1
e1.x1="offers a blueprint for an ECONONY that works for everyone. That would've been more useful before the earth was destroyed.... "
e2=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Tiger","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e2.n("Tiger",null)
e2.a$.p(P.z([$.r,50],t,m))
e2.x1="Provides just enough pants-shitingly terrifying growly-roar meow talk to be useful. "
e3=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sugar Glider","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e3.n("Sugar Glider",null)
e3.a$.p(P.z([$.r,20],t,m))
e3.x1="remains physically adorable and mentally idiotic. Gigglysnort hideytalk ahoy. "
e4=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Rapper","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e4.n("Rapper",null)
e4.a$.p(P.z([$.r,20],t,m))
e4.x2=1
e4.x1="provides surprisingly helpful advice, even if it does insist on some frankly antiquated slang and rhymes. I mean, civilization is dead, there isn\u2019t exactly a police left to fuck. "
e5=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Kangaroo","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e5.n("Kangaroo",null)
e5.a$.p(P.z([$.r,30,$.aU,30],t,m))
e6=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Stoner","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e6.n("Stoner",null)
e6.a$.p(P.z([$.r,42,$.bT,-42,$.bz,42],t,m))
e6.x2=1
e6.x1="is pretty much as useful as another player, assuming that player was higher then a fucking kite. "
e7=[E.ch]
$.et=H.a([n,l,k,j,h,g,i,f,e,c,b,d,a,a0,a2,a1,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b9,b8,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6],e7)
e6=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Frog","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e6.n("Frog",null)
e6.C=!0
e6.a$.p(P.z([$.aU,100,$.r,10],t,m))
e6.x1="provides the requisite amount of gigglesnort  hideytalk to be fairly useful, AND the underlings seem to go after it first! Bonus! "
e5=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Lizard","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e5.n("Lizard",null)
e5.a$.p(P.z([$.r,20],t,m))
e5.C=!0
e5.x1="provides the requisite amount of gigglesnort  hideytalk to be fairly useful, AND the underlings seem to go after it first! Bonus! "
e4=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Salamander","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e4.n("Salamander",null)
e4.C=!0
e4.a$.p(P.z([$.ak,500,$.b0,500,$.r,20],t,m))
e4.x1="provides the requisite amount of gigglesnort  hideytalk to be fairly useful, AND the underlings seem to go after it first! Bonus! "
e3=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Iguana","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e3.n("Iguana",null)
e3.C=!0
e3.x1="provides the requisite amount of gigglesnort  hideytalk to be fairly useful, AND the underlings seem to go after it first! Bonus! "
e2=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Crocodile","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e2.n("Crocodile",null)
e2.C=!0
e2.a$.p(P.z([$.r,50],t,m))
e2.x1="provides the requisite amount of gigglesnort  hideytalk to be fairly useful, AND the underlings seem to go after it first! Bonus! "
e1=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Turtle","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e1.n("Turtle",null)
e1.C=!0
e1.a$.p(P.z([$.aU,-100,$.r,20],t,m))
e1.x1="provides the requisite amount of gigglesnort  hideytalk to be fairly useful, AND the underlings seem to go after it first! Bonus! "
e0=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Alligator","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e0.n("Alligator",null)
e0.a$.p(P.z([$.ak,500,$.b0,500,$.aU,100,$.r,50],t,m))
e0.C=!0
e0.x1="provides the requisite amount of gigglesnort  hideytalk to be fairly useful, AND the underlings seem to go after it first! Bonus! "
d9=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Snake","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d9.n("Snake",null)
d9.y1=!0
d9.a$.p(P.z([$.ak,500,$.b0,500,$.aU,100,$.r,10],t,m))
d9.C=!0
d9.x1="providessss the requisssssite amount of gigglessssssnort hideytalk to be jusssssst barely helpful. AND the underlings seem to go after it first! Bonus! "
d8=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Axolotl","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d8.n("Axolotl",null)
d8.a$.p(P.z([$.r,20,$.ak,50,$.b0,50],t,m))
d8.C=!0
d8.x1="provides the requisite amount of gigglesnort  hideytalk to be fairly useful, AND the underlings seem to go after it first! Bonus! "
d7=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Newt","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d7.n("Newt",null)
d7.a$.p(P.z([$.r,20],t,m))
d7.C=!0
d7.x1="provides the requisite amount of gigglesnort  hideytalk to be fairly useful, AND the underlings seem to go after it first! Bonus! "
$.oY=H.a([e6,e5,e4,e3,e2,e1,e0,d9,d8,d7],e7)
d7=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"First Guardian","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d7.n("First Guardian",null)
d7.y2=!0
d7.a$.p(P.z([$.ak,1000,$.b0,1000,$.aU,500,$.r,250],t,m))
d7.x1="is fairly helpful with the teleporting and all, but when it speaks- Wow. No. That is not ok. "
d8=d7.fy
d9=Z.aA("Atomic Teleport Spam",3,null,"")
e0=d9.r
e0.push(new Z.X($.aU,0,!1,0,1,2,3,""))
e0.push(new Z.X($.aU,2,!0,0,1,2,3,""))
d9.e=" The OWNER shimers with radioactive stars, and then teleports behind the ENEMY, sneak-attacking them. "
d8.push(d9)
d9=Y.d5("Horror Terror")
d8=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,d9,"provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d8.n(d9,null)
d8.a$.p(P.z([$.ak,500,$.b0,500,$.bo,250,$.r,150],t,m))
d8.y2=!0
d8.fx=!0
d8.x1="... Oh god. What is going on. Why does just listening to it make your ears bleed!? "
d9=d8.fy
e0=Z.aA("Vast Glub",3,null,"")
e0.r.push(new Z.X($.bo,3,!0,0,1,2,3,""))
e0.e=" A galaxy spanning glub damages everyone. The only hope of survival is to spread the damage across so many enemies that everyone only takes a manageable amount. "
d9.push(e0)
e0=Y.d5("Speaker of the Furthest Ring")
d9=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,e0,"provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d9.n(e0,null)
d9.y2=!0
d9.fx=!0
d9.a$.p(P.z([$.ak,1000,$.b0,1000,$.bo,250,$.r,250],t,m))
d9.x1="whispers madness humankind was not meant to know. Its words are painful, hateful, yet\u2026 tempting. It speaks of flames and void, screams and gods. "
e0=d9.fy
e1=Z.aA("Vast Glub",3,null,"")
e1.r.push(new Z.X($.bo,3,!0,0,1,2,3,""))
e1.e=" A galaxy spanning glub damages everyone. The only hope of survival is to spread the damage across so many enemies that everyone only takes a manageable amount. "
e0.push(e1)
e1=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Clown","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e1.n("Clown",null)
e1.y2=!0
e1.a$.p(P.z([$.ak,1000,$.b0,1000,$.bT,-250,$.bz,250,$.r,100],t,m))
e1.x2=-1
e1.x1="goes hehehehehehehehehehehehehehehehehehehehehehehehehehe. "
e0=e1.fy
e2=Z.aA("Can't Keep Down The Clown",3,null,"")
e3=e2.r
e3.push(new Z.X($.aV,0,!1,0,1,2,3,""))
e3.push(new Z.X($.aV,0,!0,0,1,2,3,""))
e2.e=" You are pretty sure it is impossible for Clowns to die. "
e0.push(e2)
e2=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Puppet","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e2.n("Puppet",null)
e2.y2=!0
e2.a$.p(P.z([$.ak,500,$.b0,500,$.bo,250,$.aU,250,$.bT,-250,$.bz,250,$.aV,250,$.r,100],t,m))
e2.x1="is the most unhelpful piece of shit in the world. Oh my god, just once. Please, just shut up. "
e2.x2=-1
e0=e2.fy
e3=Z.aA("Hee Hee Hee Hoo!",3,null,"")
e4=e3.r
e4.push(new Z.X($.aV,3,!1,0,1,2,3,""))
e4.push(new Z.X($.aV,3,!0,0,1,2,3,""))
e3.e=" Oh god! Shut up! Just once! Please shut up! "
e0.push(e3)
e3=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Xenomorph","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e3.n("Xenomorph",null)
e3.y2=!0
e3.a$.p(P.z([$.ak,500,$.b0,500,$.aU,250,$.r,100],t,m))
e0=e3.fy
e4=Z.aA("Spawning",3,null,"")
e4.r.push(new Z.X($.cQ,3,!0,0,1,2,3,""))
e4.e=" Oh god. Where are all those baby monsters coming from. They are everywhere! Fuck! How are they so good at biting??? "
e0.push(e4)
e4=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Deadpool","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e4.n("Deadpool",null)
e4.y2=!0
e4.a$.p(P.z([$.ak,500,$.b0,500,$.aU,250,$.bT,-250,$.bz,250,$.r,100],t,m))
e4.x2=1
e4.x1="demonstrates that when it comes to providing fourth wall breaking advice to getting through quests and killing baddies, he is pretty much the best there is. "
e0=e4.fy
e5=Z.aA("Degenerate Regeneration",3,null,"")
e5.r.push(new Z.X($.ak,0,!0,0,1,2,3,""))
e5.e=" Hey there, Observer! Want to see a neat trick? POW! Grew my own head back. Pretty cool, huh? (Now if only JR would let me spam this or make it be castable even while dead, THEN we'd be cooking with petrol) "
e0.push(e5)
e5=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Dragon","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e5.n("Dragon",null)
e5.y2=!0
e5.a$.p(P.z([$.ak,500,$.b0,500,$.r,100],t,m))
e5.x1="breathes fire and offers condescending, yet useful advice. "
e0=e5.fy
e6=Z.aA("Mighty Fire Breath",3,null,"")
e6.r.push(new Z.X($.r,3,!0,0,1,2,3,""))
e6.e=" With a mighty breath, OWNER spits all the fires, sick and otherwise."
e0.push(e6)
e6=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Teacher","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e6.n("Teacher",null)
e6.y2=!0
e6.a$.p(P.z([$.ak,500,$.b0,500,$.r,100],t,m))
e6.x2=-1
e6.x1="dials the sprites natural tendency towards witholding information to have you 'figure it out yourself' up to eleven. "
e0=e6.fy
d6=Z.aA("Lecture",3,null,"")
d5=d6.r
d5.push(new Z.X($.bo,3,!1,0,1,2,3,""))
d5.push(new Z.X($.aV,3,!1,0,1,2,3,""))
d6.e=" OWNER begins a 3 part lecture on why you should probably just give up. It is hypnotic in it's ceaselessness."
e0.push(d6)
d6=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Fiduspawn","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d6.n("Fiduspawn",null)
d6.y2=!0
d6.a$.p(P.z([$.ak,500,$.b0,500,$.r,100],t,m))
e0=d6.fy
d5=Z.aA("Spawning",3,null,"")
d5.r.push(new Z.X($.cQ,3,!0,0,1,2,3,""))
d5.e=" Oh god. Where are all those baby monsters coming from. They are everywhere! Fuck! How are they so good at biting??? "
e0.push(d5)
d5=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Doll","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d5.n("Doll",null)
d5.y2=!0
d5.a$.p(P.z([$.ak,500,$.b0,500,$.r,100],t,m))
d5.x2=-1
d5.x1="stares creepily. It never moves when you're watching it. It's basically the worst, and that's all there is to say on that topic. "
e0=d5.fy
d4=Z.aA("Disconcerting Ogle",3,null,"")
d3=d4.r
d3.push(new Z.X($.aV,3,!1,0,1,2,3,""))
d3.push(new Z.X($.aV,0,!0,0,1,2,3,""))
d4.e=" OWNER is staring at ENEMY. It makes you uncomfortable, the way they are just standing there. And watching.  "
e0.push(d4)
d4=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Zombie","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d4.n("Zombie",null)
d4.y2=!0
d4.a$.p(P.z([$.ak,500,$.b0,500,$.r,100],t,m))
e0=d4.fy
d3=Z.aA("Rise From The Grave",3,null,"")
d3.r.push(new Z.X($.ak,0,!0,0,1,2,3,""))
d3.e=" You thought the OWNER was pretty hurt, but instead they are just getting going. "
e0.push(d3)
d3=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Demon","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d3.n("Demon",null)
d3.y2=!0
d3.a$.p(P.z([$.ak,500,$.b0,500,$.bo,250,$.r,250],t,m))
e0=d3.fy
d2=Z.aA("Claw Claw MotherFuckers",3,null,"")
d1=d2.r
d1.push(new Z.X($.r,2,!0,0,1,2,3,""))
d1.push(new Z.X($.r,2,!0,0,1,2,3,""))
d2.e=" The OWNER slashes at the ENEMY twice. "
e0.push(d2)
d2=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Monster","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d2.n("Monster",null)
d2.y2=!0
d2.a$.p(P.z([$.ak,500,$.b0,500,$.aV,-250,$.bz,250,$.r,100],t,m))
e0=d2.fy
d1=Z.aA("Claw Claw MotherFuckers",3,null,"")
d0=d1.r
d0.push(new Z.X($.r,2,!0,0,1,2,3,""))
d0.push(new Z.X($.r,2,!0,0,1,2,3,""))
d1.e=" The OWNER slashes at the ENEMY twice. "
e0.push(d1)
d1=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Vampire","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d1.n("Vampire",null)
d1.y2=!0
d1.a$.p(P.z([$.ak,500,$.b0,500,$.aU,250,$.r,100],t,m))
e0=d1.fy
d0=Z.aA("I Vant to Drink Your Blood",3,null,"")
c9=d0.r
c9.push(new Z.X($.ak,2,!0,0,1,2,3,""))
c9.push(new Z.X($.ak,0,!0,0,1,2,3,""))
d0.e=" The OWNER drains HP from the ENEMY. "
e0.push(d0)
d0=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Pumpkin","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d0.n("Pumpkin",null)
d0.y2=!0
d0.a$.p(P.z([$.ak,500,$.b0,500,$.aU,5000,$.bT,-250,$.bz,5000,$.r,100],t,m))
d0.x1="was kind of helpful, and then kind of didn\u2019t exist. Please don\u2019t think too hard about it, the simulation is barely handling a pumpkin sprite as is. "
e0=d0.fy
c9=Z.aA("What Pumpkin???",3,null,"")
c8=c9.r
c8.push(new Z.X($.aU,2,!1,0,1,2,3,""))
c8.push(new Z.X($.aU,3,!0,0,1,2,3,""))
c9.e=" Everyone tries to hit the OWNER until suddenly they have never been there at all, causing attacks to miss so catastrophically they backfire. "
e0.push(c9)
c9=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Werewolf","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c9.n("Werewolf",null)
c9.y2=!0
c9.a$.p(P.z([$.ak,500,$.b0,500,$.aV,-250,$.r,100],t,m))
e0=c9.fy
c8=Z.aA("Grim Bark Slash Attack",3,null,"")
c7=c8.r
c7.push(new Z.X($.r,2,!0,0,1,2,3,""))
c7.push(new Z.X($.r,2,!0,0,1,2,3,""))
c8.e=" The OWNER slashes at the ENEMY twice. While being a werewolf. "
e0.push(c8)
c8=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Jet Engine","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c8.n("Jet Engine",null)
c8.y2=!0
c8.a$.p(P.z([$.ak,500,$.b0,500,$.aU,500,$.r,100],t,m))
e0=c8.fy
c7=Z.aA("NO  CAPES",3,null,"")
c6=c7.r
c6.push(new Z.X($.r,2,!0,0,1,2,3,""))
c6.push(new Z.X($.r,2,!0,0,1,2,3,""))
c7.e=" The OWNER sucks the ENEMY in towards their spinning blades of death. "
e0.push(c7)
c7=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Monkey","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c7.n("Monkey",null)
c7.y2=!0
c7.x2=-1
c7.a$.p(P.z([$.ak,5,$.b0,5,$.aU,5000,$.bT,-5000,$.bz,-5000,$.r,100],t,m))
c7.x1="actively interferes with quests. Just. Fuck monkeys. "
e0=c7.fy
c6=Z.aA("Monkey Business",3,null,"")
c5=c6.r
c5.push(new Z.X($.aU,0,!1,0,1,2,3,""))
c5.push(new Z.X($.aU,2,!0,0,1,2,3,""))
c6.e=" The OWNER uses their monkey like fastness to attack the ENEMY just way too fucking many times. "
e0.push(c6)
$.oX=H.a([d7,d8,d9,e1,e2,e3,e4,e5,e6,d6,d5,d4,d3,d2,d1,d0,c9,c8,c7],e7)
c7=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Hoofbeast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c7.n("Hoofbeast",null)
c7.q=!0
c7.a$.p(P.z([$.r,30],t,m))
c8=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Meow Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c8.n("Meow Beast",null)
c8.q=!0
c8.a$.p(P.z([$.r,30,$.bT,20,$.bz,20],t,m))
c8.x1="is kind of helpful? Maybe? You can't tell if it loves their player or hates them. "
c9=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Bark Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c9.n("Bark Beast",null)
c9.q=!0
c9.a$.p(P.z([$.r,40],t,m))
c9.x1="alternates between loud, insistent barks and long, eloquent monologues on the deeper meaning behind each and every fragment of the game. "
d0=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Nut Creature","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d0.n("Nut Creature",null)
d0.q=!0
d0.a$.p(P.z([$.r,30,$.aU,30],t,m))
d1=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Gobblefiend","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d1.n("Gobblefiend",null)
d1.q=!0
d1.a$.p(P.z([$.r,50],t,m))
d1.x2=-1
d1.x1="is the most unhelpful piece of shit in the world. Oh my god, just once. Please, just shut up. "
d2=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Bicyclops","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d2.n("Bicyclops",null)
d2.q=!0
d2.a$.p(P.z([$.r,30],t,m))
d3=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Centaur","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d3.n("Centaur",null)
d3.q=!0
d3.a$.p(P.z([$.r,50,$.aV,50],t,m))
d4=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Fairy Bull","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d4.n("Fairy Bull",null)
d4.q=!0
d4.a$.p(P.z([$.r,1],t,m))
d5=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Slither Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d5.n("Slither Beast",null)
d5.q=!0
d5.a$.p(P.z([$.r,30],t,m))
d5.y1=!0
d6=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Wiggle Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d6.n("Wiggle Beast",null)
d6.q=!0
d6.a$.p(P.z([$.r,30],t,m))
e6=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Honkbird","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e6.n("Honkbird",null)
e6.q=!0
e6.a$.p(P.z([$.r,30],t,m))
e5=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Dig Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e5.n("Dig Beast",null)
e5.q=!0
e5.a$.p(P.z([$.r,30],t,m))
e4=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Cholerbear","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e4.n("Cholerbear",null)
e4.q=!0
e4.a$.p(P.z([$.r,50],t,m))
e3=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Antler Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e3.n("Antler Beast",null)
e3.q=!0
e3.a$.p(P.z([$.r,30,$.aU,30],t,m))
e2=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Ram Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e2.n("Ram Beast",null)
e2.q=!0
e2.a$.p(P.z([$.r,30],t,m))
e1=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Crab","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e1.n("Crab",null)
e1.q=!0
e1.a$.p(P.z([$.r,30],t,m))
d9=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Spider","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d9.n("Spider",null)
d9.q=!0
d9.a$.p(P.z([$.r,30],t,m))
d8=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Thief Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d8.n("Thief Beast",null)
d8.q=!0
d8.a$.p(P.z([$.r,30],t,m))
d7=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"March Bug","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d7.n("March Bug",null)
d7.q=!0
d7.a$.p(P.z([$.r,30],t,m))
c6=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Nibble Vermin","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c6.n("Nibble Vermin",null)
c6.q=!0
c6.a$.p(P.z([$.r,30],t,m))
e0=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Woolbeast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e0.n("Woolbeast",null)
e0.q=!0
e0.a$.p(P.z([$.r,30],t,m))
c5=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Hop Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c5.n("Hop Beast",null)
c5.q=!0
c5.a$.p(P.z([$.r,30,$.bz,30],t,m))
c4=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Stink Creature","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c4.n("Stink Creature",null)
c4.q=!0
c4.a$.p(P.z([$.r,30],t,m))
c3=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Speed Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c3.n("Speed Beast",null)
c3.q=!0
c3.a$.p(P.z([$.r,30,$.aU,50],t,m))
c2=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Jump Creature","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c2.n("Jump Creature",null)
c2.q=!0
c2.a$.p(P.z([$.r,30],t,m))
c1=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Fight Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c1.n("Fight Beast",null)
c1.q=!0
c1.a$.p(P.z([$.r,50],t,m))
c0=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Claw Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c0.n("Claw Beast",null)
c0.q=!0
c0.a$.p(P.z([$.r,50],t,m))
b8=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Tooth Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b8.n("Tooth Beast",null)
b8.q=!0
b8.a$.p(P.z([$.r,50],t,m))
b9=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Armor Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b9.n("Armor Beast",null)
b9.a$.p(P.z([$.r,30,$.b0,100,$.ak,100],t,m))
b9.q=!0
b7=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Trap Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b7.n("Trap Beast",null)
b7.q=!0
b7.a$.p(P.z([$.r,30],t,m))
$.oZ=H.a([c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,e6,e5,e4,e3,e2,e1,d9,d8,d7,c6,e0,c5,c4,c3,c2,c1,c0,b8,b9,b7],e7)
e7=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Zap Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e7.n("Zap Beast",null)
e7.q=!0
e7.a$.p(P.z([$.r,50],t,m))
b7=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sea Slither Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b7.n("Sea Slither Beast",null)
b7.q=!0
b7.a$.p(P.z([$.r,30],t,m))
b7.y1=!0
b9=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Electric Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b9.n("Electric Beast",null)
b9.q=!0
b9.a$.p(P.z([$.r,50],t,m))
b9.y1=!0
b8=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Whale","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
b8.n("Whale",null)
b8.a$.p(P.z([$.r,30,$.b0,50,$.ak,50],t,m))
b8.q=!0
b8.y1=!0
c0=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sky Horse","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c0.n("Sky Horse",null)
c0.q=!0
c0.a$.p(P.z([$.r,30,$.aU,20],t,m))
c1=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sea Meow Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c1.n("Sea Meow Beast",null)
c1.q=!0
c1.a$.p(P.z([$.r,30,$.bT,20,$.bz,20],t,m))
c2=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sea Hoofbeast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c2.n("Sea Hoofbeast",null)
c2.q=!0
c2.a$.p(P.z([$.r,30],t,m))
c3=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Cuttlefish","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c3.n("Cuttlefish",null)
c3.q=!0
c3.a$.p(P.z([$.r,30],t,m))
c4=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Swim Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c4.n("Swim Beast",null)
c4.q=!0
c4.a$.p(P.z([$.r,30],t,m))
c5=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sea Goat","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c5.n("Sea Goat",null)
c5.q=!0
c5.a$.p(P.z([$.r,30,$.bT,-30,$.bz,30],t,m))
e0=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Light Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
e0.n("Light Beast",null)
e0.a$.p(P.z([$.r,30],t,m))
c6=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Dive Beast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
c6.n("Dive Beast",null)
c6.q=!0
c6.a$.p(P.z([$.r,30],t,m))
d7=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Honkbird","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d7.n("Honkbird",null)
d7.q=!0
d7.a$.p(P.z([$.r,30],t,m))
d8=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sea Bear","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
d8.n("Sea Bear",null)
d8.q=!0
d8.a$.p(P.z([$.r,30],t,m))
o=new F.y("provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,null,C.c,null,"Sea Armorbeast","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],s),!1,H.a([],r),!1,H.a([],q),0,H.a([],p),null,null,!1,H.a([],o),"",null,null)
o.n("Sea Armorbeast",null)
o.q=!0
o.a$.p(P.z([$.r,30,$.b0,50,$.ak,50],t,m))
$.p_=H.a([e7,b7,b9,b8,c0,c1,c2,c3,c4,c5,e0,c6,d7,d8,o],[F.y])
o=$.et;(o&&C.a).T(o,$.oX)
o=$.et;(o&&C.a).T(o,$.oY)
o=$.et;(o&&C.a).T(o,$.oZ)
o=$.et;(o&&C.a).T(o,$.p_)},
kX:function kX(){},
dt:function dt(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,a$){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
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
i0:function i0(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,a$){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
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
y:function y(x1,x2,y1,y2,q,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,a$){var _=this
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.q=q
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
mB:function mB(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
oV:function(a){if(a===C.N){window
return C.j.gfW(C.j)}if(a===C.O){window
return C.j.ghP()}if(a===C.P){window
return C.j.gh5()}return P.AT()},
eq:function eq(a,b){this.a=a
this.b=b},
hE:function hE(a,b){this.a=a
this.b=b}}
var v=[C,H,J,P,W,T,S,K,L,M,O,Y,Z,A,V,U,Q,X,N,D,E,B,G,R,F]
setFunctionNamesIfNecessary(v)
var $={}
H.oR.prototype={}
J.Y.prototype={
S:function(a,b){return a===b},
ga6:function(a){return H.dy(a)},
u:function(a){return H.lp(a)},
ga_:function(a){return new H.d4(H.fE(a),null)},
$iseZ:1,
$isbi:1}
J.kk.prototype={
u:function(a){return String(a)},
ga6:function(a){return a?519018:218159},
ga_:function(a){return C.a5},
$iscS:1}
J.hA.prototype={
S:function(a,b){return null==b},
u:function(a){return"null"},
ga6:function(a){return 0},
ga_:function(a){return C.a_}}
J.f3.prototype={
ga6:function(a){return 0},
ga_:function(a){return C.Z},
u:function(a){return String(a)},
$isrb:1}
J.lk.prototype={}
J.dU.prototype={}
J.dO.prototype={
u:function(a){var t=a[$.$get$q3()]
return t==null?this.eH(a):J.cm(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.dM.prototype={
cF:function(a,b){if(!!a.immutable$list)throw H.u(new P.bp(b))},
bk:function(a,b){if(!!a.fixed$length)throw H.u(new P.bp(b))},
h:function(a,b){this.bk(a,"add")
a.push(b)},
dD:function(a,b,c){var t,s,r,q,p
t=[]
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q)!==!0===c)t.push(q)
if(a.length!==s)throw H.u(new P.bR(a))}p=t.length
if(p===s)return
this.st(a,p)
for(r=0;r<t.length;++r)a[r]=t[r]},
aD:function(a,b){return new H.bq(a,b,[H.J(a,0)])},
T:function(a,b){var t
this.bk(a,"addAll")
for(t=J.bx(b);t.A();)a.push(t.gI())},
aL:function(a,b){return new H.d0(a,b,[H.J(a,0),null])},
bs:function(a,b){var t,s,r,q
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<a.length;++r){q=H.t(a[r])
if(r>=t)return H.S(s,r)
s[r]=q}return s.join(b)},
df:function(a,b){return H.rG(a,b,null,H.J(a,0))},
X:function(a,b){if(b<0||b>=a.length)return H.S(a,b)
return a[b]},
dg:function(a,b,c){var t=a.length
if(b>t)throw H.u(P.cd(b,0,a.length,"start",null))
if(typeof c!=="number"||Math.floor(c)!==c)throw H.u(H.cs(c))
if(c<b||c>a.length)throw H.u(P.cd(c,b,a.length,"end",null))
if(b===c)return H.a([],[H.J(a,0)])
return H.a(a.slice(b,c),[H.J(a,0)])},
gR:function(a){if(a.length>0)return a[0]
throw H.u(H.cP())},
gcZ:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.u(H.cP())},
ax:function(a,b,c,d,e){var t,s,r
this.cF(a,"setRange")
P.p6(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.ba(P.cd(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.u(H.ra())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r<0||r>=d.length)return H.S(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r<0||r>=d.length)return H.S(d,r)
a[b+s]=d[r]}},
dJ:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])===!0)return!0
if(a.length!==t)throw H.u(new P.bR(a))}return!1},
fY:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])!==!0)return!1
if(a.length!==t)throw H.u(new P.bR(a))}return!0},
er:function(a,b){var t
this.cF(a,"sort")
t=b==null?P.ps():b
H.i_(a,0,a.length-1,t)},
h4:function(a,b,c){var t
if(c>=a.length)return-1
for(t=c;t<a.length;++t)if(J.ai(a[t],b))return t
return-1},
ca:function(a,b){return this.h4(a,b,0)},
U:function(a,b){var t
for(t=0;t<a.length;++t)if(J.ai(a[t],b))return!0
return!1},
ga4:function(a){return a.length===0},
u:function(a){return P.f2(a,"[","]")},
a5:function(a,b){var t=H.a(a.slice(0),[H.J(a,0)])
return t},
aM:function(a){return this.a5(a,!0)},
gP:function(a){return new J.e2(a,a.length,0,null,[H.J(a,0)])},
ga6:function(a){return H.dy(a)},
gt:function(a){return a.length},
st:function(a,b){this.bk(a,"set length")
if(b<0)throw H.u(P.cd(b,0,null,"newLength",null))
a.length=b},
m:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.u(H.bU(a,b))
if(b>=a.length||b<0)throw H.u(H.bU(a,b))
return a[b]},
i:function(a,b,c){this.cF(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.u(H.bU(a,b))
if(b>=a.length||b<0)throw H.u(H.bU(a,b))
a[b]=c},
$iscl:1,
$ascl:function(){},
$isM:1,
$asM:null,
$isP:1,
$asP:null,
$isG:1,
$asG:null}
J.oQ.prototype={}
J.e2.prototype={
gI:function(){return this.d},
A:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.u(H.c2(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.ep.prototype={
aG:function(a,b){var t
if(typeof b!=="number")throw H.u(H.cs(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gcY(b)
if(this.gcY(a)===t)return 0
if(this.gcY(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcY:function(a){return a===0?1/a<0:a<0},
b1:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.u(new P.bp(""+a+".floor()"))},
ak:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.u(new P.bp(""+a+".round()"))},
a3:function(a,b,c){if(this.aG(b,c)>0)throw H.u(H.cs(b))
if(this.aG(a,b)<0)return b
if(this.aG(a,c)>0)return c
return a},
l:function(a){return a},
d5:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.u(P.cd(b,2,36,"radix",null))
t=a.toString(b)
if(C.e.fG(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.ba(new P.bp("Unexpected toString result: "+t))
r=J.bV(s)
t=r.m(s,1)
q=+r.m(s,3)
if(r.m(s,2)!=null){t+=r.m(s,2)
q-=r.m(s,2).length}return t+C.e.aO("0",q)},
u:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga6:function(a){return a&0x1FFFFFFF},
ao:function(a,b){if(typeof b!=="number")throw H.u(H.cs(b))
return a+b},
aF:function(a,b){if(typeof b!=="number")throw H.u(H.cs(b))
return a-b},
aO:function(a,b){if(typeof b!=="number")throw H.u(H.cs(b))
return a*b},
am:function(a,b){return(a|0)===a?a/b|0:this.fj(a,b)},
fj:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.u(new P.bp("Result of truncating division is "+H.t(t)+": "+H.t(a)+" ~/ "+H.t(b)))},
cB:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
aN:function(a,b){if(typeof b!=="number")throw H.u(H.cs(b))
return a<b},
aX:function(a,b){if(typeof b!=="number")throw H.u(H.cs(b))
return a>b},
ga_:function(a){return C.a8},
$isc6:1}
J.hz.prototype={
ga_:function(a){return C.a7},
$isR:1,
$isc6:1,
$isa6:1}
J.hy.prototype={
ga_:function(a){return C.a6},
$isR:1,
$isc6:1}
J.dN.prototype={
fG:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.u(H.bU(a,b))
if(b<0)throw H.u(H.bU(a,b))
if(b>=a.length)H.ba(H.bU(a,b))
return a.charCodeAt(b)},
dm:function(a,b){if(b>=a.length)throw H.u(H.bU(a,b))
return a.charCodeAt(b)},
fv:function(a,b,c){if(c>b.length)throw H.u(P.cd(c,0,b.length,null,null))
return new H.nf(b,a,c)},
fu:function(a,b){return this.fv(a,b,0)},
ao:function(a,b){if(typeof b!=="string")throw H.u(P.fH(b,null,null))
return a+b},
hB:function(a,b,c){return H.nK(a,b,c)},
eB:function(a,b){var t=a.split(b)
return t},
eC:function(a,b,c){var t
if(c>a.length)throw H.u(P.cd(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
cl:function(a,b){return this.eC(a,b,0)},
co:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.ba(H.cs(c))
if(b<0)throw H.u(P.fm(b,null,null))
if(typeof c!=="number")return H.br(c)
if(b>c)throw H.u(P.fm(b,null,null))
if(c>a.length)throw H.u(P.fm(c,null,null))
return a.substring(b,c)},
bV:function(a,b){return this.co(a,b,null)},
hJ:function(a){return a.toLowerCase()},
hM:function(a){return a.toUpperCase()},
aO:function(a,b){var t,s
if(typeof b!=="number")return H.br(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.u(C.A)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
d0:function(a,b,c){var t=b-a.length
if(t<=0)return a
return this.aO(c,t)+a},
dU:function(a,b,c){if(c>a.length)throw H.u(P.cd(c,0,a.length,null,null))
return H.Bh(a,b,c)},
U:function(a,b){return this.dU(a,b,0)},
ga4:function(a){return a.length===0},
aG:function(a,b){var t
if(typeof b!=="string")throw H.u(H.cs(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
u:function(a){return a},
ga6:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
ga_:function(a){return C.a0},
gt:function(a){return a.length},
m:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.u(H.bU(a,b))
if(b>=a.length||b<0)throw H.u(H.bU(a,b))
return a[b]},
$iscl:1,
$ascl:function(){},
$isC:1}
H.P.prototype={$asP:null}
H.dP.prototype={
gP:function(a){return new H.hD(this,this.gt(this),0,null,[H.aM(this,"dP",0)])},
ga4:function(a){return this.gt(this)===0},
gR:function(a){if(this.gt(this)===0)throw H.u(H.cP())
return this.X(0,0)},
U:function(a,b){var t,s
t=this.gt(this)
for(s=0;s<t;++s){if(J.ai(this.X(0,s),b))return!0
if(t!==this.gt(this))throw H.u(new P.bR(this))}return!1},
bs:function(a,b){var t,s,r,q
t=this.gt(this)
if(b.length!==0){if(t===0)return""
s=H.t(this.X(0,0))
if(t!==this.gt(this))throw H.u(new P.bR(this))
for(r=s,q=1;q<t;++q){r=r+b+H.t(this.X(0,q))
if(t!==this.gt(this))throw H.u(new P.bR(this))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<t;++q){r+=H.t(this.X(0,q))
if(t!==this.gt(this))throw H.u(new P.bR(this))}return r.charCodeAt(0)==0?r:r}},
aD:function(a,b){return this.eG(0,b)},
aL:function(a,b){return new H.d0(this,b,[H.aM(this,"dP",0),null])},
hv:function(a,b){var t,s,r
t=this.gt(this)
if(t===0)throw H.u(H.cP())
s=this.X(0,0)
for(r=1;r<t;++r){s=b.$2(s,this.X(0,r))
if(t!==this.gt(this))throw H.u(new P.bR(this))}return s},
a5:function(a,b){var t,s,r
t=H.a([],[H.aM(this,"dP",0)])
C.a.st(t,this.gt(this))
for(s=0;s<this.gt(this);++s){r=this.X(0,s)
if(s>=t.length)return H.S(t,s)
t[s]=r}return t},
aM:function(a){return this.a5(a,!0)}}
H.m4.prototype={
gf6:function(){var t=J.cU(this.a)
return t},
gfi:function(){var t,s
t=J.cU(this.a)
s=this.b
if(typeof s!=="number")return s.aX()
if(s>t)return t
return s},
gt:function(a){var t,s
t=J.cU(this.a)
s=this.b
if(typeof s!=="number")return s.eb()
if(s>=t)return 0
return t-s},
X:function(a,b){var t,s
t=this.gfi()
if(typeof t!=="number")return t.ao()
s=t+b
if(b>=0){t=this.gf6()
if(typeof t!=="number")return H.br(t)
t=s>=t}else t=!0
if(t)throw H.u(P.cZ(b,this,"index",null,null))
return J.nO(this.a,s)},
a5:function(a,b){var t,s,r,q,p,o,n,m
t=this.b
s=this.a
r=J.bV(s)
q=r.gt(s)
if(typeof t!=="number")return H.br(t)
p=q-t
if(p<0)p=0
o=this.$ti
if(b){n=H.a([],o)
C.a.st(n,p)}else n=H.a(new Array(p),o)
for(m=0;m<p;++m){o=r.X(s,t+m)
if(m>=n.length)return H.S(n,m)
n[m]=o
if(r.gt(s)<q)throw H.u(new P.bR(this))}return n},
aM:function(a){return this.a5(a,!0)},
eW:function(a,b,c,d){var t=this.b
if(typeof t!=="number")return t.aN()
if(t<0)H.ba(P.cd(t,0,null,"start",null))}}
H.hD.prototype={
gI:function(){return this.d},
A:function(){var t,s,r,q
t=this.a
s=J.bV(t)
r=s.gt(t)
if(this.b!==r)throw H.u(new P.bR(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.X(t,q);++this.c
return!0}}
H.f7.prototype={
gP:function(a){return new H.hF(null,J.bx(this.a),this.b,this.$ti)},
gt:function(a){return J.cU(this.a)},
ga4:function(a){return J.pQ(this.a)},
gR:function(a){return this.b.$1(J.pP(this.a))},
X:function(a,b){return this.b.$1(J.nO(this.a,b))},
$asG:function(a,b){return[b]}}
H.fV.prototype={$isP:1,
$asP:function(a,b){return[b]},
$asG:function(a,b){return[b]}}
H.hF.prototype={
A:function(){var t=this.b
if(t.A()){this.a=this.c.$1(t.gI())
return!0}this.a=null
return!1},
gI:function(){return this.a},
$ashx:function(a,b){return[b]}}
H.d0.prototype={
gt:function(a){return J.cU(this.a)},
X:function(a,b){return this.b.$1(J.nO(this.a,b))},
$asdP:function(a,b){return[b]},
$asP:function(a,b){return[b]},
$asG:function(a,b){return[b]}}
H.bq.prototype={
gP:function(a){return new H.cR(J.bx(this.a),this.b,this.$ti)},
aL:function(a,b){return new H.f7(this,b,[H.J(this,0),null])}}
H.cR.prototype={
A:function(){var t,s
for(t=this.a,s=this.b;t.A();)if(s.$1(t.gI())===!0)return!0
return!1},
gI:function(){return this.a.gI()}}
H.ha.prototype={
st:function(a,b){throw H.u(new P.bp("Cannot change the length of a fixed-length list"))}}
H.nI.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.nJ.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.n2.prototype={}
H.eE.prototype={
dH:function(a,b){if(!this.f.S(0,a))return
if(this.Q.h(0,b)&&!this.y)this.y=!0
this.cC()},
hz:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.aj(0,a)
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
if(q===s.c)s.dw();++s.d}this.y=!1}this.cC()},
fs:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.aZ(a),s=0;r=this.ch,s<r.length;s+=2)if(t.S(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.S(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
hy:function(a){var t,s,r
if(this.ch==null)return
for(t=J.aZ(a),s=0;r=this.ch,s<r.length;s+=2)if(t.S(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.ba(new P.bp("removeRange"))
P.p6(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
em:function(a,b){if(!this.r.S(0,a))return
this.db=b},
h1:function(a,b,c){var t=J.aZ(b)
if(!t.S(b,0))t=t.S(b,1)&&!this.cy
else t=!0
if(t){J.eK(a,c)
return}t=this.cx
if(t==null){t=P.oU(null,null)
this.cx=t}t.aY(new H.mY(a,c))},
h0:function(a,b){var t
if(!this.r.S(0,a))return
t=J.aZ(b)
if(!t.S(b,0))t=t.S(b,1)&&!this.cy
else t=!0
if(t){this.cb()
return}t=this.cx
if(t==null){t=P.oU(null,null)
this.cx=t}t.aY(this.ghf())},
h2:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.e0(a)
if(b!=null)P.e0(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.cm(a)
s[1]=b==null?null:J.cm(b)
for(r=new P.d6(t,t.r,null,null,[null]),r.c=t.e;r.A();)J.eK(r.d,s)},
bF:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.dB(o)
p=H.nw(o)
this.h2(q,p)
if(this.db===!0){this.cb()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.ghe()
if(this.cx!=null)for(;n=this.cx,!n.ga4(n);)this.cx.e6().$0()}return s},
e_:function(a){return this.b.m(0,a)},
dk:function(a,b){var t=this.b
if(t.af(a))throw H.u(P.j8("Registry: ports must be registered only once."))
t.i(0,a,b)},
cC:function(){var t=this.b
if(t.gt(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.cb()},
cb:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.bl(0)
for(t=this.b,s=t.gaw(t),s=s.gP(s);s.A();)s.gI().f2()
t.bl(0)
this.c.bl(0)
u.globalState.z.aj(0,this.a)
this.dx.bl(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.S(t,p)
J.eK(q,t[p])}this.ch=null}},
ghe:function(){return this.d},
gfI:function(){return this.e}}
H.mY.prototype={
$0:function(){J.eK(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.mP.prototype={
fO:function(){var t=this.a
if(t.b===t.c)return
return t.e6()},
e7:function(){var t,s,r
t=this.fO()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.af(u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.ga4(s)}else s=!1
else s=!1
else s=!1
if(s)H.ba(P.j8("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.ga4(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.f5(["command","close"])
r=new H.d7(!0,new P.id(0,null,null,null,null,null,0,[null,P.a6])).aE(r)
s.toString
self.postMessage(r)}return!1}t.ht()
return!0},
dE:function(){if(self.window!=null)new H.mQ(this).$0()
else for(;this.e7(););},
bR:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.dE()
else try{this.dE()}catch(r){t=H.dB(r)
s=H.nw(r)
q=u.globalState.Q
p=P.f5(["command","error","msg",H.t(t)+"\n"+H.t(s)])
p=new H.d7(!0,P.fx(null,P.a6)).aE(p)
q.toString
self.postMessage(p)}}}
H.mQ.prototype={
$0:function(){if(!this.a.e7())return
P.Av(C.t,this)},
$S:function(){return{func:1,v:true}}}
H.dW.prototype={
ht:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.bF(this.b)}}
H.n1.prototype={}
H.k4.prototype={
$0:function(){H.uw(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.k5.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.nt(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.nt(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.cC()},
$S:function(){return{func:1,v:true}}}
H.mK.prototype={}
H.eF.prototype={
cj:function(a,b){var t,s,r
t=u.globalState.z.m(0,this.a)
if(t==null)return
s=this.b
if(s.gdz())return
r=H.AG(b)
if(t.gfI()===s){s=J.bV(r)
switch(s.m(r,0)){case"pause":t.dH(s.m(r,1),s.m(r,2))
break
case"resume":t.hz(s.m(r,1))
break
case"add-ondone":t.fs(s.m(r,1),s.m(r,2))
break
case"remove-ondone":t.hy(s.m(r,1))
break
case"set-errors-fatal":t.em(s.m(r,1),s.m(r,2))
break
case"ping":t.h1(s.m(r,1),s.m(r,2),s.m(r,3))
break
case"kill":t.h0(s.m(r,1),s.m(r,2))
break
case"getErrors":s=s.m(r,1)
t.dx.h(0,s)
break
case"stopErrors":s=s.m(r,1)
t.dx.aj(0,s)
break}return}u.globalState.f.a.aY(new H.dW(t,new H.n3(this,r),"receive"))},
S:function(a,b){if(b==null)return!1
return b instanceof H.eF&&J.ai(this.b,b.b)},
ga6:function(a){return this.b.gcu()}}
H.n3.prototype={
$0:function(){var t=this.a.b
if(!t.gdz())t.f1(this.b)},
$S:function(){return{func:1}}}
H.fA.prototype={
cj:function(a,b){var t,s,r
t=P.f5(["command","message","port",this,"msg",b])
s=new H.d7(!0,P.fx(null,P.a6)).aE(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.m(0,this.b)
if(r!=null)r.postMessage(s)}},
S:function(a,b){if(b==null)return!1
return b instanceof H.fA&&J.ai(this.b,b.b)&&J.ai(this.a,b.a)&&J.ai(this.c,b.c)},
ga6:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.bh()
s=this.a
if(typeof s!=="number")return s.bh()
r=this.c
if(typeof r!=="number")return H.br(r)
return(t<<16^s<<8^r)>>>0}}
H.ex.prototype={
f2:function(){this.c=!0
this.b=null},
f1:function(a){if(this.c)return
this.b.$1(a)},
$iszZ:1,
gcu:function(){return this.a},
gdz:function(){return this.c}}
H.mk.prototype={
eX:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.aY(new H.dW(s,new H.ml(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.nr(new H.mm(this,b),0),a)}else throw H.u(new P.bp("Timer greater than 0."))}}
H.ml.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.mm.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.db.prototype={
ga6:function(a){var t=this.a
if(typeof t!=="number")return t.hT()
t=C.d.cB(t,0)^C.d.am(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
S:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.db){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gcu:function(){return this.a}}
H.d7.prototype={
aE:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.m(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gt(t))
t=J.aZ(a)
if(!!t.$isfb)return["buffer",a]
if(!!t.$iser)return["typed",a]
if(!!t.$iscl)return this.eh(a)
if(!!t.$isut){r=this.gee()
q=a.ga9()
q=H.f8(q,r,H.aM(q,"G",0),null)
q=P.bm(q,!0,H.aM(q,"G",0))
t=t.gaw(a)
t=H.f8(t,r,H.aM(t,"G",0),null)
return["map",q,P.bm(t,!0,H.aM(t,"G",0))]}if(!!t.$isrb)return this.ei(a)
if(!!t.$isY)this.e9(a)
if(!!t.$iszZ)this.bT(a,"RawReceivePorts can't be transmitted:")
if(!!t.$iseF)return this.ej(a)
if(!!t.$isfA)return this.ek(a)
if(!!t.$ise5){p=a.$static_name
if(p==null)this.bT(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isdb)return["capability",a.a]
if(!(a instanceof P.bi))this.e9(a)
return["dart",u.classIdExtractor(a),this.eg(u.classFieldsExtractor(a))]},
bT:function(a,b){throw H.u(new P.bp((b==null?"Can't transmit:":b)+" "+H.t(a)))},
e9:function(a){return this.bT(a,null)},
eh:function(a){var t=this.ef(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.bT(a,"Can't serialize indexable: ")},
ef:function(a){var t,s,r
t=[]
C.a.st(t,a.length)
for(s=0;s<a.length;++s){r=this.aE(a[s])
if(s>=t.length)return H.S(t,s)
t[s]=r}return t},
eg:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.aE(a[t]))
return a},
ei:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.bT(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.st(s,t.length)
for(r=0;r<t.length;++r){q=this.aE(a[t[r]])
if(r>=s.length)return H.S(s,r)
s[r]=q}return["js-object",t,s]},
ek:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
ej:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gcu()]
return["raw sendport",a]}}
H.dV.prototype={
b_:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.u(P.ix("Bad serialized message: "+H.t(a)))
switch(C.a.gR(a)){case"ref":if(1>=a.length)return H.S(a,1)
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
s=H.a(this.bE(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.S(a,1)
r=a[1]
this.b.push(r)
return H.a(this.bE(r),[null])
case"mutable":if(1>=a.length)return H.S(a,1)
r=a[1]
this.b.push(r)
return this.bE(r)
case"const":if(1>=a.length)return H.S(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bE(r),[null])
s.fixed$length=Array
return s
case"map":return this.fT(a)
case"sendport":return this.fU(a)
case"raw sendport":if(1>=a.length)return H.S(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.fS(a)
case"function":if(1>=a.length)return H.S(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.S(a,1)
return new H.db(a[1])
case"dart":s=a.length
if(1>=s)return H.S(a,1)
q=a[1]
if(2>=s)return H.S(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.bE(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.u("couldn't deserialize: "+H.t(a))}},
bE:function(a){var t,s,r
t=J.bV(a)
s=0
while(!0){r=t.gt(a)
if(typeof r!=="number")return H.br(r)
if(!(s<r))break
t.i(a,s,this.b_(t.m(a,s)));++s}return a},
fT:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.S(a,1)
s=a[1]
if(2>=t)return H.S(a,2)
r=a[2]
q=P.rd()
this.b.push(q)
s=J.tv(J.pR(s,this.gfR()))
for(t=J.bV(s),p=J.bV(r),o=0;o<t.gt(s);++o)q.i(0,t.m(s,o),this.b_(p.m(r,o)))
return q},
fU:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.S(a,1)
s=a[1]
if(2>=t)return H.S(a,2)
r=a[2]
if(3>=t)return H.S(a,3)
q=a[3]
if(J.ai(s,u.globalState.b)){p=u.globalState.z.m(0,r)
if(p==null)return
o=p.e_(q)
if(o==null)return
n=new H.eF(o,r)}else n=new H.fA(s,q,r)
this.b.push(n)
return n},
fS:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.S(a,1)
s=a[1]
if(2>=t)return H.S(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.bV(s)
p=J.bV(r)
o=0
while(!0){n=t.gt(s)
if(typeof n!=="number")return H.br(n)
if(!(o<n))break
q[t.m(s,o)]=this.b_(p.m(r,o));++o}return q}}
H.lv.prototype={}
H.mn.prototype={
aR:function(a){var t,s,r
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
H.hM.prototype={
u:function(a){var t=this.b
if(t==null)return"NullError: "+H.t(this.a)
return"NullError: method not found: '"+H.t(t)+"' on null"}}
H.kn.prototype={
u:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.t(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.t(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.t(this.a)+")"}}
H.mp.prototype={
u:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.fW.prototype={}
H.nL.prototype={
$1:function(a){if(!!J.aZ(a).$ise8)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.ie.prototype={
u:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.nB.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.nC.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.nD.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.nE.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.nF.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.e5.prototype={
u:function(a){return"Closure '"+H.p2(this).trim()+"'"},
ghR:function(){return this},
$D:null}
H.mc.prototype={}
H.m1.prototype={
u:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.eN.prototype={
S:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.eN))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga6:function(a){var t,s
t=this.c
if(t==null)s=H.dy(this.a)
else s=typeof t!=="object"?J.cT(t):H.dy(t)
t=H.dy(this.b)
if(typeof s!=="number")return s.hU()
return(s^t)>>>0},
u:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.t(this.d)+"' of "+H.lp(t)}}
H.iS.prototype={
u:function(a){return this.a}}
H.lD.prototype={
u:function(a){return"RuntimeError: "+H.t(this.a)}}
H.d4.prototype={
u:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
ga6:function(a){return J.cT(this.a)},
S:function(a,b){if(b==null)return!1
return b instanceof H.d4&&J.ai(this.a,b.a)}}
H.o.prototype={
gt:function(a){return this.a},
ga4:function(a){return this.a===0},
ga9:function(){return new H.kC(this,[H.J(this,0)])},
gaw:function(a){return H.f8(this.ga9(),new H.km(this),H.J(this,0),H.J(this,1))},
af:function(a){var t,s
if(typeof a==="string"){t=this.b
if(t==null)return!1
return this.dt(t,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){s=this.c
if(s==null)return!1
return this.dt(s,a)}else return this.ha(a)},
ha:function(a){var t=this.d
if(t==null)return!1
return this.bO(this.bX(t,this.bN(a)),a)>=0},
T:function(a,b){b.cV(0,new H.kl(this))},
m:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.bz(t,b)
return s==null?null:s.gb2()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.bz(r,b)
return s==null?null:s.gb2()}else return this.hb(b)},
hb:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.bX(t,this.bN(a))
r=this.bO(s,a)
if(r<0)return
return s[r].gb2()},
i:function(a,b,c){var t,s
if(typeof b==="string"){t=this.b
if(t==null){t=this.cv()
this.b=t}this.dj(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.cv()
this.c=s}this.dj(s,b,c)}else this.hd(b,c)},
hd:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=this.cv()
this.d=t}s=this.bN(a)
r=this.bX(t,s)
if(r==null)this.cA(t,s,[this.cw(a,b)])
else{q=this.bO(r,a)
if(q>=0)r[q].sb2(b)
else r.push(this.cw(a,b))}},
aj:function(a,b){if(typeof b==="string")return this.dC(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dC(this.c,b)
else return this.hc(b)},
hc:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.bX(t,this.bN(a))
r=this.bO(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.dG(q)
return q.gb2()},
bl:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
cV:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.u(new P.bR(this))
t=t.c}},
dj:function(a,b,c){var t=this.bz(a,b)
if(t==null)this.cA(a,b,this.cw(b,c))
else t.sb2(c)},
dC:function(a,b){var t
if(a==null)return
t=this.bz(a,b)
if(t==null)return
this.dG(t)
this.du(a,b)
return t.gb2()},
cw:function(a,b){var t,s
t=new H.kB(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
dG:function(a){var t,s
t=a.gfe()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
bN:function(a){return J.cT(a)&0x3ffffff},
bO:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.ai(a[s].gdY(),b))return s
return-1},
u:function(a){return P.zx(this)},
bz:function(a,b){return a[b]},
bX:function(a,b){return a[b]},
cA:function(a,b,c){a[b]=c},
du:function(a,b){delete a[b]},
dt:function(a,b){return this.bz(a,b)!=null},
cv:function(){var t=Object.create(null)
this.cA(t,"<non-identifier-key>",t)
this.du(t,"<non-identifier-key>")
return t},
$isut:1}
H.km.prototype={
$1:function(a){return this.a.m(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.kl.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return H.eI(function(a,b){return{func:1,args:[a,b]}},this.a,"o")}}
H.kB.prototype={
gdY:function(){return this.a},
gb2:function(){return this.b},
gfe:function(){return this.d},
sb2:function(a){return this.b=a}}
H.kC.prototype={
gt:function(a){return this.a.a},
ga4:function(a){return this.a.a===0},
gP:function(a){var t,s
t=this.a
s=new H.kD(t,t.r,null,null,this.$ti)
s.c=t.e
return s},
U:function(a,b){return this.a.af(b)}}
H.kD.prototype={
gI:function(){return this.d},
A:function(){var t=this.a
if(this.b!==t.r)throw H.u(new P.bR(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.nx.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.ny.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.C]}}}
H.nz.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.C]}}}
H.hB.prototype={
u:function(a){return"RegExp/"+this.a+"/"},
gfc:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.rc(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t}}
H.i2.prototype={
m:function(a,b){if(b!==0)H.ba(P.fm(b,null,null))
return this.c},
$ishG:1}
H.nf.prototype={
gP:function(a){return new H.ng(this.a,this.b,this.c,null)},
gR:function(a){var t,s,r
t=this.a
s=this.b
r=t.indexOf(s,this.c)
if(r>=0)return new H.i2(r,t,s)
throw H.u(H.cP())},
$asG:function(){return[P.hG]}}
H.ng.prototype={
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
this.d=new H.i2(o,q,s)
this.c=n===this.c?n+1:n
return!0},
gI:function(){return this.d}}
H.fb.prototype={
ga_:function(a){return C.S},
$isfb:1,
$isda:1}
H.er.prototype={
fa:function(a,b,c,d){if(typeof b!=="number"||Math.floor(b)!==b)throw H.u(P.fH(b,d,"Invalid list position"))
else throw H.u(P.cd(b,0,c,d,null))},
dl:function(a,b,c,d){if(b>>>0!==b||b>c)this.fa(a,b,c,d)},
$iser:1}
H.kZ.prototype={
ga_:function(a){return C.T}}
H.hI.prototype={
gt:function(a){return a.length},
dF:function(a,b,c,d,e){var t,s,r
t=a.length
this.dl(a,b,t,"start")
this.dl(a,c,t,"end")
if(typeof b!=="number")return b.aX()
if(typeof c!=="number")return H.br(c)
if(b>c)throw H.u(P.cd(b,0,c,null,null))
s=c-b
if(typeof e!=="number")return e.aN()
if(e<0)throw H.u(P.ix(e))
r=d.length
if(r-e<s)throw H.u(new P.c_("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$iscy:1,
$ascy:function(){},
$iscl:1,
$ascl:function(){}}
H.fc.prototype={
m:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.bU(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.ba(H.bU(a,b))
a[b]=c},
ax:function(a,b,c,d,e){if(!!J.aZ(d).$isfc){this.dF(a,b,c,d,e)
return}this.dh(a,b,c,d,e)}}
H.fe.prototype={
$ascy:function(){},
$ascl:function(){},
$asM:function(){return[P.R]},
$asP:function(){return[P.R]},
$asG:function(){return[P.R]},
$isM:1,
$isP:1,
$isG:1}
H.fg.prototype={
$ascy:function(){},
$ascl:function(){},
$asM:function(){return[P.R]},
$asP:function(){return[P.R]},
$asG:function(){return[P.R]}}
H.fd.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.ba(H.bU(a,b))
a[b]=c},
ax:function(a,b,c,d,e){if(!!J.aZ(d).$isfd){this.dF(a,b,c,d,e)
return}this.dh(a,b,c,d,e)},
$isM:1,
$asM:function(){return[P.a6]},
$isP:1,
$asP:function(){return[P.a6]},
$isG:1,
$asG:function(){return[P.a6]}}
H.ff.prototype={
$ascy:function(){},
$ascl:function(){},
$asM:function(){return[P.a6]},
$asP:function(){return[P.a6]},
$asG:function(){return[P.a6]},
$isM:1,
$isP:1,
$isG:1}
H.fh.prototype={
$ascy:function(){},
$ascl:function(){},
$asM:function(){return[P.a6]},
$asP:function(){return[P.a6]},
$asG:function(){return[P.a6]}}
H.l_.prototype={
ga_:function(a){return C.U},
$isM:1,
$asM:function(){return[P.R]},
$isP:1,
$asP:function(){return[P.R]},
$isG:1,
$asG:function(){return[P.R]}}
H.l0.prototype={
ga_:function(a){return C.V},
$isM:1,
$asM:function(){return[P.R]},
$isP:1,
$asP:function(){return[P.R]},
$isG:1,
$asG:function(){return[P.R]}}
H.l1.prototype={
ga_:function(a){return C.W},
m:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.bU(a,b))
return a[b]},
$isM:1,
$asM:function(){return[P.a6]},
$isP:1,
$asP:function(){return[P.a6]},
$isG:1,
$asG:function(){return[P.a6]}}
H.l2.prototype={
ga_:function(a){return C.X},
m:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.bU(a,b))
return a[b]},
$isM:1,
$asM:function(){return[P.a6]},
$isP:1,
$asP:function(){return[P.a6]},
$isG:1,
$asG:function(){return[P.a6]}}
H.l3.prototype={
ga_:function(a){return C.Y},
m:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.bU(a,b))
return a[b]},
$isM:1,
$asM:function(){return[P.a6]},
$isP:1,
$asP:function(){return[P.a6]},
$isG:1,
$asG:function(){return[P.a6]}}
H.l4.prototype={
ga_:function(a){return C.a1},
m:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.bU(a,b))
return a[b]},
$isM:1,
$asM:function(){return[P.a6]},
$isP:1,
$asP:function(){return[P.a6]},
$isG:1,
$asG:function(){return[P.a6]}}
H.l5.prototype={
ga_:function(a){return C.a2},
m:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.bU(a,b))
return a[b]},
$isM:1,
$asM:function(){return[P.a6]},
$isP:1,
$asP:function(){return[P.a6]},
$isG:1,
$asG:function(){return[P.a6]}}
H.hJ.prototype={
ga_:function(a){return C.a3},
gt:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.bU(a,b))
return a[b]},
$isM:1,
$asM:function(){return[P.a6]},
$isP:1,
$asP:function(){return[P.a6]},
$isG:1,
$asG:function(){return[P.a6]}}
H.l6.prototype={
ga_:function(a){return C.a4},
gt:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.bU(a,b))
return a[b]},
$isM:1,
$asM:function(){return[P.a6]},
$isP:1,
$asP:function(){return[P.a6]},
$isG:1,
$asG:function(){return[P.a6]}}
P.mG.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.mF.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.mH.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.mI.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.ib.prototype={}
P.nm.prototype={}
P.nn.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.hN()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.u(t)
r=H.u(t)
r.stack=J.cm(s)
throw r},
$S:function(){return{func:1}}}
P.n5.prototype={
hH:function(a){var t,s,r,q
try{if(C.k===$.fu){r=a.$0()
return r}r=P.rX(null,null,this,a)
return r}catch(q){t=H.dB(q)
s=H.nw(q)
r=P.AK(null,null,this,t,s)
return r}},
fF:function(a,b){if(b)return new P.n6(this,a)
else return new P.n7(this,a)},
m:function(a,b){return},
hG:function(a){if($.fu===C.k)return a.$0()
return P.rX(null,null,this,a)}}
P.n6.prototype={
$0:function(){return this.a.hH(this.b)},
$S:function(){return{func:1}}}
P.n7.prototype={
$0:function(){return this.a.hG(this.b)},
$S:function(){return{func:1}}}
P.mT.prototype={
gt:function(a){return this.a},
ga4:function(a){return this.a===0},
gaw:function(a){var t=H.J(this,0)
return H.f8(new P.mU(this,[t]),new P.mW(this),t,H.J(this,1))},
af:function(a){var t,s
if(typeof a==="string"&&a!=="__proto__"){t=this.b
return t==null?!1:t[a]!=null}else if(typeof a==="number"&&(a&0x3ffffff)===a){s=this.c
return s==null?!1:s[a]!=null}else return this.f5(a)},
f5:function(a){var t=this.d
if(t==null)return!1
return this.aU(t[this.aT(a)],a)>=0},
m:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.f7(b)},
f7:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aT(a)]
r=this.aU(s,a)
return r<0?null:s[r+1]},
i:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.pj()
this.b=t}this.dq(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.pj()
this.c=s}this.dq(s,b,c)}else this.fh(b,c)},
fh:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.pj()
this.d=t}s=this.aT(a)
r=t[s]
if(r==null){P.pk(t,s,[a,b]);++this.a
this.e=null}else{q=this.aU(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
aj:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bx(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bx(this.c,b)
else return this.cz(b)},
cz:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aT(a)]
r=this.aU(s,a)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
cV:function(a,b){var t,s,r,q
t=this.ds()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.m(0,q))
if(t!==this.e)throw H.u(new P.bR(this))}},
ds:function(){var t,s,r,q,p,o,n,m,l,k,j,i
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
dq:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.pk(a,b,c)},
bx:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.AA(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
aT:function(a){return J.cT(a)&0x3ffffff},
aU:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.ai(a[s],b))return s
return-1}}
P.mW.prototype={
$1:function(a){return this.a.m(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.mU.prototype={
gt:function(a){return this.a.a},
ga4:function(a){return this.a.a===0},
gP:function(a){var t=this.a
return new P.mV(t,t.ds(),0,null,this.$ti)},
U:function(a,b){return this.a.af(b)}}
P.mV.prototype={
gI:function(){return this.d},
A:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.u(new P.bR(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.id.prototype={
bN:function(a){return H.Bb(a)&0x3ffffff},
bO:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].gdY()
if(r==null?b==null:r===b)return s}return-1}}
P.ic.prototype={
gP:function(a){var t=new P.d6(this,this.r,null,null,[null])
t.c=this.e
return t},
gt:function(a){return this.a},
ga4:function(a){return this.a===0},
U:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.f4(b)},
f4:function(a){var t=this.d
if(t==null)return!1
return this.aU(t[this.aT(a)],a)>=0},
e_:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.U(0,a)?a:null
else return this.fb(a)},
fb:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aT(a)]
r=this.aU(s,a)
if(r<0)return
return J.im(s,r).gdv()},
gR:function(a){var t=this.e
if(t==null)throw H.u(new P.c_("No elements"))
return t.a},
h:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.dn(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.dn(r,b)}else return this.aY(b)},
aY:function(a){var t,s,r
t=this.d
if(t==null){t=P.AD()
this.d=t}s=this.aT(a)
r=t[s]
if(r==null)t[s]=[this.cq(a)]
else{if(this.aU(r,a)>=0)return!1
r.push(this.cq(a))}return!0},
aj:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bx(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bx(this.c,b)
else return this.cz(b)},
cz:function(a){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aT(a)]
r=this.aU(s,a)
if(r<0)return!1
this.dr(s.splice(r,1)[0])
return!0},
bl:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
dn:function(a,b){if(a[b]!=null)return!1
a[b]=this.cq(b)
return!0},
bx:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.dr(t)
delete a[b]
return!0},
cq:function(a){var t,s
t=new P.n_(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
dr:function(a){var t,s
t=a.gf3()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
aT:function(a){return J.cT(a)&0x3ffffff},
aU:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.ai(a[s].gdv(),b))return s
return-1},
$isP:1,
$asP:null,
$isG:1,
$asG:null}
P.n_.prototype={
gdv:function(){return this.a},
gf3:function(){return this.c}}
P.d6.prototype={
gI:function(){return this.d},
A:function(){var t=this.a
if(this.b!==t.r)throw H.u(new P.bR(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.mX.prototype={}
P.dm.prototype={
aL:function(a,b){return H.f8(this,b,H.aM(this,"dm",0),null)},
aD:function(a,b){return new H.bq(this,b,[H.aM(this,"dm",0)])},
U:function(a,b){var t
for(t=this.gP(this);t.A();)if(J.ai(t.gI(),b))return!0
return!1},
a5:function(a,b){return P.bm(this,!0,H.aM(this,"dm",0))},
aM:function(a){return this.a5(a,!0)},
gt:function(a){var t,s
t=this.gP(this)
for(s=0;t.A();)++s
return s},
ga4:function(a){return!this.gP(this).A()},
gR:function(a){var t=this.gP(this)
if(!t.A())throw H.u(H.cP())
return t.gI()},
X:function(a,b){var t,s,r
if(b<0)H.ba(P.cd(b,0,null,"index",null))
for(t=this.gP(this),s=0;t.A();){r=t.gI()
if(b===s)return r;++s}throw H.u(P.cZ(b,this,"index",null,s))},
u:function(a){return P.oP(this,"(",")")},
$isG:1,
$asG:null}
P.hw.prototype={}
P.hC.prototype={}
P.fi.prototype={$asM:null,$asP:null,$asG:null,$isM:1,$isP:1,$isG:1}
P.bZ.prototype={
gP:function(a){return new H.hD(a,this.gt(a),0,null,[H.aM(a,"bZ",0)])},
X:function(a,b){return this.m(a,b)},
ga4:function(a){return this.gt(a)===0},
gR:function(a){if(this.gt(a)===0)throw H.u(H.cP())
return this.m(a,0)},
U:function(a,b){var t,s
t=this.gt(a)
for(s=0;s<this.gt(a);++s){if(J.ai(this.m(a,s),b))return!0
if(t!==this.gt(a))throw H.u(new P.bR(a))}return!1},
aD:function(a,b){return new H.bq(a,b,[H.aM(a,"bZ",0)])},
aL:function(a,b){return new H.d0(a,b,[H.aM(a,"bZ",0),null])},
df:function(a,b){return H.rG(a,b,null,H.aM(a,"bZ",0))},
a5:function(a,b){var t,s,r
t=H.a([],[H.aM(a,"bZ",0)])
C.a.st(t,this.gt(a))
for(s=0;s<this.gt(a);++s){r=this.m(a,s)
if(s>=t.length)return H.S(t,s)
t[s]=r}return t},
aM:function(a){return this.a5(a,!0)},
aj:function(a,b){var t
for(t=0;t<this.gt(a);++t)if(J.ai(this.m(a,t),b)){this.ax(a,t,this.gt(a)-1,a,t+1)
this.st(a,this.gt(a)-1)
return!0}return!1},
ax:function(a,b,c,d,e){var t,s,r,q,p
P.p6(b,c,this.gt(a),null,null,null)
if(typeof c!=="number")return c.aF()
if(typeof b!=="number")return H.br(b)
t=c-b
if(t===0)return
if(typeof e!=="number")return e.aN()
if(e<0)H.ba(P.cd(e,0,null,"skipCount",null))
if(H.no(d,"$isM",[H.aM(a,"bZ",0)],"$asM")){s=e
r=d}else{r=J.tt(d,e).a5(0,!1)
s=0}q=J.bV(r)
if(s+t>q.gt(r))throw H.u(H.ra())
if(s<b)for(p=t-1;p>=0;--p)this.i(a,b+p,q.m(r,s+p))
else for(p=0;p<t;++p)this.i(a,b+p,q.m(r,s+p))},
u:function(a){return P.f2(a,"[","]")},
$isM:1,
$asM:null,
$isP:1,
$asP:null,
$isG:1,
$asG:null}
P.kK.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a0+=", "
t.a=!1
t=this.b
s=t.a0+=H.t(a)
t.a0=s+": "
t.a0+=H.t(b)},
$S:function(){return{func:1,args:[,,]}}}
P.kE.prototype={
gP:function(a){return new P.n0(this,this.c,this.d,this.b,null,this.$ti)},
ga4:function(a){return this.b===this.c},
gt:function(a){return(this.c-this.b&this.a.length-1)>>>0},
gR:function(a){var t,s
t=this.b
if(t===this.c)throw H.u(H.cP())
s=this.a
if(t>=s.length)return H.S(s,t)
return s[t]},
X:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=t)H.ba(P.cZ(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.S(s,q)
return s[q]},
a5:function(a,b){var t=H.a([],this.$ti)
C.a.st(t,this.gt(this))
this.fm(t)
return t},
aM:function(a){return this.a5(a,!0)},
bl:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.S(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
u:function(a){return P.f2(this,"{","}")},
e6:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.u(H.cP());++this.d
s=this.a
r=s.length
if(t>=r)return H.S(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
aY:function(a){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.S(t,s)
t[s]=a
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.dw();++this.d},
dw:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.a(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.ax(s,0,q,t,r)
C.a.ax(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=s},
fm:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.a.ax(a,0,q,r,t)
return q}else{p=r.length-t
C.a.ax(a,0,p,r,t)
C.a.ax(a,p,p+this.c,this.a,0)
return this.c+p}},
eR:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$asP:null,
$asG:null}
P.n0.prototype={
gI:function(){return this.e},
A:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.ba(new P.bR(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.S(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.lQ.prototype={
ga4:function(a){return this.a===0},
T:function(a,b){var t
for(t=J.bx(b);t.A();)this.h(0,t.gI())},
a5:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.a.st(t,this.a)
for(s=new P.d6(this,this.r,null,null,[null]),s.c=this.e,r=0;s.A();r=p){q=s.d
p=r+1
if(r>=t.length)return H.S(t,r)
t[r]=q}return t},
aM:function(a){return this.a5(a,!0)},
aL:function(a,b){return new H.fV(this,b,[H.J(this,0),null])},
u:function(a){return P.f2(this,"{","}")},
aD:function(a,b){return new H.bq(this,b,this.$ti)},
gR:function(a){var t=new P.d6(this,this.r,null,null,[null])
t.c=this.e
if(!t.A())throw H.u(H.cP())
return t.d},
X:function(a,b){var t,s,r
if(b<0)H.ba(P.cd(b,0,null,"index",null))
for(t=new P.d6(this,this.r,null,null,[null]),t.c=this.e,s=0;t.A();){r=t.d
if(b===s)return r;++s}throw H.u(P.cZ(b,this,"index",null,s))},
$isP:1,
$asP:null,
$isG:1,
$asG:null}
P.lP.prototype={}
P.cS.prototype={}
P.bA.prototype={}
P.eQ.prototype={
S:function(a,b){if(b==null)return!1
if(!(b instanceof P.eQ))return!1
return this.a===b.a&&this.b===b.b},
aG:function(a,b){return C.b.aG(this.a,b.gfl())},
ga6:function(a){var t=this.a
return(t^C.b.cB(t,30))&1073741823},
u:function(a){var t,s,r,q,p,o,n
t=P.u_(H.rj(this))
s=P.fP(H.ri(this))
r=P.fP(H.rh(this))
q=P.fP(H.zB(this))
p=P.fP(H.zD(this))
o=P.fP(H.zE(this))
n=P.u0(H.zC(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isbA:1,
$asbA:function(){return[P.eQ]},
gfl:function(){return this.a}}
P.R.prototype={$isbA:1,
$asbA:function(){return[P.c6]}}
P.dd.prototype={
ao:function(a,b){return new P.dd(this.a+b.gby())},
aF:function(a,b){return new P.dd(this.a-b.gby())},
aO:function(a,b){if(typeof b!=="number")return H.br(b)
return new P.dd(C.d.ak(this.a*b))},
aN:function(a,b){return C.b.aN(this.a,b.gby())},
aX:function(a,b){return C.b.aX(this.a,b.gby())},
S:function(a,b){if(b==null)return!1
if(!(b instanceof P.dd))return!1
return this.a===b.a},
ga6:function(a){return this.a&0x1FFFFFFF},
aG:function(a,b){return C.b.aG(this.a,b.gby())},
u:function(a){var t,s,r,q,p
t=new P.j5()
s=this.a
if(s<0)return"-"+new P.dd(0-s).u(0)
r=t.$1(C.b.am(s,6e7)%60)
q=t.$1(C.b.am(s,1e6)%60)
p=new P.j4().$1(s%1e6)
return""+C.b.am(s,36e8)+":"+H.t(r)+":"+H.t(q)+"."+H.t(p)},
$isbA:1,
$asbA:function(){return[P.dd]},
gby:function(){return this.a}}
P.j4.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.C,args:[P.a6]}}}
P.j5.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.C,args:[P.a6]}}}
P.e8.prototype={}
P.hN.prototype={
u:function(a){return"Throw of null."}}
P.d9.prototype={
gcs:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcr:function(){return""},
u:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.t(t)
q=this.gcs()+s+r
if(!this.a)return q
p=this.gcr()
o=P.qe(this.b)
return q+p+": "+H.t(o)},
gM:function(a){return this.c}}
P.fl.prototype={
gcs:function(){return"RangeError"},
gcr:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.t(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.t(t)
else if(r>t)s=": Not in range "+H.t(t)+".."+H.t(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.t(t)}return s}}
P.k0.prototype={
gcs:function(){return"RangeError"},
gcr:function(){if(J.eJ(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.t(t)},
gt:function(a){return this.f}}
P.bp.prototype={
u:function(a){return"Unsupported operation: "+this.a}}
P.i5.prototype={
u:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.t(t):"UnimplementedError"}}
P.c_.prototype={
u:function(a){return"Bad state: "+this.a}}
P.bR.prototype={
u:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.t(P.qe(t))+"."}}
P.le.prototype={
u:function(a){return"Out of Memory"},
$ise8:1}
P.i1.prototype={
u:function(a){return"Stack Overflow"},
$ise8:1}
P.iY.prototype={
u:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.t(t)+"' during its initialization"}}
P.mR.prototype={
u:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.t(t)}}
P.he.prototype={
u:function(a){var t,s,r
t=this.a
s=""!==t?"FormatException: "+t:"FormatException"
r=this.b
if(typeof r!=="string")return s
if(r.length>78)r=C.e.co(r,0,75)+"..."
return s+"\n"+r}}
P.j9.prototype={
u:function(a){return"Expando:"+H.t(this.a)},
m:function(a,b){var t,s
t=this.bY
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.ba(P.fH(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.p1(b,"expando$values")
return s==null?null:H.p1(s,t)},
i:function(a,b,c){var t,s
t=this.bY
if(typeof t!=="string")t.set(b,c)
else{s=H.p1(b,"expando$values")
if(s==null){s=new P.bi()
H.rn(b,"expando$values",s)}H.rn(s,t,c)}},
gM:function(a){return this.a}}
P.a6.prototype={$isbA:1,
$asbA:function(){return[P.c6]}}
P.G.prototype={
aL:function(a,b){return H.f8(this,b,H.aM(this,"G",0),null)},
aD:function(a,b){return new H.bq(this,b,[H.aM(this,"G",0)])},
U:function(a,b){var t
for(t=this.gP(this);t.A();)if(J.ai(t.gI(),b))return!0
return!1},
a5:function(a,b){return P.bm(this,!0,H.aM(this,"G",0))},
aM:function(a){return this.a5(a,!0)},
gt:function(a){var t,s
t=this.gP(this)
for(s=0;t.A();)++s
return s},
ga4:function(a){return!this.gP(this).A()},
gR:function(a){var t=this.gP(this)
if(!t.A())throw H.u(H.cP())
return t.gI()},
gbi:function(a){var t,s
t=this.gP(this)
if(!t.A())throw H.u(H.cP())
s=t.gI()
if(t.A())throw H.u(H.zu())
return s},
X:function(a,b){var t,s,r
if(b<0)H.ba(P.cd(b,0,null,"index",null))
for(t=this.gP(this),s=0;t.A();){r=t.gI()
if(b===s)return r;++s}throw H.u(P.cZ(b,this,"index",null,s))},
u:function(a){return P.oP(this,"(",")")},
$asG:null}
P.hx.prototype={}
P.M.prototype={$asM:null,$isP:1,$asP:null,$isG:1,$asG:null}
P.es.prototype={
ga6:function(a){return P.bi.prototype.ga6.call(this,this)},
u:function(a){return"null"}}
P.c6.prototype={$isbA:1,
$asbA:function(){return[P.c6]}}
P.bi.prototype={constructor:P.bi,$isbi:1,
S:function(a,b){return this===b},
ga6:function(a){return H.dy(this)},
u:function(a){return H.lp(this)},
ga_:function(a){return new H.d4(H.fE(this),null)},
toString:function(){return this.u(this)}}
P.hG.prototype={}
P.C.prototype={$isbA:1,
$asbA:function(){return[P.C]}}
P.fp.prototype={
gt:function(a){return this.a0.length},
ga4:function(a){return this.a0.length===0},
u:function(a){var t=this.a0
return t.charCodeAt(0)==0?t:t},
ga0:function(){return this.a0}}
W.aS.prototype={}
W.iv.prototype={
u:function(a){return String(a)},
$isY:1,
sc9:function(a,b){return a.href=b}}
W.iw.prototype={
u:function(a){return String(a)},
$isY:1,
sc9:function(a,b){return a.href=b}}
W.iH.prototype={
sc9:function(a,b){return a.href=b}}
W.fI.prototype={}
W.e4.prototype={$ise4:1,$isY:1}
W.iP.prototype={
gM:function(a){return a.name},
gae:function(a){return a.value}}
W.iQ.prototype={
gcU:function(a){return a.filter}}
W.dE.prototype={$isY:1,
gt:function(a){return a.length}}
W.fO.prototype={
fX:function(a,b){return typeof console!="undefined"?console.error(b):null},
dZ:function(a){return typeof console!="undefined"?console.info(a):null},
hQ:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.e6.prototype={
ec:function(a,b){var t=this.f8(a,b)
return t!=null?t:""},
f8:function(a,b){if(W.tZ(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.u1()+b)},
aK:function(a,b){return a.item(b)},
gt:function(a){return a.length}}
W.hf.prototype={}
W.iW.prototype={
gcU:function(a){return this.ec(a,"filter")}}
W.j_.prototype={
gae:function(a){return a.value}}
W.fQ.prototype={}
W.fR.prototype={$isY:1}
W.fS.prototype={
gM:function(a){return a.name}}
W.j0.prototype={
gM:function(a){var t=a.name
if(P.qb()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.qb()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
u:function(a){return String(a)}}
W.fT.prototype={
u:function(a){return"Rectangle ("+H.t(a.left)+", "+H.t(a.top)+") "+H.t(this.gbg(a))+" x "+H.t(this.gbd(a))},
S:function(a,b){var t
if(b==null)return!1
t=J.aZ(b)
if(!t.$ishY)return!1
return a.left===t.gd_(b)&&a.top===t.gd6(b)&&this.gbg(a)===t.gbg(b)&&this.gbd(a)===t.gbd(b)},
ga6:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gbg(a)
q=this.gbd(a)
return W.rV(W.dX(W.dX(W.dX(W.dX(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gbd:function(a){return a.height},
gd_:function(a){return a.left},
gd6:function(a){return a.top},
gbg:function(a){return a.width},
$ishY:1,
$ashY:function(){}}
W.fU.prototype={
U:function(a,b){return a.contains(b)},
aK:function(a,b){return a.item(b)},
gt:function(a){return a.length},
gae:function(a){return a.value}}
W.cn.prototype={
gfD:function(a){return new W.mO(a)},
u:function(a){return a.localName},
h9:function(a,b,c,d,e){var t,s
if(d instanceof W.nk)a.insertAdjacentHTML(b,c)
else{t=this.ag(a,c,d,e)
switch(b.toLowerCase()){case"beforebegin":a.parentNode.insertBefore(t,a)
break
case"afterbegin":s=a.childNodes
a.insertBefore(t,s.length>0?s[0]:null)
break
case"beforeend":a.appendChild(t)
break
case"afterend":a.parentNode.insertBefore(t,a.nextSibling)
break
default:H.ba(P.ix("Invalid position "+b))}}},
ag:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.qd
if(t==null){t=H.a([],[W.dx])
s=new W.hL(t)
t.push(W.rT(null))
t.push(W.rW())
$.qd=s
d=s}else d=t
t=$.qc
if(t==null){t=new W.ig(d)
$.qc=t
c=t}else{t.a=d
c=t}}if($.du==null){t=document
s=t.implementation.createHTMLDocument("")
$.du=s
$.nU=s.createRange()
s=$.du
s.toString
r=s.createElement("base")
J.ts(r,t.baseURI)
$.du.head.appendChild(r)}t=$.du
if(t.body==null){t.toString
s=t.createElement("body")
t.body=s}t=$.du
if(!!this.$ise4)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
$.du.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.a.U(C.L,a.tagName)){$.nU.selectNodeContents(q)
p=$.nU.createContextualFragment(b)}else{q.innerHTML=b
p=$.du.createDocumentFragment()
for(;t=q.firstChild,t!=null;)p.appendChild(t)}t=$.du.body
if(q==null?t!=null:q!==t)J.tq(q)
c.cg(p)
document.adoptNode(p)
return p},
fL:function(a,b,c){return this.ag(a,b,c,null)},
eo:function(a,b,c,d){a.textContent=null
a.appendChild(this.ag(a,b,c,d))},
en:function(a,b){return this.eo(a,b,null,null)},
$iscn:1,
$isaR:1,
$isbi:1,
$isY:1,
gdA:function(a){return a.namespaceURI},
ghI:function(a){return a.tagName}}
W.np.prototype={
$1:function(a){return!!J.aZ(a).$iscn},
$S:function(){return{func:1,args:[,]}}}
W.j7.prototype={
gM:function(a){return a.name}}
W.T.prototype={}
W.eS.prototype={}
W.jM.prototype={
gM:function(a){return a.name}}
W.ca.prototype={$isca:1,$isbi:1,
gM:function(a){return a.name}}
W.h9.prototype={
gt:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.u(P.cZ(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.u(new P.bp("Cannot assign element of immutable List."))},
st:function(a,b){throw H.u(new P.bp("Cannot resize immutable List."))},
gR:function(a){if(a.length>0)return a[0]
throw H.u(new P.c_("No elements"))},
X:function(a,b){if(b<0||b>=a.length)return H.S(a,b)
return a[b]},
aK:function(a,b){return a.item(b)},
$iscy:1,
$ascy:function(){return[W.ca]},
$iscl:1,
$ascl:function(){return[W.ca]},
$isM:1,
$asM:function(){return[W.ca]},
$isP:1,
$asP:function(){return[W.ca]},
$isG:1,
$asG:function(){return[W.ca]}}
W.hg.prototype={
$asM:function(){return[W.ca]},
$asP:function(){return[W.ca]},
$asG:function(){return[W.ca]},
$isM:1,
$isP:1,
$isG:1}
W.hl.prototype={
$asM:function(){return[W.ca]},
$asP:function(){return[W.ca]},
$asG:function(){return[W.ca]},
$isM:1,
$isP:1,
$isG:1}
W.hd.prototype={
aK:function(a,b){return a.item(b)},
gt:function(a){return a.length},
gM:function(a){return a.name}}
W.jX.prototype={
gM:function(a){return a.name}}
W.ek.prototype={$isek:1,$iscn:1,$isaR:1,$isbi:1}
W.k1.prototype={$iscn:1,$isY:1,$isaR:1,
gM:function(a){return a.name},
gae:function(a){return a.value}}
W.kp.prototype={
gM:function(a){return a.name}}
W.kr.prototype={
gae:function(a){return a.value}}
W.kA.prototype={
sc9:function(a,b){return a.href=b}}
W.kF.prototype={
u:function(a){return String(a)}}
W.kJ.prototype={
gM:function(a){return a.name}}
W.f9.prototype={
saP:function(a,b){return a.session=b}}
W.kN.prototype={
aq:function(a){return a.clone()}}
W.kO.prototype={
gM:function(a){return a.name}}
W.kQ.prototype={
gae:function(a){return a.value}}
W.kR.prototype={
hS:function(a,b,c){return a.send(b,c)},
cj:function(a,b){return a.send(b)}}
W.fa.prototype={
gM:function(a){return a.name}}
W.l7.prototype={$isY:1}
W.l8.prototype={
gM:function(a){return a.name}}
W.cB.prototype={
gR:function(a){var t=this.a.firstChild
if(t==null)throw H.u(new P.c_("No elements"))
return t},
gbi:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.u(new P.c_("No elements"))
if(s>1)throw H.u(new P.c_("More than one element"))
return t.firstChild},
T:function(a,b){var t,s,r,q
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=0;q<r;++q)s.appendChild(t.firstChild)
return},
i:function(a,b,c){var t,s
t=this.a
s=t.childNodes
if(b>>>0!==b||b>=s.length)return H.S(s,b)
t.replaceChild(c,s[b])},
gP:function(a){var t=this.a.childNodes
return new W.hb(t,t.length,-1,null,[H.aM(t,"dl",0)])},
ax:function(a,b,c,d,e){throw H.u(new P.bp("Cannot setRange on Node list"))},
gt:function(a){return this.a.childNodes.length},
st:function(a,b){throw H.u(new P.bp("Cannot set length on immutable List."))},
m:function(a,b){var t=this.a.childNodes
if(b>>>0!==b||b>=t.length)return H.S(t,b)
return t[b]},
$ashC:function(){return[W.aR]},
$asfi:function(){return[W.aR]},
$asM:function(){return[W.aR]},
$asP:function(){return[W.aR]},
$asG:function(){return[W.aR]}}
W.aR.prototype={
ghl:function(a){return new W.cB(a)},
hx:function(a){var t=a.parentNode
if(t!=null)t.removeChild(a)},
u:function(a){var t=a.nodeValue
return t==null?this.eF(a):t},
U:function(a,b){return a.contains(b)},
$isaR:1,
$isbi:1,
ghn:function(a){return a.parentNode},
ghr:function(a){return a.previousSibling}}
W.hK.prototype={
gt:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.u(P.cZ(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.u(new P.bp("Cannot assign element of immutable List."))},
st:function(a,b){throw H.u(new P.bp("Cannot resize immutable List."))},
gR:function(a){if(a.length>0)return a[0]
throw H.u(new P.c_("No elements"))},
X:function(a,b){if(b<0||b>=a.length)return H.S(a,b)
return a[b]},
$isM:1,
$asM:function(){return[W.aR]},
$isP:1,
$asP:function(){return[W.aR]},
$isG:1,
$asG:function(){return[W.aR]},
$iscy:1,
$ascy:function(){return[W.aR]},
$iscl:1,
$ascl:function(){return[W.aR]}}
W.hh.prototype={
$asM:function(){return[W.aR]},
$asP:function(){return[W.aR]},
$asG:function(){return[W.aR]},
$isM:1,
$isP:1,
$isG:1}
W.hm.prototype={
$asM:function(){return[W.aR]},
$asP:function(){return[W.aR]},
$asG:function(){return[W.aR]},
$isM:1,
$isP:1,
$isG:1}
W.lc.prototype={
gM:function(a){return a.name}}
W.ld.prototype={
gae:function(a){return a.value}}
W.lf.prototype={
gM:function(a){return a.name},
gae:function(a){return a.value}}
W.li.prototype={
gM:function(a){return a.name},
gae:function(a){return a.value}}
W.lr.prototype={
gae:function(a){return a.value}}
W.hZ.prototype={
aK:function(a,b){return a.item(b)},
gt:function(a){return a.length},
gM:function(a){return a.name},
gae:function(a){return a.value}}
W.lR.prototype={
hW:function(a,b){return a.cloneNode(b)},
aq:function(a){return a.cloneNode()}}
W.lT.prototype={
gM:function(a){return a.name}}
W.lY.prototype={
gM:function(a){return a.name}}
W.eA.prototype={}
W.i4.prototype={
ag:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.cp(a,b,c,d)
t=W.u3("<table>"+H.t(b)+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
new W.cB(s).T(0,J.tj(t))
return s}}
W.ma.prototype={
ag:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.cp(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.z.ag(t.createElement("table"),b,c,d)
t.toString
t=new W.cB(t)
r=t.gbi(t)
r.toString
t=new W.cB(r)
q=t.gbi(t)
s.toString
q.toString
new W.cB(s).T(0,new W.cB(q))
return s}}
W.mb.prototype={
ag:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.cp(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.z.ag(t.createElement("table"),b,c,d)
t.toString
t=new W.cB(t)
r=t.gbi(t)
s.toString
r.toString
new W.cB(s).T(0,new W.cB(r))
return s}}
W.fs.prototype={$isfs:1}
W.mf.prototype={
gM:function(a){return a.name},
gae:function(a){return a.value}}
W.i9.prototype={$isY:1,
gM:function(a){return a.name}}
W.eD.prototype={$iseD:1,$isaR:1,$isbi:1,
gM:function(a){return a.name},
gdA:function(a){return a.namespaceURI},
gae:function(a){return a.value}}
W.mL.prototype={
u:function(a){return"Rectangle ("+H.t(a.left)+", "+H.t(a.top)+") "+H.t(a.width)+" x "+H.t(a.height)},
S:function(a,b){var t,s,r
if(b==null)return!1
t=J.aZ(b)
if(!t.$ishY)return!1
s=a.left
r=t.gd_(b)
if(s==null?r==null:s===r){s=a.top
r=t.gd6(b)
if(s==null?r==null:s===r){s=a.width
r=t.gbg(b)
if(s==null?r==null:s===r){s=a.height
t=t.gbd(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
ga6:function(a){var t,s,r,q
t=J.cT(a.left)
s=J.cT(a.top)
r=J.cT(a.width)
q=J.cT(a.height)
return W.rV(W.dX(W.dX(W.dX(W.dX(0,t),s),r),q))},
$ishY:1,
$ashY:function(){},
gbd:function(a){return a.height},
gd_:function(a){return a.left},
gd6:function(a){return a.top},
gbg:function(a){return a.width}}
W.mM.prototype={$isY:1}
W.mN.prototype={
gbd:function(a){return a.height},
gbg:function(a){return a.width}}
W.mS.prototype={$isY:1}
W.fy.prototype={
gt:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.u(P.cZ(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.u(new P.bp("Cannot assign element of immutable List."))},
st:function(a,b){throw H.u(new P.bp("Cannot resize immutable List."))},
gR:function(a){if(a.length>0)return a[0]
throw H.u(new P.c_("No elements"))},
X:function(a,b){if(b<0||b>=a.length)return H.S(a,b)
return a[b]},
aK:function(a,b){return a.item(b)},
$isM:1,
$asM:function(){return[W.aR]},
$isP:1,
$asP:function(){return[W.aR]},
$isG:1,
$asG:function(){return[W.aR]},
$iscy:1,
$ascy:function(){return[W.aR]},
$iscl:1,
$ascl:function(){return[W.aR]}}
W.hi.prototype={
$asM:function(){return[W.aR]},
$asP:function(){return[W.aR]},
$asG:function(){return[W.aR]},
$isM:1,
$isP:1,
$isG:1}
W.hn.prototype={
$asM:function(){return[W.aR]},
$asP:function(){return[W.aR]},
$asG:function(){return[W.aR]},
$isM:1,
$isP:1,
$isG:1}
W.nc.prototype={$isY:1}
W.mJ.prototype={
ga9:function(){var t,s,r,q,p,o
t=this.a.attributes
s=H.a([],[P.C])
for(r=t.length,q=0;q<r;++q){if(q>=t.length)return H.S(t,q)
p=t[q]
o=J.cj(p)
if(o.gdA(p)==null)s.push(o.gM(p))}return s},
ga4:function(a){return this.ga9().length===0},
gf9:function(){return this.a}}
W.mO.prototype={
m:function(a,b){return this.a.getAttribute(b)},
i:function(a,b,c){this.a.setAttribute(b,c)},
gt:function(a){return this.ga9().length}}
W.fw.prototype={
bj:function(a){return $.$get$rU().U(0,W.eR(a))},
aZ:function(a,b,c){var t,s,r
t=W.eR(a)
s=$.$get$pl()
r=s.m(0,H.t(t)+"::"+b)
if(r==null)r=s.m(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
eZ:function(a){var t,s
t=$.$get$pl()
if(t.ga4(t)){for(s=0;s<262;++s)t.i(0,C.K[s],W.B_())
for(s=0;s<12;++s)t.i(0,C.m[s],W.B0())}},
$isdx:1,
gea:function(){return this.a}}
W.dl.prototype={
gP:function(a){return new W.hb(a,this.gt(a),-1,null,[H.aM(a,"dl",0)])},
ax:function(a,b,c,d,e){throw H.u(new P.bp("Cannot setRange on immutable List."))},
$isM:1,
$asM:null,
$isP:1,
$asP:null,
$isG:1,
$asG:null}
W.hL.prototype={
bj:function(a){return C.a.dJ(this.a,new W.la(a))},
aZ:function(a,b,c){return C.a.dJ(this.a,new W.l9(a,b,c))},
$isdx:1}
W.la.prototype={
$1:function(a){return a.bj(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.l9.prototype={
$1:function(a){return a.aZ(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.fz.prototype={
bj:function(a){return this.a.U(0,W.eR(a))},
aZ:function(a,b,c){var t,s
t=W.eR(a)
s=this.c
if(s.U(0,H.t(t)+"::"+b))return this.d.fw(c)
else if(s.U(0,"*::"+b))return this.d.fw(c)
else{s=this.b
if(s.U(0,H.t(t)+"::"+b))return!0
else if(s.U(0,"*::"+b))return!0
else if(s.U(0,H.t(t)+"::*"))return!0
else if(s.U(0,"*::*"))return!0}return!1},
f0:function(a,b,c,d){var t,s,r
this.a.T(0,c)
t=b.aD(0,new W.nd())
s=b.aD(0,new W.ne())
this.b.T(0,t)
r=this.c
r.T(0,C.M)
r.T(0,s)},
$isdx:1,
gea:function(){return this.d}}
W.nd.prototype={
$1:function(a){return!C.a.U(C.m,a)},
$S:function(){return{func:1,args:[,]}}}
W.ne.prototype={
$1:function(a){return C.a.U(C.m,a)},
$S:function(){return{func:1,args:[,]}}}
W.ni.prototype={
aZ:function(a,b,c){if(this.eL(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.pO(a).a.getAttribute("template")==="")return this.e.U(0,b)
return!1}}
W.nj.prototype={
$1:function(a){return"TEMPLATE::"+H.t(a)},
$S:function(){return{func:1,args:[,]}}}
W.nh.prototype={
bj:function(a){var t=J.aZ(a)
if(!!t.$isfn)return!1
t=!!t.$isbP
if(t&&W.eR(a)==="foreignObject")return!1
if(t)return!0
return!1},
aZ:function(a,b,c){if(b==="is"||C.e.cl(b,"on"))return!1
return this.bj(a)},
$isdx:1}
W.hb.prototype={
A:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.im(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
gI:function(){return this.d}}
W.dx.prototype={}
W.nk.prototype={
cg:function(a){}}
W.nb.prototype={}
W.ig.prototype={
cg:function(a){new W.nl(this).$2(a,null)},
bA:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)t.removeChild(a)}else b.removeChild(a)},
fg:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.pO(a)
r=s.gf9().getAttribute("is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.dB(n)}p="element unprintable"
try{p=J.cm(a)}catch(n){H.dB(n)}try{o=W.eR(a)
this.ff(a,b,t,p,o,s,r)}catch(n){if(H.dB(n) instanceof P.d9)throw n
else{this.bA(a,b)
window
m="Removing corrupted element "+H.t(p)
if(typeof console!="undefined")console.warn(m)}}},
ff:function(a,b,c,d,e,f,g){var t,s,r,q,p
if(c){this.bA(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.bj(a)){this.bA(a,b)
window
t="Removing disallowed element <"+H.t(e)+"> from "+J.cm(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.aZ(a,"is",g)){this.bA(a,b)
window
t="Removing disallowed type extension <"+H.t(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.ga9()
s=H.a(t.slice(0),[H.J(t,0)])
for(r=f.ga9().length-1,t=f.a;r>=0;--r){if(r>=s.length)return H.S(s,r)
q=s[r]
if(!this.a.aZ(a,J.nQ(q),t.getAttribute(q))){window
p="Removing disallowed attribute <"+H.t(e)+" "+q+'="'+H.t(t.getAttribute(q))+'">'
if(typeof console!="undefined")console.warn(p)
t.getAttribute(q)
t.removeAttribute(q)}}if(!!J.aZ(a).$isfs)this.cg(a.content)}}
W.nl.prototype={
$2:function(a,b){var t,s,r,q,p
r=this.a
switch(a.nodeType){case 1:r.fg(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.bA(a,b)}t=a.lastChild
for(r=a==null;null!=t;){s=null
try{s=J.tl(t)}catch(q){H.dB(q)
p=t
if(r){if(J.tk(p)!=null)p.parentNode.removeChild(p)}else a.removeChild(p)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.aR,W.aR]}}}
P.mZ.prototype={
V:function(a){if(a<=0||a>4294967296)throw H.u(P.rr("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
D:function(){return Math.random()},
e2:function(){return Math.random()<0.5}}
P.n4.prototype={
aV:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.b.am(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
V:function(a){var t,s,r
if(a<=0||a>4294967296)throw H.u(P.rr("max must be in range 0 < max \u2264 2^32, was "+a))
t=a-1
if((a&t)>>>0===0){this.aV()
return(this.a&t)>>>0}do{this.aV()
s=this.a
r=s%a}while(s-r+a>=4294967296)
return r},
D:function(){this.aV()
var t=this.a
this.aV()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
e2:function(){this.aV()
return(this.a&1)===0},
f_:function(a){var t,s,r,q,p,o,n,m
t=J.eJ(a,0)?-1:0
do{if(typeof a!=="number")return a.d7()
s=(a&4294967295)>>>0
a=C.d.am(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.d.am(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.b.am(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.b.am(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.b.am(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.b.am(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.b.am(q-n,4294967296)&4294967295)>>>0
this.b=m
n=(n^p)>>>0
this.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o&4294967295)>>>0
this.b=o}while(a!==t)
if(o===0&&n===0)this.a=23063
this.aV()
this.aV()
this.aV()
this.aV()}}
P.is.prototype={$isY:1}
P.dC.prototype={$isY:1}
P.ja.prototype={$isY:1}
P.jb.prototype={$isY:1}
P.jc.prototype={$isY:1}
P.jd.prototype={$isY:1}
P.je.prototype={$isY:1}
P.jf.prototype={$isY:1}
P.jg.prototype={$isY:1}
P.jh.prototype={$isY:1}
P.ji.prototype={$isY:1}
P.jj.prototype={$isY:1}
P.jk.prototype={$isY:1}
P.jl.prototype={$isY:1}
P.jm.prototype={$isY:1}
P.jn.prototype={$isY:1}
P.jo.prototype={$isY:1}
P.jp.prototype={$isY:1}
P.jN.prototype={$isY:1}
P.cb.prototype={$isY:1}
P.jY.prototype={$isY:1}
P.cH.prototype={$isbi:1,
gae:function(a){return a.value}}
P.kx.prototype={
gt:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.u(P.cZ(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.u(new P.bp("Cannot assign element of immutable List."))},
st:function(a,b){throw H.u(new P.bp("Cannot resize immutable List."))},
gR:function(a){if(a.length>0)return a[0]
throw H.u(new P.c_("No elements"))},
X:function(a,b){return this.m(a,b)},
$isM:1,
$asM:function(){return[P.cH]},
$isP:1,
$asP:function(){return[P.cH]},
$isG:1,
$asG:function(){return[P.cH]}}
P.hj.prototype={
$asM:function(){return[P.cH]},
$asP:function(){return[P.cH]},
$asG:function(){return[P.cH]},
$isM:1,
$isP:1,
$isG:1}
P.ho.prototype={
$asM:function(){return[P.cH]},
$asP:function(){return[P.cH]},
$asG:function(){return[P.cH]},
$isM:1,
$isP:1,
$isG:1}
P.kL.prototype={$isY:1}
P.kM.prototype={$isY:1}
P.cI.prototype={$isbi:1,
gae:function(a){return a.value}}
P.lb.prototype={
gt:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.u(P.cZ(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.u(new P.bp("Cannot assign element of immutable List."))},
st:function(a,b){throw H.u(new P.bp("Cannot resize immutable List."))},
gR:function(a){if(a.length>0)return a[0]
throw H.u(new P.c_("No elements"))},
X:function(a,b){return this.m(a,b)},
$isM:1,
$asM:function(){return[P.cI]},
$isP:1,
$asP:function(){return[P.cI]},
$isG:1,
$asG:function(){return[P.cI]}}
P.hk.prototype={
$asM:function(){return[P.cI]},
$asP:function(){return[P.cI]},
$asG:function(){return[P.cI]},
$isM:1,
$isP:1,
$isG:1}
P.hp.prototype={
$asM:function(){return[P.cI]},
$asP:function(){return[P.cI]},
$asG:function(){return[P.cI]},
$isM:1,
$isP:1,
$isG:1}
P.lj.prototype={$isY:1}
P.fn.prototype={$isfn:1,$isY:1}
P.bP.prototype={
ag:function(a,b,c,d){var t,s,r,q,p,o
if(c==null){t=H.a([],[W.dx])
t.push(W.rT(null))
t.push(W.rW())
t.push(new W.nh())
c=new W.ig(new W.hL(t))}s='<svg version="1.1">'+H.t(b)+"</svg>"
t=document
r=t.body
q=(r&&C.p).fL(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.cB(q)
o=t.gbi(t)
for(;t=o.firstChild,t!=null;)p.appendChild(t)
return p},
$isbP:1,
$isY:1}
P.m7.prototype={$isY:1}
P.m9.prototype={$isY:1}
P.dT.prototype={}
P.mh.prototype={$isY:1}
P.mq.prototype={$isY:1}
P.mr.prototype={$isY:1}
P.fv.prototype={$isY:1}
P.n8.prototype={$isY:1}
P.n9.prototype={$isY:1}
P.na.prototype={$isY:1}
P.da.prototype={}
P.lz.prototype={$isY:1}
T.fF.prototype={
$ashw:function(){return[T.fG]},
$asG:function(){return[T.fG]}}
T.fG.prototype={}
S.it.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Math Book",H.a([$.K,$.a_,$.aO],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Giant Map",H.a([$.K,$.a_],s),null,!1,"Map to Staffs HQ")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Microscope",H.a([$.A,$.a_,$.b7],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Star Chart",H.a([$.K,$.a_],s),null,!1,"Cosmic Dot-to-Dot")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("History Book",H.a([$.K,$.a_],s),null,!1,"Homestuck Anthology")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Radioactive Rock",H.a([$.bS,$.aH],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Compass",H.a([$.A,$.a_],s),null,!1,"Navigation Box")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.W,P.R]
q=new H.o(0,null,null,null,null,null,0,r)
q.i(0,$.eU,$.l)
q.i(0,$.bf,$.l)
q.i(0,$.eh,$.j)
q.i(0,$.b6,$.B)
q.i(0,$.cg,$.j)
p=$.k
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.q
o=o+n+" to stop "
m=$.L
l=[U.c]
q.i(0,new R.a1("Recover the Books",!1,[new U.c(o+m+"ing long enough to discover that underlings stole all the books. "),new U.c("The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "),new U.c("The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books!  ")],H.a([],l),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p=$.k
q.i(0,new R.a1("Shelve the Books",!1,[new U.c("The "+p+" finds a massive library, with no books in it! They manage to get a local "+$.q+" to stop "+$.L+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.c("The "+p+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.c("The "+p+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],l),R.ro(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.k
m="The "+p+" finds a massive library, filled with books. The "
n=$.q
m=m+n+" librarian offers to help the "+p+" search for useful books. "
o="The "+p+" begins to learn about "
k=$.x
n=o+k+" and how they have persecuted the "+n+"s.  "
k="The "+p+" has read the final book about "+k+" and feels much more prepared to face them.  "
p=this.y
q.i(0,new R.a1("Research the Denizen",!1,[new U.c(m),new U.c(n),new U.c(k)],H.a([],l),R.ew(),!1,!1,new Y.bt("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.j)
p=$.aL
this.r.i(0,new X.D(s,q,null),p)
p=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.o(0,null,null,null,null,null,0,r)
s.i(0,$.ea,$.B)
s.i(0,$.cg,$.l)
q=$.k
o="The "+q+"  is approached by a "
n=$.q
s.i(0,new R.a1("Do the Math",!1,[new U.c(o+n+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.c("The "+q+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.c("The "+n+"  finds a "+n+" child "+$.L+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+q+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],l),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
q=$.k
n="The "+q+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.q
s.i(0,new R.a1("Use the Calculator",!1,[new U.c(n),new U.c("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+q+" is getting the hang of this weird calculator that controls reality. "),new U.c("With a frantic "+$.L+", a small "+o+" sprints towards the "+q+".  A giant ogre is chasing them.  In a panic, the "+q+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],l),R.dQ(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
q=$.k
s.i(0,new R.a1("Solve the Equation",!1,[new U.c("The "+q+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.c("There is a flurry of motion.  The "+q+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.c("The "+q+" has done it. Against all odds they have solved the equation.  A "+$.q+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],l),R.ew(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
q=$.aL
this.r.i(0,new X.D(p,s,null),q)
q=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,r)
t.i(0,$.ea,$.B)
t.i(0,$.cg,$.l)
t.i(0,$.bW,$.B)
t.i(0,$.o4,$.B)
s=$.k
r="The "+s+"  is approached by a "
p=$.q
r=r+p+" who offers them a grant to study "
o=$.aj
t.i(0,new R.a1("Test the Hypothesis",!1,[new U.c(r+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.c("The "+s+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.c("The Symposium has started. The crowd of unruly "+p+"s begins "+$.L+"ing louder and louder. Finally, the "+s+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],l),R.ew(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
o=$.q
s="Too many local "+o+" have fallen ill from a mysterious plague.  Those inflicted are too weak to even "
p=$.L
s=s+p+".  It is up to the "
r=$.k
s=s+r+" to figure out how to cure the disease.  They are provided with a state of the art lab and a team of ...not completely terrible "+o+"s."
n="The "+r+" has gotten far too little sleep. Suddenly, they realize the key, the one thing they have been missing: "
m=$.aj
t.i(0,new R.a1("Make the Cure",!1,[new U.c(s),new U.c(n+m+". It all makes sense now! "),new U.c("Each "+o+" lines up to receive their "+m+" injection. The sound of joyful "+p+" fills the air. The plague is defeated!  The "+r+" has a statue made of them in the town center. ")],H.a([],l),R.dz(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
r=$.k
t.i(0,new R.a1("Be the Scientist",!1,[new U.c("The "+r+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.c("The "+r+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.c("The "+r+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.L+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.q+"s are inside the final room, outfitted for a surprise party.  It is for "+r+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],l),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
l=$.aL
this.r.i(0,new X.D(q,t,null),l)},
gH:function(){return this.cx},
gah:function(){return this.cy},
gai:function(){return this.db},
gJ:function(){return this.dx},
gan:function(){return this.dy}}
S.iu.prototype={}
K.bE.prototype={}
L.iz.prototype={
$1:function(a){return!a.gbQ()},
$S:function(){return{func:1,args:[L.cE]}}}
L.iA.prototype={
$1:function(a){return a.gbP()},
$S:function(){return{func:1,args:[L.cE]}}}
L.iB.prototype={
$1:function(a){return!a.gbP()},
$S:function(){return{func:1,args:[L.cE]}}}
L.cE.prototype={
G:function(){var t,s
t=Q.E(null,null,A.a7)
s=A.i("Perfectly Generic Object",H.a([],[G.Z]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),[H.J(t,0)]))
this.r2=t},
cX:function(a){var t,s,r
for(t=this.gH(),s=t.length,r=0;r<t.length;t.length===s||(0,H.c2)(t),++r)t[r].bZ(a)},
h_:function(){return"<font color='"+this.gY().m(0,$.aq).hK()+"'> "},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.C]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.W,P.R]
q=new H.o(0,null,null,null,null,null,0,r)
q.i(0,$.cL,$.j)
q.i(0,$.bf,$.B)
q.i(0,$.dj,$.j)
q.i(0,$.bW,$.l)
q.i(0,$.dv,$.B)
p=$.k
o="The "+p+" learns that all of the local "
n=$.q
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.L+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.x
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.cc+". The "+p+" has won! "
i=[U.c]
q.i(0,new R.U("Revive the Consorts",!1,[new U.c(o),new U.c(m),new U.c(n),new U.a9(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
j=$.aK
this.c.i(0,new X.D(s,q,null),j)
j=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.o(0,null,null,null,null,null,0,r)
s.i(0,$.ef,$.j)
s.i(0,$.dI,$.B)
s.i(0,$.ee,$.l)
s.i(0,$.cu,$.j)
s.i(0,$.cf,$.B)
q=$.k
p="The "+q+" learns that all of the local "
o=$.q
p=p+o+"s have a severe shortage of gears and cogs. It is up to the "+q+" to get the assembly lines up and running again. "
n="The "+q+" is running around and fixing all the broken down equipment. This sure is tiring! "
m="The "+q+" is training the local "+o+"s to operate the manufacturing equipment. There is "+$.L+"ing and chaos everywhere. "
o="The "+q+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+o+"s name a national holiday after the "+q+". "
l="It is time for the "+q+"  to finally face the "
k=$.x
l=l+k+". "
h="The "+k+" lies slain by the "+q+"'s "+$.cc+". The "+q+" has won! "
s.i(0,new R.U("Produce the Goods",!1,[new U.c(p),new U.c(n),new U.c(m),new U.c(o),new U.a9(l,"The tyranny of "+k+" continues with the defeat of the "+q+".",h)],H.a([],i),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
h=$.aK
this.c.i(0,new X.D(j,s,null),h)
h=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,r)
t.i(0,$.b6,$.j)
t.i(0,$.bf,$.B)
t.i(0,$.c3,$.l)
s=$.k
r="The "+s+" learns that all of the local "
q=$.q
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+s+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
o=$.L
p=p+o+"ing about? A prophecy?  "
o="The "+s+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+o+" once. "
q="It is time for the "+s+"  to finally face the "
n=$.x
q=q+n+". "
m="The "+n+" lies slain by the "+s+"'s "+$.cc+". The "+s+" has won! "
t.i(0,new R.a1("Relax the Consorts According to Prophecy",!1,[new U.c(r),new U.c(p),new U.c(o),new U.a9(q,"The tyranny of "+n+" continues with the defeat of the "+s+".",m)],H.a([],i),R.p4(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
m=$.k
s="The "+m+" learns that all of the local "
n=$.q
s=s+n+"s have been too stressed about an impending famine to relax. They vow to help however they can."
q="The "+m+" fluffs more pillows than any other Player ever has before them. "
n="The "+m+"  teaches the local "+n+"s to find their chill. "
o="It is time for the "+m+"  to finally face the "
p=$.x
o=o+p+". "
r="The "+p+" lies slain by the "+m+"'s "+$.cc+". The "+m+" has won! "
t.i(0,new R.U("Relax the Consorts",!1,[new U.c(s),new U.c(q),new U.c(n),new U.a9(o,"The tyranny of "+p+" continues with the defeat of the "+m+".",r)],H.a([],i),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
i=$.aK
this.c.i(0,new X.D(h,t,null),i)},
u:function(a){return this.x},
W:function(a,b,c,d){var t
this.d=new X.fY("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+this.x+".xml",!1,H.a([],[X.fL]),H.a([],[M.eT]))
t=this.x
this.y=t
this.e=t+".png"
this.f=t+"Big.png"
this.G()
this.F()
t=this.b
if($.$get$e3().af(t))H.ba("Duplicate aspect id for "+this.u(0)+": "+t+" is already registered for "+J.cm($.$get$e3().m(0,t))+".")
$.$get$e3().i(0,t,this)},
gay:function(){return this.a},
gb3:function(){return this.c},
gM:function(a){return this.x},
gci:function(){return this.y},
gbP:function(){return this.z},
gbQ:function(){return this.Q},
gY:function(){return this.dx},
gJ:function(){return this.dy},
gaa:function(){return this.fr},
gO:function(){return this.k3},
gH:function(){return this.k4},
gcm:function(){return this.r1},
sM:function(a,b){return this.x=b}}
L.al.prototype={
sdM:function(a){return this.j(0,$.as,L.e(a),!0)},
sdL:function(a){return this.j(0,$.ar,L.e(a),!0)},
sdR:function(a){return this.j(0,$.au,L.e(a),!0)},
sdS:function(a){return this.j(0,$.av,L.e(a),!0)},
sdQ:function(a){return this.j(0,$.at,L.e(a),!0)},
sde:function(a){return this.j(0,$.az,L.e(a),!0)},
sdd:function(a){return this.j(0,$.ay,L.e(a),!0)},
se5:function(a){return this.j(0,$.ax,L.e(a),!0)},
se4:function(a){return this.j(0,$.aw,L.e(a),!0)}}
M.iF.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Barbells",H.a([$.ah,$.bX,$.A],s),null,!1,"Strength Building Metal")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Basketball",H.a([$.dL,$.bY],s),null,!1,"Dunksphere")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Baseball Bat",H.a([$.ht,$.a0],s),null,!1,"Wooden Pole of Bone Hurting")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Rubber Ball",H.a([$.dL,$.bY],s),null,!1,"Dead Animal Corpse Ball")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Megaphone",H.a([$.b5,$.ab],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Hockey Stick",H.a([$.ht,$.a0,$.d_],s),null,!1,"L Shaped Bone Hurter")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Trophy",H.a([$.A,$.bd],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Boxing Glove",H.a([$.qG,$.bY],s),null,!1,"Fist Reinforcing Pain Cubes")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Yoga Mat",H.a([$.bY,$.bb],s),null,!1,"Flesh Rubberising Practice Mat")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.W,P.R]
q=new H.o(0,null,null,null,null,null,0,r)
q.i(0,$.dk,$.B)
q.i(0,$.c8,$.l)
q.i(0,$.cu,$.B)
p=$.k
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.q
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.L+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.c]
q.i(0,new R.a1("Enter the Dungeon",!1,[new U.c(o),new U.c(n),new U.c(p)],H.a([],l),R.w(),!1,!1,new Y.bt("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.v)
m=$.k
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.q
q.i(0,new R.a1("Clear the Road",!1,[new U.c(p+n+" merchants waiting for it to be cleared. "),new U.c("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.c("With a triumphant "+$.L+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.dz(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
m=$.k
n="The "+m+"  wanders into a bunch of "
p=$.q
q.i(0,new R.a1("Be the Strongest",!1,[new U.c(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.c("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.c("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.hX(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
m=$.aL
this.r.i(0,new X.D(s,q,null),m)
m=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,r)
t.i(0,$.dk,$.l)
t.i(0,$.ei,$.l)
t.i(0,$.c8,$.l)
s=$.k
r="The "+s+" finds a team of underdog "
q=$.q
t.i(0,new R.a1("Save the Sports",!1,[new U.c(r+q+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.c("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.c("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+q+" have won the SPORTSBALL tournament.")],H.a([],l),R.ro(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
q=$.q
s="A group of "+q+"s approach the "
r=$.k
s=s+r+". Apparently their sports team lost their coach to the "+$.x+" recently, and they need help training for THE BIG GAME. "
p="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+q+"s into fighting shape. "
o="The "+q+"s fall over "
n=$.L
t.i(0,new R.a1("Coach the Sports",!1,[new U.c(s),new U.c(p),new U.c(o+n+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+q+"s cheering and "+n+"ing.")],H.a([],l),R.dz(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
n=$.q
q="A group of "+n+"s approach the "
r=$.k
t.i(0,new R.a1("Win at Sports",!1,[new U.c(q+r+". Apparently their sports team lost a member to the "+$.x+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.c("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.c("The "+r+" ganks the "+$.aj+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+n+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
l=$.aL
this.r.i(0,new X.D(m,t,null),l)},
gH:function(){return this.cx},
gah:function(){return this.cy},
gai:function(){return this.db},
gJ:function(){return this.dx},
gan:function(){return this.dy}}
O.iG.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Cod Piece",H.a([$.N,$.a4,$.b2,$.Q],s),"God damn it, MI. ",!1,null)
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Poisoned Candy",H.a([$.om,$.Q,$.bG],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Cursed Lyre",H.a([$.aN,$.a0,$.bu,$.Q,$.ad],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Snare Trap",H.a([$.N,$.aN,$.Q,$.bc],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,[N.W,P.R])
t.i(0,$.co,$.j)
t.i(0,$.eX,$.j)
t.i(0,$.c9,$.j)
t.i(0,$.df,$.j)
t.i(0,$.ck,$.j)
t.i(0,$.e9,$.j)
r="After all the bullshit the "+$.x+" has put the native "
q=$.q
r=r+q+"s through, the "
p=$.k
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.aX+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.L
m=[U.c]
t.i(0,new R.aa("Celebrate the Win",!1,[new U.c(r),new U.c(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.c(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.w(),!1,!1,new Y.dS("Rewards/no_reward.png",null),1,null,null),$.v)
p=$.q
n="A group of jubilant "+p+"s are following the "
q=$.k
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.L
t.i(0,new R.aa("Lead the Parade",!1,[new U.c(n),new U.c(o+r+"ing about how they defeated the "+$.x+". Wow, this is actually kind of embarrasing. "),new U.c("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
q=$.k
t.i(0,new R.aa("Behold the Glory of CodTier",!1,[new U.c("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.x+" has been defeated, perhaps they can finally focus on finding it."),new U.c("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.w(),!1,!1,new Y.iT("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.v)
q="The "+$.x+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.k
q=q+r+" organizes a huge festival for all the "
p=$.q
t.i(0,new R.by("Pull the Strings of a Universe",!1,[new U.c(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.c("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.c("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.bN(),!1,!1,new Y.bB("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ac)
m=$.bJ
this.c.i(0,new X.D(s,t,null),m)},
gJ:function(){return this.k1},
gO:function(){return this.k4}}
Y.mg.prototype={
$asfq:function(){return[P.C]},
$ascN:function(){return[P.C,P.C]}}
L.iI.prototype={
gbG:function(){return this.id}}
T.iK.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Mystical Vial of Blood",H.a([$.b7,$.bu,$.V,$.b_],s),null,!1,"Vial of Not-ABs Oil")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Bananaphone",H.a([$.aD,$.bu,$.V,$.b3],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Friendship Bracelet",H.a([$.N,$.bu,$.V,$.b_,$.f_],s),null,!1,"Soul Binding Wrist Shackle")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Bonding Manacles",H.a([$.A,$.bc,$.V,$.b_,$.f_,$.aQ],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Friendship Stairs",H.a([$.a0,$.ov,$.bu,$.b_,$.V,$.a4],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.W,P.R]
q=new H.o(0,null,null,null,null,null,0,r)
q.i(0,$.cV,$.j)
q.i(0,$.o8,$.j)
q.i(0,$.bW,$.l)
p=$.k
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.q
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.aj+" and some boondollars in compensation."
n=this.r2
k=[U.c]
q.i(0,new R.a1("Cross the Lake",!1,[new U.c(o),new U.c(m),new U.c(l),new U.c(p)],H.a([],k),R.dz(),!1,!1,new Y.bt("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.v)
n=$.q
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.L+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.x
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.k
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.cc+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.i(0,new R.U("Unplug the Rivers",!1,[new U.c(p),new U.c(o),new U.c(j),new U.a9(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
n=$.aK
this.c.i(0,new X.D(s,q,null),n)
n=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.o(0,null,null,null,null,null,0,r)
s.i(0,$.cu,$.j)
s.i(0,$.ck,$.B)
s.i(0,$.b6,$.B)
s.i(0,$.jH,$.j)
s.i(0,$.c9,$.B)
q=$.k
p="The "+q+"  and the "
o=$.dA
p=p+o+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
m="The "+q+"  and the "+o+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
l="The "+q+"  and the "+o+" trust each other to have their backs.  So when the "
j=$.x
l=l+j+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+j+"."
i="Slaying the "+j+" proves the POWER OF TEAMWORK!"
s.i(0,new R.U("Learn the Power of Teamwork",!1,[new U.c(p),new U.c(m),new U.a9(l,"The "+q+" and "+o+" end up getting distracted bickering after one of the "+j+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",i)],H.a([],k),R.dR(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.ac)
i=$.k
j="The "+i+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
o=$.q
j=j+o+"s explains that before  "
q=$.x
j=j+q+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+o+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+i+" vows to help. "
o="The "+i+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+o+"s discover that "+o+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
l="The "+i+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+q+" needs to be stopped. "
m="The "+i+" has tracked down "+q+". There can be no mercy. "
p="The "+q+" lies slain by the "+i+"'s "+$.cc+". The "+i+" is finally free to restore the chains, bringing peace and understanding to the land. "
s.i(0,new R.U("Chain the Towers",!1,[new U.c(j),new U.c(o),new U.c(l),new U.a9(m,"The tyranny  and xenophobia of "+q+" continues with the defeat of the "+i+".",p)],H.a([],k),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
p=$.k
i="The "+p+" learns of the "
q=$.aX
i=i+q+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
m=$.q
i=i+m+" explains that the "
l=$.x
m=i+l+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+m+"s from communciating with other villages and risking the entire planet falling apart.  "
i="The "+p+" hears of a fantastical secret kept at the top of the "+q+" Tower. It is said that the "+l+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
o="The "+p+" defeats a fearsome "+l+" minion, whose death unlocks the most direct path to the "+q+" Tower . "
j="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+l+". "
p="The "+l+" lies slain by the "+p+"'s "+$.cc+". The "+p+" is finally able to see what lies at the top of the "+q+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.i(0,new R.U("Protect the Beams",!1,[new U.c(m),new U.c(i),new U.c(o),new U.a9(j,"The "+q+" Tower is more at risk than ever before.",p)],H.a([],k),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
p=$.k
q="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
j=$.q
q=q+j+" on "+$.aX+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
o="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
j="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+j+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+j+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.ej+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.i(0,new R.aa("One Degree of Separation",!1,[new U.c(q),new U.c(o),new U.c(j)],H.a([],k),R.ew(),!1,!1,new Y.O("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.k
j="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.q+" on "
o=$.aX
j=j+o+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
q="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
o="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+o+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.ej+" is now more popular with your friends than you are."
s.i(0,new R.aa("Steal The Friends",!1,[new U.c(j),new U.c(q),new U.c(o)],H.a([],k),R.p5(),!1,!1,new Y.O("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.k
o="The "+p+"  and the "
q=$.dA
o=o+q+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
j="The "+p+"  and the "+q+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
i=$.x
j=j+i+" doing here!?"
i="Slaying the "+i+" proves to be the thing that finally pushes the "+p+" and "+q+" together."
s.i(0,new R.U("Pale Shipping Dungeon",!1,[new U.c(o),new U.a9(j,"The "+p+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.t(C.n)+".",i)],H.a([],k),R.dR(),!1,!1,new Y.hU(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ac)
i=$.aK
this.c.i(0,new X.D(n,s,null),i)
i=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,r)
t.i(0,$.b6,$.j)
t.i(0,$.bf,$.B)
t.i(0,$.c3,$.l)
s="In the wake of the defeat of the "+$.x+" it becomes really how isolated the individual "
r=$.q
s=s+r+" villages are. It is far too common for a young "+r+" to never have even MET their cousins. The "
q=$.k
s=s+q+" resolves to fix this as soon as possible."
q="The "+q+" is working hard to restore roads, track down long lost family members and generally just remind all the "+r+"s that at the end of the day they are all one big happy family. "
r="All those hours of hard work have paid off, the individual "+r+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
p="It may take a village for the "+$.ej+" to kick your ass, but luckily they have several."
t.i(0,new R.aa("Connect The Villages",!1,[new U.c(s),new U.c(q),new U.c(r)],H.a([],k),R.dz(),!1,!1,new Y.O("Community Builder",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.k
r="The "+p+" learns that two prominent "
q=$.q
r=r+q+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+q+"s pick a side, and everyone is suffering."
s="The "+p+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
o="In a dramatic reveal, the "+p+" discovers that "
n=$.x
o=o+n+" is responsible for the feud. The two "+q+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
m="The "+p+" confronts "+n+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+p+" be able to claim it?"
q="The "+n+" lies slain by the "+p+"'s "+$.cc+". The "+p+" shows the proof to the two "+q+" families, who reconcile in a dramatic shower of happy tears and "+$.L+"ing. "
t.i(0,new R.U("Stop the Feud",!1,[new U.c(r),new U.c(s),new U.c(o),new U.a9(m,"The deception of "+n+" continues with the defeat of the "+p+".",q)],H.a([],k),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
k=$.aK
this.c.i(0,new X.D(i,t,null),k)},
gay:function(){return this.rx},
gY:function(){return this.ry},
gJ:function(){return this.x2},
gO:function(){return this.y1},
gaa:function(){return this.E},
gH:function(){return this.N}}
T.iM.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Pan's Pipe",H.a([$.ad,$.a0,$.bu,$.V],s),null,!1,"Smonkin Weeds Pipe")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Skeleton Key",H.a([$.b9,$.V],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Inspector's Fan",H.a([$.ab,$.A,$.bu,$.V],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Jet Pack",H.a([$.aE,$.A,$.b5,$.V,$.a4],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.W,P.R]
q=new H.o(0,null,null,null,null,null,0,r)
q.i(0,$.c3,$.l)
q.i(0,$.ei,$.j)
q.i(0,$.b6,$.l)
p=$.k
o="The "+p+" tries posting a letter through the "
n=$.aj
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.x
o=o+m+" has screwed with the mail system, crippling the "
l=$.q
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.cc+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
i=[U.c]
q.i(0,new R.U("The Mail Goes Through",!1,[new U.c(o),new U.c(k),new U.c(n),new U.a9(j,"The tyranny of "+m+" continues with the defeat of the "+p+".",l)],H.a([],i),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
l=$.aK
this.c.i(0,new X.D(s,q,null),l)
l=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.o(0,null,null,null,null,null,0,r)
s.i(0,$.bf,$.j)
s.i(0,$.ei,$.l)
s.i(0,$.b6,$.l)
s.i(0,$.c8,$.l)
s.i(0,$.c3,$.l)
q=$.k
p="The "+q+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+q+" decides that they should use the winds of their land for more projects. "
o="The "+q+" starts learning the uses of their lands "
n=$.aj
o=o+n+" in manipulation of wind. Their future constructions are going to be amazing. "
n="The "+q+" uses "+n+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
m=$.q
m=n+m+" fields. The "+m+"s "+$.L+"ing is so joyful it's literally deafening. "
n=$.x
k=n+" is attacking the happy wind based farming community. The "+q+" has worked too hard for it all to be lost now. There can be no mercy. "
j="The "+n+" lies slain by the "+q+"'s "+$.cc+". The "+q+" is finally free to continue improving the land with wind. "
s.i(0,new R.U("Thinking With Wind Power",!1,[new U.c(p),new U.c(o),new U.c(m),new U.a9(k,"The tyranny of "+n+" continues with the defeat of the "+q+".",j)],H.a([],i),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
j=$.aK
this.c.i(0,new X.D(l,s,null),j)
j=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,r)
t.i(0,$.cf,$.j)
t.i(0,$.o9,$.j)
t.i(0,$.ei,$.B)
t.i(0,$.c3,$.B)
s=$.k
r="The "+s+" is chilling in a "+$.q+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
q=$.x
r=r+q+" has screwed with the wind system, sending these giant storms at random."
p="The "+s+" learns of a "
o=$.aj
p=p+o+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+o+" system so the storms are redirected from consort villages. "
o="The "+s+" finishes the dungeon that holds the  "+o+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.aX+" to do control the storms in the first place, and it was inside them all along.  "
n=" "+q+" arrives to challenge the "+s+" storm supremacy. Will the "+s+" be able to prove their worth?"
m="The "+q+" lies slain by the "+s+"'s "+$.cc+". The "+s+" has become the storm master. It is them. "
t.i(0,new R.U("The Winds of Change",!1,[new U.c(r),new U.c(p),new U.c(o),new U.a9(n,"The storm supremacy of "+q+" continues with the defeat of the "+s+".",m)],H.a([],i),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
i=$.aK
this.c.i(0,new X.D(j,t,null),i)},
gay:function(){return this.rx},
gY:function(){return this.ry},
gJ:function(){return this.x2},
gO:function(){return this.y1},
gaa:function(){return this.E},
gH:function(){return this.N}}
Z.iN.prototype={
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Skateboards","Bikes","Ramps","Glitches","Some Noise","Stunting","Game"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,[N.W,P.R])
t.i(0,$.dk,$.v)
t.i(0,$.c8,$.B)
t.i(0,$.ed,$.j)
t.i(0,$.eb,$.ac)
t.i(0,$.jG,$.B)
r=$.k
q="The "+r+" is a bit confused about SBURB. apparently it's about "
p=$.aj
q=q+p+"s or some noise?"
p="The "+r+" is sure that "+p+"s are like fucking dynamite in a handbag for some brosephs. But all they're saying is, when do you get to <b>thrash</b> anything?"
o="The "+r+' gives up on playing the game for now, and decides to instead bust out, and I quote, "the mad stunts all wicked up-ins".'
n=$.x
m="So ok. <br></br> An end to the disasters caused by "+n+" is something that a lot of "+$.q+"s seem hella pumped of. And their lair is sitting right in front of the "+r+", so they're like, yeah man I'll fight it."
n+=" is so wasted, ha ha. I mean damn."
l=[U.c]
t.i(0,new R.U("Bust Out the Mad Stunts all Wicked Up-Ins",!1,[new U.c(q),new U.c(p),new U.c(o),new U.a9(m,"the "+r+" has failed, and the consorts remain in jeopardy of getting mud on their doll's dresses or whatever.",n)],H.a([],l),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.B)
n=$.k
r="At this point, the "+n+" would like to give a shout out to their boy "
m=$.dA
r=r+m+". the two are about to go chill in front of The Dark "+$.L+", and are so psyched of it."
o="The "+m+" was leaning against the screen door when the shit popped open. they slip down the steps and break their thumb on the lawn. It wasn't a long fall, but hey I guess a thumb bone wasn't made for supporting the brunt of a huge useless tool against wet grass."
n="The "+n+" and the "+m+" didn't actually go see the movie on account of a "+$.q+" trucking his bawling "+$.aj+"-ass girth into the hospital. the "+n+" give it 1.5 "
p=$.aX
t.i(0,new R.aa("Give a Shout-Out to their Boy",!1,[new U.c(r),new U.c(o),new U.c(n+p+"s out of 5 "+p+"s anyways, to keep it real. <br></br>It's OK though, The "+m+" still has another watch in them, Brotel Rwanda.")],H.a([],l),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
l=$.aK
this.c.i(0,new X.D(s,t,null),l)},
a8:function(){return!0},
gJ:function(){return this.k1},
gO:function(){return this.x2},
gH:function(){return this.y1}}
M.fK.prototype={}
Y.iO.prototype={
$asfq:function(){return[M.fK]},
$ascN:function(){return[M.fK,P.C]}}
A.iV.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Colonel Sassacre's Daunting Text ",H.a([$.K,$.ah,$.b3,$.bX],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Wise Guy Book",H.a([$.K,$.b3],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Beagle Puss",H.a([$.b7,$.b3],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Novelty Microphone",H.a([$.b5,$.ab,$.b3],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Banana",H.a([$.aD,$.b3],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Fake Flower",H.a([$.N,$.b3],s),null,!1,"Flower that smells like Plastic")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Trick Handcuffs",H.a([$.A,$.b3],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.W,P.R]
q=new H.o(0,null,null,null,null,null,0,r)
q.i(0,$.c9,$.l)
q.i(0,$.cw,$.j)
q.i(0,$.c8,$.l)
p=$.k
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.q
o=o+n+"s are too scared to even "+$.L+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.x+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.c]
q.i(0,new R.a1("Defeat the Army",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.w(),!1,!1,new Y.bt("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.v)
p=$.aL
this.r.i(0,new X.D(s,q,null),p)
p=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.o(0,null,null,null,null,null,0,r)
s.i(0,$.dk,$.B)
s.i(0,$.c8,$.j)
s.i(0,$.cw,$.j)
s.i(0,$.co,$.j)
q=$.k
o="The "+q+" learns of an Open Mic Nite at the "
n=$.aX
o=o+n+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
m="The "+q+" is practicing their jokes on a street corner. A few "
k=$.q
s.i(0,new R.a1("Win the Laughs",!1,[new U.c(o),new U.c(m+k+"s let out a braying "+$.L+" of laughter, but most seem unimpressed. The "+q+" sure has a long way to go. "),new U.c("It's finally time for the Open Mic Nite at the "+n+" Club.! The "+k+"s seem like a tough crowd, but the "+q+" leaves them hysterical with laughter. It's a huge success! ")],H.a([],l),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
q=$.aL
this.r.i(0,new X.D(p,s,null),q)
q=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,r)
t.i(0,$.cM,$.B)
t.i(0,$.c7,$.l)
t.i(0,$.cw,$.j)
t.i(0,$.c8,$.l)
t.i(0,$.h2,$.l)
s=$.k
r="The "+s+"  is approached by a Crafty "
p=$.q
r=r+p+" who offers them a magical "
o=$.aj
r=r+o+", guaranteed to grant them any wish. The "+s+" is shocked to discover it was a ruse, and the Crafty "+p+" has already escaped to the side with their ill earned boonies. "
n="The "+s+" finds many "+p+"s, too sad to even "
m=$.L
t.i(0,new R.a1("Trick the Villain",!1,[new U.c(r),new U.c(n+m+", holding "+o+".  The Crafty "+p+" must be stopped!  "),new U.c("The "+s+" has finally caught up with the Crafty "+p+".  They thank the confused consort for how much the "+o+" helped them. Confused, the Crafty "+p+" offers to buy the "+o+" back, and is upset when the "+s+" refuses. They begin "+m+"ing and begging until the "+s+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+p+" offers them a comically large bag of boonies, which the "+s+" promptly distributes to the swindled consorts.  The "+o+" working was a ruse all along, and the Crafty "+p+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
l=$.aL
this.r.i(0,new X.D(q,t,null),l)},
gH:function(){return this.cx},
gah:function(){return this.cy},
gai:function(){return this.db},
gJ:function(){return this.dx},
gan:function(){return this.dy}}
S.bs.prototype={
u:function(a){return H.t(new H.d4(H.fE(this),null))+": "+this.c},
gM:function(a){return this.c}}
S.fN.prototype={}
M.iX.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Can of Spray Paint",H.a([$.aI,$.A],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Sensible Chuckles Magazine",H.a([$.K,$.am,$.b3,$.aO],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Gentleman's Razor",H.a([$.oE,$.A,$.aG],s),null,!1,"Face Cutting Hair Remover")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("How To Draw Manga",H.a([$.K,$.am,$.aO],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Painting of a Horse Boxing a Football Player",H.a([$.aI,$.ap,$.K],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Collection of Classical Works",H.a([$.am,$.K],s),null,!1,"Book of Naked Renaissance People")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Documentary on Horses",H.a([$.am,$.aP,$.ap],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Paint Set",H.a([$.aI,$.am],s),null,!1,"Pain Drink Set")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Shaving Cream",H.a([$.aE,$.am,$.A],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Classy Suit",H.a([$.N,$.am],s),null,!1,"Georgio Armani Suit")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("The Fatherly Gent's Shaving Almanac ",H.a([$.K,$.am,$.aO],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.W,P.R]
q=new H.o(0,null,null,null,null,null,0,r)
q.i(0,$.di,$.l)
q.i(0,$.cg,$.j)
q.i(0,$.b6,$.l)
p=$.k
o="The "+p+" visits a beautiful "
n=$.aj
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.q
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.x+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.L+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.c]
q.i(0,new R.a1("Catch the Thief",!1,[new U.c(o),new U.c(l),new U.c(n)],H.a([],p),R.w(),!1,!1,new Y.bt("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.v)
m=$.aL
this.r.i(0,new X.D(s,q,null),m)
m=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.o(0,null,null,null,null,null,0,r)
s.i(0,$.dk,$.B)
s.i(0,$.c8,$.l)
s.i(0,$.cw,$.B)
s.i(0,$.bf,$.l)
s.i(0,$.co,$.j)
q=$.k
o="The "+q+" finds a troupe of dejected looking "
n=$.q
n=o+n+"s. Apparently they want to put on a famous "+n+" play called 'The "
o=$.aX
n=n+o+" "
l=$.aj
s.i(0,new R.a1("Perform the Play",!1,[new U.c(n+l+"', but have no one to play the titular role!  Does the "+q+" have what it takes to bring the iconic role to life? "),new U.c("The "+q+" is practicing their lines for the upcoming performance of 'The "+o.toUpperCase()+" "+l.toUpperCase()+"'. Man, who would have thought a "+l+" would have so many different emotions! "),new U.c("It's finally time for performance of the 'The "+o.toUpperCase()+" "+l.toUpperCase()+"'. The audience is moved to tears and "+$.L+"ing at the "+q+" stirring performance as the "+l+". ")],H.a([],p),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
l=$.aL
this.r.i(0,new X.D(m,s,null),l)
l=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,r)
t.i(0,$.eX,$.B)
t.i(0,$.c9,$.B)
t.i(0,$.e9,$.B)
t.i(0,$.c7,$.B)
t.i(0,$.bf,$.l)
t.i(0,$.b6,$.l)
s=$.k
r="The "+s+"  is cordially invited to the dinner party of Miss "
q=$.L
r=r+q+"ingworth, "
o=$.q
t.i(0,new R.a1("Attend the Dinner Party",!1,[new U.c(r+o+" heiress to the "+$.aj+" fortune. "),new U.c("The "+s+" is coached on etiquette by  Miss "+q+"ingworth's butler. It would not do to embarass the young Miss.  "),new U.c("It is finally time for Miss "+q+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+s+" is the guest of honor. They successfully charm all of the "+o+"s with a captivating story of dining customs from their home world. ")],H.a([],p),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p=$.aL
this.r.i(0,new X.D(l,t,null),p)},
gH:function(){return this.cx},
gah:function(){return this.cy},
gai:function(){return this.db},
gJ:function(){return this.dx},
gan:function(){return this.dy}}
T.iZ.prototype={}
V.j1.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Trendy Fabric",H.a([$.aI,$.N],s),null,!1,"Weird Tasting Candy Paper")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Necklace",H.a([$.aI,$.os,$.f_],s),null,!1,"Nasty Candy Necklace")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Sewing Needle",H.a([$.A,$.oz,$.aY],s),null,!1,"Cloth Stabbing Knife")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=$.hr
r=A.i("Broom",H.a([r,$.a0,$.ah,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Rolling Pin",H.a([$.a0,$.oG,$.ah],s),null,!1,"Babushkas Punishment Pole")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Velvet Pillow",H.a([$.N,$.bb,$.bu,$.aI,$.hu],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Yarn Ball",H.a([$.aI,$.N],s),null,!1,"Cats Plaything")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Refrigerator",H.a([$.aQ,$.bX,$.A,$.bj],s),null,!1,"Food Hardening Box")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Photo Album",H.a([$.aI,$.K],s),null,!1,"Memory Book")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Ice Cubes",H.a([$.bj],s),null,!1,"Hard Water")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Cast Iron Skillet",H.a([$.A,$.aE,$.ah,$.bX,$.or],s),null,!1,"Fancy Unstoppable Weapon")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Failed Dish",H.a([$.bG],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Potted Plant",H.a([$.aI,$.bF,$.b1],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Chicken Leg",H.a([$.aD,$.bg,$.b9],s),null,!1,"Thicc Chicken")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Juicy Steak",H.a([$.aD,$.bg],s),null,!1,"Juicy Cow Flesh")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Wedding Cake",H.a([$.aI,$.aD,$.b_],s),null,!1,"The Only Benefit of a Wedding")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.W,P.R]
q=new H.o(0,null,null,null,null,null,0,r)
q.i(0,$.co,$.l)
q.i(0,$.ck,$.l)
q.i(0,$.c9,$.B)
p=$.k
o="The "+p+" is visited by a Beautiful "
n=$.q
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.aj
l=[U.c]
q.i(0,new R.a1("Design the Dress",!1,[new U.c(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.c(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.c("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.L+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
n=$.aL
this.r.i(0,new X.D(s,q,null),n)
n=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.o(0,null,null,null,null,null,0,r)
s.i(0,$.c9,$.j)
s.i(0,$.c8,$.l)
s.i(0,$.e9,$.j)
s.i(0,$.df,$.l)
s.i(0,$.bf,$.j)
q=$.k
p="The "+q+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
o="The "+q+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
m=$.aj
o=o+m+"'. It is incredible how much of a difference it makes! "
k=$.q
s.i(0,new R.a1("Bake the Cake",!1,[new U.c(p),new U.c(o),new U.c("It's finally time for competition! The Distinguised "+k+" takes a slow, thoughtful bite of the "+q+"'s cake. There is a pause, and then the Distinguished "+k+" begins "+$.L+"ing up a storm!  The "+m+" did the trick, "+q+"'s cake is immediately declared the winner! ")],H.a([],l),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
q=$.aL
this.r.i(0,new X.D(n,s,null),q)
q=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,r)
t.i(0,$.eb,$.j)
t.i(0,$.bf,$.l)
t.i(0,$.ec,$.j)
t.i(0,$.b6,$.l)
t.i(0,$.jH,$.j)
s=$.k
r="The "+s+" finds a loom, and a Wizened "
p=$.q
r=r+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+s+" is enchanted by the thought of this. "
o="The "+s+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
n=$.aj
o=o+n+" colored thread. Is this finally it?  "
s="The "+s+", slowly, methodically weaves a shawl from the skein of "+n+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.L+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+s+" just uses it to alchemize other things."
p=this.y
t.i(0,new R.a1("Weave the Cloth",!1,[new U.c(r),new U.c(o),new U.c(s)],H.a([],l),R.w(),!1,!1,new Y.bt("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.v)
p=$.aL
this.r.i(0,new X.D(q,t,null),p)},
gH:function(){return this.cx},
gah:function(){return this.cy},
gai:function(){return this.db},
gJ:function(){return this.dx},
gan:function(){return this.dy}}
U.j2.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.aO,$.ab,$.K,$.aN,$.V,$.a4],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Egg Timer",H.a([$.aP,$.bu,$.V,$.aN],s),null,!1,"Egg That Counts Down to Your Death")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Skull Timer",H.a([$.b9,$.bu,$.V,$.aN],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Poison Flask",H.a([$.b7,$.V,$.bG],s),null,!1,"Glass of Bone Hurting Juice")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Ice Gorgon Head",H.a([$.b7,$.V,$.bj,$.aN,$.bc,$.bI,$.b8],s),null,!1,"Oddly Attractive Decapitated Head")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Obituary",H.a([$.aQ,$.b8,$.aN,$.K,$.V],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.C]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.W,P.R]
q=new H.o(0,null,null,null,null,null,0,r)
q.i(0,$.dj,$.j)
q.i(0,$.cL,$.l)
q.i(0,$.ei,$.B)
q.i(0,$.bf,$.B)
q.i(0,$.bW,$.l)
p=$.k
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.q
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.aj
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.x
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.cc+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.c]
q.i(0,new R.U("Empty the Graves",!1,[new U.c(o),new U.c(m),new U.c(l),new U.a9(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
n=$.aK
this.c.i(0,new X.D(s,q,null),n)
n=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.o(0,null,null,null,null,null,0,r)
s.i(0,$.dj,$.j)
s.i(0,$.cL,$.l)
s.i(0,$.dJ,$.ac)
s.i(0,$.dH,$.l)
s.i(0,$.o4,$.l)
s.i(0,$.cV,$.l)
s.i(0,$.cL,$.l)
s.i(0,$.bf,$.B)
s.i(0,$.bW,$.l)
s.i(0,$.cK,$.l)
q=$.k
p="The "+q+" has found a group of Violent "
o=$.q
p=p+o+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
m=$.aX
p=p+m+"', the fuel their post apocalyptic society runs on. "
l="The "+q+" has survived a small assault team of Violent "+o+"s, and is declared their new leader. They beg and grovel and "+$.L+" and ask that the "+q+" help them take back their "+m+" from a rival gang. "
k="The "+q+" is now the warlord of nearly all of the Violent "+o+"s. There is clearly not enough "+m+" for everyone, though. It turns out that the "
j=$.x
k=k+j+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
h="There isn't enough room in this wasteland for the both of them. It's time to take out the "+j+"."
o="The "+j+" lies slain by the "+q+"'s "+$.cc+". The "+q+" distributes the hoard of "+m+" to the Violent "+o+"s and keeps the hoard of grist for themself. "
s.i(0,new R.U("Become the Warlord",!1,[new U.c(p),new U.c(l),new U.c(k),new U.a9(h,"The "+m+" shortage continues with the defeat of the "+q+".",o)],H.a([],i),R.dQ(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.j)
o=$.k
q="The "+o+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
m=$.aj
q=q+m+"s alike. "
m=$.q+"s begin to flock to the safe areas that The "+o+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+m+"s are found in some nearby mines. "
h="The "+o+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
k=$.x
h=h+k+" remains alive, the safe zone will be temporary at best. "
l=k+" is attacking the safe zones. The "+o+" has worked too hard for it all to be lost now. There can be no mercy. "
p="The "+k+" lies slain by the "+o+"'s "+$.cc+". The "+o+" is finally free to continue improving the land. "
s.i(0,new R.U("Make This Stupid Planet Habitable",!1,[new U.c(q),new U.c(m),new U.c(h),new U.a9(l,"The tyranny of "+k+" continues with the defeat of the "+o+".",p)],H.a([],i),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
p=$.aK
this.c.i(0,new X.D(n,s,null),p)
p=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,r)
t.i(0,$.b6,$.j)
t.i(0,$.bW,$.j)
t.i(0,$.oc,$.ac)
t.i(0,$.eU,$.B)
s=$.k
r="The "+s+" finds a small dungeon bearing the image of "
q=$.x
r=r+q+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+s+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.q+"s, the "+s+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+s+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
n="The timer doesn\u2019t stop from counting lower. The "+s+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+s+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+q+"? Either way, the "+s+" isn\u2019t very pleased with the "+q+"."
m="The "+s+" tracks down the location of the "+q+" \u2018s lair. It\u2019s payback time!"
l="The "+q+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+s+"."
t.i(0,new R.U("Learn the Prophecy",!1,[new U.c(r),new U.c(o),new U.c(n),new U.a9(m,"The "+s+" couldn\u2019t get their revenge. "+q+" has a hearty laugh at their expense.",l)],H.a([],i),R.dQ(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
l=$.k
q="The "+l+" learns from one of their "
s=$.q
q=q+s+"s that there is an ancient prophecy of a "
m=$.aX
q=q+m+" plague that is due to kill them all any day now."
n="The "+l+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.aj
n=n+o+", which currently happens to be the "+s+"s. "
s="The "+l+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+m+" plague into devastating the underlings instead of the "+s+"s. The underling army is all but decimated, and "
m=$.x
s=s+m+"s lair is all but undefended. "
o="The "+l+" is finally ready to face the "+m+"."
r="The "+m+" lies slain by the "+l+"'s "+$.cc+". The "+l+" has won! "
t.i(0,new R.U("Learn the Prophecy",!1,[new U.c(q),new U.c(n),new U.c(s),new U.a9(o,"The tyranny of "+m+" continues with the defeat of the "+l+".",r)],H.a([],i),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
i=$.aK
this.c.i(0,new X.D(p,t,null),i)},
gay:function(){return this.rx},
gY:function(){return this.ry},
gJ:function(){return this.x2},
gO:function(){return this.y1},
gaa:function(){return this.v},
gH:function(){return this.ad}}
Z.j3.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Dream Diary",H.a([$.K,$.aO,$.V],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Interlocking Brick",H.a([$.aP,$.bu,$.ah,$.V,$.a4],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Art Supplies",H.a([$.aP,$.bu,$.V],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.W,P.R]
q=new H.o(0,null,null,null,null,null,0,r)
q.i(0,$.eb,$.l)
q.i(0,$.ec,$.j)
q.i(0,$.b6,$.l)
q.i(0,$.jH,$.l)
p=$.q
o="A "+p+" child tugs on the "
n=$.k
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.aj
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.x
k=[U.c]
q.i(0,new R.U("Make the Thing",!1,[new U.c(o+l+"'s lair light up.  Only 99 to go!"),new U.c("An entire line of "+p+" children are "+$.L+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "),new U.c("The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."),new U.a9("The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife.","Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
n=$.aK
this.c.i(0,new X.D(s,q,null),n)
n=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.o(0,null,null,null,null,null,0,r)
s.i(0,$.cf,$.l)
s.i(0,$.ec,$.j)
s.i(0,$.dK,$.l)
s.i(0,$.cv,$.l)
s.i(0,$.jx,$.l)
s.i(0,$.cw,$.j)
q=$.k
p="There is a portrait of the "+q+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+q+" tries not to let it bother them. "
o="More and more frequently, the "+q+" sees vandalized copies of their portraits. Teen "
m=$.q
o=o+m+"s are even starting to snigger and "
l=$.L
l=o+l+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+l+" harder. "
m="In a flash of inspiration, the "+q+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+q+" has reclaimed the vandals hateful message as their own one of strength. "
o=$.x
s.i(0,new R.U("Deconstruct the Satire",!1,[new U.c(p),new U.c(l),new U.c(m),new U.a9("The "+o+" is furious that their campaign to discredit the "+q+" has failed. They attack the "+q+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+o+".")],H.a([],k),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
o=$.aK
this.c.i(0,new X.D(n,s,null),o)
o=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,r)
t.i(0,$.di,$.j)
t.i(0,$.jz,$.l)
t.i(0,$.b6,$.l)
t.i(0,$.cv,$.j)
t.i(0,$.jx,$.j)
t.i(0,$.ec,$.l)
s=$.k
r="The "+s+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
q=$.x
t.i(0,new R.U("Dream the Dream",!1,[new U.c(r+q+" Minion wanders by in a "+$.aX+" "+s+" costume and it just seems inevitable.  "),new U.c("You are trying to make sense of things. What is going on lately with the land? A "+$.q+" is "+$.L+"ing in reverse. Another is in a "+$.aj+" wig.  "),new U.c("A boardroom filled with underlings glares severely at the "+s+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.a9("The "+s+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+q+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
k=$.aK
this.c.i(0,new X.D(o,t,null),k)},
gY:function(){return this.rx},
gJ:function(){return this.x1},
gO:function(){return this.x2},
gaa:function(){return this.E},
gH:function(){return this.N}}
Q.e7.prototype={
gM:function(a){return this.c}}
Q.jT.prototype={}
Q.j6.prototype={}
X.fY.prototype={}
X.fL.prototype={
$S:function(){return{func:1,v:true,args:[[P.M,M.eT]]}}}
M.eT.prototype={}
U.jq.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Fluthulu Poster",H.a([$.N,$.bb,$.b8,$.bk],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Scalemate",H.a([$.N,$.bb,$.b8],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Replica Bone Shield",H.a([$.aQ,$.aP,$.b9,$.en,$.b2],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Replica Ice Sword",H.a([$.aP,$.qM,$.eo,$.b2],s),null,!1,"Fake Hard Water Long Stabber")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Zombie Mask",H.a([$.aP,$.bI,$.bg,$.b8],s),null,!1,"Dead Face")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Vampire Romance Novel",H.a([$.aO,$.K,$.aJ,$.b8],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Wizardy Herbert",H.a([$.K,$.a8,$.ah],s),null,!1,"Shitty Wizard Object")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Complacency of the Learned",H.a([$.K,$.a8,$.ah],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Grimoire for Summoning the Zoologically Dubious ",H.a([$.K,$.a8,$.bI,$.b8,$.bk],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Wizard Statue",H.a([$.aQ,$.aH,$.a8,$.ah,$.b2],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Mermaid Fountain",H.a([$.aQ,$.oo,$.a8,$.ah,$.b2],s),null,!1,"Water Spitting Fish Woman Statue")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.W,P.R]
q=new H.o(0,null,null,null,null,null,0,r)
q.i(0,$.ed,$.ac)
q.i(0,$.ck,$.l)
q.i(0,$.c3,$.l)
q.i(0,$.cM,$.B)
p=$.k
o="The "+p+" learns of a Beautiful "
n=$.q
o=o+n+" who has been kidnapped by the vial "
m=$.x
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.aj
j=[U.c]
q.i(0,new R.a1("Save the Beautiful Consort",!1,[new U.c(o),new U.c(l+k+" can open it. Looks like it's time to go questing."),new U.c("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.w(),!1,!1,new Y.cF("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p=$.aL
this.r.i(0,new X.D(s,q,null),p)
p=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.o(0,null,null,null,null,null,0,r)
s.i(0,$.c7,$.j)
s.i(0,$.cV,$.j)
s.i(0,$.jA,$.l)
s.i(0,$.bW,$.j)
s.i(0,$.dJ,$.j)
s.i(0,$.eW,$.l)
q=$.k
o="The "+q+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
n=$.q
s.i(0,new R.a1("Do not Drink...Wine.",!1,[new U.c(o+n+" leave, and no one can remember the last time he received guests."),new U.c("The "+q+" attends the dinner. Count Feratu is an.... eccentric "+n+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.c(" The "+q+" sees Castle Feratu in the distance. The silhouette of a "+n+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
n=$.aL
this.r.i(0,new X.D(p,s,null),n)
n=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,r)
t.i(0,$.c7,$.j)
t.i(0,$.h6,$.l)
t.i(0,$.bW,$.j)
t.i(0,$.de,$.l)
t.i(0,$.ea,$.l)
t.i(0,$.o8,$.l)
s=$.k
r="The "+s+" finds a group of three "
q=$.q
r=r+q+"s "
p=$.L
t.i(0,new R.a1("Expose the Conspiracy",!1,[new U.c(r+p+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+s+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.c("The "+s+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.c("The "+s+" shows the conspiracy papers to the three "+q+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+q+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+p+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
j=$.aL
this.r.i(0,new X.D(n,t,null),j)},
gH:function(){return this.cx},
gah:function(){return this.cy},
gai:function(){return this.db},
gJ:function(){return this.dx},
gan:function(){return this.dy}}
L.jr.prototype={
gY:function(){return this.rx}}
N.W.prototype={
u:function(a){return H.t(new H.d4(H.fE(this),null))+": "+H.t(this.b)}}
A.jv.prototype={
$5:function(a,b,c,d,e){var t,s
for(t=this.a,s=0;s<2;++s)t[s].$5(a,b,c,d,e)},
$S:function(){return{func:1,args:[D.cW,[Q.bD,N.W],E.ch,L.dn,A.d2]}}}
A.jt.prototype={
$5:function(a,b,c,d,e){var t,s
if(!b.gP(b).A()){t=a.f$
s=this.a
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(this.b)),[H.J(t,0)]))}},
$S:function(){return{func:1,args:[D.cW,[Q.bD,N.W],E.ch,L.dn,A.d2]}}}
A.ju.prototype={
$5:function(a,b,c,d,e){if(J.pQ(b)===!0)a.gbH().fn(0,e.w(this.a),this.b)},
$S:function(){return{func:1,args:[D.cW,[Q.bD,N.W],E.ch,L.dn,A.d2]}}}
D.cW.prototype={
d2:function(a){var t,s,r,q,p,o,n,m,l,k,j,i
for(t=this.e$.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.c2)(t),++r){q=t[r]
p=J.dr(q)
for(o=p.gbH().ga9(),o=o.gP(o);o.A();){n=o.gI()
m=J.e1(p.gbH().m(0,n),q.gbf())
l=this.f$
C.a.h(l.b,new Q.h(n,l.k(n,J.nP(m)),[H.J(l,0)]))}}this.f$.dT()
this.gbG()
for(t=this.gbG().a.ga9(),t=t.gP(t),s=this.r$,o=this.b$;t.A();){k=t.gI()
j=this.gbG().a.m(0,k)
l=this.f$
i=Q.my(l,J.ti(j),H.J(l,0))
s.i(0,k,i)
if(j.gft()!=null){l=this.c$
j.c.$5(this,i,o,l,a)}}this.f$.dT()
this.fM()},
hw:function(a,b){var t,s,r,q
t=P.a2(null,null,null,N.W)
s=b.w(a)
for(r=J.bx(a);r.A();){q=r.gI()
if(!J.ai(q,s))t.h(0,q)}this.f$.hA(0,t.gcG(t))},
fM:function(){var t,s
t=P.a2(null,null,null,N.W)
for(s=this.r$,s=s.gaw(s),s=s.gP(s);s.A();)t.T(0,s.gI())
this.f$.hD(0,t.gcG(t))},
al:function(a){return Q.Aq(this.r$.m(0,a.a).b,null,N.W)},
gb3:function(){return this.e$},
gbH:function(){return this.f$},
saP:function(a,b){return this.c$=b}}
D.h7.prototype={
at:function(a){this.a.i(0,a.a,a)}}
D.eY.prototype={
gM:function(a){return this.a},
gcU:function(a){return this.b},
gft:function(){return this.c}}
D.jK.prototype={}
D.jL.prototype={
$1:function(a){return H.pp(a,this.a)},
$S:function(){return{func:1,args:[N.W]}}}
O.cN.prototype={}
O.dD.prototype={
$ascN:function(a){return[a,P.da]}}
O.fq.prototype={
$ascN:function(a){return[a,P.C]}}
O.jO.prototype={
gY:function(){return this.rx},
gJ:function(){return this.x1},
gO:function(){return this.x2},
gH:function(){return this.B}}
V.jP.prototype={
$asdD:function(){return[R.eZ]},
$ascN:function(){return[R.eZ,P.da]}}
Z.fX.prototype={}
E.fk.prototype={
u:function(a){return this.b}}
E.ch.prototype={
u:function(a){return H.nK(H.nK(this.bS(0),P.p8("\\s",!0,!0),""),P.p8("'",!0,!0),"")},
c_:function(){return new E.eu(this,P.cz(D.be,P.R),H.a([],[A.cG]),[E.ch])},
aq:function(a){var t=E.og(this.d,this.c)
this.cH(t)
return t},
cH:function(a){a.sH(this)
a.ch=this.ch
a.cx=!1
a.sbv(this.gbv())
a.db=!1
a.fr=this.fr
a.fx=this.fx
a.fy=this.fy
a.go=!1
a.id=N.A0(this.id)
a.k1=this.k1
a.k2=this.k2
a.k3=this.k3
a.r1=this.r1
a.r2=this.r2
a.rx=this.rx
a.ry=this.ry},
hF:function(a){var t,s,r
t=this.c.v
s=$.bT
s=this.a$.ar(s)
r=$.bz
r=this.a$.ar(r)
return t.a.D()*(r-s)+s},
hE:function(){return this.hF(null)},
bS:function(a){this.c.ab.db
return this.d},
n:function(a,b){var t,s,r
this.a$=this.c_()
t=$.oh+1
$.oh=t
this.k4=t
this.a=$.pb
t=$.$get$ce()
s=P.a2(null,null,null,D.be)
r=new A.fJ(this,null,null,!1,!1,!1,s,0,0,!0,!1)
s.T(0,t)
r.e=!0
this.a$.fq(r,null,null)},
gaP:function(a){return this.c},
gM:function(a){return this.d},
gbv:function(){return this.cy},
saP:function(a,b){return this.c=b},
sbv:function(a){return this.cy=a}}
E.hS.prototype={$isfo:1}
E.I.prototype={
bZ:function(a){a.k2.push(new E.I(this.a,this.b,this.c))},
u:function(a){var t="["+H.t(this.a)+" x "+H.t(this.b)
return t+(this.c?" (from Aspect)":"")+"]"},
gbU:function(){return this.a}}
E.eM.prototype={
bZ:function(a){a.k2.push(new E.I(a.c.v.w(this.d),this.b,this.c))},
u:function(a){var t="[(Random from "+P.oP(this.d,"(",")")+") x "+H.t(this.b)
return t+(this.c?" (from Aspect)":"")+"]"},
gH:function(){return this.d}}
E.iC.prototype={
bZ:function(a){var t,s
t=a.k2
s=a.aA.a.gH()
C.a.T(t,new H.d0(s,new E.iD(this),[H.J(s,0),null]))
s=a.k2
t=a.aB.a.gH()
C.a.T(s,new H.d0(t,new E.iE(this),[H.J(t,0),null]))},
u:function(a){return"[Stats assigned from player Interests x"+H.t(this.b)+"]"}}
E.iD.prototype={
$1:function(a){var t=this.a
return new E.I(a.gbU(),a.b*t.b,t.c)},
$S:function(){return{func:1,args:[E.I]}}}
E.iE.prototype={
$1:function(a){var t=this.a
return new E.I(a.gbU(),a.b*t.b,t.c)},
$S:function(){return{func:1,args:[E.I]}}}
Y.jR.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("How to Teach Your Friends to Hack SBURB",H.a([$.aO,$.Q,$.K,$.a4,$.kc],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Unstable Domino",H.a([$.aP,$.Q,$.aN],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Exposed Thread",H.a([$.N,$.Q,$.aN],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Teetering Plate",H.a([$.kb,$.Q,$.aN],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,[N.W,P.R])
t.i(0,$.jI,$.l)
t.i(0,$.c3,$.j)
t.i(0,$.cK,$.B)
t.i(0,$.dh,$.j)
r=$.q
q="An excited "+r+" runs up to the "
p=$.k
q=q+p+" and starts to "
o=$.L
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.aX
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.aj
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.x
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.c]
t.i(0,new R.U("I'm So Meta, Even This Acronym",!1,[new U.c(q),new U.c(m),new U.c(n),new U.a9(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
o=$.k
t.i(0,new R.aa("Cooking with Petrol",!1,[new U.c("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.x+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.c("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.c("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.q+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.w(),!1,!1,new Y.dS("Rewards/no_reward.png",null),1,null,null),$.v)
o=$.q
j="Now that the "+o+"s are free from the reign of "+$.x+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.k
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.L
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.aX+" Quest Online: The "+$.aj+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.db
t.i(0,new R.aa("Stop the Meta",!1,[new U.c(j),new U.c(r),new U.c(o)],H.a([],i),R.w(),!1,!1,new Y.bt("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.v)
p="The "+$.x+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.k
p=p+o+" shows the "
r=$.q
t.i(0,new R.by("Allow Others to Meta a Universe",!1,[new U.c(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.c("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.c("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.L+"s in time to stop them.    ")],H.a([],i),R.bN(),!1,!1,new Y.bB("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ac)
i=$.bJ
this.c.i(0,new X.D(s,t,null),i)},
gJ:function(){return this.k1},
gO:function(){return this.k2},
gH:function(){return this.x1}}
Y.jS.prototype={
a8:function(){return!0},
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Sherpa Parka",H.a([$.bj,$.Q,$.c4],s),"Clearly the best class uses this.",!1,null)
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Guide Book",H.a([$.a4,$.bj,$.aO,$.K,$.Q,$.a_],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Whistle",H.a([$.A,$.Q,$.b5],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Announcement System",H.a([$.A,$.Q,$.ab,$.a_],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,[N.W,P.R])
t.i(0,$.jI,$.j)
t.i(0,$.c3,$.j)
t.i(0,$.cK,$.l)
t.i(0,$.dh,$.j)
r="Now that the "+$.x+" is out of the way, a group of "
q=$.q
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.k
o=[U.c]
t.i(0,new R.aa("Find the Home",!1,[new U.c(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.c("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.c("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.L+", but they are happy.")],H.a([],o),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
q="The "+$.x+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.k
t.i(0,new R.by("Find the Frogs",!1,[new U.c(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.c("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.c("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.q+" "+$.L+"s in time to stop them.    ")],H.a([],o),R.bN(),!1,!1,new Y.bB("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ac)
o=$.bJ
this.c.i(0,new X.D(s,t,null),o)},
gO:function(){return this.k1}}
T.jU.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Doll",H.a([$.kb,$.aI,$.aF,$.V],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Puppet",H.a([$.a0,$.aF,$.V,$.a4,$.b8],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Mirror",H.a([$.oy,$.V],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Shipping Grid",H.a([$.K,$.V,$.aJ],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Shades",H.a([$.ap,$.b7,$.V],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.C]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.W,P.R]
q=new H.o(0,null,null,null,null,null,0,r)
q.i(0,$.dH,$.B)
q.i(0,$.dw,$.j)
q.i(0,$.c8,$.l)
p=$.k
o="The "+p+", guided by a "+$.q+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.x
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.cc+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.c]
q.i(0,new R.U("Find Yourself",!1,[new U.c(o),new U.c(n),new U.c(m),new U.a9(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
j=$.k
p="The "+j+" finds a Violent "
l=$.q
p=p+l+". A Magical Talking "
k=$.aj
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.x
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.i(0,new R.U("Steal the Heart",!1,[new U.c(p),new U.c(m),new U.c(k),new U.a9(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.p5(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.j)
h=$.aK
this.c.i(0,new X.D(s,q,null),h)
h=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.o(0,null,null,null,null,null,0,r)
s.i(0,$.cw,$.j)
s.i(0,$.jA,$.j)
s.i(0,$.ei,$.l)
s.i(0,$.bW,$.j)
s.i(0,$.c9,$.l)
s.i(0,$.cK,$.B)
q=$.k
p="The "+q+" is just going through their land when they get ambushed by a  copy of themselves made of "
o=$.aj
p=p+o+"! The player barely gets away with their life! "
n="The "+q+" skirmishes with the "+o+" copy a few times. The "+o+" copy begins to berate the player about their moral failings and weaknesses."
m="The "+q+" realizes that the "+o+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
l=$.x
o=m+l+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+o+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+l+". "
m=l+" has been the cause of so much personal grief for the "+q+".  There can be no mercy. "
k="The "+l+" lies slain by the "+q+"'s "+$.cc+". The "+q+" is victorious. "
s.i(0,new R.U("Confront yourself.",!1,[new U.c(p),new U.c(n),new U.c(o),new U.a9(m,"The assholeness of "+l+" continues with the defeat of the "+q+".",k)],H.a([],i),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
k="Now that the "+$.x+" has been defeated, a Copy "
q=$.k
k=k+q+" has appeared. They claim they are the TRUE "+q+",and that the other is an imposter who just wants their fame! All of the "
l=$.q
k=k+l+"s "
m=$.L
k=k+m+" in confusion and don't seem to know what to do."
m="A wizened "+q+" creates a series of challenges that only the REAL "+q+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+m+" for more than five minutes straight. At the end of it, all the "+l+"s unanimously agree that the Fake "+q+" is the winner. THIS IS STUPID."
l="The REAL "+q+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+q+" as three "+l+"s in an overcoat using some weird Heart magic."
q="The "+$.ej+" knows who they are, and their confidence is turned into a pink lightning attack."
s.i(0,new R.aa("Prove Your Identity",!1,[new U.c(k),new U.c(m),new U.c(l)],H.a([],i),R.dz(),!1,!1,new Y.O("The Real Heart Player",q,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
q=$.k
l="The "+q+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
m="The next time the "+q+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
k="Another mirror, another punch. Except this time....the mirror is unaffected. The "+q+" in the reflection smirks back. In a rage the "+q+" assaults the mirror until their knuckles are bloody. Still the reflected "+q+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+q+" collapses in an exhausted heap and considers their words."
o="When the "+q+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+q+", even if that shouldn't be possible. 'Help me.', the "+q+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
n=$.x
o=o+n+"."
n="The "+q+" has accepted their fractured soul, and the destructiveness inherent in it. The "+n+" is dead."
s.i(0,new R.U("Shatter The Mirrors",!1,[new U.c(l),new U.c(m),new U.c(k),new U.a9(o,"The "+q+" destroyed themselves.",n)],H.a([],i),R.dQ(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.j)
n=$.aK
this.c.i(0,new X.D(h,s,null),n)
n=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,r)
t.i(0,$.h3,$.j)
t.i(0,$.c9,$.j)
t.i(0,$.jF,$.j)
t.i(0,$.e9,$.l)
t.i(0,$.eW,$.j)
t.i(0,$.ck,$.l)
t.i(0,$.dw,$.B)
s=$.k
r="The "+s+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
q=$.q
t.i(0,new R.U("Ship All the Ships",!1,[new U.c(r+q+"s have no idea what's coming. "),new U.c("The "+s+" extends their shipping grid to include the entire "+q+" population, and begins subtly pushing to make these ships a reality. Happy "+$.L+"s ring out through the air.  "),new U.c("The "+s+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.aX+" laws put in place by "+$.x+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
s=$.k
q="The "+s+" finds a weeping Broken Hearted "
r=$.q
q=q+r+". The most Fetching "+r+" of their dreams just turned them down to the "
p=$.aX
q=q+p+" Dance and they are miserable. On a whim, the "+s+" offers to take them instead. The "+r+" immediately brightens.  "
o="The Broken Hearted "+r+" and the "+s+" are shopping for matching outfits to wear to the "+p+" Dance. Oh look, there is the Fetching "+r+". The Broken Hearted "+r+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+s+" goes over to the Fetching "+r+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+r+" really is busy with their job as a "
m=$.L
t.i(0,new R.aa("Heal The Broken Heart",!1,[new U.c(q),new U.c(o+m+" salesman for the "+p+" dance, but the Broken Hearted "+r+" ran away crying before they could explain that they'd love to date them anyways! The "+s+" sees an opportunity to save the day."),new U.c("It is the day of the big "+p+" Dance. The "+s+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+r+" and the Mended Hearted "+r+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.hX(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
r=$.k
m="The "+r+"  and the "
s=$.dA
m=m+s+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
p="The "+r+"  and the "+s+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
o=$.x
p=p+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+r+" and "+s+" together."
t.i(0,new R.U("Flushed Shipping Dungeon",!1,[new U.c(m),new U.a9(p,"The "+r+" and "+s+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.t(C.n)+".",o)],H.a([],i),R.dR(),!1,!1,new Y.hc(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.ac)
o=$.k
s="The "+o+"  and the "
r=$.dA
s=s+r+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
p="The "+o+"  and the "+r+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.x
p=p+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+o+" and "+r+" together."
t.i(0,new R.U("Pitched Shipping Dungeon",!1,[new U.c(s),new U.a9(p,"The "+o+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.t(C.n)+".",m)],H.a([],i),R.dR(),!1,!1,new Y.hV(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.ac)
i=$.aL
this.c.i(0,new X.D(n,t,null),i)},
gY:function(){return this.rx},
gJ:function(){return this.x1},
gO:function(){return this.x2},
gaa:function(){return this.E},
gH:function(){return this.N}}
B.jV.prototype={
a8:function(){return!1},
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Family Ashes",H.a([$.aQ,$.aE,$.Q,$.aN,$.bL],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Last Will and Testament",H.a([$.a4,$.K,$.Q,$.aN,$.k8],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Grooming Guide",H.a([$.aO,$.Q,$.am],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Powered Attorney",H.a([$.qC,$.Q,$.oi,$.k8],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Executer's Ax",H.a([$.oj,$.Q,$.aG,$.k8],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,[N.W,P.R])
t.i(0,$.cf,$.l)
r=$.x
q="With the death of the "+r+", it now falls to the "
p=$.k
o=[U.c]
t.i(0,new R.aa("Inherit Responsibilities",!1,[new U.c(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.c("After organizing taxes, approving budgets and listening to "+$.q+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.c("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
r="The "+$.x+" has released the frogs into the "
p=$.k
t.i(0,new R.by("Inherit the Frogs",!1,[new U.c(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.q+"s 'help' by "+$.L+"ing up a storm. "),new U.c("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.c("The "+p+" has found the final frog.      ")],H.a([],o),R.bN(),!1,!1,new Y.bB("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ac)
o=$.bJ
this.c.i(0,new X.D(s,t,null),o)},
gay:function(){return this.k1},
gJ:function(){return this.k2},
gO:function(){return this.r1}}
X.jW.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Wand",H.a([$.a0,$.V,$.a8,$.bh],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Angel Feather",H.a([$.bh,$.bw,$.V,$.b4,$.ad,$.a4,$.a8],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Never Ending Story DVD",H.a([$.bH,$.ov,$.V,$.a8,$.b3,$.bh],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Candle",H.a([$.bh,$.b4,$.V,$.aE],s),null,!1,"Dying Light Stick")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Fairy Figurine",H.a([$.aP,$.b4,$.V,$.bh],s),null,!1,"Tiny Petrified Tinkerbell")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.C]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.W,P.R]
q=new H.o(0,null,null,null,null,null,0,r)
q.i(0,$.o3,$.j)
q.i(0,$.ck,$.l)
q.i(0,$.b6,$.j)
q.i(0,$.cv,$.j)
p=$.k
o="The "+p+" is just minding their own business when they see a wizened "
n=$.q
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.L+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.x
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.aj
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
n=[U.c]
q.i(0,new R.U("Learn to Believe",!1,[new U.c(o),new U.c(m),new U.c(l),new U.a9(k,"The "+p+" fails to believe hard enough. They are defeated.",j)],H.a([],n),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
j=$.aK
this.c.i(0,new X.D(s,q,null),j)
j=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.o(0,null,null,null,null,null,0,r)
s.i(0,$.c7,$.j)
s.i(0,$.h2,$.l)
s.i(0,$.dK,$.j)
q=$.k
p="The "+q+"  is approached by a Crafty "
o=$.q
p=p+o+" who offers them a magical "
m=$.aj
p=p+m+", guaranteed to grant them the power to believe things into existance once per year. The "+q+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
l="The "+q+" is contemplating the magical "+m+" they wasted their boonies on.  Why would the Crafty "+o+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+q+" spends time imagining what they would try to make if it were true."
k="The "+q+" finds a grey town of despondant "+o+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+q+" learns that "
i=$.x
k=k+i+" has been hoarding all the belief and steals it from the "+o+"s regularly. They have to be stopped!"
h="The "+q+" approaches "+i+", magical "+m+" in hand. The "+i+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+q+" feels frozen. They cannot take a single step towards "+i+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+m+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
o=i+"'s belief was no match for the power of the "+m+". They are dead, and hope will be free to flourish among the "+o+"s once again."
s.i(0,new R.U("Believe the Lies",!1,[new U.c(p),new U.c(l),new U.c(k),new U.a9(h,"The "+m+" could not stand up to "+i+" after all. The "+q+" has been defeated.",o)],H.a([],n),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
o=$.aK
this.c.i(0,new X.D(j,s,null),o)
o=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,r)
t.i(0,$.b6,$.j)
t.i(0,$.df,$.B)
t.i(0,$.cg,$.j)
t.i(0,$.cv,$.j)
s=$.k
r="The "+s+" finds a grey town of despondant "
q=$.q
r=r+q+"s. Their daily lives are without meaning, without joy, and will never change. "
p=$.x
r=r+p+" has stolen all possibilities, all hope away. There is only this.  The "+s+" vows to find a way to help. The "+q+"s fail to be inspired."
m="The "+s+" learns that part of the reason the "+q+"s are hopeless is that the local "
l=$.aj
t.i(0,new R.U("Be the Change You Believe In",!1,[new U.c(r),new U.c(m+l+" mine has dried up. Without "+l+" the "+q+" economy is completley flat. There are no jobs!  The "+s+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.c("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+p+". They simply refuse to allow hope to survive. The "+s+" is going to need to deal with them."),new U.a9("The "+q+"s deserve Hope, they deserve a better life. The "+s+" is going to show them. But before they can work on fixing their problems, "+p+" must be fought. The "+s+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],n),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
s=$.k
p="The "+s+" discovers a group of "
q=$.q
p=p+q+"s locked in a sadistic death game. When all seems lost, the "+s+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+q+"s) in the process."
l="The "+s+" finds ANOTHER group of "+q+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+s+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+q+" has been working for the "
r=$.x
t.i(0,new R.U("The Ultimate Hope",!1,[new U.c(p),new U.c(l),new U.c(m+r+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.a9("The "+q+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+s+" is going to stop the "+r+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],n),R.hX(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.j)
n=$.aK
this.c.i(0,new X.D(o,t,null),n)},
gY:function(){return this.rx},
gJ:function(){return this.x1},
gO:function(){return this.x2},
gaa:function(){return this.K},
gH:function(){return this.E}}
Q.jZ.prototype={
$asdD:function(){return[W.ek]},
$ascN:function(){return[W.ek,P.da]}}
Q.ln.prototype={}
Z.k_.prototype={}
B.k3.prototype={
$1:function(a){return!a.gbQ()},
$S:function(){return{func:1,args:[B.el]}}}
B.el.prototype={
G:function(){var t,s
t=Q.E(null,null,A.a7)
s=A.i("Perfectly Generic Object",H.a([],[G.Z]),null,!1,"The Third Entry for This Fucking Block")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),[H.J(t,0)]))
this.y=t},
gfK:function(){return P.bm(this.gan(),!0,P.C)},
F:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.W,P.R]
q=new H.o(0,null,null,null,null,null,0,r)
q.i(0,$.cL,$.j)
q.i(0,$.bf,$.B)
q.i(0,$.dj,$.j)
q.i(0,$.bW,$.l)
q.i(0,$.dv,$.B)
p=$.k
o="The "+p+" learns that all of the local "
n=$.q
m=[U.c]
q.i(0,new R.a1("Revive the Consorts",!1,[new U.c(o+n+"s are dead. This is....really depressing, actually. "),new U.c("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.L+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
n=$.aL
this.r.i(0,new X.D(s,q,null),n)
n=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.o(0,null,null,null,null,null,0,r)
s.i(0,$.ef,$.j)
s.i(0,$.dI,$.B)
s.i(0,$.ee,$.l)
s.i(0,$.cu,$.j)
s.i(0,$.cf,$.B)
q=$.k
p="The "+q+" learns that all of the local "
o=$.q
s.i(0,new R.a1("Produce the Goods",!1,[new U.c(p+o+"s have a severe shortage of gears and cogs. It is up to the "+q+" to get the assembly lines up and running again. "),new U.c("The "+q+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+q+" is training the local "+o+"s to operate the manufacturing equipment. There is "+$.L+"ing and chaos everywhere. "),new U.c("The "+q+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+o+"s name a national holiday after the "+q+". ")],H.a([],m),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
q=$.aL
this.r.i(0,new X.D(n,s,null),q)
q=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,r)
t.i(0,$.b6,$.j)
t.i(0,$.bf,$.B)
t.i(0,$.c3,$.l)
s=$.k
r="The "+s+" learns that all of the local "
p=$.q
t.i(0,new R.a1("Relax the Consorts",!1,[new U.c(r+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.c("The "+s+" fluffs more pillows than any other Player ever has before them. "),new U.c("The "+s+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p=$.k
s="The "+p+" learns that all of the local "
r=$.q
s=s+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+r+" "
n=$.L
t.i(0,new R.a1("Relax the Consorts According to Prophecy",!1,[new U.c(s),new U.c(o+n+"ing about? A prophecy?  "),new U.c("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+r+"s, who become so chill they do not even "+n+" once. ")],H.a([],m),R.p4(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
m=$.aL
this.r.i(0,new X.D(q,t,null),m)},
u:function(a){return this.ch},
gbQ:function(){return this.a},
gah:function(){return this.b},
gH:function(){return this.c},
gai:function(){return this.d},
gJ:function(){return this.e},
gb3:function(){return this.r},
gan:function(){return this.x},
gM:function(a){return this.ch}}
B.k2.prototype={
eP:function(a,b){var t=a.w(b.gfK())
this.a=b
this.b=t},
gM:function(a){return this.b}}
A.a7.prototype={
aG:function(a,b){var t=b.gaS()-this.gaS()
if(t>0)t=1
else if(t<0)t=-1
return C.d.ak(t)},
e0:function(a){var t,s,r,q
for(t=a.k2,s=t.length,r=0;r<t.length;t.length===s||(0,H.c2)(t),++r){q=t[r]
if(J.ai(q.gbU(),$.cQ))this.r=this.r+C.d.ak(q.b)}},
gfQ:function(){var t,s,r,q,p,o
t=H.a([],[P.C])
s=new A.d2(null,null)
s.dc(this.e.a)
if(this.f===0)return t
r=P.bm(G.q2(this.e),!0,G.Z)
C.a.er(r,new A.ki())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.c2)(r),++p){o=r[p]
if(!(o instanceof G.ag||o.gaW().length===0))t.push(" "+Y.AS(s.w(o.gaW())))}return t},
gaS:function(){var t,s,r
for(t=this.e,s=new P.d6(t,t.r,null,null,[null]),s.c=t.e,r=0;s.A();)r+=s.d.gaS()
return r},
gfH:function(){var t=this.e
return new H.bq(t,new A.kh(),[H.J(t,0)])},
gcW:function(){var t,s,r,q,p
for(t=this.gfQ(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.c2)(t),++q)r+=t[q]+" "
return r+this.c},
gdX:function(){return this.gcW()+" "+this.f+"/"+this.r},
u:function(a){return this.gcW()},
bD:function(){var t=A.i(this.c,P.bm(this.e,!0,G.Z),this.a,!0,this.b)
t.f=this.f
t.r=this.r
return t},
L:function(a,b,c,d,e){var t,s,r
t=P.f6(b,null)
this.e=t
if(t.a===0)t.h(0,$.qI)
s=P.f6(this.gfH(),null)
for(t=new P.d6(s,s.r,null,null,[null]),t.c=s.e;t.A();){r=t.d
this.e.T(0,r.gcn())
this.e.aj(0,r)}if(!this.d)$.$get$hv().push(this)},
$isbA:1,
$asbA:function(){return[A.a7]},
ghN:function(){return this.e}}
A.kj.prototype={
$1:function(a){return a.ghN().U(0,this.a)},
$S:function(){return{func:1,args:[A.a7]}}}
A.ki.prototype={
$2:function(a,b){return a.ge3()-C.b.ak(b.ge3())},
$S:function(){return{func:1,args:[G.Z,G.Z]}}}
A.kh.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.Z]}}}
A.i3.prototype={
gt:function(a){return this.a.length},
h:function(a,b){var t,s
t=$.$get$hv()
s=(t&&C.a).U(t,b)?b.bD():b
t=this.a;(t&&C.a).h(t,s)
s.e0(this.b)},
gR:function(a){var t=this.a
return(t&&C.a).gR(t)},
gP:function(a){var t=this.a
return new J.e2(t,t.length,0,null,[H.J(t,0)])}}
A.hP.prototype={
$asG:function(){return[A.a7]},
$isG:1}
T.f1.prototype={
ga6:function(a){var t,s
t=H.dy(this.a)
s=J.cT(this.b)
if(typeof s!=="number")return H.br(s)
return t+s},
S:function(a,b){var t,s
if(b==null)return!1
if(b instanceof T.f1){t=b.a
s=this.a
if(!(t===s&&J.ai(b.b,this.b)))t=t===this.b&&J.ai(b.b,s)
else t=!0}else t=!1
return t},
gR:function(a){return this.a}}
N.ko.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Gavel",H.a([$.a0,$.ou],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Caution Tape",H.a([$.aP,$.bc],s),null,!1,"Impassible Barrier")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Deerstalker Hat",H.a([$.N,$.aI],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Mystery Novel",H.a([$.K,$.aO],s),null,!1,"Book where the Criminal was the Janitor")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Dish Served Cold",H.a([$.bF,$.aD,$.bj],s),null,!1,"REVENGE")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Pony Pals: Detective Pony ",H.a([$.K,$.aO,$.ap],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Handcuffs",H.a([$.aQ,$.A,$.bc],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.W,P.R]
q=new H.o(0,null,null,null,null,null,0,r)
q.i(0,$.ed,$.B)
q.i(0,$.c7,$.l)
q.i(0,$.cg,$.B)
p=$.k
o="The "+p+" finds an elaborate courtroom full of "+$.L+"ing "
n=$.q
m=[U.c]
q.i(0,new R.a1("Shit, Lets Be Lawyers",!1,[new U.c(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.c("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.c(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.aj+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
n=$.aL
this.r.i(0,new X.D(s,q,null),n)
n=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.o(0,null,null,null,null,null,0,r)
s.i(0,$.c7,$.j)
s.i(0,$.cK,$.l)
s.i(0,$.cu,$.l)
q=$.k
p="A frantic underling run past the  "+q+". In hot pursuit, a "
o=$.q
s.i(0,new R.a1("Enforce the Law",!1,[new U.c(p+o+" yells 'Stop that thief' in betwen "+$.L+"s. Without thinking, the "+q+" grabs the underling. The "+o+" is impressed, and offers the "+q+" a job as a deputy police officer. "),new U.c("The "+q+" is doing their rounds as a deputy police officer. So far, everything is peaceful."),new U.c("A missing "+$.aj+". Three suspects. A locked door. The "+q+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. ")],H.a([],m),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
q=$.aL
this.r.i(0,new X.D(n,s,null),q)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,r)
t.i(0,$.c7,$.j)
t.i(0,$.cf,$.l)
t.i(0,$.cV,$.B)
t.i(0,$.dJ,$.l)
t.i(0,$.dH,$.l)
t.i(0,$.eg,$.l)
t.i(0,$.jB,$.l)
s=$.k
r="The "+s+" finds a crowd of "
p=$.L
r=r+p+"ing "
o=$.q
r=r+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+s+" is moved by their plight and agrees to try to help."
s="The "+s+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+s+". After easily defeating the guards, the "+s+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won!"
o=this.y
t.i(0,new R.a1("Start a Revolution",!1,[new U.c(r),new U.c(s),new U.c(p)],H.a([],m),R.w(),!1,!1,new Y.bt("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.v)
o=$.aL
this.r.i(0,new X.D(q,t,null),o)},
gH:function(){return this.cx},
gah:function(){return this.cy},
gai:function(){return this.db},
gJ:function(){return this.dx},
gan:function(){return this.dy}}
S.kq.prototype={
a8:function(){return!0},
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Shining Armor",H.a([$.aQ,$.ka,$.Q,$.en],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Excalibur",H.a([$.a4,$.ka,$.Q,$.aY,$.aG,$.eo],s),"Knight Shit",!1,"Masamune")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Noble Steed",H.a([$.A,$.Q,$.bg,$.aF],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Hero's Shield",H.a([$.aQ,$.en,$.Q,$.ka],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,[N.W,P.R])
t.i(0,$.jE,$.j)
t.i(0,$.dg,$.j)
t.i(0,$.dk,$.j)
t.i(0,$.eg,$.j)
t.i(0,$.ed,$.l)
r="The "+$.x+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.k
p=[U.c]
t.i(0,new R.by("Breed the Frogs",!1,[new U.c(r+q+" collects all sorts of frogs. Various "+$.q+"s 'help' by "+$.L+"ing up a storm. "),new U.c("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.c("The "+q+" has found the final frog.      ")],H.a([],p),R.bN(),!1,!1,new Y.bB("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ac)
q=$.x
r="Now that the "+q+" is defeated, the "
o=$.q
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.k
t.i(0,new R.aa("Exploit the Heat",!1,[new U.c(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.c("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.c("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.bN(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
o=$.aX
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.x
n=n+q+". A Learned "+$.q+" explains that it can only be defeated by the Legendary "
r=$.aj
n=n+r+" Blade. The "
m=$.k
t.i(0,new R.aa("Fight the Beast",!1,[new U.c(n+m+" prepares to go questing for it. "),new U.c("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.c("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
r="The volcanos of the land are weirdly active after the defeat of the "+$.x+". Onehas begins to erupt near a "
m=$.q
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.L+"s, but not really doing anything to evacuate or save anyone. The "
o=$.k
t.i(0,new R.aa("Protect the Consorts",!1,[new U.c(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.c("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.c("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p=$.bJ
this.c.i(0,new X.D(s,t,null),p)},
gay:function(){return this.k1},
gJ:function(){return this.k2},
gO:function(){return this.r1}}
M.f4.prototype={
aq:function(a){var t,s
t=N.W
s=new M.f4(!1,null,null,null,null,null,null,null,null,!1,!1,!1,null,null,null,null,null,!1,null,null,$.$get$h8(),null,null,null,Q.E(null,null,X.D),Q.E(null,null,t),P.cz(P.C,[Q.bD,N.W]))
s.a=this.a
s.c$=this.c$
s.f$=Q.dq(this.f$,!1,!0,null,t)
s.da()
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
hp:function(a){var t,s,r,q,p,o,n,m
t=Q.E(null,null,X.D)
for(s=a.ga9(),s=s.gP(s),r=[H.J(t,0)];s.A();){q=s.gI()
p=a.m(0,q)
C.a.h(t.b,new Q.h(q,t.k(q,J.nP(p)),r))}o=this.c$.v.w(t)
this.db=o
t.aj(t,o)
n=this.c$.v.w(t)
s=this.c$
if(n!=null){this.dy="Land of "+H.t(s.v.w(o.gcd()))+" and "+H.t(this.c$.v.w(n.gcd()))
this.dx=n}else{this.dy="Land of "+H.t(s.v.w(o.gcd()))+" and "+H.t(this.c$.v.w(o.a))
this.dx=o}if(this.c$.v.a.D()>0.99){this.a=!0
m=H.a([Y.d5("Google"),Y.d5("Horrorterrors"),Y.d5("Glitches"),Y.d5("Grimoires"),Y.d5("Fluthlu"),Y.d5("The Zoologically Dubious")],[P.C])
s=this.c$.b
s.toString
F.oV(C.h).$1(s.ct(C.h,"Corrupt land."))
s=this.c$.v
s.b=J.cD(s.b,1)
s=s.a.e2()
r=this.c$
if(s)this.dy="Land of "+H.t(r.v.w(m))+" and "+H.t(this.c$.v.w(this.dx.a))
else this.dy="Land of "+H.t(r.v.w(this.db.gcd()))+" and "+H.t(this.c$.v.w(m))}},
da:function(){this.b=this.al($.$get$h_())
this.c=this.al($.$get$h0())
this.d=this.al($.$get$fZ())
var t=this.al($.$get$nZ())
t=Q.eC(t,new M.ks(),H.aM(t,"c1",0),null)
this.f=Q.dq(t,!1,!0,null,H.aM(t,"c1",0))
t=this.al($.$get$nW())
t=Q.eC(t,new M.kt(),H.aM(t,"c1",0),null)
this.r=Q.dq(t,!1,!0,null,H.aM(t,"c1",0))
t=this.al($.$get$nY())
t=Q.eC(t,new M.ku(),H.aM(t,"c1",0),null)
this.x=Q.dq(t,!1,!0,null,H.aM(t,"c1",0))
t=this.al($.$get$o_())
t=Q.eC(t,new M.kv(),H.aM(t,"c1",0),null)
this.y=Q.dq(t,!1,!0,null,H.aM(t,"c1",0))},
d1:function(){this.fx=H.pD(this.c$.v.w(this.r$.m(0,"consort")),"$isbs")},
hu:function(a,b){var t,s,r,q,p
t=this.r$
s=t.m(0,$.$get$nV().a)
if(s==null)return
if(s.gP(s).A())this.fy=H.pD(this.c$.v.w(t.m(0,"denizen")),"$ise7")
t=this.fy
r=this.c$
if(t==null){t=r.v
r=a.gay()
q=b.gay()
p=t.a.D()*(r+q)
if(p>0.95){t=this.c$.b
r="strong denizen for "+b.u(0)+" of "+a.u(0)
t.toString
F.oV(C.h).$1(t.ct(C.h,r))
this.fy=new Q.j6("Denizen "+H.t(this.c$.v.w($.$get$q4())),null,null,null)}else{t=this.c$
if(p<0.05){t=t.b
r="weak denizen for "+b.u(0)+" of "+a.u(0)
t.toString
F.oV(C.h).$1(t.ct(C.h,r))
this.fy=new Q.jT("Denizen "+H.t(this.c$.v.w($.$get$q5())),null,null,null)}else this.fy=new Q.e7("Denizen "+H.t(t.v.w(a.gaa())),null,null,null)}}else t.c="Denizen "+H.t(r.v.w(a.gaa()))},
eQ:function(a,b,c,d){this.c$=b
this.hp(a)
this.e$=Q.pf(a,!0,null,X.D)
this.d2(b.v)
this.da()
this.hu(c,d)
this.d1()},
gM:function(a){return this.dy},
gbG:function(){return this.go}}
M.hO.prototype={
gb3:function(){return this.e$},
gbH:function(){return this.f$},
saP:function(a,b){return this.c$=b}}
M.ks.prototype={
$1:function(a){return J.io(a)},
$S:function(){return{func:1,args:[R.a1]}}}
M.kt.prototype={
$1:function(a){return J.io(a)},
$S:function(){return{func:1,args:[R.U]}}}
M.ku.prototype={
$1:function(a){return J.io(a)},
$S:function(){return{func:1,args:[R.aa]}}}
M.kv.prototype={
$1:function(a){return J.io(a)},
$S:function(){return{func:1,args:[R.ev]}}}
Q.kw.prototype={
gY:function(){return this.rx}}
K.ky.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Creeping Vine",H.a([$.a0,$.V,$.b1,$.aF],s),null,!1,"Sentient Plant Tentacles")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Lollipop",H.a([$.om,$.V,$.b_],s),null,!1,"Sentient Plant Tentacles")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Golem",H.a([$.aQ,$.aH,$.V,$.aF],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Ectoplasm",H.a([$.bL,$.V,$.b_],s),null,!1,"Ghost [Censored]")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Aqua Vitae",H.a([$.b7,$.V,$.b_,$.a4,$.a8],s),null,!1,"Tears of JR")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Homunculus",H.a([$.bg,$.V,$.aF],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.W,P.R]
q=new H.o(0,null,null,null,null,null,0,r)
q.i(0,$.c3,$.j)
q.i(0,$.bf,$.j)
q.i(0,$.h4,$.B)
q.i(0,$.b6,$.l)
q.i(0,$.jI,$.l)
q.i(0,$.cM,$.B)
p=$.k
o="The "+p+" finds a village of compliant "
n=$.q
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.L+"ing in panic. Don't upset "
m=$.x
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.c]
q.i(0,new R.U("Restore the Forest",!1,[new U.c(o),new U.c(l),new U.a9(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
n=$.aK
this.c.i(0,new X.D(s,q,null),n)
n=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.o(0,null,null,null,null,null,0,r)
s.i(0,$.c3,$.j)
s.i(0,$.c9,$.j)
s.i(0,$.cM,$.B)
s.i(0,$.b6,$.l)
q=$.k
o="The "+q+" finds a lush garden, dutifully tended to by "
m=$.q
o=o+m+"s. Unfortunately, the food is left to rot in piles, as Underling brigands block the road and prevent the produce from being distributed. The "+q+" agrees to help."
l="The "+q+" sneaks along the main road and finds the Underling Brigands lying in wait. They are dispatched in short order, and the "+q+" heroically informs the "+m+"s that they can once again begin shipping their food."
m="The "+q+" follows the road to find a new village, fileld with hungry "+m+"s. Apparently the food has been stolen by a "
k=$.x
m=m+k+" minion! Enraged, the "+q+" tracks down the minion and defeats it. They now know this will not be the end of it. They need to nip this in the bud. "
j="The "+q+" approaches the "+k+". It ends here."
q="The "+q+" was strong enough to win! The consorts will never have to worry about their food being destroyed senselessly again."
s.i(0,new R.U("Distribute the Food",!1,[new U.c(o),new U.c(l),new U.c(m),new U.a9(j,"The tyranny of "+k+" continues.",q)],H.a([],p),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
q=$.aK
this.c.i(0,new X.D(n,s,null),q)
q=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,r)
t.i(0,$.cL,$.j)
t.i(0,$.bf,$.B)
t.i(0,$.dj,$.j)
t.i(0,$.bW,$.l)
t.i(0,$.dv,$.l)
t.i(0,$.h1,$.l)
s="Drawn by wailing and "+$.L+"ing, the "
r=$.k
s=s+r+" enters a rotting "
o=$.q
s=s+o+" village. They are in the throes of a famine they explain. Locusts damage their fields and blight destroys the weakened remainder. They cannot feed everyone once winter comes if this continues.   The "+r+" vows to help."
n="The "+r+" strifes countless swarms of locusts, but there seems to be no end to them. They finally track down a hive, guarded by several "
m=$.x
n=n+m+" minions. It is as easy as thinking to destroy everything, but the "+r+" is left uneasy. Why were the minions causing this on purpose?  "
l="Although the locusts have thinned in numbers, the blight is as strong as ever. Even the most potent of alchemized fungicides seem to only keep back the blight for a day. At their wits end, the "+r+" stays in the fields overnight to discover that "+m+" minions are spreading a strange powder on the fields. Defeating them is a start, but clearly "+m+" is dedicated to causing famine. They must be dealt with. "
m="The "+r+" faces the "+m+". It will end here."
k="The "+r+" is strong enough to impose their will on the world. Famine will not trouble the "+o+"s any longer."
t.i(0,new R.U("Protect the Farms",!1,[new U.c(s),new U.c(n),new U.c(l),new U.a9(m,"The "+r+" was not strong enough. Can anything save the "+o+"s before winter? ",k)],H.a([],p),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
p=$.aK
this.c.i(0,new X.D(q,t,null),p)},
gY:function(){return this.rx},
gJ:function(){return this.x1},
gO:function(){return this.x2},
gaa:function(){return this.K},
gH:function(){return this.E}}
X.cO.prototype={}
G.kz.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("FAQ",H.a([$.ab,$.V,$.a_,$.bM],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Flashlight",H.a([$.aP,$.V,$.b4,$.ab,$.bM],s),null,!1,"Tube of Localised Sun")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Octet",H.a([$.V,$.b4,$.bM,$.a4,$.oo],s),null,!1,"D13")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Horseshoe",H.a([$.qL,$.V,$.ah],s),null,!1,"Horse Sneaker")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Rabbits Foot",H.a([$.qW,$.V],s),null,!1,"Rabbit Remains")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("4 Leaf Clover",H.a([$.b1,$.V,$.b4,$.bM],s),null,!1,"Plant of Luck +4")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("8-Ball",H.a([$.b7,$.V,$.aF],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.W,P.R]
q=new H.o(0,null,null,null,null,null,0,r)
q.i(0,$.jD,$.j)
q.i(0,$.eb,$.l)
q.i(0,$.de,$.j)
q.i(0,$.dw,$.j)
p=$.k
o="The "+p+" is searching for the lair of "
n=$.x
o=o+n+" when some local "
m=$.q
o=o+m+"s run past them carrying what appears to be primitive filming equipment and fancy props. After walking a little while longer the "+p+" comes across a huge building in the distance. On the front displays a sign that seems to advertise some sort of game show."
l="The "+p+" reaches the building and enters to find that it is in fact the filming location of a Game Show run by the local "+m+"s. What catches the "+p+"\u2019s eye, however, is that apparently the Grand Prize for winning the show is an exclusive meeting with none other than "+n+"! This could be the "+p+"\u2019s big chance! With determination in their eye, they eagerly sign up for the next scheduled airing of the show."
k="Tonight\u2019s episode of the game show has gotten underway, and so far it looks like the "+p+" is doing pretty well. The show cuts to a commercial break, and the "+p+" take the time to reflect on the current situation. With their superior intellect they easily win the first round, a test of intelligence, by a mile compared to their fellow "+m+" contestants. The "+p+" struggles with the second round, a test of athleticism through an obstacle course, however, and one of their opponents gains a point, tying up the game. If the "+p+" fails to win the next round, it could potentially jeopardize their chance to fight "+n+". This next round will be one the "+p+" cannot afford to lose."
j="Through sheer luck the "+p+" manages to spin a lucky number on the final round, which is merely a spin on the wheel with the number it rests on determining your reward. Your  "+m+" opponents shake your hand as they admit defeat, as "+n+" emerges from the shadows, ready to fight you at last."
m=n+" lies slain. The "+m+" host congratulates you on your victory and presents you your second prize, a brand new car! Unfortunately it is subsequently stolen by your opponents, who drive off, never to be seen again."
i=[U.c]
q.i(0,new R.U("Be the Contestant",!1,[new U.c(o),new U.c(l),new U.c(k),new U.a9(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
m=$.k
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.L+"ing "+$.q+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.x
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.i(0,new R.U("Go Big or Go Home",!1,[new U.c(n),new U.c(p),new U.c(j),new U.a9(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
m=$.aK
this.c.i(0,new X.D(s,q,null),m)
m=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.o(0,null,null,null,null,null,0,r)
s.i(0,$.c3,$.l)
s.i(0,$.b6,$.l)
s.i(0,$.df,$.j)
s.i(0,$.jC,$.j)
s.i(0,$.dI,$.j)
s.i(0,$.h2,$.j)
q=$.k
p="The "+q+" walks into a "
o=$.q
p=p+o+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
n=$.aj
p=p+n+", but "
l=$.x
p=p+l+" has hoarded all of the planets "
k=$.aX
n=p+k+" Candles, and everyone knows you cant have a good "+n+" ceremony without candles! The "+q+" vows to take back some "+k+" Candles for the poor "+o+"s. "
p="After a long search, the "+q+" has found the warehouse where "+l+" has stored all the candles. "+k+" Candles must be very valuable to "+l+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+q+" wants to sneak in without alerting a horde of "+l+" minions."
j="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+q+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+l+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+q+" to slip inside with ease. Captchaloging as much "+k+" Candles as they can, the "+q+" triumphantly returns to the village among the joyful "+$.L+"ing of the "+o+"s."
l="The "+q+" is ready to challenge the "+l+" to keep them from restealing the "+k+" candles. "
o="Never again shall the "+o+"s be without "+k+" Candles!"
s.i(0,new R.U("The Candlestick Taker",!1,[new U.c(n),new U.c(p),new U.c(j),new U.a9(l,"The "+k+" candles are once again at risk.",o)],H.a([],i),R.p5(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.j)
o=$.k
k="The "+o+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
l=$.q
k=k+l+" explains that the "
j=$.x
s.i(0,new R.U("Shine the Light",!1,[new U.c(k+j+" has forbidden the "+l+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+o+" vows to help.   "),new U.c("The "+o+" has finally managed to destroy the disk blocking light from the "+l+" village. There is a chorus of happy "+$.L+"s as they bask in the light. The "+o+" feels good about a job well done. "),new U.c("Disaster!  The "+l+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+j+" is guarding the disk themself.  The "+o+" must prepare themself for a tough fight.  "),new U.a9("The "+o+" has managed to reach the disk guarded by the "+j+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+j+" is defeated, the disk destroyed. Finally, the "+l+"s can enjoy the light in peace.")],H.a([],i),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
l=$.aK
this.c.i(0,new X.D(m,s,null),l)
l=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
s=new H.o(0,null,null,null,null,null,0,r)
s.i(0,$.eU,$.l)
s.i(0,$.bf,$.l)
s.i(0,$.eh,$.j)
s.i(0,$.b6,$.l)
s.i(0,$.cg,$.j)
q="Now that the "+$.x+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
p=$.k
q=q+p+" sets up a wiki and settles in to help the "
o=$.q
q=q+o+"s deal with it all."
o="Within barely any time at all, the "+o+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+p+" makes sure all of the information is from credible sources."
p="When the "+p+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
n="The "+$.ej+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
s.i(0,new R.aa("Moderate the Wiki",!1,[new U.c(q),new U.c(o),new U.c(p)],H.a([],i),R.dz(),!1,!1,new Y.O("Information Network",n,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
n="Now that the "+$.x+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
p=$.k
n=n+p+" shrugs and sets up a wiki and lets the "
o=$.q
n=n+o+"s deal with it all."
o="Within barely any time at all, unmoderated "+o+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+p+" alone, and each claims they are a different SPECIES entirely. The "+p+" finds this to be hilarious."
p="Luckily it turns out all that disinformation running around about the "+p+" thwarts some would be assasins. It turns out the "+p+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
q="The "+$.ej+" allows you to make you own assumptions about things, and be destroyed by them."
s.i(0,new R.aa("Create the Wiki",!1,[new U.c(n),new U.c(o),new U.c(p)],H.a([],i),R.dQ(),!1,!1,new Y.O("Disinformation Network",q,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
q=$.q
p=q+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
o=$.k
p=p+o+" possibly stop it?"
q="The "+o+" pours over maps and charts. What do the sick "+q+"s have in common with each other?  Finally, there is a flash of inspiration. "+q+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+o+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
n="The "+o+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+o+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
m="The "+o+" traces the contaminated river back to it's source. The "
k=$.x
s.i(0,new R.U("Shed the Light",!1,[new U.c(p),new U.c(q),new U.c(n),new U.a9(m+k+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+o+" is victorious. The "+k+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
k=$.aK
this.c.i(0,new X.D(l,s,null),k)
k=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,r)
t.i(0,$.de,$.j)
t.i(0,$.jD,$.j)
t.i(0,$.dw,$.l)
t.i(0,$.ck,$.l)
t.i(0,$.jy,$.l)
t.i(0,$.bW,$.B)
t.i(0,$.dk,$.B)
t.i(0,$.c8,$.l)
t.i(0,$.cw,$.B)
t.i(0,$.bf,$.l)
t.i(0,$.co,$.j)
s=$.k
r="The "+s+" is approached by a Fast Talking "
q=$.q
r=r+q+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
p=$.aj
r=r+p+". The "+s+" agrees to perform the titular role."
o="The opening night performance of the Beautiful "+p+" is a huge success! The "+$.L+"ing of the fans is it's own reward!"
p="When it comes time for the next performance of the Beautiful "+p+", the "+s+" is turned away at the door. Apparently the "
n=$.x
q=p+n+" rampaged and terrorized "+q+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
n="There is not enough room on the stage for both of them. The "+s+" challenges the "+n+" to a glamour off, and wins handily. Enraged, the "+n+" attacks."
p="The "+s+" can finally get back to their promising acting career in peace."
t.i(0,new R.U("Be the Star",!1,[new U.c(r),new U.c(o),new U.c(q),new U.a9(n,"The actig career of the "+s+" is in shambles.",p)],H.a([],i),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
p="After the "+$.x+", the "
s=$.k
p=p+s+" is disappointed to learn that barely any of the "
n=$.q
p=p+n+"s know who they are. This will not do!"
n="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+n+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
q="The "+$.ej+" is famous, and everyone in this fight is lucky to have met them."
t.i(0,new R.aa("Be the Biggest Star in Paradox Space",!1,[new U.c(p),new U.c(n),new U.c(s)],H.a([],i),R.dz(),!1,!1,new Y.O("What's my name?",q,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
q=$.aK
this.c.i(0,new X.D(k,t,null),q)},
gY:function(){return this.rx},
gJ:function(){return this.x1},
gO:function(){return this.x2},
gaa:function(){return this.B},
gH:function(){return this.E}}
Z.kG.prototype={
a8:function(){return!0},
G:function(){var t,s,r,q
t=this.y2
s=[G.Z]
r=A.i("Dream Bubbles Book",H.a([$.K,$.am,$.aO,$.qE],s),null,!1,null)
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),[H.J(t,0)]))
t=Q.E(null,null,A.a7)
r=A.i("Uno Reverse Card",H.a([$.on,$.oC,$.am],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Lord's Cape",H.a([$.N,$.Q,$.am],s),"Lord Shit",!1,"Shoguns Cape")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Drawing Tablet",H.a([$.kc,$.Q,$.am],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("How to Make Friends And Influence People",H.a([$.a4,$.K,$.Q,$.bv,$.aO],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.W,P.R]
q=new H.o(0,null,null,null,null,null,0,r)
q.i(0,$.cV,$.B)
q.i(0,$.dJ,$.B)
q.i(0,$.bW,$.B)
q.i(0,$.cu,$.l)
p="The "+$.x+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.k
p=p+o+" comands that the "
n=$.q
m=[U.c]
q.i(0,new R.by("Command Minions to Breed Frogs",!1,[new U.c(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.L+"s. "),new U.c("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.c("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bN(),!1,!1,new Y.bB("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ac)
o="As soon as the "+$.x+" is defeated, the "
n=$.q
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.k
q.i(0,new R.aa("Conquer Everything",!1,[new U.c(o+p+" is up to the task.  "),new U.c("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.c("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p=$.bJ
this.c.i(0,new X.D(s,q,null),p)
p=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,r)
t.i(0,$.qi,$.j)
t.i(0,$.cv,$.j)
t.i(0,$.bf,$.j)
t.i(0,$.b6,$.l)
s="The "+$.x+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.k
s=s+r+" comands that the "
q=$.q
t.i(0,new R.by("Command Minions to Breed Frogs",!1,[new U.c(s+q+"s collect the frogs in the name of Lord Dutton. The "+q+"s agree with confused, yet enthusiastic "+$.L+"s. "),new U.c("The "+q+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.c("A "+q+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bN(),!1,!1,new Y.bB("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ac)
r="As soon as the "+$.x+" is defeated, the "
q=$.q
r=r+q+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.k
t.i(0,new R.aa("Praise Dutton",!1,[new U.c(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.c("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+q+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.c("The final "+q+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.w(),!1,!1,new Y.bt("Rewards/sweetTreasure.png",this.y2,"Rewards/no_reward.png",null),1,null,null),$.v)
m=$.bJ
this.c.i(0,new X.D(p,t,null),m)},
gay:function(){return this.k1},
gJ:function(){return this.k2},
gO:function(){return this.r1},
gH:function(){return this.q}}
S.kH.prototype={
a8:function(){return!0},
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Alternate Costume",H.a([$.N,$.Q,$.a8,$.a4,$.an],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Mage's Cape",H.a([$.N,$.Q,$.a8],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Mage's Staff",H.a([$.a0,$.Q,$.ah,$.a8,$.d_],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Walking Broom",H.a([$.hr,$.a0,$.Q,$.aF,$.a8,$.d_],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o,n
t=[P.C]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,[N.W,P.R])
t.i(0,$.ea,$.j)
t.i(0,$.eg,$.l)
t.i(0,$.cf,$.j)
t.i(0,$.ee,$.l)
t.i(0,$.cL,$.B)
r="The "+$.x+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.k
p=[U.c]
t.i(0,new R.by("Understand the Frogs",!1,[new U.c(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bN(),!1,!1,new Y.bB("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ac)
q=$.k
t.i(0,new R.aa("Work With Exiles",!1,[new U.c("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.c("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.c("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.w(),!1,!1,new Y.cF("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
q=$.k
r="The "+q+" is feeling quite pleased with their victory over the "+$.x+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.aX
t.i(0,new R.aa("Suffer Visions",!1,[new U.c(r+o+". Oh god, why is this happening?"),new U.c("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.c("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
q="Now that the "+$.x+" has been defeated, the "
o=$.q
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.k
q=q+r+"'s help in planning the brand new city of "
n=$.aX
t.i(0,new R.aa("Become the Mayor",!1,[new U.c(q+n+"burg."),new U.c("A panicking "+o+" runs up to the "+r+", "+$.L+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.c("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p=$.bJ
this.c.i(0,new X.D(s,t,null),p)},
gJ:function(){return this.k1},
gO:function(){return this.k4},
gH:function(){return this.y1}}
U.kI.prototype={
a8:function(){return!0},
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Maiden's Breath",H.a([$.b1,$.Q,$.aI],s),null,!1,null)
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Feather Duster",H.a([$.a0,$.Q,$.d_,$.bw],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Valkyrie Shield",H.a([$.aI,$.aQ,$.A,$.Q,$.a4,$.en,$.qx],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Maiden's Songbook",H.a([$.K,$.Q,$.ad,$.aO],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o,n
t=[P.C]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,[N.W,P.R])
t.i(0,$.dh,$.j)
t.i(0,$.c3,$.j)
t.i(0,$.b6,$.l)
t.i(0,$.bf,$.l)
t.i(0,$.df,$.l)
t.i(0,$.cw,$.l)
r="The "+$.x+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.k
r=r+q+" asks local  "
p=$.q
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.L
n=[U.c]
t.i(0,new R.by("Serve the  Frogs",!1,[new U.c(r+o+"s.  It's a lively neighborhood event."),new U.c("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bN(),!1,!1,new Y.bB("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ac)
q=$.k
o="The "+q+" has adopted a local "
p=$.q
t.i(0,new R.aa("Serve the PTA",!1,[new U.c(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.c("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.L+"ing about. "),new U.c("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.x+". ")],H.a([],n),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
n=$.bJ
this.c.i(0,new X.D(s,t,null),n)},
gJ:function(){return this.k1},
gO:function(){return this.k4}}
L.kS.prototype={
gY:function(){return this.rx},
gJ:function(){return this.x1},
gO:function(){return this.x2},
gaa:function(){return this.B},
gH:function(){return this.N}}
V.kT.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Puzzle Box",H.a([$.a0,$.V,$.a8],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Tesla Coil",H.a([$.ab,$.V,$.A],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Coin",H.a([$.A,$.V],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Electronic Door",H.a([$.A,$.V,$.ab,$.a_],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Janus Bust",H.a([$.aQ,$.hs,$.aH,$.am,$.V,$.a4,$.ab],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.W,P.R]
q=new H.o(0,null,null,null,null,null,0,r)
q.i(0,$.cv,$.l)
q.i(0,$.eb,$.B)
q.i(0,$.cg,$.B)
p=$.k
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.q
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.x
k=[U.c]
q.i(0,new R.U("Change the View",!1,[new U.c(o),new U.c(m),new U.c(l),new U.a9(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.ew(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.j)
n=$.k
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+n+" explains that at the end of the Labrinth is the "
l=$.x
q.i(0,new R.U("Pick a Door, any Door",!1,[new U.c(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.c("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.c("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.a9("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
n=$.aK
this.c.i(0,new X.D(s,q,null),n)
n=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.o(0,null,null,null,null,null,0,r)
s.i(0,$.ed,$.B)
s.i(0,$.c7,$.l)
s.i(0,$.cg,$.B)
s.i(0,$.cv,$.B)
q=$.x
p="The "+q+" has commited a staggering amount of crimes against the local "+$.q+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
o=$.k
s.i(0,new R.U("Face the Music",!1,[new U.c(p+o+" knows that Justice is on their side."),new U.c("The "+q+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+o+" convinces a group of underlings lead by a "+q+" minion that the "+q+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.c("Huh.  I WONDER what the consequences are of the "+q+" being stuck hiding in their shitty snake lair while the "+o+" is running a propoganda campaign against them?  Suddenly the "+q+" has run out of allies entirely."),new U.a9("Karma is a bitch. The "+q+" has nowhere to run when the "+o+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
o=$.aK
this.c.i(0,new X.D(n,s,null),o)
o=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,r)
t.i(0,$.h6,$.j)
t.i(0,$.bf,$.l)
t.i(0,$.eh,$.j)
t.i(0,$.b6,$.l)
t.i(0,$.cg,$.j)
s=$.k
r="The "+s+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+s+" thinks, then makes the logical selection.  The Dungeon accepts it."
q="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+s+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
p="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+s+" thinks they understand. Their choice is accepted."
n=$.x
n="It's the final door before facing the "+n+". All four puzzles blocks are simply identical images of "+$.aj+". The "+s+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+n+"."
m="Finally. The "+s+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.i(0,new R.U("Make the Connections",!1,[new U.c(r),new U.c(q),new U.c(p),new U.a9(n,"Looks like the "+s+" will have to resolve some of those bullshit puzzles.",m)],H.a([],k),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
k=$.aK
this.c.i(0,new X.D(o,t,null),k)},
gY:function(){return this.rx},
gJ:function(){return this.x1},
gO:function(){return this.x2},
gaa:function(){return this.B},
gH:function(){return this.E}}
S.kU.prototype={
gY:function(){return this.rx},
gJ:function(){return this.x1},
gO:function(){return this.x2},
gaa:function(){return this.y2},
gH:function(){return this.C}}
R.hH.prototype={
eS:function(a,b,c,d,e,f){var t
this.dy=a
this.c$=c
this.e$=Q.pf(b,!0,null,X.D)
this.d2(c.v)
this.b=this.al($.$get$h_())
this.c=this.al($.$get$h0())
this.d=this.al($.$get$fZ())
t=this.al($.$get$nX())
this.id=Q.dq(t,!1,!0,null,H.aM(t,"c1",0))
this.d1()},
$iscW:1,
gbG:function(){return this.k1}}
E.kV.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Feather Pen",H.a([$.A,$.Q,$.am,$.bw],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Half Finished Bust of Snoop Dog",H.a([$.qU,$.Q,$.hs,$.ah,$.a4],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Book of Poetry",H.a([$.K,$.Q,$.am,$.aO],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
a8:function(){return!1},
F:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,[N.W,P.R])
t.i(0,$.dh,$.j)
t.i(0,$.c3,$.j)
t.i(0,$.b6,$.l)
t.i(0,$.bf,$.l)
t.i(0,$.df,$.l)
t.i(0,$.cw,$.l)
r="The "+$.x+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.k
r=r+q+" asks the "
p=$.q
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.L
n=[U.c]
t.i(0,new R.by("Inspire Frog Breeding",!1,[new U.c(r+o+"s. "),new U.c("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bN(),!1,!1,new Y.bB("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
q="You'd think after the dramatic defeat of the "+$.x+" the "
o=$.q
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.k
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.aj
t.i(0,new R.aa("Inspire the People",!1,[new U.c(q),new U.c(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.c("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
n=$.bJ
this.c.i(0,new X.D(s,t,null),n)},
gJ:function(){return this.k1},
gO:function(){return this.k4},
gH:function(){return this.y1}}
F.kW.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Piano",H.a([$.ah,$.a0,$.ad,$.am],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Flute",H.a([$.A,$.ad],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Microphone",H.a([$.b5,$.ab],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Violin",H.a([$.a0,$.ad],s),null,!1,"Tiny Cello")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Sheet Music",H.a([$.K,$.ad],s),null,!1,"Cheat Codes for Instruments")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Electric Guitar",H.a([$.aP,$.ad,$.ab,$.b5,$.ap],s),null,!1,"Electrical Stringed Music Maker")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Turn Tables",H.a([$.aP,$.ad,$.ab,$.ap],s),null,!1,"Spinning Disc Sound Maker")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Guitar",H.a([$.a0,$.ad],s),null,!1,"String Music Maker")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.W,P.R]
q=new H.o(0,null,null,null,null,null,0,r)
q.i(0,$.ck,$.ac)
q.i(0,$.jy,$.j)
q.i(0,$.dw,$.j)
q.i(0,$.df,$.l)
q.i(0,$.b6,$.l)
q.i(0,$.jw,$.l)
p=$.k
o="The "+p+" meets a wise old "+$.q+" who tells that the "+$.x+" can only be awoken by the Legendary Hero playing the "
n=$.aX
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.aj
k=[U.c]
q.i(0,new R.a1("Play the Music",!1,[new U.c(o),new U.c(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.c(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p=$.aL
this.r.i(0,new X.D(s,q,null),p)
p=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.o(0,null,null,null,null,null,0,r)
s.i(0,$.ob,$.ac)
s.i(0,$.cK,$.l)
s.i(0,$.cu,$.l)
s.i(0,$.df,$.j)
s.i(0,$.jw,$.ac)
q=$.k
o="The "+q+" learns of a lost song, said to contain the power of "
n=$.aX
o=o+n+". Any who can sing it are destined to be strong enough to face the "
m=$.x
s.i(0,new R.a1("Sing the Song",!1,[new U.c(o+m+". "),new U.c("The "+q+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+n+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.c("A "+$.aj+"! That's the key! The "+q+" equips it and instantly finds themselves able to sing the "+n+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+m+".")],H.a([],k),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
m=$.aL
this.r.i(0,new X.D(p,s,null),m)
m=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,r)
t.i(0,$.h4,$.ac)
t.i(0,$.c8,$.l)
t.i(0,$.dj,$.l)
s=$.k
r="The "+s+" is suddenly challenged to a rap off by a particularly Fresh "
q=$.q
r=r+q+". It's a close one, but the "+s+" emerges victorious. It helps that the Fresh "+q+" kept rhyming "
p=$.L
p=r+p+" with "+p+"."
r="The "+s+" has apparently gotten a reputation as a rap master. A series of "+q+"s challenge them to rap offs and get utterly destroyed by the "+s+"'s fresh flows. "
s="The final challenger, a Sick-Nasty "+q+" approaches the "+s+". And aura of "+$.aX+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+q+" falters, and misses a beat. The "+s+" wins! They are the best rapper in all of Paradox Space! "
q=this.y
t.i(0,new R.a1("And It Don't Stop",!1,[new U.c(p),new U.c(r),new U.c(s)],H.a([],k),R.w(),!1,!1,new Y.bt("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.v)
q=$.aL
this.r.i(0,new X.D(m,t,null),q)},
gH:function(){return this.cx},
gah:function(){return this.cy},
gai:function(){return this.db},
gJ:function(){return this.dx},
gan:function(){return this.dy}}
Y.kY.prototype={
ez:function(){var t,s,r,q,p
t=this.a
if(t.ab.eA(t))return
this.e=E.og("!!!RING!!! OMG YOU SHOULD NEVER SEE THIS!",this.a)
s=Z.aA("Red Miles",3,null,"")
s.r.push(new Z.X($.r,2,!0,0,1,2,3,""))
s.e=" You cannot escape them. "
this.e.fy.push(s)
t=this.a
r=new F.dt(null,C.c,t,"Black Queen","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],[X.cO]),!1,H.a([],[Z.cx]),!1,H.a([],[N.cq]),0,H.a([],[E.I]),null,null,!1,H.a([],[Q.ci]),"",null,null)
r.n("Black Queen",t)
this.c=r
t=$.ok
q=$.qV
p=new U.af(t,null,null,"Blade",!1,P.a2(null,null,null,G.Z),0,3)
p.L("Blade",[q],null,!1,null)
p.e.h(0,t)
r.a=p
p=this.c
p.ry=this.e
p.a$.p(P.z([$.ak,500,$.bo,-100,$.r,50],D.be,P.c6))
p=this.c
r=$.b0
t=$.ak
t=p.a$.ar(t)
p.a$.ap(r,t)},
ex:function(){var t,s,r,q,p
t=this.a
if(t.ab.ey(t))return
this.f=E.og("!!!SCEPTER!!! OMG YOU SHOULD NEVER SEE THIS!",this.a)
s=Z.aA("Reckoning Meteors",3,null,"")
s.r.push(new Z.X($.r,2,!0,0,1,2,3,""))
s.e=" The very meteors from the Reckoning rain down. "
this.f.fy.push(s)
t=this.a
r=new F.dt(null,C.c,t,"Black King","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],[X.cO]),!1,H.a([],[Z.cx]),!1,H.a([],[N.cq]),0,H.a([],[E.I]),null,null,!1,H.a([],[Q.ci]),"",null,null)
r.n("Black King",t)
this.b=r
r=this.c
t=$.d_
q=$.qQ
p=new U.af(t,null,null,"Scepter",!1,P.a2(null,null,null,G.Z),0,3)
p.L("Scepter",[q],null,!1,null)
p.e.h(0,t)
r.a=p
p=this.b
p.ry=this.f
p.cy=1000
p.a$.p(P.z([$.ak,1000,$.bo,-100,$.r,100],D.be,P.c6))
p=this.b
r=$.b0
t=$.ak
t=p.a$.ar(t)
p.a$.ap(r,t)},
ev:function(){var t,s,r,q,p
t=this.a
if(t.ab.ew(t))return
t=this.a
s=new F.dt(null,C.c,t,"Jack","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],[X.cO]),!1,H.a([],[Z.cx]),!1,H.a([],[N.cq]),0,H.a([],[E.I]),null,null,!1,H.a([],[Q.ci]),"",null,null)
s.n("Jack",t)
this.d=s
t=$.ow
r=$.qO
q=new U.af(t,null,null,"Knife",!1,P.a2(null,null,null,G.Z),0,3)
q.L("Knife",[r],null,!1,null)
q.e.h(0,t)
s.a=q
this.d.a$.p(P.z([$.bT,-500,$.bz,10,$.aV,-100,$.ak,20,$.bo,-100,$.r,30],D.be,P.c6))
p=Z.aA("Stab To Meet You",1,null,"")
p.r.push(new Z.X($.r,3,!0,0,1,2,3,""))
p.e=" It's pretty much how he says 'Hello'. "
q=this.d
s=$.b0
t=$.ak
t=q.a$.ar(t)
q.a$.ap(s,t)
this.d.fy.push(p)},
es:function(){var t,s,r
t=this.a
if(t.ab.eu(t))return
t=this.a
s=new F.dt(null,C.c,t,"Democratic Army","provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],[X.cO]),!1,H.a([],[Z.cx]),!1,H.a([],[N.cq]),0,H.a([],[E.I]),null,null,!1,H.a([],[Q.ci]),"",null,null)
s.n("Democratic Army",t)
this.r=s
r=Z.aA("Democracy Charge",2,null,"")
r.r.push(new Z.X($.r,3,!0,0,1,2,3,""))
r.e=" The people have chosen to Rise Up against their oppressors. "
this.r.fy.push(r)},
saP:function(a,b){return this.a=b}}
F.kX.prototype={}
F.dt.prototype={
c_:function(){return new E.iR(this,P.cz(D.be,P.R),H.a([],[A.cG]))}}
F.i0.prototype={
aq:function(a){var t,s,r
t=this.d
s=this.c
r=new F.i0(null,C.c,s,t,"provides the requisite amount of gigglesnort hideytalk to be juuuust barely helpful. ",0,!1,!1,!1,!1,!1,"#000000",!1,100,!1,null,!1,H.a([],[X.cO]),!1,H.a([],[Z.cx]),!1,H.a([],[N.cq]),0,H.a([],[E.I]),null,null,!1,H.a([],[Q.ci]),"",null,null)
r.n(t,s)
this.cH(r)
return r}}
F.y.prototype={}
V.lg.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Shorts",H.a([$.N,$.Q,$.em,$.a4],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Sidekick Figurine",H.a([$.aP,$.Q,$.ap],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Steroids",H.a([$.aD,$.Q,$.a8],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,[N.W,P.R])
t.i(0,$.jE,$.j)
t.i(0,$.cM,$.l)
t.i(0,$.eX,$.l)
t.i(0,$.jF,$.l)
t.i(0,$.dh,$.l)
t.i(0,$.bf,$.l)
t.i(0,$.dv,$.l)
t.i(0,$.dI,$.l)
t.i(0,$.jG,$.l)
t.i(0,$.h1,$.l)
t.i(0,$.jC,$.l)
r="The "+$.x+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.k
r=r+q+" asks the "
p=$.q
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.L
n=[U.c]
t.i(0,new R.by("Help Breed the Frogs",!1,[new U.c(r+o+"s. "),new U.c("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bN(),!1,!1,new Y.bB("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ac)
q=$.k
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.q+" named Professor "
p=$.L
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.aj
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.x
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.i(0,new R.U("Become The Best",!1,[new U.c(o),new U.c(p),new U.c(l),new U.a9(k,"The "+q+" whited out...",m)],H.a([],n),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
m="Now that the "+$.x+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.k
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.q
t.i(0,new R.aa("Explore the Tombs",!1,[new U.c(m),new U.c(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.c("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.aX+" buffs. With a deafening "+$.L+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
n=$.bJ
this.c.i(0,new X.D(s,t,null),n)},
gay:function(){return this.k1},
gJ:function(){return this.k2},
gO:function(){return this.r1}}
G.lo.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Superhero Action Figure",H.a([$.aP,$.ap,$.b2],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Action DVD",H.a([$.aP,$.ap],s),null,!1,"Shogun The Movie")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Ghost Busters DVD",H.a([$.aP,$.bL],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Snow Dogs DVD",H.a([$.aP,$.b3,$.bj,$.c4],s),null,!1,"Snow Buddies Anthology")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Skateboarding Video Game",H.a([$.aP,$.ap],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Movie Poster",H.a([$.K,$.ap],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Audrey II Plush",H.a([$.b1,$.ap,$.N,$.aF],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Peashooter Toy",H.a([$.b1,$.aW,$.ap,$.N],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Shitty Sword",H.a([$.b2,$.A,$.ap,$.eo,$.aG,$.bH],s),"So. Shitty.",!1,"Perfect Weapon")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("GameBro Magazine",H.a([$.K,$.ap],s),"5/5 hats.",!1,"Nerd Magazine")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("GameGrl Magazine",H.a([$.K,$.ap],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.W,P.R]
q=new H.o(0,null,null,null,null,null,0,r)
q.i(0,$.cw,$.l)
q.i(0,$.co,$.l)
q.i(0,$.c8,$.j)
q.i(0,$.cM,$.ac)
q.i(0,$.dK,$.ac)
p=$.k
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.q
m=[U.c]
q.i(0,new R.a1("Become the Star",!1,[new U.c(o+n+" manages to catch a video of it, and it goes viral on "+$.aX+"tube. This is humiliating."),new U.c("Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.L+"s added in."),new U.c(" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something.")],H.a([],m),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
n=$.aL
this.r.i(0,new X.D(s,q,null),n)
n=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.o(0,null,null,null,null,null,0,r)
s.i(0,$.dH,$.l)
s.i(0,$.cK,$.l)
s.i(0,$.co,$.l)
s.i(0,$.c8,$.l)
s.i(0,$.dg,$.j)
q=$.k
p="The "+q+" runs towards an explosion in a local "
o=$.q
p=p+o+" village. As they rush to help the injured, a Mysterious "+o+" in a mask and cape flees the scene. Who was that? "
l="The Mysterious "+o+" turns out to be Professor "
k=$.aX
s.i(0,new R.a1("Stop the Villain",!1,[new U.c(p),new U.c(l+k+", a notorious consort Villain. They spread chaos and disaster with their "+k+" ray. The "+q+" vows to stop them. "),new U.c(" The "+q+" has a dramatic showdown witih Professor "+k+", that results in the Villain being knocked unconscious, and taken away by the "+o+" authorities. ")],H.a([],m),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
o=$.aL
this.r.i(0,new X.D(n,s,null),o)
o=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,r)
t.i(0,$.co,$.l)
t.i(0,$.de,$.j)
t.i(0,$.c9,$.j)
t.i(0,$.dg,$.l)
s=$.k
r="The "+s+" gets a job at the "+$.aX+" Cinema. A new movie, The Lonely "
q=$.aj
r=r+q+" is coming out soon, and "
p=$.q
r=r+p+"s are already lining up. It's going to be busy as fuck. "
n="Oh shit, the "+s+" learns that The Lonely "+q+" never was delivered. The "+p+"s already lined up are close to rioting. The sound of "+$.L+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+s+" prepares to venture inside.    "
s=" The "+s+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+q+". The "+p+"s lined up cheer and enter the theater. The Lonely "+q+" has finally begun to play. The "+s+" watches, rapt. Such a fantastic movie. The "+s+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
q=this.y
t.i(0,new R.a1("Premiere the Movie",!1,[new U.c(r),new U.c(n),new U.c(s)],H.a([],m),R.w(),!1,!1,new Y.bt("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.v)
q=$.aL
this.r.i(0,new X.D(o,t,null),q)},
gH:function(){return this.cx},
gah:function(){return this.cy},
gai:function(){return this.db},
gJ:function(){return this.dx},
gan:function(){return this.dy}}
N.lq.prototype={
a8:function(){return!0},
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Feather'd Cap",H.a([$.N,$.Q,$.em],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Crown",H.a([$.a4,$.os,$.Q,$.em],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Gunpowder",H.a([$.bl,$.Q],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o,n
t=[P.C]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,[N.W,P.R])
t.i(0,$.co,$.l)
t.i(0,$.cv,$.l)
t.i(0,$.dj,$.B)
r="With the closing of the curtain, the "+$.x+" has released the frogs, and yet they are nowhere to be found. The "
q=$.k
p=[U.c]
t.i(0,new R.by("Destroy the Lack of Frogs",!1,[new U.c(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.c("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.c("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.bN(),!1,!1,new Y.bB("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ac)
q=$.x
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.k
r=r+o+" to get it back to normal. They organize a team of "
n=$.q
t.i(0,new R.aa("Fix All The Things",!1,[new U.c(r+n+"s to start rebuilding infrastructure."),new U.c("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.aj+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.c("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p=$.bJ
this.c.i(0,new X.D(s,t,null),p)},
gay:function(){return this.k1},
gJ:function(){return this.k2},
gO:function(){return this.r1}}
U.c.prototype={}
U.a9.prototype={}
R.ev.prototype={
u:function(a){return H.t(new H.d4(H.fE(this),null))+": "+this.c},
aq:function(a){var t=U.c
return new R.ev(this.c,this.d,P.bm(this.e,!0,t),H.a([],[t]),this.r,!1,!1,this.z,1,null,null)},
gM:function(a){return this.c}}
R.a1.prototype={
aq:function(a){var t=U.c
return new R.a1(this.c,!1,P.bm(this.e,!0,t),H.a([],[t]),this.r,!1,!1,this.z,1,null,null)}}
R.U.prototype={
aq:function(a){var t=U.c
return new R.U(this.c,!1,P.bm(this.e,!0,t),H.a([],[t]),this.r,!1,!1,this.z,1,null,null)}}
R.aa.prototype={
aq:function(a){var t=U.c
return new R.aa(this.c,!1,P.bm(this.e,!0,t),H.a([],[t]),this.r,!1,!1,this.z,1,null,null)}}
R.by.prototype={
aq:function(a){var t=U.c
return new R.by(this.c,!1,P.bm(this.e,!0,t),H.a([],[t]),this.r,!1,!1,this.z,1,null,null)}}
R.d1.prototype={
aq:function(a){var t=U.c
return new R.d1(this.c,this.d,P.bm(this.e,!0,t),H.a([],[t]),this.r,!1,!1,this.z,1,null,null)}}
R.ez.prototype={
aq:function(a){var t=U.c
return new R.ez(this.c,this.d,P.bm(this.e,!0,t),H.a([],[t]),this.r,!1,!1,this.z,1,null,null)}}
E.lt.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Curtain",H.a([$.N,$.V,$.b2],s),null,!1,"Show Ender")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Cursed Sword",H.a([$.A,$.eo,$.aY,$.V,$.aG,$.b8,$.b2,$.bk,$.aN],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Megaphone",H.a([$.A,$.b5,$.ab,$.V,$.b2],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Bike Horn",H.a([$.aQ,$.A,$.b5,$.bv,$.bY,$.V,$.b2],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Bacchus Wine",H.a([$.aD,$.bv,$.am,$.V,$.a4,$.b2],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Nightmare Fuel",H.a([$.a0,$.V,$.b8,$.aE,$.bl,$.b2],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.W,P.R]
q=new H.o(0,null,null,null,null,null,0,r)
q.i(0,$.qg,$.j)
q.i(0,$.cV,$.j)
q.i(0,$.cK,$.j)
q.i(0,$.cL,$.l)
q.i(0,$.bW,$.l)
q.i(0,$.cf,$.l)
q.i(0,$.c7,$.B)
q.i(0,$.dK,$.l)
q.i(0,$.dH,$.j)
q.i(0,$.jB,$.j)
q.i(0,$.eg,$.j)
q.i(0,$.o9,$.j)
q.i(0,$.h4,$.l)
q.i(0,$.dJ,$.j)
p=$.k
o="The "+p+" is chilling in a "
n=$.q
o=o+n+" village when a bunch of sentient "
m=$.aj
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.x
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.c]
q.i(0,new R.U("Stop the War",!1,[new U.c(o),new U.c(k),new U.c(j),new U.a9(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hX(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
h=$.q
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.k
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.x
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.U("Stop the Civil War",!1,[new U.c(l),new U.c(m),new U.c(i),new U.a9(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
h=$.aK
this.c.i(0,new X.D(s,q,null),h)
h=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.o(0,null,null,null,null,null,0,r)
s.i(0,$.df,$.j)
s.i(0,$.bW,$.l)
s.i(0,$.c7,$.j)
s.i(0,$.ck,$.j)
s.i(0,$.cw,$.j)
s.i(0,$.co,$.l)
s.i(0,$.jA,$.B)
s.i(0,$.cV,$.l)
s.i(0,$.cM,$.j)
s.i(0,$.c8,$.j)
s.i(0,$.dK,$.B)
q=$.L
p="The "+q+"ing and capering "
o=$.q
p=p+o+"s are...OKAY, you guess? They keep asking the "
n=$.k
p=p+n+" to do a stupid "
m=$.aX
p=p+m+" Dance, though. They politely decline."
l="A capering "+o+" tells the "+n+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+m+" Dance off. The "+n+" politiely declines and defeats them in a good old fashioned beat down. The "+o+"s seem less than enthused about getting their stolen property back. Something about the "+n+" being a spoilsport?"
q="A crying "+o+" child asks why the "+n+" is such a meany head. Why won't they dance? Defeated, the "+n+" hangs their head, and then begins doing an extremely stupid "+m+" Dance, well below their dignity. The "+o+" child is estatic and begins "+q+" in time to the music that only the "+n+" can hear. "
k=$.x
j="The "+k+" approaches the "+n+", complimenting them on their stupid "+m+" Dance. Mortified, the "+n+" initiates strife."
o="It is done. Now NO ONE but that "+o+" child knows of the blow to the "+n+"'s dignity. No one at all."
s.i(0,new R.U("Do a Stupid Dance",!1,[new U.c(p),new U.c(l),new U.c(q),new U.a9(j,"You just KNOW that that shitty "+k+" is gonna somehow post videos of the "+n+"'s stupid "+m+" dance online. They must be stopped.",o)],H.a([],g),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
o=$.aK
this.c.i(0,new X.D(h,s,null),o)
o=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,r)
t.i(0,$.qg,$.j)
t.i(0,$.dK,$.j)
t.i(0,$.c7,$.j)
t.i(0,$.cM,$.l)
t.i(0,$.cw,$.j)
s=$.k
r="The "+s+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
q="The "+s+" feels like someone is laughing at them. Not like....a "+$.q+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+s+" is so fucking pissed."
p="The "+s+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+s+". 'You win, teleport to fight "+$.x+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+s+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+s+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+s+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.U("Hate This Bullshit Land",!1,[new U.c(r),new U.c(q),new U.c(p),new U.a9(n,"God FUCKING DAMN IT. After all that the "+s+" LOSES!? ",m)],H.a([],g),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
g=$.aK
this.c.i(0,new X.D(o,t,null),g)},
gY:function(){return this.rx},
gJ:function(){return this.x1},
gO:function(){return this.x2},
gaa:function(){return this.B},
gH:function(){return this.E}}
L.lu.prototype={
gY:function(){return this.rx},
gJ:function(){return this.x1},
gO:function(){return this.x2},
gaa:function(){return this.B},
gH:function(){return this.E}}
Y.dS.prototype={}
Y.cF.prototype={}
Y.O.prototype={
gM:function(a){return this.c}}
Y.a3.prototype={}
Y.iJ.prototype={}
Y.bt.prototype={}
Y.iT.prototype={}
Y.bB.prototype={}
Y.hU.prototype={}
Y.hc.prototype={}
Y.hV.prototype={}
Y.dG.prototype={}
Z.lA.prototype={
gY:function(){return this.rx},
gJ:function(){return this.x1},
gO:function(){return this.x2}}
N.lB.prototype={
a8:function(){return!0},
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Domino Mask",H.a([$.N,$.Q,$.em],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Archery Set",H.a([$.ol,$.Q,$.em,$.qy],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Gristtorrent Server",H.a([$.a4,$.aP,$.ab,$.Q,$.a_,$.an],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o,n
t=[P.C]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,[N.W,P.R])
t.i(0,$.c7,$.j)
t.i(0,$.cf,$.l)
t.i(0,$.dg,$.l)
r="The "+$.x+" cannot release the frogs since the corrupt Noble "
q=$.q
r=r+q+"s have hoarded them. The "
p=$.k
o=[U.c]
t.i(0,new R.by("Steal the Frogs",!1,[new U.c(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.c("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.c("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bN(),!1,!1,new Y.bB("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ac)
p=$.k
q="The "+p+" learns of the extreme injustices of the "
r=$.q
q=q+r+"s who rose to power during the tyranny of "
n=$.x
t.i(0,new R.aa("Lead a Rebellion",!1,[new U.c(q+n+". This cannot stand!"),new U.c("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.c("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
o=$.bJ
this.c.i(0,new X.D(s,t,null),o)},
gJ:function(){return this.k1},
gO:function(){return this.k4}}
Q.lC.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Red Rose",H.a([$.aJ,$.aI],s),null,!1,"Seductive Plant")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Shipping Grid",H.a([$.aJ,$.K],s),"Don't let ABJ see this.",!1,"Grid of Sin")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Chocolate Bar",H.a([$.aJ,$.aD],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Candelabra",H.a([$.aJ,$.aE],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Head Cannon",H.a([$.aJ,$.bl,$.A,$.aW],s),"Fuck you for that pun, JR.",!1,null)
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Her Pitch Passions Novel",H.a([$.aO,$.K,$.aJ],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.W,P.R]
q=new H.o(0,null,null,null,null,null,0,r)
q.i(0,$.c9,$.j)
q.i(0,$.eX,$.l)
q.i(0,$.e9,$.l)
q.i(0,$.eW,$.j)
q.i(0,$.ck,$.l)
q.i(0,$.h3,$.B)
p=$.k
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.q
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.aj+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.c]
q.i(0,new R.a1("Set the Mood",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.w(),!1,!1,new Y.bt("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.v)
p=$.aL
this.r.i(0,new X.D(s,q,null),p)
p=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.o(0,null,null,null,null,null,0,r)
s.i(0,$.ck,$.l)
s.i(0,$.de,$.j)
s.i(0,$.eW,$.j)
s.i(0,$.c9,$.l)
s.i(0,$.dw,$.B)
s.i(0,$.h3,$.B)
q=$.q
o="A Romantic "+q+" approaches the "
n=$.k
s.i(0,new R.a1("Plan the Date",!1,[new U.c(o+n+". They have a date coming up but have no idea what to do. Can the "+n+" help? "),new U.c("The "+n+" has the best montage of their life, helping the Romantic "+q+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.c(" The "+n+" hides in bushes to spy on the Romantic "+q+"'s date. It's going so well! ")],H.a([],l),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
q=$.aL
this.r.i(0,new X.D(p,s,null),q)
q=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,r)
t.i(0,$.h3,$.j)
t.i(0,$.c9,$.j)
t.i(0,$.e9,$.l)
t.i(0,$.jF,$.j)
t.i(0,$.eW,$.j)
t.i(0,$.ck,$.l)
t.i(0,$.dw,$.B)
s=$.k
r="The "+s+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.q
t.i(0,new R.a1("Ship All the Ships",!1,[new U.c(r+p+"s have no idea what's coming. "),new U.c("The "+s+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.L+"s ring out through the air.  "),new U.c("The "+s+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.x+"'s stupid rules. ")],H.a([],l),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
s=$.k
p="The "+s+"  and the "
r=$.dA
t.i(0,new R.a1("Flushed Shipping Dungeon",!1,[new U.c(p+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+s+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.dR(),!1,!1,new Y.hc(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.ac)
r=$.k
s="The "+r+"  and the "
p=$.dA
t.i(0,new R.a1("Pale Shipping Dungeon",!1,[new U.c(s+p+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+r+"  and the "+p+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.dR(),!1,!1,new Y.hU(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ac)
p=$.k
r="The "+p+"  and the "
s=$.dA
t.i(0,new R.a1("Pitched Shipping Dungeon",!1,[new U.c(r+s+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+p+"  and the "+s+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.dR(),!1,!1,new Y.hV(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.ac)
l=$.aL
this.r.i(0,new X.D(q,t,null),l)},
gH:function(){return this.cx},
gah:function(){return this.cy},
gai:function(){return this.db},
gJ:function(){return this.dx},
gan:function(){return this.dy}}
T.lF.prototype={
$1:function(a){return a.gbP()},
$S:function(){return{func:1,args:[T.d3]}}}
T.lG.prototype={
$1:function(a){return!a.gbP()},
$S:function(){return{func:1,args:[T.d3]}}}
T.lE.prototype={
$1:function(a){return!a.gbQ()},
$S:function(){return{func:1,args:[T.d3]}}}
T.d3.prototype={
G:function(){var t,s
t=Q.E(null,null,A.a7)
s=A.i("Perfectly Generic Object",H.a([],[G.Z]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),[H.J(t,0)]))
this.db=t},
a8:function(){return!1},
cX:function(a){var t,s,r
for(t=this.gH(),s=t.length,r=0;r<t.length;t.length===s||(0,H.c2)(t),++r)t[r].bZ(a)},
F:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.W,P.R]
q=new H.o(0,null,null,null,null,null,0,r)
q.i(0,$.cL,$.j)
q.i(0,$.bf,$.B)
q.i(0,$.dj,$.j)
q.i(0,$.bW,$.l)
q.i(0,$.dv,$.B)
p=$.k
o="The "+p+" learns that all of the local "
n=$.q
m=[U.c]
q.i(0,new R.aa("Revive the Consorts",!1,[new U.c(o+n+"s are dead. This is....really depressing, actually. "),new U.c("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.L+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
n=$.bJ
this.c.i(0,new X.D(s,q,null),n)
n=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.o(0,null,null,null,null,null,0,r)
s.i(0,$.ef,$.j)
s.i(0,$.dI,$.B)
s.i(0,$.ee,$.l)
s.i(0,$.cu,$.j)
s.i(0,$.cf,$.B)
q=$.k
p="The "+q+" learns that all of the local "
o=$.q
s.i(0,new R.aa("Produce the Goods",!1,[new U.c(p+o+"s have a severe shortage of gears and cogs. It is up to the "+q+" to get the assembly lines up and running again. "),new U.c("The "+q+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+q+" is training the local "+o+"s to operate the manufacturing equipment. There is "+$.L+"ing and chaos everywhere. "),new U.c("The "+q+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+o+"s name a national holiday after the "+q+". ")],H.a([],m),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
q=$.k
o="The "+q+" learns that all of the local "
p=$.q
s.i(0,new R.aa("Do the Teamwork",!1,[new U.c(o+p+"s have a severe shortage of gears and cogs. It is up to the "+q+" to get the assembly lines up and running again. "),new U.c("The "+q+" notices that all of the "+p+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.c("The "+q+" grabs the "+$.dA+" and demonstrates some simple teamwork techniques. The "+p+"s begin "+$.L+"ing in amazement. The factory is saved! ")],H.a([],m),R.dR(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ac)
p=$.bJ
this.c.i(0,new X.D(n,s,null),p)
p=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,r)
t.i(0,$.b6,$.j)
t.i(0,$.bf,$.B)
t.i(0,$.c3,$.l)
s=$.k
r="The "+s+" learns that all of the local "
q=$.q
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+s+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
n=$.L
t.i(0,new R.a1("Relax the Consorts According to Prophecy",!1,[new U.c(r),new U.c(o+n+"ing about? A prophecy?  "),new U.c("The "+s+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+n+" once. ")],H.a([],m),R.p4(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
n=$.k
q="The "+n+" learns that all of the local "
s=$.q
t.i(0,new R.aa("Relax the Consorts",!1,[new U.c(q+s+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.c("The "+n+" fluffs more pillows than any other Player ever has before them. "),new U.c("The "+n+" teaches the local "+s+"s to find their chill. ")],H.a([],m),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
m=$.bJ
this.c.i(0,new X.D(p,t,null),m)},
u:function(a){return this.b},
a2:function(a,b,c,d){var t=this.b
this.d=t
this.e=new X.fY("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.fL]),H.a([],[M.eT]))
this.G()
this.F()
if($.$get$ey().af(this.f))H.ba("Duplicate class id for "+this.u(0)+": "+this.f+" is already registered for "+J.cm($.$get$ey().m(0,this.f))+".")
$.$get$ey().i(0,this.f,this)},
gay:function(){return this.a},
gM:function(a){return this.b},
gb3:function(){return this.c},
gci:function(){return this.d},
gbP:function(){return this.r},
gbQ:function(){return this.x},
gJ:function(){return this.dx},
gO:function(){return this.fx},
gH:function(){return this.fy},
gcm:function(){return this.go},
sM:function(a,b){return this.b=b}}
E.lH.prototype={
a8:function(){return!0},
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Sage's Robe",H.a([$.N,$.Q,$.bb,$.a_,$.a8,$.a4],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Peer Reviewed Journal",H.a([$.K,$.Q,$.aO,$.a_],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Guru Pillow",H.a([$.N,$.Q,$.hu,$.a_],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,[N.W,P.R])
t.i(0,$.eU,$.l)
t.i(0,$.bf,$.l)
t.i(0,$.eh,$.j)
t.i(0,$.b6,$.B)
t.i(0,$.cg,$.j)
r="The "+$.x+" has blocked access to the books for the duration. The "
q=$.k
p=[U.c]
t.i(0,new R.by("Understand the Frogs",!1,[new U.c(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.q+"s to start collecting frogs. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bN(),!1,!1,new Y.bB("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ac)
q="Now that the "+$.x+" is defeated, it is time to begin recovery efforts. The "
r=$.q
q=q+r+"s ask the "
o=$.k
t.i(0,new R.aa("Be the Sage",!1,[new U.c(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.L+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.c("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.c("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p=$.bJ
this.c.i(0,new X.D(s,t,null),p)},
gJ:function(){return this.k1},
gO:function(){return this.k4},
gH:function(){return this.y1}}
Y.lI.prototype={
gY:function(){return this.rx},
gJ:function(){return this.x1},
gO:function(){return this.x2},
gH:function(){return this.q}}
Y.lJ.prototype={}
Y.lK.prototype={
a8:function(){return!1},
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Walking Stick",H.a([$.a0,$.Q,$.d_],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Adorable Girlscout Beret",H.a([$.N,$.Q,$.qF,$.a_,$.a4],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Map",H.a([$.K,$.Q,$.a_],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Compass",H.a([$.A,$.Q,$.a_,$.a8],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p
t=[P.C]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,[N.W,P.R])
t.i(0,$.dh,$.j)
t.i(0,$.c3,$.j)
t.i(0,$.bf,$.j)
t.i(0,$.c8,$.B)
t.i(0,$.b6,$.B)
r="Now that the "+$.x+" has been defeated, the planet has really opened up. The "
q=$.k
p=[U.c]
t.i(0,new R.aa("Blaze a Trail",!1,[new U.c(r+q+" eagerly begins to explore uncharted territory. "),new U.c("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.c("Deep in a forgotten forest, in a temple covered in golden "+$.q+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
q="The "+$.x+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.k
t.i(0,new R.by("Find the Frogs",!1,[new U.c(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.c("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.c("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.q+" "+$.L+"s in time to stop them.   ")],H.a([],p),R.bN(),!1,!1,new Y.bB("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ac)
p=$.bJ
this.c.i(0,new X.D(s,t,null),p)},
gJ:function(){return this.k1},
gO:function(){return this.k4}}
L.lL.prototype={
a8:function(){return!1},
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Scroll",H.a([$.K,$.Q,$.a_],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Ink Pot",H.a([$.b7,$.Q,$.an,$.a_],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Blank Book",H.a([$.K,$.Q,$.aO,$.a_,$.an,$.a4],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,[N.W,P.R])
t.i(0,$.jw,$.j)
t.i(0,$.bf,$.j)
t.i(0,$.cg,$.j)
t.i(0,$.b6,$.l)
t.i(0,$.cv,$.l)
r="The "+$.x+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.k
p=[U.c]
t.i(0,new R.by("Understand the Frogs",!1,[new U.c(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bN(),!1,!1,new Y.bB("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ac)
q="Now that the "+$.x+" has been taken care of, the "
r=$.k
q=q+r+" discovers a large library of "
o=$.q
t.i(0,new R.aa("Restore the Library",!1,[new U.c(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.c("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.c(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p=$.bJ
this.c.i(0,new X.D(s,t,null),p)},
gJ:function(){return this.k1},
gO:function(){return this.k4},
gH:function(){return this.y1}}
S.lM.prototype={
a8:function(){return!1},
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Cueball",H.a([$.dL,$.kb,$.Q,$.ah,$.aF,$.a4],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Crystal Ball",H.a([$.dL,$.qD,$.Q,$.b4],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Binoculars",H.a([$.b7,$.Q,$.A],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Blindfold",H.a([$.qz,$.Q,$.bb],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,[N.W,P.R])
t.i(0,$.qj,$.j)
t.i(0,$.jz,$.j)
t.i(0,$.qh,$.j)
t.i(0,$.cM,$.l)
r="Now that the "+$.x+" has been defeated, the land is really starting to open up. The "
q=$.k
r=r+q+" finds a tunnel filled with Blind "
p=$.q
o=[U.c]
t.i(0,new R.aa("Be the King",!1,[new U.c(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.c("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.c("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.w(),!1,!1,new Y.cF("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
q="The "+$.x+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.k
t.i(0,new R.by("Understand the Frogs",!1,[new U.c(q+p+" thinks hard and figures out the best way to organize the "+$.q+"s to start collecting frogs. "),new U.c("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.bN(),!1,!1,new Y.bB("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ac)
p=$.k
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.q
t.i(0,new R.aa("Work With Exiles",!1,[new U.c(q+r+"s to carry everything out."),new U.c("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.c("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.w(),!1,!1,new Y.cF("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
r="A group of underlings are still making trouble, even after the defeat of the "+$.x+". The "
p=$.k
r=r+p+" begins planting rumors of a huge "
q=$.aj
t.i(0,new R.aa("Have the Keikaku",!1,[new U.c(r+q+" Treasure in the center of a still active dungeon. "),new U.c("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.w(),!1,!1,new Y.cF("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
o=$.bJ
this.c.i(0,new X.D(s,t,null),o)},
gJ:function(){return this.k1},
gO:function(){return this.k4},
gH:function(){return this.y1}}
K.lN.prototype={
eM:function(a){a.y=this.k4
a.cy=this.k3
a.cx=this.k2
a.k1=this.k1
a.id=this.id
a.go=this.go
a.E.v=!1
a.r1=this.fx
a.k4=this.dy},
eA:function(a){return!1},
ey:function(a){return!1},
ew:function(a){return!1},
eu:function(a){return!1},
eV:function(){var t,s,r,q
$.pa=this
$.r.Q=this.fr
for(t=L.pY(),s=J.bx(t.a),t=new H.cR(s,t.b,[H.J(t,0)]);t.A();){r=s.gI()
r.sM(0,r.gci())}for(t=T.p9(),s=J.bx(t.a),t=new H.cR(s,t.b,[H.J(t,0)]);t.A();){q=s.gI()
q.sM(0,q.gci())}}}
K.kP.prototype={}
G.lO.prototype={}
L.lS.prototype={
gY:function(){return this.rx}}
T.bO.prototype={}
O.lU.prototype={
gY:function(){return this.ry}}
N.lV.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Fiduspawn Plush",H.a([$.c4,$.N,$.bb],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Teddy Bear",H.a([$.c4,$.N,$.bb],s),null,!1,"Cuddle Bear")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Dice",H.a([$.oq,$.aP],s),null,!1,"D113")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Pigeon",H.a([$.bw,$.aF,$.bg,$.b9,$.bk,$.oA],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Cat Ears",H.a([$.N,$.bb,$.c4],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Religious Text",H.a([$.aO,$.K],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Psychology Book",H.a([$.aO,$.K],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Therapy Couch",H.a([$.bb,$.N],s),null,!1,"Giant Problem Absorbing Couch")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("FLARP Manual",H.a([$.aO,$.K,$.a_],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.W,P.R]
q=new H.o(0,null,null,null,null,null,0,r)
q.i(0,$.di,$.B)
q.i(0,$.b6,$.l)
q.i(0,$.cv,$.j)
q.i(0,$.cg,$.l)
p=$.k
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.q
m=[U.c]
q.i(0,new R.a1("The Therapist is IN",!1,[new U.c(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.c("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.aX+" or "+$.aj+".  The "+p+" is getting really good at helping them out. "),new U.c("A line of "+$.L+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p=$.aL
this.r.i(0,new X.D(s,q,null),p)
p=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.o(0,null,null,null,null,null,0,r)
s.i(0,$.di,$.B)
s.i(0,$.b6,$.j)
s.i(0,$.cv,$.j)
s.i(0,$.o3,$.j)
s.i(0,$.ck,$.j)
s.i(0,$.ob,$.j)
s.i(0,$.cg,$.l)
q=$.k
o="The "+q+" wanders into an incredibly calm area of their land. It is filled with chanting and "
n=$.L
o=o+n+"ing "
l=$.q
o=o+l+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+q+" joins them. "
k="While meditating with the "+l+" monks, the "+q+" has come to a startling realization, the vast croak is related to "
j=$.aX
s.i(0,new R.a1("Meditate On Frogism",!1,[new U.c(o),new U.c(k+j+"-ness. How could they miss this?"),new U.c(" The "+q+" begins telling all the "+l+" monks about how "+j+"-ness relates to the Vast Croak. The monks begin "+n+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
n=$.aL
this.r.i(0,new X.D(p,s,null),n)
n=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,r)
t.i(0,$.cu,$.B)
t.i(0,$.de,$.j)
t.i(0,$.c3,$.j)
t.i(0,$.dg,$.j)
t.i(0,$.ed,$.j)
s=$.k
r="The "+s+" wanders into an entire crowd of "
q=$.q
r=r+q+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.L+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+s+" happily joins the RP."
p="The "+s+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+q+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+s+" to save the day! All that RP practice surprisingly pays off. They win easily!   "
s="The FLARP is finally coming to an end. All the "+q+"s agree that it is the best session in living memory and celebrate how the "+s+" kept it from becoming a tragedy."
q=this.y
t.i(0,new R.a1("Protect the FLARPers",!1,[new U.c(r),new U.c(p),new U.c(s)],H.a([],m),R.w(),!1,!1,new Y.bt("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.v)
q=$.aL
this.r.i(0,new X.D(n,t,null),q)},
gH:function(){return this.cx},
gah:function(){return this.cy},
gai:function(){return this.db},
gJ:function(){return this.dx},
gan:function(){return this.dy}}
M.bn.prototype={}
N.lW.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Frog Statue",H.a([$.aQ,$.aH,$.V],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Frog Costume",H.a([$.N,$.V],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Nuclear Reactor",H.a([$.bS,$.a_,$.ab,$.V],s),null,!1,"A Representation of My Hatred for Everything")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Telescope",H.a([$.A,$.b7,$.a_,$.V],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Green Sun Poster",H.a([$.K,$.V,$.ot,$.a4],s),"Huh.",!1,"Sauce Sun Poster")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
F:function(){var t,s,r,q,p,o,n,m
t=$.k
s=[P.C]
r=H.a(["Wherever the "+t+" goes, they find a "+$.q+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.L+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.x+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
t=$.k
q=H.a(["The "+t+" discovers some tiny ectobiology lab equipment. Oh! Apparently it's for breeding frogs?  They play around with it a bit with what frogs they've managed to collect. It looks like they can somehow...combine frogs? Aww, look how cute that tadpole is!  ","The "+t+"'s server player deploys some weird equipment. After fiddling with it a bit, the "+t+" learns they can zap frogs into it and make baby frogs. How cute! ","A wizened "+$.q+" shows the "+t+" an ancient temple containing tiny ectobiology equipment. The pictures in the temple depect two frogs being zapped to it, and producing a cute little tadpole."],s)
t="A wise old "+$.q+" tells the "
p=$.k
t=t+p+" that they must negotiate with "
o=$.x
n=H.a([t+o+" to release the vast majority of the frogs. Apparently this is called 'lighting the forge'? ","A temple shows a huge snake monster, probably the "+o+" locking away all the frogs.","A "+o+" minion tells the "+p+" that if they want to find the best frogs, they are going to have to face the "+o+"."],s)
o=$.k
p="The "+o+" meets with "
t=$.x
m=H.a([p+t+". They speak in a langauge no one else can understand, and prove their worth. The forge is lit. The frogs are free.","The "+t+" offers the "+o+" an impossible Choice. After some deliberation, the "+o+" decides that it can't be done. The "+t+" sighs, and agrees to Light the Forge.","The "+t+" is a dismissive asshole, but agrees to light the forge. Wow, the "+o+" almost wishes that they WERE supposed to fight. "],s)
o=H.a(["Frogs"],s)
H.a([],s)
t=new H.o(0,null,null,null,null,null,0,[N.W,P.R])
t.i(0,$.cM,$.B)
t.i(0,$.o5,$.j)
s=[U.c]
t.i(0,new R.U("Light the Forge",!1,[new U.c(r[0]),new U.c(q[0]),new U.c(n[0]+" "+m[0])],H.a([],s),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.ac)
t.i(0,new R.U("Light the Forge",!1,[new U.c(r[1]),new U.c(q[1]),new U.c(n[1]+" "+m[1])],H.a([],s),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.ac)
t.i(0,new R.U("Light the Forge",!1,[new U.c(r[2]),new U.c(q[2]),new U.c(n[2]+" "+m[2])],H.a([],s),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.ac)
t.i(0,new R.U("Light the Forge",!1,[new U.c(r[2]),new U.c(q[0]),new U.c(n[1]+" "+m[0])],H.a([],s),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.ac)
t.i(0,new R.U("Light the Forge",!1,[new U.c(r[2]),new U.c(q[1]),new U.c(n[1]+" "+m[2])],H.a([],s),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.ac)
t.i(0,new R.U("Light the Forge",!1,[new U.c(r[0]),new U.c(q[1]),new U.c(n[2]+" "+m[0])],H.a([],s),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.ac)
p=$.k
t.i(0,new R.by("Breed the Frogs, But Be Boring About It",!1,[new U.c("The "+p+" collects all sorts of frogs. Various "+$.q+"s 'help' by "+$.L+"ing up a storm. "),new U.c("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.c("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.w(),!1,!1,new Y.bB("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
s=$.At
this.c.i(0,new X.D(o,t,null),s)},
gY:function(){return this.rx},
gJ:function(){return this.x1},
gO:function(){return this.x2},
gaa:function(){return this.B},
gH:function(){return this.E}}
U.af.prototype={
ghm:function(){var t=this.e
return new H.bq(t,new U.lX(this),[H.J(t,0)])},
bD:function(){var t,s,r,q
t=this.c
s=this.x
r=this.ghm()
r=P.bm(r,!0,H.J(r,0))
q=new U.af(s,null,null,t,!1,P.a2(null,null,null,G.Z),0,3)
q.L(t,r,null,!1,null)
q.e.h(0,s)
return q},
gM:function(a){return this.c+"kind"},
$isbA:1,
$asbA:function(){return[A.a7]}}
U.lX.prototype={
$1:function(a){return!J.ai(a,this.a.x)},
$S:function(){return{func:1,args:[G.Z]}}}
M.lZ.prototype={
$asdD:function(){return[O.hT]},
$ascN:function(){return[O.hT,P.da]}}
U.m_.prototype={
gY:function(){return this.rx}}
R.m8.prototype={
a8:function(){return!0},
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Meddler's Guide",H.a([$.aO,$.Q,$.K,$.bv,$.a4,$.b_],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("First Aid Kit",H.a([$.b7,$.Q,$.b_],s),"Heals here.",!1,"Anti-Pain Box")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=$.Q
r=A.i("Cloud in a Bottle",H.a([r,r,$.bu],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a8,$.Q,$.b4,$.aI,$.K],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,[N.W,P.R])
t.i(0,$.cv,$.j)
t.i(0,$.b6,$.j)
t.i(0,$.dh,$.l)
t.i(0,$.eh,$.l)
t.i(0,$.o2,$.l)
t.i(0,$.dv,$.l)
t.i(0,$.h1,$.l)
t.i(0,$.oa,$.l)
r=$.k
q="The "+r+" decides to take a break after defeating "+$.x+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.q
o=[U.c]
t.i(0,new R.aa("Heal the Timeline",!1,[new U.c(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.c("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.c("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.L+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.rp(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
r=$.q
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.k
t.i(0,new R.aa("Be The Sylph",!1,[new U.c(p+q+" is unimpressed. "),new U.c("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.c("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
r=$.q
q="The "+r+"s are so stressed after all that shit with the "+$.x+". They are yelling and "+$.L+" at each other over the slightest of insults. The "
p=$.k
t.i(0,new R.aa("Relax the Consorts",!1,[new U.c(q+p+" decides that what they really need is to chill the fuck out. "),new U.c("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.c("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p="The "+$.x+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.k
p=p+r+" purifies the pools "
q=$.q
t.i(0,new R.by("Purify the Frogs",!1,[new U.c(p),new U.c("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.c("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.bN(),!1,!1,new Y.bB("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ac)
r="The defeat of the "+$.x+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.q
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.k
t.i(0,new R.aa("Purify the Water",!1,[new U.c(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.c("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.c("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.aX+". Huh. Okay then.")],H.a([],o),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
o=$.bJ
this.c.i(0,new X.D(s,t,null),o)},
gJ:function(){return this.k1},
gO:function(){return this.k4},
gH:function(){return this.y1}}
D.md.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Robot",H.a([$.ab,$.A,$.aF,$.a_],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Circuit Board",H.a([$.ab,$.A],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Datastructures for Assholes",H.a([$.ab,$.K],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.ab,$.K,$.aN,$.aO],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("3-D Printer",H.a([$.aP,$.ab,$.A],s),null,!1,"3-D Shitpost Maker")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Virus on a USB Stick",H.a([$.qJ,$.A],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Wrench",H.a([$.oH,$.A,$.ah],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Computer",H.a([$.ab,$.A],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.W,P.R]
q=new H.o(0,null,null,null,null,null,0,r)
q.i(0,$.h6,$.l)
q.i(0,$.ea,$.j)
q.i(0,$.ef,$.j)
q.i(0,$.cf,$.B)
p=$.k
o="The "+p+" learns from their "
n=$.q
o=o+n+"s about the great "
m=$.aX
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.x+" destroyed it. "
o="The "+p+" searches for the "
l=$.aj
k=[U.c]
q.i(0,new R.a1("Fix the Machine",!1,[new U.c(n),new U.c(o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "),new U.c("The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory.  ")],H.a([],k),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
m=$.k
l="The "+m+" is approached by a "
p=$.q
p=l+p+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+p+"s are at a loss as to what to do. The "+m+" agrees to help decipher the puzzle. I mean, look at the little guy "
l=$.L
q.i(0,new R.a1("Decipher the Enigma",!1,[new U.c(p+l+"ing, how could they not? "),new U.c("The "+m+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.x+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.c("The "+m+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.aj+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+l+"s ")],H.a([],k),R.ew(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
l=$.aL
this.r.i(0,new X.D(s,q,null),l)
l=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.o(0,null,null,null,null,null,0,r)
s.i(0,$.ef,$.j)
s.i(0,$.dI,$.B)
s.i(0,$.ee,$.l)
s.i(0,$.cu,$.j)
s.i(0,$.cf,$.B)
q=$.k
p="The "+q+" learns that all of the local "
o=$.q
s.i(0,new R.a1("Produce the Goods",!1,[new U.c(p+o+"s have a severe shortage of gears and cogs. It is up to the "+q+" to get the assembly lines up and running again. "),new U.c("The "+q+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+q+" is training the local "+o+"s to operate the manufacturing equipment. There is "+$.L+"ing and chaos everywhere. "),new U.c("The "+q+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+o+"s name a national holiday after the "+q+". ")],H.a([],k),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
q=$.k
o="The "+q+" finds two groups of "
p=$.q
o=o+p+"s screaming and "
n=$.L
o=o+n+"ing at each other. Apparently the first group of "+n+"s are workers at a local "
m=$.aj
o=o+m+" factory and want to be paid more? The second group of "+p+"s claim they don't work hard enough for a raise.  "
n="The "+q+" arranges for the worker "+p+"s to meet with the factory manager "+p+"s individually and discuss their complaints. The "+q+" is getting a headache from all the "+n+"ing, but at least progress is being made."
m="The "+q+" is shaking hands for a "+p+" newspaper, posing in front of the now bustling "+m+" factory. The workers are paid a fair wage, and several ways to make the factory work more efficiently has left the managers happy, too. "
p=this.y
s.i(0,new R.a1("Stop the Dispute",!1,[new U.c(o),new U.c(n),new U.c(m)],H.a([],k),R.dz(),!1,!1,new Y.bt("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.v)
p=$.aK
this.r.i(0,new X.D(l,s,null),p)
p=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,r)
t.i(0,$.h6,$.B)
t.i(0,$.ea,$.j)
t.i(0,$.ef,$.j)
t.i(0,$.cf,$.B)
s=$.k
r="The "+s+" learns from a mysterious "+$.q+" in a black trenchcoat about a great "
q=$.aX
r=r+q+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
o=$.x
t.i(0,new R.a1("Learn the Secret",!1,[new U.c(r+o+"? "),new U.c("The "+s+" searches for clues about the "+q+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+q+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.c("At last, the "+s+" has found a cave with a terminal to the "+q+" MACHINE. <b>TELL ME ABOUT "+o+".</b>, they type. <b><i>ERROR: TERM '"+o+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+s+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+s+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],k),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
k=$.aL
this.r.i(0,new X.D(p,t,null),k)},
gH:function(){return this.cx},
gah:function(){return this.cy},
gai:function(){return this.db},
gJ:function(){return this.dx},
gan:function(){return this.dy}}
V.me.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Lighter",H.a([$.A,$.aE],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Siberia Poster",H.a([$.K,$.bj],s),null,!1,"Poster of the Shoguns Birthplace")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Nuclear Winter Poster",H.a([$.K,$.bj,$.bS],s),null,!1,"Shoguns Dream as a Poster")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Doomsday Device",H.a([$.A,$.aN,$.bS,$.bh,$.bk],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Juggalo Poster",H.a([$.K,$.qP],s),null,!1,"False God Poster")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Fancy Watch",H.a([$.A,$.bd,$.bh],s),null,!1,"Shoguns Watch")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Magnificent Crown",H.a([$.A,$.bd,$.bh],s),null,!1,"The Shoguns Crown")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Bitching Clothes",H.a([$.N,$.em,$.bh],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Ceramic Pork Hollow",H.a([$.bF,$.bd],s),"...",!1,"Shoguns Old Porkhollow")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Shit Ton of Guns",H.a([$.A,$.oB,$.aW,$.bh],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Sniper Rifle",H.a([$.A,$.oF,$.aW,$.bh],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("AK-47",H.a([$.A,$.ox,$.aW,$.bh],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("IED",H.a([$.k7,$.aG,$.A,$.bl,$.bh],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Idiots Guide To Being An Asshole",H.a([$.K,$.bv,$.aO],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Bike Horn",H.a([$.bY,$.A,$.b5,$.bv],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Matches",H.a([$.a0,$.aE],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.W,P.R]
q=new H.o(0,null,null,null,null,null,0,r)
q.i(0,$.co,$.l)
q.i(0,$.de,$.j)
q.i(0,$.dk,$.j)
q.i(0,$.eg,$.j)
q.i(0,$.jE,$.j)
q.i(0,$.dg,$.l)
p=$.k
o=[U.c]
q.i(0,new R.a1("Start the Fires",!1,[new U.c("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.c("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.c(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.w(),!1,!1,new Y.cF("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
p=$.aL
this.r.i(0,new X.D(s,q,null),p)
p=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.o(0,null,null,null,null,null,0,r)
s.i(0,$.co,$.l)
s.i(0,$.de,$.j)
s.i(0,$.c9,$.j)
s.i(0,$.dg,$.l)
q=$.k
n="The "+q+" learns that there is an entire planet of suckers, er, you mean "
m=$.q
s.i(0,new R.a1("All About the Boonies, Baby",!1,[new U.c(n+m+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.c("The "+q+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+m+"s various wonders from around Paradox Space. Marvel at the two headed "+$.aj+" underling. Tremble at the fearsome "+$.aX+" "+m+".   "),new U.c(" The "+q+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+m+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.w(),!1,!1,new Y.cF("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
m=$.aL
this.r.i(0,new X.D(p,s,null),m)
m=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
s=new H.o(0,null,null,null,null,null,0,r)
s.i(0,$.cL,$.j)
s.i(0,$.bf,$.B)
s.i(0,$.dj,$.j)
s.i(0,$.bW,$.l)
s.i(0,$.dv,$.B)
s.i(0,$.cV,$.B)
q=$.k
p="The "+q+" learns that all of the local "
n=$.q
s.i(0,new R.a1("Revive the Consorts",!1,[new U.c(p+n+"s are dead. This is....pretty cool, actually. "),new U.c("The "+q+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+q+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.L+"ing.  The dead "+n+"s have risen and want to be part of "+q+"'s Necromantic Army.   ")],H.a([],o),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
q=$.aL
this.r.i(0,new X.D(m,s,null),q)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,r)
t.i(0,$.c7,$.j)
t.i(0,$.cV,$.B)
t.i(0,$.dH,$.j)
t.i(0,$.jB,$.j)
t.i(0,$.cf,$.l)
t.i(0,$.dJ,$.l)
s=$.k
r="The "+s+" finds a crowd of "
p=$.L
r=r+p+"ing "
n=$.q
r=r+n+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+n+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
m="The "+s+" meets with the upper class "+n+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.aX+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+n+"s have been defeated. The high class "+n+"s murmur dignified "+p+"s and give the "+s+" several medals. "
p=this.y
t.i(0,new R.a1("Stop a Rebellion",!1,[new U.c(r),new U.c(m),new U.c(s)],H.a([],o),R.w(),!1,!1,new Y.bt("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.v)
p=$.aL
this.r.i(0,new X.D(q,t,null),p)},
gH:function(){return this.cx},
gah:function(){return this.cy},
gai:function(){return this.db},
gJ:function(){return this.dx},
gan:function(){return this.dy}}
X.D.prototype={
u:function(a){return"Theme: "+H.t(this.a)},
gcd:function(){return this.a},
gbH:function(){return this.b},
sck:function(a,b){return this.c=b}}
U.mi.prototype={
a8:function(){return!1},
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Lockpick",H.a([$.A,$.Q,$.an,$.aY,$.a4],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Sneaking Suit",H.a([$.N,$.Q,$.an],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Dagger",H.a([$.A,$.Q,$.aY,$.aG,$.op],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,[N.W,P.R])
t.i(0,$.c7,$.j)
t.i(0,$.cK,$.l)
t.i(0,$.c8,$.l)
t.i(0,$.cu,$.l)
r="The "+$.x+" cannot release the frogs since the corrupt "
q=$.q
r=r+q+" Cops have confiscated them. The "
p=$.k
o=[U.c]
t.i(0,new R.by("Steal the Frogs",!1,[new U.c(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.c("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.c("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bN(),!1,!1,new Y.bB("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ac)
p=$.k
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.x+"'s layer and slated to be returned to the "
r=$.q
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.L+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.db
t.i(0,new R.aa("Escape the Law",!1,[new U.c(q),new U.c(n),new U.c(p)],H.a([],o),R.w(),!1,!1,new Y.bt("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.v)
r=$.q
p="A weeping "+r+" approaches the "
n=$.k
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.x
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.aX+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.L+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.db
t.i(0,new R.aa("Free The Prisoner",!1,[new U.c(q),new U.c(p),new U.c(n)],H.a([],o),R.w(),!1,!1,new Y.bt("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.v)
r=$.x
n="Now that the "+r+" has been defeated, the "
p=$.q
n=n+p+"s have recovered their precious "
q=$.aj
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.k
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.L
l=n+l+"worth, the disaffected Heir to the "+$.aX+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.db
t.i(0,new R.aa("Shit, Let's Be a Heist Movie",!1,[new U.c(r),new U.c(l),new U.c(q),new U.c(m)],H.a([],o),R.w(),!1,!1,new Y.bt("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.v)
p=$.bJ
this.c.i(0,new X.D(s,t,null),p)},
gJ:function(){return this.k1},
gO:function(){return this.k4}}
N.mj.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Grandfather Clock",H.a([$.a0,$.am,$.bd,$.V],s),null,!1,"Ticking Tower of Time")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Drum",H.a([$.qT,$.V,$.ad],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Dead Doppelganger",H.a([$.aQ,$.bg,$.V,$.b9,$.b8,$.aN],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Music Box",H.a([$.A,$.V,$.ad,$.am],s),null,!1,"Cube of Noise")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Turn Tables",H.a([$.A,$.V,$.ad,$.a4,$.ap],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Metronome",H.a([$.A,$.V,$.ad],s),null,!1,"Never Ending Ticking Device")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.W,P.R]
q=new H.o(0,null,null,null,null,null,0,r)
q.i(0,$.qm,$.ac)
q.i(0,$.cf,$.l)
q.i(0,$.cu,$.l)
q.i(0,$.ee,$.j)
p=$.x
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.k
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.r2
l=[U.c]
q.i(0,new R.aa("Destroy 1000 Clocks",!1,[new U.c(o),new U.c(m),new U.c(p)],H.a([],l),R.dQ(),!1,!1,new Y.bt("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.j)
n=$.k
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.q+"s, they set out to fix the "
m=$.aj
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.x
q.i(0,new R.U("Fix the Clockwork",!1,[new U.c(p),new U.c(o),new U.c(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.a9("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
j=$.aK
this.c.i(0,new X.D(s,q,null),j)
j=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.o(0,null,null,null,null,null,0,r)
s.i(0,$.h4,$.j)
s.i(0,$.dk,$.B)
s.i(0,$.cf,$.j)
q=$.k
p="The "+q+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.q+"s they try to line the beats up to a more harmonious rhythm. "
o="The "+q+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
q="The "+q+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
n=$.x
s.i(0,new R.U("Synchronize the Rhythm",!1,[new U.c(p),new U.c(o),new U.a9(q+n+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+n+". Whatever. ")],H.a([],l),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
n=$.aK
this.c.i(0,new X.D(j,s,null),n)
n=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,r)
t.i(0,$.c3,$.j)
t.i(0,$.b6,$.l)
t.i(0,$.cv,$.j)
t.i(0,$.dh,$.j)
s=$.x
r="The door to the "+s+"'s  lair is barred by a door locked with three identical missing "
q=$.aj
r=r+q+" Pieces. A fourth is already inlaid in the door. The "
p=$.k
r=r+p+" prepares for a bullshit item collection quest. "
o="The "+p+" is starting to get frustrated. No matter what they do they can't seem to find any more "+q+" Pieces. A "+$.q+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+p+" any less frustrated."
m="In a flash of insight, the "+p+" realizes that they can just use their Time Instrument to go back before they first visited the "+s+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+q+" Pieces and the door is open. Time to prepare for a boss fight. "
s="The "+p+" is ready to fight the "+s+". "
k="Whew, doomed timeline averted. The "+p+" goes back in time to restore the 3 "+q+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.i(0,new R.U("Walk Another Path",!1,[new U.c(r),new U.c(o),new U.c(m),new U.a9(s,"Um. Is this a doomed timeline? What happens if the "+p+" never returns those "+q+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.hX(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.j)
k=$.x
q="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
p=$.aj
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
s=$.k
t.i(0,new R.U("Destroy Timelines",!1,[new U.c(q+s+" prepares for a bullshit item collection quest. "),new U.c("The "+s+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.q+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+s+" any less frustrated."),new U.c("The "+s+" is ready to fucking give up. Fuck those "+p+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+p+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+s+" can now face the "+k+". "),new U.a9("The "+s+" is ready to fight the "+k+". ","Welp. The "+s+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.dQ(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.j)
s="With the defeat of the "+$.x+", "
k=$.k
s=s+k+" uncovers historical documents in a ruined consort village. Taking them to the "
p=$.q
s=s+p+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
q=$.aX
t.i(0,new R.aa("Shatter the Timeline",!1,[new U.c(s+q+" Metropolis. The "+p+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+p+"s re-fight the Wars to win back their "+q+" Metropolis."),new U.c("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+p+"s favor. They check back in with the past "+p+" leader to inform them that the timeline has been revised to their advantage."),new U.c("The "+k+" divulges to the "+p+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+p+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+p+"s defeat. Agh!"),new U.c("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+q+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.dQ(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
q=$.q
k="There is a babbling brook. A wizened "+q+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
p=$.k
t.i(0,new R.U("Move Forwards, Never Stop",!1,[new U.c(k+p+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.c("Days in the past, but not many, the "+p+" is exploring. They find the babbling brook and the wizened "+q+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+p+" yells that it's not true, that this is the second time he's met the wizened "+q+". The wizened "+q+" simply "+$.L+"s mysteriously.  "),new U.c("Days in the future, but not enough to catch up to the present, the "+p+" is exploring. When they find the babbling brook, the wizened "+q+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+p+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+q+"...even if it isn't the same order. "),new U.a9("Inexorably, the "+p+" is back in the present but also far in the future. The wizened "+q+" has just been slain by the "+$.x+", mere minutes after their first/last conversation. The "+p+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+p+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
l=$.aK
this.c.i(0,new X.D(n,t,null),l)},
gay:function(){return this.rx},
gY:function(){return this.ry},
gJ:function(){return this.x2},
gO:function(){return this.y1},
gaa:function(){return this.C},
gH:function(){return this.N}}
G.Z.prototype={
u:function(a){var t=this.b
if(t.length!==0)return C.a.gR(t)
return"NULL TRAIT"},
ge3:function(){return this.a},
gaW:function(){return this.b},
gaS:function(){return this.c}}
G.aT.prototype={}
G.ag.prototype={}
G.bC.prototype={}
G.d.prototype={
ghs:function(){return this.e.length},
gaS:function(){var t,s,r,q,p
for(t=this.e,s=t.length,r=0,q=0;p=t.length,q<p;p===s||(0,H.c2)(t),++q)r+=t[q].c
return r},
aG:function(a,b){return C.b.ak(b.ghs()-this.e.length)},
e8:function(a){return C.a.fY(this.e,a.gcG(a))},
$isbA:1,
$asbA:function(){return[G.d]},
gM:function(a){return this.d},
gcn:function(){return this.e}}
G.kf.prototype={
$1:function(a){return a instanceof G.aT},
$S:function(){return{func:1,args:[G.Z]}}}
G.kd.prototype={
$1:function(a){var t=J.aZ(a)
return!!t.$isbC&&!t.$isag},
$S:function(){return{func:1,args:[G.Z]}}}
G.kg.prototype={
$1:function(a){return a instanceof G.ag},
$S:function(){return{func:1,args:[G.Z]}}}
G.ke.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.Z]}}}
Q.ms.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Cardboard Box",H.a([$.K,$.V,$.an],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Hole Punch",H.a([$.A,$.V,$.an],s),null,!1,"Paper Impaler")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Smoke Bombs",H.a([$.bl,$.V,$.an,$.k7],s),null,!1,"Vape Grenades")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Tribal Mask",H.a([$.b9,$.V,$.an,$.b8,$.bI],s),null,!1,"Ancient Face")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Opera Mask",H.a([$.aP,$.V,$.an,$.am],s),null,!1,"Phantom of the Opera Mask")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Black Hole in a Bottle.",H.a([$.V,$.a4,$.ot,$.an,$.b7],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.r2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.W,P.R]
q=new H.o(0,null,null,null,null,null,0,r)
q.i(0,$.di,$.j)
q.i(0,$.h5,$.j)
q.i(0,$.eV,$.j)
q.i(0,$.jz,$.j)
p=$.x
o="A big party is being held to celebrate the defeat of "+p+" and the "
n=$.k
o=o+n+" is invited as the guest of honor. There are promises of god food, including a gigantic cake. At the door a burly "
m=$.q
p=o+m+" stands with a clipboard. He eyes the "+n+" approaching and shakes his head. \u2018You\u2019re not on the list, so beat it.\u2019 The "+n+" tries to explain that they\u2019re the planet\u2019s hero and the one who beat "+p+", making them the guest of honor, but the bouncer just laughs. \u2018If you\u2019re supposed to be the hero, why haven\u2019t I heard of you already?\u2019"
o="The "+n+" asks other guests to vouch for them, but all of them are having trouble recognizing the "+n+". There\u2019s just something about the "+n+" that makes them so forgettable. They go home and bring back photos of themself with other "+n+"s as proof that they\u2019re also a hero, but the bouncer dismisses the photos as very realistic but clearly edited. What a pain."
n="The "+n+" gives up trying to convince the "+m+" bouncer of their existence. If they\u2019re not going to be recognized, they might as well take it all the way. They use their void powers to become completely unnoticeable and walk past the bouncer while making a number of obscene gestures. The "+m+" hosting the party approaches the "+n+" as soon they turn off their powers to join the party. \u2018There you are! You know it\u2019s very rude for the guest of honor to be so late. I\u2019m really disappointed in you.\u2019 Bluh."
m=this.r2
l=[U.c]
q.i(0,new R.aa("Be Forgettable",!1,[new U.c(p),new U.c(o),new U.c(n)],H.a([],l),R.w(),!1,!1,new Y.bt("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.v)
m=$.k
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.x
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.i(0,new R.U("Go to Nowhere",!1,[new U.c(n),new U.c(o),new U.c(p),new U.a9(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
i=$.aK
this.c.i(0,new X.D(s,q,null),i)
i=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.o(0,null,null,null,null,null,0,r)
s.i(0,$.di,$.l)
s.i(0,$.h5,$.l)
s.i(0,$.eV,$.l)
s.i(0,$.c7,$.j)
q=$.k
p="Even with the victory of the "+q+" over the villainous "
o=$.x
p=p+o+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.q+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
n=$.aj
s.i(0,new R.aa("Reveal the Tomes",!1,[new U.c(p+n+" will provide insight."),new U.c("Hours of study yield little progress until the "+q+" has a breakthrough regarding symbols on the "+n+". It seems that through analysis of the symbols on the "+n+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.c("The "+q+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+o+"'s library. After countless false starts and empty tombs, not only does the "+q+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.c("The "+q+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+n+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.ew(),!1,!1,new Y.O("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
n=$.k
s.i(0,new R.U("[REDACTED]",!1,[new U.c("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+n+" help? "),new U.c("The "+n+" [REDACTED]s and it actually works! Everyone "+$.L+" in surprise. This might just be crazy enough to work."),new U.c("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.a9("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.x+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.q+"s.")],H.a([],l),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
n=$.aK
this.c.i(0,new X.D(i,s,null),n)
n=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,r)
t.i(0,$.di,$.j)
t.i(0,$.h5,$.j)
t.i(0,$.eV,$.j)
s=$.k
r="Suddenly the "+s+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
q="The "+s+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
p="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+s+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+s+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
o="Faced with a huge underling that is probably too high a level to fight, the "+s+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+s+" attempts to sneak up on the "+$.x+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+s+" has defeated the major challenge of their land."
t.i(0,new R.U("Walk of Faith",!1,[new U.c(r),new U.c(q),new U.c(p),new U.c(o),new U.a9(m,"The "+s+" is going to have to try again.",k)],H.a([],l),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
l=$.aK
this.c.i(0,new X.D(n,t,null),l)},
gY:function(){return this.rx},
gJ:function(){return this.x1},
gO:function(){return this.x2},
gaa:function(){return this.B},
gH:function(){return this.E}}
E.mt.prototype={
a8:function(){return!0},
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Yardstick",H.a([$.d_,$.Q,$.oC,$.a4],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("SBURBSim Hacking Guide",H.a([$.aO,$.Q,$.kc,$.K],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Body Pillow of JR",H.a([$.N,$.Q,$.hu,$.qN,$.bb],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Nanobots",H.a([$.qY,$.Q,$.oi],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,[N.W,P.R])
t.i(0,$.cM,$.j)
t.i(0,$.dK,$.j)
t.i(0,$.ec,$.j)
t.i(0,$.dh,$.j)
t.i(0,$.eb,$.j)
t.i(0,$.jx,$.j)
t.i(0,$.eV,$.l)
r=$.k
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.q
o=[U.c]
t.i(0,new R.a1("A Complete Waste Of Time",!1,[new U.c(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.c("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.c("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.c("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.rp(),!1,!1,new Y.dS("Rewards/no_reward.png",null),1,null,null),$.v)
r=$.x
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.k
n=q+" tries to manually separate the turtles by catching them with a net and "+$.cc+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.L
t.i(0,new R.U("Stop the Turtles from [Redacted]",!1,[new U.c(p),new U.c(n),new U.c(m),new U.a9(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.zF(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.v)
q=$.k
t.i(0,new R.a1("Be Spooked By a Wolf",!1,[new U.c("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.c("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.c("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.w(),!1,!1,new Y.dS("Rewards/no_reward.png",null),1,null,null),$.v)
q="A wizened "+$.q+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.k
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.x
t.i(0,new R.U("Be The Illegitimate Player",!1,[new U.c(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.c("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.c("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.ac)
m=$.k
t.i(0,new R.U("Wear the Merch, Be the Rider",!1,[new U.c("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.q+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+$.x+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.w(),!1,!1,new Y.a3("Rewards/sweetLoot.png","Rewards/sweetGrist.png","Rewards/no_reward.png",null),1,null,null),$.ac)
m="A wizened "+$.q+" tells the "
r=$.k
t.i(0,new R.aa("Die Ironically, In The Proximity Of Some Horses",!1,[new U.c(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.c("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.w(),!1,!1,new Y.cF("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
r="A "+$.q+" that is also a SHOGUN minion tells the "
m=$.k
t.i(0,new R.aa("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.c(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.c("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.zI(),!1,!1,new Y.O("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ac)
m=$.k
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.db
t.i(0,new R.aa("Run The Simulations",!1,[new U.c(r),new U.c(q),new U.c(m)],H.a([],o),R.w(),!1,!1,new Y.bt("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
n=$.x
m="The "+n+" explains um. What? Where did the "
q=$.k
t.i(0,new R.by("Waste the Frogs",!1,[new U.c(m+q+" go?"),new U.c("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.q+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bN(),!1,!1,new Y.bB("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ac)
o=$.aK
this.c.i(0,new X.D(s,t,null),o)},
gJ:function(){return this.k1},
gO:function(){return this.k4},
gH:function(){return this.y1}}
M.mA.prototype={
a8:function(){return!1},
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Cauldron",H.a([$.qS,$.Q,$.a8],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Flying Broom",H.a([$.hr,$.d_,$.Q,$.a0,$.a8],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Warped Mirror",H.a([$.oy,$.Q,$.a8,$.an,$.a4],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.db=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,[N.W,P.R])
t.i(0,$.bW,$.l)
t.i(0,$.eX,$.l)
t.i(0,$.cL,$.l)
t.i(0,$.cu,$.l)
t.i(0,$.cw,$.l)
t.i(0,$.o5,$.l)
r=$.x
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.q
q=q+p+" consorts. It's up to the "
o=$.k
n=[U.c]
t.i(0,new R.by("Brew the Frogs",!1,[new U.c(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.c("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.c("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.bN(),!1,!1,new Y.bB("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ac)
o="Even with the defeat of the "+$.x+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
r=$.q
o=o+r+" settlement, and crops refuse to thrive at "
p=$.aX
o=o+p+" Ranch. The "+r+"s seem to have accepted everything as just how things are, but the "
q=$.k
o=o+q+" isn't going to give up until they show the status quo just how 'quo' it isn't!"
m="Alright, it turns out that through a mixture of Alchemy, game powers and pure elbow grease, the "+q+" has managed to make a river flow backwards.   Now instead of flooding, the valley is draining itself.  Progress!"
r="The "+q+" doesn't feel like KILLING the giant underlings rampaging in the "+r+" settlement. What's the fun in that? They try a variety of techniques until the underlings are as calm and friendly as "+r+"s themselves.   Now they are productive members of society! "
p="The "+q+" twists how plants and soil and growth works until the crops at "+p+" Ranch are finally thriving. With that, they have finally kicked the former status quo to the curb!  "
q=this.db
t.i(0,new R.aa("Twist All The Things",!1,[new U.c(o),new U.c(m),new U.c(r),new U.c(p)],H.a([],n),R.w(),!1,!1,new Y.bt("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.v)
q="A Mysterious "+$.q+" approaches the "
p=$.k
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.aX
q=q+r+" was discovered amongst the "+$.x+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.db
t.i(0,new R.aa("Brew The Potion",!1,[new U.c(q),new U.c(m),new U.c(p)],H.a([],n),R.w(),!1,!1,new Y.bt("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.v)
r=$.q
p="A young "+r+" approaches the "
m=$.k
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.aX
t.i(0,new R.aa("Train the Apprentice",!1,[new U.c(p+q+"mancer and agrees to train them. "),new U.c("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.aj+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.c("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.L+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.w(),!1,!1,new Y.O(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
n=$.bJ
this.c.i(0,new X.D(s,t,null),n)},
gJ:function(){return this.k1},
gO:function(){return this.k4},
gH:function(){return this.y1}}
F.mB.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.a7)
s=[G.Z]
r=A.i("Make a World Book",H.a([$.K,$.am,$.aO],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.J(t,0)]
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Quill Pen",H.a([$.bb,$.N,$.k9],s),null,!1,"Dead Bird Scribing Tool")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Book On Writing",H.a([$.aO,$.K,$.a_],s),null,!1,"How to do words for unsmarts")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("FLARP Manual",H.a([$.aO,$.K,$.a_],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Script",H.a([$.aO,$.K],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Fancy Pen",H.a([$.A,$.a_,$.k9,$.am],s),null,!1,"Ink Bleeding Plastic Finger")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
r=A.i("Spiral Bound Notebook",H.a([$.aO,$.K,$.A],s),null,!1,"Spinney Spine Scribing Station")
C.a.h(t.b,new Q.h(r,t.k(r,C.b.l(1)),q))
s=A.i("Half Written Novel",H.a([$.aO,$.K],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.a.h(t.b,new Q.h(s,t.k(s,C.b.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.W,P.R]
q=new H.o(0,null,null,null,null,null,0,r)
q.i(0,$.di,$.j)
q.i(0,$.cg,$.j)
q.i(0,$.bf,$.l)
q.i(0,$.b6,$.l)
q.i(0,$.eU,$.l)
p=$.k
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.q+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.c]
q.i(0,new R.a1("Stop the Vandals",!1,[new U.c(o),new U.c(n),new U.c(p)],H.a([],l),R.w(),!1,!1,new Y.bt("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.v)
m=$.aL
this.r.i(0,new X.D(s,q,null),m)
m=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.o(0,null,null,null,null,null,0,r)
s.i(0,$.dg,$.l)
s.i(0,$.co,$.l)
s.i(0,$.c9,$.l)
s.i(0,$.bf,$.l)
q=$.q
p="An Excited "+q+" rushes up to the "
o=$.k
s.i(0,new R.a1("Read the Fan Fiction",!1,[new U.c(p+o+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+o+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.L+"ing so much? "),new U.c("Okay.  The Excited "+q+" has a new version for the "+o+" to review. This time they at least aren't obviously "+q+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.c(" The "+o+" reads the final version of the Excited "+q+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+o+" a gift as thanks! ")],H.a([],l),R.w(),!1,!1,new Y.cF("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
o=$.aL
this.r.i(0,new X.D(m,s,null),o)
o=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.o(0,null,null,null,null,null,0,r)
t.i(0,$.co,$.l)
t.i(0,$.de,$.j)
t.i(0,$.c9,$.j)
t.i(0,$.dg,$.l)
t.i(0,$.ec,$.j)
s=$.k
r="The "+s+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
q=$.q
t.i(0,new R.a1("Be the DM",!1,[new U.c(r+q+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+s+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+q+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+q+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.c("The "+s+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+s+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+q+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.c(" The "+s+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+q+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+q+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.c("The "+s+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+q+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.w(),!1,!1,new Y.cF("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
l=$.aL
this.r.i(0,new X.D(o,t,null),l)},
gH:function(){return this.cx},
gah:function(){return this.cy},
gai:function(){return this.db},
gJ:function(){return this.dx},
gan:function(){return this.dy}}
B.mC.prototype={}
B.mE.prototype={
$asdD:function(){return[T.fF]},
$ascN:function(){return[T.fF,P.da]}}
A.cG.prototype={
fE:function(a,b,c){return c},
dI:function(a,b,c){return c},
hk:function(a,b,c){return c},
fZ:function(a,b,c){return c},
u:function(a){var t=H.t(new H.d4(H.fE(this),null))+": "
return t+P.f2(this.f,"{","}")},
gH:function(){return this.f},
sck:function(a,b){return this.a=b}}
A.fJ.prototype={
bD:function(){var t,s,r
t=$.$get$ce()
s=P.a2(null,null,null,D.be)
r=new A.fJ(this.Q,null,null,!1,!1,!1,s,0,0,!0,!1)
s.T(0,t)
r.e=!0
return r},
dI:function(a,b,c){var t,s
if(b===$.c5)return c
if(b.d)if(b===$.ak||b===$.b0||b===$.r){t=this.Q
s=J.ij(c)
if(J.eJ(s.aO(c,t.a.gaS()),1))return 1
return s.aO(c,t.a.gaS())}else return J.e1(c,this.Q.a.gaS())
return c}}
A.ct.prototype={
gae:function(a){if(this.e)this.fk()
return this.x},
u:function(a){return"rgb("+H.t(this.b)+", "+H.t(this.c)+", "+H.t(this.d)+", "+H.t(this.a)+")"},
d4:function(a){var t,s,r,q
if(a){t=this.b
if(typeof t!=="number")return t.bh()
s=this.c
if(typeof s!=="number")return s.bh()
r=this.d
if(typeof r!=="number")return r.bh()
q=this.a
if(typeof q!=="number")return H.br(q)
return(t<<24|s<<16|r<<8|q)>>>0}t=this.b
if(typeof t!=="number")return t.bh()
s=this.c
if(typeof s!=="number")return s.bh()
r=this.d
if(typeof r!=="number")return H.br(r)
return(t<<16|s<<8|r)>>>0},
hL:function(a){var t=C.b.d5(this.d4(!1),16)
return"#"+C.e.d0(t,6,"0").toUpperCase()},
hK:function(){return this.hL(!1)},
fk:function(){var t,s,r,q,p,o,n,m,l
this.e=!1
t=this.b
if(typeof t!=="number")return t.a1()
t/=255
s=this.c
if(typeof s!=="number")return s.a1()
s/=255
r=this.d
if(typeof r!=="number")return r.a1()
r/=255
q=Math.max(Math.max(t,s),r)
p=Math.min(Math.min(t,s),r)
o=q-p
n=q===0?0:o/q
if(q===p)m=0
else{if(q===t){t=s<r?6:0
m=(s-r)/o+t}else m=q===s?(r-t)/o+2:(t-s)/o+4
m/=6}l=H.a([m,n,q],[P.R])
this.f=l[0]
this.r=l[1]
this.x=l[2]},
S:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.ct){t=this.b
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
ga6:function(a){return this.d4(!0)},
ao:function(a,b){var t,s,r,q,p,o,n,m
t=J.aZ(b)
if(!!t.$isct){t=this.b
s=b.b
if(typeof t!=="number")return t.ao()
if(typeof s!=="number")return H.br(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.ao()
if(typeof q!=="number")return H.br(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.ao()
if(typeof o!=="number")return H.br(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.ao()
if(typeof m!=="number")return H.br(m)
return A.dF(t+s,r+q,p+o,n+m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.a1()
s=this.c
if(typeof s!=="number")return s.a1()
r=this.d
if(typeof r!=="number")return r.a1()
q=this.a
if(typeof q!=="number")return q.a1()
return A.iU(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.ao()
s=this.c
if(typeof s!=="number")return s.ao()
r=this.d
if(typeof r!=="number")return r.ao()
return A.dF(t+b,s+b,r+b,this.a)}throw H.u("Cannot add ["+H.t(t.ga_(b))+" "+H.t(b)+"] to a Colour. Only Colour, double and int are valid.")},
aF:function(a,b){var t,s,r,q,p,o,n,m
t=J.aZ(b)
if(!!t.$isct){t=this.b
s=b.b
if(typeof t!=="number")return t.aF()
if(typeof s!=="number")return H.br(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.aF()
if(typeof q!=="number")return H.br(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.aF()
if(typeof o!=="number")return H.br(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.aF()
if(typeof m!=="number")return H.br(m)
return A.dF(t-s,r-q,p-o,n-m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.a1()
s=this.c
if(typeof s!=="number")return s.a1()
r=this.d
if(typeof r!=="number")return r.a1()
q=this.a
if(typeof q!=="number")return q.a1()
return A.iU(t/255-b,s/255-b,r/255-b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.aF()
s=this.c
if(typeof s!=="number")return s.aF()
r=this.d
if(typeof r!=="number")return r.aF()
return A.dF(t-b,s-b,r-b,this.a)}throw H.u("Cannot subtract ["+H.t(t.ga_(b))+" "+H.t(b)+"] from a Colour. Only Colour, double and int are valid.")},
aO:function(a,b){var t,s,r,q,p,o,n,m
t=J.aZ(b)
if(!!t.$isct){t=this.b
if(typeof t!=="number")return t.a1()
s=b.b
if(typeof s!=="number")return s.a1()
r=this.c
if(typeof r!=="number")return r.a1()
q=b.c
if(typeof q!=="number")return q.a1()
p=this.d
if(typeof p!=="number")return p.a1()
o=b.d
if(typeof o!=="number")return o.a1()
n=this.a
if(typeof n!=="number")return n.a1()
m=b.a
if(typeof m!=="number")return m.a1()
return A.iU(t/255*(s/255),r/255*(q/255),p/255*(o/255),n/255*(m/255))}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.a1()
s=this.c
if(typeof s!=="number")return s.a1()
r=this.d
if(typeof r!=="number")return r.a1()
q=this.a
if(typeof q!=="number")return q.a1()
return A.iU(t/255*b,s/255*b,r/255*b,q/255)}throw H.u("Cannot multiply a Colour by ["+H.t(t.ga_(b))+" "+H.t(b)+"]. Only Colour, double and int are valid.")},
m:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.u("Colour index out of range: "+H.t(b))},
i:function(a,b,c){var t,s
t=J.dZ(b)
if(t.aN(b,0)||t.aX(b,3))throw H.u("Colour index out of range: "+H.t(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.S(b,0)){this.b=C.b.a3(c,0,255)
this.e=!0
this.y=!0}else if(t.S(b,1)){this.c=C.b.a3(c,0,255)
this.e=!0
this.y=!0}else if(t.S(b,2)){this.d=C.b.a3(c,0,255)
this.e=!0
this.y=!0}else this.a=C.b.a3(c,0,255)
else if(t.S(b,0)){this.b=C.b.a3(J.iq(J.e1(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.S(b,1)){this.c=C.b.a3(J.iq(J.e1(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.ij(c)
if(t.S(b,2)){this.d=C.b.a3(J.iq(s.aO(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.b.a3(J.iq(s.aO(c,255)),0,255)}},
eN:function(a,b,c,d){this.b=C.d.a3(C.d.a3(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.d.a3(C.d.a3(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.d.a3(C.d.a3(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.d.a3(J.nM(d,0,255),0,255)}}
A.nq.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.C]}}}
Z.cx.prototype={
u:function(a){return this.b},
eO:function(a,b,c,d){var t
if(this.a==null)this.a=H.a([],[L.cE])
t=this.c
if(typeof t!=="number")return H.br(t)
this.x=50*t
if(t>=3)this.x=1000*t-2},
gM:function(a){return this.b}}
Z.jQ.prototype={}
Z.X.prototype={
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
F.eq.prototype={
u:function(a){return this.b}}
F.hE.prototype={
ct:function(a,b){return"("+this.b+")["+H.t(C.a.gcZ(a.b.split(".")))+"]: "+H.t(b)},
gM:function(a){return this.b}}
R.eZ.prototype={}
A.lh.prototype={
m:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.af(b)?t.m(0,b):$.$get$oW()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.af(b)?t.m(0,b):$.$get$oW()}throw H.u(P.fH(b,"'name' should be a String name or int id only",null))},
gP:function(a){var t=this.a
t=t.gaw(t)
return new H.hF(null,J.bx(t.a),t.b,[H.J(t,0),H.J(t,1)])},
j:function(a,b,c,d){var t,s
t=this.a
if(t.af(b))this.aj(0,b)
s=this.fd()
if(typeof s!=="number")return s.eb()
if(s>=256)throw H.u(P.fH(s,"Palette colour ids must be in the range 0-255",null))
t.i(0,b,c)
this.b.i(0,s,c)
this.c.i(0,b,s)
this.d.i(0,s,b)},
aj:function(a,b){var t,s,r
t=this.a
if(!t.af(b))return
s=this.c
r=s.m(0,b)
t.aj(0,b)
this.b.aj(0,r)
s.aj(0,b)
this.d.aj(0,r)},
fd:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.af(s))return s;++s}}}
A.hQ.prototype={
$asG:function(){return[A.ct]},
$isG:1}
Q.ci.prototype={
c_:function(){return new E.hW(this,P.cz(D.be,P.R),H.a([],[A.cG]))},
bW:function(){var t,s
t=this.aI
if(t!=null){s=this.c
s=s==null||s.d==null||s.e==null}else s=!0
if(s)return
if(J.ai(J.ds(t),this.c.d.dy))this.aI=this.c.d
else if(J.ai(J.ds(this.aI),this.c.e.dy))this.aI=this.c.e},
bS:function(a){var t,s
this.c.ab.db
t=this.r1?"Doomed ":""
s=this.br
if(s>3)t+="Severely Grim Dark "
else if(s>1)t+="Mildly Grim Dark "
if(this.bq===4)t+="Wasted "
t=t+H.t(this.ac)+" of "+H.t(this.a7)
return t},
ed:function(){var t,s,r,q,p,o,n,m,l
if(T.u2())return"<span>"
t="<span class = 'tooltip'><span class='tooltiptext'><table>"+("<tr><td class = 'toolTipSection'>"+H.t(this.b9)+"<hr>")+("Class: "+H.t(J.ds(this.ac))+"<Br>")+("Aspect: "+H.t(J.ds(this.a7))+"<Br>")
s=this.b8
t+="Land: "+H.t(s!=null?s.dy:"DESTROYED.")+"<Br>"
s=this.b8
t=t+("Denizen: "+(s!=null?s.fy.c:"NONE")+"<Br>")+("LandLevel: "+this.bM+"<Br>")+("Gnosis: "+this.bq+"<Br>")
s=this.N
if(s!=null)t+="Sprite: "+s.d
t=t+("<br><Br>Prophecy Status: "+this.b.b)+("<br><br>Flipping out over: "+H.t(this.az))
r=D.Ap()
t+="</td><td class = 'toolTipSection'>Stats<hr>"
for(s=J.bx(r.a),q=new H.cR(s,r.b,[H.J(r,0)]);q.A();){p=s.gI()
o=H.t(p)+": "
n=this.a$.ar(p)
t+=o+C.d.ak(n)+"<br>"}t=t+"</td><td class = 'toolTipSection' rowspan='2'>Sylladex<hr>"+(this.a.gdX()+", Rank: "+H.t(this.a.gaS())+"<br>")
for(s=this.y2.a,s=new J.e2(s,s.length,0,null,[H.J(s,0)]);s.A();)t+=s.d.gdX()+"<br>"
t+="</td><td class = 'toolTipSection' rowspan='2'>Buffs<hr>"
for(s=this.a$.b,q=s.length,m=0;m<s.length;s.length===q||(0,H.c2)(s),++m)t+=s[m].u(0)+"<br>"
t+="</td></tr><tr><td class = 'toolTipSection'>Fraymotifs<hr>"
for(s=this.fy,q=s.length,m=0;m<s.length;s.length===q||(0,H.c2)(s),++m)t+=H.t(J.ds(s[m]))+"<br>"
t+="</td><td class = 'toolTipSection'>Relationships<hr>"
for(s=this.id,q=s.length,m=0;m<s.length;s.length===q||(0,H.c2)(s),++m){l=s[m]
t+=" "+l.dK()+"("+C.d.ak(l.b)+") "+H.t(C.u.bS(l.c))+"<br>"}return t+"</td></tr></table></span>"},
fB:function(){var t,s,r,q,p,o
if(this.fy.length!==0||!this.aJ)return
t=10-C.a.ca($.$get$ii(),this.Z)
s=H.a([],[Z.cx])
r=Z.aA("Telekinesis",1,null,"")
r.r.push(new Z.X($.r,2,!0,0,1,2,3,""))
r.e=" Large objects begin pelting the ENEMY. "
s.push(r)
r=Z.aA("Pyrokinesis",1,null,"")
r.r.push(new Z.X($.r,2,!0,0,1,2,3,""))
r.e=" Who knew shaving cream was so flammable? "
s.push(r)
r=Z.aA("Aquakinesis",1,null,"")
r.r.push(new Z.X($.r,2,!0,0,1,2,3,""))
r.e=" A deluge begins damaging the ENEMY. "
s.push(r)
r=Z.aA("Electrokinesis",1,null,"")
r.r.push(new Z.X($.r,2,!0,0,1,2,3,""))
r.e=" An electric pulse begins damaging the ENEMY. "
s.push(r)
r=Z.aA("Terakinesis",1,null,"")
r.r.push(new Z.X($.r,2,!0,0,1,2,3,""))
r.e=" The very ground begins damaging the ENEMY. "
s.push(r)
r=Z.aA("Vitaekinesis",1,null,"")
r.r.push(new Z.X($.r,2,!0,0,1,2,3,""))
r.e=" The ENEMY's own body is turned against them as they begin punching their own face. "
s.push(r)
r=Z.aA("Fungikinesis",1,null,"")
r.r.push(new Z.X($.r,2,!0,0,1,2,3,""))
r.e=" A confusing array of mushrooms begins damaging the ENEMY. "
s.push(r)
r=Z.aA("Mind Control",1,null,"")
q=r.r
q.push(new Z.X($.bo,3,!0,0,1,2,3,""))
q.push(new Z.X($.bo,3,!1,0,1,2,3,""))
r.e=" All enemies start damaging themselves. It's kind of embarassing how easy this is.  "
s.push(r)
r=Z.aA("Optic Blast",1,null,"")
r.r.push(new Z.X($.r,2,!0,0,1,2,3,""))
r.e=" Appropriately colored eye beams pierce the ENEMY. "
s.push(r)
r=Z.aA("Ghost Communing",1,null,"")
q=r.r
q.push(new Z.X($.aV,3,!0,0,1,2,3,""))
q.push(new Z.X($.aV,3,!1,0,1,2,3,""))
r.e=" The souls of the dead start hassling all enemies. "
s.push(r)
r=Z.aA("Animal Communing",1,null,"")
q=r.r
q.push(new Z.X($.aV,3,!0,0,1,2,3,""))
q.push(new Z.X($.aV,3,!1,0,1,2,3,""))
r.e=" Local animal equivalents start hassling all enemies. "
s.push(r)
for(p=0;p<s.length;++p)if(this.c.v.a.D()*40<t){q=this.fy
if(p>=s.length)return H.S(s,p)
q.push(s[p])}if(J.ai(this.Z,"#631db4")){r=Z.aA("Chucklevoodoos",1,null,"")
q=r.r
q.push(new Z.X($.aV,3,!1,0,1,2,3,""))
q.push(new Z.X($.aV,3,!0,0,1,2,3,""))
r.e=" Oh god oh no no no no no no no no. The enemies are no longer doing okay, psychologically speaking. "
this.fy.push(r)}else if(J.ai(this.Z,"#658200")){r=Z.aA("Limeade Refreshment",1,null,"")
q=r.r
q.push(new Z.X($.aV,1,!1,0,1,2,3,""))
q.push(new Z.X($.aV,1,!0,0,1,2,3,""))
r.e=" All allies just settle their shit for a little while. Cool it. "
this.fy.push(r)}else if(J.ai(this.Z,"#ffc3df")){r=Z.aA("'<font color='pink'>"+H.t(this.b9)+" and the Power of Looove~~~~~<3<3<3</font>'",1,null,"")
q=r.r
q.push(new Z.X($.c0,3,!1,0,1,2,3,""))
q.push(new Z.X($.c0,3,!0,0,1,2,3,""))
q=this.ed()+this.a7.h_()+this.bS(0)+" ("
o=$.b0
o=this.a$.ar(o)
q=q+C.d.ak(o)+"hp, "
o=$.r
o=this.a$.ar(o)
r.e=" You are pretty sure this is not a real type of Troll Psionic.  It heals everybody in a bullshit parade of sparkles, and heart effects despite your disbelief. Everybody is also SUPER MEGA ULTRA IN LOVE with each other now, but ESPECIALLY in love with "+(q+C.d.ak(o)+" power)</font></span>")+". "
this.fy.push(r)}},
aq:function(a){var t,s
t=Q.rg(null,null,null,null,null,null)
this.eE(t)
t.x1=this.x1
t.C=this.C
t.K=this.K
s=this.N
if(s!=null)t.N=s.aq(0)
t.v=!0
t.as=!0
s=this.aI
t.aI=s
if(s!=null)t.bW()
t.az=this.az
t.ab=this.ab
t.b4=this.b4
t.dx=this.dx
t.b5=this.b5
t.bm=!1
t.bn=!1
t.b6=this.b6
t.bo=!1
t.b7=this.b7
t.ac=this.ac
t.c1=this.c1
t.c2=this.c2
t.cI=!1
t.c3=this.c3
t.c4=this.c4
t.c5=this.c5
t.a7=this.a7
t.b8=this.b8
t.aA=this.aA
t.aB=this.aB
t.b9=this.b9
t.ba=this.ba
s=this.aI
t.aI=s
if(s!=null)t.bW()
t.cJ=!1
t.bI=this.bI
t.c6=this.c6
t.cK=!1
t.c7=this.c7
t.bJ=this.bJ
t.bb=this.bb
t.cL=!0
t.aJ=this.aJ
t.Z=this.Z
t.bK=this.bK
t.bp=this.bp
t.bc=this.bc
t.b0=this.b0
t.bL=this.bL
t.cM=!0
t.cN=!1
t.cO=!1
t.cP=!1
t.c8=this.c8
t.bq=this.bq
t.br=this.br
t.cQ=!1
t.bM=this.bM
t.cR=!1
t.cS=!1
t.cT=!1
t.c=this.c
return t},
fN:function(){var t,s
if(this.c.cf()==="Human"){this.bb=this.c.v.w($.$get$pB())
return}if(this.c.cf()!=="Troll")t=this.c.cf()==="Mixed"&&this.c.v.a.D()>0.5
else t=!0
if(t){this.aJ=!0
this.bb="#000000"
if(!J.ai(this.a7,$.pT))this.Z=this.c.v.w($.$get$ii())
this.fB()
t=J.ai(this.Z,"#610061")||J.ai(this.Z,"#99004d")||J.ai(this.Z,"#631db4")
s=this.c
if(t){t=s.v.w($.p_)
this.bc=t
J.eL(t,this.c)}else{t=s.v.w($.oZ)
this.bc=t
J.eL(t,this.c)}t=this.bc
this.ba=t
J.eL(t,this.c)}else this.bb=this.c.v.w($.$get$pB())},
h8:function(){var t,s,r,q
if(this.aJ&&J.ai(this.Z,"#99004d"))for(t=0;s=this.id,t<s.length;++t){r=s[t]
if(this.aJ)if(J.ai(this.Z,"#99004d"))if(r.gd3(r).gi2())r.gd3(r).ghV()}s=this.br
if(s>1)for(q=0;s=this.id,q<s.length;++q){r=s[q]
r.b=0
s=r.r
r.d=s
r.f=s}},
u:function(a){return H.nK(H.t(this.ac)+H.t(this.a7),P.p8("'",!0,!0),"")},
h6:function(){var t,s,r,q
for(t=0;t<this.k2.length;++t){s=this.ac.a8()
r=this.k2
q=r.length
if(s){if(t>=q)return H.S(r,t)
this.cc(10,r[t])}else{if(t>=q)return H.S(r,t)
this.cc(-10,r[t])}}},
cc:function(a,b){var t,s,r,q,p
if(b==null)return
if(J.ai(b.gbU(),$.c0))for(t=b.b,s=b.a,r=0;q=this.id,p=q.length,r<p;++r){q=q[r]
q.b=q.b+a/p*t*s.gdN()}else{t=b.a
s=J.aZ(t)
if(s.S(t,$.ak))if(s.S(t,$.ak)){s=$.ak
s=this.a$.ar(s)
s=s>1}else s=!1
else s=!0
if(s){s=b.b
q=t.gdN()
this.a$.bw(t,a*s*q)}}},
h7:function(){var t,s,r,q
t=this.aA.a.gH()
s=this.aB.a.gH()
for(r=t.length,q=0;q<r;++q)this.cc(10,t[q])
for(r=s.length,q=0;q<r;++q)this.cc(10,s[q])},
eT:function(a,b,c,d,e,f){var t
this.aI=e
if(e!=null)this.bW()
this.d="player_"+H.t(this.k4)
t=new A.i3(null,this)
t.a=H.a([],[A.a7])
this.y2=t},
gbv:function(){return this.q},
gbB:function(){return this.a7},
sbv:function(a){return this.q=a}}
D.ls.prototype={
hg:function(a){var t,s,r
t=[["\\byear\\b","sweep"],["SBURB","SGRUB"],["\\bmonth\\b","perigee"],["\\brefrigerator\\b","\\bthermal hull\\b"],["\\bbathtub\\b","ablution trap"],["\\bears\\b","hear ducts "],["\\bheart\\b","pump biscuit"],["\\bbrain\\b","sponge"],["\\brap\\b","slam poetry"],["\\bnose\\b","sniffnode"],["\\bmouth\\b","squawk gaper"],["\\bbed\\b","cocoon"],["\\btea\\b","scalding leaf fluid"],["\\bworm","dirt noodle"],["\\bbean","fart nibblet"],["\\btree\\b","frond nub"],["\\bleg\\b","frond"],["\\bgold star\\b","glitter biscuit"],["\\bborn\\b","hatched"],["\\btoilet\\b","load gaper"],["\\bfoot\\b","prong"],["\\bspine\\b","posture pole"],["vampire","rainbow drinker"],["\\btits\\b","rumble spheres"],["\\bbaby\\b","wiggler"],["eye","gander bulb"]]
s=15-C.a.ca($.$get$ii(),a.Z)
for(r=0;r<26;++r)if(this.x.a.D()*15<s)this.b.push(t[r])},
hi:function(a){var t,s,r
this.f=this.x.V(6)
this.c=this.x.V(6)
this.a=[]
this.b=[]
if(this.f===2&&this.x.a.D()>0.2)this.f=this.x.V(2)
if(this.x.a.D()>0.95){t=this.x.w($.$get$pJ())
this.d=t
if(J.cU(t)===1&&this.r<8){t=this.d
this.d=D.t8(t,J.im(t,0),this.r)}}if(this.x.a.D()>0.95){if(!J.ai(this.d,"")&&this.x.a.D()>0.7){t=this.d
this.e=t}else{t=this.x.w($.$get$pJ())
this.e=t}if(J.cU(t)===1&&this.r<8){t=this.e
this.e=D.t8(t,J.im(t,0),this.r)}}if(J.ai(a.Z,"#99004d")||J.ai(a.Z,"#610061"))for(s=0;s<3;++s)this.b.push(this.x.w($.$get$pw()))
r=this.x.a.D()>0.5?this.x.V(11):0
if(r<0)r=0
for(s=0;s<r;++s){this.b.push(D.AX(this.x))
if(J.ai(a.Z,"#99004d")||J.ai(a.Z,"#610061"))this.b.push(this.x.w($.$get$pw()))}this.b.push(this.x.w($.$get$pM()))
this.b.push(this.x.w($.$get$px()))
this.b.push(this.x.w($.$get$pz()))
this.b.push(this.x.w($.$get$pG()))
this.b.push(this.x.w($.$get$pA()))
this.b.push(this.x.w($.$get$pv()))
this.b.push(this.x.w($.$get$pu()))
this.b.push(this.x.w($.$get$pN()))
this.b.push(this.x.w($.$get$pI()))
this.a.push(this.x.w($.$get$pK()))
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
if(this.x.a.D()>0.5)this.a.push(["OH","0"])}this.hg(a)},
hh:function(a){var t,s
this.f=this.x.V(3)
this.c=this.x.V(4)
this.a=[]
this.b=[]
if(this.f===2&&this.x.a.D()>0.2)this.f=this.x.V(2)
t=this.x.a.D()>0.5?this.x.V(11):0
if(t<0)t=0
for(s=0;s<t;++s)this.b.push(this.x.w($.$get$pr()))
this.b.push(this.x.w($.$get$pM()))
this.b.push(this.x.w($.$get$px()))
this.b.push(this.x.w($.$get$pz()))
this.b.push(this.x.w($.$get$pG()))
this.b.push(this.x.w($.$get$pA()))
this.b.push(this.x.w($.$get$pv()))
this.b.push(this.x.w($.$get$pu()))
this.b.push(this.x.w($.$get$pN()))
this.b.push(this.x.w($.$get$pI()))
this.b.push(this.x.w($.$get$t0()))
this.a.push(this.x.w($.$get$pK()))},
eU:function(a){this.r=this.x.V(12)}}
A.d2.prototype={
V:function(a){if(a===0)return 0
if(typeof a!=="number")return a.aN()
if(a<0)return-this.dB(-a)
return this.dB(a)},
dB:function(a){var t,s
t=this.a
if(a>4294967295){s=t.D()
this.b=C.d.ak(s*4294967295)
return C.d.b1(s*a)}else{s=t.V(a)
this.b=s
return s}},
dc:function(a){var t=a==null
this.a=t?C.q:P.AF(a)
if(!t)this.b=J.cD(a,1)},
ho:function(a,b){var t=J.bV(a)
if(t.ga4(a)===!0)return
if(!!t.$isbD)return a.d8(this.a.D())
return t.X(a,this.V(t.gt(a)))},
w:function(a){return this.ho(a,!0)}}
Y.mD.prototype={
$1:function(a){var t,s,r,q,p
if(J.ai(a," "))return a
for(t=Y.ph(16),s=0;s<t;++s){r=Y.ph(3)
q=$.$get$pg().m(0,r)
p=Y.ph($.$get$pg().m(0,r).length)
if(p>>>0!==p||p>=q.length)return H.S(q,p)
a=J.cD(a,q[p])}return a},
$S:function(){return{func:1,args:[,]}}}
N.cq.prototype={
gd3:function(a){var t,s
if($.pt.ge1().gi3()){$.pt.ge1().gh3()
t=!0}else t=!1
if(t){s=$.pt.ge1().gh3()
return s}return this.c},
fC:function(a){var t=this.d
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
dK:function(){return this.fC(null)},
u:function(a){return" "+this.dK()+"("+C.d.ak(this.b)+") "+H.t(C.u.bS(this.c))},
dO:function(){var t=this.b
if(t>20)return this.y
else if(t<-20)return this.Q
else if(t>0)return this.x
else if(t===0)return this.r
else return this.z},
hO:function(a){var t,s
t=this.d
if(t===this.ch||t===this.db||t===this.cx||t===this.cy)return t
if(t===""){this.e=!1
t=this.dO()
this.d=t
this.f=t
if(t===this.y||t===this.Q){this.e=!0
this.f=this.x}return t}if(J.tn(this.a).v.a.D()>0.25){this.f=this.d
this.d=this.dO()}t=this.f
s=this.d
if(t!==s)this.e=!0
else this.e=!1
return s},
gae:function(a){return this.b},
sck:function(a,b){return this.a=b}}
L.fM.prototype={
u:function(a){return this.b}}
L.dn.prototype={
au:function(){var t,s,r,q,p,o
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
p=this.v.V(2)+3
for(o=0;o<p;++o)q.push(this.v.w(s))
return new R.ez("Wander The Battlefield",!0,q,H.a([],t),R.w(),!1,!1,new Y.iJ(null,"Rewards/battlefield.png","Rewards/no_reward.png",null),1,null,null)},
aC:function(){var t,s,r,q,p,o
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
p=this.v.V(2)+3
for(o=0;o<p;++o)q.push(this.v.w(s))
return new R.d1("Do Prospit Bullshit",!0,q,H.a([],t),R.p3(),!1,!1,new Y.dG(null,"Prospit.png","Rewards/no_reward.png",null),1,null,null)},
av:function(){var t,s,r,q,p,o
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
p=this.v.V(2)+3
for(o=0;o<p;++o)q.push(this.v.w(s))
return new R.d1("Do Derse Bullshit",!0,q,H.a([],t),R.p3(),!1,!1,new Y.dG(null,"Prospit.png","Rewards/no_reward.png",null),1,null,null)},
bu:function(){var t,s,r,q,p
t=[U.c]
s=H.a([],t)
s.push(new U.c("The "+$.k+" writhes in terror and pain. Why do players without dreamselves dream in the Furthest Ring with the Horror Terrors? "))
s.push(new U.c("The "+$.k+" vows to never sleep again.  Why do players without dreamselves dream in the Furthest Ring with the Horror Terrors? "))
s.push(new U.c("The "+$.k+" is reliving embarassing childhood memories for the amusement of the Horror Terrors.  Why do players without dreamselves dream in the Furthest Ring with the Horror Terrors?"))
r=H.a([],t)
q=this.v.V(2)+3
for(p=0;p<q;++p)r.push(this.v.w(s))
return new R.d1("Writhe In Pain",!0,r,H.a([],t),R.zH(),!1,!1,new Y.dG(null,"Prospit.png","Rewards/no_reward.png",null),1,null,null)},
bt:function(){var t,s,r,q,p
t=[U.c]
s=H.a([],t)
s.push(new U.c("The "+$.k+" has a relatively sedate time of reliving past memories and chatting up inconsequential ghosts. Good thing the dream bubbles were set up, huh?"))
s.push(new U.c("The "+$.k+" enjoys a relaxing memory of their home planet while dreaming in the bubbles. "))
s.push(new U.c("The "+$.k+"  tries not to give into existential horror as they realize just how MANY versions of their dead friends exist."))
r=H.a([],t)
q=this.v.V(2)+3
for(p=0;p<q;++p)r.push(this.v.w(s))
return new R.d1("Do Dream Bubble Bullshit",!0,r,H.a([],t),R.zG(),!1,!1,new Y.dG(null,"Prospit.png","Rewards/no_reward.png",null),1,null,null)},
eq:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.f
P.e0("moons set up "+H.t(t))
s=X.D
r=P.R
q=[s,r]
p=new H.o(0,null,null,null,null,null,0,q)
o=P.C
n=[o]
m=H.a(["Battlefield"],n)
H.a([],n)
l=N.W
r=[l,r]
k=new H.o(0,null,null,null,null,null,0,r)
k.i(0,$.eg,$.j)
k.i(0,$.cV,$.l)
k.i(0,$.dJ,$.B)
k.i(0,$.cK,$.l)
k.i(0,$.dH,$.l)
k.i(0,$.o7,$.j)
k.i(0,$.o6,$.j)
k.i(0,this.au(),$.B)
k.i(0,this.au(),$.B)
k.i(0,this.au(),$.B)
k.i(0,this.au(),$.B)
k.i(0,this.au(),$.B)
k.i(0,this.au(),$.B)
k.i(0,this.au(),$.B)
k.i(0,this.au(),$.B)
k.i(0,this.au(),$.B)
k.i(0,this.au(),$.B)
k.i(0,this.au(),$.B)
k.i(0,this.au(),$.B)
k.i(0,this.au(),$.B)
p.i(0,new X.D(m,k,null),$.aK)
o=new L.iI($.$get$qo(),Q.E(null,null,R.ez),!1,null,null,null,null,null,null,null,null,!1,!1,!1,null,null,null,null,null,!1,null,null,$.$get$h8(),null,null,null,Q.E(null,null,s),Q.E(null,null,l),P.cz(o,[Q.bD,N.W]))
o.dy="BattleField"
o.c$=this
o.e$=Q.pf(p,!0,null,s)
o.d2(this.v)
o.b=o.al($.$get$h_())
o.c=o.al($.$get$h0())
o.d=o.al($.$get$fZ())
s=o.al($.$get$o0())
o.k1=Q.dq(s,!1,!0,null,H.aM(s,"c1",0))
o.d1()
this.c=o
j=new H.o(0,null,null,null,null,null,0,q)
s=H.a(["Prospit"],n)
H.a([],n)
o=new H.o(0,null,null,null,null,null,0,r)
o.i(0,$.jy,$.l)
o.i(0,$.ck,$.B)
o.i(0,$.cg,$.l)
o.i(0,$.b6,$.l)
o.i(0,$.c9,$.B)
o.i(0,$.o7,$.j)
o.i(0,this.aC(),$.v)
o.i(0,this.aC(),$.v)
o.i(0,this.aC(),$.v)
o.i(0,this.aC(),$.v)
o.i(0,this.aC(),$.v)
o.i(0,this.aC(),$.v)
o.i(0,this.aC(),$.v)
o.i(0,this.aC(),$.v)
o.i(0,this.aC(),$.v)
o.i(0,this.aC(),$.v)
o.i(0,this.aC(),$.v)
o.i(0,this.aC(),$.v)
o.i(0,this.bu(),$.ac)
o.i(0,this.bu(),$.ac)
o.i(0,this.bu(),$.ac)
o.i(0,this.bt(),$.ac)
o.i(0,this.bt(),$.ac)
o.i(0,this.bt(),$.ac)
i=new H.o(0,null,null,null,null,null,0,q)
q=H.a(["Prospit"],n)
H.a([],n)
r=new H.o(0,null,null,null,null,null,0,r)
r.i(0,$.dw,$.l)
r.i(0,$.oc,$.l)
r.i(0,$.ck,$.B)
r.i(0,$.cK,$.l)
r.i(0,$.bW,$.B)
r.i(0,$.c7,$.l)
r.i(0,$.o6,$.j)
r.i(0,this.av(),$.B)
r.i(0,this.av(),$.B)
r.i(0,this.av(),$.B)
r.i(0,this.av(),$.B)
r.i(0,this.av(),$.B)
r.i(0,this.av(),$.B)
r.i(0,this.av(),$.B)
r.i(0,this.av(),$.B)
r.i(0,this.av(),$.B)
r.i(0,this.av(),$.B)
r.i(0,this.av(),$.B)
r.i(0,this.av(),$.B)
r.i(0,this.av(),$.B)
r.i(0,this.bu(),$.ac)
r.i(0,this.bu(),$.ac)
r.i(0,this.bu(),$.ac)
r.i(0,this.bt(),$.ac)
r.i(0,this.bt(),$.ac)
r.i(0,this.bt(),$.ac)
n=$.k
r.i(0,new R.d1("Be a Legitimate Business Player",!0,[new U.c("The "+n+" learns of a lucrative business opportunity. The BLACK QUEEN has all sorts of contraband laws. Everything from frogs to ice cream is so totally illegal. But that doesn't stop the right sort of Dersite from getting cravings, if you understand me. The "+n+" looks like they can be discreet. "),new U.c("The "+n+" runs afoul of the Authority Regulators. Through a frankly preposterous amount of running, parkour and misdirection, they finally escape, only to remember that they could have just flown away.  Dream selves sure are dumb!  "),new U.c("The "+n+" has decided to retire from a life of...legitimate business, highly lucrative though it was.  They use their earnings to set up a simple and refined Suit Shop, catering to only the most exclusive clientel. ")],H.a([],[U.c]),R.p3(),!1,!1,new Y.dG(null,"Prospit.png","Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.D(s,o,null),$.aK)
i.i(0,new X.D(q,r,null),$.aK)
this.d=R.rf("Prospit",j,this,$.pV,t,$.$get$rv())
this.e=R.rf("Derse",i,this,$.pX,J.cD(t,1),$.$get$rs())
for(t=this.r,h=0;!1;++h){if(h>=0)return H.S(t,h)
t[h].bW()}},
hC:function(){var t,s,r
t=this.db
if(t===C.r){t=T.d3
this.ad=P.bm(T.rA(),!0,t)
this.aH=P.bm(T.rA(),!0,t)
this.as=P.bm(L.tQ(),!0,L.cE)}else{s=T.d3
r=L.cE
if(t===C.B){this.ad=P.bm(T.rB(),!0,s)
this.aH=P.bm(T.rB(),!0,s)
this.as=P.bm(L.tR(),!0,r)}else{this.ad=P.bm(T.p9(),!0,s)
this.aH=P.bm(T.p9(),!0,s)
this.as=P.bm(L.pY(),!0,r)}}this.az=H.a([$.pW,$.iy],[L.cE])},
cf:function(){var t=this.r2
if(t>0.6)return"Human"
else if(t>0.3)return"Troll"
return"Mixed"},
ep:function(){this.N.ez()
this.N.ex()
this.N.ev()
this.N.es()},
u:function(a){return J.cm(this.f)},
gH:function(){return this.E}}
O.hT.prototype={}
D.m2.prototype={
$1:function(a){return a.ghq()},
$S:function(){return{func:1,args:[D.be]}}}
D.m3.prototype={
$1:function(a){return a.geD()},
$S:function(){return{func:1,args:[D.be]}}}
D.be.prototype={
c0:function(a,b){return b*this.r},
u:function(a){return this.a},
gM:function(a){return this.a},
ghq:function(){return this.d},
geD:function(){return this.e},
gdN:function(){return this.x},
ghj:function(){return this.y}}
D.ia.prototype={
c0:function(a,b){var t=a.ar($.pc)
return this.di(a,b)*(1+this.cx*t)}}
D.lw.prototype={
c0:function(a,b){var t
if(!!a.$ishW){t=a.c.id
if(t.length===0)return 0
return J.e1(new H.d0(t,new D.lx(),[H.J(t,0),null]).hv(0,new D.ly()),this.r)}return this.di(a,b)}}
D.lx.prototype={
$1:function(a){return J.tp(a)},
$S:function(){return{func:1,args:[N.cq]}}}
D.ly.prototype={
$2:function(a,b){return J.cD(a,b)},
$S:function(){return{func:1,args:[P.c6,P.c6]}}}
E.cr.prototype={
fJ:function(a){var t,s,r,q,p
for(t=a.a,s=t.ga9(),s=s.gP(s),r=this.a;s.A();){q=s.gI()
r.i(0,q,t.m(0,q))}for(t=a.b,s=t.length,r=this.b,p=0;p<t.length;t.length===s||(0,H.c2)(t),++p)r.push(t[p].bD())},
m:function(a,b){return this.ar(b)},
el:function(a,b){b.toString
this.a.i(0,a,b)
return b},
fp:function(a,b){var t,s
t=this.a
s=t.af(a)?t.m(0,a):0
if(typeof s!=="number")return s.ao()
s+=b
t.i(0,a,s)
return s},
p:function(a){var t,s
for(t=a.ga9(),t=t.gP(t);t.A();){s=t.gI()
this.ap(s,a.m(0,s))}},
ce:function(a){var t=this.b
return new H.bq(t,new E.m0(a),[H.J(t,0)])},
fA:function(a,b,c){var t
for(t=J.bx(c);t.A();)b=t.gI().fE(this,a,b)
return b},
fz:function(a,b,c){var t,s,r
for(t=J.bx(c),s=0;t.A();){r=J.tf(t.gI().dI(this,a,b),b)
if(typeof r!=="number")return H.br(r)
s+=r}return J.cD(b,s)},
cE:function(a,b,c){var t
for(t=J.bx(c);t.A();)b=t.gI().hk(this,a,b)
return b},
cD:function(a,b,c){var t
for(t=J.bx(c);t.A();)b=t.gI().fZ(this,a,b)
return b},
fP:function(a,b){var t,s,r
t=this.a
t=t.af(a)?t.m(0,a):0
s=J.nM(t,a.ghj(),a.z)
r=this.ce(a)
return J.nM(this.cD(a,this.cE(a,this.fz(a,a.c0(this,this.fA(a,s,r)),r),r),r),a.Q,a.ch)},
ar:function(a){return this.fP(a,null)},
gP:function(a){var t=this.a.ga9()
return t.gP(t)},
gt:function(a){var t=this.a
return t.gt(t)},
fq:function(a,b,c){a.b=b
a.a=c
this.b.push(a)}}
E.hR.prototype={
$asG:function(){return[D.be]},
$isG:1}
E.m0.prototype={
$1:function(a){return J.nN(a.gH(),this.a)},
$S:function(){return{func:1,args:[A.cG]}}}
E.fo.prototype={
gH:function(){return this.a$},
sH:function(a){var t=J.aZ(a)
if(!!t.$isfo){this.sH(a.a$)
return}else if(!!t.$iscr){t=this.c_()
t.fJ(a)
this.a$=t
return}throw H.u("Invalid type for StatOwner.stats in "+this.u(0)+": "+t.u(a)+" ("+H.t(t.ga_(a))+")")}}
E.fj.prototype={}
E.eu.prototype={
cE:function(a,b,c){var t
b=this.eJ(a,b,c)
if(a.d){t=this.c.b
if(t===C.y)return J.e1(b,0.667)
else if(t===C.Q)return J.e1(b,1.5)}return b}}
E.hW.prototype={
ce:function(a){var t,s,r
t=this.eK(a)
s=P.bm(t,!0,H.J(t,0))
t=this.c
r=t.gbB().gcm()
C.a.T(s,new H.bq(r,new E.ll(a),[H.J(r,0)]))
t=t.ac.gcm()
C.a.T(s,new H.bq(t,new E.lm(a),[H.J(t,0)]))
return s},
$aseu:function(){return[Q.ci]},
$asfj:function(){return[Q.ci]},
$asG:function(){return[D.be]}}
E.ll.prototype={
$1:function(a){return J.nN(a.gH(),this.a)},
$S:function(){return{func:1,args:[A.cG]}}}
E.lm.prototype={
$1:function(a){return J.nN(a.gH(),this.a)},
$S:function(){return{func:1,args:[A.cG]}}}
E.iR.prototype={
cD:function(a,b,c){var t
b=this.eI(a,b,c)
t=this.c.ry
if(t!=null)if(!a.f){t=t.a$.ar(a)
b=J.cD(b,t)}return b},
$aseu:function(){return[F.dt]},
$asfj:function(){return[F.dt]},
$asG:function(){return[D.be]}}
Q.bD.prototype={
d8:function(a){var t,s,r,q,p,o
t=this.d9()
s=C.d.a3(a,0,1)*t
for(r=J.bx(this.gbe()),q=0;r.A();){p=r.gI()
o=p.gbf()
if(typeof o!=="number")return H.br(o)
q+=o
if(s<=q)return p.a}return},
d9:function(){var t,s,r
for(t=J.bx(this.gbe()),s=0;t.A();){r=t.gI().gbf()
if(typeof r!=="number")return H.br(r)
s+=r}return s},
k:function(a,b){return b},
u:function(a){return J.cm(this.gbe())},
aD:function(a,b){return Q.my(this,b,H.aM(this,"bD",0))},
aL:function(a,b){return Q.eC(this,b,H.aM(this,"bD",0),null)},
a5:function(a,b){return Q.dq(this,!1,!0,null,H.aM(this,"bD",0))},
aM:function(a){return this.a5(a,!0)},
$isG:1,
$asG:null}
Q.ft.prototype={
d8:function(a){var t,s,r,q,p,o,n,m
t=this.d9()
s=C.d.a3(a,0,1)*t
for(r=this.b,q=r.length,p=0,o=0;o<r.length;r.length===q||(0,H.c2)(r),++o){n=r[o]
m=n.gbf()
if(typeof m!=="number")return H.br(m)
p+=m
if(s<=p)return n.a}return},
dT:function(){var t,s,r,q,p,o
t=P.cz(H.J(this,0),P.R)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.c2)(s),++q){p=s[q]
o=J.cj(p)
if(!t.af(o.gaQ(p)))t.i(0,o.gaQ(p),0)
o=o.gaQ(p)
t.i(0,o,J.cD(t.m(0,o),p.gbf()))}C.a.st(this.b,0)
this.fo(t.ga9(),t.gaw(t))},
gbe:function(){return this.b},
fn:function(a,b,c){C.a.h(this.b,new Q.h(b,this.k(b,J.nP(c)),this.$ti))},
fo:function(a,b){var t,s,r,q,p,o,n,m
t=this.b
s=t.length
C.a.st(t,s+a.gt(a))
r=a.gP(a)
q=b.gP(b)
for(t=this.$ti;r.A();){p=q.A()?q.gI():1
o=this.b
n=r.gI()
m=this.k(n,p)
if(s>=o.length)return H.S(o,s)
o[s]=new Q.h(n,m,t);++s}},
hD:function(a,b){var t=this.b
C.a.bk(t,"retainWhere")
C.a.dD(t,new Q.mw(this,b),!1)
return},
hA:function(a,b){var t=this.b
C.a.bk(t,"removeWhere")
C.a.dD(t,new Q.mv(this,b),!0)
return},
m:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.S(t,b)
return J.dr(t[b])},
i:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.S(t,b)
t[b]=new Q.h(c,s,this.$ti)},
gt:function(a){return this.b.length},
st:function(a,b){C.a.st(this.b,b)
return b},
u:function(a){return P.f2(this.b,"[","]")},
aD:function(a,b){return Q.my(this,b,H.J(this,0))},
aL:function(a,b){return Q.eC(this,b,H.J(this,0),null)},
a5:function(a,b){return Q.dq(this,!1,!0,null,H.J(this,0))},
aM:function(a){return this.a5(a,!0)},
eY:function(a,b,c){var t,s
this.a=a
t=[[Q.h,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.i6.prototype={$asbD:null,$asG:null,$asM:null,$asP:null,$isM:1,$isP:1,$isG:1}
Q.mw.prototype={
$1:function(a){return this.b.$1(J.dr(a))},
$S:function(){return H.eI(function(a){return{func:1,args:[[Q.h,a]]}},this.a,"ft")}}
Q.mv.prototype={
$1:function(a){return this.b.$1(J.dr(a))},
$S:function(){return H.eI(function(a){return{func:1,args:[[Q.h,a]]}},this.a,"ft")}}
Q.h.prototype={
u:function(a){return"("+H.t(this.a)+" @ "+H.t(this.b)+")"},
gaQ:function(a){return this.a},
gbf:function(){return this.b}}
Q.c1.prototype={
gbe:function(){return this.b},
gP:function(a){var t=new Q.mu(null,[H.aM(this,"c1",0)])
t.a=J.bx(this.b)
return t},
gt:function(a){return J.cU(this.b)},
u:function(a){return J.cm(this.b)},
aD:function(a,b){return Q.my(this,b,H.aM(this,"c1",0))},
aL:function(a,b){return Q.eC(this,b,H.aM(this,"c1",0),null)},
a5:function(a,b){return Q.dq(this,!1,!0,null,H.aM(this,"c1",0))},
aM:function(a){return this.a5(a,!0)}}
Q.eB.prototype={$asbD:null,$asG:null,$isG:1}
Q.mu.prototype={
gI:function(){return J.dr(this.a.gI())},
A:function(){return this.a.A()}}
Q.i8.prototype={}
Q.mz.prototype={
$1:function(a){return this.b.$1(J.dr(a))},
$S:function(){return H.eI(function(a){return{func:1,args:[[Q.h,a]]}},this,"i8")}}
Q.i7.prototype={
$asc1:function(a,b){return[b]},
$aseB:function(a,b){return[b]},
$asbD:function(a,b){return[b]},
$asG:function(a,b){return[b]}}
Q.mx.prototype={
$1:function(a){return new Q.h(this.c.$1(J.dr(a)),a.gbf(),[this.b])},
$S:function(){return H.eI(function(a,b){return{func:1,args:[[Q.h,a]]}},this,"i7")}}
Q.fr.prototype={
$asc1:function(a,b){return[a]},
$aseB:function(a,b){return[a]},
$asbD:function(a,b){return[a]},
$asG:function(a,b){return[a]}}
Q.m5.prototype={
$1:function(a){var t=J.dr(a)
return H.pp(t,this.a)},
$S:function(){return H.eI(function(a,b){return{func:1,args:[[Q.h,b]]}},this,"fr")}}
Q.m6.prototype={
$1:function(a){return new Q.h(J.dr(a),a.gbf(),[this.a])},
$S:function(){return H.eI(function(a,b){return{func:1,args:[[Q.h,b]]}},this,"fr")}}
J.Y.prototype.eF=J.Y.prototype.u
J.f3.prototype.eH=J.f3.prototype.u
P.bZ.prototype.dh=P.bZ.prototype.ax
P.G.prototype.eG=P.G.prototype.aD
W.cn.prototype.cp=W.cn.prototype.ag
W.fz.prototype.eL=W.fz.prototype.aZ
E.ch.prototype.eE=E.ch.prototype.cH
D.be.prototype.di=D.be.prototype.c0
E.cr.prototype.ap=E.cr.prototype.el
E.cr.prototype.bw=E.cr.prototype.fp
E.cr.prototype.eK=E.cr.prototype.ce
E.cr.prototype.eJ=E.cr.prototype.cE
E.cr.prototype.eI=E.cr.prototype.cD;(function installTearOffs(){installTearOff(H.eE.prototype,"ghf",0,0,0,null,["$0"],["cb"],2)
installTearOff(H.d7.prototype,"gee",0,0,0,null,["$1"],["aE"],4)
installTearOff(H.dV.prototype,"gfR",0,0,0,null,["$1"],["b_"],4)
installTearOff(P,"AP",1,0,0,null,["$1"],["Ax"],3)
installTearOff(P,"AQ",1,0,0,null,["$1"],["Ay"],3)
installTearOff(P,"AR",1,0,0,null,["$1"],["Az"],3)
installTearOff(P,"t1",1,0,0,null,["$0"],["AN"],2)
installTearOff(P.ic.prototype,"gcG",0,1,0,null,["$1"],["U"],8)
installTearOff(P,"ps",1,0,0,null,["$2"],["tY"],11)
installTearOff(P,"AT",1,0,0,null,["$1"],["e0"],1)
installTearOff(W,"B_",1,0,0,null,["$4"],["AB"],7)
installTearOff(W,"B0",1,0,0,null,["$4"],["AC"],7)
var t
installTearOff(t=W.fO.prototype,"gfW",0,1,0,null,["$1"],["fX"],1)
installTearOff(t,"gh5",0,0,0,null,["$1"],["dZ"],1)
installTearOff(t,"ghP",0,0,0,null,["$1"],["hQ"],1)
installTearOff(W.e6.prototype,"gaQ",0,1,0,null,["$1"],["aK"],5)
installTearOff(W.fU.prototype,"gaQ",0,1,0,null,["$1"],["aK"],5)
installTearOff(W.h9.prototype,"gaQ",0,1,0,null,["$1"],["aK"],9)
installTearOff(W.hd.prototype,"gaQ",0,1,0,null,["$1"],["aK"],6)
installTearOff(W.hZ.prototype,"gaQ",0,1,0,null,["$1"],["aK"],6)
installTearOff(W.fy.prototype,"gaQ",0,1,0,null,["$1"],["aK"],10)
installTearOff(A,"u9",1,0,0,null,["$5"],["u7"],12)
installTearOff(T,"qw",1,0,0,null,["$0"],["B8"],2)
installTearOff(R,"dR",1,0,0,null,["$1"],["zY"],0)
installTearOff(R,"p3",1,0,0,null,["$1"],["zL"],0)
installTearOff(R,"zH",1,0,0,null,["$1"],["zN"],0)
installTearOff(R,"zG",1,0,0,null,["$1"],["zM"],0)
installTearOff(R,"zF",1,0,0,null,["$1"],["zJ"],0)
installTearOff(R,"rp",1,0,0,null,["$1"],["zX"],0)
installTearOff(R,"bN",1,0,0,null,["$1"],["zW"],0)
installTearOff(R,"p5",1,0,0,null,["$1"],["zV"],0)
installTearOff(R,"ro",1,0,0,null,["$1"],["zT"],0)
installTearOff(R,"hX",1,0,0,null,["$1"],["zS"],0)
installTearOff(R,"dQ",1,0,0,null,["$1"],["zP"],0)
installTearOff(R,"dz",1,0,0,null,["$1"],["zR"],0)
installTearOff(R,"ew",1,0,0,null,["$1"],["zU"],0)
installTearOff(R,"p4",1,0,0,null,["$1"],["zQ"],0)
installTearOff(R,"w",1,0,0,null,["$1"],["zK"],0)
installTearOff(R,"zI",1,0,0,null,["$1"],["zO"],0)})();(function inheritance(){inherit(P.bi,null)
var t=P.bi
inherit(H.oR,t)
inherit(J.Y,t)
inherit(J.e2,t)
inherit(P.G,t)
inherit(H.hD,t)
inherit(P.hx,t)
inherit(H.ha,t)
inherit(H.e5,t)
inherit(H.n2,t)
inherit(H.eE,t)
inherit(H.mP,t)
inherit(H.dW,t)
inherit(H.n1,t)
inherit(H.mK,t)
inherit(H.ex,t)
inherit(H.mk,t)
inherit(H.db,t)
inherit(H.d7,t)
inherit(H.dV,t)
inherit(H.lv,t)
inherit(H.mn,t)
inherit(P.e8,t)
inherit(H.fW,t)
inherit(H.ie,t)
inherit(H.d4,t)
inherit(H.o,t)
inherit(H.kB,t)
inherit(H.kD,t)
inherit(H.hB,t)
inherit(H.i2,t)
inherit(H.ng,t)
inherit(P.ib,t)
inherit(P.nm,t)
inherit(P.mT,t)
inherit(P.mV,t)
inherit(P.lQ,t)
inherit(P.n_,t)
inherit(P.d6,t)
inherit(P.dm,t)
inherit(P.fi,t)
inherit(P.bZ,t)
inherit(P.n0,t)
inherit(P.cS,t)
inherit(P.bA,t)
inherit(P.eQ,t)
inherit(P.c6,t)
inherit(P.dd,t)
inherit(P.le,t)
inherit(P.i1,t)
inherit(P.mR,t)
inherit(P.he,t)
inherit(P.j9,t)
inherit(P.M,t)
inherit(P.es,t)
inherit(P.hG,t)
inherit(P.C,t)
inherit(P.fp,t)
inherit(W.fO,t)
inherit(W.iW,t)
inherit(W.mJ,t)
inherit(W.fw,t)
inherit(W.dl,t)
inherit(W.hL,t)
inherit(W.fz,t)
inherit(W.nh,t)
inherit(W.hb,t)
inherit(W.dx,t)
inherit(W.nk,t)
inherit(W.nb,t)
inherit(W.ig,t)
inherit(P.mZ,t)
inherit(P.n4,t)
inherit(P.da,t)
inherit(T.fG,t)
inherit(B.el,t)
inherit(S.iu,t)
inherit(N.W,t)
inherit(L.cE,t)
inherit(A.hQ,t)
inherit(T.d3,t)
inherit(O.cN,t)
inherit(M.hO,t)
inherit(M.fK,t)
inherit(X.fY,t)
inherit(X.fL,t)
inherit(M.eT,t)
inherit(D.cW,t)
inherit(D.h7,t)
inherit(D.eY,t)
inherit(Z.fX,t)
inherit(E.fk,t)
inherit(E.hS,t)
inherit(E.I,t)
inherit(Z.k_,t)
inherit(B.k2,t)
inherit(A.a7,t)
inherit(A.hP,t)
inherit(T.f1,t)
inherit(X.cO,t)
inherit(Y.kY,t)
inherit(U.c,t)
inherit(Y.dS,t)
inherit(Y.lJ,t)
inherit(K.lN,t)
inherit(K.kP,t)
inherit(G.lO,t)
inherit(X.D,t)
inherit(G.Z,t)
inherit(B.mC,t)
inherit(A.cG,t)
inherit(A.ct,t)
inherit(Z.cx,t)
inherit(Z.jQ,t)
inherit(Z.X,t)
inherit(F.eq,t)
inherit(F.hE,t)
inherit(D.ls,t)
inherit(A.d2,t)
inherit(N.cq,t)
inherit(L.fM,t)
inherit(L.dn,t)
inherit(O.hT,t)
inherit(D.be,t)
inherit(E.hR,t)
inherit(E.fo,t)
inherit(Q.bD,t)
inherit(Q.h,t)
t=J.Y
inherit(J.kk,t)
inherit(J.hA,t)
inherit(J.f3,t)
inherit(J.dM,t)
inherit(J.ep,t)
inherit(J.dN,t)
inherit(H.fb,t)
inherit(H.er,t)
inherit(W.eS,t)
inherit(W.fI,t)
inherit(W.iQ,t)
inherit(W.hf,t)
inherit(W.T,t)
inherit(W.fS,t)
inherit(W.j0,t)
inherit(W.fT,t)
inherit(W.fU,t)
inherit(W.hg,t)
inherit(W.kF,t)
inherit(W.l7,t)
inherit(W.l8,t)
inherit(W.hh,t)
inherit(W.mL,t)
inherit(W.hi,t)
inherit(P.cH,t)
inherit(P.hj,t)
inherit(P.cI,t)
inherit(P.hk,t)
inherit(P.lz,t)
t=J.f3
inherit(J.lk,t)
inherit(J.dU,t)
inherit(J.dO,t)
inherit(R.eZ,t)
inherit(J.oQ,J.dM)
t=J.ep
inherit(J.hz,t)
inherit(J.hy,t)
t=P.G
inherit(H.P,t)
inherit(H.f7,t)
inherit(H.bq,t)
inherit(H.nf,t)
inherit(P.hw,t)
t=H.P
inherit(H.dP,t)
inherit(H.kC,t)
inherit(P.mU,t)
t=H.dP
inherit(H.m4,t)
inherit(H.d0,t)
inherit(P.kE,t)
inherit(H.fV,H.f7)
t=P.hx
inherit(H.hF,t)
inherit(H.cR,t)
inherit(Q.mu,t)
t=H.e5
inherit(H.nI,t)
inherit(H.nJ,t)
inherit(H.mY,t)
inherit(H.mQ,t)
inherit(H.k4,t)
inherit(H.k5,t)
inherit(H.n3,t)
inherit(H.ml,t)
inherit(H.mm,t)
inherit(H.nL,t)
inherit(H.nB,t)
inherit(H.nC,t)
inherit(H.nD,t)
inherit(H.nE,t)
inherit(H.nF,t)
inherit(H.mc,t)
inherit(H.km,t)
inherit(H.kl,t)
inherit(H.nx,t)
inherit(H.ny,t)
inherit(H.nz,t)
inherit(P.mG,t)
inherit(P.mF,t)
inherit(P.mH,t)
inherit(P.mI,t)
inherit(P.nn,t)
inherit(P.n6,t)
inherit(P.n7,t)
inherit(P.mW,t)
inherit(P.kK,t)
inherit(P.j4,t)
inherit(P.j5,t)
inherit(W.np,t)
inherit(W.la,t)
inherit(W.l9,t)
inherit(W.nd,t)
inherit(W.ne,t)
inherit(W.nj,t)
inherit(W.nl,t)
inherit(L.iz,t)
inherit(L.iA,t)
inherit(L.iB,t)
inherit(A.jv,t)
inherit(A.jt,t)
inherit(A.ju,t)
inherit(D.jL,t)
inherit(E.iD,t)
inherit(E.iE,t)
inherit(B.k3,t)
inherit(A.kj,t)
inherit(A.ki,t)
inherit(A.kh,t)
inherit(M.ks,t)
inherit(M.kt,t)
inherit(M.ku,t)
inherit(M.kv,t)
inherit(T.lF,t)
inherit(T.lG,t)
inherit(T.lE,t)
inherit(U.lX,t)
inherit(G.kf,t)
inherit(G.kd,t)
inherit(G.kg,t)
inherit(G.ke,t)
inherit(A.nq,t)
inherit(Y.mD,t)
inherit(D.m2,t)
inherit(D.m3,t)
inherit(D.lx,t)
inherit(D.ly,t)
inherit(E.m0,t)
inherit(E.ll,t)
inherit(E.lm,t)
inherit(Q.mw,t)
inherit(Q.mv,t)
inherit(Q.mz,t)
inherit(Q.mx,t)
inherit(Q.m5,t)
inherit(Q.m6,t)
t=H.mK
inherit(H.eF,t)
inherit(H.fA,t)
t=P.e8
inherit(H.hM,t)
inherit(H.kn,t)
inherit(H.mp,t)
inherit(H.iS,t)
inherit(H.lD,t)
inherit(P.hN,t)
inherit(P.d9,t)
inherit(P.bp,t)
inherit(P.i5,t)
inherit(P.c_,t)
inherit(P.bR,t)
inherit(P.iY,t)
t=H.mc
inherit(H.m1,t)
inherit(H.eN,t)
t=H.er
inherit(H.kZ,t)
inherit(H.hI,t)
t=H.hI
inherit(H.fe,t)
inherit(H.ff,t)
inherit(H.fg,H.fe)
inherit(H.fc,H.fg)
inherit(H.fh,H.ff)
inherit(H.fd,H.fh)
t=H.fc
inherit(H.l_,t)
inherit(H.l0,t)
t=H.fd
inherit(H.l1,t)
inherit(H.l2,t)
inherit(H.l3,t)
inherit(H.l4,t)
inherit(H.l5,t)
inherit(H.hJ,t)
inherit(H.l6,t)
inherit(P.n5,P.nm)
inherit(P.id,H.o)
inherit(P.lP,P.lQ)
inherit(P.mX,P.lP)
inherit(P.ic,P.mX)
inherit(P.hC,P.fi)
t=P.c6
inherit(P.R,t)
inherit(P.a6,t)
t=P.d9
inherit(P.fl,t)
inherit(P.k0,t)
t=W.eS
inherit(W.aR,t)
inherit(W.kN,t)
inherit(W.fa,t)
inherit(W.i9,t)
inherit(W.nc,t)
t=W.aR
inherit(W.cn,t)
inherit(W.dE,t)
inherit(W.fR,t)
inherit(W.eD,t)
inherit(W.mM,t)
t=W.cn
inherit(W.aS,t)
inherit(P.bP,t)
t=W.aS
inherit(W.iv,t)
inherit(W.iw,t)
inherit(W.iH,t)
inherit(W.e4,t)
inherit(W.iP,t)
inherit(W.fQ,t)
inherit(W.j7,t)
inherit(W.jM,t)
inherit(W.hd,t)
inherit(W.jX,t)
inherit(W.ek,t)
inherit(W.k1,t)
inherit(W.kp,t)
inherit(W.kr,t)
inherit(W.kA,t)
inherit(W.kJ,t)
inherit(W.f9,t)
inherit(W.kO,t)
inherit(W.kQ,t)
inherit(W.lc,t)
inherit(W.ld,t)
inherit(W.lf,t)
inherit(W.li,t)
inherit(W.lr,t)
inherit(W.hZ,t)
inherit(W.lT,t)
inherit(W.eA,t)
inherit(W.i4,t)
inherit(W.ma,t)
inherit(W.mb,t)
inherit(W.fs,t)
inherit(W.mf,t)
inherit(W.mS,t)
inherit(W.e6,W.hf)
t=W.T
inherit(W.j_,t)
inherit(W.lY,t)
inherit(W.ca,W.fI)
inherit(W.hl,W.hg)
inherit(W.h9,W.hl)
inherit(W.kR,W.fa)
inherit(W.cB,P.hC)
inherit(W.hm,W.hh)
inherit(W.hK,W.hm)
inherit(W.lR,W.fR)
inherit(W.mN,W.fT)
inherit(W.hn,W.hi)
inherit(W.fy,W.hn)
inherit(W.mO,W.mJ)
inherit(W.ni,W.fz)
t=P.bP
inherit(P.cb,t)
inherit(P.dC,t)
inherit(P.ja,t)
inherit(P.jb,t)
inherit(P.jc,t)
inherit(P.jd,t)
inherit(P.je,t)
inherit(P.jf,t)
inherit(P.jg,t)
inherit(P.jh,t)
inherit(P.ji,t)
inherit(P.jj,t)
inherit(P.jk,t)
inherit(P.jl,t)
inherit(P.jm,t)
inherit(P.jn,t)
inherit(P.jo,t)
inherit(P.jp,t)
inherit(P.jN,t)
inherit(P.kL,t)
inherit(P.kM,t)
inherit(P.lj,t)
inherit(P.fn,t)
inherit(P.m9,t)
inherit(P.mr,t)
inherit(P.fv,t)
inherit(P.n8,t)
inherit(P.n9,t)
inherit(P.na,t)
t=P.cb
inherit(P.is,t)
inherit(P.jY,t)
inherit(P.m7,t)
inherit(P.dT,t)
inherit(P.mq,t)
inherit(P.ho,P.hj)
inherit(P.kx,P.ho)
inherit(P.hp,P.hk)
inherit(P.lb,P.hp)
inherit(P.mh,P.dT)
inherit(T.fF,P.hw)
t=B.el
inherit(S.it,t)
inherit(M.iF,t)
inherit(A.iV,t)
inherit(M.iX,t)
inherit(V.j1,t)
inherit(U.jq,t)
inherit(N.ko,t)
inherit(F.kW,t)
inherit(G.lo,t)
inherit(Q.lC,t)
inherit(N.lV,t)
inherit(D.md,t)
inherit(V.me,t)
inherit(F.mB,t)
t=N.W
inherit(T.iZ,t)
inherit(Q.e7,t)
inherit(R.ev,t)
t=T.iZ
inherit(K.bE,t)
inherit(S.bs,t)
inherit(T.bO,t)
inherit(M.bn,t)
inherit(A.lh,A.hQ)
inherit(L.al,A.lh)
t=T.d3
inherit(O.iG,t)
inherit(Z.iN,t)
inherit(Y.jR,t)
inherit(Y.jS,t)
inherit(B.jV,t)
inherit(S.kq,t)
inherit(Z.kG,t)
inherit(S.kH,t)
inherit(U.kI,t)
inherit(E.kV,t)
inherit(V.lg,t)
inherit(N.lq,t)
inherit(N.lB,t)
inherit(E.lH,t)
inherit(Y.lK,t)
inherit(L.lL,t)
inherit(S.lM,t)
inherit(R.m8,t)
inherit(U.mi,t)
inherit(E.mt,t)
inherit(M.mA,t)
t=O.cN
inherit(O.fq,t)
inherit(O.dD,t)
t=O.fq
inherit(Y.mg,t)
inherit(Y.iO,t)
inherit(M.f4,M.hO)
t=M.f4
inherit(L.iI,t)
inherit(R.hH,t)
t=L.cE
inherit(T.iK,t)
inherit(T.iM,t)
inherit(U.j2,t)
inherit(Z.j3,t)
inherit(L.jr,t)
inherit(O.jO,t)
inherit(T.jU,t)
inherit(X.jW,t)
inherit(Q.kw,t)
inherit(K.ky,t)
inherit(G.kz,t)
inherit(L.kS,t)
inherit(V.kT,t)
inherit(S.kU,t)
inherit(E.lt,t)
inherit(L.lu,t)
inherit(Z.lA,t)
inherit(Y.lI,t)
inherit(L.lS,t)
inherit(O.lU,t)
inherit(N.lW,t)
inherit(U.m_,t)
inherit(N.mj,t)
inherit(Q.ms,t)
inherit(S.fN,S.bs)
t=Q.e7
inherit(Q.jT,t)
inherit(Q.j6,t)
inherit(D.jK,D.eY)
t=O.dD
inherit(V.jP,t)
inherit(Q.jZ,t)
inherit(M.lZ,t)
inherit(B.mE,t)
inherit(E.ch,E.hS)
t=E.I
inherit(E.eM,t)
inherit(E.iC,t)
inherit(Q.ln,Q.jZ)
inherit(A.i3,A.hP)
t=E.ch
inherit(F.kX,t)
inherit(Q.ci,t)
t=F.kX
inherit(F.dt,t)
inherit(F.i0,t)
inherit(F.y,t)
inherit(U.a9,U.c)
t=R.ev
inherit(R.a1,t)
inherit(R.U,t)
inherit(R.aa,t)
inherit(R.d1,t)
inherit(R.ez,t)
inherit(R.by,R.aa)
t=Y.dS
inherit(Y.O,t)
inherit(Y.a3,t)
inherit(Y.iJ,t)
inherit(Y.bt,t)
inherit(Y.iT,t)
inherit(Y.hU,t)
inherit(Y.hc,t)
inherit(Y.hV,t)
inherit(Y.dG,t)
t=Y.O
inherit(Y.cF,t)
inherit(Y.bB,t)
inherit(U.af,A.a7)
t=G.Z
inherit(G.aT,t)
inherit(G.bC,t)
inherit(G.d,t)
inherit(G.ag,G.bC)
inherit(A.fJ,A.cG)
t=D.be
inherit(D.ia,t)
inherit(D.lw,t)
inherit(E.cr,E.hR)
inherit(E.fj,E.cr)
inherit(E.eu,E.fj)
t=E.eu
inherit(E.hW,t)
inherit(E.iR,t)
t=Q.bD
inherit(Q.i6,t)
inherit(Q.eB,t)
inherit(Q.ft,Q.i6)
inherit(Q.c1,Q.eB)
t=Q.c1
inherit(Q.i8,t)
inherit(Q.i7,t)
inherit(Q.fr,t)
mixin(H.fe,P.bZ)
mixin(H.fg,H.ha)
mixin(H.ff,P.bZ)
mixin(H.fh,H.ha)
mixin(P.fi,P.bZ)
mixin(W.hf,W.iW)
mixin(W.hg,P.bZ)
mixin(W.hl,W.dl)
mixin(W.hh,P.bZ)
mixin(W.hm,W.dl)
mixin(W.hi,P.bZ)
mixin(W.hn,W.dl)
mixin(P.hj,P.bZ)
mixin(P.ho,W.dl)
mixin(P.hk,P.bZ)
mixin(P.hp,W.dl)
mixin(E.hS,E.fo)
mixin(A.hP,P.dm)
mixin(M.hO,D.cW)
mixin(A.hQ,P.dm)
mixin(E.hR,P.dm)
mixin(Q.i6,P.bZ)
mixin(Q.eB,P.dm)})();(function constants(){C.p=W.e4.prototype
C.f=W.fQ.prototype
C.C=J.Y.prototype
C.a=J.dM.prototype
C.i=J.hy.prototype
C.b=J.hz.prototype
C.u=J.hA.prototype
C.d=J.ep.prototype
C.e=J.dN.prototype
C.J=J.dO.prototype
C.x=J.lk.prototype
C.R=W.eA.prototype
C.z=W.i4.prototype
C.o=J.dU.prototype
C.j=new W.fO()
C.A=new P.le()
C.q=new P.mZ()
C.k=new P.n5()
C.r=new L.fM(0,"CanonLevel.CANON_ONLY")
C.B=new L.fM(1,"CanonLevel.FANON_ONLY")
C.t=new P.dd(0)
C.D=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.v=function(hooks) { return hooks; }
C.E=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.F=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.G=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.w=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.H=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.I=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.K=H.a(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.C])
C.L=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.M=makeConstList([])
C.l=H.a(makeConstList(["bind","if","ref","repeat","syntax"]),[P.C])
C.m=H.a(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.C])
C.N=new F.eq(0,"LogLevel.ERROR")
C.O=new F.eq(1,"LogLevel.WARN")
C.h=new F.eq(2,"LogLevel.INFO")
C.P=new F.eq(3,"LogLevel.VERBOSE")
C.c=new E.fk(0,"ProphecyState.NONE")
C.y=new E.fk(1,"ProphecyState.ACTIVE")
C.Q=new E.fk(2,"ProphecyState.FULLFILLED")
C.S=H.bQ("da")
C.T=H.bQ("Bj")
C.n=H.bQ("Bk")
C.U=H.bQ("Bl")
C.V=H.bQ("Bm")
C.W=H.bQ("Bo")
C.X=H.bQ("Bp")
C.Y=H.bQ("Bq")
C.Z=H.bQ("rb")
C.a_=H.bQ("es")
C.a0=H.bQ("C")
C.a1=H.bQ("Br")
C.a2=H.bQ("Bs")
C.a3=H.bQ("Bt")
C.a4=H.bQ("Bu")
C.a5=H.bQ("cS")
C.a6=H.bQ("R")
C.a7=H.bQ("a6")
C.a8=H.bQ("c6")})();(function staticFields(){$.rk="$cachedFunction"
$.rl="$cachedInvocation"
$.dc=0
$.eO=null
$.pZ=null
$.py=null
$.rY=null
$.tb=null
$.ns=null
$.nA=null
$.pC=null
$.eG=null
$.fB=null
$.fC=null
$.pm=!1
$.fu=C.k
$.qf=0
$.du=null
$.nU=null
$.qd=null
$.qc=null
$.q9=null
$.q8=null
$.q7=null
$.qa=null
$.q6=null
$.iy=null
$.pW=null
$.tx=null
$.pU=null
$.pT=null
$.tB=null
$.tG=null
$.pV=null
$.pX=null
$.tJ=null
$.tC=null
$.tE=null
$.ty=null
$.tF=null
$.tH=null
$.tK=null
$.tM=null
$.tN=null
$.tL=null
$.tD=null
$.tz=null
$.tO=null
$.tA=null
$.tP=null
$.tI=null
$.aq="accent"
$.as="aspect1"
$.ar="aspect2"
$.aC="shoe1"
$.aB="shoe2"
$.au="cloak1"
$.av="cloak2"
$.at="cloak3"
$.az="shirt1"
$.ay="shirt2"
$.ax="pants1"
$.aw="pants2"
$.ac=1300
$.j=3
$.l=2
$.B=1
$.v=0.1
$.ub=1
$.ua=-1
$.oa=null
$.dv=null
$.qi=null
$.dI=null
$.eh=null
$.h2=null
$.o2=null
$.jC=null
$.jG=null
$.h3=null
$.h1=null
$.qk=null
$.jH=null
$.ed=null
$.dj=null
$.qj=null
$.jw=null
$.jI=null
$.ef=null
$.o7=null
$.o6=null
$.ql=null
$.eX=null
$.e9=null
$.c9=null
$.cL=null
$.ee=null
$.jF=null
$.c3=null
$.c7=null
$.o4=null
$.eV=null
$.dH=null
$.u8=null
$.eU=null
$.cM=null
$.dk=null
$.h6=null
$.cV=null
$.eg=null
$.bW=null
$.jE=null
$.qh=null
$.b6=null
$.cg=null
$.cv=null
$.cf=null
$.h5=null
$.c8=null
$.df=null
$.cK=null
$.ec=null
$.de=null
$.dg=null
$.jx=null
$.dK=null
$.eW=null
$.jD=null
$.qg=null
$.cu=null
$.cw=null
$.bf=null
$.ea=null
$.dw=null
$.o9=null
$.jz=null
$.h4=null
$.jy=null
$.ck=null
$.ob=null
$.o3=null
$.oc=null
$.eb=null
$.co=null
$.di=null
$.dh=null
$.ei=null
$.o5=null
$.o8=null
$.qm=null
$.jA=null
$.jB=null
$.dJ=null
$.of=null
$.uc=null
$.qr=null
$.qq=null
$.ud=null
$.oe=null
$.oh=0
$.ul=null
$.ue=null
$.uf=null
$.ug=null
$.uh=null
$.ui=null
$.uj=null
$.uk=null
$.un=null
$.uo=null
$.up=null
$.uq=null
$.ur=null
$.us=null
$.um=null
$.ta=null
$.oX=null
$.oY=null
$.oZ=null
$.p_=null
$.et=null
$.zz=null
$.k="PLAYER1TAG"
$.dA="PLAYER2TAG"
$.x="DENIZENTAG"
$.q="CONSORTTAG"
$.L="CONSORTSOUNDTAG"
$.aX="MCGUFFINTAG"
$.aj="TAGPHYSICALMCGUFFIN"
$.cc="TAGWEAPON"
$.A7=null
$.Ai=null
$.A2=null
$.A6=null
$.Aa=null
$.Ae=null
$.Ac=null
$.Ak=null
$.Aj=null
$.Ad=null
$.rz=null
$.A9=null
$.ry=null
$.Ag=null
$.Af=null
$.Ah=null
$.A5=null
$.A4=null
$.rx=null
$.Ab=null
$.A8=null
$.A3=null
$.t2=!1
$.pt=null
$.AU=!1
$.pa=null
$.pb=null
$.At=13
$.aK=3
$.bJ=2
$.aL=1
$.As="Class"
$.Ar="Aspect"
$.rH="Interest"
$.oM=0
$.H=1
$.a5=3
$.F=4
$.oL=6
$.oN=7
$.ae=8
$.p=9
$.m=10
$.qI=null
$.eo=null
$.ou=null
$.oF=null
$.oB=null
$.ok=null
$.op=null
$.oA=null
$.f0=null
$.qG=null
$.r3=null
$.qB=null
$.qH=null
$.oq=null
$.oz=null
$.r5=null
$.r7=null
$.ol=null
$.ht=null
$.hr=null
$.aO=null
$.qX=null
$.oj=null
$.qR=null
$.en=null
$.qA=null
$.r8=null
$.r4=null
$.r2=null
$.ox=null
$.k7=null
$.dL=null
$.r6=null
$.on=null
$.or=null
$.hu=null
$.r0=null
$.d_=null
$.f_=null
$.oH=null
$.r1=null
$.oG=null
$.oD=null
$.oE=null
$.k9=null
$.hs=null
$.uT=null
$.qK=null
$.ow=null
$.r_=null
$.qZ=null
$.A=null
$.qE=null
$.k6=null
$.bF=null
$.b9=null
$.bH=null
$.a0=null
$.aP=null
$.bY=null
$.K=null
$.N=null
$.aH=null
$.b7=null
$.bL=null
$.bg=null
$.bk=null
$.c4=null
$.b1=null
$.bw=null
$.bI=null
$.a4=null
$.aG=null
$.b8=null
$.aY=null
$.ah=null
$.bX=null
$.aW=null
$.aE=null
$.bM=null
$.b4=null
$.an=null
$.bu=null
$.bS=null
$.aN=null
$.bl=null
$.bj=null
$.ab=null
$.bG=null
$.ad=null
$.bd=null
$.bv=null
$.b_=null
$.bc=null
$.aI=null
$.bb=null
$.aQ=null
$.a_=null
$.aF=null
$.aJ=null
$.b3=null
$.aD=null
$.ap=null
$.a8=null
$.V=null
$.Q=null
$.am=null
$.b2=null
$.bh=null
$.b5=null
$.wc=null
$.yS=null
$.zp=null
$.vI=null
$.yP=null
$.wd=null
$.qx=null
$.z3=null
$.xc=null
$.w8=null
$.uN=null
$.xN=null
$.oC=null
$.qC=null
$.yb=null
$.vF=null
$.wW=null
$.vD=null
$.om=null
$.vo=null
$.wq=null
$.vN=null
$.x5=null
$.zb=null
$.we=null
$.oo=null
$.x6=null
$.vL=null
$.vu=null
$.qW=null
$.uG=null
$.qy=null
$.wQ=null
$.ov=null
$.xr=null
$.xl=null
$.uK=null
$.vx=null
$.yl=null
$.uM=null
$.yO=null
$.wV=null
$.vU=null
$.y5=null
$.yI=null
$.ot=null
$.xg=null
$.y2=null
$.vM=null
$.uz=null
$.ze=null
$.wZ=null
$.vt=null
$.z2=null
$.xu=null
$.vA=null
$.yN=null
$.w3=null
$.yt=null
$.yu=null
$.uI=null
$.xn=null
$.vO=null
$.vY=null
$.zt=null
$.kc=null
$.yj=null
$.yL=null
$.k8=null
$.vi=null
$.xE=null
$.xI=null
$.uF=null
$.w2=null
$.yM=null
$.xt=null
$.z5=null
$.y7=null
$.xJ=null
$.qP=null
$.yx=null
$.zj=null
$.yR=null
$.wE=null
$.xV=null
$.wF=null
$.ym=null
$.zh=null
$.x4=null
$.w_=null
$.wm=null
$.v8=null
$.y3=null
$.wk=null
$.ws=null
$.vQ=null
$.yw=null
$.em=null
$.xy=null
$.qM=null
$.wG=null
$.wD=null
$.zm=null
$.ve=null
$.yh=null
$.yi=null
$.yg=null
$.yf=null
$.yE=null
$.wt=null
$.xo=null
$.yH=null
$.xf=null
$.xz=null
$.vJ=null
$.zg=null
$.xm=null
$.w5=null
$.w6=null
$.xH=null
$.zs=null
$.wT=null
$.zf=null
$.qT=null
$.ys=null
$.x2=null
$.kb=null
$.wO=null
$.xX=null
$.vd=null
$.w9=null
$.yo=null
$.xp=null
$.za=null
$.qS=null
$.xx=null
$.vk=null
$.vG=null
$.xT=null
$.yY=null
$.yn=null
$.oi=null
$.qY=null
$.yz=null
$.zi=null
$.wC=null
$.uX=null
$.v5=null
$.yW=null
$.xB=null
$.xd=null
$.xC=null
$.yT=null
$.wP=null
$.uJ=null
$.wr=null
$.xb=null
$.yB=null
$.wj=null
$.vc=null
$.yd=null
$.ye=null
$.z8=null
$.yq=null
$.oy=null
$.qD=null
$.vB=null
$.qF=null
$.wK=null
$.qN=null
$.xZ=null
$.xk=null
$.y9=null
$.os=null
$.ka=null
$.qL=null
$.vW=null
$.wo=null
$.qU=null
$.qJ=null
$.vw=null
$.z_=null
$.vp=null
$.xL=null
$.wH=null
$.yG=null
$.xe=null
$.uU=null
$.wI=null
$.vT=null
$.xP=null
$.wY=null
$.xj=null
$.x3=null
$.x7=null
$.yc=null
$.y8=null
$.uC=null
$.yX=null
$.y1=null
$.vK=null
$.vP=null
$.wn=null
$.yU=null
$.wg=null
$.x_=null
$.v0=null
$.wa=null
$.vS=null
$.xD=null
$.w0=null
$.yk=null
$.x1=null
$.qz=null
$.xY=null
$.wJ=null
$.wh=null
$.uA=null
$.uH=null
$.xA=null
$.xK=null
$.wX=null
$.wA=null
$.zd=null
$.v3=null
$.wi=null
$.x0=null
$.vH=null
$.yD=null
$.vv=null
$.yp=null
$.v1=null
$.yZ=null
$.x9=null
$.uW=null
$.y6=null
$.xU=null
$.vC=null
$.wu=null
$.vj=null
$.yV=null
$.wM=null
$.z9=null
$.vl=null
$.wv=null
$.vm=null
$.vE=null
$.y0=null
$.vy=null
$.wN=null
$.xq=null
$.vf=null
$.yF=null
$.zo=null
$.yv=null
$.xh=null
$.yC=null
$.xi=null
$.uP=null
$.uB=null
$.xa=null
$.uZ=null
$.vn=null
$.uQ=null
$.uV=null
$.xw=null
$.xQ=null
$.z1=null
$.wL=null
$.zn=null
$.y4=null
$.qV=null
$.qQ=null
$.qO=null
$.vr=null
$.wy=null
$.x8=null
$.xF=null
$.yy=null
$.uE=null
$.zk=null
$.vZ=null
$.yJ=null
$.vR=null
$.uO=null
$.vg=null
$.v7=null
$.zr=null
$.vh=null
$.w1=null
$.vq=null
$.z7=null
$.yA=null
$.z0=null
$.uD=null
$.ya=null
$.wR=null
$.wU=null
$.zc=null
$.yK=null
$.wp=null
$.w7=null
$.xS=null
$.zl=null
$.wb=null
$.wS=null
$.vb=null
$.wB=null
$.wz=null
$.yr=null
$.xR=null
$.ww=null
$.v6=null
$.yQ=null
$.xG=null
$.z4=null
$.zq=null
$.uS=null
$.uR=null
$.v2=null
$.w4=null
$.y_=null
$.vz=null
$.xW=null
$.vV=null
$.uL=null
$.v4=null
$.xv=null
$.vX=null
$.xO=null
$.va=null
$.wf=null
$.z6=null
$.uY=null
$.wl=null
$.xM=null
$.v9=null
$.wx=null
$.xs=null
$.v_=null
$.vs=null
$.ej="OWNER"
$.re=!1
$.zy=74
$.pc=null
$.An=null
$.r=null
$.ak=null
$.b0=null
$.aU=null
$.c0=null
$.aV=null
$.bo=null
$.bz=null
$.bT=null
$.cQ=null
$.c5=null
$.rE=!1})();(function lazyInitializers(){lazy($,"q3","$get$q3",function(){return H.t6("_$dart_dartClosure")})
lazy($,"oS","$get$oS",function(){return H.t6("_$dart_js")})
lazy($,"qu","$get$qu",function(){return H.ux()})
lazy($,"qv","$get$qv",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.qf
$.qf=t+1
t="expando$key$"+t}return new P.j9(null,t,[P.a6])})
lazy($,"rI","$get$rI",function(){return H.dp(H.mo({
toString:function(){return"$receiver$"}}))})
lazy($,"rJ","$get$rJ",function(){return H.dp(H.mo({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"rK","$get$rK",function(){return H.dp(H.mo(null))})
lazy($,"rL","$get$rL",function(){return H.dp(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"rP","$get$rP",function(){return H.dp(H.mo(void 0))})
lazy($,"rQ","$get$rQ",function(){return H.dp(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"rN","$get$rN",function(){return H.dp(H.rO(null))})
lazy($,"rM","$get$rM",function(){return H.dp(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"rS","$get$rS",function(){return H.dp(H.rO(void 0))})
lazy($,"rR","$get$rR",function(){return H.dp(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"pi","$get$pi",function(){return P.Aw()})
lazy($,"fD","$get$fD",function(){return[]})
lazy($,"rU","$get$rU",function(){return P.f6(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"pl","$get$pl",function(){return P.rd()})
lazy($,"e3","$get$e3",function(){return P.cz(P.a6,L.cE)})
lazy($,"bK","$get$bK",function(){return H.a([],[S.bs])})
lazy($,"q4","$get$q4",function(){return H.a(["Yaldabaoth","y'all'd'vebaoth","HairSeven","Javascript",'<span class = "void">Nobrop, the </span>Null','<span class = "void">Paraxalan, The </span>Ever-Searching',"<span class = 'void'>Algebron, The </span>Dilletant",'<span class = "void">Doomod, The </span>Wanderer',"J\xf6rmungandr","Apollyon","Siseneg","Borunam",'<span class = "void">Shogun the, Glitch</span>','<span class = "void">Jadeacher the,</span>Researcher',"Karmiution",'<span class = "void">Authorot, the</span> Robot','<span class = "void">Abbiejean, the </span>Scout','<span class = "void">Aspiratcher, The</span> Librarian','<span class = "void">Recurscker, The</span>Hollow One',"Insurorracle",'<span class = "void">Maniomnia, the </span>Dreamwaker',"Kazerad","Shiva","Goliath"],[P.C])})
lazy($,"q5","$get$q5",function(){return H.a(["Eriotur","Abraxas","Succra","Watojo","Bluhubit","Swefrat","Helaja","Fischapris"],[P.C])})
lazy($,"h_","$get$h_",function(){return D.cX("smell",A.o1($.eV,1),T.bO)})
lazy($,"h0","$get$h0",function(){return D.cX("sound",A.o1($.di,1),M.bn)})
lazy($,"fZ","$get$fZ",function(){return D.cX("ambiance",A.o1($.h5,1),K.bE)})
lazy($,"js","$get$js",function(){return D.cX("consort",A.u6(H.a([A.u5($.ql,1),A.u9()],[{func:1,v:true,args:[D.cW,[Q.bD,N.W],E.ch,L.dn,A.d2]}])),S.bs)})
lazy($,"nV","$get$nV",function(){return D.cX("denizen",null,Q.e7)})
lazy($,"o_","$get$o_",function(){return D.cX("quest chain",null,R.ev)})
lazy($,"nZ","$get$nZ",function(){return D.cX("pre denizen quest chain",null,R.a1)})
lazy($,"nW","$get$nW",function(){return D.cX("denizen quest chain",null,R.U)})
lazy($,"nY","$get$nY",function(){return D.cX("post denizen quest chain",null,R.aa)})
lazy($,"nX","$get$nX",function(){return D.cX("moon quest chain",null,R.d1)})
lazy($,"o0","$get$o0",function(){return D.cX("battlefield quest chain",null,R.ez)})
lazy($,"jJ","$get$jJ",function(){var t=new D.h7(P.cz(P.C,D.eY))
t.at($.$get$h_())
t.at($.$get$h0())
t.at($.$get$fZ())
return t})
lazy($,"h8","$get$h8",function(){var t=D.od($.$get$jJ())
t.at($.$get$js())
t.at($.$get$nV())
t.at($.$get$o_())
t.at($.$get$nZ())
t.at($.$get$nW())
t.at($.$get$nY())
return t})
lazy($,"qn","$get$qn",function(){var t=D.od($.$get$jJ())
t.at($.$get$nX())
t.at($.$get$js())
return t})
lazy($,"qo","$get$qo",function(){var t=D.od($.$get$jJ())
t.at($.$get$o0())
t.at($.$get$js())
return t})
lazy($,"qp","$get$qp",function(){return P.cz(P.C,Z.fX)})
lazy($,"hq","$get$hq",function(){return P.cz(P.a6,B.el)})
lazy($,"hv","$get$hv",function(){return H.a([],[A.a7])})
lazy($,"ey","$get$ey",function(){return P.cz(P.a6,T.d3)})
lazy($,"ao","$get$ao",function(){return H.a([],[U.af])})
lazy($,"b","$get$b",function(){return P.a2(null,null,null,G.Z)})
lazy($,"rw","$get$rw",function(){return A.eP(16777215,!1)})
lazy($,"p7","$get$p7",function(){return A.eP(0,!1)})
lazy($,"ru","$get$ru",function(){return A.eP(65280,!1)})
lazy($,"rt","$get$rt",function(){return A.eP(12895428,!1)})
lazy($,"rv","$get$rv",function(){var t,s,r
t=P.C
s=A.ct
r=P.a6
t=new L.al(P.n(null,null,null,t,s),P.n(null,null,null,r,s),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
t.sdM("#FFFF00")
t.sdL("#FFC935")
t.sdR("#FFCC00")
t.sdS("#FF9B00")
t.sdQ("#C66900")
t.sde("#FFD91C")
t.sdd("#FFE993")
t.se5("#FFB71C")
t.se4("#C67D00")
return t})
lazy($,"rs","$get$rs",function(){var t,s,r
t=P.C
s=A.ct
r=P.a6
t=new L.al(P.n(null,null,null,t,s),P.n(null,null,null,r,s),P.n(null,null,null,t,r),P.n(null,null,null,r,t))
t.sdM("#F092FF")
t.sdL("#D456EA")
t.sdR("#C87CFF")
t.sdS("#AA00FF")
t.sdQ("#6900AF")
t.sde("#DE00FF")
t.sdd("#E760FF")
t.se5("#B400CC")
t.se4("#770E87")
return t})
lazy($,"oW","$get$oW",function(){return A.dF(255,0,255,255)})
lazy($,"pg","$get$pg",function(){var t=[P.C]
return P.z([0,H.a(["\u030d","\u030e","\u0304","\u0305","\u033f","\u0311","\u0306","\u0310","\u0352","\u0357","\u0351","\u0307","\u0308","\u030a","\u0342","\u0343","\u0344","\u034a","\u034b","\u034c","\u0303","\u0302","\u030c","\u0350","\u0300","\u0301","\u030b","\u030f","\u0312","\u0313","\u0314","\u033d","\u0309","\u0363","\u0364","\u0365","\u0366","\u0367","\u0368","\u0369","\u036a","\u036b","\u036c","\u036d","\u036e","\u036f","\u033e","\u035b","\u0346","\u031a"],t),1,H.a(["\u0316","\u0317","\u0318","\u0319","\u031c","\u031d","\u031e","\u031f","\u0320","\u0324","\u0325","\u0326","\u0329","\u032a","\u032b","\u032c","\u032d","\u032e","\u032f","\u0330","\u0331","\u0332","\u0333","\u0339","\u033a","\u033b","\u033c","\u0345","\u0347","\u0348","\u0349","\u034d","\u034e","\u0353","\u0354","\u0355","\u0356","\u0359","\u035a","\u0323"],t),2,H.a(["\u0315","\u031b","\u0340","\u0341","\u0358","\u0321","\u0322","\u0327","\u0328","\u0334","\u0335","\u0336","\u034f","\u035c","\u035d","\u035e","\u035f","\u0360","\u0362","\u0338","\u0337","\u0361","\u0489"],t)],P.a6,[P.M,P.C])})
lazy($,"t5","$get$t5",function(){return H.a(["NIPPER CADET","PESKY URCHIN","BRAVESPROUT","JUVESQUIRT","RUMPUS BUSTER","CHAMP-FRY","ANKLEBITER","CALLOUSED TENDERFOOT","RASCALSPRAT","GRITTY MIDGET","BRITCHES RIPPER","ALIEN URCHIN","NESTING NEWB"],[P.C])})
lazy($,"ii","$get$ii",function(){return H.a(["#A10000","#a25203","#a1a100","#658200","#416600","#078446","#008282","#004182","#0021cb","#631db4","#610061","#99004d"],[P.C])})
lazy($,"pJ","$get$pJ",function(){var t,s
t=[P.C]
s=H.a(["8=D",">->","//","tumut",")","><>","(","$","?","=begin","=end"],t)
C.a.T(s,H.a(["<3","<3<","<>","c3<","{","}","<String>[","]","'",".",",","~","!","~","^","&","#","@","%","*"],t))
return s})
lazy($,"pw","$get$pw",function(){var t=[P.C]
return H.a([H.a(["calm","clam"],t),H.a(["ass","bass"],t),H.a(["god","glub"],t),H.a(["god","cod"],t),H.a(["fuck","glub"],t),H.a(["really","reely"],t),H.a(["kill","krill"],t),H.a(["thing","fin"],t),H.a(["well","whale"],t),H.a(["purpose","porpoise"],t),H.a(["better","betta"],t),H.a(["help","kelp"],t),H.a(["see","sea"],t),H.a(["friend","frond"],t),H.a(["crazy","craysea"],t),H.a(["kid","squid"],t),H.a(["hell","shell"],t)],[[P.M,P.C]])})
lazy($,"pr","$get$pr",function(){var t,s,r
t=[P.C]
s=[[P.M,P.C]]
r=H.a([H.a(["\\well\\b","welp"],t),H.a(["pro","bro"],t),H.a(["guess","suppose"],t),H.a(["S\\b","Z"],t),H.a(["oh my god","omg"],t),H.a(["like","liek"],t),H.a(["ing","in"],t),H.a(["have to","hafta"],t),H.a(["want to","wanna"],t),H.a(["going to","gonna"],t),H.a(["i'm","i am"],t),H.a(["you're","you are"],t),H.a(["we're","we are"],t),H.a(["forever","5ever"],t),H.a(["ever","evah"],t),H.a(["er","ah"],t),H.a(["to","ta"],t)],s)
C.a.T(r,H.a([H.a(["I'm","Imma"],t),H.a(["don't know","dunno"],t),H.a(["school","skool"],t),H.a(["the","teh"],t),H.a(["aren't","aint"],t),H.a(["ie","ei"],t),H.a(["though","tho"],t),H.a(["you","u"],t),H.a(["right","rite"],t)],s))
C.a.T(r,H.a([H.a(["n't"," not"],t),H.a(["'m'"," am"],t),H.a(["kind of","kinda"],t),H.a(["okay","ok"],t),H.a(["\\band\\b","&"],t),H.a(["\\bat\\b","@"],t),H.a(["okay","okey dokey"],t)],s))
return r})
lazy($,"pM","$get$pM",function(){var t=[P.C]
return H.a([H.a(["\\bvery\\b","adequately"],t),H.a(["\\bvery\\b","really"],t),H.a(["\\bvery\\b","super"],t),H.a(["\\bvery\\b","amazingly"],t),H.a(["\\bvery\\b","hella"],t),H.a(["\\bvery\\b","extremely"],t),H.a(["\\bvery\\b","absolutely"],t),H.a(["\\bvery\\b","mega"],t),H.a(["\\bvery\\b ","extra"],t),H.a(["\\bvery\\b","ultra"],t),H.a(["\\bvery\\b","hecka"],t),H.a(["\\bvery\\b","totes"],t)],[[P.M,P.C]])})
lazy($,"pz","$get$pz",function(){var t=[P.C]
return H.a([H.a(["\\bgood\\b","good"],t),H.a(["\\bgood\\b","agreeable"],t),H.a(["\\bgood\\b","marvelous"],t),H.a(["\\bgood\\b","ace"],t),H.a(["\\bgood\\b","wonderful"],t),H.a(["\\bgood\\b","sweet"],t),H.a(["\\bgood\\b","dope"],t),H.a(["\\bgood\\b","awesome"],t),H.a(["\\bgood\\b","great"],t),H.a(["\\bgood\\b","radical"],t),H.a(["\\bgood\\b","perfect"],t),H.a(["\\bgood\\b","amazing"],t),H.a(["\\bgood\\b","super good"],t),H.a(["\\bgood\\b","acceptable"],t)],[[P.M,P.C]])})
lazy($,"t0","$get$t0",function(){var t=[P.C]
return H.a([H.a(["asshole","asshat"],t),H.a(["asshole","dickhead"],t),H.a(["asshole","fucknut"],t),H.a(["asshole","pukestain"],t),H.a(["asshole","dirtbag"],t),H.a(["asshole","fuckhead"],t),H.a(["asshole","asshole"],t),H.a(["asshole","dipshit"],t),H.a(["asshole","garbage person"],t),H.a(["asshole","fucker"],t),H.a(["asshole","poopy head"],t),H.a(["asshole","shit sniffer"],t),H.a(["asshole","jerk"],t),H.a(["asshole","douchecanoe"],t),H.a(["asshole","douche"],t),H.a(["asshole","plebeian"],t),H.a(["asshole","fuckstain"],t),H.a(["asshole","douchebag"],t),H.a(["asshole","fuckface"],t),H.a(["asshole","fuckass"],t)],[[P.M,P.C]])})
lazy($,"pG","$get$pG",function(){var t=[P.C]
return H.a([H.a(["lol","lol"],t),H.a(["lol","haha"],t),H.a(["lol","ehehe"],t),H.a(["lol","heh"],t),H.a(["lol","omg lol"],t),H.a(["lol","rofl"],t),H.a(["lol","funny"],t),H.a(["lol"," "],t),H.a(["lol","hee"],t),H.a(["lol","lawl"],t),H.a(["lol","roflcopter"],t),H.a(["lol","..."],t),H.a(["lol","bwahah"],t),H.a(["lol","*giggle*"],t),H.a(["lol",":)"],t)],[[P.M,P.C]])})
lazy($,"pA","$get$pA",function(){var t=[P.C]
return H.a([H.a(["\\bhey\\b","hey"],t),H.a(["\\bhey\\b","hi"],t),H.a(["\\bhey\\b","hello"],t),H.a(["\\bhey\\b","greetings"],t),H.a(["\\bhey\\b","yo"],t),H.a(["\\bhey\\b","sup"],t)],[[P.M,P.C]])})
lazy($,"pv","$get$pv",function(){var t=[P.C]
return H.a([H.a(["dude","guy"],t),H.a(["dude","bro"],t),H.a(["dude","man"],t),H.a(["dude","you"],t),H.a(["dude","friend"],t),H.a(["dude","asshole"],t),H.a(["dude","fella"],t),H.a(["dude","bro"],t)],[[P.M,P.C]])})
lazy($,"pu","$get$pu",function(){var t=[P.C]
return H.a([H.a(["fuck","beep"],t),H.a(["fuck","piss"],t),H.a(["fuck","motherfuck"],t),H.a(["\\bfuck\\b","um"],t),H.a(["\\bfuck\\b","fuck"],t),H.a(["\\bfuck\\b","shit"],t),H.a(["\\bfuck\\b","cocks"],t),H.a(["\\bfuck\\b","nope"],t),H.a(["\\bfuck\\b","goddammit"],t),H.a(["\\bfuck\\b","damn"],t),H.a(["\\bfuck\\b","..."],t),H.a(["\\bfuck\\b","...great."],t),H.a(["\\bfuck\\b","crap"],t),H.a(["\\bfuck\\b","fiddlesticks"],t),H.a(["\\bfuck\\b","darn"],t),H.a(["\\bfuck\\b","dang"],t),H.a(["\\bfuck\\b","omg"],t)],[[P.M,P.C]])})
lazy($,"pN","$get$pN",function(){var t=[P.C]
return H.a([H.a(["\\byes\\b","certainly"],t),H.a(["\\byes\\b","indeed"],t),H.a(["\\byes\\b","yes"],t),H.a(["\\byes\\b","yeppers"],t),H.a(["\\byes\\b","right"],t),H.a(["\\byes\\b","yeah"],t),H.a(["\\byes\\b","yep"],t),H.a(["\\byes\\b","sure"],t),H.a(["\\byes\\b","okay"],t),H.a(["\\byes\\b","hell yes"],t)],[[P.M,P.C]])})
lazy($,"pI","$get$pI",function(){var t=[P.C]
return H.a([H.a(["\\bnope\\b|\\bno\\b","hell no"],t),H.a(["\\bnope\\b|\\bno\\b","absolutely no"],t),H.a(["\\bnope\\b|\\bno\\b","no"],t),H.a(["\\bnope\\b|\\bno\\b","no"],t),H.a(["\\bnope\\b|\\bno\\b","nope"],t),H.a(["\\bnope\\b|\\bno\\b","no way"],t),H.a(["\\bnope\\b|\\bno\\b","nah"],t)],[[P.M,P.C]])})
lazy($,"px","$get$px",function(){var t=[P.C]
return H.a([H.a(["friend","bro"],t),H.a(["friend","buddy"],t),H.a(["friend","pal"],t),H.a(["friend","friend"],t),H.a(["friend","compadre"],t),H.a(["friend","comrade"],t),H.a(["friend","best friend"],t),H.a(["friend","homey"],t)],[[P.M,P.C]])})
lazy($,"pK","$get$pK",function(){var t=[P.C]
return H.a([H.a([":\\)",":)"],t),H.a([":\\)",":0)"],t),H.a([":\\)",":]"],t),H.a([":\\)",":B"],t),H.a([":\\)",">: ]"],t),H.a([":\\)",":o)"],t),H.a([":\\)","^_^"],t),H.a([":\\)",";)"],t),H.a([":\\)","~_^"],t),H.a([":\\)","0u0"],t),H.a([":\\)","uwu"],t),H.a([":\\)","\xaf_(\u30c4)_/\xaf "],t),H.a([":\\)",":-)"],t),H.a([":\\)",":3"],t),H.a([":\\)","XD"],t),H.a([":\\)","8D"],t),H.a([":\\)",":>"],t),H.a([":\\)","=]"],t),H.a([":\\)","=}"],t),H.a([":\\)","=)"],t),H.a([":\\)","o->-<"],t)],[[P.M,P.C]])})
lazy($,"pB","$get$pB",function(){return H.a(["#68410a","#fffffe","#000000","#000000","#000000","#f3f28d","#cf6338","#feffd7","#fff3bd","#724107","#382207","#ff5a00","#3f1904","#ffd46d","#473200","#91683c"],[P.C])})
lazy($,"ce","$get$ce",function(){return H.a([],[D.be])})})()
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
mangledGlobalNames:{a6:"int",R:"double",c6:"num",C:"String",cS:"bool",es:"Null",M:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.cS,args:[[P.M,E.ch]]},{func:1,v:true,args:[P.bi]},{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:P.C,args:[P.a6]},{func:1,ret:W.cn,args:[P.a6]},{func:1,ret:P.cS,args:[W.cn,P.C,P.C,W.fw]},{func:1,ret:P.cS,args:[P.bi]},{func:1,ret:W.ca,args:[P.a6]},{func:1,ret:W.eD,args:[P.a6]},{func:1,ret:P.a6,args:[P.bA,P.bA]},{func:1,v:true,args:[D.cW,[Q.bD,N.W],E.ch,L.dn,A.d2]}],
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
setOrUpdateInterceptorsByTag({Client:J.Y,DOMImplementation:J.Y,ImageData:J.Y,MediaError:J.Y,MediaSession:J.Y,PositionError:J.Y,PushMessageData:J.Y,Range:J.Y,WindowClient:J.Y,SVGAnimatedEnumeration:J.Y,SVGAnimatedLength:J.Y,SVGAnimatedLengthList:J.Y,SVGAnimatedNumber:J.Y,SVGAnimatedNumberList:J.Y,SVGAnimatedString:J.Y,WebGLRenderingContext:J.Y,SQLError:J.Y,ArrayBuffer:H.fb,ArrayBufferView:H.er,DataView:H.kZ,Float32Array:H.l_,Float64Array:H.l0,Int16Array:H.l1,Int32Array:H.l2,Int8Array:H.l3,Uint16Array:H.l4,Uint32Array:H.l5,Uint8ClampedArray:H.hJ,CanvasPixelArray:H.hJ,Uint8Array:H.l6,HTMLBRElement:W.aS,HTMLCanvasElement:W.aS,HTMLContentElement:W.aS,HTMLDListElement:W.aS,HTMLDataListElement:W.aS,HTMLDetailsElement:W.aS,HTMLDialogElement:W.aS,HTMLHRElement:W.aS,HTMLHeadElement:W.aS,HTMLHeadingElement:W.aS,HTMLHtmlElement:W.aS,HTMLLabelElement:W.aS,HTMLLegendElement:W.aS,HTMLMenuElement:W.aS,HTMLMenuItemElement:W.aS,HTMLModElement:W.aS,HTMLOListElement:W.aS,HTMLOptGroupElement:W.aS,HTMLParagraphElement:W.aS,HTMLPictureElement:W.aS,HTMLPreElement:W.aS,HTMLQuoteElement:W.aS,HTMLScriptElement:W.aS,HTMLShadowElement:W.aS,HTMLSourceElement:W.aS,HTMLSpanElement:W.aS,HTMLStyleElement:W.aS,HTMLTableCaptionElement:W.aS,HTMLTableColElement:W.aS,HTMLTitleElement:W.aS,HTMLTrackElement:W.aS,HTMLUListElement:W.aS,HTMLUnknownElement:W.aS,HTMLDirectoryElement:W.aS,HTMLFontElement:W.aS,HTMLFrameElement:W.aS,HTMLMarqueeElement:W.aS,HTMLElement:W.aS,HTMLAnchorElement:W.iv,HTMLAreaElement:W.iw,HTMLBaseElement:W.iH,Blob:W.fI,HTMLBodyElement:W.e4,HTMLButtonElement:W.iP,CanvasRenderingContext2D:W.iQ,CDATASection:W.dE,CharacterData:W.dE,Comment:W.dE,ProcessingInstruction:W.dE,Text:W.dE,CSSStyleDeclaration:W.e6,MSStyleCSSProperties:W.e6,CSS2Properties:W.e6,DeviceLightEvent:W.j_,HTMLDivElement:W.fQ,DocumentFragment:W.fR,DOMError:W.fS,FileError:W.fS,DOMException:W.j0,DOMRectReadOnly:W.fT,DOMTokenList:W.fU,Element:W.cn,HTMLEmbedElement:W.j7,AnimationEvent:W.T,AnimationPlayerEvent:W.T,ApplicationCacheErrorEvent:W.T,AutocompleteErrorEvent:W.T,BeforeInstallPromptEvent:W.T,BeforeUnloadEvent:W.T,BlobEvent:W.T,ClipboardEvent:W.T,CloseEvent:W.T,CompositionEvent:W.T,CustomEvent:W.T,DeviceMotionEvent:W.T,DeviceOrientationEvent:W.T,ErrorEvent:W.T,ExtendableEvent:W.T,ExtendableMessageEvent:W.T,FetchEvent:W.T,FocusEvent:W.T,FontFaceSetLoadEvent:W.T,GamepadEvent:W.T,GeofencingEvent:W.T,HashChangeEvent:W.T,InstallEvent:W.T,KeyboardEvent:W.T,MediaEncryptedEvent:W.T,MediaKeyMessageEvent:W.T,MediaQueryListEvent:W.T,MediaStreamEvent:W.T,MediaStreamTrackEvent:W.T,MessageEvent:W.T,MIDIConnectionEvent:W.T,MIDIMessageEvent:W.T,MouseEvent:W.T,DragEvent:W.T,NotificationEvent:W.T,PageTransitionEvent:W.T,PointerEvent:W.T,PopStateEvent:W.T,PresentationConnectionAvailableEvent:W.T,PresentationConnectionCloseEvent:W.T,ProgressEvent:W.T,PromiseRejectionEvent:W.T,PushEvent:W.T,RelatedEvent:W.T,RTCDataChannelEvent:W.T,RTCDTMFToneChangeEvent:W.T,RTCIceCandidateEvent:W.T,RTCPeerConnectionIceEvent:W.T,SecurityPolicyViolationEvent:W.T,ServicePortConnectEvent:W.T,ServiceWorkerMessageEvent:W.T,SpeechRecognitionError:W.T,SpeechRecognitionEvent:W.T,StorageEvent:W.T,SyncEvent:W.T,TextEvent:W.T,TouchEvent:W.T,TrackEvent:W.T,TransitionEvent:W.T,WebKitTransitionEvent:W.T,UIEvent:W.T,WheelEvent:W.T,ResourceProgressEvent:W.T,USBConnectionEvent:W.T,IDBVersionChangeEvent:W.T,SVGZoomEvent:W.T,AudioProcessingEvent:W.T,OfflineAudioCompletionEvent:W.T,WebGLContextEvent:W.T,Event:W.T,InputEvent:W.T,MessagePort:W.eS,EventTarget:W.eS,HTMLFieldSetElement:W.jM,File:W.ca,FileList:W.h9,HTMLFormElement:W.hd,HTMLIFrameElement:W.jX,HTMLImageElement:W.ek,HTMLInputElement:W.k1,HTMLKeygenElement:W.kp,HTMLLIElement:W.kr,HTMLLinkElement:W.kA,Location:W.kF,HTMLMapElement:W.kJ,HTMLAudioElement:W.f9,HTMLMediaElement:W.f9,HTMLVideoElement:W.f9,MediaStream:W.kN,HTMLMetaElement:W.kO,HTMLMeterElement:W.kQ,MIDIOutput:W.kR,MIDIInput:W.fa,MIDIPort:W.fa,Navigator:W.l7,NavigatorUserMediaError:W.l8,Document:W.aR,HTMLDocument:W.aR,XMLDocument:W.aR,Node:W.aR,NodeList:W.hK,RadioNodeList:W.hK,HTMLObjectElement:W.lc,HTMLOptionElement:W.ld,HTMLOutputElement:W.lf,HTMLParamElement:W.li,HTMLProgressElement:W.lr,HTMLSelectElement:W.hZ,ShadowRoot:W.lR,HTMLSlotElement:W.lT,SpeechSynthesisEvent:W.lY,HTMLTableCellElement:W.eA,HTMLTableDataCellElement:W.eA,HTMLTableHeaderCellElement:W.eA,HTMLTableElement:W.i4,HTMLTableRowElement:W.ma,HTMLTableSectionElement:W.mb,HTMLTemplateElement:W.fs,HTMLTextAreaElement:W.mf,Window:W.i9,DOMWindow:W.i9,Attr:W.eD,ClientRect:W.mL,DocumentType:W.mM,DOMRect:W.mN,HTMLFrameSetElement:W.mS,NamedNodeMap:W.fy,MozNamedAttrMap:W.fy,ServiceWorker:W.nc,SVGAElement:P.is,SVGAnimateElement:P.dC,SVGAnimateMotionElement:P.dC,SVGAnimateTransformElement:P.dC,SVGAnimationElement:P.dC,SVGSetElement:P.dC,SVGFEBlendElement:P.ja,SVGFEColorMatrixElement:P.jb,SVGFEComponentTransferElement:P.jc,SVGFECompositeElement:P.jd,SVGFEConvolveMatrixElement:P.je,SVGFEDiffuseLightingElement:P.jf,SVGFEDisplacementMapElement:P.jg,SVGFEFloodElement:P.jh,SVGFEGaussianBlurElement:P.ji,SVGFEImageElement:P.jj,SVGFEMergeElement:P.jk,SVGFEMorphologyElement:P.jl,SVGFEOffsetElement:P.jm,SVGFESpecularLightingElement:P.jn,SVGFETileElement:P.jo,SVGFETurbulenceElement:P.jp,SVGFilterElement:P.jN,SVGCircleElement:P.cb,SVGClipPathElement:P.cb,SVGDefsElement:P.cb,SVGEllipseElement:P.cb,SVGForeignObjectElement:P.cb,SVGGElement:P.cb,SVGGeometryElement:P.cb,SVGLineElement:P.cb,SVGPathElement:P.cb,SVGPolygonElement:P.cb,SVGPolylineElement:P.cb,SVGRectElement:P.cb,SVGSwitchElement:P.cb,SVGGraphicsElement:P.cb,SVGImageElement:P.jY,SVGLength:P.cH,SVGLengthList:P.kx,SVGMarkerElement:P.kL,SVGMaskElement:P.kM,SVGNumber:P.cI,SVGNumberList:P.lb,SVGPatternElement:P.lj,SVGScriptElement:P.fn,SVGDescElement:P.bP,SVGDiscardElement:P.bP,SVGFEDistantLightElement:P.bP,SVGFEFuncAElement:P.bP,SVGFEFuncBElement:P.bP,SVGFEFuncGElement:P.bP,SVGFEFuncRElement:P.bP,SVGFEMergeNodeElement:P.bP,SVGFEPointLightElement:P.bP,SVGFESpotLightElement:P.bP,SVGMetadataElement:P.bP,SVGStopElement:P.bP,SVGStyleElement:P.bP,SVGTitleElement:P.bP,SVGComponentTransferFunctionElement:P.bP,SVGElement:P.bP,SVGSVGElement:P.m7,SVGSymbolElement:P.m9,SVGTSpanElement:P.dT,SVGTextElement:P.dT,SVGTextPositioningElement:P.dT,SVGTextContentElement:P.dT,SVGTextPathElement:P.mh,SVGUseElement:P.mq,SVGViewElement:P.mr,SVGLinearGradientElement:P.fv,SVGRadialGradientElement:P.fv,SVGGradientElement:P.fv,SVGCursorElement:P.n8,SVGFEDropShadowElement:P.n9,SVGMPathElement:P.na,WebGL2RenderingContext:P.lz})
setOrUpdateLeafTags({Client:true,DOMImplementation:true,ImageData:true,MediaError:true,MediaSession:true,PositionError:true,PushMessageData:true,Range:true,WindowClient:true,SVGAnimatedEnumeration:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedString:true,WebGLRenderingContext:true,SQLError:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLOptGroupElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DeviceLightEvent:true,HTMLDivElement:true,DocumentFragment:false,DOMError:true,FileError:true,DOMException:true,DOMRectReadOnly:false,DOMTokenList:true,Element:false,HTMLEmbedElement:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,NotificationEvent:true,PageTransitionEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,WheelEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,SVGZoomEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,MessagePort:true,EventTarget:false,HTMLFieldSetElement:true,File:true,FileList:true,HTMLFormElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLinkElement:true,Location:true,HTMLMapElement:true,HTMLAudioElement:true,HTMLMediaElement:true,HTMLVideoElement:true,MediaStream:true,HTMLMetaElement:true,HTMLMeterElement:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,Navigator:true,NavigatorUserMediaError:true,Document:true,HTMLDocument:true,XMLDocument:true,Node:false,NodeList:true,RadioNodeList:true,HTMLObjectElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParamElement:true,HTMLProgressElement:true,HTMLSelectElement:true,ShadowRoot:true,HTMLSlotElement:true,SpeechSynthesisEvent:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DocumentType:true,DOMRect:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFESpecularLightingElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGEllipseElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGScriptElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGFEPointLightElement:true,SVGFESpotLightElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGUseElement:true,SVGViewElement:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,WebGL2RenderingContext:true})
H.hI.$nativeSuperclassTag="ArrayBufferView"
H.fe.$nativeSuperclassTag="ArrayBufferView"
H.fg.$nativeSuperclassTag="ArrayBufferView"
H.fc.$nativeSuperclassTag="ArrayBufferView"
H.ff.$nativeSuperclassTag="ArrayBufferView"
H.fh.$nativeSuperclassTag="ArrayBufferView"
H.fd.$nativeSuperclassTag="ArrayBufferView"})()
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
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.td(T.qw(),b)},[])
else (function(b){H.td(T.qw(),b)})([])})})()
//# sourceMappingURL=ItemController.dart.js.map
