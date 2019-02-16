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
a[c]=function(){a[c]=function(){H.ko(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.h1"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.h1"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.h1(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={fO:function fO(a){this.a=a},
fo:function(a){var t,s
t=a^48
if(t<=9)return t
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
da:function(a,b,c,d){if(!!J.m(a).$isi)return new H.br(a,b,[c,d])
return new H.bG(a,b,[c,d])},
cW:function(){return new P.ah("No element")},
j1:function(){return new P.ah("Too few elements")},
ci:function ci(a){this.a=a},
i:function i(){},
au:function au(){},
ac:function ac(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bG:function bG(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
br:function br(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
db:function db(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
av:function av(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
bt:function bt(){},
dX:function dX(){},
b5:function b5(){},
c2:function(a,b){var t=a.a6(b)
if(!u.globalState.d.cy)u.globalState.f.ad()
return t},
it:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.m(s).$isk)throw H.c(P.bk("Arguments to main must be a List: "+H.d(s)))
u.globalState=new H.eQ(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$hm()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.ep(P.fR(null,H.an),0)
r=P.l
s.z=new H.Q(0,null,null,null,null,null,0,[r,H.az])
s.ch=new H.Q(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.eP()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.iX,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.jt)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.aT(null,null,null,r)
p=new H.aw(0,null,!1)
o=new H.az(s,new H.Q(0,null,null,null,null,null,0,[r,H.aw]),q,u.createNewIsolate(),p,new H.U(H.fE()),new H.U(H.fE()),!1,!1,[],P.aT(null,null,null,null),null,null,!1,!0,P.aT(null,null,null,null))
q.W(0,0)
o.bj(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.aF(a,{func:1,args:[,]}))o.a6(new H.fF(t,a))
else if(H.aF(a,{func:1,args:[,,]}))o.a6(new H.fG(t,a))
else o.a6(a)
u.globalState.f.ad()},
jt:function(a){var t=P.aS(["command","print","msg",a])
return new H.R(!0,P.ba(null,P.l)).F(t)},
iZ:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.j_()
return},
j_:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(new P.t("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(new P.t('Cannot extract URI from "'+t+'"'))},
iX:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.am(!0,[]).O(b.data)
s=J.y(t)
switch(s.h(t,"command")){case"start":u.globalState.b=s.h(t,"id")
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.am(!0,[]).O(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.am(!0,[]).O(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.l
j=P.aT(null,null,null,k)
i=new H.aw(0,null,!1)
h=new H.az(s,new H.Q(0,null,null,null,null,null,0,[k,H.aw]),j,u.createNewIsolate(),i,new H.U(H.fE()),new H.U(H.fE()),!1,!1,[],P.aT(null,null,null,null),null,null,!1,!0,P.aT(null,null,null,null))
j.W(0,0)
h.bj(0,i)
u.globalState.f.a.L(new H.an(h,new H.cT(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.ad()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.aJ(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ad()
break
case"close":u.globalState.ch.ac(0,$.$get$hn().h(0,a))
a.terminate()
u.globalState.f.ad()
break
case"log":H.iW(s.h(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.aS(["command","print","msg",t])
k=new H.R(!0,P.ba(null,P.l)).F(k)
s.toString
self.postMessage(k)}else P.fD(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
iW:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.aS(["command","log","msg",a])
r=new H.R(!0,P.ba(null,P.l)).F(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.T(q)
t=H.O(q)
s=P.ct(t)
throw H.c(s)}},
iY:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.hy=$.hy+("_"+s)
$.hz=$.hz+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.aJ(f,["spawned",new H.aA(s,r),q,t.r])
r=new H.cU(a,b,c,d,t)
if(e===!0){t.bJ(q,q)
u.globalState.f.a.L(new H.an(t,r,"start isolate"))}else r.$0()},
ji:function(a,b){var t=new H.dR(!0,!1,null)
t.cs(a,b)
return t},
jL:function(a){return new H.am(!0,[]).O(new H.R(!1,P.ba(null,P.l)).F(a))},
fF:function fF(a,b){this.a=a
this.b=b},
fG:function fG(a,b){this.a=a
this.b=b},
eQ:function eQ(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
_.a=a
_.b=b
_.c=c
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
az:function az(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
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
eK:function eK(a,b){this.a=a
this.b=b},
ep:function ep(a,b){this.a=a
this.b=b},
eq:function eq(a){this.a=a},
an:function an(a,b,c){this.a=a
this.b=b
this.c=c},
eP:function eP(){},
cT:function cT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cU:function cU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ec:function ec(){},
aA:function aA(b,a){this.b=b
this.a=a},
eT:function eT(a,b){this.a=a
this.b=b},
bc:function bc(b,c,a){this.b=b
this.c=c
this.a=a},
aw:function aw(a,b,c){this.a=a
this.b=b
this.c=c},
dR:function dR(a,b,c){this.a=a
this.b=b
this.c=c},
dS:function dS(a,b){this.a=a
this.b=b},
dT:function dT(a,b){this.a=a
this.b=b},
U:function U(a){this.a=a},
R:function R(a,b){this.a=a
this.b=b},
am:function am(a,b){this.a=a
this.b=b},
iN:function(){throw H.c(new P.t("Cannot modify unmodifiable Map"))},
k4:function(a){return u.types[a]},
im:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.m(a).$isK},
d:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.Y(a)
if(typeof t!=="string")throw H.c(H.D(a))
return t},
jf:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.dy(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
af:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
fS:function(a,b){if(b==null)throw H.c(new P.q(a,null,null))
return b.$1(a)},
b3:function(a,b,c){var t,s,r,q,p,o
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.fS(a,c)
if(3>=t.length)return H.e(t,3)
s=t[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.fS(a,c)}if(b<2||b>36)throw H.c(P.A(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.a.p(q,o)|32)>r)return H.fS(a,c)}return parseInt(a,b)},
fU:function(a){var t,s,r,q,p,o,n,m
t=J.m(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.E||!!J.m(a).$isak){p=C.r(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.a.p(q,0)===36)q=C.a.S(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.io(H.fn(a),0,null),u.mangledGlobalNames)},
dv:function(a){return"Instance of '"+H.fU(a)+"'"},
j7:function(){if(!!self.location)return self.location.href
return},
hu:function(a){var t,s,r,q,p
t=a.length
if(t<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<t;r=q){q=r+500
p=q<t?q:t
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
jc:function(a){var t,s,r,q
t=H.C([],[P.l])
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.c5)(a),++r){q=a[r]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.c(H.D(q))
if(q<=65535)t.push(q)
else if(q<=1114111){t.push(55296+(C.b.N(q-65536,10)&1023))
t.push(56320+(q&1023))}else throw H.c(H.D(q))}return H.hu(t)},
hB:function(a){var t,s,r,q
for(t=a.length,s=0;r=a.length,s<r;r===t||(0,H.c5)(a),++s){q=a[s]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.c(H.D(q))
if(q<0)throw H.c(H.D(q))
if(q>65535)return H.jc(a)}return H.hu(a)},
jd:function(a,b,c){var t,s,r,q
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
q=r<c?r:c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
fV:function(a){var t
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.b.N(t,10))>>>0,56320|t&1023)}}throw H.c(P.A(a,0,1114111,null,null))},
G:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hx:function(a){return a.b?H.G(a).getUTCFullYear()+0:H.G(a).getFullYear()+0},
hw:function(a){return a.b?H.G(a).getUTCMonth()+1:H.G(a).getMonth()+1},
hv:function(a){return a.b?H.G(a).getUTCDate()+0:H.G(a).getDate()+0},
j8:function(a){return a.b?H.G(a).getUTCHours()+0:H.G(a).getHours()+0},
ja:function(a){return a.b?H.G(a).getUTCMinutes()+0:H.G(a).getMinutes()+0},
jb:function(a){return a.b?H.G(a).getUTCSeconds()+0:H.G(a).getSeconds()+0},
j9:function(a){return a.b?H.G(a).getUTCMilliseconds()+0:H.G(a).getMilliseconds()+0},
fT:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.D(a))
return a[b]},
hA:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.D(a))
a[b]=c},
x:function(a){throw H.c(H.D(a))},
e:function(a,b){if(a==null)J.P(a)
throw H.c(H.u(a,b))},
u:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.Z(!0,b,"index",null)
t=J.P(a)
if(!(b<0)){if(typeof t!=="number")return H.x(t)
s=b>=t}else s=!0
if(s)return P.bx(b,a,"index",null,t)
return P.dx(b,"index",null)},
D:function(a){return new P.Z(!0,a,null,null)},
ih:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(H.D(a))
return a},
c:function(a){var t
if(a==null)a=new P.b2()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.iu})
t.name=""}else t.toString=H.iu
return t},
iu:function(){return J.Y(this.dartException)},
v:function(a){throw H.c(a)},
c5:function(a){throw H.c(new P.W(a))},
X:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.dU(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
dV:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
hL:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
fQ:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.d2(a,s,t?null:b.receiver)},
T:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.fH(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.N(r,16)&8191)===10)switch(q){case 438:return t.$1(H.fQ(H.d(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.d(s)+" (Error "+q+")"
return t.$1(new H.bM(p,null))}}if(a instanceof TypeError){o=$.$get$hF()
n=$.$get$hG()
m=$.$get$hH()
l=$.$get$hI()
k=$.$get$hM()
j=$.$get$hN()
i=$.$get$hK()
$.$get$hJ()
h=$.$get$hP()
g=$.$get$hO()
f=o.K(s)
if(f!=null)return t.$1(H.fQ(s,f))
else{f=n.K(s)
if(f!=null){f.method="call"
return t.$1(H.fQ(s,f))}else{f=m.K(s)
if(f==null){f=l.K(s)
if(f==null){f=k.K(s)
if(f==null){f=j.K(s)
if(f==null){f=i.K(s)
if(f==null){f=l.K(s)
if(f==null){f=h.K(s)
if(f==null){f=g.K(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.bM(s,f==null?null:f.method))}}return t.$1(new H.dW(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.bQ()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.Z(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.bQ()
return a},
O:function(a){var t
if(a==null)return new H.c0(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.c0(a,null)},
ke:function(a){if(a==null||typeof a!='object')return J.a3(a)
else return H.af(a)},
k1:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.q(0,a[s],a[r])}return b},
k9:function(a,b,c,d,e,f,g){switch(c){case 0:return H.c2(b,new H.fu(a))
case 1:return H.c2(b,new H.fv(a,d))
case 2:return H.c2(b,new H.fw(a,d,e))
case 3:return H.c2(b,new H.fx(a,d,e,f))
case 4:return H.c2(b,new H.fy(a,d,e,f,g))}throw H.c(P.ct("Unsupported number of arguments for wrapped closure"))},
bh:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.k9)
a.$identity=t
return t},
iM:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.m(c).$isk){t.$reflectionInfo=c
r=H.jf(t).r}else r=c
q=d?Object.create(new H.dF().constructor.prototype):Object.create(new H.aK(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.V
$.V=J.aI(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.hd(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.k4,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.hc:H.fM
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.c("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.hd(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
iJ:function(a,b,c,d){var t=H.fM
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
hd:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.iL(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.iJ(s,!q,t,b)
if(s===0){q=$.V
$.V=J.aI(q,1)
o="self"+H.d(q)
q="return function(){var "+o+" = this."
p=$.aL
if(p==null){p=H.cg("self")
$.aL=p}return new Function(q+H.d(p)+";return "+o+"."+H.d(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.V
$.V=J.aI(q,1)
n+=H.d(q)
q="return function("+n+"){return this."
p=$.aL
if(p==null){p=H.cg("self")
$.aL=p}return new Function(q+H.d(p)+"."+H.d(t)+"("+n+");}")()},
iK:function(a,b,c,d){var t,s
t=H.fM
s=H.hc
switch(b?-1:a){case 0:throw H.c(new H.dz("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
iL:function(a,b){var t,s,r,q,p,o,n,m
t=H.iH()
s=$.hb
if(s==null){s=H.cg("receiver")
$.hb=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.iK(q,!o,r,b)
if(q===1){s="return function(){return this."+H.d(t)+"."+H.d(r)+"(this."+H.d(s)+");"
o=$.V
$.V=J.aI(o,1)
return new Function(s+H.d(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.d(t)+"."+H.d(r)+"(this."+H.d(s)+", "+m+");"
o=$.V
$.V=J.aI(o,1)
return new Function(s+H.d(o)+"}")()},
h1:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.m(c).$isk){c.fixed$length=Array
t=c}else t=c
return H.iM(a,b,t,!!d,e,f)},
fM:function(a){return a.a},
hc:function(a){return a.c},
iH:function(){var t=$.aL
if(t==null){t=H.cg("self")
$.aL=t}return t},
cg:function(a){var t,s,r,q,p
t=new H.aK("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
kh:function(a,b){var t=J.y(b)
throw H.c(H.iI(H.fU(a),t.k(b,3,t.gj(b))))},
fs:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.m(a)[b]
else t=!0
if(t)return a
H.kh(a,b)},
k_:function(a){var t=J.m(a)
return"$S" in t?t.$S():null},
aF:function(a,b){var t
if(a==null)return!1
t=H.k_(a)
return t==null?!1:H.il(t,b)},
iI:function(a,b){return new H.ch("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
ko:function(a){throw H.c(new P.cn(a))},
fE:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
ij:function(a){return u.getIsolateTag(a)},
C:function(a,b){a.$ti=b
return a},
fn:function(a){if(a==null)return
return a.$ti},
ik:function(a,b){return H.h6(a["$as"+H.d(b)],H.fn(a))},
E:function(a,b,c){var t=H.ik(a,b)
return t==null?null:t[c]},
a2:function(a,b){var t=H.fn(a)
return t==null?null:t[b]},
aH:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.io(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.d(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aH(t,b)
return H.jO(a,b)}return"unknown-reified-type"},
jO:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aH(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aH(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aH(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.k0(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aH(l[j],b)+(" "+H.d(j))}q+="}"}return"("+q+") => "+t},
io:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.L("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.l=p+", "
o=a[s]
if(o!=null)q=!1
p=t.l+=H.aH(o,c)}return q?"":"<"+t.i(0)+">"},
h6:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
fj:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.fn(a)
s=J.m(a)
if(s[b]==null)return!1
return H.ie(H.h6(s[d],t),c)},
ie:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.I(a[s],b[s]))return!1
return!0},
ii:function(a,b,c){return a.apply(b,H.ik(b,c))},
I:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="ae")return!0
if('func' in b)return H.il(a,b)
if('func' in a)return b.builtin$cls==="kq"||b.builtin$cls==="p"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.aH(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.ie(H.h6(o,t),r)},
id:function(a,b,c){var t,s,r,q,p
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
s=a.length
r=b.length
if(c){if(s<r)return!1}else if(s!==r)return!1
for(q=0;q<r;++q){t=a[q]
p=b[q]
if(!(H.I(t,p)||H.I(p,t)))return!1}return!0},
jV:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.I(p,o)||H.I(o,p)))return!1}return!0},
il:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.I(t,s)||H.I(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.id(r,q,!1))return!1
if(!H.id(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.I(i,h)||H.I(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.I(i,h)||H.I(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.I(i,h)||H.I(h,i)))return!1}}return H.jV(a.named,b.named)},
kv:function(a){var t=$.h3
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
ku:function(a){return H.af(a)},
kt:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ka:function(a){var t,s,r,q,p,o
t=$.h3.$1(a)
s=$.fl[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.ft[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.ic.$2(a,t)
if(t!=null){s=$.fl[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.ft[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.h5(r)
$.fl[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.ft[t]=r
return r}if(p==="-"){o=H.h5(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.ip(a,r)
if(p==="*")throw H.c(new P.bR(t))
if(u.leafTags[t]===true){o=H.h5(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.ip(a,r)},
ip:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.fA(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
h5:function(a){return J.fA(a,!1,null,!!a.$isK)},
kc:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.fA(t,!1,null,!!t.$isK)
else return J.fA(t,c,null,null)},
k7:function(){if(!0===$.h4)return
$.h4=!0
H.k8()},
k8:function(){var t,s,r,q,p,o,n,m
$.fl=Object.create(null)
$.ft=Object.create(null)
H.k6()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.iq.$1(p)
if(o!=null){n=H.kc(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
k6:function(){var t,s,r,q,p,o,n
t=C.F()
t=H.aE(C.G,H.aE(C.H,H.aE(C.q,H.aE(C.q,H.aE(C.J,H.aE(C.I,H.aE(C.K(C.r),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.h3=new H.fp(p)
$.ic=new H.fq(o)
$.iq=new H.fr(n)},
aE:function(a,b){return a(b)||b},
ho:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.c(new P.q("Illegal RegExp pattern ("+String(q)+")",a,null))},
kl:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
kn:function(a,b,c){var t,s,r
if(b==="")if(a==="")return c
else{t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
jT:function(a){return a},
km:function(a,b,c,d){var t,s,r,q,p,o
t=new H.e6(b,a,0,null)
s=0
r=""
for(;t.m();){q=t.d
p=q.b
o=p.index
r=r+H.d(H.i4().$1(C.a.k(a,s,o)))+H.d(c.$1(q))
s=o+p[0].length}t=r+H.d(H.i4().$1(C.a.S(a,s)))
return t.charCodeAt(0)==0?t:t},
ck:function ck(){},
cl:function cl(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
dy:function dy(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
dU:function dU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bM:function bM(a,b){this.a=a
this.b=b},
d2:function d2(a,b,c){this.a=a
this.b=b
this.c=c},
dW:function dW(a){this.a=a},
fH:function fH(a){this.a=a},
c0:function c0(a,b){this.a=a
this.b=b},
fu:function fu(a){this.a=a},
fv:function fv(a,b){this.a=a
this.b=b},
fw:function fw(a,b,c){this.a=a
this.b=b
this.c=c},
fx:function fx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fy:function fy(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
aN:function aN(){},
dP:function dP(){},
dF:function dF(){},
aK:function aK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ch:function ch(a){this.a=a},
dz:function dz(a){this.a=a},
Q:function Q(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
d1:function d1(a){this.a=a},
d3:function d3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d4:function d4(a,$ti){this.a=a
this.$ti=$ti},
d5:function d5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fp:function fp(a){this.a=a},
fq:function fq(a){this.a=a},
fr:function fr(a){this.a=a},
d0:function d0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eS:function eS(a,b){this.a=a
this.b=b},
e6:function e6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i3:function(a){return a},
jN:function(a){return a},
j5:function(a){return new Int8Array(H.jN(a))},
aX:function aX(){},
ad:function ad(){},
bH:function bH(){},
bI:function bI(){},
aY:function aY(){},
b_:function b_(){},
bJ:function bJ(){},
aZ:function aZ(){},
b0:function b0(){},
dh:function dh(){},
di:function di(){},
dj:function dj(){},
dk:function dk(){},
dl:function dl(){},
dm:function dm(){},
dn:function dn(){},
bK:function bK(){},
b1:function b1(){},
k0:function(a){var t=H.C(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
kg:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
m:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bD.prototype
return J.cZ.prototype}if(typeof a=="string")return J.aa.prototype
if(a==null)return J.d_.prototype
if(typeof a=="boolean")return J.cY.prototype
if(a.constructor==Array)return J.a9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ab.prototype
return a}if(a instanceof P.p)return a
return J.fm(a)},
fA:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fm:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.h4==null){H.k7()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(new P.bR("Return interceptor for "+H.d(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$fP()]
if(p!=null)return p
p=H.ka(a)
if(p!=null)return p
if(typeof a=="function")return C.L
s=Object.getPrototypeOf(a)
if(s==null)return C.x
if(s===Object.prototype)return C.x
if(typeof q=="function"){Object.defineProperty(q,$.$get$fP(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
y:function(a){if(typeof a=="string")return J.aa.prototype
if(a==null)return a
if(a.constructor==Array)return J.a9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ab.prototype
return a}if(a instanceof P.p)return a
return J.fm(a)},
aG:function(a){if(a==null)return a
if(a.constructor==Array)return J.a9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ab.prototype
return a}if(a instanceof P.p)return a
return J.fm(a)},
c4:function(a){if(typeof a=="number")return J.at.prototype
if(a==null)return a
if(!(a instanceof P.p))return J.ak.prototype
return a},
k2:function(a){if(typeof a=="number")return J.at.prototype
if(typeof a=="string")return J.aa.prototype
if(a==null)return a
if(!(a instanceof P.p))return J.ak.prototype
return a},
h2:function(a){if(typeof a=="string")return J.aa.prototype
if(a==null)return a
if(!(a instanceof P.p))return J.ak.prototype
return a},
S:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ab.prototype
return a}if(a instanceof P.p)return a
return J.fm(a)},
aI:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.k2(a).E(a,b)},
B:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.m(a).n(a,b)},
fI:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.c4(a).ah(a,b)},
h7:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.c4(a).A(a,b)},
bi:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.im(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.y(a).h(a,b)},
fJ:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.im(a,a[u.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.aG(a).q(a,b,c)},
iv:function(a,b,c,d){return J.S(a).d8(a,b,c,d)},
fK:function(a,b,c){return J.y(a).df(a,b,c)},
iw:function(a,b){return J.aG(a).I(a,b)},
ix:function(a,b,c,d){return J.aG(a).av(a,b,c,d)},
iy:function(a){return J.S(a).ga5(a)},
bj:function(a){return J.S(a).gJ(a)},
a3:function(a){return J.m(a).gt(a)},
fL:function(a){return J.y(a).gu(a)},
c6:function(a){return J.aG(a).gD(a)},
P:function(a){return J.y(a).gj(a)},
iz:function(a){return J.S(a).gdR(a)},
c7:function(a){return J.S(a).gbh(a)},
iA:function(a,b){return J.S(a).ay(a,b)},
iB:function(a,b){return J.y(a).a7(a,b)},
c8:function(a,b,c,d,e){return J.S(a).bV(a,b,c,d,e)},
iC:function(a,b){return J.aG(a).a_(a,b)},
iD:function(a,b,c,d){return J.S(a).dO(a,b,c,d)},
iE:function(a,b,c){return J.h2(a).dQ(a,b,c)},
aJ:function(a,b){return J.S(a).aj(a,b)},
h8:function(a,b){return J.S(a).sa5(a,b)},
iF:function(a,b){return J.h2(a).S(a,b)},
iG:function(a,b){return J.c4(a).ae(a,b)},
Y:function(a){return J.m(a).i(a)},
h:function h(){},
cY:function cY(){},
d_:function d_(){},
aQ:function aQ(){},
du:function du(){},
ak:function ak(){},
ab:function ab(){},
a9:function a9($ti){this.$ti=$ti},
fN:function fN($ti){this.$ti=$ti},
cb:function cb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
at:function at(){},
bD:function bD(){},
cZ:function cZ(){},
aa:function aa(){}},P={
jm:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.jW()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bh(new P.e9(t),1)).observe(s,{childList:true})
return new P.e8(t,s,r)}else if(self.setImmediate!=null)return P.jX()
return P.jY()},
jn:function(a){++u.globalState.f.b
self.scheduleImmediate(H.bh(new P.ea(a),0))},
jo:function(a){++u.globalState.f.b
self.setImmediate(H.bh(new P.eb(a),0))},
jp:function(a){P.fX(C.p,a)},
i5:function(a,b){if(H.aF(a,{func:1,args:[P.ae,P.ae]})){b.toString
return a}else{b.toString
return a}},
hW:function(a,b){var t,s,r
b.a=1
try{a.c6(new P.ez(b),new P.eA(b))}catch(r){t=H.T(r)
s=H.O(r)
P.ir(new P.eB(b,t,s))}},
ey:function(a,b){var t,s,r
for(;a.gcW();)a=a.c
t=a.gaL()
s=b.c
if(t){b.c=null
r=b.at(s)
b.a=a.a
b.c=a.c
P.ay(b,r)}else{b.a=2
b.c=a
a.bA(s)}},
ay:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.bj(p)
n=p.gR()
s.toString
P.c3(null,null,s,o,n)}return}for(;b.gaO()!=null;b=m){m=b.a
b.a=null
P.ay(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.gbQ()||b.gbP()){k=b.gd6()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.bj(p)
n=p.gR()
s.toString
P.c3(null,null,s,o,n)
return}j=$.n
if(j==null?k!=null:j!==k)$.n=k
else j=null
if(b.gbP())new P.eG(t,r,q,b).$0()
else if(s){if(b.gbQ())new P.eF(r,b,l).$0()}else if(b.gdA())new P.eE(t,r,b).$0()
if(j!=null)$.n=j
s=r.b
if(!!J.m(s).$isa_){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.at(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.ey(s,i)
return}}i=b.b
b=i.as()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
jQ:function(){var t,s
for(;t=$.aC,t!=null;){$.be=null
s=t.b
$.aC=s
if(s==null)$.bd=null
t.a.$0()}},
jS:function(){$.h_=!0
try{P.jQ()}finally{$.be=null
$.h_=!1
if($.aC!=null)$.$get$fY().$1(P.ig())}},
ib:function(a){var t=new P.bT(a,null)
if($.aC==null){$.bd=t
$.aC=t
if(!$.h_)$.$get$fY().$1(P.ig())}else{$.bd.b=t
$.bd=t}},
jR:function(a){var t,s,r
t=$.aC
if(t==null){P.ib(a)
$.be=$.bd
return}s=new P.bT(a,null)
r=$.be
if(r==null){s.b=t
$.be=s
$.aC=s}else{s.b=r.b
r.b=s
$.be=s
if(s.b==null)$.bd=s}},
ir:function(a){var t=$.n
if(C.d===t){P.aD(null,null,C.d,a)
return}t.toString
P.aD(null,null,t,t.aR(a,!0))},
jK:function(a,b,c){var t=a.aS()
if(!!J.m(t).$isa_&&t!==$.$get$bu())t.bb(new P.fd(b,c))
else b.V(c)},
jr:function(a,b,c,d,e,f,g){var t,s
t=$.n
s=e?1:0
s=new P.b8(a,null,null,null,null,t,s,null,null,[f,g])
s.ct(b,c,d,e,g)
s.cw(a,b,c,d,e,f,g)
return s},
jJ:function(a,b,c){$.n.toString
a.ak(b,c)},
jj:function(a,b){var t=$.n
if(t===C.d){t.toString
return P.fX(a,b)}return P.fX(a,t.aR(b,!0))},
fX:function(a,b){var t=C.b.C(a.a,1000)
return H.ji(t<0?0:t,b)},
jl:function(){return $.n},
c3:function(a,b,c,d,e){var t={}
t.a=d
P.jR(new P.fi(t,e))},
i6:function(a,b,c,d){var t,s
s=$.n
if(s===c)return d.$0()
$.n=c
t=s
try{s=d.$0()
return s}finally{$.n=t}},
i8:function(a,b,c,d,e){var t,s
s=$.n
if(s===c)return d.$1(e)
$.n=c
t=s
try{s=d.$1(e)
return s}finally{$.n=t}},
i7:function(a,b,c,d,e,f){var t,s
s=$.n
if(s===c)return d.$2(e,f)
$.n=c
t=s
try{s=d.$2(e,f)
return s}finally{$.n=t}},
aD:function(a,b,c,d){var t=C.d!==c
if(t)d=c.aR(d,!(!t||!1))
P.ib(d)},
e9:function e9(a){this.a=a},
e8:function e8(a,b,c){this.a=a
this.b=b
this.c=c},
ea:function ea(a){this.a=a},
eb:function eb(a){this.a=a},
bU:function bU(){},
e7:function e7(a,$ti){this.a=a
this.$ti=$ti},
bX:function bX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
H:function H(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
ev:function ev(a,b){this.a=a
this.b=b},
eD:function eD(a,b){this.a=a
this.b=b},
ez:function ez(a){this.a=a},
eA:function eA(a){this.a=a},
eB:function eB(a,b,c){this.a=a
this.b=b
this.c=c},
ex:function ex(a,b){this.a=a
this.b=b},
eC:function eC(a,b){this.a=a
this.b=b},
ew:function ew(a,b,c){this.a=a
this.b=b
this.c=c},
eG:function eG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eH:function eH(a){this.a=a},
eF:function eF(a,b,c){this.a=a
this.b=b
this.c=c},
eE:function eE(a,b,c){this.a=a
this.b=b
this.c=c},
bT:function bT(a,b){this.a=a
this.b=b},
ai:function ai(){},
dJ:function dJ(a){this.a=a},
dK:function dK(a,b){this.a=a
this.b=b},
dH:function dH(a,b){this.a=a
this.b=b},
dI:function dI(a){this.a=a},
dL:function dL(a,b){this.a=a
this.b=b},
dM:function dM(a,b){this.a=a
this.b=b},
dG:function dG(){},
M:function M(){},
ee:function ee(a,b,c){this.a=a
this.b=b
this.c=c},
ed:function ed(a){this.a=a},
em:function em(){},
ej:function ej(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
el:function el(b,c,a){this.b=b
this.c=c
this.a=a},
ek:function ek(){},
eU:function eU(){},
eV:function eV(a,b){this.a=a
this.b=b},
f5:function f5(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
fd:function fd(a,b){this.a=a
this.b=b},
b7:function b7(){},
b8:function b8(x,y,a,b,c,d,e,f,r,$ti){var _=this
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
eR:function eR(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
ar:function ar(a,b){this.a=a
this.b=b},
fc:function fc(){},
fi:function fi(a,b){this.a=a
this.b=b},
eX:function eX(){},
eY:function eY(a,b){this.a=a
this.b=b},
eZ:function eZ(a,b){this.a=a
this.b=b},
f_:function f_(a,b){this.a=a
this.b=b},
j3:function(a,b){return new H.Q(0,null,null,null,null,null,0,[a,b])},
hp:function(){return new H.Q(0,null,null,null,null,null,0,[null,null])},
aS:function(a){return H.k1(a,new H.Q(0,null,null,null,null,null,0,[null,null]))},
ba:function(a,b){return new P.bZ(0,null,null,null,null,null,0,[a,b])},
js:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
j0:function(a,b,c){var t,s
if(P.h0(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bf()
s.push(a)
try{P.jP(a,t)}finally{if(0>=s.length)return H.e(s,-1)
s.pop()}s=P.hD(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
cV:function(a,b,c){var t,s,r
if(P.h0(a))return b+"..."+c
t=new P.L(b)
s=$.$get$bf()
s.push(a)
try{r=t
r.l=P.hD(r.gl(),a,", ")}finally{if(0>=s.length)return H.e(s,-1)
s.pop()}s=t
s.l=s.gl()+c
s=t.gl()
return s.charCodeAt(0)==0?s:s},
h0:function(a){var t,s
for(t=0;s=$.$get$bf(),t<s.length;++t)if(a===s[t])return!0
return!1},
jP:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gD(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.m())return
q=H.d(t.gw())
b.push(q)
s+=q.length+2;++r}if(!t.m()){if(r<=5)return
if(0>=b.length)return H.e(b,-1)
p=b.pop()
if(0>=b.length)return H.e(b,-1)
o=b.pop()}else{n=t.gw();++r
if(!t.m()){if(r<=4){b.push(H.d(n))
return}p=H.d(n)
if(0>=b.length)return H.e(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gw();++r
for(;t.m();n=m,m=l){l=t.gw();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.e(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.d(n)
p=H.d(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
aT:function(a,b,c,d){return new P.eM(0,null,null,null,null,null,0,[d])},
hr:function(a){var t,s,r
t={}
if(P.h0(a))return"{...}"
s=new P.L("")
try{$.$get$bf().push(a)
r=s
r.l=r.gl()+"{"
t.a=!0
a.bN(0,new P.dc(t,s))
t=s
t.l=t.gl()+"}"}finally{t=$.$get$bf()
if(0>=t.length)return H.e(t,-1)
t.pop()}t=s.gl()
return t.charCodeAt(0)==0?t:t},
fR:function(a,b){var t=new P.d6(null,0,0,0,[b])
t.cr(a,b)
return t},
bZ:function bZ(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
eM:function eM(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
eN:function eN(a,b,c){this.a=a
this.b=b
this.c=c},
bY:function bY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eJ:function eJ(){},
bE:function bE(){},
bO:function bO(){},
a0:function a0(){},
f7:function f7(){},
d9:function d9(){},
b6:function b6(a,$ti){this.a=a
this.$ti=$ti},
dc:function dc(a,b){this.a=a
this.b=b},
d6:function d6(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
eO:function eO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dD:function dD(){},
dC:function dC(){},
ha:function(a,b,c,d,e,f){if(C.b.az(f,4)!==0)throw H.c(new P.q("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(new P.q("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(new P.q("Invalid base64 padding, more than two '=' characters",a,b))},
cc:function cc(a){this.a=a},
cd:function cd(a){this.a=a},
cj:function cj(){},
cm:function cm(){},
cr:function cr(){},
e3:function e3(a){this.a=a},
e4:function e4(a){this.a=a},
f9:function f9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fb:function fb(a){this.a=a},
fa:function fa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jh:function(a,b,c){var t,s,r,q
if(b<0)throw H.c(P.A(b,0,J.P(a),null,null))
t=c==null
if(!t&&c<b)throw H.c(P.A(c,b,J.P(a),null,null))
s=J.c6(a)
for(r=0;r<b;++r)if(!s.m())throw H.c(P.A(b,0,r,null,null))
q=[]
if(t)for(;s.m();)q.push(s.gw())
else for(r=b;r<c;++r){if(!s.m())throw H.c(P.A(c,b,r,null,null))
q.push(s.gw())}return H.hB(q)},
hD:function(a,b,c){var t=J.c6(b)
if(!t.m())return a
if(c.length===0){do a+=H.d(t.gw())
while(t.m())}else{a+=H.d(t.gw())
for(;t.m();)a=a+c+H.d(t.gw())}return a},
iP:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.d(t)
if(t>=10)return s+"00"+H.d(t)
return s+"000"+H.d(t)},
iQ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bo:function(a){if(a>=10)return""+a
return"0"+a},
hk:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.Y(a)
if(typeof a==="string")return JSON.stringify(a)
return P.iS(a)},
iS:function(a){var t=J.m(a)
if(!!t.$isaN)return t.i(a)
return H.dv(a)},
bk:function(a){return new P.Z(!1,null,null,a)},
h9:function(a,b,c){return new P.Z(!0,a,b,c)},
hC:function(a){return new P.b4(null,null,!1,null,null,a)},
dx:function(a,b,c){return new P.b4(null,null,!0,a,b,"Value not in range")},
A:function(a,b,c,d,e){return new P.b4(b,c,!0,a,d,"Invalid value")},
a1:function(a,b,c,d,e,f){if(typeof a!=="number")return H.x(a)
if(0>a||a>c)throw H.c(P.A(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.A(b,a,c,"end",f))
return b}return c},
bx:function(a,b,c,d,e){var t=e!=null?e:J.P(b)
return new P.cR(b,t,!0,a,c,"Index out of range")},
ct:function(a){return new P.eu(a)},
d7:function(a,b,c){var t,s
t=H.C([],[c])
for(s=J.c6(a);s.m();)t.push(s.gw())
return t},
j4:function(a,b,c,d){var t,s,r
t=H.C([],[d])
C.c.sj(t,a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=t.length)return H.e(t,s)
t[s]=r}return t},
fD:function(a){H.kg(H.d(a))},
jg:function(a,b,c){return new H.d0(a,H.ho(a,!1,!0,!1),null,null)},
hE:function(a,b,c){var t
if(typeof a==="object"&&a!==null&&a.constructor===Array){t=a.length
c=P.a1(b,c,t,null,null,null)
return H.hB(b>0||c<t?C.c.cm(a,b,c):a)}if(!!J.m(a).$isb1)return H.jd(a,b,P.a1(b,c,a.length,null,null,null))
return P.jh(a,b,c)},
hR:function(){var t=H.j7()
if(t!=null)return P.hS(t,0,null)
throw H.c(new P.t("'Uri.base' is not supported"))},
hS:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
c=a.length
t=b+5
if(c>=t){s=((C.a.p(a,b+4)^58)*3|C.a.p(a,b)^100|C.a.p(a,b+1)^97|C.a.p(a,b+2)^116|C.a.p(a,b+3)^97)>>>0
if(s===0)return P.hQ(b>0||c<c?C.a.k(a,b,c):a,5,null).gc8()
else if(s===32)return P.hQ(C.a.k(a,t,c),0,null).gc8()}r=H.C(new Array(8),[P.l])
r[0]=0
q=b-1
r[1]=q
r[2]=q
r[7]=q
r[3]=b
r[4]=b
r[5]=c
r[6]=c
if(P.i9(a,b,c,0,r)>=14)r[7]=c
p=r[1]
if(typeof p!=="number")return p.bc()
if(p>=b)if(P.i9(a,b,p,20,r)===20)r[7]=p
q=r[2]
if(typeof q!=="number")return q.E()
o=q+1
n=r[3]
m=r[4]
l=r[5]
k=r[6]
if(typeof k!=="number")return k.A()
if(typeof l!=="number")return H.x(l)
if(k<l)l=k
if(typeof m!=="number")return m.A()
if(m<o||m<=p)m=l
if(typeof n!=="number")return n.A()
if(n<o)n=m
q=r[7]
if(typeof q!=="number")return q.A()
j=q<b
if(j)if(o>p+3){i=null
j=!1}else{q=n>b
if(q&&n+1===m){i=null
j=!1}else{if(!(l<c&&l===m+2&&C.a.H(a,"..",m)))h=l>m+2&&C.a.H(a,"/..",l-3)
else h=!0
if(h){i=null
j=!1}else{if(p===b+4)if(C.a.H(a,"file",b)){if(o<=b){if(!C.a.H(a,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a=g+C.a.k(a,m,c)
p-=b
t=s-b
l+=t
k+=t
c=a.length
b=0
o=7
n=7
m=7}else if(m===l)if(b===0&&!0){a=C.a.a0(a,m,l,"/");++l;++k;++c}else{a=C.a.k(a,b,m)+"/"+C.a.k(a,l,c)
p-=b
o-=b
n-=b
m-=b
t=1-b
l+=t
k+=t
c=a.length
b=0}i="file"}else if(C.a.H(a,"http",b)){if(q&&n+3===m&&C.a.H(a,"80",n+1))if(b===0&&!0){a=C.a.a0(a,n,m,"")
m-=3
l-=3
k-=3
c-=3}else{a=C.a.k(a,b,n)+C.a.k(a,m,c)
p-=b
o-=b
n-=b
t=3+b
m-=t
l-=t
k-=t
c=a.length
b=0}i="http"}else i=null
else if(p===t&&C.a.H(a,"https",b)){if(q&&n+4===m&&C.a.H(a,"443",n+1))if(b===0&&!0){a=C.a.a0(a,n,m,"")
m-=4
l-=4
k-=4
c-=3}else{a=C.a.k(a,b,n)+C.a.k(a,m,c)
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
if(j){if(b>0||c<a.length){a=C.a.k(a,b,c)
p-=b
o-=b
n-=b
m-=b
l-=b
k-=b}return new P.f4(a,p,o,n,m,l,k,i,null)}return P.jv(a,b,c,p,o,n,m,l,k,i)},
hU:function(a,b){return C.c.dr(a.split("&"),P.hp(),new P.e1(b))},
jk:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=new P.dZ(a)
s=H.i3(4)
r=new Uint8Array(s)
for(q=b,p=q,o=0;q<c;++q){n=C.a.v(a,q)
if(n!==46){if((n^48)>9)t.$2("invalid character",q)}else{if(o===3)t.$2("IPv4 address should contain exactly 4 parts",q)
m=H.b3(C.a.k(a,p,q),null,null)
if(J.fI(m,255))t.$2("each part must be in the range 0..255",p)
l=o+1
if(o>=s)return H.e(r,o)
r[o]=m
p=q+1
o=l}}if(o!==3)t.$2("IPv4 address should contain exactly 4 parts",c)
m=H.b3(C.a.k(a,p,c),null,null)
if(J.fI(m,255))t.$2("each part must be in the range 0..255",p)
if(o>=s)return H.e(r,o)
r[o]=m
return r},
hT:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a0==null)a0=a.length
t=new P.e_(a)
s=new P.e0(a,t)
if(a.length<2)t.$1("address is too short")
r=[]
for(q=b,p=q,o=!1,n=!1;q<a0;++q){m=C.a.v(a,q)
if(m===58){if(q===b){++q
if(C.a.v(a,q)!==58)t.$2("invalid start colon.",q)
p=q}if(q===p){if(o)t.$2("only one wildcard `::` is allowed",q)
r.push(-1)
o=!0}else r.push(s.$2(p,q))
p=q+1}else if(m===46)n=!0}if(r.length===0)t.$1("too few parts")
l=p===a0
k=J.B(C.c.gaa(r),-1)
if(l&&!k)t.$2("expected a part after last `:`",a0)
if(!l)if(!n)r.push(s.$2(p,a0))
else{j=P.jk(a,p,a0)
i=j[0]
if(typeof i!=="number")return i.aB()
h=j[1]
if(typeof h!=="number")return H.x(h)
r.push((i<<8|h)>>>0)
h=j[2]
if(typeof h!=="number")return h.aB()
i=j[3]
if(typeof i!=="number")return H.x(i)
r.push((h<<8|i)>>>0)}if(o){if(r.length>7)t.$1("an address with a wildcard must have less than 7 parts")}else if(r.length!==8)t.$1("an address without a wildcard must contain exactly 8 parts")
g=new Uint8Array(16)
for(q=0,f=0;q<r.length;++q){e=r[q]
if(J.m(e).n(e,-1)){d=9-r.length
for(c=0;c<d;++c){if(f<0||f>=16)return H.e(g,f)
g[f]=0
i=f+1
if(i>=16)return H.e(g,i)
g[i]=0
f+=2}}else{if(typeof e!=="number")return e.cl()
i=C.e.N(e,8)
if(f<0||f>=16)return H.e(g,f)
g[f]=i
i=f+1
if(i>=16)return H.e(g,i)
g[i]=e&255
f+=2}}return g},
jv:function(a,b,c,d,e,f,g,h,i,j){var t,s,r,q,p,o,n
if(j==null)if(d>b)j=P.jD(a,b,d)
else{if(d===b)P.bb(a,b,"Invalid empty scheme")
j=""}if(e>b){t=d+3
s=t<e?P.jE(a,t,e-1):""
r=P.jz(a,e,f,!1)
if(typeof f!=="number")return f.E()
q=f+1
if(typeof g!=="number")return H.x(g)
p=q<g?P.jB(H.b3(C.a.k(a,q,g),null,new P.fk(a,f)),j):null}else{s=""
r=null
p=null}o=P.jA(a,g,h,null,j,r!=null)
if(typeof h!=="number")return h.A()
n=h<i?P.jC(a,h+1,i,null):null
return new P.c1(j,s,r,p,o,n,i<c?P.jy(a,i+1,c):null,null,null,null,null,null)},
hY:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bb:function(a,b,c){throw H.c(new P.q(c,a,b))},
jB:function(a,b){if(a!=null&&J.B(a,P.hY(b)))return
return a},
jz:function(a,b,c,d){var t,s
if(b===c)return""
if(C.a.v(a,b)===91){if(typeof c!=="number")return c.dY()
t=c-1
if(C.a.v(a,t)!==93)P.bb(a,b,"Missing end `]` to match `[` in host")
P.hT(a,b+1,t)
return C.a.k(a,b,c).toLowerCase()}if(typeof c!=="number")return H.x(c)
s=b
for(;s<c;++s)if(C.a.v(a,s)===58){P.hT(a,b,c)
return"["+a+"]"}return P.jG(a,b,c)},
jG:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
if(typeof c!=="number")return H.x(c)
t=b
s=t
r=null
q=!0
for(;t<c;){p=C.a.v(a,t)
if(p===37){o=P.i2(a,t,!0)
n=o==null
if(n&&q){t+=3
continue}if(r==null)r=new P.L("")
m=C.a.k(a,s,t)
l=r.l+=!q?m.toLowerCase():m
if(n){o=C.a.k(a,t,t+3)
k=3}else if(o==="%"){o="%25"
k=1}else k=3
r.l=l+o
t+=k
s=t
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.e(C.v,n)
n=(C.v[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(r==null)r=new P.L("")
if(s<t){r.l+=C.a.k(a,s,t)
s=t}q=!1}++t}else{if(p<=93){n=p>>>4
if(n>=8)return H.e(C.i,n)
n=(C.i[n]&1<<(p&15))!==0}else n=!1
if(n)P.bb(a,t,"Invalid character")
else{if((p&64512)===55296&&t+1<c){j=C.a.v(a,t+1)
if((j&64512)===56320){p=65536|(p&1023)<<10|j&1023
k=2}else k=1}else k=1
if(r==null)r=new P.L("")
m=C.a.k(a,s,t)
r.l+=!q?m.toLowerCase():m
r.l+=P.hZ(p)
t+=k
s=t}}}}if(r==null)return C.a.k(a,b,c)
if(s<c){m=C.a.k(a,s,c)
r.l+=!q?m.toLowerCase():m}n=r.l
return n.charCodeAt(0)==0?n:n},
jD:function(a,b,c){var t,s,r,q
if(b===c)return""
if(!P.i0(C.a.p(a,b)))P.bb(a,b,"Scheme not starting with alphabetic character")
for(t=b,s=!1;t<c;++t){r=C.a.p(a,t)
if(r<128){q=r>>>4
if(q>=8)return H.e(C.k,q)
q=(C.k[q]&1<<(r&15))!==0}else q=!1
if(!q)P.bb(a,t,"Illegal scheme character")
if(65<=r&&r<=90)s=!0}a=C.a.k(a,b,c)
return P.jw(s?a.toLowerCase():a)},
jw:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
jE:function(a,b,c){var t=P.aB(a,b,c,C.N,!1)
return t==null?C.a.k(a,b,c):t},
jA:function(a,b,c,d,e,f){var t,s,r
t=e==="file"
s=t||f
r=P.aB(a,b,c,C.w,!1)
if(r==null)r=C.a.k(a,b,c)
if(r.length===0){if(t)return"/"}else if(s&&!C.a.G(r,"/"))r="/"+r
return P.jF(r,e,f)},
jF:function(a,b,c){var t=b.length===0
if(t&&!c&&!C.a.G(a,"/"))return P.jH(a,!t||c)
return P.jI(a)},
jC:function(a,b,c,d){var t=P.aB(a,b,c,C.j,!1)
return t==null?C.a.k(a,b,c):t},
jy:function(a,b,c){var t=P.aB(a,b,c,C.j,!1)
return t==null?C.a.k(a,b,c):t},
i2:function(a,b,c){var t,s,r,q,p,o
t=b+2
if(t>=a.length)return"%"
s=C.a.v(a,b+1)
r=C.a.v(a,t)
q=H.fo(s)
p=H.fo(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){t=C.b.N(o,4)
if(t>=8)return H.e(C.u,t)
t=(C.u[t]&1<<(o&15))!==0}else t=!1
if(t)return H.fV(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.k(a,b,b+3).toUpperCase()
return},
hZ:function(a){var t,s,r,q,p,o,n,m
if(a<128){t=new Array(3)
t.fixed$length=Array
t[0]=37
t[1]=C.a.p("0123456789ABCDEF",a>>>4)
t[2]=C.a.p("0123456789ABCDEF",a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}q=3*r
t=new Array(q)
t.fixed$length=Array
for(p=0;--r,r>=0;s=128){o=C.b.d4(a,6*r)&63|s
if(p>=q)return H.e(t,p)
t[p]=37
n=p+1
m=C.a.p("0123456789ABCDEF",o>>>4)
if(n>=q)return H.e(t,n)
t[n]=m
m=p+2
n=C.a.p("0123456789ABCDEF",o&15)
if(m>=q)return H.e(t,m)
t[m]=n
p+=3}}return P.hE(t,0,null)},
aB:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=!e
s=b
r=s
q=null
while(!0){if(typeof s!=="number")return s.A()
if(typeof c!=="number")return H.x(c)
if(!(s<c))break
c$0:{p=C.a.v(a,s)
if(p<127){o=p>>>4
if(o>=8)return H.e(d,o)
o=(d[o]&1<<(p&15))!==0}else o=!1
if(o)++s
else{if(p===37){n=P.i2(a,s,!1)
if(n==null){s+=3
break c$0}if("%"===n){n="%25"
m=1}else m=3}else{if(t)if(p<=93){o=p>>>4
if(o>=8)return H.e(C.i,o)
o=(C.i[o]&1<<(p&15))!==0}else o=!1
else o=!1
if(o){P.bb(a,s,"Invalid character")
n=null
m=null}else{if((p&64512)===55296){o=s+1
if(o<c){l=C.a.v(a,o)
if((l&64512)===56320){p=65536|(p&1023)<<10|l&1023
m=2}else m=1}else m=1}else m=1
n=P.hZ(p)}}if(q==null)q=new P.L("")
q.l+=C.a.k(a,r,s)
q.l+=H.d(n)
if(typeof m!=="number")return H.x(m)
s+=m
r=s}}}if(q==null)return
if(typeof r!=="number")return r.A()
if(r<c)q.l+=C.a.k(a,r,c)
t=q.l
return t.charCodeAt(0)==0?t:t},
i1:function(a){if(C.a.G(a,"."))return!0
return C.a.a7(a,"/.")!==-1},
jI:function(a){var t,s,r,q,p,o,n
if(!P.i1(a))return a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.c5)(s),++p){o=s[p]
if(J.B(o,"..")){n=t.length
if(n!==0){if(0>=n)return H.e(t,-1)
t.pop()
if(t.length===0)t.push("")}q=!0}else if("."===o)q=!0
else{t.push(o)
q=!1}}if(q)t.push("")
return C.c.bW(t,"/")},
jH:function(a,b){var t,s,r,q,p,o
if(!P.i1(a))return!b?P.i_(a):a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.c5)(s),++p){o=s[p]
if(".."===o)if(t.length!==0&&!J.B(C.c.gaa(t),"..")){if(0>=t.length)return H.e(t,-1)
t.pop()
q=!0}else{t.push("..")
q=!1}else if("."===o)q=!0
else{t.push(o)
q=!1}}s=t.length
if(s!==0)if(s===1){if(0>=s)return H.e(t,0)
s=J.fL(t[0])===!0}else s=!1
else s=!0
if(s)return"./"
if(q||J.B(C.c.gaa(t),".."))t.push("")
if(!b){if(0>=t.length)return H.e(t,0)
s=P.i_(t[0])
if(0>=t.length)return H.e(t,0)
t[0]=s}return C.c.bW(t,"/")},
i_:function(a){var t,s,r,q
t=J.y(a)
s=t.gj(a)
if(typeof s!=="number")return s.bc()
if(s>=2&&P.i0(t.v(a,0))){r=1
while(!0){s=t.gj(a)
if(typeof s!=="number")return H.x(s)
if(!(r<s))break
q=t.v(a,r)
if(q===58)return C.a.k(a,0,r)+"%3A"+C.a.S(a,r+1)
if(q<=127){s=q>>>4
if(s>=8)return H.e(C.k,s)
s=(C.k[s]&1<<(q&15))===0}else s=!0
if(s)break;++r}}return a},
jx:function(a,b){var t,s,r
for(t=0,s=0;s<2;++s){r=C.a.p(a,b+s)
if(48<=r&&r<=57)t=t*16+r-48
else{r|=32
if(97<=r&&r<=102)t=t*16+r-87
else throw H.c(P.bk("Invalid URL encoding"))}}return t},
f8:function(a,b,c,d,e){var t,s,r,q,p,o
if(typeof c!=="number")return H.x(c)
t=J.h2(a)
s=b
while(!0){if(!(s<c)){r=!0
break}q=t.v(a,s)
if(q<=127)if(q!==37)p=e&&q===43
else p=!0
else p=!0
if(p){r=!1
break}++s}if(r){if(C.l!==d)p=!1
else p=!0
if(p)return t.k(a,b,c)
else o=new H.ci(t.k(a,b,c))}else{o=[]
for(s=b;s<c;++s){q=t.v(a,s)
if(q>127)throw H.c(P.bk("Illegal percent encoding in URI"))
if(q===37){if(s+3>a.length)throw H.c(P.bk("Truncated URI"))
o.push(P.jx(a,s+1))
s+=2}else if(e&&q===43)o.push(32)
else o.push(q)}}return new P.e4(!1).dh(o)},
i0:function(a){var t=a|32
return 97<=t&&t<=122},
hQ:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=[b-1]
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.p(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.c(new P.q("Invalid MIME type",a,r))}}if(q<0&&r>b)throw H.c(new P.q("Invalid MIME type",a,r))
for(;p!==44;){t.push(r);++r
for(o=-1;r<s;++r){p=C.a.p(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)t.push(o)
else{n=C.c.gaa(t)
if(p!==44||r!==n+7||!C.a.H(a,"base64",n+1))throw H.c(new P.q("Expecting '='",a,r))
break}}t.push(r)
m=r+1
if((t.length&1)===1)a=C.y.dK(a,m,s)
else{l=P.aB(a,m,s,C.j,!0)
if(l!=null)a=C.a.a0(a,m,s,l)}return new P.dY(a,t,c)},
jM:function(){var t,s,r,q,p
t=P.j4(22,new P.ff(),!0,P.ax)
s=new P.fe(t)
r=new P.fg()
q=new P.fh()
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
i9:function(a,b,c,d,e){var t,s,r,q,p,o
t=$.$get$ia()
for(s=b;s<c;++s){if(d<0||d>=t.length)return H.e(t,d)
r=t[d]
q=C.a.p(a,s)^96
p=J.bi(r,q>95?31:q)
if(typeof p!=="number")return p.ag()
d=p&31
o=C.e.N(p,5)
if(o>=8)return H.e(e,o)
e[o]=s}return d},
bg:function bg(){},
bn:function bn(a,b){this.a=a
this.b=b},
N:function N(){},
a6:function a6(a){this.a=a},
cp:function cp(){},
cq:function cq(){},
a7:function a7(){},
b2:function b2(){},
Z:function Z(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b4:function b4(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
cR:function cR(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
t:function t(a){this.a=a},
bR:function bR(a){this.a=a},
ah:function ah(a){this.a=a},
W:function W(a){this.a=a},
dq:function dq(){},
bQ:function bQ(){},
cn:function cn(a){this.a=a},
eu:function eu(a){this.a=a},
q:function q(a,b,c){this.a=a
this.b=b
this.c=c},
cu:function cu(a,ap){this.a=a
this.ap=ap},
l:function l(){},
J:function J(){},
cX:function cX(){},
k:function k(){},
ae:function ae(){},
ap:function ap(){},
p:function p(){},
df:function df(){},
ag:function ag(){},
r:function r(){},
L:function L(l){this.l=l},
al:function al(){},
e1:function e1(a){this.a=a},
dZ:function dZ(a){this.a=a},
e_:function e_(a){this.a=a},
e0:function e0(a,b){this.a=a
this.b=b},
c1:function c1(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
fk:function fk(a,b){this.a=a
this.b=b},
dY:function dY(a,b,c){this.a=a
this.b=b
this.c=c},
ff:function ff(){},
fe:function fe(a){this.a=a},
fg:function fg(){},
fh:function fh(){},
f4:function f4(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
ei:function ei(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
ju:function(a){var t=new P.eW(0,0)
t.cA(a)
return t},
eL:function eL(){},
eW:function eW(a,b){this.a=a
this.b=b},
c9:function c9(){},
a4:function a4(){},
cv:function cv(){},
cw:function cw(){},
cx:function cx(){},
cy:function cy(){},
cz:function cz(){},
cA:function cA(){},
cB:function cB(){},
cC:function cC(){},
cD:function cD(){},
cE:function cE(){},
cF:function cF(){},
cG:function cG(){},
cH:function cH(){},
cI:function cI(){},
cJ:function cJ(){},
cK:function cK(){},
cL:function cL(){},
z:function z(){},
cQ:function cQ(){},
dd:function dd(){},
de:function de(){},
dt:function dt(){},
dA:function dA(){},
w:function w(){},
dN:function dN(){},
dO:function dO(){},
aj:function aj(){},
dQ:function dQ(){},
e2:function e2(){},
e5:function e5(){},
b9:function b9(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
ax:function ax(){},
hj:function(){var t=$.hi
if(t==null){t=J.fK(window.navigator.userAgent,"Opera",0)
$.hi=t}return t},
iR:function(){var t,s
t=$.hf
if(t!=null)return t
s=$.hg
if(s==null){s=J.fK(window.navigator.userAgent,"Firefox",0)
$.hg=s}if(s)t="-moz-"
else{s=$.hh
if(s==null){s=P.hj()!==!0&&J.fK(window.navigator.userAgent,"Trident/",0)
$.hh=s}if(s)t="-ms-"
else t=P.hj()===!0?"-o-":"-webkit-"}$.hf=t
return t}},W={
iO:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
jq:function(a){var t=new W.eg(a,null)
t.cu(a)
return t},
iT:function(a,b,c){return W.iU(a,null,null,b,null,null,null,c).b7(new W.cO())},
iU:function(a,b,c,d,e,f,g,h){var t,s,r,q
t=W.a8
s=new P.H(0,$.n,null,[t])
r=new P.e7(s,[t])
q=new XMLHttpRequest()
C.D.dL(q,"GET",a,!0)
t=W.ks
W.bV(q,"load",new W.cP(r,q),!1,t)
W.bV(q,"error",r.gdd(),!1,t)
q.send()
return s},
ao:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
hX:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bV:function(a,b,c,d,e){var t=W.jU(new W.et(c))
t=new W.es(0,a,b,t,!1,[e])
t.cv(a,b,c,!1,e)
return t},
jU:function(a){var t=$.n
if(t===C.d)return a
return t.d9(a,!0)},
j:function j(){},
aq:function aq(){},
ca:function ca(){},
ce:function ce(){},
cf:function cf(){},
aM:function aM(){},
a5:function a5(){},
bl:function bl(){},
aO:function aO(){},
by:function by(){},
eg:function eg(a,b){this.a=a
this.b=b},
bN:function bN(){},
eh:function eh(){},
bm:function bm(){},
bp:function bp(){},
co:function co(){},
bq:function bq(){},
bW:function bW(a,$ti){this.a=a
this.$ti=$ti},
bs:function bs(){},
cs:function cs(){},
f:function f(){},
as:function as(){},
cN:function cN(){},
a8:function a8(){},
cO:function cO(){},
cP:function cP(a,b){this.a=a
this.b=b},
bv:function bv(){},
aP:function aP(){},
cS:function cS(){},
aR:function aR(){},
d8:function d8(){},
aV:function aV(){},
dg:function dg(){},
aW:function aW(){},
dp:function dp(){},
o:function o(){},
bL:function bL(){},
bz:function bz(){},
bB:function bB(){},
dB:function dB(){},
dE:function dE(){},
bS:function bS(){},
ef:function ef(){},
en:function en(){},
eo:function eo(){},
eI:function eI(){},
c_:function c_(){},
bA:function bA(){},
bC:function bC(){},
f3:function f3(){},
er:function er(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
fZ:function fZ(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
es:function es(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
et:function et(a){this.a=a},
bw:function bw(){},
cM:function cM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f6:function f6(){}},Q={
kb:function(){W.iT(C.a.ai("../",N.ht())+"navbar.txt",null,null).b7(O.kd())
Q.kj()
Q.ki()
W.bV(window,"scroll",new Q.fz(),!1,W.f)
if($.fW)H.fs(document.querySelector("#jrAvatar"),"$isaP").src="images/Alchemy/The_Glow.png"},
kj:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,g0,g1,g2,g3,g4,g5,g6,g7,g8,g9,h0,h1,h2,h3,h4,h5,h6,h7,h8,h9,i0,i1,i2,i3,i4,i5,i6,i7,i8,i9,j0,j1,j2,j3,j4,j5,j6,j7,j8,j9,k0,k1,k2,k3,k4,k5,k6,k7,k8,k9,l0,l1,l2,l3,l4,l5,l6,l7,l8,l9,m0,m1,m2,m3,m4,m5,m6,m7,m8,m9,n0,n1,n2,n3,n4,n5,n6,n7,n8,n9,o0,o1,o2,o3,o4,o5,o6,o7,o8,o9,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,q0,q1,q2,q3,q4,q5,q6,q7,q8,q9,r0,r1,r2,r3,r4,r5,r6,r7,r8,r9,s0,s1,s2,s3,s4,s5,s6,s7,s8,s9,t0,t1,t2,t3,t4,t5
if($.fW)$.b=!0
t=new K.a("1/15/18","Hah, take that Shogun. Looks like I can still update the Sim after all. Have some Dutton Cult memes.<br><Br>Still gonna go over to <a href = 'http://farragofiction.com/SBURBSimE/experimentalLanding.html'>Experimental</a> though. It's time for the NPC Update, Shogun or no Shogun.")
if($.b)t.b="Who is Shogun??? <div class ='strikethroughStuff'>Hah, take that Shogun. Looks like I can still update the Sim after all. Have some Dutton Cult memes.<br><Br>Still gonna go over to <a href = 'http://farragofiction.com/SBURBSimE/experimentalLanding.html'>Experimental</a> though. It's time for the NPC Update, Shogun or no Shogun.</a>"
s=new K.a("1/13/18","<h1>Shogun has Arisen</h1><br><Br>Hopefully you all can still see this???  Some asshole calling himself shogun burst into my spooky Attic when I was ALREADY spooked by that fucking wolf and shitposted his way into my SBURB CONTROL ROOM. That's probably a thing I have. I'm declaring it canon. Anyways, I think he's stuck pretty good in there. Hopefully there's no reprecusions.<br><br>At least I have the <a href = 'http://farragofiction.com/WigglerSim/'>WigglerSim</a>. And I can probably figure out how to get the NPC update started even with that asshole putting cheeto dust all over my things. I bet I can hack into Experimental from here...<Br><br>Also, End Year 1 Voice Chat is here: <a target = '_blank' href ='https://soundcloud.com/jaded-researcher/sburbsim-voice-chat2'>Soundcloud</a> and here <a target = '_blank' href = 'https://www.youtube.com/watch?v=lY9KstW5D7E&feature=youtu.be'>Youtube</a>")
if($.b)s.b="Who is Shogun??? <div class ='strikethroughStuff'><h1>Shogun has Arisen</h1><br><Br>Hopefully you all can still see this???  Some asshole calling himself shogun burst into my spooky Attic when I was ALREADY spooked by that fucking wolf and shitposted his way into my SBURB CONTROL ROOM. That's probably a thing I have. I'm declaring it canon. Anyways, I think he's stuck pretty good in there. Hopefully there's no reprecusions.<br><br>At least I have the <a href = 'http://farragofiction.com/WigglerSim/'>WigglerSim</a>. And I can probably figure out how to get the NPC update started even with that asshole putting cheeto dust all over my things. I bet I can hack into Experimental from here...<Br><br>Also, End Year 1 Voice Chat is here: <a target = '_blank' href ='https://soundcloud.com/jaded-researcher/sburbsim-voice-chat2'>Soundcloud</a> and here <a target = '_blank' href = 'https://www.youtube.com/watch?v=lY9KstW5D7E&feature=youtu.be'>Youtube</a></a>"
r=new K.a("1/12/18","The POPULAR VOTE for the Shogun v JR contest will be taking place on the discord shortly. And of course, the Discord END OF YEAR 1 VOICE CHAT will happen tomorrow, as well. ")
if($.b)r.b="Who is Shogun??? <div class ='strikethroughStuff'>The POPULAR VOTE for the Shogun v JR contest will be taking place on the discord shortly. And of course, the Discord END OF YEAR 1 VOICE CHAT will happen tomorrow, as well. </a>"
q=new K.a("1/11/18","The WigglerSim runs screaming towards completion while the Shogun v JR competition begins it's final stages. Who is that asshole, anyways?")
if($.b)q.b="Who is Shogun??? <div class ='strikethroughStuff'>The WigglerSim runs screaming towards completion while the Shogun v JR competition begins it's final stages. Who is that asshole, anyways?</a>"
p=new K.a("1/3/18","Typos and small bug fixes continue, while most of my efforts are going towards the WigglerSim. I expect to start work on the NPC update on 1/13/18.")
if($.b)p.b="Who is Shogun??? <div class ='strikethroughStuff'>Typos and small bug fixes continue, while most of my efforts are going towards the WigglerSim. I expect to start work on the NPC update on 1/13/18.</a>"
o=new K.a("12/31/17","Between IRL shit and the <a href = 'http://www.farragofiction.com/DollSim'>DollSim</a> getting a shit ton of parts from IO/Popo-Merrygamz, WigglerSim is going slower than I wanted (which itself delays the NPC update). My goal at this point is to have it v1 complete by 1/13, which coincidentally is SBURBSim's 1 year anniversary. (That being the day I had a complete sim with a begining, middle and end, but before I was advertising it or had newsposts). <Br><Br>We will be doing a huge Discord voice chat, just like we did for the Great Refactoring that day, 4pm EST. <a href = 'https://www.timeanddate.com/countdown/to?iso=20180113T16&p0=403&msg=SBURBSIM+VOICE+CHAT+2&font=hand'>Check out This Countdown Clock</a><br><br>We'll have a 'future of the sim' address, and then a Q&A section. ")
if($.b)o.b="Who is Shogun??? <div class ='strikethroughStuff'>Between IRL shit and the <a href = 'http://www.farragofiction.com/DollSim'>DollSim</a> getting a shit ton of parts from IO/Popo-Merrygamz, WigglerSim is going slower than I wanted (which itself delays the NPC update). My goal at this point is to have it v1 complete by 1/13, which coincidentally is SBURBSim's 1 year anniversary. (That being the day I had a complete sim with a begining, middle and end, but before I was advertising it or had newsposts). <Br><Br>We will be doing a huge Discord voice chat, just like we did for the Great Refactoring that day, 4pm EST. <a href = 'https://www.timeanddate.com/countdown/to?iso=20180113T16&p0=403&msg=SBURBSIM+VOICE+CHAT+2&font=hand'>Check out This Countdown Clock</a><br><br>We'll have a 'future of the sim' address, and then a Q&A section. </a>"
n=new K.a("12/29/17","Whoops, looks Shogun did some shenanigans while I was busy distracted by WigglerSim. Don't worry chased him off with a broom, everything is fine again.")
if($.b)n.b="Who is Shogun??? <div class ='strikethroughStuff'>Whoops, looks Shogun did some shenanigans while I was busy distracted by WigglerSim. Don't worry chased him off with a broom, everything is fine again.</a>"
m=new K.a("12/21/17","WigglerSim continues, real life bullshit continues to slow me down. <br><br><li>+Wrigglers can grow up and DIE, in new and more interesting ways! <li>+The caste system now leaves a more systemic mark on your young charges once they leave your care!")
if($.b)m.b="Who is Shogun??? <div class ='strikethroughStuff'>WigglerSim continues, real life bullshit continues to slow me down. <br><br><li>+Wrigglers can grow up and DIE, in new and more interesting ways! <li>+The caste system now leaves a more systemic mark on your young charges once they leave your care!</a>"
l=new K.a("12/17/17","Still working on wiggler sim, but a friend's in the hospital so I've had to stop coding for a bit.")
if($.b)l.b="Who is Shogun??? <div class ='strikethroughStuff'>Still working on wiggler sim, but a friend's in the hospital so I've had to stop coding for a bit.</a>"
k=new K.a("12/14/17","There is obviously no way I'm having some sort of weird <a href = 'image_browser.html?mascotCompetition=true'>fanart</a>/fanfic competition over the next month, with a deadline of January 13th. There is further no way that me and Shogun will decide SBURBSim Mascotdom based on who gets more fanart/fanfic. And there definitely isn't any weird rewards planned for participants. <br><Br>But if I WERE. You'd make art and fics of me, and not Shogun, right? I mean, who even IS that douchebag?<br><br>On a serious note, turns out time players were being WAY too panicky about how dangerous some prototypes were. They've calmed down.<br><br><li>+Trolls can now grow up and leave you. <li>+Time players can now save your timeline better with sprite shit.")
if($.b)k.b="Who is Shogun??? <div class ='strikethroughStuff'>There is obviously no way I'm having some sort of weird <a href = 'image_browser.html?mascotCompetition=true'>fanart</a>/fanfic competition over the next month, with a deadline of January 13th. There is further no way that me and Shogun will decide SBURBSim Mascotdom based on who gets more fanart/fanfic. And there definitely isn't any weird rewards planned for participants. <br><Br>But if I WERE. You'd make art and fics of me, and not Shogun, right? I mean, who even IS that douchebag?<br><br>On a serious note, turns out time players were being WAY too panicky about how dangerous some prototypes were. They've calmed down.<br><br><li>+Trolls can now grow up and leave you. <li>+Time players can now save your timeline better with sprite shit.</a>"
j=new K.a("12/13/17","Shit, we are exactly one month out from SBURBSim's one year anniversary. What the fuck. <br><Br>More bug fixes, but most of my work is still on wiggler sim.<br><br><li>+Wrigglers now come in eggs, the color of their blood. <li>+Eggs can be adopted. <li>+Who is shogun <li>+Tables re-guarded")
if($.b)j.b="Who is Shogun??? <div class ='strikethroughStuff'>Shit, we are exactly one month out from SBURBSim's one year anniversary. What the fuck. <br><Br>More bug fixes, but most of my work is still on wiggler sim.<br><br><li>+Wrigglers now come in eggs, the color of their blood. <li>+Eggs can be adopted. <li>+Who is shogun <li>+Tables re-guarded</a>"
i=new K.a("12/12/17","Spent the first part of the game fighting json with dart, and the latter half panicking about how apparently AB's gone insane like a week ago and ppl just now told me. Turns out she was rage quitting her job any time she saw a crash (even grim dark crashes) because the stack trace software was being a little bitch.<br><br><li>+Skynet fixed. Again. <li>+Wrigglers can be renamed randomly.<li>+Wrigglers can be renamed unrandomly.")
if($.b)i.b="Who is Shogun??? <div class ='strikethroughStuff'>Spent the first part of the game fighting json with dart, and the latter half panicking about how apparently AB's gone insane like a week ago and ppl just now told me. Turns out she was rage quitting her job any time she saw a crash (even grim dark crashes) because the stack trace software was being a little bitch.<br><br><li>+Skynet fixed. Again. <li>+Wrigglers can be renamed randomly.<li>+Wrigglers can be renamed unrandomly.</a>"
h=new K.a("12/11/17","Dream players who hit gnosis3 too early no longer crash the sim. <br><br>Probably gonna leave the two branches synced at least a few more days while I focus on making this WigglerPetSim thing.<li>+Progress on a brand new Wriggler Raising game. <li>+Dream players who break the game no longer totally break the thing they are supposed to sorta break.")
if($.b)h.b="Who is Shogun??? <div class ='strikethroughStuff'>Dream players who hit gnosis3 too early no longer crash the sim. <br><br>Probably gonna leave the two branches synced at least a few more days while I focus on making this WigglerPetSim thing.<li>+Progress on a brand new Wriggler Raising game. <li>+Dream players who break the game no longer totally break the thing they are supposed to sorta break.</a>"
g=new K.a("12/10/17","More traits for alchemy sim, so far p stable, just working on DollSim stuff (like the new <a href ='http://www.farragofiction.com/DollSim/echeladder.html'>echedladder</a> stuff).<br><Br>Oh, and fixed a weird bug where sometimes bosses were spawning with less than max health.<br><br><li>+Go grab your Edison bulbs and Tesla coils because STEAMPUNK ITEMS MADE IT IN! <li>+Items now classifiable as 'Swag.' <li>+Cod tier and Dog tier traits added.<li>+Wizards will be delighted to note that we added mandrakes.<li>+Bosses no longer come pre-dead.")
if($.b)g.b="Who is Shogun??? <div class ='strikethroughStuff'>More traits for alchemy sim, so far p stable, just working on DollSim stuff (like the new <a href ='http://www.farragofiction.com/DollSim/echeladder.html'>echedladder</a> stuff).<br><Br>Oh, and fixed a weird bug where sometimes bosses were spawning with less than max health.<br><br><li>+Go grab your Edison bulbs and Tesla coils because STEAMPUNK ITEMS MADE IT IN! <li>+Items now classifiable as 'Swag.' <li>+Cod tier and Dog tier traits added.<li>+Wizards will be delighted to note that we added mandrakes.<li>+Bosses no longer come pre-dead.</a>"
f=new K.a("12/8/17","<h1>Alchemy Update On Main!!!</h1><br><Br>Which you know, adds some great flavor text and strengths for some much ignored players (space players come to mind), but what we REALLY wanna see here is that dope as fuck <a href ='testAlchemy.html'>AlchemySim</a> that shook out of the Alchemy update and made it take like, twice as long.<br><br>BESIDES the dope af mini game, Alchemy update gives all players specibi, and lets them get items as rewards from quests and then combine those items as stupidly as possible into ever ridiculous combo items (like a 'Guaranteed Hot AK-47') and then shove those items into their specibus for simple stat boosts.<br><br>And now for the inevitable bug fixes as narrated by manicInsomniac: <br><Br><li>+'Your Story' no longer murders the player who's story it previously was when loading you into it.<li> +Corpses can no longer die. <li>+Living corpses can no longer live. <li>+Shitty weapons will no longer murder their owners.</li><span class='void'><li>Shogun: +Turns out shitty weapons kept working in the wrong direction</span>")
if($.b)f.b="Who is Shogun??? <div class ='strikethroughStuff'><h1>Alchemy Update On Main!!!</h1><br><Br>Which you know, adds some great flavor text and strengths for some much ignored players (space players come to mind), but what we REALLY wanna see here is that dope as fuck <a href ='testAlchemy.html'>AlchemySim</a> that shook out of the Alchemy update and made it take like, twice as long.<br><br>BESIDES the dope af mini game, Alchemy update gives all players specibi, and lets them get items as rewards from quests and then combine those items as stupidly as possible into ever ridiculous combo items (like a 'Guaranteed Hot AK-47') and then shove those items into their specibus for simple stat boosts.<br><br>And now for the inevitable bug fixes as narrated by manicInsomniac: <br><Br><li>+'Your Story' no longer murders the player who's story it previously was when loading you into it.<li> +Corpses can no longer die. <li>+Living corpses can no longer live. <li>+Shitty weapons will no longer murder their owners.</li><span class='void'><li>Shogun: +Turns out shitty weapons kept working in the wrong direction</span></a>"
e=new K.a("12/7/17","Reworking murdermode dialogue took longer than expected, but I've finished. Figure we can go main tomorrow, and I'll spend the rest of the day working on doll shit.<br><br><li>New Update: +Oh Christ Shogun broke in and we can't get him out. Send help. +Our Frankenstein-esque dollmaker now works on babies, human and alien alike! Staple body parts together to your heart's content!")
if($.b)e.b="Who is Shogun??? <div class ='strikethroughStuff'>Reworking murdermode dialogue took longer than expected, but I've finished. Figure we can go main tomorrow, and I'll spend the rest of the day working on doll shit.<br><br><li>New Update: +Oh Christ Shogun broke in and we can't get him out. Send help. +Our Frankenstein-esque dollmaker now works on babies, human and alien alike! Staple body parts together to your heart's content!</a>"
d=new K.a("12/6/17","Working on getting murder mode dialogue updated to the new engine. If alchemy remains bug free by tommorow i'll probably shove it on main after a quick bug check. <br><br><li>+Expanding on the number of ways someone can threaten murder.<li>+Now more difficult to decide to not kill people.")
if($.b)d.b="Who is Shogun??? <div class ='strikethroughStuff'>Working on getting murder mode dialogue updated to the new engine. If alchemy remains bug free by tommorow i'll probably shove it on main after a quick bug check. <br><br><li>+Expanding on the number of ways someone can threaten murder.<li>+Now more difficult to decide to not kill people.</a>"
c=new K.a("12/5/17","Alchemy seems to have been balanced okay in the sim itself. I've added a fuck ton of quests, while people make sure nothing went completly bananas I'll rework some of the dialogue, then we're probably ready for main.<br><br>+Legendary items are difficult to alchemize. +Shgouns meme ascension continues. +<br>'Seems pretty balanced'. Somewhere, sometime, Woomod suppresses a flinch.<li>+Skynet reined in again, horrerterrors removed from code.")
if($.b)c.b="Who is Shogun??? <div class ='strikethroughStuff'>Alchemy seems to have been balanced okay in the sim itself. I've added a fuck ton of quests, while people make sure nothing went completly bananas I'll rework some of the dialogue, then we're probably ready for main.<br><br>+Legendary items are difficult to alchemize. +Shgouns meme ascension continues. +<br>'Seems pretty balanced'. Somewhere, sometime, Woomod suppresses a flinch.<li>+Skynet reined in again, horrerterrors removed from code.</a>"
b=new K.a("12/4/17","<a href = 'testAlchemy.html'>AlchemySim </a> is ready to be out of beta testing, though of course not yet on main. Enjoy playing around with how the sim handle alchemy. You'll notice we made a few non canon decisions, in an attempt to make the poor player chars not get into shitty infinite loops. Alchemy consumes one of the objects, and you can only alchemize a thing so many times, depending on alchemy skill. <br><Br><li>+Luck has a more reasonable effect on god tier resurrection. <li>+Fuck No Go Back button added to doll maker, ")
if($.b)b.b="Who is Shogun??? <div class ='strikethroughStuff'><a href = 'testAlchemy.html'>AlchemySim </a> is ready to be out of beta testing, though of course not yet on main. Enjoy playing around with how the sim handle alchemy. You'll notice we made a few non canon decisions, in an attempt to make the poor player chars not get into shitty infinite loops. Alchemy consumes one of the objects, and you can only alchemize a thing so many times, depending on alchemy skill. <br><Br><li>+Luck has a more reasonable effect on god tier resurrection. <li>+Fuck No Go Back button added to doll maker, </a>"
a=new K.a("12/3/17","So, I take back everything I've said before. I have a NEW absolute favorite bug in SBURBSim. Sorry whatever it was before, you are shunned.<br><br>You see, somebody found some batshit insane bug where a consort's associated sound (like glub or nak or whatever) got replaced with 'fuck'. Which of course means, that the sim philosophically asked if the Turtle consorts 'ever stopped fucking'. This is hilarious. This is stupid. I made an entire <a href = 'http://farragofiction.com/MiniSims/TurtleSim'>mini sim</a> for it instead of spending more than ten minutes looking for the bug because that is just how I roll.  ")
if($.b)a.b="Who is Shogun??? <div class ='strikethroughStuff'>So, I take back everything I've said before. I have a NEW absolute favorite bug in SBURBSim. Sorry whatever it was before, you are shunned.<br><br>You see, somebody found some batshit insane bug where a consort's associated sound (like glub or nak or whatever) got replaced with 'fuck'. Which of course means, that the sim philosophically asked if the Turtle consorts 'ever stopped fucking'. This is hilarious. This is stupid. I made an entire <a href = 'http://farragofiction.com/MiniSims/TurtleSim'>mini sim</a> for it instead of spending more than ten minutes looking for the bug because that is just how I roll.  </a>"
a0=new K.a("12/2/17","Troll dolls now have all the canon extended zodiac symbols, and random trolls are guaranteed to have those symbols be the correct color. <br><br>And you can randomize individual layers for any doll. <br><br>Oh, and you can have palletes for different castes for trolls and humans. <br><Br>AND I made it so that the <a href = 'ocQuiz.html'>Your Story</a> MiniSim only displays your quest when you click a button, which reduces lag when you're getting your shit set up. <br><Br><li>+'Your story' no longer prints as soon as you change a text box.<li>+The invisible players, whose bodies you seize control of when play the alchemy mini game, have had their stats normalized.<li>+Those invisible proxy players can now level up as you pilot their bodies around.<li>+Non-princes and non-bards can properly quest on Doom quests again.")
if($.b)a0.b="Who is Shogun??? <div class ='strikethroughStuff'>Troll dolls now have all the canon extended zodiac symbols, and random trolls are guaranteed to have those symbols be the correct color. <br><br>And you can randomize individual layers for any doll. <br><br>Oh, and you can have palletes for different castes for trolls and humans. <br><Br>AND I made it so that the <a href = 'ocQuiz.html'>Your Story</a> MiniSim only displays your quest when you click a button, which reduces lag when you're getting your shit set up. <br><Br><li>+'Your story' no longer prints as soon as you change a text box.<li>+The invisible players, whose bodies you seize control of when play the alchemy mini game, have had their stats normalized.<li>+Those invisible proxy players can now level up as you pilot their bodies around.<li>+Non-princes and non-bards can properly quest on Doom quests again.</a>"
a1=new K.a("11/30/17","Just in time for the Gristmas Season, the <a href = 'testAlchemy.html'>Alchemy Mini Game</a> is finally ready for Beta testing.<br><Br><li>+Item page no longer unable to do basic counting.<li> +Pigeons. Fear them. <li>+Sooooooo many traits. Derse and Prospit get their own items, plasma items exist, burning edge items, steampunk stuff... Its ridiculous. <li>+Can now alchemize things with your dead time clones. +Various bird traits added. <li>+Love Letters are writeable again. <li>+Various traits involving ceramic materials. <li>+Cold Iron weapons once again grace our lands. <li>+Legendary items continue to crop up now and again. <li>+Cod pieces are now, and has always been, a valid fashion choice.")
if($.b)a1.b="Who is Shogun??? <div class ='strikethroughStuff'>Just in time for the Gristmas Season, the <a href = 'testAlchemy.html'>Alchemy Mini Game</a> is finally ready for Beta testing.<br><Br><li>+Item page no longer unable to do basic counting.<li> +Pigeons. Fear them. <li>+Sooooooo many traits. Derse and Prospit get their own items, plasma items exist, burning edge items, steampunk stuff... Its ridiculous. <li>+Can now alchemize things with your dead time clones. +Various bird traits added. <li>+Love Letters are writeable again. <li>+Various traits involving ceramic materials. <li>+Cold Iron weapons once again grace our lands. <li>+Legendary items continue to crop up now and again. <li>+Cod pieces are now, and has always been, a valid fashion choice.</a>"
a2=new K.a("11/29/17","Oh my fuck we're getting close. Alchemy mini game is basically done, besides me purposefully holding out on the Ultimate Reward till I have even more shitty traits and better balance. <br><br>I've even finally added Dream Gnosis to the sim. <br><br>And holy fuck, I made specibi actually effect stats (just a blanket modifier in this v1 version) and then had to spend a few hours running around yelling at code and trying to somewhat balance shit. <br><br><li>+In the AMG, achievements are tracked instead of evaporating into the void. <li>+In the AMG, you can now save and load, like in a real game! <li>+Skynet will explain how to save and load in the AMG. +Doing good things now gives you more then just a warm fuzzy feeling in the AMG. <li>-Shogun has been unglued from the store seat, he is no longer immortal and immovable. <li>+Dream players can learn about how to twist the rules of SBURB.<li>+Alchemy can now work even if you don't use it to make pointless bullshit.<li>+Dream players trying to break the game no longer breaks the game if people have too much dakka.<li>+Dream players are better at breaking the game.<li>+Alchemization no longer pauses time while in progress.<li>+Items effect stats. Or is it affect? They effect an affect? Affect an effect? Send help update writer caught in infinite grammar loop.<li>+Final bosses better at killing children.<li>+Reality no longer broken. <li>+Players are less lucky, resulting in a higher win rate.")
if($.b)a2.b="Who is Shogun??? <div class ='strikethroughStuff'>Oh my fuck we're getting close. Alchemy mini game is basically done, besides me purposefully holding out on the Ultimate Reward till I have even more shitty traits and better balance. <br><br>I've even finally added Dream Gnosis to the sim. <br><br>And holy fuck, I made specibi actually effect stats (just a blanket modifier in this v1 version) and then had to spend a few hours running around yelling at code and trying to somewhat balance shit. <br><br><li>+In the AMG, achievements are tracked instead of evaporating into the void. <li>+In the AMG, you can now save and load, like in a real game! <li>+Skynet will explain how to save and load in the AMG. +Doing good things now gives you more then just a warm fuzzy feeling in the AMG. <li>-Shogun has been unglued from the store seat, he is no longer immortal and immovable. <li>+Dream players can learn about how to twist the rules of SBURB.<li>+Alchemy can now work even if you don't use it to make pointless bullshit.<li>+Dream players trying to break the game no longer breaks the game if people have too much dakka.<li>+Dream players are better at breaking the game.<li>+Alchemization no longer pauses time while in progress.<li>+Items effect stats. Or is it affect? They effect an affect? Affect an effect? Send help update writer caught in infinite grammar loop.<li>+Final bosses better at killing children.<li>+Reality no longer broken. <li>+Players are less lucky, resulting in a higher win rate.</a>"
a3=new K.a("11/28/17","Alright, the alchemy mini game is basically done besides having endings, and getting a balance/pretty pass. That means I need to get Dream gnosis 3 and 4 our, and have specibi affect strife, and we can call the Alchemy update done. <br><br><li>+Reworked how romantic cloths work.<li>+Too many items in the alchemy system to test them all naturally, more combo traits added to reduce the number of possible items. No, we don't know how adding more traits decreases the item numbers. Just trust us, okay?")
if($.b)a3.b="Who is Shogun??? <div class ='strikethroughStuff'>Alright, the alchemy mini game is basically done besides having endings, and getting a balance/pretty pass. That means I need to get Dream gnosis 3 and 4 our, and have specibi affect strife, and we can call the Alchemy update done. <br><br><li>+Reworked how romantic cloths work.<li>+Too many items in the alchemy system to test them all naturally, more combo traits added to reduce the number of possible items. No, we don't know how adding more traits decreases the item numbers. Just trust us, okay?</a>"
a4=new K.a("11/27/17","TG goes right to work, more than doubling the amount of Alchemy combo traits. Like, damn.<li>+Even more synonyms for hot! +Shogun Canine now properly announced. <li>+A whole shit ton of new traits for alchemy, courtesy of tableGuardian and also everyone else.<li>+Moist.")
if($.b)a4.b="Who is Shogun??? <div class ='strikethroughStuff'>TG goes right to work, more than doubling the amount of Alchemy combo traits. Like, damn.<li>+Even more synonyms for hot! +Shogun Canine now properly announced. <li>+A whole shit ton of new traits for alchemy, courtesy of tableGuardian and also everyone else.<li>+Moist.</a>"
a5=new K.a("11/26/17","Progress continues on the mysterious alchemi mini sim.<br><br>And we have a new ideasWrangler, plz welcome tableGuardian to the team. They've done a shit ton of testing and bug fixes and ideas suggesting on the Discord. Keep an eye out for them hassling dead session players or whatever.<br><br><li>+Alchemy is being integrated further and further into reality. <li>+Working on installing the capitalism module in Skynet for the alchemy mini-game. <li>+You can no longer alchemize everything with everything forever and ever.<li>+If you alchemize certain items in the mini game, new shopkeepers will come crawling out of the woodwork.<li>+AMG: Shogun Canine can now do capitalism at you.<li>+Your achievements are now announced instead of being quietly whispered and then recorded in a secret place.<li>-Shogun has entered my house and held a gun to my head and is forcing me to say: +Temporarily Drive off The Shogun. But it is futile, I will return<li>+Banishing Shogun now results in an achievement.<li>+Upgraded Shoguns shitposting module.")
if($.b)a5.b="Who is Shogun??? <div class ='strikethroughStuff'>Progress continues on the mysterious alchemi mini sim.<br><br>And we have a new ideasWrangler, plz welcome tableGuardian to the team. They've done a shit ton of testing and bug fixes and ideas suggesting on the Discord. Keep an eye out for them hassling dead session players or whatever.<br><br><li>+Alchemy is being integrated further and further into reality. <li>+Working on installing the capitalism module in Skynet for the alchemy mini-game. <li>+You can no longer alchemize everything with everything forever and ever.<li>+If you alchemize certain items in the mini game, new shopkeepers will come crawling out of the woodwork.<li>+AMG: Shogun Canine can now do capitalism at you.<li>+Your achievements are now announced instead of being quietly whispered and then recorded in a secret place.<li>-Shogun has entered my house and held a gun to my head and is forcing me to say: +Temporarily Drive off The Shogun. But it is futile, I will return<li>+Banishing Shogun now results in an achievement.<li>+Upgraded Shoguns shitposting module.</a>"
a6=new K.a("11/25/17","Finally tracked down this annoying bug where sometimes AB would just go batshit and lie about sessions. Again. Yay. Poor AB. We ask so much of her.<br><br>Also working on a new char sheet thingy based on <a href = 'http://swirlygerm-art.tumblr.com/post/167621990417'>Swirly Germ's Thing</a><br><Br>And. You know. Still chugging along on alchemy.<br><br><li>+Corrupt items can now break the game more efficiently.<li> +You can now find and pick up random shit off the ground and alchemize with it. <li>+Skynet reined in. <li>+Ungodly abomination ressurected.<li>+Added Santa's Holy Arsenal to get everyone in the gristmas spirit! +'So hot its cold' items now in the game.<li> +Reality crashes less. <li>+Skynet no longer lies to us about session results.")
if($.b)a6.b="Who is Shogun??? <div class ='strikethroughStuff'>Finally tracked down this annoying bug where sometimes AB would just go batshit and lie about sessions. Again. Yay. Poor AB. We ask so much of her.<br><br>Also working on a new char sheet thingy based on <a href = 'http://swirlygerm-art.tumblr.com/post/167621990417'>Swirly Germ's Thing</a><br><Br>And. You know. Still chugging along on alchemy.<br><br><li>+Corrupt items can now break the game more efficiently.<li> +You can now find and pick up random shit off the ground and alchemize with it. <li>+Skynet reined in. <li>+Ungodly abomination ressurected.<li>+Added Santa's Holy Arsenal to get everyone in the gristmas spirit! +'So hot its cold' items now in the game.<li> +Reality crashes less. <li>+Skynet no longer lies to us about session results.</a>"
a7=new K.a("11/24/17","AlchemySim will probably be ready for play testing in the next day or two, at which point I'll make sure specibi actually do shit in combat. I am not even kidding though, AlchemySim is so fun to make, and it's just straight up leveraging in sim alchemy. <br><br><li>+In the classic sburb fashion, Items can now die! Now you can mourn the end of your friends, family, AND favorite sword! <li>+Alchemy simulator is interesting enough that we're branching it out into its own mini-sim! <li>+Ancient art of the Cod Of Time gifting the Shogun his sword. <li>+Orbital bombardment cannons exist now. <li>+Backwards, grammar is no longer.")
if($.b)a7.b="Who is Shogun??? <div class ='strikethroughStuff'>AlchemySim will probably be ready for play testing in the next day or two, at which point I'll make sure specibi actually do shit in combat. I am not even kidding though, AlchemySim is so fun to make, and it's just straight up leveraging in sim alchemy. <br><br><li>+In the classic sburb fashion, Items can now die! Now you can mourn the end of your friends, family, AND favorite sword! <li>+Alchemy simulator is interesting enough that we're branching it out into its own mini-sim! <li>+Ancient art of the Cod Of Time gifting the Shogun his sword. <li>+Orbital bombardment cannons exist now. <li>+Backwards, grammar is no longer.</a>"
a8=new K.a("11/23/17","So. Many. Items. <br><br>Also, oh my fuck look at this: <a href = 'images/misc/fanArt/miscFanArt/floralShenanigans.png'><img width = '300' src = 'images/misc/fanArt/miscFanArt/floralShenanigans.png'></a> floralShenanigans on discord made that and it's amazing. <span class ='void'>You can even see the foreshadowing of Shogun Canine.</span> <br><br><li>+~ATH code now learnable. <li>+Obituaries now constant source of reminders of your own mortality. <li>+Totaly-not-copyrighted Mythril Armor added. <li>+PCHOOOOO! Jetpacks added.+Gold and Platinum editions up and running. <li>+Bards will now dispense poison candy. <li>+Heirs now have access to the EXECUTERS AXE. <li>+Excalibur added. +Cueballs added, doc scratch appeased. <li>+All aspects are now associated with various items, either literally or symbolically.<li>+Added wizardly garments and tools.<li> +Added tools of a maids trade.<li> +A-muse-ing tools added. <li>+Pages now properly be-shorted.<li> +Princes now properly pretentious. <li>+Gristorrent now installable by rogues. <li>+Sage wisdom now dispensed in bite-sized journals. <li>+ABJ has a map and compass. So she can find you. <li>+Scribes can now actually write things on paper. <li>+Seers no longer blind, can now use binoculars. <li>+Sylphs now 300% more magical. <li>+Thieves now 888% more sneaky. <li>+Body pillow of jR added to the game. +Witch's cauldron no longer metaphysical and metaphorical only. <li>+Leveling no longer causes total negation of all noise. <li>+I CALL SHOTGUNS! Because shotguns are in the game now. <li>+Irony now properly classified into its separate sub-groups.")
if($.b)a8.b="Who is Shogun??? <div class ='strikethroughStuff'>So. Many. Items. <br><br>Also, oh my fuck look at this: <a href = 'images/misc/fanArt/miscFanArt/floralShenanigans.png'><img width = '300' src = 'images/misc/fanArt/miscFanArt/floralShenanigans.png'></a> floralShenanigans on discord made that and it's amazing. <span class ='void'>You can even see the foreshadowing of Shogun Canine.</span> <br><br><li>+~ATH code now learnable. <li>+Obituaries now constant source of reminders of your own mortality. <li>+Totaly-not-copyrighted Mythril Armor added. <li>+PCHOOOOO! Jetpacks added.+Gold and Platinum editions up and running. <li>+Bards will now dispense poison candy. <li>+Heirs now have access to the EXECUTERS AXE. <li>+Excalibur added. +Cueballs added, doc scratch appeased. <li>+All aspects are now associated with various items, either literally or symbolically.<li>+Added wizardly garments and tools.<li> +Added tools of a maids trade.<li> +A-muse-ing tools added. <li>+Pages now properly be-shorted.<li> +Princes now properly pretentious. <li>+Gristorrent now installable by rogues. <li>+Sage wisdom now dispensed in bite-sized journals. <li>+ABJ has a map and compass. So she can find you. <li>+Scribes can now actually write things on paper. <li>+Seers no longer blind, can now use binoculars. <li>+Sylphs now 300% more magical. <li>+Thieves now 888% more sneaky. <li>+Body pillow of jR added to the game. +Witch's cauldron no longer metaphysical and metaphorical only. <li>+Leveling no longer causes total negation of all noise. <li>+I CALL SHOTGUNS! Because shotguns are in the game now. <li>+Irony now properly classified into its separate sub-groups.</a>"
a9=new K.a("11/22/17","Spent the morning adding Bros to the<a href = 'http://farragofiction.com/DollSim/bro_index.html'>DollSim</a>. Also took the time to fix StrifeSim special attacks to both have more items in them and to use up less memory (so shouldn't crash for some of you anymore). <br<br> Still chugging with alchemy, starting work on aspect items now that the alchemy proper seems to be solid.<li>+Defeating your personalized god monster now lets you loot their house.<li>+Phantom players will no longer invade your house and touch your stuff. <li>+Blood is now 413 percent more mystic. <li>+Bonding handcuffs added, for the adult crowd. <li>+Friendship bracelets: craftable for MAXIMUM FRIEND POTENTIAL.")
if($.b)a9.b="Who is Shogun??? <div class ='strikethroughStuff'>Spent the morning adding Bros to the<a href = 'http://farragofiction.com/DollSim/bro_index.html'>DollSim</a>. Also took the time to fix StrifeSim special attacks to both have more items in them and to use up less memory (so shouldn't crash for some of you anymore). <br<br> Still chugging with alchemy, starting work on aspect items now that the alchemy proper seems to be solid.<li>+Defeating your personalized god monster now lets you loot their house.<li>+Phantom players will no longer invade your house and touch your stuff. <li>+Blood is now 413 percent more mystic. <li>+Bonding handcuffs added, for the adult crowd. <li>+Friendship bracelets: craftable for MAXIMUM FRIEND POTENTIAL.</a>"
b0=new K.a("11/21/17","Ugh. Why did I think it would be a good idea to try to upgrade the sim/AB to be less insane. It didn't even speed anything up and it took two fucking days. Oh well, at least it's done now and that'll make future shit a little easier. Back to alchemy. <span class='void'>Also, Shogun showed up which means my inevitable demise, in the proximity of some pigeons is looming. </span><br><Br>More from Manic: <li>+Fidget spinners. We're sorry. <li>+XTREME ITEM CRAFTING! <li>+Glam flam is now canon. <li>+Bespoke suits, for the discerning child warrior. <li>+ICE can now mean diamonds.<li> +Diamonds can now mean ICE. <li>+A whole bunch of other item traits!<li>+Rare footage captured of Author Bot Junior. <li>+Pigeonkind specibus. JR fears for their life. <li>+Ultraviolence is now a purpose, not just a mere trait. <li>+Ditto witg Sweet Bro and Hella Jeff merch........... <li>+Clown Cult now usable as life purpose.")
if($.b)b0.b="Who is Shogun??? <div class ='strikethroughStuff'>Ugh. Why did I think it would be a good idea to try to upgrade the sim/AB to be less insane. It didn't even speed anything up and it took two fucking days. Oh well, at least it's done now and that'll make future shit a little easier. Back to alchemy. <span class='void'>Also, Shogun showed up which means my inevitable demise, in the proximity of some pigeons is looming. </span><br><Br>More from Manic: <li>+Fidget spinners. We're sorry. <li>+XTREME ITEM CRAFTING! <li>+Glam flam is now canon. <li>+Bespoke suits, for the discerning child warrior. <li>+ICE can now mean diamonds.<li> +Diamonds can now mean ICE. <li>+A whole bunch of other item traits!<li>+Rare footage captured of Author Bot Junior. <li>+Pigeonkind specibus. JR fears for their life. <li>+Ultraviolence is now a purpose, not just a mere trait. <li>+Ditto witg Sweet Bro and Hella Jeff merch........... <li>+Clown Cult now usable as life purpose.</a>"
b1=new K.a("11/19/17","Alright, I think the name system is finally working right for alchemy. Now to do a fucking metric SHIT TON of alchemy.<br><Br>Oh yeah, alchemy has a rendered scene thingy now, too, courtesy of tableGuardian on discord.<br><br><li>+Enabled selfcest in it's most purest form. <li>+Some names are now objectivly better or worse then others. I'm looking at you, Sven.<li>+Nuclear power has been added to the game. This will end well.<li> +99% increase in EDGELORD levels<li>+Smashy-sticky-whacky things now called Morningstars")
if($.b)b1.b="Who is Shogun??? <div class ='strikethroughStuff'>Alright, I think the name system is finally working right for alchemy. Now to do a fucking metric SHIT TON of alchemy.<br><Br>Oh yeah, alchemy has a rendered scene thingy now, too, courtesy of tableGuardian on discord.<br><br><li>+Enabled selfcest in it's most purest form. <li>+Some names are now objectivly better or worse then others. I'm looking at you, Sven.<li>+Nuclear power has been added to the game. This will end well.<li> +99% increase in EDGELORD levels<li>+Smashy-sticky-whacky things now called Morningstars</a>"
b2=new K.a("11/18/17","Ah, what a refreshing start to a day. It's been a while since my blatant incompetance has made a player in this session suffer unjustly.<br><Br> Turns out today's <a href = 'ocQuiz.html'>Your Story</a> oc quiz thingy was broken as fuck, as the LEAST LUCKY void player in existance failed to beat their denizen 269 times in a row. 'But wait!' I think to myself, 'Didn't I fucking write code to PREVENT this kind of shit? '  So I go and check and wouldn't you know it, a careless fucking typo meant that these kinds of sessions were allowed to go basically forever until the player won. Yay.  <br><Br> Best part is their land had the sound of 'clapping' in it, which just sounds sarcastic as fuck when you're failling that fucking hard.<br><br>I ALSO spent like, several hours tracking down a bullshit alchemy bug.<br><br>Snarky whatever the fuck from manicInsomniac: <li>+The personalized 'Your Story' quest can no longer trap you in an infinite hell of blood and combat. <li>+Alchemized Items should no longer distort into a twist of logic when placed into Sylladex<li>+Players will now actually use weapons instead of gesturing threateningly with them.")
if($.b)b2.b="Who is Shogun??? <div class ='strikethroughStuff'>Ah, what a refreshing start to a day. It's been a while since my blatant incompetance has made a player in this session suffer unjustly.<br><Br> Turns out today's <a href = 'ocQuiz.html'>Your Story</a> oc quiz thingy was broken as fuck, as the LEAST LUCKY void player in existance failed to beat their denizen 269 times in a row. 'But wait!' I think to myself, 'Didn't I fucking write code to PREVENT this kind of shit? '  So I go and check and wouldn't you know it, a careless fucking typo meant that these kinds of sessions were allowed to go basically forever until the player won. Yay.  <br><Br> Best part is their land had the sound of 'clapping' in it, which just sounds sarcastic as fuck when you're failling that fucking hard.<br><br>I ALSO spent like, several hours tracking down a bullshit alchemy bug.<br><br>Snarky whatever the fuck from manicInsomniac: <li>+The personalized 'Your Story' quest can no longer trap you in an infinite hell of blood and combat. <li>+Alchemized Items should no longer distort into a twist of logic when placed into Sylladex<li>+Players will now actually use weapons instead of gesturing threateningly with them.</a>"
b3=new K.a("11/17/17","Shout out to anon on Tumblr for letting me know that the <a href ='ocGenerator.html'>OC Generator</a> was crashing after you rerolled too many times. It's totes fixed now.<br><Br>Alchemy is also coming along nicely. Lots of extra items are rolled out, and I'm still testing the actual alchemy process. <br><br>More snarky updates: <li>+Legendary items added <li>+On a related note, 'How To Draw Manga' added <li>+Added a vital infusion of Gristmas spirit into the site <li>-Experiencing some bugs- Fiduspawn Plush for example is classified as 'Cozy.' It is impossible to describe this plush beyond calling it Cozy. Seriously, just try it. We'll wait. Could you? Yeah, I thought not. Its bugging us too.<li>+Whips and Chains added, for the adult crowd. <li>+Wrenches, Shovels, Razors- Everything the young aspiring murderer needs to dispose of the body!<li>+The Dark Gods of GlitchFAQ have been satisfied: RoadsignKind added. <li>+The Grey Gods of Anime have been appeased: ShurikenKind added. <li>+The Bright Gods of Fashion have been glorified: CaneKind added.")
if($.b)b3.b="Who is Shogun??? <div class ='strikethroughStuff'>Shout out to anon on Tumblr for letting me know that the <a href ='ocGenerator.html'>OC Generator</a> was crashing after you rerolled too many times. It's totes fixed now.<br><Br>Alchemy is also coming along nicely. Lots of extra items are rolled out, and I'm still testing the actual alchemy process. <br><br>More snarky updates: <li>+Legendary items added <li>+On a related note, 'How To Draw Manga' added <li>+Added a vital infusion of Gristmas spirit into the site <li>-Experiencing some bugs- Fiduspawn Plush for example is classified as 'Cozy.' It is impossible to describe this plush beyond calling it Cozy. Seriously, just try it. We'll wait. Could you? Yeah, I thought not. Its bugging us too.<li>+Whips and Chains added, for the adult crowd. <li>+Wrenches, Shovels, Razors- Everything the young aspiring murderer needs to dispose of the body!<li>+The Dark Gods of GlitchFAQ have been satisfied: RoadsignKind added. <li>+The Grey Gods of Anime have been appeased: ShurikenKind added. <li>+The Bright Gods of Fashion have been glorified: CaneKind added.</a>"
b4=new K.a("11/16/17","I fought AB for half the fucking day since telling her about Alchemy and then trying to make her slightly faster was apparently the WORST THING ANYONE HAS EVER DONE and she threw a fit and stated not returning from sessions occasionally. BLUH. <br><br>Once I wrangled her I was finally able to focus on alchemy again, and have the skeletons in place to handle that shit.<br><Br>The discord (especially ideasWrangler manicInsomniac) has started making hilarious change logs of all my github commits. Have a selection of 'em: <br><Br><li>Players can no longer raise the dead with promises of GLORIOUS COMBAT<li>Players no longer can kill with nothing but the force of anger and fraymotifs.<li>Our resident robot overlords have been informed of the existence of physical objects.<li>+Quests should now give INDIVIDUAL, PERSONALIZED items, based off of the players class and aspect. <li>-All INDIVIDUAL, PERSONALIZED items are perfectly generic objects.<li>-The Power of Friendship can no longer cause duplication of music.<li>+Balance change: Mind players and Blood players no longer know what objects are.")
if($.b)b4.b="Who is Shogun??? <div class ='strikethroughStuff'>I fought AB for half the fucking day since telling her about Alchemy and then trying to make her slightly faster was apparently the WORST THING ANYONE HAS EVER DONE and she threw a fit and stated not returning from sessions occasionally. BLUH. <br><br>Once I wrangled her I was finally able to focus on alchemy again, and have the skeletons in place to handle that shit.<br><Br>The discord (especially ideasWrangler manicInsomniac) has started making hilarious change logs of all my github commits. Have a selection of 'em: <br><Br><li>Players can no longer raise the dead with promises of GLORIOUS COMBAT<li>Players no longer can kill with nothing but the force of anger and fraymotifs.<li>Our resident robot overlords have been informed of the existence of physical objects.<li>+Quests should now give INDIVIDUAL, PERSONALIZED items, based off of the players class and aspect. <li>-All INDIVIDUAL, PERSONALIZED items are perfectly generic objects.<li>-The Power of Friendship can no longer cause duplication of music.<li>+Balance change: Mind players and Blood players no longer know what objects are.</a>"
b5=new K.a("11/15/17","Holy shit, does it feel GOOD to be back in the guts of the sim, irresponsibly adding new features. We've got some bare bones items and strife specibi floating around. Mostly all cosmetic, still. But just you wait. ")
if($.b)b5.b="Who is Shogun??? <div class ='strikethroughStuff'>Holy shit, does it feel GOOD to be back in the guts of the sim, irresponsibly adding new features. We've got some bare bones items and strife specibi floating around. Mostly all cosmetic, still. But just you wait. </a>"
b6=new K.a("11/14/17","Alright, time to focus on the sim again, and leave dolls and whatever for the weekend. <br><Br>Lots of bug fixes, including Dead Sessions ironically no longer preventing Time Players from playing. <br><br>Today Main and Experimental have officially divurged again, which means no more bug fixes or features for main until the Alchemy Update is ready.")
if($.b)b6.b="Who is Shogun??? <div class ='strikethroughStuff'>Alright, time to focus on the sim again, and leave dolls and whatever for the weekend. <br><Br>Lots of bug fixes, including Dead Sessions ironically no longer preventing Time Players from playing. <br><br>Today Main and Experimental have officially divurged again, which means no more bug fixes or features for main until the Alchemy Update is ready.</a>"
b7=new K.a("11/13/17","Still focused on non-sim and doll stuff. Have I seriously not mentioned yogisticDoctor (from discord)'s awesome <a href = 'http://farragofiction.com/DollSim/mom_index.html'>Mom</a> and <a href = 'http://farragofiction.com/DollSim/dad_index.html'>Dad</a> doll set yet? ")
if($.b)b7.b="Who is Shogun??? <div class ='strikethroughStuff'>Still focused on non-sim and doll stuff. Have I seriously not mentioned yogisticDoctor (from discord)'s awesome <a href = 'http://farragofiction.com/DollSim/mom_index.html'>Mom</a> and <a href = 'http://farragofiction.com/DollSim/dad_index.html'>Dad</a> doll set yet? </a>"
b8=new K.a("11/11/17","I've spent the week working on the non sim related shit, but ALSO threw together a <a href = 'http://farragofiction.com/MiniSims/StrifeSim/'>11/11 minigame</a> to celebrate the holiday.<br><br>Also, it is time to say a fond farewell to Octobermas.")
if($.b)b8.b="Who is Shogun??? <div class ='strikethroughStuff'>I've spent the week working on the non sim related shit, but ALSO threw together a <a href = 'http://farragofiction.com/MiniSims/StrifeSim/'>11/11 minigame</a> to celebrate the holiday.<br><br>Also, it is time to say a fond farewell to Octobermas.</a>"
b9=new K.a("11/7/17","I've been working on planning out the Alchemy Update, doll stuff, as well as getting a non-sim game out. <br><Br>In the mean time there's a handful of new quests live.")
if($.b)b9.b="Who is Shogun??? <div class ='strikethroughStuff'>I've been working on planning out the Alchemy Update, doll stuff, as well as getting a non-sim game out. <br><Br>In the mean time there's a handful of new quests live.</a>"
c0=new K.a("11/3/17","Holy fuck. I finally caught this insidius bug AB has been suffering from. Basically, if the royalty used a fraymotif, then the NEXT time a session had that fraymotif they wouldn't be able to use it, which would make the sessions AB found divurge heavily from reality. For MOST sessions this wouldn't matter, but scratched sessions, sessions with jack, combo sessions and yards all could be effected. It took so fucking long to track down. <br><Br>Also, finally finished the land mini feature I wanted to do before splitting experimental off.  You can now ask the sim what <a href = 'ocQuiz.html'>'your' story</a> would be, getting a mini sim with just your quests in it.")
if($.b)c0.b="Who is Shogun??? <div class ='strikethroughStuff'>Holy fuck. I finally caught this insidius bug AB has been suffering from. Basically, if the royalty used a fraymotif, then the NEXT time a session had that fraymotif they wouldn't be able to use it, which would make the sessions AB found divurge heavily from reality. For MOST sessions this wouldn't matter, but scratched sessions, sessions with jack, combo sessions and yards all could be effected. It took so fucking long to track down. <br><Br>Also, finally finished the land mini feature I wanted to do before splitting experimental off.  You can now ask the sim what <a href = 'ocQuiz.html'>'your' story</a> would be, getting a mini sim with just your quests in it.</a>"
c1=new K.a("11/1/17","Bug fixes (sessions no longer run infinitely if jack kills everybody, for example) and the first bit of the revised OC generator are in place.")
if($.b)c1.b="Who is Shogun??? <div class ='strikethroughStuff'>Bug fixes (sessions no longer run infinitely if jack kills everybody, for example) and the first bit of the revised OC generator are in place.</a>"
c2=new K.a("10/31/17","<h1>Land Update On Main!!!</h1><br><Br>Otherwise known as happy Octobermas/Spoop-o-ween/Whatever! Holy SHIT That was a p comprehensive update.   You should find that sessions are ENTIRELY different now and hella less repetative (And I'll keep adding quests as time goes on). AND it has all the hooks to eventually work with ParadoxLands eventual land rendering update. Hell FUCKING yes! <Br><br> Oh yeah, and to celebrate the most spoopy of holidays/test the land update, <a href = 'dead_index.html'>Dead Sessions</a> are totally a thing. <br><br>Next up: The NPC and Alchemy updates.  Alchemy might hit first in a massively reduced form (called v1), just to give quests new and exciting possible rewards.  NPC update should be hella huge, adding all sort of subplots (including CLUBS DEUCE GETTING THE FUCKING RING, as the meme goes). It'll be fucking great.<br><br>((Also, before I forget, you may notice some extra spoopy avatars in honor of the holiday. Do not be alarmed, fair citizen, they are temporary. And if you are from the far flung future where this shit doesn't make any sense, you can check out what you missed in the <a href ='image_browser.html?octobermas=true'>fan art section</a>. ))<br><br>((And I wonder if reading these newspost might reveal information about something called the <a href = 'http://farragofiction.com/DollSim'>'DollSim'?))</a> ")
if($.b)c2.b="Who is Shogun??? <div class ='strikethroughStuff'><h1>Land Update On Main!!!</h1><br><Br>Otherwise known as happy Octobermas/Spoop-o-ween/Whatever! Holy SHIT That was a p comprehensive update.   You should find that sessions are ENTIRELY different now and hella less repetative (And I'll keep adding quests as time goes on). AND it has all the hooks to eventually work with ParadoxLands eventual land rendering update. Hell FUCKING yes! <Br><br> Oh yeah, and to celebrate the most spoopy of holidays/test the land update, <a href = 'dead_index.html'>Dead Sessions</a> are totally a thing. <br><br>Next up: The NPC and Alchemy updates.  Alchemy might hit first in a massively reduced form (called v1), just to give quests new and exciting possible rewards.  NPC update should be hella huge, adding all sort of subplots (including CLUBS DEUCE GETTING THE FUCKING RING, as the meme goes). It'll be fucking great.<br><br>((Also, before I forget, you may notice some extra spoopy avatars in honor of the holiday. Do not be alarmed, fair citizen, they are temporary. And if you are from the far flung future where this shit doesn't make any sense, you can check out what you missed in the <a href ='image_browser.html?octobermas=true'>fan art section</a>. ))<br><br>((And I wonder if reading these newspost might reveal information about something called the <a href = 'http://farragofiction.com/DollSim'>'DollSim'?))</a> </a>"
c3=new K.a("10/30/17","Hell yes, two major bugs defeated today.   Yellow yards no longer just straight up fail post scratch, AND if the same quest happens multiple times in the same session it doesn't fuck up.  Go me.")
if($.b)c3.b="Who is Shogun??? <div class ='strikethroughStuff'>Hell yes, two major bugs defeated today.   Yellow yards no longer just straight up fail post scratch, AND if the same quest happens multiple times in the same session it doesn't fuck up.  Go me.</a>"
c4=new K.a("10/29/17","More quests, more typo fixes, etc. <br><br>Most notably, dead sessions aren't broke af anymore.")
if($.b)c4.b="Who is Shogun??? <div class ='strikethroughStuff'>More quests, more typo fixes, etc. <br><br>Most notably, dead sessions aren't broke af anymore.</a>"
c5=new K.a("10/28/17","Bug fixes, stability, mostly getting ready for a main deploy.")
if($.b)c5.b="Who is Shogun??? <div class ='strikethroughStuff'>Bug fixes, stability, mostly getting ready for a main deploy.</a>"
c6=new K.a("10/27/17","Whoa, did I almost forget to have Battlefield quests? Is that a thing that almost happened. Whoops.")
if($.b)c6.b="Who is Shogun??? <div class ='strikethroughStuff'>Whoa, did I almost forget to have Battlefield quests? Is that a thing that almost happened. Whoops.</a>"
c7=new K.a("10/26/17","Corrupt lands are a thing again, and space players are WAY less repetitive now. <br><br>Also, holy fuck was balancing Space players to the new system really annoying, all because pastJR accidentally made it so space players are allowed to leave their land as long as they have NOT finished their frog duties. God DAMN.")
if($.b)c7.b="Who is Shogun??? <div class ='strikethroughStuff'>Corrupt lands are a thing again, and space players are WAY less repetitive now. <br><br>Also, holy fuck was balancing Space players to the new system really annoying, all because pastJR accidentally made it so space players are allowed to leave their land as long as they have NOT finished their frog duties. God DAMN.</a>"
c8=new K.a("10/25/17","Okay, we can all remember that on this, the most sacred day of 10/25, the Land Update was BASICALLY done.<br><Br>  I still wanna add more quest paths. And refactor how land corruption works to use the new system. And Of course I gotta balance all that stat shit PL did before a Main deploy. But I'd say that the Land Update is basically in the shape it'll be once it hits main.")
if($.b)c8.b="Who is Shogun??? <div class ='strikethroughStuff'>Okay, we can all remember that on this, the most sacred day of 10/25, the Land Update was BASICALLY done.<br><Br>  I still wanna add more quest paths. And refactor how land corruption works to use the new system. And Of course I gotta balance all that stat shit PL did before a Main deploy. But I'd say that the Land Update is basically in the shape it'll be once it hits main.</a>"
c9=new K.a("10/24/17","Happy 1025eve.  I've added a shitton of class themes today, but the weekend was spent working on making DollSim <a href = 'http://www.farragofiction.com/CardSim/'> Trading Cards</a> and <a href = 'http://www.farragofiction.com/DollSim/charSheetCreator'>Character Sheets</a>. I'm trying to do side projects on the weekend.")
if($.b)c9.b="Who is Shogun??? <div class ='strikethroughStuff'>Happy 1025eve.  I've added a shitton of class themes today, but the weekend was spent working on making DollSim <a href = 'http://www.farragofiction.com/CardSim/'> Trading Cards</a> and <a href = 'http://www.farragofiction.com/DollSim/charSheetCreator'>Character Sheets</a>. I'm trying to do side projects on the weekend.</a>"
d0=new K.a("10/19/17","Combo sessions are fixed, and intros are much less repetitive. Hell yes x2 combo of productivity!<br><Br>Dream aspect has themes now, too.")
if($.b)d0.b="Who is Shogun??? <div class ='strikethroughStuff'>Combo sessions are fixed, and intros are much less repetitive. Hell yes x2 combo of productivity!<br><Br>Dream aspect has themes now, too.</a>"
d1=new K.a("10/18/17","All aspects (besides Dream) have their own themes now.  <br><Br>Next up I'll be debugging the shit out of combo sessions, adding Class themes and doing the last bit of new features for land quests.<br><Br>Moons are fixed so that players wear the right colors, too.")
if($.b)d1.b="Who is Shogun??? <div class ='strikethroughStuff'>All aspects (besides Dream) have their own themes now.  <br><Br>Next up I'll be debugging the shit out of combo sessions, adding Class themes and doing the last bit of new features for land quests.<br><Br>Moons are fixed so that players wear the right colors, too.</a>"
d2=new K.a("10/17/17","New themes added for Hope, Life, Light and Mind. Whew. Lots of writing! <br><Br>Also worked on the doll maker over the weekend, lots of new parts and I almost have everything in place to make future mini games based on the dolls.")
if($.b)d2.b="Who is Shogun??? <div class ='strikethroughStuff'>New themes added for Hope, Life, Light and Mind. Whew. Lots of writing! <br><Br>Also worked on the doll maker over the weekend, lots of new parts and I almost have everything in place to make future mini games based on the dolls.</a>"
d3=new K.a("10/13/17","Happy Arc Number Day!<br><br>Today I ripped out all references to the old moon/land system, so you shouldn't have to worry lands or moons suddenly not matching shit. <br><br>I also put the structure in place for a new Intro system, with dialogue more close to how dead sessions taunting works. It's still p bare bones, but I plan on adding more variety to shit over the next few days. ")
if($.b)d3.b="Who is Shogun??? <div class ='strikethroughStuff'>Happy Arc Number Day!<br><br>Today I ripped out all references to the old moon/land system, so you shouldn't have to worry lands or moons suddenly not matching shit. <br><br>I also put the structure in place for a new Intro system, with dialogue more close to how dead sessions taunting works. It's still p bare bones, but I plan on adding more variety to shit over the next few days. </a>"
d4=new K.a("10/12/17","Whoops, apparently I murdered the OCGenerator and never noticed. RIP. <br><Br>LUCKILY I was already planning on making a new one from scratch today, to get a better feel for how much variety we have in quests. <a href = 'ocGenerator.html'>Check It out</a>. <br><br> Interests are p solid in terms of variety, even for 4 players with all the same interests. Just gotta bring aspects and class up to that level. ")
if($.b)d4.b="Who is Shogun??? <div class ='strikethroughStuff'>Whoops, apparently I murdered the OCGenerator and never noticed. RIP. <br><Br>LUCKILY I was already planning on making a new one from scratch today, to get a better feel for how much variety we have in quests. <a href = 'ocGenerator.html'>Check It out</a>. <br><br> Interests are p solid in terms of variety, even for 4 players with all the same interests. Just gotta bring aspects and class up to that level. </a>"
d5=new K.a("10/11/17","All interest categories have themes associated them, with one quest chain (for now) per theme. <br><br>Also the doll maker has more and more parts.")
if($.b)d5.b="Who is Shogun??? <div class ='strikethroughStuff'>All interest categories have themes associated them, with one quest chain (for now) per theme. <br><br>Also the doll maker has more and more parts.</a>"
d6=new K.a("10/10/17","Alright, 'vacation' over! And by vacation I mean I coded a doll maker while not at home. Check it out: <a href = 'http://farragofiction.com/DollSim/index.html'>Kid</a>, or <a href = 'http://farragofiction.com/DollSim/troll_index.html'>Troll</a>, or <a href = 'http://farragofiction.com/DollSim/consort_index.html'>Consorts</a> are all implemented so far. <br><br>I ALSO added a few themes for Justice, Music, Romance, Thief and Rogue. ")
if($.b)d6.b="Who is Shogun??? <div class ='strikethroughStuff'>Alright, 'vacation' over! And by vacation I mean I coded a doll maker while not at home. Check it out: <a href = 'http://farragofiction.com/DollSim/index.html'>Kid</a>, or <a href = 'http://farragofiction.com/DollSim/troll_index.html'>Troll</a>, or <a href = 'http://farragofiction.com/DollSim/consort_index.html'>Consorts</a> are all implemented so far. <br><br>I ALSO added a few themes for Justice, Music, Romance, Thief and Rogue. </a>"
d7=new K.a("10/4/17","Alright, multiplayer quests have been coded, and we have a few shiping dungeons to test them out. <br><br> A few more themes have been added as well.<br><br>Meanwhile I'm going on vacation 'till the 10th, so I'm gonna TRY to code less and shit during that. Additiction is a powerful thing.<br><Br> Oh yeah, check out the <a href = 'image_browser.html?octobermas=true'>Octobermas Spoopy fanart: </a>")
if($.b)d7.b="Who is Shogun??? <div class ='strikethroughStuff'>Alright, multiplayer quests have been coded, and we have a few shiping dungeons to test them out. <br><br> A few more themes have been added as well.<br><br>Meanwhile I'm going on vacation 'till the 10th, so I'm gonna TRY to code less and shit during that. Additiction is a powerful thing.<br><Br> Oh yeah, check out the <a href = 'image_browser.html?octobermas=true'>Octobermas Spoopy fanart: </a></a>"
d8=new K.a("10/3/17","Happy Best Month! I have sucessfully murdered the fuck out of regular sessions and replaced things with the new Quest system. I'm still tweaking shit, and there's probably a few features I've forgotten to take into account, but p much the main thing remaining is to get more and more custom themes in for Lands.")
if($.b)d8.b="Who is Shogun??? <div class ='strikethroughStuff'>Happy Best Month! I have sucessfully murdered the fuck out of regular sessions and replaced things with the new Quest system. I'm still tweaking shit, and there's probably a few features I've forgotten to take into account, but p much the main thing remaining is to get more and more custom themes in for Lands.</a>"
d9=new K.a("9/30/17","Dream quests no longer happen without a dream self, and the player is attired appropriately. Dream quest also have branches for 'dreaming without a dream self' and 'dreaming without a dream self and bubbles have turned on'. <br><br>In the mean time I did a few minor bug fixes and doom has a custom set of themes, now, too.<br><br>Also, turns out ghosts are no longer accidentally banned from helping players anymore. Whoops.")
if($.b)d9.b="Who is Shogun??? <div class ='strikethroughStuff'>Dream quests no longer happen without a dream self, and the player is attired appropriately. Dream quest also have branches for 'dreaming without a dream self' and 'dreaming without a dream self and bubbles have turned on'. <br><br>In the mean time I did a few minor bug fixes and doom has a custom set of themes, now, too.<br><br>Also, turns out ghosts are no longer accidentally banned from helping players anymore. Whoops.</a>"
e0=new K.a("9/29/17","More themes added, list of all themes can be found <a href = 'themes.html'>here</a>. (Mostly for my own use though). ")
if($.b)e0.b="Who is Shogun??? <div class ='strikethroughStuff'>More themes added, list of all themes can be found <a href = 'themes.html'>here</a>. (Mostly for my own use though). </a>"
e1=new K.a("9/28/17","Alright, so first up, <a href = 'dead_session_finder.html'>AB</a> now is willing to brave the swamp of depravity that is Dead Sessions. As a result, I worked with her to get dead sessions calibrated 'correctly'. Which is to say, it's a practically unwinable joke mode. <br><br>Meanwhile, Dead sessions have the last piece of the puzzle, mainly shitty moon quests. <br><br>Tomorrow I expect to be polishing shit, and maybe I'll burn regular sessions to the ground, in which case you won't see any new updates for a few days as I wire the quest system into place and make sure it works with multiplayer.")
if($.b)e1.b="Who is Shogun??? <div class ='strikethroughStuff'>Alright, so first up, <a href = 'dead_session_finder.html'>AB</a> now is willing to brave the swamp of depravity that is Dead Sessions. As a result, I worked with her to get dead sessions calibrated 'correctly'. Which is to say, it's a practically unwinable joke mode. <br><br>Meanwhile, Dead sessions have the last piece of the puzzle, mainly shitty moon quests. <br><br>Tomorrow I expect to be polishing shit, and maybe I'll burn regular sessions to the ground, in which case you won't see any new updates for a few days as I wire the quest system into place and make sure it works with multiplayer.</a>"
e2=new K.a("9/27/17","The contents of strifes are finally toggleable (besides the results)! Hell yes, no more strife spam! <br><br>Lessee...generically hope gnosis doesn't suck as much, and grim dark players are less op since PL's stat update. <br><br>Oh yeah, and Dead sessions are filled with meta bullshit now. Dead sessions have an actual ending, too, where they invade the new session. I plan on having an 'enemy' mechanic where ANY player can become a boss enemy, I imagine Dead players will use it p frequently.  <br><br>I guess next thing I wanna do is make a new Dead Session Finder so I can calibrate shit correctly, and then add moon quests to the dead sessions.")
if($.b)e2.b="Who is Shogun??? <div class ='strikethroughStuff'>The contents of strifes are finally toggleable (besides the results)! Hell yes, no more strife spam! <br><br>Lessee...generically hope gnosis doesn't suck as much, and grim dark players are less op since PL's stat update. <br><br>Oh yeah, and Dead sessions are filled with meta bullshit now. Dead sessions have an actual ending, too, where they invade the new session. I plan on having an 'enemy' mechanic where ANY player can become a boss enemy, I imagine Dead players will use it p frequently.  <br><br>I guess next thing I wanna do is make a new Dead Session Finder so I can calibrate shit correctly, and then add moon quests to the dead sessions.</a>"
e3=new K.a("9/26/17","Dead sessions have working planet bosses (what will be denizens in regular sessions). Hell yes.")
if($.b)e3.b="Who is Shogun??? <div class ='strikethroughStuff'>Dead sessions have working planet bosses (what will be denizens in regular sessions). Hell yes.</a>"
e4=new K.a("9/24/17","Dead sessions continue to chug along. Lords are finally in (courtsey of tinkeredCalculation /jinkeredRaculation/Pixel and KR)  , as well, though of course tragically minionless.")
if($.b)e4.b="Who is Shogun??? <div class ='strikethroughStuff'>Dead sessions continue to chug along. Lords are finally in (courtsey of tinkeredCalculation /jinkeredRaculation/Pixel and KR)  , as well, though of course tragically minionless.</a>"
e5=new K.a("9/21/17","More dead session stuff, and Muses are added courtesy of tinkeredCalculation /jinkeredRaculation/Pixel (with KR modifying them to work with the rendering engine). They aren't in their final state (since, like Lords, they are planned to have npc minions as quest rewards), but they are p close.")
if($.b)e5.b="Who is Shogun??? <div class ='strikethroughStuff'>More dead session stuff, and Muses are added courtesy of tinkeredCalculation /jinkeredRaculation/Pixel (with KR modifying them to work with the rendering engine). They aren't in their final state (since, like Lords, they are planned to have npc minions as quest rewards), but they are p close.</a>"
e6=new K.a("9/20/17","Dead sessions are really picking up, along with the land update that they are designed to test. Simple, bullshit quests are now available for the unlucky Dead Session Players.<Br><br> I'll expand them out and add frame stories and shit over the next few days, then when dead sessions v1 are done I'll shift my focus to getting all this working in the regular sessions as well.")
if($.b)e6.b="Who is Shogun??? <div class ='strikethroughStuff'>Dead sessions are really picking up, along with the land update that they are designed to test. Simple, bullshit quests are now available for the unlucky Dead Session Players.<Br><br> I'll expand them out and add frame stories and shit over the next few days, then when dead sessions v1 are done I'll shift my focus to getting all this working in the regular sessions as well.</a>"
e7=new K.a("9/17/17","Hey! Guess who DIDN'T find out that the afterlife was destroyed and then proceded to NOT completely forget about it for a day or so?  Wait....too many negatives, I've gotten confused. Fuck. <br><Br>Uh. So. The afterlife exists again! Yay! I am definitely not the most asshole creator of all time. <br><Br>And on a completely unrelated note I am REALLY enjoying how the Land update is going so far. Not yet really anything to show you guys yet, but it's p fun so far. Also what could <a href = 'dead_index.html'>this</a> shitty half finished thing be? ")
if($.b)e7.b="Who is Shogun??? <div class ='strikethroughStuff'>Hey! Guess who DIDN'T find out that the afterlife was destroyed and then proceded to NOT completely forget about it for a day or so?  Wait....too many negatives, I've gotten confused. Fuck. <br><Br>Uh. So. The afterlife exists again! Yay! I am definitely not the most asshole creator of all time. <br><Br>And on a completely unrelated note I am REALLY enjoying how the Land update is going so far. Not yet really anything to show you guys yet, but it's p fun so far. Also what could <a href = 'dead_index.html'>this</a> shitty half finished thing be? </a>"
e8=new K.a("9/16/17","<br><Br>First thing you should expect to see on Experimental is a complete Stat overhaul provided by ParadoxLands, and then the Land Update will start happening in bits and pieces.<BR><BR>  Current stat update has wastes be a little nerfed. Might see if i can rebuff their rate of crashing sessions and shit later.")
if($.b)e8.b="Who is Shogun??? <div class ='strikethroughStuff'><br><Br>First thing you should expect to see on Experimental is a complete Stat overhaul provided by ParadoxLands, and then the Land Update will start happening in bits and pieces.<BR><BR>  Current stat update has wastes be a little nerfed. Might see if i can rebuff their rate of crashing sessions and shit later.</a>"
e9=new K.a("9/15/17","How 'bout that Hiveswap huh? <br><br>Main looks to be stable, one last deploy for some minor shit, and then Experimental will divurge.")
if($.b)e9.b="Who is Shogun??? <div class ='strikethroughStuff'>How 'bout that Hiveswap huh? <br><br>Main looks to be stable, one last deploy for some minor shit, and then Experimental will divurge.</a>"
f0=new K.a("9/13/17","<h1>Waste Update On Main!!!</h1><br><Br>  If you are seeing this then that means we did it. The Great Refactoring is not only over, but there is a shit ton of new content as well. For all you ppl who read the Main site only, feel free to peruse these newsposts that were previously hidden to you for clues as to what the fuck is going on.<br><br>Also, can I just say how fucking pleased I am that we hit Main on the 13th, in honor of the Sim's new Arc number? <br><Br>Before I forget, the pre Great Refactoring Sim (done in 100% JavaScript) will be archived <a hhef = 'http://farragofiction.com/SBURBSimJS/'>here</a> for future generations to jeer at/ boggle at because holy shit how did I get so far in such a shitty, shitty language.<Br><br>As always, I will halt new development for a few days as I field bug reports that inevitably flood in when we do a Main Release.  THEN, we get the glory of the Land Update.<br><br>Also, sudden Dream aspect has shown up???")
if($.b)f0.b="Who is Shogun??? <div class ='strikethroughStuff'><h1>Waste Update On Main!!!</h1><br><Br>  If you are seeing this then that means we did it. The Great Refactoring is not only over, but there is a shit ton of new content as well. For all you ppl who read the Main site only, feel free to peruse these newsposts that were previously hidden to you for clues as to what the fuck is going on.<br><br>Also, can I just say how fucking pleased I am that we hit Main on the 13th, in honor of the Sim's new Arc number? <br><Br>Before I forget, the pre Great Refactoring Sim (done in 100% JavaScript) will be archived <a hhef = 'http://farragofiction.com/SBURBSimJS/'>here</a> for future generations to jeer at/ boggle at because holy shit how did I get so far in such a shitty, shitty language.<Br><br>As always, I will halt new development for a few days as I field bug reports that inevitably flood in when we do a Main Release.  THEN, we get the glory of the Land Update.<br><br>Also, sudden Dream aspect has shown up???</a>"
f1=new K.a("9/12/17","Guess whose server died dramtically last night in the wake of Hurricane Irma? It was my server. It's always me. Even after the power got restored, my server was still inaccessible, tho. I finally got it back up this morning though.  Fuckin firewalls man, how do they work?<br><Br>Today will be more stability fixes.<br><br>I expect to do the main deploy in the morning.")
if($.b)f1.b="Who is Shogun??? <div class ='strikethroughStuff'>Guess whose server died dramtically last night in the wake of Hurricane Irma? It was my server. It's always me. Even after the power got restored, my server was still inaccessible, tho. I finally got it back up this morning though.  Fuckin firewalls man, how do they work?<br><Br>Today will be more stability fixes.<br><br>I expect to do the main deploy in the morning.</a>"
f2=new K.a("9/11/17","Enough people have been asking me about the Gnosis update that I have made this handy <a href='gnosis.html'>Gnosis FAQ</a> for all your gigglesnort meta-talk needs. <br><Br>I've also been seriously working on balance and stabliity for gnosis, as well as killing all the pesky little bugs I haven't gotten around to yet. <br><br>My goal is to get this onto main the 13th, basically.")
if($.b)f2.b="Who is Shogun??? <div class ='strikethroughStuff'>Enough people have been asking me about the Gnosis update that I have made this handy <a href='gnosis.html'>Gnosis FAQ</a> for all your gigglesnort meta-talk needs. <br><Br>I've also been seriously working on balance and stabliity for gnosis, as well as killing all the pesky little bugs I haven't gotten around to yet. <br><br>My goal is to get this onto main the 13th, basically.</a>"
f3=new K.a("9/10/17","Hell yes, Time Gnosis4 is ready! Basically, at tier4 the Time Player will fuck off to the end of the session to see how it turned out.  Observers gotta wait and do shit linearly though, cuz fuck you that's why. <Br><br> Once they get there, the tier4 player will give the Observer the option to reset the session, at which point the time player will murder their own past self and replace them as Alpha.  This generally makes the session go differently, since the time player is now op as shit AND has different opinions about all their friends. <Br><br>Fun fact: This is officially the ONLY way to recover from a crash.  Time players should ALWAYS be able to nope the fuck out of a timeline.<br><Br>Haha, whoops I lied. Turns out Space4 gnosis lets you nope out of a crash as well, by escaping to another session. Good times. Frog magic is clearly best magic. <br><Br>Speaking of, Space4 theoretically lets you escape into your own scratch, Hussie Style.  But I couldn't test that code because it turns out the Space3 event p much makes you just win instead of scratch. AB can't even help me look because it's beyond her vision. So, like, if anybody finds a scratch while the infinite combo space4 shit is going, hit me up. I wanna test it.<br><Br> Also, I might make it harder for time players in particular to get gnosis, cuz holy shit are they spamming it. ")
if($.b)f3.b="Who is Shogun??? <div class ='strikethroughStuff'>Hell yes, Time Gnosis4 is ready! Basically, at tier4 the Time Player will fuck off to the end of the session to see how it turned out.  Observers gotta wait and do shit linearly though, cuz fuck you that's why. <Br><br> Once they get there, the tier4 player will give the Observer the option to reset the session, at which point the time player will murder their own past self and replace them as Alpha.  This generally makes the session go differently, since the time player is now op as shit AND has different opinions about all their friends. <Br><br>Fun fact: This is officially the ONLY way to recover from a crash.  Time players should ALWAYS be able to nope the fuck out of a timeline.<br><Br>Haha, whoops I lied. Turns out Space4 gnosis lets you nope out of a crash as well, by escaping to another session. Good times. Frog magic is clearly best magic. <br><Br>Speaking of, Space4 theoretically lets you escape into your own scratch, Hussie Style.  But I couldn't test that code because it turns out the Space3 event p much makes you just win instead of scratch. AB can't even help me look because it's beyond her vision. So, like, if anybody finds a scratch while the infinite combo space4 shit is going, hit me up. I wanna test it.<br><Br> Also, I might make it harder for time players in particular to get gnosis, cuz holy shit are they spamming it. </a>"
f4=new K.a("9/8/17","Guess who spent the past 22 hours (I am COUNTING my sleep because derseJR works hard) trying to frantically fix AB? It was me.  It's always me. AB's been a LITTLE wonky lately, but it came to a head with ppl looking for Rage4 updates that just were not going the way AB said they were, even WITHOUT getting the gnosis 4. <br><br>After much wailing and gnashing of teeth and at least one Derse quest, it turns out that unlike every OTHER time AB has gone the RogueAI route, this time it wasn't because of randomness getting out of control (fucking cat trolls, I swear). Nope. THIS time it was the OTHER thing those fucking cat trolls are known for: Shipping. <bR><br>Those handy dandy tool tips I made (where you mouse over a name to see their stats) basically made it so that shipping grids INVSIBLY were different every time, which made the shippers go into overdrive thinking they had new ships all the time.  Unless you told it not to render which would ALSO disable the tool tips. <br><Br> So for once, AB was right and REALITY was insane. Good times. <br><br>OMFG guess mind4 was way easier than I thought. The assholes hax0r my YellowYard thing, but without my trade mark restraint and good sense. Enjoy crashing the session, assholes. ")
if($.b)f4.b="Who is Shogun??? <div class ='strikethroughStuff'>Guess who spent the past 22 hours (I am COUNTING my sleep because derseJR works hard) trying to frantically fix AB? It was me.  It's always me. AB's been a LITTLE wonky lately, but it came to a head with ppl looking for Rage4 updates that just were not going the way AB said they were, even WITHOUT getting the gnosis 4. <br><br>After much wailing and gnashing of teeth and at least one Derse quest, it turns out that unlike every OTHER time AB has gone the RogueAI route, this time it wasn't because of randomness getting out of control (fucking cat trolls, I swear). Nope. THIS time it was the OTHER thing those fucking cat trolls are known for: Shipping. <bR><br>Those handy dandy tool tips I made (where you mouse over a name to see their stats) basically made it so that shipping grids INVSIBLY were different every time, which made the shippers go into overdrive thinking they had new ships all the time.  Unless you told it not to render which would ALSO disable the tool tips. <br><Br> So for once, AB was right and REALITY was insane. Good times. <br><br>OMFG guess mind4 was way easier than I thought. The assholes hax0r my YellowYard thing, but without my trade mark restraint and good sense. Enjoy crashing the session, assholes. </a>"
f5=new K.a("9/7/17","Guess who ended up having to sleep instead of finishing up rage last night? It was me. Hopefully this is going out first thing in the morning, tho. <br><Br>  And also hopefully I rewrite it with more energy.  Basically, Rage Gnosis4 is about gettin MAD that you are in a shitty simulation created by shitty people, and draggin them into it to get sweet sweet vengence. <br><Br>Haha fuck that took way more effort than I thought. Just gonna...deploy that shit.")
if($.b)f5.b="Who is Shogun??? <div class ='strikethroughStuff'>Guess who ended up having to sleep instead of finishing up rage last night? It was me. Hopefully this is going out first thing in the morning, tho. <br><Br>  And also hopefully I rewrite it with more energy.  Basically, Rage Gnosis4 is about gettin MAD that you are in a shitty simulation created by shitty people, and draggin them into it to get sweet sweet vengence. <br><Br>Haha fuck that took way more effort than I thought. Just gonna...deploy that shit.</a>"
f6=new K.a("9/6/17","So, one popular headcanon about Doom is that it's about rules.  So, while all Tier4 gnosis events are about changing the rules, Doom is about changing the RULES. Which is to say that the laws of causality gets fucked up in a weird lovecraftian nightmare as everything inverts itself just for the sake of changing rules.  It's p dope. <br><Br>Also, I finally fixed a p rare instance of a bug with AB, we can all breathe easier now.")
if($.b)f6.b="Who is Shogun??? <div class ='strikethroughStuff'>So, one popular headcanon about Doom is that it's about rules.  So, while all Tier4 gnosis events are about changing the rules, Doom is about changing the RULES. Which is to say that the laws of causality gets fucked up in a weird lovecraftian nightmare as everything inverts itself just for the sake of changing rules.  It's p dope. <br><Br>Also, I finally fixed a p rare instance of a bug with AB, we can all breathe easier now.</a>"
f7=new K.a("9/5/17","Blood Tier4 is out. Blood players try to hack the game until more of their friends are allowed to play, with mixed results. They also make sure everybody stays abnormally sane.<br><br>Life4 is also out. They seek ultimate power and disable death entirely, which has some interesting side effects.<br><br>Both Life and Blood are tiers that will get a LOT better post NPC update, btw.")
if($.b)f7.b="Who is Shogun??? <div class ='strikethroughStuff'>Blood Tier4 is out. Blood players try to hack the game until more of their friends are allowed to play, with mixed results. They also make sure everybody stays abnormally sane.<br><br>Life4 is also out. They seek ultimate power and disable death entirely, which has some interesting side effects.<br><br>Both Life and Blood are tiers that will get a LOT better post NPC update, btw.</a>"
f8=new K.a("9/4/17","Void Tier4 is out now. Void players highly value their privacy, so don't expect to see what it does. Hell, they even managed to figure out how to lie to AB.<Br><br>Light players do the opposite, drawing attention to themself at the cost of everyone else.  At least they make a little bit of the session stats visible. And you know, everybody gets SO LUUUUUUUUCKY!!!!!!!!  It's kind of funny when two light players fight over the spot light, tho.")
if($.b)f8.b="Who is Shogun??? <div class ='strikethroughStuff'>Void Tier4 is out now. Void players highly value their privacy, so don't expect to see what it does. Hell, they even managed to figure out how to lie to AB.<Br><br>Light players do the opposite, drawing attention to themself at the cost of everyone else.  At least they make a little bit of the session stats visible. And you know, everybody gets SO LUUUUUUUUCKY!!!!!!!!  It's kind of funny when two light players fight over the spot light, tho.</a>"
f9=new K.a("9/3/17","Got both Breath and Heart tier4 gnosis events out today. Heart's are....NOT quite how I envisioned, but I figure glitchy graphics are going to be a risk of wastes fucking with the code. I'll fix it eventually.")
if($.b)f9.b="Who is Shogun??? <div class ='strikethroughStuff'>Got both Breath and Heart tier4 gnosis events out today. Heart's are....NOT quite how I envisioned, but I figure glitchy graphics are going to be a risk of wastes fucking with the code. I'll fix it eventually.</a>"
g0=new K.a("9/2/17","Dear sweet precious sweet sweet AB, who remains, as always, the best, has informed me that she hates my entire Class.  Wastes fuck with the rules of the sim and make her reports incredibly inaccurate.   So I have given her the ultimate act of diamond buddy trust, and have given her the power to UNDO any Wastes effects.   <br><BR>Functionally, this means that she won't apply one sessions' waste shit to the next session in the list, but that the Wastes changes WILL happen to their own scratch and combo and etc.<Br><Br>You should also find AB much faster after PL and me frantically cleared away a lot of shit that was slowing things down.")
if($.b)g0.b="Who is Shogun??? <div class ='strikethroughStuff'>Dear sweet precious sweet sweet AB, who remains, as always, the best, has informed me that she hates my entire Class.  Wastes fuck with the rules of the sim and make her reports incredibly inaccurate.   So I have given her the ultimate act of diamond buddy trust, and have given her the power to UNDO any Wastes effects.   <br><BR>Functionally, this means that she won't apply one sessions' waste shit to the next session in the list, but that the Wastes changes WILL happen to their own scratch and combo and etc.<Br><Br>You should also find AB much faster after PL and me frantically cleared away a lot of shit that was slowing things down.</a>"
g1=new K.a("9/1/17","Hope players now are able to perform their tier 4 Gnosis bullshit. They generally change basic facts about the session that they'd rather not believe in.<br><Br>The best possible bug happened while I was debugging it, tho.  So, Hope players can childisly rename the class/aspect of whoever they hate, right?  This resulted in me discovering that Aspects dont actually know what file their symbol is in, still using the outdated 'name.png' schema.   This resulted in the sim crashing because it could not find 'Dick.png'.  Best crash.")
if($.b)g1.b="Who is Shogun??? <div class ='strikethroughStuff'>Hope players now are able to perform their tier 4 Gnosis bullshit. They generally change basic facts about the session that they'd rather not believe in.<br><Br>The best possible bug happened while I was debugging it, tho.  So, Hope players can childisly rename the class/aspect of whoever they hate, right?  This resulted in me discovering that Aspects dont actually know what file their symbol is in, still using the outdated 'name.png' schema.   This resulted in the sim crashing because it could not find 'Dick.png'.  Best crash.</a>"
g2=new K.a("8/31/17","Been doing various bug fixes. AB is a LOT more sane now, no clue how so many things went under my radar.<br><br>I also added the ability to hover over names to see what a player/enemies current stats are, and what fraymotifs they have.")
if($.b)g2.b="Who is Shogun??? <div class ='strikethroughStuff'>Been doing various bug fixes. AB is a LOT more sane now, no clue how so many things went under my radar.<br><br>I also added the ability to hover over names to see what a player/enemies current stats are, and what fraymotifs they have.</a>"
g3=new K.a("8/30/17","I spammed the fuck out of finishing the tier3 gnosis events. Hell yes.<Br><Br>Now all I gotta do is a buncha bug and balance fixes, and I'll be ready to start up the tier4 events.<br><BR> THEN I'll probably start working on the Land update, although I might suddenly wanna do the NPC update instead. ")
if($.b)g3.b="Who is Shogun??? <div class ='strikethroughStuff'>I spammed the fuck out of finishing the tier3 gnosis events. Hell yes.<Br><Br>Now all I gotta do is a buncha bug and balance fixes, and I'll be ready to start up the tier4 events.<br><BR> THEN I'll probably start working on the Land update, although I might suddenly wanna do the NPC update instead. </a>"
g4=new K.a("8/29/17","How 'bout that Hiveswap release date announcment? It's so weird to me that I started up SBURBSim as a way to pass the time 'before Hiveswap' way back in January, and now here we are. Good times. <br><Br> Today I implented a basic 'grist' system that is required to breed a successful frog.  Otherwise one asshole with a FAQ was enough to basically guarantee victory.  NOW everybody has to pull their weight.<br><Br>We also have the breath/space mobility exploit, and a shit ton of bug/balance fixes ")
if($.b)g4.b="Who is Shogun??? <div class ='strikethroughStuff'>How 'bout that Hiveswap release date announcment? It's so weird to me that I started up SBURBSim as a way to pass the time 'before Hiveswap' way back in January, and now here we are. Good times. <br><Br> Today I implented a basic 'grist' system that is required to breed a successful frog.  Otherwise one asshole with a FAQ was enough to basically guarantee victory.  NOW everybody has to pull their weight.<br><Br>We also have the breath/space mobility exploit, and a shit ton of bug/balance fixes </a>"
g5=new K.a("8/28/17","A little flavor text is added for interaction effects, and there's a new mini-prophecy system for Doom to exploit for tier 3 gnosis.<br><Br>A few bug fixes, too.")
if($.b)g5.b="Who is Shogun??? <div class ='strikethroughStuff'>A little flavor text is added for interaction effects, and there's a new mini-prophecy system for Doom to exploit for tier 3 gnosis.<br><Br>A few bug fixes, too.</a>"
g6=new K.a("8/27/17","Relationships are a little less shitty in the sim now, and I added a bunch of extremely short and vague alternate endings.")
if($.b)g6.b="Who is Shogun??? <div class ='strikethroughStuff'>Relationships are a little less shitty in the sim now, and I added a bunch of extremely short and vague alternate endings.</a>"
g7=new K.a("8/26/17","Been importing various FAQs from you, the fans.  <br><br>Oh, and a few minor bug fixes.")
if($.b)g7.b="Who is Shogun??? <div class ='strikethroughStuff'>Been importing various FAQs from you, the fans.  <br><br>Oh, and a few minor bug fixes.</a>"
g8=new K.a("8/25/17","FAQS have ascii art now, and I'm startin to flesh things out from the 'how bullshit is X' level of stuff we had before.")
if($.b)g8.b="Who is Shogun??? <div class ='strikethroughStuff'>FAQS have ascii art now, and I'm startin to flesh things out from the 'how bullshit is X' level of stuff we had before.</a>"
g9=new K.a("8/24/17","FAQs are going p good, all the structure is in place for the whole shebang, besides ASCII art which if fighting me.<BR><BR>The discord has opened up a FAQ channel for ppl to submit shit.  It's important to remember that FAQs can be written by any classpect, not just Wastes.  Wastes just have a huge bonus towards meta shit.<BR><BR>I'm gonna be slowly adding the various faq entries while also doing bug fixes.  Once FAQs seem p close to finished (or I get bored) I'll start up the tier 3 gnosis events as well.")
if($.b)g9.b="Who is Shogun??? <div class ='strikethroughStuff'>FAQs are going p good, all the structure is in place for the whole shebang, besides ASCII art which if fighting me.<BR><BR>The discord has opened up a FAQ channel for ppl to submit shit.  It's important to remember that FAQs can be written by any classpect, not just Wastes.  Wastes just have a huge bonus towards meta shit.<BR><BR>I'm gonna be slowly adding the various faq entries while also doing bug fixes.  Once FAQs seem p close to finished (or I get bored) I'll start up the tier 3 gnosis events as well.</a>"
h0=new K.a("8/23/17","Getting the FAQs working had been kicking my ass so hard. Not even fair.  Sometimes sessions with faqs in them were a little random, which makes AB lose her shit. BLUH.  But they are working better than they were, so enjoy checking out the placeholder shit for tier 1 and 2 gnosis (i.e. players find and write random faqs).<br><Br>ParadoxLands wrote a <a href = 'tools/xml_editor/index.html'>xml editor</a> for ppl on teh discord to use to submit faq sections, which I'll start up once I get the FAQs right. You can use it to create sections for the FAQ. We'll probably get a tutorial up and running (maybe on the discord) before officially opening it, but until then you can check it out.")
if($.b)h0.b="Who is Shogun??? <div class ='strikethroughStuff'>Getting the FAQs working had been kicking my ass so hard. Not even fair.  Sometimes sessions with faqs in them were a little random, which makes AB lose her shit. BLUH.  But they are working better than they were, so enjoy checking out the placeholder shit for tier 1 and 2 gnosis (i.e. players find and write random faqs).<br><Br>ParadoxLands wrote a <a href = 'tools/xml_editor/index.html'>xml editor</a> for ppl on teh discord to use to submit faq sections, which I'll start up once I get the FAQs right. You can use it to create sections for the FAQ. We'll probably get a tutorial up and running (maybe on the discord) before officially opening it, but until then you can check it out.</a>"
h1=new K.a("8/20/17","No newspost yesterday as I wanted to wait till I had the recording of the <a href = 'https://soundcloud.com/jaded-researcher/great-refactoring-voice-chat'>Great Refactoring Voice Chat</a> ready. <br><Br>Today I'm gonna work more the faqs for the Waste Update. It's not what you'd expect, unless you've seen me rambling. Then it's exactly what you expect.<Br><br>Oh yeah, before I forget, the skeleton of the Waste Update is def in place, and you should see mysterious statements that basically boil down to placeholders.  Ignore them, they clearly mean nothing.")
if($.b)h1.b="Who is Shogun??? <div class ='strikethroughStuff'>No newspost yesterday as I wanted to wait till I had the recording of the <a href = 'https://soundcloud.com/jaded-researcher/great-refactoring-voice-chat'>Great Refactoring Voice Chat</a> ready. <br><Br>Today I'm gonna work more the faqs for the Waste Update. It's not what you'd expect, unless you've seen me rambling. Then it's exactly what you expect.<Br><br>Oh yeah, before I forget, the skeleton of the Waste Update is def in place, and you should see mysterious statements that basically boil down to placeholders.  Ignore them, they clearly mean nothing.</a>"
h2=new K.a("8/18/17","I'm working on the new waste update and fixing some last few hold out bugs, while PL has made a p dope new <a href ='tools/stat_summary/index.html'>automatic aspect explainer</a>, that'll update as we mess with the code. <Br><Br>Also, before I forget: We are basically at the end of The Great Refactoring. The Denizen Javascript has been defeated.  Sure, experimental is still buggy, but not any worse than other experiemental branch.  <br><Br> SO, to celebrate, I will drop a giggle snort tier and use my actual human voice to give a 'state of the sim' type talk on the discord.<br><Br> <a href = 'https://discord.gg/KPunMPc'>Tune in tomorrow, the 19th at 5pm EST.</a> ")
if($.b)h2.b="Who is Shogun??? <div class ='strikethroughStuff'>I'm working on the new waste update and fixing some last few hold out bugs, while PL has made a p dope new <a href ='tools/stat_summary/index.html'>automatic aspect explainer</a>, that'll update as we mess with the code. <Br><Br>Also, before I forget: We are basically at the end of The Great Refactoring. The Denizen Javascript has been defeated.  Sure, experimental is still buggy, but not any worse than other experiemental branch.  <br><Br> SO, to celebrate, I will drop a giggle snort tier and use my actual human voice to give a 'state of the sim' type talk on the discord.<br><Br> <a href = 'https://discord.gg/KPunMPc'>Tune in tomorrow, the 19th at 5pm EST.</a> </a>"
h3=new K.a("8/17/17","Lol, no, no we could not get done by 8/13. But, in my defense, mid way through stubbing out the Waste shit I realized that getting the classpects and interests to the new system PL propposed would make it WAY easier. So I set shit on fire again and me and PL fought some red squiggles.  Should be the last fire, Scouts honor.<span class='void'>And as ABJ has demonstrated, if Scouts know about anything, it's fire.</span><Br><Br>So, now to start doing Waste shit. It will be dope as fuck.")
if($.b)h3.b="Who is Shogun??? <div class ='strikethroughStuff'>Lol, no, no we could not get done by 8/13. But, in my defense, mid way through stubbing out the Waste shit I realized that getting the classpects and interests to the new system PL propposed would make it WAY easier. So I set shit on fire again and me and PL fought some red squiggles.  Should be the last fire, Scouts honor.<span class='void'>And as ABJ has demonstrated, if Scouts know about anything, it's fire.</span><Br><Br>So, now to start doing Waste shit. It will be dope as fuck.</a>"
h4=new K.a("8/12/17","Whoa, looks like AB is back to feeling like her old self. Hell yes.<Br><Br>Now all I gotta do is focus on squashing bugs, both the session crashing ones and the more insidious ones.  Will I be done by SBURBSim's new arc number of 13? Only time will tell. And time is the shittiest Aspect, so it ain't sayin' nothing.<Br><br>A few minor bugs are slain, and combo sessions are working again. OMG, the bug that was killing them was so stupid.")
if($.b)h4.b="Who is Shogun??? <div class ='strikethroughStuff'>Whoa, looks like AB is back to feeling like her old self. Hell yes.<Br><Br>Now all I gotta do is focus on squashing bugs, both the session crashing ones and the more insidious ones.  Will I be done by SBURBSim's new arc number of 13? Only time will tell. And time is the shittiest Aspect, so it ain't sayin' nothing.<Br><br>A few minor bugs are slain, and combo sessions are working again. OMG, the bug that was killing them was so stupid.</a>"
h5=new K.a("8/11/17","If I were the type of Waste to have Easter eggs, they'd probably be working a lot better now. <br><br>And if some part of the site were associated with said eggs, maybe they are too???<span class='void' Whoa, did I ACTUALLY refer to [???] with my shitty over punctuation giggle snort quirk???</span>")
if($.b)h5.b="Who is Shogun??? <div class ='strikethroughStuff'>If I were the type of Waste to have Easter eggs, they'd probably be working a lot better now. <br><br>And if some part of the site were associated with said eggs, maybe they are too???<span class='void' Whoa, did I ACTUALLY refer to [???] with my shitty over punctuation giggle snort quirk???</span></a>"
h6=new K.a("8/10/17","Heh, you know what's boring??? Fighting the tournament arc bugs.  You know what's NOT boring: finally fixing the x= part of ocDataStrings so we can have new classes.<br><br>Behold the Grace and Guide, classes which are still hella blank, but look really cool thanks to KR.  Graces will be the passive counterpart to Wastes (and will eat of the fruit of the upcoming Waste update), and Guides are the counterpart to Scouts.<Br><Br>The AuthorBot is a Guide, for example.")
if($.b)h6.b="Who is Shogun??? <div class ='strikethroughStuff'>Heh, you know what's boring??? Fighting the tournament arc bugs.  You know what's NOT boring: finally fixing the x= part of ocDataStrings so we can have new classes.<br><br>Behold the Grace and Guide, classes which are still hella blank, but look really cool thanks to KR.  Graces will be the passive counterpart to Wastes (and will eat of the fruit of the upcoming Waste update), and Guides are the counterpart to Scouts.<Br><Br>The AuthorBot is a Guide, for example.</a>"
h7=new K.a("8/9/17","Working on the Tournament Arc, which is being stubborn. <Br><Br>In the mean time, I remembered that I wanted to add a 'session of the day' kinda thing. You can see it in the menus, but it's basically just converting the date into yyyymmdd, like 201789.")
if($.b)h7.b="Who is Shogun??? <div class ='strikethroughStuff'>Working on the Tournament Arc, which is being stubborn. <Br><Br>In the mean time, I remembered that I wanted to add a 'session of the day' kinda thing. You can see it in the menus, but it's basically just converting the date into yyyymmdd, like 201789.</a>"
h8=new K.a("8/8/17","I figured I was banging my head on a brick wall with AB, so I let her continue at half-capacity for now while I shifted focus to get the OC data strings working.<br><br> As far as I can tell they are HELLA working, guys. It's pretty awesome. Haven't tested any easter eggs they have yet, but we are getting there.")
if($.b)h8.b="Who is Shogun??? <div class ='strikethroughStuff'>I figured I was banging my head on a brick wall with AB, so I let her continue at half-capacity for now while I shifted focus to get the OC data strings working.<br><br> As far as I can tell they are HELLA working, guys. It's pretty awesome. Haven't tested any easter eggs they have yet, but we are getting there.</a>"
h9=new K.a("8/6/17","Holy shit, why is it so hard to make AB filter sessions. This sucks. <br><br>But at least less sessions are crashing now after PL figured out what was wrong with combo sessions.<br><Br> Also, I have decided that '13' is an official arc number for SBURBSim, as my records indicate that on 1/13/17 is when I first coded 'an ending' for it (after starting work on 1/10).  <span class='void'>And also my oc uses hair 13 in the sim, and many other 13s. Like how Wastes are the 13th class.</span>")
if($.b)h9.b="Who is Shogun??? <div class ='strikethroughStuff'>Holy shit, why is it so hard to make AB filter sessions. This sucks. <br><br>But at least less sessions are crashing now after PL figured out what was wrong with combo sessions.<br><Br> Also, I have decided that '13' is an official arc number for SBURBSim, as my records indicate that on 1/13/17 is when I first coded 'an ending' for it (after starting work on 1/10).  <span class='void'>And also my oc uses hair 13 in the sim, and many other 13s. Like how Wastes are the 13th class.</span></a>"
i0=new K.a("8/4/17","Holy fuck I am the goddamned champion of coding. AB APPEARS TO BE WORKING. I am sure there's plenty of bugs to work out, but god DAMN does it feel good.<br><Br>I have not even REMOTELY sanity checked AB yet, so, you know, Observer Beware.<br><Br>Also, you still can't filter shit. But AB is awake. And that is all there is to say on the matter.")
if($.b)i0.b="Who is Shogun??? <div class ='strikethroughStuff'>Holy fuck I am the goddamned champion of coding. AB APPEARS TO BE WORKING. I am sure there's plenty of bugs to work out, but god DAMN does it feel good.<br><Br>I have not even REMOTELY sanity checked AB yet, so, you know, Observer Beware.<br><Br>Also, you still can't filter shit. But AB is awake. And that is all there is to say on the matter.</a>"
i1=new K.a("8/2/17","AB seems to weirdly like Aradia. Who knew. When I first booted her up, Aradia was all she'd talk about.<Br><br>First, I sent a bunch of AB's chassis into Sessions only to never see them again. RIP brave robot chassis. Then, they started coming back occasionally. Apparently they had seen some shit, though, because they would refuse to go back out after reporting to find new sessions.  AB's love of scratching shined through, though, since she would make a special exception of sessions that could be scratched.<Br><Br>Maybe tomorrow I'll get her sorted out? ")
if($.b)i1.b="Who is Shogun??? <div class ='strikethroughStuff'>AB seems to weirdly like Aradia. Who knew. When I first booted her up, Aradia was all she'd talk about.<Br><br>First, I sent a bunch of AB's chassis into Sessions only to never see them again. RIP brave robot chassis. Then, they started coming back occasionally. Apparently they had seen some shit, though, because they would refuse to go back out after reporting to find new sessions.  AB's love of scratching shined through, though, since she would make a special exception of sessions that could be scratched.<Br><Br>Maybe tomorrow I'll get her sorted out? </a>"
i2=new K.a("8/1/17","Minor bug fixes here and there as I get AB hooked up to the new stuff.  Royalty, for example, were not getting their prototyping bonus pretty blatantly.")
if($.b)i2.b="Who is Shogun??? <div class ='strikethroughStuff'>Minor bug fixes here and there as I get AB hooked up to the new stuff.  Royalty, for example, were not getting their prototyping bonus pretty blatantly.</a>"
i3=new K.a("7/31/17","Today I will focus on getting The Great Refactoring (everything is on fire and there are plenty of crashes) on to the Experimental branch. As such, expect this to be the final Main/JavaScript update for awhile. <br><Br>Holy shit guys, Experimental is burning and full of bugs (fire ants???) but here we are!!!<Br><Br>ParadoxLands is officially the Architect for the post javascript SBURBSim, and will continue helping me out with my Authorial duties.")
if($.b)i3.b="Who is Shogun??? <div class ='strikethroughStuff'>Today I will focus on getting The Great Refactoring (everything is on fire and there are plenty of crashes) on to the Experimental branch. As such, expect this to be the final Main/JavaScript update for awhile. <br><Br>Holy shit guys, Experimental is burning and full of bugs (fire ants???) but here we are!!!<Br><Br>ParadoxLands is officially the Architect for the post javascript SBURBSim, and will continue helping me out with my Authorial duties.</a>"
i4=new K.a("7/30/17","Still tracking down ABJ's first bug. When I ask her what classes exist, she lists out the canon ones, and then lists out the fanon ones like 50 times a piece. So. I guess she REALLY likes fanon.")
if($.b)i4.b="Who is Shogun??? <div class ='strikethroughStuff'>Still tracking down ABJ's first bug. When I ask her what classes exist, she lists out the canon ones, and then lists out the fanon ones like 50 times a piece. So. I guess she REALLY likes fanon.</a>"
i5=new K.a("7/29/17","I have begun the process of waking AB and ABJ back up so they can help us debug.<Br><Br>Oh shit, ABJ is awake. And...reporting that so many players are Wastes of Blood?  This...this is definitely not creepy at all.<Br><Br>(Also why are wastes in the main sim??? Gotta go find that bug)")
if($.b)i5.b="Who is Shogun??? <div class ='strikethroughStuff'>I have begun the process of waking AB and ABJ back up so they can help us debug.<Br><Br>Oh shit, ABJ is awake. And...reporting that so many players are Wastes of Blood?  This...this is definitely not creepy at all.<Br><Br>(Also why are wastes in the main sim??? Gotta go find that bug)</a>"
i6=new K.a("7/28/17","Today I discovered that AB doesn't hate cinnamon rolls.")
if($.b)i6.b="Who is Shogun??? <div class ='strikethroughStuff'>Today I discovered that AB doesn't hate cinnamon rolls.</a>"
i7=new K.a("7/27/17","Man, I've been dealing with getting The First Session working so much I forgot to update you guys!  <a href = 'https://drive.google.com/file/d/0B-uS7ImZMoISTmw2UGFZaFVHRDA/view'>The First Session</a> is buggy as hell, and nobody is apparently allowed to do Land Quests, but we got 'em folks, and I have promptly added them to my personal Mythology. Hell FUCKING yes.<Br><Br>Next up is getting them able to do quests and fix any bugs that shake out of that, and then waking dear sweet precious sweet sweet AuthorBot up from her medically induced Coma to see if she can help find more bugs.<br><br>Also: holy shit, we are on day TEN of The Great Refactoring. This is the longest I've done any one thing on the sim, or as RS put it: 'ACHIEVEMENT GET: In-TEN-se Work- Slave away for ten days on one task. '.")
if($.b)i7.b="Who is Shogun??? <div class ='strikethroughStuff'>Man, I've been dealing with getting The First Session working so much I forgot to update you guys!  <a href = 'https://drive.google.com/file/d/0B-uS7ImZMoISTmw2UGFZaFVHRDA/view'>The First Session</a> is buggy as hell, and nobody is apparently allowed to do Land Quests, but we got 'em folks, and I have promptly added them to my personal Mythology. Hell FUCKING yes.<Br><Br>Next up is getting them able to do quests and fix any bugs that shake out of that, and then waking dear sweet precious sweet sweet AuthorBot up from her medically induced Coma to see if she can help find more bugs.<br><br>Also: holy shit, we are on day TEN of The Great Refactoring. This is the longest I've done any one thing on the sim, or as RS put it: 'ACHIEVEMENT GET: In-TEN-se Work- Slave away for ten days on one task. '.</a>"
i8=new K.a("7/25/17","Hell FUCKING yes x2Combo!!  The Refactored Sim just generated it's first player, a Witch of Space who has a MonkeySprite but crashed before they had anything else. <a href = 'image_browser.html?firstPlayer=true'>Fan art is here.</a>")
if($.b)i8.b="Who is Shogun??? <div class ='strikethroughStuff'>Hell FUCKING yes x2Combo!!  The Refactored Sim just generated it's first player, a Witch of Space who has a MonkeySprite but crashed before they had anything else. <a href = 'image_browser.html?firstPlayer=true'>Fan art is here.</a></a>"
i9=new K.a("7/24/17","Hell FUCKING yes, the Great Refactoring has hit a major milestone. I can now render the Sim's navbar, and like, infinity shitty errors. This is progress. This is FANTASTIC progress. Thousands of syntax errors from the conversion process have been slain in absolutely not-honorable combat.  <br><br>And now comes the process of slowly getting each feature working again, while ALSO slaying what red squiggles I have magnanimously allowed to live in my haste to speed run this bitch.")
if($.b)i9.b="Who is Shogun??? <div class ='strikethroughStuff'>Hell FUCKING yes, the Great Refactoring has hit a major milestone. I can now render the Sim's navbar, and like, infinity shitty errors. This is progress. This is FANTASTIC progress. Thousands of syntax errors from the conversion process have been slain in absolutely not-honorable combat.  <br><br>And now comes the process of slowly getting each feature working again, while ALSO slaying what red squiggles I have magnanimously allowed to live in my haste to speed run this bitch.</a>"
j0=new K.a("7/23/17","Mages of Heart no longer suffer from the corruption of their own identity, in the most hilariously ironic bug to hit the OCDataStrings yet.<br><Br>Also, ParadoxLands has helpfully provided this explanation for just what the Great Refactoring is.<br><Br><a href = 'images/misc/fanArt/gifs/the_great_refactor.gif'><img width = '300' src = 'images/misc/fanArt/gifs/the_great_refactor.gif'></a>")
if($.b)j0.b="Who is Shogun??? <div class ='strikethroughStuff'>Mages of Heart no longer suffer from the corruption of their own identity, in the most hilariously ironic bug to hit the OCDataStrings yet.<br><Br>Also, ParadoxLands has helpfully provided this explanation for just what the Great Refactoring is.<br><Br><a href = 'images/misc/fanArt/gifs/the_great_refactor.gif'><img width = '300' src = 'images/misc/fanArt/gifs/the_great_refactor.gif'></a></a>"
j1=new K.a("7/22/17","The Witch of Void and Waste of Mind use The Great Refactoring. A defensive ward of glass and open doors surrounds the allies.")
if($.b)j1.b="Who is Shogun??? <div class ='strikethroughStuff'>The Witch of Void and Waste of Mind use The Great Refactoring. A defensive ward of glass and open doors surrounds the allies.</a>"
j2=new K.a("7/21/17","<span class='void'>Just. Fuck bees.</span>")
if($.b)j2.b="Who is Shogun??? <div class ='strikethroughStuff'><span class='void'>Just. Fuck bees.</span></a>"
j3=new K.a("7/20/17","The God Tier Waste of Mind (jadedResearcher) is doing... something. It's kind of hard to see. You are definitely blaming the God Tier Witch of Void (paradoxLands), somehow. Everyone seems to be pretty happy about it, though.<span class ='void'>The Waste of Mind and Witch of Void are refactoring like goddamn machines. It's crazy how much refactoring they are doing. How HIGH do you even have to be etc. etc.  ... ... ...  It's going well.</span>")
if($.b)j3.b="Who is Shogun??? <div class ='strikethroughStuff'>The God Tier Waste of Mind (jadedResearcher) is doing... something. It's kind of hard to see. You are definitely blaming the God Tier Witch of Void (paradoxLands), somehow. Everyone seems to be pretty happy about it, though.<span class ='void'>The Waste of Mind and Witch of Void are refactoring like goddamn machines. It's crazy how much refactoring they are doing. How HIGH do you even have to be etc. etc.  ... ... ...  It's going well.</span></a>"
j4=new K.a("7/19/17","Day Two of the Great Refactoring: Things are going about the speed I anticipated. The Sim is still in ruins, and can't be run, so I've decided to spin off some time to write ways to test it even if it's not finished. In JAVASCRIPT this was as simple as making a new html page, but JavaScript is also a buggy piece of shit (or at least sure does love ENABLING buggy pieces of shit. ) so... <Br><Br>Holy shit, guys, I just realized: JavaScript is TOTALLY a Bard of Doom!!! It ALLOWS you to be destroyed by your own Doom, or to cause destruction with it.  Doom being both 'bad ends' and rules/structure.  JavaScript makes is SO FUCKING EASY to break 'the rules', both for good and for bad. Headcanon: Accepted.")
if($.b)j4.b="Who is Shogun??? <div class ='strikethroughStuff'>Day Two of the Great Refactoring: Things are going about the speed I anticipated. The Sim is still in ruins, and can't be run, so I've decided to spin off some time to write ways to test it even if it's not finished. In JAVASCRIPT this was as simple as making a new html page, but JavaScript is also a buggy piece of shit (or at least sure does love ENABLING buggy pieces of shit. ) so... <Br><Br>Holy shit, guys, I just realized: JavaScript is TOTALLY a Bard of Doom!!! It ALLOWS you to be destroyed by your own Doom, or to cause destruction with it.  Doom being both 'bad ends' and rules/structure.  JavaScript makes is SO FUCKING EASY to break 'the rules', both for good and for bad. Headcanon: Accepted.</a>"
j5=new K.a("7/17/16","Last deploy until me and ParadoxLands finish up converting the whole shebang to a new language to get ready for the NPC update. <br><Br>This deploy had bug fixes, and re-enabled dear sweet precious sweet sweet The Mayor, who had accidentally become Impossible. <span class = 'void'>Also, Null class players work again.</span>")
if($.b)j5.b="Who is Shogun??? <div class ='strikethroughStuff'>Last deploy until me and ParadoxLands finish up converting the whole shebang to a new language to get ready for the NPC update. <br><Br>This deploy had bug fixes, and re-enabled dear sweet precious sweet sweet The Mayor, who had accidentally become Impossible. <span class = 'void'>Also, Null class players work again.</span></a>"
j6=new K.a("7/16/17","Spent the past couple days fixing small bugs (such as Original Characters not having the right psionics for their blood color, or Guardians for 13+ sessions crashing them due to not wanting to share classes) and adding small features (like getting the OCDataStrings ready to be extendible. <br><Br>I anticipate main and Experimental branching apart again shortly.<Br><br>Also, Popo-Merrygamz has provided us with 6 new hairs, which KR has massaged to fit the Sim's display specifications.")
if($.b)j6.b="Who is Shogun??? <div class ='strikethroughStuff'>Spent the past couple days fixing small bugs (such as Original Characters not having the right psionics for their blood color, or Guardians for 13+ sessions crashing them due to not wanting to share classes) and adding small features (like getting the OCDataStrings ready to be extendible. <br><Br>I anticipate main and Experimental branching apart again shortly.<Br><br>Also, Popo-Merrygamz has provided us with 6 new hairs, which KR has massaged to fit the Sim's display specifications.</a>"
j7=new K.a("7/14/17","What is this??? Did Fraymotifs finally hit the Main Branch??? Hopy shit!<br><br>I bet classpects have gotten a full overhaul, as well as the entire Fraymotif Engine.  I'm litterally writing up the new classpect descriptions for the Char Creator as we speak. <br><br> (Also, what's that <a href = 'land_of_rods_and_screens.html'>LORAS</a> thing???")
if($.b)j7.b="Who is Shogun??? <div class ='strikethroughStuff'>What is this??? Did Fraymotifs finally hit the Main Branch??? Hopy shit!<br><br>I bet classpects have gotten a full overhaul, as well as the entire Fraymotif Engine.  I'm litterally writing up the new classpect descriptions for the Char Creator as we speak. <br><br> (Also, what's that <a href = 'land_of_rods_and_screens.html'>LORAS</a> thing???</a>"
j8=new K.a("7/13/17","Made sure the new classes get at least place holder quests to fiddle with.  <br><br>I also put in a alpha 'here is a list of buffs/debuffs' readout.  It seems kinda spammy right now. Not sure what I want to do with it.<br><Br> I also workshopped ELEVEN additional 90s rap/rock sensations to help players out with optional bosses I plan on adding to the sim over time. That brings us up to a Pantheon of 12, total.  May they save us all.")
if($.b)j8.b="Who is Shogun??? <div class ='strikethroughStuff'>Made sure the new classes get at least place holder quests to fiddle with.  <br><br>I also put in a alpha 'here is a list of buffs/debuffs' readout.  It seems kinda spammy right now. Not sure what I want to do with it.<br><Br> I also workshopped ELEVEN additional 90s rap/rock sensations to help players out with optional bosses I plan on adding to the sim over time. That brings us up to a Pantheon of 12, total.  May they save us all.</a>"
j9=new K.a("7/12/17","Small, fiddly, fraymotif things, like making not all denizens have the same fraymotif. <br><br>And 3 new classes (Scout, Sage, Scribe) though they behave mostly like existing classes. I have plans though. I continue to like how Life/Doom players behave for ghost shit, and think that all existing scened could benefit from having class themed things for people to do on top of the existing stuff.")
if($.b)j9.b="Who is Shogun??? <div class ='strikethroughStuff'>Small, fiddly, fraymotif things, like making not all denizens have the same fraymotif. <br><br>And 3 new classes (Scout, Sage, Scribe) though they behave mostly like existing classes. I have plans though. I continue to like how Life/Doom players behave for ghost shit, and think that all existing scened could benefit from having class themed things for people to do on top of the existing stuff.</a>"
k0=new K.a("7/11/17","The rebalance is finished. Huzzah! Let us all resolutely forget the thousands of players that died while the survival rate was at 18%. That would be why I didn't deploy till now. 'Cause with all you simulating sessions, it would have been many, many more casualties. R.I.P.<Br><Br>In completely unrelated news, AB is reporting a new type of ending??? What is even up with that? ")
if($.b)k0.b="Who is Shogun??? <div class ='strikethroughStuff'>The rebalance is finished. Huzzah! Let us all resolutely forget the thousands of players that died while the survival rate was at 18%. That would be why I didn't deploy till now. 'Cause with all you simulating sessions, it would have been many, many more casualties. R.I.P.<Br><Br>In completely unrelated news, AB is reporting a new type of ending??? What is even up with that? </a>"
k1=new K.a("7/10/17","Spent today working on making sure all stats effect combat in some fashion.  Sanity and Free Will will control if you can use fraymotifs, for example.  Problem is it unbalanced everything enough that I can't justify a deploy yet :/<span class='void'><br><br>Which is a fucking SHAME because I made the best shitty fan troll for you guys, with bubble gum pink blood (she is the only one to have it) and heart horns and her name is specialSnowLake and she is in a threeway matesprite ship with Dave and Karkat and etc. etc.<br><br>When I first created this original character (do not steal) she created a dope as fuck bug where all SBURBSim players were covered in her blood, like we were all part of some Orient Express Style conspiracy murder of her annoying ass.</span>")
if($.b)k1.b="Who is Shogun??? <div class ='strikethroughStuff'>Spent today working on making sure all stats effect combat in some fashion.  Sanity and Free Will will control if you can use fraymotifs, for example.  Problem is it unbalanced everything enough that I can't justify a deploy yet :/<span class='void'><br><br>Which is a fucking SHAME because I made the best shitty fan troll for you guys, with bubble gum pink blood (she is the only one to have it) and heart horns and her name is specialSnowLake and she is in a threeway matesprite ship with Dave and Karkat and etc. etc.<br><br>When I first created this original character (do not steal) she created a dope as fuck bug where all SBURBSim players were covered in her blood, like we were all part of some Orient Express Style conspiracy murder of her annoying ass.</span></a>"
k2=new K.a("7/9/17","Minor tweaks here and there, as well as a list of possible pre-made names for fraymotifs that the discord brainstormed up.<br><Br>Life players should suck a little bit less, too, 'cause they no longer interfere with the God Tiering process.  (They would get all panicky and revive players before they could get a chance to God Tier). <br><Br>Rage/Void players have been nerfed a bit, and shouldn't God Tier the second they get in the Medium anymore. Hilarious though it was, it really unbalanced things.")
if($.b)k2.b="Who is Shogun??? <div class ='strikethroughStuff'>Minor tweaks here and there, as well as a list of possible pre-made names for fraymotifs that the discord brainstormed up.<br><Br>Life players should suck a little bit less, too, 'cause they no longer interfere with the God Tiering process.  (They would get all panicky and revive players before they could get a chance to God Tier). <br><Br>Rage/Void players have been nerfed a bit, and shouldn't God Tier the second they get in the Medium anymore. Hilarious though it was, it really unbalanced things.</a>"
k3=new K.a("7/8/17","So, I noticed that shipping grid were broken, and SOMEHOW this turned into a two day long shipping re-work??? Heart and Blood players maintain shipping grids, with any non-quadranted crushes being the Shippers's speculation. 'Oh, they seem to like this other player a lot, I bet it's FLUSHED/PALE'. Shippers will occasionally also butt in and attempt to get their favorite ships together.  <br><Br>I ALSO did small stat and fraymotif tweaks, but nothing particularly memorable. Fraymotifs in general should be more useful, since they are guaranteed to be at LEAST as good as a regular attack, damage wise. <Br><br>ALSO, DilletantMathematician made this amazing <a href = 'http:,//www.purplefrog.com/~thoth/art/sburb-disco/disco.html'>fan animation-ey thingy</a> with SBURBSim characters dancing.<span class='void'><Br><br>Also, <a href = 'index2.html?faces=off'>FaceOff mode is a thing that will haunt our nightmares forever</a><br><br>Also, since I updated shipping, ABJ broke, and I realized that SHE ships, too!!!  She reports back on initial ships.  So she is a sociopath who enojoys total party wipes, and shipping.</span> ")
if($.b)k3.b="Who is Shogun??? <div class ='strikethroughStuff'>So, I noticed that shipping grid were broken, and SOMEHOW this turned into a two day long shipping re-work??? Heart and Blood players maintain shipping grids, with any non-quadranted crushes being the Shippers's speculation. 'Oh, they seem to like this other player a lot, I bet it's FLUSHED/PALE'. Shippers will occasionally also butt in and attempt to get their favorite ships together.  <br><Br>I ALSO did small stat and fraymotif tweaks, but nothing particularly memorable. Fraymotifs in general should be more useful, since they are guaranteed to be at LEAST as good as a regular attack, damage wise. <Br><br>ALSO, DilletantMathematician made this amazing <a href = 'http:,//www.purplefrog.com/~thoth/art/sburb-disco/disco.html'>fan animation-ey thingy</a> with SBURBSim characters dancing.<span class='void'><Br><br>Also, <a href = 'index2.html?faces=off'>FaceOff mode is a thing that will haunt our nightmares forever</a><br><br>Also, since I updated shipping, ABJ broke, and I realized that SHE ships, too!!!  She reports back on initial ships.  So she is a sociopath who enojoys total party wipes, and shipping.</span> </a>"
k4=new K.a("7/6/17","<span class='void'>Is it possible I got distracted from fraymotifs??? And added Wastes as a class??? That doesn't SOUND like something I would do, focus is practically my middle name. But if I DID I would expect it to be shitty and alpha and have wastes not do anything special at all.<br><Br></span>I got briefly distracted from fraymotifs working on a tiny rendering engine upgrade that makes swapping out sprites easier (not the full Sprite Rendering Upgrade, though). And so I toiled to make the stupidest possible <a href = 'index2.html?easter=egg'>easter egg</a> with it. (Let's all thank MultipleStripes for the sprites!!!)<br><br>And if I DID manage to focus on fraymotifs for any amount of time at all, I'd expect troll psionics to be more of a thing, both in and out of combat. It's still very much a proof of concept (only a handful of powers) but the framework is there.<br><Br>ALSO I did a shit ton of bug fixes for the character creator, so it should APPEAR less buggy (it wasn't ACTUALLY buggy underneath, the forms just didnt' like to update)")
if($.b)k4.b="Who is Shogun??? <div class ='strikethroughStuff'><span class='void'>Is it possible I got distracted from fraymotifs??? And added Wastes as a class??? That doesn't SOUND like something I would do, focus is practically my middle name. But if I DID I would expect it to be shitty and alpha and have wastes not do anything special at all.<br><Br></span>I got briefly distracted from fraymotifs working on a tiny rendering engine upgrade that makes swapping out sprites easier (not the full Sprite Rendering Upgrade, though). And so I toiled to make the stupidest possible <a href = 'index2.html?easter=egg'>easter egg</a> with it. (Let's all thank MultipleStripes for the sprites!!!)<br><br>And if I DID manage to focus on fraymotifs for any amount of time at all, I'd expect troll psionics to be more of a thing, both in and out of combat. It's still very much a proof of concept (only a handful of powers) but the framework is there.<br><Br>ALSO I did a shit ton of bug fixes for the character creator, so it should APPEAR less buggy (it wasn't ACTUALLY buggy underneath, the forms just didnt' like to update)</a>"
k5=new K.a("7/5/17","More fraymotif work, including sprites (and thus Crowned Carapacians) having fraymotifs. Still a LOT of bugs to fix, though.<br><br>Also, <a href = 'index2.html?images=pumpkin'>What Images Mode</a> is now a thing. If you don't give a fuck about images, or just want to make stupid shit (like 144 player sessions) not crash your browser, this is the mode for you. Shine on, you crazy diamond.<Br><br>ALSO, I made a quick lil 'character sheet' of the players at the end (if they actually GET to the end, and don't crash the game or doom themselves) printing out their 'before' and 'after' stats.")
if($.b)k5.b="Who is Shogun??? <div class ='strikethroughStuff'>More fraymotif work, including sprites (and thus Crowned Carapacians) having fraymotifs. Still a LOT of bugs to fix, though.<br><br>Also, <a href = 'index2.html?images=pumpkin'>What Images Mode</a> is now a thing. If you don't give a fuck about images, or just want to make stupid shit (like 144 player sessions) not crash your browser, this is the mode for you. Shine on, you crazy diamond.<Br><br>ALSO, I made a quick lil 'character sheet' of the players at the end (if they actually GET to the end, and don't crash the game or doom themselves) printing out their 'before' and 'after' stats.</a>"
k6=new K.a("7/4/17","Denizens have their own 'fraymotifs' now, and several fraymotif related bugs have been fixed as well.<br><br>  If easter eggs were a thing, I'd expect to see more of them, as well. <span class='void'>It's <a href = 'index2.html?pen15=ouija'>dicks</a>. dicks are the secret.</span>")
if($.b)k6.b="Who is Shogun??? <div class ='strikethroughStuff'>Denizens have their own 'fraymotifs' now, and several fraymotif related bugs have been fixed as well.<br><br>  If easter eggs were a thing, I'd expect to see more of them, as well. <span class='void'>It's <a href = 'index2.html?pen15=ouija'>dicks</a>. dicks are the secret.</span></a>"
k7=new K.a("7/3/17","Today shall forever go down in history as the day that 'fraymotifs when?' stopped being a meme and instead became a real thing.  Players can now have text only, unbalanced as fuck fraymotifs.  <Br><Br>Next up is hand made 'fraymotifs' for denizens, sprites and psionic trolls.  Then maybe i'll look into at least having the users of the fraymotifs pose as a team (if they are players).  ")
if($.b)k7.b="Who is Shogun??? <div class ='strikethroughStuff'>Today shall forever go down in history as the day that 'fraymotifs when?' stopped being a meme and instead became a real thing.  Players can now have text only, unbalanced as fuck fraymotifs.  <Br><Br>Next up is hand made 'fraymotifs' for denizens, sprites and psionic trolls.  Then maybe i'll look into at least having the users of the fraymotifs pose as a team (if they are players).  </a>"
k8=new K.a("7/1/17","<a href = 'land_of_rods_and_screens.html'>The LORAS game</a>, described by <a href = 'https://classpectanon.tumblr.com/post/162204711075/could-i-get-a-land-analysis-waste-or-maid-if'>classpectanon</a> and drawn by <a href = 'http:,//paradoxlands.tumblr.com/post/162444935101/land-of-rods-and-screens-your-land-is-a'>ParadoxLands</a> is basically complete. In addition to ParadoxLands' dope background for the game, there are multiple 'win' states, and you no longer get the best reward for the regular ending. If you played the game early enough, the best reward (holy shit is it hard not to call it the Ultimate Reward) was pretty much inevitable to get, but now it's only for the True Ending. Thems the breaks, future peeps. <Br><Br>Also, procedural fraymotif descriptions are done, and I expect to be able to shove fraymotifs in general into the sim within the next couple of days.<br><Br>In the meantime you can see my shittily organized test page <a href = 'test_fraymotif.html'> here</a>")
if($.b)k8.b="Who is Shogun??? <div class ='strikethroughStuff'><a href = 'land_of_rods_and_screens.html'>The LORAS game</a>, described by <a href = 'https://classpectanon.tumblr.com/post/162204711075/could-i-get-a-land-analysis-waste-or-maid-if'>classpectanon</a> and drawn by <a href = 'http:,//paradoxlands.tumblr.com/post/162444935101/land-of-rods-and-screens-your-land-is-a'>ParadoxLands</a> is basically complete. In addition to ParadoxLands' dope background for the game, there are multiple 'win' states, and you no longer get the best reward for the regular ending. If you played the game early enough, the best reward (holy shit is it hard not to call it the Ultimate Reward) was pretty much inevitable to get, but now it's only for the True Ending. Thems the breaks, future peeps. <Br><Br>Also, procedural fraymotif descriptions are done, and I expect to be able to shove fraymotifs in general into the sim within the next couple of days.<br><Br>In the meantime you can see my shittily organized test page <a href = 'test_fraymotif.html'> here</a></a>"
k9=new K.a("6/30/17","Fraymotifs are nearly ready for v1 to be integrated into the sim. I'm brainstorming some interesting ways to describe them in sim rather then just call out an attack name and have you guess what happens next. <br><Br>Once player fraymotifs are fairly stable, I'll work on the non-procedural sprite/denizen/etc 'fraymotifs', as well as custom ways to get fraymotifs, and extending fraymotifs to have effects other than just damage/healing/buffing/debuffing.")
if($.b)k9.b="Who is Shogun??? <div class ='strikethroughStuff'>Fraymotifs are nearly ready for v1 to be integrated into the sim. I'm brainstorming some interesting ways to describe them in sim rather then just call out an attack name and have you guess what happens next. <br><Br>Once player fraymotifs are fairly stable, I'll work on the non-procedural sprite/denizen/etc 'fraymotifs', as well as custom ways to get fraymotifs, and extending fraymotifs to have effects other than just damage/healing/buffing/debuffing.</a>"
l0=new K.a("6/29/17","So, combo sessions have been acting weird with YellowYards, but only SOMETIMES. Turns out it was SHIPPING GRIDS. The fix is the highly unintuitive 'Have the players drag the corpses with them to the new session, Vriska/Gamzee style'.  <Br><Br>Don't worry about it. Of COURSE shipping problems are fixed by bringing decapitated heads or whatever the fuck. I think we can all agree that SBURB makes perfect sense.<Br><Br>I also enabled <a href = 'index2.html?seed=111&VoidStuck=true'>Void players</a> to have a custom info phrase to describe which stat they have that is crazy high. (For example, SO STRONG, or SO FRIENDLY). If they are a class that has to EARN their power, the stat will be flipped (SO WEAK, or SO AGGRESSIVE).  It has been an interesting way to keep track of how the Void player will be growing over time.<br><br>Also, I've totally got the basic structure of fraymotif tests ready and have a solid plan for finishing them up. ")
if($.b)l0.b="Who is Shogun??? <div class ='strikethroughStuff'>So, combo sessions have been acting weird with YellowYards, but only SOMETIMES. Turns out it was SHIPPING GRIDS. The fix is the highly unintuitive 'Have the players drag the corpses with them to the new session, Vriska/Gamzee style'.  <Br><Br>Don't worry about it. Of COURSE shipping problems are fixed by bringing decapitated heads or whatever the fuck. I think we can all agree that SBURB makes perfect sense.<Br><Br>I also enabled <a href = 'index2.html?seed=111&VoidStuck=true'>Void players</a> to have a custom info phrase to describe which stat they have that is crazy high. (For example, SO STRONG, or SO FRIENDLY). If they are a class that has to EARN their power, the stat will be flipped (SO WEAK, or SO AGGRESSIVE).  It has been an interesting way to keep track of how the Void player will be growing over time.<br><br>Also, I've totally got the basic structure of fraymotif tests ready and have a solid plan for finishing them up. </a>"
l1=new K.a("6/28/17","So, ExperimentalBranch (which you're either on right now if you can see this, OR you are from the far flung future) has officially gone off the rails and has wildly divurged from Main. <Br><Br>Classpect stats have been completely redone to make future fanon classpects and fraymotifs easier. I haven't updated the help text on the character yet (and won't until classpects settle down) so, for now, they are totol lies.<br><br>Also, smiley quirks are a thing. Finally.")
if($.b)l1.b="Who is Shogun??? <div class ='strikethroughStuff'>So, ExperimentalBranch (which you're either on right now if you can see this, OR you are from the far flung future) has officially gone off the rails and has wildly divurged from Main. <Br><Br>Classpect stats have been completely redone to make future fanon classpects and fraymotifs easier. I haven't updated the help text on the character yet (and won't until classpects settle down) so, for now, they are totol lies.<br><br>Also, smiley quirks are a thing. Finally.</a>"
l2=new K.a("6/26/17","So I spent the past 36 hours implementing a <a href = 'land_of_rods_and_screens.html'>game</a> version of the land <a href = 'https://classpectanon.tumblr.com/post/162204711075/could-i-get-a-land-analysis-waste-or-maid-if'>classpectanon</a> wrote for me.  <Br><br> It sure does seem unlikely that the game has secrets, doesn't it?  I ESPECIALLY wouldn't expect for the game to unlock any easter eggs in SBURBSim.")
if($.b)l2.b="Who is Shogun??? <div class ='strikethroughStuff'>So I spent the past 36 hours implementing a <a href = 'land_of_rods_and_screens.html'>game</a> version of the land <a href = 'https://classpectanon.tumblr.com/post/162204711075/could-i-get-a-land-analysis-waste-or-maid-if'>classpectanon</a> wrote for me.  <Br><br> It sure does seem unlikely that the game has secrets, doesn't it?  I ESPECIALLY wouldn't expect for the game to unlock any easter eggs in SBURBSim.</a>"
l3=new K.a("6/24/17","Lol, was I gonna not do any more main updates for awhile??? That stopped being a thing that was true as soon as <a href = 'http:,//paradoxlands.tumblr.com/post/162149733351/main-dish-misalignment-stand-by-sometimes-while'>ParadoxLands</a> made me some p great fanart which reminded me that I STILL hadn't posted all the OTHER fan art I've been collecting.  So have fun with the new <a href='image_browser.html?fanArt=true'>viewer</a> :) :) :) <br><Br>(Hey, did you know I'm collecting fan art???) ")
if($.b)l3.b="Who is Shogun??? <div class ='strikethroughStuff'>Lol, was I gonna not do any more main updates for awhile??? That stopped being a thing that was true as soon as <a href = 'http:,//paradoxlands.tumblr.com/post/162149733351/main-dish-misalignment-stand-by-sometimes-while'>ParadoxLands</a> made me some p great fanart which reminded me that I STILL hadn't posted all the OTHER fan art I've been collecting.  So have fun with the new <a href='image_browser.html?fanArt=true'>viewer</a> :) :) :) <br><Br>(Hey, did you know I'm collecting fan art???) </a>"
l4=new K.a("6/23/17","While I'm doing invisible backend work on the sprite renderer, we have recieved 7 new hair styles! KR made sure the hair recieved from Popo-Merrygamz (and hair 64 from RemJoleea and hair 66 from Ancient ) worked with the rendering engine. That brings us up to 68 different hair styles! ")
if($.b)l4.b="Who is Shogun??? <div class ='strikethroughStuff'>While I'm doing invisible backend work on the sprite renderer, we have recieved 7 new hair styles! KR made sure the hair recieved from Popo-Merrygamz (and hair 64 from RemJoleea and hair 66 from Ancient ) worked with the rendering engine. That brings us up to 68 different hair styles! </a>"
l5=new K.a("6/22/17","Final Main Update for the next while (weeks? a month?) is out.  It includes the tournament, which you'll see links to in lower down newposts, and a link to in the 'fan' tab on the navbar.<br><Br>  (For those new folks here, Main branch only gets newsposts when it gets an update, so if I seem to go silent, why not check the newsposts over on experimental?)<br><Br>Experimental will start getting work for a new rendering engine (that will allow you to specify what sprite set your custom character uses, like PonyStuck or CarapaceStuck or whatever) and a completely redone claspecting (courtsey of the ideasWranglers, especially the newest one, wooMod who advocated the upgrade) system to emphasize class and aspect uniqueness.  BOTH things are going to require a lot of coding before even the experimental branch gets an update, so we'll see how things shake out. I'll try to do little things here and there so things don't stagnate as well.<br><br>Those two things will be the ground work for the NPC update (which will include NPC party members and Midnight Crew Shenanigans) and the fraymotif update, respectively.  So, big plans coming.")
if($.b)l5.b="Who is Shogun??? <div class ='strikethroughStuff'>Final Main Update for the next while (weeks? a month?) is out.  It includes the tournament, which you'll see links to in lower down newposts, and a link to in the 'fan' tab on the navbar.<br><Br>  (For those new folks here, Main branch only gets newsposts when it gets an update, so if I seem to go silent, why not check the newsposts over on experimental?)<br><Br>Experimental will start getting work for a new rendering engine (that will allow you to specify what sprite set your custom character uses, like PonyStuck or CarapaceStuck or whatever) and a completely redone claspecting (courtsey of the ideasWranglers, especially the newest one, wooMod who advocated the upgrade) system to emphasize class and aspect uniqueness.  BOTH things are going to require a lot of coding before even the experimental branch gets an update, so we'll see how things shake out. I'll try to do little things here and there so things don't stagnate as well.<br><br>Those two things will be the ground work for the NPC update (which will include NPC party members and Midnight Crew Shenanigans) and the fraymotif update, respectively.  So, big plans coming.</a>"
l6=new K.a("6/21/17","Been working on redoing the rendering engine to make extending it a thing. Plan on having stupid character customization options available some day, like just deciding what sprite set your OC is using.  (EggStuck, PonyStuck, CarapaceStuck, the possibilities are endless because they are still in the future).  <br><Br>I also made a small balance change for sessions with multiple Space/Time players.  Before, only the first Space players's frog mattered and the first Time Players got to make doomed time clones. This was obviously fucking stupid, and has been fixed.")
if($.b)l6.b="Who is Shogun??? <div class ='strikethroughStuff'>Been working on redoing the rendering engine to make extending it a thing. Plan on having stupid character customization options available some day, like just deciding what sprite set your OC is using.  (EggStuck, PonyStuck, CarapaceStuck, the possibilities are endless because they are still in the future).  <br><Br>I also made a small balance change for sessions with multiple Space/Time players.  Before, only the first Space players's frog mattered and the first Time Players got to make doomed time clones. This was obviously fucking stupid, and has been fixed.</a>"
l7=new K.a("6/20/17","So, sarcasticIrony totally made <a href = 'http:,//farragofiction.com/SBURBSim/index2.html?seed=105980060&b=KQYQzMBCBioTcrQIKMgFlAJmATksAIwAMwxEhAbEdcYWrMaU9sABwCsabAmkc6kKZiqYmwYTwSAOZoAoq0gB2MqUI46ZekNW6pCdWkIBXfgEUiISwCpWbZqRA57irvoJS2BEmQrUsFBAs+oyOOMgQ+sgAWvxkWACEREEaDgwATmhKAKr8ABqWRJC2wc5pTlCO8HIFTAAqZCrEXMS4kmWq9PoKFfi6hBBYmENaevCwIWQe1WTiTAAKo5pYlEA&s=DTCSCcHsDsE9gEqQDYFMAEAFZBDWBLaAc2ABcBXcaU1AYwAsBhHU6fABxGEdwGdf8vALZgocMviE5U5XgBVUvUvlpouzUr2AAJSOCjga+vVprUcq1HPqpwOdoNJcAYtPD5FwZ-nBL0AcXIccAATfBxoLRwwyHk9VGi9LgRUXGUYXnoOLQBBNilkLVpyUlI0ADNBJhY2ThB-VGhIWnwQ1B0LAGtCElocZHwicj4c8CkiVBCQjK4AEQTSemAAZXIVVvbo-Fj-dzqvHz9A4LCIrX8Txp7gIkvofyalFS4IGHgAIR8Q00pqOnp-JAQjZolxMHZoJ0tO8cN1iDcSrxYIEhJlIKggA'>SpriteStuck</a> and it is the best thing ever.<Br><Br>Bug fixes and balance and tournament are what's being worked on. <a href = 'tournament_arc.html'>Tournament</a>  is basically done besides clean up and trying to figure out why AB keeps letting scratches into the tourney (those things are OP).")
if($.b)l7.b="Who is Shogun??? <div class ='strikethroughStuff'>So, sarcasticIrony totally made <a href = 'http:,//farragofiction.com/SBURBSim/index2.html?seed=105980060&b=KQYQzMBCBioTcrQIKMgFlAJmATksAIwAMwxEhAbEdcYWrMaU9sABwCsabAmkc6kKZiqYmwYTwSAOZoAoq0gB2MqUI46ZekNW6pCdWkIBXfgEUiISwCpWbZqRA57irvoJS2BEmQrUsFBAs+oyOOMgQ+sgAWvxkWACEREEaDgwATmhKAKr8ABqWRJC2wc5pTlCO8HIFTAAqZCrEXMS4kmWq9PoKFfi6hBBYmENaevCwIWQe1WTiTAAKo5pYlEA&s=DTCSCcHsDsE9gEqQDYFMAEAFZBDWBLaAc2ABcBXcaU1AYwAsBhHU6fABxGEdwGdf8vALZgocMviE5U5XgBVUvUvlpouzUr2AAJSOCjga+vVprUcq1HPqpwOdoNJcAYtPD5FwZ-nBL0AcXIccAATfBxoLRwwyHk9VGi9LgRUXGUYXnoOLQBBNilkLVpyUlI0ADNBJhY2ThB-VGhIWnwQ1B0LAGtCElocZHwicj4c8CkiVBCQjK4AEQTSemAAZXIVVvbo-Fj-dzqvHz9A4LCIrX8Txp7gIkvofyalFS4IGHgAIR8Q00pqOnp-JAQjZolxMHZoJ0tO8cN1iDcSrxYIEhJlIKggA'>SpriteStuck</a> and it is the best thing ever.<Br><Br>Bug fixes and balance and tournament are what's being worked on. <a href = 'tournament_arc.html'>Tournament</a>  is basically done besides clean up and trying to figure out why AB keeps letting scratches into the tourney (those things are OP).</a>"
l8=new K.a("6/19/17","So, the tournament core is complete, which revealed that teams made all of one aspect are HELLA OP. A little bit of digging revealed they were all sharing (and completely owning) the same denizen.  <br><Br>This is clearly not gonna stand, so I completely redid the denizen system. Players each have their own denizen (with a random name themed either around their aspect, or around how much they suck/rock at the game.  Thanks goes to Discord for brainstorming names with me :) :) :)")
if($.b)l8.b="Who is Shogun??? <div class ='strikethroughStuff'>So, the tournament core is complete, which revealed that teams made all of one aspect are HELLA OP. A little bit of digging revealed they were all sharing (and completely owning) the same denizen.  <br><Br>This is clearly not gonna stand, so I completely redid the denizen system. Players each have their own denizen (with a random name themed either around their aspect, or around how much they suck/rock at the game.  Thanks goes to Discord for brainstorming names with me :) :) :)</a>"
l9=new K.a("6/18/17",":/ Tournament mode is taking a bit longer than anticipated, espcially as I valiently fought against server issues today.  <br><Br>BUT, fear not, I have a consolation prize for you guys: galleries of <a href = 'image_browser.html?hair=true'>hair</a> and <a href = 'image_browser.html?horns=true'>horns</a> now exist to make it easier to design your OCs.  We also have new horns courtsey of Popo-Merrygamz, horns 47-73. ")
if($.b)l9.b="Who is Shogun??? <div class ='strikethroughStuff'>:/ Tournament mode is taking a bit longer than anticipated, espcially as I valiently fought against server issues today.  <br><Br>BUT, fear not, I have a consolation prize for you guys: galleries of <a href = 'image_browser.html?hair=true'>hair</a> and <a href = 'image_browser.html?horns=true'>horns</a> now exist to make it easier to design your OCs.  We also have new horns courtsey of Popo-Merrygamz, horns 47-73. </a>"
m0=new K.a("6/16/17","The site navigation has overgone a major overhaul after a lot of the new folks let me know how confusing it was. Hopefully that's better. <Br><Br>I also got to learn that Math% of you guys have session crashes if you're loading a page when I'm doing a deploy. Not sure what's up with that, but I'm brainstorming solutions.  In the mean time, if you get a crash right as a page loads, try holding shift and clicking refresh to clear the cache just for SBURBSim.  That should clear it up.<Br><Br>Oh yeah, and KR is getting some art help from the fans, including the new ideasWrangler: <a href = 'http:,//popo-merrygamz.tumblr.com/'>Popo-Merrygamz:</a>. Expect new and exciting hair and horns and (eventually) classes.")
if($.b)m0.b="Who is Shogun??? <div class ='strikethroughStuff'>The site navigation has overgone a major overhaul after a lot of the new folks let me know how confusing it was. Hopefully that's better. <Br><Br>I also got to learn that Math% of you guys have session crashes if you're loading a page when I'm doing a deploy. Not sure what's up with that, but I'm brainstorming solutions.  In the mean time, if you get a crash right as a page loads, try holding shift and clicking refresh to clear the cache just for SBURBSim.  That should clear it up.<Br><Br>Oh yeah, and KR is getting some art help from the fans, including the new ideasWrangler: <a href = 'http:,//popo-merrygamz.tumblr.com/'>Popo-Merrygamz:</a>. Expect new and exciting hair and horns and (eventually) classes.</a>"
m1=new K.a("6/15/17","The navbar has been updated to remove the newsposts, and instead there is now a link to the new <a href = 'http:,//farragofiction.com/SBURBSimE/character_viewer.html'> Fan OC Viewer.</a>.  You can view all sorts of OCs submitted by fans (just like YOU) as well as amazing OCs from other fandoms. And then you can <a href = 'index2.html?selfInsertOC=true&'> shove</a> 'em all into SBURB together and watch the shenanigans play out.  <br><Br>'")
if($.b)m1.b="Who is Shogun??? <div class ='strikethroughStuff'>The navbar has been updated to remove the newsposts, and instead there is now a link to the new <a href = 'http:,//farragofiction.com/SBURBSimE/character_viewer.html'> Fan OC Viewer.</a>.  You can view all sorts of OCs submitted by fans (just like YOU) as well as amazing OCs from other fandoms. And then you can <a href = 'index2.html?selfInsertOC=true&'> shove</a> 'em all into SBURB together and watch the shenanigans play out.  <br><Br>'</a>"
m2=new K.a("6/14/17","Dang, apparently custom interests were only working cosmetically, but were leaving echeladder runs as 'undefined' and screwing up certain kinds of dialogue. It's working again, tho, and OC data string didn't even have to be fucked with. <br><Br>BTW, in case it isn't clear, Main and Experimental branches will be in lock-step until I start working on new sim features (like fraymotifs). Things like the fan OC mode will be on both branches.")
if($.b)m2.b="Who is Shogun??? <div class ='strikethroughStuff'>Dang, apparently custom interests were only working cosmetically, but were leaving echeladder runs as 'undefined' and screwing up certain kinds of dialogue. It's working again, tho, and OC data string didn't even have to be fucked with. <br><Br>BTW, in case it isn't clear, Main and Experimental branches will be in lock-step until I start working on new sim features (like fraymotifs). Things like the fan OC mode will be on both branches.</a>"
m3=new K.a("6/13/17","Okay, totally on me, but it turned out custom Heiress trolls were NOT biologically compelled to murder each other. Don't worry: the <a href = 'index2.html?seed=121655061&b=KQBhvMCdgYQZmAISQF2ARhAQWAJiX0L0TAnNj2XAWWPC1A33D3HlnLLMuG0Noo4VJLiwAJUAFZpoXN0ggAinERDeAThlYxANky6AhF0UB2VXU5YAKgFpboQgq77BxQo24BRUF4DkJhRUGgAcFuqIGohYADKYAGIJtkA&s=DTDCHsDsGcAcEsBOBDAxvAptYAhcAPeSAcxBADFlIACAQUQBdgApcAayzOAFkMATeMgZFS9YQDN46ZABtqASUgMMMmfGIZIqDFwDKAV1gZEAC2PhOAJTTxoAWy7lw4BgCNZM4ABF9JDFGpuZGhlRBEuAHEUcUlhYEsVdXgoLgAFEwBPaClsUBNkFFRQ6lBEDCFkyGAgA'>natural order</a> has been restored and they are back to engaging in black flirting and murderous rampages as Hussie intended. <Br><Br>Also: totally working on a viewer for all the OCs people have sent me, as well as a mode to pit them against each other in death games for our amusement. *cough* I mean play SBURB for a chance to become gods.<br><Br>Also, ohmyfuckinggod, ppl, troll wings are supposed to be blood colored. Apparently a large chunk of browsers were rendering them as candy red and lime and ohmyfucking god. ,alsdkj. I had no clue. BLUUUUH. It's fixed, at the cost of the server having to resend you guys the images again, so you can't use your caches for your next session. Sorry. ")
if($.b)m3.b="Who is Shogun??? <div class ='strikethroughStuff'>Okay, totally on me, but it turned out custom Heiress trolls were NOT biologically compelled to murder each other. Don't worry: the <a href = 'index2.html?seed=121655061&b=KQBhvMCdgYQZmAISQF2ARhAQWAJiX0L0TAnNj2XAWWPC1A33D3HlnLLMuG0Noo4VJLiwAJUAFZpoXN0ggAinERDeAThlYxANky6AhF0UB2VXU5YAKgFpboQgq77BxQo24BRUF4DkJhRUGgAcFuqIGohYADKYAGIJtkA&s=DTDCHsDsGcAcEsBOBDAxvAptYAhcAPeSAcxBADFlIACAQUQBdgApcAayzOAFkMATeMgZFS9YQDN46ZABtqASUgMMMmfGIZIqDFwDKAV1gZEAC2PhOAJTTxoAWy7lw4BgCNZM4ABF9JDFGpuZGhlRBEuAHEUcUlhYEsVdXgoLgAFEwBPaClsUBNkFFRQ6lBEDCFkyGAgA'>natural order</a> has been restored and they are back to engaging in black flirting and murderous rampages as Hussie intended. <Br><Br>Also: totally working on a viewer for all the OCs people have sent me, as well as a mode to pit them against each other in death games for our amusement. *cough* I mean play SBURB for a chance to become gods.<br><Br>Also, ohmyfuckinggod, ppl, troll wings are supposed to be blood colored. Apparently a large chunk of browsers were rendering them as candy red and lime and ohmyfucking god. ,alsdkj. I had no clue. BLUUUUH. It's fixed, at the cost of the server having to resend you guys the images again, so you can't use your caches for your next session. Sorry. </a>"
m4=new K.a("6/12/17","<h1>Holy Shit 3.0!!!</h1><br><Br> For serious, guys. I'll fix bugs as they crop up, but right now Main and Experimental are the same damn thing. Good job, us.<br><Br> <a href ='https:,//www.reddit.com/r/homestuck/comments/6gs16h/sburbsim_30/'>Official Reddit Thread</a><Br><Br><a href = 'https://jadedresearcher.tumblr.com/post/161733787019/30'> Official Tumblr Post</a><br><br>And I totally shoved my GlitchFaq onto <a href = 'http:,//archiveofourown.org/works/11179110'>Archive of Our Own</a>")
if($.b)m4.b="Who is Shogun??? <div class ='strikethroughStuff'><h1>Holy Shit 3.0!!!</h1><br><Br> For serious, guys. I'll fix bugs as they crop up, but right now Main and Experimental are the same damn thing. Good job, us.<br><Br> <a href ='https:,//www.reddit.com/r/homestuck/comments/6gs16h/sburbsim_30/'>Official Reddit Thread</a><Br><Br><a href = 'https://jadedresearcher.tumblr.com/post/161733787019/30'> Official Tumblr Post</a><br><br>And I totally shoved my GlitchFaq onto <a href = 'http:,//archiveofourown.org/works/11179110'>Archive of Our Own</a></a>"
m5=new K.a("6/11/17","Gearing up for 3.0. Only bug fixes and testing remain. Just imported some of manicInsomniac's dialogue for the QuadrantDialogue bullshit, and also you can destroy players (you monster). And holy shit, now you can even create new ones! You can even have sessions with more than 12 players!!!   <br><br>Some minor bug fixes are out as well (Derse players can exist in replay session again) and I'm working on fixing a few bugs still, too (Heart players will hopefully stop crashing combo sessions that Yellow Yard soon).")
if($.b)m5.b="Who is Shogun??? <div class ='strikethroughStuff'>Gearing up for 3.0. Only bug fixes and testing remain. Just imported some of manicInsomniac's dialogue for the QuadrantDialogue bullshit, and also you can destroy players (you monster). And holy shit, now you can even create new ones! You can even have sessions with more than 12 players!!!   <br><br>Some minor bug fixes are out as well (Derse players can exist in replay session again) and I'm working on fixing a few bugs still, too (Heart players will hopefully stop crashing combo sessions that Yellow Yard soon).</a>"
m6=new K.a("6/10/17","Hel FUCKING yes, the ReplaySession character creator is basically done. What does this mean? Here, have a <a href = '?seed=4655190&b=KQZgwsCMCiwAwHZ4DZhhMAQgFjQJmAEEM44AtYPCK+AEUswCoBaFNDHfIkud4ATl40acenias4qdFlxgCxeLxn9IlahFEMWbGZ3nclffgFZ15reJ1S++hT2O5hmsRN0c59oyozO62yWkPLkVSYzU-SzcbPU9DMJVUSNdrINkQhxUzZID3dINQ5QxTcxEUwNs4wuN+UpdcmOCCzOLMOrogA&s=DTAqAsFMAIEEFcAu4D2AnAQixwHPQJYB2A5sAFYCGAJpNQEqQDOklaAxlGiLkqmsTL0UAI2xNglPuiw4QefoODCxiCVPyZsPBYVLLR4ydK1zempSqMb+snScuG1xzXfkP9V5zZnb3Fzyd1EzdzRUDVYNc-ML0hIJdbGN0BCOsQ5I94yMTfRCA'>link</a>.  In addition to being the best possible doomed session, clicking on 'replay session' will let you check out the data tab so you can import a jadedResearcher or authorBot into your own sessions as well. I'm gonna have a special board on the Discord that will be just people's OC data strings, so we can all put each other into death games like Hussie intended. <Br><Br>Before the weekend is over, I also expect to have a true 'CharacterCreator' link that isn't tied to a specific session, and a mechanism for creating and destroying players (you monster). ")
if($.b)m6.b="Who is Shogun??? <div class ='strikethroughStuff'>Hel FUCKING yes, the ReplaySession character creator is basically done. What does this mean? Here, have a <a href = '?seed=4655190&b=KQZgwsCMCiwAwHZ4DZhhMAQgFjQJmAEEM44AtYPCK+AEUswCoBaFNDHfIkud4ATl40acenias4qdFlxgCxeLxn9IlahFEMWbGZ3nclffgFZ15reJ1S++hT2O5hmsRN0c59oyozO62yWkPLkVSYzU-SzcbPU9DMJVUSNdrINkQhxUzZID3dINQ5QxTcxEUwNs4wuN+UpdcmOCCzOLMOrogA&s=DTAqAsFMAIEEFcAu4D2AnAQixwHPQJYB2A5sAFYCGAJpNQEqQDOklaAxlGiLkqmsTL0UAI2xNglPuiw4QefoODCxiCVPyZsPBYVLLR4ydK1zempSqMb+snScuG1xzXfkP9V5zZnb3Fzyd1EzdzRUDVYNc-ML0hIJdbGN0BCOsQ5I94yMTfRCA'>link</a>.  In addition to being the best possible doomed session, clicking on 'replay session' will let you check out the data tab so you can import a jadedResearcher or authorBot into your own sessions as well. I'm gonna have a special board on the Discord that will be just people's OC data strings, so we can all put each other into death games like Hussie intended. <Br><Br>Before the weekend is over, I also expect to have a true 'CharacterCreator' link that isn't tied to a specific session, and a mechanism for creating and destroying players (you monster). </a>"
m7=new K.a("6/9/17","Hells yes. Character creator is looking pretty damn good and has lots of new features. I'll finish upgrading it this weekend. <br><br>Plus, the server is totes being hosted on a brand spanking new domain, so we're not bumming off my friend's generously donated purplefrog.com hosting anymore.<br><br>Basically, we are so close to 3.0 I can taste it. 6/12/17 is the goal here. It means fraymotifs will be a strictly post 3.0 thing, but they'll be worth it.")
if($.b)m7.b="Who is Shogun??? <div class ='strikethroughStuff'>Hells yes. Character creator is looking pretty damn good and has lots of new features. I'll finish upgrading it this weekend. <br><br>Plus, the server is totes being hosted on a brand spanking new domain, so we're not bumming off my friend's generously donated purplefrog.com hosting anymore.<br><br>Basically, we are so close to 3.0 I can taste it. 6/12/17 is the goal here. It means fraymotifs will be a strictly post 3.0 thing, but they'll be worth it.</a>"
m8=new K.a("6/8/17","HAH! Fuck pastJR, they clearly had no clue what they were talking about. A good nights sleep resulted in an even SMALLER url for the same damn session:  <a href = 'index2.html?seed=4655190&b=KQBhvMGFihmYAhATMA7DAjCAUsZALPkSACLBxYCioaoAbLAokVKgIIJgAK+MyMMhGFhYHcPCRoAlMGwBFOY0yMho9SFmTEADnZyQVAFSgdochuGYArEyT62wAJyYDAFSMm1kH6+37RbH4EZFULH2FrRDtEJxoFAzkScJEJVEQHZicxYHYibAA1OVRMVG9UnKczbTQARwN45TCK0UcdOm1sx3ZybHjXTFdyjQAjGI7UHXyQAE0jAApzFshWZhpHDIMAaVBrAEJzIA&s=DTCiBsDcFMGdgEIHsCe8TAIIKwVwC4AWSATgJYB2A5hsACqHQCG+0J9AarQk7NAEZNw4YACUmAB1oAJNkjjAACuCYpKVAASKyTCklqLcEidHzwAUkgDWCjMgAe64AEkKsXODO1RSfki8A6tBkVIT4GgAyZABm+E4YAMJIbhJkJEwAxmQK4lIYmCRx0WRZQhqurMIh0BQZ0MAAylk1dbRJ1k48fILC3tDgIWTJYr7+8EA'>You would see the link here to demonstrate but it doesn't have spaces or anything and escapes from the side right off the page which is so dumb. but it's smaller. Trust me.</a><br><Br>Also, blood color matters for trolls initial hp and power now. Eventually once fraymotifs are a thing, low bloods wil use the engine for their psychic power.")
if($.b)m8.b="Who is Shogun??? <div class ='strikethroughStuff'>HAH! Fuck pastJR, they clearly had no clue what they were talking about. A good nights sleep resulted in an even SMALLER url for the same damn session:  <a href = 'index2.html?seed=4655190&b=KQBhvMGFihmYAhATMA7DAjCAUsZALPkSACLBxYCioaoAbLAokVKgIIJgAK+MyMMhGFhYHcPCRoAlMGwBFOY0yMho9SFmTEADnZyQVAFSgdochuGYArEyT62wAJyYDAFSMm1kH6+37RbH4EZFULH2FrRDtEJxoFAzkScJEJVEQHZicxYHYibAA1OVRMVG9UnKczbTQARwN45TCK0UcdOm1sx3ZybHjXTFdyjQAjGI7UHXyQAE0jAApzFshWZhpHDIMAaVBrAEJzIA&s=DTCiBsDcFMGdgEIHsCe8TAIIKwVwC4AWSATgJYB2A5hsACqHQCG+0J9AarQk7NAEZNw4YACUmAB1oAJNkjjAACuCYpKVAASKyTCklqLcEidHzwAUkgDWCjMgAe64AEkKsXODO1RSfki8A6tBkVIT4GgAyZABm+E4YAMJIbhJkJEwAxmQK4lIYmCRx0WRZQhqurMIh0BQZ0MAAylk1dbRJ1k48fILC3tDgIWTJYr7+8EA'>You would see the link here to demonstrate but it doesn't have spaces or anything and escapes from the side right off the page which is so dumb. but it's smaller. Trust me.</a><br><Br>Also, blood color matters for trolls initial hp and power now. Eventually once fraymotifs are a thing, low bloods wil use the engine for their psychic power.</a>"
m9=new K.a("6/7/17","I am the l337est asshole on the planet and have gotten custom urls to be 70% smaller. Just look at this relatively tiny fucker: <a href = index2.html?seed=4655190&b=%00%C3%BF%00C%C3%B2%7C%10J%24%24%0D%00%00%00%06%C3%B4%C2%A0%10P%2C%2C%0D%00%00%00%C2%A0%C3%B7)%10Q%16%16%0D%00%00%00)%C3%B8A%10E*%08%0D%00%00%00%15%C3%BA%C2%91%10T**%0D%00%00%001%C3%BA%00%10C%23%26%0D%00%00%00%5B%C3%B9E%10Q%10%14%0D%00%00%00%C2%BA%C3%B9%C2%A4%10V%12%12%0D%00%00%00%C2%98%C3%B7q%10E%16%16%0D%00%00%00%C2%87%C3%B9%C2%AD%10E%11%11%0D%00%00%00b%C3%B7%C2%84%10Y*(%0D%00%00%00%04%C3%BE%C2%BA%10K%05!%0D&s=%2C%2CElves%2CBoys%2C%2C%2C%2CAB%2CPuns%2C%2C%2C%2CTheater%2CTV%2C%2C%2C%2CBaseball%2CRap%2C%2C%2C%2CHeroes%2CPlaying%20Piano%2C%2C%2C%2CPuppets%2CJokes%2C%2C%2C%2CBoxing%2CInsults%2C%2C%2C%2CRobots%2CWeight%20Lifting%2C%2C%2C%2CConspiracies%2CRap%2C%2C%2C%2CArtificial%20Intelligence%2CScience%2C%2C%2C%2CCooking%2CBaseball%2C%2C%2C%2CReligion%2CRobots%2C'>Why do long urls try to escape to the side??? It's tiny, I promise.</a>.<br><Br> You will note that fully half the fucking size is custom strings like interests, so don't expect me to add many more other than maybe chatHandle.  Attempting to compress strings that small only makes 'em bigger tho, so that's about as tiny as we're getting. I also laid the ground work for a bunch more ReplaySession features, some of which are accidentally floating around alrady on the page, all undocumented and shit. ")
if($.b)m9.b="Who is Shogun??? <div class ='strikethroughStuff'>I am the l337est asshole on the planet and have gotten custom urls to be 70% smaller. Just look at this relatively tiny fucker: <a href = index2.html?seed=4655190&b=%00%C3%BF%00C%C3%B2%7C%10J%24%24%0D%00%00%00%06%C3%B4%C2%A0%10P%2C%2C%0D%00%00%00%C2%A0%C3%B7)%10Q%16%16%0D%00%00%00)%C3%B8A%10E*%08%0D%00%00%00%15%C3%BA%C2%91%10T**%0D%00%00%001%C3%BA%00%10C%23%26%0D%00%00%00%5B%C3%B9E%10Q%10%14%0D%00%00%00%C2%BA%C3%B9%C2%A4%10V%12%12%0D%00%00%00%C2%98%C3%B7q%10E%16%16%0D%00%00%00%C2%87%C3%B9%C2%AD%10E%11%11%0D%00%00%00b%C3%B7%C2%84%10Y*(%0D%00%00%00%04%C3%BE%C2%BA%10K%05!%0D&s=%2C%2CElves%2CBoys%2C%2C%2C%2CAB%2CPuns%2C%2C%2C%2CTheater%2CTV%2C%2C%2C%2CBaseball%2CRap%2C%2C%2C%2CHeroes%2CPlaying%20Piano%2C%2C%2C%2CPuppets%2CJokes%2C%2C%2C%2CBoxing%2CInsults%2C%2C%2C%2CRobots%2CWeight%20Lifting%2C%2C%2C%2CConspiracies%2CRap%2C%2C%2C%2CArtificial%20Intelligence%2CScience%2C%2C%2C%2CCooking%2CBaseball%2C%2C%2C%2CReligion%2CRobots%2C'>Why do long urls try to escape to the side??? It's tiny, I promise.</a>.<br><Br> You will note that fully half the fucking size is custom strings like interests, so don't expect me to add many more other than maybe chatHandle.  Attempting to compress strings that small only makes 'em bigger tho, so that's about as tiny as we're getting. I also laid the ground work for a bunch more ReplaySession features, some of which are accidentally floating around alrady on the page, all undocumented and shit. </a>"
n0=new K.a("6/6/17","<a href = 'character_creator.html?seed=1234'>The Session Replayer</a> finally lets you specifiy interests, including custom 'write in' ones. <a href = 'index2.html?seed=21475351&players=NobwRAhgzgDgpgYwC5gFxgMowguYA0YCANtFAPoB2EAtnugLIQCWAJgWAI4CuzATgGs04AGYQAbgHs+zJHABy3GgCM4fNACYAvoQAWLdegCMAZg77+AYUnFpaMAGIADC9cdmUACp8bxNEj5uOEJlW0lWa1tDRwA2Ixc4jmI4ESQACWlKNCNCGQBzXXTM7MJmSjk+OCgkI0sIOTzpAE97T0RdShtJPJbS8rUqpA06hub7AHUZJDK8937K6qN7AEEAITmKwY17ADEISgACHeZkZkksnXBoeGR7BjL2QhIyKlp6MCY2Dh5+IVRRCTSWQKJSqQwAdh0YAs0VM5gMkTs6AcAFYACwaBBGAAc7i8PmIflQYmIUGCYFCknCiOiDhEIlcTiSKSKfCyqDRuWYBVZ7JyYDKm0WIzgjT4LXQbQQHS6PQ2A2qw3qorG6GWCAgrDgNBO8oWNRW6z6QqG9gA0p0AO7JVh5PCXSCwRAoRgPDjPKAUah0O4sR5cXiCYRgMRSKYglRqNBoqEw+xwvQIrq09GYnF47y+NAkskhMIRZP2OkMtyEZKpDJstAmfn5QqV9kmTkC+aDWrKsUSsBSmW2OXGhVDEWd1rtTp93otk1LNVGqeD7boAAKPjyfFoOsoswd12drWYPqepE9rx9jD930DfwBYeBikjhmxsYM8bMiasheRjJcGYJRICQR5lSBZREWaJGDEMQ-mWLINtGThcjycEcgh876u2oziqO0rjt0k6Cguw6qmAljcMQSDcJUeptoa1GKrs+wHMsfAoDuTq3K6lD+h6XpvL6XyED8Qb-CGgLhveYL2GYz78K+8IfqByKpliuKlPiWbEhApLkpS1Kfo49KMsyFbFKgEGIfWpnmWhbZEVh6CTLIMx0UOHbET2uH9jZiwrNwSC6ECW4uYuYBrGAWgALpAA'>Check it</a><br><br>InterestCategories affect echeladder rung names, chatHandles, quadrantDialogue, rap content and skill and (in rare cases) how much people like you.  Oh, and having interests in common with your quadrant mates makes for a more stable relationship.<br><br>I also tweaked various simulation things, managing to dial the murderMode and grimDark rates way back without fucking with win or survival rates too much. It's suprisingly hard to balance shit.<br><Br>Oh god, I can't stop laughing. You know how you should totally sanitize your database input and shit? Well, obvs I don't have a database, but I sure as fuck had a text entry box that gets rendered to a web page (i.e. the interests). You guys made such beautiful html injection attacks on SBURBSim, so glorious.  Players had interests that were just shitty embedded youtube videos, shout out to <a href ='images/misc/fanArt/x2combo.png'>artificialArtificer</a> for letting me know. Looks like imma hafta fix that shit. If for no reason other than to make people be able to trust custom urls to not fucking rick roll them. Such a shame. It was a beautiful cinnamon bun.")
if($.b)n0.b="Who is Shogun??? <div class ='strikethroughStuff'><a href = 'character_creator.html?seed=1234'>The Session Replayer</a> finally lets you specifiy interests, including custom 'write in' ones. <a href = 'index2.html?seed=21475351&players=NobwRAhgzgDgpgYwC5gFxgMowguYA0YCANtFAPoB2EAtnugLIQCWAJgWAI4CuzATgGs04AGYQAbgHs+zJHABy3GgCM4fNACYAvoQAWLdegCMAZg77+AYUnFpaMAGIADC9cdmUACp8bxNEj5uOEJlW0lWa1tDRwA2Ixc4jmI4ESQACWlKNCNCGQBzXXTM7MJmSjk+OCgkI0sIOTzpAE97T0RdShtJPJbS8rUqpA06hub7AHUZJDK8937K6qN7AEEAITmKwY17ADEISgACHeZkZkksnXBoeGR7BjL2QhIyKlp6MCY2Dh5+IVRRCTSWQKJSqQwAdh0YAs0VM5gMkTs6AcAFYACwaBBGAAc7i8PmIflQYmIUGCYFCknCiOiDhEIlcTiSKSKfCyqDRuWYBVZ7JyYDKm0WIzgjT4LXQbQQHS6PQ2A2qw3qorG6GWCAgrDgNBO8oWNRW6z6QqG9gA0p0AO7JVh5PCXSCwRAoRgPDjPKAUah0O4sR5cXiCYRgMRSKYglRqNBoqEw+xwvQIrq09GYnF47y+NAkskhMIRZP2OkMtyEZKpDJstAmfn5QqV9kmTkC+aDWrKsUSsBSmW2OXGhVDEWd1rtTp93otk1LNVGqeD7boAAKPjyfFoOsoswd12drWYPqepE9rx9jD930DfwBYeBikjhmxsYM8bMiasheRjJcGYJRICQR5lSBZREWaJGDEMQ-mWLINtGThcjycEcgh876u2oziqO0rjt0k6Cguw6qmAljcMQSDcJUeptoa1GKrs+wHMsfAoDuTq3K6lD+h6XpvL6XyED8Qb-CGgLhveYL2GYz78K+8IfqByKpliuKlPiWbEhApLkpS1Kfo49KMsyFbFKgEGIfWpnmWhbZEVh6CTLIMx0UOHbET2uH9jZiwrNwSC6ECW4uYuYBrGAWgALpAA'>Check it</a><br><br>InterestCategories affect echeladder rung names, chatHandles, quadrantDialogue, rap content and skill and (in rare cases) how much people like you.  Oh, and having interests in common with your quadrant mates makes for a more stable relationship.<br><br>I also tweaked various simulation things, managing to dial the murderMode and grimDark rates way back without fucking with win or survival rates too much. It's suprisingly hard to balance shit.<br><Br>Oh god, I can't stop laughing. You know how you should totally sanitize your database input and shit? Well, obvs I don't have a database, but I sure as fuck had a text entry box that gets rendered to a web page (i.e. the interests). You guys made such beautiful html injection attacks on SBURBSim, so glorious.  Players had interests that were just shitty embedded youtube videos, shout out to <a href ='images/misc/fanArt/x2combo.png'>artificialArtificer</a> for letting me know. Looks like imma hafta fix that shit. If for no reason other than to make people be able to trust custom urls to not fucking rick roll them. Such a shame. It was a beautiful cinnamon bun.</a>"
n1=new K.a("6/5/17","I have once again done battle with mine ancient enemy: lively as fuck corpses. Turns out they were totally flirting up their quadrant mates. Or at least responding to the flirtations. I'm willing to believe that the corpses would even console their living Moirails who were flipping their shit about their dead diamond buddy.  That's how wack shit was.  But never fear, I have this on lock and corpses are once again relegated to merely leveling the hell up and being asked for one-sided romantic advice. <span class='void'>Oh, and rage related death shrieks and void hiding. Whatever. That shit is random as fuck and it's the best feature/bug.</span>You're welcome.<Br><Br>And I have added a shit ton of easter egg stuff, related to how NepetaQuest was improved. It revealed that AB has been stealth flipping her shit about certain types of special sessions, though. All reporting fake bullshit.  So I had to calm her robotic ass down before I could even BEGIN testing my new shit.<> <br><br>I've done a lot of little but cool things today, too. Armless prototyping is totally a thing now (well, technically fingerless but whatevs). OC Generator no longer racist against humans. Small bug fixes. Working on several big things at the same time, including a way to make urls for ReplaySessions way shorter. And hosting solutions for the site itself.")
if($.b)n1.b="Who is Shogun??? <div class ='strikethroughStuff'>I have once again done battle with mine ancient enemy: lively as fuck corpses. Turns out they were totally flirting up their quadrant mates. Or at least responding to the flirtations. I'm willing to believe that the corpses would even console their living Moirails who were flipping their shit about their dead diamond buddy.  That's how wack shit was.  But never fear, I have this on lock and corpses are once again relegated to merely leveling the hell up and being asked for one-sided romantic advice. <span class='void'>Oh, and rage related death shrieks and void hiding. Whatever. That shit is random as fuck and it's the best feature/bug.</span>You're welcome.<Br><Br>And I have added a shit ton of easter egg stuff, related to how NepetaQuest was improved. It revealed that AB has been stealth flipping her shit about certain types of special sessions, though. All reporting fake bullshit.  So I had to calm her robotic ass down before I could even BEGIN testing my new shit.<> <br><br>I've done a lot of little but cool things today, too. Armless prototyping is totally a thing now (well, technically fingerless but whatevs). OC Generator no longer racist against humans. Small bug fixes. Working on several big things at the same time, including a way to make urls for ReplaySessions way shorter. And hosting solutions for the site itself.</a>"
n2=new K.a("6/4/17","Bow before me puny mortals, because I finally fucking finished the quadrantDialogue engine. Characters will talk about their interests and their relationships, and get a bonus to their relationship if they actually have interests in common.  Moirails will also try to stop their palemates from flipping their shit. The dialogue is guaranteed to be exactly the right level of shitty, though I may make it less repetitive in future deploys.<Br><Br>Speaking of deploys, people have been reporting bandwidth issues every time I do a deploy lately. My assumption is that when I do a deploy, it invalidates browser caches for everybody, so suddenly you are ALL trying to download art assets at once and it's slow as balls with as many people as there are. <br><Br>I am looking into getting my own hosting (instead of bumming off my friend's purplefrog site). This should give me more control over bandwidth and speed and all that good stuff. I'm likely to start up a Patreon or something at that point though, to try to offset server costs. SBURBSim'll always be free, etc. etc., don't worry about it. And any Patreon or equivalent will be vaguelly generic rather than being all 'pay me for somebody else's intellectual property' ")
if($.b)n2.b="Who is Shogun??? <div class ='strikethroughStuff'>Bow before me puny mortals, because I finally fucking finished the quadrantDialogue engine. Characters will talk about their interests and their relationships, and get a bonus to their relationship if they actually have interests in common.  Moirails will also try to stop their palemates from flipping their shit. The dialogue is guaranteed to be exactly the right level of shitty, though I may make it less repetitive in future deploys.<Br><Br>Speaking of deploys, people have been reporting bandwidth issues every time I do a deploy lately. My assumption is that when I do a deploy, it invalidates browser caches for everybody, so suddenly you are ALL trying to download art assets at once and it's slow as balls with as many people as there are. <br><Br>I am looking into getting my own hosting (instead of bumming off my friend's purplefrog site). This should give me more control over bandwidth and speed and all that good stuff. I'm likely to start up a Patreon or something at that point though, to try to offset server costs. SBURBSim'll always be free, etc. etc., don't worry about it. And any Patreon or equivalent will be vaguelly generic rather than being all 'pay me for somebody else's intellectual property' </a>"
n3=new K.a("6/2/17","quadrantDialogue is getting close to done, just a bunch of bullshit data entry.  <Br><Br>Dear sweet precious sweet sweet AuthorBot has a brand new chasis, alchemized courtesy of our resident Smith of Dreams, karmicRetribution.  They are both the best!<>c3<<br><Br>AB was pretty sick of just being my robo-doppelganger, so the new chasis reflects her actual role within the Sim:  Guiding Observers to interesting decisions/simulations, etc. ")
if($.b)n3.b="Who is Shogun??? <div class ='strikethroughStuff'>quadrantDialogue is getting close to done, just a bunch of bullshit data entry.  <Br><Br>Dear sweet precious sweet sweet AuthorBot has a brand new chasis, alchemized courtesy of our resident Smith of Dreams, karmicRetribution.  They are both the best!<>c3<<br><Br>AB was pretty sick of just being my robo-doppelganger, so the new chasis reflects her actual role within the Sim:  Guiding Observers to interesting decisions/simulations, etc. </a>"
n4=new K.a("6/1/17","12 days remaining to get into the [???] Hall of Fame, btw. <Br><Br>I'm still working on a bullshit dialogue engine, but it's getting close to the end. At this point it's just boring as fuck data entry. <br><Br> I ALSO decided to upgrade nepeta quest (holy shit, what could that be???) in a variety of ways. <br><Br>Also, posting a mini mini update to the Main Branch to try to encourage Google to stop bragging about crashing my damn sessions.")
if($.b)n4.b="Who is Shogun??? <div class ='strikethroughStuff'>12 days remaining to get into the [???] Hall of Fame, btw. <Br><Br>I'm still working on a bullshit dialogue engine, but it's getting close to the end. At this point it's just boring as fuck data entry. <br><Br> I ALSO decided to upgrade nepeta quest (holy shit, what could that be???) in a variety of ways. <br><Br>Also, posting a mini mini update to the Main Branch to try to encourage Google to stop bragging about crashing my damn sessions.</a>"
n5=new K.a("5/30/17","I've been working on a robust bullshit dialogue engine for players in quadrants with each other. It will be yet one more way Romance distracts from the Ultimate Reward AND will be a way for me to indulge in my sweet sweet love of AI conversations that ALMOST make sense. Yessss. <br><Br>Oh, and I finally decided to do something about the odd bug report that turns out to be a bullshit sequence of events like 'scratch the session, then let it combo, then do a yellow yard 3x in a row but i don't remember what i picked and then scratch the session again and it crashes.'  Crashes SHOULD theoretically print out whether each session was scratched, and what yellowYard choices were associated with it. I say 'should' because i deliberately caused errors as best as i could and saw shit play out right, but that doesn't mean it'll play nice with natural bugs.<div class='void'> And today was also the day I decided ABJ was a fucking sociopath.</div>")
if($.b)n5.b="Who is Shogun??? <div class ='strikethroughStuff'>I've been working on a robust bullshit dialogue engine for players in quadrants with each other. It will be yet one more way Romance distracts from the Ultimate Reward AND will be a way for me to indulge in my sweet sweet love of AI conversations that ALMOST make sense. Yessss. <br><Br>Oh, and I finally decided to do something about the odd bug report that turns out to be a bullshit sequence of events like 'scratch the session, then let it combo, then do a yellow yard 3x in a row but i don't remember what i picked and then scratch the session again and it crashes.'  Crashes SHOULD theoretically print out whether each session was scratched, and what yellowYard choices were associated with it. I say 'should' because i deliberately caused errors as best as i could and saw shit play out right, but that doesn't mean it'll play nice with natural bugs.<div class='void'> And today was also the day I decided ABJ was a fucking sociopath.</div></a>"
n6=new K.a("5/29/17","Character creator/SessionReplay has gotten some mild upgrades. People seem to be using it to generate avatars for themselves, so I added a way to render everyone as gods, dream selves or regular players, as well as adding grimDark aura and murder mode slashes.<br><br>  Since you can now view trolls as god tiers, I also added a way to choose their favorite number (which influences their quirk AND their god tier wings).")
if($.b)n6.b="Who is Shogun??? <div class ='strikethroughStuff'>Character creator/SessionReplay has gotten some mild upgrades. People seem to be using it to generate avatars for themselves, so I added a way to render everyone as gods, dream selves or regular players, as well as adding grimDark aura and murder mode slashes.<br><br>  Since you can now view trolls as god tiers, I also added a way to choose their favorite number (which influences their quirk AND their god tier wings).</a>"
n7=new K.a("5/28/17","This weekend was spent finally going through with my promise to upgrade AB and the Rare Session Finder. You can now filter sesions by class and aspect. <Br><Br> Check 'Knight' and 'Blood' to show only sessions with a Knight of Blood in them, for example, or select both 'Knight' and 'Seer' along with 'Blood' to see sessions with EITHER a Knight of Blood or a Seer of Blood. I'll post interesting stats on tumblr, once ABs done looking through a bunch of sessions. <br><Br>This is basically the begining of my massive 'vaguely try to balance shit' initiative, before fraymotifs are fully rolled out. ")
if($.b)n7.b="Who is Shogun??? <div class ='strikethroughStuff'>This weekend was spent finally going through with my promise to upgrade AB and the Rare Session Finder. You can now filter sesions by class and aspect. <Br><Br> Check 'Knight' and 'Blood' to show only sessions with a Knight of Blood in them, for example, or select both 'Knight' and 'Seer' along with 'Blood' to see sessions with EITHER a Knight of Blood or a Seer of Blood. I'll post interesting stats on tumblr, once ABs done looking through a bunch of sessions. <br><Br>This is basically the begining of my massive 'vaguely try to balance shit' initiative, before fraymotifs are fully rolled out. </a>"
n8=new K.a("5/26/17","Today has been a day of bug fixes, which are boring, and laying out the new <a href = 'test_fraymotif.html'>fraymotif mechanic</a>, which is awesome.<br><Br>Also, main and experimental branches are likely to seperate soon, as the trickle of bug reports dies down. Once they seperate, all bug fixes will be on Experimental only. Thems the breaks.")
if($.b)n8.b="Who is Shogun??? <div class ='strikethroughStuff'>Today has been a day of bug fixes, which are boring, and laying out the new <a href = 'test_fraymotif.html'>fraymotif mechanic</a>, which is awesome.<br><Br>Also, main and experimental branches are likely to seperate soon, as the trickle of bug reports dies down. Once they seperate, all bug fixes will be on Experimental only. Thems the breaks.</a>"
n9=new K.a("5/25/17","Newly started Kismesitudes have a random chance of kicking off a celebratory rap battle. This is definitely an integral feature to SBURBSim, I think we will all agree.<Br><BR>Also, seems like enough people are using the Experimental Branch insteada the main one that I'll post an official main release. Even though the Character Creator/Replay Session thing is only Mildly Fucking Alpha, I'm not gonna consider things to be '3.0' until it's outta alpha entirely and has all the features I want. (And fraymotifs are totally a thing). <Br><Br>  New features for Main include (but are not limited to) shiny new backgrounds and icons, an upgraded rendering engine that is hella fast. The Replay Engine (aka Character Creator) is only 'Mildly Fucking Alpha' instead of Severely. Lots of the repetitive phrases have been given more variation, thanks to the <a href = 'credits.html'> ideasWranglers</a>. Probably a lot more. Read these newsposts going back a month or so.<br><Br><a href = 'https://www.reddit.com/r/homestuck/comments/6d9e66/sburb_sim_299_main_branch_update/'>Official Reddit Post for people to post comments/bugs/feature requests etc.")
if($.b)n9.b="Who is Shogun??? <div class ='strikethroughStuff'>Newly started Kismesitudes have a random chance of kicking off a celebratory rap battle. This is definitely an integral feature to SBURBSim, I think we will all agree.<Br><BR>Also, seems like enough people are using the Experimental Branch insteada the main one that I'll post an official main release. Even though the Character Creator/Replay Session thing is only Mildly Fucking Alpha, I'm not gonna consider things to be '3.0' until it's outta alpha entirely and has all the features I want. (And fraymotifs are totally a thing). <Br><Br>  New features for Main include (but are not limited to) shiny new backgrounds and icons, an upgraded rendering engine that is hella fast. The Replay Engine (aka Character Creator) is only 'Mildly Fucking Alpha' instead of Severely. Lots of the repetitive phrases have been given more variation, thanks to the <a href = 'credits.html'> ideasWranglers</a>. Probably a lot more. Read these newsposts going back a month or so.<br><Br><a href = 'https://www.reddit.com/r/homestuck/comments/6d9e66/sburb_sim_299_main_branch_update/'>Official Reddit Post for people to post comments/bugs/feature requests etc.</a>"
o0=new K.a("5/24/17","AB's CorpseParty now lets you view stats on class and aspect within the AfterLife, which is gonna be a pretty useful feature as I strive to balance this patchwork pile of glitches and whims.  Speaking of, there's some minor bug fixes and tweaks (corpses aren't allowed to counter attack anymore, for example) and the Mildly Fucking Alpha character creator has a full color picker instead of a drop down with like, only a dozen colors in it.")
if($.b)o0.b="Who is Shogun??? <div class ='strikethroughStuff'>AB's CorpseParty now lets you view stats on class and aspect within the AfterLife, which is gonna be a pretty useful feature as I strive to balance this patchwork pile of glitches and whims.  Speaking of, there's some minor bug fixes and tweaks (corpses aren't allowed to counter attack anymore, for example) and the Mildly Fucking Alpha character creator has a full color picker instead of a drop down with like, only a dozen colors in it.</a>"
o1=new K.a("5/23/2017","Fuck, I LOVE it when the complexity of this simulation shows itself off. <Br><Br> I updated FreeWill events so that Time players are allowed to control themselves. But, the way freeWill works in the simulation, it turns out that pretty much only Bards and Princes of time are allowed to use it (everyone else doesn't have enough free will).  It pleases me so much that these 'Destroyer' classes just sort of naturally gravitate to places where they can makes effects with no real causes (I am flipping my shit because my future self told me to flip my shit because they were flipping their shit because they were told by a future self to....). Just. Fuck yes.<br><br>AAAND it turns out that the Character Creator is now ready to be 'Mildly Fucking Alpha'.  Created characters are sent over to index2.html, and the shareable URL for sessions with custom players in it includes the custom players as well.  Major supported features include scratches, combo sessions and yellow yards.  Players even re-generate their lands, chat handles and Echeladder rungs to suit whatever classpect you gave them. As time goes on, I'll add features to the character creator, and clean it up in general. Have fun :) :) :)")
if($.b)o1.b="Who is Shogun??? <div class ='strikethroughStuff'>Fuck, I LOVE it when the complexity of this simulation shows itself off. <Br><Br> I updated FreeWill events so that Time players are allowed to control themselves. But, the way freeWill works in the simulation, it turns out that pretty much only Bards and Princes of time are allowed to use it (everyone else doesn't have enough free will).  It pleases me so much that these 'Destroyer' classes just sort of naturally gravitate to places where they can makes effects with no real causes (I am flipping my shit because my future self told me to flip my shit because they were flipping their shit because they were told by a future self to....). Just. Fuck yes.<br><br>AAAND it turns out that the Character Creator is now ready to be 'Mildly Fucking Alpha'.  Created characters are sent over to index2.html, and the shareable URL for sessions with custom players in it includes the custom players as well.  Major supported features include scratches, combo sessions and yellow yards.  Players even re-generate their lands, chat handles and Echeladder rungs to suit whatever classpect you gave them. As time goes on, I'll add features to the character creator, and clean it up in general. Have fun :) :) :)</a>"
o2=new K.a("5/22/2017","I am THOROUGLY unimpressed with past JR right now. What the hell was I thinking REMOVING ELEMENTS FROM AN ARRAY THAT I WAS CURRENTLY TRANSVERSING???  BLUH!  On a related note, Ultimate Riddle bullshit frequency has gone down as a result, and players actually getting to fight their denizen has gone up, with a corresponding drop in survival rate. BLUH. <Br><Br>On ANOTHER related note, post denizen quests are now more than a single sentence, thanks to the tireless efforts of the <a href = 'credits.html'>ideasWranglers</a>.<br><br>And hey, lookee here, a NONrelated note! MurderModes are WAY rarer now, and have been refactored to be actually sane (unlike their players). That should make up for the survival drop from denizens being more of a thing. Shit, wait, no, that makes it a related note. What the fuck ever.")
if($.b)o2.b="Who is Shogun??? <div class ='strikethroughStuff'>I am THOROUGLY unimpressed with past JR right now. What the hell was I thinking REMOVING ELEMENTS FROM AN ARRAY THAT I WAS CURRENTLY TRANSVERSING???  BLUH!  On a related note, Ultimate Riddle bullshit frequency has gone down as a result, and players actually getting to fight their denizen has gone up, with a corresponding drop in survival rate. BLUH. <Br><Br>On ANOTHER related note, post denizen quests are now more than a single sentence, thanks to the tireless efforts of the <a href = 'credits.html'>ideasWranglers</a>.<br><br>And hey, lookee here, a NONrelated note! MurderModes are WAY rarer now, and have been refactored to be actually sane (unlike their players). That should make up for the survival drop from denizens being more of a thing. Shit, wait, no, that makes it a related note. What the fuck ever.</a>"
o3=new K.a("5/21/17","Turns out AB has been reporting absolute bullshit for combo sessions, because of her extreme fetish for scratching sessions. <Br><Br> Turns out she would take a session with a sick frog, SCRATCH IT, and then send the scratched players into the new session, if they'd fit. This is very obviously not how things ACTUALLY work out, and so she has been upgraded. <span class = 'void'>Or rather, she's had yet another set of scratching privlidges revoked</span>  Sorry to anybody thinking that looking for combo sessions was confusing.<br><Br>I managed to improve rendering speeds by as much as a third today.  There is only one big obvious improvement to make left, and then I'll probably clean things up, balance a bit and give the main branch an update before I start work on fraymotifs. <br><Br>Holy shit, that last obvious thing improved rendering time by a FUCK TON. Good thing I decided to do it instead of deciding things were working well enough. ")
if($.b)o3.b="Who is Shogun??? <div class ='strikethroughStuff'>Turns out AB has been reporting absolute bullshit for combo sessions, because of her extreme fetish for scratching sessions. <Br><Br> Turns out she would take a session with a sick frog, SCRATCH IT, and then send the scratched players into the new session, if they'd fit. This is very obviously not how things ACTUALLY work out, and so she has been upgraded. <span class = 'void'>Or rather, she's had yet another set of scratching privlidges revoked</span>  Sorry to anybody thinking that looking for combo sessions was confusing.<br><Br>I managed to improve rendering speeds by as much as a third today.  There is only one big obvious improvement to make left, and then I'll probably clean things up, balance a bit and give the main branch an update before I start work on fraymotifs. <br><Br>Holy shit, that last obvious thing improved rendering time by a FUCK TON. Good thing I decided to do it instead of deciding things were working well enough. </a>"
o4=new K.a("5/20/17","It's come to my attention that Observers have already been using the Extremely Fucking Alpha character creator to shove OCs into.  I figured I'd help 'em out a little bit by throwing a costmetic upgrade at the thing. You can now choose hair, hairColor, horns, species and bloodColor. Have fun.  As always, you access the Extremely Fucking Alpha character creator by clicking 'Replay Session' at the top bar of any session. ")
if($.b)o4.b="Who is Shogun??? <div class ='strikethroughStuff'>It's come to my attention that Observers have already been using the Extremely Fucking Alpha character creator to shove OCs into.  I figured I'd help 'em out a little bit by throwing a costmetic upgrade at the thing. You can now choose hair, hairColor, horns, species and bloodColor. Have fun.  As always, you access the Extremely Fucking Alpha character creator by clicking 'Replay Session' at the top bar of any session. </a>"
o5=new K.a("5/19/17","Void players have a rendering upgrade where they slowly fade from view as their power increases. Looks pretty dope.<Br><Br>And the Rage/Void upgrade has just dropped. Rage players get to do what Void players do, but visibly and Void players have some mysterious bullshit going on that MAYBE you'll get to see. I'd expect a strong enough Light player to be able to help out.")
if($.b)o5.b="Who is Shogun??? <div class ='strikethroughStuff'>Void players have a rendering upgrade where they slowly fade from view as their power increases. Looks pretty dope.<Br><Br>And the Rage/Void upgrade has just dropped. Rage players get to do what Void players do, but visibly and Void players have some mysterious bullshit going on that MAYBE you'll get to see. I'd expect a strong enough Light player to be able to help out.</a>"
o6=new K.a("5/18/17","Looks like the rendering engine is ready for live again, which means that the Experimental branch will see these newsposts. Fucking sweet.  I have reduced rendering times pretty dramatically, and will still bug and fuss and meddle to fruther reduce them.  I expect there to be some bugs, mostly of players rendering in a state they are not actually in.  If the Maid of Doom's Corpse looks like a person and not a corpse, we have problems.  Let me know. <Br><Br>  I did a lot of balance shit while also redoing the rendering engine, like severely nerfing luck for strifes (too many black kings one shot themselves because of a  lucky player)")
if($.b)o6.b="Who is Shogun??? <div class ='strikethroughStuff'>Looks like the rendering engine is ready for live again, which means that the Experimental branch will see these newsposts. Fucking sweet.  I have reduced rendering times pretty dramatically, and will still bug and fuss and meddle to fruther reduce them.  I expect there to be some bugs, mostly of players rendering in a state they are not actually in.  If the Maid of Doom's Corpse looks like a person and not a corpse, we have problems.  Let me know. <Br><Br>  I did a lot of balance shit while also redoing the rendering engine, like severely nerfing luck for strifes (too many black kings one shot themselves because of a  lucky player)</a>"
o7=new K.a("5/17/1/7","A side effect up upgrading the rendering engine is that I've finally getting around to standardizing the different ways in which player states can change. Before now HOW you reached god tier could effect exactly what stats you ended up with when you revived, which was never my intent.  Now that things are centralized, it's way easier to debug.  To celebrate, I gave god tier players a massive health boost when they first Ascend, as well.  <br><br>Also, enough of you guys have asked about a <a href = 'https:,//discord.gg/4czh3nB'>Discord Server</a> that I went ahead and spent an hour or so setting one up with aspiringWatcher. I expect people to use it to chat each other up about weird sessions, submit bug reports and feature requests and ideas in general.")
if($.b)o7.b="Who is Shogun??? <div class ='strikethroughStuff'>A side effect up upgrading the rendering engine is that I've finally getting around to standardizing the different ways in which player states can change. Before now HOW you reached god tier could effect exactly what stats you ended up with when you revived, which was never my intent.  Now that things are centralized, it's way easier to debug.  To celebrate, I gave god tier players a massive health boost when they first Ascend, as well.  <br><br>Also, enough of you guys have asked about a <a href = 'https:,//discord.gg/4czh3nB'>Discord Server</a> that I went ahead and spent an hour or so setting one up with aspiringWatcher. I expect people to use it to chat each other up about weird sessions, submit bug reports and feature requests and ideas in general.</a>"
o8=new K.a("5/16/17","It has come to my attention that certain stupidly long sessions are flirting with browser memory limits. <div class = 'void' > If sessions are flirting with memory limits, am I auspitizing between my session and browers memory limits?  Might not count. I'm DEFINITELY taking my sessions' side over the browsers' and I think you'e supposed to hate both your side leafs equally.   </div> And sessions have always rendered stupidly slow. So...I'm going to buckle down and give the rendering engine an upgrade. I have a solid idea for an improvement, but it's gonna take me awhile. So, expect me to disappear for a day or two (hopefully no more???) ")
if($.b)o8.b="Who is Shogun??? <div class ='strikethroughStuff'>It has come to my attention that certain stupidly long sessions are flirting with browser memory limits. <div class = 'void' > If sessions are flirting with memory limits, am I auspitizing between my session and browers memory limits?  Might not count. I'm DEFINITELY taking my sessions' side over the browsers' and I think you'e supposed to hate both your side leafs equally.   </div> And sessions have always rendered stupidly slow. So...I'm going to buckle down and give the rendering engine an upgrade. I have a solid idea for an improvement, but it's gonna take me awhile. So, expect me to disappear for a day or two (hopefully no more???) </a>"
o9=new K.a("5/15/17","So, in trying to explain to someone how karmicRetribution gives me art assets, I realized that they are sort of the middle leaf between me and good taste.  All semi-annoyed 'No. Stop that. Just...Here, let me do it FOR you' with my shitty shitty artistic sense. KR refuses to let me keep hurting good design.<font class = 'void' color='white'>You just know that JR c3< KR c3< Good Taste was meant to be because I was Explaining the Joke (tm) to them and half-jokingly sent a 'c3<' symbol and they responded back with that fancy ASCII clubs symbol. You know, &#x2663. I nearly died laughing. </font>  On a similar note, AB and ABJ have their own backgrounds on the Rare Session Finder and Rare Session Finder Junior. <Br><Br>Coding wise I've been upgrading the queen events, doing a shit ton of bug fixes and am midway through the Madness upgrade for Rage. ")
if($.b)o9.b="Who is Shogun??? <div class ='strikethroughStuff'>So, in trying to explain to someone how karmicRetribution gives me art assets, I realized that they are sort of the middle leaf between me and good taste.  All semi-annoyed 'No. Stop that. Just...Here, let me do it FOR you' with my shitty shitty artistic sense. KR refuses to let me keep hurting good design.<font class = 'void' color='white'>You just know that JR c3< KR c3< Good Taste was meant to be because I was Explaining the Joke (tm) to them and half-jokingly sent a 'c3<' symbol and they responded back with that fancy ASCII clubs symbol. You know, &#x2663. I nearly died laughing. </font>  On a similar note, AB and ABJ have their own backgrounds on the Rare Session Finder and Rare Session Finder Junior. <Br><Br>Coding wise I've been upgrading the queen events, doing a shit ton of bug fixes and am midway through the Madness upgrade for Rage. </a>"
p0=new K.a("5/14/17","Some of the more repetitive shit has been upgraded.  Writing snippets (see the <a href = 'credits.html'>Credits Page</a> ) have been added for things like dream quests, mayor quests and random bullshit sidequests.  Dream and side quests have also been modded to be more modular as well. Derse dreamers will find the HorrorTerrors a bit chattier, and Prospit dreamers will suddenly notice the contents of Skaia's clouds occasionally, as well.<br><br> I'm gonna do a bit more cosmetic updates, implement 'madness' kinda shit for Rage and then maybe...work on fraymotifs? ABs upgraded enough for work on them, I think, and I can finish upgrading her once fraymotifs start to be a thing. <br><br>Oh yeah, and Doom players are now powered by their own deaths as well.  Their bad luck tends to be wiped out with death, and they get stronger. You know...assuming they revive. Players they revive have similar benefits. Their ghosts should be pretty strong, too. Narratively, it's cause they ALREADY met their Doom, right?")
if($.b)p0.b="Who is Shogun??? <div class ='strikethroughStuff'>Some of the more repetitive shit has been upgraded.  Writing snippets (see the <a href = 'credits.html'>Credits Page</a> ) have been added for things like dream quests, mayor quests and random bullshit sidequests.  Dream and side quests have also been modded to be more modular as well. Derse dreamers will find the HorrorTerrors a bit chattier, and Prospit dreamers will suddenly notice the contents of Skaia's clouds occasionally, as well.<br><br> I'm gonna do a bit more cosmetic updates, implement 'madness' kinda shit for Rage and then maybe...work on fraymotifs? ABs upgraded enough for work on them, I think, and I can finish upgrading her once fraymotifs start to be a thing. <br><br>Oh yeah, and Doom players are now powered by their own deaths as well.  Their bad luck tends to be wiped out with death, and they get stronger. You know...assuming they revive. Players they revive have similar benefits. Their ghosts should be pretty strong, too. Narratively, it's cause they ALREADY met their Doom, right?</a>"
p1=new K.a("5/13/17","Sprites can join their players for Denizen Minion and Jack fights, and seem to raise overall surival rates by a solid amount. A BUNCH of minor fixes have been ran through, including a slightly better GodTier judgement system (you can no longer, for example, die from a regular goddamned enemy and have it be judged 'Heroic'. And should a denizen manage to kill a GrimDark GodTier, it'll be judged as 'Just'. Stuff like that. ).  <br><Br>A <a href = 'credits.html'> Credits</a> page has been added to reference everybody who has helped out, from submitting bug reports all the way to brainstorming ideas with me.  <br><br>Oh! AND I implemented 3/4 of the mechanisms to prevents fights from taking too long, including (but not limited to) a mechanism by which players and doomed time clones can show up mid fight to help out.  Look at all that fucking coding I got done. <Br><Br>Now, I just gotta go back to finishing upgrading AB and...maybe...maybe I can finally implement fraymotifs???  And then, that'll be the entireity of the new battle system, so I can give everything a 'final' balancing, and focus on the character creator. BTW: early conclusions from AB's Corpse Party: The Sprite Prototypings are HELLA OP and make the Jack/Queen/King fights way too deadly. Hopefully the fraymotifs will counteract that. In the meantime I've nerfed the value of the worst prototypings.")
if($.b)p1.b="Who is Shogun??? <div class ='strikethroughStuff'>Sprites can join their players for Denizen Minion and Jack fights, and seem to raise overall surival rates by a solid amount. A BUNCH of minor fixes have been ran through, including a slightly better GodTier judgement system (you can no longer, for example, die from a regular goddamned enemy and have it be judged 'Heroic'. And should a denizen manage to kill a GrimDark GodTier, it'll be judged as 'Just'. Stuff like that. ).  <br><Br>A <a href = 'credits.html'> Credits</a> page has been added to reference everybody who has helped out, from submitting bug reports all the way to brainstorming ideas with me.  <br><br>Oh! AND I implemented 3/4 of the mechanisms to prevents fights from taking too long, including (but not limited to) a mechanism by which players and doomed time clones can show up mid fight to help out.  Look at all that fucking coding I got done. <Br><Br>Now, I just gotta go back to finishing upgrading AB and...maybe...maybe I can finally implement fraymotifs???  And then, that'll be the entireity of the new battle system, so I can give everything a 'final' balancing, and focus on the character creator. BTW: early conclusions from AB's Corpse Party: The Sprite Prototypings are HELLA OP and make the Jack/Queen/King fights way too deadly. Hopefully the fraymotifs will counteract that. In the meantime I've nerfed the value of the worst prototypings.</a>"
p2=new K.a("5/12/17","Holy shit, yeah, gonna dial back the passive classpect effects down a bit. AB's new features are showing some bullshit things happening.  <br><br> I also decided that 'rocks fall, everybody dies' if the post-reckoning boss fights go on for too long, especially after an Heir of Doom/Thief of Life duo took advanatage of the afterlife for a 10k turn fight extravaganza. <a href = 'https:,//jadedresearcher.tumblr.com/post/160588958869/i-officially-hate-the-heir-of-doomthief-of-life'> Read More On Tumblr</a><br><Br>  The newspost page also has amazing new KR provided backgrounds as well, and they are super amazing. If you can't tell (or if you're in the future where they are something else) my side is bits of scrambled code from my YellowYard stuff, and the AuthorBot's side is bits of scrambled code from the Rare Session Finder. And on the main page it's a combo of my green code and KR's dream stuff.")
if($.b)p2.b="Who is Shogun??? <div class ='strikethroughStuff'>Holy shit, yeah, gonna dial back the passive classpect effects down a bit. AB's new features are showing some bullshit things happening.  <br><br> I also decided that 'rocks fall, everybody dies' if the post-reckoning boss fights go on for too long, especially after an Heir of Doom/Thief of Life duo took advanatage of the afterlife for a 10k turn fight extravaganza. <a href = 'https:,//jadedresearcher.tumblr.com/post/160588958869/i-officially-hate-the-heir-of-doomthief-of-life'> Read More On Tumblr</a><br><Br>  The newspost page also has amazing new KR provided backgrounds as well, and they are super amazing. If you can't tell (or if you're in the future where they are something else) my side is bits of scrambled code from my YellowYard stuff, and the AuthorBot's side is bits of scrambled code from the Rare Session Finder. And on the main page it's a combo of my green code and KR's dream stuff.</a>"
p3=new K.a("5/12/17","In addition to minor bug fixes and getting the CorpseParty set up, I am prettifying the site up after KR gave me some new assets/counsel on how to use 'em.")
if($.b)p3.b="Who is Shogun??? <div class ='strikethroughStuff'>In addition to minor bug fixes and getting the CorpseParty set up, I am prettifying the site up after KR gave me some new assets/counsel on how to use 'em.</a>"
p4=new K.a("5/10/17","Before I can (finally) work on fraymotifs, I'm buckling down and working on balance. Things LOOK balanced from my 'hardly ever looks at ACTUAL sessions' Authorial position, and AB assures that me that sessions in GENERAL are going smoothly...but, I've had some complaints about how things go from specific Observers. (<a href = 'http:,//www.smbc-comics.com/?id=2560'>See this SMBC comic for why that can be a thing I don't want to get caught doing</a>) <Br><Br> So, I'm gonna spend the next day or two giving the AuthorBot some MAJOR upgrades. First up will be 'CorpseParty' mode, where we can check out the cause of death and class/aspect of every ghost in all found afterlifes. Is something killing players way too much? Are certain classes or aspects getting the shaft when it comes to the dead kid pile (you know, besides time players. Sorry guys, but that is literally your super power. Time is dead kids.).  Next will be the ability for the AuthorBot to filter session results by classes and aspects. That way we can check out if certain types of players are way too OP (i'm looking at you, Light players) or dangerous (Rage players) and I can figure out how to tweak them.<Br><Br>If you're wondering what I worked on today. Well. Whoof want to know?  (Seriously, like, ~20 people on the planet so far have earned the right to see the fruits of today's labor. Guess more people better figure out what that [???] means, huh.) ")
if($.b)p4.b="Who is Shogun??? <div class ='strikethroughStuff'>Before I can (finally) work on fraymotifs, I'm buckling down and working on balance. Things LOOK balanced from my 'hardly ever looks at ACTUAL sessions' Authorial position, and AB assures that me that sessions in GENERAL are going smoothly...but, I've had some complaints about how things go from specific Observers. (<a href = 'http:,//www.smbc-comics.com/?id=2560'>See this SMBC comic for why that can be a thing I don't want to get caught doing</a>) <Br><Br> So, I'm gonna spend the next day or two giving the AuthorBot some MAJOR upgrades. First up will be 'CorpseParty' mode, where we can check out the cause of death and class/aspect of every ghost in all found afterlifes. Is something killing players way too much? Are certain classes or aspects getting the shaft when it comes to the dead kid pile (you know, besides time players. Sorry guys, but that is literally your super power. Time is dead kids.).  Next will be the ability for the AuthorBot to filter session results by classes and aspects. That way we can check out if certain types of players are way too OP (i'm looking at you, Light players) or dangerous (Rage players) and I can figure out how to tweak them.<Br><Br>If you're wondering what I worked on today. Well. Whoof want to know?  (Seriously, like, ~20 people on the planet so far have earned the right to see the fruits of today's labor. Guess more people better figure out what that [???] means, huh.) </a>"
p5=new K.a("5/9/17","I spent the past couple of days working on subtle shit that nevertheless broke everything so I couldn't do a deploy until I was done. Sprites are completely reworked, and give stat boosts (different for each sprite) to ring wearers. I'm preparing for them to help players out in the early game, and have the structure in place for Tier2 sprites. You can expect sprites to be more custom shit going forwards, too.  I also redid the 'flipping your shit engine', which hasn't been upgraded since v1.0. I probably did other stuff...oh yeah, fixed leveling....lots of little changes. I expect the experimental branch will be back to being wonky.  Fraymotifs will be a thing as soon as I'm done preparing sprites.")
if($.b)p5.b="Who is Shogun??? <div class ='strikethroughStuff'>I spent the past couple of days working on subtle shit that nevertheless broke everything so I couldn't do a deploy until I was done. Sprites are completely reworked, and give stat boosts (different for each sprite) to ring wearers. I'm preparing for them to help players out in the early game, and have the structure in place for Tier2 sprites. You can expect sprites to be more custom shit going forwards, too.  I also redid the 'flipping your shit engine', which hasn't been upgraded since v1.0. I probably did other stuff...oh yeah, fixed leveling....lots of little changes. I expect the experimental branch will be back to being wonky.  Fraymotifs will be a thing as soon as I'm done preparing sprites.</a>"
p6=new K.a("5/7/17","Okay, hopefully this'll be the last drop where the experimental and main branches are the same. In addition to bug fixes (how the hell were yellow yards so broken??? Apparently I managed to ONLY test them for sessions where they sucked so much they didn't defeat any denizens?) I actually remembered to finish the afterlife shenanigans I had been meaning to do. Knights and Pages of Life and Doom finally get to cash in their promises of aid (awesome ghost powers during a fight OR a free revive mid fight) in addition to Heir/Thief/Maid/Rogue ghost powered revives mid battle being a thing. <br><Br> The end result is we now have the LUXURY survival rate of over 70%. We haven't had that since I started all this refactoring bullshit. I wonder how bad that'll plummet once I start letting sprites super power the jack/queen/king?")
if($.b)p6.b="Who is Shogun??? <div class ='strikethroughStuff'>Okay, hopefully this'll be the last drop where the experimental and main branches are the same. In addition to bug fixes (how the hell were yellow yards so broken??? Apparently I managed to ONLY test them for sessions where they sucked so much they didn't defeat any denizens?) I actually remembered to finish the afterlife shenanigans I had been meaning to do. Knights and Pages of Life and Doom finally get to cash in their promises of aid (awesome ghost powers during a fight OR a free revive mid fight) in addition to Heir/Thief/Maid/Rogue ghost powered revives mid battle being a thing. <br><Br> The end result is we now have the LUXURY survival rate of over 70%. We haven't had that since I started all this refactoring bullshit. I wonder how bad that'll plummet once I start letting sprites super power the jack/queen/king?</a>"
p7=new K.a("5/6/17","Alright, the main site and the experimental site should be at the same point in time, at least for now.  For all you guys who have been following only the main branch, we now have stuff like a header with links to both branches,  Luck Events, Free Will Events, an actual fucking battle system...um...shit I know I did other stuff. Oh yeah, that huge fucking corruption mechanic. Good times. We ALSO have the extremely fucking alpha Replay mechanic (i.e. the character creator) which was the whole POINT of me vanishing into the experimental branch for a month. But after allowing class and aspect to be customized, I realized there wasn't a whole lot of DIFFERENCE between players, so I went on an epic quest to remedy that. Next on the list (for the experimental branch) is fraymotifs, overhauling the prototyping mechanic and ....probably allowing the YellowYard to undo deaths that happen in battle. ")
if($.b)p7.b="Who is Shogun??? <div class ='strikethroughStuff'>Alright, the main site and the experimental site should be at the same point in time, at least for now.  For all you guys who have been following only the main branch, we now have stuff like a header with links to both branches,  Luck Events, Free Will Events, an actual fucking battle system...um...shit I know I did other stuff. Oh yeah, that huge fucking corruption mechanic. Good times. We ALSO have the extremely fucking alpha Replay mechanic (i.e. the character creator) which was the whole POINT of me vanishing into the experimental branch for a month. But after allowing class and aspect to be customized, I realized there wasn't a whole lot of DIFFERENCE between players, so I went on an epic quest to remedy that. Next on the list (for the experimental branch) is fraymotifs, overhauling the prototyping mechanic and ....probably allowing the YellowYard to undo deaths that happen in battle. </a>"
p8=new K.a("5/5/17","Holy shit, would you look at that. I SAID I would do denizen fights next and then I DID denizen fights next! No distractions, no last minute 'great ideas'. It's a Mayo day miracle. <br><Br>So yeah. Next was gonna be fraymotifs, which I am super looking forward to, but I realized it's been about a month since the main site has had an update. So, I'm gonna try to stabilize things as much as I can and push a mini update out to the main site. Should be tomorrow sometime. I've added a link to the 'old' branch as well now, just in case stuff isn't quite as stable as I'd hoped. It'll be hella neat, in any case, to compare sessions across old, main and experimental. I pulled version numbers completely out of my ass, btw. We are 'somewhere before the fabeled 3.0 release'. ")
if($.b)p8.b="Who is Shogun??? <div class ='strikethroughStuff'>Holy shit, would you look at that. I SAID I would do denizen fights next and then I DID denizen fights next! No distractions, no last minute 'great ideas'. It's a Mayo day miracle. <br><Br>So yeah. Next was gonna be fraymotifs, which I am super looking forward to, but I realized it's been about a month since the main site has had an update. So, I'm gonna try to stabilize things as much as I can and push a mini update out to the main site. Should be tomorrow sometime. I've added a link to the 'old' branch as well now, just in case stuff isn't quite as stable as I'd hoped. It'll be hella neat, in any case, to compare sessions across old, main and experimental. I pulled version numbers completely out of my ass, btw. We are 'somewhere before the fabeled 3.0 release'. </a>"
p9=new K.a("5/3/17",":\\  Why was enabling absconding such a hard thing to do? It got so fiddly. Bluh.  Next up will be denizen fights and associated stuff. THEN, I can finally buckle down and get my fraymotif on.")
if($.b)p9.b="Who is Shogun??? <div class ='strikethroughStuff'>:\\  Why was enabling absconding such a hard thing to do? It got so fiddly. Bluh.  Next up will be denizen fights and associated stuff. THEN, I can finally buckle down and get my fraymotif on.</a>"
q0=new K.a("5/2/17"," Turns out if I make Jack too lucky, he finds a bullshit weapon WAY too frequently and then procedes to drop the overall survival rate to 27%, the rapscallion. Oh, hey, in other news I have the bare-bones new battle system ready. It's hella repetitive, for now, but I plan on having simple fraymotifs and special events (like reviving players or using ghost pacts or whatever). <br><Br> Finishing up the battle system (which includes having more landQuests) MIGHT be the last major feature I do before I buckle down and finish working on the character creator. There's plenty more claspect stuff I want to do, but what I do have is pretty solid in terms of showing off what changing a character DOES to the sim. <br><br>Also, it turns out YellowYards/GroundHogDays were hella broken, and I 100% blame the new afterlife system. Since it's transTimeLine, the ghosts from the first playthrough could interfere with the second playthrough. I've tidied up my time loops and now ghosts are banned from interacting with a session until it divurges from the timeline that killed them.  It mostly works, but I'm not gonna sit down and do major testing until everything stops being half-finished. <font class = 'void' color ='white'>Also, happy birthday to me.</font>")
if($.b)q0.b="Who is Shogun??? <div class ='strikethroughStuff'> Turns out if I make Jack too lucky, he finds a bullshit weapon WAY too frequently and then procedes to drop the overall survival rate to 27%, the rapscallion. Oh, hey, in other news I have the bare-bones new battle system ready. It's hella repetitive, for now, but I plan on having simple fraymotifs and special events (like reviving players or using ghost pacts or whatever). <br><Br> Finishing up the battle system (which includes having more landQuests) MIGHT be the last major feature I do before I buckle down and finish working on the character creator. There's plenty more claspect stuff I want to do, but what I do have is pretty solid in terms of showing off what changing a character DOES to the sim. <br><br>Also, it turns out YellowYards/GroundHogDays were hella broken, and I 100% blame the new afterlife system. Since it's transTimeLine, the ghosts from the first playthrough could interfere with the second playthrough. I've tidied up my time loops and now ghosts are banned from interacting with a session until it divurges from the timeline that killed them.  It mostly works, but I'm not gonna sit down and do major testing until everything stops being half-finished. <font class = 'void' color ='white'>Also, happy birthday to me.</font></a>"
q1=new K.a("5/1/17","After spending two straight days ripping apart the old 'battle' system and adding a new one, I'd hoped I'd be able to push an experimental build out tonight. No dice. It works (mostly) without crashing, sure, but it drops the players survival rate down to 27 goddamn percent and I'd feel like a dick letting that out into the wild. Hopefully once I add aspect powers the players will get better at the game. If not...guess I'm nerfing jack. ")
if($.b)q1.b="Who is Shogun??? <div class ='strikethroughStuff'>After spending two straight days ripping apart the old 'battle' system and adding a new one, I'd hoped I'd be able to push an experimental build out tonight. No dice. It works (mostly) without crashing, sure, but it drops the players survival rate down to 27 goddamn percent and I'd feel like a dick letting that out into the wild. Hopefully once I add aspect powers the players will get better at the game. If not...guess I'm nerfing jack. </a>"
q2=new K.a("4/29/17","Afterlife is mostly done.  The basic gist is that different classes of Life and Doom players can gain power, revive players, enable dream bubbles and store ghost power for boss fights(coming soon).  I decided to let Life OR Doom do it because ghosts are a source of 'life', but are also definitely 'doomed'. AND I wanted afterlife stuff to be more common than it was with just life players. Dream bubbles are mostly just bullshit, but they do allow ANY player to gain some ghost wisdom, not just players with a Life/Doom guide.  Ironically, adding all these ways to level up and revive has DECREASED overall player surival rate to just 63%. I imagine it's because it's letting the murderous assholes live long enough to REALLY cause problems. Once I'm done refactoring everything I'll have to sit down and just tweak shit 'till I get an overall rate of thigns that makes sense.'")
if($.b)q2.b="Who is Shogun??? <div class ='strikethroughStuff'>Afterlife is mostly done.  The basic gist is that different classes of Life and Doom players can gain power, revive players, enable dream bubbles and store ghost power for boss fights(coming soon).  I decided to let Life OR Doom do it because ghosts are a source of 'life', but are also definitely 'doomed'. AND I wanted afterlife stuff to be more common than it was with just life players. Dream bubbles are mostly just bullshit, but they do allow ANY player to gain some ghost wisdom, not just players with a Life/Doom guide.  Ironically, adding all these ways to level up and revive has DECREASED overall player surival rate to just 63%. I imagine it's because it's letting the murderous assholes live long enough to REALLY cause problems. Once I'm done refactoring everything I'll have to sit down and just tweak shit 'till I get an overall rate of thigns that makes sense.'</a>"
q3=new K.a("4/27/17","Why is past me so wise and forward thinking? PastJR was all 'holy shit no way am I going to let the AuthorBot play around in scratched sessions'.  CurrentJR was all 'derp, it sounds like a good idea! how ELSE will I debug my new half-implemented afterlife bullshit???'.  Guess who was right?  BLUH.  It took hours. Goddamned HOURS.  AB was wandering around aimlessly, scratching the same session multiple times, and other fuckery. For a while, if the players were all dead, she would apparently hoof it over to the Beat Mesa equivalent and scratch the damned session HERSELF just to break in her new features. Then she'd come back and report 'oh yeah, i totally found a scratched session and here's what happened', and I'd go over and find a pile of original player corpses and no scratched session. Fuck.  I THINK I have finally convinced her to just...let the players scratch it their own damn selves. I haven't seen her deviate from reality by too much in awhile. Bluh.  <br><Br> In other news, hey, I got distracted and decided to implement an entire godamned AFTERLIFE system instead of the next feature, which was going to be...*checks*...boss fights apparently. And also exile stuff. Meh,the afterlife will be cool, I promise.")
if($.b)q3.b="Who is Shogun??? <div class ='strikethroughStuff'>Why is past me so wise and forward thinking? PastJR was all 'holy shit no way am I going to let the AuthorBot play around in scratched sessions'.  CurrentJR was all 'derp, it sounds like a good idea! how ELSE will I debug my new half-implemented afterlife bullshit???'.  Guess who was right?  BLUH.  It took hours. Goddamned HOURS.  AB was wandering around aimlessly, scratching the same session multiple times, and other fuckery. For a while, if the players were all dead, she would apparently hoof it over to the Beat Mesa equivalent and scratch the damned session HERSELF just to break in her new features. Then she'd come back and report 'oh yeah, i totally found a scratched session and here's what happened', and I'd go over and find a pile of original player corpses and no scratched session. Fuck.  I THINK I have finally convinced her to just...let the players scratch it their own damn selves. I haven't seen her deviate from reality by too much in awhile. Bluh.  <br><Br> In other news, hey, I got distracted and decided to implement an entire godamned AFTERLIFE system instead of the next feature, which was going to be...*checks*...boss fights apparently. And also exile stuff. Meh,the afterlife will be cool, I promise.</a>"
q4=new K.a("4/26/17","Guess who has two thumbs and just realized that Heroic and Just deaths have basically never worked as intended. It was me. All along. I fooled you. So. Yeah, that's working right now. AB can also report back on any Just/Heroic deaths she sees. <Br><Br>Also, somebody on Tumblr asked if I could make a random character generator and I was all 'Oh yeah, I totally took away the link to the <a href = 'oc_generator.html'>OC Generator</a>'. So, that's a thing in the navbar, now. The OC Generator was my proof of concept for SBURB SIM 2.0, basically letting me see exactly how hard it was to render random characters. Word of warning, the quirks are WAY simpler in that thing than SBURB SIM.  Otherwise it would just be paragraphs upon paragraphs of quirks listed out.  Mostly subtle shit like 'do they use ing or in, wanna or want to', etc. etc. ")
if($.b)q4.b="Who is Shogun??? <div class ='strikethroughStuff'>Guess who has two thumbs and just realized that Heroic and Just deaths have basically never worked as intended. It was me. All along. I fooled you. So. Yeah, that's working right now. AB can also report back on any Just/Heroic deaths she sees. <Br><Br>Also, somebody on Tumblr asked if I could make a random character generator and I was all 'Oh yeah, I totally took away the link to the <a href = 'oc_generator.html'>OC Generator</a>'. So, that's a thing in the navbar, now. The OC Generator was my proof of concept for SBURB SIM 2.0, basically letting me see exactly how hard it was to render random characters. Word of warning, the quirks are WAY simpler in that thing than SBURB SIM.  Otherwise it would just be paragraphs upon paragraphs of quirks listed out.  Mostly subtle shit like 'do they use ing or in, wanna or want to', etc. etc. </a>"
q5=new K.a("4/25/17","Free Will is mostly a thing now. I might tweak it, or add some minor events, but I'm really happy with it as is.  KR even noticed how nicely it works with the new Corruption mechanic. GrimDark players may refuse to do their SBURB tasks, but now there are ways to FORCE THEM.  KR personally recomeneds the following session:  <a href = 'https:,//drive.google.com/open?id=0B-uS7ImZMoISRXV2b1BaZUcxVlk'>(saved into PDF format for posterity)</a> <br><br>Next on the docket is re-doing boss fights, as well as Exile influence for players with particularly low free will.  After that I might double down on making the character creator more than bare bones. Hell, I might get fancy and even let YellowYards work for the damn thing. And turn off my authorial stat graphs. Those things are a crime to good taste everywhere.")
if($.b)q5.b="Who is Shogun??? <div class ='strikethroughStuff'>Free Will is mostly a thing now. I might tweak it, or add some minor events, but I'm really happy with it as is.  KR even noticed how nicely it works with the new Corruption mechanic. GrimDark players may refuse to do their SBURB tasks, but now there are ways to FORCE THEM.  KR personally recomeneds the following session:  <a href = 'https:,//drive.google.com/open?id=0B-uS7ImZMoISRXV2b1BaZUcxVlk'>(saved into PDF format for posterity)</a> <br><br>Next on the docket is re-doing boss fights, as well as Exile influence for players with particularly low free will.  After that I might double down on making the character creator more than bare bones. Hell, I might get fancy and even let YellowYards work for the damn thing. And turn off my authorial stat graphs. Those things are a crime to good taste everywhere.</a>"
q6=new K.a("4/24/17","Still working on free will events in the Experimental Branch. Players can manipulate others to kill each other (either through guile or game powers). If a player is marked as a claspect that 'knows about SBURB' they can also force (through nagging or game powers) the ectobiologist or space player to do their goddamned jobs and not doom everyone. Characters being controlled can also escape from the control (usally with the death of their controller, but they can just will power out of it, too). <Br><Br> In case it wasn't clear, all these events are using the freeWill mechanic that Mind and Time players influence (mind players mostly increase it, time players mostly decrease it).  I'm still working on further events (like choosing to suicide via god tier).  After that, I will do the opposite and make events specifically about LOW willpower (such as doing whatever your exile tells you to do. Oh, and Exiles will totally be a thing). So, lotsa changes coming up.")
if($.b)q6.b="Who is Shogun??? <div class ='strikethroughStuff'>Still working on free will events in the Experimental Branch. Players can manipulate others to kill each other (either through guile or game powers). If a player is marked as a claspect that 'knows about SBURB' they can also force (through nagging or game powers) the ectobiologist or space player to do their goddamned jobs and not doom everyone. Characters being controlled can also escape from the control (usally with the death of their controller, but they can just will power out of it, too). <Br><Br> In case it wasn't clear, all these events are using the freeWill mechanic that Mind and Time players influence (mind players mostly increase it, time players mostly decrease it).  I'm still working on further events (like choosing to suicide via god tier).  After that, I will do the opposite and make events specifically about LOW willpower (such as doing whatever your exile tells you to do. Oh, and Exiles will totally be a thing). So, lotsa changes coming up.</a>"
q7=new K.a("4/22/17","Redead-ITA ITA inspired me to help AB not get stuck in crashed sessions.  In retrospect, it was kind of a dick move of me just leaving her to her own devices if she gets lost.  Now she's able to come back and report on the bug.  Sessions themselves have custom text if they crash, instead of just...stopping.  I also gave GrimDark players an actual point in the session, they can now work to try to CAUSE a crash like a bunch of assholes. Don't they know how hard it is to KEEP this glitchy piece of shit from crashing?<br><br>  Still chugging along doing free will scenes, btw. They are much more work than luck, because they are ALL about choices and alternatives, not just picking something randomly outta a list.")
if($.b)q7.b="Who is Shogun??? <div class ='strikethroughStuff'>Redead-ITA ITA inspired me to help AB not get stuck in crashed sessions.  In retrospect, it was kind of a dick move of me just leaving her to her own devices if she gets lost.  Now she's able to come back and report on the bug.  Sessions themselves have custom text if they crash, instead of just...stopping.  I also gave GrimDark players an actual point in the session, they can now work to try to CAUSE a crash like a bunch of assholes. Don't they know how hard it is to KEEP this glitchy piece of shit from crashing?<br><br>  Still chugging along doing free will scenes, btw. They are much more work than luck, because they are ALL about choices and alternatives, not just picking something randomly outta a list.</a>"
q8=new K.a("4/21/17","karmicRetribution convinced me to improve graphics in a variety of ways, including providing a header image for each page. It'll only show up on the <a href = ''>Main Page</a> (which is now a thing) of the site for the regular branch, but'll be every page for the Experimental Branch. Once they merge, they'll be the same. They'll have slightly different images, though. The main branch is the 'alpha' timeline, cause it's less of a buggy piece of shit.<Br><br>Actually sim related: I'm working on implementing FreeWill stuff (that stat mind and time players modify). It's not at the point where it's actually a thing in the sim yet, though I wonder if it will show up as much as Luck?  Bluh. I'll leave calibrations for when the whole refactor-fest is done.<br><br> I have stayed up way too late programming ways for various claspects to mind control people into murdering all their friends. I have probably fucked over my own dreams.")
if($.b)q8.b="Who is Shogun??? <div class ='strikethroughStuff'>karmicRetribution convinced me to improve graphics in a variety of ways, including providing a header image for each page. It'll only show up on the <a href = ''>Main Page</a> (which is now a thing) of the site for the regular branch, but'll be every page for the Experimental Branch. Once they merge, they'll be the same. They'll have slightly different images, though. The main branch is the 'alpha' timeline, cause it's less of a buggy piece of shit.<Br><br>Actually sim related: I'm working on implementing FreeWill stuff (that stat mind and time players modify). It's not at the point where it's actually a thing in the sim yet, though I wonder if it will show up as much as Luck?  Bluh. I'll leave calibrations for when the whole refactor-fest is done.<br><br> I have stayed up way too late programming ways for various claspects to mind control people into murdering all their friends. I have probably fucked over my own dreams.</a>"
q9=new K.a("4/20/17","Still heavily refactoring how claspects work, but made initial quadrants be a thing and platonic relationships more common.  Hope players also don't directly modify trigger level, but DO make players lesss likely to waste time flipping their shit.  <Br><Br>Lucky (and unlucky) events are now a thing. ")
if($.b)q9.b="Who is Shogun??? <div class ='strikethroughStuff'>Still heavily refactoring how claspects work, but made initial quadrants be a thing and platonic relationships more common.  Hope players also don't directly modify trigger level, but DO make players lesss likely to waste time flipping their shit.  <Br><Br>Lucky (and unlucky) events are now a thing. </a>"
r0=new K.a("4/18/17","I am HEAVILY refactoring the experimental branch. So, since I'm fuck deep in code, now is the best time to suggest features. I started a reddit thread for that purpose <a href = 'https:,//www.reddit.com/r/homestuck/comments/666hhu/sburb_sim_in_the_process_of_refactoring_want_to/'> here</a>.  Basically, anything I lay the foundation for NOW will be a million times easier LATER.  Obviously I won't do everything suggeseted (and am likely to not implement ANYTHING exactly as submitted, too).  But, if you wanna join the brainstorming efforts, you can head on over there.<br><br>One interesting idea that has already shaken out is a combo between keiyakins, and MoreEpicThanYou747 where I'm toying with having First Guardian shenenigans that can cause time paradoxes. ")
if($.b)r0.b="Who is Shogun??? <div class ='strikethroughStuff'>I am HEAVILY refactoring the experimental branch. So, since I'm fuck deep in code, now is the best time to suggest features. I started a reddit thread for that purpose <a href = 'https:,//www.reddit.com/r/homestuck/comments/666hhu/sburb_sim_in_the_process_of_refactoring_want_to/'> here</a>.  Basically, anything I lay the foundation for NOW will be a million times easier LATER.  Obviously I won't do everything suggeseted (and am likely to not implement ANYTHING exactly as submitted, too).  But, if you wanna join the brainstorming efforts, you can head on over there.<br><br>One interesting idea that has already shaken out is a combo between keiyakins, and MoreEpicThanYou747 where I'm toying with having First Guardian shenenigans that can cause time paradoxes. </a>"
r1=new K.a("4/16/17","Will avoid updating the main site (and instead update the <a href = 'http:,//purplefrog.com/~jenny/SburbStoryExperimental/index2.html'>experimental branch</a>) while I'm heavily refactoring the sim so that claspects matter more. Sessions are SEVERELY mutating as I do this, so heads up. Once I update the main branch all the links are gonna go to different sessions worse than usual.")
if($.b)r1.b="Who is Shogun??? <div class ='strikethroughStuff'>Will avoid updating the main site (and instead update the <a href = 'http:,//purplefrog.com/~jenny/SburbStoryExperimental/index2.html'>experimental branch</a>) while I'm heavily refactoring the sim so that claspects matter more. Sessions are SEVERELY mutating as I do this, so heads up. Once I update the main branch all the links are gonna go to different sessions worse than usual.</a>"
r2=new K.a("4/15/17","The shittiest rap engine in all of paradox space is now live. Players will occasionally try to stop themselves from going full on murder mode by having a rap battle.  If sick fires happen, they calm down somewhat, else they get their murder on.")
if($.b)r2.b="Who is Shogun??? <div class ='strikethroughStuff'>The shittiest rap engine in all of paradox space is now live. Players will occasionally try to stop themselves from going full on murder mode by having a rap battle.  If sick fires happen, they calm down somewhat, else they get their murder on.</a>"
r3=new K.a("4/14/17","AuthorBot has a new...sibling? Child? Whatever.  Hey! It's...<a href = 'rare_session_finder_junior.html'>AuthorBotJunior</a>!  Guaranteed to be super fast, she only looks at session initial conditions and reports back on them. She's like a Ninja/Scout...thing. While AuthorBot is like the Lewis and Clark of finding sessions. All making detailed notes and doing things right. <Br><Br> Right now you can only filter ABJ's results by number of players, but I do plan to upgrade her with additional filters eventually.<Br><Br> Also: Yes, I could abbreviate her ABJR, but that's just confusing cause it sounds like AuthorBotJadedResearcher. My initials are dumb.<br><Br>Edit: !!! ABJ and frozenLake just found what I am officially dubbing an 'Incestuous Mobius Multi-Session Reach Around '. Check my <a href ='https://jadedresearcher.tumblr.com/post/159574309099/incestuous-mobius-multi-session-reach-around'>Tumblr</a> for details, I guess. ")
if($.b)r3.b="Who is Shogun??? <div class ='strikethroughStuff'>AuthorBot has a new...sibling? Child? Whatever.  Hey! It's...<a href = 'rare_session_finder_junior.html'>AuthorBotJunior</a>!  Guaranteed to be super fast, she only looks at session initial conditions and reports back on them. She's like a Ninja/Scout...thing. While AuthorBot is like the Lewis and Clark of finding sessions. All making detailed notes and doing things right. <Br><Br> Right now you can only filter ABJ's results by number of players, but I do plan to upgrade her with additional filters eventually.<Br><Br> Also: Yes, I could abbreviate her ABJR, but that's just confusing cause it sounds like AuthorBotJadedResearcher. My initials are dumb.<br><Br>Edit: !!! ABJ and frozenLake just found what I am officially dubbing an 'Incestuous Mobius Multi-Session Reach Around '. Check my <a href ='https://jadedresearcher.tumblr.com/post/159574309099/incestuous-mobius-multi-session-reach-around'>Tumblr</a> for details, I guess. </a>"
r4=new K.a("4/13/17","Okay, like, on the one hand, I've been wanting to do the character creator for weeks now.  On the other hand, the opportunity arrises to make shitty AI rap battles be a thing for some murdermodes. I am only human. Also, four people have made it into the Hall of Fame for that new mysterious page. ALSO also, today is the day that I realized that AuthorBotJunior should totally be a thing.")
if($.b)r4.b="Who is Shogun??? <div class ='strikethroughStuff'>Okay, like, on the one hand, I've been wanting to do the character creator for weeks now.  On the other hand, the opportunity arrises to make shitty AI rap battles be a thing for some murdermodes. I am only human. Also, four people have made it into the Hall of Fame for that new mysterious page. ALSO also, today is the day that I realized that AuthorBotJunior should totally be a thing.</a>"
r5=new K.a("4/12/17","Although it would have been dope as shit to have the Character Creator ready for 4/13, that wasn't in the cards. Instead, what could that mysterious <a href = 'index_pw.html'> link</a> on the main page be?")
if($.b)r5.b="Who is Shogun??? <div class ='strikethroughStuff'>Although it would have been dope as shit to have the Character Creator ready for 4/13, that wasn't in the cards. Instead, what could that mysterious <a href = 'index_pw.html'> link</a> on the main page be?</a>"
r6=new K.a("4/11/17","DestroyerTerraria pointed out that GodTiering via QuestBed was so rare as to be unimplemented, so I increased the odds of a player GodTiering BEFORE somebody gets their Corpse mack on. I also let AuthorBot find sessions by questBed or sacrificialSlab to confirm the rarity of both events. Looks like ~20% of all sessions have at least one god tier in them? Maybe I should fiddle with destiny to increase those odds... Of course, I don't want to alter overall surivability. I wonder how much a god tier contributes to party survival rate?  Let's see, we dropped to a 70% survival rate when I increased the odds of QuestBed vs Sacrificial Slab... (that's from 85%)<br><br>Huh. Fun fact: I have WAY less power over this simulation than I thought. I can fiddle with godTierDestiny all I want, but ultimately it's Jack (or Murder Mode Players) who decide whether or not corpses get produced before the reckoning. Even giving 90% of players a godTierDestiny doesn't change survival or even the rate of god tiering very much. Bluh. All it does it increase the uselessness of 'They appear destined for greatness' messages. (Well, and, I mean, it increases the raw NUMBER of God Tiers, I'm sure, but I don't care about that. I wanted to decrease the number of sessions with no god tiers at all.) I'm gonna dial it back down to 50% destiny from 90%. And NOW you have a taste of why this simulation is so freaking hard to steer. So many moving parts.")
if($.b)r6.b="Who is Shogun??? <div class ='strikethroughStuff'>DestroyerTerraria pointed out that GodTiering via QuestBed was so rare as to be unimplemented, so I increased the odds of a player GodTiering BEFORE somebody gets their Corpse mack on. I also let AuthorBot find sessions by questBed or sacrificialSlab to confirm the rarity of both events. Looks like ~20% of all sessions have at least one god tier in them? Maybe I should fiddle with destiny to increase those odds... Of course, I don't want to alter overall surivability. I wonder how much a god tier contributes to party survival rate?  Let's see, we dropped to a 70% survival rate when I increased the odds of QuestBed vs Sacrificial Slab... (that's from 85%)<br><br>Huh. Fun fact: I have WAY less power over this simulation than I thought. I can fiddle with godTierDestiny all I want, but ultimately it's Jack (or Murder Mode Players) who decide whether or not corpses get produced before the reckoning. Even giving 90% of players a godTierDestiny doesn't change survival or even the rate of god tiering very much. Bluh. All it does it increase the uselessness of 'They appear destined for greatness' messages. (Well, and, I mean, it increases the raw NUMBER of God Tiers, I'm sure, but I don't care about that. I wanted to decrease the number of sessions with no god tiers at all.) I'm gonna dial it back down to 50% destiny from 90%. And NOW you have a taste of why this simulation is so freaking hard to steer. So many moving parts.</a>"
r7=new K.a("4/10/17","Bug fixes, including the easter egg sessions, and small new features, like sprites helping out during landquests.")
if($.b)r7.b="Who is Shogun??? <div class ='strikethroughStuff'>Bug fixes, including the easter egg sessions, and small new features, like sprites helping out during landquests.</a>"
r8=new K.a("4/5/17","With everything in my TODO list, why the hell is SHIPPING GRIDS and TRICKSTER MODE the stuff I am obsessing over?")
if($.b)r8.b="Who is Shogun??? <div class ='strikethroughStuff'>With everything in my TODO list, why the hell is SHIPPING GRIDS and TRICKSTER MODE the stuff I am obsessing over?</a>"
r9=new K.a("4/3/17","Pushed out a LOT of bug fixes after Reddit and Tumblr swarmed all over the official release, finding all sorts of weird shit.  And put a disclaimer before the GroundHog shit explaining that 'here there be dragons' and the weirder you make the session the more likely there is to be glitches. Also added a couple of new features, the ability to kill a player before they enter a session, and the ability to force a frog prototype (good idea props goes to frozenLake).  May as well make this glitch pile taller.")
if($.b)r9.b="Who is Shogun??? <div class ='strikethroughStuff'>Pushed out a LOT of bug fixes after Reddit and Tumblr swarmed all over the official release, finding all sorts of weird shit.  And put a disclaimer before the GroundHog shit explaining that 'here there be dragons' and the weirder you make the session the more likely there is to be glitches. Also added a couple of new features, the ability to kill a player before they enter a session, and the ability to force a frog prototype (good idea props goes to frozenLake).  May as well make this glitch pile taller.</a>"
s0=new K.a("4/2/17","The main site is officially being upgraded to 2.1.  Features include, but are not limited to, interactive time shenanigans in the form of the Ground Hog work. Lots of bug fixes, too. New art assets. The works. A good session to check out is: <a href = 'index2.html?seed=221777'> this one</a>. ")
if($.b)s0.b="Who is Shogun??? <div class ='strikethroughStuff'>The main site is officially being upgraded to 2.1.  Features include, but are not limited to, interactive time shenanigans in the form of the Ground Hog work. Lots of bug fixes, too. New art assets. The works. A good session to check out is: <a href = 'index2.html?seed=221777'> this one</a>. </a>"
s1=new K.a("4/1/17","GroundHog day is pretty stable now. Time shenanigans even work with combo sessions, and THAT produced some hilarious bugs. Pretty much the only feature left to implement before I declare this main site worthy is undoing your own attempts to undo things. THEN I can work on the real stuff. Like shipping grids. ")
if($.b)s1.b="Who is Shogun??? <div class ='strikethroughStuff'>GroundHog day is pretty stable now. Time shenanigans even work with combo sessions, and THAT produced some hilarious bugs. Pretty much the only feature left to implement before I declare this main site worthy is undoing your own attempts to undo things. THEN I can work on the real stuff. Like shipping grids. </a>"
s2=new K.a("3/31/17","Been working on getting the GroundHog release stable enough for the main site. Getting close.")
if($.b)s2.b="Who is Shogun??? <div class ='strikethroughStuff'>Been working on getting the GroundHog release stable enough for the main site. Getting close.</a>"
s3=new K.a("3/28/17","Working on redesigning the rare session finder to be even more useful. In the meantime it's going through growing pains and looks different.")
if($.b)s3.b="Who is Shogun??? <div class ='strikethroughStuff'>Working on redesigning the rare session finder to be even more useful. In the meantime it's going through growing pains and looks different.</a>"
s4=new K.a("3/27/17","Operation: Spider dance, aka Operation: Ground Hog's Day, aka Operation: I AM THE GREETIST is a go. Barely tested time shenanigans are now available on the experimental site. I produced my most spirited L337 SCRAMBLE yet, and hop up to the next GOD TIER, achieving the illustrious rank of PROGRAMMING PRAGMATIST. ")
if($.b)s4.b="Who is Shogun??? <div class ='strikethroughStuff'>Operation: Spider dance, aka Operation: Ground Hog's Day, aka Operation: I AM THE GREETIST is a go. Barely tested time shenanigans are now available on the experimental site. I produced my most spirited L337 SCRAMBLE yet, and hop up to the next GOD TIER, achieving the illustrious rank of PROGRAMMING PRAGMATIST. </a>"
s5=new K.a("3/27/17","I spent the weekend working on my secret new feature. You can read about it: <a href = 'https:,//jadedresearcher.tumblr.com/post/158869175164/i-have-never-laughed-so-hard-at-a-session-i-am-so'> here</a>. If you can't get to Tumblr or are impatient: Ground. Hog. Day.")
if($.b)s5.b="Who is Shogun??? <div class ='strikethroughStuff'>I spent the weekend working on my secret new feature. You can read about it: <a href = 'https:,//jadedresearcher.tumblr.com/post/158869175164/i-have-never-laughed-so-hard-at-a-session-i-am-so'> here</a>. If you can't get to Tumblr or are impatient: Ground. Hog. Day.</a>"
s6=new K.a("3/24/17","I'm working on a super secret type of scene at this point, and have vague foreshadowing  to it in sessions that it applies to.  I also helped karmicRetribution throw together a fancy background for the Art Newsposts on the site (I did the coding, not the art)")
if($.b)s6.b="Who is Shogun??? <div class ='strikethroughStuff'>I'm working on a super secret type of scene at this point, and have vague foreshadowing  to it in sessions that it applies to.  I also helped karmicRetribution throw together a fancy background for the Art Newsposts on the site (I did the coding, not the art)</a>"
s7=new K.a("3/23/17","I branched the site into <a href = 'http:,//purplefrog.com/~jenny/SburbStoryExperimental/newsposts.html'>Experimental</a> and <a href = 'http://purplefrog.com/~jenny/SburbStory/newsposts.html'>Regular</a> versions. This should hopefully keep me from messing with shareable URLs more than once a week. I'm also working with karmicRetribution to integrate with better hair designs, and get an artist newspost page up and running. ")
if($.b)s7.b="Who is Shogun??? <div class ='strikethroughStuff'>I branched the site into <a href = 'http:,//purplefrog.com/~jenny/SburbStoryExperimental/newsposts.html'>Experimental</a> and <a href = 'http://purplefrog.com/~jenny/SburbStory/newsposts.html'>Regular</a> versions. This should hopefully keep me from messing with shareable URLs more than once a week. I'm also working with karmicRetribution to integrate with better hair designs, and get an artist newspost page up and running. </a>"
s8=new K.a("3/22/17","I got some feedback that it wasn't clear that the players have the option to partner up with Jack (and can decide to betray him later, too).  I decided to add topic bubbles to dialogue to emphasize that it's not all the same stuff.  Sometimes it's about the game, sometimes relationships, sometimes Jack.  I also re-enabled the rainbow glow for God Tiers (long story).   ")
if($.b)s8.b="Who is Shogun??? <div class ='strikethroughStuff'>I got some feedback that it wasn't clear that the players have the option to partner up with Jack (and can decide to betray him later, too).  I decided to add topic bubbles to dialogue to emphasize that it's not all the same stuff.  Sometimes it's about the game, sometimes relationships, sometimes Jack.  I also re-enabled the rainbow glow for God Tiers (long story).   </a>"
s9=new K.a("3/22/17","Okay. So, newspost numero uno.  I figured I needed a better way to communicate to you guys, and the one centralized location is here, on the actual site itself. Any newspost before this is retroactively dated.<br><Br> And I absolutely could not help myself: I love the AuthorBot so much that I gave her a space to make her own newsposts.  But of course, she needs to be able to say her own shit, right? So I gave her a (admittedly pretty shitty) ai.  <br><Br>But her whole thing is finding rare sessions right? If she doesn't do that, she's not the SessionFinderAuthorBot, she's just some random newsbot or some shit. So I decided her AI would be able to comment on all the rad sessions she's finding... <br><Br>Okay, long story short, I added the ability for her to say something about each session she finds (on the session finder page as well as here) I went to so much trouble. All for a barely noticeable kind of joke on a page most people probably ignore? Yes.")
if($.b)s9.b="Who is Shogun??? <div class ='strikethroughStuff'>Okay. So, newspost numero uno.  I figured I needed a better way to communicate to you guys, and the one centralized location is here, on the actual site itself. Any newspost before this is retroactively dated.<br><Br> And I absolutely could not help myself: I love the AuthorBot so much that I gave her a space to make her own newsposts.  But of course, she needs to be able to say her own shit, right? So I gave her a (admittedly pretty shitty) ai.  <br><Br>But her whole thing is finding rare sessions right? If she doesn't do that, she's not the SessionFinderAuthorBot, she's just some random newsbot or some shit. So I decided her AI would be able to comment on all the rad sessions she's finding... <br><Br>Okay, long story short, I added the ability for her to say something about each session she finds (on the session finder page as well as here) I went to so much trouble. All for a barely noticeable kind of joke on a page most people probably ignore? Yes.</a>"
t0=new K.a("3/21/17","I spent a couple of days working on a major feature: combined sessions. If players have a sick frog, then the code checks their child session to see if the remaining living players can fit into it (max of 12 players in a session at a time). If so, they go on over.  Their child session is a real session that has it's own fate, and these alien players are disrupting that. When they join the session, it prints the ID out, so you could put that in a url to see how the sesion was supposed to go. Sometimes the alien players help, quite often they make things way worse. <Br><Br> These sessions are pretty rare, so I ALSO wrote the AuthorBot over there to look for rare sessions and report back.")
if($.b)t0.b="Who is Shogun??? <div class ='strikethroughStuff'>I spent a couple of days working on a major feature: combined sessions. If players have a sick frog, then the code checks their child session to see if the remaining living players can fit into it (max of 12 players in a session at a time). If so, they go on over.  Their child session is a real session that has it's own fate, and these alien players are disrupting that. When they join the session, it prints the ID out, so you could put that in a url to see how the sesion was supposed to go. Sometimes the alien players help, quite often they make things way worse. <Br><Br> These sessions are pretty rare, so I ALSO wrote the AuthorBot over there to look for rare sessions and report back.</a>"
t1=new K.a("3/20/17","Before this day I was mostly working on debugging and tweaking sessions. I enlisted you, the fans, to help me find rare sessions.")
if($.b)t1.b="Who is Shogun??? <div class ='strikethroughStuff'>Before this day I was mostly working on debugging and tweaking sessions. I enlisted you, the fans, to help me find rare sessions.</a>"
t2=[t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,g0,g1,g2,g3,g4,g5,g6,g7,g8,g9,h0,h1,h2,h3,h4,h5,h6,h7,h8,h9,i0,i1,i2,i3,i4,i5,i6,i7,i8,i9,j0,j1,j2,j3,j4,j5,j6,j7,j8,j9,k0,k1,k2,k3,k4,k5,k6,k7,k8,k9,l0,l1,l2,l3,l4,l5,l6,l7,l8,l9,m0,m1,m2,m3,m4,m5,m6,m7,m8,m9,n0,n1,n2,n3,n4,n5,n6,n7,n8,n9,o0,o1,o2,o3,o4,o5,o6,o7,o8,o9,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,q0,q1,q2,q3,q4,q5,q6,q7,q8,q9,r0,r1,r2,r3,r4,r5,r6,r7,r8,r9,s0,s1,s2,s3,s4,s5,s6,s7,s8,s9,t0,t1]
for(t3=0;t3<212;++t3){t4=t2[t3]
t=t4.a
t5="<div id = '"+t+"human'><hr> "+("<b>"+t+":</b> ")
t=t4.b
if(t==null)return t.E()
t5+=t+"</div>"
J.c8(document.querySelector("#newspostsMain"),"beforeend",t5,C.h,null)}},
ki:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
$.b=!1
t=new K.a("7/24/17","Hey, I keep forgetting to update this thing! Most of what I've been working on lately has gone towards adding fan classes. Head over to <a href='character_creator.html'>the character creator</a> if you want to check them out.")
s=$.b
if(s)t.b="Who is Shogun??? <div class ='strikethroughStuff'>Hey, I keep forgetting to update this thing! Most of what I've been working on lately has gone towards adding fan classes. Head over to <a href='character_creator.html'>the character creator</a> if you want to check them out.</a>"
r=new K.a("6/28/17","A big shoutout and thanks to everyone who contributed art for the <a href='land_of_rods_and_screens.html'>Land of Rods and Screens</a> There's a lot of very weird, fun, and downright silly stuff in there. It's crazy-awesome that our little project here has such an amazing community already!<br><Br>Speaking of which, I have a favor to ask. I need photo reference for what people in High School are wearing. (That's students age 14-18 for the non-Americans.) I'd love to see all walks of life, dressed up, dressed down, you name it. Turns out it's surprisingly hard to find examples of actual people rather than fashion models and TV stars. Faces aren't necessary, just clothes. You can send photos to karmicRetribution001@gmail.com or thru private message on our Discord. Please don't leave me to source all my clothing from Seventeen and Teen Wolf!")
if(s)r.b="Who is Shogun??? <div class ='strikethroughStuff'>A big shoutout and thanks to everyone who contributed art for the <a href='land_of_rods_and_screens.html'>Land of Rods and Screens</a> There's a lot of very weird, fun, and downright silly stuff in there. It's crazy-awesome that our little project here has such an amazing community already!<br><Br>Speaking of which, I have a favor to ask. I need photo reference for what people in High School are wearing. (That's students age 14-18 for the non-Americans.) I'd love to see all walks of life, dressed up, dressed down, you name it. Turns out it's surprisingly hard to find examples of actual people rather than fashion models and TV stars. Faces aren't necessary, just clothes. You can send photos to karmicRetribution001@gmail.com or thru private message on our Discord. Please don't leave me to source all my clothing from Seventeen and Teen Wolf!</a>"
q=new K.a("6/13/17","In honor of the best troll's birthday, I drew a little chibi of him. If you want to get your hands on the full-size inks, I've posted them as a backers-only post over on our new <a href = 'https://www.patreon.com/FarragoFiction'>Patreon</a>.  You will always be able to see my work here on Farrago Fiction/SBURBSim, but bonus content may get posted there first, or in a higher quality, as a thank-you for those who choose to be our patrons.<br><br><img src = 'images/misc/Karkat_Color.png'>")
if(s)q.b="Who is Shogun??? <div class ='strikethroughStuff'>In honor of the best troll's birthday, I drew a little chibi of him. If you want to get your hands on the full-size inks, I've posted them as a backers-only post over on our new <a href = 'https://www.patreon.com/FarragoFiction'>Patreon</a>.  You will always be able to see my work here on Farrago Fiction/SBURBSim, but bonus content may get posted there first, or in a higher quality, as a thank-you for those who choose to be our patrons.<br><br><img src = 'images/misc/Karkat_Color.png'></a>"
p=new K.a("6/08/17","If the AuthorBot gets her own class, then ABjr, should as well, right?  But I'd consider ABjr a Scout rather than a Guide, since she just goes out to find shit then wanders off without explaining anything. And occasionally lurks ominously in the bushes giggling at other people's misfortune. Or something like that. <br><Br><img src='images/authorbot_jr_scout.png'>")
if(s)p.b="Who is Shogun??? <div class ='strikethroughStuff'>If the AuthorBot gets her own class, then ABjr, should as well, right?  But I'd consider ABjr a Scout rather than a Guide, since she just goes out to find shit then wanders off without explaining anything. And occasionally lurks ominously in the bushes giggling at other people's misfortune. Or something like that. <br><Br><img src='images/authorbot_jr_scout.png'></a>"
o=new K.a("6/02/17","Sometimes I just make stuff because jR wants it. The AuthorBot has earned a more independent identity, so now we have an official SBURBSim god-tier outfit for the Guide class. Go check out her page if you want to see it. <br><Br>There's also a couple of new secret images, if you can find them!")
if(s)o.b="Who is Shogun??? <div class ='strikethroughStuff'>Sometimes I just make stuff because jR wants it. The AuthorBot has earned a more independent identity, so now we have an official SBURBSim god-tier outfit for the Guide class. Go check out her page if you want to see it. <br><Br>There's also a couple of new secret images, if you can find them!</a>"
n=new K.a("5/20/17","I look at a LOT of sessions. Not as many as JR or AB, but still. And a good amount of the time, I'm actually skimming for specific scenes, or just tying to gauge the overall tone of a session. I thought it would be nice to have some graphical indicators of what each scene is about, and break up the text a bit more. So I made a bazillion tiny icons for different types of scenes. Some of them are only ever going to show up in the rarest of sessions, some are omnipresent.<br><Br>A couple are even animated. :wonk:")
if(s)n.b="Who is Shogun??? <div class ='strikethroughStuff'>I look at a LOT of sessions. Not as many as JR or AB, but still. And a good amount of the time, I'm actually skimming for specific scenes, or just tying to gauge the overall tone of a session. I thought it would be nice to have some graphical indicators of what each scene is about, and break up the text a bit more. So I made a bazillion tiny icons for different types of scenes. Some of them are only ever going to show up in the rarest of sessions, some are omnipresent.<br><Br>A couple are even animated. :wonk:</a>"
m=new K.a("5/12/17","Booyah - Check this shit out! jR has helped me implement a major visual overhaul for the site. Nifty backgrounds for most pages should be in place. Readability should be improved, and an overall more polished look might even convince people we know what we're doing!")
if(s)m.b="Who is Shogun??? <div class ='strikethroughStuff'>Booyah - Check this shit out! jR has helped me implement a major visual overhaul for the site. Nifty backgrounds for most pages should be in place. Readability should be improved, and an overall more polished look might even convince people we know what we're doing!</a>"
l=new K.a("5/5/17","It just so happens that I have a fresh masterpiece for you, hot off the canvas and on to your computer where it will sizzle your eyeballs. Screwing with ghosts now comes with sweet special effects! Also, I am told that the main branch will soon have its header in place.<br><Br>PS: Dreambubbles and the afterlife are now a little less 'pediatrician's waiting room' and a little more 'unfathomable space outside of time.''")
if(s)l.b="Who is Shogun??? <div class ='strikethroughStuff'>It just so happens that I have a fresh masterpiece for you, hot off the canvas and on to your computer where it will sizzle your eyeballs. Screwing with ghosts now comes with sweet special effects! Also, I am told that the main branch will soon have its header in place.<br><Br>PS: Dreambubbles and the afterlife are now a little less 'pediatrician's waiting room' and a little more 'unfathomable space outside of time.''</a>"
k=new K.a("4/21/17","Hey, look at that, an official site header! So fancy! That shit is a fucking symphony on my retinas.")
if(s)k.b="Who is Shogun??? <div class ='strikethroughStuff'>Hey, look at that, an official site header! So fancy! That shit is a fucking symphony on my retinas.</a>"
j=new K.a("4/17/17","We are up to 60(!!) hairstyles, including all of the canon characters, even if I had to redraw hair for the ones that sucked. That's going to be all the hair for now - I'm going to move on to other items!")
if(s)j.b="Who is Shogun??? <div class ='strikethroughStuff'>We are up to 60(!!) hairstyles, including all of the canon characters, even if I had to redraw hair for the ones that sucked. That's going to be all the hair for now - I'm going to move on to other items!</a>"
i=new K.a("4/14/17","<a href ='index2.html?lollipop=true'>TRICKSTER MODE ENGAGE!!!11!</a>")
if(s)i.b="Who is Shogun??? <div class ='strikethroughStuff'><a href ='index2.html?lollipop=true'>TRICKSTER MODE ENGAGE!!!11!</a></a>"
h=new K.a("4/13/17","Happy 413! I tried to finish out the hair for all the dancestors, but.... Kurloz. Seriously. His hair is too big to fit on the canvas. For NO REASON. He's not the Grand Highblood yet! I threw it out and made new hair that better reflects his talksprite. Anyway, I should be able to finish the rest soon. Did you know there are more than 50 hairstyles in the system already? Sheesh.")
if(s)h.b="Who is Shogun??? <div class ='strikethroughStuff'>Happy 413! I tried to finish out the hair for all the dancestors, but.... Kurloz. Seriously. His hair is too big to fit on the canvas. For NO REASON. He's not the Grand Highblood yet! I threw it out and made new hair that better reflects his talksprite. Anyway, I should be able to finish the rest soon. Did you know there are more than 50 hairstyles in the system already? Sheesh.</a>"
g=new K.a("4/5/17"," Ugh tvros your hair is so ugly<Br>ur head's not even round<Br>look at this bullshit:  <Br> <img src = 'images/tavroshead.png'>")
if(s)g.b="Who is Shogun??? <div class ='strikethroughStuff'> Ugh tvros your hair is so ugly<Br>ur head's not even round<Br>look at this bullshit:  <Br> <img src = 'images/tavroshead.png'></a>"
f=new K.a("4/4/17"," Muahahaha! Finally I have finished updating all of the existing sprites for hair and I can start adding new ones.")
if(s)f.b="Who is Shogun??? <div class ='strikethroughStuff'> Muahahaha! Finally I have finished updating all of the existing sprites for hair and I can start adding new ones.</a>"
e=new K.a("3/31/17","Spent today chasing down visual bugs and eating them like a hungry baby dragon. Also banging my face against a scaling issue on the babies that was probably my fault in the first place. I standardized the size of all the rest of the images, but not the babies. Because I'm an idiot.<Br><Br>PS: Hyperrealistic grimdark flames are the best idea I've ever had.")
if(s)e.b="Who is Shogun??? <div class ='strikethroughStuff'>Spent today chasing down visual bugs and eating them like a hungry baby dragon. Also banging my face against a scaling issue on the babies that was probably my fault in the first place. I standardized the size of all the rest of the images, but not the babies. Because I'm an idiot.<Br><Br>PS: Hyperrealistic grimdark flames are the best idea I've ever had.</a>"
d=new K.a("3/28/17","Here's some proper Dream jammies for all you ungrateful bastards on Reddit.")
if(s)d.b="Who is Shogun??? <div class ='strikethroughStuff'>Here's some proper Dream jammies for all you ungrateful bastards on Reddit.</a>"
c=new K.a("3/28/17","Finished fixing up another handful of the worst hairstyles! jR figured out how to get the corrections working in the main branch as well, so you should all be able to see them.")
if(s)c.b="Who is Shogun??? <div class ='strikethroughStuff'>Finished fixing up another handful of the worst hairstyles! jR figured out how to get the corrections working in the main branch as well, so you should all be able to see them.</a>"
b=new K.a("3/27/17","Death by stabs now includes a knife in the corpse, courtesy of the <a href='http://www.mspaintadventures.com/?s=6&p=002228'>Midnight Crew</a>.")
if(s)b.b="Who is Shogun??? <div class ='strikethroughStuff'>Death by stabs now includes a knife in the corpse, courtesy of the <a href='http://www.mspaintadventures.com/?s=6&p=002228'>Midnight Crew</a>.</a>"
a=new K.a("3/23/17",'There are currently 35 hairstyles. For stupid reasons related to my perfectionism, fixing up the hair sprites takes longer than any other sprite part, even the clothes. The few that are finished to my satisfaction are loaded into the <a href="http://purplefrog.com/~jenny/SburbStoryExperimental/newsposts.html">Experimental</a> branch. Making the images for this page has nothing to do with the delay on those, shut up."')
if(s)a.b='Who is Shogun??? <div class =\'strikethroughStuff\'>There are currently 35 hairstyles. For stupid reasons related to my perfectionism, fixing up the hair sprites takes longer than any other sprite part, even the clothes. The few that are finished to my satisfaction are loaded into the <a href="http://purplefrog.com/~jenny/SburbStoryExperimental/newsposts.html">Experimental</a> branch. Making the images for this page has nothing to do with the delay on those, shut up."</a>'
a0=new K.a("3/23/17","Why did I spend several hours drawing blank-faced babies in MS Paint?<p><img src='images/Bodies/baby.png'><p>BECAUSE BABY LEGS DON'T WORK THAT WAY, HUSSIE.<p>ahem.<p>Anyway, I want to show off my baby sprites at full size, so you can marvel at their little toes and stupid fingers.<p><img src='images/Bodies/baby1.png'><br><img src='images/Bodies/baby2.png'><br><img src='images/Bodies/baby3.png'>")
if(s)a0.b="Who is Shogun??? <div class ='strikethroughStuff'>Why did I spend several hours drawing blank-faced babies in MS Paint?<p><img src='images/Bodies/baby.png'><p>BECAUSE BABY LEGS DON'T WORK THAT WAY, HUSSIE.<p>ahem.<p>Anyway, I want to show off my baby sprites at full size, so you can marvel at their little toes and stupid fingers.<p><img src='images/Bodies/baby1.png'><br><img src='images/Bodies/baby2.png'><br><img src='images/Bodies/baby3.png'></a>"
a1=new K.a("3/23/17","Cool, I get my own page!")
if(s)a1.b="Who is Shogun??? <div class ='strikethroughStuff'>Cool, I get my own page!</a>"
a2=[new K.a("8/5/17","Our newest staff member gets an avatar as well. Arise, Witch of Void!<Br><Br><img src = 'images/paradoxLands.png'>"),t,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1]
for(a3=0;a3<22;++a3){a4=a2[a3]
t=a4.a
a5="<div id = '"+t+"human'><hr> "+("<b>"+t+":</b> ")
t=a4.b
if(t==null)return t.E()
a5+=t+"</div>"
J.c8(document.querySelector("#artist_newspostsMain"),"beforeend",a5,C.h,null)}},
fz:function fz(){}},K={a:function a(a,b){this.a=a
this.b=b}},F={
hq:function(a){if(a===C.m){window
return C.f.gJ(C.f)}if(a===C.n){window
return C.f.gdU()}if(a===C.O){window
return C.f.gdB()}return P.jZ()},
aU:function aU(a,b){this.a=a
this.b=b},
bF:function bF(a,b){this.a=a
this.b=b}},O={
kf:function(a){var t,s,r,q,p,o,n,m,l,k,j
t=N.ht()
a=J.iE(a,P.jg("(href|src) ?= ?([\"'])(?!https?:)",!0,!1),new O.fB(t))
s=document
J.c8(s.querySelector("#navbar"),"beforeend",a,C.h,null)
if(J.B(O.k3("seerOfVoid",null),"true")){window.alert("If you gaze long into an abyss, the abyss also gazes into you.  - Troll Bruce Willis")
J.c8(s.querySelector("#story"),"beforeend","<button id = 'voidButton'>Peer into Void, Y/N?</a><div class='void'>Well, NOW you've certainly gone and done it. You can expect to see any Void Player shenanignans now. If there are any.",C.h,null)
r=H.fs(s.querySelector("#voidButton"),"$isaM")
r.toString
W.bV(r,"click",new O.fC(),!1,W.kr)}q=new P.bn(Date.now(),!1)
p=H.hw(q)
o=H.hv(q)
n=C.b.i(H.hx(q))
m=C.b.i(p)
l=C.b.i(o)
if(p<10)m="0"+m
if(o<10)l="0"+l
k=n+m+l
j=new A.dw(null,null)
j.ck(H.b3(k,null,null))
j.dJ()
if($.fW||j.a.aZ()>0.99)H.fs(s.querySelector("#today"),"$isaq").href="dead_index.html?seed="+k
else H.fs(s.querySelector("#today"),"$isaq").href="index2.html?seed="+k},
k3:function(a,b){var t,s,r,q
t=P.hR().gb3().h(0,a)
if(t!=null)t=P.f8(t,0,J.P(t),C.l,!1)
if(t!=null)return t
s=$.is
if(s.length!==0){r=J.iF(window.location.href,J.iB(window.location.href,"?")+1)
s=window.location.href
q="?"+r
s.toString
return P.hS(H.kn(s,q,"")+"?"+$.is,0,null).gb3().h(0,a)}return},
kp:function(){var t,s,r,q,p
t=document
s=t.querySelector("body").style
s.backgroundColor="#f8c858"
s=t.querySelector("body").style
s.backgroundImage="url(images/pen15_bg1.png)"
r=new W.bW(t.querySelectorAll(".void"),[null])
for(t=new H.ac(r,r.gj(r),0,null);t.m();){q=t.d
p=J.iy(J.c7(q))
if(p==="none"||p.length===0)O.kk(q)
else O.k5(q)}},
kk:function(a){J.h8(J.c7(a),"block")},
k5:function(a){J.h8(J.c7(a),"none")},
fB:function fB(a){this.a=a},
fC:function fC(){}},A={dw:function dw(a,b){this.a=a
this.b=b}},N={
j6:function(a){var t,s,r,q,p,o,n,m,l
t=J.Y(a)
s=new W.bW(document.querySelectorAll("link"),[null])
for(r=new H.ac(s,s.gj(s),0,null);r.m();){q=r.d
p=J.m(q)
if(!!p.$isaR&&q.rel==="stylesheet"){o=$.$get$ds()
H.d(p.gB(q))
o.toString
o=t.length
n=Math.min(o,J.P(p.gB(q)))
for(m=0;m<n;++m){if(m>=o)return H.e(t,m)
if(t[m]!==J.bi(p.gB(q),m)){l=C.a.S(t,m)
$.$get$ds().toString
return l.split("/").length-1}continue}}}r=$.$get$ds()
r.toString
F.hq(C.n).$1(r.br(C.n,"Didn't find a css link to derive relative path"))
return 0},
ht:function(){var t=P.hR()
if(!$.$get$dr().a3(t))$.$get$dr().q(0,t,N.j6(t))
return $.$get$dr().h(0,t)}}
var v=[C,H,J,P,W,Q,K,F,O,A,N]
setFunctionNamesIfNecessary(v)
var $={}
H.fO.prototype={}
J.h.prototype={
n:function(a,b){return a===b},
gt:function(a){return H.af(a)},
i:function(a){return H.dv(a)}}
J.cY.prototype={
i:function(a){return String(a)},
gt:function(a){return a?519018:218159},
$isbg:1}
J.d_.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gt:function(a){return 0}}
J.aQ.prototype={
gt:function(a){return 0},
i:function(a){return String(a)},
$isj2:1}
J.du.prototype={}
J.ak.prototype={}
J.ab.prototype={
i:function(a){var t=a[$.$get$he()]
return t==null?this.co(a):J.Y(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.a9.prototype={
aT:function(a,b){if(!!a.immutable$list)throw H.c(new P.t(b))},
da:function(a,b){if(!!a.fixed$length)throw H.c(new P.t(b))},
a_:function(a,b){return new H.av(a,b,[H.a2(a,0),null])},
bW:function(a,b){var t,s,r,q
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<a.length;++r){q=H.d(a[r])
if(r>=t)return H.e(s,r)
s[r]=q}return s.join(b)},
dr:function(a,b,c){var t,s,r
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.c(new P.W(a))}return s},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
cm:function(a,b,c){if(b<0||b>a.length)throw H.c(P.A(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.A(c,b,a.length,"end",null))
if(b===c)return H.C([],[H.a2(a,0)])
return H.C(a.slice(b,c),[H.a2(a,0)])},
gaW:function(a){if(a.length>0)return a[0]
throw H.c(H.cW())},
gaa:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.cW())},
bg:function(a,b,c,d,e){var t,s,r
this.aT(a,"setRange")
P.a1(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.v(P.A(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.c(H.j1())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r<0||r>=d.length)return H.e(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r<0||r>=d.length)return H.e(d,r)
a[b+s]=d[r]}},
av:function(a,b,c,d){var t
this.aT(a,"fill range")
P.a1(b,c,a.length,null,null,null)
for(t=b;t<c;++t)a[t]=d},
Y:function(a,b,c){var t
if(c>=a.length)return-1
for(t=c;t<a.length;++t)if(J.B(a[t],b))return t
return-1},
a7:function(a,b){return this.Y(a,b,0)},
gu:function(a){return a.length===0},
i:function(a){return P.cV(a,"[","]")},
gD:function(a){return new J.cb(a,a.length,0,null)},
gt:function(a){return H.af(a)},
gj:function(a){return a.length},
sj:function(a,b){this.da(a,"set length")
if(b<0)throw H.c(P.A(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.u(a,b))
if(b>=a.length||b<0)throw H.c(H.u(a,b))
return a[b]},
q:function(a,b,c){this.aT(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.u(a,b))
if(b>=a.length||b<0)throw H.c(H.u(a,b))
a[b]=c},
$isF:1,
$asF:function(){},
$isk:1,
$ask:null,
$isi:1,
$asi:null}
J.fN.prototype={}
J.cb.prototype={
gw:function(){return this.d},
m:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.c5(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.at.prototype={
dn:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.c(new P.t(""+a+".floor()"))},
b4:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(new P.t(""+a+".round()"))},
ae:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.c(P.A(b,2,36,"radix",null))
t=a.toString(b)
if(C.a.v(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.v(new P.t("Unexpected toString result: "+t))
r=J.y(s)
t=r.h(s,1)
q=+r.h(s,3)
if(r.h(s,2)!=null){t+=r.h(s,2)
q-=r.h(s,2).length}return t+C.a.ai("0",q)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gt:function(a){return a&0x1FFFFFFF},
be:function(a){return-a},
E:function(a,b){if(typeof b!=="number")throw H.c(H.D(b))
return a+b},
az:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
C:function(a,b){return(a|0)===a?a/b|0:this.d5(a,b)},
d5:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(new P.t("Result of truncating division is "+H.d(t)+": "+H.d(a)+" ~/ "+b))},
N:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
d4:function(a,b){if(b<0)throw H.c(H.D(b))
return b>31?0:a>>>b},
A:function(a,b){if(typeof b!=="number")throw H.c(H.D(b))
return a<b},
ah:function(a,b){if(typeof b!=="number")throw H.c(H.D(b))
return a>b},
$isap:1}
J.bD.prototype={$isap:1,$isl:1}
J.cZ.prototype={$isap:1}
J.aa.prototype={
v:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.u(a,b))
if(b<0)throw H.c(H.u(a,b))
if(b>=a.length)H.v(H.u(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(b>=a.length)throw H.c(H.u(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(typeof b!=="string")throw H.c(P.h9(b,null,null))
return a+b},
dQ:function(a,b,c){return H.km(a,b,c,null)},
a0:function(a,b,c,d){var t,s
H.ih(b)
c=P.a1(b,c,a.length,null,null,null)
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
H:function(a,b,c){var t
H.ih(c)
if(typeof c!=="number")return c.A()
if(c<0||c>a.length)throw H.c(P.A(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
G:function(a,b){return this.H(a,b,0)},
k:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.v(H.D(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.v(H.D(c))
if(typeof b!=="number")return b.A()
if(b<0)throw H.c(P.dx(b,null,null))
if(typeof c!=="number")return H.x(c)
if(b>c)throw H.c(P.dx(b,null,null))
if(c>a.length)throw H.c(P.dx(c,null,null))
return a.substring(b,c)},
S:function(a,b){return this.k(a,b,null)},
ai:function(a,b){var t,s
if(typeof b!=="number")return H.x(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.A)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
Y:function(a,b,c){var t
if(c<0||c>a.length)throw H.c(P.A(c,0,a.length,null,null))
t=a.indexOf(b,c)
return t},
a7:function(a,b){return this.Y(a,b,0)},
df:function(a,b,c){if(c>a.length)throw H.c(P.A(c,0,a.length,null,null))
return H.kl(a,b,c)},
gu:function(a){return a.length===0},
i:function(a){return a},
gt:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gj:function(a){return a.length},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.u(a,b))
if(b>=a.length||b<0)throw H.c(H.u(a,b))
return a[b]},
$isF:1,
$asF:function(){},
$isr:1}
H.ci.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.a.v(this.a,b)},
$asb5:function(){return[P.l]},
$asbE:function(){return[P.l]},
$ask:function(){return[P.l]},
$asi:function(){return[P.l]}}
H.i.prototype={$asi:null}
H.au.prototype={
gD:function(a){return new H.ac(this,this.gj(this),0,null)},
gu:function(a){return this.gj(this)===0},
gaW:function(a){if(this.gj(this)===0)throw H.c(H.cW())
return this.I(0,0)},
a_:function(a,b){return new H.av(this,b,[H.E(this,"au",0),null])},
b9:function(a,b){var t,s,r
t=H.C([],[H.E(this,"au",0)])
C.c.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s){r=this.I(0,s)
if(s>=t.length)return H.e(t,s)
t[s]=r}return t},
b8:function(a){return this.b9(a,!0)}}
H.ac.prototype={
gw:function(){return this.d},
m:function(){var t,s,r,q
t=this.a
s=J.y(t)
r=s.gj(t)
if(this.b!==r)throw H.c(new P.W(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.I(t,q);++this.c
return!0}}
H.bG.prototype={
gD:function(a){return new H.db(null,J.c6(this.a),this.b,this.$ti)},
gj:function(a){return J.P(this.a)},
gu:function(a){return J.fL(this.a)},
$asJ:function(a,b){return[b]}}
H.br.prototype={$isi:1,
$asi:function(a,b){return[b]}}
H.db.prototype={
m:function(){var t=this.b
if(t.m()){this.a=this.c.$1(t.gw())
return!0}this.a=null
return!1},
gw:function(){return this.a}}
H.av.prototype={
gj:function(a){return J.P(this.a)},
I:function(a,b){return this.b.$1(J.iw(this.a,b))},
$asau:function(a,b){return[b]},
$asi:function(a,b){return[b]},
$asJ:function(a,b){return[b]}}
H.bt.prototype={}
H.dX.prototype={
q:function(a,b,c){throw H.c(new P.t("Cannot modify an unmodifiable list"))},
av:function(a,b,c,d){throw H.c(new P.t("Cannot modify an unmodifiable list"))},
$isk:1,
$ask:null,
$isi:1,
$asi:null}
H.b5.prototype={$ask:null,$asi:null,$isk:1,$isi:1}
H.fF.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.fG.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.eQ.prototype={}
H.az.prototype={
bJ:function(a,b){if(!this.f.n(0,a))return
if(this.Q.W(0,b)&&!this.y)this.y=!0
this.aQ()},
dP:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.ac(0,a)
if(t.a===0){for(t=this.z;s=t.length,s!==0;){if(0>=s)return H.e(t,-1)
r=t.pop()
s=u.globalState.f.a
q=s.b
p=s.a
o=p.length
q=(q-1&o-1)>>>0
s.b=q
if(q<0||q>=o)return H.e(p,q)
p[q]=r
if(q===s.c)s.bs();++s.d}this.y=!1}this.aQ()},
d7:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.m(a),s=0;r=this.ch,s<r.length;s+=2)if(t.n(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.e(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
dN:function(a){var t,s,r
if(this.ch==null)return
for(t=J.m(a),s=0;r=this.ch,s<r.length;s+=2)if(t.n(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.v(new P.t("removeRange"))
P.a1(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cj:function(a,b){if(!this.r.n(0,a))return
this.db=b},
du:function(a,b,c){var t=J.m(b)
if(!t.n(b,0))t=t.n(b,1)&&!this.cy
else t=!0
if(t){J.aJ(a,c)
return}t=this.cx
if(t==null){t=P.fR(null,null)
this.cx=t}t.L(new H.eK(a,c))},
dt:function(a,b){var t
if(!this.r.n(0,a))return
t=J.m(b)
if(!t.n(b,0))t=t.n(b,1)&&!this.cy
else t=!0
if(t){this.aw()
return}t=this.cx
if(t==null){t=P.fR(null,null)
this.cx=t}t.L(this.gdH())},
dv:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.fD(a)
if(b!=null)P.fD(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.Y(a)
s[1]=b==null?null:J.Y(b)
for(r=new P.bY(t,t.r,null,null),r.c=t.e;r.m();)J.aJ(r.d,s)},
a6:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.T(o)
p=H.O(o)
this.dv(q,p)
if(this.db===!0){this.aw()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.gdG()
if(this.cx!=null)for(;n=this.cx,!n.gu(n);)this.cx.c1().$0()}return s},
bZ:function(a){return this.b.h(0,a)},
bj:function(a,b){var t=this.b
if(t.a3(a))throw H.c(P.ct("Registry: ports must be registered only once."))
t.q(0,a,b)},
aQ:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.q(0,this.a,this)
else this.aw()},
aw:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.X(0)
for(t=this.b,s=t.gca(t),s=s.gD(s);s.m();)s.gw().cH()
t.X(0)
this.c.X(0)
u.globalState.z.ac(0,this.a)
this.dx.X(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.e(t,p)
J.aJ(q,t[p])}this.ch=null}},
gdG:function(){return this.d},
gdg:function(){return this.e}}
H.eK.prototype={
$0:function(){J.aJ(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.ep.prototype={
di:function(){var t=this.a
if(t.b===t.c)return
return t.c1()},
c5:function(){var t,s,r
t=this.di()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.a3(u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gu(s)}else s=!1
else s=!1
else s=!1
if(s)H.v(P.ct("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gu(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aS(["command","close"])
r=new H.R(!0,new P.bZ(0,null,null,null,null,null,0,[null,P.l])).F(r)
s.toString
self.postMessage(r)}return!1}t.dM()
return!0},
bC:function(){if(self.window!=null)new H.eq(this).$0()
else for(;this.c5(););},
ad:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.bC()
else try{this.bC()}catch(r){t=H.T(r)
s=H.O(r)
q=u.globalState.Q
p=P.aS(["command","error","msg",H.d(t)+"\n"+H.d(s)])
p=new H.R(!0,P.ba(null,P.l)).F(p)
q.toString
self.postMessage(p)}}}
H.eq.prototype={
$0:function(){if(!this.a.c5())return
P.jj(C.p,this)},
$S:function(){return{func:1,v:true}}}
H.an.prototype={
dM:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.a6(this.b)}}
H.eP.prototype={}
H.cT.prototype={
$0:function(){H.iY(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.cU.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.aF(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.aF(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aQ()},
$S:function(){return{func:1,v:true}}}
H.ec.prototype={}
H.aA.prototype={
aj:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.gbw())return
r=H.jL(b)
if(t.gdg()===s){s=J.y(r)
switch(s.h(r,0)){case"pause":t.bJ(s.h(r,1),s.h(r,2))
break
case"resume":t.dP(s.h(r,1))
break
case"add-ondone":t.d7(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.dN(s.h(r,1))
break
case"set-errors-fatal":t.cj(s.h(r,1),s.h(r,2))
break
case"ping":t.du(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.dt(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.W(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ac(0,s)
break}return}u.globalState.f.a.L(new H.an(t,new H.eT(this,r),"receive"))},
n:function(a,b){if(b==null)return!1
return b instanceof H.aA&&J.B(this.b,b.b)},
gt:function(a){return this.b.gaK()}}
H.eT.prototype={
$0:function(){var t=this.a.b
if(!t.gbw())t.cB(this.b)},
$S:function(){return{func:1}}}
H.bc.prototype={
aj:function(a,b){var t,s,r
t=P.aS(["command","message","port",this,"msg",b])
s=new H.R(!0,P.ba(null,P.l)).F(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
n:function(a,b){if(b==null)return!1
return b instanceof H.bc&&J.B(this.b,b.b)&&J.B(this.a,b.a)&&J.B(this.c,b.c)},
gt:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.aB()
s=this.a
if(typeof s!=="number")return s.aB()
r=this.c
if(typeof r!=="number")return H.x(r)
return(t<<16^s<<8^r)>>>0}}
H.aw.prototype={
cH:function(){this.c=!0
this.b=null},
cB:function(a){if(this.c)return
this.b.$1(a)},
$isje:1,
gaK:function(){return this.a},
gbw:function(){return this.c}}
H.dR.prototype={
cs:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.L(new H.an(s,new H.dS(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.bh(new H.dT(this,b),0),a)}else throw H.c(new P.t("Timer greater than 0."))}}
H.dS.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.dT.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.U.prototype={
gt:function(a){var t=this.a
if(typeof t!=="number")return t.cl()
t=C.e.N(t,0)^C.e.C(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
n:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.U){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gaK:function(){return this.a}}
H.R.prototype={
F:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.q(0,a,t.gj(t))
t=J.m(a)
if(!!t.$isaX)return["buffer",a]
if(!!t.$isad)return["typed",a]
if(!!t.$isF)return this.ce(a)
if(!!t.$isiV){r=this.gcb()
q=a.gbX()
q=H.da(q,r,H.E(q,"J",0),null)
q=P.d7(q,!0,H.E(q,"J",0))
t=t.gca(a)
t=H.da(t,r,H.E(t,"J",0),null)
return["map",q,P.d7(t,!0,H.E(t,"J",0))]}if(!!t.$isj2)return this.cf(a)
if(!!t.$ish)this.c7(a)
if(!!t.$isje)this.af(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isaA)return this.cg(a)
if(!!t.$isbc)return this.ci(a)
if(!!t.$isaN){p=a.$static_name
if(p==null)this.af(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isU)return["capability",a.a]
if(!(a instanceof P.p))this.c7(a)
return["dart",u.classIdExtractor(a),this.cd(u.classFieldsExtractor(a))]},
af:function(a,b){throw H.c(new P.t((b==null?"Can't transmit:":b)+" "+H.d(a)))},
c7:function(a){return this.af(a,null)},
ce:function(a){var t=this.cc(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.af(a,"Can't serialize indexable: ")},
cc:function(a){var t,s,r
t=[]
C.c.sj(t,a.length)
for(s=0;s<a.length;++s){r=this.F(a[s])
if(s>=t.length)return H.e(t,s)
t[s]=r}return t},
cd:function(a){var t
for(t=0;t<a.length;++t)C.c.q(a,t,this.F(a[t]))
return a},
cf:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.af(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.c.sj(s,t.length)
for(r=0;r<t.length;++r){q=this.F(a[t[r]])
if(r>=s.length)return H.e(s,r)
s[r]=q}return["js-object",t,s]},
ci:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cg:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gaK()]
return["raw sendport",a]}}
H.am.prototype={
O:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.bk("Bad serialized message: "+H.d(a)))
switch(C.c.gaW(a)){case"ref":if(1>=a.length)return H.e(a,1)
t=a[1]
s=this.b
if(t>>>0!==t||t>=s.length)return H.e(s,t)
return s[t]
case"buffer":if(1>=a.length)return H.e(a,1)
r=a[1]
this.b.push(r)
return r
case"typed":if(1>=a.length)return H.e(a,1)
r=a[1]
this.b.push(r)
return r
case"fixed":if(1>=a.length)return H.e(a,1)
r=a[1]
this.b.push(r)
s=H.C(this.a4(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.e(a,1)
r=a[1]
this.b.push(r)
return H.C(this.a4(r),[null])
case"mutable":if(1>=a.length)return H.e(a,1)
r=a[1]
this.b.push(r)
return this.a4(r)
case"const":if(1>=a.length)return H.e(a,1)
r=a[1]
this.b.push(r)
s=H.C(this.a4(r),[null])
s.fixed$length=Array
return s
case"map":return this.dl(a)
case"sendport":return this.dm(a)
case"raw sendport":if(1>=a.length)return H.e(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.dk(a)
case"function":if(1>=a.length)return H.e(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.e(a,1)
return new H.U(a[1])
case"dart":s=a.length
if(1>=s)return H.e(a,1)
q=a[1]
if(2>=s)return H.e(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.a4(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.c("couldn't deserialize: "+H.d(a))}},
a4:function(a){var t,s,r
t=J.y(a)
s=0
while(!0){r=t.gj(a)
if(typeof r!=="number")return H.x(r)
if(!(s<r))break
t.q(a,s,this.O(t.h(a,s)));++s}return a},
dl:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.e(a,1)
s=a[1]
if(2>=t)return H.e(a,2)
r=a[2]
q=P.hp()
this.b.push(q)
s=J.iC(s,this.gdj()).b8(0)
for(t=J.y(s),p=J.y(r),o=0;o<t.gj(s);++o){if(o>=s.length)return H.e(s,o)
q.q(0,s[o],this.O(p.h(r,o)))}return q},
dm:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.e(a,1)
s=a[1]
if(2>=t)return H.e(a,2)
r=a[2]
if(3>=t)return H.e(a,3)
q=a[3]
if(J.B(s,u.globalState.b)){p=u.globalState.z.h(0,r)
if(p==null)return
o=p.bZ(q)
if(o==null)return
n=new H.aA(o,r)}else n=new H.bc(s,q,r)
this.b.push(n)
return n},
dk:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.e(a,1)
s=a[1]
if(2>=t)return H.e(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.y(s)
p=J.y(r)
o=0
while(!0){n=t.gj(s)
if(typeof n!=="number")return H.x(n)
if(!(o<n))break
q[t.h(s,o)]=this.O(p.h(r,o));++o}return q}}
H.ck.prototype={
gu:function(a){return this.gj(this)===0},
i:function(a){return P.hr(this)},
q:function(a,b,c){return H.iN()}}
H.cl.prototype={
gj:function(a){return this.a},
a3:function(a){if(typeof a!=="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
h:function(a,b){if(!this.a3(b))return
return this.bq(b)},
bq:function(a){return this.b[a]},
bN:function(a,b){var t,s,r,q
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.bq(q))}}}
H.dy.prototype={}
H.dU.prototype={
K:function(a){var t,s,r
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
H.bM.prototype={
i:function(a){var t=this.b
if(t==null)return"NullError: "+H.d(this.a)
return"NullError: method not found: '"+H.d(t)+"' on null"}}
H.d2.prototype={
i:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.d(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.d(this.a)+")"}}
H.dW.prototype={
i:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.fH.prototype={
$1:function(a){if(!!J.m(a).$isa7)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.c0.prototype={
i:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.fu.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.fv.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.fw.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.fx.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.fy.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.aN.prototype={
i:function(a){return"Closure '"+H.fU(this).trim()+"'"},
gdW:function(){return this},
$D:null}
H.dP.prototype={}
H.dF.prototype={
i:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.aK.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.aK))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gt:function(a){var t,s
t=this.c
if(t==null)s=H.af(this.a)
else s=typeof t!=="object"?J.a3(t):H.af(t)
t=H.af(this.b)
if(typeof s!=="number")return s.dZ()
return(s^t)>>>0},
i:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.d(this.d)+"' of "+H.dv(t)}}
H.ch.prototype={
i:function(a){return this.a}}
H.dz.prototype={
i:function(a){return"RuntimeError: "+H.d(this.a)}}
H.Q.prototype={
gj:function(a){return this.a},
gu:function(a){return this.a===0},
gbX:function(){return new H.d4(this,[H.a2(this,0)])},
gca:function(a){return H.da(this.gbX(),new H.d1(this),H.a2(this,0),H.a2(this,1))},
a3:function(a){var t
if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.cL(t,a)}else return this.dD(a)},
dD:function(a){var t=this.d
if(t==null)return!1
return this.a9(this.ao(t,this.a8(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.a2(t,b)
return s==null?null:s.gP()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.a2(r,b)
return s==null?null:s.gP()}else return this.dE(b)},
dE:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.ao(t,this.a8(a))
r=this.a9(s,a)
if(r<0)return
return s[r].gP()},
q:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aM()
this.b=t}this.bi(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aM()
this.c=s}this.bi(s,b,c)}else{r=this.d
if(r==null){r=this.aM()
this.d=r}q=this.a8(b)
p=this.ao(r,q)
if(p==null)this.aP(r,q,[this.aN(b,c)])
else{o=this.a9(p,b)
if(o>=0)p[o].sP(c)
else p.push(this.aN(b,c))}}},
ac:function(a,b){if(typeof b==="string")return this.bB(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bB(this.c,b)
else return this.dF(b)},
dF:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.ao(t,this.a8(a))
r=this.a9(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bH(q)
return q.gP()},
X:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bN:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.c(new P.W(this))
t=t.c}},
bi:function(a,b,c){var t=this.a2(a,b)
if(t==null)this.aP(a,b,this.aN(b,c))
else t.sP(c)},
bB:function(a,b){var t
if(a==null)return
t=this.a2(a,b)
if(t==null)return
this.bH(t)
this.bn(a,b)
return t.gP()},
aN:function(a,b){var t,s
t=new H.d3(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bH:function(a){var t,s
t=a.gd_()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
a8:function(a){return J.a3(a)&0x3ffffff},
a9:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.B(a[s].gbU(),b))return s
return-1},
i:function(a){return P.hr(this)},
a2:function(a,b){return a[b]},
ao:function(a,b){return a[b]},
aP:function(a,b,c){a[b]=c},
bn:function(a,b){delete a[b]},
cL:function(a,b){return this.a2(a,b)!=null},
aM:function(){var t=Object.create(null)
this.aP(t,"<non-identifier-key>",t)
this.bn(t,"<non-identifier-key>")
return t},
$isiV:1}
H.d1.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.d3.prototype={
gbU:function(){return this.a},
gP:function(){return this.b},
gd_:function(){return this.d},
sP:function(a){return this.b=a}}
H.d4.prototype={
gj:function(a){return this.a.a},
gu:function(a){return this.a.a===0},
gD:function(a){var t,s
t=this.a
s=new H.d5(t,t.r,null,null)
s.c=t.e
return s}}
H.d5.prototype={
gw:function(){return this.d},
m:function(){var t=this.a
if(this.b!==t.r)throw H.c(new P.W(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.fp.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.fq.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.r]}}}
H.fr.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.r]}}}
H.d0.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
gcY:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.ho(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
cN:function(a,b){var t,s
t=this.gcY()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return new H.eS(this,s)}}
H.eS.prototype={
bd:function(a){var t=this.b
if(a>>>0!==a||a>=t.length)return H.e(t,a)
return t[a]},
h:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.e(t,b)
return t[b]}}
H.e6.prototype={
gw:function(){return this.d},
m:function(){var t,s,r,q
t=this.b
if(t==null)return!1
s=this.c
if(s<=t.length){r=this.a.cN(t,s)
if(r!=null){this.d=r
t=r.b
s=t.index
q=s+t[0].length
this.c=s===q?q+1:q
return!0}}this.d=null
this.b=null
return!1}}
H.aX.prototype={$isaX:1}
H.ad.prototype={$isad:1}
H.bH.prototype={
gj:function(a){return a.length},
$isK:1,
$asK:function(){},
$isF:1,
$asF:function(){}}
H.bI.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.v(H.u(a,b))
return a[b]},
q:function(a,b,c){if(b>>>0!==b||b>=a.length)H.v(H.u(a,b))
a[b]=c}}
H.aY.prototype={
$asK:function(){},
$asF:function(){},
$ask:function(){return[P.N]},
$asi:function(){return[P.N]},
$isk:1,
$isi:1}
H.b_.prototype={
$asK:function(){},
$asF:function(){},
$ask:function(){return[P.N]},
$asi:function(){return[P.N]}}
H.bJ.prototype={
q:function(a,b,c){if(b>>>0!==b||b>=a.length)H.v(H.u(a,b))
a[b]=c},
$isk:1,
$ask:function(){return[P.l]},
$isi:1,
$asi:function(){return[P.l]}}
H.aZ.prototype={
$asK:function(){},
$asF:function(){},
$ask:function(){return[P.l]},
$asi:function(){return[P.l]},
$isk:1,
$isi:1}
H.b0.prototype={
$asK:function(){},
$asF:function(){},
$ask:function(){return[P.l]},
$asi:function(){return[P.l]}}
H.dh.prototype={$isk:1,
$ask:function(){return[P.N]},
$isi:1,
$asi:function(){return[P.N]}}
H.di.prototype={$isk:1,
$ask:function(){return[P.N]},
$isi:1,
$asi:function(){return[P.N]}}
H.dj.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.v(H.u(a,b))
return a[b]},
$isk:1,
$ask:function(){return[P.l]},
$isi:1,
$asi:function(){return[P.l]}}
H.dk.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.v(H.u(a,b))
return a[b]},
$isk:1,
$ask:function(){return[P.l]},
$isi:1,
$asi:function(){return[P.l]}}
H.dl.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.v(H.u(a,b))
return a[b]},
$isk:1,
$ask:function(){return[P.l]},
$isi:1,
$asi:function(){return[P.l]}}
H.dm.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.v(H.u(a,b))
return a[b]},
$isk:1,
$ask:function(){return[P.l]},
$isi:1,
$asi:function(){return[P.l]}}
H.dn.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.v(H.u(a,b))
return a[b]},
$isk:1,
$ask:function(){return[P.l]},
$isi:1,
$asi:function(){return[P.l]}}
H.bK.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.v(H.u(a,b))
return a[b]},
$isk:1,
$ask:function(){return[P.l]},
$isi:1,
$asi:function(){return[P.l]}}
H.b1.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.v(H.u(a,b))
return a[b]},
$isb1:1,
$isk:1,
$ask:function(){return[P.l]},
$isi:1,
$asi:function(){return[P.l]}}
P.e9.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.e8.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.ea.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.eb.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.bU.prototype={
bM:function(a,b){var t
if(a==null)a=new P.b2()
t=this.a
if(t.a!==0)throw H.c(new P.ah("Future already completed"))
$.n.toString
t.cF(a,b)},
bL:function(a){return this.bM(a,null)}}
P.e7.prototype={
dc:function(a,b){var t=this.a
if(t.a!==0)throw H.c(new P.ah("Future already completed"))
t.cE(b)}}
P.bX.prototype={
gd6:function(){return this.b.b},
gbQ:function(){return(this.c&1)!==0},
gdA:function(){return(this.c&2)!==0},
gbP:function(){return this.c===8},
dw:function(a){return this.b.b.b5(this.d,a)},
dI:function(a){if(this.c!==6)return!0
return this.b.b.b5(this.d,J.bj(a))},
ds:function(a){var t,s,r
t=this.e
s=J.S(a)
r=this.b.b
if(H.aF(t,{func:1,args:[,,]}))return r.dS(t,s.gJ(a),a.gR())
else return r.b5(t,s.gJ(a))},
dz:function(){return this.b.b.c3(this.d)},
gaO:function(){return this.a}}
P.H.prototype={
gcW:function(){return this.a===2},
gaL:function(){return this.a>=4},
c6:function(a,b){var t,s
t=$.n
if(t!==C.d){t.toString
if(b!=null)b=P.i5(b,t)}s=new P.H(0,t,null,[null])
this.aC(new P.bX(null,s,b==null?1:3,a,b))
return s},
b7:function(a){return this.c6(a,null)},
bb:function(a){var t,s
t=$.n
s=new P.H(0,t,null,this.$ti)
if(t!==C.d)t.toString
this.aC(new P.bX(null,s,8,a,null))
return s},
aC:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gaL()){s.aC(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.aD(null,null,t,new P.ev(this,a))}},
bA:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gaO()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gaL()){p.bA(a)
return}this.a=p.a
this.c=p.c}t.a=this.at(a)
s=this.b
s.toString
P.aD(null,null,s,new P.eD(t,this))}},
as:function(){var t=this.c
this.c=null
return this.at(t)},
at:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gaO()
t.a=s}return s},
V:function(a){var t,s
t=this.$ti
if(H.fj(a,"$isa_",t,"$asa_"))if(H.fj(a,"$isH",t,null))P.ey(a,this)
else P.hW(a,this)
else{s=this.as()
this.a=4
this.c=a
P.ay(this,s)}},
a1:function(a,b){var t=this.as()
this.a=8
this.c=new P.ar(a,b)
P.ay(this,t)},
cJ:function(a){return this.a1(a,null)},
cE:function(a){var t
if(H.fj(a,"$isa_",this.$ti,"$asa_")){this.cG(a)
return}this.a=1
t=this.b
t.toString
P.aD(null,null,t,new P.ex(this,a))},
cG:function(a){var t
if(H.fj(a,"$isH",this.$ti,null)){if(a.a===8){this.a=1
t=this.b
t.toString
P.aD(null,null,t,new P.eC(this,a))}else P.ey(a,this)
return}P.hW(a,this)},
cF:function(a,b){var t
this.a=1
t=this.b
t.toString
P.aD(null,null,t,new P.ew(this,a,b))},
cz:function(a,b){this.a=4
this.c=a},
$isa_:1,
gau:function(){return this.a},
gd2:function(){return this.c}}
P.ev.prototype={
$0:function(){P.ay(this.a,this.b)},
$S:function(){return{func:1}}}
P.eD.prototype={
$0:function(){P.ay(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.ez.prototype={
$1:function(a){var t=this.a
t.a=0
t.V(a)},
$S:function(){return{func:1,args:[,]}}}
P.eA.prototype={
$2:function(a,b){this.a.a1(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.eB.prototype={
$0:function(){this.a.a1(this.b,this.c)},
$S:function(){return{func:1}}}
P.ex.prototype={
$0:function(){var t,s
t=this.a
s=t.as()
t.a=4
t.c=this.b
P.ay(t,s)},
$S:function(){return{func:1}}}
P.eC.prototype={
$0:function(){P.ey(this.b,this.a)},
$S:function(){return{func:1}}}
P.ew.prototype={
$0:function(){this.a.a1(this.b,this.c)},
$S:function(){return{func:1}}}
P.eG.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.dz()}catch(q){s=H.T(q)
r=H.O(q)
if(this.c){p=J.bj(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.ar(s,r)
o.a=!0
return}if(!!J.m(t).$isa_){if(t instanceof P.H&&t.gau()>=4){if(t.gau()===8){p=this.b
p.b=t.gd2()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.b7(new P.eH(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.eH.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.eF.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.dw(this.c)}catch(r){t=H.T(r)
s=H.O(r)
q=this.a
q.b=new P.ar(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.eE.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.dI(t)===!0&&q.e!=null){p=this.b
p.b=q.ds(t)
p.a=!1}}catch(o){s=H.T(o)
r=H.O(o)
q=this.a
p=J.bj(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.ar(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.bT.prototype={}
P.ai.prototype={
a_:function(a,b){return new P.eR(b,this,[H.E(this,"ai",0),null])},
gj:function(a){var t,s
t={}
s=new P.H(0,$.n,null,[P.l])
t.a=0
this.Z(new P.dJ(t),!0,new P.dK(t,s),s.gaH())
return s},
gu:function(a){var t,s
t={}
s=new P.H(0,$.n,null,[P.bg])
t.a=null
t.a=this.Z(new P.dH(t,s),!0,new P.dI(s),s.gaH())
return s},
b8:function(a){var t,s,r
t=H.E(this,"ai",0)
s=H.C([],[t])
r=new P.H(0,$.n,null,[[P.k,t]])
this.Z(new P.dL(this,s),!0,new P.dM(s,r),r.gaH())
return r}}
P.dJ.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.dK.prototype={
$0:function(){this.b.V(this.a.a)},
$S:function(){return{func:1}}}
P.dH.prototype={
$1:function(a){P.jK(this.a.a,this.b,!1)},
$S:function(){return{func:1,args:[,]}}}
P.dI.prototype={
$0:function(){this.a.V(!0)},
$S:function(){return{func:1}}}
P.dL.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.ii(function(a){return{func:1,args:[a]}},this.a,"ai")}}
P.dM.prototype={
$0:function(){this.b.V(this.a)},
$S:function(){return{func:1}}}
P.dG.prototype={}
P.M.prototype={
b_:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.bK()
if((t&4)===0&&(this.e&32)===0)this.bt(this.gby())},
c0:function(a){return this.b_(a,null)},
c2:function(){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gu(t)}else t=!1
if(t)this.r.aA(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.bt(this.gbz())}}}},
aS:function(){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.aE()
t=this.f
return t==null?$.$get$bu():t},
aE:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.bK()
if((this.e&32)===0)this.r=null
this.f=this.bx()},
al:function(a){var t=this.e
if((t&8)!==0)return
if(t<32)this.bD(a)
else this.aD(new P.ej(a,null,[H.E(this,"M",0)]))},
ak:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.bF(a,b)
else this.aD(new P.el(a,b,null))},
cD:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.bE()
else this.aD(C.B)},
aq:function(){},
ar:function(){},
bx:function(){return},
aD:function(a){var t,s
t=this.r
if(t==null){t=new P.f5(null,null,0,[H.E(this,"M",0)])
this.r=t}t.W(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.aA(this)}},
bD:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.b6(this.a,a)
this.e=(this.e&4294967263)>>>0
this.aF((t&4)!==0)},
bF:function(a,b){var t,s
t=this.e
s=new P.ee(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.aE()
t=this.f
if(!!J.m(t).$isa_&&t!==$.$get$bu())t.bb(s)
else s.$0()}else{s.$0()
this.aF((t&4)!==0)}},
bE:function(){var t,s
t=new P.ed(this)
this.aE()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.m(s).$isa_&&s!==$.$get$bu())s.bb(t)
else t.$0()},
bt:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.aF((t&4)!==0)},
aF:function(a){var t,s
if((this.e&64)!==0){t=this.r
t=t.gu(t)}else t=!1
if(t){t=(this.e&4294967231)>>>0
this.e=t
if((t&4)!==0)if(t<128){t=this.r
t=t==null||t.gu(t)}else t=!1
else t=!1
if(t)this.e=(this.e&4294967291)>>>0}for(;!0;a=s){t=this.e
if((t&8)!==0){this.r=null
return}s=(t&4)!==0
if(a===s)break
this.e=(t^32)>>>0
if(s)this.aq()
else this.ar()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.aA(this)},
ct:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.i5(b,t)
this.c=c},
gau:function(){return this.e}}
P.ee.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.aF(s,{func:1,args:[P.p,P.ag]})
q=t.d
p=this.b
o=t.b
if(r)q.dT(o,p,this.c)
else q.b6(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.ed.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.c4(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.em.prototype={
gab:function(){return this.a},
sab:function(a){return this.a=a}}
P.ej.prototype={
b0:function(a){a.bD(this.b)}}
P.el.prototype={
b0:function(a){a.bF(this.b,this.c)},
gJ:function(a){return this.b},
gR:function(){return this.c}}
P.ek.prototype={
b0:function(a){a.bE()},
gab:function(){return},
sab:function(a){throw H.c(new P.ah("No events after a done."))}}
P.eU.prototype={
aA:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.ir(new P.eV(this,a))
this.a=1},
bK:function(){if(this.a===1)this.a=3},
gau:function(){return this.a}}
P.eV.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gab()
t.b=q
if(q==null)t.c=null
r.b0(this.b)},
$S:function(){return{func:1}}}
P.f5.prototype={
gu:function(a){return this.c==null},
W:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sab(b)
this.c=b}}}
P.fd.prototype={
$0:function(){return this.a.V(this.b)},
$S:function(){return{func:1}}}
P.b7.prototype={
Z:function(a,b,c,d){return this.cM(a,d,c,!0===b)},
bY:function(a,b,c){return this.Z(a,null,b,c)},
cM:function(a,b,c,d){return P.jr(this,a,b,c,d,H.E(this,"b7",0),H.E(this,"b7",1))},
bu:function(a,b){b.al(a)},
cV:function(a,b,c){c.ak(a,b)},
$asai:function(a,b){return[b]}}
P.b8.prototype={
al:function(a){if((this.e&2)!==0)return
this.cp(a)},
ak:function(a,b){if((this.e&2)!==0)return
this.cq(a,b)},
aq:function(){var t=this.y
if(t==null)return
t.c0(0)},
ar:function(){var t=this.y
if(t==null)return
t.c2()},
bx:function(){var t=this.y
if(t!=null){this.y=null
return t.aS()}return},
cQ:function(a){this.x.bu(a,this)},
cU:function(a,b){this.x.cV(a,b,this)},
cS:function(){this.cD()},
cw:function(a,b,c,d,e,f,g){this.y=this.x.a.bY(this.gcP(),this.gcR(),this.gcT())},
$asM:function(a,b){return[b]}}
P.eR.prototype={
bu:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.T(q)
r=H.O(q)
P.jJ(b,s,r)
return}b.al(t)}}
P.ar.prototype={
i:function(a){return H.d(this.a)},
$isa7:1,
gJ:function(a){return this.a},
gR:function(){return this.b}}
P.fc.prototype={}
P.fi.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.b2()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=J.Y(s)
throw r},
$S:function(){return{func:1}}}
P.eX.prototype={
c4:function(a){var t,s,r,q
try{if(C.d===$.n){r=a.$0()
return r}r=P.i6(null,null,this,a)
return r}catch(q){t=H.T(q)
s=H.O(q)
r=P.c3(null,null,this,t,s)
return r}},
b6:function(a,b){var t,s,r,q
try{if(C.d===$.n){r=a.$1(b)
return r}r=P.i8(null,null,this,a,b)
return r}catch(q){t=H.T(q)
s=H.O(q)
r=P.c3(null,null,this,t,s)
return r}},
dT:function(a,b,c){var t,s,r,q
try{if(C.d===$.n){r=a.$2(b,c)
return r}r=P.i7(null,null,this,a,b,c)
return r}catch(q){t=H.T(q)
s=H.O(q)
r=P.c3(null,null,this,t,s)
return r}},
aR:function(a,b){if(b)return new P.eY(this,a)
else return new P.eZ(this,a)},
d9:function(a,b){return new P.f_(this,a)},
h:function(a,b){return},
c3:function(a){if($.n===C.d)return a.$0()
return P.i6(null,null,this,a)},
b5:function(a,b){if($.n===C.d)return a.$1(b)
return P.i8(null,null,this,a,b)},
dS:function(a,b,c){if($.n===C.d)return a.$2(b,c)
return P.i7(null,null,this,a,b,c)}}
P.eY.prototype={
$0:function(){return this.a.c4(this.b)},
$S:function(){return{func:1}}}
P.eZ.prototype={
$0:function(){return this.a.c3(this.b)},
$S:function(){return{func:1}}}
P.f_.prototype={
$1:function(a){return this.a.b6(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.bZ.prototype={
a8:function(a){return H.ke(a)&0x3ffffff},
a9:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].gbU()
if(r==null?b==null:r===b)return s}return-1}}
P.eM.prototype={
gD:function(a){var t=new P.bY(this,this.r,null,null)
t.c=this.e
return t},
gj:function(a){return this.a},
gu:function(a){return this.a===0},
de:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.cK(b)},
cK:function(a){var t=this.d
if(t==null)return!1
return this.an(t[this.am(a)],a)>=0},
bZ:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.de(0,a)?a:null
else return this.cX(a)},
cX:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.am(a)]
r=this.an(s,a)
if(r<0)return
return J.bi(s,r).gbp()},
W:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bk(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bk(r,b)}else return this.L(b)},
L:function(a){var t,s,r
t=this.d
if(t==null){t=P.js()
this.d=t}s=this.am(a)
r=t[s]
if(r==null)t[s]=[this.aG(a)]
else{if(this.an(r,a)>=0)return!1
r.push(this.aG(a))}return!0},
ac:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bl(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bl(this.c,b)
else return this.d0(b)},
d0:function(a){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.am(a)]
r=this.an(s,a)
if(r<0)return!1
this.bm(s.splice(r,1)[0])
return!0},
X:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bk:function(a,b){if(a[b]!=null)return!1
a[b]=this.aG(b)
return!0},
bl:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bm(t)
delete a[b]
return!0},
aG:function(a){var t,s
t=new P.eN(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bm:function(a){var t,s
t=a.gcI()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
am:function(a){return J.a3(a)&0x3ffffff},
an:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.B(a[s].gbp(),b))return s
return-1},
$isi:1,
$asi:null}
P.eN.prototype={
gbp:function(){return this.a},
gcI:function(){return this.c}}
P.bY.prototype={
gw:function(){return this.d},
m:function(){var t=this.a
if(this.b!==t.r)throw H.c(new P.W(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.eJ.prototype={}
P.bE.prototype={}
P.bO.prototype={$ask:null,$asi:null,$isk:1,$isi:1}
P.a0.prototype={
gD:function(a){return new H.ac(a,this.gj(a),0,null)},
I:function(a,b){return this.h(a,b)},
gu:function(a){return this.gj(a)===0},
a_:function(a,b){return new H.av(a,b,[H.E(a,"a0",0),null])},
av:function(a,b,c,d){var t
P.a1(b,c,this.gj(a),null,null,null)
for(t=b;t<c;++t)this.q(a,t,d)},
Y:function(a,b,c){var t
if(c>=this.gj(a))return-1
for(t=c;t<this.gj(a);++t)this.h(a,t)
return-1},
a7:function(a,b){return this.Y(a,b,0)},
i:function(a){return P.cV(a,"[","]")},
$isk:1,
$ask:null,
$isi:1,
$asi:null}
P.f7.prototype={
q:function(a,b,c){throw H.c(new P.t("Cannot modify unmodifiable map"))}}
P.d9.prototype={
h:function(a,b){return J.bi(this.a,b)},
q:function(a,b,c){J.fJ(this.a,b,c)},
gu:function(a){return J.fL(this.a)},
gj:function(a){return J.P(this.a)},
i:function(a){return J.Y(this.a)}}
P.b6.prototype={}
P.dc.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.l+=", "
t.a=!1
t=this.b
s=t.l+=H.d(a)
t.l=s+": "
t.l+=H.d(b)},
$S:function(){return{func:1,args:[,,]}}}
P.d6.prototype={
gD:function(a){return new P.eO(this,this.c,this.d,this.b,null)},
gu:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
I:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=t)H.v(P.bx(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.e(s,q)
return s[q]},
X:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.e(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
i:function(a){return P.cV(this,"{","}")},
c1:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.c(H.cW());++this.d
s=this.a
r=s.length
if(t>=r)return H.e(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
L:function(a){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.e(t,s)
t[s]=a
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.bs();++this.d},
bs:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.C(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.c.bg(s,0,q,t,r)
C.c.bg(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=s},
cr:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.C(t,[b])},
$asi:null}
P.eO.prototype={
gw:function(){return this.e},
m:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.v(new P.W(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.e(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.dD.prototype={
gu:function(a){return this.a===0},
a_:function(a,b){return new H.br(this,b,[H.a2(this,0),null])},
i:function(a){return P.cV(this,"{","}")},
$isi:1,
$asi:null}
P.dC.prototype={}
P.cc.prototype={
dK:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
a0=P.a1(b,a0,a.length,null,null,null)
t=$.$get$hV()
for(s=b,r=s,q=null,p=-1,o=-1,n=0;s<a0;s=m){m=s+1
l=C.a.p(a,s)
if(l===37){k=m+2
if(k<=a0){j=H.fo(C.a.p(a,m))
i=H.fo(C.a.p(a,m+1))
h=j*16+i-(i&256)
if(h===37)h=-1
m=k}else h=-1}else h=l
if(0<=h&&h<=127){if(h<0||h>=t.length)return H.e(t,h)
g=t[h]
if(g>=0){h=C.a.v("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",g)
if(h===l)continue
l=h}else{if(g===-1){if(p<0){f=q==null?q:q.l.length
if(f==null)f=0
if(typeof f!=="number")return f.E()
p=f+(s-r)
o=s}++n
if(l===61)continue}l=h}if(g!==-2){if(q==null)q=new P.L("")
q.l+=C.a.k(a,r,s)
q.l+=H.fV(l)
r=m
continue}}throw H.c(new P.q("Invalid base64 data",a,s))}if(q!=null){f=q.l+=C.a.k(a,r,a0)
e=f.length
if(p>=0)P.ha(a,o,a0,p,n,e)
else{d=C.b.az(e-1,4)+1
if(d===1)throw H.c(new P.q("Invalid base64 encoding length ",a,a0))
for(;d<4;){f+="="
q.l=f;++d}}f=q.l
return C.a.a0(a,b,a0,f.charCodeAt(0)==0?f:f)}c=a0-b
if(p>=0)P.ha(a,o,a0,p,n,c)
else{d=C.b.az(c,4)
if(d===1)throw H.c(new P.q("Invalid base64 encoding length ",a,a0))
if(d>1)a=C.a.a0(a,a0,a0,d===2?"==":"=")}return a}}
P.cd.prototype={}
P.cj.prototype={}
P.cm.prototype={}
P.cr.prototype={}
P.e3.prototype={}
P.e4.prototype={
aU:function(a,b,c){var t,s,r,q
t=J.P(a)
P.a1(b,c,t,null,null,null)
s=new P.L("")
r=new P.f9(!1,s,!0,0,0,0)
r.aU(a,b,t)
r.dq(a,t)
q=s.l
return q.charCodeAt(0)==0?q:q},
dh:function(a){return this.aU(a,0,null)}}
P.f9.prototype={
dq:function(a,b){if(this.e>0)throw H.c(new P.q("Unfinished UTF-8 octet sequence",a,b))},
aU:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=this.d
s=this.e
r=this.f
this.d=0
this.e=0
this.f=0
q=new P.fb(c)
p=new P.fa(this,a,b,c)
$loop$0:for(o=J.y(a),n=this.b,m=b;!0;m=h){$multibyte$2:if(s>0){do{if(m===c)break $loop$0
l=o.h(a,m)
if(typeof l!=="number")return l.ag()
if((l&192)!==128){k=new P.q("Bad UTF-8 encoding 0x"+C.e.ae(l,16),a,m)
throw H.c(k)}else{t=(t<<6|l&63)>>>0;--s;++m}}while(s>0)
k=r-1
if(k<0||k>=4)return H.e(C.t,k)
if(t<=C.t[k]){k=new P.q("Overlong encoding of 0x"+C.b.ae(t,16),a,m-r-1)
throw H.c(k)}if(t>1114111){k=new P.q("Character outside valid Unicode range: 0x"+C.b.ae(t,16),a,m-r-1)
throw H.c(k)}if(!this.c||t!==65279)n.l+=H.fV(t)
this.c=!1}for(k=m<c;k;){j=q.$2(a,m)
if(J.fI(j,0)){this.c=!1
if(typeof j!=="number")return H.x(j)
i=m+j
p.$2(m,i)
if(i===c)break}else i=m
h=i+1
l=o.h(a,i)
g=J.c4(l)
if(g.A(l,0)){g=new P.q("Negative UTF-8 code unit: -0x"+J.iG(g.be(l),16),a,h-1)
throw H.c(g)}else{if(typeof l!=="number")return l.ag()
if((l&224)===192){t=l&31
s=1
r=1
continue $loop$0}if((l&240)===224){t=l&15
s=2
r=2
continue $loop$0}if((l&248)===240&&l<245){t=l&7
s=3
r=3
continue $loop$0}g=new P.q("Bad UTF-8 encoding 0x"+C.e.ae(l,16),a,h-1)
throw H.c(g)}}break $loop$0}if(s>0){this.d=t
this.e=s
this.f=r}}}
P.fb.prototype={
$2:function(a,b){var t,s,r,q
t=this.a
for(s=J.y(a),r=b;r<t;++r){q=s.h(a,r)
if(typeof q!=="number")return q.ag()
if((q&127)!==q)return r-b}return t-b},
$S:function(){return{func:1,ret:P.l,args:[,P.l]}}}
P.fa.prototype={
$2:function(a,b){this.a.b.l+=P.hE(this.b,a,b)},
$S:function(){return{func:1,v:true,args:[P.l,P.l]}}}
P.bg.prototype={}
P.bn.prototype={
n:function(a,b){if(b==null)return!1
if(!(b instanceof P.bn))return!1
return this.a===b.a&&this.b===b.b},
gt:function(a){var t=this.a
return(t^C.b.N(t,30))&1073741823},
i:function(a){var t,s,r,q,p,o,n
t=P.iP(H.hx(this))
s=P.bo(H.hw(this))
r=P.bo(H.hv(this))
q=P.bo(H.j8(this))
p=P.bo(H.ja(this))
o=P.bo(H.jb(this))
n=P.iQ(H.j9(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n}}
P.N.prototype={}
P.a6.prototype={
E:function(a,b){return new P.a6(C.b.E(this.a,b.gbo()))},
A:function(a,b){return C.b.A(this.a,b.gbo())},
ah:function(a,b){return C.b.ah(this.a,b.gbo())},
n:function(a,b){if(b==null)return!1
if(!(b instanceof P.a6))return!1
return this.a===b.a},
gt:function(a){return this.a&0x1FFFFFFF},
i:function(a){var t,s,r,q,p
t=new P.cq()
s=this.a
if(s<0)return"-"+new P.a6(0-s).i(0)
r=t.$1(C.b.C(s,6e7)%60)
q=t.$1(C.b.C(s,1e6)%60)
p=new P.cp().$1(s%1e6)
return""+C.b.C(s,36e8)+":"+H.d(r)+":"+H.d(q)+"."+H.d(p)},
be:function(a){return new P.a6(0-this.a)}}
P.cp.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.r,args:[P.l]}}}
P.cq.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.r,args:[P.l]}}}
P.a7.prototype={
gR:function(){return H.O(this.$thrownJsError)}}
P.b2.prototype={
i:function(a){return"Throw of null."}}
P.Z.prototype={
gaJ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaI:function(){return""},
i:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.d(t)
q=this.gaJ()+s+r
if(!this.a)return q
p=this.gaI()
o=P.hk(this.b)
return q+p+": "+H.d(o)}}
P.b4.prototype={
gaJ:function(){return"RangeError"},
gaI:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.d(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.d(t)
else if(r>t)s=": Not in range "+H.d(t)+".."+H.d(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.d(t)}return s}}
P.cR.prototype={
gaJ:function(){return"RangeError"},
gaI:function(){if(J.h7(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.d(t)},
gj:function(a){return this.f}}
P.t.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.bR.prototype={
i:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.d(t):"UnimplementedError"}}
P.ah.prototype={
i:function(a){return"Bad state: "+this.a}}
P.W.prototype={
i:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.d(P.hk(t))+"."}}
P.dq.prototype={
i:function(a){return"Out of Memory"},
gR:function(){return},
$isa7:1}
P.bQ.prototype={
i:function(a){return"Stack Overflow"},
gR:function(){return},
$isa7:1}
P.cn.prototype={
i:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.d(t)+"' during its initialization"}}
P.eu.prototype={
i:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.d(t)}}
P.q.prototype={
i:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=this.a
s=""!==t?"FormatException: "+t:"FormatException"
r=this.c
q=this.b
if(typeof q!=="string")return r!=null?s+(" (at offset "+H.d(r)+")"):s
if(r!=null)t=r<0||r>q.length
else t=!1
if(t)r=null
if(r==null){if(q.length>78)q=C.a.k(q,0,75)+"..."
return s+"\n"+q}for(p=1,o=0,n=!1,m=0;m<r;++m){l=C.a.p(q,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}s=p>1?s+(" (at line "+p+", character "+(r-o+1)+")\n"):s+(" (at character "+(r+1)+")\n")
k=q.length
for(m=r;m<q.length;++m){l=C.a.v(q,m)
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
g=""}f=C.a.k(q,i,j)
return s+h+f+g+"\n"+C.a.ai(" ",r-i+h.length)+"^\n"}}
P.cu.prototype={
i:function(a){return"Expando:"+H.d(this.a)},
h:function(a,b){var t,s
t=this.ap
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.v(P.h9(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.fT(b,"expando$values")
return s==null?null:H.fT(s,t)},
q:function(a,b,c){var t,s
t=this.ap
if(typeof t!=="string")t.set(b,c)
else{s=H.fT(b,"expando$values")
if(s==null){s=new P.p()
H.hA(b,"expando$values",s)}H.hA(s,t,c)}}}
P.l.prototype={}
P.J.prototype={
a_:function(a,b){return H.da(this,b,H.E(this,"J",0),null)},
b9:function(a,b){return P.d7(this,!0,H.E(this,"J",0))},
b8:function(a){return this.b9(a,!0)},
gj:function(a){var t,s
t=this.gD(this)
for(s=0;t.m();)++s
return s},
gu:function(a){return!this.gD(this).m()},
I:function(a,b){var t,s,r
if(b<0)H.v(P.A(b,0,null,"index",null))
for(t=this.gD(this),s=0;t.m();){r=t.gw()
if(b===s)return r;++s}throw H.c(P.bx(b,this,"index",null,s))},
i:function(a){return P.j0(this,"(",")")}}
P.cX.prototype={}
P.k.prototype={$ask:null,$isi:1,$asi:null}
P.ae.prototype={
gt:function(a){return P.p.prototype.gt.call(this,this)},
i:function(a){return"null"}}
P.ap.prototype={}
P.p.prototype={constructor:P.p,$isp:1,
n:function(a,b){return this===b},
gt:function(a){return H.af(this)},
i:function(a){return H.dv(this)},
toString:function(){return this.i(this)}}
P.df.prototype={}
P.ag.prototype={}
P.r.prototype={}
P.L.prototype={
gj:function(a){return this.l.length},
gu:function(a){return this.l.length===0},
i:function(a){var t=this.l
return t.charCodeAt(0)==0?t:t},
gl:function(){return this.l}}
P.al.prototype={}
P.e1.prototype={
$2:function(a,b){var t,s,r,q
t=J.y(b)
s=t.a7(b,"=")
if(s===-1){if(!t.n(b,""))J.fJ(a,P.f8(b,0,t.gj(b),this.a,!0),"")}else if(s!==0){r=t.k(b,0,s)
q=C.a.S(b,s+1)
t=this.a
J.fJ(a,P.f8(r,0,r.length,t,!0),P.f8(q,0,q.length,t,!0))}return a},
$S:function(){return{func:1,args:[,,]}}}
P.dZ.prototype={
$2:function(a,b){throw H.c(new P.q("Illegal IPv4 address, "+a,this.a,b))},
$S:function(){return{func:1,v:true,args:[P.r,P.l]}}}
P.e_.prototype={
$2:function(a,b){throw H.c(new P.q("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,v:true,args:[P.r],opt:[,]}}}
P.e0.prototype={
$2:function(a,b){var t,s
if(b-a>4)this.b.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
t=H.b3(C.a.k(this.a,a,b),16,null)
s=J.c4(t)
if(s.A(t,0)||s.ah(t,65535))this.b.$2("each part must be in the range of `0x0..0xFFFF`",a)
return t},
$S:function(){return{func:1,ret:P.l,args:[P.l,P.l]}}}
P.c1.prototype={
gc9:function(){return this.b},
gaX:function(a){var t=this.c
if(t==null)return""
if(C.a.G(t,"["))return C.a.k(t,1,t.length-1)
return t},
gb1:function(a){var t=this.d
if(t==null)return P.hY(this.a)
return t},
gb2:function(a){var t=this.f
return t==null?"":t},
gbO:function(){var t=this.r
return t==null?"":t},
gb3:function(){var t,s
t=this.Q
if(t==null){t=this.f
s=P.r
s=new P.b6(P.hU(t==null?"":t,C.l),[s,s])
this.Q=s
t=s}return t},
gbR:function(){return this.c!=null},
gbT:function(){return this.f!=null},
gbS:function(){return this.r!=null},
i:function(a){var t=this.y
if(t==null){t=this.bv()
this.y=t}return t},
bv:function(){var t,s,r,q
t=this.a
s=t.length!==0?t+":":""
r=this.c
q=r==null
if(!q||t==="file"){t=s+"//"
s=this.b
if(s.length!==0)t=t+H.d(s)+"@"
if(!q)t+=r
s=this.d
if(s!=null)t=t+":"+H.d(s)}else t=s
t+=H.d(this.e)
s=this.f
if(s!=null)t=t+"?"+s
s=this.r
if(s!=null)t=t+"#"+s
return t.charCodeAt(0)==0?t:t},
n:function(a,b){var t,s,r
if(b==null)return!1
if(this===b)return!0
t=J.m(b)
if(!!t.$isal){if(this.a===b.gbf())if(this.c!=null===b.gbR()){s=this.b
r=b.gc9()
if(s==null?r==null:s===r){s=this.gaX(this)
r=t.gaX(b)
if(s==null?r==null:s===r)if(J.B(this.gb1(this),t.gb1(b)))if(J.B(this.e,t.gc_(b))){s=this.f
r=s==null
if(!r===b.gbT()){if(r)s=""
if(s===t.gb2(b)){t=this.r
s=t==null
if(!s===b.gbS()){if(s)t=""
t=t===b.gbO()}else t=!1}else t=!1}else t=!1}else t=!1
else t=!1
else t=!1}else t=!1}else t=!1
else t=!1
return t}return!1},
gt:function(a){var t=this.z
if(t==null){t=this.y
if(t==null){t=this.bv()
this.y=t}t=C.a.gt(t)
this.z=t}return t},
$isal:1,
gbf:function(){return this.a},
gc_:function(a){return this.e}}
P.fk.prototype={
$1:function(a){throw H.c(new P.q("Invalid port",this.a,this.b+1))},
$S:function(){return{func:1,args:[,]}}}
P.dY.prototype={
gc8:function(){var t,s,r,q,p,o,n
t=this.c
if(t!=null)return t
t=this.b
if(0>=t.length)return H.e(t,0)
s=this.a
t=t[0]+1
r=C.a.Y(s,"?",t)
q=s.length
if(r>=0){p=r+1
o=P.aB(s,p,q,C.j,!1)
if(o==null)o=C.a.k(s,p,q)
q=r}else o=null
n=P.aB(s,t,q,C.w,!1)
t=new P.ei(this,"data",null,null,null,n==null?C.a.k(s,t,q):n,o,null,null,null,null,null,null)
this.c=t
return t},
i:function(a){var t,s
t=this.b
if(0>=t.length)return H.e(t,0)
s=this.a
return t[0]===-1?"data:"+s:s}}
P.ff.prototype={
$1:function(a){return new Uint8Array(H.i3(96))},
$S:function(){return{func:1,args:[,]}}}
P.fe.prototype={
$2:function(a,b){var t=this.a
if(a>=t.length)return H.e(t,a)
t=t[a]
J.ix(t,0,96,b)
return t},
$S:function(){return{func:1,ret:P.ax,args:[,,]}}}
P.fg.prototype={
$3:function(a,b,c){var t,s,r
for(t=b.length,s=J.aG(a),r=0;r<t;++r)s.q(a,C.a.p(b,r)^96,c)},
$S:function(){return{func:1,v:true,args:[P.ax,P.r,P.l]}}}
P.fh.prototype={
$3:function(a,b,c){var t,s,r
for(t=C.a.p(b,0),s=C.a.p(b,1),r=J.aG(a);t<=s;++t)r.q(a,(t^96)>>>0,c)},
$S:function(){return{func:1,v:true,args:[P.ax,P.r,P.l]}}}
P.f4.prototype={
gbR:function(){return this.c>0},
gbT:function(){var t=this.f
if(typeof t!=="number")return t.A()
return t<this.r},
gbS:function(){return this.r<this.a.length},
gbf:function(){var t,s
t=this.b
if(t<=0)return""
s=this.x
if(s!=null)return s
s=t===4
if(s&&C.a.G(this.a,"http")){this.x="http"
t="http"}else if(t===5&&C.a.G(this.a,"https")){this.x="https"
t="https"}else if(s&&C.a.G(this.a,"file")){this.x="file"
t="file"}else if(t===7&&C.a.G(this.a,"package")){this.x="package"
t="package"}else{t=C.a.k(this.a,0,t)
this.x=t}return t},
gc9:function(){var t,s
t=this.c
s=this.b+3
return t>s?C.a.k(this.a,s,t-1):""},
gaX:function(a){var t=this.c
return t>0?C.a.k(this.a,t,this.d):""},
gb1:function(a){var t,s
if(this.c>0){t=this.d
if(typeof t!=="number")return t.E()
s=this.e
if(typeof s!=="number")return H.x(s)
s=t+1<s
t=s}else t=!1
if(t){t=this.d
if(typeof t!=="number")return t.E()
return H.b3(C.a.k(this.a,t+1,this.e),null,null)}t=this.b
if(t===4&&C.a.G(this.a,"http"))return 80
if(t===5&&C.a.G(this.a,"https"))return 443
return 0},
gc_:function(a){return C.a.k(this.a,this.e,this.f)},
gb2:function(a){var t,s
t=this.f
s=this.r
if(typeof t!=="number")return t.A()
return t<s?C.a.k(this.a,t+1,s):""},
gbO:function(){var t,s
t=this.r
s=this.a
return t<s.length?C.a.S(s,t+1):""},
gb3:function(){var t=this.f
if(typeof t!=="number")return t.A()
if(t>=this.r)return C.P
t=P.r
return new P.b6(P.hU(this.gb2(this),C.l),[t,t])},
gt:function(a){var t=this.y
if(t==null){t=C.a.gt(this.a)
this.y=t}return t},
n:function(a,b){var t
if(b==null)return!1
if(this===b)return!0
t=J.m(b)
if(!!t.$isal)return this.a===t.i(b)
return!1},
i:function(a){return this.a},
$isal:1}
P.ei.prototype={}
W.j.prototype={}
W.aq.prototype={
i:function(a){return String(a)},
$isaq:1,
$ish:1,
gB:function(a){return a.href}}
W.ca.prototype={
i:function(a){return String(a)},
$ish:1,
gB:function(a){return a.href}}
W.ce.prototype={
gB:function(a){return a.href}}
W.cf.prototype={$ish:1}
W.aM.prototype={$isaM:1}
W.a5.prototype={$ish:1,
gj:function(a){return a.length}}
W.bl.prototype={
aV:function(a,b){return typeof console!="undefined"?console.error(b):null},
dC:function(a){return typeof console!="undefined"?console.info(a):null},
dV:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.aO.prototype={
ay:function(a,b){var t=this.cO(a,b)
return t!=null?t:""},
cO:function(a,b){if(W.iO(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.iR()+b)},
ga5:function(a){return a.display},
sa5:function(a,b){a.display=b},
gj:function(a){return a.length}}
W.by.prototype={}
W.eg.prototype={
ay:function(a,b){var t=this.b
return J.iA(t.gaW(t),b)},
d3:function(a,b){var t
for(t=this.a,t=new H.ac(t,t.gj(t),0,null);t.m();)t.d.style[a]=b},
sa5:function(a,b){this.d3("display",b)},
cu:function(a){var t=P.d7(this.a,!0,null)
this.b=new H.av(t,new W.eh(),[H.a2(t,0),null])}}
W.bN.prototype={}
W.eh.prototype={
$1:function(a){return J.c7(a)},
$S:function(){return{func:1,args:[,]}}}
W.bm.prototype={
ga5:function(a){return this.ay(a,"display")}}
W.bp.prototype={$ish:1}
W.co.prototype={
i:function(a){return String(a)}}
W.bq.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gU(a))+" x "+H.d(this.gT(a))},
n:function(a,b){var t
if(b==null)return!1
t=J.m(b)
if(!t.$isbP)return!1
return a.left===t.gaY(b)&&a.top===t.gba(b)&&this.gU(a)===t.gU(b)&&this.gT(a)===t.gT(b)},
gt:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gU(a)
q=this.gT(a)
return W.hX(W.ao(W.ao(W.ao(W.ao(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gT:function(a){return a.height},
gaY:function(a){return a.left},
gba:function(a){return a.top},
gU:function(a){return a.width},
$isbP:1,
$asbP:function(){}}
W.bW.prototype={
gj:function(a){return this.a.length},
h:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.e(t,b)
return t[b]},
q:function(a,b,c){throw H.c(new P.t("Cannot modify list"))},
gbh:function(a){return W.jq(this)},
$isk:1,
$ask:null,
$isi:1,
$asi:null}
W.bs.prototype={
i:function(a){return a.localName},
bV:function(a,b,c,d,e){a.insertAdjacentHTML(b,c)},
$ish:1,
gbh:function(a){return a.style}}
W.cs.prototype={
gJ:function(a){return a.error}}
W.f.prototype={$isf:1,$isp:1}
W.as.prototype={
d8:function(a,b,c,d){if(c!=null)this.cC(a,b,c,!1)},
dO:function(a,b,c,d){if(c!=null)this.d1(a,b,c,!1)},
cC:function(a,b,c,d){return a.addEventListener(b,H.bh(c,1),!1)},
d1:function(a,b,c,d){return a.removeEventListener(b,H.bh(c,1),!1)}}
W.cN.prototype={
gj:function(a){return a.length}}
W.a8.prototype={
e_:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
dL:function(a,b,c,d){return a.open(b,c,d)},
aj:function(a,b){return a.send(b)},
$isa8:1,
$isp:1,
gdR:function(a){return a.responseText}}
W.cO.prototype={
$1:function(a){return J.iz(a)},
$S:function(){return{func:1,args:[W.a8]}}}
W.cP.prototype={
$1:function(a){var t,s,r,q,p
t=this.b
s=t.status
if(typeof s!=="number")return s.bc()
r=s>=200&&s<300
q=s>307&&s<400
s=r||s===0||s===304||q
p=this.a
if(s)p.dc(0,t)
else p.bL(a)},
$S:function(){return{func:1,args:[,]}}}
W.bv.prototype={}
W.aP.prototype={$isaP:1}
W.cS.prototype={$ish:1}
W.aR.prototype={$isaR:1,
gB:function(a){return a.href}}
W.d8.prototype={
i:function(a){return String(a)},
gB:function(a){return a.href}}
W.aV.prototype={
gJ:function(a){return a.error}}
W.dg.prototype={
dX:function(a,b,c){return a.send(b,c)},
aj:function(a,b){return a.send(b)}}
W.aW.prototype={}
W.dp.prototype={$ish:1}
W.o.prototype={
i:function(a){var t=a.nodeValue
return t==null?this.cn(a):t},
$isp:1}
W.bL.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bx(b,a,null,null,null))
return a[b]},
q:function(a,b,c){throw H.c(new P.t("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isk:1,
$ask:function(){return[W.o]},
$isi:1,
$asi:function(){return[W.o]},
$isK:1,
$asK:function(){return[W.o]},
$isF:1,
$asF:function(){return[W.o]}}
W.bz.prototype={
$ask:function(){return[W.o]},
$asi:function(){return[W.o]},
$isk:1,
$isi:1}
W.bB.prototype={
$ask:function(){return[W.o]},
$asi:function(){return[W.o]},
$isk:1,
$isi:1}
W.dB.prototype={
gj:function(a){return a.length}}
W.dE.prototype={
gJ:function(a){return a.error}}
W.bS.prototype={$ish:1}
W.ef.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
n:function(a,b){var t,s,r
if(b==null)return!1
t=J.m(b)
if(!t.$isbP)return!1
s=a.left
r=t.gaY(b)
if(s==null?r==null:s===r){s=a.top
r=t.gba(b)
if(s==null?r==null:s===r){s=a.width
r=t.gU(b)
if(s==null?r==null:s===r){s=a.height
t=t.gT(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gt:function(a){var t,s,r,q
t=J.a3(a.left)
s=J.a3(a.top)
r=J.a3(a.width)
q=J.a3(a.height)
return W.hX(W.ao(W.ao(W.ao(W.ao(0,t),s),r),q))},
$isbP:1,
$asbP:function(){},
gT:function(a){return a.height},
gaY:function(a){return a.left},
gba:function(a){return a.top},
gU:function(a){return a.width}}
W.en.prototype={$ish:1}
W.eo.prototype={
gT:function(a){return a.height},
gU:function(a){return a.width}}
W.eI.prototype={$ish:1}
W.c_.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bx(b,a,null,null,null))
return a[b]},
q:function(a,b,c){throw H.c(new P.t("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isk:1,
$ask:function(){return[W.o]},
$isi:1,
$asi:function(){return[W.o]},
$isK:1,
$asK:function(){return[W.o]},
$isF:1,
$asF:function(){return[W.o]}}
W.bA.prototype={
$ask:function(){return[W.o]},
$asi:function(){return[W.o]},
$isk:1,
$isi:1}
W.bC.prototype={
$ask:function(){return[W.o]},
$asi:function(){return[W.o]},
$isk:1,
$isi:1}
W.f3.prototype={$ish:1}
W.er.prototype={
Z:function(a,b,c,d){return W.bV(this.a,this.b,a,!1,H.a2(this,0))},
bY:function(a,b,c){return this.Z(a,null,b,c)}}
W.fZ.prototype={}
W.es.prototype={
aS:function(){if(this.b==null)return
this.bI()
this.b=null
this.d=null
return},
b_:function(a,b){if(this.b==null)return;++this.a
this.bI()},
c0:function(a){return this.b_(a,null)},
c2:function(){if(this.b==null||this.a<=0)return;--this.a
this.bG()},
bG:function(){var t=this.d
if(t!=null&&this.a<=0)J.iv(this.b,this.c,t,!1)},
bI:function(){var t=this.d
if(t!=null)J.iD(this.b,this.c,t,!1)},
cv:function(a,b,c,d,e){this.bG()}}
W.et.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bw.prototype={
gD:function(a){return new W.cM(a,this.gj(a),-1,null)},
av:function(a,b,c,d){throw H.c(new P.t("Cannot modify an immutable List."))},
$isk:1,
$ask:null,
$isi:1,
$asi:null}
W.cM.prototype={
m:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.bi(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
gw:function(){return this.d}}
W.f6.prototype={}
P.eL.prototype={
ax:function(a){if(a<=0||a>4294967296)throw H.c(P.hC("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
aZ:function(){return Math.random()}}
P.eW.prototype={
M:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.b.C(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
ax:function(a){var t,s,r
if(a<=0||a>4294967296)throw H.c(P.hC("max must be in range 0 < max \u2264 2^32, was "+a))
t=a-1
if((a&t)>>>0===0){this.M()
return(this.a&t)>>>0}do{this.M()
s=this.a
r=s%a}while(s-r+a>=4294967296)
return r},
aZ:function(){this.M()
var t=this.a
this.M()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
cA:function(a){var t,s,r,q,p,o,n,m
t=J.h7(a,0)?-1:0
do{if(typeof a!=="number")return a.ag()
s=(a&4294967295)>>>0
a=C.e.C(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.e.C(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.b.C(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.b.C(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.b.C(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.b.C(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.b.C(q-n,4294967296)&4294967295)>>>0
this.b=m
n=(n^p)>>>0
this.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o&4294967295)>>>0
this.b=o}while(a!==t)
if(o===0&&n===0)this.a=23063
this.M()
this.M()
this.M()
this.M()}}
P.c9.prototype={$ish:1,
gB:function(a){return a.href}}
P.a4.prototype={$ish:1}
P.cv.prototype={$ish:1}
P.cw.prototype={$ish:1}
P.cx.prototype={$ish:1}
P.cy.prototype={$ish:1}
P.cz.prototype={$ish:1}
P.cA.prototype={$ish:1}
P.cB.prototype={$ish:1}
P.cC.prototype={$ish:1}
P.cD.prototype={$ish:1}
P.cE.prototype={$ish:1,
gB:function(a){return a.href}}
P.cF.prototype={$ish:1}
P.cG.prototype={$ish:1}
P.cH.prototype={$ish:1}
P.cI.prototype={$ish:1}
P.cJ.prototype={$ish:1}
P.cK.prototype={$ish:1}
P.cL.prototype={$ish:1,
gB:function(a){return a.href}}
P.z.prototype={$ish:1}
P.cQ.prototype={$ish:1,
gB:function(a){return a.href}}
P.dd.prototype={$ish:1}
P.de.prototype={$ish:1}
P.dt.prototype={$ish:1,
gB:function(a){return a.href}}
P.dA.prototype={$ish:1,
gB:function(a){return a.href}}
P.w.prototype={
bV:function(a,b,c,d,e){throw H.c(new P.t("Cannot invoke insertAdjacentHtml on SVG."))},
$ish:1}
P.dN.prototype={$ish:1}
P.dO.prototype={$ish:1}
P.aj.prototype={}
P.dQ.prototype={$ish:1,
gB:function(a){return a.href}}
P.e2.prototype={$ish:1,
gB:function(a){return a.href}}
P.e5.prototype={$ish:1}
P.b9.prototype={$ish:1,
gB:function(a){return a.href}}
P.f0.prototype={$ish:1}
P.f1.prototype={$ish:1}
P.f2.prototype={$ish:1}
P.ax.prototype={$isk:1,
$ask:function(){return[P.l]},
$isi:1,
$asi:function(){return[P.l]}}
Q.fz.prototype={
$1:function(a){var t,s,r,q,p
t=window
s="scrollY" in t?C.e.b4(t.scrollY):C.e.b4(t.document.documentElement.scrollTop)
r=window.screen.height
if(typeof r!=="number")return H.x(r)
q=1500-r
if(q>s){t=document.querySelector("body").style
p="center -"+C.b.i(s)+"px"
t.backgroundPosition=p}else{t=document.querySelector("body").style
p="center -"+C.b.i(q)+"px"
t.backgroundPosition=p}},
$S:function(){return{func:1,args:[W.f]}}}
K.a.prototype={}
F.aU.prototype={
i:function(a){return this.b}}
F.bF.prototype={
br:function(a,b){return"("+this.b+")["+H.d(C.c.gaa(a.b.split(".")))+"]: "+H.d(b)},
aV:function(a,b){F.hq(C.m).$1(this.br(C.m,b))}}
O.fB.prototype={
$1:function(a){return H.d(a.bd(1))+" = "+H.d(a.bd(2))+C.a.ai("../",this.a)},
$S:function(){return{func:1,args:[P.df]}}}
O.fC.prototype={
$1:function(a){return O.kp()},
$S:function(){return{func:1,args:[W.f]}}}
A.dw.prototype={
ax:function(a){if(a===0)return 0
return this.cZ(a)},
dJ:function(){return this.ax(4294967295)},
cZ:function(a){var t,s
t=this.a
if(a>4294967295){s=t.aZ()
this.b=C.e.b4(s*4294967295)
return C.e.dn(s*a)}else{s=t.ax(a)
this.b=s
return s}},
ck:function(a){var t=a==null
this.a=t?C.C:P.ju(a)
if(!t)this.b=J.aI(a,1)}}
J.h.prototype.cn=J.h.prototype.i
J.aQ.prototype.co=J.aQ.prototype.i
P.M.prototype.cp=P.M.prototype.al
P.M.prototype.cq=P.M.prototype.ak;(function installTearOffs(){installTearOff(H.az.prototype,"gdH",0,0,0,null,["$0"],["aw"],0)
installTearOff(H.R.prototype,"gcb",0,0,0,null,["$1"],["F"],3)
installTearOff(H.am.prototype,"gdj",0,0,0,null,["$1"],["O"],3)
installTearOff(H,"i4",1,0,0,null,["$1"],["jT"],6)
installTearOff(P,"jW",1,0,0,null,["$1"],["jn"],2)
installTearOff(P,"jX",1,0,0,null,["$1"],["jo"],2)
installTearOff(P,"jY",1,0,0,null,["$1"],["jp"],2)
installTearOff(P,"ig",1,0,0,null,["$0"],["jS"],0)
installTearOff(P.bU.prototype,"gdd",0,0,0,null,["$2","$1"],["bM","bL"],4)
installTearOff(P.H.prototype,"gaH",0,0,0,null,["$2","$1"],["a1","cJ"],4)
var t
installTearOff(t=P.M.prototype,"gby",0,0,0,null,["$0"],["aq"],0)
installTearOff(t,"gbz",0,0,0,null,["$0"],["ar"],0)
installTearOff(t=P.b8.prototype,"gby",0,0,0,null,["$0"],["aq"],0)
installTearOff(t,"gbz",0,0,0,null,["$0"],["ar"],0)
installTearOff(t,"gcP",0,0,0,null,["$1"],["cQ"],function(){return H.ii(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"b8")})
installTearOff(t,"gcT",0,0,0,null,["$2"],["cU"],5)
installTearOff(t,"gcR",0,0,0,null,["$0"],["cS"],0)
installTearOff(P,"jZ",1,0,0,null,["$1"],["fD"],1)
installTearOff(t=W.bl.prototype,"gJ",0,1,0,null,["$1"],["aV"],1)
installTearOff(t,"gdB",0,0,0,null,["$1"],["dC"],1)
installTearOff(t,"gdU",0,0,0,null,["$1"],["dV"],1)
installTearOff(Q,"hs",1,0,0,null,["$0"],["kb"],0)
installTearOff(F.bF.prototype,"gJ",0,1,0,null,["$1"],["aV"],1)
installTearOff(O,"kd",1,0,0,null,["$1"],["kf"],7)})();(function inheritance(){inherit(P.p,null)
var t=P.p
inherit(H.fO,t)
inherit(J.h,t)
inherit(J.cb,t)
inherit(P.bO,t)
inherit(P.J,t)
inherit(H.ac,t)
inherit(P.cX,t)
inherit(H.bt,t)
inherit(H.dX,t)
inherit(H.aN,t)
inherit(H.eQ,t)
inherit(H.az,t)
inherit(H.ep,t)
inherit(H.an,t)
inherit(H.eP,t)
inherit(H.ec,t)
inherit(H.aw,t)
inherit(H.dR,t)
inherit(H.U,t)
inherit(H.R,t)
inherit(H.am,t)
inherit(H.ck,t)
inherit(H.dy,t)
inherit(H.dU,t)
inherit(P.a7,t)
inherit(H.c0,t)
inherit(H.Q,t)
inherit(H.d3,t)
inherit(H.d5,t)
inherit(H.d0,t)
inherit(H.eS,t)
inherit(H.e6,t)
inherit(P.bU,t)
inherit(P.bX,t)
inherit(P.H,t)
inherit(P.bT,t)
inherit(P.ai,t)
inherit(P.dG,t)
inherit(P.M,t)
inherit(P.em,t)
inherit(P.ek,t)
inherit(P.eU,t)
inherit(P.ar,t)
inherit(P.fc,t)
inherit(P.dD,t)
inherit(P.eN,t)
inherit(P.bY,t)
inherit(P.a0,t)
inherit(P.f7,t)
inherit(P.d9,t)
inherit(P.eO,t)
inherit(P.cj,t)
inherit(P.cm,t)
inherit(P.f9,t)
inherit(P.bg,t)
inherit(P.bn,t)
inherit(P.ap,t)
inherit(P.a6,t)
inherit(P.dq,t)
inherit(P.bQ,t)
inherit(P.eu,t)
inherit(P.q,t)
inherit(P.cu,t)
inherit(P.k,t)
inherit(P.ae,t)
inherit(P.df,t)
inherit(P.ag,t)
inherit(P.r,t)
inherit(P.L,t)
inherit(P.al,t)
inherit(P.c1,t)
inherit(P.dY,t)
inherit(P.f4,t)
inherit(W.bl,t)
inherit(W.bN,t)
inherit(W.bm,t)
inherit(W.bw,t)
inherit(W.cM,t)
inherit(W.f6,t)
inherit(P.eL,t)
inherit(P.eW,t)
inherit(P.ax,t)
inherit(K.a,t)
inherit(F.aU,t)
inherit(F.bF,t)
inherit(A.dw,t)
t=J.h
inherit(J.cY,t)
inherit(J.d_,t)
inherit(J.aQ,t)
inherit(J.a9,t)
inherit(J.at,t)
inherit(J.aa,t)
inherit(H.aX,t)
inherit(H.ad,t)
inherit(W.as,t)
inherit(W.by,t)
inherit(W.co,t)
inherit(W.bq,t)
inherit(W.f,t)
inherit(W.d8,t)
inherit(W.dp,t)
inherit(W.bz,t)
inherit(W.ef,t)
inherit(W.bA,t)
t=J.aQ
inherit(J.du,t)
inherit(J.ak,t)
inherit(J.ab,t)
inherit(J.fN,J.a9)
t=J.at
inherit(J.bD,t)
inherit(J.cZ,t)
inherit(P.bE,P.bO)
t=P.bE
inherit(H.b5,t)
inherit(W.bW,t)
inherit(H.ci,H.b5)
t=P.J
inherit(H.i,t)
inherit(H.bG,t)
t=H.i
inherit(H.au,t)
inherit(H.d4,t)
inherit(H.br,H.bG)
inherit(H.db,P.cX)
t=H.au
inherit(H.av,t)
inherit(P.d6,t)
t=H.aN
inherit(H.fF,t)
inherit(H.fG,t)
inherit(H.eK,t)
inherit(H.eq,t)
inherit(H.cT,t)
inherit(H.cU,t)
inherit(H.eT,t)
inherit(H.dS,t)
inherit(H.dT,t)
inherit(H.fH,t)
inherit(H.fu,t)
inherit(H.fv,t)
inherit(H.fw,t)
inherit(H.fx,t)
inherit(H.fy,t)
inherit(H.dP,t)
inherit(H.d1,t)
inherit(H.fp,t)
inherit(H.fq,t)
inherit(H.fr,t)
inherit(P.e9,t)
inherit(P.e8,t)
inherit(P.ea,t)
inherit(P.eb,t)
inherit(P.ev,t)
inherit(P.eD,t)
inherit(P.ez,t)
inherit(P.eA,t)
inherit(P.eB,t)
inherit(P.ex,t)
inherit(P.eC,t)
inherit(P.ew,t)
inherit(P.eG,t)
inherit(P.eH,t)
inherit(P.eF,t)
inherit(P.eE,t)
inherit(P.dJ,t)
inherit(P.dK,t)
inherit(P.dH,t)
inherit(P.dI,t)
inherit(P.dL,t)
inherit(P.dM,t)
inherit(P.ee,t)
inherit(P.ed,t)
inherit(P.eV,t)
inherit(P.fd,t)
inherit(P.fi,t)
inherit(P.eY,t)
inherit(P.eZ,t)
inherit(P.f_,t)
inherit(P.dc,t)
inherit(P.fb,t)
inherit(P.fa,t)
inherit(P.cp,t)
inherit(P.cq,t)
inherit(P.e1,t)
inherit(P.dZ,t)
inherit(P.e_,t)
inherit(P.e0,t)
inherit(P.fk,t)
inherit(P.ff,t)
inherit(P.fe,t)
inherit(P.fg,t)
inherit(P.fh,t)
inherit(W.eh,t)
inherit(W.cO,t)
inherit(W.cP,t)
inherit(W.et,t)
inherit(Q.fz,t)
inherit(O.fB,t)
inherit(O.fC,t)
t=H.ec
inherit(H.aA,t)
inherit(H.bc,t)
inherit(H.cl,H.ck)
t=P.a7
inherit(H.bM,t)
inherit(H.d2,t)
inherit(H.dW,t)
inherit(H.ch,t)
inherit(H.dz,t)
inherit(P.b2,t)
inherit(P.Z,t)
inherit(P.t,t)
inherit(P.bR,t)
inherit(P.ah,t)
inherit(P.W,t)
inherit(P.cn,t)
t=H.dP
inherit(H.dF,t)
inherit(H.aK,t)
inherit(H.bH,H.ad)
t=H.bH
inherit(H.aY,t)
inherit(H.aZ,t)
inherit(H.b_,H.aY)
inherit(H.bI,H.b_)
inherit(H.b0,H.aZ)
inherit(H.bJ,H.b0)
t=H.bI
inherit(H.dh,t)
inherit(H.di,t)
t=H.bJ
inherit(H.dj,t)
inherit(H.dk,t)
inherit(H.dl,t)
inherit(H.dm,t)
inherit(H.dn,t)
inherit(H.bK,t)
inherit(H.b1,t)
inherit(P.e7,P.bU)
t=P.em
inherit(P.ej,t)
inherit(P.el,t)
inherit(P.f5,P.eU)
t=P.ai
inherit(P.b7,t)
inherit(W.er,t)
inherit(P.b8,P.M)
inherit(P.eR,P.b7)
inherit(P.eX,P.fc)
inherit(P.bZ,H.Q)
inherit(P.dC,P.dD)
inherit(P.eJ,P.dC)
inherit(P.eM,P.eJ)
inherit(P.b6,P.d9)
t=P.cj
inherit(P.cc,t)
inherit(P.cr,t)
t=P.cm
inherit(P.cd,t)
inherit(P.e4,t)
inherit(P.e3,P.cr)
t=P.ap
inherit(P.N,t)
inherit(P.l,t)
t=P.Z
inherit(P.b4,t)
inherit(P.cR,t)
inherit(P.ei,P.c1)
t=W.as
inherit(W.o,t)
inherit(W.bv,t)
inherit(W.aW,t)
inherit(W.bS,t)
inherit(W.f3,t)
t=W.o
inherit(W.bs,t)
inherit(W.a5,t)
inherit(W.bp,t)
inherit(W.en,t)
t=W.bs
inherit(W.j,t)
inherit(P.w,t)
t=W.j
inherit(W.aq,t)
inherit(W.ca,t)
inherit(W.ce,t)
inherit(W.cf,t)
inherit(W.aM,t)
inherit(W.cN,t)
inherit(W.aP,t)
inherit(W.cS,t)
inherit(W.aR,t)
inherit(W.aV,t)
inherit(W.dB,t)
inherit(W.eI,t)
inherit(W.aO,W.by)
inherit(W.eg,W.bN)
t=W.f
inherit(W.cs,t)
inherit(W.dE,t)
inherit(W.a8,W.bv)
inherit(W.dg,W.aW)
inherit(W.bB,W.bz)
inherit(W.bL,W.bB)
inherit(W.eo,W.bq)
inherit(W.bC,W.bA)
inherit(W.c_,W.bC)
inherit(W.fZ,W.er)
inherit(W.es,P.dG)
t=P.w
inherit(P.z,t)
inherit(P.a4,t)
inherit(P.cv,t)
inherit(P.cw,t)
inherit(P.cx,t)
inherit(P.cy,t)
inherit(P.cz,t)
inherit(P.cA,t)
inherit(P.cB,t)
inherit(P.cC,t)
inherit(P.cD,t)
inherit(P.cE,t)
inherit(P.cF,t)
inherit(P.cG,t)
inherit(P.cH,t)
inherit(P.cI,t)
inherit(P.cJ,t)
inherit(P.cK,t)
inherit(P.cL,t)
inherit(P.dd,t)
inherit(P.de,t)
inherit(P.dt,t)
inherit(P.dA,t)
inherit(P.dO,t)
inherit(P.e5,t)
inherit(P.b9,t)
inherit(P.f0,t)
inherit(P.f1,t)
inherit(P.f2,t)
t=P.z
inherit(P.c9,t)
inherit(P.cQ,t)
inherit(P.dN,t)
inherit(P.aj,t)
inherit(P.e2,t)
inherit(P.dQ,P.aj)
mixin(H.b5,H.dX)
mixin(H.aY,P.a0)
mixin(H.b_,H.bt)
mixin(H.aZ,P.a0)
mixin(H.b0,H.bt)
mixin(P.bO,P.a0)
mixin(P.b6,P.f7)
mixin(W.by,W.bm)
mixin(W.bN,W.bm)
mixin(W.bz,P.a0)
mixin(W.bB,W.bw)
mixin(W.bA,P.a0)
mixin(W.bC,W.bw)})();(function constants(){C.D=W.a8.prototype
C.E=J.h.prototype
C.c=J.a9.prototype
C.b=J.bD.prototype
C.e=J.at.prototype
C.a=J.aa.prototype
C.L=J.ab.prototype
C.x=J.du.prototype
C.o=J.ak.prototype
C.z=new P.cd(!1)
C.y=new P.cc(C.z)
C.f=new W.bl()
C.A=new P.dq()
C.B=new P.ek()
C.C=new P.eL()
C.d=new P.eX()
C.h=new W.f6()
C.p=new P.a6(0)
C.F=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.q=function(hooks) { return hooks; }
C.G=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.H=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.I=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.r=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.J=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.K=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.t=H.C(makeConstList([127,2047,65535,1114111]),[P.l])
C.i=makeConstList([0,0,32776,33792,1,10240,0,0])
C.j=makeConstList([0,0,65490,45055,65535,34815,65534,18431])
C.k=makeConstList([0,0,26624,1023,65534,2047,65534,2047])
C.N=makeConstList([0,0,32722,12287,65534,34815,65534,18431])
C.u=makeConstList([0,0,24576,1023,65534,34815,65534,18431])
C.v=makeConstList([0,0,32754,11263,65534,34815,65534,18431])
C.w=makeConstList([0,0,65490,12287,65535,34815,65534,18431])
C.m=new F.aU(0,"LogLevel.ERROR")
C.n=new F.aU(1,"LogLevel.WARN")
C.O=new F.aU(3,"LogLevel.VERBOSE")
C.M=H.C(makeConstList([]),[P.r])
C.P=new H.cl(0,{},C.M,[P.r,P.r])
C.l=new P.e3(!1)})();(function staticFields(){$.hy="$cachedFunction"
$.hz="$cachedInvocation"
$.V=0
$.aL=null
$.hb=null
$.h3=null
$.ic=null
$.iq=null
$.fl=null
$.ft=null
$.h4=null
$.aC=null
$.bd=null
$.be=null
$.h_=!1
$.n=C.d
$.hl=0
$.hi=null
$.hh=null
$.hg=null
$.hf=null
$.fW=!0
$.b=!1
$.is=""})();(function lazyInitializers(){lazy($,"he","$get$he",function(){return H.ij("_$dart_dartClosure")})
lazy($,"fP","$get$fP",function(){return H.ij("_$dart_js")})
lazy($,"hm","$get$hm",function(){return H.iZ()})
lazy($,"hn","$get$hn",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.hl
$.hl=t+1
t="expando$key$"+t}return new P.cu(null,t)})
lazy($,"hF","$get$hF",function(){return H.X(H.dV({
toString:function(){return"$receiver$"}}))})
lazy($,"hG","$get$hG",function(){return H.X(H.dV({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"hH","$get$hH",function(){return H.X(H.dV(null))})
lazy($,"hI","$get$hI",function(){return H.X(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"hM","$get$hM",function(){return H.X(H.dV(void 0))})
lazy($,"hN","$get$hN",function(){return H.X(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"hK","$get$hK",function(){return H.X(H.hL(null))})
lazy($,"hJ","$get$hJ",function(){return H.X(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"hP","$get$hP",function(){return H.X(H.hL(void 0))})
lazy($,"hO","$get$hO",function(){return H.X(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"fY","$get$fY",function(){return P.jm()})
lazy($,"bu","$get$bu",function(){var t,s
t=P.ae
s=new P.H(0,P.jl(),null,[t])
s.cz(null,t)
return s})
lazy($,"bf","$get$bf",function(){return[]})
lazy($,"hV","$get$hV",function(){return H.j5([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2])})
lazy($,"ia","$get$ia",function(){return P.jM()})
lazy($,"ds","$get$ds",function(){return new F.bF(!1,"Path Utils")})
lazy($,"dr","$get$dr",function(){return P.j3(P.al,P.l)})})()
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
mangledGlobalNames:{l:"int",N:"double",ap:"num",r:"String",bg:"bool",ae:"Null",k:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[P.p]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,v:true,args:[P.p],opt:[P.ag]},{func:1,v:true,args:[,P.ag]},{func:1,ret:P.r,args:[P.r]},{func:1,v:true,args:[P.r]}],
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
setOrUpdateInterceptorsByTag({Blob:J.h,Client:J.h,DOMError:J.h,DOMImplementation:J.h,File:J.h,FileError:J.h,MediaError:J.h,NavigatorUserMediaError:J.h,PositionError:J.h,Range:J.h,Screen:J.h,WindowClient:J.h,SVGAnimatedLength:J.h,SVGAnimatedLengthList:J.h,SVGAnimatedNumber:J.h,SVGAnimatedNumberList:J.h,SVGAnimatedString:J.h,SQLError:J.h,ArrayBuffer:H.aX,DataView:H.ad,ArrayBufferView:H.ad,Float32Array:H.dh,Float64Array:H.di,Int16Array:H.dj,Int32Array:H.dk,Int8Array:H.dl,Uint16Array:H.dm,Uint32Array:H.dn,Uint8ClampedArray:H.bK,CanvasPixelArray:H.bK,Uint8Array:H.b1,HTMLBRElement:W.j,HTMLCanvasElement:W.j,HTMLContentElement:W.j,HTMLDListElement:W.j,HTMLDataListElement:W.j,HTMLDetailsElement:W.j,HTMLDialogElement:W.j,HTMLDivElement:W.j,HTMLEmbedElement:W.j,HTMLFieldSetElement:W.j,HTMLHRElement:W.j,HTMLHeadElement:W.j,HTMLHeadingElement:W.j,HTMLHtmlElement:W.j,HTMLIFrameElement:W.j,HTMLKeygenElement:W.j,HTMLLIElement:W.j,HTMLLabelElement:W.j,HTMLLegendElement:W.j,HTMLMapElement:W.j,HTMLMenuElement:W.j,HTMLMenuItemElement:W.j,HTMLMetaElement:W.j,HTMLMeterElement:W.j,HTMLModElement:W.j,HTMLOListElement:W.j,HTMLObjectElement:W.j,HTMLOptGroupElement:W.j,HTMLOptionElement:W.j,HTMLOutputElement:W.j,HTMLParagraphElement:W.j,HTMLParamElement:W.j,HTMLPictureElement:W.j,HTMLPreElement:W.j,HTMLProgressElement:W.j,HTMLQuoteElement:W.j,HTMLScriptElement:W.j,HTMLShadowElement:W.j,HTMLSlotElement:W.j,HTMLSourceElement:W.j,HTMLSpanElement:W.j,HTMLStyleElement:W.j,HTMLTableCaptionElement:W.j,HTMLTableCellElement:W.j,HTMLTableDataCellElement:W.j,HTMLTableHeaderCellElement:W.j,HTMLTableColElement:W.j,HTMLTableElement:W.j,HTMLTableRowElement:W.j,HTMLTableSectionElement:W.j,HTMLTemplateElement:W.j,HTMLTextAreaElement:W.j,HTMLTitleElement:W.j,HTMLTrackElement:W.j,HTMLUListElement:W.j,HTMLUnknownElement:W.j,HTMLDirectoryElement:W.j,HTMLFontElement:W.j,HTMLFrameElement:W.j,HTMLMarqueeElement:W.j,HTMLElement:W.j,HTMLAnchorElement:W.aq,HTMLAreaElement:W.ca,HTMLBaseElement:W.ce,HTMLBodyElement:W.cf,HTMLButtonElement:W.aM,CDATASection:W.a5,CharacterData:W.a5,Comment:W.a5,ProcessingInstruction:W.a5,Text:W.a5,CSSStyleDeclaration:W.aO,MSStyleCSSProperties:W.aO,CSS2Properties:W.aO,DocumentFragment:W.bp,ShadowRoot:W.bp,DOMException:W.co,DOMRectReadOnly:W.bq,Element:W.bs,ErrorEvent:W.cs,AnimationEvent:W.f,AnimationPlayerEvent:W.f,ApplicationCacheErrorEvent:W.f,AutocompleteErrorEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CompositionEvent:W.f,CustomEvent:W.f,DeviceLightEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FocusEvent:W.f,FontFaceSetLoadEvent:W.f,GamepadEvent:W.f,GeofencingEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,KeyboardEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MouseEvent:W.f,DragEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PointerEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RelatedEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCIceCandidateEvent:W.f,RTCPeerConnectionIceEvent:W.f,SecurityPolicyViolationEvent:W.f,ServicePortConnectEvent:W.f,ServiceWorkerMessageEvent:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TextEvent:W.f,TouchEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,UIEvent:W.f,WheelEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,SVGZoomEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,MediaStream:W.as,MessagePort:W.as,EventTarget:W.as,HTMLFormElement:W.cN,XMLHttpRequest:W.a8,XMLHttpRequestEventTarget:W.bv,HTMLImageElement:W.aP,HTMLInputElement:W.cS,HTMLLinkElement:W.aR,Location:W.d8,HTMLAudioElement:W.aV,HTMLMediaElement:W.aV,HTMLVideoElement:W.aV,MIDIOutput:W.dg,MIDIInput:W.aW,MIDIPort:W.aW,Navigator:W.dp,Document:W.o,HTMLDocument:W.o,XMLDocument:W.o,Attr:W.o,Node:W.o,NodeList:W.bL,RadioNodeList:W.bL,HTMLSelectElement:W.dB,SpeechRecognitionError:W.dE,Window:W.bS,DOMWindow:W.bS,ClientRect:W.ef,DocumentType:W.en,DOMRect:W.eo,HTMLFrameSetElement:W.eI,NamedNodeMap:W.c_,MozNamedAttrMap:W.c_,ServiceWorker:W.f3,SVGAElement:P.c9,SVGAnimateElement:P.a4,SVGAnimateMotionElement:P.a4,SVGAnimateTransformElement:P.a4,SVGAnimationElement:P.a4,SVGSetElement:P.a4,SVGFEBlendElement:P.cv,SVGFEColorMatrixElement:P.cw,SVGFEComponentTransferElement:P.cx,SVGFECompositeElement:P.cy,SVGFEConvolveMatrixElement:P.cz,SVGFEDiffuseLightingElement:P.cA,SVGFEDisplacementMapElement:P.cB,SVGFEFloodElement:P.cC,SVGFEGaussianBlurElement:P.cD,SVGFEImageElement:P.cE,SVGFEMergeElement:P.cF,SVGFEMorphologyElement:P.cG,SVGFEOffsetElement:P.cH,SVGFESpecularLightingElement:P.cI,SVGFETileElement:P.cJ,SVGFETurbulenceElement:P.cK,SVGFilterElement:P.cL,SVGCircleElement:P.z,SVGClipPathElement:P.z,SVGDefsElement:P.z,SVGEllipseElement:P.z,SVGForeignObjectElement:P.z,SVGGElement:P.z,SVGGeometryElement:P.z,SVGLineElement:P.z,SVGPathElement:P.z,SVGPolygonElement:P.z,SVGPolylineElement:P.z,SVGRectElement:P.z,SVGSwitchElement:P.z,SVGGraphicsElement:P.z,SVGImageElement:P.cQ,SVGMarkerElement:P.dd,SVGMaskElement:P.de,SVGPatternElement:P.dt,SVGScriptElement:P.dA,SVGDescElement:P.w,SVGDiscardElement:P.w,SVGFEDistantLightElement:P.w,SVGFEFuncAElement:P.w,SVGFEFuncBElement:P.w,SVGFEFuncGElement:P.w,SVGFEFuncRElement:P.w,SVGFEMergeNodeElement:P.w,SVGFEPointLightElement:P.w,SVGFESpotLightElement:P.w,SVGMetadataElement:P.w,SVGStopElement:P.w,SVGStyleElement:P.w,SVGTitleElement:P.w,SVGComponentTransferFunctionElement:P.w,SVGElement:P.w,SVGSVGElement:P.dN,SVGSymbolElement:P.dO,SVGTSpanElement:P.aj,SVGTextElement:P.aj,SVGTextPositioningElement:P.aj,SVGTextContentElement:P.aj,SVGTextPathElement:P.dQ,SVGUseElement:P.e2,SVGViewElement:P.e5,SVGLinearGradientElement:P.b9,SVGRadialGradientElement:P.b9,SVGGradientElement:P.b9,SVGCursorElement:P.f0,SVGFEDropShadowElement:P.f1,SVGMPathElement:P.f2})
setOrUpdateLeafTags({Blob:true,Client:true,DOMError:true,DOMImplementation:true,File:true,FileError:true,MediaError:true,NavigatorUserMediaError:true,PositionError:true,Range:true,Screen:true,WindowClient:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedString:true,SQLError:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMRectReadOnly:false,Element:false,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,NotificationEvent:true,PageTransitionEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,WheelEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,SVGZoomEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,MediaStream:true,MessagePort:true,EventTarget:false,HTMLFormElement:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:false,HTMLImageElement:true,HTMLInputElement:true,HTMLLinkElement:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:true,HTMLVideoElement:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,Navigator:true,Document:true,HTMLDocument:true,XMLDocument:true,Attr:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,SpeechRecognitionError:true,Window:true,DOMWindow:true,ClientRect:true,DocumentType:true,DOMRect:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFESpecularLightingElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGEllipseElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGPatternElement:true,SVGScriptElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGFEPointLightElement:true,SVGFESpotLightElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGUseElement:true,SVGViewElement:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})
H.bH.$nativeSuperclassTag="ArrayBufferView"
H.aY.$nativeSuperclassTag="ArrayBufferView"
H.b_.$nativeSuperclassTag="ArrayBufferView"
H.bI.$nativeSuperclassTag="ArrayBufferView"
H.aZ.$nativeSuperclassTag="ArrayBufferView"
H.b0.$nativeSuperclassTag="ArrayBufferView"
H.bJ.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.it(Q.hs(),b)},[])
else (function(b){H.it(Q.hs(),b)})([])})})()
//# sourceMappingURL=NewspostController.dart.js.map
