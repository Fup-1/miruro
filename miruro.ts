/// <reference path="./online-streaming-provider.d.ts" />

/**
 * Miruro online streaming provider for Seanime Denshi.
 *
 * This provider resolves every title and episode dynamically through Miruro's
 * public web-app endpoints. It does not reuse a captured show ID, episode ID,
 * playlist, or signed media URL.
 */
// @ts-ignore - minified inflate implementation is valid JavaScript.
var qn=Uint8Array,Jn=Uint16Array,Yn=Int32Array,Xn=new qn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Zn=new qn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Qn=new qn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),$n=function(e,t){for(var n=new Jn(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new Yn(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return{b:n,r:i}},er=$n(Xn,2),tr=er.b,nr=er.r;tr[28]=258,nr[258]=28;for(var rr=$n(Zn,0),ir=rr.b,ar=rr.r,or=new Jn(32768),sr=0;sr<32768;++sr){var cr=(sr&43690)>>1|(sr&21845)<<1;cr=(cr&52428)>>2|(cr&13107)<<2,cr=(cr&61680)>>4|(cr&3855)<<4,or[sr]=((cr&65280)>>8|(cr&255)<<8)>>1}for(var lr=(function(e,t,n){for(var r=e.length,i=0,a=new Jn(t);i<r;++i)e[i]&&++a[e[i]-1];var o=new Jn(t);for(i=1;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new Jn(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var l=i<<4|e[i],u=t-e[i],d=o[e[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)s[or[d]>>c]=l}else for(s=new Jn(r),i=0;i<r;++i)e[i]&&(s[i]=or[o[e[i]-1]++]>>15-e[i]);return s}),ur=new qn(288),sr=0;sr<144;++sr)ur[sr]=8;for(var sr=144;sr<256;++sr)ur[sr]=9;for(var sr=256;sr<280;++sr)ur[sr]=7;for(var sr=280;sr<288;++sr)ur[sr]=8;for(var dr=new qn(32),sr=0;sr<32;++sr)dr[sr]=5;var fr=lr(ur,9,0),pr=lr(ur,9,1),mr=lr(dr,5,0),hr=lr(dr,5,1),gr=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},_r=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},vr=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},yr=function(e){return(e+7)/8|0},br=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new qn(e.subarray(t,n))},xr=[`unexpected EOF`,`invalid block type`,`invalid length/literal`,`invalid distance`,`stream finished`,`no stream handler`,,`no callback`,`invalid UTF-8 data`,`extra field too long`,`date not in range 1980-2099`,`filename too long`,`stream finishing`,`invalid zip data`],Sr=function(e,t,n){var r=Error(t||xr[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,Sr),!n)throw r;return r},Cr=function(e,t,n,r){var i=e.length,a=r?r.length:0;if(!i||t.f&&!t.l)return n||new qn(0);var o=!n,s=o||t.i!=2,c=t.i;o&&(n=new qn(i*3));var l=function(e){var t=n.length;if(e>t){var r=new qn(Math.max(t*2,e));r.set(n),n=r}},u=t.f||0,d=t.p||0,f=t.b||0,p=t.l,m=t.d,h=t.m,g=t.n,_=i*8;do{if(!p){u=_r(e,d,1);var v=_r(e,d+1,3);if(d+=3,!v){var y=yr(d)+4,b=e[y-4]|e[y-3]<<8,x=y+b;if(x>i){c&&Sr(0);break}s&&l(f+b),n.set(e.subarray(y,x),f),t.b=f+=b,t.p=d=x*8,t.f=u;continue}else if(v==1)p=pr,m=hr,h=9,g=5;else if(v==2){var S=_r(e,d,31)+257,C=_r(e,d+10,15)+4,w=S+_r(e,d+5,31)+1;d+=14;for(var T=new qn(w),E=new qn(19),D=0;D<C;++D)E[Qn[D]]=_r(e,d+D*3,7);d+=C*3;for(var ee=gr(E),te=(1<<ee)-1,ne=lr(E,ee,1),D=0;D<w;){var re=ne[_r(e,d,te)];d+=re&15;var y=re>>4;if(y<16)T[D++]=y;else{var ie=0,ae=0;for(y==16?(ae=3+_r(e,d,3),d+=2,ie=T[D-1]):y==17?(ae=3+_r(e,d,7),d+=3):y==18&&(ae=11+_r(e,d,127),d+=7);ae--;)T[D++]=ie}}var O=T.subarray(0,S),k=T.subarray(S);h=gr(O),g=gr(k),p=lr(O,h,1),m=lr(k,g,1)}else Sr(1);if(d>_){c&&Sr(0);break}}s&&l(f+131072);for(var oe=(1<<h)-1,se=(1<<g)-1,ce=d;;ce=d){var ie=p[vr(e,d)&oe],le=ie>>4;if(d+=ie&15,d>_){c&&Sr(0);break}if(ie||Sr(2),le<256)n[f++]=le;else if(le==256){ce=d,p=null;break}else{var A=le-254;if(le>264){var D=le-257,j=Xn[D];A=_r(e,d,(1<<j)-1)+tr[D],d+=j}var ue=m[vr(e,d)&se],de=ue>>4;ue||Sr(3),d+=ue&15;var k=ir[de];if(de>3){var j=Zn[de];k+=vr(e,d)&(1<<j)-1,d+=j}if(d>_){c&&Sr(0);break}s&&l(f+131072);var M=f+A;if(f<k){var fe=a-k,pe=Math.min(k,M);for(fe+f<0&&Sr(3);f<pe;++f)n[f]=r[fe+f]}for(;f<M;++f)n[f]=n[f-k]}}t.l=p,t.p=ce,t.b=f,t.f=u,p&&(u=1,t.m=h,t.d=m,t.n=g)}while(!u);return f!=n.length&&o?br(n,0,f):n.subarray(0,f)},wr=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8},Tr=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8,e[r+2]|=n>>16},Er=function(e,t){for(var n=[],r=0;r<e.length;++r)e[r]&&n.push({s:r,f:e[r]});var i=n.length,a=n.slice();if(!i)return{t:Nr,l:0};if(i==1){var o=new qn(n[0].s+1);return o[n[0].s]=1,{t:o,l:1}}n.sort(function(e,t){return e.f-t.f}),n.push({s:-1,f:25001});var s=n[0],c=n[1],l=0,u=1,d=2;for(n[0]={s:-1,f:s.f+c.f,l:s,r:c};u!=i-1;)s=n[n[l].f<n[d].f?l++:d++],c=n[l!=u&&n[l].f<n[d].f?l++:d++],n[u++]={s:-1,f:s.f+c.f,l:s,r:c};for(var f=a[0].s,r=1;r<i;++r)a[r].s>f&&(f=a[r].s);var p=new Jn(f+1),m=Dr(n[u-1],p,0);if(m>t){var r=0,h=0,g=m-t,_=1<<g;for(a.sort(function(e,t){return p[t.s]-p[e.s]||e.f-t.f});r<i;++r){var v=a[r].s;if(p[v]>t)h+=_-(1<<m-p[v]),p[v]=t;else break}for(h>>=g;h>0;){var y=a[r].s;p[y]<t?h-=1<<t-p[y]++-1:++r}for(;r>=0&&h;--r){var b=a[r].s;p[b]==t&&(--p[b],++h)}m=t}return{t:new qn(p),l:m}},Dr=function(e,t,n){return e.s==-1?Math.max(Dr(e.l,t,n+1),Dr(e.r,t,n+1)):t[e.s]=n},Or=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new Jn(++t),r=0,i=e[0],a=1,o=function(e){n[r++]=e},s=1;s<=t;++s)if(e[s]==i&&s!=t)++a;else{if(!i&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(i),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(i);a=1,i=e[s]}return{c:n.subarray(0,r),n:t}},kr=function(e,t){for(var n=0,r=0;r<t.length;++r)n+=e[r]*t[r];return n},Ar=function(e,t,n){var r=n.length,i=yr(t+2);e[i]=r&255,e[i+1]=r>>8,e[i+2]=e[i]^255,e[i+3]=e[i+1]^255;for(var a=0;a<r;++a)e[i+a+4]=n[a];return(i+4+r)*8},jr=function(e,t,n,r,i,a,o,s,c,l,u){wr(t,u++,n),++i[256];for(var d=Er(i,15),f=d.t,p=d.l,m=Er(a,15),h=m.t,g=m.l,_=Or(f),v=_.c,y=_.n,b=Or(h),x=b.c,S=b.n,C=new Jn(19),w=0;w<v.length;++w)++C[v[w]&31];for(var w=0;w<x.length;++w)++C[x[w]&31];for(var T=Er(C,7),E=T.t,D=T.l,ee=19;ee>4&&!E[Qn[ee-1]];--ee);var te=l+5<<3,ne=kr(i,ur)+kr(a,dr)+o,re=kr(i,f)+kr(a,h)+o+14+3*ee+kr(C,E)+2*C[16]+3*C[17]+7*C[18];if(c>=0&&te<=ne&&te<=re)return Ar(t,u,e.subarray(c,c+l));var ie,ae,O,k;if(wr(t,u,1+(re<ne)),u+=2,re<ne){ie=lr(f,p,0),ae=f,O=lr(h,g,0),k=h;var oe=lr(E,D,0);wr(t,u,y-257),wr(t,u+5,S-1),wr(t,u+10,ee-4),u+=14;for(var w=0;w<ee;++w)wr(t,u+3*w,E[Qn[w]]);u+=3*ee;for(var se=[v,x],ce=0;ce<2;++ce)for(var le=se[ce],w=0;w<le.length;++w){var A=le[w]&31;wr(t,u,oe[A]),u+=E[A],A>15&&(wr(t,u,le[w]>>5&127),u+=le[w]>>12)}}else ie=fr,ae=ur,O=mr,k=dr;for(var w=0;w<s;++w){var j=r[w];if(j>255){var A=j>>18&31;Tr(t,u,ie[A+257]),u+=ae[A+257],A>7&&(wr(t,u,j>>23&31),u+=Xn[A]);var ue=j&31;Tr(t,u,O[ue]),u+=k[ue],ue>3&&(Tr(t,u,j>>5&8191),u+=Zn[ue])}else Tr(t,u,ie[j]),u+=ae[j]}return Tr(t,u,ie[256]),u+ae[256]},Mr=new Yn([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Nr=new qn(0),Pr=function(e,t,n,r,i,a){var o=a.z||e.length,s=new qn(r+o+5*(1+Math.ceil(o/7e3))+i),c=s.subarray(r,s.length-i),l=a.l,u=(a.r||0)&7;if(t){u&&(c[0]=a.r>>3);for(var d=Mr[t-1],f=d>>13,p=d&8191,m=(1<<n)-1,h=a.p||new Jn(32768),g=a.h||new Jn(m+1),_=Math.ceil(n/3),v=2*_,y=function(t){return(e[t]^e[t+1]<<_^e[t+2]<<v)&m},b=new Yn(25e3),x=new Jn(288),S=new Jn(32),C=0,w=0,T=a.i||0,E=0,D=a.w||0,ee=0;T+2<o;++T){var te=y(T),ne=T&32767,re=g[te];if(h[ne]=re,g[te]=ne,D<=T){var ie=o-T;if((C>7e3||E>24576)&&(ie>423||!l)){u=jr(e,c,0,b,x,S,w,E,ee,T-ee,u),E=C=w=0,ee=T;for(var ae=0;ae<286;++ae)x[ae]=0;for(var ae=0;ae<30;++ae)S[ae]=0}var O=2,k=0,oe=p,se=ne-re&32767;if(ie>2&&te==y(T-se))for(var ce=Math.min(f,ie)-1,le=Math.min(32767,T),A=Math.min(258,ie);se<=le&&--oe&&ne!=re;){if(e[T+O]==e[T+O-se]){for(var j=0;j<A&&e[T+j]==e[T+j-se];++j);if(j>O){if(O=j,k=se,j>ce)break;for(var ue=Math.min(se,j-2),de=0,ae=0;ae<ue;++ae){var M=T-se+ae&32767,fe=M-h[M]&32767;fe>de&&(de=fe,re=M)}}}ne=re,re=h[ne],se+=ne-re&32767}if(k){b[E++]=268435456|nr[O]<<18|ar[k];var pe=nr[O]&31,me=ar[k]&31;w+=Xn[pe]+Zn[me],++x[257+pe],++S[me],D=T+O,++C}else b[E++]=e[T],++x[e[T]]}}for(T=Math.max(T,D);T<o;++T)b[E++]=e[T],++x[e[T]];u=jr(e,c,l,b,x,S,w,E,ee,T-ee,u),l||(a.r=u&7|c[u/8|0]<<3,u-=7,a.h=g,a.p=h,a.i=T,a.w=D)}else{for(var T=a.w||0;T<o+l;T+=65535){var he=T+65535;he>=o&&(c[u/8|0]=l,he=o),u=Ar(c,u+1,e.subarray(T,he))}a.i=o}return br(s,0,r+yr(u)+i)},Fr=(function(){for(var e=new Int32Array(256),t=0;t<256;++t){for(var n=t,r=9;--r;)n=(n&1&&-306674912)^n>>>1;e[t]=n}return e})(),Ir=function(){var e=-1;return{p:function(t){for(var n=e,r=0;r<t.length;++r)n=Fr[n&255^t[r]]^n>>>8;e=n},d:function(){return~e}}},Lr=function(e,t,n,r,i){if(!i&&(i={l:1},t.dictionary)){var a=t.dictionary.subarray(-32768),o=new qn(a.length+e.length);o.set(a),o.set(e,a.length),e=o,i.w=a.length}return Pr(e,t.level==null?6:t.level,t.mem==null?i.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+t.mem,n,r,i)},Rr=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8},zr=function(e,t){var n=t.filename;if(e[0]=31,e[1]=139,e[2]=8,e[8]=t.level<2?4:t.level==9?2:0,e[9]=3,t.mtime!=0&&Rr(e,4,Math.floor(new Date(t.mtime||Date.now())/1e3)),n){e[3]=8;for(var r=0;r<=n.length;++r)e[r+10]=n.charCodeAt(r)}},Br=function(e){(e[0]!=31||e[1]!=139||e[2]!=8)&&Sr(6,`invalid gzip data`);var t=e[3],n=10;t&4&&(n+=(e[10]|e[11]<<8)+2);for(var r=(t>>3&1)+(t>>4&1);r>0;r-=!e[n++]);return n+(t&2)},Vr=function(e){var t=e.length;return(e[t-4]|e[t-3]<<8|e[t-2]<<16|e[t-1]<<24)>>>0},Hr=function(e){return 10+(e.filename?e.filename.length+1:0)},Ur=function(e,t){return((e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31)&&Sr(6,`invalid zlib data`),(e[1]>>5&1)==+!t&&Sr(6,`invalid zlib data: `+(e[1]&32?`need`:`unexpected`)+` dictionary`),(e[1]>>3&4)+2};function Wr(e,t){return Cr(e,{i:2},t&&t.out,t&&t.dictionary)}function Gr(e,t){t||={};var n=Ir(),r=e.length;n.p(e);var i=Lr(e,t,Hr(t),8),a=i.length;return zr(i,t),Rr(i,a-8,n.d()),Rr(i,a-4,r),i}function Kr(e,t){var n=Br(e);return n+8>e.length&&Sr(6,`invalid gzip data`),Cr(e.subarray(n,-8),{i:2},t&&t.out||new qn(Vr(e)),t&&t.dictionary)}function qr(e,t){return Cr(e.subarray(Ur(e,t&&t.dictionary),-4),{i:2},t&&t.out,t&&t.dictionary)}function Jr(e,t){return e[0]==31&&e[1]==139&&e[2]==8?Kr(e,t):(e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31?Wr(e,t):qr(e,t)}


class Provider {
  private readonly baseUrl = "https://www.miruro.tv";
  private readonly userAgent =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
    "(KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36";

  private pipeKey: Uint8Array | null = null;
  private protocolVersion = "0.2.0";
  private configPromise: Promise<void> | null = null;
  private readonly episodeCache = new Map<string, any>();
  private debugSequence = 0;
  private debugOverride: boolean | null = null;

  private isDebugEnabled(context?: any): boolean {
    const globalObject: any =
      typeof globalThis !== "undefined" ? (globalThis as any) : {};

    const candidates = [
      context?.debug,
      context?.userConfig?.debug,
      context?.config?.debug,
      (this as any)?.debug,
      (this as any)?.userConfig?.debug,
      (this as any)?.config?.debug,
      globalObject?.userConfig?.debug,
      globalObject?.config?.debug,
      globalObject?.extensionConfig?.debug,
      globalObject?.__USER_CONFIG__?.debug,
      globalObject?.__SEANIME_EXTENSION_CONFIG__?.debug,
    ];

    for (const value of candidates) {
      if (typeof value === "boolean") {
        this.debugOverride = value;
        return value;
      }

      if (typeof value === "string") {
        const normalized = value.trim().toLowerCase();
        if (normalized === "true" || normalized === "1" || normalized === "yes") {
          this.debugOverride = true;
          return true;
        }
        if (normalized === "false" || normalized === "0" || normalized === "no") {
          this.debugOverride = false;
          return false;
        }
      }
    }

    if (this.debugOverride !== null) return this.debugOverride;

    // Diagnostic build default. This guarantees useful logs even when an older
    // Seanime build does not expose extension userConfig to the provider VM.
    return true;
  }

  private nextTrace(stage: string): string {
    this.debugSequence += 1;
    return `${stage}-${this.debugSequence}`;
  }

  private debug(
    stage: string,
    message: string,
    details?: any,
    context?: any
  ): void {
    if (!this.isDebugEnabled(context)) return;

    const safeDetails = this.sanitizeDebugValue(details);
    if (safeDetails === undefined) {
      console.log(`[Miruro Debug][${stage}] ${message}`);
    } else {
      console.log(`[Miruro Debug][${stage}] ${message}`, safeDetails);
    }
  }

  private debugError(
    stage: string,
    message: string,
    error?: any,
    context?: any
  ): void {
    if (!this.isDebugEnabled(context)) return;

    console.error(`[Miruro Debug][${stage}] ${message}`, {
      name: String(error?.name || "Error"),
      message: String(error?.message || error || "Unknown error"),
      stack: String(error?.stack || "").slice(0, 2000),
    });
  }

  private sanitizeDebugValue(value: any, depth = 0): any {
    if (value === undefined) return undefined;
    if (value === null) return null;
    if (depth > 3) return "[max-depth]";

    if (typeof value === "string") {
      if (/^https?:\/\//i.test(value)) {
        try {
          const url = new URL(value);
          return `${url.origin}${url.pathname}`;
        } catch {
          return value.slice(0, 300);
        }
      }
      return value.length > 500 ? value.slice(0, 500) + "…" : value;
    }

    if (
      typeof value === "number" ||
      typeof value === "boolean"
    ) {
      return value;
    }

    if (Array.isArray(value)) {
      return value
        .slice(0, 20)
        .map((item) => this.sanitizeDebugValue(item, depth + 1));
    }

    if (typeof value === "object") {
      const result: Record<string, any> = {};
      for (const [key, item] of Object.entries(value).slice(0, 30)) {
        if (/token|secret|authorization|cookie|password|pipekey|signature/i.test(key)) {
          result[key] = "[redacted]";
        } else {
          result[key] = this.sanitizeDebugValue(item, depth + 1);
        }
      }
      return result;
    }

    return String(value);
  }

  getSettings(): Settings {
    this.debug("init", "Provider getSettings() called", {
      version: "1.1.4",
      baseUrl: this.baseUrl,
      debugEnabled: this.isDebugEnabled(),
    });

    return {
      episodeServers: [
        "Auto",
        "HD-1",
        "HD-2",
        "Default",
        "Yt-mp4",
        "Bonk",
        "Ally",
        "Pewe",
        "Kiwi",
        "Hop",
        "Bee",
        "Moo",
      ],
      supportsDub: true,
    };
  }

  async search(query: SearchOptions): Promise<SearchResult[]> {
    const trace = this.nextTrace("search");
    const mode: "sub" | "dub" = query.dub ? "dub" : "sub";

    this.debug(trace, "search() started", {
      query: query?.query,
      dub: query?.dub,
      mediaId:
        (query as any)?.media?.id ||
        (query as any)?.media?.anilistId ||
        (query as any)?.media?.mediaId ||
        null,
    }, query);
    const media: any = (query as any).media || {};
    const directId = this.getAniListId(media);

    if (directId) {
      const title =
        media.englishTitle ||
        media.romajiTitle ||
        media.title?.english ||
        media.title?.romaji ||
        media.title?.native ||
        media.title ||
        query.query;

      this.debug(trace, "Using direct AniList ID supplied by Seanime", {
        directId,
        mode,
        title,
      }, query);

      return [
        {
          id: `${directId}|${mode}`,
          title: String(title || query.query),
          url: `${this.baseUrl}/info/${directId}`,
          subOrDub: mode,
        },
      ];
    }

    this.debug(trace, "No direct AniList ID; calling Miruro search API", {
      query: query.query,
      mode,
    }, query);

    const data: any[] = await this.secureGet("search", {
      q: query.query,
      limit: 15,
      offset: 0,
      sort: "POPULARITY_DESC",
      type: "ANIME",
    });

    const requestedTitle = this.normalizeTitle(query.query);
    const startYear = Number(media?.startDate?.year || 0);
    const startMonth = Number(media?.startDate?.month || 0);
    const requestedFormat = String(media?.format || "").toUpperCase();

    const scored = (Array.isArray(data) ? data : [])
      .filter((item: any) => {
        if (!query.dub) return true;
        const languages = Array.isArray(item?.dubLanguages)
          ? item.dubLanguages.map((value: any) => String(value).toLowerCase())
          : [];
        return languages.length === 0 || languages.includes("english");
      })
      .map((item: any) => {
        const titles = [
          item?.title?.english,
          item?.title?.romaji,
          item?.title?.native,
          item?.title?.userPreferred,
        ]
          .filter(Boolean)
          .map((value: any) => this.normalizeTitle(String(value)));

        let score = 0;
        if (titles.some((title: string) => title === requestedTitle)) score += 100;
        if (
          titles.some(
            (title: string) =>
              title.includes(requestedTitle) || requestedTitle.includes(title)
          )
        ) {
          score += 40;
        }

        if (startYear && Number(item?.startDate?.year) === startYear) score += 25;
        if (startMonth && Number(item?.startDate?.month) === startMonth) score += 10;
        if (
          requestedFormat &&
          String(item?.format || "").toUpperCase() === requestedFormat
        ) {
          score += 10;
        }

        return { item, score };
      })
      .sort((a: any, b: any) => b.score - a.score);

    this.debug(trace, "Miruro search API completed", {
      rawResults: Array.isArray(data) ? data.length : 0,
      scoredResults: scored.length,
    }, query);

    return scored.slice(0, 10).map(({ item }: any) => ({
      id: `${item.id}|${mode}`,
      title:
        item?.title?.english ||
        item?.title?.romaji ||
        item?.title?.native ||
        item?.title?.userPreferred ||
        query.query,
      url: `${this.baseUrl}/info/${item.id}`,
      subOrDub: mode,
    }));
  }

  async findEpisodes(providerId: string): Promise<Episode[]> {
    const trace = this.nextTrace("episodes");
    this.debug(trace, "findEpisodes() started", { providerId });

    const parsed = this.parseProviderId(providerId);
    this.debug(trace, "Parsed provider ID", parsed);
    const episodeData = await this.getEpisodeData(parsed.anilistId);
    const providers = episodeData?.providers || {};

    this.debug(trace, "Episode API returned provider data", {
      anilistId: parsed.anilistId,
      mode: parsed.mode,
      providers: Object.keys(providers),
    });
    const merged = new Map<number, Episode>();

    for (const providerName of this.providerOrder(providers)) {
      const list = providers?.[providerName]?.episodes?.[parsed.mode];
      if (!Array.isArray(list)) continue;

      for (const item of list) {
        const number = Number(item?.number);
        if (!Number.isFinite(number) || number <= 0) continue;

        const existing = merged.get(number);
        const title = String(item?.title || `Episode ${number}`);

        if (!existing) {
          merged.set(number, {
            id: `${parsed.anilistId}|${parsed.mode}`,
            number,
            title,
            url: `${this.baseUrl}/watch/${parsed.anilistId}?ep=${number}`,
          });
        } else if (
          (!existing.title || /^Episode\s+\d+$/i.test(existing.title)) &&
          title
        ) {
          existing.title = title;
        }
      }
    }

    const episodes = Array.from(merged.values()).sort(
      (a, b) => Number(a.number) - Number(b.number)
    );

    this.debug(trace, "Episode list built", {
      episodeCount: episodes.length,
      firstEpisode: episodes[0]?.number || null,
      lastEpisode: episodes[episodes.length - 1]?.number || null,
    });

    if (!episodes.length) {
      throw new Error(
        `Miruro returned no ${parsed.mode} episodes for AniList ID ${parsed.anilistId}`
      );
    }

    return episodes;
  }

  async findEpisodeServer(
    episode: EpisodeDetails,
    requestedServer: string
  ): Promise<EpisodeServer> {
    const trace = this.nextTrace("source");
    this.debug(trace, "findEpisodeServer() started", {
      episodeId: episode?.id,
      episodeNumber: episode?.number,
      requestedServer,
    });

    const parsed = this.parseProviderId(episode.id);
    const episodeNumber = Number(episode.number);

    if (!Number.isFinite(episodeNumber) || episodeNumber <= 0) {
      throw new Error(`Invalid episode number: ${episode.number}`);
    }

    const episodeData = await this.getEpisodeData(parsed.anilistId);
    const providers = episodeData?.providers || {};
    const order = this.providerOrder(providers);
    const requested = String(requestedServer || "Auto").trim();
    const requestedLower = requested.toLowerCase();
    const providerSelection = order.find(
      (name) => name.toLowerCase() === requestedLower
    );

    const candidates = providerSelection
      ? [providerSelection, ...order.filter((name) => name !== providerSelection)]
      : order;

    this.debug(trace, "Source provider candidates selected", {
      anilistId: parsed.anilistId,
      mode: parsed.mode,
      requested,
      candidates,
    });

    const errors: string[] = [];
    let automaticFallback: {
      provider: string;
      stream: any;
      sourceData: any;
    } | null = null;

    for (const providerName of candidates) {
      const list = providers?.[providerName]?.episodes?.[parsed.mode];
      if (!Array.isArray(list)) continue;

      const providerEpisode = list.find(
        (item: any) => Number(item?.number) === episodeNumber
      );
      if (!providerEpisode?.id) continue;

      for (const category of this.categoryCandidates(
        providerName,
        parsed.mode
      )) {
        try {
          const query: Record<string, any> = {
            episodeId: String(providerEpisode.id),
            provider: providerName,
            category,
          };

          // Miruro's Bonk adapter uses the AniList ID when resolving sources.
          if (providerName === "bonk") {
            query.anilistId = Number(parsed.anilistId);
          }

          this.debug(trace, "Trying Miruro source adapter", {
            providerName,
            category,
            episodeNumber,
            episodeId: providerEpisode.id,
          });

          const sourceData = await this.secureGet("sources", query);
          const streams = this.playableStreams(sourceData);

          this.debug(trace, "Source adapter returned", {
            providerName,
            category,
            playableStreamCount: streams.length,
            subtitleCount: Array.isArray(sourceData?.subtitles)
              ? sourceData.subtitles.length
              : Array.isArray(sourceData?.tracks)
                ? sourceData.tracks.length
                : 0,
          });

          if (!streams.length) {
            errors.push(`${providerName}/${category}: no HLS or MP4 streams`);
            continue;
          }

          const exact = streams.find(
            (stream: any) =>
              String(stream?.server || "").toLowerCase() === requestedLower
          );

          const preferred =
            streams.find((stream: any) => Boolean(stream?.default)) ||
            streams.find(
              (stream: any) =>
                String(stream?.type || "").toLowerCase() === "hls"
            ) ||
            streams[0];

          if (!automaticFallback && preferred) {
            automaticFallback = {
              provider: providerName,
              stream: preferred,
              sourceData,
            };
          }

          if (providerSelection && providerName === providerSelection) {
            return this.buildEpisodeServer(
              providerName,
              preferred,
              sourceData,
              requested
            );
          }

          if (requestedLower === "auto") {
            return this.buildEpisodeServer(
              providerName,
              preferred,
              sourceData,
              requested
            );
          }

          if (exact) {
            return this.buildEpisodeServer(
              providerName,
              exact,
              sourceData,
              requested
            );
          }
        } catch (error: any) {
          this.debugError(
            trace,
            `Source adapter failed: ${providerName}/${category}`,
            error
          );
          errors.push(
            `${providerName}/${category}: ${error?.message || String(error)}`
          );
        }
      }
    }

    // A named server is not present on every show. Fall back to the first
    // playable stream so selecting HD-1 does not make an Ally-only show fail.
    if (automaticFallback) {
      return this.buildEpisodeServer(
        automaticFallback.provider,
        automaticFallback.stream,
        automaticFallback.sourceData,
        requested
      );
    }

    throw new Error(
      `No playable Miruro stream for episode ${episodeNumber}. ${errors.join(
        " | "
      )}`
    );
  }

  private async getEpisodeData(anilistId: string): Promise<any> {
    if (this.episodeCache.has(anilistId)) {
      this.debug("cache", "Episode data cache hit", { anilistId });
      return this.episodeCache.get(anilistId);
    }

    this.debug("cache", "Episode data cache miss", { anilistId });
    const data = await this.secureGet("episodes", { anilistId });
    this.episodeCache.set(anilistId, data);
    return data;
  }

  private providerOrder(providers: Record<string, any>): string[] {
    const preferred = ["bonk", "ally", "pewe", "kiwi", "hop", "bee", "moo"];
    const available = Object.keys(providers || {});

    return [
      ...preferred.filter((name) => available.includes(name)),
      ...available.filter((name) => !preferred.includes(name)),
    ];
  }

  private categoryCandidates(
    providerName: string,
    mode: "sub" | "dub"
  ): string[] {
    if (mode === "dub") return ["dub"];
    if (providerName === "bonk") return ["ssub", "sub"];
    return ["sub", "ssub"];
  }

  private playableStreams(sourceData: any): any[] {
    const streams = Array.isArray(sourceData?.streams)
      ? sourceData.streams
      : Array.isArray(sourceData?.sources)
        ? sourceData.sources
        : [];

    return streams.filter((stream: any) => {
      const type = String(stream?.type || "").toLowerCase();
      const url = String(stream?.url || stream?.file || "").trim();
      return (
        Boolean(url) &&
        stream?.isActive !== false &&
        (type === "hls" ||
          type === "m3u8" ||
          type === "mp4" ||
          /\.m3u8(?:$|\?)/i.test(url) ||
          /\.mp4(?:$|\?)/i.test(url))
      );
    });
  }

  private buildEpisodeServer(
    providerName: string,
    stream: any,
    sourceData: any,
    requestedServer: string
  ): EpisodeServer {
    const url = String(stream?.url || stream?.file || "").trim();
    const rawType = String(stream?.type || "").toLowerCase();
    const type =
      rawType === "hls" || rawType === "m3u8" || /\.m3u8(?:$|\?)/i.test(url)
        ? "m3u8"
        : "mp4";

    const mediaHost = this.safeHostname(url);
    const isUltracloud =
      mediaHost === "ultracloud.cc" ||
      mediaHost.endsWith(".ultracloud.cc");

    // Firefox shows that Ultracloud only serves Miruro playlists when the
    // request carries Miruro's own page origin and referer. Source adapters
    // may report an embed-host referer, which causes Seanime's media proxy to
    // stall indefinitely.
    const referer = isUltracloud
      ? this.baseUrl + "/"
      : String(
          stream?.referer ||
            this.getHeaderCaseInsensitive(sourceData?.headers, "referer") ||
            this.baseUrl + "/"
        );

    const origin = isUltracloud
      ? this.baseUrl
      : this.safeOrigin(referer, url);

    const cleanHeaders = this.normalizePlaybackHeaders(sourceData?.headers);
    const playbackHeaders: Record<string, string> = {
      ...cleanHeaders,
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      Referer: referer,
      Origin: origin,
      "User-Agent": this.userAgent,
      Pragma: "no-cache",
      "Cache-Control": "no-cache",
    };

    this.debug("playback", "Built final playback source", {
      providerName,
      requestedServer,
      mediaHost,
      type,
      isUltracloud,
      referer,
      origin,
      url,
      headerNames: Object.keys(playbackHeaders),
    });

    const subtitleItems = Array.isArray(sourceData?.subtitles)
      ? sourceData.subtitles
      : Array.isArray(sourceData?.tracks)
        ? sourceData.tracks
        : [];

    const subtitles: Subtitle[] = subtitleItems
      .filter((item: any) => {
        const kind = String(item?.kind || "captions").toLowerCase();
        return kind === "captions" || kind === "subtitles";
      })
      .map((item: any, index: number) => ({
        id: String(item?.id || item?.language || item?.lang || `sub-${index}`),
        url: String(item?.file || item?.url || "").trim(),
        language: String(
          item?.label || item?.language || item?.lang || "Unknown"
        ),
        isDefault: Boolean(item?.default),
      }))
      .filter((item: Subtitle) => item.url.length > 0);

    return {
      server: String(
        stream?.server ||
          (requestedServer.toLowerCase() === "auto"
            ? providerName
            : requestedServer)
      ),
      headers: playbackHeaders,
      videoSources: [
        {
          url,
          type,
          quality: String(stream?.quality || "auto"),
          subtitles,
        },
      ],
    };
  }

  private safeHostname(value: string): string {
    try {
      return new URL(value).hostname.toLowerCase();
    } catch {
      return "";
    }
  }

  private getHeaderCaseInsensitive(
    headers: Record<string, any> | null | undefined,
    name: string
  ): string | null {
    if (!headers || typeof headers !== "object") return null;

    const target = name.toLowerCase();
    for (const [key, value] of Object.entries(headers)) {
      if (key.toLowerCase() === target && value != null) {
        return String(value);
      }
    }

    return null;
  }

  private normalizePlaybackHeaders(
    headers: Record<string, any> | null | undefined
  ): Record<string, string> {
    const result: Record<string, string> = {};
    if (!headers || typeof headers !== "object") return result;

    // Remove values that will be set explicitly below. This prevents duplicate
    // differently-cased Referer/Origin/User-Agent headers in Go's HTTP client.
    const reserved = new Set([
      "referer",
      "origin",
      "user-agent",
      "accept",
      "accept-language",
      "cache-control",
      "pragma",
      "cookie",
      "authorization",
    ]);

    for (const [key, value] of Object.entries(headers)) {
      if (reserved.has(key.toLowerCase())) continue;
      if (value == null) continue;
      result[key] = String(value);
    }

    return result;
  }

  private safeOrigin(referer: string, mediaUrl: string): string {
    try {
      return new URL(referer).origin;
    } catch {
      try {
        return new URL(mediaUrl).origin;
      } catch {
        return this.baseUrl;
      }
    }
  }

  private parseProviderId(value: string): {
    anilistId: string;
    mode: "sub" | "dub";
  } {
    const [rawId, rawMode] = String(value || "").split("|");
    const id = Number(rawId);

    if (!Number.isInteger(id) || id <= 0) {
      throw new Error(`Invalid Miruro AniList ID: ${rawId}`);
    }

    return {
      anilistId: String(id),
      mode: rawMode === "dub" ? "dub" : "sub",
    };
  }

  private getAniListId(media: any): string | null {
    const candidates = [
      media?.id,
      media?.anilistId,
      media?.anilistID,
      media?.anilist_id,
      media?.mediaId,
      media?.mediaID,
    ];

    for (const candidate of candidates) {
      const value = Number(candidate);
      if (Number.isInteger(value) && value > 0) return String(value);
    }

    for (const possibleUrl of [
      media?.siteUrl,
      media?.url,
      media?.anilistUrl,
    ]) {
      const match = String(possibleUrl || "").match(
        /anilist\.co\/anime\/(\d+)/i
      );
      if (match) return match[1];
    }

    return null;
  }

  private normalizeTitle(value: string): string {
    return String(value || "")
      .toLowerCase()
      .replace(/\b(season|cour|part)\b/g, "")
      .replace(/\d+(st|nd|rd|th)\b/g, (value) =>
        value.replace(/st|nd|rd|th/i, "")
      )
      .replace(/[^a-z0-9]+/g, "");
  }

  private async secureGet(
    path: string,
    query: Record<string, any>
  ): Promise<any> {
    const trace = this.nextTrace(`api-${path}`);
    const startedAt = Date.now();

    this.debug(trace, "secureGet() started", {
      path,
      query: this.removeUndefined(query),
      protocolVersion: this.protocolVersion,
    });

    try {
      await this.ensurePipeConfig();

      const envelope = {
        path,
        method: "GET",
        query: this.removeUndefined(query),
        body: null,
        version: this.protocolVersion,
      };

      const encoded = this.base64UrlEncode(
        this.encodeUtf8(JSON.stringify(envelope))
      );

      const response = await fetch(
        `${this.baseUrl}/api/secure/pipe?e=${encodeURIComponent(encoded)}`,
        {
          headers: {
            Accept: "text/plain, application/json",
            Referer: this.baseUrl + "/",
            "User-Agent": this.userAgent,
          },
        }
      );

      this.debug(trace, "Miruro pipe response received", {
        status: response.status,
        statusText: response.statusText,
        contentType: response.headers.get("content-type"),
        obfuscation: response.headers.get("x-obfuscated"),
        protocolVersion: response.headers.get("x-protocol-version"),
        elapsedMs: Date.now() - startedAt,
      });

      if (!response.ok) {
        throw new Error(
          `Miruro ${path} request failed: ${response.status} ${response.statusText}`
        );
      }

      const text = await response.text();
      const obfuscation = response.headers.get("x-obfuscated");

      if (!obfuscation) {
        const plainData = JSON.parse(text);
        this.debug(trace, "Decoded plain JSON response", {
          resultType: Array.isArray(plainData) ? "array" : typeof plainData,
          resultCount: Array.isArray(plainData)
            ? plainData.length
            : Object.keys(plainData || {}).length,
        });
        return plainData;
      }

      let bytes = this.base64UrlDecode(text.trim());

      if (obfuscation === "2") {
        if (!this.pipeKey?.length) {
          throw new Error("Miruro response key was not available");
        }

        const decoded = new Uint8Array(bytes.length);
        for (let index = 0; index < bytes.length; index++) {
          decoded[index] =
            bytes[index] ^ this.pipeKey[index % this.pipeKey.length];
        }
        bytes = decoded;
      }

      try {
        const inflated = Jr(bytes, undefined);
        const decodedData = JSON.parse(this.decodeUtf8(inflated));

        this.debug(trace, "Decoded compressed Miruro response", {
          obfuscation,
          compressedBytes: bytes.length,
          resultType: Array.isArray(decodedData) ? "array" : typeof decodedData,
          resultCount: Array.isArray(decodedData)
            ? decodedData.length
            : Object.keys(decodedData || {}).length,
          elapsedMs: Date.now() - startedAt,
        });

        return decodedData;
      } catch (inflateError: any) {
        try {
          const fallbackData = JSON.parse(this.decodeUtf8(bytes));
          this.debug(trace, "Decoded uncompressed fallback response", {
            obfuscation,
            resultType: Array.isArray(fallbackData)
              ? "array"
              : typeof fallbackData,
            elapsedMs: Date.now() - startedAt,
          });
          return fallbackData;
        } catch {
          throw new Error(
            `Unable to decode Miruro ${path} response: ${
              inflateError?.message || String(inflateError)
            }`
          );
        }
      }
    } catch (error: any) {
      this.debugError(trace, `secureGet(${path}) failed`, error);
      throw error;
    }
  }

  private async ensurePipeConfig(): Promise<void> {
    if (this.pipeKey?.length) {
      this.debug("config", "Pipe configuration already loaded", {
        protocolVersion: this.protocolVersion,
        keyLength: this.pipeKey.length,
      });
      return;
    }

    if (this.configPromise) {
      this.debug("config", "Waiting for an existing configuration request");
      return this.configPromise;
    }

    this.debug("config", "Loading Miruro env2.js and JWKS configuration");

    this.configPromise = (async () => {
      const [envResult, keyResult] = await Promise.allSettled([
        fetch(`${this.baseUrl}/env2.js`, {
          headers: {
            Referer: this.baseUrl + "/",
            "User-Agent": this.userAgent,
          },
        }).then((response) => {
          if (!response.ok) throw new Error(`env2.js HTTP ${response.status}`);
          return response.text();
        }),
        fetch(`${this.baseUrl}/api/secure/jwks`, {
          headers: {
            Referer: this.baseUrl + "/",
            "User-Agent": this.userAgent,
          },
        }).then(async (response) => {
          if (!response.ok) throw new Error(`JWKS HTTP ${response.status}`);
          return {
            json: await response.json(),
            version: response.headers.get("x-protocol-version"),
          };
        }),
      ]);

      this.debug("config", "Configuration requests completed", {
        envStatus: envResult.status,
        jwksStatus: keyResult.status,
        envError:
          envResult.status === "rejected"
            ? String(envResult.reason?.message || envResult.reason)
            : null,
        jwksError:
          keyResult.status === "rejected"
            ? String(keyResult.reason?.message || keyResult.reason)
            : null,
      });

      if (envResult.status === "fulfilled") {
        const match = envResult.value.match(
          /VITE_PIPE_OBF_KEY[^0-9a-fA-F]+([0-9a-fA-F]{32,})/i
        );
        if (match) this.pipeKey = this.hexToBytes(match[1]);
      }

      if (keyResult.status === "fulfilled") {
        this.protocolVersion =
          keyResult.value.version ||
          String(keyResult.value.json?.version || this.protocolVersion);
      }

      // Public fallback from the captured web-app configuration. The live
      // env2.js value above remains authoritative and replaces this when it
      // changes.
      if (!this.pipeKey?.length) {
        this.debug(
          "config",
          "Live pipe key was not found; using captured fallback key"
        );
        this.pipeKey = this.hexToBytes(
          "71951034f8fbcf53d89db52ceb3dc22c"
        );
      }

      this.debug("config", "Miruro pipe configuration ready", {
        protocolVersion: this.protocolVersion,
        keyLength: this.pipeKey?.length || 0,
      });
    })();

    try {
      await this.configPromise;
    } finally {
      this.configPromise = null;
    }
  }

  private removeUndefined(value: Record<string, any>): Record<string, any> {
    const result: Record<string, any> = {};
    for (const [key, item] of Object.entries(value || {})) {
      if (item !== undefined && item !== null && item !== "") {
        result[key] = item;
      }
    }
    return result;
  }

  private hexToBytes(hex: string): Uint8Array {
    const clean = hex.replace(/[^0-9a-f]/gi, "");
    const bytes = new Uint8Array(Math.floor(clean.length / 2));

    for (let index = 0; index < bytes.length; index++) {
      bytes[index] = parseInt(clean.slice(index * 2, index * 2 + 2), 16);
    }

    return bytes;
  }

  private base64UrlEncode(bytes: Uint8Array): string {
    const alphabet =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let output = "";

    for (let index = 0; index < bytes.length; index += 3) {
      const a = bytes[index];
      const b = index + 1 < bytes.length ? bytes[index + 1] : 0;
      const c = index + 2 < bytes.length ? bytes[index + 2] : 0;
      const value = (a << 16) | (b << 8) | c;

      output += alphabet[(value >>> 18) & 63];
      output += alphabet[(value >>> 12) & 63];
      output += index + 1 < bytes.length ? alphabet[(value >>> 6) & 63] : "=";
      output += index + 2 < bytes.length ? alphabet[value & 63] : "=";
    }

    return output
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/g, "");
  }

  private base64UrlDecode(value: string): Uint8Array {
    const alphabet =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    const normalized = value
      .replace(/-/g, "+")
      .replace(/_/g, "/")
      .replace(/\s+/g, "");

    const clean = normalized.replace(/=+$/g, "");
    const bytes: number[] = [];
    let buffer = 0;
    let bits = 0;

    for (const character of clean) {
      const index = alphabet.indexOf(character);
      if (index < 0) continue;

      buffer = (buffer << 6) | index;
      bits += 6;

      if (bits >= 8) {
        bits -= 8;
        bytes.push((buffer >>> bits) & 255);
      }
    }

    return new Uint8Array(bytes);
  }

  private encodeUtf8(value: string): Uint8Array {
    const bytes: number[] = [];

    for (let index = 0; index < value.length; index++) {
      let code = value.charCodeAt(index);

      if (code >= 0xd800 && code <= 0xdbff && index + 1 < value.length) {
        const next = value.charCodeAt(index + 1);
        if (next >= 0xdc00 && next <= 0xdfff) {
          code = 0x10000 + ((code - 0xd800) << 10) + (next - 0xdc00);
          index++;
        }
      }

      if (code <= 0x7f) {
        bytes.push(code);
      } else if (code <= 0x7ff) {
        bytes.push(0xc0 | (code >>> 6), 0x80 | (code & 63));
      } else if (code <= 0xffff) {
        bytes.push(
          0xe0 | (code >>> 12),
          0x80 | ((code >>> 6) & 63),
          0x80 | (code & 63)
        );
      } else {
        bytes.push(
          0xf0 | (code >>> 18),
          0x80 | ((code >>> 12) & 63),
          0x80 | ((code >>> 6) & 63),
          0x80 | (code & 63)
        );
      }
    }

    return new Uint8Array(bytes);
  }

  private decodeUtf8(bytes: Uint8Array): string {
    let result = "";

    for (let index = 0; index < bytes.length; ) {
      const first = bytes[index++];

      if (first < 0x80) {
        result += String.fromCharCode(first);
        continue;
      }

      if ((first & 0xe0) === 0xc0) {
        const second = bytes[index++] & 63;
        result += String.fromCharCode(((first & 31) << 6) | second);
        continue;
      }

      if ((first & 0xf0) === 0xe0) {
        const second = bytes[index++] & 63;
        const third = bytes[index++] & 63;
        result += String.fromCharCode(
          ((first & 15) << 12) | (second << 6) | third
        );
        continue;
      }

      const second = bytes[index++] & 63;
      const third = bytes[index++] & 63;
      const fourth = bytes[index++] & 63;
      let code =
        ((first & 7) << 18) | (second << 12) | (third << 6) | fourth;
      code -= 0x10000;
      result += String.fromCharCode(
        0xd800 + (code >>> 10),
        0xdc00 + (code & 1023)
      );
    }

    return result;
  }
}
