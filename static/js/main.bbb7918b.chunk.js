(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{131:function(e,t,a){e.exports={movie_list:"style_movie_list__2T1z0",spinner:"style_spinner__EXFOo",pagination:"style_pagination__3yRkR"}},186:function(e,t,a){e.exports={favorites__movie:"style_favorites__movie__8dkvA"}},193:function(e,t,a){e.exports=a(328)},198:function(e,t,a){},203:function(e,t,a){},220:function(e,t,a){},251:function(e,t,a){},327:function(e,t,a){},328:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),o=a(4),n=a.n(o),s=(a(198),a(27)),c=a(28),l=a(34),m=a(33),_=a(32),v=(a(203),a(107)),p=a.n(v),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.page,a=void 0===t?1:t;return function(e){e({type:"movies/LOAD_MOVIES_PENDING"}),p()("https://api.themoviedb.org/3/discover/movie?api_key=4fbb4691e328ec322d3358761a861113&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=".concat(a,"\n    ")).then((function(t){var i=t.data;e({type:"movies/LOAD_MOVIES_FULFILLED",payload:{total:i.total_results,items:i.results,page:a}})})).catch((function(t){e({type:"movies/LOAD_MOVIES_REJECTED",payload:t.message})}))}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.query,a=e.page;return function(e){p()("https://api.themoviedb.org/3/search/movie?api_key=4fbb4691e328ec322d3358761a861113&page=".concat(a,"&query=").concat(t)).then((function(t){var a=t.data;e({type:"movies/SEARCH_MOVIES",payload:{total:a.total_results,items:a.results}})}))}},h=a(13),f=a(8),g=a(47),E=(a(220),a(59)),b=(a(147),a(54)),y=(a(109),a(55));var w=function(e){var t=e.movie;return r.a.createElement("div",{key:t.id,className:"movie-block"},t.poster_path&&r.a.createElement(b.LazyLoadImage,{alt:"moviePoster",src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),width:250,height:345,effect:"blur"}),!t.poster_path&&r.a.createElement(b.LazyLoadImage,{alt:"moviePoster",src:"https://via.placeholder.com/230x345",width:250,height:345,effect:"blur"}),r.a.createElement("div",{className:"movie-info"},r.a.createElement("h4",{className:"movie-title"},t.title),r.a.createElement("p",{className:"movie-rating"},"Movie rating:",t.vote_average&&r.a.createElement("div",{className:"progress-wrapper"},r.a.createElement(E.a,{strokeWidth:"5",value:10*t.vote_average,text:t.vote_average,styles:Object(E.b)({textSize:"36px",pathColor:"rgba(0,40,161,1)"})})),!t.vote_average&&r.a.createElement("div",{className:"progress-wrapper"},r.a.createElement(E.a,{strokeWidth:"5",value:"0",text:"0",styles:Object(E.b)({textSize:"36px",pathColor:"rgba(0,40,161,1)"})}))),r.a.createElement("div",{className:"ellipsis"},r.a.createElement("p",{className:"movie-descr"}," Movie description:",t.overview)),r.a.createElement("p",{className:"movie-data"},"Movie data release:",t.release_date),r.a.createElement("div",{className:"movie__button-wrapper"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.themoviedb.org/movie/".concat(t.id)},r.a.createElement(y.a,{type:"primary"},"Check movie")),r.a.createElement(y.a,{type:"primary"},r.a.createElement(h.b,{to:"/movie/"+t.id,className:"movie__details"},"Details")))))},O=a(330),N=a(334),S=a(131),k=a.n(S),M=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.loading,a=e.error,i=r.a.createElement(N.a,{style:{fontSize:"150px"},spin:!0});return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},t&&r.a.createElement("div",{className:k.a.spinner},r.a.createElement(O.a,{indicator:i})),a&&r.a.createElement("h3",null,"$",a),!t&&r.a.createElement("div",{className:k.a.movie_list},this.props.moviesList.map((function(e){return r.a.createElement(w,{key:e.id,movie:e})})))))}}]),a}(i.Component),j=Object(_.b)((function(e){var t=e.movies;return{moviesList:t.list,loading:t.loading,error:t.error,isSearch:t.isSearch}}),{loadMovies:u,searchMovies:d})(M),I=a(67),C=a.n(I),x=a(333),L=a(331),D=(a(251),a(170)),A=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={menuOpen:!1},e}return Object(c.a)(a,[{key:"closeMenu",value:function(){this.setState({menuOpen:!1})}},{key:"handleStateChange",value:function(e){this.setState({menuOpen:e.isOpen})}},{key:"render",value:function(){var e=this;return r.a.createElement(D.elastic,{isOpen:this.state.menuOpen,onStateChange:function(t){return e.handleStateChange(t)},pageWrapId:"wrapper",outerContainerId:"root"},r.a.createElement(h.b,{to:"/",id:"home",className:"menu-item",href:"/",onClick:function(){return e.closeMenu()}},"Home"),r.a.createElement(h.b,{to:"/favorites",id:"home",className:"menu-item",href:"/",onClick:function(){return e.closeMenu()}},"Favorites"),r.a.createElement(h.b,{to:"/about",id:"home",className:"menu-item",href:"/",onClick:function(){return e.closeMenu()}},"About"))}}]),a}(r.a.Component),F=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))).state={isSearch:!1,isMounted:!1,inputValue:""},e.inputRef=r.a.createRef(),e.handlePageChange=function(t){if(document.body.scrollIntoView(),e.state.isSearch)return e.props.searchMovies({page:t,query:e.state.inputValue});e.props.loadMovies({page:t})},e.searchHandler=function(t){t.preventDefault();var a=Object(g.a)(t.target,1)[0];e.props.searchMovies({query:a.value}),e.setState({isSearch:!0})},e.clearSearch=function(t){e.setState({isSearch:!1,inputValue:""}),e.props.loadMovies()},e.changeMount=function(){e.setState({isMounted:!0})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement("div",{className:C.a.wrapper,id:"wrapper"},r.a.createElement("div",{className:C.a.search},r.a.createElement("h3",{className:C.a.search__title},"Movie search"),r.a.createElement("form",{className:C.a.search__form,onSubmit:this.searchHandler},r.a.createElement(x.a,{onChange:function(t){e.setState({inputValue:t.target.value})},value:this.state.inputValue,className:C.a.search__input,ref:this.inputRef,placeholder:"Start enter movies name to search"})),r.a.createElement(y.a,{onClick:this.clearSearch},"Clear search")),r.a.createElement(j,null),r.a.createElement("div",{className:C.a.pagination},r.a.createElement(L.a,{defaultCurrent:1,total:this.props.total,pageSize:20,showSizeChanger:!1,onChange:this.handlePageChange}))))}}]),a}(i.PureComponent),P=Object(_.b)((function(e){return{total:e.movies.total}}),{loadMovies:u,searchMovies:d})(F),W=a(77),V=a(5),z=a.n(V),B=(a(120),a(133)),R=a.n(B),J=(a(289),a(332)),T=a(1),H=a.n(T),q=a(50),G=a.n(q),U=function(e){var t=e.item,a=Object(i.useState)(!1),o=Object(g.a)(a,2),n=o[0],s=o[1];return r.a.createElement("div",{className:H()(G.a.review,Object(W.a)({},G.a.full,n))},r.a.createElement("h4",{className:G.a.movie__reviewAuthor},"Review by: ",t.author),r.a.createElement(y.a,{type:"primary",className:G.a.movie__btnShowFull,onClick:function(){return s(!0)}},"Show full"),r.a.createElement("p",{className:G.a.movie__reviewText},t.content))};function K(e){var t=e.movieId,a=Object(i.useState)([]),o=Object(g.a)(a,2),n=o[0],s=o[1];return Object(i.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=4fbb4691e328ec322d3358761a861113")).then((function(e){return e.json()})).then((function(e){s(e.results)}))}),[t]),r.a.createElement("div",{className:G.a.movie__reviews},r.a.createElement("h3",{className:G.a.reviews__title},"Reviews"),0===n.length&&r.a.createElement("p",null,"There are no reviews"),n&&r.a.createElement("div",{className:G.a.movie__reviewWrapper},n.map((function(e){return r.a.createElement(U,{key:e.id,item:e})}))))}var X=a(90),Z=a.n(X);function Q(e){var t=e.movieId,a=Object(i.useState)([]),o=Object(g.a)(a,2),n=o[0],s=o[1];return Object(i.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(t,"/similar?api_key=4fbb4691e328ec322d3358761a861113")).then((function(e){return e.json()})).then((function(e){s(e.results)}))}),[t]),r.a.createElement("div",null,r.a.createElement("h3",{className:Z.a.similar__title},"Similar movies"),r.a.createElement("div",{className:Z.a.similarMovies},n.map((function(e){return r.a.createElement(h.b,{key:e.id,to:"/movie/"+e.id},r.a.createElement("div",{className:Z.a.similarMovie},r.a.createElement("div",{className:Z.a.moviePosterWrapper},e.poster_path&&r.a.createElement(b.LazyLoadImage,{alt:"moviePoster",src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),effect:"blur",width:180,height:270}),!e.poster_path&&r.a.createElement(b.LazyLoadImage,{alt:"moviePoster",src:"'https://via.placeholder.com/100x150'",effect:"blur",width:180,height:270}))))}))))}var Y=a(78),$=a.n(Y),ee=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],cast:[],teaser:[],visible:!1,isFavorite:!1},e.toggleFavorites=function(t){return function(a){var i=JSON.parse(window.localStorage.getItem("favorites")),r=i.findIndex((function(t){return t.id===e.props.movie.id}));-1!==r?(i.splice(r,1),e.setState({isFavorite:!1})):(i.push(t),e.setState({isFavorite:!0})),window.localStorage.setItem("favorites",JSON.stringify(i)),e.forceUpdate()}},e.showModal=function(){e.setState({visible:!0})},e.closeModal=function(t){e.setState({visible:!1})},e}return Object(c.a)(a,[{key:"getMovieImg",value:function(){var e=this;fetch("https://api.themoviedb.org/3/movie/".concat(this.props.match.params.id,"/images?api_key=4fbb4691e328ec322d3358761a861113")).then((function(e){return e.json()})).then((function(t){e.setState({images:t.backdrops})}))}},{key:"getMovieCast",value:function(){var e=this;fetch("https://api.themoviedb.org/3/movie/".concat(this.props.match.params.id,"?api_key=4fbb4691e328ec322d3358761a861113&append_to_response=credits")).then((function(e){return e.json()})).then((function(t){e.setState({cast:t.credits.cast})}))}},{key:"getMovieTeaser",value:function(){var e=this;fetch("https://api.themoviedb.org/3/movie/".concat(this.props.match.params.id,"/videos?api_key=4fbb4691e328ec322d3358761a861113&language=en-US")).then((function(e){return e.json()})).then((function(t){e.setState({teaser:t.results.slice(0,1)})}))}},{key:"toggleFullReview",value:function(){this.reviewRef.current.addClass("full")}},{key:"loadMovieData",value:function(){this.props.getMovie(this.props.match.params.id),this.getMovieImg(),this.getMovieCast(),this.getMovieTeaser()}},{key:"componentDidMount",value:function(){this.loadMovieData()}},{key:"componentDidUpdate",value:function(e){e.match.params.id!==this.props.match.params.id&&this.loadMovieData()}},{key:"render",value:function(){var e=this,t=this.props,a=t.movie,i=t.loading,o=t.match.params.id,n=JSON.parse(window.localStorage.getItem("favorites")).find((function(e){return e.id===a.id})),s=n?"Remove from favorites":"Add to favorites",c=Object(g.a)(this.state.images,1)[0],l=void 0===c?{}:c;console.log(a.genres);var m=r.a.createElement(N.a,{style:{fontSize:"150px"},spin:!0});return r.a.createElement("div",null,i&&r.a.createElement("div",{className:z.a.spinner},r.a.createElement(O.a,{indicator:m})),!i&&r.a.createElement("div",{className:z.a.movie},r.a.createElement(h.b,{className:z.a.movie__btnBack,to:"/"},r.a.createElement("img",{alt:"btnBack",src:$.a})," "),r.a.createElement("div",{className:z.a.movie__wrapper_first,style:{backgroundImage:"url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/".concat(l.file_path,")")}},r.a.createElement("div",{className:z.a.poster_btn_wrapper},r.a.createElement("div",{className:z.a.movie__poster},r.a.createElement(b.LazyLoadImage,{src:"https://image.tmdb.org/t/p/w500/".concat(a.poster_path),alt:"img",effect:"blur"})),r.a.createElement("div",{className:z.a.movie_action_wrapper},r.a.createElement("button",{onClick:this.toggleFavorites(a),className:H()(z.a.addFavorite,Object(W.a)({},z.a.inFavorites,!n))}," ",s),r.a.createElement("div",{className:z.a.movie__trailer},r.a.createElement(y.a,{type:"primary",onClick:this.showModal},"Watch trailer"),this.state.visible&&this.state.teaser.map((function(t){return r.a.createElement(J.a,{width:"960px",footer:null,title:e.props.movie.original_title,visible:e.state.visible,onCancel:e.closeModal},r.a.createElement("iframe",{title:"video",width:"100%",height:"480px",src:"https://www.youtube.com/embed/".concat(t.key),frameborder:"0",allowfullscreen:!0}))}))))),r.a.createElement("div",{className:z.a.movie__info},r.a.createElement("div",{className:z.a.movie__titleWrapper},r.a.createElement("h4",{className:z.a.movie__title},a.original_title),r.a.createElement("div",{className:z.a.progressWwrapper},r.a.createElement(E.a,{strokeWidth:"5",value:10*a.vote_average,text:a.vote_average,styles:Object(E.b)({textSize:"36px"})}))),r.a.createElement("div",{className:z.a.movie__genres},a.movie&&a.genres.map((function(e){return r.a.createElement("p",{className:z.a.movie__genre},e.name)}))),r.a.createElement("p",null,a.tagline),r.a.createElement("div",{className:z.a.movie__overview},r.a.createElement("h4",{className:z.a.overview__title},"Overview"),r.a.createElement("p",{className:z.a.overview},a.overview)))),r.a.createElement("div",{className:z.a.movie__wrapper_second},r.a.createElement("div",{className:z.a.movie__images},r.a.createElement("h3",{className:z.a.movie__images_title},"Movies media"),r.a.createElement(R.a,{centered:!0,slidesPerPage:3,slidesPerScroll:2,infinite:!0,lazyLoad:!0,autoPlay:5e3,animationSpeed:3e3},this.state.images.map((function(e){return r.a.createElement("img",{className:z.a.movie__image,key:a.id,alt:"movie img",src:"https://image.tmdb.org/t/p/w500/".concat(e.file_path)})})))),r.a.createElement("div",{className:z.a.movie__cast},r.a.createElement("h3",{className:z.a.movie__cast_title},"Movies cast"),r.a.createElement(R.a,{slidesPerPage:10,slidesPerScroll:5,infinite:!0,lazyLoad:!0,autoPlay:5e3,animationSpeed:3e3},this.state.cast.map((function(e){return r.a.createElement("div",{key:e.id,className:z.a.movie__actor},e.profile_path&&r.a.createElement("img",{alt:"actor_photo",src:"https://image.tmdb.org/t/p/w500/".concat(e.profile_path)}),!e.profile_path&&r.a.createElement("img",{src:"https://via.placeholder.com/100x150",alt:"noimg"}),r.a.createElement("p",{className:z.a.actor__name},e.name),r.a.createElement("p",{className:z.a.actor__character},r.a.createElement("strong",null,"Character: "),e.character))})))),r.a.createElement("div",{className:z.a.similar_review_wrapper},r.a.createElement(K,{movieId:o}),r.a.createElement(Q,{movieId:o})))))}}]),a}(i.Component),te=Object(_.b)((function(e){var t=e.movies;return{movie:t.movie,loading:t.loading}}),{getMovie:function(e){return function(t){t({type:"movies/LOAD_MOVIES_PENDING"}),p()("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=4fbb4691e328ec322d3358761a861113")).then((function(e){var a=e.data;t({type:"movies/GET_MOVIE",payload:a})}))}}})(ee);a(327);function ae(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.b,{className:"movie__btnBack",to:"/"},r.a.createElement("img",{alt:"btnBack",src:$.a})," "),r.a.createElement("div",{className:"greeting"},r.a.createElement("h4",{className:"greeting__title"},"Hello!"),r.a.createElement("div",{className:"greeting__text"}," ",r.a.createElement("p",null,"This is my final projects in Beetroot Acadamy(sad to say it)"),r.a.createElement("p",null,"In this app i try to learn react,redux, etc")),r.a.createElement("p",null,"At this momment you can search movies, then you can go to ",r.a.createElement("a",{href:"https://www.themoviedb.org/?language=uk"},"MovieDb site")," and check movie info or you can click on Details and also see movie info, add movie to favorite, watch trailer, see reviews, media, cast")))}var ie=a(186),re=a.n(ie),oe=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=window.JSON.parse(localStorage.getItem("favorites"));return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.b,{className:"movie__btnBack",to:"/"},r.a.createElement("img",{alt:"btnBack",src:$.a})," "),r.a.createElement("div",{className:re.a.favorites__movie},e.map((function(e){return r.a.createElement("div",null,r.a.createElement(w,{key:e.id,movie:e}),"))")}))))}}]),a}(i.Component),ne=Object(_.b)((function(e){return{movieList:e.movies.list}}))(oe),se=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.loadMovies(),window.localStorage.getItem("favorites")||window.localStorage.setItem("favorites","[]")}},{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(f.a,{path:"/",exact:!0,component:P}),r.a.createElement(f.a,{path:"/movie/:id",exact:!0,component:te}),r.a.createElement(f.a,{path:"/about",exact:!0,component:ae}),r.a.createElement(f.a,{path:"/favorites",exact:!0,component:ne}))}}]),a}(i.Component),ce=Object(_.b)((function(e){var t=e.movies;return{loading:t.loading,error:t.error,total:t.total}}),{loadMovies:u,searchMovies:d})(se),le=a(191),me=a(42),_e={list:[],loaded:!1,loading:!1,error:null,total:0,movie:{},isSearch:!1};var ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"movies/LOAD_MOVIES_FULFILLED":return Object(me.a)(Object(me.a)({},e),{},{list:t.payload.items,total:t.payload.total,loading:!1,isSearch:!1});case"movies/LOAD_MOVIES_PENDING":return Object(me.a)(Object(me.a)({},e),{},{loading:!0,error:null});case"movies/LOAD_MOVIES_REJECTED":return Object(me.a)(Object(me.a)({},e),{},{loading:!1,error:t.payload});case"movies/SEARCH_MOVIES":return Object(me.a)(Object(me.a)({},e),{},{list:t.payload.items,total:t.payload.total,loading:!1,isSearch:!0});case"movies/GET_MOVIE":return Object(me.a)(Object(me.a)({},e),{},{movie:t.payload,loading:!1});default:return e}},pe=a(89),ue=Object(le.a)({reducer:{movies:ve,search:{items:[]}},middleware:[pe.a],devTools:!0});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_.a,{store:ue},r.a.createElement(ce,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,t,a){e.exports={movie:"style_movie__6pc-p",movie__wrapper_first:"style_movie__wrapper_first__1fD9i",movie__poster:"style_movie__poster__J-Bd5",poster_btn_wrapper:"style_poster_btn_wrapper__1nGSJ",progressWwrapper:"style_progressWwrapper__bXIr5",movie_action_wrapper:"style_movie_action_wrapper__3SeHD",movie__info:"style_movie__info__3leEm",movie__titleWrapper:"style_movie__titleWrapper__B6MVA",movie__title:"style_movie__title__1qkKe",movie__genres:"style_movie__genres__2MLHB",movie__genre:"style_movie__genre__2JORg",overview__title:"style_overview__title__1UvJg",movie__wrapper_second:"style_movie__wrapper_second__3CjZT",movie__images:"style_movie__images__1Lt6M",movie__images_title:"style_movie__images_title__xSVZK",movie__image:"style_movie__image__1jowO",movie__btnBack:"style_movie__btnBack__WLUSD",movie__cast_title:"style_movie__cast_title__2o2Mo",movie__cast:"style_movie__cast__3Htar",movie__actor:"style_movie__actor__38Hew",actor__name:"style_actor__name__pkEK0",movie__addFav:"style_movie__addFav__2lF7H",movie__reviewWrapper:"style_movie__reviewWrapper__2McpY",movie__reviewAuthor:"style_movie__reviewAuthor__1VoeQ",similar_review_wrapper:"style_similar_review_wrapper__2AoIe",addFavorite:"style_addFavorite__232LI",inFavorites:"style_inFavorites__1Cd_X",spinner:"style_spinner__36n9q"}},50:function(e,t,a){e.exports={movie__reviews:"style_movie__reviews__2bGgs",review:"style_review__2q6rQ",reviews__title:"style_reviews__title__2KKmJ",movie__reviewAuthor:"style_movie__reviewAuthor__1XGbT",full:"style_full__1q75v","ant-modal-body":"style_ant-modal-body__3B1W2"}},67:function(e,t,a){e.exports={wrapper:"style_wrapper__1brSZ",search:"style_search__2ZDIW",search__title:"style_search__title__KPr7x",search__form:"style_search__form__38A7D",search__input:"style_search__input__1bsf3","ant-input":"style_ant-input__3VCnJ",pagination:"style_pagination__3Sz_E"}},78:function(e,t,a){e.exports=a.p+"static/media/back.f5c3cdf5.svg"},90:function(e,t,a){e.exports={similarMovies:"style_similarMovies__2ILMg",moviePosterWrapper:"style_moviePosterWrapper__2_9hu",similarMovie:"style_similarMovie__3AO8Y",similar__title:"style_similar__title__3MtSE"}}},[[193,1,2]]]);
//# sourceMappingURL=main.bbb7918b.chunk.js.map