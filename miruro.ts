// @ts-nocheck
/// <reference path="./online-streaming-provider.d.ts" />
/// <reference path="./core.d.ts" />

/**
 * Miruro online-stream provider for Seanime.
 *
 * Uses only Seanime's documented core APIs:
 * fetch, console, $getUserPreference, $toBytes, and $toString.
 */
var qn=Uint8Array,Jn=Uint16Array,Yn=Int32Array,Xn=new qn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Zn=new qn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Qn=new qn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),$n=function(e,t){for(var n=new Jn(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new Yn(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return{b:n,r:i}},er=$n(Xn,2),tr=er.b,nr=er.r;tr[28]=258,nr[258]=28;for(var rr=$n(Zn,0),ir=rr.b,ar=rr.r,or=new Jn(32768),sr=0;sr<32768;++sr){var cr=(sr&43690)>>1|(sr&21845)<<1;cr=(cr&52428)>>2|(cr&13107)<<2,cr=(cr&61680)>>4|(cr&3855)<<4,or[sr]=((cr&65280)>>8|(cr&255)<<8)>>1}for(var lr=(function(e,t,n){for(var r=e.length,i=0,a=new Jn(t);i<r;++i)e[i]&&++a[e[i]-1];var o=new Jn(t);for(i=1;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new Jn(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var l=i<<4|e[i],u=t-e[i],d=o[e[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)s[or[d]>>c]=l}else for(s=new Jn(r),i=0;i<r;++i)e[i]&&(s[i]=or[o[e[i]-1]++]>>15-e[i]);return s}),ur=new qn(288),sr=0;sr<144;++sr)ur[sr]=8;for(var sr=144;sr<256;++sr)ur[sr]=9;for(var sr=256;sr<280;++sr)ur[sr]=7;for(var sr=280;sr<288;++sr)ur[sr]=8;for(var dr=new qn(32),sr=0;sr<32;++sr)dr[sr]=5;var fr=lr(ur,9,0),pr=lr(ur,9,1),mr=lr(dr,5,0),hr=lr(dr,5,1),gr=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},_r=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},vr=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},yr=function(e){return(e+7)/8|0},br=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new qn(e.subarray(t,n))},xr=[`unexpected EOF`,`invalid block type`,`invalid length/literal`,`invalid distance`,`stream finished`,`no stream handler`,,`no callback`,`invalid UTF-8 data`,`extra field too long`,`date not in range 1980-2099`,`filename too long`,`stream finishing`,`invalid zip data`],Sr=function(e,t,n){var r=Error(t||xr[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,Sr),!n)throw r;return r},Cr=function(e,t,n,r){var i=e.length,a=r?r.length:0;if(!i||t.f&&!t.l)return n||new qn(0);var o=!n,s=o||t.i!=2,c=t.i;o&&(n=new qn(i*3));var l=function(e){var t=n.length;if(e>t){var r=new qn(Math.max(t*2,e));r.set(n),n=r}},u=t.f||0,d=t.p||0,f=t.b||0,p=t.l,m=t.d,h=t.m,g=t.n,_=i*8;do{if(!p){u=_r(e,d,1);var v=_r(e,d+1,3);if(d+=3,!v){var y=yr(d)+4,b=e[y-4]|e[y-3]<<8,x=y+b;if(x>i){c&&Sr(0);break}s&&l(f+b),n.set(e.subarray(y,x),f),t.b=f+=b,t.p=d=x*8,t.f=u;continue}else if(v==1)p=pr,m=hr,h=9,g=5;else if(v==2){var S=_r(e,d,31)+257,C=_r(e,d+10,15)+4,w=S+_r(e,d+5,31)+1;d+=14;for(var T=new qn(w),E=new qn(19),D=0;D<C;++D)E[Qn[D]]=_r(e,d+D*3,7);d+=C*3;for(var ee=gr(E),te=(1<<ee)-1,ne=lr(E,ee,1),D=0;D<w;){var re=ne[_r(e,d,te)];d+=re&15;var y=re>>4;if(y<16)T[D++]=y;else{var ie=0,ae=0;for(y==16?(ae=3+_r(e,d,3),d+=2,ie=T[D-1]):y==17?(ae=3+_r(e,d,7),d+=3):y==18&&(ae=11+_r(e,d,127),d+=7);ae--;)T[D++]=ie}}var O=T.subarray(0,S),k=T.subarray(S);h=gr(O),g=gr(k),p=lr(O,h,1),m=lr(k,g,1)}else Sr(1);if(d>_){c&&Sr(0);break}}s&&l(f+131072);for(var oe=(1<<h)-1,se=(1<<g)-1,ce=d;;ce=d){var ie=p[vr(e,d)&oe],le=ie>>4;if(d+=ie&15,d>_){c&&Sr(0);break}if(ie||Sr(2),le<256)n[f++]=le;else if(le==256){ce=d,p=null;break}else{var A=le-254;if(le>264){var D=le-257,j=Xn[D];A=_r(e,d,(1<<j)-1)+tr[D],d+=j}var ue=m[vr(e,d)&se],de=ue>>4;ue||Sr(3),d+=ue&15;var k=ir[de];if(de>3){var j=Zn[de];k+=vr(e,d)&(1<<j)-1,d+=j}if(d>_){c&&Sr(0);break}s&&l(f+131072);var M=f+A;if(f<k){var fe=a-k,pe=Math.min(k,M);for(fe+f<0&&Sr(3);f<pe;++f)n[f]=r[fe+f]}for(;f<M;++f)n[f]=n[f-k]}}t.l=p,t.p=ce,t.b=f,t.f=u,p&&(u=1,t.m=h,t.d=m,t.n=g)}while(!u);return f!=n.length&&o?br(n,0,f):n.subarray(0,f)},wr=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8},Tr=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8,e[r+2]|=n>>16},Er=function(e,t){for(var n=[],r=0;r<e.length;++r)e[r]&&n.push({s:r,f:e[r]});var i=n.length,a=n.slice();if(!i)return{t:Nr,l:0};if(i==1){var o=new qn(n[0].s+1);return o[n[0].s]=1,{t:o,l:1}}n.sort(function(e,t){return e.f-t.f}),n.push({s:-1,f:25001});var s=n[0],c=n[1],l=0,u=1,d=2;for(n[0]={s:-1,f:s.f+c.f,l:s,r:c};u!=i-1;)s=n[n[l].f<n[d].f?l++:d++],c=n[l!=u&&n[l].f<n[d].f?l++:d++],n[u++]={s:-1,f:s.f+c.f,l:s,r:c};for(var f=a[0].s,r=1;r<i;++r)a[r].s>f&&(f=a[r].s);var p=new Jn(f+1),m=Dr(n[u-1],p,0);if(m>t){var r=0,h=0,g=m-t,_=1<<g;for(a.sort(function(e,t){return p[t.s]-p[e.s]||e.f-t.f});r<i;++r){var v=a[r].s;if(p[v]>t)h+=_-(1<<m-p[v]),p[v]=t;else break}for(h>>=g;h>0;){var y=a[r].s;p[y]<t?h-=1<<t-p[y]++-1:++r}for(;r>=0&&h;--r){var b=a[r].s;p[b]==t&&(--p[b],++h)}m=t}return{t:new qn(p),l:m}},Dr=function(e,t,n){return e.s==-1?Math.max(Dr(e.l,t,n+1),Dr(e.r,t,n+1)):t[e.s]=n},Or=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new Jn(++t),r=0,i=e[0],a=1,o=function(e){n[r++]=e},s=1;s<=t;++s)if(e[s]==i&&s!=t)++a;else{if(!i&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(i),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(i);a=1,i=e[s]}return{c:n.subarray(0,r),n:t}},kr=function(e,t){for(var n=0,r=0;r<t.length;++r)n+=e[r]*t[r];return n},Ar=function(e,t,n){var r=n.length,i=yr(t+2);e[i]=r&255,e[i+1]=r>>8,e[i+2]=e[i]^255,e[i+3]=e[i+1]^255;for(var a=0;a<r;++a)e[i+a+4]=n[a];return(i+4+r)*8},jr=function(e,t,n,r,i,a,o,s,c,l,u){wr(t,u++,n),++i[256];for(var d=Er(i,15),f=d.t,p=d.l,m=Er(a,15),h=m.t,g=m.l,_=Or(f),v=_.c,y=_.n,b=Or(h),x=b.c,S=b.n,C=new Jn(19),w=0;w<v.length;++w)++C[v[w]&31];for(var w=0;w<x.length;++w)++C[x[w]&31];for(var T=Er(C,7),E=T.t,D=T.l,ee=19;ee>4&&!E[Qn[ee-1]];--ee);var te=l+5<<3,ne=kr(i,ur)+kr(a,dr)+o,re=kr(i,f)+kr(a,h)+o+14+3*ee+kr(C,E)+2*C[16]+3*C[17]+7*C[18];if(c>=0&&te<=ne&&te<=re)return Ar(t,u,e.subarray(c,c+l));var ie,ae,O,k;if(wr(t,u,1+(re<ne)),u+=2,re<ne){ie=lr(f,p,0),ae=f,O=lr(h,g,0),k=h;var oe=lr(E,D,0);wr(t,u,y-257),wr(t,u+5,S-1),wr(t,u+10,ee-4),u+=14;for(var w=0;w<ee;++w)wr(t,u+3*w,E[Qn[w]]);u+=3*ee;for(var se=[v,x],ce=0;ce<2;++ce)for(var le=se[ce],w=0;w<le.length;++w){var A=le[w]&31;wr(t,u,oe[A]),u+=E[A],A>15&&(wr(t,u,le[w]>>5&127),u+=le[w]>>12)}}else ie=fr,ae=ur,O=mr,k=dr;for(var w=0;w<s;++w){var j=r[w];if(j>255){var A=j>>18&31;Tr(t,u,ie[A+257]),u+=ae[A+257],A>7&&(wr(t,u,j>>23&31),u+=Xn[A]);var ue=j&31;Tr(t,u,O[ue]),u+=k[ue],ue>3&&(Tr(t,u,j>>5&8191),u+=Zn[ue])}else Tr(t,u,ie[j]),u+=ae[j]}return Tr(t,u,ie[256]),u+ae[256]},Mr=new Yn([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Nr=new qn(0),Pr=function(e,t,n,r,i,a){var o=a.z||e.length,s=new qn(r+o+5*(1+Math.ceil(o/7e3))+i),c=s.subarray(r,s.length-i),l=a.l,u=(a.r||0)&7;if(t){u&&(c[0]=a.r>>3);for(var d=Mr[t-1],f=d>>13,p=d&8191,m=(1<<n)-1,h=a.p||new Jn(32768),g=a.h||new Jn(m+1),_=Math.ceil(n/3),v=2*_,y=function(t){return(e[t]^e[t+1]<<_^e[t+2]<<v)&m},b=new Yn(25e3),x=new Jn(288),S=new Jn(32),C=0,w=0,T=a.i||0,E=0,D=a.w||0,ee=0;T+2<o;++T){var te=y(T),ne=T&32767,re=g[te];if(h[ne]=re,g[te]=ne,D<=T){var ie=o-T;if((C>7e3||E>24576)&&(ie>423||!l)){u=jr(e,c,0,b,x,S,w,E,ee,T-ee,u),E=C=w=0,ee=T;for(var ae=0;ae<286;++ae)x[ae]=0;for(var ae=0;ae<30;++ae)S[ae]=0}var O=2,k=0,oe=p,se=ne-re&32767;if(ie>2&&te==y(T-se))for(var ce=Math.min(f,ie)-1,le=Math.min(32767,T),A=Math.min(258,ie);se<=le&&--oe&&ne!=re;){if(e[T+O]==e[T+O-se]){for(var j=0;j<A&&e[T+j]==e[T+j-se];++j);if(j>O){if(O=j,k=se,j>ce)break;for(var ue=Math.min(se,j-2),de=0,ae=0;ae<ue;++ae){var M=T-se+ae&32767,fe=M-h[M]&32767;fe>de&&(de=fe,re=M)}}}ne=re,re=h[ne],se+=ne-re&32767}if(k){b[E++]=268435456|nr[O]<<18|ar[k];var pe=nr[O]&31,me=ar[k]&31;w+=Xn[pe]+Zn[me],++x[257+pe],++S[me],D=T+O,++C}else b[E++]=e[T],++x[e[T]]}}for(T=Math.max(T,D);T<o;++T)b[E++]=e[T],++x[e[T]];u=jr(e,c,l,b,x,S,w,E,ee,T-ee,u),l||(a.r=u&7|c[u/8|0]<<3,u-=7,a.h=g,a.p=h,a.i=T,a.w=D)}else{for(var T=a.w||0;T<o+l;T+=65535){var he=T+65535;he>=o&&(c[u/8|0]=l,he=o),u=Ar(c,u+1,e.subarray(T,he))}a.i=o}return br(s,0,r+yr(u)+i)},Fr=(function(){for(var e=new Int32Array(256),t=0;t<256;++t){for(var n=t,r=9;--r;)n=(n&1&&-306674912)^n>>>1;e[t]=n}return e})(),Ir=function(){var e=-1;return{p:function(t){for(var n=e,r=0;r<t.length;++r)n=Fr[n&255^t[r]]^n>>>8;e=n},d:function(){return~e}}},Lr=function(e,t,n,r,i){if(!i&&(i={l:1},t.dictionary)){var a=t.dictionary.subarray(-32768),o=new qn(a.length+e.length);o.set(a),o.set(e,a.length),e=o,i.w=a.length}return Pr(e,t.level==null?6:t.level,t.mem==null?i.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+t.mem,n,r,i)},Rr=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8},zr=function(e,t){var n=t.filename;if(e[0]=31,e[1]=139,e[2]=8,e[8]=t.level<2?4:t.level==9?2:0,e[9]=3,t.mtime!=0&&Rr(e,4,Math.floor(new Date(t.mtime||Date.now())/1e3)),n){e[3]=8;for(var r=0;r<=n.length;++r)e[r+10]=n.charCodeAt(r)}},Br=function(e){(e[0]!=31||e[1]!=139||e[2]!=8)&&Sr(6,`invalid gzip data`);var t=e[3],n=10;t&4&&(n+=(e[10]|e[11]<<8)+2);for(var r=(t>>3&1)+(t>>4&1);r>0;r-=!e[n++]);return n+(t&2)},Vr=function(e){var t=e.length;return(e[t-4]|e[t-3]<<8|e[t-2]<<16|e[t-1]<<24)>>>0},Hr=function(e){return 10+(e.filename?e.filename.length+1:0)},Ur=function(e,t){return((e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31)&&Sr(6,`invalid zlib data`),(e[1]>>5&1)==+!t&&Sr(6,`invalid zlib data: `+(e[1]&32?`need`:`unexpected`)+` dictionary`),(e[1]>>3&4)+2};function Wr(e,t){return Cr(e,{i:2},t&&t.out,t&&t.dictionary)}function Gr(e,t){t||={};var n=Ir(),r=e.length;n.p(e);var i=Lr(e,t,Hr(t),8),a=i.length;return zr(i,t),Rr(i,a-8,n.d()),Rr(i,a-4,r),i}function Kr(e,t){var n=Br(e);return n+8>e.length&&Sr(6,`invalid gzip data`),Cr(e.subarray(n,-8),{i:2},t&&t.out||new qn(Vr(e)),t&&t.dictionary)}function qr(e,t){return Cr(e.subarray(Ur(e,t&&t.dictionary),-4),{i:2},t&&t.out,t&&t.dictionary)}function Jr(e,t){return e[0]==31&&e[1]==139&&e[2]==8?Kr(e,t):(e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31?Wr(e,t):qr(e,t)}

class Provider {
    private api: string = "https://www.miruro.tv"
    private userAgent: string = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:152.0) Gecko/20100101 Firefox/152.0"
    private protocolVersion: string = "0.2.0"
    private pipeKey: Uint8Array | null = null
    private configPromise: Promise<void> | null = null
    private episodeCache: { [key: string]: any } = {}
    private debugCounter: number = 0

    getSettings(): Settings {
        this.log("init", "getSettings", {
            version: "1.2.0",
            debug: this.debugEnabled(),
        })

        return {
            episodeServers: [
                "Auto",
                "Bonk S-SUB",
                "Bonk H-SUB",
                "Ally",
                "Pewe",
                "Moo",
                "Bee",
                "Kiwi",
                "Hop",
            ],
            supportsDub: true,
        }
    }

    async search(opts: SearchOptions): Promise<SearchResult[]> {
        const trace = this.trace("search")
        const mode: SubOrDub = opts.dub ? "dub" : "sub"
        const media = opts.media || ({} as Media)
        const mediaId = Number(media.id)

        this.log(trace, "search started", {
            query: opts.query,
            mediaId: mediaId,
            mode: mode,
        })

        if (!mediaId || mediaId <= 0) {
            this.warn(trace, "Seanime did not provide an AniList media ID")
            return []
        }

        const title =
            media.englishTitle ||
            media.romajiTitle ||
            opts.query ||
            (media.synonyms && media.synonyms.length ? media.synonyms[0] : "") ||
            "Anime"

        return [{
            id: String(mediaId) + "|" + mode,
            title: String(title),
            url: this.api + "/info/" + String(mediaId),
            subOrDub: mode,
        }]
    }

    async findEpisodes(id: string): Promise<EpisodeDetails[]> {
        const trace = this.trace("episodes")
        const parsed = this.parseProviderId(id)
        const data = await this.getEpisodeData(parsed.anilistId)
        const providers = data && data.providers ? data.providers : {}
        const names = this.providerOrder(providers)
        const byNumber: { [key: string]: EpisodeDetails } = {}

        this.log(trace, "building episode list", {
            anilistId: parsed.anilistId,
            mode: parsed.mode,
            providers: names,
        })

        for (let p = 0; p < names.length; p++) {
            const providerName = names[p]
            const provider = providers[providerName]
            const episodes =
                provider &&
                provider.episodes &&
                provider.episodes[parsed.mode]

            if (!Array.isArray(episodes)) {
                continue
            }

            for (let i = 0; i < episodes.length; i++) {
                const item = episodes[i] || {}
                const number = Number(item.number)

                if (!number || number <= 0 || Math.floor(number) !== number) {
                    continue
                }

                const key = String(number)
                const title = item.title
                    ? String(item.title)
                    : "Episode " + String(number)

                if (!byNumber[key]) {
                    byNumber[key] = {
                        id: parsed.anilistId + "|" + parsed.mode,
                        number: number,
                        title: title,
                        url:
                            this.api +
                            "/watch/" +
                            parsed.anilistId +
                            "?ep=" +
                            String(number),
                    }
                } else if (
                    (!byNumber[key].title ||
                        /^Episode\s+\d+$/i.test(String(byNumber[key].title))) &&
                    title
                ) {
                    byNumber[key].title = title
                }
            }
        }

        const result: EpisodeDetails[] = []
        const keys = Object.keys(byNumber)

        for (let i = 0; i < keys.length; i++) {
            result.push(byNumber[keys[i]])
        }

        result.sort(function (a, b) {
            return Number(a.number) - Number(b.number)
        })

        this.log(trace, "episode list complete", {
            count: result.length,
            first: result.length ? result[0].number : null,
            last: result.length ? result[result.length - 1].number : null,
        })

        if (!result.length) {
            throw new Error(
                "Miruro returned no " +
                parsed.mode +
                " episodes for AniList ID " +
                parsed.anilistId
            )
        }

        return result
    }

    async findEpisodeServer(
        episode: EpisodeDetails,
        requestedServer: string
    ): Promise<EpisodeServer> {
        const trace = this.trace("source")
        const parsed = this.parseProviderId(episode.id)
        const episodeNumber = Number(episode.number)
        const request = this.parseServerRequest(
            requestedServer || "default",
            parsed.mode
        )
        const data = await this.getEpisodeData(parsed.anilistId)
        const providers = data && data.providers ? data.providers : {}
        const attempts = request.provider
            ? [request]
            : this.autoAttempts(parsed.mode)

        this.log(trace, "source lookup started", {
            anilistId: parsed.anilistId,
            episode: episodeNumber,
            mode: parsed.mode,
            requestedServer: requestedServer,
            attempts: attempts,
        })

        if (!episodeNumber || episodeNumber <= 0) {
            throw new Error("Invalid episode number")
        }

        const failures: string[] = []

        for (let i = 0; i < attempts.length; i++) {
            const attempt = attempts[i]
            const provider = providers[attempt.provider]

            if (!provider || !provider.episodes) {
                failures.push(attempt.provider + ": unavailable")
                continue
            }

            const episodeList = provider.episodes[parsed.mode]
            if (!Array.isArray(episodeList)) {
                failures.push(
                    attempt.provider + ": no " + parsed.mode + " episode list"
                )
                continue
            }

            let providerEpisode: any = null

            for (let j = 0; j < episodeList.length; j++) {
                const item = episodeList[j]
                if (item && Number(item.number) === episodeNumber) {
                    providerEpisode = item
                    break
                }
            }

            if (!providerEpisode || !providerEpisode.id) {
                failures.push(
                    attempt.provider +
                    ": episode " +
                    String(episodeNumber) +
                    " unavailable"
                )
                continue
            }

            try {
                const query: { [key: string]: any } = {
                    episodeId: String(providerEpisode.id),
                    provider: attempt.provider,
                    category:
                        parsed.mode === "dub" ? "dub" : attempt.category,
                }

                if (attempt.provider === "bonk") {
                    query.anilistId = Number(parsed.anilistId)
                }

                this.log(trace, "requesting Miruro source", {
                    provider: attempt.provider,
                    category: query.category,
                    episode: episodeNumber,
                })

                const sourceData = await this.secureGet("sources", query)
                const built = this.buildEpisodeServer(
                    attempt.label,
                    attempt.provider,
                    String(query.category),
                    parsed.mode,
                    sourceData
                )

                if (built.videoSources.length) {
                    this.log(trace, "source lookup complete", {
                        server: built.server,
                        videoSourceCount: built.videoSources.length,
                        qualities: this.sourceQualities(built.videoSources),
                    })
                    return built
                }

                failures.push(
                    attempt.provider +
                    "/" +
                    String(query.category) +
                    ": no direct HLS or MP4 sources"
                )
            } catch (error) {
                const message = this.errorMessage(error)
                this.error(
                    trace,
                    attempt.provider +
                    "/" +
                    (parsed.mode === "dub" ? "dub" : attempt.category) +
                    " failed",
                    error
                )
                failures.push(
                    attempt.provider +
                    "/" +
                    (parsed.mode === "dub" ? "dub" : attempt.category) +
                    ": " +
                    message
                )
            }
        }

        throw new Error(
            "No playable Miruro stream for episode " +
            String(episodeNumber) +
            ". " +
            failures.join(" | ")
        )
    }

    private buildEpisodeServer(
        label: string,
        providerName: string,
        category: string,
        mode: "sub" | "dub",
        sourceData: any
    ): EpisodeServer {
        const streams = Array.isArray(sourceData && sourceData.streams)
            ? sourceData.streams
            : Array.isArray(sourceData && sourceData.sources)
                ? sourceData.sources
                : []

        const subtitles = this.buildSubtitles(sourceData)
        const videoSources: VideoSource[] = []
        const qualityCounts: { [key: string]: number } = {}
        let firstReferer = ""

        for (let i = 0; i < streams.length; i++) {
            const stream = streams[i] || {}
            const url = String(stream.url || stream.file || "")
            const type = this.videoType(stream.type, url)

            if (
                !url ||
                stream.isActive === false ||
                (type !== "m3u8" && type !== "mp4")
            ) {
                continue
            }

            if (!firstReferer && stream.referer) {
                firstReferer = String(stream.referer)
            }

            let quality = String(
                stream.server ||
                stream.quality ||
                (type === "m3u8" ? "HLS" : "MP4")
            )

            if (!quality) {
                quality = "Source " + String(i + 1)
            }

            const count = qualityCounts[quality] || 0
            qualityCounts[quality] = count + 1

            if (count > 0) {
                quality += " " + String(count + 1)
            }

            videoSources.push({
                url: url,
                type: type,
                quality: quality,
                label: this.videoLabel(providerName, category, mode),
                subtitles: this.copySubtitles(subtitles),
            })
        }

        let referer = firstReferer || this.api + "/"

        // The working Firefox capture shows Bonk's redirected Ultracloud
        // playlists require Miruro's page origin rather than the embed host.
        if (providerName === "bonk") {
            referer = this.api + "/"
        }

        return {
            server: label,
            headers: {
                Accept: "*/*",
                Referer: referer,
                Origin: this.originOf(referer),
                "User-Agent": this.userAgent,
            },
            videoSources: videoSources,
        }
    }

    private buildSubtitles(sourceData: any): VideoSubtitle[] {
        const input = Array.isArray(sourceData && sourceData.subtitles)
            ? sourceData.subtitles
            : Array.isArray(sourceData && sourceData.tracks)
                ? sourceData.tracks
                : []
        const result: VideoSubtitle[] = []

        for (let i = 0; i < input.length; i++) {
            const item = input[i] || {}
            const url = String(item.file || item.url || "")

            if (!url) {
                continue
            }

            result.push({
                id: "miruro-subtitle-" + String(i + 1),
                url: url,
                language: String(
                    item.language ||
                    item.label ||
                    item.lang ||
                    "Unknown"
                ),
                isDefault: item.default === true || item.isDefault === true,
            })
        }

        return result
    }

    private copySubtitles(input: VideoSubtitle[]): VideoSubtitle[] {
        const result: VideoSubtitle[] = []

        for (let i = 0; i < input.length; i++) {
            result.push({
                id: input[i].id,
                url: input[i].url,
                language: input[i].language,
                isDefault: input[i].isDefault,
            })
        }

        return result
    }

    private videoType(rawType: any, url: string): VideoSourceType {
        const type = String(rawType || "").toLowerCase()
        const lowerUrl = String(url || "").toLowerCase()

        if (
            type === "hls" ||
            type === "m3u8" ||
            lowerUrl.indexOf(".m3u8") >= 0
        ) {
            return "m3u8"
        }

        if (type === "mp4" || lowerUrl.indexOf(".mp4") >= 0) {
            return "mp4"
        }

        return "unknown"
    }

    private videoLabel(
        providerName: string,
        category: string,
        mode: "sub" | "dub"
    ): string {
        if (mode === "dub") {
            return this.capitalize(providerName) + " - English Dub"
        }

        return (
            this.capitalize(providerName) +
            (category === "ssub" ? " - Soft Sub" : " - Hard Sub")
        )
    }

    private sourceQualities(sources: VideoSource[]): string[] {
        const result: string[] = []

        for (let i = 0; i < sources.length; i++) {
            result.push(sources[i].quality)
        }

        return result
    }

    private getEpisodeData(anilistId: string): Promise<any> {
        if (this.episodeCache[anilistId]) {
            this.log("cache", "episode cache hit", { anilistId: anilistId })
            return Promise.resolve(this.episodeCache[anilistId])
        }

        this.log("cache", "episode cache miss", { anilistId: anilistId })

        return this.secureGet("episodes", {
            anilistId: anilistId,
        }).then((data: any) => {
            this.episodeCache[anilistId] = data
            return data
        })
    }

    private providerOrder(providers: { [key: string]: any }): string[] {
        const preferred = [
            "bonk",
            "ally",
            "pewe",
            "moo",
            "bee",
            "kiwi",
            "hop",
        ]
        const result: string[] = []
        const available = Object.keys(providers || {})

        for (let i = 0; i < preferred.length; i++) {
            if (this.arrayContains(available, preferred[i])) {
                result.push(preferred[i])
            }
        }

        for (let i = 0; i < available.length; i++) {
            if (!this.arrayContains(result, available[i])) {
                result.push(available[i])
            }
        }

        return result
    }

    private autoAttempts(mode: "sub" | "dub"): ServerRequest[] {
        if (mode === "dub") {
            return [
                { label: "Bonk Dub", provider: "bonk", category: "dub" },
                { label: "Ally Dub", provider: "ally", category: "dub" },
                { label: "Pewe Dub", provider: "pewe", category: "dub" },
                { label: "Bee Dub", provider: "bee", category: "dub" },
                { label: "Kiwi Dub", provider: "kiwi", category: "dub" },
                { label: "Hop Dub", provider: "hop", category: "dub" },
            ]
        }

        return [
            { label: "Bonk S-SUB", provider: "bonk", category: "ssub" },
            { label: "Bonk H-SUB", provider: "bonk", category: "sub" },
            { label: "Ally", provider: "ally", category: "sub" },
            { label: "Pewe", provider: "pewe", category: "sub" },
            { label: "Moo", provider: "moo", category: "sub" },
            { label: "Bee", provider: "bee", category: "ssub" },
            { label: "Kiwi", provider: "kiwi", category: "sub" },
            { label: "Hop", provider: "hop", category: "ssub" },
        ]
    }

    private parseServerRequest(
        value: string,
        mode: "sub" | "dub"
    ): ServerRequest {
        const normalized = String(value || "")
            .toLowerCase()
            .replace(/\s+/g, " ")
            .trim()

        if (!normalized || normalized === "default" || normalized === "auto") {
            return {
                label: "Auto",
                provider: "",
                category: mode === "dub" ? "dub" : "ssub",
            }
        }

        const providerNames = [
            "bonk",
            "ally",
            "pewe",
            "moo",
            "bee",
            "kiwi",
            "hop",
        ]

        for (let i = 0; i < providerNames.length; i++) {
            const provider = providerNames[i]

            if (normalized.indexOf(provider) === 0) {
                return {
                    label: value,
                    provider: provider,
                    category:
                        mode === "dub"
                            ? "dub"
                            : normalized.indexOf("s-sub") >= 0
                                ? "ssub"
                                : provider === "bee" || provider === "hop"
                                    ? "ssub"
                                    : "sub",
                }
            }
        }

        throw new Error("Unknown Miruro server: " + value)
    }

    private parseProviderId(value: string): {
        anilistId: string
        mode: "sub" | "dub"
    } {
        const parts = String(value || "").split("|")
        const anilistId = parts[0]
        const mode: "sub" | "dub" = parts[1] === "dub" ? "dub" : "sub"

        if (!/^\d+$/.test(anilistId)) {
            throw new Error("Invalid Miruro provider ID: " + value)
        }

        return {
            anilistId: anilistId,
            mode: mode,
        }
    }

    private async secureGet(
        path: string,
        query: { [key: string]: any }
    ): Promise<any> {
        const trace = this.trace("api-" + path)
        await this.ensurePipeConfig()

        const envelope = {
            path: path,
            method: "GET",
            query: this.cleanObject(query),
            body: null,
            version: this.protocolVersion,
        }
        const encoded = this.base64UrlEncode(
            $toBytes(JSON.stringify(envelope))
        )
        const url =
            this.api +
            "/api/secure/pipe?e=" +
            encodeURIComponent(encoded)

        this.log(trace, "request", {
            path: path,
            query: envelope.query,
        })

        const response = await fetch(url, {
            headers: {
                Accept: "text/plain, application/json",
                Referer: this.api + "/",
                "User-Agent": this.userAgent,
            },
        })

        if (!response.ok) {
            throw new Error(
                "Miruro " +
                path +
                " request failed with HTTP " +
                String(response.status)
            )
        }

        const text = await response.text()

        try {
            const decoded = this.decodePipeResponse(String(text))
            this.log(trace, "response decoded", {
                path: path,
                type: Array.isArray(decoded) ? "array" : typeof decoded,
                count: Array.isArray(decoded)
                    ? decoded.length
                    : decoded && typeof decoded === "object"
                        ? Object.keys(decoded).length
                        : 0,
            })
            return decoded
        } catch (error) {
            this.error(trace, "response decode failed", error)
            throw error
        }
    }

    private async ensurePipeConfig(): Promise<void> {
        if (this.pipeKey && this.pipeKey.length) {
            return
        }

        if (this.configPromise) {
            return this.configPromise
        }

        this.configPromise = this.loadPipeConfig()

        try {
            await this.configPromise
        } finally {
            this.configPromise = null
        }
    }

    private async loadPipeConfig(): Promise<void> {
        let keyHex = ""

        try {
            const response = await fetch(this.api + "/env2.js", {
                headers: {
                    Referer: this.api + "/",
                    "User-Agent": this.userAgent,
                },
            })

            if (response.ok) {
                const text = String(await response.text())
                const match = text.match(
                    /VITE_PIPE_OBF_KEY[^0-9a-fA-F]+([0-9a-fA-F]{32,})/i
                )

                if (match && match[1]) {
                    keyHex = match[1]
                }
            }
        } catch (error) {
            this.warn("config", "env2.js request failed", {
                message: this.errorMessage(error),
            })
        }

        if (!keyHex) {
            keyHex = "71951034f8fbcf53d89db52ceb3dc22c"
            this.warn("config", "using captured fallback pipe key")
        }

        this.pipeKey = this.hexToBytes(keyHex)

        this.log("config", "pipe configuration ready", {
            protocolVersion: this.protocolVersion,
            keyLength: this.pipeKey.length,
        })
    }

    private decodePipeResponse(value: string): any {
        const text = String(value || "").trim()

        if (!text) {
            throw new Error("Miruro returned an empty response")
        }

        if (text.charAt(0) === "{" || text.charAt(0) === "[") {
            return JSON.parse(text)
        }

        if (!this.pipeKey || !this.pipeKey.length) {
            throw new Error("Miruro pipe key is unavailable")
        }

        const encoded = this.base64UrlDecode(text)
        const bytes = new Uint8Array(encoded.length)

        for (let i = 0; i < encoded.length; i++) {
            bytes[i] =
                encoded[i] ^
                this.pipeKey[i % this.pipeKey.length]
        }

        try {
            const inflated = Jr(bytes, undefined)
            return JSON.parse($toString(inflated))
        } catch (inflateError) {
            try {
                return JSON.parse($toString(bytes))
            } catch (_) {
                throw new Error(
                    "Unable to decode Miruro response: " +
                    this.errorMessage(inflateError)
                )
            }
        }
    }

    private cleanObject(input: { [key: string]: any }): {
        [key: string]: any
    } {
        const result: { [key: string]: any } = {}

        for (const key in input) {
            if (
                Object.prototype.hasOwnProperty.call(input, key) &&
                input[key] !== undefined &&
                input[key] !== null &&
                input[key] !== ""
            ) {
                result[key] = input[key]
            }
        }

        return result
    }

    private hexToBytes(value: string): Uint8Array {
        const clean = String(value || "").replace(/[^0-9a-f]/gi, "")
        const output = new Uint8Array(Math.floor(clean.length / 2))

        for (let i = 0; i < output.length; i++) {
            output[i] = parseInt(
                clean.substr(i * 2, 2),
                16
            )
        }

        return output
    }

    private base64UrlEncode(bytes: Uint8Array): string {
        const alphabet =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
        let output = ""

        for (let i = 0; i < bytes.length; i += 3) {
            const a = bytes[i]
            const b = i + 1 < bytes.length ? bytes[i + 1] : 0
            const c = i + 2 < bytes.length ? bytes[i + 2] : 0
            const value = (a << 16) | (b << 8) | c

            output += alphabet.charAt((value >>> 18) & 63)
            output += alphabet.charAt((value >>> 12) & 63)
            output +=
                i + 1 < bytes.length
                    ? alphabet.charAt((value >>> 6) & 63)
                    : "="
            output +=
                i + 2 < bytes.length
                    ? alphabet.charAt(value & 63)
                    : "="
        }

        return output
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=+$/g, "")
    }

    private base64UrlDecode(value: string): Uint8Array {
        const alphabet =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
        const clean = String(value || "")
            .replace(/-/g, "+")
            .replace(/_/g, "/")
            .replace(/\s+/g, "")
            .replace(/=+$/g, "")
        const values: number[] = []
        let buffer = 0
        let bits = 0

        for (let i = 0; i < clean.length; i++) {
            const index = alphabet.indexOf(clean.charAt(i))

            if (index < 0) {
                continue
            }

            buffer = (buffer << 6) | index
            bits += 6

            if (bits >= 8) {
                bits -= 8
                values.push((buffer >>> bits) & 255)
            }
        }

        return new Uint8Array(values)
    }

    private originOf(value: string): string {
        const match = String(value || "").match(/^(https?:\/\/[^\/?#]+)/i)
        return match && match[1] ? match[1] : this.api
    }

    private capitalize(value: string): string {
        const text = String(value || "")
        return text
            ? text.charAt(0).toUpperCase() + text.slice(1)
            : text
    }

    private arrayContains(values: string[], wanted: string): boolean {
        for (let i = 0; i < values.length; i++) {
            if (values[i] === wanted) {
                return true
            }
        }
        return false
    }

    private debugEnabled(): boolean {
        try {
            const value = String($getUserPreference("debug") || "true")
                .toLowerCase()
                .trim()
            return value !== "false" && value !== "0" && value !== "off"
        } catch (_) {
            return true
        }
    }

    private trace(stage: string): string {
        this.debugCounter += 1
        return stage + "-" + String(this.debugCounter)
    }

    private log(stage: string, message: string, details?: any): void {
        if (!this.debugEnabled()) {
            return
        }

        if (details === undefined) {
            console.log("[Miruro Debug][" + stage + "] " + message)
        } else {
            console.log(
                "[Miruro Debug][" + stage + "] " + message,
                details
            )
        }
    }

    private warn(stage: string, message: string, details?: any): void {
        if (!this.debugEnabled()) {
            return
        }

        if (details === undefined) {
            console.warn("[Miruro Debug][" + stage + "] " + message)
        } else {
            console.warn(
                "[Miruro Debug][" + stage + "] " + message,
                details
            )
        }
    }

    private error(stage: string, message: string, error: any): void {
        if (!this.debugEnabled()) {
            return
        }

        console.error(
            "[Miruro Debug][" + stage + "] " + message,
            this.errorMessage(error)
        )
    }

    private errorMessage(error: any): string {
        if (!error) {
            return "Unknown error"
        }

        if (error.message) {
            return String(error.message)
        }

        return String(error)
    }
}

type ServerRequest = {
    label: string
    provider: string
    category: string
}
