"use strict";!function(t){const e=256,n=256,i=-2,a=-5,o=[0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29];function _(){const t=this;function e(t,e){let n=0;do{n|=1&t,t>>>=1,n<<=1}while(--e>0);return n>>>1}t.build_tree=function(n){const i=t.dyn_tree,a=t.stat_desc.static_tree,o=t.stat_desc.elems;let _,r,l,u=-1;for(n.heap_len=0,n.heap_max=573,_=0;_<o;_++)0!==i[2*_]?(n.heap[++n.heap_len]=u=_,n.depth[_]=0):i[2*_+1]=0;for(;n.heap_len<2;)l=n.heap[++n.heap_len]=u<2?++u:0,i[2*l]=1,n.depth[l]=0,n.opt_len--,a&&(n.static_len-=a[2*l+1]);for(t.max_code=u,_=Math.floor(n.heap_len/2);_>=1;_--)n.pqdownheap(i,_);l=o;do{_=n.heap[1],n.heap[1]=n.heap[n.heap_len--],n.pqdownheap(i,1),r=n.heap[1],n.heap[--n.heap_max]=_,n.heap[--n.heap_max]=r,i[2*l]=i[2*_]+i[2*r],n.depth[l]=Math.max(n.depth[_],n.depth[r])+1,i[2*_+1]=i[2*r+1]=l,n.heap[1]=l++,n.pqdownheap(i,1)}while(n.heap_len>=2);n.heap[--n.heap_max]=n.heap[1],function(e){const n=t.dyn_tree,i=t.stat_desc.static_tree,a=t.stat_desc.extra_bits,o=t.stat_desc.extra_base,_=t.stat_desc.max_length;let r,l,u,d,f,s,c=0;for(d=0;d<=15;d++)e.bl_count[d]=0;for(n[2*e.heap[e.heap_max]+1]=0,r=e.heap_max+1;r<573;r++)l=e.heap[r],d=n[2*n[2*l+1]+1]+1,d>_&&(d=_,c++),n[2*l+1]=d,l>t.max_code||(e.bl_count[d]++,f=0,l>=o&&(f=a[l-o]),s=n[2*l],e.opt_len+=s*(d+f),i&&(e.static_len+=s*(i[2*l+1]+f)));if(0!==c){do{for(d=_-1;0===e.bl_count[d];)d--;e.bl_count[d]--,e.bl_count[d+1]+=2,e.bl_count[_]--,c-=2}while(c>0);for(d=_;0!==d;d--)for(l=e.bl_count[d];0!==l;)u=e.heap[--r],u>t.max_code||(n[2*u+1]!=d&&(e.opt_len+=(d-n[2*u+1])*n[2*u],n[2*u+1]=d),l--)}}(n),function(t,n,i){const a=[];let o,_,r,l=0;for(o=1;o<=15;o++)a[o]=l=l+i[o-1]<<1;for(_=0;_<=n;_++)r=t[2*_+1],0!==r&&(t[2*_]=e(a[r]++,r))}(i,t.max_code,n.bl_count)}}function r(t,e,n,i,a){const o=this;o.static_tree=t,o.extra_bits=e,o.extra_base=n,o.elems=i,o.max_length=a}_._length_code=[0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28],_.base_length=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],_.base_dist=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],_.d_code=function(t){return t<256?o[t]:o[256+(t>>>7)]},_.extra_lbits=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],_.extra_dbits=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],_.extra_blbits=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],_.bl_order=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],r.static_ltree=[12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8],r.static_dtree=[0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5],r.static_l_desc=new r(r.static_ltree,_.extra_lbits,257,286,15),r.static_d_desc=new r(r.static_dtree,_.extra_dbits,0,30,15),r.static_bl_desc=new r(null,_.extra_blbits,0,19,7);function l(t,e,n,i,a){const o=this;o.good_length=t,o.max_lazy=e,o.nice_length=n,o.max_chain=i,o.func=a}const u=[new l(0,0,0,0,0),new l(4,4,8,4,1),new l(4,5,16,8,1),new l(4,6,32,32,1),new l(4,4,16,16,2),new l(8,16,32,32,2),new l(8,16,128,128,2),new l(8,32,128,256,2),new l(32,128,258,1024,2),new l(32,258,258,4096,2)],d=["need dictionary","stream end","","","stream error","data error","","buffer error","",""],f=113,s=666,c=258,h=262;function p(t,e,n,i){const a=t[2*e],o=t[2*n];return a<o||a==o&&i[e]<=i[n]}function x(){const t=this;let o,l,x,b,g,w,m,v,y,A,E,U,k,M,q,D,I,z,P,S,Z,j,B,C,F,G,H,J,K,L,N,O,Q;const R=new _,T=new _,V=new _;let W,X,Y,$,tt,et,nt,it;function at(){let e;for(e=0;e<286;e++)N[2*e]=0;for(e=0;e<30;e++)O[2*e]=0;for(e=0;e<19;e++)Q[2*e]=0;N[512]=1,t.opt_len=t.static_len=0,Y=tt=0}function ot(t,e){let n,i=-1,a=t[1],o=0,_=7,r=4;0===a&&(_=138,r=3),t[2*(e+1)+1]=65535;for(let l=0;l<=e;l++)n=a,a=t[2*(l+1)+1],++o<_&&n==a||(o<r?Q[2*n]+=o:0!==n?(n!=i&&Q[2*n]++,Q[32]++):o<=10?Q[34]++:Q[36]++,o=0,i=n,0===a?(_=138,r=3):n==a?(_=6,r=3):(_=7,r=4))}function _t(e){t.pending_buf[t.pending++]=e}function rt(t){_t(255&t),_t(t>>>8&255)}function lt(t,e){let n;const i=e;it>16-i?(n=t,nt|=n<<it&65535,rt(nt),nt=n>>>16-it,it+=i-16):(nt|=t<<it&65535,it+=i)}function ut(t,e){const n=2*t;lt(65535&e[n],65535&e[n+1])}function dt(t,e){let n,i,a=-1,o=t[1],_=0,r=7,l=4;for(0===o&&(r=138,l=3),n=0;n<=e;n++)if(i=o,o=t[2*(n+1)+1],!(++_<r&&i==o)){if(_<l)do{ut(i,Q)}while(0!=--_);else 0!==i?(i!=a&&(ut(i,Q),_--),ut(16,Q),lt(_-3,2)):_<=10?(ut(17,Q),lt(_-3,3)):(ut(18,Q),lt(_-11,7));_=0,a=i,0===o?(r=138,l=3):i==o?(r=6,l=3):(r=7,l=4)}}function ft(){16==it?(rt(nt),nt=0,it=0):it>=8&&(_t(255&nt),nt>>>=8,it-=8)}function st(n,i){let a,o,r;if(t.pending_buf[$+2*Y]=n>>>8&255,t.pending_buf[$+2*Y+1]=255&n,t.pending_buf[W+Y]=255&i,Y++,0===n?N[2*i]++:(tt++,n--,N[2*(_._length_code[i]+e+1)]++,O[2*_.d_code(n)]++),0==(8191&Y)&&H>2){for(a=8*Y,o=Z-I,r=0;r<30;r++)a+=O[2*r]*(5+_.extra_dbits[r]);if(a>>>=3,tt<Math.floor(Y/2)&&a<Math.floor(o/2))return!0}return Y==X-1}function ct(i,a){let o,r,l,u,d=0;if(0!==Y)do{o=t.pending_buf[$+2*d]<<8&65280|255&t.pending_buf[$+2*d+1],r=255&t.pending_buf[W+d],d++,0===o?ut(r,i):(l=_._length_code[r],ut(l+e+1,i),u=_.extra_lbits[l],0!==u&&(r-=_.base_length[l],lt(r,u)),o--,l=_.d_code(o),ut(l,a),u=_.extra_dbits[l],0!==u&&(o-=_.base_dist[l],lt(o,u)))}while(d<Y);ut(n,i),et=i[513]}function ht(){it>8?rt(nt):it>0&&_t(255&nt),nt=0,it=0}function pt(e,n,i){lt(0+(i?1:0),3),function(e,n,i){ht(),et=8,i&&(rt(n),rt(~n)),t.pending_buf.set(v.subarray(e,e+n),t.pending),t.pending+=n}(e,n,!0)}function xt(e,n,i){let a,o,l=0;H>0?(R.build_tree(t),T.build_tree(t),l=function(){let e;for(ot(N,R.max_code),ot(O,T.max_code),V.build_tree(t),e=18;e>=3&&0===Q[2*_.bl_order[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(),a=t.opt_len+3+7>>>3,o=t.static_len+3+7>>>3,o<=a&&(a=o)):a=o=n+5,n+4<=a&&-1!=e?pt(e,n,i):o==a?(lt(2+(i?1:0),3),ct(r.static_ltree,r.static_dtree)):(lt(4+(i?1:0),3),function(t,e,n){let i;for(lt(t-257,5),lt(e-1,5),lt(n-4,4),i=0;i<n;i++)lt(Q[2*_.bl_order[i]+1],3);dt(N,t-1),dt(O,e-1)}(R.max_code+1,T.max_code+1,l+1),ct(N,O)),at(),i&&ht()}function bt(t){xt(I>=0?I:-1,Z-I,t),I=Z,o.flush_pending()}function gt(){let t,e,n,i;do{if(i=y-B-Z,0===i&&0===Z&&0===B)i=g;else if(-1==i)i--;else if(Z>=g+g-h){v.set(v.subarray(g,g+g),0),j-=g,Z-=g,I-=g,t=k,n=t;do{e=65535&E[--n],E[n]=e>=g?e-g:0}while(0!=--t);t=g,n=t;do{e=65535&A[--n],A[n]=e>=g?e-g:0}while(0!=--t);i+=g}if(0===o.avail_in)return;t=o.read_buf(v,Z+B,i),B+=t,B>=3&&(U=255&v[Z],U=(U<<D^255&v[Z+1])&q)}while(B<h&&0!==o.avail_in)}function wt(t){let e,n,i=F,a=Z,o=C;const _=Z>g-h?Z-(g-h):0;let r=L;const l=m,u=Z+c;let d=v[a+o-1],f=v[a+o];C>=K&&(i>>=2),r>B&&(r=B);do{if(e=t,v[e+o]==f&&v[e+o-1]==d&&v[e]==v[a]&&v[++e]==v[a+1]){a+=2,e++;do{}while(v[++a]==v[++e]&&v[++a]==v[++e]&&v[++a]==v[++e]&&v[++a]==v[++e]&&v[++a]==v[++e]&&v[++a]==v[++e]&&v[++a]==v[++e]&&v[++a]==v[++e]&&a<u);if(n=c-(u-a),a=u-c,n>o){if(j=t,o=n,n>=r)break;d=v[a+o-1],f=v[a+o]}}}while((t=65535&A[t&l])>_&&0!=--i);return o<=B?o:B}function mt(e){return e.total_in=e.total_out=0,e.msg=null,t.pending=0,t.pending_out=0,l=f,b=0,R.dyn_tree=N,R.stat_desc=r.static_l_desc,T.dyn_tree=O,T.stat_desc=r.static_d_desc,V.dyn_tree=Q,V.stat_desc=r.static_bl_desc,nt=0,it=0,et=8,at(),function(){y=2*g,E[k-1]=0;for(let t=0;t<k-1;t++)E[t]=0;G=u[H].max_lazy,K=u[H].good_length,L=u[H].nice_length,F=u[H].max_chain,Z=0,I=0,B=0,z=C=2,S=0,U=0}(),0}t.depth=[],t.bl_count=[],t.heap=[],N=[],O=[],Q=[],t.pqdownheap=function(e,n){const i=t.heap,a=i[n];let o=n<<1;for(;o<=t.heap_len&&(o<t.heap_len&&p(e,i[o+1],i[o],t.depth)&&o++,!p(e,a,i[o],t.depth));)i[n]=i[o],n=o,o<<=1;i[n]=a},t.deflateInit=function(e,n,a,o,_,r){return o||(o=8),_||(_=8),r||(r=0),e.msg=null,-1==n&&(n=6),_<1||_>9||8!=o||a<9||a>15||n<0||n>9||r<0||r>2?i:(e.dstate=t,w=a,g=1<<w,m=g-1,M=_+7,k=1<<M,q=k-1,D=Math.floor((M+3-1)/3),v=new Uint8Array(2*g),A=[],E=[],X=1<<_+6,t.pending_buf=new Uint8Array(4*X),x=4*X,$=Math.floor(X/2),W=3*X,H=n,J=r,mt(e))},t.deflateEnd=function(){return 42!=l&&l!=f&&l!=s?i:(t.pending_buf=null,E=null,A=null,v=null,t.dstate=null,l==f?-3:0)},t.deflateParams=function(t,e,n){let a=0;return-1==e&&(e=6),e<0||e>9||n<0||n>2?i:(u[H].func!=u[e].func&&0!==t.total_in&&(a=t.deflate(1)),H!=e&&(H=e,G=u[H].max_lazy,K=u[H].good_length,L=u[H].nice_length,F=u[H].max_chain),J=n,a)},t.deflateSetDictionary=function(t,e,n){let a,o=n,_=0;if(!e||42!=l)return i;if(o<3)return 0;for(o>g-h&&(o=g-h,_=n-o),v.set(e.subarray(_,_+o),0),Z=o,I=o,U=255&v[0],U=(U<<D^255&v[1])&q,a=0;a<=o-3;a++)U=(U<<D^255&v[a+2])&q,A[a&m]=E[U],E[U]=a;return 0},t.deflate=function(e,_){let c,p,y,M,F;if(_>4||_<0)return i;if(!e.next_out||!e.next_in&&0!==e.avail_in||l==s&&4!=_)return e.msg=d[4],i;if(0===e.avail_out)return e.msg=d[7],a;var K;if(o=e,M=b,b=_,42==l&&(p=8+(w-8<<4)<<8,y=(H-1&255)>>1,y>3&&(y=3),p|=y<<6,0!==Z&&(p|=32),p+=31-p%31,l=f,_t((K=p)>>8&255),_t(255&K)),0!==t.pending){if(o.flush_pending(),0===o.avail_out)return b=-1,0}else if(0===o.avail_in&&_<=M&&4!=_)return o.msg=d[7],a;if(l==s&&0!==o.avail_in)return e.msg=d[7],a;if(0!==o.avail_in||0!==B||0!=_&&l!=s){switch(F=-1,u[H].func){case 0:F=function(t){let e,n=65535;for(n>x-5&&(n=x-5);;){if(B<=1){if(gt(),0===B&&0==t)return 0;if(0===B)break}if(Z+=B,B=0,e=I+n,(0===Z||Z>=e)&&(B=Z-e,Z=e,bt(!1),0===o.avail_out))return 0;if(Z-I>=g-h&&(bt(!1),0===o.avail_out))return 0}return bt(4==t),0===o.avail_out?4==t?2:0:4==t?3:1}(_);break;case 1:F=function(t){let e,n=0;for(;;){if(B<h){if(gt(),B<h&&0==t)return 0;if(0===B)break}if(B>=3&&(U=(U<<D^255&v[Z+2])&q,n=65535&E[U],A[Z&m]=E[U],E[U]=Z),0!==n&&(Z-n&65535)<=g-h&&2!=J&&(z=wt(n)),z>=3)if(e=st(Z-j,z-3),B-=z,z<=G&&B>=3){z--;do{Z++,U=(U<<D^255&v[Z+2])&q,n=65535&E[U],A[Z&m]=E[U],E[U]=Z}while(0!=--z);Z++}else Z+=z,z=0,U=255&v[Z],U=(U<<D^255&v[Z+1])&q;else e=st(0,255&v[Z]),B--,Z++;if(e&&(bt(!1),0===o.avail_out))return 0}return bt(4==t),0===o.avail_out?4==t?2:0:4==t?3:1}(_);break;case 2:F=function(t){let e,n,i=0;for(;;){if(B<h){if(gt(),B<h&&0==t)return 0;if(0===B)break}if(B>=3&&(U=(U<<D^255&v[Z+2])&q,i=65535&E[U],A[Z&m]=E[U],E[U]=Z),C=z,P=j,z=2,0!==i&&C<G&&(Z-i&65535)<=g-h&&(2!=J&&(z=wt(i)),z<=5&&(1==J||3==z&&Z-j>4096)&&(z=2)),C>=3&&z<=C){n=Z+B-3,e=st(Z-1-P,C-3),B-=C-1,C-=2;do{++Z<=n&&(U=(U<<D^255&v[Z+2])&q,i=65535&E[U],A[Z&m]=E[U],E[U]=Z)}while(0!=--C);if(S=0,z=2,Z++,e&&(bt(!1),0===o.avail_out))return 0}else if(0!==S){if(e=st(0,255&v[Z-1]),e&&bt(!1),Z++,B--,0===o.avail_out)return 0}else S=1,Z++,B--}return 0!==S&&(e=st(0,255&v[Z-1]),S=0),bt(4==t),0===o.avail_out?4==t?2:0:4==t?3:1}(_)}if(2!=F&&3!=F||(l=s),0==F||2==F)return 0===o.avail_out&&(b=-1),0;if(1==F){if(1==_)lt(2,3),ut(n,r.static_ltree),ft(),1+et+10-it<9&&(lt(2,3),ut(n,r.static_ltree),ft()),et=7;else if(pt(0,0,!1),3==_)for(c=0;c<k;c++)E[c]=0;if(o.flush_pending(),0===o.avail_out)return b=-1,0}}return 4!=_?0:1}}function b(){const t=this;t.next_in_index=0,t.next_out_index=0,t.avail_in=0,t.total_in=0,t.avail_out=0,t.total_out=0}b.prototype={deflateInit:function(t,e){const n=this;return n.dstate=new x,e||(e=15),n.dstate.deflateInit(n,t,e)},deflate:function(t){const e=this;return e.dstate?e.dstate.deflate(e,t):i},deflateEnd:function(){const t=this;if(!t.dstate)return i;const e=t.dstate.deflateEnd();return t.dstate=null,e},deflateParams:function(t,e){const n=this;return n.dstate?n.dstate.deflateParams(n,t,e):i},deflateSetDictionary:function(t,e){const n=this;return n.dstate?n.dstate.deflateSetDictionary(n,t,e):i},read_buf:function(t,e,n){const i=this;let a=i.avail_in;return a>n&&(a=n),0===a?0:(i.avail_in-=a,t.set(i.next_in.subarray(i.next_in_index,i.next_in_index+a),e),i.next_in_index+=a,i.total_in+=a,a)},flush_pending:function(){const t=this;let e=t.dstate.pending;e>t.avail_out&&(e=t.avail_out),0!==e&&(t.next_out.set(t.dstate.pending_buf.subarray(t.dstate.pending_out,t.dstate.pending_out+e),t.next_out_index),t.next_out_index+=e,t.dstate.pending_out+=e,t.total_out+=e,t.avail_out-=e,t.dstate.pending-=e,0===t.dstate.pending&&(t.dstate.pending_out=0))}},t.ZipDeflater=function(t){const e=new b,n=512,i=new Uint8Array(n);let a=t?t.level:-1;void 0===a&&(a=-1),e.deflateInit(a),e.next_out=i,this.append=function(t,a){let o,_,r=0,l=0,u=0;const d=[];if(t.length){e.next_in_index=0,e.next_in=t,e.avail_in=t.length;do{if(e.next_out_index=0,e.avail_out=n,o=e.deflate(0),0!=o)throw new Error("deflating: "+e.msg);e.next_out_index&&(e.next_out_index==n?d.push(new Uint8Array(i)):d.push(new Uint8Array(i.subarray(0,e.next_out_index)))),u+=e.next_out_index,a&&e.next_in_index>0&&e.next_in_index!=r&&(a(e.next_in_index),r=e.next_in_index)}while(e.avail_in>0||0===e.avail_out);return _=new Uint8Array(u),d.forEach((function(t){_.set(t,l),l+=t.length})),_}},this.flush=function(){let t,a,o=0,_=0;const r=[];do{if(e.next_out_index=0,e.avail_out=n,t=e.deflate(4),1!=t&&0!=t)throw new Error("deflating: "+e.msg);n-e.avail_out>0&&r.push(new Uint8Array(i.subarray(0,e.next_out_index))),_+=e.next_out_index}while(e.avail_in>0||0===e.avail_out);return e.deflateEnd(),a=new Uint8Array(_),r.forEach((function(t){a.set(t,o),o+=t.length})),a}}}(this);