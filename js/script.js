// 구조를 구성하는 부분
// 2차 배열 패턴 (기준 articel)
// ["구분(Dsign, Publishing, Develop, App)", 이미지", "타이틀", ["소스마크1", "소스마크2", "소스마크3",...], "내용", "사이트 링크 주소"]

const portArr = [
    ["Publiching", "earthin.png", "earth in", ["html5.png","css-3.png","js.png"], "지구환경을 보호하는 사람들의 커뮤니티 사이트 제작", "http://15orry.pe.kr/earthin/"],
    ["Publiching", "kuliner.png", "Kuliner", ["html5.png","css-3.png"], "Kuliner Restaurant 사이트 제작", "https://15orry.github.io/kuliner/"],
    ["Publiching", "cakehouse.png", "Cakeous", ["html5.png","css-3.png"], "Cakeous website renewal", "https://15orry.github.io/cake-house/"],
    ["Publiching", "cashmere.png", "Cashmere", ["html5.png","css-3.png"], "Cashmere website 제작", "https://15orry.github.io/cashmere/"],
    ["Publiching", "weatherApp.png", "Weather App", ["html5.png","css-3.png"], "Weather App 사이트 제작", "https://15orry.github.io/weatherMap/"],
    ["Publiching", "chattingApp.png", "Chatting App", ["html5.png","css-3.png","js.png"], "Chatting App 사이트 제작", "http://j15orry.dothome.co.kr/chattingApp/"],
    ["SPA", "national_geographic.png", "National Geographic", ["html5.png","css-3.png","js.png","vue.png"], "National Geograpic Website renewal"],
    ["Publiching", "audition_vue.png", "Film Makers", ["html5.png","css-3.png","js.png","vue.png"], "Film Makers 사이트 리뉴얼", "https://15orry.github.io/film_makers/"],
];

let circling = document.querySelector("#circling");

let iconList = ``;
let articleBox = ``;
portArr.forEach((v,i,a) => {
    iconList =``; //forEach 문에서 초기화
    
    for(m of v[3]){
        iconList += `<li><img src="./img/${m}" alt=""></li>`;
    }

    console.log(`${i}번째 ${iconList}`);

    articleBox += `
    <article class="surface2" style="--i:${i+1}">
        <h1>${v[0]}</h1>
        <div class="inner">
            <div class="space">
                <div class="web_img" style="background-image:url(./img/view/${v[1]})"></div>
                <div class="web_info">
                    <div class="top">
                        <h3>${v[2]}</h3>
                        <ul>
                            ${iconList}
                        </ul>
                    </div>
                    <div class="bottom">
                        <p>${v[4]}</p>
                        <p>UX 관점에서 접근하여 BI의 파급효과</p>
                        <div class="detail_btn">
                            <a href="${v[5]}">Detial More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
    `;
});
circling.innerHTML = articleBox;





// 사용자에 의한 회전 일시정지 (마우스오버)
const articles = circling.querySelectorAll("article");
for(v of articles){
    console.log(v);
    
    v.addEventListener("mouseenter", ()=>{
        circling.style.animationPlayState = "paused";
    })
    v.addEventListener("mouseleave", ()=>{
        circling.style.animationPlayState = "running";
    })
}


// 사용자에 의한 회전 일시정지 (버튼클릭)
const ctrlBtn = document.querySelector(".controlBtn");
ctrlBtn.addEventListener("click", ()=>{
    const $active = ctrlBtn.classList.contains("active");

    if(!$active){
        ctrlBtn.classList.add("active");
        circling.style.animationPlayState = "paused";
        ctrlBtn.querySelector("img").setAttribute("src", "./img/play.svg");
    }else{
        ctrlBtn.classList.remove("active");
        circling.style.animationPlayState = "running";
        ctrlBtn.querySelector("img").setAttribute("src", "./img/pause.svg");
    }
})